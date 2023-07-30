function verificarEmail(event) {
    event.preventDefault(); 
  

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
  
   
    if (email.trim() !== "") {
   
      alert(`Entraremos em contato através do endereço ${email}`);
    
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mensagem").value = "";
    } else {

      alert("Nada foi digitado. Por favor, digite um endereço de e-mail.");
    }
  }
  
  document.getElementById("formulario").addEventListener("submit", verificarEmail);