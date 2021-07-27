if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
console.log(localStorage.getItem('Sebastian'));

const { app, BrowserWindow } = require('electron');

function createWindow(){
    const win = new BrowserWindow({ 
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    win.loadFile('index.html');
}

app.whenReady().then(() =>{
    createWindow();
})