//Types
export type MezzoDiTrasporto = "bicicletta" | "scooter" | "monopattino";
export type MetodoDiPagamento = "carta" | "satispay";

//Interfaces
export interface ICitta {
	nomeCitta: string;
	mezziDisponibili: IMezzo[];

	aggiungiMezzo(mezzo: IMezzo): void;
}

export interface IUtente {
	nome: string;
	cognome: string;
	email: string;
	pagamento: MetodoDiPagamento;

	prenotaMezzo(mezzo: IMezzo): void;
}

export interface IMezzo {
	tipo: MezzoDiTrasporto;
	id: number;
	disponibile: string;

	assegnaUtente(utente: IUtente): void;
}
