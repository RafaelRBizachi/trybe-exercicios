let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1
let numbersSort = [];
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);
  numbers.reverse();
  console.log(numbers);
 let numero1 = 0;
 let numero2 = 0;
 let numbersMulti = [];
 for(i = 0; i< numbers.length; i+=1){
    numero1 = numbers[i];
    console.log(numbers[i]);
    for(i2 = 1; i2< numbers.length+1; i2+=1){
    numero2 = numbers[i2];

    }
 }
 console.log(numbersMulti);