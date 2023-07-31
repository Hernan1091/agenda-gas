/* Por aqui empieza la aplicación */
function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

/* Esta función nor permite integrar todas las partes de la página el parámetro debe tener el mismo nombre que los archivos*/
function obtenerDatosHTML(nombre){

    return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}

function obtenerContactos(){
    /* Aquí se copía el id de la hoja de cálculo  El método openById() me devuelve un objeto del tipo Spreadsheet y getActiveSheet() me devuelve un objeto del tipo sheet*/
    let hoja = SpreadsheetApp.openById('1nFWll96OkDEyXA-yVMxZkTpLwF64vSx7ILgcxFJKvMI').getActiveSheet();
    /* getDataRange() Obtiene los datos de la hoja y nos devuelve un objeto del tipo rango y get Values nos devuelve una matriz/array con los valores */
    let datos = hoja.getDataRange().getValues();
    return datos;
}