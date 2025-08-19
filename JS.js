function showPage(num){
    document.getElementById("page-home").style.display = (num === 1) ? "block" : "none";
    document.getElementById("page-about").style.display = (num === 2) ? "block" : "none";
    document.getElementById("page-projects").style.display = (num === 3) ? "block" : "none";
    document.getElementById("page-contact").style.display = (num === 4) ? "block" : "none";
}

