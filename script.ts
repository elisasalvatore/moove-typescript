import {
	IMezzo,
	IUtente,
	MetodoDiPagamento,
	MezzoDiTrasporto,
} from "./components/interfaces";

// Classe Utente: gestisce le informazioni degli utenti e la loro capacità di prenotare mezzi.
class Utente implements IUtente {
	nome: string;
	congnome: string;
	email: string;
	pagamento: MetodoDiPagamento;
	constructor(
		nome: string,
		cognome: string,
		email: string,
		pagamento: MetodoDiPagamento
	) {
		this.nome = nome;
		this.congnome = cognome;
		this.email = email;
		this.pagamento = pagamento;
	}

	prenotaMezzo(mezzo: IMezzo): void {
		if (mezzo.disponibile !== "in uso") {
			console.log(`Mezzo prenotato da ${this.nome}.`);
		}
	}
}

// Classe Mezzo: gestisce le informazioni di ciascun mezzo e l'assegnazione agli utenti.
class Mezzo implements IMezzo {
	tipo: MezzoDiTrasporto;
	id: number;
	disponibile: string;

	constructor(tipo: MezzoDiTrasporto, id: number, disponibile: string) {
		this.tipo = tipo;
		this.id = id;
		this.disponibile = disponibile;
	}
	assegnaUtente(utente: IUtente): void {
		if (this.disponibile === "in uso") {
			console.log(
				`Ci dispiace, il mezzo scelto da ${utente.nome} è già in uso.`
			);
		} else {
			this.disponibile = "in uso";
		}
	}
}

const monopattino = new Mezzo("monopattino", 12345, "in uso");
const scooter = new Mezzo("scooter", 67890, "disponibile");
const bicicletta = new Mezzo("bicicletta", 24680, "disponibile");

const userLuca = new Utente("Luca", "Rossi", "lucarossi@gmail.com", "carta");
const userAnna = new Utente("Anna", "Verdi", "annaverdi@gmail.com", "satispay");
const userSofia = new Utente(
	"Sofia",
	"Gialli",
	"sofiagialli@gmail.com",
	"carta"
);
// Utente con monopattino
userLuca.prenotaMezzo(monopattino);
monopattino.assegnaUtente(userLuca);

// Utente con scooter
userAnna.prenotaMezzo(scooter);
scooter.assegnaUtente(userAnna);

// Utente con bicicletta
userSofia.prenotaMezzo(bicicletta);
bicicletta.assegnaUtente(userSofia);
