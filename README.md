# Moove - Sistema di gestione della micromobilità condivisa

Questo progetto implementa un sistema di gestione della micromobilità condivisa utilizzando TypeScript. Gli utenti possono prenotare mezzi disponibili in una città specifica, e l'amministratore della città può aggiungere nuovi mezzi alla lista.

Per visualizzare il progetto [clicca qui](https://codepen.io/elisasalvatore/pen/OPLpwqg).

## **Struttura del Progetto**

### **Types e Interfaces**

- **MezzoDiTrasporto:** Definisce i tipi dei mezzi di trasporto condivisi (`"bicicletta"`, `"scooter"`, `"monopattino"`).
- **MetodoDiPagamento:** Definisce i metodi di pagamento supportati (`"carta"`, `"satispay"`).

#### **Interfaces Principali:**

- `ICitta`: Gestisce la città e i mezzi disponibili.
- `IUtente`: Gestisce le informazioni degli utenti e la prenotazione dei mezzi.
- `IMezzo`: Definisce le proprietà e le operazioni legate ai mezzi di trasporto.

---

## **Classi Implementate**

### **1. Citta**

Rappresenta una città che gestisce i mezzi disponibili.

#### Proprietà:

- `nomeCitta`: Nome della città.
- `mezziDisponibili`: Elenco dei mezzi disponibili.

#### Metodi:

- `aggiungiMezzo(mezzo: IMezzo)`: Aggiunge un mezzo alla lista, se non è già presente.

---

### **2. Utente**

Gestisce le informazioni degli utenti e la prenotazione dei mezzi.

#### Proprietà:

- `nome`: Nome dell'utente.
- `cognome`: Cognome dell'utente.
- `email`: Email dell'utente.
- `pagamento`: Metodo di pagamento.

#### Metodi:

- `prenotaMezzo(mezzo: IMezzo)`: Prenota un mezzo disponibile.

---

### **3. Mezzo**

Definisce le informazioni e lo stato dei mezzi.

#### Proprietà:

- `tipo`: Tipo di mezzo (`"bicicletta"`, `"scooter"`, `"monopattino"`).
- `id`: Identificativo univoco del mezzo.
- `disponibile`: Stato del mezzo (`"disponibile"` o `"in uso"`).

#### Metodi:

- `assegnaUtente(utente: IUtente)`: Assegna un mezzo a un utente se disponibile.

---

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
userLuca.prenotaMezzo(monopattino); // Fallisce perché è già in uso
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

---

## **Requisiti**

- **Linguaggio:** TypeScript
- **Ambiente di sviluppo consigliato:** Node.js con un compilatore TypeScript installato.

## **Istruzioni per l'Esecuzione**

1. Clona il repository.
2. Installa le dipendenze (se applicabile).
3. Compila ed esegui il codice utilizzando il comando:
   ```bash
   tsc index.ts && node index.js
   ```

---

## Contatti

Creato con ❤️ da Elisa Salvatore. Per qualsiasi domanda o suggerimento, sentiti libero di aprire un'issue o contattarmi direttamente tramite GitHub.
