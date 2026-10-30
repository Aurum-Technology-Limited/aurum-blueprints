---
id: private-equity-vc.deal-screening-and-first-look
name: Deal Screening and First Look
description: "Written screening criteria, a one-page first look, a red flag library, a weekly partner screen and a clear yes, no or wait on every teaser, so your time goes to the deals that can actually close."
category: business
version: 1.0.0
tags: [private-equity-vc, deal-screening-and-first-look, knowledge-worker, screening, teasers, cim, red-flags, first-look]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - metrics-log
    - risk-register
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Deal Screening and First Look
          description: "Deciding quickly which deals deserve time: screening criteria, a first-look template, red flags, partner discussion and a clear yes, no or wait for each teaser."
          projects:
            - name: Written screening criteria for your mandate
              description: |-
                ## Purpose
                Most screening arguments are really arguments about criteria nobody wrote down. Putting the fund's mandate on one page, with EBITDA or revenue range, enterprise value band, sectors, geographies, ownership types and control or minority, gives you a test you can apply to a teaser in minutes and defend to a partner in one sentence.

                ## Milestones
                1. A one-page criteria sheet covering size, sector, geography, ownership, deal type and equity cheque range.
                2. Each criterion marked as hard (automatic pass if failed) or soft (needs a reason to proceed).
                3. The sheet checked against the fund's strategy documents and agreed by a partner.
                4. The criteria pinned where you read teasers and shared with the deal team.

                ## Notes
                Write criteria as numbers and named categories, not adjectives. "Strong management" is not a screen; "EBITDA between 5 and 25 million" is.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page criteria sheet with every criterion marked hard or soft, signed off by a partner and shared with the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the size, sector and geography limits stated in the fund's strategy documents"
                - "Draft the criteria sheet and mark each line hard or soft"
                - "Test the sheet on the last ten teasers you received"
                - "Walk a partner through the sheet and record the changes agreed"
            - name: Hard no list and fund exclusion rules
              description: |-
                ## Purpose
                Fund documents and responsible investment policies often exclude whole sectors, jurisdictions or concentration levels, and finding that out after a CIM read wastes days. A short list of absolute exclusions, confirmed with compliance, lets you pass on the spot and explain why without opinion creeping in.

                ## Milestones
                1. Sector, jurisdiction and activity exclusions gathered from the fund documents and investment policy.
                2. Concentration limits on single-deal size noted as a maximum equity cheque.
                3. The list confirmed with the compliance or legal team as complete and current.
                4. The hard no list added to the top of the criteria sheet.

                ## Notes
                Interpreting the fund documents is a job for counsel or compliance, not for you. Your job is to ask, record the answer and apply it consistently.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written hard no list, confirmed by compliance, sitting at the top of the criteria sheet with the date it was last checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask compliance which exclusions and concentration limits apply to the current fund"
                - "Write each exclusion as a single line with its source document"
                - "Add the maximum equity cheque per deal to the list"
                - "Recheck the hard no list against the latest fund documents and policy @recurring(yearly)"
            - name: One-page first-look template
              description: |-
                ## Purpose
                Every first look should answer the same questions in the same order every time, so partners can compare a packaging business with a software company on one screen. A one-page template covering business, numbers, rough returns, fit, red flags and a recommendation cuts the time per teaser and makes every pass traceable.

                ## Milestones
                1. A one-page template with sections for business summary, key financials, fit against criteria, rough returns, red flags and recommendation.
                2. A box for the recommendation with only three options: yes, no or wait.
                3. The template used on five real teasers and trimmed where sections went unused.
                4. Partners agreed to receive first looks in this format.

                ## Notes
                Start from the **Operational checklist** template. If the first look runs past one page, the extra material belongs in a later diligence workstream, not in the screen.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page first-look template used on at least five teasers and accepted by the partners as the standard format."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect three first looks the team liked and note what they shared"
                - "Draft the one-page template with a three-option recommendation box"
                - "Fill the template for five teasers already in the inbox"
                - "Cut any section left blank on more than three of the five"
            - name: Daily teaser intake and triage
              description: |-
                ## Purpose
                Teasers arrive by email, on banker calls and through colleagues, and the ones that slip through are often noticed only when a rival announces the deal. A short daily triage that logs every teaser and applies the hard criteria means nothing sits unread and nothing gets a CIM request on enthusiasm alone.

                ## Milestones
                1. One place where every teaser lands, whoever received it.
                2. Each new teaser logged within one working day with source, date and process type.
                3. Hard criteria applied at intake so obvious passes leave the queue the same day.
                4. A month with no teaser older than five working days still untriaged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a full month every teaser received was logged and triaged within five working days, with no gaps in the log."
                cadence: rolling
              tasks:
                - "Ask colleagues to forward every teaser they receive to one shared address"
                - "Clear the teaser inbox and log each new teaser against the hard criteria @recurring(daily)"
                - "Flag any teaser with a first-round date inside three weeks as urgent"
            - name: NDA decision rules before a first look
              description: |-
                ## Purpose
                Signing every NDA that arrives fills the inbox with non-solicitation clauses and standstills you then have to track for years. A short set of rules on when to sign, which clauses always go to counsel and how each signed NDA is recorded keeps the first look moving without creating obligations nobody remembers.

                ## Milestones
                1. Written rules on which teasers justify signing an NDA at all.
                2. A list of clauses that always go to counsel, such as non-solicit, standstill and unusual term lengths.
                3. An NDA register with counterparty, date signed, term and any restrictions.
                4. Every NDA signed in the last year added to the register.

                ## Notes
                Counsel decides what is acceptable in an NDA. The register is there so the team knows which people it cannot hire and which companies it cannot approach.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written NDA rules agreed with counsel and a register holding every NDA signed in the past twelve months with its restrictions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel which NDA clauses they always want to review"
                - "Write a one-paragraph rule on when a teaser earns an NDA"
                - "Build the NDA register and backfill the last twelve months"
                - "Check the register for standstills and non-solicits about to expire @recurring(monthly:12)"
            - name: Back-of-envelope returns screen
              description: |-
                ## Purpose
                Even a great-looking business can still fail the fund's return hurdle at any price the seller will accept. A five-line returns sketch, using entry multiple, a plausible debt range, a modest growth case and an exit multiple no higher than entry, tells you in ten minutes whether a deal clears the bar before anyone opens a full model.

                ## Milestones
                1. A one-tab sketch that turns entry multiple, debt, growth and exit multiple into a rough money multiple and IRR.
                2. Current debt ranges for your size of deal confirmed with a lender or the capital markets colleague.
                3. The sketch run on ten past deals and compared with the full models built for them.
                4. A rule written for the minimum sketch result that earns a CIM read.

                ## Notes
                The sketch is a filter, not a valuation. Keep the full operating case and debt schedule for the LBO model once a deal passes the screen.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A returns sketch tested against ten past deals, with a written minimum result that decides whether a teaser earns a CIM read."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a lender or capital markets colleague for current debt ranges at your deal size"
                - "Build a one-tab sketch from entry multiple to rough IRR"
                - "Run the sketch on ten past deals and note where it misled"
                - "Write the minimum sketch result that earns a CIM request"
            - name: Yes, no or wait outcome rules
              description: |-
                ## Purpose
                "Interesting, let's keep an eye on it" is how a pipeline fills with deals nobody owns. Defining exactly what yes, no and wait mean, who can decide each, and what a wait needs (a trigger and a revisit date), turns every first look into a decision instead of a mood.

                ## Milestones
                1. A written definition of yes, no and wait, with the next step each one triggers.
                2. A rule that every wait carries a named trigger and a revisit date.
                3. Agreement on who can say yes and who can say no on their own.
                4. The rules applied to every open teaser in the current pipeline.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written outcome rules agreed with the partners, and every open teaser carrying a yes, no or wait with an owner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft one paragraph each for yes, no and wait"
                - "Agree with a partner who may decide each outcome alone"
                - "Give every open teaser a yes, no or wait with an owner"
                - "Add a trigger and revisit date to every wait"
            - name: Screening log for every teaser seen
              description: |-
                ## Purpose
                Without a log you cannot answer the questions that matter later: how many teasers came in, which bankers sent fit deals, how often you passed for the same reason and what happened to the ones you declined. A simple log with a fixed set of fields, filled at triage, is the raw material for every review in this area.

                ## Milestones
                1. A log with fields for date, source, company, sector, size, process type, outcome, reason and owner.
                2. The last six months of teasers backfilled from email.
                3. Pass reasons chosen from a short fixed list rather than free text.
                4. The log reconciled with the inbox for a full month.

                ## Notes
                Start from the **Metrics log** template. If the firm already runs a deal CRM, keep this as a view or export inside it rather than a parallel spreadsheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A screening log holding six months of backfilled teasers with a fixed pass reason on every declined deal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the eight or nine fields the log will hold"
                - "Write a fixed list of no more than ten pass reasons"
                - "Backfill the last six months of teasers from email"
                - "Reconcile the screening log against the teaser inbox @recurring(monthly:28)"
            - name: Time budget for each screening stage
              description: |-
                ## Purpose
                Two days spent on one first look means it is no longer a screen. Setting a time budget for each stage, for example twenty minutes on a teaser, half a day on a CIM and a day before a first-round indication, makes it obvious when a deal is eating time out of proportion to its odds.

                ## Milestones
                1. A time budget written for teaser, CIM first look and pre-indication work.
                2. Actual hours tracked against the budget on the next ten deals.
                3. The budget adjusted once based on what the tracking showed.
                4. Overruns of more than double the budget raised with a partner as a decision point.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written time budget per stage, with actual hours recorded on at least ten deals and one adjustment made."
                cadence: rolling
              tasks:
                - "Write a draft hour budget for each screening stage"
                - "Note actual hours spent on each live deal at the end of each week"
                - "Compare actual screening hours with the budget and flag overruns @recurring(monthly:26)"
            - name: Weekly partner screening meeting
              description: |-
                ## Purpose
                Partners carry pattern recognition that a criteria sheet cannot hold, and a short weekly meeting is the cheapest way to get it applied to every live teaser. A fixed agenda (new teasers, waits due, decisions needed) with each deal presented in two minutes gets clear outcomes and stops deals drifting between hallway conversations.

                ## Milestones
                1. A standing weekly slot with the partners and a fixed agenda.
                2. First looks circulated a day before the meeting.
                3. Every deal discussed leaving with yes, no or wait and an owner.
                4. Decisions recorded in the screening log the same day.

                ## Notes
                Start from the **Meeting notes** template. Two minutes per deal is enough if the first look did its job; longer discussions get their own slot.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly screening meetings held, each with recorded outcomes for every deal discussed."
                cadence: rolling
              tasks:
                - "Agree a standing weekly slot and agenda with the partners"
                - "Circulate first looks and the list of waits due the day before"
                - "Run the partner screening meeting and record each outcome @recurring(weekly:mon)"
                - "Update the screening log with the meeting's decisions"
            - name: Friday replies to every banker
              description: |-
                ## Purpose
                Bankers remember who answered quickly and who went silent, and that memory decides which teasers you see first next year. A Friday habit of replying to every outstanding teaser, with a brief honest reason for a pass, protects the relationship and costs half an hour.

                ## Milestones
                1. A short set of reply wordings for pass, interested and need more time.
                2. Every teaser older than five working days answered by Friday.
                3. Pass reasons given in one honest sentence without sharing internal views on price.
                4. A month with no banker chasing for an answer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight weeks every teaser older than five working days received a reply by Friday, recorded in the screening log."
                cadence: rolling
              tasks:
                - "Write three short reply wordings for pass, interested and more time"
                - "Reply to every teaser older than five working days @recurring(weekly:fri)"
                - "Record the reply date in the screening log"
            - name: Monthly screening funnel review
              description: |-
                ## Purpose
                Turning 200 teasers into 2 deals may be a healthy funnel, or may be screening out the wrong things. Looking each month at counts by stage, conversion between stages and the mix of sources and sectors shows whether the screen is too tight, too loose or tilted towards whoever sends the most paper.

                ## Milestones
                1. A monthly table of teasers, CIMs requested, first-round bids, second rounds and signed deals.
                2. Conversion rates between stages tracked for six months.
                3. One sentence each month on what changed and why.
                4. A change to criteria or behaviour proposed when a rate moves sharply.

                ## Notes
                Start from the **Metrics log** template. Low conversion is not bad in itself; what matters is whether the passes were for the right reasons.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly funnel tables with conversion rates and a written comment on each."
                cadence: rolling
              tasks:
                - "Set up a funnel table with one row per stage"
                - "Count the month's teasers at each stage and update conversion rates @recurring(monthly:4)"
                - "Write one sentence on the biggest change since last month"
            - name: Quarterly screening criteria refresh
              description: |-
                ## Purpose
                Debt markets, fund deployment pace and partner appetite all shift, and criteria written a year ago may now pass deals the fund would happily do. A quarterly look at the criteria sheet, against the funnel and the pass reasons, keeps the screen matched to what the fund can actually buy.

                ## Milestones
                1. The criteria sheet reviewed each quarter against the funnel numbers.
                2. Any criterion that caused frequent near-miss passes discussed with a partner.
                3. Changes dated and recorded on the sheet with the reason.
                4. Four quarterly refreshes completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly criteria reviews completed in twelve months, each with changes or a recorded decision to keep the sheet as it is."
                cadence: cyclic
              tasks:
                - "Pull the quarter's pass reasons and near misses from the log"
                - "Review the criteria sheet with a partner and record any change @recurring(quarterly)"
                - "Share the updated sheet with the deal team"
            - name: Wait list revisit routine
              description: |-
                ## Purpose
                Waits are only useful if somebody looks again when the trigger arrives: the next year's audited accounts, a failed auction, a new CEO. A monthly pass through the wait list, checking triggers and revisit dates, turns waits into a second chance at deals other buyers have forgotten.

                ## Milestones
                1. Every wait in the log carrying a trigger, a revisit date and an owner.
                2. A monthly review of waits whose date has passed or trigger has fired.
                3. Each reviewed wait moved to yes, no or a new dated wait.
                4. No wait left more than a month past its revisit date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six months no wait sat more than a month past its revisit date without a fresh decision recorded."
                cadence: rolling
              tasks:
                - "Add a trigger and revisit date to every wait missing them"
                - "Review waits that are due and give each a fresh outcome @recurring(monthly:17)"
                - "Send a short note to the banker when a wait turns into renewed interest"
            - name: Red flag library
              description: |-
                ## Purpose
                Experienced investors pass on deals in minutes because they have seen the pattern before: one customer at 40 percent of revenue, add-backs larger than reported profit, a founder who will not stay. A written library of red flags, each with what it looks like in a teaser and what question it raises, puts that experience on paper for the whole team.

                ## Milestones
                1. At least twenty red flags written, each with how it shows up in a teaser or CIM.
                2. Each flag marked as an automatic pass, a question for the banker or a diligence item.
                3. Flags grouped by customers, financials, people, legal and market.
                4. The library reviewed by a partner and linked from the first-look template.

                ## Notes
                Start from the **Risk register** template. A red flag is a reason to ask, not always a reason to pass; write down which is which.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A red flag library of at least twenty entries, each classed as pass, question or diligence item, reviewed by a partner."
                cadence: rolling
              tasks:
                - "Write down the red flags behind the last ten passes"
                - "Ask two partners for the flags they check first"
                - "Class each flag as pass, banker question or diligence item"
                - "Add any new red flag seen in the month's first looks @recurring(monthly:23)"
            - name: Quarterly pass reasons pattern review
              description: |-
                ## Purpose
                If a third of passes each quarter are for valuation, the problem may be the bankers you are covering rather than the deals. Reading the pass reasons together every quarter shows whether you are seeing the wrong deals, applying a criterion too strictly or passing for reasons that later prove wrong.

                ## Milestones
                1. Pass reasons counted by category each quarter.
                2. The top three reasons compared with the previous quarter.
                3. One finding written up and shared with the partners.
                4. An action agreed where a pattern points to a fix.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarterly pass reason summaries in a year, each with one written finding shared with the partners."
                cadence: cyclic
              tasks:
                - "Count the quarter's pass reasons by category @recurring(quarterly)"
                - "Compare the top three reasons with last quarter"
                - "Write one finding and share it at the partner screen"
            - name: Annual review of deals you passed on
              description: |-
                ## Purpose
                The only way to learn whether the screen is good is to see what happened to the deals it rejected. Once a year, checking which passed deals traded, at what price and to whom, and how they have fared since, gives honest evidence on missed winners and dodged losses.

                ## Milestones
                1. A list of passed deals from the past one to three years that later traded.
                2. Buyer, approximate price and any public outcome noted for each.
                3. Each one marked as a good pass, a miss or too early to tell.
                4. Two lessons written up and fed into the criteria refresh.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annual review listing passed deals that later traded, each judged good pass or miss, with two written lessons."
                cadence: cyclic
              tasks:
                - "Pull passed deals from the last three years from the log"
                - "Check public announcements and databases for which ones later traded @recurring(yearly)"
                - "Mark each as a good pass, a miss or too early to tell"
                - "Write two lessons and add them to the next criteria refresh"
            - name: Reading a teaser in fifteen minutes
              description: |-
                ## Purpose
                Teasers are sales documents of two to four pages, written to make you ask for the CIM. Learning to read one in fifteen minutes, looking for the numbers that are missing, the year the margin peaked and the words that hint at a problem, is the core skill of the whole screen.

                ## Milestones
                1. A fixed reading order for a teaser written down.
                2. A list of common teaser phrases and what they often mean in practice.
                3. Twenty teasers read against the clock with notes compared to a senior colleague's.
                4. Average reading time under fifteen minutes with the same conclusion as the senior read.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty timed teaser reads completed, with conclusions matching a senior colleague's on at least sixteen."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a reading order for teasers on one page"
                - "Read five old teasers against a fifteen minute timer"
                - "Compare your conclusions with a senior colleague's on the same teasers"
                - "Note every phrase that turned out to hide a problem"
            - name: Reading a CIM for what it leaves out
              description: |-
                ## Purpose
                Confidential information memoranda run to sixty or more pages, and the most useful information is often what they do not show: customer cohorts, monthly rather than annual numbers, the year before the chosen base year. Practising a structured CIM read, with a list of what should be there, turns a long read into a short list of questions for the banker.

                ## Milestones
                1. A checklist of what a complete CIM should show for your sectors.
                2. Five CIMs read against the checklist, with gaps listed.
                3. A banker question list produced from each read in under half a day.
                4. The checklist refined after comparing your gaps with what diligence later found.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A CIM checklist used on five real CIMs, each producing a written gap list and banker questions within half a day."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft a checklist of what a complete CIM should contain"
                - "Read one past CIM against the checklist and list the gaps"
                - "Turn the gaps into five questions for the banker"
                - "Compare your gap list with what later diligence on that deal found"
            - name: Sceptical reading of adjusted EBITDA
              description: |-
                ## Purpose
                Sellers price off adjusted EBITDA, and add-backs for one-off costs, owner salaries and run-rate savings can turn a modest business into a fundable one on paper. Spotting at first look which add-backs look recurring or speculative tells you how far the headline number may fall once quality of earnings work begins.

                ## Milestones
                1. A list of common add-back types sorted into usually accepted, often challenged and rarely accepted.
                2. Reported and adjusted EBITDA set side by side for five past deals.
                3. The gap explained line by line for each, with your view of what would survive.
                4. A rule for flagging deals where add-backs exceed a set share of reported EBITDA.

                ## Notes
                This is a screening view only. Real conclusions on earnings quality come from financial diligence advisers once the deal passes the screen.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five past deals analysed for add-backs, and a written flag rule added to the first-look template."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the add-back types you see most often in CIMs"
                - "Sort them into usually accepted, often challenged and rarely accepted"
                - "Compare reported and adjusted EBITDA on five past deals"
                - "Add an add-back flag rule to the first-look template"
            - name: Quick industry structure check
              description: |-
                ## Purpose
                A good company in a structurally poor industry is still a hard buyout. A ten-minute check on customer power, supplier power, cyclicality, substitution risk and how the industry has priced through past downturns stops you falling for the company story before you have looked at the ground it stands on.

                ## Milestones
                1. A ten-question industry structure checklist on one page.
                2. The checklist completed for the three sectors you see most.
                3. Downturn behaviour noted for each sector from public sources.
                4. The checklist attached to the first-look template as an optional section.

                ## Notes
                Keep this short. A full market map and target list belongs to thesis work, not to the first look on one teaser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An industry structure checklist completed for three sectors and attached to the first-look template."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write ten questions on customer power, cyclicality and substitution"
                - "Answer them for the sector of the next teaser you read"
                - "Find how that sector's margins moved in the last downturn"
                - "Attach the checklist to the first-look template"
            - name: Cash conversion and capital intensity at a glance
              description: |-
                ## Purpose
                Two companies with the same EBITDA can produce very different cash once capex, working capital swings and leases are paid. Learning to estimate free cash conversion from the few numbers a teaser gives is what separates a deal that can carry acquisition debt from one that only looks like it can.

                ## Milestones
                1. A simple formula for rough free cash conversion from EBITDA, capex and working capital change.
                2. Maintenance and growth capex distinguished on five past deals.
                3. Typical conversion ranges noted for your main sectors.
                4. A minimum conversion threshold proposed for the criteria sheet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Rough cash conversion calculated for five past deals, with a proposed minimum threshold discussed with a partner."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the rough cash conversion formula on the first-look template"
                - "Calculate conversion for five past deals from their CIMs"
                - "Note which ones hid growth capex inside maintenance"
                - "Propose a minimum conversion threshold to a partner"
            - name: Reading the seller's reason for selling
              description: |-
                ## Purpose
                Why the owner is selling now shapes price, timetable and what happens after closing: a retiring founder, a fund at the end of its life, a corporate tidying its portfolio and an owner who sees a cliff coming are four different deals. Practising how to read and test the stated reason makes a first look much sharper.

                ## Milestones
                1. A list of common seller types with the usual pressures behind each.
                2. The stated and likely reason written for the last ten teasers.
                3. Two questions per seller type to put to the banker on the first call.
                4. A line for seller motivation added to the first-look template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Seller motivation assessed on ten teasers and a motivation line added to the first-look template."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the main seller types you meet and what drives each"
                - "Write the stated and likely reason for the last ten teasers"
                - "Draft two banker questions for each seller type"
                - "Add a seller motivation line to the first-look template"
            - name: Reading the sale process and its odds
              description: |-
                ## Purpose
                Broad auctions with forty buyers, targeted processes with six and quiet bilateral conversations carry very different odds of winning and very different costs of losing. Learning to read the process letter, bid dates and banker signals tells you how much effort a deal deserves before the business itself is judged.

                ## Milestones
                1. A note on the main process types and the typical win rate you see in each.
                2. Process type and number of parties recorded for every teaser in the log.
                3. A rough win probability written on each first look.
                4. Win probabilities compared with actual outcomes after six months.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Process type and a win probability recorded on every first look for six months, then compared with outcomes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a short note on each process type and its usual odds"
                - "Add process type and party count fields to the screening log"
                - "Put a rough win probability on every first look"
                - "Compare the probabilities with actual results after six months"
            - name: First call script with the banker
              description: |-
                ## Purpose
                The first call with the sell-side adviser is the cheapest diligence you will ever do, and most people spend it being sold to. A short script of questions on seller motivation, price expectations, process timing, who else is looking and what worries the banker gets the facts a teaser leaves out.

                ## Milestones
                1. A script of eight to ten first-call questions.
                2. The script used on five real calls with answers recorded.
                3. Questions that never got straight answers replaced.
                4. Banker answers added to the first look within a day of the call.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A first-call script used on five banker calls, with answers recorded in each first look."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Draft eight to ten first-call questions for sell-side advisers"
                - "Use the script on the next banker call and note the answers"
                - "Replace questions that drew vague answers"
                - "Add each call's answers to the first look within a day"
            - name: Weighted scoring rubric for first looks
              description: |-
                ## Purpose
                Partners rank deals differently on different days, and a simple rubric makes the comparison explicit. Scoring each first look on five to seven weighted factors, such as fit, quality, returns sketch, process odds and red flags, does not decide the deal but does show where the disagreement really is.

                ## Milestones
                1. Five to seven scoring factors with weights agreed with a partner.
                2. A one to five scale defined in words for each factor.
                3. Twenty past deals scored to test whether the rubric ranks them sensibly.
                4. The rubric added to the first-look template.

                ## Notes
                A score is a prompt for discussion, not a substitute for judgement. Keep the written reasoning beside the number.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weighted rubric tested on twenty past deals and adopted in the first-look template by partner agreement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Propose five to seven factors and draft weights"
                - "Write what a 1, 3 and 5 mean for each factor"
                - "Score twenty past deals and check the ranking against outcomes"
                - "Agree the final weights with a partner"
            - name: Two-page screening note for partners
              description: |-
                ## Purpose
                Some deals need more than one page before the partners will agree to spend real money, but a full committee memo is far too early. A fixed two-page screening note, covering why this deal, why now, the returns sketch, the three biggest questions and the budget to answer them, bridges the gap.

                ## Milestones
                1. A two-page format with a fixed set of headings.
                2. The format used on the next three deals that passed the first look.
                3. Partner feedback collected and the format adjusted once.
                4. A rule for when a deal needs the two-page note rather than the one-page first look.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page screening note format used on three deals and adjusted once from partner feedback."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the headings for a two-page screening note"
                - "Write the note for the next deal that passes the first look"
                - "Ask two partners what they would cut or add"
                - "Write the rule for when a deal needs the longer note"
            - name: Back-testing the screen on past deals
              description: |-
                ## Purpose
                Criteria feel sensible until you run them against history. Applying today's screen to twenty or thirty deals from past years, including the firm's winners, losses and famous passes, shows whether it would have let through the good ones and stopped the bad ones.

                ## Milestones
                1. Twenty to thirty past deals selected with known outcomes.
                2. Each deal run through the current criteria and rubric.
                3. False passes and false approvals listed with the criterion responsible.
                4. Proposed criteria changes written up for the partners.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least twenty past deals run through the current screen, with false passes and approvals listed and changes proposed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose twenty past deals with outcomes the team agrees on"
                - "Run each through the current criteria and rubric"
                - "List every case where the screen got the answer wrong"
                - "Write proposed criteria changes for the partners"
            - name: Kill criteria set before reading the CIM
              description: |-
                ## Purpose
                Once someone has spent two days on a CIM, every red flag starts to look manageable. Writing down, before the read begins, the two or three findings that would end the deal makes it far easier to walk away when one of them turns up.

                ## Milestones
                1. A short kill criteria box added to the CIM request step.
                2. Two or three specific kill criteria written for each CIM requested.
                3. Each first look stating whether any kill criterion was met.
                4. At least one deal stopped on a pre-set kill criterion and the outcome recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Kill criteria written before the read on every CIM requested for three months, with each first look stating whether one was met."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a kill criteria box to the CIM request step"
                - "Write kill criteria for the next CIM before opening it"
                - "State in each first look whether a kill criterion was met"
            - name: One expert call before committing time
              description: |-
                ## Purpose
                One thirty-minute call with someone who has worked in the industry can confirm or kill a deal faster than a week of desk research. Setting a rule for when a first look earns one expert call, with a fixed short question list, buys outside perspective cheaply without starting a full diligence programme.

                ## Milestones
                1. A rule for which deals earn a pre-bid expert call.
                2. A list of five short questions used on every screening call.
                3. Calls held on three live deals with notes in the first look.
                4. The spend on calls tracked against the deals they helped decide.

                ## Notes
                Follow the firm's expert network compliance rules: no material non-public information, and no names or details the NDA protects.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Expert calls held on three live deals under a written rule, each with notes in the first look and cost recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the rule for when a first look earns an expert call"
                - "Draft five short questions for screening calls"
                - "Run an expert call on the next deal that meets the rule"
                - "Record what the call changed in the first look"
            - name: Spend gates before a first-round bid
              description: |-
                ## Purpose
                Lawyers, advisers and data providers can run up meaningful costs before a first-round indication, and broken deal costs come straight out of the fund or the firm. Agreeing spend gates, what can be spent at each stage and who approves more, keeps early money proportionate to the odds of winning.

                ## Milestones
                1. A spend limit written for teaser, CIM and pre-indication stages.
                2. An approver named for spend above each limit.
                3. Actual early spend recorded on the next five deals.
                4. The gates reviewed with the finance team after six months.

                ## Notes
                How broken deal costs are allocated is set by the fund documents; ask the finance or legal team rather than assuming.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written spend gates with named approvers, and actual pre-bid spend recorded on five deals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the finance team how broken deal costs are treated"
                - "Draft a spend limit and approver for each early stage"
                - "Agree the gates with a partner"
                - "Record early spend on each of the next five deals"
            - name: Bias checks in the first look
              description: |-
                ## Purpose
                The CIM's framing, the banker's enthusiasm, a sector you love and the hours already sunk all pull a first look towards yes. A few deliberate checks, such as a two-minute pre-mortem, a rotating devil's advocate and writing the bear case first, catch the most common errors before they reach the partners.

                ## Milestones
                1. Three named bias checks added to the first-look template.
                2. A devil's advocate role rotating through the team at the partner screen.
                3. A pre-mortem paragraph written on every deal moving past first look.
                4. One deal where a bias check changed the recommendation, recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Bias checks in the first-look template used on every deal for three months, with a rotating devil's advocate at the partner screen."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a bear case box above the bull case in the first-look template"
                - "Set up a rotating devil's advocate rota for the partner screen"
                - "Write a pre-mortem paragraph on the next deal moving forward"
                - "Note any deal where a check changed your recommendation"
            - name: First-round bid week triage
              description: |-
                ## Purpose
                Several processes often land their first-round dates in the same fortnight, and the team cannot bid well on all of them. Planning that week, ranking the live deals by fit, odds and work left and deciding early which to drop, means the bids that go in are credible instead of rushed.

                ## Milestones
                1. All live processes listed with their first-round dates.
                2. Each ranked by score, win probability and hours of work remaining.
                3. A decision recorded on which to bid, which to drop and which to ask to defer.
                4. Bankers on dropped deals told before their deadline.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ranked list of live processes with a recorded bid or drop decision on each, and every dropped banker told before the deadline."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every live process with its first-round date"
                - "Rank them by score, odds and remaining work"
                - "Agree with a partner which to bid and which to drop"
                - "Tell the bankers on dropped deals before their deadline"
            - name: Presenting your first deal at the partner screen
              description: |-
                ## Purpose
                New associates find that their first screen presentation sets how partners read their work for months. Preparing a tight two-minute summary, knowing the three numbers and the one big question cold, and having a clear recommendation turns a nervous moment into evidence of judgement.

                ## Milestones
                1. A two-minute spoken summary written and rehearsed.
                2. The key numbers, the biggest risk and the recommendation memorised.
                3. Likely partner questions listed with short answers.
                4. Feedback asked for after the meeting and written down.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first deal presented at the partner screen with a clear recommendation, and written feedback from a partner afterwards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a two-minute summary of the deal with a recommendation"
                - "Rehearse it aloud with a timer twice"
                - "List five questions a partner is likely to ask and answer each"
                - "Ask a partner for feedback after the meeting"
            - name: Screening committee sign-off for a live deal
              description: |-
                ## Purpose
                Many firms require a formal screening committee or preliminary approval before a first-round indication or the first serious diligence spend. Preparing for it as an event, with the screening note, the returns sketch, the spend request and the questions for the next stage, gets a clean decision in one meeting.

                ## Milestones
                1. The committee's required materials and timing confirmed.
                2. The two-page screening note, returns sketch and spend request ready two days ahead.
                3. A clear approve, decline or conditions decision recorded.
                4. Conditions set by the committee assigned to owners with dates.

                ## Notes
                Keep this to the screening decision. The full investment committee memo comes later, once diligence has answered the questions this meeting sets.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A screening committee decision recorded for a live deal, with any conditions assigned to owners and dates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm what the screening committee needs and when"
                - "Prepare the screening note, returns sketch and spend request"
                - "Circulate the pack two days before the meeting"
                - "Record the decision and assign every condition an owner"
            - name: Year-end pipeline clean-out
              description: |-
                ## Purpose
                By December the pipeline carries dozens of deals in limbo: processes that quietly died, waits nobody revisited, NDAs with no further contact. A year-end clean-out closes each one with a final outcome so the new year starts with a pipeline that reflects reality.

                ## Milestones
                1. Every open deal in the log reviewed before the year closes.
                2. Dead processes closed with a reason and date.
                3. Waits either renewed with a new date or closed.
                4. A short summary of the year's screening numbers shared with the partners.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every open deal in the log carries a current outcome at year end, and a one-page screening summary is shared with the partners."
                cadence: cyclic
              tasks:
                - "Filter the log for deals with no activity in ninety days"
                - "Close or renew every stale deal in the screening log @recurring(yearly)"
                - "Write a one-page summary of the year's screening numbers"
            - name: Criteria reset for a new fund vintage
              description: |-
                ## Purpose
                New funds usually bring a larger size, a refined strategy or new sectors, and screening with the old criteria wastes the first months of the investment period. Resetting the criteria sheet, hard no list and returns threshold as soon as the new fund's terms are fixed keeps the screen in step with the capital you now have.

                ## Milestones
                1. The new fund's size, strategy and restrictions summarised from the final documents.
                2. Criteria sheet, hard no list and returns threshold updated to match.
                3. Bankers told about the new size range and focus.
                4. The first twenty teasers after the reset screened on the new criteria.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Criteria, exclusions and returns threshold updated for the new fund and applied to the first twenty teasers received afterwards."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the new fund's size and restrictions from the final documents"
                - "Update the criteria sheet and hard no list to match"
                - "Send key bankers a short note on the new size range"
                - "Screen the next twenty teasers on the updated criteria"
            - name: First-look playbook for your first 90 days
              description: |-
                ## Purpose
                New associates and analysts are handed teasers in their first week and judged on their first looks within a month. A ninety-day plan, reading past first looks, shadowing the partner screen, writing first looks with a reviewer, then running triage alone, gets you to reliable screening quickly and visibly.

                ## Milestones
                1. Ten past first looks from the team read and annotated.
                2. Four partner screens attended with notes on how decisions were made.
                3. Ten first looks written and reviewed by a senior colleague.
                4. Daily triage run alone for two weeks without corrections.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days, ten reviewed first looks written and two weeks of triage run alone without corrections."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask a senior colleague for ten past first looks to read"
                - "Write first looks on two live teasers and send them for review"
                - "Ask a senior colleague for feedback on one first look @recurring(weekly:thu)"
                - "Take over daily triage for two weeks with a reviewer on call"
            - name: Screening owner-run lower mid-market businesses
              description: |-
                ## Purpose
                Smaller companies often come with unaudited or cash-basis accounts, an owner who is also the head of sales and a broker rather than a bank running the process. Screening them needs extra tests: key person dependence, accounts quality, customer relationships held by the owner and whether a professional finance function exists at all.

                ## Milestones
                1. A lower mid-market overlay of five or six extra questions for the first look.
                2. A rule on minimum accounts quality before a CIM is read.
                3. The overlay used on ten small-company teasers.
                4. Typical small-company red flags added to the library.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lower mid-market overlay used on ten teasers, with a written accounts quality rule and new entries in the red flag library."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write five extra screening questions for owner-run businesses"
                - "Set a minimum accounts quality rule for a CIM read"
                - "Use the overlay on the next ten small-company teasers"
                - "Add the new small-company flags to the red flag library"
            - name: Screening corporate carve-outs
              description: |-
                ## Purpose
                A division sold by a larger group looks cheap until you count stranded costs, shared systems, transitional services and the people who never really worked for it. A carve-out overlay on the first look estimates standalone costs and separation complexity before anyone falls for the division's reported margin.

                ## Milestones
                1. A carve-out checklist covering shared services, systems, contracts, people and transitional services.
                2. A rough standalone cost adjustment method agreed with a senior colleague.
                3. The overlay applied to two carve-out teasers or past deals.
                4. Separation complexity rated on every carve-out first look.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A carve-out overlay with a standalone cost method, applied to at least two carve-out first looks."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the shared services a division usually relies on"
                - "Agree a rough standalone cost method with a senior colleague"
                - "Apply the carve-out overlay to two carve-out teasers or past deals"
                - "Add a separation complexity rating to the first-look template"
            - name: Screening distressed and special situations
              description: |-
                ## Purpose
                Distressed teasers come with compressed timetables, court or lender involvement and a capital structure that matters as much as the business. A separate first-look format covering liquidity runway, who controls the process, the claims ahead of you and what has to be true operationally avoids treating a rescue like an ordinary buyout.

                ## Milestones
                1. A distressed first-look format with liquidity, process control and capital structure sections.
                2. A rule for when restructuring counsel or advisers must be involved before going further.
                3. The format used on two distressed or past special situations deals.
                4. Distressed red flags added to the library.

                ## Notes
                Insolvency law differs sharply between countries. Get restructuring counsel's view before relying on any assumption about process or priority of claims.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A distressed first-look format used on two deals, with a written rule for when restructuring counsel is brought in."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the distressed first-look sections on one page"
                - "Write the rule for bringing in restructuring counsel"
                - "Use the format on two distressed or past special situations deals"
                - "Add the distressed red flags to the library"
            - name: Screening minority growth deals
              description: |-
                ## Purpose
                Minority stakes in fast-growing companies are judged on different evidence from a buyout: growth durability, unit economics, the founder's plans and the protections a minority investor can get. Adapting the first look for growth deals stops a buyout screen rejecting them for lack of debt capacity, or accepting them without a path to exit.

                ## Milestones
                1. A growth overlay covering growth rate, retention, gross margin, burn or cash generation and governance rights.
                2. A note on which buyout criteria do not apply to minority deals.
                3. The overlay used on three growth teasers.
                4. Exit routes noted on every growth first look.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A growth overlay used on three minority teasers, each first look stating likely exit routes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the growth metrics that replace debt capacity in the screen"
                - "Note which buyout criteria do not apply to minority deals"
                - "Use the growth overlay on the next three growth teasers"
                - "Write likely exit routes on each growth first look"
            - name: Screening deals without committed capital
              description: |-
                ## Purpose
                Searchers and independent sponsors screen with one extra question every fund takes for granted: will anyone back this deal? Adding a capital partner test to the first look, sketching who would fund it, at what cheque size and on what terms, stops you spending months on a business no investor in your network would touch.

                ## Milestones
                1. A list of likely capital partners with the deal types and sizes each funds.
                2. A capital partner fit section added to the first look.
                3. Two capital partners asked for informal views on a sample teaser.
                4. A rule for passing when no listed partner fits.

                ## Notes
                Share only what the NDA allows. Many NDAs forbid passing the seller's name or materials to potential co-investors without consent.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A capital partner fit section in the first look, with a written pass rule tested on at least two teasers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the capital partners you could approach and what each funds"
                - "Add a capital partner fit section to the first look"
                - "Ask two partners for informal views on an anonymised sample deal"
                - "Write the rule for passing when no partner fits"
            - name: Venture first-meeting screen
              description: |-
                ## Purpose
                Venture investors screen from a deck and a thirty-minute call rather than a CIM, and the questions are about founders, market size and round dynamics rather than cash flow. A short first-meeting screen, with a fixed note format and the same yes, no or wait rule, keeps venture screening as disciplined as a buyout screen.

                ## Milestones
                1. A one-page first-meeting note covering team, problem, market, traction, round terms and fit.
                2. Fund fit tests written for stage, sector, cheque size and ownership target.
                3. The note used on ten first meetings.
                4. Each meeting ending in yes, no or wait within a week.

                ## Notes
                This is the screen only. Founder references, customer calls and the investment memo belong to later diligence once a company passes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A venture first-meeting note used on ten meetings, each with a yes, no or wait recorded within a week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page first-meeting note for founder calls"
                - "Write fit tests for stage, sector, cheque size and ownership"
                - "Use the note on the next ten first meetings"
                - "Record a yes, no or wait within a week of each meeting"
            - name: Cross-border and currency screen
              description: |-
                ## Purpose
                A target earning in one currency, bought by a fund reporting in another, in a country with capital controls or a thin exit market, carries risks the business numbers never show. A cross-border section in the first look covering currency, repatriation, political and legal risk and realistic buyers at exit keeps those risks visible from day one.

                ## Milestones
                1. A cross-border checklist covering currency, repatriation, local ownership rules, tax leakage and exit buyers.
                2. Specialist advisers named for the jurisdictions you see most.
                3. The checklist applied to three cross-border teasers.
                4. Jurisdictions where the fund will not invest added to the hard no list after compliance review.

                ## Notes
                Tax and regulatory conclusions must come from advisers in each jurisdiction. The checklist is for spotting the questions, not answering them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cross-border checklist applied to three teasers, with adviser contacts recorded for the main jurisdictions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft the cross-border checklist on one page"
                - "Ask the tax and legal teams which advisers they use by jurisdiction"
                - "Apply the checklist to three cross-border teasers"
                - "Send any proposed jurisdiction exclusions to compliance"
            - name: Responsible investment and reputation screen
              description: |-
                ## Purpose
                Even a deal that clears every financial test can still be stopped late by an exclusion policy, an LP's restriction or a news story about the founder. Running a short responsible investment and adverse media check at first look, against the firm's own policy, means those issues surface before money is spent.

                ## Milestones
                1. The firm's responsible investment policy and any LP restrictions summarised on one page.
                2. An adverse media and sanctions check routine agreed with compliance.
                3. The check run on every deal that passes the first look.
                4. Any issue found routed to compliance with the outcome recorded.

                ## Notes
                Sanctions and know-your-counterparty decisions belong to compliance. Your role is to run the agreed checks and escalate anything that comes up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A responsible investment and adverse media check, agreed with compliance, run on every deal passing first look for three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the responsible investment policy and LP restrictions on one page"
                - "Agree the adverse media and sanctions check routine with compliance"
                - "Run the check on every deal that passes the first look"
                - "Route any issue to compliance and record the outcome"
            - name: Sector overlays for your top three sectors
              description: |-
                ## Purpose
                Generic screens miss what matters most in each sector: reimbursement and regulation in healthcare services, retention and revenue quality in software, order books and raw material pass-through in industrials. Short sector overlays, built with partners who know each sector, sharpen first looks where the fund actually invests.

                ## Milestones
                1. The three sectors that produce most of the fund's deals identified from the log.
                2. A five to eight question overlay written for each.
                3. Each overlay reviewed by the partner closest to that sector.
                4. Overlays used on every first look in those sectors for a quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Three partner-reviewed sector overlays in use on every first look in those sectors for a full quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the three sectors with the most teasers in the log"
                - "Draft five to eight sector questions for each"
                - "Ask the partner closest to each sector to review its overlay"
                - "Refresh each sector overlay with the year's lessons @recurring(yearly)"
            - name: Agent-assisted first pass within NDA limits
              description: |-
                ## Purpose
                Summarising a teaser or pulling the financial table out of a CIM is the kind of work an assistant can speed up, but only inside the tools your firm has approved for confidential material. Setting clear rules on what can be summarised, where, and how every output is checked against the source lets you save time without breaching an NDA.

                ## Milestones
                1. The firm's rules on approved tools for confidential deal documents confirmed with compliance.
                2. A standard prompt for teaser summaries written for use in an approved tool only.
                3. Every summary checked against the source for the key numbers.
                4. Time saved per first look recorded over ten deals.

                ## Notes
                Never paste a CIM or teaser into a tool your firm has not approved for confidential documents. When in doubt, summarise from your own notes rather than the source.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written rules agreed with compliance and a summary prompt used on ten deals, each output checked against the source."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask compliance which tools are approved for confidential deal documents"
                - "Ask the agent to draft a teaser summary prompt that lists numbers with page references"
                - "Check every summary's key numbers against the source document"
                - "Record time saved per first look over ten deals"
            - name: Teaching screening to junior colleagues
              description: |-
                ## Purpose
                Once you screen well, the most useful thing you can do is make the next analyst good at it faster than you were. Running short monthly sessions on real first looks, reviewing juniors' work against the template and red flag library, spreads judgement across the team and frees your own time.

                ## Milestones
                1. A sixty-minute session format built around two real anonymised first looks.
                2. Monthly sessions held for six months.
                3. Each junior's first looks reviewed with written comments.
                4. Juniors running triage alone with fewer corrections over time.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six monthly teaching sessions held, with written review comments given on each junior's first looks."
                cadence: rolling
              tasks:
                - "Pick two past first looks to anonymise for the first session"
                - "Run a sixty-minute screening session with the junior team @recurring(monthly:10)"
                - "Give written comments on one first look from each junior"
                - "Track how many corrections each junior needs over the months"
            - name: Personal calibration record of screening calls
              description: |-
                ## Purpose
                Trust from partners goes to investors whose judgement is shown to be right more often than chance, and that needs evidence. Writing a probability on each of your screening calls, such as the chance a deal reaches signing or meets its plan, and scoring them later, gives you an honest record of where your instincts are sharp and where they are not.

                ## Milestones
                1. A private record of each screening call with a written probability and reason.
                2. At least fifty calls recorded.
                3. Calls scored against outcomes once results are known.
                4. One written lesson about your own over or under confidence.

                ## Notes
                Keep this as your own learning record using your notes, not copies of the firm's deal files.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least fifty screening calls recorded with probabilities, scored against outcomes, and one written lesson on calibration."
                cadence: rolling
              tasks:
                - "Start a private record with call, probability and one-line reason"
                - "Add a probability to every screening call you make this month"
                - "Score resolved calls against outcomes and note any bias @recurring(quarterly)"
---

# Deal Screening and First Look

This area is for the associate, VP or principal who reads more teasers than anyone could diligence and needs to decide fast which ones deserve real hours. It starts with the foundations (written criteria, a hard no list, a one-page first-look template and the yes, no or wait rules), then the weekly and monthly routines that keep the screen honest, the reading and quick-maths skills behind a good first look, the decisions that sharpen the screen, the dated moments such as bid deadlines and screening committee, the variants for carve-outs, distressed, growth and venture screens, and finally the advanced work of calibrating your own judgement and teaching it to others.

What repeats is a daily teaser triage, a weekly partner screen, a Friday round of banker replies, a monthly look at the screening funnel and the wait list, and a quarterly refresh of criteria and pass reasons. The Operational checklist, Meeting notes, Metrics log and Risk register templates pair with the projects that name them. Everything here works on your own notes and your own judgement: keep confidential deal documents inside the systems your firm and each NDA allow. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
