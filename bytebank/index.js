import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo._saldo = 10;
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteAlice = new ContaCorrente(1001, cliente2);
contaCorrenteAlice._saldo = 100;
contaCorrenteAlice.depositar(500);

const cliente3 = new Cliente("Bel", 88822233309);

const contaCorrenteBel = new ContaCorrente(1001, cliente3);
contaCorrenteBel._saldo = 100;

contaCorrenteAlice.transferir(300, contaCorrenteBel);

console.log(ContaCorrente.numeroDeContas);
console.log(contaCorrenteAlice);
console.log(cliente3, contaCorrenteBel._saldo);
