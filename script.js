const imgs = document.querySelectorAll(".header-slider ul img")
const prev_btn = document.querySelector(".control-prev");
const next_btn = document.querySelector(".control-next");

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
       imgs[i].style.display = 'none';
        
    }

    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', (e) => {
    if(n > 0){
        n -= 1;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
  // I wrote this code 
    if(n == imgs.length - 1){
        n = 0;
    } else {
        n += 1;
    }
    changeSlide();
})

//to scroll the sports and outdoor products by simply using mousewheel

const scrollContainer = document.querySelectorAll('.products')

for(const item of scrollContainer){
    item.addEventListener('wheel', (event) => {
        //prevent default feauture
        event.preventDefault();
        item.scrollLeft += event.deltaY // now we can scroll normally
    })
}
 