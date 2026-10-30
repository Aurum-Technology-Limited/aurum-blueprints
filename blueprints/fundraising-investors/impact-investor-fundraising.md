---
id: fundraising-investors.impact-investor-fundraising
name: Impact Investor Fundraising
description: "Raising from impact investors and mission-driven funds: a theory of change, chosen metrics and a baseline, the right capital mix, impact reporting routines, impact diligence and mission protection through to exit."
category: business
version: 1.0.0
tags: [fundraising-investors, impact-investor-fundraising, founder, nonprofit, impact-investing, social-enterprise, impact-measurement, blended-finance]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Impact Investor Fundraising
          description: "Raising from impact investors and mission-driven funds, with impact metrics and reporting that sit alongside financial returns."
          projects:
            - name: Deciding whether impact capital fits your organisation
              description: |-
                ## Purpose
                Impact investors range from funds expecting venture returns to lenders accepting below-market interest in exchange for measurable social or environmental results, and each brings reporting duties a conventional investor would not ask for. Deciding early whether that trade suits you, and which end of the spectrum you belong at, stops months of meetings with funds that were never a fit.

                ## Milestones
                1. The amount needed, the date it must arrive and the use of funds written on one page.
                2. A position chosen on the return spectrum: market-rate equity, concessionary debt, recoverable grant or a mix.
                3. The impact reporting you could realistically sustain each quarter estimated in staff hours.
                4. A go or no-go decision on impact capital agreed by the founders or the board.

                ## Notes
                Impact money is not cheaper by default. Many impact funds price equity exactly like any other venture fund and add reporting on top.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page decision note states the amount, timing, chosen return position and reporting capacity, approved by the founders or the board."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the amount, deadline and use of funds on a single page"
                - "Mark where your model sits between market-rate and concessionary returns"
                - "Estimate the staff hours a quarterly impact report would take"
                - "Take the go or no-go decision to the founders or the board"
            - name: Theory of change for investors
              description: |-
                ## Purpose
                Every serious impact investor asks how your activities lead to the change you claim, and a vague answer is the most common reason mission-driven companies stall at first meeting. A one-page theory of change, running from inputs through activities, outputs and outcomes to long-term impact with the assumptions made explicit, becomes the spine of every pitch, metric and report that follows.

                ## Milestones
                1. The problem stated with one credible figure on its scale and who experiences it.
                2. A chain from activities to outputs, outcomes and impact drawn on one page.
                3. The three riskiest assumptions in the chain named, each with the evidence that exists today.
                4. The diagram tested with two people who know the field and revised once.

                ## Notes
                Keep outputs and outcomes apart. Training 500 farmers is an output; higher farm income a year later is an outcome.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page theory of change with named assumptions and evidence, reviewed by two external people and revised."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write one sentence on the problem and one figure on its scale"
                - "Draw the chain from activities through outcomes to long-term impact"
                - "Name the three assumptions most likely to be wrong"
                - "Ask two people in the field to challenge the diagram"
            - name: Choosing the impact metrics you will report
              description: |-
                ## Purpose
                Reporting thirty indicators exhausts a small team and tells investors nothing, while reporting one invites the question of what it hides. Picking four to eight metrics tied directly to the theory of change, using standard definitions from a recognised catalogue where one exists, makes your numbers comparable and easier for funds to aggregate across their portfolio.

                ## Milestones
                1. A long list of candidate metrics drawn from each outcome in the theory of change.
                2. Four to eight metrics chosen, each with a definition, unit, source and collection frequency.
                3. Standard catalogue codes matched to each metric where a match exists.
                4. The metric set shared with at least one target investor and their comments recorded.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written metric set of four to eight indicators, each with definition, unit, source and frequency, reviewed by one target investor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every metric that could evidence each outcome in your theory of change"
                - "Cut the list to four to eight that you can collect reliably"
                - "Write a definition, unit, source and frequency for each one"
                - "Send the set to a friendly impact investor for comment"
                - "Revisit the metric set with investors before each annual report @recurring(yearly)"
            - name: Impact baseline measurement
              description: |-
                ## Purpose
                Claims of improvement mean little without a starting point, and investors will ask what the numbers looked like before you arrived. Measuring each chosen metric now, or finding a credible published baseline for the population you serve, gives every later report something honest to compare against.

                ## Milestones
                1. A baseline value recorded for each chosen metric, with date and method.
                2. Any metric without a direct baseline matched to a published comparison figure and its source.
                3. Sample sizes and known gaps written alongside each value.
                4. The baseline saved as the first row of the impact data log.

                ## Notes
                Start from the **Metrics log** template. A small, well-documented baseline beats a large one nobody can reproduce.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every chosen metric has a dated baseline value with its method and sample size recorded in the impact data log."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set up an impact data log from the metrics log template"
                - "Pull the data you already hold for each chosen metric"
                - "Find a published comparison figure for any metric with no data"
                - "Record method, sample size and gaps beside every baseline value"
            - name: Mission lock in the founding documents
              description: |-
                ## Purpose
                Mission-driven funds worry that a mission written only in a pitch deck can be dropped by the next board or the eventual buyer. Writing the mission into the articles or constitution, through a benefit company form, a community interest structure or an amended objects clause depending on the country, shows investors the purpose survives a change of control.

                ## Milestones
                1. The legal forms available in your country for mission-led companies listed with their duties.
                2. Advice taken from a corporate lawyer on the right option and its effect on future investors.
                3. Draft wording for the mission clause agreed by founders or trustees.
                4. The change adopted by the required shareholder or board resolution and filed with the registry.

                ## Notes
                Take legal advice before amending articles. Some forms restrict dividends or asset transfers in ways that rule out certain investors.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A mission clause is adopted by resolution and filed with the company registry, with the lawyer's advice note kept on file."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the mission-led legal forms available in your country"
                - "Book a call with a corporate lawyer about mission lock options"
                - "Draft the mission clause wording with your co-founders or trustees"
                - "Pass the resolution and file the amended articles with the registry"
            - name: Impact investor landscape map
              description: |-
                ## Purpose
                Mission-driven money comes from impact venture funds, community development lenders, foundations investing from their endowment, development finance institutions, social investment wholesalers and impact angel networks, and each wants different returns, cheque sizes and evidence. Mapping the categories that could fund you, with two or three named examples of each, shows where the realistic money is before any list of names gets long.

                ## Milestones
                1. Each investor category described with its typical instrument, cheque size and return expectation.
                2. Categories that cannot fund your stage or legal form crossed off with the reason.
                3. Two or three named examples found for each remaining category.
                4. A ranked view of which two categories to approach first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of impact investor categories with instruments, cheque sizes and named examples, ranked to show the two to approach first."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the impact investor categories active in your country and sector"
                - "Note each category's usual instrument, cheque size and return target"
                - "Cross off categories that cannot fund your stage or legal form"
                - "Find two or three named examples in each remaining category"
            - name: Impact raise tracker with thesis fit
              description: |-
                ## Purpose
                A normal fundraising pipeline tracks stage and cheque size, but with impact investors the deciding column is often thesis fit: whether your outcome, geography and beneficiary group match what their fund is mandated to back. A tracker that scores fit on those three points alongside the usual stages keeps outreach aimed at funds that are allowed to say yes.

                ## Milestones
                1. A tracker with columns for stage, cheque size, instrument, thesis fit and next step.
                2. Thesis fit scored for each target on outcome, geography and beneficiary group.
                3. Every target with a fit score below the agreed threshold parked.
                4. The tracker updated after every investor conversation for the life of the raise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live tracker scores every target on thesis fit and is updated within a day of each investor conversation during the raise."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a tracker with stage, cheque, instrument and thesis fit columns"
                - "Read each target's published impact thesis or mandate"
                - "Score each target on outcome, geography and beneficiary match"
                - "Park every target that falls below your fit threshold"
            - name: Capital stack for a mission-driven raise
              description: |-
                ## Purpose
                Mission-driven organisations often fund one programme from several sources at once: equity, a concessionary loan, a recoverable grant, a guarantee that makes a bank lend. Designing the stack before outreach shows which piece each investor type should fill, which pieces depend on others closing first, and what the blended cost of the money will be.

                ## Milestones
                1. The total requirement split into the pieces it could come from, each with a target amount.
                2. Dependencies noted, such as a bank loan that only closes once a guarantee is in place.
                3. The blended cost of the stack estimated and checked with your accountant.
                4. The stack agreed internally and turned into a one-page summary for investors.

                ## Notes
                Blended finance often unlocks commercial money only once a concessionary piece is committed, so the order of closing matters as much as the amounts.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page capital stack shows each funding piece, its target amount, its dependencies and the blended cost, agreed internally."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Split the total requirement into equity, debt, grant and guarantee pieces"
                - "Note which pieces cannot close until another is committed"
                - "Ask your accountant to check the blended cost of the stack"
                - "Turn the agreed stack into a one-page investor summary"
            - name: Impact case one-pager
              description: |-
                ## Purpose
                Investment committees at impact funds read the financial case and the impact case side by side, and many founders bury the second inside a long deck. A single page covering the problem, the theory of change in brief, the chosen metrics with baseline values, early results and the impact you expect from this money gives the analyst exactly what they paste into their memo.

                ## Milestones
                1. A draft page covering problem, approach, metrics, baseline, early results and expected impact.
                2. Every number on the page traced to its source in the impact data log.
                3. The page tested on one impact investor and one person outside the sector.
                4. A final version saved as a PDF ready to send after first meetings.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page impact case with every figure sourced, tested on two readers and saved as a PDF."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft an impact one-pager from the theory of change and metric set"
                - "Check every figure on the page against the impact data log"
                - "Test the page on an impact investor and an outsider"
                - "Save the final version as a PDF for follow-up emails"
            - name: Monthly impact data collection
              description: |-
                ## Purpose
                Numbers gathered in a rush the week before a report are the ones that fall apart under questioning. A fixed day each month when programme, sales or field data is pulled into the impact log, with whoever owns each metric named, keeps the evidence current and makes quarterly reporting a matter of reading rather than chasing.

                ## Milestones
                1. An owner named for each metric, with the source they pull it from.
                2. A fixed collection day each month in every owner's calendar.
                3. Three consecutive months of data entered on time with no gaps.
                4. Any gap or late entry noted with the reason beside it.

                ## Notes
                Start from the **Metrics log** template if you have not already built one in the baseline project.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of impact data entered by the agreed day, with every gap explained in the log."
                cadence: rolling
              tasks:
                - "Name an owner and a source for each impact metric"
                - "Pull this month's impact data into the log @recurring(monthly:5)"
                - "Mark any missing value with the reason it is missing"
            - name: Quarterly impact report to investors
              description: |-
                ## Purpose
                Most impact term sheets and loan agreements require a periodic impact report, and investors pass the figures on to their own limited partners or trustees. A standard quarterly format with the agreed metrics against baseline and target, a short narrative and one beneficiary story keeps you compliant and gives investors material they can reuse.

                ## Milestones
                1. The reporting obligations from every investment agreement listed in one place.
                2. A report template with metrics, targets, narrative and one case story.
                3. Each quarterly report sent within the deadline the agreements set.
                4. Investor questions on each report answered and logged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly impact reports sent within the contractual deadline, each showing metrics against baseline and target."
                cadence: rolling
              tasks:
                - "List the impact reporting duties in every investment agreement"
                - "Build a quarterly report template with metrics, narrative and a case story"
                - "Write and send the quarterly impact report to investors @recurring(quarterly)"
                - "Log each investor question on the report and the answer given"
            - name: Annual impact report
              description: |-
                ## Purpose
                Once a year, investors, prospective investors and often the public expect a fuller account: twelve months of results against target, what did not work, lessons learned and plans for the year ahead. Publishing an honest annual report, including the misses, is often the document a new impact investor reads first and the one that earns their trust.

                ## Milestones
                1. Twelve months of metric data reconciled against the annual targets.
                2. A section on what fell short and what changes as a result.
                3. The draft reviewed by the board or an external reader for overstated claims.
                4. The report published and sent to every current investor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An annual impact report covering results against target and shortfalls is published and sent to all investors within three months of year end."
                cadence: cyclic
              tasks:
                - "Reconcile the year's impact data against the annual targets"
                - "Write the section on what fell short and why"
                - "Ask a board member to read the draft for overstated claims"
                - "Publish the annual impact report and send it to every investor @recurring(yearly)"
            - name: Weekly impact raise pipeline review
              description: |-
                ## Purpose
                Raises from impact investors often move slower than conventional ones, with investment committees that meet monthly and impact diligence on top of financial diligence, so a raise can drift for weeks without anyone noticing. A short weekly review of the tracker, while a raise is live, keeps every conversation moving to a named next step.

                ## Milestones
                1. A fixed thirty-minute slot each week for the duration of the raise.
                2. Every live conversation given a next step and a date.
                3. Conversations with no movement for three weeks chased or closed.
                4. A short weekly note shared with co-founders or the board chair.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During the raise, a weekly review is held every week and every live conversation has a dated next step."
                cadence: rolling
              tasks:
                - "Book a thirty-minute weekly slot for the life of the raise"
                - "Review the tracker and set a next step for every live investor @recurring(weekly:mon)"
                - "Chase or close any conversation idle for three weeks"
                - "Send a three-line pipeline note to co-founders after each review"
            - name: Impact data quality checks
              description: |-
                ## Purpose
                Outcome figures rarely pass through the same controls as the accounts, so a double-counted beneficiary or a spreadsheet formula error can sit in investor reports for a year. A quarterly sample check, tracing a handful of reported numbers back to source records, catches errors before an investor or verifier does.

                ## Milestones
                1. A written check method: which metrics, how many records and who checks.
                2. Each quarter, five records per metric traced back to source.
                3. Errors found corrected in the log and in any report already sent.
                4. A running record of checks made and errors found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly data checks completed, each tracing a sample to source, with every error corrected and recorded."
                cadence: rolling
              tasks:
                - "Write a one-paragraph check method for the impact data"
                - "Trace five records per metric back to source documents @recurring(quarterly)"
                - "Correct any error in the log and notify investors if a sent figure changes"
            - name: Beneficiary and customer feedback surveys
              description: |-
                ## Purpose
                Investors increasingly want to hear from the people your work is meant to help, not only from your own data. Short, regular phone or text surveys asking whether life has changed, how much, and whether it would have changed anyway give you outcome evidence, a net promoter style score and quotes that carry more weight than any internal figure.

                ## Milestones
                1. A survey of no more than ten questions agreed, including one on what would have happened otherwise.
                2. A sampling method chosen that reaches a fair cross-section, not only happy customers.
                3. The first round of responses collected and summarised.
                4. Findings fed into the next quarterly impact report.

                ## Notes
                Get consent and keep responses anonymous unless people agree to be quoted. Data protection rules apply to survey data as to any other personal data.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly survey rounds completed with a documented sample, each summarised in the matching impact report."
                cadence: rolling
              tasks:
                - "Draft a survey of ten questions or fewer, including one on counterfactual change"
                - "Choose a sampling method that reaches unhappy customers too"
                - "Run a survey round and summarise the responses @recurring(quarterly)"
                - "Add the survey findings to the next impact report"
            - name: Impact covenant and KPI compliance calendar
              description: |-
                ## Purpose
                Loans from social lenders, and some equity deals, carry impact covenants: a minimum share of customers on low incomes, a cap on emissions, a reporting date that triggers a margin step-up if missed. A calendar of every impact obligation, checked monthly, means a breach is spotted while there is still time to talk to the investor rather than after it lands.

                ## Milestones
                1. Every impact covenant, KPI threshold and reporting date extracted from the agreements.
                2. Each obligation entered in a calendar with an owner and a warning date.
                3. A monthly check of current figures against each threshold.
                4. A written rule for telling investors early when a threshold is at risk.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every impact covenant is in a calendar with an owner, checked monthly, and no reporting date has been missed in twelve months."
                cadence: rolling
              tasks:
                - "Extract every impact covenant and reporting date from the agreements"
                - "Enter each one in a shared calendar with an owner and warning date"
                - "Check current figures against every impact covenant threshold @recurring(monthly:20)"
                - "Write the rule for warning investors early about a likely breach"
            - name: Impact investor touches between rounds
              description: |-
                ## Purpose
                The impact investing world is smaller than general venture, their partners talk to each other, and the fund that passed last year may lead the next round if it has watched you deliver. A light monthly rhythm of one useful touch to a few investors who passed or are not yet ready keeps them close without a formal update.

                ## Milestones
                1. A short list of ten impact investors to keep warm, with the reason each passed or waited.
                2. A note against each of what would change their mind.
                3. Two or three personal touches sent each month: a result, a field visit invite, a relevant report.
                4. At least three of the ten re-engaged before the next raise starts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly touches sent for six months to a list of ten impact investors, with at least three agreeing to a meeting before the next raise."
                cadence: rolling
              tasks:
                - "List ten impact investors to keep warm and why each passed"
                - "Note what result would change each investor's mind"
                - "Send two or three personal touches with a result or invite @recurring(monthly:12)"
            - name: Impact risk register
              description: |-
                ## Purpose
                Impact can fail even when the business succeeds: the evidence turns out weaker than assumed, beneficiaries drop off, an outside shock wipes out the gains, or growth pushes the model towards customers who need it less. Keeping these risks on a register reviewed each quarter shows investors you manage impact as seriously as revenue.

                ## Milestones
                1. At least eight impact risks recorded across evidence, drop-off, external, execution and mission drift.
                2. Each risk rated for likelihood and effect with an owner and a mitigation.
                3. The register reviewed each quarter and changes noted.
                4. The top three impact risks summarised in the annual impact report.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of at least eight rated impact risks with owners, reviewed in four consecutive quarters."
                cadence: rolling
              tasks:
                - "Create an impact risk register from the risk register template"
                - "Record at least eight risks to the impact, not the business"
                - "Review ratings and mitigations on the impact risk register @recurring(quarterly)"
            - name: The five dimensions of impact framework
              description: |-
                ## Purpose
                Much of the impact investing industry describes impact through five questions: what outcome occurs, who experiences it, how much change there is, what the contribution of the enterprise is, and what the risk is that impact differs from expectations. Learning to describe your own work in those terms lets you answer due diligence questionnaires in the language investors already use.

                ## Milestones
                1. The five dimensions read from the source framework and summarised in your own words.
                2. Your main outcome described against each dimension in a paragraph.
                3. The weakest dimension for your organisation identified with a plan to strengthen it.
                4. The summary checked with one impact investor or adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written description of your main outcome against all five impact dimensions, reviewed by an impact investor or adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the published guidance on the five dimensions of impact"
                - "Write a paragraph on your main outcome for each dimension"
                - "Pick the weakest dimension and note how to strengthen it"
                - "Ask an impact adviser to check the summary"
            - name: Using a standard impact metrics catalogue
              description: |-
                ## Purpose
                Industry catalogues of impact metrics, such as IRIS+, give standard definitions so that jobs created or tonnes of emissions avoided mean the same thing across thousands of companies. Learning how to search the catalogue, read a metric's definition and pick the core set for your theme saves you from inventing metrics investors cannot compare.

                ## Milestones
                1. The catalogue's structure of themes, strategies and core metric sets understood.
                2. The core metric set for your impact theme found and read.
                3. Each of your chosen metrics matched to a catalogue definition or marked as custom.
                4. Differences between your definitions and the catalogue's written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each chosen metric is mapped to a catalogue definition or marked custom, with any definitional difference noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the impact metrics catalogue and find your impact theme"
                - "Read the core metric set suggested for that theme"
                - "Map each of your metrics to a catalogue definition"
                - "Note where your definition differs and why"
            - name: Impact investor return expectations
              description: |-
                ## Purpose
                Some impact funds target market-rate returns and will push for growth as hard as any venture fund, others accept lower returns for deeper impact, and the language for this differs between investors. Understanding where each target sits, and how they talk about concessionary capital, impact-first and finance-first, lets you pitch the right story to the right fund.

                ## Milestones
                1. The terms impact-first, finance-first and concessionary explained in your own notes.
                2. The return expectation of each top target found from their website, reports or founders they back.
                3. Targets grouped by expectation so the pitch emphasis can change between them.
                4. One conversation held with a founder backed by each group.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Top targets grouped by return expectation, with each group's expectation confirmed by one founder they have backed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write short definitions of impact-first, finance-first and concessionary capital"
                - "Find each top target's stated return expectation"
                - "Group targets by expectation in the tracker"
                - "Ask a founder from each group how the fund behaved on returns"
            - name: Additionality and contribution explained
              description: |-
                ## Purpose
                Investors will ask whether the change would have happened without you, and whether their money adds anything a commercial investor would not. Learning how additionality and contribution are argued, with comparison groups, market gaps or evidence from similar programmes, turns a question that trips many founders into one of the strongest parts of the pitch.

                ## Milestones
                1. Enterprise contribution and investor contribution distinguished in your notes.
                2. The best available comparison for your outcome found: a control group, a published study or a market gap.
                3. A two-paragraph contribution argument written for your organisation.
                4. The argument tested in a practice conversation with an adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-paragraph contribution argument with a named comparison source, tested in one practice conversation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read how impact frameworks define enterprise and investor contribution"
                - "Find the best comparison evidence for your main outcome"
                - "Write a two-paragraph contribution argument"
                - "Practise answering the would-it-happen-anyway question with an adviser"
            - name: Social return on investment basics and limits
              description: |-
                ## Purpose
                Some funders and commissioners ask for a social return ratio, a figure for social value created per unit of money invested. Learning how the method works, which valuations it relies on and why many impact investors treat the headline ratio with caution helps you decide whether to produce one and how to present it without overclaiming.

                ## Milestones
                1. The main steps of a social return analysis summarised in your own words.
                2. The financial proxies an analysis of your work would need listed with possible sources.
                3. The main criticisms of the method noted.
                4. A decision recorded on whether a social return figure helps your raise.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on the social return method, its proxies and criticisms, ending with a recorded decision on whether to use it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a published guide to social return on investment"
                - "List the financial proxies your outcomes would need"
                - "Note the main criticisms of headline return ratios"
                - "Decide and record whether a ratio would help your raise"
            - name: Impact clauses in investment terms
              description: |-
                ## Purpose
                Deals with impact investors carry clauses ordinary venture terms do not: impact reporting duties, mission covenants, consent rights over changes to the mission, impact ratchets that move valuation or interest with results, and exit provisions that protect the mission. Learning what each looks like before a term sheet arrives means you can discuss them calmly with your lawyer instead of meeting them for the first time under deadline.

                ## Milestones
                1. Each common impact clause described in a sentence with what it protects.
                2. Sample impact terms from published model documents read.
                3. The clauses you would accept, negotiate or resist marked provisionally.
                4. The list reviewed with your lawyer before any term sheet negotiation.

                ## Notes
                This is preparation, not legal advice. Your lawyer decides how any clause applies to your company.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to common impact clauses, marked accept, negotiate or resist, reviewed with your lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the impact clauses commonly found in impact term sheets"
                - "Read sample impact terms in published model documents"
                - "Mark each clause accept, negotiate or resist"
                - "Review the marked list with your lawyer"
            - name: Avoiding impact washing in your claims
              description: |-
                ## Purpose
                Regulators and investors are cracking down on impact and sustainability claims that cannot be backed up, and one exaggerated sentence on a website can sink trust during diligence. Learning what a defensible claim looks like, and checking every public statement against your evidence, protects the raise and the organisation's reputation.

                ## Milestones
                1. Guidance on fair impact and green claims from your regulator or advertising standards body read.
                2. Every impact claim on the website, deck and reports listed in one place.
                3. Each claim matched to evidence, softened or removed.
                4. A sign-off rule set so new claims are checked before publication.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every public impact claim is listed and matched to evidence, with unsupported claims removed and a sign-off rule in place."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read your regulator's guidance on fair sustainability and impact claims"
                - "List every impact claim on the website, deck and reports"
                - "Match each claim to evidence or rewrite it"
                - "Recheck every public impact claim against current evidence @recurring(yearly)"
            - name: Blended finance structures
              description: |-
                ## Purpose
                Blended finance uses concessionary money such as first-loss capital, guarantees or technical assistance grants to make a deal safe enough for commercial investors to join. Understanding the main structures and who provides each lets founders and nonprofit leaders propose a structure themselves rather than waiting for an investor to design one.

                ## Milestones
                1. First-loss, guarantee, technical assistance and subordinated debt structures each described in a paragraph.
                2. Two published case studies of blended deals in your sector read.
                3. The structure that could suit your raise sketched with roles for each funder.
                4. The sketch discussed with one development or impact lender.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sketched blended structure for your raise, based on two sector case studies, discussed with one development or impact lender."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a paragraph on each main blended finance structure"
                - "Read two blended finance case studies from your sector"
                - "Sketch a structure for your raise with a role for each funder"
                - "Discuss the sketch with an impact or development lender"
            - name: Mapping outcomes to the global goals
              description: |-
                ## Purpose
                Many impact funds report their portfolio against the UN Sustainable Development Goals, and they will ask which goals and targets you contribute to. Mapping at the level of specific targets, not the seventeen headline goals, and claiming only the ones your data supports, avoids the colourful wall of logos that experienced investors now distrust.

                ## Milestones
                1. The targets under each relevant goal read, not only the goal titles.
                2. Each outcome in your theory of change mapped to one or two specific targets.
                3. Goals you contribute to only indirectly marked as such or dropped.
                4. A short mapping table added to the impact case one-pager.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mapping table links each outcome to one or two specific goal targets, with indirect links marked, included in investor materials."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the targets under the goals closest to your work"
                - "Map each outcome to one or two specific targets"
                - "Drop or mark goals you only touch indirectly"
                - "Add the mapping table to the impact one-pager"
            - name: Choosing an impact measurement tool
              description: |-
                ## Purpose
                Evidence of impact often lives in survey apps, programme spreadsheets and the CRM at once, and copying it into reports each quarter eats days. Choosing between a well-built spreadsheet, a general database or dedicated impact management software, against what you collect and who needs to see it, settles where the evidence lives for the next few years.

                ## Milestones
                1. Requirements written: data sources, users, investor portal needs and budget.
                2. Three options compared, including staying with a spreadsheet.
                3. A trial run on one quarter of real data in the leading option.
                4. A decision recorded with the cost and the person responsible for the tool.

                ## Notes
                Start from the **Purchase decision** template. For fewer than ten metrics and a few investors, a well-kept spreadsheet is often enough.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision comparing three options, based on a trial with one quarter of real impact data."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the requirements for storing and reporting impact data"
                - "Compare three options including a spreadsheet"
                - "Trial the leading option with one quarter of real data"
                - "Record the decision, cost and tool owner"
            - name: Deciding on an impact certification
              description: |-
                ## Purpose
                Certifications such as B Corp give investors a third-party view of governance, workers, community and environment, and some impact funds ask about them, but assessment and recertification take real time. Scoring yourself on the free assessment first shows the gap, the effort and whether certification would move any investor you care about.

                ## Milestones
                1. The free self-assessment completed with a provisional score.
                2. The gap to the certification threshold and the main areas to fix listed.
                3. Three target investors asked whether certification matters to them.
                4. A decision recorded to certify now, later or not at all, with reasons.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on certification, backed by a completed self-assessment score and the views of three target investors."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Register for the free impact self-assessment"
                - "Complete the assessment and note the provisional score"
                - "Ask three target investors whether certification affects their decision"
                - "Record the decision and the reasons"
            - name: Choosing an independent impact verifier
              description: |-
                ## Purpose
                Larger impact investors and outcome-linked deals increasingly want impact data checked by someone independent, much as accounts are audited. Choosing a verifier or evaluation partner before it is demanded lets you agree the scope, cost and timetable on your terms rather than under a closing deadline.

                ## Milestones
                1. The verification requirements of current and target investors collected.
                2. Three verifiers or evaluators approached with the same brief.
                3. Proposals compared on scope, method, independence and cost.
                4. A verifier appointed with an engagement letter and a first review date.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An independent verifier is appointed under a signed engagement letter, chosen from three proposals compared on the same brief."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask current investors what impact verification they expect"
                - "Write a short verification brief covering metrics and period"
                - "Send the brief to three verifiers or evaluators"
                - "Compare proposals and sign an engagement letter with the chosen one"
            - name: Impact-linked finance decision
              description: |-
                ## Purpose
                Impact-linked loans and outcome-based terms reward delivery: the interest rate falls or a payment arrives when agreed impact targets are met. They can lower the cost of money, but only if the targets are within your control and the measurement is cheap enough, so the decision needs modelling rather than enthusiasm.

                ## Milestones
                1. Two or three impact-linked offers or models found and summarised.
                2. Proposed targets checked for whether you control them and can measure them reliably.
                3. Cost of money modelled for targets met, partly met and missed.
                4. A decision recorded with the targets you would accept.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on impact-linked finance, with cost modelled for three outcomes and accepted targets named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find two or three impact-linked finance offers in your market"
                - "Check each proposed target for control and measurability"
                - "Model the cost of money if targets are met, partly met or missed"
                - "Write down which targets you would sign up to"
            - name: Responsible exit and mission preservation plan
              description: |-
                ## Purpose
                Every investor needs an exit eventually, and the worry on both sides is a buyer who strips the mission once the deal closes. Agreeing early what a responsible exit looks like, such as buyer screening criteria, mission covenants that survive a sale or an employee or community ownership route, avoids a painful argument at the moment the company is most valuable.

                ## Milestones
                1. Exit routes that fit the mission listed: strategic sale, employee ownership, community ownership, buy-back.
                2. Buyer screening criteria written that the board would apply to any offer.
                3. Mission protections that survive a sale identified with your lawyer.
                4. The plan discussed with impact investors and minuted at a board meeting.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written responsible exit plan with buyer criteria and mission protections, discussed with investors and minuted by the board."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List exit routes that would keep the mission intact"
                - "Write buyer screening criteria for the board to apply"
                - "Ask your lawyer which mission protections survive a sale"
                - "Put the exit plan on the next board agenda"
            - name: Negative impact and harm assessment
              description: |-
                ## Purpose
                Screening for harm matters as much to impact investors as evidence of good: a clean energy product with poor labour practices in its supply chain, or a lending model that over-indebts the borrowers it serves. An honest yearly assessment of where your operations could cause harm, with mitigations, answers the screening questions before they are asked.

                ## Milestones
                1. Potential harms listed across customers, workers, suppliers, communities and the environment.
                2. Each harm rated and given a mitigation and an owner.
                3. The investor exclusion lists of top targets checked against your activities.
                4. A short harm statement ready to include in diligence responses.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A rated list of potential harms with mitigations and a short harm statement, refreshed every year."
                cadence: cyclic
              tasks:
                - "List potential harms to customers, workers, suppliers, communities and nature"
                - "Check your activities against target investors' exclusion lists"
                - "Write a short harm statement for diligence responses"
                - "Refresh the harm assessment with the team @recurring(yearly)"
            - name: ESG policies impact investors ask for
              description: |-
                ## Purpose
                After a first meeting, mission-driven funds usually send an environmental, social and governance questionnaire that asks for written policies on safeguarding, anti-corruption, data protection, diversity and environmental management. Having short, real policies in place, approved by the board and actually followed, prevents a diligence stall and a scramble to write documents overnight.

                ## Milestones
                1. The policies requested in two sample questionnaires listed.
                2. Missing policies drafted in plain language suited to your size.
                3. Each policy approved by the board and shared with staff.
                4. A named owner and review date for each policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every policy requested in two sample ESG questionnaires exists, is board-approved and has an owner and review date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get two sample ESG questionnaires from impact investors or peers"
                - "List the policies they ask for and mark the ones you lack"
                - "Draft the missing policies in plain language"
                - "Review every ESG policy with its owner @recurring(yearly)"
            - name: Impact due diligence questionnaire response
              description: |-
                ## Purpose
                Once an impact fund is serious, an impact due diligence questionnaire arrives alongside the financial requests, covering theory of change, metrics, evidence, harm and governance of the mission. Preparing a master set of answers, with evidence attached, before the first one lands means you can respond in days and reuse the work for every fund after.

                ## Milestones
                1. Two or three real impact questionnaires collected from funds or peers.
                2. A master answer document covering every recurring question.
                3. Evidence for each answer filed in an impact folder of the data room.
                4. The first live questionnaire returned within ten working days.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A master impact diligence answer set with linked evidence exists, and the first live questionnaire is returned within ten working days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect two or three impact diligence questionnaires from peers"
                - "Ask the agent to merge them into one list of distinct questions"
                - "Write a master answer for each question with evidence linked"
                - "File the evidence in an impact folder in the data room"
            - name: Impact investing forum pitch preparation
              description: |-
                ## Purpose
                Conferences, regional forums and impact pitch competitions put dozens of mission-driven investors in one room, but a slot is only worth it with a sharp impact story and a plan for follow-up. Preparing a short pitch, a meeting list and a follow-up routine turns two days at an event into real pipeline.

                ## Milestones
                1. One event chosen where target impact investors will attend.
                2. A three-minute pitch with impact and financial case in balance, rehearsed five times.
                3. Ten meetings requested with named attendees before the event.
                4. Every contact followed up within three working days of the event.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pitch delivered at a chosen impact event, ten meetings requested in advance and every contact followed up within three working days."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Choose one impact event that target investors attend"
                - "Write a three-minute pitch balancing impact and financial case"
                - "Request ten meetings with named attendees in advance"
                - "Follow up every contact within three working days"
            - name: Impact fund investment committee presentation
              description: |-
                ## Purpose
                Many impact funds invite founders to present to their investment committee, which often includes an impact specialist and independent members who have not met you. Preparing for the impact questions as well as the commercial ones, and knowing who sits on the committee, is the difference between a clear yes and a request for another quarter of data.

                ## Milestones
                1. The committee's members, format and timing confirmed with your sponsoring partner.
                2. The hardest likely impact and commercial questions listed with prepared answers.
                3. A practice session run with an adviser playing the impact specialist.
                4. Notes taken on every question asked and the agreed follow-ups sent within two days.

                ## Notes
                Start from the **Meeting notes** template to capture the committee's questions and follow-ups.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The committee presentation is delivered after one practice session, with every question noted and follow-ups sent within two days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask your sponsoring partner who sits on the committee and the format"
                - "List the ten hardest impact and commercial questions with answers"
                - "Run a practice session with an adviser as the impact specialist"
                - "Send the committee follow-ups within two days of presenting"
            - name: First close with an impact anchor investor
              description: |-
                ## Purpose
                A respected impact investor committing first often brings the rest of a round, because smaller funds and foundations rely on its impact diligence. Planning the first close around that anchor, with its impact conditions agreed and its reporting requirements accepted, gives the remaining investors something solid to follow.

                ## Milestones
                1. The anchor investor's commitment, amount and impact conditions confirmed in writing.
                2. The impact reporting schedule in the documents agreed and checked for feasibility.
                3. Other investors told of the anchor and given a close date.
                4. First close completed with funds received and the reporting calendar updated.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "First close completes with the anchor's money received and its impact reporting duties entered in the compliance calendar."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the anchor's amount and impact conditions in writing"
                - "Check the impact reporting schedule is one your team can deliver"
                - "Tell other investors about the anchor and set a close date"
                - "Add every new impact reporting duty to the compliance calendar"
            - name: Annual investor impact day
              description: |-
                ## Purpose
                Impact investors rarely see the work they fund, and a visit to a project site, a clinic or a farm does more for conviction than any report. A yearly impact day, where investors meet beneficiaries and frontline staff and hear the year's results, builds the relationships that matter at the next raise.

                ## Milestones
                1. A date and site chosen that shows the work honestly, not only the best example.
                2. Beneficiaries and staff briefed and their consent to take part obtained.
                3. A short programme with results, a site visit and open questions.
                4. Feedback from attending investors recorded and any requests followed up.

                ## Notes
                Never pressure beneficiaries to take part or to tell a particular story. Safeguarding rules apply to visits as to any other activity.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An impact day held each year with at least three investors attending and their feedback recorded."
                cadence: cyclic
              tasks:
                - "Pick a date and a site that shows the work fairly"
                - "Brief participating staff and beneficiaries and record their consent"
                - "Plan and host the yearly impact day for investors @recurring(yearly)"
                - "Record investor feedback and follow up their requests"
            - name: Charity raising its first social investment loan
              description: |-
                ## Purpose
                Charities and community organisations borrowing for the first time from a social lender face questions grant funders never asked: how will this be repaid, from which income, and what happens if it is not. Preparing the repayment case, trustee approvals and a cash flow that shows the loan working is what moves a nonprofit from grant thinking to investment readiness.

                ## Milestones
                1. The income stream that will repay the loan identified and forecast for its full term.
                2. The charity's governing document checked for power to borrow and give security.
                3. Trustees briefed on the risks and the borrowing approved by resolution.
                4. An application sent to a social lender with a cash flow forecast and impact case.

                ## Notes
                Ask your charity regulator's guidance and a solicitor whether the borrowing needs any consent. Trustees remain responsible for the debt.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A trustee-approved loan application with a full-term repayment forecast is submitted to a social lender."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Identify the earned income that will repay the loan"
                - "Check the governing document for the power to borrow"
                - "Brief trustees on the risks and propose a borrowing resolution"
                - "Check the repayment reserve against the loan schedule @recurring(monthly:28)"
            - name: Programme-related investment from a foundation
              description: |-
                ## Purpose
                Some foundations invest from their endowment or programme budget through low-interest loans, guarantees, equity or recoverable grants, an option many nonprofits and social enterprises never ask about. Approaching a foundation for an investment instead of a grant means a different conversation, with repayment terms and impact conditions, but often a larger sum.

                ## Milestones
                1. Foundations known to make programme-related or mission-related investments identified.
                2. The instrument that fits chosen: loan, guarantee, equity or recoverable grant.
                3. A proposal written showing both the impact and the repayment route.
                4. Terms agreed and the foundation's reporting requirements added to the calendar.

                ## Notes
                Programme-related investment is the US term; other countries use names such as recoverable grant or social investment. Check what each foundation calls it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A foundation investment proposal with an impact case and repayment route is submitted to at least one foundation that makes such investments."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find foundations in your field that invest as well as grant"
                - "Choose between a loan, guarantee, equity or recoverable grant"
                - "Write a proposal covering impact and repayment"
                - "Send the foundation its agreed progress report @recurring(quarterly)"
            - name: Community share or bond offer
              description: |-
                ## Purpose
                Co-operatives, community energy schemes and community-owned shops often raise from hundreds of local people through withdrawable shares or community bonds, combining finance with a membership that champions the mission. Getting the structure, offer document and regulatory position right matters, because ordinary members are investing.

                ## Milestones
                1. The legal form checked for whether it can issue community shares or bonds.
                2. Advice taken on the regulatory position of the offer in your country.
                3. An offer document with risks, returns and impact written in plain language.
                4. A launch plan with a target, minimum and closing date agreed by the board.

                ## Notes
                Rules on offering shares or bonds to the public differ widely by country. Take legal advice before publishing any offer.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A board-approved community offer document with a target, minimum and closing date, reviewed by a lawyer before launch."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Check whether your legal form can issue community shares or bonds"
                - "Book advice on the regulatory position of a public offer"
                - "Draft the offer document with risks and impact in plain words"
                - "Agree the target, minimum and closing date with the board"
            - name: Raising investment into a charity's trading subsidiary
              description: |-
                ## Purpose
                Charities that sell goods or services often put trading into a subsidiary company, and that company can take equity or loans the charity itself could not. Setting it up for investment means clear agreements between charity and subsidiary on profits, staff, brand and control, so investors know what they are buying into and trustees protect the charity.

                ## Milestones
                1. The current relationship between charity and subsidiary written down: ownership, staff, brand and profit flows.
                2. Intercompany agreements reviewed or drafted with legal advice.
                3. The charity's control and the investor's rights in the subsidiary agreed in principle.
                4. Trustees approve the investment structure by resolution.

                ## Notes
                Conflicts of interest between charity and subsidiary need careful handling. Take legal and accounting advice.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An investment structure for the trading subsidiary, with intercompany agreements reviewed by a lawyer, is approved by trustee resolution."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map ownership, staff, brand and profit flows between charity and subsidiary"
                - "Ask a lawyer to review the intercompany agreements"
                - "Agree in principle what control the charity keeps"
                - "Take the structure to trustees for a resolution"
            - name: Raising from development finance institutions
              description: |-
                ## Purpose
                For founders in emerging markets, development finance institutions and the funds they back can be the largest source of patient capital, but they apply detailed environmental and social standards, sanctions and anti-corruption checks and long approval cycles. Knowing their performance standards and timelines in advance avoids being surprised a year into the process.

                ## Milestones
                1. The development finance institutions and DFI-backed funds active in your country and sector listed.
                2. Their environmental and social performance standards read and gaps noted.
                3. An action plan to close the main gaps, with owners.
                4. First meetings held with two institutions or funds and timelines recorded.

                ## Notes
                Expect an environmental and social action plan to become a condition of funding. Budget staff time to deliver it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A gap analysis against DFI performance standards with an owned action plan, and first meetings held with two institutions."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the DFIs and DFI-backed funds active in your country"
                - "Read their environmental and social performance standards"
                - "Write an action plan for the main gaps with owners"
                - "Complete the funder's environmental and social monitoring report @recurring(yearly)"
            - name: Turning a nonprofit pilot into an investable social enterprise
              description: |-
                ## Purpose
                Programmes that start with grants sometimes show they can earn income, and the founders then want investment to scale beyond what donors will fund. Deciding whether to spin out a company, how the charity and new venture relate, and what evidence from the pilot investors will accept is a big step that deserves a deliberate plan.

                ## Milestones
                1. Pilot results summarised: reach, outcomes, unit cost and earned income per customer.
                2. Options compared: stay inside the charity, trading subsidiary or a separate company.
                3. Ownership, intellectual property and staff transfer questions answered with legal advice.
                4. A spin-out decision recorded by trustees and founders.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded spin-out decision, based on summarised pilot economics and legal advice on ownership and assets."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Summarise the pilot's reach, outcomes, unit cost and earned income"
                - "Compare staying in the charity, a subsidiary or a separate company"
                - "Ask a lawyer about intellectual property and staff transfer"
                - "Record the spin-out decision with trustees and founders"
            - name: Negotiating impact ratchets and outcome incentives
              description: |-
                ## Purpose
                Ratchets that move valuation, interest step-downs and equity handed back to founders are all ways investors reward hitting impact targets. These can be generous, but badly drafted targets can punish a company for events outside its control, so negotiating them needs modelling, clear definitions and an agreed verification method.

                ## Milestones
                1. The proposed ratchet or incentive summarised with its targets and payoffs.
                2. Each target tested for control, measurability and gaming risk.
                3. Counter-proposals drafted with clearer definitions and verification.
                4. Final terms agreed with your lawyer's sign-off.

                ## Notes
                Keep impact targets few and verifiable. A ratchet nobody can measure cheaply becomes a dispute later.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Impact ratchet terms are agreed with defined targets, an agreed verification method and the lawyer's sign-off."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the proposed ratchet, its targets and payoffs"
                - "Test each target for control, measurability and gaming risk"
                - "Draft counter-proposals with tighter definitions"
                - "Agree final terms with your lawyer"
            - name: Delivering under a social outcomes contract
              description: |-
                ## Purpose
                In social outcomes contracts, sometimes called social impact bonds, investors fund a delivery organisation upfront and a government or foundation repays them only if agreed outcomes are achieved. Delivery partners carry intense measurement and performance demands, so going in with clear outcome definitions, data systems and a realistic cost model is essential.

                ## Milestones
                1. The outcome definitions, payment triggers and evidence rules read and understood.
                2. Delivery costs modelled against expected outcome payments.
                3. Data systems ready to evidence each outcome to the commissioner's standard.
                4. The first outcome claim submitted and accepted.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The first outcome claim under the contract is submitted with evidence that meets the commissioner's rules and is accepted."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the outcome definitions and payment triggers in the contract"
                - "Model delivery cost against expected outcome payments"
                - "Set up data capture for each outcome to the commissioner's standard"
                - "Submit outcome evidence to the commissioner @recurring(quarterly)"
            - name: Impact attribution study with an external evaluator
              description: |-
                ## Purpose
                Later-stage impact investors and large funders want stronger proof that your work caused the change, not just that change happened. Commissioning an external evaluation with a comparison group, through a randomised trial or a quasi-experimental design, is costly and slow, but it can define the organisation's credibility for years.

                ## Milestones
                1. The evaluation question and outcome agreed in one sentence.
                2. Feasible designs compared with an evaluator, including ethics and cost.
                3. Funding for the study secured, often from a foundation or investor.
                4. The study started with a published or registered analysis plan.

                ## Notes
                Ethics review and informed consent are required for most studies involving people. Agree how results will be published before they are known.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An external attribution study is funded and started, with an evaluation question and analysis plan agreed in writing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the evaluation question and main outcome in one sentence"
                - "Ask two evaluators which designs are feasible for your work"
                - "Find funding for the study from a foundation or investor"
                - "Agree and register the analysis plan before data collection"
            - name: Impact management maturity self-assessment
              description: |-
                ## Purpose
                Fund managers in impact investing are themselves held to industry principles for impact management, and they increasingly expect their companies to show similar discipline: clear objectives, regular review, learning and accountability. Assessing your own practice against a published maturity framework shows where you stand and gives the board a plan for raising it.

                ## Milestones
                1. A published impact management framework chosen as the benchmark.
                2. Current practice scored against each element.
                3. Three improvements chosen for the next twelve months.
                4. The assessment and plan presented to the board and investors.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scored self-assessment against a published framework with three dated improvements, presented to the board."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a published impact management framework as the benchmark"
                - "Score current practice against each element"
                - "Choose three improvements for the next year"
                - "Present the scores and plan to the board"
            - name: Emissions avoided methodology for climate ventures
              description: |-
                ## Purpose
                Climate impact investors want emissions figures they can add to their portfolio totals, and avoided emissions claims are among the most scrutinised numbers in the field. Choosing a recognised methodology, documenting the baseline scenario and keeping the calculation conservative protects the figure under diligence.

                ## Milestones
                1. A recognised greenhouse gas accounting methodology chosen for your product.
                2. Baseline scenario, emission factors and boundaries documented.
                3. The calculation reviewed by a climate specialist or verifier.
                4. The figure reported alongside its assumptions, never alone.

                ## Notes
                Report your own operational emissions as well as emissions avoided. Investors notice when only the flattering number appears.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An avoided emissions calculation with documented method, baseline and factors, reviewed by a climate specialist and updated each year."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a recognised greenhouse gas methodology for your product"
                - "Document the baseline scenario, emission factors and boundaries"
                - "Ask a climate specialist to review the calculation"
                - "Recalculate emissions avoided with the latest data @recurring(yearly)"
---

# Impact Investor Fundraising

This area is for founders of mission-driven companies and for nonprofit leaders raising repayable or equity money from impact investors, foundations making investments and development finance lenders. It starts with the foundations (whether impact capital fits, a theory of change, chosen metrics, a baseline, mission lock and the capital mix), then the routines that keep impact data and investor reporting honest, the frameworks worth learning, decisions such as certification and verification, dated events from diligence to first close, situations specific to charities, hybrids and emerging markets, and specialist work like outcome contracts, impact ratchets and attribution studies.

What repeats is a monthly impact data collection, a weekly pipeline review while a raise is live, quarterly impact reports, data checks, beneficiary surveys and risk reviews, monthly covenant checks and investor touches, and a yearly impact report, harm assessment and investor impact day. The Metrics log template suits impact data, Risk register the impact risks, Purchase decision the measurement tool choice and Meeting notes an investment committee presentation. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
