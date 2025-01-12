import { IVehicle } from "../interface/IVehicle";
import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";

export class VehicleFactory {
    static createVehicle(type: string): IVehicle | null {
        if (type === "car") {
            return new Car();
        } else if (type === "motorcycle") {
            return new Motorcycle();
        } else {
            console.log("Tipo de veículo desconhecido");
            return null;
        }
    }
}