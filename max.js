const disha = 56;
const salman = 95;

if(disha > salman) {
    console.log('Disha will get the strawberry');
}
else if(disha < salman) {
    console.log('Salman will get the strawberry');
}

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    else{
        return num2
    }
}

const max1 = getMax(96, 79);
const max2 = getMax(56, 95);

const ultimateMax = getMax(max1, max2);

console.log('Max of two is:', ultimateMax);
