/*
  ============================================================
  CONFIGURATION KONIS
  ------------------------------------------------------------
  Modifie uniquement ce fichier pour mettre à jour ton profil,
  tes réseaux sociaux et tes actualités/mixes.
  Aucune connaissance en code n'est nécessaire : remplace juste
  les valeurs entre guillemets " ".
  ============================================================
*/

const KONIS_CONFIG = {

  // ---------- Profil affiché en haut de page ----------
  profile: {
    name: "KONIS",
    role: "Dance - House - Techno",
    avatar: "assets/img/logo-konis.png" // logo KONIS (blanc, fond transparent)
  },

  // ---------- Infos utilisées pour la fiche de contact (vCard) ----------
  contact: {
    firstName: "Konis",
    lastName: "",
    organization: "KONIS",
    role: "DJ / Artiste",
    phone: "+33642398533",
    email: "contact@konis.fr",   // remplace par ton email si besoin
    website: "https://konis.fr", // remplace par le lien de cette page une fois en ligne
    photo: "assets/img/logo-konis-contact.jpg" // photo intégrée dans la fiche contact
  },

  // ---------- Réseaux sociaux ----------
  // icon disponibles : instagram, tiktok, youtube, soundcloud, mixcloud,
  // spotify, facebook, whatsapp, snapchat, twitter, twitch, link
  socials: [
    { name: "Instagram",  url: "https://instagram.com/konismusic",        icon: "instagram" },
    { name: "YouTube",    url: "https://www.youtube.com/@konismusic",     icon: "youtube" },
    { name: "Mixcloud",   url: "https://www.mixcloud.com/KONISmusic/",    icon: "mixcloud" },
    { name: "SoundCloud", url: "https://soundcloud.com/konisoff",         icon: "soundcloud" }
  ],

  // ---------- Playlists Spotify ----------
  // Ajoute une entrée par playlist (nom + lien). La section ne s'affiche
  // que si cette liste contient au moins une playlist.
  spotifyPlaylists: [
    { name: "KONIS - MUSIC FOR LIFE",      url: "https://open.spotify.com/playlist/5MCFXVVv5o6MWYA8TW3At7" },
    { name: "KONIS - DEEP HOUSE",          url: "https://open.spotify.com/playlist/6Qvq2QuPjtnYRZLbt9KuUZ" },
    { name: "KONIS - TECH HOUSE",          url: "https://open.spotify.com/playlist/2sRjWrbYuc8jHsLA2C2hst" },
    { name: "KONIS - HOUSE UNDERGROUND",   url: "https://open.spotify.com/playlist/1u6rweJTZaHFCSX6nOQxUs" }
  ],

  // ---------- Actualités / derniers mixes ----------
  // type: "soundcloud" | "youtube" | "link"
  // - "soundcloud" / "youtube" : renseigne "embedUrl" pour afficher le lecteur intégré
  //   (utilise l'URL "embed" fournie par le bouton Partager > Intégrer de la plateforme)
  // - "link" : simple carte cliquable qui ouvre "link" dans un nouvel onglet
  news: [
    {
      title: "Nouveau mix", // remplace par le vrai titre de la vidéo si besoin
      date: "2026-09-05",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/OB9AEn5ogAk",
      link: "https://youtu.be/OB9AEn5ogAk"
    }
  ]
};
