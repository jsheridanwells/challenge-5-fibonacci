//select elements
let range = document.getElementById('range');
let valueBox = document.getElementById('range-value');
let button = document.getElementById('btn');
let output = document.getElementById('output');

//get fibonacci numbers up to a limit
function getFibonacci(limit) {
  let fibonacci = [1, 1];
  for (let i = 1; i <= limit; i++) {
    fibonacci.push(fibonacci[i-1] + fibonacci[i]);
  }
  return fibonacci;
}

//create message from array of fibonacci numbers to display
function showFibonacci(arr) {
	let message = '';
	for (let i = 0; i < arr.length; i++) {
		if (i % 5 === 0) {
			message += arr[i] + '<br>';
		} else {
			message += arr[i] + ' ';
		}
	}
	return message;
}

//user selects limit
range.addEventListener('mousemove', function(){
	valueBox.innerText = this.value;
});

//user generates and displays fibonacci numbers
button.addEventListener('click', function() {
	output.innerHTML = showFibonacci(getFibonacci(range.value));
});