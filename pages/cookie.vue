<template>
  <v-row align="start" justify="center">
    <v-col cols="12" sm="12" md="10" lg="8" xl="8">
      <v-card outlined>
        <v-card-title>Informativa estesa dei cookie</v-card-title>
        <v-card-text>
          <p class="body-2">
            I Cookie sono costituiti da porzioni di codice installate
            all’interno del browser che assistono il Titolare nell’erogazione
            del servizio in base alle finalità descritte. Alcune delle finalità
            di installazione dei Cookie potrebbero, inoltre, necessitare del
            consenso dell’Utente.
          </p>
          <v-divider />
          <h3>Cookie tecnici e di statistica aggregata</h3>
          <p class="body-2">
            Questa Applicazione utilizza Cookie per salvare la sessione
            dell’Utente e per svolgere altre attività strettamente necessarie al
            funzionamento dello stesso, ad esempio in relazione alla
            distribuzione del traffico.
          </p>
          <h3>
            Attività di salvataggio delle preferenze, ottimizzazione e
            statistica
          </h3>
          <p class="body-2">
            Questa Applicazione utilizza Cookie per salvare le preferenze di
            navigazione ed ottimizzare l’esperienza di navigazione dell’Utente.
            Fra questi Cookie rientrano, ad esempio, quelli per impostare la
            lingua o per la gestione di statistiche da parte del Titolare del
            sito.
          </p>
          <h3>Visualizzazione di contenuti da piattaforme esterne</h3>
          <p class="body-2">
            Questi servizi permettono di visualizzare contenuti ospitati su
            piattaforme esterne direttamente dalle pagine di questa Applicazione
            e di interagire con essi. Nel caso in cui sia installato un servizio
            di questo tipo, è possibile che, anche nel caso gli Utenti non
            utilizzino il servizio, lo stesso raccolga dati di traffico relativi
            alle pagine in cui è installato.
          </p>
          <h3>Come posso controllare l’installazione di Cookie?</h3>
          <p class="body-2">
            In aggiunta a quanto indicato in questo documento, l’Utente può
            gestire le preferenze relative ai Cookie direttamente all’interno
            del proprio browser ed impedire – ad esempio – che terze parti
            possano installarne. Tramite le preferenze del browser è inoltre
            possibile eliminare i Cookie installati in passato, incluso il
            Cookie in cui venga eventualmente salvato il consenso
            all’installazione di Cookie da parte di questo sito. È importante
            notare che disabilitando tutti i Cookie, il funzionamento di questo
            sito potrebbe essere compromesso. L’Utente può trovare informazioni
            su come gestire i Cookie nel suo browser ai seguenti indirizzi:
            Google Chrome, Mozilla Firefox, Apple Safari and Microsoft Windows
            Explorer. In caso di servizi erogati da terze parti, l’Utente può
            inoltre esercitare il proprio diritto ad opporsi al tracciamento
            informandosi tramite la privacy policy della terza parte, tramite il
            link di opt out se esplicitamente fornito o contattando direttamente
            la stessa. Fermo restando quanto precede, il Titolare informa che
            l’Utente può avvalersi di Your Online Choices. Attraverso tale
            servizio è possibile gestire le preferenze di tracciamento della
            maggior parte degli strumenti pubblicitari. Il Titolare, pertanto,
            consiglia agli Utenti di utilizzare tale risorsa in aggiunta alle
            informazioni fornite dal presente documento.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'outside',

  head() {
    return {
      title: 'Cookie',
    }
  },
}
</script>

<style></style>
