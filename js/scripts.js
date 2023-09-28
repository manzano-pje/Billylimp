function changeLogo() {
    var logo = document.getElementById('logo');
    
    if (window.innerWidth < 700) {
        logo.src = 'img/logo-quadrado.png'; // Nova imagem para telas menores
    } else {
        logo.src = 'img/LOGO-horizontal.png'; // Nova imagem para telas maiores
    }
}

function toggleButtonAndLogo() {
    var button = document.getElementById('toggleButton');

    if (window.innerWidth < 700) {
        if (button.classList.contains('full-screen')) {
            button.classList.remove('full-screen');
            logo.style.alignSelf = 'flex-end';
        } else {
            button.classList.add('full-screen');
            logo.style.alignSelf = 'center';
        }
    }
}


// Chama as funções inicialmente ao carregar a página
toggleButtonAndLogo();
changeLogo();

// Adiciona um ouvinte de redimensionamento de tela para atualizar conforme necessário
window.addEventListener('resize', function () {
    toggleButtonAndLogo();
    changeLogo();
});
