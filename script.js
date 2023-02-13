function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector('#profile img')

  // substituir a image
  // if (html.classList.contains('light')) {
  //   // se tiler light mode, adicionar a imgagem light
  //   img.setAttribute('src', './assets/avatar-light.png')
  //   img.setAttribute('alt', 'Foto de Denilson com um chapéu de palha')
  // } else {
  //   // se tiver sem o light mode, manter a imgaem normal
  //   img.setAttribute('src', './assets/avatar.png')
  //   img.setAttribute('alt', 'Foto de Denilson meio sério com o fundo preto, porém ele está bonitão')
  // }

  img.setAttribute(
    'src',
    html.classList.contains('light') ? './assets/avatar-light.png' : './assets/avatar.png'
  )
  img.setAttribute(
    'alt',
    html.classList.contains('light') ? 'Foto de Denilson com um chapéu de palha' : 'Foto de Denilson meio sério com o fundo preto, porém ele está bonitão'
  )
}
