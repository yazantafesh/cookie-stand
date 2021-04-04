'use strict';

let workingHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle={
  minCusHr:23,
  maxCusHr:65,
  avgCookieCus:6.3,
  cusPerHour:[],
  cookiePerHour:[],
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(23,65));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*6.3) +' cookies');
    }
    console.log(this.cookiePerHour);
  }
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
seattle.getCusPH();
seattle.getCookiePH();

let parent=document.getElementById('cities');
console.log(parent);

let seattleElement=document.createElement('h2');

parent.appendChild(seattleElement);

seattleElement.textContent='Seattle';

let seattleUlElement=document.createElement('ul');

parent.appendChild(seattleUlElement);

for (let i=0; i < workingHours.length; i++){

  let seattleLiElement=document.createElement('li');
  
  seattleUlElement.appendChild(seattleLiElement);

  seattleLiElement.textContent=seattle.cookiePerHour[i];
}


//Seattle done here. 

let tokyo={
  minCusHr:3,
  maxCusHr:24,
  avgCookieCus:1.2,
  cusPerHour:[],
  cookiePerHour:[],
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(3,24));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*1.2) +' cookies');
    }
    console.log(this.cookiePerHour);
  }
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
tokyo.getCusPH();
tokyo.getCookiePH();



let tokyoElement=document.createElement('h2');

parent.appendChild(tokyoElement);

tokyoElement.textContent='Tokyo';

let tokyoUlElement=document.createElement('ul');

parent.appendChild(tokyoUlElement);

for (let i=0; i < workingHours.length; i++){

  let tokyoLiElement=document.createElement('li');
  
  tokyoUlElement.appendChild(tokyoLiElement);

  tokyoLiElement.textContent=tokyo.cookiePerHour[i];
}

//Tokyo done here


let dubai={
  minCusHr:11,
  maxCusHr:38,
  avgCookieCus:3.7,
  cusPerHour:[],
  cookiePerHour:[],
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(11,38));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*3.7) +' cookies');
    }
    console.log(this.cookiePerHour);
  }
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
dubai.getCusPH();
dubai.getCookiePH();


let dubaiElement=document.createElement('h2');

parent.appendChild(dubaiElement);

dubaiElement.textContent='Dubai';

let dubaiUlElement=document.createElement('ul');

parent.appendChild(dubaiUlElement);

for (let i=0; i < workingHours.length; i++){

  let dubaiLiElement=document.createElement('li');
  
  dubaiUlElement.appendChild(dubaiLiElement);

  dubaiLiElement.textContent=dubai.cookiePerHour[i];
}

//Dubai done here


let paris={
  minCusHr:20,
  maxCusHr:38,
  avgCookieCus:2.3,
  cusPerHour:[],
  cookiePerHour:[],
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(20,38));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*2.3) +' cookies');
    }
    console.log(this.cookiePerHour);
  }
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
paris.getCusPH();
paris.getCookiePH();


let parisElement=document.createElement('h2');

parent.appendChild(parisElement);

parisElement.textContent='Paris';

let parisUlElement=document.createElement('ul');

parent.appendChild(parisUlElement);

for (let i=0; i < workingHours.length; i++){

  let parisLiElement=document.createElement('li');
  
  parisUlElement.appendChild(parisLiElement);

  parisLiElement.textContent=paris.cookiePerHour[i];
}

//Paris done here


let lima={
  minCusHr:2,
  maxCusHr:16,
  avgCookieCus:4.6,
  cusPerHour:[],
  cookiePerHour:[],
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(2,16));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*4.6) +' cookies');
    }
    console.log(this.cookiePerHour);
  }
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
lima.getCusPH();
lima.getCookiePH();


let limaElement=document.createElement('h2');

parent.appendChild(limaElement);

limaElement.textContent='Lima';

let limaUlElement=document.createElement('ul');

parent.appendChild(limaUlElement);

for (let i=0; i < workingHours.length; i++){

  let limaLiElement=document.createElement('li');
  
  limaUlElement.appendChild(limaLiElement);

  limaLiElement.textContent=lima.cookiePerHour[i];
}


