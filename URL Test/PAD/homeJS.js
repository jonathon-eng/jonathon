let previewContainer = document.querySelector('.app-previews');
let previewBox = previewContainer.querySelectorAll('.previews');


document.querySelectorAll('.appContainer .appCards').forEach(appCards => {
    appCards.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = appCards.getAttribute('data-name');
        previewBox.forEach(previews => {
            let target = previews.getAttribute('data-target');
            if (name == target){
                previews.classList.add('active');
            };
        });

    };
});



previewBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});