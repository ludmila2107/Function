// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg = 8;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];

  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}



// Задание 2


function makeWork(arrOfArr, func) {
  let max = -Infinity;


  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(arrOfArr[i]);
    console.log(result);
    if (result > max) {
      max = result;
    }

  }
  return max;
}



function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

  }
  return sum;
}



// Задание 3
function worker2(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return Math.abs(Math.max(...arr) - Math.min(...arr))
}

