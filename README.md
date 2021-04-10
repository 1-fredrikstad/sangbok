Sangbok

Sangbok er en webapp for speidere som ønsker å finne fram til speidersangene rundt leirbålet. Dette er en applikasjon som inneholder blant annet Fredrikstad Speidergruppe sin kjente speiderbok, `Sanger under Liljen`.

## ⚙️ Lokal konfigurering og oppsett av prosjekt

Teknologistacken vår består av [**Sanity.io**](https://www.sanity.io/) for å lagre og håndtere sangene, og [**React**](https://reactjs.org/).

For å kunne kjøre en utviklingsinstans av webapplikasjonen så trenger man: [Node.js](https://nodejs.org/en/download/) og [`yarn`](https://classic.yarnpkg.com/en/docs/install).

Vi anbefaler VSCode som en flott editor for å bidra. Den er lett å bruke, gratis og fungere flott out of the box.

---

> Antar at man påforhånd har installert Node.js og Yarn, i tillegg til at man har klonet repoet.

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
