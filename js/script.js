document.querySelector("form").addEventListener("submit", function(e) {
    const email = document.querySelector("input[type='email']").value;
    if (!email.includes("@")) {
      e.preventDefault(); 
      alert("Voer een geldig e-mailadres in.");
    }
  }); /*hier heb ik wel een beetje chatgpt gebruikt om een paar dingen op te zoeken maar verde rheb ik alles zelf geschreven*/