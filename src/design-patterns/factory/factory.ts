import { VehicleFactory } from "./class/VehicleFactory";

const car = VehicleFactory.createVehicle("car");
const motorcycle = VehicleFactory.createVehicle("motorcycle");

console.log(car?.drive());
console.log(motorcycle?.drive());