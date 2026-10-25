---
id: private-equity-vc.angel-to-fund-manager
name: Angel to Fund Manager
description: "The step from writing your own angel cheques to looking after other people's money: an honest record of your angel deals, a first SPV, a small fund if it is right, and the duties, conflicts and reporting that come with it."
category: business
version: 1.0.0
tags: [private-equity-vc, angel-to-fund-manager, founder, angel-investor, spv, nano-fund, solo-gp, fiduciary-duty]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - vendor
    - risk-register
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Angel to Fund Manager
          description: "Moving from personal angel cheques to managing other people's money: track record, SPVs, a first small fund and the legal and reporting duties that come with it."
          projects:
            - name: Inventory of every personal angel cheque
              description: |-
                ## Purpose
                Most angels cannot list every company they have backed, the instrument they used and where the signed papers are, and that gap is the first thing a prospective backer or lawyer will find. A single register of every cheque, from the first friends round to the latest SAFE, is the base for the track record, the tax file and any later move of holdings into a vehicle.

                ## Milestones
                1. A register listing every angel investment with company, date, amount, instrument and round.
                2. Signed documents for each cheque located and filed in one folder per company.
                3. Missing documents identified and a request sent to each founder or platform concerned.
                4. Current shareholding or conversion status confirmed for every SAFE, note and priced round.

                ## Notes
                Include the cheques that went to zero. A register that only shows the survivors is the first sign of an unreliable record.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register covers every personal angel cheque with instrument, amount and status, and signed papers are filed for at least 90 percent of them."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search email and bank statements for every angel transfer you have made"
                - "List each cheque with company, date, amount, instrument and round"
                - "Request missing signed documents from founders or platforms"
                - "Confirm whether each SAFE or note has converted, and into what"
            - name: Angel outcome record with evidence for each mark
              description: |-
                ## Purpose
                Before anyone trusts you with their money they will ask how your own cheques have done, and an answer built on founder optimism falls apart in one reference call. Recording entry valuation, the latest priced round or exit, write-offs and the source of each number gives you a record you can show without embarrassment, even when the picture is mixed.

                ## Milestones
                1. Entry valuation or cap recorded for every cheque in the inventory.
                2. Each current value tied to a source: a priced round, an exit, a write-off or a stated policy.
                3. Realised and unrealised outcomes shown separately, with dates.
                4. A short note on any value you could not verify and why.

                ## Notes
                Start from the **Metrics log** template. Hold every unpriced SAFE at cost unless a later priced round says otherwise, and say so in the record.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every angel cheque has an entry valuation, a current value and a named source for that value, with realised and unrealised outcomes separated."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Add entry valuation or cap to every line of the angel register"
                - "Write the source beside every current value you record"
                - "Split the record into realised, unrealised and written-off outcomes"
                - "Flag every value you cannot evidence and note why"
            - name: Written motive check before taking outside money
              description: |-
                ## Purpose
                Plenty of founders drift into managing money because friends keep asking to come into their deals, not because they have chosen it. Writing down why you want to do this, what you would give up and what would make you stop turns a flattering request into a decision you have made deliberately.

                ## Milestones
                1. One page stating why you want to manage other people's money and what you expect from it.
                2. A list of what changes: time, liability, reputation, the freedom to back friends on a whim.
                3. Three people who know you well asked whether the reasons hold up.
                4. A dated decision to proceed, wait a year or stay a personal angel.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated written decision to proceed, wait or stay a personal angel exists, reviewed by three people who know you well."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one page on why you want to invest other people's money"
                - "List what you would lose by owing duties to backers"
                - "Ask three people who know you well to challenge the page"
                - "Record a dated decision to proceed, wait or stay an angel"
            - name: Personal money boundary for angel and GP cheques
              description: |-
                ## Purpose
                Angels who start a vehicle often find themselves putting more of their own savings in than they meant, through a GP commitment, fee shortfalls and follow-ons they feel obliged to make. Agreeing a ceiling on how much of your net worth sits in private companies, with a financial adviser, protects the household from the enthusiasm of the moment.

                ## Milestones
                1. Current share of net worth held in private company stakes calculated.
                2. A ceiling for angel cheques plus any GP commitment agreed with a financial adviser.
                3. Cash runway for the household set aside separately from investing money.
                4. The ceiling written down and shared with your partner at home.

                ## Notes
                Follow-on pressure is the usual leak. Count likely follow-ons inside the ceiling, not on top of it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written ceiling for private company exposure, including any GP commitment, agreed with a financial adviser and shared at home."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add up the cost of every private company stake you hold today"
                - "Book a session with a financial adviser to set an exposure ceiling"
                - "Set aside a household cash runway outside the investing pot"
                - "Share the written ceiling with your partner at home"
            - name: Employer and board conflicts check
              description: |-
                ## Purpose
                Employment contracts, board seats and advisory roles often restrict outside investing, require disclosure or give an employer first look at deals. Reading every agreement you are bound by before taking any outside money avoids a dispute that could end both the job and the vehicle.

                ## Milestones
                1. Every employment, board and advisory agreement you are party to collected.
                2. Clauses on outside business interests, confidentiality, non-compete and corporate opportunity marked.
                3. Questions on any unclear clause answered by an employment lawyer.
                4. Required disclosures made in writing, or a decision to wait until you leave.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All current agreements reviewed for investing restrictions, unclear clauses checked with a lawyer and required disclosures made in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect every employment, board and advisory agreement you have signed"
                - "Mark clauses on outside interests, confidentiality and corporate opportunity"
                - "Ask an employment lawyer about any clause that is unclear"
                - "Make any required disclosure to your employer in writing"
            - name: Investing pattern drawn from your own cheques
              description: |-
                ## Purpose
                Backers want to know what you will do with their money, and the most convincing answer comes from what you have already done. Sorting your angel cheques by stage, sector, how you found them and why you said yes shows the pattern that is genuinely yours, and the habits you should drop before backers pay for them.

                ## Milestones
                1. Each angel cheque tagged by stage, sector, geography, source and reason for investing.
                2. The two or three patterns that cover most of your best outcomes written down.
                3. Patterns that produced mostly losses named honestly.
                4. A one-paragraph statement of what you will back with other people's money.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-paragraph investing focus exists, supported by a tagged list of past angel cheques and a written note of which patterns to drop."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag each angel cheque by stage, sector, source and reason for investing"
                - "Ask the agent to group the tagged list and summarise the patterns"
                - "Name the patterns that mostly lost money"
                - "Write one paragraph on what you will back with outside money"
            - name: Choosing between angel cheques, SPVs, rolling or small fund
              description: |-
                ## Purpose
                There are several ways to invest other people's money, from deal-by-deal SPVs to a rolling subscription vehicle to a closed small fund, and each carries different costs, duties and expectations. Comparing them against your deal pace, backer list and appetite for paperwork lets you pick the smallest step that fits, rather than the most impressive one.

                ## Milestones
                1. Four paths described: staying an angel, SPVs, a rolling vehicle and a small closed fund.
                2. Each path scored for set-up cost, running cost, legal duties, time and backer fit.
                3. Questions on each structure answered by a fund or startup lawyer.
                4. A path chosen, with the conditions that would move you to the next one.

                ## Notes
                Rolling and nano fund structures are not available in every country. Treat any structure you read about as a question for counsel, not a plan.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of four vehicle paths with costs and duties, checked with a lawyer, ending in a chosen path and the trigger for the next step."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List set-up and running costs for SPVs, a rolling vehicle and a small fund"
                - "Score each path against your deal pace and likely backers"
                - "Take the comparison to a fund or startup lawyer for an hour"
                - "Write down the chosen path and what would move you to the next"
            - name: Adviser bench for a new manager
              description: |-
                ## Purpose
                Taking outside money pulls in securities law, tax on carried interest, anti-money laundering checks and accounting that a personal angel never needed. Lining up a lawyer who works with SPVs and small funds and an accountant who understands carry before the first deal avoids paying for emergency advice under a closing deadline.

                ## Milestones
                1. Three lawyers who regularly form SPVs or small venture funds contacted.
                2. Two accountants with carried interest and partnership experience contacted.
                3. Fee estimates for a first SPV and a first year of advice compared.
                4. One lawyer and one accountant engaged with a written fee arrangement.

                ## Notes
                Start from the **Vendor** template. Ask each adviser how many first-time managers they acted for last year, and ask for one of them as a reference.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lawyer and an accountant experienced with small venture vehicles are engaged under written fee arrangements."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask three experienced angels which lawyers formed their SPVs"
                - "Book introductory calls with three lawyers and two accountants"
                - "Compare written fee estimates for a first SPV and first year"
                - "Sign engagement letters with the lawyer and accountant you chose"
            - name: Household agreement on the move to managing money
              description: |-
                ## Purpose
                Managing other people's money brings evening calls with founders, personal liability, an uneven income and, for many, a cut in salary. Agreeing the money, time and fallback terms with the people you live with before committing makes the hard months easier to carry together.

                ## Milestones
                1. The likely time commitment and income change described in plain numbers.
                2. A conversation held at home about the risks, including losing backers' money.
                3. Agreed limits on evenings, travel and household money written down.
                4. A date fixed to review how the arrangement is working.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written household limits on time, travel and money for the investing work, with a review date agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate weekly hours and income change for the first two years"
                - "Set aside an evening to talk it through at home"
                - "Write down the agreed limits on evenings, travel and money"
                - "Put a review date for the arrangement in the calendar"
            - name: Founder references from your angel cheques
              description: |-
                ## Purpose
                Sooner or later backers and LPs will ask founders you have backed what you were like when things went wrong, and those calls carry more weight than anything you say about yourself. Asking a handful of founders now, including one from a company that failed, tells you what they will say and gives you a list you can offer with confidence.

                ## Milestones
                1. Eight founders chosen across good, average and failed outcomes.
                2. Each asked whether they would take a reference call about you.
                3. Notes kept on what each said you did well and badly.
                4. A reference list of at least five willing founders ready to share.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least five founders, including one from a failed company, have agreed to take reference calls, with notes on their feedback."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick eight founders across good, average and failed outcomes"
                - "Ask each for a candid 20-minute call about working with you"
                - "Note what each founder says you did well and badly"
                - "Ask the willing founders to take future reference calls"
            - name: Weekly deal review with written pass notes
              description: |-
                ## Purpose
                As a personal angel you could say yes on a feeling, but once others follow your calls every decision needs a reason someone can read later. A fixed weekly slot to review the pipeline and write two lines on every yes and every pass builds the evidence that you are selective, and shows you your own blind spots.

                ## Milestones
                1. A fixed weekly hour reserved for reviewing new and live deals.
                2. Two lines recorded on every pass and every yes, with the reason.
                3. A running count of deals seen, met and backed each month.
                4. A quarterly look back at passes that later raised strongly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written reason exists for every deal passed or backed over the last three months, with monthly counts of deals seen, met and backed."
                cadence: rolling
              tasks:
                - "Block a recurring weekly hour for deal review"
                - "Review new and live deals and write two lines on each decision @recurring(weekly:tue)"
                - "Count deals seen, met and backed for the month @recurring(monthly:3)"
                - "Check which passed deals later raised a strong round"
            - name: Monthly founder check-in log
              description: |-
                ## Purpose
                Backers judge a lead partly by how well they know the companies after the cheque clears. A short monthly note per portfolio company on runway, the last update and any ask means you can answer a backer's question in one minute and spot trouble before the founder emails about bridge money.

                ## Milestones
                1. A log with one row per company covering runway, last update date and open asks.
                2. Every company with no update for three months contacted.
                3. Asks from founders recorded with what you did about them.
                4. Companies with under six months of runway flagged for attention.

                ## Notes
                Start from the **Meeting notes** template for the calls themselves; keep the log to one line per company.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every portfolio company has a log entry no older than 35 days showing runway, last update and open asks."
                cadence: rolling
              tasks:
                - "Create a one-row-per-company log with runway and last update columns"
                - "Update the log from founder emails and calls @recurring(monthly:12)"
                - "Call one founder you have not spoken to in a quarter @recurring(monthly:20)"
                - "Flag companies with under six months of runway"
            - name: Monthly marks and valuation notes
              description: |-
                ## Purpose
                Once others hold an interest alongside you, the value you report is something they rely on, and a mark that only ever goes up invites questions. Updating values monthly against a simple written policy, with the reason for every change, keeps the numbers you share consistent and defensible.

                ## Milestones
                1. A one-page valuation policy covering cost, priced rounds, down rounds and write-offs.
                2. Every holding marked under that policy each month.
                3. Each change in value recorded with its trigger and source.
                4. The policy reviewed with your accountant once a year.

                ## Notes
                Start from the **Metrics log** template. Write-downs belong in the month you learn of them, not the quarter you report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every holding has a current mark under a written valuation policy, with the trigger and source for each change recorded."
                cadence: rolling
              tasks:
                - "Write a one-page valuation policy for your holdings"
                - "Mark every holding under the policy and note each change @recurring(monthly:18)"
                - "Record the source document for each change in value"
                - "Review the policy with your accountant @recurring(yearly)"
            - name: Allocation log for personal and backer money
              description: |-
                ## Purpose
                Perhaps the hardest conflict for an angel turned manager is deciding which deals go to backers and which you keep for yourself, and how much of each. Logging every allocation decision at the time, against a written rule, protects you when a backer later asks why the best deal of the year went only into your own account.

                ## Milestones
                1. A written rule for how deals are offered between your own account and backers.
                2. Every allocation since the first outside dollar recorded with date and reasoning.
                3. Any departure from the rule explained in writing.
                4. The rule and log reviewed with your lawyer once a year.

                ## Notes
                Start from the **Risk register** template for the conflicts you find. A simple default is that backers see every deal in your focus before you invest personally.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written allocation rule exists and every deal since the first outside money has a dated allocation entry with reasoning."
                cadence: rolling
              tasks:
                - "Write the rule for offering deals between your account and backers"
                - "Record each allocation decision on the day it is made"
                - "Review the month's allocations against the rule @recurring(monthly:25)"
                - "Take the rule and log to your lawyer for a check @recurring(yearly)"
            - name: Closing documents filed within a week
              description: |-
                ## Purpose
                Lost subscription papers, unsigned side letters and missing share certificates cause most of the pain in later audits, conversions and exits. Filing a complete closing set for every deal within seven days, in the same folder structure each time, means any question from a backer or an auditor can be answered from the record.

                ## Milestones
                1. A standard folder structure for every deal and vehicle.
                2. A closing checklist naming every document you expect to hold.
                3. Each closing set filed and checked against the list within seven days.
                4. A quarterly sweep for gaps across all holdings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deal closed in the last year has a complete closing set filed against the checklist, and the last quarterly sweep found no open gaps."
                cadence: rolling
              tasks:
                - "Set up a standard folder structure for deals and vehicles"
                - "Write a closing checklist of documents to hold for each deal"
                - "Sweep all holdings for missing documents @recurring(quarterly)"
                - "Chase every gap the sweep finds with the founder or platform"
            - name: Monthly prospective backer touch
              description: |-
                ## Purpose
                Most first backers come from people who have watched an angel for a year or more before asking to come in. Keeping a short list of people who might invest alongside you, and sharing something useful with a few of them each month, builds that trust without turning every coffee into a pitch.

                ## Milestones
                1. A list of 30 people who have asked about your deals or might.
                2. Each tagged by likely cheque size and whether they qualify to invest under local rules.
                3. Three to five meaningful contacts made each month and logged.
                4. Names who have said no clearly marked and left alone.

                ## Notes
                Check with counsel what you may say about specific deals before a vehicle exists; general views on a sector are usually safer than deal details.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of at least 30 prospective backers exists with eligibility noted, and at least three logged contacts were made in each of the last three months."
                cadence: rolling
              tasks:
                - "List 30 people who have asked about your deals"
                - "Note likely cheque size and eligibility for each"
                - "Make and log three to five useful contacts @recurring(monthly:8)"
                - "Prune the list and mark anyone who has said no @recurring(quarterly)"
            - name: Monthly time audit across job, angel work and vehicle
              description: |-
                ## Purpose
                Managers who build a vehicle on top of a job usually underestimate the time by half, and it is the founders and backers who feel it first. Tracking hours each month against what you committed shows early whether the arrangement is working or whether something has to give.

                ## Milestones
                1. Weekly hours committed to the job, angel work and the vehicle written down.
                2. Actual hours tracked for a month by category.
                3. A monthly comparison of committed and actual hours.
                4. A decision recorded whenever actual hours exceed the plan two months running.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of actual hours by category are recorded against the committed plan, with any overrun decision written down."
                cadence: rolling
              tasks:
                - "Write down weekly hours committed to each part of your work"
                - "Track actual hours by category for one month"
                - "Compare committed and actual hours @recurring(monthly:28)"
                - "Decide what gives when hours run over two months running"
            - name: Quarterly update to people who invested alongside you
              description: |-
                ## Purpose
                Friends and backers who joined your deals rarely hear anything until there is a big win or a loss, and silence is what erodes trust. A short quarterly note covering new deals, follow-ons, write-downs and what you are watching keeps them informed in the same format every time, good quarter or bad.

                ## Milestones
                1. A one-page update format agreed and reused each quarter.
                2. Each update covering new deals, value changes, write-offs and expected cash needs.
                3. Figures in the update matching the monthly marks.
                4. Updates sent within 45 days of quarter end, with replies answered.

                ## Notes
                Report bad news in the same issue it happens. Backers forgive a write-off far more easily than learning of it late.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly updates have been sent within 45 days of quarter end, each matching the monthly marks."
                cadence: cyclic
              tasks:
                - "Draft a one-page update format for your backers"
                - "Write and send the quarterly update @recurring(quarterly)"
                - "Check every figure against the monthly marks before sending"
                - "Answer every reply to the update within a week"
            - name: Annual duties calendar for your vehicles
              description: |-
                ## Purpose
                Each SPV and fund carries its own tax filings, accounts, investor statements and regulatory deadlines, and they multiply quickly once there are several. One calendar of every duty for every vehicle, built with your accountant and lawyer, stops a missed filing from becoming a penalty passed on to backers.

                ## Milestones
                1. Every vehicle listed with its jurisdiction and year end.
                2. Tax, accounts, investor statement and regulatory deadlines for each confirmed by advisers.
                3. All deadlines in one calendar with owners and reminders.
                4. The calendar reviewed whenever a new vehicle is formed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "One calendar lists every filing and reporting deadline for every vehicle, confirmed by your advisers, with an owner for each."
                cadence: rolling
              tasks:
                - "List every vehicle with its jurisdiction and year end"
                - "Ask your accountant and lawyer for each vehicle's deadlines"
                - "Put every deadline in one calendar with an owner"
                - "Check the next 60 days of deadlines @recurring(monthly:5)"
            - name: Fiduciary duty primer for a first-time manager
              description: |-
                ## Purpose
                A personal angel answers only to themselves, but a manager owes duties of care, loyalty and honest disclosure to the people whose money they hold. Learning what those duties mean in practice, from conflicts to fees to marketing, before the first outside dollar arrives changes how you make everyday choices.

                ## Milestones
                1. Notes on the duties of care, loyalty and disclosure as they apply to small vehicles.
                2. Five everyday situations listed where your duty would change your choice.
                3. Questions on your own position answered by a fund lawyer.
                4. A one-page summary kept with your allocation rule.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your duties to backers, checked with a fund lawyer, covers five everyday situations where it changes your choice."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a plain-language guide to manager duties from a regulator or law firm"
                - "List five situations where a duty to backers would change your choice"
                - "Take your questions to your fund lawyer"
                - "Write a one-page summary and file it with your allocation rule"
            - name: Investor eligibility rules briefing with counsel
              description: |-
                ## Purpose
                Most countries limit who can invest in private vehicles and how they can be approached, using tests such as accredited, sophisticated or high net worth status. Understanding the rules that apply where you and your backers live tells you who can come in, what you must check and what you must not say.

                ## Milestones
                1. The countries your likely backers live in listed.
                2. The eligibility tests and approach rules for each explained by counsel.
                3. A simple checklist for confirming each backer's eligibility.
                4. Your backer list reviewed against the checklist.

                ## Notes
                Rules differ by jurisdiction and change. Treat any summary you read online as a prompt for questions to counsel, not as the answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An eligibility checklist written with counsel exists for each country your backers live in, and your backer list has been checked against it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the countries where your likely backers live"
                - "Ask counsel which eligibility tests apply in each"
                - "Turn the answer into a short eligibility checklist"
                - "Check your prospective backer list against it"
            - name: How an SPV works from formation to wind-down
              description: |-
                ## Purpose
                An SPV looks like one cheque on the startup's cap table but sits on a stack of formation documents, subscription agreements, investor checks, tax filings and eventual distributions. Learning the full life of an SPV from formation to wind-down before you lead one means you can explain it to backers and price your time honestly.

                ## Milestones
                1. The life of an SPV mapped from formation to final distribution.
                2. Typical set-up, annual and wind-down costs collected from two providers.
                3. The documents each backer signs listed and read.
                4. A one-page explainer you could hand a first-time backer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page SPV explainer covers formation, costs, backer documents and wind-down, using cost figures from two real providers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map the stages of an SPV from formation to final distribution"
                - "Collect set-up, annual and wind-down costs from two providers"
                - "Read a sample subscription agreement end to end"
                - "Write a one-page explainer for a first-time backer"
            - name: Small-fund economics reality check
              description: |-
                ## Purpose
                A two percent fee on a five million fund pays for very little once administration, audit, legal and insurance are taken out, and carry may not arrive for ten years. Building a simple model of what a small fund pays you, year by year, stops the decision being made on the headline percentages.

                ## Milestones
                1. A ten-year model of fee income for two or three fund sizes.
                2. Running costs estimated from adviser and administrator quotes.
                3. Net annual income to you shown after costs for each size.
                4. A note on how long your savings must cover the gap.

                ## Notes
                Many small-fund managers waive or cut fees to make the economics work for LPs. Model that case too.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ten-year model shows net annual income after running costs for at least two fund sizes, including a reduced-fee case."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your administrator and lawyer for annual running cost estimates"
                - "Model fee income over ten years for two or three fund sizes"
                - "Subtract running costs to show net income to you each year"
                - "Add a reduced-fee case and note how long savings must cover"
            - name: Tax questions for an angel becoming a manager
              description: |-
                ## Purpose
                Carried interest, management fees, personal gains and any tax relief on angel cheques can all be treated differently once you manage money, and the rules vary sharply by country. Preparing a clear list of questions and your facts before meeting a tax adviser makes the meeting shorter and the answers usable.

                ## Milestones
                1. Your current angel holdings and any tax relief claimed summarised.
                2. Planned income from fees and carry described in plain terms.
                3. A written list of questions for the tax adviser.
                4. The adviser's answers recorded with any deadlines they mention.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tax adviser has answered a written list of questions about fees, carry and existing angel holdings, with answers and deadlines recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise your angel holdings and any tax relief claimed"
                - "Describe how you expect to earn fees and carry"
                - "Write a list of questions for your tax adviser"
                - "Record the adviser's answers and any deadlines"
            - name: Conversations with angels who became managers
              description: |-
                ## Purpose
                Managers who made this move a few years ago know which parts took longer, cost more or mattered less than expected. Five candid conversations with people at different stages, including one who went back to angel investing, give you a realistic picture no blog post will.

                ## Milestones
                1. Five people identified: SPV leads, small-fund managers and one who stopped.
                2. Each asked the same six questions about time, money, backers and regrets.
                3. Notes from every conversation kept.
                4. Three changes to your plan written down from what you heard.

                ## Notes
                Start from the **Meeting notes** template so the answers line up across all five calls.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five conversations with managers at different stages are recorded against the same six questions, with three plan changes written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name five angels who moved into managing money, including one who stopped"
                - "Write the six questions you will ask each of them"
                - "Hold the calls and keep notes for each"
                - "Write down three changes to your plan from what you heard"
            - name: Public posting rules for deals and returns
              description: |-
                ## Purpose
                Angels often post freely about their companies, but once you are raising or managing money, social posts about deals, valuations or returns can count as marketing under securities rules. Agreeing with counsel what you can and cannot say publicly keeps your useful public voice without creating a regulatory problem.

                ## Milestones
                1. Your current public channels and posting habits listed.
                2. Counsel's view on what counts as marketing in your situation recorded.
                3. A short do and do not list for posts about deals and returns.
                4. Old posts that conflict with the list reviewed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A do and do not list for public posts, agreed with counsel, exists and older posts have been checked against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the channels where you post about investing"
                - "Ask counsel what counts as marketing in your situation"
                - "Write a short do and do not list for deal posts"
                - "Review older posts that mention valuations or returns"
            - name: Choosing the deal for your first SPV
              description: |-
                ## Purpose
                The first deal you bring others into sets their view of you for years, and the temptation is to use whichever deal is open next. Holding the first SPV candidate to written criteria, including how you would explain a loss, gives the first outside money the best chance of a fair experience.

                ## Milestones
                1. Written criteria for a first SPV deal: stage, terms, information rights and your access.
                2. Two or three candidate deals scored against the criteria.
                3. The founder's agreement to an SPV on the cap table confirmed.
                4. A deal chosen, with the case for and against written down.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first SPV deal is chosen against written criteria, with founder consent to an SPV and a written case for and against."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the criteria a first SPV deal must meet"
                - "Score two or three live deals against the criteria"
                - "Confirm the founder will accept an SPV on the cap table"
                - "Write the case for and against the chosen deal"
            - name: SPV platform or own documents decision
              description: |-
                ## Purpose
                Platforms bundle formation, investor checks, banking and tax filings for a per-deal fee, while your own lawyer gives more control at a higher fixed cost. Comparing two or three platforms against a lawyer-built SPV on cost, backer experience and exit handling settles the choice before a live deal forces it.

                ## Milestones
                1. Two or three SPV platforms and one lawyer-built option listed.
                2. Each compared on cost per deal, investor checks, reporting and distributions.
                3. One existing user of each platform asked about their experience.
                4. A provider chosen and an account or engagement opened.

                ## Notes
                Start from the **Vendor** template. Ask how each provider handles distributions after an exit; that is where poor service shows.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider for your first SPV is chosen after comparing at least three options on cost, investor checks, reporting and distributions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List two or three platforms and a lawyer-built option"
                - "Compare cost per deal, investor checks, reporting and distributions"
                - "Ask one existing user of each option about their experience"
                - "Open an account or sign an engagement with your choice"
            - name: Solo or co-manager decision
              description: |-
                ## Purpose
                Going solo keeps decisions fast and economics simple, while a partner shares the work, widens deal flow and reassures backers who worry about one-person risk. Testing a possible partner on a live deal before formalising anything is the cheapest way to find out whether you decide well together.

                ## Milestones
                1. The case for solo and for a partner written side by side.
                2. Any candidate partner tested on at least one shared deal review.
                3. Areas of disagreement and how they were resolved noted.
                4. A decision recorded, with heads of terms if you go with a partner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written solo or partner decision exists, informed by at least one shared deal review with any candidate partner."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the case for going solo and for a partner"
                - "Review one live deal together with any candidate partner"
                - "Note where you disagreed and how it was settled"
                - "Record the decision and, if a partner, draft heads of terms"
            - name: Rule for your own cheques once backers invest
              description: |-
                ## Purpose
                Carrying on personal angel investing alongside a vehicle is common, but backers will want to know when you invest for yourself, in what and on what terms. A clear written rule, such as investing personally only alongside the vehicle on the same terms, removes the most obvious conflict before it arises.

                ## Milestones
                1. Options listed: stop personal investing, invest only alongside, or invest only outside the focus.
                2. The chosen rule checked with your lawyer.
                3. The rule disclosed in writing to every backer.
                4. Each personal cheque since then checked against the rule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule for personal investing, checked by your lawyer, has been disclosed to every backer and every later personal cheque complies with it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the options for personal investing alongside the vehicle"
                - "Choose a rule and check it with your lawyer"
                - "Disclose the rule in writing to every backer"
                - "Check each new personal cheque against the rule"
            - name: Liability insurance for a new manager
              description: |-
                ## Purpose
                Once you manage money, a disappointed backer or a portfolio dispute can lead to a claim against you personally, and board seats add their own exposure. Getting quotes for management liability and errors and omissions cover tells you what protection costs at your size and what it excludes.

                ## Milestones
                1. Your exposures listed: vehicle management, board seats and advisory roles.
                2. Quotes for management liability and errors and omissions cover from two brokers.
                3. Key exclusions read and questions answered by the broker.
                4. A decision to buy, defer or self-insure recorded with reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Quotes from two brokers have been compared, exclusions understood and a written insurance decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the roles and vehicles that expose you to claims"
                - "Ask two brokers for management liability and E and O quotes"
                - "Read the exclusions and ask the broker about each"
                - "Record the decision to buy, defer or self-insure"
            - name: First fund size from your real backer list
              description: |-
                ## Purpose
                Many first small funds are sized to a round number rather than to the people who have actually said they will invest. Adding up realistic cheques from named backers, discounted for those who will drop out, gives a size you can close and a hard cap you will not be embarrassed by.

                ## Milestones
                1. Every named prospective backer listed with a realistic cheque size.
                2. A drop-out discount applied based on how firm each one is.
                3. A target size and minimum viable size written down.
                4. The size tested against the deal count and cheque size your focus needs.

                ## Notes
                Expect a large share of verbal interest to fall away at signing. Size to the firm names, not the warm ones.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target and minimum fund size are written down, each built from named backers with realistic, discounted cheque sizes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every named backer with a realistic cheque size"
                - "Discount each cheque by how firm the interest is"
                - "Write down a target and minimum viable fund size"
                - "Check the size against the deals your focus needs"
            - name: Name and entity for the investing activity
              description: |-
                ## Purpose
                Running SPVs and a fund under your personal name blurs your own money with the vehicle's and makes later changes awkward. Choosing a name you can keep and, with your lawyer and accountant, the right management entity, sets up a clean line between you and the business of managing money.

                ## Milestones
                1. Three name options checked for conflicts with existing funds and trademarks.
                2. The need for a management entity discussed with your lawyer and accountant.
                3. The entity formed, if advised, with a separate bank account.
                4. Domain and basic email set up under the chosen name.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cleared name is in use, a management entity is formed if your advisers recommended one, and it has its own bank account."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three names and check for conflicts with existing funds"
                - "Ask your lawyer and accountant whether you need a management entity"
                - "Form the entity and open a separate bank account if advised"
                - "Register a domain and set up email under the name"
            - name: Yearly decision to continue, grow or step back
              description: |-
                ## Purpose
                Managing other people's money tends to roll forward on momentum, one more SPV after another, without anyone deciding it is still worth it. A yearly review of deals done, backer feedback, hours and income against what you hoped for keeps the choice to continue an active one.

                ## Milestones
                1. Deals, capital managed, hours and income for the year summarised.
                2. Feedback gathered from at least five backers.
                3. The year compared with the motive and limits you wrote at the start.
                4. A written decision to continue, grow to the next vehicle or step back.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written yearly decision to continue, grow or step back exists, based on a summary of the year and feedback from five backers."
                cadence: cyclic
              tasks:
                - "Summarise the year's deals, capital managed, hours and income @recurring(yearly)"
                - "Ask five backers for candid feedback on the year"
                - "Compare the year with your original motive and limits"
                - "Write down the decision to continue, grow or step back"
            - name: First SPV closing
              description: |-
                ## Purpose
                The first closing with outside money is where the paperwork, eligibility checks, wiring and the founder's timetable all meet, often in under two weeks. Running it from a dated checklist, with every backer signed and funded before the round deadline, is what makes backers willing to come back.

                ## Milestones
                1. A closing timetable agreed with the founder and the SPV provider.
                2. Every backer's eligibility and identity checks complete.
                3. All subscriptions signed and funds received before the deadline.
                4. The SPV's investment wired and the closing set filed.

                ## Notes
                Set your backer deadline at least five working days before the founder's. Wires and identity checks always take longer than expected.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first SPV closes on the founder's timetable with every backer checked, signed and funded, and the closing set filed."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree the closing timetable with the founder and provider"
                - "Send backers the documents with a deadline five days early"
                - "Chase every outstanding signature, check and wire"
                - "File the full closing set within seven days"
            - name: First backer onboarding pack
              description: |-
                ## Purpose
                First-time backers often have never signed a subscription agreement or completed identity checks for a private vehicle, and confusion at onboarding looks like disorganisation. A short pack explaining what they will sign, what checks to expect, the fees and what reporting they will receive makes the first experience calm and professional.

                ## Milestones
                1. A two-page guide covering documents, checks, fees, timing and reporting.
                2. The guide checked by your lawyer for accuracy.
                3. A standard welcome email and a contact for questions agreed.
                4. Feedback from the first five backers used to revise the pack.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A lawyer-checked two-page onboarding guide is in use and has been revised after feedback from the first five backers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a two-page guide to documents, checks, fees and reporting"
                - "Ask your lawyer to check the guide for accuracy"
                - "Write the standard welcome email for new backers"
                - "Revise the pack after feedback from the first five backers"
            - name: Going full time on investing
              description: |-
                ## Purpose
                Leaving a job to manage money full time is the point at which the income risk becomes real, and timing it badly can strain both the household and backers' confidence. Setting clear conditions, a notice plan and a fallback before resigning means the move happens on purpose, not in frustration.

                ## Milestones
                1. Conditions for leaving written down: capital committed, runway and deal pace.
                2. Notice period and post-employment restrictions confirmed.
                3. A household runway of at least the agreed months in place.
                4. A resignation date chosen and a fallback plan written.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A resignation happens only after written conditions are met, with restrictions confirmed, runway in place and a fallback plan written."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the conditions that must be met before you resign"
                - "Confirm your notice period and post-employment restrictions"
                - "Check that household runway covers the agreed months"
                - "Write a fallback plan in case the vehicle stalls"
            - name: First write-off letter to backers
              description: |-
                ## Purpose
                Every angel portfolio has losses, and the first one involving backers' money is a test of whether you are trusted. A plain, prompt letter that explains what happened, what you knew and when, and what you learned keeps the relationship intact far better than a line buried in the next update.

                ## Milestones
                1. The facts of the failure gathered from the founder and the record.
                2. A one-page letter covering what happened, when you knew and the lessons.
                3. The letter sent within a month of the write-off becoming clear.
                4. Backer questions answered individually.

                ## Notes
                Never blame the founder in writing. Backers judge you by how you speak about failure.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page write-off letter is sent to backers within a month of the loss becoming clear, and every question is answered individually."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather the facts of the failure from the founder and your notes"
                - "Draft a one-page letter on what happened and what you learned"
                - "Send the letter within a month of the write-off"
                - "Reply to each backer's questions individually"
            - name: First exit distribution to backers
              description: |-
                ## Purpose
                When a company is sold, backers will watch closely how quickly and accurately their share of the proceeds reaches them, including escrow holdbacks, fees and carry. Preparing a clear distribution statement and timetable with your SPV provider turns the first good news into proof that the machinery works.

                ## Milestones
                1. Sale proceeds, escrow and expected timing confirmed with the company and provider.
                2. Fees and carry calculated and checked by your accountant.
                3. A statement for each backer showing gross proceeds, deductions and net amount.
                4. Funds distributed and the statement filed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every backer receives a statement showing gross, deductions and net, and funds are distributed on the timetable given."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm proceeds, escrow and timing with the company and provider"
                - "Have your accountant check the fee and carry calculation"
                - "Send each backer a statement of gross, deductions and net"
                - "File the distribution records once funds are paid"
            - name: Public launch of your vehicle
              description: |-
                ## Purpose
                Announcing a fund or syndicate brings founder inbound and credibility, but the wrong words can breach marketing rules or overstate a track record. Preparing the announcement with counsel, with every claim backed by the outcome record, gets the attention without the risk.

                ## Milestones
                1. An announcement drafted for your site and two social channels.
                2. Every number and claim tied to the outcome record.
                3. The wording checked by counsel against marketing rules.
                4. The announcement published and inbound handled within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An announcement checked by counsel is published, every claim matches the outcome record and inbound is answered within a week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the announcement for your site and two social channels"
                - "Check every claim against the outcome record"
                - "Send the wording to counsel for a marketing rules check"
                - "Publish and answer inbound within a week"
            - name: Exited founder turning sale proceeds into a vehicle
              description: |-
                ## Purpose
                Founders who have sold a company often have capital, founder credibility and a queue of friends wanting in, but little record as an investor and a tendency to put too much of the proceeds to work at once. A plan that separates household wealth, personal angel money and any vehicle keeps the exit from being spent in two vintages.

                ## Milestones
                1. Sale proceeds split into household, personal investing and vehicle buckets with an adviser.
                2. A pace for deploying personal investing money over several years.
                3. At least a year of personal angel investing before taking outside money.
                4. A record of those cheques kept to the same standard as a manager's.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Sale proceeds are split into three written buckets with an adviser, and a multi-year deployment pace is set before any outside money is taken."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Split proceeds into household, investing and vehicle buckets with an adviser"
                - "Set a yearly ceiling for personal angel cheques"
                - "Keep a full record of each cheque from the first one"
                - "Revisit whether to take outside money after twelve months"
            - name: Operator running SPVs alongside a full-time job
              description: |-
                ## Purpose
                Many managers start with a few SPVs while still employed, which keeps income steady but squeezes time and raises employer conflicts. A deliberately small plan, with a cap on deals per year and protected hours, lets you build a record without letting either the job or backers down.

                ## Milestones
                1. A cap on SPVs per year that fits your available hours.
                2. Employer disclosure and any restrictions confirmed in writing.
                3. Two protected blocks a week for founders and backers.
                4. A review after the first two SPVs of whether the cap is right.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written yearly SPV cap and two weekly protected blocks are in place, with employer disclosure confirmed and a review after two SPVs."
                cadence: rolling
              tasks:
                - "Set a cap on SPVs per year that fits your hours"
                - "Confirm employer disclosure and restrictions in writing"
                - "Protect an evening block for founders and backers @recurring(weekly:wed)"
                - "Review the cap after your first two SPVs"
            - name: Angel group regular stepping up to lead deals
              description: |-
                ## Purpose
                Members of angel networks often become the person others follow on deals, which brings informal responsibility long before any formal vehicle. Agreeing with the group how leads are chosen, what diligence a lead shares and how conflicts are disclosed protects you and the members while you learn to lead.

                ## Milestones
                1. The group's rules on deal leads and shared diligence read.
                2. A standard diligence summary you will share as lead.
                3. Your conflicts and personal positions disclosed for each deal you lead.
                4. Feedback from members gathered after each deal you lead.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every deal you lead in the group has a shared diligence summary, a written conflicts disclosure and member feedback recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your angel group's rules on leads and shared diligence"
                - "Draft a standard diligence summary to share as lead"
                - "Disclose your conflicts in writing on each deal you lead"
                - "Ask members for feedback after each deal"
            - name: Founder still running a startup while investing
              description: |-
                ## Purpose
                Founders who invest while running their own company face conflicts that outside managers do not: competitors in the portfolio, using company time, and their own investors' expectations. Agreeing a clear arrangement with your board before taking outside money keeps your company's trust intact.

                ## Milestones
                1. Investing activity and expected hours disclosed to your board.
                2. Sectors or companies you will avoid because of competition agreed.
                3. Rules on company time, information and staff introductions written down.
                4. The arrangement minuted or confirmed in writing by the board.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your board has confirmed in writing an arrangement covering hours, excluded sectors and use of company information."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe your investing activity and hours for your board"
                - "List sectors you will avoid because of competition"
                - "Write rules on company time, information and introductions"
                - "Ask the board to confirm the arrangement in writing"
            - name: Managing money for family and close friends
              description: |-
                ## Purpose
                The first outside money often comes from relatives and close friends, who trust you personally and may not understand illiquidity, long holding periods or the chance of total loss. Treating them exactly as you would a stranger, with the same documents, eligibility checks and disclosures, protects the relationships if the deals go badly.

                ## Milestones
                1. Each family or friend backer given the same documents and disclosures as others.
                2. Eligibility checked under the same rules as any other backer.
                3. A written note from each that they understand the money may be lost.
                4. A personal limit on how much any one relative can invest.

                ## Notes
                Ask yourself whether you could still sit at the same table if their money went to zero. If not, lower the cheque.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Every family or friend backer has the same documents and checks as others, a signed acknowledgement of risk and a cheque within your limit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every relative and friend likely to invest"
                - "Give each the same documents and eligibility checks as others"
                - "Ask each to acknowledge in writing the money may be lost"
                - "Set a limit on how much any one relative can invest"
            - name: Building a vehicle in a smaller market
              description: |-
                ## Purpose
                Angels in smaller ecosystems, from the Caribbean to regional cities, often have strong local networks but face fewer specialist lawyers and administrators, cross-border backers and limited exits. Mapping the local legal options, foreign-currency issues and where founders go for later rounds shapes a vehicle that fits the market rather than copying a large-hub model.

                ## Milestones
                1. Local and offshore structuring options listed with a lawyer in your market.
                2. Currency and cross-border payment issues for backers noted.
                3. The funds and investors that lead later rounds for local founders mapped.
                4. A short note on how your vehicle will handle exits that may take longer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note covers local and offshore structure options, currency issues, later-round investors and the exit horizon for your market."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a local lawyer which structures work for backers in your market"
                - "Note currency and cross-border payment issues for backers"
                - "Map the investors who lead later rounds for local founders"
                - "Write how the vehicle will handle longer exit timelines"
            - name: Separating selection from luck in angel returns
              description: |-
                ## Purpose
                A strong angel record is often driven by one or two outliers, and experienced LPs will ask whether you picked them or happened to be in the room. Reviewing each big outcome for how you found it, what you saw and whether you would have backed it again tells you which parts of the record you can claim.

                ## Milestones
                1. The three to five outcomes that drive most of your returns identified.
                2. For each, how you found it, your reason and your actual role written down.
                3. The record shown with and without the largest outcome.
                4. A short explanation you can give an LP that does not overclaim.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review of your top outcomes covers source, reason and role, shows the record with and without the largest, and ends in an LP-ready explanation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Identify the outcomes that drive most of your returns"
                - "Write how you found each and what you actually did"
                - "Show the record with and without the largest outcome"
                - "Draft a short explanation for LPs that does not overclaim"
            - name: Moving SPV backers into a first small fund
              description: |-
                ## Purpose
                Backers who have joined several SPVs are the natural first investors in a fund, but committing to a blind pool is a different decision from picking deals one by one. Talking to them early about what the fund would look like, and what they would need to commit, tells you whether the backer base can support a fund at all.

                ## Milestones
                1. Every SPV backer listed with the deals they joined and amounts.
                2. Conversations held with the most active backers about a fund.
                3. Soft indications of interest recorded, with the conditions attached.
                4. A written view on whether the backer base supports a fund.

                ## Notes
                Check with counsel what you may say before a fund's documents exist; keep these conversations to interest, not offers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The most active SPV backers have been asked about a fund, their interest and conditions recorded, and a written view reached."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every SPV backer with deals joined and amounts"
                - "Book calls with the ten most active backers"
                - "Record each backer's interest and conditions"
                - "Write a view on whether the backer base supports a fund"
            - name: Keeping or transferring angel holdings into the fund
              description: |-
                ## Purpose
                Occasionally founders and LPs suggest moving your best personal angel positions into a new fund to seed it, which raises hard questions about valuation, conflicts and who gains. Working through the options with counsel and an independent view on value, and asking prospective LPs what they would accept, avoids a seed portfolio that looks self-serving.

                ## Milestones
                1. Candidate holdings for transfer listed with their recorded values.
                2. Options set out: keep personally, transfer at cost, or transfer at an independent value.
                3. Counsel's view on conflicts and consents recorded.
                4. The preference of prospective LPs gathered and a decision made.

                ## Notes
                Start from the **Risk register** template to record each conflict and how it is handled.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on transferring or keeping angel holdings exists, with counsel's view on conflicts and the preferences of prospective LPs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List holdings that could be offered to the new fund"
                - "Set out keep, transfer at cost and transfer at independent value"
                - "Ask counsel about conflicts and consents for each option"
                - "Ask prospective LPs which option they would accept"
            - name: Second vehicle decision after two years
              description: |-
                ## Purpose
                After two years of SPVs or a small fund there is enough evidence to decide whether to raise something larger, keep the current size or return to personal investing. Reviewing deal outcomes, backer retention and your own economics against the original plan turns that choice from momentum into evidence.

                ## Milestones
                1. Two years of deals, marks, backer retention and income summarised.
                2. Re-investment rates of backers across vehicles calculated.
                3. Three experienced managers asked to review the summary.
                4. A written decision on the next vehicle, its size and timing.
              priority: low
              deadlineOffsetDays: 730
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written next-vehicle decision exists, based on a two-year summary including backer retention and reviewed by three experienced managers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Summarise two years of deals, marks, retention and income"
                - "Calculate how many backers came back for a second vehicle"
                - "Ask three experienced managers to review the summary"
                - "Write the decision on the next vehicle, size and timing"
---

# Angel to Fund Manager

This area is for the angel who has written a few dozen personal cheques and is wondering whether to take money from others: the exited founder, the operator investing on the side, the angel group regular who keeps being asked to lead. It starts with the foundations (an inventory and outcome record of every angel cheque, an honest motive check, the money and employer boundaries, the advisers you will need), then the weekly and monthly machinery that makes you trustworthy with someone else's capital, the knowledge that changes when you owe duties to backers, the choices between SPVs, rolling vehicles and a small fund, the dated firsts from the first SPV closing to the first write-off letter, variants for different starting points, and finally the specialist questions of moving angel holdings and backers into a first fund.

What repeats is a weekly deal review with written pass notes, a monthly founder check-in log, monthly marks and allocation records, a monthly backer touch and time audit, a quarterly update to the people who invested alongside you and a yearly review of whether to keep going. The Metrics log, Meeting notes, Vendor and Risk register templates pair with the projects that name them. Everything here is organisational: securities, tax and regulatory questions differ by country and belong with a fund or startup lawyer and a tax adviser, and nothing in these projects is legal, tax or investment advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
