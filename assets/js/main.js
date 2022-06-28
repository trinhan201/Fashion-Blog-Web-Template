// Handle Subscribe form
const modal = document.querySelector('.js-modal');
const subscribeBtns = document.querySelectorAll('.js-subscribe-btn');
const closeBtn = document.querySelector('.js-modal-close');

for(const subscribeBtn of subscribeBtns) {
    subscribeBtn.addEventListener('click', showEmailForm)
}

closeBtn.addEventListener('click', closeEmailForm);

function showEmailForm() {
    modal.classList.add('open');
}

function closeEmailForm() {
    modal.classList.remove('open');
}

// Handle reply field
const replyFields = document.querySelectorAll('.js-card-reply-field');
const replyBtns = document.querySelectorAll('.js-btn-reply');


for(const [i,replyBtn] of replyBtns.entries()){
    replyBtn.addEventListener('click', function() {
        for(const [j, replyField] of replyFields.entries()){
            if(j==i){
                if(replyField.style.display === 'none'){
                    replyField.style.display = 'block';
                }
                else {
                    replyField.style.display = 'none'
                }
                
            }
        } 
    })
}

// Handle like button
const likeBtns = document.querySelectorAll('.js-btn-like');

for(const likeBtn of likeBtns){
    likeBtn.addEventListener('click', function() {
        likeBtn.innerHTML = `<b>✓ Liked</b>`;
    })
}