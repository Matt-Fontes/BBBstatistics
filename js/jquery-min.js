$(document).ready(function() {

    var novo = 1;

    if(localStorage.getItem("neww") == null){
        localStorage.setItem("neww", 1);
        novo = 1;
    } else {
        novo = 0;
    }

    var pageNum = 0;

    if ( document.URL.includes("index.html") ) {
        pageNum = 1;
    }

    if ( document.URL.includes("paredoes.html") ) {
        pageNum = 2;
    }

    if ( document.URL.includes("sobre.html") ) {
        pageNum = 3;
    }

    var tempo = new Date();

    var timeFormat = tempo.getFullYear() + "-" + tempo.getMonth() + "-" + tempo.getDay() + " " + tempo.getHours() + ":" + tempo.getMinutes() + ":" + tempo.getSeconds();

    var dataString="novo="+novo+"&pageNum="+pageNum+"&tempo="+timeFormat;

    var url = "https://matheusfontes.000webhostapp.com/load.php";

    $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        success: function(data){
            console.log(data);
        },
        error: function (request, status, error) {
            console.log("request: " + request.responseText + " status: " + status + " error: " + error);
        }
    });



});