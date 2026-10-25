---
id: family-office.donor-advised-funds
name: Donor-Advised Funds
description: "A donor-advised fund run as a family habit: a sponsor chosen on fees and policies, clean contribution records, a grant workflow and family meetings, children with their own allocations, and successors named."
category: personal
version: 1.0.0
tags: [family-office, donor-advised-funds, parent, retiree, philanthropy, charitable-giving, grant-recommendations, family-giving]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - compliance-control
    - meeting-notes
    - metrics-log
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Donor-Advised Funds
          description: "Using a donor-advised fund for family giving: choosing a sponsor, contributions, grant recommendations, involving children and record keeping."
          projects:
            - name: Donor-advised fund fit check for the family
              description: |-
                ## Purpose
                Families often open a donor-advised fund because a banker suggested it at year end, then leave it half used. Before opening anything, write down what the family wants its giving to do, how much it gives a year, whether it wants privacy, and whether it already has a foundation or is likely to want one. A short fit check against direct giving, a fund and a private foundation shows whether a fund is the right tool or one tool among several.

                ## Milestones
                1. The family's giving aims written in five sentences or fewer.
                2. Typical annual giving over the last three years estimated.
                3. Direct giving, a donor-advised fund and a private foundation compared on cost, control, privacy and paperwork.
                4. A recorded decision to open a fund, keep giving directly, or revisit in a named year.

                ## Notes
                A fund gives you advisory privileges, not ownership: once assets go in, the sponsor has legal control and the final say on every grant. Make sure the senior generation is comfortable with that before going further.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated one-page fit check comparing three giving routes, ending in a recorded decision agreed by the senior generation."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down in a paragraph why the family gives and to whom"
                - "Total the family's charitable gifts for the last three years"
                - "Compare direct giving, a fund and a foundation on four criteria"
                - "Record the decision and the year it should be revisited"
            - name: Three-year map of family charitable gifts
              description: |-
                ## Purpose
                Most families give through several pockets at once: a parent's cheque book, a business sponsorship budget, a grandparent's standing orders, online gifts on a credit card. Mapping three years of gifts by giver, charity, amount and route shows how much the family really gives and which gifts would move into the fund. It also uncovers gifts that bought tickets or tables, which a fund usually cannot pay for.

                ## Milestones
                1. Every gift over a set threshold for three years listed with giver, charity, amount and route.
                2. Gifts grouped by charity and by family member.
                3. Each recurring gift marked as move to the fund, keep direct, or stop.
                4. Gifts that included tickets, dinners or other benefits flagged separately.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spreadsheet of three years of family gifts with each recurring gift marked move, keep or stop, and benefit-bearing gifts flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull charity receipts from the last three tax years into one folder"
                - "Ask each giving family member for gifts the office does not see"
                - "List gifts by charity with amount, giver and payment route"
                - "Mark each recurring gift as move, keep direct or stop"
            - name: Tax adviser briefing before the first contribution
              description: |-
                ## Purpose
                Whether a gift to a fund gives tax relief, how much and in which year depends on where each donor is resident, what asset is given and what else happens that year. In the US a fund contribution is generally treated as a gift to a public charity, while the UK, Canada and other countries have their own rules and some give no relief at all. A written briefing to the family's tax adviser, and their written reply, keeps the contribution plan from resting on something a banker said over lunch.

                ## Milestones
                1. Each intended donor's tax residence and citizenship listed.
                2. The assets that might be contributed listed with rough value and original cost.
                3. A written question set sent to the tax adviser.
                4. The adviser's answers on relief, limits and timing filed with the fund records.

                ## Notes
                Families with members in more than one country should ask each country's adviser separately. Relief in one country does not mean relief in another.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written answer from the family's tax adviser covering relief, limits and timing for each intended donor, filed before any contribution is made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each intended donor with their tax residence and citizenship"
                - "Note the assets you might give, with value and original cost"
                - "Ask the agent to draft a question list for the tax adviser from these notes"
                - "Book a call with the tax adviser and file their written answers"
            - name: Choosing a donor-advised fund sponsor
              description: |-
                ## Purpose
                Sponsors fall into three broad groups: national funds linked to investment firms, community foundations tied to a city or region, and single-issue or faith-based charities. They differ on minimums, fees, investment choices, international grants, which assets they accept and how much help they give a family. Comparing three sponsors against the same criteria, with the fit check and tax answers in hand, turns a sales pitch into a choice.

                ## Milestones
                1. A shortlist of three sponsors, at least one from a different group to the others.
                2. Each sponsor scored on minimums, fees, investment options, asset acceptance, international grants and family features.
                3. A call held with the donor services team of the top two.
                4. A chosen sponsor with the reasons written down.

                ## Notes
                Start from the **Vendor** template. Ask each sponsor for its full programme policies, not the brochure: the policies decide what you can actually do.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three sponsors and a written choice, with each sponsor's policy document saved."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist one national fund, one community foundation and one other sponsor"
                - "Request each sponsor's programme policies and fee schedule"
                - "Score the three sponsors on the same six criteria"
                - "Hold a call with the donor services team of your top two"
            - name: Sponsor fees and minimums worked through
              description: |-
                ## Purpose
                Fund costs come in layers: an administrative fee charged by the sponsor, often tiered by balance, the expense ratio of the investment pools, and sometimes a minimum annual fee or a minimum grant size. At a modest balance those layers can take a noticeable share of what the fund could give each year. Working the numbers for your expected balance shows the real cost and whether a cheaper sponsor or pool changes the picture.

                ## Milestones
                1. Each shortlisted sponsor's administrative fee tiers, pool expense ratios and minimums written in one table.
                2. The annual cost at the expected opening balance calculated for each sponsor.
                3. Minimum opening contribution, minimum grant and minimum balance noted.
                4. The cost difference between sponsors written as a sum per year.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table showing each shortlisted sponsor's total annual cost at the family's expected balance, with minimums noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy each sponsor's administrative fee tiers into one table"
                - "Add the expense ratio of the pools you would likely use"
                - "Calculate total annual cost at your expected opening balance"
                - "Note each sponsor's minimum grant and minimum balance"
            - name: Opening the fund with the right roles
              description: |-
                ## Purpose
                The opening form decides more than it looks: the fund's name, who may recommend grants, whether advisers act jointly or alone, who can see statements and who takes over later. Families that tick boxes in a hurry end up with a fund only one parent can use, or a surname printed on every grant letter when they wanted privacy. Agreeing the roles first and then opening the account makes the fund work from day one.

                ## Milestones
                1. The fund name agreed, including whether it shows the family surname.
                2. Primary advisers named, and whether either can act alone recorded.
                3. Read-only access for the family office or bookkeeper requested.
                4. The account opened and the sponsor's confirmation filed.

                ## Notes
                Some sponsors let the fund name differ from the family name. If privacy matters, choose a neutral name now, because renaming later can mean new paperwork.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An opened fund with its name, advisers, signing rule and access list recorded on one page and the sponsor's confirmation filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree a fund name and whether it shows the family surname"
                - "Decide who the primary advisers are and whether they can act alone"
                - "Complete the sponsor's opening form with the agreed roles"
                - "File the sponsor's account confirmation in the fund records"
            - name: First contribution to the fund
              description: |-
                ## Purpose
                Getting the first gift right sets the habit for every one after it. Cash is simplest, but many families give listed shares held for a long time because, in several countries, giving the shares directly rather than selling them first can avoid tax on the gain; your tax adviser confirms whether that applies. Planning the first contribution as a small, clean transaction tests the sponsor's process before anything larger goes in.

                ## Milestones
                1. The asset and amount for the first contribution chosen with the tax adviser's answer in hand.
                2. The sponsor's transfer instructions obtained and checked by phone.
                3. The asset received and the sponsor's receipt saved.
                4. The value on the receipt matched to the family's contribution record.

                ## Notes
                Tell the sponsor in writing before shares arrive. Unannounced share transfers can sit unidentified for weeks, and the gift date can become disputed.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first contribution received by the sponsor, with its written receipt showing date and value filed in the fund records."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the asset and amount for the first contribution"
                - "Request the sponsor's transfer instructions for that asset"
                - "Confirm the transfer details by phone before sending anything"
                - "Save the sponsor's receipt with the date and value of the gift"
            - name: Fund records folder and naming rule
              description: |-
                ## Purpose
                Paper piles up for years once a fund exists: opening documents, contribution receipts, grant confirmations, statements, charity letters and policy updates. Without a single folder and a naming rule, the receipts the tax return needs end up in four different inboxes. Setting up the folder before the first gift costs an hour and saves a scramble every filing season.

                ## Milestones
                1. One secure folder created with subfolders for opening documents, contributions, grants, statements and correspondence.
                2. A file naming rule written, such as date, type and amount.
                3. Existing fund documents moved in and renamed.
                4. Access granted to the people who need it and no one else.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared fund folder with five subfolders, a written naming rule and all existing fund documents filed under it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the fund folder with five subfolders in the family document vault"
                - "Write a one-line file naming rule at the top of the folder"
                - "Move the opening documents and any early receipts into place"
                - "Limit folder access to the advisers and the office"
            - name: Fund portal logins and two-step sign-in
              description: |-
                ## Purpose
                Portal logins get shared between a parent, an assistant and the office, and nobody remembers who still has access. A fund cannot pay the family, but a compromised login can redirect grants, change contact details or alter successor names. Giving each person their own login with two-step sign-in, and checking the list once a year, closes the gap.

                ## Milestones
                1. Everyone with portal access listed with their role.
                2. Shared logins replaced with individual ones.
                3. Two-step sign-in switched on for every login.
                4. Former staff and advisers removed from the portal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every portal user has an individual login with two-step sign-in, and the access list is checked each year."
                cadence: rolling
              tasks:
                - "List everyone who can log into the sponsor portal"
                - "Replace shared logins with individual accounts"
                - "Switch on two-step sign-in for every login"
                - "Review who has portal access and remove leavers @recurring(yearly)"
            - name: Annual giving budget for the fund
              description: |-
                ## Purpose
                Without a number, grants drift: either the fund grows untouched or a single emotional year drains it. A yearly budget split between core charities, family members' own picks and a reserve for emergencies gives every grant meeting a frame. It also tells the tax adviser roughly what contributions to expect.

                ## Milestones
                1. A total grant budget for the year agreed by the advisers.
                2. The budget split into core grants, family picks and a reserve.
                3. Planned contributions for the year estimated.
                4. The budget written on one page and shared with the family.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page annual grant budget with core, family and reserve lines, agreed by the advisers and shared with the family each year."
                cadence: cyclic
              tasks:
                - "Agree the total amount to grant from the fund this year"
                - "Split it between core charities, family picks and a reserve"
                - "Estimate the contributions planned for the year"
                - "Compare grants paid so far with the year's budget @recurring(quarterly)"
            - name: Grant recommendation workflow
              description: |-
                ## Purpose
                Every grant passes the same steps: someone proposes a charity, the office checks it is eligible, the advisers agree, the recommendation goes into the sponsor's portal, and the sponsor approves and pays. Writing the steps down, with who does each and how long it should take, stops grants stalling in an inbox. It also gives children a process they can follow when their turn comes.

                ## Milestones
                1. The steps from idea to paid grant written on one page with an owner for each.
                2. An approval rule agreed, such as either adviser for grants under a set amount and both above it.
                3. Standard wording for the grant purpose line agreed.
                4. The next three grants run through the written process.

                ## Notes
                Keep the purpose line simple, such as general support. Wording that ties a grant to a benefit for the family can lead the sponsor to reject it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written grant workflow with owners and an approval rule, used for every grant made in the last quarter."
                cadence: rolling
              tasks:
                - "Write the steps from grant idea to paid grant with an owner each"
                - "Agree the approval threshold for one adviser versus both"
                - "Review pending grant recommendations in the sponsor portal @recurring(monthly:8)"
                - "Run the next three grants through the written steps"
            - name: Monthly grant and statement reconciliation
              description: |-
                ## Purpose
                Sponsors sometimes reject or return grants because a charity changed its bank details, lost its status or never cashed the payment. Matching the sponsor's monthly activity against the family's own grant log catches returned grants, duplicate recommendations and fees taken, while memories are still fresh. Twenty minutes a month keeps the record clean enough to hand to anyone.

                ## Milestones
                1. A family grant log kept with date recommended, charity, amount and status.
                2. Each month's sponsor activity matched line by line to the log.
                3. Returned or uncashed grants followed up with the sponsor.
                4. Any differences explained in a note on the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each of the last six months reconciled, with every grant on the sponsor statement matched to the family log and differences explained."
                cadence: rolling
              tasks:
                - "Start a grant log with date, charity, amount and status"
                - "Reconcile the sponsor activity report against the grant log @recurring(monthly:20)"
                - "Chase any grant shown as returned or uncashed"
                - "Note the fees deducted each month in the log"
            - name: Year-end contribution and grant calendar
              description: |-
                ## Purpose
                December is when most families think about giving, and when sponsors are busiest. Sponsors publish cut-off dates for contributions of shares, cash and complex assets to count in the calendar year, and they slow grant processing too. A yearly calendar set in early autumn means contributions land in the year intended and grants reach charities before their own year end.

                ## Milestones
                1. The sponsor's cut-off dates for each asset type entered in the family calendar.
                2. The year's planned contributions confirmed with the tax adviser by the start of the last quarter.
                3. Year-end grants submitted before the sponsor's processing deadline.
                4. Receipts for every contribution in the year collected by mid January.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Contributions and year-end grants submitted before the sponsor's published cut-off dates, with all receipts collected by mid January."
                cadence: cyclic
              tasks:
                - "Check the sponsor's year-end cut-off dates for each asset type @recurring(yearly)"
                - "Confirm planned year-end contributions with the tax adviser"
                - "Submit year-end grants a fortnight before the sponsor deadline"
                - "Collect every contribution receipt for the year into one file"
            - name: Contribution receipt and substantiation log
              description: |-
                ## Purpose
                If a tax authority queries a charitable deduction, it will ask for the sponsor's written acknowledgement and, for some assets, an independent appraisal. Keeping one log of every contribution, its date, asset, value, receipt and any appraisal means the return is prepared from evidence. It also shows which donor made which gift when two spouses or two generations share a fund.

                ## Milestones
                1. Every contribution listed with donor, date, asset, value and receipt reference.
                2. A receipt saved for each contribution and checked against the log.
                3. Appraisals or valuation reports attached where the adviser says one is needed.
                4. The year's log sent to the tax preparer each filing season.

                ## Notes
                Start from the **Compliance control** template. In the US, gifts of most non-listed assets above a set value need a qualified appraisal; ask your adviser what applies where you live.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A contribution log with a matched sponsor receipt for every gift, sent to the tax preparer before each filing deadline."
                cadence: rolling
              tasks:
                - "List every contribution so far with donor, date, asset and value"
                - "File each new contribution receipt against the log @recurring(monthly:12)"
                - "Ask the tax adviser which gifts need an appraisal"
                - "Send the year's log to the tax preparer each filing season"
            - name: Quarterly family grant meeting
              description: |-
                ## Purpose
                Run by the senior generation alone, a fund teaches the children nothing and can feel like a private bank account. A short quarterly meeting where each family member brings one proposal, the budget is checked and grants are agreed turns the fund into a family habit. Forty-five minutes is enough if there is a set agenda.

                ## Milestones
                1. A standing agenda: budget position, proposals, decisions, follow-ups.
                2. Meeting dates for the year in every family member's calendar.
                3. Minutes recording each proposal, the decision and who submits it.
                4. Agreed grants submitted within a week of each meeting.

                ## Notes
                Start from the **Meeting notes** template. If the family is spread out, hold at least one of the four meetings in person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four family grant meetings held in a year, each with minutes and agreed grants submitted within a week."
                cadence: rolling
              tasks:
                - "Set four meeting dates for the year with the family"
                - "Draft a standing four-item agenda"
                - "Hold the family grant meeting @recurring(quarterly)"
                - "Submit the agreed grants within a week of each meeting"
            - name: Matching investment pools to the grant timeline
              description: |-
                ## Purpose
                Assets waiting to be granted sit in investment pools the sponsor offers, from cash to equity-heavy portfolios. The sensible mix depends on how soon the family expects to grant, not on how the family invests its own money. Matching pools to the grant timeline, and checking it yearly, keeps next year's grants out of volatile pools; the choice itself is the advisers' call with their investment adviser.

                ## Milestones
                1. Expected grants for the next three years estimated from the budget.
                2. Each available pool's objective, risk level and cost noted.
                3. Assets split between near-term and longer-term pools in writing.
                4. A yearly review recorded with any change and the reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written pool allocation matched to three years of expected grants, reviewed once a year with the reason for any change."
                cadence: cyclic
              tasks:
                - "List the investment pools your sponsor offers with their costs"
                - "Estimate grants expected over the next three years"
                - "Agree the split between near-term and longer-term pools"
                - "Review the pool allocation against the grant plan @recurring(yearly)"
            - name: Scheduled recurring grants
              description: |-
                ## Purpose
                Charities plan on regular support, and many sponsors let you schedule grants to repeat monthly, quarterly or yearly. Moving standing gifts into scheduled grants means fewer forgotten renewals, but a schedule set and forgotten keeps paying a charity the family has moved away from. A short list of scheduled grants, each with a review date, keeps it deliberate.

                ## Milestones
                1. Each standing gift identified from the three-year gift map.
                2. Scheduled grants set up in the portal with amount and frequency.
                3. An end or review date set for each scheduled grant.
                4. The list of scheduled grants kept in the grant log.

                ## Notes
                Many sponsors will not use the fund to pay a pledge that is legally binding on you personally. Tell charities the support is a recommendation from the fund, not a personal pledge.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every standing gift either set up as a scheduled grant with a review date or ended, and listed in the grant log."
                cadence: rolling
              tasks:
                - "Pick the standing gifts from the gift map to move into the fund"
                - "Set up scheduled grants in the sponsor portal"
                - "Give each scheduled grant a review date"
                - "Check that scheduled grants went out as planned @recurring(monthly:3)"
            - name: Charity acknowledgements and reports log
              description: |-
                ## Purpose
                Charities thank donors, send impact reports and invite visits, and through a fund those letters can go to the sponsor, the family office or nowhere. A simple routine for logging what comes back tells the family which charities communicate well and gives the next grant meeting something real to discuss. It also leaves a record if the family chose anonymity and a charity contacts them anyway.

                ## Milestones
                1. The name and address each charity sees on grants checked.
                2. A column in the grant log for acknowledgement and report received.
                3. Charity correspondence filed in the fund folder.
                4. A short note on each charity's communication brought to the grant meeting.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The grant log shows acknowledgement status for every grant in the last year, with charity letters filed."
                cadence: rolling
              tasks:
                - "Check what name and address charities see on your grants"
                - "Add an acknowledgement column to the grant log"
                - "Log thank-you letters and charity reports received @recurring(monthly:26)"
                - "Summarise charity communication for the next grant meeting"
            - name: Annual review of the fund and sponsor
              description: |-
                ## Purpose
                Once a year, step back from individual grants and look at the fund itself: what came in, what went out, what it cost, how the sponsor performed and whether the fund still fits the family. Ten pages of statements become a one-page review the senior generation can read in five minutes. Problems with the sponsor surface here long before they justify a move.

                ## Milestones
                1. Contributions, grants, investment change and fees for the year summarised on one page.
                2. Sponsor service rated, with any problems listed.
                3. Roles and contact details checked against the family's current situation.
                4. Decisions for the coming year recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page annual fund review with figures, a sponsor rating and decisions, read by the advisers each year."
                cadence: cyclic
              tasks:
                - "Download the sponsor's annual statement"
                - "Ask the agent to summarise the year's statements into one page"
                - "Rate the sponsor's service and list any problems"
                - "Hold the annual fund review with the advisers @recurring(yearly)"
            - name: Sponsor inactivity rules check
              description: |-
                ## Purpose
                Most sponsors have an inactivity policy: if no grant is recommended for a set number of years, or advisers cannot be reached, the sponsor may contact the family and eventually grant the balance at its own discretion. Families where an older donor quietly stops engaging can lose their say over the fund this way. Knowing the rule and checking against it once a year prevents an avoidable surprise.

                ## Milestones
                1. The sponsor's inactivity and minimum grant rules copied into the fund folder.
                2. Date of the last grant and last adviser contact noted.
                3. Adviser contact details confirmed as current with the sponsor.
                4. A reminder set well inside the inactivity period.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The sponsor's inactivity rule is on file and the fund's last grant date is checked against it every year."
                cadence: rolling
              tasks:
                - "Find the sponsor's inactivity policy and save it"
                - "Note the date of the fund's last grant"
                - "Update adviser phone numbers and email addresses with the sponsor"
                - "Check the last grant date against the inactivity rule @recurring(yearly)"
            - name: Fund rules sheet for everyone who proposes grants
              description: |-
                ## Purpose
                Every family member who suggests grants needs the handful of rules sponsors enforce. In most places with these funds, grants cannot buy anything for the family, such as gala tickets, school fees or a table at a dinner, cannot go to individuals, and in many cases cannot settle a personal pledge. A one-page explainer and a half-hour talk stop embarrassing rejections and protect the fund's tax standing.

                ## Milestones
                1. The sponsor's list of prohibited grants read and summarised in plain words.
                2. A one-page rules sheet written for the family.
                3. The rules talked through with each person who can propose grants.
                4. Questions the family could not answer sent to the sponsor and replies filed.

                ## Notes
                Rules differ between countries and sponsors. Use your sponsor's own policy as the source, not general articles.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page rules sheet based on the sponsor's policy, talked through with everyone who proposes grants."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the sponsor's section on prohibited grants and benefits"
                - "Write a one-page rules sheet in plain words"
                - "Walk each grant-proposing family member through the sheet"
                - "Send open questions to the sponsor and file the answers"
            - name: Giving appreciated shares rather than cash
              description: |-
                ## Purpose
                Donors who hold listed shares bought long ago often give cash and keep the shares, which in several countries means later paying tax on a gain that a direct gift of the shares might have avoided. Learning how in-kind gifts work, what the sponsor needs and how value is set on the gift date lets the family ask its adviser the right questions each year. Nothing here is a recommendation; your tax adviser decides what suits each donor.

                ## Milestones
                1. How the sponsor values gifted shares on the transfer date understood and noted.
                2. A list of long-held positions with their cost kept by the investment adviser.
                3. The steps for an in-kind transfer written down.
                4. The tax adviser's view on gifting shares recorded for each donor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on how in-kind share gifts work with this sponsor, plus the tax adviser's view for each donor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the sponsor's guidance on gifts of listed shares"
                - "Ask the investment adviser for long-held positions and their cost"
                - "Write down the transfer steps from brokerage to sponsor"
                - "Record the tax adviser's view on share gifts for each donor"
            - name: Reading the sponsor's programme policies
              description: |-
                ## Purpose
                Programme policies, sometimes forty pages long, are the real contract: they cover advisory rights, minimum grants, international grants, investment options, successor rules, inactivity and what happens on death. Few families read them. Reading them once, with a list of questions, turns later surprises into known rules.

                ## Milestones
                1. The current policy document saved with its date.
                2. The ten clauses that most affect the family summarised.
                3. Questions sent to the sponsor and answers filed.
                4. A note set to reread the policies whenever the sponsor announces changes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the ten clauses that most affect the family, with sponsor answers to open questions filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the dated programme policy document"
                - "Summarise the ten clauses that matter most to the family"
                - "Email the sponsor the questions the policy leaves open"
                - "Save the sponsor's replies next to the summary"
            - name: Checking charity eligibility before recommending
              description: |-
                ## Purpose
                Sponsors will only pay charities in good standing, and a recommendation to a group that lost its status, or never had it, gets rejected weeks later. Learning to check the official charity register in the charity's country, and the sponsor's own grant search tool, before a family member gets attached to an idea saves time and disappointment. Deeper judgement on whether a charity is effective belongs to the family's grant-making strategy, not here.

                ## Milestones
                1. The sponsor's charity search tool used to find three charities the family already supports.
                2. The official charity register for each relevant country bookmarked.
                3. A two-minute check written as steps for family members.
                4. Each new proposal checked before it reaches the grant meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written two-minute eligibility check used on every new proposal before the grant meeting."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up three existing charities with the sponsor's search tool"
                - "Bookmark the official charity register for each country you give in"
                - "Write the eligibility check as five short steps"
                - "Run the check on each new proposal before the grant meeting"
            - name: Anonymity and grant recognition defaults
              description: |-
                ## Purpose
                Funds let advisers choose how each grant is acknowledged: in the fund's name, in the family's names, in honour of someone, or fully anonymous. Families with a public profile often want anonymity for most grants but recognition for a few. Setting a default and knowing how to override it per grant avoids a family name appearing in a donor list by accident.

                ## Milestones
                1. Each recognition option the sponsor offers listed.
                2. A family default agreed, such as anonymous unless the advisers decide otherwise.
                3. The default set in the portal.
                4. Grants that should carry the family name agreed case by case and noted in the log.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded family default for grant recognition, set in the portal, with exceptions noted in the grant log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the recognition options your sponsor offers per grant"
                - "Agree a family default for how grants are acknowledged"
                - "Set the default in the sponsor portal"
                - "Note in the grant log any grant that names the family"
            - name: Reading the fund's quarterly statement
              description: |-
                ## Purpose
                Fund statements show contributions, grants paid and pending, investment change and fees, but each sponsor lays them out differently. Learning to read one properly, ideally alongside the parent or retiree who set the fund up, means more than one person in the family can spot errors and understand what the fund can give. It is also the simplest handover a senior donor can make.

                ## Milestones
                1. Each section of the statement explained on a short annotated copy.
                2. Fees located and checked against the fee schedule.
                3. Pending grants matched to the grant log.
                4. A second family member able to read the statement unaided.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An annotated statement on file and a second family member who can explain each line of it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Print the latest quarterly statement and annotate each section"
                - "Find the fees and check them against the fee schedule"
                - "Match pending grants on the statement to the grant log"
                - "Go through the next statement with a second family member"
            - name: Bunching several years of contributions
              description: |-
                ## Purpose
                Some families give a larger amount into the fund in one year, such as a high-income year, and then grant it out over several years. Whether that helps depends on each donor's tax position, so this project is about preparing the numbers and getting a clear answer, not assuming. The fund makes the approach practical because charities still receive steady grants.

                ## Milestones
                1. Expected income and giving for the next three years estimated for each donor.
                2. Bunched and steady contribution patterns set side by side for the tax adviser.
                3. The adviser's view recorded.
                4. If going ahead, a grant schedule that spreads the bunched amount across the years.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of bunched and steady contributions reviewed by the tax adviser, with the family's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate each donor's income and giving for the next three years"
                - "Lay out a bunched and a steady pattern side by side"
                - "Send both patterns to the tax adviser for comment"
                - "Record the decision and adjust the grant budget to match"
            - name: Moving the fund to another sponsor
              description: |-
                ## Purpose
                Families outgrow sponsors: fees rise, a community foundation cannot take private shares, or the family wants international grants the sponsor will not make. Most sponsors allow a fund to be granted across to another sponsor's fund, but the process, timing and any exit rules vary. A planned move avoids a gap in scheduled grants and lost history.

                ## Milestones
                1. Reasons for moving written down and tested with the current sponsor first.
                2. The receiving sponsor chosen and its account opened.
                3. The outgoing sponsor's transfer process and timing confirmed in writing.
                4. Assets moved, scheduled grants recreated and full history downloaded.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The fund moved to a new sponsor with its full grant history downloaded and all scheduled grants recreated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down why the current sponsor no longer fits"
                - "Ask the current sponsor whether it can fix the main problem"
                - "Confirm the transfer process with both sponsors in writing"
                - "Download the full grant history before the move"
            - name: Separate sub-funds for each branch or child
              description: |-
                ## Purpose
                When adult children have their own interests, a single family fund turns every grant into a negotiation. Many sponsors allow linked funds or sub-accounts, each with its own advisers, funded from the parents' gifts or the children's own. Choosing between one shared fund, linked sub-funds and fully separate funds sets how independent each branch is.

                ## Milestones
                1. The sponsor's options for linked or separate funds listed.
                2. A shared, linked or separate set-up chosen by the senior generation.
                3. Each branch's fund opened with named advisers.
                4. A written rule for how much each branch receives and how often.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between shared, linked and separate funds, with each branch's fund open and a written allocation rule."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the sponsor what linked or separate fund options it offers"
                - "Discuss with the children how independent they want to be"
                - "Open the branch funds with the chosen advisers"
                - "Send each branch a statement of its fund @recurring(quarterly)"
            - name: Self-imposed annual grant pace
              description: |-
                ## Purpose
                Private foundations in many countries have a required payout, while most donor-advised funds have none, so balances can sit for years. Setting a family rule, such as granting at least a fixed share of the opening balance each year, keeps the fund doing its job and answers critics who see funds as parked money. Tracking the actual rate every year shows whether the rule is kept.

                ## Milestones
                1. A minimum annual grant rate agreed by the advisers.
                2. The rate written on the family's giving page.
                3. Each year's actual rate calculated from the opening balance and grants paid.
                4. Years below the rate explained in a note.

                ## Notes
                Start from the **Metrics log** template to keep the yearly rate in one place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written minimum grant rate and a log showing the actual rate for each year since it was set."
                cadence: cyclic
              tasks:
                - "Agree a minimum share of the opening balance to grant each year"
                - "Write the rate on the family giving page"
                - "Calculate grants paid as a share of the opening balance @recurring(yearly)"
                - "Explain any year that fell below the rate"
            - name: Spend-down or long-lasting fund decision
              description: |-
                ## Purpose
                Some families want to give everything away in their lifetime; others want a fund their grandchildren will advise. That choice shapes the grant pace, the investment pools, the successor plan and what children are told. A clear, written decision, revisited when circumstances change, stops each generation assuming a different answer.

                ## Milestones
                1. The senior generation's view on spending down or lasting recorded.
                2. Children's views heard at a family meeting.
                3. A decision, with a target year if spending down, written down.
                4. Grant pace and pools adjusted to fit the decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to spend down by a named year or to last across generations, with grant pace and pools aligned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each senior donor whether the fund should outlive them"
                - "Put the question on the next family grant meeting agenda"
                - "Write the decision with a target year if spending down"
                - "Adjust the grant rate and pools to match the decision"
            - name: Grandparents matching the grandchildren's grants
              description: |-
                ## Purpose
                Grandparents can add a set amount to each grant a grandchild proposes from their own savings or allocation, which makes giving tangible for young people and keeps the older generation involved. Holding the matching pool inside the fund keeps the rules clear and every grant recorded. Retirees often find this the most enjoyable part of the fund.

                ## Milestones
                1. Matching rules agreed: ratio, yearly cap and eligible ages.
                2. A matching pool set aside in the fund.
                3. Each grandchild told the rules in words that suit their age.
                4. Matched grants recorded with the grandchild's name in the log.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written matching rule, a funded matching pool and a log of matched grants for each grandchild."
                cadence: cyclic
              tasks:
                - "Agree the match ratio, yearly cap and eligible ages"
                - "Set aside the matching pool in the fund"
                - "Explain the match to each grandchild"
                - "Top up the matching pool at the start of the year @recurring(yearly)"
            - name: Moving event tickets and sponsorships out of the fund
              description: |-
                ## Purpose
                Gala tables, golf days and building campaigns with naming rights are the most common reasons a fund grant gets rejected or later questioned. These are partly purchases, so in most places they are paid personally or by the business, with only the charitable part ever eligible. Sorting them out once makes the boundary between the fund and personal spending obvious to everyone.

                ## Milestones
                1. Event and sponsorship gifts from the gift map listed.
                2. Each one marked pay personally, pay from the business, or eligible for the fund.
                3. The family told which route each type of request takes.
                4. A standard reply written for charities asking the fund to cover a table.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every event or sponsorship gift assigned to personal, business or fund payment, with a standard reply for charities on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List event and sponsorship gifts from the three-year map"
                - "Mark each one personal, business or fund"
                - "Draft a standard reply for charities asking the fund to cover a table"
                - "Tell the family which route each kind of request takes"
            - name: Using the family's own investment adviser on the fund
              description: |-
                ## Purpose
                Above a set balance, many sponsors let the family's own investment adviser manage the fund's assets within the sponsor's rules. That can mean a familiar adviser and more choice, but it adds a fee layer and a second party to oversee. Weighing the option against the sponsor's own pools keeps the decision about cost and grant needs, not habit.

                ## Milestones
                1. The sponsor's minimum and rules for adviser-managed funds noted.
                2. The adviser's fee and proposed approach obtained in writing.
                3. Total cost compared with the sponsor's pools.
                4. A recorded decision, with a review date if adopted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of adviser-managed and sponsor-pool costs and a recorded decision with any review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the sponsor's minimum balance for adviser-managed funds"
                - "Ask the adviser for their fee and approach in writing"
                - "Compare total cost with the sponsor's own pools"
                - "Record the decision and a review date if adopted"
            - name: First family grant round with the children
              description: |-
                ## Purpose
                Children who help choose real grants for the first time remember it far longer than any talk about money. A single afternoon where each child researches one charity, presents it and the family agrees the grants makes the fund concrete. Keep the amounts real but modest, and let the children see the confirmation when it arrives.

                ## Milestones
                1. A date set and an amount set aside for the round.
                2. Each child given a short brief on what to bring.
                3. Each child presents one charity and the family discusses it.
                4. Grants submitted and confirmations shown to the children.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A family grant round held, with each child presenting a charity and at least one grant per child submitted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a date and set aside an amount for the round"
                - "Give each child a one-page brief on what to prepare"
                - "Hold the grant round and agree the grants"
                - "Show each child the sponsor's confirmation when it arrives"
            - name: Contributing shares ahead of a business sale
              description: |-
                ## Purpose
                Founders sometimes give shares in their company to a fund before a sale, so that the charitable portion is sold by the sponsor. The timing is delicate: if the sale is already effectively agreed, tax authorities may treat the founder as having sold first, and many sponsors need weeks to review private shares. Starting the conversation with the tax adviser, the deal lawyer and the sponsor early is the whole project.

                ## Milestones
                1. Tax adviser and deal lawyer asked whether a pre-sale gift is possible and by when.
                2. The sponsor's process and timeline for private shares confirmed.
                3. A share valuation arranged if the adviser says one is needed.
                4. Gift completed or the idea dropped, with the reasons recorded.

                ## Notes
                Raise this well before a letter of intent is signed. Once the sale is close to certain, it may be too late for the gift to work as intended.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written answer from the tax adviser and deal lawyer on a pre-sale gift, and either a completed gift with receipt or a recorded decision not to proceed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Raise a pre-sale gift with the tax adviser and deal lawyer"
                - "Ask the sponsor for its timeline to review private shares"
                - "Arrange a valuation if the adviser says one is needed"
                - "Record whether the gift went ahead and why"
            - name: Rapid grants after a disaster
              description: |-
                ## Purpose
                When a hurricane, flood or earthquake hits a place the family cares about, requests arrive within hours and decisions get made on emotion. Agreeing in advance an amount held for disasters, two or three trusted responders already checked for eligibility, and who can approve means the fund can grant within a day. The plan takes an hour now and saves a frantic week later.

                ## Milestones
                1. A disaster reserve agreed within the annual budget.
                2. Two or three pre-checked responders listed with their sponsor search entries.
                3. An emergency approval rule agreed, naming who can act alone.
                4. After any disaster, emergency grants reviewed at the next family meeting.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written disaster plan with a reserve, pre-checked responders and an emergency approval rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree the disaster reserve inside the annual budget"
                - "Pre-check two or three disaster responders in the sponsor tool"
                - "Agree who may approve emergency grants alone"
                - "Review any emergency grants at the next family meeting"
            - name: Milestone birthday or anniversary grants
              description: |-
                ## Purpose
                Milestones such as a grandparent's eightieth birthday, a golden wedding or a family business anniversary are natural moments to make grants in someone's honour. Planning the grants a few months ahead lets the family pick charities that meant something to the person and arrange how they are acknowledged. The letters that come back make a quiet, lasting gift on the day.

                ## Milestones
                1. The date and the honouree confirmed.
                2. Charities linked to the person's life chosen with the family.
                3. Grants submitted in honour of the person with the right acknowledgement.
                4. Letters from charities gathered for presentation on the day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Grants made in the honouree's name before the occasion, with charity letters gathered for the day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the occasion and whose honour the grants are in"
                - "Ask family members which charities mean most to the honouree"
                - "Submit grants in honour with the chosen acknowledgement"
                - "Collect the charity letters to present on the day"
            - name: In-memory grants after a death
              description: |-
                ## Purpose
                After a death, friends ask where to give and the family may want grants made in the person's memory. Depending on the sponsor, the fund can make in-memory grants from the family and sometimes receive gifts from others. Keeping it simple in a hard time means one person handles it with a short checklist.

                ## Milestones
                1. One family member chosen to handle memorial giving.
                2. Charities named for the notice or the service.
                3. In-memory grants submitted with the agreed wording.
                4. A list kept of who gave or was told, for thank-you notes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Memorial charities named, in-memory grants submitted and a list for thank-you notes kept."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one family member to handle memorial giving"
                - "Name the charities for the notice or service"
                - "Submit in-memory grants with the agreed wording"
                - "Keep a list of givers for thank-you notes"
            - name: Ten-year family giving report
              description: |-
                ## Purpose
                After a decade a fund has a story: what went in, which charities received the most, how the children's grants changed. Pulling it into a short report for the family marks the milestone and helps the next generation see what they are inheriting. It also shows, honestly, where the giving has drifted from the aims set at the start.

                ## Milestones
                1. Ten years of contributions and grants exported from the sponsor.
                2. Totals by charity and by family member calculated.
                3. A short report with a few stories from charities written.
                4. The report presented at a family gathering.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A ten-year giving report with totals and stories, presented at a family gathering."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export ten years of grants and contributions from the portal"
                - "Total grants by charity and by family member"
                - "Ask the agent to draft a short report from the totals and notes"
                - "Present the report at a family gathering"
            - name: Children's own yearly grant allocations
              description: |-
                ## Purpose
                Once children are around ten, a small yearly allocation they recommend themselves teaches more than watching parents do it. The amount matters less than the routine: research a charity, write a few lines about why, check eligibility with a parent, and see the grant arrive. Parents set the guard rails and then step back.

                ## Milestones
                1. A yearly allocation per child agreed by the parents.
                2. A simple form for children's proposals written.
                3. Each child's grant made and logged under their name.
                4. The allocation raised by a set rule as each child grows.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Each child of ten or over has a yearly allocation, a proposal form and at least one logged grant per year."
                cadence: cyclic
              tasks:
                - "Agree each child's yearly allocation"
                - "Write a five-question proposal form for children"
                - "Give each child their allocation for the year @recurring(yearly)"
                - "Log each child's grant under their name"
            - name: Naming the fund in a will or pension
              description: |-
                ## Purpose
                For retirees, the fund can be a simple home for a charitable bequest: name it as a beneficiary of a will, a retirement account or a life policy, and the successor advisers grant it out. Whether that is sensible depends on how each asset is taxed at death in your country, which the estate lawyer and tax adviser confirm. Done properly, it keeps the family's giving going after the donor has gone.

                ## Milestones
                1. Assets that could pass to the fund at death listed.
                2. Estate lawyer and tax adviser asked which assets suit a charitable gift.
                3. Beneficiary designations or will wording updated with the sponsor's details.
                4. The sponsor told of the planned gift and copies filed.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Beneficiary designations or will wording naming the fund in place, confirmed by the estate lawyer, with the sponsor informed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List assets that could pass to the fund on death"
                - "Ask the estate lawyer which assets suit a charitable bequest"
                - "Get the sponsor's exact legal name and details for beneficiary forms"
                - "File copies of the updated designations in the fund folder"
            - name: Successor advisers and what happens on death
              description: |-
                ## Purpose
                If no successor is named, many sponsors move a fund's balance into their general pool or a default charity when the last adviser dies. Naming successor advisers, or charities as final beneficiaries, and telling those people, keeps the family's say over the fund. It is a ten-minute form with decades of consequence.

                ## Milestones
                1. The sponsor's rules on successors read.
                2. Successor advisers or charities chosen in order.
                3. The successor form completed and confirmed by the sponsor.
                4. Named successors told and given the family rules sheet.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A sponsor-confirmed successor designation on file and each named successor told in person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the sponsor's rules on successor advisers"
                - "Choose successors in order, with a charity as the final fallback"
                - "Submit the successor form and file the sponsor's confirmation"
                - "Review successor advisers after any family change @recurring(yearly)"
            - name: Joint fund after separation or divorce
              description: |-
                ## Purpose
                A fund opened by a couple usually has two advisers with equal say, and a separation can freeze it. Sponsors often allow a fund to be split into two, but only with both advisers' agreement or a court order. Treating the fund as part of the separation discussions, with both lawyers aware that the assets belong to the sponsor, stops it becoming a bargaining chip.

                ## Milestones
                1. Both lawyers told the fund exists and that its assets belong to the sponsor.
                2. The sponsor's process for dividing a fund obtained.
                3. An agreement reached on splitting the fund or keeping it joint.
                4. New funds opened or roles updated, and successors renamed.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement on the fund's future signed by both advisers and put into effect with the sponsor."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell both lawyers the fund exists and who legally owns it"
                - "Ask the sponsor for its process to divide a joint fund"
                - "Agree to split or keep the fund and record it in writing"
                - "Rename successor advisers on each resulting fund"
            - name: Family members giving from different countries
              description: |-
                ## Purpose
                When children settle in other countries, a fund at home may give them no tax relief where they now live, and grants they suggest abroad may need extra checks. Some families keep one fund in the home country and help members abroad open their own with a local sponsor. Mapping who lives where and what each can use keeps generosity from becoming a tax problem.

                ## Milestones
                1. Each giving family member's country of tax residence listed.
                2. An adviser in each country asked whether the home fund helps that member.
                3. A route agreed per member: shared fund, local fund or direct gifts.
                4. Local funds opened where the plan calls for them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan per family member saying whether they give through the home fund, a local fund or directly, confirmed by advisers."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List each giving family member's country of tax residence"
                - "Ask an adviser in each country whether the home fund helps them"
                - "Agree a giving route for each member"
                - "Help members abroad open local funds where agreed"
            - name: When an older donor can no longer advise
              description: |-
                ## Purpose
                Dementia or a stroke can leave the main adviser unable to recommend grants, and a power of attorney may not cover a fund held by a charity. Agreeing now who steps in, and putting it on the sponsor's forms, keeps the fund active and protects the older donor from pressure. The conversation is easier while everyone is well.

                ## Milestones
                1. The sponsor asked how it treats powers of attorney and incapacity.
                2. A secondary adviser added now, while the donor can consent.
                3. The donor's wishes for the fund written in a letter.
                4. The plan shared with the estate lawyer and the named family members.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A secondary adviser added with the donor's consent and a letter of wishes for the fund filed with the estate lawyer."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the sponsor how it handles powers of attorney"
                - "Add a secondary adviser while the donor can consent"
                - "Help the donor write a letter of wishes for the fund"
                - "Share the plan with the estate lawyer and named family"
            - name: Running a fund alongside a family foundation
              description: |-
                ## Purpose
                Families with a private foundation often add a donor-advised fund for anonymous grants, small grants or gifts of assets the foundation handles poorly. Rules on grants between the two vary by country, and some combinations are restricted. Writing down which vehicle does what avoids duplication and paperwork mistakes.

                ## Milestones
                1. Jobs for each vehicle listed: anonymity, small grants, complex assets, staff-led programmes.
                2. Advisers asked about any rules on grants between foundation and fund.
                3. A one-page split of roles agreed by the foundation board and the fund advisers.
                4. The grant log marks which vehicle made each grant.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page division of roles between foundation and fund, reviewed by advisers, with the grant log marked by vehicle."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what the foundation does well and where it struggles"
                - "Ask advisers about any rules on grants between the two"
                - "Write a one-page split of roles between foundation and fund"
                - "Add a vehicle column to the grant log"
            - name: Gifts of property and other illiquid assets
              description: |-
                ## Purpose
                Real estate, private company shares, partnership interests and digital assets can be given to some funds, but sponsors review each one, may refuse, and usually sell quickly. Debt on a property, environmental issues or transfer restrictions in a shareholders' agreement can stop a gift outright. Preparing a complete file before approaching the sponsor shortens the review.

                ## Milestones
                1. The sponsor's acceptance policy for non-listed assets read.
                2. An asset file prepared with title, valuation, restrictions and debts.
                3. The tax adviser's view on the gift and any appraisal recorded.
                4. Gift accepted or declined, with the reasons noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A complete asset file submitted to the sponsor and a recorded acceptance or refusal with reasons."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the sponsor's acceptance policy for non-listed assets"
                - "Gather title, valuation, debts and transfer restrictions in one file"
                - "Ask the tax adviser whether an appraisal is required"
                - "Record the sponsor's decision and its reasons"
            - name: International grants through the fund
              description: |-
                ## Purpose
                Many families want to support charities abroad, including in the Caribbean, and not every sponsor will do it. Those that do run extra checks, such as equivalency reviews or routing through an intermediary charity, which take time and may cost a fee. Knowing the sponsor's route and lead times before promising support avoids disappointing a partner.

                ## Milestones
                1. The sponsor's international grant policy, fees and timelines noted.
                2. Charities abroad the family supports listed.
                3. Each one checked for an intermediary or an approved route.
                4. A first international grant completed and its timeline logged.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The sponsor's international route documented and at least one international grant completed with its timeline recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the sponsor's international grant policy and fees"
                - "List the charities abroad the family wants to support"
                - "Check whether each has a recognised intermediary"
                - "Log the timeline of the first international grant"
            - name: Impact options inside the fund
              description: |-
                ## Purpose
                Some sponsors offer impact or values-aligned pools, and a few allow recoverable grants or loans to charities from fund assets. For families who want the money waiting to be granted to match their giving, these options are worth understanding, with the investment adviser judging risk and fit. The aim is to know what exists, not to pick investments.

                ## Milestones
                1. The sponsor's impact pools and programmes listed.
                2. Each option's objective, cost and liquidity noted.
                3. The investment adviser's view on fit recorded.
                4. A decision on whether to use any of them written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of the sponsor's impact options with costs, the investment adviser's view and a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the impact pools and programmes the sponsor offers"
                - "Note each option's objective, cost and liquidity"
                - "Ask the investment adviser for a view on fit"
                - "Write down whether the fund will use any of them"
---

# Donor-Advised Funds

A donor-advised fund is an account held by a sponsoring charity: the family gives assets in, the sponsor owns them, and the family recommends grants out to charities over time. This area runs it the way an organised family would, starting with the foundations of deciding whether a fund fits, choosing a sponsor, opening it with the right roles and making the first contribution; then the operating rhythm of grant workflow, reconciliations, receipts and family grant meetings; the rules and skills everyone who proposes grants needs; decisions such as bunching, sub-funds and grant pace; dated occasions from a first grant round with the children to a ten-year report; situations for parents and retirees, including successors, incapacity and bequests; and finally specialist work such as illiquid assets, international grants and a fund alongside a foundation.

What repeats is a monthly look at pending recommendations, scheduled grants, receipts, charity letters and the sponsor statement, a quarterly family grant meeting with a budget check and branch statements, and a yearly round of cut-off dates, pool review, fund review, grant pace, successor and access checks, and children's allocations. The Vendor, Compliance control, Meeting notes and Metrics log templates pair with sponsor selection, the receipt log, the grant meeting and the grant pace record. Nothing here is tax, legal or investment advice: every contribution, bequest and cross-border question should be agreed with the family's tax adviser and lawyer in each country where a donor lives. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
