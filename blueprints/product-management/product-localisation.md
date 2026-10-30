---
id: product-management.product-localisation
name: Product Localisation
description: "A product ready for other languages, a translation pipeline with glossary, style guides and quality reviews, and the formats, payment methods and launch plans that make each new market feel local."
category: business
version: 1.0.0
tags: [product-management, product-localisation, team, enterprise, localisation, internationalisation, translation, new-markets]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - feedback-themes
    - vendor
    - operational-checklist
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Localisation
          description: "Adapting a product for new languages and regions, including translation workflows, local formats, regulations and market-specific features."
          projects:
            - name: Internationalisation readiness audit of one user flow
              description: |-
                ## Purpose
                Before a single string goes to a translator, the code has to be able to hold another language: strings outside the source code, no sentences glued together from fragments, dates and numbers formatted by locale, and layouts that survive longer words. An audit of one representative flow, such as sign-up to first invoice, shows how much engineering work sits between you and a second language, and it costs far less than finding the same problems during a launch.

                ## Milestones
                1. One end-to-end flow chosen and every screen, email and error message in it captured.
                2. Hard-coded strings, concatenated sentences and locale-blind date, number and currency formatting counted for that flow.
                3. Each issue sized by engineering as small, medium or large.
                4. A written estimate of the internationalisation work shared with the engineering lead.

                ## Notes
                Audit the emails, PDFs, push notifications and error messages too. They are usually built by different code paths and are the ones missed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written internationalisation audit of one full user flow lists every issue found, sized by engineering, with a total estimate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one user flow that touches the most screens and emails"
                - "Screenshot every screen, email and error message in that flow"
                - "Tag each hard-coded string, concatenation and fixed date or number format"
                - "Ask an engineer to size each issue as small, medium or large"
            - name: Scorecard for choosing the next three locales
              description: |-
                ## Purpose
                Teams often pick their next language because a senior person speaks it or one large prospect asked. Scoring candidate markets on the same criteria, such as existing sign-ups from the region, sales pipeline, competitor coverage, regulatory effort and translation cost, turns that into a decision you can explain to the board and revisit next year.

                ## Milestones
                1. Six to ten candidate locales listed with the evidence behind each.
                2. Five or six weighted criteria agreed with sales, finance and engineering.
                3. Every candidate scored, with the source of each number noted.
                4. The top three locales chosen and the reasoning recorded in a dated decision note.

                ## Notes
                Separate language from market. Spanish for Mexico and Spanish for Spain may share most of a translation but not payment methods, tax rules or support hours.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored list of at least six candidate locales exists, with the top three chosen and a dated decision note explaining why."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull sign-ups and traffic by country for the last twelve months"
                - "Ask sales for open pipeline and lost deals by region"
                - "Agree five weighted criteria with sales, finance and engineering"
                - "Score each candidate locale and write the decision note"
                - "Rescore the candidate locales with fresh data @recurring(yearly)"
            - name: Locale codes and fallback chain policy
              description: |-
                ## Purpose
                Products that mix 'es', 'es-ES' and 'spa' across services end up showing English to Mexican users or Spain's Spanish to Argentines. Agreeing one standard for locale tags, usually BCP 47, and a written fallback order for each locale stops this at the source and gives engineering a rule to test against.

                ## Milestones
                1. One locale tag standard chosen and written down, with examples.
                2. Every locale the product supports or plans to support listed with its tag.
                3. A fallback chain written for each locale, ending in the source language.
                4. Engineering has confirmed that every service reads the same tags.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page locale policy lists every supported tag and its fallback chain, and engineering has confirmed all services follow it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every place the product stores or reads a language or region setting"
                - "Choose BCP 47 tags as the standard unless there is a strong reason not to"
                - "Write the fallback chain for each planned locale"
                - "Ask engineering which services still use other codes"
            - name: Localisation roles and decision rights
              description: |-
                ## Purpose
                Localisation touches product, engineering, design, marketing, legal, support and regional sales, and without named owners it becomes the job of whoever notices a bad translation. A short responsibility chart that names who requests a locale, who approves source copy, who manages vendors, who signs off each language and who pays removes most of the friction before the first launch.

                ## Milestones
                1. Every recurring localisation decision listed, from adding a locale to approving a translation.
                2. One accountable owner named for each decision, with the people consulted.
                3. An in-country reviewer named for every live or planned locale.
                4. The chart agreed by the product and engineering leads and published where both teams look.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published responsibility chart names one accountable owner for each localisation decision and a reviewer for every planned locale."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ten localisation decisions that come up most often"
                - "Name one accountable owner and the people consulted for each"
                - "Find an in-country reviewer for every planned locale"
                - "Get sign-off on the chart from the product and engineering leads"
                - "Check the chart still matches who actually decides @recurring(yearly)"
            - name: Translation management system selection
              description: |-
                ## Purpose
                Spreadsheets and emailed resource files work for one language and break at three: strings go missing, translators lose context and nobody knows which version shipped. A translation management system connects to the code repository, holds translation memory and the glossary, and shows translators screenshots. Comparing three on the same test project before signing anything avoids a costly migration a year later.

                ## Milestones
                1. Requirements written, covering file formats, repository integration, machine translation, review workflow, single sign-on and price model.
                2. Three systems shortlisted and each trialled on the same sample of real strings.
                3. One translator and one engineer have scored each trial.
                4. A system chosen, with contract terms and exit options recorded.

                ## Notes
                Start from the **Purchase decision** template. Check how the price scales: per word, per seat and per hosted string models diverge sharply by the tenth locale.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One translation management system chosen after a trial on real strings, with scores from a translator and an engineer recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the must-have requirements for a translation management system"
                - "Shortlist three systems that support your file formats"
                - "Run the same 500 real strings through each trial"
                - "Collect scores from one translator and one engineer per trial"
            - name: String resource file conventions
              description: |-
                ## Purpose
                Translators often see only a key and a string, with no screen in sight, so the way strings are stored decides how good the translation can be. Conventions for key names, developer comments, placeholders, character limits and whole sentences rather than fragments give every string a fair chance and make each review faster.

                ## Milestones
                1. A naming pattern for string keys agreed and documented with examples.
                2. A rule in place that every new string carries a comment saying where it appears and any length limit.
                3. Placeholder and plural syntax standardised on one message format.
                4. A lint or code review check that blocks strings without comments.

                ## Notes
                Never build a sentence from separate strings, such as 'You have' plus a number plus 'items'. Word order changes between languages and the result cannot be translated well.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written string conventions exist, and a check in code review or the build rejects new strings that are missing a comment."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect twenty real strings that confused translators in the past"
                - "Draft the key naming, comment and placeholder rules"
                - "Ask engineering to add a check for strings without comments"
                - "Walk the front-end team through the rules in a short session"
            - name: Product glossary and do-not-translate list
              description: |-
                ## Purpose
                If 'workspace' is translated three ways across the app, the help centre and invoices, users assume they are three different things. A glossary of the fifty to two hundred terms that matter most, with approved translations per locale and a list of names that stay in the source language, is the cheapest quality improvement in localisation.

                ## Milestones
                1. Candidate terms pulled from the UI, help centre and sales materials.
                2. A source glossary of agreed terms, each with a definition and a usage note.
                3. Approved translations added for every live locale by in-country reviewers.
                4. Brand and feature names marked do-not-translate and loaded into the translation system.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of at least fifty terms, with approved translations for each live locale, is loaded into the translation system."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the most frequent nouns and feature names from the UI strings"
                - "Write a one-line definition for each term you keep"
                - "Mark brand and product names that must stay in the source language"
                - "Send the glossary to in-country reviewers for approved translations"
            - name: Voice and style guide for each locale
              description: |-
                ## Purpose
                Should German users be addressed as 'du' or 'Sie'? Do Japanese error messages apologise? Is the tone in Brazil as casual as your English copy? Without a style guide each translator decides alone and the product's voice shifts from screen to screen. A two-page guide per locale settles formality, punctuation, number and date conventions and how to treat English loanwords.

                ## Milestones
                1. A source-language voice summary written as the starting point.
                2. Formality, tone and form of address decided for each locale with an in-country reviewer.
                3. Punctuation, capitalisation, date and number rules recorded per locale.
                4. Each guide attached to the translation system so translators see it on every job.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live locale has a written style guide covering formality, tone and formatting, attached to the translation system."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the source product voice in five rules with examples"
                - "Agree the formality level for each locale with its reviewer"
                - "Record punctuation, capitalisation and date conventions per locale"
                - "Attach each style guide to its locale in the translation system"
            - name: Localisation cost model per locale
              description: |-
                ## Purpose
                Finance will ask what a new language costs, and the honest answer has more parts than the per-word rate: the first translation of the whole word count, new words each release, review, screenshots and testing, tooling seats, support in that language and engineering time. A simple model per locale gives a defensible number for the business case and a way to check spend later.

                ## Milestones
                1. Current source word count measured across UI, help centre, emails and legal text.
                2. Average new words per month estimated from the last six releases.
                3. One-off and running costs listed for each planned locale.
                4. The model reviewed with finance and used in the market scorecard.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A cost model gives one-off and yearly running costs for each planned locale and has been reviewed with finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the current word count of UI strings, help articles and emails"
                - "Estimate new words per month from the last six releases"
                - "Ask two vendors for translation and review rates per locale"
                - "Update the model with actual spend from invoices @recurring(quarterly)"
            - name: Continuous localisation pipeline
              description: |-
                ## Purpose
                Batch translation, where strings are exported once a quarter, guarantees that new features ship in English first and stay that way for weeks. Connecting the repository to the translation system, so new strings flow out on merge and translations come back as a pull request, lets most locales ship on the same day as the source language.

                ## Milestones
                1. New and changed strings sent to the translation system automatically on merge to the main branch.
                2. Completed translations returned as a reviewed pull request.
                3. Untranslated strings fall back cleanly to the next locale in the chain rather than showing raw keys.
                4. The median time from new string to translated string measured and under five working days.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "New strings reach translators automatically and the median time from merge to translated string is under five working days."
                cadence: rolling
              tasks:
                - "Map how strings currently move from the repository to translators"
                - "Connect the repository to the translation system with engineering"
                - "Review and merge the open translation pull request @recurring(weekly:wed)"
                - "Measure the median days from new string to finished translation"
            - name: Pre-release string freeze and handoff
              description: |-
                ## Purpose
                Even with a continuous pipeline, release week is when copy changes at the last minute and translators get two hours to catch up. A fixed string freeze a few days before each release, a short exception process and one named approver give translators a predictable window and stop late English edits from breaking finished translations.

                ## Milestones
                1. A freeze point agreed relative to each release date.
                2. An exception process with one named approver for late changes.
                3. Translators told the release calendar a month ahead.
                4. Three releases in a row shipped with every locale complete at freeze.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive releases reach their string freeze on time, with every live locale fully translated at launch."
                cadence: rolling
              tasks:
                - "Agree how many working days before release the strings freeze"
                - "Name the one person who approves late string changes"
                - "Share the next month of release dates with translators @recurring(monthly:26)"
                - "Post the string freeze reminder in the release channel before each release"
            - name: Monthly linguistic quality sampling
              description: |-
                ## Purpose
                Translation errors rarely arrive as bug reports; users simply trust the product a little less. A monthly sample, where an in-country reviewer scores a set of strings and screens by error type (accuracy, terminology, style, locale conventions, truncation), shows which locales and vendors need attention long before a customer complains.

                ## Milestones
                1. Error categories and a severity scale agreed, such as a simplified MQM scheme.
                2. A monthly sample size set per locale, weighted towards high-traffic screens.
                3. Scores recorded per locale and per vendor.
                4. Any locale below the agreed score has a correction plan within two weeks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live locale has six months of recorded quality scores, and every locale below threshold has a written correction plan."
                cadence: rolling
              tasks:
                - "Agree five error categories and three severity levels with reviewers"
                - "Choose the high-traffic screens each sample must include"
                - "Score this month's sample for each locale @recurring(monthly:12)"
                - "Send low-scoring results to the vendor with examples"
            - name: Pseudo-localisation in every build
              description: |-
                ## Purpose
                Pseudo-localisation replaces source text with accented, lengthened and bracketed versions, so hard-coded strings, truncation and broken layouts show up in a test build before any translator is paid. Running it on every build and walking the main flows weekly catches internationalisation bugs while the developer still remembers the change.

                ## Milestones
                1. A pseudo-locale available in staging builds with about 30 to 40 percent text expansion.
                2. Hard-coded strings visible because they stay unaltered.
                3. A weekly walk-through of the main flows in the pseudo-locale.
                4. Every issue found filed with a localisation label.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pseudo-locale exists in every staging build and has been walked through weekly for two months, with issues filed."
                cadence: rolling
              tasks:
                - "Ask engineering to add a pseudo-locale to staging builds"
                - "Set text expansion to around a third longer than the source"
                - "Walk the sign-up and checkout flows in the pseudo-locale @recurring(weekly:tue)"
                - "File every truncation and hard-coded string with the localisation label"
            - name: Translation memory and glossary upkeep
              description: |-
                ## Purpose
                Reused translations save money only if the memory behind them is clean: duplicate entries, old product names and segments approved by mistake get reused forever. A monthly tidy of the memory and a prompt answer to glossary requests from translators keep match rates high and stop retired terms creeping back into new releases.

                ## Milestones
                1. A named owner for translation memory and the glossary.
                2. Retired terms and old product names removed or flagged.
                3. New glossary requests from translators answered within a week.
                4. The share of words matched from memory reported each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The glossary has no unanswered translator requests older than a week, and the memory match rate is reported monthly."
                cadence: rolling
              tasks:
                - "Name an owner for translation memory and the glossary"
                - "Answer open glossary requests from translators @recurring(monthly:19)"
                - "Flag retired product names in the memory after each rename"
                - "Report the share of words matched from memory"
            - name: Weekly localisation bug triage
              description: |-
                ## Purpose
                Localisation bugs arrive from everywhere: QA, support tickets in Portuguese, a sales rep's screenshot, a reviewer's comment. Without a shared label and a weekly triage they sit in the general backlog marked cosmetic while a mistranslated payment button costs real money. A short triage sorts them into translation fixes for the vendor and code fixes for engineering.

                ## Milestones
                1. One label used for localisation bugs across all trackers.
                2. A severity guide that treats wrong meaning in payment, legal or security text as critical.
                3. A weekly triage held by the localisation owner and an engineer.
                4. No critical localisation bug left open longer than a week for a full month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Localisation bugs carry one label, are triaged weekly, and no critical one has stayed open longer than a week for a month."
                cadence: rolling
              tasks:
                - "Create one localisation label and add it to every tracker"
                - "Write a severity guide with an example for each level"
                - "Triage new localisation bugs into translation or code fixes @recurring(weekly:thu)"
                - "Ask support to tag tickets that mention the wrong language or a bad translation"
            - name: Locale coverage and quality dashboard
              description: |-
                ## Purpose
                Leaders ask how localised the product is, and the honest answer differs by surface: the app might be complete in French while the help centre sits at 40 percent and transactional emails are still English. A monthly dashboard of coverage by locale and surface, beside quality scores and active users per locale, turns that question into numbers and shows where effort pays.

                ## Milestones
                1. Coverage measured per locale for UI, help content, emails, notifications and legal text.
                2. Active users, conversion and support tickets added per locale.
                3. Quality review scores shown alongside coverage.
                4. The dashboard shared monthly with product leadership.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly dashboard shows coverage by locale and surface with usage and quality, shared with product leadership for three months running."
                cadence: rolling
              tasks:
                - "List every surface users see, from app screens to invoices"
                - "Pull translation coverage per locale for each surface"
                - "Update the coverage dashboard and share it with leadership @recurring(monthly:5)"
                - "Add active users and support tickets per locale"
            - name: In-market feedback loop from regional teams
              description: |-
                ## Purpose
                Regional sales, support and partners hear what local users find odd, missing or wrong long before any metric moves. A single channel where they log issues, with a short template and a promise of a reply, turns scattered complaints into a ranked list of localisation and market-fit fixes.

                ## Milestones
                1. One place for regional teams to log localisation feedback.
                2. A short template asking for locale, screen, screenshot and customer impact.
                3. Every item answered with a decision within two weeks.
                4. Themes summarised monthly and fed into the roadmap.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Regional feedback is logged in one place, every item gets a decision within two weeks, and monthly themes reach the roadmap."
                cadence: rolling
              tasks:
                - "Set up one shared form or board for regional localisation feedback"
                - "Tell each regional lead how to log an issue and what happens next"
                - "Summarise the month's regional feedback into themes @recurring(monthly:23)"
                - "Ask the agent to draft the monthly reply to regional teams"
            - name: Quarterly locale health review
              description: |-
                ## Purpose
                Once five or more locales are live, each needs a regular look at whether it is earning its cost: usage, revenue, quality, support load and outstanding gaps. A quarterly review with regional leads makes an invest, hold or reduce call for each locale, so the set of languages is managed deliberately rather than inherited.

                ## Milestones
                1. A one-page health summary per locale built from the dashboard.
                2. Regional leads invited and briefed a week ahead.
                3. An invest, hold or reduce call made and recorded for each locale.
                4. Actions from the previous review checked off or carried forward with a reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly reviews held in a year, each recording an invest, hold or reduce decision for every live locale."
                cadence: cyclic
              tasks:
                - "Build a one-page health summary for each live locale"
                - "Hold the locale health review with regional leads @recurring(quarterly)"
                - "Record the invest, hold or reduce call for each locale"
                - "Check the actions agreed at the previous review"
            - name: Translation vendor performance review
              description: |-
                ## Purpose
                Agencies and freelance translators drift: turnaround slips, a strong linguist leaves, rates creep up. Reviewing each vendor every quarter against turnaround, quality scores, responsiveness to queries and cost per word keeps the relationship honest and gives you evidence when it is time to renegotiate or switch.

                ## Milestones
                1. A vendor record for each translation supplier with rates, locales and contacts.
                2. Turnaround, quality and cost tracked per vendor.
                3. A quarterly scorecard shared and discussed with each vendor.
                4. A backup supplier identified for every major locale.

                ## Notes
                Start from the **Vendor** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every translation vendor has a quarterly scorecard on file and every major locale has a named backup supplier."
                cadence: cyclic
              tasks:
                - "Create a vendor record for each translation supplier"
                - "Send each vendor its quarterly scorecard and discuss it @recurring(quarterly)"
                - "Find a backup supplier for each of your three largest locales"
                - "Check rates against the contract before each renewal"
            - name: Unicode and text handling basics for product managers
              description: |-
                ## Purpose
                Many localisation bugs start with a product decision rather than a translation: a 20-character username limit that breaks in Thai, sorting that ignores accents, search that cannot match 'café' to 'cafe', emoji counted as two characters. A few hours on Unicode, encodings, normalisation and collation help a product manager write requirements that hold in every script.

                ## Milestones
                1. The difference between characters, code points and bytes explained in your own words.
                2. Normalisation, and why one accented letter can be stored two ways, understood.
                3. Locale-aware sorting and case rules tried on real examples.
                4. Three existing requirements reviewed and rewritten where they assume English text.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three existing product requirements have been reviewed for text-handling assumptions and rewritten where needed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an introduction to Unicode written for non-engineers"
                - "Test how your product sorts and searches names with accents"
                - "Count characters versus bytes for a sample of Thai and emoji text"
                - "Rewrite one length or validation rule that assumes English"
            - name: Plurals, gender and message formats
              description: |-
                ## Purpose
                English has two plural forms; Arabic has six, Polish four and Japanese one. Many languages also change adjectives and verbs by gender in ways a single template cannot hold. Learning how ICU MessageFormat handles plural and select rules lets you specify strings that translators can actually get right, instead of shortcuts like 'item(s)'.

                ## Milestones
                1. CLDR plural categories for your live locales listed.
                2. Plural and select syntax practised on five real product strings.
                3. Every parentheses-style plural in the product found and listed.
                4. A rule added to the string conventions requiring plural syntax for counts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every string with a count in the product uses plural syntax, and the rule is written into the string conventions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Look up the plural categories for each live locale in the CLDR charts"
                - "Rewrite five real count strings using plural syntax"
                - "Search the strings for parentheses plurals such as item(s)"
                - "Add the plural rule to the string conventions page"
            - name: Right-to-left layouts and bidirectional text
              description: |-
                ## Purpose
                Arabic, Hebrew, Persian and Urdu read right to left, which mirrors navigation, progress bars, directional icons and the order of form fields, while numbers, code and English brand names inside a sentence still run left to right. Understanding mirroring and bidirectional text before committing to a right-to-left locale avoids a release that is technically translated but hard to use.

                ## Milestones
                1. The rules for what mirrors and what does not written down with examples.
                2. Directional icons in the product listed and marked mirror or keep.
                3. Mixed-direction strings, such as an Arabic sentence containing an order number, tested.
                4. A native right-to-left reader has walked through a prototype and their notes are recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A native right-to-left reader has reviewed a mirrored prototype, and every directional icon is marked mirror or keep."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a guide to mirroring interfaces for right-to-left languages"
                - "List every directional icon and mark it mirror or keep"
                - "Test five strings that mix Arabic text with numbers and English names"
                - "Book a native right-to-left reader to walk through a prototype"
            - name: Local formats for dates, numbers, currencies and addresses
              description: |-
                ## Purpose
                Dates written 03/04 mean March in the United States and April in most of Europe, 1.234,56 is a normal price in Germany, and Japanese addresses run from the largest unit to the smallest. The Unicode CLDR data most platforms ship already knows these conventions, and learning what it covers stops teams hand-coding formats that are wrong in half the world.

                ## Milestones
                1. The CLDR data your platform uses identified, with its version.
                2. Date, time, number and currency formatting checked on real screens in every live locale.
                3. Week start day, time zone display and calendar differences noted per locale.
                4. Every hand-coded format in the product listed for replacement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Dates, numbers and currency have been checked on real screens in every live locale, and every hand-coded format is listed for replacement."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find out which CLDR version your platform and libraries use"
                - "Screenshot dates, prices and numbers in every live locale"
                - "Note the first day of the week and time format each locale expects"
                - "List hand-coded formats for engineering to replace"
            - name: Writing source copy that translates well
              description: |-
                ## Purpose
                Idioms, puns, ambiguous words like 'post' or 'free', and sentences with three clauses cost more to translate and come back wrong more often. Writers and product managers who learn a short set of global English rules, such as one idea per sentence, no culture-bound metaphors and the same word for the same thing, raise quality in every locale at once.

                ## Milestones
                1. A one-page global English checklist agreed with design and content.
                2. Fifty existing strings rewritten as a practice set.
                3. Translator queries per release counted before and after.
                4. The checklist built into the copy review step.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A global English checklist is part of copy review, and translator queries per release have been compared before and after it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect the source strings that caused the most translator queries"
                - "Draft a one-page global English checklist"
                - "Rewrite fifty existing strings against the checklist"
                - "Check a sample of new source strings against the checklist @recurring(monthly:8)"
            - name: Machine translation and post-editing levels
              description: |-
                ## Purpose
                Machine translation now produces usable drafts for many language pairs, but usable depends on the content: a help article tolerates small slips that a payment confirmation cannot. Learning how engines differ, what light and full post-editing mean and how quality estimation works lets you choose a level for each content type instead of all human or all machine.

                ## Milestones
                1. Two engines compared on the same 200 real strings in two locales.
                2. Light and full post-editing defined with examples from your product.
                3. Reviewer effort or edit distance measured for each engine.
                4. A written view of where machine translation is acceptable in your product.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two machine translation engines have been compared on real strings in two locales, with reviewer effort recorded and a written view on where each fits."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick 200 real strings covering UI, help and marketing text"
                - "Run them through two machine translation engines"
                - "Ask reviewers to record how much each output needed fixing"
                - "Write a short view on which content types suit machine translation"
            - name: Cultural adaptation beyond translation
              description: |-
                ## Purpose
                A perfectly translated screen can still feel foreign: sample names like John Smith, a thumbs-up icon, red for success, a mailbox illustration nothing like the local kind, or examples built around Thanksgiving. Learning to spot these and agreeing what to adapt per market is the difference between translated and localised.

                ## Milestones
                1. Imagery, icons, colours, examples and sample data audited for one market.
                2. Each item marked keep, adapt or remove with an in-country reviewer.
                3. Adapted assets produced for the highest-traffic screens.
                4. A short list of cultural checks added to design review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One market's imagery, examples and sample data have been reviewed with an in-country reviewer, and cultural checks are part of design review."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Screenshot every illustration, icon and example in onboarding"
                - "Review them with an in-country reviewer and mark keep, adapt or remove"
                - "Replace sample names and data with local equivalents"
                - "Add three cultural checks to the design review checklist"
            - name: Translation method by content tier
              description: |-
                ## Purpose
                Not every word deserves the same treatment. Legal terms, prices and payment flows need professional translation and review, core UI needs professional translation, help articles might take machine translation with full post-editing, and community posts might stay raw machine output with a label. Writing these tiers down sets cost and quality expectations and ends the argument each time a new content type appears.

                ## Milestones
                1. Every content type in the product listed with its word count and traffic.
                2. Three or four tiers defined, each with a translation method and review rule.
                3. Each content type assigned to a tier and agreed with legal and support.
                4. The translation system and vendors configured to follow the tiers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every content type is assigned to a written translation tier agreed with legal and support, and the translation system routes work by tier."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each content type with its monthly word count and traffic"
                - "Define three or four tiers with a method and review rule for each"
                - "Agree the tier for legal and payment text with the legal team"
                - "Configure the translation workflow to route work by tier"
            - name: Text expansion and truncation fixes
              description: |-
                ## Purpose
                German and Finnish often run 30 percent longer than English, and short strings like button labels can double. Clipped buttons, overlapping labels and menus that wrap onto two lines are the most visible localisation bugs and among the easiest to prevent with flexible layouts and agreed length limits.

                ## Milestones
                1. All truncation bugs from the pseudo-locale and live locales collected in one list.
                2. Fixed-width components replaced with layouts that grow or wrap.
                3. Character limits added to string comments where space is truly fixed.
                4. No known truncation bugs on the five highest-traffic screens.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The five highest-traffic screens show no truncation in any live locale or in the pseudo-locale."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect every truncation bug into one list with screenshots"
                - "Ask design to define how buttons and labels grow or wrap"
                - "Add character limits to comments for strings in fixed spaces"
                - "Retest the top five screens in German and the pseudo-locale"
            - name: Local payment methods and currency display
              description: |-
                ## Purpose
                In the Netherlands many people expect iDEAL, in Brazil Pix and boleto, in India UPI, and in much of Asia digital wallets come before cards. Showing prices in the local currency with the right symbol position and decimal style, and offering the methods people actually use, often moves conversion more than translating the checkout. Price levels stay with whoever owns pricing; this project covers how prices are shown and paid.

                ## Milestones
                1. Payment method usage researched for each priority market.
                2. Checkout drop-off by country compared with the payment methods offered.
                3. Currency display checked against local conventions in every locale.
                4. A decision recorded on which local methods to add, with the payments provider's support confirmed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on which local payment methods to add in each priority market is recorded, with provider support and checkout drop-off data attached."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the most used payment methods in each priority market"
                - "Compare checkout drop-off by country with the methods offered"
                - "Check currency symbols and decimal styles on the checkout page"
                - "Ask your payments provider which local methods it supports"
            - name: Language detection and switcher design
              description: |-
                ## Purpose
                Guessing language from IP address sends travellers, expats and VPN users the wrong language and traps them there. A clear rule, such as account preference first once set, then browser or device language, then region, and a switcher that is always reachable and lists each language in its own name, respects users and ends the steady trickle of tickets asking how to change the language.

                ## Milestones
                1. Current detection logic documented across web, mobile, emails and notifications.
                2. A precedence rule agreed: account setting, then browser or device, then region.
                3. A switcher designed that lists each language in its own name and script.
                4. Support tickets about the wrong language counted before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One written precedence rule governs language selection across every surface, and a switcher listing languages in their own names has shipped."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Document how each surface picks a language today"
                - "Count support tickets about the wrong language in the last quarter"
                - "Write the precedence rule for account, device and region signals"
                - "Design a switcher that names each language in its own script"
            - name: International name, address and phone forms
              description: |-
                ## Purpose
                First and last name fields fail people with one name or several family names, a mandatory postcode blocks users in countries without one, and a state dropdown makes no sense in most of the world. Redesigning forms around local address formats and international phone numbers reduces failed sign-ups and returned deliveries in every new market.

                ## Milestones
                1. Every form collecting names, addresses or phone numbers listed.
                2. Failed submissions by country measured where the data exists.
                3. Address fields adapted per country using a maintained format library.
                4. A single full-name field or flexible name pattern agreed with design and data teams.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every form collecting names, addresses or phone numbers accepts valid input from each priority market, verified with test data from that market."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every form that asks for a name, address or phone number"
                - "Pull failed form submissions by country for the last quarter"
                - "Choose an address format library that covers your priority markets"
                - "Test each form with real address examples from every priority market"
            - name: Help centre translation priority list
              description: |-
                ## Purpose
                Translating a whole help centre of 600 articles is expensive, and much of it is rarely read. Ranking articles by views, tickets avoided and links from inside the product, then translating the top fifty first, usually covers most reader visits for a fraction of the cost and shows where the gaps really are.

                ## Milestones
                1. Help articles ranked by views and support tickets avoided.
                2. Articles linked from inside the product flagged.
                3. The top fifty translated for each priority locale.
                4. Searches with no results in each locale reviewed to find missing articles.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The top fifty help articles by traffic and product links are translated for each priority locale, with the ranking saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export help article views for the last six months"
                - "Flag every article linked from inside the product"
                - "Send the top fifty articles to translation for each priority locale"
                - "Review failed help searches in each locale for missing articles"
            - name: Fonts and typography for non-Latin scripts
              description: |-
                ## Purpose
                A brand font that covers Latin letters may have no Cyrillic, Greek, Arabic, Devanagari or Chinese characters, so the system substitutes something that clashes or shows empty boxes. Choosing a fallback font per script, adjusting line height for scripts with tall marks and checking the file size of Chinese and Japanese fonts keeps the product readable and recognisably yours.

                ## Milestones
                1. Script coverage of the current brand fonts checked.
                2. A fallback font chosen for each script in planned locales.
                3. Line height and font size rules adjusted per script.
                4. Font file size for Chinese and Japanese pages measured and kept within the performance budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every planned script has a chosen font, adjusted spacing rules and a page tested with real text, with no missing-character boxes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check which scripts your brand fonts actually cover"
                - "Choose a fallback font for each script in planned locales"
                - "Test line height with real Arabic and Hindi text"
                - "Measure the page weight of Chinese and Japanese font files"
            - name: Screenshots and context for translators
              description: |-
                ## Purpose
                Translators shown the string 'Open' cannot tell whether it is a button, a status or an adjective, and in many languages those are different words. Feeding screenshots or in-context previews into the translation system, linked to each string, cuts translator queries and the errors that come from guessing.

                ## Milestones
                1. The share of strings with a screenshot or context note measured.
                2. Screenshots captured automatically from test runs and uploaded to the translation system.
                3. In-context preview tried for the web app if the system supports it.
                4. Translator queries per thousand words compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least 80 percent of UI strings have a linked screenshot or context note, and translator queries have been compared before and after."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Measure what share of strings have a screenshot or comment"
                - "Ask QA to capture screenshots during automated test runs"
                - "Link the screenshots to strings in the translation system"
                - "Compare translator queries per thousand words before and after"
            - name: First new locale launch
              description: |-
                ## Purpose
                Launching a new language is a release in its own right: translation complete, in-country review signed off, help content, emails and legal text ready, support able to answer, marketing pages live and a way back if something is badly wrong. A launch checklist and a go or no-go call a week before the date keep the first locale from going out half done.

                ## Milestones
                1. A launch checklist covering product, content, legal, support and marketing.
                2. In-country review signed off on all core flows.
                3. Support staffed in the language, or a fallback language policy published.
                4. A go or no-go decision recorded a week before launch.
                5. Thirty-day usage and quality checked against the business case.

                ## Notes
                Start from the **Operational checklist** template. If your platform allows it, release the locale behind a flag to a small share of users in the market first.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new locale went live on its planned date with a signed-off checklist, and a thirty-day review compared results with the business case."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Create the launch checklist from the operational checklist template"
                - "Book the in-country sign-off review three weeks before launch"
                - "Agree with support how tickets in the new language are handled"
                - "Hold the go or no-go call one week before launch"
                - "Review usage and quality thirty days after launch"
            - name: Country requirements inventory before market entry
              description: |-
                ## Purpose
                Some countries require certain information in the local language, such as consumer terms, invoices or safety text, and rules on data storage, consumer rights, accessibility and electronic invoicing vary widely. An inventory of what may apply in each target market, confirmed by legal or local counsel, prevents a launch being held up late or a product quietly falling short of local rules.

                ## Milestones
                1. Questions listed for each target market: language requirements, data location, consumer law, invoicing and accessibility.
                2. Legal or local counsel asked to confirm what applies.
                3. Each confirmed requirement assigned an owner and a date before launch.
                4. Requirements and their status recorded in a risk register.

                ## Notes
                Start from the **Risk register** template. This project organises the questions; the answers come from qualified advisers. French language rules in Quebec and European data protection law are examples of requirements that shape product work.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every target market has a requirements list confirmed by legal or local counsel, with an owner and a due date for each item."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the language, data, consumer and invoicing questions for each market"
                - "Send the questions to legal or local counsel for confirmation"
                - "Assign an owner and a pre-launch date to every confirmed requirement"
                - "Ask counsel whether anything has changed in each live market @recurring(yearly)"
            - name: Localised website and search presence for a launch market
              description: |-
                ## Purpose
                Users in a new market usually meet the product through a search result or a marketing page before they ever see the app. Translated landing pages with correct hreflang tags, local keywords researched by a native speaker rather than translated, and a localised sign-up path give the new locale a fair start on launch day.

                ## Milestones
                1. Local keyword research done by a native speaker for the main pages.
                2. Landing, pricing and sign-up pages translated and reviewed.
                3. Hreflang tags and locale URLs set up and validated.
                4. Organic traffic and sign-ups from the market tracked from launch.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Localised landing, pricing and sign-up pages are live with validated hreflang tags, and sign-ups from the market are tracked from launch day."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask a native speaker to research local search terms for the product"
                - "Translate and review the landing, pricing and sign-up pages"
                - "Set up hreflang tags and check them with a validator"
                - "Track sign-ups from the new market from launch day"
            - name: Regional holiday and release calendar
              description: |-
                ## Purpose
                Shipping a large change during Golden Week, Ramadan, Lunar New Year or the August holidays in much of Europe means regional teams and reviewers are away and users are not looking. A yearly calendar of holidays and peak seasons per market helps schedule releases, freezes and in-market announcements, and shows when local reviewers will be unavailable.

                ## Milestones
                1. Public holidays and peak seasons listed for every live and planned market.
                2. Reviewer and regional team availability added.
                3. Release and string freeze dates checked against the calendar.
                4. The calendar shared with release managers and marketing.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A holiday and peak season calendar covering every live market is shared with release managers and checked before each quarterly release plan."
                cadence: cyclic
              tasks:
                - "List public holidays and peak seasons for each live market"
                - "Ask reviewers for their planned time off"
                - "Rebuild the regional holiday calendar for next year @recurring(yearly)"
                - "Check the next quarter's release dates against the calendar"
            - name: Pausing or retiring an underperforming locale
              description: |-
                ## Purpose
                A locale with a few hundred active users can cost as much each year as one with fifty thousand, because every release still needs translation and review. When the quarterly review shows a locale is not earning its cost, a planned reduction, such as core UI only or machine translation with sampling, with notice to affected users and regional teams, is kinder and cheaper than letting quality decay unnoticed.

                ## Milestones
                1. Usage, revenue and cost for the locale set out for the last four quarters.
                2. Options compared: full support, core UI only, machine translation or retirement.
                3. A decision made with regional and commercial leads and recorded.
                4. Affected users and customers notified with a timeline and an alternative language.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded decision for the locale, with options compared, and affected users notified at least sixty days before any change."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull four quarters of usage, revenue and cost for the locale"
                - "Compare full support, core UI only, machine translation and retirement"
                - "Agree the option with regional and commercial leads"
                - "Ask the agent to draft the notice to affected users"
            - name: Enterprise contract that requires a language
              description: |-
                ## Purpose
                Large customers sometimes make a language a condition of signing: a French-speaking subsidiary, a works council that expects German, a public body that needs Welsh or Arabic. Treating that request as a scoped commitment, with a defined set of surfaces, a quality level, a date and agreement on who pays, avoids promising a full localisation the team cannot deliver in time.

                ## Milestones
                1. The customer's exact requirement captured: which users, which surfaces, which documents.
                2. Effort, cost and date estimated with engineering and the translation vendor.
                3. Contract wording agreed with sales and legal before signature.
                4. Delivery tracked against the committed date and confirmed with the customer.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The language commitment in the contract names surfaces, quality level and date, and the customer confirmed delivery on or before that date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the account team for the customer's language requirement in writing"
                - "Estimate effort and cost with engineering and the translation vendor"
                - "Review the contract wording with sales and legal before signature"
                - "Confirm delivery with the customer's administrator"
            - name: Localisation without a dedicated localisation manager
              description: |-
                ## Purpose
                In a team of ten, localisation is usually one product manager's side job, and the risk is that it quietly absorbs a day a week. A lean setup, with a hosted translation system, one freelance translator per locale, machine translation for low-risk content and a fixed weekly hour, gets two or three locales live without building a department.

                ## Milestones
                1. Locales limited to the two or three with the clearest evidence.
                2. One freelance translator and one reviewer named per locale.
                3. A fixed weekly hour set aside for localisation work.
                4. Time spent tracked for a month and compared with the estimate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two or three locales are maintained by named freelancers within a fixed weekly hour, with time tracked for a month."
                cadence: rolling
              tasks:
                - "Choose the two or three locales with the strongest evidence"
                - "Find one freelance translator and one reviewer for each"
                - "Spend the weekly localisation hour on the open queue @recurring(weekly:fri)"
                - "Track time spent on localisation for one month"
            - name: Shared localisation platform across product teams
              description: |-
                ## Purpose
                Enterprises with ten product teams tend to end up with ten translation tools, several agencies and competing glossaries, so the same term is translated five ways and costs hide in five budgets. A shared platform, with one system, one glossary, central vendor contracts and self-service for teams, cuts cost and gives customers one voice across products.

                ## Milestones
                1. Current tools, vendors and spend gathered from every product team.
                2. A shared operating model agreed: what is central and what stays with teams.
                3. Teams moved onto one translation system and glossary in a planned order.
                4. Central spend and per-team usage reported each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All product teams use one translation system and glossary, with central vendor contracts and quarterly spend reported per team."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Survey every product team for its tools, vendors and spend"
                - "Draft the operating model for what is central and what is local"
                - "Plan the migration order with the team leads"
                - "Report localisation spend and usage per team @recurring(quarterly)"
            - name: Internationalisation retrofit of a legacy product
              description: |-
                ## Purpose
                An acquired product or a ten-year-old codebase often keeps strings in templates, database columns and stored procedures, saves dates without time zones and uses character sets that cannot hold Chinese. Retrofitting it is an engineering programme, not a translation job, and phasing it by surface and risk keeps the business running while the foundations change.

                ## Milestones
                1. Internationalisation issues catalogued across code, database, emails and generated documents.
                2. Work phased by surface, with the riskiest data changes isolated.
                3. Database text storage moved to an encoding that holds every script.
                4. The first surface fully externalised and passing the pseudo-locale walk-through.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The legacy product's first surface is fully externalised, stores text in a universal encoding and passes a pseudo-locale walk-through."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Catalogue strings stored in code, templates and database tables"
                - "Check the database character set and collation with engineering"
                - "Phase the retrofit by surface and data risk"
                - "Run the first externalised surface in the pseudo-locale"
            - name: In-country reviewer programme
              description: |-
                ## Purpose
                Staff in regional offices, partners and friendly customers often know local terminology better than any agency, but ad hoc review produces late, inconsistent feedback. A small programme with named reviewers, hours agreed with their managers, a review guide and visible thanks gets reliable sign-off on every release.

                ## Milestones
                1. A reviewer named for each live locale, with their manager's agreement on hours.
                2. A review guide covering what to check and how to comment.
                3. Review turnaround and comment volume tracked per reviewer.
                4. Reviewers thanked publicly and shown what their feedback changed each quarter.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every live locale has a named reviewer with agreed hours, and review turnaround is tracked for at least three releases."
                cadence: rolling
              tasks:
                - "Ask regional managers to nominate a reviewer for each locale"
                - "Agree a monthly review time budget with each reviewer's manager"
                - "Write a review guide on what to check and how to comment"
                - "Send reviewers a summary of changes their feedback produced @recurring(quarterly)"
            - name: Community translation programme
              description: |-
                ## Purpose
                Open-source projects, consumer apps and education tools with keen users can reach dozens of languages through volunteers, as long as there is structure: a contributor guide, a glossary, trusted reviewers who approve changes and clear terms for contributions. Without that, volunteer translations swing in quality and stall when one enthusiast moves on.

                ## Milestones
                1. A contributor guide and contribution terms published.
                2. A translation project open to volunteers with review roles set.
                3. At least one trusted reviewer for each community locale.
                4. Contributors credited in the product or the release notes.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Community translations are approved by at least one trusted reviewer per locale, under published contributor terms, with contributors credited."
                cadence: rolling
              tasks:
                - "Write a contributor guide and confirm the contribution terms with legal"
                - "Open the translation project to volunteers with review roles"
                - "Recruit a trusted reviewer for each community locale"
                - "Credit new contributors in the release notes @recurring(monthly:15)"
            - name: Market-specific feature adaptation
              description: |-
                ## Purpose
                Some markets need features, not just words: national ID fields, local tax numbers on invoices, electronic invoicing mandates, a messaging app people use instead of email, or integration with the dominant local accounting tool. Deciding which adaptations to build, which to defer and which markets to skip because of them is a product decision that belongs on the roadmap with evidence behind it.

                ## Milestones
                1. Market-specific needs gathered from regional teams, lost deals and support.
                2. Each need sized and tied to the revenue or users it affects.
                3. Build, defer or decline decided for each, with reasons recorded.
                4. Approved adaptations placed on the roadmap with an owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each market-specific need has a recorded build, defer or decline decision with sizing, and approved items are on the roadmap."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect market-specific requests from regional teams and lost deals"
                - "Size each request and the revenue or users it affects"
                - "Decide build, defer or decline with regional leads"
                - "Add approved adaptations to the roadmap with an owner"
            - name: Measuring the return on a new locale
              description: |-
                ## Purpose
                Whether a locale paid off is rarely measured, which makes the next one hard to fund. Comparing activation, conversion and retention for users in the market before and after launch, ideally against a holdout or a similar market that did not change, gives an honest estimate of what the localisation was worth.

                ## Milestones
                1. Baseline metrics for the market captured before launch.
                2. A comparison group chosen, such as a holdout share or a similar market.
                3. Results measured at thirty and ninety days after launch.
                4. A written return estimate shared with finance and used in the next scorecard.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written return estimate for the latest locale compares ninety days of results against a baseline and a comparison group."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Capture activation, conversion and retention for the market before launch"
                - "Choose a holdout share or comparison market with the data team"
                - "Measure results thirty and ninety days after launch"
                - "Write the return estimate and share it with finance"
            - name: AI-assisted translation with human review gates
              description: |-
                ## Purpose
                Large language models can translate with your glossary and style guide supplied and flag their own uncertain segments, which changes the cost of each locale. The risk is confident errors in high-stakes text. A workflow that routes low-confidence and high-tier content to human reviewers and samples the rest keeps the speed without losing control.

                ## Milestones
                1. A pilot run on one locale and one content tier with the glossary and style guide supplied.
                2. Confidence thresholds set for automatic approval versus human review.
                3. Legal, payment and security text always routed to a human.
                4. Pilot quality scores compared with the current vendor on the same sample.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pilot on one locale compared AI-assisted output with the current vendor on the same sample, and routing thresholds are written down."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose one locale and one low-risk content tier for the pilot"
                - "Supply the glossary and style guide to the AI translation setup"
                - "Set the confidence threshold that sends segments to a human reviewer"
                - "Compare pilot quality scores with the vendor on the same sample"
            - name: Locale-level product analytics
              description: |-
                ## Purpose
                Product dashboards that only show global numbers hide the fact that a new locale converts at half the rate, or that one market has a broken step. Adding locale and market as standard dimensions, and defining which one a user belongs to, lets every team spot localisation problems in their own metrics.

                ## Milestones
                1. A definition agreed for a user's locale and market: interface language, billing country or both.
                2. Locale added as a property on the key funnel events.
                3. The main funnel viewable per locale in the analytics tool.
                4. Two locale-specific drop-offs found and logged as issues.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Key events carry locale and market properties and the main funnel is viewable per locale, with at least two drop-offs logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree whether locale means interface language, billing country or both"
                - "Ask engineering to add locale to the key funnel events"
                - "Build the main funnel view split by locale"
                - "Log any locale with a much weaker funnel step as an issue"
            - name: Accessibility across languages
              description: |-
                ## Purpose
                Screen readers choose their voice from the language tag on the page, so a missing or wrong tag reads French text with an English voice that is close to unintelligible. Alt text, captions, accessible names and error announcements all need translation too, and they are often left out of localisation scope entirely.

                ## Milestones
                1. Language attributes checked on every page and on mixed-language passages.
                2. Alt text, captions and accessible names included in localisation scope.
                3. A screen reader test run in two non-English locales.
                4. Accessibility checks added to the locale launch checklist.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Screen reader tests have passed in two non-English locales, and accessibility checks are part of the locale launch checklist."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check the language attribute on pages in each live locale"
                - "Add alt text and accessible names to the strings sent for translation"
                - "Run a screen reader test in two non-English locales"
                - "Add accessibility checks to the locale launch checklist"
---

# Product Localisation

Product Localisation is for product managers and enterprise teams taking a product into new languages and regions, where the work is as much engineering, legal and market fit as it is translation. It starts with the foundations (an internationalisation audit, a market scorecard, locale codes, owners, a translation system, a glossary, style guides and a cost model), then the routines that keep translations flowing and accurate, the skills behind plurals, right-to-left layouts and local formats, decisions on machine translation, forms, payments and fonts, the dated launches and market entries, situations from a ten-person team to a multi-product enterprise, and finally specialist work on AI-assisted translation, market-specific features and measuring return.

What repeats is a Tuesday pseudo-locale walk-through, a Wednesday translation merge, Thursday bug triage and a Friday localisation hour for small teams, monthly quality sampling, glossary upkeep, coverage reporting and regional feedback on different days, quarterly locale health, vendor and reviewer check-ins, and a yearly market rescore and holiday calendar. The Purchase decision, Metrics log, Feedback themes, Vendor, Operational checklist and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
