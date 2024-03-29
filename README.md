<p align="center"><img src="assets/Camping-cuate.svg" alt="Sangbok Logo"  /></p>
<p align=""><a href="https://storyset.com/people" style="color: gray; font-size: 10px;text-decoration: none">Illustrasjon av Freepik Storyset</a></p>
<h1 align="center">
   Sangbok
</h1>

<p align="center">
   <a href="https://github.com/1-fredrikstad/sangbok/actions/workflows/ci.yml">
   <img src="https://github.com/1-fredrikstad/sangbok/actions/workflows/ci.yml/badge.svg" alt="CI status"/></a>
   <a href="https://github.com/1-fredrikstad/sangbok/blob/main/LICENSE" alt="LICENSE">
   <img src="https://img.shields.io/github/license/1-fredrikstad/sangbok" /></a>
   <a href="https://github.com/1-fredrikstad/sangbok/issues" alt="Issues">
   <img src="https://img.shields.io/github/issues/1-fredrikstad/sangbok" /></a>
</p>

En webapp for fremvisning av speidersanger. Appen lar deg spille av sanger, både fra Spotify og egenopplastede. Videre er innholdet tilgjengelig offline, og den tilhørende darkmoden gjør teksten godt leselig i nattens mulm og mørke.

## Wiki

Brukermanualer, utdypende informasjon mm. finnes på prosjektets [wiki](https://github.com/1-fredrikstad/sangbok/wiki).

## Prosjektstruktur

Applikasjonen er bygget med [**Sanity.io**](https://www.sanity.io/) og [**Next.js**](https://nextjs.org/). Sanity håndterer opprettelse, lagring og uthenting av sanger, Next.js viser frem innholdet.

Mappen [`frontend/`](https://github.com/1-fredrikstad/sangbok/tree/main/frontend) inneholder all kode relevant for applikasjonens utseende og funksjonalitet. Mappen [`cms/`](https://github.com/1-fredrikstad/sangbok/tree/main/cms) inneholder all kode relevant for dataen som vises frem og dens struktur. Både `frontend/` og `cms/` er to frittstående prosjekter, - de kan med andre ord kjøres uavhengig av hverandre. Det er dog verdt å nevne at `frontend`-appen belager seg på data fra `cms`, så dersom `cms` ikke kjører i bakgrunnen vil dataen mangle.

## Utvikling og oppsett

For å kunne kjøre en utviklingsinstans av webapplikasjonen så trenger man: [Node.js](https://nodejs.org/en/download/) og [`yarn`](https://classic.yarnpkg.com/en/docs/install).

Vi anbefaler [VSCode](https://code.visualstudio.com/) for utviklingsprosessen. Den er lett å bruke, gratis og fungere flott out of the box.

For å kjøre prosjektet, følg `README.md` som ligger i `frontend/` og `cms/`-mappene. Disse filene inneholder informasjon om oppsett, tilgjengelige funksjoner og scripts.

Under utvikling anbefales det å åpne `frontend/` og `cms/` i egne VSCode-instanser for et best mulig utviklermiljø.
