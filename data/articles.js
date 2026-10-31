/* ============================================================
   Trailupbox — site data
   ------------------------------------------------------------
   This ONE file drives every card, row and article page.
   Pure static: no build step, no framework.

   To publish a new article:
   1. Add a new object at the TOP of the ARTICLES array.
   2. "slug" must be unique (lowercase, hyphens).
   3. "category" is one of: "News" | "Review" |
      "Recommendation" | "Celebrity News"
   4. "image" — path under assets/ or a URL. Cards fall back to
      a styled gradient if an image is missing.
   5. "youtubeId" — optional; the article page embeds that
      video near the top and the hero gets a Watch button.
   6. "body" — array of strings. A string starting with "## "
      becomes a section heading. Light markdown works inside
      paragraphs: **bold**, *italic*, [link text](https://...).
   7. "featured: true" on ONE article makes it the home hero.

   VIDEOS drives the "Latest Videos" row (links to YouTube).
   RELEASE_DATES drives the release-dates page + home strip.
   ============================================================ */

const ARTICLES = [
  {
    slug: "top-10-horror-movies-netflix-2026",
    title: "Top 10 Horror Movies on Netflix (2026) — The Halloween Countdown",
    category: "Recommendation",
    date: "2026-11-01",
    excerpt:
      "Ten horror movies on Netflix worth your Halloween night — from a Taiwanese curse shot like a news broadcast to the twist ending nobody saw coming. Counted down, with the scores, the scares and the one everyone ignored.",
    image: "assets/top-10-horror-netflix.jpg",
    youtubeId: "ccM4G6CMMrQ",
    featured: true,
    tags: ["Netflix", "Horror", "Top 10", "Halloween", "Recommendations"],
    faq: [
      { q: "What is the best horror movie on Netflix right now?",
        a: "The Sixth Sense tops our countdown — a 1999 classic with six Oscar nominations and an 8.2 IMDb score that still out-scares most modern releases. For pure fear, Taiwan's Incantation and Indonesia's Grave Torture are the scariest picks on the list." },
      { q: "Which Netflix horror movies are actually scary?",
        a: "Incantation (2022) is found-footage dread built around a real curse ritual, Grave Torture (2024) from Joko Anwar is slow-burn Indonesian terror, and May the Devil Take You (2018) is relentless demonic horror from Timo Tjahjanto. All three are Netflix originals available worldwide." },
      { q: "Are all of these movies available on Netflix in every country?",
        a: "The Netflix originals — The Babysitter, Grave Torture, May the Devil Take You, Blood Red Sky, The Call, Apostle and Incantation — stream worldwide. The licensed titles (Halloween Kills, World War Z, The Sixth Sense) rotate by region, so check your local catalogue." },
      { q: "What horror movie should I watch first from this list?",
        a: "Want a twist: The Sixth Sense. Want scale: World War Z. Want a hidden gem: South Korea's The Call, a time-bending thriller rated 7.1 on IMDb that most viewers scrolled straight past." }
    ],
    body: [
      "Halloween night, the Netflix catalogue, and one question: which of these is actually worth your fear? We counted down the ten best horror movies on Netflix right now — the ignored, the underrated and the undeniable — and ranked them by the only metric that matters: how long they stay with you after the credits.",
      "## The Countdown",
      "**#10 — The Babysitter (2017).** Samara Weaving leads a babysitter-satanic-cult horror-comedy that knows exactly how much fun it is having. IMDb 6.4 — and far better than its reputation.",
      "**#9 — Grave Torture (2024).** Joko Anwar, the director of *Impetigore*, turns a childhood trauma into a grave-side nightmare. Indonesian horror at its most patient and most cruel.",
      "**#8 — May the Devil Take You (2018).** Timo Tjahjanto before *The Night Comes for Us* fame went full *Evil Dead* — a dying father's house, a family inheritance, and demons that do not negotiate. IMDb 5.9 does not prepare you.",
      "**#7 — Halloween Kills (2021).** Michael Myers survives the fire and Haddonfield finally fights back. The middle chapter of the new trilogy — licensed, so availability varies by region.",
      "**#6 — Blood Red Sky (2021).** A mother, her son, a hijacked plane — and a secret that turns a hostage thriller into a vampire siege at 38,000 feet. Germany's genre gift to Netflix. IMDb 6.1.",
      "**#5 — The Call (2020).** Two women, one house, twenty years apart, connected by a phone. South Korea's time-bending thriller is the smartest film on this list. IMDb 7.1.",
      "**#4 — Apostle (2018).** *The Raid* director Gareth Evans sends Dan Stevens into a 1905 religious cult to rescue his sister. Folk horror with a forge, a goddess and unforgettable machinery. IMDb 6.3.",
      "**#3 — Incantation (2022).** Taiwan's highest-grossing horror film ever — a mother, a cursed ritual, and found footage that asks *you* to chant along. That is not a gimmick. That is the trap. IMDb 6.2.",
      "**#2 — World War Z (2013).** Brad Pitt races a global outbreak in the biggest zombie film ever made — $540 million at the box office, and the horde scenes still have no equal. IMDb 7.0. Licensed title; it rotates by region.",
      "**#1 — The Sixth Sense (1999).** Six Oscar nominations. An 8.2 on IMDb. A child who sees the dead, a psychologist who cannot reach his own wife, and an ending that rewired horror forever. Twenty-seven years on, nothing on this list touches it.",
      "Watch the full countdown — every trailer moment, every score — in our Halloween Special video above, and tell us which one we ranked wrong."
    ]
  },
  {
    slug: "daily-wrap-ep-6-documentary-beats-dc",
    title: "Did a Documentary Just Beat a DC Movie? Dead-End Job Reviews Are In + Mario Closes November — The Daily Wrap Ep 6",
    category: "News",
    date: "2026-11-01",
    excerpt:
      "Dead-End Job's first reviews land with one shared flaw, a three-hour Elizabeth Holmes documentary takes Friday from DC's Clayface, and the six Netflix November dates that matter — all in Episode 6 of The Daily Wrap.",
    image: "assets/daily-wrap-ep6.jpg",
    youtubeId: "7wBQ-bC7J0s",
    tags: ["Clayface", "Dead-End Job", "Netflix", "Box Office", "The Daily Wrap"],
    faq: [
      { q: "Did the Elizabeth Holmes documentary beat Clayface at the box office?",
        a: "On Friday, yes — You Can See Everything grossed an estimated $3.2M against Clayface's $3.1M, from roughly 800 fewer screens. For the full weekend, Deadline forecasts the documentary wins its second weekend at about $19.5M, while Clayface is forecast between $9.6M (Deadline) and $12.4M (Box Office Theory). These are forecasts and Friday estimates — the official numbers land Monday." },
      { q: "Is Dead-End Job worth watching? What did reviewers say?",
        a: "The first reviews are positive with one shared complaint: Heaven of Horror scored it 4/5, But Why Tho? 7/10, Midgard Times 6/10, and Decider's verdict was STREAM IT. Every review names the same flaw — inconsistent CGI." },
      { q: "When does Black Doves Season 2 come to Netflix?",
        a: "Black Doves Season 2 arrives on Netflix on 5 November — the first of six November dates that matter, closing with Super Mario Galaxy on 30 November." },
      { q: "How much has Clayface made at the box office?",
        a: "Clayface opened to $24.0M and finished its first week at $33.6M domestic, against a production budget of $44M — which is why its second-weekend drop is the number everyone is watching." }
    ],
    body: [
      "Episode 6 of The Daily Wrap leads with the reviews everyone waited for, and closes with the strangest box-office fight of the year. Here is the whole day, wrapped fast.",
      "## Dead-End Job — The First Reviews Are In",
      "Netflix's Korean job-hunt thriller *Dead-End Job* — the one where the pay is fifty times normal — has its first verdicts. **Heaven of Horror: 4/5. But Why Tho?: 7/10. Midgard Times: 6/10. Decider: STREAM IT.** Four outlets, four recommendations — and one flaw named by all of them: CGI that swings between excellent and unfinished. The mystery carries it anyway.",
      "## The Trailers: Cassel's Quasimodo and Erivo's One-Woman Storm",
      "Vincent Cassel becomes Quasimodo in *The Hunchback, Soul of Paris* (Netflix, 27 November), and Cynthia Erivo owns the stage in *Prima Facie*, reaching UK and Irish cinemas on 13 November.",
      "## Netflix November — The Six Dates That Matter",
      "**Black Doves Season 2 — 5 November. Possible Love — 6 November. Heartland — 13 November. Mosquito Bowl — 25 November. The Hunting Wives Season 2 — 26 November. Super Mario Galaxy — 30 November.** Our full November preview video breaks down every one of them.",
      "## The Main Event: A Documentary Is Beating a DC Movie",
      "Clayface opened to $24.0M and closed its first week at $33.6M domestic on a $44M budget. Then came Friday: the Elizabeth Holmes documentary *You Can See Everything* — three hours long, playing on about 800 fewer screens — took the day, $3.2M to $3.1M. Deadline forecasts the documentary wins the Halloween weekend outright at roughly $19.5M in its second weekend, while Clayface falls somewhere between $9.6M and $12.4M depending on whose model you trust. Forecasts are not results — the real numbers land Monday, and tomorrow's Wrap opens with the answer.",
      "Plus, in quick-fire: our spoiler-free *Apocalypse Z: New World* verdict, *Dexter: Resurrection* Season 2's streaming move, day two of the Patrick Stewart tributes, and the Bond watch — day nine of the wait. Watch the full episode above."
    ]
  },
  {
    slug: "apocalypse-z-new-world-review",
    title: "Apocalypse Z: New World Review — Bigger Hordes, But Is It Better Than Part 1?",
    category: "Review",
    date: "2026-11-01",
    excerpt:
      "The sequel to Prime Video's record-breaking zombie hit is bigger in every way — bigger hordes, bigger army, bigger budget. Our spoiler-free verdict on whether bigger means better.",
    image: "assets/apocalypse-z-new-world-review.jpg",
    youtubeId: "VoP6E67g5Pg",
    tags: ["Apocalypse Z", "Prime Video", "Review", "Zombie", "Spoiler-Free"],
    faq: [
      { q: "Is Apocalypse Z: New World better than Part 1?",
        a: "It is bigger — but not better. The scale, the hordes and the military hardware all level up, yet the sequel trades the first film's pounding heartbeat for spectacle. Our verdict: bigger army, smaller heartbeat." },
      { q: "Where can I watch Apocalypse Z: New World?",
        a: "Apocalypse Z: New World is streaming on Prime Video worldwide — it released globally on 30 October 2026." },
      { q: "What did the critics think of Apocalypse Z: New World?",
        a: "Critics are split right down the middle: Cinemanía gave it 3.5/5, the New York Times called it 'efficient, but familiar', while Heaven of Horror and Kwaves and Beyond both scored it 2/5." },
      { q: "Was Apocalypse Z Part 1 a hit?",
        a: "A phenomenon. Part 1 became Prime Video's most-watched international Original movie ever at the time of its release — a record later surpassed only by Your Fault — and reached number one in 89 countries according to reports." }
    ],
    body: [
      "Part 1 of *Apocalypse Z* came from nowhere and became Prime Video's most-watched international Original movie ever at the time — a Spanish zombie film that beat the world. *New World*, directed by Carles Torrens with Carlos Alcaide returning, arrives with everything a sequel is supposed to have: more infected, more soldiers, more money on screen. The question is what it lost on the way.",
      "## What the World Is Saying",
      "The audience split mirrors the film itself. Fans of scale are fed — the horde sequences are genuinely enormous, staged with a confidence the first film could not afford. But a loud share of returning viewers say the same thing in different words: the dread is thinner, the silence is gone, and the man-and-his-cat intimacy that made Part 1 hurt has been replaced by hardware.",
      "## What the Critics Say",
      "**Cinemanía: 3.5/5** — the warmest of the major notices. **The New York Times: 'efficient, but familiar'** — praise and warning in four words. **Heaven of Horror: 2/5.** **Kwaves and Beyond: 2/5.** No Rotten Tomatoes consensus exists yet — anyone quoting you one is inventing it.",
      "## Our Take",
      "New World is a well-built machine. The set pieces work, the escalation is real, and when the horde moves, it moves like weather. But Part 1 understood something this film keeps forgetting: a zombie movie is not about the size of the army outside the door — it is about the sound of one man's breathing behind it. The sequel keeps choosing the army.",
      "## The Verdict",
      "**Bigger army. Smaller heartbeat.** All muscle, slightly less soul. If you loved Part 1 for its scale, New World delivers more of it. If you loved it for its pulse, manage your expectations — then watch it anyway, because the highs are still higher than most of the genre manages. Full spoiler-free video review above."
    ]
  },
  {
    slug: "wednesday-season-3-filming-wrapped-release-date",
    title: "Wednesday Season 3 Is Done Filming — So Where Is the Release Date?",
    category: "News",
    date: "2026-10-31",
    excerpt:
      "Wednesday Season 3 wrapped filming on 30 September 2026. The cameras are off, the cast list is loaded — Eva Green, Winona Ryder — and Netflix has announced no date, no month, no trailer. Everything confirmed, and the one question nobody can answer.",
    image: "assets/wednesday-s3-paris.jpg",
    youtubeId: "kea0h3eGreo",
    tags: ["Wednesday", "Netflix", "Season 3", "Release Date", "Jenna Ortega"],
    faq: [
      { q: "Has Wednesday Season 3 finished filming?",
        a: "Yes. Season 3 filmed at Ashford Studios in Ireland from 16 February 2026 and wrapped on 30 September 2026 — including an April 2026 shoot in Paris. Production is complete; the season is in post-production." },
      { q: "When will Wednesday Season 3 be released?",
        a: "Netflix has announced no date, no month and no episode count, and released no teaser or trailer. Deadline reports a 2027 release, and The Hollywood Reporter calls fall 2027 'very plausible' — both are informed estimates, not announcements." },
      { q: "Who is joining the cast of Wednesday Season 3?",
        a: "Eva Green plays Aunt Ophelia and Winona Ryder plays Tabitha. Also confirmed: Chris Sarandon as Balthazar, Noah Taylor as Cyrus, Oscar Morgan as Atticus and Kennedy Moyer as Daisy. Lena Headey, Andrew McCarthy and James Lance are in the season with their roles kept sealed." },
      { q: "Why was Wednesday filming in Paris?",
        a: "Nobody knows — and Netflix has explained nothing. The official first look shows Wednesday on a motorcycle with the Eiffel Tower behind her and Thing along for the ride, captioned 'From Paris, with dread'. It is the season's biggest unanswered question." }
    ],
    body: [
      "It is the strangest silence in streaming. *Wednesday* is Netflix's most-watched English-language series ever — Season 2's first four episodes pulled 50 million views in five days and the season finished as the tenth most-watched in Netflix history. Season 3 was renewed in July 2025, filmed from February, and **wrapped on 30 September 2026**. The season exists. It is finished shooting. And Netflix will not tell anyone when it comes out.",
      "## The Paris Mystery",
      "In April 2026 the production moved to Paris, and Netflix released the season's only official image: Wednesday on a motorcycle, the Eiffel Tower behind her, Thing riding along, captioned 'From Paris, with dread.' Months later, nobody — not Netflix, not the cast, not a single trade — has explained what Wednesday Addams is doing in Paris. It is the first look, the marketing hook, and a complete mystery.",
      "## The New Faces",
      "The casting, at least, is loud. **Eva Green is Aunt Ophelia** — the sister whose shadow hangs over the entire Addams family story. **Winona Ryder plays Tabitha**, reuniting with Tim Burton's world in front of the camera. Chris Sarandon (Balthazar), Noah Taylor (Cyrus), Oscar Morgan (Atticus) and Kennedy Moyer (Daisy) are confirmed, while Lena Headey, Andrew McCarthy and James Lance have roles Netflix is keeping sealed. The season's theme: senior year at Nevermore, and family secrets — the two things Wednesday handles worst.",
      "## So Where Is the Release Date?",
      "There isn't one. No date, no month, no episode count, no teaser, no trailer — for a finished season of the biggest English-language show Netflix has ever made. Deadline reports 2027. The Hollywood Reporter calls fall 2027 'very plausible', which is an estimate wearing a suit. A franchise spinoff exists only as trade-reported discussions. What is certain: the wait is now a post-production wait, and the moment Netflix breaks the silence, it becomes the biggest TV story of that week. Our full update video above has every confirmed detail — and nothing that isn't."
    ]
  },
  {
    slug: "patrick-stewart-tribute-final-performance",
    title: "Sir Patrick Stewart (1940–2026): Farewell to Captain Picard — and One Final Performance Still to Come",
    category: "News",
    date: "2026-10-30",
    excerpt:
      "Sir Patrick Stewart has died at 86. The world says goodbye to Captain Picard and Professor X — but his farewell performance, already filmed for Avengers: Doomsday, is still to come this December.",
    image: "assets/patrick-stewart.jpg",
    credit: "Getty Images",
    tags: ["Patrick Stewart", "Star Trek", "X-Men", "Avengers Doomsday", "Tribute"],
    faq: [
      { q: "When did Patrick Stewart die?",
        a: "Sir Patrick Stewart died on Wednesday, 28 October 2026, at his home in Los Angeles, aged 86. His death was announced the following day by his family." },
      { q: "What was Patrick Stewart's final performance?",
        a: "His farewell performance as Professor X in Avengers: Doomsday is already filmed and still to come — the film arrives in theatres on 18 December 2026. As Ian McKellen put it: his farewell performance is yet to be seen." },
      { q: "What roles was Patrick Stewart best known for?",
        a: "Captain Jean-Luc Picard in Star Trek: The Next Generation and Professor Charles Xavier in the X-Men films — two roles that defined him for generations of fans." }
    ],
    body: [
      "Sir Patrick Stewart, the beloved Captain Jean-Luc Picard of *Star Trek* and Professor Charles Xavier of the *X-Men*, died on Wednesday at his home in Los Angeles, aged 86. The news was announced on Thursday, and within hours the tributes told the story of a career — and a man — who meant an enormous amount to an enormous number of people.",
      "For seven seasons of *Star Trek: The Next Generation* and beyond, Stewart's Picard was the captain who led with intellect and conscience. Then, in 2000, he became Professor X, the calm centre of the X-Men films, and held that role across two decades of superhero cinema. Few actors get one defining role. He had two, and he honoured both.",
      "## The Tributes — and the Farewell Still to Come",
      "Ian McKellen led the tributes, with William Shatner, Hugh Jackman and Marvel Studios among the many who paid their respects. McKellen's words carried one extraordinary detail: 'His farewell performance in Avengers: Doomsday is yet to be seen.' Stewart's final turn as Professor X was filmed before his death, and the film arrives in theatres on December 18 — one last performance that audiences still get to experience for the first time.",
      "The family statement shared that Stewart's final journey involved Alzheimer's disease and Lewy body dementia, and that he was in the care of his wife, Sunny Ozell. He is survived by Sunny and his children, Daniel and Sophie. Rest in peace, Captain — and thank you. We will see you once more in December.",
      "*(Photos: Getty Images)*"
    ]
  },
  {
    slug: "avatar-season-3-already-filmed-2027",
    title: "Avatar Season 3 Is Already Filmed — So Why Is Netflix Hiding It Until 2027?",
    category: "News",
    date: "2026-10-30",
    excerpt:
      "The final season of Netflix's live-action Avatar wrapped filming in November 2025 and has been finished for almost a year. Netflix has shown exactly one photo, released no trailer, and will only say '2027'. Here is everything actually confirmed.",
    image: "assets/avatar-ozai-first-look.png",
    youtubeId: "WnfAWzFu4SM",
    tags: ["Avatar The Last Airbender", "Netflix", "Season 3", "Release Date"],
    faq: [
      { q: "When does Avatar Season 3 come out?",
        a: "Netflix has confirmed only the year: 2027. The streamer announced the window on 3 September 2026 — no month, no exact date and no trailer yet. A summer 2027 slot has been reported by scooper outlets, but that is reported, not announced." },
      { q: "Has Avatar Season 3 finished filming?",
        a: "Yes. Seasons 2 and 3 were filmed back-to-back, and Season 3 wrapped in November 2025 — the final season has been finished for almost a year while Netflix holds it back." },
      { q: "Is Avatar Season 3 the final season?",
        a: "Yes. Netflix renewed the show for Seasons 2 and 3 together in March 2024, and Season 3 was always planned as the third and final season, completing the story of the animated series' three Books." },
      { q: "Is there a trailer for Avatar Season 3?",
        a: "No. No Season 3 trailer or teaser exists yet. The only Season 3 visual Netflix has released is a single first-look photo of Daniel Dae Kim as Fire Lord Ozai." }
    ],
    body: [
      "Here is the strangest release story in streaming right now. The final season of Netflix's live-action *Avatar: The Last Airbender* is not in production — it finished filming in **November 2025**, almost a year ago. Netflix is holding it until 2027, having shown fans exactly one photograph and no trailer at all.",
      "## What Is Actually Confirmed",
      "Start with what is fact. Netflix renewed *Avatar* for Seasons 2 and 3 together on 6 March 2024, two weeks after Season 1 premiered, and Season 3 was always planned as the **final season**, completing the adaptation of the animated series' three Books. The two seasons were shot back-to-back, and Season 3 wrapped in November 2025, with the cast marking the moment in a wrap photo shared by Netflix.",
      "Season 2 premiered on 25 June 2026, all seven episodes at once, introduced Toph, and ended on the animated series' most famous gut-punch — Azula striking Aang down with lightning in the Avatar State, with Katara saving him using the Spirit Oasis water. Season 3 picks up from exactly there.",
      "## The 2027 Window — and the One Photo",
      "On 3 September 2026, Netflix finally spoke: the final season arrives in **2027**. No month. No date. No trailer. The announcement came with a single first-look still — Daniel Dae Kim as Fire Lord Ozai, captioned 'It's time to take on the Fire Nation' — still the only official Season 3 visual in existence. Scooper outlets report a summer 2027 target, in line with Season 2's late-June slot, but Netflix has announced nothing more specific. Anyone giving you an exact day is guessing.",
      "Why the hold? Season 2's opening was softer than Season 1's in the reported Top 10 figures, and spacing a finished final season into a clear 2027 window is what a streamer does with a franchise it still values. That is analysis, not a Netflix statement.",
      "## What Season 3 Brings",
      "The final season adapts Book Three: Fire — the Gaang goes deeper into the Fire Nation, Aang must master firebending, and everything builds to the Sozin's Comet showdown with Ozai. Two confirmed new faces carry serious fan weight: **Jon Jon Briones as Piandao**, the swordmaster who trains Sokka, and **Tantoo Cardinal as Hama** — which means bloodbending, the darkest bending form, enters live action. The episode count is reported to be seven, like Season 2, though Netflix has not confirmed it.",
      "A finished final season, a confirmed year, one photograph, and silence. When Netflix finally moves, it will land loudly — and we will update this page the moment it does.",
      "*Our full Avatar Season 3 update video is coming to the Trailupbox channel.*"
    ]
  },
  {
    slug: "eiza-gonzalez-monse-time100-next-gala",
    title: "Eiza González in a Backless Silver Monse Dress Held Up by a Single Strap at the TIME100 Next Gala",
    category: "Celebrity News",
    date: "2026-10-30",
    excerpt:
      "A backless silver sequin halter dress anchored by one single strap — Eiza González, herself a 2026 TIME100 Next honouree, delivered the gala's boldest engineering feat in Monse.",
    image: "assets/eiza-gonzalez.jpg",
    credit: "Getty Images",
    tags: ["Eiza González", "TIME100 Next", "Red Carpet", "New York"],
    faq: [
      { q: "What did Eiza González wear at the TIME100 Next Gala 2026?",
        a: "A backless silver sequined halter dress by Monse (Spring/Summer 2027), anchored by a single strap — worn with Aquazzura shoes and David Yurman jewellery, styled by Elizabeth Saltzman." },
      { q: "Who designed Eiza González's TIME100 Next dress?",
        a: "Monse — the New York label's Spring/Summer 2027 design, a silver sequin halter dress with an open back held by one strap." },
      { q: "Why was Eiza González at the TIME100 Next Gala?",
        a: "She is one of the 2026 TIME100 Next honourees — the gala at Current at Chelsea Piers in New York celebrated this year's list." }
    ],
    body: [
      "Eiza González stepped out in Monse at the TIME100 Next Gala in New York — and the dress was an engineering feat as much as a fashion moment. The silver sequined halter dress is entirely backless, anchored by a single strap, and it photographed from behind as dramatically as it did from the front.",
      "The gown is from Monse's Spring/Summer 2027 line, styled by Elizabeth Saltzman and finished with Aquazzura shoes and David Yurman jewellery. It is a high-risk silhouette — one strap, no back, full sequins — and González wore it with the ease of someone who has never once worried about a red carpet.",
      "The context made it land harder: González was not just a guest. She is one of the 2026 TIME100 Next honourees, celebrated at the gala at Current at Chelsea Piers alongside this year's class of rising names across film, music and culture. When the night is partly yours, the look has to rise to it — and a molten-silver, single-strap statement is exactly how you do that. Expect this one to live on best-dressed lists well past the weekend.",
      "*(Photos: Getty Images)*"
    ]
  },
  {
    slug: "joey-king-miu-miu-time100-next-gala",
    title: "Joey King in Custom Mint Miu Miu at the TIME100 Next Gala",
    category: "Celebrity News",
    date: "2026-10-30",
    excerpt:
      "A mint-green off-the-shoulder gown scattered with embellishments, made custom by Miu Miu — Joey King, a 2026 TIME100 Next honouree, went full old-Hollywood softness in New York.",
    image: "assets/joey-king.jpg",
    credit: "Getty Images",
    tags: ["Joey King", "TIME100 Next", "Miu Miu", "Red Carpet"],
    faq: [
      { q: "What did Joey King wear at the TIME100 Next Gala?",
        a: "A custom Miu Miu mint-green off-the-shoulder gown scattered with embellishments, worn with Forever Diamond NY jewellery and styled by Jared Eng." },
      { q: "Who designed Joey King's mint gown?",
        a: "Miu Miu — the gown was made custom for King for the gala, in a soft mint green with embellishments across the bodice and skirt." },
      { q: "Is Joey King a TIME100 Next honouree?",
        a: "Yes — King is one of the 2026 TIME100 Next honourees, and the gala at Current at Chelsea Piers in New York celebrated this year's list." }
    ],
    body: [
      "Joey King stepped out in custom Miu Miu at the TIME100 Next Gala in New York — a mint-green off-the-shoulder gown scattered with embellishments, in the kind of soft, romantic register that stood out all the more on a night of high-shine statements.",
      "The gown was made custom for King by Miu Miu, and styled by Jared Eng with Forever Diamond NY jewellery. Off-the-shoulder necklines are having a long moment, but the mint colourway is the detail that did the work here — pale, fresh and deliberately gentle against the gala's black-tie sea of metallics and black.",
      "Like several of the night's standout arrivals, King was there as more than a guest: she is one of the 2026 TIME100 Next honourees. It has been a long, deliberate climb from child actor to one of the most in-demand leads of her generation, and the industry keeps finding formal ways to say so. A custom gown from one of fashion's most-watched houses, for a night honouring her — that is the level she is playing at now. It also continued a quietly excellent run of gala appearances from King this season, each one more assured than the last.",
      "*(Photos: Getty Images)*"
    ]
  },
  {
    slug: "kim-kardashian-schiaparelli-alls-fair-premiere",
    title: "Kim Kardashian's Schiaparelli Gown Was Moulded From Liquid Silicone for the All's Fair Premiere",
    category: "Celebrity News",
    date: "2026-10-30",
    excerpt:
      "A plunging cream gown moulded from liquid silicone with hand-cut fringe over sequinned tulle — Kim Kardashian's Schiaparelli couture at the All's Fair Season 2 premiere in Mexico City was part dress, part sculpture.",
    image: "assets/kim-kardashian.jpg",
    credit: "Getty Images",
    tags: ["Kim Kardashian", "All's Fair", "Schiaparelli", "Premiere"],
    faq: [
      { q: "What did Kim Kardashian wear to the All's Fair Season 2 premiere?",
        a: "Schiaparelli Fall 2026 couture by Daniel Roseberry — a plunging cream gown moulded from liquid silicone, with hand-cut fringe layered over sheer sequinned tulle, styled by Law Roach." },
      { q: "When does All's Fair Season 2 premiere?",
        a: "All's Fair Season 2 premieres on 4 November on Hulu. The Mexico City premiere event was held on 28 October 2026 at Soho House." },
      { q: "Who designed Kim Kardashian's liquid silicone gown?",
        a: "Daniel Roseberry for Schiaparelli — it is Look 4 from the house's Fall 2026 couture collection." }
    ],
    body: [
      "Kim Kardashian stepped out in Schiaparelli couture at the *All's Fair* Season 2 premiere in Mexico City — a plunging cream gown moulded from liquid silicone, finished with hand-cut fringe layered over sheer sequinned tulle. It is less a dress than a piece of sculpture that happens to be wearable.",
      "The gown is Look 4 from Schiaparelli's Fall 2026 couture collection by Daniel Roseberry, styled by Law Roach. The liquid-silicone construction is the story: the fabric is moulded to the body rather than sewn around it, which is why the silhouette looks poured rather than fitted. Under the fringe, the sheer sequinned tulle keeps the whole thing shimmering as it moves.",
      "The premiere, held at Soho House in Mexico City on 28 October, launched the second season of Ryan Murphy's legal drama, in which Kardashian leads the ensemble. Season 2 premieres on **4 November on Hulu**. Kardashian's red-carpet strategy for this show has been consistent — couture with a concept, never just a pretty dress — and a gown made of moulded silicone for a show about high-gloss power is about as on-brief as it gets.",
      "*(Photos: Getty Images)*"
    ]
  },
  {
    slug: "lupita-nyongo-brandon-maxwell-wsj-innovator-awards",
    title: "Lupita Nyong'o Makes Black Velvet Irresistible in Brandon Maxwell at the WSJ. Innovator Awards",
    category: "Celebrity News",
    date: "2026-10-30",
    excerpt:
      "A black silk-velvet gown with a sculptural neckline, Bvlgari jewels and a red lip — Lupita Nyong'o's Brandon Maxwell moment at MoMA was a masterclass in doing more with less.",
    image: "assets/lupita-nyongo.jpg",
    credit: "Getty Images",
    tags: ["Lupita Nyong'o", "WSJ Innovator Awards", "Brandon Maxwell", "New York"],
    faq: [
      { q: "What did Lupita Nyong'o wear at the WSJ. Innovator Awards 2026?",
        a: "The 'Farren' black silk-velvet maxi dress from Brandon Maxwell's Fall 2026 line, with a sculptural neckline — finished with Bvlgari jewels, an Olga Berg clutch and Gianvito Rossi sandals, styled by Micaela Erlanger." },
      { q: "Who designed Lupita Nyong'o's black velvet gown?",
        a: "Brandon Maxwell — the 'Farren' dress from his Fall 2026 collection, in black silk velvet with a sculptural neckline." },
      { q: "What did Lupita Nyong'o do at the Innovator Awards?",
        a: "Beyond the red carpet, she took the stage during the ceremony at MoMA to present the Literature award to author Marlon James." }
    ],
    body: [
      "Lupita Nyong'o stepped out in Brandon Maxwell at the WSJ. Magazine Innovator Awards at MoMA in New York — a black silk-velvet gown with a sculptural neckline, finished with a red lip and Bvlgari jewels. On a night full of fashion risk-taking, hers was the quiet masterclass.",
      "The dress is the 'Farren' from Brandon Maxwell's Fall 2026 line — black silk velvet, a maxi silhouette, and a neckline that does the sculptural work a necklace would normally do. Styled by Micaela Erlanger with an Olga Berg clutch and Gianvito Rossi sandals, the look makes its case through restraint: one fabric, one colour, one strong line, and styling that knows exactly when to stop.",
      "Nyong'o was not only on the carpet — she took the stage during the ceremony to present the Literature award to Marlon James, one of the night's honourees. The Innovator Awards remain one of the few rooms where fashion, art and industry genuinely mix, and Nyong'o — an Oscar winner who moves between all three worlds — is precisely the kind of presence the night is built around. Black velvet has rarely looked this deliberate.",
      "*(Photos: Getty Images)*"
    ]
  },
  {
    slug: "cynthia-erivo-erdem-abt-fall-gala",
    title: "The Night Was Hers: Cynthia Erivo Honoured at the American Ballet Theatre Fall Gala in Erdem",
    category: "Celebrity News",
    date: "2026-10-30",
    excerpt:
      "A tailored black jacket and white shirt over a sweeping floral pannier skirt — Cynthia Erivo wore Erdem to the gala held in her honour, where Debbie Allen presented her award on stage.",
    image: "assets/cynthia-erivo.jpg",
    credit: "Getty Images for American Ballet Theatre",
    tags: ["Cynthia Erivo", "American Ballet Theatre", "Gala", "New York"],
    faq: [
      { q: "Why was Cynthia Erivo honoured at the American Ballet Theatre Fall Gala?",
        a: "The ABT Fall Gala at the David H. Koch Theater at Lincoln Center was held in Erivo's honour, recognising her impact across stage and screen; Debbie Allen presented her with the award on stage." },
      { q: "What did Cynthia Erivo wear to the ABT Fall Gala?",
        a: "Erdem Spring 2027 — a tailored black jacket and crisp white shirt over a sweeping floral-embellished pannier skirt, styled by Jason Bolden." },
      { q: "Who presented Cynthia Erivo's award?",
        a: "Debbie Allen — the legendary dancer and choreographer presented Erivo's honour on stage during the gala." }
    ],
    body: [
      "Some red carpets you attend. This one was held for her. Cynthia Erivo stepped out in Erdem at the American Ballet Theatre Fall Gala at the David H. Koch Theater at Lincoln Center — a night formally held in her honour, under an 'Angels and Demons' theme.",
      "The look, from Erdem's Spring 2027 line and styled by Jason Bolden, was pure Erivo theatre: a tailored black jacket and crisp white shirt on top, and below, a sweeping floral-embellished pannier skirt with genuine eighteenth-century drama in its silhouette. It is menswear tailoring and ballet-costume romance in a single outfit — a fitting equation for a performer whose career has always lived between disciplines.",
      "The evening's defining image came on stage, where Debbie Allen — a legend of American dance — presented Erivo with her honour. For an artist who has conquered Broadway, film and music, recognition from the ballet world, delivered by one of its defining figures, marks a different kind of arrival. Erivo's year keeps widening; nights like this are the industry keeping score.",
      "*(Photos: Getty Images for American Ballet Theatre)*"
    ]
  },
  {
    slug: "dune-part-three-final-trailer-news-wrap",
    title: "Dune: Part Three's Final Trailer Puts a Target on the Emperor — and Chris Pratt Just Took Stephen King's Crown",
    category: "News",
    date: "2026-10-29",
    excerpt:
      "The most powerful man in the universe just found out the plot to kill him runs through his own family. Plus a streaming king dethroned in six days, a record box-office run hitting its first speed bump, and a Friday so stacked you will need a plan.",
    image: "assets/hires/dune-chani.jpg",
    youtubeId: "8Dx_xfStMIo",
    tags: ["Dune Part Three", "News Wrap", "Box Office", "Netflix", "Prime Video"],
    faq: [
      { q: "When does Dune: Part Three open in cinemas?",
        a: "Dune: Part Three opens on 18 December 2026 — the exact same day as Avengers: Doomsday." },
      { q: "What is new in the final Dune: Part Three trailer?",
        a: "The final trailer puts Chani at the very heart of the conspiracy against Emperor Paul, gives a first look at Paul and Chani's twins Leto II and Ghanima, and introduces Robert Pattinson as Scytale, a shapeshifter villain scheming to bring the emperor down." },
      { q: "Which show just became number one on Prime Video?",
        a: "The Terminal List Season 2 is now the number one show on Prime Video worldwide and in the US, per FlixPatrol — pushing Stephen King's Carrie down to number two." },
      { q: "When does Dead-End Job release on Netflix?",
        a: "Dead-End Job lands on Netflix on Friday, 30 October 2026 — a staffing agency offering fifty times the normal wage, sending desperate workers into nightmare workplaces." }
    ],
    body: [
      "The most powerful man in the universe just found out the plot to kill him runs through his own family. That was the hook of our latest news wrap — plus a trailer that did five million views in a day, a streaming king dethroned in six days, and a record-breaking box-office run that just hit its first speed bump. All of it in about six minutes, no filler.",
      "## Dune: Part Three — The Final Trailer Changes Everything",
      "Warner Bros. dropped the final trailer for *Dune: Part Three*, and it passed five million views within hours. Tickets are already on sale.",
      "The film jumps nearly two decades forward: Paul Atreides rules as emperor — and the trailer puts Chani, the woman he left behind, at the very heart of the conspiracy against him. If you've read the book, you spotted it instantly: that is not how the novel plays it, and it changes everything.",
      "We also get our first look at Paul and Chani's twins, Leto II and Ghanima — and Robert Pattinson arrives as the villain Scytale, a shapeshifter scheming to bring the emperor down. Director Denis Villeneuve calls this film a sophisticated epilogue, not just a third chapter. It opens **December 18** — the exact same day as *Avengers: Doomsday*. Two giants, one day. Pick your side now, because that Friday is going to be loud.",
      "## Chris Pratt Dethrones Stephen King on Prime Video",
      "Stephen King owned Prime Video for three weeks. Chris Pratt took the crown in six days.",
      "*The Terminal List* Season 2 is now the number one show on Prime Video worldwide and in the US, per FlixPatrol — pushing King's *Carrie* down to number two. Audiences are driving it: the show sits around 91–92% with viewers, against *Carrie*'s 85%. And *Carrie* fans can breathe — that show was already renewed for a second season, one that goes beyond King's novel.",
      "## The Strangest Money Story of the Week",
      "Anne Hathaway's thriller *Verity* has made $162.7 million worldwide on a $40 million budget — more than four times its cost — and it's now available to rent at home while still playing in cinemas across North America. It's Hathaway's third number one of the year.",
      "Here's the part nobody can explain: critics gave it 31%. Audiences gave it 72%. Same film — two completely different movies, depending on who you ask.",
      "## Box Office: A Record Run Hits a Speed Bump",
      "*Jailer 2* is still the highest-grossing Tamil film of all time worldwide — that record is safe. But its thirteenth day brought in about ₹7.5 crore in India, down roughly 20% on the day before, with the worldwide total now around ₹744 crore. The thousand-crore question just got harder, and its next real test lands November 6.",
      "Meanwhile, *Ramayana* doesn't open until November 5 — and its advance bookings have reportedly already passed ₹14 crore in India alone, with overseas pre-sales past $2 million.",
      "## The Star Who Showed Up From the Army",
      "In Seoul, the cast of Netflix's *Dead-End Job* faced the press — and the star of the show wasn't even in the room. Lee Jae-wook is serving in the military right now, so he appeared by surprise video message, promising to support the show while he finishes his national service. Co-star Go Min-si was also absent; Netflix says it was a scheduling conflict. The show itself drops Friday: a staffing agency offering fifty times the normal wage, sending desperate workers into nightmare workplaces. The cast's own pitch line says it all — poverty is scarier than ghosts.",
      "## Friday Is Stacked — and One Quiet Goodbye",
      "Clear your weekend. On Friday, October 30: *Dead-End Job* and *Akka* land on Netflix, *Apocalypse Z: New World* hits Prime Video, *Nocturne* arrives on Apple TV — and in cinemas, a new *Sense and Sensibility*, *Wicker* and *The Mongoose*.",
      "And one name we said carefully: three years after we lost Matthew Perry, the documentary about his life, *The One About Matthew Perry*, is now streaming on Netflix. Director Mary Robertson explained that the *Friends* cast were approached and chose not to participate: \"I know that the cast of Friends loves Matthew, and is grieving him.\" No scandal angle — just a great actor, missed, three years on.",
      "*Daily movie & web series updates, release dates, spoiler-free reviews and recommendations — that's Trailupbox, every day.*"
    ]
  },
  {
    slug: "elle-fanning-robert-wun-london-premiere",
    title: "Elle Fanning's Music-Box Moment: Robert Wun Couture at the Sunrise on the Reaping Premiere",
    category: "Celebrity News",
    date: "2026-10-29",
    excerpt:
      "A blush-pink tulle gown topped with a ballerina headpiece — Elle Fanning's London premiere look was pure Effie Trinket energy, and it was her first stop on the film's press tour.",
    image: "assets/elle-fanning.jpg",
    credit: "Getty Images",
    tags: ["Elle Fanning", "The Hunger Games", "Red Carpet", "Premiere"],
    faq: [
      { q: "What did Elle Fanning wear to the Sunrise on the Reaping London premiere?",
        a: "A Robert Wun couture gown from the Fall/Winter 2026 line — a blush-pink sculptural petal bodice, a layered ruffled tulle skirt and a music-box ballerina headpiece, styled by Samantha McMillen and finished with Aquazzura pumps." },
      { q: "Who does Elle Fanning play in The Hunger Games: Sunrise on the Reaping?",
        a: "Elle Fanning plays Effie Trinket — and her premiere look channeled the character's Capitol extravagance." },
      { q: "When does The Hunger Games: Sunrise on the Reaping release?",
        a: "The film arrives in theatres on 20 November 2026." },
      { q: "Where was the Sunrise on the Reaping London premiere held?",
        a: "At HMV Westfield Shopping Centre in London — and it was Fanning's first event on the film's press tour." }
    ],
    body: [
      "Elle Fanning stepped out in Robert Wun couture at the London fan premiere of *The Hunger Games: Sunrise on the Reaping*, held at HMV Westfield Shopping Centre — and the look was a tribute hiding in plain sight. Fanning plays Effie Trinket in the film, and the blush-pink sculptural petal bodice, layered ruffled tulle skirt and music-box ballerina headpiece channeled her character's Capitol extravagance perfectly.",
      "The gown is from Robert Wun's Fall/Winter 2026 couture line, styled by Samantha McMillen and finished with Aquazzura pumps. Fanning shared that this was her first event on the film's press tour — and if this is the opening statement, the rest of the tour has a very high bar to clear.",
      "*The Hunger Games: Sunrise on the Reaping* arrives in theatres on November 20.",
      "*(Photos: Getty Images)*"
    ]
  },
  {
    slug: "mckenna-grace-arena-gown-london-premiere",
    title: "Mckenna Grace Wore the Quarter Quell Arena Itself to the London Premiere",
    category: "Celebrity News",
    date: "2026-10-29",
    excerpt:
      "Look closer at Mckenna Grace's Almée Couture gown — it's embroidered with the film's arena itself: mountains, meadow and purple vines trailing into the train. Method dressing, taken literally.",
    image: "assets/mckenna-grace.jpg",
    credit: "Getty Images",
    tags: ["Mckenna Grace", "The Hunger Games", "Red Carpet", "Premiere"],
    faq: [
      { q: "What did Mckenna Grace wear to the Sunrise on the Reaping London premiere?",
        a: "A custom Almée Couture gown embellished to recreate the landscape of the film's arena — a densely beaded bodice rising into 3D mountainous terrain, with purple floral vines winding down the skirt and trailing into the train." },
      { q: "Who does Mckenna Grace play in Sunrise on the Reaping?",
        a: "She plays District 12 tribute Maysilee Donner — so she wore the arena her character has to survive." },
      { q: "Which arena is embroidered on Mckenna Grace's gown?",
        a: "The 50th Hunger Games arena — the Second Quarter Quell." },
      { q: "When does The Hunger Games: Sunrise on the Reaping release?",
        a: "The film arrives in theatres on 20 November 2026." }
    ],
    body: [
      "Method dressing has a new champion. At the London fan premiere of *The Hunger Games: Sunrise on the Reaping*, Mckenna Grace arrived in a custom Almée Couture gown embellished to recreate the landscape of the film's 50th Hunger Games — the Second Quarter Quell arena itself.",
      "The detailing is extraordinary: a densely beaded bodice rising into 3D mountainous terrain, purple floral vines winding down the skirt, and the whole landscape trailing into the train. Grace plays District 12 tribute Maysilee Donner in the film — so she didn't just wear a dress inspired by the movie, she wore the arena her character has to survive.",
      "*The Hunger Games: Sunrise on the Reaping* arrives in theatres on November 20.",
      "*(Photos: Getty Images)*"
    ]
  },
  {
    slug: "charlize-theron-givenchy-airbnb-gala",
    title: "Charlize Theron in Emerald Givenchy Fringe at Airbnb.org's First-Ever Gala",
    category: "Celebrity News",
    date: "2026-10-29",
    excerpt:
      "An emerald fringe gown from Givenchy's Spring 2027 collection, finished with black pom-pom heels — Charlize Theron owned the first Airbnb.org gala in Los Angeles.",
    image: "assets/charlize-theron.jpg",
    credit: "Getty Images",
    tags: ["Charlize Theron", "Givenchy", "Gala", "Los Angeles"],
    faq: [
      { q: "What did Charlize Theron wear to the Airbnb.org gala?",
        a: "An emerald-green fringe dress from Givenchy's Ready-to-Wear Spring 2027 collection by Sarah Burton — a halter neckline, cinched waist, all-fringe skirt and low back — paired with Jessica McCormack jewelry and black pom-pom heels." },
      { q: "Where was the Airbnb.org gala held?",
        a: "At Milk Studios in Los Angeles — it was Airbnb.org's first-ever gala." },
      { q: "What is Airbnb.org?",
        a: "Airbnb.org is the nonprofit that provides free emergency housing to people hit by disasters, illness and other crises." }
    ],
    body: [
      "Charlize Theron stepped out in Givenchy at Airbnb.org's first-ever gala at Milk Studios, Los Angeles — wearing an emerald-green fringe dress from the house's Ready-to-Wear Spring 2027 collection by Sarah Burton, paired with Jessica McCormack jewelry.",
      "The dress does all the talking: a halter neckline, cinched waist, an all-fringe skirt and a low back — finished with black heels adorned with puffy black circles, the pom-pom heels that set social media off. Theron shared the look on her own Instagram with the caption \"Green with envy.\"",
      "Airbnb.org is the nonprofit that provides free emergency housing to people hit by disasters, illness and other crises — and its first gala drew a seriously star-studded guest list.",
      "*(Photos: Getty Images)*"
    ]
  },
  {
    slug: "mcconaughey-family-airbnb-gala",
    title: "A Family Night Out: Matthew McConaughey, Camila Alves and Son Levi at the Airbnb.org Gala",
    category: "Celebrity News",
    date: "2026-10-29",
    excerpt:
      "Matthew McConaughey and Camila Alves brought their 18-year-old son Levi along to Airbnb.org's first-ever gala in Los Angeles — and the family understood the assignment.",
    image: "assets/mcconaughey.jpg",
    credit: "Getty Images",
    tags: ["Matthew McConaughey", "Camila Alves", "Gala", "Los Angeles"],
    faq: [
      { q: "Who attended the Airbnb.org gala with Matthew McConaughey?",
        a: "His wife Camila Alves and their 18-year-old son Levi joined him at Milk Studios in Los Angeles." },
      { q: "What did Camila Alves wear to the Airbnb.org gala?",
        a: "A burgundy sequin halter gown by Sergio Hudson. Matthew McConaughey wore a classic Brioni suit, and Levi stepped out in a grey Sandro suit." },
      { q: "What was the Airbnb.org gala for?",
        a: "It was the first gala for Airbnb.org, the nonprofit providing free emergency housing to people facing disasters, illness and other crises." }
    ],
    body: [
      "It was a family night out in Los Angeles: Matthew McConaughey and Camila Alves brought their 18-year-old son Levi along to Airbnb.org's first-ever gala at Milk Studios.",
      "Camila wore a burgundy sequin halter gown by Sergio Hudson, Matthew kept it classic in a Brioni suit, and Levi stepped out in a grey Sandro suit — three different registers of red-carpet polish, one very photogenic family.",
      "The gala marked the first for Airbnb.org, the nonprofit providing free emergency housing to people facing disasters, illness and other crises.",
      "*(Photos: Getty Images)*"
    ]
  },
  {
    slug: "best-movies-of-2026-watch-right-now",
    title: "Best Movies of 2026: 7 New Movies You Can Watch Right Now — and #1 Cost More Than Any Korean Film in History",
    category: "Recommendation",
    date: "2026-10-27",
    excerpt:
      "A kaiju classic reborn in 4K. A dinner party that turns into pure chaos. A Korean outbreak film from the director of Train to Busan. Our countdown of the seven best new movies you can watch right now — and exactly where to stream each one.",
    image: "assets/hires/hope-street.jpg",
    youtubeId: "9Ok_xF2Sl5Y",
    tags: ["Best Movies", "2026", "Recommendations", "Streaming Guide"],
    faq: [
      { q: "What are the best new movies to watch right now in 2026?",
        a: "Our top seven: Hope at number one, then The Invite, The Weight, the 4K remaster of Shin Godzilla, Tenzing, Colony and Matchbox — each with exactly where to stream it." },
      { q: "Which 2026 movie is the most expensive Korean film ever made?",
        a: "Hope — it cost around $46 million, from Na Hong-jin, the director of The Wailing." },
      { q: "Where can I watch Hope (2026)?",
        a: "Hope is in theatres now and available to rent at home." },
      { q: "Where can I stream The Invite?",
        a: "The Invite is streaming on HBO Max — where it was the platform's number one movie on its debut weekend." }
    ],
    body: [
      "2026 has already delivered a monster year for movies — and most people have only heard of one or two of them. A kaiju classic reborn in 4K. A dinner party that turns into pure chaos. A Korean outbreak film from the director of *Train to Busan*. And at number one, the most expensive Korean movie ever made.",
      "Here is our countdown of the seven best new movies you can watch right now, with the stories, the scores and exactly where to stream each one.",
      "## #7 — Matchbox",
      "Yes, the toy cars. *Matchbox: The Movie* sends undercover CIA agent Sean Walker (John Cena) back to his small hometown, where a reunion with his childhood friends drags them all into an international plot. Framed for stealing a nuclear weapon, the group has to steal it back to clear their names.",
      "Critics were not kind — the film sits at 5.7 on IMDb — but as a big, Friday-night action comedy directed by Sam Hargrave (*Extraction*), it does exactly what it promises. **Streaming globally on Apple TV.**",
      "## #6 — Colony",
      "From Yeon Sang-ho, the director of *Train to Busan* — and he has lost none of his cruelty. In *Colony*, a biotech conference erupts into chaos when a rapidly mutating virus is released and the building is sealed. Trapped inside, a professor and a handful of survivors face infected who don't just attack — they evolve, together, like one hive mind.",
      "Critics gave it 81% on Rotten Tomatoes, audiences a massive 93%, and in Korea it became the fastest film of 2026 to cross two million admissions. **Available to rent or buy on Prime Video and Apple TV.**",
      "## #5 — Tenzing",
      "Everybody knows the name Edmund Hillary. *Tenzing* finally asks: who was the man standing next to him on top of Everest? Genden Phuntsok plays Tenzing Norgay, the Sherpa who had to fight for his place on the 1953 British expedition instead of just carrying its bags. Tom Hiddleston plays Hillary, Willem Dafoe co-stars, and the film — rated 7.5 on IMDb — just won the audience award at the Mill Valley Film Festival.",
      "A proper, big-hearted adventure. **Streaming globally on Apple TV.**",
      "## #4 — Shin Godzilla",
      "A ten-year-old masterpiece that 2026 dragged back into the spotlight. For its tenth anniversary, *Shin Godzilla* returned remastered in 4K — and feels as urgent as ever. A creature rises in Tokyo Bay and evolves as it marches on the capital, while the government drowns in meetings and red tape. Part monster movie, part razor-sharp satire, it holds 87% on Rotten Tomatoes for a reason.",
      "**US viewers can stream the 4K version on HBO Max now.**",
      "## #3 — The Weight",
      "Oregon, 1933. Samuel Murphy (Ethan Hawke) is a prisoner and a father, desperate to reach his young daughter before she becomes a ward of the state. The warden (Russell Crowe) offers a deal: lead a crew of convicts smuggling gold through the wilderness, and walk free.",
      "The headline number: 94% on Rotten Tomatoes — Russell Crowe's best-reviewed film in over twenty-five years. A slow-burn survival thriller with real weight to it. **Out now to rent or buy on Prime Video and Apple TV.**",
      "## #2 — The Invite",
      "The surprise hit of the year. Joe and Angela (Seth Rogen and Olivia Wilde), a married couple running on fumes, invite their free-spirited upstairs neighbours (Penélope Cruz and Edward Norton) over for dinner. One evening, a few confessions, and one very bold proposition — and a marriage that will either reignite or burn down completely.",
      "It premiered at Sundance, earned over $61 million on a budget under $15 million, and sits at a stunning 96% on Rotten Tomatoes. **Streaming on HBO Max** — where it was the platform's number one movie on its debut weekend.",
      "## #1 — Hope",
      "The most expensive Korean film ever made — around $46 million — from Na Hong-jin, the director of *The Wailing*, returning after ten silent years. Something enormous and not human comes ashore near the quiet harbor village of Hope Harbor, and a police chief, a veteran hunter and a rookie cop are all that stand in its way.",
      "*Hope* premiered in competition at Cannes to a six-minute standing ovation, scored 79% Certified Fresh on Rotten Tomatoes, and became the third-biggest Korean film ever in North America. It's **in theatres now and available to rent at home** — and if its ending scrambles your brain the way it scrambled everyone's, our full Ending Explained and honest spoiler-free review are both live on the channel.",
      "## Which One Are You Watching First?",
      "Seven films, seven completely different nights. Did we miss a 2026 gem? Tell us in the comments on the video — part two is coming.",
      "*More recommendations, honest reviews and release updates — every day, right here on Trailupbox.*"
    ]
  },
  {
    slug: "hope-2026-spoiler-free-review",
    title: "HOPE (2026) Review — No Spoilers: The Most Expensive Korean Movie Ever Made Split Cannes in Half",
    category: "Review",
    date: "2026-10-26",
    excerpt:
      "Ten years after The Wailing, Na Hong-jin returned with the most expensive Korean movie ever made — a monster epic so big and so strange that Cannes split right down the middle. Which side will you land on?",
    image: "assets/hires/hope-hero.jpg",
    youtubeId: "1QMrg5F1uDA",
    tags: ["Hope", "Review", "Korean Cinema", "Spoiler-Free", "Cannes"],
    faq: [
      { q: "Is HOPE (2026) worth watching?",
        a: "Yes — a spectacle with a heartbeat and a few cracks in the armor. It sits at 79% Certified Fresh on Rotten Tomatoes across 180 critic reviews, with audiences at 77%; the visual effects and the two-hour-thirty-six-minute runtime are what divide viewers." },
      { q: "Who directed HOPE (2026)?",
        a: "Na Hong-jin, the director of The Wailing, returning after ten silent years." },
      { q: "Who stars in HOPE (2026)?",
        a: "Hwang Jung-min as a tough old police chief, Zo In-sung as a veteran hunter and Jung Ho-yeon as a rookie cop. Michael Fassbender and Alicia Vikander also appear — in full performance capture as the visitors, so you never see their faces." },
      { q: "Does this HOPE (2026) review contain spoilers?",
        a: "No — the review is completely spoiler-free and covers the premise only: something enormous and not human comes ashore near a quiet harbor village in South Korea." }
    ],
    body: [
      "Ten years. That's how long the director of *The Wailing* was gone — no films, no noise, nothing. Then Na Hong-jin came back with the most expensive Korean movie ever made: a monster epic so big and so strange that it split Cannes right down the middle. Half the room on its feet, cheering. The other half asking what on earth they just watched.",
      "So which side will you land on? Our full spoiler-free review — also on the channel as a video — answers exactly that.",
      "## The Setup (Premise Only, No Spoilers)",
      "A quiet harbor village in South Korea. Fires burning in the hills. And something moving through the treeline that nobody can explain — something that came from the sky. Standing between the village and whatever that thing is: a tough old police chief (Hwang Jung-min), a hunter who knows these mountains better than anyone (Zo In-sung), and a rookie cop (Jung Ho-yeon) who picked the worst possible week to start the job.",
      "That's all we're giving you — because the less you know walking in, the harder this film hits.",
      "## What Works: Ferocious Filmmaking",
      "The thing almost every critic on the planet agrees on: the filmmaking is ferocious. Variety called the action \"some of the most breathtakingly elegant action moviemaking of this or any year\" — and they're not exaggerating. Here's the wild part: this is a monster movie shot almost entirely in broad daylight. No hiding the creature in darkness, no rain or fog tricks. The director said creatures in darkness didn't feel new to him anymore — so he put his monster in the sun and dared you to look away.",
      "Behind the camera is Hong Kyung-pyo, the cinematographer who shot *Parasite*, and the score is by Michael Abels, the composer behind *Get Out* and *Nope*. The film is patient, too: it keeps its creature off-screen for roughly the first forty minutes, building dread through ruined streets and frightened faces. When it finally lets go, it really lets go.",
      "## The Performances — and the Strangest Casting Story of the Year",
      "The three Korean leads give this giant film its human core — without them, this is just spectacle; with them, you actually care who makes it home.",
      "Now the strange part. Michael Fassbender and Alicia Vikander are in this movie — big Hollywood names, top billing — and you will never see their faces. They play the visitors in full performance capture, speaking an invented alien language built for this film. Some critics call that bold. Some call it burying two movie stars under digital makeup. Our take? We respect the swing — but keep your expectations in check: this film belongs to its Korean cast.",
      "## What Doesn't Work",
      "Honesty matters, so here it is in full. The visual effects divide people. Even the film's biggest fans admit it — Rotten Tomatoes' own critics consensus calls the effects \"amusingly quaint,\" and the Los Angeles Times called the CGI, flat out, \"rickety.\" Some shots are stunning. Some look like they wandered in from a much cheaper movie.",
      "Second: the length. At two hours and thirty-six minutes, you feel every one of them in the middle — the story keeps opening new doors instead of walking through the ones already open, and questions pile up faster than answers. Whether that frustrates or excites you will decide your night.",
      "## The Numbers",
      "The world has landed — mostly — on the positive side. *Hope* sits at **79% Certified Fresh on Rotten Tomatoes** across 180 critic reviews, with audiences right behind the critics at **77%**. **Metacritic has it at 67**, generally favorable. At Cannes it took a six-minute standing ovation — and walked straight into an argument that's still going. At the box office it has made about **$46.8 million worldwide**, and it is already the **third-biggest Korean film ever in North America**, behind only *Parasite* and *The King of Kings*.",
      "This is not a flop story. This is a phenomenon with an asterisk.",
      "## Our Verdict",
      "HOPE is a spectacle with a heartbeat and a few cracks in the armor — and in a year full of safe sequels, a swing this big deserves your ticket. Watch it on the biggest screen you can find; it's in theatres now, and you can rent it at home as well. If shaky effects pull you out of a movie completely, wait for the home release. If you love creature features that actually take risks — don't wait another day.",
      "Already seen it, and the ending is still living in your head rent-free? Our full Ending Explained is live on the channel, breaking down the twist everyone's arguing about.",
      "*More honest reviews, movie updates and recommendations — every day, right here on Trailupbox.*"
    ]
  },
  {
    slug: "severance-season-3-release-date-update",
    title: "Severance Season 3: Why Apple Still Won't Announce the Release Date",
    category: "News",
    date: "2026-10-23",
    excerpt:
      "Filming on Severance Season 3 has been underway since late July 2026, yet Apple TV+ has not said a single word about a premiere date. Here is everything we actually know — and why the silence might be deliberate.",
    image: "assets/hires/severance-corridor.jpg",
    youtubeId: "Tqsed4oVs80",
    tags: ["Severance", "Apple TV+", "Season 3", "Release Date"],
    faq: [
      { q: "When is Severance Season 3 coming out?",
        a: "There is no official date yet. Industry outlets doing the production maths — filming length plus the show's heavy post-production — keep landing on a late 2027 premiere, but that is analysis, not an announcement." },
      { q: "Has Apple announced the Severance Season 3 release date?",
        a: "No. Filming has been underway since late July 2026, yet Apple TV+ has given no premiere window, no teaser and not even a vague 'coming soon'." },
      { q: "Is Ben Stiller directing Severance Season 3?",
        a: "No — according to reporting from the Los Angeles Times, Stiller is not directing any episodes of Season 3, a genuine shift for a series whose visual identity was tied to his eye." },
      { q: "Will there be a Severance Season 4?",
        a: "Possibly — reports around Apple's roughly $70 million deal to acquire full ownership of the Severance IP suggest a fourth season is viewed internally as close to a lock, though Apple has not confirmed it." }
    ],
    body: [
      "It is the question every Severance fan keeps asking, and Apple keeps refusing to answer: when is Season 3 coming? Cameras started rolling again in late July 2026, the cast is back on set, and still there is no premiere window, no teaser, and not even a vague \"coming soon\" from Apple TV+. For a show that collected 27 Emmy nominations for its second season, that silence is starting to feel like a strategy rather than an accident.",
      "Part of the story is creative control. Apple acquired full ownership of the Severance IP in a deal reported at around $70 million, which means the streamer is no longer just distributing the show — it owns it outright. When a platform owns a flagship outright, it tends to protect the long game. Reports around the deal suggested a fourth season is viewed internally as close to a lock, which changes the pressure on Season 3 completely: there is no need to rush a date out just to prove the show is alive.",
      "The other part is who is — and is not — behind the camera. Ben Stiller, who directed the majority of the show's signature episodes, is not directing any episodes of Season 3, according to reporting from the Los Angeles Times. That is a genuine creative shift for a series whose visual identity was so closely tied to one director's eye, and it is one more reason the production may be taking its time rather than chasing a headline date.",
      "So what is a realistic window? Industry outlets doing the production maths — filming length, the show's famously heavy post-production and visual effects work — keep landing on a late 2027 premiere. To be clear: that is analysis, not an announcement. Apple has confirmed nothing, and anyone telling you an exact day is guessing.",
      "Our take at Trailupbox: the wait is annoying, but the signals underneath it are good ones. An owner spending $70 million to own the show outright, a fourth season reportedly in the plans, and a production that refuses to be hurried — that is what a studio does with a crown jewel, not a problem child. When Apple finally moves, expect the date to arrive with a full marketing push, not a whisper. We will update this page the moment anything official lands."
    ]
  },
  {
    slug: "wednesday-season-3-netflix-bigger-than-ever",
    title: "Wednesday Season 3: Netflix Is Betting Bigger Than Ever",
    category: "News",
    date: "2026-10-22",
    excerpt:
      "A wrapped shoot, a Paris chapter nobody will explain, and Winona Ryder joining the cast — Wednesday Season 3 is quietly shaping up to be Netflix's biggest swing yet on the Addams universe.",
    image: "assets/hires/wednesday-typewriter.jpg",
    youtubeId: "",
    tags: ["Wednesday", "Netflix", "Jenna Ortega", "Season 3"],
    faq: [
      { q: "When is Wednesday Season 3 coming out on Netflix?",
        a: "There is no official release date yet. Based on the wrap timing and the scale of post-production, a 2027 premiere is the widely expected window — but until Netflix says it, that stays an expectation, not a fact." },
      { q: "Has Wednesday Season 3 finished filming?",
        a: "Yes — filming ran from February to the end of September 2026 and has officially wrapped." },
      { q: "Who is joining the Wednesday Season 3 cast?",
        a: "Winona Ryder joins as Tabitha, with Susan Sarandon, Chris Sarandon, Noah Taylor, Oscar Morgan and Kennedy Moyer also in the mix, and Eva Green cast in a role Netflix is keeping sealed." },
      { q: "Why did Wednesday Season 3 film in Paris?",
        a: "Nobody knows yet — the production spent part of April 2026 filming in Paris, and Netflix has offered no explanation for what Wednesday Addams is doing there." }
    ],
    body: [
      "Wednesday Season 3 has officially wrapped filming, closing a production run that stretched from February to the end of September 2026 — and everything about this season says Netflix is scaling up. A shoot that long, for a series that already sits among the most-watched English-language shows in the platform's history, is not business as usual. It is a statement of intent.",
      "The casting alone tells the story. Winona Ryder joins as Tabitha, in a piece of casting that feels almost too perfect: the Beetlejuice connection to Tim Burton's world makes her arrival feel less like a guest spot and more like a homecoming. Around her, the new ensemble stretches further — Susan Sarandon, Chris Sarandon, Noah Taylor, Oscar Morgan and Kennedy Moyer are all in the mix, while several major roles remain officially sealed, which is exactly how Netflix likes it when it wants the internet to keep guessing.",
      "Then there is Paris. The production spent part of April 2026 filming in the French capital, and Netflix has offered precisely zero explanation for what Wednesday Addams is doing there. Eva Green's casting — announced with a Tudum quote that gave away nothing and promised everything — only deepened the mystery. In an era where trailers routinely show the entire film, a major production moving continents and saying nothing is a flex.",
      "Jenna Ortega, meanwhile, continues to be the engine of the whole phenomenon. Her comments around the new season have focused on ambition — a bigger, stranger, darker Wednesday — and between her producer role and the show's expanding mythology, Season 3 looks designed to move the series from hit show to franchise foundation. The reported spin-off conversations around other Addams family members suggest Netflix sees exactly that future.",
      "What we do not have yet: an official release date, an episode count, or even a first teaser. Netflix is holding all of it. Based on the wrap timing and the scale of post-production a season like this needs, a 2027 premiere is the widely expected window — but until Netflix says it, it stays an expectation, not a fact. One thing is certain though: when Wednesday returns, it will not be returning small."
    ]
  },
  {
    slug: "zendaya-2026-movie-slate",
    title: "Zendaya's 2026 Is Stacked: Five Major Releases in a Single Year",
    category: "Celebrity News",
    date: "2026-10-22",
    excerpt:
      "The Odyssey, a new Spider-Man, Dune: Part Three, a new season of Euphoria and a fresh drama with Robert Pattinson — Zendaya's 2026 calendar is the kind most actors spread across a decade.",
    image: "assets/hires/zendaya-odyssey.jpg",
    youtubeId: "PMdNOw-_4GE",
    tags: ["Zendaya", "Celebrity News", "Dune", "Spider-Man"],
    faq: [
      { q: "What movies does Zendaya have coming out in 2026?",
        a: "Five major releases in one year: The Drama opposite Robert Pattinson in April, Euphoria Season 3 in the April–May window, The Odyssey in July, Spider-Man: Brand New Day weeks later, and Dune: Part Three in December." },
      { q: "Who does Zendaya play in The Odyssey?",
        a: "She takes on the role of Athena in Christopher Nolan's The Odyssey." },
      { q: "Who does Zendaya play in Dune: Part Three?",
        a: "Chani — her role is positioned at the emotional centre of Denis Villeneuve's finale." }
    ],
    body: [
      "Every few years, one actor has a year that seems to bend the release calendar around them. In 2026, that actor is Zendaya. Across a single twelve-month stretch she is attached to five major releases spanning prestige drama, the biggest literary adaptation in years, two franchise tentpoles and the return of the series that made her an Emmy winner.",
      "The run begins in spring: The Drama, opposite Robert Pattinson, arrives in April, followed closely by the long-awaited third season of Euphoria in the April–May window. Summer belongs to the giants — Christopher Nolan's The Odyssey in July, where she takes on the role of Athena, and Spider-Man: Brand New Day just weeks later, bringing her back as MJ. The year closes with the biggest swing of all: Dune: Part Three in December, with her role as Chani positioned at the emotional centre of Denis Villeneuve's finale.",
      "What makes the slate remarkable is not just the volume but the range of directors and registers: Nolan, Villeneuve, Sam Levinson and Marvel's machine, all in one year, all with her near the top of the call sheet. Pattinson alone shares three of the five projects with her — an accidental double act that will define a lot of 2026's press cycle.",
      "Whether every one of these lands is a question for the year itself. But as a statement of where Zendaya sits in the industry right now — the rare star who can open a franchise film and carry an arthouse drama in the same breath — 2026 is shaping up as a coronation. We will be tracking each release right here on Trailupbox."
    ]
  },
  {
    slug: "severance-season-2-spoiler-free-review",
    title: "Severance Season 2 Review (Spoiler-Free): The Rare Sequel That Goes Deeper",
    category: "Review",
    date: "2026-10-21",
    excerpt:
      "Three years of waiting, and Severance Season 2 somehow justifies every day of it. A spoiler-free look at why this season hits harder, stranger and more emotionally than the first.",
    image: "assets/severance-poster.jpg",
    youtubeId: "",
    tags: ["Severance", "Review", "Apple TV+", "Spoiler-Free"],
    faq: [
      { q: "Is Severance Season 2 worth watching?",
        a: "Yes — Season 2 pushes the premise somewhere more personal, more painful and frequently more beautiful, and its final stretch is some of the most gripping television of the decade." },
      { q: "Does this Severance Season 2 review contain spoilers?",
        a: "None at all — no plot reveals and no episode specifics, so it costs you not a single surprise." },
      { q: "Should I watch Severance Season 1 before Season 2?",
        a: "Yes — Seasons 1 and 2 together make one of the finest complete viewing experiences on any platform right now. Watch both before Season 3 arrives." }
    ],
    body: [
      "Some second seasons coast on the goodwill of the first. Severance Season 2 does the opposite — it takes the elegant, chilling premise of the original run and pushes it somewhere more personal, more painful and frequently more beautiful. This review is completely spoiler-free: no plot reveals, no episode specifics, nothing that would cost you a single surprise.",
      "The first thing you notice is confidence. Season 1 asked what the severance procedure does to a person; Season 2 is far more interested in what it does to everyone standing around that person. The emotional geometry of the show widens, and characters who were once supporting players are handed material that quietly rearranges how you feel about the entire story. Performances across the board are exceptional — this is an ensemble working at the very top of television acting right now, and the awards recognition that followed was not a surprise to anyone who watched.",
      "Visually, the show remains unmatched. The Lumon aesthetic — those endless white corridors, the retro-futurist offices, the eerie calm of everything — is used less as decoration this season and more as language. Episodes venture into visual territory the first season only hinted at, and at least two sequences this year will be talked about for a very long time. The direction and cinematography never show off; every strange image is doing emotional work.",
      "Is it perfect? The pacing in the middle stretch asks for patience, and viewers who bounced off the show's deliberate rhythm in Season 1 will find the same rhythm here, deepened rather than quickened. But that patience is consistently rewarded — the final stretch of the season is some of the most gripping television of the decade, building to a finale that lands with genuine force.",
      "Our verdict: Severance Season 2 is not just a worthy follow-up, it is the moment a great show became an era-defining one. If you have somehow not started it yet, Season 1 and 2 together make one of the finest complete viewing experiences on any platform right now. Watch it before Season 3 arrives — because when it does, everyone will be talking about this world again."
    ]
  }
];

