

// create a script choosing the meme pic at random
// make a loop (infinite) replacing the words "help you "-> strike-through -> frustrate you even more...
// make a meme div "slide out" /show up upon the click on the duckButton



// create an array of pics

let picBase = [];
 
const pic1 = new Image();

pic1.src='imagesMixMess/meme1.jpeg';
pic1.alt='meme1';

const pic2 = new Image();
pic1.src='imagesMixMess/meme2.jpeg';
pic1.alt='meme2';

const pic3 = new Image();
pic1.src='imagesMixMess/meme3.jpeg';
pic1.alt='meme3';

const pic4 = new Image();
pic1.src='imagesMixMess/meme4.jpeg';
pic1.alt='meme4';

const pic5 = new Image();
pic1.src='imagesMixMess/meme5.jpeg';
pic1.alt='meme5';

const pic6 = new Image();
pic1.src='imagesMixMess/meme6.jpeg';
pic1.alt='meme6';

const pic7 = new Image();
pic1.src='imagesMixMess/meme7.jpeg';
pic1.alt='meme7';

const pic8 = new Image();
pic1.src='imagesMixMess/meme8.jpeg';
pic1.alt='meme8';

const pic9 = new Image();
pic1.src='imagesMixMess/meme9.jpeg';
pic1.alt='meme9';

const pic10 = new Image();
pic1.src='imagesMixMess/meme10.jpeg';
pic1.alt='meme10';

const pic11 = new Image();
pic1.src='imagesMixMess/meme11.jpeg';
pic1.alt='meme11';

picBase.push(pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11);

//choosing random element from picBase array
//adding the chosen element to the document

document.querySelector("duckButton").addEventListener('click', addPic());

function addPic() { 
    let randomNumber = Math.round(Math.random()*10);
    let currentPic;
    currentPic = picBase[randomNumber];
    let addedDiv = document.querySelector('memeContainer').createElement('div');
    addedDiv.append(currentPic);

}

//adding alerts for empty submission fields

function alertOnEmpty() {
    if (document.getElementById('textBox').value === "" || document.getElementById('textBox').value === " ") {
        alert("Not so fast cowboy! You forgot to type the message");
    }
};
document.querySelector('#formButton').addEventListener('click', alertOnEmpty);
