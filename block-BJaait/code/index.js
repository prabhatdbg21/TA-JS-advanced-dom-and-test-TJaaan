let ul = document.querySelector('ul');
let input = document.querySelector('input');

let listOfLi = [] ;

function handleClick() {
    if (input.value !== '') {
        listOfLi.push(input.value);
        createUI();
    }
}

input.addEventListener('click', handleClick)

function createUI (list = listOfLi , root = ul){
    root.innerHTML = "" ;
    let fragment = new DocumentFragment();
    list.forEach((listItem) => {
        let li = document.createElement('li')
        li.innerText = listItem;
        fragment.appendChild(li)
    })
    root.append(fragment)
}
