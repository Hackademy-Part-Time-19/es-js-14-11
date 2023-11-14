
// Funzione per la vendita magliette

var maglietta_A = 75;
var maglietta_B = 50;
var maglietta_C = 30;

//function GestioneMagazzino(tipoMagliette, numMagliette, tipoPagamento) {
    
    var tipoMagliette = prompt("Che tipo di maglietta vuoi? Tipo di magliette disponibili: A, B, C")
    var numMagliette = prompt("Quante magliette desideri?")
    parseInt(numMagliette)


    if (tipoMagliette == "A") {
        if (numMagliette <= maglietta_A){
            
            maglietta_A - numMagliette;
            
            return alert("Hai comprato " + numMagliette + " magliette.")
            
            
        }else if (numMagliette > maglietta_A){
            
            return alert("Quantità richiesta non disponibile." + "\n" + "Quantità disponibile di Magliette A: " + maglietta_A)
            
        }
        
    } else if (tipoMagliette == "B") {
        if (numMagliette <= maglietta_B){
            
            maglietta_B - numMagliette;
            
            return alert("Hai comprato " + numMagliette + " magliette.")
            
            
        }else if (numMagliette > maglietta_B){
            
            return alert("Quantità richiesta non disponibile." + "\n" + "Quantità disponibile di Magliette B: " + maglietta_B)
            
        }
        
    } else if (tipoMagliette == "C") {
        if (numMagliette <= maglietta_C){
            
            maglietta_C - numMagliette;
            
            return alert("Hai comprato " + numMagliette + " magliette.")
            
            
        }else if (numMagliette > maglietta_C){
            
            return alert("Quantità richiesta non disponibile." + "\n" + "Quantità disponibile di Magliette C: " + maglietta_C)
            
        }
        
    }
    
//}

//GestioneMagazzino("A",74,"1")





// Funzione per la valutazione 

function Valutazione(v){
    
    
    let giudizio;
    
    if (v < 18 ){
        
        giudizio = "Insufficiente"
        
    } else if (v >= 18 && v < 21) {
        
        giudizio = "Sufficiente"
        
        
    } else if (v >= 21 && v < 24) {
        
        giudizio = "Buono"
        
    } else if (v >= 24 && v < 27) {
        
        giudizio = "Distinto"
        
        
    }else if (v >= 27 && v <= 29) {
        
        giudizio = "Ottimo"
        
        
    }else if (v = 30) {
        
        giudizio = "Eccellente"
        
        
    }
    
    return console.log(giudizio)
    
    
    
}

//Valutazione(30)