<p align="center"><img src="assets/Camping-cuate.svg" alt="Sangbok Logo"  /></p>
<p align=""><a href="https://storyset.com/people" style="color: gray; font-size: 10px;text-decoration: none">Illustrasjon av Freepik Storyset</a></p>
<h1 align="center">
Sangbok
</h1>

<p align="center">
  <a href="https://github.com/1-fredrikstad/sangbok/actions/workflows/ci.yml">
      <img src="https://github.com/1-fredrikstad/sangbok/actions/workflows/ci.yml/badge.svg" alt="CI status"/></a>
  <a href="https://github.com/1-fredrikstad/sangbok/blob/main/LICENSE" alt="Release version">
      <img src="https://img.shields.io/github/license/1-fredrikstad/sangbok" /></a>
  <a href="https://github.com/1-fredrikstad/sangbok/issues" alt="Release version">
      <img src="https://img.shields.io/github/issues/1-fredrikstad/sangbok" /></a>
</p>

En webapp for speidere som ønsker å finne fram til speidersangene rundt leirbålet. Dette er en applikasjon som inneholder blant annet Fredrikstad Speidergruppe sin kjente speiderbok, `Sanger under Liljen`.

## Utvikling og oppsett

Teknologistacken vår består av [**Sanity.io**](https://www.sanity.io/) og [**React**](https://reactjs.org/). Sanity håndterer lagring og uthenting av sanger, - React viser innholdet frem.

For å kunne kjøre en utviklingsinstans av webapplikasjonen så trenger man: [Node.js](https://nodejs.org/en/download/) og [`yarn`](https://classic.yarnpkg.com/en/docs/install).

Vi anbefaler VSCode som en flott editor for å bidra. Den er lett å bruke, gratis og fungere flott out of the box.

---

> Antar at man påforhånd har installert Node.js og Yarn, i tillegg til at man har klonet repoet.

> Under utvikling anbefales det å åpne `frontend` og `cms` i egne VSCode-instanser for et best mulig utviklermiljø.

### Installer prosjektets pakker

```zsh
yarn
```

## 💡 Tilgjengelige kommandoer.

> NB!: Alle kommandoer kjøres fra roten av prosjektet.

#### Start prosjektet i _developer-mode_.

```zsh
yarn dev
```

#### Kjør hele prosjektet i _production mode_

```zsh
yarn build # Start med å bygge prosjektet
yarn start # Kjør prosjektet
```

#### Start frontend alene

```zsh
yarn frontend # Production
yarn frontend:dev # Development
```

#### Start cms alene

```zsh
yarn cms # Production
yarn cms:dev # Development
```

---

### Bygg prosjektet

```zsh
yarn build
```

---

### Test prosjektet

#### Enhetstester

TBA.

#### End-to-end testing med Cypress

> NB! Cypress-testene kan kun kjøres dersom prosjektet kjøres lokalt ved siden av.

```zsh
yarn frontend:test
```

## Utvikling

Prosjektet benytter seg av `yarn workspaces`. Installasjon av pakker gjøres på følgende vis:

#### For `frontend`:

```zsh
yarn workspace frontend add <pakkenavn>
```

#### For `cms`:

```zsh
yarn workspace cms add <pakkenavn>
```

#### Globalt for appen (kke anbefalt med mindre pakken brukes av alle modulene):

```zsh
yarn add <pakkenavn> -W
```
