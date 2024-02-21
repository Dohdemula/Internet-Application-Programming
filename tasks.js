const submit = document.getElementById('submit');
const newTask = document.getElementById('tasks');

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener('input', function() {
    // Enable/disable the submit button based on whether there is text in the input field
    submit.disabled = !newTask.value.trim();
});

// Listen for submission of form
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the default submission of the form
    event.preventDefault();
    
    // Find the task the user just submitted
    const taskValue = newTask.value.trim();
    
    // Create a list item for the new task and add the task to it
    if (taskValue) {
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;
        
        // Add new element to our unordered list
        document.getElementById('tasks').appendChild(listItem);
        
        // Clear the input field after adding the task
        newTask.value = '';
        
        // Disable the submit button again after adding the task
        submit.disabled = true;
    }
});

// Prevent the default submission of the form
return false;
