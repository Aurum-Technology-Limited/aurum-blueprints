---
id: data-analytics.data-team-management
name: Data Team Management
description: "A written remit and team structure, clear roles and a career ladder, the one-to-ones, roadmaps and impact reports that keep a data team effective, and the hiring, growth and change work of leading one."
category: business
version: 1.0.0
tags: [data-analytics, data-team-management, manager, enterprise, team-leadership, hiring, career-ladder, operating-model]
author: Aurum Technology
starter_structure:
  templates:
    - one-on-one
    - skills-matrix
    - development-plan
    - metrics-log
    - onboarding-plan
    - onboarding-30-60-90
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Team Management
          description: "Leading analysts, analytics engineers and data scientists, shaping the team's remit, embedding with business units and showing impact."
          projects:
            - name: Data team charter and remit statement
              description: |-
                ## Purpose
                Data teams without a written remit end up as an unpaid help desk for whoever shouts loudest, and nobody can say whether they are succeeding. A one-page charter stating who the team serves, which problems it owns, what it explicitly does not do and how success is judged gives you something to point to when priorities collide. Write it in the first month, while you still have a newcomer's licence to ask basic questions.

                ## Milestones
                1. A one-page charter covering mission, customers, owned problems, out-of-scope work and success measures.
                2. The charter reviewed line by line with your own manager and two senior business stakeholders.
                3. Each out-of-scope item paired with where that work should go instead.
                4. The charter published where the team and its stakeholders can find it, with a review date a year out.

                ## Notes
                Keep the out-of-scope list honest. A charter that claims everything from board reporting to machine learning platforms will be ignored the first time it is tested.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page data team charter with an out-of-scope list is published and has been agreed in writing by your manager."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft five lines: mission, customers, owned problems, exclusions, success measures"
                - "Review the draft with your manager and two senior stakeholders"
                - "Name where each excluded type of work should go instead"
                - "Publish the charter on the team's shared space"
                - "Compare the charter with what the team actually did all year @recurring(yearly)"
            - name: Six-week audit of where the team's time goes
              description: |-
                ## Purpose
                Before changing anything, find out what the team actually spends its week on. Most data leads who run this audit discover that a third or more of capacity goes on ad hoc pulls, report fixes and meetings that never appear on any roadmap. Six weeks of light tagging gives you evidence for every later conversation about headcount, priorities and saying no.

                ## Milestones
                1. Five or six work categories agreed with the team, such as roadmap, ad hoc requests, maintenance, support and meetings.
                2. Six weeks of half-day time tags collected from every team member.
                3. A summary showing the share of hours by category, by person and by business unit served.
                4. Three findings from the audit shared with the team and your manager.

                ## Notes
                Tell the team plainly that this is about the system, not individual productivity, and show them the summary before anyone else sees it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six weeks of tagged time from every team member is summarised by category and business unit, with three findings shared."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree five or six time categories with the team in one short meeting"
                - "Set up a simple sheet where each person tags their half-days"
                - "Remind the team each Friday for six weeks to finish tagging"
                - "Summarise hours by category, person and business unit"
                - "Present three findings to the team before sharing them upward"
            - name: Stakeholder map and listening interviews
              description: |-
                ## Purpose
                Who depends on the data team, who funds it and who quietly routes around it are three different lists, and you need all three. Mapping stakeholders by influence and current satisfaction, then holding thirty-minute listening interviews with the top fifteen, tells you where trust is strong, where it is broken and which business questions are going unanswered.

                ## Milestones
                1. A stakeholder map covering every business unit, with influence, current use of the team and satisfaction scored.
                2. Listening interviews held with at least fifteen stakeholders using the same five questions.
                3. Interview notes summarised into recurring themes, with quotes kept anonymous.
                4. A short readout of the themes shared with interviewees and the team.

                ## Notes
                Ask what decision they made last month without data that they wish they had made with it. It surfaces real demand faster than asking which reports they want.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least fifteen stakeholder interviews are complete and a one-page readout of themes has been sent to everyone interviewed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every business unit and the named people who use or fund the team"
                - "Score each stakeholder on influence, use and satisfaction"
                - "Book thirty-minute listening interviews with the top fifteen"
                - "Ask the agent to group the interview notes into recurring themes"
                - "Send a one-page readout of the themes to everyone interviewed"
            - name: Choosing a centralised, embedded or hub-and-spoke model
              description: |-
                ## Purpose
                Centralised teams build consistent foundations but drift away from the business, while fully embedded analysts know their units well but duplicate work and lose career support. Choosing the structure deliberately, against your company's size, the maturity of the data platform and how many units need dedicated support, settles reporting lines that otherwise get renegotiated every quarter.

                ## Milestones
                1. Three structural options written up with reporting lines, benefits, risks and cost.
                2. Each option scored against the same criteria: platform maturity, unit demand, career growth and consistency.
                3. A recommended model agreed with your manager and the heads of the largest business units.
                4. Reporting lines, dotted lines and who sets each person's priorities written down for every role.

                ## Notes
                Hub and spoke, with a central platform and analytics engineering core and analysts placed in units but reporting to the data lead, is a common default for teams of eight to forty. Revisit the choice when headcount roughly doubles.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A team structure is chosen and recorded, with reporting lines and priority-setting written down for every role."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a half-page description of each of the three structures"
                - "Score each option against platform maturity, unit demand and career growth"
                - "Test the preferred option with the heads of the two largest units"
                - "Record who sets priorities and who manages performance for every role"
            - name: Role profiles for analysts, analytics engineers and scientists
              description: |-
                ## Purpose
                When the titles analyst, analytics engineer and data scientist mean different things on different desks, people get hired into the wrong work and stakeholders ask a statistician to fix a broken pipeline. Clear profiles describing each role's outputs, tools, partners and what good looks like make hiring, staffing and career conversations far easier.

                ## Milestones
                1. A one-page profile for each role covering purpose, typical outputs, core skills and main partners.
                2. Boundaries between the roles described with three worked examples of who does what.
                3. Every current team member mapped to a profile, with any mismatch noted.
                4. The profiles shared with recruiting and the business unit leads.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Published one-page profiles exist for all three roles, and every team member is mapped to one with mismatches recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the job descriptions currently used for each data role"
                - "Draft a one-page profile for analyst, analytics engineer and data scientist"
                - "Write three worked examples showing who owns which piece of work"
                - "Map each current team member to a profile and note mismatches"
            - name: Data team skills matrix baseline
              description: |-
                ## Purpose
                Knowing that the team is short of experiment design or dimensional modelling skills before a big project lands is worth more than finding out halfway through. A skills matrix rating each person on ten to fifteen capabilities shows coverage gaps, single experts and where development plans should focus.

                ## Milestones
                1. Ten to fifteen capabilities listed, spanning technical skills, business domain knowledge and communication.
                2. Each person self-rated and then calibrated in a one-to-one, on a four-point scale.
                3. Gaps and capabilities held by only one person highlighted on the matrix.
                4. Two or three team-wide development priorities chosen from the gaps.

                ## Notes
                Start from the **Skills matrix** template. Keep individual ratings between each person and their manager; share only the aggregated coverage with the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calibrated skills matrix covers every team member, with gaps marked and two or three development priorities recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List ten to fifteen capabilities the team's work depends on"
                - "Ask each person to self-rate on a four-point scale"
                - "Calibrate each rating in the next one-to-one"
                - "Highlight capabilities that only one person holds"
                - "Refresh the matrix ahead of annual development planning @recurring(yearly)"
            - name: Headcount and budget plan for the data team
              description: |-
                ## Purpose
                Finance will ask what the data team costs and what another hire would buy, usually with a week's notice. A plan that sets current salaries, contractors, tools and training against demand by business unit, with two growth scenarios, lets you answer calmly and argue for headcount with numbers instead of anecdotes.

                ## Milestones
                1. Current fully loaded cost of the team by role, contractor spend and data tooling spend in one sheet.
                2. Demand evidence by business unit drawn from the time audit and stakeholder interviews.
                3. Two scenarios for the next twelve months, flat and growth, each with what it delivers and what it leaves undone.
                4. The plan reviewed with your finance partner and your manager.

                ## Notes
                Agree with finance which tooling costs sit in your budget and which sit with IT or the platform team before any numbers are compared.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A headcount and budget plan with flat and growth scenarios has been reviewed with your finance partner and your manager."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask your finance partner for the team's fully loaded cost by role"
                - "Add contractor, tooling and training spend from the last twelve months"
                - "Build a flat and a growth scenario showing what each delivers"
                - "Walk the plan through with finance and your manager"
            - name: Career ladder for data roles
              description: |-
                ## Purpose
                Analysts who cannot see how to progress without becoming managers leave, and so do the strong individual contributors you most need. A ladder with four to six levels per track, an individual contributor path alongside the management path, and observable behaviours at each level makes promotion decisions explainable and fair.

                ## Milestones
                1. Levels defined for each role track, with scope, impact, technical depth and influence described at each.
                2. A senior individual contributor path that reaches the same seniority as management.
                3. The ladder calibrated by placing every current team member on it with a second reviewer.
                4. The ladder approved by HR and published to the team with a walkthrough.

                ## Notes
                Describe behaviours you can observe, such as scoping a quarter of work for a business unit without help, rather than traits like being strategic. Agree any link to pay bands with HR rather than inventing one.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A career ladder with parallel individual contributor and management tracks is approved by HR and every team member has been placed on it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect two published data career ladders as reference points"
                - "Draft scope, impact, depth and influence for each level"
                - "Place every team member on the draft with a second reviewer"
                - "Agree the link between levels and pay bands with HR"
                - "Walk the team through the published ladder and take questions"
            - name: Team working agreement and communication norms
              description: |-
                ## Purpose
                Where work is tracked, how quickly messages get answered, which hours are protected and when a piece of analysis counts as done are small questions that cause large friction when nobody has answered them. A one-page working agreement written with the team, not for it, removes a surprising amount of daily irritation.

                ## Milestones
                1. A team session held to agree norms for tracking work, response times, meetings and focus time.
                2. A one-page working agreement published in the team's shared space.
                3. A definition of done for analysis, models and dashboards included in the agreement.
                4. The agreement revisited after eight weeks and adjusted.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page working agreement with a definition of done is published and has been revised once after eight weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a ninety-minute session with the whole team"
                - "Agree norms for work tracking, response times and focus blocks"
                - "Write a definition of done for analysis, models and dashboards"
                - "Review the agreement with the team after eight weeks"
            - name: Weekly one-to-ones with every direct report
              description: |-
                ## Purpose
                One-to-ones are where career worries, blocked work and early signs of burnout surface, and they are the first meeting a busy data lead cancels. A weekly thirty-minute slot that belongs to the report, with a running shared notes page, keeps small problems small and gives you real evidence at review time.

                ## Milestones
                1. A recurring thirty-minute slot booked with every direct report.
                2. A shared running notes page for each person, with their agenda first and yours second.
                3. Career and development discussed explicitly at least once a month.
                4. Fewer than one in ten one-to-ones cancelled over a quarter.

                ## Notes
                Start from the **1:1** template. Move a one-to-one rather than cancelling it, and never let it turn into a status update.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every direct report has had a weekly one-to-one with running notes for a full quarter, with under ten percent cancelled."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with each direct report"
                - "Create a shared notes page per person with their agenda first"
                - "Hold each one-to-one and add notes the same day @recurring(weekly)"
                - "Raise career and development in the first one-to-one of each month"
            - name: Monday team planning and work in progress review
              description: |-
                ## Purpose
                Data work spreads thin fast: five half-finished analyses help nobody, while two finished ones change decisions. A thirty-minute Monday session that looks at everything in progress, limits it per person and agrees what ships this week keeps the team finishing things and makes blockers visible early.

                ## Milestones
                1. A single board showing every piece of work in progress, its owner and the business unit it serves.
                2. A work in progress limit per person agreed, usually two or three items.
                3. Each Monday session ending with a short list of what ships that week.
                4. Blocked items named alongside the person who will unblock them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive Monday sessions are held, each recording the week's ship list and blocked items against an agreed limit."
                cadence: rolling
              tasks:
                - "Move all current work onto one board with owners and units"
                - "Agree a work in progress limit per person with the team"
                - "Run the thirty-minute planning and blocker review @recurring(weekly:mon)"
                - "Escalate any item blocked for two weeks to the person who can clear it"
            - name: Quarterly data team roadmap and objectives
              description: |-
                ## Purpose
                A roadmap is how the team trades reactive work for planned work that business units can count on. Setting three to five objectives each quarter, tied to company priorities and sized against real capacity from the time audit, gives stakeholders a date to plan around and gives you a fair reason to decline work that does not fit.

                ## Milestones
                1. Three to five quarterly objectives, each linked to a named company priority and a business owner.
                2. Each objective sized in team weeks against the capacity left after support and maintenance.
                3. The draft roadmap reviewed with business unit leads before it is final.
                4. A mid-quarter checkpoint and an end-of-quarter scorecard showing what shipped.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each quarter has a published roadmap of three to five objectives with business owners, and a scorecard of what shipped against it."
                cadence: cyclic
              tasks:
                - "List company priorities for the coming quarter from leadership documents"
                - "Draft three to five objectives sized in team weeks"
                - "Review the draft roadmap with each business unit lead"
                - "Publish the roadmap and score the previous quarter @recurring(quarterly)"
            - name: Monthly business unit partner check-ins
              description: |-
                ## Purpose
                Embedded or not, the team needs a standing conversation with each business unit it serves, separate from the stream of individual requests. A monthly forty-five-minute check-in with each unit lead, covering upcoming decisions, what last month's work changed and what is coming next, keeps priorities aligned and spots demand before it becomes an emergency.

                ## Milestones
                1. A named data partner assigned to each business unit.
                2. A monthly check-in booked with each unit lead, with a fixed three-part agenda.
                3. Upcoming decisions from each unit captured and fed into roadmap planning.
                4. Six months of check-in notes kept for every unit.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every business unit served has had a monthly check-in with its data partner for six months, with notes and upcoming decisions recorded."
                cadence: rolling
              tasks:
                - "Assign a named data partner to each business unit"
                - "Agree a three-part agenda: upcoming decisions, recent impact, next work"
                - "Hold each unit's check-in and log its upcoming decisions @recurring(monthly:12)"
                - "Bring the decisions list into the next roadmap planning session"
            - name: Peer review standard for analysis before it ships
              description: |-
                ## Purpose
                A single wrong join in a board pack can cost the team a year of credibility. A light peer review standard, scaled by stakes, means anything going to executives, customers or regulators gets a second pair of eyes on logic, numbers and wording, while low-stakes work still moves fast.

                ## Milestones
                1. Three review levels defined by audience and stakes, with what each requires.
                2. A short review checklist covering question framing, data sources, logic, numbers and wording.
                3. Reviewers assigned on rotation so review load is shared fairly.
                4. A monthly sample of shipped work checked to see whether the standard was followed.

                ## Notes
                Code review in version control covers models and pipelines. This standard is for the analysis and narrative that sit on top of them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every high-stakes analysis shipped in the last quarter has a recorded peer review, confirmed by monthly sample checks."
                cadence: rolling
              tasks:
                - "Define three review levels by audience and stakes"
                - "Write a one-page review checklist for analysis and narrative"
                - "Set up a reviewer rotation across the team"
                - "Sample five shipped pieces and check each was reviewed @recurring(monthly:18)"
            - name: Running log of decisions the team influenced
              description: |-
                ## Purpose
                Impact evaporates within weeks: by budget time nobody remembers that the pricing change came from your team's analysis. Logging each decision the team's work informed, with the owner, the date and a rough value, builds the evidence base for every impact report, promotion case and budget request.

                ## Milestones
                1. A log with columns for date, decision, business owner, team members involved, evidence used and estimated value.
                2. Entries added by the whole team, not only the manager.
                3. Each entry confirmed with the decision owner in one line.
                4. At least one entry per business unit served each quarter, or a note on why not.

                ## Notes
                Start from the **Metrics log** template. Record decisions the work changed, including decisions not to do something, rather than outputs such as dashboards shipped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision log holds at least one confirmed entry per business unit per quarter, each naming the decision owner and an estimated value."
                cadence: rolling
              tasks:
                - "Set up the decision log with the six agreed columns"
                - "Show the team what counts as a decision rather than an output"
                - "Add the week's influenced decisions to the log @recurring(weekly:fri)"
                - "Confirm each new entry with the decision owner in a short message"
            - name: Quarterly impact report to the leadership team
              description: |-
                ## Purpose
                Leadership rarely sees the data team's work directly; it sees costs and the occasional broken number. A two-page quarterly report covering decisions influenced, roadmap delivery, reliability and what the team needs next makes its value visible in the language executives use.

                ## Milestones
                1. A fixed two-page format: headline decisions, roadmap scorecard, reliability, risks and asks.
                2. Three to five headline decisions drawn from the decision log, each confirmed by its owner.
                3. The report sent to the leadership team within two weeks of quarter end.
                4. One question or follow-up from leadership recorded and answered each quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly impact reports reach leadership within two weeks of quarter end, each with at least three confirmed decisions."
                cadence: cyclic
              tasks:
                - "Agree the two-page report format with your manager"
                - "Pick three to five headline decisions from the decision log"
                - "Ask the agent to draft the narrative from the log and roadmap scorecard"
                - "Send the impact report to the leadership team @recurring(quarterly)"
            - name: Monthly team workload and health pulse
              description: |-
                ## Purpose
                Burnout on data teams is quiet: the person fixing the finance model at midnight rarely says so until they resign. A five-question anonymous pulse each month on workload, clarity, growth, support and intent to stay, tracked as a trend, warns you months before an exit interview would.

                ## Milestones
                1. Five pulse questions agreed and sent anonymously each month.
                2. Results tracked as a trend line rather than read as single scores.
                3. Any drop of more than one point discussed openly at the next team meeting.
                4. One action taken in response to the pulse each quarter and reported back.

                ## Notes
                With fewer than five people, anonymity is not real. Use one-to-ones instead and say so.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly pulses are run, with trends shared and at least two actions reported back to the team."
                cadence: rolling
              tasks:
                - "Write five pulse questions on workload, clarity, growth, support and intent to stay"
                - "Set up an anonymous form that hides results below five responses"
                - "Send the pulse and chart the results @recurring(monthly:22)"
                - "Share the trend and one action at the next team meeting"
            - name: Weekly support rota that protects deep work
              description: |-
                ## Purpose
                If every analyst answers every quick question, nobody gets four uninterrupted hours to build anything. Rotating one person each week onto interrupt duty, covering broken numbers, urgent pulls and stakeholder pings, lets the rest of the team protect focus time while support still gets a fast, named response.

                ## Milestones
                1. A rota with one person on interrupt duty each week, sized to the team.
                2. A clear list of what the rota person handles and what goes onto the roadmap instead.
                3. A handover note at the end of each week listing open issues.
                4. Focus time for the rest of the team measurably higher than in the time audit.

                ## Notes
                Count the rota week as planned capacity. Someone on support who is also expected to deliver roadmap work is simply doing two jobs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly support rota has run for twelve weeks with handover notes, and other team members log more focus time than in the time audit."
                cadence: rolling
              tasks:
                - "Draft the rota and the list of what the rota person handles"
                - "Announce the rota and its contact channel to stakeholders"
                - "Hand over open support issues to the next person @recurring(weekly:thu)"
                - "Compare focus hours with the original time audit after twelve weeks"
            - name: Half-yearly performance reviews for data roles
              description: |-
                ## Purpose
                Reviewing an analyst on how many dashboards they built, or a data scientist on model accuracy alone, rewards the wrong things. A twice-yearly review against the career ladder, using evidence from one-to-one notes, peer feedback and the decision log, gives people a fair picture of where they stand and what would move them up.

                ## Milestones
                1. Review timing agreed: a mid-year development check and a year-end assessment.
                2. Evidence gathered for each person from one-to-ones, peer feedback and the decision log.
                3. Ratings calibrated across managers, or with your own manager, before they are shared.
                4. Every person leaving their review with two or three written goals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every team member has had a mid-year and a year-end review against the ladder, with calibrated outcomes and written goals."
                cadence: cyclic
              tasks:
                - "Collect peer feedback from two colleagues for each person"
                - "Run the mid-year development check-ins @recurring(yearly)"
                - "Calibrate year-end ratings before any are shared"
                - "Hold year-end reviews and record each person's goals @recurring(yearly)"
            - name: Coaching analysts to frame the business question
              description: |-
                ## Purpose
                The commonest failure in analytics is a correct answer to the wrong question. Teaching analysts to restate each request as a decision, a decision owner, the options on the table and the evidence that would change the choice, before they write any SQL, saves days of rework and makes the work land.

                ## Milestones
                1. A one-page framing template: decision, owner, options, evidence needed and deadline.
                2. Each analyst coached through framing three live requests with you or a senior peer.
                3. Framing notes attached to every roadmap item and significant piece of work.
                4. A fall in rework checked at the next time audit or retrospective.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every analyst has framed three live requests using the template with coaching, and framing notes appear on all new roadmap items."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page framing template with five headings"
                - "Walk one analyst through framing a live request this week"
                - "Coach each analyst through three framings over the next month"
                - "Add a framing note field to the team's work board"
            - name: Managing uncertain data science work in timeboxes
              description: |-
                ## Purpose
                Exploratory modelling does not fit neat sprints: some ideas die in a week and others need a quarter. Learning to run data science work as timeboxed bets with explicit stop criteria, staged checkpoints and an honest go or no-go lets you give stakeholders dates without forcing scientists to pretend they know the outcome.

                ## Milestones
                1. Two or three pieces on managing research-style work read, with notes on what applies.
                2. A bet format adopted: question, timebox, checkpoint dates, success criteria and stop criteria.
                3. Two live data science projects run under the format, each with a recorded go or no-go.
                4. Lessons written up and shared with the team and the stakeholders involved.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two data science projects have run as timeboxed bets with written stop criteria and a recorded go or no-go decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read two pieces on managing research work and note what applies"
                - "Write a one-page bet format with stop criteria"
                - "Agree a timebox and checkpoints for the next modelling project"
                - "Hold the go or no-go meeting and record the decision"
            - name: Giving useful feedback on analytical work
              description: |-
                ## Purpose
                Feedback such as make it clearer teaches nothing. Practising specific, timely feedback on analysis, treating the question, the method, the numbers and the story separately, helps analysts improve faster and makes reviews feel less personal.

                ## Milestones
                1. A feedback structure adopted that separates question, method, numbers and narrative.
                2. Specific written feedback given on at least ten pieces of work over two months.
                3. Each team member asked how useful your feedback has been, with answers noted.
                4. One change made to how you give feedback based on what they said.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written feedback has been given on ten pieces of work in two months, and each report's view of its usefulness is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a feedback structure that splits question, method, numbers and narrative"
                - "Give written feedback on one piece of analysis this week"
                - "Keep a tally of feedback given over two months"
                - "Ask each report in a one-to-one how useful your feedback has been"
            - name: Expressing data work in business value terms
              description: |-
                ## Purpose
                Executives fund outcomes, not queries run or models deployed. Learning to estimate the value of analytics work, such as revenue protected, cost avoided, hours saved or risk reduced, with ranges and stated assumptions, makes roadmap trade-offs and impact reports credible to finance.

                ## Milestones
                1. A simple value estimation method with four categories and a rule for ranges.
                2. Value estimates written for five past pieces of work and checked with a finance partner.
                3. Estimates attached to every objective in the next roadmap.
                4. A short guide for the team on estimating value without overclaiming.

                ## Notes
                Use conservative ranges and credit shared outcomes honestly. One inflated claim discovered by finance damages every later number.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five past projects carry finance-checked value ranges, and every objective in the next roadmap has a value estimate."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick four value categories that fit your business"
                - "Estimate the value of five past projects with low and high ranges"
                - "Check the estimates with your finance partner"
                - "Write a one-page value estimation guide for the team"
            - name: Staying technically credible as a data manager
              description: |-
                ## Purpose
                Managers who stop touching the stack lose the ability to judge estimates, spot shaky methods or back their team in technical arguments. Keeping a small, protected hands-on practice, such as reviewing a pull request, reading the model behind a key metric or pairing on a query each month, keeps judgement sharp without taking work from the team.

                ## Milestones
                1. A monthly hands-on slot protected in the calendar.
                2. One pull request or model reviewed each month, with comments that add value.
                3. One new tool or technique the team uses learned well enough to explain.
                4. No critical path work owned by you, so you never become the bottleneck.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Six consecutive months each include one reviewed pull request or model, with no critical path task assigned to you."
                cadence: rolling
              tasks:
                - "Block two hours a month in the calendar for hands-on work"
                - "Review one pull request or model in the repository @recurring(monthly:26)"
                - "Pick one tool the team uses that you cannot yet explain"
                - "Check that no critical path task is assigned to you"
            - name: Individual development plans for each team member
              description: |-
                ## Purpose
                Generic training budgets get spent on whatever course is advertised that week. A written plan per person, linking their target level on the ladder to two or three stretch assignments and specific learning, turns development into work they actually do and you can actually support.

                ## Milestones
                1. A development plan for each person with goals, stretch assignments and learning.
                2. Every plan linked to a named gap from the skills matrix or the career ladder.
                3. At least one stretch assignment per person built into the roadmap.
                4. Plans reviewed each quarter in one-to-ones and updated.

                ## Notes
                Start from the **Development plan** template. Stretch assignments usually teach more than courses, so budget time for both.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every team member has a written development plan linked to a ladder or skills gap, reviewed at least once a quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each person to draft their own two or three development goals"
                - "Link each goal to a gap from the skills matrix or ladder"
                - "Build one stretch assignment per person into the next roadmap"
                - "Review each plan in a one-to-one @recurring(quarterly)"
            - name: Protected learning time and team training budget
              description: |-
                ## Purpose
                Tools and methods in data move quickly, and teams that never get study time slowly fall behind the problems they are asked to solve. Protecting a few hours a month per person, with a small shared budget and a short show-and-tell of what was learned, keeps skills current and spreads them across the team.

                ## Milestones
                1. Learning hours per person per month agreed with your manager.
                2. A training budget per person set and the approval rule written down.
                3. A monthly session where someone shares what they learned.
                4. Learning hours actually used tracked for six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly show-and-tell sessions are held and learning hours used are tracked against the agreed allowance."
                cadence: rolling
              tasks:
                - "Agree monthly learning hours per person with your manager"
                - "Write a one-paragraph rule for approving training spend"
                - "Host the team's monthly learning show-and-tell @recurring(monthly:5)"
                - "Check learning hours used against the allowance after six months"
            - name: Hiring loop for data roles with structured scorecards
              description: |-
                ## Purpose
                Unstructured interviews for data roles tend to hire whoever is most like the interviewer or best at puzzle questions, not who will do the job well. A loop with defined stages, a scorecard per competency and trained interviewers makes hiring faster, fairer and easier to defend when a candidate is turned down.

                ## Milestones
                1. Interview stages defined for each role, each assessing named competencies.
                2. A scorecard with behavioural anchors for every competency.
                3. Every interviewer briefed on the scorecard and on common interview biases.
                4. A debrief format in which scores are submitted before discussion.
                5. Time to hire and offer acceptance tracked for the next five hires.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each data role has a documented interview loop and scorecard, used with written scores for the next five hires."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the four to six competencies each role must show"
                - "Assign each competency to one interview stage"
                - "Write a scorecard with behavioural anchors per competency"
                - "Brief every interviewer on scoring before the next loop"
                - "Require written scores before each hiring debrief"
            - name: Realistic case study exercise for data interviews
              description: |-
                ## Purpose
                Take-home tasks that eat a weekend put off strong candidates with caring duties or second jobs, while brainteasers tell you nothing about analysis. A ninety-minute case built from an anonymised version of a real business question, with a clear marking guide, shows how candidates frame, query and explain.

                ## Milestones
                1. A case exercise per role built from an anonymised real question and dataset.
                2. A marking guide covering framing, technical approach, accuracy and communication.
                3. The exercise trialled on two current team members and timed.
                4. The case used in live interviews, with candidate feedback collected.

                ## Notes
                Remove all customer and employee data from the case dataset, and state the maximum time you expect candidates to spend.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timed, anonymised case exercise with a marking guide exists for each role and has been trialled on two team members."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one real past question that suits each role"
                - "Build an anonymised dataset and a ninety-minute brief"
                - "Write a marking guide for framing, approach, accuracy and communication"
                - "Trial the case on two team members and adjust the timing"
            - name: Capacity split between roadmap, support and maintenance
              description: |-
                ## Purpose
                When a team plans as if every hour goes on roadmap work, every quarter ends late and the maintenance backlog grows. Setting an explicit split, for example sixty percent roadmap, twenty-five percent support and fifteen percent maintenance, based on the time audit, makes plans honest and gives you a number to defend.

                ## Milestones
                1. The current split measured from the time audit.
                2. A target split agreed with your manager and written into the charter.
                3. Roadmap capacity in the next plan calculated from the target split.
                4. The actual split checked against the target at the end of the quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target capacity split is agreed and recorded in the charter, and the next quarter's roadmap is sized from it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the current split from the time audit summary"
                - "Propose a target split with reasons to your manager"
                - "Size the next roadmap using only the agreed roadmap share"
                - "Compare the actual split with the target at quarter end"
            - name: Contractor or consultancy decision for specialist data work
              description: |-
                ## Purpose
                Some work, like a one-off marketing mix model or a platform migration, needs skills the team will not use again for years. Comparing a permanent hire, a contractor and a consultancy on cost, speed, knowledge retention and risk avoids both permanent hires for temporary needs and consultants who leave nothing behind.

                ## Milestones
                1. The specialist need described with scope, duration and skills required.
                2. Hire, contractor and consultancy options compared on cost, speed, knowledge retention and risk.
                3. A decision recorded with its reasons.
                4. If external help is chosen, a knowledge handover requirement written into the contract.

                ## Notes
                Agree data access, confidentiality and intellectual property terms with your procurement and legal teams before any external party touches company data.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares hire, contractor and consultancy options, and any external contract includes a knowledge handover."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a half-page brief of the specialist need"
                - "Get rough costs for a hire, a contractor and a consultancy"
                - "Score the three options on cost, speed, retention and risk"
                - "Record the decision and the handover requirement"
            - name: Reducing single points of knowledge on the team
              description: |-
                ## Purpose
                Every data team has the one person who understands the revenue model or the old finance pipeline, and every holiday they take is a risk. Finding those single points and pairing, documenting or rotating them before someone leaves protects the business and gives the expert room to grow.

                ## Milestones
                1. A list of critical systems, models and relationships, with the people who understand each.
                2. Every item known by only one person flagged.
                3. A backup named for each flagged item, with pairing or documentation scheduled.
                4. The list reviewed quarterly, with the number of single points falling.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every critical system or model on the list has at least two people able to run it, confirmed at a quarterly review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List critical models, pipelines and stakeholder relationships"
                - "Mark each item that only one person understands"
                - "Pair a named backup with the expert for each flagged item"
                - "Review the list and count remaining single points @recurring(quarterly)"
            - name: Ownership split between analysts and analytics engineers
              description: |-
                ## Purpose
                Without a clear line, analysts write fragile logic inside dashboards and analytics engineers end up building one-off reports. Agreeing who owns which layers of the stack, where handoffs happen and how an analyst's prototype becomes a maintained model removes duplicate work and a lot of friction.

                ## Milestones
                1. Layers of the stack listed with an owning role for each.
                2. A promotion path written for turning an analyst's prototype into a maintained, tested model.
                3. Three recent pieces of work replayed against the agreement to test it.
                4. The agreement adopted and reviewed after one quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written ownership agreement covers every layer of the stack and has been tested against three recent projects."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the layers of the stack from source to dashboard"
                - "Agree an owning role for each layer with both groups"
                - "Write the promotion path from prototype to maintained model"
                - "Replay three recent projects against the agreement"
            - name: Embedding an analyst in a business unit
              description: |-
                ## Purpose
                Placing an analyst inside a business unit, sitting in its meetings and learning its numbers, often does more for adoption than any dashboard. Done badly, the analyst becomes the unit's personal report writer and loses touch with the team. A written placement with goals, a time split and a review at ninety days gets the benefits without the drift.

                ## Milestones
                1. A placement brief agreed with the unit lead: goals, time split, meetings attended and success measures.
                2. The analyst attending the unit's planning meetings within the first month.
                3. A weekly touchpoint with the central team kept for standards and support.
                4. A ninety-day review with the unit lead deciding whether to continue, change or end the placement.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An analyst placement has a signed-off brief and a ninety-day review with the unit lead, with the outcome recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose the business unit with the clearest upcoming decisions"
                - "Agree a placement brief with the unit lead"
                - "Add the analyst to the unit's planning meetings"
                - "Hold the ninety-day review and record the decision"
            - name: Stop-doing review of the team's standing commitments
              description: |-
                ## Purpose
                Recurring reports, weekly extracts and legacy models accumulate until they eat a fifth of the team's capacity. Once a year, list every standing commitment, ask its consumer whether they still use it and what losing it would cost them, and retire the ones nobody defends.

                ## Milestones
                1. Every standing commitment listed with owner, consumer, frequency and hours per month.
                2. Each consumer asked whether they still need it.
                3. Commitments with no defender retired with a month's notice.
                4. Hours freed recorded and moved to roadmap capacity.

                ## Notes
                Include manual extracts and favours that quietly became permanent. They are often the biggest drain and the easiest to stop.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual stop-doing review has listed every standing commitment, retired those without a defender and recorded the hours freed."
                cadence: cyclic
              tasks:
                - "List every recurring report, extract and model the team maintains"
                - "Estimate the monthly hours each one costs"
                - "Ask each consumer whether they still use it"
                - "Run the full stop-doing review @recurring(yearly)"
            - name: First month plan for each new data hire
              description: |-
                ## Purpose
                New analysts commonly spend their first weeks waiting for access and guessing which tables to trust. A prepared first month, with access requested before day one, a named buddy, a curated reading list of key models and a small real deliverable by week four, gets people useful and confident fast.

                ## Milestones
                1. Access to the warehouse, repositories and BI tools requested a week before the start date.
                2. A buddy named and a first-week schedule shared before day one.
                3. A reading list of the ten most important models, dashboards and documents.
                4. A small real deliverable shipped by the end of week four.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The most recent new hire had full access on day one and shipped a real deliverable by the end of their fourth week."
                cadence: cyclic
              tasks:
                - "Request all system access a week before the start date"
                - "Name a buddy and share the first-week schedule"
                - "Compile a reading list of the ten key models and dashboards"
                - "Choose a small real deliverable for week four"
            - name: Annual data team strategy offsite
              description: |-
                ## Purpose
                Day-to-day delivery leaves no room to ask whether the team is working on the right things at all. A one or two-day offsite each year to review the charter, last year's impact, the skills matrix and next year's company priorities gives the team a shared view of where it is going and why.

                ## Milestones
                1. A date, venue and agenda set at least six weeks ahead.
                2. Pre-reads prepared: decision log summary, capacity split, pulse trend and company priorities.
                3. Three to five strategic themes for the year agreed by the team.
                4. Outcomes written up within a week and fed into the first quarterly roadmap.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An offsite has been held with pre-reads, and its three to five themes appear in the following quarter's roadmap."
                cadence: cyclic
              tasks:
                - "Pick a date at least six weeks out and book a space"
                - "Prepare pre-reads from the decision log, capacity split and pulse trend"
                - "Facilitate the session to agree three to five themes"
                - "Plan next year's offsite date and agenda @recurring(yearly)"
            - name: Presenting the data strategy to the executive team
              description: |-
                ## Purpose
                Strategy that lives only in the data team's documents will not survive the next budget round. Preparing a twenty-minute executive presentation on where data is helping, where it is holding the company back, the three bets for the next year and what you need from them, then rehearsing it with an ally, gives the strategy a sponsor.

                ## Milestones
                1. A slot on the executive agenda confirmed with a date.
                2. A ten-slide deck covering current state, gaps, three bets, costs and asks.
                3. The deck rehearsed with a friendly executive and revised.
                4. Decisions and actions from the meeting recorded and followed up within a week.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The data strategy has been presented to the executive team, and a written summary of decisions was sent within a week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask your manager for a slot on the executive agenda"
                - "Draft a ten-slide deck with three bets and clear asks"
                - "Rehearse the presentation with a friendly executive"
                - "Send a written summary of decisions within a week"
            - name: Annual budget case for the data function
              description: |-
                ## Purpose
                Budget rounds reward the teams that arrive with evidence, and data teams of all people should. Building the annual case from the headcount plan, decision log and capacity split, with clear options at three funding levels, makes it easy for finance to say yes to something rather than cutting across the board.

                ## Milestones
                1. The budget timetable and template obtained from finance.
                2. Three funding options prepared, each showing what it delivers and what stops.
                3. The case reviewed with your finance partner before submission.
                4. The submitted case and the final outcome filed for next year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A budget case with three funding options was submitted on time, and it and the outcome are filed for next year."
                cadence: cyclic
              tasks:
                - "Get the budget timetable and template from finance"
                - "Prepare three funding options with deliverables for each"
                - "Review the case with your finance partner before submitting"
                - "Start the next budget case from this year's file @recurring(yearly)"
            - name: Quarterly showcase of data team work for the business
              description: |-
                ## Purpose
                Most of the company never sees the analysis that changed a decision, only the decision. A forty-five-minute quarterly showcase where team members present two or three pieces of work to business colleagues builds demand for the right kind of work and gives the team a visible stage.

                ## Milestones
                1. A quarterly date set and an open invitation sent to all business units.
                2. Two or three pieces of work chosen, presented by the people who did them.
                3. Each talk framed around the decision it informed, not the method.
                4. Attendance and follow-up requests recorded each quarter.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four quarterly showcases have been held, each with at least two team presenters and attendance recorded."
                cadence: cyclic
              tasks:
                - "Pick a date and send an open invitation to all business units"
                - "Choose two or three pieces of work with clear decisions behind them"
                - "Coach presenters to lead with the decision, not the method"
                - "Schedule the next showcase and choose its presenters @recurring(quarterly)"
            - name: Annual pay and promotion round for data roles
              description: |-
                ## Purpose
                Market pay for data skills moves fast, and a team paid below it loses its best people first. Preparing for the yearly round with market benchmarks from HR, promotion cases written against the ladder and a fair spread of any increase pool protects retention and keeps decisions explainable.

                ## Milestones
                1. Market benchmarks for each role obtained from HR.
                2. Every promotion case written against the career ladder with evidence.
                3. The increase pool allocated with a written rationale per person.
                4. Each person told their outcome in a one-to-one before any general announcement.

                ## Notes
                Pay decisions follow your organisation's policy and HR's guidance. Your job is to prepare evidence and make the case, not to promise outcomes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every eligible person has a written promotion case or pay rationale, and each heard their outcome in a one-to-one first."
                cadence: cyclic
              tasks:
                - "Ask HR for current market benchmarks for each data role @recurring(yearly)"
                - "Write promotion cases against the ladder for eligible people"
                - "Draft the allocation of the increase pool with reasons"
                - "Tell each person their outcome in a one-to-one first"
            - name: First 90 days as a new head of data
              description: |-
                ## Purpose
                New data leads are judged quickly, often on whether one long-running complaint gets fixed. A 30, 60 and 90-day plan that balances listening, one visible early win and a first draft of strategy gives your new manager confidence and stops you reorganising before you understand the place.

                ## Milestones
                1. A thirty-day listening plan covering the team, stakeholders, the data platform and the backlog.
                2. One visible early win chosen and delivered by day sixty.
                3. A written diagnosis of strengths, gaps and risks shared with your manager by day sixty.
                4. A draft strategy and first roadmap presented by day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Resist changing the team structure in the first ninety days unless something is clearly broken.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written diagnosis was shared by day sixty and a draft strategy and roadmap presented to your manager by day ninety."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree with your manager what success at ninety days looks like"
                - "Book introductory conversations with every team member"
                - "Pick one visible early win you can deliver by day sixty"
                - "Write and share your diagnosis by day sixty"
                - "Present a draft strategy and roadmap by day ninety"
            - name: Senior analyst to first-time data manager transition
              description: |-
                ## Purpose
                Promoted analysts usually keep doing the hard technical work themselves, because it is what they are good at, and the team quietly waits on them. Planning the transition, with what to hand over, what to learn and how to spend your own week, helps you become a manager rather than a tired senior analyst with direct reports.

                ## Milestones
                1. A list of technical work you still own, with a named person taking each piece.
                2. Your calendar rebalanced so at least half your week goes on people, planning and stakeholders.
                3. A management mentor outside your team agreed.
                4. Feedback from your reports on your first three months collected and acted on.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All technical work you owned has a named new owner and your reports' feedback on your first three months is recorded with actions."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every piece of technical work you still own"
                - "Hand each piece to a named team member with a date"
                - "Ask a manager outside the data team to mentor you"
                - "Ask your reports for feedback on your first three months"
            - name: Inheriting a data team with low stakeholder trust
              description: |-
                ## Purpose
                Taking over a team after a run of wrong numbers, missed deadlines or a public data mistake means the first job is credibility, not ambition. Finding the three most damaging failures, fixing them visibly and reporting reliability openly for a few months rebuilds trust faster than any new strategy deck.

                ## Milestones
                1. The three most damaging recent failures identified from stakeholder conversations.
                2. A named owner and fix date for each, communicated to affected stakeholders.
                3. A monthly reliability note sent to key stakeholders for six months.
                4. Stakeholder satisfaction measured again with the original listening questions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three named failures are fixed, six monthly reliability notes have been sent and stakeholder satisfaction has been measured again."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask five key stakeholders which data failures hurt them most"
                - "Pick the three most damaging failures and name an owner for each"
                - "Tell affected stakeholders the fix and its date"
                - "Send a short reliability note to key stakeholders @recurring(monthly:8)"
            - name: Leading a data team through a reorganisation
              description: |-
                ## Purpose
                Reorganisations in large organisations often move data people under new business leaders, merge teams after an acquisition or split platform from analytics, and the data team tends to hear last. Planning communication, protecting critical work and keeping people informed through the change reduces attrition and keeps key reports running.

                ## Milestones
                1. What is changing, what is not and what is still unknown written down for the team.
                2. Critical deliverables and support duties protected with named owners through the change.
                3. One-to-ones held with every affected person within a week of the announcement.
                4. A ninety-day check on attrition, workload and open questions after the change.

                ## Notes
                Share only what has been confirmed and agreed with HR. Saying you do not know yet, and that you will tell them when you do, is better than guessing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written change note exists, every affected person had a one-to-one within a week and a ninety-day check is recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write what is changing, unchanged and unknown on one page"
                - "Name owners for critical deliverables during the change"
                - "Hold one-to-ones with every affected person within a week"
                - "Check attrition, workload and open questions after ninety days"
            - name: Running a data team across several time zones
              description: |-
                ## Purpose
                Teams split across three or more time zones lose hours to handoffs and quietly exclude whoever is always on the late call. Setting overlap hours, rotating meeting times, writing decisions down and handing work off in writing lets a distributed team work as one.

                ## Milestones
                1. Core overlap hours agreed and shown in everyone's calendar.
                2. Recurring meetings rotated so no region always takes the inconvenient slot.
                3. A written decision record and an asynchronous update format in use.
                4. A handoff note format used for work passed between regions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Core overlap hours are in every calendar, meeting times rotate between regions and handoff notes are used for a full quarter."
                cadence: rolling
              tasks:
                - "Map each team member's working hours on one chart"
                - "Agree two to three hours of core overlap"
                - "Set recurring meetings to rotate between regions"
                - "Introduce a short written handoff note between regions"
            - name: Holding the team together through a headcount freeze
              description: |-
                ## Purpose
                Freezes and cost cuts tend to land on data teams early because their value is hard to see. Re-planning the roadmap to fit the people you have, being clear with stakeholders about what stops, and protecting growth for the people who remain keeps the team effective until hiring reopens.

                ## Milestones
                1. The roadmap re-planned to fit current capacity, with what stops written down.
                2. Stakeholders told what will not be delivered and why.
                3. Development plans kept alive through stretch work rather than new hires.
                4. Workload and attrition risk checked for every person each month.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A re-planned roadmap with a written stop list has been shared with every affected stakeholder."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Re-plan the roadmap using only current capacity"
                - "Write a short list of work that stops, with reasons"
                - "Tell each affected stakeholder what will not be delivered"
                - "Review each person's workload in their next one-to-one"
            - name: Federated data operating model for an enterprise
              description: |-
                ## Purpose
                Large organisations with several divisions rarely get one central data team to serve everyone well, but fully separate divisional teams build incompatible numbers. A federated model, with a central platform, standards and community plus divisional data teams holding clear decision rights, gets consistency without a bottleneck.

                ## Milestones
                1. Current data teams across divisions mapped with size, reporting line and tooling.
                2. Decision rights agreed: what the centre sets, what divisions decide and what is shared.
                3. A cross-divisional data leadership forum meeting regularly.
                4. A community of practice running for analysts, engineers and scientists across divisions.
                5. The model reviewed after a year, with changes recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written decision rights model is agreed across divisions, and a leadership forum and community of practice have each met at least three times."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map every data team across divisions with size and reporting line"
                - "Draft decision rights for the centre and for divisions"
                - "Set up a monthly data leadership forum across divisions"
                - "Launch a community of practice with a first open session"
            - name: Return on investment model for the data function
              description: |-
                ## Purpose
                Asked what the data function returns, most leaders give anecdotes. Building a model that sets the team's total cost against conservatively estimated value from the decision log, with assumptions finance has reviewed, gives a defensible range and shows which kinds of work pay back best.

                ## Milestones
                1. Total cost of the data function, including people, tools and platform, agreed with finance.
                2. A year of decision log value categorised and estimated with low and high ranges.
                3. Assumptions documented and reviewed by a finance partner.
                4. Value per type of work compared to guide next year's priorities.

                ## Notes
                Present the result as a range with the assumptions in plain view. A single precise figure invites challenge and undermines the rest.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A finance-reviewed model sets the data function's total cost against a value range, with assumptions documented."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree the total cost of the data function with finance"
                - "Categorise a year of decision log entries by type of value"
                - "Estimate low and high value ranges for each category"
                - "Review the assumptions with your finance partner"
            - name: Building a layer of data team leads
              description: |-
                ## Purpose
                Past about eight direct reports, a data manager stops coaching anyone well. Creating team lead roles for analytics, analytics engineering or data science, choosing and developing the first leads, and learning to manage through them lets the function grow without you becoming the bottleneck.

                ## Milestones
                1. The trigger point and structure for team lead roles agreed with HR.
                2. First leads chosen through an open, criteria-based process.
                3. Each new lead given a development plan and a monthly coaching session with you.
                4. A weekly leadership meeting with the leads running.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Team lead roles are defined with HR, the first leads appointed through open selection and a weekly leads meeting is running."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count your direct reports and note where coaching has slipped"
                - "Agree team lead role criteria with HR"
                - "Run an open selection for the first team leads"
                - "Set up a weekly meeting with the new leads"
            - name: Succession plan for the head of data and key roles
              description: |-
                ## Purpose
                If the head of data or the only senior analytics engineer left next month, most organisations would discover how fragile they are the hard way. A succession plan naming ready-now and ready-later candidates for each key role, with development steps, protects the function and shows people a future here.

                ## Milestones
                1. Key roles listed, including your own.
                2. Ready-now and ready-later candidates named for each, or a gap noted.
                3. Development steps for each candidate built into their plans.
                4. The plan reviewed with your manager and HR each year.

                ## Notes
                Keep the plan confidential between you, your manager and HR. Discuss growth with candidates without promising roles.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A confidential succession plan names candidates or gaps for every key role and has been reviewed with HR within the last year."
                cadence: cyclic
              tasks:
                - "List the key roles whose loss would hurt most, including yours"
                - "Name ready-now and ready-later candidates for each"
                - "Add development steps to each candidate's plan"
                - "Review the succession plan with your manager and HR @recurring(yearly)"
---

# Data Team Management

This area is for managers and heads of data who lead analysts, analytics engineers and data scientists, whether in a growing company or across a large enterprise. It starts with foundations (a charter, a time audit, stakeholder interviews, the team structure, role profiles and a career ladder), then the operating rhythms, the management skills worth practising, decisions on hiring, capacity and embedding, the dated events of the year, situations such as a first head of data role or a reorganisation, and specialist work like a federated operating model and succession.

What repeats is weekly one-to-ones, Monday planning, a support rota handover and a decision log, monthly partner check-ins, review sampling and a team pulse, quarterly roadmaps, impact reports and showcases, and yearly reviews, pay rounds, budgets and an offsite. The 1:1, Skills matrix, Development plan, Metrics log, Onboarding plan and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
