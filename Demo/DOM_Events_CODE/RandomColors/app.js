const butt = document.querySelector(`button`);
const h1 = document.querySelector(`h1`)
butt.addEventListener('click',()=> {
    document.body.style.backgroundColor = `olive`;

    let color = randcol()
    document.body.style.backgroundColor = color;
    h1.innerText = color;

})

const randcol = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
}

