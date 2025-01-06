export default interface Payment {
    validate(): void;
    
    collectPayment(): void;
}