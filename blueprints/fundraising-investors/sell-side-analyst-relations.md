---
id: fundraising-investors.sell-side-analyst-relations
name: Sell-Side Analyst Relations
description: "A correct coverage register, clear rules for draft notes and model questions, a company-run consensus, callbacks after every results release and a working relationship with each analyst who covers the stock."
category: business
version: 1.0.0
tags: [fundraising-investors, sell-side-analyst-relations, enterprise, manager, equity-research, consensus, analyst-coverage, disclosure]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - meeting-notes
    - metrics-log
    - feedback-themes
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Sell-Side Analyst Relations
          description: "Managing relationships with equity research analysts who cover a listed company, briefing them and responding to their models and notes."
          projects:
            - name: Covering analyst map and contact register
              description: |-
                ## Purpose
                Before anything else, you need one accurate list of every analyst who publishes on the stock: firm, lead analyst, associate, sector team, rating, target price and how to reach each of them. Most listed companies find the list they inherited is wrong in two or three places, with an analyst who left the bank or a junior associate who now does the modelling. Every callback round, consensus collection and briefing invitation depends on this register being right.

                ## Milestones
                1. Every firm publishing research on the company listed, with lead analyst and associate named.
                2. Current rating, target price and date of last note recorded for each firm.
                3. Email, phone and research sales contact confirmed for each firm.
                4. Departed or dormant analysts marked and removed from distribution lists.

                ## Notes
                Check the list against both your market data terminal and your consensus provider. Each lags reality by weeks, and they rarely lag in the same places.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every active covering analyst with firm, associate, contact details, rating and target price, checked against two external sources."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the coverage list from your market data terminal or consensus provider"
                - "Email each covering firm to confirm the lead analyst and associate"
                - "Record rating, target price and last note date for every analyst"
                - "Remove departed analysts from the results distribution list"
                - "Reconfirm every name and contact detail in the register @recurring(quarterly)"
            - name: Profiles of each covering analyst
              description: |-
                ## Purpose
                No two analysts read the stock the same way: one builds a detailed segment model and asks about pricing, another writes thematic sector pieces and wants the strategy, a third has just picked up the sector and is still learning it. A one-page profile per analyst, covering background, model focus, typical questions and their current thesis, lets anyone in the company prepare for a call in five minutes.

                ## Milestones
                1. A profile for each covering analyst with career history and the other stocks they cover.
                2. Each analyst's three most frequent questions noted from past calls.
                3. Each analyst's investment thesis summarised in two lines, in their own terms.
                4. Preferred contact style and known sensitivities recorded for each analyst.
                5. Every profile dated and refreshed after the latest results season.

                ## Notes
                Start from the **Person** template. Keep profiles factual and professional, and write them as if the analyst might one day read them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page profile exists for every covering analyst, each listing their thesis, model focus and three most frequent questions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create a profile page for the first covering analyst from the person template"
                - "Read each analyst's last three notes and summarise their thesis in two lines"
                - "List each analyst's most frequent questions from past call transcripts"
                - "Add the date each profile was last updated"
            - name: Analyst engagement rules within the disclosure policy
              description: |-
                ## Purpose
                Disclosure policies often say little about analysts beyond a line on not giving private guidance. A short, specific section on analyst contact, covering who may speak to them, what can be confirmed, how draft notes and models are handled and what happens in closed periods, gives executives and the IR team the same answer to awkward questions before they are asked. Approval by counsel and the disclosure committee gives it weight when an analyst pushes.

                ## Milestones
                1. A drafted section covering spokespeople, model questions, draft notes, closed periods and record keeping.
                2. The draft reviewed by counsel against your market's fair disclosure rules.
                3. The section approved by the disclosure committee and added to the policy.
                4. Every executive who meets analysts briefed on the approved rules.

                ## Notes
                Base it on your own market's rules, for example Regulation FD in the US or the market abuse rules in the UK and EU. This project organises the policy; counsel decides what the law requires.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An analyst engagement section, approved by counsel and the disclosure committee, sits in the disclosure policy and has been briefed to every executive spokesperson."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull out every line in the current disclosure policy that mentions analysts"
                - "Draft rules on model questions, draft notes and closed period contact"
                - "Send the draft to counsel for review against your market's disclosure rules"
                - "Brief the approved rules to each executive who meets analysts"
                - "Review the analyst section of the policy with counsel @recurring(yearly)"
            - name: Factual check protocol for draft research notes
              description: |-
                ## Purpose
                Analysts sometimes send a draft initiation, or a section of a longer note, and ask the company to check it before publication. The safe practice is to correct only public, factual errors such as a wrong store count, a misnamed subsidiary or an outdated date, and never to comment on estimates, ratings or conclusions. A written protocol, a standard reply and a record of what was changed protect both the company and the analyst.

                ## Milestones
                1. A written protocol stating what IR may and may not correct in a draft.
                2. A standard covering reply approved for use with every set of corrections.
                3. An agreed response, set with counsel, for a draft that arrives containing a rating or target price.
                4. Every draft received logged with date, reviewer and the corrections made.

                ## Notes
                Research departments usually strip ratings and targets from drafts shared with a company. If one arrives with them, stop reading and follow the response agreed with counsel.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written draft note protocol and standard reply are approved, and every draft received since is logged with what was corrected."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the list of what IR may and may not correct in a draft note"
                - "Draft the standard reply sent with any factual corrections"
                - "Agree with counsel what to do if a draft contains a rating or target"
                - "Log each draft received with date, reviewer and corrections made"
            - name: Analyst interaction log with compliance fields
              description: |-
                ## Purpose
                If a regulator, an auditor or the board ever asks what an analyst was told before a note moved the share price, the only defence is a record made at the time. Logging every call, meeting and substantive email with analysts, with date, attendees, topics and any questions declined, takes two minutes per interaction and becomes the company's memory of each relationship.

                ## Milestones
                1. Log fields agreed: date, analyst, firm, company attendees, topics, documents referred to, questions declined.
                2. Every analyst interaction logged within one working day of happening.
                3. A second company attendee recorded wherever the policy requires one.
                4. Three monthly gap checks against calendars completed with nothing missing.

                ## Notes
                Start from the **Meeting notes** template, or use your investor CRM if it has a record type for analysts.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every analyst call, meeting and substantive email for three consecutive months is logged within one working day, with attendees and topics."
                cadence: rolling
              tasks:
                - "Choose where the analyst log will live and set up its fields"
                - "Log the last month's analyst calls from calendars and email"
                - "Ask every executive to forward analyst contact for logging within a day"
                - "Check the log against executive calendars for missing entries @recurring(monthly:27)"
            - name: Company-run consensus collection
              description: |-
                ## Purpose
                Third-party consensus figures often include stale estimates, mix definitions or leave out analysts who do not contribute to the data feeds. Many listed companies therefore collect estimates directly from covering analysts on a fixed template before each results release. Building that process once, with clear definitions and a timetable, gives the board and the market a cleaner benchmark for the numbers.

                ## Milestones
                1. A collection template whose KPI definitions match the reported numbers exactly.
                2. A timetable for collection set relative to each results date.
                3. A first collection completed with responses from most covering analysts.
                4. The method for mean, median, range and contributor count written down.
                5. A recorded decision on whether consensus is published, and where.

                ## Notes
                Collect and compile, never comment. Do not tell an analyst their submitted number looks high or low.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consensus template and timetable are in use, and the first company-compiled consensus has been produced with contributor count, mean, median and range."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft the consensus template using the results release KPI definitions"
                - "Agree the collection timetable relative to each results date"
                - "Send the template to every covering analyst with a return date"
                - "Compile mean, median, range and contributor count from the responses"
                - "Decide with the CFO whether and where consensus is published"
            - name: Baseline of ratings, target prices and estimates
              description: |-
                ## Purpose
                Knowing where the sell side stands today, how many buy, hold and sell ratings there are, the spread of target prices and where estimates sit, is the starting point for every later conversation about research. A dated baseline also lets you show the board, a year from now, how sentiment shifted after a strategy update or a hard year.

                ## Milestones
                1. A table of each analyst's rating, target price and next two years of revenue and earnings estimates.
                2. The rating split and target price range summarised in three lines.
                3. Gaps between consensus and the internal plan noted for the CFO only.
                4. The baseline dated and saved where the annual coverage review can find it.

                ## Notes
                Start from the **Metrics log** template. Treat any comparison with the unpublished internal plan as confidential and keep it inside the finance team.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated table of every analyst's rating, target price and two-year estimates exists, with the rating split and target range summarised."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up the baseline table from the metrics log template"
                - "Enter each analyst's rating, target price and two years of estimates"
                - "Summarise the rating split and the range of target prices"
                - "Send the confidential plan comparison to the CFO only"
            - name: Analyst modelling guide and historic data pack
              description: |-
                ## Purpose
                New analysts and associates spend weeks rebuilding history from old annual reports, and errors made then stay in their models for years. A modelling guide that sets out segment structure, revenue drivers, seasonality, cost lines, one-off items and accounting policies, with a spreadsheet of restated historic data, cuts that time and reduces avoidable estimate errors. Everything in it must already be public.

                ## Milestones
                1. A guide covering segments, drivers, seasonality and known one-offs, each with its public source.
                2. A historic data spreadsheet of at least eight quarters or four half years, tied to published reports.
                3. Finance and legal sign-off that every figure and statement is already public.
                4. The guide and spreadsheet sent to every covering analyst and associate.
                5. An update routine in place after each results release.

                ## Notes
                Include no forward-looking numbers beyond published guidance. The guide explains how the business works; it does not tell analysts what to forecast.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A modelling guide and tied-out historic data spreadsheet, signed off as fully public, are in the hands of every covering analyst."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the questions new analysts most often ask about modelling the company"
                - "Build the historic data spreadsheet from published reports and tie it out"
                - "Write the guide sections on segments, drivers, seasonality and one-offs"
                - "Get finance and legal sign-off that every figure is already public"
                - "Update the data pack and guide after each results release @recurring(quarterly)"
            - name: Research access from every covering broker
              description: |-
                ## Purpose
                Since research rules in many markets separated research payments from trading commissions, some banks restrict who may read their notes, and issuers can find themselves cut off from research on their own stock. Securing a reading entitlement or distribution arrangement with every covering firm means IR sees each note on the day it is published, not when an investor mentions it.

                ## Milestones
                1. A list of which covering firms send research to the company and which do not.
                2. Access requested from each missing firm through the analyst or research sales.
                3. Named IR recipients registered on each firm's research portal.
                4. A quarterly test confirming each firm's latest note arrived.

                ## Notes
                The MiFID II research rules in the EU and UK are the usual example. Arrangements vary by firm and market, so ask each one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "IR has confirmed access to published research from every covering firm, with named recipients recorded for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark which covering firms currently send research to the company"
                - "Ask each missing firm's analyst how the company can receive their notes"
                - "Register named IR recipients on each research portal"
                - "Test that each firm's latest note reached the IR inbox @recurring(quarterly)"
            - name: Twice-weekly research note digest
              description: |-
                ## Purpose
                Notes arrive in bursts: a flurry after results, a sector piece mid-quarter, an initiation out of nowhere. Reading and summarising them twice a week, with the headline view, any estimate or rating change and anything factually wrong, keeps management informed without every executive reading every note.

                ## Milestones
                1. A digest format agreed with the CFO: one line per note, plus flags for changes and errors.
                2. The digest sent every Monday and Thursday for eight weeks running.
                3. Factual errors found in notes passed into the correction routine.
                4. Executive readers confirming the digest has replaced their own reading.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A research digest goes out every Monday and Thursday for eight consecutive weeks, each note summarised in one line with estimate changes flagged."
                cadence: rolling
              tasks:
                - "Agree the digest format and its readers with the CFO"
                - "Read the new notes and send the research digest @recurring(weekly:mon,thu)"
                - "Ask the agent to draft one-line summaries of the week's longer notes"
                - "Flag any factual error found in a note for the correction routine"
            - name: Post-results analyst callback round
              description: |-
                ## Purpose
                In the days after results, analysts rebuild their models and often call with detailed follow-up questions. Short callbacks with every covering analyst, run from the same approved answers management used on the call, catch misunderstandings before revised notes are published and keep every analyst working from the same information.

                ## Milestones
                1. Callback slots offered to every covering analyst within two working days of results.
                2. The approved Q and A and public results materials used as the only sources.
                3. Each callback logged with the questions asked and answers given.
                4. The most common misunderstandings reported to the CFO after each round.
                5. All callbacks completed within five working days for two consecutive quarters.

                ## Notes
                If a question can only be answered with new information, the answer is no, or a public announcement made to everyone at once.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every covering analyst is offered a callback within two working days of results, and all are logged within five working days, for two consecutive quarters."
                cadence: cyclic
              tasks:
                - "Book callback slots with every covering analyst before results day"
                - "Run the callback round from the approved answers only @recurring(quarterly)"
                - "Log each callback with the questions asked and answers given"
                - "Send the CFO the three most common misunderstandings from the round"
            - name: Consensus dispersion and outlier review
              description: |-
                ## Purpose
                When one estimate sits far from the rest, it is usually because the analyst has missed a public fact, such as a disposal, a currency move or a change in segment reporting. Reviewing the spread each quarter shows where published information is unclear, and points the company at what to explain better in public rather than at individual analysts to correct.

                ## Milestones
                1. A quarterly view of the spread of revenue and earnings estimates for the next two years.
                2. Outliers identified, each with the public fact it may have missed.
                3. Disclosure gaps written up for the next set of results materials.
                4. The approach to outliers agreed with counsel and recorded.

                ## Notes
                Pointing an analyst to a public document is common practice; telling them their number is wrong is not. Agree exactly where the line sits with counsel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dispersion review is completed each quarter for four quarters, naming outliers and the disclosure gaps behind them."
                cadence: cyclic
              tasks:
                - "Chart the range of revenue and earnings estimates for the next two years"
                - "Note each outlier and the public fact it may have missed"
                - "Agree with counsel how far IR may go in pointing to public documents"
                - "Run the dispersion review once consensus is refreshed @recurring(quarterly)"
            - name: Rating and target price change tracker
              description: |-
                ## Purpose
                Rating changes move share prices, and the board will ask why one happened before IR has finished reading the note. A tracker recording every rating and target price change, with the date, the share price move that day and the stated reason, builds a record of what really drives sentiment on the stock.

                ## Milestones
                1. A tracker with date, firm, old and new rating, old and new target, stated reason and price move.
                2. Every change since the baseline date entered.
                3. A monthly summary of changes produced.
                4. A note on recurring reasons for changes written after six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rating and target price change since the baseline is recorded with its stated reason and that day's share price move."
                cadence: rolling
              tasks:
                - "Add columns for old and new rating, target, reason and price move"
                - "Enter every rating and target change since the baseline date"
                - "Summarise the month's rating and target changes @recurring(monthly:9)"
                - "Write a short note on recurring reasons after six months"
            - name: Monthly research sentiment summary for the board
              description: |-
                ## Purpose
                Boards hear about analyst views in fragments, usually after a negative note lands. A one-page monthly summary of the rating split, target price range, consensus movement and the themes analysts are writing about gives directors a steady, factual picture and shows where the equity story is landing and where it is not.

                ## Milestones
                1. A one-page format agreed with the CFO and company secretary.
                2. Six monthly summaries delivered on time.
                3. Each recurring theme linked to the part of the equity story it concerns.
                4. Board questions about research recorded and answered.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Six consecutive monthly research summaries reach the CFO and board, each on one page with rating split, target range and top themes."
                cadence: rolling
              tasks:
                - "Agree the one-page summary format with the CFO and company secretary"
                - "Ask the agent to draft the month's summary from the digest and tracker"
                - "Send the research sentiment summary to the CFO and board @recurring(monthly:12)"
                - "Record board questions on research and the answers given"
            - name: Estimate feed accuracy check with consensus vendors
              description: |-
                ## Purpose
                Consensus data vendors rely on analysts submitting their estimates, and figures can sit in a feed for months after an analyst has changed them or left the bank. Checking each month that vendor numbers match the analysts' latest published notes avoids results being reported as a miss against a consensus that never really existed.

                ## Milestones
                1. A list of the vendors whose consensus the market and the press quote for the stock.
                2. A monthly comparison of vendor estimates with each analyst's latest note.
                3. Stale or wrong entries reported to both the vendor and the analyst.
                4. Each correction confirmed in the next feed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Vendor consensus matches the latest published estimates for every covering analyst, checked monthly for six months with discrepancies corrected."
                cadence: rolling
              tasks:
                - "List the data vendors whose consensus the market quotes for the stock"
                - "Compare vendor estimates with each analyst's latest note @recurring(monthly:23)"
                - "Report stale or wrong estimates to the vendor and the analyst"
                - "Confirm each correction appears in the next vendor feed"
            - name: Analyst query log with consistent answers
              description: |-
                ## Purpose
                Between results, analysts email questions about a disclosure, a competitor's announcement or an industry statistic, and different people in the company can end up answering in slightly different words. Logging each query, answering from a growing bank of approved public answers and giving the same answer to anyone who asks the same question keeps the message identical across the coverage.

                ## Milestones
                1. A shared query log with date, analyst, question, answer and public source.
                2. A bank of approved answers built from questions that recur.
                3. Every query answered within two working days.
                4. Open queries reviewed and cleared every Friday.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every analyst query for three months is logged and answered within two working days, each answer traceable to an approved public source."
                cadence: rolling
              tasks:
                - "Set up the analyst query log with question, answer and source columns"
                - "Move answers that recur into an approved answer bank"
                - "Clear open analyst queries and close their log entries @recurring(weekly:fri)"
                - "Check that every answer given cites a public document"
            - name: Year-round touchpoint plan for each analyst
              description: |-
                ## Purpose
                If the only contact with an analyst is the results call, the relationship turns transactional and notes get written with less context. A plan of two or three non-results touchpoints a year per analyst, such as a management meeting, a site tour or time with a divisional head, keeps their understanding current while staying inside public information.

                ## Milestones
                1. A yearly touchpoint target set for each covering analyst.
                2. Touchpoints placed by quarter, clear of closed periods.
                3. A monthly check of which analysts have gone without contact.
                4. At least two non-results touchpoints logged per analyst in twelve months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every covering analyst has had at least two non-results touchpoints in twelve months, all logged and outside closed periods."
                cadence: rolling
              tasks:
                - "Set a yearly touchpoint target for each covering analyst"
                - "Place the touchpoints in the calendar outside closed periods"
                - "Check which analysts have had no contact this quarter @recurring(monthly:16)"
                - "Offer overdue analysts a meeting with a business head"
            - name: Correction routine for errors in published notes
              description: |-
                ## Purpose
                Published notes sometimes contain plain factual errors, a misread table or an out-of-date share count, that then spread to investors. A quick, polite routine for pointing the analyst to the correct public figure, and recording whether a correction followed, fixes most errors within a day without any argument about opinions.

                ## Milestones
                1. A written test for what counts as a factual error rather than a difference of view.
                2. A standard correction email that cites the public source.
                3. Each error raised logged with its outcome.
                4. A yearly look at repeated errors to find unclear disclosures.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every factual error found in a published note is raised with the analyst within one working day and logged with the outcome."
                cadence: rolling
              tasks:
                - "Write the test for a factual error versus a difference of opinion"
                - "Draft a standard correction email that cites the public source"
                - "Log each error raised and whether the analyst corrected it"
                - "Look for repeated errors that point to an unclear disclosure"
            - name: Annual analyst coverage review
              description: |-
                ## Purpose
                Once a year, step back and ask whether the coverage serves the company: how many analysts, from which firms, where their investor clients sit, how good their models are and which important investor regions have no local research. The review sets the coverage goals, the touchpoint plan and the budget for analyst events for the following year.

                ## Milestones
                1. Coverage count, firm mix and regional reach compared with three peers.
                2. Each analyst rated on model quality and investor reach.
                3. Coverage gaps listed by region and investor type.
                4. Next year's coverage goals agreed with the CFO.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual coverage review with a rating for each analyst, a gap list and next year's coverage goals is signed off by the CFO."
                cadence: cyclic
              tasks:
                - "Count coverage by firm, region and rating against three peers"
                - "Rate each analyst's model quality and investor reach"
                - "List the investor regions with no local research coverage"
                - "Run the coverage review and agree next year's goals @recurring(yearly)"
            - name: How sell-side research is produced and paid for
              description: |-
                ## Purpose
                Understanding the business behind the note makes analyst behaviour far less surprising. Research is funded through trading commissions, research payment accounts or subscriptions, analysts are judged by investor votes and their own sales desks, and research rules in several markets changed how much coverage smaller companies receive. A short study helps IR managers explain to executives why an analyst wants what they want.

                ## Milestones
                1. A summary of how research is paid for in the company's main markets.
                2. Notes on how analysts are evaluated, ranked and paid.
                3. An explanation of how research unbundling affected coverage of companies your size.
                4. A one-page briefing on research economics shared with executives.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page briefing on research economics and analyst incentives, drawn from at least three sources, has been shared with the executive team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two recent industry reviews of how equity research is funded"
                - "Ask two friendly analysts how their performance is judged"
                - "Note how research rules in your markets affected small company coverage"
                - "Write a one-page briefing on research economics for executives"
            - name: Mosaic information and selective briefing limits
              description: |-
                ## Purpose
                Analysts are entitled to build a view from public information plus non-material detail, which is the mosaic idea, but a company must not hand them material non-public information or signal whether their estimates are right. The line sits differently by market and is easy to cross in a friendly conversation, so everyone who speaks to analysts needs the same practical training, built on examples from your own business.

                ## Milestones
                1. Ten real analyst questions near the disclosure line collected.
                2. A counsel-led session held using those ten examples.
                3. An approved approach to each example written down.
                4. Attendance recorded, with every spokesperson trained.

                ## Notes
                Training organises the rules. Counsel tells you what they mean for your company and market.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every executive who speaks to analysts has completed counsel-led training on selective disclosure, with attendance recorded and ten worked examples."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect ten real analyst questions that sit near the disclosure line"
                - "Ask counsel to run a training session using those ten examples"
                - "Record which spokespeople attended and who still needs the session"
                - "Run the selective disclosure refresher for spokespeople @recurring(yearly)"
            - name: Reading an analyst's financial model line by line
              description: |-
                ## Purpose
                Sell-side models are often available to clients and sometimes to the company on request, and reading one properly shows exactly where an analyst's view comes from: the volume assumption, the margin bridge, the tax rate or the share count. Learning to read a model end to end lets IR understand disagreements, spot factual errors in inputs and brief management on what really separates the bulls from the bears.

                ## Milestones
                1. At least one covering analyst's model obtained through normal channels.
                2. Every tab mapped to the income statement, balance sheet, cash flow or valuation.
                3. Hard-coded assumptions listed and compared with public data.
                4. A note on the three assumptions that drive most of the target price.

                ## Notes
                Reading a model is not reviewing it. Do not send comments on assumptions back to the analyst.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The full model of at least one covering analyst has been mapped tab by tab, with its three most important assumptions written up."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a covering analyst whether their model is available to the company"
                - "Map each tab of the model to the financial statements"
                - "List every hard-coded assumption and its public source"
                - "Write up the three assumptions that drive most of the target price"
            - name: Reconciling each analyst's target price to their method
              description: |-
                ## Purpose
                Two analysts with almost identical earnings estimates can publish target prices 40 percent apart, because one applies a multiple to next year's earnings and the other runs a discounted cash flow with a different discount rate. Rebuilding each target price from the note shows the board whether disagreement is about the business or about valuation inputs.

                ## Milestones
                1. The valuation method behind every target price recorded.
                2. Key inputs such as multiples, discount rates and terminal growth extracted into one table.
                3. The spread of targets split between earnings differences and valuation differences.
                4. A half-page reading of the table delivered to the CFO.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table explaining every covering analyst's target price by method and key inputs, with the spread split between earnings and valuation, is with the CFO."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Note the valuation method stated in each analyst's latest note"
                - "Extract multiples, discount rates and growth inputs into one table"
                - "Split the spread of targets into earnings and valuation differences"
                - "Send the CFO a half-page reading of the table"
            - name: Research conflicts, walls and deal restrictions
              description: |-
                ## Purpose
                When a covering bank is also the company's broker, adviser, lender or underwriter, its analyst works behind information barriers and may be barred from publishing around a transaction. IR managers who know these rules avoid putting analysts in impossible positions, such as inviting them to a briefing they cannot attend, and can explain to executives why a friendly analyst suddenly goes quiet.

                ## Milestones
                1. A list of covering firms with a corporate relationship to the company.
                2. Notes from each firm's compliance team on how restrictions apply around deals.
                3. A written protocol for contact with an analyst whose firm is restricted.
                4. A short briefing for executives on what restriction looks like in practice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of covering firms with banking roles and a written protocol for analyst contact during transactions are shared with the executive team."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List covering firms that are also the company's broker, adviser or lender"
                - "Ask each firm's compliance team how research restrictions apply around deals"
                - "Write the protocol for contacting a restricted analyst"
                - "Brief executives on why a restricted analyst may go quiet"
            - name: Analyst ranking surveys and what analysts are judged on
              description: |-
                ## Purpose
                Industry surveys in which investors vote for the best analysts in each sector shape analysts' careers, their priorities and what they ask the company for, especially management access for their clients. Knowing which surveys matter in your sector, what they measure and when voting happens explains a lot about the timing of analyst requests.

                ## Milestones
                1. The surveys relevant to your sector and markets listed.
                2. Each survey's criteria and voting window noted.
                3. Where each covering analyst ranked in the latest results recorded.
                4. The months when access requests usually rise marked in the IR calendar.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the analyst ranking surveys relevant to the sector, their voting windows and where each covering analyst ranks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the analyst ranking surveys investors vote in for your sector"
                - "Note each survey's criteria and voting window"
                - "Record where each covering analyst ranked in the latest results"
                - "Mark the months when access requests usually rise"
            - name: Analyst teach-in skills for operating executives
              description: |-
                ## Purpose
                Divisional heads, the chief technology officer or the head of operations can explain the business better than anyone, but they are rarely ready for analysts' questions, which are precise, numerical and persistent. A short coaching programme with a practice session gives them confidence to present without drifting into forecasts or unpublished numbers.

                ## Milestones
                1. The operating executives likely to meet analysts this year named.
                2. Twenty realistic analyst questions written for their business areas.
                3. A practice session held with IR playing the analysts.
                4. Each executive signed off by IR and the CFO as ready.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three operating executives have completed analyst coaching and a practice session, each signed off by IR and the CFO."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Name the operating executives most likely to meet analysts this year"
                - "Write twenty realistic analyst questions for their business areas"
                - "Run a practice session with IR playing the analysts"
                - "Give each executive written feedback after the session"
            - name: Programme to attract new research coverage
              description: |-
                ## Purpose
                Companies with thin coverage tend to trade less and are found by fewer investors, yet analysts initiate only when they see client interest and a story worth writing. A targeted programme, listing firms that cover your peers, learning what each needs and offering access and the modelling guide, makes initiating easier without ever paying for it.

                ## Milestones
                1. A target list of firms that cover peers but not the company.
                2. A reason each target firm might initiate noted.
                3. Introductions made through the company's broker or existing investors.
                4. Meetings held with at least five target analysts.
                5. At least one new initiation published within a year.

                ## Notes
                Analysts decide independently whether to cover a stock. Never offer business, such as a banking mandate, in return for coverage.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Meetings have been held with at least five target analysts, and at least one new initiation is published within twelve months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the firms that cover two or more peers but not the company"
                - "Read each target analyst's recent sector notes and initiations"
                - "Ask the company's broker and top investors for introductions"
                - "Offer each target analyst a management meeting and the modelling guide"
            - name: Sponsored research decision
              description: |-
                ## Purpose
                Smaller listed companies sometimes pay a research provider for coverage when no broker will initiate. Sponsored research gives investors a model and a written story, but it is labelled as paid for, may carry less weight, and the choice of provider matters a great deal. A written comparison avoids buying something your target investors will ignore.

                ## Milestones
                1. At least three providers compared on cost, distribution, analyst track record and independence terms.
                2. Feedback gathered from two target investors on whether they read sponsored research.
                3. Disclosure and labelling requirements checked with counsel.
                4. A decision recorded with its reasons and approved by the CFO.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three sponsored research providers and a recorded decision, with reasons and investor feedback, is approved by the CFO."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist three sponsored research providers that cover your sector"
                - "Compare cost, distribution, analyst track record and independence terms"
                - "Ask two target investors whether they read sponsored research"
                - "Record the decision and its reasons in a short memo"
            - name: Response to analyst requests for extra KPI disclosure
              description: |-
                ## Purpose
                Analysts regularly ask for a figure the company does not publish, such as revenue per customer, regional margins or an order backlog. Giving it to one analyst privately would be selective disclosure, so the real decision is whether to publish the figure for everyone, permanently, and whether it will still be comfortable to report in a bad quarter.

                ## Milestones
                1. A list of every unpublished figure requested in the last year, with how often each was asked for.
                2. For each figure, the case for and against and how it would look in a weak quarter.
                3. A recommendation put to the disclosure committee.
                4. Approved additions in the next results materials, and a standard reply for declined requests.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The disclosure committee has decided on every KPI analysts requested in the last year, with additions published or a standard reply in use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every unpublished figure analysts have asked for in the last year"
                - "Note for each figure how it would look in a weak quarter"
                - "Present the shortlist to the disclosure committee"
                - "Draft the standard reply for requests that were declined"
            - name: Answering analysts who ask about comfort with consensus
              description: |-
                ## Purpose
                Asked whether management is comfortable with consensus, executives are tempted to nod, wince or hint, and each of those can amount to private guidance. Writing down what the company says when estimates drift far from its own expectations, and which public channel it uses if a correction is needed, stops ad hoc steering that regulators and investors take seriously.

                ## Milestones
                1. How the company has handled past consensus gaps documented for the last two years.
                2. A public update, a reiteration of existing guidance and silence compared as responses.
                3. Counsel's and the board's view recorded.
                4. A standard answer to the comfort question approved and given to every spokesperson.

                ## Notes
                This sits beneath the company's guidance policy. It does not decide whether to guide, only how to answer when analysts ask.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written approach to consensus gaps, approved by counsel and the board, includes a standard answer to questions about comfort with consensus."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down how the company handled consensus gaps in the last two years"
                - "Compare a public update, a reiteration and silence as responses"
                - "Ask counsel and the board which approach the company should adopt"
                - "Draft the standard answer to questions about comfort with consensus"
            - name: Annual analyst feedback interviews
              description: |-
                ## Purpose
                Candid feedback from covering analysts on what is unclear in the reporting, which management messages they doubt and what would help their models is rarely offered unprompted. Short structured interviews once a year, run by IR or an independent adviser, turn it into themes the CFO can act on, separate from wider investor perception work.

                ## Milestones
                1. An interview guide of eight to ten questions.
                2. Interviews held with at least two thirds of covering analysts.
                3. Answers grouped into anonymised themes.
                4. Three actions agreed with the CFO.
                5. The actions reported back to the analysts who took part.

                ## Notes
                Start from the **Feedback themes** template. Promise anonymity only if you can keep it with a small coverage group.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Interviews with at least two thirds of covering analysts are summarised into themes, with three actions agreed by the CFO and reported back."
                cadence: cyclic
              tasks:
                - "Write an eight-question interview guide for covering analysts"
                - "Book twenty-minute interviews outside closed periods"
                - "Group the answers into themes using the feedback themes template"
                - "Run the analyst feedback interviews and agree three actions @recurring(yearly)"
            - name: Management access rules for analysts outside results
              description: |-
                ## Purpose
                Requests for time with the CEO, the CFO and divisional heads arrive unevenly, often with the analyst hoping to bring investor clients, and the loudest firms can end up with most of the access. A clear allocation rule, how many meetings per firm, with which executives and when, treats firms fairly and protects executive time.

                ## Milestones
                1. Last year's analyst meetings with management counted by firm and executive.
                2. An allocation rule proposed by firm, executive and time of year.
                3. The rule agreed with the CEO and CFO.
                4. IR confirmed as the single entry point for analyst requests.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written allocation rule for analyst access to management, agreed by the CEO and CFO, is applied to every request for twelve months."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count last year's analyst meetings with management by firm"
                - "Propose an allocation rule by firm and executive"
                - "Agree the allocation rule with the CEO and CFO"
                - "Tell covering analysts how management requests will be handled"
            - name: Estimate accuracy scorecard by analyst
              description: |-
                ## Purpose
                Some analysts consistently forecast closer to reported results than others, and their notes tend to carry more weight with investors. Scoring each analyst's year-ahead estimates against actual results over several years shows whose models best understand the business, and where the company's disclosures leave everyone guessing.

                ## Milestones
                1. Three years of year-ahead estimates and actual results collected.
                2. The error measured per analyst for revenue and earnings.
                3. Errors shared by most analysts linked to the disclosure behind them.
                4. The scorecard kept internal and refreshed after each full year.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An internal scorecard ranks each analyst's estimate accuracy over three years for revenue and earnings, refreshed after each full year."
                cadence: cyclic
              tasks:
                - "Collect each analyst's year-ahead estimates for the last three years"
                - "Measure the error against reported revenue and earnings"
                - "Note errors shared by most analysts and the disclosure behind them"
                - "Refresh the accuracy scorecard after full-year results @recurring(yearly)"
            - name: Peer coverage benchmark
              description: |-
                ## Purpose
                How many analysts cover each peer, how their ratings split and which firms follow the sector but not you all show whether the company's coverage is normal for its size. A benchmark against six to eight peers gives the annual review and the coverage programme a factual base instead of a feeling.

                ## Milestones
                1. A peer group of six to eight companies agreed with the CFO.
                2. Coverage count, covering firms and rating split recorded for each peer.
                3. Firms that cover peers but not the company highlighted.
                4. The findings set out in one table.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table compares coverage count, firms and rating split for at least six peers, with firms covering peers but not the company highlighted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the peer group with the CFO"
                - "Record each peer's covering firms and rating split"
                - "Highlight firms that cover peers but not the company"
                - "Share the benchmark with whoever runs the coverage programme"
            - name: Analyst teach-in on a misunderstood business line
              description: |-
                ## Purpose
                A business line that analysts misread, a fast-growing software unit inside an industrial group or a recent market entry, can end up valued at almost nothing in sum-of-the-parts models. A half-day teach-in for the sell side, run by divisional management on public information, can change how it is modelled without disclosing a single new number.

                ## Milestones
                1. The topic chosen from analyst feedback and the dispersion review.
                2. Every slide approved by the disclosure committee.
                3. A date set outside closed periods, with every covering analyst invited.
                4. The materials published on the investor website as the session starts.
                5. Changes in how the business line is modelled noted from the following notes.

                ## Notes
                Publishing the slides at the same moment means investors get the same information as the analysts in the room.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A teach-in attended by most covering analysts is held, with the materials published on the website the same day."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose the business line analysts most often misread"
                - "Draft the teach-in agenda with the divisional head"
                - "Get disclosure committee approval for every slide"
                - "Publish the materials on the website at the start of the session"
            - name: Initiation wave after the post-listing quiet period
              description: |-
                ## Purpose
                After a listing, analysts at the underwriting banks typically publish their first notes together once the research quiet period ends, and those initiations set the market's view for months. Preparing for that date, with factual check capacity lined up, the modelling guide ready and management briefed on what to expect, keeps the first wave accurate.

                ## Milestones
                1. The quiet period end date confirmed with counsel and the banks.
                2. A list of the analysts expected to initiate, with their firms.
                3. Factual check capacity planned for the week before the date.
                4. The modelling guide and data pack ready to send.
                5. Every initiation logged and summarised for management on the day it publishes.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every initiation at the end of the quiet period was received, logged and summarised for management within one working day."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Confirm the research quiet period end date with counsel and the banks"
                - "List the analysts expected to initiate and their firms"
                - "Plan who handles factual checks in the week before the date"
                - "Summarise each initiation for management on the day it publishes"
            - name: Supporting a new analyst's initiation
              description: |-
                ## Purpose
                A new analyst picking up the stock has to learn the business, build a model and publish within weeks, often while covering a dozen other companies. A structured onboarding, the modelling guide, an hour with the CFO and a site visit where possible, raises the odds that their first note is accurate.

                ## Milestones
                1. A welcome call held within a week of hearing the analyst will initiate.
                2. The modelling guide, data pack and latest results materials sent.
                3. A management meeting held before the draft is due.
                4. A factual check of the draft offered under the protocol.
                5. The analyst added to the register and every distribution list.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new covering analyst received the modelling pack and a management meeting before initiating, and is on the register and distribution lists."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Call the new analyst within a week of hearing they will initiate"
                - "Send the modelling guide, data pack and latest results materials"
                - "Book an hour with the CFO before their draft is due"
                - "Add the analyst to the register and every distribution list"
            - name: Pre-close briefing for covering analysts
              description: |-
                ## Purpose
                In several markets, companies hold a short call or publish a statement just before the closed period begins, reminding analysts of public factors such as currency moves, calendar effects or disposals. Run carefully, with an approved script that is published for everyone, it reduces surprises at results without disclosing anything new.

                ## Milestones
                1. A decision on a call, a published statement or both.
                2. A script listing only public factors approved by the disclosure committee.
                3. The briefing delivered to all covering analysts at the same time.
                4. The script or transcript published on the investor website the same day.
                5. Questions asked logged in the interaction log.

                ## Notes
                Private pre-close calls that guide individual analysts are where many companies have come unstuck. Keep it scripted and public.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A scripted pre-close briefing reaches all covering analysts before each closed period, with the script or transcript published."
                cadence: cyclic
              tasks:
                - "Decide with the CFO between a pre-close call, a statement or both"
                - "Draft the pre-close script listing only public factors"
                - "Get disclosure committee approval for the script"
                - "Publish the script or transcript on the website the same day"
            - name: Annual company vote in analyst surveys
              description: |-
                ## Purpose
                Some analyst ranking surveys invite listed companies to rate the analysts who cover them on knowledge, accuracy and fairness. Voting each year from a consistent scoring process, rather than a rushed impression, recognises good analysts and gives the company a reason to look at each relationship.

                ## Milestones
                1. The surveys that accept company votes identified.
                2. Scoring criteria aligned with the annual coverage review.
                3. Votes submitted before each survey closes.
                4. Scores filed alongside the coverage review.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Company votes are submitted in every relevant analyst survey each year, using the same scoring criteria as the annual coverage review."
                cadence: cyclic
              tasks:
                - "Find which analyst surveys accept votes from listed companies"
                - "Score each analyst using the coverage review criteria"
                - "Submit the company's analyst survey votes before they close @recurring(yearly)"
                - "File the scores alongside the annual coverage review"
            - name: Coverage handover when an analyst changes firm
              description: |-
                ## Purpose
                Each time an analyst moves bank, the coverage may follow them, pass to a colleague or simply stop. Handling the handover quickly, updating the register, briefing the successor and arranging research access at the new firm, avoids months of silence or a rebuilt model full of old errors.

                ## Milestones
                1. The departure confirmed and the old firm's plans for the coverage known.
                2. The register and distribution lists updated.
                3. The successor briefed with the modelling guide and data pack.
                4. Research access arranged at the analyst's new firm if they restart coverage.
              priority: low
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Within two weeks of an analyst's move, the register, distribution lists and research access are updated and the successor has been briefed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the departing analyst's firm who will take over the coverage"
                - "Update the register and remove the old contact from distribution"
                - "Brief the successor with the modelling guide and data pack"
                - "Arrange research access at the analyst's new firm if they restart coverage"
            - name: Small cap with one or two covering analysts
              description: |-
                ## Purpose
                With only one or two analysts, a single note can define the stock, and losing either would leave investors with no published model at all. A small-cap plan concentrates on keeping those analysts well informed, publishing more modelling help on the website for investors who model for themselves, and working towards a third source of research.

                ## Milestones
                1. The security of each existing analyst's coverage discussed with them.
                2. The historic data pack published on the investor website.
                3. Quarterly touchpoints booked with both analysts outside closed periods.
                4. One route to a third research source chosen and started.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Both existing analysts have a quarterly touchpoint plan, website modelling help is live, and a route to a third research source is under way."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask each covering analyst how secure their coverage of the stock is"
                - "Publish the historic data pack on the investor website"
                - "Book quarterly touchpoints with both analysts outside closed periods"
                - "Pick one route to a third source of research and start it"
            - name: Inheriting analyst relationships as a new IR manager
              description: |-
                ## Purpose
                A manager stepping into investor relations inherits analysts who knew the predecessor well and may test the newcomer on the first call. Reading their last year of notes, meeting each analyst in the first six weeks and checking what the predecessor promised rebuilds the relationships on your own footing.

                ## Milestones
                1. The predecessor's analyst log and handover notes reviewed.
                2. Each analyst's notes from the last twelve months read.
                3. An introductory call held with every covering analyst within six weeks.
                4. Open promises made by the predecessor listed and each one honoured or closed.
                5. The next callback round run personally.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every covering analyst has had an introductory call with the new IR manager within six weeks, and the predecessor's open commitments are closed or honoured."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the predecessor's analyst log and handover notes"
                - "Read each analyst's notes from the last twelve months"
                - "Book an introductory call with every covering analyst"
                - "List open promises the predecessor made to analysts and close each one"
            - name: New CFO introduction round with analysts
              description: |-
                ## Purpose
                First impressions of a new CFO form quickly, and too often the first contact is a results call under pressure. An introduction round in the CFO's first two months, short meetings with each covering analyst on public topics only, gives the CFO a read on the coverage and gives the analysts a sense of the CFO's priorities and style.

                ## Milestones
                1. A one-page briefing on each analyst prepared for the new CFO.
                2. Introduction meetings held with every covering analyst before the first results.
                3. Each meeting logged with the questions the CFO was asked.
                4. Any follow-up material sent, drawn from public documents only.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new CFO met every covering analyst before their first results, with each meeting logged and follow-ups completed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Prepare a one-page briefing on each analyst for the new CFO"
                - "Book introduction meetings outside the closed period"
                - "Log each meeting and the questions the CFO was asked"
                - "Send any follow-up material using public documents only"
            - name: Losing coverage when a broker drops the stock
              description: |-
                ## Purpose
                Brokers drop coverage when an analyst leaves, a sector team is restructured or the stock no longer earns enough commission, and the company usually hears about it last. A calm plan, confirming the facts, telling the board, understanding the effect on consensus and starting on replacement coverage, limits the damage.

                ## Milestones
                1. The reason and the date of the last note confirmed with the firm.
                2. The register and the consensus contributor list updated.
                3. The board told what changes in coverage and consensus.
                4. The firm's investor clients added to the targeting list.
                5. A replacement coverage plan started.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within a month of a firm dropping coverage, the board is informed, consensus is updated and a replacement coverage plan is in progress."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the firm for the reason and the date of its last note"
                - "Update the register and the consensus contributor list"
                - "Tell the board what changes in coverage and consensus"
                - "Add the firm's investor clients to the targeting list"
            - name: Analyst contact during an offer period
              description: |-
                ## Purpose
                During a takeover or merger, analysts at advising banks may be restricted, takeover rules in many markets add their own disclosure duties, and every statement can be scrutinised. A protocol agreed with the company's advisers, covering who may speak to analysts, what can be said and how information is published, keeps the coverage informed without breaching those rules.

                ## Milestones
                1. Restricted analysts identified with the advisers.
                2. An analyst contact protocol approved by advisers and counsel.
                3. Holding answers prepared for the questions analysts will ask.
                4. Every analyst contact logged throughout the offer period.
                5. A short review held once the offer period ends.

                ## Notes
                Takeover rules differ sharply by market. Your advisers and counsel decide what may be said; this project organises it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An offer period analyst protocol approved by advisers and counsel is in force, with every analyst contact logged throughout."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask advisers which covering analysts are restricted during the offer"
                - "Draft the analyst contact protocol for adviser and counsel approval"
                - "Prepare holding answers for the questions analysts will ask"
                - "Log every analyst contact during the offer period"
            - name: Responding to a downgrade or sell initiation
              description: |-
                ## Purpose
                Sell ratings and sharp downgrades from respected analysts can knock the share price and the board's confidence on the same morning. A measured response, reading the argument properly, correcting factual errors only, offering management access and addressing real public misconceptions through normal channels, serves the company far better than complaining.

                ## Milestones
                1. The note read in full and its argument summarised within hours.
                2. Factual errors separated from differences of view.
                3. The board briefed on the facts the same day.
                4. The analyst offered a meeting on the public facts.
                5. Justified themes addressed in the next public materials.

                ## Notes
                Never threaten access, withhold information or complain to the analyst's employer about a negative view. Disagreeing is the analyst's job.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within one working day of a downgrade, the board has a factual briefing and any factual errors have been raised with the analyst."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the downgrade argument in five lines for the CEO and CFO"
                - "Separate factual errors in the note from differences of view"
                - "Raise factual errors with the analyst through the correction routine"
                - "Offer the analyst a meeting to go through the public facts"
            - name: Coverage after a demerger or spin-off
              description: |-
                ## Purpose
                Splitting a company creates two stocks that need coverage, and analysts at the parent may only want to follow one. Planning research coverage for both companies well before separation, with separate modelling guides and historic data restated for each, prevents the spun-off company starting life with no analysts at all.

                ## Milestones
                1. Each current analyst's intentions for both companies known.
                2. Restated historic data built for each company from public filings.
                3. A separate modelling guide for each company.
                4. An analyst teach-in on both companies held before separation.
                5. Coverage of both companies confirmed after the first day of trading.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Both companies have at least two committed covering analysts and their own modelling guide by the first day of separate trading."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask each covering analyst whether they intend to follow both companies"
                - "Build restated historic data for each company from public filings"
                - "Write a modelling guide for each company"
                - "Hold an analyst teach-in on both companies before separation"
            - name: Short-seller report and the covering analysts
              description: |-
                ## Purpose
                When an activist short-seller publishes a report alleging problems, covering analysts call within the hour, and their published reaction often matters more to investors than the company's own statement. A plan prepared in advance, for informing analysts through public statements, rebutting factual claims with evidence and holding a call open to every firm, limits the damage.

                ## Milestones
                1. A response team and its approvers named.
                2. The process for publishing factual rebuttals approved by counsel.
                3. An invitation and agenda ready for an analyst call open to all covering firms.
                4. A rule that analyst questions are answered from public statements only.
                5. A tabletop exercise on a fictional short report completed.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A short-seller response plan naming the team, approvers and analyst call process is approved by counsel and tested in a tabletop exercise."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Name the short report response team and its approvers"
                - "Agree with counsel how factual rebuttals will be published"
                - "Draft the invitation for an analyst call open to all covering firms"
                - "Run a tabletop exercise on a fictional short report"
            - name: Estimate revisions and share price reaction study
              description: |-
                ## Purpose
                Not every note moves the stock: initiations from top-ranked analysts, rating changes and cuts to next year's earnings tend to matter far more than small target price tweaks. Studying two or three years of revisions against relative share price moves shows the board which research really drives the shares and which can safely be read without alarm.

                ## Milestones
                1. A data set of rating changes and estimate revisions over at least two years.
                2. Each change's share price move measured against the sector index.
                3. Patterns written up by type of change and by analyst.
                4. The findings presented to the CFO.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study of at least two years of rating and estimate changes against relative share price moves is written up and presented to the CFO."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export two years of rating and estimate changes for the stock"
                - "Measure each change's share price move against the sector index"
                - "Write up which kinds of change move the shares"
                - "Present the findings to the CFO alongside the tracker"
            - name: Independent research and data-driven analysts
              description: |-
                ## Purpose
                Beyond the brokers, independent research houses, quantitative estimate providers and alternative data firms now publish views or numbers on listed companies, and some investors read them more closely than broker notes. Mapping who publishes on the stock outside the sell side, and deciding how far to engage with each, keeps the analyst programme complete.

                ## Milestones
                1. A list of independent and data-driven publishers covering the stock.
                2. Each publisher's reach with your shareholders noted.
                3. An engagement level decided for each publisher.
                4. Chosen publishers added to the register and distribution lists.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A map of independent and data-driven research on the stock exists, with an agreed engagement level recorded for each publisher."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search for independent research houses that publish on the stock"
                - "Ask three top investors which non-broker research they read"
                - "Decide the engagement level for each publisher"
                - "Add the chosen publishers to the register and distribution lists"
---

# Sell-Side Analyst Relations

This area is for investor relations managers, CFOs and their teams at listed companies who work with the equity research analysts covering the stock. It starts with the foundations (a correct coverage register, analyst profiles, rules for draft notes and model questions, a modelling guide and a company-run consensus), moves through the operating rhythm and the knowledge behind how research works, then the decisions on coverage and disclosure, the dated events, the situations a new IR manager or a thinly covered small cap faces, and finally specialist work such as demergers and short-seller reports.

What repeats is a research digest every Monday and Thursday, a Friday sweep of open analyst queries, monthly checks of the interaction log, vendor consensus, rating changes and neglected analysts, a quarterly callback round and dispersion review, and yearly coverage reviews, feedback interviews and survey votes. The Person, Meeting notes, Metrics log and Feedback themes templates pair with the analyst profiles, the interaction log, the sentiment baseline and the feedback interviews. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
