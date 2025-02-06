/**
 * @typedef {{nev:String , eletkor:Number}} Person
 * @callback UpdateCallBack
 * @param {Person[]} persons
 * @returns {void}
 */
class DataManager{
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {UpdateCallBack}
     */
    #updateCallback
    /**
     * 
     * @param {Person[]} array 
     */
    constructor(array = []){
        this.#array = array
        this.#updateCallback = () => {}
    }
    /**
     * 
     * @param {UpdateCallBack} callback 
     */
    setUpdateCallback(callback){
        this.#updateCallback = callback
        this.#updateCallback(this.#array)
    }
    /**
     * 
     * @param {Person[]} item
     */
    add(item){
        this.#array.push(item)
        this.#updateCallback(this.#array)
    }
    /**
     * 
     * @param {Number} age
     */
    filterAge(age){
        const result = []
        for (const elem of this.#array) {
            if (elem.eletkor === age){
            result.push(elem)
            }
        }
        this.#updateCallback(result)
    }
    /**
     * 
     * @param {String} name 
     */
    filterName(name){
        const result = []
        for (const elem of this.#array) {
            if (elem.nev.includes(name))
            result.push(elem)
        }
        this.#updateCallback(result)
    }

}

class DataTable {
    #tbody
    /**
    * @param {DataManager} dataManager
    */
    constructor(dataManager){
        const table = document.createElement('table')
        document.body.appendChild(table)

        this.#tbody = document.createElement('tbody')
        table.appendChild(this.#tbody)

        dataManager.setUpdateCallback((persons)=>{
            this.#tbody.innerHTML = ''
            for (const pers of persons){
                const tr = document.createElement('tr')
                this.#tbody.appendChild(tr)
                
                const td1 = document.createElement('td')
                tr.appendChild(td1)
                td1.innerHTML = pers.nev

                const td2 = document.createElement('td')
                tr.appendChild(td2)
                td2.innerHTML = pers.eletkor
            }
        })
    }
}

const datamanager = new DataManager([
    {eletkor: 67, nev: "Sebestyén Bzi"},
    {eletkor: 11, nev: "lili"},
    {eletkor: 8, nev: "fanni"}
])
const dataTableManager = new DataTable(datamanager)

const inputAge = document.createElement('input')
inputAge.placeholder = 'Eletkor'
inputAge.id = 'age'
document.body.appendChild(inputAge)

const inputName =document.createElement('input')
inputName.placeholder = 'Nev'
inputName.id = 'name'
document.body.appendChild(inputName)

inputAge.addEventListener('input', (e) => {
    datamanager.filterAge(e.currentTarget.value)
})

inputName.addEventListener('input', (e) => {
    datamanager.filterName(e.currentTarget.value)
})

