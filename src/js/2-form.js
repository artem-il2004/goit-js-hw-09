const formData =
{
    email: "",
    message: ""
};
const key = "feedback-form-state"; 

const formInput = document.querySelector(".feedback-form");

formInput.addEventListener("input", (event) => { 
    if (event.target.name === "email") {
        formData.email = event.target.value;
    } else if (event.target.name === "message") {
        formData.message = event.target.value;
    }
    localStorage.setItem(key, JSON.stringify(formData));
});

const storedFormData = JSON.parse(localStorage.getItem(key));

// console.log(storedFormData);


if (storedFormData != []) { 
    formInput.elements.email.value = storedFormData.email;
    formInput.elements.message.value = storedFormData.message;
    
}


formInput.addEventListener("submit", (event) => { 
    event.preventDefault();
    if (formInput.elements.email.value === "" || formInput.elements.message.value === "") { 
        alert("Fill please all fields");
        return;
    }
    formData.email = storedFormData.email;
    formData.message = storedFormData.message;
    console.log(formData);
    localStorage.clear;
    formData.email = "";
    formData.message = "";
    formInput.reset();

})