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
    <div class="carousel-slide px-3" id="slide-${i}" style="min-width: 100%;">
      <div class="carousel-slide-header d-flex align-items-center mb-3 gap-3">
        <div class="carousel-slide-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center" style="width: 48px; height: 48px; font-size: 20px; background: ${slide.color}20; color: ${slide.color};">
          <i class="${slide.icon}"></i>
        </div>
        <h3 class="h4 mb-0 fw-bold text-dark" style="font-family: 'Outfit', sans-serif;">${slide.title}</h3>
      </div>
      <p class="fs-6 text-secondary mb-0" style="line-height: 1.7;">${slide.content}</p>
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
    if(b.dataset.tab) {
      b.classList.toggle('active', b.dataset.tab === tabName);
      if (b.dataset.tab === tabName) {
        b.classList.add('btn-dark');
        b.classList.remove('btn-outline-secondary');
      } else {
        b.classList.remove('btn-dark');
        b.classList.add('btn-outline-secondary');
      }
    }
  });
  document.querySelectorAll('.pres-content').forEach(c => {
    c.classList.toggle('active', c.id === `tab-content-${tabName}`);
    c.style.display = c.id === `tab-content-${tabName}` ? 'block' : 'none';
  });
}

function switchSubPrompt(index) {
  document.querySelectorAll('.sub-prompt-btn').forEach((b, i) => {
    b.classList.toggle('active', i === index);
    if (i === index) {
      b.classList.add('btn-dark');
      b.classList.remove('btn-outline-secondary');
    } else {
      b.classList.remove('btn-dark');
      b.classList.add('btn-outline-secondary');
    }
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
    <div class="card shadow-sm border mb-3" style="animation: fadeIn 0.3s; border-radius: 1rem;">
      <div class="card-body p-4">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h5 class="fw-bold fs-5 mb-0" style="font-family: 'Outfit', sans-serif;">${res.title}</h5>
          <button class="btn btn-link text-danger p-0 border-0" onclick="deleteResult(${index}, ${i})" title="Delete result">
            <i class="fa-solid fa-trash fs-5"></i>
          </button>
        </div>
        <p class="text-secondary mb-0 fs-6" style="white-space: pre-wrap; line-height: 1.6;">${res.body}</p>
      </div>
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

  const cardsHTML = stageData.cards.map(c => `
    <div class="col-12 col-md-6 mb-4">
      <div class="card h-100 shadow-sm border" style="border-radius: 1rem; transition: transform 0.2s;">
        <div class="card-body p-4">
          <i class="${c.icon} fs-4 mb-3" style="color: ${col.hex}"></i>
          <h4 class="h5 fw-bold mb-2 text-dark">${c.title}</h4>
          <p class="card-text text-secondary fs-6 mb-0">${c.text}</p>
        </div>
      </div>
    </div>
  `).join('');

  const studentHTML = stageData.studentMindset.map(t => `<li class="d-flex gap-2 text-secondary fs-6"><i class="fa-solid fa-xmark text-danger mt-1"></i> <span>${t}</span></li>`).join('');
  const founderHTML = stageData.founderMindset.map(s => `<li class="d-flex gap-2 text-secondary fs-6"><i class="fa-solid fa-check text-success mt-1"></i> <span>${s}</span></li>`).join('');

  // AI Prompts Tab
  let promptTabs = '';
  let promptContents = '';
  
  if (promptData.prompts && promptData.prompts.length > 0) {
    promptTabs = promptData.prompts.map((p, i) => 
      `<button class="btn ${i===0?'btn-dark':'btn-outline-secondary'} rounded-pill px-4 sub-prompt-btn ${i===0?'active':''}" onclick="switchSubPrompt(${i})">${p.label}</button>`
    ).join('');
    
    promptContents = promptData.prompts.map((p, i) => `
      <div class="sub-prompt-content" style="display: ${i===0?'block':'none'}">
        <p class="text-secondary mb-3 fs-6"><i class="fa-solid fa-lightbulb" style="color: var(--gold)"></i> ${p.importance}</p>
        <div class="code-box-wrapper position-relative">
          <button class="copy-btn btn btn-sm btn-dark position-absolute top-0 end-0 m-3" onclick='copyPrompt(${JSON.stringify(p.text)})' title="Copy Prompt">
            <i class="fa-regular fa-copy"></i> Copy
          </button>
          <div class="code-box text-light p-4 rounded-3" style="background: #111827; font-family: 'JetBrains Mono', monospace; font-size: 14px; white-space: pre-wrap; overflow-x: auto;">${highlightBrackets(p.text)}</div>
        </div>
      </div>
    `).join('');
  } else {
     promptContents = `<p class="fs-6 text-secondary">No prompts available for this stage.</p>`;
  }

  // Agent setup if any
  let agentSetupHTML = '';
  if (promptData.agentSetup && promptData.agentSetup.has) {
    agentSetupHTML = `
      <div class="card bg-light border-0 mb-4" style="border-radius: 1rem;">
        <div class="card-body p-4">
          <h4 class="h5 fw-bold mb-2"><i class="fa-solid fa-robot"></i> System Prompt (${promptData.agentSetup.name})</h4>
          <p class="text-secondary fs-6 mb-3">${promptData.agentSetup.importance}</p>
          <div class="code-box-wrapper position-relative">
            <button class="copy-btn btn btn-sm btn-dark position-absolute top-0 end-0 m-3" onclick='copyPrompt(${JSON.stringify(promptData.agentSetup.prompt)})' title="Copy System Prompt">
              <i class="fa-regular fa-copy"></i> Copy
            </button>
            <div class="code-box text-light p-4 rounded-3" style="background: #111827; font-family: 'JetBrains Mono', monospace; font-size: 14px; white-space: pre-wrap; overflow-x: auto;">${highlightBrackets(promptData.agentSetup.prompt)}</div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="card shadow-lg border-0 mb-5" style="border-radius: 1.5rem; overflow: hidden; animation: fadeIn 0.4s ease;">
      <div class="card-header bg-white border-bottom p-4 p-md-5 d-flex flex-column flex-md-row gap-4 align-items-md-start">
        <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 60px; height: 60px; background:${col.light}; color:${col.hex}; font-family: 'Outfit', sans-serif; font-size: 28px; font-weight: 700;">
          ${stageData.num}
        </div>
        <div>
          <h2 class="display-6 fw-bold mb-2" style="font-family: 'Outfit', sans-serif;">${stageData.title}</h2>
          <p class="fs-5 text-secondary mb-3">${stageData.subtitle}</p>
          <div class="d-flex flex-wrap gap-2">
            <span class="badge rounded-pill py-2 px-3 fs-6 fw-semibold" style="background:${col.light}; color:${col.hex}">${stageData.tag}</span>
            ${agentPill}
          </div>
        </div>
      </div>

      <div class="card-body p-4 p-md-5">
        <div class="d-flex gap-2 overflow-auto pb-3 mb-4 border-bottom pres-tabs-container">
          <button class="btn btn-dark pres-tab-btn active text-nowrap rounded-pill px-4" data-tab="checklist" onclick="switchTab('checklist')">Core Concepts</button>
          <button class="btn btn-outline-secondary pres-tab-btn text-nowrap rounded-pill px-4" data-tab="prompts" onclick="switchTab('prompts')">AI Prompts</button>
          <button class="btn btn-outline-secondary pres-tab-btn text-nowrap rounded-pill px-4" data-tab="mindset" onclick="switchTab('mindset')">Mindset Shift</button>
          <button class="btn btn-outline-secondary pres-tab-btn text-nowrap rounded-pill px-4" data-tab="resources" onclick="switchTab('resources')">Resources</button>
          ${stageData.ideaBank ? `<button class="btn btn-outline-secondary pres-tab-btn text-nowrap rounded-pill px-4" data-tab="ideabank" onclick="switchTab('ideabank')">Idea Bank</button>` : ''}
        </div>
        
        <!-- Tab 1: Checklist -->
        <div class="pres-content active" id="tab-content-checklist" style="display: block;">
          <p class="text-secondary mb-4 fs-6" style="line-height: 1.7;">${stageData.why}</p>
          <div class="row g-4">${cardsHTML}</div>
        </div>

        <!-- Tab 2: Prompts -->
        <div class="pres-content" id="tab-content-prompts" style="display: none;">
          ${agentSetupHTML}
          ${promptTabs ? `<div class="d-flex gap-2 flex-wrap mb-4">${promptTabs}</div>` : ''}
          ${promptContents}
        </div>

        <!-- Tab 3: Mindset Shift -->
        <div class="pres-content" id="tab-content-mindset" style="display: none;">
          <p class="text-secondary mb-4 fs-6">${stageData.importance}</p>
          <div class="row g-4">
            <div class="col-12 col-md-6">
              <div class="card h-100 shadow-sm border-danger border-opacity-25" style="border-radius: 1rem;">
                <div class="card-body p-4">
                  <h4 class="text-danger fs-6 text-uppercase mb-3 fw-bold" style="letter-spacing: 1px;">Student Mindset</h4>
                  <ul class="list-unstyled d-flex flex-column gap-3 mb-0">${studentHTML}</ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card h-100 shadow-sm border-success border-opacity-25" style="border-radius: 1rem;">
                <div class="card-body p-4">
                  <h4 class="text-success fs-6 text-uppercase mb-3 fw-bold" style="letter-spacing: 1px;">Founder Mindset</h4>
                  <ul class="list-unstyled d-flex flex-column gap-3 mb-0">${founderHTML}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 4: Resources -->
        <div class="pres-content" id="tab-content-resources" style="display: none;">
          <div class="card shadow-sm border-0" style="background: ${col.light}; border-radius: 1.5rem;">
             <div class="card-body p-4 p-md-5">
               <h3 class="fw-bold mb-4 d-flex align-items-center gap-2" style="font-family: 'Outfit', sans-serif; color: ${col.hex};">
                 <i class="fa-solid fa-link"></i> ${stageData.resources?.title || 'Resources'}
               </h3>
               <div class="row g-3">
                 ${stageData.resources?.links?.map(link => `
                   <div class="col-12">
                     <div class="card bg-white border shadow-sm" style="border-radius: 1rem;">
                       <div class="card-body p-3 p-md-4">
                         <a href="${link.url}" target="_blank" class="fw-bold text-decoration-none d-inline-flex align-items-center gap-2 mb-2 fs-5" style="color: ${col.hex};">
                           ${link.name} <i class="fa-solid fa-arrow-up-right-from-square fs-6"></i>
                         </a>
                         <p class="text-secondary mb-0 fs-6">${link.desc}</p>
                       </div>
                     </div>
                   </div>
                 `).join('') || '<p>No resources available.</p>'}
               </div>
             </div>
          </div>
        </div>

        <!-- Tab 5: Idea Bank (Optional) -->
        ${stageData.ideaBank ? `
        <div class="pres-content" id="tab-content-ideabank" style="display: none;">
          <div class="card shadow-sm border-0" style="background: ${col.light}; border-radius: 1.5rem;">
             <div class="card-body p-4 p-md-5">
               <h3 class="fw-bold mb-4 d-flex align-items-center gap-2" style="font-family: 'Outfit', sans-serif; color: ${col.hex};">
                 <i class="fa-solid fa-lightbulb"></i> ${stageData.ideaBank.title}
               </h3>
               <div class="row g-4">
                 ${stageData.ideaBank.categories.map(cat => `
                   <div class="col-12 col-md-6">
                     <div class="card h-100 bg-white border shadow-sm" style="border-radius: 1rem;">
                       <div class="card-body p-4">
                         <h4 class="fw-bold mb-3 fs-5 d-flex align-items-center gap-2" style="color: ${col.hex};"><i class="fa-solid fa-folder-open"></i> ${cat.name}</h4>
                         <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
                           ${cat.ideas.map(idea => `
                             <li class="d-flex align-items-start gap-2 text-secondary fs-6">
                               <i class="fa-solid fa-arrow-right mt-1" style="color: ${col.hex}; font-size: 12px;"></i>
                               <span>${idea}</span>
                             </li>
                           `).join('')}
                         </ul>
                       </div>
                     </div>
                   </div>
                 `).join('')}
               </div>
             </div>
          </div>
        </div>` : ''}

      </div>

      <div class="result-section bg-light border-top p-4 p-md-5">
        <div class="mb-4">
          <h4 class="fw-bold d-flex align-items-center gap-2 mb-2 fs-5"><i class="fa-solid fa-floppy-disk"></i> Save Stage Result</h4>
          <p class="text-secondary fs-6 mb-0">Store the final AI output for this stage so you don't lose it.</p>
        </div>
        <div class="res-history mb-4" id="res-history-container-${index}">
          <!-- Saved items render here -->
        </div>
        <div class="card shadow-sm border bg-white p-4" style="border-radius: 1rem;">
          <div class="mb-3">
            <input type="text" class="form-control form-control-lg fs-6" placeholder="Result Title (e.g., Final Opportunity Statement)" id="res-title-${index}">
          </div>
          <div class="mb-3">
            <textarea class="form-control fs-6" placeholder="Paste the final output from your AI agent here..." id="res-body-${index}" rows="4"></textarea>
          </div>
          <button class="btn btn-dark fw-bold px-4 py-2" onclick="saveResult(${index})">Save Result</button>
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
