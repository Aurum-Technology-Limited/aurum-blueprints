---
id: sales-revenue.sales-enablement-content
name: Sales Enablement Content
description: "One findable library of battle cards, one-pagers, objection guides and talk tracks, with owners and review dates, release-day updates and the usage data that shows which content helps reps win."
category: business
version: 1.0.0
tags: [sales-revenue, sales-enablement-content, team, manager, enterprise, battle-cards, talk-tracks, content-governance]
author: Aurum Technology
starter_structure:
  templates:
    - content-pipeline
    - metrics-log
    - feedback-themes
    - purchase-decision
    - operational-checklist
    - onboarding-30-60-90
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Enablement Content
          description: "Creating battle cards, one-pagers, objection guides and talk tracks that reps can find in seconds and that stay current as the product changes."
          projects:
            - name: Sales content inventory and audit
              description: |-
                ## Purpose
                Most sales teams already own two or three hundred pieces of content scattered across shared drives, chat threads and inboxes, and nobody knows which versions are current. Listing every asset with its owner, last update and location is the only honest starting point, and it usually shows that a fifth of the library is out of date and another fifth is duplicated. Do it before writing anything new, because new content poured into an unknown library just adds to the pile.

                ## Milestones
                1. Every sales-facing asset in shared drives, the CRM, chat channels and the intranet listed in one spreadsheet.
                2. Each asset recorded with type, owner, last updated date, location and audience.
                3. Duplicates, near-duplicates and assets untouched for twelve months flagged.
                4. A one-page summary of what exists, what is stale and what is missing shared with sales leadership.

                ## Notes
                Count rep-made versions too. The deck a top seller rebuilt for themselves is often the one buyers actually see.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory listing every sales asset with owner, last update and location, plus a stale and duplicate count, is shared with sales leadership."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every place reps currently store or share sales content"
                - "Export file lists from the shared drives and intranet into one spreadsheet"
                - "Add owner, last updated date and audience columns for each asset"
                - "Flag duplicates and anything untouched for over twelve months"
                - "Share a one-page audit summary with sales leadership"
            - name: Rep survey on missing and unused content
              description: |-
                ## Purpose
                Reps will tell you which assets they never open and which ones they rebuild from scratch every week, but only if someone asks in a way that takes five minutes. A short survey plus six fifteen-minute interviews across new and experienced sellers turns opinion into a ranked list of gaps. That list, not the enablement team's instinct, should decide what gets written first.

                ## Milestones
                1. A survey of no more than eight questions sent to every quota-carrying rep.
                2. Responses from at least half the team, with new hires and top performers both represented.
                3. Six follow-up interviews held covering at least two segments or regions.
                4. A ranked list of the ten most wanted missing assets and the ten least used existing ones.

                ## Notes
                Ask what reps send a buyer after a first call. The answer shows the real library faster than any audit.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of the ten most wanted missing assets, based on responses from at least half the sales team, is agreed with the sales leader."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft an eight-question survey on which assets reps use, avoid and rebuild"
                - "Send the survey with a five-day closing date"
                - "Book six fifteen-minute interviews with a mix of new and senior reps"
                - "Ask the agent to group the open answers into themes and count mentions"
                - "Rank the ten most wanted gaps and share them with the sales leader"
            - name: Choosing one home for all sales content
              description: |-
                ## Purpose
                When battle cards live in a wiki, decks in a shared drive and talk tracks in a chat channel, reps give up searching and ask a colleague instead. Deciding on one place where every current asset lives, and where everything else is treated as unofficial, is the single change that makes the rest of this area work. The choice can be an existing drive or intranet for now; a dedicated platform is a later decision.

                ## Milestones
                1. Requirements written: search, permissions, version history, CRM access and mobile use.
                2. Two or three options compared, including tools the company already pays for.
                3. One home chosen and announced by the sales leader as the only official source.
                4. Old locations marked as archived with a pointer to the new home.

                ## Notes
                Pick where reps already spend their day. A library inside the CRM or the tool they open first beats a better library they never visit.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One official home for sales content is chosen, announced by the sales leader, and every old location carries a pointer to it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the five must-have requirements for a sales content home"
                - "Check which tools the company already licenses that could serve"
                - "Compare two or three options against the requirements"
                - "Get the sales leader to announce the chosen home as the only official source"
                - "Add a pointer note to every retired folder and channel"
            - name: Content tags and naming convention
              description: |-
                ## Purpose
                Reps search with the words buyers use, such as the competitor's name, the industry or the objection, not with the file names marketing gave the asset. A small set of tags for asset type, sales stage, buyer role, product, industry and competitor, plus a naming rule, makes the library searchable in seconds. Agreeing it now saves retagging hundreds of files later.

                ## Milestones
                1. A tag list of six facets, each with no more than twelve values.
                2. A naming convention written with three worked examples.
                3. The fifty most used assets renamed and tagged to the new scheme.
                4. A one-paragraph guide for contributors pinned in the library.

                ## Notes
                Keep facets few and values short. A tag nobody uses in search is clutter.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six tag facets and a naming convention are documented, and the fifty most used assets are renamed and tagged to them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the words reps type when searching for content"
                - "Draft six tag facets with their allowed values"
                - "Write a naming convention with three worked examples"
                - "Rename and tag the fifty most used assets"
                - "Pin a short contributor guide at the top of the library"
            - name: Owners and review dates for every asset
              description: |-
                ## Purpose
                Content goes stale because nobody is responsible for it, not because nobody cares. Giving every asset a named owner and a review date, typically six months for battle cards and twelve for one-pagers, turns freshness from a hope into a schedule. It also gives reps a visible signal of whether an asset can be trusted.

                ## Milestones
                1. A rule agreed for review intervals by asset type.
                2. Every asset in the library assigned one named owner, not a team.
                3. Review dates set and shown on each asset or its library entry.
                4. Owners briefed on what a review involves and how long it should take.

                ## Notes
                When an owner leaves, their assets need a new owner the same week. Add it to the leaver checklist.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every asset in the library shows a named owner and a review date, and the review intervals by asset type are written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree review intervals for battle cards, one-pagers, decks and talk tracks"
                - "Assign a named owner to every asset in the inventory"
                - "Set a review date on each asset or its library entry"
                - "Brief owners on what a review covers in a fifteen-minute call"
                - "Add content reassignment to the company leaver checklist"
            - name: Content request intake and triage
              description: |-
                ## Purpose
                Without a front door, requests for new content arrive as hallway asks and urgent messages, and the loudest seller wins. A short request form asking for the revenue at stake, the buyer situation and the deadline lets you say yes, later or no with a reason. Within a quarter the request log also becomes the best evidence of what the field really needs.

                ## Milestones
                1. A request form with no more than six fields live in the content home.
                2. Triage rules written for urgent, planned and declined requests.
                3. Every request answered within three working days.
                4. A request log showing status, owner and outcome for each ask.

                ## Notes
                Start from the **Content pipeline** template. Ask for the deal or segment behind each request; a one-off ask for a single deal is often better solved by a talk track than a new asset.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every content request in the last quarter is in the log with a status and was answered within three working days."
                cadence: rolling
              tasks:
                - "Build a six-field content request form"
                - "Write triage rules for urgent, planned and declined requests"
                - "Announce the form in the sales channel and pin it"
                - "Triage new content requests and reply to each requester @recurring(weekly:mon)"
            - name: Sales stage and buyer role content map
              description: |-
                ## Purpose
                A library can hold two hundred assets and still have nothing for a finance director in late-stage evaluation. Mapping current assets against the stages of your sales process and the four or five roles that sit on a typical buying committee shows exactly where reps are improvising. The empty cells become the content roadmap.

                ## Milestones
                1. A grid of sales stages against buyer roles drawn up.
                2. Every current asset placed in the cells it serves.
                3. Empty and overcrowded cells highlighted.
                4. The three most costly gaps chosen, using deal volume and the rep survey results.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A stage by buyer role content map exists, with every current asset placed and three priority gaps agreed with sales leadership."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy the sales stage names from the CRM into a grid"
                - "Add the buyer roles that usually sit on a buying committee"
                - "Place each current asset in the cells it serves"
                - "Highlight empty cells and pick the three most costly gaps"
            - name: Message house and approved proof points
              description: |-
                ## Purpose
                Ask ten reps to describe the value proposition and you will hear ten versions, some with claims nobody can back up. A one-page message house, with the core promise, three supporting pillars and the approved statistics and customer results behind each, gives every asset the same spine. Writers, reps and reviewers all check against it.

                ## Milestones
                1. Core promise and three message pillars agreed with product marketing and the sales leader.
                2. Every statistic and customer result listed with its source and date.
                3. Claims that cannot be sourced removed from circulation.
                4. The message house published at the top of the content home.

                ## Notes
                If a number has no source document, it does not go in. Unsourced claims are the ones that resurface in a contract dispute.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page message house with sourced proof points is approved by product marketing and the sales leader and published in the content home."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the value statements used in the five most used assets"
                - "Draft the core promise and three supporting pillars"
                - "List every statistic and customer result with its source and date"
                - "Remove claims that have no source from live assets"
                - "Re-check every proof point against its source document @recurring(quarterly)"
            - name: Sales content style guide
              description: |-
                ## Purpose
                Sellers skim content in the thirty seconds before a call, so length, layout and wording matter more than in almost any other writing. A short style guide setting one-pager limits, battle card structure, plain-language rules and how to show approved logos and figures keeps every contributor producing assets that look and read alike. Consistency is also what makes a rep trust an asset they have not seen before.

                ## Milestones
                1. Length limits set for each asset type.
                2. Standard layouts for battle cards, one-pagers and talk tracks saved as templates.
                3. Plain-language rules written with before and after examples.
                4. The guide used to edit the next five new assets.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A style guide covering length, layout and language for each asset type is published and has been applied to five new assets."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set word or page limits for each asset type"
                - "Save standard layouts for battle cards, one-pagers and talk tracks"
                - "Write five plain-language rules with before and after examples"
                - "Edit the next five new assets against the guide"
            - name: Monthly content freshness sweep
              description: |-
                ## Purpose
                Once owners and review dates exist, someone still has to look at the calendar. A monthly sweep of everything due or overdue for review, with a reminder to each owner and a firm rule that overdue assets carry an out-of-date banner, keeps the library honest. Teams that skip this find within a year that reps have quietly gone back to their own folders.

                ## Milestones
                1. A saved view or report listing assets due in the next thirty days.
                2. Owners reminded each month with their specific list.
                3. Overdue assets bannered or hidden after a two-week grace period.
                4. Six consecutive months with fewer than five percent of assets overdue.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive months, fewer than five percent of library assets are past their review date."
                cadence: rolling
              tasks:
                - "Build a saved view of assets due for review in the next thirty days"
                - "Run the expiry report and send each owner their list @recurring(monthly:12)"
                - "Banner or hide assets more than two weeks overdue"
                - "Log the overdue percentage for the month"
            - name: Product release to field update routine
              description: |-
                ## Purpose
                A product change that reaches customers before it reaches the sales content leaves reps demoing removed features or missing a new answer to an old objection. A weekly look at the release calendar, a list of which assets each change touches and a five-day service level for updates closes that gap. Product managers usually welcome it, because it means one less round of questions from sellers.

                ## Milestones
                1. Access to the product release calendar or changelog arranged.
                2. A weekly check of upcoming releases in place.
                3. Each release mapped to the assets it affects.
                4. Affected assets updated within five working days of general availability.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over a quarter, every customer-facing release has its affected sales assets updated within five working days of general availability."
                cadence: rolling
              tasks:
                - "Ask product management for access to the release calendar"
                - "Read the upcoming release notes and list sales-facing changes @recurring(weekly:tue)"
                - "Match each change to the assets it affects"
                - "Update affected assets within five working days of release"
            - name: Content usage and engagement report
              description: |-
                ## Purpose
                Usage data answers the question nobody can settle by opinion: which assets get opened, sent to buyers and read by them. A monthly report of the twenty most and least used assets, with buyer view time where the tools provide it, tells you what to promote, fix or retire. Leaders want to see it too, because it is the clearest evidence that enablement work is being used.

                ## Milestones
                1. Usage sources identified: library views, downloads, shares and buyer views.
                2. A monthly report of the top and bottom twenty assets.
                3. Each low-use asset given a decision: promote, fix or retire.
                4. A quarterly summary shared with sales leadership.

                ## Notes
                Start from the **Metrics log** template. Low usage is not always bad content; often it is content reps cannot find.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly usage reports exist for at least six months, with a recorded decision for every bottom twenty asset."
                cadence: rolling
              tasks:
                - "List where usage data lives for each content tool"
                - "Pull usage figures for the top and bottom twenty assets @recurring(monthly:8)"
                - "Record promote, fix or retire for each low-use asset"
                - "Share a quarterly usage summary with sales leadership @recurring(quarterly)"
            - name: Weekly enablement digest
              description: |-
                ## Purpose
                Nobody browses a library for new things; reps need to be told, briefly, what changed and why it matters to a deal this week. A short weekly digest of new, updated and retired assets, each with one line on when to use it, is the cheapest way to get new content used. Keep it under two hundred words or it joins the unread pile.

                ## Milestones
                1. A digest format with three sections: new, updated and retired.
                2. A consistent send day and channel agreed with the sales leader.
                3. Each item carrying one line on when to use it.
                4. Open or click figures tracked for twelve weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly digests sent, each under two hundred words, with open or click figures recorded."
                cadence: rolling
              tasks:
                - "Agree the send day and channel for the digest with the sales leader"
                - "Write a three-section digest template with a two hundred word limit"
                - "Send the enablement digest with one line per item on when to use it @recurring(weekly:thu)"
                - "Record opens or clicks after each send"
            - name: Field feedback loop on assets
              description: |-
                ## Purpose
                Sellers notice an outdated price, a broken link or a battle card answer that falls flat on a live call long before any review date. A simple way to flag an asset from where it sits, and a monthly look at every flag and rating, catches problems while they are still small. Closing the loop with the rep who reported it is what keeps them reporting.

                ## Milestones
                1. A one-click flag or comment option on every asset.
                2. Every flag acknowledged within two working days.
                3. A monthly review of ratings, flags and comments grouped by theme.
                4. Each reporter told what changed as a result.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every asset flag raised in the last quarter was acknowledged within two working days and closed with a reply to the reporter."
                cadence: rolling
              tasks:
                - "Add a flag or comment option to every asset entry"
                - "Acknowledge each new flag within two working days"
                - "Group the month's ratings and flags into themes and act on the top three @recurring(monthly:22)"
                - "Tell each reporter what changed because of their flag"
            - name: Quarterly content roadmap with sales leadership
              description: |-
                ## Purpose
                Enablement teams drown when every request is urgent and none is ranked. A quarterly session with the sales leader, product marketing and two front-line managers, working from the gap map, request log and usage report, sets the ten things that will be built and names the things that will not. It turns content from a service desk into a plan.

                ## Milestones
                1. Inputs gathered: gap map, request log, usage report and the quarter's sales priorities.
                2. A ranked list of up to ten assets agreed for the quarter.
                3. An owner and target date set for each.
                4. The roadmap published so reps can see what is coming.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A quarterly content roadmap of no more than ten ranked assets, with owners and dates, is agreed with the sales leader and published."
                cadence: cyclic
              tasks:
                - "Gather the gap map, request log and usage report into one pack"
                - "Hold the content roadmap review with sales leadership @recurring(quarterly)"
                - "Set an owner and target date for each roadmap item"
                - "Publish the roadmap in the content home"
            - name: Findability test with real reps
              description: |-
                ## Purpose
                Search that works for the person who built the library often fails for a rep with a buyer on hold. Asking three reps to find five specific assets while you watch, and timing them, exposes bad tags, confusing names and buried folders in under an hour. Repeating it each quarter shows whether the library is getting easier to use.

                ## Milestones
                1. Five realistic find tasks written, such as the battle card for a named competitor.
                2. Three reps timed on each task every quarter.
                3. Every failed or slow search traced to a cause.
                4. Average find time below thirty seconds.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three reps can find each of five test assets in under thirty seconds on average, measured in the most recent quarterly test."
                cadence: cyclic
              tasks:
                - "Write five realistic find tasks based on recent deals"
                - "Run a findability test with three reps and time each search @recurring(quarterly)"
                - "Trace each slow search to a tag, name or folder problem"
                - "Fix the causes before the next test"
            - name: Competitor intelligence for battle cards
              description: |-
                ## Purpose
                Battle cards go stale fastest because competitors change pricing, packaging and claims without telling you. A monthly habit of collecting competitor mentions from call notes, lost deals and public announcements keeps the cards grounded in what buyers are hearing now. Rep anecdotes need checking, but they are usually the first sign that a competitor has changed its pitch.

                ## Milestones
                1. Sources listed: call recordings, lost deal notes, competitor websites and review sites.
                2. A shared place where reps can drop competitor sightings.
                3. A monthly round-up of changes for each main competitor.
                4. Battle cards updated within two weeks of a confirmed change.

                ## Notes
                Use only public or properly obtained information. Never ask reps or new hires to share a competitor's confidential material.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each main competitor's battle card shows an update within the last ninety days, based on a logged monthly round-up."
                cadence: rolling
              tasks:
                - "List the three to five competitors that appear most in won and lost deals"
                - "Set up a channel or form where reps log competitor sightings"
                - "Collect competitor mentions from call notes and lost deals @recurring(monthly:16)"
                - "Update the affected battle card within two weeks of a confirmed change"
            - name: Annual library cull and re-audit
              description: |-
                ## Purpose
                Even with monthly sweeps, libraries swell: campaign leftovers, one-off deal assets and three versions of the same case study. Once a year, re-running the inventory and archiving anything unused for six months keeps the library small enough to trust. A library of a hundred live assets beats one of four hundred.

                ## Milestones
                1. The inventory re-run against the current library.
                2. Every asset unused for six months reviewed with its owner.
                3. Archived assets moved out of search but kept for reference.
                4. The total live asset count compared with last year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The yearly cull is complete, with every asset unused for six months archived or justified and the live count recorded against last year."
                cadence: cyclic
              tasks:
                - "Schedule the annual library cull with all content owners @recurring(yearly)"
                - "Export usage for every asset over the last six months"
                - "Archive unused assets out of search with a reason noted"
                - "Record the live asset count against last year"
            - name: Writing battle cards reps use on live calls
              description: |-
                ## Purpose
                Most battle cards fail because they read like a feature comparison, while a rep mid-call needs three sharp questions, the traps to set and the answer to the competitor's favourite attack. Learning the structure that works, and rewriting one card against it, changes how every later card is written. Test each draft by handing it to a rep five minutes before a real call.

                ## Milestones
                1. Three strong battle card examples studied and their structure noted.
                2. A one-screen card format agreed: why we win, why we lose, trap questions and quick responses.
                3. One existing card rewritten to fit on a single screen.
                4. The rewritten card used on at least three live calls, with rep feedback recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One battle card is rewritten to the single-screen format and tested on three live calls, with rep feedback recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect three battle cards that reps rate highly, inside or outside the company"
                - "Note the sections and length each one uses"
                - "Rewrite one existing card to fit on a single screen"
                - "Ask a rep to use it on three live calls and report back"
            - name: One-pagers that survive being forwarded
              description: |-
                ## Purpose
                Whoever reads a one-pager is usually someone the rep has never met, such as the finance lead or a senior sponsor, with nobody there to explain it. Writing for that reader means leading with the business problem and the result, keeping product detail light and ending with a clear next step. Practise on the asset reps forward most often.

                ## Milestones
                1. The most forwarded one-pager identified from usage data or rep feedback.
                2. A reader profile written for whoever receives it second-hand.
                3. The page rewritten to open with the problem and a measurable result.
                4. The new version given a cold read by someone outside sales.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The most forwarded one-pager is rewritten for a second-hand reader and passes a cold read by someone outside sales."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the one-pager reps forward to buyers most often"
                - "Write a three-line profile of the person who reads it second-hand"
                - "Rewrite the opening to lead with the business problem and result"
                - "Ask a colleague outside sales for a cold read and note where they stumble"
            - name: Talk tracks that sound spoken, not written
              description: |-
                ## Purpose
                Talk tracks written like brochures get read aloud like brochures, and buyers switch off. Learning to write in short spoken sentences, with pauses, questions and room for the rep's own words, produces tracks reps actually adopt. The test is simple: read it aloud to a colleague and see whether they believe you.

                ## Milestones
                1. Two recorded calls where a rep explains the product well transcribed.
                2. A talk track format agreed: opener, three key points, a question and a bridge to the next step.
                3. Three talk tracks rewritten from the transcripts in spoken language.
                4. Each track read aloud by a rep and trimmed until it runs under ninety seconds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three talk tracks are rewritten in spoken language, each running under ninety seconds when read aloud by a rep."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick two recorded calls where a rep explains the product clearly"
                - "Transcribe the best two minutes of each call"
                - "Rewrite three talk tracks in short spoken sentences"
                - "Have a rep read each aloud and cut anything they stumble on"
            - name: Objection guide built for quick reference
              description: |-
                ## Purpose
                The team's objection handling practice produces good answers, but if they live in a long document nobody can find the right one with a buyer waiting. Turning tested responses into a quick-reference guide, organised by the buyer's own words and searchable by keyword, makes them usable in the moment. Each entry needs the response, a supporting proof point and a question to ask back.

                ## Milestones
                1. The team's tested objection responses gathered from wherever they are kept.
                2. Each entry formatted with the buyer's wording, the response, one proof point and a follow-up question.
                3. Entries tagged by category: price, timing, competitor, risk and fit.
                4. The guide linked from the battle cards and the CRM deal record.

                ## Notes
                This project packages the answers. Deciding which answer is best belongs with whoever runs objection handling practice for the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tagged objection guide with a response, proof point and follow-up question for each entry is live and linked from every battle card."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the team's tested objection responses into one document"
                - "Rewrite each entry under the buyer's own wording"
                - "Add one proof point and a follow-up question to every entry"
                - "Tag entries by price, timing, competitor, risk and fit"
                - "Link the guide from each battle card and the CRM deal page"
            - name: Customer story library for reps
              description: |-
                ## Purpose
                Buyers want to hear from a company like theirs, in their industry and size, with a result they can quote internally. A library of short customer stories, each with the situation, what changed and a number, lets a rep find the right reference in seconds instead of asking around. Most stories can be written from the account team's notes and a twenty-minute customer interview.

                ## Milestones
                1. A story format of under three hundred words with a measurable result.
                2. Customer approval for named use recorded for each story.
                3. Stories tagged by industry, company size, use case and region.
                4. At least twelve stories live, covering the top three segments.

                ## Notes
                Keep a record of what each customer approved: named, anonymised or logo only. Using a name without consent damages the very relationship you are showcasing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least twelve approved customer stories, tagged by industry, size and use case, are live in the content home."
                cadence: rolling
              tasks:
                - "Write a three hundred word story format with a result field"
                - "Ask account managers for one new customer story candidate @recurring(monthly:26)"
                - "Record what each customer approved: named, anonymised or logo only"
                - "Tag every story by industry, size, use case and region"
            - name: Interviewing experts for content
              description: |-
                ## Purpose
                The best material for sales content sits in the heads of product managers, engineers, support leads and customer success managers who have no time to write it. Learning to run a thirty-minute interview with prepared questions, record it and turn the transcript into a draft gets accurate content without waiting weeks for someone else's document. It also makes experts far more willing to review.

                ## Milestones
                1. A standard set of ten interview questions for product, technical and customer topics.
                2. Three expert interviews recorded with permission.
                3. Each transcript turned into a draft asset within a week.
                4. Expert review turned around in under three days on at least two drafts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three expert interviews are completed and turned into draft assets, with at least two reviewed by the expert within three days."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write ten interview questions for product and technical experts"
                - "Book three thirty-minute interviews with experts on roadmap topics"
                - "Ask the agent to turn each transcript into a first draft"
                - "Send each draft back to the expert with a three-day review request"
            - name: Plain language and scannability editing
              description: |-
                ## Purpose
                Plain language matters more in sales content than almost anywhere, because reps scan rather than read and buyers forward pages to colleagues whose first language may not be yours. Practising short sentences, active verbs, headings that carry the message and no internal jargon makes every asset faster to use. Editing ten existing assets is the quickest way to build the habit.

                ## Milestones
                1. A jargon list of internal terms with plain alternatives.
                2. Ten existing assets edited for sentence length and headings.
                3. Word count and average sentence length compared before and after.
                4. The jargon list added to the style guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten assets are edited with word count and sentence length recorded before and after, and a jargon list is added to the style guide."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List twenty internal terms that buyers would not understand"
                - "Edit ten existing assets for short sentences and message-carrying headings"
                - "Record word count and sentence length before and after"
                - "Add the jargon list to the style guide"
            - name: Short enablement videos reps will watch
              description: |-
                ## Purpose
                Two-minute screen recordings explaining a new feature or a competitor move often get more use than a ten-page document. Learning to script, record and caption short videos with ordinary tools means updates reach reps the same week. Keep each video to one idea and under three minutes.

                ## Milestones
                1. A simple recording set-up tested: screen, microphone and captions.
                2. A one-idea script format agreed.
                3. Five videos under three minutes published in the content home.
                4. View counts and completion rates checked for each.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Five captioned videos under three minutes are published in the content home with view and completion figures recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Test a screen and microphone recording set-up on a one-minute clip"
                - "Write a one-idea script for the next product update"
                - "Record, caption and publish five short videos"
                - "Check view and completion figures for each video"
            - name: Mining what top reps actually send
              description: |-
                ## Purpose
                Top sellers have usually built their own versions of the official content, and theirs often work better. Reviewing what the top five reps send buyers, from follow-up emails to their own slides and the phrasing they use on calls, finds language and assets worth making official. It also shows them their work is valued, which makes them better reviewers later.

                ## Milestones
                1. The top five reps by win rate or attainment agreed with the sales leader.
                2. A sample of their sent content and call snippets collected with their permission.
                3. Phrases, structures and assets that differ from the official versions noted.
                4. At least three findings folded into official content and credited to the rep.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three phrases or assets from top reps are made official and credited, based on a reviewed sample of their sent content."
                cadence: cyclic
              tasks:
                - "Agree the top five reps to study with the sales leader"
                - "Ask each for three emails or slides they send that work"
                - "Note where their wording beats the official versions"
                - "Fold the best findings into official content and credit the rep"
                - "Repeat the sample with a fresh group of top performers @recurring(quarterly)"
            - name: Choosing a sales enablement platform
              description: |-
                ## Purpose
                Once the library passes a couple of hundred assets or serves several teams, a shared drive starts to strain: search is poor, analytics are missing and nothing appears inside the CRM. Comparing two or three dedicated platforms against written needs, with a trial on real content, avoids buying features nobody uses. The decision should include the cost of migration and admin time, not just the licence.

                ## Milestones
                1. Needs ranked: CRM integration, search, analytics, buyer-facing sharing and permissions.
                2. Three platforms shortlisted and demonstrated with your own content.
                3. A two-week trial run with five reps.
                4. A recommendation with a three-year cost including migration and admin time.

                ## Notes
                Start from the **Purchase decision** template. Check what your CRM vendor already includes before buying a separate tool.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform recommendation with ranked needs, trial scores from five reps and a three-year cost is approved or declined by the budget holder."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Rank the five needs a platform must meet"
                - "Check what content features your CRM already includes"
                - "Shortlist three platforms and book demos using your own assets"
                - "Run a two-week trial with five reps and collect their scores"
                - "Present the recommendation with three-year cost to the budget holder"
            - name: Content surfaced inside the CRM deal record
              description: |-
                ## Purpose
                Content that appears on the opportunity itself, matched to its stage, industry and competitor, gets used far more than content in a separate library, because reps live in the CRM. Setting up recommended assets by stage, or at least a links panel, removes the search step entirely. Start with the three stages where deals most often stall.

                ## Milestones
                1. The three stages with the longest dwell time identified.
                2. Two or three recommended assets chosen for each of those stages.
                3. Assets appearing on the deal record by stage, through native features or a links panel.
                4. Rep usage of the recommended assets compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Recommended assets appear on the deal record for the three slowest stages, with their usage measured before and after."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the three stages where deals sit longest in the CRM"
                - "Pick two or three assets that help a deal past each stage"
                - "Ask the CRM admin to show those assets on the deal record by stage"
                - "Compare usage of the recommended assets a month before and after"
            - name: Follow-up email template library
              description: |-
                ## Purpose
                After a discovery call, demo or executive meeting, reps write the same recap and next-step emails from scratch, and quality varies wildly. A small library of eight follow-up templates, each with placeholders for the buyer's own words, cuts writing time and raises the floor. Keep cold outreach out of it; that belongs with prospecting.

                ## Milestones
                1. The eight most common follow-up moments listed, from meeting recap to executive introduction.
                2. A template written for each, with clear placeholders for personalisation.
                3. Templates loaded into the email tool or CRM.
                4. Reply rates for templated emails tracked for a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight follow-up templates are loaded in the email tool or CRM and their reply rates are recorded for a month."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the eight follow-up moments reps write most often"
                - "Draft a template with personalisation placeholders for each"
                - "Load the templates into the email tool or CRM"
                - "Track reply rates on templated follow-ups for a month"
            - name: Value and ROI calculator for reps
              description: |-
                ## Purpose
                Business cases stall when a rep cannot show the buyer, in the buyer's own numbers, what the problem costs and what changes. A simple spreadsheet calculator, with three to five inputs the buyer can supply and assumptions sourced from real customer results, gives reps a credible tool for late-stage conversations. Finance teams trust it more when every assumption is visible.

                ## Milestones
                1. Three to five value drivers agreed with product marketing and finance.
                2. Each default assumption sourced from customer data or published research.
                3. A spreadsheet calculator with buyer inputs and a printable summary.
                4. The calculator tested on three live deals and corrected.

                ## Notes
                Show ranges, not single figures, and let the buyer change every assumption. A calculator that only ever produces a big number gets ignored.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A calculator with sourced assumptions and a printable summary has been used on three live deals and revised from their feedback."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree three to five value drivers with product marketing and finance"
                - "Source each default assumption from customer data or published research"
                - "Build the calculator with buyer inputs and a one-page summary"
                - "Test it on three live deals and fix what buyers question"
            - name: Rogue content amnesty
              description: |-
                ## Purpose
                Every sales team has decks, PDFs and price sheets reps built themselves, and some are still in front of buyers with old prices or retired features. A two-week amnesty where reps hand in their homemade content, with no blame, finds the risky versions and the good ideas at the same time. The useful parts get folded into official assets and the rest are retired.

                ## Milestones
                1. Amnesty announced by the sales leader with a clear two-week window.
                2. Rep-made assets collected in one folder.
                3. Each one marked as merge, replace with the official version or retire.
                4. Every contributor told what happened to their submission.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every rep-made asset handed in during the amnesty has a recorded decision, and each contributor has been told the outcome."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the sales leader to announce a two-week content amnesty"
                - "Collect rep-made assets into a single folder"
                - "Mark each one merge, replace or retire"
                - "Tell each rep what happened to what they submitted"
            - name: Packaging and pricing explainer for buyers
              description: |-
                ## Purpose
                Buyers often misread editions, add-ons and usage limits, and the confusion surfaces at contract stage when it is most expensive. A buyer-facing explainer of what each package includes and how pricing works, approved by finance and checked against the current price book, stops reps improvising. It also gives procurement teams a clean document to circulate.

                ## Milestones
                1. Current packages, add-ons and limits confirmed with product and finance.
                2. A one-page explainer drafted without discount levels or internal margins.
                3. Finance and legal approval recorded.
                4. The explainer set to update whenever the price book changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finance-approved package explainer matching the current price book is live, with a trigger to update it on every price change."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm current packages, add-ons and limits with product and finance"
                - "Draft a one-page explainer without discount or margin details"
                - "Get finance and legal approval recorded on the asset"
                - "Add the explainer to the price change checklist"
            - name: Buyer engagement tracking on shared content
              description: |-
                ## Purpose
                Knowing that a buyer opened a proposal appendix four times, or forwarded a case study to three colleagues, tells a rep where interest lies. Setting up tracked links or a sharing tool for buyer-facing content gives that signal, as long as it respects the buyer's privacy and local rules. The data then feeds the usage report and the influence analysis.

                ## Milestones
                1. A tracked sharing method chosen: platform links, a document viewer or link tracking.
                2. Privacy and consent requirements checked with legal or the data protection lead.
                3. The twenty most shared buyer-facing assets sent only through tracked links.
                4. Reps shown how to read engagement on their deals.

                ## Notes
                Tracking buyer behaviour can fall under privacy law in some countries. Check with whoever handles data protection before turning it on.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The twenty most shared buyer-facing assets go out through tracked links, with privacy requirements signed off by the data protection lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a tracked sharing method your tools support"
                - "Check consent and privacy requirements with the data protection lead"
                - "Switch the top twenty buyer-facing assets to tracked links"
                - "Show reps how to read buyer engagement on their deals"
            - name: Rules for AI-personalised sales content
              description: |-
                ## Purpose
                Many reps already paste official content into AI tools to tailor it for each buyer, and the results can drift from approved claims or expose confidential detail. Writing clear rules on what may be personalised, which claims and figures stay fixed and which tools are approved keeps the speed while protecting accuracy. Pair the rules with a short set of approved prompts.

                ## Milestones
                1. Current rep practice with AI tools surveyed informally.
                2. Rules written for locked claims, editable sections and approved tools.
                3. Five approved prompts for common personalisation tasks published.
                4. Rules reviewed with legal and security and announced to the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written rules on AI personalisation, with locked claims and five approved prompts, are signed off by legal and security and announced."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask five reps how they currently use AI tools with sales content"
                - "Mark which claims, figures and terms must never be altered"
                - "Write five approved prompts for common personalisation tasks"
                - "Review the rules with legal and security before announcing them"
            - name: Legal, compliance and brand approval workflow
              description: |-
                ## Purpose
                In regulated industries such as financial services, healthcare or pharmaceuticals, a single unapproved claim in a one-pager can cause real regulatory trouble, and even elsewhere legal and brand teams need to see certain assets. A written workflow saying which asset types need which approvals, with turnaround times, stops both risky shortcuts and month-long queues. Record every approval on the asset so it can be shown later.

                ## Milestones
                1. Asset types sorted into no review, brand review and legal or compliance review.
                2. Turnaround times agreed with each reviewing team.
                3. Approval date and approver recorded on every reviewed asset.
                4. A claims register kept for statements that need periodic re-approval.

                ## Notes
                Ask your compliance team which rules apply. This project organises their requirements; it does not decide them.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written approval workflow by asset type is agreed with legal, compliance and brand, and every reviewed asset shows its approver and date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sort asset types into no review, brand review and legal review"
                - "Agree turnaround times with each reviewing team"
                - "Record approver and date on every reviewed asset"
                - "Start a claims register for statements needing periodic approval"
                - "Resubmit the claims register for approval @recurring(yearly)"
            - name: Product launch enablement kit
              description: |-
                ## Purpose
                Launches where marketing announces on Monday and reps first see the material on Wednesday waste the moment when buyers are most curious. A launch kit ready a week before announcement, covering a one-pager, talk track, objection entries, a battle card update and a short video, means reps can talk about it from day one. Agree a fixed kit list once and reuse it for every launch.

                ## Milestones
                1. A standard launch kit list agreed with product marketing.
                2. Kit assets drafted, reviewed and approved a week before announcement.
                3. A thirty-minute briefing held for reps before launch day.
                4. Usage of the kit checked thirty days after launch.

                ## Notes
                Start from the **Operational checklist** template. Build the kit list once and copy it for each launch.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every kit asset is approved and live a week before the announcement, and a rep briefing is held before launch day."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the standard launch kit list with product marketing"
                - "Set a kit-ready date one week before the announcement"
                - "Draft, review and approve each kit asset"
                - "Hold a thirty-minute rep briefing before launch day"
                - "Check usage of the kit thirty days after launch"
            - name: Price change content rollout
              description: |-
                ## Purpose
                When prices or packages change, every asset that mentions a figure becomes a liability on the effective date. A rollout plan that finds every affected asset, prepares replacements in advance and swaps them on the day stops reps quoting old prices. Search for currency symbols and package names, not just the price sheet.

                ## Milestones
                1. Every asset mentioning prices, editions or limits found.
                2. Replacement versions prepared and approved before the effective date.
                3. All affected assets swapped on the effective date.
                4. A rep briefing and talk track ready for explaining the change to existing customers.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the effective date, every asset mentioning old prices or packages is replaced, and a talk track for existing customers is live."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search the library for currency symbols, package names and limits"
                - "Prepare and approve replacement versions before the effective date"
                - "Swap every affected asset on the effective date"
                - "Publish a talk track for explaining the change to existing customers"
            - name: Competitor rapid response pack
              description: |-
                ## Purpose
                Competitors launch products, cut prices, get acquired or suffer outages, and reps get questions about it within days. A rapid response routine, with a named lead, a holding statement within forty-eight hours and an updated battle card within a week, means the team speaks with one calm voice. Prepare the routine before you need it.

                ## Milestones
                1. A rapid response routine written with roles and time limits.
                2. A holding statement template ready to fill.
                3. The routine used for the next competitor event.
                4. A short review held afterwards on what to change.

                ## Notes
                Stay factual and never disparage. Comments about a competitor's problems tend to get forwarded, and they reflect on your company.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written rapid response routine exists and has been used once, with a holding statement out within forty-eight hours and a review recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the rapid response roles and the forty-eight hour rule"
                - "Prepare a holding statement template reps can use with buyers"
                - "Run the routine for the next competitor event"
                - "Review what worked within a week of the event"
            - name: Sales kickoff content release
              description: |-
                ## Purpose
                Kickoff is the one time of year every seller is paying attention at once, which makes it the best moment to release the new message, refreshed battle cards and updated deck variants. Planning the content release around the kickoff agenda, with everything live in the library before the first session, turns enthusiasm into usage. The event itself belongs to its organiser; this project is about the content.

                ## Milestones
                1. Content to release at kickoff agreed with the event owner.
                2. All assets approved and live in the library before day one.
                3. Each session linked to the assets it introduces.
                4. Usage in the following month compared with a normal month.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All kickoff content is live before day one and linked from each session, with the following month's usage compared to a normal month."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree with the kickoff owner which content will be released"
                - "Set an approval deadline two weeks before the event"
                - "Link each kickoff session to the assets it introduces"
                - "Compare next month's usage with an ordinary month"
            - name: Messaging or brand change migration
              description: |-
                ## Purpose
                New positioning, a new visual identity or a company name change makes every asset in the library off-message overnight, and a partial switch looks worse than none. Ranking assets by usage and migrating the top fifty first, then the rest in batches, gets the visible material right fast. Retire whatever is not worth migrating.

                ## Milestones
                1. Every asset ranked by usage and marked migrate or retire.
                2. The top fifty migrated before the public change.
                3. Remaining assets migrated in scheduled batches.
                4. No old-brand assets left in search after ninety days.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Within ninety days of the change, no asset carrying the old brand or message appears in library search."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank assets by usage and mark each migrate or retire"
                - "Migrate the top fifty before the public change"
                - "Schedule batches for the remaining assets"
                - "Search the library for old brand terms after ninety days"
            - name: First ninety days as an enablement manager
              description: |-
                ## Purpose
                New enablement managers, often the first in the company, face requests from every direction before they understand the sales process. Spending the first month listening to reps and sitting in on calls, the second building the foundations and the third delivering two visible wins earns trust without promising everything. Write the plan down and share it with your manager in week one.

                ## Milestones
                1. Twenty conversations held with reps, managers, marketing and product in the first month.
                2. A written diagnosis of the top five content problems by day thirty.
                3. Foundations started by day sixty: inventory, one content home and owners.
                4. Two visible wins delivered and reported by day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written ninety-day plan is shared in week one, and a diagnosis and two delivered wins are reported to your manager by day ninety."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a thirty, sixty, ninety day plan and share it with your manager"
                - "Book twenty listening conversations across sales, marketing and product"
                - "Sit in on at least five live sales calls"
                - "Write a diagnosis of the top five content problems by day thirty"
                - "Report two delivered wins to your manager by day ninety"
            - name: A rep's personal quick-access kit
              description: |-
                ## Purpose
                Even with a good library, a rep handling thirty deals needs their ten most used assets one click away. Building a personal kit of pinned assets, favourite talk tracks and the customer stories for your own territory saves minutes on every call and shows the enablement team what matters. Refresh it each month so it never points at retired content.

                ## Milestones
                1. The ten assets used most in the last quarter identified.
                2. A pinned collection or bookmarks folder linking to the official versions.
                3. Territory-specific customer stories and competitor cards added.
                4. Any missing asset requested through the intake form rather than built privately.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A personal kit of at least ten pinned official assets is in use and has been refreshed for three consecutive months."
                cadence: rolling
              tasks:
                - "List the ten assets you used most last quarter"
                - "Pin links to the official versions, not downloaded copies"
                - "Add customer stories and battle cards for your own territory"
                - "Check your pinned assets still point at current versions @recurring(monthly:2)"
            - name: Content question in manager deal reviews
              description: |-
                ## Purpose
                Front-line managers decide whether content gets used, because reps copy what their manager asks about. Adding one question to each deal review, which asset did you send and how did the buyer respond, reinforces the library and surfaces gaps faster than any survey. Managers also hear early when an asset is failing in front of buyers.

                ## Milestones
                1. Two or three managers agree to ask one content question in each deal review.
                2. Answers logged in a shared note for a month.
                3. Gaps and failing assets passed to the content owner.
                4. Usage on those managers' teams compared with teams not doing it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For one quarter, participating managers log a content answer in their deal reviews and pass every reported gap to the content owner."
                cadence: rolling
              tasks:
                - "Agree the content question with two or three front-line managers"
                - "Ask one rep per deal review which asset they sent and how the buyer reacted @recurring(weekly:wed)"
                - "Log the answers in a shared note"
                - "Pass gaps and failing assets to the content owner at month end"
            - name: Localising content for new regions and languages
              description: |-
                ## Purpose
                Enterprise teams selling in several countries find that translated decks still quote the wrong currency, cite home-market customers and miss the local regulations buyers ask about. Choosing which assets to localise, by usage and regional revenue, and pairing translation with a review by a local seller produces content that sounds native. Keep one master per asset so changes flow to every language.

                ## Milestones
                1. Assets ranked for localisation by regional usage and revenue.
                2. A translation and local review process agreed with regional sales leads.
                3. The top twenty assets localised with local currency, customers and terms.
                4. Translations tied to their master version and checked when it changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The top twenty assets are localised for each priority region, reviewed by a local seller and linked to their master versions."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Rank assets for localisation by regional usage and revenue"
                - "Agree a translation and local seller review process"
                - "Localise the top twenty assets with local currency, customers and terms"
                - "Check translated versions against the latest master @recurring(quarterly)"
            - name: Partner and reseller content kit
              description: |-
                ## Purpose
                Partners and resellers sell alongside a dozen other vendors and will use whatever material is easiest, often an outdated deck from two years ago. A partner kit of co-brandable one-pagers, a short talk track and a few customer stories, with a simple way to get updates, keeps your message accurate in conversations you never see. Remove internal pricing, margins and competitive comments before anything goes out.

                ## Milestones
                1. Partner-safe versions of the top ten assets with internal details removed.
                2. Co-branding rules written.
                3. The kit published in a partner portal or shared folder with access controls.
                4. A monthly update note sent to partner contacts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A partner kit of at least ten partner-safe assets is live with access controls, and partners have received three monthly update notes."
                cadence: rolling
              tasks:
                - "Choose the ten assets partners most need"
                - "Strip internal pricing, margins and competitive comments from each"
                - "Write co-branding rules for partner use"
                - "Send partners a note on the latest content changes @recurring(monthly:10)"
            - name: Minimum library for a team without enablement
              description: |-
                ## Purpose
                Many small and mid-sized sales teams have no enablement person, so a manager or senior rep keeps content alive in the gaps between deals. Choosing ten essential assets, such as a one-pager, three battle cards, a discovery talk track, an objection guide and four customer stories, and keeping only those current is realistic in an hour a month. Done well, it beats a sprawling library nobody maintains.

                ## Milestones
                1. Ten essential assets chosen with the team.
                2. Each one owned by a named team member.
                3. All ten updated to current pricing, product and messaging.
                4. A monthly upkeep hour blocked and kept for three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten essential assets are current and owned, and the monthly upkeep hour has been kept for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree the ten essential assets with the team"
                - "Give each asset a named owner from the team"
                - "Bring all ten up to date with current pricing and messaging"
                - "Spend an hour updating the essential ten @recurring(monthly:28)"
            - name: Content influence on win rate analysis
              description: |-
                ## Purpose
                Usage figures show what reps open; they do not show whether content helps deals close. Linking asset sends to opportunities in the CRM and comparing win rates and cycle times for deals that used an asset against similar deals that did not gives a defensible, if imperfect, view of influence. Treat the results as correlation and pair them with rep interviews.

                ## Milestones
                1. Asset sends linked to opportunity records for at least two quarters.
                2. Win rate and cycle time compared for deals with and without each key asset, by segment.
                3. Findings checked with five reps for plausible explanations.
                4. A short report shared with sales and marketing leadership.

                ## Notes
                Strong deals often attract more content, so a raw comparison flatters content. Compare like with like by segment and deal size.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An influence report comparing win rate and cycle time for deals with and without key assets, by segment, is shared with leadership."
                cadence: cyclic
              tasks:
                - "Confirm asset sends are linked to opportunity records in the CRM"
                - "Compare win rate and cycle time by segment for deals with and without each key asset"
                - "Check the findings with five reps for other explanations"
                - "Refresh the influence analysis and share it with leadership @recurring(quarterly)"
            - name: Industry and vertical content variants
              description: |-
                ## Purpose
                Buyers in healthcare, manufacturing or the public sector want to see their own terms, regulations and peers, and a generic deck signals that you do not know their world. Building industry variants of the one-pager, battle cards and talk tracks for your two or three biggest industries lifts relevance without multiplying the library. Start where revenue is concentrated.

                ## Milestones
                1. The two or three industries with the most pipeline chosen.
                2. Industry terms, regulations and buyer concerns gathered from reps and customers.
                3. Industry variants of the one-pager and talk track built for each.
                4. Variants tagged by industry and linked to their master versions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Industry one-pagers and talk tracks exist for the top two or three industries, tagged and linked to their master versions."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the two or three industries with the most pipeline"
                - "Interview two reps and one customer in each industry"
                - "Build industry one-pagers and talk tracks for each"
                - "Tag each variant by industry and link it to its master"
            - name: Enablement content charter and operating model
              description: |-
                ## Purpose
                As sales grows past fifty or so sellers across several segments, content work needs an explicit model: who owns which asset types, what service levels apply, how product marketing and enablement split the work and how success is measured. A one-page charter agreed with sales, marketing and product leaders ends the recurring argument over who should have built what. Review it each year as the team and products change.

                ## Milestones
                1. Responsibilities split between enablement, product marketing, sales operations and product written down.
                2. Service levels set for requests, release updates and reviews.
                3. Three success measures agreed, such as findability, freshness and usage.
                4. The charter signed off by sales, marketing and product leaders.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page charter with responsibilities, service levels and three success measures is signed off by sales, marketing and product leaders."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map who currently creates each asset type"
                - "Draft responsibilities, service levels and three success measures"
                - "Review the draft with sales, marketing and product leaders"
                - "Review the charter against the past year's request log @recurring(yearly)"
---

# Sales Enablement Content

This area is for sellers, sales managers and enablement teams in growing and enterprise organisations who need content reps can find in seconds and trust in front of a buyer. It starts with the foundations (an inventory, a rep survey, one home for content, tags, owners and review dates, a stage and persona map, a message house and a style guide), then the routines that keep the library fresh and used, the writing skills behind battle cards, one-pagers, talk tracks and customer stories, the decisions about platforms, CRM integration and approvals, the launches, price changes and kickoffs worth preparing for, the situations of a new enablement manager, a rep, a front-line manager or a global team, and finally specialist work on content influence, industry variants and an enablement charter.

What repeats is a weekly request triage, release check, digest and deal review question, monthly freshness sweeps, usage reports, feedback reviews, competitor round-ups and customer story requests, quarterly roadmap reviews, findability tests and proof point checks, and a yearly library cull and charter review. The Content pipeline, Metrics log, Feedback themes, Purchase decision, Operational checklist and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
