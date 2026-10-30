---
id: management-consulting.follow-on-work-and-extensions
name: Follow-On Work and Extensions
description: "A way to earn the next phase honestly: a needs log kept during delivery, account maps and budget calendars, timed extension conversations, short continuation notes and the quality bar that makes clients ask you back."
category: business
version: 1.0.0
tags: [management-consulting, follow-on-work-and-extensions, freelancer, knowledge-worker, account-growth, extensions, client-retention, repeat-business]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - metrics-log
    - feedback-themes
    - meeting-notes
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Follow-On Work and Extensions
          description: "Winning extensions and new phases with existing clients: spotting needs during delivery, proposing at the right moment and keeping quality high."
          projects:
            - name: Client account map of past and current engagements
              description: |-
                ## Purpose
                Before thinking about the next phase, you need one page per client showing every engagement so far, who bought it, what it cost and what it changed. Independents and firm consultants alike tend to hold this in their heads, which means the second buyer in a client, or the project that ended two years ago, gets forgotten. A written map is the base for every later conversation about more work.

                ## Milestones
                1. Every client from the last three years listed with each engagement, its dates, value and buyer.
                2. The outcome of each engagement written in one sentence, in the client's terms.
                3. Open threads noted: recommendations not yet acted on, phases that were deferred, people who asked for help later.
                4. The three clients with the most realistic room for further work marked.

                ## Notes
                Start from the **Person** template for each buyer and senior contact, linked from the account page. Keep confidential client detail out of shared drives your other clients could see.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map exists for every client of the last three years, listing engagements, buyers, values, outcomes and open threads."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every client and engagement from the last three years with dates and fees"
                - "Write one line on what each engagement changed for the client"
                - "Note deferred phases and recommendations still waiting for action"
                - "Mark the three accounts with the clearest room for further work"
            - name: Personal rules for proposing more work
              description: |-
                ## Purpose
                Clients can tell when a consultant is engineering a reason to stay, and one manufactured extension costs more trust than ten honest ones earn. Writing down your own lines before the pressure of a revenue target arrives makes the later judgement calls quicker: what you will and will not propose, and when you will tell a client they no longer need you.

                ## Milestones
                1. A short written rule set covering when you raise further work and when you stay quiet.
                2. A clear line on findings: no softening or stretching an analysis to create a next phase.
                3. A rule for telling a client when their own team can carry the work without you.
                4. The rules shared with a trusted peer or your engagement partner for challenge.

                ## Notes
                A useful test: would you be comfortable if the client's board read the internal note where you planned this extension?
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of at least five rules on proposing further work is saved and has been reviewed by one trusted peer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down one extension you regret and one you are proud of"
                - "Draft five rules on when you raise further work"
                - "Add a rule for recommending that the client stops using you"
                - "Ask a trusted peer to challenge the rules over coffee"
                - "Reread your rules before setting each year's follow-on target @recurring(yearly)"
            - name: Change order and extension clauses in your contracts
              description: |-
                ## Purpose
                Whether an extension is a two-line variation or a fresh procurement exercise depends on what the current contract says, and many consultants only read that clause when the client asks how to continue. Knowing the change order process, any ceiling on value or duration, and notice terms for each live contract tells you how much lead time a continuation really needs.

                ## Milestones
                1. The change, variation and extension clauses of each live contract or statement of work copied into one table.
                2. Value or time ceilings, approval levels and notice periods noted for each.
                3. The client's procurement or legal contact for variations identified by name.
                4. Questions you cannot answer from the text raised with the client contracts lead or your own adviser.

                ## Notes
                Read the signed version, including the order form or framework call-off, not your own template. Contract interpretation is a legal question: take advice where the wording is unclear.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every live contract has its extension and variation terms, ceilings and approver recorded in one table, with open questions listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the signed contract and statement of work for each live engagement"
                - "Copy each variation and extension clause into a single table"
                - "Note value ceilings, approval levels and notice periods per contract"
                - "Ask the client's procurement contact how variations are usually processed"
                - "Check value and time remaining under each live contract ceiling @recurring(monthly:3)"
            - name: Budget calendar and approver map for each key client
              description: |-
                ## Purpose
                An excellent idea for a second phase goes nowhere if the client's budget for next year was locked two months ago. Mapping when each key client sets budgets, who can approve spend at which level and which cost centre your work sits in tells you when a conversation about further work has to start, often a full quarter earlier than feels natural.

                ## Milestones
                1. The financial year, budget submission window and mid-year reforecast dates noted for each key client.
                2. The spending authority of your buyer and of their manager written down.
                3. The cost centre or programme budget currently paying for your work identified.
                4. A latest-safe date to raise further work recorded for each client.

                ## Notes
                Ask the question plainly early in an engagement: when does your team plan next year's spend? Most sponsors are glad to be asked.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each key client has its budget dates, approval levels, funding source and a latest-safe date for further work recorded on its account page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your sponsor when the next budget round opens and closes"
                - "Write down the spending limit of your buyer and their manager"
                - "Find which cost centre or programme pays for the current work"
                - "Set a latest-safe date for raising further work on each account"
                - "Recheck each key client's budget dates for the coming year @recurring(yearly)"
            - name: Needs log kept during delivery
              description: |-
                ## Purpose
                The real openings for further work appear mid-project, in a throwaway remark at a workshop or a data gap nobody owns, and they are forgotten within a week if not written down. A simple log, captured in the moment with who said it and why it matters, becomes the honest source of every later proposal.

                ## Milestones
                1. A needs log set up with columns for date, source, need in the client's words, size and owner.
                2. At least ten entries captured from the current engagement.
                3. Each entry tagged as in scope, quick favour, possible next phase or someone else's work.
                4. The log kept somewhere private, never inside client-facing materials.

                ## Notes
                Write the need in the client's words, not yours. Quotes make far better proposal openings than your own diagnosis.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A needs log with at least ten tagged entries from the current engagement exists in a private location."
                cadence: rolling
              tasks:
                - "Create a needs log with date, source, quote, size and owner columns"
                - "Add every unmet need you remember from the last two weeks"
                - "Tag each entry by whether it is in scope or a possible next phase"
            - name: Delivery health check before any extension talk
              description: |-
                ## Purpose
                Raising further work while the current phase is late, over budget or shaky on quality almost always backfires, and the sponsor remembers. A frank health check on deliverables, timeline, client team sentiment and your own team's capacity tells you whether you have earned the right to talk about more yet.

                ## Milestones
                1. Each committed deliverable rated on time, at risk or late.
                2. Hours or days used compared with the plan for the phase.
                3. Sponsor and day-to-day counterpart sentiment written down from recent meetings.
                4. A go or wait call made on raising further work, with what must be fixed first.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated health check rates every deliverable, compares effort with plan and records a go or wait call on raising further work."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate each committed deliverable as on time, at risk or late"
                - "Compare days used so far with the plan for this phase"
                - "Write one honest line on how the sponsor feels about the work"
                - "Decide whether to raise further work now or fix delivery first"
            - name: Annual follow-on target and focus accounts
              description: |-
                ## Purpose
                Without a number, follow-on work is left to luck, and without a short list of accounts it is spread too thin to matter. Setting a realistic share of next year's revenue from existing clients, and naming the four or five accounts that carry it, gives the monthly reviews something to measure against.

                ## Milestones
                1. Last year's revenue split into new clients and existing clients.
                2. A target share from existing clients set for the coming year.
                3. Four or five focus accounts named, each with a rough value range.
                4. The target and focus list written where the monthly account review will see it.

                ## Notes
                Firm consultants can set this as a personal contribution target agreed with their partner rather than a revenue figure they control.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written target for revenue from existing clients and a named list of four or five focus accounts is saved for the year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Split last year's fees into new and existing clients"
                - "Set a target share of next year's revenue from existing clients"
                - "Name four or five focus accounts with a value range for each"
                - "Compare revenue from existing clients with the target @recurring(quarterly)"
            - name: Your firm's rules for extensions and new phases
              description: |-
                ## Purpose
                Inside a firm, an extension can need a partner's sign-off, a risk review, a rate approval from the pricing desk and a new engagement code, and an associate who promises a client something before checking can create real trouble. Finding out the internal route once means you can move fast when the client says yes.

                ## Milestones
                1. The internal approval steps for a change order and for a new phase written down.
                2. Who can discuss fees with the client, and who cannot, made clear.
                3. Risk, conflict and independence checks required for new scope noted.
                4. Typical lead time from client yes to signed paperwork recorded.

                ## Notes
                For independents the equivalent is your own checklist: insurance cover for the new scope, capacity and any subcontractor terms.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note sets out the approval steps, fee authority, risk checks and lead time for extensions at your firm or practice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your engagement manager how the last extension was approved internally"
                - "Write down who may discuss fees with the client"
                - "List the conflict and risk checks required for new scope"
                - "Note the usual time from client agreement to signed paperwork"
            - name: Friday pass through the needs log
              description: |-
                ## Purpose
                Any needs log only works if someone sorts it while the context is fresh. Fifteen minutes each Friday to add the week's entries, close the ones solved inside scope and promote one or two to a possible next phase keeps the log honest and short enough to use.

                ## Milestones
                1. The week's new needs added with source and date.
                2. Entries solved inside current scope closed.
                3. Any entry heard from two or more people promoted to a possible next phase.
                4. Entries that belong to another firm or the client's own team marked as such.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The needs log shows a dated Friday update for at least eight of the last ten weeks."
                cadence: rolling
              tasks:
                - "Add this week's unmet needs to the log with source and date @recurring(weekly:fri)"
                - "Close entries that were solved inside current scope"
                - "Promote needs heard from two or more people to possible next phases"
            - name: Evidence bank of results delivered
              description: |-
                ## Purpose
                When the sponsor has to justify a second phase to their finance director, they need numbers and quotes, not your enthusiasm. Collecting each measurable result, decision taken and piece of positive feedback as it happens means the case for continuing writes itself, and the sponsor can forward it without editing.

                ## Milestones
                1. An evidence page set up per engagement with results, decisions and quotes.
                2. Every result stated with its baseline, the change and the source of the number.
                3. Client quotes saved with the speaker's permission noted.
                4. A one-paragraph results summary ready to paste into a continuation note.

                ## Notes
                Only record numbers the client would sign off. A savings figure the finance team disputes does more harm than no figure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each live engagement has an evidence page with at least three sourced results and a current one-paragraph summary."
                cadence: rolling
              tasks:
                - "Set up an evidence page for each live engagement"
                - "Record each result with its baseline, change and number source"
                - "Refresh the one-paragraph results summary for each engagement @recurring(monthly:26)"
            - name: Monthly account review for focus clients
              description: |-
                ## Purpose
                Account growth stalls when the only time anyone thinks about a client is during delivery crunch. A monthly half hour per focus account, looking at relationships, open needs, budget timing and the next sensible step, is the single routine that turns one-off projects into a steady client.

                ## Milestones
                1. Each focus account reviewed against its map, needs log and budget calendar.
                2. One next step named per account, with an owner and a date.
                3. Relationship gaps noted: senior people you have never met, functions you have not worked with.
                4. Accounts with no realistic further work moved off the focus list.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each focus account has a dated monthly review note with one next step and owner for at least ten months of the year."
                cadence: rolling
              tasks:
                - "Review each focus account against its map and needs log @recurring(monthly:9)"
                - "Write one next step per account with an owner and date"
                - "Note senior people at each client you have not yet met"
            - name: Monday look at the extension pipeline
              description: |-
                ## Purpose
                Possible extensions sit in different states, from a hunch to a signed variation, and without a list they drift until the engagement ends and the team rolls off. A short Monday look at every live possibility, its stage and the next action keeps the timing right and stops two colleagues approaching the same sponsor.

                ## Milestones
                1. A pipeline list of possible extensions with stage, value range and decision date.
                2. Stages defined plainly: idea, discussed, invited to propose, proposed, agreed, signed.
                3. A next action and owner on every live item.
                4. Items with no movement for six weeks either revived or closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The extension pipeline list shows a stage, next action and Monday update date on every live item for the last eight weeks."
                cadence: rolling
              tasks:
                - "Create a pipeline list with stage, value range and decision date"
                - "Update stage and next action on every live possibility @recurring(weekly:mon)"
                - "Close or revive any item that has not moved for six weeks"
            - name: Quarterly client feedback conversation
              description: |-
                ## Purpose
                Few clients volunteer criticism while a project is running, then quietly choose someone else for the next one. Asking the sponsor and one or two counterparts each quarter what is working, what is not and what they would change gives you time to fix problems before they cost the follow-on.

                ## Milestones
                1. Three standing feedback questions agreed and reused each quarter.
                2. Feedback gathered from the sponsor and at least one working-level counterpart.
                3. Themes recorded alongside earlier quarters.
                4. At least one visible change made in response, and the client told about it.

                ## Notes
                Start from the **Feedback themes** template. Ask in person or on a call, not by survey; people say more and remember that you asked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each focus client has dated feedback notes from at least two people per quarter, with one change made in response."
                cadence: cyclic
              tasks:
                - "Write three standing feedback questions to reuse each quarter"
                - "Hold feedback conversations with the sponsor and one counterpart @recurring(quarterly)"
                - "Tell the client which change you made in response to their feedback"
            - name: Champion watch for client team changes
              description: |-
                ## Purpose
                The most common reason a strong extension dies is that the sponsor who wanted it moves role, leaves or loses the budget. Checking each month for reorganisations, departures and new arrivals at your focus clients gives you a few weeks to build the next relationship before the old one disappears.

                ## Milestones
                1. The two or three people at each client whose support your work depends on named.
                2. A monthly check of role changes, announcements and reorganisations completed.
                3. A second relationship started at every client that relies on a single champion.
                4. A short handover note ready for any new sponsor explaining the work so far.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every focus client has at least two named supporters recorded, and a monthly check of role changes is logged."
                cadence: rolling
              tasks:
                - "Name the two or three people whose support each account depends on"
                - "Check focus clients for departures and reorganisations @recurring(monthly:14)"
                - "Arrange a coffee with a second senior contact at any single-champion client"
            - name: Dormant client reconnect rhythm
              description: |-
                ## Purpose
                A client you helped eighteen months ago is often the warmest lead you have, and also the one you have stopped thinking about. A light monthly habit of contacting one or two past clients with something useful, not a pitch, keeps you in mind for the moment a new problem lands on their desk.

                ## Milestones
                1. A list of past clients with no active work, with the date of last contact.
                2. One or two past clients contacted each month with a relevant article, result or question.
                3. Any need they mention added to the needs log for that account.
                4. Past clients who have moved companies followed to their new employer.

                ## Notes
                Respect any non-solicit terms from previous employers or prime contractors before contacting a former client.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten past clients have a logged contact in the last twelve months, each with something useful attached."
                cadence: rolling
              tasks:
                - "List past clients with no current work and your last contact date"
                - "Send one past client something useful with no request attached @recurring(monthly:20)"
                - "Find which former sponsors have moved to new companies"
            - name: Monthly news scan for focus clients
              description: |-
                ## Purpose
                New needs often arrive from outside the engagement: a results warning, a regulator's letter, an acquisition or a new chief executive with a different agenda. A monthly scan of public news on each focus client, noted against the account page, means you hear about the shift from the press before the sponsor has to explain it to you, and can ask a better question at the next meeting.

                ## Milestones
                1. News alerts set for each focus client, its main competitors and its regulator.
                2. A monthly note per focus account listing events that could change the client's priorities.
                3. Each relevant event linked to a possible need in the needs log or marked as no action.
                4. One informed question carried into the next sponsor conversation.

                ## Notes
                Use only public sources. Never pass one client's news or plans to another client, even informally.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each focus account has a monthly news note for at least ten months of the year, with relevant events linked to the needs log."
                cadence: rolling
              tasks:
                - "Set news alerts for each focus client and its main competitors"
                - "Write a short news note for each focus account @recurring(monthly:17)"
                - "Link any relevant event to a possible need in the needs log"
            - name: Quality bar held on extended engagements
              description: |-
                ## Purpose
                Second phases often get the B team: the senior people move to the next sale, the analysts are tired and the client notices standards slipping by month four. A monthly check on the quality of extended work protects the reputation that earned the extension and the chance of a third.

                ## Milestones
                1. The quality standard of the first phase written down: review steps, turnaround times, senior time.
                2. A monthly comparison of the extended phase against that standard.
                3. Team fatigue and turnover on the account noted openly.
                4. Any slip raised with the engagement lead and fixed within the month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Extended engagements have a written quality standard and a monthly comparison note with any slips and fixes recorded."
                cadence: rolling
              tasks:
                - "Write down the review steps and senior time used in phase one"
                - "Compare the current phase against the phase one standard @recurring(monthly:5)"
                - "Raise any slip in quality or team fatigue with the engagement lead"
            - name: Halfway value review with the core team
              description: |-
                ## Purpose
                At the midpoint of each phase there is still time to change course, and the client is starting to wonder what happens after the end date. A structured internal review at halfway, covering what the work has shown, what the client now needs and what is out of reach in the current scope, prepares the honest ground for any next step.

                ## Milestones
                1. An internal review held at roughly the midpoint of the phase.
                2. Findings so far summarised in five lines.
                3. Needs that the current scope will not reach listed and sized.
                4. A view agreed on whether a next phase is likely to be in the client's interest.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Each phase has a dated halfway review note with findings, out-of-scope needs and a recorded view on a possible next phase."
                cadence: cyclic
              tasks:
                - "Book a one-hour internal review at the midpoint of the phase"
                - "Summarise the findings so far in five lines"
                - "List and size the needs current scope will not reach"
                - "Agree whether a next phase would genuinely serve the client"
            - name: End-of-phase debrief that seeds the next phase
              description: |-
                ## Purpose
                The last week of a phase is when the client is most open about what they still worry about, and when the consulting team is most tempted to rush to the next project. A structured debrief with the client, covering results, surprises and the problems still open, gives both sides a shared record to start from.

                ## Milestones
                1. A debrief meeting with the sponsor booked before the final readout week.
                2. Results, surprises and open problems written up in a shared note.
                3. The client's own view of priority among the open problems recorded.
                4. Agreement on whether and when to talk again about the open problems.

                ## Notes
                Start from the **Meeting notes** template. Keep the debrief separate from the final readout so it feels like a conversation, not a sale.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A shared debrief note listing results, surprises and client-ranked open problems exists for every completed phase."
                cadence: cyclic
              tasks:
                - "Book a debrief with the sponsor before the final readout week"
                - "Write up results, surprises and open problems in a shared note"
                - "Ask the sponsor to rank the open problems in their own order"
            - name: Listening for unmet needs in client meetings
              description: |-
                ## Purpose
                Most consultants listen for answers to their own questions and miss the remarks that point to the next problem: a frustration about a system, a board worry, a team that keeps missing targets. Practising a listening habit over a month of meetings trains you to catch these and note them without breaking the flow.

                ## Milestones
                1. A short list of signals to listen for: repeated complaints, board pressure, missed targets, unowned gaps.
                2. Notes from ten client meetings reviewed for those signals.
                3. At least five new needs added to the log from that review.
                4. A personal habit settled for capturing needs during meetings without losing focus.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes from ten client meetings have been reviewed against a written list of need signals, adding at least five entries to the needs log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a list of five signals that point to an unmet need"
                - "Reread notes from your last ten client meetings for those signals"
                - "Add each new need you find to the needs log"
                - "Choose a margin mark for flagging needs live in meeting notes"
            - name: Diagnostic questions that open a next phase
              description: |-
                ## Purpose
                Asking a good question about the client's next problem helps them think and naturally raises whether you can help, whereas a leading question sounds like a pitch. Building and practising a small set of open diagnostic questions lets you explore further needs in a way the sponsor finds useful in its own right.

                ## Milestones
                1. A bank of eight to ten open questions about priorities, constraints and what happens after the current phase.
                2. Each question checked for whether it serves the client even if no work follows.
                3. Questions tried in at least four real conversations.
                4. The two or three that produced the best conversations kept as your standard set.

                ## Notes
                Examples worth adapting: what would have to be true by next year for this to count as a success, and what is the problem nobody on your team owns yet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bank of open diagnostic questions has been tried in four real conversations and narrowed to a written standard set of two or three."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draft eight open questions about the client's priorities after this phase"
                - "Cut any question that only makes sense if they hire you again"
                - "Use two of the questions in your next sponsor conversation"
                - "Keep the questions that produced the most useful answers"
            - name: Framing a next phase as options for the client
              description: |-
                ## Purpose
                Sponsors respond better to a choice than to a pitch: continue in full, continue lighter, hand over to their own team, or stop. Learning to lay out further work as a set of options, each with its cost, benefit and risk, puts the decision in their hands and makes a smaller yes much more likely than a flat no.

                ## Milestones
                1. A one-page option layout drafted with three or four paths including doing nothing.
                2. Cost, expected benefit, risk and client effort described for each path.
                3. The layout tested on a past engagement with a colleague acting as sponsor.
                4. A reusable version saved for live use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A reusable one-page options layout with at least three paths, including handing over or stopping, has been rehearsed once with a colleague."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft three or four next-step options for a past engagement"
                - "Describe cost, benefit, risk and client effort for each option"
                - "Rehearse the options with a colleague playing the sponsor"
                - "Save a clean version of the layout for live use"
            - name: Two-page continuation note
              description: |-
                ## Purpose
                An extension with an existing client rarely needs a full proposal: the sponsor knows you, and a forty-page document signals that you have not been listening. A two-page note covering what has been achieved, what is still open, the proposed next phase, team and fees is faster to write and much easier for the sponsor to forward upwards.

                ## Milestones
                1. A two-page structure agreed: results so far, open problems, proposed phase, team, fees and timing.
                2. A first note drafted for a real or recent engagement.
                3. The note read by a colleague who does not know the client, for clarity.
                4. The structure saved for reuse.

                ## Notes
                Lead with the client's own words from the debrief or needs log. Fees belong on the last page, stated once and plainly.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A reusable two-page continuation note structure exists, with one real draft reviewed by a colleague for clarity."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Outline the six sections of a two-page continuation note"
                - "Ask the agent to draft a first note from your evidence page and needs log"
                - "Have a colleague unfamiliar with the client read it for clarity"
                - "Save the cleaned-up structure for future extensions"
            - name: Talking fees for a continuation with the buyer
              description: |-
                ## Purpose
                Money conversations with a client you already know feel awkward, so many consultants either quietly discount the next phase or avoid naming a number until it is too late in the budget cycle. Practising a short, plain way to raise fees for further work, including how to hold the rate, protects both the relationship and your margin.

                ## Milestones
                1. A plain two-sentence way to introduce fees for a further phase written down.
                2. Answers prepared for the three usual pushes: a discount for loyalty, a smaller team, a delay.
                3. The conversation rehearsed aloud with a peer at least twice.
                4. A personal floor for continuation fees set before any live discussion.

                ## Notes
                Pricing structure itself belongs in your pricing work; this project is about saying the number to someone you know well.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written fee wording and answers to three common pushes have been rehearsed twice with a peer, and a continuation fee floor is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write two sentences that introduce the fee for a next phase"
                - "Prepare answers to requests for a loyalty discount, a smaller team and a delay"
                - "Rehearse the fee conversation aloud with a peer twice"
                - "Set your floor for continuation fees before the live talk"
            - name: Turning free extra asks into scoped work
              description: |-
                ## Purpose
                Satisfied clients ask for small extras, one more analysis, a quick deck for the board, and each one is reasonable until the team has given away a fortnight. Learning to say yes to the first favour, name the second as out of scope and offer a short scoped change by the third keeps goodwill and makes the extra value visible.

                ## Milestones
                1. Every unplanned request in the current phase listed with the time it took.
                2. A simple personal rule set for favours, out-of-scope flags and change requests.
                3. Wording drafted for naming an ask as outside scope without sounding defensive.
                4. At least one extra ask converted into a written change or a deliberate, recorded favour.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Unplanned requests in the current phase are listed with hours spent, and at least one has been turned into a written change or a recorded favour."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every unplanned request this phase with the hours it took"
                - "Write your rule for when a favour becomes a change request"
                - "Draft one friendly sentence that names an ask as out of scope"
                - "Send a short written change for the next sizeable extra ask"
            - name: Raising a hard finding without losing the account
              description: |-
                ## Purpose
                Sometimes the honest answer is that the client's favourite initiative will not work, or that their own team caused the problem, and consultants who want the next phase are tempted to soften it. Practising how to deliver an unwelcome finding early, privately and with evidence is what makes the client trust you with the next problem.

                ## Milestones
                1. One real or past unwelcome finding chosen as the practice case.
                2. The finding written in three sentences with its evidence and what it means for the sponsor.
                3. A private pre-meeting plan drafted before any group presentation.
                4. The conversation rehearsed with a peer and the wording revised.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-sentence statement of one unwelcome finding with evidence and a private pre-meeting plan has been rehearsed with a peer."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick one unwelcome finding from a current or past engagement"
                - "Write it in three sentences with its evidence"
                - "Plan a private conversation with the sponsor before any group meeting"
                - "Rehearse the conversation with a peer and tighten the wording"
            - name: Go or no-go scorecard for proposing an extension
              description: |-
                ## Purpose
                Not every possible next phase is worth proposing: some are low margin, some stretch your skills too far and some would mostly benefit you. A short scorecard covering client benefit, fit with your expertise, sponsor appetite, budget timing, team capacity and margin turns a gut feeling into a decision you can explain.

                ## Milestones
                1. Six scoring criteria written with a simple one to three scale.
                2. Two past extension opportunities scored to calibrate the scale.
                3. A threshold set below which you do not propose.
                4. The scorecard used on the next live possibility, with the result recorded.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A six-criterion scorecard with a written threshold has been calibrated on two past cases and applied to one live opportunity."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write six criteria for whether an extension is worth proposing"
                - "Score two past extension opportunities to test the scale"
                - "Set the minimum score needed before you propose"
                - "Score the next live possibility and record the decision"
            - name: Extension or new engagement decision
              description: |-
                ## Purpose
                Continuing under the current contract is fast but can stretch the original scope beyond what procurement or your insurer intended, while a new engagement takes longer but resets terms, team and price. Deciding deliberately which route each follow-on takes avoids audit questions later and gives you a chance to renegotiate what did not work.

                ## Milestones
                1. The proposed further work compared against the original scope and contract ceilings.
                2. Pros and cons of a variation versus a fresh engagement listed for this client.
                3. The client's procurement view sought on which route applies.
                4. A route chosen and the reasons written on the account page.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For each live follow-on, the route chosen (variation or new engagement) is recorded with reasons and the procurement view."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the proposed work with the original scope and ceilings"
                - "List pros and cons of a variation versus a new engagement"
                - "Ask the client's procurement contact which route they expect"
                - "Record the route and reasons on the account page"
            - name: Retainer after the project ends decision
              description: |-
                ## Purpose
                Some clients want a few days a month of advice after a project closes, and a well-shaped retainer can be steady income for an independent or a valued touchpoint for a firm. Others drift into paying for little, then cancel resentfully. Deciding whether to offer one, with a defined scope, number of days and review point, protects both sides.

                ## Milestones
                1. The client's real ongoing need described in a few sentences.
                2. A retainer shape drafted: days per month, what is included, response times and a review date.
                3. The effect on your capacity and other clients checked.
                4. An offer made, declined or deferred, with the reasoning recorded.

                ## Notes
                Build in a review after three or six months so either side can stop without awkwardness.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on offering a retainer exists, with scope, days per month, review date and capacity impact if offered."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what ongoing help the client actually needs"
                - "Draft a retainer shape with days, inclusions and a review date"
                - "Check the retainer against your capacity for other clients"
                - "Decide to offer, decline or defer and note why"
            - name: Team continuity plan for the next phase
              description: |-
                ## Purpose
                Sponsors often agree to a second phase because of particular people, then discover those people have been staffed elsewhere. Planning who stays, who rotates and how knowledge passes to newcomers, before the extension is signed, keeps the promise the client thought they were buying.

                ## Milestones
                1. The people the client most values on the current team identified.
                2. Availability for each confirmed for the proposed next phase.
                3. Any rotation agreed with the client before signature, not after.
                4. A knowledge handover plan written for anyone joining mid-account.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A continuity plan names who stays, who rotates and how newcomers are briefed, agreed with the client before the next phase is signed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the sponsor which team members they value most"
                - "Confirm each person's availability for the proposed next phase"
                - "Tell the client about any planned rotation before they sign"
                - "Write a handover brief for anyone joining the account"
            - name: Win and loss review of past extension attempts
              description: |-
                ## Purpose
                Most consultants can say why they won a new client but not why a sponsor said no to a second phase. Looking back at the last five to ten extension attempts, won and lost, usually shows a pattern: timing, a missing second champion, a note that was too long or a quality dip near the end.

                ## Milestones
                1. Five to ten past extension attempts listed with outcome and value.
                2. The reason for each outcome written, ideally confirmed by the client.
                3. Two or three repeating patterns identified.
                4. One change to your approach agreed and written into your routines.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A review of at least five past extension attempts records each outcome and reason, two or three patterns and one resulting change in approach."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List your last five to ten extension attempts with outcomes"
                - "Write the likely reason for each win and each loss"
                - "Ask one former sponsor who said no what would have changed their mind"
                - "Write one change in approach into your monthly account review"
            - name: Declining or referring work that is not yours
              description: |-
                ## Purpose
                Trusting clients will sometimes ask you to take on work outside your expertise, or work that would create a conflict with another client or with your earlier recommendations. Having a clear way to decline or refer it, ideally to someone good, protects the client and usually makes them more likely to come back for the work you do well.

                ## Milestones
                1. The kinds of request you will always decline or refer written down.
                2. A short list of trusted specialists you can refer clients to.
                3. Wording drafted for a referral that keeps you useful to the client.
                4. Any conflict concerns checked with your firm's risk team or your own adviser before replying.

                ## Notes
                Recommending your own team to implement what you just recommended can raise independence questions in some sectors; check before proposing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of work you decline or refer, plus named specialists and referral wording, is saved and used at least once."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the kinds of request you will always decline or refer"
                - "List three specialists you would trust with a referral"
                - "Draft a referral message that keeps you useful to the client"
            - name: Next-phase conversation six weeks before the end
              description: |-
                ## Purpose
                Raise further work in the final week and the budget is gone and the team is half rolled off; raise it in week two and it sounds premature. For most engagements the right moment is roughly six weeks before the end, after early results and before the final readout, in a private conversation with the sponsor.

                ## Milestones
                1. The conversation date set roughly six weeks before the phase ends, checked against the client's budget calendar.
                2. Results so far, open problems and two or three options prepared on one page.
                3. The conversation held privately with the sponsor, not in a group meeting.
                4. An agreed next step recorded: a note, a meeting with the budget holder, or a clear no.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A private next-phase conversation with the sponsor took place about six weeks before the end, with an agreed next step recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count back six weeks from the phase end and check the budget calendar"
                - "Prepare one page of results, open problems and options"
                - "Book a private half hour with the sponsor"
                - "Record the agreed next step straight after the conversation"
            - name: Meeting with the budget holder above the sponsor
              description: |-
                ## Purpose
                Many extensions are approved by someone the consulting team has barely met: the sponsor's boss, the finance director or a programme board. Preparing a short, well-timed meeting with that person, with the sponsor's blessing and present, makes the decision theirs to understand rather than a request passed along second-hand.

                ## Milestones
                1. The person who actually approves the spend identified with the sponsor.
                2. The sponsor's agreement and presence secured for the meeting.
                3. A one-page brief prepared in that person's terms: cost, return, risk and timing.
                4. The meeting held and the decision or next step recorded.

                ## Notes
                Never go around the sponsor. Ask them how their boss likes to receive a proposal and follow that.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A meeting with the budget holder, attended by the sponsor, took place with a one-page brief and the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the sponsor who signs off spend at the next-phase level"
                - "Ask how that person prefers to receive a proposal"
                - "Write a one-page brief on cost, return, risk and timing"
                - "Record the decision or next step after the meeting"
            - name: Phase two kickoff after an approved extension
              description: |-
                ## Purpose
                Teams often roll straight from phase one into phase two without a pause, carrying old assumptions and a tired plan. A short, proper restart, confirming new objectives, any changed client team, governance and early wins for the new phase, signals to the client that this is a fresh commitment, not just more of the same.

                ## Milestones
                1. Phase two objectives and success measures confirmed in writing with the sponsor.
                2. Changes to client team, governance and reporting agreed.
                3. Lessons from phase one shared with any new team members.
                4. An early result for the first three weeks of the new phase named and scheduled.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A phase two kickoff took place with written objectives, governance changes and an early result scheduled within three weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm phase two objectives and measures with the sponsor in writing"
                - "Agree any changes to the client team and reporting"
                - "Brief new team members on the lessons from phase one"
                - "Name and schedule an early result for the first three weeks"
            - name: Helping a client put follow-on work in next year's budget
              description: |-
                ## Purpose
                When a client wants to continue but has no budget left, the honest route is to help them make the case in their next planning round. Giving the sponsor a clear scope, a cost range and a benefit estimate in time for their budget submission keeps the work alive without pressing them to find money they do not have.

                ## Milestones
                1. The client's budget submission deadline confirmed.
                2. A scope outline, cost range and benefit estimate sent to the sponsor in their own format.
                3. Any questions from the client's finance team answered within the window.
                4. The outcome of the budget round recorded and the account plan updated.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A scope, cost range and benefit estimate reached the sponsor before their budget deadline, and the budget round outcome is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the date the sponsor must submit next year's budget"
                - "Ask which format the client's finance team expects"
                - "Send a scope outline, cost range and benefit estimate in that format"
                - "Record the budget outcome on the account page"
            - name: Six-month check on implemented recommendations
              description: |-
                ## Purpose
                Six months after a project ends, most clients have done some of what was recommended, stalled on some and quietly dropped the rest. A short, unpaid visit or call to see what happened is useful to them, teaches you which recommendations survive contact with reality and often surfaces the next real problem.

                ## Milestones
                1. A check-in booked roughly six months after the engagement closed.
                2. Each major recommendation marked as done, stalled or dropped.
                3. The reasons for stalls noted in the client's words.
                4. A short thank-you note sent with one useful observation, and any new need logged.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A six-month check-in took place, with every major recommendation marked done, stalled or dropped and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a check-in with the sponsor six months after close"
                - "List the major recommendations to ask about"
                - "Mark each one as done, stalled or dropped with the reason"
                - "Send a thank-you note with one useful observation"
            - name: Independent consultant with one dominant client
              description: |-
                ## Purpose
                If one client provides most of an independent's income, every extension feels like survival, which weakens your judgement and your rate. Planning further work with that client alongside a deliberate cap on its share of your revenue keeps you honest with them and safer if the sponsor moves on.

                ## Milestones
                1. The client's share of the last twelve months' income calculated.
                2. A target ceiling for any one client's share set for the next year.
                3. Further work with the client planned within that ceiling.
                4. Time protected each month for winning or growing a second client.

                ## Notes
                In some tax systems a single long-running client can also raise employment status questions; ask your accountant.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The dominant client's income share is calculated, a written ceiling is set, and monthly time for a second client is in the calendar."
                cadence: rolling
              tasks:
                - "Work out what share of last year's income came from your largest client"
                - "Set a ceiling for any one client's share next year"
                - "Plan further work with that client within the ceiling"
                - "Block half a day each month for growing a second client"
                - "Check the largest client's share of income against your ceiling @recurring(quarterly)"
            - name: Passing client needs to your partner as a consultant
              description: |-
                ## Purpose
                Analysts and associates hear more about the client's real problems than anyone, but are rarely expected to sell, and needs they spot often vanish. Learning how to pass a well-written need to your engagement manager or partner, at the right moment and without promising the client anything, is a visible way to show commercial judgement before promotion.

                ## Milestones
                1. Your firm's expectations for junior staff on client development understood.
                2. Three needs from your workstream written up with source, evidence and rough size.
                3. Those needs shared with your manager or partner in a short note.
                4. Feedback received on what was useful and what to do differently.

                ## Notes
                Never discuss fees or new scope with the client yourself unless your partner has asked you to.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A note with three sourced client needs has gone to your manager or partner, with their feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your manager what the firm expects from juniors on client development"
                - "Write up three needs from your workstream with source and evidence"
                - "Send the note to your manager or partner"
                - "Ask for feedback on which need was most useful and why"
            - name: Extension planning as engagement manager
              description: |-
                ## Purpose
                As engagement manager you see the client daily, own the team and the plan, and are usually the person the partner asks whether a next phase is real. Building extension thinking into your engagement plan from week one, rather than as a scramble in the last month, makes the partner's conversation with the sponsor much easier.

                ## Milestones
                1. A line on likely next problems added to the engagement plan in the first two weeks.
                2. The halfway review and the six-week conversation dated in the plan.
                3. A weekly two-minute item on client needs added to team check-ins.
                4. A short brief on the possible next phase given to the partner ahead of the sponsor conversation.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The engagement plan includes dated halfway and six-week moments, and the partner has a written brief on the possible next phase before the sponsor conversation."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add likely next problems to the engagement plan in week one"
                - "Put the halfway review and six-week conversation dates in the plan"
                - "Add a two-minute client needs item to the team check-in"
                - "Brief the partner in writing before the sponsor conversation"
            - name: Follow-on rules when a prime contractor owns the client
              description: |-
                ## Purpose
                As a subcontractor, the client may well ask you directly for more work, but the contract with the prime firm usually says who may propose it and who owns the relationship. Clear, written rules for handling those approaches protect your standing with the prime, and with it the next subcontract.

                ## Milestones
                1. The non-solicit, client ownership and referral clauses in the subcontract copied out.
                2. A standard reply agreed for when the client asks you about more work directly.
                3. A route agreed with the prime for passing on needs you spot.
                4. The end date of any restriction noted on the account page.

                ## Notes
                If the wording is unclear, ask the prime in writing before acting. A lawyer can advise where stakes are high.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The subcontract's client ownership terms, a standard reply to direct approaches and an agreed route for passing on needs are written on the account page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the subcontract's non-solicit and client ownership clauses"
                - "Write a standard reply for direct client requests for more work"
                - "Agree with the prime how you pass on needs you spot"
                - "Note when each restriction ends"
            - name: Public sector extensions within procurement rules
              description: |-
                ## Purpose
                Public bodies usually cannot simply extend a contract because the work went well: value thresholds, framework terms and rules on direct award decide whether a variation is allowed or a new competition is needed. Understanding those limits early saves a sponsor from an awkward conversation with their procurement team and you from losing work you thought was agreed.

                ## Milestones
                1. The procurement route of the current contract identified: framework call-off, open tender or direct award.
                2. The value and duration limits on extensions or variations noted from the contract and client guidance.
                3. The client's procurement officer consulted on what further work would require.
                4. A realistic timeline for any next phase written, including a possible new competition.

                ## Notes
                Rules differ by country and body. Rely on the client's procurement team and the published rules, not on what another client allowed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The current contract's procurement route, extension limits and a realistic next-phase timeline agreed with procurement are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Identify which procurement route the current contract used"
                - "Note the value and time limits on variations from the contract"
                - "Ask the procurement officer what further work would require"
                - "Write a next-phase timeline that allows for a new competition"
            - name: Inheriting a client account from a departing colleague
              description: |-
                ## Purpose
                If a partner, manager or fellow independent leaves, their clients do not automatically transfer their trust to you, and open threads for further work can be lost in a rushed handover. A deliberate takeover, with a proper briefing, an introduction from the departing person and early contact with each sponsor, keeps the account alive.

                ## Milestones
                1. A handover briefing held covering history, people, open threads and sensitivities.
                2. A personal introduction made by the departing colleague to each key contact.
                3. A first meeting held with each sponsor within a month of the handover.
                4. The account map and needs log updated in your own words.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Within forty-five days, every key contact at the inherited account has been introduced and met, and the account map is updated."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a handover briefing with the departing colleague"
                - "Ask them to introduce you personally to each key contact"
                - "Meet each sponsor within the first month"
                - "Rewrite the account map and needs log in your own words"
            - name: Restarting work after a client budget freeze
              description: |-
                ## Purpose
                Engagements sometimes stop not because of quality but because the client froze discretionary spend, and when the freeze lifts the consultant who kept in touch usefully is the one called back. Planning a respectful pause, with a clean handover and a light contact schedule, keeps that door open.

                ## Milestones
                1. The work paused with a written status note and all materials handed over.
                2. The likely review date for the freeze confirmed with the sponsor.
                3. A light contact plan set for the pause period.
                4. A short restart outline ready for when spend reopens.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A paused engagement has a written status note, a confirmed freeze review date, a contact plan and a ready restart outline."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a status note for the paused work and hand over materials"
                - "Ask the sponsor when the spending freeze will be reviewed"
                - "Plan two or three useful contacts during the pause"
                - "Draft a one-page restart outline for when spend reopens"
            - name: Multi-year account plan for a key client
              description: |-
                ## Purpose
                For the one or two clients where you could add value for years, a written plan lifts thinking above the next phase: where the client's strategy is heading, which problems you are well placed to help with, who you need to know and where you will deliberately not compete. Experienced partners and established independents treat this as their most valuable planning document.

                ## Milestones
                1. The client's strategy and pressures for the next two to three years summarised from public sources and conversations.
                2. Three to five problems you could help with, ranked by client value.
                3. A relationship map showing current, missing and at-risk contacts.
                4. A yearly plan of actions, reviewed against results each quarter.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written multi-year account plan with strategy summary, ranked problems, relationship map and yearly actions exists for each key client."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to summarise the client's annual report and strategy statements"
                - "Rank three to five client problems you are well placed to help with"
                - "Map current, missing and at-risk relationships at the client"
                - "Review the account plan against actual results @recurring(quarterly)"
            - name: Diagnostic phases designed to inform a decision
              description: |-
                ## Purpose
                A short diagnostic is a common first phase, and a badly designed one ends with a vague report and an awkward pitch for implementation. Designing the diagnostic so its output is a clear decision for the client, including the option of doing the work themselves, makes any follow-on a natural and honest choice rather than a sales close.

                ## Milestones
                1. The decision the diagnostic must inform written in one sentence with the sponsor.
                2. Outputs designed so the client could act with or without you afterwards.
                3. Implementation options laid out including an in-house route with what it would need.
                4. The diagnostic's success judged on decision quality, not on whether a follow-on was won.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A diagnostic design names the client decision it informs and includes an in-house implementation option alongside any external one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree with the sponsor the decision the diagnostic must inform"
                - "Design outputs the client could act on without you"
                - "Describe an in-house implementation route and what it would need"
                - "Write how you will judge the diagnostic a success"
            - name: Introducing a colleague's expertise into the account
              description: |-
                ## Purpose
                Clients often have a problem next door to yours, in technology, people or finance, that a trusted colleague or fellow independent could solve. Introducing that person well, with context, at the client's request and with your reputation at stake, widens the relationship and is safer than stretching yourself into work you do badly.

                ## Milestones
                1. A client problem outside your expertise identified from the needs log.
                2. A colleague or partner with a proven record in that area chosen.
                3. The client's permission sought before any introduction.
                4. An introduction made with a written brief, and the outcome followed up.

                ## Notes
                Agree any referral or teaming terms with the colleague in writing before the introduction, and tell the client about them if they affect fees.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "One introduction of a colleague to a client has been made with the client's permission and a written brief, and its outcome is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find one client need outside your expertise in the needs log"
                - "Choose a colleague with a proven record in that area"
                - "Ask the client whether they would welcome an introduction"
                - "Send a short written brief with the introduction"
            - name: Follow-on conversion log across your clients
              description: |-
                ## Purpose
                Knowing that half your first engagements turn into a second phase, or that almost none do, changes how you price, staff and plan your year. A simple log of every engagement and whether it led to further work, at what value and after how long, turns anecdote into a number you can improve.

                ## Milestones
                1. Every engagement of the last three years logged with whether further work followed.
                2. Conversion rate, average follow-on value and average gap between phases calculated.
                3. Results split by client type, engagement type and who led the delivery.
                4. The log updated at the close of each engagement.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A log of at least three years of engagements shows follow-on conversion rate, average value and gap between phases, updated at each close."
                cadence: rolling
              tasks:
                - "Log each past engagement with whether further work followed"
                - "Calculate conversion rate, average follow-on value and gap between phases"
                - "Split the results by client and engagement type"
                - "Recalculate the conversion rate and average gap between phases @recurring(yearly)"
            - name: Ongoing support model after a transformation
              description: |-
                ## Purpose
                After a large programme, some clients need lighter, steady help: a quarterly health check, coaching for the new owners or a small on-call team. Designing an ongoing support offer with clear limits, measures and an end point can suit the client better than another big phase, and gives you recurring income without overstaying.

                ## Milestones
                1. The client's capability gaps after the programme listed with their own leads.
                2. A support model drafted with services, cadence, measures and an exit point.
                3. The model compared with simply training the client team to do it themselves.
                4. The model offered, adjusted or set aside, with the decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written support model with services, cadence, measures and exit point has been compared with an in-house option and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List capability gaps after the programme with the client's leads"
                - "Draft a support model with services, cadence and an exit point"
                - "Compare the model with training the client team instead"
                - "Record whether to offer, adjust or set the model aside"
            - name: Planned exit from a long-running client
              description: |-
                ## Purpose
                Consultants who stay for years can become part of the furniture, doing work the client should own and blocking their own growth. Planning a deliberate step back, with a handover of capability and a clear invitation to return for new problems, often leads to better future work than another renewal ever would.

                ## Milestones
                1. The client's dependence on you described honestly: tasks, decisions and knowledge only you hold.
                2. A handover plan agreed with the sponsor with dates and named client owners.
                3. Documentation and coaching completed so the client team can run without you.
                4. A closing conversation held that names the kinds of problem you would welcome back.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A dated handover plan with named client owners is complete, and a closing conversation has been held with the sponsor."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the tasks and knowledge at the client that only you hold"
                - "Agree a dated handover plan with named client owners"
                - "Finish documentation and coaching for each handed-over task"
                - "Hold a closing conversation naming problems you would welcome back"
---

# Follow-On Work and Extensions

Most consulting revenue comes from clients who have already hired you once, and the best extensions are earned in delivery, not sold at the end. This area starts with foundations (an account map, your own rules for proposing more work, the contract's change and extension terms, the client's budget calendar and a needs log), moves through the operating routines that turn delivery into evidence and timing, the skills of hearing unmet needs and raising a next phase without a sales pitch, decisions about whether and how to continue, the dated conversations near the end of a phase, variants for independents, firm consultants, subcontractors and public sector work, and finally specialist account planning across years.

The rhythm is a Friday pass through the needs log, a Monday look at the extension pipeline, a monthly account review and evidence update, champion watch and dormant client contact on varied days, and a quarterly feedback check. The Person, Metrics log, Feedback themes and Meeting notes templates pair with the account contact pages, the follow-on conversion log, client feedback and the end-of-phase debrief. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
