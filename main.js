const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,   // 🔼 biraz daha büyük
    height: 700,   // 🔼 biraz daha büyük
    resizable: false,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true
    }
  });

  win.loadFile("renderer/index.html");

  ipcMain.on("minimize", () => win.minimize());
  ipcMain.on("close", () => win.close());
  ipcMain.on("launch-minecraft", (_, jarPath) => {
    const { exec } = require("child_process");
    exec(`java -jar "${jarPath}"`, (err, stdout, stderr) => {
      if (err) console.error("Minecraft açılırken hata:", err);
    });
  });
}

app.whenReady().then(createWindow);
