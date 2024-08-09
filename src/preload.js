const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: (a, b) => ipcRenderer.invoke('ping', a, b)
  // we can also expose variables, not just functions
})