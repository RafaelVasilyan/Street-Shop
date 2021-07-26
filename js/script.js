var showMenu = false

function burgerMenu(x) {
     x.classList.toggle("change");
     if (showMenu === true) {
          document.querySelector(".burger_menu").classList.remove("burger_menu_hidden")
          showMenu = false
     }
     else {
          document.querySelector(".burger_menu").classList.add("burger_menu_hidden")
          showMenu = true
     }
}
