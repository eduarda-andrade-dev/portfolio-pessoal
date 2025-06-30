const hamburguer = document.querySelector(".menu-hamburguer");
const nav = document.querySelector(".links-navegacao");
const form = document.getElementById('formulario-contato');

//Funções para o Menu Hamburguer
hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburguer.classList.toggle("active");
    });
document.querySelectorAll('.links-navegacao a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburguer.classList.remove('active');
        });
    });

//Funções para o Formulário
function enviarFormulario(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    form.reset();
    }