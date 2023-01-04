const btnEl = document.querySelector('.btn');

btnEl.addEventListener("mousehover" , (event)=>{
    const x = event.pageX - btn.offsetLeft;
    const y = event.pageY - btn.offsetTop;

    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px" );
});


