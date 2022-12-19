import { CompanyAccount } from "./class/CompanyAccount";
import { ExampleAccount } from "./class/ExampleAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.getName();
peopleAccount.deposit(22);
peopleAccount.withdraw(10);
peopleAccount.getBalance();
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.getName();
companyAccount.deposit(22);
companyAccount.withdraw(10);
companyAccount.getBalance();
companyAccount.getLoan(10);
console.log(companyAccount);

const exampleAccount: ExampleAccount = new ExampleAccount("Artur", 17);
exampleAccount.getName();
exampleAccount.deposit(22);
exampleAccount.withdraw(10);
exampleAccount.getBalance();
console.log(exampleAccount);
