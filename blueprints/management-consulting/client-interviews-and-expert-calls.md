---
id: management-consulting.client-interviews-and-expert-calls
name: Client Interviews and Expert Calls
description: "An interview programme you can run on any engagement: guides built from the issue tree, scheduling, fast clean notes, expert calls inside compliance rules, synthesis across interviews and confidentiality that holds."
category: business
version: 1.0.0
tags: [management-consulting, client-interviews-and-expert-calls, knowledge-worker, stakeholder-interviews, expert-calls, interview-guides, interview-synthesis, confidentiality]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - feedback-themes
    - vendor
    - purchase-decision
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Client Interviews and Expert Calls
          description: "Running interviews with client staff and outside experts: guides, scheduling, notes, synthesis across interviews and protecting confidentiality."
          projects:
            - name: Interview programme map for the engagement
              description: |-
                ## Purpose
                Interviews are usually the fastest source of hypotheses on a new engagement, but without a map the team ends up talking to whoever answers email first. A one-page programme map links each branch of the issue tree to the people who can confirm or kill it, so the first two weeks of calls are aimed rather than random.

                ## Milestones
                1. A list of the open questions from the issue tree, each tagged to the stakeholder groups who can answer it.
                2. A target number of interviews per group, with internal staff, customers, suppliers and outside experts shown separately.
                3. Dates agreed for the first wave of interviews and for the point where the programme is reviewed.
                4. The map signed off by the engagement manager and shared with the client lead.

                ## Notes
                Twenty well-chosen interviews usually beat sixty unfocused ones. Cap each group at the point where answers start repeating.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page interview map linking every open issue tree question to named stakeholder groups and target interview counts, approved by the engagement manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the open questions from the current issue tree on one page"
                - "Tag each question with the stakeholder groups who could answer it"
                - "Set a target interview count for each group"
                - "Walk the engagement manager through the map and record changes"
            - name: Stakeholder interview priority grid
              description: |-
                ## Purpose
                Client organisations rarely have time for everyone you would like to see, and the people with the most influence over the recommendation are often the hardest to book. Scoring each candidate on what they know and how much they shape the outcome tells you who must be interviewed in week one, who can wait and who only needs a short call.

                ## Milestones
                1. A long list of candidate interviewees with role, function and location.
                2. Each name scored on knowledge of the issues and influence over the decision.
                3. A must-see list of no more than twelve people agreed with the client lead.
                4. Gaps flagged where a key function or site has nobody on the list.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored interview list with a must-see group of twelve or fewer names, confirmed in writing by the client lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the client lead for an organisation chart covering the functions in scope"
                - "Score each candidate from one to three on knowledge and on influence"
                - "Mark the must-see names and send the list to the client lead"
                - "Note any function or site with no interviewee and propose a name"
            - name: Confidentiality and attribution rules for interviews
              description: |-
                ## Purpose
                Staff only speak candidly if they trust what happens to their words, and one quote traced back to its source can close every door for the rest of the engagement. Agreeing in writing what is anonymous, what can be attributed by role and who on the client side may see notes protects interviewees and protects the firm.

                ## Milestones
                1. A short written rule set covering anonymity, attribution by role, quote use and who may read raw notes.
                2. The rules checked against the engagement letter and your firm's confidentiality policy.
                3. The client sponsor's agreement to the rules recorded by email.
                4. A two-sentence version ready to read at the start of every interview.

                ## Notes
                Never promise anonymity you cannot deliver. If the client has asked for named findings, say so before the interview starts, not afterwards.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written attribution and confidentiality rule set, agreed by email with the client sponsor and used in the opening script of every interview."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the confidentiality clauses in the engagement letter"
                - "Draft rules on anonymity, attribution by role and access to raw notes"
                - "Send the draft rules to the client sponsor and ask for written agreement"
                - "Write the two-sentence version for the interview opening script"
                - "Recheck the attribution rules with the client sponsor @recurring(quarterly)"
            - name: Master interview guide built from the issue tree
              description: |-
                ## Purpose
                A guide written from a blank page drifts into generic questions about strategy and culture that produce pleasant, useless answers. Building it from the hypotheses you need to test, with a core section for everyone and modules by stakeholder group, means every interview produces evidence the team can use.

                ## Milestones
                1. Each question traced to a hypothesis or open branch on the issue tree.
                2. A core section of five to seven questions asked in every interview.
                3. Separate modules for leadership, operations, sales, finance and outside experts.
                4. A tested opening, a closing question and a target length of 45 minutes.
                5. The guide reviewed by the engagement manager and stored as version one.

                ## Notes
                Always close with "Who else should we speak to?" and "What have we not asked that we should have?". Those two questions find more than any other.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A version-controlled interview guide with a core section and stakeholder modules, every question mapped to a hypothesis, approved by the engagement manager."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy the current hypotheses into a two-column table beside draft questions"
                - "Write five to seven core questions every interviewee will be asked"
                - "Draft one module per stakeholder group with no more than six questions"
                - "Time a read-through of the guide and cut it to 45 minutes"
            - name: Interview request email and briefing note
              description: |-
                ## Purpose
                Senior people decline interviews they do not understand, and junior staff turn up worried that they are being assessed. A clear request that says who you are, why the client asked for this, how long it takes and how answers are used lifts acceptance and makes the first five minutes of every call easier.

                ## Milestones
                1. A request email under 150 words, sent from or copied to the client sponsor.
                2. A one-page briefing note covering purpose, topics, length and confidentiality.
                3. Separate wording for internal staff, customers and outside experts.
                4. Acceptance rate on the first ten requests recorded.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approved request emails for three audiences and a one-page briefing note in use, with the acceptance rate of the first ten requests logged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a request email under 150 words for internal staff"
                - "Adapt the wording for customers and for outside experts"
                - "Ask the client sponsor to send or co-sign the internal version"
                - "Count how many of the first ten requests were accepted"
            - name: Interview note template and file naming
              description: |-
                ## Purpose
                Notes written in five different formats by five different consultants cannot be compared, searched or coded later. One template with fixed headers, a code for each interviewee instead of a name and a file naming rule saves hours at synthesis time and keeps identities out of file names.

                ## Milestones
                1. A note template with headers for context, key points, numbers given, verbatim quotes and follow-ups.
                2. An interviewee code scheme, with the key held separately from the notes.
                3. A file naming rule using date, stakeholder group and code.
                4. Every member of the team using the template from the next interview.

                ## Notes
                Start from the **Meeting notes** template and add the interview headers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared interview note template and naming rule, used for every interview logged after its introduction, with no interviewee names in any file name."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create an interview note page from the meeting notes template"
                - "Add headers for numbers given, verbatim quotes and follow-ups"
                - "Set an interviewee code scheme and store the key in a separate file"
                - "Share the template and naming rule with the whole team"
            - name: Secure storage for interview notes and recordings
              description: |-
                ## Purpose
                Raw interview notes are among the most sensitive material on an engagement: candid views of bosses, numbers that are not public, names. Putting them in one access-controlled location, away from personal drives and messaging apps, with a named owner and a retention rule, is what makes the confidentiality promise real.

                ## Milestones
                1. One storage location for raw notes, recordings and transcripts, approved under your firm's data policy.
                2. Access limited to named team members, with the list written down.
                3. A retention and deletion rule agreed for the end of the engagement.
                4. Old notes moved off laptops, personal drives and chat threads.

                ## Notes
                Check whether your firm or the client's data rules restrict cloud tools or storage outside the client's country before choosing a location.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All raw interview material held in one approved, access-controlled location with a written access list and retention rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your firm's risk or IT team which storage is approved for client interviews"
                - "Create the folder and limit access to named team members"
                - "Move existing notes out of email, chat and personal drives"
                - "Review who has access to the interview folder @recurring(monthly:3)"
            - name: Expert call compliance rules for the case team
              description: |-
                ## Purpose
                Calls with outside experts carry real risks: a current employee of a competitor sharing confidential plans, a former employee still under a cooling-off period, or material non-public information about a listed company. Knowing your firm's rules and the network's own screening before the first booking keeps the team and the client out of trouble.

                ## Milestones
                1. Your firm's expert call policy read and its key rules summarised on one page.
                2. A list of expert categories the engagement will not speak to, agreed with the manager.
                3. A standard compliance script read at the start of every expert call.
                4. Every team member's expert call training confirmed as current.

                ## Notes
                When in doubt, ask your firm's compliance or legal team before the call, not after. This project organises the rules; it does not replace them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of expert call rules and an excluded categories list, approved by the manager, with all team training confirmed current."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find and read your firm's expert call policy end to end"
                - "Summarise the rules on current employees, cooling-off and listed companies"
                - "Write the compliance script to read at the start of each expert call"
                - "Confirm your expert call compliance training is current @recurring(yearly)"
            - name: Interview scheduling tracker
              description: |-
                ## Purpose
                Thirty interviews across three time zones, each senior one booked through an assistant, fall apart in a shared inbox. A single tracker showing status, date, interviewer, note-taker and whether notes are written up lets anyone on the team see in a minute what is booked, stuck or missing.

                ## Milestones
                1. A tracker with columns for code, group, status, date, interviewer, note-taker and write-up done.
                2. Every interview on the programme map entered with a status.
                3. Executive assistants' contact details recorded against their principals.
                4. No interview older than two days without a write-up flag.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live scheduling tracker holding every planned interview with status, owner and write-up flag, kept current for the length of the programme."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Build the tracker with status, owner and write-up columns"
                - "Enter every name from the priority grid with its current status"
                - "Add assistant contacts for each senior interviewee"
                - "Share the tracker link with the team and the client coordinator"
            - name: Pre-read on each senior interviewee
              description: |-
                ## Purpose
                Walking into a senior interview without knowing the person's remit, history with the issue or past dealings with consultants wastes the first ten minutes and signals the team has not prepared. A half-page pre-read for each senior interviewee, drawn from the organisation chart, internal documents and the sponsor's view, lets you start on the substance.

                ## Milestones
                1. A half-page pre-read template covering remit, tenure, known views and sensitivities.
                2. A pre-read completed for every must-see interviewee before their slot.
                3. The sponsor asked for any history or sensitivities worth knowing.
                4. Pre-reads stored with the interview notes under the same access rules.

                ## Notes
                Keep pre-reads factual and professional. Write nothing you would be uncomfortable having the interviewee read.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pre-read completed and filed before every must-see interview, held under the same access rules as the interview notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a half-page pre-read template with remit, tenure and known views"
                - "Ask the sponsor about history or sensitivities for each senior name"
                - "Read the interviewee's recent papers or presentations in the client files"
                - "File each pre-read in the secure interview folder"
            - name: Recording and transcription consent decision
              description: |-
                ## Purpose
                Recording makes notes complete and quotes exact, but it changes what people say, and some clients and firms ban it outright. Deciding up front whether you will record, how consent is asked for and what happens to the files avoids an awkward ask in the first minute of a senior interview.

                ## Milestones
                1. Your firm's and the client's position on recording interviews confirmed in writing.
                2. A decision made: record all, record with consent, or never record.
                3. A consent wording written for the start of recorded calls.
                4. A rule for where recordings go and when they are deleted.

                ## Notes
                Recording law differs between countries and states. Check the rules where both you and the interviewee are before recording anyone.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on interview recording with consent wording and a deletion rule, confirmed against firm and client policy."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your manager whether the firm and client allow recorded interviews"
                - "Check recording consent rules for the countries involved"
                - "Write the consent wording and the deletion rule"
                - "Recheck the recording rules against current firm policy @recurring(yearly)"
            - name: Weekly interview pipeline review
              description: |-
                ## Purpose
                Interview programmes slip quietly: a cancelled call here, a reschedule there, and by week three the most important stakeholder still has not been seen. Fifteen minutes each Monday on the tracker, chasing what is stuck and escalating the senior gaps through the sponsor, keeps the programme on its dates.

                ## Milestones
                1. A fixed Monday slot in the team calendar for the review.
                2. Each review ends with an owner for every stuck or unscheduled interview.
                3. Senior gaps escalated to the client sponsor within the same week.
                4. The must-see list fully interviewed by the planned date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly reviews held throughout the programme, with every must-see interview completed by the date on the programme map."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute pipeline slot with the case team"
                - "Review the tracker and name an owner for each stuck interview @recurring(weekly:mon)"
                - "Send the sponsor a short list of senior interviews still unbooked"
                - "Record interviews completed against the target in the tracker"
            - name: Same-day interview write-up routine
              description: |-
                ## Purpose
                Memory of an interview fades within hours, and notes typed up three days later become a summary of what you expected to hear. Writing up every interview on the day, in the template, with quotes marked as verbatim, is the single habit that most improves synthesis quality.

                ## Milestones
                1. A thirty-minute block after each interview kept free for write-up.
                2. Every write-up filed in the secure folder the same day.
                3. Verbatim quotes marked separately from paraphrase.
                4. Four straight weeks with no write-up older than one working day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, every interview written up in the template and filed on the day it took place."
                cadence: rolling
              tasks:
                - "Add a thirty-minute write-up block after each booked interview"
                - "Write up today's interviews before close of business @recurring(daily)"
                - "Mark verbatim quotes in quotation marks and paraphrase without"
                - "Tick the write-up flag in the tracker once the note is filed"
            - name: Running interview synthesis grid
              description: |-
                ## Purpose
                Waiting until all interviews are done to synthesise means the team learns nothing from the early ones and repeats the same questions to the end. A grid with interviewees down the side and hypotheses across the top, updated weekly, shows which hypotheses are firming up, which are dying and where views split by group.

                ## Milestones
                1. A grid with one row per interviewee code and one column per hypothesis.
                2. Each cell marked support, against, mixed or not covered, with a note reference.
                3. A weekly paragraph on what changed and which questions to drop or add.
                4. The grid used to brief the engagement manager each week.

                ## Notes
                Start from the **Feedback themes** template. Count views by stakeholder group, not just in total: ten operators and one director are not eleven equal votes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A synthesis grid updated every week of the programme, each update followed by a written paragraph of what changed."
                cadence: rolling
              tasks:
                - "Set up the grid with interviewee codes and current hypotheses"
                - "Add this week's interviews to the synthesis grid @recurring(weekly:thu)"
                - "Write one paragraph on hypotheses that moved this week"
                - "Send the weekly paragraph to the engagement manager"
            - name: Expert call budget and spend log
              description: |-
                ## Purpose
                Expert calls are billed per hour, often at several hundred in your currency, and a busy diligence can burn through the budget in a week of enthusiastic booking. A simple log of calls booked, credits used and value received keeps spend inside the budget and shows which kinds of expert are worth paying for.

                ## Milestones
                1. The expert call budget for the engagement confirmed with the manager.
                2. A log with date, expert type, network, length, cost and a one-line value rating.
                3. A monthly check of spend against budget.
                4. A short note at engagement end on which expert types gave the best value.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every expert call logged with cost and value rating, and total spend kept within the budget agreed with the manager."
                cadence: rolling
              tasks:
                - "Ask the manager for the expert call budget and approval rule"
                - "Log every expert call with cost and a value rating out of five"
                - "Compare expert call spend with the budget @recurring(monthly:24)"
                - "Flag to the manager when spend reaches three quarters of budget"
            - name: Interview guide revision after each wave
              description: |-
                ## Purpose
                Guides that worked for the first five interviews are usually wrong for the next twenty: some questions get the same answer every time, others reveal a thread nobody planned for. Revising after each wave of five, with the old version kept, keeps interviews pointed at what is still unknown.

                ## Milestones
                1. Questions that produced the same answer five times cut or shortened.
                2. New questions added for the threads the synthesis grid flagged.
                3. Each version numbered and dated, with earlier versions kept.
                4. The team briefed on changes before the next wave starts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A numbered guide version for each wave of interviews, with a change note recording what was cut and added."
                cadence: cyclic
              tasks:
                - "Mark questions in the guide that produced the same answer every time"
                - "Add questions on the threads the synthesis grid flagged"
                - "Save the revised guide as a new numbered version with a change note"
                - "Brief the team on the changes in the next stand-up"
            - name: Interviewee thank-you and follow-up routine
              description: |-
                ## Purpose
                People who gave you an hour remember whether anyone said thank you or chased the document they offered. A short thank-you within a day, with any promised data requested specifically, keeps interviewees willing to take a second call and turns offers made in the room into files on the team drive.

                ## Milestones
                1. A thank-you template that includes a line for promised documents or data.
                2. Thank-you notes sent within one working day of each interview.
                3. Promised items tracked until they arrive or are written off.
                4. A list of interviewees willing to take a follow-up call.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thank-you notes sent within one working day for every interview, with all promised documents tracked to receipt or closure."
                cadence: rolling
              tasks:
                - "Write a short thank-you template with a line for promised items"
                - "Send this week's outstanding thank-you notes @recurring(weekly:fri)"
                - "Chase any promised document still missing after five working days"
                - "Mark interviewees open to a follow-up call in the tracker"
            - name: Quote bank with attribution controls
              description: |-
                ## Purpose
                Well-chosen quotes on a slide can do more than a chart, but quotes copied straight from raw notes have identified interviewees through their phrasing, their site or a detail only one person could know. A quote bank that strips identifying detail and tags each quote by role and theme gives the team material it can use safely.

                ## Milestones
                1. A quote bank holding verbatim quotes tagged by theme and stakeholder group.
                2. Each quote checked for identifying detail and edited where needed.
                3. A rule on how quotes may be attributed in client documents.
                4. Every quote used in a deliverable traceable back to a note.

                ## Notes
                In a small team or a single site, even the role can identify someone. Attribute to a wider group when the group is small.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A quote bank with every entry tagged and checked for identifying detail, and every quote used in a deliverable traceable to its source note."
                cadence: rolling
              tasks:
                - "Create the quote bank with columns for quote, theme, group and source code"
                - "Copy marked verbatim quotes from this week's notes into the bank"
                - "Remove site names, tenure and other identifying detail from each quote"
                - "Review the quote bank for identifying detail before each client deliverable @recurring(monthly:11)"
            - name: Case team interview debrief
              description: |-
                ## Purpose
                Two consultants in the same interview often come away with different readings, and the gap between them is where the insight usually sits. A short weekly debrief comparing what each person heard, what surprised them and what they would ask next sharpens judgement and catches notes that drifted from what was actually said.

                ## Milestones
                1. A weekly thirty-minute debrief slot in the team calendar.
                2. Each debrief covering surprises, disagreements and questions for next week.
                3. Differences in interpretation written into the synthesis grid.
                4. Six debriefs held across the programme.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six or more weekly debriefs held during the programme, each producing at least one change to the synthesis grid or the guide."
                cadence: rolling
              tasks:
                - "Book a weekly thirty-minute debrief with everyone who interviews"
                - "Run the debrief on surprises, disagreements and next questions @recurring(weekly:wed)"
                - "Record interpretation differences against the relevant hypothesis"
                - "Agree one guide change or new interviewee from each debrief"
            - name: Interview records retention and deletion
              description: |-
                ## Purpose
                Raw notes and recordings kept long after an engagement ends are a liability: a breach, a subject access request or an awkward discovery in a later dispute. Applying the retention rule at close, keeping what the firm requires and deleting the rest with a record of what was done, finishes the confidentiality promise properly.

                ## Milestones
                1. The retention period for interview material confirmed from the engagement letter and firm policy.
                2. Material sorted into keep, archive and delete at engagement close.
                3. Deletion carried out and logged with date and scope.
                4. Interviewee code keys destroyed or archived in line with the rule.

                ## Notes
                Check the firm's rules before deleting anything; some material must be kept for a set period. Deletion here means following the policy, not tidying on impulse.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated log showing interview material from each closed engagement kept, archived or deleted in line with the written retention rule."
                cadence: cyclic
              tasks:
                - "Confirm the retention period for interview material with the risk team"
                - "Sort material from closed engagements into keep, archive and delete"
                - "Log the date and scope of every deletion carried out"
                - "Check closed engagements for interview material past its retention date @recurring(quarterly)"
            - name: Open questions and follow-up probes
              description: |-
                ## Purpose
                Most weak interviews fail on the second question, not the first: the interviewee gives a general answer and the interviewer moves to the next item on the guide. Practising probes such as "Can you give me an example?", "How do you know?" and "What would it take?" turns opinions into evidence.

                ## Milestones
                1. A personal list of ten probes that work, written in your own words.
                2. Three recorded or observed interviews reviewed for missed probes.
                3. An average of at least two probes per core question in a reviewed interview.
                4. Feedback from a senior colleague who sat in on an interview.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reviewed interview showing at least two follow-up probes per core question, confirmed by a senior colleague's written feedback."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write ten follow-up probes on a card to keep beside the guide"
                - "Review one past note and mark every place a probe was missed"
                - "Ask a senior colleague to sit in and count your probes"
                - "Practise probing with a colleague playing a vague interviewee"
            - name: Active listening and the useful silence
              description: |-
                ## Purpose
                New interviewers fill every pause, and the interviewee's best sentence is often the one they would have said after three more seconds of silence. Learning to wait, to play back what you heard and to talk for no more than a fifth of the call changes the quality of what people tell you.

                ## Milestones
                1. One interview timed for the share of talk by interviewer and interviewee.
                2. A deliberate pause of several seconds used after each key answer.
                3. Playback summaries used at least three times in an interview.
                4. A second timed interview with interviewer talk under a fifth of the call.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two timed interviews compared, the second showing interviewer talk time below twenty percent of the call."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask a note-taker to time how long you speak in your next interview"
                - "Hold a pause after each key answer before asking anything"
                - "Play back one summary per section and ask if you got it right"
                - "Compare talk time across two interviews and note what changed"
            - name: Thirty-minute interviews with senior executives
              description: |-
                ## Purpose
                Chief executives and board members give you thirty minutes, often fewer after a late start, and they notice immediately when you waste them. A short guide of four questions, a prepared view to react to and a crisp opening let you get their real priorities and red lines in the time you actually have.

                ## Milestones
                1. A senior guide limited to four questions plus a closing ask.
                2. A one-paragraph emerging view prepared for the executive to react to.
                3. Background on the executive's role, history and stated priorities read beforehand.
                4. Two executive interviews completed inside their booked time with notes filed.

                ## Notes
                Executives respond better to "Here is what we are hearing, where are we wrong?" than to open questions about strategy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two executive interviews completed within their booked time using a four-question guide, with notes filed the same day."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Cut the master guide to four questions for senior interviews"
                - "Write a one-paragraph emerging view for executives to react to"
                - "Read the executive's recent internal messages and public statements"
                - "Rehearse a thirty-second opening with your manager"
            - name: Fast interview note-taking
              description: |-
                ## Purpose
                On a call with no recording, the note-taker is the only record, and a slow note-taker loses the numbers and the exact words that matter most. A personal shorthand, a habit of capturing figures and quotes first and a method for flagging gaps live can double what reaches the write-up.

                ## Milestones
                1. A shorthand list of twenty common words and symbols you use consistently.
                2. Numbers and verbatim quotes captured in a separate margin column.
                3. Gaps flagged live and asked about before the interview closes.
                4. A practice note compared with a recording, with capture of figures checked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice note compared against a recording, capturing every figure mentioned and at least five verbatim quotes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write your shorthand list of twenty words and symbols"
                - "Draw a margin column for numbers and quotes on your note page"
                - "Take practice notes on a recorded business podcast for twenty minutes @recurring(weekly:sat)"
                - "Compare the practice notes with the recording and count missed figures"
            - name: Neutral wording and avoiding leading questions
              description: |-
                ## Purpose
                Questions like "Wouldn't you agree the process is too slow?" produce agreement, not information, and clients can tell when findings were planted in the asking. Learning to spot and rewrite leading, loaded and double-barrelled questions keeps the evidence honest and the recommendation defensible.

                ## Milestones
                1. The master guide checked line by line for leading or double questions.
                2. Ten rewritten questions kept as before and after examples.
                3. One recorded interview reviewed for leading questions asked off script.
                4. A colleague's review of your rewritten guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reviewed guide free of leading and double-barrelled questions, with ten before and after rewrites kept as a reference."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark every question in the guide that suggests an answer"
                - "Rewrite each marked question in neutral words"
                - "Ask a colleague to check the rewritten guide"
                - "Review one recorded or observed interview for leading questions @recurring(monthly:20)"
            - name: Interviewing through an interpreter or second language
              description: |-
                ## Purpose
                Engagements across regions often need interviews in a language the team does not speak fluently, and interpreted interviews lose nuance, run long and can quietly turn into a conversation between the interpreter and the interviewee. Preparing the interpreter, simplifying the guide and checking key terms protects both the evidence and the interviewee.

                ## Milestones
                1. An interpreter briefed on the purpose, the guide and the confidentiality rules.
                2. A glossary of key business terms agreed in both languages.
                3. The guide shortened to fit an interview that runs at half speed.
                4. A post-interview check with the interpreter on tone and meaning.

                ## Notes
                Avoid using the interviewee's own manager or colleague as interpreter. People speak differently when a colleague is translating.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An interpreted interview completed with a briefed interpreter, a bilingual glossary and a recorded post-interview check on meaning."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book an independent interpreter rather than a client colleague"
                - "Agree a glossary of ten key terms with the interpreter"
                - "Shorten the guide to the core questions for interpreted calls"
                - "Spend ten minutes after the call checking meaning with the interpreter"
            - name: Handling guarded, angry or anxious interviewees
              description: |-
                ## Purpose
                Some interviewees arrive convinced the consultants are there to cut their jobs, others use the hour to vent, and a few say nothing at all. Having a plan for each, from acknowledging the worry to steering back to the guide, keeps the interview useful and the person treated with respect.

                ## Milestones
                1. A short plan for the guarded, the angry and the silent interviewee.
                2. Honest wording ready for the question "Is this about job cuts?".
                3. Two practice role plays with a colleague playing a difficult interviewee.
                4. One real difficult interview reviewed and lessons noted.

                ## Notes
                Never offer reassurance about outcomes you do not control. Say what you know, what you do not and who can answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written approaches for three difficult interviewee types, practised in two role plays and tested in at least one real interview."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with the manager what can honestly be said about job impact"
                - "Write a short approach for guarded, angry and silent interviewees"
                - "Run two role plays with a colleague playing a difficult interviewee"
                - "Note what worked after your next difficult interview"
            - name: Getting usable numbers out of interviews
              description: |-
                ## Purpose
                Experts and managers happily give opinions but hedge on figures, and a slide built on "quite a lot" will not survive the first client question. Asking for ranges, anchors and the reasoning behind a number, then triangulating across several people, produces estimates the team can defend.

                ## Milestones
                1. A set of number-extracting questions using ranges, anchors and comparisons.
                2. Every figure in notes tagged with how the interviewee knows it.
                3. At least three sources for each estimate that will appear on a slide.
                4. A triangulation table showing the range and the chosen point for each estimate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A triangulation table where every estimate used in a deliverable has three or more interview sources and a stated range."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write five questions that ask for ranges instead of single numbers"
                - "Tag each figure in your notes with how the interviewee knows it"
                - "Build a triangulation table for the estimates the team needs"
                - "Find a third source for any estimate resting on two interviews"
            - name: Choosing and managing expert networks
              description: |-
                ## Purpose
                Expert networks differ in coverage by industry and region, screening quality, compliance processes and price, and a team that books from whichever one called last pays more for worse calls. Comparing two or three on the same brief, then managing the chosen ones as suppliers, raises the hit rate on calls.

                ## Milestones
                1. Two or three networks approved by your firm compared on one live brief.
                2. Each scored on speed, profile relevance, compliance checks and cost.
                3. A preferred network chosen for this engagement and the reason recorded.
                4. A named contact and an escalation route at each network in use.

                ## Notes
                Start from the **Vendor** template. Use only networks your firm has approved; procurement and compliance usually hold the list.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least two approved expert networks on the same brief, with the chosen network and reason recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask procurement which expert networks the firm has approved"
                - "Send the same brief to two networks and compare the profiles returned"
                - "Score each network on relevance, speed, compliance and cost"
                - "Review expert network performance and terms with procurement @recurring(yearly)"
            - name: Choosing a transcription tool under data rules
              description: |-
                ## Purpose
                Automatic transcription saves hours per interview, but many tools send audio to servers in other countries or train on what they receive, which can breach the engagement letter. Choosing a tool your firm approves, tested on accented speech and industry terms, gives the speed without the data risk.

                ## Milestones
                1. Your firm's approved transcription tools, or the criteria for approval, confirmed.
                2. Two options tested on the same recording with accents and technical terms.
                3. Accuracy, data location and deletion terms compared.
                4. A choice recorded and shared with the team, with usage rules.

                ## Notes
                Start from the **Purchase decision** template. Transcripts are raw notes; they follow the same storage and retention rules.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A transcription tool chosen from the firm's approved options, tested on a real recording, with its data terms and team rules written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask IT or risk which transcription tools are approved for client work"
                - "Run the same test recording through two approved tools"
                - "Count errors on names, numbers and industry terms in each transcript"
                - "Write the team rules for when transcription may be used"
            - name: Interviews or a survey for large staff groups
              description: |-
                ## Purpose
                When the question covers four hundred call centre agents or every branch manager, interviewing a handful gives colour but not proportions, and a survey alone gives proportions without reasons. Deciding the mix deliberately, often a few interviews to design a short survey, saves weeks and gives defensible numbers.

                ## Milestones
                1. The question the client needs answered stated as a proportion or a reason.
                2. Options compared: interviews only, survey only, or interviews to design a survey.
                3. The chosen method agreed with the manager and the client lead.
                4. A sample size or interview count set with the reasoning written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded method decision for one large staff group, with the interview count or survey sample and its reasoning agreed by the client lead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down whether the client needs proportions, reasons or both"
                - "Sketch the effort and timing for each method on one page"
                - "Agree the method with the manager and the client lead"
                - "Set the interview count or survey sample and record why"
            - name: Group interviews or one-to-ones decision
              description: |-
                ## Purpose
                Group interviews cover more people in less time and spark disagreements that reveal how work really happens, but people rarely contradict their boss or criticise a colleague in front of others. Choosing format by topic and hierarchy, rather than by convenience, protects the quality of what you hear.

                ## Milestones
                1. Topics in the guide sorted into those safe for groups and those needing privacy.
                2. A rule that groups never mix managers with the people they manage.
                3. Group size set at four to six with a second facilitator for notes.
                4. The format for each stakeholder group recorded on the programme map.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A format chosen for every stakeholder group on the programme map, with no group interview mixing managers and their direct reports."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sort guide topics into group-safe and private"
                - "Check the planned groups for any manager and direct report pair"
                - "Set group sizes and assign a second person for notes"
                - "Record the chosen format for each group on the programme map"
            - name: Better expert screening questions
              description: |-
                ## Purpose
                A bad expert call usually traces back to a weak screener: the profile said the right title, but the expert left the industry six years ago or never touched the topic. Writing three or four sharp screening questions per brief, with answers checked before booking, cuts wasted calls and credits.

                ## Milestones
                1. Three or four screening questions written for each expert brief.
                2. Each question testing recency, direct responsibility or specific knowledge.
                3. Screener answers read before any call is confirmed.
                4. The share of calls rated poor tracked before and after the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Screening questions in use on every expert brief, with the share of calls rated poor lower over the next ten calls than the previous ten."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate the last ten expert calls as good, fair or poor"
                - "Write screening questions on recency and direct responsibility"
                - "Read every screener answer before confirming a booking"
                - "Compare poor call ratings over the next ten calls"
            - name: Fewer interview no-shows and late cancellations
              description: |-
                ## Purpose
                Client staff cancel interviews when the day gets busy, and every cancellation pushes the programme back while the team sits idle. Small changes such as calendar holds from the sponsor's office, a reminder the day before and shorter slots often halve the no-show rate.

                ## Milestones
                1. The current no-show and late cancellation rate measured from the tracker.
                2. Reminders sent the working day before every interview.
                3. Senior interviews booked through assistants with a sponsor's note.
                4. The no-show rate measured again after a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No-show and late cancellation rate measured before and a month after the changes, with the second figure lower."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count no-shows and late cancellations in the tracker so far"
                - "Send a one-line reminder the working day before each interview"
                - "Ask the sponsor's office to send calendar holds for senior interviews"
                - "Recalculate the no-show rate from the tracker @recurring(monthly:17)"
            - name: First fortnight interview blitz
              description: |-
                ## Purpose
                The first two weeks of an engagement are when interviews matter most: the team has hypotheses but little data, and the client is watching how the consultants behave. Running ten to fifteen core interviews in that window, with daily synthesis, gives the team an early answer to test before the first sponsor check-in.

                ## Milestones
                1. Ten to fifteen must-see interviews booked inside the first two weeks.
                2. Interviewers and note-takers assigned for each slot.
                3. A daily fifteen-minute synthesis huddle during the blitz.
                4. An emerging findings page ready for the first sponsor check-in.

                ## Notes
                Front-load the people whose views shape the hypotheses; save the confirming interviews for later waves.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least ten core interviews completed and written up within the first two weeks, with an emerging findings page shared with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Book the must-see interviews into the first two weeks"
                - "Assign an interviewer and note-taker to every slot"
                - "Hold a fifteen-minute synthesis huddle at the end of each blitz day"
                - "Write the emerging findings page before the sponsor check-in"
            - name: Executive team interview round
              description: |-
                ## Purpose
                Interviewing each member of the executive team individually shows where they agree on the problem and, more usefully, where they do not, before those differences surface in a steering committee. A round planned as one set, with the same core questions, gives a clear map of alignment.

                ## Milestones
                1. Every executive team member booked within a two-week window.
                2. The same four core questions asked of each, plus a role-specific module.
                3. A one-page alignment map showing agreement and disagreement by topic.
                4. The alignment map discussed privately with the sponsor before wider use.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "All executive team members interviewed within two weeks on the same core questions, with an alignment map reviewed by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask the sponsor's office to book every executive within two weeks"
                - "Prepare the four core questions and a module per executive role"
                - "Build the alignment map from the round's notes"
                - "Walk the sponsor through the map in a private meeting"
            - name: Customer interview sprint for a market study
              description: |-
                ## Purpose
                Commercial due diligence and market strategy work often need fifteen to thirty customer calls in a single week to test why customers buy, what they would switch for and how sticky the client's position is. A sprint planned with a quota by segment and a tight guide gets coverage fast without overlapping a sales conversation.

                ## Milestones
                1. A call quota by customer segment, size and geography.
                2. A twenty-minute customer guide focused on buying criteria and switching.
                3. Calls booked through the client, a network or a research partner as agreed.
                4. A segment-by-segment summary of buying criteria and switching risk.

                ## Notes
                Agree with the client which customers can be approached and who makes the introduction. Customers must never feel they are being sold to.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The agreed customer call quota completed within the sprint, with a written summary of buying criteria and switching risk by segment."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Set the call quota by segment, size and geography"
                - "Write a twenty-minute customer guide on buying criteria and switching"
                - "Agree with the client who may be contacted and how"
                - "Summarise buying criteria and switching risk by segment"
            - name: Site visit with frontline interviews
              description: |-
                ## Purpose
                Frontline staff on the warehouse floor, in a branch or on a production line know where the process breaks, but they will not say it in a meeting room with their supervisor present. A planned site visit with short interviews at the workstation, agreed with local management, captures what head office cannot see.

                ## Milestones
                1. The visit agreed with the site manager, including shift times and safety rules.
                2. A ten-minute frontline guide with plain-language questions.
                3. Eight to twelve frontline staff interviewed across shifts.
                4. Notes filed the same day with observations kept separate from what was said.

                ## Notes
                Follow the site's safety induction and protective equipment rules. Interview people on paid time and never during a safety-critical task.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A site visit completed with at least eight frontline interviews across shifts, notes filed the same day and observations recorded separately."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree visit dates, shifts and safety rules with the site manager"
                - "Write a ten-minute frontline guide in plain language"
                - "Interview staff across at least two shifts"
                - "File notes the same day with observations in a separate section"
            - name: Interview findings playback to the client team
              description: |-
                ## Purpose
                Client team members who arranged the interviews want to know what was heard, and a playback session builds trust in the findings before they reach senior audiences. Presenting themes, not individuals, with counts by group and anonymised quotes, tests the interpretation with people who know the organisation.

                ## Milestones
                1. Themes from the synthesis grid drafted as five to eight statements.
                2. Each theme shown with counts by stakeholder group and one anonymised quote.
                3. Every quote checked against the attribution rules before the session.
                4. Corrections and challenges from the client team recorded and acted on.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A playback session held with the client core team on five to eight themes, every quote checked for attribution and all challenges logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft five to eight theme statements from the synthesis grid"
                - "Add counts by group and one checked quote to each theme"
                - "Run the playback session with the client core team"
                - "Log every challenge and decide which themes need more evidence"
            - name: Supplier and partner interviews
              description: |-
                ## Purpose
                Suppliers, distributors and channel partners see the client from outside and often know more about its reputation, payment behaviour and competitors than its own staff do. A short round of partner interviews, cleared with the client and kept clear of commercial negotiations, fills gaps internal interviews cannot.

                ## Milestones
                1. A list of six to ten suppliers or partners agreed with the client.
                2. Clear wording that the interview is not part of any negotiation.
                3. A partner guide covering service, relationship and market view.
                4. A summary of partner views set beside the internal findings.

                ## Notes
                Keep anyone in an active contract renewal or dispute off the list until it is settled.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six or more supplier or partner interviews completed and summarised alongside internal findings, none with a party in active negotiation."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the client for six to ten suppliers or partners to approach"
                - "Check none is in an active renewal, tender or dispute"
                - "Write a partner guide on service, relationship and market view"
                - "Summarise partner views next to the internal interview findings"
            - name: First interviews as a new analyst
              description: |-
                ## Purpose
                New analysts usually start as the note-taker and get pushed into leading interviews after two or three calls, often with little coaching. Moving deliberately from shadowing to co-leading to leading, with feedback at each step, builds confidence quickly and avoids a poor first impression with an important stakeholder.

                ## Milestones
                1. Three interviews observed as note-taker with notes reviewed by the lead.
                2. Two interviews co-led, taking one section of the guide.
                3. One interview led alone with a senior colleague observing.
                4. Written feedback after each stage with one thing to change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three shadowed, two co-led and one solo interview completed, with written feedback recorded after each stage."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your manager to plan a shadow, co-lead, lead sequence for you"
                - "Send your first set of notes to the lead interviewer for review"
                - "Prepare the guide section you will lead in your first co-led call"
                - "Ask the lead interviewer for one piece of feedback @recurring(weekly:fri)"
            - name: Running an interview programme as engagement manager
              description: |-
                ## Purpose
                Managers rarely lead every interview, but they own the quality of the evidence and the client's experience of being interviewed. Splitting interviews by seniority, reviewing a sample of notes each week and coaching juniors on probing keeps the programme credible without the manager becoming the bottleneck.

                ## Milestones
                1. Interviews allocated by seniority, with the manager taking the most sensitive.
                2. A weekly review of a sample of team notes against the template.
                3. Coaching points given to each junior interviewer.
                4. Interview coverage reported to the partner each week.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Weekly sample reviews of team notes recorded for the whole programme, with coaching points logged for every junior interviewer."
                cadence: rolling
              tasks:
                - "Allocate interviews by seniority and sensitivity on the tracker"
                - "Review two team interview notes against the template @recurring(weekly:tue)"
                - "Give each junior interviewer one written coaching point"
                - "Report coverage and gaps to the partner in the weekly update"
            - name: Interviewing colleagues as an in-house strategy team
              description: |-
                ## Purpose
                Internal strategy and transformation teams interview their own colleagues, people they will sit beside long after the project ends. Candour is harder, confidentiality is more fragile and politics run closer, so the interview approach needs tighter rules than an outside firm would use.

                ## Milestones
                1. A confidentiality rule set that accounts for working relationships after the project.
                2. Sensitive interviews assigned to team members outside the interviewee's reporting line.
                3. A sponsor statement explaining why staff are being interviewed.
                4. Feedback from a few interviewees on whether they felt able to speak freely.

                ## Notes
                If a topic is too sensitive for an internal team, say so and suggest an external or anonymous route.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "An internal interview approach with reporting-line rules and a sponsor statement in use, plus interviewee feedback on candour gathered from at least three people."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the reporting lines between team members and likely interviewees"
                - "Reassign any interview where the interviewer sits in the line"
                - "Ask the sponsor to send a short note explaining the interviews"
                - "Ask three interviewees afterwards whether they felt able to speak freely"
            - name: Interviews during a restructuring or cost programme
              description: |-
                ## Purpose
                When a cost or restructuring programme is underway, every interview can feel like an assessment of whether the person keeps their job. Clear, honest framing agreed with the client, questions about work rather than worth, and careful handling of what people disclose protect interviewees and keep answers truthful.

                ## Milestones
                1. Framing agreed with the client on what can be said about the programme.
                2. The guide reviewed to remove questions that read as personal assessment.
                3. Human resources or employee representative requirements checked where they apply.
                4. A rule for what to do if an interviewee raises a grievance or wellbeing concern.

                ## Notes
                Some countries require consultation with works councils or unions before certain changes. Ask the client's HR and legal teams; do not work this out alone.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written framing statement and escalation rule agreed with the client's HR lead, used in every interview held during the programme."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the client's HR lead what can be said about the programme"
                - "Remove guide questions that sound like personal performance reviews"
                - "Write a rule for handling grievances or wellbeing concerns raised"
                - "Brief every interviewer on the framing before their next call"
            - name: Remote interviews across time zones
              description: |-
                ## Purpose
                Global engagements mean interviews at seven in the morning for one person and nine at night for another, over video links that drop and with no chance to read the room. A remote routine covering time zone fairness, camera and connection checks and a backup dial-in keeps quality close to in-person.

                ## Milestones
                1. Interview slots spread so no single team member takes every late or early call.
                2. A pre-call checklist for link, dial-in backup and note-taker access.
                3. A shortened remote guide with a planned break for calls over an hour.
                4. Dropped or failed calls tracked and their causes fixed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A remote interview checklist in use and the dropped call count tracked, with out-of-hours calls shared across at least two team members."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Map interviewee time zones against the team's working hours"
                - "Share early and late slots fairly across interviewers"
                - "Write a pre-call checklist with a backup dial-in"
                - "Note the cause of every dropped call in the tracker"
            - name: Interviews in a small organisation where everyone knows everyone
              description: |-
                ## Purpose
                In a forty-person company, a family business or a single department, anonymity is close to impossible: one comment about the finance team points straight at the only finance manager. Adjusting the approach, with wider groupings, theme-only reporting and an honest warning at the start, keeps people safe and still candid.

                ## Milestones
                1. Stakeholder groups combined so none has fewer than four people for reporting.
                2. A decision that findings are reported as themes without quotes, if needed.
                3. An opening statement that is honest about the limits of anonymity.
                4. The sponsor's agreement to the reporting approach recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A reporting approach for a small organisation agreed with the sponsor, with no reported group smaller than four people."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the people in each stakeholder group for reporting"
                - "Combine any group smaller than four into a wider one"
                - "Write an honest opening line about the limits of anonymity"
                - "Agree the theme-only reporting approach with the sponsor"
            - name: Coding a large set of interview transcripts
              description: |-
                ## Purpose
                Programmes of fifty or more interviews outgrow a synthesis grid, and themes chosen by whoever read the most notes are easy for a client to challenge. A codebook, consistent coding across the team and a check that two coders agree on a sample give findings that stand up to scrutiny.

                ## Milestones
                1. A codebook of themes with a definition and an example for each code.
                2. All notes or transcripts coded in one tool or spreadsheet.
                3. A sample of ten notes coded by two people, with agreement measured and differences resolved.
                4. Theme counts by stakeholder group ready for the synthesis.

                ## Notes
                Keep the codebook short at first, around fifteen codes, and add new ones only when several notes need them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every note in a programme of fifty or more interviews coded against a written codebook, with a double-coded sample of ten and theme counts by group."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft a codebook of about fifteen themes with definitions"
                - "Code all notes in one shared spreadsheet or tool"
                - "Ask a second person to code ten notes and compare results"
                - "Ask the agent to draft theme counts by group from the coded sheet"
            - name: Expert calls under due diligence clean team rules
              description: |-
                ## Purpose
                Diligence on a target company brings the tightest rules on expert calls: no current employees, cooling-off periods for former staff, nothing that looks like material non-public information, and sometimes clean team restrictions on who sees what. Planning the call programme with compliance from day one avoids calls that have to be thrown away.

                ## Milestones
                1. The deal's expert call restrictions confirmed in writing with your compliance team.
                2. Excluded companies and roles passed to every network used.
                3. A pre-call script and a stop rule if the expert strays into restricted information.
                4. Notes from any call stopped for compliance reasons quarantined and reported.

                ## Notes
                Stop the call if an expert begins sharing confidential information about a current or recent employer. Report it to compliance the same day.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A diligence expert call plan with written restrictions, exclusions sent to every network and a stop rule used on every call."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask compliance for the deal's written expert call restrictions"
                - "Send the exclusion list to every network before booking"
                - "Add the stop rule to the start of the expert call script"
                - "Report any stopped call to compliance on the same day"
            - name: Win and loss interviews with the client's customers
              description: |-
                ## Purpose
                Sales teams explain lost deals as price, but customers who chose a competitor usually tell a more useful story about responsiveness, product gaps or trust. Interviewing recent wins and losses with a neutral outside voice gives the client evidence its own sales team cannot gather.

                ## Milestones
                1. A list of recent wins and losses agreed with the client, balanced by segment.
                2. A neutral guide on the buying process, alternatives considered and the deciding factor.
                3. At least eight interviews completed, split between wins and losses.
                4. A summary of deciding factors compared against the sales team's own view.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least eight win and loss interviews completed with a summary comparing customers' deciding factors to the sales team's explanation."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Ask the client for recent wins and losses by segment"
                - "Write a neutral guide on the buying process and deciding factor"
                - "Record the sales team's own explanation for each deal before calling"
                - "Compare customers' deciding factors with the sales team's view"
            - name: Reconciling experts who disagree
              description: |-
                ## Purpose
                On specialist topics, two credible experts can give market growth figures twice apart or opposite views on a technology, and the temptation is to average them or pick the one that fits the story. A written method for weighing proximity, recency and incentives turns disagreement into a stated range the client can trust.

                ## Milestones
                1. Each conflicting view recorded with the expert's role, recency and possible bias.
                2. The reasons for the disagreement identified, such as different definitions or regions.
                3. A tie-breaker call or data source used where the gap matters to the answer.
                4. A short memo stating the range, the chosen view and why.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written memo for each material expert disagreement, stating the range, the reason for the gap and the view the team adopted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each point where experts gave conflicting views"
                - "Note each expert's proximity, recency and possible incentive"
                - "Check whether the experts used different definitions or regions"
                - "Write a one-page memo with the range and the adopted view"
---

# Client Interviews and Expert Calls

This area is for consultants who learn most of what they know about a client by talking to people: client staff from the board to the shop floor, customers and suppliers, and outside experts booked through a network or found directly. It runs from foundations (the interview map, priorities, confidentiality rules, the master guide, secure storage and expert call compliance), through the weekly machinery of scheduling, write-ups and a running synthesis grid, to interviewing skills, the decisions about tools and formats, dated interview rounds, variants for analysts, managers and in-house teams, and specialist work such as coding a large set of transcripts and reconciling experts who disagree.

What repeats is a daily same-day write-up, a Monday pipeline review, a Wednesday team debrief, a Thursday synthesis update, Friday thank-you notes, a monthly expert spend check and access review on different days, and quarterly and yearly checks on records, consent and compliance. The **Meeting notes** template pairs with the note format, **Feedback themes** with the synthesis grid, **Vendor** with expert network management and **Purchase decision** with choosing a transcription tool. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
