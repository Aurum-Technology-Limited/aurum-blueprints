---
id: wealth-investing.individual-stock-research
name: Individual Stock Research
description: "Individual company shares held on purpose: a capped satellite, written theses, position limits and sell rules, results reviews, and the accounting and valuation skills that make your research worth trusting."
category: personal
version: 1.0.0
tags: [wealth-investing, individual-stock-research, everyone, stock-picking, equity-research, investment-thesis, valuation]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - reading-queue
    - risk-register
    - meeting-notes
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Individual Stock Research
          description: "Researching and holding individual company shares with written investment theses, position limits and regular reviews."
          projects:
            - name: Deciding whether individual shares suit you
              description: |-
                ## Purpose
                Picking individual companies takes hours each quarter, concentrates risk and, on most published evidence, leaves the majority of stock pickers behind a plain index fund after costs. Before buying a single share, an honest look at your time, temperament, emergency cash and existing core portfolio settles whether stock research is a serious satellite, a small learning exercise or something to skip for now.

                ## Milestones
                1. Emergency cash, expensive debts and near-term spending confirmed as covered before any share purchase.
                2. A realistic monthly time budget for company research written down in hours.
                3. Your reasons for picking shares listed, with any that are really about excitement marked as such.
                4. A recorded yes, not yet or no, with the conditions that would change the answer.

                ## Notes
                Nothing here is a recommendation to buy or avoid any share. If you are unsure whether investing fits your situation at all, a regulated adviser can review it with you.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written yes, not yet or no on picking individual shares, with a monthly research time budget and the conditions behind the answer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down how many hours a month you could give to company research"
                - "Confirm emergency cash and expensive debts are dealt with first"
                - "List your honest reasons for wanting to pick individual shares"
                - "Record a yes, not yet or no with the conditions behind it"
            - name: Cap on money allocated to stock picking
              description: |-
                ## Purpose
                Most people who research individual companies do it as a satellite around a core of diversified funds, and the size of that satellite matters more than any single pick. A written cap, as a percentage of investable assets that you choose and can defend, limits the damage from being wrong and stops the satellite quietly becoming the whole portfolio after a good run.

                ## Milestones
                1. Total investable assets added up across every account you hold.
                2. A percentage cap for individually held shares chosen and written down.
                3. The cap converted into a cash figure at current values.
                4. A rule recorded for what happens when gains push the satellite over the cap.

                ## Notes
                The cap is a personal decision, not a formula. Many people start small and only raise it after several years of honest scorecards.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written percentage cap on individual shares, its current cash value and a rule for gains that breach it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up investable assets across every pension, wrapper and dealing account"
                - "Choose the maximum percentage you will hold in individual shares"
                - "Convert the cap into a cash figure at today's values"
                - "Write the rule for trimming when gains take you over the cap"
            - name: Position size and concentration limits
              description: |-
                ## Purpose
                Even inside a capped satellite, one company at 40 percent of it can sink the whole exercise on a single profit warning. Written limits for a starting position, a maximum position and maximum exposure to one sector or country turn sizing from a mood into a rule set while you are calm.

                ## Milestones
                1. A starting position size set as a percentage of the stock-picking pot.
                2. A maximum weight for any single company recorded.
                3. Sector and country exposure ceilings written down.
                4. A minimum and maximum number of holdings chosen.
                5. All limits copied to the top of the holdings log.

                ## Notes
                Measure limits at market value, not at cost. A limit measured at cost lets a winner grow far beyond it without ever showing a breach.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Starting size, maximum weight, sector and country ceilings and a holding count range are written at the top of the holdings log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a starting size for a new position as a share of the pot"
                - "Set the maximum weight any one company may reach"
                - "Write sector and country exposure ceilings"
                - "Choose the fewest and most holdings you are willing to run"
            - name: Choosing a broker for individual share dealing
              description: |-
                ## Purpose
                Fund platforms built for monthly trackers can be expensive or awkward for individual shares: flat dealing fees, currency margins of 1 percent or more on overseas trades and limited order types all add up. Comparing three brokers on the costs and features that match your likely trading pattern avoids paying a hidden toll on every purchase and sale.

                ## Milestones
                1. Your likely trades per year, typical trade size and overseas share of trades estimated.
                2. Three brokers compared on dealing fees, currency margin, custody charges and order types.
                3. Investor protection scheme coverage and nominee arrangements checked for each.
                4. A broker chosen and the deciding reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. Settle which tax-advantaged wrapper the shares will sit in before choosing; that wrapper decision belongs with your tax-advantaged accounts planning.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A broker chosen from a written comparison of three on dealing, currency and custody costs, with protection scheme cover confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate how many trades a year you will place and their typical size"
                - "Shortlist three brokers that offer the markets you want"
                - "Compare dealing fees, currency margins and custody charges in one table"
                - "Check each broker's investor protection scheme and nominee terms"
                - "Record the chosen broker and the deciding reasons"
            - name: Investment thesis template for every holding
              description: |-
                ## Purpose
                Writing a thesis before buying is the only reliable defence against rewriting history later, when a share has fallen and every reason to hold sounds convincing. One page per company, saying what you expect, why the market might be wrong and what would prove you wrong, makes each later review a check against your own words.

                ## Milestones
                1. A one-page thesis template with sections for business, edge, valuation, risks and kill criteria.
                2. Fields for three to five measurable expectations and the date each should show up.
                3. Fields for price paid, date and position size at purchase.
                4. The template tested on one company you already own or watch.

                ## Notes
                Keep each thesis short enough to reread in five minutes. Long theses tend to bury the one claim that matters.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page thesis template with kill criteria and dated expectations exists and has been filled in for at least one company."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page thesis template with a section for kill criteria"
                - "Add fields for measurable expectations and the date they should show"
                - "Fill the template in for one company you already own or watch"
                - "Store the template where every new thesis will start from it"
            - name: Primary research source kit
              description: |-
                ## Purpose
                Forum posts and headline summaries are third-hand; annual reports, regulatory filings, results presentations and call transcripts are where the facts sit. Bookmarking and testing a short kit of primary sources, plus one screener, means research starts from documents rather than opinions.

                ## Milestones
                1. The official company filing database for each market you invest in bookmarked, for example Companies House or SEC EDGAR.
                2. Investor relations pages for every holding and watchlist company saved.
                3. One screener chosen after testing two, with its data export checked.
                4. A source for results call transcripts or recordings found.
                5. A short note of which secondary sources you trust and why.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A saved source kit lists filing databases, investor relations pages, one tested screener and a transcript source."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Bookmark the official filing database for each market you buy in"
                - "Save the investor relations page of every company you follow"
                - "Try two screeners and keep the one that exports data cleanly"
                - "Find where results call transcripts or recordings are published"
            - name: Watchlist with written entry criteria
              description: |-
                ## Purpose
                Good companies are often visible long before they can be bought at a sensible price, and without a list the decision gets made in a hurry after a headline. A watchlist of ten to twenty names, each with the valuation or event that would make you act, lets you wait with a plan instead of chasing.

                ## Milestones
                1. Ten to twenty companies listed with a one-line reason each.
                2. An entry condition written for each: a valuation level, a result or a specific event.
                3. Watchlist names that still need a full thesis marked.
                4. Price alerts set at the broker for the entry levels.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A watchlist of at least ten companies exists, each with a written entry condition and a broker alert where one applies."
                cadence: rolling
              tasks:
                - "List the companies you would like to own, with one line on why"
                - "Write the valuation or event that would make you act on each"
                - "Set broker price alerts at the entry levels"
                - "Review watchlist entry conditions against current prices @recurring(monthly:6)"
            - name: Holdings and trade log
              description: |-
                ## Purpose
                Broker screens show today's value but rarely the whole story: the original thesis, each purchase and sale, fees, currency costs and dividends received. A single log you control, reconciled against broker statements, gives the numbers for performance reviews, limit checks and the tax return in one place.

                ## Milestones
                1. Every current holding entered with shares, average cost, purchase dates and account.
                2. Every trade since you started recorded with fees and currency costs.
                3. Current weight against the position limits shown for each holding.
                4. A link from each holding to its thesis page.

                ## Notes
                Start from the **Metrics log** template. Cost and sale records are what the tax authority will ask for, so keep them for years after a holding is sold.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A holdings log that matches the latest broker statement, with cost, fees, weights and a thesis link for every holding."
                cadence: rolling
              tasks:
                - "Export your full trade history from the broker"
                - "Enter each holding with shares, average cost and account"
                - "Add a column showing each holding's weight against its limit"
                - "Reconcile the log against the broker statement @recurring(monthly:3)"
            - name: Pre-purchase research checklist
              description: |-
                ## Purpose
                Buying a share because of one exciting fact skips the dull checks that catch most disasters: debt maturities, share dilution, related-party dealings and whether the business actually turns profit into cash. A written checklist of 15 to 25 questions, answered before every purchase, slows decisions just enough to catch them.

                ## Milestones
                1. A checklist of 15 to 25 questions covering business, finances, management, valuation and risks.
                2. A rule that no purchase is placed until every question has a written answer.
                3. The checklist run on one watchlist company as a trial.
                4. Questions that produced nothing useful removed after the first three uses.

                ## Notes
                Start from the **Operational checklist** template. A checklist that takes more than an hour to complete will start being skipped; trim it rather than abandon it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written checklist of 15 to 25 questions exists and has been completed in full for at least one company."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft 15 to 25 questions every company must answer before you buy"
                - "Group the questions under business, finances, management, valuation and risks"
                - "Run the checklist on one watchlist company as a trial"
                - "Cut or reword any question that produced no useful answer"
            - name: Quarterly results review for each holding
              description: |-
                ## Purpose
                Results days are when a thesis meets reality, yet most holders glance only at the headline earnings figure and the share price move. Reading each set of results against your written expectations within a week, and labelling the thesis intact, weakened or broken, keeps every holding earning its place.

                ## Milestones
                1. A results calendar showing the reporting dates of every holding.
                2. Each results statement read within a week of release.
                3. A three-line note per holding: what changed, thesis status, any action.
                4. Key metrics updated in the holdings log after each release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every holding has a dated thesis status note written within a week of its most recent results."
                cadence: rolling
              tasks:
                - "Add every holding's next reporting date to your calendar"
                - "Read each holding's results within a week of release @recurring(quarterly)"
                - "Write a three-line thesis status note after each results day"
                - "Update the key metrics column in the holdings log"
            - name: Annual thesis re-underwriting
              description: |-
                ## Purpose
                Once a year, every holding should face the question you would ask of a new idea: knowing what you know now, would you buy it at today's price? Rewriting each thesis from scratch, rather than tweaking last year's, exposes the holdings kept only out of habit or loyalty.

                ## Milestones
                1. Each holding's original thesis reread alongside its latest annual report.
                2. A fresh one-page thesis written for each company at today's price.
                3. Every holding marked add, hold or sell under your own rules.
                4. Actions from the review scheduled or completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every holding has a thesis rewritten within the last twelve months and an add, hold or sell label recorded."
                cadence: cyclic
              tasks:
                - "Reread every original thesis alongside the latest annual report @recurring(yearly)"
                - "Rewrite each thesis as if you were buying at today's price"
                - "Mark every holding as add, hold or sell against your rules"
                - "Schedule any trades the review calls for"
            - name: Monthly position weight and limit check
              description: |-
                ## Purpose
                Winners grow and losers shrink, so a portfolio that met every limit in January can break three of them by June without a single trade. A ten-minute monthly comparison of current weights against your position, sector and satellite caps catches drift before it becomes a concentration problem.

                ## Milestones
                1. Current market value and weight of each holding updated.
                2. Any holding above its maximum weight flagged.
                3. Sector and country totals checked against their ceilings.
                4. Every breach either resolved or explained in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weights are updated each month and every limit breach has either a trade or a written explanation beside it."
                cadence: rolling
              tasks:
                - "Update market values and weights in the holdings log @recurring(monthly:9)"
                - "Flag any holding above its maximum weight"
                - "Check sector and country totals against your ceilings"
                - "Write a line explaining any breach you choose to leave for now"
            - name: Weekly filings and company announcements scan
              description: |-
                ## Purpose
                Director share sales, a delayed annual report, a new major shareholder or a bond refinancing can matter more than any headline, and they appear first in regulatory announcements. A short weekly scan of announcements for holdings and watchlist names, driven by alerts rather than endless browsing, keeps you informed without turning research into a daily habit.

                ## Milestones
                1. Announcement alerts set up for every holding and watchlist company.
                2. A weekly slot of 20 to 30 minutes reserved for the scan.
                3. Material announcements noted against the relevant thesis.
                4. News feeds that add noise but no facts removed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Alerts cover every holding and each material announcement from the past month is noted on the relevant thesis page."
                cadence: rolling
              tasks:
                - "Set up regulatory announcement alerts for every holding"
                - "Scan the week's announcements and filings @recurring(weekly:sat)"
                - "Note any director dealings or major shareholder changes against the thesis"
                - "Unsubscribe from news feeds that add noise but no facts"
            - name: Annual report reading season
              description: |-
                ## Purpose
                Annual reports tend to arrive in clusters a few months after the financial year end, and reading one properly, including the notes, the auditor's report and the remuneration section, takes two to four hours. Planning a reading season with a queue and a fixed set of questions turns a pile of PDFs into a yearly check on every company you own.

                ## Milestones
                1. A queue of annual reports for every holding, in order of expected publication.
                2. A standard set of questions to answer from each report.
                3. The auditor's report, debt notes and remuneration section read for each holding.
                4. Findings added to each company's thesis page.

                ## Notes
                Start from the **Reading queue** template. Read the notes and the auditor's report first; the glossy front section is written to persuade.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "The latest annual report of every holding has been read and its findings added to the thesis page within the season."
                cadence: cyclic
              tasks:
                - "List the expected annual report dates for every holding @recurring(yearly)"
                - "Write the standard questions you will answer from each report"
                - "Read the auditor's report and the debt notes before the front section"
                - "Add the main findings to each company's thesis page"
            - name: Corporate actions and election deadlines
              description: |-
                ## Purpose
                Rights issues, share consolidations, scrip offers, spin-offs and tender offers often need a decision by a deadline your broker sets, usually days earlier than the company's own date. Missing one can mean being diluted, defaulted into the option you did not want or left holding awkward fractions.

                ## Milestones
                1. Broker notifications for corporate actions switched on for email and the app.
                2. A note of how your broker handles elections and its cut-off times.
                3. Each corporate action recorded in the holdings log with the choice made.
                4. Cost records adjusted after any consolidation, split or spin-off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No corporate action election is missed in a year, and each one is recorded in the holdings log with the choice made."
                cadence: rolling
              tasks:
                - "Turn on corporate action notifications for email and the broker app"
                - "Find your broker's cut-off times for corporate action elections"
                - "Check the broker's corporate actions inbox for pending elections @recurring(monthly:20)"
                - "Adjust cost records after any split, consolidation or spin-off"
            - name: Written sell rules for every holding
              description: |-
                ## Purpose
                Buying gets hours of research, while selling usually happens in a panic or not at all. Writing in advance the conditions that trigger a sale, such as a broken thesis, a position over its limit, a price far above your own valuation or a clearly better use of the money, gives each exit a reason you can check later.

                ## Milestones
                1. Four or five general sell triggers written for the whole portfolio.
                2. One or two company-specific kill criteria added to each thesis.
                3. A rule that a sharp fall triggers a review before any trade.
                4. Every holding checked against the triggers at least once.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "General sell triggers are written down and every thesis carries at least one company-specific kill criterion."
                cadence: rolling
              tasks:
                - "Write four or five sell triggers that apply to every holding"
                - "Add one or two company-specific kill criteria to each thesis"
                - "Write a rule that any fall of 20 percent triggers a review, not a trade"
                - "Check every holding against its sell triggers @recurring(quarterly)"
            - name: Decision journal for buys and sells
              description: |-
                ## Purpose
                Memory flatters: months later, lucky calls feel like skill and sound decisions with bad outcomes feel like mistakes. A journal entry for every buy and sell, recording the reasoning, the expected outcome and your confidence, lets you judge the quality of decisions separately from the luck of results.

                ## Milestones
                1. A journal page with date, action, reasoning, expectation and confidence fields.
                2. An entry written before every trade, not after.
                3. Entries older than six months reread each month.
                4. Mistakes that recur listed, with a process fix for each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trade in the last twelve months has a journal entry dated on or before the trade date."
                cadence: rolling
              tasks:
                - "Create a journal page with fields for reasoning, expectation and confidence"
                - "Write an entry before placing any buy or sell order"
                - "Reread journal entries older than six months @recurring(monthly:24)"
                - "List any mistake you notice repeating, with one process fix"
            - name: Annual stock picking scorecard against a tracker
              description: |-
                ## Purpose
                The only honest test of stock picking is whether it beats what the same money would have earned in a low-cost index fund, after dealing costs, currency charges and the hours spent. A yearly scorecard comparing your satellite's total return with a chosen benchmark tells you whether to carry on, shrink the satellite or stop.

                ## Milestones
                1. A benchmark index chosen that matches the markets you pick from.
                2. Total return of the satellite calculated, including dividends and all costs.
                3. The same cash flows modelled into the benchmark on the same dates.
                4. Hours spent on research estimated for the year.
                5. A recorded decision to carry on, resize or stop.

                ## Notes
                One year proves very little either way. Judge the trend across three to five scorecards before drawing conclusions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly scorecard shows satellite return after costs beside the benchmark return, with a carry on, resize or stop decision recorded."
                cadence: cyclic
              tasks:
                - "Choose a benchmark index that matches the markets you pick from"
                - "Calculate the satellite's total return after all costs @recurring(yearly)"
                - "Model the same cash flows into the benchmark on the same dates"
                - "Record whether to carry on, resize or stop stock picking"
            - name: Monthly idea pipeline triage
              description: |-
                ## Purpose
                Ideas arrive from screeners, conversations, annual reports and the news, and an untriaged list grows into a pile of half-researched names that are never finished or dropped. A monthly triage that moves each idea to reject, watchlist or full research keeps the pipeline short and points research time at the best candidates.

                ## Milestones
                1. One inbox list where every new idea lands with its source.
                2. A two-minute rejection test written, covering things like size, debt or a business you cannot explain.
                3. Each month's new ideas sorted into reject, watchlist or full research.
                4. No more than two companies in full research at once.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The idea inbox is emptied each month and no more than two companies sit in full research at any time."
                cadence: rolling
              tasks:
                - "Create a single inbox list for new company ideas and their source"
                - "Write a two-minute rejection test for new ideas"
                - "Sort the month's ideas into reject, watch or research @recurring(monthly:16)"
                - "Cap full research at two companies at a time"
            - name: Reading the three financial statements
              description: |-
                ## Purpose
                Almost every claim about a company rests on the income statement, balance sheet and cash flow statement, and on how they connect. Working through one real annual report line by line, tracing profit into cash and onto the balance sheet, builds the base every other research skill depends on.

                ## Milestones
                1. One introductory course or book on company accounts finished.
                2. A real annual report's three statements read with every line understood.
                3. Net profit reconciled to operating cash flow for that company.
                4. A one-page glossary of the terms you had to look up.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One company's net profit has been reconciled to its operating cash flow by hand, with a glossary of terms kept."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose one introductory course or book on reading company accounts"
                - "Print the three statements from one annual report you know"
                - "Trace net profit through to operating cash flow for that company"
                - "Keep a glossary of every term you had to look up"
            - name: Cash flow and earnings quality
              description: |-
                ## Purpose
                Reported profit involves many judgement calls, while cash is far harder to dress up. Learning to compare earnings with free cash flow over five years, and to spot rising receivables, capitalised costs and large one-off adjustments, catches companies whose profits are not turning into money.

                ## Milestones
                1. Free cash flow calculated for one company over five years.
                2. Cash conversion compared with reported profit for each year.
                3. Working capital movements and capitalised costs examined.
                4. Adjusted profit measures reconciled back to statutory figures.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-year table of profit against free cash flow exists for at least one holding, with adjusted figures reconciled."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Calculate five years of free cash flow for one holding"
                - "Compare free cash flow with reported profit year by year"
                - "Reconcile the company's adjusted profit back to statutory profit"
                - "Note any year where receivables grew much faster than sales"
            - name: Balance sheet strength and debt maturity
              description: |-
                ## Purpose
                Companies rarely fail from one bad quarter; they fail when debt falls due and cannot be refinanced. Learning to read the debt note, lease liabilities, covenants and maturity schedule shows whether a business could survive two bad years without diluting its shareholders.

                ## Milestones
                1. Net debt calculated including leases and pension deficits for one company.
                2. The debt maturity schedule laid out by year from the notes.
                3. Interest cover and any covenant headroom noted.
                4. A one-line refinancing risk verdict written for every holding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every holding has a written net debt figure, maturity profile and one-line refinancing risk verdict."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the debt note and maturity table in one holding's annual report"
                - "Calculate net debt including leases and pension deficits"
                - "Note interest cover and any covenant tests disclosed"
                - "Write a one-line refinancing risk verdict for each holding"
            - name: Valuation multiples and what they assume
              description: |-
                ## Purpose
                A price to earnings ratio of 12 can be expensive and one of 40 cheap, depending on growth, returns on capital and debt. Learning what earnings, cash flow and enterprise value multiples each assume, and when each misleads, stops valuation being a single number copied from a data site.

                ## Milestones
                1. Price to earnings, EV to EBIT, price to free cash flow and free cash flow yield calculated by hand for one company.
                2. The same multiples compared with the company's own ten-year range.
                3. A note of which multiple suits which kind of business.
                4. One documented case where a low multiple was a warning sign.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four multiples have been calculated by hand for one company and set against its ten-year range, with notes on when each misleads."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate four valuation multiples by hand for one company"
                - "Compare them with the company's own ten-year range"
                - "Write which multiple suits asset-heavy, growth and cyclical businesses"
                - "Find one case where a cheap multiple came before a collapse"
            - name: Discounted cash flow model from scratch
              description: |-
                ## Purpose
                Building a simple discounted cash flow model in a spreadsheet forces every assumption into the open: growth, margins, reinvestment and the discount rate. The point is not a precise value but seeing which two or three inputs move the answer most, so research time goes where it matters.

                ## Milestones
                1. A ten-year model for one company with explicit growth, margin and reinvestment inputs.
                2. Terminal value and discount rate choices written down and justified.
                3. A sensitivity table showing value across ranges of growth and discount rate.
                4. The two assumptions that move the result most identified.

                ## Notes
                A model that says a share is worth exactly 4.37 is false precision. Treat the output as a range and the inputs as questions for your research.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A working spreadsheet model with a sensitivity table exists for one company, with its two most influential assumptions named."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one company with steady cash flows for your first model"
                - "Build ten years of forecasts with growth, margin and reinvestment inputs"
                - "Add a sensitivity table across growth and discount rates"
                - "Write down the two assumptions that move the value most"
            - name: Competitive advantage and industry structure
              description: |-
                ## Purpose
                High returns on capital attract competitors, so the question for any profitable company is what stops rivals copying it. Studying the common sources of durable advantage, such as switching costs, network effects, scale and brands, and mapping each industry's suppliers, customers and rivals, makes the business section of every thesis testable.

                ## Milestones
                1. Ten years of return on capital charted for each holding.
                2. The source of advantage named for each holding, or marked as none.
                3. An industry map of suppliers, customers, rivals and substitutes for one company.
                4. Evidence listed that would show each advantage eroding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each thesis names a source of advantage or states none, backed by a ten-year return on capital record."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Chart ten years of return on capital for each holding"
                - "Name the source of competitive advantage for each, or write none"
                - "Map suppliers, customers, rivals and substitutes for one company"
                - "List the evidence that would show each advantage weakening"
            - name: Management and capital allocation assessment
              description: |-
                ## Purpose
                Over a decade, what management does with the cash, whether buybacks, acquisitions, dividends or new investment, can matter as much as the business itself. Reading the remuneration report, past acquisition results and directors' own shareholdings shows whether the people in charge are paid to create value or simply to grow.

                ## Milestones
                1. Ten years of cash uses tabulated: capital spending, acquisitions, buybacks, dividends and debt repayment.
                2. Bonus targets in the remuneration report listed and compared with shareholder outcomes.
                3. Past acquisitions checked for later write-downs.
                4. Directors' shareholdings and recent dealings recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One holding has a ten-year table of cash uses and a written judgement on whether executive pay targets match shareholder returns."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Tabulate ten years of how one company spent its cash"
                - "List the targets that set executive bonuses in the remuneration report"
                - "Check past acquisitions for later write-downs or impairments"
                - "Record each director's shareholding and dealings this year"
            - name: Listening to results calls with a question list
              description: |-
                ## Purpose
                Results calls reveal what management chooses to emphasise, what analysts keep pressing on and which questions get dodged. Preparing three or four questions from your thesis beforehand, then listening for the answers, turns an hour of corporate language into evidence.

                ## Milestones
                1. Three or four questions drawn from the thesis before the call.
                2. The call heard or the full transcript read for one holding.
                3. Answers, non-answers and changes in tone since the last call noted.
                4. Any shift in guidance or emphasis added to the thesis page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes from at least two consecutive results calls for one holding exist, with changes in guidance recorded on the thesis."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write three questions from your thesis before the next results call"
                - "Listen to the call or read the full transcript"
                - "Note which analyst questions management avoided or answered vaguely"
                - "Ask the agent to compare this call's transcript with the previous one for changed wording"
            - name: Accounting red flags and warning signs
              description: |-
                ## Purpose
                Most large share price collapses were preceded by visible signs: an auditor change, late filings, a widening gap between profit and cash, aggressive revenue recognition or heavy reliance on adjusted figures. Building a personal red flag list from real cases, and checking holdings against it, gives you a chance to leave before the bad news is confirmed.

                ## Milestones
                1. Three well-documented corporate collapses studied from their published accounts.
                2. A red flag list of 10 to 15 warning signs written.
                3. Every holding checked against the list.
                4. Any holding showing two or more flags given a full review.

                ## Notes
                Start from the **Risk register** template, with one row per flag and a column per holding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written list of 10 to 15 red flags exists and every holding has been checked against it within the last year."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Study the published accounts of three companies that later collapsed"
                - "Write a list of 10 to 15 warning signs from those cases"
                - "Check every holding against the red flag list @recurring(yearly)"
                - "Schedule a full review for any holding showing two or more flags"
            - name: Building a new position in stages
              description: |-
                ## Purpose
                Committing the full position on day one leaves no room for learning, while buying in two or three planned tranches lets the next set of results confirm or challenge the thesis before more money goes in. Deciding the tranche plan in advance stops it turning into impulsive topping up.

                ## Milestones
                1. A standard tranche plan written, for example a third now and the rest after results.
                2. The conditions each later tranche must meet recorded in the thesis.
                3. A rule for cancelling the remaining tranches if the thesis weakens.
                4. The plan applied to the next new position.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written tranche plan exists and the next new position follows it, with tranche conditions recorded on its thesis."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a standard tranche plan for new positions"
                - "Record the conditions each later tranche must meet"
                - "Add a rule for cancelling remaining tranches if the thesis weakens"
                - "Apply the plan to the next company you buy"
            - name: Rules for adding to a fallen share
              description: |-
                ## Purpose
                Averaging down can be a sound use of money when the business is intact and only the price has fallen, or a way of doubling a mistake. A written rule, such as only adding after a fresh thesis review and never beyond the position limit, separates conviction from stubbornness.

                ## Milestones
                1. A rule stating when adding to a fallen share is allowed.
                2. A rewritten thesis required before any addition.
                3. The position limit confirmed as applying to the combined holding.
                4. Past additions reviewed against the new rule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written averaging down rule exists and every addition since it was written has a rewritten thesis dated before the trade."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the conditions under which you may add to a fallen share"
                - "Require a rewritten thesis before any addition"
                - "Check that the position limit applies to the combined holding"
                - "Review past top-ups against the new rule"
            - name: Trimming a holding that outgrew its limit
              description: |-
                ## Purpose
                A share that has tripled can quietly become a quarter of the satellite, and selling part of a winner feels wrong even when your own limits say so. Deciding in advance how much to trim, from which account and how to time it around tax and dealing costs makes the trim mechanical.

                ## Milestones
                1. Holdings above their maximum weight identified.
                2. The amount to sell calculated to return each to its target.
                3. The account and purchase lot to sell from chosen, with the tax effect noted.
                4. The trim placed and recorded in the log and the journal.

                ## Notes
                Rules on gains differ by country and account type. Check the tax authority's guidance or ask a tax adviser before selling a large holding outside a tax-free wrapper.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every holding above its maximum weight has been trimmed back to target or carries a written reason for waiting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List holdings sitting above their maximum weight"
                - "Calculate how much to sell to return each to target"
                - "Note the gain and the account each sale would come from"
                - "Place the trim and record the reason in the decision journal"
            - name: Hold, trim or sell review after a broken thesis
              description: |-
                ## Purpose
                When results contradict a key thesis claim, the natural reaction is to wait for one more quarter, then another. A structured review within two weeks of the break, starting from a blank page rather than the old thesis, forces a clear choice and records why it was made.

                ## Milestones
                1. The thesis claim that broke stated in one sentence.
                2. A fresh view of the business written as if you had never owned it.
                3. A recorded decision to hold, trim or sell, with the reasoning.
                4. The action completed within the time you set.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written hold, trim or sell decision exists within two weeks of any broken thesis, and the chosen action has been carried out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the thesis claim that results have contradicted"
                - "Assess the company on a blank page as if you never owned it"
                - "Decide to hold, trim or sell and write down the reasoning"
                - "Complete the trade or set the date of the next review"
            - name: Access to overseas shares and currency costs
              description: |-
                ## Purpose
                Picking companies listed abroad adds currency margins, foreign withholding tax on dividends, extra paperwork and sometimes different accounting rules. Setting up access properly, including any tax forms the broker requires and a clear view of conversion charges, avoids paying more in frictions than the idea is worth.

                ## Milestones
                1. The overseas markets you want listed, with broker access confirmed.
                2. Currency conversion charges and any multi-currency account option checked.
                3. Required withholding tax forms identified and completed through the broker.
                4. Reporting calendars and accounting standards noted for each market.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each overseas market you buy in has its conversion cost, tax form status and reporting calendar written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the overseas markets you want to buy shares in"
                - "Check your broker's currency conversion charge for each"
                - "Complete any withholding tax forms the broker requires"
                - "Note the reporting calendar and accounting standard in each market"
            - name: Tidying old share certificates and legacy holdings
              description: |-
                ## Purpose
                Shares bought decades ago, inherited, or received from a demutualisation often sit as paper certificates or with a registrar, forgotten and never reviewed. Gathering them, checking they are still live and deciding whether each belongs in a researched portfolio brings them under the same rules as everything else.

                ## Milestones
                1. Every paper certificate and registrar account listed in one place.
                2. Each holding's current status and value confirmed with its registrar.
                3. A decision recorded for each: research and keep, transfer to the broker or sell.
                4. Original cost records found or reconstructed where possible.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every legacy certificate or registrar holding is listed with its confirmed value and a keep, transfer or sell decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather every paper share certificate and registrar letter in one folder"
                - "Contact each registrar to confirm the holding is still live"
                - "Decide whether to keep, transfer or sell each legacy holding"
                - "Reconstruct original cost records where you can"
            - name: Picking shares or using a fund for one sector
              description: |-
                ## Purpose
                Some sectors reward individual research, while others, such as early-stage drug developers or mining explorers, are close to binary bets where a fund's spread may serve better. Comparing your own picks in one sector with a low-cost sector fund on concentration, cost and research time decides where effort is worth it.

                ## Milestones
                1. One sector you hold or want to hold chosen for the comparison.
                2. A low-cost fund covering that sector identified with its ongoing charge.
                3. Your picks and the fund compared on concentration, cost and time required.
                4. A decision recorded for that sector.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of individual picks against a sector fund exists, with a decision to pick, use the fund or mix."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one sector where your picks are concentrated"
                - "Find a low-cost fund that covers the same sector"
                - "Compare concentration, cost and research time for each route"
                - "Record whether to keep picking, use the fund or mix the two"
            - name: Voting your shares and attending an AGM
              description: |-
                ## Purpose
                Shareholders vote on directors, pay and major deals, and the annual general meeting is one of the few chances to question a board directly. Many nominee accounts do not pass votes on unless you ask, so setting up voting and attending one meeting turns ownership into a voice and often into better research.

                ## Milestones
                1. Your broker's arrangements for voting and AGM attendance confirmed.
                2. Votes cast on every resolution for at least one holding.
                3. One AGM attended in person or online with a question prepared.
                4. What you learned added to the thesis page.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Votes have been cast for at least one holding and one AGM attended, with notes added to the thesis."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your broker how it passes on voting rights and AGM invitations"
                - "Read the notice of meeting for one holding"
                - "Cast votes on each resolution and note your reasons"
                - "Attend one AGM with a question prepared from your thesis"
            - name: Responding to a takeover offer for a holding
              description: |-
                ## Purpose
                Bids for a company you own arrive with a premium, a timetable and plenty of opinion in the press, and doing nothing is itself a decision. Working through the offer document, your own valuation and the broker's deadlines lets you accept, sell in the market or wait, each with a reason.

                ## Milestones
                1. Offer terms, form of payment and timetable summarised.
                2. The offer price compared with your own valuation range.
                3. Options listed: accept, sell in the market or hold for a higher bid.
                4. A decision made before the broker's election deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written decision on the offer, compared with your own valuation, is made before the broker's election deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the offer terms, payment form and timetable"
                - "Compare the offer with your own valuation range"
                - "Find the broker's deadline for accepting the offer"
                - "Record your decision and act before the deadline"
            - name: Profit warning or sharp fall response
              description: |-
                ## Purpose
                A one-day fall of 20 or 30 percent after a profit warning creates pressure to act at once, either selling at the low or buying more on instinct. A prepared response, with a 48-hour pause, a full read of the announcement and a check against your kill criteria, keeps the decision tied to the business rather than the chart.

                ## Milestones
                1. A written response plan with a cooling-off period before any trade.
                2. The announcement read in full, not only the headline.
                3. The news checked against the thesis and its kill criteria.
                4. A decision recorded in the journal with the reasoning.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written sharp fall plan exists, and any fall of 20 percent or more has a journal entry made after the cooling-off period."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a sharp fall response plan with a 48-hour pause"
                - "Read the full announcement rather than the headline"
                - "Check the news against the thesis kill criteria"
                - "Note whether the fall changes the business or only the price"
            - name: First year of stock picking review
              description: |-
                ## Purpose
                Twelve months in, there are enough trades, journal entries and results to see how your process actually works, though not enough to judge skill. A first-year review looks at process: whether checklists were used, limits held, theses written before purchases and research hours kept to budget.

                ## Milestones
                1. Every trade from the year listed with its journal entry.
                2. Skipped checklists, limit breaches and missing theses counted.
                3. Research hours compared with the budget you set.
                4. Three process changes for year two written down.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written first-year review counts process lapses and lists three changes for year two."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every trade from the first year with its journal entry"
                - "Count missing theses, skipped checklists and limit breaches"
                - "Compare actual research hours with your budget"
                - "Write three process changes for year two"
            - name: Five-year stock picking retrospective
              description: |-
                ## Purpose
                Five years is long enough to judge whether stock picking is adding value after costs and time, and to see which kinds of company you understand best. A retrospective across five scorecards settles whether to keep the satellite, resize it or fold it back into funds.

                ## Milestones
                1. Five annual scorecards gathered side by side.
                2. Returns split by sector, type of company and holding period.
                3. Your best and worst decisions identified, with process and luck separated.
                4. A decision recorded on the size of the satellite for the next five years.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A five-year table of scorecards exists with a recorded decision on the future size of the satellite."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather five years of scorecards in one table"
                - "Split returns by sector and holding period"
                - "Separate good process from luck in your best and worst calls"
                - "Record the satellite size for the next five years"
            - name: Stock picking from a small starting pot
              description: |-
                ## Purpose
                With a few hundred or a few thousand to invest, a flat dealing fee can eat several percent of each purchase, and ten holdings can mean positions too small to matter. Planning around fractional shares, regular investing services and fewer holdings makes a small pot practical and keeps the cost of learning low.

                ## Milestones
                1. Dealing costs worked out as a percentage of a typical purchase.
                2. Fractional share or low-cost regular dealing options checked at your broker.
                3. A maximum number of holdings set to suit the pot size.
                4. A plan for adding money over time recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Dealing cost per trade is below a percentage you have set, with a holding count and contribution plan recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the dealing fee as a percentage of your typical purchase"
                - "Check whether your broker offers fractional shares or cheap regular dealing"
                - "Set a holding count that keeps each position meaningful"
                - "Write how much you will add each month and where it goes"
            - name: Two-hour monthly research routine for busy people
              description: |-
                ## Purpose
                Full-time work, young children or caring duties leave little room for reading annual reports, and stock picking without research time drifts into following tips. A fixed two-hour monthly session with a set agenda, plus a smaller portfolio of five to eight holdings, fits research to the time you really have.

                ## Milestones
                1. A two-hour monthly research slot booked in the calendar.
                2. A fixed agenda for the session written.
                3. Holdings reduced or capped to a number the time can support.
                4. Three sessions completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly research sessions have been held, with holdings capped at a number reviewable in that time."
                cadence: rolling
              tasks:
                - "Book a two-hour research session in your calendar @recurring(monthly:12)"
                - "Write a fixed agenda for the session"
                - "Cap holdings at a number you can review in the time available"
                - "Keep a list of research jobs that can wait until the next session"
            - name: Shared stock research rules for a couple
              description: |-
                ## Purpose
                When two people share finances, one partner picking shares with joint money can create friction or hidden risk, especially if the other cannot follow what is held. Agreeing limits, who researches what and how decisions are signed off keeps stock picking from becoming a source of argument or a secret.

                ## Milestones
                1. A conversation held on whether and how much shared money goes into individual shares.
                2. Joint limits agreed and written down.
                3. Roles agreed for research and final decisions.
                4. A quarterly review together in the calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both partners have agreed written limits and roles for individual shares and held at least one joint review."
                cadence: rolling
              tasks:
                - "Agree whether joint money can go into individual shares"
                - "Write joint position and satellite limits both of you accept"
                - "Decide who researches which holdings and who signs off trades"
                - "Review shared holdings together @recurring(quarterly)"
            - name: Share portfolio handover notes for a partner or executor
              description: |-
                ## Purpose
                Individual shares are far harder for someone else to manage than a single index fund, and a grieving partner or executor may not know where the accounts are or why each company is held. Short handover notes, with access details stored securely and a plain instruction for each holding, prevent forced sales or years of neglect.

                ## Milestones
                1. A list of every account and holding, with where access details are kept.
                2. A plain instruction for each holding: keep, sell or move into a fund.
                3. A default instruction for the whole portfolio if anyone is in doubt.
                4. The notes stored where your partner or executor will find them.

                ## Notes
                Never write passwords into the notes themselves. Say where they are kept, for example in a password manager with an emergency access feature.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Handover notes covering every account and holding exist, and your partner or executor knows where to find them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every dealing account and where its access details are stored"
                - "Write a plain instruction for each holding"
                - "Add a default instruction for anyone unsure what to do"
                - "Tell your partner or executor where the notes are kept"
            - name: Winding down stock picking towards retirement
              description: |-
                ## Purpose
                As retirement nears, a concentrated satellite that fell 40 percent would hurt more and leave less time to recover, and appetite for hours of research may fade. A gradual plan to shrink the number of holdings, lower position limits or fold holdings into funds keeps the stakes in proportion.

                ## Milestones
                1. A target satellite size set for each year until retirement.
                2. Lower position limits recorded for the later years.
                3. An order for reducing holdings written, starting with the riskiest.
                4. The tax effect of the run-down checked with an adviser.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A year-by-year satellite size plan to retirement is written, with lower position limits and a reduction order."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set a target satellite size for each year to retirement"
                - "Lower position limits in the holdings log for later years"
                - "Rank holdings by risk to decide which go first"
                - "Check the satellite against this year's target size @recurring(yearly)"
            - name: Investment club or research group ground rules
              description: |-
                ## Purpose
                Researching with others brings fresh ideas and challenge, but clubs can slide into groupthink, tip-swapping or arguments over money. Clear ground rules on pooled or separate money, how ideas are pitched and how decisions are recorded keep a group useful to every member.

                ## Milestones
                1. A decision on whether money is pooled or each member invests separately.
                2. A standard format for pitching a company to the group.
                3. A rule that every pitch includes the strongest case against.
                4. Notes kept for every pitch and decision.

                ## Notes
                Start from the **Meeting notes** template. A club that pools money may need a written constitution and its own tax reporting, so check the rules where you live first.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Written ground rules exist and meeting notes record every pitch and decision for the last three meetings."
                cadence: rolling
              tasks:
                - "Agree whether the group pools money or invests separately"
                - "Write a one-page pitch format every presenter follows"
                - "Require each pitch to include the strongest case against"
                - "Hold the monthly research meeting @recurring(monthly:27)"
            - name: Sector metrics for banks, insurers and property companies
              description: |-
                ## Purpose
                Standard ratios mislead for financial and property companies: banks are judged on capital ratios, net interest margin and loan losses, insurers on combined ratios and reserves, and property companies on net asset value and loan to value. Learning the right measures before holding any of them avoids applying factory logic to a balance sheet business.

                ## Milestones
                1. Core metrics listed for banks, insurers and property companies.
                2. One annual report from each sector read with those metrics found.
                3. Sector-specific questions added to the pre-purchase checklist.
                4. Any holdings in these sectors re-checked with the new measures.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The pre-purchase checklist carries sector questions for banks, insurers and property companies, tested on one report from each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the core metrics used for banks, insurers and property companies"
                - "Find those metrics in one annual report from each sector"
                - "Add sector questions to the pre-purchase checklist"
                - "Re-check any financial or property holdings using the new measures"
            - name: Reverse valuation of market expectations
              description: |-
                ## Purpose
                Instead of estimating what a company is worth, a reverse discounted cash flow asks what growth and margins today's price already assumes. Running one on each of your three largest holdings shows whether the market expects something near impossible or very little, which is often more useful than a target price.

                ## Milestones
                1. The existing model adapted to solve for implied growth at today's price.
                2. Implied growth and margins calculated for the three largest holdings.
                3. Implied assumptions compared with each company's history and industry.
                4. A note on each thesis saying whether expectations look modest or demanding.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Implied growth at today's price is calculated for the three largest holdings and compared with their ten-year records."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Adapt your discounted cash flow model to solve for implied growth"
                - "Run it for your three largest holdings"
                - "Compare implied growth with each company's ten-year record"
                - "Note on each thesis whether expectations look modest or demanding"
            - name: Scenario analysis on your largest holding
              description: |-
                ## Purpose
                The largest position carries the most risk to the satellite, so it deserves more than a single central case. Writing bear, base and bull scenarios with explicit numbers and rough probabilities shows the downside you are accepting and whether the position size still fits.

                ## Milestones
                1. Bear, base and bull scenarios written with revenue, margin and valuation assumptions.
                2. A value range and a rough probability attached to each scenario.
                3. The bear case loss calculated as a share of the whole satellite.
                4. Position size confirmed or reduced in light of the downside.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three written scenarios with values and probabilities exist for the largest holding, and its size has been confirmed or cut."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write bear, base and bull cases for your largest holding"
                - "Put a value and rough probability on each case"
                - "Calculate the bear case loss as a share of the satellite"
                - "Ask the agent to argue against the bull case using points from the filings"
            - name: Assessing a short-seller report or controversy
              description: |-
                ## Purpose
                Short-seller reports and investigative articles make serious allegations, often about accounting or governance, and the share price usually moves before anyone has checked the claims. Separating verifiable claims from speculation and testing them against filings gives a calm view of whether the thesis is really at risk.

                ## Milestones
                1. Every specific allegation listed in one table.
                2. Each allegation checked against filings, the auditor's statements and the company response.
                3. Claims marked verified, rebutted or unresolved.
                4. A decision recorded under your sell rules.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table of allegations, each marked verified, rebutted or unresolved, exists with a decision recorded under your sell rules."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to turn the report's allegations into a table"
                - "Check every claim against filings and the company's response"
                - "Mark claims as verified, rebutted or unresolved"
                - "Decide under your sell rules and log the outcome"
---

# Individual Stock Research

Researching and owning individual companies can be rewarding and educational, but it is also the easiest part of a portfolio to get wrong, so this area is for anyone who wants to pick shares with written reasons and firm limits rather than tips and hunches. It starts with the foundations (whether to pick shares at all, a cap on the satellite, position limits, a broker, a thesis template, sources, a watchlist, a holdings log and a pre-purchase checklist), then the routines that test each holding, the accounting and valuation skills worth learning, decisions about building, adding to and trimming positions, dated events such as a takeover bid or a profit warning, variants for small pots, busy people, couples, clubs and those nearing retirement, and finally specialist work such as reverse valuations and short-seller reports.

The rhythm follows the reporting calendar: a weekly scan of announcements, monthly checks of weights, the trade log, the idea pipeline and pending corporate actions, a quarterly results review against each thesis, and yearly jobs such as re-underwriting every holding, the annual report season and a scorecard against a plain index fund. The Purchase decision, Metrics log, Operational checklist, Reading queue, Risk register and Meeting notes templates pair with the broker choice, the holdings log, the pre-purchase checklist, the annual report queue, the red flag list and an investment club. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
