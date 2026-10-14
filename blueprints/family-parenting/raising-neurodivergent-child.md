---
id: family-parenting.raising-neurodivergent-child
name: Raising a Neurodivergent Child
description: "Home support for an autistic or ADHD child: the route to diagnosis, sensory needs, visual routines, calmer meltdowns, sleep and food, medication logs, siblings, other families and your own stamina as a parent carer."
category: personal
version: 1.0.0
tags: [family-parenting, raising-neurodivergent-child, parent, carer, autism, adhd, sensory-needs, routines]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - sleep-review
    - weekly-meal-plan
    - meeting-notes
    - purchase-decision
    - trip
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Raising a Neurodivergent Child
          description: "Supporting an autistic or ADHD child at home with routines, sensory needs, diagnosis pathways and connection with other families."
          projects:
            - name: Two-week home observation diary
              description: |-
                ## Purpose
                Before anyone agrees to an assessment, a doctor will want specific examples rather than a general worry. Two weeks of short daily notes on sleep, eating, play, communication, sensory reactions and big feelings turns a sense that something is different into evidence a clinician can work with, and often shows patterns you had not spotted.

                ## Milestones
                1. A simple diary format with one line each for sleep, food, play, communication, sensory reactions and distress.
                2. Fourteen days of entries, with at least three concrete examples under each heading.
                3. Notes added from one other adult who knows your child well, such as a grandparent or nursery key worker.
                4. A one-page summary of the clearest patterns, ready to take to the doctor.

                ## Notes
                Write what happened, not what you think it means: 'covered his ears and left the kitchen when the blender started' is more useful than 'sensitive to noise'.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fourteen-day observation diary and a one-page summary of patterns exist and are ready to hand to a doctor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a notebook or phone note with six headings for daily observations"
                - "Write a few lines under each heading every evening for fourteen days"
                - "Ask another adult who knows your child to note what they see for a week"
                - "Summarise the strongest patterns on one page with dated examples"
            - name: Asking your doctor for an autism or ADHD referral
              description: |-
                ## Purpose
                In most health systems the route to a diagnostic assessment starts with a referral from a family doctor, a paediatrician or a school health service, and the appointments are short. Going in with a written summary, a clear request and a list of questions makes it far more likely you leave with a referral made, rather than advice to wait and see.

                ## Milestones
                1. An appointment booked, with a longer slot requested if your practice offers one.
                2. Your observation summary and any written nursery or school comments printed to hand over.
                3. A referral made, or a written reason why not and what happens next.
                4. The referral date, the service it went to and the expected wait written down.

                ## Notes
                If the answer is to wait and see, ask when you should come back and what would change the decision, and write the answer down before you leave the room.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A referral to a diagnostic service has been made, or a written reason and review date recorded, with the referral date noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Phone the practice and ask for a longer appointment about a development concern"
                - "Print your observation summary and any written comments from nursery or school"
                - "Ask directly for a referral for an autism or ADHD assessment"
                - "Write down the referral date, the service named and the expected wait"
                - "Ring the service after six weeks to confirm the referral arrived"
            - name: Developmental history pack for the assessment
              description: |-
                ## Purpose
                Diagnostic teams almost always ask about pregnancy, birth, early milestones, speech, play and family history, often on a long questionnaire sent with the appointment letter. Gathering it now from health records, baby books, photos, videos and relatives means the forms take an evening rather than a fortnight, and nothing important rests on a tired memory.

                ## Milestones
                1. Dates for sitting, walking, first words and pointing found in health records or the baby book.
                2. Short video clips of typical play, communication and distress saved in one folder.
                3. Family history of autism, ADHD, dyslexia or similar differences noted after asking relatives.
                4. A typed timeline from birth to today, under three pages, ready to attach to any form.

                ## Notes
                Videos are often more useful than descriptions, but ask the team how they want them shared rather than emailing large files to a general inbox.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A developmental timeline under three pages and a folder of dated clips are ready to send with the assessment questionnaire."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the child health record or baby book and note the dates of early milestones"
                - "Ask grandparents what they remember about your child's first three years"
                - "Save three or four short videos of everyday play and communication in one folder"
                - "Type a dated timeline from birth to now and keep it under three pages"
            - name: Local diagnosis pathways and waiting times map
              description: |-
                ## Purpose
                Waiting lists for autism and ADHD assessments can run from months to several years, and the options differ by region: public services, a choice of provider where your system allows it, charities and private clinics. Knowing the routes, their real waits and whether a private diagnosis is accepted for follow-up care lets you choose deliberately instead of finding out two years in.

                ## Milestones
                1. Every route available where you live listed, with the provider, the age range covered and the published wait.
                2. A clear answer recorded on whether your public service accepts a private diagnosis and private prescribing.
                3. Costs and what is included noted for any private option you would consider.
                4. A decision written down: which route, and what you will do while you wait.

                ## Notes
                Some systems let you choose a different provider for an assessment, for example the right to choose in England, so ask your doctor what applies to you. A private report that local services will not accept can leave you paying twice.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of every assessment route available locally, with waits and costs, ends in a recorded choice of route."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the assessment services that cover your area and their published waits"
                - "Ask the doctor or service whether a choice of provider is open to you"
                - "Check whether your public service accepts private diagnoses for ongoing care"
                - "Write down the route you have chosen and what you will do while waiting"
            - name: Sensory profile of your child at home
              description: |-
                ## Purpose
                Many autistic and ADHD children are over-responsive to some senses and under-responsive to others: the child who cannot bear sock seams may also crash into furniture looking for pressure. Mapping all eight senses, including balance, body position and internal signals, explains a lot of daily friction and tells you what to change first at home.

                ## Milestones
                1. Notes for each of the eight senses on what your child avoids, seeks or barely notices.
                2. The three sensory issues causing most daily distress picked out.
                3. One change at home tried for each of those three, with what happened recorded.
                4. The profile shared with any occupational therapist your child sees.

                ## Notes
                An occupational therapist can carry out a formal sensory assessment. Your home profile does not replace it, but it makes that appointment far more productive.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written sensory profile covering all eight senses names the three biggest issues and one tested change for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the eight senses on one page, including balance, body position and interoception"
                - "Note what your child avoids, seeks and does not notice under each sense"
                - "Pick the three sensory issues that cause the most distress each day"
                - "Try one small change for each and record whether it helped"
            - name: Triggers and soothers map
              description: |-
                ## Purpose
                Distress that looks sudden usually has a build-up: a loud shop, a skipped snack, a change of plan, the end of a screen session. A map of what tends to tip your child over and what reliably brings them back gives every adult in the house the same first moves, and makes a bad afternoon easier to read.

                ## Milestones
                1. A list of at least ten triggers, sorted into sensory, change, demands, hunger or tiredness, and social.
                2. A list of what helps, split into before, during and after a hard moment.
                3. The early warning signs your child shows before distress peaks written down.
                4. The map kept where every adult in the house can see it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map of triggers, early warning signs and soothers is on display at home and every adult in the house has read it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look back over the last month and list what came before each hard moment"
                - "Write what helps before, during and after distress, in your child's own terms"
                - "Note the small early signs that come before a meltdown"
                - "Ask your child which calming things they like best, using pictures if needed"
                - "Put the finished map inside a kitchen cupboard door where adults will see it"
            - name: Visual daily routine for home
              description: |-
                ## Purpose
                Spoken instructions vanish the moment they are said, which is hard for a child who processes language slowly or struggles to hold steps in mind. A picture or word timetable for mornings, after school and bedtime cuts repeated reminders, makes changes visible in advance and lets your child check what comes next without asking.

                ## Milestones
                1. Morning, after-school and bedtime routines broken into five to eight steps each.
                2. Pictures, symbols or words chosen to suit your child's reading level, then printed or drawn.
                3. The schedules placed where each routine happens, at your child's eye level.
                4. A symbol for a change of plan added, and used at least once with warning.

                ## Notes
                Let your child help choose the pictures, and the order wherever it does not matter. A schedule they helped make is one they are more likely to use.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Picture or word schedules for mornings, after school and bedtime are up at child height and have been used daily for two weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the steps of your current morning routine as it really happens"
                - "Choose pictures or symbols for each step with your child"
                - "Print and fix the schedules where each routine takes place"
                - "Check the visual routine still matches real life @recurring(monthly:8)"
            - name: Calm-down space made with your child
              description: |-
                ## Purpose
                A small, predictable spot to retreat to, with low light, soft textures and a few chosen objects, gives an overwhelmed child somewhere to go that is not a punishment. Building it together and practising using it on good days means it is familiar when it is actually needed.

                ## Milestones
                1. A spot chosen away from the busiest part of the house, such as a corner, a play tent or the space under a raised bed.
                2. Five to eight items in it that your child picked, such as a blanket, ear defenders, fidgets or a favourite book.
                3. A simple rule agreed: anyone can go there, nobody is sent there.
                4. The space used at least three times on calm days so it feels normal.

                ## Notes
                Keep it free of anything that could hurt a child who is thrashing, and never lock or block it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calm space chosen and stocked with your child exists and has been used on at least three calm days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk round the house with your child to pick a quiet corner"
                - "Gather a few soft, calming items your child chooses for the space"
                - "Agree out loud that the space is for anyone and never a punishment"
                - "Visit the space together on a good day and stay for five minutes"
            - name: Home safety check for climbing and running off
              description: |-
                ## Purpose
                Some autistic and ADHD children climb high, open doors at night or run from a parent without warning, and water and roads are the biggest dangers when they do. A room-by-room check with locks, window restrictors, door alarms and an ID card in the coat closes the gaps before an incident rather than after one.

                ## Milestones
                1. Every external door, window and gate checked, with any gaps fixed or on a list.
                2. Door or bedroom alarms fitted where night wandering is a risk.
                3. An ID card or band with your phone number carried by your child when out.
                4. A missing-child sheet with a current photo and description ready to hand to police or staff.
                5. Neighbours on both sides told that your child may wander and what to do.

                ## Notes
                Check ponds, pools and water butts near home in particular. Ask your local family support service whether they can help fund safety equipment.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Doors, windows and gates are secured, a missing-child sheet with a current photo exists, and both neighbours have been told."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Walk every room and the garden noting doors, windows and climbing risks"
                - "Fit window restrictors and high bolts on the doors that need them"
                - "Make a missing-child sheet with a current photo and description"
                - "Test door alarms and window locks @recurring(quarterly)"
            - name: Emergency communication and health passport
              description: |-
                ## Purpose
                In a hospital, at a police contact or with a stand-in carer, nobody will know that your child stops speaking when stressed, cannot bear being touched or needs a parent present. A two-page passport covering communication, sensory needs, medicines and what calms them lets strangers help instead of making things worse.

                ## Milestones
                1. Two pages covering diagnosis, communication, sensory needs, medicines, allergies and calming strategies.
                2. A photo of your child and emergency contacts on the front page.
                3. Copies in the car, on each parent's phone and with the main back-up carer.
                4. The passport added to your child's record at the local hospital or practice, if they allow it.

                ## Notes
                Many hospitals publish their own passport format for children with additional needs. Use it if yours does, so staff recognise it at a glance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page passport with photo and contacts is in the car, on both parents' phones and with the back-up carer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your local hospital whether it has a passport format for children with additional needs"
                - "Fill in communication, sensory needs, medicines and calming strategies"
                - "Save a copy on each parent's phone and leave a printed copy in the car"
                - "Check the passport is current and reprint it @recurring(yearly)"
            - name: Weekly look-back on hard moments and good days
              description: |-
                ## Purpose
                Memory is unreliable after a run of difficult days: everything feels worse than it was, and the good stretches get forgotten. Ten minutes each week logging meltdowns, shutdowns and calm days, with what came before them, builds a picture that shows whether changes are working and gives clinicians real numbers.

                ## Milestones
                1. A simple log with date, what happened, what came before, how long it lasted and what helped.
                2. Four consecutive weeks of entries.
                3. Patterns noted, such as the day of the week, time of day or places linked to hard moments.
                4. One change made at home because of a pattern the log showed.

                ## Notes
                Start from the **Metrics log** template. Log the good days too, or the record will tell a bleaker story than the truth.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log with at least four consecutive weeks of entries exists, and one change has been made because of a pattern in it."
                cadence: rolling
              tasks:
                - "Create a log with columns for date, event, lead-up, length and what helped"
                - "Fill in the week's hard moments and good days @recurring(weekly:fri)"
                - "Look across the last month for days, times or places that keep coming up"
                - "Bring a summary of the log to the next clinical appointment"
            - name: Sleep diary and wind-down routine
              description: |-
                ## Purpose
                Sleep problems are common in autistic and ADHD children, and short nights make sensory overload, attention and mood far harder the next day. A fortnight of sleep diary followed by a steady wind-down hour gives you something concrete to change, and the evidence a clinician will ask for before discussing any sleep medicine.

                ## Milestones
                1. Two weeks of sleep diary showing bedtime, time asleep, night wakings and wake time.
                2. A wind-down hour planned with screens off, dim light and the same steps each night.
                3. The wind-down routine kept on at least five nights a week for a month.
                4. The diary shared with your doctor if sleep is still poor after that month.

                ## Notes
                Start from the **Sleep review** template. Melatonin and other sleep medicines are prescribed for some neurodivergent children; that is a decision for your child's clinician, not a shop shelf.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A two-week sleep diary and a wind-down routine kept at least five nights a week for a month are both on record."
                cadence: rolling
              tasks:
                - "Start a sleep diary noting bedtime, sleep time, wakings and wake time"
                - "Plan a wind-down hour with the same steps in the same order each night"
                - "Look over the week's sleep notes and adjust one thing @recurring(weekly:mon)"
                - "Book a doctor's appointment if sleep is still poor after a month"
            - name: ADHD medication routine and review log
              description: |-
                ## Purpose
                Once a clinician has prescribed ADHD medicine, the practical work falls to parents: giving it at the same time, noticing appetite, sleep and mood, ordering repeats in time and bringing useful notes to reviews. A simple routine and log stops missed doses and running out, and lets the prescriber adjust treatment from evidence rather than impressions.

                ## Milestones
                1. The medicine, timing and any instructions written exactly as the prescriber gave them.
                2. A weekly note of appetite, sleep, mood and any side effects.
                3. Repeat prescriptions ordered with at least a week of medicine left.
                4. Height and weight recorded before each review, if the clinic asks you to.
                5. Questions for the next review written down in advance.

                ## Notes
                Never change the dose or stop the medicine without the prescriber's advice. Some ADHD medicines are controlled drugs with stricter rules on repeat prescriptions, so leave extra time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A medication log with weekly notes is kept and the medicine has not run out for three consecutive months."
                cadence: rolling
              tasks:
                - "Write the medicine, timing and instructions exactly as the prescriber gave them"
                - "Set a daily phone alarm for the time the medicine is due"
                - "Order the repeat prescription with a week of medicine left @recurring(monthly:12)"
                - "Record height, weight and side effect notes before each review @recurring(quarterly)"
            - name: Sunday preview of the week ahead
              description: |-
                ## Purpose
                Uncertainty is exhausting for many neurodivergent children, and a surprise supply teacher, dentist visit or houseguest can sour a whole week. Ten minutes on Sunday walking through the coming days on a visual calendar gives your child time to ask questions and prepare, and gives you early warning of the days that need extra support.

                ## Milestones
                1. A visual weekly calendar on the wall with each day's main events.
                2. A Sunday preview done with your child for four weeks in a row.
                3. Unusual events marked clearly, with a plan for each.
                4. Your child able to check the calendar themselves for what is next.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A visual weekly calendar is on the wall and the Sunday preview has happened four weeks running."
                cadence: rolling
              tasks:
                - "Put a large weekly calendar on the wall at your child's eye level"
                - "Walk through the coming week together on the calendar @recurring(weekly:sun)"
                - "Mark unusual events with a distinct colour or symbol"
                - "Agree a plan for the hardest day of the week before it arrives"
            - name: Safe foods list and gentle food exploration
              description: |-
                ## Purpose
                Lots of autistic children eat a small range of foods because of texture, smell, colour or brand, and pressure at the table usually narrows the list further. Keeping safe foods always available, and offering new foods slowly beside them with no demand to eat, protects nutrition and family meals while leaving room for change.

                ## Milestones
                1. A written list of every food your child reliably eats, including brands and how each is prepared.
                2. Safe foods available at every meal, without bargaining.
                3. One new or slightly changed food offered beside safe foods each week, with no pressure to taste.
                4. Your doctor or a dietitian consulted if the safe list is very short or growth is a worry.

                ## Notes
                Start from the **Weekly meal plan** template. Very restricted eating can be a feeding disorder such as ARFID, which needs professional input rather than more willpower at the table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written safe foods list exists, safe foods appear at every meal, and twelve weekly food tries are logged."
                cadence: rolling
              tasks:
                - "Write down every food your child reliably eats, with brands"
                - "Plan the week's meals so each one includes at least one safe food"
                - "Put one new food beside the safe foods with no demand to try it @recurring(weekly:thu)"
                - "Ask the doctor about a dietitian referral if the list is very short"
            - name: Therapy and appointment calendar for your child
              description: |-
                ## Purpose
                A neurodivergent child can have a paediatrician, a speech and language therapist, an occupational therapist, a dentist and medication reviews, each with its own letters and portals. One calendar holding every appointment, the reports expected and the next follow-up stops sessions lapsing quietly when a letter goes astray.

                ## Milestones
                1. Every current professional listed with their service, contact details and how often they see your child.
                2. All booked appointments in the shared family calendar with travel time added.
                3. Any overdue follow-up chased.
                4. A note after each appointment of what was agreed and what happens next.

                ## Notes
                Start from the **Meeting notes** template for the note you write after each appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One calendar holds every therapy and medical appointment, and no follow-up is more than a month overdue."
                cadence: rolling
              tasks:
                - "List every professional who sees your child with their contact details"
                - "Add every booked appointment to the family calendar with travel time"
                - "Check for overdue follow-ups and chase any that have lapsed @recurring(monthly:3)"
                - "Write what was agreed straight after each appointment"
            - name: Sensory kit and outing bag restock
              description: |-
                ## Purpose
                Ear defenders left at home, a flat tablet or a missing chew toy can turn a trip to the shops into a meltdown in the car park. Keeping a packed outing bag by the door and restocking it monthly means leaving the house takes one grab rather than a frantic search.

                ## Milestones
                1. A checklist of what goes in the bag, from ear defenders and snacks to a spare top and a charged device.
                2. The bag packed and kept in one fixed place by the door.
                3. A second, smaller kit kept in the car or the other parent's bag.
                4. The bag checked and restocked once a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A packed outing bag with a written checklist sits by the door and has been restocked monthly for three months."
                cadence: rolling
              tasks:
                - "Write a checklist of everything your child needs on a typical outing"
                - "Pack the bag and choose one fixed spot by the door for it"
                - "Put together a smaller back-up kit for the car"
                - "Restock snacks, charge devices and check the kit @recurring(monthly:20)"
            - name: Protected recharge time for the parent carer
              description: |-
                ## Purpose
                Parenting a neurodivergent child can mean broken nights, constant vigilance and fighting for services, and carers who never stop eventually run out. A fixed, protected slot each week, covered by a partner, relative or sitter who knows your child, keeps you able to do the job for the years it will take.

                ## Milestones
                1. One two-hour slot a week chosen and put in the calendar.
                2. Someone who knows your child lined up to cover it, with a back-up name.
                3. The slot kept in six weeks out of eight.
                4. One thing you do in the slot that is only for you, not chores or admin.

                ## Notes
                If you notice persistent low mood, exhaustion or dread, speak to your own doctor. Carer burnout is common and help is available.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly protected slot of at least two hours has been kept six times in eight weeks, with cover arranged."
                cadence: rolling
              tasks:
                - "Choose a two-hour slot in the week that can be yours"
                - "Ask a partner, relative or sitter to cover it and brief them"
                - "Take the protected slot and leave the house if you can @recurring(weekly:tue)"
                - "Name a back-up person for weeks when the usual cover falls through"
            - name: Termly review of what works at home
              description: |-
                ## Purpose
                Children grow and their needs shift, so the routine that worked at seven can be a battle at nine. A short review each term of routines, sensory set-up, sleep, food and family strain keeps the home plan current, instead of carrying on with strategies nobody believes in any more.

                ## Milestones
                1. A one-page checklist covering routines, sensory needs, sleep, food, siblings and parent wellbeing.
                2. A review done each term with your partner or another adult who knows your child.
                3. Your child's own view included, in whatever form suits them.
                4. Up to three changes agreed and written down for the coming term.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A termly review has been done with written notes, including your child's view and up to three agreed changes."
                cadence: cyclic
              tasks:
                - "Write a one-page review checklist for home routines and wellbeing"
                - "Ask your child what is going well and what is hard, in a way that suits them"
                - "Hold the review with your partner or another adult who knows your child @recurring(quarterly)"
                - "Write up to three changes for the next term and start the first one"
            - name: Briefing grandparents and regular carers
              description: |-
                ## Purpose
                Grandparents, babysitters and friends who help out often mean well but use approaches that backfire, such as insisting on eye contact, forcing food or treating meltdowns as naughtiness. A short briefing and a one-page guide to your child means time away from you is calm for everyone, and their help is not lost after one bad afternoon.

                ## Milestones
                1. A one-page guide covering communication, triggers, calming strategies, food and bedtime.
                2. A conversation with each regular carer about how your child experiences the world.
                3. Questions or worries from carers answered.
                4. The guide refreshed each year as your child changes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every regular carer has had a briefing conversation and holds a current one-page guide to your child."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who looks after your child without you"
                - "Write a one-page guide to communication, triggers and calming strategies"
                - "Talk each carer through the guide over a cup of tea"
                - "Refresh the guide and hand out new copies @recurring(yearly)"
            - name: Learning about autism from autistic adults
              description: |-
                ## Purpose
                Much older material describes autism only as a list of deficits, while autistic adults can explain from the inside what a meltdown feels like, why routines matter and what they wish their parents had known. Reading and listening to them for a few weeks changes how you interpret your child's behaviour, and often how you talk about it in front of them.

                ## Milestones
                1. Three books or long articles by autistic authors read or listened to.
                2. Notes on five ideas that changed how you see your child's behaviour.
                3. One change in how you talk about autism at home, agreed with your partner.
                4. A short list of autistic writers or groups saved for when new questions come up.

                ## Notes
                Look for neurodiversity-affirming sources, and be wary of anything that promises to cure or recover a child.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three works by autistic authors have been read and five notes written on how they changed your view of your child."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose three books or long articles written by autistic adults"
                - "Read or listen for twenty minutes on three evenings a week"
                - "Note five ideas that change how you read your child's behaviour"
                - "Talk through those ideas with your partner or a friend"
            - name: How ADHD shows up at home
              description: |-
                ## Purpose
                ADHD is usually described as hyperactivity, but at home it more often looks like lost shoes, half-finished tasks, emotional explosions and no sense of time. Understanding executive function, emotional regulation and interest-driven attention helps you set up the house to carry the load your child's brain cannot, rather than repeating instructions louder.

                ## Milestones
                1. One reputable book or parent course on ADHD in children worked through.
                2. Notes on how working memory, time sense and emotional regulation show up in your child.
                3. Three changes to the home that take load off your child's memory, such as checklists by the door or visual timers.
                4. The changes tried for a month and the results written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A course or book on childhood ADHD has been completed and three home changes tried for a month, with results noted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one well-regarded book or parent course on ADHD in children"
                - "Note where working memory and time sense trip your child up each day"
                - "Make three changes, such as checklists by the door or a visual timer"
                - "Write down after a month which changes made a real difference"
            - name: Telling meltdowns, shutdowns and tantrums apart
              description: |-
                ## Purpose
                A tantrum is usually aimed at getting something and stops when it works or when nobody is watching; a meltdown is a loss of control from overload and carries on regardless; a shutdown can look like calm withdrawal. Learning to tell them apart decides your response: boundaries for one, less input and safety for the others.

                ## Milestones
                1. What a meltdown, a shutdown and a tantrum look like in your child written in your own words.
                2. A first response agreed for each, with less talking and fewer demands during meltdowns.
                3. Three recent episodes looked back on and labelled.
                4. Every adult in the house using the same first response for two weeks.

                ## Notes
                During a meltdown, talking, reasoning and consequences add to the overload. Keep words few, keep everyone safe and save any discussion for much later.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written description of meltdowns, shutdowns and tantrums in your child, with an agreed first response for each, is used by every adult at home."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide on the difference between meltdowns, shutdowns and tantrums"
                - "Write what each looks like in your own child"
                - "Agree a first response for each with your partner"
                - "Look back at three recent episodes and label each one honestly"
            - name: Co-regulation when your own stress is high
              description: |-
                ## Purpose
                Dysregulated children borrow calm from the adult nearby, which is hard when you are exhausted, embarrassed in public or being shouted at. Practising a few body-based techniques for yourself, such as slowed breathing, a lower voice and stepping back, makes it more likely you are the steady one when it matters.

                ## Milestones
                1. Three calming techniques chosen that you can do in under a minute, anywhere.
                2. Each technique practised daily for two weeks while calm.
                3. Your own first sign of rising stress identified and written down.
                4. One hard moment handled with a technique, and what happened noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three quick self-calming techniques have been practised daily for two weeks and used in at least one real hard moment."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose three calming techniques that take under a minute"
                - "Practise one technique for two minutes each day while calm"
                - "Notice and write down your own first sign of rising stress"
                - "Use a technique in a real hard moment and note what happened"
            - name: Adapting how you talk to your child
              description: |-
                ## Purpose
                Neurodivergent children often take words literally, need several seconds to process a question and find open questions or sarcasm confusing. Changing your own habits, such as giving one instruction at a time, waiting ten seconds and saying exactly what you mean, removes conflict that was really a misunderstanding.

                ## Milestones
                1. Your child's communication preferences noted: processing time, literal language, eye contact and preferred channels.
                2. Five habits of your own that cause confusion identified.
                3. New phrasing practised for common instructions, such as shoes on, then car.
                4. Any alternative communication your child uses, such as signs, pictures or a device, used consistently by all adults.

                ## Notes
                If your child has limited speech, a speech and language therapist can advise on augmentative and alternative communication. Using it at home does not hold back speech.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five confusing habits have been identified and replaced, and any alternative communication your child uses is used by every adult at home."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Notice how long your child needs to answer a simple question"
                - "Write down five things you say that confuse or upset your child"
                - "Rewrite common instructions as short, literal steps"
                - "Ask the speech and language therapist how to use your child's communication system at home"
            - name: Writing social stories for new situations
              description: |-
                ## Purpose
                First haircuts, new babysitters, a wedding or a fire drill can cause days of worry when a child has no picture of what will happen. A short personalised story with photos, describing what will happen, who will be there and what they can do if it gets too much, gives them a script to read in advance.

                ## Milestones
                1. The basic structure of a social story understood: describe, explain, suggest what to do.
                2. A first story written and illustrated for an upcoming event.
                3. The story read with your child several times in the days before.
                4. A small folder of stories kept for repeat events such as the dentist or a holiday.

                ## Notes
                Keep the tone descriptive and reassuring, and avoid stories that only tell your child how to behave.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three social stories with photos exist in a folder and one has been used before a real event."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a short guide to writing social stories"
                - "Pick an upcoming event and take photos of the place if you can"
                - "Ask the agent to draft a social story for that event, then edit it into your child's words"
                - "Read the story together on the three days before the event"
            - name: Low-demand parenting for a child with high anxiety
              description: |-
                ## Purpose
                Some children, often described as having a pathological demand avoidance profile, experience everyday requests as a threat and resist even things they want to do. Learning to lower and soften demands, offer choices and put the relationship first can bring a house out of constant standoff, though it runs against most standard parenting advice.

                ## Milestones
                1. The ideas behind demand avoidance and low-demand approaches understood from at least two sources.
                2. Daily demands listed and sorted into essential, negotiable and droppable.
                3. Droppable demands paused for a month and negotiable ones rephrased as choices or invitations.
                4. Your child's distress compared before and after the month.

                ## Notes
                Demand avoidance is described differently in different countries and services. Talk it through with your child's clinician, and keep safety and health demands in place.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Daily demands are sorted into three groups and a month of reduced demands has been tried, with distress compared before and after."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read two sources on demand avoidance and low-demand parenting"
                - "List every demand made of your child on a typical day"
                - "Sort the list into essential, negotiable and droppable"
                - "Pause the droppable demands for a month and note what changes"
            - name: Spotting masking and after-school collapse
              description: |-
                ## Purpose
                Plenty of children hold everything together all day by copying others and hiding their needs, then fall apart the moment they get home. Recognising masking explains why staff may say all is fine when home life is hard, and lets you build in recovery time rather than asking about the day at the door.

                ## Milestones
                1. Signs of masking in your child listed, such as exhaustion after social time or copying peers.
                2. A quiet decompression routine of thirty to sixty minutes after school.
                3. Demands and questions kept to a minimum in that first hour at home.
                4. Masking explained to your child in words that do not make it sound like a fault.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Signs of masking in your child are written down and a decompression hour after school has been kept for four weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an account of masking written by an autistic adult"
                - "List the signs you see after school or social events"
                - "Set up a quiet first hour at home with snacks and no questions"
                - "Keep the decompression routine for four weeks and note any change"
            - name: Teaching body signals and interoception
              description: |-
                ## Purpose
                Hunger, thirst, a full bladder, feeling hot and rising anger all arrive through interoception, the sense of the body's inside, and many neurodivergent children notice these signals late or not at all. Teaching them to check in with their body explains a lot of sudden meltdowns, accidents and skipped meals, and builds a skill they will need for life.

                ## Milestones
                1. The body signals your child misses written down, such as not noticing hunger until upset.
                2. A simple body check-in, with pictures if needed, practised at set times of day.
                3. Short games used to notice heartbeat, breathing and muscle tension.
                4. Your child naming at least two body signals without prompting.

                ## Notes
                Occupational therapists often run interoception programmes and can suggest activities matched to your child's age.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your child uses a picture body check-in daily and names at least two body signals without prompting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Note which body signals your child seems to miss most"
                - "Make a picture check-in card for hunger, thirst, toilet, temperature and feelings"
                - "Use the card at three fixed points in the day for two weeks"
                - "Ask the occupational therapist for interoception activities suited to your child's age"
            - name: Sensory equipment worth buying
              description: |-
                ## Purpose
                Sensory products are a big market, from weighted blankets and ear defenders to swings and chew necklaces, and plenty are expensive, poorly made or wrong for your child's actual profile. Matching purchases to the sensory profile you have already made, and checking safety first, stops money going on gadgets that end up in a cupboard.

                ## Milestones
                1. A shortlist of up to five items, each tied to a need in your child's sensory profile.
                2. Safety guidance checked for each item, including age and weight limits.
                3. Cheaper or borrowed options tried first where possible.
                4. Items bought, and a note after a month on which ones are used.

                ## Notes
                Start from the **Purchase decision** template. Weighted blankets carry safety risks for young children; use one only on the advice of an occupational therapist.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every sensory item bought is tied to a need on the sensory profile and passed a safety check, with use reviewed after a month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the sensory needs from your profile that equipment might help with"
                - "Shortlist up to five items and check the safety guidance for each"
                - "Ask the occupational therapist or a support group whether you can borrow or trial items"
                - "Note after a month which items your child actually uses"
            - name: Making the bedroom sensory-friendly
              description: |-
                ## Purpose
                Bright standby lights, scratchy bedding, a ticking radiator or a cluttered room can keep a sensitive child alert long after lights out. Adjusting light, sound, textures and clutter in one room is a contained weekend project that often improves sleep and gives your child somewhere they can always settle.

                ## Milestones
                1. The bedroom checked from the bed at night for light, sound, smell and texture problems.
                2. Light leaks covered and a dim night light your child chose added.
                3. Bedding and nightwear chosen by your child for texture.
                4. Clutter reduced so the room feels calm, with special interest items kept in view if they soothe.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Light, sound, texture and clutter changes have been made to the bedroom, and your child has chosen their bedding and night light."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Lie in the bedroom at night and note any light, sound or texture problems"
                - "Cover light leaks with blackout blinds or tape over standby lights"
                - "Let your child choose bedding and nightwear by feel"
                - "Clear the room down to things that calm rather than excite"
            - name: Haircuts, nail cutting and tooth brushing made bearable
              description: |-
                ## Purpose
                Grooming tasks involve touch, noise and unpredictability all at once, so for many sensory-sensitive children they become a weekly battle. Breaking each task into steps, adding warning and control, and finding a patient barber or the right brush turns them from a fight into something tolerable.

                ## Milestones
                1. The hardest grooming task picked out and broken into small steps.
                2. Changes tried, such as a different toothbrush, nail cutting after a bath, or clippers instead of scissors.
                3. A barber or hairdresser found who offers quiet or home appointments.
                4. The task done without a meltdown on three occasions in a row.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The hardest grooming task has been broken into steps and completed without a meltdown three times in a row."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick the grooming task that causes the most distress right now"
                - "Break it into small steps and let your child control the pace"
                - "Ask local barbers whether they offer quiet or home appointments"
                - "Use a timer or a count so your child knows exactly when it ends"
            - name: Judging therapies and avoiding unproven treatments
              description: |-
                ## Purpose
                Parents of newly diagnosed children are targeted by expensive programmes, supplements and diets that promise recovery, and a few, such as chelation or bleach-based products, are genuinely dangerous. A short set of questions to ask of any therapy, and a habit of checking with your child's clinician, protects your child, your money and your time.

                ## Milestones
                1. A checklist of questions for any therapy: evidence, cost, qualifications, what autistic people say about it and how progress is measured.
                2. Warning signs written down, such as cure claims, testimonials instead of trials and pressure to start quickly.
                3. Every therapy or product you are considering run through the checklist.
                4. Your child's clinician asked about anything you are unsure of before you start.

                ## Notes
                Anything that involves swallowing, injecting or inserting a substance should be discussed with your child's doctor first, without exception.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written checklist exists, every therapy under consideration has been run through it, and the clinician has been asked about any doubtful ones."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a checklist of questions to ask about any therapy or product"
                - "List the therapies and products you have been told about or are considering"
                - "Run each one through the checklist and note your verdict"
                - "Ask your child's clinician about any you are unsure of"
            - name: Deciding with your clinician about ADHD medication
              description: |-
                ## Purpose
                Whether to try ADHD medication is one of the biggest decisions parents of an ADHD child face, and it often comes with strong opinions from relatives and online. Preparing your questions, your child's views and what you hope will change lets you make the decision with the prescriber on your family's terms, knowing what you will watch for.

                ## Milestones
                1. A list of questions for the prescriber on benefits, side effects, monitoring and stopping.
                2. Your child's own view gathered in a way that suits their age.
                3. The goals you hope medication would help with written down, such as calmer mornings or finishing homework.
                4. A decision recorded with the clinician, including how and when it will be reviewed.

                ## Notes
                This is a decision to make with a qualified prescriber. Bring your questions and observations, and leave the clinical judgement to them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision about ADHD medication, made with the prescriber, is written down with your goals and a review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the questions you want answered about benefits, side effects and monitoring"
                - "Ask your child what they find hardest and what they think about medicine"
                - "Write down the two or three changes you most hope to see"
                - "Record the decision and its review date after the appointment"
            - name: Disability benefit claim for your child
              description: |-
                ## Purpose
                Several countries offer a disability or care allowance for children who need much more help than others their age, and autistic and ADHD children can qualify without any physical disability. The forms are long and reward specific examples, so preparing evidence from your diaries and reports makes a successful claim, and the extra support it can fund, more likely.

                ## Milestones
                1. The benefit or allowance available where you live identified, with its eligibility rules.
                2. Examples gathered of the extra care your child needs by day and night, compared with other children of the same age.
                3. The claim form completed with supporting letters and reports attached.
                4. The decision received, and the renewal or review date recorded.

                ## Notes
                Charities and parent carer groups often run free help with these forms. If a claim is refused, ask how to request a reconsideration before giving up.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A completed disability benefit claim with supporting evidence has been submitted, and the decision and renewal date recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find out which child disability benefit applies where you live"
                - "Ask a charity or parent carer group whether they help with the form"
                - "Ask the agent to turn your diary notes into day and night care examples for the form"
                - "Submit the claim with copies of reports and letters attached"
                - "Check the award's renewal date and any changes you must report @recurring(yearly)"
            - name: Safety plan for meltdowns that turn physical
              description: |-
                ## Purpose
                When a meltdown includes hitting, throwing, self-injury or bolting, everyone in the house needs to know what to do in the first minute, not argue about it. A written plan covering who steps in, who takes siblings away, what to move and when to call for help keeps people safe and makes the response predictable.

                ## Milestones
                1. The kinds of unsafe behaviour that happen written down, with how often they occur.
                2. A plan for the first minutes: who leads, who takes siblings out and what gets moved away.
                3. Clear points at which you call for outside help, including an emergency number.
                4. The plan discussed with your child's clinician or a behaviour specialist.

                ## Notes
                Avoid physical holding unless it is the only way to prevent serious harm, and ask professionals for guidance or training before relying on it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written safety plan for unsafe meltdowns, discussed with a professional, is known to every adult in the house."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the unsafe behaviours that happen and roughly how often"
                - "Agree who leads and who looks after siblings during a meltdown"
                - "Remove or secure objects that get thrown or used to self-harm"
                - "Ask your child's clinician to review the plan and suggest changes"
                - "Talk siblings through where to go and what to do when it happens"
            - name: Getting ready for the diagnostic assessment
              description: |-
                ## Purpose
                Assessments usually involve questionnaires, a long parent interview, observation of your child and sometimes several visits, and a child who is anxious on the day may not show their usual self. Preparing the paperwork, the child and yourself means the team sees an accurate picture and you leave knowing what happens next.

                ## Milestones
                1. All questionnaires from the service completed and returned before the deadline.
                2. Your child prepared with photos of the building and a simple story about the visit.
                3. A list of your top concerns, with real examples, to bring to the parent interview.
                4. Notes taken on the day, including when and how you will hear the outcome.

                ## Notes
                Start from the **Meeting notes** template for the day itself. Tell the service in advance about sensory needs so they can offer a quiet waiting space or a different time.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every questionnaire is returned on time, and notes from the assessment day record when and how the outcome will be shared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Fill in and return the service's questionnaires as soon as they arrive"
                - "Ask the service about a quiet waiting area or the first appointment of the day"
                - "Show your child photos of the building and talk through the visit"
                - "Write your top five concerns with real examples to take to the interview"
            - name: The first eight weeks after a diagnosis
              description: |-
                ## Purpose
                Diagnosis can bring relief, grief, guilt and a pile of new reading, often in the same week, and the follow-up offered is sometimes just a leaflet. Planning the first two months, from reading the report carefully to deciding who to tell and finding post-diagnosis support, turns a label into a set of next steps.

                ## Milestones
                1. The full report read, with questions written down for the clinician.
                2. Any post-diagnosis course or parent workshop offered by the service booked.
                3. A decision made about who in the family and circle of friends is told, and how.
                4. A short list of what will change at home in the next three months.

                ## Notes
                You do not need to tell everyone at once, or change everything at once. Give yourself time to adjust too.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The report has been read with questions answered, a post-diagnosis course is booked and a three-month home plan is written."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the diagnostic report twice and mark anything you do not understand"
                - "Ask the service what post-diagnosis support or parent courses they offer"
                - "Decide which relatives and friends to tell first and how"
                - "Write a short list of three changes to make at home in the next three months"
            - name: Dentist and blood test visits with adjustments
              description: |-
                ## Purpose
                Medical and dental visits combine strange smells, bright lights, waiting and being touched, which can make routine care impossible without planning. Asking for reasonable adjustments, such as the first slot of the day, a visit beforehand to see the room or numbing cream, means essential care actually happens.

                ## Milestones
                1. The adjustments that would help your child written down before booking.
                2. Adjustments requested when booking, such as the first appointment, a quiet room or a familiarisation visit.
                3. Photos or a short story shared with your child in the days before.
                4. The visit completed and what worked noted for next time.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dental or medical visit has been completed with adjustments requested in advance and notes made for next time."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the adjustments that would help your child at a dental or medical visit"
                - "Ask for those adjustments when you book the appointment"
                - "Show your child photos of the surgery and the people they will meet"
                - "Note what worked and what to ask for next time"
            - name: Sensory-friendly family holiday
              description: |-
                ## Purpose
                Holidays strip away every routine at once, and airports, hotel buffets and crowded beaches pile on sensory load. Choosing destinations and accommodation with your child's needs in mind, using travel assistance schemes and bringing home comforts makes it far more likely the break is restful for everyone.

                ## Milestones
                1. A destination and accommodation chosen with quiet space, familiar food and short transfers in mind.
                2. Airport or station assistance booked, such as a hidden disability lanyard scheme where available.
                3. A visual itinerary and social story prepared for the travel days.
                4. A packing list with sensory kit, safe foods and comfort items.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A holiday has been booked with assistance arranged, a visual itinerary prepared and a sensory packing list ticked off."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set your must-haves for the holiday, such as a quiet room and short transfers"
                - "Ask the airline or rail operator about assistance for hidden disabilities"
                - "Make a visual itinerary and a social story for the travel days"
                - "Pack the sensory kit, safe foods and comfort items from a written list"
            - name: Birthdays and festive seasons at a gentler pace
              description: |-
                ## Purpose
                Birthday parties, religious festivals and new year bring crowds, surprises, unfamiliar food and late nights, and an overwhelmed child may spend the day in meltdown. Planning each celebration with fewer guests, predictable timings and a way out keeps the traditions while protecting your child.

                ## Milestones
                1. The celebrations in your family's year listed with what usually goes wrong.
                2. A plan for each: guest numbers, timings, a quiet room and an exit plan.
                3. Relatives told in advance what to expect and why.
                4. Surprises replaced with previews, such as photographed presents, if that suits your child.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each major celebration in the year has a written plan with guest numbers, timings and a quiet space, shared with relatives beforehand."
                cadence: cyclic
              tasks:
                - "List your family's yearly celebrations and what usually goes wrong at each"
                - "Plan the next celebration with fewer guests, set timings and a quiet room"
                - "Tell relatives in advance what the plan is and why"
                - "Review the year's celebrations and change the plan for next year @recurring(yearly)"
            - name: Preparing your child for a house move or new baby
              description: |-
                ## Purpose
                Big family changes, such as moving house, a new sibling or a parent starting a new job, upend the predictability a neurodivergent child relies on. Starting preparation weeks ahead, with photos, visits, countdown calendars and as much kept the same as possible, can turn months of distress into a manageable change.

                ## Milestones
                1. The change explained to your child in concrete terms at least a few weeks ahead.
                2. A countdown calendar, plus photos or visits to the new place or person.
                3. A list of routines and objects that will stay exactly the same.
                4. Extra recovery time planned for the first fortnight after the change.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your child has had a countdown calendar and preparation visits, and a list of unchanged routines exists before the change happens."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down exactly what will change and what will stay the same"
                - "Explain the change to your child with photos and plain words"
                - "Make a countdown calendar to the day of the change"
                - "Plan quiet days with few demands for the first fortnight afterwards"
            - name: Telling your child about their diagnosis
              description: |-
                ## Purpose
                Children who learn about their diagnosis early, in positive and honest terms, tend to build a steadier sense of self than those who find out by accident or as teenagers. Planning what to say, when, and with which books or examples makes it an ongoing conversation rather than a single awkward talk.

                ## Milestones
                1. The words you will use agreed between the adults, framed around differences and strengths.
                2. Books or videos chosen that suit your child's age, ideally by neurodivergent creators.
                3. A first conversation held, with your child's questions noted.
                4. Follow-up conversations as your child grows, including who else they might want to tell.

                ## Notes
                There is rarely a perfect moment. Many autistic adults say they wish they had been told sooner.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A first conversation about the diagnosis has taken place, with your child's questions noted and books chosen for follow-up."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree with the other adults what words you will use about the diagnosis"
                - "Choose two books or videos for children about autism or ADHD"
                - "Have a first conversation in a calm moment and note your child's questions"
                - "Return to the subject when new questions or situations come up"
            - name: Supporting the brothers and sisters
              description: |-
                ## Purpose
                Siblings of a neurodivergent child often have plans cancelled by meltdowns, get less attention and may feel embarrassed, resentful or responsible, while rarely saying so. Explaining the diagnosis to them, protecting time that is only theirs and finding sibling groups helps them feel seen rather than sidelined.

                ## Milestones
                1. Each sibling told about the diagnosis in words that suit their age.
                2. A regular one-to-one outing with each sibling in the calendar.
                3. A safe place agreed where siblings can go during a meltdown.
                4. A young carers or sibling group found if a sibling is taking on caring roles.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Each sibling has had the diagnosis explained and a one-to-one outing with a parent every month for three months."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask each sibling what is hardest for them at home right now"
                - "Explain their brother's or sister's diagnosis in words that suit their age"
                - "Book a one-to-one outing with each sibling @recurring(monthly:24)"
                - "Look up young carers or sibling support groups near you"
            - name: Connecting with other families of neurodivergent children
              description: |-
                ## Purpose
                Other parents who have been through the same assessments, sleepless years and stares in the supermarket are often the best source of practical tips, and the people who will not judge a meltdown in the park. Finding one local group and one online community, and turning up regularly, ends a lot of isolation for both you and your child.

                ## Milestones
                1. Local support groups, parent carer groups and inclusive play sessions listed.
                2. One local group attended at least three times.
                3. One supportive, well-moderated online community joined.
                4. One or two families you see outside the group, so your children can play together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "You have attended a local group at least three times and are in regular contact with at least one other family."
                cadence: rolling
              tasks:
                - "Search for local parent support groups and inclusive play sessions"
                - "Go to one group session and talk to at least two other parents"
                - "Attend a support group or family meet-up @recurring(monthly:15)"
                - "Invite one family you get on with for a playdate at home or the park"
            - name: When a parent recognises their own neurodivergence
              description: |-
                ## Purpose
                Autism and ADHD run in families, and many parents start to recognise themselves while learning about their child. Exploring that, and seeking your own assessment if it would help, can explain lifelong difficulties and make you a better interpreter for your child, but it needs time and care for you too.

                ## Milestones
                1. Notes made on which traits you recognise in yourself and how they affect family life.
                2. A decision made on whether to seek an assessment for yourself.
                3. If yes, a referral requested from your own doctor.
                4. Changes made to how you run the household to suit your needs as well as your child's.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision about seeking your own assessment is recorded, with a referral requested if you chose to go ahead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the traits you recognise in yourself from your child's diagnosis"
                - "Read accounts from adults diagnosed after their child was"
                - "Decide whether an assessment for yourself would help and why"
                - "Book a doctor's appointment to ask about adult assessment if you decide yes"
            - name: Short breaks and respite for the family
              description: |-
                ## Purpose
                Carers of disabled children may be entitled to short breaks, such as funded activity clubs, overnight stays or a support worker, though these usually need an assessment through social care. Asking early, with a clear account of your family's week, gives you a real break and your child time with other trusted adults.

                ## Milestones
                1. The short breaks offer where you live found, including what can be used without an assessment.
                2. A request made to children's social care or the short breaks team.
                3. A written account of a typical week ready for the assessment.
                4. A short break in place and used at least once.

                ## Notes
                Many areas publish a short breaks statement listing activities open to families without a formal assessment. Start there while the assessment is pending.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A short breaks request has been made and at least one short break has been used by your child."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find your area's published short breaks offer or statement"
                - "Book any activities you can use without an assessment"
                - "Ask children's social care for a short breaks assessment"
                - "Write out a typical week from Monday to Sunday to show the level of care needed"
            - name: Positive behaviour support plan with a specialist
              description: |-
                ## Purpose
                Where distressed behaviour is frequent or dangerous, a positive behaviour support plan written with a clinical psychologist or behaviour specialist looks at why it happens and what to change around your child, not just how to react. Having your logs, triggers map and safety plan ready makes that work faster and more accurate.

                ## Milestones
                1. A referral or private appointment with a qualified behaviour specialist.
                2. Your logs, triggers map and safety plan shared before the first session.
                3. A written plan covering prevention, early warning signs, response and recovery.
                4. The plan reviewed with the specialist and updated as your child changes.

                ## Notes
                Ask any specialist about their qualifications and whether their approach is neurodiversity-affirming. Avoid programmes that aim to suppress harmless stimming.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written positive behaviour support plan exists, agreed with a qualified specialist, with a review date set."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your child's paediatrician or doctor for a referral to a behaviour specialist"
                - "Send your logs, triggers map and safety plan ahead of the first session"
                - "Agree the prevention, response and recovery parts of the plan"
                - "Review the plan with the specialist @recurring(quarterly)"
            - name: Independence skills ladder for the teen years
              description: |-
                ## Purpose
                Neurodivergent teenagers often need skills like cooking, using public transport, handling money and booking appointments taught in more explicit steps and over a longer time. A ladder of small skills, practised from about age ten, makes adulthood less of a cliff edge and builds confidence along the way.

                ## Milestones
                1. A list of independence skills across cooking, travel, money, self-care and appointments.
                2. Each skill broken into small steps, with the current step marked.
                3. One skill practised each month until it is done without prompts.
                4. A visible record of skills mastered that your teenager can see growing.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written skills ladder exists and at least six skills have been mastered without prompting over a year."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List independence skills under cooking, travel, money, self-care and appointments"
                - "Break the first skill into small steps with your teenager"
                - "Practise the chosen skill a few times each week until it needs no prompts"
                - "Tick off mastered skills on a chart your teenager can see"
            - name: Long-term future care notes and letter of wishes
              description: |-
                ## Purpose
                Parents of a child likely to need support into adulthood often worry about what happens if they are not there. A letter of wishes describing your child's needs, routines and preferences, kept with your will and reviewed each year, gives future guardians and services the knowledge that usually lives only in your head.

                ## Milestones
                1. A letter describing your child's needs, routines, likes, dislikes and the people who matter to them.
                2. Guardianship wishes and any trust arrangements discussed with a legal adviser.
                3. The letter stored with your will and a copy given to the named guardian.
                4. The letter reviewed each year as your child grows.

                ## Notes
                This organises your wishes; it is not legal advice. A specialist legal adviser can explain options such as trusts that protect a disabled person's entitlement to support.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A letter of wishes is stored with your will, the named guardian has a copy, and a yearly review is in the calendar."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a page on your child's routines, needs, likes and important people"
                - "Book an appointment with a legal adviser about guardianship and trusts"
                - "Give a copy of the letter to the guardian you have named"
                - "Review and update the letter of wishes @recurring(yearly)"
---

# Raising a Neurodivergent Child

This area is for parents and carers raising an autistic or ADHD child, or one still waiting for answers, and it stays focused on life at home rather than school. It starts with foundations (observation notes, the referral, a developmental history, a sensory profile, visual routines and home safety), then the weekly and monthly routines that keep home calmer, the skills worth learning such as reading meltdowns and adapting how you talk, decisions about equipment, therapies, medication and benefits, dated events like the assessment and holidays, situations such as siblings, telling your child and your own neurodivergence, and finally specialist work on behaviour support, independence and the long-term future.

What repeats is a Friday look-back on hard moments, a Sunday preview of the week, a weekly food try and a protected break for you, monthly prescription orders, appointment checks and kit restocks, a termly review of what works at home, and yearly refreshes of the health passport, the carer guide and the letter of wishes. The Metrics log, Sleep review, Weekly meal plan, Meeting notes, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
