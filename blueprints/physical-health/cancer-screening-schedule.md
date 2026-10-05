---
id: physical-health.cancer-screening-schedule
name: Cancer Screening Schedule
description: "Every cancer screening you are due for on one calendar, invitations answered and kits returned on time, results chased, and the follow-up tests and higher-risk schedules handled calmly."
category: personal
version: 1.0.0
tags: [physical-health, cancer-screening-schedule, everyone, screening, bowel-screening, breast-screening, cervical-screening, prostate]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Cancer Screening Schedule
          description: "Keeping bowel, breast, cervical, prostate and skin cancer screenings on schedule for your age and risk, with reminders, results and follow-up appointments in one place."
          projects:
            - name: Screening eligibility map for your age and sex
              description: |-
                ## Purpose
                Most countries run a handful of organised programmes, typically bowel, breast and cervical, each with its own starting age, stopping age and interval, and a few add lung or prostate pathways. Writing down which ones apply to you now, and which begin in the next ten years, turns a vague sense of 'I should probably get checked' into a short, specific list.

                ## Milestones
                1. Your health service's official pages for each screening programme found and bookmarked.
                2. A table listing every programme with its starting age, stopping age and interval.
                3. The programmes you are eligible for today marked, with the year each future one begins.
                4. Any programme you are unsure about written down as a question for your practice.

                ## Notes
                Ages and intervals differ between countries and change over time, so copy them from your own health service rather than from a general article.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of every screening programme in your country, with ages and intervals copied from official pages and your current eligibility marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your health service's page listing the national screening programmes"
                - "Write each programme's starting age, stopping age and interval in a table"
                - "Mark which programmes you are eligible for this year"
                - "Add the year each future programme will start for you"
            - name: Past screening dates pulled from your record
              description: |-
                ## Purpose
                Few people can say when they last had a smear or returned a bowel kit, and guessing is how a three-year interval quietly becomes seven. Your practice or patient app usually holds the dates and results, and copying them out once gives every later calendar entry a real starting point.

                ## Milestones
                1. The date and result of your last cervical, breast and bowel screening found, where they apply.
                2. Any lung, skin or prostate checks you have had listed with dates.
                3. Gaps or unknown dates marked clearly rather than guessed.
                4. The list saved where you keep your other screening papers.

                ## Notes
                If the patient app does not show screening history, the practice reception can usually tell you the last recorded date over the phone.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of every past cancer screening with its date and result, and any unknown dates confirmed or flagged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open your patient app and look for screening or test history"
                - "Ask the practice for any screening dates the app does not show"
                - "Write each past screening with its date and outcome on one page"
                - "Flag any programme where you cannot find a last date"
            - name: Practice contact details that invitations rely on
              description: |-
                ## Purpose
                Home kits and invitation letters go to whatever address and name your practice holds, so a missed house move, a name change or an old mobile number means kits go astray and nobody notices. Checking the record takes ten minutes and protects every programme at once.

                ## Milestones
                1. Your registered address, name, date of birth and phone number confirmed with the practice.
                2. Any change of name or gender marker recorded, with a note about how it affects invitations.
                3. Your preferred contact method for results and reminders set.
                4. A yearly reminder in place to check the details again.

                ## Notes
                A change to the sex or gender recorded on your file can stop some invitations being sent automatically. Ask the practice which programmes you would need to request yourself.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The practice has confirmed your current name, address and phone number, and any effect on screening invitations is written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the address and phone number shown on your patient app"
                - "Ask reception to correct anything out of date"
                - "Ask whether any recent name or gender change affects screening invitations"
                - "Confirm your contact details with the practice are still current @recurring(yearly)"
            - name: Personal cancer screening calendar
              description: |-
                ## Purpose
                Each programme runs on its own clock, so the only way to see them together is to put them on one page. A single calendar with the next due month for every programme, built from your eligibility map and past dates, shows at a glance what is coming and what is late.

                ## Milestones
                1. Every programme you are eligible for listed with its next due month.
                2. Overdue programmes highlighted at the top.
                3. Due months added to your main calendar as reminders a month ahead.
                4. The page shared with anyone who helps you manage appointments.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page screening calendar showing the next due month for every eligible programme, with each due month set as a reminder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the next due month for each programme from your past dates"
                - "Write the programmes in due order on one page"
                - "Put a reminder in your calendar one month before each due date"
                - "Highlight any programme that is already overdue"
            - name: Risk factors that may change your screening schedule
              description: |-
                ## Purpose
                Standard programmes are designed for people at average risk. A close relative diagnosed young, previous bowel polyps, a known gene change, a long smoking history, chest radiotherapy or a weakened immune system can all mean screening should start earlier or happen more often, and that only happens if someone raises it.

                ## Milestones
                1. A short list of the risk factors that apply to you, with dates and details where known.
                2. Your clinician asked whether any of them changes when or how you are screened.
                3. Any change agreed, such as an earlier start or a referral, recorded with the reason.
                4. Your screening calendar updated to match.

                ## Notes
                Your clinician decides whether a factor changes the schedule. Building the full family tree belongs with family medical history; here you only need the facts that affect screening.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your risk factors are written down, discussed with a clinician, and their answer about your screening schedule is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List relatives diagnosed with cancer, with the type and their age at diagnosis"
                - "Add your own history of polyps, smoking, radiotherapy or immune treatment"
                - "Book a conversation with your clinician to go through the list"
                - "Add any new family diagnosis to the list and tell your clinician @recurring(yearly)"
            - name: Screening letters and results folder
              description: |-
                ## Purpose
                Invitations, kit instructions, results letters and recall appointments arrive months apart from different senders, and losing one can mean repeating a test or missing a follow-up. One folder, paper or digital, with a section per programme keeps the whole trail together for the next appointment or the next new doctor.

                ## Milestones
                1. A folder with one section for each screening programme.
                2. Every screening letter you can find filed in date order.
                3. A cover page listing the latest result and next due date per programme.
                4. New letters filed within a week of arriving.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holding every available screening letter by programme, with a current cover page of latest results and next dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every screening letter from drawers, email and the patient app"
                - "Sort them into one section per programme in date order"
                - "Write a cover page with the latest result for each programme"
                - "File any new screening letters and update the cover page @recurring(quarterly)"
            - name: Overdue screening catch-up plan
              description: |-
                ## Purpose
                Millions of people are behind on at least one screening, often after a move, a busy few years or one bad experience. You can usually still be screened after the invitation has lapsed, but you may have to ask, so a plan that tackles the most overdue programme first gets you back on schedule within a few months.

                ## Milestones
                1. Every overdue programme listed with how many months late it is.
                2. The process for requesting each one found, whether a phone call, an app request or a self-referral line.
                3. The most overdue screening booked or its kit requested.
                4. All overdue programmes either completed or booked.

                ## Notes
                If a previous screening was painful or distressing, say so when booking. Most services can offer adjustments, and that is often what makes the difference.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every overdue screening has been completed or has a booked appointment or requested kit, recorded with dates."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each overdue programme and how late it is"
                - "Find how to request each one through your practice or programme helpline"
                - "Book or request the most overdue screening first"
                - "Book the remaining overdue screenings in order"
            - name: Symptoms card for things screening is not for
              description: |-
                ## Purpose
                Screening is designed for people without symptoms, and a recent clear result does not cover a new lump, bleeding or a change in bowel habit that starts afterwards. A short card of the symptoms your health service says to report promptly stops anyone waiting for the next invitation instead of seeing a doctor now.

                ## Milestones
                1. Your health service's list of symptoms to report for bowel, breast, cervical, prostate, lung and skin cancer found.
                2. The symptoms written on one card in plain words.
                3. The card kept with your screening folder and shared with your household.
                4. A note on the card saying a normal screening result never cancels a new symptom.

                ## Notes
                Copy the wording from your own health service. This card organises their advice and is not a checklist for diagnosing yourself.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page symptoms card written from official guidance is in your screening folder and your household knows where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's symptom lists for the common cancers"
                - "Write the key symptoms for each on a single card"
                - "Add a line that a recent clear screening does not cover new symptoms"
                - "Show the card to the people you live with"
            - name: Reasonable adjustments recorded for screening appointments
              description: |-
                ## Purpose
                Mobility limits, pain, past trauma, anxiety, a learning disability or a need for an interpreter can all make a standard screening appointment hard or impossible. Writing down what helps and asking the practice to flag it means the longer appointment, the female sample taker or the step-free room is arranged before you arrive, not negotiated at the door.

                ## Milestones
                1. A short list of the adjustments that would make screening possible or easier for you.
                2. The list sent to your practice and the screening services you use.
                3. Confirmation that the adjustments are noted on your record.
                4. The list kept in your screening folder for each new booking.

                ## Notes
                Common requests include a double appointment, a chaperone, a sample taker of a particular sex, an interpreter, a hoist or adapted couch, and a first visit just to talk.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your practice has confirmed in writing that your screening adjustments are recorded on your file."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what has made past appointments difficult"
                - "Turn each difficulty into a specific adjustment request"
                - "Send the requests to the practice and ask for them to be flagged"
                - "Ask the practice to confirm the adjustments are on your record"
            - name: Bowel screening home kit routine
              description: |-
                ## Purpose
                Bowel screening in many countries is a stool test posted to your home every one or two years, and a surprising number of kits sit unopened until they expire. A simple routine for the day a kit arrives, done within the week and posted back, makes this the easiest screening of all to keep on time.

                ## Milestones
                1. The age range and interval for bowel screening in your country noted on your calendar.
                2. A place agreed in the bathroom where an arriving kit waits until it is done.
                3. Each kit completed and posted within a week of arriving.
                4. Every result letter filed with the date the kit was returned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive bowel screening kits completed and returned within a week of arrival, with both result letters filed."
                cadence: rolling
              tasks:
                - "Note your next bowel kit due date on the screening calendar"
                - "Agree where an arriving kit will wait in the bathroom"
                - "Write the return date on the folder cover page once posted"
                - "Check when your next bowel screening kit is due @recurring(yearly)"
            - name: Breast screening invitation cycle
              description: |-
                ## Purpose
                Breast screening programmes usually invite women and some trans and non-binary people for a mammogram every two or three years within a set age band. Because the gap is long, invitations are easy to miss or postpone indefinitely, so treating each cycle as a fixed event with a reminder, a booking and a filed result keeps it on track.

                ## Milestones
                1. Your next expected invitation month on the screening calendar.
                2. The invitation answered and the appointment booked within two weeks of arrival.
                3. The mammogram attended and the result letter filed.
                4. Two consecutive cycles completed on schedule.

                ## Notes
                If you have breast implants, tell the service when booking: they may book a longer appointment or a specific team.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Two consecutive breast screening cycles attended within their invitation window, each with its result filed."
                cadence: cyclic
              tasks:
                - "Find the month your next breast screening invitation is expected"
                - "Book the appointment within two weeks of the invitation arriving"
                - "File the result letter and record the next expected date"
                - "Check the date of your next breast screening invitation @recurring(yearly)"
            - name: Cervical screening cycle
              description: |-
                ## Purpose
                Cervical screening for people with a cervix is now commonly an HPV test every three to five years, with the interval depending on your age, your last result and your country. Tracking your own interval, rather than assuming the standard one, matters because a previous HPV-positive result often shortens the next gap.

                ## Milestones
                1. Your current interval confirmed from your last result letter.
                2. The next due month on the screening calendar.
                3. The test booked within a month of the invitation.
                4. The result filed with the next due date it gives.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Your next cervical screening is booked within a month of its due date and the interval from your last result is recorded."
                cadence: cyclic
              tasks:
                - "Read your last result letter for the interval it gives"
                - "Book the test within a month of the invitation"
                - "File the result and write the next due date on the calendar"
                - "Confirm your next cervical screening due date on the patient app @recurring(yearly)"
            - name: Birthday review of the screening calendar
              description: |-
                ## Purpose
                Eligibility changes with age: a new programme starts, an interval shortens or a programme ends and screening becomes something you request. A short review each year on or near your birthday catches those changes before an invitation is missed or an expected one never comes.

                ## Milestones
                1. A yearly reminder set for the week of your birthday.
                2. Each programme checked against your new age.
                3. Any programme starting or ending this year marked on the calendar.
                4. The review completed for two consecutive years.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The screening calendar has been checked against your age in the birthday week for two consecutive years, with changes recorded."
                cadence: rolling
              tasks:
                - "Set a reminder for the week of your birthday"
                - "Review the screening calendar against your new age @recurring(yearly)"
                - "Mark any programme that starts or stops for you this year"
            - name: Monthly sweep for screening post and messages
              description: |-
                ## Purpose
                Invitations now arrive by letter, text, email or patient app depending on the programme, and a single missed message can push a screening back a year. A five-minute monthly sweep of every channel catches the invitation that went to spam or the letter buried under takeaway menus.

                ## Milestones
                1. Every channel screening services might use for you listed.
                2. Screening senders added to your email contacts so messages avoid the spam folder.
                3. A monthly sweep done and any invitation answered the same day.
                4. Six monthly sweeps completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly sweeps of post, email, texts and the patient app completed, with any invitation answered on the day found."
                cadence: rolling
              tasks:
                - "List the channels screening services use to reach you"
                - "Add the screening programme senders to your email contacts"
                - "Check post, spam, texts and the patient app for screening messages @recurring(monthly:9)"
            - name: Chasing screening results that go quiet
              description: |-
                ## Purpose
                Every programme tells you roughly when to expect a result, usually a few weeks, and silence beyond that is not good news by default. Samples get lost, letters go to old addresses and reports wait in a queue, so a rule for when to chase makes sure no result falls through the gap.

                ## Milestones
                1. The usual waiting time for each programme's result written down.
                2. Each completed screening logged with the date the result is expected.
                3. A monthly check for anything past its expected date.
                4. Every overdue result chased and the answer recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No completed screening goes more than two weeks past its stated result window without being chased and the outcome recorded."
                cadence: rolling
              tasks:
                - "Write the usual result waiting time for each programme"
                - "Log the expected result date whenever you complete a screening"
                - "Chase any screening result past its expected date and note the answer @recurring(monthly:19)"
            - name: Breast awareness and knowing what is normal for you
              description: |-
                ## Purpose
                Mammograms happen every few years and many breast cancers are first noticed by the person themselves between screens. Getting to know how your breasts usually look and feel, and checking at a regular time each month, makes a change easier to spot and report quickly.

                ## Milestones
                1. Your health service's guidance on what changes to look and feel for read.
                2. A regular monthly time chosen, such as a few days after a period ends.
                3. Monthly checks done for six months.
                4. Any change reported to your doctor promptly and the outcome recorded.

                ## Notes
                Breast awareness is for anyone, including men and people without periods. It does not replace screening, and a change found between screens should be reported rather than saved for the next mammogram.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly breast awareness checks done, with any change reported to a doctor and its outcome noted."
                cadence: rolling
              tasks:
                - "Read your health service's guide to breast changes to look for"
                - "Pick a regular day each month for the check"
                - "Do your breast awareness check and note anything new @recurring(monthly:3)"
            - name: Before-the-appointment screening checklist
              description: |-
                ## Purpose
                Small details decide whether a screening goes smoothly: deodorant can show up on a mammogram, a cervical sample is better taken away from your period, and some bowel tests need diet changes days ahead. One reusable checklist, run the week before any screening, avoids a wasted trip or a repeat test.

                ## Milestones
                1. A checklist covering timing, preparation, clothing, transport and questions.
                2. Programme-specific preparation notes added from each invitation leaflet.
                3. The checklist run before at least two different screenings.
                4. Anything you wished you had known added after each appointment.

                ## Notes
                Start from the **Operational checklist** template. Always follow the preparation instructions in your own invitation, which override any general list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written pre-screening checklist used before two screenings and updated after each with what was learned."
                cadence: rolling
              tasks:
                - "Create the checklist from the operational checklist template"
                - "Copy the preparation instructions from your latest invitation leaflet"
                - "Run the checklist in the week before each screening"
                - "Add one lesson to the checklist after each appointment"
            - name: Professional skin checks at the interval you are given
              description: |-
                ## Purpose
                There is no population skin screening programme in most countries, but people with many moles, a previous melanoma, fair skin with heavy sun exposure or a weakened immune system are often advised to have their skin examined regularly by a doctor or dermatologist. Turning that advice into a booked, repeating appointment is the screening half of skin care; tracking your own moles between visits sits in sun safety.

                ## Milestones
                1. Your clinician asked whether regular professional skin checks are advised for you, and how often.
                2. The first check booked with a doctor or dermatologist.
                3. The examination attended and any mole to watch recorded.
                4. The next check booked at the interval given.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A professional skin check attended at the interval your clinician set, with findings and the next booking recorded."
                cadence: cyclic
              tasks:
                - "Ask your doctor whether you need regular professional skin checks"
                - "Book the first full skin examination"
                - "Write down any mole the examiner asked you to watch"
                - "Book the next skin check at the interval your clinician set @recurring(yearly)"
            - name: Lung cancer screening for current and former smokers
              description: |-
                ## Purpose
                A growing number of countries offer lung health checks or low-dose CT scans to people of a certain age with a significant smoking history, including those who quit years ago. Many eligible people never take up the offer, often because they assume quitting made them ineligible or fear being judged.

                ## Milestones
                1. Whether a lung screening programme exists where you live, and its criteria, found.
                2. Your smoking history written in pack-years or years smoked, ready for the assessment.
                3. Eligibility confirmed with the programme or your practice.
                4. The check attended and the recall interval recorded if one is given.

                ## Notes
                Lung screening services do not lecture; they ask about smoking history to work out risk, and most offer stop smoking support alongside the scan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Your eligibility for lung screening is confirmed, and if eligible the check is attended with the next recall date recorded."
                cadence: cyclic
              tasks:
                - "Search your health service for a lung health check or lung screening programme"
                - "Work out roughly how many years you smoked and how much"
                - "Ask the practice or programme whether you qualify"
                - "Check whether your next lung screening recall is due @recurring(yearly)"
            - name: How bowel screening works, from kit to colonoscopy
              description: |-
                ## Purpose
                Most people know the kit arrives in the post but not what happens next. Learning the whole pathway, including what an abnormal result usually means, why most people referred for colonoscopy do not have cancer and how long each stage takes, makes an unexpected letter far less frightening.

                ## Milestones
                1. The official leaflet for your bowel screening programme read in full.
                2. The stages from kit to result to possible colonoscopy written as a short sequence.
                3. The typical waiting time between each stage noted.
                4. Your remaining questions written down for the programme helpline.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your bowel screening pathway with stages, waits and open questions, written from the official leaflet."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Download the official leaflet for your bowel screening programme"
                - "Write the pathway as numbered stages with typical waits"
                - "List the questions the leaflet did not answer"
                - "Call the programme helpline with your top question"
            - name: Doing the home bowel test correctly
              description: |-
                ## Purpose
                Home stool kits are simple but unforgiving: a sample taken wrongly, a missing date or a kit posted after it expires usually means a repeat test and weeks of delay. Practising the steps once by reading the instructions before the day removes most of the common mistakes.

                ## Milestones
                1. The kit instructions read the day it arrives, before taking a sample.
                2. Sample collection, labelling and dating done exactly as instructed.
                3. The kit posted within the time window printed on it.
                4. No kit returned as unusable over two rounds.

                ## Notes
                If dexterity, eyesight or a stoma makes the kit difficult, the programme helpline can usually advise or send an adapted kit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two consecutive bowel kits completed, dated and posted within their window, with neither returned as spoiled."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the full kit instructions on the day it arrives"
                - "Lay out the kit, labels and pen before you start"
                - "Write the sample date on the label as instructed"
                - "Post the kit the same day the sample is taken"
            - name: Reading a mammogram result letter
              description: |-
                ## Purpose
                Most mammogram letters say all is normal, but a small share ask you back for more tests, and the wording can sound alarming. Knowing in advance that most people recalled turn out not to have cancer, and what terms like recall, assessment or breast density mean, helps you read the letter calmly and act on it.

                ## Milestones
                1. The standard result letter wording for your programme understood.
                2. The meaning of recall and assessment clinic written in your own words.
                3. Whether your programme reports breast density, and what it says, noted.
                4. A plan for who to call if a letter is unclear.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explaining the main mammogram result outcomes in your own words, plus the number to call about an unclear letter."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your programme's explanation of possible results"
                - "Write what a recall to assessment does and does not mean"
                - "Find out whether your programme reports breast density"
                - "Save the breast screening unit's phone number in your contacts"
            - name: What HPV and cervical screening results mean
              description: |-
                ## Purpose
                Cervical screening results now mention HPV, cell changes and different recall intervals, and many people leave the letter not knowing whether to worry. Understanding that HPV is very common, that most infections clear on their own and how each result changes the next step turns the letter into a plan.

                ## Milestones
                1. The main result types in your programme listed: HPV not found, HPV found with normal cells, HPV found with cell changes.
                2. What each result means for the next test written beside it.
                3. Your own last result placed in that list.
                4. Your questions about your result taken to the practice nurse.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of cervical result types and their next steps, with your own last result and its implication identified."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your programme's guide to cervical screening results"
                - "Write each result type with the follow-up it leads to"
                - "Mark where your last result sits in the list"
                - "Ask the practice nurse anything the guide left unclear"
            - name: Benefits, harms and overdiagnosis in screening
              description: |-
                ## Purpose
                Every programme saves lives, yet each also finds some cancers that would never have caused harm and produces false alarms that lead to further tests. Health services publish these numbers so people can make an informed choice, and reading them once makes it easier to decide about the optional tests that come later.

                ## Milestones
                1. The published benefit and harm figures for each programme you are eligible for found.
                2. Overdiagnosis and false positives explained in a sentence each, in your own words.
                3. A short note of what matters most to you when weighing a screening choice.
                4. Any decision you were unsure about revisited with this in mind.

                ## Notes
                Decision aids published by health services often show these numbers as 1,000-person diagrams, which are easier to compare than percentages.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note summarising the benefits and harms of each programme you are eligible for, using the programme's own published figures."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official decision aid or leaflet for each programme"
                - "Copy the benefit and harm figures for 1,000 people screened"
                - "Write what overdiagnosis and a false positive mean in a sentence each"
                - "Ask the agent to summarise the figures into one comparison table"
            - name: Questions to ask at any screening appointment
              description: |-
                ## Purpose
                Appointments for screening are short and focused on taking the sample or image, so questions tend to come to mind on the way home. A standing list, adapted for each programme, means you leave knowing when the result arrives, how it will reach you and what happens if it is not clear.

                ## Milestones
                1. A core list of five questions that apply to every screening.
                2. Extra questions added for each programme you attend.
                3. The list taken to at least two appointments.
                4. Answers recorded and filed with the relevant result.

                ## Notes
                Start from the **Meeting notes** template to keep questions and answers together for each appointment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A question list used at two screening appointments, with the answers recorded and filed beside each result."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write five questions that apply to every screening appointment"
                - "Add programme-specific questions before your next screening"
                - "Record the answers in your notes before leaving the building"
                - "File the answers with the result when it arrives"
            - name: Spotting reliable screening information
              description: |-
                ## Purpose
                Search results and social feeds are full of clinics selling scans, influencers with a single story and old articles quoting outdated ages. Knowing which sources set the rules where you live, and how to check a claim against them, protects you from both false reassurance and unnecessary fear.

                ## Milestones
                1. The official sources for screening policy in your country listed.
                2. Two or three reputable cancer charities or patient organisations added.
                3. A simple test written for judging a new claim: who wrote it, when, and who is selling something.
                4. One claim you had heard checked against the official source.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved list of official and reputable screening sources plus a three-question test for judging new claims, used on one real claim."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Bookmark your health service's screening policy pages"
                - "Add two reputable cancer charities to the same folder"
                - "Write three questions for judging a screening claim"
                - "Check one claim you have heard against the official source"
            - name: PSA test decision with your clinician
              description: |-
                ## Purpose
                Many countries do not run organised prostate screening because the PSA blood test can miss cancers and also find slow-growing ones that would never cause harm. Men from about fifty, or younger with a family history or higher-risk background, can usually still ask for the test, and the right answer depends on weighing those trade-offs with a clinician.

                ## Milestones
                1. Your health service's information on PSA testing read, including benefits and downsides.
                2. Your personal risk factors such as age, family history and ethnicity noted.
                3. A conversation held with your clinician about whether to test.
                4. The decision recorded with the date and, if tested, the plan for retesting.

                ## Notes
                Ongoing prostate monitoring after a raised result belongs with men's health and prostate care. This project is only the screening decision.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on PSA testing, made with a clinician after reading the official information, with any retest interval noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's information on the PSA test"
                - "Note your age, family history and other risk factors"
                - "Book an appointment to discuss PSA testing with your clinician"
                - "Revisit the PSA decision with your clinician at your yearly check-up @recurring(yearly)"
            - name: Cervical self-sampling or clinic sample
              description: |-
                ## Purpose
                Some programmes now let people take their own HPV sample with a swab at home or in private at the surgery, which helps those who find speculum examinations painful, distressing or hard to arrange. Knowing whether the option exists where you live, and its limits, lets you choose the route you will actually complete.

                ## Milestones
                1. Whether your programme offers self-sampling, and to whom, confirmed.
                2. The differences from a clinician-taken sample noted, including what happens after a positive result.
                3. A choice made between self-sampling and a clinic sample.
                4. The chosen test requested or booked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between self-sampling and a clinic sample, with the chosen test requested or booked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the practice whether HPV self-sampling is offered to you"
                - "Find out what follow-up a positive self-sample leads to"
                - "Decide which route you are most likely to complete"
                - "Request the kit or book the clinic appointment"
            - name: Making cervical screening more comfortable
              description: |-
                ## Purpose
                Pain, anxiety, menopause-related dryness, vaginismus and past trauma are common reasons people stop attending cervical screening. A short written request covering the things that help, such as a smaller speculum, a different position, a longer slot or stopping at any point, makes the next appointment much more manageable.

                ## Milestones
                1. The things that made previous screening difficult written down.
                2. A list of requests such as speculum size, position, lubricant, a chaperone or a longer appointment.
                3. The requests shared when booking, not just on the day.
                4. The appointment completed, with notes on what helped for next time.

                ## Notes
                You can stop a screening at any time. If menopause dryness is the issue, ask whether a short course of treatment beforehand is suitable for you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of comfort requests shared at booking, and a cervical screening completed with notes on what helped."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what made your last cervical screening difficult"
                - "Turn each point into a specific request for the sample taker"
                - "Share the requests when you book the appointment"
                - "Note what helped straight after the appointment"
            - name: Rejoining a screening programme after opting out
              description: |-
                ## Purpose
                Some people opt out of a programme formally after a bad experience, a period of illness or a decision made years ago, and then stop receiving invitations for good. If your view has changed, getting back on the list usually takes a letter or a call, but nobody will prompt you to do it.

                ## Milestones
                1. Which programmes you have opted out of, and when, confirmed with the practice.
                2. The process for rejoining each one found.
                3. A request to rejoin sent and acknowledged.
                4. The next invitation or kit received and added to the calendar.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your opt-out status for each programme is confirmed, and any programme you chose to rejoin has acknowledged the request."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the practice which screening programmes you are opted out of"
                - "Find the rejoining process for each programme"
                - "Send the rejoin request and keep a copy"
                - "Add the next expected invitation to your calendar"
            - name: Screening beyond the programme's upper age limit
              description: |-
                ## Purpose
                Invitations usually stop at a set age, often in the early to mid seventies, but some programmes still let you request a test after that. Whether to continue depends on your health, your history and your wishes, and the choice is better made deliberately with your clinician than by default when the letters stop.

                ## Milestones
                1. The upper age limit for each programme and any self-referral option found.
                2. Your recent results and general health summarised for the conversation.
                3. Your clinician's view on continuing each screening recorded.
                4. A clear yes or no for each programme, with any self-referral booked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each programme you have aged out of, made with your clinician, with any self-referral booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the upper age limit for each programme you use"
                - "Check which programmes allow you to self-refer after that age"
                - "Discuss continuing or stopping each screening with your clinician"
                - "Book any self-referral you decide to make"
            - name: Private screening offers checked before paying
              description: |-
                ## Purpose
                Private clinics advertise whole-body scans, blood tests for tumour markers and multi-cancer packages, and some are useful while others mainly generate incidental findings and anxiety. Asking a standard set of questions before paying separates a test that fills a real gap in public screening from one that does not.

                ## Milestones
                1. The exact test on offer, its price and what it claims to detect written down.
                2. Whether your public programme already covers that cancer checked.
                3. Answers to key questions gathered: evidence, false positive rate, who reviews results and what happens after an abnormal finding.
                4. A decision recorded, ideally after a word with your own doctor.

                ## Notes
                Start from the **Purchase decision** template. Ask in advance who pays for follow-up tests if the private scan finds something.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the private test against your public screening, with the evidence questions answered and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down exactly which test is offered and its total price"
                - "Check whether your public programme already covers the same cancer"
                - "Ask the clinic about evidence, false positives and follow-up costs"
                - "Discuss the offer with your own doctor before paying"
            - name: Time off work for screening and follow-up
              description: |-
                ## Purpose
                Clinics often run only in working hours and a recall or colonoscopy can need a whole day, sometimes with someone to collect you. Knowing your employer's policy before you need it removes one of the most common reasons people postpone, and a short message template makes asking easy.

                ## Milestones
                1. Your employer's policy on medical appointments and screening found.
                2. Whether appointments are paid time or must be made up confirmed.
                3. A short message template for requesting time off saved.
                4. The next screening booked with time off agreed.

                ## Notes
                You do not usually have to tell your employer which screening it is; an appointment for a routine health check is enough detail.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your employer's medical appointment policy is noted and the next screening is booked with time off agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your employer's policy on medical appointments"
                - "Check whether screening time is paid or must be made up"
                - "Save a short message for requesting appointment time off"
                - "Agree the time off for your next screening in writing"
            - name: Dense breast tissue and extra imaging question
              description: |-
                ## Purpose
                Some programmes tell you if your breasts are dense, which can make mammograms harder to read and is linked with a slightly higher risk. Whether extra imaging such as ultrasound or MRI makes sense varies widely, so the useful step is to understand your own result and ask your clinician what it means for you.

                ## Milestones
                1. Your breast density category, if reported, written down.
                2. Your programme's position on extra imaging for dense tissue read.
                3. The question discussed with your clinician alongside your other risk factors.
                4. The outcome recorded, including any change to your screening plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your breast density result and your clinician's view on extra imaging are recorded, with any change to the screening plan noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your last mammogram letter for a breast density note"
                - "Read your programme's guidance on dense breast tissue"
                - "Ask your clinician whether extra imaging is suitable for you"
                - "Record the answer in your screening folder"
            - name: First cervical screening appointment
              description: |-
                ## Purpose
                The first invitation often arrives in the early or mid twenties, at a time of moves, new jobs and university, and first-timers are the group most likely not to book. Preparing for it, knowing what happens in the room and choosing a time that works, makes the first test straightforward and the next ones routine.

                ## Milestones
                1. The invitation found or the practice contacted if none has arrived.
                2. What happens during the test read from the programme leaflet.
                3. The appointment booked at a suitable point in your cycle.
                4. The test done and the result filed with the next due date.

                ## Notes
                You can bring someone with you, ask for a sample taker of a particular sex and ask to stop at any time.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your first cervical screening is attended and its result filed, with the next due date on your calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check you are registered with a practice where you now live"
                - "Read the programme leaflet on what happens at the test"
                - "Book a slot away from your period"
                - "File the result and add the next due date to the calendar"
            - name: First mammogram
              description: |-
                ## Purpose
                A first breast screening invitation usually arrives around fifty, though the age varies by country and is earlier for some people at higher risk. Knowing that the compression lasts seconds, that you will be asked to undress from the waist up and that results come by letter takes most of the dread out of the first visit.

                ## Milestones
                1. The invitation answered and the appointment booked.
                2. Preparation done: no deodorant or talc on the day and a two-piece outfit chosen.
                3. The mammogram attended.
                4. The result letter filed and the next invitation month recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your first mammogram is attended and the result letter filed, with the next expected invitation on your calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the appointment from your first breast screening invitation"
                - "Read the leaflet on what the mammogram involves"
                - "Skip deodorant and talc on the morning of the appointment"
                - "File the result letter when it arrives"
            - name: First bowel screening kit
              description: |-
                ## Purpose
                The first bowel kit is the one most often left in a drawer, partly from squeamishness and partly because nobody explained it beforehand. Treating its arrival as a small event, read on the day and done within a week, sets the pattern for every kit that follows.

                ## Milestones
                1. The age your first kit is due confirmed and the month on your calendar.
                2. The kit read through on the day it arrives.
                3. The sample taken and posted within a week.
                4. The result received and filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your first bowel screening kit is completed and posted within a week of arrival, with the result letter filed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the age at which your first bowel kit arrives"
                - "Open and read the kit on the day it is delivered"
                - "Complete and post the kit within the week"
                - "File the result letter with your other screening papers"
            - name: Colonoscopy after a positive bowel test
              description: |-
                ## Purpose
                An abnormal home bowel test usually leads to an appointment with a specialist nurse and then a colonoscopy, and most people referred do not have cancer, though polyps are often found and removed. Planning the bowel preparation, the diet changes, the day off and a lift home makes the procedure go smoothly and avoids having to repeat it.

                ## Milestones
                1. The pre-assessment appointment attended and the procedure date confirmed.
                2. Bowel preparation instructions read and any medicines that need pausing discussed with the team.
                3. Low-residue food, the preparation drink and a lift home arranged.
                4. The colonoscopy done and the findings and next steps recorded.

                ## Notes
                Ask the team about any regular medicines, especially blood thinners or diabetes treatment, well before the preparation starts. Do not stop any medicine without their advice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The colonoscopy is completed with full bowel preparation, and the findings and any surveillance interval are written in your screening folder."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the date and contact number from the referral letter"
                - "Ask the team which of your medicines need special instructions"
                - "Buy the foods allowed on the low-residue diet"
                - "Arrange a lift home and a day off after the procedure"
                - "Record the findings and any follow-up interval the same week"
            - name: Colposcopy after an abnormal cervical result
              description: |-
                ## Purpose
                A cervical result showing HPV with cell changes usually leads to a colposcopy, a closer look at the cervix that may include a small biopsy or treatment. Knowing the appointment is common, usually quick and mostly finds changes that can be treated or watched lets you plan the day rather than dread it.

                ## Milestones
                1. The colposcopy appointment confirmed and the clinic leaflet read.
                2. Your questions written down, including what treatment might be done on the day.
                3. Transport and time off arranged, plus pads and comfortable clothing.
                4. The result and the next test date recorded when it arrives.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The colposcopy is attended, its result received, and the follow-up test date written into your screening calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the colposcopy date and read the clinic leaflet"
                - "Write the questions you want answered before anything is done"
                - "Arrange time off and someone to go with you if you want company"
                - "Add the follow-up test date to the screening calendar"
            - name: Breast screening recall to an assessment clinic
              description: |-
                ## Purpose
                Being asked back after a mammogram is frightening, but most people recalled do not have cancer and the extra pictures or ultrasound often settle the question on the same day. Preparing for the visit, bringing someone and knowing that a biopsy result can take a week or more helps you get through the wait.

                ## Milestones
                1. The recall appointment booked as early as offered.
                2. Someone asked to come with you, and time off arranged.
                3. Questions written down about what tests may happen and when results arrive.
                4. The outcome and any further appointments recorded.

                ## Notes
                Assessment clinics may do extra imaging, an ultrasound or a needle biopsy on the same day, so plan for a long visit.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The assessment clinic visit is attended and its outcome, plus any further appointment, is written in your screening folder."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Accept the earliest assessment appointment offered"
                - "Ask someone you trust to come with you"
                - "Write down when and how results will be given"
                - "Record the outcome and any next appointment"
            - name: Screening after moving to a new country
              description: |-
                ## Purpose
                Programmes differ in which cancers they screen for, at what ages and how often, and a move can leave you outside both systems at once. Registering locally, bringing your past results and working out where you sit on the new schedule avoids a long silent gap.

                ## Milestones
                1. Registration with a local doctor or health service completed.
                2. Your past screening dates and results gathered, translated if needed.
                3. The new country's programmes compared with your history and any overdue test found.
                4. Your screening calendar rebuilt on the new country's schedule.

                ## Notes
                Some programmes only invite residents who have been registered for a period of time. Ask whether you can be added sooner if you are already due.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "You are registered with a local health service and your screening calendar has been rebuilt on the new country's programme schedule."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Register with a local doctor or health service"
                - "Request copies of your past screening results before you leave"
                - "Compare the new country's programmes with your screening history"
                - "Ask the agent to draft a one-page screening summary for your new doctor"
            - name: Screening as a trans or non-binary person
              description: |-
                ## Purpose
                Invitations are usually sent according to the sex recorded on your file, so a trans man with a cervix may not be invited for cervical screening and a trans woman may be invited for breast screening without explanation. Working out which programmes apply to the organs you have, and asking for those invitations directly, prevents both missed and unnecessary tests.

                ## Milestones
                1. The programmes relevant to your body, rather than your recorded sex, listed.
                2. Your practice asked how it handles invitations for each one.
                3. Any test you need but will not be invited for requested manually.
                4. Your preferences for the appointment, such as a clinic you trust, recorded.

                ## Notes
                Many health services publish screening guidance specifically for trans and non-binary people. Gender identity clinics can also advise on hormones and screening.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each relevant screening programme is either automatically scheduled or manually requested, with the arrangement confirmed by your practice."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the screening programmes relevant to your anatomy"
                - "Read your health service's screening guidance for trans and non-binary people"
                - "Ask the practice how invitations will reach you for each one"
                - "Request any test you will not be invited for automatically"
            - name: Arranging screening for someone you care for
              description: |-
                ## Purpose
                People with dementia, a learning disability or serious illness are much less likely to be screened, often because invitations go unanswered or the appointment feels impossible. As a carer you can track their invitations, ask for adjustments and support a decision about whether screening is right for them, within the consent rules where you live.

                ## Milestones
                1. The person's eligible programmes and next due dates listed.
                2. Their wishes about screening discussed with them as far as possible.
                3. Adjustments requested and any consent or best-interests process followed.
                4. Each due screening either completed or a recorded decision not to proceed.

                ## Notes
                Being a carer does not automatically give you the right to consent for someone else. Ask the practice what applies in their situation.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The person you care for has a screening calendar, and every due screening is either done or has a recorded decision made with them and their clinician."
                cadence: rolling
              tasks:
                - "List the screening programmes the person is eligible for"
                - "Talk with them about how they feel about each screening"
                - "Ask their practice about adjustments and consent arrangements"
                - "Check the person's screening dates and any new letters with them @recurring(quarterly)"
            - name: Cervical screening around pregnancy and birth
              description: |-
                ## Purpose
                Cervical screening is often postponed during pregnancy and resumed some weeks after birth, but the postponed test is easy to forget amid feeds and sleepless nights. Noting the delay and the date to rebook keeps the cycle intact without adding to a busy time.

                ## Milestones
                1. Whether screening is due during the pregnancy confirmed with your midwife or practice.
                2. The recommended time to rebook after birth written down.
                3. A reminder set for that date.
                4. The postponed test completed and the cycle back on schedule.

                ## Notes
                Tell the midwife about any previous abnormal results, as these sometimes change the plan during pregnancy.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A screening postponed for pregnancy is rebooked at the recommended time after birth and completed, with the result filed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your midwife whether cervical screening falls due during pregnancy"
                - "Note how long after birth to rebook the test"
                - "Set a reminder for that rebooking date"
                - "Book and attend the postponed screening"
            - name: Cervical screening after a hysterectomy
              description: |-
                ## Purpose
                Whether you still need cervical screening after a hysterectomy depends on whether the cervix was removed and why the operation was done. Many people are removed from the programme automatically, which is right for some and wrong for others, so it is worth confirming your own position in writing.

                ## Milestones
                1. The type of hysterectomy and its reason confirmed from your discharge letter.
                2. Your clinician's advice on further screening recorded.
                3. Any vault smear or follow-up test booked if advised.
                4. Your screening calendar updated to match.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your clinician's advice on cervical screening after hysterectomy is recorded, with any advised follow-up test booked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your hysterectomy discharge letter or operation note"
                - "Check whether the cervix was removed and why the operation was done"
                - "Ask your clinician whether you still need cervical screening"
                - "Update your screening calendar with the answer"
            - name: Encouraging a reluctant partner or parent to book
              description: |-
                ## Purpose
                Fear, embarrassment and a sense of being fine are the usual reasons people ignore invitations, and nagging tends to harden the refusal. A calm conversation that asks what puts them off, offers practical help such as a lift or company, and respects their final decision works far better.

                ## Milestones
                1. Their main reason for not booking understood, in their words.
                2. One practical barrier removed, such as transport, time or a difficult call.
                3. Reliable information shared without pressure.
                4. Their decision respected and, if they agree, the screening booked.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A conversation held about the overdue screening, one practical barrier removed, and their decision recorded whatever it was."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask them what puts them off booking, and listen"
                - "Offer one practical help such as a lift or making the call together"
                - "Share the official leaflet rather than your own summary"
                - "Leave the decision with them and agree when to talk again"
            - name: Screening when you work shifts or away from home
              description: |-
                ## Purpose
                Night workers, offshore and rotating crews, long-haul drivers and people who split time between two homes often miss invitations or kits because they are elsewhere when they arrive. Routing post to a reliable address and booking clinics around your rotation keeps screening on time without fighting your schedule.

                ## Milestones
                1. The address where kits and letters will reliably reach you agreed with the practice.
                2. Your rotation pattern compared with typical clinic opening times.
                3. Each due screening booked into an off-rotation block.
                4. No kit or invitation missed for a full year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full year with every screening invitation and kit received at a reliable address and completed within its window."
                cadence: rolling
              tasks:
                - "Decide which address will reliably receive your screening post"
                - "Ask the practice to use that address and your mobile for reminders"
                - "Book due screenings into your next block of time off"
                - "Check that kits and letters are going where you will be @recurring(quarterly)"
            - name: Higher-risk bowel surveillance schedule
              description: |-
                ## Purpose
                Anyone with certain polyps found before, long-standing inflammatory bowel disease or an inherited condition such as Lynch syndrome is often moved off the standard kit onto regular colonoscopy. These surveillance intervals are set by the specialist team and are easy to lose track of after a clinic changes or a letter goes missing.

                ## Milestones
                1. The reason you are on surveillance and the interval set by your specialist written down.
                2. The date of your last colonoscopy and the next one due recorded.
                3. The responsible clinic and its contact details on file.
                4. Each surveillance colonoscopy attended on time, with findings recorded.

                ## Notes
                If you are on surveillance, ask whether you should still return the standard home kits or whether the colonoscopy replaces them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Your bowel surveillance interval, last procedure date and next due date are recorded, and the next colonoscopy is booked on time."
                cadence: cyclic
              tasks:
                - "Write down why you are on bowel surveillance and the interval set"
                - "Record the date of your last colonoscopy and its findings"
                - "Save the surveillance clinic's contact details"
                - "Confirm the date of your next surveillance colonoscopy @recurring(yearly)"
            - name: Enhanced breast surveillance for higher risk
              description: |-
                ## Purpose
                People with a known gene change such as BRCA, a strong family history or chest radiotherapy when young may be offered breast screening earlier and more often, sometimes with yearly MRI as well as mammograms. Managing two imaging schedules, their bookings and their results takes more organisation than the standard programme.

                ## Milestones
                1. Your surveillance plan, including which scans, how often and until what age, written down from the specialist letter.
                2. Each scan's next due month on the screening calendar.
                3. Every scan booked before its due month and attended.
                4. Results from both types of imaging filed together.

                ## Notes
                Decisions about genetic testing and risk-reducing surgery belong with family medical history and your specialist team. This project keeps the agreed surveillance running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Your enhanced surveillance plan is written down and every scheduled MRI and mammogram for the year is attended with results filed."
                cadence: cyclic
              tasks:
                - "Copy your surveillance plan from the specialist letter"
                - "Add each scan's due month to the screening calendar"
                - "Book the yearly surveillance scans before the month they are due @recurring(yearly)"
                - "File each scan result beside the others"
            - name: Escalating a lost sample or delayed result
              description: |-
                ## Purpose
                Occasionally a sample is lost, a result is never sent or a recall appointment does not arrive, and the system has no easy way of noticing. Knowing who to contact in what order, keeping a dated record of each call and using the formal complaints route if needed gets the problem fixed and prevents it repeating for others.

                ## Milestones
                1. The chain of contacts written down: practice, programme helpline, then the complaints or patient advice service.
                2. Every call and message about the problem logged with date, name and outcome.
                3. A repeat test or the missing result secured.
                4. A formal complaint or feedback submitted if the delay caused harm or worry.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The lost or delayed result is resolved, with a dated log of every contact and any formal feedback submitted recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down who to contact first, second and third about the problem"
                - "Log each call with the date, the name and what was promised"
                - "Ask for a repeat test or the missing result in writing"
                - "Ask the agent to draft a formal complaint if the delay is not resolved"
---

# Cancer Screening Schedule

This area is for any adult who wants their bowel, breast, cervical, prostate, lung and skin screening to happen on time instead of by luck, and for the people who help a partner or parent do the same. It starts with the foundations (knowing what you are eligible for, finding your past dates, fixing the contact details invitations depend on and building one calendar), then the routines that answer each invitation and chase each result, the things worth understanding about kits, letters and overdiagnosis, the decisions such as the PSA test and private scans, the first appointments and recall clinics, the situations that change the rules, and finally the surveillance schedules people at higher risk live with.

What repeats is a monthly sweep of the post and patient app for screening letters, a monthly check for results that have gone quiet, a monthly breast awareness check, a quarterly tidy of the results folder, and a yearly look at each programme's next due date on or near your birthday. The Operational checklist, Meeting notes and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
