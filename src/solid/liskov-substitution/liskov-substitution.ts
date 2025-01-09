import { Rectangle } from "./class/Rectangle";
import { Square } from "./class/Square";

function printRectangleArea(rectangle: Rectangle) {
    rectangle.setWidth(5);
    rectangle.setHeight(10);
    console.log('Area of Rectangle: ' + rectangle.getArea());
}

function printSquareArea(square: Square) {
    square.setSize(5);
    console.log('Area of Square: ' + square.getArea());
}

const rectangle = new Rectangle(5, 10);
printRectangleArea(rectangle);

const square = new Square(5);
printSquareArea(square);
