'use strict';

const workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let cities = [];
let totalTotal=0;
let hourlyTotal=0;

function City(locationName,minCusHr,maxCusHr,avgCookieCus) {

  this.locationName = locationName;
  this.minCusHr = minCusHr;
  this.maxCusHr = maxCusHr;
  this.avgCookieCus = avgCookieCus;
  this.cusPerHour = [];
  this.cookiePerHour = [];
  this.total = 0;

  cities.push(this);

}

City.prototype.getCusPH = function () {
// console.log(this.cusPerHour);
  for (let i = 0; i < workingHours.length; i++) {
    this.cusPerHour.push(randomNumber(this.minCusHr, this.maxCusHr));
  }
};

City.prototype.getCookiePH = function () {

  for (let i = 0; i < workingHours.length; i++) {

    this.cookiePerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookieCus));

    this.total += this.cookiePerHour[i];
  }
};

let seattle = new City('Seattle', 23,65,6.3);

let tokyo = new City('Tokyo', 3,24,1.2);

let dubai = new City('Dubai', 11,38,3.7);

let paris = new City('Paris', 20,38,2.3);

let lima = new City('Lima', 2,16,4.6);



console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);

let parent = document.getElementById('cities');


let tableElement=document.createElement('table');
parent.appendChild(tableElement);


function header() {

  let headingRow=document.createElement('tr');
  tableElement.appendChild(headingRow);

  let thElement=document.createElement('th');
  headingRow.appendChild(thElement);
  thElement.textContent='';

  for (let i = 0; i < workingHours.length; i++) {

    let thElement=document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent=workingHours[i];
  }
  let totalThElement=document.createElement('th');
  headingRow.appendChild(totalThElement);
  totalThElement.textContent='Daily Location Total';
}


City.prototype.render = function () {



  let rowElement = document.createElement('tr');
  tableElement.appendChild(rowElement);

  let tdElement = document.createElement('td');
  rowElement.appendChild(tdElement);
  tdElement.textContent = this.locationName;

  for (let i = 0; i < workingHours.length; i++) {
    let tdElement = document.createElement('td');
    rowElement.appendChild(tdElement);
    tdElement.textContent = this.cookiePerHour[i];

  }
  let totalTdElement = document.createElement('td');
  rowElement.appendChild(totalTdElement);
  totalTdElement.textContent = this.total;

};

function footer() {

  let footerRow=document.createElement('tr');
  tableElement.appendChild(footerRow);

  let tdElement=document.createElement('td');
  footerRow.appendChild(tdElement);
  tdElement.textContent='Totals';

  for (let x = 0; x < workingHours.length; x++) {
    hourlyTotal=0;
    for (let y = 0; y < cities.length; y++) {

      hourlyTotal += cities[y].cookiePerHour[x];

    }

    let totalTdElement = document.createElement('td');
    footerRow.appendChild(totalTdElement);
    totalTdElement.textContent = hourlyTotal;
  }
  for (let r = 0; r < cities.length; r++) {
    totalTotal+= cities[r].total;
  }
  let totalTotalElement=document.createElement('td');
  footerRow.appendChild(totalTotalElement);
  totalTotalElement.textContent=totalTotal;
}



header();

for (let k = 0; k < cities.length; k++) {

  cities[k].getCusPH();
  cities[k].getCookiePH();
  cities[k].render();
}

footer();
