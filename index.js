document.addEventListener("DOMContentLoaded", function() {
    const nomeSalvatoDiv = document.getElementById("nomeSalvato")
    const nomeUtenteInput = document.getElementById("nomeUtente")
    const salvaBtn = document.getElementById("salva")
    const rimuoviBtn = document.getElementById("rimuovi")

    rimuoviBtn.style.display = "none"

    //start contatore 
    // search valore del contatore dal local else inizia da 0
    let contatore = parseInt(sessionStorage.getItem("contatoreTempo"), 10) || 0

    // Update counter
    function aggiornaContatore() {
        document.getElementById("contatore").textContent = `Tempo trascorso: ${contatore} secondi`
    }
    // aggiunge i secodni e salva in sessionStorage
    function incrementaContatore() {
        contatore++
        sessionStorage.setItem("contatoreTempo", contatore)
        aggiornaContatore()
    }
    // ogni secondo + 1 
    setInterval(incrementaContatore, 1000)
    // refresh counter 
    aggiornaContatore()
    // Refresh div 
    function aggiornaNomeSalvatoEDisabilitaRimuovi() {
        const nomeSalvato = localStorage.getItem("nomeUtente")
        if (nomeSalvato) {
            nomeSalvatoDiv.textContent = `Nome salvato: ${nomeSalvato}`
            rimuoviBtn.style.display = "" 
        } else {
            nomeSalvatoDiv.textContent = ""
            rimuoviBtn.style.display = "none" 
        }
    }
    // Event per il pulsante salva
    salvaBtn.addEventListener("click", function() {
        localStorage.setItem("nomeUtente", nomeUtenteInput.value)
        aggiornaNomeSalvatoEDisabilitaRimuovi()
    })
    // Event  per il pulsante rimuovi
    rimuoviBtn.addEventListener("click", function() {
        localStorage.removeItem("nomeUtente")
        aggiornaNomeSalvatoEDisabilitaRimuovi()
    })
    // Refresh div 
    aggiornaNomeSalvatoEDisabilitaRimuovi()
});
