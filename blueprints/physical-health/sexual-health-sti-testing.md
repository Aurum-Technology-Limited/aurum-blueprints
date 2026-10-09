---
id: physical-health.sexual-health-sti-testing
name: Sexual Health & STI Testing
description: "Sexual health kept private and on schedule: a testing interval, emergency contraception and PEP plans, contraception refills, results followed up and partners told."
category: personal
version: 1.0.0
tags: [physical-health, sexual-health-sti-testing, everyone, student, sti-testing, contraception, prep, privacy]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Sexual Health & STI Testing
          description: "Regular sexual health checks, contraception choices, STI testing and follow-up treatment, kept private and on schedule for sexually active adults."
          projects:
            - name: Mapping your local sexual health services
              description: |-
                ## Purpose
                Knowing where to go is the step most people skip until they need it in a hurry. A single page listing your nearest clinic, its walk-in and booking rules, the free postal testing service for your area, a pharmacy that supplies emergency contraception and where to get PEP out of hours turns a stressful search into a two-minute lookup.

                ## Milestones
                1. The nearest sexual health clinic found, with its booking and walk-in rules noted.
                2. The free or low-cost postal testing service that covers your address identified.
                3. A pharmacy that supplies emergency contraception listed with its opening hours.
                4. The out-of-hours route to PEP written down, often an emergency department.
                5. All of it saved on one page you can open on your phone.

                ## Notes
                Many sexual health clinics see anyone, wherever you are registered with a doctor, and most are free or low cost. Check the rules where you live.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One page on your phone lists your clinic, postal testing service, emergency contraception pharmacy and out-of-hours PEP route, each with opening hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your health service's directory for the nearest sexual health clinic"
                - "Note whether the clinic takes walk-ins, bookings or both"
                - "Check which postal testing service covers your address"
                - "Find a pharmacy nearby that supplies emergency contraception"
                - "Write down where to get PEP outside clinic hours"
            - name: First full sexual health screen
              description: |-
                ## Purpose
                Most sexually transmitted infections cause no symptoms at all, so the only way to know your status is to test. A full first screen, usually covering chlamydia, gonorrhoea, syphilis and HIV, gives you a clean starting point that every later test is measured against.

                ## Milestones
                1. A screen booked at a clinic or a postal kit ordered.
                2. Samples taken the way the clinic or kit instructions describe.
                3. Every result received, including any that take longer than the rest.
                4. Results and the date of the screen saved in your private records.

                ## Notes
                Ask whether hepatitis testing is recommended for you; clinics add it based on your history rather than by default.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full screen completed with every result received and saved, dated, in your private records."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a clinic visit or a postal kit for your first screen"
                - "Book the appointment or order the kit"
                - "Ask which infections the screen covers and why"
                - "Save every result with the date of the test"
            - name: Testing frequency agreed with a clinician
              description: |-
                ## Purpose
                How often to test depends on new partners, the kind of sex you have and whether you use condoms or PrEP, so no single rule fits everyone. Asking a clinician for your own interval, and writing it down, replaces guesswork and embarrassment with a schedule you can keep.

                ## Milestones
                1. Your situation described honestly to a clinician or clinic adviser.
                2. A testing interval agreed, such as yearly or every three months.
                3. The events that should prompt an extra test, such as a new partner, written down.
                4. The interval set as a reminder in your calendar.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A testing interval and the triggers for an extra test agreed with a clinician and written in your records."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the questions you want to ask about testing frequency"
                - "Ask a clinician or clinic adviser how often you should test"
                - "Record the interval and the triggers for an extra test"
                - "Revisit your testing interval if your relationships have changed @recurring(yearly)"
            - name: Private sexual health records file
              description: |-
                ## Purpose
                Results arrive by text, app, letter or phone call, and within a year it is hard to say when you last tested or for what. One locked file holding dates, tests, results and treatments lets you answer a clinician's questions accurately and keeps the details away from anyone you share a device with.

                ## Milestones
                1. A locked note or password-protected file created for sexual health records.
                2. Past test dates and results entered as far back as you can find.
                3. Contraception history and any treatments added with dates.
                4. The file stored somewhere only you can open.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A locked records file holds every test, result and treatment you can find, with dates, and opens only for you."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a locked note or password-protected file for your records"
                - "Add every past test date and result you can find"
                - "Add contraception and treatment history with dates"
                - "Check that each result from the last quarter is in the file @recurring(quarterly)"
            - name: Window periods and when each test is accurate
              description: |-
                ## Purpose
                A test taken too soon after a risk can come back negative even when an infection is present, because each infection takes time to show up. Learning the window periods your clinic uses, and when a retest is needed, prevents false reassurance and wasted kits.

                ## Milestones
                1. The window period for each common test noted from your clinic or health service.
                2. The difference between testing now and retesting later understood.
                3. A rule written down for when to test after a new partner.
                4. Your next test date set with the window periods in mind.

                ## Notes
                Window periods differ by test type and shorten as tests improve. Use the figures your own clinic gives rather than an old leaflet or a forum post.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the window period your clinic gives for each common test, with a written rule for timing tests after a new partner."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your health service's page on STI window periods"
                - "Note the window period for HIV, syphilis, chlamydia and gonorrhoea tests"
                - "Ask the clinic which retest dates they recommend after a risk"
                - "Write your rule for timing a test after a new partner"
            - name: Choosing a contraception method that fits your life
              description: |-
                ## Purpose
                Pills, patches, rings, injections, implants and coils differ in how often you have to think about them, how they affect bleeding and how quickly fertility returns when you stop. Comparing them against your own priorities before an appointment makes the conversation with a clinician faster and the choice more likely to last.

                ## Milestones
                1. Your priorities written down, such as no daily routine, lighter bleeding or no hormones.
                2. Three methods shortlisted from your health service's comparison guide.
                3. An appointment held to discuss the shortlist with a clinician or nurse.
                4. A method chosen and a start date agreed.

                ## Notes
                Condoms are the only method that also lowers the risk of STIs, so many people use them alongside another method.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A contraception method chosen with a clinician, with the reasons and start date written in your records."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three things that matter most to you in a method"
                - "Read your health service's contraception comparison guide"
                - "Shortlist three methods that fit your priorities"
                - "Book a contraception appointment to discuss the shortlist"
            - name: Emergency contraception plan made in advance
              description: |-
                ## Purpose
                Emergency contraception works best the sooner it is used, and the different options have different time limits. Knowing now which pharmacy or clinic you would go to, what it costs and when it opens turns a split condom or missed pill into a short errand rather than a frantic search.

                ## Milestones
                1. The options available locally, pills and the copper coil, listed with the time limits your health service gives.
                2. A pharmacy and a clinic that supply it found, with opening hours.
                3. The cost, or the free routes, noted.
                4. The plan saved in your phone where you can find it quickly.

                ## Notes
                Some people keep emergency contraception at home in advance. Ask a pharmacist whether that is an option for you.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved plan names where you would get emergency contraception, the time limit for each option and the opening hours."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the emergency contraception options your health service lists"
                - "Note the time limit your health service gives for each option"
                - "Find a pharmacy and a clinic that supply it near home"
                - "Check the pharmacy hours on your plan are still correct @recurring(yearly)"
            - name: PEP action card for a high-risk exposure
              description: |-
                ## Purpose
                Post-exposure prophylaxis can stop HIV taking hold after a high-risk exposure, but it has to be started quickly, usually within 72 hours and ideally much sooner. A short card saying where to get it in and out of hours, and what to say when you arrive, saves time at the moment it matters most.

                ## Milestones
                1. Where PEP is given locally during clinic hours confirmed.
                2. The out-of-hours route confirmed, often an emergency department.
                3. A one-line script written for asking for PEP at the front desk.
                4. The card saved on your phone and in your records file.

                ## Notes
                PEP is prescribed after a clinician assesses the risk. If you think you need it, go straight away rather than waiting to test.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A PEP card with daytime and out-of-hours locations and a one-line request script is saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find where your health service provides PEP during clinic hours"
                - "Confirm where to go for PEP at night and at weekends"
                - "Write one line to say at reception when asking for PEP"
                - "Confirm the PEP locations on the card have not moved @recurring(yearly)"
            - name: Condom and barrier supply at home and on you
              description: |-
                ## Purpose
                Condoms only help if they are there at the moment, in date and undamaged. Keeping a small stock at home and one in a protective case in your bag, from free schemes where you can, removes the most common reason they go unused.

                ## Milestones
                1. A free condom scheme or clinic supply found, or a pack bought in your size.
                2. A stock kept at home away from heat.
                3. One condom carried in a protective case rather than loose in a wallet.
                4. Expiry dates checked and old stock replaced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A home stock and a carried condom, both in date, kept for three months running with no gap."
                cadence: rolling
              tasks:
                - "Find the free condom scheme for your age or area"
                - "Pick up or order a supply in your fitting size"
                - "Move the carried condom into a protective case"
                - "Check condom stock and expiry dates @recurring(monthly:3)"
            - name: Yearly sexual health check
              description: |-
                ## Purpose
                Even in a long-term relationship or with few partners, a yearly check catches infections that never caused a symptom and keeps your records current. Fixing it to the same month each year, such as your birthday month, makes it a routine rather than a decision.

                ## Milestones
                1. A fixed month chosen for the yearly check.
                2. The check booked or a kit ordered in that month.
                3. Every result received and filed.
                4. Two consecutive yearly checks completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Two yearly checks completed in the chosen month, each with results filed in your records."
                cadence: cyclic
              tasks:
                - "Choose the month your yearly check will fall in"
                - "Book the yearly sexual health check or order a kit @recurring(yearly)"
                - "File each yearly result with its date"
            - name: Three-monthly screening during busier periods
              description: |-
                ## Purpose
                Clinics often suggest testing every three months for people with several or new partners, or a partner whose status is unknown. Running a quarterly routine during those periods, and dropping back when life changes, keeps the gap between infection and treatment short.

                ## Milestones
                1. A clinician has agreed that three-monthly testing suits you for now.
                2. A quarterly reminder set.
                3. Four quarterly screens completed in a year.
                4. A review held on whether to return to a longer interval.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly screens completed within twelve months, each with results filed, and the interval reviewed at the end."
                cadence: rolling
              tasks:
                - "Confirm with the clinic that quarterly testing suits your situation"
                - "Order a postal kit or book a quarterly screen @recurring(quarterly)"
                - "Ask at the fourth screen whether a longer interval now fits"
            - name: Daily contraceptive pill routine
              description: |-
                ## Purpose
                The pill is very effective when taken consistently, and much less so when doses are missed or late. Tying it to a fixed daily cue, with an alarm and a tick, turns it into a habit, and knowing the missed-pill rules for your pill in advance means a slip is handled calmly.

                ## Milestones
                1. A fixed time and daily cue chosen.
                2. A phone alarm and tick sheet in use.
                3. The missed-pill instructions for your pill saved where you can find them.
                4. A month with every pill ticked.

                ## Notes
                Start from the **Habit tracker** template. Missed-pill rules differ between types of pill, so use the leaflet in your own pack.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily pills ticked off, with the missed-pill rules for your pill saved in your records."
                cadence: rolling
              tasks:
                - "Photograph the missed-pill section of your pill leaflet"
                - "Set a daily alarm tied to something you already do"
                - "Take your contraceptive pill and tick it off @recurring(daily)"
            - name: Contraception refill and replacement calendar
              description: |-
                ## Purpose
                Repeat prescriptions run out, injections fall due every few weeks, and implants and coils have replacement dates years away that are easy to forget. One calendar holding every refill and replacement date means you are never caught out by an empty packet or a device past its date.

                ## Milestones
                1. Your method's refill or replacement interval confirmed with your clinician.
                2. The next refill, injection or replacement date in your calendar.
                3. A reminder set two weeks before each date.
                4. A year with no gap in cover.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every refill, injection and replacement date for the next year is in your calendar with a two-week reminder, and no gap in cover occurs."
                cadence: rolling
              tasks:
                - "Write down when your current pack, injection or device runs out"
                - "Add the next refill or replacement date to your calendar"
                - "Set a reminder two weeks before each due date"
                - "Check the date of your next contraception refill or appointment @recurring(monthly:11)"
            - name: PrEP routine and three-monthly reviews
              description: |-
                ## Purpose
                PrEP is highly effective at preventing HIV when taken as prescribed, and it comes with regular check-ups that include STI tests and a kidney blood test. Treating the medicine and the reviews as one routine keeps protection steady and stops a prescription lapsing between appointments.

                ## Milestones
                1. The way you take PrEP, daily or event-based, confirmed with your prescriber and written down.
                2. A dose reminder and tick sheet in use.
                3. Reviews booked every three months with the tests your clinic requires.
                4. Refills collected before supplies run low.

                ## Notes
                Take PrEP exactly as your prescriber has explained, and do not change the pattern without speaking to them first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four PrEP reviews attended in a year, each with STI and kidney tests, and no break in supply."
                cadence: rolling
              tasks:
                - "Write down how your prescriber told you to take PrEP"
                - "Take daily PrEP if prescribed that way and tick it off @recurring(daily)"
                - "Book the PrEP review with its STI and blood tests @recurring(quarterly)"
                - "Order your next PrEP supply when a month remains"
            - name: Results inbox with nothing left unread
              description: |-
                ## Purpose
                Results that sit unopened in an app, or a missed call from a withheld number, are a common way positive results go untreated for weeks. A monthly sweep of every channel the clinic uses, and a rule to return clinic calls within a day, closes that gap.

                ## Milestones
                1. Every channel the clinic uses for results listed, such as text, app or phone.
                2. Notifications switched on for the clinic app or portal.
                3. A rule written to return any clinic call within one working day.
                4. Six months with no result left unread.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly sweeps completed with no result or clinic message left unread for more than a week."
                cadence: rolling
              tasks:
                - "List how your clinic sends results and messages"
                - "Turn on notifications for the clinic app or portal"
                - "Save the clinic's number so their calls are not ignored"
                - "Sweep every channel for unread results or messages @recurring(monthly:23)"
            - name: Yearly contraception fit review
              description: |-
                ## Purpose
                A method chosen at nineteen may not suit you at thirty, and new health conditions, medicines or plans can change what is safe or sensible. A yearly review, often with a blood pressure check for hormonal methods, confirms the method still fits or starts the conversation about changing it.

                ## Milestones
                1. A yearly review date set.
                2. Notes gathered on side effects, bleeding changes and new medicines.
                3. The review held with a clinician or pharmacist.
                4. The decision to continue or change recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review held with the decision to continue or change, and the reasons, written in your records."
                cadence: cyclic
              tasks:
                - "Note any side effects or new medicines since your last review"
                - "Book the yearly contraception review @recurring(yearly)"
                - "Record whether you will continue or change and why"
            - name: Symptom notes between routine tests
              description: |-
                ## Purpose
                Unusual discharge, a sore, pain when passing urine or bleeding after sex are reasons to book promptly rather than wait for the next routine test. Writing down what you noticed and when, before the appointment, helps the clinician choose the right tests and saves a second visit.

                ## Milestones
                1. Your health service's list of symptoms that need a prompt appointment saved.
                2. A short note ready with fields for date, symptom and any recent risk.
                3. Any new symptom recorded and an appointment booked the same week.
                4. The outcome added to your records.

                ## Notes
                Do not self-treat with leftover or online antibiotics. The wrong medicine can hide an infection without curing it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new symptom in the past year has a dated note, an appointment within a week and a recorded outcome."
                cadence: rolling
              tasks:
                - "Save your health service's list of symptoms that need testing"
                - "Create a short note with date, symptom and recent risk fields"
                - "Book an appointment within a week of noticing a new symptom"
            - name: Reading a sexual health results message
              description: |-
                ## Purpose
                Results messages use words like reactive, equivocal, negative and not detected, and a vague text can cause days of worry. Learning what each term usually means, and what to ask when a result is unclear, helps you respond the right way rather than guessing.

                ## Milestones
                1. The terms your clinic uses in results messages listed with plain meanings.
                2. The difference between a screening result and a confirmed diagnosis understood.
                3. A question list ready for an unclear or reactive result.
                4. Your last results re-read with the new understanding.

                ## Notes
                A reactive or unclear result usually leads to a confirmation test, not a diagnosis. Follow the clinic's instructions in every case.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of the result terms your clinic uses, with three questions to ask about an unclear result."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Collect the wording from your last two results messages"
                - "Look up each term on your clinic's or health service's site"
                - "Write three questions to ask about an unclear result"
            - name: Which test checks for which infection
              description: |-
                ## Purpose
                A urine sample, a swab, a blood test and a throat swab each look for different things, and a clear result on one does not cover the others. Knowing which samples catch which infection lets you check that a screen covers the sites and infections that matter for you.

                ## Milestones
                1. The common infections matched to the sample types used to test for them.
                2. The body sites relevant to the sex you have noted for future screens.
                3. Your last screen checked against that list.
                4. Any gap raised at your next appointment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table matches each common infection to its sample type, and your last screen has been checked against it for gaps."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's guide to STI test types"
                - "Make a table of infection against sample type"
                - "Check your last screen against the table"
                - "Ask the clinic about any gap at your next screen"
            - name: Taking a home swab or blood sample properly
              description: |-
                ## Purpose
                Postal kits are only as good as the samples in them, and an under-filled finger-prick tube or a badly taken swab means a void result and another two-week wait. Practising the technique, and setting up the conditions that make it easy, gets a usable sample first time.

                ## Milestones
                1. The kit instructions and any video from the service watched in full.
                2. Hands warmed and a quiet set-up ready before the finger-prick.
                3. A complete sample taken and posted on the day stated.
                4. The lab confirms the sample was usable.

                ## Notes
                Post samples early in the week if the service asks, so they do not sit in a postbox over a weekend.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A home kit returned with every sample usable, shown by a result rather than a request to retest."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Watch the testing service's sample instructions from start to finish"
                - "Drink water and warm your hands before the finger-prick"
                - "Fill the blood tube to the marked line"
                - "Post the kit on a day the service recommends"
            - name: Using condoms and barriers correctly
              description: |-
                ## Purpose
                Most condom failures come from the wrong size, an oil-based lubricant with latex, or putting one on partway through rather than from the start. Learning the handful of rules your health service publishes makes the method far more reliable.

                ## Milestones
                1. Your health service's guide to condom use read.
                2. The right size found, using a fit guide or sample packs.
                3. A lubricant that is safe with your condoms chosen.
                4. Internal condoms and dental dams understood as options.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A condom size, a compatible lubricant and your health service's main use rules are written down in your records."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's guide to using condoms"
                - "Try a fit guide or sample pack to find your size"
                - "Check that your lubricant is safe to use with latex"
                - "Find out where to get internal condoms and dental dams"
            - name: Talking about testing with a new partner
              description: |-
                ## Purpose
                Asking a new partner when they last tested can feel awkward, which is why many people never ask. Practising a few plain sentences, and offering your own result first, makes it an ordinary part of starting something new rather than an accusation.

                ## Milestones
                1. Two or three opening lines written in your own words.
                2. Your own recent result ready to share first.
                3. The conversation held before sex with at least one new partner.
                4. A plan agreed for testing together if either of you is unsure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Opening lines written in your own words, and the conversation held with a new partner before sex at least once."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Write two opening lines about testing in your own words"
                - "Keep your most recent result to hand so you can share it first"
                - "Suggest testing together when either of you is unsure"
            - name: Your confidentiality rights at a sexual health clinic
              description: |-
                ## Purpose
                Fear that parents, employers or a family doctor will find out keeps many people, students especially, away from clinics. Finding out what your clinic shares, with whom and when, usually shows that sexual health records are kept separately and shared only with your consent.

                ## Milestones
                1. Your clinic's confidentiality policy read.
                2. Whether results are shared with your family doctor confirmed.
                3. The rules for under-18s at your clinic understood if they apply.
                4. Your preferred contact method recorded with the clinic.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of what your clinic shares and with whom, and your preferred contact method recorded with the clinic."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the confidentiality page on your clinic's website"
                - "Ask whether results are sent to your family doctor"
                - "Tell the clinic how you want to be contacted about results"
            - name: Undetectable equals untransmittable explained
              description: |-
                ## Purpose
                People living with HIV who take treatment and keep an undetectable viral load do not pass HIV on through sex, a finding confirmed by large international studies. Understanding this matters for anyone diagnosed, and for partners deciding about condoms, PrEP and testing.

                ## Milestones
                1. A recognised HIV organisation's evidence summary read.
                2. What undetectable means in viral load terms understood.
                3. The role of regular monitoring in keeping that status understood.
                4. Any questions taken to a clinician or HIV adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note in your own words explaining undetectable equals untransmittable, checked against a recognised HIV organisation's summary."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a recognised HIV charity's summary of undetectable equals untransmittable"
                - "Write the key points in a short note"
                - "Ask your clinic how often viral load is checked to keep it reliable"
            - name: Sexual history questions clinics ask and why
              description: |-
                ## Purpose
                Clinics ask about recent partners, the kind of sex and condom use because the answers decide which tests to run and which sites to swab. Knowing the questions in advance makes first-time visitors less anxious and the answers more accurate.

                ## Milestones
                1. The usual questions in a sexual history listed.
                2. The reason each one is asked understood.
                3. Your own answers for the last three months prepared privately.
                4. One appointment completed with those answers ready.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A private note holds the usual sexual history questions and your answers for the last three months, used at one appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a clinic's guide to what happens at a first visit"
                - "List the history questions you are likely to be asked"
                - "Note your answers for the last three months in your records"
            - name: Postal kit or clinic visit as your default
              description: |-
                ## Purpose
                Postal kits are private and quick to order, while clinic visits can test more sites, examine symptoms and treat on the day. Choosing a default for routine tests, and knowing when to switch to a visit, saves deciding afresh each time.

                ## Milestones
                1. The tests offered by your postal service compared with a full clinic screen.
                2. The situations that need a clinic visit listed, such as symptoms.
                3. A default chosen for routine tests.
                4. The choice written in your records.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A default testing route chosen, with the situations that call for a clinic visit instead, written in your records."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List which tests your postal service includes"
                - "Compare them with what a clinic screen covers"
                - "Write down which situations need a clinic visit"
                - "Record your default testing route"
            - name: Deciding whether PrEP suits you
              description: |-
                ## Purpose
                PrEP is recommended for people with a higher likelihood of HIV exposure, and access, cost and eligibility differ by country and clinic. Working through eligibility, the monitoring involved and how you would get it means you arrive at the clinic ready to decide.

                ## Milestones
                1. Your health service's PrEP eligibility guidance read.
                2. The access route and any cost where you live found.
                3. Questions about side effects and monitoring written down.
                4. A discussion held with a clinician and the decision recorded.

                ## Notes
                PrEP is only started after an HIV test and a clinician's assessment.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision about PrEP made with a clinician, recorded with the reasons and, if starting, a first review date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's PrEP eligibility guidance"
                - "Find out how PrEP is accessed and paid for where you live"
                - "Write down your questions about monitoring and side effects"
                - "Book a PrEP discussion at a sexual health clinic"
            - name: Switching or stopping a contraception method
              description: |-
                ## Purpose
                Side effects, a change of relationship or wanting to try for a baby are all good reasons to change or stop a method, but the switch needs planning to avoid a gap in cover. Agreeing the switch-over steps with a clinician keeps you protected for as long as you want to be.

                ## Milestones
                1. The reason for the change and what you want instead written down.
                2. The switch-over steps and any backup method agreed with a clinician.
                3. The change made on the agreed date.
                4. Three months of notes on how the new arrangement is going.

                ## Notes
                Ask how long a backup method is needed when switching; it varies by method.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A switch or stop completed on an agreed date with no unplanned gap in cover, followed by three months of notes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down why you want to change and what you want instead"
                - "Book an appointment to plan the switch-over"
                - "Note the backup method and how long you need it"
                - "Record how the new arrangement is going after three months"
            - name: Paid private testing and when it is worth it
              description: |-
                ## Purpose
                Private testing can offer faster appointments, extra tests or more privacy, but free services usually cover everything most people need. Weighing what you would gain against the cost stops you paying for tests you could get free, or waiting when speed genuinely matters.

                ## Milestones
                1. What your free service offers listed, with typical waiting times.
                2. Two private services compared on tests included, lab accreditation and cost.
                3. The situations where you would pay noted.
                4. The decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note compares your free service with two private options on tests, waiting time and cost, and lists when you would pay."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the waiting time for your free clinic and postal service"
                - "Compare two private services on tests, lab accreditation and price"
                - "Write down when paying would be worth it for you"
            - name: Keeping results private on shared phones and accounts
              description: |-
                ## Purpose
                Clinic texts on a lock screen, results emails on a family laptop or a pharmacy charge on a shared bank statement can reveal more than you meant to. A short privacy check of every place sexual health information appears protects you, especially if you live with parents, flatmates or a partner you are not ready to tell.

                ## Milestones
                1. Every channel that carries sexual health messages listed.
                2. Lock-screen previews hidden for the clinic and pharmacy.
                3. A private email address used for health services where needed.
                4. Payment and delivery routes checked for what they reveal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every sexual health message channel checked, with lock-screen previews hidden and a private contact route set where needed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every app, email and number the clinic and pharmacy use"
                - "Hide message previews on your lock screen for those contacts"
                - "Set up a private email for health services if you share devices"
                - "Check what a delivered kit's packaging and bank entry say"
            - name: Privacy check of apps holding sexual health data
              description: |-
                ## Purpose
                Contraception reminders, cycle trackers, dating apps and health apps can all hold sensitive information, and some share it with advertisers. Reviewing what each app collects and whether you can delete it puts your data where you choose.

                ## Milestones
                1. Every app holding sexual health data listed.
                2. Each app's privacy policy checked for sharing and deletion.
                3. Any app that shares data with advertisers replaced or removed.
                4. Location and contact permissions cut to what each app needs.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every app holding sexual health data reviewed, with apps that share data removed and permissions cut back."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the apps on your phone that hold sexual health information"
                - "Check each privacy policy for data sharing and deletion"
                - "Delete or replace any app that shares data with advertisers"
                - "Review which apps hold sexual health data @recurring(yearly)"
            - name: Mutual testing before stopping condoms
              description: |-
                ## Purpose
                Many couples stop using condoms once a relationship feels settled, often without either partner testing. Agreeing to test together, after the window periods have passed and with another contraception method in place if needed, means the decision rests on results rather than assumptions.

                ## Milestones
                1. The conversation held and both partners agree to test.
                2. Tests timed after the window periods since each partner's last new partner.
                3. Both sets of results shared with each other.
                4. Contraception arranged if pregnancy is possible and not wanted.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both partners tested after the window periods and shared results before stopping condoms, with contraception in place if needed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Raise testing together with your partner"
                - "Work out when both tests will be past the window periods"
                - "Book tests or order kits for you both"
                - "Share results with each other before deciding"
            - name: Latex sensitivity and alternative barriers
              description: |-
                ## Purpose
                Itching or soreness after using latex condoms can be a sensitivity rather than an infection, and it is a common reason people stop using them. Getting the reaction checked and finding a latex-free alternative that fits keeps barrier protection in use.

                ## Milestones
                1. The reaction and when it happens recorded.
                2. A clinician asked to rule out infection or other causes.
                3. Latex-free options such as polyurethane or polyisoprene condoms tried.
                4. A replacement chosen and added to your regular supply.

                ## Notes
                Start from the **Purchase decision** template if you are comparing several brands.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A latex-free condom chosen after a clinician has checked the reaction, and added to your regular supply."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note when the reaction happens and what it looks like"
                - "Ask the clinic to check for infection or other causes"
                - "Try two latex-free condom types"
                - "Add the chosen latex-free condom to your regular supply"
            - name: Retest schedule after a risky exposure
              description: |-
                ## Purpose
                After a condom break or sex with a partner of unknown status, testing promptly and again after the window periods catches infections a single early test would miss. Writing the retest dates down at once stops the second test being forgotten.

                ## Milestones
                1. The date of the exposure recorded.
                2. Advice on emergency contraception and PEP sought straight away if relevant.
                3. First tests taken and retest dates set from the clinic's window periods.
                4. Final retest results received and filed.

                ## Notes
                If PEP might be needed, go to a clinic or emergency department first. Testing can wait; PEP cannot.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated exposure record with first and follow-up tests completed at the clinic's intervals and all results filed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the date of the exposure"
                - "Ask the clinic about emergency contraception or PEP straight away"
                - "Put the clinic's retest dates in your calendar"
                - "File the final retest result in your records"
            - name: Treatment and test of cure after a positive result
              description: |-
                ## Purpose
                Chlamydia, gonorrhoea and syphilis are common and treatable, but treatment only works if it is completed, and some infections need a follow-up test to confirm they have cleared. Handling a positive result as a short project with clear steps protects you and your partners and keeps the record complete.

                ## Milestones
                1. Treatment collected and completed exactly as prescribed.
                2. The clinic's advice on avoiding sex until treatment has worked followed.
                3. Any test of cure booked at the interval the clinic gives.
                4. The diagnosis, treatment and clearance recorded with dates.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Treatment completed, any test of cure done at the clinic's interval, and clearance recorded in your records."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Collect your treatment and note the dates in your calendar"
                - "Ask the clinic whether you need a test of cure and when"
                - "Book the test of cure as soon as the date is known"
                - "Record the diagnosis, treatment and clearance date"
            - name: Telling partners after a positive result
              description: |-
                ## Purpose
                Recent partners may carry the infection without symptoms and can pass it back to you after treatment. Clinics help with partner notification, including anonymous options where the clinic contacts people without naming you, so the hardest conversation does not have to be done alone.

                ## Milestones
                1. Partners within the period the clinic asks about listed privately.
                2. A notification route chosen for each: in person, by message or anonymous.
                3. Each partner notified.
                4. The clinic told that notification is complete.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every partner in the clinic's look-back period notified by a chosen route, and the clinic told it is done."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the clinic how far back partner notification should go"
                - "List the partners in that period privately"
                - "Choose in person, message or anonymous notification for each"
                - "Tell the clinic when notification is done"
            - name: Getting an implant or coil fitted
              description: |-
                ## Purpose
                Long-acting methods last for years once fitted, but the fitting needs an appointment, sometimes two, and a little preparation. Planning the appointment, the pain relief options to ask about and the follow-up check makes the day easier and the method more likely to suit you.

                ## Milestones
                1. A fitting appointment booked and any pre-fitting instructions noted.
                2. Pain relief options for the fitting discussed in advance.
                3. The device fitted, with its type and fitting date recorded.
                4. The replacement or removal date added to your calendar.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The implant or coil fitted, with its type, fitting date and replacement date written in your records and calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the fitting appointment and note any preparation instructions"
                - "Ask in advance what pain relief is offered for the fitting"
                - "Keep the rest of the day after the appointment free"
                - "Record the device type, fitting date and replacement date"
            - name: Pregnancy test timing after a contraception slip
              description: |-
                ## Purpose
                After a missed pill, a late injection or a condom failure, testing too early can give a falsely reassuring negative. Knowing when a test is reliable, and who to call with either result, turns a worrying wait into a plan.

                ## Milestones
                1. The date and kind of slip recorded.
                2. Emergency contraception considered straight away if still in time.
                3. A pregnancy test taken at the time your health service recommends.
                4. The result acted on, with a clinic or doctor contacted if needed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pregnancy test taken at the recommended time after the slip, with the result and any follow-up recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the date and kind of contraception slip"
                - "Check whether emergency contraception is still possible"
                - "Find out how many days to wait before a reliable test"
                - "Save the number of a clinic or advice line to call with the result"
            - name: Sexual health planning before a long trip or festival
              description: |-
                ## Purpose
                Condoms may be harder to find abroad, routes to PEP and emergency contraception differ, and a long trip can leave you far from your usual clinic. Packing supplies and noting local services before you go saves hunting for them in a language you do not speak.

                ## Milestones
                1. Enough condoms and regular contraception packed for the whole trip plus spare.
                2. Where to get emergency contraception and PEP at the destination noted.
                3. Pill or PrEP timing across time zones planned with a pharmacist.
                4. A test booked for after you return if needed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Supplies packed for the full trip, destination emergency services noted and a post-trip test booked if needed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pack condoms and contraception for the whole trip plus spare"
                - "Look up emergency contraception and PEP at your destination"
                - "Ask a pharmacist how to time your pill or PrEP across time zones"
                - "Book a postal kit or clinic test for after you return"
            - name: Sexual health set-up in your first term at university
              description: |-
                ## Purpose
                Students and young adults are among the groups most affected by chlamydia, and the first term away from home is often when new relationships start. Registering with the campus or local service, joining the free condom scheme and testing early puts everything in place before it is needed.

                ## Milestones
                1. The campus or local sexual health service and its opening hours found.
                2. The free condom and postal testing schemes for students joined.
                3. Registered with a doctor near your term-time address.
                4. A first test done during the first term.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Registered with a doctor near university, signed up to the free condom and testing schemes, and a first test done in the first term."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the sexual health service on or near campus"
                - "Sign up to the free condom scheme for students"
                - "Register with a doctor near your term-time address"
                - "Order a postal test kit before the end of first term"
            - name: Testing around term time and holidays
              description: |-
                ## Purpose
                Moving between a term-time address and home can mean results sent to the wrong place, kits that cannot be returned in time and gaps in contraception supply. Timing tests and refills around the academic calendar keeps care continuous across both addresses.

                ## Milestones
                1. Term dates and holidays noted alongside your testing interval.
                2. Tests scheduled so results arrive before you move.
                3. Contraception supply checked to cover each holiday.
                4. The service you will use at home identified.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Tests and refills timed around one full academic year, with no result or supply lost to a change of address."
                cadence: cyclic
              tasks:
                - "Mark term dates and holidays next to your testing reminders"
                - "Order kits early enough for results to arrive before you move"
                - "Check your contraception will last through each holiday"
                - "Order a postal kit for the start of the summer holiday @recurring(yearly)"
            - name: Dating again after a long relationship
              description: |-
                ## Purpose
                Coming out of a long relationship, through separation or bereavement, often means dating again with habits formed years ago, before PrEP, postal kits or current testing advice. A short reset of supplies, knowledge and a baseline test brings you up to date without fuss.

                ## Milestones
                1. A baseline test done before or early in dating again.
                2. Condom supply and contraception needs reviewed.
                3. Current local services found, including postal testing.
                4. A testing interval set for this new phase.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline test, a refreshed supply and a testing interval in place within three months of starting to date again."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a baseline sexual health test"
                - "Check what contraception you need now, if any"
                - "Find the local services and postal testing available today"
                - "Set a testing interval for this new phase"
            - name: Sexual health care that fits a trans or non-binary body
              description: |-
                ## Purpose
                Standard screens and leaflets are often written for cisgender bodies, which can lead to the wrong tests, awkward questions or avoiding care altogether. Finding an inclusive service, and knowing which tests and contraception questions apply to your body and any hormones you take, makes care accurate and respectful.

                ## Milestones
                1. An inclusive clinic or specialist service found.
                2. The tests relevant to your anatomy and the sex you have confirmed with them.
                3. Contraception needs discussed alongside any gender-affirming hormones.
                4. Your name and pronouns recorded correctly with the service.

                ## Notes
                Gender-affirming hormones are not contraception. Ask the clinic what applies to you.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An inclusive service found, with your relevant tests, contraception needs, name and pronouns recorded with them."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Search for an inclusive or specialist sexual health service"
                - "Ask which tests fit your anatomy and the sex you have"
                - "Discuss contraception alongside any hormones you take"
                - "Check your name and pronouns are recorded correctly"
            - name: Knowing where to go after a sexual assault
              description: |-
                ## Purpose
                If you or someone close to you is ever sexually assaulted, the first hours bring decisions about emergency contraception, PEP, forensic evidence and support. Knowing in advance where the specialist services are means care is reached quickly, and the decision about reporting can be left for later.

                ## Milestones
                1. The nearest specialist sexual assault service found, with how to contact it.
                2. A national support line saved in your phone.
                3. The service's approach to forensic evidence and reporting choices understood.
                4. The information kept where you or a friend could find it.

                ## Notes
                Specialist services offer medical care and support whether or not you report to the police. In immediate danger, call the emergency number.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The nearest specialist sexual assault service and a support line are saved in your phone, with how each can be contacted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the nearest specialist sexual assault service"
                - "Save a national support line number in your phone"
                - "Read how the service handles evidence and reporting choices"
            - name: Sexual health checks in later life
              description: |-
                ## Purpose
                STI rates have been rising among people over fifty, partly because pregnancy is no longer a concern and condoms are dropped. Older adults dating or in new relationships benefit from the same testing as anyone else, and doctors do not always think to offer it.

                ## Milestones
                1. A first test in this phase of life done.
                2. Condom use reconsidered as protection against infection.
                3. Local services that suit you found, including postal kits.
                4. A testing interval agreed with a clinician.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A test done and a testing interval agreed with a clinician within three months of a new relationship in later life."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your doctor or a clinic for a sexual health test"
                - "Keep condoms at home even when pregnancy is not a concern"
                - "Agree a testing interval for your current relationships"
            - name: Recurrent genital herpes outbreak plan
              description: |-
                ## Purpose
                Herpes is common and often recurs, and each outbreak raises the same questions about treatment, sex and telling partners. A written plan agreed with your clinician, covering early signs, treatment options and how you will talk to partners, makes outbreaks quicker to handle and less frightening.

                ## Milestones
                1. Your diagnosis confirmed and recorded.
                2. Treatment for outbreaks, and whether suppressive treatment suits you, discussed.
                3. Early warning signs and triggers you notice written down.
                4. A short explanation for partners prepared in your own words.

                ## Notes
                Use only the treatment your clinician has prescribed, and ask them about avoiding sex during outbreaks and early signs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written outbreak plan agreed with your clinician, with a log of outbreaks and a prepared explanation for partners."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a review of your herpes diagnosis with a clinician"
                - "Ask whether suppressive treatment would suit you"
                - "Log each outbreak with date, early signs and possible trigger"
                - "Write a short explanation for new partners in your own words"
            - name: HIV care and viral load monitoring routine
              description: |-
                ## Purpose
                Living well with HIV rests on taking treatment consistently and attending the clinic for viral load and other blood tests. A routine that ties refills, appointments and results together keeps your viral load undetectable and the clinic team aware of anything new.

                ## Milestones
                1. Your clinic's monitoring schedule written down.
                2. Refills ordered before supplies run low.
                3. Each viral load and CD4 result recorded with its date.
                4. Other medicines checked with the HIV clinic for interactions.

                ## Notes
                Tell your HIV clinic about any new medicine, including over-the-counter and herbal products, before you take it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scheduled HIV clinic appointment attended for a year, with each viral load result recorded and no break in supply."
                cadence: rolling
              tasks:
                - "Write down your clinic's appointment and blood test schedule"
                - "Record each viral load result with its date"
                - "Ask the pharmacist or clinic before taking any new medicine"
                - "Order your HIV medicine refill @recurring(monthly:16)"
            - name: Syphilis blood test follow-up after treatment
              description: |-
                ## Purpose
                Clinics repeat blood tests over several months after syphilis treatment to confirm the infection is responding, and the numbers can be confusing. Keeping every follow-up appointment and logging each result shows you and your clinician whether treatment worked.

                ## Milestones
                1. The follow-up schedule your clinic sets written down.
                2. Each follow-up blood test attended.
                3. Each result logged with its date.
                4. Your clinician's confirmation that follow-up is complete recorded.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every follow-up blood test on the clinic's schedule attended and logged, ending with the clinician's confirmation of completion."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the clinic for your follow-up blood test schedule"
                - "Create a results log from the metrics log template"
                - "Book each follow-up blood test as soon as it is offered"
                - "Record the clinician's final sign-off"
            - name: Recurrent thrush or BV pattern log
              description: |-
                ## Purpose
                Thrush and bacterial vaginosis are not STIs but often come back, and repeated self-treatment can miss another cause. Logging episodes, possible triggers and what was used gives a clinician the pattern needed to investigate and suggest a longer-term plan.

                ## Milestones
                1. Each episode logged with date, symptoms and what was used.
                2. Possible triggers such as new products or antibiotics noted.
                3. The log taken to a sexual health clinic or doctor once episodes keep returning.
                4. A longer-term plan agreed and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A log of at least three episodes reviewed with a clinician, and a longer-term plan recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Start a log with date, symptoms and treatment used"
                - "Note any new soaps, products or antibiotics before each episode"
                - "Book a clinic appointment to review the pattern"
                - "Record the plan the clinician suggests"
            - name: Two-year sexual health record review
              description: |-
                ## Purpose
                Over two years, a records file shows patterns a single visit cannot: gaps between tests, repeat infections, contraception changes or a supply that keeps lapsing. A structured look back turns the file into decisions about your testing interval, method and services.

                ## Milestones
                1. Two years of tests, results and contraception entries gathered.
                2. Gaps longer than your agreed interval highlighted.
                3. Repeat infections or recurring problems noted.
                4. Two or three changes for the next two years decided and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written two-year review names testing gaps, repeat problems and up to three changes for the next two years."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open your records file and list the last two years of tests"
                - "Mark any gap longer than your agreed testing interval"
                - "Note repeat infections or supply lapses"
                - "Ask the agent to summarise the review into three changes"
---

# Sexual Health & STI Testing

This area is for any sexually active adult who wants testing, contraception and follow-up handled calmly and privately, with projects for students setting up care away from home. It starts with the foundations (knowing your services, a first full screen, a testing interval, and emergency contraception and PEP plans), then the routines that keep tests and supplies on schedule, the skills that make results and conversations easier, the decisions about PrEP, methods and privacy, the events that need a quick plan, the situations that change the picture, and finally specialist follow-up for longer-term conditions.

What repeats is a yearly check, or a quarterly screen if your clinic advises it, a monthly sweep for unread results, monthly supply and refill checks, daily pill or PrEP ticks, and yearly reviews of your method and your emergency plans. The Habit tracker, Metrics log and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
