import {
	ICitta,
	IMezzo,
	IUtente,
	MetodoDiPagamento,
	MezzoDiTrasporto,
} from "./components/interfaces";

//Classe Citta: rappresenta una città specifica in cui Moove opera, gestisce i mezzi disponibili e l'aggiunta di nuovi mezzi.
class Citta implements ICitta {
	nomeCitta: string;
	mezziDisponibili: IMezzo[];
	constructor(nomeCitta: string, mezziDisponibili: IMezzo[]) {
		(this.nomeCitta = nomeCitta), (this.mezziDisponibili = mezziDisponibili);
	}

	aggiungiMezzo(mezzo: IMezzo): void {
		const esisteGia = this.mezziDisponibili.some(
			(element) => element.id === mezzo.id
		);
		if (!esisteGia) {
			this.mezziDisponibili.push(mezzo);
			console.log(`Mezzo aggiunto: ${mezzo.tipo} (ID: ${mezzo.id})`);
			console.log(this.mezziDisponibili);
		} else {
			console.log(`Il mezzo con ID ${mezzo.id} esiste già.`);
		}
	}
}

//Classe Utente: gestisce le informazioni degli utenti e la loro capacità di prenotare mezzi.
class Utente implements IUtente {
	nome: string;
	cognome: string;
	email: string;
	pagamento: MetodoDiPagamento;
	constructor(
		nome: string,
		cognome: string,
		email: string,
		pagamento: MetodoDiPagamento
	) {
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.pagamento = pagamento;
	}

	prenotaMezzo(mezzo: IMezzo): void {
		if (mezzo.disponibile !== "in uso") {
			console.log(`Mezzo prenotato da ${this.nome}.`);
		}
	}
}

//Classe Mezzo: gestisce le informazioni di ciascun mezzo e l'assegnazione agli utenti.
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
			console.log(`Mezzo già in uso. ${utente.nome} non può usarlo.`);
		} else {
			this.disponibile = "in uso";
			console.log(`${utente.nome} ha preso il mezzo ${this.tipo}.`);
		}
	}
}

//Mezzi
const monopattino = new Mezzo("monopattino", 12345, "in uso");
const scooter = new Mezzo("scooter", 67890, "disponibile");
const bicicletta = new Mezzo("bicicletta", 24680, "disponibile");

//Utenti
const userLuca = new Utente("Luca", "Rossi", "lucarossi@gmail.com", "carta");
const userAnna = new Utente("Anna", "Verdi", "annaverdi@gmail.com", "satispay");
const userSofia = new Utente(
	"Sofia",
	"Gialli",
	"sofiagialli@gmail.com",
	"carta"
);

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
const mezziDisponibili: IMezzo[] = [monopattino, scooter, bicicletta];
const cittaPiemonte = new Citta("Torino", mezziDisponibili);
//Aggiungi un nuovo mezzo alla lista dei mezzi disponibili in città
const nuovoMonopattino = new Mezzo("monopattino", 11111, "disponibile");
cittaPiemonte.aggiungiMezzo(nuovoMonopattino);
//Mezzo già presente nelle lista dei mezzi disponibili in città
cittaPiemonte.aggiungiMezzo(scooter);
