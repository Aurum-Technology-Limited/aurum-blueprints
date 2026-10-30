---
id: finance-accounting.sales-tax-vat-filing
name: Sales Tax & VAT Filing
description: "Registration when you cross the threshold, tax treatment mapped for everything you sell, reconciled returns filed and paid on time, and the cross-border, scheme and correction work trading businesses run into."
category: business
version: 1.0.0
tags: [finance-accounting, sales-tax-vat-filing, small-business, freelancer, founder, vat, gst, sales-tax]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - purchase-decision
    - remediation-plan
    - compliance-control
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Tax & VAT Filing
          description: "Registering for, calculating, reconciling and filing sales tax or VAT returns on time, including schemes, thresholds and corrections, for trading businesses."
          projects:
            - name: Taxable turnover tracker against the registration threshold
              description: |-
                ## Purpose
                Most tax authorities require registration once taxable sales pass a threshold over a rolling period, often twelve months, and the test is usually applied every month rather than once a year. A simple tracker that adds up the last twelve months of taxable turnover tells you weeks in advance when you are getting close, instead of discovering it after the deadline to register has passed.

                ## Milestones
                1. The current registration threshold and how your tax authority measures it written down, with the source page saved.
                2. A tracker showing taxable sales for each of the last twelve months and the rolling total.
                3. Income that does not count towards the threshold, such as exempt or out-of-scope receipts, identified and excluded on your accountant's advice.
                4. A warning level set at around 80 per cent of the threshold, with the action to take when it is reached.

                ## Notes
                Start from the **Metrics log** template. Some countries also apply a forward-looking test on expected sales in the coming weeks, so a single large contract can trigger registration on its own.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rolling twelve-month taxable turnover tracker exists, updated within the last month, with the current threshold and warning level written at the top."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the current registration threshold on your tax authority's website"
                - "Pull monthly sales totals for the last twelve months from your accounts"
                - "Mark any exempt or out-of-scope income that should not count"
                - "Update the rolling twelve-month taxable turnover figure @recurring(monthly:3)"
            - name: Sales tax or VAT registration application
              description: |-
                ## Purpose
                Registering is a form, but the answers on it fix your effective date, your filing periods and sometimes your scheme for years. Gathering the documents first and agreeing the effective date with your accountant means the application goes in once, on time, and the confirmation arrives before the first invoice that needs your tax number.

                ## Milestones
                1. The effective date of registration agreed, with the reason recorded.
                2. Business details, bank details, turnover estimates and activity descriptions gathered in one place.
                3. The application submitted through the tax authority's official channel, with the submission reference saved.
                4. The registration number, effective date and first return period recorded in your filing calendar.
                5. Your accounting software and invoice template updated with the new tax number.

                ## Notes
                Use only the tax authority's own website. Paid services that imitate government sites are common, and you never need a middleman to register.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A registration confirmation showing your tax number and effective date is saved, and the number appears in your software and on your invoices."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the effective date of registration with your accountant"
                - "Gather turnover estimates, bank details and activity descriptions"
                - "Submit the application on the tax authority's official website"
                - "Save the confirmation and registration number in the tax folder"
                - "Add the tax number to your software settings and invoice template"
            - name: Map of where your sales are taxable
              description: |-
                ## Purpose
                Selling across borders, or across states in a country such as the United States, can create tax obligations in places where you have no office or staff. Economic nexus rules, place of supply rules and digital services rules each decide where tax is due, and a one-page map of your sales by location against each location's test shows where you are already liable and where you are close.

                ## Milestones
                1. Sales for the last twelve months broken down by customer state, province or country.
                2. Each location's registration test, threshold or nexus rule noted with its official source.
                3. Every location classed as registered, required to register, close to the threshold or not relevant.
                4. A written decision, agreed with an adviser, for each location where registration is needed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A location map lists every state or country where you sell, each marked with its status and the decision taken, reviewed by an adviser."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export twelve months of sales with each customer's delivery location"
                - "Group the sales by state, province or country"
                - "Note the registration test for each location with meaningful sales"
                - "Ask the agent to draft a one-page table of each location's status"
                - "Ask your adviser to confirm which locations need registration now"
            - name: Tax treatment map for everything you sell
              description: |-
                ## Purpose
                Every product or service you sell falls into a category such as standard rate, a reduced rate, zero rate, exempt or outside the scope of tax, and the category decides both what you charge and what you can reclaim. Getting one line wrong repeats on every sale, so a written map of each item, its category and the guidance behind it is the cheapest error prevention in this area.

                ## Milestones
                1. A list of every product, service and income stream the business sells.
                2. Each item assigned a tax category with a reference to the official guidance relied on.
                3. Borderline items flagged and confirmed with your accountant.
                4. The map matched against the tax codes used in your sales system.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written tax treatment map covers every product and service sold, with guidance references and borderline items confirmed by an accountant."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every product, service and other income stream you sell"
                - "Assign each item a tax category from the official guidance"
                - "Flag the items where the treatment is unclear"
                - "Send the flagged items to your accountant for a view"
                - "Check the sales system applies the same category to each item"
            - name: Filing and payment calendar for every tax period
              description: |-
                ## Purpose
                Missing a filing deadline usually brings a penalty even when no tax is owed, and payment due dates can differ from filing dates. A calendar built from your registration confirmation, with each period end, filing deadline and payment date, plus a start-work date a fortnight earlier, turns the return from a surprise into a routine.

                ## Milestones
                1. Your period ends, filing deadlines and payment dates confirmed from the tax authority's records.
                2. Every date for the next twelve months entered in a calendar the whole team can see.
                3. A start-work reminder set two weeks before each filing deadline.
                4. Penalties and interest for late filing and late payment noted from official guidance.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar holds every filing and payment date for the next twelve months, each with a start-work reminder two weeks earlier."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your return periods in the registration confirmation or online account"
                - "Enter each filing and payment deadline in the shared calendar"
                - "Add a start-work reminder two weeks before every filing deadline"
                - "Add next year's filing periods and payment dates to the calendar @recurring(yearly)"
            - name: Online tax account and filing access
              description: |-
                ## Purpose
                Many tax authorities now expect returns to be filed online, and some require filing through compatible software rather than typing figures into a web form. Setting up the online account, the authorisation for your software and any agent access before the first return avoids a locked account or a lost code in deadline week.

                ## Milestones
                1. The business's online tax account set up, with recovery details stored securely.
                2. Your accounting or filing software authorised to submit returns, where your tax authority uses that route.
                3. Your accountant or bookkeeper given agent access through the official process, if they file for you.
                4. A backup access route in place, such as a second authorised user, so filing does not depend on one phone.

                ## Notes
                Never share your own sign-in with an accountant. The official agent process gives them their own access, which you can withdraw at any time.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The online tax account, software authorisation and any agent access all work, and a second authorised user or recovery route is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sign in to the tax authority's online account for the business"
                - "Connect your accounting software for direct filing if it is supported"
                - "Authorise your accountant through the official agent process"
                - "Add a second authorised user or a backup recovery method"
            - name: Filing frequency and accounting scheme choice
              description: |-
                ## Purpose
                Tax authorities often let smaller businesses choose between monthly, quarterly or annual filing, and between accounting for tax when invoices are issued or when cash is received. The choice changes your cash flow and your workload, so it is worth modelling with real figures before the first period starts rather than accepting the default.

                ## Milestones
                1. The filing frequencies and accounting bases available to you listed from official guidance.
                2. Last year's sales and purchases run through each option to show when tax would be paid.
                3. The effect on cash flow and admin time written in a short comparison.
                4. A choice made with your accountant and any application to the tax authority submitted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the available filing frequencies and accounting bases exists, with the chosen option recorded and any required application submitted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the filing frequencies and schemes your tax authority offers"
                - "Check which ones your turnover makes you eligible for"
                - "Model when tax would be paid under each option using last year's figures"
                - "Agree the choice with your accountant and apply if needed"
            - name: Tax rates mapped to return boxes in your software
              description: |-
                ## Purpose
                Software reports are only as good as the tax rates set up behind them. Each rate in your accounting system feeds one or more boxes on the return, and a missing or duplicated rate quietly puts figures in the wrong box. Checking the mapping once against the return form, and testing it on a sample period, means the software's return report can be trusted.

                ## Milestones
                1. Every tax rate in the software listed with the return box it feeds.
                2. Unused, duplicated or wrongly named rates archived or corrected.
                3. A sample period's transactions checked by hand against the software's return report.
                4. The mapping saved as a one-page reference for whoever prepares the return.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page mapping of each software tax rate to its return box exists, tested against one period's transactions with no unexplained differences."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the list of tax rates set up in your accounting software"
                - "Write the return box each rate should feed next to it"
                - "Archive the rates that are unused or duplicated"
                - "Test the software's return report against one period worked by hand"
            - name: Who prepares, reviews and submits each return
              description: |-
                ## Purpose
                Returns go wrong most often in the gaps between people: the bookkeeper assumes the accountant checks it, and the accountant assumes the owner approved it. Writing down who prepares the figures, who reviews them, who presses submit and who pays, with a named deputy for each, takes half an hour and closes those gaps.

                ## Milestones
                1. A named preparer, reviewer, submitter and payer for each return.
                2. A deputy named for each role to cover holidays and illness.
                3. An owner sign-off step written in, so nothing is submitted unseen.
                4. The roles note shared with everyone involved, including any outside accountant.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page roles note names the preparer, reviewer, submitter, payer and their deputies, and has been sent to everyone involved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down who currently prepares, checks and submits the return"
                - "Name a deputy for each of those roles"
                - "Add an owner sign-off step before submission"
                - "Send the roles note to your accountant and bookkeeper"
            - name: Collected tax set aside in a holding account
              description: |-
                ## Purpose
                Collected tax feels like income while it sits in the current account, which is why so many small businesses struggle to pay the return when it falls due. Moving the tax element of each week's sales into a separate holding account keeps the money ring-fenced and makes the payment a transfer rather than a scramble.

                ## Milestones
                1. A separate account opened or renamed for tax owed.
                2. A simple weekly estimate of tax collected less tax reclaimable.
                3. Weekly transfers made for eight weeks in a row.
                4. The holding balance compared with the return liability at the end of each period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The holding account balance has covered the full amount due on each of the last two returns without topping up from other funds."
                cadence: rolling
              tasks:
                - "Open or rename a separate account for tax owed"
                - "Set up a simple weekly estimate of net tax collected"
                - "Move the week's estimated net tax into the holding account @recurring(weekly:fri)"
                - "Compare the holding balance with the return figure at period end"
            - name: Tax control account reconciliation before each return
              description: |-
                ## Purpose
                The tax control account in your ledger should equal the amount you are about to declare, allowing for anything already paid or refunded. Reconciling the two before every return, and explaining each difference, catches posting errors, manual journals at the wrong rate and payments recorded against the wrong period.

                ## Milestones
                1. The ledger's tax control balance agreed to the draft return figure each period.
                2. Every difference explained and either corrected or documented.
                3. Payments to and refunds from the tax authority matched to the periods they settle.
                4. The reconciliation signed and saved with the return workings.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each of the last four returns has a signed reconciliation showing the control account agrees with the return, or every difference explained."
                cadence: rolling
              tasks:
                - "Find the tax control account in your chart of accounts"
                - "Reconcile the tax control account to the draft return @recurring(monthly:7)"
                - "Match each payment to the tax authority with the period it settles"
                - "Save the signed reconciliation with the return workings"
            - name: Return preparation checklist for each period
              description: |-
                ## Purpose
                A return is a dozen small steps: lock the period, check unusual items, run the report, reconcile, review, submit, pay and file. A checklist used every period, in the same order, lets anyone in the business prepare the return and turns the review into ticking rather than remembering.

                ## Milestones
                1. A written checklist running from period lock to filing confirmation.
                2. The checklist used for two consecutive returns and improved after each.
                3. Each completed checklist saved with that period's workings.
                4. The checklist tested by a deputy preparing one return.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive returns were prepared from the same written checklist, with each completed copy saved alongside the period's workings."
                cadence: rolling
              tasks:
                - "Create a return checklist from the operational checklist template"
                - "Write each step from locking the period to saving the receipt"
                - "Start the return checklist in the first week after period end @recurring(quarterly)"
                - "Improve one step on the checklist after each return"
            - name: Period-on-period variance review of the return
              description: |-
                ## Purpose
                Big swings in a return are not always wrong, but the tax authority's risk systems notice them and so should you. Comparing each box with the previous period and the same period last year, and writing a sentence on any large movement, catches missing sales, double-counted purchases and new transactions coded at the wrong rate.

                ## Milestones
                1. A comparison table of each return box against last period and the same period last year.
                2. A threshold set for which movements need an explanation.
                3. Every movement over the threshold explained in a sentence.
                4. Any error found corrected before submission.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each submitted return has a saved variance table with every movement above the agreed threshold explained in writing."
                cadence: rolling
              tasks:
                - "Set up a table comparing each return box across periods"
                - "Choose the size of movement that needs an explanation"
                - "Explain each large movement before the return is submitted @recurring(quarterly)"
                - "Ask the agent to draft the variance notes from the comparison table"
            - name: Tax payment made on time with cleared funds
              description: |-
                ## Purpose
                Late payment interest and surcharges can start the day after the due date, and electronic payments may take several working days to reach the tax authority. A payment routine with the right reference, the right account and funds sent early enough to clear protects the business from charges that buy nothing.

                ## Milestones
                1. The tax authority's payment methods, account details and reference format confirmed from official sources.
                2. The clearing time for your bank's payments written down.
                3. Payments sent early enough to clear for four consecutive periods.
                4. A direct debit or scheduled payment in place if your tax authority offers one.

                ## Notes
                Take payment details only from the tax authority's own website or your online account. Fake payment demands that look like tax letters are a common scam.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Payments for four consecutive returns reached the tax authority on or before the due date with the correct reference."
                cadence: rolling
              tasks:
                - "Confirm the payment details and reference format in your online tax account"
                - "Note how many working days your bank takes to clear the payment"
                - "Set up a direct debit if the tax authority offers one"
                - "Check the online tax account shows no overdue balance @recurring(monthly:16)"
            - name: Submitted return archive and workings pack
              description: |-
                ## Purpose
                If a question comes years later, you will need the figures as submitted, the report they came from and the reconciliation behind them. Saving the same set of files for every period, in a folder named by period, means any return can be explained in minutes, and most tax authorities expect these records to be kept for several years.

                ## Milestones
                1. A folder structure with one folder per tax period.
                2. Each period's submitted return, confirmation, source report, reconciliation and variance notes saved.
                3. The retention period your tax authority requires written in the top folder.
                4. A complete set of files for every period since registration.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every return since registration has a folder holding the submitted return, confirmation, source report and reconciliation."
                cadence: rolling
              tasks:
                - "Create one folder for each tax period since registration"
                - "Save the submission confirmation and payment receipt for the latest return"
                - "Write the required retention period in the top folder"
                - "File the return, source report and reconciliation in the period folder @recurring(quarterly)"
            - name: Valid tax invoice chase for reclaimed purchases
              description: |-
                ## Purpose
                Input tax can usually be reclaimed only with a valid tax invoice or equivalent evidence, and a receipt photo without the supplier's tax number may not qualify. Listing the purchases you plan to reclaim on that lack proper evidence, and chasing the suppliers before the return, protects the claim if it is ever checked.

                ## Milestones
                1. A list of purchases in the period that lack a valid tax invoice.
                2. Requests sent to each supplier for a proper invoice.
                3. Claims without evidence held back until it arrives, on your accountant's advice.
                4. The missing evidence list shorter at each period end than the one before.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each return has a missing evidence list, and no input tax is claimed on purchases that still lack a valid invoice."
                cadence: rolling
              tasks:
                - "Run a report of purchases with tax claimed but no attachment"
                - "Check the attached receipts show the supplier's tax number"
                - "Email suppliers for proper tax invoices on the missing items @recurring(monthly:14)"
                - "Hold back unevidenced claims until the invoice arrives"
            - name: Customer exemption and resale certificate register
              description: |-
                ## Purpose
                Customers who buy for resale, or who are exempt in their own right, may give you a certificate so you can sell to them without charging tax. In many US states and some other systems the seller carries the tax if the certificate is missing or expired at the time of sale, so a register with expiry dates protects every untaxed sale.

                ## Milestones
                1. Every customer sold to without tax listed with the reason.
                2. A valid certificate on file for each, with its expiry date.
                3. Untaxed sales without a certificate stopped, or charged tax until one arrives.
                4. Expiring certificates renewed before they lapse.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every customer invoiced without tax has a current certificate on file, and the register shows no expired certificates."
                cadence: rolling
              tasks:
                - "List customers invoiced without tax in the last twelve months"
                - "Check a valid certificate is on file for each one"
                - "Request missing certificates and charge tax until they arrive"
                - "Chase certificates due to expire in the next sixty days @recurring(monthly:24)"
            - name: New product and service tax treatment check
              description: |-
                ## Purpose
                New products, bundles and services reach the price list faster than anyone checks their tax treatment, and one wrongly coded line can repeat for months before a return review spots it. A short check each time something new goes on sale, against the tax treatment map, stops the error at the first invoice.

                ## Milestones
                1. A rule that nothing new is sold until its tax category is confirmed.
                2. Each new item checked against the treatment map and added to it.
                3. Bundles of items at different rates split or treated as your accountant advises.
                4. A monthly look at items added to the sales system.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every product or service added in the last six months appears in the tax treatment map with a confirmed category."
                cadence: rolling
              tasks:
                - "Agree that new items need a tax category before they go on sale"
                - "Add a tax category field to the new product form or price list"
                - "Check bundles that mix different rates with your accountant"
                - "Review items added to the sales system for their tax category @recurring(monthly:27)"
            - name: Rate and rule change watch
              description: |-
                ## Purpose
                Rates, thresholds and filing rules change with budgets, often with only weeks of notice before they take effect. Subscribing to the tax authority's updates and checking them each quarter means a change reaches the business before it reaches an invoice.

                ## Milestones
                1. Official update channels subscribed to for every place you are registered.
                2. A quarterly check of budget announcements and guidance changes.
                3. Each relevant change logged with its effective date and the action needed.
                4. Every logged action completed before its effective date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log shows a quarterly check for the last year, with every relevant change actioned before its effective date."
                cadence: rolling
              tasks:
                - "Subscribe to the tax authority's email updates for businesses"
                - "Start a change log with the date, the change and the action needed"
                - "Check official updates for rate, threshold and filing changes @recurring(quarterly)"
            - name: Annual sales tax health check
              description: |-
                ## Purpose
                Once a year it is worth stepping back from the period-by-period routine. A health check asks whether the scheme and filing frequency still suit you, whether errors crept in, whether new locations or products changed your obligations and whether the turnover tracker shows a threshold coming, and it usually finds at least one thing worth changing.

                ## Milestones
                1. Last year's returns, corrections and late items listed in one place.
                2. The scheme, filing frequency and registrations checked against this year's turnover.
                3. New locations, products and customer types reviewed for tax treatment.
                4. Three changes for the coming year agreed, each with an owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written health check is completed each year, with at least three agreed changes and an owner for each."
                cadence: cyclic
              tasks:
                - "Gather last year's returns, corrections and any penalty notices"
                - "Check your scheme and filing frequency still suit this year's turnover"
                - "Review new products, customers and locations for tax treatment"
                - "Run the annual sales tax health check with your accountant @recurring(yearly)"
            - name: How a VAT or GST return is built, box by box
              description: |-
                ## Purpose
                Most owners sign a return without knowing what each box means, which makes an obviously wrong figure hard to spot. Working through your own return form box by box, with a real period's figures, shows how sales, purchases, tax charged and tax reclaimed come together into the amount you pay or reclaim. Sales tax returns in US states are simpler, but the same tracing works.

                ## Milestones
                1. The official notes for each box on your return read.
                2. A real period's return traced from each box back to the transactions behind it.
                3. A one-page plain-language note of what goes in each box.
                4. Three questions about your own return answered by your accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains each box of your return in plain words and has been checked against a real period's figures."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the official guidance notes for your return form"
                - "Trace each box on last period's return back to the ledger"
                - "Write one plain sentence explaining each box"
                - "Take three questions about the return to your accountant"
            - name: Tax point and time of supply rules
              description: |-
                ## Purpose
                When a sale is dated decides which return it belongs on, and it is not always the invoice date: deposits, advance payments, continuous services and goods on approval can each move it. Learning your tax authority's tax point rules, with examples from your own business, stops sales landing in the wrong period.

                ## Milestones
                1. The basic and actual tax point rules for your tax authority written in your own words.
                2. Your common transaction types listed with the tax point each one follows.
                3. Deposits and advance payments checked for the date they create.
                4. Two past period-end transactions checked against the rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note lists your common transaction types with the tax point each follows, checked against two real period-end transactions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official guidance on tax points or time of supply"
                - "List the sale types your business makes and when each is paid"
                - "Note the tax point each sale type creates"
                - "Check two transactions near the last period end against the rules"
            - name: Evidence rules for reclaiming tax on purchases
              description: |-
                ## Purpose
                Without the right evidence, tax paid on purchases may not be reclaimable at all, even when the purchase was genuine. Knowing what a valid tax invoice must show, what simplified invoices cover and what counts for imports and reverse charge purchases means you ask suppliers for the right document the first time.

                ## Milestones
                1. The details a valid tax invoice must show listed from official guidance.
                2. Rules for simplified invoices and low-value purchases noted.
                3. Evidence needed for imports and reverse charge purchases noted.
                4. A one-page purchase invoice checklist shared with whoever does the bookkeeping.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page purchase invoice evidence checklist, based on official guidance, is in use by whoever codes purchases."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the official list of what a valid tax invoice must show"
                - "Note the rules for simplified invoices and low-value receipts"
                - "Check what evidence import and reverse charge purchases need"
                - "Share a one-page evidence checklist with your bookkeeper"
            - name: Blocked input tax on cars, entertainment and private use
              description: |-
                ## Purpose
                Some tax on business spending can never be reclaimed, or only in part, and the rules for cars, fuel, client entertainment, staff events and mixed personal use catch out many small businesses. Learning which costs are blocked or restricted where you are registered stops over-claiming, a frequent finding when returns are checked.

                ## Milestones
                1. Blocked and restricted cost categories listed from official guidance.
                2. Your own spending in those categories identified from last year's ledger.
                3. Software tax codes for these costs checked so tax is not reclaimed in error.
                4. Mixed-use costs given a documented business proportion agreed with your accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the blocked and restricted cost categories that apply to you, with matching software codes checked and mixed-use proportions documented."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official guidance on costs where tax cannot be reclaimed"
                - "Find last year's spending on cars, fuel, entertainment and gifts"
                - "Check those costs are not coded to reclaim tax in full"
                - "Agree a business proportion for mixed-use costs with your accountant"
            - name: Place of supply rules for cross-border services
              description: |-
                ## Purpose
                Services sold to a customer in another country may be taxed where you are, where the customer is, or not at all, depending on whether the customer is a business or a consumer and what the service is. Learning the general rule and the main exceptions for your kind of service decides whether you charge tax, apply the reverse charge or need to register abroad.

                ## Milestones
                1. The general place of supply rule for business and consumer customers written down.
                2. Exceptions relevant to your services, such as land, events or digital services, noted.
                3. Each overseas customer classed as a business or a consumer, with the evidence held.
                4. The correct invoice wording for reverse charge sales confirmed with your accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note shows how place of supply rules apply to each service you sell abroad, with every overseas customer classified and the evidence filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your tax authority's guidance on place of supply for services"
                - "List the services you sell to customers outside the country"
                - "Note which exceptions could apply to each service"
                - "Ask your accountant which services need registration abroad"
            - name: Import tax on goods and postponed accounting
              description: |-
                ## Purpose
                Goods arriving from abroad usually attract import tax at the border, paid by the importer or by the courier and then recharged, often with a fee. Learning how import tax is paid, what evidence lets you reclaim it and whether your tax authority allows it to be accounted for on the return instead of paid upfront can improve cash flow on every shipment.

                ## Milestones
                1. The way import tax is charged and paid on your shipments understood.
                2. The import evidence document your tax authority accepts for reclaims identified.
                3. Any postponed or deferred accounting option checked for eligibility.
                4. Last quarter's imports matched to their evidence and the return entries.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every import in the last quarter is matched to valid import evidence and correctly reflected on the return."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the imports received last quarter and who paid the tax on each"
                - "Find the official import evidence document for reclaiming tax"
                - "Check whether postponed accounting is available to your business"
                - "Ask your customs broker or courier how they report import tax to you"
            - name: Deposits, discounts, vouchers and bad debt relief
              description: |-
                ## Purpose
                Deposits, early payment discounts, gift vouchers and customers who never pay all change the tax due, and each follows its own rule. Learning how your tax authority treats them, and in particular whether you can recover tax already paid over on invoices that went bad, can put real money back in the business.

                ## Milestones
                1. The treatment of deposits and advance payments noted.
                2. The rules for the discounts and vouchers you offer written down.
                3. The conditions for bad debt relief, including any waiting period, noted from official guidance.
                4. Old unpaid invoices checked for a possible relief claim with your accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note covers how deposits, discounts, vouchers and bad debts are treated, and any eligible bad debt relief claim is prepared or ruled out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official guidance on deposits, discounts and vouchers"
                - "Note the conditions for bad debt relief and any waiting period"
                - "List unpaid invoices that may qualify for relief"
                - "Agree with your accountant whether to make a relief claim"
            - name: Marketplace and platform collection rules
              description: |-
                ## Purpose
                Marketplaces and app stores in many countries and US states now collect and pay the tax on sales they facilitate, which changes what you report and what you must not charge twice. Learning which of your sales channels collect tax for you, and how those sales appear on your own return, prevents both double counting and missed reporting.

                ## Milestones
                1. Each sales channel listed with whether it collects tax on your behalf.
                2. Each platform's tax report downloaded for the last period.
                3. How marketplace-collected sales appear on your return confirmed.
                4. Your own shop's sales kept separate from marketplace sales in the books.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each sales channel is recorded as collecting tax or not, and the last return treats marketplace sales according to that record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every marketplace, app store and platform you sell through"
                - "Check each platform's help pages for whether it collects tax"
                - "Download each platform's tax report for the last period"
                - "Ask your accountant how marketplace-collected sales go on your return"
            - name: Flat rate or simplified scheme comparison on real numbers
              description: |-
                ## Purpose
                Simplified schemes, where tax is paid as a fixed percentage of turnover rather than worked out line by line, can save hours and sometimes money, but they can also cost money in a year when you buy a lot or invest heavily. Running a year of your real figures through the scheme and through normal accounting shows the true difference before you join or leave.

                ## Milestones
                1. The simplified schemes available to you and their eligibility rules listed.
                2. Twelve months of real sales and purchases run through each option.
                3. The difference in tax paid and admin hours written down.
                4. A decision to join, stay or leave recorded with a review date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of a full year under normal accounting and each eligible simplified scheme exists, with the decision and its review date recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which simplified schemes your turnover and trade allow"
                - "Run last year's figures through normal accounting and each scheme"
                - "Estimate the admin hours each scheme would save"
                - "Record the decision and the date to review it"
            - name: Sales tax calculation software decision
              description: |-
                ## Purpose
                Handling rates for dozens of states or countries by hand breaks down quickly, especially where local rates vary by delivery address. Tax calculation services plug into shops and billing systems to work out the rate, track thresholds and sometimes file returns, but they cost money and need setting up properly, so comparing two or three against your real order volume shows whether one earns its fee.

                ## Milestones
                1. Your locations, order volume and systems written down as requirements.
                2. Two or three calculation services compared on coverage, cost and integration.
                3. One trial run on a sample of real orders.
                4. A decision recorded to buy, wait or stay manual, with the reason.

                ## Notes
                Start from the **Purchase decision** template. Software calculates the tax; you remain responsible for registering and for what is filed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three tax calculation services are scored against the same requirements, with a buy, wait or stay manual decision recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down your sales locations, monthly order volume and shop systems"
                - "Shortlist three tax calculation services that integrate with your systems"
                - "Test one on a sample of real past orders"
                - "Record the decision using the purchase decision template"
            - name: Correcting errors found in past returns
              description: |-
                ## Purpose
                Errors in filed returns are common, and most tax authorities let small errors be corrected on the next return while larger ones need a separate disclosure. Correcting promptly, and by the right route, usually limits penalties, and a voluntary disclosure is generally treated better than an error the authority finds itself.

                ## Milestones
                1. Each error described with the periods affected and the amount of tax involved.
                2. The correction route agreed with your accountant from the tax authority's rules.
                3. The correction made on the next return or disclosed separately.
                4. The cause of each error fixed so it does not repeat.

                ## Notes
                Start from the **Remediation plan** template. Speak to your accountant before disclosing, since the method can affect penalties and interest.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every known error is quantified, corrected through the route your accountant agreed and its cause fixed, with the correction evidence filed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each known error with the periods and tax amount involved"
                - "Check the tax authority's limit for correcting errors on the next return"
                - "Agree the correction route with your accountant"
                - "Submit the correction and save the confirmation"
                - "Change the process step that caused each error"
            - name: Voluntary registration below the threshold
              description: |-
                ## Purpose
                Registering before you have to can let a business reclaim tax on its costs and look established to larger customers, but it also adds tax to prices charged to consumers and brings filing duties. Founders selling mainly to registered businesses often gain, while those selling to the public often do not, so the decision deserves a written comparison.

                ## Milestones
                1. Your customer mix split between registered businesses and consumers.
                2. Reclaimable tax on the next year's expected costs estimated.
                3. The effect on consumer prices and admin time written down.
                4. A decision to register now or wait, with the trigger for revisiting it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of registering now versus waiting exists, with a decision and a clear trigger for revisiting it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Split last year's sales between business and consumer customers"
                - "Estimate the tax you could reclaim on the next year's costs"
                - "Work out how prices to consumers would change"
                - "Discuss the comparison with your accountant and record the decision"
            - name: Five-day return turnaround after period end
              description: |-
                ## Purpose
                Waiting until the week of the deadline to start the return leaves no time to fix what the reconciliation finds. Getting the return prepared, reviewed and submitted within five working days of period end usually comes down to three things: coding finished during the period, evidence chased monthly and a checklist everyone follows.

                ## Milestones
                1. The time each return currently takes measured from period end to submission.
                2. The three biggest causes of delay identified.
                3. A fix in place for each cause of delay.
                4. Two consecutive returns submitted within five working days of period end.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two consecutive returns were submitted within five working days of period end, with the time taken recorded for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record how many days the last two returns took from period end"
                - "List the three steps that caused the longest waits"
                - "Fix one cause of delay before the next period ends"
                - "Time the next return against the five-day target"
            - name: Absorbing or passing on tax when you register
              description: |-
                ## Purpose
                Prices to consumers usually have to include tax, so registering means either raising prices or accepting a smaller margin, while business customers who can reclaim the tax barely notice. Deciding product by product, with the margin worked out both ways, avoids both a sudden price jump and a quiet loss of profit.

                ## Milestones
                1. Each product or service tagged by whether buyers are mostly consumers or registered businesses.
                2. The margin calculated with tax absorbed and with tax added on top.
                3. A pricing decision made for each product line.
                4. Price changes announced to customers before the registration date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pricing decision is recorded for each product line with margins worked out both ways, and any price change was announced before registration."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tag each product by whether buyers are mostly consumers or businesses"
                - "Work out the margin with tax absorbed and with tax added"
                - "Decide the new price for each product line"
                - "Ask the agent to draft a short price change notice for customers"
            - name: Asking the tax authority for a written ruling
              description: |-
                ## Purpose
                Grey areas, such as a new kind of product, a bundled service or an unusual contract, can be argued either way, and guessing wrong repeats on every sale. Many tax authorities will give a written ruling or clearance on a specific question, and having one on file settles the treatment for you and for anyone checking later.

                ## Milestones
                1. The question written precisely, with the facts and the treatments in doubt.
                2. The official ruling or clearance process and what it requires checked.
                3. The request submitted, or a reasoned decision not to ask recorded with your accountant.
                4. The answer applied and filed with the tax treatment map.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written ruling is received and applied, or a decision not to request one is recorded with reasons, and either is filed with the tax treatment map."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the uncertain question in one paragraph with the facts"
                - "Check the tax authority's process for written rulings"
                - "Decide with your accountant whether to request a ruling"
                - "Apply the answer and add it to the tax treatment map"
            - name: First return after registration
              description: |-
                ## Purpose
                The first return is the one most likely to go wrong: the period may be longer or shorter than usual, sales before the effective date must be left out, and tax on some costs bought before registration may be reclaimable within time limits. Preparing it with these points listed, and with your accountant reviewing it before submission, sets the pattern for every return after.

                ## Milestones
                1. The first period's start and end dates confirmed.
                2. Sales before the effective date excluded and sales after it included.
                3. Pre-registration purchases checked against the reclaim rules and time limits.
                4. The return reviewed by your accountant, then submitted and paid on time.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first return is submitted and paid by its deadline, with pre-registration claims supported and the accountant's review recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the first return period's dates in your online account"
                - "List purchases made before registration that may qualify for a reclaim"
                - "Check sales either side of the effective date fall in the right period"
                - "Send the draft first return to your accountant for review"
            - name: Year-end tax reconciliation to the annual accounts
              description: |-
                ## Purpose
                Turnover declared on the year's returns should agree with turnover in the annual accounts, and tax authorities compare the two. Reconciling the year's returns to the accounts at year end, and explaining differences such as exempt income, timing or errors, catches problems while they can still be corrected on a current return.

                ## Milestones
                1. The year's returns totalled box by box.
                2. Sales and purchases from the returns compared with the annual accounts.
                3. Every difference explained or corrected.
                4. The reconciliation saved with the year-end accounts file.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each financial year has a saved reconciliation agreeing the year's returns to the annual accounts, with every difference explained."
                cadence: cyclic
              tasks:
                - "Total each box across all returns filed for the financial year"
                - "Compare return turnover with sales in the draft annual accounts"
                - "Explain each difference or correct it on the next return"
                - "Send the reconciliation to your accountant with the year-end pack @recurring(yearly)"
            - name: Tax rate change cut-over day
              description: |-
                ## Purpose
                Governments change rates with a set effective date, and transactions that span the date need careful handling: invoices raised before, deliveries after, deposits taken in advance and subscriptions billed across it. A cut-over plan for the day itself avoids charging the old rate on new sales or the new rate on old ones.

                ## Milestones
                1. The effective date and transitional rules noted from official guidance.
                2. Software, price lists, tills and website prices ready to switch on the day.
                3. Open orders, deposits and subscriptions spanning the date listed and their treatment agreed.
                4. The first return after the change checked for both rates in the right boxes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every system switched to the new rate on its effective date, spanning transactions followed the guidance and the next return was checked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note the effective date and transitional rules from official guidance"
                - "List every system that holds a tax rate, from tills to the website"
                - "Schedule the rate change in each system for the effective date"
                - "List open orders and deposits that span the change date"
            - name: Move to digital filing and record rules
              description: |-
                ## Purpose
                Several tax authorities are moving businesses to digital record keeping and software-only filing, with the UK's Making Tax Digital one example. Moving before the mandatory date, with records kept in compatible software and the digital links from any spreadsheets to the return checked, avoids a rushed switch in a filing month.

                ## Milestones
                1. Whether and when the digital rules apply to your business confirmed from official guidance.
                2. Records moved into compatible software or linked digitally from spreadsheets.
                3. One return filed through the new route ahead of the mandatory date.
                4. Manual steps such as retyping figures removed from the process.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A return has been filed through a compatible digital route before the mandatory date, with no figures retyped by hand."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check the official guidance for when digital filing rules apply to you"
                - "List every step where figures are currently copied or retyped"
                - "Choose compatible software or a bridging tool for spreadsheets"
                - "File one return through the new route before the mandatory date"
            - name: First export of goods with zero-rating evidence
              description: |-
                ## Purpose
                Exports of goods are often zero-rated, but only when you hold proof that the goods left the country within the time allowed. Planning the evidence for the first overseas shipment, from the commercial invoice to the export declaration and shipping records, means the zero rate survives any later check.

                ## Milestones
                1. The evidence your tax authority requires for zero-rated exports listed.
                2. The freight forwarder or courier asked which documents they will provide.
                3. The first shipment's evidence filed against its sales invoice.
                4. A routine set for filing export evidence on every later shipment.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first export's sales invoice is filed with proof of export that meets the tax authority's published evidence rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official guidance on evidence for zero-rated exports"
                - "Ask your courier or forwarder which export documents they provide"
                - "File the export evidence against the first shipment's sales invoice"
                - "Set up a folder for export evidence on every future shipment"
            - name: Late registration catch-up after missing the threshold
              description: |-
                ## Purpose
                Discovering that you should have registered months ago is stressful, but it is a common situation and the sooner it is dealt with the smaller the penalty usually is. The work is to establish the date you should have registered, register from that date, work out the tax due on past sales and agree with an adviser how to approach customers and the tax authority.

                ## Milestones
                1. The date registration should have taken effect worked out from the turnover figures.
                2. An adviser engaged before contacting the tax authority.
                3. Registration completed from the correct date.
                4. Tax on past sales calculated, with a payment plan requested if it cannot be paid at once.
                5. Business customers approached about corrected invoices, on your adviser's advice.

                ## Notes
                Start from the **Remediation plan** template. Do not ignore letters from the tax authority while you prepare; reply and say an adviser is helping.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Registration is in place from the correct date and past tax is calculated and either paid or under an agreed payment plan, with an adviser involved."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work out the month your taxable turnover first passed the threshold"
                - "Book a call with an accountant who handles late registrations"
                - "Register from the correct effective date on the adviser's advice"
                - "Calculate the tax due on sales since that date"
                - "Ask the tax authority for a payment plan if the amount is unaffordable"
            - name: Freelancer billing clients in other countries
              description: |-
                ## Purpose
                Freelancers working for overseas clients often find that no tax is charged at all, or that the client accounts for it under the reverse charge, but only if the right evidence and invoice wording are in place. A short set-up for each country you bill, with each client's business status recorded and the return boxes known, keeps a mostly international client list simple.

                ## Milestones
                1. Each overseas client listed with country and business or consumer status.
                2. Evidence of business status, such as a tax registration number, held for each business client.
                3. Invoice wording for overseas clients confirmed with your accountant.
                4. Overseas sales shown in the correct return box each period.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every overseas client has its status and evidence recorded, and the last return shows overseas sales in the boxes your accountant confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your overseas clients with their country"
                - "Ask each business client for their tax registration number"
                - "Confirm the invoice wording for overseas clients with your accountant"
                - "Check which return box your overseas sales belong in"
            - name: Founder selling digital services to consumers abroad
              description: |-
                ## Purpose
                Founders selling software, apps, courses or downloads to consumers abroad can owe tax in the customer's country from an early sale, with no threshold at all in some places. One-stop or simplified schemes, such as the EU's One Stop Shop, let you declare several countries on one return, but you must collect evidence of where each customer is.

                ## Milestones
                1. Sales to consumers abroad totalled by country for the last year.
                2. Countries where registration is due identified with an adviser.
                3. A one-stop or simplified scheme registration made where one is available.
                4. The customer location evidence each scheme requires collected at checkout.
                5. Scheme returns filed on the scheme's own calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Registrations are in place for every country where your digital sales are taxable, location evidence is captured at checkout and scheme returns are filed on time."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export last year's consumer sales by customer country"
                - "Ask an adviser which countries require registration for digital services"
                - "Check your checkout captures the location evidence the scheme requires"
                - "Review the country list and scheme registrations @recurring(yearly)"
            - name: Online shop selling into many states or countries
              description: |-
                ## Purpose
                An online shop shipping to many US states or EU countries can cross economic nexus or distance selling thresholds without anyone noticing, since each place counts sales in its own way. A monthly check of sales by destination against each threshold, with registrations made before they are due, keeps a growing shop compliant as it scales.

                ## Milestones
                1. Sales by destination state or country reported each month.
                2. Each destination's threshold and counting period noted.
                3. Registrations made in each place before its threshold is passed.
                4. Destination rates applied at checkout wherever you are registered.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sales by destination are checked monthly against each threshold, and every registration was made before its threshold was crossed."
                cadence: rolling
              tasks:
                - "Set up a monthly report of sales by destination"
                - "Note each destination's threshold and how it counts sales"
                - "Check sales by destination against each threshold @recurring(monthly:11)"
                - "Register in a destination once sales approach its threshold"
            - name: Mixed-rate till sales in shops and hospitality
              description: |-
                ## Purpose
                Cash businesses such as cafés, market stalls and corner shops often sell items at different rates through one till, so the tax has to be worked out from the till's rate split rather than from invoices. A till set up by rate, checked regularly against what was actually sold, and any retail calculation scheme your tax authority offers, gives the return a figure you can defend.

                ## Milestones
                1. Every till button or product code assigned the right rate from the treatment map.
                2. The till's end-of-day report showing sales split by rate.
                3. A monthly sample of sales checked against the rate the till applied.
                4. Any retail or simplified calculation scheme checked for suitability with your accountant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every till item carries a rate from the treatment map, and three monthly samples of the rate split agree with the products actually sold."
                cadence: rolling
              tasks:
                - "Print the till's product list with the tax rate on each item"
                - "Correct any till items whose rate disagrees with the treatment map"
                - "Check a sample of the till's rate split against products sold @recurring(monthly:19)"
                - "Ask your accountant whether a retail scheme suits your business"
            - name: Final return and deregistration when closing or selling
              description: |-
                ## Purpose
                Closing or selling the business ends the registration but not the obligations: there is a final return, possibly tax on stock and assets kept, and records to keep for years. If the business is sold as a going concern, special rules may mean no tax is charged on the sale, but only when conditions are met, so an adviser should confirm before contracts are signed.

                ## Milestones
                1. The deregistration deadline and process confirmed from official guidance.
                2. Stock and assets on hand at closure listed, with their tax position checked by an adviser.
                3. The final return filed and paid.
                4. Records archived for the required retention period.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Deregistration is confirmed, the final return is filed and paid, and records are archived for the required period."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the deadline for telling the tax authority about closure or sale"
                - "List the stock and assets you will keep when trading stops"
                - "Ask an adviser whether the sale qualifies as a going concern transfer"
                - "File the final return and save the deregistration confirmation"
            - name: Partial exemption calculation and annual adjustment
              description: |-
                ## Purpose
                Businesses that make both taxable and exempt sales, such as a landlord with a trading arm or a financial services firm with consultancy income, can usually reclaim only part of the tax on shared costs. A common method splits it by the ratio of taxable to total supplies, with a provisional figure each period and an adjustment at year end, and getting it wrong can mean over-claiming for years.

                ## Milestones
                1. Costs split into those for taxable sales, exempt sales and shared overheads.
                2. The recovery percentage calculated by the method your tax authority allows.
                3. Any de minimis or simplified test checked with an adviser.
                4. The annual adjustment calculated and included on the right return.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The annual partial exemption adjustment is calculated, reviewed by an adviser and included on the correct return each year."
                cadence: cyclic
              tasks:
                - "Tag purchases as taxable, exempt or shared in the ledger"
                - "Calculate the provisional recovery percentage from last year"
                - "Check any de minimis test with your adviser"
                - "Run the annual partial exemption adjustment @recurring(yearly)"
            - name: Capital goods adjustments on property and major equipment
              description: |-
                ## Purpose
                Large purchases such as a building, a major fit-out or an expensive computer system can carry tax recovery that must be adjusted over several years if their use shifts between taxable and exempt activity. A schedule of qualifying assets with their initial recovery and annual use stops a later change of use from creating an unexpected bill.

                ## Milestones
                1. Assets that fall under capital goods or adjustment rules identified with an adviser.
                2. Each asset's cost, tax and initial recovery recorded in a schedule.
                3. The year's taxable use of each asset recorded.
                4. Any adjustment calculated and included on the correct return.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A capital goods schedule lists every qualifying asset with its initial recovery and annual use, and each year's adjustment is on the correct return."
                cadence: cyclic
              tasks:
                - "Ask your adviser which assets fall under adjustment rules"
                - "Record each qualifying asset's cost, tax and initial recovery"
                - "Note any change of use, such as letting part of a building"
                - "Update the capital goods adjustment schedule for the year @recurring(yearly)"
            - name: Group registration for related companies
              description: |-
                ## Purpose
                Related companies that trade with each other can, in many countries, register as a single tax group so that sales between them are ignored and one return is filed. Grouping saves admin and can help cash flow, but it makes every member jointly liable for the group's tax, so it is a decision for founders with several companies to take with an adviser.

                ## Milestones
                1. The companies under common control and the sales between them listed.
                2. Eligibility and joint liability rules checked from official guidance.
                3. The admin and cash flow effect of grouping compared with separate filing.
                4. A decision to group or stay separate recorded after advice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of group and separate registration for the related companies exists, with the decision recorded after advice."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the related companies and the sales between them"
                - "Read the official eligibility rules for group registration"
                - "Compare filing effort and cash flow for group and separate returns"
                - "Record the decision after discussing joint liability with your adviser"
            - name: Sales tax controls and procedures manual
              description: |-
                ## Purpose
                As the business grows and other people prepare the returns, the knowledge in the owner's head needs to be on paper. A short manual covering the tax treatment map, the return checklist, the review and approval steps, the controls that catch errors and the evidence kept each period lets a new bookkeeper, or a buyer's due diligence team, see that the process works.

                ## Milestones
                1. Each control in the return process written down with its owner and the evidence it leaves.
                2. The treatment map, checklist and roles note gathered into one manual.
                3. The manual tested by someone preparing a return from it alone.
                4. A yearly review of the manual in the calendar.

                ## Notes
                Start from the **Compliance control** template for each control in the manual.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A procedures manual lists each control, owner and evidence, and a second person has prepared one return from it without help."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the controls you rely on, from reconciliation to sign-off"
                - "Write each control with its owner and the evidence it leaves"
                - "Ask the agent to assemble the manual from your existing notes and checklists"
                - "Have a second person prepare one return from the manual alone"
                - "Review the manual against the latest returns and rule changes @recurring(yearly)"
---

# Sales Tax & VAT Filing

This area is for owners, freelancers and founders who charge sales tax, VAT or GST, and for the bookkeepers who prepare their returns. It starts with the foundations (watching the registration threshold, registering, mapping where and how your sales are taxed, and a filing calendar), moves through the routines that make each return reliable, the rules worth learning properly and the decisions about schemes, software and corrections, then dated moments such as the first return and a rate change, situations from late registration to selling digital services abroad, and finally the specialist work of partial exemption, capital goods and group registration.

What repeats is a weekly transfer into the tax holding account, a monthly threshold update, control account reconciliation and invoice evidence chase, a quarterly return checklist, variance review and rule watch, and a yearly health check and reconciliation to the annual accounts. The Metrics log, Operational checklist, Purchase decision, Remediation plan and Compliance control templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
