/* ============================================================
   Trailupbox — app.js
   Renders the hero, Netflix-style rows, grids, video cards,
   release-date strips/tables and the article page from
   data/articles.js (globals: ARTICLES, VIDEOS, RELEASE_DATES).

   Every page sets <body data-page="home|news|reviews|
   recommendations|celebrity|dates|article"> and provides
   empty containers with the ids used below.
   ============================================================ */

(function () {
  "use strict";

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function fmtDate(iso) {
    var p = (iso || "").split("-");
    if (p.length !== 3) return iso || "";
    return MONTHS[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10) + ", " + p[0];
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* Minimal markdown for our own article text:
     **bold**, *italic*, [text](https://...) — applied AFTER
     HTML-escaping, so article text can never inject markup. */
  function md(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\((https:[^)\s]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  function byDateDesc(a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; }

  function sortedArticles() {
    return (typeof ARTICLES !== "undefined" ? ARTICLES.slice() : []).sort(byDateDesc);
  }

  function articleUrl(a) { return "article.html?slug=" + encodeURIComponent(a.slug); }
  function ytWatch(id) { return "https://youtu.be/" + id; }
  function ytThumb(id) { return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; }

  /* ---------- Cards ---------- */

  /* Portrait-shaped source photos (e.g. the 2:3 Severance poster) must
     never be centre-sliced by a landscape thumb: they get a blurred
     backdrop + object-fit:contain treatment instead (.fit-contain). */
  function isPortraitAsset(src) {
    return /(^|\/)severance-poster\.jpg$/.test(src || "");
  }

  function cardHTML(a, opts) {
    opts = opts || {};
    /* Celebrity stories always use portrait cards — their photos are
       4:5 press shots and a 16/9 crop cuts faces and bodies. */
    var portrait = opts.portrait || a.category === "Celebrity News";
    /* Magazine rhythm: the first non-portrait card of a row/grid is a
       wide featured card. Portrait (celebrity) cards never go wide —
       a landscape slot would crop the photo. */
    var wide = !!opts.wide && !portrait;
    var cls = "card" + (portrait ? " card-portrait" : "") + (wide ? " card-wide" : "");
    var contain = !portrait && isPortraitAsset(a.image);
    var img = "";
    if (a.image) {
      img =
        (contain
          ? '<span class="thumb-blur" style="background-image:url(\'' + esc(a.image) + '\')"></span>'
          : "") +
        '<img src="' + esc(a.image) + '" alt="' + esc(a.title) + '" loading="lazy" ' +
          'data-full="' + esc(a.image) + '" data-caption="' + esc(a.title) + '" ' +
          'onerror="this.remove()">';
    }
    return '' +
      '<article class="' + cls + '">' +
        '<a class="card-thumb' + (contain ? " fit-contain" : "") + '" href="' + articleUrl(a) + '" aria-label="' + esc(a.title) + '">' +
          '<span class="thumb-fallback">' + esc(a.category) + '</span>' + img +
          '<span class="card-shade"></span>' +
        '</a>' +
        '<div class="card-body">' +
          '<div class="card-meta"><span class="badge">' + esc(a.category) + '</span>' +
          '<time datetime="' + esc(a.date) + '">' + esc(fmtDate(a.date)) + '</time></div>' +
          '<h3><a href="' + articleUrl(a) + '">' + esc(a.title) + '</a></h3>' +
          '<p>' + esc(a.excerpt) + '</p>' +
        '</div>' +
      '</article>';
  }

  function videoCardHTML(v) {
    /* Imagery rule (v4): where official hi-res art was sourced for the
       title it replaces the YouTube thumbnail everywhere — card AND
       lightbox. Untracked titles fall back to the YT maxres thumb. */
    var maxres = "https://i.ytimg.com/vi/" + v.id + "/maxresdefault.jpg";
    var thumb = v.art || ytThumb(v.id);
    var full = v.art || maxres;
    var badge = v.series + (v.label ? " &middot; " + v.label : "");
    return '' +
      '<article class="card card-video" data-series="' + esc(v.series) + '">' +
        '<a class="card-thumb" href="' + esc(v.url) + '" target="_blank" rel="noopener" ' +
          'aria-label="Watch on YouTube: ' + esc(v.title) + '">' +
          '<img src="' + esc(thumb) + '" alt="' + esc(v.title) + '" loading="lazy" ' +
            'data-full="' + esc(full) + '" ' +
            'data-fallback="' + ytThumb(v.id) + '" data-caption="' + esc(v.title) + '" ' +
            'onerror="this.remove()">' +
          '<span class="play-badge" aria-hidden="true">&#9654;</span>' +
          '<span class="card-shade"></span>' +
        '</a>' +
        '<div class="card-body">' +
          '<div class="card-meta"><span class="badge badge-video">' + badge + '</span>' +
          '<span class="yt-tag">YouTube</span></div>' +
          '<h3><a href="' + esc(v.url) + '" target="_blank" rel="noopener">' + esc(v.title) + '</a></h3>' +
        '</div>' +
      '</article>';
  }

  function fillRow(id, list, opts) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.length
      ? list.map(function (a, i) {
          var o = {};
          for (var k in (opts || {})) o[k] = opts[k];
          o.wide = i === 0;
          return cardHTML(a, o);
        }).join("")
      : '<div class="empty-note">New stories are on the way — check back soon.</div>';
  }

  function fillGrid(id, list) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.length
      ? list.map(function (a, i) { return cardHTML(a, { wide: i === 0 }); }).join("")
      : '<div class="empty-note">New stories are on the way — check back soon.</div>';
  }

  /* ---------- Release dates ---------- */

  function statusClass(s) {
    var k = String(s || "").toLowerCase().replace(/\s+/g, "");
    if (k === "confirmed") return "confirmed";
    if (k === "expected") return "expected";
    if (k === "inproduction") return "production";
    return "rumoured";
  }

  function renderDateStrip(id, limit) {
    var el = document.getElementById(id);
    if (!el || typeof RELEASE_DATES === "undefined") return;
    el.innerHTML = RELEASE_DATES.slice(0, limit || RELEASE_DATES.length).map(function (d) {
      return '' +
        '<div class="date-chip">' +
          '<div class="d-title">' + esc(d.title) + '</div>' +
          '<div class="d-meta">' + esc(d.platform) + '</div>' +
          '<div class="d-window">' + esc(d.window) + '</div>' +
          '<span class="status ' + statusClass(d.status) + '">' + esc(d.status) + '</span>' +
        '</div>';
    }).join("");
  }

  function renderDateTable(id) {
    var el = document.getElementById(id);
    if (!el || typeof RELEASE_DATES === "undefined") return;
    var rows = RELEASE_DATES.map(function (d) {
      return '<tr>' +
        '<td><strong>' + esc(d.title) + '</strong></td>' +
        '<td>' + esc(d.platform) + '</td>' +
        '<td>' + esc(d.window) + '</td>' +
        '<td><span class="status ' + statusClass(d.status) + '">' + esc(d.status) + '</span></td>' +
      '</tr>';
    }).join("");
    el.innerHTML =
      '<table class="dates"><thead><tr>' +
      '<th>Title</th><th>Platform</th><th>Release Window</th><th>Status</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table>';
  }

  /* ---------- Hero showcase (v4) ----------
     A rotating cinematic showcase of three cover stories. Slides
     crossfade every ~6s with progress segments; rotation pauses on
     hover / focus / touch and never runs under reduced-motion.
     Slide backdrops are hi-res local art (assets/hires), never
     YouTube thumbnails. */

  var SHOWCASE_SLUGS = [
    "dune-part-three-final-trailer-news-wrap",
    "hope-2026-spoiler-free-review",
    "severance-season-3-release-date-update"
  ];
  /* Per-slug backdrop overrides (wider art than the article hero) */
  var SHOWCASE_BG = {
    "dune-part-three-final-trailer-news-wrap": "assets/hires/dune-hero.jpg"
  };
  var SC = { slides: [], idx: 0, timer: null, paused: false, DUR: 6000 };

  function reducedMotion() {
    return !!(window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function scEnsureBg(i) {
    var s = SC.slides[i];
    if (s && !s.bgSet) {
      s.el.style.backgroundImage = "url('" + s.bg + "')";
      s.bgSet = true;
    }
  }

  function scPaint(i) {
    var s = SC.slides[i];
    if (!s) return;
    var a = s.article;
    var hero = document.getElementById("hero");
    /* Hero backdrop tap opens the CURRENT slide's art in the lightbox */
    hero.setAttribute("data-full", s.bg);
    hero.setAttribute("data-caption", a.title);
    document.getElementById("hero-chip").textContent = a.category;
    document.getElementById("hero-title").textContent = a.title;
    document.getElementById("hero-teaser").textContent = a.excerpt;
    document.getElementById("hero-date").textContent = fmtDate(a.date);
    var read = document.getElementById("hero-read");
    if (read) read.setAttribute("href", articleUrl(a));
    var watch = document.getElementById("hero-watch");
    if (watch) {
      if (a.youtubeId) {
        watch.style.display = "";
        watch.setAttribute("href", ytWatch(a.youtubeId));
      } else {
        watch.style.display = "none";
      }
    }
    var segs = document.querySelectorAll(".hp-seg");
    Array.prototype.forEach.call(segs, function (seg, j) {
      seg.classList.toggle("done", j < i);
      seg.classList.toggle("active", j === i);
      if (j === i) {
        /* Restart the fill animation for the new active segment */
        var fill = seg.querySelector(".hp-fill");
        if (fill) {
          fill.style.animation = "none";
          void fill.offsetWidth;
          fill.style.animation = "";
        }
      }
    });
  }

  function scGo(i) {
    var n = SC.slides.length;
    if (!n) return;
    var next = ((i % n) + n) % n;
    scEnsureBg(next);
    scEnsureBg((next + 1) % n);
    SC.slides.forEach(function (s, j) {
      s.el.classList.toggle("active", j === next);
      s.el.setAttribute("aria-hidden", j === next ? "false" : "true");
    });
    SC.idx = next;
    /* Content crossfade: dip, swap, rise */
    var content = document.querySelector(".hero-content");
    if (content && !reducedMotion()) {
      content.classList.add("swap");
      setTimeout(function () {
        scPaint(next);
        content.classList.remove("swap");
      }, 190);
    } else {
      scPaint(next);
    }
  }

  function scStart() {
    if (SC.timer || SC.slides.length < 2 || reducedMotion()) return;
    SC.timer = setInterval(function () {
      if (!SC.paused && !document.hidden) scGo(SC.idx + 1);
    }, SC.DUR);
  }

  function scPause(on) {
    SC.paused = on;
    var hero = document.getElementById("hero");
    if (hero) hero.classList.toggle("hero-paused", on);
  }

  function renderShowcase() {
    var hero = document.getElementById("hero");
    var bgWrap = document.getElementById("hero-bg");
    if (!hero || !bgWrap) return;
    var all = sortedArticles();
    var bySlug = {};
    all.forEach(function (a) { bySlug[a.slug] = a; });
    var picked = SHOWCASE_SLUGS.map(function (s) { return bySlug[s]; })
      .filter(function (a) { return a && a.image; });
    if (!picked.length) {
      picked = all.filter(function (a) { return a.image; }).slice(0, 3);
    }
    if (!picked.length) return;

    SC.slides = picked.map(function (a, i) {
      var el = document.createElement("div");
      el.className = "hero-slide" + (i === 0 ? " active" : "");
      el.setAttribute("aria-hidden", i === 0 ? "false" : "true");
      bgWrap.appendChild(el);
      return { article: a, bg: SHOWCASE_BG[a.slug] || a.image, el: el, bgSet: false };
    });
    scEnsureBg(0);
    /* Prefetch the next backdrop quietly so the first crossfade is clean */
    setTimeout(function () { if (SC.slides.length > 1) scEnsureBg(1); }, 900);

    var prog = document.getElementById("hero-progress");
    if (prog && SC.slides.length > 1) {
      prog.innerHTML = SC.slides.map(function (_, i) {
        return '<button class="hp-seg" type="button" data-i="' + i + '" ' +
          'aria-label="Show story ' + (i + 1) + '"><span class="hp-fill"></span></button>';
      }).join("");
      prog.addEventListener("click", function (e) {
        var b = e.target.closest ? e.target.closest(".hp-seg") : null;
        if (!b) return;
        scGo(parseInt(b.getAttribute("data-i"), 10));
        /* Restart the rotation clock after a manual jump */
        if (SC.timer) { clearInterval(SC.timer); SC.timer = null; scStart(); }
      });
    }

    scPaint(0);
    scStart();

    hero.addEventListener("mouseenter", function () { scPause(true); });
    hero.addEventListener("mouseleave", function () { scPause(false); });
    hero.addEventListener("focusin", function () { scPause(true); });
    hero.addEventListener("focusout", function () { scPause(false); });
    hero.addEventListener("touchstart", function () { scPause(true); }, { passive: true });
    hero.addEventListener("touchend", function () {
      setTimeout(function () { scPause(false); }, 2600);
    }, { passive: true });
  }

  /* ---------- Trending ticker ---------- */

  function renderTicker() {
    var track = document.getElementById("ticker-track");
    if (!track) return;
    var items = sortedArticles().map(function (a) {
      return '<a class="ticker-item" href="' + articleUrl(a) + '">' +
        esc(a.title) + '</a><span class="ticker-sep" aria-hidden="true">&#10022;</span>';
    }).join("");
    /* Two identical halves make the -50% marquee loop seamless */
    track.innerHTML = items + items;
  }

  /* ---------- Next-release countdown ---------- */

  var MONTH_IDX = { january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11 };

  function parseWindowDate(w) {
    var m = /(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/.exec(w || "");
    if (!m) return null;
    var mi = MONTH_IDX[m[2].toLowerCase()];
    if (mi === undefined) return null;
    return new Date(parseInt(m[3], 10), mi, parseInt(m[1], 10), 0, 0, 0, 0);
  }

  function nextRelease() {
    if (typeof RELEASE_DATES === "undefined") return null;
    var startToday = new Date();
    startToday.setHours(0, 0, 0, 0);
    var best = null;
    RELEASE_DATES.forEach(function (d) {
      var dt = parseWindowDate(d.window);
      if (dt && dt >= startToday && (!best || dt < best.date)) {
        best = { entry: d, date: dt };
      }
    });
    return best;
  }

  function renderCountdown() {
    var band = document.getElementById("countdown-band");
    if (!band) return;
    var target = nextRelease();
    if (!target) { band.hidden = true; return; }
    band.hidden = false;
    document.getElementById("cd-title").textContent = target.entry.title;
    document.getElementById("cd-meta").textContent =
      target.entry.platform + " · " + target.entry.window;
    var els = {
      d: document.getElementById("cd-d"), h: document.getElementById("cd-h"),
      m: document.getElementById("cd-m"), s: document.getElementById("cd-s")
    };
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function tick() {
      var diff = target.date - new Date();
      if (diff <= 0) {
        /* Release day (or just past): celebrate, stop the clock */
        els.d.textContent = "00"; els.h.textContent = "00";
        els.m.textContent = "00"; els.s.textContent = "00";
        document.getElementById("cd-label").textContent = "Out Now";
        clearInterval(iv);
        return;
      }
      var sec = Math.floor(diff / 1000);
      els.d.textContent = pad(Math.floor(sec / 86400));
      els.h.textContent = pad(Math.floor((sec % 86400) / 3600));
      els.m.textContent = pad(Math.floor((sec % 3600) / 60));
      els.s.textContent = pad(sec % 60);
    }
    var iv = setInterval(tick, 1000);
    tick();
  }

  /* ---------- All Videos: series filter ---------- */

  var VIDEO_SERIES_ORDER = ["All", "Top 10 & Recommendations", "Reviews",
    "Series Updates & Release Dates", "K-Drama & Netflix", "Nightly News", "Shorts"];

  function renderVideoFilters() {
    var wrap = document.getElementById("video-filters");
    var rail = document.getElementById("all-videos-row");
    if (!wrap || !rail || typeof VIDEOS === "undefined") return;
    var counts = {};
    VIDEOS.forEach(function (v) { counts[v.series] = (counts[v.series] || 0) + 1; });
    wrap.innerHTML = VIDEO_SERIES_ORDER.filter(function (s) {
      return s === "All" || counts[s];
    }).map(function (s, i) {
      var n = s === "All" ? VIDEOS.length : counts[s];
      return '<button class="vf-btn' + (i === 0 ? " active" : "") + '" type="button" ' +
        'data-filter="' + esc(s) + '">' + esc(s) +
        ' <span class="vf-n">' + n + '</span></button>';
    }).join("");
    wrap.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest(".vf-btn") : null;
      if (!b) return;
      Array.prototype.forEach.call(wrap.querySelectorAll(".vf-btn"), function (x) {
        x.classList.toggle("active", x === b);
      });
      var f = b.getAttribute("data-filter");
      Array.prototype.forEach.call(rail.children, function (card) {
        card.style.display =
          (f === "All" || card.getAttribute("data-series") === f) ? "" : "none";
      });
    });
  }

  /* ---------- Page renderers ---------- */

  function renderHome() {
    var all = sortedArticles();
    renderShowcase();
    renderTicker();
    renderCountdown();

    var videosEl = document.getElementById("videos-row");
    if (videosEl && typeof VIDEOS !== "undefined") {
      videosEl.innerHTML = VIDEOS.slice(0, 8).map(videoCardHTML).join("");
    }

    var allVideosEl = document.getElementById("all-videos-row");
    if (allVideosEl && typeof VIDEOS !== "undefined") {
      allVideosEl.innerHTML = VIDEOS.map(videoCardHTML).join("");
      renderVideoFilters();
    }

    fillRow("latest-row", all.filter(function (x) { return x.category === "News"; }).slice(0, 6));
    fillRow("reviews-row", all.filter(function (x) { return x.category === "Review"; }).slice(0, 6));
    fillRow("picks-row", all.filter(function (x) { return x.category === "Recommendation"; }).slice(0, 6));
    fillRow("celebrity-row",
      all.filter(function (x) { return x.category === "Celebrity News"; }).slice(0, 6),
      { portrait: true });
    renderDateStrip("dates-strip", 8);
  }

  function renderCategory(category, gridId) {
    fillGrid(gridId, sortedArticles().filter(function (x) { return x.category === category; }));
  }

  function renderArticle() {
    var main = document.getElementById("article-main");
    if (!main) return;
    var slug = new URLSearchParams(window.location.search).get("slug");
    var a = sortedArticles().filter(function (x) { return x.slug === slug; })[0];

    if (!a) {
      document.title = "Story not found — Trailupbox";
      main.innerHTML =
        '<p><a class="back-link" href="index.html">&larr; Back to home</a></p>' +
        '<h1 class="article-title">We could not find that story</h1>' +
        '<p class="lede">It may have moved. Try the latest stories on the home page.</p>';
      return;
    }

    document.title = a.title + " — Trailupbox";
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", a.excerpt);
    var ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg && a.image) ogImg.setAttribute("content", a.image);

    /* Portrait photos (celebrity press shots, poster art) get the
       blurred-backdrop + contain treatment so nothing is ever cut;
       landscape images keep the cinematic 16/9 cover hero. */
    var portraitHero = a.category === "Celebrity News" || isPortraitAsset(a.image);
    var heroImg = a.image
      ? '<figure class="article-hero' + (portraitHero ? " is-portrait" : "") + '">' +
        (portraitHero
          ? '<span class="hero-blur" style="background-image:url(\'' + esc(a.image) + '\')"></span>'
          : "") +
        '<img src="' + esc(a.image) + '" alt="' + esc(a.title) + '" ' +
        'data-full="' + esc(a.image) + '" data-caption="' + esc(a.title) + '" ' +
        'onerror="this.parentNode.remove()"></figure>'
      : "";

    var video = a.youtubeId
      ? '<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/' +
        esc(a.youtubeId) + '" title="' + esc(a.title) + '" loading="lazy" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
        'allowfullscreen></iframe></div>'
      : "";

    var tags = (a.tags || []).map(function (t) {
      return '<span class="tag">' + esc(t) + '</span>';
    }).join("");

    var body = (a.body || []).map(function (p) {
      if (p.indexOf("## ") === 0) return "<h2>" + md(p.slice(3)) + "</h2>";
      return "<p>" + md(p) + "</p>";
    }).join("");

    main.innerHTML =
      '<p><a class="back-link" href="index.html">&larr; Back to home</a></p>' +
      '<div class="article-meta">' +
        '<span class="badge">' + esc(a.category) + '</span>' +
        '<time datetime="' + esc(a.date) + '">' + esc(fmtDate(a.date)) + '</time>' +
        '<span>&middot; Trailupbox</span>' +
      '</div>' +
      '<h1 class="article-title">' + esc(a.title) + '</h1>' +
      '<p class="lede">' + esc(a.excerpt) + '</p>' +
      heroImg +
      video +
      '<div class="article-body">' + body + '</div>' +
      (tags ? '<div class="tag-row">' + tags + '</div>' : "");

    /* More stories: same category first, then the latest others */
    var more = sortedArticles().filter(function (x) { return x.slug !== a.slug; });
    more.sort(function (x, y) {
      var xs = x.category === a.category ? 0 : 1;
      var ys = y.category === a.category ? 0 : 1;
      return xs - ys || byDateDesc(x, y);
    });
    fillRow("more-row", more.slice(0, 6));
  }

  /* ---------- Lightbox (fullscreen image viewer) ----------
     Interaction rule (predictable, everywhere on the site):
       · IMAGE click  → lightbox (the photo, full and uncropped)
       · TITLE / text / "Read more" click → the article or video page
     The gallery is every [data-full] element on the current page in
     DOM order (home hero first, then rows; article hero, then More
     Stories; grids in reading order), so prev/next walks the page. */
  var LB = { items: [], idx: 0, open: false, lastFocus: null };

  function lbCollect() {
    LB.items = Array.prototype.map.call(
      document.querySelectorAll("[data-full]"),
      function (el) {
        return {
          src: el.getAttribute("data-full"),
          fallback: el.getAttribute("data-fallback"),
          caption: el.getAttribute("data-caption") ||
            (el.tagName === "IMG" ? el.getAttribute("alt") : "") || ""
        };
      });
  }

  function lbShow(i) {
    var n = LB.items.length;
    if (!n) return;
    LB.idx = ((i % n) + n) % n;
    var item = LB.items[LB.idx];
    var img = document.getElementById("lb-img");
    img.onerror = function () {
      if (item.fallback && img.src !== item.fallback) img.src = item.fallback;
    };
    /* Restart the entrance animation on every image change */
    img.style.animation = "none";
    void img.offsetWidth;
    img.style.animation = "";
    img.src = item.src;
    img.alt = item.caption;
    document.getElementById("lb-caption").textContent = item.caption;
    document.getElementById("lb-count").textContent = (LB.idx + 1) + " / " + n;
    var multi = n > 1;
    document.getElementById("lb-prev").disabled = !multi;
    document.getElementById("lb-next").disabled = !multi;
  }

  function lbOpen(el) {
    var box = document.getElementById("lightbox");
    if (!box) return;
    lbCollect();
    var els = document.querySelectorAll("[data-full]");
    var idx = Array.prototype.indexOf.call(els, el);
    LB.lastFocus = document.activeElement;
    LB.open = true;
    box.hidden = false;
    /* Next frame, so the fade-in transition actually runs */
    requestAnimationFrame(function () { box.classList.add("lb-show"); });
    document.body.classList.add("lb-open");
    lbShow(idx < 0 ? 0 : idx);
    document.getElementById("lb-close").focus();
  }

  function lbCloseFn() {
    var box = document.getElementById("lightbox");
    if (!box || !LB.open) return;
    LB.open = false;
    box.classList.remove("lb-show");
    document.body.classList.remove("lb-open");
    setTimeout(function () { box.hidden = true; }, 300);
    if (LB.lastFocus && LB.lastFocus.focus) LB.lastFocus.focus();
  }

  function initLightbox() {
    var box = document.getElementById("lightbox");
    if (!box) return;

    /* One delegated listener for every image on every page. Clicks on
       a thumb's shade/play-badge count as image clicks; clicks on a
       card title never reach this branch, so navigation is intact. */
    document.addEventListener("click", function (e) {
      if (box.contains(e.target)) return; /* handled by lb controls */
      var im = null;
      if (e.target.closest) {
        im = e.target.closest("img[data-full]");
        if (!im) {
          var zone = e.target.closest(".card-thumb, .article-hero");
          if (zone) im = zone.querySelector("img[data-full]");
        }
      }
      if (im) { e.preventDefault(); lbOpen(im); return; }
      var hero = document.getElementById("hero");
      if (hero && hero.hasAttribute("data-full") && hero.contains(e.target) &&
          !e.target.closest("a, button")) {
        lbOpen(hero);
      }
    });

    document.getElementById("lb-close").addEventListener("click", lbCloseFn);
    document.getElementById("lb-prev").addEventListener("click", function () { lbShow(LB.idx - 1); });
    document.getElementById("lb-next").addEventListener("click", function () { lbShow(LB.idx + 1); });
    /* Backdrop tap closes; taps on the image itself do not */
    document.getElementById("lb-stage").addEventListener("click", function (e) {
      if (e.target === this) lbCloseFn();
    });
    box.addEventListener("click", function (e) { if (e.target === box) lbCloseFn(); });

    document.addEventListener("keydown", function (e) {
      if (!LB.open) return;
      if (e.key === "Escape") lbCloseFn();
      else if (e.key === "ArrowLeft") lbShow(LB.idx - 1);
      else if (e.key === "ArrowRight") lbShow(LB.idx + 1);
    });

    /* Touch swipe: horizontal travel past ~48px turns the page */
    var tx = null;
    box.addEventListener("touchstart", function (e) {
      tx = e.changedTouches[0].clientX;
    }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (tx === null) return;
      var dx = e.changedTouches[0].clientX - tx;
      tx = null;
      if (Math.abs(dx) > 48 && LB.items.length > 1) lbShow(LB.idx + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    if (page === "home") renderHome();
    else if (page === "news") renderCategory("News", "news-grid");
    else if (page === "reviews") renderCategory("Review", "reviews-grid");
    else if (page === "recommendations") renderCategory("Recommendation", "picks-grid");
    else if (page === "celebrity") renderCategory("Celebrity News", "celebrity-grid");
    else if (page === "dates") renderDateTable("dates-table");
    else if (page === "article") renderArticle();

    initLightbox();

    /* Gentle image fade-in: every image starts transparent (CSS)
       and settles in as it loads. Already-cached images light up
       immediately; the lightbox image has its own entrance. */
    Array.prototype.forEach.call(document.querySelectorAll("img"), function (im) {
      if (im.id === "lb-img") return;
      if (im.complete && im.naturalWidth) im.classList.add("ld");
      else im.addEventListener("load", function () { im.classList.add("ld"); });
    });

    /* Tasteful reveal-on-scroll: sections fade/rise once as they
       enter the viewport, and cards follow with a small stagger.
       Progressive — content is fully visible without
       IntersectionObserver, and CSS disables the motion entirely
       under prefers-reduced-motion. */
    var rvEls = document.querySelectorAll(".row-section, .section, .page-head, .cta-band");
    var cardEls = document.querySelectorAll(".card, .date-chip");
    if ("IntersectionObserver" in window && (rvEls.length || cardEls.length)) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            io.unobserve(e.target);
            /* Clear the stagger delay so hover stays responsive */
            var el = e.target;
            setTimeout(function () { el.style.transitionDelay = ""; }, 1100);
          }
        });
      }, { threshold: 0.06 });
      rvEls.forEach(function (el) {
        el.classList.add("rv");
        io.observe(el);
      });
      cardEls.forEach(function (el, i) {
        el.classList.add("rv-card");
        el.style.transitionDelay = ((i % 6) * 55) + "ms";
        io.observe(el);
      });
    }
  });
})();
