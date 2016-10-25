var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;

// var appRoot = path.join(__dirname, '..');

// require('electron-compile').init(appRoot, './');

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        width: 800, height: 800, backgroundColor: '#1E1E1E',
        'min-width': 500,
        'min-height': 200,
        'accept-first-mouse': true,
        'title-bar-style': 'hidden'
    })
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    
    // Open the DevTools.
    //mainWindow.openDevTools();


});


