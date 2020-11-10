const { ipcMain } = require("electron");
const path = require("path");
const opn = require("opn");
const db = require("../db/database");
const upload = require("../util/upload");
const {db: database, file} = require("../shared/constants").default;

ipcMain.handle(file.choose, async (_event, _args) => {
  const files = await dialog.showOpenDialog();
  return files.canceled ? null : files.filePaths;
});

ipcMain.handle(file.upload, async (_event, args) => {
  const { filePath } = args;
  if (!filePath) {
    return;
  }
  const result = await upload(filePath);
  const dbResult = await db.insert({
    path: filePath,
    url: result.url,
    name: path.basename(filePath),
  });
  return dbResult;
});

ipcMain.handle(database.get, async (_event, _args) => {
  const data = await db.find().exec();
  return data;
});

ipcMain.handle(database.delete, async (_event, { id }) => {
  const data = await db.remove(id);
  return data;
});

ipcMain.handle(database.update, async (_event, model) => {
  const data = await db.update({ _id: model._id }, model);
  return data;
});

ipcMain.handle(file.openDownload, async (_event, { url }) => {
  opn(url);
});
