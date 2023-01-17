document.addEventListener('DOMContentLoaded', function(e){
    e.preventDefault();
    const card = document.querySelectorAll('.flip-card-inner');

    let hasFlippedCard = false;
    let firstCard, secondCard;
    
    function flipcard() {
        this.classList.add('flipcard');
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this; return;
        }
        secondCard = this;
        hasFlippedCard = false;
        checkForMatch();
        }
     
    function checkForMatch() {
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
          disableCards(); return;
        }
        unflipCards();
    }
     
      function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
      }
     
      function unflipCards() {
        setTimeout(() => {
          firstCard.classList.remove('flipcard');
          secondCard.classList.remove('flipcard');
          resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
      }
    card.forEach((card) => card.addEventListener('click', flipcard));
});