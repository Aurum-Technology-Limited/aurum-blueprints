---
id: family-parenting.family-calendar-logistics
name: Family Calendar & Logistics
description: "One shared family calendar every adult trusts, a clear owner for each logistics job, weekly and termly planning rhythms, and cover plans for the weeks when normal routines break."
category: personal
version: 1.0.0
tags: [family-parenting, family-calendar-logistics, parent, shared-calendar, mental-load, school-admin, family-organisation]
author: Aurum Technology
starter_structure:
  templates:
    - household-chores
    - meeting-notes
    - purchase-decision
    - trip
    - operational-checklist
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Family Calendar & Logistics
          description: "Running a shared family calendar for school, work, activities and appointments so every adult knows who is doing what."
          projects:
            - name: Choosing one shared family calendar
              description: |-
                ## Purpose
                Most families run three or four calendars at once: a work calendar each, a paper planner, the school app and a fridge whiteboard, and nobody can see all of it. Picking one shared digital calendar that works on every adult's phone is the decision everything else in this area builds on. Choose for the least technical adult in the house, not the keenest.

                ## Milestones
                1. A list of the calendars, planners and apps the family currently relies on.
                2. Two or three options compared on phone support, sharing, colour coding and cost.
                3. One calendar chosen and agreed by every adult who will use it.
                4. The shared calendar installed on each adult's phone with a test event visible to all.

                ## Notes
                The calendar built into the phones you already own is usually the right answer. Dedicated family organiser apps add lists and meal planners, but a second app is one more place to forget to look.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One shared calendar is chosen, installed on every adult's phone and holds at least one real event added by each adult."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every calendar, planner and app the family uses today"
                - "Check which calendar app every adult's phone already supports"
                - "Compare two or three options on sharing, colours and cost"
                - "Install the chosen calendar on each adult's phone and add a test event"
            - name: Per-person calendars with a colour for each
              description: |-
                ## Purpose
                A single family calendar quickly turns into a wall of grey entries where nobody can tell whose dentist appointment is whose. Setting up one sub-calendar per family member, plus a shared family one for things everyone attends, lets each adult filter the view and see at a glance who is busy on Thursday afternoon.

                ## Milestones
                1. One calendar per adult and per child, each with its own colour.
                2. A shared family calendar for whole-family events.
                3. Every adult given edit access to all the children's calendars.
                4. A colour key written in the shared family notes so helpers can read the view.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every family member has a coloured calendar inside the shared account and every adult can view and edit the children's calendars."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a calendar for each family member inside the shared account"
                - "Give each calendar a colour that every adult will remember"
                - "Share the children's calendars with edit rights to every adult"
                - "Write a colour key in the shared family notes"
            - name: Moving every commitment into the shared calendar
              description: |-
                ## Purpose
                Until every commitment lives in one place, the shared calendar is just one more partial view, and the missed appointment will be the one sitting in a paper diary. Spending a couple of evenings copying in the next three months of appointments, clubs, school events, work trips and social plans makes the calendar trustworthy from the first week.

                ## Milestones
                1. The paper diary, fridge whiteboard and school letters checked for the next three months.
                2. Repeating commitments entered once as recurring events with an end date.
                3. Work travel and late meetings showing as busy blocks.
                4. Old calendars retired so nobody adds to them again.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The next three months of every family member's known commitments appear in the shared calendar, and the old paper and fridge calendars are retired."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather every paper diary, letter and whiteboard with dates on it"
                - "Enter the next three months of one-off appointments and events"
                - "Add weekly clubs and lessons as recurring events with an end date"
                - "Add each adult's work trips and late meetings as busy blocks"
                - "Wipe the old fridge calendar so there is only one source"
            - name: Event naming and detail rules for the family calendar
              description: |-
                ## Purpose
                An entry that just says 'Swim' does not tell the other parent which child, which pool, who is driving or that the bag needs goggles. Agreeing a short naming rule, such as child's name first, then the event, then the driver in brackets, plus a habit of putting the address and anything to bring in the notes, means anyone can act on an entry without asking.

                ## Milestones
                1. A one-line naming rule agreed by every adult.
                2. A short list of what goes in the location and notes fields.
                3. The next two weeks of entries rewritten to follow the rule.
                4. The rule pinned in the shared notes and shown to any regular helper.

                ## Notes
                Keep the rule short enough to remember on a phone at the school gate. Three parts in a fixed order is plenty.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written naming rule exists, and a spot check of 20 upcoming entries finds at least 18 that follow it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Draft a naming rule with child, event and driver in a set order"
                - "Agree what belongs in the location and notes fields"
                - "Rewrite the next two weeks of entries to match the rule"
                - "Pin the rule at the top of the shared family notes"
            - name: Linking work calendars with busy-only sharing
              description: |-
                ## Purpose
                Half of all family clashes start at work: a late meeting nobody at home knew about, or a training day booked over parents' evening. Showing each adult's work calendar in the family view as busy blocks only, without meeting titles, reveals real availability without breaking an employer's confidentiality rules.

                ## Milestones
                1. Each adult's employer policy on sharing calendar details checked.
                2. Work calendars overlaid in the family view as busy-only blocks.
                3. School pickups and family appointments added to each work calendar as private blocks.
                4. Both adults able to see the other's availability for the next fortnight.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each working adult's availability shows in the family calendar as busy blocks, and family commitments show as private blocks in each work calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check what your employer allows you to share from a work calendar"
                - "Overlay your work calendar in the family view as busy only"
                - "Add this month's school and family commitments to your work calendar as private"
                - "Ask your partner to do the same with their work calendar"
            - name: Loading the school year's term dates and closures
              description: |-
                ## Purpose
                Term dates, staff training days, half-term breaks and early finishes are published months ahead, yet they still catch working parents out because they sit on a school website nobody checks. Entering all of them, for every child and every school, as all-day events gives everyone weeks of warning for the days that need cover.

                ## Milestones
                1. Term dates and training days found for every school and nursery the children attend.
                2. Every closure, half-term and early finish entered as an all-day event.
                3. Days where two schools differ marked clearly.
                4. Each closure that needs cover flagged to the adult who owns childcare.

                ## Notes
                Training days are often confirmed later than term dates. Check the school newsletter in the first week of each term for additions.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every term date, training day and early finish for the current school year appears in the family calendar for each child."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Download the term dates page for each child's school"
                - "Enter every closure and training day as an all-day event"
                - "Mark early finishes with the exact pickup time"
                - "Flag the days where siblings' schools differ"
            - name: Mental load audit of who tracks what
              description: |-
                ## Purpose
                In many homes one adult carries the invisible work of remembering: when the form is due, that the shoes are too small, that the swimming fee went up. Listing every logistics job the family needs done, and noting who notices, plans and does each one, turns a vague sense of unfairness into a list two adults can actually discuss.

                ## Milestones
                1. A list of at least 40 recurring family logistics jobs, from forms to haircuts.
                2. Each job marked with who notices it, who plans it and who does it.
                3. Both adults' separate lists compared and the differences talked through.
                4. The three jobs causing the most friction identified.

                ## Notes
                Separate noticing from doing. A partner who does the pickup but never has to remember it is still leaving the hardest part with someone else.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of at least 40 logistics jobs shows who notices, plans and does each one, and both adults have reviewed it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every logistics job you remembered this week"
                - "Ask your partner to write their own list separately"
                - "Mark each job with who notices, plans and does it"
                - "Agree the three jobs that cause the most friction"
            - name: Agreeing who owns each recurring logistics job
              description: |-
                ## Purpose
                Shared responsibility often means nobody is responsible, so the dentist recall slides for a year. Giving each recurring job a single owner, who notices, plans and does it from start to finish, removes the constant checking and reminding between adults. Owners can swap, but only by saying so out loud.

                ## Milestones
                1. Every job from the mental load audit assigned one owner.
                2. The split checked for fairness against each adult's working hours.
                3. The owner list saved in the shared family notes.
                4. A date set to review the split after three months.

                ## Notes
                Start from the **Household chores** template. Hand over whole jobs, not tasks inside them: owning school forms means owning the reminder too.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every recurring logistics job has one named owner in a written list, and both adults have agreed the split."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Group the audited jobs into areas such as school, health and activities"
                - "Give each job one named owner"
                - "Check the split against each adult's working hours"
                - "Save the owner list in the shared family notes"
                - "Review whether the ownership split still feels fair @recurring(quarterly)"
            - name: Kitchen command centre for paper, bags and keys
              description: |-
                ## Purpose
                Lost permission slips, missing PE bags and keys hunted for at 8.15 are usually storage problems, not memory problems. A small command centre by the door, with an in-tray for paper, a hook or cubby per child, a charging spot and a printed week view, gives every loose item a home the whole family can see.

                ## Milestones
                1. One wall or shelf near the main door chosen as the command centre.
                2. An in-tray for paper and a hook or cubby for each child in place.
                3. A printed week view or whiteboard showing the next seven days.
                4. The in-tray emptied at least once a week for a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A command centre with an in-tray, a spot for each child's bag and a visible week view is set up, and the in-tray is cleared weekly for a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the spot by the door where bags and post already pile up"
                - "Fit a hook or cubby for each child and an in-tray for paper"
                - "Print or write the coming week on a board beside it"
                - "Empty the paper in-tray into the calendar or the recycling @recurring(weekly:fri)"
            - name: Shared family admin notes hub
              description: |-
                ## Purpose
                Every week someone asks for the school's absence line, a child's shoe size, the club login or where the birth certificates are, and only one adult knows where to look. A single shared note or folder holding the reference details the family uses most saves those interruptions and means either adult can handle things alone.

                ## Milestones
                1. A shared note or folder both adults can open from their phones.
                2. School, nursery and club office numbers and absence lines in one place.
                3. Each child's clothing and shoe sizes and reference numbers recorded.
                4. Passwords kept in a password manager, with only a pointer in the note.

                ## Notes
                Keep passwords and full identity numbers out of plain notes. Store a hint and where the real record lives.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared note holds contacts, sizes and reference details for every child, and both adults have used it to answer a question without asking each other."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a shared note or folder both adults can edit"
                - "Add school, nursery and club office numbers and absence lines"
                - "Record each child's current clothing and shoe sizes"
                - "Note where passports, birth certificates and records are kept"
            - name: Sunday evening week-ahead planning between adults
              description: |-
                ## Purpose
                Twenty minutes on Sunday evening is the single habit that prevents most weekday chaos. Going through the coming seven days together, adult by adult and child by child, assigns every pickup, spots the late meeting that clashes with parents' evening and surfaces the forms, payments and kit that need sorting before Friday.

                ## Milestones
                1. A fixed Sunday slot that both adults protect.
                2. Every event in the next seven days checked for an owner and transport.
                3. Clashes resolved, or a backup asked for, before Monday morning.
                4. Forms, payments and purchases for the week on the shared list.
                5. A month of Sundays held with no more than one skipped.

                ## Notes
                Start from the **Meeting notes** template. Keep it practical and short; bigger conversations about how the family runs deserve a separate slot.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "In a four-week stretch, at least three Sunday planning sessions are held and no weekday event is left without an owner."
                cadence: rolling
              tasks:
                - "Agree a twenty-minute Sunday slot with your partner"
                - "Walk through the next seven days and give every event an owner @recurring(weekly:sun)"
                - "Add the week's forms, payments and purchases to the shared list"
                - "Message any helper about the pickups they are covering this week"
            - name: Tomorrow check before bedtime
              description: |-
                ## Purpose
                Plans that looked fine on Sunday change by Wednesday: a match moves, a meeting runs late, a child announces non-uniform day. A two-minute look at tomorrow's calendar each evening, ideally out loud between adults, catches those changes while there is still time to wash a shirt or rearrange a pickup.

                ## Milestones
                1. A set moment each evening, such as after the children's bedtime, for the check.
                2. Tomorrow's pickups, kit and early starts confirmed between adults.
                3. Any change written into the calendar the same evening.
                4. Three weeks with the check done on most school nights.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three weeks, tomorrow's plan is checked on at least four of five school nights and no morning surprise traces back to a missed change."
                cadence: rolling
              tasks:
                - "Choose the evening moment that will trigger the check"
                - "Read tomorrow's calendar and confirm pickups and kit @recurring(daily)"
                - "Update the calendar straight away when something has moved"
                - "Put anything needed in the morning by the front door"
            - name: School emails, apps and letters triage
              description: |-
                ## Purpose
                Schools now send information through email, a parent app, a class messaging group and paper in book bags, often all in the same week. Clearing every channel twice a week at fixed times, and turning each date into a calendar entry and each action into a task, stops the trip payment that was due yesterday.

                ## Milestones
                1. Every school communication channel listed for each child.
                2. Two fixed triage slots a week in the calendar of the adult who owns school admin.
                3. Every date from school messages entered in the calendar.
                4. No school message older than four days left unread or unactioned.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a month, every school message is read within four days and each date or action in it appears in the calendar or task list."
                cadence: rolling
              tasks:
                - "List every app, email address and group each school uses"
                - "Set two fixed triage slots in the school admin owner's calendar"
                - "Turn each school date into an event and each action into a task @recurring(weekly:mon,thu)"
                - "Archive school messages once they have been actioned"
            - name: Forms, permission slips and school payments tracker
              description: |-
                ## Purpose
                Trip slips, dinner money top-ups, photo orders and consent forms each carry a deadline, and missing one can mean a child left behind on trip day. One running list of every outstanding form and payment, with its due date and owner, turns scattered pieces of paper into a short list checked once a week.

                ## Milestones
                1. One shared list for outstanding forms and payments.
                2. Each item recorded with child, due date, amount and owner.
                3. A weekly check that clears anything due within seven days.
                4. A full term with no missed form or late payment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Across one school term, every form and school payment is completed before its deadline, as shown by the tracker."
                cadence: rolling
              tasks:
                - "Start a shared list for forms and payments still outstanding"
                - "Add every slip and payment currently sitting in bags or inboxes"
                - "Clear anything due in the next seven days @recurring(weekly:tue)"
                - "Photograph signed forms before they go back to school"
            - name: Six-week look-ahead each month
              description: |-
                ## Purpose
                The weekly check catches clashes, but some things need more notice: a school trip that needs walking boots, a wedding that needs a babysitter, a work conference over a birthday. Once a month, scanning the next six weeks gives time to book cover, buy what is needed and say no early.

                ## Milestones
                1. A monthly slot in the calendar for the six-week scan.
                2. Events needing cover, purchases or travel flagged.
                3. Babysitters, leave or swaps booked for every flagged event.
                4. Gifts and outfits bought for occasions inside the window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months running, a six-week scan happens and every flagged event has cover or a purchase arranged at least two weeks before it."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot near the end of each month"
                - "Scan the next six weeks for anything needing cover or shopping @recurring(monthly:26)"
                - "Book babysitters or leave for the flagged evenings"
                - "Add the purchases you need to the shared shopping list"
            - name: Shared shopping and errands list
              description: |-
                ## Purpose
                Errands fall through the gap between two adults, each assuming the other bought the birthday card or collected the dry cleaning. A shared list on both phones, sorted by shop or errand type, lets whoever is passing the chemist or the post office do the job and tick it off for both.

                ## Milestones
                1. A shared list app installed on both adults' phones.
                2. Sections for groceries, chemist, gifts and other errands.
                3. Older children able to add the things they need.
                4. A month in which nothing is bought twice or forgotten.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both adults add to and tick off the same shared list for a month, with no duplicate purchases recorded."
                cadence: rolling
              tasks:
                - "Pick a shared list app that syncs on both adults' phones"
                - "Create sections for groceries, chemist, gifts and errands"
                - "Show older children how to add the things they need"
                - "Move every item from the fridge note into the app"
            - name: Termly calendar reset
              description: |-
                ## Purpose
                Each new term brings a new timetable: PE days change, clubs restart, swimming moves to Wednesday, and last term's recurring events quietly carry on. A termly reset, done the week the new term letters arrive, ends old recurring events, adds the new pattern and checks every owner still makes sense.

                ## Milestones
                1. Recurring events from last term ended on the last day of term.
                2. New PE days, club times and timetables entered for each child.
                3. Owners and drivers checked against the new weekly pattern.
                4. Parents' evenings and other dates from the term letter added.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Within a week of each new term starting, every recurring event matches the current timetable and none from last term remain."
                cadence: cyclic
              tasks:
                - "End last term's recurring events on the final day of term"
                - "Enter each child's new PE days and timetable changes"
                - "Add parents' evenings and dates from the new term letter"
                - "Run the full termly reset in the first week back @recurring(quarterly)"
            - name: Late-summer build of the next school year
              description: |-
                ## Purpose
                Late August is the one quiet moment when the whole coming school year can be sketched before it starts. Laying in term dates, birthdays, holidays, exam windows, work peaks and booked trips gives each adult an early view of the pinch points, such as a half-term that falls in a parent's busiest week.

                ## Milestones
                1. The coming year's term dates, closures and holidays entered.
                2. Birthdays, anniversaries and booked trips added for the year.
                3. Each adult's known work peaks and travel blocked out.
                4. The five tightest weeks of the year identified, each with an owner.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "By the first day of the school year, its term dates, birthdays, trips and work peaks are in the calendar and the five tightest weeks have a named owner."
                cadence: cyclic
              tasks:
                - "Block an evening in late August for the year build @recurring(yearly)"
                - "Enter the year's term dates, birthdays and booked trips"
                - "Ask each adult to block their known work peaks and travel"
                - "List the five tightest weeks and give each one an owner"
            - name: Party invitations, RSVPs and gifts routine
              description: |-
                ## Purpose
                Primary school children can be invited to twenty or more parties a year, each with an RSVP date, a venue across town and a gift to buy. A simple routine of replying within two days, adding the party to the calendar with the address and the driver, and keeping a small stock of gifts and cards saves panic buying on Saturday morning.

                ## Milestones
                1. Every invitation answered within two days of arriving.
                2. Each party entered with venue address, timings and a named driver.
                3. A gift drawer stocked with a few suitable presents and cards.
                4. A per-party gift budget agreed between adults.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a term, every party invitation is answered by its RSVP date and no gift is bought on the day of a party."
                cadence: rolling
              tasks:
                - "Agree a standard gift budget per party"
                - "Buy four or five gifts and cards for a gift drawer"
                - "Reply to each invitation and add it to the calendar within two days"
                - "Put the venue address and the driver in each party entry"
            - name: Children's document and renewal dates
              description: |-
                ## Purpose
                Children's passports usually last only five years, and bus passes, library cards and school meal accounts all lapse on their own schedules. Recording every expiry date as a calendar reminder with enough lead time for processing means renewals start while there is slack, not a month before a holiday.

                ## Milestones
                1. Every child's documents and passes listed with expiry dates.
                2. A reminder set for each, three months ahead for passports.
                3. Current processing times for passport renewals checked.
                4. Renewal steps for each document noted in the shared family notes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every child's document and pass has its expiry date and an early reminder in the calendar, and none lapses unexpectedly in a year."
                cadence: cyclic
              tasks:
                - "List each child's passport, travel pass and memberships with expiry dates"
                - "Add a reminder three months before each passport expires"
                - "Note the renewal steps and photos needed in the shared notes"
                - "Check the expiry list against next year's travel plans @recurring(yearly)"
            - name: Calendar app features worth learning
              description: |-
                ## Purpose
                Most families use a tenth of what their calendar can do, then work around the gaps with sticky notes. An hour learning recurring events with exceptions, multiple alerts, attachments and search pays back every week, especially for the adult who is less confident with the app.

                ## Milestones
                1. Recurring events with exceptions and end dates created confidently.
                2. Two alerts set on one event, such as a day before and an hour before.
                3. A letter or ticket attached to an event.
                4. Past events found quickly through search.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each adult can create a recurring event with an end date, add two alerts and attach a file without help."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Spend thirty minutes with the help pages of your calendar app"
                - "Practise creating a recurring event that skips half-term"
                - "Attach a PDF letter to a test event"
                - "Show your partner the three features you found most useful"
            - name: Reminders and alerts that get acted on
              description: |-
                ## Purpose
                A phone that pings forty times a day trains everyone to swipe alerts away, including the one about the orthodontist. Deciding which events deserve an alert, how long before, and on whose phone, keeps reminders rare enough to be noticed and timed for when action is still possible.

                ## Milestones
                1. Default calendar alerts switched off or reduced.
                2. A short rule for which events get alerts and how far ahead.
                3. Alerts on shared events sent only to the adult who owns them.
                4. Two weeks with no missed event that carried an alert.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written alert rule is in place, and for two weeks no event with an alert is missed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count how many calendar alerts you received yesterday"
                - "Turn off default alerts on calendars that do not need them"
                - "Write a rule for which events get alerts and when"
                - "Set leave-the-house alerts for appointments that need travel"
            - name: Buffers and travel time in the family calendar
              description: |-
                ## Purpose
                Calendars that show swimming ending at 5.00 and tea at the grandparents' at 5.15 hide the twenty-five minute drive and the wet hair. Adding travel time, getting-ready time and a margin around events turns an optimistic plan into one the children can actually keep up with.

                ## Milestones
                1. Travel times between home, school and regular venues noted.
                2. Travel and buffer blocks added to the next two weeks of events.
                3. A default margin agreed, such as fifteen minutes between back-to-back plans.
                4. Fewer late arrivals over a fortnight than the fortnight before.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For two weeks, every event that needs a trip out has a travel block, and late arrivals are fewer than in the previous fortnight."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note drive or walk times to the places the family goes weekly"
                - "Add travel blocks before and after the next two weeks of events"
                - "Agree a default fifteen-minute margin between plans"
                - "Count late arrivals over the fortnight and compare"
            - name: Turning school letters into calendar entries fast
              description: |-
                ## Purpose
                One newsletter can hold a dozen dates: a cake sale, a trip, a non-uniform day, a deadline for photo orders. Learning to process a letter in a single sitting, by photographing it, pulling out every date and action and entering them straight away, ends the pile of half-read letters on the kitchen counter.

                ## Milestones
                1. A routine for photographing and filing every paper letter.
                2. Each date in a letter entered as an event and each action as a task.
                3. Original letters recycled once processed, with the photos kept.
                4. Processing time for a typical newsletter under five minutes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five newsletters in a row are processed within a day of arriving, with every date in the calendar and every action on the list."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the latest school letter and save it to the shared folder"
                - "Ask the agent to list every date and action in the letter"
                - "Enter each date as an event and each action as a task"
                - "Time how long the next letter takes to process"
            - name: Teaching young children to read a picture calendar
              description: |-
                ## Purpose
                Young children ask whether it is a school day ten times a morning because the days of the week mean little to them yet. A picture calendar at their eye level, with symbols for school, swimming, grandma's house and weekends, helps four to seven-year-olds anticipate changes and feel calmer about transitions.

                ## Milestones
                1. A week-view board at child height with a column per day.
                2. Simple symbols for the family's regular events.
                3. A daily moment where the child moves a marker to today.
                4. The child able to say what is happening tomorrow from the board.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "In a given week, a child uses the picture calendar to say correctly what is happening tomorrow on five days out of five."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Make or print symbols for school, clubs, visits and home days"
                - "Fix a week board at the child's eye level"
                - "Move the today marker together each morning"
                - "Ask the child at bedtime what tomorrow's picture shows"
            - name: Teenager's own calendar linked to the family one
              description: |-
                ## Purpose
                Teenagers juggle timetables, revision sessions, part-time shifts, matches and social plans, and expecting a parent to hold all of it is neither practical nor good for them. Giving a teenager their own calendar on their phone, visible in the family view, with clear rules about what must go in, builds the habit they will need at work and university.

                ## Milestones
                1. A calendar on the teenager's phone, shared with the family account.
                2. An agreed list of what must go in, such as lifts needed and nights away.
                3. The teenager entering their own events for a month.
                4. Parents adding only events that involve the teenager, not managing their diary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For a month, the teenager enters their own lifts, shifts and nights away in a calendar visible to the family."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set up a calendar on the teenager's phone inside the family account"
                - "Agree with them which events must always go in it"
                - "Show them how to invite a parent to an event that needs a lift"
                - "Check together after a month what is working"
            - name: Solo week plan when a partner travels for work
              description: |-
                ## Purpose
                When one adult is away for a week, the other suddenly owns every pickup, bedtime and form, often while also working full time. A short plan made before the trip, covering which pickups need help, which evenings to lighten and what the travelling partner will still handle remotely, makes the week manageable rather than heroic.

                ## Milestones
                1. Every event in the travel week checked for a pickup or drop-off clash.
                2. Help booked from family, friends or a sitter for the hardest evenings.
                3. Jobs the travelling partner can still do from away agreed, such as online payments.
                4. A daily call time with the children set.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Before the trip, every pickup in the travel week has a named adult and the travelling partner has a written list of remote jobs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the travel dates in the family calendar as soon as they are known"
                - "Find every pickup or evening the remaining adult cannot cover"
                - "Book help for those slots from family, friends or a sitter"
                - "Agree which jobs the travelling partner handles remotely"
            - name: Pruning stale and duplicate calendar entries
              description: |-
                ## Purpose
                After a year, shared calendars collect clutter: recurring events from clubs that stopped, duplicates from two adults entering the same party, birthdays of people you no longer see. A clean-up makes the real commitments stand out again and restores trust in what the calendar shows.

                ## Milestones
                1. Recurring events with no end date reviewed and ended where finished.
                2. Duplicate entries for the same event merged.
                3. Subscribed calendars nobody reads removed.
                4. A rule agreed that the owner of an event is the one who enters it.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No recurring event in the shared calendar refers to an activity that has stopped, and a sample month shows no duplicate entries."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the calendar for recurring events with no end date"
                - "End or delete events for clubs and routines that have stopped"
                - "Merge duplicates entered by both adults"
                - "Unsubscribe from shared calendars that nobody reads"
            - name: Default week template for weekday evenings
              description: |-
                ## Purpose
                Families that redesign their week from scratch every Sunday spend their energy on decisions instead of dinner. Sketching a default week, with which evenings are for clubs, which are home evenings, which adult does which pickup and when the big shop happens, gives a pattern to adjust rather than invent.

                ## Milestones
                1. Current weekday evenings mapped, showing clubs, late working nights and pickups.
                2. A default week drafted with at least two calm home evenings.
                3. The template saved where both adults can see it.
                4. The template trialled for four weeks and adjusted once.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A default weekday template exists, includes at least two evenings without fixed commitments, and has been followed for four weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Map what currently happens on each weekday evening"
                - "Draft a default week with two evenings kept free"
                - "Save the pattern where both adults can see it"
                - "Review the template after four weeks and change one thing"
            - name: Weekend capacity rule for invitations and plans
              description: |-
                ## Purpose
                Weekends fill up with parties, matches, visits and errands until there is no rest left, and a calendar never says no on its own. A simple capacity rule, such as no more than two outside commitments per weekend and one weekend a month kept clear, makes it easier to decline invitations without agonising each time.

                ## Milestones
                1. The last two months of weekends reviewed for how full they were.
                2. A capacity rule agreed by both adults.
                3. One protected weekend a month blocked for the next quarter.
                4. At least one invitation declined using the rule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written weekend capacity rule exists, protected weekends are blocked for the next three months, and the next month stays within the rule."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the commitments on each of the last eight weekends"
                - "Agree a maximum number of outside plans per weekend"
                - "Block one clear weekend a month for the next quarter"
                - "Check the coming month's weekends against the rule @recurring(monthly:12)"
            - name: Notification clean-up across school and club apps
              description: |-
                ## Purpose
                A typical family with two children can end up with six or more apps sending school, club, nursery and payment notifications to both adults, so everything is seen twice or not at all. A one-off clean-up decides which adult receives which app, which alerts stay on and which move to a digest.

                ## Milestones
                1. Every family-related app listed with who receives its notifications.
                2. Each app assigned to the adult who owns that logistics area.
                3. Non-urgent notifications switched to a digest or email.
                4. Duplicate class groups muted for the adult who does not own them.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each school, club and payment app sends alerts to one named adult, and non-urgent alerts arrive as a digest."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every app that sends family notifications to either adult"
                - "Assign each app to the adult who owns that area"
                - "Switch non-urgent alerts to a daily or weekly digest"
                - "Mute class groups on the phone of the adult who does not own them"
            - name: Wall display or tablet for the family calendar
              description: |-
                ## Purpose
                Phones keep the calendar private to whoever is holding one, so children and visiting helpers never see it. Some families find a wall display or an old tablet in the kitchen ends the what-are-we-doing-today questions; others find a printed sheet works as well for nothing. Comparing the options before buying avoids an expensive gadget nobody looks at.

                ## Milestones
                1. Needs listed: who will read it, where it hangs and whether it must be editable by touch.
                2. A printed week view trialled for two weeks as the zero-cost option.
                3. Two or three displays or tablet set-ups compared on cost, subscription and privacy.
                4. A decision made to buy, repurpose a tablet or keep paper.

                ## Notes
                Start from the **Purchase decision** template. Check whether a display needs a monthly subscription to sync, and what it shows to visitors in your kitchen.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to buy a display, repurpose a tablet or keep a printed week, made after a two-week paper trial."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Print the coming week and stick it on the fridge for two weeks"
                - "Note who looked at it and what they used it for"
                - "Compare two displays and a spare tablet set-up on total cost"
                - "Record the decision and the reason on the purchase decision page"
            - name: Choosing a shared household task list
              description: |-
                ## Purpose
                Calendars are good at things with a time and bad at things with a deadline, like buying new school shoes by Friday or booking the boiler service. A shared task list both adults use, with owners and due dates, catches everything the calendar cannot hold and stops tasks living in one person's head.

                ## Milestones
                1. Two or three task apps compared on sharing, due dates and ease of use.
                2. One app chosen and installed for both adults.
                3. Lists set up for school, home, health and errands.
                4. Every task from the Sunday planning session going into it for a month.

                ## Notes
                The shopping and errands list can live in the same app, so there is one place to look rather than two.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both adults use one shared task app for a month, with every task from the Sunday session added to it with an owner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down where family to-dos currently live"
                - "Compare two or three shared task apps on the adults' phones"
                - "Set up lists for school, home, health and errands"
                - "Move the current to-dos into the chosen app"
            - name: Family location sharing agreement
              description: |-
                ## Purpose
                Location sharing can replace a dozen where-are-you messages and help with pickups, but it can also feel like surveillance to a twelve-year-old or a partner. Agreeing who shares location with whom, when it is on, and what it will and will not be used for, gets the convenience without the arguments.

                ## Milestones
                1. A list of who currently shares location with whom.
                2. Each family member's view heard, including older children.
                3. A written agreement on when sharing is on and what it is for.
                4. Settings changed on each phone to match the agreement.

                ## Notes
                Revisit the agreement as children get older. What suits a ten-year-old walking to school will feel intrusive to a seventeen-year-old.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written family location sharing agreement exists, every phone's settings match it, and older children have agreed to it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which family members already share location and with whom"
                - "Ask older children what they would and would not be comfortable with"
                - "Write a short agreement on when sharing is on and why"
                - "Revisit the agreement as each child gets older @recurring(yearly)"
            - name: Deciding which logistics to pay for or hand off
              description: |-
                ## Purpose
                Some logistics cost more in time and stress than they would in money: the weekly big shop, ironing school shirts, the Tuesday pickup that forces a parent to leave work early. Pricing the most draining jobs and comparing options such as delivery slots, a cleaner, a paid pickup helper or a swap with another family shows which are worth handing off within the budget you have.

                ## Milestones
                1. The five most draining logistics jobs listed with hours spent per month.
                2. A rough cost found for paying for or swapping each one.
                3. One or two jobs chosen to hand off, within an agreed monthly amount.
                4. The handoff tried for a month and then kept or dropped.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision is recorded on which logistics jobs to pay for or swap, with a monthly cost, after a one-month trial."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five logistics jobs that drain the family most"
                - "Estimate the hours each one takes per month"
                - "Price paid or swapped options for the top two"
                - "Trial one handoff for a month and decide whether to keep it"
            - name: December concerts, parties and travel calendar
              description: |-
                ## Purpose
                December crams school plays, winter concerts, dress-up days, work parties, fairs and travel into three weeks, much of it announced at short notice. Building a dedicated December view in early November, with every known date and a few protected quiet evenings, lets both adults book leave and babysitters before everyone else does.

                ## Milestones
                1. All school and nursery December events entered by mid-November.
                2. Work parties and late events for each adult added.
                3. Leave booked for the plays and concerts each adult wants to attend.
                4. At least two quiet evenings a week blocked for the first three weeks of December.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By mid-November, every December event is in the calendar with an attending adult, and leave and babysitters are booked where needed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the school office for December dates not yet published"
                - "Enter school, work and social December events"
                - "Book leave for the performances each adult will attend"
                - "Start the December calendar in the first week of November @recurring(yearly)"
            - name: Family holiday travel day plan
              description: |-
                ## Purpose
                Travel days with children are where logistics failures hurt most: passports left in a drawer, a missed train because nobody checked the taxi, a toddler with no snacks during a two-hour delay. A written travel day plan, with timings worked back from departure, a packing split between adults and a document check a week before, makes the day calmer for everyone.

                ## Milestones
                1. Departure timings worked back to a wake-up time.
                2. Documents, tickets and bookings checked a week before travel.
                3. Packing split between adults, with each child's bag owned by one adult.
                4. A travel day bag with snacks, chargers and spare clothes ready the night before.

                ## Notes
                Start from the **Trip** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written travel day plan with timings and owners is complete a week before departure and all documents have been checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work back from the departure time to a wake-up time"
                - "Check every passport, ticket and booking a week before"
                - "Split packing so each child's bag has one adult owner"
                - "Pack the travel day bag with snacks, chargers and spare clothes"
            - name: Cover plan for a parent's planned operation
              description: |-
                ## Purpose
                Planned operations and hospital stays can take one adult out of the family rota for days or weeks, and recovery often rules out driving and lifting. Planning cover before the date, with every pickup, meal and appointment assigned and helpers briefed, lets the parent focus on recovery instead of the rota.

                ## Milestones
                1. Recovery restrictions asked about, such as weeks without driving.
                2. Every family commitment during the recovery window listed.
                3. Each pickup, meal and appointment assigned to a named helper.
                4. Helpers given the family notes, the calendar view and a contact sheet.

                ## Notes
                Ask the hospital what recovery normally looks like for the procedure. The cover plan follows from their answer, not from guesswork.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Before admission, every commitment in the recovery window has a named helper in the calendar and each helper has the family notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the clinical team how long driving and lifting will be off limits"
                - "List every commitment in the expected recovery window"
                - "Ask family and friends to take named pickups and meals"
                - "Share the calendar view and family notes with each helper"
            - name: Older children's cover around a new baby's birth
              description: |-
                ## Purpose
                When labour starts, someone has to collect the older children, often at night or with no notice, and keep their week running while parents are at the hospital. Lining up first, second and third call carers, and putting the older children's routines and pickups where those carers can see them, means the new baby arrives without a scramble for the school run.

                ## Milestones
                1. Three people on call for the older children, in order, from a set date.
                2. Each carer given school times, pickups, clubs and bedtime routines.
                3. A spare key and car seats arranged for the on-call carers.
                4. The two weeks after the due date planned with fewer commitments.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "From 37 weeks, three on-call carers know the older children's routines and have a key, and the two weeks after the due date are lightened in the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask three people to be on call for the older children, in order"
                - "Write out the older children's school times, clubs and bedtimes"
                - "Arrange a spare key and car seats for the on-call carers"
                - "Cancel or swap optional plans in the two weeks after the due date"
            - name: House move week calendar for the children
              description: |-
                ## Purpose
                Moving house in term time means packing, utilities and key handovers collide with school runs, clubs and bedtime routines, and children feel the disruption most. Planning the move week in the calendar, with who has the children on moving day, which clubs to pause and when to practise the new school route, keeps their week as normal as possible.

                ## Milestones
                1. Moving day and key handover times entered, with who has the children.
                2. Clubs and activities paused or covered for move week.
                3. The new school route or pickup arrangement tested before the first day.
                4. Familiar bedtime items packed in a separate box for the first night.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "During move week, the children's school days and pickups run to plan, with a named adult caring for them on moving day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a grandparent or friend to have the children on moving day"
                - "Pause or arrange cover for clubs in move week"
                - "Practise the new school route before the first school day"
                - "Pack each child's bedtime things in a box marked open first"
            - name: Shift-work rota merged into the family calendar
              description: |-
                ## Purpose
                Shift rotas change the family week every few weeks, so a fixed weekday pattern never settles. Copying each new rota into the family calendar the day it is published, and spotting straight away which pickups, bedtimes and weekends need cover, turns a rolling puzzle into a predictable monthly routine.

                ## Milestones
                1. Each shift entered as a block with start, finish and travel time.
                2. Clashing pickups and bedtimes flagged within a day of the rota arriving.
                3. A standing list of people who can cover early starts or late finishes.
                4. Days after night shifts marked as sleep time, not free time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three rota cycles, every shift is in the family calendar within two days of publication and every clash has cover arranged."
                cadence: rolling
              tasks:
                - "Enter the current rota as shift blocks including travel time"
                - "Flag every pickup and bedtime that clashes with a shift"
                - "Keep a list of people who can cover early or late shifts"
                - "Copy each new rota into the calendar the day it is published @recurring(monthly:20)"
            - name: Sharing the calendar with grandparents, a nanny and helpers
              description: |-
                ## Purpose
                Grandparents, nannies, childminders and neighbours who help with pickups often work from texts and memory, so they miss changes. Giving regular helpers a view of just the children's calendars, or a printed week if they do not use a smartphone, means they see changes the moment you make them.

                ## Milestones
                1. A list of regular helpers and what each needs to see.
                2. View-only access to the children's calendars given to helpers who want it.
                3. A printed or messaged week sent each Sunday to helpers without smartphones.
                4. A rule for how helpers flag when they cannot cover.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every regular helper has live view-only access to the children's calendars or a weekly printed copy, and has used it for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each regular helper and the days they cover"
                - "Share the children's calendars view-only with helpers who use smartphones"
                - "Agree how helpers tell you when they cannot cover"
                - "Send a weekly printed or messaged plan to helpers without smartphones"
            - name: One-car or car-free family transport plan
              description: |-
                ## Purpose
                Families with one car, or none, can do most of what two-car families do, but only if the week is planned around who has the car and which trips go by bus, bike or on foot. Mapping the week's regular trips and agreeing defaults, such as the car going to whoever has the furthest pickup, removes daily negotiations over the keys.

                ## Milestones
                1. Every regular weekly trip listed with distance and options.
                2. A default for who has the car on each weekday.
                3. Bus, bike and walking routes tested for the trips that do not need the car.
                4. Backup options, such as a taxi account or a lift swap, noted for bad weather and illness.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written weekly transport plan shows who has the car each day and how every regular trip is made, and it has run for a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every regular trip the family makes in a week"
                - "Agree who has the car on each weekday"
                - "Test the bus or bike route for trips that can go without the car"
                - "Note backup options for rainy days and sick children"
            - name: Logistics for families with four or more children
              description: |-
                ## Purpose
                With four or more children, the number of schools, clubs, appointments and parties grows faster than the hours available, and systems that suit two children collapse. Grouping children into fewer pickup points, batching appointments, rotating which parent attends whose event and giving older siblings real roles keeps a large family moving.

                ## Milestones
                1. Each child's weekly commitments laid out in one grid.
                2. Appointments such as dentist visits and haircuts batched into shared slots.
                3. A fair rotation for which parent goes to whose event.
                4. Each older child given one named logistics job.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page weekly grid covers every child, appointments are batched where possible, and each older child has a named logistics job."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Lay out every child's weekly commitments in one grid"
                - "Book check-ups and haircuts as back-to-back family slots"
                - "Set a rotation for which adult attends each child's events"
                - "Give each older child one logistics job to own"
            - name: Calendar across time zones with a parent working away
              description: |-
                ## Purpose
                Parents posted abroad, working offshore rotations or deployed with the forces have to coordinate across time zones, where a 6pm school concert lands at 3am for the parent away. Setting the calendar to show both zones and agreeing fixed call windows keeps the absent parent part of the week without constant clock arithmetic.

                ## Milestones
                1. Both time zones shown in each adult's calendar view.
                2. Call windows agreed that suit school times and both sleep patterns.
                3. The absent parent invited to school events they can join remotely.
                4. Home leave periods entered as soon as they are known.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Both adults' calendars show both time zones, and the agreed call windows are kept on at least four days a week for a month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Turn on a second time zone in each adult's calendar"
                - "Agree call windows that suit school and both sleep patterns"
                - "Invite the absent parent to events they can join by video"
                - "Enter home leave dates as soon as they are confirmed"
            - name: Planning around naps in the baby and toddler years
              description: |-
                ## Purpose
                Naps, feeds and early bedtimes shape the day of a family with a baby or toddler more than any appointment, yet they rarely appear in the calendar. Blocking the main nap window and bedtime, then booking appointments, visits and classes around them, avoids the overtired meltdown in a waiting room.

                ## Milestones
                1. Current nap windows and bedtime recorded for a week.
                2. Nap and bedtime blocks added to the child's calendar.
                3. Appointments and classes for the next month booked outside those blocks.
                4. Blocks updated whenever naps drop or move.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The child's nap and bedtime blocks are in the calendar and the next month's appointments and classes avoid them."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note when the baby or toddler actually naps for a week"
                - "Add the main nap window and bedtime as recurring blocks"
                - "Book the next month's appointments outside those blocks"
                - "Move the blocks when a nap drops or shifts"
            - name: Subscribing to school, club and fixture calendar feeds
              description: |-
                ## Purpose
                Many schools, sports leagues and clubs publish their dates as calendar feeds that update themselves, so cancellations and moved fixtures appear without anyone retyping them. Subscribing to the right feeds, each in its own colour and hidden by default if noisy, cuts manual entry and catches changes faster than the newsletter.

                ## Milestones
                1. Feeds found for each school, league or club that offers one.
                2. Each feed subscribed as its own clearly named calendar.
                3. Noisy feeds filtered or hidden from the main view.
                4. Feeds checked each term to confirm they still update.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every available school and club feed is subscribed in a named calendar, and a termly check confirms each one still updates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each school and club whether they publish a calendar feed"
                - "Subscribe to each feed as its own named calendar"
                - "Hide or filter feeds that add events you do not need"
                - "Check every feed still updates at the start of each term @recurring(quarterly)"
            - name: Family operations manual for stand-in carers
              description: |-
                ## Purpose
                If both parents were unexpectedly away for a week, could a grandparent run the house from what is written down? A family operations manual, covering the daily timetable, school and club details, the meals the children eat, bedtime routines and where things are kept, lets any trusted adult step in and makes a weekend away with a sitter far less stressful.

                ## Milestones
                1. A daily timetable for school days and weekends written out.
                2. School, club and health details for each child in one section.
                3. Meals, allergies, bedtime routines and screen rules described.
                4. The manual tested by a grandparent or sitter for one day and the gaps fixed.

                ## Notes
                Start from the **Operational checklist** template. Keep it to what a stand-in needs to run a normal week; the family emergency plan covers what to do when things go wrong.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written operations manual exists, a stand-in carer has run a full day from it, and the gaps they found have been fixed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out a typical school day hour by hour"
                - "Add each child's school, club and health details"
                - "Describe meals, bedtimes and screen rules for each child"
                - "Ask a grandparent or sitter to run a day from it and note gaps"
                - "Update the manual once each new school year starts @recurring(yearly)"
            - name: Annual family logistics review
              description: |-
                ## Purpose
                Once a year, looking back at what broke in the family's logistics, such as the missed forms, the double-booked weekends and the jobs one adult resented, shows which systems to keep and which to drop. An hour together with the calendar and the owner list is usually enough to choose two or three changes for the year ahead.

                ## Milestones
                1. The year's missed events, clashes and near misses listed from memory and the calendar.
                2. Systems that worked and systems that were abandoned noted.
                3. The ownership split revisited after a year of real experience.
                4. Two or three changes agreed and added as projects or tasks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review is held, with a written list of what failed and two or three agreed changes for the coming year."
                cadence: cyclic
              tasks:
                - "Scroll back through the year's calendar and note clashes and misses"
                - "List which family systems stuck and which were abandoned"
                - "Agree two or three changes for the coming year"
                - "Hold the yearly logistics review with your partner @recurring(yearly)"
            - name: Coordinating the class parents' calendar as class rep
              description: |-
                ## Purpose
                Class reps end up holding dates for thirty families: collections for teachers' gifts, the class social, volunteer rotas for trips and fairs. Running one shared class calendar and a monthly summary message cuts the flood of questions in the parents' group and gives busy parents one reliable place to check.

                ## Milestones
                1. Key class dates confirmed with the teacher or school office each term.
                2. A shared class calendar or pinned date list set up.
                3. A monthly summary message sent to the class parents.
                4. Volunteer slots for trips and events filled through one sign-up sheet.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each month of a school term, the class parents receive one summary of upcoming dates and every volunteer slot is filled through a single sign-up."
                cadence: rolling
              tasks:
                - "Ask the teacher which class dates parents need to know this term"
                - "Set up a shared class calendar or pinned date list"
                - "Send the class parents a monthly summary of upcoming dates @recurring(monthly:5)"
                - "Use one sign-up sheet for each volunteer rota"
---

# Family Calendar & Logistics

This area is for parents who want one calendar the whole household trusts and a fair answer to the question of who is doing what this week. It starts with the foundations (choosing and structuring a shared calendar, loading every commitment and term date, linking work diaries and splitting ownership of the logistics jobs), moves to the weekly, monthly and termly machinery, then calendar skills, improvements and decisions, the dated pinch points such as December, travel days, an operation and a house move, variants for shift workers, big families, helpers and parents working away, and finally the specialist end of calendar feeds, an operations manual and the class rep role.

What repeats is a Sunday week-ahead session, a nightly tomorrow check, twice-weekly school message triage, a Tuesday forms check, a Friday paper tray clear-out, a six-week look-ahead late each month, a termly reset, a late-summer build of the school year and a yearly logistics review. The Household chores, Meeting notes, Purchase decision, Trip and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
