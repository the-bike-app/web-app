const functions = require("firebase-functions");
const os = require("os");
const path = require("path");
const cors = require("cors")({ origin: true });
const Busboy = require("busboy");
const fs = require("fs");
const admin = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//const gcconfig = {
// projectId: 'cool-bike-app',
//   keyFilename: 'cool-bike-app-firebase-adminsdk-1m69p-4ababa68b5.json'
// }

admin.initializeApp(functions.config().firebase);
const bucket = admin.storage().bucket();

//const { Storage } = require('@google-cloud/storage');
//const storage = new Storage({ gcconfig })

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Access Denied Suckas!"
      });
    }
    const busboy = new Busboy({ headers: req.headers });
    let uploadData = null;

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = { file: filepath, type: mimetype };
      file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on("finish", () => {
      // const bucket = Bucket("cool-bike-app.appspot.com");
      bucket.upload(uploadData.file, {
        uploadType: "media",
        metadata: {
          metadata: {
            contentType: uploadData.type
          }
        }
      })
        .then(() => {
          res.status(200).json({
            message: "And God Said... Let There Be Pictures!!"
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    });
    busboy.end(req.rawBody);
  });
});