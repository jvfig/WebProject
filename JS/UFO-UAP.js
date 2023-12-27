/* Para testar o código é preciso analisar a consola. Como ?
    inspeccionar a página (clicar com o cursor na página antes de utilizar o atalho) : Ctrl + Shift + i
*/

/* Para selecionar a mesma seleção de carateres em linhas consecutivas (é necessário selecionar antes do atalho) : Ctrl + d
    Para selecionar a mesma seleção de carateres em massa : Ctrl + Shift + d
*/

// Para mostrar mensagens na página
// globalThis.alert("Hello");

// Para mostrar mensagens na consola
// globalThis.console.log("Joao");

/* Accessing the global object
    globalThis
        the standard across environments
    window
        Web Workers API doesn't have the "window" object
        they use "self"
    self
    frames
    global
        it's used in Node.js
*/

// Clear browser console : globalThis.console.clear();

/* Declarar variáveis
    var : o seu âmbito (scope) pode ser local ou global
    let : o seu âmbito é sempre em relação ao bloco em que é declarada (blocked-scope - {})
    const : para declarar constantes e também o seu âmbito é sempre em relação ao bloco em que é declarada (blocked-scope - {})
*/

/* forEach Method : .forEach(function)
    este método só existe para "arrays"
    tem como argumento uma função
*/

/* for...of Loop
    ciclo "for" para iterar em coleções
*/

/* for...in Loop
    ciclo "for" para iterar propriedades de objectos
*/

/* Para todos elementos do tipo "details",
    vão-se adicionar eventos
        eventos : são rastilhos para uma ação em concreto
    o método "addEventListener" é constituído por :
        um evento (rastilho)
        uma função (ação)
            como convenção para argumentos transmitidos mas não utilizados, utiliza-se o "_"
*/

for (const iterator of globalThis.document.getElementsByTagName("details")) {
    // Adicionar eventos aos elementos
    iterator.addEventListener("mouseover", elemEventFunc);
    iterator.addEventListener("mouseout", elemEventFunc);
    iterator.addEventListener("click", elemEventFunc);
    // Esconder todos os elementos excepto o primeiro
    if (iterator != globalThis.document.getElementsByTagName("details")[0]) {
        iterator.style.visibility = "hidden";
        // Adicionar eventos aos elementos
        iterator.addEventListener("mouseleave", elemEventFunc);
    }
    // globalThis.console.log(iterator);
}

for (const iterator of globalThis.document.getElementsByClassName("circle")) {
    // Esconder todos os elementos excepto o primeiro
    if (iterator != globalThis.document.getElementsByClassName("circle")[0]) {
        iterator.style.visibility = "hidden";
    }
}

// Vector formado pelas "strings" do elemento "h4" cujo o elemento pai é o elemento "main"
const arrayMainH4 = globalThis.document.getElementsByTagName("main")[0].firstElementChild.textContent.split(" ");
// Variável para controlar o evento do elemento "h4" cujo o elemento pai é o elemento "main"
let mainLockerEvent = false;

// Adicionar eventos ao elemento "main"
globalThis.document.getElementsByTagName("main")[0].addEventListener("mouseleave", elemEventFunc2);
globalThis.document.getElementsByTagName("main")[0].addEventListener("mouseenter", elemEventFunc2);

// Função para os eventos dos elementos "details"
function elemEventFunc(event) {
    switch (event.type) {
        case "mouseover":
            // A cor, do elemento com a classe "circle" que seja irmão do elemento "details" actual, muda
            if (this.parentElement.firstElementChild.style.backgroundColor != "lightgreen") {
                this.parentElement.firstElementChild.style.backgroundColor = "wheat";
            }
            break;
        case "mouseout":
            // A cor, do elemento com a classe "circle" que seja irmão do elemento "details" actual, muda
            if (this.parentElement.firstElementChild.style.backgroundColor != "lightgreen") {
                this.parentElement.firstElementChild.style.backgroundColor = "black";
            }
            break;
        case "mouseleave":
            // A visibilidade, do elemento "details" actual, muda
            this.style.visibility = "hidden";
            // A visibilidade, do elemento com a classe "circle" que seja irmão do elemento "details" actual, muda
            this.parentElement.firstElementChild.style.visibility = "hidden";
            // O elemento "details" pode estar "aberto" ou "fechado" : 2 comandos para fechar...
            // this.removeAttribute("open");
            this.open = false;
            break;
        case "click":
            // A cor, do elemento com a classe "circle" que seja irmão do elemento "details" actual, muda
            this.parentElement.firstElementChild.style.backgroundColor = "lightgreen";

            if (this != globalThis.document.getElementsByTagName("details")[2]) {
                // A visibilidade, do elemento com a classe "circle" que seja filho do irmão seguinte do pai, muda
                this.parentElement.nextElementSibling.firstElementChild.style.visibility = "visible";
                // A visibilidade, do elemento "details" que seja filho do irmão seguinte do pai, muda
                this.parentElement.nextElementSibling.firstElementChild.nextElementSibling.style.visibility = "visible";
            } else {
                for (const iterator of globalThis.document.getElementsByClassName("row")) {
                    if (iterator.firstElementChild.className == "col-1") {
                        // A visibilidade, do elemento com a classe "circle" que seja filho do irmão seguinte do pai, muda
                        iterator.firstElementChild.nextElementSibling.firstElementChild.style.visibility = "visible";
                        // A visibilidade, do elemento "details" que seja filho do irmão seguinte do pai, muda
                        iterator.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.style.visibility = "visible";
                    }
                }
            }
            break;
    }
}

