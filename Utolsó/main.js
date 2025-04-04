class Person{
    #name
    #birth
    #mood

    constructor(name, birth, mood){
        this.#name = name
        this.#birth = birth
        this.#mood = mood
    }
    get name(){
        return this.#name
    }
    set name(value) {
        value = this.#name
    }
    get birth(){
        return this.#birth
    }
    set mood(value){
        value = this.#mood
    }
};
const person = new Person('Nagy Árpi', '1420', 'Cinikus');
console.log(person);

class PersonView{
    #person
    #span
    constructor(person){
        this.#person = person
    
    const span = document.createElement('span')
    document.body.appendChild(span)
    const div = document.createElement('div');
    div.innerText = `${this.#person.name}-${this.#person.birth}`
    document.body.appendChild(div)
    this.#span = span
    }

    set footer(value){
        this.#span.innerText = value;
    }
};
const personView = new PersonView(person)
person.mood = ''
const personView2 = new PersonView(person)
personView.footer = 'lablec'
