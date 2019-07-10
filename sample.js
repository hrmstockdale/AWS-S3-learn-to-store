const aws = require("aws-sdk");

// (local) env vars referenced to withhold keyId & secret
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

// async IIFE & try/catch block, if successful returns objects in Bucket
(async () => {
  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: "eu-west-2"
    });

    const s3 = new aws.S3();
    const response = await s3
      .listObjectsV2({
        Bucket: "first-bucket-test1"
      })
      .promise();

    console.log(response);
  } catch (err) {
    console.log("oops, an error: ", err);
  }

  debugger;
})();
