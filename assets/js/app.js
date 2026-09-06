(function () {
  "use strict";

  var ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2c.3 2 1.7 3.6 3.8 3.9v3a7 7 0 0 1-3.8-1.2v6.8a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v3.1a2.7 2.7 0 1 0 1.9 2.6V2h3z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none"/></svg>',
    soundcloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12v4M6 10v6M9 8v8M12 9v7M15 6a4 4 0 0 1 4 4v6M15 10v6"/><path d="M19 12a3 3 0 0 1 0 6H15"/></svg>',
    mixcloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="12" r="3.2"/><circle cx="17" cy="12" r="3.2"/><path d="M10.2 12h3.6"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M7 10.5c3-1 7-.6 9.5 1M7.5 13.5c2.5-.8 5.8-.5 8 .8M8 16.3c2-.6 4.6-.4 6.3.7"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2z"/><path d="M8.5 8.7c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.5.2.5.7 1.6.7 1.8.1.1.1.3 0 .4-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.6-.1l.6-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.4 0 .2 0 1-.5 1.7-.5.7-1.6 1.1-2.4 1.1-.8 0-1.8-.3-4-1.4-2.7-1.4-4.4-4.1-4.6-4.3-.1-.2-1-1.3-1-2.6 0-1.2.6-1.8.9-2.1z" fill="currentColor" stroke="none"/></svg>',
    snapchat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3 0 5 2 5 5v2c0 .8 1.3 1.7 2 2-.3 1-1.3 1.3-2.2 1.6-.3.9-.4 1.7-1.3 1.7-.7 0-1 .5-2.4 1.2-.5.3-1.4.7-2.1.7s-1.6-.4-2.1-.7C7.5 16 7.2 15.5 6.5 15.5c-.9 0-1-.8-1.3-1.7C4.3 13.5 3.3 13.2 3 12.2c.7-.3 2-1.2 2-2v-2c0-3 2-5 5-5z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3l8 9.3L3.4 21H6l6-6.7 4.7 6.7H21l-8.4-9.7L20 3h-2.6l-5.4 6-4.2-6H3z"/></svg>',
    twitch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v10l-4 4h-4l-2 2H8v-2H4V4z"/><path d="M12 8v4M16 8v4"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15l6-6M10 6l1-1a4 4 0 0 1 6 6l-1 1M14 18l-1 1a4 4 0 0 1-6-6l1-1"/></svg>'
  };

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function formatDate(iso) {
    try {
      var d = new Date(iso + "T00:00:00");
      return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    } catch (e) {
      return iso;
    }
  }

  // ---------- vCard (fiche de contact en un clic) ----------

  // Découpe les lignes trop longues selon la norme vCard (RFC 6350) :
  // 75 caractères par ligne, les lignes suivantes commencent par une espace.
  function foldVCardLine(line) {
    var maxLen = 75;
    if (line.length <= maxLen) return line;
    var result = line.slice(0, maxLen);
    var rest = line.slice(maxLen);
    while (rest.length > 0) {
      result += "\r\n " + rest.slice(0, maxLen - 1);
      rest = rest.slice(maxLen - 1);
    }
    return result;
  }

  function buildVCard(profile, contact, socials, photo) {
    var lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:" + (contact.lastName || "") + ";" + (contact.firstName || "") + ";;;",
      "FN:" + ((contact.firstName || "") + " " + (contact.lastName || "")).trim(),
      "ORG:" + (contact.organization || ""),
      "TITLE:" + (contact.role || "")
    ];
    if (contact.phone) lines.push("TEL;TYPE=CELL:" + contact.phone);
    if (contact.email) lines.push("EMAIL:" + contact.email);
    if (contact.website) lines.push("URL:" + contact.website);
    if (photo) lines.push(foldVCardLine("PHOTO;ENCODING=b;TYPE=" + photo.type + ":" + photo.base64));
    (socials || []).forEach(function (s) {
      if (s.url) lines.push("URL;TYPE=" + s.name.replace(/\s+/g, "") + ":" + s.url);
    });
    lines.push("END:VCARD");
    return lines.join("\r\n");
  }

  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  function setContactHref(btn, vcard) {
    if (btn._blobUrl) URL.revokeObjectURL(btn._blobUrl);

    if (window.Blob && window.URL && URL.createObjectURL) {
      var blobUrl = URL.createObjectURL(new Blob([vcard], { type: "text/vcard;charset=utf-8" }));
      btn._blobUrl = blobUrl;
      btn.setAttribute("href", blobUrl);
      // iOS Safari shows the native "add contact" screen only when it can
      // navigate directly to the vCard; the download attribute forces a
      // plain file save instead, so it's only kept for other browsers.
      if (isIOS()) {
        btn.removeAttribute("download");
      } else {
        btn.setAttribute("download", "Konis.vcf");
      }
    } else {
      btn.setAttribute("href", "data:text/vcard;charset=utf-8," + encodeURIComponent(vcard));
    }
  }

  function loadPhotoBase64(url) {
    return fetch(url)
      .then(function (res) { return res.blob(); })
      .then(function (blob) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          reader.onload = function () {
            var match = /^data:(.*?);base64,(.*)$/.exec(reader.result || "");
            if (!match) { reject(new Error("Format d'image inattendu")); return; }
            resolve({ type: match[1].split("/")[1].toUpperCase(), base64: match[2] });
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      });
  }

  function initContactButton() {
    var btn = document.getElementById("add-contact-btn");
    if (!btn) return;

    setContactHref(btn, buildVCard(KONIS_CONFIG.profile, KONIS_CONFIG.contact, KONIS_CONFIG.socials));

    if (KONIS_CONFIG.contact.photo) {
      loadPhotoBase64(KONIS_CONFIG.contact.photo).then(function (photo) {
        setContactHref(btn, buildVCard(KONIS_CONFIG.profile, KONIS_CONFIG.contact, KONIS_CONFIG.socials, photo));
      }).catch(function () {
        // La fiche reste utilisable sans photo si le chargement échoue.
      });
    }

    btn.addEventListener("click", function () {
      showToast("Ouverture de la fiche contact…");
    });
  }

  // ---------- Réseaux sociaux ----------
  function renderSocials() {
    var grid = document.getElementById("social-grid");
    if (!grid) return;
    var html = (KONIS_CONFIG.socials || []).map(function (s) {
      var icon = ICONS[s.icon] || ICONS.link;
      return (
        '<a class="social-item" href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeHtml(s.name) + '">' +
          '<span class="icon">' + icon + "</span>" +
          "<span>" + escapeHtml(s.name) + "</span>" +
        "</a>"
      );
    }).join("");
    grid.innerHTML = html;
  }

  // ---------- Playlists Spotify ----------
  function renderSpotifyPlaylists() {
    var section = document.getElementById("spotify-section");
    var list = document.getElementById("spotify-list");
    if (!section || !list) return;

    var playlists = KONIS_CONFIG.spotifyPlaylists || [];
    if (!playlists.length) {
      section.hidden = true;
      return;
    }

    section.hidden = false;
    list.innerHTML = playlists.map(function (p) {
      return (
        '<a class="playlist-card" href="' + escapeHtml(p.url) + '" target="_blank" rel="noopener noreferrer">' +
          '<div class="news-card-body">' +
            '<div class="news-thumb"><span class="icon">' + ICONS.spotify + "</span></div>" +
            '<div class="news-text">' +
              '<p class="news-title">' + escapeHtml(p.name) + "</p>" +
              '<p class="news-meta"><span class="news-tag">Spotify</span>Playlist</p>' +
            "</div>" +
          "</div>" +
        "</a>"
      );
    }).join("");
  }

  // ---------- Actualités / mixes ----------
  function renderNews() {
    var list = document.getElementById("news-list");
    if (!list) return;

    var items = (KONIS_CONFIG.news || []).slice().sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    var html = items.map(function (n) {
      var tag = n.type === "soundcloud" ? "SoundCloud" : n.type === "youtube" ? "YouTube" : "Actu";
      var thumbIcon = n.type === "soundcloud" ? ICONS.soundcloud : n.type === "youtube" ? ICONS.youtube : ICONS.link;

      var head =
        '<div class="news-card-body">' +
          '<div class="news-thumb"><span class="icon">' + thumbIcon + "</span></div>" +
          '<div class="news-text">' +
            '<p class="news-title">' + escapeHtml(n.title) + "</p>" +
            '<p class="news-meta"><span class="news-tag">' + tag + "</span>" + formatDate(n.date) + "</p>" +
          "</div>" +
        "</div>";

      var embed = "";
      if ((n.type === "soundcloud" || n.type === "youtube") && n.embedUrl) {
        var height = n.type === "soundcloud" ? 120 : 200;
        embed = '<div class="news-embed"><iframe src="' + escapeHtml(n.embedUrl) + '" height="' + height + '" loading="lazy" allow="autoplay"></iframe></div>';
      }

      if (embed) {
        return '<div class="news-card">' + head + embed + "</div>";
      }
      return '<a class="news-card" href="' + escapeHtml(n.link) + '" target="_blank" rel="noopener noreferrer">' + head + "</a>";
    }).join("");

    list.innerHTML = html || '<p style="text-align:center;color:var(--text-dim)">Aucune actualité pour le moment.</p>';
  }

  // ---------- Profil ----------
  function renderProfile() {
    var p = KONIS_CONFIG.profile;
    var nameEl = document.getElementById("profile-name");
    var roleEl = document.getElementById("profile-role");
    var mailEl = document.getElementById("profile-mail");
    var avatarEl = document.getElementById("avatar");
    if (nameEl) nameEl.textContent = p.name;
    if (roleEl) roleEl.textContent = p.role;
    if (mailEl && KONIS_CONFIG.contact.email) {
      mailEl.href = "mailto:" + KONIS_CONFIG.contact.email;
      mailEl.textContent = KONIS_CONFIG.contact.email;
    }
    if (avatarEl && p.avatar) {
      avatarEl.src = p.avatar;
      avatarEl.alt = "Photo de " + p.name;
    }
    document.title = p.name + " — Contact & Réseaux";
  }

  // ---------- Toast ----------
  var toastTimer = null;
  function showToast(message) {
    var toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
  }

  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderProfile();
    renderSocials();
    renderSpotifyPlaylists();
    renderNews();
    initContactButton();
    setYear();
  });
})();
