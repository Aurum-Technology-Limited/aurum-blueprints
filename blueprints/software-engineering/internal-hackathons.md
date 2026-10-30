---
id: software-engineering.internal-hackathons
name: Internal Hackathons
description: "Agreed goals, rules, sandboxes and a judging rubric, plus the idea backlog, run sheets, demo days and graduation path that turn internal hackathon prototypes into shipped work."
category: business
version: 1.0.0
tags: [software-engineering, internal-hackathons, team, manager, engineer, hackathon, prototyping, demo-day]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - feedback-themes
    - metrics-log
    - product-spec
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Internal Hackathons
          description: "Organising hackathons that let engineers explore ideas, with themes, judging, demos and a path for the best prototypes to reach production."
          projects:
            - name: Hackathon goals and executive sponsor
              description: |-
                ## Purpose
                Teams run hackathons for very different reasons: morale, exploring a new platform, clearing internal tooling pain or finding the next product bet, and an event that tries to do all four usually does none well. Writing down one primary goal and getting a named sponsor to back it decides the theme, the judging and whether prototypes get a real chance at production.

                ## Milestones
                1. One primary goal and at most two secondary goals written in plain sentences.
                2. A named sponsor at director level or above who has agreed to open the event and attend demos.
                3. What success looks like six months after the event written as two or three measurable outcomes.
                4. The goal statement shared with engineering leads and product managers.

                ## Notes
                If the sponsor will not commit to giving the winning team time to continue, say so openly in the invitation rather than implying a production path that does not exist.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page goal statement with a named sponsor and three six-month outcomes, shared with all engineering leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the one reason this hackathon exists in a single sentence"
                - "Book thirty minutes with the likely sponsor to agree the goal"
                - "Draft three outcomes you would expect to see six months later"
                - "Share the goal statement with engineering leads and product managers"
            - name: Protected time and budget approval
              description: |-
                ## Purpose
                Engineers will not join a hackathon that has to be squeezed around sprint commitments, and a budget that appears after the venue is booked always comes up short. Getting two clear days of protected time and a costed budget approved before announcing anything stops the event collapsing into a lunchtime side activity.

                ## Milestones
                1. Event length agreed, with sprint commitments for those days formally reduced.
                2. A budget covering food, prizes, cloud sandbox spend, travel and swag, with a contingency line.
                3. Written approval from the budget holder and from each delivery lead whose team is affected.
                4. On-call and support cover for the event days arranged so participants are not paged.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved budget and a written agreement from every affected delivery lead that sprint work is paused for the event days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every cost line from food and prizes to sandbox cloud spend"
                - "Add a ten per cent contingency line to the hackathon budget"
                - "Ask each delivery lead to confirm reduced sprint commitments in writing"
                - "Arrange on-call cover so no participant carries a pager during the event"
            - name: Choosing an in-person, remote or hybrid format
              description: |-
                ## Purpose
                Format decides almost everything downstream: venue, food, demo tooling, time zones and who can realistically take part. Comparing the three options against where your engineers actually sit and what the goal needs avoids a hybrid event where remote people quietly drop out by lunchtime on day one.

                ## Milestones
                1. A headcount of engineers by office and time zone.
                2. In-person, remote and hybrid compared on cost, reach and the stated goal.
                3. A format chosen with its main trade-off written down.
                4. Remote participants' experience planned in detail if any are included.

                ## Notes
                Hybrid is the hardest to run well. If you choose it, give remote teams their own facilitator and demo slot order rather than tacking them on last.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written format decision with headcount by location and the main trade-off accepted, agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull a headcount of engineers by office and time zone"
                - "Score each format against cost, reach and the hackathon goal"
                - "Write the chosen format and its main trade-off in one paragraph"
                - "Agree the format with the sponsor before booking anything"
            - name: Hackathon rules, eligibility and team size
              description: |-
                ## Purpose
                Disputes at demo time almost always trace back to rules nobody wrote down: whether pre-written code counts, whether a team of eight competes with a team of two, whether contractors can win prizes. A one-page rule sheet agreed before sign-up opens settles those questions while nobody has a stake in the answer.

                ## Milestones
                1. Eligibility stated, including contractors, interns and non-engineering staff.
                2. Team size limits set, with a rule for solo entries.
                3. A clear line on pre-existing code, open source libraries and internal starter kits.
                4. Disqualification and dispute handling described in two sentences.
                5. The rule sheet published alongside the sign-up form.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published one-page rule sheet covering eligibility, team size, prior code and disputes, linked from the sign-up form."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether contractors, interns and non-engineers may enter"
                - "Set the minimum and maximum team size, including solo entries"
                - "Write the rule on code written before the event starts"
                - "Publish the rule sheet next to the sign-up form"
            - name: Data, security and code ownership guardrails
              description: |-
                ## Purpose
                Prototypes built in two days are exactly where production customer data leaks into a personal cloud account or a free SaaS trial. Agreeing guardrails with security and legal before the event, covering which data may be used, which external services are allowed and who owns the resulting code, protects the company without killing the fun.

                ## Milestones
                1. A list of permitted data sources, with synthetic or anonymised datasets named for common needs.
                2. External services and AI tools that may and may not receive company code or data.
                3. Code and idea ownership confirmed with legal under existing employment terms.
                4. Guardrails reviewed by the security team and summarised on one page for participants.

                ## Notes
                Start from the **Risk register** template. Never allow live customer personal data in hackathon builds; provide a synthetic dataset instead so nobody is tempted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page guardrail sheet on data, external services and code ownership, signed off by security and legal before sign-up opens."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a short review with the security team about hackathon data use"
                - "List the external services and AI tools participants may use"
                - "Ask legal to confirm ownership of code written during the event"
                - "Prepare a synthetic dataset for the most likely prototype needs"
            - name: Sandbox environments and spending caps
              description: |-
                ## Purpose
                Teams lose the first morning waiting for cloud accounts, API keys and repository access, and the event ends with forgotten GPU instances billing for weeks. Provisioning isolated sandbox accounts with hard spending caps and an expiry date in advance gets teams building within the hour and makes clean-up automatic.

                ## Milestones
                1. One sandbox account or project per team, isolated from production networks and data.
                2. A hard spending cap and an automatic expiry date set on every sandbox.
                3. Repository, CI and internal API access tested by a volunteer team the week before.
                4. A short access guide that any participant can follow without help.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every registered team has a tested sandbox with a spending cap and expiry date at least three days before the event."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the platform team how to create isolated sandbox accounts in bulk"
                - "Set a hard spending cap and expiry date on every sandbox"
                - "Have one volunteer team test access end to end a week before"
                - "Write a one-page access guide for participants"
            - name: Organising crew and role cards
              description: |-
                ## Purpose
                One enthusiastic organiser doing everything is the most common reason a second hackathon never happens. A small crew with a written card for each role, from logistics and comms to judging and technical support, spreads the load and makes the next event easier to hand over.

                ## Milestones
                1. Four to six crew roles defined, each with a one-paragraph card.
                2. A named person in every role, with a backup for the event days.
                3. Crew time agreed with each member's manager.
                4. A crew channel and a weekly fifteen-minute check-in set up until the event.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every crew role has a written card, a named owner and a backup, with manager approval for their time."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the jobs the event needs, from catering to demo tech"
                - "Group them into four to six role cards of one paragraph each"
                - "Ask volunteers for each role and confirm time with their managers"
                - "Set up a crew channel and a short weekly check-in"
            - name: Picking dates around the release calendar
              description: |-
                ## Purpose
                A hackathon scheduled the week before a major release or during quarter-end planning will lose half its participants to firefighting. Checking the release calendar, holidays and planning cycles before fixing dates gives the event a quiet window and signals that leadership means it.

                ## Milestones
                1. Release dates, code freezes and planning weeks for the next two quarters gathered.
                2. Public and religious holidays across all participating locations checked.
                3. Two candidate date windows proposed with the conflicts for each listed.
                4. Dates confirmed by the sponsor and placed in the shared engineering calendar.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Confirmed hackathon dates that avoid every release, freeze and planning week in the shared calendar, approved by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather release dates and code freezes for the next two quarters"
                - "Check holidays in every office and remote team location"
                - "Propose two date windows with their conflicts listed"
                - "Add the confirmed dates to the shared engineering calendar"
            - name: Interest survey and lessons from past events
              description: |-
                ## Purpose
                If your company has run hackathons before, the people who stopped coming know exactly why. A short survey of engineers plus a look at what happened to past winners gives you a baseline for participation and prototype follow-through, and tells you which mistakes not to repeat.

                ## Milestones
                1. A five-question survey sent to all engineers, with at least a third responding.
                2. Past hackathon winners listed with what became of each prototype.
                3. The three most common reasons people skipped previous events written down.
                4. A baseline for participation rate and prototypes reaching production recorded.

                ## Notes
                Start from the **Feedback themes** template to group survey answers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Survey results from at least a third of engineers and a list of past winners' outcomes, summarised as a baseline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write five short survey questions about hackathon interest and blockers"
                - "Send the survey to all engineers with a one-week deadline"
                - "List past winners and what happened to each prototype"
                - "Ask the agent to group the free-text survey answers into themes"
            - name: Year-round hackathon idea backlog
              description: |-
                ## Purpose
                Good hackathon ideas turn up in postmortems, support tickets and corridor complaints months before the event, then are forgotten by the time teams form. A shared backlog that anyone can add to, reviewed monthly, means teams arrive with problems worth solving instead of spending the first morning brainstorming.

                ## Milestones
                1. A shared idea board with a simple submission form open to everyone.
                2. Each idea tagged with the problem it solves and who would use the result.
                3. Duplicates merged and stale ideas archived every month.
                4. The top twenty ideas shortlisted and shared a fortnight before each event.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An idea backlog with at least thirty ideas, each with a stated problem and user, reviewed every month."
                cadence: rolling
              tasks:
                - "Create a shared idea board with a three-field submission form"
                - "Seed the board with ten problems from recent postmortems and tickets"
                - "Review new ideas, merge duplicates and archive stale ones @recurring(monthly:11)"
                - "Post a reminder in engineering channels inviting new ideas @recurring(monthly:25)"
            - name: Annual hackathon calendar
              description: |-
                ## Purpose
                Hackathons that happen whenever someone has energy end up clashing with releases and losing their sponsor's attention. A yearly calendar with one or two main events and smaller themed sprints between them gives engineers something to plan around and lets budget holders set money aside in advance.

                ## Milestones
                1. Main events and any smaller themed sprints placed on a twelve-month calendar.
                2. Each event linked to a draft theme and an owner.
                3. The calendar approved by the sponsor and shared with all teams.
                4. A quarterly check that the next event is still on track.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published twelve-month hackathon calendar with an owner per event, checked every quarter."
                cadence: cyclic
              tasks:
                - "Draft a twelve-month calendar with one or two main events"
                - "Name an owner and a working theme for each event"
                - "Check the next event's dates, owner and budget are still valid @recurring(quarterly)"
                - "Publish the approved calendar in the engineering handbook"
                - "Confirm next year's hackathon budget line with finance @recurring(yearly)"
            - name: Post-event prototype follow-up tracker
              description: |-
                ## Purpose
                The usual fate of a winning prototype is a round of applause and then nothing. A tracker that lists every demoed project with a next step, an owner and a review date, checked weekly for the first two months, makes it visible when good work is being dropped and gives the sponsor something to act on.

                ## Milestones
                1. Every demoed project entered with its team, repository and stated next step.
                2. Each project marked continue, park or close within two weeks of the event.
                3. Owners and target dates set for every project marked continue.
                4. A short status update sent to the sponsor each month after the event.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every demoed project has a recorded decision within two weeks of the event, and continuing projects show a monthly status."
                cadence: rolling
              tasks:
                - "Create a tracker with team, repository, next step and owner columns"
                - "Enter every demoed project the day after demos"
                - "Chase owners for updates on continuing prototypes @recurring(weekly:tue)"
                - "Send the sponsor a one-paragraph status of continuing projects @recurring(monthly:5)"
            - name: Hackathon sponsor review cadence
              description: |-
                ## Purpose
                Sponsors drift away between events unless they hear regularly what their backing produced. A short quarterly review with the sponsor, covering continuing prototypes, metrics and the next event's plan, keeps the programme funded and gives you a route to escalate when graduated projects stall.

                ## Milestones
                1. A thirty-minute quarterly slot in the sponsor's calendar.
                2. A one-page update format covering prototypes, metrics and next event.
                3. Stalled projects raised with a specific ask each time.
                4. Decisions from each review recorded and followed up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly sponsor review held with a one-page update, and every stalled project raised with a specific ask."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with the sponsor"
                - "Draft a one-page update format for the review"
                - "Prepare the quarterly hackathon sponsor update @recurring(quarterly)"
                - "Record decisions from each review and follow them up"
            - name: Six-week announcement and countdown plan
              description: |-
                ## Purpose
                Sign-ups follow communications closely: one email gets the usual enthusiasts, while a steady countdown with idea prompts and team-finding posts reaches the quieter engineers who make the event worthwhile. Planning six weeks of messages in advance means nobody on the crew has to remember what to post next.

                ## Milestones
                1. A message plan covering six weeks before the event and one week after.
                2. Each message drafted with channel, date and sender.
                3. Managers given a short note to pass on in their own team meetings.
                4. Sign-up numbers tracked weekly against a target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated six-week message plan with every message drafted, and weekly sign-up numbers recorded against a target."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every message from first announcement to the thank-you note"
                - "Ask the agent to draft the announcement and three countdown posts"
                - "Write a short note managers can read out in team meetings"
                - "Set a sign-up target and record the count each Friday"
            - name: Hackathon retrospective and improvement log
              description: |-
                ## Purpose
                Each event teaches the crew something, but without a written retrospective the same problems return: the Wi-Fi in the demo room, the late food, the judging that overran by an hour. A retro within a week of each event, feeding a running improvement log, makes every hackathon a little better than the last.

                ## Milestones
                1. A participant feedback form sent within two days of each event.
                2. A crew retrospective held within a week, covering what to keep, change and drop.
                3. Improvements logged with an owner and the event they will be fixed for.
                4. The log read at the first crew meeting of the next event.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retrospective held within a week of every event, with each agreed improvement logged against an owner and a target event."
                cadence: cyclic
              tasks:
                - "Send a five-question feedback form to participants after each event"
                - "Run a forty-five-minute crew retro on keep, change and drop"
                - "Add every agreed improvement to the log with an owner"
                - "Check progress on open items in the improvement log @recurring(monthly:14)"
            - name: Hackathon project archive and demo library
              description: |-
                ## Purpose
                Two years in, nobody can remember which team built the internal search prototype or where its code lives, so the same idea gets rebuilt from scratch. A searchable archive of every project with its pitch, demo recording, repository and outcome turns past events into a reference library for future teams.

                ## Milestones
                1. An archive page per event listing every project with a one-line summary.
                2. Demo recordings, slide decks and repository links attached to each entry.
                3. Outcome fields recording whether the project shipped, was parked or closed.
                4. Repositories moved to an archive organisation rather than personal accounts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every project from the last two events has an archive entry with pitch, recording, repository link and recorded outcome."
                cadence: rolling
              tasks:
                - "Create an archive page template with pitch, demo, repository and outcome"
                - "Fill in entries for every project from the most recent event"
                - "Move hackathon repositories out of personal accounts into an archive organisation"
                - "Update outcome fields for archived projects @recurring(quarterly)"
            - name: Participation and outcome metrics
              description: |-
                ## Purpose
                Sponsors renew budgets when they can see what the last one bought. Tracking a handful of numbers per event, such as participants, teams, first-time entrants, prototypes continued and features shipped within six months, shows whether the programme is growing and gives you facts for the next budget conversation.

                ## Milestones
                1. Five or six metrics chosen and defined so they are counted the same way each time.
                2. Figures recorded for the most recent event and any past events with data.
                3. Shipped features traced back to their hackathon origin where possible.
                4. A one-page summary prepared before each budget round.

                ## Notes
                Start from the **Metrics log** template. Avoid counting lines of code or number of commits; they reward the wrong things.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log with the same five or six measures recorded for every event, and a summary ready before each budget round."
                cadence: rolling
              tasks:
                - "Choose five metrics and write how each one is counted"
                - "Record participants, teams and first-time entrants for the last event"
                - "Update the shipped-from-hackathon count in the metrics log @recurring(monthly:19)"
                - "Prepare a one-page metrics summary before the budget round"
            - name: Sandbox teardown and leftover resource sweep
              description: |-
                ## Purpose
                Hackathon sandboxes are the classic source of surprise cloud bills and forgotten public endpoints with test credentials still attached. A teardown routine run in the days after each event, with a check on anything kept alive for continuing projects, keeps costs and exposure contained.

                ## Milestones
                1. Every sandbox listed with its team and whether it must survive past the event.
                2. Sandboxes for closed projects deleted within a week of the event.
                3. Surviving sandboxes moved under a named owner with a new expiry date.
                4. Public endpoints, keys and tokens created for demos revoked or rotated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All sandboxes for closed projects removed within seven days of each event, and every surviving one has an owner and expiry date."
                cadence: cyclic
              tasks:
                - "Export a list of every hackathon sandbox with its owner"
                - "Ask each team whether their sandbox must survive past the event"
                - "Revoke demo API keys and close any public endpoints"
                - "Check surviving hackathon sandboxes for expired owners and cost @recurring(monthly:27)"
            - name: Rapid prototyping for a two-day build
              description: |-
                ## Purpose
                Engineers used to production standards often spend day one on project scaffolding, authentication and CI, then demo a login page. Practising the habits of rapid prototyping, faking what is not the point, hard-coding the happy path and building the demo first, is a skill that makes hackathon time count.

                ## Milestones
                1. A personal list of shortcuts that are acceptable in a prototype and those that are not.
                2. One practice build of a small idea in four hours using those shortcuts.
                3. A reusable starter template with your usual stack ready to clone.
                4. The demo script written before the first line of code on the next build.

                ## Notes
                Shortcuts never extend to real customer data, real payment systems or disabling security controls on shared environments.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice prototype built in four hours from a personal starter template, with a written list of acceptable shortcuts."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the parts of a prototype you can safely fake or hard-code"
                - "Build a small practice idea in a four-hour time box"
                - "Save your usual stack as a starter template you can clone"
                - "Write the demo script before starting your next build"
            - name: Three-minute demo pitch practice
              description: |-
                ## Purpose
                Judges see twenty demos in an afternoon, and the teams that win are rarely those with the most code but those who show the problem, the result and the next step in three minutes. Practising a tight pitch structure and a live demo with a fallback recording is worth more than the final two hours of coding.

                ## Milestones
                1. A pitch structure of problem, demo, impact and ask, written as a reusable outline.
                2. A three-minute pitch rehearsed at least twice with a timer.
                3. A screen recording of the working demo saved as a fallback.
                4. Feedback from one colleague who has not seen the project.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-minute pitch rehearsed twice against a timer, with a recorded fallback demo and one outside colleague's feedback."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a pitch outline of problem, demo, impact and ask"
                - "Rehearse the pitch twice with a three-minute timer"
                - "Record a fallback video of the working demo"
                - "Ask a colleague outside the team to watch and give feedback"
            - name: Judge briefing and score calibration
              description: |-
                ## Purpose
                Judges who have never scored together will weight technical difficulty, polish and business value very differently, which produces winners nobody can explain. A thirty-minute briefing where judges score two sample past projects and discuss the gaps brings their marks into line before the real demos.

                ## Milestones
                1. Two sample projects with recordings chosen for calibration.
                2. Every judge scores both samples independently using the rubric.
                3. Score differences discussed until judges agree what each level means.
                4. Conflicts of interest declared and recorded before judging.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All judges have scored two sample projects and discussed differences, with conflicts of interest recorded, before demo day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick two past projects with recordings for judges to practise on"
                - "Send judges the rubric and recordings a week ahead"
                - "Run a thirty-minute calibration call to compare scores"
                - "Record each judge's declared conflicts of interest"
            - name: Team formation facilitation
              description: |-
                ## Purpose
                Without help, hackathon teams form around existing friendships, leaving newer engineers, quieter people and non-engineers on the sidelines. Running a structured team-formation session with idea pitches, skill tags and an organiser who matches the leftovers produces mixed teams and more people who come back next time.

                ## Milestones
                1. An idea pitch round format where each pitch lasts sixty seconds.
                2. Skill tags such as frontend, data, design or domain knowledge on every participant's badge or profile.
                3. A matching step for anyone without a team within thirty minutes.
                4. Every registered participant in a team before building starts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team formation session in which every registered participant joins a team within forty-five minutes of pitches starting."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Design a sixty-second idea pitch round with a visible timer"
                - "Prepare skill tags participants add to their badge or profile"
                - "Assign one crew member to match people still without a team"
                - "Count participants without a team at the thirty-minute mark"
            - name: Scoping an idea to fit the time box
              description: |-
                ## Purpose
                The most common hackathon failure is an idea that needed two weeks, leaving a team with half a backend and nothing to show. Learning to cut an idea down to one demonstrable moment, with a written list of what is out of scope, is the single habit that most improves demo quality.

                ## Milestones
                1. The idea reduced to one sentence describing what the audience will see.
                2. A must, nice and out list agreed by the whole team.
                3. A checkpoint at the halfway mark where the team cuts scope if behind.
                4. A working end-to-end path, however crude, before any polishing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team scope sheet with a one-sentence demo moment, must, nice and out lists, and a halfway cut decision recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the one moment the audience should see in the demo"
                - "Sort features into must, nice and out with the whole team"
                - "Set a halfway checkpoint to cut scope if the team is behind"
                - "Get a crude end-to-end path working before polishing anything"
            - name: Hackathon starter kits for internal APIs
              description: |-
                ## Purpose
                Building on internal services usually means hours spent finding the right API, credentials and sample payloads. Preparing starter kits for the five or six most popular internal APIs, with working sample code against sandbox endpoints, turns that lost morning into building time and showcases the platform at the same time.

                ## Milestones
                1. The five or six internal APIs most requested in past events identified.
                2. A starter repository for each with authentication and one working call against a sandbox.
                3. Sample payloads and a short known-limits section in each README.
                4. Kits tested by someone outside the owning team before the event.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Starter repositories for at least five internal APIs, each tested by an outsider making a working sandbox call within thirty minutes."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the internal APIs teams asked about at past events"
                - "Ask each owning team for sandbox endpoints and sample payloads"
                - "Build a starter repository with one working call per API"
                - "Have an engineer from another team test each kit"
            - name: Mentor rota during the build days
              description: |-
                ## Purpose
                Halfway through day one, teams get stuck on unfamiliar internal systems and either give up or burn hours guessing. A rota of senior engineers and platform specialists available for set hours during the build, with a simple way to call them, unblocks teams fast and is often how junior engineers first meet the people who run key systems.

                ## Milestones
                1. Eight to twelve mentors recruited across key systems and skills.
                2. A rota covering all build hours with at least two mentors on at any time.
                3. A help channel or desk where teams request a mentor.
                4. Mentor requests counted and the busiest topics noted for next time.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A mentor rota covering all build hours with two mentors at any time, and mentor request counts recorded after the event."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask eight to twelve senior engineers to mentor for a few hours"
                - "Build a rota with at least two mentors on at any time"
                - "Set up a help channel where teams can call a mentor"
                - "Count mentor requests by topic after the event"
            - name: Themes and challenge statements
              description: |-
                ## Purpose
                An open theme produces scattered toy projects, while a theme that is too narrow excludes half the engineers. Writing three to five challenge statements tied to the hackathon goal, each with a real problem owner who will take questions, gives teams direction and gives winners a natural home afterwards.

                ## Milestones
                1. Candidate themes drawn from the goal, the idea backlog and product leads.
                2. Three to five challenge statements written as problems, not solutions.
                3. A named problem owner for each challenge who will answer questions and attend demos.
                4. An open category kept for ideas outside the challenges, if the goal allows.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three to five published challenge statements, each written as a problem with a named owner who has agreed to attend demos."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect candidate themes from product leads and the idea backlog"
                - "Rewrite each candidate as a problem statement without a solution"
                - "Ask a problem owner for each challenge to attend demos"
                - "Publish the challenges with the sign-up announcement"
            - name: Judging criteria and scoring rubric
              description: |-
                ## Purpose
                Whatever teams think will be judged is what they build towards, so vague criteria reward flashy slides over useful work. A rubric with four or five weighted criteria, each with a short description of what a low, middle and high score looks like, makes judging fair and tells teams what matters before they start.

                ## Milestones
                1. Four or five criteria chosen to match the hackathon goal.
                2. Weights set and published, adding up to one hundred.
                3. Descriptions for low, middle and high scores under each criterion.
                4. The rubric shared with participants at kick-off.

                ## Notes
                Include a criterion for how clear the path to real use is if production adoption is part of the goal.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published rubric with four or five weighted criteria and level descriptions, shared with participants at kick-off."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose four or five judging criteria that match the goal"
                - "Set weights for each criterion that add up to one hundred"
                - "Describe what a low, middle and high score looks like for each"
                - "Share the rubric with participants at kick-off"
            - name: Prizes and recognition within gift policy
              description: |-
                ## Purpose
                Expensive gadgets attract the wrong motivation and can breach company gift or tax rules, while a prize of real time to continue the project often means more to engineers. Choosing prizes and recognition that fit the goal and the company's policy avoids awkward conversations with finance after the event.

                ## Milestones
                1. The company's gift and award policy checked with HR or finance.
                2. Prize categories chosen, such as best overall, best for customers and people's choice.
                3. At least one prize that is time or support to continue the project.
                4. Recognition planned beyond prizes, such as a slot at the all-hands.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A prize list of categories and rewards confirmed with HR or finance as within policy, including at least one continuation prize."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask HR or finance what the gift and award policy allows"
                - "Choose three or four prize categories that match the goal"
                - "Agree with the sponsor a prize of time to continue the project"
                - "Book a slot at the next all-hands to show the winners"
            - name: Choosing collaboration and demo tooling
              description: |-
                ## Purpose
                Demo hour is where tooling breaks: screen sharing fails, adapters go missing and remote judges cannot hear. Deciding the video, chat, progress board and demo setup in advance, and testing them in the actual room, removes the most predictable source of lost demos.

                ## Milestones
                1. Tools chosen for chat, video, progress tracking and live voting.
                2. Demo room or call tested end to end with a laptop, adapters and audio.
                3. A demo order and handover routine that keeps each switch under thirty seconds.
                4. A backup plan if live demos fail, such as pre-recorded videos.

                ## Notes
                Start from the **Operational checklist** template for the demo room test.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Chosen tools listed and a full demo dry run completed in the real room or call at least two days before demos."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide the tools for chat, video, progress boards and voting"
                - "Test the demo room with a laptop, adapters and audio"
                - "Time a demo handover between two laptops"
                - "Ask every team to upload a fallback demo video"
            - name: Inclusion review for hackathon access
              description: |-
                ## Purpose
                Overnight coding and weekend events quietly exclude parents, carers, people who observe religious days and anyone in a distant time zone. Reviewing the format against those constraints, and inviting designers, analysts and support staff, widens who takes part and usually produces better ideas.

                ## Milestones
                1. The schedule kept within normal working hours, with no overnight expectation.
                2. Dates and food checked against religious observances and dietary needs.
                3. Accessibility of the venue and remote tools confirmed.
                4. Non-engineering colleagues explicitly invited with a clear role on teams.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written inclusion review covering hours, observances, accessibility and cross-role invitations, with each gap addressed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the schedule has no overnight or weekend expectation"
                - "Check dates and catering against observances and dietary needs"
                - "Confirm the venue and remote tools are accessible"
                - "Invite design, data and support colleagues with a defined role"
            - name: Graduation criteria for prototypes
              description: |-
                ## Purpose
                Without agreed criteria, which prototypes continue depends on who shouts loudest or which director happened to be in the room. Writing graduation criteria in advance, such as a real user, an owning team, a security review and a rough cost, gives every team the same test and makes the decision defensible.

                ## Milestones
                1. Graduation criteria written as four or five yes or no questions.
                2. The criteria agreed with the sponsor and product leadership.
                3. A decision meeting scheduled within two weeks of each event.
                4. Every demoed project assessed against the criteria and the result recorded.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written graduation criteria agreed with product leadership, and every demoed project assessed against them within two weeks of the event."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft four or five yes or no graduation questions"
                - "Agree the criteria with the sponsor and product leadership"
                - "Schedule the graduation decision meeting before the event starts"
                - "Record each project's result against the criteria"
            - name: Kick-off and idea pitch session
              description: |-
                ## Purpose
                The first hour sets the tone: if the sponsor is absent and the rules are unclear, teams start late and unsure. A tight kick-off with the sponsor's why, the challenges, the rules and the rubric, followed straight away by idea pitches, gets everyone building before mid-morning.

                ## Milestones
                1. A forty-five-minute agenda with speakers and timings fixed.
                2. Sponsor, problem owners and the crew confirmed as attending.
                3. Slides covering goal, challenges, rules, guardrails and rubric ready.
                4. Idea pitches and team formation finished within the planned slot.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kick-off delivered to its timed agenda, with all teams formed and building within ninety minutes of the start."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a forty-five-minute kick-off agenda with timings"
                - "Confirm the sponsor and problem owners will attend"
                - "Prepare slides on goal, challenges, rules, guardrails and rubric"
                - "Rehearse the kick-off once with the crew"
            - name: Demo day run sheet
              description: |-
                ## Purpose
                Demo day runs over when nobody owns the clock, and the last teams present to a tired, half-empty room. A minute-by-minute run sheet with a demo order, a strict timer, a stage manager and a plan for failed demos keeps every team's slot fair.

                ## Milestones
                1. A demo order published the morning of demo day.
                2. A run sheet with times, stage manager, timekeeper and tech support named.
                3. Every team's slot kept to its limit, with a visible timer.
                4. Recordings of all demos saved for the archive.

                ## Notes
                Start from the **Operational checklist** template. Mix strong and early-stage projects in the order rather than saving the best for last.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Demo day finishes within fifteen minutes of its planned end, with every team presenting and every demo recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a minute-by-minute demo day run sheet"
                - "Name a stage manager, timekeeper and tech support person"
                - "Set up recording for every demo"
                - "Publish the demo order on the morning of demo day"
            - name: Judging session and results sign-off
              description: |-
                ## Purpose
                Results that take a week to announce lose all momentum, and results nobody can explain cause lasting resentment. Running deliberation straight after demos with scores collected in one sheet, ties broken by a written rule and feedback notes for every team keeps the decision quick and transparent.

                ## Milestones
                1. Scores from every judge collected in one sheet within fifteen minutes of the last demo.
                2. Ties resolved by a rule written before the event.
                3. Winners agreed and signed off by the head judge.
                4. Two sentences of feedback written for every team, not just the winners.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Winners signed off within an hour of the last demo, with written feedback sent to every team within three days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a single scoring sheet that every judge can use"
                - "Write the tie-break rule before demo day"
                - "Hold a deliberation session straight after the last demo"
                - "Send two sentences of feedback to every team"
            - name: All-hands showcase of winning projects
              description: |-
                ## Purpose
                Most of the company never sees what happens at a hackathon, which makes the next budget harder to win. A short showcase at the all-hands, with the winners demoing and the sponsor saying what happens next, builds wider support and gives the teams the recognition they earned.

                ## Milestones
                1. A ten-minute slot at the next all-hands booked.
                2. Winning teams prepared with a two-minute version of their demo.
                3. The sponsor's statement on next steps for winners agreed in advance.
                4. A written summary with links to recordings shared afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Winning projects presented at an all-hands within a month of the event, followed by a written summary with recording links."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a ten-minute slot at the next all-hands"
                - "Help winners cut their demo to two minutes"
                - "Agree the sponsor's next-step statement for the winners"
                - "Share a written summary with recording links afterwards"
            - name: One-team pilot hackathon
              description: |-
                ## Purpose
                If your company has never run a hackathon, starting with a single team for one day tests the format, the sandboxes and the rules at low cost. The pilot surfaces the practical problems while they are small and gives you a story and real numbers to win support for a wider event.

                ## Milestones
                1. One willing team and its manager signed up for a one-day pilot.
                2. A cut-down rule sheet and one sandbox per pair ready.
                3. Demos held at the end of the day with a guest from leadership.
                4. A one-page write-up of what worked and what to change for a wider event.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-day pilot held with one team, demos seen by a leadership guest, and a one-page write-up produced within a week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask one team manager whether their team will run a one-day pilot"
                - "Prepare a cut-down rule sheet and sandboxes for the pilot"
                - "Invite one leadership guest to the end-of-day demos"
                - "Write a one-page note on what to change for a wider event"
            - name: Cross-functional hackathon with product, design and support
              description: |-
                ## Purpose
                Engineer-only events tend to solve engineering problems, while teams that include a designer, a support agent and a product manager more often build something customers would actually use. Running a hackathon where every team must mix roles changes the ideas, the demos and who in the company cares about the results.

                ## Milestones
                1. Product, design, data and support leads agree to release people for the event.
                2. A team rule requiring at least one non-engineer per team.
                3. Challenges chosen that draw on support tickets and customer research.
                4. Non-engineering participants briefed on what they can contribute in two days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A hackathon in which every team includes at least one non-engineer, with challenges drawn from customer evidence."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask product, design and support leads to release people for the event"
                - "Add a rule that every team includes at least one non-engineer"
                - "Pull three challenge ideas from recent support tickets"
                - "Brief non-engineers on the roles they can play in a team"
            - name: First hackathon as a new engineering manager
              description: |-
                ## Purpose
                New managers often inherit a hackathon tradition or are asked to start one, without the network or budget authority a seasoned organiser has. Running a modest team-level event first, with your manager as sponsor and a clear link to your team's goals, builds credibility and avoids overcommitting in your first months.

                ## Milestones
                1. Your own manager agreed as sponsor with a defined time allowance.
                2. An event sized to your team and one neighbouring team at most.
                3. Team members involved in choosing the challenges.
                4. A short note to your manager on outcomes and whether to grow the event.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A team-level hackathon run with your manager as sponsor, followed by a written outcome note within two weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Raise the idea of a team hackathon in your next 1:1 with your manager"
                - "Agree a time allowance and keep the event to one or two teams"
                - "Ask the team to propose challenges at a retro"
                - "Send your manager a short outcome note after the event"
            - name: Hackathon for a team of under ten engineers
              description: |-
                ## Purpose
                Small teams cannot afford to pause all delivery for two days, and big-event machinery like judges and prize categories feels absurd with three teams. A lightweight format, such as one focused day, peer voting and a single continuation prize, keeps the benefits without the overhead.

                ## Milestones
                1. A one-day format chosen that leaves a skeleton crew on support.
                2. Peer voting chosen in place of a judging panel.
                3. One continuation prize of time agreed with the team lead.
                4. Demos held over a shared lunch or call at the end of the day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-day small-team hackathon held with support cover, peer voting and an agreed continuation prize."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one focused day and arrange a skeleton support crew"
                - "Set up a simple peer vote for the end of the day"
                - "Agree one continuation prize of time with the team lead"
                - "Book a shared lunch or call for the demos"
            - name: Hackathon across distant time zones
              description: |-
                ## Purpose
                When engineers span time zones eight or more hours apart, a single synchronous event leaves someone presenting at midnight. Designing a follow-the-sun format with regional kick-offs, asynchronous progress updates and recorded demos lets everyone take part in working hours.

                ## Milestones
                1. Participants grouped by region with a local captain for each.
                2. Kick-off held in two or three regional sessions with the same content.
                3. Teams formed within regions, or across overlapping hours only.
                4. Demos recorded in advance and judged from recordings plus a live question round.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A distributed hackathon in which no participant has to present or attend outside their local working hours."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Group participants by region and name a local captain for each"
                - "Schedule regional kick-offs with identical content"
                - "Set a deadline for recorded demos before judging"
                - "Plan a live question round that fits overlapping hours"
            - name: Preparing to take part as an engineer
              description: |-
                ## Purpose
                Engineers who arrive with nothing prepared spend the first hours drifting between teams. Arriving with a problem you understand, a quick check that the data or API exists and a rough idea of who you would like to work with makes your two days far more productive, whether or not you win.

                ## Milestones
                1. One idea written as a problem with a clear user.
                2. The data, API or access the idea needs confirmed to exist in a sandbox.
                3. One or two colleagues sounded out about joining you.
                4. Your normal work handed over or paused for the event days.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Arriving with a written problem, confirmed access to what it needs, a possible teammate and your normal work paused."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your idea as a problem with a named kind of user"
                - "Check the data or API you need exists in a sandbox"
                - "Ask one or two colleagues if they would join your team"
                - "Hand over or pause your normal tickets for the event days"
            - name: Making the case under a tight roadmap
              description: |-
                ## Purpose
                When the roadmap is overloaded or headcount is frozen, a hackathon looks like lost delivery, and managers who want one need a better argument than morale. A short business case showing past outcomes, a scaled-down format and a theme tied to an existing roadmap problem turns the event into a way to make progress rather than a pause.

                ## Milestones
                1. The cost of the event in engineer days calculated honestly.
                2. Past outcomes or comparable examples collected as evidence.
                3. A theme tied directly to a current roadmap or reliability problem.
                4. A one-page case presented to the decision maker and their answer recorded.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page hackathon case with costed engineer days and a roadmap-linked theme, presented and the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate the event cost in engineer days"
                - "Collect two or three outcomes from past events as evidence"
                - "Tie the proposed theme to a current roadmap problem"
                - "Present the one-page case and record the decision"
            - name: Hackathon after a merger or reorganisation
              description: |-
                ## Purpose
                After a reorganisation or acquisition, engineers in the combined teams barely know each other's systems or names. A hackathon where every team must include people from both sides, working on integration problems between the old systems, builds relationships and surfaces the real seams faster than any number of slide decks.

                ## Milestones
                1. A team rule requiring members from each former group.
                2. Challenges drawn from known integration gaps between the systems.
                3. Access to both sides' sandboxes arranged in advance.
                4. Integration findings written up and passed to the relevant architects.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A hackathon in which every team mixes members from both former groups, with integration findings passed to architects within a week."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add a team rule requiring members from each former group"
                - "List known integration gaps as challenge candidates"
                - "Arrange sandbox access to both sides' systems"
                - "Write up integration findings for the relevant architects"
            - name: Prototype to production handover path
              description: |-
                ## Purpose
                Graduated prototypes usually have no tests, hard-coded secrets and an owner who wants to go back to their real team. A defined handover path, covering a receiving team, a rebuild plan, a time allowance for the original builders and the normal product process, gives winners a real chance of reaching users.

                ## Milestones
                1. A receiving team named for every graduated prototype.
                2. A short product spec written from the prototype and demo.
                3. A decision recorded on whether to harden the prototype or rebuild it.
                4. Time agreed for at least one original builder to support the handover.
                5. The work entered in the receiving team's normal roadmap.

                ## Notes
                Start from the **Product spec** template. Treat prototype code as a reference, not a foundation, unless it passes your normal review standards.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each graduated prototype has a receiving team, a written spec, a harden or rebuild decision and a slot in that team's roadmap."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Name a receiving team for each graduated prototype"
                - "Write a short product spec from the prototype and demo"
                - "Decide with the receiving team whether to harden or rebuild"
                - "Agree support time for one original builder with their manager"
                - "Check graduated prototypes are still in receiving team roadmaps @recurring(monthly:22)"
            - name: Security and privacy gate for graduating prototypes
              description: |-
                ## Purpose
                A prototype that wowed the judges may still store tokens in plain text, call an unapproved third-party API or log personal data. A light security and privacy review before any graduated prototype touches real users or data catches those issues while they are cheap to fix.

                ## Milestones
                1. A short checklist covering secrets, data flows, third-party services and access control.
                2. Every graduating prototype reviewed against it by a security engineer.
                3. Findings recorded with owners and fixed before any real data is used.
                4. Any external service introduced at the hackathon put through normal vendor review.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every graduating prototype has a completed security and privacy checklist and no open high findings before using real data."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree a one-page review checklist with the security team"
                - "Book a security engineer for each graduating prototype"
                - "Record findings with owners and target dates"
                - "Send any new external service through normal vendor review"
            - name: Twelve-month outcome review of the programme
              description: |-
                ## Purpose
                Applause on demo day says little about whether hackathons are worth their cost. Tracing every graduated project a year later, counting what shipped, what users it reached and what the participants say they gained, gives an honest answer and a sound basis for next year's budget and format.

                ## Milestones
                1. Every graduated project traced to shipped, still in progress or abandoned.
                2. Usage or impact figures gathered for anything that shipped.
                3. A short survey of past participants on skills, relationships and retention effects.
                4. A written programme review with keep, change and stop recommendations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly review tracing every graduated project's outcome, with participant survey results and written recommendations."
                cadence: cyclic
              tasks:
                - "Trace the status of every project graduated in the past year"
                - "Gather usage figures for anything that shipped"
                - "Run the yearly hackathon programme review with the sponsor @recurring(yearly)"
                - "Write keep, change and stop recommendations for next year"
            - name: Internal tooling fix-it hackathon
              description: |-
                ## Purpose
                Every engineering organisation has a list of small tooling irritations, such as slow scripts, confusing dashboards and missing shortcuts, that never win a place on a roadmap. A themed hackathon where teams pick from a voted list of pain points delivers dozens of small wins in two days and is easy to justify to sponsors.

                ## Milestones
                1. A list of tooling pain points collected and voted on by engineers.
                2. The top twenty pain points scoped so each fits a day or less.
                3. Owners of the affected tools agreed to review and merge changes.
                4. Merged fixes counted and announced after the event.

                ## Notes
                Agree in advance that tool owners will review changes within a week, or fixes rot in open pull requests.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fix-it hackathon with a voted pain point list, and the count of merged fixes announced within two weeks."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Open a vote on internal tooling pain points"
                - "Scope the top twenty so each fits in a day"
                - "Ask tool owners to commit to reviewing changes within a week"
                - "Announce the number of merged fixes after the event"
            - name: AI-themed hackathon with model access guardrails
              description: |-
                ## Purpose
                AI hackathons are popular and risky: teams paste source code into public chatbots, rack up model bills and demo features that hallucinate under any real input. Providing approved model access with spend limits, a clear data policy and a judging criterion for evaluation quality keeps the energy while avoiding the obvious incidents.

                ## Milestones
                1. Approved model providers and accounts with per-team spending limits.
                2. A data policy stating what code and data may be sent to models.
                3. A judging criterion rewarding teams that show how they tested output quality.
                4. Usage and spend reviewed after the event and keys revoked.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every team uses approved model accounts with spending limits and a published data policy, and all keys are revoked after the event."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree approved model providers with security and procurement"
                - "Create per-team model accounts with spending limits"
                - "Publish a data policy on what may be sent to models"
                - "Add an output quality criterion to the judging rubric"
            - name: Multi-site annual hackathon programme
              description: |-
                ## Purpose
                Organisations with several engineering sites often end up with separate hackathons that never share winners, tooling or lessons. A single annual programme with local captains, shared rules and sandboxes and a global final for regional winners gives a consistent experience and lets the best ideas reach leadership.

                ## Milestones
                1. A local captain named and resourced at every site.
                2. Shared rules, guardrails, rubric and sandbox setup used by all sites.
                3. Regional events scheduled within the same month.
                4. A global final with regional winners demoing to senior leadership.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All sites run their events on shared rules within one month, and regional winners present at a global final."
                cadence: cyclic
              tasks:
                - "Name a local captain at every engineering site"
                - "Publish one shared kit of rules, rubric and sandbox setup"
                - "Hold a monthly call with site captains during the programme @recurring(monthly:8)"
                - "Book a global final slot with senior leadership"
            - name: Captain handbook for future organisers
              description: |-
                ## Purpose
                When the person who ran the last three hackathons leaves, the knowledge of suppliers, room bookings, sandbox scripts and sponsor quirks goes with them. A handbook built from your run sheets, retros and templates lets a new captain run a good event without starting from zero.

                ## Milestones
                1. A handbook outline covering timeline, roles, suppliers, sandboxes and judging.
                2. Run sheets, rule sheets, rubrics and message plans linked from it.
                3. A twelve-week countdown checklist for new organisers.
                4. The handbook tested by a new captain on the next event and updated.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handbook with a twelve-week countdown and linked templates, used by a new captain for an event and updated afterwards."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Outline the handbook sections from timeline to judging"
                - "Link existing run sheets, rule sheets and rubrics"
                - "Write a twelve-week countdown checklist for organisers"
                - "Ask the next new captain to mark gaps as they use it"
                - "Add new lessons from the improvement log to the handbook @recurring(quarterly)"
---

# Internal Hackathons

Internal hackathons go well when somebody has decided in advance what they are for, what teams may touch and what happens to the winners on Monday morning. These projects start with the foundations (goals and a sponsor, time and budget, rules, data and code ownership, sandboxes and an organising crew), move through the routines that keep ideas, follow-ups and sandbox clean-up going between events, then the skills of scoping, pitching and judging, the choices about themes, rubrics and prizes, the event days themselves, variants for small teams, distributed teams and first-time organisers, and specialist work such as a graduation pipeline and measuring what actually shipped.

What repeats is a monthly idea backlog review, a weekly prototype follow-up during the weeks after each event, a quarterly look at the hackathon calendar and a yearly review of the whole programme against what reached production. The Risk register, Operational checklist, Feedback themes, Metrics log and Product spec templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
