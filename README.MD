# slub_web_qucosa

TYPO3 site package for the Qucosa document servers. It holds the styling, Fluid templates, TypoScript and JavaScript of each client site. Qucosa: https://www.qucosa.de

## Clients

Each client has its own static TypoScript template under `Configuration/TypoScript/`. Add it to the root page template of the site.

| Static template | Directory |
|---|---|
| Qucosa: Hauptseite | `Main` |
| Qucosa: SLUB Dresden (SLUB) | `SLUB` |
| Qucosa: Universität Leipzig (UL) | `UBL` |
| Qucosa: Technische Universität Chemnitz (Monarch) | `MONARCH` |
| Qucosa: Musiconn | `MusiconnPublish` |
| Qucosa: Dresden Internation University (DIU) | `DIU` |
| Qucosa: Hochschule für Technik und Wirtschaft Dresden (HTW) | `HTW` |
| Qucosa: Technische Universität Bergakademie Freiberg (TUBAF) | `TUBAF` |
| Qucosa: Helmholtz-Zentrum Dresden-Rossendorf (HZDR) | `HZDR` |
| Qucosa: Technische Universität Dresden (TUD) | `TUD` |
| Qucosa: FID Move | `FIDMOVE` |
| Qucosa: HTWK Leipzig | `HTWKLEIPZIG` |
| Qucosa: Konfiguration Find Recherche | `Find` |

`Common` holds TypoScript that all clients share.

## Where things are

- `Configuration/TypoScript/<Client>/` holds the constants and setup of one client.
- `Configuration/FlexForms/`, `TsConfig/`, `RTE/` and `TCA/Overrides/` hold the content element and editor configuration.
- `Resources/Private/Templates/` holds the Fluid templates, for example `LandingPage` and `SearchFE`.
- `Build/components/` holds the SCSS. The compiled CSS and JavaScript are committed in `Resources/Public/`.

## Build

Run the build after every change to SCSS or JavaScript, and commit the result:

```bash
cd Build
npm ci
npm run build
```

`npm run watch` rebuilds on every file change. The build needs Node.js 20.

## Maintainer

If you have any questions or encounter any problems, please do not hesitate to contact us.

- [Erik Sommer](https://github.com/erikmitk)
