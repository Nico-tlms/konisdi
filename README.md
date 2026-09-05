# KONIS — Page de carte de visite NFC

Page web mobile-first (style « linktree perso ») destinée à être ouverte
depuis une carte de visite NFC. Elle permet en un tap de :

- **s'ajouter en fiche de contact** (bouton « Ajouter à mes contacts », génère une vCard) ;
- **suivre les réseaux sociaux** (grille d'icônes) ;
- **consulter les actualités / derniers mixes** (liste de cartes, avec lecteur intégré SoundCloud/YouTube en option).

Site 100% statique (HTML/CSS/JS vanilla), aucune dépendance externe, aucun
build requis — rapide à charger sur mobile et hébergeable n'importe où.

## Personnaliser

Tout se modifie dans **`assets/js/config.js`** :

- `profile` : nom, rôle, bio, photo (`assets/img/avatar.svg` à remplacer par ta photo) ;
- `contact` : téléphone, email, site web → utilisés pour générer la vCard ;
- `socials` : liste de réseaux (nom, url, icône parmi `instagram`, `tiktok`,
  `youtube`, `soundcloud`, `spotify`, `facebook`, `whatsapp`, `snapchat`,
  `twitter`, `twitch`, `link`) ;
- `news` : actualités/mixes. `type` = `"soundcloud"`, `"youtube"` ou `"link"`.
  Pour `"soundcloud"`/`"youtube"`, renseigne `embedUrl` (URL d'intégration
  fournie par le bouton *Partager > Intégrer* de la plateforme) pour afficher
  un lecteur directement dans la page ; sinon la carte ouvre simplement `link`.

Remplace aussi la photo par défaut : dépose ton image dans `assets/img/`
(ex: `assets/img/moi.jpg`) et mets à jour `profile.avatar` en conséquence.

## Tester en local

Ouvre simplement `index.html` dans un navigateur, ou lance un petit serveur :

```bash
python3 -m http.server 8080
```

puis va sur `http://localhost:8080`.

## Déployer

Le site est statique : dépose le contenu du dossier sur n'importe quel
hébergement (GitHub Pages, Netlify, Vercel, OVH, etc.). Une fois en ligne,
mets à jour `contact.website` dans `config.js` avec l'URL finale, puis
programme cette URL sur la puce NFC de ta carte de visite.

## Compatibilité « Ajouter aux contacts »

Le bouton génère une vCard (format `.vcf`) à la volée à partir de
`config.js` et l'ouvre directement dans le navigateur (iOS Safari et
Chrome Android affichent l'écran d'ajout au carnet d'adresses ; certains
navigateurs proposent d'abord un téléchargement, il suffit alors d'ouvrir
le fichier téléchargé).
