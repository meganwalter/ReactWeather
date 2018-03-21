// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('London', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('London').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.log('promise error', err)
// })

//Challenge Area

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('not two numbers!');
    }
  })
}

addPromise(2, 270).then(function (num) {
  console.log(num)
}, function (err) {
  console.log('error', err);
})
