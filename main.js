if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
require('dotenv').config();

var con;
function clickLogin() {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if (user == 'sebas' && password == '123') {
        if (process.env.host != null || process.env.host != '') {
            location.href = "./vista3.html";
        } else {
            location.href = "./vista2.html";
        }

    }
    else {
        alert("Credenciales incorrectas");
    }
}

function sendParams() {
    con = require('./connect');
    localStorage.setItem('con', con);
}

function addData() {
    // Crear query para INSERT, SELECT, UPDATE O DELETE
    con = require('./connect');

    const nombre = document.getElementById('nombre').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;

    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES ( "${nombre}","${ap_pat}","${ap_mat}","${edad}")`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }

        console.log("Query exitoso", rows);

    });



    con.end(function () {
        // Conexión Finalizada 
    });

    // Input data conection database
}

function selectData() {

    con = require('./connect');

    $query = `SELECT * FROM persona `;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }

        console.log("Query exitoso", rows);
        rows.forEach(row => {
            var datos = "<tr><td>" + row.nombre + "</td><td>" + row.ap_pat + "</td><td>" + row.ap_mat + "</td><td>" + row.edad + "</td></tr>";
            console.log(row.nombre);

            var btn = document.createElement("TR");
            btn.innerHTML = datos;
            document.getElementById("tabla").appendChild(btn);
        });
    });

    con.end(function () {
        // Conexión Finalizada 
    });

}
