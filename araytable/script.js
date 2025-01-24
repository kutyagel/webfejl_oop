class ArrayList {
    /**
     * @type (Number)
     */
    #length
    #state

    #arraytable

    get Count() {
        return this.#length
    }

    constructor(arraytable = undefined){
        this.#length = 0
        this.#state = {};        
    }

    Add(item){
        const index = this.#length
        this.#state[index] = item
        Object.defineProperty(this, index, {
            get: () => {
                return this.#state[index]
            },
            set: (value) => {
                this.#state[index] = value
            }
        })
        this.#length++
    }

    Clear(){
        for (let i in this) {
            delete this[i];
        }
        this.#length = 0
        this.#state = {}
    }

    Contains(item) {
        for (let i = 0; i < this.#length; i++) {
            if (this.#state[i] === item) {
                return true;
            }
        }
        return false;
    }
}

class tableHTMLArray extends HTMLElement{ 
    #tbody
    
    constructor(){
        super()
    }

    connectCallback(){
        const table = document.createElement('table')
        this.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        this.#tbody = document.createElement('tbody')
        table.appendChild(this.#tbody)
    }

    /**
     * 
     * @param {{nev:String , eletkor: Number}} param 
     */
    addPersonRow(param){
        const tr = document.createElement('tr')
        this.#tbody.appendChild(tr)
        
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        
        td1.innerHTML = param.nev
        td2.innerHTML = param.eletkor
        
        tr.appendChild(td1)
        tr.appendChild(td2)


    }

}


customElements.define('array-table', tableHTMLArray)
const arraytable = new tableHTMLArray()
document.body.appendChild(arraytable)

arraytable.addPersonRow({nev: 'gombosos',eletkor: 65})
arraytable.addPersonRow({nev: 'galamb', eletkor: 45})
arraytable.addPersonRow({nev: 'galambos', eletkor: 23})
arraytable.addPersonRow({nev: 'zeusz', eletkor: 45})
arraytable.addPersonRow({nev: 'pista', eletkor: 34})
arraytable.addPersonRow({nev: 'nyuszi', eletkor: 23})
arraytable.addPersonRow({nev: 'gombs', eletkor: 64})
arraytable.addPersonRow({nev: 'Dzsesszika', eletkor: 85})
arraytable.addPersonRow({nev: 'GAMB', eletkor: 58})
arraytable.addPersonRow({nev: 'GEMB', eletkor: 43})
arraytable.addPersonRow({nev: 'GAMBLING', eletkor: 63})


const narancs = {}

Object.defineProperty(narancs, "nev", { value: "Ferenc", writable: true, enumerable: true, configurable: true })  
narancs.nev="Géza"
console.log(narancs)

const igen = new ArrayList()

igen.Add(5)
console.log(igen[0])

igen.Add("Gombos ZSolti")
console.log(igen)

igen.Add({new:"Gomb"})
console.log(igen)

console.log(igen.Contains(5));
console.log(igen.Contains("gombok"));
console.log(igen.Contains({new:"bong"}));

igen.Clear()

console.log(igen)
console.log(igen.Count)