# Sangbok: CMS

> Antar at man påforhånd har installert Node.js og Yarn, i tillegg til at man har klonet repoet.

### Installer nødvendige pakker

```zsh
yarn
```

## 💡 Tilgjengelige kommandoer.

> NB!: Alle kommandoer kjøres fra roten i `cms/`.

#### Bygg CMS

```zsh
yarn build
```

#### Start CMS i _developer-mode_

```zsh
yarn dev # Besøk så http://localhost:3333 i nettleseren din
```

#### Kjør CMS i _production mode_

```zsh
yarn build # Start med å bygge CMSen
yarn start # Start så CMS
```

---

## Utvikling

### Installasjon av pakker gjøres på følgende vis:

```zsh
yarn add <pakkenavn>
```

For å sjekke at koden følger riktige konvensjoner, formatteringer og standarder, er følgende script tilgjengelige:

### ESLint - Avdekk problemer med koden
```zsh
yarn lint
```

### Prettier - Sjekk og formatter koden
```zsh
yarn format-check # Sjekk formattering
yarn format # Auto-formatter
```

## Sanity Content Studio
- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)