function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/Theme=light mode.png')
        img.setAttribute('alt', 'Foto de lado do Gabriel Sampaio, com óculos de brinquedo, de fone, camisa social branca, no escuro')
    } else {
    // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/Theme=dark mode.png')
        img.setAttribute('alt', 'Foto de frente do Gabriel Sampaio, com óculos de brinquedo, de fone, camisa social branca, no escuro')
    }
}
