const { BrowserWindow } = require("electron");

class MainWindow extends BrowserWindow {
  constructor() {
    super({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
      minWidth: 600,
      minHeight: 600,
    });
  }
}

module.exports = MainWindow;