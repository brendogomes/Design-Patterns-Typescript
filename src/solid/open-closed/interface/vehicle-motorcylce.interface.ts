export default interface VehicleMotorcycle {
    startVehicle(): void;
    configure(
        color: string,
        year: number,
        engine: number
    ): void;
}