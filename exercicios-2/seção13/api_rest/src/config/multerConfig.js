import multer from "multer";
import { extname, resolve } from 'path';

export default {
  Storage: multer.diskStorage({
    destination: (req, file, cb ) => {},
    filename: (req, file, cb ) => {},
  }),
};
