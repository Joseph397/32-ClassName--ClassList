// className
// classList

//className=================>

const first = document .getElementById('first');
const second = document .getElementById('second');
const third = document .getElementById('third');

// const classValue = first.className;
// console.log(classValue);

// second.className = 'colors';       // adds class to const secondi
// second.className = 'text';         // overrides previous value

second.className = 'color text';      // adds both classes at the same time


// cassList================>

// third.classList.add('colors');     // adds class
// third.classList.add('text');       // overrides class

third.classList.add('text','colors'); // adds both classes
third.classList.remove('text');       // removes class attribute

let result = third.classList.contains('colors');
if(result){
    console.log('hello world');
} else {
    console.log('does not have class');
}

const classValue = third.classList;
console.log(classValue);


