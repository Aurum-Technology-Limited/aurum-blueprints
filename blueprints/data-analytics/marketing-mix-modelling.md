---
id: data-analytics.marketing-mix-modelling
name: Marketing Mix Modelling
description: "A marketing mix model you can defend: reconciled spend and controls, a validated and calibrated Bayesian model, budget scenarios from response curves, and the refresh rhythm that keeps it trusted."
category: business
version: 1.0.0
tags: [data-analytics, marketing-mix-modelling, researcher, enterprise, mmm, media-effectiveness, budget-allocation, bayesian-modelling]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - metrics-log
    - vendor
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Marketing Mix Modelling
          description: "Using statistical models on historical spend and sales to estimate each marketing channel's contribution when user-level tracking falls short."
          projects:
            - name: Decisions the marketing mix model must inform
              description: |-
                ## Purpose
                A mix model built without a named decision tends to become a handsome chart of channel contributions that nobody acts on. Writing down the two or three decisions it must support, such as next year's channel split, whether to cut a channel or how much to spend in the fourth quarter, fixes the KPI, the time horizon and the level of detail before a single row of data is pulled.

                ## Milestones
                1. A one-page brief naming the decisions, their owners and the date each decision is taken.
                2. The planning calendar dates the model must be ready for written into the brief.
                3. Questions the model will not answer listed, such as creative choice or audience targeting.
                4. The brief signed off by the marketing lead and a finance partner.

                ## Notes
                Most first models are asked to answer too much. Two decisions served well beat ten served loosely.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed one-page brief lists the decisions the model supports, each with an owner and a decision date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the budget decisions taken in the last twelve months and who took them"
                - "Ask the marketing lead which decision next year would change most with better evidence"
                - "Write the questions the model will not answer as a short out-of-scope list"
                - "Get the brief signed off by marketing and finance"
            - name: MMM readiness and data sufficiency check
              description: |-
                ## Purpose
                Mix models need enough history and enough movement in spend to separate one channel from another: as a rough guide, two to three years of weekly data, channels whose spend actually varied, and a sales series not swamped by price and distribution changes. Checking this honestly in a fortnight saves months spent on a model that cannot identify anything.

                ## Milestones
                1. Weeks of usable history counted for the KPI and for each channel.
                2. Spend variation per channel summarised, with flat always-on channels flagged.
                3. The share of total spend in channels that could be modelled separately estimated.
                4. A go, wait or alternative-method recommendation written with reasons.

                ## Notes
                If history is short or spend never varied, a deliberate test plan or a geo experiment may teach you more this year than a model would.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written readiness verdict states weeks of history, spend variation per channel and a go, wait or alternative recommendation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the weeks of clean sales history available at weekly grain"
                - "Plot weekly spend for every channel on a single page"
                - "Flag channels with flat always-on spend or fewer than ten active weeks"
                - "Write the go, wait or alternative recommendation for the sponsor"
            - name: Choosing the KPI and time grain for the model
              description: |-
                ## Purpose
                Revenue, units, new customers, store visits and qualified leads each give a different answer about which channel works, and weekly data behaves very differently from daily. Choosing the target variable and grain deliberately, with finance agreeing that the series matches what they report, prevents a later argument that the model explained the wrong number.

                ## Milestones
                1. Candidate KPIs compared for availability, length of history and link to the decision.
                2. One primary KPI chosen, with any secondary KPI for a separate model noted.
                3. Weekly or daily grain and the week-start day fixed.
                4. The KPI series reconciled to finance reporting for at least one full year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of KPI and time grain, with the KPI series matching finance totals for a full year within an agreed tolerance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every candidate KPI with its source system and months of history"
                - "Pick the week-start day that matches finance and media reporting"
                - "Compare a year of the chosen KPI against finance totals"
                - "Record the KPI decision and the reasons in the model brief"
            - name: Media spend data inventory by channel and week
              description: |-
                ## Purpose
                Spend lives in ad platforms, agency invoices, finance ledgers and broadcast buying reports, often with different week definitions and currencies. An inventory of every source, who owns it and how far back it goes is the step most MMM projects underestimate, and it usually takes longer than the modelling itself.

                ## Milestones
                1. Every paid channel listed with its spend source, owner and earliest available week.
                2. Activity measures such as impressions, GRPs or clicks identified alongside spend where they exist.
                3. Known gaps, currency issues and agency fee treatment noted per channel.
                4. A weekly spend table covering at least two years drafted for every channel.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory lists every paid channel with source, owner and history, and a draft weekly spend table covers at least two years."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every paid channel from last year's media plan and finance ledger"
                - "Ask each agency for weekly spend and delivery by channel for three years"
                - "Record whether spend figures include agency fees and production costs"
                - "Note each channel's earliest usable week and any gaps"
            - name: Reconciling media spend with finance actuals
              description: |-
                ## Purpose
                If modelled spend totals do not match what finance paid, every ROI figure is open to challenge in the first meeting. Reconciling the weekly media table to the ledger by channel and quarter, and documenting the differences that remain, gives the model a spend base finance will sign.

                ## Milestones
                1. Quarterly modelled spend compared with ledger totals for each channel.
                2. Differences above the agreed tolerance explained or corrected.
                3. Treatment of fees, rebates and production costs written down.
                4. A reconciliation note signed by a finance partner.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Modelled spend matches finance actuals within an agreed tolerance for every channel and quarter, with a signed reconciliation note."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the reconciliation tolerance with finance, for example two per cent"
                - "Compare modelled and ledger spend by channel and quarter"
                - "Investigate every difference above tolerance with the agency or platform owner"
                - "Reconcile modelled spend against finance actuals after each refresh @recurring(quarterly)"
            - name: Control variables for price, promotion and seasonality
              description: |-
                ## Purpose
                Sales move for many reasons besides media: price changes, promotions, distribution gains, holidays, competitor launches, weather and the wider economy. Leaving them out hands their effect to whichever channel happened to be running, so a deliberate controls dataset is what stops media being credited with a price cut.

                ## Milestones
                1. A list of non-media drivers agreed with the commercial, trade and pricing teams.
                2. Weekly series for price, promotion depth and distribution assembled for the full history.
                3. A holiday and event calendar built for every market in scope.
                4. Each control documented with source, definition and known weaknesses.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weekly controls table covering price, promotion, distribution, holidays and at least one external factor exists for the full modelling history."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Interview the pricing and trade teams about what moved sales in the past three years"
                - "Build weekly series for average price and promotion depth"
                - "Build a holiday and event calendar for each market"
                - "Update the promotions and price calendar with the month just finished @recurring(monthly:5)"
            - name: Channel grouping and taxonomy rules
              description: |-
                ## Purpose
                A model cannot reliably estimate twenty small channels, and it should not lump branded search together with a social video campaign either. Grouping rules decide which channels stand alone, which are combined and which go into an other bucket, and writing them down stops the grouping shifting every refresh and breaking comparisons.

                ## Milestones
                1. Every media line mapped to exactly one modelling channel.
                2. A minimum spend share and variation rule for a standalone channel written.
                3. Branded search treated deliberately, either as a channel or as an outcome of other media.
                4. The taxonomy shared with agencies so future data arrives already mapped.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written taxonomy maps every media line to a modelling channel using stated rules, and every agency has received it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export every distinct campaign and placement name from the spend table"
                - "Draft rules for when a channel stands alone or is grouped"
                - "Decide how branded search will be treated and record why"
                - "Send the mapping to each agency with a request to use it"
            - name: Versioned modelling dataset and data dictionary
              description: |-
                ## Purpose
                Once KPI, spend and controls exist, they need to come together in one weekly table with a fixed definition for every column. Versioning that table means a result presented in March can be rerun in September and give the same answer, which is the first thing an auditor or a sceptical finance director asks for.

                ## Milestones
                1. One weekly table joining KPI, media and controls with no unexplained gaps.
                2. A data dictionary giving definition, unit, source and owner for every column.
                3. The table stored with a version number and build date.
                4. A build script or documented steps that rebuild the table from source.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned weekly modelling table with a full data dictionary can be rebuilt from source by someone other than its author."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Join KPI, spend and controls into one weekly table"
                - "Write a dictionary entry for every column"
                - "Ask a colleague to rebuild the table from your notes alone"
                - "Archive a dated snapshot of the modelling dataset @recurring(monthly:2)"
            - name: Choosing an MMM tool or modelling approach
              description: |-
                ## Purpose
                Teams now choose between open-source Bayesian libraries such as Meridian, Robyn or PyMC-Marketing, commercial measurement platforms, and agency or consultancy models. The right choice depends on in-house statistical skill, the need for regional detail, transparency requirements and how often the model must refresh, not on the slickest demo.

                ## Milestones
                1. Requirements written covering skills, granularity, refresh frequency, transparency and budget.
                2. Three options scored against the same requirements.
                3. A short trial of the leading option run on your own data.
                4. A recorded choice with the main trade-off stated.

                ## Notes
                Start from the **Purchase decision** template. Check each open-source library's current maintenance status before committing, since some earlier libraries have been retired by their authors.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool or approach is chosen after three options were scored on written requirements, with the decision and its main trade-off recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write requirements for skills, granularity, refresh speed and transparency"
                - "Shortlist three tools or providers and score each against the requirements"
                - "Run the leading option on a sample of your own data"
                - "Record the decision and the trade-off you accepted"
            - name: Stakeholder kickoff and expectations agreement
              description: |-
                ## Purpose
                Marketing hopes the model will prove its budget, finance hopes it will trim it, and agencies worry it will judge them. A kickoff that sets out what the model can and cannot say, how uncertainty will be shown and who sees results first stops the eventual readout turning into a negotiation.

                ## Milestones
                1. Kickoff held with marketing, finance, analytics and agency representatives.
                2. Agreement recorded that results will be shown with uncertainty ranges.
                3. A results review order and timetable agreed.
                4. A named sponsor who settles disputes about model scope.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kickoff is held and its notes record the agreed scope, the uncertainty commitment, the review order and a named sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Invite marketing, finance and agency leads to a ninety-minute kickoff"
                - "Prepare one slide on what the model can and cannot answer"
                - "Agree who sees results first and how disputes are settled"
                - "Send the meeting notes to every attendee within two days"
            - name: Weekly MMM data feed refresh
              description: |-
                ## Purpose
                Rebuilding the dataset by hand every quarter is fragile and slow. Appending each week's spend, KPI and controls as soon as the week closes keeps the table current, surfaces late or missing agency data while it can still be chased, and turns a quarterly refresh into a matter of hours.

                ## Milestones
                1. Each week's data appended within three working days of the week closing.
                2. Late or missing feeds chased by a named owner.
                3. A running log of weeks loaded and any manual fixes.
                4. Twelve consecutive weeks loaded on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks of spend, KPI and controls appended within three working days of each week closing."
                cadence: rolling
              tasks:
                - "List each feed with its owner and expected arrival day"
                - "Append last week's spend, KPI and controls to the modelling table @recurring(weekly:tue)"
                - "Chase any agency whose weekly data has not arrived"
                - "Note every manual fix in the load log"
            - name: Monthly data quality check on model inputs
              description: |-
                ## Purpose
                Mis-keyed invoices, zero weeks from a broken export and silent currency switches can quietly shift channel estimates. A short monthly check of the modelling table against simple rules catches these before they reach a refresh, while they are still cheap to fix.

                ## Milestones
                1. Written rules for gaps, zero weeks, spikes and spend without recorded delivery.
                2. The checks run against the latest month every month.
                3. Every flagged row resolved or annotated.
                4. Three months in a row with no unresolved flags at refresh time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly checks have run for three consecutive months, and every flagged row is resolved or annotated before the next refresh."
                cadence: rolling
              tasks:
                - "Write rules for gaps, spikes and spend with no recorded delivery"
                - "Run the input checks on the latest month of data @recurring(monthly:9)"
                - "Annotate or correct every row the checks flag"
            - name: Quarterly model refresh and re-estimation
              description: |-
                ## Purpose
                Channel effects drift as creative, prices and competitors change, so a model estimated once ages quickly. Re-estimating each quarter on the latest data, comparing results with the previous version and recording every run in a version register keeps the numbers current without letting them jump around for no reason.

                ## Milestones
                1. A refresh run each quarter on the latest versioned dataset.
                2. Changes in channel ROI against the previous version explained in writing.
                3. Each run recorded with dataset version, code version, priors and fit statistics.
                4. Refreshed results released only after the validation checks pass.

                ## Notes
                Big swings between refreshes usually point to a data problem or an unstable specification rather than a real change in effectiveness.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes completed in a year, each logged in the version register with explained changes against the previous run."
                cadence: cyclic
              tasks:
                - "Set up a version register with columns for data, code, priors and fit"
                - "Re-estimate the model on the latest dataset and compare with the last version @recurring(quarterly)"
                - "Write one paragraph explaining any channel ROI that moved materially"
                - "Release refreshed results only after validation passes"
            - name: Media flighting and campaign event log
              description: |-
                ## Purpose
                Six months later nobody remembers that TV paused for a fortnight, a tracking tag broke or a new creative launched mid-burst, yet these explain odd model results. A running log of flighting changes, launches and measurement incidents gives the modeller context and gives the next refresh the event variables it would otherwise miss.

                ## Milestones
                1. A log with date, channel, event type and description.
                2. Agencies and channel owners contributing entries each month.
                3. The past year back-filled from media plans and campaign emails.
                4. Events used in the model specification marked as such.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A flighting and event log covers the full modelling history and has had entries added every month for six months."
                cadence: rolling
              tasks:
                - "Create the event log with date, channel, type and description columns"
                - "Back-fill last year's pauses, launches and tracking breaks"
                - "Collect this month's flighting changes from each channel owner @recurring(monthly:14)"
                - "Mark which events are used as model variables"
            - name: Budget scenario request service for marketing
              description: |-
                ## Purpose
                Once results are out, marketers ask what happens if social gets another 20 per cent or TV goes dark in August. Running these as a small service with a request form, a turnaround promise and a standard output keeps the model in use between refreshes without the analyst becoming a bottleneck.

                ## Milestones
                1. A request form capturing the scenario, its constraints and the decision it informs.
                2. A standard scenario output showing expected KPI change with an uncertainty range.
                3. A turnaround promise agreed, for example five working days.
                4. A log of requests answered and the decisions they fed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Scenario requests are logged and answered within the agreed turnaround, each with a standard output including an uncertainty range."
                cadence: rolling
              tasks:
                - "Draft a scenario request form with constraints and decision fields"
                - "Build a standard scenario output template"
                - "Review and assign open scenario requests @recurring(weekly:thu)"
                - "Record which decision each answered scenario fed"
            - name: Annual planning input from the mix model
              description: |-
                ## Purpose
                The model earns its keep when next year's budget is set, but planning calendars move fast and late analysis is ignored. Fixing when the refreshed response curves, recommended split and caveats reach the planning team each year means the evidence arrives before the numbers are locked.

                ## Milestones
                1. The planning calendar's budget lock date confirmed each year.
                2. A refreshed model and response curves ready four weeks before that date.
                3. A recommended channel split with ranges delivered to the planning lead.
                4. The final approved budget compared with the recommendation and differences noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A recommended channel split with ranges reaches the planning lead at least four weeks before budget lock, and the final budget is compared with it."
                cadence: cyclic
              tasks:
                - "Confirm next year's budget lock date with finance @recurring(yearly)"
                - "Schedule the pre-planning refresh four weeks before the lock date"
                - "Send the recommended split with ranges to the planning lead"
                - "Note where the approved budget differs from the recommendation"
            - name: Calibration experiment roadmap
              description: |-
                ## Purpose
                Observational models agree with reality more often when experiments are fed back in as priors or calibration targets. A rolling roadmap of which channel to test next, ranked by spend and by how uncertain its estimate is, turns occasional lift tests into a programme that steadily tightens the model.

                ## Milestones
                1. Channels ranked by spend and by the width of their ROI interval.
                2. One calibration test planned for the highest-ranked channel each quarter.
                3. Completed test results stored with design, dates and lift estimate.
                4. Each result fed into the next model refresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ranked test roadmap exists, and at least two calibration tests have been completed and fed into model refreshes within a year."
                cadence: rolling
              tasks:
                - "Rank channels by spend and width of their ROI interval"
                - "Agree the next quarter's calibration test with the channel owner @recurring(quarterly)"
                - "Store each completed test's design and result in one place"
                - "Pass each result to the modeller before the next refresh"
            - name: Monthly channel contribution and ROI report
              description: |-
                ## Purpose
                Between refreshes, leaders still want to know how each channel is contributing at current spend. A short monthly report applying the latest model to actual spend, with intervals and a plain-English line per channel, keeps the model visible without implying more precision than it has.

                ## Milestones
                1. A one-page report template with contribution, ROI and marginal ROI per channel.
                2. Intervals shown for every estimate.
                3. The report issued monthly to a fixed distribution list.
                4. Readers' questions logged and answered in the next issue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reports issued, each showing contribution and ROI with intervals for every modelled channel."
                cadence: rolling
              tasks:
                - "Design the one-page report with contribution, ROI and marginal ROI"
                - "Apply the current model to last month's spend and issue the report @recurring(monthly:18)"
                - "Log questions from readers to answer in the next issue"
            - name: Holdout tracking of predicted versus actual sales
              description: |-
                ## Purpose
                Every mix model implies a forecast for each new week whether anyone checks it or not. Comparing its predicted KPI for each new month against what actually happened is the simplest honest test of whether it still describes the business, and a rising error is the earliest warning that a refresh or a rethink is due.

                ## Milestones
                1. Predicted and actual KPI recorded for every month since the last refresh.
                2. Error measured as mean absolute percentage error and shown on a running chart.
                3. A threshold set at which error triggers an early refresh.
                4. Six months of tracking completed.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly predicted and actual KPI values with error are logged for six months against a written early-refresh threshold."
                cadence: rolling
              tasks:
                - "Set up a log of predicted and actual KPI by month"
                - "Agree the error level that triggers an early refresh"
                - "Record last month's predicted and actual KPI with the error @recurring(monthly:26)"
            - name: Adstock and carryover effects explained
              description: |-
                ## Purpose
                Advertising rarely works only in the week it runs: a TV burst can lift sales for weeks, while a search click mostly converts within days. Learning how geometric and Weibull adstock describe that decay, and how the decay rate changes ROI, is the first piece of theory every MMM practitioner needs.

                ## Milestones
                1. Geometric and Weibull adstock written out and explained in your own words.
                2. Adstock applied to one channel's spend in a notebook.
                3. The effect of three decay rates on total attributed contribution compared.
                4. A short note on typical decay ranges by channel type, with sources.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook applies adstock at three decay rates to real spend, and a half-page note on decay by channel type cites its sources."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a methods paper or library guide on adstock transformations"
                - "Apply geometric adstock at three decay rates to one channel"
                - "Plot how total contribution changes with the decay rate"
                - "Write a half-page note on decay by channel type"
            - name: Saturation curves and diminishing returns
              description: |-
                ## Purpose
                Each extra pound, dollar or euro in a channel buys less than the last, and the shape of that curve is what makes budget optimisation possible. Studying Hill and similar saturation functions, and how they interact with adstock, explains why two channels with the same average ROI can deserve very different budgets.

                ## Milestones
                1. Hill curve parameters explained, including the half-saturation point and shape.
                2. Response curves drawn for two channels from a fitted or example model.
                3. Average and marginal return contrasted at current spend.
                4. The order in which adstock and saturation are applied understood and noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Response curves for two channels are drawn with current spend marked, and average and marginal return at that point are written beside each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the saturation section of your chosen library's documentation"
                - "Draw Hill curves with three different half-saturation points"
                - "Mark current spend on each curve and read off the marginal return"
                - "Note whether your library applies adstock before or after saturation"
            - name: Bayesian MMM fundamentals
              description: |-
                ## Purpose
                Most current MMM tools are Bayesian, so their outputs are posterior distributions shaped by priors rather than single coefficients. Researchers and analysts who understand priors, sampler diagnostics and posterior predictive checks can tell a well-behaved model from one that simply handed back its priors.

                ## Milestones
                1. Prior, likelihood and posterior explained with an MMM example.
                2. A small model fitted and its sampler diagnostics such as R-hat and effective sample size read.
                3. Prior and posterior distributions plotted side by side for each channel.
                4. A note on how to tell when the data has barely moved a prior.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-channel model is fitted with clean diagnostics, and prior versus posterior plots exist for every channel coefficient."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Work through one introductory Bayesian modelling tutorial end to end"
                - "Fit a small three-channel MMM on example data"
                - "Check R-hat and effective sample size for every parameter"
                - "Plot prior against posterior for each channel coefficient"
            - name: Multicollinearity and correlated media flighting
              description: |-
                ## Purpose
                When TV, online video and social always launch together, the data cannot tell them apart and the model splits credit almost arbitrarily. Learning to diagnose correlated spend, and the remedies that work in practice such as grouping, informative priors or planned variation, prevents confident numbers that are really guesses.

                ## Milestones
                1. A correlation matrix and variance inflation check run on channel spend.
                2. Pairs of channels with highly correlated spend identified.
                3. A remedy for each problem pair chosen and documented.
                4. A request to vary flighting next year sent to media planners where needed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every highly correlated channel pair is identified with a documented remedy, and planners have received any flighting request."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compute the correlation matrix of weekly channel spend"
                - "Run a variance inflation check on the media variables"
                - "Choose a remedy for each highly correlated pair"
                - "Ask the media planners to stagger the worst pair next year"
            - name: Baseline and incremental sales decomposition
              description: |-
                ## Purpose
                In most models a large share of sales sits in the baseline: trend, seasonality, distribution and brand equity built up over years. Understanding how the base is estimated, and how sensitive media credit is to that choice, helps you answer the inevitable question of why media drives only a modest share of sales.

                ## Milestones
                1. The components of the baseline in your model listed and explained.
                2. A decomposition chart of base, controls and media for a full year produced.
                3. Sensitivity of media share to trend and seasonality settings tested.
                4. A plain-language explanation of the base ready for stakeholders.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full-year decomposition chart and a sensitivity test of media share to trend settings are filed with a plain-language explanation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List what your model includes in the baseline"
                - "Produce a stacked decomposition chart for the latest year"
                - "Refit with a different trend setting and compare media share"
                - "Write three sentences explaining the base to a marketer"
            - name: Reading ROI, marginal ROI and contribution correctly
              description: |-
                ## Purpose
                Average ROI tells you whether past spend paid back; marginal ROI tells you whether the next unit will. Confusing the two is the commonest misreading of MMM outputs and leads to pouring money into channels that are already saturated, so every analyst presenting results should be fluent in both.

                ## Milestones
                1. Definitions of contribution, average ROI, marginal ROI and cost per incremental outcome written.
                2. Each metric calculated by hand for two channels from model outputs.
                3. An example found where average and marginal ROI point in opposite directions.
                4. A glossary page added to the model documentation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of contribution and ROI measures is in the model documentation, with a worked example where average and marginal ROI disagree."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write definitions of contribution, average ROI and marginal ROI"
                - "Calculate each metric by hand for two channels"
                - "Find a channel where average and marginal ROI disagree"
                - "Add the glossary to the model documentation"
            - name: Validation checklist for a mix model
              description: |-
                ## Purpose
                Good in-sample fit says little, because a flexible model can match history and still misattribute it. A standard validation pack, covering out-of-sample error on a holdout period, posterior predictive checks, parameter stability across refits and agreement with experiments, gives you grounds to trust a model or to send it back.

                ## Milestones
                1. A holdout of the most recent weeks kept out of estimation and its error measured.
                2. Posterior predictive checks plotted against actual KPI.
                3. Channel estimates compared across refits on rolling windows.
                4. Estimates compared with any available lift test results.
                5. A pass or fail checklist adopted for every release.
              priority: high
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written validation checklist covering holdout error, predictive checks, stability and experiment agreement is applied to every model release."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Hold back the last thirteen weeks and measure forecast error on them"
                - "Plot posterior predictive draws against actual KPI"
                - "Refit on three rolling windows and compare channel ROI"
                - "Write the pass or fail checklist for future releases"
            - name: Long-term brand effects beyond the model window
              description: |-
                ## Purpose
                Standard mix models capture effects over weeks, while brand advertising may build base sales over years. Studying how practitioners estimate longer effects, through brand health metrics, nested models or long-run multipliers, helps stop the model systematically undervaluing upper-funnel media.

                ## Milestones
                1. The main approaches to long-term effects summarised with their assumptions.
                2. Brand health series such as awareness or consideration gathered for the modelling period.
                3. A test of whether brand metrics move with media and with base sales.
                4. A stated position on long-term effects included in the model documentation.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The model documentation states a position on long-term effects, backed by a test of brand metrics against media and base sales."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise three published approaches to long-term advertising effects"
                - "Gather brand tracker data covering the model period"
                - "Log the latest brand tracker readings alongside base sales @recurring(monthly:11)"
                - "Write the long-term effects position for the model documentation"
            - name: First baseline marketing mix model
              description: |-
                ## Purpose
                With data, controls and an approach chosen, the first model should be deliberately simple: a handful of channel groups, standard adstock and saturation, sensible priors and the main controls. A simple model that passes validation is far more useful than an elaborate one nobody can explain, and it becomes the benchmark later versions must beat.

                ## Milestones
                1. A first specification of channels, transforms, priors and controls written before fitting.
                2. The model fitted on the versioned dataset with clean sampler diagnostics.
                3. The validation checklist applied and results recorded.
                4. Decomposition, ROI and response curves produced for internal review.
                5. The specification stored as version 1.0 in the register.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A version 1.0 model passes the validation checklist and has a documented specification, decomposition and response curves."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the specification before running any fit"
                - "Fit the model on the current dataset version"
                - "Run the validation checklist and record each result"
                - "Ask the agent to draft a plain-language summary of the specification for reviewers"
            - name: Prior elicitation with channel owners
              description: |-
                ## Purpose
                Priors are where business knowledge enters a Bayesian model, and leaving them at library defaults wastes it. A structured session with channel owners, informed by past test results, sets plausible ranges for ROI and carryover, documented so anyone can see what was assumed and why.

                ## Milestones
                1. Existing evidence per channel gathered, including lift tests and published benchmarks.
                2. An elicitation session held with owners giving plausible low, central and high ROI.
                3. The priors translated into distributions and plotted for sign-off.
                4. The prior table stored with sources beside the model specification.

                ## Notes
                Ask for ranges, not single numbers, and ask before anyone has seen model results, or the priors simply echo the output.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A prior table for every channel exists, each prior linked to a source or to an elicitation session note."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect past lift tests and benchmarks for every modelled channel"
                - "Run a one-hour session asking owners for low, central and high ROI"
                - "Plot the resulting prior distributions for sign-off"
                - "Store the prior table with sources next to the specification"
            - name: Geo lift test to calibrate one channel
              description: |-
                ## Purpose
                Switching a channel up, down or off in matched regions gives a causal estimate the mix model cannot produce on its own. Running one on the channel with the biggest spend and widest uncertainty, then using the result to calibrate the model, is usually the single best improvement to a first MMM.

                ## Milestones
                1. Test and control regions chosen with matched pre-period sales.
                2. Power estimated so the test can detect a realistic effect.
                3. The test run for its planned duration, with the media change confirmed in delivery data.
                4. A lift estimate with its interval reported and passed to the modeller.
                5. The model recalibrated and the change in that channel's ROI recorded.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A geo test on one channel produces a lift estimate with an interval, and the model is recalibrated with the change in ROI recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the channel with the largest spend and widest ROI interval"
                - "Select matched test and control regions using pre-period sales"
                - "Estimate power and the test length needed"
                - "Confirm from delivery data that the regional change actually happened"
                - "Feed the lift estimate into the next model refresh"
            - name: Budget reallocation scenarios from response curves
              description: |-
                ## Purpose
                Response curves are the most valuable output of a mix model because they show where the next unit of spend earns most. Running an optimiser within realistic constraints, such as minimum brand presence, contract commitments and a maximum change per channel, turns curves into a reallocation the marketing lead can actually adopt.

                ## Milestones
                1. Constraints per channel agreed with marketing and media buying.
                2. An optimised allocation produced at current total budget and at 10 per cent up and down.
                3. Expected KPI change shown with uncertainty for each scenario.
                4. A recommended reallocation and a cautious first step agreed.
                5. Results of the first step tracked against the prediction.

                ## Notes
                Move a portion of the budget first and measure, rather than adopting the optimiser's full answer at once. Curves are least reliable far outside historical spend levels.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed reallocation, with constraints and expected KPI change stated, is adopted for one planning period and its outcome compared with the prediction."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree minimum and maximum spend for each channel with media buying"
                - "Run the optimiser at current budget and at ten per cent up and down"
                - "Present expected KPI change with intervals for each scenario"
                - "Track the first reallocation's results against the prediction"
            - name: Triangulating MMM with attribution and lift studies
              description: |-
                ## Purpose
                Platform attribution, multi-touch models, lift studies and MMM will give different numbers for the same channel, and stakeholders tend to pick whichever flatters them. Comparing them side by side, explaining why they differ and agreeing which source governs which decision gives the organisation one coherent view of effectiveness.

                ## Milestones
                1. Channel estimates from MMM, platform reporting and any lift studies set side by side.
                2. Systematic differences explained, such as platform over-crediting of retargeting.
                3. A rule written for which source is used for which decision.
                4. The rule endorsed by the marketing and finance leads.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written triangulation rule states which measurement source governs which decision and is endorsed by marketing and finance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Tabulate channel ROI from MMM, platform reports and lift studies"
                - "Explain each large gap between sources in one sentence"
                - "Draft the rule for which source governs which decision"
                - "Compare MMM, platform and lift estimates again with fresh numbers @recurring(quarterly)"
            - name: Creating spend variation in an always-on channel
              description: |-
                ## Purpose
                Flat weekly spend gives a mix model nothing to learn from, so an always-on channel stays unmeasured however clever the method. Planning a deliberate change, such as a pulsed flighting pattern, a short dark period or a regional increase, generates the signal the model needs at a cost the channel owner can accept.

                ## Milestones
                1. Channels with insufficient variation identified from the readiness check.
                2. A variation plan with timing, size and expected cost agreed with the channel owner.
                3. The plan executed and confirmed in delivery data.
                4. That channel's interval in the next refresh compared with the previous one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least one always-on channel runs an agreed variation plan, and its ROI interval in the next refresh is narrower than before."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List channels flagged as flat in the readiness check"
                - "Propose a pulse, dark period or regional increase to the channel owner"
                - "Check delivery data to confirm the planned variation took place"
                - "Compare that channel's ROI interval before and after"
            - name: Separating price and promotion effects from media
              description: |-
                ## Purpose
                Promotions are often supported by media, so a model that handles price badly will credit the advert with what the discount did, or the reverse. Specifying price and promotion carefully, with lagged effects and post-promotion dips, protects both the media estimates and the trade team's view of promotional return.

                ## Milestones
                1. Price and promotion variables specified with lags and dips where relevant.
                2. Weeks with joint media and promotion activity identified.
                3. Media estimates compared with and without the refined promotion terms.
                4. Findings shared with the trade or pricing team.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A refined price and promotion specification is tested, and the change in media estimates it causes is documented and shared with the pricing team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark every week where promotion and media ran together"
                - "Add lagged promotion and post-promotion dip terms"
                - "Compare media estimates with and without the new terms"
                - "Share the findings with the trade or pricing team"
            - name: Evaluating an external MMM provider
              description: |-
                ## Purpose
                Agencies and measurement vendors sell mix models with very different levels of transparency, and some never show their priors, holdout error or data. Assessing a provider against a written list of disclosures before signing, and checking deliverables each year, keeps you able to defend the numbers you pay for.

                ## Milestones
                1. A disclosure list covering data, specification, priors, validation and refresh terms.
                2. At least two providers assessed against it.
                3. Contract terms that secure data ownership and access to model outputs.
                4. An annual check of deliverables against the contract.

                ## Notes
                Start from the **Vendor** template. Ask for a holdout test on your own data before signing, not a case study.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider is chosen or retained after scoring against a written disclosure list, with data ownership written into the contract."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the disclosure list every provider must answer"
                - "Ask two providers for a holdout test on your own data"
                - "Check the contract gives you ownership of data and outputs"
                - "Review the provider's deliverables against the contract @recurring(yearly)"
            - name: Independent peer review before the first readout
              description: |-
                ## Purpose
                Mistakes in a mix model are easy to make and hard to see from the inside: a mis-joined week, a prior that dominates, a control that absorbs a channel. A structured review by a statistician who did not build it, a fortnight before the readout, catches the errors that would otherwise surface in front of the leadership team.

                ## Milestones
                1. A reviewer from outside the build team booked.
                2. A review pack sent covering data, specification, priors and validation.
                3. Every review comment answered or acted on.
                4. A sign-off note recorded before the readout.
              priority: medium
              deadlineOffsetDays: 140
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An independent reviewer signs off the model after every comment is answered, at least one week before the first readout."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a reviewer who was not part of the build"
                - "Assemble the review pack with data, specification and validation"
                - "Answer every review comment in a tracked document"
                - "Record the reviewer's sign-off"
            - name: First MMM readout to marketing leadership
              description: |-
                ## Purpose
                The first presentation decides whether the model is trusted or quietly shelved. Leading with the decisions agreed at kickoff, showing ranges rather than point estimates and stating the limitations plainly gives leaders something they can act on and defend to finance.

                ## Milestones
                1. A readout deck built around the decisions in the brief.
                2. Every ROI shown with an interval and a confidence note.
                3. Limitations and next tests set out on one slide.
                4. Agreed actions and owners recorded at the meeting.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The readout is held, and agreed actions with owners and dates are recorded and circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Build the deck around the decisions in the signed brief"
                - "Rehearse the limitations slide with a sceptical colleague"
                - "Hold the readout and record agreed actions and owners"
                - "Circulate the actions within two days of the meeting"
            - name: Annual budget planning session with live scenarios
              description: |-
                ## Purpose
                Planning season is when the model's scenarios meet competing budget requests. A dedicated working session where marketing and finance test allocations live against the response curves, with the analyst driving, settles more questions in two hours than weeks of email.

                ## Milestones
                1. Scenarios prepared in advance for the requests already known.
                2. A live scenario tool or prepared grid ready for new questions in the room.
                3. The session held with the marketing and finance decision makers.
                4. The chosen allocation and its expected outcome recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planning session is held each year, with the final allocation and its expected outcome recorded with ranges."
                cadence: cyclic
              tasks:
                - "Collect the known budget requests before the session"
                - "Prepare scenario results for each request"
                - "Set up a live grid for new what-if questions"
                - "Record the chosen allocation and its expected outcome"
            - name: Mid-year model review with finance
              description: |-
                ## Purpose
                Finance teams increasingly ask for effectiveness evidence at mid-year forecast time, when budgets can still move. A fixed review comparing predicted and actual returns for the first half, plus any test results since planning, keeps finance's trust and gives early warning if a reallocation underdelivered.

                ## Milestones
                1. First-half predicted and actual KPI compared.
                2. Results of any reallocation since planning reviewed.
                3. Updated full-year scenarios prepared.
                4. Agreed adjustments recorded with finance.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mid-year review is held with finance each year, with first-half results and any agreed budget adjustment recorded."
                cadence: cyclic
              tasks:
                - "Book the mid-year review with the finance business partner @recurring(yearly)"
                - "Compare first-half predicted and actual KPI"
                - "Prepare updated full-year scenarios"
                - "Record agreed adjustments and their owners"
            - name: Marketing effectiveness paper for the executive committee
              description: |-
                ## Purpose
                Senior committees rarely read model outputs, yet they approve budgets worth many times the cost of the model. A short paper setting out what drives sales, what each channel returns at the margin, how strong the evidence is and what the recommendation is puts the work in front of the people who decide.

                ## Milestones
                1. A paper of no more than four pages with an executive summary.
                2. Evidence strength stated for every claim.
                3. The recommendation linked to a specific budget decision.
                4. The paper presented and the committee's decision recorded.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A paper of four pages or fewer is presented to the executive committee and its decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the committee date and paper deadline with the secretariat"
                - "Ask the agent to tighten the draft executive summary to under 200 words"
                - "Rate the evidence strength behind every claim in the paper"
                - "Record the committee's decision and follow-up actions"
            - name: Multi-market MMM for an enterprise portfolio
              description: |-
                ## Purpose
                Enterprises running several countries or brands face a choice between one model per market, which is noisy in small markets, and a hierarchical model that shares strength across them. A consistent multi-market programme with a common taxonomy, shared priors and local review keeps results comparable without ignoring real local differences.

                ## Milestones
                1. A common channel taxonomy and KPI definition adopted by every market.
                2. Separate versus hierarchical modelling decided with reasons.
                3. Local market leads reviewing their results at each refresh.
                4. A cross-market comparison of channel returns published with caveats.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every market in scope uses the common taxonomy, and a cross-market comparison of channel returns is published after each refresh."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List markets in scope with spend and history for each"
                - "Agree the common taxonomy and KPI definition with market leads"
                - "Decide between separate and hierarchical models and record why"
                - "Hold a cross-market model review with local leads @recurring(quarterly)"
            - name: Simulation study of MMM method recovery
              description: |-
                ## Purpose
                Researchers evaluating an MMM method cannot check it against real data, because the true channel effects are never known. Simulating sales from known adstock, saturation and ROI parameters, then testing whether the method recovers them under realistic noise and correlation, shows where it can be trusted and where it fails.

                ## Milestones
                1. A simulator producing weekly sales from known parameters and controls.
                2. Scenarios covering low variation, correlated channels and short history.
                3. Recovery error for each parameter reported across many simulated datasets.
                4. Findings written up with code shared for others to rerun.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written report shows parameter recovery error across at least three simulated scenarios, with code that reruns the results."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a simulator with known adstock, saturation and ROI values"
                - "Define scenarios for low variation, correlation and short history"
                - "Fit the method to at least fifty simulated datasets per scenario"
                - "Write up recovery error with the code attached"
            - name: Rebuilding measurement after tracking loss
              description: |-
                ## Purpose
                Consent changes, browser restrictions and mobile platform privacy rules have cut the share of conversions that user-level attribution can see, often without anyone noticing the drift. Making MMM the backbone of measurement when tracked coverage falls means documenting the gap, moving decisions to aggregate evidence and explaining the change to teams used to daily attribution figures.

                ## Milestones
                1. Tracked share of conversions estimated over time against total sales.
                2. Decisions that relied on attribution listed with their new evidence source.
                3. Channel teams briefed on reading MMM rather than platform numbers.
                4. Coverage reviewed monthly against a threshold for further change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written measurement plan names the evidence source for each decision that relied on attribution, with tracked coverage reviewed monthly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Estimate the share of sales visible in attribution data each month for two years"
                - "List the decisions that currently rely on attribution"
                - "Brief channel teams on reading MMM outputs"
                - "Check tracked conversions as a share of total sales @recurring(monthly:24)"
            - name: MMM for a young brand with short history
              description: |-
                ## Purpose
                Eighteen months of data, or a launch in a new market, rarely gives a standard model enough history to work with. Combining informative priors from comparable brands, conservative adstock assumptions and planned experiments can still give directional guidance, as long as the uncertainty is shown plainly.

                ## Milestones
                1. Available history and spend variation documented.
                2. Priors borrowed from comparable brands or markets, with sources.
                3. A directional model with wide intervals presented as such.
                4. An experiment plan to strengthen the evidence within a year.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A directional model with documented borrowed priors and a twelve-month experiment plan is presented with its intervals shown."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Document the weeks of history and spend variation available"
                - "Find comparable brands or markets to borrow priors from"
                - "Present the directional model with its full intervals"
                - "Plan two experiments to run in the next year"
            - name: Rebuilding the model after a market shock
              description: |-
                ## Purpose
                Lockdowns, supply shortages, a product recall or a sudden competitor exit break the relationships a mix model learned. Deciding how to treat the shock period, whether by event variables, excluding weeks or letting parameters change, keeps one extraordinary period from distorting estimates for years afterwards.

                ## Milestones
                1. The shock period dated with evidence from sales, supply and media data.
                2. Options for treating it compared on fit and estimate stability.
                3. The chosen treatment documented with its effect on channel estimates.
                4. Stakeholders told how the shock was handled and why.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The shock period has a documented treatment, chosen after comparing options, with its effect on each channel's estimate recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Date the start and end of the shock from sales and supply data"
                - "Fit the model with event variable, exclusion and time-varying options"
                - "Compare fit and estimate stability across the options"
                - "Explain the chosen treatment in one paragraph for stakeholders"
            - name: Inheriting an existing mix model
              description: |-
                ## Purpose
                Analysts often inherit a model from a departed colleague or an outgoing agency, with partial documentation and results already quoted in board papers. Auditing it before defending it, by rerunning it, checking its data and testing its assumptions, protects you from adopting someone else's mistakes as your own.

                ## Milestones
                1. All code, data, specifications and past outputs located.
                2. The latest published results reproduced from the handed-over materials.
                3. Gaps and doubtful assumptions listed with a severity for each.
                4. A keep, fix or rebuild recommendation agreed with the sponsor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The inherited model's latest results are reproduced or shown irreproducible, and a keep, fix or rebuild decision is recorded with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect code, data, specifications and past outputs in one folder"
                - "Reproduce the latest published results from those materials"
                - "List doubtful assumptions with a severity for each"
                - "Agree keep, fix or rebuild with the sponsor"
            - name: Campaign and creative effects within channels
              description: |-
                ## Purpose
                Stable channel-level results invite the next question: did particular campaigns, formats or creative routes perform better within a channel? Nested models or channel submodels can answer it, but only where creative rotation varied enough, so the work starts by checking that the variation exists.

                ## Milestones
                1. Creative and format rotations within one channel logged by week.
                2. Variation confirmed as sufficient for estimation.
                3. A nested model or submodel estimating campaign effects fitted and validated.
                4. Findings passed to the creative team with their uncertainty.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Campaign-level effects for one channel are estimated with intervals and shared with the creative team, after variation was confirmed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Log creative and format rotations by week for one channel"
                - "Check whether rotations varied enough to estimate effects"
                - "Fit a nested model for campaign effects"
                - "Share findings with the creative team, intervals included"
            - name: Halo and cross-brand effects in a portfolio
              description: |-
                ## Purpose
                Advertising one product often lifts its sister products, and master-brand campaigns can lift the whole range. Modelling halo and cannibalisation across a portfolio can change the true return of a campaign by a wide margin, and it matters most to enterprises managing several brands from one budget.

                ## Milestones
                1. Brands or products with plausible halo links mapped.
                2. A multi-outcome model estimating own and cross-brand effects fitted.
                3. Total portfolio return per campaign compared with own-brand return.
                4. Budget implications presented to the portfolio owner.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Own and cross-brand effects are estimated for the main brands, and portfolio return per campaign is reported beside own-brand return."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map which brands could plausibly lift or cannibalise each other"
                - "Fit a model with own and cross-brand media effects"
                - "Compare portfolio return with own-brand return per campaign"
                - "Present budget implications to the portfolio owner"
            - name: Search as a mediator of upper-funnel media
              description: |-
                ## Purpose
                TV, video and social often send people to search for the brand, so a model that treats branded search as an independent channel hands search the credit. Modelling search as a mediator, through a two-stage model or a causal graph, reassigns that credit to the media that created the demand.

                ## Milestones
                1. A causal diagram of how media, search and sales relate agreed.
                2. Branded search volume modelled as a function of upper-funnel media.
                3. Total effects of upper-funnel channels compared with and without mediation.
                4. Search budget implications discussed with the search team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A mediation model reports total effects of upper-funnel channels with and without search mediation, and the search team has reviewed it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draw a causal diagram linking media, branded search and sales"
                - "Model branded search volume from upper-funnel spend"
                - "Compare upper-funnel total effects with and without mediation"
                - "Review the findings with the search team"
            - name: Time-varying channel effectiveness models
              description: |-
                ## Purpose
                Fixed coefficients assume a channel worked as well three years ago as it does today, which is rarely true after creative, audience or platform changes. Time-varying parameter models, such as random-walk or Gaussian process coefficients, show when effectiveness moved, at the cost of more data and more careful validation.

                ## Milestones
                1. Evidence of drift in channel effects gathered from rolling refits.
                2. A time-varying specification fitted for the channels showing drift.
                3. Validation results compared against the fixed-coefficient model.
                4. A decision recorded on whether to adopt it in production refreshes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A time-varying model is compared with the fixed version on holdout error and stability, and the adoption decision is recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Compare channel ROI across rolling-window refits"
                - "Fit a time-varying coefficient model for the drifting channels"
                - "Compare holdout error with the fixed-coefficient model"
                - "Record whether to adopt it in production refreshes"
---

# Marketing Mix Modelling

This area is for researchers and enterprise marketing science teams who need to estimate what each channel really contributes when user-level tracking cannot tell them. It starts with foundations (the decisions the model serves, a readiness check, reconciled spend, controls and a versioned dataset), then the operating rhythm of feeds, refreshes and reports, the theory of adstock, saturation and Bayesian estimation, decisions about calibration and budget reallocation, the readouts and planning sessions, the situations that change the approach, and finally specialist work on halo, mediation and time-varying effects.

What repeats is a weekly data append, monthly input checks, contribution reports and holdout tracking, a quarterly refresh with a calibration test, and the yearly planning and mid-year reviews. The Purchase decision, Meeting notes, Metrics log and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
