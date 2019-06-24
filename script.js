function convert (data) {
  // Your code here
// #1
//using for:
  // var result = []
  // for (var i = 0; i<data.length; i++){
  //   var biodata = {
  //     id: data[i][0],
  //     firstName: data[i][1],
  //     lastName: data[i][2],
  //     email: data[i][3]
  //   }
  //   result.push(biodata)
  // }

  // return result

  //#2
  //using .map();
  return data.map( function (x){
    var result = []
    var biodata = {
      id: x[0],
      firstName: x[1],
      lastName: x[2],
      email: x[3]
  }

return biodata
  
    }
  )

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