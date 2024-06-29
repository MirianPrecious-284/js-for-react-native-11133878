TASK ONE:
The function checks if the input is an array.
It initializes an empty array processedArray to store the results.
It uses the forEach method to iterate over each number in the array.
For each number, it checks if it's even or odd:
If it's even, it squares the number and pushes it to processedArray.
If it's odd, it triples the number and pushes it to processedArray.
The function returns the processedArray containing the processed numbers.

TASK TWO:
In the formatArrayStrings function:
The function checks if both inputs are arrays.
It checks if both arrays have the same length.
It initializes an empty array formattedStrings to store the results.
It iterates over the arrays using a for loop.
For each pair of string and number, it checks if the string is a string and the number is a number.
It modifies each string based on its corresponding number:
Capitalizes the entire string if the number is even.
Converts the string to lowercase if the number is odd.
It pushes the modified string to formattedStrings.
The function returns the formattedStrings array containing the formatted strings.

TASK THREE:
In the createUserProfiles function:
The function checks if both inputs are arrays.
It checks if both arrays have the same length.
It initializes an empty array userProfiles to store the user profile objects.
It iterates over the arrays using a for loop.
For each pair of original and modified names, it checks if both are strings.
It creates an object with the id (auto-incremented starting from 1), originalName, and modifiedName.
It pushes the created object to userProfiles.
The function returns the userProfiles array containing the user profile objects.
