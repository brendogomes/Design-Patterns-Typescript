import { IVehicle } from "../interface/IVehicle";

export class Car implements IVehicle {
    drive(): void {
        console.log("Drive car!");
    }
}