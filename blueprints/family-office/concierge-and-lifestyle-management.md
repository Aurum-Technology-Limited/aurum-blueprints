---
id: family-office.concierge-and-lifestyle-management
name: Concierge and Lifestyle Management
description: "Concierge and lifestyle requests run as one system: a single intake channel, preference profiles for every family member, approved vendors, spending rules, and the routines behind travel, reservations, gifts and family events."
category: personal
version: 1.0.0
tags: [family-office, concierge-and-lifestyle-management, parent, retiree, concierge, travel-planning, gifting, family-events]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - trip
    - operational-checklist
    - metrics-log
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Concierge and Lifestyle Management
          description: "Using concierge and lifestyle services: travel, events, reservations, gifts, vendor lists and keeping requests and preferences organised."
          projects:
            - name: Scope of concierge support for the family
              description: |-
                ## Purpose
                Requests drift between a personal assistant, the family office, a travel agent and whichever relative answers the phone, so nobody knows who books the restaurant or who chases the lost luggage. Writing down what concierge support covers, for whom and up to what level, ends the duplicate bookings and the requests that fall through the gaps.

                ## Milestones
                1. A list of the request types the family actually makes, drawn from the last three months.
                2. Each request type assigned to one owner: assistant, office, outside concierge or the family member.
                3. Family members and branches covered by the service named, with any exclusions.
                4. A one-page scope note shared with the principal and everyone who handles requests.

                ## Notes
                Keep household staff management, property works and security out of the concierge scope; they need their own owners and controls.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page concierge scope note names every request type, its owner and the family members covered, and has been shared with all request handlers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every concierge request from the last three months using emails and messages"
                - "Group the requests into types such as travel, dining, gifts, tickets and events"
                - "Assign one owner to each request type and note who is covered"
                - "Share the one-page scope note with the principal and every request handler"
            - name: Preference profile for every family member
              description: |-
                ## Purpose
                Good concierges remember that one grandparent wants a ground-floor room and another hates early flights; a forgetful one makes the family repeat themselves on every booking. A short written profile for each person, covering travel, dining, hotel and gift preferences, lets any handler book well the first time.

                ## Milestones
                1. A standard profile format with sections for travel, hotels, dining, gifts and dislikes.
                2. A profile drafted for each family member in scope, checked with that person or a parent.
                3. Profiles stored in one place that every authorised handler can reach.
                4. A date set for the first quarterly refresh.

                ## Notes
                Record preferences, not sensitive detail the booking does not need. Seat choice belongs in the profile; medical history does not.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every family member in scope has a one-page preference profile confirmed by them or a parent and stored where handlers can find it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page profile format with five standard sections"
                - "Interview each family member for ten minutes about travel and dining likes"
                - "Store the confirmed profiles in the shared concierge folder"
                - "Refresh each profile with anything learnt from recent bookings @recurring(quarterly)"
            - name: One request channel for every family request
              description: |-
                ## Purpose
                Requests sent by text at midnight, by voice note to one assistant and by email to another are the main reason things get missed. Agreeing one channel, such as a shared mailbox or a request form, with a simple log behind it, means every request gets a reference, an owner and a closing date.

                ## Milestones
                1. One intake channel chosen and set up, with a backup for urgent requests.
                2. A request log with columns for date, requester, type, owner, deadline and status.
                3. Family members told how to send requests and what an urgent request looks like.
                4. Two weeks of requests running through the channel with nothing handled off the log.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All new concierge requests for two consecutive weeks are recorded in a single log with an owner and a target date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a shared mailbox or simple request form as the single intake channel"
                - "Build a request log with date, requester, type, owner, deadline and status"
                - "Send each family member a short note on how and where to send requests"
                - "Move any requests still arriving by private message onto the log"
            - name: Choosing how concierge work is delivered
              description: |-
                ## Purpose
                Families usually choose between an in-house lifestyle manager, a membership concierge service, a specialist travel agency, or a mix, and each suits a different volume and style of request. Comparing them against the scope note and last year's request numbers gives a decision you can explain to the principal and revisit later.

                ## Milestones
                1. Annual request volume and the main request types estimated from the log or past emails.
                2. Three delivery options costed: in-house role, membership service and agency mix.
                3. Each option scored on cost, response time, reach abroad and discretion.
                4. A recommendation agreed with the principal and recorded with its reasons.

                ## Notes
                Start from the **Purchase decision** template. Ask every provider how they are paid, since commissions from hotels and venues are common in this industry.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on how concierge work is delivered, with three costed options compared and the principal's sign-off recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count last year's concierge requests by type from emails and the log"
                - "Request proposals and fee schedules from two membership concierge services"
                - "Cost an in-house lifestyle manager role including salary and expenses"
                - "Present the scored comparison to the principal and record the decision"
            - name: Approved lifestyle vendor list
              description: |-
                ## Purpose
                The florist who always delivers, the driver in London who knows the family, the caterer for the beach house: these names usually live in one assistant's phone and leave with them. A shared vendor list with contact details, terms, past use and a rating turns personal know-how into something the family keeps.

                ## Milestones
                1. Every regular lifestyle vendor gathered from assistants, cards and past invoices.
                2. Each vendor recorded with service, location, contact, terms and last use.
                3. A simple rating and a note on who in the family has used them.
                4. Vendors with no use in two years marked inactive.

                ## Notes
                Start from the **Vendor** template. Keep the list to lifestyle suppliers; household staff and building contractors belong to their own registers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared vendor list holds every regular lifestyle supplier with contact, terms, last use and a rating, and inactive vendors are marked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each assistant to export the lifestyle suppliers saved in their phone"
                - "Pull vendor names from the last year of concierge invoices"
                - "Record each vendor's service, city, contact, terms and last use"
                - "Mark vendors unused for two years as inactive"
            - name: Spending authority for concierge requests
              description: |-
                ## Purpose
                Without limits, a handler either books a twelve-thousand-dollar villa on a text message or phones the principal about a forty-dollar bouquet. Written spending authority, with thresholds by request type and who can approve above them, lets routine bookings move fast while large ones get a second look.

                ## Milestones
                1. Spending thresholds set for routine, larger and exceptional requests.
                2. Named approvers for each threshold, with a deputy when they travel.
                3. Rules on which payment method is used for which kind of booking.
                4. The authority note signed off by the principal and shared with handlers.

                ## Notes
                Any request to change payment details for a vendor should be confirmed by phone on a number you already hold, never from the email that asks for it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed spending authority note sets thresholds, approvers and payment methods for concierge requests and is held by every handler."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft three spending thresholds with examples of requests in each"
                - "Name an approver and a deputy for each threshold"
                - "Get the principal's sign-off on the spending authority note"
                - "Review the thresholds against last year's bookings and adjust them @recurring(yearly)"
            - name: Travel documents and loyalty programme register
              description: |-
                ## Purpose
                One lapsed passport or a missing visa can cancel a trip that cost months to arrange, and airline status earned by one family member is often wasted because nobody can find the number. One register of passport expiry dates, visas, trusted traveller memberships and loyalty numbers, without copying the documents themselves into unsafe places, prevents both.

                ## Milestones
                1. Each family member's passports, nationalities and expiry dates listed.
                2. Visas, residence permits and trusted traveller memberships recorded with expiry dates.
                3. Airline, hotel and car rental loyalty numbers recorded for each person.
                4. The register stored with restricted access and a named keeper.

                ## Notes
                Many countries require several months of passport validity on arrival. Check each destination's rule with its official source before booking.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A restricted-access register shows passport and visa expiry dates and loyalty numbers for every family member in scope."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each family member's passports with nationality and expiry date"
                - "Add visas, residence permits and trusted traveller memberships with expiry dates"
                - "Collect airline and hotel loyalty numbers from each family member"
                - "Restrict access to the register to the named keeper and the principal"
            - name: Family key dates and occasions calendar
              description: |-
                ## Purpose
                Birthdays, anniversaries, graduations and memorials are the dates on which a forgotten gift or a late booking hurts most. A single calendar of the family's key occasions, including godchildren, staff and close friends the principal wants remembered, lets gifts and reservations be planned weeks ahead instead of hours.

                ## Milestones
                1. Birthdays and anniversaries collected for the family and the wider circle the principal names.
                2. Recurring religious, cultural and national holidays the family marks added.
                3. Each date given a lead time for gifts, cards or bookings.
                4. The calendar shared with the gifting and reservations owners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar lists every key family occasion with a lead time, and the gifting owner can see it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the principal for the list of people whose occasions must be remembered"
                - "Enter birthdays, anniversaries and memorials with lead times in a shared calendar"
                - "Add the holidays and festivals the family marks each year"
                - "Add new births, marriages and godchildren to the calendar @recurring(yearly)"
            - name: Briefing pack for a new concierge provider
              description: |-
                ## Purpose
                New lifestyle managers and membership services spend its first months learning what the last one knew, often by getting it wrong in front of the family. A briefing pack with the scope, profiles, vendors, spending rules and what may and may not be shared with third parties shortens that period to a few weeks.

                ## Milestones
                1. A briefing pack assembled from the scope note, profiles, vendor list and spending authority.
                2. Rules on what family information the provider may share with hotels and venues.
                3. A confidentiality agreement signed by the provider before the pack is released.
                4. A first-month check-in held to fix gaps the provider found.

                ## Notes
                Give the provider only what bookings need. Wealth details, structure charts and security arrangements stay with the office.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A briefing pack and signed confidentiality agreement are on file for the current concierge provider, with a first-month check-in recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather the scope note, profiles, vendor list and spending authority into one pack"
                - "Write half a page on what may be shared with hotels, venues and agents"
                - "Obtain the provider's signed confidentiality agreement before sending the pack"
                - "Hold a check-in after the first month to collect the provider's questions"
            - name: Dietary, allergy and accessibility record for bookings
              description: |-
                ## Purpose
                Mentioning a severe nut allergy once on the phone and never passing it to the restaurant is the kind of mistake a concierge cannot afford. A short record of each person's dietary needs, allergies and access requirements, confirmed by them and sent with every relevant booking, makes it a routine part of the job.

                ## Milestones
                1. Each family member asked about allergies, dietary rules and access needs.
                2. A short record kept, wording confirmed by the person or a parent.
                3. A standard line added to restaurant, hotel and catering requests.
                4. A yearly confirmation date set.

                ## Notes
                This record supports bookings only. Medical decisions and emergency plans stay with the family's doctors.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A confirmed dietary, allergy and access record exists for every family member, and the standard booking line is in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each family member or parent about allergies, diets and access needs"
                - "Write the wording each person wants passed to restaurants and hotels"
                - "Add a standard dietary and access line to the booking request format"
                - "Confirm each person's dietary and access record is still accurate @recurring(yearly)"
            - name: Weekly review of open concierge requests
              description: |-
                ## Purpose
                Requests rarely fail at the start; they fail in the middle, when the hotel has not confirmed or the ticket agent has gone quiet. A short weekly pass through the open log, chasing anything past its target date and closing what is done, keeps the family from discovering the gap at the airport.

                ## Milestones
                1. A fixed weekly slot for the review with the main request handlers.
                2. Every open request checked for owner, next step and target date.
                3. Overdue requests chased or escalated the same day.
                4. Completed requests closed with a confirmation filed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The request log is reviewed every week, and no open request is more than seven days past its target date without an escalation note."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute review slot with the request handlers"
                - "Review every open request in the log and chase anything overdue @recurring(weekly:mon)"
                - "Escalate requests blocked for a week to the head of office"
                - "File the confirmation for each closed request"
            - name: Monthly concierge spend reconciliation
              description: |-
                ## Purpose
                Concierge spending arrives on several cards, invoices and membership statements, and service fees or commissions can hide inside the totals. Matching every charge to a request in the log each month shows what the family really spends on lifestyle services and catches duplicate or unauthorised bookings early.

                ## Milestones
                1. Every card statement and concierge invoice for the month gathered.
                2. Each charge matched to a request and its approver.
                3. Unmatched charges queried with the provider or card issuer.
                4. A one-line monthly total by request type recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's concierge charges are matched to logged requests, unmatched items are queried within ten days and a monthly total is recorded."
                cadence: rolling
              tasks:
                - "Collect the month's card statements and concierge invoices in one folder"
                - "Match each charge to a logged request and record unmatched items @recurring(monthly:8)"
                - "Query unmatched or duplicate charges with the provider"
                - "Record the monthly concierge total by request type"
            - name: Gift-giving calendar and gift log
              description: |-
                ## Purpose
                Gifts that repeat, arrive late or cost wildly different amounts for similar relationships cause more awkwardness than no gift at all. Working from the occasions calendar with a gift log that records what was given, to whom, at what cost and how it was received makes each year's choices easier and fairer.

                ## Milestones
                1. A gift log recording recipient, occasion, gift, cost and response.
                2. Rough budget bands agreed for close family, wider family, friends and staff.
                3. Next month's occasions checked and gifts chosen in good time.
                4. Thank-you notes and responses recorded against each gift.

                ## Notes
                Gifts to officials, business contacts or staff can raise tax or conduct questions. Check unusual cases with the family office or an adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every gift sent in the last twelve months appears in the log with cost and recipient, and none of the calendar's occasions was missed."
                cadence: rolling
              tasks:
                - "Start a gift log with recipient, occasion, gift, cost and response columns"
                - "Agree budget bands for each group of recipients with the principal"
                - "Check next month's occasions and order the gifts @recurring(monthly:3)"
                - "Record responses and thank-you notes against each gift"
            - name: Trip planning from request to final itinerary
              description: |-
                ## Purpose
                Family trips go wrong when flights are booked before the hotel is confirmed, or when three people each hold a different version of the plan. A standard sequence from brief to options, approval, bookings and a single final itinerary sent a week before departure makes every trip, large or small, run the same way.

                ## Milestones
                1. A trip brief format covering dates, travellers, budget, purpose and must-haves.
                2. A standard order: brief, options, approval, bookings, itinerary.
                3. One final itinerary with confirmations and contacts sent a week before departure.
                4. The process used on the next two trips and adjusted.

                ## Notes
                Start from the **Trip** template. Keep one master itinerary and send updates from it, rather than forwarding confirmations one by one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The next two family trips each have a written brief, an approval record and a single final itinerary sent at least seven days before departure."
                cadence: rolling
              tasks:
                - "Write a one-page trip brief format with the six questions to ask first"
                - "Set the standard order of brief, options, approval, bookings and itinerary"
                - "Ask the agent to assemble confirmations into one master itinerary"
                - "Send the final itinerary to every traveller a week before departure"
            - name: Restaurant and reservation preference log
              description: |-
                ## Purpose
                Regular tables, favourite dishes, a preferred sommelier and the restaurants the family never wants to see again are hard-won knowledge that makes bookings feel personal. Keeping a log by city and venue, updated after each meal, means the next booking asks for the right table and avoids last year's disappointment.

                ## Milestones
                1. A log of favoured and avoided restaurants by city.
                2. Notes on preferred tables, timings, menus and contacts at each venue.
                3. Feedback from each family meal out added within a week.
                4. Standing reservations for regular occasions recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reservation log covers every city the family dines in regularly, with feedback from meals in the last month added."
                cadence: rolling
              tasks:
                - "List the family's favoured and avoided restaurants by city"
                - "Note preferred tables, timings and contacts at each favoured venue"
                - "Add feedback from the month's meals out to the reservation log @recurring(monthly:20)"
                - "Record standing reservations for birthdays and regular family dinners"
            - name: Quarterly lifestyle vendor performance review
              description: |-
                ## Purpose
                Vendors who were excellent two years ago can slip without anyone saying so, because each lapse seems too small to mention. A brief quarterly look at the vendors used most, using request outcomes and family feedback, keeps the good ones close and moves on from the ones who no longer deliver.

                ## Milestones
                1. The ten most-used vendors of the quarter identified from the log.
                2. Each rated on reliability, quality, discretion and value.
                3. Issues raised with any vendor rated below standard.
                4. Vendor list ratings updated after each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, the ten most-used vendors are rated on four criteria, and any vendor below standard has a recorded conversation or replacement."
                cadence: cyclic
              tasks:
                - "Pull the quarter's ten most-used vendors from the request log"
                - "Rate each vendor on reliability, quality, discretion and value @recurring(quarterly)"
                - "Raise problems with any vendor rated below standard"
                - "Update the vendor list with the new ratings"
            - name: Memberships, clubs and subscriptions renewals
              description: |-
                ## Purpose
                Private clubs, airport lounge programmes, theatre memberships and concierge subscriptions renew automatically or lapse quietly, and a lapsed club membership can take years to regain. A list of every lifestyle membership with its renewal date, cost and main user lets the family keep what it uses and drop what it does not.

                ## Milestones
                1. Every lifestyle membership and subscription listed with cost, renewal date and main user.
                2. Memberships with waiting lists or joining fees flagged as not to be lapsed by accident.
                3. Unused memberships put to the principal for cancellation.
                4. Renewal dates checked each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A membership list shows renewal dates and users for every lifestyle membership, and no membership has lapsed or renewed unnoticed in the last year."
                cadence: rolling
              tasks:
                - "List every club, lounge, theatre and concierge membership with its renewal date"
                - "Flag memberships with waiting lists or joining fees"
                - "Check renewals due in the next sixty days and confirm keep or cancel @recurring(monthly:12)"
                - "Put unused memberships to the principal for a keep or cancel decision"
            - name: Passport and visa expiry watch
              description: |-
                ## Purpose
                Passport renewal times vary by country and season, and children's passports often expire sooner than adults'. A quarterly check of the document register, starting renewals well ahead of any planned trip, stops a single document from grounding the whole family.

                ## Milestones
                1. A renewal trigger agreed, such as nine months before expiry.
                2. Documents nearing the trigger flagged at each quarterly check.
                3. Renewals started with the right authority and tracked to completion.
                4. Planned trips checked against document validity before booking.

                ## Notes
                Each family member, or a parent for a child, handles their own application with the issuing authority. The office tracks dates and appointments.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No family member's passport or visa has expired unnoticed, and every document within the renewal trigger has a renewal in progress."
                cadence: rolling
              tasks:
                - "Agree a renewal trigger in months before expiry for passports and visas"
                - "Check the document register for anything near the trigger @recurring(quarterly)"
                - "Remind each family member or parent to start their renewal"
                - "Check document validity for each planned trip before booking flights"
            - name: Feedback after every trip and event
              description: |-
                ## Purpose
                Most families tell the concierge what went wrong only when it goes badly wrong, so small irritations repeat for years. Asking two or three questions after each trip or event, and feeding the answers into profiles and vendor ratings, is how service gets steadily better instead of staying the same.

                ## Milestones
                1. Three standard feedback questions agreed for trips and events.
                2. Feedback collected within a week of each trip or event.
                3. Lessons added to the relevant profiles and vendor ratings.
                4. A monthly note of themes shared with the request handlers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feedback is recorded for at least four out of five trips and events within a week, and themes are reviewed every month."
                cadence: rolling
              tasks:
                - "Write three short feedback questions for trips and events"
                - "Send the questions to the traveller or host within a week of return"
                - "Review the month's feedback and update profiles and vendors @recurring(monthly:26)"
                - "Share the monthly feedback themes with the request handlers"
            - name: Corporate and charity event invitations handling
              description: |-
                ## Purpose
                Gala dinners, charity auctions and corporate hospitality invitations arrive by the dozen, and a missed reply or an accepted invitation nobody attends damages relationships. Logging each invitation, getting a quick yes or no from the principal and handling replies, tables and donations keeps the family's social diary in good order.

                ## Milestones
                1. One place where all invitations are logged with date, host and reply deadline.
                2. A weekly decision slot with the principal for pending invitations.
                3. Replies, table bookings and dress codes handled for accepted events.
                4. Any expected donation or auction spend flagged before acceptance.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every invitation received in the last quarter was answered before its reply deadline and logged with its outcome."
                cadence: rolling
              tasks:
                - "Start an invitation log with host, date and reply deadline"
                - "Bring pending invitations to the principal for a yes or no @recurring(weekly:thu)"
                - "Send replies and arrange tables and dress for accepted events"
                - "Flag any expected donation or auction spend before accepting"
            - name: Writing a clear concierge brief
              description: |-
                ## Purpose
                Vague requests such as find somewhere nice for the weekend produce three rounds of options and a frustrated principal. Learning to write a brief with the date, people, budget, purpose, must-haves and deal-breakers in five lines cuts the back and forth and is a skill every family member and assistant can pick up quickly.

                ## Milestones
                1. A five-line brief format with worked examples for travel, dining and gifts.
                2. Three recent vague requests rewritten in the format as practice.
                3. The format shared with family members and assistants.
                4. Rounds of options per request reduced, measured over a month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-line brief format with three worked examples is in use, and the average number of option rounds per request has fallen over a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Draft a five-line brief format covering date, people, budget, purpose and limits"
                - "Rewrite three recent vague requests in the new format"
                - "Share the format and examples with family members and assistants"
                - "Count option rounds per request for a month after the change"
            - name: How concierge fees and commissions work
              description: |-
                ## Purpose
                Lifestyle services earn money in several ways: annual membership fees, hourly or per-request charges, booking fees and commissions or perks from hotels, venues and ticket sellers. Understanding these models tells you when a recommendation might be shaped by what the provider earns and what to ask for in writing.

                ## Milestones
                1. The main fee models in the concierge and travel industry written up in a page.
                2. Your current providers' fee and commission arrangements obtained in writing.
                3. Any perks or commissions the family should receive or be told about identified.
                4. Questions on fees added to the provider review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of fee models exists, and each current provider has confirmed its fees and commissions in writing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a page on membership, per-request, booking fee and commission models"
                - "Ask each current provider to confirm its fees and commissions in writing"
                - "Note perks such as upgrades or credits that should pass to the family"
                - "Add fee questions to the provider review checklist"
            - name: Reading hotel, villa and charter booking terms
              description: |-
                ## Purpose
                Villa rentals and large hotel blocks often carry deposits that become non-refundable months before arrival, and cancellation rules differ sharply between suppliers. Learning to read the key clauses, from deposit schedules to damage deposits and force majeure wording, prevents expensive surprises when plans change.

                ## Milestones
                1. A checklist of the clauses to read in every accommodation booking.
                2. Three recent bookings reviewed against the checklist.
                3. Deposit and cancellation deadlines added to the request log for open bookings.
                4. Contract questions above an agreed value referred to the family's lawyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A booking terms checklist is in use, and every open accommodation booking has its deposit and cancellation deadlines in the request log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the clauses to read in every hotel and villa booking"
                - "Review three recent booking contracts against the checklist"
                - "Add deposit and cancellation deadlines for open bookings to the log"
                - "Agree the booking value above which the lawyer reviews the contract"
            - name: Private chefs and in-home dining bookings
              description: |-
                ## Purpose
                Booking a private chef for a villa week or a dinner at home involves menus, kitchen access, staffing, food safety and dietary lists that a restaurant booking never does. Knowing what to agree in advance makes these evenings relaxed for the hosts rather than a source of last-minute calls.

                ## Milestones
                1. A checklist for chef bookings covering menu, numbers, diets, kitchen, staffing and clearing up.
                2. Two or three chefs or caterers in each regular location noted with references.
                3. The dietary record sent with every chef booking.
                4. One chef booking run using the checklist and reviewed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chef booking checklist exists, at least one chef per regular location is on the vendor list, and one booking has been run with it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a chef booking checklist with menu, diets, kitchen and staffing points"
                - "Ask for two references from each chef before adding them to the vendor list"
                - "Send the dietary record with the next chef booking"
                - "Review the evening with the host and note what to change"
            - name: Tickets for major events through safe channels
              description: |-
                ## Purpose
                Finals, premieres, festivals and sold-out concerts attract resale sites, invalid tickets and scams, and some venues cancel tickets bought outside their rules. Learning which channels are official, how hospitality packages work and what proof of purchase to keep means the family arrives with tickets that scan.

                ## Milestones
                1. The official and authorised resale channels noted for the events the family attends.
                2. Hospitality package terms understood: what is included and who the seller is.
                3. A rule that tickets are bought only through official or approved channels.
                4. Proof of purchase and transfer instructions stored for each booking.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule on approved ticket channels exists, and every event ticket bought in the last six months came through one of them."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the official ticket channels for the events the family attends most"
                - "Read the resale and transfer rules for the next event on the calendar"
                - "Write a rule that tickets come only from official or approved sellers"
                - "Store proof of purchase and transfer instructions with each booking"
            - name: Gift etiquette across cultures and settings
              description: |-
                ## Purpose
                Gifts that delight in one country can offend in another, and gifts to hosts, business contacts, teachers or officials each carry their own customs and limits. Learning the basics for the countries and circles the family moves in avoids embarrassment and, in some settings, compliance trouble.

                ## Milestones
                1. Gift customs noted for the countries the family visits or hosts guests from.
                2. Guidance on gifts to hosts, teachers, business contacts and staff written in a page.
                3. Settings where gifts are restricted, such as public officials, flagged for advice.
                4. The guidance added to the gift log for handlers to use.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page gift etiquette guide covers the family's main countries and settings, and restricted settings are marked for advice before any gift."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the countries and settings the family gives gifts in"
                - "Ask the agent to summarise gift customs for each listed country"
                - "Mark settings with legal or conduct limits on gifts for advice first"
                - "Add the etiquette page to the front of the gift log"
            - name: Medical and travel assistance contacts for each trip
              description: |-
                ## Purpose
                When someone falls ill abroad, the first hour is lost finding the right number. A short contacts sheet for each trip, listing the assistance line on the family's travel or medical cover, nearby hospitals, the local doctor or clinic the hotel recommends and the consulate, puts that hour back.

                ## Milestones
                1. The assistance phone numbers from each family member's cover gathered.
                2. A contacts sheet format with assistance line, hospital, clinic and consulate.
                3. A sheet prepared for every trip and included with the itinerary.
                4. Travellers with known conditions reminded to carry their own medical summary.

                ## Notes
                Which cover applies, and what it includes, is a question for the family's insurance broker. The office collects and passes on the contacts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every trip itinerary sent in the last six months included a contacts sheet with assistance line, nearest hospital and consulate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect the assistance phone numbers from each family member's cover"
                - "Build a one-page contacts sheet format for trips"
                - "Fill in the sheet for the next trip and attach it to the itinerary"
                - "Ask the broker which cover applies to each traveller on long trips"
            - name: Choosing a travel designer for complex trips
              description: |-
                ## Purpose
                General concierges can book a city weekend, but a three-generation safari, a polar voyage or a cultural tour with private access needs a specialist travel designer with suppliers on the ground. Comparing two or three specialists on one sample brief shows who understands the family before money is committed.

                ## Milestones
                1. A sample brief for a complex trip the family is considering.
                2. Two or three travel designers asked to respond to the same brief.
                3. Responses compared on ideas, local partners, fees and contingency plans.
                4. A preferred designer added to the vendor list with terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three travel designers have responded to the same brief, and the chosen one is recorded on the vendor list with fees and terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a sample brief for the next complex trip the family is considering"
                - "Ask two or three specialist travel designers to respond to it"
                - "Compare their ideas, local partners, fees and contingency plans"
                - "Add the chosen designer to the vendor list with agreed terms"
            - name: Dedicated payment method for concierge bookings
              description: |-
                ## Purpose
                When concierge bookings go on a principal's personal card, statements become hard to reconcile and a compromised card stops everything. A separate card or account for concierge spending, with limits matching the spending authority and named users, makes reconciliation simpler and contains the damage if a card is lost or misused.

                ## Milestones
                1. Current payment methods for concierge spending listed with users.
                2. Options compared: separate card, virtual cards per booking or provider billing.
                3. A dedicated method set up with limits that match the spending authority.
                4. Old payment arrangements closed or restricted.

                ## Notes
                The family's bank sets up the card and controls. Handlers never share full card details by email.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All concierge bookings in the last month were paid with the dedicated method, within limits that match the spending authority note."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every card and account currently used for concierge bookings"
                - "Ask the family's bank about separate or virtual cards with spending limits"
                - "Set limits on the new card that match the spending authority note"
                - "Restrict or close the old payment arrangements once bookings have moved"
            - name: Reducing last-minute and urgent requests
              description: |-
                ## Purpose
                Urgent requests cost more, fail more often and wear out handlers, yet many are predictable: the school holiday trip, the annual anniversary dinner, the summer villa. Looking at which urgent requests could have been seen coming, and moving them onto the calendar, cuts the urgent share without asking the family to change how they live.

                ## Milestones
                1. Requests from the last six months tagged as urgent or planned.
                2. Urgent requests that were foreseeable identified and listed.
                3. Foreseeable occasions added to the calendar with lead times.
                4. The urgent share compared again after three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The share of urgent requests is measured before and three months after foreseeable occasions are moved onto the calendar."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tag the last six months of requests as urgent or planned"
                - "List the urgent requests that could have been foreseen"
                - "Add those occasions to the key dates calendar with lead times"
                - "Measure the urgent share again after three months"
            - name: Moving the request log into shared software
              description: |-
                ## Purpose
                Spreadsheets work for a few requests a week, but once several assistants and a provider handle dozens, version clashes and missing updates creep in. Choosing a shared task or ticketing tool with access controls, mobile use and simple reporting keeps the log reliable as volume grows.

                ## Milestones
                1. Requirements written: users, access levels, mobile, attachments and reporting.
                2. Two or three tools tried with real requests for two weeks.
                3. A tool chosen and the open requests moved across.
                4. Handlers trained and the old spreadsheet archived.

                ## Notes
                Start from the **Purchase decision** template. Check with the office's systems lead before adding a new tool, so it fits the family's security rules.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All open concierge requests sit in one chosen tool with access controls, and the old spreadsheet is archived."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write requirements for users, access, mobile use and reporting"
                - "Trial two tools with real requests for two weeks"
                - "Agree the choice with the office's systems lead"
                - "Move open requests into the chosen tool and archive the spreadsheet"
            - name: Replacing an underperforming concierge provider
              description: |-
                ## Purpose
                Changing provider mid-year risks losing bookings in progress, deposits and the knowledge the old provider held. Planning the exit, from notice terms to the handover of live bookings and the return of family information, makes the switch quiet rather than chaotic.

                ## Milestones
                1. The performance problems written down with examples and dates.
                2. Notice terms and any fees in the current contract confirmed.
                3. Live bookings, deposits and supplier contacts handed over in a list.
                4. Family information returned or deleted by the old provider, in writing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The old provider has handed over every live booking and confirmed in writing that family information has been returned or deleted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the provider's performance problems with dated examples"
                - "Read the contract's notice period and termination fees"
                - "Get a list of live bookings, deposits and supplier contacts"
                - "Ask the provider to confirm in writing that family data is returned or deleted"
            - name: Packing and arrival checklists for each traveller
              description: |-
                ## Purpose
                Forgotten chargers, medicines and adaptors cause small crises on every family trip, and hotel rooms are often set up the wrong way for a returning guest. Standard packing and arrival checklists for each traveller, sent with the itinerary, settle both before departure.

                ## Milestones
                1. A packing checklist for each traveller, with extras for children and older travellers.
                2. An arrival checklist for hotels and villas: room set-up, groceries, transport.
                3. Both checklists attached to every itinerary.
                4. Checklists revised from trip feedback twice a year.

                ## Notes
                Start from the **Operational checklist** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Packing and arrival checklists exist for each traveller and were attached to the last three itineraries."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a packing checklist for each regular traveller"
                - "Write an arrival checklist for hotel and villa set-up"
                - "Attach both checklists to the next itinerary"
                - "Revise the checklists using the last six months of trip feedback"
            - name: Discreet bookings and use of booking names
              description: |-
                ## Purpose
                Some family members prefer that hotels, restaurants and venues do not broadcast their arrival, and staff at some providers share guest names more freely than the family would like. Agreeing when bookings are made under an assistant's or office name, and what venues are told, keeps routine outings low-key without becoming a security programme.

                ## Milestones
                1. Each family member's preference on booking names recorded in their profile.
                2. A standard note for venues on photography, guest lists and discretion.
                3. Rules for when a booking may use an office or assistant name.
                4. Booking confirmations checked for unnecessary personal details.

                ## Notes
                Bookings under another name must still meet the venue's and the law's identity rules, especially for flights and hotels. Wider privacy and security planning belongs to the family's specialists.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Booking-name preferences are recorded for each family member, and a standard discretion note goes with every high-profile booking."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each family member how they want bookings named"
                - "Write a short discretion note for venues and hotels"
                - "Agree when an office or assistant name may be used"
                - "Check recent confirmations for personal details the venue did not need"
            - name: Milestone birthday celebration planning
              description: |-
                ## Purpose
                Seventieth and eightieth birthdays, or a child's coming of age, are often planned in a rush and remembered for the wrong reasons. Starting four to six months out, with a guest list, venue, budget, travel for guests and a run sheet for the day, lets the guest of honour enjoy it rather than manage it.

                ## Milestones
                1. Guest of honour's wishes, guest list and budget agreed.
                2. Venue, date and key suppliers booked with deposits recorded.
                3. Travel and accommodation arranged for guests the family is hosting.
                4. A run sheet for the day shared with suppliers and the family.
                5. Thank-you notes and supplier payments closed within two weeks after.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The celebration takes place to an agreed run sheet and budget, with supplier invoices settled and thank-you notes sent within two weeks."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Ask the guest of honour what they want and who must be there"
                - "Agree the budget and the date with the principal"
                - "Book the venue and key suppliers and record each deposit"
                - "Write a run sheet for the day and send it to every supplier"
                - "Send thank-you notes and settle supplier invoices after the event"
            - name: Multi-branch family reunion trip
              description: |-
                ## Purpose
                Bringing three generations and several branches together at one destination means different budgets, school calendars, mobility needs and opinions about who pays. Planning early, with a clear cost-sharing rule and one coordinator, turns a potential source of tension into a trip people want to repeat.

                ## Milestones
                1. Dates chosen that work around school terms and the oldest travellers.
                2. A cost-sharing rule agreed and communicated to every branch.
                3. Accommodation and group activities booked, with options for different ages.
                4. One itinerary and contact sheet sent to every household.
                5. Feedback gathered and costs settled between branches.

                ## Notes
                Start from the **Trip** template. Agree who pays for what in writing before anything is booked.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The reunion runs to one shared itinerary, and costs are settled between branches according to the agreed rule within a month of return."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Survey each branch for dates, numbers and mobility needs"
                - "Agree a written cost-sharing rule with the principal and branch heads"
                - "Book accommodation and activities for each age group"
                - "Send one itinerary and contact sheet to every household"
                - "Settle shared costs between branches after the trip"
            - name: Guest logistics for a family wedding
              description: |-
                ## Purpose
                The wedding planner handles the day, but guests flying in from several countries need hotel blocks, transfers, welcome packs and someone to answer their questions. Running guest logistics as its own workstream, separate from the planner, means elderly relatives and overseas guests arrive calm and on time.

                ## Milestones
                1. A guest travel list with arrival and departure details for every travelling guest.
                2. Hotel room blocks held with release dates recorded.
                3. Airport transfers and event transport scheduled.
                4. Welcome packs and a guest help contact ready a week before.
                5. Room block releases and transport bills reconciled afterwards.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every travelling guest has confirmed accommodation and transfers a week before the wedding, and block and transport bills are reconciled afterwards."
                cadence: one-shot
                effort_hours_estimate: "35"
              tasks:
                - "Build a guest travel list with home city and arrival plans"
                - "Hold hotel room blocks and note each release date in the log"
                - "Schedule airport transfers and transport between venues"
                - "Prepare welcome packs with the schedule and a guest help number"
                - "Reconcile room blocks and transport invoices after the wedding"
            - name: Year-end holiday travel booked early
              description: |-
                ## Purpose
                Flights, villas and restaurants for Christmas, New Year and other peak holidays sell out months ahead, and the best properties are often rebooked by the same families each year. Confirming the family's year-end plans by midsummer and booking early secures the places they actually want.

                ## Milestones
                1. Each household's year-end plans confirmed by an agreed date.
                2. Flights and accommodation booked or held.
                3. Key restaurant and event reservations for the holiday period made.
                4. Plans and confirmations shared in one holiday itinerary.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Year-end travel, accommodation and key reservations are confirmed for every household at least four months before the holiday."
                cadence: cyclic
              tasks:
                - "Ask each household for their year-end holiday plans @recurring(yearly)"
                - "Book or hold flights and accommodation for the holiday period"
                - "Reserve the key restaurants and events for the holiday"
                - "Send one holiday itinerary to every household"
            - name: Carnival season trip and fete bookings
              description: |-
                ## Purpose
                Carnival in Trinidad, and the festivals in Barbados, Jamaica and elsewhere in the region, fill flights, hotels and costume bands months ahead. Planning the family's visit early, from flights and a band registration to fete tickets (a fete is a large party, often all-inclusive), keeps the season joyful rather than stressful.

                ## Milestones
                1. Dates confirmed for the festival the family is attending.
                2. Flights and accommodation booked as soon as the dates are set.
                3. Costume band registrations and fete tickets bought through official sellers.
                4. Transport between events and a daily plan shared with the group.

                ## Notes
                Fete and band tickets are frequently counterfeit on informal resale. Buy from the promoter or band directly.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Flights, accommodation, band registrations and fete tickets are confirmed through official sellers for every family member attending."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the festival dates and who in the family is going"
                - "Book flights and accommodation as soon as dates are set"
                - "Register with the chosen costume band through its official channel"
                - "Buy fete tickets directly from promoters and arrange daily transport"
            - name: Hosting visiting guests on the family's behalf
              description: |-
                ## Purpose
                Visiting friends, business partners or godchildren from abroad judge the family by the welcome they receive. A hosting plan covering arrival, accommodation, a few chosen experiences, a contact person and a departure gift makes a visit memorable without the principal managing every detail.

                ## Milestones
                1. Visit dates, guests and the principal's wishes for the visit recorded.
                2. Arrival, transport and accommodation confirmed.
                3. Two or three experiences booked to suit the guests.
                4. A contact person available throughout and a thank-you or departure gift arranged.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Each hosted visit has a written plan, a named contact for the guests and a departure gift recorded in the gift log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the principal what the visit should feel like and what it is for"
                - "Confirm the guests' arrival, transport and accommodation"
                - "Book two or three experiences that suit the guests"
                - "Arrange a departure gift and record it in the gift log"
            - name: Concierge support for an ageing parent
              description: |-
                ## Purpose
                An older parent may still love to travel and dine out but now needs step-free rooms, wheelchair assistance, slower itineraries and a companion on longer trips. Adapting the concierge service around them, with the parent deciding and adult children informed, keeps their independence and the pleasures they value.

                ## Milestones
                1. The parent's own wishes for travel and outings recorded in their words.
                2. Access and assistance needs added to their profile and dietary record.
                3. Standard extras agreed: airport assistance, step-free rooms, travel companion.
                4. A monthly check of upcoming bookings and appointments with the parent.
                5. Adult children told who to contact, with the parent's agreement.

                ## Notes
                Medical travel decisions are for the parent and their doctor. The office books and coordinates.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The ageing parent's profile includes their access needs, and every booking in the last three months included the agreed assistance."
                cadence: rolling
              tasks:
                - "Ask the parent how they want to travel and go out in the coming year"
                - "Add access and assistance needs to their profile"
                - "Request airport assistance and step-free rooms as standard for them"
                - "Check the parent's bookings and outings for the month ahead with them @recurring(monthly:15)"
            - name: School holiday activities and camps for children
              description: |-
                ## Purpose
                Camps, courses and holiday programmes for children open bookings early and fill quickly, and juggling several children across two homes makes it worse. Planning each school holiday a term ahead, with the parents choosing and the office booking, ends the scramble for places.

                ## Milestones
                1. School term dates for every child gathered in one calendar.
                2. Parents' choices of camps and activities for the next holiday recorded.
                3. Places booked, forms and medical consents completed by the parents.
                4. Transport, packing lists and contacts sent before each camp.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every child has confirmed holiday activities booked at least four weeks before each school holiday, with forms completed by the parents."
                cadence: rolling
              tasks:
                - "Collect school term dates for every child into one calendar"
                - "Ask the parents to choose camps and activities for the next holiday"
                - "Book places for the next school holiday and send forms to the parents @recurring(quarterly)"
                - "Send transport details and packing lists before each camp starts"
            - name: Student travel and university moves for young adults
              description: |-
                ## Purpose
                Young adults starting university abroad need flights, a move-in plan, a bank and phone set up and a way to get home at short notice, and parents need to know they are settled. Planning the first year's travel and the move itself, with the student leading, builds their independence and gives parents reassurance.

                ## Milestones
                1. Move-in date, accommodation and what to ship agreed with the student.
                2. Flights for the first year's term breaks booked or planned.
                3. An emergency travel home arrangement agreed with the parents.
                4. The student added to the request channel for their own requests.

                ## Notes
                Let the student make their own bookings where they can, with the office as backup. It is part of learning to run their own life.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The student's move-in, first-year term travel and an emergency route home are confirmed and written down for student and parents."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree the move-in date and what to ship with the student"
                - "Plan flights for each term break in the first year"
                - "Agree an emergency travel home arrangement with the parents"
                - "Show the student how to use the request channel for their own bookings"
            - name: Extended winter stay for retired family members
              description: |-
                ## Purpose
                Retired members of the family often spend two or three months somewhere warmer, which needs long-stay accommodation, prescriptions and post handled, a car, and local contacts. Planning the stay each year with them, early enough to secure the same villa or apartment, makes the season restful.

                ## Milestones
                1. Dates, destination and accommodation preferences agreed with the retirees.
                2. Long-stay accommodation and transport booked.
                3. Post, prescriptions and home checks arranged for the time away.
                4. Local contacts, doctors and favourite restaurants listed for the stay.

                ## Notes
                Long stays abroad can affect tax residency and insurance. Ask the family's advisers whether the planned length raises any question.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The winter stay is booked at least three months ahead, with post, prescriptions and local contacts arranged and written down."
                cadence: cyclic
              tasks:
                - "Ask the retirees about dates and destination for next winter @recurring(yearly)"
                - "Book long-stay accommodation and a car for the season"
                - "Arrange post forwarding and prescription supplies with them"
                - "List local contacts, clinics and favourite restaurants for the stay"
            - name: Travel logistics for medical appointments abroad
              description: |-
                ## Purpose
                Seeing a specialist in another country is a clinical matter for the patient and their doctors, but flights, accommodation near the clinic, a companion and transport to appointments still need arranging. Handling the logistics quietly lets the patient focus on their health.

                ## Milestones
                1. Appointment dates and location confirmed by the patient or their clinic.
                2. Flights, accommodation near the clinic and ground transport booked.
                3. A companion's travel arranged if the patient wants one.
                4. Flexible bookings chosen so dates can move with treatment.

                ## Notes
                Keep medical details to what the booking needs. Records and decisions stay between the patient and their doctors.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Flights, accommodation near the clinic and transport are booked on flexible terms for every confirmed appointment abroad."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Confirm appointment dates and the clinic address with the patient"
                - "Book flexible flights and accommodation near the clinic"
                - "Arrange a companion's travel if the patient wants one"
                - "Book transport between the accommodation and each appointment"
            - name: Practical support during a bereavement or illness
              description: |-
                ## Purpose
                After a death or a serious diagnosis, the family faces a wave of practical tasks: relatives' travel to a funeral or a nine night (a Caribbean wake held over several nights), catering, flowers, accommodation and cancelling bookings. Having the concierge take these on, with one family contact giving direction, protects the family when they have least capacity.

                ## Milestones
                1. One family contact named to give direction to the concierge team.
                2. Relatives' travel and accommodation for the funeral or gathering arranged.
                3. Catering, flowers and venue needs handled to the family's wishes.
                4. Existing bookings and memberships for the person paused or cancelled.
                5. A list of condolence messages and flowers kept for thank-you notes.

                ## Notes
                Estate, legal and financial matters go to the family's lawyer and advisers. This project covers logistics only.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Travel, catering and bookings for the bereavement or illness are handled through one family contact, with a condolence list kept for thank-you notes."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree with the family who will give direction to the concierge team"
                - "Arrange travel and accommodation for relatives coming to the gathering"
                - "Book catering and flowers to the family's wishes"
                - "Pause or cancel the person's existing bookings and memberships"
                - "Keep a list of condolence messages and flowers received"
            - name: Multi-country itinerary with complex logistics
              description: |-
                ## Purpose
                Spending a month across four countries with internal flights, private guides, a boat transfer and children of different ages is where small errors multiply. Building the itinerary with buffers, a supplier contact for every leg, documents checked for every border and a fallback for the weakest link is the advanced version of trip planning.

                ## Milestones
                1. Every leg mapped with times, supplier, confirmation and local contact.
                2. Entry rules and visas checked for every border crossed.
                3. Buffer time and a fallback added to each tight connection.
                4. A full itinerary pack with contacts sheet sent two weeks before departure.

                ## Notes
                Start from the **Trip** template. The weakest leg is usually a small local transfer; confirm it twice.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every leg of the itinerary has a named supplier, confirmation and fallback, and entry rules for every border are checked and recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map every leg with times, supplier and confirmation number"
                - "Check entry rules and visas for each border on the route"
                - "Add buffer time and a fallback for each tight connection"
                - "Send the full itinerary pack two weeks before departure"
            - name: Concierge service levels and monthly report
              description: |-
                ## Purpose
                Without agreed service levels, every judgement about the concierge is a matter of mood. A few measures, such as response time, requests completed on time, cost against budget and family satisfaction, reported monthly, give the principal and the provider the same facts to discuss.

                ## Milestones
                1. Four or five service measures agreed with the provider and the principal.
                2. Targets set for each measure.
                3. A one-page monthly report produced from the request log.
                4. Measures below target discussed with the provider within the month.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly one-page service report shows four or five agreed measures against targets, and shortfalls are discussed with the provider."
                cadence: rolling
              tasks:
                - "Agree four or five service measures with the provider and principal"
                - "Set a target for each measure"
                - "Produce the monthly service report from the request log @recurring(monthly:28)"
                - "Discuss any measure below target with the provider"
            - name: Annual concierge review with the principal
              description: |-
                ## Purpose
                Once a year, it is worth asking whether the concierge arrangement still fits: whether the family's life has changed, whether costs are justified and which requests still frustrate. A structured review with the principal, using a year of logs, spending and feedback, sets the scope and budget for the next year.

                ## Milestones
                1. A year of request volumes, spending and service measures summarised.
                2. Feedback themes and the main frustrations listed.
                3. Scope, provider and budget for the coming year agreed with the principal.
                4. Changes recorded and communicated to handlers and the family.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review meeting with the principal records decisions on scope, provider and budget for the coming year."
                cadence: cyclic
              tasks:
                - "Ask the agent to summarise the year's request volumes, spend and feedback"
                - "List the three biggest frustrations from the family's feedback"
                - "Hold the annual concierge review with the principal @recurring(yearly)"
                - "Send the agreed changes to handlers and family members"
            - name: Anticipating needs from the request history
              description: |-
                ## Purpose
                After a year or two, the request log shows patterns: the same restaurant every March, a trip planned late every summer, gifts for the same godchildren. Studying the history each quarter lets the concierge suggest bookings before they are asked for, which is the difference between a good service and an exceptional one.

                ## Milestones
                1. Requests of the last year grouped by person, type and month.
                2. Repeating patterns and seasonal peaks identified.
                3. Proactive suggestions prepared for the coming quarter.
                4. The share of proactive suggestions accepted tracked.

                ## Notes
                Suggest, do not book. The family should always be the one to say yes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each quarter, a list of proactive suggestions drawn from the request history is offered to the family, and the share accepted is recorded."
                cadence: rolling
              tasks:
                - "Group last year's requests by person, type and month"
                - "Mark repeating requests and seasonal peaks"
                - "Prepare proactive suggestions for the coming quarter from the history @recurring(quarterly)"
                - "Record which suggestions the family accepted"
---

# Concierge and Lifestyle Management

This area is for the family whose travel, restaurant bookings, gifts, tickets and celebrations now pass through assistants, a lifestyle management service or the family office, and who want every request handled once, well and to their taste. It starts with foundations (what concierge support covers, preference profiles, one intake channel, the choice of provider, approved vendors, spending rules, travel documents and dietary records), moves into the operating routines of request reviews, spend reconciliation, gifting, trip planning, reservations and renewals, then the skills of briefing a concierge and reading booking terms, decisions about providers, cards and software, dated events from milestone birthdays to Carnival, situations for parents, retirees and ageing parents, and specialist work on service levels and anticipating needs.

What repeats is a weekly review of open requests, monthly spend reconciliation, gift-date checks, reservation log updates and membership renewals, quarterly vendor reviews, passport checks and preference refreshes, and a yearly round of holiday bookings, key-date updates and a concierge review with the principal. The Purchase decision, Vendor, Trip, Operational checklist and Metrics log templates pair with choosing a provider, the vendor list, itineraries, packing and arrival lists and service reporting. Household staff, residences, aircraft and personal security have their own areas; this one keeps to requests, bookings and the people who fulfil them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
