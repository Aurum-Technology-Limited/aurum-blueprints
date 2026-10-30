---
id: mental-wellbeing.therapy-counselling-journey
name: Therapy & Counselling Journey
description: "A therapist chosen with care, sessions prepared for and reflected on, homework and progress tracked, and a planned, evidence-based decision about when therapy has done its job."
category: personal
version: 1.0.0
tags: [mental-wellbeing, therapy-counselling-journey, everyone, therapy, counselling, finding-a-therapist, talking-therapy]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - meeting-notes
    - habit-tracker
    - metrics-log
    - reading-queue
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Therapy & Counselling Journey
          description: "Finding the right therapist, preparing for sessions, tracking insights and homework, and deciding when therapy has done its job."
          projects:
            - name: Written goals for starting therapy
              description: |-
                ## Purpose
                Therapists almost always open by asking what brings you here, and people who arrive with only a vague sense of feeling stuck often spend the first three sessions working it out. Writing half a page on what is hard right now, what you have already tried and what would be different if therapy worked gives any therapist a head start and helps you judge fit at consultation. It also becomes the baseline you measure progress against later.

                ## Milestones
                1. A half-page note describing what is hard right now, in your own words.
                2. A list of what you have already tried, including any past therapy, and what helped or did not.
                3. Three things that would look different in six months if therapy worked.
                4. The note saved where you can reach it before consultation calls and first sessions.

                ## Notes
                Goals often change once therapy starts, and that is normal. Write them anyway: a rough aim is easier to revise than a blank page.

                Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated goals note covering current difficulties, past attempts and three hoped-for changes exists and was reread before the first consultation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five sentences on what feels hardest at the moment"
                - "List any past therapy or self-help and what you made of it"
                - "Describe three changes you would notice if therapy worked"
                - "Save the goals note somewhere you can open it before calls"
            - name: Therapy funding and budget plan
              description: |-
                ## Purpose
                Weekly private sessions add up to a serious monthly cost, and many people stop after six sessions because the money runs out rather than because the work is done. Mapping every route first, public services, workplace assistance programmes, insurance cover, sliding-scale places and low-cost training clinics, shows how many sessions you can realistically afford and for how long. Knowing that number before you start means you can tell a therapist up front and plan the work around it.

                ## Milestones
                1. Every funding route open to you listed with what it covers and any session limit.
                2. A monthly amount you can spend on therapy without strain, written down.
                3. The number of sessions that amount buys over six and twelve months worked out.
                4. A decision recorded on which route, or mix of routes, to use first.

                ## Notes
                Workplace assistance programmes often offer a handful of free sessions and are confidential from your employer, but check the session cap and whether you can continue privately with the same counsellor afterwards.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written funding plan names the route chosen, the monthly budget and the number of sessions it covers over twelve months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your employer offers an assistance programme with free sessions"
                - "Read your health insurance policy for therapy and mental health cover"
                - "Search for low-cost, sliding-scale or training clinic counselling near you"
                - "Set a monthly therapy budget and count the sessions it buys"
                - "Recheck funding routes and session costs against your budget @recurring(yearly)"
            - name: Comparing the main types of talking therapy
              description: |-
                ## Purpose
                Cognitive behavioural therapy, psychodynamic work, person-centred counselling, acceptance and commitment therapy, and systemic or integrative approaches feel very different from the chair, and the right one depends on what you want help with and how you like to work. An evening spent learning what each involves, how structured it is, how long it usually lasts and what the evidence suggests for problems like yours lets you ask better questions instead of picking whoever has a free slot. Your doctor or a therapist can then confirm or challenge your first choice.

                ## Milestones
                1. A one-line summary of five or six therapy types in your own words.
                2. For each type, a note on typical length, structure and how much homework it involves.
                3. Two approaches marked as the closest fit for your written goals.
                4. Questions about those two approaches ready for consultation calls.

                ## Notes
                Many therapists describe themselves as integrative, blending several approaches. Ask what that means in practice for someone with your goals.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of at least five therapy types exists, with two preferred approaches chosen and linked to your goals note."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain-language overview of the main talking therapies from a health service"
                - "Note how long and how structured each type usually is"
                - "Mark the two approaches that best match your goals note"
                - "Write three questions to ask a therapist about those approaches"
            - name: Therapist registration and credentials check
              description: |-
                ## Purpose
                In many countries anyone can call themselves a counsellor or therapist, so a professional title alone tells you little about training, supervision or how complaints are handled. Checking each candidate against a recognised professional register or licensing board confirms their training, that they receive clinical supervision and that there is somewhere to turn if something goes wrong. It takes ten minutes per name and is the single best filter on a shortlist.

                ## Milestones
                1. The recognised registers or licensing boards for therapists in your country identified.
                2. Every shortlisted therapist found on a register, with their membership number noted.
                3. Anyone not on a register removed or asked directly about their accreditation.
                4. The complaints route for your chosen therapist's professional body saved.

                ## Notes
                Protected titles differ by country. Psychologist is often a protected title; counsellor and psychotherapist sometimes are not.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every therapist on your shortlist has a recorded registration number with a recognised body, or has been removed from the list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find which professional registers cover therapists where you live"
                - "Look up each shortlisted therapist on the relevant register"
                - "Note membership numbers beside each name on your shortlist"
                - "Save the complaints page for your therapist's professional body"
                - "Confirm your therapist's registration is still current @recurring(yearly)"
            - name: Shortlist of five possible therapists
              description: |-
                ## Purpose
                Therapist directories can return hundreds of names, and scrolling profiles late at night leads to choosing on photos and availability alone. Filtering by what matters, approach, experience with your kind of difficulty, location or online, fee and evening availability, produces a list of five people worth contacting. Experience with your specific concern counts for more than years in practice.

                ## Milestones
                1. Your five must-have criteria written down before searching.
                2. Two directories or referral sources searched with those filters.
                3. Five therapists listed with approach, specialism, fee and availability.
                4. Each name checked against a professional register.

                ## Notes
                Start from the **Person** template for each therapist you shortlist, so contact details and call notes stay together.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of five registered therapists exists, each with approach, fee, availability and relevant experience recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the five criteria that matter most to you in a therapist"
                - "Search two therapist directories using those filters"
                - "Record approach, fee, specialism and availability for five names"
                - "Ask the agent to compare the five profiles side by side against your criteria"
            - name: Consultation calls with three therapists
              description: |-
                ## Purpose
                Research on therapy outcomes repeatedly finds that the working relationship between client and therapist matters as much as the method. Most therapists offer a free 15 to 20 minute call, and speaking to three of them with the same questions turns a hunch into a comparison. How you felt during each call is as useful as what was said.

                ## Milestones
                1. A list of six to eight questions used on every call.
                2. Three calls completed within two weeks.
                3. Brief notes after each call on the answers and how comfortable you felt.
                4. One therapist chosen and a first session booked, with the others thanked.

                ## Notes
                Useful questions include how they would approach your difficulty, how they review progress, what happens when you want to stop and what they charge for missed sessions.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three consultation calls held using the same question list, and a first session booked with the therapist chosen."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write six questions to ask every therapist you speak to"
                - "Email or call three shortlisted therapists to book consultations"
                - "Write notes within an hour of each call"
                - "Book a first session with the therapist you choose"
                - "Send a short thank-you to the therapists you did not choose"
            - name: First session preparation sheet
              description: |-
                ## Purpose
                First sessions often include an assessment: questions about your history, health, relationships, alcohol and drug use, sleep and any risk to yourself. Nerves make dates and details hard to recall, so a one-page sheet prepared in advance lets you spend the hour talking rather than searching your memory. It also keeps the questions you want to ask the therapist from slipping away.

                ## Milestones
                1. A one-page sheet listing key life events, current medicines and past help received.
                2. Your goals note summarised in three lines at the top.
                3. Three questions for the therapist written at the bottom.
                4. Practical details confirmed: address or video link, fee, payment method and start time.

                ## Notes
                You decide how much to share in a first session. It is fine to say a topic is something you want to come back to later.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page preparation sheet with history, medicines, goals and questions existed before the first session and was taken into it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List major life events and dates you may be asked about"
                - "Write down current medicines and any past diagnoses or therapy"
                - "Copy a three-line version of your goals to the top of the sheet"
                - "Confirm the address or video link, fee and start time"
            - name: Therapy agreement and boundaries understood
              description: |-
                ## Purpose
                Every therapist works to an agreement covering confidentiality and its limits, cancellation fees, contact between sessions, how notes are kept and what happens in an emergency. Reading it carefully and asking about anything unclear prevents the two classic shocks: a full fee for a session missed through illness, and discovering late that confidentiality has limits around risk to you or others. Clear terms also make it easier to speak openly.

                ## Milestones
                1. The written agreement or terms read in full and saved.
                2. The limits of confidentiality explained by the therapist and understood.
                3. The cancellation notice period and fee noted where you plan your week.
                4. The agreed way to contact the therapist between sessions written down.

                ## Notes
                Therapists are not an emergency service. Ask what they suggest you do if you are in crisis between sessions, and keep that information with your agreement.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The therapy agreement is saved, with confidentiality limits, cancellation terms and between-session contact arrangements noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your therapist for their written agreement or terms"
                - "Note the cancellation period and fee where you plan your week"
                - "Ask in which situations confidentiality would have to be broken"
                - "Write down how and when you can contact them between sessions"
            - name: Private space for online therapy sessions
              description: |-
                ## Purpose
                Video and phone sessions are only as good as the privacy around them, and the fear of a housemate or child overhearing quietly stops people saying what matters. Choosing a room, a back-up spot, headphones and a reliable connection in advance, and agreeing a do-not-disturb signal with the household, makes online therapy feel as safe as a consulting room. Some people use a parked car or a booked meeting room when home is never private.

                ## Milestones
                1. A main private spot and one back-up spot chosen.
                2. Headphones, charger and connection tested on the platform the therapist uses.
                3. A do-not-disturb arrangement agreed with the people you live with.
                4. Two online sessions held in the chosen space without interruption.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A private session space with tested equipment and an agreed household signal has been used for at least two online sessions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a main and a back-up private spot for sessions"
                - "Test headphones and connection on the therapist's video platform"
                - "Agree a do-not-disturb signal with the people you live with"
                - "Keep a glass of water and tissues within reach of your session spot"
            - name: Referral through your doctor or public service
              description: |-
                ## Purpose
                Free or subsidised therapy through a public health service usually starts with a referral from your doctor or a self-referral form, and waits are often measured in months. Getting the referral in early, even if you plan to see someone privately meanwhile, keeps the free option open and secures a place in the queue. Being specific about how your difficulties affect sleep, work and relationships helps the service assess the right level of support.

                ## Milestones
                1. The self-referral route or a doctor appointment for talking therapy identified.
                2. A referral submitted with a clear description of difficulties and their impact.
                3. Confirmation received, with the estimated wait and the service's number saved.
                4. The date of any assessment call recorded.

                ## Notes
                If things become urgent while you wait, contact your doctor or an urgent mental health line rather than waiting for the assessment.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A referral to a public talking therapy service is submitted and confirmed, with the expected wait and contact number recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your local service accepts self-referrals online"
                - "Write a short paragraph on how your difficulties affect daily life"
                - "Submit the referral form or book a doctor appointment to request one"
                - "Save the confirmation, expected wait and service phone number"
            - name: Waiting list support plan
              description: |-
                ## Purpose
                Months on a waiting list can feel like being told to cope alone, and some people deteriorate or lose their place without realising. A plan for the wait, with a monthly check on your position, any self-help material the service recommends, people to lean on and a clear point at which to go back to your doctor, keeps you connected and ready to start. Many services offer guided self-help or groups while you wait.

                ## Milestones
                1. Any interim support the service offers, such as guided self-help or groups, asked about.
                2. Two or three people told you are waiting and how they can help.
                3. A written trigger for contacting your doctor sooner if things get worse.
                4. Your place on the list confirmed each month until the first appointment.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your waiting-list position is confirmed monthly, interim support has been requested and a written rule says when to go back to your doctor."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the service what support it offers while you wait"
                - "Tell two people you trust that you are on a waiting list"
                - "Write down what would make you call your doctor before the appointment"
                - "Call the service to confirm your place and estimated wait @recurring(monthly:8)"
            - name: Pre-session check-in notes
              description: |-
                ## Purpose
                Arriving with nothing in mind often means recounting the week's events while the thing that actually mattered surfaces in the last five minutes. Ten minutes the day before, noting what stood out, what you avoided and what you want from the hour, gives the session a direction. Therapists generally welcome this, and the note is easy to set aside if something more pressing comes up.

                ## Milestones
                1. A short note with three prompts: what stood out, what you avoided, what you want from the session.
                2. A reminder set for the day before each session.
                3. Notes written before at least eight consecutive sessions.
                4. A habit of opening the session with one sentence from the note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive sessions each have a dated pre-session note covering what stood out, what was avoided and the aim for the hour."
                cadence: rolling
              tasks:
                - "Create a three-prompt pre-session note"
                - "Set a reminder for the evening before your session day"
                - "Write the pre-session note before your appointment @recurring(weekly)"
                - "Open the next session by reading one line from your note"
            - name: After-session reflection notes
              description: |-
                ## Purpose
                Most of what happens in a session fades within a day or two, including the phrase that landed or the pattern your therapist named. Writing five lines within 24 hours, covering what you talked about, what struck you, what you are taking away and anything left unsaid, builds a record you can reread before reviews and at the end of therapy. It also shows the slow changes that are invisible week to week.

                ## Milestones
                1. A private place to keep reflections, away from shared devices if privacy matters.
                2. Five-line reflections written within a day of each session.
                3. Twelve consecutive sessions reflected on.
                4. Themes that recur marked so they can be brought back to therapy.

                ## Notes
                Start from the **Meeting notes** template and keep the headings short. These notes are for you; they do not need to be well written.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive sessions each have a dated reflection written within 24 hours, with recurring themes marked."
                cadence: rolling
              tasks:
                - "Choose a private place to keep session reflections"
                - "Write five lines within a day of each session @recurring(weekly)"
                - "Mark any theme that has come up in three or more sessions"
                - "Note anything left unsaid to raise at the next session"
            - name: Therapy homework and practice tracker
              description: |-
                ## Purpose
                Many therapies, especially structured ones, set tasks between sessions: a worksheet, a behavioural experiment, a conversation to try or a practice to repeat. Without a list, homework gets remembered on the way to the next session and the therapist has to work with whatever you can recall. Tracking each assignment, what you did and what happened makes the next session concrete and shows which practices actually help.

                ## Milestones
                1. Every task agreed in session written down before you leave or that evening.
                2. A midweek check on whether homework has been started.
                3. A note of what happened, including when it was skipped and why.
                4. The tracker brought to each session for at least six weeks.

                ## Notes
                Start from the **Habit tracker** template. Skipped homework is useful information: bring the reason, not an apology.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive weeks of homework recorded with what was attempted and what happened, and the tracker reviewed in session."
                cadence: rolling
              tasks:
                - "Set up a homework tracker with columns for task, attempt and outcome"
                - "Write down each new task before you leave the session"
                - "Check midweek which homework is still untouched @recurring(weekly:thu)"
                - "Bring the tracker to the next session and read out one outcome"
            - name: Protecting the regular session slot
              description: |-
                ## Purpose
                Therapy works best with regularity, and the slot is usually the first thing sacrificed to a late meeting, a school pickup or a busy month. Treating the session as fixed, booking travel around it, telling the therapist about holidays early and arranging childcare cover, keeps the rhythm steady. A month of cancellations can undo the momentum of three months of work.

                ## Milestones
                1. The session time blocked as a recurring, non-movable appointment.
                2. Next month's sessions checked and any clashes resolved a month ahead.
                3. Known absences shared with the therapist at least four weeks in advance.
                4. No more than one cancellation in any three-month stretch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sessions are protected in the calendar a month ahead and no more than one has been cancelled in the last three months."
                cadence: rolling
              tasks:
                - "Block your session time as a recurring calendar appointment"
                - "Tell your therapist about holidays and work trips you already know about"
                - "Arrange regular cover for anything that clashes with sessions"
                - "Check next month's calendar for clashes with sessions @recurring(monthly:25)"
            - name: Monthly progress review against your goals
              description: |-
                ## Purpose
                Progress in therapy is uneven, and a hard few weeks can make it feel as if nothing has changed. Rereading your goals note once a month and rating each goal from 0 to 10, with one line of evidence, gives a steadier picture than the mood of the day. Bringing the ratings to a session opens a useful conversation about what to focus on next.

                ## Milestones
                1. Each goal from your goals note given a starting rating from 0 to 10.
                2. A monthly rating with one line of evidence per goal.
                3. Six months of ratings kept in one place.
                4. At least two monthly reviews discussed with your therapist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly ratings of each written goal exist, each with a line of evidence, and two have been discussed in session."
                cadence: rolling
              tasks:
                - "Give each written goal a starting rating from 0 to 10"
                - "Rate each goal and add one line of evidence @recurring(monthly:3)"
                - "Bring the review to session when a rating moves by two or more points"
                - "Rewrite any goal that no longer fits where you are now"
            - name: Therapy costs, receipts and claims record
              description: |-
                ## Purpose
                Session fees, late cancellation charges, insurance excesses and reimbursement claims add up quickly, and unclaimed receipts are money left on the table. A simple record of each session, its cost and any claim made shows the real monthly spend, lets you chase late reimbursements and keeps you honest against your budget. In some countries therapy costs can count towards health-related tax relief, so keep every receipt.

                ## Milestones
                1. A record with date, fee, payment method and claim status for each session.
                2. Receipts and invoices stored in one folder.
                3. Every eligible insurance or employer claim submitted within a month of the session.
                4. Monthly spend compared with the budget set in your funding plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every session in the last three months is logged with fee and receipt, and all eligible claims have been submitted."
                cadence: rolling
              tasks:
                - "Create a log for session dates, fees and claim status"
                - "Save each therapy invoice to one folder as it arrives"
                - "Submit outstanding claims and compare spend with budget @recurring(monthly:12)"
                - "Ask your insurer how long reimbursements usually take"
            - name: Outcome questionnaire scores log
              description: |-
                ## Purpose
                Many therapists and services use short standard questionnaires at regular intervals to track low mood, anxiety or general distress. Keeping your own copy of the scores, with the date and anything notable going on, lets you see trends across months and across therapists, not just within one service. The scores are a conversation starter with your therapist, not a diagnosis.

                ## Milestones
                1. Your therapist asked which measures they use and how often.
                2. A log with date, measure name, score and a context column.
                3. Scores recorded for at least six data points.
                4. A trend discussed with your therapist at a review.

                ## Notes
                Start from the **Metrics log** template. Ask your therapist what size of change they consider meaningful rather than interpreting scores alone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A log holds at least six dated questionnaire scores with context, and one trend has been discussed in session."
                cadence: rolling
              tasks:
                - "Ask your therapist which questionnaires they use and how often"
                - "Set up a log with date, measure, score and context"
                - "Copy in the latest scores with one line on what was happening @recurring(monthly:18)"
                - "Ask your therapist what size of change they treat as meaningful"
            - name: Quarterly review session with your therapist
              description: |-
                ## Purpose
                Weekly sessions rarely pause to ask whether the work is on track, so drift can go unnoticed for months. Agreeing to use part of one session every three months to look at goals, ratings, what has helped and what has not keeps both of you honest about direction and pace. It is also the natural moment to raise frequency, cost or a change of focus.

                ## Milestones
                1. A quarterly review agreed with your therapist early in therapy.
                2. Goal ratings, questionnaire scores and theme notes gathered beforehand.
                3. A short written summary of each review with any change agreed.
                4. Four reviews completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly review conversations held in twelve months, each with a written summary of what was agreed."
                cadence: cyclic
              tasks:
                - "Ask your therapist to build a review into every third month"
                - "Gather ratings, scores and themes before each review @recurring(quarterly)"
                - "Write a short summary of what you both agreed"
                - "Raise any change in frequency, cost or focus at the review"
            - name: Themes and insights index
              description: |-
                ## Purpose
                Over months, therapy produces insights that are easy to lose: the pattern in how you react to criticism, the link between a childhood rule and a current habit, a phrase your therapist used that helped. An index of themes, each with a short description and the dates it came up, turns scattered reflections into something you can reread on a hard day or when therapy ends. It also shows which themes have quietened.

                ## Milestones
                1. A themes index started with five to ten entries from your reflection notes.
                2. Each theme described in one or two sentences in your own words.
                3. The index updated monthly from new reflections.
                4. Themes that have eased marked as such.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A themes index holding at least eight entries, each with a description and session dates, updated within the last month."
                cadence: rolling
              tasks:
                - "Pull five recurring themes from your session reflections"
                - "Describe each theme in two sentences in your own words"
                - "Update the index from the month's reflections @recurring(monthly:22)"
                - "Ask the agent to group your reflection notes by theme and suggest new entries"
            - name: Testing session insights in daily life
              description: |-
                ## Purpose
                Insight on its own rarely changes much; the change comes from doing one thing differently on an ordinary Tuesday afternoon. Choosing one small, concrete experiment each month, based on something from therapy, and noting what happened links the consulting room to the rest of your life. Over a year that is twelve deliberate experiments, each one material for the next session.

                ## Milestones
                1. One experiment chosen each month and written as a specific action.
                2. What happened recorded, including surprises and setbacks.
                3. Each experiment discussed in session.
                4. Six experiments completed and the most useful kept as routines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly experiments drawn from therapy have been tried, recorded and discussed, with at least two kept as routines."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one insight from recent sessions to test in real life"
                - "Write the experiment as a specific action with a time and place"
                - "Record the month's experiment outcome and choose the next @recurring(monthly:15)"
                - "Bring each result to the following session"
            - name: Saying the hard thing in session
              description: |-
                ## Purpose
                Almost everyone in therapy has something they circle around for weeks: shame, a secret, anger at someone they love, or a thought that feels too strange to say aloud. Practising ways in, such as writing it down and handing it over, saying first that it is hard to say, or naming it in the first minute rather than the last, makes disclosure possible on your terms. Your therapist has very likely heard something similar before.

                ## Milestones
                1. One topic you have been avoiding named privately in writing.
                2. A way of starting chosen, such as reading from a note or saying there is something difficult.
                3. The topic raised in the first ten minutes of a session.
                4. A reflection written afterwards on how it felt and what changed.

                ## Notes
                Going at your own pace is legitimate. You can tell your therapist you want to raise something but need to take it slowly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An avoided topic has been raised in session using a planned opening, with a written reflection made afterwards."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write privately about one topic you have been avoiding"
                - "Choose an opening line or a note to hand to your therapist"
                - "Raise the topic within the first ten minutes of a session"
                - "Write how it felt afterwards and what you want to happen next"
            - name: Giving your therapist honest feedback
              description: |-
                ## Purpose
                Clients often hide disagreement, boredom or hurt from their therapist, then quietly stop attending. Telling a therapist that a comment stung, that an exercise feels pointless or that you want more challenge is part of the work, and repairing a misunderstanding together can itself be therapeutic. Practising feedback in small doses makes it easier when something bigger needs saying.

                ## Milestones
                1. One small piece of feedback given in a session, positive or critical.
                2. A disagreement or hurt raised within two sessions of it happening.
                3. The therapist's response noted, with whether it felt repaired.
                4. A personal rule written for when unresolved friction means considering a switch.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two pieces of direct feedback have been given in session, with the responses noted and a written rule about unresolved friction."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note one thing your therapist does that helps and say it aloud"
                - "Write down any moment in a session that felt off"
                - "Raise that moment at the next session"
                - "Write your rule for when friction means considering a change"
            - name: Understanding your therapist's formulation
              description: |-
                ## Purpose
                A formulation is the working map a therapist builds of how your difficulties developed and what keeps them going, and many clients never see it. Asking to go through it together, often as a diagram or short written summary, shows you the logic behind the approach and lets you correct anything that does not fit. It turns therapy from something done to you into a shared plan.

                ## Milestones
                1. Your therapist asked to share their formulation, usually after the first few sessions.
                2. The formulation written or drawn in your own words.
                3. Anything that does not fit discussed and corrected.
                4. The link between the formulation and the therapy plan understood.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written or drawn formulation, agreed with your therapist and checked against your experience, is saved with your notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your therapist whether they use a formulation and when they will share it"
                - "Draw the formulation in your own words after the session"
                - "Mark any part that does not match your experience"
                - "Ask how the formulation shapes the next stage of therapy"
            - name: Reading alongside therapy
              description: |-
                ## Purpose
                Books written by therapists for clients, on attachment, self-criticism, anxiety or relationships, can deepen what happens in sessions or offer language you have been missing. A short list agreed with your therapist avoids the trap of reading widely and diagnosing yourself, and gives you shared reference points. One chapter a week is plenty.

                ## Milestones
                1. Three or four recommendations from your therapist on a reading list.
                2. One chapter read each week with a note on what resonated.
                3. Two books finished and discussed in session.
                4. Books that did not fit set aside without guilt.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two therapist-recommended books finished within six months, each with notes and one discussion in session."
                cadence: rolling
              tasks:
                - "Ask your therapist for three books that fit your work together"
                - "Add the titles to a reading queue"
                - "Review the reading queue and choose the next book @recurring(monthly:28)"
                - "Bring one passage that resonated to a session"
            - name: Aftercare routine for heavy sessions
              description: |-
                ## Purpose
                Some sessions leave you raw, exhausted or flooded with memories, and going straight into a meeting, the school run or a crowded commute makes that worse. A planned aftercare routine, a short walk, a hot drink, a grounding exercise or a quiet half hour, gives the session time to settle. It is also worth telling your therapist when a session hits hard, so the pacing can be adjusted.

                ## Milestones
                1. Three or four aftercare activities chosen that fit your schedule and setting.
                2. A buffer of at least twenty minutes protected after sessions on heavy weeks.
                3. A note made of which activities actually help.
                4. Your therapist told when a session leaves you unsettled for more than a day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written aftercare routine of three or more activities has been used after at least four sessions, with notes on which help."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List four things that help you settle after an intense conversation"
                - "Plan a short walk route or quiet spot near where sessions happen"
                - "Try the routine after the next heavy session and note what helped"
                - "Tell your therapist if a session leaves you unsettled for more than a day"
            - name: Using the fifty-minute hour well
              description: |-
                ## Purpose
                Sessions are short, and it is common to spend the first twenty minutes warming up and the last five dropping the important thing just as time runs out. A few habits, naming the session's aim at the start, noticing when you deflect with humour or news, and asking for a two-minute summary at the end, help you get more from each hour. They matter most when sessions are capped by a service or a budget.

                ## Milestones
                1. The aim of the session named in the first five minutes, four sessions in a row.
                2. One personal deflection habit identified and mentioned to your therapist.
                3. A brief end-of-session summary requested or offered.
                4. A note on which habit made the biggest difference.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four consecutive sessions opened with a stated aim and closed with a summary, with your main deflection habit named."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the aim for your next session in one sentence"
                - "Ask your therapist what they notice you do when topics get difficult"
                - "Ask for or give a two-minute summary at the end of a session"
                - "Note which habit made the most difference after four sessions"
            - name: Deciding whether to switch therapist
              description: |-
                ## Purpose
                Sometimes the fit is wrong: you feel judged or dismissed, nothing has moved after three or four months, or you need a different specialism. Switching is common and acceptable, but it is worth separating a poor fit from the ordinary discomfort of therapy getting close to something hard. Raising it with your current therapist first often clarifies which it is.

                ## Milestones
                1. Specific reasons for considering a switch written down with examples.
                2. The concern raised with your current therapist in session.
                3. A decision recorded: stay with agreed changes, or move on.
                4. If moving on, an ending session held and a short summary requested for the next therapist.

                ## Notes
                Discomfort on its own is not a reason to switch, but feeling unsafe, dismissed or stuck for months is.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to stay or switch, made after discussing it with the current therapist, with an ending session held if switching."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write three specific examples of what is not working"
                - "Raise the concern with your therapist at the next session"
                - "Decide whether to stay with agreed changes or move on"
                - "Ask for a short summary to share with a new therapist if switching"
            - name: Changing session frequency
              description: |-
                ## Purpose
                Weekly sessions suit intensive phases, while fortnightly or monthly ones give more time to practise between meetings and cost less. Changing frequency deliberately, at a review rather than through a run of cancellations, keeps the work coherent. Some people move to fortnightly as a step towards ending; others add sessions around a life event or a difficult stretch.

                ## Milestones
                1. Reasons for changing frequency written down, covering cost, progress and life demands.
                2. The change discussed and agreed with your therapist at a review.
                3. A trial of six to eight weeks at the new frequency.
                4. A decision recorded at the end of the trial.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A change in session frequency agreed at a review, trialled for six weeks and then confirmed or reversed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what you would gain and lose by changing frequency"
                - "Raise the change at your next review session"
                - "Trial the new frequency for six weeks"
                - "Write down whether to keep or reverse the change"
            - name: Moving between online and in-person sessions
              description: |-
                ## Purpose
                Online sessions save travel and fit busy weeks, while in-person sessions offer a separate space and fewer distractions, and some people find one format far easier to open up in. Trying the other format for a few sessions, if your therapist offers both, shows which suits the work you are doing now. A house move, a new job or a change in privacy at home are good moments to reconsider.

                ## Milestones
                1. What you like and dislike about your current format written down.
                2. Three sessions tried in the other format.
                3. Travel time, cost and how open you felt compared across the two.
                4. A format chosen and agreed with your therapist.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three sessions trialled in the alternative format and a written choice of format agreed with your therapist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write what helps and hinders you in your current session format"
                - "Ask your therapist whether the other format is possible"
                - "Note travel time, cost and openness after each trial session"
                - "Agree the format for the next three months"
            - name: Choosing short-term or open-ended therapy
              description: |-
                ## Purpose
                Some therapy is time-limited, often 6 to 20 sessions with a defined focus, while other work is open-ended and runs for a year or more. Short-term work tends to suit a specific problem such as a phobia or a recent loss; longer work suits patterns that repeat across relationships and years. Agreeing the expected length early sets budget, pace and expectations for both of you.

                ## Milestones
                1. Your therapist asked how long they expect the work to take and why.
                2. The likely number of sessions compared with your funding plan.
                3. A decision recorded on time-limited or open-ended work, with a review point.
                4. Any session cap set by a service or insurer noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed therapy length or review point is recorded and checked against your budget and any session cap."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your therapist how many sessions they expect and why"
                - "Compare that number with your funding plan"
                - "Agree a review point after a set number of sessions"
                - "Record any session limit set by your service or insurer"
            - name: Bringing someone else into a session
              description: |-
                ## Purpose
                Occasionally it helps to bring a partner, parent or close friend into a session, to explain what therapy is working on, to practise a difficult conversation with support, or to share a plan. Joint sessions need careful preparation: what will and will not be discussed, what the other person is there for, and how you will recover afterwards. Not every therapist offers them, and some will suggest a separate couples or family service instead.

                ## Milestones
                1. A clear reason for the joint session written down.
                2. Your therapist asked whether they offer joint sessions and how they run them.
                3. Topics in and out of bounds agreed before the session.
                4. An individual session booked afterwards to reflect on it.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A joint session with an agreed purpose and boundaries has been held, followed by an individual session to reflect on it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down why you want someone else in a session"
                - "Ask your therapist whether they offer joint sessions"
                - "Agree with your therapist which topics are off limits"
                - "Book an individual session for the week after"
            - name: Stepping up or down within a public service
              description: |-
                ## Purpose
                Public talking therapy services often work in steps, from guided self-help to group courses to individual therapy and specialist teams. If the level you were offered feels too light or too intense, you can ask for a review rather than dropping out. Knowing how the steps work and how to ask, with evidence from your scores and notes, makes it more likely you end up in the right place.

                ## Milestones
                1. The levels of support your service offers written down.
                2. Your current level, and why it was chosen, understood.
                3. Evidence gathered on whether it is working, such as scores and notes.
                4. A review requested and its outcome recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A request to move up or down a level of support has been made with evidence, and the service's decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the service to explain the levels of support it offers"
                - "Gather your recent questionnaire scores and session notes"
                - "Request a review of your level with your practitioner"
                - "Record the service's decision and the next steps"
            - name: Planning for your therapist's breaks
              description: |-
                ## Purpose
                Therapists take holidays, and a three-week gap at a hard moment can feel like being dropped. Planning each break a month ahead, covering what you will keep practising, who you can talk to, which notes to reread and what to do if things get worse, makes the gap manageable. Breaks also show how much you can do on your own, which is useful information when ending comes into view.

                ## Milestones
                1. Your therapist's known breaks for the year in your calendar.
                2. A one-page plan for each break covering practice, people and notes.
                3. An agreed route for urgent support during the break.
                4. A reflection after each break brought to the first session back.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each therapist break this year had a written plan made a month ahead and a reflection brought to the first session back."
                cadence: cyclic
              tasks:
                - "Ask your therapist for their planned breaks this year"
                - "Write a one-page plan for the next break"
                - "Confirm who to contact for urgent support while they are away"
                - "Ask for the coming year's breaks and add them to your calendar @recurring(yearly)"
            - name: Deciding therapy has done its work
              description: |-
                ## Purpose
                Endings are rarely announced; often sessions just thin out or the money runs short. Asking directly whether your goals have been met, whether gains are holding between sessions and whether new goals justify continuing turns ending into a decision rather than a drift. Comparing current ratings and scores with your first month's baseline gives the conversation evidence.

                ## Milestones
                1. Current goal ratings and scores set beside those from the first month.
                2. Signs listed that gains are holding, such as handling a setback without needing the next session.
                3. The question of ending raised with your therapist.
                4. A decision recorded: continue with new goals, taper, or plan an ending.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on ending or continuing, made with your therapist and based on goals and scores compared with the baseline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare current goal ratings with your first month's ratings"
                - "List three recent situations you handled without needing a session"
                - "Ask your therapist how they would judge whether the work is done"
                - "Record the decision and any new goals"
            - name: Planned ending over the last four sessions
              description: |-
                ## Purpose
                A good ending is part of therapy, not an afterthought: the last few sessions review what changed, consolidate what helped and make room to talk about how ending feels. Agreeing a final date four sessions ahead, perhaps with the last two spaced further apart, avoids the abrupt stop that leaves people unsure whether they can come back. Many people find the final session one of the most useful.

                ## Milestones
                1. A final session date agreed four sessions ahead.
                2. The last sessions used to review goals, themes and change.
                3. Spacing of the final sessions agreed, such as fortnightly then monthly.
                4. A closing note written after the last session.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final session held on an agreed date after a planned four-session wind-down, with a closing note written afterwards."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree a final session date with your therapist"
                - "Reread your goals note, reflections and themes index"
                - "Ask to space out the last two sessions"
                - "Write a closing note after the final session"
            - name: Maintenance plan written with your therapist
              description: |-
                ## Purpose
                Before ending, it helps to write down what you learned, the early signs that old patterns are returning, what to do when they appear and when to seek help again. Drafting it yourself and refining it with your therapist in one of the final sessions turns months of work into one page you can reread a year later. It also makes returning to therapy quicker if you need to.

                ## Milestones
                1. A one-page draft covering what helped, warning signs and first steps.
                2. The draft reviewed and edited with your therapist.
                3. Clear criteria written for when to seek help again.
                4. The plan saved where you will find it and reread on a schedule.

                ## Notes
                If you have a separate crisis safety plan, keep it alongside this one. This plan is about holding on to progress, not about emergencies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page maintenance plan reviewed with your therapist is saved and has been reread at least once after therapy ended."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the five things that helped most in therapy"
                - "List early signs that old patterns are coming back"
                - "Review the draft with your therapist before the last session"
                - "Reread the maintenance plan and update it @recurring(quarterly)"
            - name: Booster session three months after ending
              description: |-
                ## Purpose
                Many therapists offer a follow-up session a few months after ending to check how things are going, and it is easy to forget to book it. A booster is a chance to look at what has held, what has slipped and whether the maintenance plan works in practice. Booking it before the final session makes it happen.

                ## Milestones
                1. A booster session agreed and booked before the final session.
                2. The maintenance plan and recent notes reread the week before.
                3. The booster attended and a short summary written.
                4. A decision recorded on whether any further sessions are needed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A booster session held about three months after ending, with a written summary and a decision on further support."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your therapist whether they offer a follow-up session"
                - "Book the booster before your final session"
                - "Reread your maintenance plan the week before the booster"
                - "Write a summary of the booster and any next steps"
            - name: Returning to therapy after a break
              description: |-
                ## Purpose
                Coming back to therapy after months or years is common, prompted by a new life event, an old pattern returning or a wish to go further. Deciding whether to contact a previous therapist or start fresh, and summarising what has happened since, saves the first sessions from repeating history. Your old notes, themes index and maintenance plan become the briefing.

                ## Milestones
                1. Reasons for returning written down, with what has changed.
                2. A choice made between a previous therapist and someone new.
                3. A one-page update summarising events since the last therapy.
                4. A first session or consultation booked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first session booked with a written update in hand and a recorded choice between a previous or new therapist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write what has changed since your last therapy ended"
                - "Decide whether to contact your previous therapist first"
                - "Reread your old themes index and maintenance plan"
                - "Book a first session or consultation"
            - name: Student counselling service registration
              description: |-
                ## Purpose
                Most universities and colleges offer free counselling, but demand peaks around exams and the start of term, sessions are often capped at four to eight, and services may close over the vacation. Registering early in term, asking about session limits and holiday cover, and knowing a local option for longer work means support does not stop when term does. Student support teams can also arrange academic adjustments that sit alongside counselling.

                ## Milestones
                1. The counselling service's registration process and session limit found.
                2. Registration or a first appointment completed early in term.
                3. Vacation cover and options for longer-term therapy noted.
                4. Contact made with student support about any academic adjustments.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Registered with the student counselling service, with the session limit, vacation cover and one longer-term option written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your student counselling service's registration page"
                - "Ask how many sessions are offered and what happens in the holidays"
                - "Note one low-cost local option for therapy beyond the session limit"
                - "Ask student support about adjustments that could sit alongside counselling"
            - name: Finding a therapist for your child or teenager
              description: |-
                ## Purpose
                Therapy for children and teenagers works differently: therapists need specific training, parents are usually involved in some sessions, confidentiality follows different rules and the young person's willingness matters enormously. Starting with the school, your child's doctor and a specialist directory, and involving your child in choosing, gives the best chance of a therapist they will actually talk to. Agreeing how you will be kept informed without undermining their privacy avoids conflict later.

                ## Milestones
                1. Your child's views on talking to someone heard and noted.
                2. Two or three registered therapists with child or adolescent training shortlisted.
                3. Your child involved in a consultation and in the final choice.
                4. An agreement on what parents will and will not be told.

                ## Notes
                If you are worried about your child's immediate safety, contact your doctor or emergency services first. A private therapy search is not the route for an emergency.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A registered child or adolescent therapist chosen with your child's involvement, with a written agreement on how parents are updated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your child, at a calm moment, how they feel about talking to someone"
                - "Ask the school and your child's doctor about local child therapy services"
                - "Shortlist therapists trained in child or adolescent work"
                - "Ask each therapist how they involve and update parents"
                - "Ask for a parent review meeting with the therapist each term @recurring(quarterly)"
            - name: Couples counselling search and first sessions
              description: |-
                ## Purpose
                Couples often arrive at counselling years after problems began, and one partner may be more willing than the other. Choosing a counsellor trained specifically in couples work, agreeing together what each of you hopes for and committing to a fixed number of sessions before judging it gives the process a fair test. Couples counselling is not suitable where there is abuse or coercion; individual support comes first in that case.

                ## Milestones
                1. Each partner's hopes for counselling written separately and then shared.
                2. Two or three couples-trained counsellors shortlisted together.
                3. An initial block of six sessions agreed by both partners.
                4. A joint review after the sixth session with a decision on continuing.

                ## Notes
                If one partner feels unsafe at home, couples work is not advised. Contact a domestic abuse service for guidance instead.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Six couples sessions completed with a counsellor chosen together, followed by a joint written decision on continuing."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write separately what each of you hopes counselling will change"
                - "Shortlist couples-trained counsellors together"
                - "Agree to attend six sessions before deciding whether it helps"
                - "Spend ten minutes together reflecting on the week's session @recurring(weekly:sun)"
            - name: Therapy around caring responsibilities
              description: |-
                ## Purpose
                Carers are among the people most likely to need therapy and least able to attend: appointments clash with care visits, cancellations are frequent and the hour itself can feel like a luxury. Arranging cover, choosing flexible formats such as phone or early-morning online sessions, and telling the therapist about caring duties up front makes therapy sustainable. Some carers' organisations offer free or reduced-cost counselling.

                ## Milestones
                1. Caring commitments mapped to find a realistic regular session time.
                2. Cover arranged for that slot, from family, a sitter or a respite service.
                3. Your therapist told about caring duties and likely disruptions.
                4. A back-up plan written for weeks when cover falls through.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A regular session slot with arranged cover has been kept for eight weeks, with a back-up plan written for when cover fails."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Mark the hours in your week when caring duties are lightest"
                - "Ask a carers' organisation about free or reduced-cost counselling"
                - "Arrange cover for your session slot"
                - "Tell your therapist about caring duties and short-notice changes"
            - name: Therapy in later life
              description: |-
                ## Purpose
                People over 65 are often under-referred for talking therapy, yet it works just as well in later life for low mood, anxiety, loss and adjusting to retirement or illness. Finding a therapist comfortable with later-life issues, sorting practical access such as hearing support, transport or a video set-up, and being clear about what you want help with makes it easier to start. Some public services have dedicated older adults' teams.

                ## Milestones
                1. Your doctor or local service asked about therapy for older adults.
                2. Practical needs listed: hearing, mobility, transport and technology.
                3. A therapist chosen who has worked with later-life issues.
                4. Practical access arranged before the first session.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A therapist experienced with later-life issues chosen, and practical access needs arranged before the first session."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor whether there is an older adults' therapy service locally"
                - "List practical needs such as hearing support or step-free access"
                - "Ask shortlisted therapists about their experience with later-life issues"
                - "Arrange transport or a video set-up for the first session"
            - name: Identity-affirming therapist search
              description: |-
                ## Purpose
                For LGBTQ+ people, people of faith, disabled people and people from racialised or migrant communities, having to explain or defend your identity in therapy wastes time and can cause harm. Searching directories that let therapists list specific experience, and asking direct questions at consultation, finds someone who understands your context without you having to teach it. Shared identity is not required, but informed respect is.

                ## Milestones
                1. The parts of your identity that matter for therapy written down.
                2. Specialist directories or community organisations used in the search.
                3. Direct questions about experience and approach asked at each consultation.
                4. A therapist chosen who answered those questions well.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A therapist chosen after consultations in which identity-specific questions were asked and the answers recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write which parts of your identity you want a therapist to understand"
                - "Search a specialist directory or ask a community organisation for names"
                - "Ask each therapist about their experience with clients like you"
                - "Record which answers felt informed and respectful"
            - name: Therapy in your first language or from abroad
              description: |-
                ## Purpose
                Emotions are often easier to reach in the language you grew up with, and people living abroad can find therapy in a second language flat or exhausting. Online therapy across borders is possible, but licensing, insurance cover, time zones and emergency arrangements differ by country. Checking those details first avoids discovering mid-crisis that your therapist cannot help where you live.

                ## Milestones
                1. A decision on whether to work in your first or second language.
                2. Therapists found who work in your chosen language, locally or online.
                3. Licensing, insurance and time zone questions answered for cross-border work.
                4. Local emergency contacts noted for the country you actually live in.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A therapist working in your chosen language selected, with cross-border licensing and local emergency contacts confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide which language you want to do therapy in"
                - "Search for therapists who work in that language"
                - "Ask about licensing and insurance where you live if they are abroad"
                - "Save local emergency contacts for your country of residence"
            - name: Group therapy as an option
              description: |-
                ## Purpose
                Therapist-led group therapy, distinct from peer support, brings six to ten people together with one or two trained facilitators and can be especially powerful for relationship patterns, shame and loneliness. It is often cheaper than individual work and sometimes offered alongside it. Knowing what a group would ask of you, including attendance, confidentiality and rules about outside contact, helps you decide whether it fits.

                ## Milestones
                1. Groups in your area or online identified with format, size and cost.
                2. An assessment or taster session attended.
                3. Commitments understood: attendance, confidentiality and outside contact rules.
                4. A decision recorded on joining, with timing alongside any individual therapy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on joining a therapist-led group, made after an assessment and a comparison of cost and commitment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your therapist or service whether they run or recommend groups"
                - "Find out size, length, cost and attendance rules for one group"
                - "Attend an assessment or taster session"
                - "Record your decision and how it fits with individual sessions"
            - name: Coordinating your therapist and other professionals
              description: |-
                ## Purpose
                When you see a therapist, a doctor and perhaps a prescriber or specialist team, each may hold a different piece of the picture. Deciding what you want shared, giving or declining written consent and keeping a simple list of who is involved stops you repeating your story and avoids contradictory advice. You stay in charge of what each person knows.

                ## Milestones
                1. A list of every professional involved, with role and contact details.
                2. A decision on what information each may share with the others.
                3. Written consent given or declined, with copies kept.
                4. The arrangement reviewed once a year or when someone new joins.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A care contacts list and written consent decisions on information sharing are saved and were reviewed within the last year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every professional involved in your care with contact details"
                - "Decide what you are happy for your therapist and doctor to share"
                - "Give or decline written consent and keep copies"
                - "Review who is involved and what they may share @recurring(yearly)"
            - name: Requesting a copy of your therapy records
              description: |-
                ## Purpose
                In many countries you have a legal right to request the notes a therapist or service keeps about you, though some therapists hold only brief notes and some information can be withheld. Requesting them can help when switching therapists, applying for other services or making sense of a past period. Records are usually destroyed after a set number of years, so knowing the retention period matters too.

                ## Milestones
                1. The therapist's or service's records policy and retention period found.
                2. A written request made under your local data protection rules.
                3. The records received, or the reason for any withholding recorded.
                4. Records stored securely with your other therapy notes.

                ## Notes
                Reading your own notes can be unsettling. Consider reading them with your current therapist or someone you trust.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written records request has been made, and either the records or a written reason for withholding has been received and filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your therapist or service about their records and retention policy"
                - "Write a request for your records citing your local data rights"
                - "Plan who you will read the records with"
                - "File the records securely with your therapy notes"
            - name: Raising a concern or complaint about a therapist
              description: |-
                ## Purpose
                Most problems in therapy can be raised directly, but some cannot: boundary breaches, sharing information without good reason, pressure to buy extra services, or anything sexual. Knowing the steps, writing down what happened with dates, raising it with the therapist or service if it feels safe, then contacting the professional body, helps you be heard. Complaint processes exist to protect future clients as well as you.

                ## Milestones
                1. What happened written down with dates and specifics.
                2. The complaints procedure of the service or professional body found.
                3. The concern raised directly or a formal complaint submitted.
                4. Support arranged for yourself while the complaint is considered.

                ## Notes
                If a therapist has behaved sexually towards you, you do not need to raise it with them first. Go straight to the professional body or the police.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated written account and a submitted concern or complaint exist, with the professional body's reference number recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what happened with dates while it is fresh"
                - "Find the complaints procedure for the service or professional body"
                - "Submit the concern or complaint in writing"
                - "Arrange support from someone you trust while it is considered"
---

# Therapy & Counselling Journey

Therapy and counselling go better when the practical side is handled with care, from choosing who to see to knowing when to stop. This area starts with foundations such as written goals, funding, referrals, registration checks and consultation calls, moves into the routines that make each session count, the skills of using therapy well, decisions about switching, frequency and format, and the dated moments around breaks and endings, then covers students, parents, couples, carers, older adults and people looking for an identity-affirming therapist or therapy in their own language, finishing with group therapy, care coordination, records and complaints.

The rhythm is a note before each session, a reflection after it and a midweek homework check, then a monthly round of goal ratings, costs and claims, questionnaire scores, themes and one life experiment, a quarterly review with your therapist and yearly checks on funding, registration and planned breaks. The Person, Meeting notes, Habit tracker, Metrics log and Reading queue templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
