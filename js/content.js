// ============================================================
// NEXUS — Build Like a Startup
// FILE: js/content.js
// PURPOSE: All stage explanation content stored as key-value pairs
// ============================================================

const INTRO_SLIDES = [
  {
    title: "Introduction & AI Engineering",
    icon: "fa-solid fa-robot",
    color: "#4F46E5",
    content: `Welcome! If you've never built a real tech product before, this session will teach you how to go from absolutely nothing to a live, working web app using Artificial Intelligence.
    <br><br>
    <strong>What is Prompt Engineering?</strong> AI models (like ChatGPT or Claude) read text in chunks called <em>tokens</em>. If you say "build me an app", the AI has to guess what you mean and usually gives a generic, useless answer. Prompt Engineering is the skill of giving the AI exact, structured instructions so it acts like a professional developer instead of a chatbot. By giving the AI a specific <strong>Role</strong>, <strong>Context</strong>, and <strong>Format</strong>, you can generate production-ready code in seconds.`
  },
  {
    title: "Market Impact on Developers",
    icon: "fa-solid fa-chart-line",
    color: "#0D9488",
    content: `Many beginners learn to code, build a project, and then wonder why nobody uses it. This happens because they build in a vacuum.
    <br><br>
    <strong>The Reality:</strong> People don't care about your code; they care if you solve their problem. A "Market" is just a group of people who share the same frustration. Before writing any code, professional developers research their market. They figure out exactly who they are building for, what those people hate about current solutions, and how to build something significantly better. We will teach you how to analyze a market using AI so you know your product will be used before you even start building.`
  },
  {
    title: "Branding, SEO & Lighthouse",
    icon: "fa-solid fa-palette",
    color: "#DB2777",
    content: `A brand is what makes people trust your product instantly. You don't need to be a designer to create one.
    <br><br>
    <strong>The Brand Kit:</strong> Every project needs a consistent color palette and fonts. <strong>Tools to use:</strong> <a href="https://looka.com" target="_blank" style="color:var(--accent)">Looka</a> (for instant logos), <a href="https://canva.com" target="_blank" style="color:var(--accent)">Canva</a> (for quick graphics), <a href="https://figma.com" target="_blank" style="color:var(--accent)">Figma</a> (for web design), and <a href="https://fonts.google.com" target="_blank" style="color:var(--accent)">Google Fonts</a>.
    <br><br>
    <strong>SEO & Web Vitals:</strong> SEO (Search Engine Optimization) is how Google finds your site. The <code>&lt;title&gt;</code> tag in your code is the headline Google shows in search results. If it's bad, no one clicks. We also use a tool called <strong>Chrome Lighthouse</strong> to check if our site loads fast (First Contentful Paint) and doesn't glitch while scrolling (Cumulative Layout Shift).`
  },
  {
    title: "UI/UX: Anatomy of a Web Page",
    icon: "fa-solid fa-layer-group",
    color: "#D97706",
    content: `Every successful website follows the exact same psychological structure. It guides a visitor from "What is this?" to "I want this."
    <br><br>
    <strong>The Anatomy of a Homepage:</strong>
    <ul style="margin-top: 8px; padding-left: 20px; line-height: 1.6;">
      <li><strong>Header/Hero:</strong> The very top section. A big headline explaining your value in 5 seconds.</li>
      <li><strong>Trust Bar:</strong> Logos of companies or people using it.</li>
      <li><strong>Pain–Solution:</strong> Point out their problem, then introduce your product as the cure.</li>
      <li><strong>How It Works:</strong> 3 simple steps explaining how to use it.</li>
      <li><strong>Product Deep Dive & Use Cases:</strong> Detailed features.</li>
      <li><strong>Testimonials & Pricing:</strong> Proof that it works, and what it costs.</li>
      <li><strong>FAQ & Final CTA (Call to Action):</strong> Answering doubts and asking them to sign up.</li>
    </ul>`
  },
  {
    title: "Technical Architecture",
    icon: "fa-solid fa-server",
    color: "#059669",
    content: `To build modern apps quickly, we use a specific combination of technologies called a "Tech Stack."
    <br><br>
    <strong>The Beginner-Friendly Startup Stack:</strong>
    <ul style="margin-top: 8px; padding-left: 20px; line-height: 1.6;">
      <li><strong>Next.js & React:</strong> The framework that builds our user interface. It makes clicking between pages lightning fast.</li>
      <li><strong>Tailwind CSS:</strong> A tool that lets us style our website (colors, spacing, sizes) directly in our HTML code without writing complex CSS files.</li>
      <li><strong>Supabase:</strong> Our database. It stores user accounts and app data securely.</li>
      <li><strong>Vercel / Render:</strong> The platform that takes our code and puts it live on the internet.</li>
    </ul>`
  },
  {
    title: "Deployment & Hosting (Render)",
    icon: "fa-solid fa-rocket",
    color: "#8B5CF6",
    content: `Deployment is how you get your project off your laptop and onto the live internet for anyone to see. We use a platform called <strong>Render</strong>.
    <br><br>
    <div style="display:flex; align-items:center; justify-content:space-between; background:var(--bg); padding:16px 24px; border-radius:var(--r-md); margin: 16px 0; border: 1px solid var(--border);">
      <div style="text-align:center;"><i class="fa-brands fa-github fa-2x" style="color:var(--text)"></i><br><small style="font-weight:600;margin-top:4px;display:block">1. GitHub</small></div>
      <i class="fa-solid fa-arrow-right" style="color:var(--text3)"></i>
      <div style="text-align:center;"><i class="fa-solid fa-cloud-arrow-up fa-2x" style="color:#059669"></i><br><small style="font-weight:600;margin-top:4px;display:block">2. Render Build</small></div>
      <i class="fa-solid fa-arrow-right" style="color:var(--text3)"></i>
      <div style="text-align:center;"><i class="fa-solid fa-terminal fa-2x" style="color:#D97706"></i><br><small style="font-weight:600;margin-top:4px;display:block">3. Logs</small></div>
      <i class="fa-solid fa-arrow-right" style="color:var(--text3)"></i>
      <div style="text-align:center;"><i class="fa-solid fa-globe fa-2x" style="color:#4F46E5"></i><br><small style="font-weight:600;margin-top:4px;display:block">4. Live URL</small></div>
    </div>
    <strong>How it works:</strong> You save your code to <strong>GitHub</strong>. Render detects this, downloads your code, and starts a <strong>Build</strong>. While building, Render generates <strong>Logs</strong> (a terminal screen showing what the server is doing behind the scenes). If there are errors, you read the logs to fix them. Once successful, Render gives you a <strong>Live URL</strong> that you can share with the world!`
  }
];

