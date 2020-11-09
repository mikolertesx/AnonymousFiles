const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');
const upload = require('./util/upload').default;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

ipcMain.handle('upload-file', async (event, args) => {
  const files = await dialog.showOpenDialog();
  return files.canceled ? null: files.filePaths;
});

ipcMain.handle('send-file', async(event, args) => {
  const {filePath} = args;
  console.log(filePath);
  if (!filePath) {
    return;
  }
  const result = await upload(filePath);
  console.log(result);
  return result;
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
