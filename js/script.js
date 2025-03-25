/**
 * Function to transform the text input of specified input elements to capitalize the first letter and make the rest lowercase.
 *
 * @param {Array} inputList - List of selectors for the input elements to apply the transformation.
 */
function TransformToCapitalizeText(inputList = []) {
  // Select all elements based on the provided selectors
  let inputBoxes = document.querySelectorAll(inputList.join(','))

  // Iterate over each selected input element
  inputBoxes.forEach(inputElement => {
    // Add an 'input' event listener to each input element
    inputElement.addEventListener('input', function () {
      if (this.value.trim()) {
        // Check if input is not empty
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase()
      }
    })
  })
}

// Call the function with the specified input selectors
TransformToCapitalizeText(['#first_name', '#last_name'])
