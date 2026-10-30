---
id: product-management.product-discovery-interviews
name: Product Discovery Interviews
description: "Recruiting, running and writing up customer conversations every week, from screeners, consent and a shared notes space to readouts, interviewing skills and specialist rounds with churned, enterprise and overseas users."
category: business
version: 1.0.0
tags: [product-management, product-discovery-interviews, team, founder, knowledge-worker, customer-interviews, continuous-discovery, user-research]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - purchase-decision
    - feedback-themes
    - skills-matrix
    - metrics-log
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Discovery Interviews
          description: "Talking to customers and prospects regularly to understand their problems and workflows before deciding what to build, with notes the whole team can read."
          projects:
            - name: Discovery learning goals for this quarter
              description: |-
                ## Purpose
                Interviews without a question to answer drift into friendly chats that nobody can act on. Writing down the three or four things the team most needs to learn this quarter, each tied to a decision it will inform, gives every conversation a reason and makes it obvious when you have heard enough.

                ## Milestones
                1. Three or four learning goals written as questions, each tied to a decision due this quarter.
                2. Each goal marked with the customer segment best placed to answer it.
                3. The goals agreed with the product lead, the designer and the engineering lead.
                4. The goals pinned at the top of the shared interview notes space.

                ## Notes
                A good learning goal can be answered by hearing about past behaviour, for example how finance teams approve invoices today. If only a launch can answer it, it belongs on the experiment list instead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of three or four learning goals, each linked to a named decision, is agreed by the product trio and pinned in the notes space."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the product decisions the team must make in the next three months"
                - "Rewrite each decision as a question customers could help answer"
                - "Agree the final three or four goals with the design and engineering leads"
                - "Refresh the discovery learning goals at the start of the quarter @recurring(quarterly)"
            - name: Interview participant criteria and screener
              description: |-
                ## Purpose
                Talking to whoever replies first fills the calendar with enthusiasts, friends of the company and people who will never buy. A short written profile of who you need, and a screener of five to eight questions that filters on behaviour rather than job title, means each hour of interviewing reaches someone whose experience answers your learning goals.

                ## Milestones
                1. A participant profile naming the behaviours, context and recency that qualify someone.
                2. Exclusions written down, such as competitors, staff and anyone interviewed in the last 90 days.
                3. A screener of five to eight questions built in your form tool, with qualifying answers marked.
                4. The screener tested on three colleagues and one real respondent before wide release.

                ## Notes
                Screen on what people did recently, such as how many invoices they approved last month, rather than how they describe themselves. Put the qualifying answer among plausible alternatives so it cannot be guessed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published screener with marked qualifying answers and written exclusions has filtered at least ten real respondents."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the three behaviours that make someone worth interviewing"
                - "List who to exclude and the cooldown between interviews"
                - "Build the screener in your form tool with qualifying answers marked"
                - "Test the screener on three colleagues and fix any confusing question"
            - name: Interview consent and recording policy
              description: |-
                ## Purpose
                Recording a customer without clear consent, or keeping their recordings forever in someone's personal drive, is a privacy problem waiting to surface in a security review or a complaint. A one-page policy covering what you tell participants, how consent is captured, who can watch recordings and when they are deleted lets the whole team interview without improvising.

                ## Milestones
                1. A consent script read at the start of every call, covering recording, use and withdrawal.
                2. A consent record, such as a form or checkbox, stored with each participant entry.
                3. Storage location, access list and deletion period agreed with whoever owns privacy in your organisation.
                4. The policy linked from the interview note template and the shared notes space.

                ## Notes
                Data protection rules differ by country and sector. Ask your privacy, legal or security contact to review the policy rather than treating this page as the final word.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consent script, a stored consent record per participant and a deletion period approved by the privacy owner are written into one policy page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find out who owns privacy and data protection questions in your organisation"
                - "Draft a short consent script covering recording, use and withdrawal"
                - "Agree storage, access and deletion periods with the privacy owner"
                - "Reread the consent policy against current data rules @recurring(yearly)"
            - name: Shared interview notes repository
              description: |-
                ## Purpose
                Notes scattered across personal documents, notebooks and chat threads mean an engineer who wants to hear from customers cannot find a single conversation. One shared space with a page per interview, a consistent naming convention and an index gives the whole team the same evidence and survives people leaving.

                ## Milestones
                1. One shared location chosen that everyone on the product team can read.
                2. A naming convention in use, such as date, segment and company.
                3. An index page listing every interview with date, segment and a one-line headline.
                4. Existing notes from the past six months moved in and renamed.

                ## Notes
                Pick the tool the team already opens daily. A plain document folder that gets read beats a dedicated research tool that nobody visits.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every interview from the last six months sits in one shared space under the same naming convention, listed on an index page."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the shared space the product team already uses every day"
                - "Write the naming convention at the top of the index page"
                - "Move the last six months of interview notes into the space"
                - "Share the index link with the design, engineering and support leads"
            - name: Standard interview note template
              description: |-
                ## Purpose
                When every interviewer writes notes differently, comparing ten conversations means reading ten formats. A template with fixed sections for context, the participant's story, pain points in their words, workarounds, surprises and follow-ups makes notes skimmable and lets patterns show across a batch.

                ## Milestones
                1. A template with sections for participant context, story, quotes, workarounds, surprises and follow-ups.
                2. A header block holding date, interviewer, segment, consent status and recording link.
                3. The template used for five consecutive interviews and adjusted once.
                4. The template set as the default for new notes in the shared space.

                ## Notes
                Start from the **Meeting notes** template. Keep it short enough to fill in within 20 minutes of the call ending.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five consecutive interviews are written up on the same template, which is set as the default in the shared notes space."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the meeting notes template and rename it for interviews"
                - "Add a header block for date, segment, consent and recording link"
                - "Use the template on the next five interviews without changing it"
                - "Adjust the sections once based on what was always empty or missing"
            - name: Recruiting sources map for customers and prospects
              description: |-
                ## Purpose
                Most teams recruit through one channel, usually the customer success manager's favourite accounts, and hear the same voices for a year. Listing every channel you could recruit through, such as in-app prompts, support tickets, sign-up surveys, online communities, sales calls and paid panels, with the yield and cost of each, shows where the gaps in your sample come from.

                ## Milestones
                1. At least six recruiting sources listed with owner, cost and who they reach.
                2. Each source marked as reaching active customers, churned customers or prospects.
                3. Two sources chosen for prospects who have never used the product.
                4. Owners of each internal source told how and when you will ask for introductions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A recruiting sources map lists at least six channels with cost and reach, including two that reach prospects who have never used the product."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every place customers or prospects already talk to the company"
                - "Note the owner, cost and audience for each source"
                - "Pick two sources that reach people who have never used the product"
                - "Agree with sales and support how to ask them for introductions"
            - name: Interview recording and transcription tools
              description: |-
                ## Purpose
                Typing notes while listening halves the attention you can give the participant, and a call with no recording leaves arguments about what was said. Choosing one recording and transcription set-up that works with your video tool, keeps data where your policy says and exports short clips lets interviewers listen properly and quote accurately.

                ## Milestones
                1. Requirements written: video tool compatibility, transcript languages, clip export and data location.
                2. Two or three options trialled on a practice interview.
                3. One option chosen and approved by whoever signs off on software and security.
                4. A short how-to page added to the shared notes space.

                ## Notes
                Start from the **Purchase decision** template. Check where transcripts are stored and whether the vendor uses them to train its own models before signing up.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One approved recording and transcription tool is in use for interviews, with a how-to page in the notes space."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the five things the tool must do, including where data is stored"
                - "Trial two options on a practice interview with a colleague"
                - "Get security or procurement sign-off on the chosen tool"
                - "Write a one-page how-to for recording, transcribing and clipping"
            - name: Participant thank-you and incentive policy
              description: |-
                ## Purpose
                Prospects and end users owe you nothing, and an hour of their time deserves recognition, but paying some enterprise customers can breach their employer's gift rules. A written policy on what you offer each group, how it is delivered and what the budget is stops interviewers negotiating case by case and keeps the finance team on side.

                ## Milestones
                1. Incentive amounts or alternatives agreed for prospects, end users and enterprise customers.
                2. A delivery method chosen, such as digital gift cards or a charity donation.
                3. A quarterly budget approved and a simple tracking sheet set up.
                4. A note on when not to offer payment, such as public sector buyers or regulated clients.

                ## Notes
                Many corporate employees cannot accept gifts. A donation to a charity of their choice, or early access, is a common alternative; check tax treatment with finance.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written incentive policy with amounts per group, a delivery method and an approved quarterly budget is in the notes space."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask finance what incentives and gift limits the company already allows"
                - "Set an amount or alternative for each participant group"
                - "Create a tracking sheet for incentives sent and their cost"
                - "Revisit incentive amounts against response rates @recurring(yearly)"
            - name: Assumptions to test in the next interviews
              description: |-
                ## Purpose
                Every roadmap rests on beliefs about customers that nobody has checked, such as that admins set up the product or that the pain happens weekly. Listing those beliefs, ranking them by how much damage being wrong would do, and turning the top five into interview topics points the next conversations at the riskiest ground.

                ## Milestones
                1. At least fifteen assumptions written as plain statements about customer behaviour.
                2. Each assumption scored for importance and for the evidence currently held.
                3. The top five turned into interview topics, each with a question about past behaviour.
                4. Each of the five marked as supported, contradicted or unclear after ten interviews.

                ## Notes
                Interviews test assumptions about current behaviour and problems well. Assumptions about whether people will pay or switch need an experiment, not a conversation.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked list of at least fifteen assumptions exists, with the top five each marked supported, contradicted or unclear after ten interviews."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to pull customer assumptions out of the current roadmap and specs"
                - "Score each assumption for impact if wrong and evidence held"
                - "Write one past-behaviour question for each of the top five"
                - "Mark each of the five as supported, contradicted or unclear after the tenth interview"
            - name: First five discovery conversations
              description: |-
                ## Purpose
                The first interviews are the hardest to start and the most useful for showing what the guide gets wrong. Booking five conversations within a month, with people who pass the screener, gets the habit moving and produces notes the team can read before anyone debates the plan.

                ## Milestones
                1. A first-draft guide of eight to twelve questions grounded in the learning goals.
                2. Five qualified participants booked within four weeks.
                3. All five interviews held, recorded with consent and written up on the template.
                4. A half-page summary of what surprised you shared with the team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five recorded, consented interviews with screened participants are written up and a summary of surprises is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft eight to twelve questions from the learning goals"
                - "Send the screener to your two best recruiting sources"
                - "Book five qualified participants in the next four weeks"
                - "Share a half-page summary of surprises after the fifth call"
            - name: Weekly customer interview habit
              description: |-
                ## Purpose
                Teams that talk to customers once a quarter make the other twelve weeks of decisions from memory. One interview a week, held in a fixed slot and attended by at least two people from the product team, keeps fresh evidence arriving at the pace decisions are made.

                ## Milestones
                1. A standing weekly slot blocked in the interviewers' calendars.
                2. An interview held in at least ten of the next twelve weeks.
                3. Every interview written up within a day of the call.
                4. Twelve consecutive weeks with the next interview booked at least a week ahead.

                ## Notes
                Booking is the hard part. The weekly task to fill next week's slot matters more than the interview itself.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Interviews are held in at least ten of any twelve consecutive weeks, each written up within a day."
                cadence: rolling
              tasks:
                - "Block a recurring one-hour interview slot for the product trio"
                - "Fill next week's interview slot from the recruiting list @recurring(weekly:thu)"
                - "Hold this week's customer interview and write it up the same day @recurring(weekly:tue)"
                - "Count interviews held each quarter and note any gap weeks"
            - name: Always-on interview recruiting pipeline
              description: |-
                ## Purpose
                Recruiting one participant at a time, a week before you need them, is why weekly interviewing usually collapses by the second month. An automated invitation, such as an in-app prompt or a line in onboarding emails, feeding a list of pre-screened volunteers means there are always more willing people than slots to fill.

                ## Milestones
                1. One automated invitation running inside the product or in a lifecycle email.
                2. Responses landing in a single list with screener answers attached.
                3. At least twenty screened volunteers available at any time.
                4. A monthly batch of invitations sent to segments that are under-represented.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The recruiting list holds at least twenty screened volunteers in any given month, fed by at least one automated invitation."
                cadence: rolling
              tasks:
                - "Write a two-line invitation asking customers to talk about their work"
                - "Set up the invitation in-app or in a lifecycle email with the screener linked"
                - "Send a batch of invitations to an under-represented segment @recurring(monthly:5)"
                - "Remove volunteers who have not replied after two contacts"
            - name: Interview scheduling and no-show routine
              description: |-
                ## Purpose
                A sizeable share of booked interviews can vanish to no-shows and late reschedules, and each one wastes two people's preparation. A booking link with buffer times, a confirmation with the call link and a reminder the day before cuts no-shows noticeably and makes rebooking quick.

                ## Milestones
                1. A booking link offering only the agreed interview slots, with time zones shown.
                2. An automatic confirmation including the call link, length and what to expect.
                3. A reminder sent the day before and an hour before each call.
                4. The no-show rate tracked monthly and kept under 15 percent.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No-shows stay under 15 percent of booked interviews across three months, with confirmations and reminders sent for every call."
                cadence: rolling
              tasks:
                - "Create a booking link limited to the agreed interview slots"
                - "Write the confirmation message with call link, length and agenda"
                - "Confirm every interview booked for the coming week @recurring(weekly:mon)"
                - "Offer two new times within a day to anyone who misses a call"
            - name: Same-day interview debrief
              description: |-
                ## Purpose
                Memory of an interview fades within hours, and two people on the same call often heard different things. A 15-minute debrief straight after each conversation, covering the top surprises, the strongest quote and what to ask next time, captures the interpretation while it is fresh and surfaces disagreements early.

                ## Milestones
                1. A 15-minute debrief slot attached to every interview booking.
                2. Three debrief questions written into the note template.
                3. Debrief notes completed for ten consecutive interviews.
                4. Disagreements between interviewers recorded rather than smoothed over.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten consecutive interviews each have debrief notes completed on the same day, with any disagreements between interviewers recorded."
                cadence: rolling
              tasks:
                - "Extend every interview booking by 15 minutes for the debrief"
                - "Add three debrief questions to the end of the note template"
                - "Run the debrief before either interviewer opens email"
                - "Note any point where the interviewers heard different things"
            - name: One-page interview snapshots
              description: |-
                ## Purpose
                Full transcripts are too long for a busy engineer or executive, so they read nothing. A one-page snapshot per interview, with a memorable headline, three key quotes, the participant's story in five lines and the open questions, turns each conversation into something people actually look at.

                ## Milestones
                1. A snapshot layout agreed and added to the notes space.
                2. A snapshot written for every interview within two days.
                3. Snapshots for the last ten interviews visible together on one page or board.
                4. At least one teammate outside the interview team reading snapshots each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every interview from the last month has a one-page snapshot with headline, quotes and story, displayed together on one page."
                cadence: rolling
              tasks:
                - "Design a one-page snapshot layout with headline, quotes and story"
                - "Write snapshots for the last five interviews"
                - "Ask the agent to draft each snapshot from the transcript, then edit it yourself"
                - "Post each new snapshot in the team channel with its headline"
            - name: Monthly interview insights readout
              description: |-
                ## Purpose
                Notes sitting in a folder change nothing until someone tells the wider team what they mean. A 30-minute monthly readout to product, design, engineering, sales and support, covering what was heard, how it changed your view and what is still unknown, turns interviews into shared understanding.

                ## Milestones
                1. A monthly 30-minute readout in the calendar for the wider team.
                2. A standing agenda: what we heard, what changed, what we still do not know.
                3. Each readout including at least two short audio or video clips, where consent allows.
                4. Six consecutive readouts held, with notes posted afterwards.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly readouts are held, each with posted notes and at least two clips or direct quotes."
                cadence: rolling
              tasks:
                - "Book a 30-minute monthly readout with product, sales and support"
                - "Prepare the readout from the month's snapshots and clips @recurring(monthly:24)"
                - "Post the readout notes and recording in the team channel"
                - "Ask attendees which question they want answered next month"
            - name: Research participant panel upkeep
              description: |-
                ## Purpose
                A panel of customers who have agreed to be contacted goes stale fast: people change jobs, lose interest or get asked too often. Regular upkeep, with contact limits, a cooldown between sessions and prompt removal of anyone who asks, keeps the panel willing and protects your relationship with customers.

                ## Milestones
                1. A panel list with consent date, segment, last contact and times interviewed.
                2. A contact limit agreed, such as no more than one session per person per quarter.
                3. Opted-out or bounced contacts removed within a week of the request.
                4. The panel reviewed every quarter for size and segment balance.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The panel list records consent and last contact for every member, and no member is contacted more often than the agreed limit."
                cadence: rolling
              tasks:
                - "Add consent date and last contact columns to the panel list"
                - "Write the contact limit and cooldown at the top of the list"
                - "Remove opted-out contacts and check segment balance @recurring(quarterly)"
            - name: Interview tag list maintenance
              description: |-
                ## Purpose
                Tags let you pull every mention of onboarding pain or reporting workarounds in seconds, but only while everyone uses the same small set. A controlled list of 20 to 40 tags with definitions, reviewed each quarter to merge duplicates and retire unused ones, keeps notes searchable as the volume grows.

                ## Milestones
                1. A tag list of 20 to 40 tags, each with a one-line definition.
                2. Tags grouped by type, such as workflow step, pain, segment and tool.
                3. Duplicate and unused tags merged or removed each quarter.
                4. Two interviewers tagging the same notes with mostly matching results.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A defined list of 20 to 40 tags is in use and reviewed quarterly, and two interviewers tag the same notes consistently."
                cadence: rolling
              tasks:
                - "List the tags currently in use and count how often each appears"
                - "Write a one-line definition for each tag you keep"
                - "Merge duplicate tags and retire unused ones @recurring(quarterly)"
                - "Have two interviewers tag one set of notes and compare the results"
            - name: Quarterly discovery coverage review
              description: |-
                ## Purpose
                Without checking, most teams find they spent the quarter interviewing the same segment, region and company size. Laying out who you talked to against your customer base each quarter shows which groups went unheard and sets the recruiting focus for the next three months.

                ## Milestones
                1. A coverage table of interviews by segment, role, company size and region.
                2. The table compared with the mix of active customers and target prospects.
                3. Two under-covered groups named as recruiting priorities.
                4. Four quarterly reviews completed, with priorities recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four consecutive quarterly coverage tables exist, each naming two under-covered groups as recruiting priorities."
                cadence: cyclic
              tasks:
                - "Add segment, role and region fields to the interview index"
                - "Pull the customer mix by segment from the CRM or billing data"
                - "Build the coverage table and pick two recruiting priorities @recurring(quarterly)"
                - "Share the priorities with whoever runs recruiting"
            - name: Interview data retention sweep
              description: |-
                ## Purpose
                Recordings and transcripts pile up and quietly outlive the deletion period promised to participants. A regular sweep that deletes expired recordings, removes personal details from the notes you keep and honours withdrawal requests turns the consent policy from a promise into practice.

                ## Milestones
                1. An inventory of every place recordings, transcripts and notes are stored.
                2. Recordings past the agreed period deleted, with the date logged.
                3. Names and contact details removed from notes kept for the long term.
                4. Every withdrawal request actioned and logged within the agreed time.

                ## Notes
                Deletion cannot be undone. Keep the anonymised notes and quotes you need before removing a recording, and follow your organisation's records rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, recordings past their deletion date are removed and logged, with no withdrawal request outstanding."
                cadence: rolling
              tasks:
                - "List every place recordings, transcripts and notes are stored"
                - "Delete expired recordings and log the sweep date @recurring(quarterly)"
                - "Strip names and contact details from notes you keep long term"
                - "Log each withdrawal request and the date it was actioned"
            - name: Writing open, non-leading interview questions
              description: |-
                ## Purpose
                Questions that suggest the answer, such as asking whether a faster export would help, teach you only that people are polite. Practising how to rewrite leading, closed and hypothetical questions into open prompts about real experience is the single skill that most improves interview quality.

                ## Milestones
                1. Twenty questions from past guides sorted into leading, closed, hypothetical and open.
                2. Every non-open question rewritten as an open prompt about past experience.
                3. The rewritten guide used in three interviews.
                4. A short list of your own habitual leading phrases kept beside the guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty past questions are classified and rewritten, and the revised guide has been used in three interviews."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Copy twenty questions from your past interview guides"
                - "Label each as leading, closed, hypothetical or open"
                - "Rewrite every non-open question as a prompt about past experience"
                - "Note the leading phrases you use most and keep the list by the guide"
            - name: Asking about the last time it happened
              description: |-
                ## Purpose
                People describe their ideal or average behaviour when asked in general, and their real behaviour only when walked through a specific recent example. Learning to anchor each topic on the last time something happened, then rebuilding it step by step with who, when, which tools and what went wrong, produces stories you can trust.

                ## Milestones
                1. An opening prompt about the last occurrence written for each learning goal.
                2. Three interviews run where every topic starts from a specific recent instance.
                3. At least one full timeline reconstructed per interview, from trigger to outcome.
                4. Generalisations in your notes flagged and kept apart from specific stories.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three interviews each contain at least one reconstructed timeline of a specific recent event, from trigger to outcome."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Rewrite each guide topic to open with the last time it happened"
                - "Practise the timeline technique on a colleague's recent purchase"
                - "Run three interviews using story-based openings for every topic"
                - "Mark generalisations in your notes so they are not read as facts"
            - name: Follow-up probes and comfortable silence
              description: |-
                ## Purpose
                The most useful detail usually arrives after the first answer, when the interviewer asks why, asks for an example or simply waits. Practising a small set of neutral probes and counting to five before filling a silence lets participants go further than they planned to.

                ## Milestones
                1. A card of six neutral probes, such as tell me more, what happened next and why was that.
                2. Talk time measured on two recordings, against a target of the participant speaking at least 80 percent.
                3. Three interviews where you hold a five-second pause after key answers.
                4. One new insight per interview traced back to a follow-up probe.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two recorded interviews show the participant speaking at least 80 percent of the time, with productive probes marked in the transcript."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write six neutral follow-up probes on a card for your desk"
                - "Measure your own talk time on two past recordings"
                - "Hold a five-second pause after key answers in three interviews"
                - "Mark in the transcript where a probe led to new detail"
            - name: Notes that separate quotes from interpretation
              description: |-
                ## Purpose
                Mixing what the participant said with what the note-taker concluded makes notes unreliable a month later, when nobody can tell which is which. A simple convention for verbatim quotes, observed behaviour and your own interpretation keeps the evidence honest and lets others reach their own conclusions.

                ## Milestones
                1. A three-part convention agreed: verbatim quote, observed behaviour, interpretation.
                2. The convention built into the note template with clear markers and an example.
                3. Five sets of notes written using the convention.
                4. A teammate able to tell quotes from interpretations in a sample without asking.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five sets of interview notes use the agreed convention, and a teammate correctly separates quotes from interpretations in a sample."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree markers for quotes, observations and interpretations"
                - "Add the markers and a worked example to the note template"
                - "Rewrite one old set of notes using the convention"
                - "Ask a teammate to sort a sample into quotes and interpretations"
            - name: Watching real workflows over screen share
              description: |-
                ## Purpose
                What people say they do and what they actually click through often differ, and the workarounds are where opportunities hide. Asking participants to share their screen and walk through a real task with their own data and tools reveals the spreadsheets, copying and pasting and side apps that never come up in conversation.

                ## Milestones
                1. A screen-share segment of 15 to 20 minutes added to the guide, with a task prompt.
                2. A script for asking permission and reminding people to hide sensitive data.
                3. Three interviews completed with a recorded walkthrough of a real task.
                4. Every workaround seen listed with the tool involved and the time it costs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recorded workflow walkthroughs are completed, with every observed workaround listed against its tool and time cost."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add a 15-minute screen-share task to the interview guide"
                - "Write the permission request and sensitive-data reminder"
                - "Run three interviews that include a real-task walkthrough"
                - "List each workaround seen and the tool it involved"
            - name: Turning compliments and hypotheticals into evidence
              description: |-
                ## Purpose
                Founders and teams often leave interviews delighted because the participant loved the idea, which is the least useful thing they could have heard. Learning to recognise compliments, future promises and generic claims as they happen, and to redirect them into questions about past spending, effort and current solutions, keeps interviews honest.

                ## Milestones
                1. Three warning signs written down: compliments, future promises and generic claims.
                2. A redirect question prepared for each, about past behaviour or money spent.
                3. Two past transcripts marked for every instance of the warning signs.
                4. Three new interviews where each warning sign was redirected at least once.

                ## Notes
                If the strongest evidence from an interview is that someone said they would use it, treat the interview as inconclusive.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two old transcripts are marked for warning signs and three new interviews show each sign redirected to past behaviour."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the three warning signs and a redirect question for each"
                - "Mark every compliment and promise in two old transcripts"
                - "Practise redirecting with a colleague playing an enthusiastic customer"
                - "Use the redirects in your next three interviews"
            - name: Peer review of a recorded interview
              description: |-
                ## Purpose
                Interviewers rarely hear themselves, so habits such as leading questions, interrupting and pitching the product go unnoticed for years. Swapping one recording a month with a peer and reviewing it against a short checklist is the quickest way to improve without formal training.

                ## Milestones
                1. A peer partner agreed and a review checklist of six to eight points written.
                2. One recording swapped and reviewed each month.
                3. Each review producing one specific thing to try next time.
                4. Six monthly reviews completed, with notes kept.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six monthly peer reviews are completed, each recording one specific change to try in the next interview."
                cadence: rolling
              tasks:
                - "Ask a fellow interviewer to swap recordings each month"
                - "Write a six-point review checklist covering questions, talk time and pitching"
                - "Swap and review one interview recording with your peer @recurring(monthly:18)"
                - "Record the one change you will try in your next interview"
            - name: Affinity synthesis of an interview batch
              description: |-
                ## Purpose
                After eight to twelve interviews, patterns exist in the notes but not yet in anyone's head. A two-hour affinity session, where the team clusters observations and quotes into themes named in the customer's language, turns a pile of notes into a short set of evidenced findings ready for opportunity mapping.

                ## Milestones
                1. Observations and quotes from eight to twelve interviews on a shared board, one per note.
                2. Notes clustered into themes by at least two team members.
                3. Each theme named in the customer's words, with the number of participants behind it.
                4. A findings page of themes, evidence and open questions handed to the opportunity map owner.

                ## Notes
                Start from the **Feedback themes** template. Count participants, not mentions: one talkative person can fill a cluster on their own.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A findings page lists each theme with the number of participants behind it and links to supporting quotes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Export one observation per note from the latest batch of interviews"
                - "Book a two-hour clustering session with two teammates"
                - "Name each theme in the customer's own words"
                - "Hand the findings page to whoever owns the opportunity map"
            - name: Interview guide revision after five calls
              description: |-
                ## Purpose
                First guides always contain questions that fall flat, topics that run long and gaps nobody anticipated. Reviewing the guide after five interviews, using what actually happened, gives a sharper version for the next batch and stops the team repeating the same weak questions for months.

                ## Milestones
                1. Notes from five interviews reviewed for questions that produced little.
                2. Weak questions cut or rewritten, and new topics from surprises added.
                3. Timings adjusted so the guide fits the slot with ten minutes spare.
                4. Version two of the guide saved with a short change note.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Version two of the interview guide is saved with a dated change note, after a review of five completed interviews."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Highlight the questions that produced short or vague answers"
                - "Add a topic for each surprise that came up unprompted"
                - "Trim the guide so it fits the slot with ten minutes spare"
                - "Save version two with a dated change note"
            - name: Choosing live calls or asynchronous video responses
              description: |-
                ## Purpose
                Live interviews give depth and follow-up but cost scheduling effort, while asynchronous video or written prompts reach more people across time zones with no chance to probe. Deciding which questions each method suits, rather than defaulting to one, makes the most of limited interviewing time.

                ## Milestones
                1. Current learning goals sorted by whether they need follow-up probing.
                2. One asynchronous prompt set trialled with five to eight participants.
                3. Responses compared with live interviews on depth and effort.
                4. A written rule for when to use each method.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule for choosing live or asynchronous methods exists, based on a trial with at least five asynchronous participants."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark which learning goals need live follow-up questions"
                - "Write a four-question asynchronous prompt set for one goal"
                - "Send the prompts to five to eight volunteers"
                - "Compare the answers with live interviews and write the rule"
            - name: Searchable quotes linked to product decisions
              description: |-
                ## Purpose
                Six months in, the team has dozens of interviews but cannot find the quote from the finance manager who described the month-end crunch. Pulling key quotes into a searchable list with tag, segment and source link, and linking them to the specs they informed, makes every interview reusable.

                ## Milestones
                1. A quotes list with columns for quote, tag, segment, date and source link.
                2. At least five quotes added from every interview.
                3. Each current spec linking to at least two supporting quotes.
                4. A teammate able to find quotes on a topic in under two minutes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every interview contributes at least five tagged quotes, and each current spec links to at least two of them."
                cadence: rolling
              tasks:
                - "Set up the quotes list with tag, segment, date and source columns"
                - "Add five quotes from each new interview to the list"
                - "Link supporting quotes into each spec in progress @recurring(monthly:12)"
                - "Time a teammate finding quotes on a chosen topic"
            - name: Discovery decision log with interview evidence
              description: |-
                ## Purpose
                When a decision is questioned months later, nobody remembers which conversations shaped it. A short log entry for each decision informed by interviews, with the evidence, the people heard from and what would change your mind, makes the reasoning visible and helps newcomers trust the process.

                ## Milestones
                1. A decision log with fields for decision, evidence, participants, date and reversal trigger.
                2. Entries backfilled for the last three significant product decisions.
                3. Every new interview-informed decision logged within a week.
                4. The log reviewed monthly for decisions whose evidence has since changed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The decision log holds entries for every interview-informed decision of the last quarter, each with evidence and a reversal trigger."
                cadence: rolling
              tasks:
                - "Create a decision log with evidence and reversal trigger fields"
                - "Backfill the last three decisions shaped by interviews"
                - "Review the log for decisions whose evidence has moved @recurring(monthly:28)"
            - name: Sample bias check on who gets interviewed
              description: |-
                ## Purpose
                Interview samples drift towards customers who are easy to reach: power users, friendly accounts, fluent English speakers and people in your time zone. Checking the last 20 participants for these patterns and naming whose voice is missing prevents decisions that serve only the loudest group.

                ## Milestones
                1. The last 20 participants listed with usage level, account health, region and language.
                2. Over-represented groups named with their share of the sample.
                3. Missing voices listed, such as low-usage accounts or non-buyers.
                4. A recruiting change agreed for each missing group.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bias check of the last 20 participants names over-represented and missing groups and records a recruiting change for each."
                cadence: cyclic
              tasks:
                - "List the last 20 participants with usage level, region and language"
                - "Name the groups that are over-represented or missing"
                - "Agree one recruiting change for each missing group"
                - "Repeat the bias check on the newest 20 participants @recurring(quarterly)"
            - name: Interview quality scorecard
              description: |-
                ## Purpose
                Without a shared standard, every interviewer believes their own interviews are fine. A scorecard of six to eight observable behaviours, such as open questions, story-based probing, no pitching and participant talk time, gives the team a common language for improvement and shows progress over months.

                ## Milestones
                1. A scorecard of six to eight behaviours, each rated on a three-point scale.
                2. Each interviewer's last two recordings scored as a baseline.
                3. A team average per behaviour recorded.
                4. One interview scored each month, showing change against the baseline.

                ## Notes
                Start from the **Skills matrix** template. Use the scorecard for coaching, never for performance ratings, or people will stop sharing recordings.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every interviewer has a baseline score on the agreed scorecard and one interview is scored each month for six months."
                cadence: rolling
              tasks:
                - "Draft six to eight observable interviewing behaviours"
                - "Score each interviewer's last two recordings as a baseline"
                - "Score one recent interview against the scorecard @recurring(monthly:9)"
                - "Share the team averages and pick one behaviour to work on"
            - name: Two-week discovery sprint of twelve interviews
              description: |-
                ## Purpose
                When a big decision is due, such as entering a new segment or rebuilding a core workflow, one interview a week is too slow. A two-week sprint of ten to twelve interviews, with recruiting done in advance and synthesis booked for the final day, produces a focused answer in time for the decision.

                ## Milestones
                1. A sprint brief naming the decision, the learning goals and the segment.
                2. Twelve qualified participants booked across the two weeks before the sprint starts.
                3. Ten or more interviews held and written up within the fortnight.
                4. A synthesis session and a decision recommendation completed on the final day.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least ten interviews are held within two weeks and a written recommendation is presented on the sprint's final day."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page sprint brief naming the decision it informs"
                - "Recruit and book twelve participants before the sprint begins"
                - "Book the synthesis session for the final afternoon"
                - "Present the recommendation to the decision-maker within three days"
            - name: Trade show and conference hallway interviews
              description: |-
                ## Purpose
                An industry event puts hundreds of prospects in one building, yet most product people spend it demoing at the stand. Planning short interviews of 10 to 15 minutes, with a pocket guide, a two-question screener and notes captured on a phone, can yield a month of prospect conversations in two days.

                ## Milestones
                1. A pocket guide of five questions and a two-question screener prepared.
                2. Ten interview slots pre-booked with attendees before the event.
                3. At least fifteen short conversations captured during the event.
                4. All notes typed up on the template within three days of returning.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least fifteen short interviews are captured at the event and written up on the template within three days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write a five-question pocket guide and a two-question screener"
                - "Email customers and prospects attending the event to pre-book slots"
                - "Set up a phone note template for capturing each conversation"
                - "Type up every conversation within three days of returning"
            - name: Customer site visit day
              description: |-
                ## Purpose
                Seeing a customer's office, warehouse floor or clinic shows the noise, interruptions, paper forms and shared screens that never appear on a video call. A planned visit day with two or three people observing different roles produces richer context than a dozen remote interviews about the same workflow.

                ## Milestones
                1. A host customer agreed, with the roles you will observe and any site rules.
                2. An observation guide and a split of who watches whom.
                3. The visit completed, with photos taken only where permitted.
                4. A visit write-up with a workflow sketch shared within a week.

                ## Notes
                Respect site rules on photos, confidential information and safety. Ask your host before photographing screens, documents or people.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A site visit is completed and a write-up with a workflow sketch is shared with the team within a week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask your account team which customer could host a visit"
                - "Agree the roles to observe and any site rules with the host"
                - "Split observation duties among the two or three visitors"
                - "Share the visit write-up and workflow sketch within a week"
            - name: Live interview observation for stakeholders
              description: |-
                ## Purpose
                A summary of what customers said rarely moves a sceptical executive or engineer the way hearing it directly does. Inviting stakeholders to observe a live interview silently, with a one-page brief beforehand and a short conversation afterwards, builds conviction and makes later readouts land.

                ## Milestones
                1. Observer ground rules written: camera off, messages to the note-taker only, no pitching.
                2. Two stakeholders who have never heard a customer interview invited.
                3. Each observer briefed beforehand and spoken to for ten minutes after.
                4. One thing each observer will do differently recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Two stakeholders observe a live interview and each records one change they will make as a result."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write observer ground rules for joining an interview silently"
                - "Invite two stakeholders who have not heard a customer call"
                - "Send each observer a one-page brief the day before"
                - "Ask each observer what they will do differently after the call"
            - name: Churned customer interview round
              description: |-
                ## Purpose
                Customers who left know exactly what failed them, but cancellation surveys capture only a dropdown reason. Interviewing five to eight recently churned customers within weeks of leaving, with a small thank-you and no attempt to win them back, reveals the moment the product stopped being worth it.

                ## Milestones
                1. A list of customers who cancelled in the last 60 days, with the reasons they gave.
                2. Five to eight interviews held, each opening with a promise not to sell.
                3. A timeline per customer from first doubt to cancellation.
                4. Findings shared with the product, customer success and retention owners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five to eight churned customers are interviewed each round, with a timeline from first doubt to cancellation for each."
                cadence: cyclic
              tasks:
                - "Pull the list of customers who cancelled in the last 60 days"
                - "Agree with customer success that the call includes no win-back offer"
                - "Reconstruct a timeline from first doubt to cancellation for each"
                - "Run a round of five to eight churned customer interviews @recurring(quarterly)"
            - name: Win and loss interviews with the sales team
              description: |-
                ## Purpose
                Sales teams often record lost deals as price or missing features, which is frequently the buyer's polite exit. Interviewing buyers soon after a decision, won or lost, with someone outside the sales team asking, surfaces the real evaluation criteria and the moments your product looked weak.

                ## Milestones
                1. An agreement with sales on which deals qualify and who contacts the buyer.
                2. A guide covering the trigger, evaluation, alternatives and deciding moment.
                3. One win or loss interview held each month.
                4. A quarterly summary of patterns shared with sales and product leadership.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One win or loss interview is held each month and a quarterly summary of patterns reaches sales and product leadership."
                cadence: rolling
              tasks:
                - "Agree with the sales lead which closed deals qualify for an interview"
                - "Write a guide covering trigger, evaluation, alternatives and the deciding moment"
                - "Hold one win or loss interview with a recent buyer @recurring(monthly:15)"
                - "Send sales and product leaders a quarterly patterns summary"
            - name: Founder's first fifty problem interviews
              description: |-
                ## Purpose
                Before writing code or raising money, a founder's riskiest assumption is usually that the problem is painful, frequent and already costing people time or money. Fifty problem interviews with people in the target market, without showing a solution, give evidence for or against that belief, and the notes become the base for every later pitch.

                ## Milestones
                1. A target customer profile and a one-sentence problem hypothesis written.
                2. Fifty interviews held with people who match the profile, none of them friends or family.
                3. Each interview scored for problem frequency, current spend and workaround effort.
                4. A go, change or stop decision written up with the evidence behind it.

                ## Notes
                Do not pitch. If someone asks what you are building, say you will share it once you have learned more, and ask for an introduction instead.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Fifty scored problem interviews with qualified strangers are complete and a written go, change or stop decision cites them."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write your problem hypothesis in one sentence"
                - "List thirty people in the target market you can reach this month"
                - "Score each interview for frequency, spend and workaround effort"
                - "Ask every participant for two introductions to people like them"
            - name: Handing interviews to the first product hire
              description: |-
                ## Purpose
                In early companies the founder holds every customer relationship and most of the context, so a new product manager either waits for introductions or recruits from scratch. A deliberate handover, with joint interviews, a briefing on key accounts and the founder stepping back to observer, transfers the habit without losing customer trust.

                ## Milestones
                1. The founder's interview notes, contacts and learning goals shared with the new hire.
                2. Three interviews run jointly, with the new hire leading the third.
                3. Key accounts told in writing who their new product contact is.
                4. The founder observing, not leading, interviews from the second month.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new product hire leads interviews independently by the end of the second month, with key accounts introduced in writing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Gather every set of founder interview notes and contacts into the shared space"
                - "Run three joint interviews, handing the lead over by the third"
                - "Write introduction emails to key accounts naming the new contact"
                - "Agree the date from which the founder only observes"
            - name: Interviewing colleagues about an internal process
              description: |-
                ## Purpose
                Knowledge workers asked to fix an internal process, such as expense approvals or a monthly reporting pack, often jump straight to a new tool. Interviewing six to ten colleagues who do the work, with the same discovery methods used for customers, shows the real steps, delays and workarounds before you propose anything.

                ## Milestones
                1. Everyone who touches the process listed, with six to ten colleagues chosen across roles.
                2. Interviews held with each, including a walkthrough of the last time they did the task.
                3. A step-by-step picture of the current process with delays and workarounds marked.
                4. Findings shared with the colleagues interviewed before any solution is proposed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six to ten colleagues are interviewed and a marked-up picture of the current process is shared back to them for correction."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List everyone who touches the process and pick six to ten across roles"
                - "Ask each manager for 30 minutes of their team member's time"
                - "Ask each colleague to walk through the last time they did the task"
                - "Share the current process picture with interviewees for corrections"
            - name: Reaching users inside sales-led enterprise accounts
              description: |-
                ## Purpose
                In enterprise accounts, account managers guard access and the people you meet are usually the champion or the buyer, not the daily users. Agreeing a respectful route in with the account team, explaining the value to the customer and asking for end users by role opens up the voices that actually decide adoption.

                ## Milestones
                1. An agreement with sales and customer success on how product requests access to accounts.
                2. A short request note explaining purpose, time needed and that nothing will be sold.
                3. Interviews with at least three end users in two different enterprise accounts.
                4. A thank-you summary sent back to each account's sponsor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "End users in at least two enterprise accounts are interviewed through the agreed access route, with a summary sent to each sponsor."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree with sales leadership how product requests account access"
                - "Write a short request note the account manager can forward"
                - "Ask each sponsor for end users by role, not by name"
                - "Send each sponsor a short summary of what you learned"
            - name: Discovery interviews in another language or region
              description: |-
                ## Purpose
                Entering a new region with assumptions from your home market misses differences in workflow, regulation, payment habits and the way people talk about problems. Running a set of interviews in the local language, with a native-speaking moderator or interpreter and a locally recruited sample, catches those differences before the roadmap commits.

                ## Milestones
                1. A local recruiting source and a native-speaking moderator or interpreter arranged.
                2. The guide translated and checked by a native speaker for tone and meaning.
                3. Six to eight interviews held with locally recruited participants.
                4. A findings note on what differs from your home market, with quotes translated.

                ## Notes
                Allow extra time per interview when using an interpreter, and budget for translated transcripts. Check local consent and data rules with your privacy contact.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six to eight interviews in the local language are completed and a findings note on regional differences is shared with the team."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find a local recruiting source and a native-speaking moderator"
                - "Have the guide translated and checked by a second native speaker"
                - "Hold six to eight interviews with locally recruited participants"
                - "Write up what differs from your home market with translated quotes"
            - name: Discovery interviews alongside a full-time day job
              description: |-
                ## Purpose
                Knowledge workers exploring a side product, or part-time founders, have perhaps three hours a week and no research budget. A light routine of two 30-minute interviews a month, recruited through your own network and online communities, with notes typed the same evening, keeps learning moving without eating every evening.

                ## Milestones
                1. A realistic weekly time budget written down and protected in the calendar.
                2. Two 30-minute interviews held each month, at lunch or outside working hours.
                3. Notes typed the same evening on a short template.
                4. Twelve interviews completed in six months, enough to judge the idea.

                ## Notes
                Check your employment contract for rules on side projects, and do not interview your employer's customers about a competing idea.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve interviews are completed within six months, each written up on the same day it was held."
                cadence: rolling
              tasks:
                - "Write down the hours a week you can genuinely give to interviews"
                - "Post an invitation in two online communities your target users visit"
                - "Book two 30-minute interviews for the coming month @recurring(monthly:3)"
                - "Type up notes the same evening on a short template"
            - name: Mapping a B2B buying group through interviews
              description: |-
                ## Purpose
                Business software is chosen, paid for and used by different people, and a product shaped only by end-user interviews can still fail with the budget holder or the security reviewer. Interviewing the user, the champion, the economic buyer and the IT or procurement reviewer in the same accounts shows how each judges value and where deals stall.

                ## Milestones
                1. The roles in a typical buying group listed, with what each cares about.
                2. Interviews with at least three different roles in each of three accounts.
                3. A comparison of how each role describes the problem and the value.
                4. Conflicts between roles noted as inputs for product and sales.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three roles are interviewed in each of three accounts and a role comparison is shared with product and sales."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the roles involved in buying and using the product"
                - "Pick three accounts where you can reach at least three roles"
                - "Adapt the guide for buyers, reviewers and daily users"
                - "Write a comparison of how each role describes value"
            - name: Interviewing sensitive or vulnerable participants
              description: |-
                ## Purpose
                Products in health, money, education, debt or care often need interviews with people who are stressed, unwell, under 18 or in difficult circumstances. A written safeguarding plan, with extra consent steps, topics to avoid, a way to pause or stop and signposting to support, protects participants and the organisation before the first call.

                ## Milestones
                1. A safeguarding plan reviewed by whoever owns ethics, legal or safeguarding in your organisation.
                2. Consent steps adapted, including guardian consent for minors where required.
                3. Interviewers briefed on stopping a session and on signposting to support services.
                4. A support contact list ready for every session.

                ## Notes
                If your work touches minors, patients or people in crisis, seek formal ethics or safeguarding advice. This plan organises that advice; it does not replace it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A safeguarding plan approved by the relevant owner is in place, and every interviewer is briefed on it before any session."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Identify who approves research with vulnerable people in your organisation"
                - "Draft the safeguarding plan with consent, stop and signposting steps"
                - "Brief every interviewer on how to pause or end a session"
                - "Prepare a list of support services to share when needed"
            - name: Coaching others to run discovery interviews
              description: |-
                ## Purpose
                Once interviewing works for one person, the team's learning is capped by that person's calendar. Coaching designers, engineers and other product managers through shadowing, co-leading and then leading with feedback multiplies the number of conversations without lowering their quality.

                ## Milestones
                1. A three-step path written: shadow two, co-lead two, lead two with feedback.
                2. Three colleagues signed up and each paired with a coach.
                3. Each colleague leading interviews independently within three months.
                4. A monthly coaching session held for new interviewers.

                ## Notes
                Start from the **Skills matrix** template to track each person's progress through the three steps.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three colleagues complete the shadow, co-lead and lead steps and run interviews independently within three months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the shadow, co-lead and lead steps on one page"
                - "Invite three colleagues and pair each with a coach"
                - "Run a coaching session for new interviewers @recurring(monthly:21)"
                - "Sign off each colleague once they have led two interviews alone"
            - name: Discovery interview programme health metrics
              description: |-
                ## Purpose
                Leaders who fund discovery eventually ask whether it is working, and interview counts alone do not answer. Tracking a handful of measures monthly, such as interviews per week, segment coverage, days from interview to written notes and decisions citing interview evidence, shows whether the programme feeds decisions or just produces notes.

                ## Milestones
                1. Four or five programme measures defined, with a source for each.
                2. A three-month baseline recorded.
                3. The measures updated monthly in one log.
                4. A short quarterly note to leadership on what the trends mean.

                ## Notes
                Start from the **Metrics log** template. The measure that matters most is decisions citing interview evidence; the others explain why it moves.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Programme measures are logged monthly for six months, with a quarterly note to leadership on the trends."
                cadence: rolling
              tasks:
                - "Define four or five programme measures and where each comes from"
                - "Record a baseline for each from the last three months"
                - "Update the programme measures in the log @recurring(monthly:2)"
                - "Ask the agent to draft the quarterly trends note from the log"
---

# Product Discovery Interviews

This area is for anyone who needs to hear from customers before deciding what to build: a product team running weekly interviews, a founder testing a problem before writing code, or a knowledge worker untangling an internal process. It starts with the foundations (learning goals, a screener, consent and a shared notes space), moves through the weekly operating rhythm and the interviewing skills that keep conversations honest, then covers improvements, dated interview rounds, situations for founders, enterprise teams and side projects, and specialist work such as safeguarding and coaching others.

The rhythm is weekly for booking and holding interviews, monthly for readouts, peer reviews, quote linking and win and loss calls, and quarterly for coverage, bias, panel, tag and retention checks. The Meeting notes, Feedback themes, Skills matrix, Purchase decision and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
