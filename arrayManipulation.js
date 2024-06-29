function processArray(numbers) {
    // Check if the input is an array
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array");
    }
    const processedArray = [];
    // Process the array by squaring even numbers and tripling odd numbers
    numbers.forEach(num => {
        if (typeof num !== 'number') {
            throw new Error("Array must contain only numbers");
        }
        if (num % 2 === 0) {
            processedArray.push(num * num);
        } else {
            processedArray.push(num * 3);
        }
    });
    return processedArray;
}
// Function to process the array of numbers
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}
// Function to format the array of strings with the processed array of numbers
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error('Both arrays must have the same length');
    }

    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}