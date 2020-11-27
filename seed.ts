import { phone } from "faker";
import { promises as fs } from "fs";

let numbers: string = "";

for (let i = 0; i < 1_000_000; i++) {
    let number = phone.phoneNumber() + "\n";

    if (i % 100_000 == 0) {
        console.log(i + " generated...");
    }
    numbers += number;

    if (Math.random() < 0.01) { //Add duplicate number
        numbers += number;
    }
}

fs.writeFile("numbers.txt", numbers.toString()).then(
    () => {
        console.log("Finished seeding.");
    }, 
    (error) => {
        console.error(error);
    }
)