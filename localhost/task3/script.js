const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');


function changeBackground1() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl3.style.background = ('black');
 }
 function changeBackground2() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
 }
 function changeBackground3() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
 }
function changeColor() {
    if(trafficLightEl1.style.background == ('green')){
        changeBackground1();
    }
    else if(trafficLightEl2.style.background == ('yellow')){
        changeBackground2();
    }
    else if(trafficLightEl3.style.backgroundr == ('red')){
        changeBackground3();
    }
    else {
        trafficLightEl1.style.background = ('green');
        trafficLightEl2.style.background = ('black');
        trafficLightEl3.style.background = ('black');
    }
}

trafficLightEl1.addEventListener('click', changeColor);
trafficLightEl2.addEventListener('click', changeColor);
trafficLightEl3.addEventListener('click', changeColor);