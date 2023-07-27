const form = document.querySelector(".form");
    let email = form.querySelector("#emailId")
    form.addEventListener('submit',(e) => {
      if(!validateInput(e)){
        e.preventDefault();
      }
    });
    function validateInput(e) {
      let emailVal = email.value
      let success =true
      if (!validateEmail(emailVal)) {
        success=false
        setError(email,"Valid email required");
      } else {
        setSuccess(email);
      }
      return success
    }

    function setError(element, message) {
        let inputBox = element.parentElement
        let errMSg = inputBox.querySelector('#errMsg')
        let submitBtn = inputBox.parentElement.querySelector('.submitBtn')

        errMSg.innerText= message
        inputBox.classList.add('error')
        submitBtn.classList.remove('submitBtnSuccess')
        submitBtn.classList.add('submitBtn')

    }
    function setSuccess(element) {
        let inputBox = element.parentElement
        let submitBtn = inputBox.parentElement.querySelector('.submitBtn')
        let errMSg = inputBox.querySelector('#errMsg')
        errMSg.innerText= ""
        inputBox.classList.remove('error')
        submitBtn.classList.add('submitBtnSuccess')
        let emailId = element.value
        sessionStorage.setItem("email",JSON.stringify(emailId));
        // sessionStorage.setItem("items", JSON.stringify(finalCartList.innerHTML));

    }
    function validateEmail(emailVal) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailVal)){
        return true;
      }
      return false;
    }

let inputArea = form.querySelector('#emailId')
inputArea.addEventListener('input',(e)=>{
  validateInput(e)
})