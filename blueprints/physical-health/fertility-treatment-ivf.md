---
id: physical-health.fertility-treatment-ivf
name: Fertility Treatment & IVF
description: "Fertility tests, funding and clinic choice, cycle calendars and medicine logs, results and costs kept in one place, and the embryo, donor and stopping decisions made with care."
category: personal
version: 1.0.0
tags: [physical-health, fertility-treatment-ivf, everyone, ivf, iui, fertility-tests, treatment-costs, embryo-storage]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - savings-goal
    - metrics-log
    - habit-tracker
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Fertility Treatment & IVF
          description: "Managing fertility investigations and treatment such as IUI or IVF, with appointment calendars, medication schedules, results and the costs and decisions involved."
          projects:
            - name: Preparing for the first fertility appointment
              description: |-
                ## Purpose
                Most people arrive at a first fertility appointment with a year or more of trying behind them and leave having forgotten half of what they meant to ask. Going in with dates, a written question list and both partners' basic details turns a short slot into a referral, a test plan, or both.

                ## Milestones
                1. Your cycle pattern and how long you have been trying written on one page.
                2. Ten questions ranked so the three that matter most get asked first.
                3. The appointment booked with both partners attending, if there are two of you.
                4. The doctor's plan, including any tests or referral, written down before leaving the room.

                ## Notes
                Many health services expect around a year of trying before referral, and sooner if you are over 35 or have a known condition. Ask your own doctor what applies to you.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written question list was taken to the first appointment and the agreed tests or referral are recorded with dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down how long you have been trying and your usual cycle length"
                - "List the questions you want answered and rank the top three"
                - "Book an appointment with your doctor that both partners can attend"
                - "Write up the plan the doctor agreed before you leave the surgery"
            - name: Fertility history summary for both partners
              description: |-
                ## Purpose
                Every new clinician asks the same questions: previous pregnancies, operations, infections, medicines, periods, smoking and alcohol, and then the same again for the partner. A one-page summary for each person saves repeating it at every appointment and stops details being lost when you change clinic or consultant.

                ## Milestones
                1. A one-page summary for each partner covering past pregnancies, operations, long-term conditions and current medicines.
                2. Any earlier fertility tests or treatment listed with dates and places.
                3. Relevant family history, such as early menopause, noted in a line.
                4. Both summaries stored where they can be printed or sent the same day.

                ## Notes
                Keep it factual and short. Clinicians read a tidy page faster than a long story.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each partner has a dated one-page fertility history that has been shared with the clinic at least once."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note past pregnancies, losses and operations for each partner"
                - "List every current medicine and supplement with its strength"
                - "Ask the agent to turn your notes into a one-page summary for each partner"
                - "Send both summaries to the clinic before the first consultation"
                - "Update the summary after any new test or cycle review @recurring(quarterly)"
            - name: First round of fertility investigations
              description: |-
                ## Purpose
                Before anyone can recommend IUI, IVF or simply more time, the clinic needs a basic picture: hormone and ovarian reserve blood tests, a pelvic ultrasound, a check that the tubes are open and a semen analysis. Several of these are timed to particular days of the cycle, so planning the order saves a month of waiting for the right day to come round again.

                ## Milestones
                1. A list from the clinic of every test requested, with the cycle day each one needs.
                2. Blood tests and the ultrasound done on the right days.
                3. A tubal patency test booked or completed, with any preparation instructions followed.
                4. All results back and a follow-up appointment booked to discuss them.

                ## Notes
                Ask which tests your health service funds and which you would pay for privately. Some tubal tests need a negative pregnancy test or other preparation beforehand, so follow the clinic's instructions exactly.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every test the clinic requested is done and the results are discussed at a follow-up appointment held within 60 days of starting."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the clinic for the full list of tests and the cycle day for each"
                - "Mark the expected test days on your calendar"
                - "Book the tubal test and note any preparation it needs"
                - "Chase any result not back two weeks after the test"
                - "Book the follow-up appointment to go through all the results"
            - name: Semen analysis booking and repeat test
              description: |-
                ## Purpose
                Male factor is involved in around half of couples' fertility problems, yet the semen test is often the last one done. The sample comes with strict rules on abstinence days, delivery time and temperature, and a single abnormal result usually needs repeating before anyone draws conclusions.

                ## Milestones
                1. The lab's collection instructions read, including abstinence days and delivery time.
                2. A first sample produced and delivered within the lab's time window.
                3. The result received, with count, motility and morphology explained by a clinician.
                4. A repeat test booked if the first result was abnormal.

                ## Notes
                Sperm take around three months to develop, so a repeat test after illness or a change in habits tells you more if it is not rushed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "At least one semen analysis is complete with results explained by a clinician, and any recommended repeat test has a booked date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the clinic or lab for the semen sample instructions"
                - "Book a collection slot that fits the abstinence window"
                - "Plan the route so the sample reaches the lab in time"
                - "Ask a clinician to explain the count, motility and morphology figures"
            - name: Funding and insurance eligibility check
              description: |-
                ## Purpose
                Whether treatment is publicly funded, partly covered by insurance or an employer scheme, or entirely self-paid can change the cost by thousands, and the criteria are strict: age, time spent trying, existing children, BMI and smoking status often count. Checking early stops you paying privately for something you could have had funded, or waiting for funding you will never receive.

                ## Milestones
                1. Your local health service's published fertility funding criteria found and read.
                2. Each criterion checked against your own situation, with any gaps noted.
                3. Insurance and employer benefits checked in writing for fertility cover.
                4. A decision recorded: funded route, private route, or a mix of both.

                ## Notes
                Criteria often have hard age cut-offs. If you are close to one, ask how long the referral and waiting list usually take.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note records which funding route applies, the criteria checked and the source for each answer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the fertility funding criteria published by your local health service"
                - "Check each criterion against your own age, history and health"
                - "Ask your insurer or employer in writing what fertility treatment they cover"
                - "Record which funding route you will take and why"
                - "Recheck the funding criteria in case the rules have changed @recurring(yearly)"
            - name: Choosing a fertility clinic
              description: |-
                ## Purpose
                Clinics differ in live birth rates for your age group, waiting times, prices, and how easy they are to reach for early-morning scans every two or three days. Comparing three on the same criteria, using the national regulator's published figures where they exist, turns a choice often made from advertising into one made from evidence.

                ## Milestones
                1. Three clinics shortlisted within realistic travelling distance for frequent monitoring scans.
                2. Each scored on live birth rate for your age band, total cost, waiting time and patient information.
                3. An open evening or initial consultation attended at the leading clinic.
                4. A clinic chosen and the reasons written down.

                ## Notes
                Start from the **Purchase decision** template. Some countries publish clinic data through a fertility regulator, such as the HFEA in the UK. Check whether quoted rates are per cycle started or per embryo transferred.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A clinic is chosen from a written comparison of at least three, scored on the same criteria including age-specific live birth rates."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the clinics you could reach for an early-morning scan"
                - "Look up each clinic's live birth rates for your age group"
                - "Score three clinics on outcomes, cost, waiting time and distance"
                - "Attend an open evening or first consultation at the leading clinic"
                - "Write down the clinic you chose and the reasons"
            - name: Fertility treatment funding plan
              description: |-
                ## Purpose
                A self-funded IVF cycle with medicines, extras, freezing and frozen transfers often costs far more than the headline package price, and many people need more than one cycle. A funding plan that names the realistic total, where the money comes from and what is kept back for a second attempt prevents decisions being made in a hurry at the clinic's payment desk.

                ## Milestones
                1. A realistic per-cycle cost including medicines, scans, freezing and storage.
                2. Funding sources listed with amounts: savings, insurer, employer, family or borrowing.
                3. A separate treatment fund set up with a monthly saving amount.
                4. A clear figure for how much is held back for any further cycle.

                ## Notes
                Start from the **Savings goal** template. Read the conditions of clinic finance offers and multi-cycle refund packages carefully, and talk to an independent adviser before borrowing.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written funding plan shows the realistic cost of one cycle, where the money comes from and a monthly saving amount already in place."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the clinic for an itemised quote covering medicines, freezing and storage"
                - "Add the costs the package leaves out to reach a realistic total"
                - "Open a separate pot for treatment money"
                - "Move the agreed amount into the treatment fund @recurring(monthly:2)"
            - name: Health checks before starting treatment
              description: |-
                ## Purpose
                Clinics usually want a few things settled before the first cycle: rubella immunity, an up-to-date cervical screening result, infection screening for both partners and a conversation about weight, smoking and alcohol. Getting these done while waiting for a first appointment means treatment is not held up by one missing blood result.

                ## Milestones
                1. The clinic's list of pre-treatment checks obtained for both partners.
                2. Infection screening bloods done and the results sent to the clinic.
                3. Rubella immunity and cervical screening confirmed or arranged.
                4. Current medicines and supplements reviewed with a doctor for safety before pregnancy.

                ## Notes
                Some screening results are only accepted for a set period. Ask how long the clinic accepts them so they do not expire before treatment starts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every pre-treatment check on the clinic's list is complete and filed, with expiry dates noted for results that lapse."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the clinic for its list of pre-treatment checks for both partners"
                - "Book the infection screening blood tests"
                - "Confirm your rubella immunity and cervical screening are up to date"
                - "Ask your doctor to review current medicines and supplements before pregnancy"
            - name: Consent forms and treatment paperwork folder
              description: |-
                ## Purpose
                IVF produces a surprising amount of paperwork: consents for treatment, storage and the use of embryos, legal parenthood forms, screening results, invoices and treatment plans. Keeping it in one folder, paper or digital, means you can find the signed storage consent in five minutes when you need it in five years.

                ## Milestones
                1. One folder with sections for consents, results, plans, invoices and letters.
                2. Copies of every signed consent form received from the clinic.
                3. Consent choices, such as storage periods and use after death or incapacity, listed on a summary page.
                4. A second person who knows where the folder is.

                ## Notes
                Ask for consent forms in advance, read them at home and bring your questions to the appointment rather than signing on the spot.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holds copies of every signed consent and a summary page listing the choices made and their expiry dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a folder with sections for consents, results, plans and invoices"
                - "Ask the clinic for copies of every form you have signed"
                - "Write a one-page summary of what each consent form says"
                - "File new letters, results and invoices in the folder @recurring(monthly:28)"
            - name: Ovarian hyperstimulation warning signs card
              description: |-
                ## Purpose
                Ovarian hyperstimulation syndrome is an uncommon but potentially serious reaction to fertility drugs, most likely in the days after egg collection or in early pregnancy. Writing down the symptoms your clinic says to watch for, with its out-of-hours number, means nobody has to search for them at night when you feel unwell.

                ## Milestones
                1. The clinic's written guidance on hyperstimulation symptoms obtained.
                2. A card made with the warning signs, the clinic's out-of-hours number and the emergency number.
                3. The card kept by the bed and a photo of it saved on both partners' phones.
                4. Your clinician asked whether you are at higher risk and what that changes.

                ## Notes
                Use your clinic's own wording. This card organises their advice and never replaces calling them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card with the clinic's hyperstimulation warning signs and out-of-hours number is by the bed and on both partners' phones before stimulation starts."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the clinic for written guidance on hyperstimulation symptoms"
                - "Write the signs and the out-of-hours number on one card"
                - "Save a photo of the card on both partners' phones"
                - "Ask your clinician whether your risk is higher than average"
            - name: Treatment cycle calendar
              description: |-
                ## Purpose
                A treatment cycle runs to the clinic's timetable: baseline scan, first injection, monitoring scans every two or three days, a trigger injection timed to the hour, egg collection, transfer and test day. One shared calendar, updated after every call from the nurse, keeps work, travel and childcare arranged around dates that often move at short notice.

                ## Milestones
                1. A shared calendar both partners can see on their phones.
                2. Every appointment, injection start and test date for the current cycle entered.
                3. Work and childcare cover noted beside each appointment.
                4. The calendar updated within an hour of every change from the clinic.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every clinic appointment and key dose time for the current cycle is in a shared calendar, with no appointment missed during the cycle."
                cadence: rolling
              tasks:
                - "Create a shared treatment calendar on both partners' phones"
                - "Enter every date from the clinic's treatment plan"
                - "Add work and childcare cover beside each appointment"
                - "Check the coming week's appointments against the latest clinic plan @recurring(weekly:sun)"
            - name: Fertility medicine schedule and dose log
              description: |-
                ## Purpose
                Stimulation protocols change from day to day: a new injection starts, a dose is adjusted after a scan, a trigger shot must be given at an exact time before collection. A written schedule copied from the clinic's plan, and a log of each dose given, are the only reliable record when the nurse asks what you took and when.

                ## Milestones
                1. The clinic's medicine plan copied into one schedule, with time, drug and dose as prescribed.
                2. A log entry for every dose, with the time it was given.
                3. Every dose change from the clinic written in during the same call.
                4. The trigger injection time confirmed in writing and set with two alarms.

                ## Notes
                Never adjust a dose yourself. If a dose is missed or wrong, phone the clinic straight away and follow their instruction.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written schedule matches the clinic's latest instructions and every dose in the cycle is logged with the time given."
                cadence: rolling
              tasks:
                - "Copy the clinic's medicine plan into a single written schedule"
                - "Log the time of each dose as soon as it is given"
                - "Write every dose change down while the nurse is still on the phone"
                - "Set two alarms for the trigger injection at the exact time given"
                - "Check next week's medicines against the clinic's latest plan @recurring(weekly:fri)"
            - name: Fertility medicine stock, storage and sharps
              description: |-
                ## Purpose
                Fertility medicines often come from a specialist pharmacy in a chilled delivery, some must be refrigerated and others must not be, and running out on a Saturday can put a cycle at risk. A regular stock count, a labelled shelf in the fridge and a sharps bin with a known return route keep the supply side quiet.

                ## Milestones
                1. Deliveries booked for days when someone is home to receive the chilled package.
                2. Each medicine stored as its leaflet says, with fridge items on one labelled shelf.
                3. A stock count against the schedule showing enough for the cycle plus a margin.
                4. A sharps bin in use and its return or collection route known.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Medicines for the current cycle are in stock and stored as each leaflet says, with a sharps bin and its disposal route in place."
                cadence: rolling
              tasks:
                - "Book the medicine delivery for a day someone is home"
                - "Store each medicine as its leaflet instructs"
                - "Ask the pharmacy or clinic how to return a full sharps bin"
                - "Count stock and check expiry dates against the schedule @recurring(monthly:9)"
            - name: Cycle-by-cycle results log
              description: |-
                ## Purpose
                After two or three cycles the details blur: how many follicles, how many eggs, how many fertilised, how the embryos graded, what the lining measured. A log with the same columns for every cycle lets you and a consultant see patterns, and makes a second opinion or a change of clinic far quicker.

                ## Milestones
                1. A log with columns for protocol, follicle count, eggs collected, eggs fertilised, embryos by day and outcome.
                2. Every past cycle entered from clinic records.
                3. Scan and blood results for the current cycle added as they arrive.
                4. The log brought to every cycle review.

                ## Notes
                Start from the **Metrics log** template. Ask the clinic for a printed cycle summary at the end of each round, since it fills most of the columns.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A results log holds the key figures for every completed cycle and has been used at a cycle review."
                cadence: rolling
              tasks:
                - "Create a results log with one row per cycle"
                - "Fill in past cycles from clinic summaries"
                - "Ask the clinic for a written cycle summary after each round"
                - "Add new scan and blood results to the log @recurring(monthly:18)"
            - name: Fertility spending and claims tracker
              description: |-
                ## Purpose
                Treatment costs arrive from several directions: clinic invoices, pharmacy bills, extra scans, storage fees, travel and unpaid time off. Tracking them against the funding plan each month shows when the money for a further cycle is genuinely there, and catches insurance or employer claims before their deadlines pass.

                ## Milestones
                1. Every treatment cost since the first appointment entered in one list.
                2. Costs grouped as clinic, medicines, storage, travel and other.
                3. Spending compared with the funding plan each month.
                4. Every claimable cost submitted, with the claim reference recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The spending list matches clinic and pharmacy invoices each month, and no claimable cost goes more than three months unclaimed."
                cadence: rolling
              tasks:
                - "List every treatment cost paid so far"
                - "Group costs into clinic, medicines, storage, travel and other"
                - "Compare spending with the funding plan @recurring(monthly:24)"
                - "Submit outstanding receipts to your insurer or employer scheme @recurring(quarterly)"
            - name: Clinic call and message log
              description: |-
                ## Purpose
                Instructions come by phone from different nurses, often while you are at work, and two calls can seem to contradict each other. A short log of each call, who you spoke to and what they said, settles questions quickly and makes any later complaint straightforward.

                ## Milestones
                1. A log in a notes app that both partners can reach.
                2. Every call and portal message noted with date, name and instruction.
                3. Open questions gathered and sent to the clinic together rather than one at a time.
                4. Conflicting instructions queried in writing the same day.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every clinic instruction during the current cycle is logged with date, name and content, and open questions are answered within a week."
                cadence: rolling
              tasks:
                - "Set up a shared note for clinic calls and messages"
                - "Log the date, name and instruction for every clinic call"
                - "Query in writing any instruction that conflicts with an earlier one"
                - "List the week's open questions to send to the nurse team @recurring(weekly:wed)"
            - name: Everyday habits during treatment
              description: |-
                ## Purpose
                Clinics commonly advise both partners to stop smoking, cut out alcohol, moderate caffeine, sleep well and keep weight in a healthy range, and some funding rules depend on it. Tracking a small set of habits your clinic actually recommended does more good than chasing every fertility diet online.

                ## Milestones
                1. The habits your clinic recommends written down for each partner.
                2. A tracker set up with no more than five habits each.
                3. Help arranged to stop smoking, if either partner smokes.
                4. A weekly look at the tracker kept up for three months.

                ## Notes
                Start from the **Habit tracker** template. Treat supplement and diet claims online with caution and ask your clinic before adding anything.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both partners track up to five clinic-recommended habits every week for at least three consecutive months."
                cadence: rolling
              tasks:
                - "Ask the clinic which lifestyle changes it recommends for each partner"
                - "Pick up to five habits each to track"
                - "Set up a habit tracker you can both see"
                - "Review the week's habits together @recurring(weekly:mon)"
            - name: Emotional support during treatment
              description: |-
                ## Purpose
                Fertility treatment is regularly described by patients as one of the most stressful experiences of their lives, with repeated swings between hope and disappointment and little control over the outcome. Licensed clinics often offer counselling, and peer groups meet online and in person; arranging support before you need it is far easier than looking for it after a negative test.

                ## Milestones
                1. The clinic's counselling offer found, including how many sessions are free.
                2. One peer support group or charity chosen and contacted.
                3. A first counselling session booked, ideally before or early in the first cycle.
                4. A regular point of support in place each month during treatment.

                ## Notes
                If low mood, anxiety or poor sleep persist, speak to your doctor. Support is for both partners, not only the one having injections.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A counselling session has been attended and a monthly point of support, such as a group or counsellor, is in place during treatment."
                cadence: rolling
              tasks:
                - "Ask the clinic what counselling it offers and at what cost"
                - "Find a fertility support group or charity near you or online"
                - "Book a first counselling session"
                - "Attend a support group meeting or counselling session @recurring(monthly:12)"
            - name: Weekly couple check-in about treatment
              description: |-
                ## Purpose
                Partners often experience treatment very differently: one has the injections and scans, the other can feel sidelined, and money decisions pile up between appointments. A short weekly conversation with a set agenda keeps both people in the decisions and stops resentment building quietly.

                ## Milestones
                1. A fixed weekly slot both partners protect.
                2. A short agenda covering how each person is, the coming week's dates, money and pending decisions.
                3. Decisions from each check-in noted in one line.
                4. Agreement on what to tell family and friends, and what to keep private.

                ## Notes
                If you are going through treatment on your own, use the slot with a friend or relative you trust.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly check-in has happened for at least eight weeks running, with decisions noted each time."
                cadence: rolling
              tasks:
                - "Agree a fixed weekly time for a treatment check-in"
                - "Write a five-point agenda for the check-in"
                - "Agree what you each want to share with family and friends"
                - "Hold the treatment check-in and note any decisions @recurring(weekly:thu)"
            - name: Embryo and egg storage renewals
              description: |-
                ## Purpose
                Frozen eggs, sperm and embryos are kept under consent periods and annual fees, and storage can lapse if a renewal letter goes to an old address. A yearly check of what is stored, where, until when and at what cost protects material that may represent years of treatment.

                ## Milestones
                1. A list of everything in storage: type, number of straws or embryos, clinic and storage reference.
                2. Consent expiry dates and fee renewal dates recorded.
                3. Contact details held by the clinic confirmed as current.
                4. A decision noted each year to continue, use or change storage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A storage list with references, consent expiry and fee dates exists and has been checked against the clinic's records this year."
                cadence: cyclic
              tasks:
                - "Ask the clinic for a written statement of everything in storage"
                - "Record consent expiry dates and fee renewal dates"
                - "Confirm the clinic has your current address and email"
                - "Check storage consents, fees and contact details with the clinic @recurring(yearly)"
            - name: How an IVF cycle runs, stage by stage
              description: |-
                ## Purpose
                Knowing the sequence (stimulation, monitoring, trigger, collection, fertilisation, embryo culture, transfer, luteal support and test) makes each instruction from the clinic make sense. A couple of hours with the clinic's patient information and one independent guide from a regulator or charity is enough to follow every step.

                ## Milestones
                1. Your clinic's patient guide and one independent guide read.
                2. A one-page sketch of your own protocol with the stages in order.
                3. Unfamiliar words, such as trigger or luteal phase, listed with plain meanings.
                4. Remaining questions taken to the nurse planning appointment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page outline of your own protocol, stage by stage, has been checked with a nurse at the clinic."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your clinic's patient guide to IVF"
                - "Read one independent guide from a regulator or fertility charity"
                - "Sketch your own protocol stage by stage on one page"
                - "Ask the nurse to check your outline at the planning appointment"
            - name: Learning to give fertility injections
              description: |-
                ## Purpose
                Most stimulation drugs are self-injected under the skin once or twice a day, and the trigger shot has to be given at a precise time. A teaching session with a nurse, practice with a demonstration pen and a written step list make the first evening at home calm rather than frightening.

                ## Milestones
                1. A nurse teaching session attended by whoever will give the injections.
                2. The instruction videos for your exact pens or vials watched.
                3. A step list written for preparing, injecting and disposing safely.
                4. The first injection given at home without needing to phone the clinic.

                ## Notes
                Ask whether a partner can be taught too. If needles are a real fear, tell the nurse early, as there are practical ways to help.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The person giving injections has attended a nurse teaching session and given the first home injection using a written step list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a nurse injection teaching session"
                - "Watch the instruction video for each pen or vial you will use"
                - "Write a step list for preparing, injecting and disposing"
                - "Practise with a demonstration pen before the first real dose"
            - name: IUI, IVF and ICSI compared
              description: |-
                ## Purpose
                Intrauterine insemination, IVF and IVF with ICSI suit different causes of infertility, cost very different amounts and have different success rates by age. Understanding why your clinic recommends one route over another lets you ask useful follow-up questions rather than accepting or rejecting it on price alone.

                ## Milestones
                1. A short plain description of IUI, IVF and ICSI in your own words.
                2. The cause of infertility in your case, as the clinic sees it, written down.
                3. The clinic's reason for recommending one route recorded.
                4. Questions about the alternatives asked and answered.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note records your clinic's recommended route, the reason for it and the answers to your questions about alternatives."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a reliable explainer on IUI, IVF and ICSI"
                - "Write down the cause of infertility the clinic has identified"
                - "Ask the consultant why they recommend this route for you"
                - "Note what would change the recommendation"
            - name: Reading clinic success rates properly
              description: |-
                ## Purpose
                Clinic success rates are easy to make look good: per embryo transferred rather than per cycle started, pregnancy rather than live birth, or only for younger patients. Learning which figure to compare, for your age band and treatment type, protects you from choosing a clinic or an extra on a misleading headline.

                ## Milestones
                1. The difference between per cycle, per transfer, pregnancy and live birth rates written down.
                2. The national average live birth rate for your age band found.
                3. Each shortlisted clinic's figure compared on the same basis.
                4. Figures based on small numbers, such as a clinic with few cycles in your age band, flagged as uncertain.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Clinic success rates have been compared on one stated basis for your age band, with the source of each figure noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up how your national regulator reports clinic success rates"
                - "Find the national average live birth rate for your age band"
                - "Compare each clinic on the same measure"
                - "Check the regulator's updated clinic figures @recurring(yearly)"
            - name: Understanding embryo grading reports
              description: |-
                ## Purpose
                Embryologists grade embryos by cell number, symmetry and fragmentation and, for blastocysts, by expansion and the quality of the inner cell mass and outer layer, using letter and number codes. Knowing what your grades mean, and the limits of grading as a predictor, makes the day-five phone call easier to take in and to question.

                ## Milestones
                1. Your clinic's grading system explained by an embryologist or nurse.
                2. Each embryo's grade from the current cycle recorded with its day of development.
                3. The reasons for choosing which embryo to transfer or freeze noted.
                4. Questions about grades answered before transfer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each embryo's grade and day is recorded with the embryologist's explanation and the reason for the one chosen for transfer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the clinic which embryo grading system it uses"
                - "Record each embryo's grade and day in the results log"
                - "Ask the embryologist how embryos are chosen for transfer or freezing"
                - "Write down what the grades mean in plain words"
            - name: Ovulation induction cycles with monitoring
              description: |-
                ## Purpose
                For people who do not ovulate regularly, the first treatment offered is often tablets or injections to induce ovulation, with scans or blood tests to time intercourse or insemination. Running these cycles well means taking medicines on the right days, attending tracking scans on time and reporting results promptly, usually for a fixed number of cycles before the plan is reviewed.

                ## Milestones
                1. The clinic's plan for each cycle written down, including medicine days and scan days.
                2. Each cycle's scan or blood result recorded.
                3. Timing days marked from the clinic's advice.
                4. A review booked after the agreed number of cycles.

                ## Notes
                Ovulation induction needs monitoring because more than one follicle can develop. Attend every tracking scan the clinic books.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each ovulation induction cycle has its medicine days, scan results and timing recorded, with a review held after the agreed number of cycles."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the clinic's plan for the first induced cycle"
                - "Book the tracking scans on the days the clinic gives"
                - "Record each scan or blood result on the cycle calendar"
                - "Book the review after the agreed number of cycles"
            - name: Treatment add-ons evidence check
              description: |-
                ## Purpose
                Extras such as endometrial scratching, embryo glue, time-lapse imaging, assisted hatching, immune tests and embryo screening are offered by many clinics, often for hundreds or thousands each. Some regulators rate these against the evidence, and many have not been shown to raise live birth rates, so checking each one before agreeing protects both the budget and the cycle.

                ## Milestones
                1. Every add-on the clinic has suggested listed with its price.
                2. Each add-on checked against an independent evidence rating.
                3. The consultant asked about the evidence for each one in your situation.
                4. A decision recorded for each add-on: yes, no or not now.

                ## Notes
                Start from the **Purchase decision** template. Ask whether an add-on is offered as part of a research trial, which is different from paying for it as treatment.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each add-on offered has a written yes or no, backed by an independent evidence rating and the consultant's answer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each add-on the clinic has offered with its price"
                - "Look up an independent evidence rating for each add-on"
                - "Ask the consultant what evidence supports each one for you"
                - "Record a yes or no for every add-on with the reason"
            - name: Single or double embryo transfer decision
              description: |-
                ## Purpose
                Transferring two embryos can feel like doubling the chance, but it sharply raises the chance of twins, and twin pregnancies carry higher risks for both mother and babies. Many regulators push clinics towards single embryo transfer for most patients; deciding deliberately, with your age and embryo quality in front of you, avoids deciding on the transfer bed.

                ## Milestones
                1. The clinic's policy on how many embryos it will transfer at your age obtained.
                2. Your consultant's view on single versus double transfer for you recorded.
                3. The risks of a twin pregnancy read from an independent source.
                4. A decision agreed between partners before transfer day.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on the number of embryos to transfer is recorded before transfer day, with the consultant's reasoning noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the clinic for its policy on how many embryos to transfer"
                - "Read an independent summary of the risks of twin pregnancy"
                - "Discuss single versus double transfer with your consultant"
                - "Agree and write down your decision before transfer day"
            - name: Genetic testing of embryos decision
              description: |-
                ## Purpose
                Testing embryos for a known inherited condition is established practice for couples who carry one, while screening embryos for chromosome number, often sold as improving success, is far more debated. Separating the two, and knowing which applies to you, turns an expensive and uncertain choice into an informed one.

                ## Milestones
                1. Clarity on whether you are considering testing for a known inherited condition or chromosome screening.
                2. The cost, the extra steps and the chance of having no embryo suitable for transfer written down.
                3. A genetic counsellor or consultant consulted on what testing can and cannot tell you.
                4. A decision recorded and shared with the clinic.

                ## Notes
                Testing for a specific inherited condition usually needs a confirmed family diagnosis first, which a clinical genetics service can help with.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on embryo genetic testing, made after a consultation with a genetic counsellor or consultant, is on file with the clinic."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down whether you are considering testing for a known condition or chromosome screening"
                - "Ask the clinic for the total cost and extra steps involved"
                - "Book a consultation with a genetic counsellor or the consultant"
                - "Record your decision and tell the clinic"
            - name: Treatment abroad comparison
              description: |-
                ## Purpose
                Lower prices, shorter waits for donor eggs or different legal rules lead many people to consider treatment in another country. The trade-offs are real: different regulation, travel at short notice, monitoring at home, language barriers and what happens if something goes wrong after you fly back.

                ## Milestones
                1. Two overseas clinics compared with your local option on cost, rules and outcomes.
                2. Arrangements for local monitoring scans agreed in writing.
                3. Travel, time off and accommodation costs added to the total.
                4. A plan for complications after returning home, including who you would contact.

                ## Notes
                Check how the country's rules on donor anonymity and record keeping would affect any child's future right to know their origins.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two overseas clinics against the local option, including local monitoring and a complications plan, ends in a decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist two overseas clinics alongside your local option"
                - "Compare cost, rules, waiting time and live birth rates"
                - "Ask your local clinic whether it will do monitoring scans for an overseas cycle"
                - "Write a plan for complications after you return home"
            - name: Agreed limit on cycles and spending
              description: |-
                ## Purpose
                Each new cycle is easier to start than to stop, and many couples find they never discussed when enough would be enough. Agreeing in advance a number of cycles, a money limit and the point at which you will look at alternatives need not be final, but it means the decision is made calmly rather than in the days after a loss.

                ## Milestones
                1. Each partner's view on how many cycles and how much money written down separately.
                2. A shared limit agreed, with the circumstances that would make you revisit it.
                3. Alternatives you would consider next, such as donor treatment or adoption, named.
                4. The agreement written down and kept with the funding plan.

                ## Notes
                A counsellor at the clinic can help with this conversation if it is hard to have alone.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement records a limit on cycles and spending and the circumstances in which you would revisit it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down separately how many cycles and how much money feels right"
                - "Compare your answers and agree a shared limit"
                - "Name the options you would consider if the limit is reached"
                - "Revisit the agreed limit together @recurring(quarterly)"
            - name: Egg collection day plan
              description: |-
                ## Purpose
                Egg collection is a short procedure under sedation or anaesthetic, timed precisely after the trigger injection, and the clinic will expect fasting, an escort home and often a fresh sperm sample the same morning. A plan written a few days earlier removes the scramble on the day itself.

                ## Milestones
                1. Arrival time, fasting rules and what to bring confirmed with the clinic.
                2. Someone booked to take you home and stay with you afterwards.
                3. Sperm sample arrangements confirmed, if needed on the day.
                4. Time off work and a quiet recovery day arranged.

                ## Notes
                Ask which symptoms after collection mean you should call the clinic, and keep the hyperstimulation card by the bed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Egg collection is attended on time with fasting rules followed, an escort home and any sperm sample delivered as planned."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm arrival time, fasting rules and what to bring"
                - "Book someone to take you home and stay with you"
                - "Confirm when and where the sperm sample is needed"
                - "Arrange the day of collection and the day after off work"
            - name: Embryo transfer day plan
              description: |-
                ## Purpose
                Embryo transfer is quick and usually needs no sedation, but there is a lot to take in: the embryology update, which embryo is being transferred, whether any are frozen, the medicine plan for the next two weeks and the test date. Going in with your questions written down means you leave knowing all of it.

                ## Milestones
                1. Arrival time and preparation instructions confirmed with the clinic.
                2. Questions written about embryo number, quality and freezing.
                3. The luteal support medicine plan and test date written down before leaving.
                4. Any frozen embryos recorded in the storage list.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Transfer day is attended with questions answered, and the medicine plan, test date and any frozen embryos are written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm arrival time and preparation instructions for transfer"
                - "Write your questions about embryo number and freezing"
                - "Write down the medicine plan and test date before leaving"
                - "Add any frozen embryos to your storage list"
            - name: Two-week wait plan
              description: |-
                ## Purpose
                The days between transfer and the pregnancy test are often described as the hardest part of a cycle, with no appointments and every twinge examined. A plan for those two weeks, covering medicines, work, distractions and who you will talk to, makes the time more bearable and stops early home tests causing confusion.

                ## Milestones
                1. Luteal support medicines on a daily schedule until test day.
                2. Work and social plans for the two weeks decided in advance.
                3. An agreement not to test early, with the reason written down.
                4. Plans made for test day itself, whatever the result.

                ## Notes
                Testing early can give a misleading result because of the trigger injection. Use the test date and type your clinic gives you.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every luteal support dose is logged through to the clinic's test date and a plan for test day is in place."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Put luteal support medicines on the daily schedule until test day"
                - "Plan work and weekends for the two weeks"
                - "Agree with your partner not to test before the clinic's date"
                - "Decide who you will tell, and how, on test day"
            - name: Pregnancy test day and what follows
              description: |-
                ## Purpose
                Whatever the result, test day sets off a chain of tasks: telling the clinic, booking a first scan or a follow-up consultation, carrying on or stopping medicines exactly as told, and telling whoever you planned to tell. Writing both paths down beforehand means you are not working out logistics through shock or grief.

                ## Milestones
                1. The clinic's instructions for both a positive and a negative result written down.
                2. The result reported to the clinic the same day.
                3. Medicines continued or stopped exactly as the clinic instructs.
                4. The next appointment booked, either an early scan or a follow-up consultation.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The test result is reported to the clinic on test day and the next appointment, scan or follow-up, is booked within a week."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the clinic what to do after a positive or a negative result"
                - "Report the result to the clinic on test day"
                - "Continue or stop medicines exactly as the clinic says"
                - "Book the early scan or the follow-up consultation"
            - name: Cycle review consultation after an unsuccessful round
              description: |-
                ## Purpose
                A follow-up consultation after a failed cycle is where the protocol, the embryology and the next step are reviewed, and it is often short. Bringing your results log, a written list of questions and a clear sense of your limits turns it into a working meeting about what to change, whether a different protocol, more tests or a different clinic.

                ## Milestones
                1. The results log and cycle summary sent to the consultant beforehand.
                2. Questions prepared on response, egg quality, fertilisation and implantation.
                3. The consultant's view of why the cycle did not work, and what would change, written down.
                4. A next step chosen: repeat, change protocol, further tests, change clinic or pause.

                ## Notes
                Start from the **Meeting notes** template. A second opinion from another clinic is reasonable after two or more unsuccessful cycles.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Notes from the cycle review record the consultant's explanation and a next step agreed between partners within two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Send your results log to the consultant before the review"
                - "Ask the agent to draft review questions from your results log"
                - "Take notes during the review using the meeting notes template"
                - "Agree the next step together within two weeks of the review"
            - name: Early pregnancy scans and handover to maternity care
              description: |-
                ## Purpose
                After a positive test, fertility clinics usually do one or two early scans and then hand care over to your doctor or midwife, often around eight to ten weeks. Making sure the handover letter goes where it should, and that maternity care is booked in time, prevents a gap between two services just when you most want attention.

                ## Milestones
                1. The early scan dates booked with the fertility clinic.
                2. The date the clinic will stop medicines and discharge you written down.
                3. A booking appointment made with your doctor or midwife.
                4. The clinic's discharge letter confirmed as received by maternity care.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Early scans are attended, the discharge letter has reached maternity care and a maternity booking appointment is in the diary."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Book the early pregnancy scans with the clinic"
                - "Write down when the clinic plans to stop medicines and discharge you"
                - "Book a first appointment with your doctor or midwife"
                - "Check that maternity care has received the clinic's discharge letter"
            - name: Fertility treatment and your employer
              description: |-
                ## Purpose
                One IVF cycle can mean six to ten appointments, many arranged at a day's notice, plus a day or two off around egg collection. Knowing your employer's policy and your legal rights, and deciding how much to tell your manager, makes time off something planned rather than a series of awkward last-minute requests.

                ## Milestones
                1. Your employer's policy on fertility treatment, medical appointments and leave read.
                2. Your legal rights around time off and pregnancy checked for where you work.
                3. A decision made on what to tell your manager, and when.
                4. A working pattern agreed for appointment days, such as late starts or remote work.

                ## Notes
                In some countries protection from pregnancy-related discrimination starts at embryo transfer rather than at a positive test. Check what applies where you work.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your employer's policy and legal rights are known, and an agreed working pattern for appointment days is in place before the next cycle."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your employer's policy on fertility treatment and appointments"
                - "Check your legal rights to time off where you work"
                - "Decide what to tell your manager and when"
                - "Agree a working pattern for appointment days"
            - name: Egg freezing for later
              description: |-
                ## Purpose
                Freezing eggs in your early thirties gives better odds than in your late thirties, but it is expensive, involves a full stimulation cycle and does not guarantee a future baby. Weighing it properly means knowing your current ovarian reserve, the realistic chance of a live birth per frozen egg at your age, and the full cost of storage over the years you might need it.

                ## Milestones
                1. An ovarian reserve test and scan done and explained.
                2. The clinic's live birth figures for eggs frozen at your age obtained.
                3. The full cost of one or more cycles plus ten years of storage worked out.
                4. A decision recorded: freeze now, revisit at a set age, or not at all.

                ## Notes
                Ask how many eggs the clinic would suggest freezing at your age and how many cycles that might take.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on egg freezing is backed by an ovarian reserve result, age-specific outcome figures and a full cost estimate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book an ovarian reserve blood test and scan"
                - "Ask the clinic for live birth figures for eggs frozen at your age"
                - "Work out the full cost including ten years of storage"
                - "Record your decision and the age at which you will revisit it"
            - name: Fertility preservation before cancer treatment
              description: |-
                ## Purpose
                Chemotherapy, radiotherapy and some surgery can damage fertility, and there is often only a short window between diagnosis and the start of treatment to freeze eggs, embryos or sperm. Asking about preservation at the first oncology appointment, and getting an urgent referral, keeps that option open.

                ## Milestones
                1. The oncology team asked how planned treatment may affect fertility.
                2. An urgent referral to a fertility clinic made, if preservation is possible.
                3. Funding for preservation checked, as it is often publicly funded in this situation.
                4. Eggs, embryos or sperm frozen, or a decision not to preserve recorded.

                ## Notes
                Do not delay cancer treatment for this. The oncology and fertility teams will say how much time there is.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The effect of cancer treatment on fertility has been discussed, and preservation is complete or a decision not to proceed is recorded before treatment starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the oncology team how treatment could affect fertility"
                - "Request an urgent referral to a fertility clinic"
                - "Ask whether preservation is funded in your situation"
                - "Record what was frozen and where it is stored"
            - name: Treatment route for female same-sex couples
              description: |-
                ## Purpose
                Female couples choose between donor insemination, IVF with one partner's eggs, and shared or reciprocal IVF where one partner provides the eggs and the other carries the pregnancy. Each route differs in cost, funding eligibility and the legal paperwork that makes both partners legal parents, so the choice deserves a proper conversation before the first clinic visit.

                ## Milestones
                1. Donor insemination, IVF and reciprocal IVF compared on cost, success and fit for you both.
                2. Funding eligibility for same-sex couples in your area checked.
                3. Legal parenthood requirements for both partners understood and the forms identified.
                4. A route chosen and a sperm donor source agreed.

                ## Notes
                Legal parenthood forms often have to be signed before treatment, not after. Ask the clinic to confirm which ones apply to you.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment route and donor source are chosen, and legal parenthood forms are signed before treatment begins."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Compare donor insemination, IVF and reciprocal IVF for your situation"
                - "Check local funding rules for same-sex couples"
                - "Ask the clinic which legal parenthood forms you both must sign"
                - "Agree on a sperm donor source"
            - name: Solo parenthood with donor sperm
              description: |-
                ## Purpose
                Single women starting treatment with donor sperm face every decision alone: donor choice, money, appointments and the two-week wait, often with fewer funding options. Building a support plan alongside the treatment plan, including someone to take you home after procedures, makes the practical side manageable.

                ## Milestones
                1. Donor sperm sources compared, including donor identity rules in your country.
                2. Implications counselling attended, as clinics usually require.
                3. One or two people lined up for appointments, procedures and test day.
                4. A plan started for telling a future child about their donor origins.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Implications counselling is complete, a donor is chosen and named support people are confirmed for procedure and test days."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Compare sperm donor sources and their identity rules"
                - "Book the implications counselling session"
                - "Ask one or two people to support you on procedure and test days"
                - "Note how you plan to talk to a future child about the donor"
            - name: Secondary infertility while parenting
              description: |-
                ## Purpose
                Struggling to conceive a second child brings its own pressures: appointments to fit around school runs, less funding because you already have a child, and grief that others may not take seriously. Planning childcare, energy and what to tell your child makes treatment workable alongside family life.

                ## Milestones
                1. Investigations started, including a check on anything that has changed since the first pregnancy.
                2. Funding eligibility for a second child checked.
                3. Childcare arranged for scan mornings and procedure days.
                4. An age-appropriate way of explaining appointments to your child agreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Investigations are under way, funding eligibility is known and childcare is arranged for every booked appointment in the next cycle."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a doctor's appointment to start investigations"
                - "Check whether funding applies when you already have a child"
                - "Arrange childcare for scan mornings and procedure days"
                - "Decide what to tell your child about the appointments"
            - name: Support through pregnancy loss after treatment
              description: |-
                ## Purpose
                Miscarriage or ectopic pregnancy after fertility treatment can be especially hard because so much went into reaching that point. Knowing what follow-up care to ask for, when investigations for repeated loss are offered and where bereavement support exists means the practical side is not left to you in the worst week.

                ## Milestones
                1. The early pregnancy unit or clinic contact for urgent symptoms written down.
                2. Follow-up care after the loss booked and attended.
                3. Bereavement or counselling support contacted for both partners.
                4. A conversation held with the clinic about when, or whether, to try again.

                ## Notes
                Investigations for recurrent miscarriage are usually offered after a set number of losses. Ask your clinic what applies to you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Follow-up care after the loss has been attended, support contacted for both partners and next steps discussed with the clinic."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the early pregnancy unit's number and opening hours"
                - "Book the follow-up appointment after the loss"
                - "Contact a pregnancy loss charity or counsellor for support"
                - "Ask the clinic when you could consider another cycle"
            - name: Male factor infertility specialist workup
              description: |-
                ## Purpose
                When a semen analysis shows a low count, poor movement or no sperm at all, the next step is often a referral to a urologist or andrologist for examination, hormone tests and sometimes genetic tests. Finding a treatable cause, or confirming that surgical sperm retrieval is possible, changes which treatment the couple needs.

                ## Milestones
                1. A referral to a urologist or andrologist made.
                2. Examination, hormone blood tests and any scans completed.
                3. Possible causes and treatments explained, including whether sperm retrieval is an option.
                4. The specialist's findings shared with the fertility clinic.

                ## Notes
                Mention any past testicular surgery, mumps, chemotherapy, anabolic steroid or testosterone use, as these can affect sperm production.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A specialist assessment is complete and its findings, with any treatment plan, have been sent to the fertility clinic."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your doctor or the clinic for a urology or andrology referral"
                - "List past illnesses, surgeries and medicines that could affect sperm"
                - "Attend the examination and hormone tests"
                - "Send the specialist's letter to the fertility clinic"
            - name: Donor egg or donor sperm treatment
              description: |-
                ## Purpose
                Moving to donor eggs or donor sperm is a major decision, often reached after unsuccessful cycles with your own. Implications counselling, donor matching, waiting lists, legal parenthood and how you will tell your child all need attention, and taking them in order avoids months of delay.

                ## Milestones
                1. Implications counselling attended by both partners.
                2. Donor sources compared: clinic bank, known donor or overseas, with identity rules for each.
                3. Matching criteria and waiting times agreed with the clinic.
                4. Legal parenthood consents signed and a plan started for telling your child.

                ## Notes
                In many countries donor-conceived people can learn their donor's identity as adults. Many families find that telling a child early, in simple words, works better than a later disclosure.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Implications counselling is done, a donor route is chosen with matching under way, and legal parenthood consents are signed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Book implications counselling for both partners"
                - "Compare donor banks, known donors and overseas options"
                - "Ask the clinic about matching criteria and waiting times"
                - "Find a book or resource on telling children about donor conception"
            - name: Recurrent implantation failure investigations
              description: |-
                ## Purpose
                When several good-quality embryos have been transferred without a pregnancy, clinics may suggest further investigation of the uterus, the embryos and occasionally the immune system. Some of these tests are well supported and others are not, so a planned approach with your consultant avoids spending heavily on unproven extras.

                ## Milestones
                1. Your transfer history summarised: number of embryos, their quality and your age at each.
                2. The consultant's proposed investigations listed with the cost and evidence for each.
                3. Agreed tests done, such as a hysteroscopy or detailed uterine scan.
                4. A plan for the next transfer based on the results.

                ## Notes
                Definitions of recurrent implantation failure vary. Ask your consultant which one they use and why.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Investigations agreed with the consultant are complete and a written plan for the next transfer reflects their results."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise every transfer with embryo quality and your age at the time"
                - "Ask the consultant which investigations they suggest and the evidence for each"
                - "Book the agreed tests"
                - "Agree a plan for the next transfer once results are back"
            - name: Surrogacy route research
              description: |-
                ## Purpose
                Surrogacy is complex in medicine, law and money, and the rules vary enormously: legal in some countries, restricted in others, with parenthood often transferred by court order after birth. Understanding your country's legal route, the costs and the role of non-profit surrogacy organisations comes before any commitment.

                ## Milestones
                1. Your country's surrogacy law and legal parenthood process summarised in plain words.
                2. An initial consultation held with a family lawyer experienced in surrogacy.
                3. Non-profit surrogacy organisations and their processes compared.
                4. A decision recorded on whether to proceed and by which route.

                ## Notes
                Get specialist legal advice before any agreement or payment. International surrogacy carries extra legal risks for the child's nationality and parentage.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on surrogacy is recorded after a consultation with a family lawyer experienced in surrogacy and a comparison of organisations."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read your government's guidance on surrogacy and legal parenthood"
                - "Book a consultation with a family lawyer experienced in surrogacy"
                - "Compare non-profit surrogacy organisations"
                - "Record a decision on whether and how to proceed"
            - name: Deciding what happens to surplus embryos
              description: |-
                ## Purpose
                Once your family is complete, or treatment has stopped, frozen embryos still in storage need a decision: keep them, use them, donate them to another couple or to research, or allow them to perish. Many couples put this off for years while paying storage fees; making the decision together, with counselling if needed, brings closure.

                ## Milestones
                1. The number and storage details of remaining embryos confirmed.
                2. Each option and its process understood, including any counselling required for donation.
                3. A decision agreed between partners, with counselling if wanted.
                4. The clinic's consent form for that decision signed and filed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on remaining embryos is agreed and the matching consent form is signed and filed with the clinic."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the clinic how many embryos you have in storage"
                - "Read the clinic's information on each option for surplus embryos"
                - "Book a counselling session if the decision is hard"
                - "Sign and file the consent form for the decision you made"
            - name: Ending treatment or changing direction
              description: |-
                ## Purpose
                At some point treatment ends, with or without a baby, and stopping is a decision as real as starting. Planning it, including a last consultation, what happens to stored material, the money, and what comes next, whether adoption, fostering or a life without children, gives the ending a shape instead of letting it drift.

                ## Milestones
                1. A final consultation held to close treatment with the clinic.
                2. Stored eggs, sperm or embryos covered by a recorded decision.
                3. Other routes, such as adoption, fostering or living without children, explored at your own pace.
                4. Support in place for both partners for the months after stopping.

                ## Notes
                There is no right time to stop. A counsellor who knows fertility can help with the decision and with what follows.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A decision to stop or change direction is recorded, stored material has a decision and support is in place for both partners."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a final consultation with your consultant"
                - "Decide what happens to anything still in storage"
                - "Read about adoption, fostering and living without children"
                - "Arrange counselling or a support group for the months after"
---

# Fertility Treatment & IVF

This area is for anyone trying to conceive with medical help, from the first conversation with a doctor about tests through IUI, IVF, donor treatment and the decisions that come after. It starts with the foundations (a first appointment, investigations, funding and choosing a clinic), then the routines that run a treatment cycle, the knowledge that makes clinic instructions make sense, the decisions about add-ons, embryos and limits, the key days of a cycle, situations such as female couples, solo parents and fertility preservation, and finally donor treatment, surrogacy and ending treatment.

What repeats is a weekly look at the cycle calendar and medicine plan, a weekly check-in between partners, monthly checks of medicine stock, spending and paperwork, a monthly point of support, and a yearly check of storage consents and fees. The Purchase decision, Savings goal, Metrics log, Habit tracker and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
