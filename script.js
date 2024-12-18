"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classe Citta: rappresenta una città specifica in cui Moove opera, gestisce i mezzi disponibili e l'aggiunta di nuovi mezzi.
var Citta = /** @class */ (function () {
    function Citta(nomeCitta, mezziDisponibili) {
        (this.nomeCitta = nomeCitta), (this.mezziDisponibili = mezziDisponibili);
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        var esisteGia = this.mezziDisponibili.some(function (element) { return element.id === mezzo.id; });
        if (!esisteGia) {
            this.mezziDisponibili.push(mezzo);
            console.log("Mezzo aggiunto: ".concat(mezzo.tipo, " (ID: ").concat(mezzo.id, ")"));
            console.log(this.mezziDisponibili);
        }
        else {
            console.log("Il mezzo con ID ".concat(mezzo.id, " esiste gi\u00E0."));
        }
    };
    return Citta;
}());
//Classe Utente: gestisce le informazioni degli utenti e la loro capacità di prenotare mezzi.
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, pagamento) {
        this.nome = nome;
        this.cognome = cognome;
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
//Classe Mezzo: gestisce le informazioni di ciascun mezzo e l'assegnazione agli utenti.
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, id, disponibile) {
        this.tipo = tipo;
        this.id = id;
        this.disponibile = disponibile;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.disponibile === "in uso") {
            console.log("Mezzo gi\u00E0 in uso. ".concat(utente.nome, " non pu\u00F2 usarlo."));
        }
        else {
            this.disponibile = "in uso";
            console.log("".concat(utente.nome, " ha preso il mezzo ").concat(this.tipo, "."));
        }
    };
    return Mezzo;
}());
//Mezzi
var monopattino = new Mezzo("monopattino", 12345, "in uso");
var scooter = new Mezzo("scooter", 67890, "disponibile");
var bicicletta = new Mezzo("bicicletta", 24680, "disponibile");
//Utenti
var userLuca = new Utente("Luca", "Rossi", "lucarossi@gmail.com", "carta");
var userAnna = new Utente("Anna", "Verdi", "annaverdi@gmail.com", "satispay");
var userSofia = new Utente("Sofia", "Gialli", "sofiagialli@gmail.com", "carta");
//Utente con monopattino
userLuca.prenotaMezzo(monopattino);
monopattino.assegnaUtente(userLuca);
//Utente con scooter
userAnna.prenotaMezzo(scooter);
scooter.assegnaUtente(userAnna);
//Utente con bicicletta
userSofia.prenotaMezzo(bicicletta);
bicicletta.assegnaUtente(userSofia);
//Citta con lista mezzi
var mezziDisponibili = [monopattino, scooter, bicicletta];
var cittaPiemonte = new Citta("Torino", mezziDisponibili);
//Aggiungi un nuovo mezzo alla lista dei mezzi disponibili in città
var nuovoMonopattino = new Mezzo("monopattino", 11111, "disponibile");
cittaPiemonte.aggiungiMezzo(nuovoMonopattino);
//Mezzo già presente nelle lista dei mezzi disponibili in città
cittaPiemonte.aggiungiMezzo(scooter);
