
function addingEventListener() {
    // Select the button with id 'button'
    const input = document.getElementById('button');
  
    // Define the callback function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the event listener to the button
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to set up the event listener
  addingEventListener();
  