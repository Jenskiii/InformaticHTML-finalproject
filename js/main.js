// selectors
const hamburger = document.querySelector(".nav-hamburger")
const navigation = document.getElementById("header-navigation")
const navigationItems = document.querySelectorAll("#header-navigation li")

//  opens / closes mobile menu on click
function handleClick(){
    hamburger.classList.toggle("active")
    navigation.classList.toggle("active") 
}

// active function on click
hamburger.addEventListener("click", handleClick)


// closes menu on menu item click
navigationItems.forEach(e => {
    e.addEventListener("click" , () =>{
        navigation.classList.remove("active")
    })
});