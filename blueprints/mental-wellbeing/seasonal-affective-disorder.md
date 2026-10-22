---
id: mental-wellbeing.seasonal-affective-disorder
name: Seasonal Affective Disorder Plan
description: "A plan for the darker months: light therapy chosen and used safely, more daylight in the working day, a winter activity and social rhythm, and support from your doctor before seasonal low mood takes hold."
category: personal
version: 1.0.0
tags: [mental-wellbeing, seasonal-affective-disorder, everyone, light-therapy, daylight, winter, seasonal-depression]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - habit-tracker
    - metrics-log
    - household-chores
    - weekly-meal-plan
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Seasonal Affective Disorder Plan
          description: "Preparing for darker months with light therapy, daylight time, activity plans and early support for seasonal low mood."
          projects:
            - name: Past winters seasonal look-back
              description: |-
                ## Purpose
                Seasonal depression is usually recognised by its pattern rather than any single bad month: low mood, oversleeping, cravings for starchy food and withdrawal that arrive with the shorter days and lift in spring, two or more years running. Looking back over the last three winters, using calendars, photos, messages and sick days, gives you and your doctor evidence instead of a vague sense that winter is hard.

                ## Milestones
                1. Each of the last three winters given a line on when the struggle started and when it lifted.
                2. The main changes each winter noted: sleep, appetite, energy, social contact and work.
                3. Sick days, cancelled plans and dropped hobbies in those months counted from records.
                4. A one-paragraph summary of the pattern ready to show a doctor.

                ## Notes
                A questionnaire such as the Seasonal Pattern Assessment Questionnaire can help you describe the pattern, but it is a prompt for a conversation, not a diagnosis.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page summary of the last three winters, showing onset, lowest and recovery months and the main changes, is ready to share with a doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Scroll back through last winter's calendar and photos and note the low weeks"
                - "Count sick days and cancelled plans in each of the last three winters"
                - "Write one line per winter on when it started and when it lifted"
                - "Ask the agent to turn your notes into a one-page seasonal summary"
            - name: First doctor's appointment about a winter pattern
              description: |-
                ## Purpose
                A doctor can only treat what has been described clearly, and a ten-minute appointment goes quickly. Booking it in early autumn, with your three-winter summary in hand and three questions written down, makes it far more likely you leave with a plan rather than a suggestion to wait and see.

                ## Milestones
                1. An appointment booked before the days shorten sharply.
                2. Your seasonal summary and current symptoms on one page, ready to hand over.
                3. Questions written on light therapy, talking therapy and whether other causes need ruling out.
                4. The doctor's view and the agreed next steps written down the same day.

                ## Notes
                Low energy and oversleeping can have physical causes such as an underactive thyroid or anaemia, so do not be surprised if blood tests come first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An appointment has been held with your seasonal summary, and the doctor's conclusion and next steps were written down within a day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a doctor's appointment and ask for a longer slot if your practice offers one"
                - "Write three questions about seasonal depression and how it is treated"
                - "Bring the seasonal summary and hand over a copy"
                - "Write the agreed next steps in your notes the same afternoon"
            - name: Local daylight calendar
              description: |-
                ## Purpose
                Knowing that your town gets under eight hours of daylight for six weeks, or that sunrise falls after you leave for work for three months, turns winter from a mood into a timetable you can plan around. A simple calendar of sunrise, sunset and clock change dates shows exactly which weeks need the most light and support.

                ## Milestones
                1. Sunrise and sunset times for your location gathered for each month of the year.
                2. The weeks with the shortest days and any clock change dates marked.
                3. The months when you leave or arrive home in the dark highlighted.
                4. The calendar pinned where you plan your week.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A twelve-month daylight calendar for your location, showing sunrise, sunset, clock changes and dark commute months, is pinned where you plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up sunrise and sunset times for your town for each month"
                - "Mark the clock change dates and the shortest days"
                - "Highlight the months you travel to or from work in the dark"
                - "Add next month's sunrise and sunset times to your planner @recurring(monthly:28)"
            - name: Personal autumn early warning signs
              description: |-
                ## Purpose
                Most people with a seasonal pattern have early signs that show weeks before the low mood itself: hitting snooze more, skipping evening plans, craving bread and sweets, letting messages go unanswered. Listing yours from past winters means you, and someone close to you, can act on the first two signs rather than the tenth.

                ## Milestones
                1. Five to eight early signs listed from your own past winters.
                2. Each sign written as something another person could notice.
                3. A first response agreed for when two signs appear in the same week.
                4. The list shared with one trusted person.

                ## Notes
                Keep the signs behavioural and specific. Sleeping past nine at weekends is easier to spot than feeling low.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of five to eight early warning signs, with an agreed first response, has been shared with one person."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List what changed first in your last two winters"
                - "Rewrite each sign as something another person could see"
                - "Decide what you will do when two signs appear in one week"
                - "Share the list with one trusted person"
                - "Reread the warning signs list at the start of autumn @recurring(yearly)"
            - name: Light therapy safety check with your clinician
              description: |-
                ## Purpose
                Bright light lamps are sold without prescription, but they are not right for everyone without advice: some eye conditions, medicines that increase light sensitivity and a history of bipolar disorder all need a professional's view first. A short check before the first session, with your medicines and eye history listed, means you start with the timing and limits your clinician is happy with.

                ## Milestones
                1. Your current medicines and supplements listed, including anything bought over the counter.
                2. Any eye conditions, eye surgery or past episodes of mania or hypomania noted.
                3. Your doctor or pharmacist asked whether light therapy is suitable for you.
                4. Their advice on timing, session length and side effects to watch for written down.

                ## Notes
                Mild headaches, eye strain or feeling wired are worth reporting. Feeling unusually high, needing much less sleep or having racing thoughts after starting light therapy needs a prompt call to your doctor.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your doctor or pharmacist has confirmed whether light therapy suits you, and their advice on timing and side effects is written in your winter plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every medicine and supplement you take, as named on the labels"
                - "Note any eye conditions or past episodes of mania"
                - "Ask your doctor or pharmacist whether light therapy is safe for you"
                - "Write their advice on timing and side effects into your winter plan"
            - name: Choosing a light therapy lamp
              description: |-
                ## Purpose
                Lamps range from bright clinical units to decorative lights nowhere near therapeutic brightness, and the difference is not obvious from the box. Comparing a shortlist on rated brightness at a stated distance, UV filtering, size of the light panel and whether it fits where you actually sit in the morning avoids buying something that ends up in a cupboard.

                ## Milestones
                1. Criteria written: brightness at a stated distance, UV filter, panel size, price and returns policy.
                2. Three lamps shortlisted and scored against the same criteria.
                3. The spot where the lamp will sit measured, including the distance to your seat.
                4. A lamp bought or borrowed, with the receipt and warranty kept.

                ## Notes
                Start from the **Purchase decision** template. A larger panel is more forgiving of where you sit; small lamps often need to be closer than people expect.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lamp that states its brightness at a given distance and filters UV is in the house, chosen against written criteria."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your must-haves for brightness, UV filtering and panel size"
                - "Shortlist three lamps and note their rated brightness and distance"
                - "Measure the distance from the lamp spot to where you sit"
                - "Buy or borrow the lamp that scored best and keep the receipt"
            - name: Morning light corner set-up
              description: |-
                ## Purpose
                Light therapy works best when it happens without effort: the lamp already plugged in at the breakfast table or desk, at the right angle and distance, next to the kettle. Setting up a permanent spot, and pairing the session with something you already do every morning, is what turns a purchase into a habit.

                ## Milestones
                1. A fixed spot for the lamp chosen where you already spend your first hour.
                2. The lamp positioned at the maker's stated distance and angle.
                3. The session paired with an existing routine such as breakfast, email or reading.
                4. A first week of sessions completed at a similar time each morning.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The lamp has a fixed spot at the stated distance, and seven morning sessions were completed in the first week after setting it up."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the spot where you already sit for at least 20 minutes each morning"
                - "Set the lamp at the distance and angle the maker states"
                - "Pair the session with breakfast or another existing morning habit"
                - "Complete seven morning sessions and note how each one fitted the day"
            - name: One-page winter plan
              description: |-
                ## Purpose
                When seasonal low mood arrives, planning and decision-making are often the first things to slow down. Writing the whole winter on one page while you still feel well, covering light, daylight, activity, people, work and who to call, means the hard months run from a plan you made rather than decisions made on empty.

                ## Milestones
                1. Sections for light, daylight, activity, people, work and professional support filled in.
                2. Your early warning signs and first responses copied in.
                3. Urgent help numbers for your country at the bottom of the page.
                4. The plan printed and kept where you will see it in the dark months.

                ## Notes
                If you have ever had thoughts of ending your life, also write a crisis safety plan with your clinician. This page is for everyday winter support, not emergencies.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page winter plan covering six areas, with warning signs and urgent help numbers, is printed and shared with one person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the six section headings on a single page"
                - "Fill in what helped in past winters under each heading"
                - "Add your warning signs and your country's urgent help numbers"
                - "Print the plan and give a copy to one person"
            - name: Telling someone close about your winter pattern
              description: |-
                ## Purpose
                Friends and family often read seasonal withdrawal as rudeness or lost interest, and stop inviting you just when contact matters most. One honest conversation in autumn, explaining what tends to happen and what helps, gives someone permission to keep nudging when you go quiet.

                ## Milestones
                1. One person chosen whom you see or speak to at least weekly.
                2. A short explanation of your pattern and two specific ways they can help prepared.
                3. The conversation held before the darkest weeks begin.
                4. An agreed signal or phrase that means you need a nudge.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One named person has heard about your seasonal pattern and agreed two specific ways to help, written into your winter plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the person you see or speak to most often each week"
                - "Write two specific things they could do when you go quiet"
                - "Have the conversation before the darkest weeks start"
                - "Add their name and agreed role to your winter plan"
            - name: Home daylight audit
              description: |-
                ## Purpose
                Many homes have one bright room and several dim ones, and people with seasonal low mood often end up spending winter mornings in the dimmest. Walking through the house mid-morning and early afternoon on a grey day, noting which rooms get real light, shows where to eat breakfast, work and sit.

                ## Milestones
                1. Each room's light noted mid-morning and early afternoon on a grey day.
                2. The brightest spot for breakfast, work and reading identified.
                3. Obstacles such as heavy curtains, net curtains or furniture blocking windows listed.
                4. One routine moved so more of the day is spent in the brightest room.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A room-by-room note of winter daylight at two times of day exists, and at least one routine has moved to the brightest room."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Walk through each room mid-morning on a grey day and note the light"
                - "Repeat the walk in the early afternoon"
                - "List the curtains or furniture blocking windows"
                - "Move breakfast or work to the brightest spot you found"
            - name: Lamp sessions through the dark months
              description: |-
                ## Purpose
                Light therapy tends to help only when it is used on most mornings across the season, and the commonest reason it fails is quietly stopping in midwinter or in the first sunny week. A simple tick sheet of sessions shows whether a bad week followed missed mornings, and gives your doctor real data at the next review.

                ## Milestones
                1. A tick sheet for each week of the dark season.
                2. Sessions logged on most mornings from the agreed start date.
                3. Missed sessions noted with the reason.
                4. A season total brought to your spring review or doctor's appointment.

                ## Notes
                Start from the **Habit tracker** template. Keep going until the stop date your clinician suggested, even if you feel better earlier.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly tick sheet shows lamp sessions logged across the whole dark season, with missed mornings explained."
                cadence: rolling
              tasks:
                - "Set up a lamp tick sheet from the habit tracker template"
                - "Write the agreed start and stop dates at the top of the sheet"
                - "Tick off the week's lamp sessions and note any missed mornings @recurring(weekly:fri)"
                - "Bring the season's totals to your next review"
            - name: Midday daylight walks
              description: |-
                ## Purpose
                Even an overcast winter sky is usually many times brighter outdoors than ordinary indoor lighting, so a walk around the middle of the day is one of the cheapest sources of light there is. Three fixed walks a week, booked into the diary like meetings, keep the daylight coming on days when the lamp alone does not feel enough.

                ## Milestones
                1. Three regular walk slots fixed in the diary around midday.
                2. A short route for bad weather and a longer one for bright days.
                3. Waterproofs and gloves kept by the door so weather is not the excuse.
                4. Walks logged for a month and compared with the weekly symptom score.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three midday walks a week appear in the diary, and at least ten were completed in the last four weeks."
                cadence: rolling
              tasks:
                - "Block three midday slots in the diary as recurring meetings"
                - "Plan a 15-minute route and a 40-minute route from your door"
                - "Put waterproofs, a hat and gloves by the door"
                - "Take your midday daylight walk @recurring(weekly:mon,wed,fri)"
            - name: Weekly winter symptom score
              description: |-
                ## Purpose
                Seasonal depression creeps in, so one week rarely looks different from the one before. Scoring the same five things every Sunday from early autumn to spring, namely sleep length, energy, appetite and cravings, social contact and mood, makes the slide visible early and shows whether the lamp and walks are moving the numbers.

                ## Milestones
                1. Five items chosen and a 0 to 10 scale defined for each.
                2. A score recorded every week from early autumn.
                3. A threshold agreed at which you contact your doctor.
                4. The season's scores summarised as a simple line chart for the spring review.

                ## Notes
                Start from the **Metrics log** template. If you already keep a daily mood record, take the weekly average from it instead of starting a second log.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly score on five items is logged from early autumn to spring, with a written threshold for contacting your doctor."
                cadence: rolling
              tasks:
                - "Choose the five items and define what 0 and 10 mean for each"
                - "Set up the score log from the metrics log template"
                - "Write down the score that means it is time to call your doctor"
                - "Score the week's sleep, energy, appetite, contact and mood @recurring(weekly:sun)"
            - name: Autumn preparation month
              description: |-
                ## Purpose
                The best time to get ready for winter is the month before it starts, while energy is still there: lamp tested, appointment booked, winter activities chosen, plan refreshed. A fixed preparation month each year, set by your own usual onset rather than the calendar, gets everything in place before the first warning sign.

                ## Milestones
                1. The month before your usual onset marked in the calendar every year.
                2. Lamp checked, early-autumn appointment booked and winter plan updated.
                3. At least one winter commitment such as a class, club or regular meet-up arranged.
                4. Your support person told that the season is starting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year the lamp, an appointment, the winter plan and at least one winter commitment are in place before your usual onset date."
                cadence: cyclic
              tasks:
                - "Find your usual onset week from the seasonal look-back"
                - "Mark the month before it as your autumn preparation month"
                - "Run the autumn checklist of lamp, appointment, plan and commitments @recurring(yearly)"
                - "Sign up for one class, club or meet-up that runs through winter"
            - name: Weekly winter activity plan
              description: |-
                ## Purpose
                Staying in, sleeping and cancelling are the strongest pulls in winter, and waiting until you feel like doing something rarely works. Planning the week each Saturday with a mix of things you enjoy, things that bring a sense of achievement and things done in daylight, each pencilled into a specific slot, stops the week shrinking to work and the sofa.

                ## Milestones
                1. A weekly planner with morning, afternoon and evening slots.
                2. Each week holding at least three enjoyable activities and two that bring a sense of achievement.
                3. At least half the planned activities placed in daylight hours.
                4. A tick against each completed activity with a rating of how it felt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week from autumn to spring has a written plan of at least five activities, half in daylight, with completed ones ticked and rated."
                cadence: rolling
              tasks:
                - "Draw up a weekly planner with morning, afternoon and evening slots"
                - "List twenty small activities you enjoyed or felt good after in past winters"
                - "Plan the week's activities into specific slots, half in daylight @recurring(weekly:sat)"
                - "Tick each completed activity and rate how it felt from 0 to 10"
            - name: Steady winter wake time
              description: |-
                ## Purpose
                Oversleeping is one of the most common seasonal symptoms, and long, drifting lie-ins tend to push the body clock later and make mornings even darker. Keeping wake time within about half an hour of the same point all week, with light soon after getting up, gives the body clock a strong daily signal.

                ## Milestones
                1. A target wake time chosen that is realistic on work and rest days.
                2. Morning light or the lamp scheduled within the first hour after waking.
                3. Wake times recorded for four weeks.
                4. Persistent long sleep despite the routine raised with your doctor.

                ## Notes
                Sleeping much longer than usual and still waking unrefreshed is worth mentioning to your doctor, as it can have causes other than the season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of recorded wake times show most days, weekends included, within 30 minutes of the target."
                cadence: rolling
              tasks:
                - "Choose a wake time you can keep on both work and rest days"
                - "Put the alarm across the room and switch on a bright light when you get up"
                - "Check the week's wake times stayed within half an hour of the target @recurring(weekly:wed)"
                - "Tell your doctor if you still sleep far more than usual after a month"
            - name: Winter social contact rhythm
              description: |-
                ## Purpose
                Withdrawing from people is both a symptom and a cause of winter low mood, and invitations dry up when you keep saying no. Standing arrangements, such as a Tuesday call with a sibling, a fortnightly walk with a friend or a monthly dinner, need no decision on a low day and keep contact going through the dark months.

                ## Milestones
                1. Three standing arrangements agreed that run from autumn to spring.
                2. At least one held in daylight, such as a weekend walk or a lunch.
                3. A rule written for low days: shorten the plan rather than cancel it.
                4. Contact kept up for a full winter, with any gaps noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three standing social arrangements ran through winter and at least three in four of them happened, as recorded in your plan."
                cadence: rolling
              tasks:
                - "Write down three people you would like to see more of in winter"
                - "Propose a standing arrangement to each with a fixed day"
                - "Confirm this week's standing arrangement, offering a shorter version if you are low @recurring(weekly:tue)"
                - "Note at the end of each month any arrangement that lapsed"
            - name: Monthly check-in with your support person
              description: |-
                ## Purpose
                The person who agreed to watch for your warning signs needs a regular moment to ask, otherwise they wait for you to raise it, which seasonal low mood makes unlikely. A short monthly check-in through the dark season, using your weekly scores and warning signs list, keeps them informed without turning the friendship into monitoring.

                ## Milestones
                1. A monthly date agreed for the check-in through the dark season.
                2. Three questions agreed that they will ask each time.
                3. Recent scores and any warning signs shared before each check-in.
                4. Any agreed action written down and followed up the next month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly check-in took place through the dark season, with agreed actions recorded and followed up the following month."
                cadence: rolling
              tasks:
                - "Agree a monthly check-in day with your support person"
                - "Agree three questions they will ask you each time"
                - "Hold the monthly winter check-in and share your recent scores @recurring(monthly:12)"
                - "Write down anything you agreed to change"
            - name: Minimum winter household routine
              description: |-
                ## Purpose
                Laundry piling up and a messy kitchen are classic winter spirals: low energy leads to mess, and mess lowers mood further. Agreeing in autumn the smallest set of chores that keeps the home working, and sharing them out if you live with others, protects the basics through weeks when energy is scarce.

                ## Milestones
                1. A list of the minimum chores that keep the home running.
                2. Chores shared or swapped with other household members where possible.
                3. A single weekly reset slot of no more than an hour.
                4. Anything that can be automated or bought in for winter identified.

                ## Notes
                Start from the **Household chores** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written minimum chore list exists for winter, and the weekly one-hour reset happened in at least three weeks of every four."
                cadence: rolling
              tasks:
                - "List the chores that truly must happen every week"
                - "Share them out with the people you live with"
                - "Do the one-hour weekly home reset @recurring(weekly:thu)"
                - "Set up one grocery or laundry shortcut for the winter months"
            - name: Low-energy winter food plan
              description: |-
                ## Purpose
                Cravings for bread, pasta and sweets, and evenings too tired to cook, are common in seasonal depression and can leave people feeling worse. A list of quick meals, a freezer stocked on a good day each month and a shopping list ready for delivery take the decision out of dark evenings.

                ## Milestones
                1. Ten meals that take under twenty minutes or come from the freezer listed.
                2. A monthly batch cook held on a higher-energy day.
                3. A standing delivery or click-and-collect list saved.
                4. Snacks you are happy to reach for kept in easy view.

                ## Notes
                Start from the **Weekly meal plan** template. Any change of diet for health reasons is for your doctor or a dietitian to advise on.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of ten quick meals, a saved shopping list and a monthly batch cook kept the freezer stocked through the winter."
                cadence: rolling
              tasks:
                - "List ten meals you can make in under twenty minutes"
                - "Save a standing grocery list for delivery or collection"
                - "Batch cook two meals for the freezer on a better day @recurring(monthly:20)"
                - "Plan the week's dinners from the quick meals list"
            - name: Spring review of the winter
              description: |-
                ## Purpose
                Once the days lengthen, the winter is easy to forget, and its lessons go with it. A review as the mood lifts, looking at what helped, what was missed and how early the slide began, turns each winter into a better plan for the next one.

                ## Milestones
                1. Weekly scores, lamp sessions and walk logs gathered for the season.
                2. The three most helpful and three least helpful changes named.
                3. The onset and recovery weeks compared with previous winters.
                4. The winter plan updated and stored for autumn.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A dated spring review names what helped, what did not and the onset and recovery weeks, and the winter plan has been updated."
                cadence: cyclic
              tasks:
                - "Gather the season's scores, lamp sheet and walk log"
                - "Name the three changes that helped most and the three that did not"
                - "Update the winter plan with the changes for next year"
                - "Hold the spring review as the days clearly lengthen @recurring(yearly)"
            - name: Lamp upkeep and summer storage
              description: |-
                ## Purpose
                A lamp that is dusty, has a dimming tube or was packed away without its stand loses some of its value without anyone noticing. Checking it at the end of the season, and again before autumn, keeps it ready for the first dark morning.

                ## Milestones
                1. The lamp cleaned and checked for flicker, dimming or damage at the end of the season.
                2. Stored with its stand, cable and manual in one labelled box.
                3. Warranty end date and replacement bulb details noted.
                4. A test run done a month before your usual onset.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each spring the lamp is stored complete and labelled, and it passes a test run a month before the next onset."
                cadence: cyclic
              tasks:
                - "Clean the lamp surface and check for flicker or dimming"
                - "Pack the lamp, stand, cable and manual in one labelled box"
                - "Note the warranty end date and how to replace bulbs"
                - "Unpack and test the lamp a month before your usual onset @recurring(yearly)"
            - name: Winter blues or seasonal depression
              description: |-
                ## Purpose
                Feeling a little flatter in winter is common, while seasonal affective disorder is a recognised form of depression that returns with the seasons and affects daily life. Understanding the difference, and the typical signs such as oversleeping, heavy limbs, cravings and withdrawal, helps you describe what is happening and decide how much support to seek.

                ## Milestones
                1. The typical signs read from your health service or a recognised mental health charity.
                2. Your own experience compared with those signs in a short note.
                3. The difference between a mild winter dip and seasonal depression understood.
                4. Questions you still have listed for your doctor.

                ## Notes
                Prefer health service pages and recognised mental health charities over websites selling lamps or supplements.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note compares your experience with the published signs of seasonal depression, with open questions listed for your doctor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's page on seasonal affective disorder"
                - "Find one guide from a recognised mental health charity"
                - "Write a short note comparing your winters with the listed signs"
                - "List the questions you still want to ask your doctor"
            - name: How light timing affects your body clock
              description: |-
                ## Purpose
                Timing matters as much as the lamp: light in the first hours after waking tends to shift the body clock earlier, while bright light late in the evening pushes it later. Learning the basics of circadian rhythm helps you follow your clinician's advice on timing and spot when a schedule change may be working against you.

                ## Milestones
                1. The basics of circadian rhythm and morning light read from a reputable source.
                2. Your chronotype estimated as early, middle or late.
                3. Your light exposure across a typical winter day mapped hour by hour.
                4. One timing question noted for your clinician.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page hour-by-hour map of your winter light exposure exists, with your chronotype and a timing question for your clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a reputable introduction to circadian rhythm and light"
                - "Estimate your chronotype with a published questionnaire"
                - "Map your light exposure across a typical winter weekday"
                - "Note one question about lamp timing for your clinician"
            - name: Measuring the light you actually get
              description: |-
                ## Purpose
                Indoor rooms are often a small fraction as bright as outdoors on even a grey day, but the eye adjusts so well that it is hard to feel the difference. A week of rough measurements with a light meter app at your desk, table, sofa and on your walk shows how much light you really get and where the gaps are.

                ## Milestones
                1. A light meter app or inexpensive lux meter ready to use.
                2. Readings taken at your desk, table, sofa and outdoors at the same time of day.
                3. A week of readings in a simple table.
                4. Two changes chosen to raise your daily light.

                ## Notes
                Phone apps are rough guides, not calibrated instruments. Use them to compare places, not to check a lamp's rating.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table holds a week of light readings at four indoor spots and outdoors, with two changes chosen as a result."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Install a light meter app or borrow a lux meter"
                - "Measure desk, kitchen table, sofa and outdoors at the same hour"
                - "Record a week of readings in a simple table"
                - "Choose two changes that would raise your daily light"
            - name: Rethinking winter thoughts
              description: |-
                ## Purpose
                Winter-specific thoughts, such as winter always ruining everything or nothing being worth doing until spring, are common in seasonal depression and make it harder to do what helps. Cognitive behavioural therapy adapted for seasonal depression has been studied as a treatment in its own right, and learning its basic steps of catching, testing and rebalancing those thoughts gives you a tool for the long evenings.

                ## Milestones
                1. Five recurring winter thoughts written down from past seasons.
                2. Each one tested against evidence from past winters, including the good days.
                3. A balanced alternative written for each thought.
                4. Therapy with someone experienced in seasonal depression considered if the thoughts are hard to shift.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five recurring winter thoughts are written down with evidence for and against and a balanced alternative for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the five thoughts you have most often about winter"
                - "Find evidence from past winters for and against each thought"
                - "Write a balanced version of each thought"
                - "Ask your doctor about talking therapy adapted for seasonal depression"
            - name: Working against the hibernation pull
              description: |-
                ## Purpose
                Doing less in winter feels sensible but tends to feed the low mood: fewer activities mean fewer good moments, which makes doing anything harder still. Behavioural activation, scheduling small rewarding actions before motivation arrives, is a core part of talking therapy for seasonal depression, and practising it in small steps makes it usable on the hardest days.

                ## Milestones
                1. Activities you dropped in past winters listed.
                2. Each one broken into a first step that takes under ten minutes.
                3. A ladder of steps from easiest to hardest built for two of them.
                4. Three steps tried, with mood rated before and after each.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two activity ladders exist, and at least three steps have been tried with mood rated before and after."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the activities you dropped during past winters"
                - "Break two of them into first steps that take under ten minutes"
                - "Order the steps into a ladder from easiest to hardest"
                - "Try one step and rate your mood before and after"
            - name: Building a winter you can enjoy
              description: |-
                ## Purpose
                Research in far-northern communities suggests that people who see winter as a season with its own pleasures tend to cope better with it. Listing what you could genuinely enjoy only in winter, from frosty walks and snow sports to candlelit dinners, soups and long books, gives the season something to look forward to rather than simply endure.

                ## Milestones
                1. Twenty things you can enjoy only or mainly in winter listed.
                2. Five chosen and scheduled across the dark months.
                3. One winter tradition started with other people.
                4. The ones that worked kept in next year's winter plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five winter-only pleasures were scheduled and done across the season, and the best are kept in next year's plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List twenty things you can only or mainly enjoy in winter"
                - "Schedule five of them across the dark months"
                - "Start one winter tradition with friends or family"
                - "Mark the ones worth repeating in your winter plan"
            - name: Vitamin D questions for your doctor
              description: |-
                ## Purpose
                Vitamin D is often mentioned alongside winter mood, and many health services give general advice about it for the darker months. Whether it is relevant to your low mood, whether a blood test makes sense and what is right for you are questions for your doctor or pharmacist, so this project gets the questions ready rather than guessing.

                ## Milestones
                1. Your health service's general winter guidance on vitamin D read.
                2. Any supplements you already take listed.
                3. Questions for your doctor or pharmacist written down.
                4. Their advice recorded in your winter plan with the date.

                ## Notes
                Do not combine several products that contain vitamin D without checking with a pharmacist.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your doctor's or pharmacist's advice on vitamin D for you is written in your winter plan, with the date it was given."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's winter vitamin D guidance"
                - "List any supplements you take that contain vitamin D"
                - "Ask your doctor or pharmacist what applies to you"
                - "Write their advice and the date into your winter plan"
            - name: Moving your desk to the window
              description: |-
                ## Purpose
                Office workers can spend most of the daylight hours a few metres from a window without getting much of its light. Moving a desk to sit beside a window, at home or by asking at work, is a one-off change that adds light on every working day of winter.

                ## Milestones
                1. The brightest workable spot near a window identified.
                2. Glare and screen position tested so the move is comfortable.
                3. The desk moved, or a request made at work to sit nearer a window.
                4. Light readings at the old and new spots compared.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your main desk sits beside a window at home or at work, with the light reading there noted against the old spot."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the brightest spot near a window where a desk would fit"
                - "Test the screen angle against window glare for an hour"
                - "Move the desk or ask your manager about sitting nearer a window"
                - "Compare light readings at the old and new desk spots"
            - name: Dawn simulator trial
              description: |-
                ## Purpose
                Waking in the dark is one of the hardest parts of winter for many people, and a dawn simulator that slowly brightens the bedroom before the alarm can make getting up less of a struggle. A month's trial, with ease of waking rated each morning, shows whether it earns its place alongside other changes.

                ## Milestones
                1. A dawn simulator chosen with adjustable sunrise length and brightness.
                2. The sunrise set to finish at your target wake time.
                3. Ease of waking rated each morning for four weeks.
                4. A decision made to keep, adjust or return it.

                ## Notes
                Most dawn simulators are not bright enough to count as light therapy. Treat one as a help with waking, and ask your clinician before using it in place of a lamp.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four weeks of morning ratings with a dawn simulator are recorded, and a keep or return decision is written down within the returns window."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the returns window before buying a dawn simulator"
                - "Set the sunrise to end at your target wake time"
                - "Rate ease of waking from 0 to 10 each morning for four weeks"
                - "Decide to keep, adjust or return it before the window closes"
            - name: Treatment options for recurring winter depression
              description: |-
                ## Purpose
                When seasonal depression comes back most years, doctors may discuss options such as light therapy, talking therapy and antidepressant medication, and when in the year to start each. Going in with your history, what you have tried and what you prefer means the decision is made together and written down, rather than revisited from scratch each autumn.

                ## Milestones
                1. What you have tried, for how long and with what effect listed.
                2. Your preferences and concerns about each option written down.
                3. The options discussed with your doctor and a plan agreed.
                4. The plan, including when to start and when to review, written into your winter plan.

                ## Notes
                Decisions about medication and its timing are for you and your prescriber. Do not start, stop or change medication on your own.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment plan agreed with your doctor, including start and review timing, is written into your winter plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List everything you have tried for winter low mood and how it went"
                - "Write down your preferences and worries about each option"
                - "Book an appointment to discuss treatment before your usual onset"
                - "Write the agreed plan and review date into your winter plan"
            - name: Brightening rooms for winter
              description: |-
                ## Purpose
                Small changes make a dim room noticeably lighter: brighter bulbs, pale lampshades, tied-back curtains, a mirror opposite the window and clean glass. Choosing the room you use most on winter mornings and making three or four of these changes costs little and helps on every day of the season.

                ## Milestones
                1. The room you use most on winter mornings chosen.
                2. A light reading taken at your usual seat before any changes.
                3. Three or four changes made to bulbs, curtains, mirrors or windows.
                4. A second reading taken and compared with the first.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three or more changes are made in your most-used winter room, with light readings before and after recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the room you use most on winter mornings"
                - "Take a light reading at your usual seat before any changes"
                - "Swap in brighter bulbs and tie back heavy curtains"
                - "Clean the windows and take a second reading"
            - name: Asking for daylight-friendly working hours
              description: |-
                ## Purpose
                Standard working hours can mean leaving home and returning in the dark for months, with no daylight except through a window. A specific request, such as a protected lunchtime walk, an earlier finish in the darkest weeks or a seat nearer a window, framed around staying productive, is more likely to be agreed than a general one.

                ## Milestones
                1. Your daylight hours outside work on a winter weekday worked out.
                2. One or two specific changes chosen that would add daylight.
                3. A short written request prepared for your manager.
                4. The outcome recorded, with a review date before next winter.

                ## Notes
                If your seasonal depression is significant, more formal workplace adjustments may be available; your doctor or an occupational health service can advise.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written request for one or two daylight-friendly changes has been made, and the answer is recorded with a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out how many daylight hours you have outside work on a winter weekday"
                - "Choose one or two specific changes that would add daylight"
                - "Ask the agent to draft a short request to your manager"
                - "Record the answer and set a review before next winter"
            - name: Morning commute in daylight
              description: |-
                ## Purpose
                Where it is safe and practical, walking or cycling part of the morning commute after sunrise adds outdoor light at the time of day it matters most. Testing two or three alternatives, such as getting off a stop early, a later start or a different route, shows what fits your mornings.

                ## Milestones
                1. Sunrise compared with your current leaving time across the winter.
                2. Two or three alternatives tried for a week each.
                3. Time, cost and safety noted for each, including lighting and weather.
                4. One alternative kept for the season.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or more commute alternatives were tried for a week each, and one is in use, with notes on time, cost and safety."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare your leaving time with sunrise for each winter month"
                - "Try getting off one stop early for a week"
                - "Try a different route or start time for a week"
                - "Keep the option that adds the most daylight safely"
            - name: Winter sun break decision
              description: |-
                ## Purpose
                Some people with seasonal depression find a week somewhere sunnier in the darkest stretch lifts them, though the effect can fade within days of returning and the cost is real. Weighing timing, budget and what happens on return, then planning the trip if it makes sense, makes the break part of the winter plan rather than an escape.

                ## Milestones
                1. The darkest weeks identified from your daylight calendar and symptom history.
                2. A budget set and two or three destinations compared on daylight hours and travel time.
                3. A plan for the first week back, including lamp sessions and social plans.
                4. A decision made, and the trip booked if it goes ahead.

                ## Notes
                Start from the **Trip** template. Avoid booking so late that you are organising travel at your lowest point.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on a winter sun break is recorded, with budget, dates and a return-week plan if it is booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark the darkest three weeks on your daylight calendar"
                - "Set a budget you can afford without adding money worries"
                - "Compare two or three places on daylight hours and travel time"
                - "Plan the first week back before you book anything"
            - name: Autumn clock change week
              description: |-
                ## Purpose
                In places that move the clocks back, evening darkness can arrive overnight, and many people with seasonal depression notice a dip that week. Planning it in advance, with extra daylight walks, a social plan and the lamp routine already running, softens the step change.

                ## Milestones
                1. The clock change date marked in your calendar.
                2. The lamp routine running at least a week before.
                3. Daylight walks and a social plan booked for the week after.
                4. How the week went noted for the spring review.

                ## Notes
                If your country does not change its clocks, use the week your evenings first turn dark before your usual finish time.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The week after the clock change held lamp sessions, at least three daylight walks and one social plan, with notes kept."
                cadence: cyclic
              tasks:
                - "Check the date the clocks change where you live"
                - "Start the lamp routine a week before the change"
                - "Book three daylight walks and one social plan for the week after"
                - "Plan the clock change week a fortnight ahead @recurring(yearly)"
            - name: Festive season on low winter energy
              description: |-
                ## Purpose
                Year-end holidays in many northern countries fall in the darkest weeks, and late nights, travel, alcohol, spending and family expectations can drain energy just when it is lowest. Deciding in advance which events matter, where you will rest and how morning light continues while away protects the season instead of leaving you depleted afterwards.

                ## Milestones
                1. Every invitation and commitment for the season listed in one place.
                2. The two or three that matter most chosen and the rest declined or shortened.
                3. Rest days and morning light planned around any travel.
                4. A gentle first week back planned.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written festive plan shows chosen events, rest days and how morning light continues while away, with the first week back kept light."
                cadence: cyclic
              tasks:
                - "List every invitation and commitment for the holiday season"
                - "Pick the two or three events that matter most"
                - "Pack the lamp or plan outdoor morning light for any time away"
                - "Keep the first week after the holidays free of extra commitments"
            - name: Midwinter fortnight plan
              description: |-
                ## Purpose
                For many people the lowest stretch is the two or three weeks after the shortest day, once the holidays are over and spring still feels far off. Planning those weeks ahead, with lighter commitments, more contact and something to look forward to at the end, means you are not deciding what to do when energy is at its lowest.

                ## Milestones
                1. Your usual lowest weeks identified from past winters.
                2. Non-essential commitments in those weeks moved or dropped.
                3. Contact booked with at least two people each week.
                4. A small treat or outing booked for the end of the fortnight.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The two lowest weeks of winter hold lighter commitments, two contacts each week and a planned treat at the end, all in the diary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your usual lowest two weeks in the seasonal look-back"
                - "Move or drop non-essential commitments in those weeks"
                - "Book contact with two people for each of those weeks"
                - "Book a small treat or outing for the end of the fortnight"
            - name: Early-autumn review appointment
              description: |-
                ## Purpose
                Seeing your doctor or therapist a few weeks before your usual onset, rather than in the middle of a low, gives time to restart light therapy, adjust treatment or arrange talking therapy before it is needed. Booking it every year at the same point turns winter care from reactive to planned.

                ## Milestones
                1. Your usual onset week known from the seasonal look-back.
                2. An appointment booked four to six weeks before it.
                3. Last winter's spring review and this year's plan taken along.
                4. Agreed changes for this winter written into the winter plan.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An appointment is held each year four to six weeks before your usual onset, with agreed changes written into the winter plan."
                cadence: cyclic
              tasks:
                - "Book the early-autumn appointment six weeks before your usual onset @recurring(yearly)"
                - "Bring the spring review and the current winter plan"
                - "Ask whether last winter's treatment plan still fits"
                - "Write agreed changes into the winter plan the same day"
            - name: Marking the end of winter
              description: |-
                ## Purpose
                Seasonal low mood often lifts gradually, and without a marker the relief can go unnoticed or feel fragile. A first spring outing, planned as an event with someone who supported you, closes the season deliberately and gives you a memory to look back on next autumn.

                ## Milestones
                1. A date chosen once the days are clearly longer.
                2. An outdoor outing planned with someone who helped this winter.
                3. A photo or note from the day kept with your winter plan.
                4. Thanks given to the people who helped.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first spring outing has happened with someone who helped, and a photo or note from it is filed with the winter plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a date when the days are clearly longer"
                - "Invite someone who helped you this winter"
                - "Choose an outdoor place you have missed"
                - "File a photo or note from the day with your winter plan"
            - name: First winter at university in a darker place
              description: |-
                ## Purpose
                Students who move to study somewhere with shorter winter days often meet seasonal low mood for the first time in their first year, far from usual support and with deadlines in the darkest weeks. Setting up daylight or a lamp in a small room, a timetable with outdoor time and contact with student support early makes that first winter much more manageable.

                ## Milestones
                1. Student wellbeing services located and their contact details saved.
                2. Morning daylight or lamp time built into the weekly timetable.
                3. At least one club or society that meets through winter joined.
                4. A plan for deadlines in the darkest weeks agreed with a tutor if needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Student support contacts are saved, a club is joined, and morning light is built into at least four days of the weekly timetable."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Save the student wellbeing service's contact details"
                - "Check the sunrise and sunset times where you study"
                - "Join one club or society that meets through winter"
                - "Plan morning daylight around your lecture timetable"
            - name: Parenting through a dark winter
              description: |-
                ## Purpose
                Parents with seasonal depression still have school runs in the dark, children who need energy at the end of the day and little room for a quiet lamp session. Fitting light into the family morning, planning weekend daylight outings the children enjoy and lining up help for the hardest weeks keeps the household going without the parent running on empty.

                ## Milestones
                1. The lamp placed where it can be used during breakfast and school run preparation.
                2. A weekend daylight outing planned each week that suits the children.
                3. Two people lined up to share school runs or childcare in the hardest weeks.
                4. A simple, age-appropriate explanation ready for older children.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lamp is used during the family breakfast, a weekly daylight outing happens, and two named helpers cover the hardest weeks."
                cadence: phased
              tasks:
                - "Put the lamp on the breakfast table or kitchen counter"
                - "Ask two people to share school runs in the darkest weeks"
                - "Plan a weekend daylight outing the children will enjoy @recurring(weekly:sat)"
                - "Prepare a simple explanation of winter tiredness for older children"
            - name: First winter after moving to a darker country
              description: |-
                ## Purpose
                Moving to a higher latitude can bring a first experience of very short days, and newcomers often underestimate how different the winter will feel. Learning how locals cope, setting up light and social routines before the darkest months and registering with a doctor early all soften the shock.

                ## Milestones
                1. Registered with a local doctor before winter starts.
                2. A local daylight calendar made and the darkest months known.
                3. Local winter habits such as outdoor activities, community events and home lighting explored.
                4. A lamp and suitable winter clothing ready before the darkest weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "You are registered with a local doctor, and a local daylight calendar, a lamp and winter clothing are in place before the darkest month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Register with a local doctor or health centre"
                - "Ask three local people how they get through the dark months"
                - "Find one community winter activity to join"
                - "Buy winter clothing that makes outdoor time comfortable"
            - name: Winter daylight for older adults
              description: |-
                ## Purpose
                Older adults often get less daylight in winter because of icy paths, reduced mobility or fewer reasons to go out, and age-related changes in the eye can let less light through. A plan that brings light indoors, makes outdoor time safe and keeps regular contact going can be organised alone or with family or a carer.

                ## Milestones
                1. The brightest seat in the home chosen for daytime sitting.
                2. A safe outdoor routine agreed, such as a sheltered seat, a supported walk or a drive to an open space.
                3. An eye test booked if one is due.
                4. Regular visits or calls arranged through the darkest months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A bright daytime seat, a safe outdoor routine and weekly contact are in place, and an eye test is booked if one is due."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Move the favourite chair to the brightest spot in the home"
                - "Book an eye test if the last one was more than two years ago"
                - "Arrange a weekly supported walk or trip to an open space"
                - "Ask family or neighbours to visit or call through the darkest months"
            - name: Working from home without a commute's daylight
              description: |-
                ## Purpose
                Working from home removes the walk to the station or office, which for many people was their only winter daylight. Building outdoor time into the working day on purpose, ideally in the morning, replaces it before weeks of staying indoors add up.

                ## Milestones
                1. A pretend commute or morning walk scheduled before work starts.
                2. The desk placed by the brightest window.
                3. Lunch taken outdoors or by a window on most days.
                4. Days spent entirely indoors counted each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A morning walk happens before work on most weekdays, and days spent entirely indoors are counted each week and kept to two or fewer."
                cadence: rolling
              tasks:
                - "Block a 20-minute pretend commute in your calendar on weekdays"
                - "Move your desk next to the brightest window"
                - "Go outside for daylight before the working day begins @recurring(daily)"
                - "Count each Friday the days you did not leave the house"
            - name: Supporting a partner with seasonal depression
              description: |-
                ## Purpose
                Partners and family members of someone with seasonal depression often feel shut out, or blamed, as the person withdraws each winter. Learning the pattern and agreeing in autumn how you will help, and how you will look after yourself, makes the season easier on both of you.

                ## Milestones
                1. The person's warning signs and winter plan read with their agreement.
                2. Two or three specific ways to help agreed in autumn.
                3. A monthly check on how the arrangement is working.
                4. Your own support and rest arranged for the winter.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two or three agreed ways of helping are written down, a monthly check is held, and you have named your own source of support."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask to read your partner's winter plan and warning signs"
                - "Agree two or three specific ways you will help"
                - "Ask how the winter arrangement is working for both of you @recurring(monthly:5)"
                - "Name one person or service you will lean on yourself"
            - name: Light timing for night and shift workers
              description: |-
                ## Purpose
                Shift and night work break the usual advice about morning light, because your morning may start at four in the afternoon or eleven at night. Working out with a clinician or occupational health service when light helps and when it should be avoided for your rota protects both mood and sleep.

                ## Milestones
                1. Your typical rota written out with sleep and wake times.
                2. Advice sought from a clinician or occupational health on light timing for that rota.
                3. Light and dark periods planned for each shift type.
                4. Sleep and mood noted for one full rota cycle.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A light plan for each shift type, based on professional advice, has been followed for one full rota cycle with sleep and mood noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write out your rota with usual sleep and wake times"
                - "Ask occupational health or your doctor about light timing for your shifts"
                - "Plan when to seek light and when to avoid it for each shift type"
                - "Note sleep and mood for one full rota cycle"
            - name: Summer-pattern seasonal depression
              description: |-
                ## Purpose
                Fewer people have the reverse pattern: low mood or agitation in the long, hot days of summer, often with poor sleep and reduced appetite. Recording it with the same care as a winter pattern and taking it to your doctor matters, because the usual winter remedies such as bright light may not help.

                ## Milestones
                1. Past summers reviewed for onset, worst and recovery weeks.
                2. Changes in sleep, appetite, agitation and mood noted.
                3. The pattern taken to your doctor with a written summary.
                4. A summer plan agreed covering heat, sleep and support.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of past summers has been shared with your doctor, and a summer plan covering heat, sleep and support is written."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note onset and recovery weeks for the last three summers"
                - "Record changes in sleep, appetite and agitation"
                - "Book a doctor's appointment to discuss the summer pattern"
                - "Write a summer plan covering heat, sleep and support"
            - name: Three-winter evidence review
              description: |-
                ## Purpose
                After three winters of logs, the real question becomes which parts of the plan earn their place: lamp, walks, therapy, social rhythm, travel or treatment timing. Comparing three seasons' scores against what you did each year, and sharing the result with your clinician, sharpens the plan and drops what did not help.

                ## Milestones
                1. Three seasons of weekly scores and logs gathered in one place.
                2. Onset, lowest point and recovery compared year on year.
                3. Each change set against the scores in a short table.
                4. Conclusions discussed with your clinician and the winter plan updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table comparing three winters' scores with what you did each year has been discussed with your clinician, and the winter plan updated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather three winters of weekly scores into one sheet"
                - "Mark onset, lowest point and recovery for each winter"
                - "Ask the agent to summarise which changes coincided with better scores"
                - "Discuss the findings with your clinician at the early-autumn review"
---

# Seasonal Affective Disorder Plan

This area is for anyone whose mood, energy and sleep slide as the days shorten, whether that is a winter dip or diagnosed seasonal affective disorder. It starts with foundations (a look back at past winters, a doctor's appointment, a daylight calendar, warning signs, a safely chosen light lamp and a one-page winter plan), then the weekly machinery of lamp sessions, daylight walks, symptom scores and activity plans, the skills behind light timing and winter thinking, practical changes at home and work, the dated points of the season, versions for students, parents, newcomers, older adults, home workers, partners and shift workers, and finally summer-pattern depression and a review of several winters' evidence.

The rhythm follows the season: weekly walks, lamp tallies, symptom scores, activity plans, social arrangements and a household reset, a monthly check-in, batch cook and daylight calendar update, and a yearly cycle of autumn preparation, an early-autumn appointment, the clock change week and a spring review. The Purchase decision, Habit tracker, Metrics log, Household chores, Weekly meal plan and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
