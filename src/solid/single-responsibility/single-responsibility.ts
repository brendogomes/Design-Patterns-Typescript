import { OrderService } from "./class/OrderService";
import { ReportService } from "./class/ReportService";

const orderService = new OrderService();
orderService.processOrder("Order 1");
orderService.processOrder("Order 2");

const reportService = new ReportService(["Order 1", "Order 2"]);
reportService.generateSalesReport();