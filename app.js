const galleries = {
  ypa: {
    title: "YPA Finance - money coach app",
    note: "Finance screens I can discuss: dashboard, AI coach, budget, debt payoff, alerts, credit insights, and auth.",
    screens: [
      ["./assets/ypa-product/ypa-dashboard.svg", "Finance dashboard"],
      ["./assets/ypa-product/ypa-coach.svg", "AI money coach"],
      ["./assets/ypa-product/ypa-budget.svg", "Budget planner"],
      ["./assets/ypa-product/ypa-debt.svg", "Debt payoff plan"],
      ["./assets/ypa-product/ypa-alerts.svg", "Spending alerts"],
      ["./assets/ypa-product/ypa-credit.svg", "Credit insights"],
      ["./assets/ypa-real/ypa-01.png", "Registration validation"],
      ["./assets/ypa-real/ypa-02.png", "Sign up flow"],
    ],
  },
  smarteat: {
    title: "SmartEat - nutrition app",
    note: "Nutrition app screens for food search, meal tracking, profile, diary, and user health data.",
    screens: [
      ["./assets/smarteat-real/smarteat-01.png", "Authorization"],
      ["./assets/smarteat-real/smarteat-02.png", "Home dashboard"],
      ["./assets/smarteat-real/smarteat-03.png", "Ingredient search"],
      ["./assets/smarteat-real/smarteat-04.png", "Meal tracking"],
      ["./assets/smarteat-real/smarteat-05.png", "Cart meal selection"],
      ["./assets/smarteat-real/smarteat-06.png", "Menu screen"],
      ["./assets/smarteat-real/smarteat-07.png", "Add custom dish"],
      ["./assets/smarteat-real/smarteat-08.png", "Health diary"],
      ["./assets/smarteat-real/smarteat-09.png", "Profile"],
      ["./assets/smarteat-real/smarteat-10.png", "Allergens questionnaire"],
    ],
  },
  demetra: {
    title: "Demetra - mobile app screens",
    note: "Mobile catalog and sales screens for an agribusiness product.",
    screens: [
      ["./assets/demetra-real/demetra-01.png", "Splash screen"],
      ["./assets/demetra-real/demetra-02.png", "Product catalog"],
      ["./assets/demetra-real/demetra-03.png", "Category product list"],
    ],
  },
  demetraAdmin: {
    title: "Demetra - admin panel",
    note: "Admin screens for orders, catalog management, sales data, and reporting.",
    screens: [
      ["./assets/screens/demetra-admin-01.svg", "Admin sales dashboard", "wide"],
      ["./assets/screens/demetra-admin-02.svg", "Admin orders and catalog", "wide"],
    ],
  },
  empiflow: {
    title: "Empiflow - onboarding app",
    note: "Onboarding screens for employee tracks, activities, learning content, and library documents.",
    screens: [
      ["./assets/empiflow-real/empiflow-01.webp", "Dashboard and tracks"],
      ["./assets/empiflow-real/empiflow-02.webp", "Completed onboarding track"],
      ["./assets/empiflow-real/empiflow-03.webp", "Learning activity details"],
      ["./assets/empiflow-real/empiflow-04.webp", "Library and documents"],
    ],
  },
  rutilus: {
    title: "Rutilus / Norilsk Nickel - enterprise app",
    note: "Enterprise screens for login, PIN access, document details, assignments, deadlines, and document workflows.",
    screens: [
      ["./assets/rutilus-real/rutilus-05.jpg", "Login"],
      ["./assets/rutilus-real/rutilus-04.jpg", "PIN code"],
      ["./assets/rutilus-real/rutilus-02.jpg", "Document details and assignees"],
      ["./assets/rutilus-real/rutilus-03.jpg", "Assignment form"],
      ["./assets/rutilus-real/rutilus-01.jpg", "Deadline calendar"],
      ["./assets/rutilus-real/rutilus-07.jpg", "Dark theme PIN"],
    ],
  },
  auto: {
    title: "Auto dealers media app",
    note: "Vehicle media flows for camera capture, photo/video gallery, Theta 360 preview, upload queue, and listing details.",
    screens: [
      ["./assets/auto-real/auto-01.svg", "Vehicle capture"],
      ["./assets/auto-real/auto-02.svg", "Media gallery"],
      ["./assets/auto-real/auto-03.svg", "Theta 360 preview"],
      ["./assets/auto-real/auto-04.svg", "Upload queue"],
      ["./assets/auto-real/auto-05.svg", "Listing details"],
    ],
  },
};

function setupRevealAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const animationGroups = [
    { selector: ".hero-copy > *", delayStep: 70, maxDelay: 280 },
    { selector: ".hero-media, .particle-showcase", delayStep: 0, maxDelay: 0 },
    { selector: ".summary > div", delayStep: 80, maxDelay: 320 },
    { selector: ".section-heading", delayStep: 0, maxDelay: 0 },
    { selector: ".role-fit-card", delayStep: 70, maxDelay: 280 },
    { selector: ".case", delayStep: 90, maxDelay: 240 },
    { selector: ".skill-cube", delayStep: 55, maxDelay: 360 },
    { selector: ".callout", delayStep: 0, maxDelay: 0 },
    { selector: ".resume-card", delayStep: 0, maxDelay: 0 },
    { selector: ".contact-grid > a", delayStep: 65, maxDelay: 260 },
    { selector: "footer", delayStep: 0, maxDelay: 0 },
  ];

  const targets = [];
  document.documentElement.classList.add("js-animate");

  animationGroups.forEach(({ selector, delayStep, maxDelay }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      const delay = Math.min(index * delayStep, maxDelay);
      element.classList.add("reveal");
      element.style.setProperty("--delay", `${delay}ms`);
      targets.push(element);
    });
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    },
  );

  targets.forEach((element) => observer.observe(element));
}

setupRevealAnimations();

