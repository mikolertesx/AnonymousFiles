import { dbDelete, dbGet, dbUpdate } from "./db";
import { fileChoose, fileUpload, fileOpenDownload } from "./file";

export default {
  db: {
    dbDelete,
    dbGet,
    dbUpdate
  },
  file: {
    fileChoose,
    fileUpload,
    fileOpenDownload
  }
}