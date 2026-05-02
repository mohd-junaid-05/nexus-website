// ============================================================
// NEXUS — Build Like a Startup
// FILE: js/ui.js
// PURPOSE: Rendering logic for timeline, presentation card, and intro carousel
// ============================================================

const COLOR_MAP = {
  accent:  { hex: '#4F46E5', light: 'rgba(79, 70, 229, 0.1)', border: 'rgba(79, 70, 229, 0.3)' },
  teal:    { hex: '#0D9488', light: 'rgba(13, 148, 136, 0.1)', border: 'rgba(13, 148, 136, 0.3)' },
  pink:    { hex: '#DB2777', light: 'rgba(219, 39, 119, 0.1)', border: 'rgba(219, 39, 119, 0.3)' },
  gold:    { hex: '#D97706', light: 'rgba(217, 119, 6, 0.1)', border: 'rgba(217, 119, 6, 0.3)' },
  orange:  { hex: '#EA580C', light: 'rgba(234, 88, 12, 0.1)', border: 'rgba(234, 88, 12, 0.3)' },
  green:   { hex: '#059669', light: 'rgba(5, 150, 105, 0.1)', border: 'rgba(5, 150, 105, 0.3)' },
};

let currentStage = 0;
let currentSlide = 0;

// State to store saved results per stage
const savedResults = {
  0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: []
};

function highlightBrackets(text) {
  return text.replace(/\[([^\]]+)\]/g, '<span class="bracket">[$1]</span>');
}

