//Types
type MezzoDiTrasporto = "bicicletta" | "scooter" | "monopattino";
type MetodoDiPagamento = "carta" | "satispay";

//Interfaces
interface ICitta {
	nomeCitta: string;
	mezziDisponibili: IMezzo[];

	aggiungiMezzo(mezzo: IMezzo): void;
}

interface IUtente {
	nome: string;
	congnome: string;
	email: string;
	pagamento: MetodoDiPagamento;

	prenotaMezzo(mezzo: IMezzo): void;
}

interface IMezzo {
	tipo: MezzoDiTrasporto;
	id: number;
	disponibile: boolean;

	assegnaUtente(utente: IUtente): void;
}
