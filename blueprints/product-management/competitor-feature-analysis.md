---
id: product-management.competitor-feature-analysis
name: Competitor Feature Analysis
description: "Pick the rivals worth comparing, build an evidence-backed feature and experience matrix, keep it current with light routines, and turn the gaps into clear match, differentiate or ignore decisions."
category: business
version: 1.0.0
tags: [product-management, competitor-feature-analysis, team, founder, competitive-analysis, feature-matrix, differentiation, product-teardown]
author: Aurum Technology
starter_structure:
  templates:
    - feedback-themes
    - purchase-decision
    - meeting-notes
    - metrics-log
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Competitor Feature Analysis
          description: "Comparing your product feature by feature and experience by experience against competitors to find gaps, parity needs and real differentiation."
          projects:
            - name: Choosing the competitors worth comparing against
              description: |-
                ## Purpose
                A feature comparison is only as useful as the list it compares against, and most teams either track twelve rivals badly or one rival obsessively. Sorting the field into direct competitors, adjacent tools and the spreadsheet or manual workaround customers really use, then picking three to five for close comparison, keeps the work small enough to stay current.

                ## Milestones
                1. A long list of every product prospects mention, drawn from sales calls, lost deals and review sites.
                2. Each name sorted into direct, adjacent or substitute, with one line on why.
                3. Three to five primary competitors chosen for detailed feature comparison.
                4. The remaining names parked on a watch list with a date to look again.

                ## Notes
                Include the status quo. For many products the strongest competitor is a spreadsheet, an agency or doing nothing, and it deserves a column of its own.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written competitor set names three to five primary rivals and a watch list, each classified as direct, adjacent or substitute."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every competitor named in the last twenty sales or support conversations"
                - "Search two software review sites for products buyers compare yours with"
                - "Sort each name into direct, adjacent or substitute"
                - "Pick three to five primary competitors and record the reasons"
            - name: Decisions the competitor analysis must inform
              description: |-
                ## Purpose
                Competitor analysis with no decision attached turns into a large spreadsheet that nobody opens after the first month. Writing down the two or three questions it must answer, such as which gaps block mid-market deals or whether to match a rival's new approval workflow, sets the depth, the competitors and the deadline before anyone takes a single screenshot.

                ## Milestones
                1. Two or three decisions written as questions, each with an owner and a date it must be answered by.
                2. The audience for the analysis named: product trio, leadership, sales or investors.
                3. A scope line agreed on what the analysis will not cover.
                4. The questions shared with stakeholders and confirmed in writing.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page brief lists the decisions the analysis serves, who owns each and the date each must be answered by."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the product lead which upcoming decision most needs competitor evidence"
                - "Write each decision as a question with an owner and a date"
                - "Note what the analysis will deliberately leave out"
                - "Share the brief with stakeholders and ask for corrections"
            - name: Ground rules for ethical competitor research
              description: |-
                ## Purpose
                Signing up for a rival's trial under a fake company, asking a new hire about their old employer's roadmap or scraping behind a login can create legal and reputational trouble far larger than any insight gained. A short written set of rules, checked with whoever handles legal questions, lets everyone on the team gather evidence confidently from public and honestly obtained sources.

                ## Milestones
                1. A list of acceptable sources agreed: public websites, documentation, published reviews, trials under your real identity and material customers are free to share.
                2. Prohibited practices written down, including misrepresentation and using confidential information from former employees of a rival.
                3. The rules reviewed by your legal adviser or counsel.
                4. Every person who contributes to the matrix has read and acknowledged the rules.

                ## Notes
                Terms of service for many products restrict use for competitive purposes. Read them before signing up, and ask counsel when unsure rather than guessing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written competitor research policy, reviewed by legal, has been acknowledged by every contributor to the matrix."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page list of allowed and prohibited research sources"
                - "Check the terms of service for each primary competitor's trial"
                - "Send the draft to your legal adviser for review"
                - "Re-read the research rules with the team and update them @recurring(yearly)"
            - name: Honest inventory of your own product's features
              description: |-
                ## Purpose
                Teams describe their own product from the roadmap and the pitch deck, so the comparison starts out flattering and wrong. Cataloguing what really ships today, by plan, platform and limitation, gives the matrix an honest home column and often surfaces features the sales team did not know existed.

                ## Milestones
                1. Every shipped capability listed from the live product, help centre and release history, not the roadmap.
                2. Each capability tagged with the plans and platforms where it is available.
                3. Known limitations and workarounds noted against each entry.
                4. The inventory checked by one engineer and one support lead for accuracy.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory of shipped features with plan, platform and limitations for each, signed off by engineering and support."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the help centre article list as a starting checklist of features"
                - "Walk through the live product on each plan and add anything missing"
                - "Note limits such as record caps or missing mobile support"
                - "Ask a support lead to flag features customers believe you have but do not"
            - name: Shared feature taxonomy for comparisons
              description: |-
                ## Purpose
                One competitor calls it workflows, another automations and a third rules, and without a common vocabulary the matrix compares names rather than capabilities. A taxonomy of capability groups with plain definitions, written from the customer's point of view, lets anyone place a rival's feature in the right row and ends arguments about whether two features are really the same thing.

                ## Milestones
                1. Capability groups defined, typically eight to fifteen, each covering a customer task.
                2. Every capability within a group given a one-sentence definition of what it lets a user do.
                3. Competitor terms mapped to your capability names in a glossary.
                4. The taxonomy tested by placing ten features from two rivals without ambiguity.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capability taxonomy with definitions and a competitor term glossary, tested on ten rival features with no disputed placements."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Group your own feature inventory into eight to fifteen customer tasks"
                - "Write a one-sentence definition for each capability"
                - "Map each primary competitor's feature names to your capabilities"
                - "Ask the agent to flag capability definitions that overlap or leave gaps"
            - name: Scoring scale for feature depth
              description: |-
                ## Purpose
                Ticking a box says a feature exists, not whether it is any good, and buyers rarely choose on existence alone. A four-level depth scale, from absent through basic and competitive to leading, with a written test for each level and a rule that every score needs evidence, turns the matrix from a checklist into something a product decision can rest on.

                ## Milestones
                1. Four depth levels defined with observable criteria for each.
                2. A rule agreed that every score links to a screenshot, doc page or test note.
                3. Three capabilities scored independently by two people, with differences discussed.
                4. The scale wording adjusted until independent scores agree.

                ## Notes
                Keep the scale short. Ten-point scales invite false precision and long debates about a six versus a seven.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written four-level depth scale with an evidence rule, and two scorers agreeing on at least three trial capabilities."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a test a reviewer can apply for each of the four depth levels"
                - "Score three capabilities independently alongside a colleague"
                - "Discuss every score where you disagreed and tighten the wording"
                - "Add the evidence rule to the top of the comparison matrix"
            - name: Evidence library for competitor research
              description: |-
                ## Purpose
                Six months on, nobody remembers where the claim that a rival lacks offline mode came from, and the matrix loses credibility the first time a salesperson repeats it and is corrected by a prospect. A single dated library of screenshots, recordings, doc links and test notes, filed by competitor and capability, makes every matrix cell traceable and every update quicker.

                ## Milestones
                1. A folder structure by competitor and capability created in a shared drive.
                2. A naming convention in place that puts the capture date first.
                3. Existing scattered screenshots and notes moved into the library.
                4. A yearly step for archiving evidence older than eighteen months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every existing matrix score links to a dated item in the shared evidence library."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the folder structure by competitor and capability"
                - "Write the date-first naming convention into a short readme"
                - "Collect stray screenshots from chat threads and decks into the library"
                - "Archive evidence older than eighteen months and flag cells relying on it @recurring(yearly)"
            - name: Register of competitor trial and demo accounts
              description: |-
                ## Purpose
                Trial accounts get created on someone's personal email, expire halfway through an analysis and vanish when that person leaves. A register of every account, who holds it, which plan it is on, when it expires and which terms apply keeps hands-on access available whenever a competitor ships something worth testing.

                ## Milestones
                1. Every existing trial, demo or paid competitor account listed with owner and plan.
                2. Accounts moved to a shared team identity under your real company name.
                3. Expiry dates recorded with a reminder ahead of each.
                4. A decision recorded on which competitors justify a paid seat.

                ## Notes
                Use your real name and company. Credentials belong in the team password manager, never in the register itself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register covers every competitor account with owner, plan and expiry, and no account lapses unnoticed during a quarter."
                cadence: rolling
              tasks:
                - "List every competitor account the team holds today"
                - "Record owner, plan, expiry date and terms for each account"
                - "Store the credentials in the team password manager, not the register"
                - "Check which competitor trials expire within a month and renew or replace them @recurring(monthly:8)"
            - name: First feature comparison matrix for three rivals
              description: |-
                ## Purpose
                With the competitor set, taxonomy and scale in place, the first matrix is mostly patient work: going capability by capability through each product and scoring with evidence. Starting with three rivals and your own column keeps it finishable in a few weeks, and the gaps it reveals are usually different from the ones the team assumed.

                ## Milestones
                1. Your product and three competitors scored on every capability in the taxonomy.
                2. Each score linked to evidence in the library.
                3. Cells you could not verify marked as unknown rather than guessed.
                4. A one-page summary of the five largest gaps and three clear advantages.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed matrix covering four products and every taxonomy capability, with evidence links and a one-page gap summary."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Score your own product against every capability first"
                - "Work through one competitor per week, capturing evidence as you go"
                - "Mark any cell you could not verify as unknown"
                - "Write the one-page summary of top gaps and advantages"
            - name: Weekly competitor release notes watch
              description: |-
                ## Purpose
                Rivals announce most feature changes in changelogs, release notes, product blogs and app store updates long before sales hears about them in a lost deal. A fifteen-minute weekly skim of those sources, with anything significant logged against a capability, keeps the matrix close to current without a large quarterly scramble.

                ## Milestones
                1. A source list of changelog, blog, app store and status page links for each primary competitor.
                2. A feed reader or alert inbox collecting them in one place.
                3. A short weekly log of notable changes, each tagged to a capability.
                4. Significant changes reflected in the matrix within two weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly change log exists for at least ten of the last twelve weeks, with each entry tagged to a capability."
                cadence: rolling
              tasks:
                - "Collect changelog, blog and app store links for each primary competitor"
                - "Subscribe to every source in one feed reader or alert inbox"
                - "Skim the week's competitor updates and log notable changes @recurring(weekly:mon)"
                - "Tag each logged change to a capability in the taxonomy"
            - name: Monthly comparison matrix refresh
              description: |-
                ## Purpose
                Rivals ship every few weeks, so a matrix untouched for a quarter starts misleading the people who rely on it. Folding the weekly change log into the matrix once a month, re-scoring only the affected cells and noting what moved, keeps each update small and builds a running history of how the gap is changing.

                ## Milestones
                1. Each month's logged changes applied to the affected cells with new evidence.
                2. A change note recording which scores moved and why.
                3. A last-updated date shown on every competitor column.
                4. No primary competitor column more than 45 days old.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Matrix change notes exist for each of the last three months and no primary competitor column is more than 45 days old."
                cadence: rolling
              tasks:
                - "Apply last month's logged competitor changes to the matrix @recurring(monthly:12)"
                - "Write a three-line note on which scores moved and why"
                - "Update the last-updated date on each competitor column"
                - "Flag any column you could not refresh to its owner"
            - name: Competitor features cited in lost deals
              description: |-
                ## Purpose
                Loss reasons recorded simply as chose a competitor tell the product team nothing; the useful detail is which capability tipped the decision. Agreeing with sales on a short field for the competitor and the specific feature named, then reviewing it monthly, separates the gaps that cost revenue from the gaps that only bother the team.

                ## Milestones
                1. A competitor and feature-cited field added to the deal loss form with sales leadership's agreement.
                2. Three months of lost deals tagged with competitor and capability.
                3. A monthly tally of capabilities cited, weighted by deal value.
                4. The top three revenue-costing gaps shared with the product trio.

                ## Notes
                Treat a single loud deal with caution. Look for the same capability recurring across several losses before calling it a pattern.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly tallies of competitor capabilities cited in lost deals, weighted by deal value, have gone to the product trio."
                cadence: rolling
              tasks:
                - "Agree with the sales lead on a competitor and feature field for lost deals"
                - "Sit in on two loss reviews to hear how reps describe the gap"
                - "Tally capabilities cited in last month's lost deals by deal value @recurring(monthly:20)"
                - "Send the top three gaps to the product trio with deal examples"
            - name: Quarterly hands-on retest of rival core flows
              description: |-
                ## Purpose
                Changelogs describe what a competitor shipped, not how it feels to use, and small redesigns can quietly change a capability's depth. Once a quarter, running your five most important customer tasks end to end in each primary rival's product, with a screen recording, catches the changes that never make the release notes.

                ## Milestones
                1. Five core customer tasks written as repeatable scripts.
                2. Each script run in every primary competitor and recorded.
                3. Depth scores adjusted wherever the experience changed.
                4. Recordings filed in the evidence library with the date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Recorded runs of five core tasks exist for every primary competitor for each of the last two quarters."
                cadence: cyclic
              tasks:
                - "Write five core customer tasks as step-by-step scripts"
                - "Run each script in every primary competitor with screen recording on @recurring(quarterly)"
                - "Adjust depth scores wherever the experience changed"
                - "File the recordings in the evidence library by date"
            - name: Competitor help centre and documentation diffs
              description: |-
                ## Purpose
                Documentation often changes before marketing announces anything: a new settings page, a renamed permission or a limit quietly raised from 1,000 to 10,000 records. Checking the help centres of primary rivals each month for new and changed articles is one of the earliest public signals of what they are building and what they are fixing.

                ## Milestones
                1. Help centre, API reference and status page addresses listed for each primary competitor.
                2. A page-change monitor or monthly manual check in place.
                3. New and changed articles logged with a one-line summary.
                4. Limit changes and new settings reflected in the matrix.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log of competitor documentation changes covers the last three months, with a matrix update for every limit change."
                cadence: rolling
              tasks:
                - "List the help centre and API reference address for each primary competitor"
                - "Set up a page-change monitor on their what's new and limits pages"
                - "Review flagged competitor documentation changes and log the notable ones @recurring(monthly:5)"
                - "Update matrix cells where a documented limit has changed"
            - name: Mining competitor reviews for feature complaints
              description: |-
                ## Purpose
                Rival customers explain exactly what frustrates them in public reviews and app store ratings, and those complaints point to gaps you could own. Reading a month's new reviews for each primary competitor and coding the complaints by capability shows where their depth is weaker in daily use than it looks in a demo.

                ## Milestones
                1. Review site and app store pages bookmarked for each primary competitor.
                2. A monthly batch of new reviews read and complaints coded by capability.
                3. Recurring complaint themes listed with example quotes and counts.
                4. At least one theme taken to gap triage as a differentiation candidate.

                ## Notes
                Start from the **Feedback themes** template. Reviews skew towards the very happy and the very angry, so weigh themes by frequency, not intensity.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Coded competitor review themes with counts exist for three consecutive months, and one theme has been discussed at gap triage."
                cadence: rolling
              tasks:
                - "Bookmark the review and app store pages for each primary competitor"
                - "Read the month's new competitor reviews and code complaints by capability @recurring(monthly:25)"
                - "Ask the agent to summarise recurring complaint themes with counts and quotes"
                - "Take the strongest theme to the next gap triage"
            - name: Monthly competitive feature digest for the team
              description: |-
                ## Purpose
                Intelligence that lives in one product manager's matrix does not change what designers, engineers or salespeople say and build. A one-page monthly digest covering what rivals shipped, which scores moved and what it means for current work gives everyone the same picture in five minutes of reading.

                ## Milestones
                1. A fixed digest format: shipped, moved, so what, and one question for the team.
                2. A distribution list covering the product trio, sales leads and support leads.
                3. Digests sent for three consecutive months.
                4. Feedback gathered on whether the digest is read and useful.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly digests have gone to an agreed list, with reader feedback recorded after the third."
                cadence: rolling
              tasks:
                - "Draft the digest format with four fixed sections"
                - "Agree the distribution list with the product lead"
                - "Write and send the month's competitive feature digest @recurring(monthly:28)"
                - "Ask three readers after the third issue what they would cut"
            - name: Quarterly matrix freshness and ownership audit
              description: |-
                ## Purpose
                Matrices decay unevenly: one competitor gets refreshed every month while another column has not been touched since a former colleague left. A quarterly audit of stale cells, unknowns, owners and the competitor set itself, including whether a new entrant should replace a fading rival, keeps the matrix trustworthy enough that sales and leadership keep using it.

                ## Milestones
                1. Every cell older than 90 days or marked unknown listed.
                2. An owner named for each competitor column.
                3. The competitor set reviewed, with any new entrant added and any fading rival moved to the watch list.
                4. A target set for the number of unknown cells next quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly audit record lists stale cells, column owners and competitor set changes, with unknown cells falling quarter on quarter."
                cadence: cyclic
              tasks:
                - "Pull a list of matrix cells older than 90 days or marked unknown @recurring(quarterly)"
                - "Confirm an owner for each competitor column"
                - "Decide whether any watch-list entrant should join the primary set"
                - "Set a target for unknown cells to close by next quarter"
            - name: Competitor plan gating watch
              description: |-
                ## Purpose
                Whether a capability exists matters less to many buyers than which plan includes it: a rival offering single sign-on only on its top tier competes very differently from one that includes it everywhere. Recording which plan each compared feature sits in, and checking quarterly for moves, adds the availability dimension that depth scores miss.

                ## Milestones
                1. Each primary competitor's plans listed with the compared capabilities available in each.
                2. A lowest-plan column added to the matrix for gated capabilities.
                3. Quarterly checks logged, with any capability that moved between plans.
                4. Gating moves passed to whoever owns your pricing and packaging decisions.

                ## Notes
                Record the gating, not judgements about price. Decisions about your own plans belong with the pricing owner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "The matrix shows the lowest plan offering each compared capability for every primary rival, checked within the last quarter."
                cadence: cyclic
              tasks:
                - "Capture each primary competitor's plan comparison page as dated evidence"
                - "Add the lowest plan offering each capability to the matrix"
                - "Check rival plan pages for capabilities that moved tiers @recurring(quarterly)"
                - "Send any gating change to your pricing owner with the evidence"
            - name: Hiring and preview signals of upcoming rival features
              description: |-
                ## Purpose
                Job listings for an offline sync engineer or a payments compliance lead, a developer preview programme, or a published patent application often hint at a competitor's next capability six to twelve months ahead. A monthly scan of these public signals, logged with the date and an honest confidence level, gives early warning without speculation hardening into fact.

                ## Milestones
                1. Careers pages and public developer forums of primary competitors bookmarked.
                2. A monthly signals log with source, date, inferred capability and confidence.
                3. Signals compared each quarter with what each rival actually shipped.
                4. Low-confidence signals kept out of the digest unless corroborated.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A monthly signals log with confidence levels exists, and a quarterly check records how many earlier signals were confirmed."
                cadence: rolling
              tasks:
                - "Bookmark the careers pages and developer forums of each primary rival"
                - "Scan rival job listings and developer previews and log inferred features @recurring(monthly:16)"
                - "Record a confidence level against every logged signal"
                - "Check last quarter's signals against what each rival actually shipped"
            - name: Running a structured product teardown
              description: |-
                ## Purpose
                A teardown is a disciplined walk through a rival product from sign-up to advanced use, recording every screen, decision and friction point, and it teaches more about a category in a day than a month of reading marketing pages. Learning a repeatable format, with a time box and a separate findings section, makes teardowns something anyone on the team can run.

                ## Milestones
                1. A teardown template with sections for sign-up, first use, core tasks, advanced features and findings.
                2. One full teardown of a primary competitor completed within a single time-boxed day.
                3. Findings written as observations with screenshots, kept apart from opinions.
                4. The teardown presented to the team in under twenty minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed teardown of one primary competitor, in the team template with screenshots, has been presented to the team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read two published product teardowns and note how they are structured"
                - "Draft a teardown template with five sections and a findings page"
                - "Block one full day to tear down a primary competitor"
                - "Present the teardown to the team in twenty minutes"
            - name: Task-based benchmarking of rival workflows
              description: |-
                ## Purpose
                Saying a competitor's reporting is easier is opinion; showing it takes 6 steps and 90 seconds there against 14 steps and four minutes in yours is evidence. Learning to benchmark the same customer task across products, counting steps, time, errors and screen changes, gives experience comparisons the same rigour as feature scoring.

                ## Milestones
                1. Three customer tasks defined with a clear start and finish state.
                2. Each task timed and step-counted three times in your product and two rivals.
                3. Results recorded in a comparison table using medians.
                4. The largest experience gap written up with recordings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A benchmark table of median steps and time for three tasks across your product and two rivals, with the largest gap written up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Define three customer tasks with exact start and finish states"
                - "Time and count steps for each task three times per product"
                - "Record the median for each product in a comparison table"
                - "Write up the largest gap with side-by-side recordings"
            - name: Heuristic review of competitor experiences
              description: |-
                ## Purpose
                Some of the most telling competitive differences are not features at all: error messages that explain the fix, undo that works everywhere, settings people can actually find. Practising a heuristic evaluation, using an established list of usability principles, on a rival and on your own product gives the team a shared language for experience quality that a feature matrix cannot capture.

                ## Milestones
                1. One recognised set of usability heuristics chosen and read by both reviewers.
                2. Two reviewers evaluating the same three flows in a rival and in your product.
                3. Issues logged with heuristic, severity and screenshot.
                4. A short comparison of where each product is consistently stronger.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two reviewers have logged heuristic issues with severity for three flows in both products and written a one-page comparison."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one published usability heuristic set and share it with a designer"
                - "Evaluate three flows in one rival and in your product with the designer"
                - "Log each issue with heuristic, severity and screenshot"
                - "Summarise where each product is consistently stronger"
            - name: Reading a rival's API and developer surface
              description: |-
                ## Purpose
                For products sold to technical buyers, the API reference, webhooks, rate limits and SDKs are features in their own right, and they are often more candid than the marketing site. Learning to read a competitor's developer documentation, noting resources, authentication, limits and versioning, reveals what their product can really do underneath the interface.

                ## Milestones
                1. The public API reference located for each primary competitor.
                2. Available resources, webhooks, rate limits and authentication methods recorded for each.
                3. A developer-surface section added to the matrix.
                4. One engineer has checked the comparison for accuracy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The matrix has a developer-surface section covering resources, webhooks, limits and authentication for every primary rival, checked by an engineer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the public API reference for each primary competitor"
                - "Record resources, webhooks, rate limits and authentication for each"
                - "Add a developer-surface section to the matrix"
                - "Ask an engineer to check the comparison for errors"
            - name: Verifying competitor marketing claims
              description: |-
                ## Purpose
                Rival websites promise real-time sync, unlimited projects and enterprise-grade security, and teams tend either to believe every claim or to dismiss them all. Learning to test claims against the product, the documentation and the small print, and to record each as confirmed, qualified or unverified, keeps the matrix from scoring a competitor on its ambitions.

                ## Milestones
                1. Ten headline claims collected from each primary competitor's website.
                2. Each claim checked against the product, documentation and plan terms.
                3. Claims marked confirmed, qualified with the condition, or unverified.
                4. Qualified and unverified claims noted in the matching matrix cells.

                ## Notes
                Do not publish statements about a rival's shortcomings without evidence and legal review. Comparative claims in marketing carry legal risk in many countries.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten claims per primary rival are each recorded as confirmed, qualified or unverified with a source, and reflected in the matrix."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect ten headline feature claims from each primary rival's website"
                - "Check each claim against their docs, plan limits and the product itself"
                - "Mark each claim confirmed, qualified or unverified with a source"
                - "Add the qualifications to the matching matrix cells"
            - name: Kano classification of compared features
              description: |-
                ## Purpose
                Gaps do not matter equally: a missing table-stakes feature disqualifies you, while a missing delighter barely registers. Learning to classify compared capabilities with the Kano model, using a short survey of real customers rather than team opinion, shows which gaps are must-haves, which add satisfaction as they deepen and which buyers would never miss.

                ## Milestones
                1. Fifteen to twenty compared capabilities chosen for classification.
                2. A paired functional and dysfunctional Kano question written for each.
                3. At least thirty responses gathered from customers or qualified prospects.
                4. Each capability classified as must-be, performance, attractive or indifferent, and the class shown in the matrix.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least thirty Kano survey responses have been analysed and every chosen capability carries a Kano class in the matrix."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose fifteen to twenty capabilities from the matrix to classify"
                - "Write the paired Kano questions for each capability"
                - "Send the survey to customers and qualified prospects"
                - "Classify each capability and add the class to the matrix"
            - name: Competitive usability sessions with your users
              description: |-
                ## Purpose
                Watching your own customers try a rival product is uncomfortable and remarkably clarifying, because it shows which differences they notice and which only the team cares about. Running five sessions where users attempt the same task in your product and a competitor, with consent and a neutral script, grounds the experience comparison in real behaviour.

                ## Milestones
                1. A neutral session script covering one task in both products, with the order alternated.
                2. Five participants recruited and their consent recorded.
                3. Sessions recorded, with task success, time and comments noted.
                4. Findings written up as the differences users noticed, with quotes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five recorded sessions comparing one task across both products, with a written summary of the differences participants noticed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a neutral script for one task attempted in both products"
                - "Recruit five customers and record their consent"
                - "Run and record the five sessions, alternating which product comes first"
                - "Write up the differences participants noticed, with quotes"
            - name: Gap triage to match, differentiate or ignore
              description: |-
                ## Purpose
                Every matrix produces more gaps than any team can close, and the default response, adding them all to the backlog, quietly turns your roadmap into a copy of someone else's. A triage session that sorts each significant gap into match, differentiate or deliberately ignore, with a reason and evidence for each, turns the analysis into input the roadmap owner can act on.

                ## Milestones
                1. Every gap of two or more depth levels listed with its evidence.
                2. Each gap assigned to match, differentiate or ignore, with one written reason.
                3. Ignored gaps recorded with the condition that would reopen them.
                4. The triage outcome handed to the roadmap owner as input, not a commitment.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A triage record assigns every significant gap to match, differentiate or ignore with reasons, and has been handed to the roadmap owner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every gap where a rival scores two or more levels above you"
                - "Run a triage session on each listed gap with the product trio"
                - "Record a reopen condition for each gap you decide to ignore"
                - "Re-run gap triage on the latest matrix after each audit @recurring(quarterly)"
            - name: Minimum parity bar for table-stakes features
              description: |-
                ## Purpose
                Some features have to exist simply to stay in the evaluation: exports, basic roles, a usable mobile view. Defining the minimum version of each table-stakes capability that clears a buyer's checklist, rather than matching the leader's richest implementation, stops parity work from swallowing the time meant for differentiation.

                ## Milestones
                1. Table-stakes capabilities identified from Kano results, lost deals and buyer checklists.
                2. A written minimum acceptable version for each, stating what is deliberately left out.
                3. Rough engineering estimates for reaching the parity bar on each gap.
                4. The parity list agreed with sales as the answer to checklist objections.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A parity list defines the minimum acceptable version of every table-stakes gap, with estimates, and is agreed with sales."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List capabilities that appear on most buyer checklists and tender forms"
                - "Write the minimum version that would pass each checklist item"
                - "Ask engineering for a rough estimate to reach each parity bar"
                - "Agree the parity list with the sales lead"
            - name: Differentiation thesis on where you aim to lead
              description: |-
                ## Purpose
                Trying to lead every row of the matrix usually means leading none of them. Choosing the two or three capabilities where you intend to be clearly best, backed by customer evidence and a reason rivals will find them hard to follow, gives the comparison a point of view and gives the team permission to stay merely adequate elsewhere.

                ## Milestones
                1. Candidate differentiators drawn from current advantages, rival review complaints and customer research.
                2. Each candidate tested against three questions: do customers value it, can you sustain it, will rivals struggle to copy it.
                3. Two or three differentiators chosen and written up as a one-page thesis.
                4. The thesis reviewed with leadership and scheduled for a yearly revisit.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page differentiation thesis naming two or three capabilities, each tested on value, sustainability and copy difficulty, reviewed by leadership."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List current advantages where you score a level above every rival"
                - "Test each candidate against value, sustainability and copy difficulty"
                - "Write the one-page differentiation thesis"
                - "Revisit the differentiation thesis against the latest matrix @recurring(yearly)"
            - name: Weighting the matrix by customer importance
              description: |-
                ## Purpose
                An unweighted matrix treats audit logs and the core editor as equally important, so the competitor with the most rows ticked looks strongest. Assigning weights to capabilities from Kano results, interview evidence and deal data, separately for each key segment, produces a weighted coverage score that matches how buyers in that segment actually decide.

                ## Milestones
                1. Importance weights assigned to every capability from evidence, with the source noted.
                2. Separate weight sets for up to three customer segments where priorities differ.
                3. A weighted coverage score calculated for each product and segment.
                4. The weights reviewed with sales and support for obvious misses.

                ## Notes
                Publish the weights alongside the scores. Hidden weights invite the suspicion that the result was tuned to flatter your product.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The matrix shows evidence-based weights and a weighted coverage score per product for each key segment, reviewed by sales and support."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Assign each capability a weight from one to five with its evidence source"
                - "Create separate weight sets for segments with different priorities"
                - "Calculate a weighted coverage score for each product and segment"
                - "Ask a sales lead and a support lead to challenge the weights"
            - name: Choosing a competitive intelligence tool
              description: |-
                ## Purpose
                Once a hand-kept matrix becomes a chore, teams start looking at dedicated tools that monitor rival websites, collect field intelligence from sales and publish comparison cards. Comparing two or three options against what your team actually does each week, and against a well-kept spreadsheet, avoids buying a platform nobody updates.

                ## Milestones
                1. Requirements written from the current weekly and monthly routines.
                2. Two or three tools trialled alongside the existing spreadsheet.
                3. Cost, setup effort and data ownership compared for each option.
                4. A recorded decision to buy, defer or keep the spreadsheet.

                ## Notes
                Start from the **Purchase decision** template. Teams of fewer than ten people are often better served by a shared spreadsheet and a feed reader.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to buy a named tool, defer or keep the spreadsheet, based on a comparison of at least two options against written requirements."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write requirements from the routines the team already runs"
                - "Shortlist two or three competitive intelligence tools"
                - "Trial each tool for two weeks next to the existing spreadsheet"
                - "Record the decision and the reasons in the purchase decision page"
            - name: Deciding when not to copy a rival feature
              description: |-
                ## Purpose
                When a well-funded competitor ships something eye-catching, the pressure to respond arrives within days, usually from sales or leadership. A written set of tests covering whether your customers asked for it, whether it fits your differentiation thesis and what it would displace lets the team decline with evidence rather than relitigating every launch.

                ## Milestones
                1. Four or five tests agreed for evaluating any request to copy a rival feature.
                2. Two recent copy requests worked through the tests as examples.
                3. A short response template for declining with reasons.
                4. The tests endorsed by the product lead and shared with sales.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of copy tests, endorsed by the product lead, has been applied to two real requests and shared with sales."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft four or five tests for any request to copy a rival feature"
                - "Work two recent copy requests through the tests"
                - "Write a short template for declining a request with reasons"
                - "Ask the product lead to endorse the tests before sharing them with sales"
            - name: Rebuilding the matrix around customer jobs
              description: |-
                ## Purpose
                Feature-by-feature matrices favour whoever has the most features, which is rarely the product customers prefer. Reorganising the comparison around the jobs customers hire these products for, and scoring how well each product gets each job done end to end, often reverses conclusions drawn from counting features.

                ## Milestones
                1. Five to eight customer jobs taken from your research and written as outcomes.
                2. Each existing capability mapped to the jobs it serves.
                3. Each product scored per job on end-to-end completion, not feature presence.
                4. A short note on where job scores disagree with feature counts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A job-based comparison scores every product on five to eight customer jobs, with a note on where it disagrees with the feature matrix."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write five to eight customer jobs as outcomes from existing research"
                - "Map each capability in the taxonomy to the jobs it serves"
                - "Score each product on how completely it gets each job done"
                - "Note where the job scores contradict the feature matrix"
            - name: Response protocol for a major competitor launch
              description: |-
                ## Purpose
                Big competitor launches tend to set off a week of anxious messages, hurried roadmap changes and salespeople improvising answers. Agreeing in advance who assesses the launch, how quickly, what customers are told meanwhile and what threshold justifies changing plans means the next launch gets a measured response within days instead of a scramble.

                ## Milestones
                1. A named assessor and a 72-hour target for a first written assessment.
                2. A short assessment template: what shipped, depth score, who it affects, recommended response.
                3. Agreed holding lines for sales and support while the assessment happens.
                4. A threshold defined for when a launch should reopen roadmap decisions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written launch response protocol names the assessor, the 72-hour target, holding lines and the roadmap threshold."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the person who assesses major competitor launches"
                - "Draft the one-page launch assessment template"
                - "Write holding lines with the sales and support leads"
                - "Agree the threshold for reopening roadmap decisions with the product lead"
            - name: Competitive analysis readout to leadership
              description: |-
                ## Purpose
                Leadership rarely reads a matrix, but they make the investment calls it should inform. A forty-five-minute readout that answers the decisions set out at the start, shows the weighted comparison, names the gaps being matched and ignored and asks for one clear decision turns months of evidence into a recorded outcome.

                ## Milestones
                1. A readout of no more than ten slides built around the original decision questions.
                2. Pre-reads sent two working days ahead.
                3. The readout held with the decision owners present.
                4. Decisions and follow-ups recorded and circulated within two days.

                ## Notes
                Start from the **Meeting notes** template for the decision record. Lead with the answer, then the evidence.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The leadership readout has been held and a written record of decisions and owners circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a forty-five-minute slot with the decision owners"
                - "Build a readout of ten slides or fewer around the decision questions"
                - "Send the pre-read two working days before the session"
                - "Circulate the recorded decisions and owners within two days"
            - name: Competitive review before annual planning
              description: |-
                ## Purpose
                Annual planning tends to happen on last year's view of the market, because nobody refreshed the comparison in time. Running a full review of the matrix, the competitor set and the differentiation thesis six weeks before planning starts gives the planning conversation current evidence on where rivals have moved and where you have fallen behind or pulled ahead.

                ## Milestones
                1. The planning start date confirmed and the review scheduled six weeks before it.
                2. Every primary column refreshed and every unknown cell either resolved or flagged.
                3. A year-on-year comparison showing which gaps opened and closed.
                4. A three-page planning input delivered to the planning owner.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A three-page competitive planning input with a year-on-year gap comparison reached the planning owner before planning began."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the annual planning start date with the planning owner"
                - "Refresh every primary competitor column and resolve unknown cells"
                - "Compare this year's gaps with last year's and note what changed"
                - "Book next year's pre-planning competitive review @recurring(yearly)"
            - name: Feature comparison pack for investor diligence
              description: |-
                ## Purpose
                Founders raising a round are almost always asked how they compare with named competitors, and a slide of green ticks against red crosses convinces nobody who has seen a hundred. A short, evidence-backed pack showing the weighted comparison, honest gaps and the differentiation thesis builds credibility in diligence and survives an investor calling your customers.

                ## Milestones
                1. A two-page comparison drawn from the current matrix, with sources available on request.
                2. Known gaps stated plainly, with the plan or the reason for ignoring each.
                3. The differentiation thesis summarised in three sentences.
                4. Every claim in the pack checked against dated evidence.

                ## Notes
                Avoid claims about competitors you cannot support with public evidence. An investor who finds one inflated claim will discount the rest.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page investor comparison pack exists in which every claim traces to dated evidence and known gaps are stated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the weighted comparison for your target segment from the matrix"
                - "Write each known gap with its plan or the reason for ignoring it"
                - "Ask the agent to check each claim in the pack against the evidence library"
                - "Have a co-founder or adviser challenge the pack before it goes out"
            - name: Side-by-side evaluation for a major prospect
              description: |-
                ## Purpose
                Large prospects sometimes run a formal bake-off, asking two or three vendors to complete the same scenarios under observation. Supporting the sales team with a scenario-by-scenario comparison against the rival in the room, built from the matrix and hands-on testing, lets them show strengths deliberately and prepare honest answers for the known gaps.

                ## Milestones
                1. The prospect's evaluation scenarios and scoring criteria obtained from the account team.
                2. Each scenario run in your product and in the competing product where access allows.
                3. A briefing for the account team with strengths, gaps and suggested answers per scenario.
                4. A debrief after the decision recorded and fed back into the matrix.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The account team received a scenario-by-scenario briefing before the evaluation, and a post-decision debrief updated the matrix."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Get the evaluation scenarios and scoring criteria from the account team"
                - "Run each scenario in your product and record the results"
                - "Write a briefing of strengths, gaps and suggested answers per scenario"
                - "Hold a debrief after the decision and update the matrix"
            - name: Competitor conference and trade show feature scan
              description: |-
                ## Purpose
                Annual user conferences and trade show stands are where rivals demonstrate the features they are proudest of and preview what is coming. Attending openly under your own name, with a list of capabilities to look for and questions to ask, gathers a year's worth of positioning signals in a day or two.

                ## Milestones
                1. The event chosen and attendance arranged under your real name and company.
                2. A watch list of capabilities and questions prepared from the matrix unknowns.
                3. Notes and public session recordings captured during the event.
                4. A one-page summary filed and matrix cells updated within a week.

                ## Notes
                Wear your own badge and answer honestly if asked who you work for. The research rules apply in person too.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page event summary is filed and the related matrix cells were updated within a week of attending."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose one competitor or industry event worth attending this year"
                - "Prepare a watch list of capabilities and questions from matrix unknowns"
                - "Capture notes and session links during the event"
                - "File a one-page summary and update the matrix within a week"
            - name: Monthly two-hour competitor scan for solo founders
              description: |-
                ## Purpose
                Founders running a product alone cannot keep a forty-row matrix current alongside selling, building and support. A fixed two-hour monthly slot covering three rivals' changelogs, one quick hands-on check and a note on anything that changes your plans keeps you informed without letting competitor anxiety eat the week.

                ## Milestones
                1. A recurring two-hour slot booked on the same day each month.
                2. A lightweight matrix of no more than fifteen capabilities and three rivals.
                3. A one-paragraph monthly note on what changed and whether it matters.
                4. Six months of notes kept in one place.

                ## Notes
                Set a firm stop at two hours. Founders who check rivals daily tend to build reactively.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scan notes exist, each covering three rivals and finished within the two-hour slot."
                cadence: rolling
              tasks:
                - "Trim the matrix to fifteen capabilities and three rivals"
                - "Book a recurring two-hour scan slot in your calendar"
                - "Run the two-hour scan of three rivals and write the monthly note @recurring(monthly:2)"
                - "Mute competitor alerts outside the monthly slot"
            - name: Mapping a crowded category before building
              description: |-
                ## Purpose
                Founders entering a category with ten established tools need to know before writing code where those tools are deep, where they are shallow and which customers they serve badly. A pre-build map of the field, combining quick teardowns with rival review complaints, shows whether there is a real opening or only a slightly different version of what already exists.

                ## Milestones
                1. Eight to ten products in the category listed with target customer and pricing model.
                2. A quick teardown of the three most popular, focused on core flows.
                3. Review complaints coded to find recurring unmet needs.
                4. A written go, narrow or rethink decision with the opening described in one paragraph.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A category map of at least eight products and a recorded go, narrow or rethink decision describing the opening."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List eight to ten products in the category with their target customer"
                - "Run quick teardowns of the three most popular products"
                - "Code a hundred rival reviews for recurring unmet needs"
                - "Write the go, narrow or rethink decision with the opening described"
            - name: Inheriting a stale competitor matrix
              description: |-
                ## Purpose
                A product manager joining a team often inherits a comparison spreadsheet last touched by a predecessor, full of confident ticks nobody can source. Spending the first month checking what can be trusted, retiring what cannot and re-establishing the routines gives a new owner credibility and avoids repeating outdated claims to sales.

                ## Milestones
                1. The inherited matrix copied and its last-edited dates noted.
                2. A sample of twenty cells checked against current evidence, with the error rate recorded.
                3. Unsourced cells marked unknown rather than kept.
                4. Weekly and monthly routines restarted with the new owner named.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within a month, a sampled error rate is recorded, unsourced cells are marked unknown and routines have restarted under the new owner."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Save a copy of the inherited matrix with its last-edited dates"
                - "Check twenty random cells against current evidence and record errors"
                - "Mark every unsourced cell as unknown"
                - "Ask the previous owner or sales which columns they trusted most"
            - name: Comparison for a move into a new segment
              description: |-
                ## Purpose
                Moving upmarket, downmarket or into a new vertical changes who you compete with and which capabilities decide deals, so the existing matrix can be confidently wrong. Building a segment-specific comparison, with the rivals and weights that segment's buyers use, shows how big the entry gap really is before sales starts promising.

                ## Milestones
                1. The rivals that win in the target segment identified from segment buyers and analysts.
                2. Segment-specific capabilities added to the taxonomy.
                3. A weighted comparison for the segment completed.
                4. An entry gap summary delivered to the team planning the move.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A weighted comparison for the target segment and an entry gap summary have been delivered to the team planning the move."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Interview three buyers in the target segment about alternatives they use"
                - "Add segment-specific capabilities to the taxonomy"
                - "Score the segment's leading rivals and your product with segment weights"
                - "Write the entry gap summary for the team planning the move"
            - name: When a large platform bundles your core feature
              description: |-
                ## Purpose
                Sooner or later a large suite adds a basic version of your main capability and includes it free for millions of existing users. Comparing their bundled version honestly against yours, by depth, job completion and the customers it is good enough for, tells you which segment you may lose and where your depth still wins.

                ## Milestones
                1. The bundled feature tested hands-on and scored on the depth scale.
                2. Customers segmented by whether the bundled version is good enough for them.
                3. Capabilities where you remain clearly deeper listed with evidence.
                4. A recommendation on where to focus, shared with leadership.

                ## Notes
                Resist matching the bundle on price instinctively. Decisions on price belong to the pricing owner; this project supplies the comparison.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the bundled feature with a segment-by-segment exposure view and a recommendation shared with leadership."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Test the bundled feature hands-on and score it on the depth scale"
                - "Sort customers by whether the bundled version would meet their needs"
                - "List the capabilities where you remain clearly deeper"
                - "Share a recommendation on where to focus with leadership"
            - name: Feature review after a rival is acquired or closes
              description: |-
                ## Purpose
                When a competitor is acquired, frozen or shut down, its customers start looking for somewhere to go, and they compare on the features they rely on today. Reviewing which of that rival's capabilities their users depend on, and where you fall short, shows what it would take to be the obvious place to move.

                ## Milestones
                1. The rival's most-used capabilities identified from its documentation, reviews and community forums.
                2. Each capability compared against yours, with gaps that would block a switch marked.
                3. Import or data migration needs for their customers listed.
                4. A short summary passed to the roadmap owner and the sales lead.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of the departing rival's key capabilities against yours, with switch-blocking gaps and migration needs, delivered to roadmap and sales."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the rival's community forums for the features users fear losing"
                - "Compare those capabilities against yours and mark switch-blocking gaps"
                - "List the data their customers would need to bring across"
                - "Send a short summary to the roadmap owner and the sales lead"
            - name: Switching cost and migration path analysis
              description: |-
                ## Purpose
                Buyers weigh not only whether your product is better but how painful leaving their current tool would be: exports, data mapping, retraining and lost history. Mapping the switching path from each primary rival, and from yours to theirs, shows where import tools or migration help would remove the main objection and where your own customers are exposed.

                ## Milestones
                1. Export options and formats documented for each primary rival and for your product.
                2. A data mapping from each rival's export to your import, with gaps marked.
                3. Retraining and history-loss costs described for a typical customer.
                4. The highest-value migration improvement identified for the roadmap owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A switching map for each primary rival in both directions, with data mapping gaps and one recommended migration improvement."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Export sample data from each rival trial and note formats"
                - "Map each export to your import format and mark gaps"
                - "Test how easily your own customers could export to each rival"
                - "Recommend the single migration improvement worth most to deals"
            - name: Performance and reliability benchmark against rivals
              description: |-
                ## Purpose
                Speed and reliability are features buyers feel every day, yet they rarely appear in a matrix. Measuring page load, search response and sync times under identical conditions, alongside each rival's public status page history, adds a dimension where small products often beat large ones and where large ones quietly beat you.

                ## Milestones
                1. Five timed actions defined and a fixed test environment described.
                2. Each action measured five times in your product and each primary rival.
                3. Ninety days of public status page incidents tallied for each product.
                4. Results logged quarterly to show the trend.

                ## Notes
                Start from the **Metrics log** template. Test from the same network, device and time of day, or the numbers mean little.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A metrics log holds at least two quarters of median timings for five actions and status page incident counts for every primary rival."
                cadence: cyclic
              tasks:
                - "Define five timed actions and a fixed device, network and time of day"
                - "Measure each action five times per product and record medians @recurring(quarterly)"
                - "Tally the last ninety days of status page incidents for each product"
                - "Add a performance row to the matrix with the latest medians"
            - name: Accessibility comparison with primary competitors
              description: |-
                ## Purpose
                Public sector and large enterprise buyers increasingly require accessibility conformance, and many products claim it without delivering. Checking keyboard navigation, screen reader behaviour, contrast and each vendor's published conformance report across your product and rivals shows whether accessibility is a gap, a parity item or a genuine advantage.

                ## Milestones
                1. Published accessibility conformance reports collected for each product where available.
                2. Three core flows tested with keyboard only and with a screen reader.
                3. Findings recorded against the relevant guideline criteria.
                4. An accessibility row added to the matrix with evidence.

                ## Notes
                Automated checkers catch only a portion of issues. Include manual keyboard and screen reader testing, ideally with an experienced tester.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three core flows have been tested manually in every primary product, and the matrix shows an evidence-backed accessibility row."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect each vendor's published accessibility conformance report"
                - "Test three core flows in every product using only the keyboard"
                - "Repeat the flows with a screen reader and note failures"
                - "Add an accessibility row to the matrix with the findings"
            - name: Competitor feature velocity analysis
              description: |-
                ## Purpose
                How fast a rival ships, and where, tells you more about their strategy than any single launch. Counting meaningful releases by capability group over the last eight quarters from changelog history shows where each competitor is investing, where they have stalled and whether your gap in an area is likely to widen or close.

                ## Milestones
                1. Two years of changelog history collected for each primary rival.
                2. Each meaningful release tagged to a capability group.
                3. A quarter-by-quarter chart of releases per group for each rival.
                4. A short note on each rival's apparent investment focus.

                ## Notes
                Count releases that change what a user can do. Bug fixes and copy tweaks inflate the numbers and hide the pattern.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An eight-quarter release chart by capability group exists for every primary rival, updated each quarter with a focus note."
                cadence: cyclic
              tasks:
                - "Collect two years of changelog entries for each primary rival"
                - "Tag each meaningful release to a capability group"
                - "Chart releases per group by quarter for each rival"
                - "Add the latest quarter's releases and update the focus notes @recurring(quarterly)"
            - name: Integration ecosystem breadth comparison
              description: |-
                ## Purpose
                For many buyers the deciding question is whether a product connects to the five tools they already use, so a rival's marketplace of three hundred integrations can outweigh a better core product. Comparing ecosystems by the integrations your customers actually need, how deep each one goes and who maintains it, puts that marketing number into perspective.

                ## Milestones
                1. The twenty tools your customers most often connect identified from usage data or sales.
                2. Each primary rival's support for those twenty tools recorded, with depth and maintainer.
                3. Native, partner-built and connector-platform integrations distinguished.
                4. An ecosystem row added to the matrix and refreshed each year.

                ## Notes
                This project compares ecosystems. Choosing which integrations to build belongs with whoever owns integration priorities.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The matrix shows each primary rival's coverage and depth for the twenty integrations your customers most need, refreshed within the last year."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the twenty tools your customers most often connect"
                - "Record each rival's support for those tools, with depth and maintainer"
                - "Separate native, partner-built and connector-platform integrations"
                - "Refresh the ecosystem comparison for every primary rival @recurring(yearly)"
---

# Competitor Feature Analysis

This area is for product teams and founders who need to know, honestly and with evidence, how their product compares with the alternatives buyers weigh it against, capability by capability and experience by experience. It starts with the foundations (choosing the competitor set, ground rules for ethical research, an honest inventory of your own product, a shared taxonomy and scoring scale, and the first matrix), then the routines that keep the comparison current, the skills of teardowns, benchmarking and claim checking, the decisions about which gaps to match, which to own and which to ignore, the dated readouts and evaluations, the situations founders and new product managers face, and finally the specialist comparisons an experienced competitive analyst runs.

What repeats is a weekly skim of rival release notes, monthly matrix refreshes, lost-deal tallies, documentation diffs, review mining, signal scans and a team digest, quarterly hands-on retests, gap triage, freshness audits and benchmarks, and a yearly look at the differentiation thesis and research rules. The Feedback themes, Purchase decision, Meeting notes and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
