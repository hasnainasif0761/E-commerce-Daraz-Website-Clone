const slider = document.getElementById('slider');
const slide = slider.children;
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dotCont = document.getElementById('dots');

let index = 0;

function showSLider(){
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

next.addEventListener('click',()=>{
    index++
    if(index >= slide.length){
        index = 0
    }
    showSLider()
})

prev.addEventListener('click',()=>{
    index--
    if(index < 0){
        index = slide.length -1
    }
    showSLider()
})


function createDots(){
    for(let i = 0; i < slide.length; i++){
        let dot = document.createElement('div');
        dot.className = 'w-3 h-3 bg-white/60 rounded-full cursor-pointer';
    
    dot.addEventListener('click',()=>{
        index = i;
        showSLider();
    })
    dotCont.appendChild(dot);
}
}


function updateDots(){
    let dots = dotCont.children;

    for(let i = 0; i < dots.length; i++){
        dots[i].classList.remove('bg-white');
        dots[i].classList.add('bg-white/60');
    }

    dots[index].classList.remove('bg-white/60');
    dots[index].classList.add('bg-white');
}
createDots();
showSLider();

setInterval(() => {
    index++;
    
    if(index >= slide.length){
        index = 0
    }
    showSLider();
}, 2000);