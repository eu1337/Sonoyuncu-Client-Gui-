const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("windowControls", {
  minimize: () => ipcRenderer.send("minimize"),
  close: () => ipcRenderer.send("close"),
  launchMinecraft: (jarPath) => ipcRenderer.send("launch-minecraft", jarPath)
});
