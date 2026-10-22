---
id: physical-health.specialist-referrals-waiting-lists
name: Specialist Referrals & Waiting Lists
description: "Referrals confirmed and tracked, a steady chase routine, symptoms logged while you wait, and clear decisions on moving hospital, paying privately or escalating a delay."
category: personal
version: 1.0.0
tags: [physical-health, specialist-referrals-waiting-lists, everyone, carer, referrals, waiting-lists, private-care, patient-advocacy]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Specialist Referrals & Waiting Lists
          description: "Chasing referrals, tracking waiting list positions, preparing questions and weighing private options, for anyone stuck waiting for specialist care."
          projects:
            - name: Confirming your referral was actually sent
              description: |-
                ## Purpose
                Referrals go missing more often than people expect: a letter is dictated but never sent, goes to the wrong department, or bounces back for missing information without anyone telling you. A ten-minute call to your GP surgery confirms the date it went, where it went and the urgency it was given, which is the starting point for every chase that follows.

                ## Milestones
                1. The date the referral was sent, confirmed by the surgery.
                2. The receiving hospital, department and any named clinician written down.
                3. The urgency category the referrer chose recorded.
                4. Any booking reference or tracking code the surgery holds noted.

                ## Notes
                Ask whether the referral went through an electronic booking system. If it did, you may have been given a reference and password to book or track it yourself, which is often faster than waiting for a letter.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The send date, destination, urgency and any reference number for your referral are written down, as confirmed by the surgery."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Call your GP surgery and ask the date your referral was sent"
                - "Ask which hospital and department received it"
                - "Ask what urgency category the referral was given"
                - "Write down any booking reference or tracking code you are given"
            - name: Referral tracker for every open referral
              description: |-
                ## Purpose
                Once two or three referrals, scans and follow-ups are in play, the details live in letters, texts and memory, and the one that stalls is the one nobody notices. A single tracker with one row per referral, showing dates, references and the next action, makes it obvious within a minute which wait is overdue.

                ## Milestones
                1. A tracker with columns for specialty, hospital, date referred, urgency, reference, contact number and next action.
                2. Every open referral, test and follow-up entered as its own row.
                3. An expected wait added to each row from published figures or what the hospital said.
                4. The tracker stored where a carer or relative could find it if you were unwell.

                ## Notes
                Keep one tracker only. Two half-updated lists, one on paper and one on the phone, are worse than either on its own.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One tracker holds a row for every open referral, test and follow-up, each with a date, reference and next action."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a table with one row per referral, test or follow-up"
                - "Copy dates and reference numbers in from every letter you hold"
                - "Add the expected wait for each row"
                - "Update the tracker with every call, letter and appointment change @recurring(monthly:28)"
            - name: Finding the right hospital contacts
              description: |-
                ## Purpose
                Switchboards transfer you around, and the person who can actually answer a question is usually the booking team for one specialty or the consultant's secretary. An hour spent finding direct numbers and email addresses saves many hours on hold across a long wait.

                ## Milestones
                1. The booking or referral management team's direct number and email found.
                2. The consultant's secretary or clinic coordinator identified, with contact details.
                3. Opening hours and the quietest time to call noted for each line.
                4. All contacts added to the referral tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Direct contact details for the booking team and the consultant's secretary for each open referral are saved in the tracker."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look on the hospital website for the specialty's appointments team"
                - "Ask the booking team who the consultant's secretary is"
                - "Note the hours each phone line is staffed"
                - "Save every contact into the referral tracker"
            - name: What your referral urgency category means
              description: |-
                ## Purpose
                Referrals are usually graded, for example as urgent suspected cancer, urgent or routine, and each grade comes with a very different expected wait. Knowing which one yours is, and the wait that goes with it in your health system, tells you whether a delay is normal or a sign something has gone wrong.

                ## Milestones
                1. The categories your health system uses listed with their target waits.
                2. Your own referral's category confirmed.
                3. The date by which you should have heard something written in the tracker.
                4. Your GP asked whether the category still fits if symptoms have changed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your referral's urgency category and the date by which you should expect contact are both recorded in the tracker."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the referral categories your health service publishes"
                - "Note the target wait attached to each category"
                - "Work out the date you should expect first contact by"
                - "Ask your GP whether your category still fits your symptoms"
            - name: Published waiting times for your specialty
              description: |-
                ## Purpose
                Most health systems publish waiting time figures by hospital and specialty, and the spread can be wide: one hospital may see most patients in twelve weeks while its neighbour takes forty. Looking up the figures for your specialty gives you a realistic expectation and the evidence you will need if you later ask to move.

                ## Milestones
                1. The official source of waiting time data for your country or region found.
                2. Typical and longest waits for your specialty at three to five nearby hospitals recorded.
                3. Your own hospital's position in that range noted.
                4. The month the data covers written down, since figures change regularly.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Published waits for your specialty at three or more nearby hospitals are recorded with the date of the data."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find where your health service publishes waiting times by hospital"
                - "Record waits for your specialty at three to five nearby hospitals"
                - "Note where your own hospital sits in that range"
                - "Save the figures and the month they cover in the tracker"
            - name: One-page symptom summary for the specialist
              description: |-
                ## Purpose
                First specialist appointments are often fifteen to twenty minutes, and much of that can go on reconstructing a history the referral letter covered in two lines. A single page with a dated symptom timeline, tests already done and treatments tried lets the specialist start from the full picture instead of the summary.

                ## Milestones
                1. A dated timeline of when symptoms started and how they have changed.
                2. Tests already done listed, with dates and where the results are held.
                3. Treatments tried listed, with how long each was used and what happened.
                4. The whole summary fitting on one side of paper, with two printed copies.

                ## Notes
                Leave guesses about the diagnosis off the page. Describe what happens, when, how often and what it stops you doing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page dated symptom summary with tests and treatments tried is printed and ready for the first appointment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the dates your main symptoms started and changed"
                - "Ask the agent to turn your notes into a one-page dated timeline"
                - "Add tests done and treatments tried, each with dates"
                - "Refresh the summary with anything new since the last update @recurring(monthly:22)"
            - name: Worsening symptoms plan while you wait
              description: |-
                ## Purpose
                A long wait is only safe if someone notices when things get worse, and the person best placed to notice is you. Agreeing with your GP which changes mean calling them back, which need same-day care and which need emergency services turns vague worry into a clear rule you can follow at two in the morning.

                ## Milestones
                1. A short list of changes that mean calling the GP back, agreed with your GP.
                2. Signs that need same-day urgent care or emergency services written down.
                3. The plan kept on the fridge and on your phone where others in the house can see it.
                4. A sentence ready to say on the phone so the call leads to a re-assessment.

                ## Notes
                The content of this plan comes from your clinician, not from searching online. Your job is to ask, write it down and keep it where you will see it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of warning signs and who to contact for each, agreed with your GP, is posted where the household can see it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Book a short call with your GP to agree the warning signs"
                - "Write the agreed signs and who to call for each"
                - "Put one copy on the fridge and one in your phone"
                - "Tell the people you live with where the plan is kept"
            - name: Permission for someone to speak on your behalf
              description: |-
                ## Purpose
                Carers and relatives often hit a wall when they call to chase, because the hospital cannot discuss you without your consent. Recording a named person with the surgery and each hospital department means the person helping you can get answers when you are too unwell, busy or tired to make the call.

                ## Milestones
                1. The person who will help named and their agreement given.
                2. Written consent recorded with your GP surgery.
                3. Written consent recorded with each hospital department you are waiting for.
                4. Where longer-term authority may be needed, a conversation about a legal power of attorney started with a suitable adviser.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written consent naming your helper is on file with your GP surgery and with every hospital department on your tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the person you trust whether they will help with chasing"
                - "Ask your GP surgery for their third-party consent form"
                - "Send written consent to each hospital department on your tracker"
                - "Give your helper the reference numbers and contact list"
            - name: Keeping your contact details current with the hospital
              description: |-
                ## Purpose
                Appointment letters sent to an old address or a number you no longer use can lead to a missed appointment, and missing one can mean being discharged back to the GP to start again. Checking that every hospital holds your current address, mobile and email, plus the dates you are away, closes the commonest avoidable gap in a wait.

                ## Milestones
                1. Address, mobile number and email confirmed with your GP surgery.
                2. The same details confirmed with each hospital booking team.
                3. Holiday and unavailable dates sent to each booking team in writing.
                4. A preferred contact method agreed, such as text plus letter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every hospital and the GP surgery hold your current address, mobile and email, confirmed by phone or in writing."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the address and mobile your GP surgery holds for you"
                - "Call each booking team to confirm your contact details"
                - "Email booking teams any dates you are away in the next three months"
                - "Recheck contact details with every hospital you are waiting for @recurring(yearly)"
            - name: Monthly chase call for each open referral
              description: |-
                ## Purpose
                Waiting lists are long, but a referral that has been mislaid or wrongly triaged looks the same from the outside as one that is simply queuing. A short monthly call or email for each open referral, logged with the date and the answer, catches lost referrals early and keeps you known to the booking team without becoming a nuisance.

                ## Milestones
                1. A fixed day each month set aside for chasing.
                2. Each open referral checked, with the answer logged.
                3. Any referral with no record at the hospital raised with the GP the same week.
                4. Three months of logged chases showing a steady pattern.

                ## Notes
                Booking lines are usually quietest mid-morning and mid-week. Monday mornings are the worst time to call.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open referral has a logged chase dated within the last five weeks, with the answer recorded."
                cadence: rolling
              tasks:
                - "Choose a regular mid-week morning for chasing"
                - "Call or email each booking team on your tracker @recurring(monthly:12)"
                - "Log the date, person and answer for every chase"
                - "Tell your GP the same week if a hospital has no record of you"
            - name: Weekly symptom log while waiting
              description: |-
                ## Purpose
                Clinicians can move people up a list when their condition changes, but only if the change is described with dates and specifics rather than a general sense that things are worse. Five minutes a week rating your main symptoms and noting anything new builds the record that supports a request for re-prioritisation.

                ## Milestones
                1. Two or three main symptoms chosen and rated on a simple 0 to 10 scale.
                2. A weekly entry kept for at least eight weeks.
                3. Any new symptom or sharp change flagged in the log.
                4. A summary of the trend ready to send to your GP or the specialist team.

                ## Notes
                Start from the **Metrics log** template. Rate on the same day each week so entries compare like with like, and add one line on what the symptoms stopped you doing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight consecutive weekly symptom ratings are logged, with any sharp change flagged and reported."
                cadence: rolling
              tasks:
                - "Pick the two or three symptoms that matter most and a 0 to 10 scale"
                - "Rate each symptom and note anything new @recurring(weekly:sun)"
                - "Mark any week where a symptom jumps by three points or more"
                - "Send the trend to your GP if it is clearly worsening"
            - name: Twice-weekly check of post, texts and patient portal
              description: |-
                ## Purpose
                Appointment offers can arrive by letter, text, email, voicemail or a patient app, sometimes with only a few days to accept. Checking each channel twice a week means a short-notice offer is not found after it has expired, and a missed reply does not count as a refusal.

                ## Milestones
                1. Every channel a hospital might use listed: post, text, email, voicemail and any patient app.
                2. Junk and spam folders included in the check.
                3. A twice-weekly check kept up for a month.
                4. Every offer accepted, declined or rearranged within two working days of arrival.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No appointment offer in a three-month period goes unanswered for more than two working days."
                cadence: rolling
              tasks:
                - "List every channel a hospital might contact you through"
                - "Add hospital email addresses to your safe senders list"
                - "Check post, texts, email, voicemail and the patient app @recurring(weekly:mon,thu)"
                - "Reply to any appointment offer within two working days"
            - name: Call and contact log for every hospital conversation
              description: |-
                ## Purpose
                When a booking clerk says you will be seen by March and March passes, a dated note of who said it is the only thing that carries weight. Logging every call, email and letter with the date, the name and the exact promise turns memory into evidence for an escalation or complaint.

                ## Milestones
                1. A log with columns for date, organisation, person, channel, what was said and promised follow-up.
                2. Contacts since the referral back-filled from emails, letters and memory.
                3. Promised call-backs flagged with the date they were due.
                4. A weekly scan of the log for promises that have lapsed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contact with a hospital or surgery in the last three months appears in the log with a date, a name and the outcome."
                cadence: rolling
              tasks:
                - "Set up a log with date, person, channel, what was said and promised action"
                - "Back-fill entries from emails and letters already received"
                - "Ask for the name of everyone you speak to on hospital calls"
                - "Scan the log for promised call-backs that have lapsed @recurring(weekly:fri)"
            - name: Responding to waiting list validation letters
              description: |-
                ## Purpose
                Hospitals regularly write to people on long lists to ask whether they still need the appointment, and not replying by the deadline can lead to removal. Knowing these letters exist, watching for them and replying the same week keeps the place you have already waited for.

                ## Milestones
                1. The hospital's validation process understood: how it contacts you and how long you have to reply.
                2. Every validation letter or text answered within its deadline.
                3. Each reply recorded in the contact log with a copy kept.
                4. Any removal from a list challenged the same week it is discovered.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every validation request received is answered within its deadline, with a copy of each reply kept in the contact log."
                cadence: rolling
              tasks:
                - "Ask the booking team whether they send waiting list validation letters"
                - "Note how many days you have to reply to one"
                - "Reply to any validation request within a week and keep a copy"
                - "Ask each booking team to confirm you are still on the list @recurring(quarterly)"
            - name: Getting on the short-notice cancellation list
              description: |-
                ## Purpose
                Many clinics fill same-week cancellations from a list of people who have said they can come at short notice. Asking to be added, and being reachable when they ring, can cut weeks or months from a routine wait.

                ## Milestones
                1. Each booking team asked whether it keeps a cancellation or short-notice list.
                2. Your name added, with the notice period you can manage.
                3. Cover for work, childcare or caring arranged in principle for a same-day call.
                4. The request repeated each month so it does not lapse.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "You are on the short-notice list for every open referral where one exists, with the request renewed in the last month."
                cadence: rolling
              tasks:
                - "Ask each booking team whether they keep a short-notice list"
                - "Tell them how many hours' notice you need"
                - "Line up back-up cover for work or caring duties for a same-day slot"
                - "Remind each team you are still available for cancellations @recurring(monthly:3)"
            - name: Quarterly GP review during a long wait
              description: |-
                ## Purpose
                A specialist wait of six months or more is long enough for symptoms, medicines and priorities to change, and your GP stays responsible for your care in the meantime. A planned review every three months keeps interim treatment going, updates the referral if needed and gives the GP the chance to upgrade its urgency.

                ## Milestones
                1. A GP review booked at least every three months while you wait.
                2. Your symptom log and contact log brought to each review.
                3. Any change in symptoms passed to the specialist team by the GP.
                4. Interim treatment, tests or pain relief reviewed at each visit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A GP review has taken place within the last three months of the wait, with any change sent on to the specialist team."
                cadence: cyclic
              tasks:
                - "Book a GP review for three months after your referral date"
                - "Bring your symptom trend and contact log to the review"
                - "Ask the GP to update the referral if things have changed"
                - "Book the next GP review before leaving the surgery @recurring(quarterly)"
            - name: Overdue follow-up appointment check
              description: |-
                ## Purpose
                Being seen once is not the end: follow-up clinics are often booked from a separate list, and a follow-up meant for six weeks can quietly drift to six months. A monthly comparison against what the clinic letter said catches the drift before it costs you treatment time.

                ## Milestones
                1. Every follow-up interval stated in clinic letters written in the tracker.
                2. A due-by date set for each follow-up.
                3. Any follow-up past its due date chased with the consultant's secretary.
                4. The outcome of each chase recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every follow-up in the tracker has a due-by date, and none is more than four weeks overdue without a logged chase."
                cadence: rolling
              tasks:
                - "Find the follow-up interval stated in each clinic letter"
                - "Write a due-by date for each follow-up in the tracker"
                - "Compare due-by dates with the appointments actually booked @recurring(monthly:20)"
                - "Email the consultant's secretary about any overdue follow-up"
            - name: Chasing tests the specialist ordered
              description: |-
                ## Purpose
                Scans, blood tests and other investigations ordered at a clinic are booked by different departments, and the next clinic appointment can be wasted if the results are not back. Tracking each request from order to result keeps the whole pathway moving, not just the first appointment.

                ## Milestones
                1. Each test ordered at clinic listed with the department that books it.
                2. A booking date secured for each test.
                3. Results confirmed as received by the specialist before the next appointment.
                4. Any test not booked within the expected time chased and logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every test ordered at your last clinic has a booking date or a logged chase, and results are confirmed received before the next appointment."
                cadence: rolling
              tasks:
                - "List each test ordered at your last clinic and who books it"
                - "Call the scanning or test department if no date arrives within a month"
                - "Check with the secretary that results reached the consultant"
                - "Go through open test requests on the tracker @recurring(monthly:8)"
            - name: How referral pathways work in your health system
              description: |-
                ## Purpose
                Referral routes differ between countries and even between regions: some go through a central referral hub, some straight to a consultant, some to a community service first. Understanding the route yours takes shows you where it can get stuck and who to ask at each step.

                ## Milestones
                1. The steps from GP to specialist in your system drawn as a simple flow.
                2. The owner and usual timeframe of each step noted.
                3. The point where your own referral currently sits identified.
                4. Where referrals most often stall in your area noted, from official sources or a patient advice service.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page flow of your referral route exists, with each step's owner and the current position of your referral marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's patient guide to referrals"
                - "Draw the steps from GP to specialist as a simple flow"
                - "Mark which organisation owns each step"
                - "Work out which step your referral is at today"
            - name: Your rights on waiting times and choice
              description: |-
                ## Purpose
                Many health systems give patients written rights, such as a maximum waiting time standard or a choice of hospital at the point of referral, but few people are told about them. Knowing what your system actually promises, and where it is written down, lets you ask for those rights calmly and specifically.

                ## Milestones
                1. The patient rights document or charter for your health system found.
                2. Any waiting time standards that apply to your referral written down.
                3. Your rights on choosing or changing hospital noted.
                4. The route for raising a concern when a standard is missed identified.

                ## Notes
                In England, for example, patients referred for consultant-led care have a published waiting time standard and, in many cases, a legal right to choose their provider. Check the equivalent where you live; private and insurer pathways have their own terms.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The waiting time standards and choice rights that apply to your referral are written down with the source document named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your health system's patient rights document or charter"
                - "Copy out any waiting time standard that applies to your referral"
                - "Note what the document says about choosing or changing hospital"
                - "Find where concerns about missed standards are raised"
            - name: Writing a clear chase email
              description: |-
                ## Purpose
                Booking teams handle hundreds of messages a day, and the ones actioned quickly have the reference number, the request and a reply-by date in the first three lines. Writing one good template now means each future chase takes five minutes instead of thirty.

                ## Milestones
                1. A template with subject line, identifiers, referral date and a single clear request.
                2. Space for the evidence: weeks waited, symptom change and previous contacts.
                3. A polite close asking for a reply by a stated date.
                4. The template used on one live chase and adjusted after the reply.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A saved chase email template has been sent on at least one live referral and revised after the reply."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Collect your hospital number, date of birth and referral reference"
                - "Ask the agent to draft a short chase email from your tracker details"
                - "Cut the draft to one clear request and a reply-by date"
                - "Save the final version as a reusable template"
            - name: Asking questions in a short specialist appointment
              description: |-
                ## Purpose
                Most people leave a specialist appointment remembering the question they did not ask. Ranking your questions so the top three come first, practising them aloud and writing answers as they are given means the time covers what you most need even when the clinic is running late.

                ## Milestones
                1. Every question collected in one running list over the weeks before the appointment.
                2. The list cut and ranked, with the top three marked.
                3. Questions on next steps, timescales and who to contact included.
                4. The top three practised aloud in under a minute.

                ## Notes
                A useful closing question: what should I do if I have not heard anything by a given date, and who should I contact?
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A ranked question list with the top three marked is printed with space for answers before the appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Start a running list of questions as they occur to you"
                - "Rank the list and star the three that matter most"
                - "Add questions on next steps, timing and who to contact"
                - "Practise saying your top three questions aloud in under a minute"
            - name: Reading a clinic letter
              description: |-
                ## Purpose
                After each appointment the specialist writes to your GP, usually copying you in, and the letter holds the plan, the follow-up interval and abbreviations that are hard to decode. Learning to read these letters means you notice when something agreed in the room is missing or wrong before it becomes a lost month.

                ## Milestones
                1. Common abbreviations in your specialty's letters looked up and listed.
                2. The plan, follow-up interval and actions for the GP picked out of your latest letter.
                3. Any mismatch with what you were told in the room noted.
                4. Questions about the letter taken to your GP or the consultant's secretary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your latest clinic letter has its plan, follow-up interval and GP actions marked, with any mismatch raised."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the clinic to copy you into every letter sent to your GP"
                - "Highlight the plan, follow-up interval and GP actions in your latest letter"
                - "Look up abbreviations you do not recognise"
                - "Raise anything that differs from what you were told"
            - name: Telephone and video specialist appointments
              description: |-
                ## Purpose
                Many first and follow-up appointments now happen by phone or video, and they go badly when the call comes from a withheld number at a bad moment or the camera cannot show the problem. A little preparation makes a remote appointment as useful as one in person.

                ## Milestones
                1. The appointment window, platform and calling number confirmed beforehand.
                2. A quiet, private space and a charged device ready.
                3. Photos or home readings the clinician may want prepared in advance.
                4. Next steps read back to the clinician before the call ends.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A remote appointment takes place with no missed call, and the next steps are written down and read back during it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm whether the appointment is by phone or video and the time window"
                - "Test the video link and camera the day before"
                - "Turn off settings that block withheld or unknown numbers for the day"
                - "Read back the next steps to the clinician before the call ends"
            - name: Learning the language of waiting lists
              description: |-
                ## Purpose
                Booking staff use terms like referral to treatment time, clock stops, pauses, validation and discharge after non-attendance, and each one affects your place in the queue. Knowing what they mean lets you follow what you are told and spot when your clock has been stopped without good reason.

                ## Milestones
                1. A short glossary of the waiting list terms your health service uses.
                2. The events that start, pause and stop the waiting clock understood.
                3. The rules on missed or cancelled appointments noted.
                4. Your own referral's clock status asked about and recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of waiting list terms exists, and the current clock status of your referral is recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your health service's glossary of waiting list terms"
                - "Write a one-line meaning for each term you might hear"
                - "Note what happens to your place if you miss or cancel"
                - "Ask the booking team whether your waiting clock is running"
            - name: Moving to a hospital with a shorter wait
              description: |-
                ## Purpose
                Where your system allows a choice of provider, moving a referral to a hospital with a much shorter wait can be the single most effective step you take. The decision deserves care, though: travel, follow-up visits and whether your place in the current queue carries over all matter.

                ## Milestones
                1. Two or three alternative hospitals with shorter published waits shortlisted.
                2. Travel time, likely follow-up visits and transport checked for each.
                3. Your GP asked whether moving is possible and what happens to your current place.
                4. A decision recorded, with the referral moved or a reason for staying.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on whether to move your referral is recorded with its reasons, and the referral is moved if you chose to."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist hospitals with shorter published waits for your specialty"
                - "Work out travel time and cost for each, including follow-ups"
                - "Ask your GP whether the referral can be moved and how"
                - "Record your decision and the reason in the tracker"
            - name: Deciding between paying privately and waiting
              description: |-
                ## Purpose
                Paying for a private first consultation can turn a year's wait into a fortnight, but the bill rarely stops there: tests, procedures and follow-ups each cost more, and the route back to publicly funded treatment varies. Setting the full likely cost against the expected wait and your symptoms gives a decision you will not regret halfway through.

                ## Milestones
                1. The expected public wait for each stage of care written down.
                2. Private prices for consultation, likely tests and the most likely treatment gathered.
                3. How you would return to the public list after a private diagnosis confirmed with your GP.
                4. A spending limit set and a decision recorded with the reasoning.

                ## Notes
                Start from the **Purchase decision** template. Ask any private clinic for a written estimate of the whole pathway, not only the consultation fee.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on private versus public care exists, with costs for each stage, a spending limit and the reasoning."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the expected public wait for each stage of your care"
                - "Get written prices for a private consultation and likely tests"
                - "Ask your GP how you would rejoin the public list after a private diagnosis"
                - "Set the most you could spend and record your decision"
            - name: What your health insurance covers for specialist care
              description: |-
                ## Purpose
                Health insurance through work or a personal policy can pay for specialist care, but cover depends on pre-authorisation, approved specialists, excess, outpatient limits and exclusions for conditions you already had. Reading the policy before booking avoids a bill the insurer refuses after the fact.

                ## Milestones
                1. The policy documents and member number located.
                2. Outpatient limits, excess and pre-existing condition exclusions noted.
                3. The insurer's pre-authorisation process and approved specialist list understood.
                4. Written confirmation of cover obtained before any booking.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written confirmation from the insurer of what is covered for this referral is filed before any private appointment is booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your policy documents and member number"
                - "Note the outpatient limit, excess and exclusions"
                - "Call the insurer to ask how pre-authorisation works"
                - "Get written confirmation of cover before you book anything"
                - "Check outpatient limits and exclusions again at each renewal @recurring(yearly)"
            - name: Comparing self-pay prices for consultation and tests
              description: |-
                ## Purpose
                Self-pay prices for the same first consultation and scan can differ several times over between clinics, and some offer fixed-price packages that include tests. Comparing three clinics on an identical list of items stops you paying for convenience you did not need.

                ## Milestones
                1. A list of items to price: consultation, likely tests and one follow-up.
                2. Three clinics with relevant specialists priced on the same items.
                3. Each specialist's registration and specialty checked on the national medical register.
                4. The best-value suitable option identified, with any package terms read.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written self-pay prices from three clinics for the same items are compared and one clinic is chosen or all are rejected."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the items you need priced: consultation, tests and follow-up"
                - "Ask three clinics for written self-pay prices for the same items"
                - "Check each specialist on the national medical register"
                - "Read the terms of any fixed-price package before choosing"
            - name: Asking about specialist advice instead of a full referral
              description: |-
                ## Purpose
                Some health systems let a GP send a question to a specialist and get written advice within days, without the patient joining a waiting list at all. For problems that may only need a test or a change of treatment, asking your GP whether this route exists can save months.

                ## Milestones
                1. Your GP asked whether a specialist advice service is available for your problem.
                2. The question the GP will send agreed with you.
                3. The specialist's written advice received and discussed with your GP.
                4. A decision made on whether a full referral is still needed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your GP has either sent a specialist advice request and discussed the reply with you, or confirmed the route is not available."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your GP whether they can request written specialist advice"
                - "Agree the exact question the GP will send"
                - "Book a follow-up with the GP for when the advice is due back"
                - "Decide with the GP whether a full referral is still needed"
            - name: Escalating a stalled referral through patient advice services
              description: |-
                ## Purpose
                When chasing the booking team gets nowhere, most hospitals have a patient advice or liaison service whose job is to resolve problems informally and quickly. Taking them a clear, dated summary usually gets a named person looking at your referral within days.

                ## Milestones
                1. The hospital's patient advice or liaison service contact found.
                2. A one-page summary of the referral, dates, chases and impact on daily life written.
                3. The case raised, with a named contact and timescale given.
                4. The outcome recorded, with the next step planned if nothing changes.

                ## Notes
                Keep the summary factual and short. A list of dates and promised actions that did not happen is more persuasive than a page of frustration.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The stalled referral is raised with the patient advice service, and a named contact and response date are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the hospital's patient advice or liaison service contact details"
                - "Write a one-page dated summary from your contact log"
                - "Send the summary and ask for a named contact and timescale"
                - "Record the outcome and the next step in the tracker"
            - name: Formal complaint about an unreasonable delay
              description: |-
                ## Purpose
                If informal routes have failed and the wait is affecting your health or work, a formal complaint creates a written record the organisation must answer within a set time. It works best when factual and specific: the dates, the standard missed, the effect on you and the remedy you are asking for.

                ## Milestones
                1. The organisation's complaints procedure and response deadlines read.
                2. A complaint letter with dates, standards missed, impact and requested remedy sent.
                3. An acknowledgement received and the response deadline noted.
                4. The response reviewed and, if unresolved, the route to an independent ombudsman noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A formal complaint with dates, impact and a requested remedy is sent and acknowledged, with the response deadline recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the complaints procedure on the hospital website"
                - "Ask the agent to draft a factual complaint from your contact log"
                - "Add the remedy you are asking for and send it by email"
                - "Note the response deadline in the tracker"
            - name: Travelling further for faster treatment
              description: |-
                ## Purpose
                Hospitals two or three hours away sometimes have a fraction of the local wait, and some health systems offer help with travel costs for patients who choose them. The trade-off is real, though: every follow-up, test and complication means the same trip, possibly with a companion.

                ## Milestones
                1. The number of visits likely across the whole pathway estimated with the clinic.
                2. Travel cost and time per visit worked out, including any companion.
                3. Any travel cost help available in your system checked.
                4. A decision recorded on whether the shorter wait is worth the travel.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on travelling for treatment, with the estimated number of visits and total travel cost written beside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the distant clinic how many visits the pathway usually takes"
                - "Work out travel time and cost per visit, including a companion"
                - "Check whether your health system helps with travel costs"
                - "Record whether the shorter wait outweighs the travel"
            - name: Asking for a second opinion
              description: |-
                ## Purpose
                If a specialist's plan does not fit your symptoms, or you are told nothing more can be done, a second opinion is a normal request rather than an insult. Knowing how to ask, through your GP or the specialist, and what to send, makes it quicker and better received.

                ## Milestones
                1. Your reason for wanting a second opinion written in two or three sentences.
                2. The route for requesting one in your system confirmed with your GP.
                3. Letters and results from the first specialist gathered for the second.
                4. The second opinion received and the two plans compared with your GP.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A second opinion is requested through a confirmed route, received, and compared with the first plan in a GP appointment."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your reason for a second opinion in three sentences"
                - "Ask your GP how second opinions are arranged where you live"
                - "Request copies of the first specialist's letters and results"
                - "Book a GP appointment to compare the two plans"
            - name: Preparing for the first specialist appointment
              description: |-
                ## Purpose
                The first appointment sets the pathway for months, and turning up without your medicines, history or questions can mean a second wait for information that could have been in your bag. A prepared folder, ready a week ahead, makes those fifteen minutes count.

                ## Milestones
                1. The appointment confirmed by phone, with building and clinic name checked.
                2. Symptom summary, current medicine list and question list printed.
                3. The clinic asked whether results from tests done elsewhere will be visible to the specialist.
                4. A folder packed a week ahead with letters, summary and questions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You attend the first specialist appointment with a printed summary, medicine list and ranked questions in one folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Call to confirm the appointment time, clinic and building"
                - "Ask whether the specialist can see results from tests done elsewhere"
                - "Print your symptom summary, medicine list and questions"
                - "Pack the appointment folder a week ahead"
            - name: Appointment day logistics and a companion
              description: |-
                ## Purpose
                Hospital car parks fill early, clinics run late, and a second pair of ears catches what an anxious patient misses. Planning transport, timing, food and who comes with you makes the day calmer and the appointment more useful.

                ## Milestones
                1. Transport booked or a route planned, with parking or drop-off sorted.
                2. A companion asked and briefed on their role: listening and writing things down.
                3. Time off or care cover arranged for the whole day, not just the slot.
                4. Snacks, regular medicines, a phone charger and the folder packed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Transport, a briefed companion and full-day cover are confirmed at least two days before the appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Plan the route and check parking or drop-off at the hospital"
                - "Ask someone to come with you and take notes"
                - "Arrange time off or care cover for the whole day"
                - "Pack snacks, medicines, a charger and the folder the night before"
            - name: Writing up the appointment within a day
              description: |-
                ## Purpose
                Memory of a specialist appointment fades fast and blurs with worry, so the plan you will act on for months needs writing down while it is fresh. A short write-up within 24 hours, checked against the clinic letter when it arrives, makes sure everyone knows who is booking what.

                ## Milestones
                1. A write-up of findings, decisions and next steps done within 24 hours.
                2. Each next step given an owner: you, the GP or the hospital.
                3. New tests and follow-ups added to the tracker.
                4. The write-up compared with the clinic letter and any discrepancy raised with the secretary.

                ## Notes
                Start from the **Meeting notes** template. If a companion came, write it up together while you both remember.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A dated write-up with an owner for each next step exists within 24 hours of the appointment and is checked against the clinic letter."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down findings, decisions and next steps the same day"
                - "Note who owns each next step and by when"
                - "Add any new tests or follow-ups to the tracker"
                - "Compare the write-up with the clinic letter when it arrives"
            - name: Diagnostic scan or test appointment day
              description: |-
                ## Purpose
                Scans and procedures often come with instructions about fasting, medicines, metal, contrast dye or a full bladder, and getting one wrong can mean the test is cancelled and rebooked weeks later. Reading the instructions the day the letter arrives leaves time to ask questions and rearrange anything that clashes.

                ## Milestones
                1. The preparation instructions read the day the letter arrives.
                2. Questions about medicines or fasting answered by the department before the day.
                3. How and when results will reach the specialist confirmed.
                4. The test attended with preparation followed.

                ## Notes
                If the instructions tell you to stop or change a medicine, confirm it with the department or your prescriber rather than guessing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The test is attended with its preparation followed, and the route and timing for results are written in the tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the preparation instructions the day the letter arrives"
                - "Call the department with any question about medicines or fasting"
                - "Ask how long results take and who receives them"
                - "Set reminders for any fasting or preparation the day before"
            - name: Results appointment after tests
              description: |-
                ## Purpose
                Results appointments can bring news that is hard to absorb, and important details get lost in the moment. Planning who comes with you, what to ask and how you will record the conversation means you leave with the facts and the next steps, not just an impression.

                ## Milestones
                1. A companion arranged, or permission asked to record the conversation.
                2. Questions prepared for each possible outcome: clear, unclear or needing treatment.
                3. Copies of the results requested for your own records.
                4. Next steps, timescales and a named contact written down before leaving.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You leave the results appointment with written next steps, timescales, a named contact and a request for copies of results."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask someone to come with you to the results appointment"
                - "Write questions for a clear, an unclear and a worrying result"
                - "Ask whether you may record the conversation on your phone"
                - "Ask for a named contact for questions after the appointment"
            - name: Chasing referrals for someone you care for
              description: |-
                ## Purpose
                Carers often become the coordinator for a parent, partner or adult child with several referrals, while also working and running a home. A set monthly slot, written consent on file and one shared tracker keep the chasing manageable and stop it spilling into every day of the week.

                ## Milestones
                1. Written consent to speak for the person confirmed with each department.
                2. Their referrals copied into a tracker you can both see.
                3. A fixed monthly chasing slot running for three months.
                4. A short update shared with the person and the wider family after each round.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every referral for the person you care for has a logged chase within the last five weeks and an update sent to them."
                cadence: rolling
              tasks:
                - "Confirm written consent is on file with each department you chase"
                - "Copy the person's referrals into a tracker you can both see"
                - "Make chase calls for the person you care for @recurring(monthly:15)"
                - "Send a short update to the person and family after each round"
            - name: Appointment pack for a relative with memory problems
              description: |-
                ## Purpose
                When the patient has dementia or memory difficulties, a specialist may hear a very partial history unless someone who knows them brings it. A written summary of recent changes, medicines and what matters to them, with a carer present, makes the appointment fair to the person being seen.

                ## Milestones
                1. A one-page summary of recent changes in memory, mood, mobility and daily routine.
                2. A current medicine list checked against the packets in the house.
                3. A short note of what matters most to the person and how they communicate best.
                4. The clinic told in advance that a carer will attend and may need extra time.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A one-page carer summary and checked medicine list are handed to the specialist at the appointment, with extra time requested in advance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the changes you have seen in the last six months"
                - "Check the medicine list against the packets in the house"
                - "Write a few lines on what matters to the person and how they communicate"
                - "Ask the clinic in advance for a longer slot and to expect a carer"
            - name: Waiting for a child's specialist appointment
              description: |-
                ## Purpose
                Children's specialist waits can be long, and school, growth and development keep moving while families wait. Keeping a short monthly record of how the problem affects school, sleep and play, and telling the GP when it changes, helps the referral get the priority it needs.

                ## Milestones
                1. The child's referral confirmed, with urgency and expected wait recorded.
                2. A monthly note on school, sleep and daily life kept for the length of the wait.
                3. The school told about the referral and any support agreed.
                4. Any clear deterioration reported to the GP with the notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Monthly notes on the child's school, sleep and daily life exist for the whole wait, and any deterioration has been reported to the GP."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the child's referral urgency and expected wait with the GP"
                - "Tell the school about the referral and ask what support they offer"
                - "Note how the problem affected school, sleep and play this month @recurring(monthly:10)"
                - "Ask your child what they want the specialist to know"
            - name: Work arrangements for a long wait and appointments
              description: |-
                ## Purpose
                Specialist appointments often land at short notice and take half a day, and a long wait with symptoms can affect how you work. Agreeing with your employer how appointment time is handled, and what adjustments help in the meantime, removes the dread of asking every time.

                ## Milestones
                1. Your employer's policy on medical appointments read.
                2. A conversation held with your manager about likely appointments and short notice.
                3. Any adjustments agreed in writing, such as flexible hours or home working.
                4. Occupational health or a fit note requested where symptoms affect your work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreement with your manager on appointment time and any adjustments is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your employer's policy on time off for medical appointments"
                - "Book a short private conversation with your manager"
                - "Agree how short-notice appointments will be handled"
                - "Confirm the agreed arrangements by email afterwards"
            - name: Keeping your place when you move house
              description: |-
                ## Purpose
                Moving to a new area during a long wait raises a hard question: keep travelling back to the original hospital, or transfer and risk starting the queue again. Asking both hospitals how transfers are handled, before you move, protects the time you have already waited.

                ## Milestones
                1. The current hospital asked whether you can stay on its list after moving.
                2. The new area's waits for your specialty checked.
                3. Your new GP briefed on the open referral and its original start date.
                4. A decision recorded to stay, transfer or move with the referral.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on keeping or transferring each open referral, made before the move date, with the original referral date preserved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your current hospital whether you can stay on the list after moving"
                - "Look up waits for your specialty near your new address"
                - "Ask how a transfer would treat your original referral date"
                - "Brief your new GP on every open referral when you register"
            - name: Coordinating several referrals for complex conditions
              description: |-
                ## Purpose
                People with several conditions can end up with four or five specialists who never speak to each other, each waiting on results the others hold. Asking for one clinician to take the lead, and keeping a single view of all appointments and tests, cuts duplicated tests and clashing advice.

                ## Milestones
                1. All specialists, their departments and next appointments listed in one view.
                2. A lead clinician or care coordinator agreed with your GP.
                3. Each specialist told who else is involved and how to reach them.
                4. Appointment clashes and duplicated tests spotted and raised each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named lead clinician is agreed, and a single list of every specialist and appointment is kept current monthly."
                cadence: rolling
              tasks:
                - "List every specialist involved and when you next see each"
                - "Ask your GP who could act as lead clinician or care coordinator"
                - "Bring the full specialist list to every appointment"
                - "Check for clashing appointments and duplicate tests @recurring(monthly:5)"
            - name: Interpreter and accessibility arrangements
              description: |-
                ## Purpose
                If you need an interpreter, step-free access, a longer slot, a hearing loop or easy-read letters, these have to be booked ahead or the appointment may be wasted. Recording your needs on your hospital record once means they should be arranged for every visit, not argued for each time.

                ## Milestones
                1. Your communication and access needs written down in a few clear lines.
                2. The needs recorded on your GP and hospital records.
                3. An interpreter or adjustment confirmed before each appointment.
                4. Any visit where needs were not met reported to the patient advice service.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your access and communication needs are recorded on both GP and hospital records and confirmed before the next appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your communication and access needs in a few clear lines"
                - "Ask your GP surgery to add the needs to your referral and record"
                - "Ask each hospital booking team to flag the needs on your file"
                - "Confirm the interpreter or adjustment a week before each visit"
            - name: Annual review of everything you are waiting for
              description: |-
                ## Purpose
                Over a year, referrals pile up: some resolved, some forgotten, some no longer needed. A yearly pass through the tracker closes finished rows, revives stalled ones and checks that every wait still matches your health and priorities.

                ## Milestones
                1. Every row in the tracker marked open, closed or no longer needed.
                2. Referrals no longer needed formally withdrawn so the slot goes to someone else.
                3. Stalled referrals given a fresh chase or escalation.
                4. A short note of what changed this year added to the top of the tracker.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every referral in the tracker is marked open, closed or withdrawn within the last twelve months, with stalled ones re-chased."
                cadence: cyclic
              tasks:
                - "Mark every tracker row as open, closed or no longer needed @recurring(yearly)"
                - "Withdraw any referral you no longer need"
                - "Re-chase or escalate any referral that has stalled"
                - "Write a short note of what changed this year"
            - name: Closing the loop on discharge back to your GP
              description: |-
                ## Purpose
                Being discharged from a specialist clinic should come with a clear plan for your GP: what to monitor, when to re-refer and what to watch for. Checking that plan is in the discharge letter and understood by the surgery prevents the gap where nobody is following you up.

                ## Milestones
                1. The discharge letter received and read.
                2. Monitoring, re-referral criteria and warning signs picked out.
                3. The surgery confirmed as having actioned any monitoring the letter asks for.
                4. The referral row closed in the tracker with the date and outcome.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The discharge plan's monitoring and re-referral criteria are confirmed with the surgery, and the tracker row is closed with the outcome."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask for a copy of the discharge letter if one has not arrived"
                - "Pick out the monitoring, re-referral criteria and warning signs"
                - "Ask the surgery to confirm they have set up any monitoring"
                - "Close the row in the tracker with the date and outcome"
            - name: Measuring your wait against the published standard
              description: |-
                ## Purpose
                A complaint or request to move hospital lands better with numbers: the date your clock started, weeks waited, the standard that applies and how far past it you are. Keeping that count accurate, including any pauses, gives you a precise case rather than a frustrated one.

                ## Milestones
                1. The clock start date for each referral confirmed with the hospital.
                2. Any pauses or restarts noted with the reason given.
                3. Weeks waited calculated against the applicable standard each month.
                4. The figure used in at least one chase, escalation or move request.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each open referral shows its clock start date, weeks waited and the gap to the standard, updated within the last month."
                cadence: rolling
              tasks:
                - "Ask the hospital to confirm the clock start date for each referral"
                - "Note any pause or restart and the reason you were given"
                - "Recalculate weeks waited against the standard @recurring(monthly:18)"
                - "Quote the figure in your next chase or escalation"
            - name: Personal referral playbook for next time
              description: |-
                ## Purpose
                After a long referral, most people know exactly what they would do differently: which number worked, which email got answers, when to escalate sooner. Writing it down as a short playbook makes the next referral, yours or a relative's, faster from day one.

                ## Milestones
                1. The contacts and routes that actually got answers listed.
                2. The points where you waited too long before escalating noted.
                3. A two-page playbook covering first week, monthly routine and escalation.
                4. The playbook shared with the relatives most likely to need it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page referral playbook exists and has been shared with at least one relative or carer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the contacts and routes that actually got you answers"
                - "Note where you should have escalated sooner"
                - "Ask the agent to shape your notes into a two-page playbook"
                - "Share the playbook with relatives who may need it"
---

# Specialist Referrals & Waiting Lists

This area is for anyone who has been referred to a specialist and is now waiting, and for the carers who end up doing the chasing for someone else. It starts with the foundations (confirming the referral exists, one tracker, the right contacts, a symptom summary and a plan for things getting worse), then the routines that keep a long wait moving, the skills of reading letters and asking good questions, the decisions about moving hospital, paying privately or escalating, the appointment days themselves, the situations that change the picture for carers, parents and people with several conditions, and finally the work of an experienced self-advocate.

What repeats is a monthly chase for each open referral, a weekly symptom rating, a twice-weekly check of letters and messages, a quarterly GP review and a yearly look at everything still open. The Metrics log, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
