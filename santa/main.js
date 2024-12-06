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
   for (let i=0; i < companionList.length; i++) //vegig iteral az array-en (companionList)
   {
      const mano = companionList[i] //List i-edik eleme kivéve
      const comp = new Companion(i, mano.firstName, mano.lastName, mano.area)//Companion objektum létrehozása, construktorra példányosítjuk
      for (const product of mano.products)//mano objktum products-on megy végig
      {
         comp.AddProduct(product)//hozzáadja a companion objekumhoz a productot
      }
      console.log(comp)

   }

   // TODO 6
}


initTable()

/**
* 
* eventlistener callback for the button click of companion
* 
* @param {EventTarget} e 
*/
function checkEventListener(e){
   const row = e.currentTarget.parentElement.parentElement;
   const companionId = row.id;
   // TODO 10
}