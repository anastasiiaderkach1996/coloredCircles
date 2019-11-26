document.body.addEventListener('click', createCircle);

function createCircle(event){
    let element = createEl();
    element.style.top = event.clientY - 35 + 'px';
    element.style.left = event.clientX - 35 + 'px';
    document.body.appendChild(element);
    console.log(event)
}
function createEl(){
    const kol = randomNumb(90);
    let el = document.createElement('div');
    el.style.width = kol + 'px';
    el.style.height = kol + 'px';
    el.style.backgroundColor = `rgb(${randomNumb(255)}, ${randomNumb(255)}, ${randomNumb(255)})`
    el.classList.add('circle');
    return el;

}
function randomNumb(a){
    return Math.round(Math.random() * a);
}
