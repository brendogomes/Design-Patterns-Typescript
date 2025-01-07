import Vehicle from "./vehicle";

export default interface VehicleCar extends Vehicle {

    carConfiguration(color: string, year: number, engine: number, seats: number): void;
}