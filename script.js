

// create a script choosing the meme pic at random
// make a loop (infinite) replacing the words "help you "-> strike-through -> frustrate you even more...
// make a meme div "slide out" /show up upon the click on the duckButton



// create an array of pics

let picBase = ['imagesMixMess/meme1.jpeg','imagesMixMess/meme2.jpeg','imagesMixMess/meme3.jpeg','imagesMixMess/meme4.jpeg','imagesMixMess/meme5.jpeg','imagesMixMess/meme6.jpeg','imagesMixMess/meme7.jpeg','imagesMixMess/meme8.jpeg','imagesMixMess/meme9.jpeg','imagesMixMess/meme10.png','imagesMixMess/meme11.png'];

//choosing random element from picBase array

function addPic() { 
    let background = document.getElementById('memeScene');
    let randomNumber = Math.floor(Math.random()*11);
    let displayedPic;
    let theDiv;
    let thePic
    let currentPicSrc = picBase[randomNumber];
    if (background.style.display === 'none'){
    background.style.display = 'flex';
    background.style.alignItems = 'center';
    displayedPic = document.createElement('img');
    displayedPic.src=`${currentPicSrc}`;
    displayedPic.id='addedPic'
    displayedPic.style.width= '400px';
    displayedPic.style.height= 'auto';
    theDiv=document.getElementById('memeScene');
    theDiv.appendChild(displayedPic);
    } else {
        background.style.display='none';
        thePic=document.getElementById('addedPic');
        thePic.remove();
    }
    
}

//adding the chosen element to the document
//console.log(addPic())
let guzik = document.getElementById('duckButton');
guzik.addEventListener('click', addPic);



//adding alerts for empty submission fields

function alertOnEmpty() {
    if (document.getElementById('textBox').value === "" || document.getElementById('textBox').value === " ") {
        alert("Not so fast cowboy! You forgot to type the message");
    }
}
document.querySelector('#formButton').addEventListener('click', alertOnEmpty);
