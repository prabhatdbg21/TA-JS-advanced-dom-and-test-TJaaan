let form = document.querySelector("form");
let mailDiv = document.querySelector(".main-div")
const titleElm = form.elements.title;
const categoryElm = form.elements.category

function say(a, b) {
    let div = document.createElement('div');
    div.classList.add('sub-div');
    let h2 = document.createElement('h2');
    h2.innerText = b;
    let p = document.createElement('p');
    p.innerText = a;


    h2.ondblclick = function() {
        alert(a);
    };

    div.append(h2, p)
    mailDiv.append(div)
}

function handleButton(event) {
    event.preventDefault()
    const title = titleElm.value;
    const category = categoryElm.value;
    say(title, category)
    titleElm.value = '' ;
    categoryElm.value = '' ;

}

form.addEventListener('submit' , handleButton)

