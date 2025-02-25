// Add an event listener to the profile form for the 'submit' event
document.getElementById('profileForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Create a profile object with values from the form inputs
    const profile = {
        name: document.getElementById('name').value, // Get the name input value
        age: document.getElementById('age').value, // Get the age input value
        gender: document.getElementById('gender').value, // Get the gender input value
        dob: document.getElementById('dob').value, // Get the date of birth input value
        weight: document.getElementById('weight').value, // Get the weight input value
        height: document.getElementById('height').value, // Get the height input value
        photo: document.getElementById('photo').files[0] ? URL.createObjectURL(document.getElementById('photo').files[0]) : null // Get the uploaded photo URL or null if no photo is uploaded
    };

    // Save the profile object to localStorage as a JSON string
    localStorage.setItem('profile', JSON.stringify(profile));
    // Show an alert to confirm the profile has been saved
    alert('Profile saved!');
    // Display the saved profile on the page
    displayProfile(profile);
});

// Add an event listener to the 'deleteProfile' button for the 'click' event
document.getElementById('deleteProfile').addEventListener('click', function() {
    // Confirm with the user before deleting the profile
    if (confirm('Are you sure you want to delete your profile?')) {
        // Remove the profile from localStorage
        localStorage.removeItem('profile');
        // Show an alert to confirm the profile has been deleted
        alert('Profile deleted!');
        // Reset the profile form to clear all input fields
        document.getElementById('profileForm').reset();
        // Hide the profile card and show the form for adding a new profile
        document.getElementById('profileCard').style.display = 'none';
        document.getElementById('profileForm').style.display = 'block';
        // Hide the 'Add New Profile' and 'Delete Profile' buttons
        document.getElementById('addNewProfile').style.display = 'none';
        document.getElementById('deleteProfile').style.display = 'none';
    }
});

// Add an event listener to the 'addNewProfile' button for the 'click' event
document.getElementById('addNewProfile').addEventListener('click', function() {
    // Show the profile form and hide the profile card
    document.getElementById('profileForm').style.display = 'block';
    document.getElementById('profileCard').style.display = 'none';
    // Hide the 'Add New Profile' and 'Delete Profile' buttons
    document.getElementById('addNewProfile').style.display = 'none';
    document.getElementById('deleteProfile').style.display = 'none';
});

// Function to display the profile details on the page
function displayProfile(profile) {
    // Update the profile card with the profile details
    document.getElementById('profileName').textContent = profile.name; // Set the name
    document.getElementById('profileAge').textContent = `Age: ${profile.age}`; // Set the age
    document.getElementById('profileGender').textContent = `Gender: ${profile.gender}`; // Set the gender
    document.getElementById('profileDob').textContent = `Date of Birth: ${profile.dob}`; // Set the date of birth
    document.getElementById('profileWeight').textContent = `Weight: ${profile.weight} kg`; // Set the weight
    document.getElementById('profileHeight').textContent = `Height: ${profile.height} cm`; // Set the height

    // Update the profile image if a photo is available
    if (profile.photo) {
        document.getElementById('profileImage').src = profile.photo; // Set the photo URL
    } else {
        document.getElementById('profileImage').src = ''; // Clear the photo if no image is available
    }

    // Show the profile card and hide the form
    document.getElementById('profileCard').style.display = 'block';
    document.getElementById('profileForm').style.display = 'none';
    // Show the 'Add New Profile' and 'Delete Profile' buttons
    document.getElementById('addNewProfile').style.display = 'block';
    document.getElementById('deleteProfile').style.display = 'block';
}