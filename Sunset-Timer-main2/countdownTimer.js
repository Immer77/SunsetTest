var btn = document.getElementById('buttonMenu')

btn.addEventListener('click', function(){
  if(this.classList.contains('active')){
    const navigation = document.querySelector('.navigation')
    navigation.classList.toggle('active')
    this.classList.remove('active')
    this.classList.add('not-active')
  }else{
    const navigation = document.querySelector('.navigation')
    navigation.classList.toggle('active')
    this.classList.add('active')
    this.classList.remove('not-active')
  }
});

function changeColor(button){
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
};

function toHoursAndMinutes(minutes){
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  h = h < 10 ? '0' + h : h; 
  m = m < 10 ? '0' + m : m; 
  return h + ':' + m;
};

const startTimer = (countContainer) => {
  let isRunning = false;
  var remainingTime = 180;
  var timer;
  if(isRunning == true){
    remainingTime = 180;
    isRunning = false;
    clearInterval(timer);
  }else{
    isRunning = true;
    countContainer.querySelector('span').innerHTML = toHoursAndMinutes(remainingTime);
    timer = setInterval(function() {
      remainingTime -= 1;
      countContainer.querySelector('span').innerHTML = toHoursAndMinutes(remainingTime);
      if (remainingTime == 0) {
        clearInterval(timer);
      }
    }, 60000);
  }
};

function checkInterval(countContainer){
    return countContainer.querySelector('span').innerHTML != '00:00';
    
    
};
const buttonIceberg = document.getElementById('buttonIceberg');
const buttonPickles = document.getElementById('buttonPickles');
const buttonOnion = document.getElementById('buttonOnion');
const buttonCheese = document.getElementById('buttonCheese');
const buttonRedOnion = document.getElementById('buttonRedOnion');
const buttonSalatmix = document.getElementById('buttonSalatmix');
const buttonTomato = document.getElementById('buttonTomato');
const buttonCucumber = document.getElementById('buttonCucumber');

/*
buttonIceberg.addEventListener('click', function onClick(){
    changeColor(buttonIceberg);
    startTimer();
});

buttonOnion.addEventListener('click', function onClick() {
    changeColor(buttonOnion);
    countdownTimer(document.getElementById("timerOnion"), buttonCheese);
  });

buttonCheese.addEventListener('click', function onClick() {
    changeColor(buttonCheese);
    countdownTimer(document.getElementById("timerCheese"), buttonCheese);
  });

buttonRedOnion.addEventListener('click', function onClick() {
    changeColor(buttonRedOnion);
    countdownTimer(document.getElementById("timerRedOnion"), buttonRedOnion);
  });

buttonSalatmix.addEventListener('click', function onClick() {
    changeColor(buttonSalatmix);
    countdownTimer(document.getElementById("timerSalatmix"), buttonSalatmix);
  });

buttonTomato.addEventListener('click', function onClick() {
    changeColor(buttonTomato);
    countdownTimer(document.getElementById("timerTomato"), buttonTomato);
  });

buttonCucumber.addEventListener('click', function onClick() {
    changeColor(buttonCucumber);
    countdownTimer(document.getElementById("timerCucumber"), buttonCucumber);
  });

buttonPickles.addEventListener('click', function onClick(){
    changeColor(buttonPickles);
    countdownTimer(document.getElementById("timerPickles"), buttonPickles);
});
*/