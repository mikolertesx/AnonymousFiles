import { ipcRenderer } from "electron";
import Constants from "../shared/constants";

export const dbGet = async() => {
  const result = await ipcRenderer.invoke(Constants.db.get);
  return result;
}

export const dbDelete = async (id) => {
  const result = await ipcRenderer.invoke(Constants.db.delete, id);
  return result;
}

export const dbUpdate = async(selectedFile) => {
  const result = await ipcRenderer.invoke(Constants.db.update, selectedFile);
  return result;
}