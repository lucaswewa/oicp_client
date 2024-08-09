const { app, BrowserWindow, Notification, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(path.join(__dirname,'index.html'))
  // win.loadURL("http://localhost:5173/")
  const contents = win.webContents
  win.setMenuBarVisibility(false)
}

app.whenReady().then(() => {
  ipcMain.handle('ping', (e, a, b) => {
      return 'pong: ' + a + b
  })
  createWindow()
})
