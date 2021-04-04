'use strict';

let workingHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function sum(a,b) {
  let sum=a+b;
  return sum;
}

let seattle={
  minCusHr:23,
  maxCusHr:65,
  avgCookieCus:6.3,
  cusPerHour:[],
  cookiePerHour:[],
  total:0,
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr,this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*this.avgCookieCus) +' Cookies');
    }
    console.log(this.cookiePerHour);
  },
  getTotal:function () {
    
    for (let i=0; i<workingHours.length; i++){
      this.total+=sum(parseInt(this.cusPerHour[i]*this.avgCookieCus),0);
    }
  },
};



function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
seattle.getCusPH();
seattle.getCookiePH();
seattle.getTotal();

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
let seattleLiElementTotal=document.createElement('li');
seattleUlElement.appendChild(seattleLiElementTotal);
seattleLiElementTotal.textContent='Total: '+seattle.total+' Cookies';


//Seattle done here.

let tokyo={
  minCusHr:3,
  maxCusHr:24,
  avgCookieCus:1.2,
  cusPerHour:[],
  cookiePerHour:[],
  total:0,
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr,this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*this.avgCookieCus) +' Cookies');
    }
    console.log(this.cookiePerHour);
  },
  getTotal:function () {
    
    for (let i=0; i<workingHours.length; i++){
      this.total+=sum(parseInt(this.cusPerHour[i]*this.avgCookieCus),0);
    }
  },
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
tokyo.getCusPH();
tokyo.getCookiePH();
tokyo.getTotal();


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
let tokyoLiElementTotal=document.createElement('li');
tokyoUlElement.appendChild(tokyoLiElementTotal);
tokyoLiElementTotal.textContent='Total: '+tokyo.total+' Cookies';

//Tokyo done here


let dubai={
  minCusHr:11,
  maxCusHr:38,
  avgCookieCus:3.7,
  cusPerHour:[],
  cookiePerHour:[],
  total:0,
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr,this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*this.avgCookieCus) +' Cookies');
    }
    console.log(this.cookiePerHour);
  },
  getTotal:function () {
    
    for (let i=0; i<workingHours.length; i++){
      this.total+=sum(parseInt(this.cusPerHour[i]*this.avgCookieCus),0);
    }
  },
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
dubai.getCusPH();
dubai.getCookiePH();
dubai.getTotal();


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
let dubaiLiElementTotal=document.createElement('li');
dubaiUlElement.appendChild(dubaiLiElementTotal);
dubaiLiElementTotal.textContent='Total: '+dubai.total+' Cookies';

//Dubai done here


let paris={
  minCusHr:20,
  maxCusHr:38,
  avgCookieCus:2.3,
  cusPerHour:[],
  cookiePerHour:[],
  total:0,
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr,this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*this.avgCookieCus) +' Cookies');
    }
    console.log(this.cookiePerHour);
  },
  getTotal:function () {
    
    for (let i=0; i<workingHours.length; i++){
      this.total+=sum(parseInt(this.cusPerHour[i]*this.avgCookieCus),0);
    }
  },
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
paris.getCusPH();
paris.getCookiePH();
paris.getTotal();


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
let parisLiElementTotal=document.createElement('li');
parisUlElement.appendChild(parisLiElementTotal);
parisLiElementTotal.textContent='Total: '+paris.total+' Cookies';

//Paris done here


let lima={
  minCusHr:2,
  maxCusHr:16,
  avgCookieCus:4.6,
  cusPerHour:[],
  cookiePerHour:[],
  total:0,
  getCusPH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr,this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },
  getCookiePH:function(){
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiePerHour.push(workingHours[i]+': '+parseInt(this.cusPerHour[i]*this.avgCookieCus) +' Cookies');
    }
    console.log(this.cookiePerHour);
  },
  getTotal:function () {
    
    for (let i=0; i<workingHours.length; i++){
      this.total+=sum(parseInt(this.cusPerHour[i]*this.avgCookieCus),0);
    }
  },
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
lima.getCusPH();
lima.getCookiePH();
lima.getTotal();


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
let limaLiElementTotal=document.createElement('li');
limaUlElement.appendChild(limaLiElementTotal);
limaLiElementTotal.textContent='Total: '+lima.total+' Cookies';

