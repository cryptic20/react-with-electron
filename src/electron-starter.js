const {Menu, Tray, app, BrowserWindow, globalShortcut} = require('electron');
// Module to control application life.
// Module to create native browser window.

const path = require('path');
const url = require('url');

const iconName = process.platform === 'win32' ? './assets/icons/windows-icon.png' : './assets/icons/iconTemplate.png';
const iconpath = path.join(__dirname, iconName);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let loadingScreen, mainWindow, windowsParam = {
    title : "FF@20",
    width : 800,
    height: 600,
    frame : false,
    show  : false,
    icon: iconpath
};

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow(windowsParam);

    mainWindow.setMinimumSize(400,600);
    // and load the index.html of the app.
    const startUrl = process.env.ELECTRON_START_URL || url.format({
            pathname: path.join(__dirname, '/../build/index.html'),
            protocol: 'file:',
            slashes: true
        });
    mainWindow.loadURL(startUrl)

     mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show();

        if (loadingScreen) {
            loadingScreen.close();
        }
        });

    //system tray icon code
    const appIcon = new Tray(iconpath)
    const contextMenu = Menu.buildFromTemplate([
//     { label: 'Show App', click: function(){
//         mainWindow.show();
//     }
// },
{ 
    label: 'Settings', checked: true, click: function(){
        checked : false;
    }
},
{
    label: 'Quit', click: function(){
        app.isQuitting = true;
        app.quit();
    }
}
    ])

     appIcon.setContextMenu(contextMenu)
     appIcon.on('double-click', () =>{
        mainWindow.show();
     })

    mainWindow.on('close', function (event) {
        mainWindow = null
    })

    mainWindow.on('show', function () {
        appIcon.setHighlightMode('always')
    })


    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
} //end of function createwindow

function createLoadingScreen(){
    loadingScreen = new BrowserWindow({width : 300, 
        height: 300, 
        frame : false, 
        show  : false, 
        fullscreen : false, 
        modal: true, 
        resizable : false, 
        alwaysOnTop : true, 
        parent: mainWindow});

    const loadScreenUrl = url.format({
            pathname: path.join(__dirname, './assets/components/splash_screen/splash_screen.html'), 
            protocol: 'file:',
            slashes: true
        });
     loadingScreen.loadURL(loadScreenUrl)
     loadingScreen.on('closed', () => loadingScreen = null);
     loadingScreen.webContents.on('did-finish-load', () => {
     loadingScreen.show();
});
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

//true if screen is full, false if not
app.on('ready', () => {
    //register escape key for full screen mode
    const esc = globalShortcut.register('Escape', () =>{
        //for windows
        if(mainWindow.isMaximized()){
            mainWindow.unmaximize();

        }else if(mainWindow.isFullScreen()){
            mainWindow.setFullScreen(false);
        };
    });
    createLoadingScreen();
    createWindow();
});



app.on('will-quit', function(){

  globalShortcut.unregister('Escape');

  globalShortcut.unregisterAll();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.