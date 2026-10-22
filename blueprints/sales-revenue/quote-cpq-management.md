---
id: sales-revenue.quote-cpq-management
name: Quotes & CPQ Management
description: "A clean product catalogue and approved price books, one quote template, the weekly and monthly routines that keep quotes accurate, and the CPQ choice, migration and go-live that end spreadsheet quoting."
category: business
version: 1.0.0
tags: [sales-revenue, quote-cpq-management, team, enterprise, small-business, cpq, price-books, quote-to-cash]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - purchase-decision
    - operational-checklist
    - metrics-log
    - training-program
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Quotes & CPQ Management
          description: "Producing accurate quotes fast with configure, price, quote tooling, approved price books and templates, so reps stop building quotes by hand in spreadsheets."
          projects:
            - name: Audit of fifty recent quotes
              description: |-
                ## Purpose
                Before changing tools or templates, find out what is going wrong with quotes today. Pulling the last fifty quotes sent and checking each against the price list, the signed order and the first invoice usually shows a small set of repeat errors: stale prices, missing items, the wrong currency or terms nobody approved. Those findings decide what to fix first.

                ## Milestones
                1. Fifty recent quotes gathered with the matching order form and first invoice where one exists.
                2. Each quote checked for price, quantity, product code, currency, tax and terms against the price list in force on its date.
                3. Every error tagged by type and by who built the quote.
                4. The three most common error types written up with the revenue they cost in credits, re-quotes or lost deals.

                ## Notes
                Include lost quotes as well as won ones. Errors on lost quotes never show up in billing, but they often explain why a buyer went quiet.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fifty recent quotes are checked against price list, order and invoice, with errors tagged by type and the top three written up with their cost."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the last fifty quotes sent, won and lost, from the CRM or shared drive"
                - "Set up a checking sheet with one column for each error type"
                - "Compare each quote line with the price list in force on the quote date"
                - "Total the revenue credited back or re-quoted because of quote errors"
                - "Ask the agent to summarise the three most common error patterns from the sheet"
            - name: Quote turnaround time baseline
              description: |-
                ## Purpose
                Buyers who ask for a price and wait three days often take the first quote that arrives. Measuring the time from quote request to quote sent, and where each quote waits (configuration, approval or formatting), gives the team a number to beat and shows which step is the real bottleneck.

                ## Milestones
                1. Request and sent times captured for at least thirty recent quotes.
                2. Median and slowest-tenth turnaround calculated, split into simple and complex quotes.
                3. Each slow quote traced to the step where it waited longest.
                4. A turnaround target agreed with sales leadership for each quote type.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Median quote turnaround is recorded for simple and complex quotes, with the main waiting step identified and a target agreed with sales leadership."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick thirty quotes from last quarter with a clear request date"
                - "Record request, first draft, approval and sent times for each one"
                - "Split the results into simple and complex quotes and find each median"
                - "Agree a turnaround target for each quote type with the sales lead"
            - name: Sellable product and SKU catalogue cleanup
              description: |-
                ## Purpose
                Quote tools inherit whatever mess sits in the product list: discontinued items, three codes for the same thing, names only finance understands. Cleaning the catalogue down to what can actually be sold today, with one code and one clear name per item, is the foundation every price book, bundle and rule depends on.

                ## Milestones
                1. A full export of product codes from the CRM, billing system and any quote spreadsheets.
                2. Duplicates merged and every item marked active, retiring or retired.
                3. Each active item given one code, one buyer-readable name and a product family.
                4. The cleaned catalogue signed off by product, finance and sales operations.

                ## Notes
                Never delete retired codes. Mark them inactive so historical quotes, contracts and invoices still resolve.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One catalogue of active sellable items exists, each with a single code, readable name and family, signed off by product, finance and sales operations."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export product codes from the CRM, billing system and quote spreadsheets"
                - "Match duplicates across the three lists and choose one code for each"
                - "Mark every item active, retiring or retired with a one-line reason"
                - "Get written sign-off on the cleaned catalogue from product and finance"
                - "Review items with no quotes in twelve months for retirement @recurring(yearly)"
            - name: One approved price book per currency and segment
              description: |-
                ## Purpose
                When reps copy prices from old quotes, last year's rates and private side deals spread through the pipeline. A small set of approved price books, one per selling currency and customer segment, each price carrying an effective date, gives every quote the same starting point and turns a price change into a single edit.

                ## Milestones
                1. The price books needed decided, for example list, partner and education, in each selling currency.
                2. Every active catalogue item priced in each book, with no blanks.
                3. An effective-from date on every price and a named person who can change it.
                4. Old price lists and spreadsheets archived and marked as superseded.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approved price books exist for each selling currency and segment, every active item is priced in each, and superseded lists are archived."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the currencies and customer segments you actually quote in"
                - "Decide the smallest set of price books that covers all of them"
                - "Fill each book with a price and effective date for every active item"
                - "Archive old price lists with a note pointing to the new price book"
            - name: Named owners for price books, rules and templates
              description: |-
                ## Purpose
                Quote problems linger when nobody is sure who may change a price, add a product rule or edit the template. Writing down one owner and one backup for each piece of the quoting set-up takes about an hour, and it stops well-meaning reps and admins from making untracked edits that surface weeks later.

                ## Milestones
                1. A list of every quoting component: catalogue, each price book, product rules, approval rules, templates and terms.
                2. One owner and one backup named for each component.
                3. Edit permissions in the quote tool matched to that list.
                4. The ownership table published where sellers go for quoting help.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every quoting component has a named owner and backup, and edit permissions in the tool match the published ownership table."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every part of the quoting set-up that someone can edit"
                - "Name an owner and a backup for each part"
                - "Remove edit rights from anyone who is not on the list"
                - "Confirm owners and backups are still right at the start of each year @recurring(yearly)"
            - name: Standard quote document template
              description: |-
                ## Purpose
                Quotes built in word processors drift into dozens of versions with different logos, missing totals and old bank details. One standard template with fixed sections (buyer and seller details, line items, totals, tax, validity, terms and acceptance) makes every quote look the same and lets a buyer find the number they need without phoning the seller.

                ## Milestones
                1. Required sections agreed with sales, finance and legal.
                2. A template built in the quote tool or document system with those sections locked.
                3. Company details, payment instructions and footer checked by finance.
                4. Every older template removed from shared drives and from the tool.

                ## Notes
                Keep the first page to what a budget holder needs: the total, what is included, how long the price holds and how to accept.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One quote template with locked required sections is the only template available to sellers, with finance-checked company and payment details."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect five recent quotes and list the sections each one used"
                - "Agree the required sections with finance and legal in one meeting"
                - "Build the template with the required sections locked"
                - "Archive every older quote template from shared folders and the tool"
            - name: Quote numbering, versions and validity rules
              description: |-
                ## Purpose
                Buyers sign the wrong version more often than anyone admits, usually because three files share a name. A simple rule for quote numbers, version suffixes, which version is current and how many days a price holds makes it obvious which quote is live and stops expired prices being honoured by accident.

                ## Milestones
                1. A numbering format that carries a unique quote number and a version.
                2. A default validity period agreed, with any exceptions written down.
                3. The tool or template set to stamp number, version and expiry date automatically.
                4. A rule that only the latest version can go out for signature.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every new quote carries a unique number, version and expiry date set automatically, and the default validity period is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a quote number and version format with finance"
                - "Choose a default validity period and list the allowed exceptions"
                - "Set the tool or template to add number, version and expiry date"
                - "Show sellers how to supersede an old version before sending a new one"
            - name: Quote terms block agreed with legal and finance
              description: |-
                ## Purpose
                The small print on a quote often becomes the contract for smaller deals, so loose wording about payment, delivery or cancellation can cost real money. Agreeing one terms block with legal and finance, plus a short list of approved alternative clauses, means sellers never have to write terms themselves.

                ## Milestones
                1. The terms currently printed on quotes collected and compared side by side.
                2. One standard terms block approved by legal and finance.
                3. Three to five approved alternative clauses stored for common requests.
                4. The approved block placed in the template and locked against editing.

                ## Notes
                This project covers the wording printed on the quote. Who may approve a non-standard term belongs to your deal desk or approval process.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved standard terms block and a short set of alternative clauses are locked into the quote template."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy the terms text from ten recent quotes into one document"
                - "Send the differences to legal and finance for one approved version"
                - "Store the approved alternatives where the template can pull them in"
                - "Ask legal to reconfirm the quote terms block @recurring(yearly)"
            - name: Tax, currency and rounding rules for quotes
              description: |-
                ## Purpose
                Quotes that show tax wrongly, round differently from the invoice or convert currency at an unstated rate create disputes at the very first bill. Settling with finance how tax is shown, which exchange rate applies and how totals round makes the quote total match the invoice to the cent.

                ## Milestones
                1. Tax display rules agreed for each country or region you sell into.
                2. A rule for which exchange rate source is used and how often it refreshes.
                3. Rounding of unit prices, discounts and totals matched to the billing system.
                4. Three test quotes whose totals match the invoices billing would raise.

                ## Notes
                Finance and your tax adviser decide the tax treatment. This project records their rules and puts them into the quote.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written tax, exchange rate and rounding rules are configured, and three test quotes match billing's invoice totals exactly."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance how tax should appear on quotes in each region"
                - "Agree which exchange rate source quotes use and how often it updates"
                - "Match the rounding of unit prices and totals to the billing system"
                - "Run three test quotes and compare their totals with test invoices"
                - "Recheck tax and currency settings against finance's current rules @recurring(yearly)"
            - name: Weekly open quote and expiry sweep
              description: |-
                ## Purpose
                Open quotes quietly expire, and a buyer who returns with a lapsed quote gets either an awkward re-price or an old price nobody meant to honour. Ten minutes each Monday reviewing quotes due to expire in the next fortnight lets sellers extend, refresh or close them on purpose.

                ## Milestones
                1. A saved report of open quotes expiring in the next fourteen days.
                2. Each expiring quote marked extend, re-quote or close by its seller.
                3. Expired quotes closed in the CRM so pipeline value is honest.
                4. Twelve consecutive weekly sweeps completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly sweeps are completed, with every expiring quote extended, re-quoted or closed before its date."
                cadence: rolling
              tasks:
                - "Build a saved report of open quotes expiring in the next fourteen days"
                - "Send each seller their expiring quotes with a decision needed @recurring(weekly:mon)"
                - "Close lapsed quotes so they no longer count in the pipeline"
                - "Note any quote extended more than twice for the monthly review"
            - name: Monthly price book change window
              description: |-
                ## Purpose
                Price edits made on any day, by anyone, mean two quotes sent the same afternoon can disagree. Batching changes into one monthly window, with a request log, a second pair of eyes and a short note to sellers, keeps prices stable and makes every change traceable when a buyer asks why their number moved.

                ## Milestones
                1. A request log for price changes with requester, reason and effective date.
                2. One fixed day each month when approved changes are loaded.
                3. Every change checked by a second person before it goes live.
                4. A short change note sent to sellers after each window.

                ## Notes
                Keep an emergency route for genuine errors, but log those changes in the same place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Price changes are loaded only in the monthly window, each logged, checked by a second person and announced to sellers."
                cadence: rolling
              tasks:
                - "Create a price change request log with reason and effective date"
                - "Load and double-check approved price changes in the window @recurring(monthly:12)"
                - "Send sellers a short note listing what changed and why"
                - "Record any emergency change outside the window with its reason"
            - name: Monthly quote accuracy spot check
              description: |-
                ## Purpose
                Accuracy slips back once a clean-up project is over. Checking ten randomly chosen quotes each month against the price book, product rules and terms catches drift early, and the error rate becomes a number the team can watch fall.

                ## Milestones
                1. A random sample of ten sent quotes pulled each month.
                2. Each quote checked with the same checklist used in the original audit.
                3. The monthly error rate recorded alongside the error types.
                4. Any repeated error turned into a rule, template fix or training note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ten-quote accuracy check is recorded every month for six months, with any repeated error fixed at its source."
                cadence: rolling
              tasks:
                - "Copy the audit checklist into a monthly spot check sheet"
                - "Check ten random quotes sent last month against the price book @recurring(monthly:20)"
                - "Record the error rate and the type of each error found"
                - "Raise a fix request for any error seen twice in a quarter"
            - name: Signed quote to billing handoff check
              description: |-
                ## Purpose
                A signed quote that reaches billing with the wrong start date, a missing product code or the wrong billing frequency becomes a wrong invoice and an unhappy new customer. A weekly check that every quote signed that week arrived in billing with matching lines catches the gap before the first invoice goes out.

                ## Milestones
                1. A list of the fields billing needs from every signed quote.
                2. A weekly match of signed quotes against new billing records.
                3. Every mismatch corrected before the first invoice date.
                4. A running count of mismatches by cause, shared with sales operations.

                ## Notes
                This checks the data moving from quote to billing. Whether the price itself was approved is a question for your approval process.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every quote signed in a week is matched to its billing record within that week, with mismatches fixed before the first invoice."
                cadence: rolling
              tasks:
                - "List every field billing needs from a signed quote"
                - "Match this week's signed quotes against new billing records @recurring(weekly:thu)"
                - "Correct each mismatch with billing before the first invoice runs"
                - "Log the cause of each mismatch in a shared tracker"
            - name: CPQ change request and release log
              description: |-
                ## Purpose
                Quote tools break in quiet ways when product rules, fields and templates are edited live. A simple change process, with a request form, a test in a sandbox and a monthly release with notes, keeps the tool stable and lets anyone see why a rule behaves as it does.

                ## Milestones
                1. A change request form asking for the business reason, an example quote and urgency.
                2. Every change tested in a sandbox or test copy before release.
                3. A monthly release slot with written release notes.
                4. A change log that explains each live rule and who asked for it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All CPQ changes for three months went through the request form, a sandbox test and the monthly release, each recorded in the change log."
                cadence: rolling
              tasks:
                - "Create a change request form that asks for an example quote"
                - "Test queued changes in the sandbox and release them with notes @recurring(monthly:4)"
                - "Add each released change to the log with requester and reason"
                - "Send back any request that arrives without a business reason"
            - name: Quarterly bundle and product rule review
              description: |-
                ## Purpose
                Bundles and product rules pile up as products launch and sales tactics change, until reps meet rules that block valid deals or allow impossible ones. Reviewing every rule each quarter, with usage numbers beside it, keeps the logic small enough for one person to understand.

                ## Milestones
                1. A list of all bundles, options and product rules with the date each was last changed.
                2. Usage counts showing how often each rule fired last quarter.
                3. Rules that never fire, or that sellers routinely work around, flagged.
                4. Agreed rules retired or rewritten through the change process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter every bundle and product rule is reviewed with usage counts, and unused or bypassed rules are retired or rewritten."
                cadence: cyclic
              tasks:
                - "Export every bundle and product rule with its last change date"
                - "Pull how often each rule fired in the last quarter"
                - "Review unused and bypassed rules with product and sales @recurring(quarterly)"
                - "Send agreed retirements through the change request process"
            - name: Quarterly quote template and clause refresh
              description: |-
                ## Purpose
                Logos change, bank details move, a new office opens, and the quote template is the last place anyone remembers to update. A quarterly read-through of the template and stored clauses against a short checklist keeps every outgoing quote current.

                ## Milestones
                1. A checklist covering company details, bank details, logos, contact names and clause versions.
                2. The template read through against the checklist each quarter.
                3. Outdated clauses replaced with the current approved wording.
                4. A dated note of what changed in each refresh.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes are completed in a year, each with the checklist ticked and changes noted with a date."
                cadence: cyclic
              tasks:
                - "Write a short checklist of details that go out of date on quotes"
                - "Read the template and stored clauses against the checklist @recurring(quarterly)"
                - "Replace outdated wording with the current approved version"
                - "Generate one test quote to see the changes as a buyer would"
            - name: Quoting help channel and FAQ for sellers
              description: |-
                ## Purpose
                Sellers stuck on a quote at six in the evening will improvise if there is nowhere fast to ask. One help channel with a response target, and an FAQ built from the questions that actually come up, cuts improvised workarounds and shows the administrator where training or the tool is failing.

                ## Milestones
                1. One named channel or queue for quoting questions, with a response time target.
                2. Each question tagged by topic when it is answered.
                3. An FAQ page answering the twenty most common questions.
                4. The FAQ updated monthly from new questions.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Quoting questions are answered in one channel within the agreed time, and the FAQ covers the twenty most asked questions."
                cadence: rolling
              tasks:
                - "Set up one channel or queue for quoting questions"
                - "Publish a response time target for quoting questions"
                - "Write the FAQ from the most common questions so far"
                - "Add newly repeated questions to the FAQ @recurring(monthly:26)"
            - name: Monthly quote metrics log
              description: |-
                ## Purpose
                Without a few steady numbers, debates about quoting run on anecdotes. Recording quotes created, turnaround time, error rate, approval wait and quote-to-win rate every month shows whether the process is getting faster and more accurate, and where to spend effort next.

                ## Milestones
                1. Five quote metrics defined, with the exact report behind each.
                2. A log or dashboard showing each metric by month.
                3. Six months of figures recorded.
                4. One improvement chosen each quarter from what the numbers show.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five defined quote metrics are recorded monthly for six months, with one improvement chosen each quarter from the trend."
                cadence: rolling
              tasks:
                - "Define the five quote metrics and the report behind each one"
                - "Set up a metrics log for the five figures"
                - "Record the month's quote metrics with one line of commentary @recurring(monthly:8)"
                - "Pick one improvement from the trend at each quarter end"
            - name: Annual list price update in the price books
              description: |-
                ## Purpose
                A yearly list price change touches every price book, open quote and renewal at once, and loading it by hand the night before is how errors spread. Preparing the new prices as a dated batch, testing it on sample quotes and switching it on with an effective date makes the change a non-event for sellers.

                ## Milestones
                1. New list prices received from product and finance with an effective date.
                2. The new prices loaded as future-dated entries rather than overwriting today's.
                3. Ten sample quotes tested on both sides of the effective date.
                4. Sellers told what changes, from when, and how open quotes are treated.

                ## Notes
                How open quotes and renewals are honoured is a commercial decision for your pricing or deal desk owners. This project puts their decision into the tool.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "The yearly list price change is loaded as future-dated prices, tested on ten sample quotes and announced to sellers before the effective date."
                cadence: cyclic
              tasks:
                - "Ask product and finance for the new price list and effective date @recurring(yearly)"
                - "Load the new prices as future-dated entries in each price book"
                - "Test ten sample quotes dated before and after the change"
                - "Send sellers the change summary and the rule for open quotes"
            - name: Building an accurate quote line by line
              description: |-
                ## Purpose
                New sellers, and experienced ones arriving from another company, often learn the quote tool by copying old quotes, which copies the old mistakes too. A short guided practice, building six real quote types from scratch with a checklist, teaches what each field does and why it matters to billing and commission downstream.

                ## Milestones
                1. Six quote scenarios written up, from a single item to a multi-year bundle.
                2. Each scenario built from scratch in the sandbox and checked against an answer quote.
                3. The fields that feed billing and commission understood and explained back.
                4. A first live quote reviewed by the quote owner before sending.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A seller has built six practice quotes in the sandbox that match the answer quotes, and their first live quote passed review."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write six practice scenarios from real deals, each with an answer quote"
                - "Build each practice quote from a blank quote in the sandbox"
                - "Compare each one with its answer quote and note the differences"
                - "Ask the quote owner to review your first live quote before it goes"
            - name: How bundles, options and dependencies work
              description: |-
                ## Purpose
                Most quoting errors on configurable products come from not knowing which items must go together, which exclude each other and which come free inside a bundle. Learning the product structure the way the tool sees it, with a diagram of each main bundle, makes sellers and admins faster and lets them spot when a rule is simply wrong.

                ## Milestones
                1. A diagram of each main bundle showing required, optional and excluded items.
                2. The difference between bundle pricing and component pricing understood with examples.
                3. Five configuration rules explained in plain words beside the tool's version.
                4. A short quiz passed by everyone who builds quotes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Diagrams of the main bundles exist and everyone who builds quotes has passed a short configuration quiz."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick the three bundles quoted most often last quarter"
                - "Draw each bundle with its required, optional and excluded items"
                - "Write five configuration rules in plain words beside the tool's logic"
                - "Run a ten-question quiz with everyone who builds quotes"
            - name: Pricing methods a quote tool can apply
              description: |-
                ## Purpose
                List price is only one way a line can be priced: there is cost-plus markup, block pricing for bands of users, tiered and volume discounts, percentage-of-total pricing for support, and term-based pricing. Knowing which method each product uses, and how it calculates, explains strange totals and stops admins forcing everything into manual discounts.

                ## Milestones
                1. Each pricing method in your tool explained with a worked example.
                2. Every active product tagged with the method it uses.
                3. The difference between tiered and volume pricing shown on the same quantity.
                4. Products priced by manual workaround listed for a proper method.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every active product is tagged with its pricing method, and each method has a worked example in the team's notes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the quote tool's documentation on pricing methods"
                - "Work one example of each method with real quantities"
                - "Tag every active product with the pricing method it uses"
                - "List products priced by manual discount that need a proper method"
            - name: Subscription quoting with proration, co-terming and ramps
              description: |-
                ## Purpose
                Recurring revenue quotes raise questions one-off sales never do: what to charge for a mid-term add-on, how to line a new purchase up with an existing renewal date, how to show a price that steps up each year. Getting these calculations right before the next large renewal saves credit notes and awkward conversations later.

                ## Milestones
                1. Proration explained with a worked example of a mid-term add-on.
                2. Co-terming rules agreed with finance and shown on a sample quote.
                3. A three-year ramp quote built with yearly price steps and totals.
                4. How each of these appears on the invoice confirmed with billing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worked examples of proration, co-terming and a three-year ramp are built in the tool and confirmed against billing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a sample quote for a mid-term add-on and check the proration"
                - "Agree with finance how add-ons line up with the renewal date"
                - "Build a three-year ramp quote with yearly price steps"
                - "Ask billing to confirm how each sample quote would invoice"
            - name: Testing quote rule changes in a sandbox
              description: |-
                ## Purpose
                A product rule that looks harmless can stop every quote containing a common item. Learning to test changes properly, with a set of reference quotes rerun after each change, lets admins release with confidence and catch side effects before sellers do.

                ## Milestones
                1. A sandbox or test copy refreshed with current products and prices.
                2. Twenty reference quotes saved that cover the main products and edge cases.
                3. A written routine that reruns the reference quotes after each change.
                4. One full change tested and released using the routine.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty reference quotes exist in the sandbox and are rerun after every change, with at least one release completed this way."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Refresh the sandbox with current products and price books"
                - "Save twenty reference quotes covering common and awkward cases"
                - "Write the steps for rerunning the reference quotes after a change"
                - "Test and release the next queued change using the routine"
            - name: Quote reports from CPQ and CRM data
              description: |-
                ## Purpose
                Questions such as which bundles sell together, how long approvals take or how often quotes are revised can be answered from data already in the tool, once someone knows how the records link. Learning the opportunity, quote and quote line structure and building five useful reports turns quote data into answers instead of guesses.

                ## Milestones
                1. The links between opportunity, quote and quote line understood and drawn.
                2. Five reports built: revisions per deal, approval wait, attach rate, quote to win and expiring quotes.
                3. Each report checked against a handful of known deals.
                4. The reports saved in a shared folder for sales leadership.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five quote reports are built, checked against known deals and shared with sales leadership."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw how opportunities, quotes and quote lines connect in your tool"
                - "Build a report of quote revisions per closed deal"
                - "Build reports for approval wait, attach rate and quote to win"
                - "Check each report against five deals you know well"
            - name: Clear line item names and descriptions for buyers
              description: |-
                ## Purpose
                Buyers sign faster when they can see what each line is, and procurement teams send back quotes full of internal codes like PRO-ENT-ADDON-3. Rewriting product names and descriptions in the buyer's language, with what is included, the unit and the term, cuts the clarifying emails that slow a deal down.

                ## Milestones
                1. A style rule for names and descriptions, including unit and term.
                2. Every active product given a buyer-facing name separate from its internal code.
                3. Plain descriptions written for the twenty most quoted items.
                4. Two customers or friendly buyers asked to read a sample quote and point out confusion.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active product has a buyer-facing name, the twenty most quoted items have plain descriptions, and two buyers have read a sample quote."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-paragraph style rule for product names and descriptions"
                - "Add a buyer-facing name field next to each internal code"
                - "Ask the agent to draft plain descriptions for the twenty most quoted items"
                - "Ask two friendly buyers to mark anything unclear on a sample quote"
            - name: CPQ requirements from real quoting scenarios
              description: |-
                ## Purpose
                Teams that pick a CPQ tool from feature lists find out at go-live that it cannot handle their two most common deal shapes. Writing requirements from twenty real quotes, including the awkward ones, gives vendors something concrete to prove and gives the team a clear test for the decision.

                ## Milestones
                1. Twenty real quote scenarios collected, from simplest to hardest.
                2. Must-have and nice-to-have requirements written against those scenarios.
                3. Integration needs listed for the CRM, billing, e-signature and tax systems.
                4. The requirements document reviewed by sales, finance and the CRM owner.

                ## Notes
                Start from the **Product spec** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A requirements document built on twenty real quote scenarios, with integration needs, is reviewed by sales, finance and the CRM owner."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Collect twenty real quotes that cover your full range of deal shapes"
                - "Write each one up as a scenario with its inputs and correct output"
                - "List must-have and nice-to-have requirements against the scenarios"
                - "Review the document with sales, finance and the CRM owner"
            - name: CPQ platform shortlist and scripted demos
              description: |-
                ## Purpose
                Vendor demos show the happy path. Asking three shortlisted vendors to build your own hardest scenarios live, scored on the same sheet by the same people, shows which tool fits your products and which would need years of custom work.

                ## Milestones
                1. Three vendors shortlisted against the must-have requirements.
                2. A demo script sent to each with five of your scenarios.
                3. Every demo scored by the same panel on one scoresheet.
                4. Three-year cost compared, including implementation and admin time.
                5. A decision recorded with the reasons and the runner-up.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor for a reference customer with a similar product catalogue and talk to them without the vendor present.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A CPQ tool is chosen after scripted demos of five real scenarios, with scores, three-year cost and reasons recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Shortlist three vendors that meet every must-have requirement"
                - "Send each vendor the same five scenarios to build in the demo"
                - "Score every demo on one shared scoresheet"
                - "Compare three-year cost including implementation and admin effort"
                - "Record the decision, the reasons and the runner-up"
            - name: Retiring spreadsheet quote calculators
              description: |-
                ## Purpose
                Private spreadsheets survive every tool launch because they are faster for the person who built them, and they carry old prices and formulas nobody else can check. Finding each one, understanding why it is still used and closing that gap in the tool is the only way to switch them off for good.

                ## Milestones
                1. Every quote spreadsheet in use found and listed with its owner.
                2. The reason each is still used written down.
                3. The gaps that justify a spreadsheet fixed in the tool or the template.
                4. A switch-off date announced and old files archived as read-only.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No quotes are built in spreadsheets after the switch-off date, and every old calculator is archived read-only."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask every seller to share any spreadsheet they use to price quotes"
                - "Record why each spreadsheet is still faster or more flexible"
                - "Fix the top three gaps in the tool or the template"
                - "Announce a switch-off date and archive the files as read-only"
            - name: Guided selling questions for complex configurations
              description: |-
                ## Purpose
                When a product has dozens of options, sellers either over-ask or guess, and both produce wrong quotes. A short set of guided questions in the tool, such as number of users, region and support level, that suggests the right bundle lets a newer seller produce the same quote an expert would.

                ## Milestones
                1. The five to eight questions an expert asks before configuring written down.
                2. Each answer mapped to the bundle or options it implies.
                3. The guided flow built and tested on ten past deals.
                4. Quote revisions per deal compared before and after launch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A guided selling flow reproduces the expert's configuration on ten past deals, and revisions per deal are measured before and after launch."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Interview two expert sellers about the questions they ask first"
                - "Map each answer to the bundle or options it points to"
                - "Build the guided flow and run ten past deals through it"
                - "Compare quote revisions per deal for the month before and after"
            - name: Quote layout a buyer can approve alone
              description: |-
                ## Purpose
                Quotes often travel to a finance director or procurement lead who was never on the sales calls. Redesigning the output so the first page shows the total, term, what is included and how to accept, with the detail behind it, lets that person approve without asking the seller to explain anything.

                ## Milestones
                1. Three recent quotes read by someone outside the deal, with their questions noted.
                2. A summary page designed with total, term, inclusions, validity and acceptance steps.
                3. Line detail, terms and options moved behind the summary.
                4. The new layout tested with two buyers before it replaces the old one.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The new quote layout has a one-page summary, was tested with two buyers and has replaced the old output."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Give three recent quotes to a colleague outside sales and note their questions"
                - "Sketch a summary page that answers those questions"
                - "Rebuild the template output with the summary first"
                - "Send the new layout to two buyers for comment before switching"
            - name: E-signature and online quote acceptance
              description: |-
                ## Purpose
                Printing, signing, scanning and emailing back a quote loses days and sometimes pages. Connecting the quote tool to e-signature, or an online accept button for small orders, lets buyers sign exactly the version they were sent and writes the signed status back to the CRM without anyone retyping it.

                ## Milestones
                1. An e-signature or online acceptance method chosen for each quote type.
                2. Signer fields, signing order and reminders set up in the template.
                3. Signed status and the signed file written back to the opportunity automatically.
                4. Ten real quotes signed through the new route without manual steps.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten real quotes have been signed through e-signature or online acceptance, with signed status written back to the CRM automatically."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Decide which quote types need e-signature and which an accept button"
                - "Place signer fields and reminders in the quote template"
                - "Connect signed status and the signed file back to the opportunity"
                - "Track the first ten signed quotes for any remaining manual step"
            - name: Primary quote sync with the CRM opportunity
              description: |-
                ## Purpose
                Forecasts go wrong when the opportunity amount says one thing and the latest quote another. Making one quote the primary quote, with its totals and products syncing to the opportunity, gives forecasting and commission the same number the buyer sees.

                ## Milestones
                1. A rule for which quote is primary when a deal has several.
                2. Totals, products and term synced from the primary quote to the opportunity.
                3. Manual edits to synced opportunity fields blocked.
                4. A monthly mismatch report showing zero or near-zero differences.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Opportunity amounts match the primary quote total on every open deal, confirmed by a monthly mismatch report."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the rule for choosing the primary quote on a deal"
                - "Map which quote fields sync to the opportunity"
                - "Lock synced opportunity fields against manual edits"
                - "Run the opportunity and primary quote mismatch report @recurring(monthly:16)"
            - name: Floor price and margin warnings on quote lines
              description: |-
                ## Purpose
                Sellers rarely mean to quote below cost; the tool simply never told them. Adding a floor price per item and a visible margin warning on each line, with a block below the floor, protects margin at the moment the number is typed rather than in a review afterwards.

                ## Milestones
                1. A floor price or minimum margin agreed for each product family with finance.
                2. Line-level warnings shown when a price comes close to the floor.
                3. Quotes below the floor blocked from sending until routed for approval.
                4. A month of warnings reviewed to check the thresholds are sensible.

                ## Notes
                Finance and your pricing owners set the floors. This project puts them into the tool so sellers see them while quoting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Floor prices are configured for every product family, the warning and block below the floor are tested, and a month of warnings is reviewed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance for a floor price or minimum margin per product family"
                - "Add a margin indicator to each quote line"
                - "Block sending below the floor and route those quotes to approval"
                - "Review a month of warnings for thresholds that fire too often"
            - name: Optional lines and alternative quote options
              description: |-
                ## Purpose
                Sending three separate quotes to show the price with and without an add-on means three documents that soon drift apart. Using optional lines or grouped alternatives inside one quote keeps the choices side by side and records exactly which option the buyer accepted.

                ## Milestones
                1. The tool's optional line or quote group feature switched on and tested.
                2. Rules for how optional lines appear and whether they count in the total.
                3. Three common option sets saved as reusable groups.
                4. Accepted options recorded on the signed quote and synced to the opportunity.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One quote can carry optional lines or alternative groups, three reusable sets exist, and accepted choices sync to the opportunity."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Test the optional line or quote group feature in the sandbox"
                - "Decide how optional lines show in the document and the totals"
                - "Save the three most requested option sets as reusable groups"
                - "Check accepted options sync to the opportunity after signature"
            - name: Price and product data migration into CPQ
              description: |-
                ## Purpose
                New quote tools are only as good as the data loaded into them, and migration is where every spreadsheet quirk surfaces. Mapping, cleaning and loading the catalogue, price books, bundles and open quotes in stages, with a reconciliation at each step, means go-live does not start with sellers finding missing items.

                ## Milestones
                1. A field map from old sources to the new tool signed off.
                2. Catalogue and price books loaded and reconciled item by item against the source.
                3. Bundles and rules built and tested against reference quotes.
                4. Quotes expected to be in flight at go-live recreated or given a cutover rule.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Catalogue, price books and bundles are loaded and reconciled against source data, with a written rule for quotes in flight at go-live."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map every field in the old price lists to its home in the new tool"
                - "Load the catalogue and price books into a test environment first"
                - "Reconcile item counts and prices against the source files"
                - "Decide how quotes still open at go-live will be handled"
            - name: CPQ go-live and cutover
              description: |-
                ## Purpose
                Switching quoting tools mid-quarter with no fallback is how a sales team loses a week of selling. Planning the cutover date away from quarter end, with a checklist, a frozen price book, a support rota and a rollback rule, gets every seller quoting in the new tool within the first week.

                ## Milestones
                1. A go-live date agreed outside the last three weeks of a quarter.
                2. A cutover checklist covering data freeze, access, templates, integrations and communications.
                3. A support rota for the first two weeks with a clear escalation route.
                4. Every seller has sent at least one live quote from the new tool in week one.

                ## Notes
                Start from the **Operational checklist** template. Write the rollback rule before go-live day, not during it.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new quote tool went live on the planned date, every seller sent a live quote in week one, and the cutover checklist was completed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose a go-live date outside the last three weeks of a quarter"
                - "Write the cutover checklist with an owner for each step"
                - "Freeze price book changes for the week before go-live"
                - "Staff a support rota for the first two weeks after launch"
                - "Check every seller has sent a live quote by the end of week one"
            - name: Seller training on the new quoting process
              description: |-
                ## Purpose
                Reps who skip training build quotes the old way inside the new tool. A short, practical session where every seller builds their own typical quote, followed by a certification quote and a quick reference card, makes the new process the default from day one.

                ## Milestones
                1. A ninety-minute hands-on session planned around three typical quotes.
                2. Every seller trained, including those on leave at launch.
                3. A certification quote built correctly by each seller.
                4. A one-page quick reference available inside the tool.

                ## Notes
                Start from the **Training program** template.
              priority: medium
              deadlineOffsetDays: 160
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every seller has attended hands-on training and built a correct certification quote, and a quick reference is available in the tool."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Plan a ninety-minute hands-on session around three typical quotes"
                - "Book sessions so every seller can attend, including late joiners"
                - "Check each seller's certification quote against the answer"
                - "Publish a one-page quick reference inside the tool"
            - name: New product launch added to the catalogue
              description: |-
                ## Purpose
                Launch day goes badly when sales can talk about a product but cannot quote it. Adding the new item to the catalogue, price books, bundles and template a fortnight early, tested and hidden until launch, means the first quote can go out the morning it is announced.

                ## Milestones
                1. Product code, name, description and pricing method confirmed with product and finance.
                2. The item added to every relevant price book with a future effective date.
                3. Bundle and compatibility rules updated and tested.
                4. The item made visible to sellers on launch day with a short quoting note.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new product was quotable on launch day, with price books, rules and a seller quoting note in place."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the new item's code, name, description and pricing method"
                - "Add the item to each price book with a future effective date"
                - "Update and test bundle and compatibility rules in the sandbox"
                - "Send sellers a short note on how to quote it on launch day"
            - name: Quarter-end quote surge readiness
              description: |-
                ## Purpose
                The last ten days of a quarter can bring as many quotes as the previous two months, along with rushed edits and late approvals. Freezing non-urgent tool changes, adding admin cover and pre-building common quote shapes keeps the tool steady exactly when it matters most.

                ## Milestones
                1. A change freeze on rules and templates for the last two weeks of the quarter.
                2. Admin and approver cover scheduled for the final days.
                3. Common quote shapes saved for sellers to start from.
                4. Issues from the surge logged and reviewed after the quarter closes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "For each quarter end, a change freeze, admin cover and saved quote shapes are in place, and issues are reviewed afterwards."
                cadence: cyclic
              tasks:
                - "Announce the quote tool change freeze for the final two weeks @recurring(quarterly)"
                - "Schedule admin and approver cover for the last five working days"
                - "Save the five most common quote shapes for sellers to start from"
                - "Review issues from the surge in the first week of the new quarter"
            - name: Small business quote kit without CPQ software
              description: |-
                ## Purpose
                Businesses with a few dozen products and two or three people quoting rarely need CPQ software. A single price list, a quote template in the accounting or invoicing tool and a short numbering rule give most of the accuracy for almost none of the cost, and make it clear when it is time to buy something bigger.

                ## Milestones
                1. One price list with codes, prices and tax treatment kept in a single file or the accounting tool.
                2. Quotes produced from the invoicing tool's quote feature or from one template.
                3. A quote number and validity date on every quote.
                4. A written trigger for when to look at CPQ software, such as quote volume or product complexity.

                ## Notes
                Many accounting and invoicing tools can turn an accepted quote straight into an invoice, which removes the most common retyping error.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every quote comes from one price list and one template with numbers and validity dates, and the trigger for buying CPQ software is written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether your accounting or invoicing tool has a quote feature"
                - "Put every product and price into one list with its tax treatment"
                - "Set up one quote template with a number and validity date"
                - "Write down the quote volume or complexity that would justify CPQ software"
                - "Update the price list and check the template still matches it @recurring(quarterly)"
            - name: A seller's pre-send quote check
              description: |-
                ## Purpose
                Most quote errors could be caught by the person sending it in two minutes, if they knew what to look for. A personal checklist covering buyer entity, contact, products, quantities, term, start date, currency and expiry, run before every send, keeps a seller's own error rate close to zero.

                ## Milestones
                1. A checklist of no more than ten items written for the quotes you send most.
                2. The checklist pinned where you click send.
                3. Twenty consecutive quotes sent after running the checklist.
                4. None of your quotes needing correction in the next monthly spot check.

                ## Notes
                Check the buyer's legal entity name against their purchase order or company registration, not their website. It is the error procurement sends back most often.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty consecutive quotes are sent after the checklist, with none flagged in the next monthly spot check."
                cadence: rolling
              tasks:
                - "Write a ten-item checklist from the errors in your last few quotes"
                - "Pin the checklist where you click send"
                - "Run the checklist before each of your next twenty quotes"
                - "Look up your quotes in the next monthly spot check results"
            - name: Multi-entity and multi-currency quoting
              description: |-
                ## Purpose
                Enterprises that sell from several legal entities and in several currencies need each quote to come from the right entity, with that entity's details, bank account, tax and terms. Getting the entity wrong can mean re-papering a signed deal, so the rule belongs in the tool, not in sellers' heads.

                ## Milestones
                1. A table of selling entities with the countries, currencies and products each covers.
                2. The quote tool choosing the entity from the buyer's country and product mix.
                3. Each entity's details, tax display and terms set in the template.
                4. One test quote per entity checked by finance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The quote tool sets the correct selling entity and currency from the buyer and products, verified by one finance-checked test quote per entity."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask finance for the list of selling entities and what each may sell"
                - "Write the rule that picks the entity from country and product"
                - "Add each entity's details and terms to the template"
                - "Have finance check one test quote for each entity"
            - name: Partner price books and reseller quote access
              description: |-
                ## Purpose
                Resellers and partners who wait days for a vendor rep to quote them will sell something else. Giving partners their own price book and limited access to build quotes, or a fast quote request route, keeps channel deals moving while keeping direct pricing private.

                ## Milestones
                1. A partner price book holding the agreed partner prices for each tier.
                2. Partner access set up, either a portal or a request form with a response target.
                3. Partner quotes clearly marked and kept separate from direct quotes in reporting.
                4. Partner prices checked whenever list prices change.

                ## Notes
                The partner margin itself is a commercial decision for your channel and pricing owners. This project makes their prices quotable.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Partners can get a quote from their own price book through a portal or a request route with a response target, and partner quotes report separately."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Load the agreed partner prices into a separate partner price book"
                - "Choose portal access or a request form for partner quotes"
                - "Tag partner quotes so they report separately from direct ones"
                - "Check partner prices still match the current list prices @recurring(quarterly)"
            - name: Quoting professional services alongside software
              description: |-
                ## Purpose
                Implementation, training and consulting days are often added to a quote as one round number, which then fails to match the statement of work or the billing schedule. Setting services up as proper quote lines, with day rates, fixed packages and billing milestones, keeps the quote, the scope and the invoice in agreement.

                ## Milestones
                1. Standard services packages and day rates agreed with the services lead.
                2. Services lines set up with unit, rate and billing milestone.
                3. Rules that suggest services when certain products are quoted.
                4. Five quotes with services checked against their statements of work.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Services are quoted as defined lines with rates and billing milestones, and five quotes match their statements of work."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree standard services packages and day rates with the services lead"
                - "Create services quote lines with unit, rate and billing milestone"
                - "Add a rule suggesting onboarding services with new licences"
                - "Check five services quotes against their statements of work"
            - name: Inheriting a messy CPQ as a new administrator
              description: |-
                ## Purpose
                Inheriting hundreds of rules, no documentation and a backlog of complaints is the usual start for a new CPQ administrator. Spending the first weeks mapping what exists and what breaks most, before changing anything, avoids fixing one problem by creating three.

                ## Milestones
                1. An inventory of products, price books, rules, templates and integrations, with owners where known.
                2. The ten most common seller complaints collected and matched to causes.
                3. A list of risky changes to avoid until they are better understood.
                4. A ninety-day plan shared with sales operations and the sales leader.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An inventory of the CPQ set-up and a ninety-day plan built from the top ten complaints are shared with sales operations within forty-five days."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Export lists of products, price books, rules and templates"
                - "Ask five sellers which quoting problems cost them most time"
                - "Match each complaint to the rule, data or template behind it"
                - "Write and share a ninety-day plan before changing any rule"
            - name: Usage-based and consumption pricing in quotes
              description: |-
                ## Purpose
                Pricing on usage, credits or overage needs quotes that show commitments, rates per unit and what happens above the commitment, none of which fits a simple quantity times price line. Designing how these appear on the quote, and how they feed metering and billing, prevents disputes when the first overage invoice arrives.

                ## Milestones
                1. Each usage model written down: commitment, unit rate, tiers, overage and true-up.
                2. Quote lines and document wording that show the commitment and the overage rate.
                3. The data passed to metering and billing agreed with both teams.
                4. Three sample quotes run through to sample invoices.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Usage-based quotes show commitment and overage terms clearly, and three sample quotes produced matching sample invoices."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write down each usage model you sell with its commitment and overage"
                - "Design how the commitment and unit rates appear on the quote"
                - "Agree the fields passed from quote to metering and billing"
                - "Run three sample quotes through to sample invoices"
            - name: Amendment and renewal quotes from the live contract
              description: |-
                ## Purpose
                Mid-term upgrades and renewals built from blank quotes lose the customer's existing prices, end dates and discounts. Generating amendment and renewal quotes from the live contract record carries those details over, so the seller only changes what is actually changing.

                ## Milestones
                1. Contract or subscription records in the tool holding current lines, prices and end dates.
                2. Amendment quotes that start from the contract and show only the change.
                3. Renewal quotes generated a set number of days before each end date.
                4. Ten amendments and ten renewals reconciled against billing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Amendment and renewal quotes are generated from contract records, and ten of each reconcile with billing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check that contract records hold current lines, prices and end dates"
                - "Build an amendment quote from a live contract in the sandbox"
                - "Set renewal quotes to generate ahead of each end date"
                - "Reconcile ten amendments and ten renewals with billing"
            - name: Win rate by configuration and quote pattern
              description: |-
                ## Purpose
                Patterns hide in quote data that nobody looks at: bundles that win more often, revision counts that predict a loss, validity periods that close faster. Analysing a year of quotes against outcomes gives product, pricing and sales leaders evidence instead of opinion.

                ## Milestones
                1. A year of quotes joined to won and lost outcomes.
                2. Win rate compared by bundle, option set, revision count and quote age.
                3. Three findings written up with the size of the effect and the caveats.
                4. Each finding taken to the owner who can act on it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A year of quotes is analysed against outcomes, and three findings with effect sizes are presented to the owners who can act on them."
                cadence: cyclic
              tasks:
                - "Export a year of quotes with configuration, revisions and outcome"
                - "Compare win rate by bundle, revision count and quote age"
                - "Ask the agent to draft three findings with caveats from the tables"
                - "Refresh the analysis with the latest quarter's quotes @recurring(quarterly)"
            - name: CPQ technical debt and rule audit
              description: |-
                ## Purpose
                Mature CPQ set-ups accumulate rules that contradict each other, custom code nobody maintains and price books kept alive for one old customer. A yearly audit, scored for risk and effort, decides what to simplify before the tool becomes too fragile to change.

                ## Milestones
                1. An inventory of rules, custom code, price books and integrations with last use dates.
                2. Each item scored for risk, usage and cost to maintain.
                3. A simplification list agreed with sales operations and finance.
                4. The agreed items retired through the change process within two quarters.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly audit scores every rule, custom component and price book, and agreed simplifications are retired within two quarters."
                cadence: cyclic
              tasks:
                - "Export every rule, custom script and price book with its last use date"
                - "Score each item for risk, usage and maintenance cost"
                - "Agree a simplification list with sales operations and finance"
                - "Schedule the next CPQ technical debt audit @recurring(yearly)"
---

# Quotes & CPQ Management

This area is for anyone who sends prices to buyers: sellers on a team, the sales operations or CPQ administrator who keeps the quote tool working, and owners of smaller businesses who still quote from a spreadsheet. It starts with the foundations (an audit of recent quotes, a clean catalogue, approved price books, one template, and clear numbering, terms and tax rules), then the routines that keep quoting accurate, the skills behind bundles, pricing methods and subscription maths, the decisions about tools, guided selling and document design, the dated work of migration, go-live and launches, situations from a small business quote kit to multi-entity enterprises and partners, and finally specialist work on usage pricing, amendments and quote analytics.

What repeats is a Monday sweep of expiring quotes, a Thursday check that signed quotes reached billing, a monthly price book change window, release slot, accuracy spot check and metrics log, quarterly reviews of rules, templates and partner prices, and the yearly list price update and technical debt audit. The Product spec, Purchase decision, Operational checklist, Metrics log and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
