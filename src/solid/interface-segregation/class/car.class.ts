import VehicleCar from "../interface/vehicle-car.interface";

export default class Car implements VehicleCar {

    constructor(
        color: string, 
        year: number,
        engine: number,
        seats: number
    ) {
        this.carConfiguration(color, year, engine, seats)
    }

    startVehicle(): void {
        console.log('startVehicle')
    }

    carConfiguration(color: string, year: number, engine: number, seats: number): void {
        console.log('carConfiguration')

        this.startVehicle()
    }

}