const slides = document.querySelectorAll('.slides img');
let curr = 0;
let timer = null;
const initial = () => {
    // console.log(slides.length);
    slides[curr].classList.add('display');
    timer = setInterval( next ,3000);
};
const next=()=>{
    slides[curr].classList.remove('display');
    curr++;
    curr= curr%3;
    slides[curr].classList.add('display');
    
};
const prev=()=>{
    slides[curr].classList.remove('display');
    // curr--;
    curr= (curr-1 +3 )%3;
    slides[curr].classList.add('display');

}

initial();
