var btnContainer = document.getElementById("myDIV");
console.log(btnContainer);

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");
console.log(btns);

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}