---
id: founding-startups.venture-studio-company-building
name: Venture Studio Company Building
description: "A venture studio run as a system: a written thesis and economics model, idea gates, shared services, founder recruitment, fair studio equity terms and clean spinouts, reviewed on a steady monthly and quarterly rhythm."
category: business
version: 1.0.0
tags: [founding-startups, venture-studio-company-building, founder, venture-studio, company-building, startup-studio, entrepreneur-in-residence, spinouts]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - month-end-close
    - product-spec
    - board-meeting
    - metrics-log
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Venture Studio Company Building
          description: "Creating companies inside a venture studio, from idea selection and shared resources to recruiting founders and spinning companies out."
          projects:
            - name: Studio thesis and three focus areas
              description: |-
                ## Purpose
                Studios without a thesis drift into building whatever the last dinner conversation suggested, and then cannot explain to founders or backers why their companies belong together. Writing a one-page thesis with three focus areas, the unfair advantage the studio brings to each and the ideas it will refuse, gives every later gate a reference point.

                ## Milestones
                1. A one-page thesis naming three focus areas and the customer problems inside each.
                2. For each focus area, the studio's specific edge written down: network, data, distribution or expertise.
                3. A list of five idea types the studio will decline, with a reason for each.
                4. The thesis read and challenged by at least two people outside the studio.

                ## Notes
                A thesis that fits every idea is not a thesis. If nothing in your current idea list would be rejected by it, narrow it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page thesis with three focus areas, a stated edge for each and five excluded idea types has been reviewed by two outsiders."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the ten ideas the studio has discussed most in the last year"
                - "Group them and pick the three focus areas where the studio has a real edge"
                - "Write the five idea types the studio will turn down and why"
                - "Send the draft thesis to two outside operators for blunt feedback"
            - name: Choosing the studio operating model
              description: |-
                ## Purpose
                An independent studio, a corporate studio, a studio attached to a venture fund and a services agency spinning out products all make different promises to founders and need different money behind them. Choosing the model on purpose, rather than inheriting it from how the first company happened, settles who owns what, who pays for the shared team and what founders are offered.

                ## Milestones
                1. Four studio models compared on capital source, founder equity offered, control and speed.
                2. The constraints that rule models out written down, such as available capital or an existing parent company.
                3. One model chosen with a paragraph explaining the trade-offs accepted.
                4. The choice shared with every partner and agreed in writing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of four studio models ends in one chosen model, agreed in writing by all studio partners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch how independent, corporate, fund-attached and agency studios are funded"
                - "Note which constraints of your situation rule out each model"
                - "Write the chosen model and the trade-offs you are accepting"
                - "Get each partner's written agreement to the chosen model"
            - name: Studio economics model per company
              description: |-
                ## Purpose
                A studio is a bet that a shared team can create companies more cheaply and with a higher hit rate than founders working alone, and that bet only holds if the numbers do. A simple model of cost per company created, companies started per year, expected share that reach a seed round and the equity retained shows how long the studio can run and what it must prove.

                ## Milestones
                1. Annual cost of the core studio team and overheads totalled.
                2. Assumptions written for ideas tested, companies formed and companies that raise outside money each year.
                3. Cost per company formed and cost per company that raises calculated.
                4. A runway figure for the studio itself at the current spend.
                5. The three assumptions that matter most flagged for tracking.

                ## Notes
                Studio hit-rate figures quoted in public are mostly self-reported by the studios. Use them as a sanity check, not as your plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet shows cost per company formed, cost per funded company and studio runway, with the three key assumptions flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Total the yearly cost of the core studio team and shared overheads"
                - "Write assumptions for ideas tested, companies formed and companies funded"
                - "Calculate cost per formed company and cost per funded company"
                - "Flag the three assumptions the model is most sensitive to"
            - name: Studio capital structure with legal and tax advisers
              description: |-
                ## Purpose
                Many studios are set up as an operating company that holds stakes, a separate fund that invests alongside, or both, and the choice affects tax, investor terms and how founders see the studio's equity. Mapping the options with a lawyer and a tax adviser before the first spinout avoids restructuring later, when several companies and cap tables already depend on it.

                ## Milestones
                1. A diagram of the proposed entities: studio operating company, any holding vehicle and any fund.
                2. Questions on tax treatment, investor rights and liability prepared for advisers.
                3. Advice from a startup lawyer and a tax adviser received and summarised in plain words.
                4. A structure chosen and the entities needed listed with an owner and date.

                ## Notes
                This project is about preparing and recording decisions. The structure itself must come from qualified advisers in your jurisdiction.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An entity diagram approved after written advice from a lawyer and tax adviser, with each required entity assigned an owner and date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw the entities you think the studio needs on one page"
                - "Write the questions on tax, investor rights and liability for advisers"
                - "Book a session with a startup lawyer and a tax adviser"
                - "Summarise the advice and record the structure you chose"
            - name: Core studio team and shared roles map
              description: |-
                ## Purpose
                The shared team is the studio's product: a product lead, engineers, a designer, a growth person and finance support that each new company can borrow. Mapping which roles sit in the studio, which are hired into each company and how much of each person a company can claim stops two companies fighting over the same engineer in month three.

                ## Milestones
                1. Every studio role listed with its main responsibility and current holder or vacancy.
                2. Each role marked as shared studio staff, company hire or contractor.
                3. A rule written for how many companies one shared person can support at once.
                4. Gaps in the shared team ranked by how often they slow a company down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A roles map lists each studio role, its type and holder, a concurrency rule for shared staff and a ranked list of gaps."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every person and role currently doing work for studio companies"
                - "Mark each role as shared studio staff, company hire or contractor"
                - "Set a limit on how many companies one shared person supports"
                - "Rank the missing roles by how often their absence delayed a company"
            - name: Studio and founder equity framework
              description: |-
                ## Purpose
                Founders compare studio offers on one question: how much of the company they will own and why. A written framework that ties the studio's share to what it actually contributes, such as the idea, early validation, capital, shared team months and brand, with ranges by stage of joining, makes offers consistent and defensible across every company.

                ## Milestones
                1. Studio contributions listed and valued in plain terms for a typical company.
                2. Equity ranges set for a founder joining at idea, validated and post-launch stages.
                3. Founder vesting and studio dilution terms written for the framework.
                4. The framework reviewed by counsel and tested on two hypothetical founders.

                ## Notes
                Founders and later investors look closely at how much studios hold. If the studio stake leaves founders a small minority before seed, expect pushback from both. Agree any change with your lawyer.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written equity framework gives studio and founder ranges for three joining stages, reviewed by counsel and tested on two worked examples."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what the studio contributes before and after a founder joins"
                - "Set studio and founder equity ranges for three joining stages"
                - "Run the framework on two example founders and write the results"
                - "Send the framework to counsel for review before using it in any offer"
            - name: Idea intake and scoring rubric
              description: |-
                ## Purpose
                Ideas reach a studio from partners, corporate sponsors, inbound founders and the team itself, and without a rubric the loudest one wins. A one-page intake form plus a scoring rubric on problem pain, market size, fit with the thesis, studio edge and time to first revenue lets you compare a dozen ideas on the same basis in an afternoon.

                ## Milestones
                1. An intake form capturing problem, customer, source and thesis fit in under ten fields.
                2. A rubric with five weighted criteria and a written description of what a 1, 3 and 5 look like.
                3. The current idea backlog scored by two partners independently.
                4. Disagreements of two points or more discussed and the rubric wording tightened.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An intake form and five-criterion rubric exist, and the full current backlog has been scored by two partners with differences reconciled."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft an intake form with no more than ten fields"
                - "Write the five scoring criteria with anchors for scores of 1, 3 and 5"
                - "Score the current idea backlog with one other partner independently"
                - "Rewrite any criterion where your scores differed by two or more"
            - name: Stage gates from idea to spinout
              description: |-
                ## Purpose
                The studio's advantage is killing weak ideas early and cheaply, which only happens when every stage has a budget, a time box and a clear test to pass. Defining four or five gates, for example idea, validated problem, first paying customers, founder committed and spinout, with the evidence each requires, turns gut feel into a repeatable decision.

                ## Milestones
                1. Four or five named stages written from idea to spinout.
                2. Each gate given a time box, a maximum spend and the evidence needed to pass.
                3. Who decides at each gate written down, with what happens on a split vote.
                4. Current ideas and companies placed on the gate map.

                ## Notes
                Write the kill criteria before the stage starts. Criteria written afterwards almost always bend to fit the result.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gate document defines each stage's time box, budget, pass evidence and decision owner, and every live idea is placed on it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name the stages a studio company passes through before spinout"
                - "Give each stage a time box, spend cap and pass evidence"
                - "Write who decides at each gate and how a tie is broken"
                - "Place every current idea and company on the gate map"
            - name: Studio legal templates kit with counsel
              description: |-
                ## Purpose
                Every studio company needs the same set of documents: IP assignment from the studio, a services agreement for shared team time, a founder offer with vesting and an option to buy back the studio's assets if the company folds. Drafting them once with counsel means each spinout takes days of legal work rather than weeks, and every founder signs comparable terms.

                ## Milestones
                1. A list of documents every studio company needs, agreed with counsel.
                2. Template IP assignment, shared services agreement and founder offer drafted.
                3. A plain-language summary of each template written for founders.
                4. The kit stored in one place with version numbers and the date counsel last reviewed it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned kit of counsel-reviewed studio templates, each with a plain summary for founders, is stored in one shared folder."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every document the last studio company actually needed"
                - "Brief counsel on the IP, services and founder offer templates"
                - "Write a one-page plain summary of each template for founders"
                - "Store the kit with version numbers and a review date"
            - name: Weekly idea pipeline review
              description: |-
                ## Purpose
                Ideas go stale in a shared document unless someone looks at them on a fixed day. A 45-minute weekly review where new intake is scored, ideas in validation report against their gate evidence and at least one idea is moved or dropped keeps the pipeline honest and stops partners nursing favourites in private.

                ## Milestones
                1. A standing weekly slot with partners and the studio product lead.
                2. Every new idea scored with the rubric within one week of intake.
                3. A pipeline board showing each idea's stage and days in stage.
                4. At least one idea advanced, parked or dropped at each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pipeline board is updated weekly and shows no idea sitting in one stage beyond its time box without a recorded decision."
                cadence: rolling
              tasks:
                - "Set up a pipeline board with stage and days-in-stage columns"
                - "Run the idea pipeline review and record one move per idea @recurring(weekly:tue)"
                - "Score every new intake with the rubric before the review"
                - "Archive dropped ideas with a one-line reason for later reuse @recurring(monthly:3)"
            - name: Monthly portfolio company review
              description: |-
                ## Purpose
                Once several companies are live, partners lose track of which ones are quietly stuck. A monthly review of each company against its gate plan, cash, hiring and the one metric that matters most, done in the same format every time, shows where shared team time or partner attention should move next month.

                ## Milestones
                1. A one-page monthly update format agreed with every portfolio company.
                2. Each company reviewed against its gate plan and key metric every month.
                3. Shared team allocation changed where a review shows a company is blocked.
                4. A running log of decisions and follow-ups from each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live company submits a one-page update each month and each review produces a logged decision or follow-up."
                cadence: rolling
              tasks:
                - "Agree a one-page monthly update format with each company lead"
                - "Review each portfolio company's update and log one decision @recurring(monthly:9)"
                - "Flag companies that missed their gate milestone for partner attention"
                - "Send each company its follow-ups within two days of the review"
            - name: Shared services capacity planning
              description: |-
                ## Purpose
                Shared designers, engineers and growth staff are usually booked out before the next company starts, and the newest company gets the leftovers. Planning capacity monthly in hours or days per company, with a buffer for a new idea sprint, makes allocation visible and gives you evidence for the next shared hire.

                ## Milestones
                1. A capacity sheet showing each shared person's available days per month.
                2. Allocations per company agreed for the coming month.
                3. A reserved buffer of time for new idea sprints.
                4. Over-allocation flagged early with a decision on what moves.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly capacity sheet allocates every shared team member's days by company with a sprint buffer, and no one is over 100 percent."
                cadence: rolling
              tasks:
                - "Build a sheet of each shared person's available days per month"
                - "Allocate next month's shared team days by company @recurring(monthly:14)"
                - "Hold back a buffer of days for the next idea sprint"
                - "Raise any person booked over capacity with the partners"
            - name: Quarterly kill or continue gate meetings
              description: |-
                ## Purpose
                Studios fail when every company is kept alive a little longer because the team likes it. A quarterly gate meeting where each company and validation project is judged against the evidence written at the start of its stage, with kill, continue or spin out as the only outcomes, keeps the studio's money moving to the best bets.

                ## Milestones
                1. A gate pack for each company prepared a week before the meeting.
                2. Every company given one of three outcomes: kill, continue to next stage or spin out.
                3. Each decision recorded with the evidence used.
                4. Killed companies wound down and their assets logged for reuse within a month.

                ## Notes
                Invite one person who has no stake in any of the companies to every gate. They ask the questions the team avoids.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every live company receives a recorded kill, continue or spin out decision with evidence each quarter."
                cadence: cyclic
              tasks:
                - "Ask each company lead for a gate pack against their stage evidence"
                - "Hold the gate meeting and record kill, continue or spin out @recurring(quarterly)"
                - "Invite one independent person to challenge each case"
                - "Start the wind-down checklist for any killed company within a week"
            - name: Founder and EIR talent pipeline
              description: |-
                ## Purpose
                Without a founder who will commit years to it, a studio's best idea is useless, and good founders take months to find. Keeping a pipeline of potential CEOs and technical leads, met regularly before there is a role for them, means a validated idea can get its founder within weeks instead of stalling.

                ## Milestones
                1. A tracker of potential founders and entrepreneurs in residence with skills, sector and stage.
                2. Two new founder conversations held each week.
                3. Candidates matched to focus areas of the thesis.
                4. A shortlist ready for every idea approaching the founder gate.

                ## Notes
                Start from the **Person** template for each serious candidate, so their history with the studio is in one place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The founder tracker gains at least eight new conversations a month and every idea at the founder gate has a shortlist of two or more."
                cadence: rolling
              tasks:
                - "Set up a founder tracker with skills, sector and availability"
                - "Hold two founder coffee conversations and log them @recurring(weekly:thu)"
                - "Match tracked candidates to ideas nearing the founder gate @recurring(monthly:23)"
                - "Ask each portfolio founder for two people they would want to build with"
            - name: Studio cost allocation and recharge
              description: |-
                ## Purpose
                Shared team time is a real cost that should show up in each company's books, either as a recharge, as equity already granted or as a services fee. Closing the studio's books monthly and allocating costs by company from the capacity sheet keeps intercompany balances accurate before any outside investor asks.

                ## Milestones
                1. A recharge method agreed with the finance lead and written in the services agreement.
                2. Monthly allocation of studio costs by company from actual time spent.
                3. Intercompany invoices or ledger entries raised each month.
                4. Balances reconciled with each company's books every quarter.

                ## Notes
                Start from the **Month-end close** template. Ask your accountant how recharges should be treated for tax before the first invoice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Studio costs are allocated by company every month and intercompany balances reconcile with each company's books each quarter."
                cadence: rolling
              tasks:
                - "Agree the recharge method with your finance lead and accountant"
                - "Allocate studio costs by company from the capacity sheet @recurring(monthly:20)"
                - "Raise intercompany invoices or ledger entries for each company"
                - "Reconcile intercompany balances with each company's finance contact"
            - name: Quarterly studio investor reporting
              description: |-
                ## Purpose
                Whoever funds the studio, whether limited partners, a parent company or angels in the holding company, needs to see the pipeline, the portfolio and the money on a predictable rhythm. A quarterly report in a fixed shape builds trust well before you ask for the next tranche of capital.

                ## Milestones
                1. A report template covering pipeline, portfolio status, spend and key lessons.
                2. The first report sent within a month of quarter end.
                3. Questions from studio investors logged with answers.
                4. Each later report showing change against the previous quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A quarterly report covering pipeline, portfolio, spend and lessons is sent to studio investors within thirty days of each quarter end."
                cadence: cyclic
              tasks:
                - "Draft a report outline with pipeline, portfolio, spend and lessons"
                - "Ask the agent to draft the quarterly report from the review logs @recurring(quarterly)"
                - "Check every figure in the draft against the studio books"
                - "Log investor questions and send answers within a week"
            - name: Studio playbook library
              description: |-
                ## Purpose
                The reason to build several companies in one place is that the fifth should be easier than the first. A library of short playbooks, such as setting up billing, running a customer interview sprint, hiring a first engineer or closing a pilot contract, updated after each company uses them, is how lessons survive staff turnover.

                ## Milestones
                1. A list of the ten tasks every studio company repeats.
                2. A short playbook for each, with an owner and last-updated date.
                3. Each company's lead asked monthly which playbook failed them.
                4. Playbooks unused for six months archived or rewritten.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten playbooks exist with owners and dates, and each has been reviewed or updated within the last six months."
                cadence: rolling
              tasks:
                - "List the ten tasks every studio company has had to do from scratch"
                - "Write the first three playbooks in one page each"
                - "Ask company leads which playbook let them down and fix it @recurring(monthly:27)"
                - "Archive any playbook that has not been opened in six months"
            - name: Annual thesis and model refresh
              description: |-
                ## Purpose
                Markets, the team's skills and the studio's own results all shift in a year, and a thesis that never changes slowly stops describing what the studio actually does. A yearly refresh comparing the thesis and economics model to what really happened, which companies worked and why, resets focus areas and assumptions for the year ahead.

                ## Milestones
                1. The year's actual numbers set beside the economics model's assumptions.
                2. Each focus area marked as keep, change or drop with a reason.
                3. A revised thesis and model shared with partners and studio investors.
                4. Next year's targets for ideas tested and companies formed agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A revised thesis and economics model, with keep, change or drop decisions on each focus area, is agreed by partners every year."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Compare this year's actual results with the economics model assumptions"
                - "Mark each focus area keep, change or drop with a reason"
                - "Hold the annual thesis refresh session with all partners @recurring(yearly)"
                - "Share the revised thesis and targets with studio investors"
            - name: Running two-week problem sprints
              description: |-
                ## Purpose
                Validation inside a studio works best as a fixed sprint: two weeks, a small team, fifteen to twenty customer conversations and one cheap test, ending in a gate decision. Practising the format on two ideas teaches the team how much evidence a fortnight can really produce and where the sprint plan needs changing.

                ## Milestones
                1. A sprint plan template with daily goals for a two-week validation sprint.
                2. The first sprint run on an idea from the pipeline and its gate decision recorded.
                3. A short retrospective listing what to change in the format.
                4. A second sprint run on the revised plan.

                ## Notes
                The studio's version of this differs from a lone founder's because a partner, not the person running the sprint, makes the call at the end.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two two-week sprints have been run, each ending in a recorded gate decision, with the sprint template revised after the first."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a two-week sprint plan with a goal for each day"
                - "Pick the top-scoring pipeline idea for the first sprint"
                - "Hold a thirty-minute retrospective at the end of the sprint"
                - "Revise the template and schedule the second sprint"
            - name: Assessing founders for studio companies
              description: |-
                ## Purpose
                Studio founders join a company that already has an idea, a team and a partner watching, so the traits that matter differ from a founder starting alone: comfort with shared ownership, speed of learning and the drive to make someone else's idea their own. Building and practising a structured assessment helps partners stop hiring the most impressive talker.

                ## Milestones
                1. Five traits the studio looks for in a founder written with examples of evidence.
                2. An interview guide with questions and a work exercise mapped to each trait.
                3. Three practice assessments run with candidates and scored by two partners.
                4. References taken using questions tied to the traits.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A founder assessment guide covering five traits has been used on three candidates with scores from two partners recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the five traits that predicted success in past studio founders"
                - "Draft interview questions and a short work exercise for each trait"
                - "Run the assessment with three candidates alongside another partner"
                - "Prepare reference questions tied to each trait"
            - name: Benchmarking five established venture studios
              description: |-
                ## Purpose
                Studios differ widely in how many companies they form, the equity they take and how they support founders after spinout, and most of that is visible in public interviews, founder posts and studio websites. Studying five studios close to your model, and talking to a founder from each, shows which practices you can copy and which terms founders resent.

                ## Milestones
                1. Five studios chosen that resemble your model, sector or region.
                2. For each, notes on companies formed, founder terms where public and support offered.
                3. Conversations held with at least three founders who built inside one of them.
                4. Three practices to copy and three to avoid written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A benchmark note on five studios, informed by three founder conversations, lists three practices to adopt and three to avoid."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick five venture studios whose model resembles yours"
                - "Collect public detail on their companies, terms and founder support"
                - "Message three founders who built inside those studios for a call"
                - "Write three practices to copy and three to avoid"
            - name: Writing a company formation memo
              description: |-
                ## Purpose
                Before the studio commits a founder and a budget, the case for the company should exist on two pages that anyone can challenge: the problem and evidence, why the studio, the plan to the next gate, the money needed and the risks. Writing the memo forces the reasoning out of conversations and becomes the baseline the next gate measures against.

                ## Milestones
                1. A two-page memo template agreed with partners.
                2. The first memo written for a company passing the validation gate.
                3. The memo challenged in a review by someone outside the deal.
                4. The memo filed and referenced at the company's next gate meeting.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A two-page formation memo exists for the next company to pass validation and was used as the baseline at its following gate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the six sections of a two-page formation memo"
                - "Write the memo for the next idea to pass validation"
                - "Ask a partner not involved in the idea to attack its weakest section"
                - "File the memo where the next gate reviewer will find it"
            - name: Sitting on studio company boards
              description: |-
                ## Purpose
                Studio partners often take a board seat in every company they form, which can mean five or more boards at once, each with its own founder who needs both support and challenge. Learning to prepare, contribute and hold back in a portfolio board, and knowing when the studio's interest and the company's differ, is a distinct skill.

                ## Milestones
                1. The board duties that apply in your jurisdiction summarised with counsel's help.
                2. A preparation routine for each board meeting agreed with founders.
                3. A note for each board on where the studio's interest might differ from the company's.
                4. Feedback from two founders on how useful the partner is in the boardroom.

                ## Notes
                Start from the **Board meeting** template for each company's meetings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of board duties, a preparation routine and written feedback from two founders on board contribution are on file."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel for a one-page summary of director duties that apply"
                - "Agree a board pack format and timing with each founder"
                - "Write where the studio's interest could differ from each company's"
                - "Ask two founders how you could be more useful on their board"
            - name: Studio post-mortem pattern library
              description: |-
                ## Purpose
                A studio kills most of what it starts, and each killed company carries lessons that are lost if they live only in the heads of the people who worked on it. A short, blameless post-mortem for every killed idea and company, collected into a pattern library, shows which kinds of ideas the studio is bad at and which gates let weak bets through.

                ## Milestones
                1. A one-page blameless post-mortem format.
                2. Post-mortems written for every company killed in the last two years.
                3. Common patterns grouped across post-mortems.
                4. At least one change to the rubric or gates made because of a pattern.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every killed company has a post-mortem in the library, and at least one rubric or gate change cites a pattern from it."
                cadence: rolling
              tasks:
                - "Draft a one-page blameless post-mortem format"
                - "Write post-mortems for companies killed in the last two years"
                - "Group patterns across post-mortems and share them at a gate meeting @recurring(quarterly)"
                - "Change one rubric criterion or gate rule based on a pattern"
            - name: Explaining the studio deal to founders
              description: |-
                ## Purpose
                Experienced founders often arrive suspicious of studio equity, and a vague answer loses the best ones. Practising a clear explanation of what the studio contributes, what the founder gets, how vesting works and what happens at seed, with a worked example, wins trust and filters out founders who would resent the terms later.

                ## Milestones
                1. A one-page founder explainer with a worked equity example through a seed round.
                2. Answers written for the ten hardest founder questions on studio terms.
                3. The explainer tested with three founders and revised.
                4. Every partner able to give the same explanation in under five minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A founder explainer with a worked equity example and ten written answers has been tested with three founders and revised."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a worked example of founder and studio ownership through seed"
                - "List the ten hardest questions founders have asked about studio terms"
                - "Test the explainer with three founders and note confusions"
                - "Rehearse the five-minute explanation with each partner"
            - name: Shared technical starter kit for new companies
              description: |-
                ## Purpose
                Each studio company rebuilding sign-in, billing, analytics and deployment from scratch wastes the shared engineers' first month. A maintained starter kit with those basics, clear licensing so each company owns its copy outright, and a short handover guide can cut the time to a first usable product by weeks.

                ## Milestones
                1. The components every company rebuilt listed and ranked by time spent.
                2. A starter kit specification agreed with the shared engineering lead.
                3. The kit built and used by one new company.
                4. IP terms for the kit written into the studio services agreement.

                ## Notes
                Start from the **Product spec** template. Keep the kit small; a starter kit that tries to be a platform slows companies down when they need to diverge.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One new studio company launched on the starter kit, with kit IP terms written into the services agreement."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List the components the last three companies each built from scratch"
                - "Write the starter kit specification with the engineering lead"
                - "Agree with counsel how kit IP passes to each company"
                - "Pilot the kit with the next company to form"
            - name: Bringing outside co-investors into studio companies
              description: |-
                ## Purpose
                At some point each studio company needs money from outside the studio, and the timing changes both the valuation and how much the studio's stake is diluted. Deciding in advance at which gate outside investors come in, and which investors the studio introduces, keeps founders from raising too early on studio-dependent traction.

                ## Milestones
                1. Options compared for outside money: pre-seed alongside the studio, at spinout or at seed.
                2. A default rule for when studio companies raise outside capital.
                3. A list of investors who understand studio cap tables, with notes on each.
                4. The rule shared with current founders and tested on one live company.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule on when studio companies raise outside money exists, with a vetted investor list, and has been applied to one company."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare raising alongside the studio, at spinout and at seed"
                - "Write the default gate at which outside money comes in"
                - "List investors who have backed studio companies before"
                - "Discuss the rule with one live company's founder"
            - name: Equity or cash fee for studio services
              description: |-
                ## Purpose
                Some studios charge companies for shared team time in cash once they raise, others take more equity up front, and many mix both. Choosing the default after modelling both on a typical company affects how founders feel at seed, how much cash the studio recovers and how clean the cap table looks to the next investor.

                ## Milestones
                1. A typical company modelled under equity-only, cash fee and mixed approaches.
                2. Founder ownership at seed and studio cash recovered calculated for each.
                3. Views gathered from two founders and one seed investor.
                4. A default chosen and written into the equity framework.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three charging approaches are modelled on one example company and a default is chosen and recorded in the equity framework."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Model one example company under equity, cash and mixed charging"
                - "Calculate founder ownership at seed under each approach"
                - "Ask two founders and a seed investor which they prefer"
                - "Record the default in the equity framework"
            - name: Founder package revision after the first cohort
              description: |-
                ## Purpose
                First-cohort founders know exactly where the package fell short: salary, equity, decision rights, support after spinout or the clarity of the handover. Interviewing them and revising the package once, deliberately, beats making one-off concessions that the next founder will hear about.

                ## Milestones
                1. Interviews held with every founder from the first cohort.
                2. Complaints and praise grouped by part of the package.
                3. A revised package with changes and reasons written down.
                4. Existing founders told what changed and whether it applies to them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every first-cohort founder has been interviewed and a revised founder package with recorded reasons for each change is published."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a forty-five minute conversation with each first-cohort founder"
                - "Group their feedback by salary, equity, rights and support"
                - "Write the revised package and the reason for each change"
                - "Tell current founders what changed and whether it applies to them"
            - name: Which services to centralise in the studio
              description: |-
                ## Purpose
                Legal, finance, recruiting, design, engineering and growth can each be shared in the studio or left to every company, and getting it wrong either bloats studio overhead or leaves companies under-supported. Scoring each service on how similar it is across companies and how much expertise it needs points to a sensible split.

                ## Milestones
                1. Each candidate service scored on similarity across companies and expertise needed.
                2. Usage data from the capacity sheet attached to each service.
                3. A recommended list of centralised, shared on request and company-owned services.
                4. Partners' decision recorded with the cost impact.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every studio service is classed as centralised, on request or company-owned, with usage data and cost impact attached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every service the studio currently provides to companies"
                - "Score each on similarity across companies and expertise needed"
                - "Pull six months of usage from the capacity sheet"
                - "Present the recommended split to partners for a decision"
            - name: Cutting time from idea to first paying customer
              description: |-
                ## Purpose
                Days from a validated idea to the first paying customer is one of the clearest signs the studio is getting better at its craft. Mapping where the last three companies lost time, often legal set-up, waiting for a founder or rebuilding basics, and fixing the two biggest delays makes every later company faster.

                ## Milestones
                1. Timelines rebuilt for the last three companies from idea to first payment.
                2. The two largest delays named with their causes.
                3. A fix in place for each delay.
                4. The next company's time to first payment measured against the old average.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The next company reaches its first paying customer faster than the average of the previous three, with two named delays fixed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Rebuild the timeline from idea to first payment for three companies"
                - "Mark the two longest waits and what caused them"
                - "Agree a fix for each delay with the people involved"
                - "Measure the next company's time to first payment"
            - name: Studio proposition for founders and backers
              description: |-
                ## Purpose
                Founders choosing between the studio, a job and going alone, and investors deciding whether to back studio companies, both need to know in one sentence what makes this studio different. A clear proposition backed by real numbers and founder stories makes recruiting and fundraising easier and keeps partners describing the studio the same way.

                ## Milestones
                1. One sentence for founders and one for investors on why this studio.
                2. Three proof points with real numbers or founder quotes, used with permission.
                3. The studio website and founder explainer updated to match.
                4. The message tested in five founder conversations.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A founder sentence, an investor sentence and three permitted proof points are live on the website and used in five founder conversations."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write one sentence each for founders and investors on why this studio"
                - "Gather three proof points and get permission for any founder quotes"
                - "Update the website and founder explainer to match"
                - "Use the new wording in five founder conversations and note reactions"
            - name: First company spinout day
              description: |-
                ## Purpose
                Spinout is the day a studio company becomes a standalone company with its own board, bank account, contracts and staff, and many things must move at once. Running it as a dated event with a checklist, signed documents and a clear message to staff and customers makes the first one a template for the rest.

                ## Milestones
                1. A spinout checklist covering entity, IP transfer, contracts, bank, staff and systems.
                2. All spinout documents signed by studio and founders.
                3. Staff moving to the company given new contracts and briefed.
                4. Customers and suppliers told of the change where contracts require it.
                5. A retrospective written within two weeks of spinout.

                ## Notes
                Check each customer and supplier contract for assignment clauses well before the date. These are the items most often found late.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first company is spun out on its planned date with all spinout documents signed and a retrospective filed within two weeks."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Draft the spinout checklist from the legal templates kit"
                - "Review every customer and supplier contract for assignment clauses"
                - "Brief moving staff on their new contracts a month ahead"
                - "Hold a spinout retrospective and update the checklist"
            - name: Studio demo day for investors
              description: |-
                ## Purpose
                A studio demo day puts several companies in front of investors at once, which can bring outside money in faster than each founder running their own process. Planning it four months out, with rehearsed pitches, a curated investor list and follow-up owned by each founder, makes it a funding event rather than a showcase.

                ## Milestones
                1. A date set and a list of companies ready to present.
                2. A curated invite list of investors who back companies at this stage.
                3. Every pitch rehearsed at least twice with partner feedback.
                4. Follow-up meetings logged for each company within two weeks.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Demo day is held on the planned date and every presenting company has logged its investor follow-up meetings within two weeks."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Choose the date and confirm which companies will present"
                - "Build an invite list of investors active at this stage"
                - "Schedule two rehearsals for each founder with a partner"
                - "Track follow-up meetings for each company after the day"
            - name: First outside seed round for a studio company
              description: |-
                ## Purpose
                Investors in a studio company's first seed round judge the studio's model as much as the company, asking about the studio's stake, its services agreement and whether the founder is truly in charge. Preparing the founder and the studio's paperwork together, with a clean cap table and clear answers, protects both the round and the studio's reputation.

                ## Milestones
                1. A clean cap table showing studio, founder and any option pool holdings.
                2. The services agreement and any recharges summarised for investors.
                3. Answers prepared on studio control, rights and future involvement.
                4. The founder leading the round, with the studio in a supporting role agreed in writing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A clean cap table, a services summary and written answers on studio rights are ready before the company's first seed investor meeting."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Check the cap table with counsel for errors before any investor sees it"
                - "Write a one-page summary of the studio services agreement"
                - "Draft answers on studio control and future involvement"
                - "Agree in writing that the founder leads the round"
            - name: Annual studio founder summit
              description: |-
                ## Purpose
                Founders who built inside the studio are its best recruiters, customers for each other and source of hard feedback, but they drift apart after spinout. A yearly summit of current and past founders, partners and the shared team keeps the network useful and gives the studio a day of honest feedback.

                ## Milestones
                1. A date and venue booked with current and past founders invited.
                2. An agenda with founder-led sessions and one feedback session on the studio.
                3. Feedback captured and themes shared with all attendees.
                4. Two actions from the feedback committed with owners.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The summit is held each year and two actions from founder feedback are committed with owners within a month."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Pick a date and invite all current and past studio founders"
                - "Ask three founders to lead a session on a hard lesson"
                - "Plan and run the yearly founder summit @recurring(yearly)"
                - "Share feedback themes and two committed actions with attendees"
            - name: Shared services handover after spinout
              description: |-
                ## Purpose
                Spun-out companies usually keep using some studio services for a few months while they hire their own team, and without an end date the arrangement drifts. A handover plan with a list of services, a transition period, the fee and the date each service stops lets both sides plan hiring and costs.

                ## Milestones
                1. A list of studio services the company still uses at spinout.
                2. A transition period and end date agreed for each service.
                3. Hiring plans in the company for every service that ends.
                4. All transition services closed by the agreed dates.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every transition service for a spun-out company has an agreed end date and all have ended on schedule."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every studio service the spun-out company still relies on"
                - "Agree an end date and fee for each with the founder"
                - "Check the company's hiring plan covers each service that ends"
                - "Confirm in writing as each service closes"
            - name: Joining a studio as an entrepreneur in residence
              description: |-
                ## Purpose
                Entrepreneurs in residence join a studio before there is a company, often on a salary for six to twelve months, to explore ideas and possibly lead one. Agreeing clear expectations up front, including how long, which ideas, what equity follows and what happens if no company emerges, keeps a promising arrangement from ending in confusion.

                ## Milestones
                1. The residency length, salary and review points written down.
                2. The focus areas and ideas you will explore agreed with a partner.
                3. Equity terms if you become founder confirmed in writing.
                4. A plan for the end of the residency whether or not a company forms.

                ## Notes
                Ask to speak to a past entrepreneur in residence at the same studio before signing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed residency letter sets length, salary, focus areas, founder equity terms and the end-of-residency plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the studio for a past entrepreneur in residence you can call"
                - "Write the questions on length, ideas, equity and exit"
                - "Get the equity terms if you become founder in writing"
                - "Agree what happens if no company emerges by the end"
            - name: Corporate venture studio inside a larger company
              description: |-
                ## Purpose
                Corporate studios build new companies for a parent organisation, with access to customers, data and brand but also budget cycles, procurement and executives who expect results within a year. Agreeing the mandate, the founder incentives and how a successful company leaves or stays inside the parent avoids the commonest reasons corporate studios are shut down.

                ## Milestones
                1. A written mandate from the sponsoring executive with budget and time horizon.
                2. Rules for founders' equity or incentives inside a corporate structure.
                3. An agreed path for a winning company: spin out, absorb or partner.
                4. A monthly sponsor update in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed mandate, founder incentive rules and an agreed exit path exist, and the sponsor receives a monthly update."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draft the studio mandate with budget and time horizon"
                - "Ask HR and legal how founder incentives can work inside the group"
                - "Agree with the sponsor how a winning company spins out or is absorbed"
                - "Send the sponsoring executive a short studio update @recurring(monthly:11)"
            - name: Solo operator studio of small products
              description: |-
                ## Purpose
                Some founders run a one-person studio, building several small software products or online businesses in parallel and keeping the ones that earn. With no shared team, the constraint is your own hours, so rules on how many products you run at once, when to stop working on one and when to sell or hand one over matter more than any equity framework.

                ## Milestones
                1. A rule for the maximum number of products in active build at once.
                2. A revenue or usage threshold each product must reach within a set time.
                3. A shared code and tools base reused across products.
                4. One product stopped, sold or handed over under the rule.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written rules cap active products and set a threshold, and at least one product has been stopped, sold or handed over by those rules."
                cadence: rolling
              tasks:
                - "Set the maximum number of products you will build at once"
                - "Write a revenue or usage threshold and deadline for each product"
                - "Move shared code and tools into one reusable base"
                - "Apply the threshold and stop or sell one product that misses it"
            - name: Turning an agency into a venture studio
              description: |-
                ## Purpose
                Design and development agencies often try to become studios by putting spare staff on their own products, then find client work always wins. Ring-fencing a budget and named people for studio work, separating the books and deciding how staff share in studio equity makes the shift real rather than a side hobby.

                ## Milestones
                1. A fixed share of team time and budget ring-fenced for studio work.
                2. Separate accounting for studio work and client work.
                3. A staff participation scheme for studio company equity agreed with advisers.
                4. One studio product shipped without being pulled back for client work.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Studio time and budget are ring-fenced, accounts separated and one studio product has shipped without being delayed by client work."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Decide the share of team time ring-fenced for studio work"
                - "Set up separate accounting for studio and client work"
                - "Ask advisers how staff could share in studio company equity"
                - "Name the people who will not be pulled onto client work"
            - name: Running a studio in a smaller or emerging market
              description: |-
                ## Purpose
                In smaller markets, such as a Caribbean island, a secondary city or a young startup ecosystem, studios face thinner founder pools, fewer local investors and customers who may sit across borders. Planning for this, with regional or diaspora founders, a route to investors abroad and companies built for export from day one, turns the studio's local knowledge into an edge.

                ## Milestones
                1. The local talent, capital and customer gaps mapped honestly.
                2. A founder sourcing plan that includes diaspora and regional candidates.
                3. Relationships started with at least three investors outside the home market.
                4. Each company's plan showing customers beyond the home market.

                ## Notes
                Check early whether companies will need a holding entity in another jurisdiction for outside investors, and get advice before incorporating.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of local gaps, a founder sourcing plan with diaspora candidates and contact with three foreign investors are in place."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map the local gaps in founders, capital and customers"
                - "List diaspora and regional founder candidates from your networks"
                - "Introduce the studio to three investors outside the home market"
                - "Check with advisers whether companies need a foreign holding entity"
            - name: Studio-backed founder after spinout
              description: |-
                ## Purpose
                After spinning out of a studio, a founder inherits a cap table, a services agreement and a partner on the board, and the relationship has to change from builder and manager to shareholder and adviser. Agreeing that shift explicitly, with what the studio still does and what decisions are now the founder's alone, protects the founder's authority with the team and investors.

                ## Milestones
                1. A list of decisions that now sit with the founder alone.
                2. The studio's remaining role written down: board seat, introductions, services.
                3. A regular check-in with the studio partner set on the founder's terms.
                4. Any rights the studio keeps understood with counsel's help.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement between founder and studio lists founder-only decisions, the studio's remaining role and any rights it keeps."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the decisions you expect to make without the studio"
                - "List what the studio will still provide and for how long"
                - "Ask counsel to explain the rights the studio keeps"
                - "Agree the new check-in rhythm with your studio partner"
            - name: Raising a dedicated studio fund
              description: |-
                ## Purpose
                Once a studio grows past a handful of companies, it often raises a fund from limited partners to invest alongside the studio's own stakes. Preparing the story, the track record and the data room, and working with fund formation counsel on structure and regulation, is a long process that rewards starting with a clear plan.

                ## Milestones
                1. A track record summary of every company formed, with honest outcomes.
                2. A fund strategy note on size, focus and how the fund relates to the studio.
                3. Fund formation counsel engaged and regulatory questions answered for your jurisdiction.
                4. A data room ready for prospective limited partners.
                5. A target list of limited partners with first meetings booked.

                ## Notes
                Fund raising is regulated in most places, including how you may approach investors. Take formal advice before any outreach.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Counsel is engaged, a track record summary and data room are complete, and first meetings with prospective limited partners are booked."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Write a track record summary covering every company the studio formed"
                - "Draft the fund strategy note on size, focus and studio relationship"
                - "Engage fund formation counsel before contacting any investor"
                - "Build the data room and target list of limited partners"
            - name: Studio performance scorecard
              description: |-
                ## Purpose
                Partners and studio investors need a handful of numbers that show whether the studio itself works, separate from how any single company is doing. A scorecard of ideas tested, companies formed, share that raise outside money, months to seed, cost per company and founder retention, kept every quarter, makes the annual refresh and fund conversations evidence-based.

                ## Milestones
                1. Six studio metrics defined with formulas.
                2. Historical values filled in for every quarter since the studio began.
                3. The scorecard updated every quarter.
                4. Each metric compared with the economics model's assumption.

                ## Notes
                Start from the **Metrics log** template and keep the formulas next to the numbers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A six-metric studio scorecard with historical values is updated every quarter and compared with the economics model."
                cadence: rolling
              tasks:
                - "Define the six studio metrics and their formulas"
                - "Backfill each metric for every quarter since the studio began"
                - "Update the scorecard and compare it with the model @recurring(quarterly)"
                - "Share the scorecard with partners before each gate meeting"
            - name: Liquidity options for studio stakes
              description: |-
                ## Purpose
                Minority stakes in companies that may take ten years to exit sit awkwardly beside studio costs that arrive every month. Understanding the options to return cash before an exit, such as selling part of a stake in a later round, secondary sales or dividends from profitable companies, and the founder and investor reactions to each, helps the studio plan without surprising anyone.

                ## Milestones
                1. The ways a studio can realise value before exit listed with pros and cons.
                2. Transfer restrictions in each company's documents summarised with counsel.
                3. A studio policy on when partial sales are considered.
                4. Founders told the policy so a sale never comes as a surprise.

                ## Notes
                This is about understanding options and preparing. Any actual sale needs advice from counsel and the agreement of the company's board.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written liquidity policy, informed by a counsel summary of transfer restrictions, is shared with every portfolio founder."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the ways the studio could realise value before an exit"
                - "Ask counsel to summarise transfer restrictions in each company"
                - "Write a short studio policy on partial sales"
                - "Share the policy with each portfolio founder"
            - name: Conflicts of interest policy across the portfolio
              description: |-
                ## Purpose
                Holding stakes in companies that may later compete, share a customer or want the same shared engineer is normal for a studio, and partners sit on several boards at once. A written conflicts policy, with how competing ideas are handled, how confidential information is kept apart and how partners declare interests, protects the founders' trust and the studio's reputation.

                ## Milestones
                1. The likely conflict types listed with an example from the portfolio.
                2. A policy covering competing companies, confidential information and partner interests.
                3. A conflicts register kept and checked before each new company forms.
                4. Every partner and founder briefed and the policy reviewed once a year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conflicts policy and register exist, every partner and founder has been briefed and the policy is reviewed each year."
                cadence: rolling
              tasks:
                - "List conflict types the studio has already met or could meet"
                - "Draft the conflicts policy and have counsel review it"
                - "Check the conflicts register before each new company forms"
                - "Review the conflicts policy and register with partners @recurring(yearly)"
            - name: Reusing assets and people from killed companies
              description: |-
                ## Purpose
                When a studio company is killed, its code, customer insight, domain names, contracts and team can carry straight into the next idea, which is one of the studio model's few true advantages. A wind-down routine that logs reusable assets, moves people to new projects and closes the entity properly turns each failure into a head start.

                ## Milestones
                1. A wind-down checklist covering customers, contracts, IP, people and the entity.
                2. An asset register of reusable code, research and relationships from killed companies.
                3. Team members from each killed company offered a new role or a fair exit.
                4. At least one new company that started from a reused asset.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each killed company is closed with the checklist, its assets logged in the register and its team offered new roles or a fair exit."
                cadence: rolling
              tasks:
                - "Write a wind-down checklist for studio companies"
                - "Start an asset register of code, research and relationships"
                - "Offer each affected person a new studio role or a fair exit"
                - "Check the asset register before starting each new idea sprint"
            - name: Long-term governance of studio minority stakes
              description: |-
                ## Purpose
                Years after spinout the studio may hold small stakes in a dozen companies, each with information rights, board observer seats and consents to give. A governance routine that tracks rights, records every consent and steps back from boards as companies mature keeps the studio a welcome shareholder and stops obligations being missed.

                ## Milestones
                1. A register of the studio's rights in each company: information, board, consents.
                2. A partner named as owner for each stake.
                3. A yearly review of which board seats to keep or give up.
                4. Every consent request answered and recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rights register names an owner for every stake, consents are recorded and board seats are reviewed each year."
                cadence: cyclic
              tasks:
                - "Build a register of the studio's rights in each company"
                - "Assign a partner owner to every stake"
                - "Review which board seats to keep or give up @recurring(yearly)"
                - "Record every consent request and the studio's answer"
            - name: Scaling the studio to more companies a year
              description: |-
                ## Purpose
                Going from two companies a year to five strains every part of the studio: the shared team, partner attention, the founder pipeline and the capital behind it. Planning the step up with the scorecard in hand, deciding what must change first and what the extra companies will cost, avoids a year where every company gets half the support it needs.

                ## Milestones
                1. A target number of companies per year agreed with partners and studio investors.
                2. The bottlenecks to that target ranked from the scorecard and capacity data.
                3. A hiring and capital plan for the shared team at the new rate.
                4. A first quarter at the higher rate reviewed against the plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scaling plan with a target rate, ranked bottlenecks and a costed hiring plan is agreed and its first quarter reviewed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the target number of companies per year with partners"
                - "Rank the bottlenecks using the scorecard and capacity sheet"
                - "Cost the shared team and capital needed at the new rate"
                - "Review the first quarter at the new rate against the plan"
---

# Venture Studio Company Building

This area is for people building companies inside a venture studio: the studio partners who choose ideas and fund the shared team, and the founders and entrepreneurs in residence who take those companies on. It starts with foundations (thesis, model, economics, capital structure, equity framework, idea rubric, stage gates and legal templates), then the operating machinery of pipeline reviews, portfolio reviews and kill gates, the skills of sprints, founder assessment and memos, the improvements and decisions that sharpen the model, the dated moments such as spinouts and demo days, variants for corporate, solo, agency and emerging-market studios, and finally the specialist work of studio funds, liquidity and long-term governance.

What repeats is a Tuesday idea pipeline review, a Thursday founder pipeline session, monthly portfolio, capacity, cost recharge and playbook routines, quarterly kill gates and investor reporting, and a yearly thesis refresh. The **Person**, **Month-end close**, **Product spec**, **Board meeting** and **Metrics log** templates pair with the founder pipeline, the cost recharge, the shared starter kit, portfolio board seats and the studio scorecard. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
