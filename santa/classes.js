
class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor()
    {
        this.manolist = []
    }
    addMano(mano)
    {
        this.manolist.push(mano)
        createRow(mano)
    }
    createId() //mano kap id-t amikor megy dolgozni
    {
        return this.manolist.length //a manolista hosszabol lesz az id amit leker 
    }
}
   
   class Companion{
    // TODO 
    constructor(id, keresztnev, vezeteknev, reszleg)
        {
            this.id = id
            this.keresztnev = keresztnev
            this.vezeteknev = vezeteknev 
            this.reszleg = reszleg
            this.products = []
        }
        AddProduct(product){//prod hozzaad
            this.products.push(product)
        }
        getName(){ //teljes nev kiiras
            return this.keresztnev + " " + this.vezeteknev
        }
   }