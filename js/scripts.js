// Executa o código quando a árvore de elementos da página estiver completamente carregado.
document.addEventListener('DOMContentLoaded', () => {

    // --- DESTAQUE ATIVO DO MENU NA ROLAGEM ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    // Função para atualizar o link ativo
    const activateLinkOnScroll = () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Verifica se a posição da rolagem da página passou do topo da seção
            if (window.scrollY >= sectionTop - 60) { // -60 para quando estiverno inicio da pagina ja destacar o "Sobre Mim"
                currentSection = section.getAttribute('id');
            }
        }
        );

        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove a classe 'active' de todos os links
            // Se o href do link corresponde à seção atual, adiciona a classe 'active'
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    };

    // --- VALIDAÇÃO SIMPLES DO FORMULÁRIO ---
    const contactForm = document.querySelector('#contato form');
    contactForm.addEventListener('submit', (event) => {
        // Pega os valores dos campos do formulário
        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const mensagem = document.querySelector('#mensagem').value;

        // Verifica se algum campo está vazio
        if (nome === '' || email === '' || mensagem === '') {
            // Previne o envio do formulário
            event.preventDefault();
            // Exibe um alerta simples para o usuário
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });

    
    // --- BOTÃO "VOLTAR AO TOPO" ---
    const backToTopButton = document.querySelector('#voltar-ao-topo');

    // Função para mostrar/esconder o botão
    const toggleBackToTopButton = () => {
        // Se a rolagem vertical for maior que 300 pixels, adiciona a classe 'show'
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            // Caso contrário, remove a classe 'show'
            backToTopButton.classList.remove('show');
        }
    };
    
    // Adiciona o evento de clique ao botão para rolar suavemente para o topo
    backToTopButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link '#'
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    });

    // --- REGISTRO DOS EVENTOS ---
    // Adiciona um ouvinte de evento de rolagem na janela do navegador
    window.addEventListener('scroll', () => {
        activateLinkOnScroll();
        toggleBackToTopButton();
    });

    // Chama a função uma vez no carregamento para ativar o link correto se a página já estiver rolada
    activateLinkOnScroll();

});