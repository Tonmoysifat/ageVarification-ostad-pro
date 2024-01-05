
window.addEventListener("scroll",()=>{
    if (this.scrollY>100) {
    document.querySelector('.navbar').classList.remove("navbar-low-opacity");
    document.querySelector('.navbar').classList.add("navbar-high-opacity");
    } else {
        document.querySelector('.navbar').classList.add("navbar-low-opacity");
        document.querySelector('.navbar').classList.remove("navbar-high-opacity");
    }
})

function ageVarification() {
    let ageValue = document.getElementById('ageValue').value;
    let card_1 = document.getElementById('card_1');
    let card_2 = document.getElementById('card_2');
    let card_3 = document.getElementById('card_3');
    if (parseFloat(ageValue)>=18) {
        card_2.style.display="none"
        card_3.style.display="none"
        card_1.style.display="block"
    } else if (  parseFloat(ageValue)>=0 && parseFloat(ageValue)<18 ) {
        card_1.style.display="none"
        card_3.style.display="none"
        card_2.style.display="block"
        card_2.style.backgroundColor="block"
    } else if (parseFloat(ageValue)<0) {
        card_1.style.display="none"
        card_2.style.display="none"
        card_3.style.display="block"
    }
}