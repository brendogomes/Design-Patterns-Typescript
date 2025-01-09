export class Square {
    private size: number;

    constructor(size: number) {
        this.size = size;
    }

    setSize(size: number): void {
        this.size = size;
    }

    getArea(): number {
        return this.size * this.size;
    }
}
