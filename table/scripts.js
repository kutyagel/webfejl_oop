const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person {
    constructor({ firstname1, firstname2, lastname }) {
        this.firstname1 = firstname1;
        this.firstname2 = firstname2;
        this.lastname = lastname;
    }

    addRow(parentElement) {
        const row = document.createElement("tr");
        parentElement.appendChild(row);

        const lastnameCell = document.createElement("td");
        lastnameCell.innerHTML = this.lastname;
        row.appendChild(lastnameCell);

        const firstnameCell1 = document.createElement("td");
        firstnameCell1.innerHTML = this.firstname1;
        row.appendChild(firstnameCell1);

        if (this.firstname2) {
            const firstnameCell2 = document.createElement("td");
            firstnameCell2.innerHTML = this.firstname2;
            row.appendChild(firstnameCell2);
        } else {
            firstnameCell1.colSpan = 2;
        }
    }
}

class FormController {
    constructor(form) {
        this._form = form;
    }

    _getInputById(id) {
        return this._form.querySelector(`#${id}`);
    }

    get lastname() {
        const input = this._getInput('lastname')
        return input.value
    }

    get firstname1() {
        const input = this._getInput('firstname1')
        return input.value
    }

    get firstname2() {
        const input = this._getInput('firstname2')
        return input.value
    }

    validate() {
        let isValid = true;
    
        for (const id of ["lastname", "firstname1"]) {
            const input = this._getInputById(id); 
            const errorDiv = this._getErrorDiv(input); 
            const label = this._getLabelByInput(input);
    
            if (!input.value) {
                this._setErrorMessage(errorDiv, `${label.innerHTML} kötelező!`);
                isValid = false;
            } else {
                this._setErrorMessage(errorDiv, "");
            }
        }
    
        return isValid;
    }
    
    _getInputById(id) {
        return document.getElementById(id);
    }
    
    _getLabelByInput(input) {
        return input.parentElement.querySelector('label');
    }
    
    _getErrorDiv(input) {
        return input.parentElement.querySelector('.error');
    }
    
    _setErrorMessage(errorDiv, message) {
        if (errorDiv) {
            errorDiv.textContent = message;
        }
    }
    
}

function init() {
    const tbody = document.getElementById("tbodyId");

    for(const item of array){
        const person = new Person(item);
        person.addRow(tbody);
    };

    const form = document.getElementById("form");
    const formController = new FormController(form);

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        if (formController.validate()) {
            const newPerson = new Person({
                lastname: formController.lastname,
                firstname1: formController.firstname1,
                firstname2: formController.firstname2
            });

            newPerson.addRow(tbody);
            form.reset();
        }
    });
}

// Dokumentum betöltése után inicializálás
window.addEventListener("DOMContentLoaded", init);