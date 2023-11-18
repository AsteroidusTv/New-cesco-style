function openPopup(id) {
    const popup = document.getElementById(id);
    popup.classList.add("show");
}

function closePopup(id) {
    let hamburgerMenu = document.querySelector(".hamburger-menu");
    if (hamburgerMenu.classList.contains("nav-open")) {
        hamburgerMenu.classList.toggle("nav-open")
    }

    const popup = document.getElementById(id);
    popup.classList.add("closing");
    setTimeout(() => {
        popup.classList.remove("show", "closing");
    }, 250);
}


document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const changeProfilePicturePopup = document.getElementById("changeProfilePicturePopup");
    if (changeProfilePicturePopup.classList.contains("show")) {
      closePopup("changeProfilePicturePopup");
    } else {
      const popups = document.querySelectorAll(".show");
      popups.forEach(function (popup) {
        closePopup(popup.id);
      });
    }
  }
});


  
      