const { app } = require("electron");
const MainWindow = require("./windows/MainWindow");
require("./handlers/index");

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new MainWindow();
  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  process.env.NODE_ENV === 'production' && mainWindow.setMenu(null);
  // Open the DevTools.
  process.env.NODE_ENV !== 'production' && mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
