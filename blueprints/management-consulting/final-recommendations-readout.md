---
id: management-consulting.final-recommendations-readout
name: Final Recommendations Readout
description: "A system for the final readout of an engagement: the decision sought, one clear recommendation with its evidence and financial case, a roadmap, rehearsals, objection handling and the follow-through afterwards."
category: business
version: 1.0.0
tags: [management-consulting, final-recommendations-readout, knowledge-worker, final-readout, recommendations, implementation-roadmap, objection-handling, executive-presentation]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - meeting-notes
    - feedback-themes
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Final Recommendations Readout
          description: "Delivering the final readout: the recommendation, supporting evidence, an implementation roadmap, the executive summary and handling objections in the room."
          projects:
            - name: Decision the readout must produce
              description: |-
                ## Purpose
                Most weak readouts are weak because nobody wrote down what the client should decide at the end of the hour. Naming the decision, the person who can make it and what a yes commits them to turns the readout from a presentation of findings into a meeting with a purpose, and it tells you which pages earn their place.

                ## Milestones
                1. One sentence stating the decision sought, such as approving a two-phase rollout and a named programme lead.
                2. The person with authority to make that decision identified by name and role.
                3. What a yes commits the client to, in money, people and time, written in three lines.
                4. The decision sentence agreed with your partner or engagement lead.

                ## Notes
                If the honest answer is that no decision is possible yet, say so now and plan the readout as a direction-setting session instead. Pretending otherwise produces a polite meeting and no outcome.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written decision sentence, the named decision maker and the commitment a yes implies are agreed with the engagement lead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the decision you want the room to take in one sentence"
                - "Name the executive who has authority to make that decision"
                - "List what a yes commits the client to in money, people and time"
                - "Agree the decision sentence with your engagement lead"
            - name: Audience map for the readout room
              description: |-
                ## Purpose
                A chief financial officer, a head of operations and a sceptical regional director will each hear the same recommendation differently. Mapping who will be in the room, what each person cares about, where they stand today and what they need to see before agreeing lets you shape the pages and the order before anyone stands up to present.

                ## Milestones
                1. A list of every expected attendee with role, reporting line and decision weight.
                2. Each attendee's main concern and current stance on the recommendation noted.
                3. The two or three people whose support decides the outcome marked.
                4. The pages each key attendee needs to see identified in the deck outline.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page audience map covering every attendee's concern and stance exists, with the decisive two or three people marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get the confirmed attendee list from the sponsor's office"
                - "Note each attendee's main concern and likely stance"
                - "Mark the attendees whose support decides the outcome"
                - "Link each key attendee to the pages written for their concern"
            - name: Recommendation written in one sentence
              description: |-
                ## Purpose
                If the team cannot say the recommendation in one sentence, the client will not repeat it accurately in the corridor afterwards. Writing it as a single line with a verb, a scope and a value, such as consolidating four plants into two to release a stated annual saving, forces the hard choices before the slides lock them in.

                ## Milestones
                1. A single sentence with an action, a scope and the value at stake.
                2. Three supporting reasons, each one line, beneath the sentence.
                3. The sentence tested on someone outside the team who can repeat it back.
                4. The final wording used as the title of the executive summary page.

                ## Notes
                Avoid hedged verbs such as explore, consider or assess. A readout that recommends further study needs a very good reason and should say what the study decides.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-sentence recommendation with three supporting reasons is written, tested on an outsider and used as the executive summary title."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the recommendation as one sentence with a verb, a scope and a value"
                - "Write three one-line reasons that support it"
                - "Read it to a colleague outside the team and ask them to repeat it"
                - "Replace any hedged verb with the action you actually recommend"
            - name: Evidence inventory behind each recommendation
              description: |-
                ## Purpose
                Every claim in a readout will be tested by someone who knows the business better than the team does. Listing each recommendation with the analyses, interviews and data that support it, and rating the strength of each piece, shows where the case is solid and where one sharp question would bring it down.

                ## Milestones
                1. A table linking each recommendation to its supporting analyses and sources.
                2. Each piece of evidence rated strong, moderate or thin, with a reason.
                3. Any recommendation resting mainly on thin evidence flagged to the engagement lead.
                4. A plan agreed to strengthen or soften each flagged claim before the readout.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An evidence table rates every supporting source for every recommendation, and each thinly supported claim has an agreed fix."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each recommendation down the left of a new table"
                - "Add the analyses, interviews and data sources behind each one"
                - "Rate every piece of evidence strong, moderate or thin"
                - "Agree with the lead how to fix each thinly supported claim"
            - name: Readout format, length and logistics agreed
              description: |-
                ## Purpose
                A readout planned for ninety minutes that the chief executive cuts to forty, or a room booked without a screen, damages the answer before it is heard. Agreeing the length, the format, the room or video platform, the attendees and whether a pre-read goes out, a fortnight ahead, removes avoidable surprises.

                ## Milestones
                1. The date, start time and confirmed length agreed with the sponsor's office.
                2. In-person, hybrid or virtual format chosen, with the room or link booked.
                3. A decision recorded on whether a pre-read goes out and when.
                4. Printing, screen, dial-in and catering needs confirmed in writing.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Date, length, format, room and pre-read plan for the readout are confirmed in writing with the sponsor's office two weeks ahead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Email the sponsor's office to confirm date, time and length"
                - "Choose the format and book the room or video link"
                - "Decide whether a pre-read goes out and on which day"
                - "Confirm the screen, printing and dial-in needs in writing"
            - name: Final deck section order for the readout
              description: |-
                ## Purpose
                Working decks that served the engagement are ordered for the team, not for an executive with forty minutes. Setting the readout's section order, typically the answer, the case for it, the value, the roadmap, the risks and the decisions requested, with an appendix behind, gives every page a home and shows what to cut.

                ## Milestones
                1. A section list in the order the audience needs to hear it.
                2. Every existing page assigned to a section, the appendix or the bin.
                3. A page budget per section that fits the agreed readout length.
                4. The skeleton reviewed and signed off by the engagement lead.

                ## Notes
                A useful default is one main page per three to four minutes of readout time. Everything else goes to the appendix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off readout skeleton exists with every page assigned to a section or the appendix and a page count that fits the slot."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the readout sections in the order the audience needs them"
                - "Assign every working page to a section, the appendix or the bin"
                - "Set a page budget for each section that fits the slot"
                - "Walk the engagement lead through the skeleton for sign-off"
            - name: Readout timeline worked back from the date
              description: |-
                ## Purpose
                Final readouts slip in the last week because the drafting, partner reviews, client previews and print runs were never put in order. Working backwards from the readout date to fix the deck freeze, the dress rehearsal, the previews and the pre-read send gives the team a calendar it can hold to.

                ## Milestones
                1. The readout date and time written at the end of a backwards timeline.
                2. Dates fixed for the content freeze, the partner review and the dress rehearsal.
                3. Preview meetings with key executives placed before the freeze.
                4. The timeline shared with the team and placed in every member's calendar.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A backwards timeline with freeze, review, rehearsal, preview and pre-read dates is in every team member's calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the readout date at the end of a blank timeline"
                - "Fix the content freeze, partner review and dress rehearsal dates"
                - "Place the executive preview meetings before the freeze"
                - "Send calendar holds for every date to the whole team"
            - name: Financial case for the recommendation
              description: |-
                ## Purpose
                Executives rarely approve a recommendation without knowing what it is worth, what it costs and when it pays back. A short financial case with the value at stake, the one-off and running costs, a payback period and a low and high range, built from figures the finance team recognises, is often the page that gets the decision.

                ## Milestones
                1. Value at stake estimated with a low, central and high case.
                2. One-off and running costs listed, with their sources.
                3. Payback period and timing of benefits shown on one page.
                4. The figures reconciled with the client finance team's own numbers.

                ## Notes
                Use the client's own baseline wherever it exists. A larger number built on your own baseline invites a debate about the baseline instead of the decision.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page financial case with ranges, costs and payback is reconciled with the client finance team before the deck freeze."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the client's own baseline figures for the affected costs or revenues"
                - "Estimate the value at stake in low, central and high cases"
                - "List one-off and running costs with a source for each"
                - "Walk the finance team through the figures and note their corrections"
            - name: Team roles in the readout room
              description: |-
                ## Purpose
                Three consultants all answering the same question, or nobody writing down what the chief executive just agreed, undermines an otherwise strong readout. Deciding in advance who presents each section, who fields which kinds of question, who watches the clock and who records decisions keeps the team calm and the client focused on the content.

                ## Milestones
                1. A presenter named for each section of the deck.
                2. Question owners agreed by topic, with the partner taking anything contentious.
                3. A timekeeper and a note-taker assigned and briefed.
                4. Hand-over lines between presenters written and rehearsed once.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A roles sheet naming the presenter, question owner, timekeeper and note-taker for every section is shared with the team before the dress rehearsal."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Name a presenter against each section of the deck"
                - "Agree who owns questions on each topic"
                - "Assign a timekeeper and a note-taker for the session"
                - "Write the hand-over line between each pair of presenters"
            - name: Look-ahead of readouts across your engagements
              description: |-
                ## Purpose
                Consultants on more than one engagement, or moving between projects, often discover a final readout three weeks out when the work needed six. A monthly look-ahead of every readout in the next ninety days, with the decision sought and the team's readiness, means the backwards timeline starts on time each time.

                ## Milestones
                1. A single list of every readout in the next ninety days with date and client.
                2. Each entry showing the decision sought and a readiness rating.
                3. Any readout under six weeks away with no timeline flagged and started.
                4. The list reviewed on a fixed day each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ninety-day readout list is reviewed every month and no readout reaches six weeks out without a backwards timeline."
                cadence: rolling
              tasks:
                - "Create a list of every readout due in the next ninety days"
                - "Review the readout look-ahead and rate each one's readiness @recurring(monthly:3)"
                - "Start a backwards timeline for any readout under six weeks away"
                - "Clear finished readouts from the list and add newly scheduled ones @recurring(quarterly)"
            - name: Twice-weekly rehearsals in the final fortnight
              description: |-
                ## Purpose
                Teams that rehearse once, the night before, find the weak transitions and the over-long sections when it is too late to fix them. Two short rehearsals a week in the last fortnight, each with a different listener, steadily shortens the talk, tightens the hand-overs and exposes the pages nobody can explain without notes.

                ## Milestones
                1. Rehearsal slots booked twice a week for the final two weeks.
                2. A different listener at each rehearsal, including someone senior.
                3. Timings recorded per section, with overruns cut after each run.
                4. Each rehearsal's fixes logged and closed before the next one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four timed rehearsals are held in the final fortnight, each with logged fixes closed before the next run."
                cadence: cyclic
              tasks:
                - "Book rehearsal slots in the team calendar for the final fortnight"
                - "Run a timed rehearsal with a different listener @recurring(weekly:tue,fri)"
                - "Record each section's timing and cut anything that overruns"
                - "Log the fixes from each rehearsal and close them before the next"
            - name: Objection bank for each recommendation
              description: |-
                ## Purpose
                The questions that derail a readout are usually predictable: the cost is understated, it was tried before, the unions will not accept it, the timing is wrong. Keeping a written bank of likely objections for each recommendation, with a short answer and the backup page that proves it, means nobody improvises on the hardest point.

                ## Milestones
                1. At least five likely objections listed for each recommendation.
                2. A two-sentence answer drafted for every objection.
                3. A backup page or data point linked to each answer.
                4. The bank refreshed after every rehearsal and client conversation.

                ## Notes
                Collect objections from client interviews and previews, not only from the team's imagination. The real ones are usually in your notes already.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each recommendation has at least five logged objections with a short answer and a linked backup page before the dress rehearsal."
                cadence: rolling
              tasks:
                - "List five likely objections against each recommendation"
                - "Search interview notes for objections the client has already raised"
                - "Draft a two-sentence answer and link the backup page for each"
                - "Add new objections from rehearsals and previews to the bank @recurring(weekly:wed)"
            - name: Decision and action log from every readout
              description: |-
                ## Purpose
                Two weeks after a readout, people disagree about what was decided, and the first casualty is the recommendation itself. A log written within a day, listing each decision, each action with an owner and date, and each question left open, then sent to the sponsor for confirmation, becomes the record everyone refers back to.

                ## Milestones
                1. Decisions, actions, owners and dates captured during the readout.
                2. The log sent to the sponsor for confirmation within one working day.
                3. Sponsor edits incorporated and the final log filed with the deck.
                4. Open actions reviewed weekly until each is closed or handed over.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A sponsor-confirmed decision and action log is filed within two working days of each readout, and its open actions are reviewed weekly."
                cadence: rolling
              tasks:
                - "Set up the decision and action log before the readout starts"
                - "Send the draft log to the sponsor within one working day"
                - "File the confirmed log next to the final deck"
                - "Review open readout actions with their owners @recurring(weekly:mon)"
            - name: Thirty-day check on readout decisions
              description: |-
                ## Purpose
                Approval in the room means little if momentum quietly fades when the programme lead is not appointed or the budget line never appears. A short check thirty days after each readout, asking whether the named decisions have turned into appointments, budgets and first meetings, catches drift while it can still be corrected.

                ## Milestones
                1. A reminder set for thirty days after each readout.
                2. Each decision in the log checked for a named owner, budget and first meeting.
                3. Drifting decisions raised with the sponsor in a short note or call.
                4. The outcome of the check recorded in the decision log.

                ## Notes
                Keep this about confirming decisions, not about selling the next phase. Sponsors notice the difference.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every readout gets a thirty-day check, recorded in its decision log, with any drift raised to the sponsor."
                cadence: rolling
              tasks:
                - "Set a reminder thirty days after your next readout"
                - "Check each logged decision for an owner, budget and first meeting"
                - "Run the thirty-day checks due this month @recurring(monthly:12)"
                - "Send the sponsor a short note on any decision that is drifting"
            - name: Personal readout lessons log
              description: |-
                ## Purpose
                Most consultants present dozens of readouts and learn from few of them because the lessons sit in their heads for a week and then fade. A log with three lines per readout, covering what landed, what was challenged and what you would change, read back each month, turns experience into a pattern you can act on.

                ## Milestones
                1. A lessons log created with a fixed three-line entry format.
                2. An entry written within two days of every readout you attend.
                3. Recurring themes picked out at each monthly read-back.
                4. One change to your own preparation adopted from each theme.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lessons log has an entry for every readout attended, and each monthly read-back produces one named change to your preparation."
                cadence: rolling
              tasks:
                - "Create the lessons log with three fixed headings"
                - "Write an entry for the last readout you attended"
                - "Read back the lessons log and name one recurring theme @recurring(monthly:26)"
                - "Change one step of your readout preparation based on that theme"
            - name: Monthly recorded presenting practice
              description: |-
                ## Purpose
                Few people know how they sound to a board until they watch themselves. Recording a five-minute run of a recommendation each month, then watching it once for pace, filler words and eye contact, builds the calm delivery executives read as confidence, at a cost of about twenty minutes.

                ## Milestones
                1. A first five-minute recording of yourself presenting a recommendation.
                2. Three specific habits to change noted from watching it back.
                3. A monthly recording made, each focusing on one habit.
                4. A visible improvement on the first recording confirmed by a colleague.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly recordings exist, and a colleague confirms improvement on the three habits named after the first one."
                cadence: rolling
              tasks:
                - "Record yourself presenting one recommendation for five minutes"
                - "Watch it once and note three habits to change"
                - "Record a five-minute practice run focused on one habit @recurring(monthly:18)"
                - "Show a colleague the first and latest recordings for an honest view"
            - name: Version control and freeze rules in the final week
              description: |-
                ## Purpose
                In the last week before a readout, numbers change on page 4 but not on page 22, and two versions of the deck go to the printer. A freeze date, one master file owned by one person and a short change log, checked twice a week, keeps the deck consistent while edits are still coming in.

                ## Milestones
                1. One master deck file and one named owner agreed.
                2. A content freeze date set, after which changes need the lead's approval.
                3. A change log recording every edit after the freeze with page and reason.
                4. The final version number printed on the cover of every copy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every readout has a single named deck owner, a freeze date and a change log, and all copies carry the same final version number."
                cadence: cyclic
              tasks:
                - "Name one owner for the master readout deck"
                - "Set the content freeze date and tell the team"
                - "Check the change log and confirm every page number still matches @recurring(weekly:mon,thu)"
                - "Print the version number on the cover before any copy leaves the team"
            - name: Client feedback on each readout
              description: |-
                ## Purpose
                Clients will tell you what worked in a readout if you ask in the week after, and almost never otherwise. A short set of questions to the sponsor and one other attendee, asking what was clear, what was missing and what they repeated to their teams, gathered after each readout and read for themes each quarter, improves the next one.

                ## Milestones
                1. Three standard feedback questions written and saved.
                2. Feedback requested from the sponsor and one other attendee after each readout.
                3. Responses stored together with the readout they relate to.
                4. Themes across readouts summarised each quarter.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feedback is requested after every readout and a quarterly themes summary is written from the responses."
                cadence: rolling
              tasks:
                - "Write three short feedback questions for readout attendees"
                - "Send the questions to the sponsor after your next readout"
                - "Summarise themes across all readout feedback received @recurring(quarterly)"
                - "Pick one theme to act on in the next readout you prepare"
            - name: Opening the readout with the answer
              description: |-
                ## Purpose
                Executives decide in the first three minutes whether a readout is worth their full attention. Learning to open with the context in one sentence, the recommendation in the next and the decision requested in the third, before any methodology, gives the room the answer while it is still listening and frames every page that follows.

                ## Milestones
                1. A three-sentence opening written for your current or most recent engagement.
                2. The opening delivered aloud in under ninety seconds without notes.
                3. Feedback from a senior colleague on clarity and confidence.
                4. The same structure used in at least two real readouts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can deliver a three-sentence answer-first opening in under ninety seconds and have used it in two readouts."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a three-sentence opening covering context, answer and decision"
                - "Practise saying it aloud until it takes under ninety seconds"
                - "Deliver an answer-first opening to a colleague and ask for one fix @recurring(monthly:8)"
                - "Use the structure at the start of your next readout"
            - name: Handling objections in the room
              description: |-
                ## Purpose
                A defensive answer to a hard question can lose a room that the content had won. Practising a simple sequence, acknowledging the point, clarifying what is really being asked, answering briefly with evidence and returning to the recommendation, lets you take on the toughest executive without either caving or arguing.

                ## Milestones
                1. The four-step sequence written on a card and learnt.
                2. Ten realistic objections practised aloud with a colleague playing the executive.
                3. A rule agreed for when to answer now and when to take it offline.
                4. The sequence used on at least three real objections, with notes on how each went.

                ## Notes
                Never guess a number in the room. Saying you will confirm it within a day keeps credibility; a wrong figure loses it.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten objections have been practised aloud with a sparring partner and the sequence has been used on three real objections."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the acknowledge, clarify, answer and return sequence on a card"
                - "Ask a colleague to play a sceptical executive for ten objections"
                - "Run a fifteen-minute objection drill from the current bank @recurring(monthly:15)"
                - "Note how each real objection went after your next readout"
            - name: Answering the finance director on the numbers
              description: |-
                ## Purpose
                The finance director is often the quietest person in the readout and the one whose doubt sinks the decision. Preparing for the questions finance asks every time, about baselines, phasing, one-off costs, double counting and who owns the savings, turns the financial page from a target into a strength.

                ## Milestones
                1. A list of the standard finance questions for your recommendation.
                2. A short answer and a source for each question.
                3. A walk-through of the numbers with a finance colleague before the readout.
                4. Any change from that walk-through reflected in the deck.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Answers with sources exist for every standard finance question, and a finance colleague has reviewed the figures before the freeze."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the finance questions on baselines, phasing, costs and ownership"
                - "Write a short answer with a source for each question"
                - "Book thirty minutes with a finance colleague to test the numbers"
                - "Update the deck with any correction from that session"
            - name: Presenting uncertainty and ranges honestly
              description: |-
                ## Purpose
                Single-point estimates invite either false confidence or a fight about the decimal place. Learning to show a range, name the two or three assumptions that drive it and say what would change the recommendation lets executives decide with their eyes open, and protects your credibility when the outcome lands at the low end.

                ## Milestones
                1. Every headline number in the current deck shown as a range.
                2. The two or three assumptions that drive each range named on the page.
                3. A sentence on what result would change the recommendation.
                4. A colleague's check that the ranges are honest rather than padded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All headline figures in the readout are shown as ranges with named drivers and a stated condition that would change the recommendation."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark every single-point headline number in the current deck"
                - "Replace each with a range and its two main assumptions"
                - "Write one sentence on what would change the recommendation"
                - "Rewrite one old exhibit as a range with named drivers @recurring(monthly:22)"
            - name: Reading the room and adjusting live
              description: |-
                ## Purpose
                Readouts rarely go to plan: the chief executive arrives twenty minutes late, the debate stalls on page three or the room has already accepted the answer. Practising how to cut to the decision page, skip sections into the appendix and pause for discussion keeps the meeting productive when the script stops working.

                ## Milestones
                1. A short version of the deck identified that fits half the planned time.
                2. Agreed signals between presenters for skipping ahead or slowing down.
                3. A rehearsal run where the time is cut by half without warning.
                4. Notes after a real readout on where you adjusted and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-length path through the deck is marked and has been rehearsed once with the time cut without warning."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark the pages that make up a half-length version of the deck"
                - "Agree simple signals between presenters to skip or slow down"
                - "Run one rehearsal where the time is halved without warning"
                - "Write down where you adjusted after the next real readout"
            - name: Delivering a recommendation the client will not like
              description: |-
                ## Purpose
                Some readouts must tell a leadership team that their flagship initiative should stop, a business they founded should be sold or a cost they defend is not needed. Preparing the message, its evidence and its tone, and previewing it with the sponsor first, lets you deliver hard findings honestly without humiliating anyone in the room.

                ## Milestones
                1. The unwelcome finding stated plainly in one sentence.
                2. The evidence for it checked twice, with the strongest page leading.
                3. The message previewed with the sponsor before the readout.
                4. A respectful framing written that credits what the client did well.

                ## Notes
                Softening the finding until it no longer says anything is a worse outcome than a difficult meeting. If the evidence is strong, the message stays.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The unwelcome finding is written plainly, double-checked, previewed with the sponsor and framed respectfully before the readout."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the unwelcome finding in one plain sentence"
                - "Check its supporting evidence a second time with a colleague"
                - "Preview the message privately with the sponsor"
                - "Draft an opening that credits what the client team did well"
            - name: Presenting the answer without the deck
              description: |-
                ## Purpose
                Projectors fail, chief executives push the deck aside and the most important readouts sometimes happen in a corridor. Being able to give the recommendation, the three reasons, the value and the decision needed from a single printed page, in five minutes, proves you understand the answer rather than the slides.

                ## Milestones
                1. A single printed page holding the whole recommendation.
                2. A five-minute spoken version practised from that page alone.
                3. A colleague's confirmation that the five-minute version is complete.
                4. The page carried to every readout as a fallback.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can present the full recommendation in five minutes from one printed page, confirmed complete by a colleague."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Put the recommendation, reasons, value and decision on one page"
                - "Practise a five-minute version using only that page"
                - "Present it to a colleague and ask what was missing"
                - "Give a deck-free five-minute version of current work to a peer @recurring(monthly:28)"
            - name: Closing the readout with the decision
              description: |-
                ## Purpose
                Ending with thanks and an open floor for questions often means ending without a decision. Learning to close by restating the recommendation, asking explicitly for the decision, naming the owner and confirming the first step, then pausing for the answer, is the skill that separates a well-received presentation from an approved one.

                ## Milestones
                1. A closing page that restates the recommendation and the decisions requested.
                2. A spoken close practised that asks for the decision directly.
                3. A plan for what to do if the room says not yet.
                4. The close used in a real readout and the outcome logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A decisions-requested closing page and a practised spoken close are used in a real readout, with the outcome logged."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Draft a closing page listing the decisions requested"
                - "Write the exact words you will use to ask for the decision"
                - "Prepare a fallback if the room asks for more time"
                - "Rehearse a spoken close and time it under two minutes @recurring(monthly:5)"
            - name: Single recommendation or a set of options
              description: |-
                ## Purpose
                Some clients want the team's answer; others want options so they can own the choice. Deciding deliberately, based on the sponsor's style, the politics and how settled the evidence is, whether to present one recommendation or two or three options with a preferred one marked, avoids a readout that feels either presumptuous or evasive.

                ## Milestones
                1. The sponsor's preference for an answer or options established in conversation.
                2. Two or three realistic options described if options are chosen.
                3. Each option assessed on the same criteria on one page.
                4. The preferred option marked clearly, with the reason.

                ## Notes
                Options that include an obviously weak straw man insult the audience. Each option shown should be one a sensible executive could choose.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The choice between one recommendation and options is recorded with its reason, and any options page uses common criteria with a preferred option marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the sponsor whether they want the team's answer or options"
                - "Describe two or three realistic options if options are chosen"
                - "Score each option against the same criteria on one page"
                - "Mark the preferred option and write the reason beneath it"
            - name: Implementation roadmap page for the readout
              description: |-
                ## Purpose
                Executives approve recommendations they can picture being done. A roadmap page showing the phases, the first ninety days, the owners, the key milestones and the dependencies, at a level the client could defend to its board, shows the recommendation is practical and gives the room something concrete to approve.

                ## Milestones
                1. Phases and their timing set out on a single page.
                2. The first ninety days shown in more detail, with named client owners.
                3. Key dependencies and decision points marked on the roadmap.
                4. The roadmap reviewed with the likely client programme lead.

                ## Notes
                Name client owners, not consultants, against each workstream. A roadmap that only works if the consultants stay reads as a sales pitch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page roadmap with phases, a detailed first ninety days and client owners is reviewed by the likely programme lead before the freeze."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the phases and their timing on one page"
                - "Detail the first ninety days with a named client owner per item"
                - "Mark the key dependencies and decision points"
                - "Review the roadmap with the likely client programme lead"
            - name: Prioritising initiatives for the roadmap
              description: |-
                ## Purpose
                Fourteen initiatives of equal weight, listed in a row, tell the client nothing about where to start. Scoring each initiative on value and ease, grouping them into quick wins, major moves and later options, and choosing the three that go first gives the roadmap a clear sequence and the executives an easy first yes.

                ## Milestones
                1. Every candidate initiative listed with a value and an ease score.
                2. Initiatives grouped into quick wins, major moves and later options.
                3. Three first initiatives chosen, with the reasoning written down.
                4. The scoring checked with at least one client manager who knows the work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All initiatives are scored on value and ease, grouped, and three first initiatives are chosen and checked with a client manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every candidate initiative in one table"
                - "Score each initiative for value and for ease"
                - "Group them into quick wins, major moves and later options"
                - "Check the three first initiatives with a client manager"
            - name: Risks and mitigations page
              description: |-
                ## Purpose
                Leaving out the risks makes a recommendation look naive to experienced executives and invites them to list the risks themselves. A single page naming the five most serious risks, their likelihood and impact, the mitigation and the early warning sign for each shows the team has thought about failure and keeps the debate on your terms.

                ## Milestones
                1. The five most serious risks to the recommendation named.
                2. Likelihood and impact rated for each risk.
                3. A mitigation and an early warning sign written for each.
                4. The page reviewed by a client manager for anything missing.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page risks view with five rated risks, mitigations and early warning signs is in the readout deck and reviewed by a client manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every risk the team has heard during the engagement"
                - "Choose the five most serious and rate likelihood and impact"
                - "Write a mitigation and an early warning sign for each"
                - "Ask a client manager which risk is missing from the page"
            - name: Pre-read memo for the readout
              description: |-
                ## Purpose
                When executives arrive having read a short memo, they spend the readout debating the decision instead of absorbing the facts. A two-page pre-read with the recommendation, the reasons, the value and the decisions requested, sent two working days ahead, raises the level of the meeting; it is the wrong choice only when a leak would cause harm.

                ## Milestones
                1. A decision made, with the sponsor, on whether a pre-read helps or risks a leak.
                2. A memo of no more than two pages drafted with the answer first.
                3. The memo approved by the engagement lead and the sponsor.
                4. The memo sent two working days before the readout.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page answer-first pre-read is approved and sent two working days ahead, or a recorded decision explains why none was sent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the sponsor whether a pre-read would help or risk a leak"
                - "Ask the agent to draft a two-page answer-first memo from the executive summary"
                - "Edit the memo and get approval from the lead and the sponsor"
                - "Send the memo two working days before the readout"
            - name: Appendix and backup pages for hard questions
              description: |-
                ## Purpose
                Short main decks are only possible when every hard question has a backup page ready. Organising backup pages by the objections in your bank, numbered and indexed so any team member can find one in ten seconds, means detailed challenges get a precise answer without dragging the room into the weeds.

                ## Milestones
                1. Backup pages grouped by topic and linked to entries in the objection bank.
                2. A one-page index of the appendix with page numbers.
                3. Every backup page checked against the final numbers in the main deck.
                4. Each presenter able to find any backup page within ten seconds.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An indexed appendix linked to the objection bank is in the deck, and each presenter can locate any backup page in ten seconds."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group backup pages by topic to match the objection bank"
                - "Build a one-page appendix index with page numbers"
                - "Check every backup figure against the main deck"
                - "Test each presenter on finding three random backup pages"
            - name: Executive summary page for the readout
              description: |-
                ## Purpose
                Of all the pages, the executive summary is the one that gets forwarded, printed and quoted for months after the readout. Writing it for the readout specifically, with the recommendation as the title, three to five supporting points, the value and the decisions requested, makes it able to stand alone for anyone who was not in the room.

                ## Milestones
                1. A title that states the recommendation as a full sentence.
                2. Three to five supporting points, each with a number where one exists.
                3. The value at stake and the decisions requested shown on the same page.
                4. The page read by someone outside the engagement who can explain the answer from it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single executive summary page with the recommendation title, supporting points, value and decisions is understood unaided by an outside reader."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the recommendation as the page title in a full sentence"
                - "Add three to five supporting points with numbers"
                - "Show the value at stake and the decisions requested on the page"
                - "Ask someone outside the engagement to explain the answer from it"
            - name: Leave-behind version of the final deck
              description: |-
                ## Purpose
                Decks shown in the room rely on the presenters to fill the gaps, so they read poorly to the managers who receive it a week later. A leave-behind version with fuller titles, short explanatory text, sources on every exhibit and a clear version date travels well through the organisation and keeps the message intact.

                ## Milestones
                1. Each page reviewed for whether it makes sense without a presenter.
                2. Short explanatory text and sources added where needed.
                3. Confidential appendix pages removed or marked for restricted circulation.
                4. The leave-behind sent to the sponsor with the decision log.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A leave-behind deck with sources and explanatory text on every page is sent to the sponsor within three working days of the readout."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read each page as someone who missed the readout"
                - "Add explanatory text and sources wherever the page needs a presenter"
                - "Remove or mark any page with restricted circulation"
                - "Send the leave-behind to the sponsor alongside the decision log"
            - name: Full dress rehearsal with the partner
              description: |-
                ## Purpose
                The partner who will lead the readout often sees the full flow for the first time two days before, which is too late for anything but cosmetic changes. A dress rehearsal at least five working days ahead, run at full length with the real presenters, the partner playing the toughest executive and every hand-over in place, leaves time for real fixes.

                ## Milestones
                1. A full-length rehearsal held five or more working days before the readout.
                2. The partner role-playing the most sceptical attendee.
                3. A written list of fixes agreed at the end of the session.
                4. Every fix closed and confirmed by the deck owner before the freeze.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full-length dress rehearsal with the partner is held at least five working days before the readout and every agreed fix is closed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a full-length dress rehearsal with the partner"
                - "Brief the partner to play the most sceptical attendee"
                - "Write the list of fixes before the session ends"
                - "Confirm every fix is closed before the content freeze"
            - name: Previewing the answer with the chief executive
              description: |-
                ## Purpose
                Chief executives who hear a major recommendation for the first time in front of their own team may resist it simply to keep control of the room. A private thirty-minute preview of the answer, the value and the decisions requested a few days before lets the chief executive shape the message, raise concerns privately and arrive ready to lead the decision.

                ## Milestones
                1. A thirty-minute preview booked with the chief executive or most senior decision maker.
                2. A short preview version of the deck prepared, five pages at most.
                3. Their concerns and suggested changes written down during the meeting.
                4. Agreed changes made and the chief executive told what changed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The senior decision maker has seen a preview of the answer before the readout, and their concerns are logged and answered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the sponsor to arrange a private preview with the chief executive"
                - "Cut the deck down to a five-page preview version"
                - "Write down every concern the chief executive raises"
                - "Tell the chief executive which changes were made after the preview"
            - name: Readout day run sheet
              description: |-
                ## Purpose
                On the day itself, small failures such as a missing adaptor, a late printer or a presenter stuck in traffic can shake a team that was ready. A run sheet covering arrival times, room set-up, technology checks, printed copies, the speaking order and who greets whom lets everyone focus on the conversation rather than the logistics.

                ## Milestones
                1. A run sheet with timings from arrival to departure.
                2. Room, screen, sound and dial-in tested at least an hour before the start.
                3. Printed copies counted and the final version checked on each.
                4. A note-taker and a timekeeper in place before the first attendee arrives.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The readout starts on time with tested technology, the correct printed version and the agreed roles in place, following a written run sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a run sheet from team arrival to departure"
                - "Arrange to test the screen and dial-in an hour before the start"
                - "Count printed copies and check the version number on each"
                - "Share the run sheet with the team the evening before"
            - name: Readout to the client's board of directors
              description: |-
                ## Purpose
                Boards read differently from management teams: they care about strategic risk, capital, governance and what management has committed to, and they have less time. Adapting the readout for a board, with a shorter deck, a board paper in the company secretary's format and management presenting alongside you, keeps ownership where the board expects it.

                ## Milestones
                1. The board's paper format, deadlines and time slot confirmed with the company secretary.
                2. A board version of the deck at no more than half the management length.
                3. Agreement on which parts management presents and which the team presents.
                4. The board paper submitted by the secretary's deadline.

                ## Notes
                Most boards want the paper several days before the meeting. Treat the secretary's deadline as the real readout date for planning purposes.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A board paper in the client's format and a shortened deck are submitted on time, with presenting roles agreed with management."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the company secretary for the paper format, deadline and slot"
                - "Cut the management deck to half its length for the board"
                - "Agree with management who presents each part"
                - "Submit the board paper before the secretary's deadline"
            - name: Cascade readout to the wider management team
              description: |-
                ## Purpose
                Once the executive team approves a recommendation, the managers who must carry it out often hear about it second-hand and in a distorted form. A cascade readout, led by the client executive with consultant support, explaining what was decided, why, what changes for them and what happens next, protects the decision from rumour.

                ## Milestones
                1. A cascade session agreed with the sponsor, led by a client executive.
                2. A shorter deck focused on what changes for managers and when.
                3. A question and answer sheet prepared for likely concerns.
                4. Questions raised in the session collected and answered in writing.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A client-led cascade session is held after approval, and every question raised is answered in writing within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree with the sponsor which executive leads the cascade"
                - "Build a shorter deck on what changes for managers and when"
                - "Prepare a question and answer sheet for likely concerns"
                - "Send written answers to every question raised in the session"
            - name: Team debrief within two days of the readout
              description: |-
                ## Purpose
                Memories of what happened in the room are sharpest for the team in the first forty-eight hours and gone in two weeks. A short debrief covering what the client decided, which objections surprised the team, what each presenter would change and what goes into the lessons log captures the learning before everyone is staffed elsewhere.

                ## Milestones
                1. A forty-five-minute debrief held within two working days.
                2. Decisions taken and objections that surprised the team recorded.
                3. Each team member's one improvement written down.
                4. The main lessons added to everyone's readout lessons log.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A recorded team debrief is held within two working days of the readout, with each member's improvement noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Book a forty-five-minute debrief before the readout happens"
                - "Record the decisions taken and the objections that surprised you"
                - "Ask each team member for one thing they would change"
                - "Add the main lessons to your readout lessons log"
            - name: First readout section as an analyst
              description: |-
                ## Purpose
                Analysts are often given one section of a final readout, perhaps the market analysis or the cost baseline, and five minutes in front of the client's senior team. Preparing that section thoroughly, knowing every number behind it and having two backup pages ready, is how a first-year consultant earns credibility with the partner and the client at the same time.

                ## Milestones
                1. Your section's message written in one sentence.
                2. Every number on your pages traced to its source and understood.
                3. Your five minutes rehearsed at least three times, once in front of the manager.
                4. Two backup pages ready for the questions most likely to come your way.

                ## Notes
                If you do not know an answer in the room, say you will confirm it and look to your manager. Guessing is the one mistake partners remember.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your section is rehearsed three times including once with the manager, and you can source every number on your pages."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your section's message as one sentence"
                - "Trace every number on your pages back to its source"
                - "Rehearse your five minutes in front of your manager"
                - "Prepare two backup pages for the likeliest questions"
            - name: Leading the readout as a new engagement manager
              description: |-
                ## Purpose
                Newly promoted managers running a final readout for the first time are accountable for the whole flow rather than one section, and have to manage the partner, the team and the client at once. A deliberate plan for the manager's own role, covering storyline ownership, the partner's part, team coaching and the room, keeps you from presenting everything yourself.

                ## Milestones
                1. The split of roles between you and the partner agreed in writing.
                2. Each team member coached on their section at least once.
                3. Your own parts limited to framing, transitions and the close.
                4. Feedback from the partner on your leadership of the readout recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your first managed readout runs with roles agreed with the partner, every presenter coached, and the partner's feedback recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree with the partner which parts each of you presents"
                - "Coach each team member on their section once"
                - "Keep your own speaking parts to framing, transitions and the close"
                - "Ask the partner for feedback within two days of the readout"
            - name: Solo readout as an independent consultant
              description: |-
                ## Purpose
                An independent consultant presents, answers questions, keeps time and takes notes alone, often to a client who hired them for one specific answer. Planning how to cover all those roles, asking the sponsor to bring a note-taker and keeping the deck short enough to manage single-handed, lets a solo practitioner deliver with the composure of a full team.

                ## Milestones
                1. A deck short enough to present and manage alone, with a tight appendix.
                2. A client note-taker agreed with the sponsor in advance.
                3. A timing plan with a visible clock and marked cut points.
                4. A decision log sent by you within one working day.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A solo readout runs to time with a client note-taker in place and a decision log sent within one working day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Cut the deck to what you can present and manage alone"
                - "Ask the sponsor to provide a note-taker for the session"
                - "Mark cut points in the deck and place a clock in view"
                - "Send the decision log yourself within one working day"
            - name: Virtual readout to a distributed executive team
              description: |-
                ## Purpose
                On a video call, executives turn off their cameras, answer email and drop off for other meetings, and the readout loses its force. Designing the virtual readout differently, with fewer pages, named pauses for each executive, a chat moderator and a decision poll at the end, keeps a dispersed leadership team engaged long enough to decide.

                ## Milestones
                1. The deck reduced and reordered for a screen, with large type and few words.
                2. A moderator assigned to watch the chat and raised hands.
                3. Planned pauses where named executives are asked for their view.
                4. The technology tested end to end with the client's platform a day ahead.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A virtual readout is held with a tested platform, a moderator and planned pauses, and ends with each decision captured."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Reformat the deck for a screen with large type and fewer words"
                - "Assign a moderator to manage the chat and raised hands"
                - "Plan three pauses to ask named executives for their view"
                - "Test the full set-up on the client's platform the day before"
            - name: Final readout to a public body or ministry
              description: |-
                ## Purpose
                Public sector readouts carry extra weight: findings may be published, ministers may attend, officials need defensible value for money and the final report often goes through formal acceptance. Planning for the written report, the briefing note for the minister, the officials' review cycle and possible public scrutiny avoids a rushed and exposed final week.

                ## Milestones
                1. The formal acceptance process and sign-off chain for the final report confirmed.
                2. A briefing note in the department's format prepared for senior officials or the minister.
                3. Findings checked for anything that would not stand up to public scrutiny.
                4. The final report submitted in the agreed format by the contract date.

                ## Notes
                Assume anything written may become public through a records or freedom of information request. Write findings you would be content to see quoted.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The final report and a briefing note in the department's format are accepted through the formal sign-off chain by the contract date."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the formal acceptance and sign-off chain for the report"
                - "Get the department's briefing note format from the client lead"
                - "Check each finding against how it would read if published"
                - "Submit the final report in the agreed format by the contract date"
            - name: Readout after the sponsor has left the client
              description: |-
                ## Purpose
                When the sponsor who commissioned the work leaves or moves role before the readout, the recommendation can lose its champion and its audience at once. Identifying the new decision maker early, briefing them on why the work was commissioned and reshaping the readout around their priorities rescues weeks of work from being shelved.

                ## Milestones
                1. The new decision maker for the work identified and named.
                2. A briefing held with them on the original objective and progress so far.
                3. Their priorities and concerns written down and checked against the recommendation.
                4. The readout reshaped and rescheduled around the new decision maker.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The new decision maker is briefed and the readout is rescheduled with a deck reshaped around their stated priorities."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the client who now owns the decision the work supports"
                - "Book a briefing on the original objective and progress"
                - "Write down their priorities and compare them with the recommendation"
                - "Reschedule the readout and reshape the opening around their priorities"
            - name: Recommending that the client should not proceed
              description: |-
                ## Purpose
                Sometimes the right answer is to cancel the acquisition, stop the market entry or keep the current system, and that readout needs as much care as a bold one. Making the case for not proceeding, with the evidence, what the client avoids, what they should do instead and the signal that would reopen the question, gives the decision dignity and clarity.

                ## Milestones
                1. The recommendation not to proceed stated plainly with its main reason.
                2. The cost or risk the client avoids quantified where possible.
                3. An alternative course of action set out on one page.
                4. The conditions that would justify revisiting the decision written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A readout recommending against proceeding includes the avoided cost, an alternative course and written conditions for revisiting the question."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "State the recommendation not to proceed and its main reason in one line"
                - "Quantify the cost or risk the client avoids"
                - "Set out the alternative course on one page"
                - "Write the conditions that would justify revisiting the question"
            - name: Due diligence readout to an investment committee
              description: |-
                ## Purpose
                Investment committees give a commercial due diligence readout days, not weeks, and they want a direct answer on the market, the target's position and the plan's realism. Structuring the readout around the investment thesis, with red flags first and every view tied to evidence, fits the way committees decide, without stepping into investment advice.

                ## Milestones
                1. The client's investment thesis restated as three to five testable claims.
                2. A view on each claim marked supported, partly supported or not supported.
                3. Red flags placed at the front, not buried in the appendix.
                4. The limits of the work stated plainly, with what was not tested.

                ## Notes
                The committee makes the investment decision. Your role is the commercial evidence and its limits, not a buy or pass call unless the engagement letter asks for it.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The readout tests each thesis claim with a stated view, leads with red flags and states the limits of the work."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Restate the investment thesis as three to five testable claims"
                - "Mark each claim supported, partly supported or not supported"
                - "Move every red flag to the front of the deck"
                - "Write a page on what the work did not test"
            - name: Readout in a turnaround or crisis
              description: |-
                ## Purpose
                In a liquidity squeeze, a regulatory crisis or a failing operation, the readout may be to lenders, a new chief executive or an administrator, and it needs actions measured in days rather than a year-long roadmap. Shaping the readout around immediate actions, cash or safety impact and clear owners serves people under pressure.

                ## Milestones
                1. The immediate actions for the next two weeks listed with owners.
                2. The cash, safety or compliance impact of each action stated.
                3. A shorter-term roadmap of no more than ninety days.
                4. Any statement to lenders or regulators checked with the client's legal adviser.

                ## Notes
                Statements made to lenders, regulators or administrators can carry legal weight. Agree wording with the client's legal advisers before anything is presented outside the company.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A crisis readout lists two-week actions with owners and impact, plus a ninety-day roadmap, with external statements cleared by legal advisers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the actions needed in the next two weeks with owners"
                - "State the cash, safety or compliance impact of each action"
                - "Draft a roadmap that covers no more than ninety days"
                - "Ask the client's legal adviser to review any external statement"
            - name: Integrated readout across several workstreams
              description: |-
                ## Purpose
                On large engagements, four workstreams each want their twenty pages in the final readout, and the result is a hundred-page deck with no single answer. Building an integrated readout, with one governing recommendation, each workstream's findings as supporting evidence and a combined roadmap that resolves their conflicts, gives the client one decision to make rather than four.

                ## Milestones
                1. One governing recommendation agreed across all workstream leads.
                2. Each workstream limited to a fixed page budget in the main deck.
                3. Conflicts between workstream recommendations resolved and written down.
                4. A single combined roadmap replacing the separate workstream plans.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The final deck carries one governing recommendation, fixed page budgets per workstream, recorded conflict resolutions and one combined roadmap."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Hold a session with workstream leads to agree one governing recommendation"
                - "Set a page budget for each workstream in the main deck"
                - "List conflicts between workstream recommendations and resolve each one"
                - "Ask the agent to merge the workstream roadmaps into one draft for review"
---

# Final Recommendations Readout

The final readout is the hour where weeks of analysis either become a decision or become a deck nobody opens again. This area starts with foundations (the decision you want the room to take, the audience, a one-sentence recommendation, the evidence and the financial case behind it, and a timeline worked back from the readout date), then the routines that run in the final weeks, the presenting skills that matter on the day, choices about options, roadmaps, pre-reads and leave-behinds, the readout events themselves, variants for an analyst's first section, a new manager, an independent and a public body, and finally specialist readouts such as a recommendation not to proceed or a due diligence answer to an investment committee.

What repeats is a monthly look-ahead of readouts across your engagements, twice-weekly rehearsals and a weekly objection bank refresh in the run-up, a weekly review of open readout actions, monthly presenting practice and a quarterly read of client feedback. The Operational checklist, Risk register, Meeting notes and Feedback themes templates pair with the run sheet, the risks page, the decision log and the client feedback review. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
