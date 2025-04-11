//task1

let infoArray = [
  'Sunday: Back to normal',
  'Monday: Team meeting',
  'Tuesday: Working on a project',
  'Wednesday: Evening sports',
  'Thursday: Completion of tasks',
  'Friday: Shopping for Shabbat',
  'Saturday: Sabbath rest',
];

// Ask the user to enter a day of the week (can be a number, English, or Hebrew)
let userInput = prompt(
  'Enter a day of the week (1-7, or the name in English or Hebrew):',
).toLowerCase();

// Define the days of the week in both English and Hebrew for comparison
let daysInEnglish = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];
let daysInHebrew = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

// Normalize the input to either English or Hebrew number system
let dayIndex = -1;

if (!isNaN(userInput) && userInput >= 1 && userInput <= 7) {
  // If the input is a number, use it directly
  dayIndex = parseInt(userInput) - 1;
} else if (daysInEnglish.includes(userInput)) {
  // If the input is in English
  dayIndex = daysInEnglish.indexOf(userInput);
} else if (daysInHebrew.includes(userInput)) {
  // If the input is in Hebrew
  dayIndex = daysInHebrew.indexOf(userInput);
}

switch (dayIndex) {
  case 0:
    alert(infoArray[0]); // Sunday
    break;
  case 1:
    alert(infoArray[1]); // Monday
    break;
  case 2:
    alert(infoArray[2]); // Tuesday
    break;
  case 3:
    alert(infoArray[3]); // Wednesday
    break;
  case 4:
    alert(infoArray[4]); // Thursday
    break;
  case 5:
    alert(infoArray[5]); // Friday
    break;
  case 6:
    alert(infoArray[6]); // Saturday (Sabbath)
    break;
  default:
    alert('Invalid input! Please enter a valid day (number or name).');
}

/*  ---------------------*/
//task1  - loop

let i = 0,
  sum = 0;

while (i <= 100) {
  sum = sum + i;
  i++;
}
console.log(sum);

/*  ---------------------*/
//task2

do {
  let num = prompt('Enter number');
} while (isNaN(num) && num > 0);

/*  ---------------------*/
//task3

let x = 0;

for (; x <= 10; x++) {
  console.log('7' + '*' + x + '=' + 7 * x);
}

/*  ---------------------*/
//task4
