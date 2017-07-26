//let languages = ['JavaScript', 'PHP', 'Python','Ruby'];

// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let ru = languages[3];

// let [js, php, py, ru] = ['JavaScript', 'PHP', 'Python','Ruby'];

// console.log(js, php, py, ru);

//let scores = [3, 4, [5, 6]];

//let [low, mid, high] = scores;

//console.log(low, mid, high);

//let [low, mid, [high, higher]] = scores;

//console.log(low, mid, high, higher);

function computeScore([low, mid]) {
  console.log(low, mid);
}

computeScore([3, 4])

function getScores() {
  return [3, 4, 5];
}

let scores = getScores();
console.log(scores);
let [low, mid, high] = getScores();
console.log(low, mid, high);

let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes]

console.log('Yes is', yes);
console.log('No is', no);
console.log('o_O');

let user = {
  firstName: 'John',
  lastName: 'Doe',
  social: {
    facebook: 'johndone',
    twitter: 'jdoe'
  }
};

let {firstName: first, lastName: last, social: { facebook: fb }, age = 25} = user;

console.log(first, last, fb, age);

function post(url, {data: { firstName, lastName }, cache}) {
  console.log(firstName, lastName, cache);
}

let result = post('api/users', { data: user, cache: false });

function getUserInfo() {
  return {
    firstName: 'John',
    lastName: 'Doe',
    social: {
      facebook: 'johndone',
      twitter: 'jdoe'
    }
  };
}

let { firstName, lastName, social: { twitter } } = getUserInfo();

console.log(firstName, lastName, twitter);