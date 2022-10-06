// x['b'] = 1;
// x['c'] = 1;

// x['d'] = 1;

// let key = 'd';

// x[key]++;
// x[key]++;
// x[key]++;

// console.log(x);

const str = 'aadsfadfasdfasdfxcvbqaaa';

let x = { a: 1 };

for (let i = 0; i < str.length; i++) {
  let key = str[i];
  if (x[key] === undefined) {
    x[key] = 1;
  } else {
    x[key]++;
  }
}

console.log(x);
