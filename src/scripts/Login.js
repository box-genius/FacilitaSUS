// Função para validar o formato do email
function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }
  
  // Função para lidar com o envio do formulário
  function handleFormSubmit(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
  
    // Obter o email inserido no formulário
    const emailInput = document.querySelector('input[type="text"]');
    const email = emailInput.value;
  
    // Verificar se o email é válido
    if (!isValidEmail(email)) {
        alert("O email inserido não possui um formato válido. Por favor, insira um email válido.");
        return; // Impede o envio do formulário se o email não for válido
    }
  
    // Salvar o email no localStorage
    localStorage.setItem('userEmail', email);
  
    // Mostrar um alerta antes de redirecionar
    alert("Encaminhando para a próxima página...");
  
    // Redirecionar para outra página (substitua 'next-page.html' pela URL desejada)
    window.location.href = './Home.html';
  }
  
  // Adicionar um ouvinte de evento ao formulário
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleFormSubmit);