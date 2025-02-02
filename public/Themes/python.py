import os
from PIL import Image

def convert_to_webp(image_path):
    try:
        # Open the image
        with Image.open(image_path) as img:
            # Create a new file path with .webp extension
            webp_path = os.path.splitext(image_path)[0] + '.webp'
            # Save the image in webp format, overwrite original
            img.save(webp_path, format='WEBP')
            print(f"Successfully converted: {image_path} -> {webp_path}")
            # Optionally, remove the original file after conversion (if you want to replace it)
            os.remove(image_path)
            print(f"Original file removed: {image_path}")
    except Exception as e:
        print(f"Error converting {image_path}: {e}")

def convert_images_in_directory(directory):
    # Loop through all files in the directory
    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        # Check if it's a .jpg or .png file
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            convert_to_webp(file_path)

if __name__ == '__main__':
    current_directory = os.getcwd()  # Get current working directory
    convert_images_in_directory(current_directory)

