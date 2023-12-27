// Adicionar eventos ao "carousel"
for (const iterator of globalThis.document.getElementsByTagName("header")[0].getElementsByClassName("carousel-item")) {
    iterator.addEventListener("mouseenter", headerEventFunc);
    iterator.addEventListener("mouseleave", headerEventFunc);
}

// Vector formado pelos elementos "p" situados no "carousel"
let array = new Array(globalThis.document.getElementsByClassName("carousel-caption d-none d-md-block").length);
// Vector formado pelas "strings" dos elementos "p" situados no "carousel"
let array2 = new Array(globalThis.document.getElementsByClassName("carousel-caption d-none d-md-block").length);
// Contador para o índice do vector
let i = 0;

// Adicionar ao vector as "strings" de cada elemento "p"
for (const iterator of globalThis.document.getElementsByClassName("carousel-caption d-none d-md-block")) {
    array[i] = iterator.firstElementChild;
    array2[i] = iterator.firstElementChild.textContent;
    i++;
}

// Variável para controlar os eventos dos elementos "p" situados no "carousel"
let headerLockerEvent = false;
// "String" para guardar o conteúdo de um dos elementos do vector
let pString = "";

// Função para os eventos dos elementos do "carousel"
function headerEventFunc(event) {
    switch (event.type) {
        case "mouseenter":
            // A visibilidade, do elemento "p" actual situado no "carousel", muda
            this.firstElementChild.nextElementSibling.firstElementChild.style.visibility = "visible";
            if (!headerLockerEvent) {
                // O bloqueador do evento é aberto
                headerLockerEvent = true;
                /* Se outro evento for despoletado, enquanto o bloqueador estiver aberto,
                    então este pedaço de código não será repetido enquanto a função
                    "pHeader(this);" não for executada até ao fim...
                    A isto chama-se de "SEMAPHOR Pattern"
                */
                pHeader(this);
                // O bloqueador do evento é fechado
                headerLockerEvent = false;
            }
            break;
        case "mouseleave":
            // A visibilidade, do elemento "p" actual situado no "carousel", muda
            this.firstElementChild.nextElementSibling.firstElementChild.style.visibility = "hidden";
            break;
    }
}

// Função para mostrar cada "string", dos elementos "p" situados no "carousel", espaçadamente no tempo
function pHeader(element) {
    i = 0;
    for (const iterator of array) {
        if (iterator == element.firstElementChild.nextElementSibling.firstElementChild) {
            pString = array2[i];
        }
        i++;
    }
    // O conteúdo, do elemento "p" actual situado no "carousel", muda
    element.firstElementChild.nextElementSibling.firstElementChild.innerHTML = "";
    // Variável que indica o espaço de tempo até começar a exibir as "strings"
    let time = 2000;
    // Contador para o índice do vector
    i = 0;
    for (const iterator of pString.split(" ")) {
        globalThis.setTimeout(() => {
            globalThis.console.log(iterator);
            element.firstElementChild.nextElementSibling.firstElementChild.innerHTML += iterator + " ";
            if (element.firstElementChild.nextElementSibling.firstElementChild.textContent.split(" ")[i] != pString.split(" ")[i]) {
                // O conteúdo, do elemento "p" actual situado no "carousel", muda
                element.firstElementChild.nextElementSibling.firstElementChild.innerHTML = "";
                i = 0;
                return;
            } else {
                i++;
            }
        }, time);
        // Cada "string" vai ter um tempo de espera diferente das anteriores
        time += 1000;
    }
}

// Função usada para a página "index.html"
function onClick1() {
    if (globalThis.document.getElementsByTagName("section")[0].style.display == "none") {
        globalThis.document.getElementsByTagName("section")[0].style.display = "block"
    }
    if (globalThis.document.getElementsByTagName("section")[1].style.display == "block") {
        globalThis.document.getElementsByTagName("section")[1].style.display = "none"
    }
}
// Função usada para a página "index.html"
function onClick2() {
    globalThis.document.getElementsByTagName("section")[0].style.display = "none";
    globalThis.document.getElementsByTagName("section")[1].style.display = "block";
    globalThis.document.getElementsByTagName("section")[1].style.color = "sienna";
    globalThis.document.getElementsByTagName("section")[1].style.cursor = "zoom-out";
}
