//document.addEventListener('DOMContentLoaded', function(){
const form = document.querySelector('#contactForm');
const inputs = form.querySelectorAll('input[required], textarea[required]');

//wyłączamy domyślną walidację
form.setAttribute('novalidate', true);

const displayFieldError = function(elem) {
    const fieldRow = elem.closest('.form-row');
    const fieldError = fieldRow.querySelector('.field-error');
    if (fieldError === null) {
        const errorText = elem.dataset.error;
        const divError = document.createElement('div');
        divError.classList.add('field-error');
        divError.innerText = errorText;
        fieldRow.appendChild(divError);
    }
};

const hideFieldError = function(elem) {
    const fieldRow = elem.closest('.form-row');
    const fieldError = fieldRow.querySelector('.field-error');
    if (fieldError !== null) {
        fieldError.remove();
    }
};

[...inputs].forEach(elem => {
    elem.addEventListener('input', function() {
        if (!this.checkValidity()) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
            hideFieldError(this);
        }
    });
        if (elem.type === "checkbox") {
            elem.addEventListener('click', function() {
                const formRow = this.closest('.form-row');
                if (this.checked) {
                    this.classList.remove('error');
                    hideFieldError(this);
                } else {
                    this.classList.add('error');
                }
            });
        }
});
//});
const checkFieldsErrors = function(elements) {
    //ustawiamy zmienną na true. Następnie robimy pętlę po wszystkich polach
    //jeżeli któreś z pól jest błędne, przełączamy zmienną na false.
    let fieldsAreValid = true;
    [...elements].forEach(elem => {
        if (elem.checkValidity()) {
            hideFieldError(elem);
            elem.classList.remove('error');
        } else {
            displayFieldError(elem);
            elem.classList.add('error');
            fieldsAreValid = false;
        } 
    });
    return fieldsAreValid;
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (checkFieldsErrors(inputs)) { 
        const output = document.getElementById('output');
        output.style.display="block";
        window.scrollTo(0,3000); 
        }
        createBussinesCard();         
                        
});
    
function changePhoto() {
    const preview = document.querySelector('#photo');
    const file = document.querySelector('#field-photo').files[0];
    const reader  = new FileReader();
    const btn = document.getElementById('btn');
    btn.addEventListener("click", function () {   
        if(/\.(jpe?g|png|gif)$/i.test(file.name)){
            if (checkFieldsErrors(inputs)) { 
                preview.src = reader.result;
            }
        }
    }, false);
    if (file) {
        reader.readAsDataURL(file);   
    }
} 

function changeBackground() {
    const back = document.querySelector('#output');
    const file2 = document.querySelector('#field-background').files[0];
    const reader2 = new FileReader();
    const btn = document.getElementById('btn');
    btn.addEventListener("click", function () {  
        if(/\.(jpe?g|png|gif)$/i.test(file2.name)){
        back.style.background = 'url(' + reader2.result + ")";
        }
    }, false);
    if (file2) {
        reader2.readAsDataURL(file2);    
    }
} 

function createBussinesCard (){
    const name = document.getElementById('field-name').value;
    const surname = document.getElementById('field-surname').value;
    const company = document.getElementById('field-company').value;
    const position = document.getElementById('field-position').value;
    const adress = document.getElementById('field-adress').value;
    const email = document.getElementById('field-email').value;
    const tel = document.getElementById('field-tel').value;
    const webside =document.getElementById('field-webside').value;
    const textarea = document.getElementById('field-message').value;
  
    const cardName = document.getElementById('name');
    cardName.innerText = name + " " + surname;
    
    const cardPosition = document.getElementById('position');
    cardPosition.innerText = position;
 
    const cardCompany = document.getElementById('company');
    cardCompany.innerText = company.toUpperCase();
    
    const cardAdress = document.getElementById('adress');
    cardAdress.innerText = adress;
    
    const cardTextarea = document.getElementById('textarea');
    cardTextarea.innerText = textarea;
    
    const cardTel = document.getElementById('tel');
    cardTel.innerText = "+48 " + tel;
    
    const cardEmail = document.getElementById('email');
    cardEmail.innerText = email;
   
    const cardWebside = document.getElementById('webside');
    cardWebside.innerText = webside;
      
}
//});
