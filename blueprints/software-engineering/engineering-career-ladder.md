---
id: software-engineering.engineering-career-ladder
name: Engineering Career Ladder
description: "A working engineering career ladder: clear levels and competencies, a technical track as strong as management, promotion cycles that are fair and calibrated, and engineers who know what the level above looks like."
category: business
version: 1.0.0
tags: [software-engineering, engineering-career-ladder, manager, enterprise, engineer, levelling, promotions, staff-engineer]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - development-plan
    - meeting-notes
    - reading-queue
    - metrics-log
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engineering Career Ladder
          description: "Defining levels, expectations and promotion criteria for engineers, including a technical track that does not force people into management."
          projects:
            - name: Audit of current engineering levels and titles
              description: |-
                ## Purpose
                Before anyone writes a new ladder, someone has to see the mess the old one left: two people with the same title doing very different work, levels granted at hire that were never revisited, and teams that invented their own names. A single spreadsheet of every engineer, their title, level, tenure in level and manager turns arguments about fairness into a picture everyone can look at.

                ## Milestones
                1. A roster of every engineer with current title, level, team, manager and date of last level change.
                2. Clusters of inconsistency marked, such as matching titles on different pay bands or teams using private title schemes.
                3. Tenure in level summarised by level, with anyone above four years flagged for a closer look.
                4. A one-page summary of the five biggest problems shared with the engineering leadership group.

                ## Notes
                Keep the raw roster restricted to the people who need it. The summary that circulates should describe patterns, never name individuals.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A complete levels roster and a one-page problem summary are in the hands of engineering leadership within thirty days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export title, level, team and hire date for every engineer from the people system"
                - "Add the date of each engineer's last level change from promotion records"
                - "Mark rows where title and pay band disagree"
                - "Write the one-page summary of the five biggest inconsistencies"
            - name: Ladder charter with goals and owners
              description: |-
                ## Purpose
                Ladders fail quietly when nobody agreed what they were for. Writing down the problems this ladder must solve (unclear promotions, a missing technical track, inconsistent hiring levels), who owns it and who signs off keeps the later design arguments short and stops the work drifting into a compensation project.

                ## Milestones
                1. Three to five problems the ladder must solve, each traced to evidence from the levels audit.
                2. A named owner, a small working group and an executive sponsor recorded.
                3. Explicit out-of-scope items written down, such as pay changes or performance ratings.
                4. The charter approved by the sponsor and shared with all engineering managers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off one-page charter names the ladder's goals, owner, working group and exclusions, and every engineering manager has received it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the problems from the levels audit that the ladder must fix"
                - "Invite three managers and two senior engineers into the working group"
                - "Write what the ladder will not cover in this version"
                - "Send the charter to the executive sponsor for approval"
            - name: Choosing the number of levels and the title scheme
              description: |-
                ## Purpose
                Too few levels and promotions become rare cliffs that drive people away; too many and the gaps between them are impossible to describe. Most engineering organisations settle on six to nine levels from graduate to principal, and the titles chosen now will appear on offer letters and public profiles for years, so this decision deserves comparison rather than habit.

                ## Milestones
                1. Two or three candidate structures compared, each with level count, title names and the typical years between steps.
                2. Every current engineer placed provisionally on each candidate to test for awkward gaps.
                3. One structure chosen, with titles for both the technical and management tracks.
                4. The decision and the reasons for rejecting the alternatives recorded in the ladder change log.

                ## Notes
                Numbered levels such as L3 to L8 travel well inside the company; keep public titles familiar to the market, such as Senior or Staff, so candidates and recruiters can read them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One level structure with named titles for both tracks is chosen and written up with the rejected alternatives and reasons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch three candidate level structures on a single page"
                - "Place the current roster provisionally on each candidate"
                - "Note where each candidate leaves a gap or a crowded level"
                - "Hold a decision meeting with the working group and record the choice"
            - name: Competency dimensions for every level
              description: |-
                ## Purpose
                Every ladder needs a small set of dimensions that every level is described against, typically technical skill, delivery, collaboration, and scope of influence. Choosing four or five and defining each in a sentence keeps the descriptors comparable from level to level and stops the document turning into a wish list of every good quality an engineer could have.

                ## Milestones
                1. Four or five dimensions chosen, each defined in one plain sentence.
                2. A check that each dimension can be evidenced from real work, such as design documents, reviews or incidents.
                3. Overlap between dimensions removed so no behaviour is counted twice.
                4. The dimensions laid out as the columns of a level grid.

                ## Notes
                Start from the **Skills matrix** template. Scope and impact usually separate the senior levels better than raw technical skill does.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A level grid with four or five defined dimensions exists, and the working group has agreed each one can be evidenced from ordinary work."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every quality the working group thinks a ladder should reward"
                - "Group the list into no more than five dimensions"
                - "Write a one-sentence definition for each dimension"
                - "Name two pieces of real evidence for each dimension"
            - name: Level descriptors written by scope and impact
              description: |-
                ## Purpose
                Descriptors are the heart of the ladder and the part most often written badly, with adjectives like strong, deep and excellent that every manager reads differently. Describing each level by the size of problem the engineer owns, how much guidance they need and who feels the effect of their work gives managers something they can actually compare evidence against.

                ## Milestones
                1. Every cell of the level grid filled with two to four observable behaviours.
                2. Each level differing from the one below in scope, autonomy or reach, not in adjectives.
                3. Every descriptor tested against two real engineers at that level by their managers.
                4. A full draft reviewed by at least five engineers outside the working group.

                ## Notes
                A quick test for a descriptor: could two managers disagree about whether someone meets it? If yes, rewrite it with a concrete example of the work.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every level and dimension has observable descriptors, tested against real engineers and reviewed by at least five people outside the working group."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft the descriptors for the most common level first"
                - "Write the levels directly above and below it by changing scope and autonomy"
                - "Ask two managers per level to test the draft against a real engineer"
                - "Circulate the full draft to five engineers for comments"
            - name: Splitting the staff and manager tracks
              description: |-
                ## Purpose
                Without a technical track that goes as high as management, the best engineers are pushed into managing people to get promoted, and the organisation loses a strong engineer to gain an unwilling manager. Deciding the level where the tracks split, which levels are equivalent in pay and standing, and what each track is accountable for is the single decision that most shapes how the ladder feels.

                ## Milestones
                1. The split level chosen, commonly just above senior engineer.
                2. Level equivalence written down, for example staff engineer alongside engineering manager.
                3. Accountabilities stated for each track so neither is a consolation prize.
                4. The rule for moving between tracks drafted for a later policy decision.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the split level, the equivalent levels across both tracks and the accountabilities of each, approved by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask five senior engineers whether they would want a management role to progress"
                - "Draft a two-column table of equivalent levels across both tracks"
                - "Write the accountabilities of a staff engineer and an engineering manager side by side"
                - "Take the split decision to the sponsor for approval"
            - name: Mapping current engineers onto the new levels
              description: |-
                ## Purpose
                The moment a new ladder becomes real is when every engineer finds out where they sit on it, and a careless mapping can do more damage than having no ladder at all. Mapping by manager proposal, then a calibration pass, then a rule that nobody's pay or title goes down in the transition keeps the change from feeling like a hidden demotion.

                ## Milestones
                1. Every manager has proposed a new level for each report with a short evidence note.
                2. A calibration session has reviewed every proposed level across teams.
                3. Cases where the new level is lower than the old title handled under a written no-loss rule.
                4. Each engineer told their mapped level in a private conversation before the public launch.

                ## Notes
                The usual no-loss rule: nobody's pay or title is reduced in a transition, and anyone mapped lower keeps their current title until they reach the matching level.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every engineer has a calibrated level on the new ladder and has heard it privately from their manager before launch."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Send managers the mapping sheet with an evidence column for each report"
                - "Agree the no-loss rule with the people team in writing"
                - "Run the cross-team calibration of proposed levels"
                - "Brief managers on how to tell each engineer their mapped level"
            - name: Ladder ownership and change process
              description: |-
                ## Purpose
                Left open for anyone to edit, a ladder becomes inconsistent within a year, and one that nobody can edit goes stale. A named owner, a version number on the document, a short change request form and a quarterly review of pending changes let the ladder improve without reopening the whole thing every time a manager is unhappy with a sentence.

                ## Milestones
                1. The ladder stored in one place with a version number and a change log.
                2. A change request form that asks what problem the change solves and which levels it affects.
                3. A quarterly slot in the working group's calendar to review pending requests.
                4. A rule that changes only take effect at the start of a promotion cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ladder has a version number, a public change log and a request form, and pending requests are reviewed every quarter."
                cadence: rolling
              tasks:
                - "Move the ladder to a single shared location and mark it version 1.0"
                - "Create a change request form with problem, levels affected and evidence fields"
                - "Review pending ladder change requests with the working group @recurring(quarterly)"
                - "Publish accepted changes in the change log with the cycle they take effect"
            - name: Self-assessment against your current level
              description: |-
                ## Purpose
                Engineers often learn how their manager sees their level only when a promotion is turned down. Scoring yourself against every descriptor of your current level and the one above, with a piece of evidence for each, gives you and your manager the same picture to argue about and usually turns up two or three gaps you can start on this quarter.

                ## Milestones
                1. Each descriptor at your level marked as consistently met, sometimes met or not yet, with evidence.
                2. The same done for the level above.
                3. Your manager's view collected on the same sheet and differences highlighted.
                4. Two or three gaps chosen as the focus for the next six months.

                ## Notes
                Start from the **Development plan** template. Evidence means a link or a specific piece of work, not a feeling of competence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A self-assessment with evidence for every descriptor at two levels, compared with your manager's view, names two or three focus gaps."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the descriptors for your level and the one above into one sheet"
                - "Mark each descriptor and add one piece of evidence"
                - "Ask your manager to mark the same sheet before your next one-to-one"
                - "Pick the two or three gaps to work on this half"
            - name: Promotion cycle calendar and process
              description: |-
                ## Purpose
                Promotions decided whenever a manager pushes hard enough reward the loudest managers, not the strongest engineers. Running one or two fixed cycles a year, with published dates for nominations, packets, calibration and announcements, gives every engineer the same chance and every manager the same deadline.

                ## Milestones
                1. One or two cycle dates a year agreed with the people team and published.
                2. A written process from nomination to announcement with owners for each step.
                3. A standard packet format and a nomination form available to all managers.
                4. The timeline sent to managers at least eight weeks before nominations close.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Promotion cycle dates for the year are published, and managers receive the timeline at least eight weeks before every nomination deadline."
                cadence: cyclic
              tasks:
                - "Agree this year's cycle dates with the people team"
                - "Write the step-by-step process with an owner for each step"
                - "Check the next cycle's dates against holidays and planning season @recurring(quarterly)"
                - "Send managers the cycle timeline and packet format eight weeks ahead"
            - name: Promotion calibration sessions
              description: |-
                ## Purpose
                Two managers with identical evidence will often reach different conclusions, one generous and one strict, and calibration is the meeting where those differences are found and evened out. A prepared session with a facilitator, packets read beforehand and a written decision for every case is the main defence against promotions depending on who your manager happens to be.

                ## Milestones
                1. A facilitator and a decision rule agreed, such as consensus with the director deciding ties.
                2. Every packet read by the panel before the session.
                3. A short written rationale recorded for each decision, including each not-yet.
                4. Patterns across managers noted, such as one team always proposing early.

                ## Notes
                Start from the **Meeting notes** template. Discuss the evidence in the packet, not the person's reputation, and ask the proposing manager to leave the room for the final decision on borderline cases if that is your norm.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every promotion case in each cycle has a recorded decision and rationale from a calibration session with a named facilitator."
                cadence: cyclic
              tasks:
                - "Choose a facilitator who has no candidates in this cycle"
                - "Send the packets to the panel one week before the session"
                - "Hold a calibration preparation session with the managers involved @recurring(quarterly)"
                - "Record each decision with a two-sentence rationale"
            - name: Weekly brag document for your promotion evidence
              description: |-
                ## Purpose
                By the time a promotion packet is due, most engineers have forgotten half of what they did, especially the unglamorous work of unblocking others. Spending ten minutes every Friday writing down what you shipped, decided, fixed or taught, with links, means your case writes itself and your manager has evidence on hand for every review.

                ## Milestones
                1. A brag document set up with sections matching the ladder's dimensions.
                2. At least one entry added in each of twelve consecutive weeks.
                3. Each entry linked to evidence, such as a pull request, design document or incident report.
                4. The document shared with your manager before each check-in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A brag document has entries for twelve consecutive weeks, each linked to evidence and tagged to a ladder dimension."
                cadence: rolling
              tasks:
                - "Create the brag document with one heading per ladder dimension"
                - "Add this week's work, decisions and help given, with links @recurring(weekly:fri)"
                - "Tag last month's entries with the ladder dimension each one shows @recurring(monthly:28)"
                - "Share the document with your manager before your next check-in"
            - name: Quarterly level check-in with each engineer
              description: |-
                ## Purpose
                Ordinary one-to-ones drift towards this week's work, and level conversations happen only at review time, too late to change anything. A dedicated quarterly conversation using the ladder itself, covering where the engineer is strong, the one gap that matters most and the work that could show it, keeps promotions from ever being a surprise in either direction.

                ## Milestones
                1. A short check-in format agreed: strengths, the main gap, an opportunity, and the date of the next check-in.
                2. A check-in held with every report this quarter.
                3. One concrete opportunity to show the level above agreed for each engineer.
                4. A written summary of each check-in shared with the engineer within two days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every report has had a ladder-based check-in this quarter with a written summary and one agreed opportunity."
                cadence: rolling
              tasks:
                - "Write the four-question check-in format and share it with your reports"
                - "Hold a level check-in with each engineer using the ladder @recurring(quarterly)"
                - "Send each engineer a written summary within two days"
                - "Look for one piece of upcoming work that fits each engineer's gap"
            - name: Promotion outcome fairness review
              description: |-
                ## Purpose
                Even a well-written ladder can produce unequal outcomes, with some groups promoted more slowly or held to higher evidence. Looking at promotion rates, time in level and not-yet decisions by gender, ethnicity where lawfully recorded, part-time status, location and team after every cycle shows whether the process is fair in practice, not just on paper.

                ## Milestones
                1. Promotion rate and median time in level reported for each group with enough people to be meaningful.
                2. Groups with a gap of more than a few points examined case by case.
                3. Findings and any process changes agreed with the people team and legal adviser.
                4. A summary without individual data shared with engineering leadership.

                ## Notes
                Small groups can identify individuals. Agree a minimum group size with the people team before reporting, and keep the analysis within your organisation's data protection rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "After each cycle, a fairness summary by group is produced, reviewed with the people team and shared with leadership without individual data."
                cadence: cyclic
              tasks:
                - "Agree the groups and the minimum reporting size with the people team"
                - "Pull promotion and time-in-level data for the last two cycles"
                - "Refresh the level distribution snapshot by group @recurring(quarterly)"
                - "Examine any gap case by case before drawing conclusions"
            - name: Annual ladder revision
              description: |-
                ## Purpose
                Every ladder collects small injustices as the work changes: a descriptor nobody can meet, a new role it ignores, a dimension that turned out to reward the wrong thing. A yearly revision that gathers requests, promotion feedback and calibration notes and then ships one considered version keeps the document honest without changing the rules under people mid-cycle.

                ## Milestones
                1. All change requests, calibration notes and appeal themes from the year gathered in one list.
                2. Each item accepted, rejected or deferred with a recorded reason.
                3. A new version drafted, reviewed by managers and engineers, and approved by the sponsor.
                4. The new version published with a plain summary of what changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A new ladder version with a written change summary is published once a year, before the first promotion cycle it applies to."
                cadence: cyclic
              tasks:
                - "Collect the year's change requests, calibration notes and appeal themes @recurring(yearly)"
                - "Decide each item with the working group and record the reason"
                - "Draft the revised descriptors and circulate them for comment"
                - "Publish the new version with a one-page summary of changes"
            - name: Ladder FAQ and question log
              description: |-
                ## Purpose
                Each team asks the same dozen questions: can I skip a level, does on-call count, what if my project was cancelled. Collecting questions in one place and answering them monthly in a public FAQ stops managers giving five different answers and shows engineers the ladder is a living document.

                ## Milestones
                1. A single channel or form for ladder questions announced to all engineers.
                2. A FAQ page with answers to the first twenty questions.
                3. Each answer checked with the ladder owner before publishing.
                4. Repeated questions flagged as candidates for the annual revision.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A public ladder FAQ exists, and every question received is answered or logged for revision within a month."
                cadence: rolling
              tasks:
                - "Open a form or channel for ladder questions and announce it"
                - "Write answers to the twenty questions managers hear most"
                - "Answer the month's open questions and update the FAQ @recurring(monthly:12)"
                - "Flag repeated questions for the next ladder revision"
            - name: Level and pay band alignment with the people team
              description: |-
                ## Purpose
                Levels mean little if the pay bands behind them overlap so much that a senior engineer can earn less than a mid-level one hired last month. Agreeing with the people team how each level maps to a band, and reviewing that mapping every year against market data, keeps promotions meaningful and stops level arguments becoming pay arguments in disguise.

                ## Milestones
                1. Every level on both tracks mapped to one pay band.
                2. Overlap between adjacent bands checked and kept within an agreed limit.
                3. Engineers paid outside their band identified for the people team to review.
                4. The mapping reviewed yearly against current market data.

                ## Notes
                Pay decisions belong with the people team and finance. Your part is making sure the levels they price are the ones engineers actually work at.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every level maps to one agreed band, out-of-band cases are listed for review, and the mapping is checked against market data each year."
                cadence: cyclic
              tasks:
                - "Ask the people team for the current band for each level"
                - "Mark where adjacent bands overlap by more than the agreed limit"
                - "Review band midpoints against market data with the people team @recurring(yearly)"
                - "List engineers outside their band for the people team to review"
            - name: Promotion readiness pipeline for your reports
              description: |-
                ## Purpose
                Managers who only think about promotions when nominations open end up nominating whoever is visibly ready and missing the quiet engineer who has been at the level above for a year. A simple tracker of each report's level, readiness in the next two cycles and the missing evidence lets you plan stretch work in advance and argue for headcount at the right levels.

                ## Milestones
                1. Each report listed with current level, readiness estimate and missing evidence.
                2. A stretch opportunity identified for everyone rated ready within two cycles.
                3. The pipeline reviewed with your own manager each quarter.
                4. No engineer nominated without at least two quarters of tracked evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline with readiness and evidence gaps for every report is updated monthly and reviewed with your manager each quarter."
                cadence: rolling
              tasks:
                - "List each report with level, readiness estimate and missing evidence"
                - "Update readiness and evidence gaps for each report @recurring(monthly:20)"
                - "Walk your own manager through the pipeline @recurring(quarterly)"
                - "Match one upcoming project to each engineer close to ready"
            - name: Writing a promotion case a committee can judge
              description: |-
                ## Purpose
                Promotion cases fail far more often for being badly argued than for lacking substance: a list of projects with no sense of scope, or praise without evidence. Learning to write a case that names the level descriptors, shows two or three examples against each and includes peer quotes and the impact in numbers is a skill both managers and engineers need.

                ## Milestones
                1. Three successful past cases read and their structure noted, with permission.
                2. A practice case written for a real or anonymised engineer.
                3. Feedback received from someone who has sat on a calibration panel.
                4. A reusable case outline saved for the next cycle.

                ## Notes
                A good case shows sustained work at the level above, usually over two quarters or more, rather than one heroic project.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice promotion case is written, reviewed by an experienced panel member, and a reusable outline is saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the ladder owner for three anonymised successful promotion cases"
                - "Note how each case maps evidence to the descriptors"
                - "Write a practice case and ask a panel member to review it"
                - "Save your outline as a template for future cases"
            - name: Writing evidence-based level descriptors
              description: |-
                ## Purpose
                Anyone contributing to the ladder needs to know the difference between a descriptor that can be judged and one that invites argument. Practising rewrites of vague phrases into observable behaviours, with scope, autonomy and audience made explicit, makes working group reviews faster and the final ladder far easier to use.

                ## Milestones
                1. Ten vague descriptors from published ladders or your own draft collected.
                2. Each rewritten as an observable behaviour with a concrete example.
                3. Rewrites tested by asking two managers to classify the same engineer.
                4. A short style guide for descriptor writing shared with the working group.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten descriptors are rewritten and tested with two managers, and a one-page descriptor style guide is shared with the working group."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect ten vague descriptors from the draft ladder"
                - "Rewrite each one as something another person could observe"
                - "Test three rewrites by asking two managers to judge the same engineer"
                - "Write a one-page descriptor style guide"
            - name: Recognising bias in level and promotion decisions
              description: |-
                ## Purpose
                Recency, affinity and the halo of one impressive launch distort level decisions in predictable ways, and visible work such as demos tends to outrank the maintenance and support that keep systems alive. Managers and panel members who can name these patterns and check for them during calibration make fairer calls without slowing the process down.

                ## Milestones
                1. The common patterns studied: recency, halo, affinity, attribution and the visibility gap.
                2. A short checklist of prompts written for calibration panels.
                3. The checklist tried in one calibration session and adjusted.
                4. Panel members briefed on the checklist before each cycle.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A calibration bias checklist is written, used in at least one session and briefed to all panel members before the next cycle."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read two credible summaries of bias in performance evaluation"
                - "Write five prompts a facilitator can ask during calibration"
                - "Try the prompts in the next calibration session"
                - "Brief all panel members on the checklist before the cycle"
            - name: Understanding staff engineer archetypes
              description: |-
                ## Purpose
                Staff and principal engineers do very different jobs: some lead one team's technical direction, some own architecture across teams, some solve the hardest problems wherever they appear, and some act as a right hand to a senior leader. Knowing these patterns helps managers write fair expectations and helps senior engineers choose the shape of staff role that suits them.

                ## Milestones
                1. The main archetypes studied from at least two well-regarded books or essays on staff-plus roles.
                2. Each current staff-plus engineer matched to the archetype closest to their work.
                3. Gaps noted where the ladder's descriptors fit only one archetype.
                4. Proposed descriptor changes sent through the ladder change process.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each staff-plus engineer is matched to an archetype and any descriptor gaps are submitted as change requests."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Add two books or essays on staff-plus engineering to your reading queue"
                - "Write a paragraph on each archetype in your own words"
                - "Match each current staff-plus engineer to an archetype"
                - "Submit change requests where descriptors suit only one archetype"
            - name: Judging scope and impact beyond shipped features
              description: |-
                ## Purpose
                Anyone who reduces incidents, mentors others, improves the build or quietly holds a fragile system together risks being under-levelled, because that impact does not show up as a feature launch. Learning to describe and weigh that work in terms of risk avoided, hours saved and teams unblocked makes the ladder reward what the organisation actually depends on.

                ## Milestones
                1. Five examples of non-feature impact gathered from recent promotion cases or team work.
                2. Each example described in terms of scope and measurable effect.
                3. A shared vocabulary for this kind of evidence agreed with the calibration panel.
                4. At least one descriptor updated to name this work explicitly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five examples of non-feature impact are written up with measured effect, and one descriptor change naming this work is submitted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather five examples of reliability, tooling or mentoring work from your teams"
                - "Describe each by risk avoided, hours saved or teams unblocked"
                - "Agree a shared way of describing this evidence with the panel"
                - "Submit one descriptor change that names this kind of work"
            - name: Delivering a not-yet promotion decision
              description: |-
                ## Purpose
                How a declined promotion is delivered decides whether the engineer tries again or starts interviewing elsewhere. Preparing the specific evidence gap, a realistic plan and a date to revisit, and delivering it in person soon after the decision, turns a disappointment into a clear route for the next cycle.

                ## Milestones
                1. The calibration rationale translated into two or three specific evidence gaps.
                2. The conversation held in person or on video within two working days of the decision.
                3. A written follow-up with the gaps, a plan and the next cycle date.
                4. A check-in booked within a month to agree the opportunities.

                ## Notes
                Never blame the committee or promise the next cycle. Say what was missing and what you will do to help.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every engineer not promoted in a cycle receives the decision in person within two working days, followed by a written gap plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn the calibration rationale into two or three specific gaps"
                - "Practise the opening two sentences of the conversation aloud"
                - "Hold the conversation and send a written follow-up the same day"
                - "Book a follow-up check-in within four weeks"
            - name: Comparing published engineering ladders
              description: |-
                ## Purpose
                Many companies publish their engineering ladders, and reading several side by side shows the choices you would otherwise make blindly: how many levels, how scope grows, how management and technical tracks are balanced. Comparing four or five with a critical eye saves weeks of drafting and helps you avoid copying a ladder built for a very different organisation.

                ## Milestones
                1. Four or five published ladders from organisations of different sizes collected.
                2. Each compared on level count, dimensions, track split and descriptor style.
                3. Two or three ideas worth borrowing and two to avoid written down.
                4. The comparison shared with the working group before descriptor drafting.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison table of at least four published ladders, with ideas to borrow and avoid, is shared with the working group."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect four published ladders from organisations of different sizes"
                - "Compare them on levels, dimensions, track split and descriptor style"
                - "Write down three ideas to borrow and two to avoid"
                - "Share the comparison table with the working group"
            - name: Title benchmark against the hiring market
              description: |-
                ## Purpose
                If your senior engineer would be mid-level elsewhere, candidates will be confused and your engineers will be down-levelled when they leave; if it is the reverse, you will struggle to hire at the right level. Benchmarking your levels against market levelling data and recruiter experience once a year keeps titles honest in both directions.

                ## Milestones
                1. Each level matched to its nearest equivalent in at least two sources of market levelling data.
                2. Recruiters asked where candidates' expectations and your titles disagree.
                3. Any level that is clearly inflated or deflated flagged with a proposed response.
                4. The benchmark refreshed yearly and filed with the ladder.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly benchmark maps every level to market equivalents from at least two sources, with any mismatches flagged and a response decided."
                cadence: cyclic
              tasks:
                - "Choose two sources of market levelling data to compare against"
                - "Ask recruiters where candidates misread your titles"
                - "Refresh the title benchmark against market data @recurring(yearly)"
                - "Propose a response for any level that is clearly out of line"
            - name: Deciding on time-in-level rules
              description: |-
                ## Purpose
                Minimum time in level protects against promoting someone after one good quarter, but rigid rules penalise fast growers and people who joined under-levelled. Choosing whether to have a minimum, a guideline or neither, and writing down the exceptions, removes one of the most common sources of argument in calibration.

                ## Milestones
                1. Current practice described from the last two cycles, including unwritten rules.
                2. Options compared: hard minimum, guideline with exceptions, or no rule.
                3. A decision recorded with the evidence threshold that allows an exception.
                4. The rule added to the promotion process and the FAQ.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written time-in-level rule with clear exceptions is added to the promotion process and the FAQ."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the last two cycles for anyone held back purely on time in level"
                - "List the options with one pro and one con for each"
                - "Decide the rule with the working group and record the exceptions"
                - "Add the rule to the promotion process document and FAQ"
            - name: Promotion standard of already working at the level
              description: |-
                ## Purpose
                Some organisations promote on potential, others only when someone has been working at the level above for a sustained period. The choice changes how managers write cases, how engineers plan their year and how often new promotees struggle, so it should be one explicit standard rather than whatever each manager assumes.

                ## Milestones
                1. The current standard in practice identified from past cases.
                2. A single standard chosen, with the evidence period it requires.
                3. The standard written into the promotion process in one sentence.
                4. Managers briefed with two example cases, one that meets it and one that does not.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One promotion standard with a stated evidence period is written into the process and briefed to all managers with examples."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read five recent cases and note which standard each assumed"
                - "Choose the standard and the evidence period it requires"
                - "Write the standard as one sentence in the promotion process"
                - "Brief managers with a case that meets it and one that does not"
            - name: Making glue work count on the ladder
              description: |-
                ## Purpose
                Running incident reviews, onboarding newcomers, writing the missing documentation and coordinating across teams is essential work that is often unevenly shared and rarely rewarded. Naming it in the descriptors, tracking who does it and counting it as evidence in calibration stops a ladder from punishing the people who hold teams together.

                ## Milestones
                1. Glue activities named in at least two dimensions of the ladder.
                2. A light log of glue work kept in each team.
                3. Glue work cited as evidence in at least one promotion case this cycle.
                4. Distribution of glue work across the team reviewed for fairness.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Glue work is named in the ladder's descriptors, logged in each team and cited as evidence in at least one case per cycle."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the glue work your teams rely on but rarely recognise"
                - "Propose descriptor wording that names it in two dimensions"
                - "Review the team's glue work log for ladder evidence @recurring(monthly:8)"
                - "Check whether glue work falls unevenly on a few people"
            - name: Ladder addenda for specialist engineering roles
              description: |-
                ## Purpose
                Site reliability, security, data, quality and mobile engineers often find the general ladder describes someone else's job. Writing short addenda that translate each dimension into the specialism's real work, while keeping the same levels, avoids both a dozen separate ladders and specialists being judged by feature-delivery standards.

                ## Milestones
                1. Specialist roles that need an addendum identified with their managers.
                2. One addendum per role translating each dimension into examples of its work.
                3. Each addendum reviewed by two practitioners in that specialism.
                4. Addenda linked from the main ladder with the same version control.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each specialist role has a reviewed addendum using the shared levels, linked from the main ladder."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask specialist managers which roles the general ladder fits poorly"
                - "Draft examples of each dimension for the first specialism"
                - "Ask two practitioners to review the addendum"
                - "Link the approved addenda from the main ladder"
            - name: One-page summary for each level
              description: |-
                ## Purpose
                Full ladders run to many pages, and most engineers read them once and never again. A single page per level, with the scope, the three behaviours that most distinguish it from the level below and two real anonymised examples, is what people actually open before a check-in or a career conversation.

                ## Milestones
                1. One page drafted for each level on both tracks.
                2. Each page naming the three behaviours that most separate it from the level below.
                3. Two anonymised real examples added per level.
                4. Pages tested with three engineers who say whether they could use them.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary exists for every level on both tracks, each with two real examples, and has been tested with three engineers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a one-page summary for each level from the full descriptors"
                - "Edit each page down to the three behaviours that separate it"
                - "Add two anonymised real examples per level"
                - "Test the pages with three engineers and adjust"
            - name: Policy for moving between technical and manager tracks
              description: |-
                ## Purpose
                Trying management and then returning to the technical track should never look like a failure, and strong staff engineers should be able to try managing without a pay cut. A written policy on level equivalence, trial periods and how the move is announced makes switching tracks normal rather than a career risk.

                ## Milestones
                1. Equivalent levels for moves in both directions confirmed.
                2. A trial period and a review point defined for first-time managers.
                3. How a return to the technical track is announced agreed with the people team.
                4. The policy published and two past moves checked against it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published track-switching policy defines equivalent levels, a trial period and how returns are announced, agreed with the people team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm which levels are equivalent in each direction"
                - "Draft the trial period and the review conversation for new managers"
                - "Agree the announcement wording for a move back with the people team"
                - "Publish the policy and test it against two past moves"
            - name: Offer levelling for new hires
              description: |-
                ## Purpose
                Levels set at hire are the hardest to correct later, and hiring managers under pressure often up-level to win a candidate. A rule for how interview evidence maps to an offer level, who confirms it and how borderline cases are handled keeps new hires consistent with the people already on the ladder.

                ## Milestones
                1. A mapping from interview signals to ladder levels written with the recruiting team.
                2. A second reviewer required to confirm every offer level.
                3. A rule for borderline candidates, such as offering the lower level with an early review.
                4. Offer levels from the last year compared with current engineers at the same level.

                ## Notes
                Interview design belongs with the hiring loop. This project only covers how the result becomes a level.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every offer level is confirmed by a second reviewer against a written mapping, and last year's offers have been checked for consistency."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the mapping from interview signals to levels with recruiting"
                - "Name a second reviewer for offer levels in each group"
                - "Agree the rule for candidates between two levels"
                - "Compare last year's offer levels with current engineers at those levels"
            - name: Budgeted or uncapped promotions decision
              description: |-
                ## Purpose
                Whether promotions are limited by a budget or granted to everyone who meets the bar decides what calibration really does: ranking candidates against each other or judging each against the ladder. Making this choice openly with finance, and telling engineers which system they are in, prevents the suspicion that the bar quietly moves with the budget.

                ## Milestones
                1. Current practice described honestly, including any informal caps.
                2. The cost of uncapped promotions estimated from the readiness pipeline.
                3. A decision agreed with finance and the people team.
                4. The decision explained to managers and summarised in the FAQ.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on budgeted or uncapped promotions, agreed with finance, is explained to managers and published in the FAQ."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask finance whether an informal promotion cap exists today"
                - "Estimate the cost of promoting everyone rated ready in the pipeline"
                - "Agree the model with finance and the people team"
                - "Explain the decision to managers and add it to the FAQ"
            - name: Executive sign-off of the ladder
              description: |-
                ## Purpose
                Without visible leadership backing, a ladder gets ignored the first time a senior leader wants an exception. A prepared session where executives review the levels, the track split, the transition rules and the cost estimate, and formally approve them, gives managers the authority to apply the ladder consistently.

                ## Milestones
                1. A short pre-read with the ladder summary, mapping results and cost estimate sent a week ahead.
                2. The sign-off session held with the sponsor and engineering leadership.
                3. Open questions resolved or assigned an owner and date.
                4. Approval recorded in the ladder change log.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Engineering leadership formally approves the ladder in a recorded session, with open questions assigned owners and dates."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a ninety-minute sign-off session with engineering leadership"
                - "Write a three-page pre-read with mapping results and cost"
                - "Send the pre-read one week before the session"
                - "Record the approval and open questions in the change log"
            - name: Launching the ladder to the engineering organisation
              description: |-
                ## Purpose
                How engineers first hear about a ladder shapes whether they trust it for years. A launch with an all-hands explanation, written materials, private level conversations beforehand and open sessions for questions afterwards turns a document into something people actually use.

                ## Milestones
                1. Every engineer told their mapped level privately before the all-hands.
                2. An all-hands session explaining why, what changed and how promotions now work.
                3. The ladder, one-page summaries and FAQ published the same day.
                4. Two open question sessions held in the fortnight after launch.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The ladder is launched at an all-hands after every engineer has had a private level conversation, with two follow-up question sessions held."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Set the launch date and work back to the private conversations deadline"
                - "Write the twenty-minute all-hands talk and test it on two managers"
                - "Publish the ladder, summaries and FAQ on launch day"
                - "Run two open question sessions in the following fortnight"
            - name: First promotion cycle on the new ladder
              description: |-
                ## Purpose
                The first cycle is when the ladder is tested against real cases and real disappointment, and engineers watch closely to see whether the rules hold. Running it with extra support for managers writing cases, a careful calibration and close attention to consistency sets the precedent every later cycle will follow.

                ## Milestones
                1. A case-writing workshop held for all managers with nominees.
                2. All nominations received in the standard format by the deadline.
                3. Calibration completed with a recorded rationale for every case.
                4. Decisions communicated to every nominee within one week of calibration.
              priority: high
              deadlineOffsetDays: 210
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first cycle closes with every nominee receiving a decision and rationale within one week of calibration."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Run a one-hour case-writing workshop for managers with nominees"
                - "Chase missing packets three days before the deadline"
                - "Run calibration with the bias checklist in hand"
                - "Confirm every nominee has heard their decision within a week"
            - name: Preparing your own promotion packet
              description: |-
                ## Purpose
                Engineers who prepare their own evidence give their manager a far stronger case to argue than one written from memory the night before the deadline. Gathering two quarters of brag document entries, mapping them to the descriptors and asking for peer statements early means your case is judged on its strength, not on your manager's free time.

                ## Milestones
                1. Your evidence mapped against every descriptor of the level above.
                2. Three peer statements requested and received from people who saw the work.
                3. A draft packet reviewed by your manager four weeks before the deadline.
                4. The final packet submitted on time in the standard format.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete packet with evidence for every descriptor and three peer statements is submitted before the nomination deadline."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm with your manager that you will be nominated this cycle"
                - "Map your brag document entries to each descriptor of the level above"
                - "Ask three colleagues for short peer statements"
                - "Send the draft packet to your manager four weeks before the deadline"
            - name: Retrospective after each promotion round
              description: |-
                ## Purpose
                Every cycle reveals something: a descriptor nobody understood, a manager who missed the deadline, a case that should have passed. A short retrospective with managers and panel members while the round is fresh catches these problems and feeds them into the next cycle instead of the next complaint.

                ## Milestones
                1. A short survey sent to managers, panel members and nominees.
                2. A one-hour retrospective held within three weeks of announcements.
                3. Three to five changes chosen for the next cycle with owners.
                4. Ladder-related findings sent to the change process.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A retrospective is held within three weeks of each round, producing three to five owned changes for the next cycle."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send a five-question survey to managers, panel and nominees"
                - "Run a one-hour retrospective with managers and panel members"
                - "Choose three to five changes and name an owner for each"
                - "Raise ladder wording issues through the change process"
            - name: Growing from senior to staff engineer
              description: |-
                ## Purpose
                The step from senior to staff is where most technical careers stall, because it asks for influence across teams rather than more of the same excellent work on one. An engineer who agrees a staff-shaped problem with their manager, finds a sponsor and spends a year working at that scope gives themselves a real chance at the level.

                ## Milestones
                1. The staff descriptors read with your manager and the archetype that suits you chosen.
                2. One problem that spans several teams agreed as your focus.
                3. A senior sponsor outside your team who knows your work.
                4. Two quarters of documented work at staff scope, such as a cross-team design adopted.

                ## Notes
                Start from the **Development plan** template. Staff work is often less visible than senior work; write down the decisions you shaped, not only the code you wrote.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A development plan names a cross-team problem and a sponsor, with two quarters of documented staff-scope work."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the staff descriptors with your manager and pick an archetype"
                - "Agree one cross-team problem you will own this year"
                - "Ask a senior leader outside your team to act as sponsor"
                - "Write a note on the staff-level work you did this month @recurring(monthly:5)"
            - name: First career ladder for a growing startup
              description: |-
                ## Purpose
                A startup with fifteen to forty engineers usually has no ladder, a few inflated early titles and a growing number of people asking about progression. A deliberately small first version, four or five levels with short descriptors and one promotion round a year, gives structure without copying the bureaucracy of a large company.

                ## Milestones
                1. Four or five levels chosen with short descriptors on one page each.
                2. Early titles reviewed with a plan for founders and first hires that does not demote anyone.
                3. One annual promotion round agreed with the founders.
                4. The ladder explained to the whole team in one meeting.

                ## Notes
                Expect to rewrite it at around eighty engineers. Say so at launch so nobody treats version one as permanent.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ladder of no more than five levels with one-page descriptors and an annual promotion round is launched to the whole team."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List every engineer with their current title and what they actually do"
                - "Draft four or five levels with a page each"
                - "Agree with the founders how early titles will be handled"
                - "Present the ladder to the whole team and invite questions"
            - name: Promotion fairness for engineers returning from leave
              description: |-
                ## Purpose
                People returning from parental, medical or carer's leave can be quietly passed over because their recent evidence is thin or their projects moved on. A clear rule on how evidence from before leave counts, a re-entry conversation and a review at the next cycle protect both the engineer and the organisation from an unfair outcome.

                ## Milestones
                1. A written rule on how pre-leave evidence counts in the next cycle.
                2. A re-entry conversation held within two weeks of return.
                3. A level-appropriate project agreed for the first quarter back.
                4. The engineer's readiness reviewed at the next cycle on the same basis as everyone else.

                ## Notes
                Check the rule with the people team and your legal adviser, since leave protections vary by country.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written rule on pre-leave evidence exists, and every returning engineer has a re-entry conversation and a level-appropriate first project."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft how pre-leave evidence counts with the people team"
                - "Hold a re-entry conversation within two weeks of return"
                - "Agree a first-quarter project that suits the engineer's level"
                - "Note the engineer's case for review in the next cycle"
            - name: New manager learning an existing ladder
              description: |-
                ## Purpose
                Newly promoted or newly hired managers often inherit reports at several levels and a ladder they have never used to judge anyone. Spending the first month reading it closely, talking to the ladder owner, sitting in on calibration and placing each report against it means your first level conversations sound informed rather than improvised.

                ## Milestones
                1. The full ladder, FAQ and promotion process read and questions noted.
                2. A conversation with the ladder owner about how it is really applied.
                3. Each report's level and recent evidence reviewed with their previous manager.
                4. One calibration session observed before you propose a case.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within six weeks, the manager has reviewed every report's level with the previous manager and observed one calibration session."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the ladder, FAQ and promotion process and list your questions"
                - "Book thirty minutes with the ladder owner"
                - "Review each report's level with their previous manager"
                - "Ask to observe the next calibration session"
            - name: Plan for an engineer stuck at one level
              description: |-
                ## Purpose
                An engineer who has been at the same level for three or four years is either content and doing valuable work there, or stuck and quietly losing motivation, and the two need very different responses. Finding out which, then agreeing either a respected long-term role or a specific gap plan, is fairer than another vague year of encouragement.

                ## Milestones
                1. A frank conversation held about whether the engineer wants to progress.
                2. For those who do, the gap named against specific descriptors.
                3. A six-month plan with one stretch opportunity and a named supporter.
                4. Progress reviewed monthly and a clear outcome reached at the end of six months.

                ## Notes
                Staying at a career level such as senior engineer for many years is a legitimate choice. Say so, and make sure the ladder does not treat it as failure.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The engineer's wish to progress is recorded and, if they want to, a six-month gap plan is reviewed monthly to a clear outcome."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the engineer directly whether they want to reach the level above"
                - "Name the descriptors where evidence is missing"
                - "Agree one stretch opportunity and a supporter for six months"
                - "Review progress on the gap plan with the engineer @recurring(monthly:15)"
            - name: Harmonising ladders after a merger or acquisition
              description: |-
                ## Purpose
                When two engineering organisations combine, the same title can mean two levels apart, and engineers compare notes within days. Mapping both ladders onto one, calibrating across the old boundary and applying a no-loss rule handles the most sensitive part of integration before it turns into attrition.

                ## Milestones
                1. Both ladders compared level by level with the gaps written down.
                2. One target ladder chosen, adapted or newly written.
                3. Every engineer from both sides mapped and calibrated jointly.
                4. Mapped levels communicated privately before any public announcement.

                ## Notes
                Agree with the people team and legal adviser what can be shared between the two companies before the deal closes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Engineers from both organisations are mapped to one ladder through joint calibration and told their level privately before announcement."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Lay out both ladders side by side, level by level"
                - "Decide whether to adopt one, adapt one or write a new ladder"
                - "Run joint calibration with managers from both organisations"
                - "Brief managers on telling each engineer their mapped level"
            - name: One ladder across countries and business units
              description: |-
                ## Purpose
                Large organisations with engineering in several countries and divisions drift into local ladders, and a staff engineer in one unit becomes impossible to compare with one in another. A shared global ladder with local pay bands and limited, documented local additions keeps internal moves and global calibration possible.

                ## Milestones
                1. Every local ladder or title scheme inventoried by country and unit.
                2. One global level structure agreed, with local bands set by the people team.
                3. Allowed local additions defined and documented.
                4. A cross-unit calibration held at least once a year for staff-plus levels.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All units use one global level structure with documented local additions, and staff-plus levels are calibrated across units yearly."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Inventory every local ladder and title scheme by unit"
                - "Agree the global levels with heads of engineering in each unit"
                - "Write which local additions are allowed and how they are approved"
                - "Schedule a yearly cross-unit calibration for staff-plus levels"
            - name: Principal and distinguished engineer levels
              description: |-
                ## Purpose
                Top technical levels are few in number but carry outsized influence, and descriptors written for senior engineers stretched upwards rarely fit them. Defining what organisation-wide or industry-level impact looks like, how many such roles the organisation needs and how appointments are decided keeps these levels meaningful rather than honorary.

                ## Milestones
                1. Descriptors written for principal and distinguished levels in terms of organisation-wide impact.
                2. An expected number of roles at each level tied to the size of the organisation.
                3. An appointment process with a senior panel and external-style review.
                4. Current top-level engineers reviewed against the new descriptors.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Principal and distinguished levels have their own descriptors, an expected headcount and a written appointment process."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Interview two or three current top-level engineers about their real work"
                - "Draft descriptors in terms of organisation-wide and external impact"
                - "Agree how many roles at each level the organisation needs"
                - "Write the appointment process and panel membership"
            - name: Promotion appeals process
              description: |-
                ## Purpose
                Without a fair way to challenge a decision, disagreements leak into resignations and rumours. A short appeals route limited to process errors or missed evidence, heard by people who were not on the original panel and decided within a set time, gives engineers a real recourse without reopening every case.

                ## Milestones
                1. Grounds for appeal defined, such as procedural error or evidence not considered.
                2. An appeal panel of people independent of the original decision.
                3. A time limit for raising and deciding appeals.
                4. Appeal themes reviewed yearly as input to the ladder revision.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written appeals process with defined grounds, an independent panel and time limits is published and appeal themes feed the yearly revision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the grounds on which a promotion decision can be appealed"
                - "Name an appeal panel independent of calibration"
                - "Set time limits for raising and deciding an appeal"
                - "Publish the appeals process alongside the promotion process"
            - name: Ladder alignment with job architecture and the HR system
              description: |-
                ## Purpose
                In large organisations the ladder lives in a document while the HR system holds job codes, grades and titles that drive pay, reporting and access. When the two drift apart, promotions are processed at the wrong grade and headcount reports become fiction, so a regular reconciliation is worth the effort.

                ## Milestones
                1. Every ladder level and track mapped to a job code in the HR system.
                2. Mismatches between the ladder roster and HR records listed.
                3. A process agreed with the people team to update HR records within a week of each promotion.
                4. Quarterly reconciliation in place with a named owner on each side.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every level maps to an HR job code and a quarterly reconciliation finds no unexplained mismatches."
                cadence: rolling
              tasks:
                - "Ask the people team for the job codes behind every engineering title"
                - "Map each ladder level and track to a job code"
                - "Reconcile HR system levels with the ladder roster @recurring(quarterly)"
                - "Agree a one-week target for updating records after promotions"
            - name: Measuring whether the ladder works
              description: |-
                ## Purpose
                Clear and fair progression is what a ladder exists for, and both qualities can be measured. Tracking a handful of indicators, such as the share of engineers who can say what the level above requires, promotion rates by level, regretted leavers citing progression and the share of senior roles on the technical track, shows whether the effort is paying off and where to look next.

                ## Milestones
                1. Five indicators chosen with a definition and source for each.
                2. A baseline recorded for each indicator.
                3. The indicators refreshed every quarter and trends noted.
                4. A yearly summary presented with the ladder revision.

                ## Notes
                Start from the **Metrics log** template. A two-question survey item on clarity of expectations is often the most useful single number.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five ladder health indicators have a baseline and quarterly readings, summarised once a year alongside the revision."
                cadence: rolling
              tasks:
                - "Choose five indicators and write a definition for each"
                - "Add a two-question clarity item to the next engineering survey"
                - "Log the ladder health indicators and note trends @recurring(quarterly)"
                - "Present the yearly summary alongside the ladder revision"
---

# Engineering Career Ladder

A career ladder is the written answer to the two questions every engineer eventually asks: what level am I, and what would it take to reach the one above. This area is for the manager or engineering leader writing or repairing a ladder, the enterprise people team keeping levels consistent across many groups, and the engineer using the ladder to grow. It runs from foundations (an audit of today's levels, the number of levels, the competency dimensions, the descriptors and the split between the staff and manager tracks), through the promotion and calibration machinery, the skills of writing cases and judging them fairly, policy decisions, dated launches and promotion rounds, situations such as a stalled engineer or a merger, and specialist work on principal levels, appeals and proving the ladder works.

What repeats is a weekly brag document entry, monthly readiness updates and FAQ answers, quarterly level check-ins, calibration preparation and level distribution snapshots, and a yearly ladder revision, compensation band sync and title benchmark. The Skills matrix, Development plan, Meeting notes, Reading queue and Metrics log templates pair with the projects that keep a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
