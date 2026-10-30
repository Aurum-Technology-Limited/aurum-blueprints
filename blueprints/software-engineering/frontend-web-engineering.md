---
id: software-engineering.frontend-web-engineering
name: Frontend Web Engineering
description: "A frontend you can keep changing: a browser matrix and rendering choice, Core Web Vitals and accessibility baselines, error triage, bundle budgets, component upkeep and the skills behind fast, accessible interfaces."
category: business
version: 1.0.0
tags: [software-engineering, frontend-web-engineering, engineer, javascript, css, accessibility, web-performance, components]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - remediation-plan
    - operational-checklist
    - reading-queue
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Frontend Web Engineering
          description: "Building web interfaces with modern frameworks, managing state, performance, accessibility and browser quirks in a maintainable way."
          projects:
            - name: Supported browser and device matrix
              description: |-
                ## Purpose
                Arguments about whether a bug matters usually come down to nobody having written down which browsers and devices are supported. Pulling the real mix from your analytics, then agreeing a short matrix of browsers, versions, screen widths and one or two reference phones, turns every later quirk into a clear in or out call and feeds your build target settings.

                ## Milestones
                1. The last 90 days of browser, version and device share exported from analytics.
                2. A matrix of supported browsers and versions agreed with product, with a cut-off rule such as last two major versions.
                3. Two reference devices named, including at least one mid-range Android phone.
                4. The build tool's browser target list updated to match the matrix and committed.

                ## Notes
                Analytics undercounts users who block trackers, so check server logs for user agents too before dropping an old browser.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written browser and device matrix sits in the repository and the build target configuration matches it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last 90 days of browser and device share from analytics"
                - "Draft a matrix with versions, screen widths and two reference phones"
                - "Agree the support cut-off rule with the product owner"
                - "Update the build tool browser targets to match the matrix"
            - name: Rendering mode and framework decision
              description: |-
                ## Purpose
                Choosing between a client-rendered single-page app, server rendering, static generation or an islands approach decides your hosting, your SEO, your first-load speed and how hard data fetching will be for years. Writing the decision down with the trade-offs, before the codebase grows around a default, saves a painful rewrite when search traffic or slow first loads become a problem.

                ## Milestones
                1. The pages of the product grouped by need: public and indexable, logged-in and interactive, or mostly static.
                2. Two or three rendering options compared on first-load speed, SEO, hosting cost and team familiarity.
                3. A framework and rendering mode chosen, with the reasons written as a short decision record.
                4. A thin proof of concept page deployed using the chosen approach.

                ## Notes
                Mixed products often want mixed modes: static marketing pages and a client-rendered app shell can live in one framework.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record naming the framework and rendering mode per page group is merged, and a proof of concept page is live on a preview URL."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every page type and mark whether it must be indexable"
                - "Compare two or three rendering options on speed, SEO and hosting cost"
                - "Write the decision and its trade-offs as a short decision record"
                - "Deploy one proof of concept page with the chosen approach"
            - name: Component and feature folder conventions
              description: |-
                ## Purpose
                Frontend repositories drift into a components folder with four hundred files and three different ideas of where hooks, styles and tests live. Agreeing a feature-first folder layout, naming rules and a clear line between shared UI components and feature code makes the codebase navigable for the next engineer and keeps imports from tangling.

                ## Milestones
                1. A one-page layout guide showing where components, hooks, styles, tests and stories live.
                2. A clear rule for when a component moves from a feature folder into the shared UI folder.
                3. Import path aliases configured so deep relative imports disappear.
                4. One existing feature moved to the new layout as the worked example.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A layout guide is in the repository README and at least one feature follows it with path aliases in use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the current folder tree and mark the confusing parts"
                - "Write a one-page layout guide for features and shared components"
                - "Configure import path aliases in the bundler and type checker"
                - "Move one feature into the new layout as the reference example"
            - name: TypeScript strict mode for the frontend
              description: |-
                ## Purpose
                Undefined props, untyped API responses and any types that leak through components cause a large share of frontend runtime errors. Switching on strict mode, typing the API boundary and turning off implicit any file by file catches those mistakes in the editor rather than in a customer's browser.

                ## Milestones
                1. Strict mode enabled in the compiler config, with a count of resulting errors recorded.
                2. API response types generated or written for every endpoint the frontend calls.
                3. Errors burned down folder by folder until the build passes in strict mode.
                4. A check in the pipeline that fails on new type errors.

                ## Notes
                If the error count is in the thousands, enable strict per folder with project references or an allowlist, rather than one giant branch.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The frontend builds with strict mode on, API responses are typed and the pipeline blocks new type errors."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Turn on strict mode locally and record the error count"
                - "Generate or write types for each API response the frontend uses"
                - "Fix strict errors one folder at a time in small pull requests"
                - "Add a type check step to the pipeline that blocks merges"
            - name: Browser-safe environment and build config
              description: |-
                ## Purpose
                Anything bundled into frontend code is public, yet secret keys still turn up in shipped JavaScript because an environment variable was prefixed the wrong way. Sorting config into what is safe to expose, what stays on the server and what changes per environment protects your keys and makes preview, staging and production builds predictable.

                ## Milestones
                1. Every environment variable the frontend reads listed and marked public or server-only.
                2. Server-only values removed from the client bundle and moved behind an API or edge function.
                3. One typed config module that reads and validates public values at start-up.
                4. A production bundle searched for key patterns, with no secrets found.

                ## Notes
                Rotate any key you find in a shipped bundle, even if you remove it today. It is already in caches and archives.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A typed config module is in use and a search of the production bundle finds no secret keys."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every environment variable the frontend code reads"
                - "Search the production bundle for API key and token patterns"
                - "Move server-only values behind an API route or edge function"
                - "Write a typed config module that validates public values at start-up"
            - name: Design tokens wired into CSS
              description: |-
                ## Purpose
                Hard-coded hex values and pixel sizes scattered through stylesheets make every rebrand or dark mode request a week of find and replace. Pulling colour, spacing, type and radius values into named tokens, exposed as CSS custom properties, lets design changes ship as one pull request and keeps the interface visually consistent.

                ## Milestones
                1. Colours, spacing, font sizes and radii audited, with duplicates and near-duplicates listed.
                2. A token file agreed with design, with semantic names such as surface, text-muted and accent.
                3. Tokens exported as CSS custom properties and used by the shared components.
                4. A dark theme or high-contrast theme switched on by changing token values only.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Shared components read colour and spacing only from CSS custom properties, and a second theme works by swapping token values."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Count the distinct colours and spacing values used in the stylesheets"
                - "Agree a semantic token list with the designer"
                - "Export the tokens as CSS custom properties"
                - "Replace hard-coded values in the shared components with tokens"
            - name: Core Web Vitals baseline from field data
              description: |-
                ## Purpose
                Lab scores from your own fast laptop tell you little about what users on real phones feel. Collecting field data for Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift on your top pages gives a baseline at the 75th percentile, which is the number search engines and users actually experience.

                ## Milestones
                1. A real user monitoring snippet or vitals library reporting from production.
                2. Two weeks of field data collected for the top ten pages by traffic.
                3. 75th percentile values recorded per page for LCP, INP and CLS, split by mobile and desktop.
                4. The three worst page and metric pairs named as the first targets.

                ## Notes
                Start from the **Metrics log** template. Report the 75th percentile, not the average, so a slow tail is not hidden.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A metrics log holds 75th percentile LCP, INP and CLS for the top ten pages, split by device, with three named targets."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add a web vitals reporting snippet to the production build"
                - "List the top ten pages by traffic from analytics"
                - "Record the 75th percentile vitals per page after two weeks"
                - "Name the three worst page and metric pairs as first targets"
            - name: Accessibility baseline audit of key pages
              description: |-
                ## Purpose
                About one in six people lives with a disability, and many of them cannot use a form that only works with a mouse or a button with no label. Auditing your five most-used pages with an automated checker, a keyboard and a screen reader shows where you stand against WCAG 2.2 AA and gives a ranked fix list rather than a vague worry.

                ## Milestones
                1. Five key pages chosen, including sign-up or login and one form-heavy page.
                2. An automated scan run on each page, with results saved.
                3. A keyboard-only pass and a screen reader pass completed on each page.
                4. Issues logged with the WCAG criterion, severity and the component responsible.

                ## Notes
                Start from the **Remediation plan** template. Automated tools catch roughly a third of issues, so the manual passes are not optional.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An audit of five pages lists every issue with its WCAG criterion, severity and owning component."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose five key pages including login and one long form"
                - "Run an automated accessibility scan on each page"
                - "Complete each page using only the keyboard and note blockers"
                - "Repeat each page with a screen reader and log what is announced"
            - name: Browser error reporting with source maps
              description: |-
                ## Purpose
                Without client-side error reporting, you hear about broken pages from angry customers days later, and minified stack traces point at line one of a single huge file. Wiring an error tracker into the frontend, uploading source maps privately at build time and tagging each error with release and route makes a crash readable within minutes.

                ## Milestones
                1. An error tracking SDK installed and capturing unhandled errors and promise rejections.
                2. Source maps uploaded to the tracker during the build and not served publicly.
                3. Each event tagged with release version, route and browser.
                4. Known noise such as browser extension errors filtered out.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliberately thrown test error in production shows a readable, source-mapped stack trace with release and route tags."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Install the error tracking SDK in the app entry point"
                - "Upload source maps from the build step without publishing them"
                - "Tag events with release version and route"
                - "Throw a test error in production and check the stack trace is readable"
            - name: Weekly browser error triage
              description: |-
                ## Purpose
                An error tracker nobody reads fills up with thousands of events until real regressions hide among extension noise. Half an hour a week sorting the top new errors by users affected, assigning owners and silencing the junk keeps the signal clean and catches release regressions before support does.

                ## Milestones
                1. A saved view of new and rising errors sorted by users affected.
                2. An agreed rule for which errors get a ticket, which get ignored and which get filtered.
                3. Every error above the threshold assigned to a named owner within the week.
                4. Error counts per release noted so regressions stand out.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks, every new error affecting more than an agreed number of users has an owner or a recorded ignore reason."
                cadence: rolling
              tasks:
                - "Save a tracker view of new errors sorted by users affected"
                - "Agree the ticket, ignore and filter rule with the team"
                - "Triage the top new browser errors and assign owners @recurring(weekly:tue)"
                - "Add filters for extension and bot errors that keep returning"
            - name: Bundle size budget in pull requests
              description: |-
                ## Purpose
                JavaScript weight creeps up a library at a time, and on a mid-range phone every extra 100 KB can add noticeable parse and execute time. A size budget checked on every pull request, with a comment showing the change, makes the cost of a new dependency visible at the moment someone can still choose a smaller one.

                ## Milestones
                1. Current gzip size of the main entry and each route chunk recorded.
                2. A budget per chunk agreed and written into the repository.
                3. A pipeline step that comments the size change on every pull request and fails over budget.
                4. A bundle analyser report saved for the five largest dependencies.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pull request shows its bundle size change and the pipeline fails any change that pushes a chunk over budget."
                cadence: rolling
              tasks:
                - "Record the current compressed size of each entry and route chunk"
                - "Add a pipeline step that reports bundle size change on pull requests"
                - "Check the size trend and tighten any budget with headroom @recurring(monthly:9)"
                - "Review the five largest dependencies for lighter alternatives @recurring(quarterly)"
            - name: Monthly Core Web Vitals review
              description: |-
                ## Purpose
                Vitals regress quietly: a new hero image, a late-loading banner or a heavy click handler can undo months of work in one release. A short monthly review of field data against your baseline catches the slip while the cause is still recent enough to remember.

                ## Milestones
                1. A dashboard or saved report showing 75th percentile vitals per key page.
                2. Each month's values added to the metrics log with a short note on releases.
                3. Any page that moved from good to needs improvement given a ticket and owner.
                4. A yearly summary of trend per page.

                ## Notes
                Start from the **Metrics log** template, reusing the log from the baseline project.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly entries exist in the vitals log, and every regression into needs improvement has a ticket."
                cadence: rolling
              tasks:
                - "Build a saved report of 75th percentile vitals per key page"
                - "Log this month's vitals and note any regressions @recurring(monthly:14)"
                - "Open a ticket for each page that slipped below good"
                - "Ask the agent to summarise the year's vitals trend from the log"
            - name: Browser release watch and quirk log
              description: |-
                ## Purpose
                Browsers ship every four weeks or so, and each release can add a CSS feature you have been polyfilling or break something you relied on. Reading the release notes for your supported browsers monthly, and keeping a quirk log of workarounds with links to the bug, stops the same Safari date-input surprise costing a day twice.

                ## Milestones
                1. Release note sources bookmarked for each browser in your matrix.
                2. A quirk log in the repository listing each workaround, the browser version and the upstream bug.
                3. Workarounds whose bug is fixed in every supported version removed.
                4. New baseline-available features noted where they could replace a polyfill.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quirk log exists, is updated monthly and has had at least one obsolete workaround removed."
                cadence: rolling
              tasks:
                - "Bookmark release notes for each browser in the support matrix"
                - "Create a quirk log file listing current workarounds and bug links"
                - "Read browser release notes and update the quirk log @recurring(monthly:20)"
                - "Remove one workaround whose bug is fixed everywhere you support"
            - name: Shared component library upkeep
              description: |-
                ## Purpose
                A shared component library decays when every team adds a slightly different button and nobody removes the old one. Regular upkeep, with an owner, a deprecation path and a usage count, keeps the library small enough to learn and stops feature code reinventing dropdowns that already exist.

                ## Milestones
                1. A list of every shared component with its usage count across the codebase.
                2. Duplicate or near-duplicate components identified and one chosen to keep.
                3. A deprecation process agreed: warning, codemod or migration note, then removal.
                4. Open component requests reviewed on a regular rhythm.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The component library has a published usage count, a written deprecation process and at least one duplicate removed per quarter."
                cadence: rolling
              tasks:
                - "Count usages of each shared component with a code search"
                - "Write the deprecation process and add it to the library README"
                - "Review open component requests and close or schedule them @recurring(monthly:12)"
                - "Remove or merge one duplicate component @recurring(quarterly)"
            - name: Accessibility spot check on new features
              description: |-
                ## Purpose
                Accessibility fixed once regresses as soon as the next modal ships without focus management. A monthly spot check of one recently shipped feature with keyboard and screen reader, plus an accessibility line in the pull request template, keeps the audit's gains from eroding.

                ## Milestones
                1. An accessibility checklist line added to the pull request template.
                2. An automated accessibility check running in component or page tests.
                3. One recently shipped feature checked by hand each month, with findings logged.
                4. Recurring patterns from the checks turned into fixes in the shared components.

                ## Notes
                Fixing a pattern in a shared component, such as dialog focus trapping, fixes it everywhere at once. Prefer that to per-page patches.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly spot checks are logged for six months and the pull request template includes an accessibility check."
                cadence: rolling
              tasks:
                - "Add an accessibility line to the pull request template"
                - "Add an automated accessibility assertion to component tests"
                - "Check one recently shipped feature by keyboard and screen reader @recurring(monthly:5)"
                - "Move any repeated finding into a fix in the shared component"
            - name: Pre-release cross-browser pass
              description: |-
                ## Purpose
                Automated tests usually run in one browser engine, so layout breaks in Safari or Firefox slip through to users. A short manual pass on the release candidate across your matrix and reference phones, guided by a checklist of the screens most likely to break, catches the obvious problems in twenty minutes.

                ## Milestones
                1. A checklist of ten to fifteen screens and interactions most prone to cross-browser breakage.
                2. Access arranged to every browser in the matrix, real or through a device cloud.
                3. The checklist run on each release candidate with results noted.
                4. Breakages found in the pass added to the quirk log.

                ## Notes
                Start from the **Operational checklist** template. Rotate who runs it so the knowledge spreads.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each release candidate for two months has a completed cross-browser checklist attached to the release ticket."
                cadence: cyclic
              tasks:
                - "Write a checklist of screens most likely to break across browsers"
                - "Arrange access to each matrix browser and the reference phones"
                - "Run the cross-browser checklist on the release candidate @recurring(weekly:thu)"
                - "Add any breakage found to the quirk log"
            - name: Component stories as living documentation
              description: |-
                ## Purpose
                Component documentation in a wiki is out of date the week it is written, while stories in a component workshop run the real code. Writing stories for each shared component, covering its states, and reviewing which ones are missing each month gives designers and new engineers a working catalogue they can trust.

                ## Milestones
                1. A component workshop tool installed and building in the pipeline.
                2. Stories for every shared component showing default, loading, error, disabled and long-content states.
                3. The built catalogue published to a URL the designers can open.
                4. A monthly check for components without stories.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every shared component has stories for its main states and the catalogue is published from the pipeline."
                cadence: rolling
              tasks:
                - "Install a component workshop tool and build it in the pipeline"
                - "Write stories for the five most used components with all states"
                - "Publish the built catalogue to a URL designers can open"
                - "List components without stories and write two of them @recurring(monthly:24)"
            - name: Frontend reading and experiment queue
              description: |-
                ## Purpose
                The frontend ecosystem changes fast enough that it is easy to chase every new framework or ignore all of them. A small queue of articles, specs and talks, with one hour a month spent reading and one small experiment a quarter, keeps your judgement current without rewriting the app every time a new tool trends.

                ## Milestones
                1. A reading queue with sources you trust, such as browser vendor blogs and standards drafts.
                2. One hour a month spent reading, with a one-line takeaway per item.
                3. One experiment a quarter in a scratch repository, written up in a paragraph.
                4. Any idea worth adopting raised as a proposal rather than slipped into a feature.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The reading queue shows takeaways from at least ten items and two written-up experiments within six months."
                cadence: rolling
              tasks:
                - "Set up a reading queue with five trusted frontend sources"
                - "Read one item from the queue and note a takeaway @recurring(monthly:28)"
                - "Try one new browser API in a scratch repository and write it up"
                - "Raise any idea worth adopting as a short proposal to the team"
            - name: Semantic HTML and native form controls
              description: |-
                ## Purpose
                Clickable divs look like buttons but are invisible to keyboards, screen readers and browser autofill. Relearning the native elements, landmarks and form controls, and when an ARIA attribute is really needed, removes whole classes of bugs before any framework code is written.

                ## Milestones
                1. The landmark elements, headings and native interactive elements studied with examples.
                2. One existing page rewritten to use buttons, links, labels and fieldsets correctly.
                3. The first rule of ARIA understood: use a native element when one exists.
                4. A short team note on common div-as-button mistakes and their native fixes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One production page has been refactored to native elements and a team note on the common mistakes is shared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a reference guide to landmarks and native interactive elements"
                - "Find every clickable div on one page with a code search"
                - "Rewrite that page with native buttons, links and labelled inputs"
                - "Write a short team note on the mistakes you found"
            - name: Modern CSS layout with grid and container queries
              description: |-
                ## Purpose
                Layouts built from nested flex rows, magic numbers and dozens of media queries are fragile and hard to change. Getting fluent in grid, flexbox, logical properties, clamp-based sizing and container queries lets components adapt to the space they are placed in, not just to the viewport width.

                ## Milestones
                1. Grid and flexbox practised on three layouts: a card grid, a holy grail page and a form.
                2. Fluid type and spacing built with clamp instead of breakpoint steps.
                3. One shared component rebuilt to respond to its container rather than the viewport.
                4. Logical properties used so the layout flips correctly in right-to-left text.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One shared component uses container queries in production and three practice layouts are built without fixed pixel widths."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a responsive card grid with grid and no media queries"
                - "Replace one set of breakpoint font sizes with fluid clamp values"
                - "Rebuild one shared component using container queries"
                - "Swap physical margin and padding for logical properties in that component"
            - name: Browser rendering pipeline fundamentals
              description: |-
                ## Purpose
                Janky scrolling and slow interactions usually come from forcing the browser to redo style, layout or paint far more than needed. Understanding the path from parsing to style, layout, paint and compositing, and what triggers each, turns performance fixes from guesswork into reasoning.

                ## Milestones
                1. The stages of the rendering pipeline explained in your own words in a short note.
                2. Properties that trigger layout, paint or compositing only listed with examples.
                3. A forced synchronous layout found and fixed in your own code.
                4. One animation moved to transform and opacity so it runs on the compositor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains the pipeline, and one layout thrash and one paint-heavy animation in the codebase are fixed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a guide to the browser rendering pipeline and summarise it"
                - "Record a performance profile of scrolling on a heavy page"
                - "Find and fix one forced synchronous layout in the code"
                - "Move one animation to transform and opacity"
            - name: Event loop and async patterns in the browser
              description: |-
                ## Purpose
                Race conditions in search boxes, stale responses overwriting fresh ones and a frozen tab during a big JSON parse all come from the event loop. Knowing how tasks, microtasks and rendering interleave, and how to cancel or yield, fixes a class of bugs that otherwise feel random.

                ## Milestones
                1. Tasks, microtasks and animation frames explained with a small demo you wrote.
                2. Request cancellation with abort signals used in one search or filter input.
                3. One long task broken up or moved to a web worker to keep input responsive.
                4. A debounce or throttle chosen deliberately for one noisy event handler.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One search input cancels stale requests and one long task is split or moved off the main thread, both merged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a small demo showing task and microtask ordering"
                - "Add request cancellation to one search or filter input"
                - "Find a long task in a profile and split it or move it to a worker"
                - "Pick debounce or throttle for one noisy handler and note why"
            - name: Keyboard and screen reader testing practice
              description: |-
                ## Purpose
                Most engineers have never heard their own app through a screen reader, so they cannot tell a good announcement from a confusing one. Regular short practice with one desktop and one mobile screen reader builds the ear to catch missing labels, wrong roles and focus that jumps away.

                ## Milestones
                1. The basic commands for one desktop and one mobile screen reader learned and written on a card.
                2. Three common widgets tested: a dialog, a menu and a form with errors.
                3. A habit of a short weekly practice session kept for two months.
                4. One bug found in practice reported and fixed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Eight weekly practice sessions are logged and at least one screen reader bug found in practice is fixed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a command cheat sheet for one desktop and one mobile screen reader"
                - "Test a dialog, a menu and an error form by screen reader"
                - "Spend twenty minutes using one app screen by screen reader @recurring(weekly:fri)"
                - "Report and fix one bug found during practice"
            - name: Server state versus client state patterns
              description: |-
                ## Purpose
                Many state management tangles come from putting server data, which has a source of truth elsewhere, into the same global store as UI state like an open menu. Learning to separate server cache, URL state, form state and local UI state, and to keep each in its natural home, shrinks global stores and removes a pile of sync bugs.

                ## Milestones
                1. Every piece of global state in the app listed and labelled server, URL, form or UI.
                2. Filter and pagination state moved into the URL so links and back buttons work.
                3. Server data in the global store identified as candidates for a query cache.
                4. A short guide written on where each kind of state should live.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A state inventory labels every global store slice, and filter state lives in the URL on at least one page."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each slice of global state and label its kind"
                - "Move one page's filters and pagination into the URL"
                - "Mark server data held in the global store for later migration"
                - "Ask the agent to draft a one-page guide on where state should live"
            - name: Component tests that query like a user
              description: |-
                ## Purpose
                Component tests that assert on class names and internal state break on every refactor and miss what users actually see. Writing tests that find elements by role and label, then click and type as a person would, gives confidence in behaviour and doubles as an accessibility check.

                ## Milestones
                1. A component testing library configured with the project's bundler and test runner.
                2. Tests for three shared components written using role and label queries only.
                3. Network calls mocked at the request layer rather than by mocking modules.
                4. A team convention note on preferred queries and what not to assert.

                ## Notes
                If a component is hard to find by role or label, that is often an accessibility bug, not a testing problem.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three shared components have role-based tests running in the pipeline and a short testing convention note is in the repository."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Configure the component testing library with the current test runner"
                - "Write role and label based tests for three shared components"
                - "Mock network calls at the request layer for one data-driven component"
                - "Write a short convention note on preferred queries"
            - name: Profiling with browser developer tools
              description: |-
                ## Purpose
                Guessing at slowness wastes days, while a ten-minute recording in the performance panel usually points straight at the cause. Learning the performance, memory and network panels well enough to find long tasks, detached DOM nodes and render-blocking requests is the single most useful frontend debugging skill.

                ## Milestones
                1. A performance recording taken on a throttled mobile profile and its long tasks identified.
                2. A heap snapshot comparison used to look for detached DOM nodes after navigating away and back.
                3. Render-blocking requests found in the network panel waterfall.
                4. One real problem found and fixed using each of the three panels.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three fixes are merged, each found with a different developer tools panel, with before and after numbers in the pull requests."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Record a throttled performance profile of your slowest page"
                - "Compare heap snapshots before and after a route change"
                - "Find render-blocking requests in the network waterfall"
                - "Fix one problem from each panel and note before and after numbers"
            - name: Adopting a query cache for data fetching
              description: |-
                ## Purpose
                Hand-written fetch-in-effect code reinvents loading flags, caching, retries and refetch on focus in every component, usually with bugs. Choosing and adopting a query cache library standardises fetching, removes server data from the global store and makes loading and error states consistent across the app.

                ## Milestones
                1. Two or three data fetching libraries compared against your framework and API style.
                2. One library chosen, with a decision record covering caching, invalidation and server rendering support.
                3. Three screens migrated, including one with mutations and optimistic updates.
                4. A migration guide written for the remaining fetch calls.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record names the chosen library and three screens use it in production, including one with mutations."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Count the hand-written fetch and loading flag patterns in the code"
                - "Compare two or three query cache libraries on a sample screen"
                - "Write the decision record and migrate three screens"
                - "Write a short migration guide for the remaining fetch calls"
            - name: Choosing a styling approach
              description: |-
                ## Purpose
                Mixed styling, with global stylesheets, CSS modules, utility classes and runtime CSS-in-JS all in one app, makes specificity bugs routine and server rendering slower. Comparing the options against your framework, rendering mode and team, then committing to one with a migration plan, ends the argument and the drift.

                ## Milestones
                1. Current styling methods counted by file, with the pain each causes noted.
                2. Options compared on runtime cost, server rendering, theming and team familiarity.
                3. One approach chosen and written up, including how tokens plug in.
                4. A rule that new code uses only the chosen approach, with a plan for old code.

                ## Notes
                Runtime CSS-in-JS adds work on every render and can complicate server components, so check your framework's current guidance before choosing it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A styling decision record is merged and the lint rules or review checklist enforce the chosen approach for new code."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count files using each styling method in the codebase"
                - "Compare the options on runtime cost, theming and server rendering"
                - "Write the decision record with how design tokens plug in"
                - "Plan how old styles move over as files are touched"
            - name: Responsive image pipeline
              description: |-
                ## Purpose
                Images are often the largest bytes on a page and the usual cause of a slow Largest Contentful Paint. Serving correctly sized images in modern formats, with width and height set, lazy loading below the fold and priority hints on the hero, can take seconds off mobile load times without touching any JavaScript.

                ## Milestones
                1. The heaviest images on the top pages listed with their delivered and displayed sizes.
                2. An image component or CDN transform serving several widths and modern formats.
                3. Width and height or aspect ratio set on every image to stop layout shift.
                4. The hero image marked high priority and below-the-fold images lazy loaded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All images on the top ten pages are served responsively in a modern format with dimensions set, and page weight is recorded before and after."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the ten heaviest images on your top pages with their sizes"
                - "Set up an image component or CDN transform with several widths"
                - "Add dimensions or aspect ratio to every image on key pages"
                - "Mark the hero image as high priority and lazy load the rest"
            - name: Route-based code splitting
              description: |-
                ## Purpose
                Shipping the admin panel, the charting library and the rich text editor to someone visiting the login page wastes their data and their battery. Splitting the bundle by route and lazy loading heavy, rarely used components keeps the first load small and lets each screen pay only for what it uses.

                ## Milestones
                1. A bundle analyser report showing which large modules load on the first page.
                2. Each top-level route loaded as its own chunk.
                3. Heavy components such as editors, charts and maps loaded on demand with a sensible fallback.
                4. First-load JavaScript size recorded before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each route loads as a separate chunk and first-load JavaScript has dropped by a measured amount recorded in the pull request."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run a bundle analyser and list large modules on the first page"
                - "Split each top-level route into its own lazily loaded chunk"
                - "Lazy load the editor, chart or map components with a fallback"
                - "Record first-load JavaScript size before and after"
            - name: Accessible forms with clear validation
              description: |-
                ## Purpose
                Forms are where users give you money and data, and where poor error handling loses them: errors shown only in red, messages that vanish, or validation that fires on the first keystroke. Rebuilding the main forms with visible labels, inline errors tied to fields, an error summary and sensible timing lifts completion and fixes many audit findings at once.

                ## Milestones
                1. The three most important forms identified, with their drop-off points from analytics.
                2. A shared field component with visible label, hint, error text and the right input type and autocomplete.
                3. Errors announced to screen readers and linked to their fields, with a summary on submit.
                4. Validation that runs on blur or submit, not on every keystroke.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The three key forms use a shared field component, pass a keyboard and screen reader check and show completion rate before and after."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pull drop-off points for the three key forms from analytics"
                - "Build a shared field component with label, hint and error slots"
                - "Link error messages to fields and add an error summary on submit"
                - "Set correct input types and autocomplete values on every field"
            - name: Fixing layout shift and hydration mismatches
              description: |-
                ## Purpose
                Content that jumps as fonts, ads or late data arrive makes people tap the wrong thing, and hydration mismatches in server-rendered apps cause flicker and console warnings that hide real errors. Tracking down the biggest shift sources and every mismatch warning brings CLS into the good range and quietens the console.

                ## Milestones
                1. The largest layout shift sources on key pages identified with the layout shift debugger.
                2. Space reserved for images, embeds, banners and late-loading content.
                3. Fonts loaded with a fallback that is size-matched to cut text reflow.
                4. Every hydration mismatch warning in development traced and fixed.

                ## Notes
                Dates, random IDs and checks for window during render are the usual causes of hydration mismatches.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "CLS at the 75th percentile is in the good range on the top five pages and the development console shows no hydration warnings."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Record layout shifts on the top five pages and list the sources"
                - "Reserve space for images, embeds and late-loading banners"
                - "Add a size-matched fallback font for each web font"
                - "Trace and fix each hydration mismatch warning in development"
            - name: Internationalisation and right-to-left readiness
              description: |-
                ## Purpose
                Hard-coded strings, concatenated sentences and dates formatted by hand make a second language a rewrite instead of a translation. Extracting strings, using the platform's Intl formatting for dates, numbers and plurals, and testing a right-to-left locale prepares the frontend for new markets before sales promises one.

                ## Milestones
                1. All user-facing strings extracted into message files with stable keys.
                2. Dates, numbers, currencies and plurals formatted with Intl APIs or the i18n library.
                3. A pseudo-locale with longer strings used to find truncation and overflow.
                4. One right-to-left locale rendered with logical properties and checked screen by screen.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No hard-coded user-facing strings remain in the main flows, and a pseudo-locale and a right-to-left locale render without layout breaks."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose an i18n library and set up the message file structure"
                - "Extract strings from the main flows into message files"
                - "Replace hand-formatted dates and currency with Intl formatting"
                - "Turn on a pseudo-locale and fix truncated or overflowing text"
            - name: Third-party script audit and governance
              description: |-
                ## Purpose
                Analytics tags, chat widgets, A/B testing snippets and ad pixels pile up over the years, and together they often cost more main-thread time than your own code while sending user data to vendors you have forgotten. Auditing each script for owner, purpose, cost and consent, then removing or deferring the rest, speeds pages and tightens privacy.

                ## Milestones
                1. Every third-party script listed with its owner, purpose, size and main-thread cost.
                2. Scripts with no current owner or purpose removed.
                3. The remaining scripts loaded after consent where required, and deferred or moved off the main thread where possible.
                4. A rule that new third-party scripts need an owner and a review before being added.

                ## Notes
                Check consent requirements with whoever owns privacy in your organisation. The audit is about recording and asking, not deciding the legal position yourself.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A script register lists every third-party script with an owner, at least one unowned script is removed and main-thread time is measured before and after."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every third-party script loaded on the home and checkout pages"
                - "Measure each script's size and main-thread time in a profile"
                - "Ask each team which scripts they still own and need"
                - "Re-audit the script register for new or unowned tags @recurring(quarterly)"
            - name: Redesign launch behind a feature flag
              description: |-
                ## Purpose
                A big-bang redesign that replaces every screen at once turns one bad CSS change into an outage for everyone. Shipping the new design behind a flag, rolling it out to staff, then a small percentage of users, while watching vitals, errors and conversion, lets you launch on a date and still back out in minutes.

                ## Milestones
                1. The new design and the old one able to run side by side under a feature flag.
                2. Staff and a beta group using the new design for at least two weeks.
                3. Rollout stages agreed with go and stop thresholds for errors, vitals and conversion.
                4. The redesign at full rollout and the old design code removed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The redesign reaches full rollout through staged percentages with no stage breaching its stop thresholds, and old design code is deleted."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Put the redesigned shell behind a feature flag"
                - "Agree rollout stages and stop thresholds with product"
                - "Enable the new design for staff and a beta group"
                - "Delete the old design code after full rollout"
            - name: Framework major version upgrade
              description: |-
                ## Purpose
                Frontend frameworks drop support for old major versions, and every skipped version makes the eventual jump harder and blocks newer libraries. Planning the upgrade as a dated event, with codemods, a branch that tracks main and a staged release, keeps it to weeks rather than a stalled quarter.

                ## Milestones
                1. The official migration guide read and every breaking change mapped to affected files.
                2. Libraries that block the upgrade identified, with replacements or versions chosen.
                3. Codemods run and the app building and passing tests on the new version.
                4. The upgrade released to production with error rates watched for a week.

                ## Notes
                Upgrade one major version at a time and do the deprecation warnings first on the old version. They are the migration guide in disguise.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Production runs on the new framework major version, with error rates no worse than the week before release."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the migration guide and list every breaking change that applies"
                - "Fix all deprecation warnings on the current version first"
                - "Run the official codemods on a branch and fix what remains"
                - "Release the upgrade and watch error rates for a week"
            - name: Accessibility conformance report for a customer
              description: |-
                ## Purpose
                Enterprise and public sector buyers increasingly ask for an accessibility conformance report, often against WCAG 2.2 AA, before signing. Preparing one against a date, with honest partial support notes and a remediation timeline, can decide a contract and forces the most important fixes into the schedule.

                ## Milestones
                1. The customer's required standard, format and deadline confirmed in writing.
                2. Every criterion assessed as supports, partially supports or does not support, with evidence.
                3. Blocking issues fixed before the deadline, and the rest given dates in a remediation plan.
                4. The report reviewed by product and legal or procurement, then delivered.

                ## Notes
                Overstating conformance creates contractual and legal risk. Report what is true and show the plan for the gaps.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A conformance report covering every required criterion, with a dated remediation plan for gaps, is delivered to the customer by their deadline."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Confirm the required standard, report format and deadline with the customer"
                - "Assess each criterion on the product and record evidence"
                - "Fix the blocking issues and date the rest in a remediation plan"
                - "Get product and procurement review before sending the report"
            - name: Dropping support for an old browser
              description: |-
                ## Purpose
                Supporting a browser that a fraction of a percent of users still run can mean shipping polyfills and transpiled code to everyone. Retiring it on a set date, with a friendly unsupported-browser message and notice to affected customers, shrinks bundles and frees the team to use modern features.

                ## Milestones
                1. Usage of the old browser confirmed from analytics and server logs, with key accounts identified.
                2. A retirement date agreed with product and support, and customers told in advance.
                3. A lightweight unsupported-browser notice built that does not depend on modern JavaScript.
                4. Polyfills and old build targets removed after the date, with bundle savings recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The old browser is removed from the matrix on the agreed date, polyfills are deleted and the bundle size saving is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check the old browser's usage in analytics and server logs"
                - "Agree a retirement date with product and support"
                - "Build a simple unsupported-browser notice page"
                - "Remove the polyfills and old build targets after the date"
            - name: Backend engineer's first quarter on the frontend
              description: |-
                ## Purpose
                Strong backend engineers moved onto frontend work often find the hardest parts are not the framework but CSS, browser behaviour and asynchronous UI state. A deliberate first quarter, pairing weekly with a frontend engineer and shipping progressively harder tickets, builds real confidence instead of copy-pasted components.

                ## Milestones
                1. A list of the frontend concepts that feel shakiest, agreed with a pairing partner.
                2. Three tickets shipped: a styling fix, a form and a feature with data fetching.
                3. Weekly pairing sessions held for the quarter, with notes on what was learned.
                4. One small improvement proposed from a backend angle, such as typed API clients.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three frontend tickets of increasing difficulty are shipped and twelve weekly pairing sessions are logged within the quarter."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the five frontend topics that feel shakiest"
                - "Ask a frontend engineer to pair weekly for the quarter"
                - "Pair on a frontend ticket and note one thing learned @recurring(weekly:mon)"
                - "Pick a styling fix, a form and a data feature as the three tickets"
            - name: Sole frontend engineer at an early-stage startup
              description: |-
                ## Purpose
                As the only frontend engineer at a small company you are designer's partner, accessibility lead, performance owner and release manager at once, with no one to review your CSS. Setting a few non-negotiables early, choosing boring tools and writing down decisions keeps the codebase handover-ready for the second hire.

                ## Milestones
                1. A short list of non-negotiables written: types, error reporting, an accessibility check and a bundle budget.
                2. Tool choices favouring well-documented defaults over novelty, each with a one-line reason.
                3. A README a new frontend engineer could follow to run, test and deploy the app in an hour.
                4. A monthly self-review of vitals, errors and open accessibility issues.

                ## Notes
                When everything is urgent, protect the things that are hard to retrofit later: types, accessibility in shared components and error reporting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of non-negotiables and a one-hour setup README exist, and monthly self-reviews are logged for six months."
                cadence: rolling
              tasks:
                - "Write your four frontend non-negotiables on one page"
                - "Record a one-line reason for each major tool choice"
                - "Write a README that gets a new engineer running in an hour"
                - "Review vitals, errors and accessibility issues on your own @recurring(monthly:3)"
            - name: First frontend job after a bootcamp or degree
              description: |-
                ## Purpose
                Your first frontend role usually means a codebase far bigger than any course project, with tooling, conventions and review standards nobody explains. A plan for the first months, covering how to read the code, ask good questions and grow from small fixes to a feature, turns the overwhelm into steady progress.

                ## Milestones
                1. The app running locally and one small fix merged in the first two weeks.
                2. A personal map of the codebase: routing, data fetching, shared components and styles.
                3. A feature shipped end to end with review feedback applied.
                4. A monthly check-in with a mentor on gaps such as CSS, testing or accessibility.

                ## Notes
                Write down every question you have before asking it, along with what you tried. It makes questions faster to answer and shows your thinking.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One fix and one feature are merged within ninety days, a written codebase map exists and three mentor check-ins are logged."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Get the app running locally and note every setup step that was unclear"
                - "Draw a map of routing, data fetching, components and styles"
                - "Pick up a small fix and get it merged"
                - "Review skill gaps with your mentor @recurring(monthly:26)"
            - name: Inheriting a jQuery or server-templated frontend
              description: |-
                ## Purpose
                Older apps built with jQuery plugins and server templates still run plenty of businesses, and rewriting them all at once rarely ends well. Mapping what exists, adding error reporting first, then introducing components one widget or page at a time keeps the app working while it gradually becomes maintainable.

                ## Milestones
                1. An inventory of pages, plugins, global scripts and their jQuery versions.
                2. Error reporting and a basic smoke check in place before any change.
                3. A strategy chosen: mount new components inside existing pages or replace page by page.
                4. The first widget rebuilt as a component and shipped inside the old page.

                ## Notes
                Old plugins often depend on global variables and load order. Record those dependencies before moving any script tag.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A page and plugin inventory exists, error reporting is live and one widget runs as a new component inside a legacy page."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every page, plugin and global script with versions"
                - "Add error reporting to the legacy pages before changing anything"
                - "Choose between in-page mounting and page-by-page replacement"
                - "Rebuild one widget as a component inside a legacy page"
            - name: Client marketing site build and handover
              description: |-
                ## Purpose
                Freelance and agency frontend work often ends with a site the client cannot update and a contract that never defined done. Agreeing performance and accessibility targets up front, building on a platform the client can edit and handing over with a short guide makes the work something they recommend rather than something they call you about at midnight.

                ## Milestones
                1. Targets agreed in writing: supported browsers, a Lighthouse range, WCAG level and page list.
                2. The site built with content the client can edit without touching code.
                3. Targets checked and the results shared before sign-off.
                4. A handover pack with logins transferred, an editing guide and a short recorded walkthrough.

                ## Notes
                Put hosting, domain and analytics accounts in the client's name from the start. Transferring them later is where handovers stall.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The client signs off a site that meets the written targets and confirms they own every account and can edit content themselves."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Write the browser, performance and accessibility targets into the brief"
                - "Set up hosting and domain accounts in the client's name"
                - "Check the targets and share results before sign-off"
                - "Record a short walkthrough of editing content for the client"
            - name: Moving onto the design system team
              description: |-
                ## Purpose
                Building components for other engineers is a different job from building features: your users are developers, breaking changes hurt every team, and API design matters as much as pixels. Treating the move as a change of craft, with time spent in consuming teams and a clear versioning policy, avoids shipping a library nobody wants to adopt.

                ## Milestones
                1. Time spent with three consuming teams, with their top complaints written down.
                2. A versioning and changelog policy for the library agreed, including how breaking changes are announced.
                3. One component API redesigned using that feedback, with a migration note.
                4. Weekly office hours running for consuming teams.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Feedback from three consuming teams is written up, a versioning policy is published and office hours have run for two months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book a session with three teams that consume the library"
                - "Draft a versioning and breaking change policy"
                - "Run office hours for teams using the library @recurring(weekly:wed)"
                - "Redesign one component API from the feedback with a migration note"
            - name: Micro-frontends fit assessment
              description: |-
                ## Purpose
                Micro-frontends promise independent team deploys but bring duplicated framework code, version drift and harder shared state. Assessing honestly whether your team count, release friction and domain boundaries justify them, against a well-structured modular monolith, prevents adopting an architecture that solves a problem you do not yet have.

                ## Milestones
                1. Current release friction described with numbers: teams, deploy waits, merge conflicts.
                2. Options compared: modular monolith, build-time composition and runtime composition.
                3. Costs estimated for shared dependencies, design consistency and cross-app routing.
                4. A recommendation written, including the conditions under which it should be revisited.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record compares at least three composition options with measured release friction and states when to revisit."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Measure deploy waits and merge conflicts across frontend teams"
                - "Compare modular monolith, build-time and runtime composition"
                - "Estimate the cost of duplicated dependencies and design drift"
                - "Ask the agent to draft the decision record from your notes"
            - name: Offline-capable progressive web app
              description: |-
                ## Purpose
                Field workers, commuters and users on unreliable mobile data lose work when a web app needs the network for every action. Adding a service worker with a deliberate caching strategy, an installable manifest and a queue for actions taken offline lets the app keep working through dead zones and sync when the signal returns.

                ## Milestones
                1. The screens and actions that must work offline agreed with product.
                2. A service worker caching the app shell and chosen data with a clear update strategy.
                3. Offline actions queued locally and replayed with conflict handling when back online.
                4. Offline mode tested on a real phone in airplane mode, including app updates.

                ## Notes
                A stale service worker can pin users to an old release. Plan how new versions take over before the first deploy.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The agreed screens work in airplane mode on a real phone and queued actions sync correctly after reconnecting."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree which screens and actions must work offline"
                - "Add a service worker that caches the app shell"
                - "Queue offline actions in local storage and replay them on reconnect"
                - "Test offline use and a version update on a real phone"
            - name: Content Security Policy for the frontend
              description: |-
                ## Purpose
                Of all the defences against cross-site scripting, a strict Content Security Policy is among the strongest, but switching one on cold breaks inline scripts, analytics and styles. Rolling it out in report-only mode first, fixing violations and then enforcing gives real protection without an outage.

                ## Milestones
                1. Inline scripts, inline event handlers and external script sources inventoried.
                2. A policy using nonces or hashes deployed in report-only mode with a reporting endpoint.
                3. Violations reviewed and fixed until reports show only expected noise.
                4. The policy switched to enforcing, with a process for adding new sources.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An enforcing Content Security Policy without unsafe-inline for scripts is live in production and violation reports are reviewed monthly."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List inline scripts, inline handlers and external script sources"
                - "Deploy a nonce-based policy in report-only mode"
                - "Review policy violation reports and fix real ones @recurring(monthly:17)"
                - "Switch the policy to enforcing once reports are clean"
            - name: Virtualised rendering for large lists and grids
              description: |-
                ## Purpose
                Tables with ten thousand rows or feeds that grow forever make the DOM huge, scrolling stutter and memory climb until the tab crashes. Virtualising long lists, so only visible rows exist in the DOM, while keeping keyboard navigation, screen reader context and find-in-page workable, is a specialist job worth doing properly.

                ## Milestones
                1. The list or grid profiled with row count, DOM node count and scroll frame rate recorded.
                2. A virtualisation approach chosen that supports variable row heights if you need them.
                3. Keyboard navigation, focus retention and row count announcements working in the virtual list.
                4. Frame rate and memory measured again on a mid-range phone.

                ## Notes
                Virtualisation breaks the browser's find-in-page. Add an in-app search if users rely on it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The large list keeps a smooth scroll on a mid-range phone, DOM nodes drop by a recorded amount and a keyboard check passes."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Profile the large list and record DOM node count and frame rate"
                - "Choose a virtualisation library that handles your row heights"
                - "Restore keyboard navigation and focus inside the virtual list"
                - "Measure frame rate and memory again on a mid-range phone"
            - name: Real-time collaborative interface with optimistic updates
              description: |-
                ## Purpose
                Shared documents, live dashboards and multiplayer editors raise the hardest frontend problems: optimistic updates that must roll back, presence indicators, reconnection and two people editing the same thing. Designing the client side of conflict handling and connection state deliberately avoids an interface that silently loses someone's change.

                ## Milestones
                1. The conflict model chosen with the backend team: last write wins, locking, operational transforms or CRDTs.
                2. Optimistic updates with visible rollback when the server rejects a change.
                3. Connection state shown to the user, with reconnection and missed-update catch-up.
                4. A two-browser test script covering simultaneous edits and a dropped connection.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-browser test of simultaneous edits and a dropped connection shows no lost changes and a clear rollback message."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the conflict model with the backend team"
                - "Build optimistic updates with a visible rollback on rejection"
                - "Show connection state and catch up missed updates on reconnect"
                - "Write a two-browser test script for simultaneous edits"
            - name: Embeddable widget for third-party sites
              description: |-
                ## Purpose
                Shipping a chat bubble, booking form or checkout button that runs inside other companies' pages means your code meets CSS you do not control, old polyfills, strict Content Security Policies and hosts who will blame you for any slowdown. Isolating styles, loading asynchronously and versioning the embed snippet keeps the widget working on hundreds of sites you will never see.

                ## Milestones
                1. An isolation approach chosen and recorded: iframe, shadow DOM or namespaced styles, with the trade-offs noted.
                2. A loader snippet under 5 KB that loads the widget asynchronously and never blocks the host page.
                3. A versioned embed URL with a documented upgrade path and a pinned fallback for cautious hosts.
                4. The widget tested on three deliberately hostile host pages with aggressive global CSS and a strict policy.

                ## Notes
                Never write to the host page's globals or prototypes. Expose one small namespaced API and communicate with an iframe through postMessage with an origin check.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The widget renders correctly on three hostile test host pages, its loader is under 5 KB and the host page Largest Contentful Paint does not change measurably."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down how the widget will isolate its styles from host pages"
                - "Build an async loader snippet and measure its size"
                - "Create three hostile host test pages with global CSS and a strict policy"
                - "Publish a versioned embed URL with upgrade notes for host sites"
---

# Frontend Web Engineering

Frontend work is where every decision lands in front of a real person on a real device, often a mid-range phone on a patchy connection. This area is for engineers who build and keep web interfaces, starting with foundations (a browser matrix, a rendering choice, strict types, tokens, and baselines for Core Web Vitals, accessibility and client errors), then the operating machinery that keeps the frontend healthy, the browser and CSS skills behind it, improvements and decisions such as data fetching, styling and images, dated events like a redesign or a framework upgrade, situations from a first frontend job to a sole startup engineer, and specialist work on offline apps, security headers, huge lists and real-time interfaces.

The rhythm is a weekly look at browser errors, a weekly pre-release cross-browser pass, a monthly Core Web Vitals and bundle review, a monthly accessibility spot check and browser release read, and quarterly component and third-party script clean-ups. The **Metrics log** template suits the vitals record, the **Remediation plan** template suits accessibility fixes, the **Operational checklist** template suits the release pass and the **Reading queue** template suits your frontend reading. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
