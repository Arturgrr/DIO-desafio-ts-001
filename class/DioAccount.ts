export abstract class DioAccount {
	private readonly name: string;
	private readonly accountNumber: number;
	protected balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	getName = (): void => {
		return console.log(this.name);
	};

	deposit = (value: number): void => {
		if (!this.validateStatus()) return console.log("Sua conta possui o status negativo!");
		if (value < 1) return console.log("Valor inválido para deposito!");
		this.balance += value;
		console.log(`Voce depositou ${value} reais`);
	};

	withdraw = (value: number): void => {
		if (!this.validateStatus()) return console.log("Sua conta possui o status negativo!");
		if (value > this.balance)
			return console.log("Você não pode sacar um valor maior do oque possui");
		if (value < 0) return console.log("Você não pode sacar um valor negativo");
		this.balance -= value;
		console.log(`Você sacou ${value} reais`);
	};

	getBalance = (): void => {
		console.log(this.balance);
	};

	protected validateStatus = (): boolean => {
		return this.status;
	};
}
