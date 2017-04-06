// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var deeztron = {
    play: function () {
        var button = document.getElementsByClassName('control-play')[0];
        button.click();
    },
    prev: function () {
        var button = document.getElementsByClassName('control-prev')[0];
        button.click();
    },
    next: function () {
        var button = document.getElementsByClassName('control-next')[0];
        button.click();
    },
    stop: function () {
        var button = document.getElementsByClassName('control-play')[0];
        button.click();
    },
    settheme: function (theme) {
        if (theme == "dark") {
            setdark();
        } else {
            setlight();
        }

        function setdark() {
            var el = document.getElementById('myStyles');
            if ( el !== null ) {
            } else {
                var oLink = document.createElement("link");
                oLink.id   = 'myStyles';
                oLink.href = "https://userstyles.org/styles/140761/dark-deezer.css";
                oLink.rel = "stylesheet";
                oLink.type = "text/css";
                document.body.appendChild(oLink);
            }
        }
        function setlight(){
            var el = document.getElementById('myStyles');
            if ( el !== null ) {
                el.parentNode.removeChild(el);
            } else {
                
            }
        }
    },
    setvolume: function () {

    }

};