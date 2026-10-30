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
    slug: "dune-part-three-final-trailer-news-wrap",
    title: "Dune: Part Three's Final Trailer Puts a Target on the Emperor — and Chris Pratt Just Took Stephen King's Crown",
    category: "News",
    date: "2026-10-29",
    excerpt:
      "The most powerful man in the universe just found out the plot to kill him runs through his own family. Plus a streaming king dethroned in six days, a record box-office run hitting its first speed bump, and a Friday so stacked you will need a plan.",
    image: "assets/hires/dune-chani.jpg",
    youtubeId: "8Dx_xfStMIo",
    featured: true,
    tags: ["Dune Part Three", "News Wrap", "Box Office", "Netflix", "Prime Video"],
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
