const btn = document.querySelector(`#v2`);


btn.onclick = () =>{
    console.log("You clicked me");
    console.log("I hope it worked");
}

function scream() {
    console.log("AHHH");
}

btn.onmouseenter = scream;


document.querySelector(`h1`).onclick = () => {
    alert("You clicked a h1")
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', () => scream(),{once: true})