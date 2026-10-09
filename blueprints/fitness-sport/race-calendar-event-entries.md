---
id: fitness-sport.race-calendar-event-entries
name: Race Calendar & Event Entries
description: "A season of races planned on purpose: an A race chosen first, priorities for every start, entry windows and ballots caught in time, fees and travel tracked, and a yearly review that shapes the next calendar."
category: personal
version: 1.0.0
tags: [fitness-sport, race-calendar-event-entries, athlete, race-calendar, event-entries, ballots, season-planning, race-travel]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - operational-checklist
    - metrics-log
    - purchase-decision
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Race Calendar & Event Entries
          description: "Planning a season of races and sporting events, managing entries, travel and priorities so training builds toward the events that matter most."
          projects:
            - name: Choosing the A race for the coming season
              description: |-
                ## Purpose
                Every other date in a season hangs off the one race you most want to go well. Picking it first, with its date, distance and entry route confirmed, tells you when to build, when to rest and which other events are worth entering at all.

                ## Milestones
                1. Three candidate A races compared on date, distance, course, entry route and cost.
                2. One A race chosen and entered, or its ballot or entry opening date in the calendar.
                3. A one-line reason for the choice written beside it, such as a time goal or a first finish.
                4. A backup A race four to eight weeks later identified in case entry fails.

                ## Notes
                Choose the race before the goal time. A fast course in the wrong month for your work or family life rarely produces the result it promises.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One A race entered or its entry date confirmed, with a written reason and a named backup race."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the one race result you would most like from the next twelve months"
                - "List three events that could deliver it, with dates and entry routes"
                - "Compare the three on course, cost, travel and timing against your year"
                - "Enter the chosen A race or diary its entry opening date"
                - "Name a backup race four to eight weeks later"
            - name: One season calendar holding every candidate event
              description: |-
                ## Purpose
                Race ideas live in club chats, newsletters, browser tabs and half-remembered conversations, which is how two good events end up on the same weekend. Gathering every candidate into one calendar, entered or not, shows the shape of the season at a glance and the clashes before they cost an entry fee.

                ## Milestones
                1. One calendar or spreadsheet chosen as the single home for race dates.
                2. Every race already entered added with distance, location and entry status.
                3. Candidate races marked as possible, with their entry opening dates.
                4. Clashes and back-to-back weekends highlighted.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single calendar lists every entered and candidate race for the next twelve months with status and opening dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose where the season calendar will live and create it"
                - "Search your inbox for confirmation emails and add every entered race"
                - "Add candidate races from club fixtures and event newsletters as possible"
                - "Colour clashes and back-to-back weekends so they stand out"
            - name: A, B and C priority for every race on the list
              description: |-
                ## Purpose
                Treating every race as important means tapering for all of them and peaking for none. Labelling each start as an A race to peak for, a B race to race hard without a full taper, or a C race run as training gives the season a clear hierarchy and protects the events that matter.

                ## Milestones
                1. One or two A races marked, no more.
                2. Each B race placed at least three weeks from an A race, or moved.
                3. Every remaining race labelled C with its training purpose noted, such as pace practice or a kit test.
                4. The priority label visible on every entry in the season calendar.

                ## Notes
                Two A races per year is a common ceiling for long events like a marathon or a full-distance triathlon. Shorter events allow more, but agree it with your coach if you have one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every race in the season calendar carries an A, B or C label, with no more than two A races."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark your A race and at most one other as A in the calendar"
                - "Label the races you want to race hard but not taper for as B"
                - "Write the training purpose beside each C race"
                - "Move or drop any B race within three weeks of an A race"
            - name: Annual race budget for entries, travel and kit
              description: |-
                ## Purpose
                Entry fees have crept up, and a destination race can cost four or five times its entry once travel, two nights away and food are added. A yearly race budget, split by event and set aside monthly, turns a vague worry into a number you can plan entries around.

                ## Milestones
                1. Total spend on races in the last twelve months worked out from bank records.
                2. A budget line for each planned race covering entry, travel, accommodation and extras.
                3. A yearly race total agreed with anyone you share finances with.
                4. A monthly amount set aside in a separate pot.

                ## Notes
                Start from the **Savings goal** template. Include the small items people forget: licence fees, timing chip hire, parking, photos and the post-race meal.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written yearly race budget with a cost line per planned race and a monthly amount being set aside."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up last year's race spending from bank and card statements"
                - "Cost each planned race for entry, travel, beds and extras"
                - "Agree the yearly total with anyone you share money with"
                - "Move the monthly race fund amount into its own pot @recurring(monthly:12)"
            - name: Entry opening and ballot deadline tracker
              description: |-
                ## Purpose
                Popular races open entries months ahead and some sell out within hours, while ballots close on a fixed date with no late door. A tracker with the opening date, closing date, price rises and ballot result date for every target race means you are never reading about a sell-out after it happened.

                ## Milestones
                1. Every A and B race listed with entry opening date, close date and any early-bird cut-off.
                2. Ballot entry windows and result dates recorded where they apply.
                3. A reminder set a few days before each opening date.
                4. The tracker linked from the season calendar.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker lists opening, closing and ballot result dates for every A and B race, each with a reminder set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the entry opening and closing dates for each A and B race"
                - "Note early-bird price deadlines and ballot result dates"
                - "Set a calendar reminder three days before each entry opens"
                - "Sign up to each target event's mailing list for entry news"
            - name: Minimum gaps between races by distance
              description: |-
                ## Purpose
                Racing again before the last effort has been absorbed is the most common way a promising season goes flat. Writing your own minimum gaps, for example the weeks you leave after a half marathon or an Olympic-distance triathlon before the next hard race, makes the calendar check itself.

                ## Milestones
                1. A table of minimum gaps after each race distance you do.
                2. The table checked against the gaps in your current calendar.
                3. Any race that breaks a gap either moved, downgraded to C or dropped.
                4. Gaps reviewed with your coach or a more experienced club member, if available.

                ## Notes
                A rough rule many endurance coaches use is about one easy day for every mile or two kilometres raced before the next hard effort. Treat it as a starting point, not a prescription.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written gap table exists and no race in the calendar breaks it without a recorded reason."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the race distances you do down one side of a table"
                - "Set a minimum gap before the next hard race for each distance"
                - "Check every pair of races in the calendar against the table"
                - "Downgrade or drop any race that breaks a gap"
            - name: Clearing race dates with household and work
              description: |-
                ## Purpose
                Paying for a race quietly commits other people too: a partner doing solo childcare, a colleague covering a shift, a family birthday missed. Checking A and B race dates with the household and against work commitments before paying the fee avoids the late withdrawal and the resentment.

                ## Milestones
                1. A and B race dates shared with everyone they affect.
                2. Family events, school holidays and work peaks set against the race calendar.
                3. Annual leave requested for any race needing travel days.
                4. Agreed race weekends written into the shared household calendar.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every A and B race date is agreed with the household and in the shared calendar, with leave requested where needed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Share the A and B race dates with your household"
                - "Check them against school holidays, family events and work peaks"
                - "Request annual leave for race travel days"
                - "Add agreed race weekends to the shared household calendar"
                - "Share the next quarter's race dates with the household again @recurring(quarterly)"
            - name: Race documents folder for licences and certificates
              description: |-
                ## Purpose
                Entry forms for races ask for a federation licence number, a club affiliation, an emergency contact and sometimes a signed medical certificate, as some countries such as France require for running races. Keeping all of it in one folder, with expiry dates, saves the scramble when an entry form times out halfway through.

                ## Milestones
                1. Licence or membership numbers for each sport's governing body and your club recorded.
                2. Expiry dates noted beside each one.
                3. Any certificate an overseas race requires identified and its validity window noted.
                4. Emergency contact details agreed with the person named.

                ## Notes
                Store document numbers, not passwords. Keep account passwords in a password manager, never in the race folder.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds every licence and membership number with expiry dates, and the emergency contact has agreed to be named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a race documents folder in your notes or file store"
                - "Record each licence and club membership number with its expiry date"
                - "Check whether any race abroad needs a medical certificate and by when"
                - "Ask your emergency contact to confirm they are happy to be named"
            - name: Entry profile ready for races that sell out fast
              description: |-
                ## Purpose
                When a race opens at 9am and sells 20,000 places in an hour, the people who get in are the ones not typing their club number and predicted time from scratch. Having every answer an entry form asks for ready to paste, and the event account set up in advance, turns a stressful scramble into a three-minute job.

                ## Milestones
                1. A single note with the answers entry forms usually ask for: club, licence, predicted time, T-shirt size, emergency contact.
                2. Accounts created in advance on the entry platforms your target races use.
                3. A recent race result ready as proof of predicted finish time.
                4. Payment method checked as valid before the next opening.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An entry profile note exists and accounts are set up on each entry platform your A and B races use."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a note with the answers race entry forms usually ask for"
                - "Create accounts on the entry platforms your target races use"
                - "Add your most recent official result as proof of predicted time"
                - "Check the card you will pay with has not expired"
            - name: Monthly race calendar review
              description: |-
                ## Purpose
                Calendars drift: a race changes date, an injury moves a goal, a friend suggests a new event. Fifteen minutes each month to check the next three months against your priorities and gaps keeps the season deliberate rather than accidental.

                ## Milestones
                1. The next three months checked for date changes, clashes and gap breaches.
                2. Each upcoming race confirmed as still entered, still the right priority and still affordable.
                3. Past races moved to the results archive.
                4. Any decision to add, drop or downgrade a race written down with the reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reviews completed in a year, each leaving the next three months confirmed in the calendar."
                cadence: rolling
              tasks:
                - "Check the next three months of races for date changes and clashes @recurring(monthly:3)"
                - "Confirm the priority and entry status of each upcoming race"
                - "Move races that have happened to the results archive"
                - "Note the reason for any race you add, drop or downgrade"
            - name: Weekly entry window check
              description: |-
                ## Purpose
                Entry windows, price rises, transfer deadlines and ballot results all land on different days, often in emails that sink under work mail. A short Monday check of the tracker and race inbox catches what opens or closes in the next fortnight while there is still time to act.

                ## Milestones
                1. A filter or label set up so race emails collect in one place.
                2. A Monday check of the tracker for anything opening or closing in fourteen days.
                3. Each action found entered in the calendar with a reminder.
                4. No entry, ballot or transfer deadline missed across a full season.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No entry window, price deadline or transfer deadline missed across one full season of weekly checks."
                cadence: rolling
              tasks:
                - "Set up an email label that catches messages from race organisers"
                - "Scan the tracker for windows opening or closing in the next fortnight @recurring(weekly:mon)"
                - "Put each action found into the calendar with a reminder"
                - "Clear the race email label once each item is handled"
            - name: Race fee, refund and transfer ledger
              description: |-
                ## Purpose
                Money spent on racing leaks quietly: a deferral fee paid and forgotten, a transfer never claimed, a refund promised after a cancelled event that never arrived. A simple ledger of every fee paid and every refund or credit owed makes sure the money comes back and shows what racing really costs you.

                ## Milestones
                1. Every race payment this season listed with date, amount and what it covered.
                2. Refunds, credits and deferred places owed listed with their expiry dates.
                3. Each outstanding refund chased until paid or written off.
                4. Actual spend compared with the race budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger records every race payment and credit for the season, with no refund outstanding for more than sixty days unchased."
                cadence: rolling
              tasks:
                - "List this season's race payments from your statements"
                - "Add any credits, deferred places or refunds you are owed"
                - "Chase any refund or credit older than thirty days"
                - "Log new race payments and compare spend with the budget @recurring(monthly:20)"
            - name: Pre-race fortnight logistics checklist
              description: |-
                ## Purpose
                Most race-day stress comes from things that were never about fitness: a missed packet collection window, a forgotten licence, no plan for parking or the start pen. A standard checklist worked through in the fortnight before every A and B race means each start begins calm and on time.

                ## Milestones
                1. A reusable checklist covering race pack collection, start time, wave, travel, parking, bag drop and kit.
                2. The checklist completed for the next A or B race.
                3. Race instructions read in full and the key times copied onto one page.
                4. The checklist updated with anything missed after the race.

                ## Notes
                Start from the **Operational checklist** template. Fuelling and pacing plans belong with your training; this list is about getting to the line with the right things.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A pre-race checklist exists and has been completed before at least two races, with fixes added after each."
                cadence: rolling
              tasks:
                - "Create the checklist from the operational checklist template"
                - "Copy race pack collection, wave start and bag drop times onto one page"
                - "Plan the route, transport and parking for race morning"
                - "Add anything that went wrong to the checklist after the race"
            - name: Post-race debrief within 48 hours
              description: |-
                ## Purpose
                Two days after a race the details are still sharp: the slow transition, the queue at the toilets, the hill you went too hard on, whether the travel worked. A short written debrief turns each race into evidence for choosing and preparing for the next one, and stops the same mistake costing you twice.

                ## Milestones
                1. A debrief template with result, conditions, what went well, what went wrong and would you return.
                2. A debrief written within 48 hours of each race.
                3. One change carried into the next race's checklist or calendar.
                4. A short verdict recorded on whether the event deserves a place next season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every race in the season has a written debrief completed within 48 hours, each with one change carried forward."
                cadence: rolling
              tasks:
                - "Write a short debrief template with five headings"
                - "Fill it in within two days of your next race"
                - "Carry one lesson into the next race checklist"
                - "Mark the event as return, maybe or never in the race list"
            - name: Results and personal bests archive
              description: |-
                ## Purpose
                Official results pages disappear, timing companies change platforms and old watch files get lost with a phone. A personal archive of every race result, chip time, position and conditions builds the record you need for predicted times, start pens, qualifying entries and an honest view of progress across years.

                ## Milestones
                1. Every race from the last two years entered with date, distance, chip time, position and conditions.
                2. Personal bests marked for each distance and course type.
                3. Links or screenshots saved of the official results.
                4. The archive updated within a month of each new race.

                ## Notes
                Start from the **Metrics log** template. Record chip time and gun time separately, as some qualifying systems use one and some the other.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An archive holds at least two years of official race results with personal bests marked and links or screenshots saved."
                cadence: rolling
              tasks:
                - "Create the results archive from the metrics log template"
                - "Find and enter your race results from the last two years"
                - "Mark personal bests for each distance and course type"
                - "Copy new official results and splits into the archive @recurring(monthly:28)"
            - name: Quarterly season re-plan
              description: |-
                ## Purpose
                Three months is long enough for form, work and life to change what a sensible season looks like. A quarterly sit-down to re-rank races, add new opportunities and drop what no longer fits stops an out-of-date plan from deciding your racing for you.

                ## Milestones
                1. Progress towards the A race checked against what the plan assumed.
                2. Race priorities re-ranked for the next two quarters.
                3. New races added or dropped with the reason noted.
                4. Budget, travel and household agreement updated for any change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly re-plans recorded in a year, each with updated priorities and reasons for any change."
                cadence: cyclic
              tasks:
                - "Re-rank the next six months of races against current form @recurring(quarterly)"
                - "Check whether the A race is still the right goal"
                - "Add or drop races and record why"
                - "Update budget and household calendar for any change"
            - name: Race bag kit list and restock
              description: |-
                ## Purpose
                Safety pins, a spare timing chip strap, cable ties for a bike number, anti-chafe balm and a foil blanket are cheap to keep and maddening to lack at 7am in a car park. A standing race bag with a printed kit list, restocked after each event, means packing takes ten minutes.

                ## Milestones
                1. A kit list for each race type you do, such as road run, triathlon or obstacle race.
                2. A dedicated race bag with the non-wearable items kept packed.
                3. Consumables restocked after each race.
                4. Mandatory kit rules for trail or obstacle events checked against the bag.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A packed race bag and a written kit list exist for each race type, restocked after every race in a season."
                cadence: rolling
              tasks:
                - "Write a kit list for each type of race you enter"
                - "Pack the non-wearable items into one dedicated race bag"
                - "Restock pins, balm and spares straight after each race"
                - "Check the race bag against the kit lists @recurring(quarterly)"
            - name: Annual licence and club membership renewals
              description: |-
                ## Purpose
                Letting a federation licence lapse can mean a day-licence fee at every race, no ranking points or, at some events, no start at all. Renewing licences and club memberships on a fixed yearly date keeps entries discounted, results counted and insurance in place.

                ## Milestones
                1. Every licence and membership you hold listed with renewal date and cost.
                2. Renewals set for a single month where the bodies allow it.
                3. Any licence needed for a new sport identified before its first race.
                4. New membership numbers copied into the race documents folder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All licences and memberships renewed before expiry in the year, with numbers updated in the race documents folder."
                cadence: cyclic
              tasks:
                - "List every licence and club membership with renewal date and cost"
                - "Check whether a new sport this year needs its own licence"
                - "Renew licences and memberships before they lapse @recurring(yearly)"
                - "Update the membership numbers in the race documents folder"
            - name: Counting training weeks back from each A race
              description: |-
                ## Purpose
                Training plans are written in weeks to race day, and starting one late compresses the build, while starting early leaves you peaking too soon. Counting back from each A race and marking the start of each phase in the calendar makes the race calendar and the training plan agree.

                ## Milestones
                1. The usual build length for each A race noted, such as 16 to 20 weeks for a marathon.
                2. Build start, peak and taper weeks marked in the season calendar.
                3. B and C races checked to sit in sensible weeks of the build.
                4. The training plan or coach given the same dates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every A race has its build start, peak and taper weeks marked in the season calendar and shared with whoever writes your training."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the build length your plan or coach uses for each A race"
                - "Mark build start, peak and taper weeks in the season calendar"
                - "Check each B and C race falls in a sensible week of the build"
                - "Send the marked dates to your coach or into your training plan"
            - name: Reading race information packs and rules
              description: |-
                ## Purpose
                Race disqualifications and missed starts usually trace back to something printed in the athlete guide: a headphone ban, a cut-off at halfway, a drafting rule, a bag size limit. Learning to read a race pack quickly for the rules that can end your day is a skill that pays at every event.

                ## Milestones
                1. The rules and athlete guide for the next race read in full.
                2. A short list of rule types that commonly catch people out, such as cut-offs, headphones, drafting and bib placement.
                3. Penalties and disqualification rules for your sport understood.
                4. A one-page rule summary written for the next A race.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page rule summary exists for the next A race, covering cut-offs, banned items and penalties."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download the athlete guide for your next race"
                - "Highlight cut-offs, banned items and penalty rules"
                - "Read your sport's competition rules on drafting or outside assistance"
                - "Write a one-page rule summary for your A race"
            - name: Ballot, waitlist and charity place entry routes
              description: |-
                ## Purpose
                The biggest events can be entered several ways: public ballot, club allocation, good-for-age or qualifying time, charity place, tour operator package or official resale. Knowing which routes each target race offers, and what each costs in money and commitment, widens your chances without surprises such as a fundraising target you cannot meet.

                ## Milestones
                1. Every entry route listed for each target race, with dates and conditions.
                2. Club ballot or allocation rules checked with your club secretary.
                3. Charity place fundraising minimums and deadlines noted where relevant.
                4. A first choice and a fallback route chosen for each race.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each target race has its entry routes listed with conditions, and a first and fallback route chosen."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every entry route your target races offer"
                - "Ask the club secretary how the club allocation or ballot works"
                - "Note fundraising minimums and deadlines for any charity place"
                - "Choose a first and fallback entry route for each race"
            - name: Transfer, deferral and refund policies compared
              description: |-
                ## Purpose
                Injury, illness and work clashes take out a fair share of entries every year, and what you get back varies from a full refund to nothing. Knowing each race's transfer, deferral and refund rules before entering lets you favour flexible events and know your options the day plans change.

                ## Milestones
                1. Transfer, deferral and refund terms recorded for every entered race.
                2. Deadlines for each option added to the entry tracker.
                3. The most and least flexible events identified.
                4. Flexibility made one of the criteria when choosing future races.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every entered race has its transfer, deferral and refund terms and deadlines recorded in the tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the terms and conditions for each race you have entered"
                - "Record transfer, deferral and refund options with their deadlines"
                - "Add those deadlines to the entry tracker"
                - "Rank your entered races from most to least flexible"
            - name: Qualifying standards and age-group slot allocation
              description: |-
                ## Purpose
                Championship and major events often decide entry by qualifying times, age-group slots or ranking points, and the rules are rarely as simple as a single number. Understanding how qualifying windows, age on race day, slot roll-downs and cut-off buffers work tells you whether a target is realistic and which race to qualify at.

                ## Milestones
                1. The qualifying rules for one target championship read and summarised.
                2. Your age group on the championship date worked out.
                3. The qualifying window and eligible race types noted.
                4. Past cut-off margins or slot roll-down patterns found where published.

                ## Notes
                Many qualifying systems use your age on race day of the championship, not of the qualifying race, which can move you into an easier or harder standard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of one championship's qualifying rules, your age group and the qualifying window."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the qualifying rules for one championship you are aiming at"
                - "Work out your age group on the championship date"
                - "Note the qualifying window and which races count"
                - "Look up how far under the standard recent qualifiers needed to be"
            - name: Reading course profiles, cut-offs and certification
              description: |-
                ## Purpose
                Two races of the same distance can be worlds apart: one flat, certified and record-eligible, another with 400 metres of climbing and a strict halfway cut-off. Learning to read elevation profiles, course measurement status and cut-off times means you choose races that match your goal and never discover a hill or a sweep bus on the day.

                ## Milestones
                1. Elevation gain and profile shape compared for three candidate races.
                2. Course certification or measurement status checked where times matter.
                3. Cut-off times converted into the pace or speed you would need.
                4. One course chosen or rejected on the evidence.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three candidate courses compared on elevation, certification and cut-offs, with the evidence used in one race decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull the elevation profiles for three races you are considering"
                - "Check whether each course is certified or accurately measured"
                - "Convert every cut-off into the pace you would need to hold"
                - "Use the comparison to choose or rule out one race"
            - name: Start waves, pens and predicted finish times
              description: |-
                ## Purpose
                At mass events the pen or wave you start in decides whether you spend the first five kilometres weaving past slower runners or being swept along too fast. Understanding how organisers allocate waves, what proof they accept and when you can change your predicted time puts you on the right start line.

                ## Milestones
                1. The wave allocation method for your next mass event understood.
                2. An honest predicted finish time set from a recent result.
                3. The deadline for changing your wave or predicted time recorded.
                4. Your allocated wave checked when start information is published.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your predicted time for the next mass event is based on a recent result and your allocated wave matches it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read how your next mass event allocates start waves"
                - "Set a predicted time from a recent official result"
                - "Note the deadline for changing your wave"
                - "Check your allocated wave when start lists are published"
            - name: Using past results to choose the right field
              description: |-
                ## Purpose
                Past results show what a race is really like: how deep the field is in your age group, how fast mid-pack finishers go, how many people finish behind the cut-off. Reading two or three years of results before entering helps you pick races where you can race for a place, chase a time or simply finish among people your speed.

                ## Milestones
                1. Two years of results downloaded or viewed for each candidate race.
                2. Your likely finishing position estimated from your recent times.
                3. The depth of your age group compared across races.
                4. A choice recorded between racing for a place and racing for a time.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two candidate races compared on past results with your likely position estimated for each and the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the last two years of results for each candidate race"
                - "Estimate where your recent times would have placed you"
                - "Compare the depth of your age group across the races"
                - "Record whether you are racing for a place or a time"
            - name: Local race or destination race decision
              description: |-
                ## Purpose
                A destination race offers a new place and a big atmosphere, but adds travel fatigue, unfamiliar food and beds, and three times the cost. Weighing a local option against a destination event on the same criteria makes the trade-off explicit before money and leave are committed.

                ## Milestones
                1. One local and one destination candidate chosen for the same goal.
                2. Both scored on cost, travel time, course, timing and what you want from the day.
                3. Leave days and household impact counted for the destination option.
                4. A decision recorded with the main reason.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of a local and a destination race on the same five criteria, with the decision and reason recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick one local and one destination race that suit the same goal"
                - "Score both on cost, travel, course, timing and atmosphere"
                - "Count the leave days and household cover the trip would need"
                - "Record the decision and the main reason"
            - name: Pre-agreed rule for withdrawing from an entry
              description: |-
                ## Purpose
                The night before a race, with the fee paid and friends going, nobody decides well whether to start with a niggle, a cold or a missed month of training. Writing your withdrawal rule in advance, and agreeing it with your coach or a training partner, makes the call quicker and kinder to your body and season.

                ## Milestones
                1. A written rule covering illness, injury, missed training and family emergencies.
                2. Each race's last date for transfer or deferral linked to the rule.
                3. The rule agreed with a coach, physio or training partner who will hold you to it.
                4. The rule applied at least once and reviewed.

                ## Notes
                Any symptom such as chest pain, fever or an injury that changes how you move is a reason to speak to a clinician, not a calendar decision.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written withdrawal rule exists, agreed with one other person, and is linked to each race's transfer deadline."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write what would make you withdraw, defer or drop to a shorter distance"
                - "Link each entered race's transfer deadline to the rule"
                - "Agree the rule with your coach or a training partner"
                - "Review the rule after the first time you use it"
            - name: Joining a race series or club championship
              description: |-
                ## Purpose
                A series or club championship gives a season structure: fixed dates, points for consistency, and often cheaper entries and familiar faces. Deciding whether to commit to one, and how many rounds you need to count, can replace a scattered list of one-off events with a calendar that plans itself.

                ## Milestones
                1. Available series and club championships listed with dates and scoring rules.
                2. The number of rounds needed to qualify for the overall standings noted.
                3. The series rounds checked against your A race and gap rules.
                4. A decision made to join, part-join or skip the series.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on joining one series or club championship is recorded, with the rounds you will race marked in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the series and club championships open to you this year"
                - "Note the scoring rules and how many rounds count"
                - "Check the rounds against your A race and gap table"
                - "Decide to join, part-join or skip, and mark the rounds you will race"
            - name: Travel insurance with event cancellation cover
              description: |-
                ## Purpose
                Standard travel policies often exclude competitive sport, and few cover a race that is cancelled for weather or an entry you cannot use because of injury. Checking what your current cover includes, and choosing a policy that matches the races you travel to, protects the expensive trips in the season.

                ## Milestones
                1. Your current travel and event cover read for sport exclusions and cancellation terms.
                2. The races needing cover listed with total trip costs.
                3. Two or three policies compared on sport cover, cancellation and equipment.
                4. A policy chosen, or a decision to self-insure recorded.

                ## Notes
                Read the definitions of competitive sport and pre-existing conditions closely. This is organisation, not insurance advice; a broker can help with complex cover.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Cover for each travelled race is confirmed in writing, or a recorded decision to self-insure with the cost at risk named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your current travel policy for sport and cancellation exclusions"
                - "List the season's travelled races with total trip cost"
                - "Compare two or three policies on sport cover and cancellation"
                - "Renew or review race travel cover before the season's first trip @recurring(yearly)"
            - name: Cutting the calendar to races that serve the A race
              description: |-
                ## Purpose
                Enthusiasm and fear of missing out fill calendars until every other weekend is a race and the A race arrives with tired legs. Testing each event against one question, does this help the A race or the season goal, and dropping what fails, usually frees money, weekends and freshness.

                ## Milestones
                1. Every race in the calendar tested against the A race goal.
                2. Races that fail the test dropped, transferred or switched to volunteering.
                3. The money recovered or saved noted in the ledger.
                4. The trimmed calendar shared with the household.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every remaining race has a written reason tied to the A race or season goal, and dropped races are recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the one question each race must answer yes to"
                - "Test every race in the calendar against it"
                - "Transfer, defer or drop the races that fail"
                - "Record the money and weekends recovered"
            - name: Booking race weekend accommodation early
              description: |-
                ## Purpose
                Hotels near big race starts fill or triple in price once entries open, and the cheap option forty minutes away is no use when the start is 7am and roads close at 6. Booking flexible accommodation the day you enter, and checking it against start logistics, removes one of the most common race-weekend stresses.

                ## Milestones
                1. A default rule to book refundable accommodation on the day of entry.
                2. Accommodation for each travelled race booked within a week of entering.
                3. Distance and transport to the start checked against road closures and start time.
                4. Cancellation deadlines added to the entry tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every travelled race has refundable accommodation booked within a week of entry, with the cancellation deadline in the tracker."
                cadence: rolling
              tasks:
                - "Book refundable accommodation for your next travelled race"
                - "Check the walk or transport time to the start against road closures"
                - "Add the free cancellation deadline to the entry tracker"
                - "Note in the entry profile that accommodation is booked on entry day"
            - name: Bike box, hire bike or shipping service decision
              description: |-
                ## Purpose
                Travelling to a triathlon, sportive or cycling race abroad means choosing between a hard case, a soft bag, a bike shipping service or hiring on arrival, each with different costs, airline fees and risks. Settling the choice once, with the real numbers for your next trip, avoids a rushed decision and a damaged frame.

                ## Milestones
                1. Airline sports equipment fees and weight limits checked for your usual routes.
                2. Hard case, soft bag, shipping and hire options costed for the next trip.
                3. Packing and reassembly practised once at home if you choose to fly with the bike.
                4. A choice made and recorded with the reason.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how the bike travels to the next race, with costs of each option written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the sports equipment fees on your usual airlines"
                - "Cost a hard case, a soft bag, a shipping service and a hire bike"
                - "Practise packing and rebuilding the bike once at home"
                - "Record the choice in the purchase decision template"
            - name: Major marathon ballot entry window
              description: |-
                ## Purpose
                Big-city marathon ballots open for a short window, often months before results and a year before race day, and the odds can be well under one in ten. Treating ballot season as a small event with a list, entries and backup plans gives you several chances instead of one.

                ## Milestones
                1. The ballot windows and result dates for target marathons listed.
                2. Every ballot you want to try entered before it closes.
                3. A backup race with guaranteed entry identified for a full set of rejections.
                4. Ballot results recorded and the season calendar updated.

                ## Notes
                Check whether a ballot charges on entry or only on success, and whether a rejection gives you anything such as a guaranteed place after several attempts.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every target ballot entered before its close date, with a backup race chosen and results recorded in the calendar."
                cadence: cyclic
              tasks:
                - "List the ballot windows and result dates for your target marathons"
                - "Enter each ballot before it closes"
                - "Choose a guaranteed-entry backup marathon"
                - "Diary next year's ballot opening dates once results are out @recurring(yearly)"
            - name: Overseas race trip from entry to flight home
              description: |-
                ## Purpose
                Racing abroad adds passports, time zones, foreign race-pack rules, unfamiliar food and getting kit or a bike there in one piece. Running the trip as a project from the day of entry, with travel booked to arrive at least two days early, keeps the race the main event rather than the logistics.

                ## Milestones
                1. Flights, accommodation and transfers booked with arrival at least two days before the race.
                2. Passport validity, visa or travel authorisation and any medical certificate checked.
                3. Race pack collection hours and ID requirements confirmed.
                4. A day-by-day trip plan from arrival to departure written.

                ## Notes
                Start from the **Trip** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written trip plan with travel, documents and race pack collection confirmed at least four weeks before departure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create a trip from the template for your overseas race"
                - "Check passport validity and any visa or entry authorisation"
                - "Book travel to arrive at least two days before the race"
                - "Confirm race pack collection hours and the ID it requires"
            - name: Club championship race day
              description: |-
                ## Purpose
                Club championship races carry their own rules: declaring in advance, wearing club colours, scoring teams and sometimes a deadline to register your claim. Preparing for the day as a club event, not just another race, makes sure your result counts and your team scores.

                ## Milestones
                1. The championship race and its declaration deadline confirmed with the club.
                2. Club vest or kit checked as compliant.
                3. Team scoring rules understood and teammates coordinated.
                4. Your result claimed or checked in the club standings.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You started the club championship race in club colours, declared on time, and your result appears in the club standings."
                cadence: cyclic
              tasks:
                - "Ask the club which races count for this year's championship"
                - "Declare for the championship race before the deadline"
                - "Check your club vest meets the race's kit rules"
                - "Confirm next year's championship fixtures with the club secretary @recurring(yearly)"
            - name: Team relay entry and squad admin
              description: |-
                ## Purpose
                Relays, team triathlons and team fitness races are some of the best days of a season, but someone has to collect names, money, leg order and transport. Taking on the admin with a clear sign-up, payment deadline and substitute list stops the team falling apart a week before the race.

                ## Milestones
                1. A team entry made with names, contact details and leg or role allocation.
                2. Each member's share of the fee collected by a set date.
                3. At least one substitute confirmed for late dropouts.
                4. Transport and meeting points shared with the whole team.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A full team entered, fees collected, a substitute named and race-day transport shared with every member."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Post a sign-up for the relay in the club group with a closing date"
                - "Collect each member's fee share by the stated date"
                - "Allocate legs or roles and confirm a substitute"
                - "Send the team transport and meeting plan a week before the race"
            - name: Marshalling a race to earn a guaranteed place
              description: |-
                ## Purpose
                Many races and parkrun-style events need volunteers, and some reward marshals with a guaranteed or discounted place the following year. Volunteering at a race you want to run also lets you see the course, the start set-up and the finish from the inside.

                ## Milestones
                1. Races offering volunteer places or discounts identified.
                2. One volunteer shift booked at a race you want to enter next year.
                3. The shift completed and any guaranteed entry code saved.
                4. Course and logistics notes written for when you race it.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "One volunteer shift completed at a target race, with any entry code saved and course notes written."
                cadence: cyclic
              tasks:
                - "Find races on your wish list that reward volunteers"
                - "Sign up for one marshal or volunteer shift"
                - "Save any guaranteed entry code in the race documents folder"
                - "Book a volunteer shift at a race you hope to run next year @recurring(yearly)"
            - name: End-of-season review and next season's first draft
              description: |-
                ## Purpose
                The weeks after the last race are when you remember clearly what the season did and did not give you. Reviewing results, spending, debriefs and enjoyment, then sketching next year's A race and rough calendar, means you go into the off-season with a plan instead of starting from a blank page in spring.

                ## Milestones
                1. Season results, personal bests and A race outcome summarised.
                2. Actual spend compared with the race budget.
                3. Events marked return, maybe or never from the debriefs.
                4. A first draft of next season with an A race candidate and key dates.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written season review and a first-draft calendar for next season with an A race candidate, completed within a month of the last race."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the season's results and A race outcome on one page"
                - "Compare actual race spending with the budget"
                - "Ask the agent to summarise the season's race debriefs into themes"
                - "Draft next season's A race and rough calendar @recurring(yearly)"
            - name: First racing season with a sensible number of starts
              description: |-
                ## Purpose
                New racers tend to either enter one huge event and nothing else, or say yes to every race a friend mentions. A first season with a handful of short races building to one goal event teaches race-day routine, pacing and logistics at low stakes before the start that matters.

                ## Milestones
                1. One goal event chosen for the end of the first season.
                2. Three to five shorter or lower-key races placed before it.
                3. Each early race given one thing to practise, such as pinning a number or a pacing plan.
                4. A debrief written after each and the goal event reached.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first-season calendar with one goal event and three to five practice races, each with a written purpose."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose one goal event four to six months away"
                - "Find three to five shorter local races in the months before it"
                - "Write one thing to practise at each early race"
                - "Write a short debrief after each practice race"
            - name: Race calendar for a parent of young children
              description: |-
                ## Purpose
                With young children, a 7am start an hour's drive away means someone else doing the morning, and a destination race can mean a family holiday or nothing. Building the calendar around childcare, nap times and the other parent's own training makes racing sustainable for the whole household.

                ## Milestones
                1. Races sorted into those that work as solo trips, family trips or neither.
                2. Childcare cover agreed for every A and B race morning.
                3. Your partner's or co-parent's own events or plans protected in the calendar.
                4. One family-friendly event found, such as a race with a children's run.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Childcare is agreed for every A and B race in the season, with the other parent's plans also in the calendar."
                cadence: rolling
              tasks:
                - "Mark each race as solo trip, family trip or not possible this year"
                - "Agree childcare for each A and B race morning"
                - "Add your partner's events and plans to the same calendar"
                - "Agree the coming month's race mornings with your co-parent @recurring(monthly:8)"
            - name: Racing around a shift rota
              description: |-
                ## Purpose
                Shift workers, nurses, police and hospitality staff often learn their rota four to six weeks out, long after popular races open entries. Choosing events with late entry or easy transfer, and swapping shifts early for A races, lets you keep racing without losing fees every time the rota changes.

                ## Milestones
                1. Races with on-the-day entry, late entry or free transfer identified.
                2. A races chosen where leave or a shift swap can be booked far in advance.
                3. A standing ask to your manager or rota coordinator for A race dates.
                4. Each new rota checked against the calendar as soon as it is published.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every A race date has leave or a shift swap confirmed, and each new rota is checked against the calendar within a week."
                cadence: rolling
              tasks:
                - "Find local races that offer late or on-the-day entry"
                - "Request leave or a shift swap for your A race dates now"
                - "Ask your rota coordinator how early dates can be protected"
                - "Check the newly published rota against the race calendar @recurring(monthly:22)"
            - name: Two-sport season with clashing calendars
              description: |-
                ## Purpose
                Athletes who race in two sports, such as running and cycling or football and triathlon, face two fixture lists that ignore each other. Laying both on one calendar and deciding which sport leads in each block avoids the weekend where a cup tie, a sportive and a 10K all want the same legs.

                ## Milestones
                1. Both sports' fixtures and races on one calendar.
                2. A lead sport chosen for each part of the year.
                3. Clashes resolved in advance with team captains or clubs.
                4. Recovery gaps checked across both sports, not within each.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One calendar shows both sports, with a lead sport for each block and every clash resolved before the season starts."
                cadence: rolling
              tasks:
                - "Put both sports' fixtures and races on the season calendar"
                - "Choose which sport leads in each block of the year"
                - "Tell team captains about known clashes before selection"
                - "Add newly released fixtures from both sports to the calendar @recurring(monthly:17)"
            - name: First year in a new age group
              description: |-
                ## Purpose
                Moving into a new five-year age category can turn a mid-pack finish into a podium chance, a slower qualifying standard or a first shot at age-group rankings. Knowing exactly when you move up in each sport, which use different cut-off rules, lets you target the right races in that first year.

                ## Milestones
                1. The date you move age group confirmed for each sport and federation you race in.
                2. Age-group records, standards or rankings for the new category looked up.
                3. Two or three races chosen where the new category gives a realistic target.
                4. Results checked to confirm you were placed in the correct category.

                ## Notes
                Some sports use age on race day, some age on 31 December of the race year. Check each federation's rule.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The age-group change date is confirmed for each sport, with two or three target races chosen for the new category."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check how each of your sports decides age group for a race"
                - "Note the first race date you compete in the new category"
                - "Look up winning and qualifying times in the new category"
                - "Confirm your race category is right on your birthday each year @recurring(yearly)"
            - name: Comeback season after a year without racing
              description: |-
                ## Purpose
                After a year or more away, licences have lapsed, entry systems have changed, old personal bests are a poor guide to start pens, and the temptation is to enter last year's A race straight away. Rebuilding the calendar with low-key races first, and new benchmarks before goals, gets you back racing without a demoralising first start.

                ## Milestones
                1. Lapsed licences and memberships renewed.
                2. Two low-key races entered to set new benchmark results.
                3. Predicted times reset from those new results, not old bests.
                4. A comeback A race chosen only after both benchmark races.

                ## Notes
                If the break was injury-related, follow your physio or clinician's return plan for training; this project only shapes the race calendar around it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two benchmark races completed and recorded before any A race entry for the comeback season."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check which licences and memberships lapsed during the break"
                - "Enter two low-key local races as benchmarks"
                - "Reset your predicted times from the benchmark results"
                - "Choose a comeback A race after the second benchmark"
            - name: Full season of racing on a tight budget
              description: |-
                ## Purpose
                Racing does not have to mean big entry fees: free weekly timed runs, club leagues, low-cost local races and volunteering-for-entry schemes can make a full season. Planning a season around cheap and free events, with one paid highlight, keeps racing in your life when money is short.

                ## Milestones
                1. Free and low-cost timed events within travel range listed.
                2. A club or league with cheap member entries identified.
                3. One paid highlight race chosen and costed.
                4. A season calendar costing less than a set total, such as the price of one big-city entry.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A full season calendar of at least eight races costing less than a stated total, with one paid highlight."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List free and low-cost timed events within easy travel"
                - "Find a club or league that offers cheap member entries"
                - "Choose and cost one paid highlight race"
                - "Set a season total and check the calendar comes in under it"
            - name: Double-peak season with two A races
              description: |-
                ## Purpose
                Experienced athletes often want two peaks, such as a spring marathon and an autumn half Ironman or a summer track season and a winter cross country. Spacing the two A races so there is time to recover, rebuild and peak again, usually twelve weeks or more for long events, decides whether the second peak happens at all.

                ## Milestones
                1. Two A races chosen with enough weeks between them for recovery and a second build.
                2. The recovery period after the first A race blocked out in the calendar.
                3. B races placed only in the second build, not in the recovery block.
                4. The double-peak plan agreed with your coach if you have one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two A races are in the calendar with a recovery block and second build marked between them, and no races inside the recovery block."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose two A races at least twelve weeks apart for long events"
                - "Block out the recovery weeks after the first A race"
                - "Place B races only inside the second build"
                - "Talk the spacing through with your coach or an experienced teammate"
            - name: Qualification pathway to an age-group championship
              description: |-
                ## Purpose
                Reaching a national or world age-group championship usually means qualifying at a named race within a window, then entering the championship itself by a deadline, often with team selection and kit orders in between. Mapping that pathway from qualifier to championship start line stops a qualifying result being wasted on a missed admin step.

                ## Milestones
                1. Qualifying races and windows for the target championship listed.
                2. One or two qualifying attempts placed in the season calendar.
                3. Championship entry deadline, fees and any team kit requirements recorded.
                4. Qualification status checked after each attempt and the next step taken.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "One or two qualifying attempts are entered, and championship entry deadlines and costs are recorded in the tracker."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the qualifying races and window for your target championship"
                - "Enter one or two qualifying races in the window"
                - "Record the championship entry deadline, fees and team kit rules"
                - "Check updated qualifying rankings and slot lists @recurring(monthly:25)"
            - name: Three-year race plan and bucket-list events
              description: |-
                ## Purpose
                Some races need years of planning: a six-major marathon set, a qualifying-only event, a mountain ultra with points requirements or a full-distance triathlon in a particular place. A three-year outline, with one big target a year and the prerequisites mapped, lets each season build towards events a single-year view would never reach.

                ## Milestones
                1. A bucket list of five to ten events written with their entry requirements.
                2. The events placed across three years with one major target per year.
                3. Prerequisites such as qualifying times, points or prior finishes mapped to earlier seasons.
                4. Savings needed for the most expensive events estimated.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A three-year outline with one major target per year and the prerequisites for each placed in earlier seasons."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write a bucket list of five to ten dream events"
                - "Note each event's entry requirements and typical cost"
                - "Place one major target in each of the next three years"
                - "Roll the three-year plan forward one year @recurring(yearly)"
            - name: Organising a club trip to a destination race
              description: |-
                ## Purpose
                Club trips to a destination race can bring twenty people to one start line, but only if someone handles group entries, shared accommodation, deposits and who travels with whom. Taking the organiser role with clear deadlines and a simple payment record keeps the trip fun for everyone, including you.

                ## Milestones
                1. Interest gauged and a firm sign-up list with deposits collected.
                2. Group entry or individual entry deadlines confirmed with the organiser.
                3. Shared accommodation and transport booked with costs split in writing.
                4. A trip briefing sent to all travellers two weeks before the race.

                ## Notes
                Agree in writing what happens to deposits if someone drops out. It prevents most of the arguments.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A club trip runs with every traveller entered, accommodation and transport booked, and all deposits and costs recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Post an interest poll for the club trip with a closing date"
                - "Collect deposits and write down the dropout rule"
                - "Book shared accommodation and transport and split costs"
                - "Send a trip briefing to everyone two weeks before the race"
---

# Race Calendar & Event Entries

This area is for anyone who races, whether that means parkruns and a spring 10K, a triathlon season or a run of sportives and Hyrox events, and wants the calendar to serve their training instead of the other way round. It starts with the foundations (the A race, one calendar, priorities, a budget and the entry deadlines), then the monthly and weekly machinery that catches entry windows and records results, the skills of reading entry rules, ballots and qualifying standards, the decisions about where and how often to race, the dated events from ballot day to the end-of-season review, the situations that bend a calendar, and finally multi-year and championship planning.

What repeats is a weekly check of opening entry windows, a monthly calendar review and fee ledger, a monthly results archive, a quarterly re-plan and the yearly renewals of licences, insurance and next season's draft. The Savings goal, Operational checklist, Metrics log, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
