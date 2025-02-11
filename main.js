const { app, BrowserWindow } = require('electron')
const path = require('path')

// Agregar esto para desarrollo
try {
    require('electron-reloader')(module, {
        debug: true,
        watchRenderer: true
    });
} catch (_) { console.log('Error'); }

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // Cargar el archivo index.html
    win.loadFile('index.html')
    
    // Comentado para que no se abra DevTools automáticamente
    // win.webContents.openDevTools()

    // Habilitar navegación
    win.webContents.on('will-navigate', (event, url) => {
        // Permitir la navegación
    });
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
}) 