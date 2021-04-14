`use strict`

let imagdiv = document.getElementById('imags');
let img1 = document.getElementById('p1');
let img2 = document.getElementById('p2');
let img3 = document.getElementById('p3');
let button = document.createElement('button')
let f1Index;
let f2Index;
let f3Index;
let maxAttempts = 25;
let Attempts = 0;
products.allproducts = [];


function products(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.occurre = 0;

    products.allproducts.push(this)

}

new products('bag', 'imgs/bag.jpg');
new products('banana', 'imgs/banana.jpg');
new products('bathroom', 'imgs/bathroom.jpg');
new products('boots', 'imgs/boots.jpg');
new products('breakfast', 'imgs/breakfast.jpg');
new products('bubblegum', 'imgs/bubblegum.jpg');
new products('chair', 'imgs/chair.jpg');
new products('cthulhu', 'imgs/cthulhu.jpg');
new products('dog-duck', 'imgs/dog-duck.jpg');
new products('dragon', 'imgs/dragon.jpg');
new products('pen', 'imgs/pen.jpg');
new products('pet-sweep', 'imgs/pet-sweep.jpg');
new products('scissors', 'imgs/scissors.jpg');
new products('shark', 'imgs/shark.jpg');
new products('sweep', 'imgs/sweep.png');
new products('tauntaun', 'imgs/tauntaun.jpg');
new products('unicorn', 'imgs/unicorn.jpg');
new products('usb', 'imgs/usb.gif');
new products('water-can', 'imgs/water-can.jpg');
new products('wine-glass', 'imgs/wine-glass.jpg');


function generateRandomIndex() {

    return Math.floor(Math.random() * products.allproducts.length);
}

function renderthreeImages() {
    f1Index = generateRandomIndex();
    f2Index = generateRandomIndex();
    f3Index = generateRandomIndex();

    while (f1Index === f2Index || f1Index === f3Index || f2Index === f3Index) {
        f2Index = generateRandomIndex();
        f3Index = generateRandomIndex();
    }

    img1.src = products.allproducts[f1Index].source;
    products.allproducts[f1Index].occurre++;
    img2.src = products.allproducts[f2Index].source;
    products.allproducts[f2Index].occurre++;
    img3.src = products.allproducts[f3Index].source;
    products.allproducts[f3Index].occurre++;
}

renderthreeImages();

imagdiv.addEventListener('click',UserClick);
/*img1.addEventListener('click', UserClick);
img2.addEventListener('click', UserClick);
img3.addEventListener('click', UserClick);*/

function finalresult(event) {
    let list = document.getElementById('results');

    let productsResult;

    for (let i = 0; i < products.allproducts.length; i++) {
        productsResult = document.createElement('li');
        productsResult.textContent = `${products.allproducts[i].name} has ${products.allproducts[i].votes} votes ,and shown ${products.allproducts[i].occurre} times `
        list.appendChild(productsResult);

    }
    button.removeEventListener('click',finalresult);
}

function UserClick(event) {

    Attempts++;


    if (Attempts <= maxAttempts) {

        if (event.target.id === 'p1') {
            products.allproducts[f1Index].votes++;
        }
        else if (event.target.id === 'p2') {
            products.allproducts[f2Index].votes++;
        }
        else if (event.target.id === 'p3') {
            products.allproducts[f3Index].votes++;
        } else{
            alert('please you have to click on the images for voting');
            Attempts--;
        }
        renderthreeImages();


    } else {
        results.appendChild(button);
        button.textContent= 'show the results';
        button.addEventListener('click',finalresult);
        imagdiv.removeEventListener('click', UserClick)
        /*img1.removeEventListener('click', UserClick);
        img2.removeEventListener('click', UserClick);
        img3.removeEventListener('click', UserClick);*/
        
    }
    

}



