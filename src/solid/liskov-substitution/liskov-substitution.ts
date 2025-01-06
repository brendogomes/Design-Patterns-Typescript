import Credit from "./class/credit.class";
import Debit from "./class/debit.class";
import NubankCripto from "./class/nubank-cripto.class";

// A classe Payment é a classe base, representando uma forma genérica de pagamento.
// As classes Credit, Debit e NubankCripto herdam de Payment, implementando formas específicas de pagamento.

const creditCard = new Credit();  // Instância da classe Credit (herda de Payment)
const debitCard = new Debit();    // Instância da classe Debit (herda de Payment)
const criptoWalletCard = new NubankCripto();  // Instância da classe NubankCripto (herda de Payment)

// O princípio de Substituição de Liskov afirma que podemos substituir qualquer instância da classe base Payment
// por instâncias das suas subclasses (Credit, Debit, NubankCripto), sem quebrar a funcionalidade do código.
// Isso significa que os objetos dessas subclasses devem ser capazes de ser utilizados em qualquer lugar onde 
// um objeto Payment é esperado, sem causar comportamentos inesperados.

creditCard.validate();  // Validação do pagamento usando crédito
creditCard.collectPayment();  // Coleta o pagamento usando crédito

debitCard.validate();  // Validação do pagamento usando débito
debitCard.collectPayment();  // Coleta o pagamento usando débito

criptoWalletCard.validate();  // Validação do pagamento usando criptomoeda
criptoWalletCard.collectPayment();  // Coleta o pagamento usando criptomoeda
