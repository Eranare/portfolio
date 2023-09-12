import React from 'react';
import './PrivacyPolicy.css'; // Assuming you'll add some styles

function PrivacyPolicy({ onClose }) {
  // Function to handle the backdrop click
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('privacy-policy-modal')) {
      onClose();
    }
  };

  return (
    <div className="privacy-policy-modal" onClick={handleBackdropClick}>

        <div className="privacy-policy-content">
  <h2>Privacyverklaring</h2>
  <p>
    StemActeurMarcel.nl is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
  </p>
  <h3>Persoonsgegevens die wij verwerken</h3>
  <p>
    StemActeurMarcel.nl verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt.
  </p>
  <p>
    Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:
    <ul>
      <li>Voor- en achternaam</li>
      <li>Telefoonnummer</li>
      <li>E-mailadres</li>
      <li>IP-adres</li>
      <li>Locatiegegevens</li>
      <li>Gegevens over uw activiteiten op onze website</li>
      <li>Gegevens over uw surfgedrag over verschillende websites heen</li>
      <li>Internetbrowser en apparaat type</li>
    </ul>
  </p>

  <h3>Bijzondere en/of gevoelige persoonsgegevens die wij verwerken</h3>
  <p>
    Onze website en/of dienst heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij ze toestemming hebben van ouders of voogd. We kunnen echter niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook aan betrokken te zijn bij de online activiteiten van hun kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld worden zonder ouderlijke toestemming. Als u er van overtuigd bent dat wij zonder die toestemming persoonlijke gegevens hebben verzameld over een minderjarige, neem dan contact met ons op via marcel@StemActeurMarcel.nl, dan verwijderen wij deze informatie.
  </p>

  <h3>Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken</h3>
  <p>
    StemActeurMarcel.nl verwerkt uw persoonsgegevens voor de volgende doelen:
    <ul>
      <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
      <li>StemActeurMarcel.nl analyseert uw gedrag op de website om daarmee de website te verbeteren en het aanbod van producten en diensten af te stemmen op uw voorkeuren.</li>
    </ul>
  </p>

  <h3>Geautomatiseerde besluitvorming</h3>
  <p>
    StemActeurMarcel.nl neemt niet op basis van geautomatiseerde verwerkingen besluiten over zaken die (aanzienlijke) gevolgen kunnen hebben voor personen. Het gaat hier om besluiten die worden genomen door computerprogramma’s of -systemen, zonder dat daar een mens (bijvoorbeeld een medewerker van StemActeurMarcel.nl) tussen zit. StemActeurMarcel.nl gebruikt de volgende computerprogramma’s of -systemen:
  </p>

  <h3>Hoe lang we persoonsgegevens bewaren</h3>
  <p>
    StemActeurMarcel.nl bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren geen bewaartermijnen voor persoonsgegevens die we verzamelen.
  </p>

  <h3>Delen van persoonsgegevens met derden</h3>
  <p>
    StemActeurMarcel.nl verstrekt uitsluitend aan derden en alleen als dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
  </p>

  <h3>Hoe wij persoonsgegevens beveiligen</h3>
  <p>
    StemActeurMarcel.nl neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact op met onze klantenservice of via marcel@StemActeurMarcel.nl.
  </p>

  <h3>Cookies, of vergelijkbare technieken, die wij gebruiken</h3>
  <p>
    StemActeurMarcel.nl gebruikt functionele, analytische en tracking cookies. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser van uw computer, tablet of smartphone. StemActeurMarcel.nl gebruikt cookies met een technische functionaliteit. Deze zorgen ervoor dat de website naar behoren werkt en dat bijvoorbeeld uw voorkeursinstellingen onthouden worden. Deze cookies worden ook gebruikt om de website goed te laten werken en deze te kunnen optimaliseren. Daarnaast plaatsen we cookies die uw surfgedrag bijhouden zodat we op maat gemaakte content en advertenties kunnen aanbieden.
  </p>
  <p>
    Bij uw eerste bezoek aan onze website hebben wij u al geïnformeerd over deze cookies en toestemming gevraagd voor het plaatsen ervan.
  </p>
  <p>
    U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de instellingen van uw browser verwijderen.
  </p>
  <p>
    Zie voor een toelichting: <a href="https://veiliginternetten.nl/themes/situatie/cookies-wat-zijn-het-en-wat-doe-ik-ermee/">https://veiliginternetten.nl/themes/situatie/cookies-wat-zijn-het-en-wat-doe-ik-ermee/</a>
  </p>
  <p>
    Op deze website worden ook cookies geplaatst door derden. Dit zijn bijvoorbeeld adverteerders en/of de sociale media-bedrijven. Ga voor meer informatie naar ons cookiesbeleid.
  </p>

  <h3>Gegevens inzien, aanpassen of verwijderen</h3>
  <p>
    U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door StemActeurMarcel.nl en heeft u het recht op gegevensoverdraagbaarheid. Dat betekent dat u bij ons een verzoek kunt indienen om de persoonsgegevens die wij van u beschikken in een computerbestand naar u of een ander, door u genoemde organisatie, te sturen.
  </p>
  <p>
    U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw persoonsgegevens sturen naar marcel@StemActeurMarcel.nl.
  </p>
  <p>
    Om er zeker van te zijn dat het verzoek tot inzage door u is gedaan, vragen wij u een kopie van uw identiteitsbewijs met het verzoek mee te sturen. Maak in deze kopie uw pasfoto, MRZ (machine readable zone, de strook met nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter bescherming van uw privacy. We reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
  </p>
  <p>
    StemActeurMarcel.nl wil u er tevens op wijzen dat u de mogelijkheid heeft om een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via de volgende link: 
    <a href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons">https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons</a>
  </p>
</div>

        <button onClick={onClose}>Close</button>
      </div>
    
  );
}

export default PrivacyPolicy;