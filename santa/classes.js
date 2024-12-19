class Factory{
    constructor()
    {
        this.manoList = []
        this.reszlegek = []
    }
    addMano(mano)
    {
        this.manoList.push(mano)
        createRow(mano)
        appendToSelector(mano)
    }
    generateId(){
        return this.manoList.length
    }
    showProducts(id){
        for(let i = 0; i < this.manoList.length; i++){
            if(this.manoList[i].id == id){
                refreshProductList(this.manoList[i])
            }
        }
    }
    updateProductForMano(product, id){
        for(let i = 0; i < this.manoList.length; i++){
            if(this.manoList[i].id == manoid){
                this.manoList[i].addProduct(product)
                this.showProducts(this.manoList[i].manoid)
            }
        }
    }
    addReszleg(reszleg){
    this.reszlegLista.push(reszleg);
    }

}
class Companion{
    constructor(keresztnev, vezeteknev, id, reszleg) 
        {
            this.id = id
            this.keresztnev = keresztnev
            this.vezeteknev = vezeteknev 
            this.reszleg = reszleg
            this.products = []
        }
        addProduct(product){
            this.products.push(product)
        }
        getFullName(){
            return this.keresztnev + " " + this.vezeteknev
        }
    }