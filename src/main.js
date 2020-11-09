const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const {db:database, file} = require('./shared/constants').default;
const path = require('path');
const db = require('./db/database');
const upload = require('./util/upload');

if (require('electron-squirrel-startup')) {
  app.quit();
}

ipcMain.handle(file.choose, async (_event, args) => {
  const files = await dialog.showOpenDialog();
  return files.canceled ? null: files.filePaths;
});

ipcMain.handle(file.upload, async(_event, args) => {
  const {filePath} = args;
  console.log(filePath);
  if (!filePath) {
    return;
  }
  const result = await upload(filePath);
  const dbResult = await db.insert({ path: filePath, url: result.url, name: path.basename(filePath)});
  return dbResult;
});

ipcMain.handle(database.get, async(_event, _args) => {
  const data = await db.find().exec();
  console.log(data);
  return data;
});

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});