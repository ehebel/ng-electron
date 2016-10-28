var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;

// var appRoot = path.join(__dirname, '..');

// require('electron-compile').init(appRoot, './');

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // Quit when all windows are closed.
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    center: true
  });

  mainWindow.maximize();

  mainWindow.setMinimumSize(770, 400);
  
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');

  // if (appConfig.env !== 'production') mainWindow.openDevTools();

  mainWindow.on('close', () => {
    app.quit();
  });

  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});


