const infos = {
  nome: 'Bianca Peres',
  cargo: 'Analista de Teste',
  imagem: 'imgs/Foto-BiancaSantos.jpg',
  minibio: 'Estudante de Engenharia de Software, Iniciante na área da qualidade de Software, Estagiária de Qualidade de imagens 💖',
  github: 'https://github.com/Biancaprs',
  linkedin: 'https://www.linkedin.com/in/bianca-prssantos/',
  instagram: 'https://www.linkedin.com/in/bianca-prssantos/'
};

document.getElementById('imagem').src = infos.imagem;
document.getElementById('nome').innerHTML = infos.nome;
document.getElementById('cargo').innerHTML = infos.cargo;

document.getElementById('github').href = infos.github;
document.getElementById('linkedin').href = infos.linkedin;
document.getElementById('instagram').href = infos.instagram;

document.getElementById('minibio').innerHTML = infos.minibio;