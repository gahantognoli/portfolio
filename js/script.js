//INCIO DO DOUMENTO JAVASCRIPT.
document.querySelector(".threeline-icon").onclick = function(){
    openNav();
};

function openNav(){
    var x = document.getElementById("navigation");

    if(x.className  === "navigation") {
        x.className += " menujs";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    }else{
        x.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "&#9776";
    }
}