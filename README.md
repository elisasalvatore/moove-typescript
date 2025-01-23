# Moove - Sistema di gestione della micromobilità condivisa

## Descrizione del Progetto

Moove è un'applicazione di gestione di mezzi di trasporto che consente di prenotare e gestire mezzi come biciclette, scooter e monopattini. Gli utenti possono prenotare mezzi disponibili, mentre le città possono gestire i mezzi in base alla disponibilità.

Per visualizzare il progetto [clicca qui](https://codepen.io/elisasalvatore/pen/OPLpwqg).

## Funzionalità Principali

- **Gestione Mezzi:** Aggiunta e prenotazione di mezzi di trasporto.
- **Gestione Utenti:** Registrazione e gestione delle prenotazioni degli utenti.
- **Gestione Città:** Amministrazione dei mezzi disponibili per città.

## Installazione

1. **Clona il repository:**
   ```bash
   git clone https://github.com/tuo-utente/moove.git
   cd moove
   ```
2. **Installa le dipendenze:**
   ```bash
   npm install
   ```
3. **Esegui l'applicazione:**
   ```bash
   npm start
   ```

## Configurazione

Non è richiesta una configurazione specifica. Tuttavia, puoi modificare i dati iniziali degli utenti, dei mezzi e delle città direttamente nel file principale `index.ts`.

## Utilizzo

### 1. Creare un Mezzo

```typescript
const nuovoMonopattino = new Mezzo("monopattino", 11111, "disponibile");
```

### 2. Creare un Utente

```typescript
const userSofia = new Utente(
	"Sofia",
	"Gialli",
	"sofiagialli@gmail.com",
	"carta"
);
```

### 3. Aggiungere un Mezzo alla Città

```typescript
const cittaPiemonte = new Citta("Torino", mezziDisponibili);
```

### 4. Prenotare ed assegnare un Mezzo ad un Utente

```typescript
userSofia.prenotaMezzo(nuovoMonopattino);
nuovoMonopattino.assegnaUtente(userSofia);
```

## Struttura del Progetto

- **Types:** Definisce i tipi `MezzoDiTrasporto` e `MetodoDiPagamento`.
- **Interfaces:** Definisce le interfacce per `ICitta`, `IUtente` e `IMezzo`.
- **Classi:**
  - `Citta`: Gestisce i mezzi in una città specifica.
  - `Utente`: Rappresenta gli utenti che utilizzano i mezzi.
  - `Mezzo`: Gestisce le informazioni sui mezzi.

## **Esempi di Utilizzo**

**1. Creazione di Mezzi e Utenti**

```typescript
const monopattino = new Mezzo("monopattino", 12345, "in uso");
const scooter = new Mezzo("scooter", 67890, "disponibile");
const bicicletta = new Mezzo("bicicletta", 24680, "disponibile");

const userLuca = new Utente("Luca", "Rossi", "lucarossi@gmail.com", "carta");
const userAnna = new Utente("Anna", "Verdi", "annaverdi@gmail.com", "satispay");
```

### **2. Prenotazione e Assegnazione**

```typescript
userLuca.prenotaMezzo(monopattino); // Fallisce perché il mezzo è già in uso
scooter.assegnaUtente(userAnna); // Successo
```

### **3. Gestione della Città**

```typescript
const mezziDisponibili: IMezzo[] = [monopattino, scooter, bicicletta];
const cittaPiemonte = new Citta("Torino", mezziDisponibili);

const nuovoMonopattino = new Mezzo("monopattino", 11111, "disponibile");
cittaPiemonte.aggiungiMezzo(nuovoMonopattino); // Successo
cittaPiemonte.aggiungiMezzo(scooter); // Fallisce: già esistente
```

## **Requisiti**

- **Linguaggio:** TypeScript
- **Ambiente di sviluppo consigliato:** Node.js con un compilatore TypeScript installato.

## **Istruzioni per l'Esecuzione**

1. Clona il repository.
2. Installa le dipendenze (se applicabile).
3. Compila ed esegui il codice utilizzando il comando:

   ```bash
   tsc script.ts && node script.js
   ```

## Contatti

Creato con ❤️ da Elisa Salvatore. Per qualsiasi domanda o suggerimento, sentiti libero di aprire un'issue o contattarmi direttamente tramite GitHub.
