/*
let matrix = document.querySelector(`#matrix`)

alert(`The content of the DOM is loaded`)

for (let i = 0; i < quotes.length; i++) {
    let div = document.createElement(`div`)
    let p = document.createElement(`p`)
    p.innerHTML = quotes[i].quoteText
    let span = document.createElement(`span`)
    span.innerText = quotes[i].quoteAuthor
    matrix.append(p , span)
}

arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    console.log(pageXOffset)
    
};

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
*/

let root = document.querySelector('ul');

let max = 3;
let index = 0;

function addQuotes() {
    for (let i = 0; i < max; i++) {
        let li = document.createElement('li');
        let blockquote = document.createElement('blockquote');
        let cite = document.createElement('cite');
        blockquote.innerText = quotes[index].quoteText;
        cite.innerText = quotes[index].quoteAuthor;
        li.append(blockquote, cite);

        root.append(li);
        index++;
    }
}


document.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    if (scrollTop + clientHeight >= scrollHeight  && index < quotes.length) {
        addQuotes();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    alert(`The content of the DOM is loaded`);
    addQuotes() ;
})