/* ------------------------------------------------------------
   Latest Videos — cards link straight to YouTube.
   "id" is the YouTube video ID (thumbnail source).
   ------------------------------------------------------------ */
const VIDEOS = [
  {
    title: "Did a Documentary Just Beat a DC Movie?! + Dead-End Job Reviews Are In + Mario Closes November?!",
    series: "Nightly News",
    label: "Ep 6",
    id: "7wBQ-bC7J0s",
    url: "https://youtu.be/7wBQ-bC7J0s"
  },
  {
    title: "Apocalypse Z: New World — Bigger Hordes, But Is It Better Than Part 1?",
    series: "Reviews",
    id: "VoP6E67g5Pg",
    url: "https://youtu.be/VoP6E67g5Pg"
  },
  {
    title: "Top 10 Horror Movies on Netflix (2026) — Halloween Special",
    series: "Top 10 & Recommendations",
    id: "ccM4G6CMMrQ",
    url: "https://youtu.be/ccM4G6CMMrQ"
  },
  {
    title: "Wednesday Season 3 Is Done Filming — So Where Is The Release Date?",
    series: "Series Updates & Release Dates",
    id: "kea0h3eGreo",
    url: "https://youtu.be/kea0h3eGreo"
  },
  {
    title: "Why Is Wednesday in Paris? Netflix Explained Nothing",
    series: "Shorts",
    id: "AwBtzZ3rWUo",
    url: "https://youtube.com/shorts/AwBtzZ3rWUo"
  },
  {
    title: "Patrick Stewart's Farewell Is Coming + A Job That Pays 50× More + Death Stranding Is Now an Anime?!",
    series: "Nightly News",
    label: "Ep 5",
    id: "Ke3c9xGYtNs",
    url: "https://youtu.be/Ke3c9xGYtNs"
  },
  {
    title: "When Is Avatar Season 3 Releasing? Fans Are Tired of Waiting",
    series: "Series Updates & Release Dates",
    id: "WnfAWzFu4SM",
    url: "https://youtu.be/WnfAWzFu4SM"
  },
  {
    title: "Sir Patrick Stewart (1940–2026) — His Final Performance Is Still To Come",
    series: "Shorts",
    id: "2DyOIXMixq8",
    url: "https://youtube.com/shorts/2DyOIXMixq8"
  },
  {
    title: "Top 10 Space Adventure Movies You Must Watch — #1 Broke Everyone",
    series: "Top 10 & Recommendations",
    id: "_5NztN91fQU",
    url: "https://youtu.be/_5NztN91fQU"
  },
  {
    title: "Jumanji's Game ESCAPED Into Our World + Katniss Is BACK + Lupin Hits No. 1 + Next BOND?",
    series: "Nightly News",
    label: "Ep 4",
    id: "NN_kiIAR-8U",
    url: "https://youtu.be/NN_kiIAR-8U"
  },
  {
    title: "JUMANJI: OPEN WORLD New Trailer — The Rock's New Player Is NOT Who You Think!",
    series: "Shorts",
    id: "abS_RM34ifY",
    url: "https://youtube.com/shorts/abS_RM34ifY"
  },
  {
    title: "Odyssey, Resident Evil & Hope — Where To Watch: OTT, Digital & Streaming Dates (2026)",
    series: "Series Updates & Release Dates",
    id: "HS3sYKyHcAY",
    url: "https://youtu.be/HS3sYKyHcAY"
  },
  {
    title: "Rajinikanth Broke His OWN Record! 🔥 Jailer 2 Beats 2.0",
    series: "Shorts",
    id: "LtTEjD3UqxE",
    url: "https://youtube.com/shorts/LtTEjD3UqxE"
  },
  {
    title: "The Terminal List S2 DETHRONES Stephen King's Carrie at #1 on Prime Video!",
    series: "Shorts",
    id: "TS-iBwEeYBI",
    url: "https://youtube.com/shorts/TS-iBwEeYBI"
  },
  {
    title: "He Attended His Own Press Conference… From The ARMY?! | Dead-End Job (Netflix)",
    series: "Shorts",
    id: "qqhjqALjeSM",
    url: "https://youtube.com/shorts/qqhjqALjeSM"
  },
  {
    title: "DUNE: PART THREE Final Trailer — Chani Is At The Heart Of The Plot Against Paul",
    series: "Series Updates & Release Dates",
    id: "W8nAKqzlPDA",
    url: "https://youtu.be/W8nAKqzlPDA",
    art: "assets/hires/dune-paul.jpg"
  },
  {
    title: "DUNE 3 Final Trailer: His Own Family Is Plotting Against Him + Chris Pratt DETHRONES Stephen King",
    series: "Nightly News",
    label: "Ep 3",
    id: "8Dx_xfStMIo",
    url: "https://youtu.be/8Dx_xfStMIo",
    art: "assets/hires/dune-scytale.jpg"
  },
  {
    title: "BEST MOVIES OF 2026 | 7 New Movies You Can Watch Right Now",
    series: "Top 10 & Recommendations",
    id: "9Ok_xF2Sl5Y",
    url: "https://youtu.be/9Ok_xF2Sl5Y",
    art: "assets/hires/hope-street.jpg"
  },
  {
    title: "HOPE (2026) REVIEW — NO SPOILERS | Is The Most Expensive Korean Movie Ever Worth It?",
    series: "Reviews",
    id: "1QMrg5F1uDA",
    url: "https://youtu.be/1QMrg5F1uDA",
    art: "assets/hires/hope-hero.jpg"
  },
  {
    title: "Jailer 2 BEATS Rajinikanth's Own 2.0 Record! + Keanu Reeves STEALS Reacher Star's Netflix Role",
    series: "Nightly News",
    label: "Ep 2",
    id: "joyxoDfopYQ",
    url: "https://youtu.be/joyxoDfopYQ"
  },
  {
    title: "HOPE Ending Explained — The Monster Was Hiding A Secret + Part 2 Release Date",
    series: "Reviews",
    id: "xZSjVKfHi54",
    url: "https://youtu.be/xZSjVKfHi54",
    art: "assets/hires/hope-car.jpg"
  },
  {
    title: "Sandra Hüller SECRETLY Joins DOOMSDAY + CLAYFACE Sets DC's Worst Record Ever",
    series: "Nightly News",
    label: "Ep 1",
    id: "IewqA7LUvG8",
    url: "https://youtu.be/IewqA7LUvG8"
  },
  {
    title: "A New Alien Movie Is Officially Happening… But It's NOT the Sequel You Expected",
    series: "Shorts",
    id: "DzVEFcW1D8w",
    url: "https://youtube.com/shorts/DzVEFcW1D8w"
  },
  {
    title: "Top 10 Best Heist Movies of All Time — #1 Is a Masterclass in Pure Genius",
    series: "Top 10 & Recommendations",
    id: "n1P43h3lTJ4",
    url: "https://youtu.be/n1P43h3lTJ4"
  },
  {
    title: "All of Us Are Dead Season 2 (2027) — Netflix Just Confirmed What Fans Begged For | Oct 24",
    series: "K-Drama & Netflix",
    id: "rZT0V1chgR8",
    url: "https://youtu.be/rZT0V1chgR8"
  },
  {
    title: "Cerita Lila — 1 Million Watched This Ghost Story... Most Cried 😢",
    series: "Shorts",
    id: "uSmu1x-vW9U",
    url: "https://youtube.com/shorts/uSmu1x-vW9U"
  },
  {
    title: "Cerita Lila (2026) Review — 1 Million People Watched This Ghost Story. Were They Right?",
    series: "Reviews",
    id: "a76pCEWfNmE",
    url: "https://youtu.be/a76pCEWfNmE",
    art: "assets/hires/cerita-house.jpg"
  },
  {
    title: "Severance Season 3 Release Date — Why Apple Won't Announce It",
    series: "Series Updates & Release Dates",
    id: "Tqsed4oVs80",
    url: "https://youtu.be/Tqsed4oVs80",
    art: "assets/hires/severance-keyart.jpg"
  },
  {
    title: "ZENDAYA in EVERY 2026 Movie?! The Odyssey, Spider-Man, Dune 3 — How Is This Possible?",
    series: "Shorts",
    id: "PMdNOw-_4GE",
    url: "https://youtube.com/shorts/PMdNOw-_4GE",
    art: "assets/hires/zendaya-portrait.jpg"
  },
  {
    title: "The Witcher Season 5 Release Date — Why Netflix Is Staying Silent",
    series: "Series Updates & Release Dates",
    id: "p-TYjaGZZfk",
    url: "https://youtu.be/p-TYjaGZZfk",
    art: "assets/hires/witcher-keyart.jpg"
  },
  {
    title: "Top 7 Underrated Web Series (2026) You Missed — #1 Is a Masterpiece",
    series: "Top 10 & Recommendations",
    id: "u5Ijhz7QP10",
    url: "https://youtu.be/u5Ijhz7QP10"
  },
  {
    title: "Top 10 Most Brutal Action Movies 2026 | Statham, Adkins, Bautista, Jackie Chan",
    series: "Top 10 & Recommendations",
    id: "TQd4P1csDO4",
    url: "https://youtu.be/TQd4P1csDO4"
  },
  {
    title: "All of Us Are Dead Season 2 (2027) Update! Oct 24 Netflix Event | Trailupbox",
    series: "K-Drama & Netflix",
    id: "4J5v8O-MVP0",
    url: "https://youtu.be/4J5v8O-MVP0"
  },
  {
    title: "Top 10 Best Movies To Watch Alone 2026 | Netflix, HBO Max, Paramount+ | Trailupbox",
    series: "Top 10 & Recommendations",
    id: "FwMUJIFI7a8",
    url: "https://youtu.be/FwMUJIFI7a8"
  },
];

