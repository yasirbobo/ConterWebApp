const displayOutput = document.getElementById('displayoutput')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')

let counter = 0
increment.addEventListener('click', function(){
    counter++
    displayOutput.innerText = counter;
})
decrement.addEventListener('click', function(){
    counter--
    displayOutput.innerText = counter;
})