// XML

XML
Use Geolocation API service
You can find the documentation for this API at
https://www.geoplugin.com/webservices/xml
Check out the documentation to see how to use this API
Create a function which is sending request via AJAX and getting data in XML format
When data is received from the server, extract country name which is detected based on
IP address, and show it on the screen.
Extra:
There is a button and input field on HTML page!
Each time user clicks the button, function for getting geolocation data is invoked and
new ip address written in input field is used when sending request.

// Create a function which is sending request via AJAX and getting data in XML format
// When data is received from the server, extract country name which is detected based on
// IP address, and show it on the screen.
// Extra:
// There is a button and input field on HTML page!
// Each time user clicks the button, function for getting geolocation data is invoked and
// new ip address written in input field is used when sending request.

function getGeolocationData() {
    var ip = document.getElementById("ip").value;
    var url = "https://www.geoplugin.com/webservices/xml" + ip;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var xmlDoc = xhr.responseXML;
            var country = xmlDoc.getElementsByTagName("country")[0].childNodes[0].nodeValue;
            document.getElementById("result").innerHTML = country;
        }
    };
    xhr.send();
}

