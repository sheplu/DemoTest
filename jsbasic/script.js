var addButton = document.querySelector('#add');
var removeButton = document.querySelector('#remove');
var area = document.querySelector('#area');
var newElem = null;

var body = document.querySelector('body');

addButton.addEventListener('click', function (e) {
    var val = document.querySelector('[name="add"]')
    .value;
    addElem(val);
    document.querySelector('[name="add"]')
    .value = "";
});

removeButton.addEventListener('click', function (e) {
    var val = document.querySelector('[name="remove"]')
    .value;
    removeElem(val);
    document.querySelector('[name="remove"]')
    .value = "";
});

function addElem(elem) {
    newElem = document.createElement('p');
    newElem.innerHTML = elem;
    newElem.setAttribute('id', elem);
    if(Math.floor(Math.random()*10) % 2 == 0) {
        newElem.style.backgroundColor = "red";
    }
    else {
        newElem.style.backgroundColor = "green";
    }
    area.appendChild(newElem);
};

function removeElem(elem) {
    var rmElement = document.querySelector('#'+elem)
    
    body.removeChild(document.getElementById("area"));
    //rmElement.parentNode.removeChild(rmElement);
};

body.addEventListener('mouseover', function(e) {
    body.style.backgroundColor = 
    'rgb('+Math.floor(Math.random() * 255)+','
    + Math.floor(Math.random() * 255)+','
    + Math.floor(Math.random() * 255)+')';
});

