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
        const result = [];
        for (const elem1 of this.#array) {
            if (elem1.eletkor === age)
            result.push(elem1)
        }
        this.#updateCallback(result)
    }
    /**
     * 
     * @param {String} name 
     */
    filterName(name){
        const result = [];
        for (const elem2 of this.#array) {
            if (elem2.nev.includes(name))
            result.push(elem2)
        }
        this.#updateCallback(result)
    }

}

class DataTable {
    /**
    * @param {DataManager} dataManager
    */
    constructor(dataManager){
        const table = document.createElement('table')
        document.body.appendChild(table)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        dataManager.setUpdateCallback((persons)=>{
            tbody.innerHTML = ' '
            for (const pers of persons){
                const tr = document.createElement('tr')
                tbody.appendChild(tr)
                
                const td1 = document.createElement('td')
                tr.appendChild(td1)
                td1.innerHTML=pers.nev

                const td2 = document.createElement('td')
                tr.appendChild(td2)
                td2.innerHTML=pers.eletkor
            }
        })
    }
}

const datamanager = new DataManager([{eletkor: 67, nev: "Sebestyén Bzi"}, {eletkor: 11, nev: "lili"}, {eletkor: 8, nev: "fanni"}])
const dataTableManager = new DataTable(datamanager)

const input = document.createElement('input')
tbody.appendChild(input)

input.addEventListener('input',(e)=>{
    e.currentTarget.value = filterAge,filterName
})

