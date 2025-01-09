import { PremiumDiscount } from "./class/PremiumDiscount";
import { PriceCalculator } from "./class/PriceCalculator";
import { RegularDiscount } from "./class/RegularDiscount";
import { VipDiscount } from "./class/VipDiscount";

const regularDiscount = new RegularDiscount();
const vipDiscount = new VipDiscount();
const premiumDiscount = new PremiumDiscount();

// Inicializa o PriceCalculator com desconto para cliente regular
const calculator = new PriceCalculator(regularDiscount);
console.log(`Preço final (Regular): $${calculator.calculateFinalPrice(100)}`); // 95 (5% de desconto)

calculator.setDiscountStrategy(vipDiscount); // Troca para o desconto de cliente VIP
console.log(`Preço final (VIP): $${calculator.calculateFinalPrice(100)}`); // 80 (20% de desconto)

calculator.setDiscountStrategy(premiumDiscount); // Troca para o desconto de cliente Premium
console.log(`Preço final (Premium): $${calculator.calculateFinalPrice(100)}`); // 70 (30% de desconto)
