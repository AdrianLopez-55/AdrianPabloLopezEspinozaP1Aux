//************** PREGUNTA 1 ***************//
let Datos1 = {
    Ricks: [96, 108, 89],
    Mortys: [88, 91, 110]
}

let Datos2 = {
    Ricks: [97, 112, 101],
    Mortys: [109, 95, 123]
}

let Datos3 = {
    Ricks: [97, 112, 101],
    Mortys: [109, 95, 106]
};

// ******************TAREA 1 *****************************//
let ricks1 = [...Datos1.Ricks];
let sum1 = ricks1.reduce((previous, current) => current += previous);
let prom1 = sum1 / ricks1.length;
//console.log(prom1);

let mortys1 = [...Datos1.Mortys];
let sum2 = mortys1.reduce((previous, current) => current += previous);
let prom2 = sum2 / mortys1.length;
//console.log(prom2);

let ricks2 = [...Datos2.Ricks];
let sum3 = ricks2.reduce((previous, current) => current += previous);
let prom3 = sum3 / ricks2.length;
//console.log(prom3);

let mortys2 = [...Datos2.Mortys];
let sum4 = mortys2.reduce((previous, current) => current += previous);
let prom4 = sum4 / mortys2.length;
//console.log(prom4);

let ricks3 = [...Datos3.Ricks];
let sum5 = ricks3.reduce((previous, current) => current += previous);
let prom5 = sum5 / ricks3.length;
//console.log(prom5);

let mortys3 = [...Datos3.Mortys];
let sum6 = mortys3.reduce((previous, current) => current += previous);
let prom6 = sum6 / mortys3.length;
//console.log(prom6);

// *********************** TAREA 2 ***************************//
console.log("------------ TAREA2 ----------------");
console.log("GANADOR DEL PASE DE AVENTURA: ")
const promFinalRick = prom1 + prom3 + prom5;
const promFinalMorty = prom2 + prom4 + prom6;
if(promFinalRick>promFinalMorty){
    console.log(`El ganandor es --Rick-- con un promedio final de ${promFinalRick}, de Morty fue de ${promFinalMorty}`);
    } else if(promFinalMorty> promFinalRick){
            console.log(`El ganandor es --Morty-- con un promedio final de ${promFinalMorty}, de Rick fue de ${promFinalRick}`);
            }else if(promFinalRick==promFinalMorty){
                console.log(`Hubo un empate!! Rick tiene ${promFinalRick} y Morty tiene${promFinalMorty}`);
            }
//TAREA 2 PERO COMPARANDO DATO A DATO ***********
let puntajeR = 0;
let puntajeM = 0;
console.log("COMPARANDO PUNTAJES DATOS POR DATOS: ")
if(prom1 > prom2){
    puntajeR++;
    console.log(`Rick gana la primera ronda con promedio de ${prom1} y gana ${puntajeR} punto`)
}else if(prom2> prom1){
    puntajeM++;
    console.log(`Morty gana la primera ronda con promedio de ${prom2} y gana ${puntajeM} punto`)
}else if(prom1==prom2){
    console.log(`Hubo un empate!! Rick tiene de promedio: ${prom1} y Morty tiene de promedio: ${prom2}`)
}
if(prom3 > prom4){
    puntajeR++;
    console.log(`Rick gana la segunda ronda con promedio de ${prom3} y gana ${puntajeR} punto`)
}else if(prom4> prom3){
    puntajeM++;
    console.log(`Morty gana la segunda ronda con promedio de ${prom4} y gana ${puntajeM} punto`)
}else if(prom3==prom4){
    console.log(`Hubo un empate!! Rick tiene de promedio: ${prom3} y Morty tiene de promedio: ${prom4}`)
}
if(prom5 > prom6){
    puntajeR++;
    console.log(`Rick gana la tercera ronda con promedio de ${prom5} y gana ${puntajeR} punto`)
}else if(prom6 > prom5){
    puntajeM++;
    console.log(`Morty gana la tercera ronda con promedio de ${prom6} y gana ${puntajeM} punto`)
}else if(prom5==prom5){
    console.log(`Hubo un empate!! Rick tiene de promedio: ${prom5} y Morty tiene de promedio: ${prom6}`)
}
if(puntajeR>puntajeM){
    console.log(`Rick gana con un puntaje de ${puntajeR}, mientras que Morty tiene ${puntajeM}`);
}else if(puntajeM>puntajeR){
    console.log(`Morty gana con un puntaje de ${puntajeM}, mientras que Rick tiene ${puntajeR}`);
}else if(puntajeR==puntajeR){
    console.log(`Empate!! Morty tiene un puntaje de ${puntajeM} y mientras que Rick tiene ${puntajeR} punto`);
}


