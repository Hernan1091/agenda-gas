    /* Aquí se copía el id de la hoja de cálculo  El método openById() me devuelve un objeto del tipo Spreadsheet y getActiveSheet() me devuelve un objeto del tipo sheet*/
    const HOJA = SpreadsheetApp.openById('1nFWll96OkDEyXA-yVMxZkTpLwF64vSx7ILgcxFJKvMI').getActiveSheet();

/* Por aqui empieza la aplicación */
function doGet(datos){
    //insertarContacto(datos.parameter.nombre, datos.parameter.correo); //Esta instruccion sirve para que cuando pasemos los datos por do Get se pasen directamente por la URL (Cuando los datos no son muy importantes pero sino queremos que se vean debemos hacerlo a traves del post)
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(datos){

    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script'); //Se devuelve para volver a cargar la página
}
/* Esta función nor permite integrar todas las partes de la página el parámetro debe tener el mismo nombre que los archivos*/
function obtenerDatosHTML(nombre){

    return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}

function obtenerContactos(){
    /* getDataRange() Obtiene los datos de la hoja y nos devuelve un objeto del tipo rango y get Values nos devuelve una matriz/array con los valores */
    return HOJA.getDataRange().getValues();
}
//Esta es la funcion que  agrega los campos del formulario en google sheets
function insertarContacto(nombre, apellidos, correo, telf){
    HOJA.appendRow([nombre, apellidos, correo, telf]);

}