// Função para os eventos do elemento "main"
function elemEventFunc2(event) {
    switch (event.type) {
        case "mouseleave":
            // A visibilidade, do primeiro filho (h4) elemento "main" actual, muda
            this.firstElementChild.style.visibility = "hidden";
            // O conteúdo, do primeiro filho (h4) elemento "main" actual, muda
            this.firstElementChild.innerHTML = "";

            for (const iterator of globalThis.document.getElementsByTagName("details")) {
                // Esconder todos os elementos excepto o primeiro
                if (iterator != globalThis.document.getElementsByTagName("details")[0]) {
                    iterator.style.visibility = "hidden";
                } else {
                    // O elemento "details" pode estar "aberto" ou "fechado" : 2 comandos para fechar...
                    // iterator.removeAttribute("open");
                    iterator.open = false;
                }
            }
            for (const iterator of globalThis.document.getElementsByClassName("circle")) {
                if (iterator != globalThis.document.getElementsByClassName("circle")[0]) {
                    // Esconder todos os elementos excepto o primeiro
                    iterator.style.visibility = "hidden";
                    // Repor a cor original
                    iterator.style.backgroundColor = "lightgray";
                } else {
                    // Repor a cor original
                    iterator.style.backgroundColor = "lightgray";
                }
            }
            break;
        case "mouseenter":
            // O conteúdo, do primeiro filho (h4) elemento "main" actual, muda
            this.firstElementChild.innerHTML = "";
            // A visibilidade, do primeiro filho (h4) elemento "main" actual, muda
            this.firstElementChild.style.visibility = "visible";
            if (!mainLockerEvent) {
                // O bloqueador do evento é aberto
                mainLockerEvent = true;
                /* Se outro evento for despoletado, enquanto o bloqueador estiver aberto,
                    então este pedaço de código não será repetido enquanto a função
                    "mainH4(this, arrayMainH4)" não for executada até ao fim...
                    A isto chama-se de "SEMAPHOR Pattern"
                */
                mainH4(this);
                // O bloqueador do evento é fechado
                mainLockerEvent = false;
            }
            break;
    }
}

// Função para mostrar cada "string", do elemento "h4", espaçadamente no tempo
function mainH4(element) {
    // Garantir que a primeira "string" é adicionada se e só se o elemento "h4" estiver vazio...
    if (element.firstElementChild.textContent == "") {
        // Variável que indica o espaço de tempo até começar a exibir as "strings"
        let time = 2000;
        // Índice dos vectors do elemento "h4" e do argumento da função "array"
        let index = 0;
        for (const iterator of arrayMainH4) {
            globalThis.setTimeout(() => {
                element.firstElementChild.innerHTML += iterator + " ";
                // Caso cada "string" não seja a palavra certa, então o elemento "h4" fica vazio...
                if (element.firstElementChild.textContent.split(" ")[index] != arrayMainH4[index]) {
                    element.firstElementChild.innerHTML = "";
                    index = 0;
                    return;
                } else {
                    index++;
                }
            }, time);

            // Cada "string" vai ter um tempo de espera diferente das anteriores
            time += 1000;
        }
    }
}

// this.nodeName == "DETAILS" || this.classList.contains("circle")

for (const iterator of globalThis.document.getElementsByTagName("section")) {
    if (iterator != globalThis.document.getElementById("id_section1") && iterator != globalThis.document.getElementById("id_section4")) {
        iterator.style.backgroundImage = "linear-gradient(gainsboro, white, gainsboro)";
        iterator.style.display = "none";
    }
    if (iterator == globalThis.document.getElementById("id_section1")) {
        iterator.style.backgroundImage = "linear-gradient(to right, gainsboro, white, gainsboro)";
    }
    if (iterator == globalThis.document.getElementById("id_section4")) {
        iterator.style.backgroundImage = "linear-gradient(to right, gainsboro, white, gainsboro)";
        iterator.style.display = "none";
    }
}

function onClicking1() {
    globalThis.document.getElementById("id_section1").style.display = "none";
    globalThis.document.getElementsByClassName("col btn btn-dark")[0].style.display = "block";
    globalThis.document.getElementById("id_section2").style.display = "block";
}

function onClicking2() {
    globalThis.document.getElementById("id_section1").style.display = "none";
    globalThis.document.getElementsByClassName("col btn btn-dark")[0].style.display = "block";
    globalThis.document.getElementById("id_section3").style.display = "block";
}

function onClicking3() {
    globalThis.document.getElementById("id_section1").style.display = "none";
    globalThis.document.getElementsByClassName("col btn btn-dark")[0].style.display = "block";
    globalThis.document.getElementById("id_section4").style.display = "block";
}

function onClicking4() {
    globalThis.document.getElementById("id_section1").style.display = "none";
    globalThis.document.getElementsByClassName("col btn btn-dark")[0].style.display = "block";
    globalThis.document.getElementById("id_section5").style.display = "block";
}

function onClicking5() {
    globalThis.document.getElementsByClassName("col btn btn-dark")[0].style.display = "none";
    for (const iterator of globalThis.document.getElementsByTagName("section")) {
        if (iterator != globalThis.document.getElementById("id_section1")) {
            iterator.style.display = "none";
        } else {
            iterator.style.display = "block";
        }
    }
}

globalThis.console.clear();

/* A fazer : CSS
    utilizar o keyframe da posição inicial apenas para a página "home" ??
    utilizar os mediaquery para a questão da "responsive design"
        para tamanhos de ecrâ mais pequenos, ha sobreposições
        confirmar os valores dos tamanhos no "inspecionar página" : Ctrl + Shift + i
*/