//********************* */ TAREA 3 **************************//
console.log("------------ TAREA 3 ------------");
// COMPARANDO PROMEDIOS
if(promFinalRick>promFinalMorty && promFinalRick >= 100){
    console.log(`El ganandor es --Rick-- con un promedio final de ${promFinalRick}, de Morty fue de ${promFinalMorty}`);
    } else if(promFinalMorty> promFinalRick && promFinalMorty>= 100){
            console.log(`El ganandor es --Morty-- con un promedio final de ${promFinalMorty}, de Rick fue de ${promFinalRick}`);
            }else if(promFinalRick==promFinalMorty && promFinalRick >= 100 && promFinalMorty >= 100){
                console.log(`Hubo un empate!! Rick tiene ${promFinalRick} y Morty tiene${promFinalMorty}`);
            }else if(promFinalRick < 100 && promFinalMorty < 100){
                console.log(`Nadie gano nada por tener: Rick: ${promFinalRick} y Morty: ${promFinalMorty}`)
            }
//COMPARANDO PROMEDIO DE CADA DATO
if(prom1 > prom2 && prom1 > 100){
    puntajeR++;
    console.log(`Rick gana la primera ronda con promedio de ${prom1} y gana ${puntajeR} punto`)
}else if(prom2> prom1 && prom2 > 100){
    puntajeM++;
    console.log(`Morty gana la primera ronda con promedio de ${prom2} y gana ${puntajeM} punto`)
}else if(prom1==prom2){
    console.log(`Hubo un empate!! Rick tiene de promedio: ${prom1} y Morty tiene de promedio: ${prom2}`)
}if(prom1 < 100 && prom2 < 100){
    console.log(`No hubo ganador Rick: ${prom1}, Morty: ${prom2}`)
}
if(prom3 > prom4 && prom3 > 100){
    puntajeR++;
    console.log(`Rick gana la segunda ronda con promedio de ${prom3} y gana ${puntajeR} punto`)
}else if(prom4> prom3 && prom4 > 100){
    puntajeM++;
    console.log(`Morty gana la segunda ronda con promedio de ${prom4} y gana ${puntajeM} punto`)
}else if(prom3==prom4){
    console.log(`Hubo un empate!! Rick tiene de promedio: ${prom3} y Morty tiene de promedio: ${prom4}`)
}
if(prom3 < 100 && prom4 < 100){
    console.log(`No hubo ganador Rick: ${prom3}, Morty: ${prom4}`)
}
if(prom5 > prom6 && prom5 > 100){
    puntajeR++;
    console.log(`Rick gana la tercera ronda con promedio de ${prom5} y gana ${puntajeR} punto`)
}else if(prom6 >= prom5 && prom6 >= 100){
    puntajeM++;
    console.log(`Morty gana la tercera ronda con promedio de ${prom6} y gana ${puntajeM} punto`)
}else if(prom5==prom5){
    console.log(`Hubo un empate!! Rick tiene de promedio: ${prom5} y Morty tiene de promedio: ${prom6}`)
}
if(prom5 <= 100 && prom6 <= 100){
    console.log(`No hubo ganador Rick: ${prom5}, Morty: ${prom6}`)
}
if(puntajeR>puntajeM){
    console.log(`Rick gana con un puntaje de ${puntajeR}, mientras que Morty tiene ${puntajeM}`);
}else if(puntajeM>puntajeR){
    console.log(`Morty gana con un puntaje de ${puntajeM}, mientras que Rick tiene ${puntajeR}`);
}else if(puntajeR==puntajeR){
    console.log(`Empate!! Morty tiene un puntaje de ${puntajeM} y mientras que Rick tiene ${puntajeR} punto`);
}

