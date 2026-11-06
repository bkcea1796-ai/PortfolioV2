# Portfolio de Bonzou Kouassi Eythan

Portfolio statique en HTML, CSS et JavaScript, sans framework ni étape de compilation.

## Structure

```
portfolio/
├── index.html        la page (contenu et structure)
├── css/style.css     le style (thème clair et sombre, responsive)
├── js/script.js      les interactions (nom animé, thème, photo, copie de l'e-mail)
└── assets/           ta photo : portrait.jpg
```

## Ouvrir en local

Double-clique sur `index.html`. Une connexion internet est utile pour charger les polices Google Fonts.

## Personnaliser

- **Photo** : place un fichier `portrait.jpg` dans `assets/` (format vertical 4:5, par exemple 640 x 800 px). Il s'affiche automatiquement pour tous les visiteurs. Sans ce fichier, le cadre permet de choisir une photo, mais elle reste visible uniquement dans ton navigateur.
- **Projets** : dans `index.html`, section `id="projets"`. Remplace le titre, la description, les technologies et le lien `href` du bouton « Visualiser le projet » de chaque bulle. Retire la classe `empty` d'une bulle une fois remplie pour avoir une bordure pleine.
- **Certifications** : dans la section `id="competences"`, remplace le `href` de chaque bouton « Voir » par le lien du certificat (ajoute `target="_blank" rel="noopener"` pour l'ouvrir dans un nouvel onglet).
- **Liens** : GitHub, LinkedIn et CV dans la section `id="contact"`.
- **Couleurs** : variables en haut de `css/style.css` (`--accent`, `--bg`, `--ink`).

## Publier gratuitement avec GitHub Pages

1. Crée un dépôt GitHub (par exemple `portfolio`) et envoie-y le contenu du dossier.
2. Dans le dépôt : Settings, puis Pages.
3. Source : Deploy from a branch, branche `main`, dossier `/ (root)`, puis Save.
4. Le site est disponible après quelques instants à l'adresse `https://TON-PSEUDO.github.io/portfolio/`.
