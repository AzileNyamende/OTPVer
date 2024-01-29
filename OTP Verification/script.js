const inputs = document.querySelector("input"),
button = document.querySelector("button");

console.log(inputs, button);

//iteration for inputs
input.forEach((input, index1) {
    input.addEventListener("keyup", () => {
        const currentInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;

        if(currentInput.value.lenght > 1){
            cureentInput.value = "";
            return;
        }
        if (nextInput && nextInput.hasAttribute("disabled") &&currentInput.value !== ""){
         nextInput.removeAttribute("disabled");
         nextInput.focus();
        }  
        
        // backspace key
        if (e.key === "Backspace"){
            inputs.forEach((input, index2) => {
                if (index1 <= index2 && prevInput){
                    input.setAttribue("disabled", true);
                    currentInput.value = "";
                    prevInput.focus();

            }
        
});
        }
        //forth input index
        if(!inputs[3].disabled && !inputs[3]){
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
    });
    
});

//locate which index is 0 and load
window.addEventListener("load", () => inputs[0].focus());