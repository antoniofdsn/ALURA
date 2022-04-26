class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  _saldo;
  //#saldo = 0
  //https://github.com/tc39/proposal-class-fields#private-fields

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
    return valor;
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo._saldo = 10;
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice._saldo = 0;

console.log(cliente1, contaCorrenteRicardo);
console.log(cliente2, contaCorrenteAlice);
