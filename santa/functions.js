/**
 * Create a row into the companions table.
 * 
 * @param {Companion} companion 
 */
function createRow(companion) {
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tableRow.id = companion.id;
    tbody.appendChild(tableRow);

    const nameCell = createCell(tableRow);
    nameCell.innerHTML = companion.getFullName();
    const reszlegCell = createCell(tableRow);
    reszlegCell.innerHTML = companion.reszleg;

    const actionCell = createCell(tableRow);
    const button = document.createElement('button');
    button.innerHTML = 'View';
    actionCell.appendChild(button);

    button.addEventListener('click', checkEventListener);
}

/**
 * Create a new td cell.
 * 
 * @param {HTMLTabletrowElement} parentElement
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement) {
    const cell = document.createElement('td');
    parentElement.appendChild(cell);
    return cell;
}

/**
 * Append a new companion to the selector
 * 
 */
function appendToSelector(mano) {
    const form = document.getElementById('product');
    const dropdown = form.querySelector('#companionlist');

    const option = document.createElement('option');
    option.value = mano.id;
    option.text = mano.getFullName();

    dropdown.appendChild(option);
}

/**
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function updateProductList(companion) {
    const companionName = document.getElementById('companion_name');
    companionName.innerHTML = companion.getFullName();
    companionName.style.display = 'block';

    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody');
    productTableBody.innerHTML = '';

    for(let i = 0; i < companion.products.length; i++){
            const product = companion.products[i]
            const row = document.createElement('tr')
            const td = document.createElement('td')
            td.innerHTML = product
            row.appendChild(td)
            productTableBody.appendChild(row)
        }
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form, factory) {
    const firstName = form.querySelector('#cfirstname'); 
    const lastName = form.querySelector('#clastname'); 
    const area = form.querySelector('#carea'); 

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const areaValue = area.value;

    const id = factory.generateId();
    const newMano = new Companion(firstNameValue, lastNameValue, areaValue, id);
    factory.addMano(newMano);
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory) {
    const selector = form.querySelector('#companionlist');
    const productName = form.querySelector('#productname');
    const companionId = selector.value;
    const product = productName.value;
    factory.updateProductForMano(product, companionId);
}

