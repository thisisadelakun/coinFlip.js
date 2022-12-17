let heads = 0;
let tails =  0;
let coin = document.querySelector(".main-coin")
let flipButton = document.querySelector('.flip-button')
let resetButton = document.querySelector('.reset-coin-button')
let counts = document.querySelector('.flip-counts')

flipButton.addEventListener('click', () =>{
    let i = Math.floor(Math.random() * 2);
    console.log(i);
    coin.style.animation = "none";
    counts.style.animation ="animate__animated animate__flash"
    console.log(counts);
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }

    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
            
        }, 100);  
        tails++;
    }
    setTimeout(updateCounts, 2999);
    disableButton();
});

function updateCounts(){
    document.querySelector(".heads-count").textContent = `Heads: ${heads}`
    document.querySelector(".tails-count").textContent = `Tails: ${tails}`

}

function disableButton(){
    flipButton.disable = true;
    setTimeout(function(){
        flipButton.disable = false;

    },2999);

    resetButton.addEventListener("click",() => {
        coin.style.animation = "none"; 
        heads = 0;
        tails = 0;
        updateCounts();
    });

}
