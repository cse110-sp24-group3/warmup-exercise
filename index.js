document.getElementById('emotion_widget_form').addEventListener('submit', function(event) {
    var firstName = document.getElementById('firstName').value.trim();
    if(!firstName){
        event.preventDefault();
        console.log('No information was entered');
        alert('No information was entered');
    }
    else{
        console.log('Form submitted');
        alert('Form submitted');
    }
});