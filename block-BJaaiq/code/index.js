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