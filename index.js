// Form element
const form = document.getElementById('userForm');

// Output section
const outputSection = document.getElementById('outputSection');
const outputName = document.getElementById('outputName');
const outputEmail = document.getElementById('outputEmail');
const outputContactMethod = document.getElementById('outputContactMethod');
const outputTerms = document.getElementById('outputTerms');

// Error message container
const errorMessages = document.getElementById('errorMessages');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous error messages
    errorMessages.innerHTML = '';

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
    const termsAccepted = document.getElementById('acceptTerms').checked;

    let errors = '';

    // Validate Name
    if (name === '') {
        errors += '<p>Name is required.</p>';
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email === '') {
        errors += '<p>Email is required.</p>';
    } else if (!emailPattern.test(email)) {
        errors += '<p>Please enter a valid email address.</p>';
    }

    // Validate Contact Method
    if (!contactMethod) {
        errors += '<p>Please select a preferred contact method.</p>';
    }

    // Validate Terms and Conditions
    if (!termsAccepted) {
        errors += '<p>You must accept the terms and conditions.</p>';
    }

    // If there are validation errors, display them
    if (errors !== '') {
        errorMessages.innerHTML = errors;
        return;
    }

    // If validation is successful, display the form data in the output section
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputContactMethod.textContent = contactMethod ? contactMethod.value : 'None';
    outputTerms.textContent = termsAccepted ? 'Yes' : 'No';

    // Show the output section
    outputSection.style.display = 'block';

    // Display confirmation message
    alert('Form submitted successfully!');
});

// Real-time feedback for the "terms and conditions" checkbox
document.getElementById('acceptTerms').addEventListener('change', function() {
    if (this.checked) {
        errorMessages.innerHTML = ''; // Clear error if checkbox is checked
    }
});