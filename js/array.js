var avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

console.log(avgTemp);

var daysOfWeek = new Array(7);

daysOfWeek[0] = 'Sunday';

console.log(daysOfWeek.length);

var daysOfWeek2 = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
);

for (var i = 0; i < daysOfWeek2.length; i++) {
  console.log(daysOfWeek2[i]);
}

var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);

for (var i = 0; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;
numbers[numbers.length] = 11;

numbers.push(12);
numbers.push(13);

numbers.unshift(-1);
numbers.unshift(-2);

numbers[0] = -40;

console.log(numbers);

numbers.pop();
numbers.pop();
numbers.pop();

numbers.shift();
numbers.shift();

console.log(numbers);

numbers.splice(3, 3);

console.log(numbers);

numbers.splice(3, 0, 3, 4, 5, 15, 25);
console.log(numbers);

var avgTempWeek = [];

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

console.log(avgTempWeek);

console.log(avgTempWeek[1][2]);

for (var i = 0; i < avgTempWeek.length; i++) {
  for (var j = 0; j < avgTempWeek[i].length; j++) {
    console.log(avgTempWeek[i][j]);
  }
}

var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

var avgTempWeek3 = [12, 32.2, 12, 34, 21.2, 231.6, 32];
var avgTempWeek4 = [11, 12, 21, 33.2, 11.5, 11, 33.8];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

console.log(month[1][0][6]);

for (var x = 0; x < month.length; x++) {
  for (var y = 0; y < month[x].length; y++) {
    for (var z = 0; z < month[x][y].length; z++) {
      console.log(month[x][y][z]);
    }
  }
}
