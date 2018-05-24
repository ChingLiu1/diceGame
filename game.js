var roll = document.querySelector('#roll');


roll.addEventListener('click', function () {
    
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    //console.log(randomNumber);
    var newElement = document.createElement('img');
        
        newElement.style.width = '300px';
        newElement.style.height = '300px';
        newElement.src = randomNumber +'.png';
    console.log(randomNumber);
    var parent = document.querySelector('#theGame');
    parent.appendChild(newElement);
    
    disRoll();
    window.setTimeout(removeDice, 2000);

});


function disRoll (){
    roll.style.display = "none"
    
}

function removeDice (){
   var par = document.querySelector('#theGame');
   var child = document.querySelector('img');
   par.removeChild(child);
    
    returnRoll();
}

function returnRoll(){
    var roll2 = document.querySelector('#roll');
    roll2.style.display = "block";
    console.log(roll2);
}