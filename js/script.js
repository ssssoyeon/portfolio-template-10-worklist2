gsap.registerPlugin(ScrollTrigger)

const cursor = document.querySelector('.cursor')
const cursorImgBox = document.querySelector('.cursor .img-box')
const workItem = document.querySelectorAll('.work-item a:first-child')

const updatePos=(cursor, e)=>{
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
}

window.addEventListener('mousemove', (e)=>{
    // console.log(e.clientX, e.clientY);

    updatePos(cursor, e)

    cursorImgBox.style.top = `${e.clientY}px`
    cursorImgBox.style.left = `${e.clientX}px`
    cursorImgBox.animate({
        top: `${e.clientY}px`,
        left: `${e.clientX}px`
    },2000)
})

workItem.forEach(i=>{

    let imgUrl = i.getAttribute('data-img')
    let cursorImg = document.querySelector(`${imgUrl}`)
    i.addEventListener('mouseover', ()=>{
        if(cursorImg && cursorImgBox){
            cursorImgBox.classList.add('on')
            cursorImg.classList.add('on')
        }
    })
    i.addEventListener('mouseout', ()=>{
        if(cursorImg && cursorImgBox){
            cursorImgBox.classList.remove('on')
            cursorImg.classList.remove('on')
        }
    })
})