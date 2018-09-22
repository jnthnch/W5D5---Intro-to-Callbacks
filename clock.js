// class Clock {
//     constructor (){
//     let date = new Date();
//     this.hours = date.getHours(); 
//     this.minutes = date.getMinutes();
//     this.seconds = date.getSeconds();
// 
//     this.printTime();    
//     //schedule tick
//     setInterval( this._tick.bind(this), 1000);
//   }
// // 
// // 
// // 
// //     printTime(){
// //       let printable = `${this.hours}:${this.minutes}:${this.seconds}`;
// //       console.log(printable);
// //     }
// // 
// //     _tick() {
// //       this.seconds += 1;
// //       console.log(this);
// //       this.printTime();
// //     }
// // 
// // }
// // 
// // let newclock = new Clock();
// // 
// // 
// const readline = require("readline");
// 
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// // 
// function addNumbers(sum, numsLeft, completionCallback){
// 
//   if (numsLeft > 0) {
//     reader.question('What number do you want to add?', function (res) {
//       let answer = parseInt(res);
//       sum += answer;
//       console.log(sum); 
//       addNumbers(sum, numsLeft - 1, completionCallback);    
//     });
// 
//   } else {
//     completionCallback(sum); 
//   }
// }
// 
// addNumbers(0, 4, function (sum) {
//   console.log("Total Sum: " + sum);
//   reader.close();
// });
// 
// 
// function BubbleSort(arr) {
//   let unsorted = true;   
// 
//   while (unsorted === true) { 
//     unsorted = false; 
// 
//     arr.forEach((e, i) => {
//       if (i < arr.length ) {
//         // comparison logic
//         if (arr[i] > arr[i + 1]) {
//           [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
//           unsorted = true;
//         }
//       }
//     });
//   }
// 
//   console.log(arr);
// }

// BubbleSort([5, 4, 3, 2, 1]);


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, completionCallback) {
  let unsorted = true;   
  
  while (unsorted === true) { 
    unsorted = false; 
    
    arr.forEach((e, i) => {
      if (i < arr.length ) {
      
        reader.question(`is ${arr[i]} > ${arr[i+1]}, answer yes or no.`, function(res){
          if (res === 'yes'){
            [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
            unsorted = true;
        }
      });
      }
    });
  }
   
  console.log(arr);
}

absurdBubbleSort([5, 4, 3, 2, 1]);

