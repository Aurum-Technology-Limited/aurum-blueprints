---
id: fundraising-investors.major-donor-fundraising
name: Major Donor Fundraising
description: "A planned major gifts programme for a nonprofit: a gift threshold and goal model, ethical prospect research, moves management, discovery and solicitation skills, and prompt personal thanks."
category: business
version: 1.0.0
tags: [fundraising-investors, major-donor-fundraising, nonprofit, manager, major-gifts, prospect-research, moves-management, solicitation]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - metrics-log
    - one-on-one
    - person
    - reading-queue
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Major Donor Fundraising
          description: "Cultivating and asking wealthy individuals for significant gifts to a nonprofit, from prospect research to solicitation and thanks."
          projects:
            - name: Defining what a major gift means here
              description: |-
                ## Purpose
                A major gift at a regional food bank might be 5,000, while a university may not use the term below 100,000, and teams that never agree a figure end up treating every generous donor the same. Setting the threshold from your own giving data, usually near the level where the top one or two per cent of donors sit, decides who gets personal attention and who stays in the mass appeal stream.

                ## Milestones
                1. Three years of gift data sorted by donor total, with the top two per cent identified.
                2. A major gift threshold agreed by the chief executive and the development lead.
                3. A lower mid-level band defined for donors just below the threshold.
                4. The threshold written into the fundraising plan and coded in the donor database.

                ## Notes
                Use cumulative giving over 12 or 24 months, not single gifts, or loyal donors who give in instalments are missed.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written major gift threshold and mid-level band, based on three years of giving data, approved by the chief executive and coded in the database."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export three years of gifts by donor from the database"
                - "Rank donors by 24-month total and mark the top two per cent"
                - "Propose a threshold and a mid-level band to the chief executive"
                - "Add the agreed bands as codes in the donor database"
            - name: Major gifts income goal and portfolio maths
              description: |-
                ## Purpose
                Boards often set a major gifts target by adding a percentage to last year without checking how many asks it implies. Working backwards from the goal, using realistic close rates and average gift sizes, tells you how many qualified prospects, visits and proposals the year needs, and whether the staff you have can deliver them.

                ## Milestones
                1. A major gifts income goal for the year, split into renewals, upgrades and new donors.
                2. An assumed close rate and average gift size stated for each split, drawn from your own history where it exists.
                3. The number of qualification visits, proposals and asks required, set out month by month.
                4. A gap statement showing whether current staff time covers the required activity.

                ## Notes
                Without history, plan cautiously: not every ask closes, and many close below the figure requested. Fundraisers commonly plan for three or four qualified prospects for every gift they need.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page goal model showing the income target, close rate, average gift and the monthly visits and asks needed, reviewed with the finance lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull last year's major gift income split into renewals, upgrades and new gifts"
                - "Calculate your historical close rate on asks made"
                - "Build the model from the goal back to monthly visits and asks"
                - "Review the model with the finance lead and the chief executive"
            - name: Donor database set up for major gift work
              description: |-
                ## Purpose
                Major gift fundraising lives or dies on records: who knows whom, what was said at the last visit, which proposal is open and when the next step is due. Setting up manager, stage, ask amount and next-step fields in the database, and cleaning the top few hundred records, means nothing depends on one person's memory or inbox.

                ## Milestones
                1. Fields in place for prospect manager, stage, capacity rating, target ask, expected close date and next step.
                2. Duplicates merged and addresses, spouses and household links checked for the top 300 records.
                3. A contact report record type set up with a short standard format.
                4. A saved view showing each manager their own portfolio and overdue next steps.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The top 300 prospect records are de-duplicated and every one carries a manager, stage and next-step date in the database."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the fields major gift work needs and check which already exist"
                - "Merge duplicates and link spouses for the top 300 records"
                - "Create a saved portfolio view for each prospect manager"
                - "Run the duplicate and missing next-step report on top prospects @recurring(monthly:3)"
            - name: Gift acceptance policy for significant gifts
              description: |-
                ## Purpose
                Sooner or later someone offers a gift with strings: shares in a private company, a holiday flat, money from a business the public dislikes, or funding for a project you do not run. A board-approved acceptance policy, written before that call comes, lets staff say yes quickly to good gifts and decline or refer awkward ones without improvising.

                ## Milestones
                1. A policy covering cash, shares, property, gifts in kind, restricted gifts and naming requests.
                2. Reputational and ethical screening criteria, with a named person who decides borderline cases.
                3. A referral route to legal and finance advisers for any non-cash or conditional gift.
                4. The policy approved by the board and minuted.

                ## Notes
                Have your legal adviser review the draft. Rules on accepting and refusing gifts vary by country and by the type of charity.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gift acceptance policy covering non-cash, restricted and reputationally sensitive gifts, approved by the board and recorded in its minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect two or three published gift acceptance policies from peer charities"
                - "Draft the sections on non-cash, restricted and naming gifts"
                - "Send the draft to your legal adviser and finance lead for comment"
                - "Table the policy for board approval"
                - "Review the policy against the past year's unusual gifts @recurring(yearly)"
            - name: Prospect research ethics and data protection rules
              description: |-
                ## Purpose
                Researching wealthy individuals uses personal data, and donors and regulators have little patience for charities that build files of gossip or screen people without telling them. Writing down what you research, from which sources, how supporters are told and how long you keep it protects both the donor's trust and the organisation's standing.

                ## Milestones
                1. A list of approved research sources, all public or provided by the donor.
                2. A privacy notice that tells supporters their data may be used for research and wealth analysis.
                3. Rules for what may go in a profile, with opinion and hearsay excluded.
                4. A retention period and a process for handling a donor's request to see their file.

                ## Notes
                Check the requirements with your data protection lead or adviser. Write every note as if the donor will one day read it, because they may be entitled to.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written research ethics and data protection note, with the privacy notice updated to mention research, checked by your data protection lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read your current privacy notice for any mention of research or screening"
                - "List the sources researchers may and may not use"
                - "Write rules for what a prospect profile may contain"
                - "Agree a retention period and an access request process with the data lead"
            - name: Case for major gift support
              description: |-
                ## Purpose
                Wealthy donors rarely give large sums to keep the lights on; they give to a specific result they can picture and that costs a specific amount. A short case built around three to five priorities, each with the need, the plan, the cost and what changes if it is funded, gives every officer and board member the same story to tell.

                ## Milestones
                1. Three to five fundable priorities chosen with the chief executive and programme leads.
                2. Each priority written up on one page: need, plan, cost and measurable result.
                3. Full costs, including a fair share of overheads, checked with finance for each priority.
                4. A two-page case summary tested on three friendly donors and revised.

                ## Notes
                This is the everyday major gifts case, not a campaign case. Keep it short enough to leave behind after a visit.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page case covering three to five costed priorities, signed off by the chief executive and tested with three donors."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Book an hour with the chief executive to choose the top priorities"
                - "Ask each programme lead for the need, plan and cost on one page"
                - "Ask the agent to draft a two-page case summary from the one-pagers"
                - "Test the summary on three friendly donors and note their questions"
            - name: Costed gift opportunities menu
              description: |-
                ## Purpose
                Officers need to name a figure that fits the donor in front of them, and a single priority costing 400,000 is hard to use with someone who can give 25,000. Breaking each priority into opportunities at several levels, such as a year of a programme, a cohort of participants or a piece of equipment, lets the ask match both capacity and interest.

                ## Milestones
                1. Each case priority broken into at least three opportunities at different gift levels.
                2. Every opportunity costed, with what the gift will deliver in one sentence.
                3. Opportunities marked as available, pledged or funded.
                4. The menu stored where every prospect manager can see the current version.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A menu of at least twelve costed opportunities at three or more gift levels, each marked available, pledged or funded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Split each case priority into smaller fundable pieces"
                - "Cost each piece with the programme lead and finance"
                - "Write one sentence on what each gift level delivers"
                - "Mark each opportunity as available, pledged or funded"
            - name: First wealth screening of the donor file
              description: |-
                ## Purpose
                Most charities already hold the names of people who could give far more than they do, hidden among loyal small donors. Running the file through a screening service, then checking the top results by hand, produces a ranked list of who to qualify first rather than a list of whoever the board happens to know.

                ## Milestones
                1. The screening scope agreed: which donors, which data and what the privacy notice permits.
                2. A screening provider chosen and a data processing agreement signed.
                3. Results imported with a capacity rating and an affinity score on each record.
                4. The top 100 results checked by a researcher and placed in a qualification queue.

                ## Notes
                Screening ratings are estimates. Treat them as a reason to have a conversation, never as a fact about someone's wealth.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Screening ratings are on the donor records and the top 100 prospects have been checked by hand and queued for qualification."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm with the data lead that your privacy notice covers screening"
                - "Ask two screening providers for a quote and sample output"
                - "Sign the data processing agreement before sending any file"
                - "Check the top 100 results by hand and queue them for qualification"
                - "Rescreen donors added in the past year @recurring(yearly)"
            - name: Moves management stages and definitions
              description: |-
                ## Purpose
                When one officer calls a donor in cultivation after a single coffee and another uses the word for someone two weeks from an ask, the pipeline report means nothing. Defining each stage, from identified to stewardship, by the evidence needed to enter it gives the team one language and makes forecasts believable.

                ## Milestones
                1. Stages defined: identified, qualified, cultivation, solicitation, pledged or declined, stewardship.
                2. An entry test for each stage written as an observable fact, such as a discovery visit held.
                3. Stages coded in the database with a date stamp on every change.
                4. Every current prospect restaged using the new tests.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written stage definitions with entry tests are coded in the database and every active prospect has been restaged against them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-line entry test for each pipeline stage"
                - "Agree the definitions with every prospect manager"
                - "Add date-stamped stage fields to the database"
                - "Restage every active prospect using the new tests"
            - name: Agreeing major gift roles for the board and chief executive
              description: |-
                ## Purpose
                The largest gifts usually need the chief executive in the room and often a board member who opened the door, yet many boards have never been told what is expected of them beyond buying a table. A one-page agreement on who identifies, who hosts, who asks and who thanks makes those requests normal rather than awkward favours.

                ## Milestones
                1. A short paper setting out four roles: opening doors, hosting, asking alongside staff and thanking.
                2. Each board member's preferred roles recorded after a one-to-one conversation.
                3. The chief executive's monthly hours for donor meetings agreed.
                4. The roles discussed and endorsed at a board meeting.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Board minutes record endorsement of the major gift roles, with each member's chosen role and the chief executive's monthly donor hours written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a one-page paper on the four major gift roles"
                - "Ask each board member which roles they are willing to take"
                - "Agree the chief executive's monthly hours for donor meetings"
                - "Present the paper at the next board meeting"
            - name: Prospect portfolio assignment and caps
              description: |-
                ## Purpose
                Give a gift officer 400 names and they cannot know any of them; give them 40 and they will not meet the goal. Assigning each manager a capped portfolio, often somewhere between 75 and 150 prospects depending on their other duties, makes it obvious who owns each relationship and who is being neglected.

                ## Milestones
                1. A portfolio cap set for each prospect manager from their available time.
                2. Every qualified prospect assigned to exactly one manager.
                3. Unassigned or unresponsive prospects moved to a pool for review.
                4. A rule agreed for releasing prospects with no meaningful contact in a set period.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every qualified prospect has one named manager, every portfolio is within its cap, and prospects untouched for 90 days are reviewed monthly."
                cadence: rolling
              tasks:
                - "Set a portfolio cap for each prospect manager"
                - "Assign every qualified prospect to exactly one manager"
                - "Move prospects with no manager into a review pool"
                - "Review prospects with no contact in the past 90 days @recurring(monthly:11)"
            - name: Weekly moves management meeting
              description: |-
                ## Purpose
                Without a fixed weekly slot, next steps slide and the strongest prospects drift for months between contacts. A 30-minute meeting where each manager names their top five prospects, the next move for each and anything blocking it keeps momentum without turning into a status recital.

                ## Milestones
                1. A standing 30-minute weekly slot in every manager's calendar.
                2. A one-page agenda: top five prospects, next moves and help needed.
                3. Agreed actions recorded in the database during the meeting, not afterwards.
                4. Eight consecutive meetings held with actions logged.

                ## Notes
                Start from the **Meeting notes** template. Discuss strategy for named people, not activity totals; the numbers belong in the monthly report.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly meetings held, each with next moves for every manager's top five prospects recorded in the database."
                cadence: rolling
              tasks:
                - "Book a standing 30-minute weekly slot with every prospect manager"
                - "Write a one-page agenda built around each manager's top five"
                - "Run the moves meeting and log next steps live @recurring(weekly:tue)"
            - name: Contact reports within 48 hours
              description: |-
                ## Purpose
                Donors mention a grandchild's illness, a sold business or a dislike of public thanks in passing, and each detail should shape every later contact. Writing a short contact report within two days of each visit or call, with what was learned and the next step, turns personal conversations into organisational memory that survives staff changes.

                ## Milestones
                1. A standard contact report format: purpose, what was learned, donor interests, next step and date.
                2. A 48-hour rule agreed by all prospect managers.
                3. Reports for the past month's visits filed and checked.
                4. A weekly check in place that every logged visit has a report.

                ## Notes
                Keep reports factual and kind. A report is a record of the conversation, not a place for opinions about the donor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every visit and substantive call in the past quarter has a contact report filed within 48 hours."
                cadence: rolling
              tasks:
                - "Write a five-heading contact report format"
                - "Agree the 48-hour rule with all prospect managers"
                - "File reports for any visits from the past month"
                - "Check every visit this week has a contact report @recurring(weekly:fri)"
            - name: Monthly major gifts pipeline report
              description: |-
                ## Purpose
                Finance and the board want to know how much major gift income is likely this year and when, and a list of hopeful names does not answer that. A monthly report of open asks, expected amounts, probability and close dates, alongside visits and proposals made, gives a weighted forecast and shows early when the year is off track.

                ## Milestones
                1. A report listing open solicitations with ask amount, probability and expected close month.
                2. A weighted forecast compared with the income goal.
                3. Activity counts for qualification visits, cultivation contacts, proposals and asks.
                4. The report sent to the chief executive and finance each month for a quarter.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly pipeline reports with a weighted forecast against goal have reached the chief executive and finance lead."
                cadence: rolling
              tasks:
                - "List every open ask with amount, probability and close month"
                - "Add a weighted forecast row against the year's goal"
                - "Count the month's visits, proposals and asks by manager"
                - "Send the pipeline report to the chief executive and finance @recurring(monthly:8)"
            - name: Monthly prospect identification from giving data
              description: |-
                ## Purpose
                Some of the best major gift prospects reveal themselves in ordinary data: a donor who has given every year for a decade, someone who suddenly doubled a gift, or a regular giver who came on a site visit. A monthly report built on those signals feeds the qualification queue with people who already care.

                ## Milestones
                1. A saved report flagging upgrades, long-standing consistent donors and unusually large single gifts.
                2. Event attendees and volunteers who are also donors added to the report.
                3. Each flagged name either queued for qualification or set aside with a reason.
                4. Three months of identification reports run and acted on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly identification reports run, with every flagged donor either queued for qualification or set aside with a reason recorded."
                cadence: rolling
              tasks:
                - "Build a saved report of upgrades and gifts over a set amount"
                - "Add donors with ten or more years of consecutive giving"
                - "Cross-check event attendees and volunteers against the donor file"
                - "Review the identification report and queue new names @recurring(monthly:15)"
            - name: Qualification visit pipeline
              description: |-
                ## Purpose
                Screening ratings say nothing about whether someone wants a relationship with you. Qualification contacts, short meetings or calls that ask a likely prospect about their interest in the cause, separate real prospects from names, and an officer who does a handful each month keeps the portfolio fresh.

                ## Milestones
                1. A monthly target for qualification contacts set for each manager.
                2. A short script for requesting a first meeting by phone or email.
                3. A clear outcome recorded after each contact: qualified, not now or disqualified.
                4. Disqualified prospects removed from portfolios with a reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each manager meets their monthly qualification target for three months, with every contact marked qualified, not now or disqualified."
                cadence: rolling
              tasks:
                - "Set a monthly qualification target for each prospect manager"
                - "Write a short meeting request script for first contact"
                - "Record a qualified, not now or disqualified outcome after each contact"
                - "Count qualification contacts against target @recurring(monthly:22)"
            - name: Thanking major donors within 48 hours
              description: |-
                ## Purpose
                Receiving a standard receipt three weeks after a large gift tells the donor they were processed, not noticed. A routine where every gift above the threshold triggers a call from the chief executive or a board member and a personal letter within two days is the cheapest way to protect the next gift.

                ## Milestones
                1. An alert from finance listing every gift above the threshold as it arrives.
                2. A named caller for each tier of gift.
                3. A personal letter template that staff adapt rather than send unchanged.
                4. Acknowledgement time measured for a quarter and kept under 48 hours.

                ## Notes
                Longer-term impact reporting and recognition belong in your stewardship plan. This routine covers the first thanks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a full quarter, every gift above the major gift threshold received a personal call and letter within 48 hours of arrival."
                cadence: rolling
              tasks:
                - "Ask finance to send an alert for every gift above the threshold"
                - "Name the caller for each gift tier"
                - "Write a personal letter template with space to tailor"
                - "Check last week's major gifts were all thanked within 48 hours @recurring(weekly:mon)"
            - name: Quarterly portfolio review with each gift officer
              description: |-
                ## Purpose
                Weekly meetings deal with next moves; once a quarter someone needs to step back and ask whether each portfolio is still the right one. A structured review of every prospect, stage age and ask plan with each manager catches stalled relationships and resets strategy before the year's goal slips.

                ## Milestones
                1. A review pack per manager: portfolio list, stage, last contact, target ask and close date.
                2. Prospects stuck in one stage for over six months given a decision to advance, pause or release.
                3. Ask plans confirmed for every prospect expected to close in the next two quarters.
                4. Agreed changes made in the database within a week of the review.

                ## Notes
                Start from the **1:1** template for the conversation itself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each manager has had a quarterly portfolio review and every prospect stuck over six months has an advance, pause or release decision."
                cadence: rolling
              tasks:
                - "Build a review pack for each prospect manager"
                - "Flag prospects in the same stage for more than six months"
                - "Hold the portfolio review with each manager @recurring(quarterly)"
                - "Update stages and next steps within a week of the review"
            - name: Managing volunteer solicitors and peer askers
              description: |-
                ## Purpose
                Peer asks from a board member or committed donor are often more persuasive than any staff approach, but volunteer asks collapse without briefings, deadlines and follow-up. Pairing each volunteer with a small number of named prospects, a staff partner and a monthly check-in turns good intentions into completed asks.

                ## Milestones
                1. Each volunteer assigned no more than five prospects, with their agreement.
                2. A briefing sheet per prospect: relationship, history, suggested ask and purpose.
                3. A staff partner named for every volunteer.
                4. Outcomes for every assigned prospect recorded within the agreed time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every volunteer solicitor has five or fewer prospects, a staff partner and a briefing sheet for each, and all outcomes are recorded."
                cadence: rolling
              tasks:
                - "List board members and donors willing to ask their peers"
                - "Agree up to five named prospects with each volunteer"
                - "Prepare a one-page briefing sheet for each assigned prospect"
                - "Check in with each volunteer on their assigned asks @recurring(monthly:18)"
            - name: Annual major gifts plan and budget
              description: |-
                ## Purpose
                Gifts at this level arrive on their own schedule, so the plan has to be set a year ahead: goal, portfolio sizes, visit targets, travel and cultivation costs. Writing the plan at the same point in each budget cycle keeps major gifts from being squeezed by the louder demands of appeals and events.

                ## Milestones
                1. Last year's results reviewed against goal for renewals, upgrades and new donors.
                2. Next year's goal, activity targets and staffing set out in a short plan.
                3. A budget for travel, research tools and donor meetings agreed with finance.
                4. The plan approved by the chief executive before the budget deadline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written annual major gifts plan with goal, activity targets and budget, approved by the chief executive before the organisation's budget deadline."
                cadence: cyclic
              tasks:
                - "Pull last year's major gift results against goal"
                - "Draft next year's goal and activity targets from the goal model"
                - "Cost travel, research and cultivation with finance"
                - "Start next year's major gifts plan two months before the budget deadline @recurring(yearly)"
            - name: Writing a useful prospect profile
              description: |-
                ## Purpose
                Research profiles often run to six pages of property records and directorships and still fail to answer the questions an officer has before a visit. Learning to write a one-page profile covering connection to the cause, giving history, capacity indicators, interests and a suggested next step makes research something people actually read.

                ## Milestones
                1. A one-page profile format agreed with the prospect managers who will use it.
                2. Three profiles written for current prospects using only approved sources.
                3. Feedback gathered from the managers on what they used and what they skipped.
                4. The format revised and saved as the standard.

                ## Notes
                Start from the **Person** template. Note the source and date of every fact, and leave out anything you would be uncomfortable reading aloud to the donor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three one-page profiles written to an agreed format, reviewed by prospect managers, and the format revised from their feedback."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two prospect managers what they need to know before a visit"
                - "Draft a one-page profile format with six headings"
                - "Write three profiles using only approved public and donor-given sources"
                - "Revise the format from the managers' feedback"
            - name: Reading capacity and affinity signals
              description: |-
                ## Purpose
                Capacity, how much someone could give, and affinity, how much they care about you, are different questions, and plenty of wealthy people have no interest in your cause. Learning what each signal really tells you, from business holdings to giving to similar causes and years of volunteering, keeps officers chasing warm prospects rather than rich strangers.

                ## Milestones
                1. Common capacity indicators listed with what each can and cannot show.
                2. Affinity signals ranked, such as giving history, volunteering, event attendance and personal connection.
                3. A simple grid combining capacity and affinity applied to 20 prospects.
                4. The grid's ratings compared with what qualification contacts later found.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A capacity and affinity rating grid applied to 20 prospects and checked against the outcomes of their qualification contacts."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the capacity indicators your research uses"
                - "Rank the affinity signals visible in your own donor data"
                - "Rate 20 prospects on a simple capacity and affinity grid"
                - "Compare the ratings with what qualification contacts found"
            - name: Running a discovery conversation
              description: |-
                ## Purpose
                Most first visits go wrong by talking too much about the organisation and too little about the donor. Learning to run a discovery conversation, asking what the person cares about, which gift they are proudest of and how they like to be involved, gives you what you need to shape a later ask.

                ## Milestones
                1. Ten open questions written for discovery visits.
                2. Two practice conversations held with a colleague playing the donor.
                3. Three real discovery visits held, with the donor doing most of the talking.
                4. A note after each visit on what you learned that changed your plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three discovery visits held using a prepared question set, each with a contact report naming at least one donor interest learned."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write ten open questions about the donor's values and giving"
                - "Practise twice with a colleague playing the donor"
                - "Hold three discovery visits and listen more than you speak"
                - "Note what each visit taught you about the donor's interests"
            - name: Making the ask with a specific figure
              description: |-
                ## Purpose
                Officers who are comfortable with cultivation often stall at the ask, softening the figure or never saying it at all. Rehearsing the moment, with a specific amount, a specific purpose and a pause afterwards, until it feels ordinary, is what turns warm relationships into gifts.

                ## Milestones
                1. A short ask structure learned: thanks, purpose, specific amount, then silence.
                2. Three role plays observed, with feedback on how clearly the figure was stated.
                3. A personal list of hedging phrases to drop.
                4. A real ask made using the structure and reviewed afterwards.

                ## Notes
                Name the figure. A vague ask leaves the donor to guess, and most guess low.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three observed role plays and one real solicitation completed with a specific amount and purpose, each followed by written feedback."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write your ask in four lines: thanks, purpose, amount, pause"
                - "Run three role plays with your manager or a colleague"
                - "Note the phrases you use to soften the figure and drop them"
                - "Debrief your next real ask within a day"
            - name: Responding to objections and delays
              description: |-
                ## Purpose
                Replies such as needing to talk to a spouse, not this year, or more than they expected are normal, not refusals, and how you respond decides whether the conversation continues. Learning the common responses and practising calm follow-up questions keeps an ask open without pressuring anyone.

                ## Milestones
                1. The ten most common objections your team hears listed.
                2. A respectful response and follow-up question drafted for each.
                3. The responses practised in two role plays.
                4. A follow-up date agreed in every real conversation that ends without a decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written responses to the ten most common objections, practised twice, with every undecided ask in the pipeline carrying an agreed follow-up date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask colleagues for the objections they hear most often"
                - "Draft a calm response and a follow-up question for each"
                - "Practise the responses in two role plays"
                - "Give every undecided ask in the pipeline a follow-up date"
            - name: Writing a tailored major gift proposal
              description: |-
                ## Purpose
                After a good conversation the donor often asks for something in writing, and a generic brochure undoes the work. A two to four page proposal that repeats what you discussed and names the amount, the purpose, the timing and how you will report back makes it easy for the donor, their family or their advisers to say yes.

                ## Milestones
                1. A proposal structure: summary, need, plan, the gift and its effect, recognition and reporting.
                2. One real proposal drafted from a recent conversation's contact report.
                3. The draft reviewed by a colleague and the chief executive.
                4. The proposal delivered with a follow-up date agreed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A tailored proposal, based on a contact report and reviewed by the chief executive, delivered to a prospect with a follow-up date set."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a prospect who has asked for something in writing"
                - "Ask the agent to draft a proposal from the latest contact report"
                - "Edit the draft so the amount, purpose and timing are explicit"
                - "Have the chief executive review it before it goes out"
            - name: Gift agreements and pledge terms
              description: |-
                ## Purpose
                Pledges agreed over lunch and never written down become arguments when the donor dies, the programme changes or the payments stop. Understanding what a gift agreement should cover, and having a standard version your legal adviser has reviewed, protects the donor's intent and your income forecast.

                ## Milestones
                1. The elements of a gift agreement listed: amount, schedule, purpose, reporting, recognition and what happens if the purpose ends.
                2. A standard gift agreement reviewed by your legal adviser.
                3. A pledge schedule and reminder process set up with finance.
                4. Existing multi-year pledges checked for written agreements.

                ## Notes
                Whether a pledge is enforceable, and how it is treated in the accounts, depends on your jurisdiction and accounting rules. Ask your legal adviser and auditor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A legally reviewed standard gift agreement in use, with every existing multi-year pledge backed by a signed agreement and payment schedule."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List what your gift agreements need to cover"
                - "Ask your legal adviser to review a standard agreement"
                - "Set up pledge payment reminders with finance"
                - "Check every open multi-year pledge has a signed agreement"
            - name: Reading list on philanthropy and donor motivation
              description: |-
                ## Purpose
                Officers who understand why people give, from identity and family legacy to faith and gratitude, hold better conversations than those working from a script. A short, chosen reading list worked through over a few months, with one practical change taken from each title, builds that understanding steadily.

                ## Milestones
                1. Five books or reports on major giving and donor motivation chosen.
                2. Each title read with three notes written.
                3. One practice change tried from each title.
                4. A team discussion held on the most useful idea.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five chosen titles read with notes, five practice changes tried and one team discussion held."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask two experienced fundraisers for their most useful book on major giving"
                - "Choose five titles and set a finishing date for each"
                - "Write three notes and one practice change after each title"
                - "Share the most useful idea at a team meeting"
            - name: Choosing a donor database fit for major gifts
              description: |-
                ## Purpose
                Databases built for direct mail and event tickets often struggle with relationships, proposals and portfolio views, and officers end up working from spreadsheets. If your current system cannot do the job, comparing two or three options against specific major gift needs, rather than a long feature list, avoids an expensive migration that fixes the wrong things.

                ## Milestones
                1. Requirements listed: portfolios, stages, proposals, relationship links, contact reports and pledge schedules.
                2. The current system tested against the list and its gaps noted.
                3. Two or three alternatives demonstrated using your own scenarios.
                4. A decision recorded to stay and configure or to move, with cost and timing.

                ## Notes
                Start from the **Purchase decision** template. Migration usually takes longer and costs more than the licence.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to keep or replace the database, based on a scored comparison of at least two options against written major gift requirements."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List the major gift tasks your database must support"
                - "Test the current system against the list"
                - "Book demonstrations with two alternatives using your own scenarios"
                - "Record the decision with cost, timing and migration risk"
            - name: Reactivating lapsed major donors
              description: |-
                ## Purpose
                Donors who gave large gifts two or three years ago and then stopped are often the warmest prospects you have, because something made them give once. Reviewing why each one lapsed, and choosing a personal re-approach for those worth it, recovers income that new prospect work would take years to find.

                ## Milestones
                1. A list of donors who gave above the threshold in the past five years but not in the last two.
                2. A likely reason for each lapse noted from contact reports and staff memory.
                3. Each lapsed donor given a personal re-approach or a recorded reason to leave them be.
                4. Re-approaches made and outcomes recorded within six months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every lapsed major donor from the past five years has a recorded lapse reason and either a completed re-approach or a decision to leave them be."
                cadence: cyclic
              tasks:
                - "List donors who gave above the threshold but not in the last two years"
                - "Note the likely reason for each lapse from past contact reports"
                - "Assign a manager and a re-approach for those worth contacting"
                - "Rerun the lapsed major donor list @recurring(yearly)"
            - name: Finding where the major gift pipeline stalls
              description: |-
                ## Purpose
                If prospects pile up in cultivation and rarely reach an ask, or asks go out but few close, the fix is different in each case. Measuring how long prospects sit in each stage and where they drop out shows whether the problem is too few qualified names, too little cultivation or hesitation at the ask.

                ## Milestones
                1. Average time in each stage calculated from date-stamped stage changes.
                2. Conversion rates between stages calculated for the past two years.
                3. The weakest stage named, with two likely causes.
                4. One change agreed and its effect measured after two quarters.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A stage-by-stage conversion and time-in-stage analysis, with one change agreed and its effect measured after two quarters."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export stage change dates for the past two years"
                - "Calculate average time in stage and stage-to-stage conversion"
                - "Name the weakest stage and agree one change"
                - "Rerun the stage analysis to see whether the change worked @recurring(quarterly)"
            - name: Gift officer measures and expectations
              description: |-
                ## Purpose
                Judging officers only on income in a single year rewards whoever inherited the ripest portfolio and punishes those building new relationships. Agreeing a balanced set of expectations, such as meaningful contacts, asks made, proposals out and income, gives fair targets and early warning when someone needs support.

                ## Milestones
                1. Four or five measures chosen, each with a definition of what counts.
                2. Annual targets set per officer, adjusted for portfolio maturity.
                3. Each measure reported from the database without manual counting.
                4. Results reviewed with each officer twice a year.

                ## Notes
                Counting every email as a contact inflates the numbers. Define a meaningful contact as one that moves the relationship forward.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written officer measures with definitions and individual targets agreed, reported from the database and reviewed twice a year with each officer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose four or five measures and define what counts for each"
                - "Set targets for each officer adjusted for portfolio maturity"
                - "Build a database report for each measure"
                - "Review results with each officer at the half year"
            - name: Restricted versus flexible major gift asks
              description: |-
                ## Purpose
                Major donors usually want to fund something specific, but a programme paid for entirely by restricted gifts can leave the organisation short of money for rent, finance and leadership. Deciding how you present overheads, when you propose flexible funding and what share of each gift covers core costs prevents gifts that cost more to deliver than they bring in.

                ## Milestones
                1. The true cost of delivering a typical restricted gift calculated with finance.
                2. A rule agreed for including core costs in every costed opportunity.
                3. A short explanation for donors of why flexible funding matters.
                4. Three recent proposals checked against the rule.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written approach to restricted and flexible asks, including a core cost rule agreed with finance, applied to three proposals."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Work out the full cost of a typical restricted gift with finance"
                - "Agree a rule for including core costs in every opportunity"
                - "Write a short donor-facing explanation of flexible funding"
                - "Check three recent proposals against the rule"
            - name: Recognition and naming rules for large gifts
              description: |-
                ## Purpose
                Inconsistent recognition gets noticed: a donor promised a named room for one sum will hear that someone else got a named programme for half as much. Agreeing in advance what recognition each gift level can offer, for how long, and when a name can be removed avoids uneven promises and awkward conversations years later.

                ## Milestones
                1. Recognition options listed by gift level, including the option of anonymity.
                2. Naming terms agreed: minimum amounts, duration and conditions for removal.
                3. The rules approved by the chief executive and, for naming, by the board.
                4. Existing recognition promises checked against the rules and gaps noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Board-approved recognition and naming rules by gift level, with every existing recognition promise checked against them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the recognition you have offered major donors in the past five years"
                - "Draft recognition options and naming terms by gift level"
                - "Take the naming terms to the board for approval"
                - "Check existing promises against the new rules"
            - name: Hiring a first major gifts officer
              description: |-
                ## Purpose
                Many small and mid-sized charities reach the point where the chief executive and one fundraiser can no longer manage the relationships that matter most. Deciding whether to hire, what the role must deliver in its first two years and how long it will take to pay for itself stops a new officer being judged a failure at month six, before any of their asks could reasonably close.

                ## Milestones
                1. A business case showing expected cost, a cautious income ramp and the break-even period.
                2. A role description focused on visits, asks and portfolio size.
                3. A first-year plan with a starting portfolio and activity targets rather than income alone.
                4. The appointment made, or the decision to wait recorded with reasons.

                ## Notes
                Expect a new officer to need a year or more before income reflects their work, because relationships take time to reach an ask.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A business case for a major gifts officer reviewed by the board, followed by an appointment with a first-year plan or a recorded decision to wait."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Estimate the officer's full cost and a cautious income ramp"
                - "Draft a role description built around visits and asks"
                - "Prepare a starting portfolio of 60 to 100 qualified names"
                - "Present the business case to the chief executive and board"
            - name: Solicitation meeting with a top prospect
              description: |-
                ## Purpose
                The ask to your most important prospect deserves more planning than any other meeting of the year: who attends, where, what figure, for what, and what happens after a yes, a no or a maybe. Preparing a written ask plan and rehearsing it with the people in the room avoids the common failure of a lovely lunch where nobody actually asks.

                ## Milestones
                1. A written ask plan covering amount, purpose, who asks, who else attends and the setting.
                2. The amount checked against research, past giving and what the donor has said.
                3. A rehearsal held with everyone attending.
                4. The meeting held and the specific ask made.
                5. The outcome and agreed next step recorded within 48 hours.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A specific ask made to a top prospect at a planned meeting, with the outcome and next step recorded within 48 hours."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose the prospect in your portfolio closest to readiness for an ask"
                - "Write the ask plan with amount, purpose and who will ask"
                - "Rehearse the meeting with everyone who will attend"
                - "Send a handwritten note the day after the meeting"
            - name: Donor visit to see the work in person
              description: |-
                ## Purpose
                A prospect who has watched a class, a clinic or a field team at work tends to understand the case in a way no proposal can match. Planning a short, well-hosted visit for one or two prospects, with staff and beneficiaries briefed and consent in place, makes the cause real before an ask.

                ## Milestones
                1. A visit format that does not disrupt services, agreed with the programme lead.
                2. Consent arranged for any beneficiaries the donor will meet.
                3. One or two prospects invited and the visit held.
                4. A follow-up conversation held within two weeks to hear what struck them.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planned donor visit held with programme consent in place and a follow-up conversation recorded within two weeks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a visit format with the programme lead"
                - "Check consent for any beneficiaries the donor will meet"
                - "Invite one or two prospects at the cultivation stage"
                - "Call each guest within two weeks to hear what struck them"
            - name: Small cultivation dinner hosted by a board member
              description: |-
                ## Purpose
                Eight to twelve people around a board member's table, with a short talk from the chief executive and no ask on the night, can move several prospects forward at once. Unlike a ticketed fundraising event, the aim is relationships and follow-up visits, so the guest list and the follow-up plan matter more than the menu.

                ## Milestones
                1. A host and date agreed, with a guest list of prospects at the cultivation stage.
                2. A briefing for the host on each guest and the evening's message.
                3. The dinner held with a short programme and no solicitation.
                4. A personal follow-up made with every guest within ten days.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A hosted dinner for eight to twelve prospects held, with a personal follow-up made to every guest within ten days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask a board member to host a dinner for eight to twelve guests"
                - "Agree a guest list of prospects at the cultivation stage"
                - "Brief the host on each guest and the evening's message"
                - "Follow up personally with every guest within ten days"
            - name: Year-end major gift asks
              description: |-
                ## Purpose
                Many donors decide their largest gifts near the end of the calendar or tax year, when they review their finances with advisers. Planning which prospects to ask in the final quarter, and asking early enough for donors to arrange share transfers or adviser approvals, captures gifts that would otherwise go to whoever asked first.

                ## Milestones
                1. A list of prospects who have given at year end before or said they plan to.
                2. Asks scheduled at least six weeks before the year end.
                3. Instructions for gifts of shares and bank transfers ready to send.
                4. Every year-end ask resolved and recorded before the new year.

                ## Notes
                Tax treatment of gifts varies by country and by donor. Point donors to their own adviser rather than advising them.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every planned year-end ask made at least six weeks before year end, and each one resolved and recorded."
                cadence: cyclic
              tasks:
                - "List prospects who have given near year end before"
                - "Schedule year-end asks at least six weeks before the deadline"
                - "Prepare transfer instructions for gifts of shares"
                - "Start the year-end ask list three months before year end @recurring(yearly)"
            - name: Lead donor matching challenge
              description: |-
                ## Purpose
                A major donor who agrees to match other gifts up to a set amount can lift a whole appeal, and many donors like knowing their gift will encourage others. Setting it up properly, with the terms in writing, a realistic match target and a plan for what happens if the match is not met, keeps the promise honest to everyone who gives.

                ## Milestones
                1. The lead donor's agreement to the match, with amount, dates and conditions in writing.
                2. A match target the organisation is confident it can reach.
                3. A plan for any unmatched funds agreed with the donor in advance.
                4. The final result reported to the lead donor within two weeks of the close.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written match agreement with a lead donor, a match target reached or honestly reported, and a result report sent within two weeks of closing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Identify a donor who has shown interest in encouraging others to give"
                - "Put the match amount, dates and conditions in writing"
                - "Agree what happens to unmatched funds before launch"
                - "Report the final result to the lead donor"
            - name: Chief executive's top donor visit programme
              description: |-
                ## Purpose
                The top 20 or 30 donors should hear from the chief executive in person at least once a year, not only when there is an ask. A quarterly schedule of visits, prepared by the development team with briefings and a clear purpose for each, keeps the most important relationships at the right level.

                ## Milestones
                1. A list of the top donors and prospects the chief executive should see each year.
                2. Visits spread across the year, each with a stated purpose.
                3. A one-page briefing prepared before every visit.
                4. Contact reports filed and next steps assigned after each visit.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The chief executive has visited every donor on the top list within the year, each visit with a briefing and a filed contact report."
                cadence: cyclic
              tasks:
                - "Agree the top 20 to 30 names the chief executive should see"
                - "Book next quarter's chief executive donor visits @recurring(quarterly)"
                - "Prepare a one-page briefing before each visit"
                - "File the contact report and assign the next step after each visit"
            - name: Major gifts from a one-person development office
              description: |-
                ## Purpose
                In a small charity the only fundraiser also runs appeals, grants, events and the newsletter, and major gift visits are the first thing to slip. Protecting a fixed block of time, keeping a small portfolio of perhaps 25 to 40 names and sharing asks with the chief executive makes major gifts possible without new staff.

                ## Milestones
                1. A portfolio of the 25 to 40 most promising donors chosen.
                2. Two half-days a week blocked for donor contact and protected.
                3. Ask responsibilities for the top ten names shared with the chief executive.
                4. A quarter's results compared with the time spent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A portfolio of 25 to 40 donors managed with two protected half-days a week, and a quarter's contacts and asks logged against it."
                cadence: rolling
              tasks:
                - "Choose your 25 to 40 most promising donors"
                - "Spend the protected half-day on donor calls and visits @recurring(weekly:wed)"
                - "Agree with the chief executive who asks the top ten"
                - "Compare the quarter's contacts and asks with the time spent"
            - name: Taking over a portfolio from a departed officer
              description: |-
                ## Purpose
                When a gift officer leaves, donors often feel they have lost their person and may quietly stop giving. A deliberate handover, with every relationship reviewed, a personal introduction from the new manager and the departing officer's knowledge captured, keeps those relationships through the change.

                ## Milestones
                1. Every prospect in the inherited portfolio listed with stage, last contact and open asks.
                2. Contact reports and handover notes read for the top 30.
                3. A personal letter or call from the new manager to every active donor.
                4. Open asks and pledges confirmed with each donor within three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every donor in the inherited portfolio has been contacted by the new manager and all open asks and pledges confirmed within three months."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the inherited portfolio with stage, last contact and open asks"
                - "Ask the departing officer for notes on the top 30 relationships"
                - "Call or write personally to every active donor in the portfolio"
                - "Confirm each open ask and pledge with the donor"
            - name: Introducing a new chief executive to major donors
              description: |-
                ## Purpose
                Major donors often give partly because they trust the leader, so a change at the top is a moment of risk as well as a chance to renew relationships. Planning who meets the new chief executive in the first 100 days, in what order and with what message, keeps your largest supporters feeling consulted rather than informed by newsletter.

                ## Milestones
                1. A priority list of donors to meet in the first 100 days.
                2. A short message on continuity and the new leader's priorities.
                3. Meetings held with the top donors, each with a briefing beforehand.
                4. Donor feedback summarised for the chief executive and board.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new chief executive has met every donor on the priority list within 100 days, with briefings, contact reports and a feedback summary."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Rank the donors the new chief executive should meet first"
                - "Draft a short message on continuity and new priorities"
                - "Prepare a briefing for every meeting on the list"
                - "Summarise donor feedback for the chief executive and board"
            - name: Asking board members for their own major gifts
              description: |-
                ## Purpose
                Prospects and funders often ask whether the board gives, and a board that has never been asked personally rarely gives at the level it could. Treating board members as prospects in their own right, with a conversation about a gift that is meaningful to them rather than a general expectation, sets the example every other ask relies on.

                ## Milestones
                1. A giving expectation agreed by the board, such as every member making a gift they consider significant.
                2. Each member's interests and capacity discussed privately with the chair or chief executive.
                3. A personal ask made to each member by a peer.
                4. Board participation recorded at 100 per cent, with amounts kept confidential.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every board member has been asked personally by a peer and board giving participation is recorded at 100 per cent for the year."
                cadence: cyclic
              tasks:
                - "Ask the chair to lead a board discussion on personal giving"
                - "Pair each board member with a peer asker"
                - "Prepare a short briefing on each member's interests"
                - "Confirm each board member's annual gift and their asker @recurring(yearly)"
            - name: Gifts through donor-advised funds and family trusts
              description: |-
                ## Purpose
                Wealthy donors increasingly give through a donor-advised fund or their own family trust, so the payment arrives from an organisation even though the relationship is with a person. Knowing how these gifts work, what you can and cannot offer in return and how to credit the right donor stops personal relationships being misfiled as institutional grants.

                ## Milestones
                1. The giving vehicles your donors use listed, with how each makes a payment.
                2. Database rules for crediting the individual as well as the vehicle.
                3. A note on benefits that cannot be offered against such gifts, checked with your adviser.
                4. Existing gifts from these vehicles linked to the individuals behind them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Database crediting rules for donor-advised fund and family trust gifts are in place, and every existing such gift is linked to the individual donor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List gifts from the past three years that came through a fund or trust"
                - "Agree how the database credits both the vehicle and the individual"
                - "Check with your adviser which benefits cannot be offered for these gifts"
                - "Link each existing vehicle gift to the person behind it"
            - name: Major donor asks during an emergency
              description: |-
                ## Purpose
                When a hurricane, a funding cut or a sudden rise in demand hits, major donors are often willing to act fast, but only if they hear quickly and specifically what is needed. A prepared approach, with a short need statement, a costed first response and a list of who calls whom, turns goodwill into gifts within days rather than weeks.

                ## Milestones
                1. A one-page emergency need template with space for the costed first response.
                2. A call list pairing the top 30 donors with a named caller.
                3. Rules agreed on how emergency gifts are restricted and reported.
                4. A short review held after any emergency on what worked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ready emergency need template, a call list for the top 30 donors and agreed restriction rules, stored where the team can reach them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a one-page emergency need template"
                - "Pair the top 30 donors with a named caller"
                - "Agree with finance how emergency gifts are restricted and reported"
                - "Hold a short review after any emergency approach"
            - name: Legacy conversations with long-standing major donors
              description: |-
                ## Purpose
                Some of your major donors will leave far more in a will than they ever give in life, but only if someone raises it with care. Learning to bring up legacy giving at the right moment, recording intentions sensitively and always sending donors to their own legal adviser adds a long-term dimension to relationships you already hold.

                ## Milestones
                1. Major donors with long giving records identified for a legacy conversation.
                2. A gentle conversation guide and printed information on leaving a gift ready.
                3. Legacy intentions recorded with the donor's permission and kept confidential.
                4. A personal thank-you sent to every donor who shares an intention.

                ## Notes
                Never draft or advise on a will. Point donors to their own legal adviser, and check how your country treats charitable gifts in wills.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A legacy conversation guide in use, with every disclosed legacy intention recorded with consent and personally acknowledged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List major donors with long giving records for a legacy conversation"
                - "Write a short guide for raising legacy giving gently"
                - "Prepare printed information on how to leave a gift in a will"
                - "Record each disclosed intention with the donor's consent"
            - name: Accepting gifts of shares, property and other assets
              description: |-
                ## Purpose
                Donors with wealth tied up in shares, land or a business may prefer to give assets rather than cash, and charities that cannot handle the transfer lose the gift. Setting up the practical route with a broker, your bank and your legal and finance advisers, under the acceptance policy, means you can say yes and complete the transfer without delay.

                ## Milestones
                1. A broker account or arrangement able to receive listed shares.
                2. A valuation and sale procedure for listed shares agreed with finance.
                3. A referral route for property and private company shares to legal and tax advisers.
                4. One-page instructions ready to send to donors who offer assets.

                ## Notes
                Do not tell donors what tax relief they will get. Give them the facts of the transfer and refer them to their own adviser.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working route for receiving listed shares and a referral process for property and private shares, with donor instructions ready to send."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your bank or a broker how to receive listed shares"
                - "Agree a valuation and sale procedure with finance"
                - "Agree a referral route for property gifts with your legal adviser"
                - "Write one-page transfer instructions for donors"
            - name: Principal gift strategy for transformational prospects
              description: |-
                ## Purpose
                Transformational gifts, many times larger than anything you have received, usually come from a handful of prospects and take two to five years of involvement from the chief executive and board to reach an ask. Managing those few people as a separate set, each with an individual strategy and a quarterly review at leadership level, gives the largest opportunities the patient attention they need.

                ## Milestones
                1. Up to ten principal prospects named, each with a capacity estimate and connection to the cause.
                2. A written strategy for each: interests, the idea they might fund, who leads and the next three moves.
                3. Deeper involvement, such as an advisory role or help shaping a project, offered where it fits.
                4. Each strategy reviewed by the chief executive and chair every quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Up to ten principal prospects each have a written strategy, reviewed every quarter by the chief executive and chair."
                cadence: rolling
              tasks:
                - "Name up to ten prospects capable of a transformational gift"
                - "Write an individual strategy with the next three moves for each"
                - "Agree who leads each relationship at leadership level"
                - "Review each principal gift strategy with the chief executive and chair @recurring(quarterly)"
---

# Major Donor Fundraising

This area is for development directors, major gifts officers, chief executives and board members at nonprofits who want large gifts from individuals to come from a planned programme rather than luck. It starts with the foundations (a gift threshold, a goal model, clean records, an acceptance policy, research ethics and a costed case), then the weekly and monthly machinery of moves management, the skills of research, discovery and the ask, the decisions that shape the programme, dated asks and cultivation occasions, situations from a one-person office to a leadership change, and finally planned gifts, non-cash assets and principal gift strategy.

What repeats is a Tuesday moves meeting, a Friday contact report check and a Monday thank-you check, monthly pipeline, identification, qualification and volunteer check-ins on varied days, quarterly portfolio reviews and chief executive visits, and a yearly cycle of rescreening, planning, year-end asks and board giving. The Purchase decision, Meeting notes, Metrics log, 1:1, Person and Reading queue templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
