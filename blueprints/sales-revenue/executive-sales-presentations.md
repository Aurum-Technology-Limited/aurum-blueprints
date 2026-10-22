---
id: sales-revenue.executive-sales-presentations
name: Executive Sales Presentations
description: "Executive meetings that produce decisions: research on the people in the room, a business case in the buyer's numbers, short decks, rehearsed answers to hard questions and follow-up that lands."
category: business
version: 1.0.0
tags: [sales-revenue, executive-sales-presentations, team, founder, enterprise, business-case, executive-briefing, presentation-skills]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - feedback-themes
    - reading-queue
    - metrics-log
    - development-plan
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Executive Sales Presentations
          description: "Preparing and delivering high-stakes presentations to senior buyers, with sharp business cases, concise decks and rehearsed answers to hard questions."
          projects:
            - name: One-page executive meeting brief
              description: |-
                ## Purpose
                Senior buyers give a meeting one chance, and most sellers walk in knowing the agenda but not why the executive agreed to come. A one-page brief written before every executive meeting, covering who attends, what they care about, the decision you want and the risks, forces the thinking that separates a useful thirty minutes from a polite one.

                ## Milestones
                1. A one-page brief format with sections for attendees, their priorities, the meeting objective, the ask and known risks.
                2. The brief completed for your next scheduled executive meeting.
                3. The brief reviewed by your manager or a colleague at least two days before the meeting.
                4. The format saved where the whole team can copy it.

                ## Notes
                Keep it to one page. If it runs longer, the objective is not yet clear enough.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief exists for the next executive meeting on your calendar and was reviewed by a colleague two days before it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every executive meeting in your open deals for the next sixty days"
                - "Draft a one-page brief format with five fixed sections"
                - "Fill in the brief for the nearest executive meeting"
                - "Ask a colleague to challenge the brief two days before the meeting"
            - name: Researching the executives in the room
              description: |-
                ## Purpose
                Executives notice within a minute whether you understand their business or only your product. An hour spent on each attendee's annual report, recent earnings call, published strategy and public interviews gives you their words for their priorities, which is the language your deck should use.

                ## Milestones
                1. Each attendee's role, tenure and reporting line confirmed.
                2. The company's three stated strategic priorities for this year written in their own words.
                3. One recent public statement per executive that connects to your proposal.
                4. A short dossier attached to the deal record.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dossier for each executive in the next meeting lists their priorities in quoted company language and is attached to the deal record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the latest annual report or strategy document of the buying company"
                - "Listen to the most recent earnings call or read its transcript"
                - "Note three priorities in the company's exact words"
                - "Ask your champion what each executive is measured on this year"
                - "Attach the dossier to the deal record in the CRM"
            - name: Defining the single decision you want from the room
              description: |-
                ## Purpose
                Presentations that end by asking for questions rarely change anything, because nobody was asked to decide. Writing down, before you build a single slide, the one decision you need, such as approving a pilot budget or naming a project sponsor, turns the whole meeting into an argument for that decision.

                ## Milestones
                1. One decision written as a sentence the executive could answer yes or no.
                2. A fallback decision agreed in case the main one is out of reach.
                3. The decision confirmed with your champion as realistic for this audience.
                4. The final slide of the deck built around the decision.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The decision you will ask for, and a fallback, are written in the meeting brief and confirmed with your champion before the deck is built."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the decision you need as one yes-or-no sentence"
                - "Write a smaller fallback decision you would still accept"
                - "Check with your champion that the executive can make this decision"
                - "Build the closing slide around the decision"
            - name: Pre-meeting call with your champion
              description: |-
                ## Purpose
                Your champion knows the politics, the mood and what the executive heard last week, and a thirty-minute call before the meeting is the cheapest way to learn it. Confirming attendees, time available, the executive's current concerns and what the champion will say in the room avoids the most common surprise: presenting the wrong story to the wrong people.

                ## Milestones
                1. Final attendee list and the actual time available confirmed.
                2. The executive's top concern this month captured in the champion's words.
                3. The champion's role in the meeting agreed, including who introduces you.
                4. A draft of the key slides seen by the champion before the meeting.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A champion call held at least three working days before the next executive meeting, with attendees, time and concerns recorded in the brief."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Book a thirty-minute call with your champion before the executive meeting"
                - "Ask who will attend and how long you will really have"
                - "Ask what the executive is most worried about this month"
                - "Agree who opens the meeting and what the champion will say"
                - "Send the champion the three key slides for comment"
            - name: Business case in the buyer's own numbers
              description: |-
                ## Purpose
                Executives discount vendor estimates and trust figures from their own teams. Building the business case from the buyer's baseline, their volumes, costs and error rates, supplied or confirmed by someone on their side, makes the value claim theirs rather than yours.

                ## Milestones
                1. Baseline figures gathered for the three or four costs or revenues your solution changes.
                2. Each figure tagged with the name of the buyer contact who supplied or confirmed it.
                3. Conservative, expected and optimistic cases calculated.
                4. The expected case agreed by the champion as defensible in front of finance.

                ## Notes
                Use the conservative case as your headline number. Executives remember the first figure they see, and a claim that later shrinks costs more credibility than a modest one that holds.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A business case where every baseline figure names the buyer contact who confirmed it, with three scenarios and the champion's agreement recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the three or four costs or revenues your solution changes for this buyer"
                - "Ask your champion who owns each baseline figure"
                - "Collect and confirm each figure with its owner"
                - "Calculate conservative, expected and optimistic cases"
                - "Review the expected case with the champion before it goes in the deck"
            - name: Three-slide executive summary
              description: |-
                ## Purpose
                Many executives read the first three slides and then decide whether to listen to the rest. A summary that states their situation, your recommendation with its value, and the decision you need, all within three slides, means the meeting still succeeds if it is cut short or the executive skips ahead.

                ## Milestones
                1. Slide one shows the buyer's situation and the cost of inaction in their language.
                2. Slide two shows the recommendation and its expected value, with one number.
                3. Slide three shows the decision needed, the timeline and the next step.
                4. The three slides tested on someone outside the deal who can repeat the story back.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three slides exist that a colleague unfamiliar with the deal can read in two minutes and summarise accurately."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the situation, recommendation and ask as three headlines"
                - "Put one supporting number under each headline"
                - "Move every other slide to an appendix"
                - "Ask a colleague outside the deal to read the slides and repeat the story"
            - name: Executive briefing slide shell for the team
              description: |-
                ## Purpose
                When every seller builds executive slides from scratch, quality depends on who has time that week. A shared shell with the answer-first structure, a rule that every title is a conclusion, a business case page and an ask page gives the team a fast start without turning each meeting into the same generic pitch.

                ## Milestones
                1. A slide shell with summary, situation, recommendation, value, plan and ask pages.
                2. Written guidance on each page saying what belongs there and what does not.
                3. Two real executive decks rebuilt in the shell as worked examples.
                4. The shell stored in the team's shared library and announced.

                ## Notes
                The shell holds structure, not content. Keep it separate from the core pitch deck so sellers start from the buyer, not the product.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared executive slide shell with guidance and two worked examples is in the team library and has been used in at least three executive meetings."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect three executive decks that led to a clear decision"
                - "Draft the shell with six fixed pages and guidance notes"
                - "Rebuild two past decks in the shell as worked examples"
                - "Publish the shell in the team library"
                - "Review the shell against the year's wins and losses @recurring(yearly)"
            - name: Hard questions list for the next meeting
              description: |-
                ## Purpose
                The question that derails an executive meeting is usually one the team could have predicted: why now, why you over the incumbent, what happens if it fails. Writing the ten hardest questions before the meeting, with a short answer and a proof point for each, takes the panic out of the room.

                ## Milestones
                1. Ten likely hard questions written, covering price, risk, timing, competitors and internal effort.
                2. A two-sentence answer for each, starting with the direct answer.
                3. A proof point or reference customer attached to the five toughest.
                4. The list rehearsed aloud with a colleague asking the questions.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten anticipated questions with two-sentence answers and proof points are written and have been rehearsed aloud before the meeting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft the twenty hardest questions this executive could ask"
                - "Cut the list to the ten most likely"
                - "Write a two-sentence answer to each, direct answer first"
                - "Rehearse the answers aloud with a colleague asking"
            - name: Minute-by-minute plan for a thirty-minute slot
              description: |-
                ## Purpose
                Thirty minutes in the calendar is often twenty-two in practice once people arrive late and leave early. Planning the slot minute by minute, with no more than ten minutes of you talking and at least half the time for discussion, stops the deck from eating the conversation that actually wins the decision.

                ## Milestones
                1. A timed agenda with opening, summary, discussion, decision and next steps.
                2. Presenting time capped at ten minutes.
                3. Points marked where you would cut if the slot shrinks to fifteen minutes.
                4. The timings tested in a full run-through with a timer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timed agenda for the next executive meeting caps presenting at ten minutes and was checked in a timed run-through."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the agenda with minutes against each section"
                - "Cap your own presenting time at ten minutes"
                - "Mark what you would drop if the slot is halved"
                - "Run the whole meeting once against a timer"
            - name: Upcoming executive meetings tracker
              description: |-
                ## Purpose
                Senior meetings get booked in passing and then prepared the night before. A simple tracker of every executive meeting across your deals, with the date, attendees, decision sought and preparation status, reviewed each Monday, gives each one the two weeks of preparation it deserves.

                ## Milestones
                1. A tracker listing every executive meeting in open deals with date, attendees and decision sought.
                2. Preparation status marked for brief, business case, deck and rehearsal.
                3. Meetings without a stated decision flagged for a champion call.
                4. Twelve weekly reviews completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker has been reviewed on twelve consecutive Mondays and every meeting within fourteen days of each review has a completed brief."
                cadence: rolling
              tasks:
                - "Create the tracker with columns for date, attendees, decision and preparation status"
                - "Add every executive meeting already booked in your deals"
                - "Review the tracker and start preparing meetings within fourteen days @recurring(weekly:mon)"
                - "Flag any meeting with no stated decision for a champion call"
            - name: Weekly rehearsal slot with a stand-in executive
              description: |-
                ## Purpose
                Most presentations are rehearsed silently on a screen, which tests the slides and not the speaker. A standing weekly slot where a colleague plays the CFO or chief executive, interrupts and asks hard questions builds the reflexes a real meeting needs, and makes rehearsal normal rather than a sign of nerves.

                ## Milestones
                1. A recurring forty-five-minute rehearsal slot agreed with one or two colleagues.
                2. A rotation where each person brings a real upcoming meeting.
                3. The stand-in briefed on the real executive's style and concerns.
                4. Eight rehearsals completed with one improvement noted from each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly rehearsals held with a stand-in executive, each leaving one written improvement applied to a real meeting."
                cadence: rolling
              tasks:
                - "Ask one or two colleagues to share a weekly rehearsal slot"
                - "Brief the stand-in on the real executive's style before each session"
                - "Rehearse an upcoming executive meeting with interruptions @recurring(weekly:thu)"
                - "Write down one change to make after each rehearsal"
            - name: Hard-question bank kept current
              description: |-
                ## Purpose
                Questions asked by one executive come back from the next one in the same industry or the same role. A shared bank of real questions, with the answers that worked and the ones that did not, updated monthly from live meetings, means no one on the team is surprised by the same question twice.

                ## Milestones
                1. A shared bank organised by theme: price, risk, competition, timing and internal effort.
                2. Every question tagged with the role of the person who asked it.
                3. Answers that worked marked and weak answers rewritten.
                4. Monthly additions from every seller who held an executive meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The bank holds at least forty real questions tagged by role and theme, with additions logged in each of the last three months."
                cadence: rolling
              tasks:
                - "Set up the bank with five theme headings"
                - "Add every hard question from your last three executive meetings"
                - "Collect new questions from the team and add them to the bank @recurring(monthly:12)"
                - "Rewrite the three weakest answers in the bank"
            - name: Proof point library with measured outcomes
              description: |-
                ## Purpose
                Buyers at the top trust what their peers achieved more than anything you claim. A library of customer outcomes with real figures, the customer's industry, size and executive role, and whether they will take a reference call, lets you put the right proof on the right slide in minutes instead of chasing colleagues the night before.

                ## Milestones
                1. Twenty customer outcomes recorded with a measured figure and the source of that figure.
                2. Each outcome tagged by industry, company size and executive role.
                3. Permission status noted: named, anonymous or reference call available.
                4. Outcomes older than two years reviewed or retired.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The library holds twenty outcomes with sourced figures and permission status, and was refreshed within the last quarter."
                cadence: rolling
              tasks:
                - "List every customer outcome you have quoted in the last year"
                - "Record the figure, its source and the permission status for each"
                - "Ask customer success for newly measured outcomes @recurring(monthly:19)"
                - "Retire or recheck outcomes older than two years @recurring(quarterly)"
            - name: Debrief within a day of every executive meeting
              description: |-
                ## Purpose
                Details fade fast: within a week nobody remembers which slide the CFO frowned at or exactly what the chief executive asked for. A fifteen-minute debrief within a day, noting what landed, what did not, the commitments made and the decision reached, feeds both the follow-up and the next presentation.

                ## Milestones
                1. A short debrief format: decision reached, commitments, reactions, questions and next step.
                2. Debriefs completed within one working day for every executive meeting.
                3. Commitments copied into the deal record with owners and dates.
                4. A monthly read of all debriefs to spot repeated reactions.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every executive meeting in the last two months has a debrief written within one working day, with commitments logged in the deal record."
                cadence: rolling
              tasks:
                - "Create a debrief page from the meeting notes template"
                - "Block fifteen minutes straight after the next executive meeting for the debrief"
                - "Copy every commitment into the deal record with an owner and date"
                - "Read the month's debriefs and note repeated reactions @recurring(monthly:24)"
            - name: Executive follow-up letter within one working day
              description: |-
                ## Purpose
                A short letter after the meeting, sent while the conversation is fresh, becomes the record the executive forwards to their team. Restating their priorities, the decision taken, the agreed next steps and who owns them, in under a page, keeps momentum and corrects misunderstandings before they harden.

                ## Milestones
                1. A follow-up letter format of under one page with priorities, decision, next steps and owners.
                2. Letters sent within one working day for every executive meeting.
                3. Each letter checked with the champion before or straight after sending.
                4. Replies or forwards from executives tracked as a signal of engagement.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Follow-up letters were sent within one working day for every executive meeting this quarter, each under one page with named owners."
                cadence: rolling
              tasks:
                - "Write a follow-up letter format with four short sections"
                - "Ask the agent to draft the follow-up letter from your debrief notes"
                - "Check the letter with your champion for anything misread"
                - "Check which letters were forwarded or answered last month @recurring(monthly:3)"
            - name: Earnings and news watch for target executives
              description: |-
                ## Purpose
                Executive priorities move with every earnings call, reorganisation and new chief executive, and a deck built on last year's strategy shows it. A quarterly sweep of results, announcements and leadership changes in your key accounts keeps the opening slide current and often hands you a reason to request the meeting.

                ## Milestones
                1. A list of the accounts and executives you are watching.
                2. News alerts set for each company and its key executives.
                3. A quarterly note per account on results, priorities and leadership changes.
                4. At least one executive meeting opened with a reference to the latest results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly note exists for each watched account covering results and leadership changes, written within two weeks of each earnings release."
                cadence: rolling
              tasks:
                - "List the accounts and executives you want to watch"
                - "Set news alerts for each company and its senior leaders"
                - "Write a one-paragraph note on each account's latest results @recurring(quarterly)"
                - "Read each watched account's new annual report when it is published @recurring(yearly)"
            - name: Recorded self-review of a live presentation
              description: |-
                ## Purpose
                Few sellers ever watch themselves present, so filler words, rushed numbers and slides read aloud go unnoticed for years. Recording one real or rehearsed presentation each month and scoring it against the same short checklist shows progress you can measure.

                ## Milestones
                1. A five-point checklist covering opening, pace, clarity of numbers, handling questions and the ask.
                2. One recording reviewed each month against the checklist.
                3. Recurring weaknesses logged as themes.
                4. Six monthly reviews completed, with scores improved on at least two points.

                ## Notes
                Start from the **Feedback themes** template. Always ask permission before recording a customer meeting, and follow both your company's and the customer's recording policy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly recordings scored on the same checklist, with recurring weaknesses logged and at least two scores improved."
                cadence: rolling
              tasks:
                - "Write a five-point presentation checklist"
                - "Record your next rehearsal on your laptop"
                - "Score a recording against the checklist and log the weakest point @recurring(monthly:8)"
                - "Add recurring weaknesses to a feedback themes page"
            - name: Quarterly review of which executive meetings moved deals
              description: |-
                ## Purpose
                An executive meeting can feel like it went well and still change nothing in the deal. Looking back each quarter at every executive meeting, what was asked for, what was decided and what happened to the deal in the next thirty days, shows which kinds of presentation actually advance revenue.

                ## Milestones
                1. Every executive meeting from the quarter listed with the decision sought and the decision reached.
                2. Deal movement in the thirty days after each meeting recorded.
                3. Two patterns written down: what the effective meetings had in common, and what the others lacked.
                4. One change to the team's preparation agreed from the findings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A quarterly review lists every executive meeting with decision sought, decision reached and deal movement, and names one change adopted."
                cadence: cyclic
              tasks:
                - "Pull every executive meeting from the quarter out of the CRM"
                - "Record the decision sought, the decision reached and the deal's next stage"
                - "Run the quarterly review and agree one preparation change @recurring(quarterly)"
                - "Share the findings with the team in a short note"
            - name: Answer-first storytelling for executives
              description: |-
                ## Purpose
                Sellers are trained to build up to the point, while executives want the point first and the support only if they ask. Learning the answer-first structure, where the recommendation leads and each section supports it, makes decks shorter and lets the executive steer into the detail they care about.

                ## Milestones
                1. The answer-first structure studied from one good book or course.
                2. A past deck rewritten so every slide title states a conclusion.
                3. A two-minute spoken version of the recommendation practised.
                4. The rewritten deck reviewed by a manager against the original.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A past deck rewritten answer-first, with every slide title a full-sentence conclusion, reviewed against the original by a manager."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one book or course on answer-first business writing"
                - "Rewrite every slide title in a past deck as a conclusion"
                - "Practise the recommendation aloud in under two minutes"
                - "Ask your manager to compare the old and new versions"
            - name: Reading an annual report in an hour
              description: |-
                ## Purpose
                Annual reports hold the strategy, the risks and the numbers an executive is judged on, yet most sellers never open one. Practising a fixed one-hour method (chair's letter, strategy section, segment results, principal risks, then the cash flow statement) turns a long document into three sharp talking points.

                ## Milestones
                1. A one-hour reading method written down in five steps.
                2. Three annual reports from target accounts read with the method.
                3. Three talking points recorded per report.
                4. One talking point used in a real executive conversation.

                ## Notes
                Start from the **Reading queue** template. Public company reports are easiest to find; for private companies, look for filed accounts or published strategy statements.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three annual reports read with the one-hour method, each yielding three written talking points, with one used in a live conversation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the five-step one-hour reading method"
                - "Queue the annual reports of your top three accounts"
                - "Read one annual report from your queue with the method @recurring(monthly:15)"
                - "Use one talking point in your next executive conversation"
            - name: Finance language for talking to a CFO
              description: |-
                ## Purpose
                Finance leaders judge a proposal on payback period, cash flow timing, total cost of ownership and whether it is capital or operating spend. Learning these terms well enough to answer follow-up questions without calling a colleague changes how a CFO treats you in the room.

                ## Milestones
                1. Payback, net present value, internal rate of return, total cost of ownership and capital versus operating spend explained in your own words.
                2. Your current business case checked for which of these measures it shows.
                3. A practice conversation held with someone from your own finance team.
                4. A one-page glossary saved for the team.

                ## Notes
                Your finance team or a friendly accountant is the best tutor. This is about speaking the language, not about giving the buyer accounting or tax advice.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain five finance measures to a finance colleague, who signs off a one-page glossary saved in the team library."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Book thirty minutes with someone in your finance team"
                - "Write a one-line definition of each of the five finance terms"
                - "Show your business case and ask which measures a CFO would expect"
                - "Save the glossary in the team library"
            - name: Building an auditable ROI model
              description: |-
                ## Purpose
                A return on investment figure in a deck is only as strong as the spreadsheet behind it, and finance teams will open that spreadsheet. A simple model with inputs on one tab, every assumption labelled with its source, and outputs that recalculate when the buyer changes a number survives scrutiny that a slide cannot.

                ## Milestones
                1. A model with separate input, calculation and output tabs.
                2. Every assumption labelled with its source and owner.
                3. A sensitivity table showing the result if the two biggest assumptions are halved.
                4. The model handed to a finance colleague who could follow it without help.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An ROI model with labelled assumptions and a sensitivity table is followed end to end by a finance colleague without explanation."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Split your current ROI calculation into input, calculation and output tabs"
                - "Label each assumption with its source"
                - "Add a sensitivity table for the two biggest assumptions"
                - "Ask a finance colleague to follow the model without help"
            - name: Handling sceptical and hostile questions
              description: |-
                ## Purpose
                Senior people test sellers with blunt questions to see whether they bluff. Practising a short pattern (acknowledge, answer directly, give evidence, check) and being comfortable saying you will confirm by a set day keeps you credible when the CFO says the numbers look invented.

                ## Milestones
                1. A four-step answering pattern written down and memorised.
                2. Ten hostile questions from the bank practised aloud with a colleague.
                3. Three honest ways to say you do not know, each with a committed follow-up date.
                4. One real hostile question handled and written up in a debrief.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten hostile questions practised aloud using the four-step pattern, and one real hostile question handled and written up in a debrief."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the four-step answering pattern on a card"
                - "Pick ten hostile questions from the hard-question bank"
                - "Practise answering them aloud while a colleague pushes back"
                - "Write three honest ways to say you will confirm by a set day"
            - name: Executive presence in voice, pace and silence
              description: |-
                ## Purpose
                Speed and filler words read as nerves, and a seller who fills every pause loses the room's attention. Slower delivery, a pause after the key number and letting a question sit before answering are learnable habits that make the same content sound more certain.

                ## Milestones
                1. A baseline recording measured for speaking pace and filler words.
                2. Weekly two-minute practice recordings kept up for six weeks.
                3. Pauses placed deliberately after each key number in your next deck.
                4. A second recording showing fewer fillers than the baseline.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Six weeks of practice recordings, with a final recording that has fewer filler words per minute than the baseline."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record a two-minute explanation of your offer and count the filler words"
                - "Mark the pauses after each key number in your next deck"
                - "Record and replay a two-minute practice answer @recurring(weekly:tue)"
                - "Compare a new recording with the baseline after six weeks"
            - name: One chart, one message for senior audiences
              description: |-
                ## Purpose
                Dense charts lose executives, who either ignore them or spend the meeting asking what the axis means. Learning to strip a chart to the one comparison that matters, with the conclusion as its title and the key value highlighted, makes your numbers land in seconds.

                ## Milestones
                1. Three rules for executive charts written down.
                2. Five charts from current decks redrawn with conclusion titles.
                3. Every chart in your next executive deck reduced to one message.
                4. A colleague able to state each chart's point in under ten seconds.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five redrawn charts with conclusion titles, each understood by a colleague in under ten seconds."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write three rules for charts shown to executives"
                - "Pick five charts from current decks to redraw"
                - "Redraw each with a conclusion title and one highlighted value"
                - "Test each chart on a colleague with a ten-second limit"
            - name: Presenting to executives over video
              description: |-
                ## Purpose
                Many executive meetings now happen on a screen, where you cannot read the room and a frozen screen share kills momentum. Setting up camera height, lighting, sound and a backup way to show the slides, and learning to call on people by name, keeps a remote presentation as sharp as one in person.

                ## Milestones
                1. Camera at eye level, lit from the front, with a headset or a good microphone.
                2. A backup plan if screen sharing fails, such as slides sent in advance.
                3. A habit of naming people when asking for reactions.
                4. A full remote rehearsal recorded and reviewed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recorded remote rehearsal shows an eye-level camera, clear audio and a working backup for screen sharing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Raise your camera to eye level and check the lighting"
                - "Test your microphone on a short recording"
                - "Send a backup copy of the slides to the champion before each remote meeting"
                - "Run and record a full remote rehearsal"
            - name: Tailoring the message by executive role
              description: |-
                ## Purpose
                Chief executives, finance directors, technology leaders and operations heads hear the same proposal through different worries: growth, cash, risk and disruption. Learning what each role is measured on, and preparing one paragraph of the story for each, lets you shift emphasis when the room is not who you expected.

                ## Milestones
                1. The typical measures and worries of five executive roles written down.
                2. One paragraph of your recommendation written for each role.
                3. The paragraph for each attendee checked with your champion before the meeting.
                4. One meeting where you changed emphasis for an unexpected attendee debriefed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A role-by-role page with measures and a tailored paragraph for five executive roles, used in at least two real meetings."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the five executive roles you most often present to"
                - "Write what each role is measured on and worries about"
                - "Write one paragraph of your recommendation for each role"
                - "Check the paragraphs with a champion before the next meeting"
            - name: Cutting the executive deck to eight slides
              description: |-
                ## Purpose
                Decks grow as every colleague adds a slide, and executives notice when a presenter skips half of them. Cutting the main deck to eight slides and moving the rest to an appendix you can jump to forces the choice of what matters and leaves time for discussion.

                ## Milestones
                1. Every slide in the current deck listed with the one question it answers.
                2. Slides that answer no question for this audience removed.
                3. Eight main slides left, with the rest in a labelled appendix.
                4. A way to jump straight to any appendix slide tested.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The main executive deck has eight slides or fewer, with an indexed appendix you can jump to in one click."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each slide and the question it answers for this executive"
                - "Delete slides that answer nothing this audience asked"
                - "Move supporting slides into a labelled appendix"
                - "Add links so you can jump to any appendix slide"
            - name: Choosing who attends from your side
              description: |-
                ## Purpose
                Bringing five people to meet two executives looks like a sales assault, while arriving alone to a board-level meeting can look junior. Deciding deliberately who attends, matching seniority, giving each person a clear role and keeping the group small shapes how seriously the buyer takes you.

                ## Milestones
                1. Attendees from the buyer's side confirmed with roles and seniority.
                2. Your side limited to the people with a stated role in the meeting.
                3. A senior leader from your company paired with the most senior buyer where useful.
                4. Each person's speaking part and time written into the agenda.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your attendee list for the next executive meeting is no larger than the buyer's, with each person's role and speaking time in the agenda."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List who will attend from the buyer's side and their seniority"
                - "Decide who from your side has a real role"
                - "Ask whether a senior leader should join to match the top buyer"
                - "Write each attendee's role and timing into the agenda"
            - name: Briefing your own executive before a joint meeting
              description: |-
                ## Purpose
                Your vice president or chief executive can open doors in a buyer meeting, or derail it by pitching the wrong thing or offering a discount. A one-page brief and a fifteen-minute call beforehand, covering the buyer's priorities, what to say, what not to promise and the ask, turn a senior colleague into a reliable asset.

                ## Milestones
                1. A one-page sponsor brief with buyer context, objectives, talking points and red lines.
                2. A fifteen-minute preparation call held at least a day before.
                3. Agreement on who makes the ask and who handles pricing questions.
                4. A short debrief with your executive after the meeting.

                ## Notes
                Agree red lines on price and commitments explicitly. Senior people under pressure in the room are the most likely to offer something you cannot deliver.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your executive received a one-page brief and a preparation call before the joint meeting, with red lines on pricing agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a one-page brief for your executive with red lines on price"
                - "Book a fifteen-minute preparation call the day before the meeting"
                - "Agree who makes the ask and who answers pricing questions"
                - "Debrief with your executive within a day of the meeting"
            - name: Deciding whether to show price in the room
              description: |-
                ## Purpose
                Price shown too early becomes the whole conversation, and price withheld from a CFO who asked for it looks evasive. Deciding before each executive meeting whether to show a figure, a range, or the investment set against the value, and preparing the slide for that choice, avoids improvising the most sensitive moment.

                ## Milestones
                1. What the executive already knows about price confirmed with the champion.
                2. A decision recorded: no price, a range, or a full investment slide.
                3. An investment slide prepared that sets cost beside the business case value.
                4. A rehearsed answer for when price is asked and you have chosen not to show it.

                ## Notes
                Agree any figure you show with whoever approves pricing at your company first, so the room never hears a number your deal desk will not support.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "For the next executive meeting a written decision on showing price exists, with an investment slide prepared and any figure approved internally."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your champion what the executive already knows about price"
                - "Decide between no price, a range or a full investment slide"
                - "Build an investment slide that shows cost next to value"
                - "Rehearse your answer if price comes up and is not on screen"
            - name: Written pre-read memo before the meeting
              description: |-
                ## Purpose
                Some executive teams prefer to read before they meet, and a two-page memo sent two days ahead lets the meeting start at the discussion rather than the introduction. Writing the business case as prose also exposes gaps that bullet points hide.

                ## Milestones
                1. Whether the executive team prefers a pre-read confirmed with the champion.
                2. A memo of two pages or fewer covering situation, recommendation, value, risks and the decision.
                3. The memo reviewed by the champion before sending.
                4. The meeting opened by asking for reactions to the memo instead of presenting it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page memo sent at least two days before an executive meeting, with the meeting opened by discussion rather than slides."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your champion whether the executives read papers before meetings"
                - "Write the business case as a memo of two pages or fewer"
                - "Ask the champion to review the memo before it is sent"
                - "Open the meeting by asking for reactions to the memo"
            - name: One-page leave-behind for executives
              description: |-
                ## Purpose
                After the meeting your deck gets forwarded without you there to explain it, often to people who were never in the room. A one-page leave-behind that stands alone, with the problem, the recommendation, the value, the plan and a contact, travels further and better than forty slides.

                ## Milestones
                1. A one-page layout with problem, recommendation, value, plan and contact.
                2. Language checked so someone outside the meeting understands it.
                3. The page tailored for the buyer and sent with the follow-up letter.
                4. A blank version saved as a reusable starting point for the team.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page leave-behind sent with the follow-up letter that a person outside the meeting can understand without the deck."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the five sections of the leave-behind on one page"
                - "Fill it in for your next executive meeting"
                - "Ask someone outside the deal whether it stands alone"
                - "Save a blank version for the team"
            - name: Whiteboard session instead of slides
              description: |-
                ## Purpose
                Some of the best executive meetings use no slides at all: the seller draws the buyer's current process, the cost points and the proposed change while the executive corrects the picture. Learning to tell your story in four or five drawings makes the meeting a working session the executive owns.

                ## Milestones
                1. A whiteboard story of four or five drawings practised until it takes under ten minutes.
                2. The story drawn for a colleague who interrupts and corrects it.
                3. A rule written for when to use the whiteboard instead of slides.
                4. One real executive meeting run from the whiteboard and debriefed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A whiteboard story under ten minutes is practised with a colleague and used in at least one real executive meeting."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the buyer's current process and its cost points on paper"
                - "Practise drawing the story in under ten minutes"
                - "Draw it for a colleague who interrupts and corrects you"
                - "Write down when you would choose the whiteboard over slides"
            - name: Final-round shortlist presentation
              description: |-
                ## Purpose
                Being shortlisted against two competitors means the executive panel will compare presentations side by side, often on the same day. A presentation that answers their evaluation criteria in order, names the decision, sets out why you over the alternatives without attacking them, and is rehearsed twice in full gives you the best chance of being the one remembered.

                ## Milestones
                1. The panel's evaluation criteria and scoring obtained or confirmed with the champion.
                2. A deck structured in the order of the criteria, with the recommendation first.
                3. Two full rehearsals held with stand-ins for each panel member.
                4. Answers prepared for the questions competitors are likely to have planted.
                5. A follow-up letter sent the same day.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The shortlist presentation was delivered against the panel's criteria after two full rehearsals, with a follow-up letter sent the same day."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask your champion for the panel's evaluation criteria and who scores"
                - "Order the deck to match the evaluation criteria"
                - "Hold two full rehearsals with stand-ins for each panel member"
                - "Prepare answers to the questions each competitor is likely to have planted"
                - "Send the follow-up letter on the day of the presentation"
            - name: Budget approval meeting with the economic buyer
              description: |-
                ## Purpose
                The meeting where the person who controls the budget decides whether to fund your proposal is the one most deals hinge on and the one least often rehearsed. Preparing it around their budget cycle, the cost of doing nothing, a business case agreed with their team and a clear funding ask makes approval a decision rather than a favour.

                ## Milestones
                1. The economic buyer's budget cycle and approval threshold confirmed.
                2. The business case and cost of inaction agreed with their team before the meeting.
                3. A funding ask stated as an amount, a budget line and a date.
                4. The decision and any conditions recorded in the follow-up letter.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The economic buyer gave a recorded funding decision, with any conditions, in a meeting prepared around their budget cycle."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask your champion when budgets are set and what needs which approval"
                - "Agree the cost of inaction figure with the buyer's team"
                - "Write the funding ask as an amount, a budget line and a date"
                - "Record the decision and its conditions in the follow-up letter"
            - name: Equipping your champion to present internally
              description: |-
                ## Purpose
                Many final decisions are made in meetings you will never attend, with your champion presenting to a board or investment committee. Giving them a short deck in their company's format, a speaking script, the likely objections with answers and a rehearsal with you means your case is argued well when you are not in the room.

                ## Milestones
                1. The internal forum, its format and its date confirmed with the champion.
                2. A short deck rebuilt in the buyer's own template and language.
                3. A speaking script and an objections sheet handed over.
                4. One rehearsal held with the champion presenting to you.
                5. The outcome of the internal meeting heard from the champion within a day.

                ## Notes
                Strip your branding and sales language from the internal deck. It should read as the champion's recommendation, not your pitch.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your champion received an internal-format deck, script and objections sheet and rehearsed with you before presenting to their committee."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your champion which internal meeting will decide and in what format"
                - "Rebuild the core slides in the buyer's own template"
                - "Write a speaking script and an objections sheet for the champion"
                - "Rehearse with the champion presenting to you"
                - "Call the champion the day after the internal meeting"
            - name: Renewal-year value presentation to customer leadership
              description: |-
                ## Purpose
                Customers renew when their leaders can see what they got for the money, and those leaders have often changed since the original sale. A presentation in the renewal year that compares the value promised with the value delivered, in figures the customer's own team confirms, protects the renewal and opens the next conversation.

                ## Milestones
                1. The original business case retrieved and compared with measured results.
                2. Results confirmed with the customer's operational owners.
                3. Any shortfall explained honestly, with a plan to close it.
                4. The presentation delivered to current leadership at least three months before renewal.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A value presentation comparing promised and delivered results was given to customer leadership at least three months before the renewal date."
                cadence: cyclic
              tasks:
                - "Find the original business case presented to this customer"
                - "Gather measured results and confirm them with the customer's team"
                - "Write an honest explanation and plan for any shortfall"
                - "Book the value presentation three months before each renewal @recurring(yearly)"
            - name: Hosting buyer executives at your offices
              description: |-
                ## Purpose
                Visits to your offices or briefing centre are a rare block of executive time, and they are often wasted on a tour and a parade of your own leaders. Designing the day around the buyer's questions, with a customer guest, a working session on their plan and one senior host, makes the visit a real step towards the decision.

                ## Milestones
                1. The buyer's objectives for the visit agreed in writing beforehand.
                2. An agenda where at least half the time is discussion or a working session.
                3. A customer guest or a live reference call arranged.
                4. Every speaker briefed on the buyer and the decision being sought.
                5. A written summary sent within one working day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A hosted visit ran to an agenda agreed with the buyer, with half the time in discussion and a written summary sent within one day."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the buyer what they want to leave the visit knowing"
                - "Draft an agenda with half the time for discussion"
                - "Arrange a customer guest or a live reference call"
                - "Brief every speaker on the buyer and the decision sought"
                - "Send the visit summary within one working day"
            - name: Pilot results readout to the steering committee
              description: |-
                ## Purpose
                At the end of a pilot or proof of concept, the steering committee decides whether to buy, and they judge on the success criteria agreed at the start. A readout that reports each criterion plainly, misses included, with someone from the buyer's own team presenting part of the results, turns evidence into a purchase decision.

                ## Milestones
                1. The pilot's original success criteria retrieved.
                2. Results for each criterion measured and confirmed by the buyer's team.
                3. A member of the buyer's team agreed to present part of the results.
                4. A recommendation made and a purchase decision requested at the end of the readout.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A readout reported every agreed pilot criterion with buyer-confirmed results and ended with a recorded purchase decision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Retrieve the success criteria agreed at the start of the pilot"
                - "Measure each result and confirm it with the buyer's team"
                - "Ask a buyer team member to present part of the results"
                - "End the readout by asking for the purchase decision"
            - name: First executive presentation as a new account executive
              description: |-
                ## Purpose
                First meetings with a vice president or chief executive are where new sellers most often over-prepare slides and under-prepare answers. Planning it with your manager, rehearsing twice, keeping the deck to five slides and agreeing in advance when your manager will step in gives a new seller a strong first outing instead of a nervous one.

                ## Milestones
                1. The meeting plan reviewed with your manager a week before.
                2. A deck of five slides or fewer.
                3. Two rehearsals, one with your manager playing the executive.
                4. A signal agreed for when your manager will step in.
                5. A debrief with your manager on the same day.

                ## Notes
                Ask your manager to say less, not more. The executive should leave seeing you as the owner of the account.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Your first executive presentation was rehearsed twice, ran on five slides or fewer and was debriefed with your manager the same day."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your manager to review your meeting plan a week before"
                - "Cut your first executive deck to five slides or fewer"
                - "Rehearse twice, once with your manager as the executive"
                - "Agree a signal for when your manager should step in"
                - "Debrief with your manager on the same day"
            - name: Founder presenting to a corporate leadership team
              description: |-
                ## Purpose
                Founders of small companies selling to large ones face a credibility question before any product question: will you still be here, and can you deliver at our scale? A presentation that answers that directly, with funding or financial stability, named references, a delivery plan and who backs you, lets the conversation move on to the value.

                ## Milestones
                1. A slide or prepared answer on company stability, funding and who backs you.
                2. Two references from customers of meaningful size.
                3. A delivery and support plan sized for the buyer's scale.
                4. A clear answer on what happens to the customer if your company is acquired or closes.
                5. The presentation rehearsed with an advisor or investor playing the buyer.

                ## Notes
                Corporate buyers often ask for financial statements or escrow arrangements. Decide with your accountant or lawyer what you are willing to share before the meeting, not during it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A presentation addressing stability, references, delivery capacity and continuity was rehearsed with an advisor before the corporate meeting."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write your honest answer to whether you will be around in three years"
                - "Ask two customers of meaningful size to act as references"
                - "Draft a delivery and support plan sized for this buyer"
                - "Rehearse with an advisor or investor playing the corporate buyer"
            - name: Presenting to a global buying committee
              description: |-
                ## Purpose
                Enterprise deals often end with a committee spread across regions, time zones and languages, where each regional leader worries about their own rollout. Sending materials in advance, scheduling at a time fair to every region, giving each region a page on its rollout and pacing for people listening in a second language keeps the whole committee with you.

                ## Milestones
                1. Committee members listed with region, language and main concern.
                2. A meeting time chosen that is reasonable for every region, or the session split in two.
                3. A slide or appendix page for each region's rollout.
                4. Materials sent at least two working days ahead.
                5. Regional follow-ups assigned to local colleagues.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The global committee presentation included a page for each region, materials sent two days ahead, and a named local follow-up owner per region."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every committee member with region, language and main concern"
                - "Pick a meeting time fair to every region or split the session"
                - "Add a rollout page for each region"
                - "Send materials two working days ahead"
                - "Assign a local colleague to follow up in each region"
            - name: Presenting as a duo with your solutions consultant
              description: |-
                ## Purpose
                Two presenters who have not agreed who says what will talk over each other and contradict each other in front of the executive. Agreeing the split, the handovers, who answers technical and commercial questions and a signal for cutting the demo short makes a seller and a solutions consultant look like one team.

                ## Milestones
                1. A run sheet with each section's owner and the handover lines.
                2. Questions split: commercial to the seller, technical to the consultant.
                3. A signal agreed for shortening or skipping the demo.
                4. One joint rehearsal completed before the meeting.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A run sheet with owners, handovers and a demo-cut signal was rehearsed jointly once before the executive meeting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a run sheet naming the owner of each section"
                - "Agree who answers commercial and who answers technical questions"
                - "Agree a signal for shortening the demo"
                - "Hold one joint rehearsal before the meeting"
            - name: Ten-minute fallback version of the presentation
              description: |-
                ## Purpose
                Executives regularly arrive late, get pulled out or announce that they only have ten minutes. A rehearsed ten-minute version, the three-slide summary and the ask with nothing else, means a shortened meeting still ends with a decision instead of a reschedule.

                ## Milestones
                1. A ten-minute version built from the three-slide summary and the ask.
                2. The version rehearsed against a timer.
                3. A line ready to offer the full discussion at a later date.
                4. The fallback used or tested in a real meeting.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-minute version is rehearsed against a timer and ends with the same decision ask as the full presentation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the three slides and the ask that make the ten-minute version"
                - "Rehearse the short version against a ten-minute timer"
                - "Write the line you will use to offer a longer follow-up"
                - "Note in the debrief whether the fallback was needed"
            - name: Delivering difficult news to a customer executive
              description: |-
                ## Purpose
                Delays, price increases, failed deliveries and contract changes all have to be told to an executive at some point, and bad news delivered late or by email does the most damage. A short, direct presentation that states the news first, explains the cause without excuses, sets out options and commits to dates protects the relationship far better than softening it.

                ## Milestones
                1. The news written in two sentences with no softening.
                2. The cause and your company's share of it stated plainly.
                3. Two or three options with their consequences for the customer.
                4. The message agreed with your own leadership before the meeting.
                5. Commitments from the meeting confirmed in writing within a day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The difficult news was presented live, with options and dated commitments confirmed in writing within one working day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the news in two plain sentences"
                - "Agree the message and the options with your own leadership"
                - "Book a live meeting rather than sending the news by email"
                - "Confirm commitments in writing within one working day"
            - name: Co-building the business case with buyer finance
              description: |-
                ## Purpose
                In large deals the buyer's finance team will rebuild your business case anyway, so experienced sellers build it with them. Working sessions with a finance analyst on their side, using their cost of capital, their approval template and their assumptions, produce a case that arrives at the investment committee already trusted.

                ## Milestones
                1. A finance contact on the buyer's side named and engaged.
                2. The buyer's approval template, hurdle rate and standard assumptions obtained.
                3. Two working sessions held to build the case together.
                4. The final case signed off by the buyer's finance contact before the executive meeting.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A business case built in the buyer's template with their finance contact, signed off by them before the executive decision meeting."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your champion to introduce you to a finance analyst on their side"
                - "Request their approval template and the assumptions they use"
                - "Hold two working sessions to build the case together"
                - "Check progress on the joint case with the finance contact @recurring(monthly:10)"
                - "Get written sign-off from the finance contact before the meeting"
            - name: Presented versus realised value audit
              description: |-
                ## Purpose
                Sellers who check whether the value they presented actually arrived become the ones executives believe next time. Auditing closed deals each quarter, comparing business case figures with measured outcomes, shows which assumptions you routinely overstate and makes your next case more accurate.

                ## Milestones
                1. Closed deals from the past two years that had a presented business case listed.
                2. Presented and realised figures recorded side by side.
                3. The three assumptions most often overstated identified.
                4. Business case guidance updated from the findings.

                ## Notes
                Start from the **Metrics log** template. Keep presented and realised figures in adjacent columns so the gap is visible at a glance.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Presented and realised value recorded for at least ten closed deals, with the three most overstated assumptions written into business case guidance."
                cadence: rolling
              tasks:
                - "List closed deals from the past two years that had a business case"
                - "Ask customer success for measured outcomes on each deal"
                - "Add new outcomes and compare them with what was presented @recurring(quarterly)"
                - "Write the three most overstated assumptions into the business case guidance"
            - name: Executive presentation certification for the team
              description: |-
                ## Purpose
                Sales leaders who want every seller ready for senior meetings need a standard, not hope. A certification where each seller presents a real case to a panel playing executives, scored on one rubric, with coaching until they pass, raises the floor across the team and shows managers who is ready for which accounts.

                ## Milestones
                1. A scoring rubric covering structure, business case, delivery, question handling and the ask.
                2. A panel of managers and senior sellers briefed to play executive roles.
                3. Every seller assessed once, with written feedback.
                4. Coaching plans for those below the bar, each with a reassessment date.
                5. The certification rerun each year.

                ## Notes
                Start from the **Development plan** template for each seller who needs coaching before reassessment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every seller on the team has been assessed against the rubric, with coaching plans and reassessment dates for anyone below the bar."
                cadence: cyclic
              tasks:
                - "Draft a five-part scoring rubric"
                - "Recruit and brief a panel to play executive roles"
                - "Schedule each seller's certification session"
                - "Check coaching progress for sellers below the bar @recurring(monthly:27)"
                - "Rerun the certification for the whole team @recurring(yearly)"
            - name: Chief executive vision presentation for a multi-year partnership
              description: |-
                ## Purpose
                The largest deals are sold as a shift in the buyer's strategy, not a purchase, and they are decided by the chief executive with the board in mind. A vision presentation that links your proposal to the company's stated strategy, shows a three-year picture with milestones and risks, and asks for a sponsor at their level is senior selling at its most demanding.

                ## Milestones
                1. The buyer's published strategy and board priorities summarised in their language.
                2. A three-year picture with yearly milestones, investment and value.
                3. The main risks set out with how both sides would manage them.
                4. The presentation reviewed by your own chief executive or a senior advisor.
                5. A named executive sponsor on the buyer's side requested in the meeting.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A three-year vision presentation was delivered to the buyer's chief executive and ended with a named executive sponsor agreed or a recorded reason why not."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Summarise the buyer's published strategy and board priorities on one page"
                - "Draft a three-year picture with milestones, investment and value"
                - "Write the main risks and how each side would manage them"
                - "Ask your own chief executive or a senior advisor to review it"
                - "Ask for a named executive sponsor at the end of the meeting"
---

# Executive Sales Presentations

This area is for sellers and founders who get thirty minutes with a chief executive, finance director or board and need that time to end in a decision. It starts with the foundations of any executive meeting (the research, the ask, the business case and the short deck), moves through the weekly routines and the presentation skills senior audiences reward, then covers the big moments such as final-round presentations and budget approvals, situations for new sellers, founders and global enterprise deals, and the specialist work of co-building cases with finance and auditing value after the sale.

What repeats is a Monday look at upcoming executive meetings and a Thursday rehearsal slot, monthly updates to the hard-question bank, the proof library and a recorded self-review, and quarterly checks on earnings news and on which meetings actually moved deals. The Meeting notes, Feedback themes, Reading queue, Metrics log and Development plan templates pair with the debrief, self-review, annual report practice, value audit and team certification projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
