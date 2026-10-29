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
    var cls = "card" + (portrait ? " card-portrait" : "");
    var contain = !portrait && isPortraitAsset(a.image);
    var img = "";
    if (a.image) {
      img =
        (contain
          ? '<span class="thumb-blur" style="background-image:url(\'' + esc(a.image) + '\')"></span>'
          : "") +
        '<img src="' + esc(a.image) + '" alt="' + esc(a.title) + '" loading="lazy" ' +
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
    return '' +
      '<article class="card card-video">' +
        '<a class="card-thumb" href="' + esc(v.url) + '" target="_blank" rel="noopener" ' +
          'aria-label="Watch on YouTube: ' + esc(v.title) + '">' +
          '<img src="' + ytThumb(v.id) + '" alt="' + esc(v.title) + '" loading="lazy" ' +
            'onerror="this.remove()">' +
          '<span class="play-badge" aria-hidden="true">&#9654;</span>' +
          '<span class="card-shade"></span>' +
        '</a>' +
        '<div class="card-body">' +
          '<div class="card-meta"><span class="badge badge-video">' + esc(v.label) + '</span>' +
          '<span class="yt-tag">YouTube</span></div>' +
          '<h3><a href="' + esc(v.url) + '" target="_blank" rel="noopener">' + esc(v.title) + '</a></h3>' +
        '</div>' +
      '</article>';
  }

  function fillRow(id, list, opts) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.length
      ? list.map(function (a) { return cardHTML(a, opts); }).join("")
      : '<div class="empty-note">New stories are on the way — check back soon.</div>';
  }

  function fillGrid(id, list) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.length
      ? list.map(function (a) { return cardHTML(a); }).join("")
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

  /* ---------- Hero ---------- */

  function renderHero() {
    var hero = document.getElementById("hero");
    if (!hero) return;
    var all = sortedArticles();
    var a = all.filter(function (x) { return x.featured; })[0] || all[0];
    if (!a) return;

    var bg = document.getElementById("hero-bg");
    if (bg && a.image) {
      bg.style.backgroundImage = "url('" + a.image + "')";
    }
    document.getElementById("hero-chip").textContent = a.category;
    document.getElementById("hero-title").textContent = a.title;
    document.getElementById("hero-teaser").textContent = a.excerpt;
    document.getElementById("hero-date").textContent = fmtDate(a.date);

    var read = document.getElementById("hero-read");
    if (read) read.setAttribute("href", articleUrl(a));

    var watch = document.getElementById("hero-watch");
    if (watch) {
      if (a.youtubeId) {
        watch.setAttribute("href", ytWatch(a.youtubeId));
      } else {
        watch.style.display = "none";
      }
    }
  }

  /* ---------- Page renderers ---------- */

  function renderHome() {
    var all = sortedArticles();
    renderHero();

    var videosEl = document.getElementById("videos-row");
    if (videosEl && typeof VIDEOS !== "undefined") {
      videosEl.innerHTML = VIDEOS.map(videoCardHTML).join("");
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

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    if (page === "home") renderHome();
    else if (page === "news") renderCategory("News", "news-grid");
    else if (page === "reviews") renderCategory("Review", "reviews-grid");
    else if (page === "recommendations") renderCategory("Recommendation", "picks-grid");
    else if (page === "celebrity") renderCategory("Celebrity News", "celebrity-grid");
    else if (page === "dates") renderDateTable("dates-table");
    else if (page === "article") renderArticle();

    /* Tasteful reveal-on-scroll: sections fade/rise once as they
       enter the viewport. Progressive — content is fully visible
       without IntersectionObserver, and CSS disables the motion
       entirely under prefers-reduced-motion. */
    var rvEls = document.querySelectorAll(".row-section, .section, .page-head, .cta-band");
    if ("IntersectionObserver" in window && rvEls.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.06 });
      rvEls.forEach(function (el) {
        el.classList.add("rv");
        io.observe(el);
      });
    }
  });
})();
