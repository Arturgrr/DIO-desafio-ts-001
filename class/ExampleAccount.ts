import { DioAccount } from "./DioAccount";

export class ExampleAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	deposit = (value: number): void => {
		if (!this.validateStatus()) return console.log("Sua conta possui o status negativo!");
		if (value < 1) return console.log("Valor inválido para deposito!");
		this.balance += value + 10;
		console.log(
			`Voce depositou ${value} reais + 10 reais de brinde do banco! Totalizando ${
				value + 10
			} reais depositados!`
		);
	};
}
