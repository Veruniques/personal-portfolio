/* =====================================================================
   PORTFOLIO DATA — edit text, images and videos here.
   Desktop positions (x, y) are % of the screen; icons stay draggable.
   ===================================================================== */

window.NOROLL = {
  owner: {
    name: 'Veronika Dominiková',
    short: 'Veru',
    email: 'hello@noroll.studio',            // TODO: confirm address
    linkedin: 'https://www.linkedin.com/in/veronika-dominikova/',
    formspree: 'https://formspree.io/f/mnjrqrkj',
    wallpaper: 'assets/img/wallpaper.jpg',
    portrait: 'assets/img/portrait.jpg',
  },

  /* ---------------- CINEMATIC ---------------- */
  cinematic: [
    {
      id: 'rb-cinema',
      title: 'RB Cinema Spot',
      subtitle: 'AI sponsor spot for cinema',
      vimeo: '1193051888',
      type: 'AI Production > Cinema sponsor spot',
      client: 'RB',
      text: 'An AI-generated sponsor spot built for the big screen. Written, art-directed and generated end to end, then graded for cinema projection.',
      x: 14, y: 20,
    },
    {
      id: 'monoprix',
      title: 'Monoprix',
      subtitle: 'YouTube commercial',
      vimeo: '1193051592',
      type: 'AI Production > YT commercial',
      client: 'Monoprix',
      text: 'A YouTube pre-roll for Monoprix. Short, punchy, made to survive the skip button.',
      x: 27, y: 12,
    },
    {
      id: 'fameplay-voice',
      title: 'Fameplay Voice',
      subtitle: 'AI voice commercial',
      vimeo: '1193052091',
      type: 'AI Production > Voice commercial',
      client: 'Fameplay',
      text: 'A voice-led AI commercial for Fameplay, the home of the Emmy-winning #marty_is_dead.',
      x: 21, y: 38,
    },
    {
      id: 'kofola',
      title: 'Kofola Remake',
      subtitle: 'AI remake of a famous commercial',
      vimeo: '1193051595',
      type: 'AI Production > Remake',
      client: 'Kofola (asked by the original creator)',
      text: 'The original creator of an iconic Kofola commercial asked for an AI remake. Same soul, new pipeline.',
      x: 9, y: 52,
    },
    {
      id: 'rb-hybrid',
      title: 'RB Hybrid',
      subtitle: 'Hybrid production commercial',
      vimeo: '1193051591',
      type: 'Hybrid Production > Live action + AI',
      client: 'RB',
      text: 'Live-action footage meets generated worlds. A hybrid production where you stop asking which shot is real.',
      x: 30, y: 58,
    },
    {
      id: 'ppas',
      title: 'PPAS',
      subtitle: 'TV commercial',
      vimeo: '1193053922',
      type: 'AI Production > TV commercial',
      client: 'PPAS',
      text: 'A broadcast TV spot produced with AI, built to air next to traditionally shot ads and hold its own.',
      x: 17, y: 72,
    },
  ],

  /* ---------------- PRODUCT DESIGN ----------------
     Case studies. chapters[].images[]: {src, alt, size: full|half|third, full?}
     `full` = full-length image shown in the lightbox (tall web pages).
     ------------------------------------------------- */
  product: [
    {
      "id": "kiwi",
      "title": "Kiwi.com",
      "subtitle": "Product Design Team Lead · Ancillaries · 2022–2024",
      "type": "Product Design > Strategy, UX/UI, design leadership",
      "client": "Kiwi.com",
      "cover": "assets/img/work/cover-kiwi.jpg",
      "hero": "assets/img/work/kiwi-hero.jpg",
      "heroAlt": "Kiwi.com mobile screens: bundles, Guarantee, booking, insurance, seat map",
      "facts": [
        [
          "~70%",
          "of Kiwi.com revenue sits in the ancillaries domain"
        ],
        [
          "3",
          "platforms: web, responsive, iOS + Android"
        ],
        [
          "10+",
          "products: bags, seats, insurance, Guarantee, fare types, bundles…"
        ],
        [
          "100s",
          "of screens across search, booking and post-booking"
        ]
      ],
      "problem": "Ancillaries are everything you buy on top of a flight. Bags, seats, AXA insurance, Kiwi.com Guarantee, Price Lock, fare types, service packages, bundles, Booking.com and Rentalcars. Each had its own team and its own idea of where to upsell. The business needed more revenue from it, the company was reorganising ownership mid-flight, and nobody had the full picture.",
      "text": "I took over the design team mid-reorg and co-led the domain with product and engineering. Everything below came out of design jams I ran with designers, PMs, engineers and, regularly, C-level. And a lot of it I designed with my own hands.",
      "decisions": [
        "One upsell moment per product per stage, triggered by context (first MMB visit, before check-in when bags or seats are still available, after a schedule change), not by banner real estate",
        "Business rules live in the design, not in a spreadsheet next to it: Price Lock only shows when the fare margin clears a threshold, different for B2C and B2B2C",
        "Friction designed on purpose: the “are you sure” moments were mapped and made consistent instead of each team inventing its own"
      ],
      "quote": {
        "text": "She joined during a critical phase when the product team was under massive pressure to change its modus operandi, scale our ancillary offering, and achieve ambitious targets… Her facilitation skills enabled her to engage directly with C-level executives in frequent working sessions.",
        "who": "Vladimir Končar, VP of Design and Research, Kiwi.com"
      },
      "role": [
        "Co-led the domain with product and engineering leads",
        "Led 3 product designers, a content designer and a UX researcher",
        "Facilitated design jams and working sessions with PMs, engineering and C-level",
        "Hands-on on the key flows, with a strong focus on visual design",
        "Hiring, feedback and growth of the team"
      ],
      "chapters": [
        {
          "id": "journey",
          "title": "The map",
          "kicker": "Ancillaries across the whole journey",
          "text": "Every ancillary touchpoint on one wall: Search → Booking → Post-booking, in two maps (desktop + responsive, and native). Each touchpoint shows the current state next to the proposal, with the conditions that change it: Tier 1 vs other markets, B2C vs B2B2C, signed in vs out. It became the reference for roadmap and ownership discussions when products moved between teams.",
          "images": [
            {
              "src": "assets/img/work/kiwi-journey-desktop.jpg",
              "w": 2000,
              "h": 166,
              "alt": "Desktop and responsive customer journey map, full width",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-journey-native.jpg",
              "w": 2000,
              "h": 250,
              "alt": "Native app customer journey map, full width",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-journey-search.jpg",
              "w": 2000,
              "h": 580,
              "alt": "Journey map detail: search and homepage touchpoints",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-journey-booking.jpg",
              "w": 2000,
              "h": 382,
              "alt": "Journey map detail: booking touchpoints",
              "size": "full"
            }
          ]
        },
        {
          "id": "booking",
          "title": "Booking flow",
          "kicker": "Search to summary",
          "text": "The core flow every ancillary lives inside: search, trip details, ticket fare, baggage, Kiwi.com services, summary. Consistent across web and native.",
          "images": [
            {
              "src": "assets/img/work/kiwi-booking-flow.jpg",
              "w": 2000,
              "h": 748,
              "alt": "Mobile booking flow: search, trip details, ticket fare, baggage, services, summary",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-desktop-home.jpg",
              "w": 1722,
              "h": 1134,
              "alt": "Desktop homepage and search results",
              "size": "full"
            }
          ]
        },
        {
          "id": "bundles",
          "title": "Bundles",
          "kicker": "Light, Comfort, All in",
          "text": "Bundles package bags, seats and flexibility into one choice and one discount. I led the iterations after the MVP: upgrades triggered by intent (pick a bag, get offered the bundle that already includes it), a “finding you discounts” moment tested in three versions, seats in bundles with a colour-coded seat map and a mandatory seat step, and the edge cases nobody wants to discover in production: removing a bundle, adding a passenger after an upgrade, infants, multi-traveller seating.",
          "images": [
            {
              "src": "assets/img/work/kiwi-bundles-mobile.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Bundle selection on mobile: Light, Comfort, All in, discount prompt",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-bundles-desktop.jpg",
              "w": 1722,
              "h": 1214,
              "alt": "Bundles on desktop with comparison modal",
              "size": "half"
            },
            {
              "src": "assets/img/work/kiwi-bundles-seatmap.jpg",
              "w": 1260,
              "h": 1158,
              "alt": "Seat map with seats included in the bundle",
              "size": "half"
            },
            {
              "src": "assets/img/work/kiwi-bundles-upgrades.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Bundle upgrade offers triggered by bag selection",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-seating-bags.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Seating and baggage screens",
              "size": "full"
            }
          ]
        },
        {
          "id": "fare-families",
          "title": "Fare Families",
          "kicker": "Airline partnerships, end-to-end ownership",
          "text": "Kiwi.com started selling airlines’ own fare families (Light, Standard, Flex…) for Air France-KLM, Lufthansa and Virgin Atlantic. Each airline has different rules for bags, seats, changes and refunds. My project from the first sketch to handoff: phase 1 desktop MVP, then responsive and native, including the parts nobody wants to design: refunds, assisted refunds, changes that can’t be done automatically, and the customer-service tool.",
          "list": [
            "Baggage allowance and seat-map states come from the fare attributes, so the UI never promises what the ticket doesn’t include",
            "Fare conditions tested as a modal vs a dedicated page vs FAQ. Short version in the flow, full airline text one tap away",
            "Recommended fare: two scenarios, five variants",
            "Kept “search for a new trip” as the main post-booking path where data showed high conversion back to search"
          ],
          "images": [
            {
              "src": "assets/img/work/kiwi-ff-desktop.jpg",
              "w": 1722,
              "h": 1214,
              "alt": "Fare family comparison and recommended-fare modal on desktop",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-ff-mobile.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Fare families and Kiwi.com services on mobile",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-ff-desktop2.jpg",
              "w": 1722,
              "h": 1214,
              "alt": "Desktop service packages and fare details",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-ff-postbooking.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Post-booking: trip overview, changes, rebooking",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-ff-refunds.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Refunds, price breakdown and checkout",
              "size": "full"
            }
          ]
        },
        {
          "id": "protection",
          "title": "Insurance & protection",
          "kicker": "AXA, Kiwi.com Guarantee, AirHelp",
          "text": "Hypothesis: better merchandising of AXA insurance improves product communication and attachment rates. Unbundled products, per-passenger selection, a clear “no insurance” option and policy details people can actually read. I led this stream and co-designed it with the team, together with Kiwi.com Guarantee and AirHelp placements.",
          "images": [
            {
              "src": "assets/img/work/kiwi-insurance.jpg",
              "w": 2000,
              "h": 888,
              "alt": "AXA travel insurance on mobile",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-protection.jpg",
              "w": 2000,
              "h": 888,
              "alt": "Kiwi.com Guarantee, AirHelp and insurance in Manage My Booking",
              "size": "full"
            },
            {
              "src": "assets/img/work/kiwi-insurance-desktop.jpg",
              "w": 1260,
              "h": 1394,
              "alt": "Insurance step on desktop",
              "size": "full"
            }
          ]
        },
        {
          "id": "post-booking",
          "title": "Post-booking & email",
          "kicker": "Components, confirmations, boarding documents",
          "text": "The quiet half of ancillaries: Manage My Booking, transactional emails, e-tickets and boarding documents. Audited and redesigned as one component set used across web, apps and email.",
          "images": [
            {
              "src": "assets/img/work/kiwi-components.jpg",
              "w": 1800,
              "h": 1579,
              "alt": "Ancillary component set: baggage, seating, lounges, accommodation, car rental",
              "size": "half"
            },
            {
              "src": "assets/img/work/kiwi-emails.jpg",
              "w": 1800,
              "h": 1771,
              "alt": "Booking confirmation email templates",
              "size": "half"
            },
            {
              "src": "assets/img/work/kiwi-boarding.jpg",
              "w": 1800,
              "h": 1138,
              "alt": "Boarding documents email templates",
              "size": "full"
            }
          ]
        }
      ],
      "x": 66,
      "y": 16
    },
    {
      "id": "keboola",
      "title": "Keboola",
      "subtitle": "Product Design Lead · 2020–2022",
      "type": "Product Design > Data platform, B2B + B2C, web, brand",
      "client": "Keboola",
      "cover": "assets/img/work/cover-keboola.jpg",
      "hero": "assets/img/work/kbc-hero.jpg",
      "heroAlt": "Keboola UI 2.0: dashboard and jobs overview",
      "facts": [
        [
          "0 → 1",
          "research program and data tracking"
        ],
        [
          "UI 2.0",
          "dashboard, project overview, data catalog"
        ],
        [
          "30+",
          "website pages designed"
        ],
        [
          "50+",
          "illustrations and campaign visuals"
        ]
      ],
      "problem": "Keboola is a data platform built by and for data engineers. Then it launched pay-as-you-go for people who are not data engineers. No research, no tracking, no design process. And a UI where Storage, Transformations and Workspaces each behaved differently.",
      "text": "I joined as the brand and web designer and became the product design lead. I built the process first, then the product. And kept the brand and the website, because nobody else was going to.",
      "role": [
        "Built data-driven product development from scratch",
        "Set up the user research program",
        "Championed UX against technical constraints",
        "Owned the website (Webflow), illustration system and launch campaigns"
      ],
      "chapters": [
        {
          "id": "ui",
          "title": "Product UI 2.0",
          "kicker": "Dashboard, jobs, transformations, workspaces",
          "text": "One pattern for columns, search and the three-dot menu across Storage, Transformations and Workspaces. Real use cases mapped (workspace from storage, transformation from workspace, and back) with warnings where users could lose work. Pay-as-you-go onboarding: a dashboard with 8 states that adapts to what the user has already done.",
          "images": [
            {
              "src": "assets/img/work/kbc-ux-17.jpg",
              "w": 1436,
              "h": 1276,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-12.jpg",
              "w": 1400,
              "h": 1244,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-0.jpg",
              "w": 1400,
              "h": 944,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-4.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-6.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-8.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-9.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-18.jpg",
              "w": 1400,
              "h": 1244,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-23.jpg",
              "w": 1400,
              "h": 1299,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-25.jpg",
              "w": 1400,
              "h": 1394,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-32.jpg",
              "w": 1400,
              "h": 957,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-ux-33.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola UI 2.0 screen",
              "size": "half"
            }
          ]
        },
        {
          "id": "storage",
          "title": "Storage & data catalog",
          "kicker": "Earlier product work",
          "text": "Bucket and table overviews, events, data samples, schema, lineage graph, project picker. Dev/prod branches, project diff and merge requests for the engineers who live in the tool.",
          "images": [
            {
              "src": "assets/img/work/kbc-old-1.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-2.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-3.jpg",
              "w": 1400,
              "h": 1108,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-4.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-9.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            },
            {
              "src": "assets/img/work/kbc-old-12.jpg",
              "w": 1400,
              "h": 1053,
              "alt": "Keboola storage screen",
              "size": "half"
            }
          ]
        },
        {
          "id": "web",
          "title": "Website",
          "kicker": "31 pages, built in Webflow",
          "text": "Homepage, product, solutions, pricing, comparison, academy, webinars, blog, careers and landing pages for every campaign. Click any page to see it in full.",
          "images": [
            {
              "src": "assets/img/work/kbc-web-0.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-0-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-6.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-6-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-9.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-9-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-15.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-15-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-17.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-17-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-19.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-19-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-24.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-24-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-32.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-32-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-33.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-33-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-34.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-34-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-35.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-35-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-37.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-37-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-38.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-38-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-42.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-42-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-43.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-43-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-44.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-44-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-45.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-45-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-46.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-46-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-47.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-47-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-49.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-49-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-50.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-50-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-54.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-54-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-56.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-56-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-57.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-57-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-63.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-63-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-66.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-66-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-67.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-67-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-70.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-70-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-71.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-71-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-72.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-72-full.jpg"
            },
            {
              "src": "assets/img/work/kbc-web-73.jpg",
              "w": 900,
              "h": 1125,
              "alt": "Keboola website page",
              "size": "third",
              "full": "assets/img/work/kbc-web-73-full.jpg"
            }
          ]
        },
        {
          "id": "brand",
          "title": "Campaign & illustration",
          "kicker": "Pay-as-you-go launch",
          "text": "An illustration system and the campaign that launched pay-as-you-go: ads, social, guides.",
          "images": [
            {
              "src": "assets/img/work/kbc-campaign.jpg",
              "w": 2000,
              "h": 1237,
              "alt": "Keboola campaign visuals",
              "size": "full"
            },
            {
              "src": "assets/img/work/kbc-illustration-pack.jpg",
              "w": 2000,
              "h": 2036,
              "alt": "Keboola illustration pack",
              "size": "full"
            }
          ]
        }
      ],
      "x": 80,
      "y": 30
    },
    {
      "id": "pflb",
      "title": "PFLB",
      "subtitle": "Website + load-testing platform",
      "type": "Web & Product Design > B2B SaaS, developer tool",
      "client": "PFLB (boomq.io)",
      "cover": "assets/img/work/cover-pflb.jpg",
      "hero": "assets/img/work/pflb-hero.jpg",
      "heroAlt": "PFLB website: homepage, pricing and features pages",
      "facts": [
        [
          "18",
          "page templates in the website"
        ],
        [
          "1",
          "visual system for site and product"
        ],
        [
          "2",
          "products: the platform and the services"
        ]
      ],
      "problem": "PFLB sells two things at once: a self-service load-testing platform and expert performance-testing services. The old site sold neither well. Developers want docs, pricing and a free trial; enterprise buyers want proof, process and a person to talk to.",
      "text": "I designed the new PFLB website end to end: information architecture, page templates and the visual system, plus the product UI of the platform behind it.",
      "chapters": [
        {
          "id": "web",
          "title": "Website",
          "kicker": "Platform, services, insights",
          "text": "Two journeys on one site. Platform: features, pricing, enterprise, docs, tutorials, releases, sign-up. Services: why PFLB, how we work, service and challenge templates, case studies. Insights: blog and articles. Click any page to see it in full.",
          "images": [
            {
              "src": "assets/img/work/pflb-home.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Homepage",
              "size": "third",
              "full": "assets/img/work/pflb-home-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-platform.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Platform",
              "size": "third",
              "full": "assets/img/work/pflb-platform-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-solutions.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Solutions",
              "size": "third",
              "full": "assets/img/work/pflb-solutions-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-pricing.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Pricing",
              "size": "third",
              "full": "assets/img/work/pflb-pricing-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-features.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Features",
              "size": "third",
              "full": "assets/img/work/pflb-features-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-why.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Why PFLB",
              "size": "third",
              "full": "assets/img/work/pflb-why-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-enterprise.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Enterprise",
              "size": "third",
              "full": "assets/img/work/pflb-enterprise-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-howwework.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: How we work",
              "size": "third",
              "full": "assets/img/work/pflb-howwework-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-service.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Service template",
              "size": "third",
              "full": "assets/img/work/pflb-service-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-docs.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Documentation",
              "size": "third",
              "full": "assets/img/work/pflb-docs-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-tutorials.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Tutorials",
              "size": "third",
              "full": "assets/img/work/pflb-tutorials-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-releases.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Releases",
              "size": "third",
              "full": "assets/img/work/pflb-releases-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-blog.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Blog",
              "size": "third",
              "full": "assets/img/work/pflb-blog-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-article.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Article",
              "size": "third",
              "full": "assets/img/work/pflb-article-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-contacts.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Contacts",
              "size": "third",
              "full": "assets/img/work/pflb-contacts-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-signup.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Sign up",
              "size": "third",
              "full": "assets/img/work/pflb-signup-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-getintouch.jpg",
              "w": 900,
              "h": 1125,
              "alt": "PFLB website: Get in touch",
              "size": "third",
              "full": "assets/img/work/pflb-getintouch-full.jpg"
            },
            {
              "src": "assets/img/work/pflb-menu.jpg",
              "w": 900,
              "h": 880,
              "alt": "PFLB website: Mega menu",
              "size": "third",
              "full": "assets/img/work/pflb-menu-full.jpg"
            }
          ]
        },
        {
          "id": "platform",
          "title": "Platform (boomq)",
          "kicker": "Load testing without JMeter scripts",
          "text": "Test editor and thread groups, load profile, pacing, SLA, test runs, reports and trends. Every load-profile parameter updates a live chart of the load shape, so you see the load before you run it. Reports work as a list, not an archive: filters, labels, “show only mine”, duplicate and edit in place.",
          "images": [
            {
              "src": "assets/img/pflb-1.jpg",
              "w": 1139,
              "h": 1050,
              "alt": "Load profile editor with live load-shape preview",
              "size": "half"
            },
            {
              "src": "assets/img/pflb-2.jpg",
              "w": 1195,
              "h": 1000,
              "alt": "Reports list with filters and labels",
              "size": "half"
            },
            {
              "src": "assets/img/pflb-3.jpg",
              "w": 966,
              "h": 352,
              "alt": "Client platform flow",
              "size": "full"
            }
          ]
        }
      ],
      "x": 70,
      "y": 46
    },
    {
      "id": "extras",
      "title": "More visual work",
      "subtitle": "Brand, identity, campaigns",
      "type": "Brand & visual design",
      "client": "Various",
      "cover": "assets/img/work/cover-extras.jpg",
      "hero": "assets/img/work/x-fameplay-0.jpg",
      "heroAlt": "Fameplay brand elements",
      "text": "The other half of the brain. Identities, campaign systems and posters, mostly for small teams that needed a whole brand, not just a logo.",
      "chapters": [
        {
          "id": "fameplay",
          "title": "Fameplay",
          "kicker": "AI studio brand & campaigns",
          "text": "Brand elements, type, icon set, the Avatar Pioneers event series with HeyGen, and campaign visuals.",
          "images": [
            {
              "src": "assets/img/work/x-fameplay-0.jpg",
              "w": 1600,
              "h": 3222,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-fameplay-1.jpg",
              "w": 1600,
              "h": 3389,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-fameplay-19.jpg",
              "w": 1600,
              "h": 3636,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-fameplay-20.jpg",
              "w": 1600,
              "h": 1439,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-fameplay-23.jpg",
              "w": 1600,
              "h": 836,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-fameplay-27.jpg",
              "w": 1600,
              "h": 836,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-fameplay-43.jpg",
              "w": 1418,
              "h": 1418,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-fameplay-44.jpg",
              "w": 1600,
              "h": 2125,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-fameplay-45.jpg",
              "w": 1600,
              "h": 2125,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-fameplay-51.jpg",
              "w": 1600,
              "h": 1600,
              "alt": "Fameplay brand and campaign visual",
              "size": "third"
            }
          ]
        },
        {
          "id": "kurnik",
          "title": "Kurník Šopa",
          "kicker": "Café identity",
          "text": "A hand-drawn identity for a small café: the hen, the type, the menu, the merch.",
          "images": [
            {
              "src": "assets/img/work/x-kurnik-0.jpg",
              "w": 1600,
              "h": 1602,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-3.jpg",
              "w": 1600,
              "h": 900,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-4.jpg",
              "w": 1600,
              "h": 900,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-7.jpg",
              "w": 1600,
              "h": 1600,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-18.jpg",
              "w": 1600,
              "h": 2000,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-21.jpg",
              "w": 1600,
              "h": 1680,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-24.jpg",
              "w": 1600,
              "h": 1680,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-34.jpg",
              "w": 1600,
              "h": 1035,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-40.jpg",
              "w": 1600,
              "h": 2845,
              "alt": "Kurník Šopa identity",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-kurnik-41.jpg",
              "w": 1600,
              "h": 2845,
              "alt": "Kurník Šopa identity",
              "size": "third"
            }
          ]
        },
        {
          "id": "peaq",
          "title": "Beyond PEAQ",
          "kicker": "Outdoor brand concept",
          "text": "Social and campaign visuals for an outdoor lifestyle brand.",
          "images": [
            {
              "src": "assets/img/work/x-peaq-20.jpg",
              "w": 1600,
              "h": 2134,
              "alt": "Beyond PEAQ visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-peaq-22.jpg",
              "w": 1600,
              "h": 2134,
              "alt": "Beyond PEAQ visual",
              "size": "third"
            },
            {
              "src": "assets/img/work/x-peaq-26.jpg",
              "w": 1600,
              "h": 2134,
              "alt": "Beyond PEAQ visual",
              "size": "third"
            }
          ]
        }
      ],
      "x": 84,
      "y": 62
    }
  ],

  // old deep links → new case + chapter
  redirects: { 'kiwi-ancillaries': 'kiwi', 'kiwi-fare-families': 'kiwi/fare-families', 'kiwi-bundles': 'kiwi/bundles' },

  /* ---------------- ABOUT ---------------- */
  about: {
    intro: [
      'I believe that design approached with modern technology and creativeness is a masterpiece. Carrying that in my mind, I design digital products, apps and websites across many fields, and lately I direct AI films.',
      'Being born and raised in a business environment while owning a company, I know product development, team approach and methodology (agile), client-facing work and leadership from the inside.',
      'In the field since 2018.',
    ],
    canDo: [
      'AI cinematic production',
      'Creative direction',
      'Product design (UX, UI)',
      'User research',
      'Design systems',
      'Design team leadership',
      'Web design & development',
      'Brand design',
      'Prototyping',
      'Storytelling & art direction',
    ],
    cv: [
      { when: '2026 – now',  what: 'Creative Director & Founder', where: 'NO ROLL studio' },
      { when: '2024 – 2026', what: 'AI Creative Director', where: 'Fameplay, Prague' },
      { when: '2024',        what: 'Career break: teaching first aid & mountaineering', where: 'Nepal' },
      { when: '2022 – 2024', what: 'Product Design Team Lead, Ancillaries', where: 'Kiwi.com' },
      { when: '2021 – 2022', what: 'Product Design Lead', where: 'Keboola' },
      { when: '2020 – 2021', what: 'Designer, Web & Brand', where: 'Keboola' },
      { when: '2020 – 2026', what: 'Freelance Creative', where: 'Remote' },
      { when: '2019 – 2020', what: 'Senior Product Designer', where: 'SinnerSchrader, Frankfurt / Prague' },
      { when: '2018 – 2019', what: 'CMO', where: 'CloseIT, Brno' },
      { when: '2016 – 2018', what: 'Co-Founder & CCO', where: 'Naash, France' },
    ],
    references: [
      {
        text: 'Veronika joined our ancillary design team during a critical phase when the product team was under massive pressure to change its modus operandi, scale our ancillary offering, and achieve ambitious targets. Despite the challenges, she demonstrated remarkable resilience, effectively guiding a team of three product designers, a content designer, and a UX researcher… Her facilitation skills enabled her to collaborate with product managers and engage directly with C-level executives in frequent working sessions. Veronika also demonstrated hands-on product design skills with an emphasis on visual design.',
        who: 'Vladimir Končar',
        role: 'VP of Design and Research, Kiwi.com',
      },
      {
        text: 'I want to highlight Veronika’s consistent display of a combination of users’ empathy and contribution to the business goals. Throughout her time in our domain, she skillfully managed to take over an existing team of product designers and participated in domain leadership with the product and engineering counterparts.',
        who: 'Michal Šindelář',
        role: 'VP of Product, Kiwi.com',
      },
    ],
    fameplay: 'I joined the team awarded the first Emmy Award in Czech history for the original series #marty_is_dead. I produce and create AI cinematic videos combining storytelling, art direction and advanced AI workflows, focused on visuals that elevate products, services and ideas beyond standard AI content.',
    tools: [
      'ComfyUI', 'Weavy', 'Nano Banana Pro', 'Seedream Pro', 'LoRA', 'Midjourney',
      'Topaz', 'Kling', 'Higgsfield', 'DaVinci Resolve', 'ElevenLabs', 'Photoshop',
      'Figma', 'Webflow',
    ],
  },
};
