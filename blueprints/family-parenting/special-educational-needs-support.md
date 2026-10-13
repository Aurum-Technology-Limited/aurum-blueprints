---
id: family-parenting.special-educational-needs-support
name: Special Educational Needs Support
description: "A clear record of your child's needs, assessments and support plans that hold up, school adjustments checked against what was promised, and calm preparation for every review, transition and dispute."
category: personal
version: 1.0.0
tags: [family-parenting, special-educational-needs-support, parent, carer, support-plans, assessments, school-adjustments, disability]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - operational-checklist
    - remediation-plan
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Special Educational Needs Support
          description: "Securing assessments, support plans and school adjustments for a child with special educational needs or disabilities."
          projects:
            - name: One-page profile of your child's needs and strengths
              description: |-
                ## Purpose
                Teachers, assistants and therapists change every year, and each one forms a view of your child within days. A single page covering what your child is good at, what they find hard, what helps and what to avoid gives every new adult the right starting point, and it becomes the opening page of every request you make later.

                ## Milestones
                1. One page drafted with four headings: strengths and interests, what is hard, what helps, what to avoid.
                2. Your child's own words or drawings included in at least one section.
                3. The page checked by someone who knows your child well, such as a grandparent or current teacher.
                4. Copies given to the class teacher and the school's special needs lead.

                ## Notes
                Keep it to one side of paper. A long profile is skimmed; a short one is pinned to the staffroom wall.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page profile with strengths, difficulties, helpful strategies and triggers has been handed to the class teacher and the special needs lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three things your child is good at and three things they find hard"
                - "Ask your child what helps them most at school and note their answer word for word"
                - "Turn your notes into one page under four headings"
                - "Email the page to the class teacher and the special needs lead"
                - "Reread the profile and update anything that has changed @recurring(quarterly)"
            - name: Evidence folder of reports and school records
              description: |-
                ## Purpose
                Every request for an assessment, a plan or an appeal is decided on paper, and families often lose years of useful evidence in inboxes and kitchen drawers. One folder, physical or digital, holding every report, letter, school record and email in date order means you can answer any question with a document instead of a memory.

                ## Milestones
                1. All existing reports, letters and school reports gathered into one place.
                2. Documents sorted into sections: school, health, therapy, authority, your own notes.
                3. Each section in date order with an index page listing title, author and date.
                4. A scanned copy of the whole folder stored somewhere backed up.
                5. Missing documents identified and requested in writing.

                ## Notes
                Name digital files with the date first, such as 2026-03-14 speech therapy report, so they sort themselves.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One indexed folder holds every known report and letter in date order, with a backed-up scan and a list of documents still to request."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather every report, letter and school report you can find into one box"
                - "Sort the documents into school, health, therapy, authority and your own notes"
                - "Write an index page listing each document's title, author and date"
                - "Scan the folder and store the copy in a backed-up location"
                - "File any new reports, letters and emails that arrived this month @recurring(monthly:24)"
            - name: How special educational support works where you live
              description: |-
                ## Purpose
                Every country and region runs its own system for special educational needs, with different names for support plans, different deadlines and different rights to ask and appeal. A few evenings learning your local system, from the free parent guide and the independent advice service, stops you from waiting for the school to start a process that only you can start.

                ## Milestones
                1. The official parent guide for your area found and read.
                2. The stages of support written down in order, from in-school help to a statutory plan.
                3. Who can request a formal assessment, and the legal time limits for each step, noted.
                4. The free independent advice service for parents in your area identified and its number saved.
                5. Three questions you still have written down for the advice service.

                ## Notes
                Examples of statutory plans include an EHC plan in England and an IEP in the United States. Use the terms your area uses so letters are taken seriously.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your area's support stages, request rights and time limits exists, with the independent advice service's contact details on it."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Search for your education authority's guide to special educational needs for parents"
                - "Write the stages of support in order on one page"
                - "Note the legal time limits for assessment requests and plan decisions"
                - "Find the free independent advice service for parents and save its number"
                - "Call the advice service with your three open questions"
            - name: Map of the support your child receives today
              description: |-
                ## Purpose
                Many parents discover at a review that the reading group stopped in October or that the assistant is shared across three classes. Writing down exactly what help your child gets now, how often, from whom and since when gives you a baseline to measure every later promise against.

                ## Milestones
                1. Every current intervention, adjustment and therapy listed with frequency and who delivers it.
                2. The list confirmed in writing by the school's special needs lead.
                3. Gaps between what was recommended in past reports and what is happening marked.
                4. The map saved in the evidence folder with today's date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated list of current support, with frequency and staff for each item, has been confirmed in writing by the school."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every type of help you believe your child gets at school"
                - "Email the special needs lead asking them to confirm or correct the list"
                - "Compare the confirmed list with recommendations in past reports"
                - "Highlight any recommendation that is not being delivered"
            - name: Your concerns written in your own words
              description: |-
                ## Purpose
                Parents in meetings often say far less than they meant to, and what is not written is easily forgotten. A short statement of what worries you, with dated examples of what you have seen at home and heard from school, keeps your view on the record and is reused in almost every form you will fill in.

                ## Milestones
                1. A one-page statement of your main concerns, in plain language.
                2. At least three dated, specific examples supporting each concern.
                3. The impact on your child's learning, friendships and wellbeing described.
                4. The statement filed in the evidence folder and shared with the school.

                ## Notes
                Describe what you see rather than labels: he cannot copy from the board and is in tears by Wednesday, not he has a processing disorder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed and dated one-page parental statement with specific examples is filed and has been sent to the school."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your three biggest worries as one sentence each"
                - "Add a dated example under each worry from the past term"
                - "Describe how each difficulty affects learning, friends and mood"
                - "Ask the agent to tighten the draft into one page without losing the examples"
            - name: Capturing your child's own views on school
              description: |-
                ## Purpose
                Most systems expect a child's views to be heard in every assessment and review, yet many reports contain one generic line. Collecting your child's views in a way that suits them, through talking, drawing, a scale or photos, means their voice is ready before anyone asks and is in their words, not a summary.

                ## Milestones
                1. A method chosen that suits your child's age and communication, such as a drawing, a 1 to 5 scale or photos.
                2. Your child's views gathered on their favourite and hardest parts of the school day.
                3. Their answers recorded word for word or kept as the original drawing.
                4. A short All about me page ready to attach to requests and reviews.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A page of your child's own views, in their words or pictures, is in the evidence folder ready to attach."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a way for your child to share views that suits how they communicate"
                - "Ask about the best and hardest parts of the school day at a calm moment"
                - "Record the answers exactly as given"
                - "Put the answers onto a single All about me page"
            - name: Key contacts sheet for school and services
              description: |-
                ## Purpose
                A child with additional needs can easily have a dozen professionals involved, and each change of name or phone number costs a week of chasing. One sheet with every contact, their role and the best way to reach them saves time, and lets a partner or grandparent step in when you cannot.

                ## Milestones
                1. Every professional listed with role, organisation, phone, email and preferred contact method.
                2. The school's special needs lead, class teacher and head teacher included.
                3. The authority caseworker and the independent advice service included where relevant.
                4. The sheet shared with the other adults who handle school matters.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contacts sheet listing every involved professional with role and contact details is shared with every adult who deals with the school."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every professional currently involved with your child"
                - "Add role, organisation, phone, email and how they prefer to be contacted"
                - "Share the sheet with your partner or the other carer"
                - "Ask the school office to confirm the special needs lead's direct email"
            - name: First meeting with the school's special needs coordinator
              description: |-
                ## Purpose
                The school's special needs lead (often called the SENCO or learning support coordinator) decides what help is put in place before any outside body gets involved. A well-prepared first meeting, with your profile and concerns in hand, turns a vague worry into agreed actions, named staff and a date to check progress.

                ## Milestones
                1. A meeting booked with the special needs lead, not only the class teacher.
                2. Your one-page profile and concerns statement sent in advance.
                3. At least three agreed actions recorded, each with a person and a date.
                4. A follow-up email sent within two days summarising what was agreed.
                5. A date fixed for the next progress check.

                ## Notes
                Start from the **Meeting notes** template. Always summarise agreements by email afterwards: it becomes the record if memories differ.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The meeting has taken place and a follow-up email listing agreed actions, owners and a review date has been sent."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email the school asking for a meeting with the special needs lead"
                - "Send your profile and concerns statement three days before"
                - "Take notes on each action agreed, who will do it and by when"
                - "Email a summary of the agreements within two days of the meeting"
            - name: The school's special needs policy and local directory
              description: |-
                ## Purpose
                Schools must publish how they identify and support pupils with additional needs, and most authorities publish a directory of local services and what families can expect. Reading both tells you what your school has already committed to, which services exist, and what to ask for by name.

                ## Milestones
                1. The school's special needs policy or information report downloaded and read.
                2. Three commitments in it that apply to your child highlighted.
                3. The authority's local directory of services searched for your child's needs.
                4. A shortlist of local services and groups worth contacting saved.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The school policy's relevant commitments and a shortlist of local services are summarised in one note in the evidence folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the school's special needs policy from its website"
                - "Highlight the commitments that apply to your child"
                - "Search the authority's local services directory for your child's needs"
                - "Save a shortlist of services and parent groups to contact"
            - name: Contact log for every call, email and meeting
              description: |-
                ## Purpose
                Disputes about support usually come down to who said what and when. A running log with the date, person, channel and outcome of every contact takes two minutes per entry and becomes the most persuasive document in a complaint, mediation or appeal.

                ## Milestones
                1. A log set up with columns for date, person, channel, summary and follow-up due.
                2. All contacts from the past three months entered from memory and emails.
                3. Phone calls followed by a short confirming email, noted in the log.
                4. Open follow-ups reviewed and chased each month.

                ## Notes
                After any phone call, send a two-line email: Thanks for the call today, as I understood it you will... It turns a conversation into evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A contact log with entries from the last three months exists and every phone call since set-up has a matching confirming email."
                cadence: rolling
              tasks:
                - "Create a log with date, person, channel, summary and follow-up columns"
                - "Enter every contact from the last three months using your sent emails"
                - "Send a short confirming email after each phone call with the school"
                - "Read the month's entries and chase every open follow-up @recurring(monthly:17)"
            - name: Termly review of the school support plan
              description: |-
                ## Purpose
                School-level support plans are meant to follow a cycle of assess, plan, do and review each term, but reviews quietly lapse when staff are busy. Asking for a meeting every term, with your evidence of what has changed, keeps targets current and builds the record you would need if a statutory assessment is later requested.

                ## Milestones
                1. A review meeting held each term with the class teacher or special needs lead.
                2. Progress against each target recorded as met, partly met or not met.
                3. New or adjusted targets agreed with the support that goes with them.
                4. The updated plan received in writing within two weeks of each meeting.

                ## Notes
                Start from the **Meeting notes** template. If two termly reviews in a row show little progress despite support, ask whether a statutory assessment should be requested.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three termly review meetings a year have been held, each producing a written updated plan within two weeks."
                cadence: cyclic
              tasks:
                - "Ask the school for the date of this term's support plan review @recurring(quarterly)"
                - "Bring the latest progress notes and your child's views to the meeting"
                - "Mark each target as met, partly met or not met"
                - "Chase the written updated plan if it has not arrived within two weeks"
            - name: Weekly home-school communication routine
              description: |-
                ## Purpose
                Small problems at school, a new seating plan, a missed break, a supply teacher, often show up at home as meltdowns or refusal with no explanation. A short agreed weekly exchange, through a notebook, app or email, connects the two halves of your child's week before small things grow.

                ## Milestones
                1. A method and a named member of staff agreed for weekly updates.
                2. A simple format agreed: one good thing, one difficulty, anything coming up.
                3. Your weekly note going in on the same day each week.
                4. Patterns from a month of notes raised at the next termly review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly home-school notes have been exchanged for at least eight consecutive school weeks with a named staff member."
                cadence: rolling
              tasks:
                - "Agree a method and a named staff contact for weekly updates"
                - "Suggest a three-line format of a win, a difficulty and what is coming up"
                - "Send your weekly home note to school @recurring(weekly:fri)"
                - "Copy any recurring issue from the notes into your contact log"
            - name: Monthly progress check against agreed targets
              description: |-
                ## Purpose
                Targets set in a support plan are only useful if someone looks at them between reviews. A monthly half hour with your child's books, reading record and any data the school shares shows whether the help is working early enough to ask for a change, rather than finding out at the end of the year.

                ## Milestones
                1. Each current target copied into a simple progress sheet.
                2. A month's evidence noted against each target, from books, reports or what your child can now do.
                3. A traffic light rating for each target, updated monthly.
                4. Any target stuck on red for two months raised with the school.

                ## Notes
                Start from the **Metrics log** template if you want a running record of scores such as reading age or spelling tests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A progress sheet with a monthly rating for every current target exists, and any target red for two months has been raised in writing."
                cadence: rolling
              tasks:
                - "Copy every current support plan target into a progress sheet"
                - "Look through your child's books and reading record for evidence"
                - "Rate each target green, amber or red for the month @recurring(monthly:12)"
                - "Email the school about any target that has been red for two months"
            - name: Checking therapy hours delivered against the plan
              description: |-
                ## Purpose
                Speech and language therapy, occupational therapy and specialist teaching are often written into plans as a number of sessions, then delivered less often through staff absence or vacancies. Comparing sessions promised with sessions received each month gives you the facts to ask for catch-up sessions, rather than a general feeling that therapy has slipped.

                ## Milestones
                1. Every therapy and specialist session in the plan listed with its promised frequency.
                2. A monthly tally of sessions actually delivered, confirmed with the school or therapist.
                3. A running total of missed sessions kept.
                4. Missed provision raised in writing with a request for how it will be made up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly tally of promised versus delivered sessions exists for every therapy in the plan, with any shortfall raised in writing."
                cadence: rolling
              tasks:
                - "List each therapy in the plan with its promised number of sessions"
                - "Ask the school or therapist how they record sessions delivered"
                - "Record sessions promised and delivered for last month @recurring(monthly:5)"
                - "Write to the school about any shortfall and ask how it will be made up"
            - name: After-school check-in on how the day went
              description: |-
                ## Purpose
                Many children with additional needs hold it together at school and fall apart at home, and they cannot always say why in words. A two-minute check-in using a visual scale or three simple questions, recorded briefly, builds a picture over weeks that shows which days, lessons or staff changes make things harder.

                ## Milestones
                1. A check-in method chosen that your child can manage when tired, such as a 1 to 5 face scale.
                2. The check-in happening at a predictable time, after a snack and some quiet.
                3. Four weeks of brief notes collected.
                4. Patterns shared with the school at the next review.

                ## Notes
                Keep it short and optional. If your child needs to decompress first, check in later in the evening rather than at the school gate.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of daily check-in notes exist and the patterns found have been shared with the school."
                cadence: rolling
              tasks:
                - "Make or print a simple 1 to 5 scale your child can point to"
                - "Do a two-minute check-in after snack time and note the score @recurring(daily)"
                - "Circle the days of the week with the lowest scores after four weeks"
                - "Share the pattern with the class teacher in your weekly note"
            - name: Statutory deadline tracker for requests and reviews
              description: |-
                ## Purpose
                Formal processes run on legal time limits: weeks to decide on an assessment, weeks to issue a plan, a fixed window to appeal. Authorities miss them often, and parents miss their own windows too. A tracker that lists every live deadline, checked each Monday, means nothing expires quietly while you are busy.

                ## Milestones
                1. Every live process listed with the date it started and each legal deadline that follows.
                2. Deadlines that apply to you, such as responding to a draft or lodging an appeal, marked separately.
                3. Each deadline added to your calendar with a reminder a week before.
                4. Any deadline missed by the authority chased in writing the day after.

                ## Notes
                Check the time limits with your independent advice service; they differ between systems and change from time to time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker lists every live process with its legal deadlines, each in the calendar, and any missed authority deadline has been chased in writing."
                cadence: rolling
              tasks:
                - "List each live request or review with the date it started"
                - "Work out each legal deadline that follows and add it to your calendar"
                - "Check the tracker for anything due in the next fortnight @recurring(weekly:mon)"
                - "Write to the authority the day after any deadline it has missed"
            - name: Attendance, reduced timetable and exclusion record
              description: |-
                ## Purpose
                Being sent home early, kept in at break, asked to stay home on trip days or placed on a reduced timetable can all go unrecorded, yet each one is lost education. Keeping your own monthly record of attendance and any informal or formal exclusion protects your child's right to a full education and is strong evidence that current support is not enough.

                ## Milestones
                1. The school's official attendance figure for the year obtained.
                2. Every early collection, missed session or informal exclusion noted with date and reason given.
                3. Any reduced timetable recorded with its start date and agreed review date.
                4. A monthly summary of hours missed kept in the evidence folder.

                ## Notes
                Start from the **Metrics log** template. Being asked to collect your child early is usually an exclusion even when it is not called one; ask the school to record it properly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly record of attendance, early collections and any reduced timetable exists, with total hours missed for the year to date."
                cadence: rolling
              tasks:
                - "Ask the school office for your child's attendance figure this year"
                - "Note every early collection or missed session with the reason given"
                - "Add up the hours missed this month and record the total @recurring(monthly:28)"
                - "Ask the school in writing to record any early collection formally"
            - name: Start-of-year handover to the new class teacher
              description: |-
                ## Purpose
                Support that worked brilliantly in June can vanish in September when a new teacher has not read the file. A planned handover before or in the first week of term, with your one-page profile and the current plan, protects the strategies that took a year to build.

                ## Milestones
                1. A short meeting or call booked with the new teacher before or in the first week of term.
                2. The updated one-page profile and current plan handed over.
                3. The three strategies that matter most agreed and written down by the teacher.
                4. A check-in booked for the fourth week of term.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The new teacher has received the profile and plan and agreed the three key strategies before the third week of term."
                cadence: cyclic
              tasks:
                - "Ask the school who your child's teacher will be next year @recurring(yearly)"
                - "Update the one-page profile with anything learned this year"
                - "Book a short handover meeting for the first week of term"
                - "Book a follow-up check-in for week four"
            - name: Reading an educational psychologist's report
              description: |-
                ## Purpose
                Educational psychology reports are long, technical and often arrive weeks before a decision is made from them. Knowing how they are structured, and where the recommendations that matter are hidden, lets you check that what the psychologist recommended actually reaches the support plan.

                ## Milestones
                1. The usual sections of a report understood: background, assessment results, analysis, recommendations.
                2. Every recommendation in your child's report copied into a numbered list.
                3. Each recommendation marked as specific (who, what, how often) or vague.
                4. Questions about unclear findings sent to the psychologist or school.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A numbered list of every recommendation in the latest report exists, each marked specific or vague, with any questions sent in writing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the report once through without making notes"
                - "Copy every recommendation into a numbered list"
                - "Mark each recommendation as specific or vague"
                - "Email the psychologist or school with your questions on unclear findings"
            - name: Making sense of standard scores and percentiles
              description: |-
                ## Purpose
                Reports full of standard scores, percentile ranks and age equivalents can make a significant difficulty look minor or the reverse. Learning what the common scales mean, and how to read a gap between your child's strongest and weakest areas, lets you follow the discussion in meetings and spot when a finding has been understated.

                ## Milestones
                1. What a standard score, percentile rank and age equivalent each mean explained in your own words.
                2. The average range on the scales used in your child's reports noted.
                3. Your child's scores set out in a simple table from highest to lowest.
                4. The biggest gaps between areas identified and discussed with the professional who assessed.

                ## Notes
                Interpreting scores for a diagnosis or a decision is the assessing professional's job. The point here is to understand what they wrote and ask good questions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of your child's scores ordered highest to lowest exists, with the average range marked and the main gaps discussed with the assessor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look up the difference between standard scores, percentiles and age equivalents"
                - "Find the average range for the tests named in your child's reports"
                - "Put your child's scores into a table from highest to lowest"
                - "Ask the assessor what the biggest gaps mean for the classroom"
            - name: Writing outcomes that can actually be measured
              description: |-
                ## Purpose
                Targets like improve reading or be more confident cannot be checked, so a year can pass with no way of showing the support did or did not work. Learning to write outcomes that say what your child will be able to do, by when, and how anyone will know, makes every review sharper and every plan easier to hold to account.

                ## Milestones
                1. The difference between an aspiration, an outcome and a target understood.
                2. Three of your child's current targets rewritten with a skill, a measure and a date.
                3. Rewritten outcomes shared with the school before the next review.
                4. At least one outcome in the next plan using your measurable wording.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three current targets have been rewritten as measurable outcomes and at least one appears in the next written plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a short guide on writing measurable outcomes for support plans"
                - "Pick three current targets that cannot be measured"
                - "Rewrite each with a skill, a measure and a date"
                - "Send the rewritten outcomes to the school before the next review"
            - name: Spotting vague wording in a support plan
              description: |-
                ## Purpose
                Phrases such as access to, regular, opportunities for and as appropriate sound supportive but commit nobody to anything. Learning to spot them, and to ask instead for who will deliver what, how often and for how long, is the single most useful skill when a draft plan arrives.

                ## Milestones
                1. A list of common vague phrases and their specific alternatives written.
                2. Your child's current plan read with every vague phrase highlighted.
                3. A specific rewording proposed for each highlighted phrase.
                4. The proposals checked with your independent advice service.

                ## Notes
                A useful test for every line of provision: could someone who has never met your child tell, a month from now, whether it happened?
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every vague phrase in the current plan has been highlighted and a specific rewording proposed, checked with an advice service."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a list of vague phrases to watch for in support plans"
                - "Highlight every vague phrase in your child's current plan"
                - "Propose a who, what, how often and how long rewording for each"
                - "Ask the advice service to check your proposed wording"
            - name: Understanding reasonable adjustments and disability duties
              description: |-
                ## Purpose
                In many countries schools have a legal duty not to disadvantage disabled pupils and to make reasonable adjustments, whether or not the child has a formal plan. Knowing the outline of that duty helps you ask for practical changes, such as rest breaks, adapted uniform or a quiet exit route, with confidence and without needing a diagnosis first.

                ## Milestones
                1. The basic disability duties on schools in your country summarised from an official or charity source.
                2. The difference between reasonable adjustments and a statutory support plan understood.
                3. Three adjustments that would help your child listed.
                4. A written request for those adjustments sent to the school.

                ## Notes
                This is background for asking well, not legal advice. For a dispute about discrimination, contact an independent advice service or a solicitor who specialises in education law.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of the school's disability duties exists and a written request for three named adjustments has been sent."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read an official or charity guide to schools' disability duties in your country"
                - "Note how reasonable adjustments differ from a statutory support plan"
                - "List three adjustments that would remove a barrier for your child"
                - "Write to the school asking for those adjustments"
            - name: Knowing the common interventions schools use
              description: |-
                ## Purpose
                Schools describe support using names of programmes and approaches that parents rarely recognise: small group phonics, precision teaching, social stories, movement breaks, pre-teaching vocabulary. Understanding what each one involves, and roughly how much time it takes, lets you judge whether the help offered matches the need described in the reports.

                ## Milestones
                1. Every intervention named in your child's plan looked up and summarised in a sentence.
                2. For each one, who usually delivers it, how often and in what group size noted.
                3. Any intervention that does not seem to match a stated need flagged.
                4. Flagged items discussed with the special needs lead.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of every intervention in the plan, with delivery details and any mismatch flagged, has been discussed with the school."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every intervention named in your child's current plan"
                - "Look up what each one involves and write a one-line summary"
                - "Note who usually delivers each, how often and in what group size"
                - "Ask the special needs lead about any intervention that seems mismatched"
            - name: Staying calm and clear in school meetings
              description: |-
                ## Purpose
                Meetings about your own child are emotional, often outnumber you six to one and move fast, and it is common to leave having agreed to things you did not mean to. A few simple techniques, a written agenda, a supporter who takes notes, a phrase for buying time, keep you calm and keep the meeting on what your child needs.

                ## Milestones
                1. A personal checklist for meetings: agenda, top three asks, documents, notetaker.
                2. A few phrases ready for buying time, such as I would like to think about that and reply in writing.
                3. A supporter or advocate asked to attend and take notes.
                4. The checklist used at the next meeting and reviewed afterwards.

                ## Notes
                Start from the **Meeting notes** template for the notes your supporter takes. You can usually bring someone with you; ask in advance so it is not a surprise.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal meeting checklist exists and has been used at a school meeting with a supporter taking notes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write your top three asks on one card before each meeting"
                - "Ask a friend, relative or advocate to come and take notes"
                - "Practise two phrases for pausing a decision until you can reply in writing"
                - "Review after the meeting what went well and what to change next time"
            - name: Writing firm, polite letters to school and the authority
              description: |-
                ## Purpose
                Most of what changes for your child changes because of something put in writing. Letters that are short, factual, reference the relevant documents and end with a clear request and a date get answered; long emotional emails get filed. Learning a simple structure saves hours and makes your requests hard to ignore.

                ## Milestones
                1. A standard structure adopted: who you are, what you are asking, why, evidence, response date.
                2. A short template saved for requests and another for complaints.
                3. One real letter sent using the structure.
                4. Replies tracked in the contact log against the response date you set.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two letter templates are saved and at least one real request has been sent using them, with the response date logged."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Save a five-part letter structure ending in a clear request and a date"
                - "Draft one template for requests and one for complaints"
                - "Ask the agent to make your next letter shorter and more factual"
                - "Log the response date for each letter you send"
            - name: Requesting a statutory needs assessment
              description: |-
                ## Purpose
                When in-school support has been tried for at least a couple of terms and your child is still not making expected progress, a formal needs assessment by the authority can lead to a legally binding plan. In many systems parents can request it themselves without waiting for the school, and the clock on the legal time limit starts on the day the request arrives.

                ## Milestones
                1. Your area's rules on who can request an assessment and what evidence helps confirmed.
                2. A request letter written, setting out needs, support tried and progress made.
                3. Supporting evidence attached: reports, school records, your statement and your child's views.
                4. The request sent by a method with proof of delivery and its date logged.
                5. The decision deadline added to the deadline tracker.

                ## Notes
                You do not usually need a diagnosis to request an assessment. Check your area's exact rules with the independent advice service before sending.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A request for a statutory assessment, with supporting evidence, has been sent with proof of delivery and its decision deadline is tracked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm with the advice service who can request an assessment where you live"
                - "Draft the request setting out needs, support tried and progress made"
                - "Attach the reports, school records, your statement and your child's views"
                - "Send the request with proof of delivery and note the date"
                - "Add the legal decision deadline to your deadline tracker"
            - name: Responding to a draft support plan
              description: |-
                ## Purpose
                When a draft statutory plan arrives there is usually a short window, often around two weeks, to comment, ask for changes and name a preferred school. What is fixed now is far harder to change later, so a careful line-by-line response is worth clearing evenings for.

                ## Milestones
                1. The response deadline confirmed and in the calendar.
                2. Every need in the reports checked against the needs section of the draft.
                3. Every provision checked for who, what, how often and for how long.
                4. A written response sent listing each requested change with its evidence.
                5. A meeting with the caseworker requested if changes are substantial.

                ## Notes
                Read the draft beside the professional reports. Anything recommended there but missing from the draft should be named in your response.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written line-by-line response to the draft plan, with evidence for each requested change, has been sent before the deadline."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Put the response deadline in your calendar the day the draft arrives"
                - "Check every need in the reports appears in the draft"
                - "Mark each provision that lacks who, what, how often or how long"
                - "Send a written response listing each change and its supporting evidence"
                - "Request a meeting with the caseworker if the changes are substantial"
            - name: Deciding whether to pay for a private assessment
              description: |-
                ## Purpose
                Waiting lists for assessments by health or education services can run to a year or more, and some families consider paying privately. A private report can add useful evidence, but it is expensive and not always given the same weight, so the decision deserves a clear comparison before money is spent.

                ## Milestones
                1. Current waiting times for public assessments confirmed in writing.
                2. Whether the school and authority will accept a private report asked and answered.
                3. Two or three qualified private assessors compared on cost, qualifications and report turnaround.
                4. A decision recorded, with the reason, to wait, pay, or both.

                ## Notes
                Check the assessor is registered with the relevant professional body and ask in advance whether the report will include specific, quantified recommendations.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a private assessment exists, based on confirmed waiting times, acceptance by school and authority, and quotes from at least two registered assessors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask in writing how long the public assessment waiting list is"
                - "Ask the school whether it will act on a private report"
                - "Get quotes from two registered private assessors"
                - "Write down your decision and the reason for it"
            - name: Mainstream, resourced or specialist school decision
              description: |-
                ## Purpose
                Choosing between a mainstream school, a mainstream school with a specialist unit and a specialist school is one of the biggest decisions in this area, and the preferred school named in a plan shapes everything that follows. Visiting with a clear set of questions about your child's needs, rather than general impressions, makes the choice defensible to the authority and right for your child.

                ## Milestones
                1. Criteria agreed that matter for your child, such as class size, therapy on site, peer group and travel time.
                2. At least three settings visited during a normal school day.
                3. Each setting scored against the same criteria with notes from the visit.
                4. A preferred setting chosen and confirmed willing to consider your child.
                5. Your reasons written down for use in the plan or any appeal.

                ## Notes
                Ask each setting how they would meet the specific provision in your child's plan, not just whether they have experience of the need.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three settings have been scored against the same written criteria and a preferred setting chosen, with reasons recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the five criteria that matter most for your child"
                - "Book visits to three settings during a normal school day"
                - "Score each setting against your criteria straight after the visit"
                - "Ask your preferred setting whether it can meet the provision in the plan"
                - "Write down the reasons for your choice"
            - name: Assistive technology request for the classroom
              description: |-
                ## Purpose
                Laptops, speech-to-text, reading pens, coloured overlays, radio aids and communication devices can remove a barrier overnight, yet schools rarely offer them unprompted. A request based on a specialist recommendation and a short trial gives the school a clear reason to provide the equipment and train staff to use it.

                ## Milestones
                1. The barrier the technology should remove described in one sentence.
                2. A recommendation obtained from a specialist, such as an occupational therapist or specialist teacher.
                3. A trial arranged at school for at least two weeks.
                4. The outcome of the trial recorded and a decision on permanent provision made.
                5. Staff training and who maintains the equipment agreed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The recommended technology has been trialled for two weeks and a written decision on permanent provision, with training, has been agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Describe in one sentence the barrier the technology should remove"
                - "Ask the occupational therapist or specialist teacher for a recommendation"
                - "Ask the school for a two-week classroom trial"
                - "Agree who trains staff and who looks after the equipment"
            - name: Home-to-school transport application
              description: |-
                ## Purpose
                Some children with additional needs qualify for transport to school paid for by the authority, because of distance, their needs or the school named in their plan. Applications usually close well before the school year starts, and late or incomplete forms can leave a family driving across town every day for a term.

                ## Milestones
                1. The authority's transport policy for children with additional needs read.
                2. Eligibility checked against the policy, with your reasons noted.
                3. The application completed with supporting evidence from reports.
                4. The application submitted before the deadline and the decision recorded.
                5. Travel arrangements, such as driver, escort and pick-up time, confirmed before term.

                ## Notes
                If transport is refused, the policy will describe a review or appeal route with its own deadline. Add it to your tracker.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A transport application with evidence has been submitted before the deadline and the decision, with any review deadline, is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the authority's transport policy for children with additional needs"
                - "Note which eligibility reasons apply to your child"
                - "Complete the application and attach the supporting reports"
                - "Confirm driver, escort and pick-up time before term starts"
            - name: Individual healthcare plan for school
              description: |-
                ## Purpose
                Children with epilepsy, diabetes, severe allergies, tube feeding or other medical needs need a written plan saying what staff do day to day and in an emergency. Agreeing it with the school and your child's clinicians before gaps appear keeps your child safe and protects their place on trips, clubs and exams.

                ## Milestones
                1. The school's policy on supporting pupils with medical conditions read.
                2. A meeting held with the school and, where possible, the specialist nurse or clinician.
                3. A written plan covering daily care, medicines, emergency steps and named trained staff.
                4. Staff training dates confirmed and recorded.
                5. A review date set, at least yearly and whenever needs change.

                ## Notes
                Clinical content in the plan should come from your child's clinicians. Your role is to make sure it exists, is accurate and is known by the right staff.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed healthcare plan covering daily care and emergencies is held by the school, with named trained staff and a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the school for its policy on pupils with medical conditions"
                - "Request a meeting with the school and your child's specialist nurse"
                - "Check the draft plan names trained staff and emergency steps"
                - "Ask for the healthcare plan to be reviewed with the school @recurring(yearly)"
            - name: Annual review meeting preparation
              description: |-
                ## Purpose
                A statutory plan is normally reviewed at least once a year, and the annual review is the main chance to change needs, provision or school. Families who send written views and evidence beforehand, and check the paperwork afterwards, turn a routine meeting into real changes in the plan.

                ## Milestones
                1. The review date confirmed and reports from professionals requested at least two weeks before.
                2. Your written views and your child's views sent before the meeting.
                3. Proposed changes to needs, outcomes and provision listed with evidence.
                4. The meeting held and agreed changes noted.
                5. The authority's decision after the review received and checked against what was agreed.

                ## Notes
                After the meeting the authority usually has a set time to decide whether to amend the plan. Put that date in your tracker and chase it.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written parental and child views were sent before the review and the authority's decision afterwards has been checked against the agreed changes."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask the school to confirm the annual review date @recurring(yearly)"
                - "Request all professional reports two weeks before the meeting"
                - "Send your written views and your child's views in advance"
                - "Check the authority's decision against the changes agreed at the meeting"
            - name: Exam access arrangements request
              description: |-
                ## Purpose
                Extra time, a reader, a scribe, rest breaks or a separate room in formal exams usually need evidence of need and a history of the adjustment being the child's normal way of working. Starting the conversation a year or more before major exams leaves time for assessment and practice, so arrangements are approved and familiar by the day.

                ## Milestones
                1. The school's exams officer or access arrangements lead identified.
                2. The arrangements your child might need discussed and the evidence required understood.
                3. Any required assessment completed by the qualified person the school uses.
                4. Arrangements in use in classwork and mock exams.
                5. Written confirmation of approved arrangements received before the exam series.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written confirmation of approved exam access arrangements is held, and the arrangements were used in at least one mock exam."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the school who handles exam access arrangements"
                - "Discuss which arrangements might apply and what evidence is needed"
                - "Check the arrangements are being used in class and in mock exams"
                - "Get written confirmation of the approved arrangements"
            - name: Moving up to secondary school with a support plan
              description: |-
                ## Purpose
                The move to secondary school brings many teachers, a timetable, a bigger building and less adult attention, and support that worked at primary often does not transfer on its own. For children with a statutory plan the secondary school is usually named on a fixed timetable well before the move, so preparation needs to start in the year before.

                ## Milestones
                1. The deadline for naming the secondary school in the plan confirmed.
                2. Possible secondary schools visited with the special needs lead at each.
                3. The plan amended to name the new school and reflect secondary provision.
                4. Extra transition visits, a photo booklet and a named key adult arranged.
                5. A meeting held in the first half term to check support is in place.

                ## Notes
                Ask about lunchtimes, corridors and lesson changes, which are often harder than lessons themselves.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The plan names the secondary school before the legal deadline, extra transition visits have happened and a first half-term check meeting is booked."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the deadline for naming a secondary school in the plan"
                - "Book visits to possible schools and meet each special needs lead"
                - "Ask for extra transition visits and a named key adult"
                - "Book a support check meeting for the first half term"
            - name: School trip and residential with adjustments
              description: |-
                ## Purpose
                Children with additional needs are sometimes quietly left off trips or asked to have a parent attend. Planning early with the trip leader, covering staffing, medicines, sleeping arrangements, sensory breaks and the itinerary in pictures, gives your child the same experience as classmates and gives the school a plan it can follow.

                ## Milestones
                1. The trip leader contacted at least six weeks before departure.
                2. Adjustments agreed for travel, activities, meals, rest and sleeping.
                3. A visual itinerary or social story prepared with your child.
                4. Medicines, equipment and emergency contacts handed over and checked.
                5. A short debrief with your child and the school after the trip.

                ## Notes
                Start from the **Operational checklist** template for the handover list. Your child should not be excluded from a trip because of their needs without adjustments being properly considered.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written adjustments for the trip were agreed with the trip leader at least two weeks before departure and your child took part."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Email the trip leader six weeks before to discuss adjustments"
                - "Agree arrangements for travel, activities, meals, rest and sleep"
                - "Make a picture itinerary of the trip with your child"
                - "Hand over medicines, equipment and contacts with a checklist"
            - name: Multi-agency meeting with health and social care
              description: |-
                ## Purpose
                Families involved with school, health and social care at once often end up repeating the same story to each and acting as the only link between them. A single well-run meeting with everyone present, an agreed lead professional and a shared action list can end the duplication and close gaps that no one service owns.

                ## Milestones
                1. A request made for a joint meeting, naming each service involved.
                2. A short summary of your child's needs and current involvement sent beforehand.
                3. A lead professional agreed to coordinate between services.
                4. A shared action list with owners and dates circulated after the meeting.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A joint meeting has taken place with a named lead professional and a written shared action list circulated to all attendees."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the school or caseworker to arrange a joint meeting with all services"
                - "Send a one-page summary of needs and current involvement in advance"
                - "Ask the meeting to agree a lead professional"
                - "Check the shared action list arrives within a week"
            - name: Raising concerns at nursery before school starts
              description: |-
                ## Purpose
                Speech delay, physical difficulties or developmental differences are often first noticed at nursery, and getting help started before reception gives a child the best start. Early years settings can request outside support and begin a plan, so raising concerns a year before school entry gives time for assessments and a proper transfer to the new school.

                ## Milestones
                1. Concerns discussed with the nursery key worker and the setting's special needs lead.
                2. Observations recorded by the nursery over at least a few weeks.
                3. Referrals made to services such as speech and language therapy or the early years advisory team.
                4. A transition meeting held with the new school before the child starts.
                5. Nursery records and reports passed to the new school.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Nursery observations and any referrals are on file, and a transition meeting with the new school took place before the start of term."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the key worker for a meeting to share your concerns"
                - "Ask the nursery to observe and record for a few weeks"
                - "Ask which outside referrals the nursery can make"
                - "Request a transition meeting with the new school in the summer term"
            - name: Getting support without a diagnosis
              description: |-
                ## Purpose
                Diagnosis waiting lists can stretch for years, and families are sometimes told nothing can happen until a label arrives. In most systems support at school should follow need, not diagnosis, so this project builds the case around what your child finds hard and what helps, while any assessment for diagnosis runs separately.

                ## Milestones
                1. Your area's guidance checked on whether school support depends on diagnosis.
                2. Needs described in functional terms: what your child cannot yet do and when it shows.
                3. A request to the school for support based on those needs, citing the guidance.
                4. Support agreed and started while the diagnostic wait continues.

                ## Notes
                The diagnostic pathway itself sits with health services and your child's doctor. Keep the two processes separate so one does not hold up the other.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "School support based on described needs has been agreed in writing while any diagnostic assessment is still pending."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the guidance on whether school support depends on a diagnosis where you live"
                - "Describe each difficulty by what your child cannot yet do and when"
                - "Write to the school requesting support for those needs"
                - "Note in your log that the diagnostic wait and school support are separate"
            - name: Getting a reduced timetable back to full days
              description: |-
                ## Purpose
                A part-time timetable can be a useful short bridge after a crisis, but many become months long with no plan to end them, leaving the child missing a large share of school. An agreed, written plan to build back to full days, with support added at each step, protects your child's education and puts a time limit on the arrangement.

                ## Milestones
                1. The current timetable, start date and reason recorded in writing.
                2. A written plan agreed with weekly or fortnightly steps back to full time.
                3. Extra support named for each step, not only extra hours.
                4. Progress reviewed at each step and the plan adjusted if needed.
                5. Full-time attendance reached, or a formal request for more help made if steps stall.

                ## Notes
                Start from the **Remediation plan** template. A reduced timetable should normally be agreed with you, be time-limited and be reviewed regularly; ask the school to confirm all three in writing.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written step-up plan with dates and support at each step exists, and either full-time attendance is reached or a formal request for more help has been made."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the school to confirm the current timetable and its start date in writing"
                - "Agree a stepped plan back to full days with dates"
                - "Ask what extra support will be added at each step"
                - "Review hours attended against this week's step with the school @recurring(weekly:wed)"
            - name: Sharing support plan information across two homes
              description: |-
                ## Purpose
                Reports, meeting invitations and school messages often reach only one parent when parents live apart, and the child gets two different approaches. Agreeing how information is shared, who attends which meetings and which strategies both homes use keeps support consistent and avoids the school being caught between parents.

                ## Milestones
                1. The school asked to send letters and invitations to both parents where both have parental responsibility.
                2. A shared folder or regular email agreed for reports and plans.
                3. The key strategies from the plan agreed for use in both homes.
                4. Attendance at reviews agreed in advance, together or in turn.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both parents receive school correspondence, a shared folder of reports exists and the key strategies are agreed in writing for both homes."
                cadence: rolling
              tasks:
                - "Ask the school to copy both parents into letters and invitations"
                - "Set up a shared folder for reports and plans"
                - "Agree which three strategies both homes will use"
                - "Send the other parent this week's school notes and updates @recurring(weekly:sun)"
            - name: Carer's assessment for you as the parent carer
              description: |-
                ## Purpose
                Parents of disabled children often run on empty for years, juggling appointments, paperwork, broken sleep and work. Many areas offer parent carers their own assessment of needs, which can lead to short breaks, training or other support, and asking for it is a practical step, not a sign of failing.

                ## Milestones
                1. How to request a parent carer's needs assessment in your area found out.
                2. Your own needs written down: sleep, time, work, health and breaks.
                3. The assessment requested and completed.
                4. Any support offered recorded and taken up, or reasons for refusal noted.

                ## Notes
                Disability-related financial help for families is often available too; your independent advice service or a disability charity can tell you what to check.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A parent carer's needs assessment has been completed and the outcome, with any support offered, is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find out how to request a parent carer's needs assessment in your area"
                - "Write down what you need help with, including sleep, time and breaks"
                - "Request the assessment and note the date"
                - "Ask for your carer's assessment to be reviewed @recurring(yearly)"
            - name: Teaching your child to explain their own needs
              description: |-
                ## Purpose
                As children get older, the most effective advocate in the room is often the child. Helping them understand their own strengths and difficulties, and practise saying what helps, builds confidence, prepares them for secondary school and adult life, and makes their views far more powerful at reviews.

                ## Milestones
                1. A conversation with your child about their strengths and difficulties, at a level they are ready for.
                2. A short script or card written with your child saying what helps them.
                3. The script practised at home and used once with a trusted adult at school.
                4. Your child contributing directly, in person or in writing, to their next review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your child has a self-advocacy card in their own words and has used it with a member of staff and at their next review."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Talk with your child about what they are good at and what is hard"
                - "Write a short card with your child saying what helps them"
                - "Practise using the card in a role play at home"
                - "Plan with your child how they will take part in the next review"
            - name: Post-16 options and preparing for adulthood
              description: |-
                ## Purpose
                From around age 14, support plans in many systems should focus on preparing for adulthood: further education, employment, independent living, health and friendships. Planning post-16 options early, including colleges, supported internships and apprenticeships, avoids a cliff edge when school ends and keeps support in place if the plan continues into further education.

                ## Milestones
                1. Preparing for adulthood outcomes added at the review in the year your child turns 14 or as early as your system allows.
                2. Post-16 options researched, including colleges, sixth forms, supported internships and apprenticeships.
                3. At least two settings visited with your young person.
                4. The preferred setting named in the plan before the legal deadline.
                5. Your young person's own views central in every decision, recorded in their words.

                ## Notes
                Rights over decisions often shift to the young person at a set age. Find out when this applies where you live and what support they need to use it.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Preparing for adulthood outcomes are in the plan and a post-16 setting chosen with your young person is named before the legal deadline."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the school when preparing for adulthood outcomes will be added to the plan"
                - "List post-16 options in your area with your young person"
                - "Visit two settings together and note what they liked"
                - "Confirm the deadline for naming the post-16 setting in the plan"
            - name: Mediation before a formal appeal
              description: |-
                ## Purpose
                Disagreements with the authority over an assessment, a plan's content or the school named can sometimes be settled through independent mediation, and in some systems you must at least consider it before appealing. A prepared mediation session with clear asks and evidence can resolve things in weeks rather than months, and keeps the appeal route open if it fails.

                ## Milestones
                1. Whether mediation is required or optional before an appeal in your area confirmed.
                2. The mediation service contacted and the certificate or session arranged within the time limit.
                3. A one-page summary of the disagreement, your asks and your evidence prepared.
                4. The session attended and any agreement put in writing.
                5. Next steps and the appeal deadline added to the tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Mediation has been held or formally declined within the time limit, and any agreement or the remaining appeal deadline is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm whether mediation is required before an appeal where you live"
                - "Contact the mediation service within the time limit"
                - "Prepare a one-page summary of the disagreement and your asks"
                - "Get any agreement reached confirmed in writing"
            - name: Appeal to the tribunal against an authority decision
              description: |-
                ## Purpose
                When the authority refuses to assess, refuses a plan or issues one you disagree with, many systems let parents appeal to an independent tribunal, and most parents who appeal see some change. Appeals run on strict deadlines and depend on organised evidence, so a structured approach with specialist advice makes a real difference.

                ## Milestones
                1. The decision being appealed and the appeal deadline confirmed.
                2. Specialist advice obtained from an independent advice service, charity or education solicitor.
                3. The appeal form submitted before the deadline with the decision letter attached.
                4. An evidence bundle prepared, including any expert reports and witness statements.
                5. The hearing attended or a settlement agreed, and the outcome implemented on time.

                ## Notes
                Appeals are legal processes. Use this project to organise the work and deadlines, and get specialist advice on the content of your case.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An appeal has been lodged before the deadline, with specialist advice and an evidence bundle, and the outcome is recorded with implementation dates."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the appeal deadline from the decision letter in your tracker"
                - "Contact a specialist advice service or education solicitor"
                - "Submit the appeal form with the decision letter attached"
                - "Build an indexed evidence bundle from your folder"
            - name: Formal complaint to the authority or ombudsman
              description: |-
                ## Purpose
                Some failings cannot be appealed, such as delays, provision in a plan not being delivered or poor handling of your case. A formal complaint through the school or authority's procedure, then to an ombudsman if needed, can produce an apology, a remedy and, sometimes, compensatory education for lost provision.

                ## Milestones
                1. The right body identified: school, authority or ombudsman, and their complaints procedure read.
                2. A complaint written with a timeline, the failing, its impact and the remedy you want.
                3. Each stage of the procedure completed in order with dates logged.
                4. The final response recorded and, if unresolved, referral to the ombudsman considered.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A formal complaint has been submitted with a timeline and requested remedy, and each stage's response is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the complaints procedure of the school or authority involved"
                - "Write a dated timeline of what went wrong from your contact log"
                - "Ask the agent to draft the complaint from your timeline and requested remedy"
                - "Log the date of each stage and any reply"
            - name: Personal budget for part of the provision
              description: |-
                ## Purpose
                Some systems let families take part of a child's support as a personal budget or direct payment, for example to arrange a therapist or a specialist activity themselves. It gives more control but brings paperwork, employment responsibilities and accounting, so it is worth weighing carefully before agreeing.

                ## Milestones
                1. Whether a personal budget is available for your child's provision confirmed.
                2. The parts of provision it could cover and the amount offered understood.
                3. Responsibilities such as record keeping, contracts and reporting listed.
                4. A decision made and, if taken up, a simple spending record set up.

                ## Notes
                Ask what happens if a provider you arrange becomes unavailable, and who is responsible for making up the gap.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a personal budget exists, and if one was taken a spending record for the first quarter is up to date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the caseworker whether a personal budget is available for your child"
                - "List which parts of the provision it could cover and the amount"
                - "Write down the record keeping and reporting it would require"
                - "Decide and note your reasons"
            - name: Joining the parent carer forum
              description: |-
                ## Purpose
                Many areas have a parent carer forum that works with the authority and health services to shape how support is planned and delivered. Taking part, even occasionally, gives you early news of changes, connects you with families who have done this before and lets your experience improve the system for the next child.

                ## Milestones
                1. Your area's parent carer forum or equivalent parent group found.
                2. Signed up for its newsletter or mailing list.
                3. At least one meeting, survey or consultation taken part in.
                4. One useful contact or piece of local knowledge recorded from the forum.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "You are on the forum's mailing list and have taken part in at least one meeting or consultation in the past year."
                cadence: rolling
              tasks:
                - "Search for the parent carer forum in your area"
                - "Sign up for the forum's newsletter"
                - "Respond to one survey or consultation the forum runs"
                - "Attend or catch up on a forum meeting @recurring(quarterly)"
---

# Special Educational Needs Support

This area is for parents and carers working to get a child with special educational needs or a disability the right help at school, from the first worried conversation to a legally binding support plan and beyond. It starts with foundations (a one-page profile, an evidence folder, a map of current support and a first meeting with the school's special needs lead), moves through the routines that keep support honest, the knowledge that makes reports and plans readable, the requests and decisions that change what your child receives, dated events such as annual reviews and the move to secondary school, situations such as early years, two homes or no diagnosis, and finally the specialist routes of mediation, appeal and complaint.

What repeats is a Friday home-school note, a Monday deadline check, a short daily after-school check-in, monthly checks on progress, therapy hours and attendance, a termly support plan review and a yearly annual review and new-teacher handover. The Meeting notes, Metrics log, Operational checklist and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
