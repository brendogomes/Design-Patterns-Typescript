import Car from "./class/car.class";
import Motorcycle from "./class/motorcycle.class";

// Criando um objeto da classe Car, com propriedades como cor, ano, cilindrada e número de portas.
// O Car implementa apenas as funcionalidades necessárias para um carro.
const car = new Car('Azul', 2020, 2.6, 4);

// Criando um objeto da classe Motorcycle, com propriedades como cor, ano e cilindrada.
// A Motorcycle implementa apenas as funcionalidades necessárias para uma moto, sem incluir métodos que sejam específicos para um carro (como 'número de portas').
const motorcycle = new Motorcycle('Branca', 2020, 2.6);

// Exibindo as informações dos veículos
console.log(car);
console.log(motorcycle);

/**
 * Comentário sobre o Princípio da Segregação de Interface (ISP):
 * 
 * O código está implementando classes específicas para os tipos de veículos (Car e Motorcycle), 
 * seguindo o Princípio da Segregação de Interface. Isso significa que cada classe implementa
 * apenas os métodos e propriedades que são relevantes para o respectivo tipo de veículo.
 * 
 * Se houvesse uma interface ou classe base comum, ela não deveria forçar os veículos a implementarem
 * métodos que são específicos para um tipo e irrelevantes para o outro. Por exemplo, um método
 * para "abrir porta" deveria ser implementado apenas pela classe Car, e não pela classe Motorcycle.
 */
