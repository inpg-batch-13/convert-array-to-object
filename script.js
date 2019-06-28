function convert (data) {
  // Your code here
  var keys = Object.keys(data)
  var values = Object.values(data)
  var result = []

  for (var i = 0; i < keys.length; i++) {
    result.push([keys[i], values[i]])
  }

  return result
}

// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/

console.log(convert([]));
// []