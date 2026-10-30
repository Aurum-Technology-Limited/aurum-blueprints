---
id: investment-banking.equity-story-development
name: Equity Story Development
description: "A method for the equity story behind a sale or listing: highlights with proof, growth drivers, competitive position, financial targets and one master page that keeps every document telling it the same way."
category: business
version: 1.0.0
tags: [investment-banking, equity-story-development, knowledge-worker, analyst, associate, equity-story, sell-side, ipo]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - operational-checklist
    - metrics-log
    - feedback-themes
    - risk-register
    - board-meeting
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Equity Story Development
          description: "Developing the equity story for a sale or listing: growth drivers, competitive position, financial targets and making every document tell it the same way."
          projects:
            - name: Equity story anatomy from five past deals
              description: |-
                ## Purpose
                Strong equity stories share a shape: a short claim about why the business wins, four or five highlights that each carry proof, and financial targets that follow from the highlights rather than sitting beside them. Taking apart five released documents from recent sales and listings, ideally a mix of sponsor exits, trade sales and IPOs, shows that shape faster than any training deck and gives you a reference set for everything else in this area.

                ## Milestones
                1. Five released teasers, IM summaries or prospectus summaries gathered, with archive access cleared where needed.
                2. Each story reduced to its headline claim, highlights and targets on half a page.
                3. The pattern common to the strongest stories written down in five lines.
                4. What the two weakest stories got wrong discussed with a VP who worked on one of them.

                ## Notes
                Public prospectuses are a good source when internal archives are restricted. Compliance rules on archive access still apply to anything internal.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Half-page summaries of five released equity stories, with the common pattern written down and reviewed with a VP."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a VP for five recent deals whose equity story they rate highly"
                - "Pull the released teaser, IM summary or prospectus summary for each"
                - "Reduce each story to its headline, highlights and targets on half a page"
                - "Test your view of the two weakest stories with the VP"
            - name: Equity story brief for a sale or listing
              description: |-
                ## Purpose
                Before the first slide is drafted, the team needs to agree what the story is for: a trade sale to strategics, a sponsor auction, a listing on a growth market or a dual-track. Each audience pays for something different, and a one-page brief agreed at kick-off stops the team writing a story that suits none of them.

                ## Milestones
                1. A one-page brief naming the transaction route, the target audiences and every document that will carry the story.
                2. The client's two or three objectives for the transaction written in the client's own words.
                3. A story lock date set before the first external document deadline.
                4. The brief approved by the deal lead and saved with the deal files.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page story brief with route, audiences, documents and a lock date, approved by the deal lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the brief from the engagement letter and kick-off notes"
                - "List every document that will carry the story, from teaser to press release"
                - "Set a story lock date ahead of the first external document"
                - "Get the deal lead's sign-off on the brief"
            - name: Fact base of management data behind the story
              description: |-
                ## Purpose
                A story is only as good as the numbers under it: revenue by customer cohort, retention, pricing history, pipeline, capacity and market share. Asking for these early, in one structured request grouped by the likely highlights, means the story is built on data the company can actually produce rather than on management's memory of it.

                ## Milestones
                1. A request covering cohorts, segment revenue, KPIs, pricing, pipeline and market data sent to the client.
                2. Each item received logged with its owner, source and date.
                3. Gaps that a likely highlight depends on flagged to the deal lead within a week of receipt.
                4. A single fact base workbook with the source noted for every data series.

                ## Notes
                Fold these items into the main information request where one exists, so the client answers one list, not two.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fact base workbook with a named source for every series, and a gap list sent to the deal lead."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a story data request grouped by likely highlight"
                - "Agree owners and return dates for each item with the client CFO"
                - "Log each data item received with its source and date"
                - "Send the deal lead the gaps that a highlight depends on"
            - name: Management workshop to draw out the story
              description: |-
                ## Purpose
                Management usually knows why customers choose the business but describes it in internal language: product codes, project names and a history only insiders follow. A half-day workshop with the CEO, CFO and heads of sales and operations draws out why the business wins, the numbers that prove it and the plans that drive growth, in words an outsider can repeat.

                ## Milestones
                1. An agenda built on five questions: why customers buy, why they stay, where growth comes from, what could go wrong and what the next five years look like.
                2. A half-day session held with the CEO, CFO and at least two operating heads.
                3. Notes written up within a day with candidate highlights and the data each one needs.
                4. Follow-up data requests issued to named owners.

                ## Notes
                Start from the **Meeting notes** template. Ask for stories about specific customers won and lost; they produce sharper highlights than strategy slides do.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Workshop notes listing candidate highlights with the data each needs, circulated within a day of the session."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the workshop date and attendees with the CEO's office"
                - "Send the five workshop questions to attendees a week ahead"
                - "Write up notes and candidate highlights within a day"
                - "Issue follow-up data requests to named owners"
            - name: What strategic buyers, sponsors and investors pay for
              description: |-
                ## Purpose
                Strategic acquirers pay for synergies and fit, sponsors pay for cash generation, debt capacity and a credible exit, and public investors pay for growth they can model and a management team they trust. Writing down, for this deal, what each likely audience values and how it will test the story tells you which highlights to lead with in each document.

                ## Milestones
                1. A table of audience types showing what each values, the metrics it will test and its likely objections.
                2. The table corrected by the ECM desk or the sector coverage banker.
                3. A proposed highlight order for each document, drawn from the table.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An audience table reviewed by ECM or coverage, with a highlight order proposed for each planned document."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build a table of audiences with what each values and will test"
                - "Ask the ECM desk or coverage banker to correct the table"
                - "Propose a highlight order for each document from the table"
            - name: Choosing the four or five investment highlights
              description: |-
                ## Purpose
                Most equity stories carry too many highlights: eight or nine bullets that read as a list of facts rather than an argument. Narrowing to four or five, each a claim a reader could disagree with and each backed by a number, forces the team to decide what the business really is and makes every later document easier to write.

                ## Milestones
                1. A long list of candidate highlights drawn from the workshop and the fact base.
                2. Each candidate scored for distinctiveness, evidence and fit with the audience.
                3. Four or five highlights chosen and written as one-sentence claims.
                4. The final set agreed with the CEO and the deal lead, with dropped candidates recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Four or five one-sentence highlights, each with a supporting number, agreed in writing by the CEO and deal lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every candidate highlight from the workshop notes and fact base"
                - "Score each candidate for distinctiveness, evidence and audience fit"
                - "Write the chosen highlights as single-sentence claims"
                - "Agree the final set with the CEO and deal lead"
            - name: Proof point register for every highlight
              description: |-
                ## Purpose
                Each highlight needs two or three proof points a sceptical reader will accept: a cohort chart, a third-party market statistic, a customer contract, an audited number. A register linking each proof point to its source means anyone drafting the teaser, IM or prospectus pulls the same evidence, and diligence finds nothing that was not already checked.

                ## Milestones
                1. Two or three proof points listed under each highlight.
                2. Each proof point tied to a source document and the person who supplied it.
                3. Proof points that also appear in audited accounts or vendor due diligence marked as cross-checked.
                4. Weak or unsourced proof points replaced or dropped.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register in which every proof point under every highlight has an attached source document and a named supplier."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set up the register with one row per proof point and a source column"
                - "Attach the source document for each proof point"
                - "Mark proof points that also appear in audited or VDD numbers"
                - "Replace or drop any proof point without a source"
            - name: One-page equity story master document
              description: |-
                ## Purpose
                Once the highlights are agreed, a single page should hold the story every document will tell: the positioning line, the highlights, the key proof points, the financial targets and approved wording for sensitive topics. Drafters of the teaser, IM, management presentation and prospectus work from this page, so differences between documents become deliberate choices rather than accidents.

                ## Milestones
                1. A one-page master with positioning line, highlights, proof points, targets and sensitive wording.
                2. Every number on the page tied to the fact base or the model.
                3. The master approved by the deal lead and the client CFO.
                4. The master shared with every drafter as the single source for story wording.

                ## Notes
                Keep it to one page. If it grows, the story has not been decided yet.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page story master, approved by the deal lead and CFO, with every number tied to a source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the master page from the agreed highlights and proof register"
                - "Tie each number on the page to the fact base or the model"
                - "Get approval from the deal lead and the client CFO"
                - "Send the approved master to every document drafter"
            - name: Owners and sign-off chain for story wording
              description: |-
                ## Purpose
                Changes to the story arrive from everywhere: the CEO after a board dinner, the sponsor's partner, counsel, the company's PR adviser. Agreeing once who may propose a change, who approves it and how it flows into every document keeps the master page authoritative and stops a late edit landing in the press release but not the prospectus.

                ## Milestones
                1. A named owner of the master page on the bank side.
                2. Approvers listed separately for the story, the targets and legally sensitive wording.
                3. Counsel confirmed as approver for forward-looking statements.
                4. A short change route written down and shared with the bank, client and adviser teams.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written change route naming the master owner and the approvers for story, targets and sensitive wording, shared with all parties."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the bank-side owner of the master page with the deal lead"
                - "List approvers for story, targets and sensitive wording"
                - "Confirm with counsel which statements need their approval"
                - "Share the written change route with all deal parties"
            - name: Weekly cross-document consistency check
              description: |-
                ## Purpose
                Inconsistency is the most common way an equity story breaks: the teaser says 18 percent growth, the IM says 17.6, and the management presentation uses a different year end. A weekly read of every live document against the master page catches drift while it is still cheap to fix.

                ## Milestones
                1. A checklist of the claims, numbers and phrases to compare across documents.
                2. Every live document checked against the master page each week.
                3. Each difference logged with an owner and either fixed or justified.
                4. A clean check recorded before each external release.

                ## Notes
                Start from the **Operational checklist** template. Rounding is the usual culprit; agree one rounding rule on the master page.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A consistency check completed every week a deal is live, with a clean check on file before each external release."
                cadence: rolling
              tasks:
                - "Build the checklist from the master page's claims and numbers"
                - "Read every live document against the master page @recurring(weekly:thu)"
                - "Log each difference with an owner and a fix date"
                - "Run a full check before any document goes external"
            - name: Change log and versions for the story master
              description: |-
                ## Purpose
                Without a change log, nobody can say when the growth target moved from mid-teens to high-teens or who agreed it, and counsel, the board and sometimes a regulator will ask. Recording every change to the master page with date, reason and approver turns the story's history into something you can show.

                ## Milestones
                1. A change log attached to the master document.
                2. Every change recorded with date, reason and approver.
                3. A weekly note of changes sent to all drafters.
                4. A dated copy archived at each story lock.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log with date, reason and approver for every master page change, and a dated archive copy at each lock."
                cadence: rolling
              tasks:
                - "Add a change log tab to the master document"
                - "Record each change with date, reason and approver"
                - "Circulate the week's story changes to all drafters @recurring(weekly:mon)"
                - "Archive a dated copy of the master at each story lock"
            - name: Monthly refresh of KPIs behind each highlight
              description: |-
                ## Purpose
                Processes and listings run for months, and a proof point built on last year's numbers goes stale as the company closes new months. Refreshing the KPIs behind each highlight when management accounts arrive shows whether the story is strengthening or quietly weakening, while there is still time to adjust it.

                ## Milestones
                1. A list of the KPIs that underpin each highlight.
                2. KPIs updated within a week of each month's management accounts.
                3. Any KPI moving against its highlight flagged to the deal lead.
                4. Documents needing refreshed numbers listed after each update.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "KPIs behind every highlight updated each month from management accounts, with adverse moves reported to the deal lead."
                cadence: rolling
              tasks:
                - "List the KPIs that underpin each highlight"
                - "Update highlight KPIs from the latest management accounts @recurring(monthly:12)"
                - "Flag any KPI moving against its highlight to the deal lead"
                - "Note which documents need the refreshed numbers"
            - name: Watching how listed peers tell their story
              description: |-
                ## Purpose
                Investors will read the client's story beside what listed peers say at results and capital markets days, so a claim a peer already makes better, or one a peer has just been punished for, matters. A monthly scan of peer results and investor day decks keeps the positioning sharp and the targets in a believable range.

                ## Milestones
                1. Six to eight listed peers chosen, with links to their investor materials.
                2. Peer claims that overlap or conflict with the client's highlights noted.
                3. A quarterly summary of shifts in peer targets sent to the deal lead.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A peer messaging log updated monthly, with a quarterly summary of peer target changes sent to the deal lead."
                cadence: rolling
              tasks:
                - "List six to eight listed peers and where their investor materials sit"
                - "Scan new peer results and investor day decks @recurring(monthly:18)"
                - "Note peer claims that overlap or conflict with the highlights"
                - "Summarise shifts in peer targets for the deal lead @recurring(quarterly)"
            - name: Feedback log from buyers and investors on the story
              description: |-
                ## Purpose
                Early-look meetings, first-round bids and management meetings all produce feedback on which highlights land and which are doubted. Logging every comment against the highlight it concerns, and reviewing the themes weekly, shows where the story needs more proof or a different emphasis before the next round.

                ## Milestones
                1. A log with a column for each highlight and one for general comments.
                2. Comments from each meeting logged within a day.
                3. Themes reviewed weekly with the deal team.
                4. Story changes proposed only where several sources point the same way.

                ## Notes
                Start from the **Feedback themes** template. Record feedback as given, not as the team hoped to hear it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every buyer or investor meeting logged against the highlights within a day, with weekly theme reviews recorded."
                cadence: rolling
              tasks:
                - "Set up the log with a column for each highlight"
                - "Log each meeting's comments against the highlights within a day"
                - "Ask the agent to summarise the week's feedback by highlight @recurring(weekly:fri)"
                - "Propose story changes that the themes support"
            - name: Weakness register and prepared answers
              description: |-
                ## Purpose
                Every business has issues a buyer will find: customer concentration, a margin dip, a key person, a pending regulatory change. Listing them early with evidence and a prepared answer stops the story being blindsided, and lets the team decide which to address in the documents and which to answer only when asked.

                ## Milestones
                1. Every issue a buyer's diligence is likely to find listed.
                2. A prepared answer and its evidence written for each issue.
                3. How each issue will be disclosed agreed with counsel.
                4. The register reviewed weekly while the deal is live.

                ## Notes
                Start from the **Risk register** template. Prospectus risk factors belong to counsel; this register feeds that conversation but does not replace it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register with a prepared answer and evidence for every known weakness, and a disclosure approach agreed with counsel."
                cadence: rolling
              tasks:
                - "List the issues a buyer's diligence will find"
                - "Draft the prepared answer and evidence for each issue"
                - "Review the weakness register with the deal lead @recurring(weekly:wed)"
                - "Agree with counsel how each issue is disclosed"
            - name: Hard questions bank for the equity story
              description: |-
                ## Purpose
                The questions that sink a story are rarely surprises: why growth slows in year three, why the margin target beats every peer, why the founder is selling now. A bank of the twenty or thirty hardest questions with agreed answers, refreshed as feedback arrives, gives management and the bank team one consistent line.

                ## Milestones
                1. Twenty or more hard questions about the story drafted.
                2. An agreed answer for each signed off by the CFO and deal lead.
                3. New questions from feedback added each month.
                4. The bank shared with everyone who will speak to buyers or investors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A bank of at least twenty hard questions with CFO-approved answers, updated monthly from feedback."
                cadence: rolling
              tasks:
                - "Draft the twenty hardest questions about the story"
                - "Agree an answer for each with the CFO and deal lead"
                - "Add new questions from buyer and investor feedback @recurring(monthly:22)"
                - "Share the bank with everyone who will speak to buyers"
            - name: Weekly story call with the client CFO
              description: |-
                ## Purpose
                The CFO usually owns the numbers behind the story and is the first to know when trading moves, a contract is lost or the board wants a target changed. A short fixed weekly call keeps the story and the numbers in step and gives the CFO one place to raise issues instead of five email threads.

                ## Milestones
                1. A fixed 30-minute weekly slot agreed with the CFO.
                2. A three-item agenda sent before each call.
                3. Decisions from each call recorded in the master change log.
                4. Trading surprises escalated to the deal lead the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly CFO call held throughout the live deal, with decisions recorded in the change log after each one."
                cadence: rolling
              tasks:
                - "Agree a 30-minute weekly slot with the CFO"
                - "Send the CFO a three-item story agenda @recurring(weekly:tue)"
                - "Record call decisions in the master change log"
                - "Escalate any trading surprise to the deal lead the same day"
            - name: Current trading against the forecast in the story
              description: |-
                ## Purpose
                Buyers in a second round and investors at pricing both ask how the current year is going, and a story built on a forecast the company is missing loses credibility fast. Comparing each month's actuals with the forecast year, and preparing a short current trading message the CFO approves, keeps the team ready for that question.

                ## Milestones
                1. A year-to-date tracker of actuals against the forecast year in the story.
                2. A two-line current trading message approved by the CFO and refreshed monthly.
                3. A decision recorded with the deal lead whenever a variance could change the story.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly tracker of actuals against forecast and a CFO-approved current trading message no older than one month."
                cadence: rolling
              tasks:
                - "Build a year-to-date tracker of actuals against the forecast year"
                - "Compare the month's actuals with the story forecast @recurring(monthly:26)"
                - "Draft a two-line current trading message for the CFO to approve"
                - "Decide with the deal lead whether a variance changes the story"
            - name: Writing growth drivers investors can model
              description: |-
                ## Purpose
                A growth driver is useful only if a reader can put it in a spreadsheet: new customers times average order value, price rises on a renewal book, new sites at a known payback. Learning to break the client's growth into three or four drivers, each with a historical rate and a stated assumption, makes the story testable and the targets believable.

                ## Milestones
                1. Three years of revenue growth split into volume, price, mix and new products or regions.
                2. Three or four drivers written in a form a reader could model.
                3. Each driver linked to its historical rate and its forecast assumption.
                4. The drivers checked against the operating model by whoever owns it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three or four written growth drivers, each with a historical rate and forecast assumption, reconciled to the model."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Split three years of revenue growth into volume, price and mix"
                - "Write each driver so a reader could rebuild it in a spreadsheet"
                - "Attach the historical rate and forecast assumption to each driver"
                - "Ask the model owner to reconcile the drivers to the model"
            - name: Proving competitive position with evidence
              description: |-
                ## Purpose
                Claims of market leadership, unique technology or high switching costs are the first things diligence tests and the easiest to overstate. Practising how to prove a position, with share data from a named source, win and loss rates, retention, pricing history and customer interviews, turns adjectives into evidence a buyer can check.

                ## Milestones
                1. Each competitive claim in the draft story listed.
                2. At least one measurable proof found or commissioned for each claim.
                3. Claims without proof softened or removed.
                4. A competitive position paragraph rewritten using only evidenced claims.

                ## Notes
                If the evidence says number two in the market, say number two with conviction; buyers forgive modesty more readily than exaggeration.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rewritten competitive position paragraph in which every claim has a measurable, sourced proof."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every competitive claim in the current story draft"
                - "Find a measurable proof for each claim in the fact base"
                - "Soften or remove claims that have no proof"
                - "Rewrite the competitive position paragraph from evidenced claims"
            - name: Setting defensible medium-term financial targets
              description: |-
                ## Purpose
                Medium-term targets for growth, margin, capital expenditure and cash conversion are the numbers investors hold management to after the deal, and missing them in the first year damages trust in the company and the bank. Building the targets bottom-up from the drivers, setting them where management is confident rather than hopeful, and agreeing the wording with counsel gives the story a financial spine that survives scrutiny.

                ## Milestones
                1. Targets built bottom-up from the growth drivers and reconciled to the model.
                2. A downside case showing how far trading can fall before a target is missed.
                3. Management's confidence in each target recorded after a challenge session.
                4. Target wording and any conditions approved by counsel.

                ## Notes
                Whether and how targets may appear in a prospectus depends on the listing venue's rules, and counsel decides. The bank shapes the analysis; management owns the numbers.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Medium-term targets reconciled to the model, tested against a downside case and approved in wording by counsel."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build each target bottom-up from the growth drivers"
                - "Run a downside case to see how much room each target has"
                - "Hold a challenge session with management on each target"
                - "Send the target wording to counsel for approval"
            - name: KPI framework that carries the story
              description: |-
                ## Purpose
                Five or six numbers are all most investors remember about a company, so the story should choose them on purpose: net revenue retention for software, like-for-like sales for a retailer, utilisation for a services firm. Defining these KPIs precisely, with the calculation and how far back the company can report them, means the same numbers appear in every document and in every results statement after the deal.

                ## Milestones
                1. Five or six headline KPIs chosen to match the highlights.
                2. A written definition and calculation for each KPI.
                3. At least three years of history for each KPI confirmed with finance.
                4. The KPI definitions added to the master page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A KPI sheet with five or six defined headline measures and three years of history each, linked from the master page."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick five or six KPIs that match the highlights"
                - "Write a definition and calculation for each KPI"
                - "Confirm three years of KPI history with the finance team"
                - "Check KPI definitions against the latest management pack @recurring(quarterly)"
            - name: Market sizing that survives diligence
              description: |-
                ## Purpose
                Top-down market figures from a single paid report are easy to quote and easy to attack. Building the addressable market bottom-up from customer counts and spend, then reconciling it with one or two third-party sources, gives the story a market number it can lean on and a growth rate that matches what the company has actually seen.

                ## Milestones
                1. A bottom-up market estimate built from customer counts and average spend.
                2. The estimate reconciled with one or two named third-party sources.
                3. The company's own growth compared with the market growth rate.
                4. One market figure and one growth rate chosen for every document.

                ## Notes
                If buyers will rely on a commissioned market study, ask counsel early about reliance letters.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bottom-up market size reconciled to at least one third-party source, with a single agreed figure on the master page."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Estimate the market from customer counts and average spend"
                - "Reconcile the estimate with one or two third-party sources"
                - "Compare company growth with the market growth rate"
                - "Put the agreed market figure and growth rate on the master page"
            - name: Positioning line for the business in one sentence
              description: |-
                ## Purpose
                If the CEO cannot say what the company is in one sentence, every reader will invent a description, and many will pick a less flattering peer group. Drafting and testing a single positioning line, covering the category, the customers and the reason it wins, gives every document and conversation the same opening.

                ## Milestones
                1. Five candidate positioning lines drafted.
                2. Each line tested on two people outside the deal.
                3. One line chosen with the CEO and added to the master page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single positioning sentence agreed with the CEO and placed at the top of the master page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft five candidate positioning lines"
                - "Test each line on two colleagues outside the deal"
                - "Choose the line with the CEO"
                - "Add the chosen line to the top of the master page"
            - name: Signature charts for the equity story
              description: |-
                ## Purpose
                Three or four charts usually do more work for a story than any paragraph: a revenue bridge by driver, a cohort retention chart, a margin progression, a market share trend. Choosing these signature charts once, building them to house style and reusing them unchanged in every document makes the story recognisable from teaser to roadshow.

                ## Milestones
                1. Three or four signature charts chosen, one for each main highlight.
                2. Each chart built to house style with a source line.
                3. The charts saved as master files that every drafter uses.
                4. The data behind each chart linked to the fact base.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three or four master chart files with sources, used unchanged in every external document."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one signature chart for each main highlight"
                - "Build each chart to house style with a source line"
                - "Save the charts as master files for all drafters"
                - "Link each chart's data to the fact base"
            - name: Choosing the peer category the story claims
              description: |-
                ## Purpose
                Whether a business is presented as a software company, a tech-enabled services firm or an industrial distributor can move its valuation range by several turns of EBITDA, and investors decide quickly whether the claim is fair. Testing the category against each peer group's revenue mix, margins and growth, with the comps team and the ECM desk, settles which comparison the story invites and which it must avoid.

                ## Milestones
                1. Two or three peer categories the business could claim listed.
                2. The client's revenue mix, margins and growth compared with each category.
                3. The ECM desk's view on which category investors will accept recorded.
                4. The chosen category and reasons written on the master page.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of peer category, supported by a comparison with each candidate group and the ECM desk's view."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the two or three peer categories the business could claim"
                - "Compare client mix, margins and growth with each category"
                - "Ask the ECM desk which category investors will accept"
                - "Record the chosen category and reasons on the master page"
            - name: Sustainability content consistent with the story
              description: |-
                ## Purpose
                Buyers and investors now ask how a business handles emissions, safety, governance and its workforce, and a sustainability section bolted on at the end often contradicts the growth plan. Writing it from the same fact base and checking it against the highlights avoids claims that cannot be supported, which regulators in several markets now examine.

                ## Milestones
                1. The sustainability topics most relevant to this sector listed.
                2. Each sustainability claim tied to company data or a certificate.
                3. Any conflict with the growth plan resolved with management.
                4. The section checked against the master page.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sustainability section in which every claim has a data source and nothing conflicts with the growth highlights."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the sustainability topics that matter most for this sector"
                - "Tie each sustainability claim to company data or a certificate"
                - "Resolve any conflict with the growth plan with management"
                - "Recheck sustainability claims against new company data @recurring(quarterly)"
            - name: Strategic and sponsor versions of the same story
              description: |-
                ## Purpose
                In a process with both trade buyers and private equity, the same facts need different emphasis: the scale of synergies and platform fit for strategics, cash generation, debt capacity and buy-and-build for sponsors. Preparing two framings from one master page, with the core highlights unchanged, lets each audience see its own case without any document contradicting another.

                ## Milestones
                1. Core highlights that stay identical in both versions marked on the master page.
                2. A strategic framing around synergies drafted.
                3. A sponsor framing with cash generation and add-on themes drafted.
                4. Both versions checked for contradictions by someone outside the drafting team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Strategic and sponsor framings built on unchanged core highlights, checked for contradictions by a second reviewer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark the highlights that stay identical in both versions"
                - "Draft the strategic framing around synergies"
                - "Draft the sponsor framing around cash and add-ons"
                - "Ask a colleague outside the team to look for contradictions"
            - name: Leading with growth or with cash generation
              description: |-
                ## Purpose
                Some businesses can be sold as growth stories or as steady cash generators, and trying to be both usually satisfies neither. Deciding which lead suits the track record, the forecast and current market appetite, then ordering the highlights to match, gives the story a clear character investors can place.

                ## Milestones
                1. The track record assessed for growth and for cash conversion.
                2. Current market appetite for each type of story gathered from ECM or coverage.
                3. A lead recorded with the deal lead and CEO.
                4. The highlights reordered to match the chosen lead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether the story leads with growth or cash, with the highlights reordered to match."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Chart the track record for growth and for cash conversion"
                - "Ask ECM or coverage which story type the market favours now"
                - "Agree the lead with the deal lead and the CEO"
                - "Reorder the highlights on the master page to match"
            - name: Capital allocation and dividend policy messaging
              description: |-
                ## Purpose
                Public investors want to know what management will do with the cash: reinvest, acquire, pay down debt or pay dividends, and in what order. Agreeing a capital allocation message and, for a listing, a dividend policy the board can stand behind, written the same way everywhere, removes one of the commonest roadshow questions before it is asked.

                ## Milestones
                1. Management's capital allocation priorities written in ranked order.
                2. The dividend policy wording settled by the board with its legal and tax advisers.
                3. The message checked against the model's cash flows.
                4. The approved wording added to the master page.

                ## Notes
                The board sets dividend policy with its own legal and tax advice. The bank's role is to show how investors will read it and to keep the wording consistent.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A ranked capital allocation message and board-approved dividend wording, consistent with the model, on the master page."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask management to rank its uses of cash in order"
                - "Check the ranking against the model's cash flows"
                - "Send draft dividend wording to the board's advisers"
                - "Add the approved wording to the master page"
            - name: Use of proceeds that matches the growth plan
              description: |-
                ## Purpose
                When a listing raises new money, investors check that the use of proceeds funds the growth drivers in the story rather than a vague mix of general purposes and debt repayment. Tying each use to a driver, with rough amounts and timing agreed with the CFO, makes the primary raise part of the story instead of an afterthought.

                ## Milestones
                1. Each intended use of proceeds listed with an approximate amount.
                2. Each use linked to a growth driver or a stated balance sheet aim.
                3. Timing of spending agreed with the CFO.
                4. The use of proceeds wording reviewed by counsel.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A use of proceeds table in which every line links to a growth driver or balance sheet aim, reviewed by counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each intended use of proceeds with a rough amount"
                - "Link each use to a growth driver or balance sheet aim"
                - "Agree spending timing with the CFO"
                - "Send the use of proceeds wording to counsel"
            - name: Red team review of the equity story
              description: |-
                ## Purpose
                Teams that have lived with a story for weeks stop seeing its gaps. Asking two bankers from outside the deal, ideally one from ECM or sponsor coverage, to attack the story as a sceptical buyer would, and answering each point in writing, finds the weaknesses before the first investor does.

                ## Milestones
                1. Two reviewers from outside the deal team briefed with the master page and key documents.
                2. A one-hour challenge session held and every objection recorded.
                3. A written answer or story change agreed for each objection.
                4. The master page updated and the changes logged.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded red team session with a written response or story change for every objection raised."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask two bankers outside the deal to act as sceptical buyers"
                - "Brief them with the master page and the current teaser"
                - "Record every objection raised in the session"
                - "Write an answer or story change for each objection"
            - name: Explaining a weak year in the track record
              description: |-
                ## Purpose
                Pandemic years, lost contracts and one-off margin dips in the historical numbers will all be found, and a story that skips past them invites the worst reading. Explaining the weak year once, plainly, with the cause, the recovery evidence and what changed, and using that wording everywhere, turns a liability into a sign of management's candour.

                ## Milestones
                1. The weak period and its financial effect quantified.
                2. The cause and the recovery evidence documented.
                3. One explanation of no more than three sentences agreed with the CFO.
                4. The explanation added to the master page and the hard questions bank.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A CFO-approved explanation of the weak period, with quantified effect and recovery evidence, used in every document."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Quantify the weak period's effect on revenue and margin"
                - "Gather the evidence of recovery since"
                - "Agree a three-sentence explanation with the CFO"
                - "Add the explanation to the master page and questions bank"
            - name: Rebuilding the story after a pulled deal
              description: |-
                ## Purpose
                Pulled sales and postponed IPOs leave a record: buyers and investors remember the old story and why they passed. Collecting feedback from the failed attempt, separating market timing from real weaknesses in the story and deciding what must change before relaunch keeps the second attempt from repeating the first.

                ## Milestones
                1. Feedback from the failed attempt collected from bidders, investors or the syndicate.
                2. Each reason for passing classed as market timing, valuation or story weakness.
                3. Story changes agreed for every weakness the client can fix.
                4. A relaunch story tested on two trusted investors or buyers before going wide.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written analysis of why the first attempt failed, with agreed story changes and two test conversations before relaunch."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect feedback from bidders, investors or the syndicate"
                - "Class each reason for passing as timing, valuation or story"
                - "Agree story changes for the weaknesses the client can fix"
                - "Test the relaunch story on two trusted contacts"
            - name: Testing the story in early-look meetings
              description: |-
                ## Purpose
                Early-look and pilot fishing meetings with a handful of investors are the first real test of an IPO story, and they happen before the analyst presentation is fixed. Preparing a short story deck, agreeing with compliance how investors are approached and debriefing every meeting against the highlights gives the team evidence to adjust the story while change is still cheap.

                ## Milestones
                1. A short early-look deck built from the master page and cleared by counsel.
                2. The investor approach and any wall-crossing steps agreed with compliance.
                3. Every meeting debriefed against the highlights within a day.
                4. Story changes agreed from the debriefs before the analyst presentation.

                ## Notes
                Publicity and inside information rules apply to these meetings. Follow the bank's compliance process; the Wall Crossing and Compliance area covers it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Early-look meetings completed under compliance's process, with a debrief for each and agreed story changes recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build a short early-look deck from the master page"
                - "Agree the investor approach with compliance"
                - "Debrief each meeting against the highlights within a day"
                - "Agree story changes before the analyst presentation"
            - name: Analyst presentation storyline for research
              description: |-
                ## Purpose
                In many IPO markets the syndicate's research analysts hear the story first, at the analyst presentation, and their models shape how investors see the company during pre-deal education. Building that presentation's storyline from the master page, with the drivers laid out so analysts can model them, makes it more likely the research reflects the story management means to tell.

                ## Milestones
                1. A storyline for the analyst presentation drawn from the master page.
                2. Growth drivers presented so an analyst could model each one.
                3. The storyline checked against the draft prospectus by counsel.
                4. Analysts' follow-up questions logged and fed into the hard questions bank.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An analyst presentation storyline cleared by counsel, with every analyst follow-up question logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the analyst presentation storyline from the master page"
                - "Lay out the growth drivers so analysts can model them"
                - "Send the storyline to counsel to check against the prospectus"
                - "Log analysts' follow-up questions in the questions bank"
            - name: Locking the roadshow storyline
              description: |-
                ## Purpose
                By the roadshow, investors have read the research and the prospectus; the presentation is management's chance to tell the story in their own voice in 30 to 45 minutes. Locking the storyline, the slide order and the five numbers management must say aloud, and checking every slide against the prospectus, makes the roadshow add conviction without saying anything the documents do not.

                ## Milestones
                1. A storyline and slide order agreed with the CEO and CFO.
                2. Five numbers management will say aloud chosen from the master page.
                3. Every slide checked against the prospectus by counsel.
                4. The final deck locked and versioned before the first meeting.

                ## Notes
                Material information in the roadshow must also be in the prospectus. Counsel reviews every slide and every change after lock.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A locked roadshow deck, checked slide by slide against the prospectus by counsel, before the first investor meeting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the roadshow storyline and slide order with the CEO and CFO"
                - "Pick the five numbers management will say aloud"
                - "Have counsel check every slide against the prospectus"
                - "Lock and version the deck before the first meeting"
            - name: Teaser that states the story in two pages
              description: |-
                ## Purpose
                The teaser is the first time most buyers see the story, and many decide within minutes whether to sign an NDA. Writing it straight from the master page, with the positioning line, the highlights and three numbers, and checking the business cannot be identified in a no-names process, gives the whole process its first impression.

                ## Milestones
                1. A two-page teaser drafted from the master page.
                2. Three headline numbers chosen and tied to the fact base.
                3. An anonymity check done by someone outside the team for a no-names process.
                4. The teaser approved by the client and the deal lead.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page teaser built from the master page, anonymity checked where needed, and approved by the client."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the two-page teaser from the master page"
                - "Choose three headline numbers and tie them to the fact base"
                - "Ask someone outside the team to try to identify the company"
                - "Get client and deal lead approval on the teaser"
            - name: Announcement day messaging aligned with the story
              description: |-
                ## Purpose
                On announcement day, whether an intention to float or a signed sale, the press release, staff email, customer letter and media briefing all retell the story to new audiences at once. Drafting them from the master page with the client's PR adviser and counsel, and checking each against documents already released, keeps the public version consistent with what investors and buyers were told.

                ## Milestones
                1. A list of every announcement day message and its audience.
                2. Each message drafted from the master page with the PR adviser.
                3. All messages checked against released documents and approved by counsel.
                4. A release order and timing agreed with the client.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "All announcement day messages drafted from the master page, cleared by counsel and released in an agreed order."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every announcement day message and its audience"
                - "Draft each message from the master page with the PR adviser"
                - "Check all messages against released documents with counsel"
                - "Agree the release order and timing with the client"
            - name: Board approval of the story and targets
              description: |-
                ## Purpose
                Directors carry responsibility for what listing documents say, and many boards want to approve the equity story and medium-term targets formally before they are used externally. Preparing a short board paper with the story, the targets, the evidence and the main risks, and having the approval minuted, protects the client and the bank and settles debates that would otherwise reopen every week.

                ## Milestones
                1. A board paper of no more than six pages covering story, targets, evidence and risks.
                2. The paper sent to directors with time to read it before the meeting.
                3. Directors' questions answered and any changes made to the master page.
                4. The approval minuted by the company secretary.

                ## Notes
                Start from the **Board meeting** template. The company secretary and counsel decide what is minuted and how.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Minuted board approval of the equity story and medium-term targets, based on a written board paper."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the board meeting date with the company secretary"
                - "Draft a six-page board paper on the story and targets"
                - "Answer directors' questions and update the master page"
                - "Confirm the approval has been minuted"
            - name: Your first equity story as an analyst
              description: |-
                ## Purpose
                As an analyst on a first sale or listing, you build the fact base, the proof register and the consistency checks, and you see the story more closely than anyone. Learning what the seniors are trying to say, keeping the register clean and spotting the number that does not match turns analyst work into the story's quality control.

                ## Milestones
                1. The master page explained back to the associate in your own words.
                2. The proof point register kept current with the fact base each week.
                3. At least one inconsistency found and fixed before an external release.
                4. Three lessons on story work written down at the end of the deal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A current proof register kept through the deal and three written lessons reviewed with the associate at its end."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Explain the master page back to the associate in your own words"
                - "Reconcile the proof register with the latest fact base @recurring(weekly:wed)"
                - "Raise any mismatch you find with the associate the same day"
                - "Write three lessons on story work when the deal ends"
            - name: Owning the story master as an associate
              description: |-
                ## Purpose
                Associates usually hold the master page and the change log, which makes them the person every drafter asks when wordings differ. Agreeing what you may approve alone, setting a clear rule on who edits what and sending a short weekly note to the VP makes you the reliable centre of the story rather than its bottleneck.

                ## Milestones
                1. The changes you may approve alone agreed with the VP.
                2. Edit rights for the master page limited to named people.
                3. A weekly note of changes and open issues sent to the VP.
                4. No wording request left unanswered for more than a day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly note to the VP on story changes and open issues, with every wording request answered within a day."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree with the VP which changes you may approve alone"
                - "Limit edit rights on the master page to named people"
                - "Send the VP a note of story changes and open issues @recurring(weekly:fri)"
                - "Answer every wording request within a working day"
            - name: Senior bankers shaping the story with the CEO
              description: |-
                ## Purpose
                Vice presidents and managing directors earn their place in the story by telling the CEO what investors will not believe and finding the stronger claim underneath. Planning the two or three conversations where the senior team challenges management's favourite messages, and preparing evidence for each, moves the story from what management hopes to what buyers will pay for.

                ## Milestones
                1. The two or three management messages most likely to be doubted identified.
                2. Evidence and an alternative claim prepared for each.
                3. Each challenge conversation held with the CEO and the outcome recorded.
                4. The master page updated with what was agreed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Recorded outcomes of the senior team's challenge conversations with the CEO, reflected in the master page."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick the two or three management messages investors will doubt"
                - "Prepare evidence and a stronger alternative claim for each"
                - "Hold each challenge conversation with the CEO"
                - "Review open story challenges with the CEO @recurring(monthly:5)"
            - name: Equity story for a founder-led business
              description: |-
                ## Purpose
                Founder-led companies often have a strong story held in one person's head, thin evidence on paper and a question every buyer asks: what happens when the founder steps back. Building the story around the business rather than the founder, documenting the second-tier team and writing a clear answer on succession and the founder's role after the deal makes the company saleable.

                ## Milestones
                1. The story rewritten so that no highlight depends on the founder personally.
                2. The second-tier management team profiled with tenure and track record.
                3. The founder's role after the deal agreed and written down.
                4. A succession answer added to the hard questions bank.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A story whose highlights stand without the founder, with second-tier team profiles and an agreed post-deal founder role."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark every highlight that currently depends on the founder"
                - "Profile the second-tier managers with tenure and record"
                - "Agree the founder's post-deal role with the founder"
                - "Add a succession answer to the hard questions bank"
            - name: Equity story for a carve-out standing alone
              description: |-
                ## Purpose
                A division being sold or spun off has to tell a story it has never told: why it will do better outside the parent, what it loses in shared services and how its standalone margins compare. Writing a standalone story with an honest view of dis-synergies and a clear reason for the separation stops buyers assuming the parent is selling its weakest unit.

                ## Milestones
                1. A clear reason for the separation written in two sentences.
                2. Standalone margins and dis-synergies shown alongside the carve-out financials.
                3. Highlights rewritten so they stand without parent support.
                4. The story checked against the separation plan with the parent's team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A standalone story with a stated separation rationale and dis-synergies shown, checked against the separation plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the reason for separation in two sentences"
                - "Show standalone margins and dis-synergies beside the highlights"
                - "Rewrite highlights so none rely on parent support"
                - "Check the story against the separation plan with the parent"
            - name: Equity story for a loss-making growth company
              description: |-
                ## Purpose
                Growth companies that are not yet profitable need a story investors can follow to profit: unit economics by cohort, the point at which fixed costs are covered and the cash runway to get there. Showing that path with the company's own history rather than a hockey stick in year four separates a fundable growth story from a hopeful one.

                ## Milestones
                1. Unit economics shown by customer cohort from the company's own data.
                2. The revenue level at which fixed costs are covered calculated and explained.
                3. Cash runway under the plan and a downside case shown.
                4. The path to profit written as a short paragraph on the master page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A path-to-profit paragraph backed by cohort unit economics and runway under plan and downside, on the master page."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Chart unit economics by customer cohort"
                - "Calculate the revenue level that covers fixed costs"
                - "Show cash runway under the plan and a downside case"
                - "Write the path to profit as a short paragraph"
            - name: Equity story for a small regional market listing
              description: |-
                ## Purpose
                On a small exchange, such as one of the Caribbean stock exchanges, the buyers are mostly local pension funds, insurers and retail investors, and they want something different from a global growth pitch: dividend record, governance, local brand strength and liquidity. Fitting the story to that audience, and to the exchange's own rules on forecasts, makes the listing credible to the people who will actually buy the shares.

                ## Milestones
                1. The likely investor base described by type and rough size.
                2. Highlights reordered for local institutional and retail investors.
                3. The exchange's rules on forecasts and marketing checked with local counsel.
                4. A plain-language version of the story prepared for retail investors.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A story reordered for the local investor base, with a plain-language retail version cleared by local counsel."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Describe the likely local investor base by type and size"
                - "Reorder the highlights for local institutions and retail"
                - "Check the exchange's forecast and marketing rules with local counsel"
                - "Prepare a plain-language version for retail investors"
            - name: Dual-track story for a sale and an IPO at once
              description: |-
                ## Purpose
                Running a sale and an IPO in parallel means one story must work for trade buyers who will own the whole business and public investors who will own a slice: synergies matter to one, standalone growth and governance to the other. Building one master page with clearly marked audience sections, and deciding which numbers both tracks share, keeps both credible until the client chooses.

                ## Milestones
                1. Core highlights and numbers shared by both tracks marked on the master page.
                2. Audience-specific sections drafted for trade buyers and public investors.
                3. Disclosure differences between the tracks reviewed by counsel.
                4. A comparison of how each track's story is landing prepared for the client's decision.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dual-track master page with shared and audience-specific sections, reviewed by counsel, and a comparison for the client."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark the highlights and numbers both tracks must share"
                - "Draft the trade buyer and public investor sections"
                - "Ask counsel to review disclosure differences between tracks"
                - "Compare how each track's story is landing for the client"
            - name: Story against delivery a year after the deal
              description: |-
                ## Purpose
                Twelve months after closing or listing, results show which parts of the story held: whether growth came from the drivers named, whether targets were met and whether the weaknesses mattered. Comparing published results with the original master page and writing three lessons for the group makes the next story better and shows clients the bank remembers what it said.

                ## Milestones
                1. The original master page set beside the first year of results.
                2. Each highlight and target marked as delivered, partly delivered or missed.
                3. Three lessons written for the group and shared at a team meeting.

                ## Notes
                Use only public information for listed companies. For private sales, use only what the client has shared and agreed you may use.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page review marking each highlight and target against first-year results, with three lessons shared with the group."
                cadence: cyclic
              tasks:
                - "Set the original master page beside first-year results"
                - "Mark each highlight and target as delivered, partial or missed"
                - "Ask the agent to draft three lessons from the comparison"
                - "Check the latest published results against the story @recurring(quarterly)"
            - name: Group equity story playbook and example library
              description: |-
                ## Purpose
                Groups that run several sales or listings a year rebuild the same method each time: workshop questions, highlight scoring, the proof register and the consistency checklist. Keeping a short playbook and a library of sanitised example stories, refreshed each quarter, lets new deal teams start in a day and holds the group to one standard.

                ## Milestones
                1. Workshop guide, scoring sheet and checklists collected from recent deals.
                2. Client names and confidential numbers removed from every example.
                3. A playbook of no more than five pages written and approved by a managing director.
                4. The library refreshed each quarter with new deals.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-page playbook and a sanitised example library, approved by a managing director and refreshed quarterly."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Collect the workshop guide, scoring sheet and checklists from recent deals"
                - "Remove client names and confidential numbers from each example"
                - "Write a five-page playbook and send it to an MD for approval"
                - "Refresh the playbook and library with new deals @recurring(quarterly)"
---

# Equity Story Development

The equity story is the argument for why a business is worth buying, told in a teaser, an information memorandum, a management presentation, a prospectus and a roadshow, and it only works if every one of those documents tells it the same way. This area starts with foundations (a study of past stories, the brief, the fact base, the management workshop, the highlights, the proof point register and the one-page master), then the weekly and monthly routines that keep the story consistent, the skills behind growth drivers, competitive position and targets, the framing decisions, the dated moments from teaser to roadshow, variants for analysts, associates, senior bankers and unusual companies, and specialist work such as dual-track stories and a group playbook.

What repeats is weekly while a deal is live: a Monday change note, a Tuesday CFO call, a Wednesday weakness review, a Thursday consistency check and a Friday look at buyer and investor feedback, with monthly KPI and trading refreshes and quarterly upkeep of peer watching and the playbook. The **Meeting notes**, **Operational checklist**, **Metrics log**, **Feedback themes**, **Risk register** and **Board meeting** templates pair with the management workshop, the consistency check, the KPI refresh, the feedback log, the weakness register and board approval. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
