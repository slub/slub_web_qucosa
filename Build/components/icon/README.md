# Icon
// @todo

##### Standard-Icons
| Icon                                         | Name                  |
| -------------------------------------------- |:--------------------- |
| ![icon](assets/check.svg)                    | check                 |
| ![icon](assets/close.svg)                    | close                 |

### Beschreibung
Die Icons werden als SVG-Sprite zusammengefügt und befinden sich im `/dist`-Verzeichnis. 
Die Quelldateien liegen als einzelne Icons im `/src`-Verzeichnis. Sie sollten alle dieselben 
Abmessungen von **20x20px** haben. Außerdem stehen verschiedene Klassen zur Verfügung 
um die Darstellung der Icons anzupassen.

### Beispiel-Code:
```html
<svg class="qsa_icon" role="img" width="20" height="20">
  <use href="./assets/icons/icons.min#facebook"></use>
</svg>
```

### Hintergrund-Icons einfärben
https://codepen.io/sosuke/pen/Pjoqqp

##### Bespiele:
- **weiß:** filter: brightness(0) invert(1);
- **schwarz:** filter: invert(1);

### Grunt Task:
`svg_sprite:build` oder `svg_sprite:typo3`
