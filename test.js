

const loopTry = number1 => {
    return number1 * 1209083
}

let data = [1," 2", 3]

const show = data.map((x) => {
    return x + 2
})

console.log(loopTry(1231024));
console.log(show)


// condition

const test = [1, 2, 3];
const yes = false;

if (yes) {
    console.log(test[1])
} else {
    console.log(test[2])
}

{yes ? console.log(test[1]) : console.log(test[2])}

// == same value ||| === same type of the value
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  console.log(testStrict(7))
  // Change this value to test