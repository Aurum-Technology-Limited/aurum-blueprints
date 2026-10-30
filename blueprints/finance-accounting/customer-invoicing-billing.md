---
id: finance-accounting.customer-invoicing-billing
name: Customer Invoicing & Billing
description: "Invoices that carry the right details, terms and tax, go out the day the work is done, and are backed by clean credit notes, statements and recurring billing runs."
category: business
version: 1.0.0
tags: [finance-accounting, customer-invoicing-billing, small-business, freelancer, agency, invoicing, credit-notes, recurring-billing]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - course
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Customer Invoicing & Billing
          description: "Raising accurate invoices, recurring billing, credit notes and statements on time, with the right terms and tax, for service and product businesses."
          projects:
            - name: Invoice content requirements checklist
              description: |-
                ## Purpose
                Tax authorities in most countries set out what a valid invoice must show, and a missing tax number, supply date or customer address can let a customer refuse to pay or stop them reclaiming tax. Writing your own checklist of required fields, confirmed with your accountant, means every template and every manual invoice can be checked against one page.

                ## Milestones
                1. The invoice rules for your country, and for any country you bill into, found on the tax authority's website.
                2. A one-page list of required fields, from your legal name and tax number to the tax amount at each rate.
                3. The list checked by your accountant, with any corrections made.
                4. Your current invoice template compared with the list and every gap noted.

                ## Notes
                Simplified invoices for small amounts often need fewer fields, but only below a threshold the tax authority sets. Check the threshold before relying on one.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A required-fields checklist confirmed by your accountant exists, and the current template has been checked against it with gaps listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the invoice requirements on your tax authority's website"
                - "List every field a valid invoice must carry"
                - "Send the list to your accountant to confirm"
                - "Mark the gaps in your current invoice template"
            - name: Invoice and credit note numbering rules
              description: |-
                ## Purpose
                Auditors and tax inspectors expect invoice numbers to run in one unbroken sequence, and gaps or duplicates invite questions about missing sales. Deciding the format once, with a separate series for credit notes and a rule for numbers raised in error, keeps the sequence explainable for years.

                ## Milestones
                1. A numbering format chosen, such as a prefix, the year and a running number.
                2. A separate series agreed for credit notes.
                3. A written rule that a number raised in error is kept and cancelled, never reused.
                4. The billing software set to issue numbers automatically in the new format.
                5. The last number of the old series and the first of the new recorded with the date.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Invoice and credit note series are set in the software, with the cancelled-number rule and the switchover point written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the last invoice number you issued and check the sequence for gaps"
                - "Choose a format for invoice and credit note numbers"
                - "Turn on automatic numbering in the billing software"
                - "Write the rule for cancelled numbers in the billing notes"
            - name: Standard payment terms for new work
              description: |-
                ## Purpose
                Freelancers and small firms often inherit terms from whatever the first client asked for, then find half their customers on 60 days. Choosing one standard term, the exceptions you will accept and the wording that goes on every invoice and quote gives you a default that only changes when you decide it should.

                ## Milestones
                1. Your current terms listed customer by customer, with the average number of days given.
                2. One standard term chosen, such as 14 or 30 days from the invoice date.
                3. Any late payment interest or fee your country allows confirmed with an adviser before it is quoted.
                4. The exact terms wording added to the invoice template, quotes and engagement letters.
                5. A short list of approved exceptions, each with a reason.

                ## Notes
                A due date printed as a date is clearer than a phrase like net 30. Most billing tools can print both.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A standard payment term and its exact wording are on the template, quotes and engagement letters, with approved exceptions listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each customer's current payment terms in a sheet"
                - "Decide the standard term for new customers"
                - "Ask your adviser what late payment charges the law allows"
                - "Update the terms wording on the invoice template and quote form"
            - name: Branded invoice template with payment details
              description: |-
                ## Purpose
                An invoice that looks like it came from a real business, shows how to pay at a glance and tells the customer which reference to quote gets paid faster and generates fewer emails. Building one master template, with logo, bank details and a payment reference, removes the temptation to edit last month's PDF.

                ## Milestones
                1. A master template carrying every field on your required-fields checklist.
                2. Bank details, any payment link and the remittance reference shown in a box near the total.
                3. A test invoice sent to yourself and checked on a phone and on paper.
                4. Old templates and edited PDFs removed from shared folders so only the master remains.

                ## Notes
                Ask customers to quote the invoice number as the payment reference. It turns matching the bank feed into a two-second job.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single master template with all required fields and a payment box is live in the billing software, and old templates have been removed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect your logo, legal name, tax number and bank details in one note"
                - "Build the master template in your billing software"
                - "Send a test invoice to yourself and read it on a phone"
                - "Remove old invoice templates from shared folders"
            - name: Customer billing records clean-up
              description: |-
                ## Purpose
                Invoices sent to a contact who left last year, or made out to a trading name instead of the legal entity, are among the commonest reasons payment stalls. Cleaning every active customer record once, with legal name, billing address, accounts payable email, tax number and purchase order rules, fixes those delays at source.

                ## Milestones
                1. A list of every customer billed in the last twelve months.
                2. Each record holding the legal entity name, billing address and a shared accounts payable email rather than one person's inbox where possible.
                3. Customer tax numbers recorded wherever the invoice must show them.
                4. Customers that require purchase order numbers flagged in their record.
                5. Duplicate customer records merged.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every customer billed in the last year has a checked legal name, billing email, tax number where needed and a purchase order flag."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the customer list from your billing software"
                - "Email each active customer to confirm their billing details"
                - "Merge duplicate customer records"
                - "Review bounced billing emails and contact changes @recurring(quarterly)"
            - name: Tax treatment map for what you sell
              description: |-
                ## Purpose
                Charging the wrong rate of sales tax or VAT is expensive to fix, because every affected invoice needs a credit note and a reissue. A simple map of what you sell, which tax code each item takes and which customer types change the answer, agreed with your accountant, lets anyone raising an invoice pick the right code first time. Filing the return itself belongs to a separate area.

                ## Milestones
                1. Every product and service you sell listed with the tax code it takes.
                2. The customer types that change the treatment noted, such as customers abroad, charities or exporters.
                3. The map reviewed and signed off by your accountant.
                4. Tax codes on the billing system's saved items matching the map.

                ## Notes
                This is a record of advice, not advice. Let your accountant or tax adviser decide the treatment, and write down what they said and when.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of products and services with tax codes, signed off by your accountant, matches the codes set in the billing system."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List everything you sell with the tax rate you charge today"
                - "Note the customer types that might change the tax treatment"
                - "Book a call with your accountant to confirm the map"
                - "Re-check the tax treatment map with your accountant @recurring(yearly)"
            - name: Price list and item codes in the billing system
              description: |-
                ## Purpose
                Typing descriptions and prices freehand on each invoice is where typos, old rates and wrong income accounts creep in. Setting up every product and service as a saved item, with its price, tax code and income account, turns each invoice line into a selection rather than a guess.

                ## Milestones
                1. A price list with every current product, service and day rate.
                2. Each item saved in the billing software with a code, description, price, tax code and income account.
                3. Old or discontinued items archived so they cannot be picked.
                4. Ten recent invoices rebuilt as a test using only saved items.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every current product and service is a saved billing item with price, tax code and income account, and old items are archived."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the prices from your last twenty invoices into one list"
                - "Create a saved item for each product and service"
                - "Map each item to its income account and tax code"
                - "Archive discontinued items in the billing software"
            - name: Payment methods offered on invoices
              description: |-
                ## Purpose
                Each payment method you offer changes how fast you are paid and what it costs: bank transfer is cheap but slower to match, card links are quick but carry fees, and direct debit suits recurring clients. Choosing which methods to print on invoices, and for which customers, is worth deciding once with the fees in front of you.

                ## Milestones
                1. Fees and settlement times for bank transfer, card payment links and direct debit compared at your typical invoice size.
                2. A decision recorded on which methods appear on which customers' invoices.
                3. Card or direct debit links switched on in the billing software where chosen.
                4. A rule written on whether card fees are absorbed or priced in, checked against local rules on surcharging.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of payment methods per customer type exists, with fees compared and the chosen links live on invoices."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out what each payment method would cost on a typical invoice"
                - "Decide which methods to offer to which customers"
                - "Switch on the chosen payment links in the billing software"
                - "Check whether surcharging card fees is allowed where you trade"
            - name: Billing calendar and cut-off rules
              description: |-
                ## Purpose
                Without fixed billing dates, invoices go out when someone remembers, and month-end figures miss work that was finished but never billed. A one-page calendar saying when each kind of work is invoiced, plus a cut-off rule for the last days of the month, gives the business a predictable rhythm and customers a predictable bill.

                ## Milestones
                1. Each billing type listed with its trigger: on delivery, on milestone, weekly, or on a fixed day each month.
                2. A cut-off rule written for work finished in the last days of a month.
                3. Recurring and retainer billing dates set in the software.
                4. The calendar shared with everyone who raises or approves invoices.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A billing calendar and month-end cut-off rule are written, shared with the team and matched by the dates set in the software."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every kind of work you bill and when it is billed today"
                - "Pick a fixed day of the month for retainer and recurring invoices"
                - "Write the month-end cut-off rule in one paragraph"
                - "Share the billing calendar with whoever raises invoices"
            - name: Same-day invoicing after delivery
              description: |-
                ## Purpose
                Every day between finishing the work and sending the invoice adds a day to when you are paid, and the customer's sense of the value fades. A fixed habit of invoicing completed work at least twice a week, with same-day invoicing for larger jobs, takes days off your time to cash for very little effort.

                ## Milestones
                1. A target set for working days from delivery to invoice, such as one.
                2. Two fixed invoicing slots in the week blocked in the calendar.
                3. One list or board where finished jobs land, ready to bill.
                4. Four weeks in a row with no finished job waiting longer than the target.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, no completed job waited longer than the agreed target before its invoice was sent."
                cadence: rolling
              tasks:
                - "Set your target for days from delivery to invoice"
                - "Create a ready-to-bill list where finished jobs are added"
                - "Raise invoices for every job finished since the last run @recurring(weekly:mon,thu)"
                - "Note any job that missed the target and the reason"
            - name: Friday unbilled work sweep
              description: |-
                ## Purpose
                Billable hours, extra site visits and small add-on requests slip through when nobody compares what was done with what was invoiced. A short Friday check of timesheets, delivery notes and job records against the week's invoices catches unbilled work while it is still easy to explain to the customer.

                ## Milestones
                1. The sources of billable work listed: timesheets, delivery notes, job sheets and change requests.
                2. A simple sweep sheet comparing each source with the invoices raised.
                3. Every unbilled item from the week either invoiced or marked not billable with a reason.
                4. A running total of the work recovered by the sweep.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly sweep record shows every unbilled item found and whether it was invoiced or written off with a reason."
                cadence: rolling
              tasks:
                - "List every place billable work is recorded"
                - "Build a sweep sheet with one row per job or timesheet"
                - "Compare the week's work records with the invoices raised @recurring(weekly:fri)"
                - "Keep a running total of the work recovered by the sweep"
            - name: Monthly retainer and recurring billing run
              description: |-
                ## Purpose
                Retainers, maintenance contracts and monthly fees are the easiest invoices to send and the most embarrassing to get wrong, because the same mistake repeats every month. A fixed run date with a review before release catches ended contracts, changed prices and overage hours before customers see them.

                ## Milestones
                1. Every recurring customer listed with amount, start date, end date and billing day.
                2. The recurring list checked against signed contracts before each run.
                3. Retainer hours used compared with the allowance, and any overage billed under the contract terms.
                4. Recurring invoices released on the same day each month after a recorded review.

                ## Notes
                Start from the **Operational checklist** template. Keep the pre-release review to the five or six checks that have caught real mistakes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months running, recurring invoices were released on the set date after a documented pre-release review."
                cadence: rolling
              tasks:
                - "List every recurring customer with amount and billing day"
                - "Write the pre-release review steps as a checklist"
                - "Check the recurring list against signed contracts and end dates"
                - "Run the recurring billing batch and review it before release @recurring(monthly:25)"
                - "Compare retainer hours used with each client's allowance"
            - name: Monthly customer statement run
              description: |-
                ## Purpose
                A statement shows the customer every open invoice, credit and payment in one place, and many accounts payable teams use it to find invoices they never logged. Sending statements on a fixed day each month surfaces missing invoices and unapplied credits early, before they become disputes. The statement is not a chase letter: it is the shared record both sides work from.

                ## Milestones
                1. A statement layout showing open invoices, credits, payments and their age.
                2. A rule on which customers receive statements, such as anyone with an open balance.
                3. Statements sent on a fixed day each month.
                4. Customer replies about missing invoices or credits logged and answered.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Statements went to every customer with an open balance on the set day for three months, with replies logged."
                cadence: rolling
              tasks:
                - "Check the statement layout in your billing software"
                - "Decide which customers receive a monthly statement"
                - "Send statements to every customer with an open balance @recurring(monthly:3)"
                - "Log any customer reply about missing invoices or credits"
            - name: Pre-send invoice accuracy check
              description: |-
                ## Purpose
                Most invoice errors are small: a wrong purchase order number, last year's rate, a misspelt entity name, a missing tax line. Each one can send the invoice to the back of the customer's queue. A two-minute checklist before sending, plus a weekly spot check of a few sent invoices, catches them while they are cheap to fix.

                ## Milestones
                1. A pre-send checklist of eight items or fewer, written from your past errors.
                2. The checklist used on every invoice above an agreed value.
                3. A weekly spot check of five sent invoices against their source documents.
                4. Errors found by the spot check recorded by type.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-send checklist is used on every invoice above the agreed value, and weekly spot-check results are recorded by error type."
                cadence: rolling
              tasks:
                - "Write a pre-send checklist from the last ten invoice errors"
                - "Set the invoice value above which the checklist is required"
                - "Spot-check five sent invoices against their source documents @recurring(weekly:wed)"
                - "Record each error found by type"
            - name: Billing query and dispute log
              description: |-
                ## Purpose
                When a customer questions a line, a rate or a quantity, the invoice usually sits unpaid until someone answers, and queries handled in scattered email threads get lost. A single log of billing queries, with owner, date raised and outcome, makes sure each one is resolved and shows which kinds of mistake keep coming back.

                ## Milestones
                1. A query log with customer, invoice, issue, owner, date raised and outcome.
                2. A target response time agreed, such as two working days.
                3. Every open query reviewed weekly and given a next step.
                4. Resolved queries tagged with a cause so patterns show up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every billing query since the log started has an owner and an outcome, and none went past the target without a response."
                cadence: rolling
              tasks:
                - "Create a query log with the agreed columns"
                - "Move every open billing query from email into the log"
                - "Agree a response time target for billing queries"
                - "Review every open query and give each a next step @recurring(weekly:tue)"
            - name: Credit note and correction procedure
              description: |-
                ## Purpose
                Once an invoice is issued it should not be edited or deleted; the correct fix is a credit note that references it, followed by a new invoice if needed. Writing down who can approve credit notes, how they are numbered and which reason codes to use stops quiet edits that break the audit trail and hide discounts.

                ## Milestones
                1. A written rule that issued invoices are never edited or deleted.
                2. Approval limits for credit notes set by amount.
                3. A list of reason codes, such as pricing error, returned goods and goodwill.
                4. Every credit note referencing the original invoice number.
                5. A monthly review of credit notes issued against the approval rule.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A credit note procedure with approval limits and reason codes is written, and every credit note in the last month references its original invoice."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the rule that issued invoices are corrected only by credit note"
                - "Set approval limits for credit notes by amount"
                - "Add reason codes for credit notes in the billing software"
                - "Review credit notes issued this month against the approval rule @recurring(monthly:28)"
            - name: Monthly billing metrics log
              description: |-
                ## Purpose
                A handful of numbers tells you whether billing is getting better or worse: invoices raised, average days from delivery to invoice, credit notes as a share of billing, and queries opened. Recording them once a month takes ten minutes and gives you evidence when deciding whether to change software, staffing or process.

                ## Milestones
                1. Four to six billing measures chosen, each with a written definition.
                2. A log with one row per month.
                3. Six months of figures recorded.
                4. One action taken in response to a trend.

                ## Notes
                Start from the **Metrics log** template. Overdue balances and debtor days belong in collections; this log measures how well invoices are raised.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of billing measures are recorded, with at least one action taken because of a trend."
                cadence: rolling
              tasks:
                - "Choose the billing measures and write a definition for each"
                - "Set up the log with one row per month"
                - "Record the month's billing figures in the log @recurring(monthly:6)"
                - "Write down one trend and the action it suggests at each quarter end"
            - name: Purchase order and procurement portal routine
              description: |-
                ## Purpose
                Larger customers often pay only invoices that quote a valid purchase order and arrive through their supplier portal, and an invoice emailed outside that route may never be logged. A routine of collecting the purchase order before work starts, quoting it on the invoice and checking portals for rejections keeps those invoices moving.

                ## Milestones
                1. Customers that require purchase orders or portal submission listed with their rules.
                2. Purchase order numbers requested before work begins and stored against the job.
                3. Portal log-ins held in the business password manager, not in personal inboxes.
                4. Each portal checked weekly, with rejected invoices resubmitted within three working days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every portal customer is listed with its rules, and portals are checked weekly with rejected invoices resubmitted within three working days."
                cadence: rolling
              tasks:
                - "List customers that need purchase orders or portal uploads"
                - "Add a purchase order field to each job record"
                - "Store portal log-ins in the business password manager"
                - "Check each procurement portal for rejected or held invoices @recurring(weekly:thu)"
            - name: Invoice records retention and archive
              description: |-
                ## Purpose
                Tax authorities typically require invoices and credit notes to be kept for several years, often six or more, and some specify the format or the place. Agreeing how long you keep billing records, where the master copies live and how each closed year is archived means a tax enquiry or customer dispute years later can be answered from files, not memory.

                ## Milestones
                1. The retention period for invoices in your country confirmed with your accountant.
                2. One location named for master copies of invoices, credit notes and statements.
                3. Each closed year exported from the software and stored in a read-only folder.
                4. A note of how records will be kept if you ever change billing software.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The retention period is confirmed and recorded, and every closed billing year sits in a read-only archive exported from the software."
                cadence: cyclic
              tasks:
                - "Ask your accountant how long invoices must be kept"
                - "Name one location for the master copies of billing records"
                - "Export last year's invoices and credit notes to the archive"
                - "Archive the closed billing year in a read-only folder @recurring(yearly)"
            - name: Quarterly rates and terms review
              description: |-
                ## Purpose
                Rates set two years ago and special discounts agreed in a hurry quietly erode margin. A quarterly look at what each customer is actually billed, the discounts and extended terms in force and whether each still has a reason, keeps every exception deliberate.

                ## Milestones
                1. A list of every customer on non-standard rates, discounts or terms.
                2. Each exception marked keep, change or end, with a reason.
                3. Customers whose terms change notified in writing ahead of the change.
                4. The price list and customer records updated to match.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter, every non-standard rate, discount and term has a recorded keep, change or end decision."
                cadence: cyclic
              tasks:
                - "Pull a list of customers on non-standard rates or terms"
                - "Mark each exception keep, change or end with a reason"
                - "Review rate, discount and terms exceptions with fresh figures @recurring(quarterly)"
                - "Write to customers whose terms are changing"
            - name: Writing invoice lines that get approved first time
              description: |-
                ## Purpose
                Accounts payable clerks approve what they can match to an order, a contract or a person who signs it off, and vague lines like professional services go into the query pile. Learning to write lines that name the deliverable, the period, the quantity and the customer's own reference cuts queries and makes the invoice self-explanatory a year later.

                ## Milestones
                1. Five recent invoices rewritten with clearer line descriptions.
                2. A short style guide of line formats for your common kinds of work.
                3. Saved item descriptions updated to follow the guide.
                4. A month of invoices with no query about what a line covers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A line description style guide exists, saved items follow it, and a full month passes with no customer query about what a line covers."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick five recent invoices that drew questions from customers"
                - "Ask the agent to suggest clearer wording for their line descriptions"
                - "Write a one-page style guide for invoice lines"
                - "Update saved item descriptions to match the guide"
            - name: Billing models for service work
              description: |-
                ## Purpose
                Agencies and freelancers bill in one of a few ways: time and materials, fixed fee, milestones, retainers, or a mix. Each model changes when you can invoice, how much risk you carry and how much admin it creates. Understanding the trade-offs lets you pick the right model per client instead of defaulting to hourly.

                ## Milestones
                1. A one-page comparison of time and materials, fixed fee, milestone and retainer billing.
                2. Current clients mapped to the model each one uses.
                3. One client or project identified where a different model would suit both sides better.
                4. A proposal drafted to move that client to the better model.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of four billing models is written, current clients are mapped to their model, and one change proposal is drafted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down the billing model each current client is on"
                - "Compare four billing models on cash timing, risk and admin"
                - "Choose one client that would suit a different model"
                - "Draft the proposal for moving that client"
            - name: Deposits, pro forma and advance invoices
              description: |-
                ## Purpose
                Taking a deposit before starting protects small businesses and freelancers from working for months unpaid, but a pro forma request, a deposit invoice and a final invoice net of the deposit each carry different tax and accounting treatment. Learning how your software and tax rules handle advance payments avoids double-counting income or charging tax twice.

                ## Milestones
                1. The difference between a pro forma, a deposit invoice and a final invoice written down in your own words.
                2. Your accountant's guidance recorded on when tax is due on a deposit.
                3. A test job run through the software from deposit to final invoice.
                4. A deposit policy stating when a deposit is required and what percentage of the job it covers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A deposit policy is written, the tax point for deposits is confirmed with your accountant, and one test job shows the deposit netted off the final invoice."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look up how your billing software handles deposit invoices"
                - "Ask your accountant when tax is due on a deposit"
                - "Run a test job from deposit invoice to final invoice"
                - "Write a deposit policy for new jobs"
            - name: Rebilling expenses and disbursements
              description: |-
                ## Purpose
                Travel, materials, printing and third-party costs paid on a client's behalf are lost margin if they are never rebilled, and a tax problem if the treatment or mark-up is wrong. Learning the difference between a recharge and a disbursement where you trade, and tagging costs to clients as they are recorded, recovers money that is easy to forget.

                ## Milestones
                1. Your accountant's explanation of recharged expenses and disbursements for tax purposes noted.
                2. Client contracts checked for which expenses they accept and at what mark-up.
                3. Billable expenses tagged to the client or job at the moment they are recorded.
                4. Receipts attached to invoices wherever the client requires them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Billable expenses are tagged to a client at entry, and last month's rebillable costs all appear on client invoices with receipts where required."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check each client contract for rebillable expense terms"
                - "Ask your accountant how recharges and disbursements are taxed"
                - "Turn on billable expense tagging in your accounting software"
                - "Rebill last month's untagged client expenses"
            - name: Multi-currency invoicing basics
              description: |-
                ## Purpose
                Billing a client abroad in their own currency can win the work, but it brings exchange rates, bank charges and receiving accounts into every invoice. Learning how your software records foreign currency invoices, and which bank details to show for each currency, stops short payments and confused reconciliations.

                ## Milestones
                1. A decision on which currencies you will invoice in.
                2. Receiving account details for each currency shown on the matching template.
                3. Your software's handling of exchange rates on invoices and receipts understood.
                4. A test foreign currency invoice raised and checked by your bookkeeper.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Invoice templates exist for each chosen currency with the correct receiving details, and a test foreign currency invoice has been checked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List clients who would prefer to be billed in their own currency"
                - "Set up receiving details for each currency you will accept"
                - "Create a template per currency with the right bank details"
                - "Raise a test invoice in a foreign currency and have it checked"
            - name: Cross-border invoice wording and reverse charge
              description: |-
                ## Purpose
                Invoices to business customers in another country often need extra wording, such as the customer's tax number or a note that the customer accounts for the tax, and getting it wrong can leave you liable for tax you never charged. Learning which rules apply to your cross-border sales, with an adviser confirming the wording, keeps those invoices valid.

                ## Milestones
                1. Your cross-border sales listed by country and customer type.
                2. The invoice wording each case needs confirmed by your accountant or tax adviser.
                3. Customer tax numbers verified wherever an official check service exists.
                4. Tax codes or template variants set up so the wording prints automatically.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each type of cross-border sale has adviser-confirmed invoice wording that prints automatically, and customer tax numbers are verified."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List last year's cross-border sales by country"
                - "Ask your adviser what wording each case must carry"
                - "Verify customer tax numbers with the official check service where one exists"
                - "Set up tax codes so the wording prints automatically"
            - name: Getting fluent in your software's invoicing features
              description: |-
                ## Purpose
                Most billing tools can do far more than most owners use: recurring schedules, saved items, scheduled sending, batch invoicing and custom fields for purchase orders. A structured few hours learning the invoicing features you already pay for usually removes at least one weekly manual job.

                ## Milestones
                1. The invoicing section of your software's help centre or course worked through.
                2. Three features you are not using identified.
                3. At least one of them set up and in use.
                4. A short how-to note saved for whoever covers billing.

                ## Notes
                Start from the **Course** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one previously unused invoicing feature is set up and in use, with a how-to note saved for cover."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Open the invoicing section of your software's help centre"
                - "List three features you pay for but do not use"
                - "Set up the most useful of the three"
                - "Save a short how-to note for whoever covers billing"
            - name: Choosing invoicing or billing software
              description: |-
                ## Purpose
                Spreadsheets and word-processor invoices work for the first dozen clients, then numbering, statements and recurring billing start to break. Comparing three tools against your real needs, such as recurring schedules, multi-currency, portal exports and the link to your accounts, gives a choice you will not be redoing next year. Replacing the whole accounting system is a separate project.

                ## Milestones
                1. Requirements listed and split into must-have and nice-to-have.
                2. Three tools shortlisted and tried on a free trial.
                3. Each tool scored against the same requirements, including the monthly cost at your volume.
                4. A decision recorded with the reason.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on billing software is recorded, with three tools scored against the same written requirements."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write your must-have and nice-to-have billing requirements"
                - "Shortlist three tools that link to your accounting system"
                - "Run a trial invoice cycle in each shortlisted tool"
                - "Score the tools and record the decision"
            - name: Quote to invoice handover
              description: |-
                ## Purpose
                When the invoice is typed separately from the accepted quote or statement of work, prices, quantities and scope drift, and the customer spots the difference. Linking each invoice to the signed quote, ideally by converting it in the software, means the invoice says exactly what was agreed.

                ## Milestones
                1. Accepted quotes stored in one place with their reference numbers.
                2. Invoices created from the quote record rather than retyped, where the software allows.
                3. Variations and change requests approved in writing before they are billed.
                4. Ten recent invoices checked against their quotes with no unexplained differences.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "New invoices are created from accepted quotes, and a check of ten recent invoices shows no unexplained difference from the agreed quote."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find where accepted quotes and statements of work are kept"
                - "Test converting a quote into an invoice in the software"
                - "Require written approval for variations before they are billed"
                - "Compare ten recent invoices with their accepted quotes"
            - name: Billing clauses in engagement letters and contracts
              description: |-
                ## Purpose
                Many billing arguments come from contracts that never said how often you invoice, what counts as an expense, or how long the client has to query an invoice. Standard billing clauses, drafted once and reviewed by a lawyer, make the terms on the invoice familiar to the client before the first bill arrives.

                ## Milestones
                1. Billing clauses in your current engagement letter or terms listed and the gaps marked.
                2. Draft clauses covering invoice frequency, payment terms, expenses, purchase orders and the query window.
                3. The draft reviewed by a lawyer.
                4. The approved clauses in the engagement letter and the standard terms.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Lawyer-reviewed billing clauses covering frequency, terms, expenses, purchase orders and the query window are in the standard engagement letter."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read your current engagement letter for its billing terms"
                - "Mark the gaps that caused past billing arguments"
                - "Ask the agent to draft a clause for each gap"
                - "Send the draft clauses to a lawyer for review"
            - name: Invoice delivery and tracking set-up
              description: |-
                ## Purpose
                An invoice that lands in a spam folder or a former employee's inbox is an invoice nobody is going to pay. Sending from the billing system with a consistent address, clear subject lines and delivery tracking, and checking bounces every week, removes never received from the list of reasons for delay.

                ## Milestones
                1. Invoices sent from the billing system using a dedicated billing address.
                2. Email authentication for your domain checked so invoices are less likely to be flagged as spam.
                3. A subject line format carrying your business name and the invoice number.
                4. Bounced and unopened invoices reviewed each week and resent to a corrected contact.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Invoices are sent from a dedicated billing address with tracking, and bounces are reviewed and resent every week."
                cadence: rolling
              tasks:
                - "Set up a dedicated billing email address"
                - "Ask whoever manages your domain to check its email authentication records"
                - "Set a subject line format with business name and invoice number"
                - "Review bounced and unopened invoice emails and resend them @recurring(weekly:mon)"
            - name: Consolidated invoicing for high-volume customers
              description: |-
                ## Purpose
                A customer who places forty small orders a month and receives forty invoices will often pay late simply because each one needs approving. Moving such customers to one consolidated invoice per week or month, with an itemised schedule, can cut the admin on both sides, but whether it pays depends on how long you would wait for the cash.

                ## Milestones
                1. Customers above an agreed number of invoices a month identified.
                2. The effect on cash timing of consolidating worked out for each.
                3. A decision for each customer, agreed with them in writing where adopted.
                4. Consolidated invoices set up with an itemised schedule of orders.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each high-volume customer has a recorded decision on consolidated invoicing, agreed in writing where adopted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count invoices per customer over the last three months"
                - "Work out the cash timing effect of monthly consolidation"
                - "Offer consolidated invoicing to customers where it pays"
                - "Set up the consolidated invoice with an itemised schedule"
            - name: Root cause review of invoice errors
              description: |-
                ## Purpose
                Credit notes and reissued invoices are the visible cost of billing errors; the hidden cost is the payment delay each one causes. Reviewing a quarter of credit notes and queries by cause usually shows two or three fixable problems, such as stale prices or missing purchase orders, worth putting right at source.

                ## Milestones
                1. Every credit note and reissue from the last quarter listed with its cause.
                2. The top three causes ranked by count and by value.
                3. A fix agreed for each, with an owner and a date.
                4. The error rate in the following quarter compared with the review quarter.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The top three causes of invoice errors are named, each has a fix with an owner, and the next quarter's error rate has been compared."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List last quarter's credit notes and reissued invoices"
                - "Tag each new credit note with a root cause @recurring(monthly:10)"
                - "Rank the causes by count and value"
                - "Agree a fix, owner and date for each top cause"
            - name: Electronic invoicing readiness check
              description: |-
                ## Purpose
                More and more countries require structured electronic invoices sent through approved networks or a tax authority platform, usually starting with large businesses and widening over time, and many public bodies already insist on them. Checking what applies to you, and whether your software can send compliant e-invoices, avoids a rushed change when a deadline lands.

                ## Milestones
                1. Current and announced e-invoicing rules for your country and main customer countries noted from official sources.
                2. Customers already asking for e-invoices or network delivery listed.
                3. Your billing software's e-invoicing support confirmed with the provider.
                4. A dated plan written if a requirement applies within the next two years.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note exists of the e-invoicing rules that apply to you and your software's support, with a dated plan if a requirement is due within two years."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your tax authority's site for e-invoicing rules and dates"
                - "List customers already asking for electronic invoices"
                - "Ask your billing software provider about e-invoicing support"
                - "Write a dated plan if a requirement applies to you"
            - name: Annual price increase rollout
              description: |-
                ## Purpose
                Raising prices once a year, with proper notice, is easier on customers than a surprise mid-year and protects margin against rising costs. A dated rollout covers the notice letter, each contract's notice period, the updated price list, recurring schedules and the first invoices at the new rate.

                ## Milestones
                1. Contract notice periods for price changes checked for each customer.
                2. New rates agreed and the effective date set.
                3. Notice letters sent in time for every contract's notice period.
                4. Price list, saved items and recurring schedules updated before the first invoice at the new rate.
                5. The first month of invoices at new rates checked for old prices.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New rates were notified within every contract's notice period, and the first month of invoices shows no old prices."
                cadence: cyclic
              tasks:
                - "Check each contract's notice period for price changes"
                - "Draft the price increase notice letter"
                - "Update saved items and recurring schedules to the new rates"
                - "Start next year's price review three months before the effective date @recurring(yearly)"
            - name: First invoice to a large corporate customer
              description: |-
                ## Purpose
                Winning a large corporate client usually means a supplier onboarding pack before any invoice can be paid: forms, tax documents, a bank letter, insurance certificates and a purchase order. Finishing that set-up before the work is delivered means the first invoice is paid on terms rather than months later.

                ## Milestones
                1. The customer's supplier onboarding forms completed and returned.
                2. Bank details confirmed through the customer's own verification process.
                3. A purchase order received that covers the first invoice.
                4. Invoice format, address and portal rules confirmed with their accounts payable team.
                5. The first invoice accepted and showing as approved.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first invoice to the new corporate customer was accepted and approved under a valid purchase order."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your client contact for the supplier onboarding pack"
                - "Complete and return the onboarding forms and tax documents"
                - "Confirm the purchase order number before delivering the work"
                - "Ask accounts payable how they want invoices submitted"
            - name: Starting to charge sales tax from a set date
              description: |-
                ## Purpose
                Once turnover crosses a registration threshold, or you register voluntarily, every invoice from the effective date must carry the tax and your tax number, and work that straddles the date needs care. Planning the switchover, telling customers and updating templates avoids reissuing a month of invoices. Registering and filing are covered in their own area.

                ## Milestones
                1. The effective date and tax number recorded from the registration confirmation.
                2. Templates, saved items and tax codes updated to apply from that date.
                3. Customers told in writing that tax will appear on future invoices.
                4. Work spanning the effective date reviewed with your accountant.
                5. The first invoices after the date checked for the tax and the tax number.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every invoice dated after the effective date shows the tax number and the correct tax, and customers were notified in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the effective date and tax number from the registration letter"
                - "Update invoice templates and tax codes for the effective date"
                - "Write to customers about tax appearing on future invoices"
                - "Ask your accountant how to treat work spanning the date"
            - name: Moving invoices to a new legal entity or bank account
              description: |-
                ## Purpose
                Incorporating a sole trade, merging businesses or changing banks all mean invoices must show a new name, tax number or account, and customers are rightly wary of changed payment details because of invoice fraud. A planned switch, with a fresh invoice series, a signed notice and a way for customers to verify the change by phone, keeps payments flowing to the right place.

                ## Milestones
                1. The switchover date, new legal details and new bank details confirmed.
                2. A new invoice series and template set up for the new entity or account.
                3. Every customer sent a signed notice with a way to verify the change by phone.
                4. Each customer's accounts payable team confirming the new details are loaded.
                5. Payments still arriving at the old account tracked and redirected for three months.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All active customers confirmed the new details, and payments to the old account were tracked for three months after the switch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the switchover date with your accountant"
                - "Set up the new invoice series and template"
                - "Send each customer a signed notice with a phone number to verify it"
                - "Track payments still arriving at the old account"
            - name: Year-end billing cut-off and unbilled clear-out
              description: |-
                ## Purpose
                At the financial year end, work finished but not invoiced, invoices dated in the wrong year and unbilled expenses all distort the accounts your accountant prepares. A dated clear-out in the last weeks of the year bills what can be billed and lists the rest, with values, for the accountant.

                ## Milestones
                1. All finished work and rebillable expenses invoiced before the year-end date.
                2. Invoices dated after the year end checked for work delivered before it.
                3. A valued list of work done but not yet billable sent to your accountant.
                4. The billing cut-off confirmed as part of the year-end pack.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "All billable work to the year end was invoiced, and a valued list of unbilled work reached the accountant before the year-end pack."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put the year-end billing cut-off date in the calendar"
                - "Invoice all finished work and rebillable expenses before the cut-off"
                - "Send the accountant a valued list of work done but not yet billable"
                - "Run the year-end billing clear-out @recurring(yearly)"
            - name: Final account and retention release invoice
              description: |-
                ## Purpose
                On longer contracts, the final account settles variations, deductions and the retentions held back from earlier invoices, and it is often the largest single sum outstanding. Assembling the evidence for every variation and diarising the retention release dates means the money held back does not quietly go unclaimed.

                ## Milestones
                1. Every variation, credit and earlier invoice on the contract reconciled to the contract value.
                2. Supporting evidence for each variation gathered.
                3. The final account invoice issued and accepted.
                4. Retention release dates written into the calendar with the amounts due.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final account invoice is accepted, and each retention release date is diarised with its amount."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every invoice, variation and credit raised on the contract"
                - "Gather the client sign-offs for each variation"
                - "Issue the final account invoice with a reconciliation schedule"
                - "Diarise each retention release date and its amount"
            - name: Side-business invoicing in a monthly hour
              description: |-
                ## Purpose
                For a freelancer or side business fitted around a full-time job, billing tends to happen in a panic when money runs short. One protected hour a month, with a short checklist and templates ready to go, keeps invoices regular without stealing evenings.

                ## Milestones
                1. A monthly invoicing hour fixed in the calendar.
                2. A checklist for that hour: work log, invoices, statements, filing.
                3. Templates and saved items ready, so an invoice takes minutes.
                4. Three months of invoices sent within the hour.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months in a row, every invoice for the month was sent during the protected monthly hour."
                cadence: rolling
              tasks:
                - "Choose a recurring hour in the month for invoicing"
                - "Write a short checklist for the invoicing hour"
                - "Keep a running log of billable work during the month"
                - "Raise the month's invoices in the protected hour @recurring(monthly:27)"
            - name: Agency media and pass-through cost billing
              description: |-
                ## Purpose
                Agencies that buy media, print or production on a client's behalf can be out of pocket for large sums if supplier invoices are paid before the client is billed. Agreeing estimates, billing in advance where the contract allows and matching every supplier invoice to a client rebill protects the agency's cash and margin.

                ## Milestones
                1. Client sign-off on estimates required before media or production is committed.
                2. Advance billing terms for pass-through costs written into client agreements where possible.
                3. Each supplier invoice matched to a client rebill or estimate line.
                4. A monthly reconciliation showing no supplier cost left unbilled.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each month, every media and production supplier invoice is matched to a client rebill, with no unbilled costs left."
                cadence: rolling
              tasks:
                - "List open estimates awaiting client sign-off"
                - "Add advance billing terms for pass-through costs to the client agreement"
                - "Match each supplier invoice to a client estimate line"
                - "Reconcile media supplier invoices against client rebills @recurring(monthly:12)"
            - name: Partial shipment and back order invoicing
              description: |-
                ## Purpose
                Product businesses that ship part of an order and back-order the rest need a rule: invoice what shipped, invoice when complete, or invoice the whole order up front. The wrong choice either delays cash or bills customers for goods they have not received. Settling it, with delivery notes tied to invoice lines, keeps both sides clear.

                ## Milestones
                1. A rule chosen for partial shipments and recorded.
                2. Invoices linked to the delivery notes for the goods they cover.
                3. Back-ordered lines shown clearly as not yet invoiced.
                4. Customer terms updated to explain the rule.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A partial shipment rule is written into customer terms, and invoices since then match the delivery notes they cover."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Review the last ten split orders and how they were billed"
                - "Choose the invoicing rule for partial shipments"
                - "Link invoice lines to delivery notes in the system"
                - "Add the partial shipment rule to your customer terms"
            - name: Progress billing for construction and trade jobs
              description: |-
                ## Purpose
                Builders, installers and trades on longer jobs bill in stages: applications for payment against work done, retentions held back, and variations agreed along the way. Getting the valuation, the application and the paperwork right at each stage keeps a long job from turning into a cash gap.

                ## Milestones
                1. A payment schedule agreed for each job, by stage or by monthly valuation.
                2. A valuation sheet showing work done to date, previous applications and retention.
                3. Applications submitted on the contract's set dates with supporting photos or sign-offs.
                4. Variations logged with approval before being added to an application.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each live job has an agreed payment schedule and a valuation sheet, and applications were submitted on the contract dates."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note the application dates and retention terms for each live job"
                - "Build a valuation sheet for work done to date"
                - "Photograph completed stages before each application"
                - "Log variations with the client's written approval"
            - name: Handing billing to a bookkeeper or assistant
              description: |-
                ## Purpose
                Owners who still raise every invoice themselves become the bottleneck on cash. Handing billing to a bookkeeper or virtual assistant works when the access, the rules and the approval step are clear: they draft, you approve above a limit, and everything else goes out on time.

                ## Milestones
                1. A written billing procedure covering sources, timings, templates and checks.
                2. User access set up with the fewest rights needed, without sharing your log-in.
                3. An approval limit above which invoices wait for your sign-off.
                4. Four weeks of invoices drafted by the delegate and reviewed weekly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A delegate raises invoices under a written procedure with their own log-in, and four weekly reviews have been completed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the billing procedure in plain steps"
                - "Give the delegate their own user log-in with limited rights"
                - "Set the invoice value that needs your approval"
                - "Review and approve the delegate's draft invoices @recurring(weekly:fri)"
            - name: Invoicing public sector customers
              description: |-
                ## Purpose
                Government bodies, schools and health services often pay reliably, but only when the invoice follows their format exactly: a valid order number, a named contact, specific remittance details and, increasingly, an electronic route. Building a checklist for each public sector customer avoids rejections for reasons that have nothing to do with the work.

                ## Milestones
                1. Each public sector customer's invoicing rules gathered from their supplier guidance.
                2. A per-customer checklist covering order number, contact, format and submission route.
                3. Any required electronic invoicing route registered and tested.
                4. Rejected invoices from the last year reviewed for their causes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each public sector customer has an invoicing checklist and a tested submission route, with past rejections reviewed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find each public sector customer's supplier invoicing guidance"
                - "Write a checklist for each covering order number, contact and route"
                - "Register and test any required electronic invoicing route"
                - "Review last year's rejected invoices for their causes"
            - name: Proration rules for mid-cycle changes
              description: |-
                ## Purpose
                Customers start, upgrade, downgrade and cancel in the middle of billing periods, and without a rule each change becomes a one-off calculation and a likely dispute. A written proration policy, by day or by month, with worked examples and matching software settings, makes mid-cycle bills consistent and explainable.

                ## Milestones
                1. The common mid-cycle changes listed: start, upgrade, downgrade, pause and cancel.
                2. A proration rule chosen for each, with a worked example.
                3. Software settings matching the rules, tested on a sample customer.
                4. The rules summarised in customer terms.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written proration rules with worked examples exist for five change types, and software settings have been tested against them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the mid-cycle changes your customers make"
                - "Choose a proration rule for each change type"
                - "Test each rule on a sample customer in the software"
                - "Summarise the proration rules in your customer terms"
            - name: Usage-based and metered billing design
              description: |-
                ## Purpose
                Billing on usage, such as support hours, units processed or seats, ties price to value but adds a data step before every invoice. Designing the usage measure, the data source, the cut-off and the check before the bill goes out keeps usage invoices accurate and defensible when a customer asks how a number was reached. How the revenue is accounted for is a separate question for your accountant.

                ## Milestones
                1. The billable usage measure defined in a sentence the customer would agree with.
                2. A single data source for usage, with an export the customer can see.
                3. A cut-off and review step before each usage invoice.
                4. Usage shown on the invoice or on an attached schedule.
                5. Three billing cycles completed without a usage dispute.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three usage billing cycles have been completed from one data source, with usage schedules attached and no unresolved dispute."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the usage measure in one plain sentence"
                - "Choose the single data source for usage figures"
                - "Set the cut-off date and review step for usage data"
                - "Attach a usage schedule to the next usage invoice"
            - name: Self-billing arrangement set-up and review
              description: |-
                ## Purpose
                Some customers, often in retail, construction, publishing and online platforms, raise invoices on the supplier's behalf, which is called self-billing. Tax rules usually require a written agreement and set limits on how it works, and the supplier still has to check every self-billed invoice. Setting up or reviewing the arrangement properly avoids missed income and tax mismatches.

                ## Milestones
                1. Every customer that self-bills you listed with the agreement in place.
                2. Each agreement checked with your accountant for the terms your tax authority requires.
                3. A monthly check of self-billed invoices against your own delivery or work records.
                4. Self-billed invoices recorded in your books under the customer's numbering.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every self-billing customer has a checked agreement on file, and monthly checks of self-billed invoices against your records are logged."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List customers that issue invoices on your behalf"
                - "Find the written self-billing agreement for each one"
                - "Ask your accountant to check each agreement's terms"
                - "Check self-billed invoices received against your records @recurring(monthly:15)"
            - name: Revenue leakage review across contracts
              description: |-
                ## Purpose
                Mature businesses lose a surprising amount to billing that never happens: price uplifts never applied, overage clauses never billed, contracted minimums not enforced. A structured review of the largest contracts against what was actually invoiced shows where money is being left on the table.

                ## Milestones
                1. The twenty largest contracts listed with their billing clauses.
                2. Each contract's billable entitlements compared with the last twelve months of invoices.
                3. Any under-billing quantified, with a decision made on catch-up billing for each case.
                4. A control added so each gap found cannot recur.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The top twenty contracts have been compared with a year of invoices, with under-billing quantified and a control added for each gap."
                cadence: cyclic
              tasks:
                - "List your twenty largest contracts and their billing clauses"
                - "Compare each contract with the last twelve months of invoices"
                - "Decide on catch-up billing for each gap found"
                - "Check the five largest contracts against recent invoices @recurring(quarterly)"
---

# Customer Invoicing & Billing

This area is for small businesses, freelancers and agencies who raise their own invoices, and for the bookkeepers who raise them on an owner's behalf. It starts with the foundations (the fields a valid invoice needs, numbering, terms, a master template, clean customer records and tax codes), moves through the weekly and monthly billing routines, the skills behind clear and correct invoices, decisions about software, contracts and electronic invoicing, dated moments such as a price rise or a change of legal entity, situations for side businesses, agencies, product sellers and trades, and ends with specialist work on proration, usage billing, self-billing and revenue leakage.

What repeats is a twice-weekly invoicing run, a Friday sweep for unbilled work, weekly spot checks, query and portal reviews, a monthly recurring billing run, statement run and metrics entry, quarterly reviews of rates and terms, and the yearly archive, price review and year-end cut-off. The Operational checklist, Metrics log, Course, Purchase decision and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
