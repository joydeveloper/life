
function LoadJsonSync({requestURL}) {
    let xhReq = new XMLHttpRequest();
    xhReq.open("GET", requestURL,false);
    xhReq.send();
    let jsonObject = JSON.parse(xhReq.responseText);
    return jsonObject;
}
function LoadJsonASync(requestURL,callback) {

    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', requestURL, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}
function AfterAsyncLoad(requestURL, func) {
    LoadJsonASync(requestURL, function (response) {
        func(response);
    });
}
function LoadDoc(elementid, documentname) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            document.getElementById(elementid).innerHTML = xhttp;
        }
    };
    xhttp.open("GET", documentname, true);
    xhttp.send();
}