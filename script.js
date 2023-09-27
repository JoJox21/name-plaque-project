// Creating variables

const userInput = document.querySelector('.field-input');
const userLetterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.getElementById('plaquePrice');
const buyPlaque = document.querySelector('.buy-submit')



// CREATING THE COUNTING FUNCTION
// function countLetters(data){
//     const NoSpaceData = data.replaceAll(' ', '');
//     const price = NoSpaceData.length * 5;


// userLetterPreview.textContent = data;
// userPricePreview.textContent = `$${price}`;
// // userPricePreview.textContent = '$'+price;

// }
//                         // countletters('Eyiwunmi Joan')
//                         // countletters('John the beloved Oluwatosin Dada')
//                         // countletters('Gabriel Adebayo Dada')
//                         // countletters('Moyosoreoluwa Bello')
//                         // countletters('Damilola Dada')
//                         // countletters('Oluwaseteminire Akinbobola')

// userInput.addEventListener('input', function(name){
//     countLetters(name.target.value)
// });

// USING THE ARROW FUNCTION FOR THE PROJECT.

const countLetters = (data) =>{
    const NoSpaceData = data.replaceAll(' ', '');
    const price = NoSpaceData.length * 5;

userLetterPreview.textContent = data;
userPricePreview.textContent = `$${price}`;
// userPricePreview.textContent = '$'+ price;

userInput.focus();
}

const buyNow = () => {
    let inputValue = userInput.value
    const inputValueNoSpace = inputValue.replace(/\s+/g, '');
    const onlyLetters = /^[a-zA-Z\s]+$/.test(inputValueNoSpace); //ALLOWS ONLY LETTERS TO BE PRINTED 
        
    if(inputValue ==='YOUR NAME') {
        alert('Enter a new text');
        return;
    }
    
    if(inputValueNoSpace.length > 15) {
        alert('We have 15 letters left in the stock, and you have exceeded the limit.');    
        return
    }
    
        if (onlyLetters) {
        alert('Thank you! Your name plaque will be produced shortly.');
    }
    
    else {
        alert('Enter a set of letters')
        return
    }
    
    if(inputValueNoSpace ==='') {
    alert('Enter a set of letters');
        return;
    }
}

buyPlaque.addEventListener('click', buyNow)

userInput.oninput = (name) => {
    countLetters(name.target.value)
}