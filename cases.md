# Portfolio Cases

Этот файл нужен для подготовки к разговору. Лендинг лежит в `portfolio/index.html`.

Для YPA в лендинге галерея начинается с разных product-flow экранов: dashboard, AI coach, budget, debt plan, alerts, credit insights. Auth/sign up экраны из проектного Figma-файла `YPA Fin Flows Copy` оставлены в конце, чтобы кейс не выглядел только как login flow.

Для SmartEat в лендинге используются реальные экраны, экспортированные из проектного Figma-файла `SmartEat Copy`.

Для Demetra в лендинге используются реальные mobile PNG-экраны, предоставленные отдельно: splash, каталог товаров и список товаров выбранной категории. Admin panel вынесена в отдельную галерею как supporting screen set для рассказа про sales/order/catalog workflow.

Для Rutilus / Norilsk Nickel в лендинге используются экраны, снятые из Figma-файла `Рутилус V3 Copy`: login, PIN-code, документ/поручения, форма поручения и календарь дедлайна.

Для Empiflow в лендинге используются реальные mobile screenshots: dashboard/tracks, completed onboarding track, learning activity details, library/documents.

Для Auto Dealers в лендинге используется более project-like visual screen set: vehicle capture, media gallery, Theta 360 preview, upload queue, listing details. Если появятся реальные скрины, заменить `portfolio/assets/auto-real/`.

Для остальных кейсов пока используются supporting mobile screen sets, чтобы было что показывать и рассказывать. Если появятся реальные скрины/Figma по Аэрофлоту, заменить их на реальные exports.

Галерея экранов сделана на Swiper, потому что он хорошо подходит для mobile-like каруселей, touch/swipe, навигации и презентации экранов.

## Как рассказывать общую историю

EN:

```text
I am an experienced React Native developer. I can build apps from scratch, design architecture, and also work inside large teams and existing codebases. I focus on practical delivery: clean structure, reliable UI, API integration, state management, performance, testing, and fast iteration. I also use AI tools when they help speed up implementation or research.
```

RU смысл:

```text
Я опытный React Native разработчик. Могу писать приложение с нуля, строить архитектуру, работать в больших командах и быстро включаться в существующий код. Мой фокус - быстро и качественно доводить мобильные фичи до рабочего состояния.
```

Extra if asked about release/support:

```text
I also handled releases to both App Store and Google Play, and I have experience supporting production apps after release. Some projects were built from scratch, and some were existing codebases where the main task was support, optimization, and stable feature delivery.
```

## YPA Finance - You Money Coach

Link: https://www.ypa.finance/en

Public app positioning:

- AI-powered finance / money coach app.
- Personal finance, budgeting, credit cards, debt planning, alerts, credit insights.
- Finance and money coach product.
- Project Figma source used for auth/onboarding visuals: `YPA Fin Flows Copy`.
- Portfolio gallery also shows broader product sections: dashboard, AI coach, budget planning, debt payoff, spending alerts, and credit insights.

Talk track:

```text
This is a finance mobile app with AI-assisted money coaching and personal finance flows. The useful discussion points are dashboard UX, AI coach flow, budget planning, debt payoff, alerts, credit insights, auth, secure data flow, state management, API integration, and performance.
```

My contribution draft:

```text
My React Native focus was feature implementation, app structure, reusable UI, API-driven screens, state management, and performance/quality work. I can discuss how I approach finance flows, alerts, user data screens, and fast delivery with ready-made libraries and AI-assisted development.
```

Need to confirm:

- Exact screens/features you implemented.
- Whether you worked on App Store release, analytics, push notifications, or subscriptions.
- Whether backend/API design was your responsibility or only integration.

## SmartEat

Figma source used for portfolio visuals: `SmartEat Copy`.

Strong project story:

- Nutrition and meal tracking mobile application.
- Real app flows include authorization, home dashboard, ingredient search, meal tracking, menu, cart, custom dish creation, health diary, profile, and health/allergen questionnaire.
- Good project for explaining forms, validation, navigation, reusable UI, state management, and API-driven product screens.

Talk track:

```text
SmartEat is a nutrition and meal tracking mobile app. The React Native work here is a good example of building many connected product flows: authorization, profile and health questionnaire, home dashboard with nutrition metrics, menu and cart, meal tracking, custom dishes, and health diary screens.
```

My contribution draft:

```text
My React Native focus was feature implementation, reusable UI, navigation, forms, validation, state management, and API-driven screens. This project is useful to discuss because it has many real mobile app flows, not just static screens.
```

Need to confirm:

- Exact features you owned.
- Whether you integrated barcode/search/food database APIs, notifications, analytics, or subscriptions.
- Whether you handled releases or only development.

## Demetra

Figma source used for portfolio structure: `Деметра`.

Known mobile screens now used in the portfolio:

- Splash screen with Demetra branding.
- Product catalog categories.
- Product list for selected category with search, price, availability, filters, and bottom navigation.

Known broader product context:

- iOS/Android mobile flows.
- Authorization screens with email/password, PIN-code, and Face ID flow.
- Manager dashboard screens with sales, revenue, and team progress.
- Catalog, cart/order, sales history, profile, and tab bar flows.
- Admin panel screens are shown in a separate gallery for sales/order/catalog management context.
- Domain appears to be agribusiness / sales operations, with agricultural product categories.

Talk track:

```text
Demetra is an agribusiness and sales operations product with mobile flows and admin panel workflows. It is useful to discuss because it combines secure authorization, catalog and cart/order flows, profile, sales history, manager dashboards, and operational admin screens with business metrics.
```

My contribution draft:

