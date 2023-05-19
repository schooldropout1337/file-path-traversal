press = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// Set the destination for storing uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Create an instance of the multer middleware with the storage configuration
const upload = multer({ storage: storage });

// Serve the HTML file upload form
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'upload.html'));
});

app.post('/upload', upload.single('image'), function (req, res) {
  // Save the uploaded image to the 'uploads' directory
  const image = req.file;
  const decodedFilename = decodeURIComponent(image.originalname);
  const imagePath = path.join(__dirname, 'uploads', decodedFilename);

  fs.copyFile(image.path, imagePath, function (err) {
    if (err) {
      return res.status(500).send(err);
    }                                                                                       res.send('Image uploaded successfully. View image at <a href="http://127.0.0.1:3000/uploads/' + decodedFilename + '">here</a>');
  });
});

// Serve the uploaded file
app.get('/uploads/:filename', function (req, res) {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename);
  res.sendFile(filePath);
});

// Start the server
app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});
