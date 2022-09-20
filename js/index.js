
//responsive navbar
let hamburger = document.querySelector('.hamburger');
let mobile_menu = document.querySelector('.nav_list');
let navBar = document.querySelector('.navBar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');


})

mobile_menu.addEventListener('click', () => {
    mobile_menu.classList.toggle('active');
    hamburger.classList.toggle('active');
})


//  typing text animation
let type_text = document.querySelector('#type_text');
let text = "Hello, I'm Aurora";

for (let i = 0; i <= text.length; i++) {
    setTimeout(function () {
        type_text.innerHTML = text.slice(0, i);
    }, i * 100)
}



//video play on project card
let video = document.querySelectorAll('video');
let cardMask = document.querySelectorAll('.cardMask')
for (let i = 0; i < cardMask.length; i++) {
    cardMask[i].addEventListener('mouseover', function () {
        video[i].play()
    })
    cardMask[i].addEventListener('mouseout', function () {
        video[i].pause()
    })
}

//copy to clipboard
let phoneNumber = document.querySelector('#phoneNumber');
let copy = document.querySelectorAll('#copy');
let emailAddress = document.querySelector('#emailAddress');



for (let i = 0; i < copy.length; i++) {
    copy[i].addEventListener('click', () => {
        copy[i].setAttribute('index', i)
        let index = copy[i].getAttribute('index');
        if (index == 0) {
            emailAddress.select();
        } else if (index == 1) {
            phoneNumber.select();
        }

        //copy the input text
        document.execCommand('copy');

        copy[i].innerHTML = 'Copied'
        setTimeout(function () {
            copy[i].innerHTML = 'Copy'
        }, 2000)
    })

}

console.log(window.innerWidth);

//moving toward mouse plane
let plane = document.querySelector('#plane');

let deg = 0,
    ex = 0,
    ey = 0,
    vx = 0,
    vy = 0,
    //count is plane distance toward mouse
    count = 0;

window.addEventListener('mousemove', (e) => {

    ex = e.x - plane.offsetLeft - plane.clientWidth / 2 + 30;
    ey = e.y - plane.offsetTop - plane.clientHeight / 2 - 40;
    deg = 360 * Math.atan(ey / ex) / (2 * Math.PI) + 45;

    if (ex < 0) {
        //if x is smaller than 0, plane turn around
        deg += 180
    }
    count = 0;
})

function draw() {
    plane.style.transform = 'rotate(' + deg + 'deg)'
    if (count < 100) {
        vx += ex / 100;
        vy += ey / 100;
    }

    plane.style.left = vx + 'px';
    plane.style.top = vy + 'px';

    count++;
}

setInterval(draw, 1);






