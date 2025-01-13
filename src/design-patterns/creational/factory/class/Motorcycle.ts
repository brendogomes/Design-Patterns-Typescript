import { IVehicle } from "../interface/IVehicle";

export class Motorcycle implements IVehicle {
    drive(): void {
        console.log("Drive motorcycle!");
    }
}