import VehicleCar from "../interface/vehicle-car.interface";

export default class Car implements VehicleCar {

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number,
        doors: number
    ) {
        this.configure(color, year, engine, seats, doors);
    }

    startVehicle(): void {
        console.log('Ligando o motor.');
    }
    configure(color: string, year: number, engine: number, seats: number, doors: number): void {
        console.log(`Criando carro: ${color}, ${year}, ${engine}, ${seats}, ${doors}`);

        this.startVehicle()
    }
}