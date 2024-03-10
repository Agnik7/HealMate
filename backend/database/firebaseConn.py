import pyrebase
import os
from flask import jsonify


class Firebase:
    def __init__(self):
        """ 
        Contructor to initialise the global variables. It configures the cloud setup.

        Args: None
        
        Returns: None            
        """
        self.FIREBASE_API_KEY = os.environ.get("FIREBASE_API_KEY")
        self.FIREBASE_AUTH_DOMAIN = os.environ.get("FIREBASE_AUTH_DOMAIN")
        self.FIREBASE_DATABASE_URL = os.environ.get("FIREBASE_DATABASE_URL")
        self.FIREBASE_PROJECT_ID = os.environ.get("FIREBASE_PROJECT_ID")
        self.FIREBASE_STORAGE_BUCKET=os.environ.get("FIREBASE_STORAGE_BUCKET")
        self.FIREBASE_MESSAGE_SENDER_ID=os.environ.get("FIREBASE_MESSAGE_SENDER_ID")
        self.FIREBASE_APP_ID=os.environ.get("FIREBASE_APP_ID")
        self.FIREBASE_MEASUREMENT_ID=os.environ.get("FIREBASE_MEASUREMENT_ID")
        self.config = {
            "apiKey": self.FIREBASE_API_KEY,
            "authDomain": self.FIREBASE_AUTH_DOMAIN,
            "databaseURL":self.FIREBASE_DATABASE_URL,
            "projectId": self.FIREBASE_PROJECT_ID,
            "storageBucket": self.FIREBASE_STORAGE_BUCKET,
            "messagingSenderId": self.FIREBASE_MESSAGE_SENDER_ID,
            "appId": self.FIREBASE_APP_ID,
            "measurementId": self.FIREBASE_MEASUREMENT_ID
        }
        self.firebase = pyrebase.initialize_app(self.config)
        self.storage = self.firebase.storage()
        self.cloud_storage_path = '/' 
    
    def upload_files(self,local_image_path, file_name):
        """ 
        Function to upload the image to the Firebase Cloud

        Args: local_image_path :str, file_name :str
        
        Returns: JSON regarding status of function
        """
        try:
            print(self.storage)
            self.storage.child(f"{self.cloud_storage_path}{file_name}").put(local_image_path)
            print("Image uploaded successfully.")
            os.remove(local_image_path)
            return jsonify({"status_code": 200,"message": "Image Successfully Uploaded."}),200
        except Exception as e:
            return jsonify({"status_code": 500,"message": "Error Uploading image"}),500
    def delete_files(self,local_image_path):
        """ 
        Function to delete the image to the Firebase Cloud

        Args: local_image_path :str
        
        Returns: JSON regarding status of function
        """
        try:
            self.storage.delete(token=None, name=f"{local_image_path}")
            print("Image deleted successfully.")
            return jsonify({"status_code": 200,"message": "Image Successfully Deleted"}),200
        except Exception as e:
            print("Error deleting image:", e)
            return jsonify({"status_code": 500,"message": "Error Deleting image"}),500