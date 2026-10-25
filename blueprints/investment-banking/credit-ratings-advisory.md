---
id: investment-banking.credit-ratings-advisory
name: Credit Ratings Advisory
description: "Ratings advisory from the banker's seat: agency methodologies and adjusted metrics, headroom tracking, rating presentations, pro forma deal impact and the specialist cases that decide a client's cost of debt."
category: business
version: 1.0.0
tags: [investment-banking, credit-ratings-advisory, knowledge-worker, credit-ratings, rating-agencies, credit-metrics, investment-grade, rating-presentation]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - metrics-log
    - meeting-notes
    - risk-register
    - operational-checklist
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Credit Ratings Advisory
          description: "Advising a company on its credit rating: agency methodologies, rating presentations, metric targets and how a deal will affect the rating."
          projects:
            - name: Rating scales, outlooks and watch placements reference
              description: |-
                ## Purpose
                Agencies use different symbols, different outlook horizons and different meanings for a watch placement, and a client CFO will ask what each one means for refinancing costs. A one-page reference you have built yourself, covering long-term and short-term scales, the investment grade line, outlooks, watches and the gap between issuer and issue ratings, stops you guessing in front of a client.

                ## Milestones
                1. Long-term and short-term scales for the main agencies set side by side, with the investment grade boundary marked.
                2. Outlook and watch definitions written in plain words, including the typical horizon each agency publishes.
                3. The difference between an issuer rating, an instrument rating and a recovery rating explained in two sentences each.
                4. The reference saved as a single page you can bring to a client meeting.

                ## Notes
                Copy definitions from each agency's published rating definitions document, not from secondary sources, and note the publication date on the page.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated one-page reference covering scales, outlooks, watches and issuer versus issue ratings for at least two agencies exists and has been checked by a senior colleague."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the current rating definitions document from two agencies"
                - "Lay out the long-term and short-term scales side by side in one table"
                - "Write outlook and watch definitions with their published horizons"
                - "Ask a senior colleague to check the page for errors"
            - name: Agency methodology library for your coverage sectors
              description: |-
                ## Purpose
                Each agency publishes a general corporate methodology plus sector criteria, and they are revised often enough that last year's printout can mislead you. Building a library of the current documents for the sectors you cover, with the key factors and thresholds pulled out, means you can answer a client's question with the page number rather than a memory.

                ## Milestones
                1. Current general corporate criteria and sector methodologies saved for every sector you cover.
                2. Each document logged with its publication date and the date it replaced the previous version.
                3. Key factors, weightings where published and metric thresholds extracted into a summary sheet per sector.
                4. A yearly refresh date set for the whole library.

                ## Notes
                Start from the **Reading queue** template. Keep public methodologies separate from any non-public feedback an agency gives on a client.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library holding current methodologies for every covered sector, each with a dated summary sheet of factors and thresholds."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the sectors you cover and the agencies that rate clients in them"
                - "Download the current general corporate and sector methodologies"
                - "Pull the key factors and metric thresholds into one summary sheet per sector"
                - "Refresh the whole methodology library against agency websites @recurring(yearly)"
            - name: Adjusted credit metrics workbook in the agency style
              description: |-
                ## Purpose
                Reported net debt and EBITDA rarely match what an agency uses, because agencies add leases, pension deficits, part of hybrid capital and sometimes guarantees, and subtract only accessible cash. A workbook that takes a company's reported numbers and produces agency-adjusted debt, EBITDA, funds from operations and coverage ratios is the core tool of ratings advisory, and every later project uses it.

                ## Milestones
                1. A template workbook that starts from reported financial statements and lists each agency adjustment on its own line.
                2. Adjusted debt to EBITDA, funds from operations to debt and interest coverage calculated for at least two agencies' definitions.
                3. The workbook tested on a public rated company and reconciled within a reasonable margin to the agency's published metrics.
                4. A notes tab explaining every adjustment and its source in the methodology.

                ## Notes
                Agencies publish adjusted metrics in their reports on public issuers, so test your build against those before trusting it on a client.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The workbook reproduces a public issuer's published adjusted gearing ratio for two agencies within a margin you record, with each adjustment sourced."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Pick a public rated company whose agency reports show adjusted metrics"
                - "Build reported to adjusted debt bridges line by line for two agencies"
                - "Calculate adjusted gearing, cash flow and coverage ratios"
                - "Reconcile your results to the published figures and note the gaps"
            - name: Peer rating map for a client's sector
              description: |-
                ## Purpose
                Clients judge their own rating against competitors, so the first question in most mandates is where they sit and why. A map of rated peers showing rating, outlook, adjusted gearing, scale and business profile turns a vague sense of unfairness into a specific argument about which factors explain the gap.

                ## Milestones
                1. Eight to fifteen rated peers chosen with a written reason for each inclusion.
                2. Each peer's ratings, outlooks and last rating action date recorded for every agency that rates it.
                3. Adjusted gearing and two other key metrics plotted against rating on a single page.
                4. Outliers identified and the reason for each explained from published reports.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page peer map of at least eight rated companies, with metrics, ratings and an explanation for every outlier."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List rated peers by size, geography and business mix"
                - "Record each peer's ratings, outlooks and last action date"
                - "Plot adjusted gearing against rating for the peer set"
                - "Refresh peer ratings and metrics on the map @recurring(quarterly)"
            - name: Client rating history and action file
              description: |-
                ## Purpose
                Before advising on what the rating could become, you need to know what it has been and why it moved. A file of every rating action on the client, the stated rationale, the listed upgrade and downgrade triggers and the outlook history shows the agency's own reasoning, which is the best predictor of how it will read the next deal.

                ## Milestones
                1. Every rating action for the past ten years listed by agency, date and rating.
                2. The rationale and stated sensitivities for each action summarised in one or two lines.
                3. The current upgrade and downgrade triggers copied verbatim from the latest reports.
                4. A short timeline page showing how actions lined up with deals and results.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated file listing all rating actions on the client over ten years with rationales and the current published triggers for each agency."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the rating action history for the client from each agency"
                - "Summarise the rationale and sensitivities for each action"
                - "Copy the current upgrade and downgrade triggers into one table"
                - "Mark deals and results announcements on the action timeline"
            - name: Ratings advisory engagement scope and checklist
              description: |-
                ## Purpose
                Ratings work is often bundled loosely into a financing or M&A mandate, and loose scope leads to disputes about who prepares the presentation, who talks to the agency and what the bank is paid for. Writing a standard scope checklist covering deliverables, agency contact, information handling and conflicts makes every new engagement start on the same footing.

                ## Milestones
                1. A checklist of scope items: analysis, presentation, rehearsals, agency liaison and follow-up.
                2. Conflict and independence questions noted for review with compliance on each new engagement.
                3. The bank's standard engagement letter terms for ratings work identified with legal or the deal team.
                4. The checklist used on one live engagement and revised afterwards.

                ## Notes
                Start from the **Operational checklist** template. Fee and liability terms are for the bank's legal team to set; the checklist only makes sure they are raised.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written scope checklist approved by a senior banker and used on at least one engagement, with changes recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect two past ratings advisory engagement letters from the deal team"
                - "List deliverables, agency contact rules and information handling steps"
                - "Add the conflict questions compliance needs answered"
                - "Ask a senior banker to approve the scope checklist"
            - name: Agency analyst and review calendar map
              description: |-
                ## Purpose
                Knowing which analyst covers a client, who chairs the sector, and when the annual review usually happens lets you time advice instead of reacting to it. A map per client of agency contacts, typical review months and reporting dates means the rating conversation starts months ahead of the meeting.

                ## Milestones
                1. Lead and backup analysts recorded for each agency rating each covered client.
                2. Typical annual review months noted from the past three years of reports.
                3. Each client's results dates and planned financing windows added beside the review months.
                4. Gaps flagged where a deal or results date lands close to an expected review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar for every covered client showing agency analysts, expected review months and results dates, with clashes flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the analysts named on each client's latest agency reports"
                - "Work out typical review months from three years of reports"
                - "Add results dates and expected financings to the calendar"
                - "Update analyst names and review months for every client @recurring(yearly)"
            - name: Rating factor scorecard replication for one issuer
              description: |-
                ## Purpose
                Scorecards translate scale, business profile, gearing and financial policy into an indicated rating, and the gap between the scorecard outcome and the actual rating is where the agency's judgement sits. Replicating one public issuer's scorecard factor by factor teaches you how much each lever moves the result before you try it on a client.

                ## Milestones
                1. A public issuer chosen whose agency report discloses its scorecard or factor assessments.
                2. Each factor scored from public data using the published grid.
                3. The indicated outcome compared with the actual rating and the gap explained.
                4. A short note on which two factors would move the outcome most.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A replicated scorecard for one public issuer with every factor sourced and the gap to the actual rating explained in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a public agency report that shows factor assessments"
                - "Score each factor from the issuer's published financials"
                - "Compare the indicated outcome with the actual rating"
                - "Write which factors would move the outcome by a notch"
            - name: Information handling rules for agency submissions
              description: |-
                ## Purpose
                Anything a client gives an agency, such as forecasts, acquisition plans or draft financing terms, is usually non-public, and the bank adviser sits in the middle of that flow. Agreeing in writing what goes to the agency, through whom, under which confidentiality terms and how it is logged keeps the client and the bank out of trouble.

                ## Milestones
                1. The client's existing confidentiality arrangements with each agency identified.
                2. A rule agreed on who sends material to agencies and how each submission is logged.
                3. Compliance consulted on how agency submissions interact with the bank's inside information procedures.
                4. A submission log started for the current engagement.

                ## Notes
                The bank's compliance team decides how inside information is handled; this project only makes sure ratings material is routed through those rules.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written information handling rule for agency submissions, reviewed by compliance, with a submission log in use on the engagement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the client which confidentiality terms it has with each agency"
                - "Draft a rule for who sends what to agencies and how it is logged"
                - "Review the draft rule with the compliance team"
                - "Start a submission log on the bank's system for the engagement"
            - name: Monthly methodology and criteria watch
              description: |-
                ## Purpose
                Agencies revise criteria, publish requests for comment and change how they treat leases, hybrids or sector risk with a few weeks' notice, and a criteria change can move a client a notch without any change in the business. A monthly check of every agency's criteria page catches these early enough to warn clients.

                ## Milestones
                1. Each agency's criteria and request for comment pages bookmarked.
                2. A short log of new, revised and proposed criteria kept month by month.
                3. Any change affecting a covered client flagged to the coverage banker within a week.
                4. Superseded documents replaced in the methodology library.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log of criteria changes for at least twelve months, with every client-relevant change flagged within a week of publication."
                cadence: rolling
              tasks:
                - "Bookmark each agency's criteria and request for comment pages"
                - "Check each agency's criteria page for new or revised methodologies @recurring(monthly:9)"
                - "Flag changes that affect covered clients to the coverage banker"
                - "Replace superseded documents in the methodology library"
            - name: Quarterly downgrade threshold tracker for covered clients
              description: |-
                ## Purpose
                Most rating reports say plainly what would trigger a downgrade, usually a gearing or cash flow ratio held beyond a threshold for a period. Tracking each covered client's adjusted metrics against those published thresholds every quarter turns ratings advice from a reaction into an early warning.

                ## Milestones
                1. Published downgrade and upgrade thresholds recorded for each covered client and agency.
                2. Adjusted metrics updated from the latest results each quarter.
                3. Clients within a set margin of a threshold highlighted in red.
                4. A short note sent to the coverage banker for each client that moved closer to a trigger.

                ## Notes
                Start from the **Metrics log** template. Agencies look at forward metrics as well as historical ones, so add the client's guidance or consensus where public.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker updated within three weeks of every quarterly result, showing each client's adjusted metrics against published thresholds."
                cadence: cyclic
              tasks:
                - "Record published thresholds for each client and agency in one tracker"
                - "Update adjusted metrics against thresholds after quarterly results @recurring(quarterly)"
                - "Highlight clients within your set margin of a trigger"
                - "Send the coverage banker a note on any client that moved closer"
            - name: Weekly rating action log for coverage sectors
              description: |-
                ## Purpose
                Rating actions on peers tell you how an agency is thinking about a sector before it touches your client. A weekly log of upgrades, downgrades, outlook changes and watch placements in your coverage sectors, with the stated reason, builds the pattern you need when a client asks whether it is next.

                ## Milestones
                1. A source for rating actions in each coverage sector set up, such as agency alerts or a market data terminal.
                2. Every action logged with issuer, agency, old and new rating and one line of rationale.
                3. Sector patterns summarised in a few lines at the end of each month.
                4. Relevant actions passed to coverage bankers with a suggested client angle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log covering at least six months of rating actions in your sectors, with a monthly summary of patterns."
                cadence: rolling
              tasks:
                - "Set up rating action alerts for your coverage sectors"
                - "Log the week's rating actions with a line of rationale each @recurring(weekly:fri)"
                - "Write a monthly summary of sector rating patterns"
                - "Pass relevant peer actions to coverage bankers with a client angle"
            - name: Annual agency review cycle for each client
              description: |-
                ## Purpose
                Every rated client goes through at least one agency review a year, and the quality of that meeting depends on work that starts two or three months earlier. Running the cycle the same way each year, with a kick-off, updated analysis, presentation, rehearsal and follow-up, stops the review becoming a scramble in the final fortnight.

                ## Milestones
                1. A standard timeline from kick-off to follow-up set for each client's review.
                2. Updated peer map, metrics and headroom analysis ready six weeks before the meeting.
                3. The presentation, rehearsal and follow-up steps completed on time.
                4. A short lessons note filed after each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each covered client's annual review run on the standard timeline, with analysis ready six weeks ahead and a lessons note filed afterwards."
                cadence: cyclic
              tasks:
                - "Write the standard review timeline from kick-off to follow-up"
                - "Check which client reviews start within the next ten weeks @recurring(monthly:3)"
                - "Roll the review timeline forward for every client @recurring(yearly)"
                - "File a lessons note after each review meeting"
            - name: Rating headroom dashboard per client
              description: |-
                ## Purpose
                Headroom is how far a client's metrics can move before the rating comes under pressure, and it is the number a CFO most wants before a deal, a buyback or a bad year. A one-page dashboard per client showing headroom under each agency's thresholds, in both ratio terms and in currency of extra debt or lost EBITDA, gives that answer in a sentence.

                ## Milestones
                1. Headroom calculated for each agency's key thresholds for every covered client.
                2. Headroom expressed as extra debt capacity and as EBITDA that could be lost before a threshold.
                3. Forward headroom shown using guidance or consensus where public.
                4. The dashboard refreshed each quarter and shared with the coverage banker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page headroom dashboard per covered client, refreshed each quarter, showing headroom in ratio and currency terms."
                cadence: rolling
              tasks:
                - "Calculate headroom to each agency's key thresholds for one client"
                - "Express headroom as extra debt capacity and as EBITDA at risk"
                - "Refresh every client's headroom dashboard after results @recurring(quarterly)"
                - "Share each refreshed dashboard with the coverage banker"
            - name: Request for comment response tracker
              description: |-
                ## Purpose
                When agencies propose criteria changes they invite comments, and a client that will be hit by a change may want to respond through the formal process. Tracking open consultations, their deadlines and the likely effect on each client lets the bank raise them in time rather than after the criteria are final.

                ## Milestones
                1. Every open agency consultation listed with its comment deadline.
                2. The likely effect on each affected client estimated in a sentence or two.
                3. Clients told about relevant consultations with time to decide whether to respond.
                4. Final criteria compared with the proposal once published.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker listing every open consultation with deadline and client impact, with affected clients told at least three weeks before the comment deadline."
                cadence: rolling
              tasks:
                - "List open agency consultations and their comment deadlines"
                - "Review open consultations and update client impact notes @recurring(monthly:17)"
                - "Tell affected clients in time for them to decide on a response"
                - "Compare final criteria with the original proposal once published"
            - name: Post-results credit read for covered clients
              description: |-
                ## Purpose
                Quarterly results are the moment when an agency analyst updates a view, and an adviser who has already read the numbers the agency way can call the client first. A short credit read after each set of results, covering adjusted metrics, cash flow, liquidity and anything that touches a published trigger, keeps the rating conversation current.

                ## Milestones
                1. A one-page credit read template with metrics, liquidity and trigger sections.
                2. A credit read written within a week of each covered client's results.
                3. Any trigger-relevant change discussed with the coverage banker.
                4. Credit reads filed by client so trends are visible over several quarters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page credit read filed within a week of each covered client's quarterly results for four consecutive quarters."
                cadence: cyclic
              tasks:
                - "Draft a one-page credit read template"
                - "Write a credit read for each covered client after results @recurring(quarterly)"
                - "Ask the agent to draft the summary paragraph from your metrics table"
                - "File each read by client so quarter-on-quarter trends show"
            - name: Yearly sector rating outlook digest
              description: |-
                ## Purpose
                Once a year each agency publishes a sector outlook setting out the share of issuers with negative outlooks, the main risks and what would change its view. Pulling those outlooks into one digest for your coverage sectors gives you the backdrop for every rating conversation in the coming year.

                ## Milestones
                1. Each agency's annual outlook for your coverage sectors collected.
                2. The main risks, outlook distribution and stated sensitivities summarised per sector.
                3. Points of agreement and disagreement between agencies noted.
                4. The digest shared with the coverage team at the start of the year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A digest of agency sector outlooks for every coverage sector, shared with the coverage team within a month of the outlooks being published."
                cadence: cyclic
              tasks:
                - "Collect each agency's sector outlook for your coverage sectors"
                - "Summarise risks, outlook mix and sensitivities for each sector"
                - "Write the sector outlook digest and share it with coverage @recurring(yearly)"
                - "Note where agencies disagree on a sector's direction"
            - name: Rating-driven client idea pipeline
              description: |-
                ## Purpose
                Rating situations create work: a client near a downgrade threshold may need a hybrid or an asset sale, and a client with spare headroom may be able to fund an acquisition or a return of capital. A pipeline of ideas sourced from headroom and rating actions gives coverage bankers a reason to call that is specific to the client.

                ## Milestones
                1. A pipeline list with client, rating situation, idea and owner.
                2. Ideas sourced each month from the headroom dashboard and rating action log.
                3. Each idea taken to a coverage banker with a one-page backup.
                4. Outcomes recorded, including ideas that went nowhere and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline with at least six rating-driven ideas taken to coverage bankers in a year, each with its outcome recorded."
                cadence: rolling
              tasks:
                - "Start a pipeline list of client, rating situation, idea and owner"
                - "Source new ideas from headroom and the action log @recurring(monthly:24)"
                - "Prepare a one-page backup for the strongest idea"
                - "Record the outcome of each idea taken to coverage"
            - name: Reading an agency rating report end to end
              description: |-
                ## Purpose
                A full rating report has a rationale, a factor discussion, liquidity, a base case, sensitivities and adjustments, and each section tells you something the press release leaves out. Reading reports systematically, one a month, with a short template of what to extract, builds the instinct for how analysts think.

                ## Milestones
                1. A one-page extraction template covering rationale, base case, triggers, liquidity and adjustments.
                2. Three reports read and extracted in the first month, across different agencies.
                3. One report a month read after that, alternating sectors.
                4. A note of recurring phrases and what each signals about the analyst's view.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least twelve rating reports extracted on the template within a year, across at least two agencies and three sectors."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft the one-page report extraction template"
                - "Read and extract three reports from different agencies"
                - "Read and extract one agency rating report @recurring(monthly:12)"
                - "Keep a list of recurring phrases and what they signal"
            - name: Agency debt adjustments for leases, pensions and guarantees
              description: |-
                ## Purpose
                Leases, pension deficits, guarantees, factoring and contingent liabilities can add a turn or more to adjusted gearing, and a CFO who reads only reported net debt will be surprised. Working through each adjustment in the methodology, with a worked example for a public company, is how you learn to explain the gap in a sentence.

                ## Milestones
                1. Each agency's treatment of leases, pensions, guarantees and receivables financing summarised.
                2. A worked example built for each adjustment from a public company's accounts.
                3. Differences between agencies noted where the same item is treated differently.
                4. A two-minute explanation of the adjustments rehearsed for client meetings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worked examples for at least four debt adjustments, with agency differences documented and a client explanation rehearsed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find each agency's guidance on leases, pensions and guarantees"
                - "Build a worked lease and pension adjustment from public accounts"
                - "Note where two agencies treat the same item differently"
                - "Rehearse a two-minute explanation of the adjustments aloud"
            - name: Cash flow ratios beyond debt to EBITDA
              description: |-
                ## Purpose
                Cash flow measures such as funds from operations to debt, retained cash flow to debt and free cash flow to debt often matter more to an agency than the debt to EBITDA multiple bankers default to. Learning how each is built, which agencies weight which, and how working capital and dividends move them, lets you advise on the metric that will actually be tested.

                ## Milestones
                1. Definitions of the main cash flow ratios written out for each agency.
                2. Each ratio calculated for one public issuer across three years.
                3. The effect of a dividend increase and a working capital swing tested on the ratios.
                4. A short guide saved on which ratio leads in each of your coverage sectors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three years of cash flow ratios calculated for one public issuer, with dividend and working capital sensitivities and a sector guide written."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write out each agency's definition of its main cash flow ratios"
                - "Calculate the ratios for a public issuer over three years"
                - "Test how a dividend increase moves each ratio"
                - "Note which ratio leads in each coverage sector"
            - name: Hybrid capital equity credit mechanics
              description: |-
                ## Purpose
                Hybrid instruments can receive partial equity credit, which reduces adjusted debt, but only if features such as deferral, subordination, maturity and replacement language meet each agency's criteria. Understanding these mechanics lets you explain what a hybrid can and cannot do for a rating before a client asks the debt capital markets team to price one.

                ## Milestones
                1. Each agency's equity credit categories and required features summarised.
                2. Two recent public hybrid issues reviewed with the equity credit each received.
                3. Events that can remove equity credit, such as call dates and step-ups, listed.
                4. A one-page explainer for clients on hybrid equity credit drafted.

                ## Notes
                Pricing, structuring and distribution of the hybrid itself belong to the capital markets team; this project covers only the rating treatment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page client explainer on hybrid equity credit, backed by two reviewed public examples and each agency's criteria."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise each agency's hybrid equity credit criteria"
                - "Review two recent public hybrid issues and their equity credit"
                - "List the events that can remove equity credit"
                - "Draft a one-page client explainer on hybrid treatment"
            - name: Instrument notching for subordination and structure
              description: |-
                ## Purpose
                Instrument ratings can sit above or below the issuer rating depending on security, subordination and where debt sits in the group. Learning how each agency notches senior secured, unsecured, subordinated and holding company debt helps you tell a client what rating a new instrument will carry, not just the company.

                ## Milestones
                1. Each agency's notching approach for investment grade and sub-investment grade issuers summarised.
                2. Structural subordination at holding company level explained with a group chart example.
                3. Three public examples found where instrument and issuer ratings differ, with the reason.
                4. A notching quick-reference page saved.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notching quick-reference page covering at least two agencies, supported by three public examples of instrument ratings differing from issuer ratings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise each agency's notching rules by rating category"
                - "Draw a group chart showing structural subordination"
                - "Find three public cases where instrument and issuer ratings differ"
                - "Save a notching quick-reference page"
            - name: Government links and the sovereign ceiling
              description: |-
                ## Purpose
                Companies owned by or closely tied to a government, and companies in lower-rated countries, are rated with extra steps: support assumptions, the sovereign rating and country ceilings. Learning how agencies assess government support and when a company can be rated above its sovereign is essential for any client in an emerging or smaller market.

                ## Milestones
                1. Each agency's approach to government-related issuers summarised in a page.
                2. Country ceiling and above-sovereign criteria noted for the main agencies.
                3. Two public examples worked through, one with uplift for support and one capped by the sovereign.
                4. A list kept of covered clients where these criteria apply.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of government support and sovereign ceiling criteria, with two worked public examples and a list of affected clients."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read each agency's criteria for government-related issuers"
                - "Note when an issuer can be rated above its sovereign"
                - "Work through one uplifted and one capped public example"
                - "List covered clients where these criteria apply"
            - name: Liquidity assessment the agency way
              description: |-
                ## Purpose
                Liquidity is often the factor that turns a stable outlook negative, because agencies compare sources against uses over the next twelve to twenty-four months, including covenant headroom and bank line maturities. Building that sources and uses table for a client before the agency does shows whether a refinancing or a new facility needs to come first.

                ## Milestones
                1. Each agency's liquidity categories and their sources and uses definitions summarised.
                2. A sources and uses template built for a twelve and twenty-four month horizon.
                3. The template run on a public issuer and compared with the agency's published liquidity view.
                4. Covenant headroom and facility maturities included as separate lines.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A sources and uses liquidity template tested on a public issuer and matching the agency's published liquidity category."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise each agency's liquidity categories and definitions"
                - "Build a twelve and twenty-four month sources and uses template"
                - "Run the template on a public issuer and compare the result"
                - "Add covenant headroom and facility maturity lines"
            - name: Writing the business risk argument
              description: |-
                ## Purpose
                Numbers drive half a rating, while scale, diversification, market position and earnings stability drive the rest, and management often undersells them. Practising how to write a business risk argument that maps each strength to a named methodology factor, with evidence, is what makes a rating presentation persuasive rather than promotional.

                ## Milestones
                1. The business risk factors in one sector methodology listed with their assessment levels.
                2. A two-page business risk section drafted for a public company, each claim tied to a factor.
                3. Evidence for each claim sourced: market share, contract length, customer concentration.
                4. The draft reviewed by a senior colleague and rewritten once.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A two-page business risk section for a public company, every claim mapped to a methodology factor with evidence, reviewed by a senior colleague."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the business risk factors in one sector methodology"
                - "Draft a two-page business risk section for a public company"
                - "Source evidence for each claim in the draft"
                - "Ask a senior colleague to review and mark up the draft"
            - name: Target rating decision with the CFO
              description: |-
                ## Purpose
                Choosing a target rating is a board-level trade-off between cost of debt, access to markets in a downturn and the freedom to do deals or pay shareholders. Laying out what each rating level would mean for borrowing costs, debt capacity and financial policy lets the CFO and board make that choice on paper, with the bank's analysis behind it.

                ## Milestones
                1. Two or three candidate rating levels set out with the metric ranges each implies.
                2. Debt capacity and indicative funding cost differences shown for each level.
                3. Implications for dividends, buybacks and acquisition capacity written in plain words.
                4. The board's chosen target and rationale recorded.

                ## Notes
                The bank presents trade-offs; the target is the board's decision. Indicative funding costs should come from the capital markets desks, with dates.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A paper comparing at least two target rating levels on debt capacity, funding cost and policy limits, with the board's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Set out the metric ranges for each candidate rating level"
                - "Ask the capital markets desks for dated indicative funding costs"
                - "Write the policy implications of each rating level"
                - "Record the board's chosen target and the rationale"
            - name: One, two or three agencies decision
              description: |-
                ## Purpose
                Some investors require two ratings, some indices need them, and every extra agency brings fees, annual meetings and another view that can diverge. Comparing the investor base, index eligibility, cost and management time for one, two or three agencies helps a client decide how many to hire or keep.

                ## Milestones
                1. The client's target investor base and their rating requirements identified.
                2. Index and eligibility rules relevant to the client's debt checked.
                3. Fees and management time for each agency estimated from the client's experience or quotes.
                4. A recommendation on the number of agencies written and agreed with the client.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of one, two and three agency options with investor, index and cost evidence, and the client's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the debt syndicate desk which investors need two ratings"
                - "Check index eligibility rules for the client's bonds"
                - "Estimate fees and management time per agency"
                - "Write the recommendation and agree it with the client"
            - name: Pro forma rating impact of an acquisition
              description: |-
                ## Purpose
                Acquisitions are the most common reason a client calls about its rating, because they add debt, change the business mix and test financial policy at once. A pro forma analysis of adjusted metrics, deleveraging path and likely agency reaction, built before the bid, lets the client size the debt and equity mix to the rating it wants to keep.

                ## Milestones
                1. Pro forma adjusted metrics calculated for the combined group under the planned funding mix.
                2. A deleveraging path over two to three years built from the combined plan.
                3. Business risk changes from the deal assessed against the methodology.
                4. Alternative funding mixes shown with their likely metric outcomes.

                ## Notes
                Work on the bank's systems under the deal's information barrier; the merger model itself sits with the M&A team.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A pro forma rating analysis showing adjusted metrics, a deleveraging path and at least two funding mixes, delivered before the bid is submitted."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Get the combined plan and funding mix from the M&A team"
                - "Calculate pro forma adjusted metrics for the combined group"
                - "Build the two to three year deleveraging path"
                - "Show two alternative funding mixes and their metric outcomes"
            - name: Rating impact of a shareholder return programme
              description: |-
                ## Purpose
                Buybacks and special dividends are funded by debt or by cash that could have repaid debt, and agencies watch financial policy closely after an announcement. Showing a client how a return programme moves headroom, and what language in its financial policy would reassure the agencies, helps it return capital without an outlook change.

                ## Milestones
                1. Headroom before and after the programme calculated for each agency.
                2. Timing options shown, such as phasing the programme against cash flow.
                3. Draft financial policy wording that commits to a gearing range prepared for the client.
                4. The client's chosen size and phasing recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An analysis of headroom before and after a proposed return programme, with phasing options and draft policy wording, and the client's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Calculate headroom before and after the proposed programme"
                - "Model two phasing options against forecast cash flow"
                - "Draft financial policy wording on a gearing range"
                - "Record the client's chosen size and phasing"
            - name: Deleveraging plan to restore a rating
              description: |-
                ## Purpose
                After a downgrade or a negative outlook, agencies want to see a credible path back, with named actions and dates rather than hope. Building a deleveraging plan with asset sales, capex and dividend choices and a timeline that management can commit to publicly gives the agency something to rate.

                ## Milestones
                1. The metric gap to the previous rating or a stable outlook quantified for each agency.
                2. A list of deleveraging actions sized and dated, with the client's owner for each.
                3. A metric path showing when thresholds are met under base and downside cases.
                4. Progress checked monthly against the plan and shared with the client.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dated deleveraging plan with sized actions and base and downside metric paths, with progress checked monthly for at least six months."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Quantify the metric gap to a stable outlook for each agency"
                - "Size and date each deleveraging action with an owner"
                - "Build base and downside metric paths to the thresholds"
                - "Check deleveraging progress against the plan with the client @recurring(monthly:20)"
            - name: Rating evaluation service request preparation
              description: |-
                ## Purpose
                Several agencies offer a confidential evaluation service that gives a client an indicative view on a hypothetical transaction before it is announced. Preparing the submission well, with a clear scenario, the pro forma numbers and the questions you want answered, gets a useful answer instead of a hedged one.

                ## Milestones
                1. The hypothetical scenarios to be evaluated defined in writing with the client.
                2. Submission material prepared with pro forma metrics and business changes.
                3. Specific questions for the agency written, such as rating level and outlook under each scenario.
                4. The agency's indicative response recorded and its conditions noted.

                ## Notes
                Evaluation service outcomes are confidential and conditional; treat them as non-public information under the bank's procedures.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An evaluation service submission with defined scenarios and questions, and the agency's indicative response recorded with its conditions."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Define the hypothetical scenarios with the client in writing"
                - "Prepare pro forma metrics for each scenario"
                - "Write the specific questions the agency should answer"
                - "Record the indicative response and its conditions"
            - name: Financial policy statement for a rated client
              description: |-
                ## Purpose
                Agencies give credit for a clear, public financial policy: a gearing range, a dividend approach and a commitment on acquisitions, as long as management sticks to it. Helping a client draft a policy it will actually follow often does more for the rating than a single debt reduction.

                ## Milestones
                1. The client's current stated financial policy and its track record against it reviewed.
                2. Peer financial policies compared for the same rating level.
                3. Draft policy wording prepared covering gearing, dividends, buybacks and acquisitions.
                4. The final policy approved by the client's board and published or shared with agencies.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A financial policy statement drafted with peer comparisons and approved by the client's board."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Review the client's current policy and its track record"
                - "Compare peer financial policies at the same rating level"
                - "Draft policy wording on gearing, dividends and acquisitions"
                - "Send the draft to the CFO for board review"
            - name: Funding mix options compared on rating impact
              description: |-
                ## Purpose
                Funding a need with senior debt, hybrid capital, equity, asset sales or a mix produces very different adjusted metrics, and clients often see only the cost side. A side-by-side comparison of each option's rating effect, alongside indicative cost from the capital markets teams, makes the trade-off visible.

                ## Milestones
                1. Three to five funding options defined for the client's need.
                2. Adjusted metrics calculated for each option, including equity credit where relevant.
                3. Indicative costs added from the relevant capital markets teams, dated.
                4. A one-page comparison presented to the client.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A one-page comparison of at least three funding options showing adjusted metrics and dated indicative costs, presented to the client."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Define three to five funding options with the deal team"
                - "Calculate adjusted metrics for each option"
                - "Collect dated indicative costs from capital markets teams"
                - "Build a one-page comparison for the client"
            - name: First rating process for an unrated issuer
              description: |-
                ## Purpose
                An unrated company seeking its first rating has to choose agencies, build a presentation from scratch, open its books to strangers and live with the result publicly. Running the process as a planned project, from agency selection through the meeting to the decision on publishing, keeps a first-time issuer from being surprised.

                ## Milestones
                1. Agencies selected and engagement letters signed by the client.
                2. Information package and rating presentation prepared and approved by the client.
                3. Management meeting held and follow-up questions answered.
                4. The rating outcome received and the publication decision made.

                ## Notes
                First-time issuers often underestimate how much historical data agencies ask for. Ask for five years of financials and segment detail early.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A first rating assigned by at least one agency, with the presentation, meeting and publication decision completed to a written timeline."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Write the first rating timeline from agency selection to publication"
                - "Request five years of financials and segment detail from the client"
                - "Prepare the agency selection comparison for the client"
                - "Plan the management meeting and follow-up window"
            - name: Annual rating presentation deck
              description: |-
                ## Purpose
                The rating presentation is the client's one structured chance each year to put its case to the agency, and a strong deck follows the methodology's factors rather than an investor day storyline. Building it factor by factor, with adjusted metrics that match the agency's and a forward case management can defend, makes the meeting a discussion rather than a cross-examination.

                ## Milestones
                1. A deck outline mapped section by section to the methodology factors.
                2. Adjusted metrics in the deck reconciled to the agency's last published figures.
                3. A forward case with base and downside scenarios agreed with management.
                4. The final deck approved by the CFO a week before the meeting.

                ## Notes
                Start from the **Operational checklist** template for the review steps. Strip investor day slides that do not answer a methodology factor.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A rating presentation mapped to every methodology factor, with reconciled metrics and an agreed forward case, approved by the CFO a week before the meeting."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Map the deck outline to the methodology factors"
                - "Reconcile deck metrics to the agency's last published figures"
                - "Agree base and downside forward cases with management"
                - "Review the rating deck template against current criteria @recurring(yearly)"
            - name: Management rehearsal for the agency meeting
              description: |-
                ## Purpose
                CFOs who present to investors well can still struggle with an agency analyst who asks about downside cases, covenant headroom and what they would cut first. Rehearsing with a bank team playing the analyst, using the hardest likely questions, lets management settle its answers before the real meeting.

                ## Milestones
                1. A list of the twenty hardest likely questions drawn from past reports and current concerns.
                2. Agreed answers drafted for each question with the supporting numbers.
                3. At least one full rehearsal held with bankers playing the agency analysts.
                4. Weak answers reworked and the speaking order for the day fixed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full rehearsal held at least five days before the agency meeting, with a list of twenty questions and agreed answers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the twenty hardest questions from past reports"
                - "Prepare supporting numbers for each agreed answer"
                - "Run a full rehearsal with bankers playing the analysts"
                - "Fix the speaking order and rework the weakest answers"
            - name: Agency meeting day and follow-up questions
              description: |-
                ## Purpose
                What happens in the room, and in the two weeks after it, decides whether the analyst takes the client's case to committee with confidence. Running the day with a clear note-taker, logging every question and promised follow-up, and answering on time keeps the momentum the presentation built.

                ## Milestones
                1. A note-taker named and a question log template ready before the meeting.
                2. Every question and promised follow-up logged during the meeting.
                3. All follow-up answers sent within the agreed window, approved by the client.
                4. A debrief held with the client on how the meeting went.

                ## Notes
                Start from the **Meeting notes** template. Keep the log on the bank's system, not in personal notes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every question from the agency meeting logged and answered within the agreed window, with a debrief note filed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Name a note-taker and prepare the question log"
                - "Log every question and promised follow-up in the meeting"
                - "Send client-approved follow-up answers within the agreed window"
                - "Hold a debrief with the client after the meeting"
            - name: Rating committee outcome and release review
              description: |-
                ## Purpose
                Between the committee decision and publication, agencies usually let the issuer check the draft release for factual errors and confidential information, often with very little time. Being ready for that window, with the right people available and a clear sense of what can and cannot be challenged, avoids errors going public.

                ## Milestones
                1. The client team who will review the draft release named and available on the expected dates.
                2. Rules on what the issuer can correct, such as facts and confidential data, written down.
                3. The draft release checked and comments returned within the agency's window.
                4. The published release and rationale filed in the client rating history.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The draft release reviewed and comments returned inside the agency's window, with the final release filed in the client history."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the client reviewers and confirm their availability"
                - "Write down what the issuer can and cannot correct"
                - "Check the draft release for factual and confidential errors"
                - "File the published release in the client rating history"
            - name: Rating coordination around a deal announcement
              description: |-
                ## Purpose
                Announcing an acquisition or a large financing without warning the agencies can lead to a watch placement on headline numbers alone. Planning the agency briefing before announcement, under confidentiality, with the pro forma case ready, gives the client the best chance of a measured first reaction.

                ## Milestones
                1. The timing and confidentiality of the agency briefing agreed with the client and compliance.
                2. Pro forma case and deleveraging plan ready for the briefing.
                3. Agencies briefed before announcement and their likely response noted.
                4. Agency publications after announcement tracked and the client updated.

                ## Notes
                Briefing an agency on an unannounced deal is a handling of inside information; follow the bank's compliance procedures and the client's disclosure counsel.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each agency briefed before announcement on an agreed date, with the pro forma case presented and every agency reaction logged."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree briefing timing and confidentiality with client and compliance"
                - "Prepare the pro forma case and deleveraging plan for the briefing"
                - "Brief each agency and note the likely response"
                - "Track agency publications after announcement and update the client"
            - name: New analyst on a ratings advisory team
              description: |-
                ## Purpose
                New analysts on a ratings advisory desk usually arrive with valuation skills and little feel for credit, and the first staffing decides how quickly they become useful. A sixty-day plan to learn the adjusted metrics workbook, read a stack of reports and shadow one agency meeting builds the basics fast.

                ## Milestones
                1. The team's adjusted metrics workbook used on two clients under supervision.
                2. Ten rating reports read using the extraction template.
                3. One agency meeting or rehearsal shadowed with notes reviewed by an associate.
                4. A sixty-day check-in held with the team lead.

                ## Notes
                Start from the **Reading queue** template for the report list if you have not already set one up.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within sixty days, the workbook used on two clients, ten reports extracted and one meeting shadowed, confirmed at a check-in with the team lead."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the team lead for two clients to practise the workbook on"
                - "Read and extract ten rating reports in your first month"
                - "Shadow one agency meeting or rehearsal and write notes"
                - "Book a sixty-day check-in with the team lead"
            - name: Associate running the ratings workstream on an M&A deal
              description: |-
                ## Purpose
                On a live acquisition the ratings workstream competes for attention with valuation and documents, and it usually gets squeezed until the funding structure is suddenly urgent. An associate who owns it with its own task list, timeline and link to the financing team keeps rating analysis ready when the bid is set.

                ## Milestones
                1. A ratings workstream list with tasks, owners and dates tied to the deal timeline.
                2. Pro forma rating analysis delivered before the funding mix is fixed.
                3. Agency briefing planned in step with the announcement timetable.
                4. Ratings work handed over cleanly to the signing to closing team.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A ratings workstream with dated tasks delivered its pro forma analysis before the funding mix was fixed and its agency briefing on time."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the ratings workstream list against the deal timeline"
                - "Agree hand-offs with the financing and M&A teams"
                - "Deliver pro forma rating analysis before the funding decision"
                - "Hand ratings materials to the closing team with a short note"
            - name: Coverage banker rating conversations with CFOs
              description: |-
                ## Purpose
                Senior coverage bankers rarely build the metrics, but they are the ones a CFO asks whether a deal will cost the rating. Keeping a short, regular rating point of view for each covered client, refreshed from the team's work, turns that question into a well-prepared conversation and often into a mandate.

                ## Milestones
                1. A one-paragraph rating view written for each covered client.
                2. Views refreshed monthly from headroom dashboards and credit reads.
                3. Rating raised as a topic in at least one CFO meeting per client each half-year.
                4. Conversations and any resulting mandates logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-paragraph rating view kept current for each covered client, with rating discussed with every CFO at least twice a year."
                cadence: rolling
              tasks:
                - "Write a one-paragraph rating view for each covered client"
                - "Refresh each client's rating view from the team's latest work @recurring(monthly:28)"
                - "Put rating on the agenda of your next CFO meeting"
                - "Log rating conversations and any mandates that follow"
            - name: Former agency analyst moving to the advisory side
              description: |-
                ## Purpose
                Former agency analysts bring deep knowledge of methodology and committee culture, but advisory work asks them to argue a client's case, sell ideas and work banking hours. A ninety-day plan for the move, covering confidentiality boundaries, deal skills and how to use their background without overstepping it, makes the switch work.

                ## Milestones
                1. Any cooling-off or confidentiality obligations from the agency confirmed with compliance.
                2. Bank modelling and deck standards learned on two live pieces of work.
                3. A first rating presentation co-written with an experienced banker.
                4. A ninety-day review with the team lead on fit and next steps.

                ## Notes
                Former employer obligations can restrict which issuers you work on for a period. Clear them with compliance before staffing.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within ninety days, obligations cleared with compliance, two live pieces of work delivered and a first presentation co-written, confirmed at a review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List any restrictions from your former agency for compliance"
                - "Learn the bank's model and deck standards on two pieces of work"
                - "Co-write a first rating presentation with an experienced banker"
                - "Book a ninety-day review with the team lead"
            - name: Supporting a client through a fall to sub-investment grade
              description: |-
                ## Purpose
                Falling below investment grade changes a client's investor base, triggers clauses in contracts and debt documents, and can raise funding costs sharply. Helping the client prepare in advance, with a map of triggered clauses, a liquidity plan and investor messaging, limits the damage if the downgrade comes.

                ## Milestones
                1. Every contract and debt document clause linked to an investment grade rating identified with the client's lawyers.
                2. A liquidity plan covering collateral calls and lost funding sources prepared.
                3. Investor and counterparty messaging drafted with the client.
                4. Progress reviewed monthly while the rating sits on negative outlook or watch.

                ## Notes
                Lawyers interpret the clauses; the bank's role is to quantify the effect and plan the funding response.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A map of rating-linked clauses, a liquidity plan and draft investor messaging delivered while the client is on negative outlook or watch."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the client's lawyers for all rating-linked clauses"
                - "Quantify collateral calls and lost funding sources"
                - "Draft investor and counterparty messaging with the client"
                - "Review the plan with the client while on negative outlook @recurring(monthly:6)"
            - name: Ratings advisory for banks and insurers
              description: |-
                ## Purpose
                Banks and insurers are rated under separate methodologies built on capital, asset quality, funding and liquidity, and government support, with little use of EBITDA multiples. Learning those frameworks before taking a financial institution mandate stops you applying corporate habits where they do not fit.

                ## Milestones
                1. The main agencies' bank and insurer methodologies summarised by factor.
                2. Key metrics such as capital ratios, asset quality and funding measures defined.
                3. A public bank or insurer worked through against one methodology.
                4. A list of differences from corporate ratings kept for client meetings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of bank and insurer methodologies with one public institution worked through and a list of differences from corporate ratings."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Summarise one agency's bank methodology by factor"
                - "Define the key capital, asset quality and funding metrics"
                - "Work a public bank or insurer through the methodology"
                - "List the main differences from corporate rating work"
            - name: Regional agencies and ratings in smaller markets
              description: |-
                ## Purpose
                Smaller markets, including the Caribbean, often rely on regional or national scale agencies such as CariCRIS alongside the global ones, and local investors and regulators may accept a national scale rating. Understanding when a regional rating is enough, how national scales map to global ones and how the sovereign shapes the result helps clients in those markets choose sensibly.

                ## Milestones
                1. Regional and national scale agencies active in the client's market listed.
                2. How national scale ratings relate to global scale ratings explained in a page.
                3. Local investor and regulatory rating requirements checked with the client's advisers.
                4. A recommendation on regional, global or both written for one client.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation for one smaller market client on regional, global or both ratings, backed by a scale mapping and local requirements."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List regional and national scale agencies in the client's market"
                - "Explain the national to global scale relationship in a page"
                - "Check local investor and regulatory rating requirements"
                - "Write a recommendation for one client"
            - name: Transition and environmental risk in rating assessments
              description: |-
                ## Purpose
                Environmental, social and governance factors now appear explicitly in agency reports, and for carbon-heavy or water-exposed sectors transition risk can affect business risk scores and capex forecasts. Tracking how each agency discloses these factors, and where they have changed a rating, lets you prepare a client for questions it may not expect.

                ## Milestones
                1. Each agency's framework for disclosing environmental, social and governance factors summarised.
                2. Rating actions in your sectors where these factors were cited collected.
                3. Questions on transition plans and capex added to client meeting preparation.
                4. The summary refreshed each year as frameworks change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of each agency's disclosure framework with a list of sector rating actions citing these factors, refreshed yearly."
                cadence: cyclic
              tasks:
                - "Summarise each agency's environmental and governance framework"
                - "Collect sector rating actions that cited these factors"
                - "Add transition plan questions to client meeting preparation"
                - "Refresh the environmental and governance factor summary @recurring(yearly)"
            - name: Rating trigger register for a client
              description: |-
                ## Purpose
                Rating triggers sit in loan pricing grids, bond coupon step-ups, derivative collateral terms, customer contracts and joint venture agreements, and clients often do not know them all. A register of every trigger with the rating level, effect and cash cost turns a downgrade from a surprise into a planned event.

                ## Milestones
                1. All rating-linked clauses collected from debt, derivative and commercial documents with the client's lawyers.
                2. Each trigger recorded with the rating level, agency, effect and estimated cost.
                3. Cumulative cost shown for a one and two notch downgrade.
                4. The register reviewed each quarter and after any new financing.

                ## Notes
                Start from the **Risk register** template. Legal interpretation of each clause is for the client's lawyers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of every rating-linked clause with level, effect and cost, and cumulative costs for one and two notch downgrades, reviewed quarterly."
                cadence: rolling
              tasks:
                - "Ask the client's lawyers for documents containing rating clauses"
                - "Record each trigger with level, effect and estimated cost"
                - "Total the cost of a one and two notch downgrade"
                - "Review the trigger register for new financings @recurring(quarterly)"
            - name: Downturn stress case for rating resilience
              description: |-
                ## Purpose
                Downturns are when ratings move fastest, and an agency's downside case is often harsher than management's. Building a stress case that applies a recession-like fall in volumes and margins to a client's adjusted metrics, and testing which actions restore headroom, shows how many notches are really at risk.

                ## Milestones
                1. A stress scenario defined from a past downturn in the client's sector.
                2. Adjusted metrics and liquidity run through the stress over two to three years.
                3. Mitigating actions sized, such as capex cuts and dividend changes.
                4. A one-page summary of notches at risk with and without mitigation shared with the client.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A stress case based on a named past downturn, with metric paths and mitigating actions, summarised on one page for the client."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose a past sector downturn to base the stress on"
                - "Run adjusted metrics and liquidity through the stress"
                - "Ask the agent to draft the one-page summary from your outputs"
                - "Size mitigating actions and show notches at risk"
---

# Credit Ratings Advisory

This area is for bankers who advise companies on their credit ratings: reading agency methodologies, rebuilding adjusted metrics the way an agency analyst would, preparing management for rating meetings and telling a CFO honestly what a deal will do to the rating. It starts with foundations (rating scales, the methodology library, an adjusted metrics workbook, peer maps and engagement scoping), moves to the operating routines that keep headroom and agency publications under watch, then the technical skills behind each rating factor, the decisions clients bring you, dated events such as a first rating or an annual review, variants for analysts, associates, coverage bankers and former agency analysts, and finally specialist work on financial institutions, smaller markets, transition risk, rating triggers and downturn stress cases.

What repeats is a monthly methodology watch, a weekly rating action log, quarterly headroom and post-results checks against downgrade thresholds, a monthly idea pipeline and a yearly calendar of agency reviews for each covered client. The Reading queue, Metrics log, Meeting notes, Risk register and Operational checklist templates pair with the projects that name them. Client numbers and agency correspondence belong on the bank's systems; these projects hold your own method, notes and public material. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
