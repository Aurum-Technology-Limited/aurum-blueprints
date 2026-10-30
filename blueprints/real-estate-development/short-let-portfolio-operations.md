---
id: real-estate-development.short-let-portfolio-operations
name: Short-Let Portfolio Operations
description: "Run a portfolio of short-let units as a real business: licences and permissions per unit, unit economics, pricing tools, cleaning teams, guest messaging, occupancy data and the systems that let you scale."
category: business
version: 1.0.0
tags: [real-estate-development, short-let-portfolio-operations, small-business, founder, short-let, holiday-lets, revenue-management, guest-operations]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - vendor
    - month-end-close
    - metrics-log
    - onboarding-plan
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Short-Let Portfolio Operations
          description: "Running a portfolio of short-let units as a business: pricing tools, cleaning teams, guest messaging, licensing rules, occupancy data and unit economics."
          projects:
            - name: Licence and registration register for every unit
              description: |-
                ## Purpose
                Short-let rules are set city by city and sometimes street by street: registration numbers, planning use, night caps, fire certificates and tourism licences all vary, and a platform can delist a unit that shows the wrong number. A single register listing each unit's permissions, numbers and renewal dates is the document every other decision rests on. Build it before adding another unit.

                ## Milestones
                1. Every unit listed with its address, local authority and the short-let rules that apply there.
                2. Each unit's registration, licence or permit number recorded, or the gap marked as missing.
                3. Renewal and inspection dates entered for every permission that expires.
                4. Any unit without the permission it needs flagged with a named next step and owner.

                ## Notes
                Rules change often. Record the source and the date you checked it for each unit, so a later check knows how stale the entry is.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register covering every unit, each with its permissions, numbers, renewal dates and the date the rules were last checked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every unit with its address and the authority it sits under"
                - "Look up each authority's current short-let rules and note the source link"
                - "Record each registration or licence number and its expiry date"
                - "Check every licence renewal date in the register for the year ahead @recurring(yearly)"
            - name: Lease, mortgage and building consent check
              description: |-
                ## Purpose
                A unit can be fully licensed and still be let in breach of a lease covenant, a mortgage condition or the building's own rules, and the first sign is often a letter from a freeholder or lender. Checking the paperwork for each unit shows which ones carry hidden risk and which need written consent before the next booking.

                ## Milestones
                1. The lease, mortgage offer and building rules gathered for every unit.
                2. Each document's clauses on subletting, business use and short stays noted.
                3. Units needing written consent identified and requests sent.
                4. Written consents filed against each unit, or a solicitor's view recorded where the position is unclear.

                ## Notes
                Ask a property solicitor to read any clause you are unsure about. A consent letter costs far less than an injunction or a called-in loan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every unit has a recorded position on lease, mortgage and building rules, with written consent filed where one is needed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the lease, mortgage offer and building rules for each unit"
                - "Highlight every clause about subletting, business use or short stays"
                - "Send consent requests to the freeholders or lenders that need them"
                - "Book a solicitor review for any clause you cannot interpret"
            - name: Short-let insurance cover review
              description: |-
                ## Purpose
                Standard home and landlord policies often exclude paying guests, so a burst pipe or a guest injury can leave an operator uninsured on the night it matters. Reviewing cover unit by unit with a broker who knows short lets closes the gaps in buildings, contents, public liability, loss of income and accidental damage.

                ## Milestones
                1. Every unit's current policy listed with insurer, renewal date and whether paying guests are covered.
                2. Gaps in public liability, contents and loss of income identified per unit.
                3. Quotes from at least two brokers or insurers that cover short lets obtained.
                4. Cover in place on every unit, with the platform's host protection noted only as a secondary layer.

                ## Notes
                Platform host guarantees are not insurance policies and carry many exclusions. Treat them as a top-up, not your cover.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each unit holds a policy that names short-let or paying guest use, with public liability and loss of income cover recorded in the register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each unit's current insurer, policy number and renewal date"
                - "Ask each insurer in writing whether paying guests are covered"
                - "Request quotes from two brokers that place short-let cover"
                - "Review cover and sums insured against the portfolio before renewal @recurring(yearly)"
            - name: Unit economics baseline for each listing
              description: |-
                ## Purpose
                Portfolios hide losers: a unit with high occupancy can still lose money once cleaning, platform fees, utilities and wear are counted. Working out net income per unit for the last twelve months shows which units carry the business and which ones it carries. Every pricing, refurb and exit decision later starts from this sheet.

                ## Milestones
                1. Twelve months of gross booking revenue per unit pulled from every channel.
                2. Platform fees, cleaning, laundry, consumables, utilities, rent or mortgage and repairs allocated per unit.
                3. Net operating income, occupancy, average daily rate and revenue per available night calculated per unit.
                4. Units ranked by net income, with the bottom three named for review.

                ## Notes
                Include your own time at a realistic hourly rate. A unit that only works because you clean it yourself is a job, not an asset.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A sheet showing twelve months of revenue, costs, net income, occupancy and ADR for every unit, ranked by net income."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export twelve months of reservations from each booking channel"
                - "Pull cleaning, laundry and utility costs from bank statements by unit"
                - "Calculate net income, occupancy and ADR for every unit"
                - "Mark the three weakest units for a closer look"
            - name: Booking payouts and business accounts setup
              description: |-
                ## Purpose
                Payouts from several platforms land net of fees, in batches, sometimes in other currencies, and mixing them with personal money makes every month-end and tax return a reconstruction job. Separate business accounts, a payout reconciliation routine and a chart of accounts built around units turn bank data into usable numbers.

                ## Milestones
                1. A business bank account receiving every platform payout, with no personal spending through it.
                2. A chart of accounts with revenue and costs tracked by unit.
                3. Bookkeeping software connected to the bank feed and each channel's payout reports.
                4. One month of payouts reconciled to individual reservations without unexplained differences.

                ## Notes
                Agree the structure and VAT or sales tax position with your accountant before you set it up, because unpicking it later is slower.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All payouts flow into a business account and one full month reconciles to reservations by unit in the bookkeeping software."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Switch every channel's payout details to the business account"
                - "Set up revenue and cost categories split by unit"
                - "Connect the bank feed and import one month of payout reports"
                - "Reconcile that month's payouts to reservations and note any gaps"
            - name: Fire and gas safety baseline in every unit
              description: |-
                ## Purpose
                Guests sleep in unfamiliar rooms and do not know where the exits are, which is why short lets draw closer fire safety scrutiny than ordinary homes. A safety baseline per unit, covering alarms, carbon monoxide detection, extinguishers or blankets, escape routes and gas and electrical checks, protects guests and is often a licensing condition.

                ## Milestones
                1. A fire risk assessment completed or commissioned for each unit.
                2. Working smoke and carbon monoxide alarms fitted where the assessment requires them.
                3. Current gas and electrical safety certificates filed per unit with expiry dates.
                4. An escape plan and emergency numbers posted inside every unit.

                ## Notes
                Use a competent assessor where local rules require one. Take photographs of each alarm and plan so you can show what was in place.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every unit has a fire risk assessment, tested alarms, current gas and electrical certificates and a posted escape plan on file."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List which units lack a current fire risk assessment"
                - "Book gas and electrical safety checks for any expired certificates"
                - "Fit or replace smoke and carbon monoxide alarms where needed"
                - "Test every alarm and log the result per unit @recurring(monthly:10)"
            - name: Standard unit inventory and par levels
              description: |-
                ## Purpose
                When every unit has different towels, kettles and spare bulbs, cleaners waste time and guests get uneven stays. Writing a standard inventory per unit size, with par levels for linen sets and consumables, makes restocking a count rather than a guess and lets you order in bulk.

                ## Milestones
                1. A standard inventory list for each unit size, from cutlery to spare duvets.
                2. Par levels set for linen sets per bed, towels per guest and consumables per stay.
                3. Every unit photographed and audited against its list.
                4. A single supplier list for repeat purchases with unit costs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each unit size has a written inventory with par levels, and every unit has been audited against it with gaps filled."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the inventory for your most common unit size"
                - "Set par levels of three linen sets per bed as a starting point"
                - "Audit two units against the list with photographs"
                - "Order the missing items from one supplier in a single batch"
            - name: House manual and digital guest guide
              description: |-
                ## Purpose
                Most guest messages ask the same things: the wifi password, how the heating works, where to put the bins and what time to check out. A clear guide per unit, sent before arrival and kept in the unit, cuts messages, late check-outs and small damages.

                ## Milestones
                1. A guide template with arrival, wifi, appliances, rubbish, house rules and check-out sections.
                2. A guide completed for every unit with photographs of the tricky appliances.
                3. Building rules on noise, parking and shared spaces included where they apply.
                4. The guide link added to the pre-arrival message for each listing.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every unit has a guest guide covering arrival, appliances, rules and check-out, linked in the automated pre-arrival message."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the ten questions guests ask most often from recent messages"
                - "Ask the agent to draft a guide template answering those questions"
                - "Photograph the heating controls, oven and washer in each unit"
                - "Add the guide link to every listing's pre-arrival message"
            - name: Listing and channel accuracy audit
              description: |-
                ## Purpose
                Listings drift: photos show the old sofa, the bed count is wrong on one channel, and the registration number is missing on another. Auditing every listing on every channel against the real unit protects reviews, avoids refund claims and keeps you within platform and local display rules.

                ## Milestones
                1. A table of every unit and every channel it is listed on.
                2. Each listing checked for photos, bed configuration, amenities, house rules and registration number.
                3. Errors corrected on every channel the same day they are found.
                4. Any unit missing from a useful channel noted for a later decision.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every listing on every channel matches the real unit, with the registration number displayed where required."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build a table of units against the channels they appear on"
                - "Compare each listing's photos and amenities to the unit itself"
                - "Add missing registration numbers to every listing that needs one"
                - "Correct bed and guest counts that differ between channels"
            - name: Dynamic pricing tool and weekly rate review
              description: |-
                ## Purpose
                Pricing tools adjust nightly rates to demand, but left alone they follow their defaults: minimums set too low, weekends priced like weekdays and local events missed. A weekly review of what the tool is doing, with base and minimum prices you set on purpose, keeps the automation working for your numbers rather than its own.

                ## Milestones
                1. One pricing tool connected to every unit with base, minimum and maximum prices set from your unit economics.
                2. Rules for weekends, last-minute gaps and far-future dates written down.
                3. A weekly review routine running, with changes logged.
                4. Minimum prices checked against each unit's cost per night so no stay loses money.

                ## Notes
                Set the minimum price from cost, not from competitors. The minimum is the line below which a booking costs you money.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every unit is priced by one tool with written base and minimum rules, reviewed weekly with changes logged."
                cadence: rolling
              tasks:
                - "Work out the cost per occupied night for each unit"
                - "Set base and minimum prices in the pricing tool for every unit"
                - "Review the next 60 days of rates and log any overrides @recurring(weekly:mon)"
                - "Compare your rates with five nearby comparable listings @recurring(monthly:3)"
            - name: Turnover cleaning standard and checklist
              description: |-
                ## Purpose
                Guests form most of their review in the first five minutes inside a unit, and those minutes are made by the cleaner. A written turnover standard per room, with photographs of how a finished unit looks, makes the result the same whichever cleaner is on shift and gives you something objective to inspect against.

                ## Milestones
                1. A room-by-room checklist for a standard turnover, including restocking and damage checks.
                2. Reference photographs of a finished bed, bathroom and kitchen for each unit type.
                3. A rule for reporting damage and lost property with photos within the hour.
                4. Every cleaner trained on the standard and signed off.

                ## Notes
                Start from the **Operational checklist** template. Keep it short enough to finish on a phone in the unit.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written turnover checklist with reference photos is in use by every cleaner, each of whom has been signed off on it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk one unit and write every step of a full turnover"
                - "Photograph a finished bed, bathroom and kitchen as the reference"
                - "Add a damage and lost property reporting step with photos"
                - "Train each cleaner on the checklist and record their sign-off"
            - name: Cleaning schedule and quality inspections
              description: |-
                ## Purpose
                Same-day turnovers across many units fail in predictable ways: a late check-out pushes a clean, a cleaner calls in sick, a unit gets missed. A live schedule tied to the booking calendar, with spot inspections and a monthly scorecard per cleaner, catches the misses before a guest does.

                ## Milestones
                1. Cleans generated automatically from the booking calendar for every unit.
                2. A backup cleaner named for each area of the portfolio.
                3. Spot inspections recorded against the turnover checklist.
                4. A monthly scorecard per cleaner covering timeliness, inspection scores and guest complaints.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cleans are scheduled from bookings, at least one spot inspection is logged weekly and every cleaner has a monthly scorecard."
                cadence: rolling
              tasks:
                - "Connect the booking calendar to the cleaning schedule"
                - "Name a backup cleaner for each cluster of units"
                - "Spot-inspect one finished turnover against the checklist @recurring(weekly:thu)"
                - "Score each cleaner on timeliness and inspection results @recurring(monthly:20)"
            - name: Guest messaging templates and response times
              description: |-
                ## Purpose
                Platforms rank listings partly on response speed, and guests judge a stay by how quickly a problem is answered at ten at night. A set of saved replies for each stage of the stay, with automated scheduled messages and a target response time, keeps messaging fast without one person living on their phone.

                ## Milestones
                1. Scheduled messages set for booking confirmation, pre-arrival, check-in day, mid-stay and check-out.
                2. Saved replies for the twenty most common questions and problems.
                3. A response time target agreed and an out-of-hours cover rota set.
                4. Median response time measured for one month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Scheduled messages cover all five stay stages, twenty saved replies exist and median response time is measured monthly."
                cadence: rolling
              tasks:
                - "Write the five scheduled messages for each stage of a stay"
                - "Save replies for the twenty questions guests ask most"
                - "Agree who answers messages after 9pm on each night of the week"
                - "Review response times and rewrite any template guests misread @recurring(monthly:12)"
            - name: Linen and laundry supply loop
              description: |-
                ## Purpose
                Running out of clean sheets on a Saturday stops turnovers dead, and stained linen that goes back on a bed costs a review. A loop that counts stock weekly, tracks what the laundry returns and retires worn items keeps every bed made with sheets that look new.

                ## Milestones
                1. Linen stock counted by type against par levels for the whole portfolio.
                2. A laundry service or in-house process with agreed turnaround and per-item cost.
                3. A rule for retiring stained or thin items, with replacements budgeted.
                4. Weekly counts recorded for eight weeks without a shortage on a turnover day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly linen counts against par levels are recorded and no turnover is delayed for linen over eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Count every linen type across the store and all units"
                - "Agree turnaround times and per-item prices with the laundry"
                - "Count linen against par levels and order the shortfall @recurring(weekly:fri)"
                - "Set a retirement rule for stained or worn items"
            - name: Preventive maintenance calendar and repair triage
              description: |-
                ## Purpose
                Short-let units take years of wear in months, and most guest-facing failures, a dead boiler, a blocked drain, a broken lock, give warning signs a monthly walk-round would catch. A preventive calendar plus a simple triage rule for urgent and non-urgent repairs keeps units bookable and repair bills smaller.

                ## Milestones
                1. A preventive maintenance list per unit covering boilers, appliances, seals, locks and drains.
                2. A triage rule for what is fixed before the next guest and what can wait.
                3. Named trades for plumbing, electrics, locks and appliances with call-out terms.
                4. Every repair logged per unit with cost and time out of service.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every unit has a preventive list, repairs are logged with costs, and monthly walk-rounds are recorded for six months."
                cadence: rolling
              tasks:
                - "Write the preventive checks for one unit and copy them across"
                - "Agree call-out terms with a plumber, electrician and locksmith"
                - "Walk one unit per week against its preventive list @recurring(monthly:8)"
                - "Book boiler and appliance servicing across the portfolio @recurring(quarterly)"
            - name: Monthly unit P&L close
              description: |-
                ## Purpose
                Without a monthly close, problems surface at year-end: a unit that quietly lost money for six months, a cleaning invoice paid twice, a payout never received. Closing each month by unit, with revenue reconciled to reservations and costs coded, gives you numbers fresh enough to act on.

                ## Milestones
                1. A close checklist covering payout reconciliation, cost coding, accruals and a unit P&L.
                2. Revenue for the month matched to reservations on every channel.
                3. A one-page unit P&L with net income, occupancy and ADR per unit.
                4. Three consecutive months closed by the tenth working day.

                ## Notes
                Start from the **Month-end close** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month is closed by unit within ten working days, with revenue reconciled to reservations and a one-page P&L filed."
                cadence: rolling
              tasks:
                - "Write the close checklist in the order you will work it"
                - "Code last month's costs to units in the bookkeeping software"
                - "Close the month and file the unit P&L @recurring(monthly:5)"
                - "Chase any payout that has not arrived within its usual window"
            - name: Review monitoring and reply routine
              description: |-
                ## Purpose
                Reviews are the single biggest driver of future bookings, and a pattern in them, a lumpy mattress, a noisy street, unclear parking, is free product feedback. A weekly routine to read, reply to and tag every review turns them into a list of fixes as well as a ranking signal.

                ## Milestones
                1. Every new review read and replied to within a week.
                2. Reviews tagged by theme such as cleanliness, comfort, noise, check-in and accuracy.
                3. The top three recurring complaints per unit listed with a fix.
                4. Average rating per unit tracked month by month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every review receives a reply within seven days and recurring complaints per unit are logged with an assigned fix."
                cadence: rolling
              tasks:
                - "Collect the last 50 reviews across channels into one sheet"
                - "Tag each review with its main theme"
                - "Reply to the week's reviews and tag their themes @recurring(weekly:tue)"
                - "Assign a fix to the most repeated complaint for each unit"
            - name: Occupancy and booking pace tracker
              description: |-
                ## Purpose
                Occupancy for last month tells you what happened; booking pace for the next 90 days tells you what is about to. A tracker comparing nights booked ahead against the same point last year, by unit, shows early when to drop rates, relax stay rules or push a channel.

                ## Milestones
                1. Occupancy, ADR and revenue per available night tracked monthly per unit.
                2. On-the-books nights for the next 30, 60 and 90 days recorded weekly.
                3. Pace compared with the same week last year where data exists.
                4. A rule written for what action a pace gap of more than ten points triggers.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows weekly 30, 60 and 90 day pace per unit against last year, with a written action rule for gaps."
                cadence: rolling
              tasks:
                - "Set up the tracker columns for occupancy, ADR and forward nights"
                - "Load last year's monthly figures per unit as the comparison"
                - "Record forward booked nights for each unit @recurring(weekly:wed)"
                - "Write the action rule for a pace gap of ten points or more"
            - name: Tourism and occupancy tax remittance calendar
              description: |-
                ## Purpose
                Many cities and countries charge a tourist or occupancy tax per night, and platforms collect it in some places and not others, sometimes for one channel and not for direct bookings. A calendar showing who collects what, per unit and channel, and when you file, stops both double-charging and underpayment.

                ## Milestones
                1. For each unit, the taxes that apply to short stays listed with their source.
                2. For each channel, whether it collects and remits the tax recorded.
                3. Filing deadlines entered with the bookings each return must cover.
                4. One filing period completed and the confirmation filed.

                ## Notes
                Confirm the position with your accountant or the tax authority. Platform help pages change and are not a ruling.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar shows the tax position per unit and channel, and each filing period is completed with a confirmation on file."
                cadence: cyclic
              tasks:
                - "List the short-stay taxes that apply to each unit's location"
                - "Record which channels collect and remit tax for you"
                - "Prepare and file the period's tourism tax return @recurring(quarterly)"
                - "Ask your accountant to confirm treatment of direct bookings"
            - name: Night-cap and stay-limit tracker
              description: |-
                ## Purpose
                Some cities cap the nights a home can be let short term each year, London's 90 night limit being one example, and others restrict stays in a primary residence or require a change of use beyond a threshold. Tracking nights let per unit against the cap avoids fines and blocked calendars, and tells you when to switch a unit to mid-term stays.

                ## Milestones
                1. Every unit's annual night cap or stay limit recorded, or marked as none.
                2. Nights let year to date tracked per unit across all channels.
                3. A trigger point set where the unit moves to stays of 30 nights or more.
                4. Platform-side caps checked against your own count.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Nights let per unit are tracked monthly against each cap, with no unit exceeding its limit in the year."
                cadence: rolling
              tasks:
                - "Record the night cap or stay limit for each unit's location"
                - "Total nights let so far this year per unit from all channels"
                - "Update nights let per unit against its cap @recurring(monthly:28)"
                - "Set the switch point to longer stays for each capped unit"
            - name: Reading short-let market data
              description: |-
                ## Purpose
                Market data tools show occupancy, ADR and supply for any neighbourhood, but the numbers mislead without knowing how they are estimated and which listings are counted. Learning to read them properly, and to build a fair comp set of five to ten truly comparable units, makes pricing and expansion decisions defensible.

                ## Milestones
                1. The methodology of one market data tool read and its main limits noted.
                2. A comp set of five to ten listings per unit chosen on size, location, rating and amenities.
                3. Your own units' figures compared with the comp set for the last twelve months.
                4. A short note on where the data and your own results disagree and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each unit has a documented comp set of five to ten listings and a written comparison of its last twelve months with the set."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read how one market data tool estimates occupancy and revenue"
                - "Choose five to ten comparable listings for your best unit"
                - "Compare twelve months of your figures with the comp set"
                - "Write down where the data disagrees with your own results"
            - name: Revenue management fundamentals
              description: |-
                ## Purpose
                Price is only one lever: minimum stays, lead-time discounts, gap-night rules, check-in day restrictions and length-of-stay pricing often matter more. Learning these tools, and testing one at a time on a single unit, builds judgement you can then apply across the portfolio.

                ## Milestones
                1. The main revenue levers written up in your own words: ADR, occupancy, RevPAR, lead time, length of stay and gap nights.
                2. One lever tested on one unit for four weeks with a recorded before and after.
                3. Orphan nights between bookings measured and a gap-night rule set.
                4. A one-page revenue playbook for the portfolio.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page revenue playbook exists, informed by at least one four-week single-lever test with recorded results."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a one-line definition of each revenue lever"
                - "Count orphan nights across the portfolio last quarter"
                - "Test a two-night minimum on one unit for four weeks"
                - "Draft the revenue playbook from what the test showed"
            - name: Listing photography and copy that converts
              description: |-
                ## Purpose
                Guests decide from the first photo and two lines of text, and most listings lead with the wrong room. Learning what makes a short-let photo set and title work, and reshooting your weakest listing, shows how much of the gap between you and the comp set is presentation rather than the unit.

                ## Milestones
                1. Click-through or view-to-booking data for each listing noted where the channel provides it.
                2. The weakest listing reshot with natural light, wide angles and a strong lead photo.
                3. A new title and first paragraph written around the guest's main reason to book.
                4. Views and bookings compared over the eight weeks before and after.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One listing has been reshot and rewritten, with eight weeks of before and after view and booking figures recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record current views and bookings for each listing"
                - "Book a photographer who shoots short-let interiors"
                - "Rewrite the title around the main reason guests choose that unit"
                - "Compare eight weeks of views and bookings after the change"
            - name: Guest screening and party prevention
              description: |-
                ## Purpose
                One party can cost a neighbour relationship, a licence and a building's goodwill. Screening rules for booking requests, clear house rules, deposits or damage protection and privacy-respecting noise monitors that measure decibels only, not audio, cut the risk without turning away good guests.

                ## Milestones
                1. Written screening rules for local bookings, one-night weekend stays and high guest counts.
                2. House rules on parties, guest numbers and quiet hours shown on every listing.
                3. Noise monitors fitted where lawful and disclosed in listings.
                4. A step-by-step response plan for a noise alert at night.

                ## Notes
                Never record audio or place cameras inside a unit. Check local privacy rules and disclose any device in the listing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Screening rules, disclosed house rules and a night-time noise response plan are written and applied to every unit."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the screening rules for high-risk booking patterns"
                - "Add party and guest number rules to every listing"
                - "Choose a decibel-only noise monitor and disclose it in listings"
                - "Write the steps for responding to a noise alert at night"
            - name: Platform fees, cancellation policies and payout timing
              description: |-
                ## Purpose
                Fee models, cancellation policies and payout dates differ by channel and change every year or two, and each choice moves both conversion and cash flow. Understanding them precisely lets you set policies on purpose and forecast when money actually arrives.

                ## Milestones
                1. Each channel's fee model, host or split, written down with the percentage you pay.
                2. Cancellation policies compared with their effect on bookings and refunds over the last year.
                3. Payout timing per channel mapped against your bills calendar.
                4. One policy choice per channel recorded with the reason.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of fees, cancellation policies and payout timing per channel, with a recorded policy choice for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find each channel's current fee terms for your account type"
                - "Count last year's cancellations and refunds by policy"
                - "Map payout dates against rent, mortgage and payroll dates"
                - "Record the cancellation policy you will use on each channel"
            - name: Short-let legal basics with a solicitor
              description: |-
                ## Purpose
                Operators often assume a guest stay is a simple licence, but the line between a holiday let and a tenancy, consumer law on refunds, accessibility duties and data protection for guest IDs all vary by country. An hour with a solicitor, prepared with your questions, gives you a written position on each instead of a forum answer.

                ## Milestones
                1. A list of legal questions specific to your units and booking terms.
                2. A meeting held with a solicitor who acts for short-let operators.
                3. Their answers recorded on stay type, refunds, guest data and accessibility.
                4. Booking terms and guest data handling updated to match.

                ## Notes
                This is organisational preparation, not legal advice. Your solicitor's written view is the record to keep.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A solicitor's written answers on stay type, refunds, guest data and accessibility are filed, and booking terms reflect them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the legal questions your portfolio raises"
                - "Find a solicitor who already acts for short-let operators"
                - "Record the answers from the meeting in one note"
                - "Update booking terms and guest ID storage to match their advice"
            - name: Damage claims and evidence handling
              description: |-
                ## Purpose
                Damage claims through platforms succeed on evidence submitted within tight windows: timestamped photos, receipts and the guest conversation. Learning the claim process and building a standard evidence pack means a broken television becomes a paid claim, not a loss.

                ## Milestones
                1. Each channel's damage claim window and evidence rules written down.
                2. A standard evidence pack: before and after photos, cleaner report, receipts and messages.
                3. Cleaners trained to photograph damage before touching it.
                4. One claim submitted or rehearsed end to end.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written claims process with evidence pack exists, cleaners photograph damage first, and one claim has been run end to end."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note each channel's damage claim deadline and evidence rules"
                - "Make a folder structure for photos, receipts and messages per claim"
                - "Brief cleaners to photograph damage before cleaning"
                - "Rehearse a claim using a recent minor damage case"
            - name: Choosing a property management system
              description: |-
                ## Purpose
                Past five or six units, calendars, messages, cleaning tasks and owner statements in separate tools start to break, and double bookings appear. Choosing a property management system against your actual workflows, channels and unit count, rather than its demo, is a decision you will live with for years.

                ## Milestones
                1. Must-have features listed: channel sync, unified inbox, task automation, cleaning schedules and accounting export.
                2. Three systems shortlisted and trialled with two real units each.
                3. Costs compared at today's unit count and at double it.
                4. A system chosen and a migration date set.

                ## Notes
                Start from the **Purchase decision** template. Check how the system exports your data before you sign, so leaving is possible.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A system is chosen after trials of three, with costs at current and double unit counts recorded and a migration date set."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List the workflows that break today with your current tools"
                - "Shortlist three systems that connect to all your channels"
                - "Trial each one with two real units for a fortnight"
                - "Price each system at today's unit count and at double it"
            - name: Keyless entry and smart lock rollout
              description: |-
                ## Purpose
                Key handovers tie up staff, fail at midnight and leave copies in circulation. Smart locks with unique codes per stay remove meet-and-greets, let cleaners in on schedule and show who entered when, but a poorly chosen lock that drains batteries or loses wifi creates new lockouts.

                ## Milestones
                1. Lock models compared on battery life, offline codes, integration and building suitability.
                2. Freeholder or building consent obtained for each front door where needed.
                3. Locks fitted on a pilot unit and run for a month.
                4. All units converted with a backup key safe and a lockout procedure.

                ## Notes
                Pick locks that keep working offline. Wifi outages are the commonest cause of midnight lockouts.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every unit has keyless entry with codes per stay, a backup access method and a written lockout procedure."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check which buildings allow a smart lock on the front door"
                - "Compare three lock models on offline codes and battery life"
                - "Fit a lock on one unit and run it for a month"
                - "Write the lockout procedure and test the backup key safe"
            - name: In-house cleaners or cleaning company decision
              description: |-
                ## Purpose
                Employing cleaners gives control and loyalty but brings payroll, holiday cover and equipment, while a cleaning company is simpler but harder to hold to your standard. Costing both properly per turnover, with quality and cover as weighted criteria, settles a question most operators revisit every year.

                ## Milestones
                1. Current cost per turnover calculated, including your own coordination time.
                2. Quotes from two cleaning companies that work with short lets.
                3. The full cost of employing cleaners estimated with your accountant, including holiday cover.
                4. A decision recorded with the criteria and scores behind it.

                ## Notes
                Start from the **Vendor** template for each cleaning company you assess.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision compares cost per turnover, quality and cover for both models, scored against the same criteria."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate your current cost per turnover, coordination time included"
                - "Request quotes from two short-let cleaning companies"
                - "Estimate the cost of employing two cleaners with holiday cover"
                - "Score both options and record the decision"
            - name: Direct booking website decision
              description: |-
                ## Purpose
                Platform fees take a real share of every booking, and repeat guests and corporate clients would often book direct if they could. A direct booking site only pays when traffic, payment handling, damage protection and tax collection are solved too, so test the economics before building.

                ## Milestones
                1. Share of bookings from repeat guests and companies measured.
                2. Costs of a booking engine, payments, insurance and marketing estimated per year.
                3. Break-even direct bookings per year calculated against platform fees saved.
                4. A build, wait or skip decision recorded with the numbers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on direct booking, based on repeat guest share and a break-even number of direct bookings per year."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count last year's repeat and company bookings"
                - "Price a booking engine and payment provider for a year"
                - "Work out how many direct bookings cover those costs"
                - "Record the decision and the trigger to revisit it"
            - name: Mid-term stay mix decision
              description: |-
                ## Purpose
                Stays of a month or more, for contractors, relocating staff and people between homes, bring lower turnover costs and help with night caps, at a lower nightly rate. Deciding which units take mid-term stays, in which months, and on what terms, smooths the low season without starving peak dates.

                ## Milestones
                1. Low-season occupancy and net income per unit compared with a modelled mid-term let.
                2. Units suited to longer stays identified by location, workspace and kitchen.
                3. Terms for 30 night and longer stays agreed with your solicitor, including the tenancy question.
                4. A calendar rule for which months each unit accepts longer stays.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names which units take stays of 30 nights or more, in which months, under solicitor-checked terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare low-season net income with a modelled monthly let per unit"
                - "Pick the units with a proper desk and full kitchen"
                - "Ask your solicitor how long stays are treated locally"
                - "Set the months each chosen unit opens to stays of 30 nights or more"
            - name: Exit or convert review for weak units
              description: |-
                ## Purpose
                A portfolio grows faster than its weakest unit improves, and the bottom unit often takes the most management time. Reviewing the bottom three by net income and deciding to fix, convert to a long let, hand back or sell frees time and capital for units that earn their keep.

                ## Milestones
                1. The three weakest units named from the unit economics sheet.
                2. Fixes tried or costed for each, with a deadline for improvement.
                3. Long let, hand back and sale options costed where the fix does not work.
                4. A decision recorded for each unit with the date it takes effect.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each of the three weakest units has a recorded decision to fix, convert, hand back or sell, with an effective date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the three weakest units from the unit economics sheet"
                - "Set a three-month improvement target for each"
                - "Ask a letting agent for a long-let rent on each unit"
                - "Record the decision and effective date for each unit"
            - name: Running cost reduction review
              description: |-
                ## Purpose
                Utilities, broadband, streaming subscriptions, software and consumables creep up unit by unit until they eat a month of profit each year. A yearly review across the portfolio, with group contracts where possible, recovers money without touching the guest experience.

                ## Milestones
                1. Every recurring cost per unit listed with supplier and contract end date.
                2. Duplicate or unused subscriptions cancelled.
                3. Group or business tariffs requested for energy and broadband.
                4. Annual saving recorded against the previous year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A list of every recurring cost per unit exists and the annual saving from the review is recorded."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "List every recurring cost per unit with its contract end date"
                - "Cancel subscriptions that no guest has used"
                - "Ask energy and broadband suppliers for a multi-site tariff"
                - "Repeat the cost review across all units before contracts renew @recurring(yearly)"
            - name: Peak season readiness
              description: |-
                ## Purpose
                Peak weeks make or break the year, and they are exactly when a broken boiler or a missing cleaner hurts most. Preparing six to eight weeks ahead, with units serviced, staff rotas locked, stock built and rates checked, turns peak season into revenue instead of firefighting.

                ## Milestones
                1. Peak dates and expected turnovers per day mapped.
                2. Cleaner and maintenance rotas confirmed with backups for each day.
                3. Linen and consumables stocked to cover the busiest fortnight.
                4. Every unit serviced and inspected before the first peak arrival.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the first peak arrival, rotas, stock and unit inspections are complete and recorded for every unit."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Map the peak dates and the number of turnovers per day"
                - "Confirm cleaner rotas with a backup for each peak day"
                - "Order linen and consumables for the busiest fortnight"
                - "Inspect each unit and fix faults before the peak starts"
            - name: New unit launch in 30 days
              description: |-
                ## Purpose
                The first month of a new listing sets its ranking and reviews for the year, and a unit that launches with missing kit or no reviews struggles to recover. A launch plan from keys in hand to first five-star reviews gets a unit earning within weeks.

                ## Milestones
                1. Licence, consent, insurance and safety checks complete before the listing goes live.
                2. Unit furnished and stocked to the standard inventory.
                3. Photos, listing and pricing live on the chosen channels.
                4. First five stays completed with reviews and a fix list.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new unit goes live with all checks done and completes its first five stays within 45 days of keys in hand."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Confirm licence, consent, insurance and safety before listing"
                - "Furnish and stock the unit to the standard inventory"
                - "Publish the listing with a launch rate below the comp set"
                - "Review the first five stays and fix what guests mention"
            - name: Licensing inspection visit preparation
              description: |-
                ## Purpose
                Licensing and fire officers may visit before a licence is granted or renewed, and an inspection that finds missing certificates can delay bookings for weeks. Preparing the unit and a document pack in advance makes the visit short and the outcome predictable.

                ## Milestones
                1. The inspection criteria obtained from the authority.
                2. Certificates, risk assessment and floor plan printed in a pack.
                3. The unit checked against the criteria and gaps fixed.
                4. Inspection outcome and any conditions recorded in the register.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The inspection is passed or its conditions are recorded in the licence register with a completion date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the authority for its inspection checklist"
                - "Print certificates, risk assessment and floor plan into one pack"
                - "Walk the unit against the checklist and fix any gaps"
                - "Record the outcome and conditions in the licence register"
            - name: Major city event demand plan
              description: |-
                ## Purpose
                Large festivals, sports finals and conferences can triple demand for a week, and the operators who load rates and stay rules months ahead capture it. A plan for each known event sets prices, minimum stays, cleaning capacity and house rules early, before the tool or a competitor does it for you.

                ## Milestones
                1. The year's major events near your units listed with dates.
                2. Rates and minimum stays set for event dates at least three months ahead.
                3. Extra cleaning and maintenance capacity booked for event weeks.
                4. Results recorded after each event to inform next year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each major event has rates and stay rules set three months ahead and a recorded result after it ends."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List the year's major events with dates and venues"
                - "Set event rates and minimum stays in the pricing tool"
                - "Book extra cleaners for event changeover days"
                - "Record occupancy and ADR for each event after it ends"
            - name: Annual unit refresh week
              description: |-
                ## Purpose
                Wear builds slowly enough that nobody notices until reviews mention it. Blocking a few low-season nights per unit each year for a deep clean, paint touch-ups, mattress checks and replacements keeps units looking like their photos.

                ## Milestones
                1. Refresh dates blocked per unit in the quietest weeks.
                2. A refresh list per unit built from reviews, cleaner reports and the inventory.
                3. Deep clean, repairs and replacements completed.
                4. Updated photos taken where anything visible changed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every unit has had its annual refresh completed in the low season with a recorded list of works done."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Block three nights per unit in the quietest month"
                - "Build each unit's refresh list from reviews and cleaner notes"
                - "Book a deep clean and a decorator for the blocked dates"
                - "Retake photos of any room that visibly changed"
            - name: Year-end accounts pack for the accountant
              description: |-
                ## Purpose
                Accountants charge more and take longer when they receive a box of statements instead of a reconciled pack. A year-end pack with unit P&Ls, payout reconciliations, tourism tax filings, capital spending and loan statements makes the return faster and your questions sharper.

                ## Milestones
                1. Twelve monthly closes complete and reconciled.
                2. Capital items separated from repairs with receipts.
                3. Tourism tax filings and platform tax statements collected.
                4. Pack delivered to the accountant with a list of open questions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A reconciled year-end pack with unit P&Ls, capital list and tax filings is delivered to the accountant before their deadline."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check all twelve monthly closes are reconciled"
                - "Separate furniture and refurb spending from repairs"
                - "Download each platform's annual earnings statement"
                - "Send the pack with your open questions to the accountant"
            - name: Running the portfolio remotely
              description: |-
                ## Purpose
                Founders who live in another city, or travel for months, need a portfolio that runs without them in the building. Remote operation works when access, cleaning, inspections and emergencies all have a local named person and a remote check.

                ## Milestones
                1. A local lead named for each cluster of units with clear authority and spending limits.
                2. Keyless access and photo-based turnover reports in place.
                3. An emergency contact rota covering every hour of the week.
                4. A weekly remote review of turnovers, issues and spend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A local lead and emergency rota exist for every cluster, and a weekly remote review is logged for eight weeks."
                cadence: rolling
              tasks:
                - "Name a local lead for each cluster and set a spending limit"
                - "Require photo reports from every turnover"
                - "Write the emergency rota with phone numbers for each hour"
                - "Review turnover photos, issues and spend for the week @recurring(weekly:sun)"
            - name: First operations hire
              description: |-
                ## Purpose
                Most operators hit a ceiling around eight to twelve units because every message, clean and repair still runs through them. A first hire, usually a guest experience or operations coordinator, only works with a defined role, written processes to hand over and a 90 day plan.

                ## Milestones
                1. The tasks you do each week listed with hours, and the ones to hand over chosen.
                2. A role description, pay range and hours agreed, with employment rules checked.
                3. A hire made through a structured interview and practical task.
                4. A 90 day onboarding plan completed with the handed-over tasks running.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A person is hired into a written role and runs the handed-over tasks unaided by the end of a 90 day onboarding plan."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Log every task you do for two weeks with the time it takes"
                - "Choose the tasks to hand over and write the role"
                - "Set a practical messaging task for the interview"
                - "Write the 90 day onboarding plan before the start date"
            - name: Scaling from five to fifteen units
              description: |-
                ## Purpose
                Growth exposes every process that lives in your head, and adding units faster than systems is how portfolios lose reviews and margin together. Putting the systems in place before the next ten units, from pricing rules and cleaning capacity to the monthly close, makes growth add profit, not chaos.

                ## Milestones
                1. Each core process written down: pricing, cleaning, messaging, maintenance and the close.
                2. Cleaning and maintenance capacity sized for fifteen units.
                3. Software checked for the larger unit count.
                4. An acquisition pace set, such as two units a quarter, with a pause rule if reviews drop.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written processes, sized capacity and a growth pace with a pause rule are recorded before the portfolio passes ten units."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every process that only you know how to do"
                - "Write each one as a short checklist someone else could follow"
                - "Work out the cleaner hours fifteen units would need"
                - "Set the growth pace and the review score that pauses it"
            - name: Units leased from landlords for short letting
              description: |-
                ## Purpose
                Leasing flats from landlords and letting them short term adds units without buying, but it depends entirely on the landlord's written permission, the lease terms and local rules. Running these units on a clear agreement, with the landlord's lender and insurer aware, protects both sides.

                ## Milestones
                1. Each leased unit's agreement checked by a solicitor for permission to let short term.
                2. The landlord's written confirmation that their lender and insurer allow it.
                3. Rent, break clauses and repair duties recorded per unit.
                4. Each leased unit's net income compared with its rent and break dates.

                ## Notes
                Arrangements without the landlord's written consent can collapse with little notice. Do not take on a unit without it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every leased unit has solicitor-checked written permission, recorded lender and insurer consent and a net income versus rent figure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every unit you lease rather than own"
                - "Ask your solicitor to confirm each agreement allows short letting"
                - "Get each landlord's written confirmation from their lender and insurer"
                - "Record rent, break dates and net income for each leased unit"
            - name: City rule change contingency plan
              description: |-
                ## Purpose
                Cities tighten short-let rules with a few months' notice, sometimes banning non-resident hosts or capping nights, and a portfolio concentrated in one place can lose most of its income in one vote. A contingency plan per city, with the long-let, mid-term and sale value of each unit, keeps a rule change from becoming a crisis.

                ## Milestones
                1. Share of revenue per city and per regulatory zone calculated.
                2. Pending rule changes and consultations tracked for each city.
                3. A fallback per unit: mid-term, long let, hand back or sale, with its value.
                4. A response plan for the most exposed city written and reviewed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every unit has a costed fallback and the most exposed city has a written response plan, with rule changes scanned quarterly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Calculate the share of revenue each city provides"
                - "Sign up for consultation notices from each authority"
                - "Cost a fallback use for each unit"
                - "Scan each city's pending short-let rule changes @recurring(quarterly)"
            - name: Holiday cover for the owner-operator
              description: |-
                ## Purpose
                Small operators often go years without a real break because nobody else knows the portfolio. A two-week cover plan, tested on a long weekend first, proves the business can run for a fortnight and shows which processes still depend on you.

                ## Milestones
                1. A cover person named with access to messaging, the calendar and spending.
                2. A cover pack with key contacts, emergency steps and spending limits.
                3. A trial long weekend completed with a debrief.
                4. A two-week break taken with issues recorded for fixing.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The owner takes a two-week break after a trial weekend, with the cover person handling operations and issues logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Name the person who will cover and agree their pay"
                - "Write the cover pack with contacts and spending limits"
                - "Run a trial long weekend away from the inbox"
                - "List what went wrong and fix it before the longer break"
            - name: Guest segment and channel strategy
              description: |-
                ## Purpose
                Leisure couples, families, business travellers and groups book on different channels, at different lead times, and value different things. Segmenting past bookings by guest type and channel shows where to aim listings, amenities and rates, and which channel is overpriced for what it brings.

                ## Milestones
                1. Last year's bookings tagged by guest type, channel, lead time and length of stay.
                2. Net revenue per booked night calculated by channel after fees.
                3. Two target segments chosen per unit cluster.
                4. Listings, amenities and channel mix adjusted for those segments.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A segment and channel analysis is filed, with two target segments per cluster and the resulting channel mix recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Tag last year's bookings by guest type and channel"
                - "Ask the agent to summarise net revenue per night by channel"
                - "Choose two target segments for each cluster of units"
                - "Adjust listings and amenities for the chosen segments"
            - name: Corporate and long-stay accounts
              description: |-
                ## Purpose
                Relocation agencies, film crews, hospitals and project-based employers book weeks at a time and come back, filling gaps that leisure demand leaves. Winning a few accounts needs an invoice process, a rate card and proof you can handle their compliance questions.

                ## Milestones
                1. A target list of twenty local companies and agencies that house staff.
                2. A rate card and booking terms for corporate stays.
                3. Invoicing and insurance documents ready for supplier onboarding.
                4. Three accounts with at least one completed stay each.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three corporate or agency accounts have each completed at least one stay on a written rate card and terms."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List twenty local employers and relocation agencies that house staff"
                - "Write a corporate rate card with weekly and monthly prices"
                - "Prepare insurance certificates and a supplier information sheet"
                - "Contact five targets a week until three accounts are open"
            - name: Short-let underwriting model for new units
              description: |-
                ## Purpose
                Every new unit, bought or leased, is a bet on future nightly income, and optimism about occupancy is the usual mistake. A standard underwriting model, built from your own portfolio's real costs and comp set data, with a downside case and a fallback long-let value, keeps acquisition decisions honest.

                ## Milestones
                1. A model template using your actual turnover, fee and utility costs per night.
                2. Occupancy and ADR inputs taken from comp sets, with a downside case of at least 15 points lower occupancy.
                3. Long-let rent included as the fallback value.
                4. The model back-tested against two existing units' real results.

                ## Notes
                This is a planning tool, not investment advice. Have funding, tax and legal points checked by the relevant professionals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An underwriting model with downside and long-let cases exists and its forecasts sit within ten percent of two existing units' actual results."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull your real cost per turnover and per night from the unit P&Ls"
                - "Build the model with base and downside occupancy cases"
                - "Add the long-let rent as a fallback line"
                - "Back-test it against two units you already run"
            - name: Operations playbook and sale readiness
              description: |-
                ## Purpose
                A short-let business that depends on its founder is worth little to a buyer, partner or lender. A full operations playbook, clean unit-level numbers for three years and transferable contracts make the business saleable or investable, and easier to run day to day even if you never sell.

                ## Milestones
                1. An operations playbook covering every process, role and supplier.
                2. Three years of unit-level P&Ls reconciled and in one place.
                3. Leases, licences and supplier contracts checked for transferability.
                4. A summary of the business an accountant or broker could value from.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete playbook, three years of unit P&Ls and a transferability review of all contracts and licences are filed together."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect every written process into one playbook"
                - "Gather three years of unit P&Ls in one folder"
                - "Check whether each licence and lease can transfer to a buyer"
                - "Write a two-page summary of the business and its numbers"
---

# Short-Let Portfolio Operations

Short-let portfolio operations is the work of running several furnished units let by the night as one business rather than a collection of listings, with the licences, numbers, people and data that implies. It is written for operators with a handful of units and founders building a portfolio towards dozens. The projects start with the foundations of permission, insurance, safety and unit economics, move into the operating machinery of pricing, cleaning, messaging, maintenance and the monthly close, then the skills of revenue management and guest screening, the decisions on software, cleaning models and direct booking, the dated moments of peak season and new unit launches, situations for remote operators and growing teams, and the specialist work of corporate accounts and underwriting new units.

The rhythms are a Monday rate review, weekly cleaning spot checks, linen counts and review replies, a midweek pace check, a monthly close, safety tests, preventive maintenance walks and a night-count check, plus quarterly tourism tax and rule scans and yearly licence and insurance renewals. Operational checklist suits the turnover standard, Purchase decision suits software and lock choices, Vendor suits the cleaning company, Month-end close suits the monthly unit P&L, Metrics log suits the occupancy tracker and Onboarding plan suits a first operations hire. None of this is legal, tax or insurance advice: confirm licensing, lease consent, tax and cover with a local solicitor, accountant and broker. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