/* ------------------------------------------------------------
   Release calendar — rendered on release-dates.html and as a
   strip on the home page.
   status: "Confirmed" | "Expected" | "In Production" | "Rumoured"
   ------------------------------------------------------------ */
const RELEASE_DATES = [
  { title: "The Hunger Games: Sunrise on the Reaping", platform: "In Cinemas", window: "20 November 2026", status: "Confirmed" },
  { title: "Dune: Part Three", platform: "In Cinemas", window: "18 December 2026", status: "Confirmed" },
  { title: "Avengers: Doomsday", platform: "In Cinemas", window: "18 December 2026", status: "Confirmed" },
  { title: "The Odyssey", platform: "In Cinemas", window: "17 July 2026", status: "Confirmed" },
  { title: "Spider-Man: Brand New Day", platform: "In Cinemas", window: "31 July 2026", status: "Confirmed" },
  { title: "All of Us Are Dead — Season 2", platform: "Netflix", window: "Early 2027", status: "In Production" },
  { title: "Wednesday — Season 3", platform: "Netflix", window: "2027", status: "In Production" },
  { title: "The Witcher — Season 5 (Final Season)", platform: "Netflix", window: "2027", status: "Expected" },
  { title: "Severance — Season 3", platform: "Apple TV+", window: "Late 2027 (expected)", status: "In Production" }
];
