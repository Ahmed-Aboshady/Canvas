var canvas = document.getElementById("mycan");
var cont = canvas.getContext("2d");
document.getElementById("submit").onclick = drawing;

function drawing() {
    document.getElementById("myS").innerHTML = "";
    // here we display the div containing percantage of departments.
    document.getElementById("per").style = "opacity:1"

    // h5le el code kolo js 3l4an mirsm4 aktr mn mra fo2 b3d
    document.getElementById("myS").innerHTML += "<line x1='20' y1='0' x2='20' y2='200' style='stroke:black;stroke-width:2' />"
    document.getElementById("myS").innerHTML += "<line x1='20' y1='200' x2='200' y2='200' style='stroke:black;stroke-width:2' />"
    document.getElementById("myS").innerHTML += "<text x='0' y='200' class='small'>0</text>"
    document.getElementById("myS").innerHTML += "<text x='0' y='180' class='small'>10</text>"
    document.getElementById("myS").innerHTML += "<text x='0' y='160' class='small'>20</text>"
    document.getElementById("myS").innerHTML += "<text x='0' y='140' class='small'>30</text>"
    document.getElementById("myS").innerHTML += "<text x='0' y='120' class='small'>40</text>"
    document.getElementById("myS").innerHTML += "<text x='0' y='100' class='small'>50</text>"
    document.getElementById("myS").innerHTML += "<text x='0' y='80' class='small'>60</text>"
    document.getElementById("myS").innerHTML += "<text x='0' y='60' class='small'>70</text>"
    document.getElementById("myS").innerHTML += "<text x='0' y='40' class='small'>80</text>"
    document.getElementById("myS").innerHTML += "<text x='0' y='20' class='small'>90</text>"

    document.getElementById("myS").innerHTML += "<line x1='300' y1='0' x2='300' y2='200' style='stroke:black;stroke-width:2' />"
    document.getElementById("myS").innerHTML += "<line x1='300' y1='200' x2='500' y2='200' style='stroke:black;stroke-width:2' />"
    document.getElementById("myS").innerHTML += "<text x='280' y='200' class='small'>0</text>"
    document.getElementById("myS").innerHTML += "<text x='280' y='180' class='small'>10</text>"
    document.getElementById("myS").innerHTML += "<text x='280' y='160' class='small'>20</text>"
    document.getElementById("myS").innerHTML += "<text x='280' y='140' class='small'>30</text>"
    document.getElementById("myS").innerHTML += "<text x='280' y='120' class='small'>40</text>"
    document.getElementById("myS").innerHTML += "<text x='280' y='100' class='small'>50</text>"
    document.getElementById("myS").innerHTML += "<text x='280' y='80' class='small'>60</text>"
    document.getElementById("myS").innerHTML += "<text x='280' y='60' class='small'>70</text>"
    document.getElementById("myS").innerHTML += "<text x='280' y='40' class='small'>80</text>"
    document.getElementById("myS").innerHTML += "<text x='280' y='20' class='small'>90</text>"

    // transforming values into per from 0 to 20
    var arc1 = document.getElementsByClassName("deg")[0].value / 50;
    var arc2 = document.getElementsByClassName("deg")[1].value / 50;
    var arc3 = document.getElementsByClassName("deg")[2].value / 50;
    var arc4 = document.getElementsByClassName("deg")[3].value / 50;
    var arcsum = arc1 + arc2 + arc3 + arc4;
    document.getElementsByClassName("sp")[0].innerHTML = document.getElementsByClassName("sub")[0].value + " " + document.getElementsByClassName("deg")[0].value + "%";
    document.getElementsByClassName("sp")[1].innerHTML = document.getElementsByClassName("sub")[1].value + " " + document.getElementsByClassName("deg")[1].value + "%";
    document.getElementsByClassName("sp")[2].innerHTML = document.getElementsByClassName("sub")[2].value + " " + document.getElementsByClassName("deg")[2].value + "%";
    document.getElementsByClassName("sp")[3].innerHTML = document.getElementsByClassName("sub")[3].value + " " + document.getElementsByClassName("deg")[3].value + "%";

    // drawing line and bar chart

    document.getElementById("myS").innerHTML += "<rect x='40' y=" + (200 - (arc1 * 100)) + " width='20' height=" + (arc1 * 100) + " style='fill:#4D6F8C;stroke-width:3' />"
    document.getElementById("myS").innerHTML += "<rect x='70' y=" + (200 - (arc2 * 100)) + " width='20' height=" + (arc2 * 100) + " style='fill:#F2B28D;stroke-width:3' />"
    document.getElementById("myS").innerHTML += "<rect x='100' y=" + (200 - (arc3 * 100)) + " width='20' height=" + (arc3 * 100) + " style='fill:#BF7256;stroke-width:3' />"
    document.getElementById("myS").innerHTML += "<rect x='130' y=" + (200 - (arc4 * 100)) + " width='20' height=" + (arc4 * 100) + " style='fill:rgb(219, 209, 209);stroke-width:3' />"
    document.getElementById("myS").innerHTML += "<polyline points='320," + (200 - (arc1 * 100)) + " 350," + (200 - (arc2 * 100)) + " 380," + (200 - (arc3 * 100)) + " 410," + (200 - (arc4 * 100)) + "'  style='fill:white;stroke:black;stroke-width:2' />"


    // inputing dep values outside scope of charts
    document.getElementById("myS").innerHTML += " <text x='40' y='220' class='small'>" + document.getElementsByClassName("sub")[0].value + "</text>"
    document.getElementById("myS").innerHTML += " <text x='70' y='220' class='small'>" + document.getElementsByClassName("sub")[1].value + "</text>"
    document.getElementById("myS").innerHTML += " <text x='100' y='220' class='small'>" + document.getElementsByClassName("sub")[2].value + "</text>"
    document.getElementById("myS").innerHTML += " <text x='130' y='220' class='small'>" + document.getElementsByClassName("sub")[3].value + "</text>"

    // for (i = 0; i < 4; i++) {
    //     x = 320;
    //     document.getElementById("myS").innerHTML += " <text x=" + x + "y='220' class='small'>" + document.getElementsByClassName("sub")[0].value + "</text>"
    //     x = x + 30;
    // }
    document.getElementById("myS").innerHTML += " <text x='320' y='220' class='small'>" + document.getElementsByClassName("sub")[0].value + "</text>"
    document.getElementById("myS").innerHTML += " <text x='350' y='220' class='small'>" + document.getElementsByClassName("sub")[1].value + "</text>"
    document.getElementById("myS").innerHTML += " <text x='380' y='220' class='small'>" + document.getElementsByClassName("sub")[2].value + "</text>"
    document.getElementById("myS").innerHTML += " <text x='410' y='220' class='small'>" + document.getElementsByClassName("sub")[3].value + "</text>"


    if (arcsum == 2 && document.getElementsByName("checker")[0].checked) {


        cont.beginPath();


        cont.arc(90, 90, 90, 0 * Math.PI, arc1 * Math.PI);
        cont.lineWidth = 20;
        cont.fillStyle = "#4D6F8C";
        cont.lineTo(90, 90)
        cont.fill();

        ceta = (0 + arc1 * Math.PI) / 2;
        x = Math.cos(ceta) * 60;
        y = Math.sin(ceta) * 60;
        cont.font = "12px Arial";
        cont.fillStyle = "black";
        cont.fillText(document.getElementsByClassName("deg")[0].value + "%", x + 90, y + 90);
        cont.closePath();

        cont.beginPath();
        cont.arc(90, 90, 90, arc1 * Math.PI, (arc2 + arc1) * Math.PI);
        cont.fillStyle = "#F2B28D";
        cont.lineTo(90, 90)
        cont.fill();

        ceta = (arc1 * Math.PI + (arc2 + arc1) * Math.PI) / 2;
        x1 = Math.cos(ceta) * 60;
        y1 = Math.sin(ceta) * 60;
        cont.font = "12px Arial";
        cont.fillStyle = "black";
        cont.fillText(document.getElementsByClassName("deg")[1].value + "%", x1 + 90, y1 + 90);
        cont.closePath();

        cont.beginPath();
        cont.arc(90, 90, 90, (arc2 + arc1) * Math.PI, (arc2 + arc1 + arc3) * Math.PI);
        cont.lineTo(90, 90)
        cont.fillStyle = "#BF7256";
        cont.fill();

        ceta = ((arc2 + arc1) * Math.PI + (arc2 + arc1 + arc3) * Math.PI) / 2;
        x2 = Math.cos(ceta) * 60;
        y2 = Math.sin(ceta) * 60;
        cont.font = "12px Arial";
        cont.fillStyle = "black";
        cont.fillText(document.getElementsByClassName("deg")[2].value + "%", x2 + 90, y2 + 90);
        cont.closePath();

        cont.beginPath();
        cont.arc(90, 90, 90, (arc2 + arc1 + arc3) * Math.PI, (arc2 + arc1 + arc3 + arc4) * Math.PI);
        cont.fillStyle = "#F2F2F2 ";
        cont.lineTo(90, 90)
        cont.fill();
        ceta = ((arc2 + arc1 + arc3) * Math.PI + (arc2 + arc1 + arc3 + arc4) * Math.PI) / 2;
        x3 = Math.cos(ceta) * 60;
        y3 = Math.sin(ceta) * 60;
        cont.font = "12px Arial";
        cont.fillStyle = "black";
        cont.fillText(document.getElementsByClassName("deg")[3].value + "%", x3 + 90, y3 + 90);
        cont.closePath();
    }
    if (arcsum == 2 && document.getElementsByName("checker")[1].checked) {



        cont.beginPath();
        cont.arc(350, 90, 90, 0 * Math.PI, arc1 * Math.PI);
        cont.lineWidth = 20;
        cont.fillStyle = "#4D6F8C";
        cont.lineTo(350, 90)
        cont.fill();
        cont.font = "12px Arial";
        cont.fillStyle = "black";
        ceta = (0 + arc1 * Math.PI) / 2;
        x = Math.cos(ceta) * 60;
        y = Math.sin(ceta) * 60;
        cont.fillText(document.getElementsByClassName("deg")[0].value + "%", x + 350, y + 90);
        cont.closePath();

        cont.beginPath();
        cont.arc(350, 90, 90, arc1 * Math.PI, (arc2 + arc1) * Math.PI);
        cont.fillStyle = "#F2B28D";
        cont.lineTo(350, 90)
        cont.fill();
        ceta = (arc1 * Math.PI + (arc2 + arc1) * Math.PI) / 2;
        x1 = Math.cos(ceta) * 60;
        y1 = Math.sin(ceta) * 60;
        cont.font = "12px Arial";
        cont.fillStyle = "black";
        cont.fillText(document.getElementsByClassName("deg")[1].value + "%", 350 + x1, y1 + 90);
        cont.closePath();

        cont.beginPath();
        cont.arc(350, 90, 90, (arc2 + arc1) * Math.PI, (arc2 + arc1 + arc3) * Math.PI);
        cont.fillStyle = "#BF7256";
        cont.lineTo(350, 90)
        cont.fill();
        cont.font = "12px Arial";
        cont.fillStyle = "black";
        ceta = ((arc2 + arc1) * Math.PI + (arc2 + arc1 + arc3) * Math.PI) / 2;
        x2 = Math.cos(ceta) * 60;
        y2 = Math.sin(ceta) * 60;
        cont.fillText(document.getElementsByClassName("deg")[2].value + "%", x2 + 350, y2 + 90);
        cont.closePath();

        cont.beginPath();
        cont.arc(350, 90, 90, (arc2 + arc1 + arc3) * Math.PI, (arc2 + arc1 + arc3 + arc4) * Math.PI);
        cont.fillStyle = "#F2F2F2";
        cont.lineTo(350, 90)
        cont.fill();
        cont.font = "12px Arial";
        cont.fillStyle = "black";
        ceta = ((arc2 + arc1 + arc3) * Math.PI + (arc2 + arc1 + arc3 + arc4) * Math.PI) / 2;
        x3 = Math.cos(ceta) * 60;
        y3 = Math.sin(ceta) * 60;
        cont.fillText(document.getElementsByClassName("deg")[3].value + "%", x3 + 350, y3 + 90);
        cont.closePath();

        cont.beginPath();
        cont.arc(350, 90, 35, 0 * Math.PI, 2 * Math.PI);
        cont.fillStyle = "white";
        cont.fill();
        cont.closePath();
    }

    if (arcsum == 2 && document.getElementsByName("checker")[2].checked) {
        document.getElementById("mySVG").style = "opacity:1"
    }
    if (arcsum == 2 && document.getElementsByName("checker")[3].checked) {
        document.getElementById("mySVG").style = "opacity:1"
    }

}