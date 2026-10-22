---
id: physical-health.vaccination-schedule-tracking
name: Vaccination Schedule Tracking
description: "One vaccination record for everyone in the household, the gaps found and booked, reminders that fire before doses fall due, and the flu, booster and life-stage rounds kept on time."
category: personal
version: 1.0.0
tags: [physical-health, vaccination-schedule-tracking, everyone, parent, immunisation, boosters, flu-vaccine, health-records]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - risk-register
    - operational-checklist
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Vaccination Schedule Tracking
          description: "Recording vaccinations and boosters for every household member, from childhood schedules to flu, shingles and travel jabs, so nothing lapses."
          projects:
            - name: Gathering every household vaccination document
              description: |-
                ## Purpose
                Vaccination evidence is usually scattered: a child health record book in a drawer, a card from a pharmacy, a school letter, an old travel certificate and a few entries on a patient portal. Putting every piece in one folder, one person at a time, is the step everything else in this area depends on, and it shows quickly how much is missing.

                ## Milestones
                1. One folder, paper or digital, with a section for each household member.
                2. Every child health record book, vaccination card and certificate in the house placed in the right section.
                3. Screenshots or printouts of any portal vaccination pages added.
                4. A note in each section saying what is clearly missing, such as no adult records at all.

                ## Notes
                Check the obvious hiding places: baby boxes, old passport wallets, school report folders and the glovebox of the family car.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holds every vaccination document the household owns, sorted by person, with missing records noted in each section."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a folder with one section per household member"
                - "Search the house for health record books, cards and certificates"
                - "Screenshot the vaccination page of each person's patient portal"
                - "Write a missing records note at the front of each section"
            - name: Requesting official immunisation histories
              description: |-
                ## Purpose
                Your doctor's practice, a national immunisation register or a school health service often holds a more complete history than anything at home, especially for doses given at school or in another clinic. Asking for a printed or exported history for each person fills gaps you cannot fill from memory and gives you something official to show a school, employer or new practice.

                ## Milestones
                1. The right place to ask identified for each person, such as the practice, a regional register or the school nursing team.
                2. A request made for every household member, with consent from anyone aged 16 or over where the service requires it.
                3. Each returned history filed in that person's section.
                4. Any disagreement between the official history and your own papers listed for follow-up.

                ## Notes
                Older teenagers and adults may need to request their own history. Ask them to do it rather than doing it on their behalf.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An official vaccination history has been requested for every household member and each one received is filed, with discrepancies listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your practice how to request a full vaccination history"
                - "Request a history for each child and ask adults to request their own"
                - "File each history in the right section when it arrives"
                - "List any dose that appears on one record but not the other"
            - name: One vaccination page per household member
              description: |-
                ## Purpose
                A folder of papers answers questions slowly; a single page per person answers them in seconds. Each page lists date of birth, every dose received with date, vaccine name and where it was given, plus known allergies and the next dose due, so anyone in the household can answer a school form or a clinic question without digging.

                ## Milestones
                1. A page for each person with name, date of birth and practice details.
                2. Every dose from the gathered documents entered in date order with vaccine name and place.
                3. Allergies and past reactions to vaccines noted at the top.
                4. A next dose due line completed for each person, even if it says none known.

                ## Notes
                Start from the **Person** template. Copy vaccine names exactly as written on the card, including the brand if shown, because combination vaccines are easy to mislabel.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every household member has a vaccination page listing all known doses in date order, allergies and the next dose due."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a page for each household member from the Person template"
                - "Enter each person's doses in date order from the gathered documents"
                - "Add allergies and any past vaccine reactions at the top of each page"
                - "Write the next dose due on every page"
            - name: National schedule mapped to each person's age
              description: |-
                ## Purpose
                Every country publishes a routine schedule saying which vaccines are offered at which ages, and it changes every few years. Laying each person's age against your own country's current schedule shows what should already have happened and what comes next, which turns a pile of dates into a plan.

                ## Milestones
                1. Your health service's current routine schedule saved, with the date it was published.
                2. Each person's age matched to the doses the schedule expects by now.
                3. Doses expected in the next two years listed for each person.
                4. Any group programme that applies to someone, such as pregnancy or a long-term condition, noted.

                ## Notes
                If someone grew up in another country, their childhood schedule may have been different. Note that rather than assuming a gap.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each household member's page shows which scheduled doses are expected by their current age and which fall due in the next two years."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download your health service's current routine vaccination schedule"
                - "Mark on each person's page which scheduled doses they should have had"
                - "List the doses each person is due in the next two years"
                - "Check whether anyone qualifies for an extra programme because of a condition"
            - name: Overdue and missed dose gap list
              description: |-
                ## Purpose
                Comparing records with the schedule nearly always turns up something: a missed preschool booster, an adult with one MMR dose, a teenager absent on school vaccination day. Listing every gap in one place, with who to contact and how urgent each one is, stops them being noticed and forgotten again.

                ## Milestones
                1. Every gap found so far entered with the person, the vaccine and how it was found.
                2. Each gap marked as confirmed missing or just not recorded.
                3. The practice or pharmacy to contact written against each confirmed gap.
                4. Every confirmed gap either booked or closed with a reason.

                ## Notes
                Start from the **Risk register** template. A dose not recorded is not always a dose not given, so ask before repeating anything.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gap list exists for the household, and every confirmed gap on it has a booked appointment or a written reason for closing it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a gap list from the Risk register template"
                - "Enter every missing or unrecorded dose found so far"
                - "Ask the practice to check unrecorded doses against their system"
                - "Review the gap list and chase anything still open @recurring(quarterly)"
            - name: Shared calendar of upcoming vaccine due dates
              description: |-
                ## Purpose
                Most missed doses are simply forgotten, because a booster due in four years has no reminder attached. Putting every known due date into a calendar the adults in the house share, with a reminder six weeks ahead to book, means the next dose arrives as a prompt instead of a surprise.

                ## Milestones
                1. A shared calendar, or a section of the family calendar, set aside for vaccine dates.
                2. Every next dose due from the household pages entered as an event.
                3. A booking reminder set six weeks before each due date.
                4. Both or all responsible adults confirmed as seeing the reminders.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every known next dose for every household member sits in a shared calendar with a booking reminder six weeks ahead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the shared calendar the household will use for vaccine dates"
                - "Add each person's next due dose as an event"
                - "Set a booking reminder six weeks before each event"
                - "Add the coming year's due doses to the calendar @recurring(yearly)"
            - name: Vaccine allergy and past reaction notes
              description: |-
                ## Purpose
                Clinicians ask about allergies and previous reactions before every vaccination, and a vague answer can mean a delayed dose or a second appointment. Writing down any past reaction, what happened, when, and which vaccine it followed, plus relevant allergies such as gelatin, latex or a previous severe reaction, gives a precise answer every time.

                ## Milestones
                1. Every household member asked, or their records checked, for past vaccine reactions.
                2. Each reaction written down with the vaccine, date and what happened.
                3. Allergies a clinician may ask about before vaccinating recorded on each page.
                4. Any reaction that worried you raised with your clinician and their advice noted.

                ## Notes
                Sore arms and a mild temperature are common and expected. Record them briefly, but keep the detail for anything that needed medical help.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each household page carries an allergies and reactions section, filled in or marked none known, with any significant reaction discussed with a clinician."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask each adult whether they have ever reacted badly to a vaccine"
                - "Check children's records for any noted reactions"
                - "Write allergies and reactions at the top of each person's page"
                - "Ask your clinician about any reaction that needed treatment"
            - name: Last tetanus dose for every adult
              description: |-
                ## Purpose
                Ask a room of adults when they last had a tetanus vaccine and most will guess. When someone cuts their hand in the garden or is bitten by a dog, the clinician will ask exactly that, and knowing whether the course is complete saves an unnecessary dose or prompts a needed one.

                ## Milestones
                1. Each adult's tetanus history found in their records or confirmed as unknown.
                2. The number of doses received and the date of the last one written on their page.
                3. Your health service's guidance on when adults need further doses noted.
                4. Anyone with an unknown or incomplete history asked to raise it with their practice.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every adult's page states their tetanus course status and last dose date, or records that it is unknown and has been raised with the practice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look for tetanus entries in each adult's records"
                - "Note the date of each adult's last tetanus dose on their page"
                - "Read your health service's guidance on adult tetanus doses"
                - "Ask the practice to check any adult whose history is unclear"
            - name: Backup copies of vaccination proof
              description: |-
                ## Purpose
                Losing a child health record book, or a phone full of photographed cards, takes years of evidence with it, and replacing records can take weeks. Scanning every card and certificate, and keeping copies in two places, means proof is available for a school, employer or emergency department even when the original is not.

                ## Milestones
                1. Every card, certificate and record page scanned or photographed clearly.
                2. Scans stored in a secure cloud folder and a second offline place.
                3. Originals kept together somewhere fire and water are unlikely to reach.
                4. A second adult knowing where both copies are.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Scans of every vaccination document exist in two separate places, and a second adult can find them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Scan each vaccination card, certificate and record page"
                - "Save the scans to a secure cloud folder named by person"
                - "Copy the folder to a second, offline location"
                - "Add the year's new scans to both backup copies @recurring(yearly)"
            - name: Monthly vaccination due-date check
              description: |-
                ## Purpose
                Calendars only help if someone looks ahead, and invitations from schools, practices and pharmacies arrive by letter, text and email at random. A ten-minute check once a month, scanning the next three months and the month's invitations, keeps bookings ahead of due dates rather than behind them.

                ## Milestones
                1. A fixed day each month set aside for the check.
                2. Doses due in the next three months listed at each check.
                3. Every invitation received that month either booked or answered.
                4. Six months in a row with no dose passing its due date unbooked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks completed, with no due dose left unbooked at the end of any of them."
                cadence: rolling
              tasks:
                - "Pick a monthly day and put the check in your calendar"
                - "Scan the next three months of due doses and the month's invitations @recurring(monthly:12)"
                - "Book or reply to anything that needs action the same day"
                - "Note on the person's page when each booking is made"
            - name: Autumn flu vaccination round for the household
              description: |-
                ## Purpose
                Flu vaccines are offered each autumn to particular groups, such as young children, older adults, pregnant women and people with certain conditions, and eligibility shifts as people age or their health changes. Planning the round in early autumn, person by person, gets everyone eligible vaccinated before winter rather than in a rushed December.

                ## Milestones
                1. This year's eligible groups checked against every household member.
                2. Appointments booked for eligible adults and school or nursery sessions confirmed for children.
                3. Each flu vaccine recorded on the person's page within a week.
                4. Anyone not eligible for a free vaccine given a clear yes or no on paying for one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every eligible household member receives a flu vaccine before the end of November each year, with each dose recorded."
                cadence: cyclic
              tasks:
                - "Check this year's flu vaccine eligible groups against each person"
                - "Book flu vaccines for eligible adults when invitations open @recurring(yearly)"
                - "Ask the school or nursery for the date of the children's flu session @recurring(yearly)"
                - "Record each flu dose on the right page within a week"
            - name: Seasonal covid booster eligibility check
              description: |-
                ## Purpose
                Covid booster programmes now change from season to season, often offered to older people, care home residents and those with weakened immune systems. A short check when each season's programme is announced tells you who in the household is eligible this time, so nobody misses a dose they qualify for or chases one they do not.

                ## Milestones
                1. The current season's eligible groups read from your health service.
                2. Each household member marked eligible or not this season.
                3. Eligible people booked through the route your health service uses.
                4. Each dose recorded with date and place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each season's covid booster eligibility is checked for every household member and eligible people are vaccinated and recorded."
                cadence: cyclic
              tasks:
                - "Find where your health service announces covid booster programmes"
                - "Check each person against the new season's eligible groups @recurring(yearly)"
                - "Book eligible people through the approved booking route"
                - "Record each booster on the person's page"
            - name: Recording each new dose within a week
              description: |-
                ## Purpose
                Records drift out of date the moment a jab is given and nobody writes it down, and official systems do not always capture doses from pharmacies or school sessions. Writing each dose on the home page within a week, and comparing home and official records every quarter, keeps both trustworthy.

                ## Milestones
                1. A habit of photographing the vaccination card or receipt at every appointment.
                2. Each new dose on the home page within seven days.
                3. Home and portal records compared each quarter.
                4. Any dose missing from the official record reported to the practice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over twelve months every dose given appears on the home page within a week and on the official record by the next quarterly comparison."
                cadence: rolling
              tasks:
                - "Photograph the card or receipt before leaving each appointment"
                - "Write the vaccine, date, batch and place on the person's page"
                - "Compare home pages with portal records for each person @recurring(quarterly)"
                - "Ask the practice to add any dose missing from their record"
            - name: Annual household vaccination review
              description: |-
                ## Purpose
                Once a year, every page deserves a proper look: birthdays move people into new programmes, schedules change, and small gaps creep back in. A yearly review, ideally in late summer before school starts and flu season opens, rolls the plan forward for the twelve months ahead.

                ## Milestones
                1. Every person's page read through and updated.
                2. New eligibilities from birthdays, pregnancies or conditions identified.
                3. The gap list updated and every new gap booked or explained.
                4. A one-paragraph summary of the coming year's doses written.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A review of every household page held in the same month for two consecutive years, each ending with a written plan for the year ahead."
                cadence: cyclic
              tasks:
                - "Hold the household vaccination review in late summer @recurring(yearly)"
                - "Check who moves into a new vaccine programme this year"
                - "Update the gap list with anything the review turns up"
                - "Ask the agent to draft a summary of the year's planned doses from the pages"
            - name: Start-of-school-year immunisation paperwork
              description: |-
                ## Purpose
                September brings consent forms for school vaccination sessions, nursery requests for immunisation status and new-starter health questionnaires, often due within days. Doing them all in one sitting, with each child's page beside you, avoids missed sessions caused by a form left in a school bag.

                ## Milestones
                1. Every school and nursery vaccination form for the year identified.
                2. Each form completed from the child's page and returned by its deadline.
                3. Session dates added to the shared calendar.
                4. Missed sessions followed up with the school nursing team within a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every school and nursery vaccination form is returned by its deadline each year, and any missed session has a catch-up date."
                cadence: cyclic
              tasks:
                - "Check each child's school bag and inbox for vaccination forms @recurring(yearly)"
                - "Complete each form from the child's vaccination page"
                - "Add every school session date to the shared calendar"
                - "Contact the school nursing team about any missed session"
            - name: Vaccination appointment day checklist
              description: |-
                ## Purpose
                Turning up without the child health record book, forgetting to mention a recent illness or leaving without the batch number all create work later. A short checklist used before every appointment covers what to bring, what to say and what to note before walking out.

                ## Milestones
                1. A checklist covering documents to bring, questions to ask and details to record.
                2. The checklist used at three appointments.
                3. Each appointment ending with the vaccine name, batch and next due date written down.
                4. The checklist adjusted after use to remove anything unnecessary.

                ## Notes
                Start from the **Operational checklist** template. Mention any fever, recent illness, pregnancy or new medicine at the start of the appointment.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written appointment checklist has been used at three vaccination appointments, each ending with full dose details recorded."
                cadence: rolling
              tasks:
                - "Create an appointment checklist from the Operational checklist template"
                - "List the documents and comfort items to bring"
                - "Add the details to record before leaving: vaccine, batch, next date"
                - "Revise the checklist after its third use"
            - name: Finishing multi-dose courses on time
              description: |-
                ## Purpose
                Some vaccines need two or three doses weeks or months apart, such as hepatitis B, HPV for some ages or shingles, and courses are easy to start and forget. Tracking each open course with its next dose date, and booking that dose before leaving the clinic, makes it far more likely the course is completed.

                ## Milestones
                1. Every course in progress listed with the doses given and the next one due.
                2. The next dose booked at each appointment where possible.
                3. A reminder set for any dose that cannot be booked yet.
                4. Each course marked complete on the person's page when finished.

                ## Notes
                If a dose is late, ask the practice before restarting. Many courses can simply continue, but that is their call, not yours.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every multi-dose course started in the household is either complete or has its next dose booked or reminded."
                cadence: rolling
              tasks:
                - "List every vaccine course currently in progress in the household"
                - "Ask for the next dose to be booked before leaving each appointment"
                - "Set a reminder for any dose that cannot be booked yet"
                - "Mark each course complete on the person's page"
            - name: Forty-eight hour after-jab note
              description: |-
                ## Purpose
                Most reactions to vaccines are mild and settle within a day or two, but parents in particular find it hard to remember afterwards what happened and when. A short note over the first 48 hours records temperature, sleep and anything unusual, which helps you answer questions at the next appointment and spot anything that needs advice.

                ## Milestones
                1. A simple note format ready before the appointment.
                2. Temperature, mood and the injection site noted at a few points over 48 hours.
                3. The note summarised in one line on the person's page.
                4. Anything beyond expected effects reported to the practice or out-of-hours service.

                ## Notes
                Follow your health service's advice on fever and pain relief after vaccination, and call for help straight away if you are worried.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "After each vaccination in the household a 48-hour note is kept and summarised in one line on the person's page."
                cadence: rolling
              tasks:
                - "Save your health service's after-vaccination advice where you can find it"
                - "Note temperature and the injection site the evening after the jab"
                - "Add a one-line summary of the 48 hours to the person's page"
                - "Phone the practice about anything beyond the expected effects"
            - name: Watching for schedule changes
              description: |-
                ## Purpose
                Health services add, move and retire vaccines more often than people realise: new RSV programmes, changed timings for meningitis vaccines and shifting shingles eligibility are recent examples in several countries. Checking once a year whether your schedule has changed, and what that means for each person, prevents a household plan built on an outdated chart.

                ## Milestones
                1. The page or bulletin where your health service announces schedule changes bookmarked.
                2. The year's changes read and summarised in a few lines.
                3. Each change checked against every household member.
                4. Pages and the calendar updated for anyone affected.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each year a short written summary of schedule changes exists, with every affected household member's page and calendar updated."
                cadence: cyclic
              tasks:
                - "Bookmark your health service's vaccination schedule announcements page"
                - "Read the year's schedule changes and summarise them @recurring(yearly)"
                - "Check which household members each change affects"
                - "Update affected pages and calendar entries"
            - name: Reading the vaccine pages of a child health record
              description: |-
                ## Purpose
                Child health record books pack a lot into small tables: abbreviations, combination vaccine names, batch stickers and stamps from different clinics. Learning to read them properly means you can answer a nursery form or spot a missing booster without asking a health visitor to interpret.

                ## Milestones
                1. The abbreviations used in your child's record listed with what they stand for.
                2. Each combination vaccine matched to the diseases it covers.
                3. Every entry in the record matched to a scheduled dose.
                4. Anything you could not interpret asked about at the next appointment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every vaccine entry in each child's record has been matched to a scheduled dose, with unclear entries explained by a health professional."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the abbreviations in your child's vaccination record"
                - "Look up which diseases each combination vaccine covers"
                - "Match each record entry to a dose on the national schedule"
                - "Ask the health visitor or nurse about anything still unclear"
            - name: Primary courses, boosters and minimum intervals
              description: |-
                ## Purpose
                Why does a baby need three doses of one vaccine but one of another, and why can a delayed dose sometimes just be given rather than restarting? Understanding the difference between a primary course and a booster, and that schedules carry minimum gaps between doses, makes catch-up plans and clinic explanations far easier to follow.

                ## Milestones
                1. The terms primary course, booster and minimum interval explained in your own words.
                2. Two vaccines in your household's schedule traced from first dose to final booster.
                3. The reason for at least one minimum interval in your schedule understood.
                4. Your notes checked against your health service's own explanation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains primary courses, boosters and intervals using two vaccines from the household's own schedule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's explanation of how vaccine schedules work"
                - "Trace two vaccines from the first dose to the final booster"
                - "Write a one-page note in your own words"
                - "Take any question the note raises to the next appointment"
            - name: Live and non-live vaccines in your household
              description: |-
                ## Purpose
                Some vaccines contain weakened live organisms and others do not, and the difference matters for pregnancy, for people on immune-suppressing treatment and for spacing certain vaccines apart. Knowing which category each of your household's vaccines falls into helps you ask the right questions, while the decisions stay with your clinician.

                ## Milestones
                1. Each vaccine on the household schedule marked as live or non-live from an official source.
                2. The situations in which live vaccines need extra care listed from that source.
                3. Anyone in the household those situations apply to identified.
                4. Questions for the clinician written down for each person affected.

                ## Notes
                Never delay or skip a vaccine on this basis alone. Bring the question to the person giving it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every vaccine on the household schedule is marked live or non-live from an official source, with questions listed for anyone affected."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find an official list of which vaccines are live"
                - "Mark each vaccine on the household pages as live or non-live"
                - "Note which household members need extra care with live vaccines"
                - "Write questions for the clinician about each person affected"
            - name: Telling expected reactions from warning signs
              description: |-
                ## Purpose
                A sore arm, a mild temperature or a grumpy baby are common after vaccination; a severe allergic reaction, a seizure or a very high fever need urgent help. Learning your health service's list of what is expected and what is not, and keeping it where the household can see it, means a calm response either way.

                ## Milestones
                1. Your health service's list of common and serious reactions read.
                2. A one-page card written with expected effects and warning signs.
                3. The number to call in an emergency and for non-urgent advice on the card.
                4. Every adult in the house shown the card.

                ## Notes
                Use your health service's wording. The card organises their advice and does not replace it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A card listing expected reactions, warning signs and who to call, written from official guidance, is known to every adult in the house."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's guidance on reactions after vaccination"
                - "Write a one-page card of expected effects and warning signs"
                - "Add the emergency and advice numbers to the card"
                - "Show the card to every adult in the house"
            - name: Trustworthy sources for vaccine questions
              description: |-
                ## Purpose
                Search results and social feeds mix good information with confident nonsense, and a worried parent at midnight is the person most exposed to it. Choosing three or four reliable sources in advance, such as your national health service, the public health agency and the vaccine's official leaflet, gives you somewhere solid to look first.

                ## Milestones
                1. Three or four official or professional sources chosen and bookmarked.
                2. The official patient leaflet located for each vaccine your household receives.
                3. A habit of checking a claim against your chosen sources before acting on it.
                4. One question that worried you answered from those sources or by a clinician.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bookmarked list of three or four trusted vaccine information sources is shared with the household's adults."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Bookmark your national health service's vaccination pages"
                - "Add your public health agency and medicines regulator pages"
                - "Find the official patient leaflet for each vaccine due this year"
                - "Share the bookmarked list with the other adults in the house"
            - name: Helping a child through an injection
              description: |-
                ## Purpose
                Children who dread injections can make appointments harder each time, and fear learned at five can last into adulthood. A few prepared techniques, chosen for your child's age, such as honest short explanations, distraction, holding positions and a planned reward, can make the next appointment noticeably calmer.

                ## Milestones
                1. Two or three age-appropriate coping techniques chosen.
                2. The child prepared with an honest, short explanation a day or so before.
                3. A comfort hold agreed with the nurse at the appointment.
                4. What worked noted on the child's page for next time.

                ## Notes
                Avoid promising it will not hurt. Children cope better with a truthful, calm description.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note on the child's page records which coping techniques were used at the last appointment and how well each worked."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's tips for children's injections"
                - "Choose two techniques suited to your child's age"
                - "Ask the nurse about a comfort hold when you arrive"
                - "Write on the child's page what helped and what did not"
            - name: Fainting and needle anxiety plan for adults
              description: |-
                ## Purpose
                Plenty of adults skip boosters because they faint or panic at needles, and say nothing about it. Telling the clinic in advance, asking to lie down, and learning a simple muscle-tensing technique often turns an avoided appointment into a manageable one.

                ## Milestones
                1. The specific fear or fainting pattern written down in a sentence.
                2. A muscle-tensing or breathing technique practised beforehand.
                3. The clinic told about the anxiety when booking.
                4. One overdue vaccine received using the plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An adult with needle anxiety has received at least one overdue vaccine using a written plan agreed with the clinic."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence on what happens when you face a needle"
                - "Practise a muscle-tensing technique for a few minutes each day before the appointment"
                - "Tell the clinic about the anxiety when you book"
                - "Ask to lie down for the injection"
            - name: Adult catch-up when childhood history is unknown
              description: |-
                ## Purpose
                Many adults have no childhood records at all, especially if they grew up abroad or their parents have died. Rather than guessing, a conversation with the practice decides which vaccines to offer as a catch-up, often MMR and tetanus-containing doses, and ends the uncertainty for good.

                ## Milestones
                1. Every source of possible records checked, including parents or siblings.
                2. The missing history explained to the practice and a catch-up plan requested.
                3. The agreed catch-up plan written on the person's page.
                4. Each catch-up dose given and recorded.

                ## Notes
                Extra doses of most routine vaccines are usually considered safe, but the decision about what to give belongs to the clinician.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An adult with no childhood vaccination record has a catch-up plan agreed with their practice, written down and under way."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask parents or older siblings what they remember or kept"
                - "Book a practice appointment to discuss an unknown vaccination history"
                - "Write the agreed catch-up plan on the person's page"
                - "Book each catch-up dose at the intervals the practice gives"
            - name: Choosing a vaccination record format
              description: |-
                ## Purpose
                Paper pages, a spreadsheet, a health app and a notes system all work, and the worst choice is several at once. Picking one format the whole household can reach, judged on privacy, export, sharing and whether it will still exist in ten years, keeps records in one place.

                ## Milestones
                1. Three candidate formats listed, including at least one non-app option.
                2. Each scored on privacy, sharing, export and longevity.
                3. One format chosen and the reason written down.
                4. Existing pages moved into the chosen format.

                ## Notes
                Health apps may store data with a company. Read how the data is held and whether it can be exported before committing.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One record format is chosen for the household with a written reason, and all vaccination pages live in it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List three ways the household could keep its vaccination records"
                - "Score each on privacy, sharing, export and longevity"
                - "Write down the chosen format and why"
                - "Move every existing page into the chosen format"
            - name: Vaccines outside the free schedule
              description: |-
                ## Purpose
                Certain vaccines are available privately or for a fee but are not offered free to everyone, for example chickenpox in some countries, or meningitis B for older children who missed the infant programme. Deciding case by case, with the facts and costs written down and a clinician's view, is better than an impulse purchase or a vague worry.

                ## Milestones
                1. Vaccines available locally but outside your free schedule listed.
                2. For each one considered, the cost, the number of doses and where it is offered noted.
                3. A clinician or pharmacist asked whether it is sensible for the person concerned.
                4. A yes or no decision recorded for each with the reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each optional vaccine considered for a household member has a recorded decision, cost and the clinician's view."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List vaccines offered locally outside the free schedule"
                - "Note the cost and number of doses for each one considered"
                - "Ask a pharmacist or clinician whether it suits the person"
                - "Record a yes or no decision with the reason"
            - name: Antibody test or another dose
              description: |-
                ## Purpose
                Where records are lost, a clinician sometimes offers a blood test for antibodies to certain diseases, such as measles, hepatitis B or chickenpox, rather than simply giving another dose. Knowing when that choice exists, what each route involves and what it costs lets you have a short, informed conversation instead of a confused one.

                ## Milestones
                1. The vaccines for which a test might be offered identified with your clinician.
                2. The cost, timing and next steps of each route written down.
                3. A choice made with the clinician and recorded.
                4. Any test result filed and the follow-up dose booked if needed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on testing or vaccinating, made with a clinician, exists for each disease where a record was missing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the clinician whether an antibody test is an option for the missing record"
                - "Write down the cost and timing of testing versus vaccinating"
                - "Record the choice made with the clinician"
                - "File the test result and book any dose it calls for"
            - name: Reporting a suspected vaccine side effect
              description: |-
                ## Purpose
                Medicines regulators in most countries run a public scheme for reporting suspected side effects, and those reports are how rare problems are spotted. Knowing how to report, and keeping the batch number and dates ready, means that if something unexpected happens you can report it properly in fifteen minutes.

                ## Milestones
                1. Your country's side effect reporting scheme found and bookmarked.
                2. The details a report needs listed: vaccine, batch, date, reaction and outcome.
                3. Batch numbers present on every household page for recent doses.
                4. Any significant reaction reported and a copy of the report filed.

                ## Notes
                Report as well as, not instead of, seeking medical care. Clinicians can also report on your behalf.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The reporting scheme is bookmarked, batch numbers are recorded for recent doses, and any significant reaction has a filed report."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find and bookmark your medicines regulator's side effect reporting page"
                - "List the details a report asks for"
                - "Check recent doses on each page have a batch number"
                - "File a copy of any report you submit on the person's page"
            - name: Preparing for a conversation with a hesitant relative
              description: |-
                ## Purpose
                When a partner, grandparent or co-parent is unsure about a vaccine, arguments rarely change minds and can stall a child's schedule for months. Writing down their specific concerns, finding the official answer to each, and suggesting a joint appointment with a nurse or doctor keeps the conversation respectful and moves it forward.

                ## Milestones
                1. The relative's concerns written down in their own words.
                2. An official answer found for each concern, or marked for a clinician.
                3. A joint appointment with a nurse, doctor or pharmacist offered.
                4. The outcome and any agreed next step recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of a relative's concerns, each paired with an official answer or a clinician question, has been used in a joint conversation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the relative to name their main worries and write them down"
                - "Find the official answer to each worry from your trusted sources"
                - "Offer to book a joint appointment with a nurse or doctor"
                - "Write down what was agreed and any next step"
            - name: Proxy access to dependants' health records
              description: |-
                ## Purpose
                Many patient portals let a parent or carer view a child's or dependant's records, including vaccinations, but access has to be requested and often changes when a child turns a certain age. Setting it up properly saves a phone call every time a school or clinic asks for proof.

                ## Milestones
                1. The proxy access rules of your practice or portal read.
                2. Proxy access requested for each child or dependant who needs it.
                3. Vaccination pages visible through each proxy account.
                4. The age at which each child's access changes noted in the calendar.

                ## Notes
                Older children are entitled to privacy. Expect access to change at the age your health service sets, and respect it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every child or dependant who needs it has working proxy access to their vaccination records, with the date access changes in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your practice's rules on proxy access for children and dependants"
                - "Request proxy access for each child or dependant who needs it"
                - "Check the vaccination section is visible through each proxy account"
                - "Add the date each child's access changes to the calendar"
            - name: Baby's first vaccination appointment
              description: |-
                ## Purpose
                The first routine vaccinations usually come at around eight weeks, at a time when parents are exhausted and the appointment can feel daunting. Preparing the record book, the questions and a plan for the evening afterwards makes the first visit straightforward and sets the pattern for the rest of the year.

                ## Milestones
                1. The appointment booked as soon as the invitation arrives.
                2. The child health record book, questions and feeding plan ready the day before.
                3. Every dose given recorded with batch numbers before leaving.
                4. The next appointment booked or its expected date in the calendar.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The baby's first vaccination appointment happens on schedule, with every dose recorded and the next appointment in the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the first vaccination appointment when the invitation arrives"
                - "Write your questions in the back of the health record book"
                - "Plan a feed for straight after the injections"
                - "Book the next appointment before leaving the clinic"
            - name: Preschool booster appointment
              description: |-
                ## Purpose
                The booster doses offered before a child starts school are among the most commonly missed, because there is no baby clinic routine any more and life is busy. Treating it as a fixed event, booked ahead of the school start date, keeps the record complete when the school asks.

                ## Milestones
                1. The preschool boosters your schedule includes confirmed.
                2. An appointment booked before the school start date.
                3. The doses recorded on the child's page and in the record book.
                4. Proof ready for the school if they ask for it.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The child's preschool boosters are given and recorded before their first school term starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which boosters your schedule gives before school starts"
                - "Book the booster appointment for before the school start date"
                - "Prepare the child using the techniques that worked last time"
                - "Record the boosters on the child's page"
            - name: Teenage school vaccination sessions
              description: |-
                ## Purpose
                Teenagers are often offered HPV, a tetanus, diphtheria and polio booster and a meningitis vaccine through school, and absences on the day are common. Knowing which sessions apply, returning consent forms and arranging a catch-up for any missed dose closes the last set of childhood vaccinations properly.

                ## Milestones
                1. The vaccines offered to your teenager's year group identified.
                2. Consent forms discussed with the teenager and returned.
                3. Each dose confirmed as given and recorded on their page.
                4. Any missed dose booked through the school nursing team or practice.

                ## Notes
                Talk it through with your teenager first. In many places they can consent for themselves if judged competent.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every vaccine offered to the teenager through school is given or has a booked catch-up, and each is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find out which vaccines your teenager's year group is offered"
                - "Talk the vaccines through with your teenager before signing anything"
                - "Confirm after each session that the dose was given"
                - "Book a catch-up for any session they missed"
            - name: Leaving home for university or college
              description: |-
                ## Purpose
                Students living close together in halls are at higher risk of meningitis and measles outbreaks, and freshers often leave without a copy of their own records. A check in the summer before they go, with any missing dose booked and a record they own, protects them and saves panicked calls home.

                ## Milestones
                1. The student's page checked for meningitis and MMR doses recommended for their age.
                2. Any missing dose given before term starts.
                3. A copy of their full vaccination record handed over or shared.
                4. The student registered with a practice near their place of study.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before leaving home, the student has any recommended missing doses, their own copy of the record and a registration plan for a local practice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the student's page for meningitis and MMR doses"
                - "Book any missing dose for before term begins"
                - "Give the student a copy of their full vaccination record"
                - "Remind the student to register with a practice near campus"
            - name: Vaccinations around a 65th birthday
              description: |-
                ## Purpose
                Reaching 65, or whichever age your health service uses, can bring a cluster of new offers, such as pneumococcal, shingles and annual flu, and sometimes RSV a few years later. Planning them as one short programme, rather than waiting for separate letters, gets them all done within a few months of eligibility.

                ## Milestones
                1. The vaccines your health service offers at this age listed.
                2. The order and spacing of doses confirmed with the practice.
                3. Each appointment booked and attended.
                4. All new doses recorded on the person's page.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every vaccine offered at the eligibility birthday is given or declined with a reason within six months of becoming eligible."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the vaccines your health service offers from age 65"
                - "Ask the practice for the order and spacing of the doses"
                - "Book each appointment as soon as eligibility starts"
                - "Record each new dose on the person's page"
            - name: Grandparents' and carers' vaccines before a newborn arrives
              description: |-
                ## Purpose
                Babies are most vulnerable to whooping cough, flu and measles before their own vaccines take effect, and the adults who will hold them most are often grandparents or childminders with uncertain records. Asking them, kindly and early, to check their own status turns their visits into a lower-risk part of the baby's first months.

                ## Milestones
                1. The adults who will have regular close contact with the baby listed.
                2. Each one asked to check their flu, whooping cough and MMR status with their practice.
                3. Any recommended dose received before the due date where possible.
                4. Your list updated with each person's answer.

                ## Notes
                This is an invitation, not a condition of visiting. Present it as part of preparing for the baby.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every adult with regular close contact with the baby has been asked to check their vaccinations, with each answer recorded before the birth."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the adults who will look after the baby regularly"
                - "Ask each one to check their vaccinations with their own practice"
                - "Note each person's answer on your list"
                - "Send a gentle reminder a month before the due date"
            - name: First-year vaccination plan for a new baby
              description: |-
                ## Purpose
                Four or five vaccination appointments usually fill a baby's first year, each with several vaccines, and illness or holidays easily push one late. A plan for the whole year, set up in the first weeks, shows every appointment, what is due and who is taking the baby, so the schedule holds through the chaos.

                ## Milestones
                1. The baby's page created from the national schedule with every first-year dose listed.
                2. The expected appointment months entered in the shared calendar.
                3. Each appointment attended and recorded with batch numbers.
                4. All first-year doses complete by the first birthday or a catch-up booked.

                ## Notes
                A cold is rarely a reason to postpone. If the baby is unwell, phone the clinic and let them decide.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every first-year scheduled dose is given and recorded by the first birthday, or any late dose has a booked catch-up date."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create the baby's vaccination page from the national schedule"
                - "Add every first-year appointment month to the shared calendar"
                - "Agree who will take the baby to each appointment"
                - "Check off each appointment on the baby's page as it happens"
            - name: Vaccinations during pregnancy
              description: |-
                ## Purpose
                Many health services offer vaccines in pregnancy that protect the baby in its first months, commonly whooping cough, flu and in some places RSV, each at a particular stage. Tracking which are offered, when and whether they have been given is easy to lose among all the other antenatal appointments.

                ## Milestones
                1. The vaccines offered in pregnancy by your health service listed with their recommended timing.
                2. Each vaccine discussed with the midwife or doctor.
                3. Agreed vaccines given and recorded in the maternity notes and at home.
                4. The record of pregnancy vaccines kept for the baby's own page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every vaccine offered in pregnancy is discussed with the midwife or doctor and either given at the agreed stage or declined, with each recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your midwife which vaccines are offered in pregnancy and when"
                - "Add each vaccine's recommended week to the calendar"
                - "Record each pregnancy vaccine given at home and in the maternity notes"
                - "Copy the details onto the baby's page after the birth"
            - name: Keeping an older relative's vaccinations current
              description: |-
                ## Purpose
                Older parents or relatives in your care are often eligible for the most vaccines, flu, covid, pneumococcal, shingles and RSV among them, and least able to book or remember them. Holding their record alongside your own, with their permission, means autumn programmes and one-off doses do not depend on them reading every letter.

                ## Milestones
                1. Permission from the relative to help with their vaccination record.
                2. A page for the relative with their history from the practice.
                3. Their eligible vaccines listed with due dates.
                4. Each autumn dose confirmed as given, whether at home, a pharmacy or a care home.

                ## Notes
                If they live in a care home, ask how the home records vaccines and who to contact about them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The relative has an up-to-date vaccination page, and every vaccine they are eligible for each year is given or declined with a reason."
                cadence: cyclic
              tasks:
                - "Ask your relative whether they would like help with their vaccinations"
                - "Get their vaccination history from their practice with their consent"
                - "Check their eligibility for the autumn vaccines and book them @recurring(yearly)"
                - "Confirm with the care home or pharmacy which doses were given @recurring(yearly)"
            - name: Household with someone on immune-suppressing treatment
              description: |-
                ## Purpose
                When someone in the house has a weakened immune system through cancer treatment, a transplant or immune-suppressing medicines, their own vaccine plan changes and the people around them may be advised to be vaccinated to protect them. Getting written guidance from their specialist team, and tracking it for everyone, avoids both risky mistakes and unnecessary caution.

                ## Milestones
                1. The specialist team asked which vaccines the person should and should not have.
                2. The team asked which vaccines are recommended for household contacts.
                3. The guidance written on the person's page and on each contact's page.
                4. Recommended doses booked for the person and for household contacts.

                ## Notes
                Some live vaccines may not be suitable for the person themselves. Always check with their specialist team before any vaccine.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The specialist team's written vaccine guidance for the person and their household contacts is recorded and every recommended dose is booked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the specialist team which vaccines the person should and should not have"
                - "Ask which vaccines household contacts should have to protect them"
                - "Write the guidance on every affected page"
                - "Recheck the guidance with the specialist team each year @recurring(yearly)"
            - name: Children joining through adoption, fostering or a new partnership
              description: |-
                ## Purpose
                A newly arrived child's vaccination history may sit with a previous carer, a social worker, another country's health service or a former partner. Gathering it early, and asking the practice to review it, prevents both missed doses and needless repeats.

                ## Milestones
                1. Every possible holder of the child's records identified.
                2. Records requested from each, with the right consents.
                3. The child's page built from what is received.
                4. A practice review of the history held and any catch-up booked.

                ## Notes
                For fostered children, the agency or local authority usually holds health information and sets who can consent to vaccines. Ask them first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The child's vaccination history is gathered, reviewed by the practice and any agreed catch-up doses are booked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List everyone who might hold the child's vaccination records"
                - "Request the records from each holder with the right consents"
                - "Build the child's vaccination page from the records received"
                - "Book a practice review of the history and any catch-up"
            - name: Shared vaccination record across two homes
              description: |-
                ## Purpose
                Children who split time between separated parents often end up with two half records, or a booster that each parent thought the other had booked. Agreeing one shared record, who books what, and how updates are passed on keeps the child's schedule complete whichever house they are in.

                ## Milestones
                1. A shared record both parents can view.
                2. An agreement on who books which appointments.
                3. Updates passed on within a week of each dose.
                4. A quarterly exchange of any changes held for six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both parents can see the same up-to-date record, and every dose in six months has been shared within a week."
                cadence: rolling
              tasks:
                - "Propose a single shared vaccination record to the other parent"
                - "Agree in writing who books which appointments"
                - "Send the other parent each new dose within a week"
                - "Swap any record changes with the other parent @recurring(quarterly)"
            - name: Workplace-required vaccinations and proof
              description: |-
                ## Purpose
                Jobs in healthcare, social care, childcare, laboratories and some trades may require proof of hepatitis B, MMR, chickenpox or other immunity, and starting dates slip when evidence is missing. Keeping a work-ready summary and occupational health letters together means a new job or annual compliance check takes minutes.

                ## Milestones
                1. The vaccines and evidence your employer or course requires listed.
                2. Proof gathered for each, including any antibody results.
                3. A one-page work summary prepared from your record.
                4. Any expiring proof or booster flagged in the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A work vaccination summary with proof for every required vaccine exists and is checked each year against the employer's requirements."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Ask your employer or occupational health which vaccines they require"
                - "Gather proof for each required vaccine"
                - "Prepare a one-page work vaccination summary"
                - "Check the summary against this year's requirements @recurring(yearly)"
            - name: Rebuilding a vaccination history across countries
              description: |-
                ## Purpose
                Families who have moved country often hold records in other languages, under different vaccine names and schedules, sometimes only partly. Translating and matching each dose to your current country's schedule, then having the practice enter it, produces one history that every future clinician can read.

                ## Milestones
                1. Every foreign record gathered and translated, at least for vaccine names and dates.
                2. Each foreign dose matched to the equivalent in your current schedule.
                3. The translated history given to the practice and entered on their system.
                4. Remaining gaps added to the household gap list.

                ## Notes
                Vaccine brand names differ between countries. The disease list on the record or leaflet is more reliable than the name.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A translated history matched to the current schedule has been entered by the practice for every household member with foreign records."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Gather every vaccination record from previous countries"
                - "Ask the agent to draft a translation of the vaccine names and dates"
                - "Match each foreign dose to your current country's schedule"
                - "Give the translated history to the practice to enter"
            - name: Batch numbers ready for a product recall
              description: |-
                ## Purpose
                Recalls of a specific vaccine batch are rare, but when they happen the public is asked to check batch numbers, and most people cannot. Recording the batch number for every dose, as clinics already do, lets you answer a recall notice or a regulator question in seconds.

                ## Milestones
                1. Batch numbers found for doses given in the last five years where possible.
                2. A batch column added to every household page.
                3. Batch numbers captured at every new appointment.
                4. The regulator's recall notices page bookmarked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every household page carries a batch number column, filled for all doses in the last five years where the number could be found."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a batch number column to each household page"
                - "Copy batch numbers from cards and record stickers into the column"
                - "Ask the practice for batch numbers missing from your own papers"
                - "Bookmark your medicines regulator's recall notices page"
            - name: Revaccination after cancer treatment or transplant
              description: |-
                ## Purpose
                Chemotherapy, stem cell transplants and some other treatments can wipe out protection from childhood vaccines, and specialist teams often issue a revaccination schedule running over a year or two. Tracking that schedule separately, dose by dose and with the team's timing, keeps a complicated plan from stalling between hospital and practice.

                ## Milestones
                1. The specialist team's written revaccination schedule obtained.
                2. Who gives each dose, hospital or practice, confirmed.
                3. Every dose in the schedule entered in the calendar with its earliest date.
                4. Each dose recorded as given and the schedule completed.

                ## Notes
                Timing depends on recovery and blood results. Follow the team's dates, not the routine schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The specialist revaccination schedule is in the calendar and every dose given so far is recorded, with none past its date unbooked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the specialist team for the revaccination schedule in writing"
                - "Confirm whether the hospital or the practice gives each dose"
                - "Put every dose in the calendar with its earliest date"
                - "Record each dose as it is given"
            - name: International certificate of vaccination kept valid
              description: |-
                ## Purpose
                Entry rules in certain countries require an internationally recognised vaccination certificate, most often for yellow fever, and a lost or unsigned certificate can mean being refused entry or vaccinated at the border. Keeping each certificate with the passport it belongs to, checked once a year, means it is ready long before any booking is made.

                ## Milestones
                1. Every household certificate found and matched to its holder.
                2. Each certificate checked for signature, stamp and correct name spelling.
                3. Certificates stored with passports and scanned into the backup.
                4. Any lost or faulty certificate reissued by a registered clinic.

                ## Notes
                Planning the vaccines for a particular trip belongs with your travel health preparation; this project keeps the proof in order.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every certificate held by the household is complete, matches its holder's passport name and is checked once a year."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "Find every international vaccination certificate in the household"
                - "Check each certificate's stamp, signature and name spelling"
                - "Store each certificate with the matching passport"
                - "Check certificates alongside passports @recurring(yearly)"
---

# Vaccination Schedule Tracking

This area is for whoever keeps track of the household's jabs: a parent juggling a baby's schedule and a teenager's school sessions, an adult who has no idea when their last tetanus was, or someone looking after an older relative's autumn vaccines. It starts with the foundations (every document gathered, official histories requested, one page per person and a gap list), then the routines that keep records current, the knowledge that makes schedules make sense, the decisions about catch-ups and optional doses, the appointments worth preparing for, the life stages that change what is due, and finally the specialist work of rebuilding lost histories and tracking revaccination.

What repeats is a monthly look at what falls due next, a quarterly check that home and official records agree, the autumn flu and booster round, the start-of-school-year paperwork and a yearly household review. The Person, Risk register and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