```text
My React Native focus was business-screen implementation, reusable UI, navigation, forms, API-driven lists, state management, authentication flows, and production-oriented mobile UX. The admin panel context is useful for explaining how mobile work fits into a wider B2B operational system.
```

Need to confirm:

- Exact app role and business domain wording.
- Exact screens/features you implemented.
- Whether you handled release, offline mode, push notifications, analytics, or enterprise distribution.

## Empiflow

Link: https://apkpure.com/empiflow/com.empiflow

Public app positioning:

- Mobile onboarding platform.
- Helps new hires move through onboarding journeys.
- Business workflow / employee experience domain.
- Real portfolio screens now show dashboard/tracks, completed onboarding track, learning activity details, and library/documents.

Talk track:

```text
This is a mobile onboarding and workflow app. For this kind of project, the key React Native work is building clear user flows, reliable navigation, API-driven dashboard and library screens, task/activity states, learning content, documents, offline or low-connectivity handling if needed, and maintainable feature modules.
```

My contribution draft:

```text
My React Native focus was mobile feature delivery, navigation, architecture, reusable components, API integration, and stable implementation of business flows. I can work quickly in this type of product because the patterns are clear: onboarding steps, task status, user progress, forms, and notifications.
```

Need to confirm:

- Exact features you owned.
- Whether there were push notifications, chat, calendar, documents, or offline behavior.
- Team size and your role: solo, lead, or team developer.

## HR Business Mobile App

Source: resume, knomary.

Strongest story:

- Greenfield cross-platform HR Business app.
- You helped start it from scratch.
- You worked on architecture and led frontend/mobile development.
- You handled UI/UX, styling, logic, API integration, forms, navigation, localization, offline functionality, performance, file handling, branding, and platform details.
- Resume mentions 40+ packages.

Talk track:

```text
One of my strongest React Native projects was a greenfield HR business app. I worked on the architecture and full mobile frontend lifecycle: UI, logic, API integration, forms, navigation, localization, offline functionality, performance, file handling, branding, and platform-specific issues. This is why I am comfortable starting a new RN app from zero.
```

## Auto Dealers Media App

Source: resume, Softteco.

Strongest story:

- Cross-platform app for UK auto dealers.
- Main React Native developer.
- Camera, images, videos.
- Theta 360 device integration for 360 media.
- API integration and collaboration with backend team from Great Britain.
- Portfolio visuals show the practical workflow: vehicle capture, required shots, gallery, 360 preview, background upload queue, and listing publishing details.

Talk track:

```text
At Softteco I was the main React Native developer on a cross-platform app for UK auto dealers. I implemented UI, styles, app logic, API requests, camera features, image/video handling, and worked with a Theta 360 device for 360 media content. This project is a good example of mobile-specific React Native work, not only standard screens.
```

## Rutilus / Norilsk Nickel

Source: confirmed by user and Figma link `Рутилус V3 Copy`.

Strongest story:

- Enterprise mobile app for Norilsk Nickel.
- Existing production React Native application, not a greenfield-only story.
- Main angle: support, maintenance, stability, and optimization.
- Important technical challenge: document-heavy workflows with thousands of documents.
- Useful for explaining performance, virtualized lists, caching/loading strategy, PDF/document preview, approvals, search/filtering, offline access, and production fixes.
- Portfolio visuals now use screens from the Rutilus V3 Figma file: authentication, PIN-code, document detail, assignment form, deadline calendar, and dark theme PIN.

Talk track:

```text
Rutilus was a Norilsk Nickel enterprise mobile app with document-heavy workflows. My focus was support, optimization, and stability in an existing React Native codebase. One important challenge was working with thousands of documents, so the work was about keeping screens responsive, improving loading and rendering behavior, search and filtering, document preview, offline cache, and production fixes.
```

Short version:

```text
I have experience not only with greenfield apps, but also with production support. For example, I worked on Rutilus for Norilsk Nickel, optimizing document-heavy flows with thousands of documents.
```

Need to confirm later:

- Exact Rutilus feature ownership.
- Whether these apps were internal or public.
- Exact document tech: PDF, images, files, offline cache, search, filters, sync.
- Whether release work was App Store, Google Play, enterprise distribution, or all of them.

## Aeroflot Enterprise App

Source: confirmed by user.

Short talk track:

```text
I also worked on enterprise mobile app support for Aeroflot. The main value there was joining an existing production codebase, fixing issues, improving stability, and supporting release-quality mobile workflows.
```

## If English Is Difficult During The Call

Use these phrases:

```text
Could you please repeat that a bit slower?
```

```text
Let me make sure I understood correctly.
```

```text
Could you write the key point in the chat?
```

```text
I can explain this better with an example.
```

```text
My spoken English is not perfect, but I am comfortable with technical communication and written details.
```

## Short Italian Touch

Use once at the beginning:

```text
Piacere di conoscerti. My Italian is very basic, but I wanted to say hello properly.
```

Use at the end:

```text
Grazie per il tuo tempo.
```

## Screenshots To Find

Good screenshot types:

- Home/dashboard screen.
- Login/onboarding flow.
- Main list or task flow.
- Details screen.
- Settings/profile screen.
- Any screen with camera/media/file flow.
- Any screen showing charts, progress, or business workflow.

How to find them:

- App Store / Google Play listing screenshots.
- TestFlight / internal build screenshots.
- Old Jira tickets, PRs, Slack/Telegram messages.
- Figma screens.
- GitHub/GitLab README images.
- Local simulator/device screenshots.
- App marketing pages or release notes.

Use real screens when they are available. For supporting screen sets, describe them as visual context for the project story.