//************************* TAREA 4 ************************//
console.log("------------ TAREA 4 ------------");
//COMPARANDO PROMEDIOS --------
if(promFinalRick>promFinalMorty && promFinalRick >= 100){
    console.log(`El ganandor es --Rick-- con un promedio final de ${promFinalRick}, de Morty fue de ${promFinalMorty}`);
    } else if(promFinalMorty> promFinalRick && promFinalMorty>= 100){
            console.log(`El ganandor es --Morty-- con un promedio final de ${promFinalMorty}, de Rick fue de ${promFinalRick}`);
            }else if(promFinalRick==promFinalMorty && promFinalRick >= 100 && promFinalMorty >= 100){
                console.log(`Hubo un empate!! Rick tiene ${promFinalRick} y Morty tiene${promFinalMorty}`);
            }else if(promFinalRick < 100 && promFinalMorty < 100){
                console.log(`Nadie gano nada por tener: Rick: ${promFinalRick} y Morty: ${promFinalMorty}, los dos tienes menos de 100 puntos de promedio`)
            }else if(promFinalRick==promFinalMorty && promFinalRick < 100 && promFinalMorty < 100){
                console.log(`ambos empataron: Rick: ${promFinalRick}, Morty: ${promFinalMorty} Pero pierden por tener pormedio menor a 100`)
            };
//COMPARANDO PROMEDIOS DE CADA DATO --------
console.log("COMPARANDO PROMEDIOS DE CADA DATO");
if(prom1 > prom2 && prom1 >= 100){
    puntajeR++;
    console.log(`Rick gana la primera ronda con promedio de ${prom1} y gana ${puntajeR} punto`)
}else if(prom2 > prom1 && prom2 >= 100){
    puntajeM++;
    console.log(`Morty gana la primera ronda con promedio de ${prom2} y gana ${puntajeM} punto`)
}else if(prom1==prom2 || prom1==prom2 && prom1 >= 100 && prom2 >= 100){
    console.log(`Hubo un empate!! Rick tiene de promedio: ${prom1} y Morty tiene de promedio: ${prom2}`)
}if(prom1 < 100 && prom2 < 100){
    console.log(`No hubo ganador Rick: ${prom1}, Morty: ${prom2} Puntajes por debajo de 100`)
}
if(prom3 > prom4 && prom3 >= 100){
    puntajeR++;
    console.log(`Rick gana la segunda ronda con promedio de ${prom3} y gana ${puntajeR} punto`)
}else if(prom4> prom3 && prom4 >= 100){
    puntajeM++;
    console.log(`Morty gana la segunda ronda con promedio de ${prom4} y gana ${puntajeM} punto`)
}else if(prom3==prom4){
    console.log(`Hubo un empate!! Rick tiene de promedio: ${prom3} y Morty tiene de promedio: ${prom4}`)
}
if(prom3 < 100 && prom4 < 100){
    console.log(`No hubo ganador Rick: ${prom3}, Morty: ${prom4}`)
}
if(prom5 > prom6 && prom5 >= 100){
    puntajeR++;
    console.log(`Rick gana la tercera ronda con promedio de ${prom5} y gana ${puntajeR} punto`)
}else if(prom6 > prom5 && prom6 >= 100){
    puntajeM++;
    console.log(`Morty gana la tercera ronda con promedio de ${prom6} y gana ${puntajeM} punto`)
}else if(prom5==prom5){
    console.log(`Hubo un empate!! Rick tiene de promedio: ${prom5} y Morty tiene de promedio: ${prom6}`)
}
if(prom5 < 100 && prom6 < 100){
    console.log(`No hubo ganador Rick: ${prom5}, Morty: ${prom6}`)
}
if(puntajeR>puntajeM){
    console.log(`Rick gana con un puntaje de ${puntajeR}, mientras que Morty tiene ${puntajeM}`);
}else if(puntajeM>puntajeR){
    console.log(`Morty gana con un puntaje de ${puntajeM}, mientras que Rick tiene ${puntajeR}`);
}else if(puntajeR==puntajeR){
    console.log(`Empate!! Morty tiene un puntaje de ${puntajeM} y mientras que Rick tiene ${puntajeR} punto`);
}

//*************** */ TAREA 5 *******************//
console.log("-------- TAREA 5 ----------")
const calcAverage = () => {
    let Datos = [...Datos1.Ricks];
    let sumaPuntos = Datos.reduce((previous, current) => current += previous);
    let promedio = sumaPuntos / Datos.length;
return promedio;
}
//document.getElementById("ate").innerHTML = calcAverage();
console.log(calcAverage());

