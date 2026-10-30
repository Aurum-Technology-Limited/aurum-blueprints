---
id: product-management.release-notes-changelog
name: Release Notes & Changelog
description: "A public changelog people actually read, a style guide and entry template, a weekly publishing routine with accuracy checks, and the notices, digests and developer feeds that tell customers what changed and what to do."
category: business
version: 1.0.0
tags: [product-management, release-notes-changelog, team, founder, small-business, changelog, release-notes, product-communication]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - content-pipeline
    - metrics-log
    - feedback-themes
    - onboarding-plan
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Release Notes & Changelog
          description: "Writing clear release notes and a public changelog that tell customers what changed, why it matters and what they need to do."
          projects:
            - name: Audit of the last six months of release notes
              description: |-
                ## Purpose
                Most teams discover their release notes are scattered across a help centre page, a few emails, some in-app pop-ups and a Slack channel only staff can see. Pulling six months of them into one list shows what was announced, what shipped silently and where the same change was described three different ways. That list is the baseline every later decision in this area is measured against.

                ## Milestones
                1. Every place a release note was published in the last six months listed, with a link to each.
                2. Each shipped change from the issue tracker marked as announced, announced late or never announced.
                3. Three to five recurring problems named, such as vague wording, missing dates or no user benefit stated.
                4. A one-page summary of the findings shared with whoever owns the product.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated audit lists every release note channel used in the last six months and marks each shipped change as announced or not."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every channel where release notes have gone out since six months ago"
                - "Export the completed tickets or merged pull requests for the same period"
                - "Mark each shipped change as announced, announced late or never announced"
                - "Ask the agent to summarise the recurring wording problems in one page"
            - name: Release notes reader map by audience
              description: |-
                ## Purpose
                Release notes are read by end users scanning for something they asked for, admins checking whether anything will break, developers looking for API changes and your own support and sales staff preparing for questions. Writing one note for all of them usually satisfies none. A reader map names each audience, what they need from a note and where they look for it, so later choices about channels and detail have a reason behind them.

                ## Milestones
                1. Each reader group named, with an estimate of how many people are in it.
                2. For each group, the questions a note must answer and the channel they check.
                3. The groups ranked by the cost of them missing a change.
                4. The map saved where everyone who writes notes can find it.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written reader map covers at least four audiences, each with its questions, channel and the cost of missing a change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask support which release questions customers raised most last quarter"
                - "List the reader groups and the channel each one actually checks"
                - "Rank the groups by the damage done when they miss a change"
                - "Refresh the reader map against the current customer mix @recurring(yearly)"
            - name: Ownership and sign-off rules for release notes
              description: |-
                ## Purpose
                When nobody owns release notes, they are written at the last minute by whoever merged the code, or not at all. Agreeing who drafts, who checks the facts, who approves sensitive wording and who presses publish removes the Friday afternoon scramble. It also gives engineers a clear answer to the question of what they owe the note.

                ## Milestones
                1. A named owner for the changelog, with a named backup.
                2. Roles for drafting, fact checking, approval and publishing written in one table.
                3. A short list of change types that need extra sign-off, such as pricing, security or data handling.
                4. The rules shared with engineering, design, support and marketing leads, and their agreement recorded.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page ownership table names the changelog owner, backup and sign-off roles, and is agreed by four team leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the changelog owner and a backup for holidays and sick days"
                - "Write a table of who drafts, checks, approves and publishes"
                - "List the change types that need legal, security or finance sign-off"
                - "Confirm the owner and sign-off table still match the team @recurring(yearly)"
            - name: Deciding where the public changelog lives
              description: |-
                ## Purpose
                A changelog can sit on a page of your marketing site, inside the docs, in a hosted changelog tool or only inside the product, and each choice affects who finds it, how searchable it is and how much it costs to keep. Choosing deliberately, with your reader map in hand, avoids moving everything a year later and breaking every link customers have saved.

                ## Milestones
                1. Three options compared on discoverability, search, subscriptions, cost and effort to publish.
                2. A permanent URL chosen that will not change if the tool changes.
                3. A decision recorded with the reasons and the option rejected.
                4. A trial entry published at the chosen home and checked on a phone.

                ## Notes
                Start from the **Purchase decision** template. Whatever you pick, keep the address on your own domain so you can change tools later without losing links.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the changelog's home and permanent URL, with a trial entry live at that address."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the three places the changelog could realistically live"
                - "Score each option on search, subscriptions, cost and publishing effort"
                - "Choose a permanent URL on your own domain"
                - "Publish a trial entry and check it on a phone and a laptop"
            - name: Release notes style guide
              description: |-
                ## Purpose
                Without a style guide, every writer invents their own tense, their own feature names and their own idea of what counts as a fix. Two pages covering voice, tense, how to name features, how to describe benefit before mechanism, and words to avoid make notes from five different people read as one product. Doing it early means the first public entries already sound right.

                ## Milestones
                1. A voice and tense rule, with a before and after example.
                2. A naming list giving the customer-facing name for every feature that appears in notes.
                3. A rule that the first sentence says what the reader can now do or no longer suffers.
                4. A banned list covering internal codenames, ticket numbers and phrases such as minor improvements.
                5. The guide linked from the entry template.

                ## Notes
                Keep it short enough to read in five minutes. A long guide is ignored by the people who most need it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A style guide of no more than two pages, with at least three before and after examples, is linked from the entry template."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick three weak past entries to use as before examples"
                - "Write the voice, tense and benefit-first rules with examples"
                - "Build the list of customer-facing feature names"
                - "Review the style guide against the last quarter of entries @recurring(yearly)"
            - name: Change categories and labels for every entry
              description: |-
                ## Purpose
                Readers scan a changelog for the kind of change that affects them: admins look for anything breaking, security teams look for fixes, everyone else looks for new things. A short fixed set of labels such as New, Improved, Fixed, Security, Deprecated and Action required, used the same way every time, makes that scanning possible. The common open convention of grouping by Added, Changed, Deprecated, Removed, Fixed and Security is a sensible default.

                ## Milestones
                1. No more than seven labels chosen, each with a one-line definition.
                2. A rule for entries that fit two labels.
                3. Colours or icons for the labels that work in light and dark themes.
                4. The last month of entries relabelled as a test.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A label set of seven or fewer, each defined in one line, is applied to every entry published in the last month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a label list of no more than seven change types"
                - "Write a one-line definition and an example for each label"
                - "Decide which label wins when a change fits two"
                - "Relabel last month's entries to test the definitions"
            - name: Standard release note entry template
              description: |-
                ## Purpose
                Every good entry answers the same handful of questions: what changed, why it matters, who it affects, whether anyone must act and where it is available. A template with those fields stops writers forgetting the plan restriction or the rollout stage, and lets a reviewer check an entry in a minute. It also makes entries consistent enough to reuse in emails and in-app panels.

                ## Milestones
                1. Fields for headline, label, what changed, why it matters, who is affected, action required and availability.
                2. A filled example for a new feature, a fix and a breaking change.
                3. Guidance on length for each field.
                4. The template stored where drafts are written, not in a forgotten folder.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An entry template with seven named fields and three worked examples is stored in the drafting tool and used for the next five entries."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the fields every entry must carry"
                - "Write worked examples for a feature, a fix and a breaking change"
                - "Add a length guide beside each field"
                - "Save the template inside the tool where notes are drafted"
            - name: Release note flag on tickets at planning time
              description: |-
                ## Purpose
                Notes are hard to write after the fact because the person who knows why a change was made has moved on. Adding a release note field to tickets, filled in when the work is planned and checked when it is merged, means the raw material exists before release day. It also forces an early answer to whether a change is customer-visible at all.

                ## Milestones
                1. A release note needed flag and a draft line field added to the issue tracker.
                2. A rule for which ticket types must fill the field.
                3. The field checked in sprint planning or the equivalent weekly meeting.
                4. A filtered view listing merged work with a draft line but no published entry.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The issue tracker has a release note flag and draft field, and at least 80 percent of customer-visible tickets in a month carry a draft line."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a release note flag and draft line field to the tracker"
                - "Agree which ticket types must complete the field"
                - "Build a view of merged work with drafts but no published entry"
                - "Check the share of customer-visible tickets with a draft line after one month"
            - name: Version and date convention for changelog entries
              description: |-
                ## Purpose
                Customers need to know when a change reached them and, for installed software, which version they need. Products that ship versioned releases usually follow semantic versioning, while hosted products that deploy many times a day group entries by date or week. Picking one convention, and writing down how to show staged rollouts, stops readers wondering whether a feature is live for them yet.

                ## Milestones
                1. A choice between version numbers, dates or both, with the reason.
                2. A date format that reads the same in every country, such as 14 March 2026.
                3. A rule for how gradual rollouts and early access are shown.
                4. The convention added to the style guide.

                ## Notes
                Avoid numeric dates such as 03/04 that mean different days in different countries.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The style guide states one version or date convention, one date format and one rule for showing gradual rollouts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether entries are grouped by version, by date or both"
                - "Pick a date format that cannot be misread across countries"
                - "Write how staged rollouts and early access are labelled"
                - "Add the convention to the style guide"
            - name: Weekly changelog publishing routine
              description: |-
                ## Purpose
                A changelog that updates in bursts, then goes quiet for two months, tells customers the product has stalled even when it has not. A fixed weekly slot to collect what shipped, draft, check and publish keeps the page alive and makes the work small enough to fit around everything else. Thursday works well for many teams because it leaves Friday to answer questions.

                ## Milestones
                1. A weekly publishing slot in the owner's calendar.
                2. A checklist for the slot from collecting merged work to publishing.
                3. Four consecutive weeks published on time.
                4. A rule for quiet weeks, such as a short line saying fixes only.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Entries are published in the agreed weekly slot for eight consecutive weeks, with no gap longer than ten days."
                cadence: rolling
              tasks:
                - "Block a recurring weekly slot for changelog publishing"
                - "Write the step list from collecting merged work to publishing"
                - "Publish the week's checked changelog entries @recurring(weekly:thu)"
                - "Decide what to publish in a week with only small fixes"
            - name: Accuracy review before a note goes out
              description: |-
                ## Purpose
                One wrong release note, claiming a feature is on every plan when it is not, or that a bug is fixed when only half of it is, costs more support time than ten missing ones. A short check by the engineer who built it and someone from support, the day before publishing, catches the errors that matter. It should take ten minutes, not a meeting.

                ## Milestones
                1. A review checklist covering availability, plan, platforms, rollout stage and action required.
                2. A named engineering and support reviewer for each week.
                3. A record of corrections made at review, kept for a month.
                4. Review completed before every publish for six weeks.

                ## Notes
                Start from the **Operational checklist** template. Ask reviewers to confirm facts, not polish wording; style belongs to the owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every published entry for six weeks has a completed accuracy checklist signed by an engineer and a support reviewer."
                cadence: rolling
              tasks:
                - "Write a five-point accuracy checklist for reviewers"
                - "Agree the engineering and support reviewer rota"
                - "Run the accuracy check on the week's draft entries @recurring(weekly:wed)"
                - "Note each correction made at review in a simple log"
            - name: Monthly product update email to customers
              description: |-
                ## Purpose
                Plenty of customers will never visit a changelog page but will read a short monthly email that picks out the three changes most likely to matter to them. A digest with a clear subject line, a few highlights and a link to the full changelog reaches the people who only notice the product when something changes. It also gives account managers something to forward.

                ## Milestones
                1. A digest format with a headline change, two or three supporting items and a link to the full log.
                2. A subscriber list built from customers who agreed to product emails.
                3. Three monthly issues sent on the same day each month.
                4. Open and click rates recorded for each issue.

                ## Notes
                Only email people who agreed to product updates, and include an unsubscribe link. Your email tool and local privacy rules decide the details.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly product update emails have gone to opted-in customers, with open and click rates recorded."
                cadence: rolling
              tasks:
                - "Design a digest layout with one headline and three highlights"
                - "Check that the subscriber list holds only opted-in customers"
                - "Pick the month's highlights and send the update email @recurring(monthly:5)"
                - "Record the open and click rate for each issue"
            - name: Internal release briefing for support and sales
              description: |-
                ## Purpose
                Support hears about a change from the first confused customer, and sales demos the old screen to a prospect, when the internal team learns about releases from the public changelog. A short weekly briefing a day or two before publishing, with what changed, likely questions and known gaps, lets them answer with confidence. It is the cheapest way to cut avoidable tickets after a release.

                ## Milestones
                1. A briefing format with the change, likely customer questions, suggested answers and known limitations.
                2. A channel or email list that reaches every support and sales person.
                3. Briefings sent at least one working day before the public note for a month.
                4. Support asked whether the briefing reduced surprise tickets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, an internal briefing reaches support and sales at least one working day before the public changelog entry."
                cadence: rolling
              tasks:
                - "Draft the internal briefing format with questions and answers"
                - "Set up the channel that reaches every support and sales person"
                - "Send the internal briefing on the coming week's changes @recurring(weekly:tue)"
                - "Ask the support lead after a month whether surprise tickets dropped"
            - name: Public known issues page kept in step with fixes
              description: |-
                ## Purpose
                Users who hit a bug want to know whether you know about it and when it will be fixed, and a known issues page answers that before they write in. Linking each known issue to the changelog entry that fixes it closes the loop and shows the fix actually shipped. The page only helps if it is current, so it needs a weekly pass.

                ## Milestones
                1. A known issues page with symptom, affected users, workaround and status for each issue.
                2. A rule for which bugs are listed publicly and who decides.
                3. Every fixed issue linked to the changelog entry that resolved it.
                4. No issue older than four weeks without a status update.

                ## Notes
                Do not list security vulnerabilities here before they are fixed. Those follow your security disclosure process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A public known issues page lists symptom, workaround and status per issue, and every resolved issue links to its fix entry."
                cadence: rolling
              tasks:
                - "Set up the known issues page with symptom, workaround and status"
                - "Agree who decides which bugs are listed publicly"
                - "Update statuses and link fixed issues to their entries @recurring(weekly:mon)"
                - "Remove resolved issues once they have been fixed for a month"
            - name: Release notes pipeline from merge to publish
              description: |-
                ## Purpose
                Entries get lost between the engineer's draft line and the published page, especially in weeks with many small changes. A visible pipeline with stages for tagged, drafted, checked, scheduled and published shows at a glance what is stuck and who holds it. It turns the weekly routine from memory work into a board you clear.

                ## Milestones
                1. A board with five stages from tagged to published.
                2. Tickets flagged for a release note feeding the first stage automatically or by a weekly sweep.
                3. Each card showing its owner and target publish week.
                4. A month with no card stuck in one stage for more than two weeks.

                ## Notes
                Start from the **Content pipeline** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A five-stage release notes board is in use, and for one month no card sits in a single stage longer than two weeks."
                cadence: rolling
              tasks:
                - "Create a board with stages from tagged to published"
                - "Connect flagged tickets to the first stage or sweep them in weekly"
                - "Show the owner and target publish week on each card"
                - "Clear or reassign cards stuck for more than two weeks @recurring(monthly:15)"
            - name: Quarterly changelog archive tidy
              description: |-
                ## Purpose
                Old entries collect broken links, screenshots of screens that no longer exist and references to features since renamed. A quarterly tidy keeps the archive trustworthy, which matters because search engines and support agents send people to old entries long after they were written. It is also when you notice whether the archive has become too long to browse.

                ## Milestones
                1. A link check run across all entries with broken links fixed.
                2. Entries for renamed features given a short note with the new name.
                3. Year or quarter navigation added once the archive passes a few dozen entries.
                4. The date of the last tidy shown in the owner's notes.

                ## Notes
                Do not rewrite history. Add a clarifying line to an old entry rather than changing what it originally said.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly tidy leaves zero broken links in the changelog archive and adds rename notes to every affected entry."
                cadence: cyclic
              tasks:
                - "Run a link checker across the changelog archive"
                - "Add a rename note to entries that use an old feature name"
                - "Tidy links, screenshots and navigation in the archive @recurring(quarterly)"
                - "Add year navigation once the archive is hard to scroll"
            - name: Release notes reach and usefulness metrics
              description: |-
                ## Purpose
                Nobody knows whether the changelog is read unless someone looks. A few numbers tracked monthly, such as page views, subscribers, digest clicks, in-app panel opens and support tickets about changes that were announced, show which channels earn their effort. They also give you evidence when asking for time to do this properly.

                ## Milestones
                1. Five or fewer metrics chosen, each with its source.
                2. A baseline month recorded for each.
                3. Support tickets tagged when the answer was already in a release note.
                4. Three months of figures with one decision taken from them.

                ## Notes
                Start from the **Metrics log** template. Page views alone flatter; pair them with a measure of whether notes prevented questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log holds three months of five named changelog measures, with one channel decision recorded from them."
                cadence: rolling
              tasks:
                - "Choose up to five changelog metrics and note where each comes from"
                - "Ask support to tag tickets already answered by a release note"
                - "Record the month's changelog figures in the metrics log @recurring(monthly:20)"
                - "Write down one decision the figures support after three months"
            - name: Reader questions and confusion log
              description: |-
                ## Purpose
                The questions customers ask after reading a note are the best feedback on how it was written. Collecting them from support tickets, comments, reactions and sales calls, and grouping them by what confused people, shows which habits of your writing cause trouble. A monthly look turns that into one concrete style guide change.

                ## Milestones
                1. One place where reader questions about release notes are collected.
                2. Questions grouped into themes such as availability, wording or missing steps.
                3. One style guide or template change made from the themes each quarter.
                4. The entry that caused each theme noted for future examples.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A themed log of reader questions exists, and at least one style guide change has been made from it within a quarter."
                cadence: rolling
              tasks:
                - "Set up one place to collect questions about release notes"
                - "Ask support and sales to forward questions triggered by a note"
                - "Group the month's reader questions into themes @recurring(monthly:26)"
                - "Change one style guide rule based on the largest theme"
            - name: Benefit-led release note headlines practice
              description: |-
                ## Purpose
                Headlines carry most of a changelog's work, because most readers stop there. A headline that says Export reports to spreadsheets in one click beats Reporting improvements, and the skill comes from rewriting, not reading about it. Four weeks of deliberate practice on your own past entries makes the habit stick.

                ## Milestones
                1. Twenty past headlines collected and rated for clarity.
                2. Each rewritten to lead with what the reader can now do.
                3. Five rewrites tested on a colleague who did not build the feature.
                4. A personal checklist of headline rules added to the style guide.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty past headlines have been rewritten benefit first, with five tested on a colleague and the rules added to the style guide."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect twenty past headlines into one document"
                - "Rewrite each to lead with what the reader can now do"
                - "Ask the agent to suggest two alternatives for your five weakest rewrites"
                - "Test five rewrites on someone who did not build the features"
            - name: Plain language for technical changes
              description: |-
                ## Purpose
                Technical changes such as a new database, a faster search index or a rebuilt sync engine matter to customers only through what they notice: speed, reliability, fewer errors. Learning to translate internal work into those effects, without overstating them, lets you announce infrastructure work honestly. It also stops engineering wins from vanishing because nobody could describe them.

                ## Milestones
                1. Five recent technical changes listed with what a user would notice.
                2. Each described in two sentences a non-technical customer can follow.
                3. Any measured improvement stated with its real number and conditions.
                4. Two drafts checked by the engineer for accuracy and by a customer-facing colleague for clarity.

                ## Notes
                Only quote a speed or reliability number you have measured, and say under what conditions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five technical changes are described in plain two-sentence notes, each checked by an engineer and a customer-facing colleague."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick five recent technical changes customers never heard about"
                - "Write down what a user would notice for each one"
                - "Draft a two-sentence plain note for each change"
                - "Ask the engineer to confirm any numbers used"
            - name: Bug fix notes customers recognise
              description: |-
                ## Purpose
                People scan fix notes for the problem they hit, described the way they saw it, not the root cause your team found. Fixed race condition in sync queue means nothing to a user, while Edits made offline no longer disappear after reconnecting tells them their problem is solved. Practising symptom-first fix notes makes the fixed section worth reading.

                ## Milestones
                1. Ten past fix notes rewritten to describe the symptom the user saw.
                2. A rule for when to name affected platforms or versions.
                3. A rule for when to tell users they need to do something, such as refresh or reinstall.
                4. Fix notes in the next month checked against the symptom-first rule.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past fix notes are rewritten symptom first and the next month's fix entries all follow the rule."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pull ten past fix notes that describe causes rather than symptoms"
                - "Find the original customer report for each and copy its wording"
                - "Rewrite each note around the symptom the customer saw"
                - "Add a symptom-first rule with one example to the style guide"
            - name: Writing action-required and breaking change notices
              description: |-
                ## Purpose
                A breaking change notice that is vague about who is affected, what they must do or by when produces angry customers and emergency support work. Notices that state the affected setup, the exact action, the date and where to get help are a skill worth practising before you need one. This project builds the format and rehearses it on a real or past change.

                ## Milestones
                1. A notice format with who is affected, what changes, what to do, by when and where to get help.
                2. One past breaking change rewritten in the format.
                3. A rule for how far in advance different kinds of change are announced.
                4. The format reviewed by support and one customer-facing manager.

                ## Notes
                Retiring a whole feature has its own process; this project covers the wording of the notice itself.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A breaking change notice format exists with five required parts, is reviewed by support, and has been applied to one real change."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the last breaking change and the questions it caused"
                - "Draft a notice format with five required parts"
                - "Rewrite that past notice in the new format"
                - "Agree advance notice periods for each type of breaking change"
            - name: Screenshots and short clips that stay current
              description: |-
                ## Purpose
                Images make a release note easier to understand and much more likely to be read, but they age fast and become misleading after the next redesign. Learning a simple capture routine, with consistent sizing, annotation, alt text and a record of which images show which screen, keeps visuals helpful. Short silent clips of under fifteen seconds often explain a new flow better than any paragraph.

                ## Milestones
                1. A capture setup with consistent window size, sample data and annotation style.
                2. Alt text written for every image in the last month of entries.
                3. A short clip produced for one new flow.
                4. A list of which images show which screens, so they can be replaced after redesigns.

                ## Notes
                Use sample data in captures. Never show a real customer's name, email or records.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written capture routine is in use, every image in the last month of entries has alt text and one short clip has been published."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Set up a demo account with realistic sample data for captures"
                - "Write the capture sizes and annotation style in the style guide"
                - "Add alt text to every image in last month's entries"
                - "Record a clip under fifteen seconds for one new flow"
            - name: Studying ten changelogs people actually read
              description: |-
                ## Purpose
                The best public changelogs in software share habits worth copying: confident headlines, honest fix notes, clear labels and a steady rhythm. Reading ten of them, from tools your customers also use, gives you a pattern library and a sense of what your readers already expect. It is research for an afternoon or two, not a redesign.

                ## Milestones
                1. Ten public changelogs chosen, including at least three from tools your customers use.
                2. Each scored on headlines, structure, visuals, frequency and subscriptions.
                3. Five patterns worth adopting and two to avoid written down.
                4. One pattern trialled in your next entry.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of ten public changelogs lists five patterns to adopt and two to avoid, with one trialled in a published entry."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List ten public changelogs, three from tools your customers use"
                - "Score each on headlines, structure, visuals and rhythm"
                - "Write down five patterns to adopt and two to avoid"
                - "Try one adopted pattern in your next published entry"
            - name: Drafting notes from commits and tickets
              description: |-
                ## Purpose
                Commit messages and ticket titles are written for engineers, but they hold most of the facts a release note needs. Deciding how much drafting to automate, from structured commit conventions to scripts that list merged work to an AI first draft, can halve the weekly effort. The decision should keep a human writing the final words customers read.

                ## Milestones
                1. The current time spent per week on collecting and drafting measured.
                2. Two or three automation options compared on setup effort and draft quality.
                3. One option trialled for four weeks.
                4. A decision recorded on what stays automated and what a person always rewrites.

                ## Notes
                Generated drafts tend to repeat engineering language. Keep the style guide check as a human step.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A four-week trial of one drafting automation is complete, with weekly time before and after recorded and a keep or drop decision written."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Time how long collecting and drafting takes this week"
                - "List two or three ways to generate first drafts from merged work"
                - "Ask the agent to draft this week's entries from the merged ticket list"
                - "Compare draft quality and time saved after four weeks"
            - name: In-app what's new panel decision
              description: |-
                ## Purpose
                Many users only learn about changes inside the product, through a badge, a panel or a one-time pop-up. Each of those interrupts work, so the decision is less about whether to show changes in the app than which changes earn that interruption. A written rule, tested on one release, avoids both silent launches and a product full of pop-ups.

                ## Milestones
                1. Options compared: a passive panel with a badge, a one-time modal, or a contextual tip near the change.
                2. A rule for which change types earn an in-app mention.
                3. A limit on how often a user can be interrupted.
                4. One release shown in-app and its open rate recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule names which changes appear in-app and how often users can be interrupted, tested on one release with its open rate recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the in-app surfaces the product could use for changes"
                - "Write the rule for which changes earn an in-app mention"
                - "Set a cap on interruptions per user per month"
                - "Show one release in-app and record how many users opened it"
            - name: Labelling notes by plan, role and rollout stage
              description: |-
                ## Purpose
                Nothing frustrates a customer faster than reading about a feature and then not finding it, because it is on a higher plan, only for admins or still rolling out. Clear availability labels on every entry set expectations and save support from explaining the same gap repeatedly. They also make upgrade-worthy features visible without turning the changelog into an advert.

                ## Milestones
                1. Labels defined for plans, roles such as admin or member, platforms and rollout stage.
                2. Availability shown in a consistent position on every entry.
                3. Entries from the last two months updated with availability.
                4. Support confirms fewer questions of the I cannot find it kind.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every entry from the last two months shows plan, role, platform and rollout availability in the same position."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define availability labels for plan, role, platform and rollout"
                - "Decide where availability appears on every entry"
                - "Add availability to the last two months of entries"
                - "Ask support a month later whether cannot-find-it questions fell"
            - name: Changelog subscriptions by email, RSS and feed
              description: |-
                ## Purpose
                Some readers want every change, from admins watching for anything risky to integrators who poll a feed. Offering email subscriptions, an RSS or Atom feed and, for technical audiences, a feed in a structured format lets them follow changes without visiting. Each option needs a clear opt-in and an easy way out.

                ## Milestones
                1. Subscription options chosen from the reader map.
                2. An email subscription with double opt-in and an unsubscribe link.
                3. An RSS or Atom feed validated and linked from the changelog page.
                4. Subscriber counts recorded in the metrics log.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The changelog offers an opt-in email subscription and a validated feed, both linked from the page, with subscriber counts recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose which subscription options your readers need"
                - "Set up an email subscription with confirmation and unsubscribe"
                - "Publish an RSS or Atom feed and run it through a feed validator"
                - "Add subscriber counts to the metrics log"
            - name: Rewriting vague past entries
              description: |-
                ## Purpose
                Vague entries such as bug fixes and performance improvements fill many archives, and they are what new prospects see when they judge how active a product is. Rewriting the last three months of them using the style guide, with help from tickets and engineers, improves the archive and gives the team a set of good examples. It is a one-off clean-up, not a habit.

                ## Milestones
                1. Every vague entry from the last three months listed.
                2. The underlying tickets found for each.
                3. Each entry rewritten to the style guide, or merged into a clearer one.
                4. A line added to rewritten entries saying they were updated for clarity.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No entry from the last three months reads only as bug fixes or improvements, and each rewritten one carries an updated for clarity line."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the archive for entries with no specific change named"
                - "Match each vague entry to the tickets behind it"
                - "Ask the agent to draft clearer versions from the ticket details"
                - "Edit, check and republish each rewritten entry"
            - name: Linking every note to updated help articles
              description: |-
                ## Purpose
                If a note sends customers to a help article that still describes the old screen, it creates more confusion than it solves. Making an updated help link part of every entry for a visible change, and updating the article before publishing, keeps notes and docs telling the same story. The note says what changed; the article explains how to use it.

                ## Milestones
                1. A rule that every entry for a visible change links to a current help article.
                2. Help article updates added to the release notes pipeline before the publish stage.
                3. The last month of entries checked for stale or missing help links.
                4. A monthly spot check showing no stale links for two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For two consecutive months, every entry for a visible change links to a help article updated on or before the publish date."
                cadence: rolling
              tasks:
                - "Agree with the docs owner that articles update before notes publish"
                - "Add a help article step to the pipeline before publishing"
                - "Check the last month's entries for missing or stale help links"
                - "Spot check new entries for current help links @recurring(monthly:9)"
            - name: Corrections policy for published notes
              description: |-
                ## Purpose
                Mistakes in published notes are inevitable: a feature delayed after it was announced, a plan restriction missed, a fix that did not fully work. Quietly editing the entry erodes trust, while a visible correction builds it. Deciding in advance how corrections are marked, who approves them and when affected customers are told means the next mistake is handled calmly.

                ## Milestones
                1. A rule for small corrections, such as a typo, versus factual ones that change what a customer can do.
                2. A standard correction line with the date of the change.
                3. A rule for when affected customers are told directly.
                4. The policy added to the style guide and used on one real or past error.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written corrections policy separates minor and factual corrections, gives a standard correction line and has been applied once."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the last factual error in a published note and how it was handled"
                - "Write the rule separating minor from factual corrections"
                - "Draft a standard dated correction line"
                - "Decide when customers affected by an error get a direct message"
            - name: Accessibility check of the changelog page
              description: |-
                ## Purpose
                Changelog pages are often built quickly and fail basic accessibility checks: images without alt text, labels shown only by colour, headings out of order and embedded videos without captions. Checking against the common web accessibility guidelines and fixing the template once means every future entry inherits the fixes. Customers using screen readers rely on notes as much as anyone.

                ## Milestones
                1. The changelog page checked with an automated accessibility tool and by keyboard alone.
                2. Labels made readable without colour.
                3. Heading order and link text fixed in the entry template.
                4. Captions or transcripts added to every video in the last three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The changelog page passes an automated accessibility check with no serious issues and is fully usable by keyboard alone."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run an automated accessibility checker on the changelog page"
                - "Navigate the page using only the keyboard and note problems"
                - "Fix label colours, heading order and link text in the template"
                - "Add captions or transcripts to recent videos"
            - name: Public changelog launch with three months back-filled
              description: |-
                ## Purpose
                Going public with a changelog that has one entry looks thin, so launching with three months of back-filled entries shows a steady pace from the first visit. The launch also needs a link from the product, the help centre and the website footer, or nobody will find it. Treat it as a small dated event with an owner and a go-live day.

                ## Milestones
                1. Three months of entries written to the style guide and checked for accuracy.
                2. Links added from the product menu, help centre and website footer.
                3. A short announcement sent to customers and posted where they gather.
                4. First month's traffic and subscriber numbers recorded.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The public changelog is live with three months of entries, linked from product, help centre and footer, and announced to customers."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a go-live date and write it on the team calendar"
                - "Back-fill three months of entries from the audit list"
                - "Add changelog links to the product menu, help centre and footer"
                - "Send the launch announcement and record first-month numbers"
            - name: Major version release notes and upgrade guide
              description: |-
                ## Purpose
                Major releases, such as a version 2 or a rebuilt core feature, need more than an entry: a long-form summary, a step-by-step upgrade guide, a list of everything that behaves differently and a frequently asked questions section. Preparing these in parallel with the build, not after it, means customers can plan their upgrade rather than discover the changes. The package also anchors launch communication run by others.

                ## Milestones
                1. A full list of user-visible differences from the previous version, agreed with engineering.
                2. A long-form release summary with the headline changes first.
                3. An upgrade guide tested by someone outside the team on a real or test account.
                4. A questions and answers page drafted from support's predictions.
                5. All four published on release day.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "On release day, a long-form summary, a tested upgrade guide, a differences list and a questions page are all published."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Start a running list of every user-visible difference in the new version"
                - "Draft the upgrade guide while the build is still in progress"
                - "Ask someone outside the team to follow the guide on a test account"
                - "Collect predicted customer questions from support for the questions page"
            - name: Product year in review post
              description: |-
                ## Purpose
                Once a year, a round-up of the most important changes reminds existing customers how much the product has moved and gives prospects a compact proof of momentum. Twelve months of well-labelled entries make it a day's work rather than a scramble. It is also a natural moment to thank customers whose feedback shaped the year.

                ## Milestones
                1. The year's entries filtered to the ten to fifteen changes that mattered most.
                2. Changes grouped into three to five themes with a sentence on each.
                3. Customer requests that led to changes acknowledged, with permission where names are used.
                4. The post published and sent in the next customer digest.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A year in review post covering ten to fifteen changes in three to five themes is published and sent in the following digest."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Filter the year's entries to the changes that mattered most"
                - "Ask the agent to group the shortlist into three to five themes"
                - "Ask permission before naming any customer in the post"
                - "Publish the year in review and include it in the digest @recurring(yearly)"
            - name: Release note for a pricing or plan change
              description: |-
                ## Purpose
                Price and plan changes are the release notes customers read most closely and quote back most often. The note has to say exactly who is affected, from when, what happens to existing customers and where to ask questions, in words agreed with whoever owns pricing and billing. Getting this note wrong can create billing disputes, so it deserves its own preparation.

                ## Milestones
                1. The facts confirmed in writing by the pricing owner: who, what, when and any grandfathering.
                2. A draft note checked by finance and support.
                3. A separate direct message prepared for customers whose bill changes.
                4. Support answers ready before the note goes live.

                ## Notes
                The pricing decision itself belongs elsewhere. This project is about announcing it accurately. Check any contractual notice periods with whoever handles your contracts.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A pricing change note signed off by the pricing owner, finance and support is published alongside a direct message to affected customers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Get the confirmed pricing facts from the pricing owner in writing"
                - "Draft the public note with who, what, when and existing customer terms"
                - "Have finance and support check the draft"
                - "Prepare a direct message for customers whose bill changes"
            - name: Emergency hotfix note within the hour
              description: |-
                ## Purpose
                Hotfixes ship under pressure, often after customers have already noticed the problem and posted about it. A short pre-agreed format and a named on-call writer let you publish an honest note within an hour of the fix: what broke, who was affected, that it is fixed, and whether anyone needs to act. Rehearsing it once on a past incident means the real one is calm.

                ## Milestones
                1. A hotfix note format of no more than five sentences.
                2. An on-call writer and approver for out-of-hours fixes.
                3. A rule linking to the status page or incident report where one exists.
                4. A rehearsal using a past incident, timed from fix to published note.

                ## Notes
                Say what happened plainly and avoid blaming a supplier or a person in the note.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-sentence hotfix format and an on-call writer exist, and a rehearsal published a practice note within sixty minutes of the simulated fix."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a hotfix note format of no more than five sentences"
                - "Name the on-call writer and approver for out-of-hours fixes"
                - "Rehearse with a past incident and time it from fix to note"
                - "Agree how hotfix notes link to the status page"
            - name: Release notes for a redesign that moves things
              description: |-
                ## Purpose
                Redesigns break muscle memory: buttons move, menus are renamed and long-time users cannot find what they used daily. A release note that includes a where things moved map, before and after screenshots and a short list of what has not changed reduces the shock. Publishing a preview note before the redesign reaches everyone gives power users time to adjust.

                ## Milestones
                1. A list of every moved or renamed control, with old and new locations.
                2. Before and after images for the five most used screens.
                3. A preview note published before the redesign reaches all users.
                4. A follow-up note two weeks later answering the most common questions.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A preview note with a full moved-controls map and before and after images is published before rollout, followed by a questions note within two weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every moved or renamed control with old and new locations"
                - "Capture before and after images of the five most used screens"
                - "Publish a preview note before the redesign reaches everyone"
                - "Write a follow-up note answering the commonest questions"
            - name: Thirty-minute weekly changelog for a solo founder
              description: |-
                ## Purpose
                Solo founders rarely have time for a full publishing process, but a visible changelog is one of the cheapest trust signals a small product has. A thirty-minute Friday habit, with a running list kept during the week and two or three short entries at the end, is enough. It also gives you a record of progress to show investors, early customers and yourself.

                ## Milestones
                1. A running notes file where shipped changes are jotted the moment they ship.
                2. A Friday thirty-minute slot in the calendar.
                3. Eight weeks of entries published without missing more than one.
                4. The changelog link added to the product and to customer emails.

                ## Notes
                Two honest lines beat a polished essay that never ships. Skip the review steps that need a team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A solo founder publishes entries in a weekly thirty-minute slot for eight weeks, missing no more than one week."
                cadence: rolling
              tasks:
                - "Create a running notes file for changes as they ship"
                - "Block thirty minutes every Friday for the changelog"
                - "Turn the week's notes into two or three entries and publish @recurring(weekly:fri)"
                - "Add the changelog link to your product and email signature"
            - name: Customer update notes for a small business app or online shop
              description: |-
                ## Purpose
                Small businesses change their booking system, online shop, ordering app or customer portal without telling anyone, then wonder why regulars phone in confused. A short what's new note on the site, a line in the customer newsletter and a sign at the counter for in-person customers cover most of them. A monthly habit is usually enough for a small business.

                ## Milestones
                1. A list of the customer-facing systems that change, such as booking, checkout or loyalty.
                2. A simple what's new section on the website.
                3. A line about changes added to each customer newsletter.
                4. Staff briefed on changes before customers see them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The business website has a dated what's new section updated monthly for three months, with staff briefed before each change."
                cadence: rolling
              tasks:
                - "List the customer-facing systems that change during the year"
                - "Add a what's new section to the website"
                - "Brief staff on any change before customers meet it"
                - "Post the month's changes and add them to the newsletter @recurring(monthly:3)"
            - name: Sprint release summaries for agency clients
              description: |-
                ## Purpose
                Clients paying an agency or freelance team to build their product want to see what each sprint delivered in their own language, not a list of tickets. A client-facing release summary at the end of each sprint, with what shipped, what moved to the next sprint and what the client needs to test or approve, keeps the relationship clear and the invoice easy to justify. It also becomes the client's own changelog if they take the product in-house.

                ## Milestones
                1. A summary format with shipped, deferred and needs client action sections.
                2. The format agreed with the client contact.
                3. Summaries sent at the end of three consecutive sprints.
                4. An archive of summaries the client can read in one place.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three consecutive sprint summaries in an agreed format are sent to the client and stored in one shared archive."
                cadence: rolling
              tasks:
                - "Draft a sprint summary format with shipped, deferred and client actions"
                - "Agree the format and recipients with the client contact"
                - "Send the summary at the end of each sprint"
                - "Keep every summary in one archive the client can open"
            - name: What gets a note under continuous deployment
              description: |-
                ## Purpose
                Teams deploying many times a day cannot write a note per deploy, and should not, because most deploys change nothing a customer sees. A written threshold for what earns an entry, how small changes are batched into weekly summaries and how flag-controlled features are announced when they reach users rather than when code ships, keeps the changelog meaningful.

                ## Milestones
                1. A threshold rule for what earns its own entry.
                2. A batching rule for small fixes and tweaks.
                3. A rule that features behind flags are announced when users get them.
                4. The rules tested against one busy week of deploys.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written threshold, batching and flag announcement rules exist and have been applied to one week of deploys without dispute."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count how many deploys last week changed something users could see"
                - "Write the threshold for changes that earn their own entry"
                - "Write the batching rule for small fixes"
                - "Agree that flagged features are announced when users receive them"
            - name: Enterprise admin release notes with advance notice
              description: |-
                ## Purpose
                Enterprise customers have admins who must approve, test and explain changes to hundreds of staff, so they need notice before a change lands, not after. A separate admin-facing release calendar, with advance notes for anything that changes permissions, data, integrations or the interface, lets them prepare training and avoid surprises. Contracts sometimes require this notice, so check yours.

                ## Milestones
                1. Change types that need advance admin notice listed, with a notice period for each.
                2. An admin release calendar or preview page.
                3. A monthly email to named admin contacts summarising upcoming changes.
                4. Contractual notice requirements checked with the account team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Named admin contacts receive a monthly advance notice of upcoming changes, and no admin-impacting change ships without its agreed notice."
                cadence: rolling
              tasks:
                - "List change types that need advance notice to customer admins"
                - "Ask the account team which contracts specify notice periods"
                - "Set up an admin preview page or release calendar"
                - "Send the upcoming changes notice to admin contacts @recurring(monthly:22)"
            - name: Handing over release notes to a new owner
              description: |-
                ## Purpose
                Ownership of release notes often changes hands, from founder to first product manager, or from a product manager to a technical writer. Without a proper handover, the new owner inherits a style that lives in someone's head and a publishing process nobody wrote down. A short handover plan with documents, access and a few weeks of shared publishing keeps the changelog consistent.

                ## Milestones
                1. Access to every publishing tool, feed and email list transferred.
                2. The style guide, templates and ownership table walked through together.
                3. Two weeks of entries written by the new owner and reviewed by the old one.
                4. The ownership table updated with the new names.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The new owner has access to every publishing tool and has published two weeks of entries reviewed by the previous owner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every tool, feed and list the new owner needs access to"
                - "Walk through the style guide and templates together"
                - "Have the new owner draft two weeks of entries for review"
                - "Update the ownership table with the new names"
            - name: Developer changelog for an API or SDK
              description: |-
                ## Purpose
                Developers integrating with your API or SDK read changelogs differently: they need version numbers, exact endpoints or methods changed, deprecation dates and code examples, ideally in a format their tools can watch. A separate developer changelog, with breaking changes flagged and a structured feed, saves them reading marketing copy to find the one line that breaks their build.

                ## Milestones
                1. A developer changelog separate from, but linked to, the main one.
                2. Each entry naming the version, the affected endpoints or methods and whether it is breaking.
                3. Code examples for every change that alters a request or response.
                4. A structured feed developers can subscribe to.
                5. Breaking entries linked to migration instructions.

                ## Notes
                Versioning policy is a separate decision for the platform team; this project is about how changes are written and published.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A developer changelog lists version, affected endpoints and a breaking flag for every entry, with a subscribable structured feed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask three integrating developers what they look for in an API changelog"
                - "Set up the developer changelog with version and breaking flag fields"
                - "Add code examples to the last month's request or response changes"
                - "Publish a structured feed and link it from the API docs"
            - name: Security fix wording and advisories
              description: |-
                ## Purpose
                Security fixes need careful notes: enough for customers to understand their exposure and act, without handing attackers a recipe before everyone has updated. Agreeing with your security lead how fixes are described, when a separate advisory is published, how severity and identifiers such as CVE numbers are referenced and who signs off makes these notes safe to publish quickly. This is wording and process, not security engineering.

                ## Milestones
                1. A wording rule for security fixes in the normal changelog.
                2. A separate advisory format for serious issues, agreed with the security lead.
                3. A sign-off rule naming who approves security wording.
                4. A timing rule relating publication to when fixes reach all customers.

                ## Notes
                Never publish exploit details or the affected code path before the fix is available to everyone. Follow your security team's disclosure policy.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A security wording rule, an advisory format and a sign-off and timing rule are written and approved by the security lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book thirty minutes with the security lead on fix wording"
                - "Draft the wording rule for security fixes in the changelog"
                - "Draft an advisory format for serious issues"
                - "Write down who signs off and when advisories are published"
            - name: Translated release notes for key languages
              description: |-
                ## Purpose
                Customers in markets where English is not the first language often miss or misread changes, especially action-required notices. Translating release notes into the top two or three customer languages, with a glossary of feature names and a rule for which entries are translated, closes that gap without translating everything. Timing matters: a translated notice that arrives a week late defeats the point.

                ## Milestones
                1. Target languages chosen from customer data.
                2. A glossary of feature names and labels in each language.
                3. A rule for which entries are always translated, such as action-required and breaking notices.
                4. Translated entries published within an agreed number of days of the original.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Action-required and breaking entries are published in two or more target languages within the agreed delay for two months running."
                cadence: rolling
              tasks:
                - "Pick target languages from customer location and language settings"
                - "Build a glossary of feature names and labels for each language"
                - "Agree which entry types are always translated and how fast"
                - "Check translated entries were published on time @recurring(monthly:17)"
            - name: Change records for customers who audit your releases
              description: |-
                ## Purpose
                Regulated customers, and those working towards security certifications, sometimes need a formal record of what changed in a supplier's product, when and with what approval. A change record export drawn from the changelog, with dates, versions, categories and links to supporting notes, answers their requests without a scramble. Keeping it quarterly means it is ready when a due diligence questionnaire arrives.

                ## Milestones
                1. The fields audited customers typically ask for listed with the account team.
                2. A change record format with date, version, category, summary and approval reference.
                3. A quarterly export produced from the changelog.
                4. The export sent to one customer who requested it, with their feedback noted.

                ## Notes
                Check with whoever handles compliance before promising any record format in a contract.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A quarterly change record export with date, version, category, summary and approval reference exists and has been sent to one requesting customer."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Ask the account team which customers request change records"
                - "Design a change record format with five fields"
                - "Produce the quarterly change record export @recurring(quarterly)"
                - "Send the export to a requesting customer and note their feedback"
            - name: Single-source changelog feeding every channel
              description: |-
                ## Purpose
                Copying the same entry by hand into the changelog page, the digest, the in-app panel, the developer feed and the support briefing guarantees that versions drift apart. Storing entries once, in a structured format with labels, availability and audience fields, and generating each channel from that source keeps them consistent. It is an investment that pays off once you publish to three or more places.

                ## Milestones
                1. Every channel that publishes release notes listed with its format.
                2. A structured entry format that holds every field each channel needs.
                3. Two channels generated from the single source.
                4. All channels generated from it, with manual copying stopped.

                ## Notes
                Do this after the style guide and entry template are settled, or you will automate a format you are about to change.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every release notes channel is generated from one structured source, and no entry has been copied by hand for a month."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List every channel that publishes notes and the fields each needs"
                - "Design a structured entry format covering every channel"
                - "Generate the changelog page and digest from the single source"
                - "Move the remaining channels across and stop manual copying"
            - name: Changelog entries reused for marketing and sales
              description: |-
                ## Purpose
                Each good changelog entry is also a short story about the product getting better, which marketing can turn into a social post and sales can send to a prospect who asked for that exact thing. A light monthly handoff, with the entries most worth reusing marked, gets more value from writing already done. It keeps the changelog factual while letting others add the promotion.

                ## Milestones
                1. A reuse flag on entries worth promoting.
                2. A monthly handoff list sent to marketing and sales.
                3. A rule that promotional copy links back to the factual entry.
                4. Sales given a way to find entries by the request a prospect made.

                ## Notes
                Keep the changelog itself free of sales language. Readers trust it because it is plain.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Marketing and sales receive a monthly list of flagged entries for three months, and every promotional piece links to its entry."
                cadence: rolling
              tasks:
                - "Add a reuse flag to the entry template"
                - "Agree with marketing and sales what makes an entry worth reusing"
                - "Send the month's flagged entries to marketing and sales @recurring(monthly:12)"
                - "Tag entries by the customer request they answer so sales can search them"
---

# Release Notes & Changelog

This area is for product managers, founders and small business owners who ship changes and need customers to understand them: what is new, what was fixed, why it matters and whether anyone has to act. It starts with the foundations (an audit of what you publish today, a reader map, ownership, a home for the changelog, a style guide and an entry template), then the weekly and monthly routines that keep notes accurate and on time, the writing skills that make a note worth reading, the improvements and decisions on tooling, subscriptions and corrections, the dated releases that need more than a one-line entry, the situations solo founders, agencies and enterprise teams face, and finally the specialist work on developer changelogs, security fixes, translation and audit records.

What repeats is a weekly publish on Thursday with a Wednesday accuracy check, a Tuesday briefing for support and sales and a Monday pass over known issues, monthly customer digests, metrics and reader questions on different days, a quarterly archive tidy and a yearly round-up. The Purchase decision, Operational checklist, Content pipeline, Metrics log, Feedback themes and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