function setupParticleShowcase() {
  const widget = document.querySelector("[data-particle-widget]");
  const shell = document.querySelector("[data-particle-showcase]");
  const canvas = document.querySelector("[data-particle-canvas]");
  const tooltip = document.querySelector("[data-particle-tooltip]");
  const tooltipKicker = document.querySelector("[data-particle-tooltip-kicker]");
  const tooltipTitle = document.querySelector("[data-particle-tooltip-title]");
  const tooltipBody = document.querySelector("[data-particle-tooltip-body]");
  const gamePanel = document.querySelector("[data-particle-game]");
  const gameStartButton = document.querySelector("[data-particle-game-start]");
  const fullscreenButton = document.querySelector("[data-particle-fullscreen]");
  const gameTime = document.querySelector("[data-particle-game-time]");
  const gameScore = document.querySelector("[data-particle-game-score]");
  const gameResult = document.querySelector("[data-particle-game-result]");
  if (!shell || !canvas) return;
  const fullscreenTarget = widget || shell;

  const context = canvas.getContext("2d");
  if (!context) return;

  const GAME_DURATION_MS = 10000;
  const AVERAGE_POP_SCORE = 12;
  const TARGET_COLOR = "235, 85, 76";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const palette = [
    "94, 210, 166",
    "88, 178, 214",
    "226, 150, 96",
    "231, 198, 111",
    "238, 246, 242",
  ];
  const skillHotspots = [
    {
      id: "architecture",
      ratio: 0.08,
      kicker: "Architecture",
      title: "React / React Native architecture",
      body: "Components, navigation, pages, shared UI, state, and feature structure for apps that can grow.",
    },
    {
      id: "api",
      ratio: 0.2,
      kicker: "Integration",
      title: "REST and GraphQL screens",
      body: "Loading, error, empty, validation, refresh, auth, and CMS-style data states for real app flows.",
    },
    {
      id: "performance",
      ratio: 0.33,
      kicker: "Performance",
      title: "Performance and Sentry mindset",
      body: "Practical fixes for lists, heavy screens, slow networks, error analysis, and release stability.",
    },
    {
      id: "native",
      ratio: 0.48,
      kicker: "UI stack",
      title: "Reusable UI libraries",
      body: "Component work with React UI patterns, Ant Design context, responsive layouts, and design-to-code delivery.",
    },
    {
      id: "offline",
      ratio: 0.6,
      kicker: "Product reality",
      title: "i18n, files and edge states",
      body: "Localized flows, files, cached data, local state, and unstable network handling.",
    },
    {
      id: "legacy",
      ratio: 0.72,
      kicker: "Existing apps",
      title: "Join and improve codebases",
      body: "Understand current structure, work with Git reviews, NX-style boundaries, and improve without rewrites.",
    },
    {
      id: "release",
      ratio: 0.85,
      kicker: "Delivery",
      title: "Production delivery",
      body: "Build checks, Docker basics, release checks, final fixes, and clear team communication.",
    },
    {
      id: "ai",
      ratio: 0.94,
      kicker: "Speed",
      title: "AI-assisted delivery",
      body: "AI for routine work, refactoring, tests and research with human review.",
    },
  ];
  const state = {
    width: 0,
    height: 0,
    dpr: 1,
    particles: [],
    pointer: {
      x: 0,
      y: 0,
      active: false,
      holding: false,
      force: 0,
    },
    rotation: 0,
    rotationSpeed: 0,
    frame: 0,
    releaseTimer: 0,
    tooltipTimer: 0,
    tooltipPinned: false,
    activeSkillId: "",
    game: {
      running: false,
      restoring: false,
      score: 0,
      endsAt: 0,
      targets: [],
      bursts: [],
    },
  };

  function randomFor(seed) {
    return Math.sin(seed * 9283.17) * 0.5 + 0.5;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  let localFullscreenScrollY = 0;

  function getNativeFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  }

  function isLocalFullscreenActive() {
    return fullscreenTarget.classList.contains("is-local-fullscreen");
  }

  function isFullscreenActive() {
    return getNativeFullscreenElement() === fullscreenTarget || isLocalFullscreenActive();
  }

  function updateFullscreenButton() {
    if (!fullscreenButton) return;

    const active = isFullscreenActive();
    const label = active ? "Exit full screen" : "Open full screen";
    fullscreenButton.setAttribute("aria-label", label);
    fullscreenButton.setAttribute("title", label);
    fullscreenButton.classList.toggle("is-active", active);
    fullscreenTarget.classList.toggle("is-fullscreen", active);
  }

  function enterLocalFullscreen() {
    localFullscreenScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    fullscreenTarget.classList.add("is-local-fullscreen");
    document.documentElement.classList.add("particle-fullscreen-lock");
    document.body.classList.add("particle-fullscreen-lock");
    updateFullscreenButton();
    redrawAfterLayoutChange();
  }

  function exitLocalFullscreen() {
    fullscreenTarget.classList.remove("is-local-fullscreen");
    document.documentElement.classList.remove("particle-fullscreen-lock");
    document.body.classList.remove("particle-fullscreen-lock");
    updateFullscreenButton();
    redrawAfterLayoutChange();
    window.scrollTo(0, localFullscreenScrollY);
  }

  function redrawAfterLayoutChange() {
    window.cancelAnimationFrame(state.frame);
    resizeCanvas();
    if (state.game.running) {
      fillGameTargets();
    }
    drawFrame();
  }

  function setGameStateClass(className, enabled) {
    shell.classList.toggle(className, enabled);
    if (widget) {
      widget.classList.toggle(className, enabled);
    }
  }

  async function toggleFullscreen(event) {
    if (event) {
      event.stopPropagation();
    }

    try {
      if (isLocalFullscreenActive()) {
        exitLocalFullscreen();
        return;
      }

      if (getNativeFullscreenElement() === fullscreenTarget) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
        return;
      }

      const requestFullscreen = fullscreenTarget.requestFullscreen || fullscreenTarget.webkitRequestFullscreen;
      if (requestFullscreen) {
        await requestFullscreen.call(fullscreenTarget);
      } else {
        enterLocalFullscreen();
      }
    } catch (error) {
      enterLocalFullscreen();
    }
  }

  function assignSkillHotspots() {
    const usedIndexes = new Set();
    const maxIndex = Math.max(0, state.particles.length - 1);

    skillHotspots.forEach((skill, skillIndex) => {
      let index = Math.round(maxIndex * skill.ratio);
      while (usedIndexes.has(index) && index < maxIndex) {
        index += 1;
      }
      while (usedIndexes.has(index) && index > 0) {
        index -= 1;
      }

      const particle = state.particles[index];
      if (!particle) return;

      usedIndexes.add(index);
      particle.skill = { ...skill, order: skillIndex };
      particle.size += 1.35;
    });
  }

  function createParticles() {
    const previousParticles = state.particles;
    const area = state.width * state.height;
    const count = reduceMotion ? 88 : Math.min(260, Math.max(128, Math.floor(area / 2100)));
    const centerX = state.width / 2;
    const centerY = state.height / 2;
    const padding = state.width < 430 ? 18 : 24;

    state.particles = Array.from({ length: count }, (_, index) => {
      const ratio = index / Math.max(1, count - 1);
      const seed = index + 1;
      const angle = index * 2.3999632297 + (randomFor(seed * 1.7) - 0.5) * 0.95;
      const radius = Math.sqrt(ratio) * (0.86 + randomFor(seed * 2.3) * 0.2);
      const fieldX = state.width * (0.43 + randomFor(seed * 3.1) * 0.08);
      const fieldY = state.height * (0.37 + randomFor(seed * 4.7) * 0.09);
      const jitterX = (randomFor(seed * 6.3) - 0.5) * state.width * 0.2;
      const jitterY = (randomFor(seed * 8.9) - 0.5) * state.height * 0.18;
      const baseX = clamp(centerX + Math.cos(angle) * radius * fieldX + jitterX, padding, state.width - padding);
      const baseY = clamp(centerY + Math.sin(angle) * radius * fieldY + jitterY, padding, state.height - padding);
      const baseZ = (randomFor(seed * 10.7) - 0.5) * Math.min(state.width, state.height) * 0.72;
      const previous = previousParticles[index];

      return {
        index,
        x: previous ? previous.x : baseX,
        y: previous ? previous.y : baseY,
        baseX,
        baseY,
        baseZ,
        depthAlpha: previous ? previous.depthAlpha : 1,
        depthScale: previous ? previous.depthScale : 1,
        size: 1.2 + randomFor(seed * 4.3) * 2.4,
        speed: 0.45 + randomFor(seed * 5.9) * 0.95,
        phase: randomFor(seed * 8.1) * Math.PI * 2,
        color: palette[index % palette.length],
        popped: previous ? previous.popped : false,
        gameTarget: previous ? previous.gameTarget : false,
        restoreAt: previous ? previous.restoreAt : 0,
        restoreProgress: previous ? previous.restoreProgress : 1,
      };
    });

    assignSkillHotspots();
  }

  function resizeCanvas() {
    const rect = shell.getBoundingClientRect();
    state.width = Math.max(1, rect.width);
    state.height = Math.max(1, rect.height);
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(state.width * state.dpr);
    canvas.height = Math.round(state.height * state.dpr);
    canvas.style.width = `${state.width}px`;
    canvas.style.height = `${state.height}px`;
    context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

    state.pointer.x = state.width / 2;
    state.pointer.y = state.height / 2;
    createParticles();
  }

  function setPointerPosition(event) {
    const rect = canvas.getBoundingClientRect();
    state.pointer.x = event.clientX - rect.left;
    state.pointer.y = event.clientY - rect.top;
  }

  function updateGameUi(remainingMs = GAME_DURATION_MS) {
    if (gameTime) {
      gameTime.textContent = (Math.max(0, remainingMs) / 1000).toFixed(1);
    }

    if (gameScore) {
      gameScore.textContent = String(state.game.score);
    }
  }

  function createGameMessage(score) {
    if (score > AVERAGE_POP_SCORE) {
      return `You popped ${score} nodes. You beat ${AVERAGE_POP_SCORE}. Reward unlocked: one free consultation. Promo code: ЗВЕЗДЫ.`;
    }

    if (score === AVERAGE_POP_SCORE) {
      return `You popped ${score} nodes. You hit ${AVERAGE_POP_SCORE}. Victory.`;
    }

    return `You popped ${score} nodes. You need ${AVERAGE_POP_SCORE} to win. Try again.`;
  }

  function clearGameTargets() {
    state.game.targets = [];
    state.particles.forEach((particle) => {
      particle.gameTarget = false;
    });
  }

  function getTargetCount() {
    return state.width < 430 ? 3 : 4;
  }

  function getTargetCandidates() {
    const panelTop = gamePanel && gamePanel.offsetParent === shell ? gamePanel.offsetTop : state.height;
    const margin = 22;
    const candidates = state.particles.filter((particle) => {
      return (
        !particle.popped &&
        !particle.gameTarget &&
        particle.x > margin &&
        particle.x < state.width - margin &&
        particle.y > margin &&
        particle.y < panelTop - margin
      );
    });

    if (candidates.length) return candidates;

    return state.particles.filter((particle) => !particle.popped && !particle.gameTarget);
  }

  function addGameTarget() {
    const candidates = getTargetCandidates();
    if (!candidates.length) return;

    const seed = state.game.score + state.game.targets.length * 13 + performance.now() * 0.01;
    const selected = candidates[Math.floor(randomFor(seed) * candidates.length)];
    selected.gameTarget = true;
    state.game.targets.push(selected.index);
  }

  function fillGameTargets() {
    state.game.targets = state.game.targets.filter((index) => {
      const particle = state.particles[index];
      return particle && particle.gameTarget && !particle.popped;
    });

    while (state.game.targets.length < getTargetCount()) {
      const before = state.game.targets.length;
      addGameTarget();
      if (state.game.targets.length === before) break;
    }
  }

  function resetGameParticles() {
    clearGameTargets();
    state.particles.forEach((particle) => {
      particle.popped = false;
      particle.gameTarget = false;
      particle.restoreAt = 0;
      particle.restoreProgress = 1;
    });
  }

  function startGame() {
    state.game.running = true;
    state.game.restoring = false;
    state.game.score = 0;
    state.game.endsAt = performance.now() + GAME_DURATION_MS;
    state.game.bursts = [];
    state.tooltipPinned = false;
    window.clearTimeout(state.tooltipTimer);
    hideTooltip();
    resetGameParticles();
    fillGameTargets();
    updateGameUi();

    setGameStateClass("is-game-running", true);
    setGameStateClass("is-game-finished", false);

    if (gameStartButton) {
      gameStartButton.disabled = true;
      gameStartButton.textContent = "Popping...";
    }

    if (gameResult) {
      gameResult.textContent = `Pop only red targets. Score ${AVERAGE_POP_SCORE} to win.`;
    }

    if (reduceMotion) {
      window.cancelAnimationFrame(state.frame);
      state.frame = requestAnimationFrame(drawFrame);
    }
  }

  function scheduleParticleRestore() {
    const now = performance.now();
    let restoreCount = 0;

    state.particles.forEach((particle, index) => {
      if (!particle.popped) return;

      particle.restoreAt = now + 160 + (index % 19) * 36;
      particle.restoreProgress = 0;
      restoreCount += 1;
    });

    state.game.restoring = restoreCount > 0;
  }

  function finishGame() {
    state.game.running = false;
    updateGameUi(0);
    scheduleParticleRestore();
    clearGameTargets();

    setGameStateClass("is-game-running", false);
    setGameStateClass("is-game-finished", true);

    if (gameStartButton) {
      gameStartButton.disabled = false;
      gameStartButton.textContent = "Play again";
    }

    if (gameResult) {
      gameResult.textContent = createGameMessage(state.game.score);
    }
  }

  function popParticleAt(x, y) {
    let nearestParticle = null;
    let nearestDistance = Infinity;

    state.particles.forEach((particle) => {
      if (particle.popped) return;
      if (!particle.gameTarget) return;

      const hitRadius = Math.max(24, particle.size * (state.width < 430 ? 9 : 7.4) * (particle.depthScale ?? 1));
      const distance = Math.hypot(x - particle.x, y - particle.y);

      if (distance <= hitRadius && distance < nearestDistance) {
        nearestParticle = particle;
        nearestDistance = distance;
      }
    });

    if (!nearestParticle) return false;

    nearestParticle.popped = true;
    nearestParticle.gameTarget = false;
    nearestParticle.restoreAt = 0;
    nearestParticle.restoreProgress = 0;
    state.game.targets = state.game.targets.filter((index) => index !== nearestParticle.index);
    state.game.score += 1;
    state.game.bursts.push({
      x: nearestParticle.x,
      y: nearestParticle.y,
      radius: Math.max(22, nearestParticle.size * 7.5),
      color: TARGET_COLOR,
      bornAt: performance.now(),
    });
    updateGameUi(Math.max(0, state.game.endsAt - performance.now()));
    fillGameTargets();
    return true;
  }

  function updateParticleRestore(now) {
    if (!state.game.restoring) return;

    let stillRestoring = false;

    state.particles.forEach((particle) => {
      if (!particle.restoreAt) return;

      if (now < particle.restoreAt) {
        stillRestoring = true;
        return;
      }

      particle.popped = false;
      particle.restoreProgress = clamp((now - particle.restoreAt) / 520, 0, 1);

      if (particle.restoreProgress < 1) {
        stillRestoring = true;
      } else {
        particle.restoreAt = 0;
      }
    });

    state.game.restoring = stillRestoring;
  }

  function drawGameBursts(now) {
    state.game.bursts = state.game.bursts.filter((burst) => now - burst.bornAt < 520);

    state.game.bursts.forEach((burst) => {
      const progress = (now - burst.bornAt) / 520;
      const radius = burst.radius + progress * 34;

      context.save();
      context.lineWidth = 2;
      context.strokeStyle = `rgba(${burst.color}, ${1 - progress})`;
      context.beginPath();
      context.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
      context.stroke();
      context.restore();
    });
  }

  function getActiveSkillParticle() {
    if (!state.activeSkillId) return null;
    return state.particles.find((particle) => particle.skill && particle.skill.id === state.activeSkillId && !particle.popped) || null;
  }

  function updateTooltipPosition(particle) {
    if (!tooltip || !particle) return;

    const margin = 14;
    const tooltipWidth = tooltip.offsetWidth || 245;
    const tooltipHeight = tooltip.offsetHeight || 92;
    const maxX = Math.max(margin, state.width - tooltipWidth - margin);
    const maxY = Math.max(margin, state.height - tooltipHeight - margin);
    const preferredX = particle.x + tooltipWidth + 28 < state.width ? particle.x + 20 : particle.x - tooltipWidth - 20;
    const preferredY = particle.y - tooltipHeight / 2;

    tooltip.style.setProperty("--tooltip-x", `${Math.round(clamp(preferredX, margin, maxX))}px`);
    tooltip.style.setProperty("--tooltip-y", `${Math.round(clamp(preferredY, margin, maxY))}px`);
  }

  function showTooltipForParticle(particle) {
    if (!particle || !particle.skill || !tooltip) return;
    const { skill } = particle;

    if (state.activeSkillId !== skill.id) {
      if (tooltipKicker) tooltipKicker.textContent = skill.kicker;
      if (tooltipTitle) tooltipTitle.textContent = skill.title;
      if (tooltipBody) tooltipBody.textContent = skill.body;
    }

    state.activeSkillId = skill.id;
    updateTooltipPosition(particle);
    tooltip.classList.add("is-visible");
    tooltip.setAttribute("aria-hidden", "false");
  }

  function hideTooltip() {
    if (!tooltip) return;
    state.activeSkillId = "";
    tooltip.classList.remove("is-visible");
    tooltip.setAttribute("aria-hidden", "true");
  }

  function pinTooltip() {
    if (!state.activeSkillId) return;

    window.clearTimeout(state.tooltipTimer);
    state.tooltipPinned = true;
    state.tooltipTimer = window.setTimeout(() => {
      state.tooltipPinned = false;
      hideTooltip();
    }, 1700);
  }

  function selectNearestSkill(force = false) {
    let nearestParticle = null;
    let nearestDistance = Infinity;

    state.particles.forEach((particle) => {
      if (!particle.skill) return;
      if (particle.popped) return;

      const distance = Math.hypot(state.pointer.x - particle.x, state.pointer.y - particle.y);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestParticle = particle;
      }
    });

    const minDimension = Math.min(state.width, state.height);
    const threshold = force ? Math.min(140, Math.max(84, minDimension * 0.26)) : Math.min(74, Math.max(44, minDimension * 0.14));

    if (nearestParticle && nearestDistance <= threshold) {
      showTooltipForParticle(nearestParticle);
      return;
    }

    if (!state.tooltipPinned) {
      hideTooltip();
    }
  }

  function handlePointerMove(event) {
    setPointerPosition(event);
    selectNearestSkill(false);
  }

  function activate(event) {
    if (event && typeof event.clientX === "number") {
      setPointerPosition(event);
    }
    window.clearTimeout(state.releaseTimer);
    state.pointer.active = true;
    shell.classList.add("is-active");
    selectNearestSkill(event && (event.type === "pointerdown" || event.type === "focus"));
  }

  function deactivate() {
    window.clearTimeout(state.releaseTimer);
    state.pointer.active = false;
    state.pointer.holding = false;
    shell.classList.remove("is-active");
    if (!state.tooltipPinned) {
      hideTooltip();
    }
  }

  function release() {
    window.clearTimeout(state.releaseTimer);
    state.pointer.holding = false;
    state.releaseTimer = window.setTimeout(() => {
      state.pointer.active = false;
      shell.classList.remove("is-active");
    }, 420);
  }

  function handlePointerDown(event) {
    if (event && typeof event.clientX === "number") {
      setPointerPosition(event);
    }

    if (state.game.running) {
      popParticleAt(state.pointer.x, state.pointer.y);
      state.pointer.active = true;
      state.pointer.holding = true;
      shell.classList.add("is-active");
      return;
    }

    activate(event);
    state.pointer.holding = true;
    pinTooltip();
  }

  function drawConnections() {
    const maxDistance = Math.min(state.width, state.height) * (state.pointer.force > 0.1 ? 0.25 : 0.19);
    context.lineWidth = 1;

    for (let i = 0; i < state.particles.length; i += 1) {
      const first = state.particles[i];
      if (first.popped) continue;

      for (let j = i + 1; j < state.particles.length; j += 1) {
        const second = state.particles[j];
        if (second.popped) continue;

        const dx = first.x - second.x;
        const dy = first.y - second.y;
        const distance = Math.hypot(dx, dy);

        if (distance < maxDistance) {
          const restoreAlpha = (first.restoreProgress ?? 1) * (second.restoreProgress ?? 1);
          const depthAlpha = ((first.depthAlpha ?? 1) + (second.depthAlpha ?? 1)) * 0.5;
          const alpha = (1 - distance / maxDistance) * (0.14 + state.pointer.force * 0.18) * restoreAlpha * depthAlpha;
          context.strokeStyle = `rgba(190, 233, 211, ${alpha})`;
          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);
          context.stroke();
        }
      }
    }
  }

  function drawSkillMarkers(timeSeconds) {
    state.particles.forEach((particle) => {
      if (!particle.skill) return;
      if (particle.popped) return;

      const isActive = particle.skill.id === state.activeSkillId;
      const pulse = reduceMotion ? 1 : 1 + Math.sin(timeSeconds * 3 + particle.skill.order) * 0.12;
      const depthScale = particle.depthScale ?? 1;
      const depthAlpha = particle.depthAlpha ?? 1;
      const radius = (particle.size + (isActive ? 10 : 6) * pulse) * depthScale;

      context.save();
      context.lineWidth = isActive ? 2.3 : 1.35;
      context.shadowBlur = isActive ? 18 : 8;
      context.shadowColor = `rgba(${particle.color}, ${isActive ? 0.65 : 0.36})`;
      context.strokeStyle = `rgba(${particle.color}, ${(isActive ? 0.95 : 0.62) * depthAlpha})`;
      context.beginPath();
      context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      context.stroke();
      context.restore();
    });
  }

  function drawFrame(time = 0) {
    const now = time || performance.now();
    const timeSeconds = time * 0.001;
    const targetForce = state.pointer.active ? 1 : 0;
    state.pointer.force += (targetForce - state.pointer.force) * (reduceMotion ? 1 : 0.08);

    const targetRotationSpeed = state.pointer.holding && !reduceMotion ? 0.018 : 0;
    state.rotationSpeed += (targetRotationSpeed - state.rotationSpeed) * 0.08;
    state.rotation += state.rotationSpeed;

    if (state.game.running) {
      const remainingMs = state.game.endsAt - now;

      if (remainingMs <= 0) {
        finishGame();
      } else {
        updateGameUi(remainingMs);
      }
    }

    updateParticleRestore(now);

    context.clearRect(0, 0, state.width, state.height);

    const centerX = state.width / 2;
    const centerY = state.height / 2;
    const expansion = 1 + state.pointer.force * 0.34;
    const influence = Math.min(state.width, state.height) * 0.42;
    const minDimension = Math.min(state.width, state.height);
    const tiltX = state.rotation * 0.72;
    const tiltY = state.rotation;
    const tiltXCos = Math.cos(tiltX);
    const tiltXSin = Math.sin(tiltX);
    const tiltYCos = Math.cos(tiltY);
    const tiltYSin = Math.sin(tiltY);
    const perspectiveDistance = minDimension * 1.55;
    const visibleParticles = [];

    state.particles.forEach((particle, index) => {
      if (particle.popped) return;

      const driftX = reduceMotion ? 0 : Math.cos(timeSeconds * particle.speed + particle.phase) * 10;
      const driftY = reduceMotion ? 0 : Math.sin(timeSeconds * (particle.speed + 0.18) + particle.phase) * 8;
      const baseDx = (particle.baseX - centerX) * expansion;
      const baseDy = (particle.baseY - centerY) * expansion;
      const baseDz = particle.baseZ * (0.78 + state.pointer.force * 0.62);
      const tiltedY = baseDy * tiltXCos - baseDz * tiltXSin;
      const tiltedZ = baseDy * tiltXSin + baseDz * tiltXCos;
      const rotatedX = baseDx * tiltYCos + tiltedZ * tiltYSin;
      const rotatedZ = -baseDx * tiltYSin + tiltedZ * tiltYCos;
      const perspective = clamp(perspectiveDistance / (perspectiveDistance + rotatedZ), 0.68, 1.34);
      const projectionScale = 1 + (perspective - 1) * 0.82;
      let targetX = centerX + rotatedX * projectionScale + driftX;
      let targetY = centerY + tiltedY * projectionScale + driftY;
      particle.depthScale = projectionScale;
      particle.depthAlpha = clamp(0.45 + (projectionScale - 0.68) * 1.05, 0.42, 1);

      if (state.pointer.force > 0.02) {
        const pointerDx = state.pointer.x - particle.x;
        const pointerDy = state.pointer.y - particle.y;
        const pointerDistance = Math.max(1, Math.hypot(pointerDx, pointerDy));

        if (pointerDistance < influence) {
          const pull = (1 - pointerDistance / influence) * state.pointer.force;
          targetX += pointerDx * pull * 0.26;
          targetY += pointerDy * pull * 0.26;
        }
      }

      const ease = reduceMotion ? 1 : 0.045 + state.pointer.force * 0.025;
      particle.x += (targetX - particle.x) * ease;
      particle.y += (targetY - particle.y) * ease;

      const pulse = reduceMotion ? 1 : 1 + Math.sin(timeSeconds * 1.9 + index) * 0.16;
      const restoreProgress = particle.restoreProgress ?? 1;
      const gameScale = state.game.running ? (particle.gameTarget ? 3.8 : 1.12) : 1;
      const radius = particle.size * pulse * gameScale * projectionScale * (1 + state.pointer.force * 0.45) * (0.72 + restoreProgress * 0.28);
      const particleColor = state.game.running && particle.gameTarget ? TARGET_COLOR : particle.color;
      particle.renderRadius = radius;
      particle.renderColor = particleColor;
      particle.renderAlpha = (0.58 + state.pointer.force * 0.25) * restoreProgress * particle.depthAlpha;
      visibleParticles.push(particle);
    });

    drawConnections();

    visibleParticles.sort((first, second) => (first.depthScale ?? 1) - (second.depthScale ?? 1));
    visibleParticles.forEach((particle) => {
      context.save();
      if (state.game.running && particle.gameTarget) {
        context.shadowBlur = 24;
        context.shadowColor = `rgba(${TARGET_COLOR}, 0.84)`;
      } else if (state.game.running) {
        context.shadowBlur = 4;
        context.shadowColor = `rgba(${particle.color}, 0.22)`;
      }
      context.fillStyle = `rgba(${particle.renderColor}, ${particle.renderAlpha})`;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.renderRadius, 0, Math.PI * 2);
      context.fill();

      if (state.game.running && particle.gameTarget) {
        context.lineWidth = 2;
        context.strokeStyle = "rgba(255, 240, 236, 0.92)";
        context.stroke();
      }

      context.restore();
    });

    if (!state.game.running) {
      drawSkillMarkers(timeSeconds);
    }
    drawGameBursts(now);

    const activeParticle = getActiveSkillParticle();
    if (activeParticle) {
      updateTooltipPosition(activeParticle);
    }

    if (!reduceMotion || state.game.running || state.game.restoring || state.game.bursts.length > 0) {
      state.frame = requestAnimationFrame(drawFrame);
    }
  }

  resizeCanvas();
  updateFullscreenButton();
  drawFrame();

  if (!reduceMotion) {
    shell.addEventListener("pointerenter", activate);
    shell.addEventListener("pointermove", handlePointerMove);
    shell.addEventListener("pointerleave", deactivate);
    shell.addEventListener("pointerup", release);
    shell.addEventListener("pointercancel", deactivate);
    shell.addEventListener("focus", activate);
    shell.addEventListener("blur", deactivate);
  } else {
    showTooltipForParticle(state.particles.find((particle) => particle.skill));
  }

  shell.addEventListener("pointerdown", handlePointerDown);

  if (gamePanel) {
    gamePanel.addEventListener("pointerdown", (event) => event.stopPropagation());
    gamePanel.addEventListener("click", (event) => event.stopPropagation());
  }

  if (gameStartButton) {
    gameStartButton.addEventListener("click", startGame);
  }

  if (fullscreenButton) {
    fullscreenButton.addEventListener("pointerdown", (event) => event.stopPropagation());
    fullscreenButton.addEventListener("click", toggleFullscreen);
  }

  document.addEventListener("fullscreenchange", () => {
    updateFullscreenButton();
    redrawAfterLayoutChange();
  });
  document.addEventListener("webkitfullscreenchange", () => {
    updateFullscreenButton();
    redrawAfterLayoutChange();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isLocalFullscreenActive()) {
      exitLocalFullscreen();
    }
  });

  window.addEventListener("resize", redrawAfterLayoutChange);
}