//***************** TAREA 6 **************//
const calcAverage2 = () => {
    let ricks1 = [...Datos1.Ricks];
    let sum1 = ricks1.reduce((previous, current) => current += previous);
    let prom1 = sum1 / ricks1.length;

    let mortys1 = [...Datos1.Mortys];
    let sum2 = mortys1.reduce((previous, current) => current += previous);
    let prom2 = sum2 / mortys1.length;

    let ricks2 = [...Datos2.Ricks];
    let sum3 = ricks2.reduce((previous, current) => current += previous);
    let prom3 = sum3 / ricks2.length;

    let mortys2 = [...Datos2.Mortys];
    let sum4 = mortys2.reduce((previous, current) => current += previous);
    let prom4 = sum4 / mortys2.length;

    let ricks3 = [...Datos3.Ricks];
    let sum5 = ricks3.reduce((previous, current) => current += previous);
    let prom5 = sum5 / ricks3.length;

    let mortys3 = [...Datos3.Mortys];
    let sum6 = mortys3.reduce((previous, current) => current += previous);
    let prom6 = sum6 / mortys3.length;
    const promFinalRick = prom1 + prom3 + prom5;
    const promFinalMorty = prom2 + prom4 + prom6;
    let promedio1 = false;
    if(promFinalRick>promFinalMorty){
        promedio1 = true;
    }
    let promedio2 = false;
    if(promFinalMorty> promFinalRick){
        promedio2=true;
    }
    let promedio3 = false
    if(promFinalRick==promFinalMorty){
        promedio3=true;
    }
    promedioFinal = false;
    if(promedio1===true){
        promedioFinal= true;
        promedioFinal = `El ganandor es --Rick-- con un promedio final de ${promFinalRick}, de Morty fue de ${promFinalMorty}`
    }else if(promedio2===true){
        promedioFinal= true;
        promedioFinal = `El ganandor es --Morty-- con un promedio final de ${promFinalMorty}, de Rick fue de ${promFinalRick}`
    }else if(promedio3===true){
        promedioFinal= true;
        promedioFinal = `Hubo un empate!! Rick tiene ${promFinalRick} y Morty tiene${promFinalMorty}`
    }
    return promedioFinal;
}
//document.getElementById("ate2").innerHTML = calcAverage2();
console.log("-------------- Tarea 6 -------------");
console.log(calcAverage2());

// ************* TAREA 7 **************//
//Oteniendo puntuacion media de los equipos
const checkWinner = (avgRicks, avgMortys) => {
    let result;
    result = false;
    if(avgRicks>avgRicks && avgRicks >= 100){
        result=true
        result = `El ganador es --Rick-- con una media final de ${avgRicks}, de Morty fue de ${avgRicks}`;
    } else if(avgMortys> avgRicks && avgMortys >= 100){
            result=true
            result = `El ganador es --Morty-- con un promedio final de ${avgMortys}, de Rick fue de ${avgRicks}`;
            }else if(avgRicks==avgMortys && avgRicks >= 100 && avgMortys >= 100){
                result = true;
                    result = `Hubo un empate!! Rick tiene ${avgRicks} y Morty tiene${avgMortys}`;
                }else if(avgRicks==avgMortys && avgRicks<100 && avgMortys < 100){
                    result = true;
                    result = `Nadie gano gana por tener valores menores a 100`;
                }
    return result;
}

//****************** */ TAREA 8 ****************//
const med1 = [...Datos1.Ricks, Datos2.Ricks, Datos3.Ricks];
med1.sort((a,b) => a- b);
let lowMiddle = Math.floor((med1.length - 1) / 2);
let highMiddle = Math.ceil((med1.length - 1) / 2);
let median1 = (med1[lowMiddle] + med1[highMiddle]) / 2;

const med2 = [...Datos1.Mortys, Datos2.Mortys, Datos3.Mortys];
med2.sort((a,b) => a- b);
let lowMiddle2 = Math.floor((med2.length - 1) / 2);
let highMiddle2 = Math.ceil((med2.length - 1) / 2);
let median2 = (med2[lowMiddle2] + med2[highMiddle2]) / 2;
//document.getElementById("ate3").innerHTML = checkWinner(median1, median2);
console.log("---------TAREA 8 -----------");
console.log(checkWinner(median1, median2));



