export const metadata = {
  title: `Pirmā skaņa – Privātuma politika`,
  description: "Aplikācijas “Pirmā Skaņa” Privātuma politika",
};

export default function PrivatumaPolitikaPage() {
  return (
    <main className="flex min-h-screen flex-col items-left p-16 pt-12 box-content flex-wrap">
      <div style={{ maxWidth: 1000 }} className="min-w-44">
        <h1 className="text-3xl font-medium ">
          Aplikācijas “Pirmā Skaņa” Privātuma politika
        </h1>
        <div>Atjaunota: 05.11.2023</div>
        <div className="text-xl font-light flex-col mt-10 flex gap-6">
          <h2 className="text-xl font-medium pt-8">Iepazīstināšana:</h2>
          <p>
            Sveicināti aplikācijā “Pirmā Skaņa”! Šī Privātuma politika ir
            veidota, lai informētu vecākus/likumīgos aizbildņus un lietotājus
            par to, kādā veidā mēs apstrādājam un aizsargājam bērna/lietotāja
            datus. Mēs uzskatām, ka privātums un drošība ir jāsaglabā vienmēr,
            sevišķu ievērību vēršot mazāk aizsargāto lietotāju virzienā.
          </p>

          <h2 className="text-xl font-medium pt-8">
            Informācija, ko mēs NEIEVĀCAM:
          </h2>
          <p>
            Mēs neievācam nekāda veida personīgo informāciju, piemēram, vārdu,
            adresi, telefona numuru, epastu utt. Mēs arī apzināti neievācam
            nekāda cita veida informāciju, kas varētu identificēt lietotāju.
          </p>

          <h2 className="text-xl font-medium pt-8">Reklāmas:</h2>
          <p>
            Mēs NEPIEDĀVĀJAM nekāda veida reklāmas mūsu aplikācijā, kā arī
            aplikācijā NAV trešo pušu reklāmu iespēju. Aplikācija NEIEVĀC datus
            par lietotāja uzvedību un NENODROŠINA uzvedības mērķauditorijas
            atlasi vai izsekošanas funkcijas.
          </p>

          <h2 className="text-xl font-medium pt-8">Pirkumi (In-App):</h2>
          <p>
            Aplikācija NEPIEDĀVĀ pirkumu iespējas un NAV nepieciešams norādīt
            nekādus maksāšanas datus (piemēram, kredītkartes detaļas).
            Aplikācijai NAV slēpto maksājumu un finansiālu transakciju iespēju.
          </p>

          <h2 className="text-xl font-medium pt-8">Vecāku kontrole:</h2>
          <p>
            Aplikācijā nav vēcāku kontroles iespēju, jo tāda nav nepieciešama.
            Aplikācijas saturs ir drošs bērniem, un mēs iesakām izpētīt
            aplikācijas saturu un iespējas kopīgi ar bērna un vecāka/aizbildņa
            klātbūtni, lai pārliecinātos, ka aplikācija piedāvā drošu un baudāmu
            pieredzi.
          </p>

          <h2 className="text-xl font-medium pt-8">Sazinaties ar mums:</h2>
          <p>
            Ja rodas jebkādi jautājumi vai ieteikumi, lūdzu, sazinaties ar mums,
            sūtot ziņu uz <b>pirmaskana@gmail.com</b>
          </p>

          <h2 className="text-xl font-medium pt-8">
            Privātuma politikas izmaiņas:
          </h2>
          <p>
            Mēs paturam tiesības mainīt šo Privātuma politiku. Par privātuma
            politikas maiņu lietotājs tiks informēts caur aplikāciju, izmantojot
            “vecāku vārtus”, kur būs nepieciešams piesaistīt vecāku pirms varēs
            turpināt izmantot aplikācijas piedāvātās iespējas.
          </p>

          <h2 className="text-xl font-medium pt-8">Jūsu piekrišana:</h2>
          <p>
            Jūs automātiski piekrītat šai Privātuma politikai, lejuplādējot un
            izmantojot aplikāciju “Pirmā Skaņa”.
          </p>
        </div>
      </div>
    </main>
  );
}
