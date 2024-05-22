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
    // initial();
};
const prev=()=>{
    slides[curr].classList.remove('display');
    curr--;
    curr= curr%3;
    initial();
}

initial();
