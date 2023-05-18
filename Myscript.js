//form received//
function openForm(){
document.getElementById("RegForm").style.display = "block";
}
function closeForm(){
document.getElementById("RegForm").style.display = "none";
}
var modal = document.getElementById("RegForm");

//when user clicks anywhere outside of the modal/form, close it!--------//
window.onclick = function(event){
if(event.target == modal){
    modal.style.display = "none";
    }
}
//---------slider filter control pagination (dysfunctional)--------//
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 300
});

next.addEventListener('click', () => {
    slider.scrollLeft += 300
});
//to open login panel//
function openForm(){
document.getElementById("loginForm").style.display = "block";
}
function closeForm(){
document.getElementById("loginForm").style.display = "none";
}

//toggle chat box (dysfunctional)//
const chatboxToggle = document.querySelector('.chat-toggler')
const chatboxMessage = document.querySelector('.chatbox')
chatboxToggle.addEventListener('click', function () {
    chatboxMessage.classList.toggle('show')
})

//messages input//
const textarea = document.querySelector('.input-message')
const chatboxForm = document.querySelector('.message-sent')
textarea.addEventListener('input', function (){
    let line = textarea.value.split('\n').length
    if (textarea.rows < 6 || line < 6){
        textarea.rows=line
    }
    if(textarea.rows > 1){
        chatboxForm.style.alignItems = 'flex-end'
    }else{
        chatboxForm.style.alignItems = 'center'
    }
})

//CHATBOX MESSAGES--------//
const messageRow = document.querySelector('.message-row')
const chatboxZeroMessage = document.querySelector('.Zero-messages')

chatboxForm.addEventListener('submit', function (e){
    e.preventDefault()
    if(isValid(textarea)){
        writeMessage()
        setTimeout(autoReply, 1000)
    }  
})

function addZero(num){
    return num < 10 ? '0'+num : num
}

function writeMessage(){
    const today = new Date()
    let message = 

    messageRow.insertAdjacentHTML('beforeend', message)
    chatboxForm.style.alignItems = 'center'
    textarea.rows = 1   
    textarea.focus()
    textarea.value = '' 
    chatboxZeroMessage.style.display = 'none'
}

function autoReply(){
    const today = new Date()
    let message = 
    messageRow.insertAdjacentHTML('beforeend', message)
    scrollBottom()
}
function scrollBottom(){
    chatboxMessage.scrollTo(0, chatboxMessage.scrollHeight)
}
//function isValid(value){
//    let text = value.replace(/\n\g, '')
//    text = text.replace(/\s\g, '')
//    return text.length > 0
//}
//for slideshow (dysfunctional)//
let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("video-slides");
    let videoSlider_btn = document.getElementsByClassName("videoSlider-btn");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length){slideIndex = 1}
    for (i = 0; i < videoSlider-btn.length; i++){

    dots[i].className = videoSlider-btn[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    videoSlider_btn[slideIndex-1].className += "active";
    setTimeout(showSlides,20000);   //images should change every 2 seconds
}
//const slides = document.querySelectorAll('.video-slides');
//let currentSlide = 0;
//function showSlide(n){
//
//    slides[currentSlide].classList.remove('active');
//    currentSlide = (n + slides.length)%slides.length;
//
//    slides[currentSlide].classList.add('active');
//}
//showSlide(0);
//setInterval(() => {
//    showSlide(currentSlide + 1);
//}, 50000);

