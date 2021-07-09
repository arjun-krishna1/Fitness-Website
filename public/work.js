let buttonSubmit = document.getElementById('button-submit')
buttonSubmit.addEventListener('click', () =>{
    console.log('clicked')
    let ageInput = document.getElementById('age')
    console.log(ageInput.value);
    if (ageInput.value === "1"){
        alert()
    }
})