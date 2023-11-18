const chat = document.getElementById("chat");
const openDrawer = document.getElementById("openDrawer");
const chatHeader = document.getElementById("chatHeader");
const chatScroll = document.getElementById("chatScroll");
const chatFooter = document.getElementById("chatFooter");

function toggleChatDrawer() {
    chat.classList.toggle("chat-open");
    openDrawer.classList.toggle("chat-open");
    chatHeader.classList.toggle("chat-open");
    chatScroll.classList.toggle("chat-open");
    chatFooter.classList.toggle("chat-open");
}

openDrawer.addEventListener('click', toggleChatDrawer);