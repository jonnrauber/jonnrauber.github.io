document.getElementById("contact").addEventListener("click", showContact);

function showContact() {
    var x = document.getElementById("contact-info");
    if (!(x.getAttribute("hidden") == null)) {
        x.removeAttribute("hidden");
    } else {
        x.setAttribute("hidden", "");
    }
}