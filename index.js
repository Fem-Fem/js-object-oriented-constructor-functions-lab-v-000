scooter_contructor = function (year, color, model) {
  this.year = year
  // this.color = color
  this.model = model
}

function User(name, age, hometown) {
driver_contructor = function (name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}

PickupLocation_contructor = function (address, cities) {
  this.address = address
  this.cities = cities
}

scooter_contructor()
driver_contructor()
PickupLocation_contructor()

let Scotter = new scooter_contructor
