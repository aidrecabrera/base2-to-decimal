import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ! REMINDERS FOR SVENE.
// ! Don't use this function! It's a bad example of recursion.
// ! It will cause a stack overflow for large numbers.
export function binaryToDecimalBad(initial: number): number {
  if (initial === 0) return 0;
  const lastDigit = initial % 10;
  const remainingDigits = Math.floor(initial / 10);
  return lastDigit + 2 * binaryToDecimalBad(remainingDigits);
}

// * This is the better and working one. :D
export function binaryToDecimalWithSteps(
  binary: number
): { step: string; value: number }[] {
  let decimal = 0;
  let steps = [];
  let binaryString = binary.toString();

  for (let i = 0; i < binaryString.length; i++) {
    let digit = Number(binaryString[i]);
    let previousTotal = decimal;
    decimal += digit;
    let step = "";
    if (i === 0) {
      step = `Step ${i + 1}: ${digit} x 2 = ${decimal * 2}`;
    } else if (i === binaryString.length - 1) {
      step = `Step ${i + 1}: ${previousTotal} + ${digit} = ${decimal}`;
    } else {
      step = `Step ${i + 1}: (${previousTotal} + ${digit}) x 2 = ${
        decimal * 2
      }`;
    }
    decimal *= 2;
    steps.push({ step: step, value: decimal });
  }

  decimal /= 2;

  steps.push({
    step: `Binary ${binary} corresponds to ${decimal} in the decimal system.`,
    value: decimal,
  });

  return steps;
}
