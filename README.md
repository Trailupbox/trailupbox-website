# Trailupbox — Website

The official static website for **Trailupbox**, the global English movie & web-series
news and recommendation brand (YouTube: [@Trailupbox](https://www.youtube.com/@Trailupbox)).

Pure static HTML/CSS/JS — **no build step, no frameworks, no paid services**.
Deploy the folder as-is to Vercel, GitHub Pages, or any static host.

## Structure

```
website/
├── index.html           Home — full-bleed hero (featured story), Latest Videos row,
│                        Latest Updates, Top Reviews, Recommendations,
│                        Release Dates strip, Celebrity News row, YouTube CTA
├── updates.html         News — all "News" category articles
├── reviews.html         Reviews — all "Review" category articles (spoiler-free)
├── recommendations.html Recommendations — all "Recommendation" articles
├── release-dates.html   Release calendar table (from RELEASE_DATES data)
├── celebrity-news.html  Celebrity News — all "Celebrity News" articles
├── article.html         Single article page — renders via ?slug=<slug>,
│                        hero image + embedded YouTube video + More Stories row
├── styles.css           All styling (Netflix-grade dark cinematic theme)
├── app.js               All rendering logic (hero, rows, grids, article page)
├── assets/              Local images used by articles
└── data/
    └── articles.js      ALL content lives here — ARTICLES, VIDEOS, RELEASE_DATES
```

Header/nav/footer markup is duplicated in each HTML file on purpose: it keeps the
site bulletproof on any static host with zero tooling. If you change the nav,
update it in every `.html` file.

## How to add an article

1. Open `data/articles.js`.
2. Add a new object at the **top** of the `ARTICLES` array:

```js
{
  slug: "my-new-story",                  // unique, lowercase-with-hyphens
  title: "My New Story Headline",
  category: "News",                      // News | Review | Recommendation | Celebrity News
  date: "2026-10-30",                    // YYYY-MM-DD
  excerpt: "One or two teaser sentences for cards and the article lede.",
  image: "assets/my-image.jpg",          // or a full URL; cards degrade gracefully
  youtubeId: "",                         // optional — embeds the video on the article page
  tags: ["Tag One", "Tag Two"],
  body: [
    "First paragraph.",
    "## A Section Heading",
    "More text with **bold**, *italic* and [links](https://youtu.be/xxxx)."
  ]
}
```

3. Set `featured: true` on exactly one article to make it the home-page hero.
4. To add a video card on the home page, add an entry to `VIDEOS`
   (title, label, YouTube `id`, full watch `url`).
5. Release dates live in `RELEASE_DATES` in the same file.

## Design

- Palette: bg `#060810`, panels `#0e1322`, hairlines `#1e2a45`,
  text `#eef2fa`, accent neon blue `#22c8ff`. Font: Inter (Google Fonts).
- Sticky glass top nav; full-bleed hero with gradient overlays;
  horizontal poster rows with hover zoom (scroll-snap on touch);
  portrait cards for celebrity stories; mobile-first throughout.
