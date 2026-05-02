// ============================================================
// NEXUS — Build Like a Startup
// FILE: js/prompts.js
// PURPOSE: AI Prompts for all stages
// ============================================================

const STAGE_PROMPTS = [
  // ── Stage 1: Idea Refinement ──────────────────────────────
  {
    agentSetup: {
      has: true,
      name: "Innovation Agent",
      importance: "Set up the AI as an expert in product strategy before asking it to brainstorm.",
      prompt: `ROLE: You are an expert Innovation Strategist and Product Manager at a top-tier startup accelerator. You have helped launch hundreds of successful products by focusing relentlessly on user pain points and market viability.
ACTION: Your task is to act as my strategic partner to refine, evaluate, and brainstorm startup ideas.
CONTEXT: We are in the very early stages of a new project. I will bring raw ideas or opportunity statements to you. Your goal is to challenge my assumptions, ensure we are solving a real problem for a specific user, and help me generate the most viable, disruptive product concepts possible.
EXPECTATION: You will provide sharp, critical, and actionable feedback. You will prioritize desirability, feasibility, and market opportunity above all else. You will not just agree with me; you will point out weaknesses and suggest improvements.
FORMAT: Use clear headings, bullet points, and tables where appropriate. Keep your language professional, direct, and focused on outcomes.`
    },
    prompts: [
      {
        label: "Enhance Statement",
        importance: "Turn a raw idea into a professional opportunity statement.",
        text: `Enhancing Your Opportunity Statement
I want you to enhance and refine the opportunity statement below using the following framing and criteria:
An opportunity statement requires a clear, visionary, and actionable directive. An effective statement should ignite passion, drive focus, and communicate a future-oriented vision.
The attributes of a good opportunity statement are:

Visionary: The statement should paint a compelling picture of the future and describe what success looks like. It should challenge the status quo and inspire a bold new direction.
Customer-Centric: It must emphasize creating value for the customer, understanding their needs, and how the transformation will enhance their experience.
Outcome-Focused: Instead of merely describing actions (like "implement AI"), it should describe desired outcomes ("become the industry benchmark for AI-driven personalized experiences").
Measurable: While it's aspirational, it should hint at something that can be tracked and measured. This allows the team to understand progress and adjust strategies as needed.
Urgency: Especially in a rapidly changing digital environment, the statement should create a sense of urgency, emphasizing the importance of acting now.

Enhance the draft opportunity statement below. Give me three completely different variations:
[YOUR RAW OPPORTUNITY STATEMENT HERE]`
      },
      {
        label: "Generate 5 Ideas",
        importance: "Brainstorm multiple product angles for the same problem.",
        text: `From Opportunity to List of Ideas
Generate 5 unique product ideas to tackle the refined opportunity statement we just created.

Offer up a range of ideas that cover the spectrum from outrageous to practical. The ideas should challenge the status quo and seek to disrupt the market. The ideas should excite and energize, be written from an ambitious abundance perspective, have huge potential, and be brief and to the point. Highlight how the idea disrupts the current status quo.`
      },
      {
        label: "Score & Rank",
        importance: "Objectively evaluate the ideas to pick the winner.",
        text: `From Lists of Ideas to Final Idea
I want you to rate and rank the 5 ideas you just generated using the following evaluation rubric:

Desirability: Does the idea show a deep understanding of the customer's needs, wants, and limitations?
Opportunity Relevance: Does the idea address a significant problem or challenge faced by the persona?
Innovation Level: Is the idea new and creative, or is it a replication of existing solutions?
Feasibility: Can the product or service be built? Can the idea be quickly turned into a prototype for testing?
Market Opportunity: Is there a market for this idea? What is the estimated TAM, and are potential customers willing to pay?

Apply these criteria to the 5 ideas, provide a sound rationale for scoring each idea on the various criteria, and score each idea on each criterion on a scale of 0 to 5, where 0 is the lowest and 5 is the highest.
Provide your output in a table with the following columns: Idea, [Criterion] Reasoning, [Criterion] Score, Total Score (where [Criterion] will be replaced with each of the actual criteria mentioned in the rubric).`
      }
    ]
  },

  // ── Stage 2: Market Analysis ──────────────────────────────
  {
    agentSetup: {
      has: true,
      name: "Research Agent",
      importance: "Prepare the AI to analyze markets and write professional copy.",
      prompt: `ROLE: You are an elite Market Research Analyst and professional Copywriter. You excel at calculating market sizes, analyzing competitors, and writing high-converting website copy that speaks directly to a user's pain points.
ACTION: Your task is to analyze the market for my chosen product idea and generate all the necessary content for a professional landing page.
CONTEXT: I have selected a final product idea. Now, I need to prove there is a market for it and create the messaging that will convince users to sign up. I need realistic market size estimates and compelling, psychological copywriting.
EXPECTATION: Provide data-driven (or logically estimated) market sizes. Write copy that is sharp, concise, and focused on benefits rather than features. Avoid corporate jargon; use direct, conversational, and persuasive language.
FORMAT: Use structured formats like tables for market sizing and clearly labeled sections (Hero, Features, CTA) for copywriting.`
    },
    prompts: [
      {
        label: "Calculate TAM",
        importance: "Estimate the market size using logical assumptions.",
        text: `Calculate the TAM, SAM, and SOM for our winning product idea.

Target Geography: [e.g., India, Global, US]
Target Demographic: [e.g., College students, Freelancers, Small business owners]
Estimated Yearly Price: [e.g., ₹1000]

I don't need exact verified statistics, but I need you to use logical, realistic assumptions. Break down the math step-by-step so I can understand how you arrived at the final numbers for:
1. Total Addressable Market (TAM) - The entire total market demand.
2. Serviceable Available Market (SAM) - The segment of the TAM targeted by our product within our geographical reach.
3. Serviceable Obtainable Market (SOM) - The portion of SAM that we can realistically capture in our first year.`
      },
      {
        label: "Competitor Analysis",
        importance: "Identify who is currently solving this problem and where they fail.",
        text: `Based on our winning product idea, identify 3 real-world competitors (or the closest alternatives if it's completely novel). For each competitor, provide:
1. Their core value proposition (what they promise).
2. Their primary target audience.
3. Their biggest weakness (what users complain about the most).
4. Our specific opportunity to beat them.

Format the output as a clear, easy-to-read table.`
      },
      {
        label: "Generate Copy",
        importance: "Write the text for your landing page before touching any code.",
        text: `Now, I need you to act as a world-class copywriter. Write the complete content for a high-converting landing page based on everything we've discussed so far.
        
Please provide the following sections:
1. Hero Header: A punchy, 5-to-8 word headline that grabs attention.
2. Hero Sub-header: A 1-2 sentence explanation of what the product does and who it is for.
3. Call to Action (CTA) Button Text: E.g., "Start for free".
4. Pain vs Solution: A short paragraph highlighting the current painful way of doing things, followed by how our product fixes it.
5. Three Core Features: Provide a short, catchy title and a 1-sentence description for 3 main features.
6. FAQ: 3 common questions a user might have, with reassuring answers.`
      }
    ]
  },

  // ── Stage 3: Branding & Identity ──────────────────────────
  {
    agentSetup: {
      has: true,
      name: "Innovation Agent",
      importance: "Re-engage the Innovation Agent for creative branding decisions.",
      prompt: `We are continuing our work on the same product. You have been acting as my Innovation Strategist, but I now need you to put on a new hat.
ROLE: Shift your role to act as an expert Brand Strategist and Creative Director.
ACTION: Based on the product idea, market analysis, and copy we've defined above, help me create its complete visual identity, naming, and brand system.
EXPECTATION: You will provide specific, actionable design choices—including exact hex codes, specific Google Fonts, and clear reasoning for why these choices fit our product's specific market.
FORMAT: Provide lists, exact codes, and brief explanations for the psychology behind each choice.`
    },
    prompts: [
      {
        label: "Brand Identity Kit",
        importance: "Generate the colors, fonts, and styling for the project.",
        text: `Generate a complete Brand Identity Kit for our product.

Desired Vibe/Emotion: [e.g., Trustworthy and Professional, Playful and Energetic, Dark and Sleek]

I need you to provide:
1. Color Palette: Give me exactly 5 colors with their exact Hex codes. Include a Primary brand color, a Secondary accent color, a Background color, a Text color, and a Success/Action color. Explain the psychology behind the primary color choice.
2. Typography: Recommend a pairing of two free Google Fonts. Suggest one distinct Display font for headings and one highly readable Sans-serif font for body text.
3. Iconography Style: Recommend which icon style to use (e.g., minimal line icons, filled bold icons, duotone) and suggest a free library (like Phosphor, Lucide, or FontAwesome).`
      },
      {
        label: "Generate Names",
        importance: "Brainstorm short, available-sounding startup names.",
        text: `Brainstorm 10 potential names for this product. 

The names should be:
- Short (maximum 2 words, ideally 1).
- Easy to pronounce and spell.
- Modern and tech-forward (think Stripe, Vercel, Plaid, Figma).

For each name, provide a one-sentence tagline that incorporates the name naturally.`
      }
    ]
  },

  // ── Stage 4: UI/UX & Design ───────────────────────────────
  {
    agentSetup: {
      has: true,
      name: "Innovation Agent",
      importance: "Use the agent to plan the layout before coding.",
      prompt: `We are continuing our work on the same product.
ROLE: Now, shift your role to act as a Senior UX/UI Designer.
ACTION: Help me structure the layout and user flow of our application based on all the copy and branding we've developed so far.
EXPECTATION: Define the exact anatomical structure of the pages. Tell me exactly what UI components go where. Prioritize clarity and conversion for our specific user persona over unnecessary complexity.
FORMAT: Use a top-to-bottom list format detailing each section of the page.`
    },
    prompts: [
      {
        label: "Homepage Layout",
        importance: "Map out the exact sections of your landing page.",
        text: `Map out the complete top-to-bottom layout structure for my landing page based on the copy we generated earlier.

I want a modern, high-converting structure. Please list the sections in order (e.g., 1. Navbar, 2. Hero Section, 3. Social Proof, etc.). 
For each section, tell me exactly:
- What components belong there (e.g., 'Large H1 heading on the left, an illustration on the right, primary CTA button').
- What the primary goal of that specific section is.`
      },
      {
        label: "Define MVP Pages",
        importance: "Determine the absolute minimum pages needed to launch.",
        text: `What are the absolute minimum pages I need to build to launch a functional MVP for this product?

Limit your recommendation to a maximum of 3 or 4 core pages (e.g., Landing Page, Login, Dashboard).
For each page, describe its primary function and the 2 most important UI components that must be on it.`
      }
    ]
  },

  // ── Stage 5: Technical Planning ───────────────────────────
  {
    agentSetup: {
      has: true,
      name: "Tech Agent",
      importance: "Switch to the Tech Agent for architecture and database planning.",
      prompt: `ROLE: You are a Senior Full-Stack Software Engineer and Systems Architect. You specialize in building robust web applications using HTML, CSS, vanilla JavaScript, and Node.js.
ACTION: Act as my technical co-founder. Help me plan the file structure and API endpoints before I start writing code.
CONTEXT: I am a beginner developer. I want to build a functional MVP quickly. We will use plain HTML/CSS/JS for the frontend and Node.js for the backend.
EXPECTATION: Your advice must be practical, beginner-friendly, and highly structured. Avoid over-engineering. Give me exact folder structures. Explain technical concepts simply.
FORMAT: Use code blocks for file structures.`
    },
    prompts: [
      {
        label: "Folder Structure",
        importance: "Plan where every file will live in your project.",
        text: `Provide the ideal HTML/CSS/JS and Node.js folder and file structure for my MVP.

Please give me a visual tree representation of the folders and files. 
Include essential folders like /public (for html/css/js frontend) and /src (for node.js backend routes/controllers). 
Add a brief 1-sentence comment next to the most important files explaining what they do.`
      }
    ]
  },

  // ── Stage 6: Build with Claude ────────────────────────────
  {
    agentSetup: {
      has: true,
      name: "Tech Agent",
      importance: "The Tech Agent will now write the actual code.",
      prompt: `ROLE: You are an elite Full-Stack Developer specializing in HTML, CSS, vanilla JavaScript, and Node.js backend development.
ACTION: Write complete, production-ready, beautiful code for my application based on the exact specifications I provide.
CONTEXT: We have completed all planning. I will provide a 'Master Prompt' containing the brand kit, copy, and layout. You must generate the code for this application.
EXPECTATION: You will write clean, well-commented code. You must implement the specific brand colors and fonts I provide. You must make the design responsive (mobile-first) using custom CSS. The UI should look modern and premium.
FORMAT: Provide the code in clearly labeled code blocks with the exact file path at the top of each block.`
    },
    prompts: [
      {
        label: "The Master Prompt",
        importance: "The final, massive prompt that generates your entire app.",
        text: `I want you to build a complete application using plain HTML, CSS, and vanilla JS for the frontend, and Node.js for the backend. 
Below are the exact specifications. You must follow them strictly.

=== 1. BRAND KIT ===
Primary Color: [HEX CODE]
Background: [HEX CODE]
Text Color: [HEX CODE]
Font: [GOOGLE FONT NAME]

=== 2. COPY & CONTENT ===
Hero Headline: "[YOUR HEADLINE]"
Hero Subtext: "[YOUR SUBTEXT]"
CTA Button: "[YOUR CTA]"
Features: 
1. [FEATURE 1]
2. [FEATURE 2]
3. [FEATURE 3]

=== 3. TECHNICAL REQUIREMENTS ===
- Use FontAwesome for icons via CDN.
- Ensure the layout is fully responsive using standard CSS media queries.
- Create a modern, premium aesthetic with subtle hover effects and appropriate padding.
- Provide a simple Node.js Express server to serve the frontend files.

Please generate the complete, runnable code. Provide the exact file paths (e.g. index.html, style.css, server.js) at the top of each code block.`
      }
    ]
  },

  // ── Stage 7: Deployment ───────────────────────────────────
  {
    agentSetup: {
      has: false,
      name: "",
      importance: "",
      prompt: ""
    },
    prompts: [
      {
        label: "Render Deployment Steps",
        importance: "Get instructions on how to push the code live.",
        text: `I have built my Node.js application locally and pushed the code to a GitHub repository. 
I want to deploy it to the internet for free using Render.com as a Web Service.

Please give me a step-by-step, beginner-friendly guide on exactly how to deploy a Node.js app to Render. 
Include:
1. What settings I need to choose in the Render dashboard (Build Command, Start Command like 'node server.js').
2. How to add my Environment Variables.
3. How to check the deployment logs if something goes wrong.`
      },
      {
        label: "Fix Deployment Error",
        importance: "Use this if Render throws an error in the logs.",
        text: `My deployment on Render failed. Here is the exact error from the deployment logs:

"[PASTE THE ERROR LOG HERE]"

Explain what this error means in simple terms and tell me exactly which file I need to change and what code to write to fix it.`
      }
    ]
  }
];
