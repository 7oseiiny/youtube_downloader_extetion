
function kk(){
    let button = document.createElement("button")
    button.style.backgroundColor="green"
    button.style.padding="10px"
    button.innerHTML = 'download';

    button.addEventListener ("click", function() {
        var link = window.location.href
        var l =link.split("www.")
        var d ="https://ss"+l[1]

        window.open(d , '_blank');

        });
        
    document.getElementById("start").append(button)
    
}
window.onload=kk()
