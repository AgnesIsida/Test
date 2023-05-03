const riders = [
    {name: "Dina", sallary: 200},
    {name: "Ivan", sallary: 400},
    {name: "Ivannnn", sallary: 600},
  ]

let totalSallary = 0

  for(let rider of riders){
   totalSallary += rider.sallary
  }

console.log(totalSallary)

class Car{
constructor(model,brand,color) {
this.carColor = color;
this.brand = brand;
this.CarModel =model;
}
}
let myNewCar = new Car;
consoñe.log(myNewCar);