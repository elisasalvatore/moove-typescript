"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe Utente: gestisce le informazioni degli utenti e la loro capacità di prenotare mezzi.
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, pagamento) {
        this.nome = nome;
        this.congnome = cognome;
        this.email = email;
        this.pagamento = pagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.disponibile !== "in uso") {
            console.log("Mezzo prenotato da ".concat(this.nome, "."));
        }
    };
    return Utente;
}());
// Classe Mezzo: gestisce le informazioni di ciascun mezzo e l'assegnazione agli utenti.
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, id, disponibile) {
        this.tipo = tipo;
        this.id = id;
        this.disponibile = disponibile;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.disponibile === "in uso") {
            console.log("Ci dispiace, il mezzo scelto da ".concat(utente.nome, " \u00E8 gi\u00E0 in uso."));
        }
        else {
            this.disponibile = "in uso";
        }
    };
    return Mezzo;
}());
var monopattino = new Mezzo("monopattino", 12345, "in uso");
var scooter = new Mezzo("scooter", 67890, "disponibile");
var bicicletta = new Mezzo("bicicletta", 24680, "disponibile");
var userLuca = new Utente("Luca", "Rossi", "lucarossi@gmail.com", "carta");
var userAnna = new Utente("Anna", "Verdi", "annaverdi@gmail.com", "satispay");
var userSofia = new Utente("Sofia", "Gialli", "sofiagialli@gmail.com", "carta");
// Utente con monopattino
userLuca.prenotaMezzo(monopattino);
monopattino.assegnaUtente(userLuca);
// Utente con scooter
userAnna.prenotaMezzo(scooter);
scooter.assegnaUtente(userAnna);
// Utente con bicicletta
userSofia.prenotaMezzo(bicicletta);
bicicletta.assegnaUtente(userSofia);
