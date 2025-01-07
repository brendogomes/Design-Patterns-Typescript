import VehicleMotorcycle from "../interface/vehicle-motorcycle.interface";

export default class Motorcycle implements VehicleMotorcycle {

    constructor(
        color: string, 
        year: number,
        engine: number
    ) {
        this.motorcycleConfiguration(color, year, engine)
    }

    startVehicle(): void {
        console.log('startVehicle')
    }

    motorcycleConfiguration(color: string, year: number, engine: number): void {
        console.log('motorcycleConfiguration')
    }

}