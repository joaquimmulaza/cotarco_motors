document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
      fadeInOnScroll('.fade-in-element');
  });
});

function fadeInOnScroll(selector) {
  var elements = document.querySelectorAll(selector);

  // Adjust this value to control when the element starts fading in
  var triggerPoint = window.innerHeight * 0.9;

  elements.forEach(function(element) {
      var position = element.getBoundingClientRect();

      if (position.top < triggerPoint && !element.classList.contains('faded-in')) {
          element.style.opacity = '1';
          element.classList.add('faded-in');
      }
  });
}

document.addEventListener("DOMContentLoaded", function() {
    const text = "Explore a excelência <br>dos nossos produtos";
    const typingContainer = document.querySelector(".typing-text");
  
    // Função para exibir o texto com efeito de digitação
    function typeText() {
      typingContainer.innerHTML = ""; // Limpa o conteúdo
      let index = 0;
  
      function type() {
        if (index <= text.length) {
          const currentSubstring = text.substring(0, index);
  
          // Verifica se a palavra "Cotarco" começa a partir do índice anterior ao espaço em branco mais próximo
          const lastSpaceIndex = currentSubstring.lastIndexOf(" ");
          const cotarcoIndex = currentSubstring.toLowerCase().indexOf("cotarco", lastSpaceIndex + 1);
  
          if (cotarcoIndex !== -1) {
            typingContainer.innerHTML = currentSubstring.substring(0, cotarcoIndex) +
              '<span class="highlight">' + currentSubstring.substring(cotarcoIndex, index) + '</span>';
          } else {
            typingContainer.innerHTML = currentSubstring;
          }
  
          index++;
          setTimeout(type, 15); // Ajuste o tempo para tornar a animação mais rápida
        }
      }
  
      type();
    }
  
    // Inicia a animação após um breve atraso
    setTimeout(typeText, 100); // Ajuste o tempo conforme necessário
  });
  
  
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>  {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);

        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("scroll", function() {
  const navbar = document.querySelector(".scrollChange");
  const changeImg = document.getElementById("changeImg");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    changeImg.src="images/sams-black.png";
  } else {
    navbar.classList.remove("scrolled");
    changeImg.src="images/sams.png";
  }
});

  document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('myPopup');
    var popupContent = document.querySelector('.popup-content');

    // Função para abrir a popup com animação
    function openPopup() {
        popup.classList.add('show');
        popupContent.classList.add('show');
    }

    // Função para fechar a popup com animação
    function closePopup() {
        popupContent.classList.remove('show');
        popup.classList.remove('show');

        // Espera a animação terminar antes de ocultar completamente a popup
        setTimeout(function() {
            popup.style.display = 'none';
        }, 500); // Tempo deve ser igual à duração da animação
    }

    // Exibe a popup quando a página carrega
    popup.style.display = 'block';
    setTimeout(openPopup, 10); // Usa um pequeno atraso para garantir que a animação ocorra

    // Fecha a popup ao clicar no 'X'
    var closeBtn = document.querySelector('.popup .close');
    closeBtn.addEventListener('click', closePopup);

    // Fecha a popup se o usuário clicar fora dela
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup();
        }
    });
});

// Selecionar todos os links dentro da navegação
const links = document.querySelectorAll('.navbar a');

// Selecionar o checkbox do menu
const checkbox = document.getElementById('menu-bar');

// Adicionar um evento de clique a cada link
links.forEach(link => {
    link.addEventListener('click', () => {
        // Desmarcar o checkbox ao clicar em qualquer link
        checkbox.checked = false;
    });
});

