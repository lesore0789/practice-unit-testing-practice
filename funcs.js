function isFive(num) {
  if(num == 5){
    return true
  }
  return false
}

function isOdd(number) {
  if(number % 2 == 0){
    return false
  } else if (typeof number !== 'number'){
    throw Error(`${number} is not a number!`)
  }
  return true
}

function myRange(min, max, step = 1) {
  let array = [];
  for(let i = min; i <= max; i += step){
    array.push(i)
  }
  return array
}


module.exports = { isFive, isOdd, myRange };
