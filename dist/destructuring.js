'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

function computeScore(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      low = _ref2[0],
      mid = _ref2[1];

  console.log(low, mid);
}

computeScore([3, 4]);

function getScores() {
  return [3, 4, 5];
}

var scores = getScores();
console.log(scores);

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    low = _getScores2[0],
    mid = _getScores2[1],
    high = _getScores2[2];

console.log(low, mid, high);

var yes = 'Yes';
var no = 'No';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];


console.log('Yes is', yes);
console.log('No is', no);
console.log('o_O');

var user = {
  firstName: 'John',
  lastName: 'Doe',
  social: {
    facebook: 'johndone',
    twitter: 'jdoe'
  }
};

var first = user.firstName,
    last = user.lastName,
    fb = user.social.facebook,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;


console.log(first, last, fb, age);

function post(url, _ref4) {
  var _ref4$data = _ref4.data,
      firstName = _ref4$data.firstName,
      lastName = _ref4$data.lastName,
      cache = _ref4.cache;

  console.log(firstName, lastName, cache);
}

var result = post('api/users', { data: user, cache: false });

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

var _getUserInfo = getUserInfo(),
    firstName = _getUserInfo.firstName,
    lastName = _getUserInfo.lastName,
    twitter = _getUserInfo.social.twitter;

console.log(firstName, lastName, twitter);