const STAGE_CONTENT = [
  {
    num: 1,
    title: "Idea Refinement",
    subtitle: "Turn a raw idea into a clear opportunity statement",
    tag: "Foundation",
    agent: "Innovation Agent",
    colorKey: "accent",

    // WHY section — shown at top of explanation tab
    why: `Most students jump straight to building. They have an idea on Monday, open VS Code on Tuesday, and abandon the project by Friday — because they realised they had no real plan. The Idea Refinement stage forces you to slow down for ten minutes and ask: is this actually a real problem worth solving?`,

    // IMPORTANCE — highlighted block at bottom
    importance: `This single stage determines whether you build something people want or something only you care about. Every successful startup begins with deep problem understanding — not with a feature list. The HMW framework and opportunity scoring give you a structured way to evaluate your idea before investing hours of work.`,

    // KEY CONCEPT CARDS
    cards: [
      {
        icon: "fa-solid fa-bullseye",
        title: "Problem first, solution second",
        text: "Traditional projects start with 'I want to build an app that...'. Founders start with 'People are suffering from this problem and no one has solved it properly yet.'"
      },
      {
        icon: "fa-solid fa-chart-bar",
        title: "The scoring rubric",
        text: "Rate your idea across 5 dimensions: Desirability, Relevance, Innovation, Feasibility, and Market Opportunity (0–5 each). A score table removes emotion from the decision."
      },
      {
        icon: "fa-solid fa-rotate",
        title: "HMW reframing",
        text: "How Might We (HMW) statements reframe problems as opportunities. 'Students miss deadlines' becomes 'How might we help students never miss a deadline in a way that feels effortless?'"
      },
      {
        icon: "fa-solid fa-trophy",
        title: "Pick the best, not the first",
        text: "Generate 5 different product ideas from your opportunity statement, score them all, and pick the strongest one. Most people ship idea #1. Builders who think like founders ship idea #5."
      }
    ],

    // MINDSET SHIFT comparison
    studentMindset: [
      "Start coding immediately after getting the idea",
      "Build for yourself without validating the problem",
      "Pick the most impressive-sounding idea, not the most needed",
      "Skip defining the target user because 'everyone needs this'"
    ],
    founderMindset: [
      "Write the problem in one sentence before writing any code",
      "Validate with real people — even 3 conversations change everything",
      "Use the scoring rubric to kill weak ideas early and confidently",
      "Define exactly who suffers from this problem and why current solutions fail them"
    ],

    liveExercise: {
      title: "The Idea Teardown",
      duration: "5 mins",
      description: "Ask a volunteer to share their raw app idea. Ask them: 'Who exactly is suffering from this right now?' and 'How are they solving it today without your app?' Show the audience how fast an idea falls apart if there is no real pain."
    },

    // EXTRA NOTES — editable container (add your own points here)
    extraHeading: "Session Notes",
    extraParagraph: "Use this space to add your own observations, live examples, or discussion points for this stage during the session.",
    extraPoints: [
      "Ask students to share their raw idea out loud before refining it",
      "Run a quick live poll: how many had an idea but never validated it?"
    ]
  },

  {
    num: 2,
    title: "Market Analysis",
    subtitle: "Validate the opportunity with real data and research",
    tag: "Analysis",
    agent: "Research Agent",
    colorKey: "teal",

    why: `Building without market analysis is like opening a restaurant without knowing if people in that area are hungry. You might make the best food in the world — but if there's no demand, or the market is dominated by a giant competitor, you're done before you start.`,

    importance: `Market analysis gives you three things: proof that the problem is real at scale (TAM/SAM/SOM), an honest picture of who you're competing with, and a deep understanding of the exact person you're building for. These three things guide every decision from this point forward — what to build, how to position it, and who to build it for.`,

    cards: [
      {
        icon: "fa-solid fa-chart-line",
        title: "TAM / SAM / SOM",
        text: "Total Addressable Market → Serviceable Available Market → Serviceable Obtainable Market. This tells you if the opportunity is worth pursuing and what realistic growth looks like in year 1."
      },
      {
        icon: "fa-solid fa-magnifying-glass",
        title: "Competitive Analysis",
        text: "Map your 3–5 biggest competitors honestly: their strengths, weaknesses, pricing, and GTM strategy. The gaps in their weaknesses are your opportunities."
      },
      {
        icon: "fa-solid fa-user",
        title: "User Persona",
        text: "One detailed fictional user built from real research. Name, age, job, frustrations, goals, where they spend time online. Every design and build decision gets filtered through this person."
      },
      {
        icon: "fa-solid fa-pen-nib",
        title: "Content generation",
        text: "This stage ends with generating all website copy — headlines, feature cards, CTAs, testimonials — so you never have placeholder text when you build the actual product."
      }
    ],

    studentMindset: [
      "Skip research and assume you know the market",
      "Pick arbitrary competitor examples without actually studying them",
      "Build for 'everyone' instead of one specific person",
      "Launch with placeholder 'Lorem ipsum' content in the product"
    ],
    founderMindset: [
      "Run TAM/SAM/SOM with real numbers and documented assumptions",
      "Study competitor weaknesses in user reviews and app store feedback",
      "Build one detailed persona from real conversations with target users",
      "Generate all content before writing a single line of UI code"
    ],

    liveExercise: {
      title: "Back-of-the-Napkin TAM",
      duration: "3 mins",
      description: "Take the volunteer's idea from Stage 1. Ask the audience to guess how many people in India have this problem. Multiply by a realistic yearly price (e.g., ₹500). Show them the actual Total Addressable Market live on a calculator."
    },

    extraHeading: "Session Notes",
    extraParagraph: "Add your own discussion questions or live analysis examples here. You can walk students through a real competitor analysis during this section.",
    extraPoints: [
      "Live demo: run the TAM prompt for a student's idea in real time",
      "Show how to find competitor weaknesses in App Store 1-star reviews"
    ]
  },

  {
    num: 3,
    title: "Branding & Identity",
    subtitle: "Name, colors, fonts, logo direction, and brand system",
    tag: "Brand",
    agent: "Innovation Agent",
    colorKey: "pink",

    why: `A brand is not a logo. A brand is the emotion someone feels when they think about your product. Before writing a line of code, you need to know what that emotion is — and then make every visual decision in service of it. Most student projects look unprofessional not because of bad code, but because of zero visual consistency.`,

    importance: `Brand identity decisions made at this stage — colors, fonts, tone — flow directly into the UI/UX stage and then into the build stage. If you skip this, you end up with inconsistent design, random colors, and a product that looks like it was assembled by someone who didn't care. Students consistently underestimate how much a coherent visual identity communicates trust.`,

    cards: [
      {
        icon: "fa-solid fa-palette",
        title: "Color is a language",
        text: "Blue communicates trust. Green communicates growth. Purple communicates innovation. Red communicates urgency. Your primary color is the first thing users feel — before reading a single word on the page."
      },
      {
        icon: "fa-solid fa-pen-nib",
        title: "Font pairing matters",
        text: "Display font for headings (personality) + body font for readability. Both must load from Google Fonts. The pairing defines the entire visual personality of your product across every screen."
      },
      {
        icon: "fa-solid fa-tag",
        title: "Name + tagline",
        text: "Your name must be short, pronounceable, and available as a domain. Your tagline must explain what you do in under 8 words. Both must be decided before building the landing page."
      },
      {
        icon: "fa-solid fa-box",
        title: "The brand kit",
        text: "Primary color, secondary, accent, background, text color, font pair, icon library, and brand tone — all in one document. This is your design system for the entire project."
      }
    ],

    studentMindset: [
      "Spend a week perfecting a logo before building anything",
      "Pick colors randomly without considering the emotion they trigger",
      "Use different fonts across different pages of the same product",
      "Skip the brand system and make one-off decisions per component"
    ],
    founderMindset: [
      "Define the full color system in one session using hex codes from the AI prompt",
      "Pick Google Fonts that load fast and look distinctive — not just safe",
      "Write the tagline before the homepage copy — it frames every other word",
      "Choose one icon library (Lucide, Phosphor, or Heroicons) and never mix them"
    ],

    liveExercise: {
      title: "Color Psychology Match",
      duration: "3 mins",
      description: "Name 3 massive companies (e.g., Facebook, Spotify, Netflix) and ask the audience to shout out their primary color. Ask *why* those colors were chosen (Trust/Blue, Growth/Green, Excitement/Red). Then ask what color the volunteer's app should be."
    },

    // SEO CONCEPTS — only stage 3 has this special section
    seoSection: {
      heading: "SEO & Core Web Vitals — Why They Matter at Brand Stage",
      intro: "SEO is not an afterthought — it's a foundation decision. The meta tags you write here, the image formats you choose, and the performance targets you set all start at the brand stage. Here's what every student builder needs to understand:",
      concepts: [
        {
          name: "Meta Title & Description",
          tag: "<title> + <meta name='description'>",
          why: "The title tag is what appears in Google search results and browser tabs. The description is the preview text under it. Both should use your brand name, primary keyword, and core value proposition. Written once — affects every page impression.",
          example: "<title>TrackIt — Never Miss a Deadline Again</title>"
        },
        {
          name: "First Contentful Paint (FCP)",
          tag: "Core Web Vital",
          why: "FCP measures how long it takes for the first visible content to appear on screen. Slow FCP = users leave before your page loads. Target: under 1.8 seconds. Achieved by: using system fonts initially, deferring non-critical scripts, and lazy-loading images below the fold.",
          example: "Use font-display: swap on Google Fonts to prevent invisible text during load"
        },
        {
          name: "Cumulative Layout Shift (CLS)",
          tag: "Core Web Vital",
          why: "CLS measures how much page elements move around as the page loads. Have you ever tried to click a button and the page jumped? That's CLS. Target: under 0.1. Achieved by: always setting width and height on images, never inserting content above existing content dynamically.",
          example: "Always add width and height attributes to every <img> tag"
        },
        {
          name: "Largest Contentful Paint (LCP)",
          tag: "Core Web Vital",
          why: "LCP measures when the largest element (usually your hero image or headline) becomes visible. Target: under 2.5 seconds. Achieved by: optimising the hero image format (WebP over JPEG), preloading the hero image, and avoiding render-blocking CSS.",
          example: "<link rel='preload' as='image' href='hero.webp'>"
        },
        {
          name: "Interaction to Next Paint (INP)",
          tag: "Core Web Vital",
          why: "INP replaced FID in 2024. It measures how fast your page responds to user interactions like clicks and key presses. Target: under 200ms. Achieved by: breaking up long JavaScript tasks and avoiding heavy synchronous operations on user events.",
          example: "Use requestIdleCallback() for non-urgent JavaScript tasks"
        },
        {
          name: "Open Graph Tags",
          tag: "<meta property='og:...'>",
          why: "When someone shares your product link on WhatsApp, LinkedIn, or Twitter, Open Graph tags control what the preview card looks like — the image, title, and description. Without these, platforms generate ugly, random previews. With them, every share becomes a mini advertisement.",
          example: "<meta property='og:image' content='https://yoursite.com/og-image.png'>"
        },
        {
          name: "Structured Data (Schema.org)",
          tag: "JSON-LD",
          why: "Structured data tells search engines exactly what your page is about in a machine-readable format. It enables rich results — star ratings, FAQs, product prices — to appear directly in Google search results without anyone clicking. One <script> block per page.",
          example: '<script type="application/ld+json">{"@type": "WebApplication"}</script>'
        }
      ]
    },

    extraHeading: "Session Notes",
    extraParagraph: "Add your own color palette examples or brand kit walkthroughs here. A great live demo: pick a famous app and break down why their color choice works.",
    extraPoints: [
      "Live demo: generate a color system for a student's product idea in real time",
      "Show the difference between a product with and without a consistent font pairing"
    ]
  },

  {
    num: 4,
    title: "UI/UX & Design",
    subtitle: "Pages, sections, components, and mobile responsiveness",
    tag: "Design",
    agent: "Innovation Agent",
    colorKey: "gold",

    why: `Most student projects look unprofessional not because the developer can't code, but because they never understood how professional interfaces are structured. Every website on the internet follows the same anatomy — once you know it, you can design and build anything.`,

    importance: `This stage teaches students the vocabulary of web interfaces: what a Hero section is, what a CTA does, what mobile responsiveness actually means in code, and why wireframing on paper is faster than designing in Figma. This knowledge permanently changes how they see every website they visit.`,

    cards: [
      {
        icon: "fa-solid fa-hammer",
        title: "Website anatomy",
        text: "Navbar → Hero → Problem section → Features → How it works → Social proof → CTA → Footer. Every professional site follows this pattern because it maps to how users make decisions before converting."
      },
      {
        icon: "fa-mobile-screen",
        title: "Mobile-first thinking",
        text: "68% of web traffic is mobile. If your site breaks on a phone, you've lost the majority of your users before they read a single word. Tailwind's sm: md: lg: prefixes make responsive design systematic."
      },
      {
        icon: "fa-solid fa-pen",
        title: "Paper wireframes first",
        text: "Three boxes on a page is a wireframe. Sketch the layout on paper before opening any tool. This takes 5 minutes and saves 2 hours of redesigning in Figma that never gets built."
      },
      {
        icon: "fa-solid fa-bolt",
        title: "MVP = 3 pages max",
        text: "Landing page → Auth (sign up/login) → Dashboard. That's a complete MVP. Every page beyond that is a feature you're adding before validating the core. Ship 3 pages first, then expand."
      }
    ],

    studentMindset: [
      "Jump straight into Figma without sketching anything",
      "Design 10 screens before building a single one",
      "Build desktop-only and 'fix mobile later' — you never will",
      "Create custom UI components when a library already has them"
    ],
    founderMindset: [
      "Sketch wireframes on paper first — literally 3 boxes per page",
      "Commit to a maximum of 4 pages for the MVP",
      "Design mobile-first using Tailwind responsive prefixes from line one",
      "Use a UI component library (shadcn, Flowbite, DaisyUI) and customise from there"
    ],

    liveExercise: {
      title: "The 60-Second Wireframe",
      duration: "4 mins",
      description: "Have everyone take out a pen and paper. Give them exactly 60 seconds to draw a Hero section (Header, Headline, Subhead, CTA button). Show them that they don't need Figma to design."
    },

    extraHeading: "Session Notes",
    extraParagraph: "Add UI/UX examples or live wireframing exercises here. A powerful exercise: show a famous landing page and label every section in real time.",
    extraPoints: [
      "Live exercise: label the sections of a real startup's landing page together",
      "Show Tailwind's responsive prefixes working live with a simple grid example"
    ]
  },

  {
    num: 5,
    title: "Technical Planning",
    subtitle: "Stack, architecture, database schema, folder structure, and APIs",
    tag: "Architecture",
    agent: "Tech Agent",
    colorKey: "teal",

    why: `Students often choose a tech stack based on what sounds impressive or what they saw in a YouTube thumbnail. The result is a project that's over-engineered, uses technologies that fight each other, and collapses under its own complexity before the first feature is finished.`,

    importance: `Technical planning is where you make the decisions that determine whether your project succeeds or stalls. The right stack for a beginner MVP is boring, proven, and fast to ship. The Technical Agent gives you a complete blueprint — folder structure, database schema, API integrations — so you start coding with a plan instead of making it up as you go.`,

    cards: [
      {
        icon: "fa-solid fa-building-columns",
        title: "Tech stack = 4 decisions",
        text: "Frontend framework + styling library + backend/database + hosting. For beginners: Next.js + Tailwind + Supabase + Vercel. Four decisions. Make them in 5 minutes. Move on and build."
      },
      {
        icon: "fa-solid fa-folder",
        title: "Folder structure before code",
        text: "/components (UI pieces), /app (pages/routes), /utils (helper functions), /lib (API calls), /hooks (custom logic). Set this structure up before writing a single feature — it shapes everything."
      },
      {
        icon: "fa-solid fa-database",
        title: "Database schema",
        text: "What tables do you need? What fields? How do they relate? Drawing this out before coding prevents you from refactoring your database 3 times during the build phase."
      },
      {
        icon: "fa-solid fa-plug",
        title: "What is an API?",
        text: "An API is a door between your frontend and external services. When you log in with Google, your app talks to Google's API — it never touches Google's database. It just sends the right request and gets the right response back."
      }
    ],

    studentMindset: [
      "Pick the most impressive tech stack to look advanced",
      "Start coding features before planning the database structure",
      "Hardcode API keys directly inside the source code",
      "Create files randomly without any folder organisation plan"
    ],
    founderMindset: [
      "Use the beginner stack: Next.js + Tailwind + Supabase + Vercel",
      "Set up the folder structure on day one before any feature code",
      "Store all secrets in a .env file from the very first line",
      "Draw the database schema before writing any model or query code"
    ],

    liveExercise: {
      title: "Whiteboard the Database",
      duration: "5 mins",
      description: "Draw two boxes on the whiteboard: 'Users' and 'Posts'. Ask the audience what columns go in each table. Connect them with a line to visually demonstrate a foreign key (user_id). This demystifies databases instantly."
    },

    extraHeading: "Session Notes",
    extraParagraph: "Add architecture examples or live technical planning exercises here. Drawing the folder structure on a whiteboard is extremely effective for visual learners.",
    extraPoints: [
      "Draw the folder structure live on a whiteboard or shared screen",
      "Show a real Supabase dashboard to demystify what a database looks like"
    ]
  },

  {
    num: 6,
    title: "Build with Claude",
    subtitle: "Master prompt → generate → download → run in VS Code",
    tag: "Build",
    agent: "Tech Agent",
    colorKey: "orange",

    why: `You now have everything: a validated idea, market data, a brand system, a UI plan, and a technical architecture. The build stage is where all of that work becomes real running code. Using a structured master prompt, you generate the complete project in Claude, download it, and run it locally — so students see their product working before the session ends.`,

    importance: `The Master Prompt approach teaches students that AI-assisted development is not about vague one-liners — it's about giving the AI enough context to produce production-quality output. Every bracket in the master prompt is a decision you made in a previous stage. Nothing is left to chance. The output is a real, runnable project — not a tutorial clone.`,

    cards: [
      {
        icon: "fa-solid fa-brain",
        title: "The Master Prompt",
        text: "A single structured prompt containing your product name, description, tech stack, brand colors, page list, and all content from Stage 2. Fill every bracket — then paste. Claude generates the complete project."
      },
      {
        icon: "fa-solid fa-box",
        title: "Download and run",
        text: "Download the ZIP from Claude, open in VS Code, run npm install, then npm run dev. Open localhost:3000. Your product is running. This entire process takes under 5 minutes."
      },
      {
        icon: "fa-solid fa-hammer",
        title: "Reading the structure",
        text: "Walk through the generated code live: /components, /app, /lib, the .env file. Understanding the structure of generated code is as important as understanding the code itself."
      },
      {
        icon: "fa-solid fa-bolt",
        title: "Live hot reload",
        text: "Make one change together — update a headline or a color. Save. Watch the browser update instantly. This is the development loop students will use on every project from this point forward."
      }
    ],

    studentMindset: [
      "Send a vague prompt like 'build me an app' and accept whatever comes out",
      "Accept the first output without reviewing the structure",
      "Skip reading the generated code and just run it blindly",
      "Ask the AI to build without providing brand and content context"
    ],
    founderMindset: [
      "Fill every single bracket in the Master Prompt before pasting",
      "Review the generated folder structure and ask Claude to fix issues before downloading",
      "Run npm install and npm run dev immediately after extraction",
      "Make one live edit to demonstrate hot reload before moving to deployment"
    ],

    liveExercise: {
      title: "The Live Generation",
      duration: "7 mins",
      description: "Open Claude live on screen. Paste the Master Prompt. Fill in the brackets dynamically by asking the audience for input. Hit enter and watch the audience react as a full codebase is generated in 15 seconds."
    },

    extraHeading: "Session Notes",
    extraParagraph: "Add your own build tips, common errors students hit, or things to highlight when walking through the generated code structure.",
    extraPoints: [
      "Walk through the generated /components folder and explain each file's single responsibility",
      "Show what happens when you open .env — explain why it's never committed to GitHub"
    ]
  },

  {
    num: 7,
    title: "Deployment",
    subtitle: "GitHub → Vercel / Render → live URL for everyone",
    tag: "Launch",
    agent: "Tech Agent",
    colorKey: "green",

    why: `A project that only runs on your laptop is not a product — it's a draft. Deployment is the moment your idea becomes real: when anyone in the world with a link can use what you built. For students, this moment is transformative. 'I made this and it's live on the internet' changes how you think about building forever.`,

    importance: `The deployment stage also teaches two critical professional habits: version control with Git — the industry standard for managing code — and environment variable management — keeping secrets out of your public repository. These two habits alone separate student developers from professional ones in every job interview and code review.`,

    cards: [
      {
        icon: "fa-solid fa-code-branch",
        title: "Git is non-negotiable",
        text: "Git tracks every change you make. If you break something, you can undo it. If someone else wants to contribute, they can. Every professional developer uses Git on every project. There are no exceptions anywhere."
      },
      {
        icon: "fa-solid fa-lock",
        title: ".gitignore saves careers",
        text: "The .env file contains your API keys. If it gets pushed to GitHub, it becomes public. Bots scan GitHub for leaked keys within seconds. Add .env to .gitignore before your very first git add — not after."
      },
      {
        icon: "fa-solid fa-rocket",
        title: "Vercel = 60 seconds to live",
        text: "Connect GitHub → import repo → add environment variables → Deploy. Your site is live. Vercel automatically redeploys every time you push to GitHub. This is CI/CD in practice — automated shipping."
      },
      {
        icon: "fa-solid fa-globe",
        title: "A real URL changes everything",
        text: "Sending a GitHub link proves you can code. Sending a live URL proves you can ship. The live URL is what goes on your portfolio, your resume, and what earns PoW Building points in the NEXUS club system."
      }
    ],

    studentMindset: [
      "Push the .env file to GitHub — API keys leaked within seconds by bots",
      "Skip the README — nobody else can run or understand your project",
      "Deploy once manually and never touch it again after launch",
      "Use the default ugly platform URL instead of a clean custom domain"
    ],
    founderMindset: [
      "Add .env to .gitignore before the first git add — this order is not flexible",
      "Write a README that explains: what it does, how to run it, and the tech stack",
      "Connect GitHub to Vercel for automatic re-deployment on every push",
      "Test the live URL on your phone before sharing it with a single person"
    ],

    liveExercise: {
      title: "Push to Live",
      duration: "5 mins",
      description: "Take the project you generated in Stage 6, push it to GitHub, and link it to Vercel. Have a stopwatch running. Show the audience that it takes less than 3 minutes to go from local code to a live internet URL."
    },

    extraHeading: "Session Notes",
    extraParagraph: "Add your own deployment notes, live demo steps, or common errors students encounter when pushing to GitHub for the first time.",
    extraPoints: [
      "Live demo: show what happens when .env is missing from .gitignore",
      "Walk through the Vercel dashboard and show what the auto-deploy log looks like"
    ]
  }
];
