const isPowerOfTwo = (n) => {
  return (n & (n - 1)) === 0 && n !== 0;
};

const solution = (N) => {
  for (let index = 1; index <= N; index++) {
    if (isPowerOfTwo(index)) {
      console.log("POWER");
    } else {
      console.log(index);
    }
  }
};

solution(16);

console.log("End Task 1 \n");

const solutionDelete = (string, cost) => {
  let Totalcost = 0;
  let n = string.length;

  for (let i = 1; i < n; i++) {
    if (string[i] === string[i - 1]) {
      if (cost[i] < cost[i - 1]) {
        Totalcost += cost[1];
        string = string.slice(0, i) + string.slice(i + 1);
        cost.splice(i, 1);
        i--;
        n--;
      } else {
        Totalcost += cost[i - 1];
        string = string.slice(0, i - 1) + string.slice(i);
        cost.splice(i - 1, 1);
        i -= 2;
        n--;
      }
    }
  }
  return Totalcost;
};

let sol = solutionDelete("abccbd", [0, 1, 2, 3, 4, 5]);

console.log(sol);
console.log("End Task 2 \n");

const solutionFib = (N) => {
  if (N === 0) return 0;
  if (N === 1) return 1;

  let a = 0,
    b = 1;
  const seen = new Map();
  let index = 1;

  while (index < N) {
    const nextTerm = sumDigits(a) + sumDigits(b);
    const pair = `${a},${b}`;

    if (seen.has(pair)) {
      const cycleStart = seen.get(pair);
      const cycleLength = index - cycleStart;
      const remainingSteps = (N - cycleStart) % cycleLength;

      for (let i = 0; i < remainingSteps; i++) {
        nextTerm = sumDigits(a) + sumDigits(b);
        a = b;
        b = nextTerm;
      }

      return a;
    }

    seen.set(pair, index);
    a = b;
    b = nextTerm;
    index++;
  }

  return b;
};

const sumDigits = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
};

console.log(solutionFib(2));
