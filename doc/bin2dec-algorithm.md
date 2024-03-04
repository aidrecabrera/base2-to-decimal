- Take the leftmost digit of the initial number and multiply by 2
- Add the next digit of the binary number. The sum will be the new initial number
- Repeat. Each time first multiplying by 2 and then adding the last digit.

````
110011

1 x 2 = 2
(2 + 1) x 2 = 6
(6 + 0) x 2 = 12
(12 + 0) x 2 = 24
(24 + 1) x 2 = 50
(50 + 1) = 51

```tsc


````
