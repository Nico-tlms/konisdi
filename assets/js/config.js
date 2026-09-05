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
    role: "DJ / Live Mixes",
    bio: "Musique électronique • Mixes • Événements",
    avatar: "assets/img/avatar.svg" // remplace par le chemin de ta photo, ex: "assets/img/moi.jpg"
  },

  // ---------- Infos utilisées pour la fiche de contact (vCard) ----------
  contact: {
    firstName: "Konis",
    lastName: "",
    organization: "KONIS",
    role: "DJ / Artiste",
    phone: "+33600000000",       // remplace par ton numéro
    email: "contact@konis.fr",   // remplace par ton email
    website: "https://konis.fr"  // remplace par le lien de cette page une fois en ligne
  },

  // ---------- Réseaux sociaux ----------
  // icon disponibles : instagram, tiktok, youtube, soundcloud, spotify,
  // facebook, whatsapp, snapchat, twitter, twitch, link
  socials: [
    { name: "Instagram",  url: "https://instagram.com/konis",              icon: "instagram" },
    { name: "TikTok",     url: "https://tiktok.com/@konis",                icon: "tiktok" },
    { name: "YouTube",    url: "https://youtube.com/@konis",               icon: "youtube" },
    { name: "SoundCloud", url: "https://soundcloud.com/konis",             icon: "soundcloud" },
    { name: "Spotify",    url: "https://open.spotify.com/artist/xxxxxxx",  icon: "spotify" },
    { name: "WhatsApp",   url: "https://wa.me/33600000000",                icon: "whatsapp" }
  ],

  // ---------- Actualités / derniers mixes ----------
  // type: "soundcloud" | "youtube" | "link"
  // - "soundcloud" / "youtube" : renseigne "embedUrl" pour afficher le lecteur intégré
  //   (utilise l'URL "embed" fournie par le bouton Partager > Intégrer de la plateforme)
  // - "link" : simple carte cliquable qui ouvre "link" dans un nouvel onglet
  news: [
    {
      title: "Nouveau mix — Summer Session 2026",
      date: "2026-08-15",
      type: "soundcloud",
      embedUrl: "", // ex: https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2FXXXXXXX
      link: "https://soundcloud.com/konis"
    },
    {
      title: "Live @ Club Neon — Aftermovie",
      date: "2026-07-02",
      type: "youtube",
      embedUrl: "", // ex: https://www.youtube.com/embed/XXXXXXXXXXX
      link: "https://youtube.com/@konis"
    },
    {
      title: "Prochaine date : Festival Lumière",
      date: "2026-09-20",
      type: "link",
      link: "https://konis.fr"
    }
  ]
};
