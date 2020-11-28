import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';

import config from '@src/config';
import * as FileUtils from '@src/utils/file';

const s3 = new AWS.S3({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region,
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: config.aws.bucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, FileUtils.createUniqueFileName(file.originalname));
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});

export default upload;
