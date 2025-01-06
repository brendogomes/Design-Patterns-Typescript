import Car from "./class/car.class";
import Motorcyle from "./class/motorcylce.class";
import TypeVehicleEnum from "./enum/type-vehicle.enum";

const type = TypeVehicleEnum.CAR;
let vehicle;

// Princípio Open/Closed: O código está aberto para extensão, mas fechado para modificação.
// Se quisermos adicionar um novo tipo de veículo (por exemplo, "BICYCLE"), não precisamos alterar 
// esse código. Podemos criar uma nova classe para "Bicycle" e adicionar um novo caso no enum
// TypeVehicleEnum, mantendo a estrutura existente intacta e sem modificar o fluxo de decisão
// já implementado.
if (type === TypeVehicleEnum.CAR) {
    vehicle = new Car('red', 2024, 2.0, 4, 4);
} else if (type === TypeVehicleEnum.MOTORCYCLE) {
    vehicle = new Motorcyle('red', 2024, 2.0);
}
