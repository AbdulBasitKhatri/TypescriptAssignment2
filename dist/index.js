"use strict";
class Vehicle {
    constructor(_pmake, _pmodel, _pyear, _prented) {
        this._make = _pmake;
        this._model = _pmodel;
        this._year = _pyear;
        this._rented = _prented;
    }
    set make(makeName) {
        this._make = makeName;
    }
    set model(modelName) {
        this._model = modelName;
    }
    set year(yearVal) {
        this._year = yearVal;
    }
    set rented(Rented) {
        this._rented = Rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    rent() {
        if (this._rented == true) {
            return "Vehicle is already rented!";
        }
        this._rented = true;
        return "Vehicle rented successfully!";
    }
    returnVehicle() {
        if (this._rented == true) {
            this._rented = false;
            return "Vehicle returned successfully!";
        }
        return "Vehicle is not rented yet!";
    }
}
class Motorcycle extends Vehicle {
    constructor(_make, _model, _year, _rented, s) {
        super(_make, _model, _year, _rented);
        this.category = "Motorcycle";
        this.speed = s;
    }
    rentalRate(rate) {
        return rate;
    }
}
class Car extends Vehicle {
    constructor(_make, _model, _year, _rented, s) {
        super(_make, _model, _year, _rented);
        this.category = "Car";
        this.speed = s;
    }
    rentalRate(rate) {
        return rate;
    }
}
class Truck extends Vehicle {
    constructor(_make, _model, _year, _rented, s) {
        super(_make, _model, _year, _rented);
        this.category = "Truck";
        this.speed = s;
    }
    rentalRate(rate) {
        return rate;
    }
}
let vehicles = [];
vehicles.push(new Car("Audi", "A3", 2019, false, "250 km/h"));
vehicles.push(new Car("Honda", "Accord", 2006, false, "116 mph"));
vehicles.push(new Motorcycle("Ducati", "DesertX", 2022, false, "226 km/h"));
vehicles.push(new Truck("Isuzu", "D-Max", 2022, false, "180 kph"));
vehicles.push(new Motorcycle("Kawasaki", "Ninja H2", 2020, false, "400 kmph"));
let vi = 0;
const nbtn = document.getElementById("next");
const pbtn = document.getElementById("prev");
const vcard = document.getElementById("v-card");
const notify = document.getElementById("notify");
nbtn.onclick = function () {
    vi++;
    if (vi > vehicles.length - 1) {
        vi = 0;
    }
    dispV();
};
pbtn.onclick = function () {
    vi--;
    if (vi < 0) {
        vi = vehicles.length - 1;
    }
    dispV();
};
let timeoutID = [];
function notifyUser(n) {
    for (let b in timeoutID) {
        clearTimeout(+b);
    }
    timeoutID = [];
    notify.innerHTML = n;
    let a = setTimeout(() => { notify.innerHTML = ""; }, 1500);
    timeoutID.push(a);
}
function dispV() {
    vcard.innerHTML = `</br>Category: ${vehicles[vi].category}</br></br>Make: ${vehicles[vi].make}</br>Model: ${vehicles[vi].model}</br>Year: ${vehicles[vi].year}</br>Top Speed: ${vehicles[vi].speed}</br></br>Rented: `;
    if (vehicles[vi].rented == false) {
        vcard.innerHTML += `No</br><button class="fwidth" onclick="notifyUser(vehicles[vi].rent());dispV();">Rent</button>`;
    }
    else {
        vcard.innerHTML += `Yes</br><button class="fwidth" onclick="notifyUser(vehicles[vi].returnVehicle());dispV();">Return</button>`;
    }
}
dispV();
//# sourceMappingURL=index.js.map