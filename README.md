# Color Atlas Web

Projet web autonome pour explorer les couleurs, leurs tons et leurs codes hexadécimaux.

## Accès en ligne

GitHub Pages est configuré via GitHub Actions.

URL attendue après déploiement : https://maaanuuuuuuu.github.io/hexa/

## Fonctionnalités

- Interface statique ouvrable directement avec `index.html`.
- Recherche et validation de codes HEX courts ou longs.
- Conversion HEX → RGB → HSL.
- Génération de tons, ombres et lumières.
- Harmonies complémentaires, analogues et triadiques.
- Atlas HSL par teinte, saturation et luminosité.
- Échantillonnage RGB configurable pour explorer une grande partie du cube RGB.
- Liste des couleurs CSS nommées avec leur code HEX.
- Copie rapide des codes HEX.
- Export CSV de la vue courante.

## Pourquoi “presque exhaustif” ?

En RGB 24-bit, il existe `256 × 256 × 256 = 16 777 216` couleurs possibles. Les afficher toutes en même temps rendrait la page inutilisable. L’application génère donc des vues représentatives et réglables : teintes HSL, matrices de tons et cube RGB échantillonné.

## Lancer localement

Option simple : ouvrir `index.html` dans un navigateur.

Option serveur local :

```bash
npm run dev
```

ou :

```bash
npm run start
```

## Déploiement GitHub Pages

Le fichier `.github/workflows/pages.yml` publie le contenu statique du dépôt à chaque push sur `main`.

## Export RGB massif

Le script optionnel permet de générer un CSV RGB par pas :

```bash
node scripts/generate-rgb-csv.mjs --step=16 --out=colors-step-16.csv
```

Avec `--step=1`, il génère les 16 777 216 couleurs RGB 24-bit. Le fichier sera très volumineux.

## Structure

```text
.
├── .github/workflows/pages.yml
├── .nojekyll
├── index.html
├── package.json
├── README.md
└── scripts/
    └── generate-rgb-csv.mjs
```
