/**
 * @type {{
*   firstName: string;
*   lastName: string;
*   products: string[];
*   area: string;
* }[]}
*/
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
 ]
 const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
   e.preventDefault();
   const form =  e.currentTarget
   addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory)
 });

 /**
* table render
*/

function initTable(){
     for(let i = 0; i < companionList.length; i++){
         const listElement = companionList[i]
         const mano = new Companion(i, listElement.firstName, listElement.lastName, listElement.area); 
         factory.addReszleg(listElement.area)
         for (const product of listElement.products){
            mano.addProduct(product);
         }
         factory.addMano(mano);
     }
     console.log(factory);
 }
 
 initTable();

/**
* 
* eventlistener callback for the button click of companion
* 
* @param {EventTarget} e 
*/
function checkEventListener(e){
   const row = e.currentTarget.parentElement.parentElement;
   const companionId = row.id;
   factory.showProducts(companionId)
}