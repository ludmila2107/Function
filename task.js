// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg = 8;
 for (let i = 0; i < arr.length; i++) {
  if(arr[i] > arr[i - 1]) {
    max = arr[i];
  }
   if(arr[i] < arr[i - 1]) {
     min = arr[i];
   }
   sum += arr[i];
   avg = Number ((sum / arr.length).toFixed(2));
   
 }
  return { min: min, max: max, avg: avg };
}



// Задание 2
let arrOfArr=[[1, 2, 3, 4], [108, 20, -10, -20]];

function makeWork(arrOfArr,func){
  let max = -Infinity;


  for(let i = 0; i < arrOfArr.length; i++) {
    let result = worker(arrOfArr[i]);
   console.log(result);
    if(result > max){
      max = result;
    }
   
  }
  return max;
}



 function worker(arr) {
   let sum = 0;
  for(let i = 0; i < arr.length; i++) {
     sum+= arr[i];
    
  }
return sum;   
}



// Задание 3
function worker2(arr) {
  // Ваш код
}
