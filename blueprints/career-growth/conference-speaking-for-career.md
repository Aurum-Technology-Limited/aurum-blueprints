---
id: career-growth.conference-speaking-for-career
name: Conference Speaking for Career
description: "From a first lightning talk to a signature conference session: topics drawn from your own work, a CFP calendar, abstracts that get accepted, rehearsed delivery and talks that turn into career evidence."
category: personal
version: 1.0.0
tags: [career-growth, conference-speaking-for-career, knowledge-worker, engineer, public-speaking, cfp, conference-talks, meetups]
author: Aurum Technology
starter_structure:
  templates:
    - content-pipeline
    - portfolio-piece
    - feedback-themes
    - metrics-log
    - trip
  pillars:
    - name: Career Growth
      emoji: "🧭"
      description: "A working life steered rather than drifted: job searches and promotions, reputation and network, pay negotiations, career changes, credentials, and the evidence that you are getting better at what you do."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Conference Speaking for Career
          description: "Getting talks accepted at conferences and meetups, preparing presentations and using speaking to build career credibility."
          projects:
            - name: Why you want to speak and what you want to be known for
              description: |-
                ## Purpose
                Speaking takes 20 to 60 hours per conference talk once writing, rehearsal and travel are counted, so it needs a reason that survives a rejection email. Writing down the career outcome you want from it, such as a promotion to senior, a move into developer relations or recognition in a niche, and the one topic you want people to associate with your name, decides every later choice of event and abstract.

                ## Milestones
                1. One sentence naming the career outcome speaking should help with in the next two years.
                2. A single topic area, narrow enough to fit in a conference track title, chosen as your speaking focus.
                3. Two or three audiences named who would care about that topic, such as platform engineers or finance operations leads.
                4. A limit set on how many talks a year you can realistically prepare alongside your job.

                ## Notes
                Narrow beats broad. 'Testing data pipelines' gets accepted far more often than 'data engineering best practices', and it is easier to become known for.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written speaking goal with one career outcome, one focus topic, named audiences and a yearly talk limit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence on what speaking should do for your career"
                - "List three topics you could talk about for an hour without notes"
                - "Pick the one topic you most want your name attached to"
                - "Decide how many talks a year your workload can carry"
            - name: Talk topic inventory from your own work
              description: |-
                ## Purpose
                The best talk ideas are usually problems you have already solved at work: the migration that went wrong, the metric nobody trusted, the process you rebuilt. Combing the last two years of projects, incidents and design documents for stories with a lesson gives you a stock of ideas grounded in real experience, which is exactly what programme committees look for.

                ## Milestones
                1. At least 12 candidate talk ideas listed, each tied to a real project or incident.
                2. Each idea tagged with the audience it suits and whether it needs employer clearance.
                3. The five strongest ideas marked, judged on novelty, evidence and how much you care.
                4. One idea per strong candidate written as a working title and a one-line takeaway.

                ## Notes
                A failure you learned from is often a better talk than a success. Audiences remember 'what we got wrong' sessions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An inventory of at least 12 talk ideas from your own work, with five shortlisted and given working titles."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Scan your last two years of projects and incidents for stories with a lesson"
                - "List each idea with its audience and a one-line takeaway"
                - "Mark the five ideas with the strongest evidence behind them"
                - "Give each shortlisted idea a working title"
            - name: Employer clearance and confidentiality rules for public talks
              description: |-
                ## Purpose
                Many employers have a policy on public speaking, external communications or open-source disclosure, and a talk that shows internal architecture, customer names or unreleased numbers can breach it. Finding the policy and agreeing what you may share before you submit protects your job and saves the embarrassment of withdrawing an accepted talk.

                ## Milestones
                1. Your employer's speaking, social media or external communications policy found and read.
                2. The approvers identified, typically your manager plus communications, legal or security.
                3. A short list agreed of what is off limits: customer names, internal metrics, security details.
                4. A standing approval process noted, including how far ahead slides must be reviewed.

                ## Notes
                Ask early and in writing. Approval to submit is not always approval to present the final slides, so check whether a second review is needed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The employer's speaking policy has been read and a written note records approvers, off-limits content and review lead time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the staff handbook or intranet for a public speaking policy"
                - "Ask your manager who needs to approve an external talk"
                - "Write down what cannot be shared in public"
                - "Note how many weeks before the event slides must be reviewed"
                - "Recheck the policy in case it has changed @recurring(yearly)"
            - name: Speaker bio and headshot pack
              description: |-
                ## Purpose
                Every CFP form and accepted talk asks for the same things: a short bio, a long bio, a headshot and social links, usually at short notice. Having a 50-word and a 150-word bio written in the third person, and a well-lit headshot cropped square and landscape, means you can submit in minutes and organisers get what they need without chasing you.

                ## Milestones
                1. A 50-word bio and a 150-word bio, both in the third person, naming your role and focus topic.
                2. A recent headshot with plain background, saved in square and landscape crops at high resolution.
                3. Links to your talk page, professional profile and code or writing collected in one place.
                4. The pack stored in a single folder you can share as a link.

                ## Notes
                Lead the bio with what you do and what you speak about, not your job history. Organisers paste it straight into the programme.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shareable folder holds a 50-word bio, a 150-word bio, two headshot crops and your profile links."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft 50-word and 150-word bios from your CV and focus topic"
                - "Book or take a headshot against a plain background in good light"
                - "Save square and landscape crops of the headshot"
                - "Refresh the bio with your latest talk and role @recurring(quarterly)"
            - name: Public talk page listing your sessions
              description: |-
                ## Purpose
                Programme committees often search a name before accepting an unknown speaker, and a page listing past talks, recordings and slides answers their real question: can this person deliver? A simple page on your own site or profile, updated after each talk, also gives recruiters and promotion panels a single link to cite.

                ## Milestones
                1. A page live at a stable address you control, with your bio and photo.
                2. Every past talk listed with event, date, title and links to slides or recording.
                3. Upcoming accepted talks shown with dates.
                4. A short line inviting organisers to get in touch about talks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public talk page lists every past and upcoming talk with dates and slide or recording links."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose where the talk page will live and claim the address"
                - "List every talk you have given, including internal ones you may share"
                - "Add slides or recording links for each talk"
                - "Add new talks and recordings to the page @recurring(monthly:20)"
            - name: Recorded baseline of how you present today
              description: |-
                ## Purpose
                Most people have never watched themselves present, and the habits that weaken a talk, such as filler words, reading slides or rushing the ending, are invisible from the inside. Recording a ten-minute version of one idea and watching it back gives you an honest starting point to measure progress against.

                ## Milestones
                1. A ten-minute talk recorded on video, standing, with slides.
                2. The recording watched once without sound and once with sound.
                3. Three strengths and three habits to change written down.
                4. The recording saved so you can compare it in six months.

                ## Notes
                Watching without sound shows posture and gestures; listening without the picture shows pace and filler words.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A ten-minute baseline recording exists with a written list of three strengths and three habits to change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one shortlisted idea and outline it for ten minutes"
                - "Record yourself presenting it standing up with slides"
                - "Watch the recording muted, then listen with the screen off"
                - "Write down three strengths and three habits to change"
            - name: First lightning talk at an internal session or local meetup
              description: |-
                ## Purpose
                A five-minute lightning talk is the lowest-risk way to learn what it feels like to hold a room, and local meetups and internal tech talks are always short of volunteers. Giving one within two months turns speaking from an idea into a thing you have done, and gives you a first line on your talk page.

                ## Milestones
                1. A lightning slot booked at an internal session or a local meetup.
                2. A five-minute talk with one idea and no more than ten slides.
                3. The talk rehearsed aloud at least three times with a timer.
                4. The talk delivered and one piece of feedback collected afterwards.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A lightning talk of about five minutes has been delivered to a live audience within 60 days, with feedback noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Email a local meetup organiser or internal talk host asking for a lightning slot"
                - "Cut one idea down to a single takeaway and ten slides"
                - "Rehearse aloud three times against a five-minute timer"
                - "Ask one attendee what they will remember from the talk"
            - name: Speaking budget, travel cover and leave allowance
              description: |-
                ## Purpose
                Conference talks cost money and days: many smaller events cover only a ticket, and travel, hotels and time away from work can run high for an international event. Agreeing with your manager what the employer will fund and how many days count as work time, before you submit, stops an acceptance turning into an argument or a personal bill.

                ## Milestones
                1. A conversation held with your manager about funding and time for speaking.
                2. The yearly travel and ticket amount the employer will cover written down.
                3. Agreement on whether speaking days count as working days or leave.
                4. A personal ceiling set for events you would fund yourself.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written note records the employer's speaking budget, how speaking days are treated and your own spending ceiling."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your manager whether the team has a conference or training budget"
                - "Agree whether speaking days count as work time"
                - "Write down the amount the employer will cover each year"
                - "Set the most you would spend yourself on one event"
            - name: Twelve-month target event shortlist
              description: |-
                ## Purpose
                Speaking at random events builds little; speaking where your target audience gathers builds a reputation. Building a shortlist of 15 to 25 conferences and meetups in your focus area, with their usual CFP months and whether they take new speakers, turns a vague wish into a year you can plan.

                ## Milestones
                1. At least 15 events listed across local meetups, regional conferences and one or two flagship events.
                2. For each event: audience, usual CFP opening month, format and whether travel is covered.
                3. Events tiered into stepping stones, targets and stretch goals.
                4. A note of which events have first-time speaker tracks or mentoring.

                ## Notes
                CFP aggregator sites, past programmes and speakers in your field are the quickest sources. Last year's CFP month is usually a good guide to this year's.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shortlist of at least 15 events, each with audience, CFP month, format, travel cover and a tier."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search CFP aggregator sites for events in your focus topic"
                - "Look at last year's programmes to see who spoke and on what"
                - "Record each event's usual CFP month and whether travel is covered"
                - "Sort the events into stepping stones, targets and stretch goals"
                - "Refresh the shortlist with new and retired events @recurring(yearly)"
            - name: CFP calendar and submission tracker
              description: |-
                ## Purpose
                Calls for papers open and close on their own timetable, often eight to ten months before the event, and missing one by a day means waiting a year. A tracker that lists each open CFP, its closing date, what you submitted and the outcome is the backbone of a speaking pipeline and shows your acceptance rate over time.

                ## Milestones
                1. A tracker with columns for event, CFP close date, talk submitted, status and notes.
                2. Every event on your shortlist entered with its expected CFP window.
                3. A reminder set two weeks before each close date.
                4. Outcomes recorded for every submission, including rejections and any reviewer feedback.

                ## Notes
                Start from the **Content pipeline** template, with stages for idea, abstract drafted, submitted, accepted and delivered.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A CFP tracker is in use with every shortlisted event, close dates and outcomes for each submission."
                cadence: rolling
              tasks:
                - "Set up the tracker with the stages from idea to delivered"
                - "Enter every shortlisted event with its expected CFP window"
                - "Sweep aggregator sites and newsletters for newly opened CFPs @recurring(monthly:4)"
                - "Record the outcome of every submission when it arrives"
            - name: Monthly abstract writing session
              description: |-
                ## Purpose
                Abstracts written the night a CFP closes read like it. A fixed two-hour session each month to draft or polish one abstract means you always have two or three ready to adapt, and the quality goes up because each one gets a second look before it is sent.

                ## Milestones
                1. A recurring two-hour slot blocked in your calendar.
                2. A folder of ready abstracts, each with title, summary, outline and takeaways.
                3. At least two abstracts at submission quality at any time.
                4. Each abstract tailored at least once to a specific event's audience.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two submission-ready abstracts are kept in a folder and one is drafted or revised every month."
                cadence: rolling
              tasks:
                - "Block a recurring two-hour slot for abstract writing"
                - "Draft or polish one abstract in the monthly session @recurring(monthly:12)"
                - "Tailor the best abstract to the next CFP closing"
                - "Ask a peer to read the abstract before it is submitted"
            - name: Talk library of slides, recordings and versions
              description: |-
                ## Purpose
                After three or four talks, files scatter across laptops and conference portals, and the recording you need for a CFP application cannot be found. Keeping one library with each talk's slides, speaker notes, recording link, abstract and versions lets you reuse material, prove your track record and avoid rebuilding a talk from scratch.

                ## Milestones
                1. One folder per talk holding slides, notes, abstract and recording link.
                2. Version names that record the event and date of each delivery.
                3. A one-page summary for each talk with audience, length and feedback.
                4. Slides exported to PDF so they open anywhere.

                ## Notes
                Start from the **Portfolio piece** template for each talk's summary page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every talk given has a folder with slides, notes, abstract, recording link and a one-page summary."
                cadence: rolling
              tasks:
                - "Create one folder per talk you have already given"
                - "Export each final slide deck to PDF"
                - "Write a one-page summary for each talk"
                - "File new slides, recordings and feedback after each event @recurring(monthly:27)"
            - name: Weekly rehearsal slot
              description: |-
                ## Purpose
                Speakers who look relaxed on stage have usually rehearsed out loud many times; reading slides silently is not rehearsal. A standing 30-minute slot each week, used for whatever talk is next, keeps delivery sharp between events and stops the final week before a conference becoming a panic.

                ## Milestones
                1. A 30-minute rehearsal slot blocked in your calendar every week.
                2. Each rehearsal spoken aloud, standing, with a timer.
                3. A note after each session of one thing that improved and one to fix.
                4. A recording made at least once a month to check progress.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly rehearsal slot has been kept for at least eight of the last ten weeks, with notes from each session."
                cadence: rolling
              tasks:
                - "Block a 30-minute rehearsal slot each week"
                - "Rehearse your next talk aloud, standing, with a timer @recurring(weekly:tue)"
                - "Record one rehearsal and compare it with the last recording @recurring(monthly:25)"
                - "Write one improvement and one fix after each session"
            - name: Post-talk debrief and feedback themes
              description: |-
                ## Purpose
                The days after a talk are when feedback is freshest and most people simply move on. A short debrief within 48 hours, covering audience questions, ratings if the event shares them, comments online and your own notes, turns each talk into specific improvements for the next one.

                ## Milestones
                1. A debrief written within 48 hours of every talk.
                2. Audience questions recorded, since they show what was unclear or most interesting.
                3. Event ratings or comments collected where the organisers share them.
                4. Recurring themes across talks summarised in one place.

                ## Notes
                Start from the **Feedback themes** template to group comments across several talks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every talk in the last year has a written debrief, and a themes page summarises patterns across them."
                cadence: rolling
              tasks:
                - "Write down every audience question you remember the same evening"
                - "Ask the organisers whether they share session ratings"
                - "Search for posts or comments about your talk"
                - "Add the main lessons to your feedback themes page"
            - name: Quarterly speaking pipeline review
              description: |-
                ## Purpose
                Without a review, it is easy to submit the same abstract to the wrong events for a year. Looking each quarter at submissions, acceptances, rejections and upcoming deadlines shows your acceptance rate, which talks are working and where to point effort next.

                ## Milestones
                1. Submissions, acceptances and rejections counted for the quarter.
                2. Acceptance rate tracked over time in a simple log.
                3. Talks that keep being rejected marked for a rewrite or retirement.
                4. The next quarter's target CFPs chosen.

                ## Notes
                Start from the **Metrics log** template. Acceptance rates of one in four or lower are normal for competitive conferences, so judge the trend, not one quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log shows submissions, acceptances and acceptance rate for each quarter, with next targets chosen."
                cadence: cyclic
              tasks:
                - "Count this quarter's submissions, acceptances and rejections"
                - "Review the pipeline and choose next quarter's CFPs @recurring(quarterly)"
                - "Mark any abstract rejected three times for a rewrite"
                - "Log the acceptance rate beside previous quarters"
            - name: Organiser and programme committee contact notes
              description: |-
                ## Purpose
                Relationships drive most invitations: organisers remember speakers who were easy to work with and invite them back, or recommend them to other events. Keeping brief notes on each organiser, what they need and how the talk went, and a polite thank-you after every event, turns one acceptance into several.

                ## Milestones
                1. A contact list of organisers and committee members you have dealt with.
                2. A note for each on the event, dates, preferences and outcome.
                3. A thank-you message sent after every talk.
                4. A check-in made with past organisers before their next CFP opens.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A contact list covers every organiser you have worked with, each with notes and a logged thank-you message."
                cadence: rolling
              tasks:
                - "List every organiser and committee member you have dealt with"
                - "Send a thank-you message within a week of each talk"
                - "Note what each organiser asked for and how it went"
                - "Check which past organisers have a CFP opening soon @recurring(monthly:16)"
            - name: Talk idea capture file
              description: |-
                ## Purpose
                Good talk ideas arrive during incident reviews, code reviews and hallway conversations, and are forgotten by the evening. A single capture file you add to in a minute, reviewed weekly, keeps the inventory growing and gives you material for the monthly abstract session.

                ## Milestones
                1. One capture file reachable from your phone and laptop.
                2. Each entry with the idea, the source and a possible audience.
                3. A weekly review that moves the best ideas into the talk inventory.
                4. At least one new idea added most weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A capture file holds dated talk ideas and is reviewed weekly, with strong ideas moved into the inventory."
                cadence: rolling
              tasks:
                - "Create a capture file and pin it on phone and laptop"
                - "Add the idea, its source and an audience for each entry"
                - "Move the best captured ideas into your talk inventory @recurring(weekly:fri)"
            - name: Annual speaking plan and calendar
              description: |-
                ## Purpose
                Conference seasons cluster, and three acceptances in the same month alongside a product launch can wreck both. Planning the year in one sitting, with target events, likely talk dates, busy work periods and personal commitments, lets you submit with confidence that you can deliver.

                ## Milestones
                1. Last year's talks, outcomes and lessons summarised in a paragraph.
                2. Target events for the coming year placed on a calendar with CFP and event dates.
                3. Busy work periods and personal commitments marked as no-speaking months.
                4. A target number of talks and one stretch event chosen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page speaking plan for the year shows target events, CFP dates, blackout months and a talk count."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Summarise last year's talks and what you learned"
                - "Mark busy work periods and personal commitments as blackout months"
                - "Place target events and CFP dates on a yearly calendar"
                - "Write next year's speaking plan in one sitting @recurring(yearly)"
            - name: Writing an abstract programme committees accept
              description: |-
                ## Purpose
                Committees often read hundreds of proposals in a few evenings and reject most in under a minute. Learning what they look for, a specific problem, a clear audience, concrete takeaways and evidence you have done the thing, is the single biggest lever on acceptance rate, more than delivery skill.

                ## Milestones
                1. Accepted abstracts from three past programmes in your field studied and annotated.
                2. A personal abstract checklist covering title, problem, audience, outline and takeaways.
                3. Two of your own abstracts rewritten against the checklist.
                4. Feedback on both rewrites collected from someone who has reviewed CFPs.

                ## Notes
                Titles that promise a specific outcome beat clever puns. Committees also value a short private note explaining why you are the right person to give the talk.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written abstract checklist exists and two abstracts rewritten against it have been reviewed by an experienced CFP reviewer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read ten accepted abstracts from a past programme in your field"
                - "Note what the strongest titles and summaries have in common"
                - "Write your own abstract checklist from those notes"
                - "Rewrite two abstracts against the checklist"
                - "Ask a past CFP reviewer to critique both rewrites"
            - name: Structuring a 30-minute technical talk
              description: |-
                ## Purpose
                Thirty minutes holds far less than people expect: one problem, three supporting points and a clear ending. Learning a repeatable structure, such as problem, stakes, approach, evidence, lessons and what to try on Monday, stops talks overrunning and gives the audience something to take back to work.

                ## Milestones
                1. One talk structure chosen and written as a reusable outline.
                2. A talk outlined on paper before any slides are made.
                3. The outline timed so each section has a minute budget.
                4. A full run-through finished within the time with two minutes spare.

                ## Notes
                Aim to finish early. Overrunning is the most common complaint organisers have about speakers.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reusable talk outline exists and one 30-minute talk built from it runs at least two minutes under time."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Watch three well-rated talks in your field and map their structure"
                - "Write your reusable outline with a minute budget per section"
                - "Outline your next talk on paper before opening slide software"
                - "Time a full run-through and cut until two minutes remain spare"
            - name: Slide design for readable talks
              description: |-
                ## Purpose
                Slides packed with bullet points and small code compete with the speaker for attention, and people at the back of a big room cannot read 14-point text. Learning a few rules, one idea per slide, large type, high contrast, code cut to the lines that matter, makes talks easier to follow and easier to reuse.

                ## Milestones
                1. A slide template with large type, high contrast and room for one idea per slide.
                2. One existing deck rebuilt using the template.
                3. Code samples trimmed and highlighted so the key lines read from the back row.
                4. The deck checked on a projector or large screen from across a room.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A slide template exists and one full deck rebuilt with it has been checked for legibility from across a room."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect three decks from talks you found easy to follow"
                - "Build a slide template with large type and high contrast"
                - "Rebuild one of your existing decks on the template"
                - "Check the deck on a big screen from the back of a room"
            - name: Live demo craft and fallback plans
              description: |-
                ## Purpose
                Live demos are what engineers remember from a talk, and also what most often fails on conference Wi-Fi with an unfamiliar laptop adapter. Learning to script a demo, rehearse it under bad conditions and keep a recorded fallback means a failure costs ten seconds rather than ten minutes.

                ## Milestones
                1. A demo script with every command and expected output written down.
                2. The demo run offline, on battery and with a large font setting.
                3. A screen recording of the working demo saved locally as a fallback.
                4. A spoken line ready for switching to the recording without losing the room.

                ## Notes
                Never depend on venue Wi-Fi. Cache dependencies, pre-load data and turn off notifications before going on stage.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A scripted demo has been run fully offline and a local recording of it is ready as a fallback."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the demo as a script of commands and expected outputs"
                - "Run the demo with Wi-Fi off and the font size enlarged"
                - "Record a clean run of the demo and save it locally"
                - "Practise switching to the recording mid-demo"
            - name: Storytelling with real incidents and case studies
              description: |-
                ## Purpose
                Audiences forget frameworks and remember stories: the 3 a.m. outage, the customer who left, the test that would have caught it. Practising how to tell a work story with a setting, tension, turning point and lesson, while keeping confidential details out, makes technical talks memorable and easier to deliver without notes.

                ## Milestones
                1. Three work stories written in a setting, tension, turning point and lesson shape.
                2. Each story checked against your employer's confidentiality rules and anonymised where needed.
                3. Each story told aloud in under two minutes.
                4. One story placed at the opening of your next talk.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three anonymised work stories, each told aloud in under two minutes, with one used to open a talk."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick three moments from work that taught you something"
                - "Write each as setting, tension, turning point and lesson"
                - "Remove names, numbers and details your employer would not share"
                - "Tell each story aloud with a two-minute timer"
            - name: Voice, pace and stage presence practice
              description: |-
                ## Purpose
                Nerves speed most people up, and a talk delivered at double pace loses half its audience. Targeted practice on pausing, slowing down, projecting and moving with purpose, rather than general advice to be confident, makes the difference between a talk people tolerate and one they recommend.

                ## Milestones
                1. Your speaking pace measured from a recording in words per minute.
                2. Filler words counted in a five-minute recording.
                3. Pausing and projection drills practised for four weeks.
                4. A new recording showing slower pace and fewer filler words than the baseline.

                ## Notes
                A local speaking club or an improvisation class gives low-stakes practice in front of real people.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A follow-up recording shows a measurably slower pace and fewer filler words than the baseline recording."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count your words per minute and filler words from a recording"
                - "Practise a five-minute pausing and projection drill @recurring(weekly:thu)"
                - "Try one session at a local speaking club"
                - "Re-record five minutes after four weeks and compare"
            - name: Handling Q&A, tough questions and know-it-alls
              description: |-
                ## Purpose
                Question time is where credibility is won or lost: a calm 'I do not know, but here is how I would find out' builds trust, while a defensive answer undoes a good talk. Preparing likely questions, practising short answers and having a line for comments that are not questions keeps you in control.

                ## Milestones
                1. A list of the ten most likely questions about your talk, with short answers.
                2. Three hard or hostile questions rehearsed with a colleague playing the asker.
                3. Lines ready for repeating questions, admitting gaps and parking long discussions.
                4. A plan for ending Q&A on time with a final takeaway.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten likely questions have prepared answers and three hard questions have been rehearsed live with a colleague."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the ten questions your talk is most likely to prompt"
                - "Write a two-sentence answer for each"
                - "Ask a colleague to throw three hard questions at you"
                - "Prepare a line for comments that are not really questions"
            - name: Pre-talk routine for managing nerves
              description: |-
                ## Purpose
                Almost every speaker is nervous, including experienced ones; the difference is a routine that channels it. Building a fixed sequence for the hour before going on, covering arrival, tech check, breathing, a glass of water and a memorised opening, gives the body something to do and gets you through the first minute, which is the hardest.

                ## Milestones
                1. A written routine for the hour before a talk.
                2. The first 60 seconds of your talk memorised word for word.
                3. A breathing or grounding technique practised before at least two rehearsals.
                4. The routine used at a real talk and adjusted afterwards.

                ## Notes
                If anxiety about speaking is severe or affects your health, a doctor or therapist can help; this project is about preparation, not treatment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written pre-talk routine has been used at a real talk and revised once based on how it went."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the steps you will follow in the hour before a talk"
                - "Memorise the first 60 seconds of your next talk"
                - "Practise a slow breathing exercise before two rehearsals"
                - "Note after your next talk which steps helped"
            - name: Virtual and pre-recorded talk delivery
              description: |-
                ## Purpose
                Online events and pre-recorded sessions widen where you can speak without travel, but talking to a camera with no audience reaction is a different skill. Setting up decent sound, light and framing, and learning to keep energy up without a room, makes virtual talks count as much as in-person ones.

                ## Milestones
                1. A microphone, light and camera position tested on a recording.
                2. A quiet backdrop and a checklist for notifications, browser tabs and power.
                3. One talk pre-recorded to an organiser's specification.
                4. One live virtual talk delivered with chat questions handled.

                ## Notes
                Sound matters more than video. A modest external microphone usually improves a recording more than a new camera.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One pre-recorded and one live virtual talk have been delivered using a tested sound, light and camera setup."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record a two-minute test and check sound, light and framing"
                - "Write a checklist for notifications, tabs and power"
                - "Ask an organiser for their recording specification"
                - "Deliver one live virtual talk and answer questions from chat"
            - name: Choosing which conferences are worth the trip
              description: |-
                ## Purpose
                A talk to 40 of the right people can do more for a career than one to 400 who will never hire, promote or recommend you. Scoring candidate events on audience fit, reputation, cost, recording and time away helps you say no to the wrong invitations and save energy for the ones that matter.

                ## Milestones
                1. Five scoring criteria written: audience fit, reputation, cost, recording and time away.
                2. Every pending invitation or CFP scored against them.
                3. A minimum score set below which you decline.
                4. Decisions recorded with a one-line reason for each.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each pending event has a score against five criteria and a recorded accept or decline decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five criteria for judging an event's value to your career"
                - "Score every pending CFP and invitation against them"
                - "Set the minimum score for saying yes"
                - "Decline politely where an event falls below the line"
            - name: Dry run with colleagues before a big talk
              description: |-
                ## Purpose
                Talks look different from the audience's seat, and colleagues spot jargon, gaps and slides that do not land. A dry run two to three weeks before the event, with a few people who match the target audience and a short feedback form, leaves time to fix what they find.

                ## Milestones
                1. A dry run booked two to three weeks before the event with three to six attendees.
                2. A short feedback form asking what was unclear, what to cut and what they will remember.
                3. Feedback grouped into must-fix and nice-to-have.
                4. Must-fix changes made and the talk re-timed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dry run with at least three attendees has happened and every must-fix item has been resolved before the event."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Invite three to six colleagues who match the target audience"
                - "Prepare a three-question feedback form"
                - "Run the full talk with Q&A at real length"
                - "Sort feedback into must-fix and nice-to-have and act on it"
            - name: Rewriting a rejected proposal
              description: |-
                ## Purpose
                Rejection is the normal outcome for most CFPs, and a rejected abstract is often a good idea badly framed or sent to the wrong event. Asking for feedback, reading what was accepted instead and rewriting the abstract with a sharper title and clearer takeaways gives the idea a real second chance elsewhere.

                ## Milestones
                1. Reviewer feedback requested from the event where it is offered.
                2. The accepted talks in the same track read to see what won.
                3. A rewritten abstract with a new title, narrower scope and explicit takeaways.
                4. The rewrite submitted to a better-matched event.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rejected abstract has been rewritten with a new title and takeaways and submitted to another event."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Reply to the rejection asking politely for any reviewer feedback"
                - "Read the accepted talks in the track you applied to"
                - "Ask the agent to suggest three sharper titles for the abstract"
                - "Submit the rewrite to a better-matched event"
            - name: Turning a blog post or internal write-up into a talk
              description: |-
                ## Purpose
                Any post or design document that drew attention already proves the topic interests people, and much of the thinking is done. Converting it into a talk means cutting it to one argument, replacing paragraphs with examples and visuals, and adding the story of how you got there, which writing often leaves out.

                ## Milestones
                1. One well-received post or write-up chosen as the source.
                2. Its core argument reduced to a single sentence.
                3. An outline with examples and visuals replacing most of the text.
                4. An abstract written and linked to the original post as evidence of interest.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A talk outline and abstract have been produced from an existing post or write-up, with the post linked as evidence."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the post or write-up that drew the most response"
                - "Reduce its argument to one sentence"
                - "Outline the talk with examples in place of paragraphs"
                - "Write an abstract that links to the original post"
            - name: Accessibility pass on slides and delivery
              description: |-
                ## Purpose
                Some of every audience is reading captions, sitting far back, colour blind or listening without seeing the screen. An accessibility pass, covering contrast, font size, colour-only meaning, described images and spoken descriptions of code and charts, widens who gets value from the talk and is increasingly expected by organisers.

                ## Milestones
                1. Every slide checked for contrast and minimum font size.
                2. Charts and diagrams changed so meaning does not rely on colour alone.
                3. Speaker notes include a spoken description of every visual that carries meaning.
                4. Slides shared in an accessible format before or after the talk.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One full deck passes a contrast and font size check and every meaningful visual has a spoken description in the notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run your deck through a contrast checker"
                - "Fix charts that rely on colour alone"
                - "Add a spoken description of each key visual to the notes"
                - "Ask the organiser whether live captions will be provided"
            - name: Asking for speaker travel and expense support
              description: |-
                ## Purpose
                Many conferences have a travel fund for speakers, especially first-timers, but only mention it in small print or when asked. Knowing what is common, asking clearly and early, and combining event support with your employer's budget can make the difference between accepting and declining a distant event.

                ## Milestones
                1. The event's speaker terms read for ticket, travel and hotel cover.
                2. A clear written request sent for any support not offered by default.
                3. Employer and event contributions agreed so costs are fully covered or knowingly accepted.
                4. Receipts and claim deadlines noted for reimbursement.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "For one accepted talk, all travel and hotel costs are either covered in writing or knowingly accepted before booking."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the speaker terms for what the event covers"
                - "Ask the organiser in writing about travel support"
                - "Agree with your manager what the employer will add"
                - "Note receipt rules and the claim deadline"
            - name: Paid, unpaid and pay-to-speak offers decision
              description: |-
                ## Purpose
                Speaking offers range from paid keynotes to unpaid community slots to sponsored sessions where a vendor pays for stage time, and some events quietly charge speakers. Setting your rules in advance, what you speak for free, when you ask for a fee and what you refuse, avoids awkward decisions on the spot and protects your credibility.

                ## Milestones
                1. The kinds of offer you are likely to get listed: community, commercial, sponsored and paid.
                2. A rule written for each, including when to ask for a fee or expenses.
                3. Your employer's view checked on accepting personal speaking fees.
                4. A polite decline message ready for offers that break your rules.

                ## Notes
                A conference that charges speakers to present is a warning sign; legitimate events rarely do. Check your employer's conflict-of-interest rules before accepting any fee.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written rules cover community, commercial, sponsored and paid offers, with the employer's position on fees recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the types of speaking offer you are likely to receive"
                - "Write your rule for each type"
                - "Ask HR or your manager about accepting personal speaking fees"
                - "Draft a short polite decline message"
            - name: First external meetup talk
              description: |-
                ## Purpose
                Meetup talks of 20 to 30 minutes are the usual bridge between internal sessions and conferences, with friendly audiences and organisers who welcome new speakers. Delivering one in your focus topic gives you a recording or slides to cite in future CFPs, which many committees look for.

                ## Milestones
                1. A meetup in your focus area chosen and a talk slot confirmed.
                2. A 20 to 30 minute talk built, rehearsed and cleared by your employer.
                3. The talk delivered, and recorded if the meetup allows.
                4. Slides published and the talk added to your talk page.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 20 to 30 minute talk has been delivered at an external meetup, with slides published on your talk page."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Message two meetup organisers in your field offering a talk"
                - "Agree a date, length and format with the organiser"
                - "Send the slides for employer review if required"
                - "Publish the slides on your talk page after the meetup"
            - name: Eight-week preparation for an accepted conference talk
              description: |-
                ## Purpose
                Acceptance emails tend to arrive two to four months before the event, and the gap fills with work unless the talk has its own plan. Working back from the date, with an outline by week two, slides by week four, a dry run by week six and final rehearsals in week eight, gets you to the stage ready rather than finishing slides in the hotel.

                ## Milestones
                1. A week-by-week plan from acceptance to event date.
                2. Outline and timing done by week two and slides drafted by week four.
                3. Employer review and a colleague dry run completed by week six.
                4. At least five full rehearsals done in the final two weeks.

                ## Notes
                Confirm the slot length, room size, screen ratio and microphone type with the organiser as soon as you accept. Each changes how you build the talk.
              priority: high
              deadlineOffsetDays: 56
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An accepted conference talk is delivered on the day with all eight weeks of the plan completed, including a dry run."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Write the week-by-week plan back from the event date"
                - "Confirm slot length, screen ratio and microphone with the organiser"
                - "Finish the outline and timing by the end of week two"
                - "Book the employer review and colleague dry run for week six"
            - name: Conference week logistics and tech check
              description: |-
                ## Purpose
                Lost adapters, a hotel far from the venue and a speaker check-in missed because of a flight delay cause more stage disasters than poor content. Planning travel, arrival a day early, kit and a venue tech check removes the avoidable problems so your attention goes on the talk.

                ## Milestones
                1. Travel and hotel booked with arrival at least half a day before your slot.
                2. A kit list packed: adapters, clicker, charger, slides on a memory stick and in the cloud.
                3. A tech check done in the actual room or with the AV team.
                4. Speaker check-in, room and time confirmed the day before.

                ## Notes
                Start from the **Trip** template for bookings and packing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You arrive before your slot with a complete kit, and a venue tech check has been done before the talk."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book travel to arrive at least half a day before your slot"
                - "Pack adapters, clicker, charger and slides on a memory stick"
                - "Ask the AV team when you can test in the room"
                - "Confirm speaker check-in, room and time the day before"
            - name: Half-day workshop or tutorial delivery
              description: |-
                ## Purpose
                Workshops are the format where engineers and practitioners show real depth, and they often have less competition in CFPs than talks. Running a hands-on session means designing exercises, preparing environments that work on many laptops and pacing a room of mixed ability, which is a different craft from a talk.

                ## Milestones
                1. Learning outcomes and three to five exercises designed for the session.
                2. A setup guide and environment tested on at least two operating systems.
                3. Helper or teaching assistant support arranged for rooms over 20 people.
                4. The workshop delivered with a short feedback form at the end.

                ## Notes
                Send setup instructions a week ahead, and have a cloud or container fallback for laptops that will not cooperate.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day workshop with tested exercises and setup guide has been delivered and feedback collected."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write three learning outcomes for the workshop"
                - "Design an exercise for each outcome"
                - "Test the setup guide on two operating systems"
                - "Send setup instructions to attendees a week ahead"
            - name: Panel appearance preparation
              description: |-
                ## Purpose
                Panels look easy and often go badly: rambling answers, panellists agreeing with each other and no clear point. Preparing two or three sharp positions, a story for each and a short self-introduction lets you stand out on a panel and makes moderators want you back.

                ## Milestones
                1. The moderator's planned questions and fellow panellists known.
                2. Two or three distinct positions prepared, each with a supporting story.
                3. A 30-second introduction written and practised.
                4. One point of respectful disagreement ready to make the discussion useful.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You arrive at the panel with the moderator's questions, three prepared positions and a practised 30-second introduction."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the moderator for the planned questions and panellists"
                - "Prepare two or three positions with a story for each"
                - "Practise a 30-second introduction aloud"
                - "Prepare one point where you respectfully disagree"
            - name: Keynote invitation preparation
              description: |-
                ## Purpose
                A keynote invitation means the organisers want a broad, inspiring talk for the whole audience, not a narrow technical session, and the stakes and scrutiny are higher. Preparing means agreeing the brief with the organiser, widening your material for a mixed audience and rehearsing far more than for a track talk.

                ## Milestones
                1. The brief agreed with the organiser: audience, theme, length and what they hope people leave with.
                2. A talk built around one big idea that works for the whole audience.
                3. At least two dry runs with people outside your specialism.
                4. Fees, travel, recording rights and any employer approval agreed in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A keynote brief and terms are agreed in writing and the talk has been dry-run twice with non-specialists before the event."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the organiser what they want the audience to leave with"
                - "Agree fee, travel and recording rights in writing"
                - "Build the talk around one idea a mixed audience can follow"
                - "Book two dry runs with people outside your field"
            - name: Internal tech talk series as a stepping stone
              description: |-
                ## Purpose
                For engineers, internal tech talks and engineering all-hands slots are the safest place to test material, and senior engineers notice who teaches well. Giving two or three internal talks on topics you plan to take outside builds confidence, sharpens the content and creates evidence for your review at the same time.

                ## Milestones
                1. The internal channels for talks identified: tech talks, guild meetings, all-hands.
                2. Two internal talks booked on topics you also plan to submit externally.
                3. Both delivered and recorded on the internal platform where allowed.
                4. Feedback from each folded into the external version of the talk.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two internal talks on planned external topics have been delivered and their feedback applied to the external versions."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find out who runs internal tech talks or guild sessions"
                - "Book two slots on topics you also plan to submit outside"
                - "Deliver both and ask for written comments"
                - "Apply the comments to the external version of each talk"
            - name: Speaking at conferences in a second language
              description: |-
                ## Purpose
                Speakers presenting in a second language often have the strongest content and the least confidence, and they rarely need perfect fluency to succeed. Writing a fuller script, slowing down, putting key terms on slides and rehearsing the hardest phrases makes a talk clear without sounding memorised.

                ## Milestones
                1. A full script written for the talk, with difficult phrases simplified.
                2. Key terms and numbers placed on slides so the audience can read them.
                3. The hardest passages rehearsed until they flow.
                4. A plan for Q&A, including asking people to repeat or rephrase questions.

                ## Notes
                Many audiences are international too. Plain language and a slower pace help everyone, not only you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A scripted talk with key terms on slides has been rehearsed in full and delivered in your second language."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a full script of the talk in plain language"
                - "Put key terms and numbers on the slides"
                - "Rehearse the three hardest passages until they flow"
                - "Prepare a phrase for asking a questioner to rephrase"
            - name: Speaking on your employer's behalf at an industry event
              description: |-
                ## Purpose
                Sometimes the invitation comes through work: a vendor's user conference, a customer summit or a sponsored slot your company has paid for. These talks carry the company's name, so marketing, communications and sometimes sales will have views, and the audience expects substance rather than a pitch. Agreeing roles early lets you give a talk that helps both the company and your own standing.

                ## Milestones
                1. The goal of the slot agreed with marketing or communications, and who signs off the slides.
                2. A clear line drawn between useful content and product promotion.
                3. Brand templates, disclaimers and approved customer references obtained.
                4. The talk delivered and credited to you by name in the programme and recording.

                ## Notes
                Sponsored slots are judged harshly when they become sales pitches. Push for a practitioner talk with the product mentioned only where it is genuinely part of the story.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An employer-sponsored talk has been delivered with sign-off agreed in advance and your name credited in the programme."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask marketing or communications what the company wants from the slot"
                - "Agree who signs off the slides and by when"
                - "Collect the brand template and any required disclaimers"
                - "Check that the programme and recording credit you by name"
            - name: Encouraging your team members to speak
              description: |-
                ## Purpose
                Managers and tech leads who help their people speak raise the team's profile, help hiring and give those people evidence for promotion. Running a light programme, spotting talk ideas in team work, sponsoring CFP time and offering dry runs, costs little and is remembered by the people you helped.

                ## Milestones
                1. Each team member asked whether they want to speak and on what.
                2. Time agreed for interested people to write abstracts and rehearse.
                3. At least two team members submitting to an event within six months.
                4. Dry runs offered and held for every accepted talk.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least two team members have submitted CFPs within six months, with dry runs held for every acceptance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask each team member in a one-to-one whether they would like to speak"
                - "Point out talk-worthy work from the last quarter"
                - "Agree time for abstract writing and rehearsal"
                - "Host a dry run for each accepted talk"
            - name: Speaker mentoring and first-time speaker programmes
              description: |-
                ## Purpose
                Many conferences and community groups run schemes that pair new speakers, often from groups under-represented on stage, with experienced mentors who review abstracts and rehearse with them. Joining one shortens the learning curve and often comes with a reserved slot or travel support.

                ## Milestones
                1. Three schemes or first-time speaker tracks found in your field.
                2. An application made to at least one.
                3. A mentor matched and a schedule of sessions agreed.
                4. One abstract and one rehearsal reviewed with the mentor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "You have joined a speaker mentoring scheme and reviewed at least one abstract and one rehearsal with a mentor."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Search for first-time speaker tracks and mentoring schemes in your field"
                - "Apply to the scheme that best fits your topic"
                - "Agree a session schedule with your mentor"
                - "Bring one abstract and one rehearsal recording to the mentor"
            - name: Linking talks to review and promotion evidence
              description: |-
                ## Purpose
                Talks only help a career if the people deciding on pay and promotion know about them and see why they matter. Recording each talk with its reach, the expertise it demonstrated and any follow-on effects such as hiring interest, inbound questions or invitations, turns speaking into evidence a review panel can weigh.

                ## Milestones
                1. Each talk recorded with audience size, event standing and the skill it showed.
                2. Follow-on effects noted: inbound messages, candidates who mentioned it, new invitations.
                3. Speaking mapped to the relevant expectation in your career framework.
                4. A short speaking summary included in your next review or promotion packet.

                ## Notes
                Panels care less about the number of talks than about what they say about your expertise and influence beyond the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A speaking summary tied to your career framework is included in your most recent review or promotion submission."
                cadence: rolling
              tasks:
                - "Find the line in your career framework that speaking supports"
                - "Record audience size and follow-on effects for each talk"
                - "Update the speaking summary for your next review @recurring(quarterly)"
                - "Share the summary with your manager before review season"
            - name: Joining a conference programme committee
              description: |-
                ## Purpose
                Reviewing proposals shows you, faster than anything else, why talks are accepted or rejected, and committee members become known to organisers and other leading speakers. Volunteering for a committee once you have a few talks behind you deepens your standing in the field and sharpens your own abstracts.

                ## Milestones
                1. Events with open committee or reviewer calls identified.
                2. A short note sent to an organiser offering to review.
                3. A full review cycle completed with written scores and comments.
                4. Three lessons for your own abstracts written down afterwards.

                ## Notes
                Declare conflicts of interest, such as reviewing colleagues or competitors, and follow the committee's confidentiality rules.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One full CFP review cycle has been completed as a committee member, with three lessons for your own abstracts recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Look for events that recruit programme committee volunteers"
                - "Offer to review in a short note to a past organiser"
                - "Complete every assigned review with scores and comments"
                - "Write three lessons for your own abstracts"
            - name: Curating a track or hosting a meetup series
              description: |-
                ## Purpose
                Experienced speakers who host a track or run a meetup shape what their field talks about and meet every rising speaker in it. Taking on one track at a conference or a season of a meetup is a serious time commitment, so it works best with a co-host and a clear schedule.

                ## Milestones
                1. A track or meetup season agreed with the organisers, with a co-host.
                2. A call for speakers written and promoted.
                3. A balanced line-up selected, including at least one first-time speaker.
                4. Every session hosted with speaker briefings and thank-you messages sent.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "One conference track or meetup season has been curated and hosted, with at least one first-time speaker included."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask an organiser whether a track host or co-host role is open"
                - "Recruit a co-host to share the work"
                - "Write and promote a call for speakers"
                - "Brief every speaker a week before their session"
            - name: Building and touring a signature talk
              description: |-
                ## Purpose
                Established speakers often have one talk they refine and give many times, each version sharper than the last, and it becomes the thing they are known for. Choosing your strongest talk, tightening it through repeated delivery and offering it to a planned set of events gets more reach per hour of preparation than writing new talks every time.

                ## Milestones
                1. Your best-rated talk chosen as the signature talk.
                2. A tightened version with updated examples and a stronger ending.
                3. The talk submitted to at least four events in different regions or communities.
                4. A high-quality recording of the talk published.

                ## Notes
                Check whether each event requires talks not given elsewhere. Some flagship conferences want new material, while most meetups are glad of a proven talk.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signature talk has been delivered at four or more events and a high-quality recording is published."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Pick the talk with the best feedback as your signature talk"
                - "Update its examples and rewrite the ending"
                - "Submit it to four events in different communities"
                - "Refresh its examples with this year's developments @recurring(quarterly)"
            - name: Coaching first-time speakers
              description: |-
                ## Purpose
                Once you have given a dozen talks, the most useful thing you can offer is help to the people starting out, and teaching it sharpens your own craft. Coaching one or two first-time speakers a year through abstract, rehearsal and delivery builds your standing in the community and gives you sponsors of your own among their organisers.

                ## Milestones
                1. One or two first-time speakers agreed as mentees.
                2. Each mentee's abstract reviewed and submitted.
                3. At least two rehearsals held with written feedback.
                4. Each mentee's talk delivered and a debrief held afterwards.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least one first-time speaker you coached has delivered a talk, with abstract review, two rehearsals and a debrief logged."
                cadence: cyclic
              tasks:
                - "Offer to coach one first-time speaker through a mentoring scheme"
                - "Review the mentee's abstract before submission"
                - "Hold a check-in with each mentee on their progress @recurring(monthly:15)"
                - "Run a debrief with each mentee after their talk"
---

# Conference Speaking for Career

This area is for knowledge workers and engineers who want a stage to do some of their career work for them: a talk accepted at a respected conference tells hiring managers, promotion panels and peers what you know far faster than a CV line. It starts with foundations (why you are speaking, what you can speak about, employer clearance, a bio and a baseline recording, a first short talk), then the machinery of a CFP calendar, abstract sessions and a talk library, the skills of structure, slides, demos, delivery and Q&A, decisions about which events are worth the trip, the talks themselves from meetup to keynote, variants for second-language speakers, managers and internal speakers, and finally the specialist work of programme committees, signature talks and coaching others.

What repeats is a monthly CFP sweep and abstract session, a weekly rehearsal slot and idea capture, a quarterly pipeline review and bio refresh, and a yearly speaking plan. The Content pipeline, Portfolio piece, Feedback themes, Metrics log and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
