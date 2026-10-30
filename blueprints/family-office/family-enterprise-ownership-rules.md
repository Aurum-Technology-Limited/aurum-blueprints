---
id: family-office.family-enterprise-ownership-rules
name: Family Enterprise Ownership Rules
description: "Written rules for owning shares in the family business: an accurate register, who may hold shares, transfer and pre-emption rules, a dividend policy, fair exit routes for members who want out, and voting."
category: personal
version: 1.0.0
tags: [family-office, family-enterprise-ownership-rules, parent, founder, shareholders-agreement, dividend-policy, share-transfers, family-enterprise]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - board-meeting
    - metrics-log
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Enterprise Ownership Rules
          description: "Setting rules for owning shares in family businesses: who may hold shares, transfers, dividend policy, liquidity for members who want out and voting."
          projects:
            - name: Family shareholder register and cap table
              description: |-
                ## Purpose
                Many family companies cannot say with confidence who owns what: a share gift in 1998 was never stamped, an uncle's shares passed through an estate nobody finished, a trust holds a block nobody remembers. A clean register and capitalisation table, reconciled to the statutory register and the share certificates, is the ground every other ownership rule stands on.

                ## Milestones
                1. Every shareholder listed with share class, number of shares and percentage held.
                2. Shares held through trusts, nominees or holding companies traced to the people behind them.
                3. The table reconciled to the company's statutory register and issued certificates.
                4. Gaps such as unregistered transfers or lost certificates listed with a fix for each.
                5. The reconciled table signed off by the company secretary or lawyer.

                ## Notes
                Fix the register before drafting any rule. A rule about who may hold shares is useless if the family cannot agree who holds them today.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capitalisation table reconciled to the statutory register, with every discrepancy listed and a named person fixing each one."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the company secretary for a copy of the current statutory share register"
                - "Build a table of every holder, class, share count and percentage"
                - "Trace each trust, nominee and company holding to the people behind it"
                - "List every gap between the table, the register and the certificates"
                - "Have the company secretary or lawyer sign off the reconciled table"
            - name: Inventory of articles and existing shareholder agreements
              description: |-
                ## Purpose
                Ownership rules already exist, scattered across the articles of association, an old shareholders' agreement, trust deeds and side letters a grandparent signed. Gathering them in one place and summarising what each says about transfers, dividends and votes shows which rules are already binding and where they contradict each other.

                ## Milestones
                1. Current articles of association and every amendment located for each family company.
                2. All shareholders' agreements, side letters and option agreements gathered.
                3. Trust deeds and wills that restrict what happens to shares noted.
                4. A one-page summary of current rules on transfers, dividends, voting and exits.
                5. Conflicts between documents flagged for the lawyer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of every binding document that touches family shares, with conflicts between them listed for legal review."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request the current articles and amendments from the company registry or secretary"
                - "Gather every shareholders' agreement, side letter and option deed in one folder"
                - "Ask the agent to summarise each document's transfer, dividend and voting clauses"
                - "Mark every clause where two documents disagree"
                - "Send the summary and conflict list to the family's lawyer"
            - name: Ownership goals conversation among current shareholders
              description: |-
                ## Purpose
                Owners often want different things from the same shares: one sibling wants growth and reinvestment, another needs income, a third would quietly like to sell. Asking every current shareholder the same questions about control, income, legacy and exit before any rule is drafted stops the rules being written for whoever talks loudest.

                ## Milestones
                1. The same five questions put privately to every adult shareholder.
                2. Each owner's priorities for control, income, growth and exit recorded.
                3. Themes summarised without attributing views to named people.
                4. Two or three ownership goals the family broadly shares written down.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary of ownership goals drawn from every adult shareholder, with at least two shared goals agreed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft five questions on control, income, growth, legacy and exit"
                - "Book a private conversation with each adult shareholder"
                - "Record each owner's answers in the same format"
                - "Write an anonymous summary of themes and shared goals"
            - name: Deciding who is eligible to hold family shares
              description: |-
                ## Purpose
                The single most consequential ownership rule is who may hold shares at all: lineal descendants only, spouses, adopted and step-children, trusts for their benefit, or anyone the board approves. Settling eligibility early, with the lawyer, decides what happens to shares in every later transfer, gift, death and divorce.

                ## Milestones
                1. Options listed: lineal descendants, spouses, step and adopted children, trusts, employees.
                2. Each option tested against three real family situations.
                3. An eligibility rule agreed in principle by the current shareholders.
                4. The rule passed to the lawyer for drafting into the articles or agreement.

                ## Notes
                Decide how adopted children and step-children are treated explicitly. Silence on this is the most common cause of later disputes.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written eligibility rule naming which people and vehicles may hold shares, agreed by current owners and sent to the lawyer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every category of person or vehicle that might ever hold shares"
                - "Test each category against three real or likely family situations"
                - "Hold a shareholder meeting to agree an eligibility rule in principle"
                - "Send the agreed rule to the lawyer for drafting"
            - name: Ownership chart across family companies and trusts
              description: |-
                ## Purpose
                Where the family owns several businesses, property companies and trusts, ownership rules have to work at every level, not only in the operating company. A single chart showing who owns which percentage of each entity, directly or through a vehicle, makes it obvious where a rule written for one company would be bypassed through another.

                ## Milestones
                1. Every family company and trust that holds shares drawn on one chart.
                2. Percentages shown on each line, with share class where it matters.
                3. Indirect interests calculated for each family member.
                4. The chart dated and stored with the register.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated ownership chart showing direct and indirect percentages for every family member across all family entities."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every company and trust that holds shares in a family business"
                - "Draw the chart with percentages on each ownership line"
                - "Calculate each member's indirect percentage in the operating company"
                - "Date the chart and file it beside the shareholder register"
            - name: Share classes and rights audit
              description: |-
                ## Purpose
                Ordinary, preference, A and B shares often carry rights nobody now remembers: a preference dividend that has quietly accrued for years, or a class with a veto over a sale. Listing the exact rights attached to every class before redesigning anything avoids promising owners something the articles do not allow.

                ## Milestones
                1. Every share class listed with its voting, dividend and capital rights.
                2. Any accrued or unpaid preferential dividends identified.
                3. Class vetoes and consent rights noted.
                4. The audit checked against the articles by the lawyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of rights for every share class, including any accrued preference dividends, confirmed by the lawyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every share class in issue across the family companies"
                - "Note the voting, dividend and capital rights of each class from the articles"
                - "Ask the finance director whether any preference dividends have accrued unpaid"
                - "Ask the lawyer to confirm the table"
            - name: Choosing a lawyer for the family shareholders' agreement
              description: |-
                ## Purpose
                Family shareholders' agreements are not venture capital term sheets: they need a lawyer who has drafted family pre-emption, eligibility and liquidity clauses before and who understands how trusts and wills interact with share transfers. Comparing two or three firms on that experience, their conflict position and a fixed fee avoids a template that fits nobody.

                ## Milestones
                1. Three firms with family business experience identified through peers or advisers.
                2. Each asked the same questions about family agreements drafted and conflicts.
                3. Fee quotes or caps compared for the full drafting.
                4. One firm engaged with a written scope, and the company, not one branch, as client.

                ## Notes
                Start from the **Vendor** template. Be clear who the client is: a lawyer acting for the founder alone cannot also advise each branch.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lawyer engaged under a written scope and fee estimate, with the client relationship and any conflicts recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask two peer families or advisers for lawyers who draft family agreements"
                - "Send each firm the same five questions about experience and conflicts"
                - "Compare fee estimates and caps side by side"
                - "Sign an engagement letter naming the client and scope"
            - name: Ownership rules working group and mandate
              description: |-
                ## Purpose
                Rules drafted by the founder and the lawyer alone tend to be rejected by the branches that were not in the room. A small working group with one member per branch, a written mandate and a fixed timetable produces drafts the wider family has already shaped.

                ## Milestones
                1. One member per branch named, with a chair agreed.
                2. A mandate written: scope, deadline, what the group decides and what it only proposes.
                3. A monthly meeting schedule set for the drafting period.
                4. The mandate shared with all current shareholders.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working group with one member per branch, operating under a written mandate shared with every shareholder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each branch to nominate one member for the working group"
                - "Write a one-page mandate covering scope, deadline and authority"
                - "Hold the monthly working group drafting session @recurring(monthly:8)"
                - "Send the mandate and member list to every shareholder"
            - name: Annual general meeting of family shareholders
              description: |-
                ## Purpose
                The annual meeting is often a formality signed in a lawyer's office, yet it is the one forum where every owner can question the board on results, dividends and strategy. Running it properly each year, with papers in advance and real questions answered, builds the trust that keeps owners from wanting to sell.

                ## Milestones
                1. Notice and papers sent to every shareholder within the period the articles require.
                2. Accounts, dividend proposal and board elections presented.
                3. Owners' questions taken and answered, with follow-ups noted.
                4. Minutes and resolutions filed and circulated.

                ## Notes
                Start from the **Board meeting** template. Keep a family-only session after the formal business so owners can raise topics the non-family directors do not need to hear.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An annual shareholder meeting held each year with papers sent on time, questions answered and minutes circulated."
                cadence: cyclic
              tasks:
                - "Check the notice period and quorum rules in the articles"
                - "Prepare and send the annual meeting papers to every shareholder @recurring(yearly)"
                - "Collect owners' written questions two weeks before the meeting"
                - "Circulate minutes and follow-up actions within a fortnight"
            - name: Quarterly shareholder register check
              description: |-
                ## Purpose
                Registers drift: an address changes, a trust's trustees change, a share transfer is approved but never entered. A short quarterly check against board minutes and transfer approvals keeps the register right, so notices reach every owner and votes are counted correctly.

                ## Milestones
                1. Register checked against every transfer approved since the last check.
                2. Contact details confirmed for each registered holder.
                3. Changes of trustee or nominee updated.
                4. Any filings due with the company registry made on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly register check logged four times a year, with every approved transfer entered and filings made on time."
                cadence: rolling
              tasks:
                - "Compare the register with board approvals of transfers @recurring(quarterly)"
                - "Email each holder to confirm their registered address once a year"
                - "Update trustee and nominee names after any change"
                - "Note any registry filing due and who will make it"
            - name: Annual internal share valuation
              description: |-
                ## Purpose
                Every gift, buy-back, estate and liquidity window needs a price, and without an agreed annual value each one becomes an argument. An independent valuation each year, on a method fixed in advance, gives owners a number they can plan around and removes the suspicion that the price is set to suit whoever is buying.

                ## Milestones
                1. The valuation method and any discounts fixed in the agreement or policy.
                2. An independent valuer instructed on the same basis each year.
                3. The value per share for each class reported to all shareholders.
                4. The report filed with the board minutes and the register.

                ## Notes
                Agree whether minority and marketability discounts apply to internal transfers before the first valuation, not after a buyer and seller already disagree.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An independent per-share value for each class issued once a year on the agreed method and shared with every shareholder."
                cadence: cyclic
              tasks:
                - "Write down the agreed valuation method and discount rules"
                - "Instruct the independent valuer after the year-end accounts close @recurring(yearly)"
                - "Send the per-share value for each class to every shareholder"
                - "File the valuation report with the board minutes"
            - name: Dividend declaration cycle
              description: |-
                ## Purpose
                Once a dividend policy exists, it has to be applied the same way every year, or owners will read every change as favouritism or a signal of trouble. A fixed cycle, from the board's review of cash and reinvestment needs to the declaration and the explanation sent to owners, makes dividends predictable.

                ## Milestones
                1. The board reviews cash, debt and investment plans against the policy each year.
                2. Interim dividends considered at the agreed points in the year.
                3. The declared dividend explained to owners against the policy.
                4. Any departure from the policy recorded with the reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's dividend is declared through the board against the written policy, with any departure explained to owners in writing."
                cadence: cyclic
              tasks:
                - "Ask the finance director for the cash and reinvestment forecast @recurring(yearly)"
                - "Review whether an interim dividend fits the policy @recurring(quarterly)"
                - "Send owners a short note explaining the declared dividend"
                - "Record any departure from policy and the reason in the minutes"
            - name: Quarterly owner letter from the board
              description: |-
                ## Purpose
                Owners who do not work in the business hear about it at the dinner table, often from relatives who do, and rumour fills the gap. A plain quarterly letter from the chair on results, cash, major decisions and the dividend outlook gives every shareholder the same information at the same time.

                ## Milestones
                1. A standard letter structure agreed with the board.
                2. Letters sent to every shareholder each quarter.
                3. Owners' replies and questions logged and answered.
                4. Confidentiality expectations stated in each letter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four owner letters a year sent to every shareholder, with questions answered within a month of each letter."
                cadence: rolling
              tasks:
                - "Agree a one-page letter structure with the chair"
                - "Draft and send the quarterly owner letter @recurring(quarterly)"
                - "Log questions owners send back and who will answer them"
                - "State in each letter what may and may not be shared outside the family"
            - name: Share transfer request procedure
              description: |-
                ## Purpose
                Requests arrive in every form: a brother asks to gift shares to his new wife, a cousin wants to sell to another branch, a trustee wants to distribute shares to beneficiaries. A written procedure for receiving, checking and deciding transfer requests, with a timetable, means each request is handled the same way and checked against the eligibility and pre-emption rules.

                ## Milestones
                1. A transfer request form and checklist written.
                2. Each request checked against eligibility, pre-emption and permitted transfer rules.
                3. Board or shareholder approval obtained where the rules require it.
                4. Approved transfers stamped where required, registered and certificates issued.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every transfer request is logged, checked against the written rules and decided within the agreed timetable."
                cadence: rolling
              tasks:
                - "Write a one-page transfer request form and checklist"
                - "Review open transfer requests and their deadlines @recurring(monthly:12)"
                - "Check each request against eligibility and pre-emption rules"
                - "Confirm the register and certificates are updated after approval"
            - name: Annual ownership rules compliance check
              description: |-
                ## Purpose
                Rules decay quietly: a share gift skips the pre-emption offer, a new trust holds shares without signing a deed of adherence, the dividend policy is ignored in a good year. An annual check of the year's events against each rule catches breaches while they are still easy to correct.

                ## Milestones
                1. Every transfer, issue and buy-back of the year listed.
                2. Each checked against the agreement and articles.
                3. New holders confirmed as having signed a deed of adherence.
                4. Breaches reported to the board with a correction plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly compliance note listing the year's share events, any breaches found and how each was corrected."
                cadence: cyclic
              tasks:
                - "List every share event of the past year @recurring(yearly)"
                - "Check each event against the agreement and articles"
                - "Confirm every new holder has signed a deed of adherence"
                - "Report breaches and fixes to the board"
            - name: Dividend and distribution history log
              description: |-
                ## Purpose
                Ten years on, nobody can say what was paid per share in which year, which makes it impossible to test whether the policy is working or whether one branch was favoured through loans or special payments. A simple running log of every dividend and distribution, per class and per share, answers those questions in minutes.

                ## Milestones
                1. Past ten years of dividends per share entered by class.
                2. Special distributions and buy-backs added.
                3. Payout as a share of profit calculated each year.
                4. The log updated after every declaration.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A log of dividends per share and payout ratio for at least the past ten years, updated after every declaration."
                cadence: rolling
              tasks:
                - "Ask the finance team for dividends paid per share over ten years"
                - "Enter special distributions and buy-backs in the same log"
                - "Update the log after each declaration @recurring(quarterly)"
                - "Calculate the yearly payout as a share of profit"
            - name: Liquidity pool for exiting shareholders
              description: |-
                ## Purpose
                A promise that members can sell is worthless if the company or the family has no cash to buy when they ask. Building and watching a reserve, from retained profit, a sinking fund or an agreed credit line, keeps the exit route credible without stripping the business in a single year.

                ## Milestones
                1. A target size for the liquidity pool agreed with the board.
                2. The funding source chosen and documented.
                3. The pool balance reported to owners each quarter.
                4. The target revisited after each valuation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A liquidity pool with a written target and funding source, reported to owners every quarter."
                cadence: rolling
              tasks:
                - "Ask the finance director what reserve the business can sustain"
                - "Report the pool balance against target @recurring(quarterly)"
                - "Revisit the target after the annual valuation @recurring(yearly)"
                - "Document the funding source in the board minutes"
            - name: Owners' forum between shareholder meetings
              description: |-
                ## Purpose
                Shareholders who meet only at the annual meeting have no place to talk about ownership questions that are not board business: a future liquidity window, a proposed rule change, a branch's worries. A short owners' forum each quarter, separate from the board and the wider family council, gives owners that place.

                ## Milestones
                1. Terms for the forum written: who attends, what it can and cannot decide.
                2. A quarterly meeting held with an agenda sent in advance.
                3. Recommendations to the board recorded and tracked.
                4. Attendance and topics reviewed after a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An owners' forum meeting each quarter under written terms, with recommendations to the board tracked to an answer."
                cadence: rolling
              tasks:
                - "Write half a page of terms for the owners' forum"
                - "Hold the owners' forum with a circulated agenda @recurring(quarterly)"
                - "Track each recommendation to the board until it is answered"
                - "Review attendance and topics after the fourth meeting"
            - name: Reading the family company accounts as an owner
              description: |-
                ## Purpose
                Anyone who cannot read a balance sheet cannot judge a dividend proposal or a valuation, and ends up trusting or distrusting the board on instinct. Learning to read the income statement, balance sheet and cash flow of your own company, with the finance director walking through them, makes every owner conversation sharper.

                ## Milestones
                1. The three statements of the last annual accounts read with notes.
                2. A session with the finance director to answer the questions raised.
                3. Five owner ratios understood: margin, cash conversion, debt, return on capital, payout.
                4. Management accounts read each month for three months.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An owner who can explain the company's margin, cash position, debt and payout from the latest accounts to another shareholder."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the latest annual accounts and write down every question"
                - "Book an hour with the finance director to go through the questions"
                - "Read the monthly management accounts when they are issued @recurring(monthly:25)"
                - "Explain the five owner ratios to another shareholder"
            - name: How valuation discounts work for family shares
              description: |-
                ## Purpose
                Few 10 percent holdings in a private family company are worth 10 percent of the whole business, because minority and marketability discounts apply, and the size of those discounts is where internal buy-outs get bitter. Understanding how valuers think about control, minority stakes and lack of a market lets owners agree the rules calmly, in advance.

                ## Milestones
                1. The difference between enterprise value, equity value and value per share understood.
                2. Minority and marketability discounts explained with an example from your own company.
                3. Two valuation methods compared on last year's numbers.
                4. Questions for the valuer written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note in your own words on how discounts would change the value of a typical family holding, reviewed by the valuer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a plain guide to private company share valuation"
                - "Work through a discount example using your company's last valuation"
                - "Write a one-page note on control, minority and marketability"
                - "Ask the valuer to correct the note"
            - name: Pre-emption, tag-along and drag-along clauses explained
              description: |-
                ## Purpose
                These three clauses decide who gets first refusal when shares are sold, whether minority owners can join a sale on the same terms, and whether a majority can force everyone to sell. Owners who understand them before the drafting starts ask better questions and are less likely to sign something that surprises them in a sale.

                ## Milestones
                1. Each clause explained in a sentence of plain language.
                2. The way each works in your current documents identified.
                3. A worked example of each run on your actual shareholdings.
                4. Questions for the lawyer recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example of pre-emption, tag-along and drag-along on the family's actual shareholdings, checked by the lawyer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-sentence definition of each clause"
                - "Find where each appears, or is missing, in current documents"
                - "Run each clause on the real shareholdings as a worked example"
                - "Send your questions to the lawyer before drafting starts"
            - name: Shareholder rights compared with director duties
              description: |-
                ## Purpose
                Family members who are both shareholders and directors often blur the two: voting as an owner on something they should decide as a director, or expecting board papers simply because they own shares. Learning what shareholders may decide, what directors owe the company, and where the line falls in your articles prevents a lot of unnecessary friction.

                ## Milestones
                1. The decisions reserved to shareholders in your articles listed.
                2. Directors' core duties to the company summarised in plain terms.
                3. Family members who hold both roles identified.
                4. A short guide for dual-role members agreed with the lawyer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide for family members who are both shareholders and directors, approved by the lawyer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the decisions your articles reserve to shareholders"
                - "Summarise directors' duties from a reputable governance guide"
                - "Identify every family member holding both roles"
                - "Draft a short dual-role guide for the lawyer to review"
            - name: Dividend policy models for family companies
              description: |-
                ## Purpose
                Families usually choose between a fixed payout ratio, a stable and gently rising dividend, a residual model that pays what is left after investment, or a mix. Comparing how each would have paid out over your company's last ten years shows owners what each choice feels like in a bad year as well as a good one.

                ## Milestones
                1. Four dividend models described in plain terms.
                2. Each modelled against the company's last ten years of profit and cash.
                3. Effects on reinvestment and debt noted for each.
                4. A preferred model recommended to the working group.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of four dividend models run on ten years of the company's figures, with a recommended model sent to the working group."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Describe the four common dividend models in a page"
                - "Ask finance for ten years of profit, cash flow and capital spending"
                - "Model what each approach would have paid each year"
                - "Recommend one model to the working group with the reasons"
            - name: Case studies of families that lost control through share sales
              description: |-
                ## Purpose
                Well-known family businesses have passed to outsiders because one branch sold to a competitor, a pre-emption clause had a gap, or an estate had to sell shares to pay tax. Reading four or five such cases, and checking whether your own rules have the same gap, is cheaper than learning the lesson first-hand.

                ## Milestones
                1. Four published cases of family firms that lost or nearly lost control read.
                2. The ownership rule that failed identified in each.
                3. Each failure checked against your current documents.
                4. Gaps passed to the working group.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note on four cases, each naming the failed rule and whether the family's own documents share the gap."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose four published case studies of family control lost through share sales"
                - "Name the ownership rule that failed in each case"
                - "Check whether your current documents have the same gap"
                - "Send the gaps found to the working group"
            - name: Responsible ownership session for new shareholders
              description: |-
                ## Purpose
                Children who receive shares at 18 or 25 inherit rights and duties nobody has explained: what they may vote on, what they may say outside the family, what the dividend policy is and how they could sell. A short session before or at the point of the first share gift turns a passive recipient into an informed owner.

                ## Milestones
                1. A one-hour session outline covering rights, rules, confidentiality and exits.
                2. The ownership rules summarised in a short owner's handbook.
                3. Each new shareholder taken through the session.
                4. Questions from new owners collected for the next revision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Every new shareholder has attended the session and received the owner's handbook before or at their first transfer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Outline a one-hour session on owner rights, rules and exits"
                - "Draft a short owner's handbook summarising the rules"
                - "Run the session with each new shareholder"
                - "Collect their questions for the next handbook revision"
            - name: Writing the family dividend policy
              description: |-
                ## Purpose
                Without a written policy, dividends become a negotiation between owners who need income and family executives who want to reinvest, and every year reopens it. A policy setting the target payout, the floor in a bad year, reinvestment priorities and who decides, drafted with the board and agreed by owners, ends the annual argument.

                ## Milestones
                1. A target payout and a minimum stated in the policy.
                2. Conditions that allow the board to depart from the policy listed.
                3. Debt and reinvestment priorities ranked against dividends.
                4. The policy approved by the board and agreed by shareholders.
                5. A review date set.

                ## Notes
                The policy guides the board; it cannot override directors' duty to keep the company solvent. Ask the lawyer how it should sit alongside the articles.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written dividend policy with target, floor and departure conditions, approved by the board and agreed by shareholders."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draft target payout, floor and departure conditions in two pages"
                - "Review the draft with the finance director and board chair"
                - "Present the draft to shareholders and collect objections"
                - "Have the board approve the final policy and set a review date"
            - name: Transfer restrictions and pre-emption rights design
              description: |-
                ## Purpose
                Transfer rules keep shares inside the family: who must be offered shares first, in what order, at what price and how long they have to decide. Designing them deliberately, with branch-first or company-first offers and a clear timetable, prevents both leakage to outsiders and owners being trapped forever.

                ## Milestones
                1. The order of offers agreed: own branch, other branches, the company, then outsiders if ever.
                2. Price basis and acceptance period for each stage set.
                3. Board consent rules for any transfer written.
                4. Draft clauses prepared by the lawyer.
                5. A worked example run on a real holding.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Draft pre-emption and transfer clauses, prepared by the lawyer, with a worked example on a real holding agreed by the working group."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Decide the order in which shares must be offered"
                - "Set the price basis and acceptance period for each stage"
                - "Ask the lawyer to draft the clauses"
                - "Run the draft on one real holding and record the outcome"
            - name: Permitted transfers list
              description: |-
                ## Purpose
                Some transfers should not trigger pre-emption at all: a parent gifting to a child, an owner moving shares into a family trust, a trust distributing to a beneficiary. Listing these permitted transfers clearly lets estate planning happen without a family vote each time, while closing doors to spouses or outsiders where the eligibility rule says so.

                ## Milestones
                1. Every routine transfer the family expects listed.
                2. Each tested against the eligibility rule.
                3. Conditions attached, such as shares returning if a trust ends.
                4. The list drafted into the agreement by the lawyer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of permitted transfers with conditions, consistent with the eligibility rule and drafted into the agreement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the routine transfers the family expects over twenty years"
                - "Test each against the eligibility rule"
                - "Add conditions such as shares returning when a trust ends"
                - "Send the list to the lawyer for drafting"
            - name: Voting and non-voting share classes decision
              description: |-
                ## Purpose
                Splitting voting and economic rights lets a family give every descendant a fair share of value while keeping control with those active in the business or in a voting trust. It is also a decision that can feel like disinheritance to branches left with non-voting shares, so it needs to be weighed openly, with tax advice, before any recapitalisation.

                ## Milestones
                1. Options compared: one class, voting and non-voting, or a voting trust.
                2. Tax and legal effects of a recapitalisation obtained from advisers.
                3. Each branch's view heard on fairness of control.
                4. A decision recorded with the reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on share classes, with advisers' tax and legal notes attached and each branch's view noted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page comparison of three class structures"
                - "Ask the tax adviser for the effects of a recapitalisation"
                - "Hear each branch's view on control and fairness"
                - "Record the decision and the reasons in the minutes"
            - name: Exit routes for members who want out
              description: |-
                ## Purpose
                Owners who cannot leave become resentful owners, and resentful owners eventually force a sale. A designed set of exit routes, such as periodic redemption windows, a capped annual buy-back and sale to other branches, with notice periods and payment over time, lets members leave without threatening the business.

                ## Milestones
                1. Exit routes chosen: redemption window, buy-back, internal sale.
                2. Notice periods and caps on yearly buy-backs set.
                3. Payment terms, such as instalments over several years, agreed.
                4. The routes tested against the liquidity pool and cash forecast.
                5. Draft clauses prepared by the lawyer.

                ## Notes
                A cap on how much can be bought back each year protects the business; instalment terms protect the buyer. Both need tax advice before they are fixed.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written exit routes with notice periods, yearly caps and payment terms, tested against the cash forecast and drafted by the lawyer."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List the exit routes the family will consider"
                - "Set notice periods and a yearly buy-back cap with the finance director"
                - "Test the routes against the liquidity pool and five-year cash forecast"
                - "Ask the lawyer and tax adviser to review the draft terms"
            - name: Valuation formula for internal buy-outs
              description: |-
                ## Purpose
                Whether an exiting owner is paid the annual valuation, a formula on earnings, or a price set by a valuer at the time decides what leaving is worth. Fixing the formula, including discounts and how disputes over price are settled, before anyone wants to leave avoids the most common family ownership fight.

                ## Milestones
                1. Three price bases compared: annual value, earnings formula, valuer at the time.
                2. The treatment of minority discounts on internal sales decided.
                3. A price dispute mechanism, such as a second valuer, chosen.
                4. The formula recorded and drafted into the agreement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed price formula for internal buy-outs, with discount treatment and a dispute mechanism written into the agreement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare three price bases using last year's figures"
                - "Decide whether minority discounts apply on internal sales"
                - "Choose a mechanism for disputed prices"
                - "Send the agreed formula to the lawyer"
            - name: Choosing an independent share valuer
              description: |-
                ## Purpose
                Distrust follows any valuer appointed by the founder, or the company's own auditor, the moment an exiting cousin sees the number. Selecting a valuer independent of every branch, with private company and family business experience, and fixing the engagement terms for several years makes the annual figure credible.

                ## Milestones
                1. Three valuers with private company experience identified.
                2. Independence from each branch and from the auditor confirmed.
                3. Fees and a multi-year engagement compared.
                4. One valuer appointed with the method written into the engagement.

                ## Notes
                Start from the **Vendor** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An independent valuer appointed under a multi-year engagement letter that sets out the agreed method."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the lawyer and accountant for three independent valuers"
                - "Confirm each has no tie to any branch or the auditor"
                - "Compare fees and terms for a three-year engagement"
                - "Appoint one valuer with the method written into the letter"
            - name: Reserved matters needing shareholder approval
              description: |-
                ## Purpose
                Some decisions are too big to leave to the board alone: selling the business, issuing new shares, taking on large debt, changing the dividend policy. A list of reserved matters, each with the vote required, protects minority branches without tying the board's hands on everyday management.

                ## Milestones
                1. Candidate reserved matters listed from the agreement and peer examples.
                2. Each given a threshold such as majority, 75 percent or unanimity.
                3. The board's view on workable thresholds heard.
                4. The final list drafted by the lawyer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reserved matters schedule with a voting threshold for each item, accepted by the board and drafted by the lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List decisions the family thinks should need an owner vote"
                - "Give each a voting threshold"
                - "Ask the board which thresholds would block normal management"
                - "Send the agreed schedule to the lawyer"
            - name: Insurance-funded buy-sell arrangement
              description: |-
                ## Purpose
                When an owner dies, their estate may need cash for tax while the family wants the shares back; without funding, both lose. Life cover owned by the company or the other shareholders, tied to a buy-sell agreement, is one way families fund this, and its cost and structure need comparing with advisers.

                ## Milestones
                1. Owners whose death would force a sale identified.
                2. Funding options compared: company-owned cover, cross-option cover, reserves.
                3. Quotes and tax treatment obtained from the broker and adviser.
                4. A decision recorded and cover reviewed each year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on funding buy-outs at death, with cover in place or a reserve funded, and a yearly review set."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the owners whose death would force a share sale"
                - "Ask the broker for quotes on company-owned and cross-option cover"
                - "Ask the tax adviser how each structure is treated"
                - "Review cover amounts against the latest valuation @recurring(yearly)"
            - name: Shareholder deadlock clause
              description: |-
                ## Purpose
                In a company split 50:50 between two branches, or with a reserved matter needing unanimity, a single disagreement can stop the business. A deadlock clause, setting out escalation, a cooling-off period, an independent chair's casting vote or a buy-sell trigger, decides in advance what happens when owners cannot agree.

                ## Milestones
                1. Points where deadlock is possible identified from the share split and reserved matters.
                2. Deadlock mechanisms compared: escalation, casting vote, buy-sell trigger.
                3. A mechanism chosen that the smaller branch also accepts.
                4. The clause drafted by the lawyer.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A deadlock clause chosen by the shareholders and drafted by the lawyer, covering every reserved matter where deadlock is possible."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark where the share split or thresholds could cause deadlock"
                - "Compare three deadlock mechanisms in a page"
                - "Agree a mechanism with every branch"
                - "Send the choice to the lawyer for drafting"
            - name: Rules on pledging family shares as loan security
              description: |-
                ## Purpose
                Banks lending to a family member for a house or a venture will often ask for their family shares as security, and a default could hand those shares to the bank or a buyer outside the family. Deciding whether pledges are allowed at all, and if so with board consent and a family right to buy before enforcement, closes a quiet route by which shares leave the family.

                ## Milestones
                1. Existing pledges or charges over family shares identified.
                2. Options compared: ban, board consent, or consent with a family right to buy first.
                3. A rule agreed by the shareholders.
                4. The rule drafted into the agreement by the lawyer.

                ## Notes
                Members who need to borrow against family wealth may be better served by the family's own lending arrangements than by pledging shares to an outside lender.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule on pledging family shares, agreed by shareholders and drafted into the agreement, with any existing pledges listed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each shareholder whether their shares are pledged or charged"
                - "Compare a ban, board consent and a family right to buy first"
                - "Agree the rule at a shareholder meeting"
                - "Send the agreed rule to the lawyer for drafting"
            - name: Signing the family shareholders' agreement
              description: |-
                ## Purpose
                Months of drafting end in a signing that every current shareholder, including trustees for trust holdings, must complete, often across several countries. Planning the signing as an event, with final drafts sent early, independent advice offered and a moment to mark it, gets every signature and a family that feels it chose the rules.

                ## Milestones
                1. Final draft sent to every shareholder with time for independent advice.
                2. Signatures and trustee approvals collected, including remote signers.
                3. Articles amended to match where needed and filed.
                4. Signed copies stored and a summary sent to every owner.

                ## Notes
                Encourage each branch to take its own independent legal advice before signing. It costs a little and makes the agreement much harder to challenge later.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shareholders' agreement signed by every current holder and trustee, with matching articles filed and a summary sent to all owners."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Send the final draft with a deadline for independent advice"
                - "Arrange signing for owners abroad and trustees"
                - "File any matching amendment to the articles"
                - "Store signed originals and send every owner a summary"
            - name: First liquidity window for exiting members
              description: |-
                ## Purpose
                The first time the exit routes are used tests whether the family meant them: the notice goes out, owners decide whether to tender, the valuation is applied and the company pays. Running the first window carefully, with no pressure on anyone to stay or go, sets the precedent for every later one.

                ## Milestones
                1. Notice of the window sent to every eligible shareholder.
                2. Tenders received and checked against the yearly cap.
                3. Price applied from the latest valuation and payment terms confirmed.
                4. Shares bought back or transferred and the register updated.
                5. A short review of what to change before the next window.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed liquidity window with every tender settled within the cap, the register updated and a written review."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Send notice of the window to every eligible shareholder"
                - "Log tenders received and check them against the cap"
                - "Confirm price and payment terms with each tendering owner"
                - "Write a review of the window for the board"
            - name: Share gifts to children at milestone ages
              description: |-
                ## Purpose
                Parents often plan to pass shares at set ages, such as 21, 25 or 30, or at events such as finishing education, and those gifts need the valuation, tax advice, the transfer procedure and a signed deed of adherence each time. Treating each gift as a planned event keeps it inside the rules and gives the child a proper introduction to ownership.

                ## Milestones
                1. A schedule of planned gifts by child and age agreed with advisers.
                2. Tax advice taken for each gift in the relevant countries.
                3. Each transfer completed through the transfer procedure.
                4. The recipient signs the deed of adherence and attends the owner session.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each planned share gift completed on schedule with tax advice, a registered transfer and a signed deed of adherence."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a schedule of planned gifts by child and age"
                - "Check upcoming gift dates against the schedule @recurring(yearly)"
                - "Ask the tax adviser to confirm treatment before each gift"
                - "Have each recipient sign the deed of adherence"
            - name: Shareholder vote on amending the ownership rules
              description: |-
                ## Purpose
                Rules written for five siblings will not fit thirty cousins, and every agreement needs changing eventually. Running an amendment vote properly, with the proposal circulated, the required threshold checked and each branch heard, keeps changes legitimate and the agreement trusted.

                ## Milestones
                1. The proposed amendment drafted with the lawyer and its reasons stated.
                2. The required voting threshold confirmed from the agreement.
                3. Proposal circulated with time for branch discussion.
                4. Vote held, result recorded and amended agreement signed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A proposed amendment voted on at the required threshold, with the result minuted and any amended agreement signed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the amendment and a short reason with the lawyer"
                - "Confirm the voting threshold the agreement requires"
                - "Circulate the proposal and hold branch discussions"
                - "Hold the vote and record the result"
            - name: Owners' briefing on an offer for the business
              description: |-
                ## Purpose
                An unsolicited offer for the family business tests every ownership rule at once: drag-along, tag-along, reserved matters and the confidentiality owners owe each other. A structured briefing, run with the board and advisers, lets owners understand the offer and their rights before anyone commits publicly.

                ## Milestones
                1. Every shareholder briefed at the same time on the offer's headline terms.
                2. The relevant ownership clauses explained against the offer.
                3. Confidentiality obligations restated in writing.
                4. Owners' views gathered for the board.

                ## Notes
                Keep detailed offer terms within those bound by confidentiality. Leaks during a sale process can cost the family the offer.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A single briefing for all shareholders on an offer, with relevant clauses explained and owners' views recorded for the board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the chair to schedule one briefing for all shareholders"
                - "Prepare a one-page note on the clauses an offer would trigger"
                - "Restate confidentiality obligations in writing to each owner"
                - "Record owners' views for the board's response"
            - name: Founder's ownership rules before the first share gift
              description: |-
                ## Purpose
                A founder holding 100 percent can set the rules alone, and it is far easier to write them now than after shares are spread across children and trusts. Deciding eligibility, transfer and dividend principles before the first gift means every later owner receives shares already bound by them.

                ## Milestones
                1. The founder's intentions for control, income and fairness written down.
                2. Core rules on eligibility, transfers and dividends drafted with the lawyer.
                3. The articles amended before any shares move.
                4. Children told the rules before they become owners.

                ## Notes
                Founders often want to keep control for life; that is possible through share classes or a voting trust, but the trade-offs should be discussed with advisers rather than assumed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ownership rules written into the articles before the founder's first share gift, with the children briefed on them."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a page on what you want for control, income and fairness"
                - "Ask the lawyer to draft core rules into the articles"
                - "Approve the amended articles before any share gift"
                - "Explain the rules to your children before they receive shares"
            - name: Fair shares for children in and out of the business
              description: |-
                ## Purpose
                Parents with one child running the company and two who do not face the hardest ownership question: equal shares feel fair to the outside children and unfair to the one building value, while control for the insider can feel like favouritism. Working through equal versus equitable splits, share classes and other assets with advisers leads to a choice the parents can explain.

                ## Milestones
                1. Each child's role and expectations heard.
                2. Equal and equitable options modelled, including other family assets.
                3. Control and value separated where share classes allow.
                4. The parents' decision and reasons written for the children.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision by the parents on dividing shares between children, with reasons explained to each child."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Talk with each child about their role and expectations"
                - "Model equal and equitable splits including other assets"
                - "Ask advisers how share classes could separate control and value"
                - "Write a letter to the children explaining the decision"
            - name: What happens to shares when a shareholder dies
              description: |-
                ## Purpose
                Death is the most common moment shares leave the family, through a will leaving them to a spouse outside the eligibility rule or an estate forced to sell for tax. Checking that every owner's will and the agreement's transmission clause point the same way prevents shares going somewhere the rules forbid.

                ## Milestones
                1. The agreement's rules on transmission at death summarised.
                2. Each owner asked to confirm their will is consistent with the rules.
                3. Funding for any compulsory buy-back identified.
                4. A step-by-step note for executors filed with the agreement.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every owner has confirmed their will is consistent with the transmission rules, and an executor's note is filed with the agreement."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the transmission clause in plain language"
                - "Ask each owner to have their lawyer check their will against it"
                - "Confirm with owners that wills still match the rules @recurring(yearly)"
                - "Write a step-by-step note for executors"
            - name: Shares held for minor children
              description: |-
                ## Purpose
                Shares given to children under 18 are usually held by trustees or guardians who vote and receive dividends on their behalf, and those people need clear guidance. Recording who holds each minor's shares, how they vote and what happens to dividends keeps the arrangement within the rules until the child takes over.

                ## Milestones
                1. Every share held for a minor listed with its trustee or guardian.
                2. Voting guidance written for those holders.
                3. Treatment of dividends for minors agreed with advisers.
                4. The date each child reaches the transfer age recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A list of shares held for minors with their holders, voting guidance and transfer dates, reviewed each year."
                cadence: rolling
              tasks:
                - "List every share held for a minor and who holds it"
                - "Write a page of voting guidance for those holders"
                - "Ask the tax adviser how dividends for minors should be handled"
                - "Review the minor holdings list and transfer dates @recurring(yearly)"
            - name: Non-family investors and employee shareholders
              description: |-
                ## Purpose
                Bringing in a minority investor or giving key non-family executives shares can fund growth and keep talent, but it changes every ownership rule: eligibility, pre-emption, dividends and exits. Deciding the limits, such as a cap on outside ownership and compulsory buy-back on leaving, protects family control.

                ## Milestones
                1. A cap on non-family ownership agreed.
                2. Rules for employee shares, including buy-back on leaving, drafted.
                3. Investor rights limited to what the family accepts.
                4. Changes to the agreement approved by shareholders.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cap on non-family ownership and drafted employee share rules, approved by the shareholders."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a maximum percentage of non-family ownership"
                - "Ask the lawyer to draft employee share buy-back rules"
                - "List the rights an outside investor would be offered"
                - "Put the changes to a shareholder vote"
            - name: Voting trust to keep family control together
              description: |-
                ## Purpose
                As shares spread across thirty or forty cousins, control fragments and any one branch's sale can tip the balance. A voting trust or voting agreement pools votes under trustees while owners keep their economic rights, and it needs careful design with advisers on who the voting trustees are and how they are replaced.

                ## Milestones
                1. Options compared: voting trust, voting agreement, share class structure.
                2. Voting trustee selection and replacement rules drafted.
                3. Owners' economic rights preserved and confirmed by the lawyer.
                4. The arrangement approved by the required majority.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A voting control arrangement chosen, with trustee selection and replacement rules drafted by the lawyer and approved by owners."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Compare a voting trust, a voting agreement and share classes"
                - "Draft how voting trustees are chosen and replaced"
                - "Ask the lawyer to confirm owners' economic rights are preserved"
                - "Put the arrangement to a shareholder vote"
            - name: Consolidating fragmented cousin shareholdings
              description: |-
                ## Purpose
                By the third or fourth generation, dozens of small holdings make every vote and dividend expensive and slow, and many cousins would rather have cash. A planned consolidation, through buy-backs, a holding vehicle or an offer to small holders, reduces the shareholder count without forcing anyone out.

                ## Milestones
                1. Holders below a set threshold identified.
                2. Consolidation routes compared with advisers.
                3. A voluntary offer made to small holders on the agreed price basis.
                4. The register updated and new holder count reported.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A voluntary consolidation offer completed, with the number of registered holders reduced and reported to the board."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List holders below the threshold the board sets"
                - "Compare buy-back, holding vehicle and internal sale routes"
                - "Make a voluntary offer on the agreed price basis"
                - "Report the new holder count to the board"
            - name: Partial listing while keeping family ownership rules
              description: |-
                ## Purpose
                Listing part of the family business on a stock exchange brings liquidity for owners but removes most private transfer restrictions on listed shares. Working out with advisers which family rules can survive, often through a family holding block, a voting agreement or a lock-up, decides whether listing is compatible with keeping the business in the family.

                ## Milestones
                1. Family rules that cannot apply to listed shares identified.
                2. Ways to keep a controlling family block compared.
                3. Lock-up and selling rules for family holders drafted.
                4. A recommendation made to the shareholders.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation on whether and how family ownership rules can survive a partial listing, reviewed by advisers."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the lawyer which family rules would lapse on listing"
                - "Compare ways of holding a controlling family block"
                - "Draft lock-up rules for family holders"
                - "Present the recommendation at a shareholder meeting"
            - name: Aligning ownership rules across several family companies
              description: |-
                ## Purpose
                Families with an operating company, a property company and a portfolio of ventures often have three agreements written at different times with different rules, so an owner can be eligible in one and not another. Aligning eligibility, transfer and exit rules across the group, or differing only on purpose, makes ownership coherent.

                ## Milestones
                1. Rules in each company's agreement compared side by side.
                2. Differences classified as deliberate or accidental.
                3. Accidental differences corrected in a coordinated amendment.
                4. A yearly check scheduled when any agreement changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A side-by-side comparison of ownership rules across all family companies, with accidental differences corrected."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Put each company's ownership rules in one comparison table"
                - "Mark each difference as deliberate or accidental"
                - "Ask the lawyer to prepare a coordinated amendment"
                - "Check the agreements against each other @recurring(yearly)"
---

# Family Enterprise Ownership Rules

This area is for the founder about to give shares away for the first time, and for parents whose children and grandchildren will one day own the family business together. It starts with foundations (an accurate shareholder register, the existing agreements, who counts as an eligible owner and the right lawyer), then the operating machinery of annual meetings, valuations, dividend cycles and transfer requests, the owner skills behind reading accounts and valuation, the core decisions on dividends, transfer restrictions, share classes and exit routes, dated events such as signing the agreement and the first liquidity window, situations such as a shareholder's death or shares held for children, and specialist work on voting trusts, consolidating cousin holdings and a partial listing.

What repeats is a monthly look at management accounts and transfer requests, a quarterly register check, owner letter and liquidity pool review, and a yearly cycle of the shareholder meeting, the internal valuation, the dividend declaration and the rules compliance check. The Vendor, Board meeting and Metrics log templates pair with choosing a lawyer and a valuer, running the shareholder meeting and keeping the dividend history. None of this is legal or tax advice: every rule with legal effect is drafted and checked by the family's lawyer and tax adviser. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
