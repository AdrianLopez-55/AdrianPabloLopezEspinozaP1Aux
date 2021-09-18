//PREGUNTA 2 -----------
//***********PARTE 1 ****************
// ************* TAREA 1 ***************
let factura1 = 120;
let factura2 = 200;
let factura3 = 275;
let propinaA = 0;
let propinaB = 0;
let propinaC = 0;
switch (true) {
    case factura1 < 50:
        propinaA = (20*factura1)/100;
        break;
    case factura1 >=50 && factura1 <= 300:
        propinaA = (15*factura1)/100;
        break;
    case factura1 > 300:
        propinaA = (20*factura1)/100;
        break;
};

switch(true){
    case factura2 < 50:
        propinaB = (20*factura2)/100;
        break;
    case factura2 >= 50 && factura2 <= 300:
        propinaB = (15*factura2)/100;
        break;
    case factura2 > 300:
        propinaB = (20*factura2)/100;
        break;
};

switch(true){
    case factura3 < 50:
        propinaC = (20*factura3)/100;
        break;
    case factura3 >=50 && factura3 <= 300:
        propinaC = (15*factura3)/100;
        break;
    case factura3 > 300:
        propinaC = (20*factura3)/100;
        break;
};

//************  TAREA 2 ********************
console.log("----------Pregunta 2 ---------");
console.log("------------TAREA 2 ---------");
console.log("La factura fue de " + factura1 + ", la propina fue de " + propinaA + " y el valor total es " + (factura1 + propinaA));
console.log("La factura fue de " + factura2 + ", la propina fue de " + propinaB + " y el valor total es " + (factura2 + propinaB));
console.log("La factura fue de " + factura3 + ", la propina fue de " + propinaC + " y el valor total es " + (factura3 + propinaC));

//************* TAREA 3 ********************
let calcTip = (factura) => {
    let propinaB = 0;
    switch (true) {
    case factura < 50:
        propinaB = (20*factura)/100;
        break;
    case factura >=50 && factura <= 300:
        propinaB = (15*factura)/100;
        break;
    case factura > 300:
        propinaB = (20*factura)/100;
        break;
}return propinaB;
}
let facturaD = 275;
//document.getElementById("ute").innerHTML = "La factura fue " + facturaD + ", la propina fue " + tip(facturaD) + " y el valor total " + (facturaD + tip(facturaD));
console.log("---------- TAREA 3 ----------------")
console.log("La factura fue de " + facturaD + ", la propina fue de " + calcTip(facturaD) + " y el valor total es " + (facturaD + calcTip(facturaD)));


//************ PARTE 2 *****************
//***************** TAREA 4 ***************** */
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//***************** TAREA 5 ***************** */
const tips = [];
const totals = [];
//***************** TAREA 6 ***************** */
const calcTip2 = (bills) => {
    let propinaC = 0;
    let tt = {tips,totals};
    switch (bills) {
    case bills:
        propinaC = (20*22)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+22);

    case bills:
        propinaC = (15*295)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+295);

    case bills:
        propinaC = (15*176)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+176);

    case bills:
        propinaC = (20*440)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+440);

    case bills:
        propinaC = (20*37)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+37);

    case bills:
        propinaC = (15*105)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+105);

    case bills:
        propinaC = (20*10)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+10);

    case bills:
        propinaC = (20*1100)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+1100);
    case bills:
        propinaC = (15*86)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+86);

    case bills:
        propinaC = (15*52)/100;
        tt.tips.push(propinaC);
        tt.totals.push(propinaC+52);
}return tt;
}
console.log("------------ TAREA 6 ------------");
console.log(calcTip2(bills));
console.log("valores de las propinas: " + tips);
console.log("valores de las totales: " + totals);

//***************** TAREA 7 ***************** */
const calcPromedio = (arreglo) => {
    let sum = arreglo.reduce((previous, current) => current += previous);
    let avg = sum / arreglo.length;
    return avg;
}
console.log("------------- TAREA 7 ------------");
console.log("Promedio de bills: " + calcPromedio(bills));
console.log("Promedio de tips: " + calcPromedio(tips));
console.log("Promedio de tips: " + calcPromedio(totals));