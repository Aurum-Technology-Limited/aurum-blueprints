---
id: investment-banking.merger-models-and-accretion-dilution
name: Merger Models and Accretion Dilution
description: "A merger model you can build, defend and turn overnight: share counts, offer bridge, financing mix, purchase accounting, synergies, pro forma EPS, contribution and ownership, plus the checks and specialist cases."
category: business
version: 1.0.0
tags: [investment-banking, merger-models-and-accretion-dilution, knowledge-worker, m-and-a, accretion-dilution, pro-forma-eps, synergies, purchase-accounting]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - metrics-log
    - operational-checklist
    - meeting-notes
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Merger Models and Accretion Dilution
          description: "Building merger models: purchase price and financing mix, synergies, pro forma EPS accretion or dilution, contribution analysis and ownership."
          projects:
            - name: One-page map of how a merger model flows
              description: |-
                ## Purpose
                Most first merger models break because the builder copies a template without knowing why each block feeds the next. Drawing the flow once on a single page, from offer price and share counts through financing, purchase accounting and synergies to pro forma net income and EPS, means you can rebuild any model from memory and spot a broken link in seconds.

                ## Milestones
                1. A one-page diagram showing every block from offer price to pro forma EPS, with arrows for each link.
                2. Each arrow labelled with the line items it carries, such as foregone interest on cash or new shares issued.
                3. The diagram tested by walking a colleague through it in under ten minutes.
                4. A copy pinned beside your desk or saved at the front of your template file.

                ## Notes
                Draw it by hand first. The blocks you cannot connect without looking are the ones to study next.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A single-page flow diagram of the merger model exists and you can explain every link in it to a colleague without notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the blocks of a merger model on one sheet of paper from memory"
                - "Compare your sketch with a firm merger model and mark what you missed"
                - "Label each arrow with the line items it carries between blocks"
                - "Walk a fellow analyst through the finished map and note their questions"
            - name: Personal merger model template built from a blank sheet
              description: |-
                ## Purpose
                Firm templates are dense and often carry fixes from old deals that nobody remembers. Building your own compact merger model from a blank workbook, using two real listed companies, teaches the mechanics properly and gives you a clean tool for quick pitch analysis where the full firm model would be slower.

                ## Milestones
                1. A workbook with separate tabs for inputs, standalone forecasts, transaction assumptions, purchase accounting and pro forma output.
                2. Year one and year two pro forma EPS calculated for a real pair of listed companies.
                3. Accretion or dilution shown at zero synergies and at the assumed level of synergies.
                4. The template's results matched to within a cent per share against the firm model for the same inputs.

                ## Notes
                Keep the template small enough to print on four pages. If it needs more, it has stopped being the quick tool you built it for.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A self-built merger model template produces year one and year two pro forma EPS that match the firm model to within one cent for the same inputs."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick two listed companies in one sector as your practice acquirer and target"
                - "Lay out the input, forecast, transaction and output tabs in a blank workbook"
                - "Build the pro forma net income and share count rows for two years"
                - "Run the same inputs through the firm model and reconcile any gap"
            - name: Aligned standalone forecasts for acquirer and target
              description: |-
                ## Purpose
                Pro forma EPS is only as good as the two standalone forecasts underneath it, and those usually come from different sources, fiscal years and accounting bases. Calendarising both companies to the acquirer's fiscal year, choosing consensus or management cases deliberately and cleaning out one-off items stops the model reporting accretion that is really a timing or definition mismatch.

                ## Milestones
                1. Both companies' forecasts placed on the acquirer's fiscal year end, with the calendarisation weighting shown.
                2. A written choice of consensus, management or bank case for each company, with the date of the data.
                3. Non-recurring items removed consistently from both net income lines.
                4. Standalone EPS in the model matching the chosen source for each company and year.

                ## Notes
                If the target forecast is management's and the acquirer's is consensus, say so on the output page. Seniors will ask.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both standalone forecasts sit on the acquirer's fiscal year with their source and date stated, and standalone EPS ties to that source for every year shown."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note each company's fiscal year end and the months that need shifting"
                - "Pull consensus net income and EPS for both companies with today's date"
                - "Calendarise the target forecast to the acquirer's fiscal year"
                - "List every one-off item removed and apply the same rule to both companies"
            - name: Fully diluted share counts for both companies
              description: |-
                ## Purpose
                Get the share count wrong and EPS, offer value and ownership all move at once; it is the error seniors find fastest. Building the diluted count from the latest filing, with options under the treasury stock method at the offer price for the target and at the current price for the acquirer, plus restricted stock and any convertibles, gives you a number you can defend line by line.

                ## Milestones
                1. Basic shares for each company taken from the cover page or latest filing, with the date.
                2. Options and warrants tranched by strike price and run through the treasury stock method.
                3. Restricted stock units, performance shares and convertibles treated according to their terms, with the treatment noted.
                4. A short footnote for each count citing the document and page it came from.

                ## Notes
                Target dilution must be calculated at the offer price, not the current price, because in-the-money options change as the premium rises. Check whether unvested awards accelerate on a change of control.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Diluted share counts for both companies are built from the latest filings with every security treated and footnoted, and the target count updates with the offer price."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find basic shares outstanding on each company's latest filing cover page"
                - "Copy the option tranches and strike prices from the equity compensation note"
                - "Link the target's treasury stock calculation to the offer price cell"
                - "Check the convertible terms for conversion price and settlement method"
            - name: Offer price, premium and enterprise value bridge
              description: |-
                ## Purpose
                Clients and boards talk about the offer in several ways at once: price per share, premium to the undisturbed price, equity value and enterprise value. A single bridge that moves cleanly from one to the other, with net debt, minority interests, preferred stock and investments defined from the balance sheet, keeps every page of the book quoting the same deal.

                ## Milestones
                1. Premiums shown against the undisturbed price, the 30-day average and the 52-week high, with the undisturbed date stated.
                2. Equity value calculated from the offer price and the diluted share count at that price.
                3. A bridge to enterprise value with each adjustment sourced to the latest balance sheet.
                4. Implied multiples of revenue and EBITDA on the same basis as the comparables in the book.

                ## Notes
                Agree the undisturbed date with the deal team early, especially if there were rumours or a leak. Every premium in the book depends on it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One bridge links offer price, premiums, equity value and enterprise value with every adjustment sourced, and all pages in the book quote figures from it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the undisturbed share price date with the associate"
                - "Calculate premiums to the undisturbed, 30-day average and 52-week high prices"
                - "Build the equity to enterprise value bridge from the latest balance sheet"
                - "Check implied multiples use the same EBITDA definition as the comps page"
            - name: Sources and uses table with fees and refinancing
              description: |-
                ## Purpose
                The sources and uses table is where the deal's money has to balance: equity purchase price, refinanced target debt, fees and any cash left on the balance sheet against cash, new borrowing and new shares. Getting it right first means the financing assumptions downstream rest on the real amount that has to be raised.

                ## Milestones
                1. Uses listing equity purchase price, target debt refinanced, advisory fees, financing fees and any minimum cash.
                2. Sources listing acquirer cash, new debt by tranche and new shares issued.
                3. Total sources equal total uses, with a visible check cell.
                4. Each fee estimate labelled as a placeholder or as agreed, with who supplied it.

                ## Notes
                Ask whether the target's debt must be repaid on a change of control before assuming it rolls over. The answer changes the size of the new borrowing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sources and uses table balances to zero with every line labelled by source, and it drives the financing amounts in the model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every use of funds from purchase price to financing fees"
                - "Check the target's debt documents for change of control repayment clauses"
                - "Enter cash, new debt and new shares as sources linked to the financing tab"
                - "Add a check cell that flags any difference between sources and uses"
            - name: Financing cost assumptions for cash, debt and stock
              description: |-
                ## Purpose
                Whether a deal looks accretive often comes down to three numbers: the interest the acquirer gives up on cash it spends, the rate on new debt and the price at which new shares are issued. Writing down where each comes from, after tax, means a senior asking why the deal turned dilutive gets an answer in one sentence.

                ## Milestones
                1. An after-tax rate on foregone cash interest, sourced to the acquirer's recent interest income or current deposit rates.
                2. A rate for each new debt tranche, agreed with the leveraged finance or capital markets team.
                3. A share issue price set at the current price, with any assumed discount stated.
                4. The pre-tax cost of each form of consideration compared with the target's earnings yield.

                ## Notes
                A quick rule worth knowing: if the after-tax cost of the consideration is lower than the target's earnings yield at the offer price, the deal tends to be accretive before synergies.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each financing cost in the model has a written source and date, and the earnings yield comparison for cash, debt and stock appears on the assumptions tab."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the debt markets team for indicative rates on each new tranche"
                - "Work out the acquirer's current pre-tax return on its cash balance"
                - "Calculate the target's earnings yield at the offer price"
                - "Write the cost of cash, debt and stock beside the yield on one row"
            - name: Purchase price allocation and goodwill estimate
              description: |-
                ## Purpose
                Purchase accounting decides how much new amortisation and depreciation the acquirer will book, which can turn an accretive deal dilutive on a reported basis. A preliminary allocation that writes up identifiable intangibles and fixed assets, sets up the deferred tax liability and leaves goodwill as the residual gives seniors a defensible estimate long before the accountants run the formal exercise.

                ## Milestones
                1. The target's tangible book value written off and replaced by the allocated purchase price.
                2. Intangible and fixed asset write-ups estimated with useful lives, citing comparable deals or adviser input.
                3. A deferred tax liability on the write-ups calculated at the right tax rate.
                4. Goodwill shown as the residual, with incremental annual amortisation and depreciation flowing to pro forma net income.

                ## Notes
                Label the allocation as illustrative on every page. The final numbers come from valuation specialists after closing and can differ materially.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A preliminary purchase price allocation shows write-ups, useful lives, the deferred tax liability and goodwill, and its new amortisation feeds pro forma net income."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the target's book equity and existing goodwill from the latest balance sheet"
                - "Find intangible write-ups as a share of price in three recent deals in the sector"
                - "Calculate the deferred tax liability on the asset write-ups"
                - "Link the new annual amortisation into the pro forma income statement"
            - name: Year one and year two pro forma EPS build
              description: |-
                ## Purpose
                The accretion or dilution figure is the headline number a CEO remembers, so the build behind it has to be transparent. Combining the two net incomes, adding after-tax synergies, subtracting foregone interest, new interest and new amortisation, then dividing by the combined share count for two full years, gives a page a director can follow line by line.

                ## Milestones
                1. A pro forma net income walk with each adjustment on its own labelled row, after tax.
                2. Pro forma share count equal to acquirer diluted shares plus new shares issued.
                3. Accretion or dilution in currency per share and as a percentage for years one and two.
                4. Results shown both before and after synergies.

                ## Notes
                Use full years for the headline numbers and state whether year one assumes a mid-year close. A stub year flatters or punishes the result depending on timing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-year pro forma EPS walk shows every after-tax adjustment on its own row and reports accretion or dilution in currency and percent, with and without synergies."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every adjustment between combined net income and pro forma net income"
                - "Tax effect each adjustment at the rate agreed for the deal"
                - "Add new shares issued to the acquirer's diluted count"
                - "Show accretion or dilution with and without synergies for both years"
            - name: Assumptions log with a source for every input
              description: |-
                ## Purpose
                Live merger models gather dozens of hard-coded inputs over a few weeks, and by the board meeting nobody remembers which tax rate came from the client and which was a placeholder. A log that records each input, its source, its date and who confirmed it turns the inevitable question of where a number came from into a ten-second lookup.

                ## Milestones
                1. One tab listing every hard-coded input with its value, source, date and confirmer.
                2. Placeholder inputs flagged in a single colour so they cannot be missed.
                3. A monthly review clearing stale or unconfirmed entries.
                4. The log sent with the model whenever it leaves the deal team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hard-coded input in the live merger model appears in the log with a source and date, and no placeholder remains unflagged."
                cadence: rolling
              tasks:
                - "Add an assumptions log tab to the current merger model"
                - "Enter every hard-coded input with its source and date"
                - "Colour every placeholder input so it stands out on print"
                - "Review the log and chase unconfirmed inputs @recurring(monthly:5)"
            - name: Weekly market data refresh for live merger models
              description: |-
                ## Purpose
                Share prices, consensus estimates and exchange rates move every week, and an accretion figure built on last month's prices can be wrong by the time it reaches the client. A fixed weekly refresh of every live merger model keeps the issue price, premium and ownership split current without a scramble the night before a meeting.

                ## Milestones
                1. A list of live merger models with the market inputs each one uses.
                2. A Monday refresh of share prices and the undisturbed price check.
                3. A Thursday consensus check against the latest broker estimates.
                4. Each refresh dated on the model cover page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live merger model shows a market data date within the last seven days on its cover page."
                cadence: rolling
              tasks:
                - "List each live merger model and the market inputs it depends on"
                - "Refresh share prices and premiums in every live model @recurring(weekly:mon)"
                - "Check consensus EPS for both companies against the model @recurring(weekly:thu)"
                - "Date stamp the cover page after each refresh"
            - name: Quarterly earnings rerun of the merger model
              description: |-
                ## Purpose
                Each earnings release changes the latest balance sheet, share count and guidance, and consensus shifts a week later. Rerunning the model on a set routine after each earnings release, and writing a short note on what moved the accretion figure, means the team never presents numbers built on a superseded quarter.

                ## Milestones
                1. An earnings calendar for both companies saved in the model folder.
                2. Balance sheet, net debt and share counts updated within two days of each release.
                3. A one-paragraph note explaining any change in accretion of more than half a percentage point.
                4. The updated model and note sent to the associate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Within two working days of each earnings release the model carries the new quarter's balance sheet and share counts, with a written note on what moved."
                cadence: cyclic
              tasks:
                - "Save both companies' next earnings dates in the model folder"
                - "Update net debt and share counts from the new quarterly filing @recurring(quarterly)"
                - "Check new guidance against the forecast case and flag any gap @recurring(quarterly)"
                - "Write a one-paragraph note on what moved the accretion figure"
            - name: Model version control and change log
              description: |-
                ## Purpose
                On a live deal three people may touch the merger model in a day, and the version sent to the client must be the one the director approved. A naming convention, a change log row for every edit and a Friday archive of superseded files make it possible to say exactly what changed between Tuesday's pages and Thursday's.

                ## Milestones
                1. A file naming convention with date, time and initials agreed with the team.
                2. A change log tab with one row per edit, describing what changed and why.
                3. Superseded versions moved to an archive folder every Friday.
                4. Every version sent outside the team recorded with its recipient.

                ## Notes
                Never send a file with a name ending in final. There is always a later one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model version on the deal follows the naming convention, has change log entries and can be matched to what was sent to whom."
                cadence: rolling
              tasks:
                - "Agree a file naming convention with the deal team today"
                - "Add a change log tab and record the next edit in it"
                - "Move superseded model versions to the archive folder @recurring(weekly:fri)"
                - "Delete stray local copies and confirm the shared folder is current @recurring(monthly:3)"
            - name: Debt pricing assumptions refresh
              description: |-
                ## Purpose
                New debt rates in a merger model go stale quickly when base rates and credit spreads move, and a rate set three months ago can swing the accretion figure by a percentage point. A monthly check with the debt markets team on indicative pricing for the acquirer's likely rating keeps pitch and live models on current numbers.

                ## Milestones
                1. The base rate and spread assumptions in each live model listed with their dates.
                2. A monthly indicative pricing check with the debt markets team or a recent comparable issue.
                3. Models updated where the all-in rate moved by more than a quarter point.
                4. A note of the change sent to the deal teams affected.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live merger model carries a debt rate assumption dated within the last 35 days, with its source noted."
                cadence: rolling
              tasks:
                - "List the base rate and spread in each live model with their dates"
                - "Ask the debt markets team for indicative pricing by rating @recurring(monthly:12)"
                - "Update any model where the all-in rate moved by a quarter point or more"
                - "Tell the deal teams affected what changed and by how much"
            - name: Benchmark library of announced deal synergies
              description: |-
                ## Purpose
                Clients asking whether the synergies in the model are realistic want to see what similar deals announced and later delivered. Keeping a small library of cost and revenue synergies from deals in your sector, as a share of the target's cost base and revenue, gives every model a sanity check against the market.

                ## Milestones
                1. A table of at least 15 announced deals with stated cost and revenue synergies and the timeframe given.
                2. Synergies expressed as a percentage of target revenue and of combined operating costs.
                3. Later delivery updates recorded where companies reported them.
                4. One new deal added each month.

                ## Notes
                Start from the **Metrics log** template. Announced figures are targets, so record delivered figures beside them where you can find them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A benchmark library of at least 15 sector deals shows announced and, where available, delivered synergies as a share of target revenue and costs."
                cadence: rolling
              tasks:
                - "Choose ten announced deals in your sector from the last five years"
                - "Record each deal's stated cost and revenue synergies and timeframe"
                - "Convert synergies to a share of target revenue and combined costs"
                - "Add one newly announced deal to the library @recurring(monthly:20)"
            - name: Personal error log for merger models
              description: |-
                ## Purpose
                Merger model mistakes repeat in the same few ways: target options run at the current price, synergies not tax effected, foregone interest pre-tax, new shares missing from year two. Logging every error a senior catches, with its cause, shows you which checks your own routine is missing and stops the third repeat of the same comment.

                ## Milestones
                1. A log with columns for date, deal, error, how it was caught and the check that would have caught it.
                2. Every senior markup on a merger model reviewed for errors and logged.
                3. A monthly review turning repeated errors into a new personal check.
                4. Fewer repeated errors in the log quarter on quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An error log is kept for every merger model you build, and any error logged twice has a matching check added to your routine."
                cadence: rolling
              tasks:
                - "Create the error log with date, error, cause and missing check columns"
                - "Log every error from the last two merger model markups"
                - "Review the log and add a check for any repeated error @recurring(monthly:27)"
            - name: Merger-specific sanity checks before every send
              description: |-
                ## Purpose
                General model checks catch broken links, but merger models fail in their own ways: ownership that does not add to 100 percent, negative goodwill nobody noticed, accretion at zero premium that is not explained. A short list of merger-specific tests run before every send catches the errors that make a director lose confidence in the whole book.

                ## Milestones
                1. A written list of ten merger-specific checks, such as ownership summing to 100 percent and zero-premium EPS with no synergies behaving as expected.
                2. Check cells built into the model for the tests that can be automated.
                3. The full list run before every model or page leaves your desk.
                4. A weekly spot check of one live output page against the checks.

                ## Notes
                Start from the **Operational checklist** template. A useful test: set the premium, synergies and fees to zero in a stock deal and the result should reflect only the difference in P/E multiples.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ten-point merger model checklist exists, its automatable tests are built as check cells, and it is run before every send."
                cadence: rolling
              tasks:
                - "Write ten checks that only apply to merger models"
                - "Build check cells for ownership, sources and uses and goodwill sign"
                - "Run the zero-premium, no-synergies test on your current model"
                - "Spot check one live output page against the checklist @recurring(weekly:wed)"
            - name: Back-of-envelope accretion dilution drill
              description: |-
                ## Purpose
                Directors often ask in a meeting whether a deal would be accretive before any model exists. Practising the quick test, comparing the after-tax cost of each form of consideration with the target's earnings yield, and the P/E rule for all-stock deals, lets you give a sound first answer on the spot and check the model when it arrives.

                ## Milestones
                1. The earnings yield and P/E rules written out with a worked example each.
                2. Ten practice cases answered in under two minutes each.
                3. Each quick answer checked against your template model.
                4. A weekly drill kept for at least two months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "You answer ten mixed accretion dilution cases within two minutes each, with at least nine matching the template model's direction."
                cadence: rolling
              tasks:
                - "Write out the earnings yield rule and the P/E rule with one example each"
                - "Make ten practice cases with different mixes, prices and P/E ratios"
                - "Answer two quick accretion cases and check them in the template @recurring(weekly:sun)"
                - "Note any case where the quick rule and the model disagreed and why"
            - name: Yearly check of business combination accounting rules
              description: |-
                ## Purpose
                Merger models rest on accounting rules for business combinations, goodwill and intangibles that standard setters do revisit, and the acquirer and target may report under different frameworks. A yearly check of what has changed under IFRS 3, ASC 805 and the related goodwill rules keeps your template and your explanations to clients current.

                ## Milestones
                1. A note of the current position on goodwill impairment versus amortisation under each framework.
                2. Any changes in the past year from the standard setters summarised in a paragraph each.
                3. The personal template updated for anything that affects the pro forma build.
                4. The note shared with your analyst class or group.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated yearly note summarises any changes to business combination and goodwill rules under both frameworks, and the template reflects them."
                cadence: cyclic
              tasks:
                - "Check the standard setters' websites for recent business combination updates @recurring(yearly)"
                - "Write a paragraph on each change that affects merger models"
                - "Ask the firm's accounting specialist whether anything else changed"
                - "Update the personal template where a change affects the pro forma build"
            - name: Purchase accounting under IFRS 3 and ASC 805
              description: |-
                ## Purpose
                Bankers who understand purchase accounting can explain why a deal is dilutive on reported EPS but accretive on cash EPS, and can talk with the client's finance team as equals. Studying how the acquisition method recognises identifiable assets, liabilities, goodwill and non-controlling interests under both frameworks gives the model's purchase accounting tab a real foundation.

                ## Milestones
                1. The acquisition method summarised in your own words for both frameworks.
                2. The treatment of non-controlling interests, contingent consideration and transaction costs noted for each.
                3. Two published acquisition footnotes read and matched to the steps of the method.
                4. Ten flashcard questions written and answered correctly.

                ## Notes
                Start from the **Reading queue** template. Real acquisition footnotes in annual reports teach more than textbook examples.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have written summaries of the acquisition method under both frameworks and matched two published acquisition footnotes to its steps."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add the standards and two acquisition footnotes to your reading queue"
                - "Summarise the acquisition method in one page for each framework"
                - "Match each line of a published acquisition footnote to a step"
                - "Read one technical publication on business combinations @recurring(monthly:15)"
            - name: Deferred taxes and deal structure in the model
              description: |-
                ## Purpose
                Whether a deal is a share purchase or an asset purchase changes the tax basis of the target's assets, which changes the deferred tax liability, goodwill and future cash taxes. Learning how the model should treat each structure, and when a step-up in tax basis is available, lets you build the right case and know which questions to send to the tax advisers.

                ## Milestones
                1. A one-page comparison of book and tax treatment for share and asset purchases.
                2. The deferred tax liability on intangible write-ups calculated for both structures on a practice deal.
                3. The cash tax effect of a basis step-up shown over five years.
                4. A list of structure questions to put to the client's tax advisers.

                ## Notes
                Tax structure is a call for the client's tax advisers. Your job is to show the effect of each option in the model, not to recommend one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice model shows goodwill, the deferred tax liability and five-year cash taxes under both share and asset purchase structures."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out how book and tax basis differ in a share purchase"
                - "Rebuild a practice deal as an asset purchase with a basis step-up"
                - "Compare five years of cash taxes under the two structures"
                - "List the structure questions to send to the tax advisers"
            - name: Exchange ratios, fixed versus floating, and collars
              description: |-
                ## Purpose
                In stock deals the exchange ratio decides who bears share price risk between signing and closing, and clients will ask what happens if the acquirer's shares fall 15 percent. Understanding fixed and floating ratios, and how collars cap the swing, lets you build the ratio mechanics into the model and show the board a clear table of outcomes.

                ## Milestones
                1. Fixed and floating exchange ratios explained in a short note with one example each.
                2. A collar modelled with its floor and cap on the price received and shares issued.
                3. A table showing value per target share and acquirer ownership across a range of acquirer share prices.
                4. Two announced stock deals with collars read and their terms recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your model shows value received and ownership under fixed, floating and collared exchange ratios across at least seven acquirer share prices."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a short note on fixed and floating exchange ratios"
                - "Find two announced stock deals with collars and record their terms"
                - "Model a collar with a floor and cap on the exchange ratio"
                - "Build a table of value and ownership across seven acquirer share prices"
            - name: Breakeven and required synergies analysis
              description: |-
                ## Purpose
                Boards rarely trust a single figure for synergies, but they can judge whether the synergies needed to avoid dilution are achievable. Solving for the pre-tax synergies that make the deal EPS neutral in each year, and comparing that figure with the benchmark library and management's estimate, turns the debate over synergies into a clear question of probability.

                ## Milestones
                1. Breakeven pre-tax synergies calculated for years one and two.
                2. Breakeven synergies expressed as a percentage of the target's cost base.
                3. The breakeven figure compared with management's estimate and the sector benchmarks.
                4. A one-line conclusion for the output page on how much cushion the assumed synergies leave.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model reports breakeven synergies for two years as a currency amount and a share of target costs, set against management's estimate and sector benchmarks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Solve for the pre-tax synergies that make year one EPS neutral"
                - "Repeat the calculation for year two"
                - "Express each breakeven figure as a share of the target's cost base"
                - "Set breakeven beside management's estimate and the benchmark library"
            - name: Contribution analysis for the combined company
              description: |-
                ## Purpose
                In stock deals and mergers of equals, each side's shareholders want to know whether their ownership matches what their company brings. A contribution analysis comparing each company's share of revenue, EBITDA, net income and equity value with the proposed ownership split gives the negotiation an objective reference point.

                ## Milestones
                1. Each company's share of revenue, gross profit, EBITDA, net income and market value for two forecast years.
                2. Enterprise value metrics adjusted for each company's net debt to give implied equity ownership.
                3. Proposed pro forma ownership shown beside the contribution ranges.
                4. A bar chart page ready for the board book.

                ## Notes
                Contribution of EBITDA must be adjusted for differing debt levels before comparing with equity ownership, or the more indebted company looks underpaid.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contribution page shows each company's share of five metrics, adjusted for net debt, beside the proposed ownership split."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull revenue, EBITDA and net income for both companies for two forecast years"
                - "Adjust enterprise value contributions for each company's net debt"
                - "Chart contribution ranges against the proposed ownership split"
                - "Ask the associate which metrics the client cares about most"
            - name: Pro forma ownership and voting control analysis
              description: |-
                ## Purpose
                Issuing shares to pay for a target changes who controls the acquirer, and can trigger shareholder vote requirements on many exchanges or bring a large holder above a disclosure or takeover threshold. A clear ownership table, including the largest holders on both sides, shows the client the governance consequences of each financing mix before they become a surprise.

                ## Milestones
                1. Pro forma ownership by former acquirer and former target shareholders for each consideration mix.
                2. The top ten holders of each company mapped to their pro forma stakes.
                3. Any holder crossing a notable threshold flagged for the legal advisers to review.
                4. The share issuance as a percentage of existing shares shown for the lawyers' vote analysis.

                ## Notes
                Whether a vote or a mandatory offer is triggered is a legal question. Show the numbers and put the question to counsel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An ownership table shows pro forma stakes for each consideration mix and the top holders, with any threshold crossings sent to counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate pro forma ownership for all-stock, mixed and mostly cash cases"
                - "Map the ten largest holders of each company to their pro forma stakes"
                - "Calculate new shares as a percentage of the acquirer's existing shares"
                - "Send any threshold crossings to the legal advisers for review"
            - name: Cash EPS and the amortisation of acquired intangibles
              description: |-
                ## Purpose
                Many acquirers report an adjusted or cash EPS that adds back amortisation of acquired intangibles, and the same deal can look dilutive on one measure and accretive on the other. Learning how each measure is defined by the acquirer, and building both into the model, keeps the output page consistent with how the client talks to its own investors.

                ## Milestones
                1. The acquirer's own adjusted EPS definition copied from its earnings release.
                2. Both reported and adjusted EPS accretion calculated in the model.
                3. A reconciliation row showing exactly what is added back.
                4. The output page labelled with the measure the client uses publicly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The model shows reported and adjusted EPS accretion with a reconciliation that matches the acquirer's published adjusted EPS definition."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the acquirer's adjusted EPS definition from its latest earnings release"
                - "Add an adjusted EPS line that adds back acquired intangible amortisation"
                - "Build a reconciliation row between reported and adjusted EPS"
                - "Label the output page with the measure the client reports"
            - name: Sensitivity tables for premium, mix and synergies
              description: |-
                ## Purpose
                Show a single accretion figure and the next question is always what happens if an input moves. Sensitivity tables that vary the offer premium against the cash and stock mix, and synergies against the new debt rate, answer the next five questions before they are asked and show where the deal tips from accretive to dilutive.

                ## Milestones
                1. A table of year one accretion across five premiums and five cash and stock mixes.
                2. A table of year two accretion across levels of synergies and debt rates.
                3. Breakeven cells shaded so the dilutive zone is obvious.
                4. Tables that recalculate correctly when the base case changes.

                ## Notes
                Data tables slow large models. Keep sensitivities on their own tab and set calculation to automatic except tables while you build.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two sensitivity tables covering premium against mix and synergies against debt rate recalculate correctly and shade the dilutive cases."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose five premiums and five consideration mixes around the base case"
                - "Build the premium against mix table for year one accretion"
                - "Build the synergies against debt rate table for year two"
                - "Shade the cells where the deal turns dilutive"
            - name: Pro forma credit metrics alongside accretion
              description: |-
                ## Purpose
                A deal funded heavily with debt can look strongly accretive while pushing the acquirer's net debt to EBITDA past what its lenders and rating agencies will accept. Showing pro forma credit metrics on the same page as accretion keeps the financing mix honest and tells the team when to bring in the debt and ratings specialists.

                ## Milestones
                1. Pro forma net debt to EBITDA and interest cover for years one to three.
                2. The acquirer's stated target range or covenant levels noted beside the metrics.
                3. Debt paydown from free cash flow modelled for three years.
                4. A flag on the output page when a metric moves outside the stated range.

                ## Notes
                Rating implications belong to the credit ratings advisory team. The merger model shows the metrics; they judge the rating.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The output page shows three years of pro forma net debt to EBITDA and interest cover beside accretion, with a flag for any metric outside the stated range."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the acquirer's stated net debt to EBITDA target in its investor materials"
                - "Build pro forma net debt and EBITDA for three years"
                - "Model debt repayment from free cash flow after dividends"
                - "Add a flag when a metric falls outside the stated range"
            - name: Cash, stock or mixed consideration comparison
              description: |-
                ## Purpose
                The choice of consideration shapes accretion, ownership, credit metrics and the risk each side keeps after closing. Laying out all-cash, all-stock and two mixed cases side by side, with the trade-offs in plain words, gives the client a decision page rather than a single answer it has to accept or reject.

                ## Milestones
                1. Four consideration cases run through the full model.
                2. A single page comparing accretion, ownership, net debt to EBITDA and goodwill for each.
                3. A short description of who bears price risk and the risk of missing synergies in each case.
                4. The client's preferred case recorded after the discussion.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison page shows four consideration cases across accretion, ownership and credit metrics, and the client's chosen case is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set up four consideration cases with a switch in the model"
                - "Run each case and capture accretion, ownership and credit metrics"
                - "Write one sentence per case on who bears price risk and integration risk"
                - "Record the case the client prefers after the meeting"
            - name: Phasing synergies and the cost to achieve them
              description: |-
                ## Purpose
                Synergies rarely arrive in full on day one, and the one-off costs of achieving them often land in year one and make it look worse. A schedule that phases each source of savings by year and charges the cost to achieve below or above the line, as the client reports it, makes the year one figure believable.

                ## Milestones
                1. Cost and revenue synergies split by category and phased over three years.
                2. One-off integration costs estimated and timed against the synergies they deliver.
                3. Accretion shown with and without integration costs.
                4. Phasing assumptions checked against two comparable deals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-year schedule of synergies phases each category, times the cost to achieve and shows accretion with and without those costs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Split the estimated synergies into categories such as procurement and headcount"
                - "Phase each category over three years with a stated ramp"
                - "Estimate one-off integration costs and time them by year"
                - "Show year one accretion with and without the integration costs"
            - name: Revenue synergies, included or excluded
              description: |-
                ## Purpose
                Investors usually discount revenue synergies heavily, and a model that relies on them to show accretion will not survive the announcement call. Deciding with the team whether to include them, at what haircut and in which years, and showing the result both ways, protects the client's credibility.

                ## Milestones
                1. Revenue synergies listed by source, such as cross-selling or pricing.
                2. A gross margin applied so only the profit effect reaches net income.
                3. Accretion shown with cost synergies only and with revenue synergies added.
                4. The team's decision on what appears in public materials written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The model shows accretion with and without revenue synergies at margin, and the team's decision on their public use is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each source of revenue synergies with management's estimate"
                - "Apply the combined gross margin to turn revenue into profit"
                - "Show accretion with cost synergies only and with both"
                - "Record the team's decision on what goes into public materials"
            - name: Accretion against value creation, the ROIC test
              description: |-
                ## Purpose
                EPS accretion can come purely from paying with cheap debt or highly rated stock, even when the acquirer earns less on the purchase price than its cost of capital. Adding a return on invested capital line, comparing post-tax returns on the full price including synergies with the acquirer's WACC, gives seniors a second lens and answers the investor who says accretion is not value.

                ## Milestones
                1. Return on invested capital calculated on the full purchase price plus fees for years one to five.
                2. The acquirer's WACC taken from the valuation team or the DCF work.
                3. The year in which return on capital passes WACC shown on the output page.
                4. A one-sentence conclusion reconciling accretion with returns.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The model shows five years of return on invested capital against WACC and the year it crosses, beside the EPS result."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate after-tax operating profit of the target plus synergies for five years"
                - "Divide by purchase price plus fees to get return on invested capital"
                - "Get the acquirer's WACC from the valuation team"
                - "Mark the year the return passes WACC on the output page"
            - name: Acquisition compared with a share buyback
              description: |-
                ## Purpose
                A board considering a cash acquisition will often ask whether the same money would do more as a share buyback. Running the buyback alternative at the current share price, with the same foregone interest, gives a fair benchmark: an acquisition that is less accretive than buying back stock has to justify itself on strategy.

                ## Milestones
                1. A buyback case retiring shares with the same cash and debt as the acquisition.
                2. EPS accretion of the buyback compared with the acquisition for two years.
                3. A note on the strategic reasons that might justify the lower-accretion option.
                4. The comparison included in the appendix of the board book.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The model shows two years of EPS accretion for a buyback of equal size beside the acquisition case."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the buyback size equal to the cash and debt used in the deal"
                - "Assume a buyback price at a modest premium to the current price"
                - "Compare buyback EPS with acquisition EPS for two years"
                - "Draft the appendix page with the comparison"
            - name: Transaction fees and financing fees in the pro forma
              description: |-
                ## Purpose
                Advisory fees, financing fees and original issue discount are treated differently in the accounts, and getting them wrong distorts goodwill, interest and EPS. Learning which costs are expensed at closing, which are capitalised and amortised and which reduce the debt carrying value lets you put each in the right place and explain it to the client's finance team.

                ## Milestones
                1. A table showing the accounting treatment for advisory, legal, financing and equity issuance costs.
                2. Financing fees amortised over the life of each debt tranche in the model.
                3. Advisory fees excluded from the run-rate EPS and shown as a one-off.
                4. Equity issuance costs netted against the new equity raised.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each fee type in the model follows its stated accounting treatment, with financing fees amortised by tranche and advisory fees shown as one-off."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each fee type in the sources and uses with its expected amount"
                - "Write the accounting treatment beside each fee type"
                - "Amortise financing fees over each tranche's term"
                - "Confirm the treatment with the client's finance team"
            - name: Refinancing the target's debt in the model
              description: |-
                ## Purpose
                Target bonds and loans may need repaying at closing, carry make-whole premiums or stay outstanding at a higher rate than the acquirer pays. Deciding with the team what happens to each instrument, and modelling the cost, prevents a gap in sources and uses and a wrong interest line.

                ## Milestones
                1. Every target debt instrument listed with its amount, rate, maturity and change of control terms.
                2. A decision recorded for each: repay, roll or tender.
                3. Make-whole or prepayment costs added to uses where they apply.
                4. Pro forma interest reflecting the decision for each instrument.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each target debt instrument has a recorded repay, roll or tender decision, with its cost in uses and its interest in the pro forma."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the target's debt instruments from the latest debt footnote"
                - "Ask the agent to summarise change of control clauses from the debt documents"
                - "Record a repay, roll or tender decision for each instrument with the team"
                - "Add any make-whole costs to uses and update pro forma interest"
            - name: Merger model pages for a client board meeting
              description: |-
                ## Purpose
                Once a client's board meets to discuss a possible acquisition, the merger model becomes four or five pages that directors will read closely and question. Preparing the accretion summary, sensitivity tables, contribution and ownership pages to a fixed timetable, with every number tied to one model version, means the banker presenting can answer any question without checking.

                ## Milestones
                1. A page list agreed with the director two weeks before the meeting.
                2. Draft pages through two rounds of internal comments.
                3. Every number on every page tied back to a single named model version.
                4. A one-page answer sheet for the likely board questions.

                ## Notes
                Freeze the model version two days before the book goes. Any later change means rechecking every page.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Board pages are delivered on the agreed date, tied to one frozen model version, with an answer sheet for likely questions."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the page list and the book deadline with the director"
                - "Draft the accretion summary and sensitivity pages"
                - "Freeze the model version two days before the book is sent"
                - "Write an answer sheet for the five questions directors will ask"
            - name: Announcement day accretion statement check
              description: |-
                ## Purpose
                Press releases and investor presentations on announcement day often say the deal will be accretive in a stated year, and that sentence will be quoted for years. Checking that it matches the model, the measure the company uses and the assumptions the lawyers have cleared protects the client and the bank from a public statement that cannot be supported.

                ## Milestones
                1. Every statement on accretion, synergies or financing in the announcement documents listed.
                2. Each statement tied to a model output and its assumptions.
                3. The EPS measure in each statement matched to the company's public definition.
                4. Sign-off from the deal team and the lawyers recorded before release.

                ## Notes
                Forward-looking statements are the lawyers' territory. Your job is to show that every number has support in the model.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every number in the announcement materials is tied to a model output, and deal team and legal sign-off is recorded before release."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the latest drafts of the press release and investor presentation"
                - "List every statement on accretion, synergies or financing in them"
                - "Tie each statement to its model output and note the version"
                - "Record deal team and legal sign-off before the release goes out"
            - name: Overnight accretion dilution pages for a pitch
              description: |-
                ## Purpose
                A director will sometimes ask at six in the evening for illustrative accretion pages on three possible targets for a pitch the next morning. Having a rehearsed routine, using your template, current market data and clearly labelled public assumptions, produces clean pages by the deadline without inventing numbers.

                ## Milestones
                1. Market data, consensus and share counts pulled for every company in the pitch.
                2. Each acquirer and target pair run through the template with stated assumptions.
                3. Pages formatted to the pitch book style with illustrative labels.
                4. A summary of assumptions sent to the associate with the pages.

                ## Notes
                Write illustrative and based on public information on every page. Pitch numbers travel further than you expect.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Illustrative accretion pages for every pitch target are delivered by the deadline with assumptions listed and illustrative labels on every page."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the targets, premium and consideration mix with the director"
                - "Pull share prices, consensus and share counts for each company"
                - "Run each pair through the template and format the pages"
                - "Send the pages with a short list of assumptions to the associate"
            - name: Revised bid rerun of the merger model
              description: |-
                ## Purpose
                If a target rejects the first offer or a rival bidder appears, the client will want to know within hours what a higher price does to accretion, ownership and debt. Preparing the rerun in advance, with price steps already in the model and a one-page summary layout, means the team can advise on a revised bid the same day.

                ## Milestones
                1. Price steps above the current offer built as model cases.
                2. Each step showing accretion, ownership, net debt to EBITDA and breakeven synergies.
                3. A one-page summary of the steps ready to send.
                4. The walk-away price at which the deal turns dilutive marked clearly.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page summary shows at least four higher price steps with accretion, ownership, credit metrics and the dilution point marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add four price steps above the current offer as model cases"
                - "Capture accretion, ownership and credit metrics for each step"
                - "Mark the price at which the deal turns dilutive"
                - "Lay out the one-page summary ready to send"
            - name: Post-closing look-back on projected accretion
              description: |-
                ## Purpose
                Few bankers ever check how their merger model compared with what actually happened, yet that comparison is the best teacher available. A year after a deal closes, setting the model's year one figures against the acquirer's reported results shows which assumptions were reliable and which were optimistic.

                ## Milestones
                1. The final signing model saved with its key outputs.
                2. Reported results for the first full year after closing gathered from public filings.
                3. A comparison of projected and reported EPS, synergies and net debt.
                4. Three lessons written into your template notes.
              priority: low
              deadlineOffsetDays: 400
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A look-back note compares projected and reported EPS, synergies and net debt for the first full year after closing, with three lessons recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save the signing model outputs in a look-back folder"
                - "Check whether a closed deal has reached its first full year @recurring(yearly)"
                - "Compare projected and reported EPS, synergies and net debt"
                - "Write three lessons into your template notes"
            - name: First merger model on a live deal as a new analyst
              description: |-
                ## Purpose
                New analysts are often handed a firm template and a deadline with little explanation. Taking the first live merger model in planned stages, from understanding the template to owning a clean version, with a short check-in after each stage, builds confidence quickly and shows the associate you can be trusted with the next one.

                ## Milestones
                1. The firm template walked through with the associate in a 30-minute session.
                2. Inputs for both companies entered and sourced in the assumptions log.
                3. A first full output reviewed by the associate with comments logged.
                4. A clean version delivered with every comment closed.

                ## Notes
                Ask one good question early rather than ten at midnight. Write the questions down as you go and batch them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "You deliver a clean live merger model with all associate comments closed and every input recorded in the assumptions log."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book a 30-minute template walkthrough with the associate"
                - "Enter and source inputs for both companies"
                - "Batch your questions and send them once a day"
                - "Close every comment from the first review and confirm with the associate"
            - name: Associate ownership of the merger model and its builders
              description: |-
                ## Purpose
                As an associate you stop building every cell and start owning the model's integrity while analysts do most of the work. Setting a clear split of who changes what, a short weekly model check-in and a review sequence before any page goes to the vice president keeps quality high without taking the keyboard back.

                ## Milestones
                1. A written split of which tabs each analyst owns.
                2. A weekly 20-minute model check-in with the analysts on each live deal.
                3. A review order agreed: analyst self-check, associate review, then VP.
                4. No more than one round of VP comments on model errors in a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Tab ownership and review order are written for every live merger model, and weekly check-ins happen on each one."
                cadence: rolling
              tasks:
                - "Write down which analyst owns which tabs on each live model"
                - "Agree the review order with the analysts and the VP"
                - "Hold a 20-minute model check-in with the analysts @recurring(weekly:mon)"
                - "Track VP comments that are model errors rather than judgement calls"
            - name: Reconciling with the client's corporate development model
              description: |-
                ## Purpose
                Large acquirers have corporate development teams with their own merger models, and two models showing different accretion figures in the same meeting damages trust fast. Agreeing the inputs, reconciling the outputs line by line and keeping a standing call during the live phase means both sides present one answer.

                ## Milestones
                1. A shared list of inputs agreed with the client's team.
                2. A line-by-line reconciliation of pro forma net income and share count.
                3. Every difference explained or eliminated.
                4. A weekly reconciliation call held until signing.

                ## Notes
                Start from the **Meeting notes** template for each call. Record which side's figure was adopted for every difference.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The bank and client models produce the same accretion figure, with every past difference explained in a reconciliation log."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the client's corporate development team for their input sheet"
                - "Reconcile pro forma net income line by line with their model"
                - "Log each difference and which figure was adopted"
                - "Hold the reconciliation call with the client team @recurring(weekly:wed)"
            - name: Timed merger model test practice
              description: |-
                ## Purpose
                Private equity, corporate development and lateral bank interviews often include a timed merger model or accretion case. Practising a 90-minute build from a short case pack, under real time pressure and then reviewed against a model answer, prepares you for the test and sharpens your speed on live deals too.

                ## Milestones
                1. Three case packs gathered or written, each with a model answer.
                2. Three timed builds completed within 90 minutes.
                3. Each build reviewed against the answer, with misses logged.
                4. A fourth build finished in under 75 minutes with correct results.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four timed merger model builds are completed, the last in under 75 minutes with outputs matching the model answer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a short merger case pack with a model answer"
                - "Book a 90-minute slot this week for the first timed build"
                - "Compare your build with the answer and log every miss"
                - "Repeat the build until it is correct in under 75 minutes"
            - name: Vice president review of a merger model in thirty minutes
              description: |-
                ## Purpose
                Vice presidents rarely have time to audit a merger model cell by cell, but they sign off on what the client sees. A fixed 30-minute review sequence, starting with the outputs that matter most and testing them against intuition and known rules, catches the material errors and leaves the detailed checking to the team.

                ## Milestones
                1. A written review sequence fitting in 30 minutes.
                2. Five quick tests that expose the most common material errors.
                3. The sequence used on the next three model reviews.
                4. A record of what each review caught.

                ## Notes
                Start at the answer and work backwards. If accretion moves the wrong way when you raise the premium, something upstream is broken.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A 30-minute merger model review sequence is written and used on three consecutive model reviews, with findings recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the order in which you check the outputs"
                - "Pick five quick tests such as raising the premium or zeroing synergies"
                - "Use the sequence on the next merger model you review"
                - "Record what each review caught and adjust the sequence"
            - name: Bank acquirer model with tangible book value earn-back
              description: |-
                ## Purpose
                When the acquirer is a bank, investors judge the deal on tangible book value per share dilution and how many years it takes to earn back, alongside EPS and capital ratios. Building the bank-specific outputs, including credit marks on the target's loan book and core deposit intangibles, makes the model speak the language of bank investors and regulators.

                ## Milestones
                1. Tangible book value per share dilution calculated at closing.
                2. An earn-back period shown on the method the client prefers.
                3. Credit and interest rate marks on the loan book and a core deposit intangible estimated with stated assumptions.
                4. Pro forma regulatory capital ratios shown beside the result.

                ## Notes
                Capital ratio rules differ by country and change over time. Confirm the current definitions with the client's finance and regulatory teams.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The bank merger model shows tangible book value dilution, the earn-back period, loan marks and pro forma capital ratios with stated assumptions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull tangible common equity for both banks from the latest filings"
                - "Estimate loan marks and a core deposit intangible with stated assumptions"
                - "Calculate tangible book value dilution and the earn-back period"
                - "Add pro forma capital ratios using the client's definitions"
            - name: REIT merger model on FFO and AFFO per share
              description: |-
                ## Purpose
                Real estate investment trusts are judged on funds from operations and adjusted funds from operations per share rather than EPS, and on net asset value and portfolio quality. Rebuilding the pro forma around FFO and AFFO, with the right treatment of depreciation, straight-line rent and capital spending, gives a result REIT investors will recognise.

                ## Milestones
                1. FFO and AFFO for both companies reconciled to their published figures.
                2. Pro forma FFO and AFFO per share for two years.
                3. Accretion to net asset value per share shown alongside.
                4. Pro forma net debt to EBITDA and the payout ratio shown.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model shows two years of pro forma FFO and AFFO per share accretion reconciled to published figures, with NAV per share and payout ratio."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Reconcile each REIT's FFO and AFFO to its published supplement"
                - "Build pro forma FFO and AFFO per share for two years"
                - "Calculate net asset value per share before and after the deal"
                - "Show the pro forma dividend payout ratio on AFFO"
            - name: Merger of equals exchange ratio and governance
              description: |-
                ## Purpose
                In a merger of equals there is little or no premium, so the debate is about the exchange ratio, the board split, the chief executive and the headquarters. Modelling a range of exchange ratios against contribution, market values and each side's EPS accretion gives both boards a fair basis for agreeing terms.

                ## Milestones
                1. Exchange ratios implied by market prices over several averaging periods.
                2. Accretion or dilution for both sets of shareholders at each ratio.
                3. Contribution analysis set beside the ownership each ratio produces.
                4. A summary page linking the ratio range to the governance terms being discussed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A page shows at least five exchange ratios with ownership, contribution and accretion for both sets of shareholders."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate market-implied exchange ratios over spot, 30 and 90-day averages"
                - "Show accretion for both sets of shareholders at each ratio"
                - "Set the contribution analysis beside each ownership split"
                - "Draft a summary page tying ratios to governance terms"
            - name: Cross-border merger model with currency and tax rates
              description: |-
                ## Purpose
                When acquirer and target report in different currencies, under different accounting frameworks and at different tax rates, a merger model can show accretion that is really a currency forecast. Translating at stated rates, adjusting for accounting differences and tax effecting each adjustment at the right rate keeps the result honest.

                ## Milestones
                1. The target's forecast translated at a stated rate, with a sensitivity to a 10 percent currency move.
                2. Material accounting differences between the two frameworks listed and adjusted.
                3. Each pro forma adjustment tax effected at the rate of the entity that bears it.
                4. Financing currency matched or the mismatch flagged on the output page.

                ## Notes
                Ask the client's tax advisers which rate applies to acquisition debt interest. Interest deductibility limits vary widely by country.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model translates the target at a stated rate with a currency sensitivity, adjusts accounting differences and tax effects each line at the right rate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Translate the target's forecast at the stated exchange rate"
                - "Refresh exchange rates in every cross-border model @recurring(monthly:9)"
                - "List accounting differences between the two frameworks and adjust"
                - "Add a sensitivity of accretion to a 10 percent currency move"
            - name: Earnouts and contingent consideration in the model
              description: |-
                ## Purpose
                Buyers and sellers who cannot agree on price often defer part of it, payable only if the target hits revenue or profit targets. Modelling the earnout's expected cost, how it is recognised at fair value and remeasured through earnings, and what it does to accretion in each scenario shows the client the real cost of the bridge.

                ## Milestones
                1. The earnout terms entered with targets, payment amounts and timing.
                2. Earnout payments modelled under low, base and high performance cases.
                3. The fair value at closing and remeasurement effects on earnings shown.
                4. Accretion and net debt shown under each performance case.

                ## Notes
                Fair value of contingent consideration is set by valuation specialists. Use clearly labelled illustrative values until theirs are available.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model shows earnout payments, fair value and remeasurement effects, accretion and net debt under three performance cases."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Enter the earnout targets, amounts and payment dates from the term sheet"
                - "Build low, base and high performance cases for the target"
                - "Model fair value at closing and remeasurement through earnings"
                - "Show accretion and net debt under each case"
---

# Merger Models and Accretion Dilution

This area is for the analysts, associates and vice presidents who build, own and defend merger models, from the first pitch page showing accretion or dilution to the board book on the night before signing. It starts with the foundations (the model's flow, a personal template, aligned standalone forecasts, diluted share counts, the offer bridge, sources and uses, financing costs, purchase accounting and the pro forma EPS build), then the weekly and quarterly machinery that keeps a live model current, the technical skills from exchange ratios to contribution analysis, the structuring decisions, the dated events, the variants for each seat on the deal team, and finally the specialist cases for banks, REITs, mergers of equals, cross-border deals and earnouts.

What repeats is a weekly refresh of share prices and consensus, a Friday archive of model versions and a Sunday practice drill, monthly updates to debt pricing, the benchmark library, the assumptions log and your error log, quarterly reruns after each earnings release, and a yearly check of the business combination accounting rules. The Reading queue, Metrics log, Operational checklist and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
