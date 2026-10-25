---
id: private-equity-vc.lbo-modelling
name: LBO Modelling
description: "A route to building buyout models you trust: workspace and conventions, sources and uses, the operating case, debt schedules, returns and sensitivities, review routines, tests and the specialist structures seen on live deals."
category: business
version: 1.0.0
tags: [private-equity-vc, lbo-modelling, knowledge-worker, student, leveraged-buyout, financial-modelling, returns-analysis, debt-schedule]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - training-program
    - operational-checklist
    - development-plan
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: LBO Modelling
          description: "Building buyout models: sources and uses, operating case, debt schedule, returns and sensitivity tables, and checking the model before it reaches committee."
          projects:
            - name: Modelling workspace and Excel settings set-up
              description: |-
                ## Purpose
                Half of the slow, error-prone modelling people blame on skill is really a badly set-up machine: automatic calculation switched off by accident, iterative calculation left on so circular errors hide, a mouse doing what the keyboard should. Spending one session fixing settings, add-ins and the ribbon means every model you build afterwards starts from the same reliable base.

                ## Milestones
                1. Calculation mode, iterative calculation and error checking settings chosen and written down.
                2. Your formula auditing and formatting shortcuts listed on one page beside the keyboard.
                3. Any modelling add-in your firm or course uses installed and tested on a sample file.
                4. A default workbook style saved so new files open with your fonts and number formats.

                ## Notes
                Leave iterative calculation off by default and switch it on only inside a model with a deliberate circularity switch. Silent iteration is how a broken interest calculation survives to committee.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your calculation settings are recorded, a one-page shortcut sheet exists and a default workbook style opens on every new file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check calculation mode and iterative calculation settings in Excel options"
                - "Write a one-page list of the twenty shortcuts you use most"
                - "Install and test any modelling add-in your firm or course provides"
                - "Save a default workbook style with your fonts and number formats"
            - name: Formatting and colour convention standard for models
              description: |-
                ## Purpose
                Reviewers should be able to tell an input from a formula from a link to another sheet without clicking a single cell. Writing down one convention, such as blue hard-codes, black formulas and green cross-sheet links, plus rules for units, signs and timeline headers, makes your models readable to partners, lenders and your future self.

                ## Milestones
                1. A written convention covering font colours, fills for input cells, units and sign conventions.
                2. Rules agreed for timeline headers, period flags and whether costs show as negatives.
                3. A one-tab legend added to your template that explains the convention.
                4. One existing model reformatted to the standard as a test of whether it works.

                ## Notes
                If your firm already has a house style, adopt it rather than inventing your own. Consistency across the team matters more than which colours you pick.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written formatting convention exists as a legend tab in your template and one existing model has been reformatted to match it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask whether your firm or course already has a house modelling style"
                - "Write the colour, unit and sign rules on a single page"
                - "Add a legend tab to your template that shows each convention"
                - "Reformat one old model to the standard and note what felt awkward"
            - name: How buyout returns are made, from first principles
              description: |-
                ## Purpose
                Every LBO return comes from three places: growth in earnings, a change in the multiple paid at exit versus entry, and debt repaid from the company's own cash. Students and new associates who can explain those three drivers, and the role equity cheque size plays, build models that answer the right question instead of just balancing.

                ## Milestones
                1. A one-page explanation in your own words of earnings growth, multiple change and debt paydown as return drivers.
                2. A worked example on paper showing how a smaller equity cheque raises the multiple of money and the risk.
                3. The difference between IRR and multiple of money explained with a two-deal comparison.
                4. Three questions you would ask of any returns output, written at the top of your notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explanation of the three return drivers with a worked numerical example is saved in your modelling notes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read one standard textbook chapter on how leveraged buyouts create returns"
                - "Write a one-page summary of the three return drivers in your own words"
                - "Work a simple two-scenario example by hand showing the effect of more debt"
                - "Compare IRR and multiple of money for a three-year and a six-year hold"
            - name: Paper LBO in fifteen minutes
              description: |-
                ## Purpose
                Interviewers and partners alike ask for a back-of-envelope buyout: entry price, debt, a few years of cash flow, exit and an approximate IRR, with no spreadsheet. Being able to do one in fifteen minutes, with the rule-of-thumb links between multiple of money and IRR, is the fastest test of whether you understand the model or only the template.

                ## Milestones
                1. A one-page paper LBO method written down: entry, debt, cash generation, exit, returns.
                2. The approximate IRR for common multiples of money over three, five and seven years memorised.
                3. Ten paper LBOs completed by hand, each timed and checked against a spreadsheet.
                4. Average completion time under fifteen minutes with the IRR within two points of the spreadsheet.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten timed paper LBOs are logged, with the last five done in under fifteen minutes and an IRR within two points of a spreadsheet check."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write your paper LBO method on one sheet you can keep beside you"
                - "Learn the IRR for a 2x and 3x multiple of money over three and five years"
                - "Do one timed paper LBO by hand each week and check it in Excel @recurring(weekly:wed)"
                - "Log each attempt's time and IRR error in a short table"
            - name: Transaction assumptions page
              description: |-
                ## Purpose
                Most model errors that reach a partner trace back to an assumption buried in a formula: an entry multiple typed into the sources and uses, a closing date hard-coded into the debt tab. A single assumptions page holding the entry valuation, closing date, fees, financing terms and exit assumptions makes every key number visible, changeable and reviewable in one place.

                ## Milestones
                1. One assumptions tab listing entry multiple, LTM earnings basis, closing date and holding period.
                2. Financing inputs for each debt tranche: size, pricing, fees, amortisation and maturity.
                3. Transaction and financing fee inputs separated, with a source noted beside each.
                4. No hard-coded deal assumption left anywhere else in the model, checked by a formula search.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model exists in which every transaction assumption sits on one tab with a source note, and a search finds no other hard-coded deal inputs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every assumption a buyout model needs before the first formula"
                - "Build the assumptions tab with a source column beside each input"
                - "Link the rest of the model to the tab and remove stray hard-codes"
                - "Search the workbook for typed numbers inside formulas and fix each one"
            - name: Sources and uses table built from scratch
              description: |-
                ## Purpose
                The sources and uses table is the first thing anyone checks: what is being paid, for what, and who is funding it. Building one that handles enterprise value to equity value, refinanced debt, cash on the balance sheet, fees and the sponsor and rollover equity, and that always balances by formula, is the foundation every later tab rests on.

                ## Milestones
                1. Uses covering purchase equity, refinanced net debt, transaction fees and financing fees.
                2. Sources covering each debt tranche, sponsor equity, management rollover and any cash used.
                3. Equity cheque calculated as the plug, with a check cell showing sources equal uses.
                4. Implied entry multiples and debt as a multiple of earnings shown beneath the table.

                ## Notes
                Agree early whether the price is quoted on a cash-free, debt-free basis. Mixing that up is the most common reason a sources and uses table looks right and is wrong.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sources and uses table balances by formula, takes the equity cheque as the plug and shows implied entry and debt multiples beneath it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the sources and uses layout on paper before opening Excel"
                - "Build the uses side, including refinanced debt and both kinds of fees"
                - "Make sponsor equity the plug and add a balance check cell"
                - "Add implied entry and debt multiples beneath the table"
            - name: Historical financials spread into model format
              description: |-
                ## Purpose
                Information memoranda and management accounts arrive in every layout imaginable, and a model is only as good as the history it projects from. Spreading three to five years of income statement, balance sheet and cash flow into your model's own line structure, and reconciling to the source totals, gives the operating case something real to stand on.

                ## Milestones
                1. Three to five historical years mapped into the model's line items with a mapping table.
                2. Reported totals reconciled to the source documents with a visible check row.
                3. Adjusted earnings brought in as a separate bridge from reported, using the diligence figures supplied.
                4. Historical ratios for growth, margins, working capital and capex calculated for each year.

                ## Notes
                The adjustments themselves belong to the financial diligence work. Your job here is to bring them in transparently as a bridge, never to bury them in the reported line.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A historical tab with three or more years mapped to the model structure, reconciled to source with check rows and a reported to adjusted earnings bridge."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the source financial statements for each historical year"
                - "Build a mapping table from source lines to model lines"
                - "Add check rows that tie each total back to the source document"
                - "Calculate growth, margin, working capital and capex ratios by year"
            - name: Personal clean LBO template
              description: |-
                ## Purpose
                Rebuilding the same tabs for every deal or practice case wastes hours and invites new mistakes each time. A clean template with assumptions, sources and uses, operating case, three statements, debt schedule, returns and sensitivity tabs already linked and tested lets you spend time on the judgement calls rather than the plumbing.

                ## Milestones
                1. A template with every core tab linked, using dummy numbers that balance.
                2. Check cells for balance sheet, cash and sources and uses summarised on a front page.
                3. A model map tab describing each sheet and the flow between them.
                4. The template tested by running one real practice case through it end to end.

                ## Notes
                Keep the template generic. The moment it contains a real company's figures, it is a deal file and belongs in that deal's folder, not your template.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A linked LBO template with a check summary, a model map tab and one practice case run through it end to end without errors."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the tabs and the order of flow your template will use"
                - "Build each tab with dummy numbers until the balance sheet balances"
                - "Add a front-page check summary and a model map tab"
                - "Review and refresh the template against what you learned this year @recurring(yearly)"
            - name: Modelling reading and reference shelf
              description: |-
                ## Purpose
                Good modellers keep a short list of references they return to: a textbook on leveraged finance, a guide to debt documents, a few well-built public case studies. Curating that shelf, and working through it at a steady pace, fills the gaps that on-the-job learning leaves.

                ## Milestones
                1. A reading queue of eight to twelve books, guides and case studies on buyouts and leveraged finance.
                2. Each item tagged by topic: mechanics, debt, accounting, returns or case study.
                3. One item finished each month with three takeaways written in your notes.
                4. Takeaways that changed how you model added to your template or checklist.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reading queue of at least eight items exists, with takeaways recorded for every item finished."
                cadence: rolling
              tasks:
                - "List eight buyout and leveraged finance references worth reading"
                - "Tag each reference by topic and order them by priority"
                - "Finish one reference and write three takeaways @recurring(monthly:9)"
                - "Move any takeaway that changes your method into the template"
            - name: Weekly timed modelling drills
              description: |-
                ## Purpose
                Speed in a modelling test or a live process comes from repetition, not from reading about it. A weekly ninety-minute drill on one part of the model, such as a debt schedule from blank or a sensitivity table, keeps your hands fast and shows which pieces still slow you down.

                ## Milestones
                1. A rota of drill topics covering each part of an LBO across eight weeks.
                2. A log recording each drill's topic, time taken and errors found.
                3. Times for the core drills falling by a quarter compared with the first attempt.
                4. Any drill still slow after three attempts flagged for a focused session.

                ## Notes
                Start from the **Training program** template. Drill with the timer running and no template; the point is to build from memory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of drill log entries exist, with times on the core drills at least a quarter faster than the first attempt."
                cadence: rolling
              tasks:
                - "Write an eight-week rota of drill topics, one per week"
                - "Run a ninety-minute timed drill from a blank sheet @recurring(weekly:sat)"
                - "Log the time and every error after each drill"
                - "Review the drill log and pick next month's weak spot @recurring(monthly:14)"
            - name: Model version control and file naming routine
              description: |-
                ## Purpose
                Live deal models can go through forty versions in a fortnight, and sending the wrong one to a lender or partner is a career moment nobody wants. A strict naming rule, a change log tab and a weekly archive keep every version traceable and the current one obvious.

                ## Milestones
                1. A file naming rule with date, version number and initials agreed and written down.
                2. A change log tab in the template recording what changed, who changed it and why.
                3. Superseded versions moved to an archive folder each week, leaving one current file.
                4. No model sent externally without its version number in the file name and the cover email.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model in your working folder follows the naming rule, has a filled change log tab and older versions sit in a dated archive."
                cadence: rolling
              tasks:
                - "Write your file naming rule and pin it in the working folder"
                - "Add a change log tab to your template"
                - "Move superseded model versions into the archive folder @recurring(weekly:fri)"
                - "Check the version number before attaching any model to an email"
            - name: Pre-send model review checklist
              description: |-
                ## Purpose
                Before a model leaves your hands, a fixed checklist catches what tired eyes miss: unbalanced sheets, hard-codes in formula rows, broken links, circularity left switched on, sensitivities that do not move. Running the same list every time, and adding to it each time something slips through, is the cheapest insurance in the job.

                ## Milestones
                1. A checklist of twenty to thirty items covering structure, formulas, outputs and presentation.
                2. The checklist run and initialled on every model before it goes to a partner or third party.
                3. Every error caught after sending added to the list within a day.
                4. The list itself reviewed each quarter and trimmed of items that never catch anything.

                ## Notes
                Start from the **Operational checklist** template. Run the list with the model in a fresh window so you see it as the reader will.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written pre-send checklist exists and is initialled for every model sent, with additions recorded after each missed error."
                cadence: rolling
              tasks:
                - "Draft a twenty-item pre-send checklist from your last three model errors"
                - "Run the checklist on the next model before it leaves your hands"
                - "Add any error found after sending to the checklist the same day"
                - "Review the checklist and remove items that never catch anything @recurring(quarterly)"
            - name: Modelling error log and root causes
              description: |-
                ## Purpose
                People repeat the same few mistakes: a sign flipped on working capital, interest on the closing balance creating a circle, a sensitivity table pointing at the wrong cell. Logging each error with its cause and its fix turns embarrassing moments into a personal list of traps you stop falling into.

                ## Milestones
                1. An error log with date, model, what went wrong, root cause and the fix.
                2. Errors grouped into categories after the first ten entries.
                3. Each recurring category matched to a checklist item or a template change.
                4. A month with no repeat of an error already in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An error log of at least ten entries exists, grouped by cause, with each recurring cause linked to a checklist or template fix."
                cadence: rolling
              tasks:
                - "Create the error log with columns for cause and fix"
                - "Write up the last modelling mistake you remember in full"
                - "Review the log and group errors by cause @recurring(monthly:27)"
                - "Turn the most common cause into a template or checklist change"
            - name: Rates and debt terms reference refresh
              description: |-
                ## Purpose
                Interest assumptions date quickly, and a model built on last year's base rates or spreads gives a returns answer nobody should trust. Keeping a small reference file of public base rate forward curves and published leveraged loan pricing ranges, refreshed monthly, means your illustrative financing case starts from current conditions rather than memory.

                ## Milestones
                1. A reference tab with the base rate forward curves for the currencies you model in.
                2. Ranges for spreads, fees and floors noted from public market commentary, each with source and date.
                3. The template's financing inputs linked to the reference tab for practice cases.
                4. A dated monthly snapshot kept so you can see how conditions have moved.

                ## Notes
                On a live deal, financing terms come from the lenders' term sheets, not from your reference file. Use the file for practice cases and first-pass screening only.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reference tab of base rate curves and published loan pricing ranges, each dated and sourced, refreshed in each of the last three months."
                cadence: rolling
              tasks:
                - "Find a public source for base rate forward curves in your main currency"
                - "Note current published spread and fee ranges with source and date"
                - "Refresh the curves and save a dated snapshot @recurring(monthly:3)"
                - "Read a leveraged finance market report and note any change in terms @recurring(quarterly)"
            - name: Public precedent multiples file
              description: |-
                ## Purpose
                Entry and exit multiples are the most argued-about inputs in any LBO, and an exit multiple above entry needs a reason. A file of publicly reported precedent transactions and trading multiples by sector, kept up to date, gives you a defensible range and makes multiple expansion a deliberate assumption instead of a default.

                ## Milestones
                1. A file of publicly reported precedent deals with date, sector, size and multiple where disclosed.
                2. Trading multiple ranges noted for the sectors you model most often.
                3. A rule written down for when an exit multiple above entry is allowed in your base case.
                4. The file refreshed each quarter with new public deals.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A precedent multiples file with at least twenty public deals across your main sectors, refreshed in the last quarter, plus a written exit multiple rule."
                cadence: rolling
              tasks:
                - "Choose the three sectors you model most often"
                - "Record twenty publicly reported deals with disclosed multiples"
                - "Write your rule for when the exit multiple may exceed entry"
                - "Add newly announced public deals to the file @recurring(quarterly)"
            - name: Live deal model maintenance during a process
              description: |-
                ## Purpose
                Once a deal is live, the model changes daily as diligence findings, lender terms and partner comments arrive. A disciplined routine of logging every change, reconciling key outputs twice a week and keeping a single list of open questions stops the model drifting into something nobody can explain.

                ## Milestones
                1. A change log entry for every edit to the live model, with its source.
                2. Key outputs reconciled to the previous version twice a week, with movements explained.
                3. An open questions list for diligence and lender inputs, each with an owner.
                4. A one-page summary of how and why returns moved since the first model.

                ## Notes
                A returns movement you cannot explain line by line is a bug until proven otherwise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every edit to the live model appears in the change log and a returns bridge explains each movement since the first version."
                cadence: rolling
              tasks:
                - "Start an open questions list for the live model with an owner per item"
                - "Log every model edit with its source at the end of the day @recurring(daily)"
                - "Reconcile returns and debt outputs to the last version @recurring(weekly:mon,thu)"
                - "Write the returns movement summary before each partner update"
            - name: Monthly peer model swap
              description: |-
                ## Purpose
                Reviewing someone else's model teaches you as much as having yours reviewed, because you see other ways to structure the same problem and other ways to get it wrong. Swapping a practice model with a colleague or study partner once a month, with an agreed review format, sharpens both of you.

                ## Milestones
                1. A peer or small group agreed, with a monthly swap date.
                2. A short review format covering structure, accuracy, clarity and one thing to borrow.
                3. Written feedback exchanged after each swap.
                4. One technique borrowed from a peer added to your template each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly swaps completed with written feedback exchanged, and at least one borrowed technique added to your template."
                cadence: rolling
              tasks:
                - "Ask a colleague or study partner to swap practice models monthly"
                - "Agree a one-page review format before the first swap"
                - "Swap a practice model and send written feedback @recurring(monthly:20)"
                - "Add the best technique you saw to your template"
            - name: Quarterly rebuild from a blank sheet
              description: |-
                ## Purpose
                Relying on a template can quietly erode the ability to build without one, which is exactly what a modelling test or a strange deal structure demands. Rebuilding a full, simple LBO from an empty workbook once a quarter keeps the logic in your head rather than in the file.

                ## Milestones
                1. A standard practice case chosen so rebuilds are comparable over time.
                2. A full LBO with three statements, debt schedule and returns rebuilt from blank each quarter.
                3. Time and errors for each rebuild logged.
                4. Each rebuild compared with the last to see where speed or accuracy changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two quarterly rebuilds completed from a blank workbook, each balancing, with time and errors logged and compared."
                cadence: cyclic
              tasks:
                - "Pick a standard practice case to use for every rebuild"
                - "Rebuild a full LBO from an empty workbook @recurring(quarterly)"
                - "Log the time taken and every error found"
                - "Compare the result with your previous rebuild"
            - name: Operating case built from revenue drivers
              description: |-
                ## Purpose
                Projections that grow revenue at a flat percentage tell a committee nothing about what has to go right. Building the operating case from drivers, such as volume and price, sites and sales per site, or customers and retention, ties every year of the forecast to something diligence can test.

                ## Milestones
                1. The two or three drivers that explain historical revenue identified and tested against the history.
                2. Revenue projected from those drivers, with each assumption on the inputs tab.
                3. Gross margin and overhead built separately, with fixed and variable costs split.
                4. A margin bridge from the last actual year to the final forecast year.

                ## Notes
                Start the forecast from the management case as supplied, then build your own case alongside it, so the gap between the two is visible.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An operating case driven by at least two tested revenue drivers, with separated fixed and variable costs and a margin bridge to the final year."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Identify which two drivers best explain the company's past revenue"
                - "Test those drivers against the historical years in the spread"
                - "Build revenue and costs from the drivers on a separate tab"
                - "Draw a margin bridge from the last actual year to the exit year"
            - name: Three-statement linkage inside an LBO
              description: |-
                ## Purpose
                Integrating the income statement, balance sheet and cash flow is the step where most beginner models break, usually on the closing balance sheet adjustments or a missing link between interest and cash. Learning to build the pro forma balance sheet at close and roll all three statements forward until they balance without a plug is the core skill of the area.

                ## Milestones
                1. A pro forma closing balance sheet showing the adjustments for new debt, equity, goodwill and fees.
                2. Income statement, balance sheet and cash flow linked for every forecast year.
                3. A balance check that reads zero in every period without any plug.
                4. A written list of the five links you most often forget, kept with your notes.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice LBO whose three statements balance in every forecast year without a plug, with a pro forma closing balance sheet built from transaction adjustments."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw the links between the three statements on one page"
                - "Build the pro forma closing balance sheet with every transaction adjustment"
                - "Roll the statements forward and fix links until the check reads zero"
                - "Write down the links you got wrong and why"
            - name: Debt schedule with amortisation and cash sweep
              description: |-
                ## Purpose
                Debt schedules are where a buyout model earns its name: each tranche with its own interest, required amortisation and repayment priority, and excess cash sweeping down the senior debt. Building one cleanly, in order of seniority and with a cash available for debt repayment line that ties back to the cash flow, is what partners check first after returns.

                ## Milestones
                1. Each tranche modelled with opening balance, mandatory amortisation, optional repayment and closing balance.
                2. Cash available for debt repayment calculated from the cash flow statement after minimum cash.
                3. A sweep percentage input applied in order of seniority.
                4. Interest expense per tranche flowing to the income statement, with a switch for average or opening balances.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice debt schedule with at least two tranches, mandatory amortisation, a seniority-ordered sweep and interest linked to the income statement, balancing in every year."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the debt schedule layout for a senior and a junior tranche"
                - "Build cash available for debt repayment from the cash flow statement"
                - "Add mandatory amortisation and a seniority-ordered cash sweep"
                - "Link interest per tranche to the income statement and test the balance"
            - name: Revolver, minimum cash and circularity switch
              description: |-
                ## Purpose
                Interest calculated on average debt balances creates a circular reference, and a revolver that draws when cash runs short adds another. Handling both deliberately, with a minimum cash input, a revolver that draws and repays by formula and a circularity breaker switch, keeps the model stable and stops it collapsing into errors at the worst moment.

                ## Milestones
                1. A minimum cash balance input and a revolver that draws when cash would fall below it.
                2. Revolver repayment ahead of the sweep on other tranches, with a commitment fee on the undrawn amount.
                3. A circularity switch that sets interest to opening balances when turned off.
                4. The model tested by forcing a cash shortfall year and confirming the revolver draws.

                ## Notes
                Keep a copy-paste macro or switch-based breaker in the template so an error cascade can be cleared in seconds without rebuilding formulas.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A practice model whose revolver draws and repays by formula against a minimum cash input, with a working circularity switch tested in a shortfall year."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add a minimum cash input to the assumptions tab"
                - "Build revolver draws and repayments with a commitment fee"
                - "Add a circularity switch that falls back to opening balance interest"
                - "Force a shortfall year and confirm the revolver draws as expected"
            - name: Returns calculation with IRR and multiple of money
              description: |-
                ## Purpose
                Returns look simple until the cash flows are uneven: a dividend in year three, a partial exit, a closing date in the middle of a month. Building returns from dated equity cash flows using XIRR, alongside the multiple of money and a check against IRR on annual periods, means the number on the front page survives a partner asking how it was calculated.

                ## Milestones
                1. Exit enterprise value, net debt at exit and exit equity calculated from the model.
                2. Dated equity cash flows for entry, any interim distributions and exit.
                3. IRR from dated flows and multiple of money shown side by side, with an annual IRR check.
                4. Returns split between sponsor and management or rollover equity where they differ.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A returns tab showing IRR from dated cash flows, multiple of money and an annual-period check, with interim distributions handled correctly."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Build exit equity from exit enterprise value less net debt at exit"
                - "Lay out dated equity cash flows including any interim dividend"
                - "Calculate IRR with XIRR and multiple of money side by side"
                - "Check the XIRR result against an annual-period IRR"
            - name: Sensitivity tables that move correctly
              description: |-
                ## Purpose
                Committees decide on ranges, not a single base case, and the two-way table of entry against exit multiple or growth against margin is the page they stare at. Building data tables that reference the right cells, sit on the same sheet as their inputs and visibly update when the base case changes is a skill worth getting exactly right.

                ## Milestones
                1. Two-way tables for IRR against entry and exit multiple, and against growth and margin.
                2. A table for multiple of money against debt quantum and exit year.
                3. The base case value highlighted in each table and matching the returns tab exactly.
                4. Each table tested by changing one input and confirming the expected direction of movement.

                ## Notes
                Data tables need their inputs on the same sheet. Link your sensitivity drivers to the assumptions tab through a single override cell rather than referencing the inputs directly.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three working sensitivity tables whose base case cell matches the returns tab and which move in the expected direction when inputs change."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Add override cells for the inputs each table will flex"
                - "Build an IRR table of entry against exit multiple"
                - "Add growth against margin and debt against exit year tables"
                - "Change one input and confirm each table moves the expected way"
            - name: Credit statistics and covenant headroom tab
              description: |-
                ## Purpose
                Lenders read a buyout model upside down: they start with total and senior debt to earnings, interest cover and fixed charge cover, then ask how far earnings can fall before a covenant trips. A credit statistics tab with headroom against each covenant level shows whether the structure is financeable at all.

                ## Milestones
                1. Gross and net debt to earnings, interest cover and fixed charge cover calculated for each year.
                2. Covenant levels entered as inputs per test date, with headroom shown as a percentage.
                3. The earnings decline needed to breach each covenant calculated for each year.
                4. Any year with headroom below your chosen threshold flagged on the front page.

                ## Notes
                Covenant definitions in the credit agreement often adjust earnings differently from your model. Ask the deal lawyers or lenders for the definitions and note the differences.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A credit statistics tab showing yearly ratios, covenant headroom percentages and the earnings decline needed to breach, with low-headroom years flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the credit ratios lenders will ask for on this structure"
                - "Calculate each ratio for every forecast year"
                - "Enter covenant levels as inputs and calculate headroom"
                - "Flag any year where headroom falls below your threshold"
            - name: Tax lines in the buyout model
              description: |-
                ## Purpose
                Limits on interest deductibility, tax losses brought forward and the tax effect of transaction costs can each move cash flow enough to change returns. Modelling these as clearly labelled inputs, with the rules confirmed by tax advisers rather than assumed, keeps the cash tax line honest.

                ## Milestones
                1. Cash tax built from taxable profit rather than a flat rate on reported profit.
                2. An interest deductibility cap modelled as an input, with any disallowed amount carried forward.
                3. Tax losses brought forward used against taxable profit with their own schedule.
                4. Every tax input labelled with the adviser or document it came from.

                ## Notes
                Tax rules differ by country and change often. Treat every tax assumption as a question for the deal's tax advisers, never a conclusion of your own.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tax schedule with taxable profit, an interest deductibility cap and a losses schedule, each input labelled with its adviser source."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the tax questions the model needs answered by advisers"
                - "Build taxable profit separately from reported profit"
                - "Add an interest deductibility cap and losses schedule as inputs"
                - "Ask the tax team to confirm any rule changes for the year ahead @recurring(yearly)"
            - name: Returns attribution bridge
              description: |-
                ## Purpose
                Partners will ask how much of the return comes from growth, how much from a higher exit multiple and how much from paying down debt. An attribution bridge that splits the equity gain into those parts shows whether the deal depends on things the team controls or on the market being kind at exit.

                ## Milestones
                1. Equity gain split into earnings growth, multiple change and net debt reduction.
                2. The three parts summing exactly to the total equity gain, with a check cell.
                3. A chart of the bridge placed on the output page.
                4. A sentence under the chart stating which driver the case relies on most.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An attribution bridge that sums to the total equity gain by formula, charted on the output page with a one-sentence reading."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the attribution method and write it in a note on the tab"
                - "Calculate the growth, multiple and debt paydown parts"
                - "Add a check that the parts sum to the total equity gain"
                - "Chart the bridge and write one sentence under it"
            - name: Base, upside and downside cases with a scenario switch
              description: |-
                ## Purpose
                A single forecast hides the real question: what happens to the debt and the equity if the plan goes wrong. Building a scenario switch that flips the whole model between a management case, a sponsor base case and a downside, with each case's assumptions side by side, lets anyone see the range in seconds.

                ## Milestones
                1. Three or more cases defined, each with its own column of operating assumptions.
                2. A single switch cell selecting the live case for the whole model.
                3. A summary table showing returns and credit statistics under every case at once.
                4. A written one-line rationale for each downside assumption.

                ## Notes
                A downside that still returns comfortably above your hurdle is usually not a downside. Ask what a lender's stress case would look like.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model with a working scenario switch across at least three cases and a summary of returns and credit statistics for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-line description of each case before building it"
                - "Lay out each case's assumptions in side-by-side columns"
                - "Add a single switch cell that drives the live case"
                - "Build a summary table of returns and credit stats for every case"
            - name: Comparing debt structure options in the model
              description: |-
                ## Purpose
                The same company can be financed with a single unitranche, senior plus second lien, or bonds with a revolver, and each changes cash interest, amortisation and flexibility. Modelling two or three structures side by side gives the deal team a clear comparison of returns, cash headroom and risk to take to the financing advisers.

                ## Milestones
                1. Two or three financing structures defined as switchable input sets.
                2. Returns, cash interest and minimum cash headroom compared for each structure.
                3. Prepayment costs, call protection and covenant differences listed beside the numbers.
                4. A comparison page ready for the deal team and financing advisers to discuss.

                ## Notes
                The choice of structure belongs to the deal team and its financing advisers. The model's job is to make the trade-offs visible.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison page showing returns, cash interest and headroom under at least two switchable debt structures, reviewed with the deal team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define two or three financing structures as switchable input sets"
                - "Run each structure and capture returns and cash headroom"
                - "List call protection and covenant differences beside each"
                - "Walk the deal team through the comparison page"
            - name: PIK notes and preferred equity in the structure
              description: |-
                ## Purpose
                Payment-in-kind debt and preferred equity let a deal stretch further without adding cash interest, but they compound quietly and sit ahead of ordinary equity at exit. Modelling the accrual, any toggle, and the ranking in the exit waterfall shows exactly how much of the exit value they consume.

                ## Milestones
                1. PIK interest accruing to principal each period, with a cash pay toggle input.
                2. Preferred equity accruing its coupon and ranking ahead of ordinary equity at exit.
                3. An exit waterfall showing how exit equity splits across preferred and ordinary holders.
                4. Ordinary equity returns compared with and without the instrument.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model showing PIK accrual, preferred equity accrual and an exit waterfall, with ordinary equity returns compared with and without each instrument."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add a PIK tranche with accrual and a cash pay toggle"
                - "Model preferred equity with a compounding coupon"
                - "Build an exit waterfall ranking preferred ahead of ordinary equity"
                - "Compare ordinary equity returns with and without each instrument"
            - name: Management rollover and incentive dilution in returns
              description: |-
                ## Purpose
                Sponsor returns are what is left after management's rollover and incentive pool take their share of exit equity, and a model that ignores dilution overstates the sponsor's IRR. Adding rollover equity and an incentive pool that dilutes at exit, using the plan terms as supplied, gives a sponsor return you can stand behind.

                ## Milestones
                1. Management rollover modelled in sources and uses and in the exit equity split.
                2. An incentive pool modelled as an input percentage of exit equity, with any hurdle supplied by the plan.
                3. Sponsor IRR and multiple of money shown before and after dilution.
                4. The plan terms used in the model listed with their source document.

                ## Notes
                Designing the incentive plan is a separate piece of work with lawyers and tax advisers. Model the terms you are given and flag any you had to assume.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A returns tab showing sponsor IRR and multiple before and after management dilution, with every plan term sourced or flagged as assumed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the rollover and incentive plan terms you need to model"
                - "Add rollover equity to sources and uses and the exit split"
                - "Model the incentive pool as a share of exit equity"
                - "Show sponsor returns before and after dilution side by side"
            - name: Working capital and capex assumptions grounded in history
              description: |-
                ## Purpose
                Cash conversion drives debt paydown, and a model that quietly improves working capital days or trims capex below maintenance levels manufactures returns from nothing. Tying both to the historical spread, with any change justified in a note, keeps the cash flow line defensible.

                ## Milestones
                1. Receivable, inventory and payable days calculated for every historical year.
                2. Forecast days set with a note explaining any move away from the historical average.
                3. Capex split between maintenance and growth, with maintenance tied to depreciation or asset base.
                4. Cash conversion each year compared with history on the output page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Forecast working capital days and capex tied to history, with a written justification for every departure and a cash conversion comparison on the output page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate working capital days for each historical year"
                - "Set forecast days and note the reason for any change"
                - "Split capex into maintenance and growth with a basis for each"
                - "Compare forecast cash conversion with the historical years"
            - name: Fees and financing cost treatment
              description: |-
                ## Purpose
                Transaction fees, financing fees and original issue discount each take different routes through the model: some are expensed, some capitalised and amortised, some reduce the debt's carrying value. Getting the treatment right, with the accounting confirmed by the finance team or auditors, stops a quiet mismatch between profit, cash and the balance sheet.

                ## Milestones
                1. Each fee type listed with its accounting treatment confirmed by the finance team or auditors.
                2. Capitalised financing fees amortised over the debt's life through interest expense.
                3. Original issue discount reflected in debt proceeds and accreted where relevant.
                4. Cash, profit and balance sheet effects reconciled for year one.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fee schedule with confirmed treatment for each fee type, amortisation through interest and a reconciled year one view across all three statements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every fee in the transaction with its proposed treatment"
                - "Ask the finance team or auditors to confirm each treatment"
                - "Build the financing fee amortisation schedule"
                - "Reconcile year one profit, cash and balance sheet for the fees"
            - name: Buy-side modelling test preparation
              description: |-
                ## Purpose
                Most private equity interview processes include a modelling test, from a one-hour paper exercise to a three-hour build with a written recommendation, and candidates who have rehearsed under exam conditions perform noticeably better. A dated preparation plan with timed mocks lets a student or banker arrive with a method, not just hope.

                ## Milestones
                1. The likely test formats for your target firms noted from headhunters or past candidates.
                2. Six timed mock tests completed, covering a one-hour, two-hour and three-hour format.
                3. A personal build order for a three-hour test written down and practised.
                4. A one-page recommendation format ready for tests that ask for a written view.

                ## Notes
                Ask the headhunter what format and template rules apply. Some firms provide a blank file and forbid templates, others hand over a partly built model.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Six timed mock tests completed and logged across three formats before the first real test date, with a written build order."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask your headhunter what test format each target firm uses"
                - "Write the order you will build tabs in during a three-hour test"
                - "Sit one timed mock test under exam conditions @recurring(weekly:sun)"
                - "Draft a one-page recommendation template for written tests"
            - name: Take-home case study with written recommendation
              description: |-
                ## Purpose
                Take-home cases give a CIM extract and a few days, and the model is only half the grade: the reviewers want a clear investment view, the key risks and what you would diligence next. Completing one full practice case to that standard shows you can turn numbers into a recommendation.

                ## Milestones
                1. A public or course case chosen and the information pack read in full.
                2. A complete LBO model built with base and downside cases.
                3. A two-page written recommendation with returns, key risks and diligence questions.
                4. The case reviewed by someone who has sat such tests, with their feedback noted.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A completed practice case with a full model and a two-page written recommendation, reviewed by an experienced reader with feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose a practice case and read the information pack end to end"
                - "Build the full model with a base and downside case"
                - "Write the two-page recommendation with risks and diligence questions"
                - "Ask someone who has sat take-home cases to review it"
            - name: Committee-ready model freeze
              description: |-
                ## Purpose
                Before investment committee, the model must stop changing long enough for every number in the memo and slides to tie back to one frozen version. Freezing the model on a fixed date, tying out every figure and recording sign-off means nobody is arguing about which version is right in the committee room.

                ## Milestones
                1. A freeze date agreed with the deal team, with a cut-off for new inputs.
                2. Every number in the committee papers traced to a cell in the frozen version.
                3. The pre-send checklist completed and signed by a second reviewer.
                4. The frozen file saved read-only with its version number recorded in the papers.

                ## Notes
                Start from the **Operational checklist** template. Changes after the freeze go into a separate file and a written note, not into the frozen version.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A read-only frozen model exists, every figure in the committee papers ties to it, and a second reviewer has signed the checklist."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the freeze date and input cut-off with the deal team"
                - "Trace every committee paper figure back to a model cell"
                - "Have a second reviewer run and sign the pre-send checklist"
                - "Save the frozen version read-only and record its number"
            - name: Lender case delivered to debt providers
              description: |-
                ## Purpose
                Lenders want their own version of the model: a more conservative operating case, their covenant definitions and none of the sponsor's private assumptions about exit. Preparing a clean lender case on a fixed date, stripped of internal tabs, gives debt providers what they need without handing over your returns thinking.

                ## Milestones
                1. The lender case assumptions agreed with the deal team and financing advisers.
                2. Sponsor returns, exit and internal scenario tabs removed from the lender version.
                3. Credit statistics and covenant headroom presented in the lenders' format.
                4. The lender model sent with a version number and a short guide to its tabs.

                ## Notes
                Check the confidentiality terms before sharing anything. The deal team, not the modeller, decides what leaves the firm.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A lender model with internal tabs removed, credit statistics in the lenders' format and a tab guide, approved by the deal team before sending."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the lender case assumptions with the deal team"
                - "Copy the model and strip sponsor returns and internal tabs"
                - "Lay out credit statistics in the lenders' requested format"
                - "Write a one-page guide to the lender model's tabs"
            - name: Price capacity model for a final round bid
              description: |-
                ## Purpose
                In a final round, the question changes from what does the deal return to what is the most we can pay and still meet our return threshold. Solving the model backwards for maximum entry price at the target IRR and multiple, under each case, gives the partners a clear ceiling before they decide on the number.

                ## Milestones
                1. Target IRR and multiple of money thresholds confirmed with the partners.
                2. Maximum entry price solved for each threshold under base and downside cases.
                3. A table of price against returns across the likely bid range.
                4. The price capacity summary delivered to the deal team before the bid meeting.

                ## Notes
                Use goal seek or a solved formula, never manual trial and error, and record the solved values so the result is reproducible.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A price capacity summary showing maximum entry price at each agreed return threshold under base and downside cases, delivered before the bid meeting."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the return thresholds the partners want to test"
                - "Solve for maximum entry price under each case and threshold"
                - "Build a price against returns table across the bid range"
                - "Send the price capacity summary to the deal team"
            - name: Post-close rebase to the actual closing balance sheet
              description: |-
                ## Purpose
                Deal models signed off for completion rest on an estimated closing date, estimated net debt and estimated fees, and the actual figures always differ. Rebasing to the completion accounts and final funds flow gives the portfolio team a starting model that matches reality, and shows how much the entry assumptions moved.

                ## Milestones
                1. Actual closing date, final funds flow and completion figures collected.
                2. The sources and uses and opening balance sheet updated to actuals.
                3. Entry returns re-run and the movement from the committee case explained.
                4. The rebased model handed to the portfolio team with a note of what changed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A rebased model with actual funds flow and completion figures, and a written explanation of how entry returns moved from the committee case."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request the final funds flow and completion figures"
                - "Update sources and uses and the opening balance sheet to actuals"
                - "Re-run returns and explain the movement from the committee case"
                - "Hand the rebased model to the portfolio team with a change note"
            - name: Student's first LBO from a public take-private
              description: |-
                ## Purpose
                Students rarely see real deal data, but take-private transactions publish a surprising amount: offer price, financing commitments, the target's audited accounts and sometimes the bidder's own projections. Rebuilding one from public documents is the best practice case a student can find, and a strong talking point in interviews.

                ## Milestones
                1. A completed public take-private chosen and its offer documents and accounts saved.
                2. Sources and uses rebuilt from the published financing and offer terms.
                3. A simple operating case and debt schedule built from the target's historical accounts.
                4. A one-page summary of the implied returns and what you learned, ready for interviews.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full practice LBO of a real public take-private, built only from public documents, with a one-page summary ready for interviews."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick a completed take-private with published offer documents"
                - "Save the offer document, financing terms and three years of accounts"
                - "Spend one study session a week on the build until it balances @recurring(weekly:thu)"
                - "Write a one-page summary of implied returns and lessons"
            - name: Moving from banking models to buy-side models
              description: |-
                ## Purpose
                Bankers arriving on the buy side often find their habits pull the wrong way: models built to support a valuation rather than test an investment, lender cases taken at face value, no downside. Listing the differences and adjusting deliberately in the first months helps a former banker model like an investor rather than an adviser.

                ## Milestones
                1. A written list of differences between sell-side and buy-side modelling priorities.
                2. Your firm's house model and conventions studied tab by tab.
                3. Two habits from banking you are dropping and two you are keeping, written down.
                4. Feedback from a senior colleague on your first buy-side model recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of banking to buy-side modelling differences, plus recorded feedback from a senior colleague on your first buy-side model."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the main differences between sell-side and buy-side models"
                - "Study the house model tab by tab and note its conventions"
                - "Choose two banking habits to drop and two to keep"
                - "Ask a senior colleague for feedback on your first buy-side model"
            - name: Supervising an analyst's model build
              description: |-
                ## Purpose
                Once you are reviewing rather than building, the job becomes setting the analyst up to succeed: a clear brief, the right template, check-ins before problems compound and review comments that teach. A repeatable way of supervising a build saves both of you late nights.

                ## Milestones
                1. A written brief template covering scope, cases, deadlines and the outputs needed.
                2. Twice-weekly check-ins scheduled for the length of the build.
                3. Review comments given in writing, grouped as errors, structure and presentation.
                4. A short debrief after each build on what to do differently next time.

                ## Notes
                Start from the **Development plan** template to track the analyst's modelling skills over several builds.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each supervised build has a written brief, scheduled check-ins, grouped written review comments and a recorded debrief."
                cadence: rolling
              tasks:
                - "Write a one-page brief template for model builds"
                - "Hold a short check-in with the analyst during each build @recurring(weekly:tue)"
                - "Group review comments as errors, structure and presentation"
                - "Hold a debrief after each build and note what to change"
            - name: Bolting an add-on acquisition into the platform model
              description: |-
                ## Purpose
                When a platform company buys a smaller business, the existing model must absorb the add-on's earnings, the new debt or equity used to fund it and the integration costs, without breaking the base case. A clean add-on module with its own sources and uses and a pro forma combination keeps the platform's returns story traceable.

                ## Milestones
                1. An add-on module with its own purchase price, sources and uses and closing date.
                2. Add-on earnings, synergies and integration costs entered as separate, switchable lines.
                3. Pro forma combined credit statistics and returns compared with the platform alone.
                4. A switch that removes the add-on and returns the model to the platform case.

                ## Notes
                Show synergies on their own line with their own switch. Lenders and committees treat them very differently from acquired earnings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An add-on module with its own sources and uses, switchable synergies and integration lines and a pro forma comparison against the platform case."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build an add-on tab with its own sources and uses"
                - "Enter add-on earnings, synergies and integration costs separately"
                - "Combine pro forma and compare returns with the platform alone"
                - "Add a switch that removes the add-on entirely"
            - name: Small company LBO with seller note and earn-out
              description: |-
                ## Purpose
                Smaller buyouts, such as those done by searchers and independent sponsors, are often funded with seller notes, earn-outs and lender structures that look nothing like large-cap financing. Modelling a deferred, subordinated seller note and an earn-out tied to future earnings shows who bears the risk and what the equity really returns.

                ## Milestones
                1. A seller note with its rate, deferral and subordination to senior debt modelled.
                2. An earn-out paid by formula against an earnings target, with its own switch.
                3. Returns shown with the earn-out paid in full, partly and not at all.
                4. Debt service cover tested in the year the earn-out falls due.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A small company model with a subordinated seller note, a formula-driven earn-out and returns shown under full, partial and nil earn-out payment."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the seller note and earn-out terms the model must capture"
                - "Model the seller note with deferral and subordination"
                - "Build the earn-out against an earnings target with a switch"
                - "Test debt service cover in the earn-out payment year"
            - name: Return-to-modelling refresh plan
              description: |-
                ## Purpose
                After parental leave, an MBA or a stint in an operating role, modelling speed fades faster than understanding does. A twelve-week refresh plan, with weekly practice and a rebuild at the end, gets a returning professional or career changer back to test standard before the first live deal lands.

                ## Milestones
                1. A twelve-week plan with one modelling topic per week and a final rebuild.
                2. A baseline timed build at week one to measure where you start.
                3. A weekly practice session completed for at least ten of the twelve weeks.
                4. A final timed rebuild at least a third faster than the baseline.

                ## Notes
                Start from the **Development plan** template. Fit sessions around caring duties or classes rather than aiming for long blocks you will not keep.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twelve-week refresh plan completed with at least ten weekly sessions logged and a final rebuild a third faster than the baseline."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write a twelve-week topic plan with a final rebuild"
                - "Do a timed baseline build and log the time"
                - "Complete one practice session on that week's topic @recurring(weekly:sun)"
                - "Do the final timed rebuild and compare with the baseline"
            - name: Dividend recapitalisation and refinancing analysis
              description: |-
                ## Purpose
                Two or three years into a hold, a company that has paid down debt and grown earnings may be able to refinance and return cash to investors. Modelling the recap inside the existing model, with the new debt, the distribution, the change in interest and the effect on IRR and multiple, shows whether it improves returns enough to justify the extra risk.

                ## Milestones
                1. Current debt balances, earnings and headroom updated in the existing model.
                2. A recap switch adding new debt, repaying old debt and paying a distribution.
                3. IRR and multiple of money shown with and without the recap.
                4. Post-recap credit statistics and downside case headroom presented together.

                ## Notes
                A recap usually raises IRR more than multiple of money. Show both, and show the downside, so the trade-off is honest.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recap analysis showing IRR, multiple of money and downside headroom with and without the recap, ready for the deal team's discussion."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Update the model to current debt balances and earnings"
                - "Add a recap switch with new debt, refinancing and distribution"
                - "Compare returns with and without the recap"
                - "Show post-recap downside headroom beside the returns"
            - name: Carve-out LBO with standalone cost build
              description: |-
                ## Purpose
                Buying a division from a larger group means modelling a business that has never existed alone: shared services, transitional service agreements and one-off separation costs. A standalone cost build replacing group allocations, with the transitional period modelled explicitly, shows the earnings the new owner will really have.

                ## Milestones
                1. Group allocations listed and replaced by an estimated standalone cost for each function.
                2. Transitional service charges modelled for their agreed period, then replaced by standalone costs.
                3. One-off separation costs and capex shown separately from the run-rate.
                4. A bridge from the seller's carve-out earnings to your standalone earnings.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A carve-out model with a function-by-function standalone cost build, a modelled transitional period and a bridge from seller to standalone earnings."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every group allocation in the carve-out financials"
                - "Estimate a standalone cost for each function with its source"
                - "Model the transitional service period and the switch to standalone"
                - "Build the bridge from seller to standalone earnings"
            - name: Take-private model with public company mechanics
              description: |-
                ## Purpose
                Listed targets add mechanics a private deal never has: an offer premium to an undisturbed share price, fully diluted shares including options and convertibles, and debt that may have change of control terms. Building these correctly matters, because a wrong share count changes the price paid for every share.

                ## Milestones
                1. Undisturbed share price and premium inputs with implied offer price and equity value.
                2. Fully diluted shares calculated using the treasury method for options and terms for convertibles.
                3. Existing debt reviewed for change of control repayment and modelled accordingly.
                4. Offer price sensitivity against returns across a range of premiums.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A take-private model with a premium-driven offer price, a fully diluted share count from public filings and a premium against returns sensitivity."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the latest share count, options and convertibles from filings"
                - "Build the fully diluted share count with the treasury method"
                - "Add premium inputs and calculate offer price and equity value"
                - "Build a premium against returns sensitivity table"
            - name: Cross-border LBO with currency in the model
              description: |-
                ## Purpose
                When the company earns in one currency, borrows in another and reports to a fund in a third, exchange rate moves can wipe out operating gains. Modelling each cash flow in its own currency, converting at clearly labelled rate inputs and running a currency sensitivity shows how exposed the equity really is.

                ## Milestones
                1. Revenue, costs and each debt tranche tagged with their currency.
                2. Exchange rate inputs per year on the assumptions tab, with source noted.
                3. Returns calculated in the fund's currency, with local currency returns alongside.
                4. A sensitivity of fund currency IRR to exchange rate moves at exit.

                ## Notes
                Hedging decisions belong to the deal team and treasury advisers. The model shows the exposure; it does not choose the hedge.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A model with currency-tagged cash flows, sourced exchange rate inputs and a fund currency IRR sensitivity to exit exchange rates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Tag each revenue, cost and debt line with its currency"
                - "Add yearly exchange rate inputs with sources"
                - "Show returns in fund and local currency side by side"
                - "Build an IRR sensitivity to the exit exchange rate"
            - name: Independent audit of a complex deal model
              description: |-
                ## Purpose
                On the largest or most complicated deals, an outside model audit or a structured second review catches errors the deal team has become blind to. Preparing the model for audit, answering the reviewer's queries and closing every finding before committee turns a stressful week into a controlled one.

                ## Milestones
                1. The scope of the audit or second review agreed, with the tabs and outputs in scope listed.
                2. A model map, assumptions source list and change log supplied to the reviewer.
                3. Every finding logged with a response and the fix or a reasoned rejection.
                4. A closing note confirming all findings resolved before the committee freeze.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A findings log with every audit or review point answered and resolved, closed with a written note before the committee freeze date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the review scope and list the tabs in scope"
                - "Send the reviewer the model map, source list and change log"
                - "Log each finding with a response and the fix"
                - "Write the closing note once every finding is resolved"
---

# LBO Modelling

This area is for anyone who builds leveraged buyout models, from a student preparing for a modelling test to an associate turning a live deal model at midnight before committee. It starts with the foundations (a clean workspace, formatting conventions, the mechanics of how buyout returns are made, a paper LBO, the transaction assumptions and sources and uses), moves through the routines that keep models honest, the core build skills from the operating case to the debt schedule, returns and sensitivity tables, then the structural choices, the dated moments such as tests, lender cases and the committee freeze, situations from student to career changer, and finally the specialist builds: take-privates, carve-outs, recaps and cross-border deals.

What repeats is a weekly timed practice drill and paper LBO, a Friday version archive, a monthly refresh of rates and debt terms, monthly error log and peer model reviews, a quarterly rebuild from a blank sheet and a yearly template refresh. The Reading queue, Training program, Operational checklist and Development plan templates pair with the projects that name them. Every model here is for your own practice or your own deal work; keep a firm's confidential figures inside the firm's systems. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
