let convertBtn = document.getElementById('convert');
let clearBtn = document.getElementById('clear');
let temp = document.getElementById('temperature');
let chooseF = document.getElementById('farenheight');
let chooseC = document.getElementById('celcius');
let tempDiv = document.getElementById('conTemp');
let hot;
let cold;
let tempVal;


convertBtn.addEventListener('click', function(){
    convertTemp();
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
  e.preventDefault(); 
    convertTemp();
  }
});



clearBtn.addEventListener('click', function(){
  temp.value = '';
  tempDiv.innerHTML = '';
  temp.value = '';

});

function toCelsius () {
  tempVal = temp.value;
  let celcTemp = (tempVal -32)/1.8;
  tempDiv.innerHTML = `The temperature is ${celcTemp}°C`;
   hot = 32;
   cold = 0;
  }
  
  function toFahrenheit () {
    tempVal = temp.value; 
    let farTemp = (tempVal * 1.8) + 32;
    farTemp = parseInt(farTemp);
    tempDiv.innerHTML = `The temperature is ${farTemp}°F`;
    hot = 90;
    cold = 32;
    
  }
    
  function convertTemp(){
    if(isNaN(temp.value) || temp.value == ''){
      alert('You have attempted to convert a value other than a number. Please enter a number and try again.')
    }else{
    if(chooseF.checked){
      toFahrenheit();
    }else if(chooseC.checked){
      toCelsius();
    }else{
      alert('please choose to convert to farenheight or celcius');
    }
     hotOrCold();
  }
}

function hotOrCold(){
  if(tempVal>=hot ){
    tempDiv.className = ("hot");
  }else if(tempVal<=cold){
    tempDiv.className = ("cold");
  }else{
    tempDiv.className = ("neutral");
    
  }
}
