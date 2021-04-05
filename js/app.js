'use strict';

const workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


const seattle = {
  locationName: 'Seattle',
  minCusHr: 23,
  maxCusHr: 65,
  avgCookieCus: 6.3,
  cusPerHour: [],
  cookiePerHour: [],
  total: 0,

  getCusPH: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr, this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },

  getCookiePH: function () {
    for (let i = 0; i < workingHours.length; i++) {

      this.cookiePerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookieCus));

      this.total += this.cookiePerHour[i];
    }
    console.log(this.cookiePerHour);
  },

  render: function () {
    let parent = document.getElementById('cities');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.locationName;

    let ulElement = document.createElement('ul');

    parent.appendChild(ulElement);

    for (let i = 0; i < workingHours.length; i++) {

      let liElement = document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent = `${workingHours[i]}: ${this.cookiePerHour[i]} Cookies`;
    }

    let totalLi = document.createElement('li');

    ulElement.appendChild(totalLi);

    totalLi.textContent = `Total: ${this.total} Cookies`;
  }
};


seattle.getCusPH();
seattle.getCookiePH();
seattle.render();

//Seattle Done Here---------------------------------------------

const tokyo = {
  locationName: 'Tokyo',
  minCusHr: 3,
  maxCusHr: 24,
  avgCookieCus: 1.2,
  cusPerHour: [],
  cookiePerHour: [],
  total: 0,

  getCusPH: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr, this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },

  getCookiePH: function () {
    for (let i = 0; i < workingHours.length; i++) {

      this.cookiePerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookieCus));

      this.total += this.cookiePerHour[i];
    }
    console.log(this.cookiePerHour);
  },

  render: function () {
    let parent = document.getElementById('cities');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.locationName;

    let ulElement = document.createElement('ul');

    parent.appendChild(ulElement);

    for (let i = 0; i < workingHours.length; i++) {

      let liElement = document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent = `${workingHours[i]}: ${this.cookiePerHour[i]} Cookies`;
    }

    let totalLi = document.createElement('li');

    ulElement.appendChild(totalLi);

    totalLi.textContent = `Total: ${this.total} Cookies`;
  }
};


tokyo.getCusPH();
tokyo.getCookiePH();
tokyo.render();


//Tokyo Done Here ---------------------------------------

const dubai = {
  locationName: 'Dubai',
  minCusHr: 11,
  maxCusHr: 38,
  avgCookieCus: 3.7,
  cusPerHour: [],
  cookiePerHour: [],
  total: 0,

  getCusPH: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr, this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },

  getCookiePH: function () {
    for (let i = 0; i < workingHours.length; i++) {

      this.cookiePerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookieCus));

      this.total += this.cookiePerHour[i];
    }
    console.log(this.cookiePerHour);
  },

  render: function () {
    let parent = document.getElementById('cities');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.locationName;

    let ulElement = document.createElement('ul');

    parent.appendChild(ulElement);

    for (let i = 0; i < workingHours.length; i++) {

      let liElement = document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent = `${workingHours[i]}: ${this.cookiePerHour[i]} Cookies`;
    }

    let totalLi = document.createElement('li');

    ulElement.appendChild(totalLi);

    totalLi.textContent = `Total: ${this.total} Cookies`;
  }
};


dubai.getCusPH();
dubai.getCookiePH();
dubai.render();


//Dubai Done here -------------------------------------------

const paris = {
  locationName: 'Paris',
  minCusHr: 20,
  maxCusHr: 38,
  avgCookieCus: 2.3,
  cusPerHour: [],
  cookiePerHour: [],
  total: 0,

  getCusPH: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr, this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },

  getCookiePH: function () {
    for (let i = 0; i < workingHours.length; i++) {

      this.cookiePerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookieCus));

      this.total += this.cookiePerHour[i];
    }
    console.log(this.cookiePerHour);
  },

  render: function () {
    let parent = document.getElementById('cities');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.locationName;

    let ulElement = document.createElement('ul');

    parent.appendChild(ulElement);

    for (let i = 0; i < workingHours.length; i++) {

      let liElement = document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent = `${workingHours[i]}: ${this.cookiePerHour[i]} Cookies`;
    }

    let totalLi = document.createElement('li');

    ulElement.appendChild(totalLi);

    totalLi.textContent = `Total: ${this.total} Cookies`;
  }
};


paris.getCusPH();
paris.getCookiePH();
paris.render();

//Paris Done Here ----------------------------------------------


const lima = {
  locationName: 'Lima',
  minCusHr: 2,
  maxCusHr: 16,
  avgCookieCus: 4.6,
  cusPerHour: [],
  cookiePerHour: [],
  total: 0,

  getCusPH: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.cusPerHour.push(randomNumber(this.minCusHr, this.maxCusHr));
    }
    console.log(this.cusPerHour);
  },

  getCookiePH: function () {
    for (let i = 0; i < workingHours.length; i++) {

      this.cookiePerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookieCus));

      this.total += this.cookiePerHour[i];
    }
    console.log(this.cookiePerHour);
  },

  render: function () {
    let parent = document.getElementById('cities');
    console.log(parent);

    let nameElement = document.createElement('h2');

    parent.appendChild(nameElement);

    nameElement.textContent = this.locationName;

    let ulElement = document.createElement('ul');

    parent.appendChild(ulElement);

    for (let i = 0; i < workingHours.length; i++) {

      let liElement = document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent = `${workingHours[i]}: ${this.cookiePerHour[i]} Cookies`;
    }

    let totalLi = document.createElement('li');

    ulElement.appendChild(totalLi);

    totalLi.textContent = `Total: ${this.total} Cookies`;
  }
};


lima.getCusPH();
lima.getCookiePH();
lima.render();

