---
id: sales-revenue.field-sales-territory-visits
name: Field Sales & In-Person Visits
description: "Call cycles, weekly route plans, same-day visit logging, safety and expenses for sellers who meet customers face to face, so every mile on the road earns revenue."
category: business
version: 1.0.0
tags: [sales-revenue, field-sales-territory-visits, team, small-business, manager, route-planning, call-cycle, site-visits]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - one-on-one
    - purchase-decision
    - trip
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Field Sales & In-Person Visits
          description: "Planning routes, meetings and site visits for sellers who meet customers face to face, and logging outcomes so travel time earns revenue."
          projects:
            - name: Field visit types and their objectives
              description: |-
                ## Purpose
                Field sellers who treat every trip as a general catch-up come back with pleasant notes and no next steps. Defining four to six visit types, such as first prospect visit, account review, site survey, problem fix and relationship call, each with one required outcome, gives every trip a reason and makes visit logs comparable across the team.

                ## Milestones
                1. A list of four to six visit types used by the team, each with a one-line definition.
                2. One required outcome written for each type, such as an agreed next meeting or a quote request.
                3. A typical length and preparation time noted against each visit type.
                4. The list added as a picklist in the visit log and shared with every seller.

                ## Notes
                Keep the list short. With more than six types, sellers start picking the vaguest one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of visit types, each with a required outcome and typical length, is in the visit log picklist and shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the reasons for your last twenty customer visits from the diary"
                - "Group them into four to six visit types with a one-line definition each"
                - "Write the one outcome each visit type must produce"
                - "Add the visit types as a picklist in the visit log"
            - name: Customer location map with access notes
              description: |-
                ## Purpose
                Addresses in the CRM are often head offices, not the warehouse or branch where the buyer actually sits, and a seller who arrives at the wrong gate loses half an hour. Plotting every visited account on one map, with the real meeting address, parking, opening hours and the name at reception, is what makes route planning possible at all.

                ## Milestones
                1. Every account visited in the last year plotted on a single map at its meeting address.
                2. Parking, entrance, opening hours and site contact recorded for each location.
                3. Accounts colour-coded by tier so clusters are visible at a glance.
                4. Wrong or head office addresses corrected in the CRM.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map shows every account visited in the past year at its real meeting address, with access notes for at least 90 percent of them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the accounts you visited last year with their addresses"
                - "Import the list into a mapping tool and plot each account"
                - "Add parking, entrance and opening hours notes for each site"
                - "Correct head office addresses to the real meeting address in the CRM"
                - "Add access notes for every new site visited this month @recurring(monthly:20)"
            - name: Call cycle by account tier
              description: |-
                ## Purpose
                Without an agreed visit frequency, sellers see the friendly customers every fortnight and the difficult large ones twice a year. A call cycle sets how often each tier is visited in person, for example every four weeks for top accounts and every quarter for the middle tier, so the diary follows value rather than comfort.

                ## Milestones
                1. Accounts sorted into three or four tiers using revenue and growth potential.
                2. A visit frequency agreed for each tier, with the reason written down.
                3. Total visits per month calculated and checked against realistic days on the road.
                4. Each account's next due visit date set in the CRM.

                ## Notes
                Check the arithmetic before agreeing it. Fifty top accounts every four weeks is already more than two visits a day for one seller before any prospecting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every active account has a tier and a visit frequency, and the total monthly visits fit within the seller's available field days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rank active accounts by last year's revenue and estimated potential"
                - "Draw tier lines and agree a visit frequency for each tier"
                - "Calculate the monthly visit load and compare it with days on the road"
                - "Set the next due visit date on each account record"
                - "Re-tier accounts and reset visit frequencies at the start of the year @recurring(yearly)"
            - name: Two-week drive time and selling time study
              description: |-
                ## Purpose
                Most field sellers guess they spend half the day with customers, and a timed fortnight usually shows something nearer a quarter. Recording drive, wait, admin and face time for ten working days gives a real baseline, and every later change to routes or visit rules can be measured against it.

                ## Milestones
                1. Ten working days logged in fifteen-minute blocks across drive, wait, admin and face time.
                2. Totals and percentages calculated for each category.
                3. The three biggest sources of lost time named, such as backtracking or waiting at reception.
                4. The baseline saved where it can be compared with a repeat study in six months.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ten-day time log is complete with the share of time spent driving, waiting, on admin and face to face, and the top three losses named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a simple time log with drive, wait, admin and face time columns"
                - "Record every working block for ten field days"
                - "Total each category and work out its share of the day"
                - "Write down the three biggest causes of lost selling time"
            - name: Cost per field visit calculation
              description: |-
                ## Purpose
                A single in-person visit carries mileage, fuel, parking, meals and the seller's time, and for small accounts it can cost more than the margin on the order it produces. Working out a typical cost per visit tells you which customers justify the trip and gives the in-person versus remote rules a real number to stand on.

                ## Milestones
                1. Vehicle, fuel, parking and subsistence costs gathered for the last three months.
                2. Seller time costed at an hourly rate including employer on-costs.
                3. An average cost per visit calculated, with a range for near and far accounts.
                4. Visit cost compared with average gross margin per order for each tier.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cost per visit figure, with a near and far range, is written down and compared against margin per order for each account tier."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull three months of mileage, fuel, parking and meal claims"
                - "Work out the seller's hourly cost including employer on-costs"
                - "Divide total field cost by visits made to get a cost per visit"
                - "Compare visit cost with average margin per order by tier"
            - name: In-person versus remote visit rules
              description: |-
                ## Purpose
                Some meetings need a handshake, a site walk or a product in the hand, and many others would go just as well on a video call. Writing short rules for which visits must happen in person, and which default to remote, frees field days for the visits where being there changes the result.

                ## Milestones
                1. A list of situations that always justify a visit, such as first meetings with large prospects, site surveys and complaint recovery.
                2. A list of meetings that default to phone or video, such as routine reorders and quick updates.
                3. An account value below which nobody is visited without a specific reason.
                4. The rules shared with the team and applied in the next week's route plans.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One page of written rules on when to visit in person and when to meet remotely is agreed and shared with every seller."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List last month's visits that could have been a video call"
                - "Write the situations that always need an in-person visit"
                - "Set the account value below which remote is the default"
                - "Share the rules and apply them to next week's plan"
            - name: Mobile visit log form
              description: |-
                ## Purpose
                Visit notes typed up on Friday evening are thin, late and half remembered. A short form on the phone, with visit type, attendees, outcome, next step and date, filled in the car park before driving off, keeps the record accurate and lets a manager see the week as it happens.

                ## Milestones
                1. A visit log form with no more than eight fields, most of them picklists.
                2. The form working offline in the CRM's mobile app or a form tool.
                3. A test week completed with the form filled in within ten minutes of each visit.
                4. Fields that nobody used removed after the test week.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every seller can log a visit on their phone in under three minutes, including offline, and the form has been used for a full test week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the eight fields every visit record needs"
                - "Build the form in the CRM mobile app or a form tool"
                - "Check the form saves without signal and syncs later"
                - "Run a test week and drop any field nobody filled in"
            - name: Field sales kit and car set-up
              description: |-
                ## Purpose
                Arriving without the right sample, price list or charger turns a good visit into a promise to send something later. A standard kit list, packed the same way in the car every week, covers samples, printed price lists, order forms, a tablet and charger, business cards, PPE and a spare notebook.

                ## Milestones
                1. A written kit list covering samples, paperwork, devices, PPE and personal items.
                2. A fixed place in the car for each part of the kit.
                3. Every item on the list bought or ordered.
                4. The list printed and kept in the boot for a weekly check.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A field kit list exists, every item on it is in the car, and the list is kept in the vehicle for a weekly check."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down everything you needed on visits last month and did not have"
                - "Build the kit list from the operational checklist template"
                - "Order the missing samples, chargers and printed materials"
                - "Pack the boot with a fixed place for each part of the kit"
            - name: Field travel and expense policy
              description: |-
                ## Purpose
                Small businesses often add a first field seller with no written rules, then argue about mileage rates and hotel bills three months later. A one-page policy covering mileage rates, meal limits, overnight stays, parking, receipts and the claim deadline stops the disputes before they start and makes the cost of field selling predictable.

                ## Milestones
                1. Mileage, meal, parking and hotel limits written down, checked against the tax authority's approved rates where they exist.
                2. The rule for when an overnight stay is allowed agreed.
                3. A claim deadline and receipt standard set.
                4. The policy signed by each field seller and stored with their records.

                ## Notes
                Ask your accountant how mileage and allowances are treated for tax in your country before fixing the rates.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page field expense policy with rates, limits and a claim deadline is signed by every field seller."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the last six months of travel claims and the disputes they caused"
                - "Check the tax authority's approved mileage rates for your country"
                - "Write limits for mileage, meals, parking and overnight stays"
                - "Ask each field seller to read and sign the policy"
                - "Review the policy rates and limits against current costs @recurring(yearly)"
            - name: Lone working and road safety plan
              description: |-
                ## Purpose
                Field sellers drive more miles than almost anyone else in a business and often walk into unfamiliar premises alone. A simple plan, with a shared visit list, a check-in at the end of each day, rules on phone use while driving and a longest driving day, means someone notices quickly if a seller does not come home.

                ## Milestones
                1. The day's visit list shared with a named contact before setting off.
                2. An end-of-day check-in agreed, with what happens if it is missed.
                3. Rules written on hands-free calls, breaks and the longest driving day allowed.
                4. Emergency contacts and breakdown cover recorded in the phone and the car.

                ## Notes
                Check what your local health and safety rules require of employers with lone workers and staff who drive for work.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written lone working plan with a daily check-in, driving rules and emergency contacts is in use by every field seller."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the person who sees your visit list and receives your check-in"
                - "Agree what that person does if the check-in is missed"
                - "Write the rules on phone use, breaks and the longest driving day"
                - "Save emergency and breakdown numbers in the phone and glovebox"
                - "Test the missed check-in procedure with your contact @recurring(quarterly)"
            - name: Weekly route plan for the week ahead
              description: |-
                ## Purpose
                Planning each day on the morning of it leads to zigzag routes and half-empty afternoons. Building next week's plan on Friday, starting from accounts due under the call cycle, clustering them by area and booking around customers' opening hours, usually fits one or two more meetings into each field day.

                ## Milestones
                1. A Friday planning slot of an hour fixed in the calendar.
                2. Each plan built from accounts that are due or overdue on the call cycle.
                3. Visits grouped by area with no more than one long drive per day.
                4. Eight consecutive weeks planned on Friday rather than on the day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks have a route plan finished by the previous Friday, built from due accounts and grouped by area."
                cadence: rolling
              tasks:
                - "Block an hour each Friday afternoon for route planning"
                - "Build next week's route from due accounts, grouped by area @recurring(weekly:fri)"
                - "Leave one flexible slot each day for urgent or standby visits"
                - "Send next week's plan to your manager or the office"
            - name: Appointment confirmation routine
              description: |-
                ## Purpose
                Buyers forget meetings booked three weeks ago, and a no-show forty miles away costs a seller half a morning. Confirming each visit a day or two ahead, by message or call, with time, address and who is attending, cuts wasted trips and often moves a meeting to a better slot.

                ## Milestones
                1. A short confirmation message with date, time, location and attendees.
                2. Visits confirmed twice a week for the next two to three days.
                3. No-shows and late cancellations recorded in the visit log.
                4. The no-show rate compared before and after eight weeks of confirmations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every visit for eight weeks was confirmed in advance, and the no-show rate before and after is recorded."
                cadence: rolling
              tasks:
                - "Write a two-line confirmation message with time, address and attendees"
                - "Confirm every visit due in the next three days @recurring(weekly:mon,thu)"
                - "Record each no-show or late cancellation in the visit log"
                - "Compare the no-show rate after eight weeks with the earlier rate"
            - name: Same-day visit logging
              description: |-
                ## Purpose
                Details fade fast: within a day most sellers have forgotten who else was in the room and exactly what they promised. Logging each visit before driving to the next one, and clearing anything missed first thing the following morning, keeps the CRM honest and stops promised samples and prices from slipping.

                ## Milestones
                1. A rule agreed that each visit is logged before the next drive starts.
                2. Unlogged visits cleared by 9am the next working day.
                3. Promised actions entered as dated tasks, not buried in note text.
                4. Four weeks with every visit logged within a day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks every visit has a log entry within one working day, with promised actions entered as dated tasks."
                cadence: rolling
              tasks:
                - "Set a phone reminder to log each visit before starting the engine"
                - "Clear any visits left unlogged from the previous day @recurring(daily)"
                - "Turn every promise made on site into a dated task"
                - "Check four weeks of logs against the diary for gaps"
            - name: Pre-visit account briefing
              description: |-
                ## Purpose
                Ten minutes of preparation is the difference between asking a buyer what they ordered last month and already knowing. A short briefing for each visit, covering recent orders, open issues, last visit notes, who will be there and the one outcome wanted, can be read in the car park before walking in.

                ## Milestones
                1. A five-line briefing format: recent orders, open issues, last notes, attendees, objective.
                2. A briefing prepared for every visit in the following day's plan.
                3. The objective on each briefing matching one of the agreed visit types.
                4. A month of visits where every one had a briefing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For one month every visit has a five-line written briefing, including a stated objective, prepared before arrival."
                cadence: rolling
              tasks:
                - "Write the five-line briefing format as a note template"
                - "Prepare briefings for tomorrow's visits before finishing the day @recurring(daily)"
                - "Check open complaints and unpaid invoices before each account review"
                - "Read the briefing in the car park before walking in"
            - name: Post-visit follow-up within a working day
              description: |-
                ## Purpose
                Customers judge a field seller by what arrives after the visit as much as by the visit itself. A recap message within one working day, listing what was agreed, who owns each action and when the next contact is, turns a friendly conversation into a commitment and leaves a written trail if anything is disputed.

                ## Milestones
                1. A recap format with agreed points, owners, dates and the next contact.
                2. Recaps sent within one working day of every visit with a decision or request.
                3. Promised samples, quotes and information sent by the date given.
                4. A weekly check that no promised action is overdue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six weeks every visit with an agreed action received a written recap within one working day, and no promised item went overdue."
                cadence: rolling
              tasks:
                - "Draft a recap format with agreed points, owners and next contact"
                - "Send a recap within one working day of each visit with an action"
                - "Check for overdue samples, quotes or information promised on visits @recurring(weekly:wed)"
            - name: Monthly call cycle compliance check
              description: |-
                ## Purpose
                A call cycle only works if someone counts. A monthly comparison of visits made against visits due, by tier and by seller, shows which top accounts have gone unseen and whether the agreed frequency is realistic or needs resetting.

                ## Milestones
                1. A monthly record of visits due against visits made for each tier.
                2. Overdue top-tier accounts listed and booked into the next fortnight.
                3. Accounts visited far more often than their tier allows flagged.
                4. Six months of compliance figures recorded side by side.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks are recorded, and no top-tier account is more than one cycle overdue at the end of each."
                cadence: rolling
              tasks:
                - "Set up a metrics log with visits due and made for each tier"
                - "Compare visits made with visits due by tier and seller @recurring(monthly:8)"
                - "Book every overdue top-tier account into the next two weeks"
                - "Flag accounts visited much more often than their tier allows"
            - name: Mileage log and expense claims
              description: |-
                ## Purpose
                Mileage that is not logged weekly gets reconstructed from memory and either overclaimed or lost. Recording business miles each Friday, keeping receipts as photos and submitting one claim a month keeps reimbursement accurate and gives a clean record if the tax authority ever asks.

                ## Milestones
                1. A mileage log with date, start and end location, purpose and miles.
                2. Receipts photographed and stored the day they are received.
                3. Business miles recorded every week.
                4. One complete claim submitted each month by the policy deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of mileage are logged and three monthly claims submitted on time with every receipt attached."
                cadence: rolling
              tasks:
                - "Create a mileage log with date, route, purpose and miles"
                - "Photograph receipts into one folder the day you get them"
                - "Record the week's business miles from the diary @recurring(weekly:fri)"
                - "Submit the month's mileage and expense claim @recurring(monthly:26)"
            - name: Samples and leave-behind stock check
              description: |-
                ## Purpose
                Running out of samples or printed material during a busy month means visits that end with a promise to post something. A monthly count of samples, brochures, price lists and order pads, with a reorder level for each, keeps the boot stocked and shows which materials customers actually take.

                ## Milestones
                1. A stock list with a reorder level for each sample and printed item.
                2. A monthly count recorded against the list.
                3. Out-of-date price lists and brochures removed from the car.
                4. Usage per month noted so slow-moving materials are not reordered.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly counts are recorded, with nothing on the list running out between counts."
                cadence: rolling
              tasks:
                - "List each sample and printed item with a reorder level"
                - "Count samples and printed stock and reorder what is low @recurring(monthly:15)"
                - "Remove superseded price lists and brochures from the car"
                - "Note which items customers take most often"
            - name: Vehicle checks and servicing
              description: |-
                ## Purpose
                Breakdowns on the way to a big meeting cost a deal as well as a repair bill. A two-minute walk-round each week, covering tyres, lights, fluids and warning lights, plus a booked annual service, keeps the car safe and avoids the cancellations that customers remember.

                ## Milestones
                1. A weekly walk-round checklist kept in the glovebox.
                2. Service, insurance and any roadworthiness test dates in the calendar.
                3. Breakdown and insurance cover confirmed for business use.
                4. Twelve weeks of walk-round checks completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly checks are done, and the next service and insurance renewal are booked or in the calendar."
                cadence: cyclic
              tasks:
                - "Write a walk-round checklist for tyres, lights, fluids and warning lights"
                - "Do the walk-round check before the first drive of the week @recurring(weekly:mon)"
                - "Confirm your insurance and breakdown cover include business use"
                - "Book the annual service before it falls due @recurring(yearly)"
            - name: Weekly field plan review with each seller
              description: |-
                ## Purpose
                Managers of field teams often see a seller's week only after it has happened. A fifteen-minute review of each seller's plan for the coming week, checking the mix of top-tier, prospect and problem visits and the objective for each, catches empty days and comfort visits while there is still time to change them.

                ## Milestones
                1. A fifteen-minute slot each week with every field seller.
                2. Each plan checked for overdue top accounts and visits without objectives.
                3. One agreed change per plan recorded.
                4. Eight weeks of reviews completed for every seller.

                ## Notes
                Start from the **1:1** template, and keep this review separate from the pipeline meeting so it stays about where time goes on the road.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every field seller has had eight consecutive weekly plan reviews, each with one recorded change to the following week."
                cadence: rolling
              tasks:
                - "Book a fifteen-minute plan review with each field seller"
                - "Review each seller's route and objectives for next week @recurring(weekly:thu)"
                - "Record one agreed change per plan in your one-to-one notes"
            - name: Quarterly visit return review
              description: |-
                ## Purpose
                Time on the road is the field team's biggest cost, and it should go where it returns most. Each quarter, setting visits per account against revenue, new pipeline and orders by tier shows where frequent visiting pays and where it is habit, so the call cycle can be adjusted on evidence.

                ## Milestones
                1. Visits, revenue and new pipeline per account gathered for the quarter.
                2. Revenue and pipeline per visit hour worked out by tier.
                3. Accounts with many visits and little return listed.
                4. Frequency changes for the next quarter agreed and recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews are recorded, each with revenue per visit hour by tier and at least one agreed change to visit frequency."
                cadence: cyclic
              tasks:
                - "Export visits, revenue and new pipeline by account for the quarter"
                - "Work out revenue and pipeline per visit hour for each tier @recurring(quarterly)"
                - "List accounts with heavy visiting and little return"
                - "Agree frequency changes and update the call cycle"
            - name: Opening the first five minutes on site
              description: |-
                ## Purpose
                Face-to-face meetings are often won or lost before anyone sits down: in reception, on the walk to the meeting room and in the first two minutes of small talk. Practising a clear opening, with a reason for the visit, a time check and an agreed agenda, puts busy buyers at ease and keeps the meeting on its purpose.

                ## Milestones
                1. A three-part opening written: purpose of the visit, time check, agenda.
                2. The opening practised aloud until it takes under a minute.
                3. The opening used on ten visits with a note on how each buyer responded.
                4. One change made after reviewing the ten notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written opening has been used on ten visits, each with a note on the buyer's response, and revised once."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-minute opening with purpose, time check and agenda"
                - "Practise the opening aloud three times before tomorrow's first visit"
                - "Note how each buyer responded over the next ten visits"
                - "Rewrite one part of the opening based on the notes"
            - name: Reading a customer site on the walk round
              description: |-
                ## Purpose
                Walking through a customer's premises tells a seller things no buyer volunteers: competitors' equipment in use, stock piled in corridors, new staff, a half-empty car park. Learning to observe on purpose, and recording two or three observations after each visit, turns site access into a steady source of openings and early warnings.

                ## Milestones
                1. A short observation list: competitor products, stock levels, staffing, building work, notices.
                2. Two or three observations logged after each site visit for a month.
                3. At least three sales conversations started from something seen on site.
                4. The most useful observation prompts shared with the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A month of visit logs each include site observations, and at least three conversations have started from them."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a list of five things to look for on every site"
                - "Ask for a walk round of the site on your next account review"
                - "Log two or three observations after each site visit"
                - "Share the three most useful observation prompts with the team"
            - name: Reception, security and visitor sign-in etiquette
              description: |-
                ## Purpose
                Receptionists, gate staff and site security decide how a seller's arrival is reported upstairs, and they remember rudeness for years. Learning each site's sign-in process, arriving five minutes early, using names and following badge and safety rules without being asked builds a reputation that opens doors for short-notice visits.

                ## Milestones
                1. Sign-in, badge and parking rules noted for each regular site.
                2. Reception and security names recorded in the account notes.
                3. Arrival five minutes early made the standard on every visit.
                4. A thank-you habit for site staff who help with short-notice access.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Sign-in rules and reception contact names are recorded for every top-tier site, and every arrival for a month was on time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a reception and sign-in field to each account's notes"
                - "Record the names of reception and security staff at your top sites"
                - "Plan to arrive five minutes early for every visit this month"
            - name: Walk-in prospecting on business parks and high streets
              description: |-
                ## Purpose
                Dropping in unannounced still works for some products, especially where buyers are on site all day, as in trade counters, workshops, shops and surgeries. Learning to do it well, with a fifteen-second introduction, a leave-behind and a request for a booked follow-up, fills gaps in the route and builds pipeline next to existing customers.

                ## Milestones
                1. A fifteen-second introduction and a short card or leave-behind ready.
                2. Prospects within a short walk of existing customers listed for each area.
                3. Twenty walk-in calls made and logged with the outcome.
                4. Booked follow-up meetings from the walk-ins counted.

                ## Notes
                Respect signs that say no cold callers, and check any rules on unsolicited in-person selling in your country.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty walk-in calls are logged with outcomes, and the number of booked follow-up meetings is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List ten businesses within walking distance of tomorrow's visits"
                - "Write a fifteen-second introduction ending in a request for a booked meeting"
                - "Make twenty walk-in calls between scheduled visits"
                - "Log each walk-in outcome and book the follow-ups"
            - name: Running a site survey for an accurate quote
              description: |-
                ## Purpose
                Quotes built from a buyer's description often miss access problems, power supplies, floor space or existing kit, and the gap turns into a variation or a lost margin later. A structured survey, with a checklist, measurements, photos and the customer's sign-off, makes quotes right first time and shows the buyer the job has been understood.

                ## Milestones
                1. A survey checklist for your product covering access, dimensions, services and existing equipment.
                2. A standard photo set and measurement sheet.
                3. Three surveys completed and checked by a technical colleague.
                4. The survey summary sent to each customer for confirmation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A survey checklist is in use and three surveys have been reviewed by a technical colleague and confirmed by the customer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a technical colleague what past quotes missed on site"
                - "Write a survey checklist covering access, dimensions and services"
                - "Complete three surveys with photos and measurements"
                - "Send each customer a survey summary to confirm"
            - name: Retail store visits and shelf checks
              description: |-
                ## Purpose
                Reps selling into shops, pharmacies and garden centres earn their orders on the shop floor as much as in the back office. Learning a consistent store visit routine, with a shelf check of facings, stock, pricing and display material against what was agreed, gives the store manager facts to act on and builds the case for more space.

                ## Milestones
                1. A store visit checklist covering stock, facings, prices, display material and competitor activity.
                2. Before and after photos taken on each visit.
                3. Gaps raised with the store manager with an agreed fix.
                4. Ten stores visited using the routine, with findings logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten store visits have been completed with a shelf check, before and after photos and an agreed fix for each gap."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a store visit checklist for stock, facings, prices and displays"
                - "Take before and after photos of your section on each store visit"
                - "Agree one fix with the store manager for every gap found"
                - "Log findings from ten store visits and look for repeated problems"
            - name: Customer site inductions and PPE
              description: |-
                ## Purpose
                Factories, construction sites, farms and hospitals often require an induction, protective equipment or a permit before a visitor can go beyond reception. Knowing each site's rules and carrying the right boots, high-visibility vest, hard hat or ear defenders avoids being turned away and shows the customer you take their site seriously.

                ## Milestones
                1. Sites needing an induction or PPE identified in the account list.
                2. Standard PPE bought and kept in the car.
                3. Inductions completed for the sites visited most often, with expiry dates recorded.
                4. Site rules noted in each account's visit briefing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every account requiring an induction or PPE is flagged, the PPE is in the car, and induction expiry dates are recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Flag accounts that require a site induction or protective equipment"
                - "Buy safety boots, a high-visibility vest and other PPE your sites need"
                - "Book inductions at the sites you visit most often"
                - "Check for site inductions due to expire @recurring(quarterly)"
            - name: Gifts, hospitality and anti-bribery rules for visits
              description: |-
                ## Purpose
                Lunches, samples, event tickets and small gifts are part of field selling, and they are also where anti-bribery rules and customers' own policies bite. Learning your company's policy, each customer's rules and the stricter limits that often apply to public sector buyers lets you be generous where it is allowed and safe everywhere else.

                ## Milestones
                1. Your company's gifts and hospitality policy read, with its limits and approval steps.
                2. Customers with their own no-gifts or declaration rules flagged.
                3. A hospitality register in use for anything given or received.
                4. Questions about grey areas answered in writing by whoever owns the policy.

                ## Notes
                This organises the rules you already work under. Take legal questions to your compliance lead or adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The hospitality policy has been read, a register is in use, and accounts with stricter rules are flagged in the CRM."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your company's gifts and hospitality policy and note the limits"
                - "Ask your top customers whether they have gift or hospitality rules"
                - "Start a register of hospitality given and received"
                - "Send grey-area questions to the policy owner in writing"
            - name: Planning joint visits with a specialist or manager
              description: |-
                ## Purpose
                Bringing an engineer, product specialist or senior manager to a visit can move a deal forward, or can leave the buyer facing three people talking over each other. Agreeing roles, the objective and who speaks when, in a ten-minute call beforehand, makes joint visits look like a team and protects your relationship with the customer.

                ## Milestones
                1. A joint visit brief covering objective, attendee roles, topics each person owns and topics to avoid.
                2. A pre-visit call held before every joint visit.
                3. A two-minute debrief after each joint visit with one lesson noted.
                4. Three joint visits run using the brief.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three joint visits have been run with a written brief, a pre-visit call and a recorded debrief."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page joint visit brief format"
                - "Hold a ten-minute call with the colleague before each joint visit"
                - "Agree who leads, who supports and what each person will not raise"
                - "Debrief for two minutes in the car park after the visit"
            - name: Company car, allowance or own vehicle decision
              description: |-
                ## Purpose
                Whether a field seller drives a company car, a leased vehicle on an allowance or their own car on a mileage rate changes the cost to the business, the seller's tax position and who carries the risk. Comparing the options over three years, with your accountant's input, gives a decision that does not need revisiting every time a car breaks down.

                ## Milestones
                1. Three options costed over three years: company car, car allowance, own car on mileage.
                2. Tax and insurance effects of each option checked with an accountant.
                3. Seller preferences and annual mileage taken into account.
                4. A decision recorded with the reasons and a review date.

                ## Notes
                Start from the **Purchase decision** template. Electric vehicles change running costs and often the tax treatment, so cost them as a separate option.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on company car, allowance or mileage, with three-year costs for each option and the accountant's comments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate annual business miles for each field seller"
                - "Cost a company car, an allowance and own car mileage over three years"
                - "Ask your accountant how each option is taxed for the business and seller"
                - "Record the decision and the date to review it"
            - name: Route planning app selection and set-up
              description: |-
                ## Purpose
                Ordinary map apps handle one trip at a time, while multi-stop route planners can reorder a day of eight visits around traffic and opening hours. Trialling two or three, ideally ones that read accounts from your CRM, shows whether the time saved justifies another subscription.

                ## Milestones
                1. Two or three route planning tools shortlisted with prices and CRM links.
                2. Each trialled for a week on real visit days.
                3. Drive time on trial days compared with the baseline study.
                4. One tool chosen, or a decision recorded that the map app is enough.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A route planning tool is chosen or rejected after a trial, with drive time compared against the baseline study."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist three multi-stop route planners that connect to your CRM"
                - "Trial each one for a week of real visit days"
                - "Compare drive time on trial days with your baseline study"
                - "Record which tool you chose and why, or why none"
            - name: Day zones for the weekly visit pattern
              description: |-
                ## Purpose
                Giving each weekday a zone, such as the north on Monday, the city centre on Tuesday and the coast on Thursday, means customers learn when you are nearby and route planning becomes a matter of filling a day rather than designing one. It also makes short-notice visits easier to promise.

                ## Milestones
                1. The visit area split into four or five zones of similar visit load.
                2. Each zone assigned a regular day.
                3. Top customers told which day you are usually in their area.
                4. Four weeks run on the zone pattern with drive time compared.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A zone-by-day pattern is written down, top customers know their day, and four weeks of drive time have been compared with the baseline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Split your accounts on the map into four or five zones"
                - "Assign each zone a regular weekday"
                - "Tell top customers which day you are usually nearby"
                - "Run four weeks on the pattern and compare drive time"
            - name: Standby visit list for cancellations
              description: |-
                ## Purpose
                Cancelled meetings are inevitable, and an empty hour in a business park is wasted unless there is somewhere useful to go. A standby list for each zone, with accounts that welcome a drop-in, overdue lower-tier customers and nearby prospects, turns cancellations into extra visits.

                ## Milestones
                1. A standby list of five to eight accounts for each zone.
                2. Each entry noting whether a drop-in is welcome and who to ask for.
                3. Cancellations and what replaced them recorded for a month.
                4. The list refreshed monthly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each zone has a standby list of at least five accounts, and a month of cancellations shows what replaced each one."
                cadence: rolling
              tasks:
                - "List five to eight drop-in friendly accounts for each zone"
                - "Note who to ask for and when a drop-in is welcome"
                - "Record what replaced each cancelled meeting this month"
                - "Refresh the standby list for each zone @recurring(monthly:22)"
            - name: Moving low-value accounts to remote cover
              description: |-
                ## Purpose
                Once visits are costed, it is usually clear that a group of small accounts cost more to visit than they earn. Moving them to a planned rhythm of calls, video meetings and an occasional visit, and telling them properly, frees field days without making loyal customers feel dropped.

                ## Milestones
                1. Accounts below the visit cost threshold listed with their revenue.
                2. A remote cover plan for them: who calls, how often, and when a visit still happens.
                3. Each customer told about the change by their seller, by phone or in person.
                4. Orders and complaints from the group tracked for six months after the move.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Low-value accounts have moved to a written remote cover plan, each was told personally, and six months of orders are tracked against the previous period."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List accounts whose visit cost exceeds their margin"
                - "Write the remote cover plan with call frequency and owner"
                - "Call each affected customer to explain the change"
                - "Compare orders from the group for six months before and after"
            - name: Leave-behind sheets for each visit type
              description: |-
                ## Purpose
                Buyers rarely remember the details of a visit by the time they discuss it with colleagues, and the brochure left on the desk was not written for that conversation. A one-page leave-behind for each main visit type, summarising the problem discussed and the next step, gives your champion something to pass on.

                ## Milestones
                1. A one-page leave-behind designed for each of the main visit types.
                2. A space on each for handwritten notes or the agreed next step.
                3. Printed copies in the field kit and a digital version for recap emails.
                4. Feedback gathered from five customers on whether they used it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A leave-behind exists for each main visit type, is in the field kit, and five customers have said whether they used it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the three visit types where a leave-behind would help most"
                - "Draft one page for each with a space for the next step"
                - "Print copies for the kit and save a version for recap emails"
                - "Ask five customers whether they shared or used the sheet"
            - name: Cutting in-car admin with voice notes
              description: |-
                ## Purpose
                Typing visit notes on a phone in a car park is slow and gets put off. Dictating a structured voice note straight after each visit, then turning it into the log entry and recap, can save twenty minutes a day and captures detail while it is fresh.

                ## Milestones
                1. A spoken structure for each note: visit type, attendees, what was said, next step.
                2. A voice note recorded after every visit for two weeks.
                3. Notes turned into log entries and recaps the same day.
                4. Daily admin time compared with the baseline study.

                ## Notes
                Never dictate or handle the phone while driving. Record before you pull away.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two weeks of visits are logged from voice notes the same day, and daily admin time is compared with the baseline."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the four-part spoken structure on a card in the car"
                - "Record a voice note before pulling away from each visit"
                - "Ask the agent to turn each voice note into a visit log entry and recap draft"
                - "Compare two weeks of admin time with your baseline study"
            - name: Regional visit week for distant accounts
              description: |-
                ## Purpose
                Accounts two or three hours away often go unseen for a year because no single trip seems worth it. A planned regional week, with visits booked a month ahead, overnight stays decided against the expense policy and a standby list for gaps, can cover a whole outlying region in a few days.

                ## Milestones
                1. Every account in the distant region listed with its last visit date.
                2. A schedule of three to five days with meetings confirmed a month ahead.
                3. Overnight stays booked within the expense policy.
                4. Each visit logged and followed up within a working day of the trip.

                ## Notes
                Start from the **Trip** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A regional visit week is completed with at least three meetings a day, every one logged and followed up."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List accounts in the distant region and their last visit dates"
                - "Book meetings for the week at least a month ahead"
                - "Decide where to stay overnight and book within policy"
                - "Build a standby list of nearby prospects for any gaps"
            - name: Hosting customers at your premises
              description: |-
                ## Purpose
                Showing a prospect your factory, warehouse or showroom lets them see the people and processes behind the product, and buyers who have visited tend to stay longer. A well-run visit needs a clear agenda, a tour route, a safety briefing, the right colleagues on hand and a follow-up the same week.

                ## Milestones
                1. An agenda and tour route agreed with operations colleagues.
                2. Safety briefing, PPE and visitor passes ready.
                3. Colleagues briefed on the customer and the visit objective.
                4. A follow-up sent within three working days with agreed next steps.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A customer visit to your premises is held with a written agenda and tour route, and a follow-up is sent within three working days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree a date and the visit objective with the customer"
                - "Plan the tour route and safety briefing with operations"
                - "Brief every colleague the customer will meet"
                - "Send a follow-up with next steps within three working days"
            - name: Pre-season visit round before customers' buying season
              description: |-
                ## Purpose
                Many customers place most of a year's orders in a short window, such as garden centres before spring, schools before the new academic year or retailers before the holiday peak. A visit round timed six to eight weeks before that window puts you in the room while budgets and ranges are being decided.

                ## Milestones
                1. Each top account's buying window noted in the CRM.
                2. Visits booked six to eight weeks before each window.
                3. New ranges, prices and samples ready before the first visit.
                4. Orders from the round compared with the previous season.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every top account with a seasonal buying window was visited six to eight weeks before it, with orders compared against last season."
                cadence: cyclic
              tasks:
                - "Record each top account's main buying window"
                - "Book pre-season visits six to eight weeks before each window @recurring(yearly)"
                - "Prepare new ranges, prices and samples before the round starts"
                - "Compare the round's orders with the same season last year"
            - name: Trade show lead follow-up visit round
              description: |-
                ## Purpose
                Leads from an exhibition go cold within weeks, and most never get more than an email. Booking visits with the best ones inside three weeks of the show, grouped by area, turns a stand conversation into a proper meeting while the buyer still remembers you.

                ## Milestones
                1. Show leads sorted into visit, call and email groups within three days.
                2. Visits with the top group booked and grouped by area.
                3. All visits completed within three weeks of the show.
                4. Meetings and pipeline from the round recorded against the show cost.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every top-group lead from the show was visited within three weeks, with pipeline created recorded against the show's cost."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sort show leads into visit, call and email groups within three days"
                - "Book visits with the top group, grouped by area"
                - "Visit each top lead within three weeks of the show"
                - "Record pipeline created from the round against the show cost"
            - name: Two visit days a week for an owner who sells
              description: |-
                ## Purpose
                Owners of small businesses usually do the selling between everything else, and customer visits are the first thing squeezed out by a busy week. Protecting two fixed visit days, with cover arranged and outcomes reviewed at the end of the week, keeps face time with customers going even when the business is at full stretch.

                ## Milestones
                1. Two weekdays fixed as visit days and marked in the shared calendar.
                2. Cover arranged for phones, the shop or the workshop on those days.
                3. At least four visits booked on each visit day.
                4. Eight weeks run with visit days kept and outcomes reviewed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks with two visit days kept and at least four visits on each, with outcomes reviewed weekly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose two weekdays that will be visit days"
                - "Arrange cover for phones and the shop or workshop on those days"
                - "Book at least four visits for each visit day"
                - "Review the week's visit outcomes and next steps @recurring(weekly:thu)"
            - name: First month on the road as a field seller
              description: |-
                ## Purpose
                New field sellers inherit a car, a map and a list of names, and the first month sets the habits that stick. Planning it in stages, from shadowing an experienced colleague and introduction visits with the top accounts to running a full call cycle alone, gives a new seller early wins and their manager a clear picture of progress.

                ## Milestones
                1. Two days shadowing an experienced field seller completed.
                2. Introduction visits made to every top-tier account in the first three weeks.
                3. The kit, visit log and route plan routines all in use.
                4. A first-month review held with the manager, with three priorities for month two.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "By day thirty every top-tier account has had an introduction visit and a first-month review with the manager is recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Book two shadowing days with an experienced field seller"
                - "Schedule introduction visits with every top-tier account"
                - "Set up the kit, visit log and Friday route plan in week one"
                - "Hold a first-month review with your manager"
            - name: Ride-along coaching for field managers
              description: |-
                ## Purpose
                Sitting in the office, a field manager sees only the CRM and misses what happens in reception, on the shop floor and in the car between visits. A monthly day riding with each seller, observing rather than taking over and agreeing one point to work on, gives coaching that recordings and reports cannot.

                ## Milestones
                1. A monthly ride-along day booked with every field seller.
                2. A rule agreed that the manager observes and only steps in if asked.
                3. One development point recorded after each day and checked the next month.
                4. Six months of ride-alongs completed for each seller.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each field seller has had six monthly ride-along days, each with one written development point followed up the next month."
                cadence: rolling
              tasks:
                - "Agree with each seller how ride-along days will work"
                - "Spend a full field day riding with one seller @recurring(monthly:12)"
                - "Write one development point at the end of the day"
                - "Check progress on last month's point at the start of the next ride-along"
            - name: Leading a field team you rarely see in person
              description: |-
                ## Purpose
                Regional field teams can go weeks without seeing their manager or each other, and isolation shows up as slipping standards and sellers leaving. A deliberate rhythm, with a short weekly call, shared visit wins, a quarterly day together and clear response times for help, keeps a spread-out team connected.

                ## Milestones
                1. A weekly thirty-minute team call with a fixed agenda.
                2. A channel where sellers share visit wins and site tips.
                3. Four in-person team days in the calendar for the year.
                4. Agreed response times for sellers who need help on the road.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weekly team call, a shared wins channel and a calendar of quarterly team days are running for a spread-out field team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set a fixed weekly thirty-minute call with a short agenda"
                - "Open a channel for sharing visit wins and site tips"
                - "Put four in-person team days in the calendar for the year"
                - "Agree how fast you will answer a seller who needs help on the road"
            - name: Field visits around school runs and caring hours
              description: |-
                ## Purpose
                Sellers with school runs or caring responsibilities often have a fixed window, perhaps half past nine to half past two, and long routes break it. Planning a compact visit pattern inside that window, with remote meetings and admin outside it, keeps the call cycle intact without anyone having to apologise for leaving.

                ## Milestones
                1. The working window agreed with the manager in writing.
                2. Zones within reach of home grouped into window-sized days.
                3. Distant accounts covered by remote meetings, joint visits or a regional week.
                4. Call cycle compliance kept for two months within the window.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written visit window is agreed and two months of call cycle compliance have been achieved within it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down your fixed working window and agree it with your manager"
                - "Group nearby accounts into days that fit the window"
                - "Plan remote cover for accounts too far to reach and return"
                - "Check call cycle compliance after two months"
            - name: Field selling in rural and remote areas
              description: |-
                ## Purpose
                Rural patches mean long drives, poor mobile signal, unreliable opening hours and customers who expect a seller to stay for a cup of tea. Planning for offline logging, fuel stops, fewer but longer visits and weather contingencies keeps a remote patch productive and safe.

                ## Milestones
                1. Offline maps and an offline visit log tested before setting off.
                2. Fuel stops and signal black spots marked on the route plan.
                3. Visit length and frequency adjusted for fewer, longer visits.
                4. A weather and road closure fallback agreed for the winter months.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Offline maps and logging are tested, and a written plan covers fuel, black spots and weather fallback for the rural patch."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download offline maps for the whole rural patch"
                - "Test logging a visit with the phone in flight mode"
                - "Mark fuel stops and no-signal areas on the route map"
                - "Agree what happens to visits when roads close in bad weather"
            - name: Multi-stop route planning with customer time windows
              description: |-
                ## Purpose
                Experienced field planners solve a harder problem than shortest distance: each customer has hours they can meet, some visits need ninety minutes and some fifteen, and a few must happen on fixed days. Building a weekly model with time windows, visit durations and a drive-time table shows the real capacity of a patch and the best order to work it.

                ## Milestones
                1. Meeting windows and typical visit lengths recorded for every regular account.
                2. A drive-time table between zones built from real drive times.
                3. A week of routes produced from the model and driven.
                4. Planned and actual times compared and the model adjusted.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A route model using time windows, visit lengths and real drive times has produced a driven week of routes with planned and actual times compared."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Record each regular account's meeting window and typical visit length"
                - "Build a drive-time table between zones from real trips"
                - "Generate next week's routes from the model"
                - "Compare planned and actual times and adjust the model"
            - name: Visit frequency test with a control group
              description: |-
                ## Purpose
                Nobody really knows whether visiting a mid-tier account every four weeks instead of every eight changes what it buys. Splitting similar accounts into two groups for six months, one visited more often and one less, gives an answer the whole call cycle can be built on.

                ## Milestones
                1. Two matched groups of at least fifteen similar accounts each.
                2. Different visit frequencies agreed for each group and followed for six months.
                3. Orders, margin and pipeline tracked for both groups.
                4. A written result with a recommendation for the call cycle.

                ## Notes
                Keep top accounts out of the test. The point is to learn on the middle tier, not to risk the largest customers.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A six-month test of two visit frequencies on matched account groups is complete, with a written result and call cycle recommendation."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick thirty similar mid-tier accounts and split them into two matched groups"
                - "Set a higher visit frequency for one group and a lower one for the other"
                - "Track orders, margin and pipeline for both groups each month"
                - "Write up the result and propose a call cycle change"
            - name: Cutting field travel cost and emissions
              description: |-
                ## Purpose
                Fuel, mileage and vehicle costs rise every year, and many customers now ask suppliers about travel emissions. Measuring miles and emissions per visit, then testing changes such as electric vehicles, better routing and more remote meetings, cuts cost and gives sales a credible answer when buyers ask.

                ## Milestones
                1. Annual business miles and an emissions estimate per visit calculated.
                2. Three reduction options costed, such as an electric vehicle, routing changes or more remote meetings.
                3. One option piloted for three months.
                4. The result written up with cost and emissions per visit before and after.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-month pilot of one travel reduction option is complete, with cost and emissions per visit compared before and after."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Total last year's business miles from the mileage log"
                - "Estimate emissions per visit using a published conversion factor"
                - "Cost three ways to reduce miles or emissions"
                - "Pilot one option for three months and compare the results"
---

# Field Sales & In-Person Visits

This area is for sellers who spend their days on the road meeting customers face to face, the small business owners who do their own visits, and the managers who lead field teams. It starts with the foundations (visit types, a location map, a call cycle, time and cost baselines, in-person versus remote rules, a mobile visit log, kit, expenses and safety), moves through the weekly and monthly routines that keep a patch covered, the on-site skills worth practising, the improvements and decisions that cut wasted miles, dated visit rounds and events, situations for owners, new sellers, managers and people with fixed hours or rural patches, and ends with specialist route modelling, frequency testing and travel cost work.

What repeats is a Friday route plan, twice-weekly appointment confirmations, daily logging and briefings, weekly mileage, vehicle checks and plan reviews, monthly call cycle checks, stock counts, ride-alongs and expense claims, quarterly return reviews, and yearly re-tiering, servicing and pre-season rounds. The Operational checklist, Metrics log, 1:1, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
