#!/usr/bin/env ts-node-script
import { promises as fs } from "fs";

const main = async () => {
    if (!process.argv[2]) {
        throw new Error("You must supply a filename to search.")
    }
    
    const duplicates: Set<string> = new Set<string>(); //Create a unique set of numbers that are duplicated
    
    const filename: string = process.argv[2];
    
    const data: string[] = (await fs.readFile(filename)).toString().split("\n"); //Read file, convert to string and split based on newline

    for (var i = 0; i < data.length; i++) {
        if (i % 10000) {
            console.log(i + " lines processed...");
        }
        
        const element = data[i];
        if (data.indexOf(element) !== i) {
            duplicates.add(element);
        }
    }

    duplicates.forEach((item) => {
        console.log(data.indexOf(item) + ": " + item); //Loop through each duplicate and find the first instance of each duplicate being used
    })
}

main();