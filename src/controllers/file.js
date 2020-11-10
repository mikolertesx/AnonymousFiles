import { ipcRenderer } from "electron";
import Constants from "../shared/constants";

export const fileChoose = async () =>
  await ipcRenderer.invoke(Constants.file.choose, null);

export const fileUpload = async (file) =>
  await ipcRenderer.invoke(Constants.file.upload, {
    filePath: file,
  });

export const fileOpenDownload = async (url) =>
  await ipcRenderer.invoke(Constants.file.openDownload, { url: url });

export default {
  fileChoose,
  fileUpload,
  fileOpenDownload
};
