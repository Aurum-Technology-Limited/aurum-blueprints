---
id: relationships.friend-group-gatherings-reunions
name: Friend Group Gatherings & Reunions
description: "A friend group that keeps meeting: a roster, a planning thread, an organiser rota, fair money rules, standing gatherings and traditions, plus weekends away, school and university reunions and the occasions worth marking together."
category: personal
version: 1.0.0
tags: [relationships, friend-group-gatherings-reunions, everyone, reunions, group-trips, traditions, organising]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - operational-checklist
    - purchase-decision
    - trip
    - savings-goal
  pillars:
    - name: Relationships & Friendship
      emoji: "🤝"
      description: "The people who make a life: a partner, close friends, wider circles and new connections, kept in good repair through attention, honest conversations, shared plans and the occasions worth marking."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Friend Group Gatherings & Reunions
          description: "Organising regular gatherings, group trips and reunions so a friendship group stays connected as lives get busier."
          projects:
            - name: Friend group roster with partners, kids and needs
              description: |-
                ## Purpose
                A group of eight friends quickly becomes twenty people once partners and children count, and usually only the organiser knows who is vegetarian, who cannot manage stairs or who moved last spring. One roster with names, contact details, home towns, partners, children's ages and dietary or access needs makes every later plan faster and stops the same questions being asked in the chat each time.

                ## Milestones
                1. A roster listing every core member with phone, email and current town.
                2. Partners and children added, with ages where relevant.
                3. Dietary, access and alcohol preferences noted for each person, with their agreement.
                4. The roster saved where the current organiser and everyone on the rota can open it.

                ## Notes
                Ask before recording health or dietary details, and keep the roster out of the main group chat so it is not forwarded around.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A roster covering every core member, their partners and children, and their dietary and access needs, saved where each organiser can open it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every core member of the group and the town they live in now"
                - "Add partners and children with ages where the group includes them"
                - "Message each person privately to confirm dietary and access needs"
                - "Save the roster in a shared folder only the organisers can edit"
                - "Update the roster with moves, new partners and new babies @recurring(quarterly)"
            - name: Separate planning chat for the friend group
              description: |-
                ## Purpose
                Plans die in a busy group chat: a date question at 9am is buried under memes by lunchtime and half the group never sees it. A small planning thread, or a pinned announcements channel, kept for dates, bookings and money only means decisions stay findable and people who mute the banter still get the essentials.

                ## Milestones
                1. A planning thread or announcements channel created alongside the main chat.
                2. A short rule agreed that dates, bookings and payments go in the planning thread only.
                3. A pinned message holding the next gathering's date, place and cost.
                4. Every core member in the planning thread with notifications switched on.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separate planning thread exists with every core member in it and a pinned message showing the next gathering's date, place and cost."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Propose a planning-only thread in the main group chat"
                - "Create the thread and add every core member"
                - "Pin a message with the next gathering's date, place and cost"
                - "Ask everyone to switch on notifications for the planning thread only"
            - name: When the whole group last got together
              description: |-
                ## Purpose
                Groups often believe they meet regularly because subgroups do, while the full group has not been in one room for two years. Counting the last whole-group gatherings, and who missed each one, shows whether the problem is frequency, a few people always left out, or simply nobody organising.

                ## Milestones
                1. The last five whole-group gatherings listed with dates, taken from photos or chat history.
                2. Attendance for each one noted, including who was missing.
                3. The average gap between gatherings worked out in months.
                4. One sentence written on what the pattern shows.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of the last five whole-group gatherings with dates, attendance and the average gap, plus a one-sentence conclusion."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Scroll back through photos and chat history for whole-group gatherings"
                - "List the last five with their dates and who came"
                - "Work out the average gap in months between them"
                - "Write one sentence on what the pattern tells you"
            - name: Agreeing a gathering rhythm the group can keep
              description: |-
                ## Purpose
                Ambitious plans such as a monthly dinner for twelve tend to collapse by March, while a modest rhythm people actually keep holds a group together for decades. A layered rhythm, for example a small monthly meet for whoever is free, a whole-group gathering each quarter and one trip a year, gives everyone a shared expectation and makes missing one event less of a drama.

                ## Milestones
                1. Three rhythm options put to the group, with the time and cost each would ask of people.
                2. A rhythm chosen by poll or discussion and written in one sentence.
                3. The rhythm pinned in the planning thread.
                4. A date set to check after a year whether the rhythm still fits.

                ## Notes
                Pick the rhythm the busiest member can manage, then let others meet more often in smaller sets.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written gathering rhythm, chosen by the group, is pinned in the planning thread with a date for its first yearly review."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft three rhythm options with the time and cost each would ask"
                - "Put the options to the group in a poll"
                - "Pin the chosen rhythm in the planning thread"
                - "Ask the group whether the rhythm still fits their lives @recurring(yearly)"
            - name: Organiser rota so one person stops carrying it
              description: |-
                ## Purpose
                In most friend groups one person does all the inviting, booking and chasing, and when they burn out or move away the gatherings stop. A simple rota, with each willing member owning one gathering a quarter, spreads the work and gives quieter members the chance to choose what the group does.

                ## Milestones
                1. Everyone willing to organise listed, plus those who prefer to help rather than lead.
                2. A rota covering the next four gatherings published in the planning thread.
                3. A short handover note written with venues, budgets and contacts that work.
                4. The first rotated gathering run by someone other than the usual organiser.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published organiser rota names owners for the next four gatherings, and at least one gathering has been run by someone other than the usual organiser."
                cadence: rolling
              tasks:
                - "Ask in the planning thread who would take one gathering a quarter"
                - "Publish a rota naming the owner of each of the next four gatherings"
                - "Write a handover note with the venues, budgets and contacts that work"
                - "Hand the organiser role to the next person on the rota @recurring(quarterly)"
            - name: Shared calendar of the group's blackout dates
              description: |-
                ## Purpose
                Date polls waste a week when nobody knows that two people work every other weekend, one couple has a wedding in June and another has school holidays to plan around. A shared calendar holding everyone's known blackout dates lets the organiser offer only dates that might actually work.

                ## Milestones
                1. A shared calendar created with every member able to add to it.
                2. Known weddings, holidays, shift patterns and school breaks entered for the next six months.
                3. Past gatherings entered so the calendar doubles as a record.
                4. Members adding their own blackout dates without being chased.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared calendar holds every member's known blackout dates for the next six months and is checked by each organiser before posting a date poll."
                cadence: rolling
              tasks:
                - "Create a shared calendar and invite every member"
                - "Ask each person to add weddings, holidays and shift patterns"
                - "Enter the dates of past gatherings as a record"
                - "Remind the group to add any new blackout dates @recurring(monthly:25)"
            - name: Expense-splitting method the group agrees on
              description: |-
                ## Purpose
                Money quietly sinks group plans: the friend who drinks less pays for the friend who orders the bottle, and the organiser fronts a cabin deposit then waits months to be repaid. Agreeing up front how the group splits bills, deposits and shared food, and which app or method it uses, removes most of the awkwardness before it starts.

                ## Milestones
                1. A rule agreed for restaurant bills: split evenly, pay for what you order, or a mix.
                2. A rule agreed for deposits: who fronts them and how quickly they are repaid.
                3. One expense-splitting method or app chosen for shared costs.
                4. The rules pinned in the planning thread in three lines or fewer.

                ## Notes
                Paying for what you order is fairer when incomes differ a lot; splitting evenly is quicker when they do not. State the rule before the bill arrives, never after.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three written money rules, covering bills, deposits and the splitting method, are pinned in the planning thread."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down how the group currently splits bills and deposits"
                - "Propose rules for bills, deposits and repayment times"
                - "Agree one method or app for tracking shared costs"
                - "Pin the three money rules in the planning thread"
            - name: Anonymous budget check before planning anything big
              description: |-
                ## Purpose
                A ski week or a long weekend abroad can quietly exclude the member on parental leave or between jobs, and few people will say so in front of the group. An anonymous poll of what each person could comfortably spend on a night out, a weekend and a yearly trip sets ranges that keep everyone in.

                ## Milestones
                1. An anonymous form with three spending questions sent to every member.
                2. Responses from at least three quarters of the group.
                3. Three budget ranges written: a night out, a weekend and a yearly trip.
                4. The ranges shared with every organiser on the rota.

                ## Notes
                Set each range near the lower answers, not the average. The person who cannot afford the average is the one you will lose.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three agreed spending ranges, drawn from an anonymous poll answered by at least three quarters of the group, are shared with every organiser."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Build an anonymous form with three spending questions"
                - "Send the form privately to each member with a two-week deadline"
                - "Set budget ranges near the lower end of the answers"
                - "Share the ranges with everyone on the organiser rota"
            - name: Ideas bank of gatherings the group wants
              description: |-
                ## Purpose
                Ideas surface constantly in the chat, a lake swim, that new tapas place, a pub quiz, and are forgotten within the hour. Keeping them in one list, tagged by cost and season, means each organiser starts with twenty suggestions instead of a blank page.

                ## Milestones
                1. A shared list with columns for idea, rough cost per head, season and who suggested it.
                2. At least twenty ideas collected from the chat and from each member.
                3. The list linked in the planning thread.
                4. Ideas already used marked off with a date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared ideas list holds at least twenty gathering ideas tagged by cost and season, linked in the planning thread."
                cadence: rolling
              tasks:
                - "Start a shared list with idea, cost per head, season and suggester"
                - "Ask every member for two ideas they would actually turn up for"
                - "Link the list in the planning thread"
                - "Copy new ideas from the chat into the list @recurring(monthly:28)"
            - name: Monthly date poll for the next get-together
              description: |-
                ## Purpose
                Open questions like when is everyone free produce forty replies and no date. A poll with three to five specific options, a closing time and a rule that the date with most yeses wins settles the next gathering in a few days.

                ## Milestones
                1. A poll format agreed: three to five dates, closing in 72 hours.
                2. A rule agreed that the most popular date is booked even if someone cannot make it.
                3. The poll sent at the same point each month.
                4. Each month's chosen date added to the shared calendar within a day of closing.

                ## Notes
                Check the blackout calendar before choosing the options. Dates with a known clash only produce a poll nobody can win.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months running, the next gathering's date is fixed within 72 hours of a poll being posted."
                cadence: rolling
              tasks:
                - "Choose a polling tool that works inside your group chat"
                - "Agree the most-yeses-wins rule in the planning thread"
                - "Post a five-date poll that closes in 72 hours @recurring(monthly:3)"
                - "Add the winning date to the shared calendar as soon as the poll closes"
            - name: Standing monthly dinner on a fixed weeknight
              description: |-
                ## Purpose
                A fixed slot, such as the second Thursday of the month at the same restaurant, removes the scheduling entirely: people simply know. Whoever can come comes, numbers vary from three to twelve, and the habit keeps the group in touch between the bigger planned gatherings.

                ## Milestones
                1. A weeknight and a first venue agreed.
                2. A standing table arranged, or a venue chosen that takes walk-in groups.
                3. The slot added as a repeating event in the shared calendar.
                4. Three months of dinners held, with attendance noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing monthly dinner has run three months in a row on the agreed weeknight, with attendance recorded each time."
                cadence: rolling
              tasks:
                - "Agree a weeknight that suits most members"
                - "Ask a local restaurant about a standing table for up to twelve"
                - "Add the dinner as a repeating event in the shared calendar"
                - "Post the headcount question for this month's dinner @recurring(monthly:5)"
            - name: Quarterly whole-group day out
              description: |-
                ## Purpose
                Smaller meetups keep some friendships warm but leave others fading, and the group only feels like a group when everyone is in one place. A whole-group gathering once a quarter, planned at least six weeks ahead by the person on the rota, gives partners, children and far-flung members enough notice to come.

                ## Milestones
                1. Four quarterly dates held in the shared calendar.
                2. Each gathering announced at least six weeks ahead with place and cost.
                3. At least three quarters of the group at each one.
                4. Attendance and cost per head recorded after each gathering.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four whole-group gatherings held in a year, each announced six weeks ahead and attended by at least three quarters of the core group."
                cadence: cyclic
              tasks:
                - "Block four quarterly dates in the shared calendar"
                - "Announce the next gathering with place, time and cost six weeks ahead @recurring(quarterly)"
                - "Chase replies from anyone who has not answered two weeks before"
                - "Record who came and the cost per head afterwards"
            - name: Annual planning night for next year's dates
              description: |-
                ## Purpose
                Groups that pick next year's key dates together each autumn see far more of each other than groups that plan one event at a time. An evening spent with diaries open and the ideas bank on the table fixes the summer trip, the festive dinner and the quarterly gatherings before work and family fill the year.

                ## Milestones
                1. A planning evening held with most of the group, in person or on a call.
                2. Dates fixed for the year's trip, festive dinner and quarterly gatherings.
                3. An organiser named for each of those events.
                4. Decisions written up and posted in the planning thread within two days.

                ## Notes
                Start from the **Meeting notes** template to capture who owns what.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written plan for the coming year, naming dates and an organiser for each key gathering, is posted in the planning thread."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Propose an early autumn date for the planning night @recurring(yearly)"
                - "Bring the ideas bank and blackout calendar to the evening"
                - "Fix dates and an organiser for each of next year's key gatherings"
                - "Post the written year plan in the planning thread within two days"
            - name: Settling group expenses within a week
              description: |-
                ## Purpose
                Small debts left unsettled, the taxi, the extra round, the shared cake, turn into resentment surprisingly fast, especially for whoever always fronts the money. Settling every shared cost within seven days of a gathering, using the method the group agreed, keeps money from becoming a topic at all.

                ## Milestones
                1. Every shared cost from the last gathering logged in the agreed app or sheet.
                2. Balances settled within seven days.
                3. A monthly check that no balance is older than a month.
                4. No outstanding debt in the group older than thirty days for three months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No shared expense in the group remains unsettled for more than thirty days across three consecutive months."
                cadence: rolling
              tasks:
                - "Log the receipts from the last gathering in the shared expense app"
                - "Post each person's balance in the planning thread"
                - "Check for any balance older than a month @recurring(monthly:9)"
                - "Settle your own balance the day it is posted"
            - name: Shared photo album after every gathering
              description: |-
                ## Purpose
                Photos from a gathering end up scattered across eight phones, and in ten years nobody will have the full set. A shared album for each year, with everyone adding their best shots within a few days, builds a record of the group that becomes more valuable with every reunion.

                ## Milestones
                1. A shared album created for the current year, with every member able to add.
                2. Photos from the last three gatherings added.
                3. Each batch labelled with date and place.
                4. A yearly backup copied to storage outside the phone app.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared album for the current year holds photos from every gathering, with a backup copy made at year end."
                cadence: rolling
              tasks:
                - "Create a shared album for this year and invite every member"
                - "Add your own photos from the last three gatherings"
                - "Ask the group to add their best ten shots after each gathering"
                - "Download a backup of the year's album to separate storage @recurring(yearly)"
            - name: Noticing who has gone quiet in the group
              description: |-
                ## Purpose
                Members drift out of groups slowly: they miss two gatherings, stop replying in the chat, and by the time anyone notices they feel like outsiders. A short monthly scan of who has not attended or posted lately, followed by a private message rather than a group callout, catches drift while it is still easy to reverse.

                ## Milestones
                1. A short list of anyone who has missed the last two gatherings.
                2. A private, low-pressure message sent to each of them.
                3. Any practical barrier they mention, such as cost, timing or childcare, passed to the next organiser.
                4. At least one quiet member back at a gathering within three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every member who misses two gatherings in a row receives a private message within a month, and any barrier they mention reaches the next organiser."
                cadence: rolling
              tasks:
                - "Check attendance for anyone absent from the last two gatherings @recurring(monthly:22)"
                - "Message each quiet member privately with a specific invitation"
                - "Pass any cost, timing or childcare barrier to the next organiser"
                - "Note who came back and what helped"
            - name: Booking deposits and cancellation deadlines tracker
              description: |-
                ## Purpose
                Group bookings come with deposits, final numbers dates and cancellation cut-offs, and missing one can cost the group hundreds. A single tracker listing every booking with its deadlines means the organiser is not relying on memory, and a handover to the next organiser loses nothing.

                ## Milestones
                1. A tracker with booking, supplier contact, deposit paid, final numbers date and cancellation deadline.
                2. Every current booking entered.
                3. Reminders set a week before each deadline.
                4. No deposit lost to a missed deadline for a year.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every live group booking sits in one tracker with its deposit, final numbers date and cancellation deadline, and no deposit is lost for a year."
                cadence: rolling
              tasks:
                - "Set up a tracker with columns for each booking deadline"
                - "Enter every current booking with the supplier's contact details"
                - "Set a calendar reminder a week before each deadline"
                - "Review upcoming deadlines in the tracker @recurring(monthly:14)"
            - name: Seasonal traditions calendar for the group
              description: |-
                ## Purpose
                Traditions do the organising for you: a midsummer picnic, an autumn hike, a winter curry night and a spring walk need no debate about whether to meet, only when. Fixing one tradition per season gives the year a shape that members look forward to and protect in their own diaries.

                ## Milestones
                1. One tradition chosen for each season, with a rough date.
                2. Each tradition given a regular organiser or added to the rota.
                3. All four traditions in the shared calendar for the coming year.
                4. Each tradition held at least once.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four seasonal traditions are named, dated in the shared calendar and each held at least once within a year."
                cadence: cyclic
              tasks:
                - "List traditions the group already has, even unofficial ones"
                - "Agree one tradition for each season"
                - "Add all four to the shared calendar with an organiser"
                - "Confirm the date of the next seasonal tradition @recurring(quarterly)"
            - name: Making group decisions without a fifty-message thread
              description: |-
                ## Purpose
                Groups stall when every choice is open to everyone, with venue, date, food and budget debated at once until people give up. A few techniques, offering two or three options instead of an open question, setting a closing time and letting the organiser decide ties, cut planning time dramatically and are worth learning on purpose.

                ## Milestones
                1. Three decision techniques written down: limited options, closing times and the organiser's casting vote.
                2. The techniques shared with everyone on the organiser rota.
                3. One gathering planned using only closed questions and deadlines.
                4. A note on what worked added to the organiser handover.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One gathering planned end to end using closed options and deadlines, with the techniques written into the organiser handover note."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the three decision rules as short lines the rota can reuse"
                - "Plan the next gathering using only two-option questions"
                - "Set a closing time on every question you post"
                - "Add what worked to the organiser handover note"
            - name: Finding venues that seat ten or more
              description: |-
                ## Purpose
                Most restaurants will not take a walk-in party of twelve, and many that take bookings impose a set menu, a minimum spend or a service charge. A shortlist of local venues that handle groups well, with their booking rules and cost per head, saves each organiser an evening of phone calls.

                ## Milestones
                1. Six venues listed that seat ten or more at one table.
                2. Each venue's deposit, minimum spend, set menu and service charge noted.
                3. Step-free access and noise level noted for each.
                4. The shortlist added to the ideas bank.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shortlist of six group-friendly venues, each with booking rules and cost per head recorded, is linked from the ideas bank."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the group for venues where they have eaten in a big party"
                - "Call or email six venues about group bookings"
                - "Record deposit, minimum spend and set menu rules for each"
                - "Note step-free access and noise levels for each venue"
                - "Add the shortlist to the ideas bank"
            - name: Menus that work for mixed diets and non-drinkers
              description: |-
                ## Purpose
                Any group of ten now routinely includes a vegan, a coeliac, someone avoiding alcohol and a fussy six-year-old, and gatherings built around one cuisine or a pub crawl leave people out. Knowing what to ask venues, and how to plan shared food so everyone gets a proper meal, makes the group feel welcoming rather than merely tolerant.

                ## Milestones
                1. Dietary needs from the roster summarised in one line per person.
                2. A checklist of questions to ask any venue about allergens and alternatives.
                3. Two or three good non-alcoholic options planned for every gathering.
                4. One gathering held where every person had a full meal they could eat.

                ## Notes
                Allergies are a safety matter. Confirm arrangements with the venue in writing and never rely on a menu label alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A venue question checklist and a dietary summary exist, and one gathering has been held where every attendee had a full meal they could eat."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise dietary needs from the roster in one line per person"
                - "Write a checklist of allergen questions to ask any venue"
                - "Plan two non-alcoholic drinks options for the next gathering"
                - "Confirm allergy arrangements with the venue in writing"
            - name: Accessible venues for every member of the group
              description: |-
                ## Purpose
                Someone using a wheelchair, recovering from surgery, pregnant or pushing a buggy can be quietly excluded by a basement bar or a cliff-top walk. Learning what to check, from step-free entry and accessible toilets to seating, a quiet corner and transport links, means access is built in rather than an afterthought.

                ## Milestones
                1. Access needs from the roster confirmed with the people concerned.
                2. A short access checklist written for organisers.
                3. Every shortlisted venue checked against the list.
                4. Access details included in every invitation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An access checklist sits in the organiser handover, every shortlisted venue has been checked against it, and invitations state access details."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask members with access needs what makes a venue work for them"
                - "Write a six-point access checklist for organisers"
                - "Check each shortlisted venue against the checklist"
                - "Add a line on access to every invitation"
            - name: Activities that mix the group beyond the usual pairs
              description: |-
                ## Purpose
                At larger gatherings the same pairs and couples cluster together, partners stay on the edge and newer members never really join in. A small repertoire of mixers, such as a seating plan, a team quiz, a walk with rotating pairs or a shared cooking task, helps the group feel like one group again.

                ## Milestones
                1. Five mixing activities noted, with group size and time needed.
                2. One activity tried at the next whole-group gathering.
                3. Feedback gathered from at least two partners or newer members.
                4. The best two activities added to the organiser handover.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five mixing activities written down, one used at a whole-group gathering, and the best two added to the organiser handover."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List five activities that mix people in groups of eight to twenty"
                - "Try one at the next whole-group gathering"
                - "Ask a partner or newer member how the evening felt"
                - "Add the two that worked best to the handover note"
            - name: Rooms, transport and timings for group trips
              description: |-
                ## Purpose
                Group trips go wrong on logistics more often than on destination: who shares a room with whom, who drives, who arrives late on Friday and who leaves early. Learning how experienced trip organisers handle room allocation, transport pooling and arrival windows makes the first big trip far smoother.

                ## Milestones
                1. A room allocation method chosen: by couple, by budget or by sleep habits.
                2. A transport plan template covering drivers, train times and airport pick-ups.
                3. A simple arrival and departure grid built for one trip.
                4. Lessons from the last group trip written down.

                ## Notes
                Rooms cause more friction than anything else. Price the best room higher, or rotate it, rather than leaving it to whoever arrives first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A room allocation method, a transport plan template and an arrival grid are written and stored for the next trip organiser."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the last trip organiser what went wrong with logistics"
                - "Choose a fair method for allocating rooms and beds"
                - "Draft a transport plan template with drivers and pick-ups"
                - "Build an arrival and departure grid for the next trip"
            - name: Chasing money owed without souring the group
              description: |-
                ## Purpose
                Someone who fronted a cabin deposit and is still owed money three months later starts to resent the whole group, yet raising it feels petty. A few neutral, factual ways to chase, a balance post rather than a personal callout and a deadline tied to the next booking, keep money businesslike and friendships intact.

                ## Milestones
                1. Three neutral message templates for chasing written.
                2. A rule agreed that balances are posted in the planning thread, never named in the main chat.
                3. One outstanding debt chased and settled using the templates.
                4. A note added to the handover on what to do if someone cannot pay.

                ## Notes
                If someone is struggling, offer a private payment plan rather than public pressure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three chasing templates written, used to settle at least one outstanding debt, and stored in the organiser handover."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the agent to draft three neutral messages for chasing a payment"
                - "Agree that balances are posted in the planning thread only"
                - "Use a template to chase the oldest outstanding balance"
                - "Add a private payment-plan option to the handover note"
            - name: Choosing a group planning and expense app
              description: |-
                ## Purpose
                Plenty of groups run on a mix of chat polls, spreadsheets and bank transfers with references nobody understands. Comparing two or three apps for polls, shared calendars and expense splitting against what the group needs (free, works on every phone, handles other currencies if you travel) settles the toolset once.

                ## Milestones
                1. Three or four needs listed, such as polls, expenses, currencies and calendar sync.
                2. Two or three apps tried on a real gathering.
                3. One app chosen and everyone invited.
                4. The old spreadsheet or method retired.

                ## Notes
                Start from the **Purchase decision** template. Free tiers usually suffice for friend groups; check the limits on members and expense entries.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One app chosen against written criteria, with every core member signed up and the previous method retired."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what the group needs the app to do"
                - "Try two apps on the next gathering's costs"
                - "Choose one and invite every member"
                - "Move any open balances into the chosen app"
            - name: Restarting a friend group that stopped meeting
              description: |-
                ## Purpose
                Many groups stop meeting not from any falling out but because the organiser had a baby, moved or ran out of energy, and two years pass. One low-stakes invitation with a fixed date, plus a short message acknowledging the gap, usually brings most people back.

                ## Milestones
                1. Two or three members agreed to co-host the restart.
                2. A low-cost, easy-to-reach first gathering with a fixed date.
                3. A warm invitation sent to everyone, including those who drifted furthest.
                4. At least half the group at the restart gathering.
                5. A second date agreed before everyone leaves.

                ## Notes
                Fix the date yourself rather than polling for it. A restart that begins with a date poll often dies in the poll.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A restart gathering held with at least half the old group, and a second date agreed before it ends."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Message two old members to ask if they will co-host a restart"
                - "Pick a fixed date and an easy central venue"
                - "Send a warm invitation that mentions the gap lightly"
                - "Agree the next date before the restart gathering ends"
            - name: Planning around friction between two members
              description: |-
                ## Purpose
                When two members have fallen out, every gathering becomes a question of who to invite and where to seat them, and the rest of the group tiptoes. Organisers can avoid taking sides by asking each person privately how they want shared events handled, then choosing formats that give everyone space.

                ## Milestones
                1. A private conversation held with each of the two members about upcoming gatherings.
                2. A shared understanding that both stay invited unless one chooses otherwise.
                3. Formats chosen for the next gatherings that reduce forced contact, such as larger venues or activities.
                4. No ultimatum or side-taking posted in the group chat.

                ## Notes
                This is about the gatherings, not mediating the dispute. If they want to repair things, that is their conversation to have.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Each member involved has been spoken to privately, both remain invited, and the next two gatherings ran in formats both could attend."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Message each member privately to ask how they want gatherings handled"
                - "Agree that both stay invited unless one opts out"
                - "Choose a larger or activity-based format for the next gathering"
                - "Brief the next organiser on the arrangement in confidence"
            - name: Welcoming new partners into the group
              description: |-
                ## Purpose
                Joining a long-established friend group with years of in-jokes is daunting, and partners who feel like outsiders often steer their friend away from gatherings. A few deliberate habits, introductions with context, a format suited to newcomers and two people tasked with looking after them, help new people belong quickly.

                ## Milestones
                1. Each new partner added to the roster and introduced in the chat.
                2. A gathering format chosen that suits newcomers, such as an activity rather than an evening of old stories.
                3. Two members tasked with chatting to the newcomer at their first gathering.
                4. The newcomer invited to suggest or host a future gathering.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new partner in the past year has been introduced, given two named contacts at their first gathering and invited to suggest a future plan."
                cadence: rolling
              tasks:
                - "Introduce a new partner in the chat with two lines of context"
                - "Ask two members to look after the newcomer at their first gathering"
                - "Pick an activity rather than a reminiscing night for their first event"
                - "Invite the newcomer to suggest the next gathering"
            - name: Deciding when the group meets in smaller sets
              description: |-
                ## Purpose
                Once a group passes about twelve people with partners, whole-group evenings become noisy, costly and hard to schedule. Deciding deliberately which events stay whole-group and which can run in smaller sets, open to anyone, keeps the group together without forcing every plan through twenty diaries.

                ## Milestones
                1. Current group size with partners and children counted.
                2. A list of which gatherings must be whole-group and which can be open small meets.
                3. A rule that small meets are posted openly so nobody feels excluded.
                4. The decision written into the pinned gathering rhythm.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule lists which gatherings stay whole-group and which run as openly posted small meets, added to the pinned rhythm."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the group with partners and children"
                - "Sort your usual gatherings into whole-group and small-meet lists"
                - "Agree that small meets are always posted openly in the chat"
                - "Add the rule to the pinned gathering rhythm"
            - name: Rotating gathering formats beyond the usual pub
              description: |-
                ## Purpose
                Meeting only ever in the same pub slowly loses the members who do not drink, have young children or find loud rooms tiring. Rotating through formats, a daytime walk, a cookery class, a picnic, a quiz, a cinema trip, brings different people back and gives the group new stories.

                ## Milestones
                1. The last six gatherings listed by format.
                2. Four new formats chosen from the ideas bank.
                3. Each new format tried at least once over the next six months.
                4. Attendance compared between old and new formats.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four new gathering formats tried within six months, with attendance compared against the usual format."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the format of each of the last six gatherings"
                - "Pick four new formats from the ideas bank"
                - "Schedule one new format into each of the next four gatherings"
                - "Compare attendance between old and new formats"
            - name: Reducing no-shows and late cancellations
              description: |-
                ## Purpose
                Three people dropping out on the day of a booked dinner for twelve leaves the organiser paying for empty seats and feeling taken for granted. A clear, friendly policy, deposits for paid bookings, a cut-off for changes and a reminder 48 hours before, cuts no-shows without turning the group into a business.

                ## Milestones
                1. No-shows over the last six gatherings counted.
                2. A cancellation policy agreed for paid bookings.
                3. A 48-hour reminder sent before each gathering.
                4. No-shows halved over the next six gatherings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A cancellation policy is pinned, 48-hour reminders go out before each gathering, and no-shows fall by half over the next six gatherings."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count no-shows and late cancellations over the last six gatherings"
                - "Propose a deposit and cut-off policy for paid bookings"
                - "Pin the agreed policy in the planning thread"
                - "Send a 48-hour reminder before the next gathering"
            - name: Long weekend away with the friend group
              description: |-
                ## Purpose
                Weekends in a rented house are where most groups make the memories they still talk about years later, and also where budgets, room arguments and unequal chores surface. Booking four to six months ahead, inside the agreed budget range and with rooms allocated before arrival, keeps the weekend about the people.

                ## Milestones
                1. Dates fixed and a house or cabin booked within the weekend budget range.
                2. Deposits collected from everyone within a week of booking.
                3. Rooms, meals and chores allocated before arrival.
                4. The weekend held, with costs settled within seven days.

                ## Notes
                Start from the **Trip** template. Check the property's cancellation policy and whether a damage deposit is held.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A group weekend held in a booked property within the agreed budget range, with all costs settled within seven days of returning."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Post three possible weekends and a budget per head"
                - "Shortlist three properties that sleep the whole group"
                - "Collect deposits from everyone before booking"
                - "Allocate rooms, meals and chores in a shared sheet"
                - "Settle all shared costs within a week of returning"
            - name: School year-group reunion
              description: |-
                ## Purpose
                Ten, twenty or thirty years after leaving school, a reunion draws people who have not met since, and it needs more structure than a friends' dinner: a guest list built from scattered contacts, a venue for 40 to 150, tickets and a loose programme. Starting eight to twelve months ahead gives time to find people and for them to plan travel.

                ## Milestones
                1. A small organising group of three to five classmates formed.
                2. A guest list with contact details for at least 60 percent of the year group.
                3. A venue booked and a ticket price set that covers costs.
                4. Invitations sent at least four months ahead.
                5. The reunion held, with a contact list shared afterwards with consent.

                ## Notes
                Ask your old school whether it keeps alumni contacts or can forward an invitation; data rules often stop it handing out details directly.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A year-group reunion held with tickets covering costs, after invitations reached at least 60 percent of the year group."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Message three classmates to ask if they will help organise"
                - "Start a guest list from old photos, yearbooks and social media"
                - "Ask the school whether it can forward an invitation to alumni"
                - "Book a venue and set a ticket price that covers costs"
                - "Share a consented contact list after the event"
            - name: University friends reunion weekend
              description: |-
                ## Purpose
                University groups scatter across countries after graduation, so a reunion back in the old city, with a walk past the halls, a visit to the old pub and a long dinner, is often the one time everyone is together. Fixing it six months ahead and listing accommodation at several price points lets people travel from far away.

                ## Milestones
                1. A weekend fixed six months ahead with most of the group available.
                2. Accommodation options listed at three price points.
                3. A loose programme of a Friday meet-up, a Saturday day out and a Saturday dinner.
                4. The reunion held with at least two thirds of the group.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A reunion weekend in the old university city held with at least two thirds of the group, after a date fixed six months ahead."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Post a poll for weekends six months out"
                - "List hotels, hostels and spare rooms at three price levels"
                - "Book a table for the Saturday dinner"
                - "Ask the old department whether the group can visit the campus"
            - name: Joint milestone birthday trip for the group
              description: |-
                ## Purpose
                When most of the group turn 30, 40 or 50 within the same year, one shared trip often beats eight separate parties and gives the year a focus. Agreeing the trip early, with a savings plan and a destination everyone can reach, avoids the milestone turning into an expensive obligation.

                ## Milestones
                1. Agreement that the group will mark the milestone with one shared trip.
                2. A destination and dates within the agreed yearly trip budget.
                3. A monthly savings amount per person set.
                4. The trip taken, with each person's birthday marked during it.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shared milestone trip taken within the agreed budget, with each person's birthday marked during the trip."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the group whether one shared trip beats separate parties"
                - "Shortlist three destinations within the yearly trip budget"
                - "Agree a monthly amount each person sets aside"
                - "Plan one moment on the trip for each person's birthday"
            - name: Celebrating a round anniversary of the group
              description: |-
                ## Purpose
                Friends who have met regularly since school or university share a history worth celebrating: the first trip, the weddings, the friends lost, the children who now come along. Marking the group's tenth, twentieth or thirtieth year with a dinner, a slideshow and a few short speeches says out loud what the group means to its members.

                ## Milestones
                1. The group's founding year agreed, even roughly.
                2. A dinner booked close to the anniversary.
                3. A slideshow of photos across the years assembled.
                4. Two or three members invited to say a few words.
                5. A plan agreed for marking the next round anniversary.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An anniversary dinner held with a slideshow covering the group's history and at least two short speeches."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the year the group first came together"
                - "Book a dinner close to the anniversary"
                - "Collect old photos for a slideshow from every member"
                - "Invite two or three members to say a few words"
            - name: Annual festive dinner for the whole group
              description: |-
                ## Purpose
                December books up by early autumn, and a group that leaves its festive dinner until November ends up meeting in January or not at all. Booking the venue by the end of September, collecting deposits and fixing a gift rule, such as a small secret gift exchange or no gifts at all, keeps it a highlight rather than a scramble.

                ## Milestones
                1. Date fixed and venue booked by the end of September.
                2. Deposits collected by the venue's deadline.
                3. A gift rule agreed and posted.
                4. Final numbers and dietary needs sent to the venue.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The festive dinner booked by the end of September, with deposits paid, a gift rule agreed and final numbers sent to the venue on time."
                cadence: cyclic
              tasks:
                - "Post festive dinner date options in early September @recurring(yearly)"
                - "Book a venue that can seat the whole group"
                - "Agree a gift rule, such as a small secret gift exchange"
                - "Send final numbers and dietary needs to the venue by its deadline"
            - name: Week-long group holiday abroad
              description: |-
                ## Purpose
                Spending a week abroad with eight or more friends is the biggest thing many groups do, and it needs a clear budget, passports and insurance checked and a plan for people arriving on different flights. Splitting the jobs between three or four people, covering accommodation, transport, activities and money, keeps any one organiser from carrying it.

                ## Milestones
                1. Destination, dates and budget agreed at least six months ahead.
                2. Jobs split: accommodation, transport, activities and money.
                3. Passport validity and travel insurance confirmed by every traveller.
                4. A shared itinerary with flights, addresses and emergency contacts.
                5. The holiday taken and costs settled within two weeks.

                ## Notes
                Start from the **Trip** template. Leave free days in the plan; groups tire quickly of a packed itinerary.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A group holiday taken with passports and insurance confirmed for every traveller and all shared costs settled within two weeks."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Post a shortlist of three destinations with rough costs"
                - "Split accommodation, transport, activities and money between four people"
                - "Ask every traveller to confirm passport validity and insurance"
                - "Build a shared itinerary with flights, addresses and emergency contacts"
            - name: Family-friendly gatherings once children arrive
              description: |-
                ## Purpose
                When half the group has young children, evening pub plans stop working and the parents quietly drop out. Shifting some gatherings to daytime, child-friendly places such as a park with a café, a farm or a big garden, while keeping adults-only nights with enough notice for childcare, keeps parents and non-parents in the same group.

                ## Milestones
                1. Members with children asked which times and places work.
                2. Two daytime child-friendly gatherings added to the year plan.
                3. Adults-only gatherings announced with at least four weeks' notice for childcare.
                4. Non-parents asked whether the balance still works for them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The year's plan includes at least two child-friendly daytime gatherings, and every adults-only event is announced four weeks ahead."
                cadence: rolling
              tasks:
                - "Ask parents in the group which times and venues work with children"
                - "Add two daytime child-friendly gatherings to the year plan"
                - "Announce adults-only evenings at least four weeks ahead"
                - "Ask non-parents whether the mix of gatherings still suits them"
            - name: Reunions for a group scattered across cities
              description: |-
                ## Purpose
                Once members live in four or five different cities, regular dinners give way to one or two reunions a year, and the hardest question is where. Rotating the host city, or choosing a central point by total travel time, shares cost and effort fairly instead of always asking the same people to travel.

                ## Milestones
                1. A list of where every member now lives.
                2. A host rotation or central-point method agreed.
                3. Travel time and cost compared for two or three candidate cities.
                4. The next reunion fixed in the chosen city at least four months ahead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A host-city method agreed, and the next reunion fixed at least four months ahead in a city chosen by that method."
                cadence: cyclic
              tasks:
                - "List the city every member now lives in"
                - "Compare travel time and cost for three candidate cities"
                - "Agree to rotate the host city or use a central point"
                - "Pick the next reunion city and date @recurring(yearly)"
            - name: Hybrid gatherings with friends dialling in from abroad
              description: |-
                ## Purpose
                Members who move abroad usually stop being invited simply because they cannot attend, and within two years they feel like former members. Bringing them in by video for part of a gathering, a toast, a quiz round or a slot at the start, keeps them in the group's life until they can visit.

                ## Milestones
                1. A list of members abroad with their time zones.
                2. A short video segment planned into one gathering, at a sensible hour for them.
                3. A speaker or laptop set up at the venue that everyone can hear.
                4. Members abroad told about every whole-group gathering, even when they cannot come.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Members abroad join at least two whole-group gatherings a year by video, scheduled at a reasonable hour in their time zone."
                cadence: rolling
              tasks:
                - "List members abroad with their time zones"
                - "Plan a 20-minute video slot into the next whole-group gathering"
                - "Test the venue's wifi and bring a speaker"
                - "Send members abroad the date of every whole-group gathering"
            - name: Low-cost gatherings for a group on tight budgets
              description: |-
                ## Purpose
                Students, new parents, people between jobs and anyone saving for a home can find a run of restaurant dinners and gig tickets unaffordable, and they drop out first. A rotation of free or very cheap formats, bring-a-dish picnics, free museum days, a free Saturday park run and coffee, means money never decides who turns up.

                ## Milestones
                1. A list of ten free or low-cost formats near most members.
                2. A low-budget threshold per head agreed with the group.
                3. At least one gathering in three held under that threshold.
                4. A cheaper alternative offered whenever a big expense is planned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one in three gatherings over six months cost less per head than the group's agreed low-budget threshold."
                cadence: rolling
              tasks:
                - "List ten free or cheap gathering formats near most members"
                - "Agree a low-budget threshold per head with the group"
                - "Plan every third gathering under that threshold"
                - "Offer a cheaper option whenever a big-ticket event is proposed"
            - name: Reunions for an older group in later life
              description: |-
                ## Purpose
                For friends in their sixties and beyond, gatherings bring their own considerations: daytime timing, step-free venues, not driving at night, members caring for a spouse, and the knowledge that each reunion grows more precious. Planning around those realities, and actively including widowed members, keeps the group meeting for many more years.

                ## Milestones
                1. Members asked about timing, travel and care commitments.
                2. Daytime gatherings at step-free venues near public transport set as the default.
                3. Lifts arranged for anyone who no longer drives.
                4. Widowed or caring members personally invited and followed up.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A year of gatherings held mostly in the daytime at step-free venues, with lifts arranged for anyone who no longer drives."
                cadence: rolling
              tasks:
                - "Ask each member about timing, travel and care commitments"
                - "Default to lunchtime gatherings at step-free venues near transport"
                - "Arrange lifts for members who no longer drive"
                - "Phone widowed or caring members personally before each gathering"
            - name: Gathering in memory of a friend the group has lost
              description: |-
                ## Purpose
                Losing a member of the group leaves friends wanting to do something together beyond the funeral, and the first anniversary is a hard date to face alone. A memorial gathering arranged with the family's blessing, and a decision on whether to mark the date each year, gives the group a way to grieve together.

                ## Milestones
                1. The family's wishes about a gathering checked privately.
                2. A date, place and simple format agreed.
                3. Photos and stories collected from the group.
                4. The gathering held, and a decision recorded on an annual remembrance.

                ## Notes
                Keep the family informed and invited, and let them set the tone. Some prefer a quiet event; others welcome a celebration of the person's life.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A memorial gathering held with the family's blessing, and a decision recorded on whether the group marks the date each year."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Contact the family privately to ask how they feel about a gathering"
                - "Choose a date, place and simple format"
                - "Collect photos and stories from every member"
                - "Remind the group of the remembrance date a week ahead @recurring(yearly)"
            - name: Bringing the gathering to a member who cannot travel
              description: |-
                ## Purpose
                Sometimes a member is seriously ill, recovering from an operation or caring full time at home, and cannot come to the group, so the group goes to them. Short, well-planned visits, a few people at a time with food brought in and timing set by the member, keep them part of things without exhausting them.

                ## Milestones
                1. The member or their household asked what kind of visit would help.
                2. A small visiting rota agreed with times that suit them.
                3. Food and practical needs covered so the household does no hosting.
                4. Visits held, with the rota adjusted to how the member feels.

                ## Notes
                Keep visits short and let the member or their carer cancel at no notice. Keep their health details out of the group chat.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A visiting rota agreed with the member's household, with at least two small group visits held at times they chose."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the member or their household what kind of visit would help"
                - "Agree a small visiting rota with times that suit them"
                - "Arrange food so the household has nothing to prepare"
                - "Adjust the rota after each visit based on how they felt"
            - name: Running a large reunion with an organising committee
              description: |-
                ## Purpose
                Reunions for 150 or more, a whole university year or a sports club's anniversary, need a small committee with clear roles, a budget, ticketing and a timeline of nine to twelve months. Running it like a small event, with a treasurer and written decisions, protects the organisers when money and expectations get complicated.

                ## Milestones
                1. A committee of four to six with named roles: chair, treasurer, venue and communications.
                2. A budget with a break-even ticket price and a contingency.
                3. A dedicated account or ticketing platform holding all event money.
                4. A timeline from venue booking to post-event thank-yous.
                5. The event delivered and final accounts shared with the committee.

                ## Notes
                Start from the **Operational checklist** template for the run sheet. Never mix event money with personal accounts.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A large reunion delivered at or under budget, with all money held in a dedicated account and final accounts shared with the committee."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Recruit four to six people and agree roles"
                - "Draft a budget with a break-even ticket price and contingency"
                - "Set up a dedicated account or ticketing page for all money"
                - "Hold a committee check-in on the timeline @recurring(monthly:16)"
                - "Share final accounts with the committee after the event"
            - name: Friend group memory book or time capsule
              description: |-
                ## Purpose
                Fifteen or twenty years together leaves a group with a shared history that lives only in people's heads and phones. A printed memory book of photos, stories and quotes, or a time capsule opened at a future reunion, turns it into something the group, and in time their children, can hold.

                ## Milestones
                1. A format chosen: printed book, digital archive or time capsule.
                2. Contributions collected from at least three quarters of the group.
                3. The book designed and printed, or the capsule sealed with an opening date.
                4. Copies or the capsule presented at a gathering.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A memory book printed or time capsule sealed, with contributions from at least three quarters of the group, presented at a gathering."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose between a printed book, a digital archive and a time capsule"
                - "Ask each member for five photos and one story"
                - "Ask the agent to arrange the stories into a running order"
                - "Present the finished book or capsule at a gathering"
                - "Add the year's best photos and stories to the archive @recurring(yearly)"
            - name: Pooled savings fund for a future group trip
              description: |-
                ## Purpose
                Big trips two years out, a villa for a joint 40th or a reunion abroad, are far easier when everyone puts a small amount aside each month than when deposits land as a lump. A pooled fund, held transparently by a named treasurer or in a shared savings account, makes the trip realistic for members on tighter budgets.

                ## Milestones
                1. A target total, monthly amount per person and trip date agreed.
                2. A holding method chosen with every member able to see the balance.
                3. A treasurer named and a written rule for refunds if someone drops out.
                4. Monthly contributions running for six months without gaps.

                ## Notes
                Start from the **Savings goal** template. Agree the drop-out rule before anyone pays in; it is the question that causes most disputes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pooled trip fund with a written drop-out rule has received six consecutive months of contributions from every participating member."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree the target, monthly amount and trip date with the group"
                - "Choose how the fund is held so everyone can see the balance"
                - "Write a drop-out and refund rule before anyone pays in"
                - "Post the fund balance in the planning thread @recurring(monthly:1)"
            - name: Tracking down lost members before a reunion
              description: |-
                ## Purpose
                For any reunion more than ten years on, a third of the people you want are hard to find: changed surnames, moves abroad, no social media. A methodical search, mutual friends first, then professional networks, alumni offices and old addresses, finds most of them and respects anyone who chooses not to be found.

                ## Milestones
                1. A list of missing people with their last known details.
                2. Each missing person assigned to whoever knew them best.
                3. Contact attempts logged with the source used.
                4. At least half of the missing list contacted or confirmed unreachable.
                5. Anyone who declines removed from further contact.

                ## Notes
                Use only public routes and mutual friends. If someone does not reply after two messages, stop.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "At least half of the missing list contacted or confirmed unreachable, with every attempt logged and any refusals respected."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every missing person with their last known details"
                - "Assign each missing person to whoever knew them best"
                - "Search through mutual friends and professional networks first"
                - "Log every contact attempt and stop after two unanswered messages"
---

# Friend Group Gatherings & Reunions

This area is for whoever ends up organising the friend group, or wants that job shared more fairly, so a circle from school, university or an old flatshare keeps meeting as careers, children and moves pull it apart. It starts with the foundations (a roster, a planning thread, a gathering rhythm, an organiser rota and money rules), then the standing machinery of date polls, monthly dinners and quarterly days out, the skills of group decisions, venues and inclusive menus, fixes for stalled or strained groups, the trips and reunions themselves, versions for parents, scattered and older groups, and finally committee-run reunions and the group's long memory.

What repeats is a date poll on the 3rd, a dinner headcount on the 5th, an expense check on the 9th, a booking deadline review on the 14th, a look at who has gone quiet on the 22nd, blackout dates on the 25th and new ideas on the 28th, plus quarterly whole-group days, seasonal traditions and organiser handovers, and a yearly planning night, festive dinner and reunion. The Meeting notes, Operational checklist, Purchase decision, Trip and Savings goal templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
