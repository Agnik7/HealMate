import google.generativeai as genai
import os
from flask import jsonify
import PIL.Image
from database.firebaseConn import Firebase
from database.database import Database
import PIL
import datetime
import random
from pathlib import Path

class Generate:
    def __init__(self, api_key):
        """ 
        Contructor to initialise the global variables. It configures the model to be used.

        Args: api_key: str
        
        Returns: None            
        """
        self.API = api_key
        genai.configure(api_key=self.API)
        self.modelText = genai.GenerativeModel('gemini-pro')
        self.modelImage = genai.GenerativeModel('gemini-pro-vision')
        self.GEMINI_TEXT_PROMPT = os.environ.get("GEMINI_TEXT_PROMPT")
        self.GEMINI_IMAGE_PROMPT = os.environ.get("GEMINI_IMAGE_PROMPT")
        self.database = Database()
    
    def cloud_upload(self, full_save_path,new_name):
        """ 
        Function to upload the image to the Firebase Cloud

        Args: full_save_path :str, new_name :str
        
        Returns: JSON regarding status of function
        """
        firebase = Firebase()
        res = firebase.upload_files(full_save_path,new_name)
        if res is not None:
            return jsonify({"status_code": 200,"message": "Image uploaded successfully."}),200
        else:
           return jsonify({"status_code": 500,"message": "Error Uploading image"}),500 
        
    def cloud_delete(self, image):
        """ 
        Function to delete the image from the Firebase Cloud

        Args: image :str
        
        Returns: JSON regarding status of function
        """
        firebase = Firebase()
        res = firebase.delete_files(image)
        if res is not None:
            return jsonify({"status_code": 200,"message": "Image uploaded successfully."}),200
        else:
           return jsonify({"status_code": 500,"message": "Error Uploading image"}),500 
    
    def identify_text_disease(self,symptoms):
        """ 
        Function to identify the disease based on symptoms given by user.

        Args: symptoms :str
        
        Returns: response.text :str
        """
        print(f"====== Symptoms: {symptoms} =====")
        prompt = f"I am suffering from {symptoms}. Identify the disease.Provide the common name of the disease. Provide only the disease name and nothing else."
        response = self.modelText.generate_content(prompt)
        print(f"====== Symptoms: {response} =====")
        return response.text

    def parse_response(self,response):
        """ 
        Function to segregate the model's response as per our needs

        Args: response :str
        
        Returns: names :list, addresses :list, mobiles :list
        """
        entries = response.split('\n')
        names = []
        addresses = []
        mobiles = []
        for entry in entries:
            if entry:
                dr_index = entry.find("Dr. ")
                if dr_index != -1:
                    colon_index = entry.find(":", dr_index)
                    if colon_index != -1:
                        name = entry[dr_index + 3:colon_index].strip()
                        names.append(name)
                        address_mobile_part = entry[colon_index + 1:].split(':')
                        if len(address_mobile_part) == 2:
                            addresses.append(address_mobile_part[0].strip())
                            mobiles.append(address_mobile_part[1].strip())
        return names, addresses, mobiles

    def generate_random_name(self, image_path):
        """ 
        Function to generate a unique name for the image to be stored in the firebase cloud

        Args: image_path :str
        
        Returns: new_name :str
        """
        _, extension = os.path.splitext(image_path)
        random_string = ''.join(random.choices('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', k=6))
        current_datetime = datetime.datetime.now().strftime("%m-%d-%Y_%H-%M-%S")
        new_name = f"{random_string}{current_datetime}{extension}"
        return new_name
    
    def get_image_list(self,location,image, user_email):
        """ 
        Function to generate the list of doctors by analysing the image provided by user

        Args: location :str, image :file, user_email :str
        
        Returns: generated_data :list
        """
        IMG_PROMPT = os.environ.get("GEMINI_IMAGE_GEN_PROMPT")
        image_path = image.filename
        new_name = self.generate_random_name(image_path)
        database_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "database")
        full_save_path = os.path.join(database_dir, new_name)
        image.save(full_save_path)
        img = PIL.Image.open(image)
        self.cloud_upload(full_save_path,new_name)
        r_image = self.modelImage.generate_content([IMG_PROMPT, img], stream=True)
        r_image.resolve()
        print(r_image.text)
        prompt = eval(f'f"{self.GEMINI_IMAGE_PROMPT}"')
        response = self.modelText.generate_content(prompt)
        self.cloud_delete(new_name) 
        names, addresses, mobiles = self.parse_response(response.text)

        generated_data = self.database.update_list(user_email, r_image.text, names, addresses, mobiles)
        return generated_data 
    
    def get_text_list(self,location,symptoms, user_email):
        """ 
        Function to generate the list of doctors by analysing the image provided by user

        Args: location :str, symptoms :str, user_email :str
        
        Returns: generated_data :list
        """
        print(f"====== Symptoms: {symptoms} =====")
        disease = self.identify_text_disease(symptoms)
        print(f"====== Disease: {disease} =====")
        prompt = eval(f'f"{self.GEMINI_TEXT_PROMPT}"')
        response = self.modelText.generate_content(prompt)
        names, addresses, mobiles = self.parse_response(response.text)
        generated_data = self.database.update_list(user_email, disease, names, addresses, mobiles)
        print(generated_data)
        return generated_data
