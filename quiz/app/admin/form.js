/**
 * Felel a form mukodeseert
 */
class FormController {

    /**
     * @type {FormField[]}
     */
    #formFieldArray;
    /**
     * @type {Manager}
     */
    #manager;

    /**
     * 
     * @param {Manger} manager 
     * @param {{id: string, label: string}[]} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration) {
        const form = document.createElement('form');
        this.#formFieldArray = []
        document.body.appendChild(form);
        this.#manager = manager;
        for (const config of fieldConfiguration) {
            const formField = new FormField(config.id, config.label);
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getFormField());
        }
        const button = document.createElement('button');
        button.textContent = 'elkuld';
        form.appendChild(button);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.#validateAllFields()){
                const value = this.#getValueObject();
                const answers = [
                    value.answer1,
                    value.answer2,
                    value.answer3,
                    value.answer4

                ];
                const question = new Question(value.questionText, answers, value.rightAnswer);
                this.#manager.add(question);
                e.target.reset();
            }
            //form ertek alapjan question
            // hozzaadjuk a mangerhez, majd reset
        })
    }

    /**
     * validalja a fieldeket
     * @returns {boolean}
     */

    #validateAllFields(){
        let valid = true;
        for (const field of this.#formFieldArray) {
            field.error = ''
            if(field.value === ''){
                field.error = 'Mezo kitoltese kotelezo';
                valid = false;
            }
        }
        return valid;
    }

    /**
     * visszater a fieldek ertekeivel es idjaival
     * @returns {{{questionText: string,answer1: string,answer2: string,answer3: string,answer4: string,rightAnswer: string,}}}
     */
    #getValueObject() {
        let type = '{'
        const result = {}
        for (const field of this.#formFieldArray) {
            result[field.id] = field.value;
            type += `${field.id}: ${typeof field.value},`
        }
        type+= '}';
        console.log(type);
        return result;
    }

}

class FormField {
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {HTMLLabelElement}
     */
    #label;

    /**
     * @type {HTMLInputElement}
     */
    #input;

    /**
     * @type {HTMLSpanElement}
     */
    #errorField;

    get id() {
        return this.#id;
    }

    /**
     * visszater az input ertekevel
     */
    get value() {
        return this.#input.value;
    }

    /**
     * bealitja az error uzenetet
     * @param {string} value megjeleniteni valo uzenet
     */
    set error(value) {
        this.#errorField.textContent = value;
    }

    /**
     * 
     * @param {string} id formfieldet azonisitja 
     * @param {string} labelContent label szoveg
     */
    constructor(id, labelContent){
        this.#id = id;
        this.#label = Gomszab.makeLabel(id, labelContent);
        this.#input = Gomszab.makeInput(id);
        this.#errorField = Gomszab.makeErrorField();
    }

    /**
     * visszater egy divvel, 
     * ami tartalmazza a formfieldben letrehozott htmlElementeket
     * 
     * @returns {HTMLDivElement}
     */
    getFormField(){
        const div = Gomszab.makeDiv([this.#label, this.#input, this.#errorField]);
        return div;
    }

}