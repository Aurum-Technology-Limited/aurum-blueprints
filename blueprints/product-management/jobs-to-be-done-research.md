---
id: product-management.jobs-to-be-done-research
name: Jobs-to-Be-Done Research
description: "Switch interviews, job statements, job maps and outcome surveys that show what progress customers are trying to make, what they hire instead of you and what makes them switch."
category: business
version: 1.0.0
tags: [product-management, jobs-to-be-done-research, team, founder, researcher, switch-interviews, outcome-driven-innovation, four-forces]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - meeting-notes
    - feedback-themes
    - product-spec
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Jobs-to-Be-Done Research
          description: "Using the jobs-to-be-done lens to learn what progress customers are trying to make, what they hire products for and what makes them switch."
          projects:
            - name: Choosing your jobs-to-be-done method
              description: |-
                ## Purpose
                Jobs-to-be-done is really two traditions sharing a name: the switch interview school associated with Christensen and Moesta, which studies the moments people change solutions, and Ulwick's outcome-driven innovation, which measures dozens of desired outcomes by survey. Mixing them without deciding produces interview guides that ask for both and deliver neither. Picking a primary method for the next six months, tied to the decision you face, keeps every later project consistent.

                ## Milestones
                1. A one-page comparison of the switch interview and outcome-driven approaches, with what each needs and what each produces.
                2. The product decision for the next six months written in one sentence.
                3. A primary method chosen, with the reason recorded beside that decision.
                4. A shared glossary defining job, outcome, force, hire and fire for the team.

                ## Notes
                Start from the **Reading queue** template for the primers from each school. Switch interviews suit questions about why people buy, upgrade or leave; outcome surveys suit questions about which unmet needs to build for. Many teams start with interviews and add a survey once the job is clear.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written method choice, linked to a named product decision, is shared with the product trio along with a one-page glossary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the product decision this research must help you make"
                - "Read one primer from each school and note what each produces"
                - "Pick the primary method and write two sentences on why"
                - "Share the method choice and glossary with the product trio"
            - name: First core functional job statement
              description: |-
                ## Purpose
                Good job statements name the progress a customer wants, not your product: a verb, an object and a context, as in 'get a supplier invoice approved before the payment run'. Teams that skip this keep describing jobs as features, such as 'use the dashboard', which ties all later research to today's solution. Drafting a first core job now, and labelling it a hypothesis, gives the interviews something definite to confirm or break.

                ## Milestones
                1. A draft core job statement in verb, object and context form, free of product and technology words.
                2. Two or three alternative phrasings kept as candidates.
                3. Each candidate checked against the stability test: would it have been true twenty years ago and still be true in twenty years.
                4. One statement logged as hypothesis one, with the interviews that will test it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One core job statement in verb, object and context form, containing no product or technology words, is logged as a hypothesis in the repository."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three versions of the core job, each starting with a verb"
                - "Strike out any word that names your product, a feature or a technology"
                - "Test each version against the twenty-year stability check"
                - "Log the strongest draft as hypothesis one in the repository"
            - name: Job performer, buyer and supporting roles
              description: |-
                ## Purpose
                In many purchases the person getting the job done is not the one choosing or paying: a nurse uses the device that procurement buys, a teenager uses the app a parent pays for. Naming the job performer, the purchase decision maker, whoever installs or sets up the product and whoever supports it keeps each interview aimed at the right person for the right question.

                ## Milestones
                1. Every role from first search to daily use named, with a real customer as an example.
                2. The job performer identified as the primary interview target.
                3. The buyer's own financial or purchase job written in one line.
                4. An interview quota per role agreed for the first study.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page roles sheet names the job performer, buyer and supporting roles with a real example each and an interview quota per role."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everyone involved from first search to daily use for one recent customer"
                - "Mark who performs the core job and who signs off the spend"
                - "Write the buyer's own job in one line"
                - "Set how many interviews each role gets in the first batch"
            - name: Research brief for the first job study
              description: |-
                ## Purpose
                Research without a decision attached becomes a pile of fascinating transcripts nobody acts on. A one-page brief that states the decision, the research questions, who you will talk to, the method and the result that would change the plan tells stakeholders what they are getting and when, and gives you permission to say no to scope creep.

                ## Milestones
                1. A one-page brief with decision, research questions, participants, method and timeline.
                2. At least one finding named in advance that would change the roadmap if it appeared.
                3. The brief reviewed by the product lead and one designer or engineer.
                4. A readout date fixed in the team calendar.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page research brief naming the decision, three questions and a readout date has been reviewed by the product lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the brief's decision line and three research questions"
                - "Name the result that would make the team change course"
                - "Ask the product lead and a designer to comment on the brief"
                - "Put the readout date in the team calendar"
            - name: Recruiting recent switchers for interviews
              description: |-
                ## Purpose
                Switch interviews work only while the purchase is fresh, usually within about 90 days, because memories of the first thought, the comparisons and the late-night doubts fade fast. A screener that finds people who recently bought, upgraded, moved from a competitor or cancelled turns your sign-up and billing records into a steady interview list.

                ## Milestones
                1. A screener that confirms the switch happened in the last 90 days and who made the call.
                2. Recruiting sources listed: new sign-ups, upgrades, cancellations and people who moved from a competitor.
                3. A pool of at least 20 qualified people who have agreed to be contacted.
                4. An incentive amount and payment method agreed with finance.

                ## Notes
                Ask for people who chose you and people who looked at you and chose something else. The second group is harder to find and usually more instructive.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working screener and a pool of at least 20 people who switched in the last 90 days, each with recorded contact consent."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull a list of accounts that signed up, upgraded or cancelled in the last 90 days"
                - "Write five screener questions that confirm a real, recent switch"
                - "Send the screener to the first 60 people on the list"
                - "Refresh the switcher list from the latest sign-ups and cancellations @recurring(monthly:4)"
            - name: Interview consent, recording and incentive set-up
              description: |-
                ## Purpose
                Interview recordings hold names, employers, prices paid and sometimes complaints about colleagues, so they need a consent form, a storage rule and a deletion date before the first call. Settling this once with whoever handles privacy in your organisation keeps the research within data protection rules and makes participants noticeably more open.

                ## Milestones
                1. A consent form covering recording, note-taking, internal sharing and anonymised quotation.
                2. A storage location with access limited to the research team.
                3. A retention period and deletion routine agreed with whoever handles privacy.
                4. An incentive process that pays within a week and keeps only what finance needs.

                ## Notes
                Rules on personal data vary by country and sector. Ask your privacy or legal contact to approve the form rather than writing the legal wording yourself.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved consent form, a restricted storage folder and a written retention period are in place before the first interview."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your privacy contact for the organisation's research consent wording"
                - "Draft a consent form covering recording, sharing and quotes"
                - "Set up a restricted folder for recordings and transcripts"
                - "Review consent wording and delete recordings past their retention date @recurring(yearly)"
            - name: Switch interview guide and timeline sheet
              description: |-
                ## Purpose
                A good switch interview reconstructs a story, from the first thought that something had to change, through passive and active looking, to deciding and first use. A guide built around that timeline, with prompts for the moments people skip over, stops interviews drifting into opinions about features and pricing pages.

                ## Milestones
                1. A guide organised by stage: first thought, passive looking, active looking, deciding, first use and ongoing use.
                2. Context prompts (where, when, who else was there) written for each stage.
                3. A one-page timeline sheet the note-taker fills in live.
                4. The guide piloted on a colleague who recently bought something for work.

                ## Notes
                Start from the **Meeting notes** template for the note-taker's sheet. Keep the guide to one page; the timeline does the structuring, and a long script makes interviewers read instead of listen.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page guide and a timeline sheet have been piloted once and revised from what the pilot showed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one opening question that anchors the interview on the purchase day"
                - "Add context prompts for each stage of the timeline"
                - "Build a one-page timeline sheet for the note-taker"
                - "Pilot the guide with a colleague and cut whatever slowed it down"
            - name: Job research repository and tagging scheme
              description: |-
                ## Purpose
                Six months in, the value of job research lies in finding every transcript where someone mentioned worry about migrating their data. A repository with a fixed tagging scheme for job steps, forces, competing solutions and participant roles makes findings searchable and stops each new study starting from zero.

                ## Milestones
                1. One location holding every transcript, timeline sheet and synthesis, with a consistent file name pattern.
                2. A tag list covering job steps, the four forces, competing solutions and participant role.
                3. The most recent interviews retagged with the new scheme.
                4. A short how-to page so a new teammate can file an interview alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every interview from the last six months sits in one repository, tagged with the agreed scheme, with a how-to page beside it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose one tool or folder and a file naming pattern"
                - "Write the starting tag list for forces, job steps and solutions"
                - "Retag the five most recent interviews with the scheme"
                - "File and tag the week's new transcripts and timeline sheets @recurring(weekly:fri)"
            - name: Team assumptions about why customers buy
              description: |-
                ## Purpose
                Everyone on a product team carries a private theory of why customers buy, and these theories quietly steer the roadmap. Writing them down before the first interview, with how confident each person is, makes it obvious later which beliefs the research confirmed and which it overturned, and stops hindsight rewriting what people thought.

                ## Milestones
                1. At least 15 written assumptions about triggers, alternatives, anxieties and reasons to buy.
                2. Each assumption tagged with who holds it and their confidence.
                3. The five riskiest assumptions marked for testing in the first study.
                4. The list revisited with evidence after the first ten interviews.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated list of at least 15 team assumptions, each with an owner and confidence rating, exists before the first interview."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each trio member to write five reasons they think customers buy"
                - "Merge the lists and rate confidence for each line"
                - "Mark the five assumptions that would hurt most if wrong"
                - "Check the assumption list against new interview evidence @recurring(quarterly)"
            - name: Weekly switch interview rhythm
              description: |-
                ## Purpose
                One interview a week beats a burst of twenty every two years: findings arrive while decisions are still open, and interviewing stays a practised skill rather than an annual event. A standing slot, with the note-taker and the next recruit already lined up, is what keeps the rhythm alive through release weeks and holidays.

                ## Milestones
                1. A standing weekly interview slot in the calendars of the interviewer and note-taker.
                2. Each recruit confirmed at least five working days before their slot.
                3. Every completed interview filed with its timeline sheet within two days.
                4. Twelve interviews completed in the first quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twelve switch interviews are completed and filed each quarter, with no gap longer than three weeks."
                cadence: rolling
              tasks:
                - "Block a recurring one-hour slot for the interviewer and a note-taker"
                - "Hold this week's switch interview and complete the timeline sheet @recurring(weekly:tue)"
                - "Confirm next week's participant and send the consent form @recurring(weekly:thu)"
                - "Send the incentive and a thank-you note within two days of each interview"
            - name: Monthly four forces synthesis
              description: |-
                ## Purpose
                Push from the current situation, pull towards the new solution, anxiety about the new and the habit of the present: the four forces explain why some people switch and others stall halfway. Coding each month's interviews into the forces and comparing them with last month shows whether product, onboarding or sales should work on the next one.

                ## Milestones
                1. Every interview from the month coded into push, pull, anxiety and habit, with quotes.
                2. A one-page forces diagram holding the strongest example of each force.
                3. Changes since last month noted, such as new anxieties or a weaker pull.
                4. One recommended action per force sent to the product trio.

                ## Notes
                Start from the **Feedback themes** template. Anxiety and habit are the forces teams under-record, because people mention them quietly and late in the interview.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A forces diagram with quotes and one action per force is updated and sent to the product trio every month."
                cadence: rolling
              tasks:
                - "Code the month's transcripts into the four forces with quotes @recurring(monthly:12)"
                - "Update the forces diagram with the strongest new examples"
                - "Write one recommended action for each force"
                - "Compare this month's anxieties with the previous month's list"
            - name: Firing interviews with recent cancellations
              description: |-
                ## Purpose
                Customers who cancel have just fired your product and hired something else, even if that something is a spreadsheet or doing nothing. Talking to two or three each month, within weeks of leaving, shows which part of the job you stopped doing well and what replaced you, which exit surveys with a dropdown of reasons almost never capture.

                ## Milestones
                1. A short invitation for recent cancellations, with a modest incentive.
                2. At least two firing interviews completed each month.
                3. A running list of what each churned customer hired instead and when they decided.
                4. The top firing reason raised in the monthly job readout.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two firing interviews a month are completed and each one's replacement solution is logged."
                cadence: rolling
              tasks:
                - "Write a short, non-defensive invitation for recently cancelled customers"
                - "Invite three customers who cancelled in the last 30 days @recurring(monthly:8)"
                - "Record what each person moved to and when they decided"
                - "Add each firing reason to the hiring and firing log"
            - name: Mining sales calls and tickets for job evidence
              description: |-
                ## Purpose
                Sales recordings, support tickets and onboarding calls already hold hundreds of customers describing the situations that sent them looking. Reading a sample each month through a job lens, for triggers, workarounds and desired outcomes rather than feature requests, adds evidence between interviews at almost no recruiting cost.

                ## Milestones
                1. Read access agreed to sales call recordings and support tickets.
                2. A monthly sample of ten calls or tickets read for triggers, workarounds and outcomes.
                3. Useful excerpts tagged in the job repository.
                4. Patterns that contradict interview findings flagged for the next interview batch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten calls or tickets are reviewed each month and their job excerpts are tagged in the repository."
                cadence: rolling
              tasks:
                - "Ask the sales and support leads for read access to calls and tickets"
                - "Read ten calls or tickets for triggers and workarounds @recurring(monthly:19)"
                - "Ask the agent to summarise triggers and workarounds across the month's sample"
                - "Tag useful excerpts in the repository and note any contradictions"
            - name: Quarterly job map review
              description: |-
                ## Purpose
                A job map breaks the core job into steps, from deciding what is needed to finishing and tidying up, and it drifts out of date as interviews reveal steps nobody drew. Reviewing it each quarter against fresh evidence keeps it a working tool in roadmap conversations rather than a poster on the wall.

                ## Milestones
                1. The job map compared against the quarter's interviews and any survey data.
                2. Missing or merged steps corrected, with the evidence noted.
                3. The three steps where customers struggle most highlighted.
                4. The updated map published with its version date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated version of the job map, with its three struggle steps highlighted, is published every quarter."
                cadence: cyclic
              tasks:
                - "Review the job map against the quarter's interviews @recurring(quarterly)"
                - "Add any step customers described that the map lacks"
                - "Highlight the three steps with the most struggle"
                - "Publish the dated map where the product team plans"
            - name: Customer job language glossary
              description: |-
                ## Purpose
                Customers rarely say 'workflow automation'; they say 'stop chasing people for sign-offs'. A glossary of the exact phrases customers use for the job, its triggers and its outcomes gives designers, writers and salespeople the same words, and means copy and onboarding tests start from real language instead of internal jargon.

                ## Milestones
                1. A glossary of at least 40 customer phrases, each with its source and context.
                2. Phrases grouped by trigger, job step and desired outcome.
                3. Internal jargon listed beside the customer phrase that should replace it.
                4. The glossary linked from the design and content style guides.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A glossary of at least 40 sourced customer phrases is linked from the design and content style guides."
                cadence: rolling
              tasks:
                - "Pull 20 verbatim phrases from recent transcripts into a glossary"
                - "Group the phrases by trigger, job step and outcome"
                - "Pair five internal jargon terms with the customer wording"
                - "Add new customer phrases from the month's interviews @recurring(monthly:26)"
            - name: Monthly job research readout
              description: |-
                ## Purpose
                Findings that live only in a researcher's head change nothing. A monthly readout of one page and twenty minutes, with the month's strongest customer story, the forces that moved and one recommendation, keeps product, design, engineering and leadership working from the same picture of the customer's job.

                ## Milestones
                1. A one-page readout format agreed: story, forces, evidence, recommendation.
                2. A recurring twenty-minute slot with the product trio and one leader.
                3. Each readout logged with the decision or action it prompted.
                4. Attendees able to state the core job in their own words.

                ## Notes
                Lead with one customer's timeline told in full. A single vivid story persuades more than a chart summarising twenty interviews.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page readout is delivered every month and each one is logged with the action or decision it led to."
                cadence: rolling
              tasks:
                - "Draft a one-page readout format and test it on last month's data"
                - "Book a twenty-minute monthly slot with the trio and a leader"
                - "Send the month's job readout and log what it changed @recurring(monthly:15)"
                - "Ask attendees to restate the core job at the end of a session"
            - name: Hiring and firing log across the product
              description: |-
                ## Purpose
                Where new customers came from and where lost customers went is the clearest map of your real competition, and it rarely matches the competitor slide in the sales deck. A running tally from a sign-up question, interviews and cancellations shows which solutions you beat and which keep winning customers back.

                ## Milestones
                1. A log with columns for date, previous solution, next solution, trigger and source.
                2. A one-question 'what did you use before' prompt added to sign-up or onboarding.
                3. Monthly tallies of the top five solutions hired before and after yours.
                4. Surprises in the tally fed into the next recruiting round.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A log with monthly came-from and went-to tallies covers at least the last three months of sign-ups and cancellations."
                cadence: rolling
              tasks:
                - "Set up the log with previous solution, next solution and trigger columns"
                - "Ask the onboarding owner to add a what-did-you-use-before question"
                - "Update the came-from and went-to tallies @recurring(monthly:22)"
                - "Recruit two people from the most surprising source next month"
            - name: Annual job landscape study
              description: |-
                ## Purpose
                Once a year, step back from the weekly interviews and look at the whole job: has the context changed, have new competing solutions appeared, are the same outcomes still underserved? A study timed to land before annual planning gives the roadmap a fresh, evidence-backed starting point instead of last year's assumptions.

                ## Milestones
                1. A study plan timed so results land at least a month before annual planning.
                2. Fifteen or more interviews across segments and roles, plus the year's log data.
                3. A written comparison with last year's job map, forces and competing solutions.
                4. Three to five strategic implications presented to leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written annual job study comparing this year with last is presented to leadership at least a month before planning."
                cadence: cyclic
              tasks:
                - "Find the date of annual planning and work back eight weeks"
                - "Plan the annual job landscape study and recruit across segments @recurring(yearly)"
                - "Compare this year's findings with last year's map and forces"
                - "Present the implications to leadership before planning starts"
            - name: Practising switch interviews in mock sessions
              description: |-
                ## Purpose
                Interviewing for jobs takes practice: holding a silence, chasing a vague 'it was just time' back to a real event, steering away from feature talk without sounding rude. Three or four recorded mock interviews with colleagues, reviewed against a short checklist, build the habit faster and more kindly than learning on paying customers.

                ## Milestones
                1. Three mock interviews recorded with colleagues about a purchase they deliberated over.
                2. Each recording reviewed against a checklist of timeline coverage and leading questions.
                3. Two personal habits to fix written down after each review.
                4. A first live interview observed by a more experienced interviewer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recorded mock interviews have been reviewed against a checklist and a live interview has been observed and debriefed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a colleague to be interviewed about a purchase they deliberated over"
                - "Record the mock interview and mark where you led the answer"
                - "Write two habits to change before the next mock"
                - "Ask an experienced interviewer to observe your first live session"
            - name: Reconstructing a purchase timeline
              description: |-
                ## Purpose
                People compress months of thinking into 'I saw an ad and signed up'. Learning to walk back from the purchase day to the first thought, using anchors such as the season, the device, the meeting or who else was in the room, recovers the trigger events and comparisons that actually drove the choice.

                ## Milestones
                1. The six timeline stages and their typical questions learned.
                2. Memory anchor prompts for place, time, people and device practised.
                3. Three past transcripts redrawn as timelines with the trigger events marked.
                4. A personal cheat sheet of follow-up prompts for compressed stories.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three past interviews are redrawn as timelines with triggers marked, and a cheat sheet of anchor prompts exists."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Redraw one past interview as a timeline from first thought to first use"
                - "Mark the trigger events and the gaps where the story jumped"
                - "List five anchor prompts that would have filled each gap"
                - "Use the prompts in your next live interview and note what they recovered"
            - name: Writing desired outcome statements
              description: |-
                ## Purpose
                Outcome-driven innovation turns each job step into measurable outcome statements built from a direction, a metric, an object and a clarifier, as in 'minimise the time it takes to confirm an invoice matches the order'. Writing them well is a precise skill, and loose ones make any later survey unreadable.

                ## Milestones
                1. The structure of an outcome statement learned from ten worked examples.
                2. Twenty outcome statements drafted for one step of your job map.
                3. Statements reviewed for solution words, double meanings and missing metrics.
                4. A reviewed set of outcomes ready for survey use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Twenty outcome statements for one job step, each with a direction, metric and object and none naming a solution, are reviewed by a colleague."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Study ten published outcome statements and note their structure"
                - "Draft twenty outcomes for the job step customers struggle with most"
                - "Strike any outcome that names a solution or holds two ideas"
                - "Ask a colleague to rewrite three outcomes and compare the versions"
            - name: Uncovering emotional and social jobs
              description: |-
                ## Purpose
                Functional jobs explain what people are trying to get done; emotional and social jobs explain how they want to feel and be seen while doing it, and these often decide the purchase. Learning to ask about the boss who would notice, the fear of looking foolish in front of the team or the relief of finally being done brings out what people do not volunteer.

                ## Milestones
                1. A list of prompts for emotional and social dimensions at each timeline stage.
                2. Five past transcripts reread for feelings and audiences the interviewer missed.
                3. Emotional and social jobs written as statements beside the functional job.
                4. The new prompts used in at least three live interviews.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Emotional and social job statements, each backed by at least two quotes, sit beside the functional job in the repository."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Reread five transcripts and highlight every feeling or audience mentioned"
                - "Write three prompts about how the person wanted to be seen"
                - "Draft emotional and social job statements from the highlights"
                - "Try the prompts in your next three interviews"
            - name: Asking about past behaviour, not hypotheticals
              description: |-
                ## Purpose
                Questions such as 'would you use a feature that...' produce polite, optimistic and mostly wrong answers. Practising past-tense, specific questions like 'tell me about the last time you...' and spotting leading questions in your own transcripts is the biggest single improvement most interviewers can make to the quality of job evidence.

                ## Milestones
                1. Two of your own transcripts marked for hypothetical, leading and double questions.
                2. Each marked question rewritten in a past-tense, specific form.
                3. A one-page list of replacement phrasings kept beside the guide.
                4. A later transcript showing fewer than three hypothetical questions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A transcript recorded after the practice contains fewer than three hypothetical or leading questions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark every hypothetical or leading question in two of your transcripts"
                - "Rewrite each one as a question about a specific past event"
                - "Keep the rewrites on one page beside the interview guide"
                - "Count hypothetical questions in your next transcript"
            - name: Coding a transcript into the four forces
              description: |-
                ## Purpose
                Two researchers coding the same transcript often disagree on whether a quote is push or anxiety, and those disagreements quietly decide the synthesis. Practising on shared transcripts, comparing codes and writing tie-break rules makes coding consistent enough that month-to-month patterns reflect customers rather than coders.

                ## Milestones
                1. Two people code the same three transcripts independently.
                2. Every disagreement listed and discussed.
                3. Written rules for ambiguous cases added to the repository how-to.
                4. Agreement on a fourth transcript clearly higher than on the first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written tie-break rules exist and two coders agree on most codes in a fourth shared transcript."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick three transcripts for two people to code independently"
                - "List every quote the two coders labelled differently"
                - "Write a tie-break rule for each recurring disagreement"
                - "Code a fourth transcript and compare agreement with the first"
            - name: Building a universal job map
              description: |-
                ## Purpose
                Ulwick's universal job map describes almost any job in eight steps: define, locate, prepare, confirm, execute, monitor, modify and conclude. Building your first map with it reveals steps the product ignores entirely, very often the preparing and confirming steps where customers quietly struggle with spreadsheets and phone calls.

                ## Milestones
                1. The eight universal steps understood through an example from another industry.
                2. A first job map for your core job, each step written in verb form.
                3. Steps your product does not currently support marked.
                4. The map checked with three customers or support staff.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A job map covering all eight steps for the core job, with unsupported steps marked, has been checked with three people close to customers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work through a published example job map from another industry"
                - "Draft your core job across the eight steps in verb form"
                - "Mark each step your product does not support today"
                - "Walk three customers or support staff through the map and note corrections"
            - name: Telling big hires from little hires
              description: |-
                ## Purpose
                The big hire is the purchase; the little hire is every later moment someone opens your product instead of falling back on the old way. Plenty of products win the big hire and lose the little ones, which shows up as accounts that pay but barely log in. Studying the two separately changes which problems look urgent.

                ## Milestones
                1. Big hire and little hire moments defined for your product with examples.
                2. A list of paying accounts that rarely return pulled from usage data.
                3. Three interviews with low-use paying customers about the moments they chose the old way.
                4. Little hire findings reported separately from purchase findings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three low-use customer interviews are summarised in a little hire findings note kept separate from purchase findings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write one example each of a big hire and a little hire for your product"
                - "Ask an analyst for paying accounts with very low recent use"
                - "Interview three of them about the last time they used the old way"
                - "Report the little hire findings in their own section of the readout"
            - name: Outcome importance and satisfaction survey
              description: |-
                ## Purpose
                Once outcome statements exist, a survey asking a few hundred job performers to rate each one for importance and current satisfaction shows which outcomes are underserved. It turns interview hunches into numbers leadership will fund, provided the sample matches the people who actually do the job, not only your happiest customers.

                ## Milestones
                1. A survey of 50 to 100 outcome statements with importance and satisfaction scales.
                2. A sampling plan that reaches job performers beyond current customers.
                3. At least 150 complete responses after quality checks.
                4. Opportunity scores calculated for every outcome.

                ## Notes
                If nobody on the team has run a large survey, bring in a researcher or agency for the sampling and analysis plan. A panel that cannot confirm respondents do the job will give confident, meaningless scores.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "At least 150 quality-checked responses produce an opportunity score for every outcome statement in the survey."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the 50 to 100 outcomes that cover the whole job map"
                - "Write a sampling plan that includes people who are not customers"
                - "Pilot the survey with ten respondents and fix confusing items"
                - "Field the survey and remove speeders and straight-liners"
                - "Re-run the outcome survey to track movement @recurring(yearly)"
            - name: Choosing which underserved outcomes to target
              description: |-
                ## Purpose
                Survey results matter only once someone decides which underserved outcomes the product will go after and which overserved ones it can stop polishing. A short list, checked against strategy and what the team can realistically build, gives the roadmap a customer-defined target instead of a queue of feature requests.

                ## Milestones
                1. Outcomes ranked by opportunity score, with underserved and overserved groups marked.
                2. A shortlist of three to five target outcomes, each with its evidence.
                3. Overserved areas where effort can be cut named.
                4. The decision recorded and presented to the product trio and leadership.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names three to five target outcomes and at least one overserved area to stop investing in."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sort outcomes by opportunity score and mark the top and bottom groups"
                - "Check each top outcome against strategy and build capacity"
                - "Name one overserved area where effort can stop"
                - "Present the shortlist and record the decision with leadership"
            - name: Competing solutions and non-consumption list
              description: |-
                ## Purpose
                Your real competition is whatever customers would otherwise hire for the job: a rival product, a spreadsheet, an agency, an intern, or nothing at all. Listing every alternative from interviews and the hiring and firing log, including non-consumption, widens the view beyond the feature grid and often points to the cheapest customers to win.

                ## Milestones
                1. Every solution hired for the job listed, grouped as products, services, workarounds and doing nothing.
                2. The job steps each alternative handles well noted.
                3. The size of the non-consumption group estimated from interviews and logs.
                4. Two alternatives chosen as the main ones to win against, with reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A grouped list of alternatives, including non-consumption, names two primary alternatives to win against and is refreshed each quarter."
                cadence: rolling
              tasks:
                - "List every alternative mentioned in the last 20 interviews"
                - "Group them as products, services, workarounds and doing nothing"
                - "Estimate how many job performers currently hire nothing"
                - "Update the alternatives list from the hiring and firing log @recurring(quarterly)"
            - name: Outcome-based segments from survey data
              description: |-
                ## Purpose
                Demographic and firmographic segments rarely explain who will switch, but groups of people sharing the same unmet outcomes often do. Clustering survey respondents by the outcomes they rate underserved finds segments with a reason to change, which can then be sized, described and recruited for the next round of interviews.

                ## Milestones
                1. Respondents clustered by underserved outcomes, with the method documented.
                2. Each segment described by its top unmet outcomes and its size.
                3. Segments checked for whether they can be found and reached in practice.
                4. One segment chosen for focused follow-up interviews.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A documented set of outcome-based segments, each with size and top unmet outcomes, names one segment for follow-up."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask an analyst to cluster respondents by underserved outcomes"
                - "Describe each cluster by its top three unmet outcomes and size"
                - "Check how each segment could be identified in sales or sign-up data"
                - "Recruit five people from the chosen segment for follow-up interviews"
            - name: Job stories in place of user stories
              description: |-
                ## Purpose
                User stories begin with a persona and invite guesses about what that person wants. Job stories begin with a situation: when I am in this circumstance, I want to do this, so I can achieve that. Trying them in one team for a quarter shows whether specs written from real situations lead to sharper design and scope decisions.

                ## Milestones
                1. The job story format explained on one page with three examples from your research.
                2. One team writing new backlog items as job stories for a quarter.
                3. Each job story linked to the interview evidence behind its situation.
                4. A short retrospective deciding whether to keep, adapt or drop the format.

                ## Notes
                Start from the **Product spec** template and replace its user story section with job stories. Keep the situation concrete; 'when I am busy' is not a situation.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One team has written a quarter of backlog items as evidence-linked job stories and a retrospective decision on the format is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write three job stories from recent interview situations"
                - "Agree with one team to use job stories for a quarter"
                - "Link each new job story to the transcript behind it"
                - "Run a 30-minute retrospective on the format at quarter end"
            - name: Reducing anxiety and habit in the purchase path
              description: |-
                ## Purpose
                Plenty of prospects feel enough push and pull to switch and still stall, held back by worry about migration, price or looking foolish, and by the comfort of the old way. Turning the anxieties and habits found in interviews into specific changes, such as a migration service, a guarantee or an import tool, works on the forces most products ignore.

                ## Milestones
                1. The top five anxieties and habits from interviews listed with quotes.
                2. One proposed change per anxiety, each with an owner in product, sales or marketing.
                3. Two changes shipped or piloted.
                4. Trial or stalled-deal data checked for movement after the changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two changes aimed at named anxieties or habits are live, and trial or deal data before and after is compared in writing."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the five anxieties and habits that appear most in interviews"
                - "Propose one change per anxiety and find an owner for each"
                - "Pilot the two changes with the clearest owner"
                - "Compare trial or stalled-deal numbers before and after"
            - name: Job fit review of the next roadmap bets
              description: |-
                ## Purpose
                Roadmap items often arrive as solutions with no clear job behind them. Scoring each of the next big bets against the job map, the target outcomes and the forces evidence shows which ones serve a known struggle and which are guesses that need research, or an explicit experiment label, before engineering starts.

                ## Milestones
                1. Each of the next five roadmap bets linked to a job step and target outcome, or marked unlinked.
                2. Evidence strength rated for each link.
                3. Unlinked bets sent back for research or accepted as labelled experiments.
                4. The review scheduled before each planning cycle.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The next five roadmap bets each carry a job link and evidence rating, or a recorded decision to treat them as experiments."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the next five roadmap bets with their owners"
                - "Link each bet to a job step and target outcome"
                - "Rate the evidence behind each link as strong, thin or none"
                - "Agree with the owners what happens to each unlinked bet"
            - name: Defining the market by the job
              description: |-
                ## Purpose
                Category-defined markets such as 'project management software' shrink your view to people already buying that category. Defining the market as everyone who performs the core job, whatever they use today, gives a truer size, reveals groups competitors ignore and changes who you interview next.

                ## Milestones
                1. A market definition written as the group of people who perform the core job.
                2. A rough count of job performers from public data or survey estimates, with sources.
                3. The share served by your category versus workarounds estimated.
                4. One underexplored group of job performers chosen for the next recruiting round.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sourced estimate of job performers, split by category users and workaround users, names one new group to recruit."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the market as the people who perform the core job"
                - "Find two public sources that estimate how many people do the job"
                - "Estimate the share using your category versus workarounds"
                - "Choose one underexplored group for the next recruiting round"
            - name: Struggling feature re-examined through its job
              description: |-
                ## Purpose
                When a feature shipped with confidence goes unused, the usual reaction is a redesign. Interviewing the few who use it and several who tried it and stopped, to learn what job each hoped it would do, often shows it solved the wrong step or appeared at the wrong moment in the job.

                ## Milestones
                1. One low-adoption feature chosen, with its usage numbers recorded.
                2. Interviews completed with three regular users and three who tried and stopped.
                3. The job each group hired it for written down.
                4. A recommendation to reframe, reposition, move or retire the feature.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Six interviews about one low-adoption feature lead to a written recommendation that the product lead accepts or rejects."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one low-adoption feature and record its usage numbers"
                - "Recruit three regular users and three who tried and stopped"
                - "Write the job each group hired the feature for"
                - "Send a reframe, reposition, move or retire recommendation to the product lead"
            - name: First ten switch interviews in 30 days
              description: |-
                ## Purpose
                Ten interviews is roughly where triggers and anxieties start repeating and a team stops arguing from opinion. Setting a 30-day target for the first ten, with recruits and slots booked up front, puts the first synthesis on the table before enthusiasm fades and the research gets pushed behind the next release.

                ## Milestones
                1. Ten participants recruited and booked within the first two weeks.
                2. Ten interviews completed and filed with timeline sheets.
                3. A first forces diagram drawn and the job statement revised from the evidence.
                4. Results shared in a 30-minute session with the team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Ten switch interviews are completed, filed and synthesised into a forces diagram within 30 days of starting."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Book ten interview slots across the next four weeks"
                - "Fill every slot from the recent switcher pool"
                - "Draw a first forces diagram after the tenth interview"
                - "Share the results with the team in a 30-minute session"
            - name: Job synthesis workshop with the product trio
              description: |-
                ## Purpose
                Synthesis done alone produces a report; synthesis done together produces a shared belief. A half-day workshop where the product, design and engineering leads lay out the timelines, cluster the forces and agree the job statement means the people building the product own the findings rather than receiving them.

                ## Milestones
                1. Timelines from at least eight interviews printed or posted on a shared board before the session.
                2. Forces clustered and the top push, pull, anxiety and habit agreed.
                3. A revised core job statement all three leads accept.
                4. Three actions with owners written up within two days.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day workshop ends with an agreed job statement and three owned actions written up within two days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a half day with the product, design and engineering leads"
                - "Prepare timelines from at least eight interviews on a shared board"
                - "Run the workshop and agree the top force in each quadrant"
                - "Write up the job statement and three owned actions within two days"
            - name: Teaching the job lens to sales and support
              description: |-
                ## Purpose
                Sales and support hear more customer stories in a week than the product team hears in a quarter, but they listen for objections and bugs. A 90-minute session on triggers, forces and job language, built on your own transcripts, turns them into a source of job evidence and helps them sell and support to the job.

                ## Milestones
                1. A 90-minute session built around two real customer timelines.
                2. Sales and support staff given a three-question job prompt for their calls.
                3. A shared channel where they post job stories they hear.
                4. At least ten job stories posted in the month after the session.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The session has run and at least ten job stories from sales or support are posted in the following month."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose two customer timelines that sales and support will recognise"
                - "Write a three-question job prompt they can use on calls"
                - "Run the 90-minute session and open a channel for job stories"
                - "Run a short refresher session for new sales and support staff @recurring(yearly)"
            - name: Job findings at the annual planning session
              description: |-
                ## Purpose
                Annual planning is the moment job research either shapes the year or gets squeezed onto one slide. A short, story-led presentation of the job map, target outcomes and strongest forces, ending with specific decisions requested, gives the research a real seat in the room.

                ## Milestones
                1. A slot on the planning agenda confirmed with the organiser.
                2. A 15-minute presentation built around one customer timeline and the target outcomes.
                3. The specific decisions requested from leadership written on the final slide.
                4. Decisions made in the session recorded in the repository.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The job findings are presented at annual planning and the decisions taken are recorded in the repository within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the planning organiser for a 15-minute agenda slot"
                - "Choose the one customer timeline that best shows the core job"
                - "Write the decisions you need from leadership on the last slide"
                - "Record the decisions taken in the repository after the session"
            - name: Two-week job sprint before a major bet
              description: |-
                ## Purpose
                Before committing a team for months to a new product, market or redesign, two focused weeks of switch interviews with people in that situation can confirm the job exists and hurts enough to pay for. The sprint has a fixed scope: eight interviews, one synthesis and a go, rethink or stop recommendation on day ten.

                ## Milestones
                1. The bet and the single question the sprint must answer written in one sentence.
                2. Eight interviews completed with people facing the target situation.
                3. A synthesis of triggers, current solutions and forces.
                4. A go, rethink or stop recommendation delivered on day ten.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Eight interviews and a written go, rethink or stop recommendation are delivered within ten working days of the sprint starting."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Write the bet and the sprint's single question in one sentence"
                - "Recruit eight people currently facing the target situation"
                - "Synthesise triggers, current solutions and forces by day eight"
                - "Deliver the go, rethink or stop recommendation on day ten"
            - name: Founder-led job interviews before product-market fit
              description: |-
                ## Purpose
                Early-stage founders should run most interviews personally, because the job findings decide what the company is. Switch interviews with the first 10 to 20 paying or nearly-paying customers show which job they actually hired the product for, which is often not the one in the pitch deck, and which segment feels the strongest push.

                ## Milestones
                1. Ten to twenty early customers interviewed by a founder, including some who nearly bought.
                2. The job they hired the product for written down and compared with the pitch.
                3. The segment with the strongest push identified.
                4. Product, pricing or messaging changes decided from the findings.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A founder has interviewed at least ten early customers and recorded the hired job, the strongest segment and the changes decided."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the first 20 customers and near-misses with how each found you"
                - "Book founder-run interviews with at least ten of them"
                - "Compare the job customers describe with the one in the pitch deck"
                - "Decide one product, pricing or messaging change from the findings"
            - name: Lone researcher supporting several product teams
              description: |-
                ## Purpose
                A single researcher serving four or five product teams cannot interview for all of them. A shared switch interview programme, with PMs trained to run their own interviews, one repository and one synthesis rhythm, spreads job research across the organisation without the researcher becoming the bottleneck every team waits on.

                ## Milestones
                1. Each team's open decisions that job research could inform listed.
                2. At least two product managers trained to run switch interviews with the shared guide.
                3. A monthly office hour where PMs bring transcripts and questions.
                4. One PM-led interview a month reviewed with written feedback.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "At least two product managers run their own switch interviews and a monthly office hour has run for three months in a row."
                cadence: rolling
              tasks:
                - "List each team's open decision that job research could inform"
                - "Train two product managers to run switch interviews with your guide"
                - "Hold a job research office hour for product managers @recurring(monthly:10)"
                - "Review one PM-led interview and send written feedback"
            - name: Job research across a B2B buying committee
              description: |-
                ## Purpose
                Business purchases often involve a user, a manager, a budget holder, IT and procurement, each hiring the product for a different job. Interviewing several roles from the same recent purchase and laying their timelines side by side shows where the deal nearly died and whose job the product neglects.

                ## Milestones
                1. Three recent deals chosen where several roles can be interviewed.
                2. Interviews completed with at least three roles per deal.
                3. Side-by-side timelines showing each role's trigger, anxiety and decision point.
                4. The neglected role and its job written up for sales and product.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Side-by-side timelines for three deals, each with at least three roles interviewed, name one neglected role and its job."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Ask sales for three recent deals with reachable contacts in several roles"
                - "Interview at least three roles from each deal"
                - "Lay the timelines for each deal side by side"
                - "Write up the neglected role and its job for sales and product"
            - name: Job research on a small team with no budget
              description: |-
                ## Purpose
                Small teams without a research budget can still do good job research: recent sign-ups will often talk for 30 minutes for a thank-you or a month of free service, and everyone on the team can take turns as interviewer or note-taker. A lean set-up with tools you already have and a shared rota keeps it going.

                ## Milestones
                1. An affordable incentive, such as account credit, agreed.
                2. A rota where each team member joins at least one interview a month.
                3. Existing or free tools chosen for recording, transcripts and the repository.
                4. Six interviews completed in the first two months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six interviews are completed in the first two months using existing tools, with every team member on the rota at least once."
                cadence: rolling
              tasks:
                - "Agree a no-cost incentive such as account credit"
                - "Set up an interview rota covering every team member"
                - "Run or join this month's rota interview @recurring(monthly:17)"
                - "Choose a recording and transcription option the team already has"
            - name: Inheriting someone else's job research
              description: |-
                ## Purpose
                Taking over a product or a research role often means inheriting a folder of transcripts, a job statement nobody remembers agreeing and survey data with no method notes. A structured audit in the first month decides what still holds, what needs redoing and what can be archived, before old findings are quoted as fact.

                ## Milestones
                1. An inventory of every inherited study with date, method, participants and status.
                2. Each finding rated as still valid, needs checking or out of date.
                3. Gaps in consent records or method notes listed and resolved.
                4. A one-page summary of what the team can rely on, shared with the product lead.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory of inherited studies with a validity rating for each finding, plus a one-page summary, is shared with the product lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every inherited study with its date, method and participants"
                - "Ask the agent to summarise each inherited synthesis in three lines"
                - "Rate each finding as valid, needs checking or out of date"
                - "Check consent records exist for every stored recording"
            - name: Pivot check through recent customer switches
              description: |-
                ## Purpose
                Founders weighing a pivot usually argue from revenue charts and gut feel. Interviewing recent switchers in and out, and asking whether the job customers hire you for is the one the company is built around, turns a pivot debate into a question with evidence: double down, narrow to the real job or change course.

                ## Milestones
                1. Eight interviews with customers who joined or left in the last three months.
                2. The job each group hired or fired the product for written down.
                3. The real job compared with the job the company is built around.
                4. A recorded decision to double down, narrow or change course.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pivot decision is recorded alongside eight switch interviews and a written comparison of the hired job with the company's intended job."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Pick four recent joiners and four recent leavers to interview"
                - "Write the job each person hired or fired you for"
                - "Compare those jobs with the one the company is built around"
                - "Record the double down, narrow or change course decision with co-founders"
            - name: Demand-side sales script from switch stories
              description: |-
                ## Purpose
                Demand-side selling asks prospects about their struggle and timeline instead of pitching features, and it works best when the questions come from real switch interviews. Turning the commonest triggers and anxieties into discovery questions and honest answers helps salespeople meet prospects where they are in their own timeline.

                ## Milestones
                1. Discovery questions for each timeline stage written from interview evidence.
                2. Answers to the five most common anxieties prepared with proof points.
                3. The script piloted by two salespeople on at least ten calls.
                4. Stage movement or win rate compared with calls run the old way.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A discovery script built from interview evidence has been used on at least ten sales calls and compared with earlier calls."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write discovery questions for each timeline stage from real quotes"
                - "Draft answers to the five most common anxieties"
                - "Ask two salespeople to pilot the script on ten calls"
                - "Compare stage movement with calls run the old way"
            - name: Choosing a job-based growth strategy
              description: |-
                ## Purpose
                Outcome data points towards different strategies: a better product for underserved customers, a cheaper and simpler one for overserved customers, a disruptive one for non-consumers, or a dominant one that is both better and cheaper. Placing your target segments against these options forces an explicit choice that design, engineering and go-to-market can follow.

                ## Milestones
                1. Target segments placed on a chart of how underserved they are against what they spend today.
                2. Each main strategy option described in one paragraph for your market.
                3. One primary strategy chosen, with the evidence and the trade-offs it implies.
                4. The choice reviewed by leadership and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One primary job-based strategy is recorded with its evidence and trade-offs and has been reviewed by leadership."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Plot target segments by unmet outcomes against current spend"
                - "Describe each strategy option for your market in a paragraph"
                - "Choose one primary strategy and list what it rules out"
                - "Take the choice to leadership and record their decision"
            - name: Tracking the job across product generations
              description: |-
                ## Purpose
                The job stays stable while solutions change, so tracking the same outcome measures and forces over several years shows whether each product generation actually gets the job done better. A small set of repeated measures, collected the same way every year, turns job research into a long-run scorecard leadership can trust.

                ## Milestones
                1. Eight to twelve outcome measures chosen to repeat every year.
                2. A fixed method and sample definition written down so results compare.
                3. A baseline year recorded.
                4. Year-on-year changes reported alongside the major releases of that year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A baseline and at least one repeat year of the same outcome measures, collected by a written fixed method, are reported side by side."
                cadence: cyclic
              tasks:
                - "Choose eight to twelve outcome measures worth repeating every year"
                - "Write down the method and sample definition in detail"
                - "Collect the repeated outcome measures using the fixed method @recurring(yearly)"
                - "Report year-on-year changes next to that year's major releases"
            - name: Measuring the four forces with a switching survey
              description: |-
                ## Purpose
                Interviews reveal the forces; a survey of a few hundred recent switchers shows how common each one is and which segments feel it most. Writing survey items from interview quotes, and comparing people who switched with those who nearly did, sizes the anxieties and pulls worth funding.

                ## Milestones
                1. Survey items for push, pull, anxiety and habit drafted from interview quotes.
                2. Items piloted and reworded with ten recent switchers.
                3. At least 200 responses from people who switched or nearly switched in the last six months.
                4. Force prevalence reported by segment, with near-switchers compared against switchers.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "At least 200 survey responses produce a report of force prevalence by segment, comparing switchers with near-switchers."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Turn the strongest interview quotes into survey items for each force"
                - "Pilot the items with ten recent switchers and reword weak ones"
                - "Field the survey to switchers and near-switchers from the last six months"
                - "Report force prevalence by segment with the two groups compared"
---

# Jobs-to-Be-Done Research

Jobs-to-be-done research asks what progress a customer is trying to make, and what they hire and fire to make it, for product teams, founders and researchers who want the real reasons behind buying, upgrading and leaving. The projects start with foundations (choosing a method, a first job statement, recruiting recent switchers, consent and the interview guide), then the operating rhythms of interviewing and synthesis, the interviewing and coding skills, outcome surveys and the decisions they feed, dated workshops and sprints, situations for founders, lone researchers and small teams, and finally specialist work such as demand-side selling, job-based strategy and forces measured at scale.

What repeats is a weekly switch interview, a monthly round of forces synthesis, firing interviews, sales call mining, glossary updates and a readout, a quarterly job map and alternatives review, and a yearly landscape study and outcome survey. The Reading queue, Meeting notes, Feedback themes and Product spec templates pair with the method reading, the interview sheet, the forces synthesis and job stories. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
