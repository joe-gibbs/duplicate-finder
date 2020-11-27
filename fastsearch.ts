#!/usr/bin/env ts-node-script
import { exec, ExecException } from "child_process";

if (!process.argv[2]) {
  throw new Error("You must supply a filename to search.");
}

exec(
  "sort " + process.argv[2] + " | uniq -d",
  (error: ExecException, stdout: string, stderr: string) => {
    if (error) {
      console.error(error.message);
      return;
    }
    if (stderr) {
      console.error(stderr);
      return;
    }
    console.log(stdout);
  }
);
