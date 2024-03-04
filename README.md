# Base-2 to Base-10 Convert with Steps

### There are two Methods for Binary to Decimal Conversion

#### Method 1: `binaryToDecimalBad`

**Warning:** Don't use this function if you are using a dynamic input! It's a bad example of recursion and will cause a stack overflow for large numbers.

The first method, `binaryToDecimalBad`, is a recursive approach to convert binary numbers to decimal. However, I encountered a problem when doing a dynamic input since it's inefficient and prone to causing stack overflow errors for large binary numbers.

This function is only recommended if and only if the user is required to input the value and click a button that will calculate it, instead of calculating it on-the-go.

```typescript
export function binaryToDecimalBad(initial: number): number {
  if (initial === 0) return 0;
  const lastDigit = initial % 10;
  const remainingDigits = Math.floor(initial / 10);
  return lastDigit + 2 * binaryToDecimalBad(remainingDigits);
}
```

1. Take the leftmost digit of your initial number. Multiply it by 2.
2. Add the next digit of the binary number. The sum will be your new "initial number".
3. Keep repeating these steps, each time first multiplying by 2 and then adding the last digit.

#### Method 2: `binaryToDecimalWithSteps`

```typescript
/**
 * Function to convert a binary number to decimal with step by step explanation.
 * @param {number} binary - The binary number to be converted.
 * @return {Array} steps - An array of objects, each containing a step description and the value at that step.
 */
export function binaryToDecimalWithSteps(
  binary: number
): { step: string; value: number }[] {
  let decimal = 0;
  let steps = [];
  let binaryString = binary.toString();

  for (let i = 0; i < binaryString.length; i++) {
    // Convert the current digit to a number.
    let digit = Number(binaryString[i]);

    // Store the current total before adding the new digit.
    let previousTotal = decimal;

    // Add the current digit to the total.
    decimal += digit;

    let step = "";

    if (i === 0) {
      // If it's the first digit.
      step = `Step ${i + 1}: ${digit} x 2 = ${decimal * 2}`;
    } else if (i === binaryString.length - 1) {
      // If it's the last digit.
      step = `Step ${i + 1}: ${previousTotal} + ${digit} = ${decimal}`;
    } else {
      // For other digits, the step is the previous total plus the digit, all times 2.
      step = `Step ${i + 1}: (${previousTotal} + ${digit}) x 2 = ${
        decimal * 2
      }`;
    }

    // Multiply the total by 2 to get ready for the next digit.
    decimal *= 2;

    steps.push({ step: step, value: decimal });
  }

  // Divide the final total by 2 to get the decimal equivalent of the binary number.
  decimal /= 2;

  // Add the final step to the steps array.
  steps.push({
    step: `Binary ${binary} corresponds to ${decimal} in the decimal system.`,
    value: decimal,
  });

  // Return the steps array.
  // Kindly refer to page.tsx for the implementation.
  return steps;
}
```

The second method, `binaryToDecimalWithSteps`, offers a better solution. It's an iterative approach that processes each digit of the binary number individually, avoiding potential stack overflow issues.

Notice that there is a process where it returns the steps, which is a feature that provides a step-by-step breakdown of the conversion process. This is to provide an informative result.

While both methods achieve the same goal of binary to decimal conversion, the second method is preferred due to its efficiency, reliability, and clarity. In this case, it solved my stackoverflow problem when I implemented the on-the-go calculation feature.

That's all! 👀
