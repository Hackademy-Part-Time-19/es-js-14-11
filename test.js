
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




let array_1 = [

    ["un", "per", "incatenarli."],
    ["Anello", "trovarli,"],
    ["ghemirli", "e"],
    ["gondor", "mark"]

];

let array_2 = [

    [["trovarli,"]],
    ["tu,", "sciocchi"],
    ["tu", "sciocchi", ["padron", "Sauron"]],
    ["nel", ["fuggite", "gandalf"]],
    [["domarli", "passare"], "buio"]


]

//console.log(array_1[0][0] + " " + array_1[2][1] )

console.log(array_1[0][0] + " " + array_1[1][0] + " " + array_1[0][1] + " " + array_2[4][0][0] + " " + array_1[0][0] + " " + array_1[1][0] + " " + array_1[0][1] + " " + array_1[1][1] + " " + array_1[0][0] + " " + array_1[1][0] + " " + array_1[0][1] + " " + array_1[2][0] + " " + array_1[2][1] + " " + array_2[3][0] + " " + array_2[4][1] + " " + array_1[0][2])

