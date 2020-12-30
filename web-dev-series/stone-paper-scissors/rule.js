let modal = document.querySelector('.rule-modal');
let btn = document.querySelector('.btn-rules');
let close = document.querySelector('.rules-modal__content--close');

// show / hide the rules modal
function toggleModal() {
    modal.classList.toggle('show-modal');
}

// hide the rules when user clicks outside the modal window
function windowOnClick(event) {
    if(event.target === modal){
        toggleModal();
    }
}

// add function when the buttons/window are clicked
btn.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
