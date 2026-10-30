---
id: fundraising-investors.nonprofit-capital-campaign
name: Nonprofit Capital Campaign
description: "A multi-year capital campaign run with discipline: readiness and a planning study, a gift range chart and case for support, a quiet phase led by lead gifts, pledge and recognition records, then launch, close and dedication."
category: business
version: 1.0.0
tags: [fundraising-investors, nonprofit-capital-campaign, nonprofit, manager, capital-campaign, case-for-support, gift-range-chart, endowment]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - meeting-notes
    - metrics-log
    - board-meeting
    - marketing-campaign
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Nonprofit Capital Campaign
          description: "Running a multi-year campaign to fund a building, endowment or major programme, with a case for support, gift table and committee."
          projects:
            - name: Capital campaign readiness assessment
              description: |-
                ## Purpose
                Before anyone mentions a building fund in public, the organisation needs an honest look at whether it can carry three to five years of concentrated fundraising. A readiness assessment checks the board's own giving and willingness to ask, the strength of major gift relationships, the state of donor records and whether staff have capacity, so weak spots are fixed in the planning year rather than discovered in front of a lead donor.

                ## Milestones
                1. A readiness scorecard covering board, leadership, donor base, data, staff capacity and finances, each rated red, amber or green.
                2. Giving totals for the last five years summarised, including the ten largest gifts and who made them.
                3. Every red rating paired with a corrective action, an owner and a date.
                4. The scorecard discussed with the chair and chief executive and a decision recorded on whether to enter planning.

                ## Notes
                Organisations that skip this step often discover the problem is not the goal but the absence of anyone ready to make a lead gift. Be candid: the scorecard is an internal document.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated readiness scorecard rating six areas, with an owner for every red item, has been reviewed by the chair and chief executive."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull five years of giving totals and the ten largest gifts from the donor database"
                - "Rate board, leadership, donor base, data, staff and finances red, amber or green"
                - "Interview the chief executive and chair about their appetite for a multi-year campaign"
                - "Assign an owner and a date to every red rating"
            - name: Board resolution to enter campaign planning
              description: |-
                ## Purpose
                Trustees who have never formally agreed to a campaign tend to treat it as the development team's project, then hesitate when asked for their own gifts and introductions. A minuted resolution to enter the planning phase, with the expectations of trustees written into it, makes the campaign the organisation's commitment from the first day.

                ## Milestones
                1. A two-page board paper explaining why a campaign, why now and what planning will cost.
                2. A written statement of trustee expectations covering a personal gift, introductions and attendance.
                3. The resolution and the planning-phase budget approved and minuted.
                4. The minuted resolution circulated to every trustee, including those absent from the meeting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Board minutes record a resolution to enter campaign planning, with a written statement of trustee expectations and an approved planning budget."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a two-page board paper on why a campaign, why now and what planning costs"
                - "Write a statement of what each trustee is expected to give, open and attend"
                - "Put the resolution and planning budget on the next board agenda"
                - "Circulate the minuted resolution to all trustees"
            - name: Capital project scope and full cost estimate
              description: |-
                ## Purpose
                Donors give to a specific building, endowment or programme, and the goal is only credible if the cost behind it is complete. Many campaigns underestimate by pricing construction alone and forgetting fit-out, professional fees, contingency, financing, the campaign's own costs and the extra running costs once the doors open.

                ## Milestones
                1. A one-page project scope agreed by the board, naming what is and is not included.
                2. A cost estimate from the architect, quantity surveyor or cost consultant, with contingency shown separately.
                3. Fees, fit-out, equipment, campaign costs and any maintenance endowment added to give a full total.
                4. A note on the extra annual running costs after completion and how they will be met.

                ## Notes
                Inflation over a long build can move the total significantly. Ask the cost consultant to state the price date of the estimate and how it should be uplifted.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A board-approved project scope and full cost estimate, including contingency, campaign costs and future running costs, is on file."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List everything the project includes and excludes on one page"
                - "Ask the cost consultant for an estimate with contingency shown separately"
                - "Add fees, fit-out, equipment and campaign costs to reach a full total"
                - "Estimate the extra annual running costs once the project is complete"
            - name: Campaign expense budget and cost of raising
              description: |-
                ## Purpose
                Campaigns cost money long before they bring any in: counsel fees, the planning study, extra staff, printed materials, events and database work. Setting a campaign budget and an expected cost of raising up front stops the finance committee being surprised in year two and lets you defend spending that will come back many times over.

                ## Milestones
                1. Every campaign cost line listed, from counsel and staff to events and recognition signage.
                2. Costs phased across each year of the campaign.
                3. Expected cost of raising calculated as a share of the goal.
                4. The budget approved by the finance committee and compared with actual spend each quarter.

                ## Notes
                Many campaigns budget somewhere between 5 and 15 percent of the goal. Treat that as a sense check, not a target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A campaign expense budget phased by year, with an expected cost of raising as a share of the goal, is approved by the finance committee."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List campaign costs for counsel, staff, materials, events and data work"
                - "Phase the costs across each year of the campaign"
                - "Work out the expected cost as a share of the goal"
                - "Compare campaign spend with the budget and report variances @recurring(quarterly)"
            - name: Draft case for support for testing
              description: |-
                ## Purpose
                The case for support explains why this project, why this organisation and why now, in words a donor could repeat to a friend over dinner. A short draft written for the planning study, rather than a glossy brochure, lets prospects react to the argument while it can still change.

                ## Milestones
                1. A draft of no more than six pages covering the need, the project, the impact, the cost and the urgency.
                2. Three short stories from people the project will serve, with their permission.
                3. Comments received from the chief executive and two trustees.
                4. A clean version ready to send to planning study interviewees.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A draft case for support of no more than six pages, reviewed by two trustees, is ready for use in planning study interviews."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write one paragraph each on the need, the project, the impact and the cost"
                - "Gather three short stories from people the project will serve"
                - "Ask the agent to tighten the draft into plain language under six pages"
                - "Send the draft to two trustees and the chief executive for comment"
            - name: Choosing campaign counsel
              description: |-
                ## Purpose
                Few organisations run more than one capital campaign a decade, so experienced outside counsel often pays for itself in planning study design, gift chart discipline and volunteer coaching. Choosing well means comparing two or three firms on similar campaigns, on who would actually do the work and on what the fee covers.

                ## Milestones
                1. A one-page brief describing the project, the likely goal range and the support needed.
                2. Responses from at least two firms with comparable campaign experience.
                3. References taken for each firm, including one campaign that fell short.
                4. A written agreement on a fixed fee or day rate with the chosen firm.

                ## Notes
                Start from the **Vendor** template. Professional fundraising bodies generally discourage fees based on a percentage of money raised; look for a fixed fee or day rate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Campaign counsel is appointed on a written fixed fee or day-rate agreement after at least two firms were compared against the same criteria."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page brief describing the project, goal range and support needed"
                - "Invite two or three firms with comparable campaign experience to respond"
                - "Call two references for each firm, including one whose campaign fell short"
                - "Sign a fixed fee or day-rate agreement with the chosen counsel"
            - name: Campaign gift range chart
              description: |-
                ## Purpose
                Capital campaigns are won by a small number of large gifts, and the gift range chart shows exactly how many gifts at each level the goal needs. A common pattern has the lead gift at 10 to 20 percent of the goal and the top ten gifts making up about half, with three or four prospects needed for every gift. Building the chart early shows whether your prospect pool can carry the goal.

                ## Milestones
                1. A chart listing gift levels, gifts needed, prospects needed and a running total.
                2. Known prospects pencilled against the top three levels.
                3. A written gap analysis naming the levels with too few prospects.
                4. The chart reviewed with counsel and the prospective campaign chair.

                ## Notes
                Keep the version with names strictly confidential. Use an unnamed copy in board papers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gift range chart for the proposed goal, with named prospects against the top three levels and a written gap analysis, has been reviewed by the campaign chair."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a gift chart with levels, gifts needed, prospects needed and running total"
                - "Pencil known prospects against the top three gift levels"
                - "Write down which levels have too few prospects to fill"
                - "Rebuild the chart if the goal changes after the planning study"
            - name: Donor database clean-up before the campaign
              description: |-
                ## Purpose
                Prospect research, pledge tracking and recognition lists all depend on the donor database, and a campaign exposes every duplicate record, stale address and missing household link. Cleaning the data before the quiet phase means pledges are recorded once, instalments are tracked against the right person and nobody's name is misspelt on a donor wall.

                ## Milestones
                1. Duplicate records merged and household and company relationships linked.
                2. Campaign fund codes and fields for pledge, solicitor and recognition name created.
                3. A test pledge with three instalments recorded and checked in the standard reports.
                4. A monthly data check running for the life of the campaign.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Duplicate records are merged, campaign fund codes and pledge fields exist, and a test pledge with instalments has been recorded end to end."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Run a duplicate report on the donor database and merge confirmed matches"
                - "Create campaign fund codes and fields for pledge, solicitor and recognition name"
                - "Record a test pledge with three instalments and check the reports"
                - "Run a duplicate and address check on new records @recurring(monthly:12)"
            - name: Gift acceptance and naming policy
              description: |-
                ## Purpose
                Sooner or later a campaign is offered property, shares, a gift with awkward conditions or money from a source that would embarrass the organisation. A board-approved gift acceptance and naming policy decides in advance what you accept, who approves unusual gifts, how long a name lasts and when it can be removed, so nobody improvises in front of a donor.

                ## Milestones
                1. A policy covering cash, pledges, shares, property, in-kind and planned gifts.
                2. A due diligence step for large, conditional or reputationally sensitive gifts.
                3. Naming terms setting duration, removal conditions and the minimum gift for each kind of space.
                4. The policy reviewed by a legal adviser and approved by the board.

                ## Notes
                Have the policy checked by a lawyer in your jurisdiction, particularly the clauses on removing a name and on gifts of land or buildings.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gift acceptance and naming policy, reviewed by a legal adviser, has been approved by the board and filed with the campaign records."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the gift types the campaign is likely to be offered"
                - "Draft rules for who approves unusual, conditional or sensitive gifts"
                - "Set naming terms for duration, removal and minimum gift size"
                - "Ask a legal adviser to review the draft before the board sees it"
                - "Review the policy against the past year's gifts @recurring(yearly)"
            - name: Campaign counting and reporting rules
              description: |-
                ## Purpose
                Should a five-year pledge count in full today, does a bequest intention count, and what about gifts that would have arrived anyway? Without written counting rules agreed before the first gift, the totals announced at launch can be challenged by auditors, trustees or the local press.

                ## Milestones
                1. A campaign start date and latest end date for counting.
                2. Rules for outright gifts, multi-year pledges and their maximum term, planned gifts, in-kind gifts and public grants.
                3. A reporting format that shows the campaign total separately from cash received.
                4. The rules agreed with the finance lead and checked with the auditor.

                ## Notes
                Several sector bodies publish campaign counting guidelines. Adopting one saves arguments later and makes your totals comparable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written counting rules covering pledges, planned gifts, in-kind gifts and campaign dates are agreed with the finance lead and attached to the campaign plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide the campaign start date and the latest end date for counting"
                - "Write rules for multi-year pledges, planned gifts and in-kind gifts"
                - "Agree how campaign totals will be shown separately from cash received"
                - "Ask the finance lead and auditor to confirm the rules are workable"
            - name: Planning study interviews with top prospects
              description: |-
                ## Purpose
                A planning study tests the draft case, the goal and the likely gifts through 30 to 50 confidential interviews, mostly with the people who will later be asked for the largest gifts. Run by someone outside the organisation, it surfaces honest reactions and hidden leadership, and the interview itself is often the first step of cultivation.

                ## Milestones
                1. An agreed list of 30 to 50 interviewees, weighted towards top-level prospects.
                2. An interview guide covering the case, the goal, possible gift level and willingness to help.
                3. At least 30 interviews completed using the same guide.
                4. An anonymised findings report with indicated gift ranges and named potential volunteers.

                ## Notes
                Promise confidentiality and keep it: individual answers go to counsel, not to the board.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least 30 confidential planning study interviews are completed and summarised in a written findings report with indicated gift ranges."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree a list of 30 to 50 interviewees with counsel and the chief executive"
                - "Send each interviewee a letter and the draft case before the meeting"
                - "Hold the interviews using the same guide each time"
                - "Record indicated gift ranges and volunteer interest in a confidential sheet"
            - name: Go or no-go decision on the campaign goal
              description: |-
                ## Purpose
                Once the study is in, the board has three honest options: proceed at the proposed goal, proceed at a lower or phased goal, or delay and build the donor base first. Making that choice explicitly, against the gift chart and the indicated gifts, protects the organisation from announcing a goal it cannot reach.

                ## Milestones
                1. Study findings compared level by level with the gift range chart.
                2. An options paper setting out full, phased and delayed scenarios.
                3. The main risks of each scenario recorded with an owner.
                4. A board decision minuted with the goal range, timeline and campaign chair.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has minuted a decision to proceed, scale back or delay, with the confirmed goal range, timeline and campaign chair named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare indicated gifts from the study with each level of the gift chart"
                - "Write an options paper with full, phased and delayed scenarios"
                - "List the three biggest risks for each scenario"
                - "Bring the options paper to the board and minute the decision"
            - name: Campaign cabinet recruitment and remit
              description: |-
                ## Purpose
                Peers raise major gifts more effectively than staff alone, so most capital campaigns are steered by a cabinet of volunteers led by a chair who has already made a significant gift. Recruiting the chair first, then four to eight members with networks in the right places, and writing their remit down, gives the campaign leadership donors recognise.

                ## Milestones
                1. A one-page remit setting out what the chair and members do, give and attend.
                2. A campaign chair recruited who has made or committed a personal gift.
                3. Four to eight members recruited, each with a named role such as leadership gifts, community, corporate or trusts.
                4. A first cabinet meeting held with the gift chart and prospect list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A campaign chair and at least four cabinet members have accepted a written remit, and each has a named role."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page remit for the campaign chair and cabinet members"
                - "Ask the strongest volunteer from the planning study to chair the cabinet"
                - "Map cabinet seats to leadership gifts, community, corporate and trusts"
                - "Invite four to eight members and confirm each acceptance in writing"
            - name: Prospect identification and peer rating sessions
              description: |-
                ## Purpose
                Your best capital prospects are often people already close to the organisation whose capacity nobody has assessed. Combining a wealth screening of the database with small confidential peer rating sessions, where trustees and cabinet members estimate potential and suggest who should ask, builds the named pool the gift chart needs.

                ## Milestones
                1. A screening run on long-standing and generous donors, within your privacy rules.
                2. Two or three confidential peer rating sessions held.
                3. At least three rated prospects for each gift on the top half of the chart.
                4. Every rated prospect assigned a relationship owner.

                ## Notes
                Follow your data protection rules for screening and rating, and make sure your privacy notice tells supporters that you research potential donors.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A rated prospect pool holds at least three named prospects for every gift on the top half of the gift chart."
                cadence: rolling
              tasks:
                - "Check the privacy notice covers prospect research before any screening"
                - "Run a wealth screening on donors with long or generous giving histories"
                - "Hold a confidential peer rating session with three or four trustees"
                - "Add newly surfaced prospects to the pool and rate them @recurring(monthly:20)"
            - name: Weekly prospect moves meeting
              description: |-
                ## Purpose
                Major capital gifts usually take many months of cultivation, and without a weekly rhythm prospects drift for a quarter at a time. A 30-minute moves meeting where staff and the chief executive review the top prospects, the last contact and the next step keeps every relationship moving towards an ask.

                ## Milestones
                1. A fixed list of 25 to 40 top prospects reviewed each week.
                2. A standing 30-minute slot with the chief executive and development staff.
                3. Every prospect on the list showing a dated next step and an owner.
                4. Twelve consecutive weekly meetings held.

                ## Notes
                Start from the **Meeting notes** template. Keep it to moves: who, what happened, what next, by when.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly moves meeting has been held for twelve consecutive weeks, with every top prospect showing a dated next step."
                cadence: rolling
              tasks:
                - "Choose the 25 to 40 prospects who will be reviewed each week"
                - "Hold the 30-minute moves meeting on the top prospect list @recurring(weekly:tue)"
                - "Update the next step and date on every prospect discussed @recurring(weekly:wed)"
                - "Flag any top prospect with no contact in the last 90 days"
            - name: Solicitor portfolios and assignments
              description: |-
                ## Purpose
                Each serious prospect needs one named person responsible for the relationship and the eventual ask, ideally a peer who has already given. Assigning portfolios of no more than five prospects per volunteer, each with a staff partner, prevents the common failure where everyone assumes someone else is following up.

                ## Milestones
                1. Every top-level prospect matched with one volunteer solicitor and one staff partner.
                2. No volunteer holding more than five prospects.
                3. Each volunteer given a written note of their prospects and next steps.
                4. Assignments recorded in the database and checked monthly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every prospect rated at the top three gift levels has one assigned solicitor and staff partner, recorded in the database."
                cadence: rolling
              tasks:
                - "Match each top prospect with a volunteer solicitor and a staff partner"
                - "Send each volunteer a short note listing their prospects and next steps"
                - "Record each assignment against the prospect in the database"
                - "Check in with each volunteer solicitor on their assignments @recurring(monthly:8)"
            - name: Monthly campaign progress dashboard
              description: |-
                ## Purpose
                Boards and cabinets lose confidence when campaign figures arrive late or in a different format each time. A single monthly dashboard showing pledges and cash against the gift chart, gifts by level, asks pending and prospects at each stage gives everyone the same picture.

                ## Milestones
                1. Six fixed figures chosen for every edition.
                2. A one-page layout agreed with the campaign chair.
                3. Campaign totals and cash received shown separately, as the counting rules require.
                4. Six consecutive monthly dashboards issued on time.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page dashboard has been issued by the fifth of each month for six consecutive months, showing pledges, cash and gift chart progress."
                cadence: rolling
              tasks:
                - "Choose the six figures the dashboard will always show"
                - "Build the dashboard layout from the metrics log template"
                - "Issue the campaign dashboard to the chair and chief executive @recurring(monthly:3)"
            - name: Pledge processing and gift agreements
              description: |-
                ## Purpose
                A capital pledge of any size should be backed by a signed gift agreement stating the amount, payment schedule, purpose, recognition and what happens if the project changes. Getting the paperwork and the database entry right on the day the pledge is made avoids disputes years later and keeps the auditor content.

                ## Milestones
                1. A gift agreement template reviewed by a legal adviser.
                2. A pledge size above which a signed agreement is always required.
                3. Each new pledge and its instalments recorded within five working days.
                4. Campaign pledges reconciled with the finance records every month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pledge above the agreed threshold has a signed gift agreement on file and a matching instalment schedule in the database."
                cadence: rolling
              tasks:
                - "Draft a gift agreement template and have a legal adviser review it"
                - "Set the pledge size above which a signed agreement is required"
                - "Record each new pledge and its instalments within five working days"
                - "Reconcile campaign pledges in the database with finance records @recurring(monthly:25)"
            - name: Pledge instalment reminders and overdue pledges
              description: |-
                ## Purpose
                Capital pledges are often paid over three to five years, and people forget, change banks or hit hard times. A courteous reminder routine, plus a clear process for rescheduling or writing off a pledge, keeps the cash coming in and treats donors in difficulty with care.

                ## Milestones
                1. A reminder letter and an instalment thank-you written and approved.
                2. Reminders sent a month before every instalment falls due.
                3. Pledges more than 90 days overdue reviewed each quarter with the finance lead.
                4. A written rescheduling and write-off process approved by the finance committee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Instalment reminders go out every month and every pledge more than 90 days overdue is reviewed quarterly, with outcomes recorded."
                cadence: rolling
              tasks:
                - "Write a friendly reminder letter and a thank-you for each instalment received"
                - "Send reminders for pledge instalments due next month @recurring(monthly:15)"
                - "Review pledges more than 90 days overdue with the finance lead @recurring(quarterly)"
                - "Agree a written process for rescheduling or writing off a pledge"
            - name: Pledge cash flow against construction spend
              description: |-
                ## Purpose
                Construction bills arrive on the contractor's schedule while pledges arrive on donors' schedules, and the gap between the two has sunk otherwise successful building campaigns. A cash forecast that sets expected pledge payments against the drawdown schedule shows early whether you need to phase the works, delay a contract or explore bridge finance.

                ## Milestones
                1. The contractor's expected payment schedule obtained from the project manager.
                2. Expected pledge receipts set out by month beside it.
                3. The forecast updated monthly and any shortfall logged as a risk.
                4. Any shortfall of three months or more raised with the board with options.

                ## Notes
                Start from the **Risk register** template. Any decision to borrow against pledges goes to the board with advice from the finance lead and the lender; this project prepares the numbers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly cash forecast compares pledge receipts with the construction drawdown schedule, and any shortfall over three months is raised with the board."
                cadence: rolling
              tasks:
                - "Get the contractor's expected payment schedule from the project manager"
                - "Set expected pledge payments by month beside the payment schedule"
                - "Update the pledge cash forecast against the construction schedule @recurring(monthly:28)"
                - "Log any forecast shortfall in the risk register with an owner"
            - name: Donor recognition and naming register
              description: |-
                ## Purpose
                Recognition promises are made one conversation at a time over several years and are easy to lose: a room named for a parent, a donor who wants to stay anonymous, the spelling on a plaque. A single register of every promise, checked against signed agreements, means the donor wall and naming signs are right on opening day.

                ## Milestones
                1. A register with donor, gift, space, exact wording, anonymity and approval columns.
                2. Every existing naming promise copied in and linked to its gift agreement.
                3. Wording confirmed in writing by each named donor.
                4. New gifts checked for recognition wishes every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every recognition promise sits in one register, linked to a gift agreement and with its wording confirmed in writing by the donor."
                cadence: rolling
              tasks:
                - "Set up a recognition register with donor, space, exact wording and anonymity"
                - "Copy every existing naming promise into it from the gift agreements"
                - "Send each named donor their exact wording to confirm in writing"
                - "Check new gifts for recognition and listing wishes @recurring(monthly:18)"
            - name: Quarterly campaign cabinet meetings
              description: |-
                ## Purpose
                Cabinet members are busy volunteers, and meetings that only read out totals soon lose them. A quarterly meeting built around progress against the gift chart, a short report on each member's prospects and one real decision or request of the group keeps the cabinet working rather than watching.

                ## Milestones
                1. Four meeting dates fixed for the year ahead.
                2. Papers and the latest dashboard sent a week before each meeting.
                3. Each member reporting on their own prospects at every meeting.
                4. Written actions for every member circulated within two days.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four cabinet meetings are held in a year, each with papers sent a week ahead and written actions for every member."
                cadence: cyclic
              tasks:
                - "Fix four cabinet meeting dates for the year ahead"
                - "Send papers and the latest dashboard a week before each meeting"
                - "Hold the cabinet meeting and record actions for each member @recurring(quarterly)"
            - name: Campaign phases and sequencing basics
              description: |-
                ## Purpose
                New campaign staff and trustees often expect a launch party first and fundraising afterwards, when capital campaigns usually work the other way round. Learning the classic sequence of planning, a quiet phase working from the top of the gift chart down, a public launch once a large share is secured, then the community phase and close, helps everyone understand why the first year is so private.

                ## Milestones
                1. Two recognised guides to capital campaign structure read and summarised.
                2. A one-page timeline of this campaign's phases with target dates.
                3. A target share of the goal to secure before public launch agreed, often somewhere between half and two thirds.
                4. A board briefing held on the sequence and the reasons behind it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page campaign phase timeline, with the target share to be raised before public launch, has been presented to the board."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two recognised guides to capital campaign structure"
                - "Write a one-page timeline of this campaign's phases and dates"
                - "Note the share of the goal to secure before going public"
                - "Brief the board on the sequence and why the quiet phase stays private"
            - name: Volunteer solicitor training session
              description: |-
                ## Purpose
                Trustees and cabinet members who will happily host a dinner often freeze at the moment of asking for a specific amount. A practical session with the case, the gift chart, a sample ask and paired role-play turns willing volunteers into people who will actually ask, and who know when to hand back to staff.

                ## Milestones
                1. A one-page ask guide with the case, the amount and how to handle silence.
                2. Three role-play scenarios based on real prospect types.
                3. A session held with at least six volunteers practising in pairs.
                4. Each volunteer leaving with the date of their first ask meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least six volunteer solicitors have completed a training session including role-play, and each has a first ask meeting booked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page ask guide with the case, the amount and how to pause"
                - "Prepare three role-play scenarios based on real prospect types"
                - "Run the training session with paired role-play and feedback"
                - "Ask each volunteer to book the date of their first ask meeting"
            - name: Handling objections in capital asks
              description: |-
                ## Purpose
                Prospects asked for a capital gift raise the same handful of concerns: the timing, the amount, whether the building is the right priority, who pays the running costs. Preparing honest answers to the ten most likely objections, and practising them aloud, makes asks calmer and helps solicitors know when to offer a smaller pledge or a longer payment period.

                ## Milestones
                1. Ten likely objections listed from planning study notes and early asks.
                2. A short, honest answer to each agreed with the chief executive.
                3. Two practice sessions held with a colleague playing the prospect.
                4. The answer sheet updated after each real ask.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written answer sheet for at least ten likely objections is approved by the chief executive and has been practised in two sessions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the objections heard in planning study interviews and early asks"
                - "Draft a short honest answer to each with the chief executive"
                - "Practise the answers aloud with a colleague playing the prospect"
                - "Add new objections to the sheet after each real ask"
            - name: Planned gifts and bequests within the campaign
              description: |-
                ## Purpose
                Some loyal supporters cannot make a large gift from income but would leave one in a will, and others want to combine a pledge with a later legacy. Understanding how planned gifts can sit alongside a capital campaign, and how your counting rules treat them, lets solicitors offer that option without overpromising or straying into tax or legal advice.

                ## Milestones
                1. Your sector body's guidance on legacies and planned gifts read.
                2. The counting rules for bequest intentions and deferred gifts confirmed.
                3. A one-page explainer of planned gift options in every solicitor's pack.
                4. A named person handling follow-up whenever a donor mentions a legacy.

                ## Notes
                Donors considering a legacy or a gift of assets should take their own legal and tax advice. Your role is to explain the options and the paperwork.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explanation of planned gift options, consistent with the counting rules, is in every solicitor's pack."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your sector body's guidance on legacies and planned gifts"
                - "Check how the counting rules treat bequest intentions and deferred gifts"
                - "Write a one-page explainer on planned gift options for solicitors"
                - "Agree who follows up when a donor mentions a legacy"
            - name: Final case for support and campaign materials
              description: |-
                ## Purpose
                After the planning study and the goal decision, the draft case needs rewriting with what prospects actually said, the confirmed goal and the naming opportunities. A tiered set of materials, from a personalised leadership proposal to a short printed case and a one-page summary with drawings of the project, gives solicitors something for every level of conversation.

                ## Milestones
                1. The strongest and weakest points from the study listed and addressed.
                2. A final case reflecting the confirmed goal and study feedback.
                3. A personalised proposal template for leadership gift asks.
                4. A one-page summary with architect's drawings used with permission.
              priority: medium
              deadlineOffsetDays: 210
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A final case, a one-page summary and a personalised proposal template are approved and in use by solicitors."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the three strongest and three weakest points prospects raised about the draft"
                - "Rewrite the case with the confirmed goal and the study feedback"
                - "Create a personalised proposal template for leadership gift asks"
                - "Get written permission to use the architect's drawings in campaign materials"
            - name: Trustee giving phase at full participation
              description: |-
                ## Purpose
                Lead donors and foundations routinely ask whether every trustee has given, and a campaign where some have not is hard to defend. Asking each trustee personally for a stretching campaign gift early in the quiet phase, before any outside prospect, gives the chair a clear answer and sets the standard for everyone else.

                ## Milestones
                1. Each trustee's giving history and likely capacity reviewed in confidence.
                2. An asker agreed for every trustee, usually the chair or campaign chair.
                3. Every trustee asked in person for a specific amount.
                4. Full trustee participation recorded with gift agreements, and the total reported to the cabinet.

                ## Notes
                Participation matters more than size here. A modest gift from every trustee is a stronger message than a large gift from a few.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every trustee has made a personal campaign pledge, recorded with a gift agreement, before the first outside leadership ask."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Review each trustee's giving history and likely capacity in confidence"
                - "Agree with the chair who will ask each trustee and when"
                - "Meet each trustee in person to ask for a specific campaign gift"
                - "Report the trustee total and participation rate to the cabinet"
            - name: Lead gift plan and first ask
              description: |-
                ## Purpose
                The lead gift, often 10 to 20 percent of the goal, sets the ceiling for every gift that follows and is usually the slowest to secure. A written plan for the one or two people capable of it, covering their interests, the right asker, the cultivation steps and the specific proposal, makes the most important conversation in the campaign deliberate rather than hopeful.

                ## Milestones
                1. One or two lead gift prospects named and agreed with the campaign chair.
                2. A dated cultivation plan for each lead prospect.
                3. A personalised proposal naming the amount and the space offered.
                4. The ask made in person by the chosen pair, with the response and next step recorded.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A specific lead gift proposal has been presented to the chosen prospect in person, with the response and next step recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Name the one or two prospects capable of the lead gift"
                - "Write a dated cultivation plan for each lead prospect"
                - "Choose the pair who will make the ask and rehearse it together"
                - "Prepare a personalised proposal naming the amount and the space"
                - "Record the response and agree the follow-up within a week"
            - name: Solicitation plans for the next ten prospects
              description: |-
                ## Purpose
                Beyond the lead gift, the next nine or ten gifts usually make up a large share of the goal, and each needs its own strategy. A short plan per prospect, with what they care about, who asks, how much and when, turns a list of wealthy names into a schedule of asks the cabinet can track.

                ## Milestones
                1. A one-page plan for each of the ten prospects after the lead.
                2. Every ask amount matched to a level on the gift chart.
                3. The ten asks spread across the remaining months of the quiet phase.
                4. A single tracking table reviewed at the moves meeting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written solicitation plans exist for the ten prospects after the lead gift, each with an ask amount, asker and target month."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a one-page plan for each of the next ten prospects"
                - "Match each ask amount to a level on the gift chart"
                - "Spread the ten asks across the remaining months of the quiet phase"
                - "Ask the agent to summarise all ten plans into one tracking table"
            - name: Naming opportunities price list
              description: |-
                ## Purpose
                Naming a building, a hall, a classroom or a garden is one of the strongest reasons people make large capital gifts, but prices set by guesswork either put donors off or leave money unasked for. Pricing each space against its share of project cost, its visibility and the gift chart, within the naming policy, produces a list solicitors can use with confidence.

                ## Milestones
                1. Every nameable space listed from the architect's drawings.
                2. A price for each space with a one-line rationale.
                3. Prices aligned with the gift chart levels.
                4. Spaces reserved for the lead donor or for honouring someone marked, and the list approved by the cabinet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved price list covers every nameable space, matched to gift chart levels and consistent with the naming policy."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every nameable space from the architect's drawings"
                - "Set a price for each based on cost, visibility and gift chart levels"
                - "Mark spaces reserved for the lead donor or for honouring someone"
                - "Get the cabinet to approve the list before it goes to prospects"
            - name: Trusts, public funders and lottery bids for the capital project
              description: |-
                ## Purpose
                Many capital projects mix private gifts with grants from trusts, government capital funds and lottery-style distributors, which often have long lead times and want match funding shown. Mapping these funders against the project timeline, and slotting their likely amounts into the gift chart, keeps institutional money in step with the private campaign.

                ## Milestones
                1. A list of capital funders with eligibility rules and deadlines.
                2. Likely institutional amounts entered in the gift chart.
                3. A bid calendar aligned with the construction timeline.
                4. Evidence of private match funding ready for each bid.

                ## Notes
                Some public capital funders restrict building work before an award is made. Check each funder's rules before signing a construction contract.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A capital funder calendar lists eligibility, deadlines and likely amounts, and the expected institutional total is reflected in the gift chart."
                cadence: rolling
              tasks:
                - "List trusts and public bodies that fund capital projects like yours"
                - "Note each funder's eligibility rules, deadlines and match funding needs"
                - "Add likely institutional amounts to the gift chart"
                - "Check the capital funder calendar for upcoming rounds @recurring(monthly:5)"
            - name: Corporate partners and in-kind gifts for the build
              description: |-
                ## Purpose
                Local businesses can help a building campaign with cash, materials, professional services or staff giving, and a donated set of fittings can be worth as much as a leadership pledge. Deciding which companies to approach, what each could offer and how in-kind gifts are valued and counted keeps corporate support useful rather than a pile of unwanted goods.

                ## Milestones
                1. A list of materials and services the project manager would accept as gifts.
                2. Ten companies shortlisted with a link to the organisation or the area.
                3. A valuation method for in-kind gifts agreed with finance.
                4. Tailored proposals sent to at least three companies.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Proposals have been made to at least three companies, with any in-kind gift valued and recorded under the counting rules."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the project manager which materials and services could be donated"
                - "Shortlist ten companies with a link to the organisation or the area"
                - "Agree with finance how in-kind gifts will be valued and counted"
                - "Send tailored proposals to the three strongest company prospects"
            - name: Goal confirmation at the end of the quiet phase
              description: |-
                ## Purpose
                Just before launch, leadership must decide whether the provisional goal stands, can be raised, or should be lowered with a phased plan. Confirming the public goal against what has actually been pledged, and the prospects still to be asked, avoids announcing a number the campaign then struggles to reach.

                ## Milestones
                1. Pledges secured totalled and compared with the target share for launch.
                2. Each remaining top prospect rated for likelihood of closing.
                3. A short paper recommending the public goal and launch date.
                4. The board's confirmation of the public goal recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has confirmed the public goal and launch date in writing, based on the quiet phase total and the remaining rated prospects."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total the pledges secured and compare them with the target share for launch"
                - "Rate the chance of closing each remaining top prospect"
                - "Write a short paper recommending the public goal and launch date"
                - "Record the board's confirmation of the public goal"
            - name: Hard-hat site tours for prospects
              description: |-
                ## Purpose
                Nothing makes a building project real like standing on the site in a hard hat while the architect points out where the new reading room or clinic will be. Regular small-group tours during construction give prospects and donors a reason to visit, a story to tell friends and a natural opening for the follow-up conversation.

                ## Milestones
                1. Site safety rules, inductions and protective equipment agreed with the contractor.
                2. A 20-minute tour route and talking points prepared with the architect.
                3. At least one small-group tour held each month during construction.
                4. Every guest contacted personally within a week of their visit.

                ## Notes
                The contractor's site rules come first. Never take guests onto a live site without the contractor's agreement and induction.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least one small-group site tour a month runs during construction, each followed by a personal contact with every guest within a week."
                cadence: rolling
              tasks:
                - "Agree site safety rules and protective equipment with the contractor"
                - "Write a 20-minute tour route and talking points with the architect"
                - "Host a site tour for a small group of prospects @recurring(monthly:22)"
                - "Contact each tour guest personally within a week of the visit"
            - name: Public launch of the campaign
              description: |-
                ## Purpose
                Going public announces a campaign that is already well advanced, so the message is momentum rather than need. A launch event and announcement, with lead donors thanked if they agree, the total so far and a clear invitation to everyone else, opens the community phase on a high.

                ## Milestones
                1. A launch date fixed once the agreed share of the goal is pledged.
                2. Lead donors' permission to be named confirmed in writing.
                3. A campaign web page live with the case, progress total and giving form.
                4. The launch held and a press release issued with the total pledged.

                ## Notes
                Start from the **Marketing campaign** template. Resist pressure to launch early: going public before the agreed share is pledged is a common way for a campaign to stall in full view of its community.
              priority: medium
              deadlineOffsetDays: 540
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The campaign has launched publicly on the planned date with a live giving page and a press release announcing the total pledged."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Fix the launch date once the agreed share of the goal is pledged"
                - "Confirm with lead donors whether they can be named at the launch"
                - "Publish a campaign page with the case, progress and a giving form"
                - "Send the launch press release with the total pledged so far"
            - name: Groundbreaking ceremony
              description: |-
                ## Purpose
                Breaking ground is a chance to thank everyone who has given so far and to show the wider community that the project is really happening. Planned with the contractor, local officials and key donors, a short ceremony gives the campaign photographs and press coverage that will feed years of updates.

                ## Milestones
                1. A date agreed with the contractor and project manager.
                2. A guest list of donors, officials and people the project will serve.
                3. A running order with short speeches under 45 minutes.
                4. Photographs captured and thank-you notes sent within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A groundbreaking ceremony has been held with lead donors and community guests, with photographs and press coverage captured."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree a groundbreaking date with the contractor and project manager"
                - "Invite lead donors, officials and people the project will serve"
                - "Write a running order with short speeches under 45 minutes"
                - "Book a photographer and send thank-you notes within a week"
            - name: Community phase appeal
              description: |-
                ## Purpose
                Once leadership gifts are in, a broad appeal lets hundreds of smaller supporters, staff, families and neighbours own a piece of the project, and it often raises the final 10 to 20 percent of the goal. Concrete giving options such as a named brick, a seat or a three-year monthly pledge make modest gifts feel connected to the building.

                ## Milestones
                1. Three or four priced giving options linked to the building.
                2. An appeal plan across post, email, events and social media.
                3. A staff and volunteer giving week held.
                4. A public progress total kept current on the campaign page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A community appeal with at least three priced giving options has run to plan, with the number of donors and total raised reported."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose three or four priced community giving options linked to the building"
                - "Plan the appeal across post, email, events and social media"
                - "Run a staff and volunteer giving week"
                - "Update the public progress total on the campaign page"
            - name: Campaign close and victory celebration
              description: |-
                ## Purpose
                Campaigns that drift past their end date lose energy and leave donors unsure whether they are still needed. Closing on a set date, announcing the final total and holding a celebration for donors, volunteers and staff gives the campaign a proper finish and starts the relationship that leads to the next gift.

                ## Milestones
                1. The close date announced three months ahead.
                2. A final-push list of undecided prospects worked through.
                3. The final total verified by finance against the counting rules.
                4. A celebration held and every campaign donor thanked in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The campaign closed on its announced date with a verified final total, and a celebration was held for donors, volunteers and staff."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Announce the close date three months ahead"
                - "Make a final-push list of prospects still undecided"
                - "Have finance verify the final total against the counting rules"
                - "Hold the celebration and thank every campaign donor in writing"
            - name: Opening and dedication of named spaces
              description: |-
                ## Purpose
                Opening day is when recognition promises become visible, and a misspelt plaque or a forgotten name does lasting damage. A dedication programme that checks every sign against the recognition register, invites each named donor to see their space and marks the moment properly finishes what the campaign began.

                ## Milestones
                1. Every sign proof checked against the recognition register before ordering.
                2. Each named donor's wording approved on a final proof.
                3. A dedication programme with a moment at each named space.
                4. A photograph of their space sent to each named donor after the event.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every sign and the donor wall have been checked against the recognition register, and each named donor was invited to the dedication."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Check every sign proof against the recognition register before ordering"
                - "Send each named donor a proof of their wording to approve"
                - "Plan a dedication programme with a moment at each named space"
                - "Send each named donor a photograph of their space after the event"
            - name: First capital appeal for a small charity
              description: |-
                ## Purpose
                Small charities with one part-time fundraiser can still raise a modest capital sum for a minibus, a new roof or a community kitchen, but they need a scaled-down version of the full method. Keeping the gift chart, the trustees' own gifts and personal asks, while dropping expensive studies and consultants, fits the campaign to the time and people actually available.

                ## Milestones
                1. A goal set from the project cost, with a simple ten-line gift chart.
                2. Every trustee giving before anyone outside is asked.
                3. A two-page case with a photograph and the cost.
                4. At least 20 personal asks made and the appeal closed within 18 months.

                ## Notes
                A small appeal still needs a board decision, a restricted fund in the accounts and thank-you letters that say exactly what the money bought.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A scaled-down appeal with a gift chart, full trustee giving and at least 20 personal asks has reached or formally closed against its goal."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set a goal from the project cost and draw a simple ten-line gift chart"
                - "Ask every trustee for a personal gift before anyone else"
                - "Write a two-page case with a photograph and the cost"
                - "List 20 people to ask personally and book the first five meetings"
            - name: Congregation building fund appeal
              description: |-
                ## Purpose
                Faith communities raising money for a new roof, hall or place of worship rely on broad participation as much as large gifts, with members pledging over two or three years. A congregation appeal built around personal visits to leadership families, small group meetings and a commitment day gives every household a way to take part.

                ## Milestones
                1. Leadership families visited personally before any public announcement.
                2. Small group meetings held to explain the project and answer questions.
                3. A commitment day held with pledge cards for every household.
                4. Households who have not responded followed up, and progress reported to the congregation.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Leadership families have been visited, a commitment day held and pledges recorded from an agreed share of member households."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Visit leadership families personally before any public announcement"
                - "Hold small group meetings to explain the project and answer questions"
                - "Plan a commitment day with pledge cards for every household"
                - "Follow up with households who have not yet returned a card"
            - name: School or university capital campaign
              description: |-
                ## Purpose
                Schools and universities can draw on alumni, current and past parents and local employers, each of whom gives for different reasons. Segmenting these groups, using reunions and year-group networks for peer asks and putting current parents' giving on its own careful footing raises more and avoids pressure families resent.

                ## Milestones
                1. The prospect pool split into alumni, current parents, past parents and employers.
                2. A volunteer lead recruited for each segment.
                3. Parent giving guidelines approved by governors, keeping asks entirely separate from admissions.
                4. Reunion events planned with a campaign ask built in.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Alumni, parent and employer segments each have a named volunteer lead and a solicitation plan, with parent giving guidelines approved by governors."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Split the prospect pool into alumni, current parents, past parents and employers"
                - "Recruit a volunteer lead for each segment"
                - "Write giving guidelines that keep parent asks separate from admissions"
                - "Plan reunion events with a campaign ask built in"
            - name: Endowment campaign without a building
              description: |-
                ## Purpose
                Endowment gifts lack the photograph of a new building, so the case has to show what permanent income will make possible year after year. Explaining the spending policy, restricted funds and how named endowed funds work, in plain language for trustees and donors, gives the campaign a case that survives a donor's hard questions.

                ## Milestones
                1. The current investment and spending policy obtained from the finance lead.
                2. A plain-language summary of how endowment income is spent.
                3. Minimum gift sizes for named endowed funds set.
                4. A yearly report to each named fund's donor on value and payout.

                ## Notes
                The spending policy and investment decisions belong with the board and its investment advisers. This project explains them; it does not set them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An endowment case with a plain-language summary of the spending policy and named fund minimums has been approved by the board."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the finance lead for the current spending and investment policy"
                - "Write a plain-language summary of how endowment income is spent"
                - "Set minimum gift sizes for named endowed funds"
                - "Report each endowed fund's value and payout to its donor @recurring(yearly)"
            - name: Protecting the annual fund during the campaign
              description: |-
                ## Purpose
                Donors asked for a capital gift sometimes quietly stop their regular giving, and the shortfall shows up in the operating budget a year later. Deciding up front whether to ask for a combined gift, a capital gift on top of annual support or a pause, and watching annual income every month, protects the programmes the new building is meant to house.

                ## Milestones
                1. A written dual-ask policy for capital and annual giving.
                2. Every solicitor briefed on the approach.
                3. Annual fund income compared with the prior year every month.
                4. A recovery plan ready if annual income falls ten percent behind.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written dual-ask policy is in use and annual fund income is compared with the prior year every month of the campaign."
                cadence: rolling
              tasks:
                - "Decide whether capital asks will include continued annual giving"
                - "Brief every solicitor on the dual-ask approach"
                - "Compare annual fund income with the same month last year @recurring(monthly:10)"
                - "Draw up a recovery plan if annual income falls ten percent behind"
            - name: Leadership change in the middle of a campaign
              description: |-
                ## Purpose
                When the chief executive, campaign chair or development director leaves mid-campaign, lead donors wonder whether the project is still safe. A handover plan that briefs the successor on every open ask, introduces them personally to the top donors and reassures the cabinet keeps pledges intact through the change.

                ## Milestones
                1. A handover file covering every open ask and every promise made.
                2. The top 20 donors the successor must meet listed.
                3. Personal introductions made, with the departing leader present where possible.
                4. The cabinet briefed and the successor's first 90 days planned.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A successor has been briefed from a written handover file and has met the top 20 campaign donors within 90 days."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a handover file covering every open ask and promise made"
                - "List the top 20 donors the successor must meet personally"
                - "Arrange introductions with the departing leader present where possible"
                - "Brief the cabinet on the handover plan and timeline"
            - name: Challenge and matching gift structure
              description: |-
                ## Purpose
                Offers to match other gifts can lift the community phase or rescue a stalled middle tier, but only if the terms are clear and the match is actually met. Agreeing the ratio, the deadline, which gifts qualify and what happens to any unmatched balance, in writing, turns a generous offer into a dependable campaign tool.

                ## Milestones
                1. Ratio, deadline and qualifying gifts agreed with the challenge donor.
                2. The terms written into a short signed agreement, including any unmatched balance.
                3. An announcement and public tracking plan.
                4. A final report to the challenge donor on how the match was met.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed challenge agreement sets out ratio, deadline and eligible gifts, and a final report on the match has gone to the challenge donor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the ratio, deadline and qualifying gifts with the challenge donor"
                - "Write the terms into a short signed agreement"
                - "Plan how the challenge will be announced and tracked publicly"
                - "Report the result of the challenge to the donor when it closes"
            - name: Stalled campaign recovery plan
              description: |-
                ## Purpose
                Most campaigns hit a plateau somewhere between 60 and 80 percent of the goal, when the obvious prospects have been asked and energy fades. A recovery plan that re-rates the remaining pool, revisits donors for a second gift, adds volunteers with fresh networks and, if needed, phases the project gets the campaign moving again without a public crisis.

                ## Milestones
                1. A written diagnosis of why momentum slowed, using the dashboard and solicitor reports.
                2. Every remaining prospect re-rated and a second-gift list drawn up.
                3. Two new volunteers with fresh networks recruited.
                4. Options for phasing or extending the campaign decided by the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recovery plan with a diagnosis, a re-rated prospect list and a board decision on scope or timing is on file."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down why momentum has slowed, using the dashboard and solicitor reports"
                - "Re-rate every remaining prospect and list donors suited to a second gift"
                - "Recruit two new volunteers with fresh networks"
                - "Put options for phasing or extending the campaign to the board"
            - name: Capital project impact report to campaign donors
              description: |-
                ## Purpose
                Twelve months after opening, campaign donors want to know what the building or endowment has actually achieved. A report showing use figures, stories, final costs against budget and what comes next turns a one-off capital donor into someone who gives again.

                ## Milestones
                1. Three usage measures chosen and collected from opening day.
                2. Final project costs compared with the approved budget.
                3. An impact report written with figures and two stories from users.
                4. The report sent to every campaign donor and a yearly update scheduled.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An impact report with usage figures and final costs against budget has been sent to every campaign donor within 15 months of opening."
                cadence: cyclic
              tasks:
                - "Choose three usage measures to collect from the day the project opens"
                - "Compare final project costs with the approved budget"
                - "Write the impact report with figures and two stories from users"
                - "Send campaign donors an update on the project @recurring(yearly)"
            - name: Campaign close-out evaluation and records archive
              description: |-
                ## Purpose
                Ten years from now someone will plan the next campaign and wish they knew what worked this time. A close-out evaluation covering cost of raising, the gift chart against actual gifts, solicitor results and lessons learned, plus an organised archive of agreements and recognition records, is the most useful thing the team can leave behind.

                ## Milestones
                1. The planned gift chart compared with the gifts actually received.
                2. The final cost of raising calculated against the total raised.
                3. Lessons gathered from at least five staff and volunteers.
                4. Gift agreements, the recognition register and policies archived in one place, and the report presented to the board.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A close-out report with planned versus actual gift chart and cost of raising has been presented to the board, and all agreements are archived."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Compare the planned gift chart with the gifts actually received"
                - "Calculate the final cost of raising against the total raised"
                - "Interview five staff and volunteers about what to repeat or avoid"
                - "Archive gift agreements, the recognition register and policies in one place"
                - "Ask the agent to draft the close-out report from the notes"
---

# Nonprofit Capital Campaign

This area is for development directors, chief executives, trustees and campaign volunteers at charities, schools, faith communities and arts or health organisations raising a large sum for a building, an endowment or a major programme over several years. It starts with readiness, the full project cost, the gift range chart, the draft case and the policies, moves through the planning study and the go decision, then sets up the machinery of cabinet, moves meetings, pledges and recognition, followed by the skills of asking, the gifts and decisions that make or break the goal, the dated moments from launch to dedication, variants for small charities, congregations, schools and endowments, and the specialist work of challenges, recovery and close-out.

What repeats is a weekly moves meeting and next-step update, monthly dashboards, pledge reminders, reconciliations, cash forecasts against the construction schedule and recognition checks, quarterly cabinet meetings and overdue pledge reviews, and yearly updates to campaign and endowment donors. The Vendor, Risk register, Meeting notes, Metrics log, Board meeting and Marketing campaign templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
