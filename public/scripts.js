const modalOverlay = document.querySelector('.modal_overlay');

const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const pageId = card.getAttribute('id');
        window.location.href = `/courses/${pageId}`
    })
}

// for (let card of cards) {
//     card.addEventListener('click', function(){
//         const pageId = card.getAttribute('id');
//         modalOverlay.classList.add('active')
//         modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageId}`
//     } )
// }

// document.querySelector('.close_modal').addEventListener('click', function() {
//     modalOverlay.classList.remove('active')
//     modalOverlay.querySelector('iframe').src = ''
// })

