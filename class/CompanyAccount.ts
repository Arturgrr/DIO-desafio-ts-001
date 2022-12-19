import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	getLoan = (value: number): void => {
		if (!this.validateStatus()) return console.log("Sua conta possui o status negativo!");
		if (value < 0) return console.log("Você não pode fazer um empréstimo um valor negativo");
		this.balance += value;
		console.log(`Voce pegou um empréstimo de ${value}`);
	};
}
