const heights = [65, 66, 76, 33, 65, 77, 81];

function getMax(numbers){
     let max = numbers[0];
     for(const num of numbers){
        if(num > max){
            max = num;
        }
    } 
}

const max = getMax(heights);
console.log('max value is', max);