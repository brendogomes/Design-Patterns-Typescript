import Vehicle from "./vehicle";

export default interface VehicleMotorcycle extends Vehicle {

    motorcycleConfiguration(color: string, year: number, engine: number, seats: number): void;
}