setupParticleShowcase();

const modal = document.querySelector("#screen-gallery");
const modalTitle = document.querySelector("#gallery-title");
const modalNote = document.querySelector("#gallery-note");
const wrapper = document.querySelector("#gallery-wrapper");
const closeButton = document.querySelector("[data-gallery-close]");
let activeSwiper;

function openGallery(key) {
  const gallery = galleries[key];
  if (!gallery) return;

  modalTitle.textContent = gallery.title;
  modalNote.textContent = gallery.note;
  wrapper.innerHTML = gallery.screens
    .map(([src, label, variant]) => {
      const isWide = variant === "wide";
      return `
        <div class="swiper-slide${isWide ? " wide-slide" : ""}">
          <figure class="screen-shot${isWide ? " screen-shot-wide" : ""}">
            <img src="${src}" alt="${label}" loading="eager" />
            <figcaption>${label}</figcaption>
          </figure>
        </div>
      `;
    })
    .join("");

  if (activeSwiper) {
    activeSwiper.destroy(true, true);
  }

  modal.showModal();
  activeSwiper = new Swiper(".gallery-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    keyboard: { enabled: true },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 130,
      modifier: 1.1,
      slideShadows: false,
    },
  });
}

document.querySelectorAll("[data-gallery]").forEach((trigger) => {
  trigger.addEventListener("click", () => openGallery(trigger.dataset.gallery));
});

closeButton.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
