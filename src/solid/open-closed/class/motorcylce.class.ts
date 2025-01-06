import VehicleMotorcycle from "../interface/vehicle-motorcylce.interface";

export default class Motorcyle implements VehicleMotorcycle {

    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.configure(color, year, engine);
    }

    startVehicle(): void {
        console.log('Ligando o motor.');
    }
    configure(color: string, year: number, engine: number): void {
        console.log(`Criando moto: ${color}, ${year}, ${engine}`);

        this.startVehicle()
    }
}