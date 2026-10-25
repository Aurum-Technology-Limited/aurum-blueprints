---
id: practice-ownership.practice-fee-schedules
name: Practice Fee Schedules
description: "A fee schedule built from your real cost per hour, the rules your regulator sets, local comparisons and clear policies, kept current with an annual review and increases clients understand."
category: business
version: 1.0.0
tags: [practice-ownership, practice-fee-schedules, small-business, pricing, fee-schedule, fixed-fees, price-increases, hourly-rates]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - meeting-notes
    - metrics-log
    - risk-register
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Practice Fee Schedules
          description: "Setting professional fees: hourly, fixed and capped fees, consultation and procedure prices, annual increases and how fees compare locally."
          projects:
            - name: Every current fee gathered into one schedule
              description: |-
                ## Purpose
                Most practices charge from three or four places at once: the practice software, a printed price list at reception, old engagement letters and whatever the senior professional remembers. Gathering every fee actually charged in the last twelve months into one sheet, with its code, current price and the date it last changed, shows the gaps and contradictions before you set a single new number.

                ## Milestones
                1. One spreadsheet lists every service, item code and current fee, from the practice system and from paper lists.
                2. Each fee carries the date it was last changed, or a note that nobody knows.
                3. Fees that differ between the system, the website and reception are flagged.
                4. Services delivered in the last year with no fee on the schedule are listed.

                ## Notes
                Export the fee table from the practice software first; it is usually more complete than anyone's memory, and it is what clients are actually billed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single schedule lists every fee charged in the last twelve months with its code, price and last change date, and every inconsistency is flagged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the fee or item table from the practice management software"
                - "Photograph the reception price list and any printed fee leaflets"
                - "Pull the fee clauses from five recent engagement letters or treatment plans"
                - "Merge everything into one sheet and flag every mismatch"
            - name: Cost per professional hour calculation
              description: |-
                ## Purpose
                Any fee below the cost of delivering it loses money on every booking, however busy the diary looks. Dividing the practice's annual overheads and target owner pay by the hours professionals can realistically bill gives a floor price per hour, the single number every later fee decision should be tested against.

                ## Milestones
                1. Last year's total overheads taken from the accounts, with owner pay set at a market salary.
                2. Realistic billable or chairside hours per professional per year estimated, after leave, admin and training.
                3. A cost per professional hour calculated, and a second figure including a target profit margin.
                4. Both figures checked with your accountant and written at the top of the fee schedule.

                ## Notes
                The common mistake is using a 40-hour week times 52. Most professionals bill or treat for far fewer hours once holidays, CPD, admin and cancellations are taken out.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written cost per professional hour and a target rate per hour, both reviewed by your accountant, sit on the fee schedule."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull last year's total overheads from the profit and loss account"
                - "Estimate realistic billable hours per professional after leave and admin"
                - "Divide overheads plus market owner pay by total billable hours"
                - "Send the workings to your accountant for a sense check"
                - "Recalculate the cost per hour from the latest accounts @recurring(yearly)"
            - name: Capacity and target income for fee setting
              description: |-
                ## Purpose
                Price and volume are two halves of the same income: a practice that is full at current fees needs higher prices, while one with empty slots may need more clients before it can charge more. Setting a target income for the year, then checking it against diary capacity at today's fees, tells you which lever to pull.

                ## Milestones
                1. A target practice income for the coming year agreed between the owners.
                2. Available appointment slots or billable hours for the year counted per professional.
                3. Current utilisation measured from the last three months of diaries or timesheets.
                4. A written conclusion: raise fees, fill capacity, or both, with the reasoning in a paragraph.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note sets the target income, current utilisation and a recorded decision on whether price or volume is the main lever this year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a target practice income for the year with the other owners"
                - "Count available slots or billable hours per professional for the year"
                - "Measure utilisation from the last three months of diaries"
                - "Write a short note on whether price or volume is the lever"
            - name: Regulator and professional body rules on fees
              description: |-
                ## Purpose
                Several professions limit how fees can be set or shown: statutory scales for some legal and conveyancing work, rules on contingency fees, duties to give written estimates, price display rules for healthcare and VAT or sales tax shown inclusive. Checking your regulator's current rules before changing any price avoids a schedule that breaches conduct rules from the day it is printed.

                ## Milestones
                1. Your regulator's and professional body's current guidance on fees, estimates and price display saved in one folder.
                2. Any mandatory or statutory fee scales that apply to your services listed.
                3. Rules on what must be told to a client in writing before work starts summarised in plain words.
                4. Points of doubt sent to the regulator's helpline or your professional adviser, with the answers kept.

                ## Notes
                Start from the **Compliance control** template. Rules differ by country and profession, so treat this as finding and recording the rules, and get advice where they are unclear.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A compliance note lists every fee, estimate and price display rule that applies to the practice, with sources and any adviser answers attached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your regulator's website for guidance on fees and estimates"
                - "List any statutory or mandatory fee scales for your services"
                - "Summarise the written fee information clients must receive"
                - "Email the regulator's helpline about any rule you are unsure of"
            - name: Pricing model chosen for each service line
              description: |-
                ## Purpose
                Hourly rates suit work whose size nobody can predict, fixed fees suit work you have done a hundred times, and capped fees sit between the two. Deciding the model per service line, rather than defaulting to whatever the practice has always done, means clients get certainty where you can give it and the practice is protected where you cannot.

                ## Milestones
                1. Every service line listed with its current pricing model.
                2. Each line scored on how predictable its effort is, from past jobs.
                3. A model chosen per line: hourly, fixed, capped, per item or retainer.
                4. The choices and reasons recorded beside the fee schedule and shared with the professionals.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every service line has a recorded pricing model with a one-line reason, agreed by the owners and shared with all fee earners."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each service line with the way it is priced today"
                - "Check the spread of hours on the last ten jobs in each line"
                - "Choose hourly, fixed, capped, per item or retainer for each line"
                - "Present the choices at the next owners' meeting"
            - name: Local fee comparison from public sources
              description: |-
                ## Purpose
                Clients compare, and a fee far above or below what nearby practices publish needs a reason you can explain. Collecting published prices from five to eight comparable practices, from their websites, price lists and professional fee surveys, gives a fair picture of the local market without any contact with competitors about their prices.

                ## Milestones
                1. Five to eight comparable practices chosen by location, size and services.
                2. Their published fees for your ten most common services recorded in one table.
                3. Your own fees placed beside them, with the gap shown as a percentage.
                4. A short note on where you sit and why, such as longer appointments or senior staff.

                ## Notes
                Use only public information. Agreeing or even discussing future prices with competing practices can breach competition law in many countries.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison table shows published fees from at least five comparable practices for your ten most common services, with your position explained."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose five to eight comparable practices in your area"
                - "Record their published fees for your ten most common services"
                - "Calculate the percentage gap between their fees and yours"
                - "Refresh the comparison table from public sources @recurring(yearly)"
            - name: Service catalogue with a scope for every fee
              description: |-
                ## Purpose
                Without a written scope, a fixed fee invites disputes: does the new patient exam include X-rays, does the annual accounts fee include the tax return, does the planning fee include one revision or three. Writing what each priced service includes and excludes turns the fee schedule into something the front desk and the client can both read the same way.

                ## Milestones
                1. Each priced service has a one-line description of what is included.
                2. Common exclusions written for every fixed or packaged fee.
                3. The point at which extra work is charged separately stated for each service.
                4. The catalogue checked by each professional for the services they deliver.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every fee on the schedule has written inclusions, exclusions and an extra-work trigger, signed off by the professional who delivers it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the inclusions for your five highest volume services first"
                - "Add the common exclusions clients ask about for each fixed fee"
                - "State when extra work starts to be charged separately"
                - "Ask each professional to check the scopes for their own services"
            - name: Minimum fee and smallest economic job
              description: |-
                ## Purpose
                Short jobs often cost more to open, record and bill than they earn: a ten-minute phone advice call, a single letter, a quick review appointment. Working out the true cost of the smallest job and setting a minimum fee or minimum charge unit stops the practice subsidising its most fragmented work.

                ## Milestones
                1. The admin cost of opening, recording and billing one job estimated in minutes and money.
                2. The ten smallest jobs of the last quarter costed against their fees.
                3. A minimum fee or minimum time unit set for each service type.
                4. The minimum added to the schedule and explained to the front desk.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A minimum fee or minimum charge unit is set for each service type and printed on the fee schedule, based on a costed sample of small jobs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Time how long it takes to open, record and bill one small job"
                - "Cost the ten smallest jobs from the last quarter"
                - "Set a minimum fee or charge unit for each service type"
                - "Brief the front desk on how to explain the minimum"
            - name: Fee schedule format, version and effective date
              description: |-
                ## Purpose
                When fees change, the old and new lists sit side by side in drawers, inboxes and the website, and nobody knows which one applies to a client booked last month. Giving the schedule a version number, an effective date and one master copy, with an internal edition and a client-facing edition, ends that confusion.

                ## Milestones
                1. One master fee schedule file, with a version number and effective date on every page.
                2. A client-facing edition that shows prices without internal codes or margins.
                3. Old versions archived in a dated folder rather than deleted.
                4. A rule written on which version applies to work already quoted or booked.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned master schedule and a client edition exist with effective dates, and a written rule says which version applies to work in progress."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a version number and effective date to the master schedule"
                - "Create a client edition without internal codes or cost notes"
                - "Move superseded lists into a dated archive folder"
                - "Write the rule for which version applies to work already quoted"
            - name: Authority to quote, discount and waive fees
              description: |-
                ## Purpose
                Fees leak when anyone can knock ten percent off at reception or a junior professional quietly waives a follow-up charge. A written authority table, saying who may quote outside the schedule, discount, waive or write down a fee and up to what amount, protects income and stops staff being put on the spot by a persistent client.

                ## Milestones
                1. Every role that quotes or charges fees listed.
                2. A limit set for each role on discounts, waivers and non-standard quotes.
                3. A rule that every discount or waiver is recorded with a reason code in the practice system.
                4. The table signed off by the owners and explained to all staff.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed authority table sets discount, waiver and quoting limits for every role, and reason codes for discounts exist in the practice system."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every role that quotes or applies fees"
                - "Draft a limit for each role on discounts and waivers"
                - "Set up discount reason codes in the practice software"
                - "Walk the team through the authority table at a staff meeting"
            - name: Annual fee review cycle
              description: |-
                ## Purpose
                Practices that review fees only when something hurts end up with large, painful jumps or years of prices falling behind costs. A fixed annual review, with the same inputs each year (costs, capacity, comparisons, margins by service and client feedback), makes increases small, regular and defensible.

                ## Milestones
                1. A standing date set for the review, about three months before the new fees take effect.
                2. An input pack template listing the figures needed each year.
                3. The first review held, with a decision on each service line minuted.
                4. New fees, the effective date and the notice plan recorded.

                ## Notes
                Start from the **Meeting notes** template so each year's decisions and reasons sit together for the next review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fee review meeting is held each year on a standing date, with minutes recording the decision for every service line and the effective date."
                cadence: cyclic
              tasks:
                - "Choose a standing month for the annual fee review"
                - "Build an input pack template listing costs, capacity and comparisons"
                - "Hold the annual fee review and minute each decision @recurring(yearly)"
                - "Send the agreed new fees to the person who updates the system"
            - name: Fixed fee estimate accuracy check
              description: |-
                ## Purpose
                Fixed fees only pay if the effort behind them stays close to what you priced. Comparing the recorded hours on each finished fixed-fee job with the hours assumed in the price, every month, shows which fees are too low, which scopes are leaking and which professionals routinely run over.

                ## Milestones
                1. The assumed hours behind every fixed fee written beside it on the schedule.
                2. A monthly list of finished fixed-fee jobs with assumed and actual hours.
                3. Services that run over by more than a set margin three months running flagged for repricing.
                4. Findings fed into the annual fee review.

                ## Notes
                Start from the **Metrics log** template and keep one row per service per month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log compares assumed and actual hours for every finished fixed-fee job, and services that overrun repeatedly are flagged for review."
                cadence: rolling
              tasks:
                - "Write the assumed hours beside each fixed fee on the schedule"
                - "Compare assumed and actual hours on finished fixed-fee jobs @recurring(monthly:12)"
                - "Flag any service that overruns three months in a row"
            - name: Discounts and waivers monthly review
              description: |-
                ## Purpose
                Small discounts add up: a practice giving five percent off a fifth of its invoices loses a full percent of income without anyone deciding to. Reviewing every discount and waiver against the authority table each month shows who is giving them, why, and whether the fee itself is the real problem.

                ## Milestones
                1. A monthly report of discounts and waivers by reason code and by person.
                2. Any discount outside a person's authority followed up the same month.
                3. Total discounts as a share of gross fees tracked month by month.
                4. Repeated discounts on one service raised as a pricing question.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Discounts and waivers are reported monthly by reason and person, out-of-authority discounts are followed up, and their share of gross fees is tracked."
                cadence: rolling
              tasks:
                - "Build a saved report of discounts by reason code and staff member"
                - "Review discounts and waivers against the authority table @recurring(monthly:18)"
                - "Record total discounts as a share of gross fees each month"
            - name: Margin by service line each quarter
              description: |-
                ## Purpose
                Some services carry the practice and others quietly lose money once materials, lab bills, room time and professional hours are counted. A quarterly margin by service line shows where fees need to rise, which services deserve more diary time and which might be priced as loss leaders on purpose.

                ## Milestones
                1. Direct costs per service (time, materials, lab or third-party fees) estimated.
                2. Income and direct cost for each service line totalled for the quarter.
                3. A contribution margin per service and per professional hour calculated.
                4. The three weakest services named, with a pricing or delivery action against each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly table gives contribution margin per service line and per professional hour, with an action recorded against the three weakest."
                cadence: rolling
              tasks:
                - "Estimate the direct cost of each service, including materials and third parties"
                - "Calculate contribution margin per service line @recurring(quarterly)"
                - "Name the three weakest services and an action for each"
            - name: Cost increase watch for the fee review
              description: |-
                ## Purpose
                Rent reviews, salary rises, insurance renewals, lab price lists and software subscriptions all move during the year, and by the time the annual review comes the practice has absorbed them silently. Logging every cost change as it lands gives the fee review a real number for how far costs have moved.

                ## Milestones
                1. A log of material cost changes, with the date, supplier and annual effect.
                2. Known future increases, such as a rent review date or pay award, entered in advance.
                3. A running total of the annual cost increase as a percentage of overheads.
                4. The total carried into the annual fee review pack.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cost change log is updated each quarter and gives a total annual cost increase percentage for the fee review pack."
                cadence: rolling
              tasks:
                - "Start a cost change log with last year's main supplier increases"
                - "Enter known future increases such as rent reviews and pay awards"
                - "Update the log from supplier notices and renewals @recurring(quarterly)"
            - name: Fee enquiry handling at the front desk
              description: |-
                ## Purpose
                "How much will it cost?" is often the first question a new client asks, and a vague or nervous answer loses bookings while an overconfident one creates disputes later. A short, agreed way of answering fee enquiries, with ranges where needed and a clear route to a written estimate, makes the front desk consistent and confident.

                ## Milestones
                1. The ten most common fee questions written down with agreed answers.
                2. A rule for when to give a fixed price, a range or a promise of a written estimate.
                3. Front desk staff practised the answers in short role plays.
                4. A monthly sample of calls or emails checked against the agreed answers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written answers to the ten most common fee questions are in use at the front desk, and a monthly sample confirms they are being given."
                cadence: rolling
              tasks:
                - "Ask the front desk to list the fee questions they hear most"
                - "Ask the agent to draft plain answers to each question from the schedule"
                - "Run a 20-minute role play with reception staff"
                - "Check a sample of fee enquiries against the agreed answers @recurring(monthly:8)"
            - name: Published price list kept consistent
              description: |-
                ## Purpose
                Fees appear on the website, reception boards, leaflets, booking confirmations and engagement letters, and a single stale copy undermines trust in all the others. A quarterly check that every published price matches the master schedule catches the leftover leaflet before a client waves it at reception.

                ## Milestones
                1. Every place a fee is published listed, online and printed.
                2. Each one compared with the current master schedule.
                3. Mismatches corrected or old material withdrawn.
                4. A note of the check kept with the date and what was fixed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter every published fee is checked against the master schedule, and a dated note records the mismatches fixed."
                cadence: rolling
              tasks:
                - "List every website page, leaflet and template that shows a fee"
                - "Compare published fees with the master schedule @recurring(quarterly)"
                - "Withdraw or reprint any material with an old fee"
            - name: Fee objections and price feedback log
              description: |-
                ## Purpose
                Lost bookings, clients who query an invoice and prospective clients who say "too expensive" are the most direct evidence of whether fees are right, and most practices let it evaporate. A simple log of every fee objection, with the service and what happened next, gives the annual review real client evidence instead of guesses.

                ## Milestones
                1. A shared log with columns for date, service, objection and outcome.
                2. Front desk and professionals adding entries as objections happen.
                3. A monthly count of objections by service.
                4. Patterns summarised for the annual fee review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fee objection log is kept by the whole team, counted monthly by service, and summarised in the annual review pack."
                cadence: rolling
              tasks:
                - "Set up a shared fee objection log with four columns"
                - "Ask the team to log every price objection the day it happens"
                - "Count objections by service and note any pattern @recurring(monthly:26)"
            - name: Insurer and payer rate register
              description: |-
                ## Purpose
                Where insurers, schemes or government programmes pay a set rate, the practice effectively runs several fee schedules at once, and contract renewal dates slip past unnoticed. A register of each payer's current rate for your main services, beside your own self-pay fee and the contract renewal date, shows which payers underpay and when you can raise it.

                ## Milestones
                1. Every insurer, scheme or programme the practice accepts listed with its contract or agreement dates.
                2. Each payer's current rate for your top ten services recorded beside your own fee.
                3. The gap between each payer's rate and your fee shown as a percentage.
                4. Renewal and notice dates entered in the practice calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register shows each payer's rates for the top ten services beside your own fees, with every renewal and notice date in the calendar."
                cadence: rolling
              tasks:
                - "List each insurer and scheme the practice accepts with contract dates"
                - "Record each payer's rate for your top ten services"
                - "Put every renewal and notice date in the practice calendar"
                - "Update payer rates from the latest schedules @recurring(yearly)"
            - name: Learning value-based pricing for professional work
              description: |-
                ## Purpose
                Hourly billing rewards slowness and caps what an experienced professional can earn, while value-based pricing charges for the outcome and its importance to the client. Learning the method properly, from the books and the professional body courses that teach it, helps you see where it fits your practice and where it would only cause confusion.

                ## Milestones
                1. Two recognised books or courses on value pricing for professional firms completed.
                2. The questions used to understand a client's value written down as your own checklist.
                3. Three past jobs repriced on paper using the method, compared with what was billed.
                4. A short note on which services, if any, suit value pricing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two value pricing sources are completed, three past jobs are repriced on paper, and a note says which services suit the method."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose two books or courses on value pricing for professional firms"
                - "Write your own checklist of client value questions"
                - "Reprice three past jobs on paper using the method"
                - "Note which of your services might suit value pricing"
            - name: Talking about fees with confidence
              description: |-
                ## Purpose
                Many professionals trained for years in their discipline and never once in saying a price out loud, so they apologise, discount before being asked or avoid the topic until the invoice. Practising a short, calm way of stating fees and handling pushback changes how clients hear the price, and makes fewer of them argue about it later.

                ## Milestones
                1. A two-sentence way of stating each main fee written in your own words.
                2. Three responses prepared for the most common pushbacks.
                3. Five real fee conversations held without offering an unprompted discount.
                4. What worked and what did not noted for the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Prepared fee statements and pushback responses are written down and have been used in five real conversations without unprompted discounts."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write how you would state your three most common fees in two sentences"
                - "Prepare answers to the three pushbacks you hear most"
                - "Practise the conversation with a colleague or the practice manager"
                - "Note the outcome of your next five fee conversations"
            - name: Writing good fee estimates and ranges
              description: |-
                ## Purpose
                Professional rules often require a written estimate, and a good one protects both sides: it gives a figure or range, states the assumptions it rests on and says what happens if they change. Learning to write estimates that way cuts disputes over "you said it would be" more than any change to the fees themselves.

                ## Milestones
                1. An estimate structure agreed: figure or range, assumptions, exclusions and what triggers a revised estimate.
                2. Three recent estimates rewritten in the new structure as examples.
                3. A rule for when a revised estimate must be sent, such as cost passing the estimate by a set percentage.
                4. The structure saved as a standard text in the practice software.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A standard estimate text with assumptions, exclusions and a revision trigger is saved in the practice system, with three worked examples."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect three recent estimates that led to fee queries"
                - "Draft an estimate structure with assumptions and exclusions"
                - "Rewrite the three estimates in the new structure"
                - "Save the structure as standard text in the practice software"
            - name: Contribution margin basics for owners
              description: |-
                ## Purpose
                Owners who can read a profit and loss account often still cannot say which services make money, because overheads are shared and direct costs are buried. Learning contribution margin, break-even volume and the difference between fixed and variable costs gives you the tools to judge any fee change in ten minutes.

                ## Milestones
                1. Fixed and variable practice costs separated on one page.
                2. Contribution margin worked out for your three highest volume services.
                3. Break-even volume calculated for one service at two different prices.
                4. The method explained back to your accountant or practice manager to check understanding.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Contribution margin and break-even volume are calculated for three services, and the workings are checked with your accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Split last year's costs into fixed and variable on one page"
                - "Work out contribution margin for your three busiest services"
                - "Calculate break-even volume for one service at two prices"
                - "Walk your accountant through the workings"
            - name: Price presentation without tricks
              description: |-
                ## Purpose
                How fees are laid out changes how they are read: a menu of three treatment options, a range rather than a single number, or a package price beside the separate items. Studying the main ideas of price presentation, and choosing the ones that are honest and fit professional rules, helps clients decide without feeling sold to.

                ## Milestones
                1. The main presentation ideas (options, anchoring, packages, round numbers) summarised from one reliable source.
                2. Each idea checked against your profession's rules on fair dealing and advertising.
                3. One treatment plan, proposal or engagement letter redesigned using the ideas you kept.
                4. Client reactions to the new layout noted over a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A redesigned treatment plan or proposal layout is in use, built only on presentation ideas checked against professional rules, with a month of client reactions noted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one reliable source on how prices are presented and perceived"
                - "Check each idea against your profession's fair dealing rules"
                - "Redesign one treatment plan or proposal layout"
                - "Note client reactions to the new layout for a month"
            - name: Moving a service from hourly to fixed fee
              description: |-
                ## Purpose
                Certainty is what clients ask for, and services you deliver repeatedly with a predictable effort are usually the best ones to fix. Moving one service from hourly to a fixed fee in stages, priced from real past hours and protected by a written scope, lets you test the change before rolling it out across the practice.

                ## Milestones
                1. One service chosen with at least twenty past jobs to price from.
                2. A fixed fee set from the distribution of past hours, not the average alone.
                3. A scope, exclusions and change trigger written for the new fee.
                4. Three months of jobs delivered at the fixed fee and compared with the old hourly results.

                ## Notes
                Price from a point well above the average past hours, because a fixed fee carries the risk of the occasional difficult job.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One service is offered at a written fixed fee with scope, and three months of results are compared with its old hourly income."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one service with at least twenty past jobs on record"
                - "Plot the hours spent on those past jobs"
                - "Set the fixed fee and write its scope and exclusions"
                - "Compare three months of fixed-fee jobs with the old hourly income"
            - name: Capped fee option for budget-sensitive clients
              description: |-
                ## Purpose
                Some clients will not start work without knowing the worst case, but the job is too uncertain to fix. A capped fee, billed hourly up to an agreed maximum, wins that work while limiting the practice's exposure, provided the cap and its conditions are written carefully.

                ## Milestones
                1. Services where a cap is offered, and where it is not, decided.
                2. A rule for setting the cap from past job data.
                3. Standard wording for the cap, its assumptions and what lifts it.
                4. Capped jobs tracked to see how often the cap is reached.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Standard capped fee wording and a cap-setting rule exist, and every capped job is tracked against its cap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide which services may be offered on a capped fee"
                - "Write a rule for setting the cap from past job hours"
                - "Draft standard cap wording with the conditions that lift it"
                - "Add a capped flag to jobs so they can be tracked"
            - name: Package pricing for common service combinations
              description: |-
                ## Purpose
                Clients often buy the same services together: a new patient exam with X-rays and a hygiene visit, company formation with the first year's accounts, a site survey with a feasibility report. A package price for the common combinations is easier to say yes to and simpler to administer, as long as each item still covers its cost.

                ## Milestones
                1. The five most common service combinations found from last year's invoices.
                2. A package price set for each, with the saving against separate items stated.
                3. Each package checked to cover direct cost plus a margin.
                4. Packages added to the schedule and the booking or engagement process.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Packages for the five most common service combinations are on the fee schedule, each costed to cover direct cost plus margin."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the five most common service combinations in last year's invoices"
                - "Set a package price for each and note the saving"
                - "Check each package covers direct cost plus margin"
                - "Add the packages to the booking or engagement process"
            - name: Membership or retainer fee plan
              description: |-
                ## Purpose
                Monthly memberships for routine care and retainers for ongoing advice turn irregular income into a predictable one and keep clients coming back. Designing the plan with a clear list of what is covered, a fair monthly price and rules for cancelling makes it attractive to clients and safe for the practice.

                ## Milestones
                1. The services a member or retained client receives each year listed.
                2. A monthly price set from the cost of those services and expected usage.
                3. Terms written for joining, cancelling, missed services and price changes.
                4. The plan launched to a first group of clients and uptake recorded.

                ## Notes
                Some regulators and insurers have rules on membership plans in healthcare. Check them before launch, and keep the plan terms separate from clinical decisions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A membership or retainer plan with written terms and a costed monthly price is offered, and monthly uptake and usage are recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List what a member or retained client would receive in a year"
                - "Cost those services against expected usage to set a monthly price"
                - "Draft the plan terms for joining, cancelling and price changes"
                - "Check plan members' usage against the plan's assumptions @recurring(monthly:3)"
            - name: Cancellation, no-show and late fee policy
              description: |-
                ## Purpose
                Missed appointments and last-minute cancellations are lost professional time that can never be resold, and many practices lose several hours a week to them. A written policy, with a notice period, a fee or deposit rule and the exceptions staff may apply, recovers some of that time and changes client behaviour when it is explained up front.

                ## Milestones
                1. The cost of missed appointments over the last three months measured.
                2. A notice period, fee level and list of exceptions decided.
                3. The policy written in plain words and shown at booking and in confirmations.
                4. Missed appointment rates compared before and after the policy.

                ## Notes
                Check the policy against consumer protection rules and any insurer or government programme rules, which may restrict charging some patients.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written cancellation policy is shown at booking, and the missed appointment rate is measured for three months before and after it starts."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count missed and late-cancelled appointments for the last three months"
                - "Decide the notice period, fee and allowed exceptions"
                - "Add the policy to booking confirmations and the website"
                - "Review missed appointment rates and fees charged @recurring(monthly:15)"
            - name: Deposits and payment on account for large work
              description: |-
                ## Purpose
                Large treatment plans, complex matters and long design projects can leave the practice carrying weeks of unpaid cost before the first invoice. A clear rule for deposits or money on account, by size and type of job, protects cash and filters out clients who were never going to pay.

                ## Milestones
                1. A threshold set above which a deposit or payment on account is required.
                2. The deposit level and its timing decided for each service type.
                3. Wording added to estimates, treatment plans and engagement letters.
                4. Professional rules on holding client money checked where deposits are held before work is done.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A deposit rule with thresholds and levels is written into estimates and engagement letters, and the client money rules that apply have been checked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the job value above which a deposit is required"
                - "Decide deposit levels and timing for each service type"
                - "Add deposit wording to estimates and engagement letters"
                - "Check whether deposits count as client money under your rules"
            - name: Concession, sliding scale and pro bono policy
              description: |-
                ## Purpose
                Most practices already give reduced fees to some clients, students, pensioners or charities, but quietly and inconsistently, which is unfair to clients and hard to afford. A written concession policy with clear eligibility, a set budget and a yearly review lets the practice be generous on purpose.

                ## Milestones
                1. Existing informal concessions found from the last year's discounts.
                2. Eligibility rules and concession levels written down.
                3. An annual concession and pro bono budget agreed by the owners.
                4. Concessions given recorded against the budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written concession policy with eligibility, levels and an annual budget is agreed, and every concession is recorded against that budget."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the informal concessions given in the last year"
                - "Write eligibility rules and concession levels"
                - "Agree an annual concession budget with the owners"
                - "Review concessions given against the budget @recurring(yearly)"
            - name: Rate tiers by seniority and role
              description: |-
                ## Purpose
                People will pay different rates for a senior partner, an associate and a trainee, or for a specialist and a general clinician, and a single rate either overprices junior work or underprices senior judgement. Setting tiers by role, with a rule for which work goes to which tier, makes delegation pay.

                ## Milestones
                1. Roles grouped into three to five rate tiers.
                2. A rate set for each tier from cost per hour and market comparison.
                3. Guidance written on which tasks belong to which tier.
                4. Tiers loaded into the practice system and shown on the client schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five rate tiers with rates and delegation guidance are set up in the practice system and shown on the client schedule."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Group professional roles into three to five tiers"
                - "Set a rate for each tier from cost per hour and comparisons"
                - "Write which tasks belong to which tier"
                - "Review tier rates and move people who have progressed @recurring(yearly)"
            - name: Pricing a new service before launch
              description: |-
                ## Purpose
                New services are often priced by guessing or copying a competitor, then left at a launch price that never covered the equipment, training and time. Building the price from cost, expected volume and the value to the client, with a review date after the first few months, gives the service a fair start.

                ## Milestones
                1. The set-up cost (equipment, training, materials) and the time per delivery estimated.
                2. Expected volume for the first year agreed with the professional who will deliver it.
                3. A launch fee set that recovers set-up cost within a target period.
                4. A review of the fee booked for after the first three months.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new service has a launch fee built from set-up cost, delivery time and expected volume, with a dated review after three months."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate set-up cost and time per delivery for the new service"
                - "Agree expected first-year volume with the delivering professional"
                - "Set a launch fee that recovers set-up cost in the target period"
                - "Book the three-month fee review in the calendar"
            - name: Annual fee increase announced to clients
              description: |-
                ## Purpose
                Handled well, a fee increase is barely noticed; handled badly it produces angry calls and a wave of cancellations. Giving clients clear notice, a short reason and the effective date, and briefing staff before anyone asks, turns the annual increase into a routine event rather than a crisis.

                ## Milestones
                1. The notice period required by contracts, engagement letters and payer agreements confirmed.
                2. A short client letter or email explaining the new fees and effective date.
                3. Staff briefed with answers to the likely questions before the notice goes out.
                4. New fees loaded into the practice system to start on the effective date.

                ## Notes
                Send the notice once and early. Several small reminders feel like nagging, while one clear message with enough notice is usually accepted.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Clients receive written notice of the new fees within the required notice period, and the new fees start in the system on the effective date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the notice period in contracts and engagement letters"
                - "Ask the agent to draft a short client letter on the new fees"
                - "Brief all staff on likely questions before the notice goes out"
                - "Schedule the new fees in the practice system for the effective date"
            - name: Legacy rates for long-standing clients
              description: |-
                ## Purpose
                Many practices carry a group of loyal clients still paying fees from five or ten years ago, often agreed by a partner who has since retired. Identifying them, working out what the discount costs and having a planned conversation to bring them up over one or two steps fixes an old leak without losing the relationship.

                ## Milestones
                1. Clients paying below the current schedule listed with the size of the gap.
                2. The annual cost of each legacy rate calculated.
                3. A phased plan for each client, in one or two steps, agreed with the responsible professional.
                4. The conversations held and the new rates recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every client on a legacy rate is listed with its annual cost, and each has a recorded plan and outcome for moving to the current schedule."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Run a report of clients billed below the current schedule"
                - "Calculate the annual cost of each legacy rate"
                - "Agree a one- or two-step plan with each responsible professional"
                - "Record each conversation and the agreed new rate"
            - name: Payer rate renegotiation meeting
              description: |-
                ## Purpose
                Insurer and scheme rates often stay flat for years because nobody at the practice asks, while costs rise every year. Going into a renegotiation with your cost per service, the gap to your self-pay fee, your volume with that payer and your quality data gives the conversation substance, even if the first answer is no.

                ## Milestones
                1. The payer chosen from the rate register, with its renewal and notice dates confirmed.
                2. A one-page case with volumes, cost per service, rate gap and quality or outcome data.
                3. The meeting or written request made before the notice deadline.
                4. The outcome and any new rates recorded in the register.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written rate case is submitted to one payer before its notice deadline, and the outcome is recorded in the rate register."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the payer with the largest gap and nearest renewal"
                - "Pull your volume and cost per service for that payer"
                - "Write a one-page rate case with volumes and outcome data"
                - "Request the renegotiation meeting before the notice deadline"
            - name: Panel or tender rate submission
              description: |-
                ## Purpose
                Insurer panels, corporate client panels and public frameworks ask for rates months in advance, then hold you to them for years. Preparing a tender rate card from your cost per hour, the expected volume and the extra admin the panel demands avoids winning work you cannot afford to deliver.

                ## Milestones
                1. The tender's rate format, term and volume assumptions read and summarised.
                2. The extra costs of the panel (reporting, billing rules, audits) estimated.
                3. A rate card set that stays above cost per hour plus a margin for the term.
                4. The submission sent before the deadline and a copy filed with the rate register.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A tender rate card priced above cost per hour for the full term is submitted before the deadline and filed with the payer rate register."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the tender's rate format, term and volumes"
                - "Estimate the panel's extra reporting and billing costs"
                - "Build a rate card that stays above cost for the full term"
                - "Submit the rates before the deadline and file a copy"
            - name: Fee schedule for a newly opened practice
              description: |-
                ## Purpose
                A new practice has no history to price from and a strong temptation to open cheap to fill the diary, which is hard to reverse later. Setting opening fees from cost per hour and local comparisons, with any introductory offer clearly time-limited, starts the practice at a sustainable level.

                ## Milestones
                1. Cost per hour estimated from the business plan's overheads and expected hours.
                2. Opening fees set within the local range for comparable practices.
                3. Any introductory offer written with an end date.
                4. A first fee review booked six months after opening.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Opening fees built from business plan costs and local comparisons are published, any offer has a written end date, and a six-month review is booked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate cost per hour from the business plan figures"
                - "Set opening fees inside the local range for comparable practices"
                - "Write an end date on any introductory offer"
                - "Book a fee review for six months after opening"
            - name: Inherited fees after buying a practice
              description: |-
                ## Purpose
                Buying a practice means taking on the seller's fee list, legacy rates and habits, and clients are watching for the new owner to put prices up. Mapping the inherited fees against your own pricing and deciding what changes, when and how it is explained protects the goodwill you just paid for.

                ## Milestones
                1. The seller's full fee list, discounts and special arrangements documented.
                2. Inherited fees compared with your target schedule line by line.
                3. A timetable agreed for any changes, usually after a settling-in period.
                4. Client communication drafted, ideally with the seller's support.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The inherited fee list is compared line by line with your target schedule, and a dated change timetable and client message are agreed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Document the seller's fee list and special arrangements"
                - "Compare inherited fees with your target schedule line by line"
                - "Agree a timetable for changes after a settling-in period"
                - "Ask the seller to support the client message about any changes"
            - name: Fee setting as a single-handed practitioner
              description: |-
                ## Purpose
                When you are the only professional, every fee is directly your income and every hour you underprice is an evening worked. A sole practitioner's schedule needs a tighter link between fees and personal capacity, with fewer service lines, firmer minimums and a clear limit on discounting.

                ## Milestones
                1. Your personal target income and maximum weekly client hours written down.
                2. The fee per hour needed to reach the target within those hours calculated.
                3. The schedule trimmed to the services you can deliver profitably alone.
                4. A personal rule on discounts written and kept by the phone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A sole practitioner fee schedule is set from a written target income and maximum client hours, with a personal discount rule recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your target income and maximum weekly client hours"
                - "Calculate the hourly fee needed to hit the target"
                - "Drop or reprice services you cannot deliver profitably alone"
                - "Write a personal discount rule and keep it by the phone"
            - name: Harmonising fees across multiple sites
              description: |-
                ## Purpose
                Practices that grow by opening or buying sites often end up with different prices for the same service at each location, which confuses clients who move between them. Deciding where fees should be the same and where local rent and markets justify a difference gives a schedule the group can explain.

                ## Milestones
                1. Fees for the top twenty services compared across all sites.
                2. Reasons for each difference recorded: rent, local market, payer mix or history.
                3. A rule agreed on which fees are group-wide and which may vary by site.
                4. Changes scheduled and each site lead briefed.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule states which fees are group-wide and which vary by site, and a quarterly comparison confirms the sites follow it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare fees for the top twenty services across all sites"
                - "Record the reason for each difference between sites"
                - "Agree which fees are group-wide and which may vary"
                - "Compare site fees against the group rule @recurring(quarterly)"
            - name: Fees when several professionals share one list
              description: |-
                ## Purpose
                In practices with associates, consultants or visiting specialists, clients can be charged different amounts for the same service depending on who sees them, and professionals paid on a share of fees have a stake in the price. Agreeing who sets which fees, and how differences are justified, avoids friction between colleagues and confusion for clients.

                ## Milestones
                1. Each professional's current fees for the shared services listed side by side.
                2. Agreement on whether fees vary by professional, and on what grounds.
                3. The link between fees and each professional's pay or fee share noted.
                4. The agreed approach written into associate or consultant agreements at renewal.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written rule on how fees may differ between professionals is agreed by the owners and associates and added to agreements at their next renewal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each professional's fees for the shared services"
                - "Discuss at a team meeting whether fees should vary by professional"
                - "Note how fee changes affect each person's pay or share"
                - "Flag the agreed rule for the next associate agreement renewals"
            - name: Self-pay prices beside insurer rates
              description: |-
                ## Purpose
                A practice paid partly by insurers and partly by clients directly must decide whether self-pay prices match the insurer rates, sit above them or are set independently. Getting this right matters, because some payer contracts restrict charging self-pay clients less than the insured, and transparency rules may require published cash prices.

                ## Milestones
                1. The share of income from each payer type and from self-pay measured.
                2. Contract clauses on charging self-pay clients identified and noted.
                3. A self-pay pricing approach chosen and written down.
                4. Self-pay prices published where required and checked against payer terms each quarter.

                ## Notes
                Ask your adviser to confirm what each payer contract allows before setting self-pay prices lower than contracted rates.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written self-pay pricing approach is consistent with every payer contract clause recorded, and published self-pay prices are checked each quarter."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Measure the income share from each payer type and self-pay"
                - "Find each contract's clauses on charging self-pay clients"
                - "Write the practice's self-pay pricing approach"
                - "Check self-pay prices against payer terms @recurring(quarterly)"
            - name: Caribbean practice fees, currency and VAT
              description: |-
                ## Purpose
                Practices in the Caribbean often price for local clients, regional visitors and US or UK dollar payers at once, and VAT or similar taxes must be shown correctly on the schedule. Deciding the currency each fee is quoted in, how exchange movements are handled and whether prices are shown tax-inclusive keeps the schedule clear and compliant.

                ## Milestones
                1. The currencies clients actually pay in, and in what proportion, measured.
                2. A rule for which currency each service or client group is quoted in.
                3. VAT or sales tax treatment of each service confirmed with your accountant.
                4. Prices shown tax-inclusive or exclusive consistently, as the local rules require.

                ## Notes
                Tax and foreign exchange rules differ across Trinidad and Tobago, Jamaica, Barbados, the OECS and elsewhere. Confirm the treatment for your country with a local accountant.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written currency and tax rule for the fee schedule is confirmed by a local accountant, and every published price follows it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Measure how much income arrives in each currency"
                - "Decide which currency each service or client group is quoted in"
                - "Confirm the VAT or sales tax treatment with your accountant"
                - "Update the schedule to show tax consistently"
            - name: Fees during high inflation or devaluation
              description: |-
                ## Purpose
                When local prices rise fast or the currency loses value, an annual review is too slow: imported materials, equipment parts and lab fees jump within months while fees stay frozen. A mid-year mechanism, with a trigger, a capped adjustment and plain notice to clients, keeps fees from falling behind without surprising anyone.

                ## Milestones
                1. A trigger chosen, such as an inflation figure or exchange rate movement over a set level.
                2. The maximum interim adjustment and its notice period decided.
                3. Engagement letters and plans checked to allow interim changes.
                4. The trigger figures checked each month while conditions last.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written interim fee mechanism sets a trigger, maximum adjustment and notice period, and the trigger figures are checked monthly while it applies."
                cadence: rolling
              tasks:
                - "Choose the inflation or exchange rate trigger for an interim review"
                - "Set the maximum interim adjustment and notice period"
                - "Check engagement terms allow an interim fee change"
                - "Check the trigger figures against the threshold @recurring(monthly:5)"
            - name: Value pricing a complex matter or project
              description: |-
                ## Purpose
                Some work is unusual, high stakes or worth far more to the client than the hours it takes: a complex transaction, a major restoration plan, a specialist expert report. Pricing one such job on value, with options at different levels and the hourly cost kept as a floor, is where experienced owners earn a fair return on judgement.

                ## Milestones
                1. One upcoming complex job chosen and the client's value and risks discussed with them.
                2. Two or three options priced, each with a different scope or level of service.
                3. Every option tested against the internal hourly cost as a floor.
                4. The outcome and actual hours compared with the price after completion.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One complex job is quoted with two or three value-based options above the hourly cost floor, and its final hours are compared with the price."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick one upcoming complex job suited to value pricing"
                - "Discuss with the client what the outcome is worth and what worries them"
                - "Price two or three options and test each against cost"
                - "Compare actual hours with the agreed price at completion"
            - name: Conditional and success fee arrangements
              description: |-
                ## Purpose
                Success fees, contingency fees and conditional fee uplifts are tightly regulated, banned in some professions and countries and allowed with strict conditions in others. Where they are allowed, a written policy on which matters qualify, how the risk is assessed and how the agreement is documented keeps the practice inside the rules and out of disputes.

                ## Milestones
                1. The rules on conditional or success fees for your profession and country confirmed with your regulator or adviser.
                2. A risk assessment method for deciding whether to accept a matter on these terms.
                3. Standard agreement wording approved by your adviser.
                4. A register of conditional fee matters with their risk and outcome.

                ## Notes
                This is not legal advice. If the rules are unclear, do not offer these arrangements until a professional adviser has confirmed they are permitted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The rules on conditional fees are confirmed in writing by an adviser, and any such matter has an approved agreement and a register entry."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your regulator or adviser whether conditional fees are allowed"
                - "Draft a risk assessment checklist for conditional fee matters"
                - "Have standard agreement wording approved by your adviser"
                - "Set up a register of conditional fee matters and outcomes"
            - name: Fee code structure in the practice system
              description: |-
                ## Purpose
                Years of additions leave practice software with duplicate fee codes, retired items still selectable and services billed under the wrong code, which makes every margin and comparison report unreliable. Cleaning the fee code structure so each service has exactly one current code, linked to its scope, makes the whole schedule measurable.

                ## Milestones
                1. Every fee code in the system exported with its use count for the last year.
                2. Duplicates merged and retired codes hidden from selection.
                3. Each remaining code linked to one service and scope on the schedule.
                4. A rule written for who may add new codes and how.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active fee code maps to one service on the schedule, retired codes are hidden, and a written rule controls new codes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export every fee code with its use count for the last year"
                - "Merge duplicate codes and hide retired ones"
                - "Link each remaining code to its service and scope"
                - "Audit new and changed fee codes @recurring(quarterly)"
            - name: Testing a price change on one service
              description: |-
                ## Purpose
                Owners often fear that any increase will drive clients away, and the only way to find out is to try it carefully. Raising the price of one service, while watching bookings, conversion from enquiry and objections for three months, gives real evidence about how price-sensitive your clients are.

                ## Milestones
                1. One service chosen where the change can be measured cleanly.
                2. Three months of baseline bookings, conversion and objections recorded.
                3. The new price introduced with normal notice.
                4. Three months of results compared with the baseline and a decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three months of bookings, conversion and objections before and after a price change on one service are compared, and the decision is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one service with steady, measurable demand"
                - "Record three months of baseline bookings and conversion"
                - "Introduce the new price with normal client notice"
                - "Compare results with the baseline and record a decision"
            - name: Competition law check on fee discussions
              description: |-
                ## Purpose
                Professional networks, local associations and friendly rivals talk shop, and a conversation about "what everyone should be charging next year" can amount to price fixing under competition law. Knowing where the line sits, and briefing partners and staff, protects the practice from a risk most owners never think about.

                ## Milestones
                1. The competition authority's guidance for professional services in your country read and saved.
                2. A short internal rule on what may and may not be discussed with other practices about fees.
                3. Partners and senior staff briefed and the briefing recorded.
                4. Any association fee guidance checked with an adviser before use.

                ## Notes
                Start from the **Risk register** template and record competition law as a standing risk with its controls.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written internal rule on fee discussions with other practices exists, partners are briefed on it, and the risk is recorded in the risk register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find your competition authority's guidance for professional services"
                - "Write a one-page rule on fee discussions with other practices"
                - "Brief partners and senior staff on the rule"
                - "Ask an adviser about any association fee guidance you use"
---

# Practice Fee Schedules

This area is for the owner who sets the prices: what a consultation, a procedure, an hour of partner time or a fixed-fee job costs the client, and why. It starts with foundations (every current fee in one schedule, your real cost per professional hour, capacity, the regulator's fee rules, a pricing model per service and a scope for each price), then the operating machinery that keeps fees honest, the skills of pricing and talking about money, improvements such as fixed fees, packages, retainers and cancellation charges, the dated moments of an annual increase or a payer negotiation, the situations of single-handed, multi-site, acquired and Caribbean practices, and finally specialist work on value pricing, conditional fees and competition law.

What repeats is a monthly check of fixed-fee jobs against their estimates, a monthly log of discounts and fee objections, a quarterly look at costs, margins by service and the published price list, and a yearly fee review that ends in a dated increase. The Compliance control, Meeting notes, Metrics log and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
