document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const userTableBody = document.getElementById('userTableBody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        // Get selected food choices
        const foodChoices = Array.from(document.querySelectorAll('input[name="food"]:checked'))
            .map(checkbox => checkbox.value);
        
        if (foodChoices.length < 2) {
            alert('Please choose at least 2 food options');
            return;
        }

        const food = foodChoices.join(', ');
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        // Create a new row and append to the table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${food}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;
        userTableBody.appendChild(newRow);

        // Clear the form fields
        form.reset();
    });
});
