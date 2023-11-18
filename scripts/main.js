const popupContentInputboxInputs = document.querySelectorAll(".popup-content-inputbox-input");
const popupContents = document.querySelectorAll(".popup-content");
const popupContentLeft = document.querySelectorAll(".popup-content-left");
const popupContentRight = document.querySelectorAll(".popup-content-right");
const popupContentTitle = document.querySelectorAll(".popup-content-title");
const popupContentLink = document.querySelectorAll(".popup-content-link");

if (screen.width < 800) {
    popupContentInputboxInputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            popupContentLeft.forEach(function (left) {
                left.style.height = "12%";
            });
            popupContentRight.forEach(function (right) {
                right.style.height = "88%";
            });
            popupContentTitle.forEach(function (title) {
                title.style.opacity = "0";
            });
            popupContentLink.forEach(function (link) {
                link.style.opacity = "0";
            });
        });

        input.addEventListener('blur', function () {
            popupContentLeft.forEach(function (left) {
                left.style.height = "";
            });
            popupContentRight.forEach(function (right) {
                right.style.height = "";
            });
            popupContentTitle.forEach(function (title) {
                title.style.opacity = "1";
            });
            popupContentLink.forEach(function (link) {
                link.style.opacity = "1";
            });
        });
    });
}