async function copyPrompt(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert('Prompt copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// ── Carousel Logic ──────────────────────────────────────
function renderCarousel() {
  const track = document.getElementById('intro-carousel-track');
  const dotsContainer = document.getElementById('intro-carousel-dots');
  if (!track || !INTRO_SLIDES) return;

  track.innerHTML = INTRO_SLIDES.map((slide, i) => `
    <div class="carousel-slide" id="slide-${i}">
      <div class="carousel-slide-header">
        <div class="carousel-slide-icon" style="background: ${slide.color}20; color: ${slide.color};">
          <i class="${slide.icon}"></i>
        </div>
        <h3>${slide.title}</h3>
      </div>
      <p>${slide.content}</p>
    </div>
  `).join('');

  dotsContainer.innerHTML = INTRO_SLIDES.map((_, i) => `
    <div class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>
  `).join('');

  updateCarouselVisuals();
}

function moveCarousel(direction) {
  const nextSlide = currentSlide + direction;
  if (nextSlide >= 0 && nextSlide < INTRO_SLIDES.length) {
    goToSlide(nextSlide);
  }
}

function goToSlide(index) {
  currentSlide = index;
  updateCarouselVisuals();
}

function updateCarouselVisuals() {
  const track = document.getElementById('intro-carousel-track');
  if(track) track.style.transform = `translateX(-${currentSlide * 100}%)`;

  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// ── Timeline Logic ──────────────────────────────────────
function selectStage(index) {
  currentStage = index;
  
  // Update timeline visual
  const points = document.querySelectorAll('.t-point');
  points.forEach((p, i) => {
    p.classList.remove('active', 'completed');
    if (i === index) p.classList.add('active');
    else if (i < index) p.classList.add('completed');
  });
  
  const progressLine = document.getElementById('timeline-progress');
  if(progressLine) {
     const percentage = (index / (points.length - 1)) * 100;
     progressLine.style.width = percentage + '%';
  }

  // Update pills
  const pills = document.querySelectorAll('.pill-btn');
  pills.forEach((p, i) => {
    p.classList.toggle('active', i === index);
  });

  renderPresentationCard(index);
}

function switchTab(tabName) {
  document.querySelectorAll('.pres-tab-btn').forEach(b => {
    if(b.dataset.tab) b.classList.toggle('active', b.dataset.tab === tabName);
  });
  document.querySelectorAll('.pres-content').forEach(c => {
    c.classList.toggle('active', c.id === `tab-content-${tabName}`);
  });
}

function switchSubPrompt(index) {
  document.querySelectorAll('.sub-prompt-btn').forEach((b, i) => {
    b.classList.toggle('active', i === index);
  });
  document.querySelectorAll('.sub-prompt-content').forEach((c, i) => {
    c.style.display = i === index ? 'block' : 'none';
  });
}

// ── Result Section Logic ────────────────────────────────
function saveResult(index) {
  const titleInput = document.getElementById(`res-title-${index}`);
  const bodyInput = document.getElementById(`res-body-${index}`);
  
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  
  if (!title && !body) return;
  
  // Add to start of array so newest is at the top
  savedResults[index].unshift({ title: title || 'Untitled Result', body });
  
  // Clear inputs
  titleInput.value = '';
  bodyInput.value = '';
  
  // Re-render history
  renderResultHistory(index);
}

function deleteResult(stageIndex, resultIndex) {
  savedResults[stageIndex].splice(resultIndex, 1);
  renderResultHistory(stageIndex);
}

function renderResultHistory(index) {
  const container = document.getElementById(`res-history-container-${index}`);
  if (!container) return;
  
  const results = savedResults[index];
  
  if (results.length === 0) {
    container.innerHTML = '';
    return;
  }
  
  container.innerHTML = results.map((res, i) => `
    <div class="res-history-item">
      <div class="res-history-header">
        <h5>${res.title}</h5>
        <button class="res-delete-btn" onclick="deleteResult(${index}, ${i})" title="Delete result">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <p>${res.body}</p>
    </div>
  `).join('');
}

// ── Render Card ─────────────────────────────────────────
function renderPresentationCard(index) {
  const container = document.getElementById('presentation-card-container');
  const stageData = STAGE_CONTENT[index];
  const promptData = STAGE_PROMPTS[index];
  const col = COLOR_MAP[stageData.colorKey] || COLOR_MAP.accent;

  const agentPill = stageData.agent
    ? `<span class="tag-pill"><i class="fa-solid fa-robot"></i> ${stageData.agent}</span>`
    : '';

  // Checklist Tab (Cards)
  const cardsHTML = stageData.cards.map(c => `
    <div class="info-card">
      <i class="${c.icon}" style="color: ${col.hex}"></i>
      <h4>${c.title}</h4>
      <p>${c.text}</p>
    </div>
  `).join('');

  const studentHTML = stageData.studentMindset.map(t => `<li><i class="fa-solid fa-xmark"></i> ${t}</li>`).join('');
  const founderHTML = stageData.founderMindset.map(s => `<li><i class="fa-solid fa-check"></i> ${s}</li>`).join('');

  // AI Prompts Tab
  let promptTabs = '';
  let promptContents = '';
  
  if (promptData.prompts && promptData.prompts.length > 0) {
    promptTabs = promptData.prompts.map((p, i) => 
      `<button class="pres-tab-btn sub-prompt-btn ${i===0?'active':''}" onclick="switchSubPrompt(${i})">${p.label}</button>`
    ).join('');
    
    promptContents = promptData.prompts.map((p, i) => `
      <div class="sub-prompt-content" style="display: ${i===0?'block':'none'}">
        <p style="color: var(--text2); margin-bottom: 12px; font-size: 13.5px;"><i class="fa-solid fa-lightbulb" style="color: var(--gold)"></i> ${p.importance}</p>
        <div class="code-box-wrapper" style="position: relative;">
          <button class="copy-btn" onclick='copyPrompt(${JSON.stringify(p.text)})' title="Copy Prompt">
            <i class="fa-regular fa-copy"></i> Copy
          </button>
          <div class="code-box" style="margin-top: 0;">${highlightBrackets(p.text)}</div>
        </div>
      </div>
    `).join('');
  } else {
     promptContents = `<p>No prompts available for this stage.</p>`;
  }

  // Agent setup if any
  let agentSetupHTML = '';
  if (promptData.agentSetup && promptData.agentSetup.has) {
    agentSetupHTML = `
      <div style="margin-bottom: 24px; padding: 16px; background: var(--bg3); border-radius: var(--r-md);">
        <h4 style="margin-bottom: 8px; font-size: 14px;"><i class="fa-solid fa-robot"></i> System Prompt (${promptData.agentSetup.name})</h4>
        <p style="font-size: 13px; color: var(--text2); margin-bottom: 12px;">${promptData.agentSetup.importance}</p>
        <div class="code-box-wrapper" style="position: relative;">
          <button class="copy-btn" onclick='copyPrompt(${JSON.stringify(promptData.agentSetup.prompt)})' title="Copy System Prompt">
            <i class="fa-regular fa-copy"></i> Copy
          </button>
          <div class="code-box" style="margin-top: 0;">${highlightBrackets(promptData.agentSetup.prompt)}</div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="pres-card">
      <div class="pres-header">
        <div class="pres-num" style="background:${col.light}; color:${col.hex}">${stageData.num}</div>
        <div class="pres-title-wrap">
          <h2>${stageData.title}</h2>
          <p>${stageData.subtitle}</p>
          <div class="pres-meta">
            <span class="tag-pill" style="background:${col.light}; color:${col.hex}">${stageData.tag}</span>
            ${agentPill}
          </div>
        </div>
      </div>

      <div class="pres-body">
        <div class="pres-tabs">
          <button class="pres-tab-btn active" data-tab="checklist" onclick="switchTab('checklist')">Core Concepts</button>
          <button class="pres-tab-btn" data-tab="prompts" onclick="switchTab('prompts')">AI Prompts</button>
          <button class="pres-tab-btn" data-tab="mindset" onclick="switchTab('mindset')">Mindset Shift</button>
          <button class="pres-tab-btn" data-tab="exercise" onclick="switchTab('exercise')">Live Exercise</button>
        </div>
        
        <!-- Tab 1: Checklist -->
        <div class="pres-content active" id="tab-content-checklist">
          <p style="color: var(--text2); margin-bottom: 20px; font-size: 14px;">${stageData.why}</p>
          <div class="cards-grid">${cardsHTML}</div>
        </div>

        <!-- Tab 2: Prompts -->
        <div class="pres-content" id="tab-content-prompts">
          ${agentSetupHTML}
          ${promptTabs ? `<div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">${promptTabs}</div>` : ''}
          ${promptContents}
        </div>

        <!-- Tab 3: Mindset Shift -->
        <div class="pres-content" id="tab-content-mindset">
          <p style="color: var(--text2); margin-bottom: 20px; font-size: 14px;">${stageData.importance}</p>
          <div class="flex-row">
            <div class="list-box bad flex-1">
              <h4>Student Mindset</h4>
              <ul>${studentHTML}</ul>
            </div>
            <div class="list-box good flex-1">
              <h4>Founder Mindset</h4>
              <ul>${founderHTML}</ul>
            </div>
          </div>
        </div>

        <!-- Tab 4: Live Exercise -->
        <div class="pres-content" id="tab-content-exercise">
          <div style="background: ${col.light}; border: 1px solid ${col.border}; border-radius: var(--r-md); padding: 24px;">
             <h3 style="font-family: 'Outfit', sans-serif; font-size: 20px; color: ${col.hex}; margin-bottom: 8px;">
               <i class="fa-solid fa-person-chalkboard"></i> ${stageData.liveExercise.title}
             </h3>
             <p style="font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 16px;">
               <i class="fa-regular fa-clock"></i> Duration: ${stageData.liveExercise.duration}
             </p>
             <p style="font-size: 15px; color: var(--text2); line-height: 1.6;">
               ${stageData.liveExercise.description}
             </p>
          </div>
        </div>

      </div>

      <div class="result-section">
        <div class="result-header">
          <h4><i class="fa-solid fa-floppy-disk"></i> Save Stage Result</h4>
          <p>Store the final AI output for this stage so you don't lose it.</p>
        </div>
        <div class="res-history" id="res-history-container-${index}" style="margin-bottom: 16px;">
          <!-- Saved items render here -->
        </div>
        <div class="result-inputs">
          <input type="text" class="res-title-input" placeholder="Result Title (e.g., Final Opportunity Statement)" id="res-title-${index}">
          <textarea class="res-body-textarea" placeholder="Paste the final output from your AI agent here..." id="res-body-${index}" rows="4"></textarea>
          <button class="res-save-btn" onclick="saveResult(${index})">Save Result</button>
        </div>
      </div>
    </div>
  `;
  
  // Render history for this stage
  renderResultHistory(index);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderCarousel();
  selectStage(0);
});
