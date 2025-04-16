// Scroll reveal
const elements = document.querySelectorAll('.card, .section, .hero, .services');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Formulário com mensagem de sucesso
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada com sucesso.');
    this.reset();
  });
}

// Botão voltar ao topo
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
// Digitação automática
const text = "Transforme seu corpo com Francisco Romão";
const typedText = document.getElementById("typed-text");

let index = 0;
function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 70);
  }
}

window.addEventListener("load", type);
