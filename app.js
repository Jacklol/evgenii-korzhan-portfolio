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
    { selector: ".hero-media", delayStep: 0, maxDelay: 0 },
    { selector: ".summary > div", delayStep: 80, maxDelay: 320 },
    { selector: ".section-heading", delayStep: 0, maxDelay: 0 },
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
