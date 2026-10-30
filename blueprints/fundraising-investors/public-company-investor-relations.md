---
id: fundraising-investors.public-company-investor-relations
name: Public Company Investor Relations
description: "A charter, ownership baseline and disclosure policy for a listed company, the routines and calendar that keep shareholders informed, and plans for guidance, capital markets days, activism and bids."
category: business
version: 1.0.0
tags: [fundraising-investors, public-company-investor-relations, enterprise, manager, listed-company, disclosure, shareholder-engagement, investor-calendar]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - feedback-themes
    - purchase-decision
    - vendor
    - onboarding-30-60-90
    - risk-register
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Public Company Investor Relations
          description: "Running investor relations for a listed company: shareholder meetings, disclosure rules, guidance and the investor calendar."
          projects:
            - name: Investor relations charter with the CEO and CFO
              description: |-
                ## Purpose
                Investor relations sits between the CEO, the CFO, the company secretary and the board, and without a written mandate it drifts towards whoever asks loudest. A two-page charter that sets what IR owns, who may speak to the market, how much executive time the programme gets and how success is measured settles the turf questions before the first roadshow.

                ## Milestones
                1. A two-page charter covering scope, reporting line, spokespeople and the year's objectives.
                2. An agreed allocation of CEO and CFO days for investor meetings over the year.
                3. Three to five measures of IR success signed off by the CFO.
                4. The charter approved by the CEO and noted by the board or its audit committee.

                ## Notes
                Keep the measures about access, understanding and shareholder mix, not the share price. IR cannot control the price, and a target built on it invites the wrong behaviour.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A charter naming IR's scope, reporting line, spokespeople, executive time budget and success measures is approved by the CEO and CFO."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a 45-minute meeting with the CFO to agree what IR owns"
                - "Draft a two-page charter covering scope, spokespeople and objectives"
                - "Agree how many CEO and CFO days go to investors this year"
                - "Send the approved charter to the company secretary for the board file"
            - name: Shareholder register ownership baseline
              description: |-
                ## Purpose
                Nominee accounts hide most of the real owners of a listed share, so the statutory register alone rarely tells you who holds the stock or how they invest. A baseline analysis naming the top 50 beneficial holders by style, geography and turnover gives every later decision on targeting, roadshows and activism a starting point.

                ## Milestones
                1. A list of the top 50 beneficial holders with position size and percentage of issued shares.
                2. Each holder tagged by investment style, geography and portfolio turnover.
                3. Ownership split into institutions, retail, employees, insiders and unidentified.
                4. A one-page summary of what the base looks like and what is still unknown.

                ## Notes
                In many markets a listed company can formally ask nominees to reveal the beneficial owner behind a holding. Ask the company secretary or registrar which powers apply in your jurisdiction before relying on estimates.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated ownership analysis covering at least 80 percent of issued shares, split by holder type, style and geography, is filed with the CFO."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Request the latest register extract from the registrar"
                - "Ask the company secretary which beneficial ownership requests the company can make"
                - "Tag the top 50 holders by style, geography and turnover"
                - "Write a one-page ownership summary for the CFO"
            - name: Disclosure policy and disclosure committee
              description: |-
                ## Purpose
                When news breaks on a Friday evening, the question is not only whether to disclose but who decides, how fast and through which channel. A written disclosure policy with a small standing committee, approved by the board and checked by counsel against the listing rules that apply to you, means decisions on inside information are made the same way every time and recorded.

                ## Milestones
                1. A disclosure policy covering materiality, timing, channels, delay decisions and spokespeople, reviewed by external counsel.
                2. A disclosure committee with named members, a deputy for each and a quorum.
                3. A decision log recording every disclosure or delay decision with its reasons and time.
                4. The policy approved by the board and circulated to senior management.

                ## Notes
                Materiality and the right to delay disclosure are legal judgements. The policy sets the process; counsel and the committee make the call each time.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved disclosure policy, a disclosure committee with named members and deputies, and a decision log are in place."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect the current disclosure policy and past board minutes on disclosure"
                - "Draft the committee membership with a deputy for every role"
                - "Ask external counsel to review the draft against the listing rules"
                - "Present the policy to the board for approval"
                - "Review the disclosure policy against rule changes with counsel @recurring(yearly)"
            - name: Inside information and insider list procedure
              description: |-
                ## Purpose
                Most market abuse regimes expect a listed company to know who held inside information and from when, and to produce that record quickly if the regulator asks. A clear procedure for opening, maintaining and closing insider lists, with standard notices to the people added, turns a scramble into a routine the company secretary and IR run together.

                ## Milestones
                1. A written procedure for opening, updating and closing a project insider list.
                2. Standard insider notification wording approved by counsel.
                3. The permanent insider list checked against current roles and brought up to date.
                4. One closed list audited and found complete for names, times and reasons.

                ## Notes
                Start from the **Compliance control** template. List formats differ by market, for example the EU and UK market abuse rules prescribe specific fields, so confirm the format with counsel.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-approved insider list procedure is in use, the permanent list is current and one closed list has been audited."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the company secretary for the current insider list procedure and format"
                - "Draft standard insider notification wording for counsel to review"
                - "Check the permanent insider list against current job titles"
                - "Audit one closed insider list for missing names or times @recurring(quarterly)"
            - name: Spokesperson rules and selective disclosure safeguards
              description: |-
                ## Purpose
                A finance director who hints at the quarter over dinner with a fund manager can create a selective disclosure problem the whole company pays for. Short rules on who speaks to investors, what is out of bounds, and a second company attendee in every meeting give executives the confidence to engage without drifting into unpublished numbers.

                ## Milestones
                1. A one-page spokesperson guide naming who may speak to investors, analysts and the financial press.
                2. A list of topics never discussed outside published material, such as current trading and unannounced deals.
                3. A rule that IR or a second company attendee joins every investor meeting and keeps a note.
                4. Every authorised spokesperson briefed on the guide, with the date recorded.

                ## Notes
                Regimes such as US Regulation FD and the EU and UK market abuse rules treat private briefings differently. Ask counsel to check the guide for each market where the shares trade.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spokesperson guide is issued and every authorised spokesperson has been briefed on it, with briefing dates recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List everyone who currently talks to investors or analysts"
                - "Draft a one-page guide including the never-discuss list"
                - "Run a 30-minute briefing for each authorised spokesperson"
                - "Record each briefing date in the compliance file"
            - name: Equity story and investment case
              description: |-
                ## Purpose
                Investors hear dozens of management teams a week and remember perhaps three points from each. An equity story that states in plain words how the company makes money, how it will grow, where capital goes and what management is measured on gives every presentation, meeting and release the same spine.

                ## Milestones
                1. A one-page investment case with no more than five core messages.
                2. Each message backed by a published number or fact an investor can check.
                3. The case tested with three friendly investors or brokers and their reactions noted.
                4. A short and a long version approved by the CEO and CFO.

                ## Notes
                Every claim in the equity story must already be public or be released at the same moment. A new target first appearing on a slide is a disclosure decision, not a wording choice.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page investment case of five or fewer messages, each tied to public evidence, is approved by the CEO and CFO and in use."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Collect last year's presentations and note the messages that repeat"
                - "Draft five core messages with one public proof point each"
                - "Test the draft with three investors or brokers who know the company"
                - "Ask the agent to tighten the long version into a one-page summary"
            - name: Annual investor calendar with closed periods
              description: |-
                ## Purpose
                Results dates, closed periods, the AGM, conferences, roadshows and index reviews all compete for the same executive diaries, and clashes are usually found too late. One calendar for the financial year, built around reporting dates and closed periods, lets you book conference slots and roadshows months ahead and protects the quiet weeks.

                ## Milestones
                1. Every reporting date, closed period and the AGM for the next twelve months on one calendar.
                2. Conferences, roadshows and capital markets events placed outside closed periods.
                3. Executive availability confirmed with the CEO's and CFO's assistants.
                4. The calendar shared with brokers, the company secretary and the finance team.

                ## Notes
                Agree the closed period rule with the company secretary first. Many companies stop investor meetings for a set number of weeks before results, whatever the rules strictly require.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month investor calendar with reporting dates, closed periods, the AGM and planned events is shared with brokers and executives."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the confirmed reporting and AGM dates from the company secretary"
                - "Mark each closed period on the calendar"
                - "Place known broker conferences and planned roadshows"
                - "Roll the investor calendar forward for the next financial year @recurring(yearly)"
            - name: Peer group for valuation and benchmarking
              description: |-
                ## Purpose
                Investors value the company against a peer set whether you choose one or not, and the peers analysts pick are not always the fairest comparison. Settling a defensible group of eight to twelve listed companies, with the reason each is included, lets you track relative valuation, ownership overlap and disclosure practice consistently.

                ## Milestones
                1. A peer group of eight to twelve companies with a one-line reason for each.
                2. A comparison sheet of valuation multiples, growth and margins from public sources.
                3. Holders that own the company and two or more peers identified.
                4. The peer group agreed with the CFO.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A CFO-agreed peer group with written reasons and a completed comparison sheet from public sources exists."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the peers analysts and investors mention most often"
                - "Narrow the list to eight to twelve with a reason for each"
                - "Build a comparison sheet of multiples, growth and margins"
                - "Review the peer group for new listings, deals and delistings @recurring(yearly)"
            - name: Investor CRM and meeting log set-up
              description: |-
                ## Purpose
                Without a single record of who met whom, when and what they asked, IR knowledge leaves with the person who holds it. A contact system holding every institution, fund manager, analyst and meeting note, with consistent fields for style and position, makes targeting, feedback and the board report possible.

                ## Milestones
                1. A system chosen and set up for institutions, contacts, holdings and meetings.
                2. The last twelve months of meetings loaded with attendees and notes.
                3. Standard fields for investment style, holding size and last contact.
                4. A rule that every meeting note is logged within two working days.

                ## Notes
                Investor contact data is personal data. Agree retention and access rules with your data protection lead before importing anything.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact system holds every institution and the last twelve months of meetings, with new notes logged within two working days."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List where meeting records live today, from inboxes to spreadsheets"
                - "Decide the standard fields for institutions, contacts and meetings"
                - "Load the last twelve months of meetings with notes"
                - "Agree the two-day logging rule with everyone who meets investors"
            - name: Weekly share register and trading monitor
              description: |-
                ## Purpose
                Large holders rarely announce they are building or selling a position until a threshold forces it, but volumes, custody movements and broker colour often signal it weeks earlier. A short weekly look at volume, price against peers and register movements means IR hears about a change in the base before the CEO asks.

                ## Milestones
                1. A weekly one-page sheet with price against the peer index, volume and notable trades.
                2. Register or custody movements above a set size flagged with a likely holder.
                3. Unexplained moves followed up with a broker or the surveillance provider.
                4. Eight consecutive weeks of the sheet sent to the CFO.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly trading and register sheet has gone to the CFO for at least eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Set up a one-page weekly template for price, volume and register moves"
                - "Agree with the registrar how often register movements can be supplied"
                - "Prepare the weekly trading and register sheet @recurring(weekly:mon)"
                - "Reconcile weekly estimates against the monthly register analysis @recurring(monthly:12)"
            - name: Market rumour and leak response routine
              description: |-
                ## Purpose
                A press story about a possible deal or a sharp price move on no news can trigger a duty to respond quickly, and a reflex of saying nothing is not always enough. A rehearsed routine that tells IR who to call, which holding lines exist and when to escalate to the disclosure committee keeps the first hour calm and recorded.

                ## Milestones
                1. A one-page rumour protocol naming the people to call, in order, with mobile numbers.
                2. Pre-approved holding statements for common situations, cleared by counsel.
                3. A log of every rumour, the decision taken and the time.
                4. A tabletop rehearsal run with the disclosure committee.

                ## Notes
                Some markets expect an announcement once a leak shows that confidentiality has been lost on a matter whose disclosure was delayed. Counsel decides; IR makes sure the decision is quick.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A counsel-cleared rumour protocol with holding statements is in place and has been rehearsed at least once with the disclosure committee."
                cadence: rolling
              tasks:
                - "Write the call list for a rumour or unexplained price move"
                - "Draft holding statements and send them to counsel"
                - "Run a 30-minute tabletop rehearsal with the disclosure committee"
                - "Check that every number on the rumour call list still works @recurring(quarterly)"
            - name: Inbound investor request triage
              description: |-
                ## Purpose
                Meeting requests, data questions, retail emails and conference invitations arrive faster than a small IR team can answer, and a top ten holder can end up waiting as long as a cold pitch. A triage rule that sorts requests by holder size, target status and timing protects executive time and makes sure the largest holders hear back within a day.

                ## Milestones
                1. A triage rule sorting requests into executive meeting, IR meeting, written reply or polite decline.
                2. Response times agreed for each category.
                3. A shared inbox or queue where every request is logged.
                4. A month of requests reviewed to check the rule matches reality.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every inbound investor request in a full month is logged and answered within its agreed response time."
                cadence: rolling
              tasks:
                - "Draft the four triage categories with an example of each"
                - "Agree response times for each category with the CFO"
                - "Clear and categorise the inbound investor request queue @recurring(weekly:thu)"
                - "Review a month of requests and adjust the rule"
            - name: Investor meeting feedback loop
              description: |-
                ## Purpose
                Management usually hears what investors say in the room, and rarely what they tell their broker afterwards. Collecting written feedback after every roadshow and conference, and turning it into a short monthly read of themes, tells the CEO which messages land, which questions keep returning and where the equity story is thin.

                ## Milestones
                1. A standard feedback request sent to brokers after every roadshow or conference.
                2. Feedback stored against each institution in the contact system.
                3. A monthly page of recurring themes, concerns and praise.
                4. One change to messaging made because of the feedback, and recorded.

                ## Notes
                Start from the **Feedback themes** template. Anonymised broker feedback is more candid; never pass individual investor comments beyond the executive team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly feedback summaries exist for six consecutive months, with at least one messaging change traced to them."
                cadence: rolling
              tasks:
                - "Write a standard post-meeting feedback request for brokers"
                - "Log every feedback note against the institution it came from"
                - "Summarise investor feedback themes for the CEO @recurring(monthly:20)"
                - "Note one message to change before the next round of meetings"
            - name: Monthly IR report to the executive committee
              description: |-
                ## Purpose
                Executives judge investor relations by the share price unless they are given something better. A two-page monthly report covering price against peers, ownership changes, meetings held, feedback themes and the month ahead keeps the executive committee informed and makes requests for their time easier to justify.

                ## Milestones
                1. A two-page report format agreed with the CFO.
                2. Sections for price and peers, ownership, meetings, feedback and the coming month.
                3. The report issued on the same working day each month.
                4. Executive questions from each report tracked to an answer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The monthly IR report has been issued on its agreed day for six consecutive months."
                cadence: rolling
              tasks:
                - "Agree the report sections and length with the CFO"
                - "Build the template with charts that refresh from the weekly sheet"
                - "Issue the monthly IR report to the executive committee @recurring(monthly:5)"
                - "Ask the agent to draft the commentary from the weekly sheets and feedback log"
            - name: Quarterly IR update to the board
              description: |-
                ## Purpose
                Boards of listed companies are expected to understand their shareholders, and directors are often asked about the register by the investors themselves. A quarterly board paper on ownership change, major holder views, activism risk and the engagement plan gives directors that understanding without a 40-page pack.

                ## Milestones
                1. A board paper format of no more than four pages agreed with the chair and company secretary.
                2. Each paper covering ownership, holder views, voting outlook and next quarter's programme.
                3. Top holder concerns stated plainly, including the uncomfortable ones.
                4. Board questions logged and answered at the following meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A board IR paper of four pages or fewer has been tabled at each of the last four scheduled board meetings."
                cadence: cyclic
              tasks:
                - "Ask the chair which shareholder questions the board most wants answered"
                - "Draft a four-page board paper format"
                - "Prepare the board investor relations paper @recurring(quarterly)"
                - "Carry unanswered board questions into the next paper"
            - name: Closed period discipline each reporting cycle
              description: |-
                ## Purpose
                The weeks before results are when investors push hardest for a steer and when a careless comment does most damage. A short checklist run every reporting cycle, from notifying brokers to pausing meetings and checking what has been said publicly, makes closed periods consistent rather than dependent on memory.

                ## Milestones
                1. A closed period checklist covering notices, meeting rules, social media and director dealings.
                2. Brokers and the IR contact list told the closed period dates in advance.
                3. No executive investor meetings inside the period, or each exception approved and recorded.
                4. The completed checklist filed for every reporting cycle in a year.

                ## Notes
                Director dealing restrictions are usually run by the company secretary. Coordinate so investors and directors work from the same dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed closed period checklist is on file for each of the last four reporting cycles."
                cadence: cyclic
              tasks:
                - "Write the closed period checklist with the company secretary"
                - "Confirm the next closed period dates with the company secretary @recurring(quarterly)"
                - "Send closed period dates to brokers and corporate access teams"
                - "File the completed checklist after each results announcement"
            - name: Regulatory notification watch for holdings and dealings
              description: |-
                ## Purpose
                Major shareholding notifications, director dealing filings and short position disclosures are public signals investors read, and some reach the company before the market sees them. A weekly check of the regulatory news feed and filings, with each notification logged against the holder record, keeps the ownership picture current and saves IR from hearing about a new large holder from an analyst.

                ## Milestones
                1. The notifications that apply in each market where the shares trade listed and confirmed with the company secretary.
                2. Alerts set on the regulatory news service and filings database.
                3. Every notification logged against the holder in the contact system.
                4. Notifications the company must publish itself handled within the required time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every holding, dealing and short position notification in the last quarter is logged against a holder record."
                cadence: rolling
              tasks:
                - "Confirm with the company secretary which notifications apply in each market"
                - "Set alerts on the regulatory news feed and filings database"
                - "Log new holding, dealing and short position notifications @recurring(weekly:wed)"
                - "Flag any new holder above the first disclosure threshold to the CFO"
            - name: Institutional targeting programme
              description: |-
                ## Purpose
                Waiting for investors to call leaves the shareholder base to chance. A ranked list of 40 institutions that own peers, fit the company's style and do not yet hold the stock, worked through meeting by meeting, is how IR changes the register on purpose.

                ## Milestones
                1. Forty target institutions ranked by peer ownership, style fit and fund size.
                2. Each target assigned to a roadshow, conference or call slot this year.
                3. First meetings held with at least half the targets.
                4. New positions from targets tracked through the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 20 of 40 ranked target institutions have had a first meeting, with any new positions recorded."
                cadence: rolling
              tasks:
                - "Screen peer holders that do not own the stock"
                - "Rank forty targets by style fit, peer ownership and fund size"
                - "Refresh the target list against the latest register @recurring(monthly:15)"
                - "Ask brokers to request meetings with the top ten targets"
            - name: Annual IR budget and plan
              description: |-
                ## Purpose
                Roadshows, conference fees, register analysis, perception studies and the capital markets day all compete for a budget set once a year. An annual plan that ties each line of spend to the objectives in the charter makes the budget conversation with the CFO about outcomes rather than travel.

                ## Milestones
                1. Last year's IR spend broken down by activity.
                2. A plan of next year's roadshows, conferences, events and services.
                3. Each spend line linked to a charter objective.
                4. The budget agreed with the CFO before the company planning deadline.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A next-year IR plan and budget, with every line tied to a charter objective, is approved by the CFO."
                cadence: cyclic
              tasks:
                - "Pull last year's IR spend by activity from the finance system"
                - "Draft next year's IR plan and budget @recurring(yearly)"
                - "Link each spend line to a charter objective"
                - "Agree the budget with the CFO before the planning deadline"
            - name: Listing rules and market abuse refresher
              description: |-
                ## Purpose
                Rules on inside information, disclosure timing, private briefings and director dealings change, and a team that learned them five years ago may be working from stale assumptions. A structured refresher with counsel, built around real situations the company has faced, keeps the team's instincts aligned with the current rules in each market where the shares trade.

                ## Milestones
                1. A list of the rules and guidance that apply, by market, confirmed with counsel.
                2. A two-hour session with counsel worked around five real scenarios.
                3. A one-page crib sheet of the points the team most often gets wrong.
                4. Attendance recorded for everyone who meets investors.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Everyone who meets investors has attended a counsel-led refresher in the last twelve months and holds the crib sheet."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel which rules and guidance changed in the last two years"
                - "Pick five real situations the company faced to use as scenarios"
                - "Hold the two-hour session and record attendance"
                - "Write a one-page crib sheet of common errors"
            - name: Investor styles and how each reads the stock
              description: |-
                ## Purpose
                A growth fund, a deep value investor, an income fund and a quantitative manager can look at the same company and see four different stocks. Learning what each style screens for, how long it holds and what makes it sell lets IR tailor meetings and judge whether the register suits the strategy.

                ## Milestones
                1. A short note on each of six investor styles covering screens, holding period and sell triggers.
                2. The top 30 holders mapped to those styles.
                3. The style mix compared with two peers.
                4. A view on which styles to target shared with the CFO.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on six investor styles exist and the top 30 holders are mapped to them and compared with two peers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a short note on what each of six investor styles screens for"
                - "Map the top 30 holders to a style"
                - "Compare the style mix with two peers"
                - "Share a view on target styles with the CFO"
            - name: Sector valuation methods investors apply
              description: |-
                ## Purpose
                Investors may value the company on earnings multiples, free cash flow yield, sum of the parts or asset value, and the method chosen decides which numbers they care about. Learning the methods used in your sector, and which ones current holders rely on, lets IR explain the business in the terms the market actually prices.

                ## Milestones
                1. The main valuation methods for the sector written up with their key inputs.
                2. Three analyst reports or investor conversations reviewed to see which methods dominate.
                3. The inputs each method needs checked against what the company publishes.
                4. Gaps in disclosure noted for the disclosure committee.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note on sector valuation methods, listing the disclosures each depends on and any gaps, is shared with the CFO."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the valuation methods investors use for the sector"
                - "Read three recent analyst reports and note the method each uses"
                - "Check which inputs the company does and does not disclose"
                - "Send any disclosure gaps to the disclosure committee"
            - name: Short interest and stock lending literacy
              description: |-
                ## Purpose
                Rising short interest can reflect a fundamental bear case, a hedge against a convertible bond or a pairs trade, and each calls for a different response. Understanding how stock lending works, where short positions are disclosed and how to read the data stops management reacting to a number nobody in the room understands.

                ## Milestones
                1. A note explaining stock lending, borrow cost and the main reasons funds go short.
                2. The public short position disclosures for the stock found and recorded.
                3. Lending data reviewed with a broker or data provider.
                4. A short interest line added to the monthly IR report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Short interest and borrow data appear in the monthly IR report, backed by a written note on how to read them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a broker to walk through current lending and borrow data for the stock"
                - "Find where short positions in the stock are publicly disclosed"
                - "Write a one-page note on the main reasons funds go short"
                - "Record short interest and borrow cost for the IR report @recurring(monthly:8)"
            - name: Index membership and passive ownership mechanics
              description: |-
                ## Purpose
                Index funds and trackers can own a large slice of a listed company and buy or sell on a fixed date regardless of news. Knowing which indices include the stock, their review dates, free float rules and how close the company sits to a threshold explains volume spikes and avoids surprises at rebalancing.

                ## Milestones
                1. Every index that includes the stock listed with its provider and review dates.
                2. Free float and size rules for each index noted.
                3. The company's position against inclusion or exclusion thresholds estimated.
                4. Passive ownership as a share of the register measured.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists every index holding the stock, its review dates and the company's distance from key thresholds."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every index that includes the stock and its provider"
                - "Note review dates and free float rules for each index"
                - "Estimate the company's distance from inclusion and exclusion thresholds"
                - "Check upcoming index review dates and announcements @recurring(quarterly)"
            - name: ESG rating methodologies and data requests
              description: |-
                ## Purpose
                Rating agencies and stewardship teams score the company on sustainability whether or not anyone inside answers their questionnaires, and those scores feed fund screens. Learning how the main raters score your sector, and who inside holds the data, means the company corrects errors and responds on time instead of being rated on old reports.

                ## Milestones
                1. The raters and questionnaires that matter most to current holders identified.
                2. Each rater's methodology for the sector summarised on a page.
                3. A data owner inside the company named for each question area.
                4. Errors in at least one published rating found and submitted for correction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The raters that matter to holders are listed with methodology summaries and data owners, and at least one correction has been submitted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the top ten holders which ESG ratings they use"
                - "Summarise how two main raters score the sector"
                - "Name a data owner inside the company for each question area"
                - "Check the ESG rater submission and review windows for the year @recurring(yearly)"
            - name: One-on-one meeting practice for executives
              description: |-
                ## Purpose
                Even a CEO who is superb with customers can lose a sceptical fund manager in the first ten minutes. Short practice sessions with IR playing the hardest current holders, using real questions from the feedback log, sharpen answers on capital allocation, competition and the weak spots investors keep raising.

                ## Milestones
                1. A list of the ten hardest questions from recent investor meetings.
                2. Two practice sessions held with the CEO and CFO.
                3. Agreed answers that stay within published information.
                4. Feedback after the next roadshow compared with the one before.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two practice sessions using ten real investor questions have been held with the CEO and CFO, and post-roadshow feedback compared."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull the ten hardest questions from the feedback log"
                - "Book two 45-minute practice sessions with the CEO and CFO"
                - "Agree answers that stay within published information"
                - "Compare feedback after the next roadshow with the last one"
            - name: Earnings guidance policy decision
              description: |-
                ## Purpose
                Whether to give numerical guidance, ranges, a qualitative outlook or nothing at all shapes how analysts build consensus and how hard a miss lands. A written decision on what the company guides on, how often and when it updates, taken by the board with advice, stops guidance being improvised on a results call.

                ## Milestones
                1. Current company practice and peer practice on guidance compared side by side.
                2. Options set out: no guidance, qualitative outlook, ranges for chosen metrics, or medium-term targets.
                3. The board decision recorded with its reasons and the update rules.
                4. The guidance rules written into the disclosure policy.

                ## Notes
                Once given, guidance creates an expectation that the company will update it if it becomes materially wrong. Agree with counsel how that works in your market before choosing.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-approved guidance policy stating which metrics are guided, in what form and under which update rules sits in the disclosure policy."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List what the company has guided on over the last three years"
                - "Compare guidance practice across the peer group"
                - "Write an options paper for the CFO and audit committee"
                - "Add the agreed guidance rules to the disclosure policy"
            - name: Reporting rhythm decision for trading updates
              description: |-
                ## Purpose
                Where full quarterly reporting is not mandatory, companies choose between quarterly results, half-year results with trading updates, or half-year reporting alone. Each choice changes the workload, the closed periods and how investors judge momentum, so it deserves a recorded decision rather than habit.

                ## Milestones
                1. The legal requirements of each listing venue confirmed with counsel.
                2. Workload, cost and closed period effects of each rhythm estimated with finance.
                3. Views on reporting frequency gathered from the top 15 holders.
                4. A board decision recorded, and announced if it changes current practice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board decision on reporting rhythm, with counsel's view, finance's estimate and holder views attached, is on file."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel what each listing venue requires on periodic reporting"
                - "Estimate finance and IR hours for each rhythm with the financial controller"
                - "Ask the top 15 holders which rhythm they prefer"
                - "Take the options paper to the audit committee"
            - name: Shareholder identification provider choice
              description: |-
                ## Purpose
                Ownership analysis, targeting data and market surveillance can come from a registrar, a specialist IR data firm or a broker, and contracts often run for years. Comparing three providers on coverage of your market, data freshness, analyst support and cost before renewal avoids paying for a service nobody opens.

                ## Milestones
                1. Written requirements covering markets, refresh frequency, targeting data, surveillance and support.
                2. Three providers shortlisted and given the same brief.
                3. Sample outputs compared for accuracy against a holding you can verify.
                4. A provider chosen and the contract term and renewal date noted.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider is chosen after three were scored against written requirements, with the contract end date recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write requirements for ownership data, targeting and surveillance"
                - "Shortlist three providers and send each the same brief"
                - "Test each provider's output against a holding you can verify"
                - "Record the choice and the contract renewal date"
            - name: Corporate access broker scorecard
              description: |-
                ## Purpose
                Brokers arrange most roadshows and conference meetings, and the quality of the investors they bring varies widely. A yearly scorecard rating each broker on meetings delivered, targets reached, logistics and feedback quality shows which ones earn the company's time and which are filling slots.

                ## Milestones
                1. A scorecard with five criteria applied to every broker used in the year.
                2. Meetings per broker split into holders, targets and others.
                3. Feedback quality rated for each broker.
                4. Next year's roadshow allocation decided from the scores.

                ## Notes
                Start from the **Vendor** template, with one record per broker.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every broker used in the year is scored on five criteria and next year's roadshow allocation follows the scores."
                cadence: cyclic
              tasks:
                - "Agree five scorecard criteria with the CFO"
                - "Pull meetings per broker from the contact system"
                - "Score each corporate access broker on meetings and feedback @recurring(yearly)"
                - "Tell each broker their score and next year's allocation"
            - name: Independent investor perception study
              description: |-
                ## Purpose
                Fund managers are more candid with a third party than with the CFO across the table. An independent perception study of 20 to 30 holders, non-holders and analysts tells management how the strategy, the team and the communication are seen, and gives a baseline to measure against in two years.

                ## Milestones
                1. Study objectives and a question set agreed with the CEO and CFO.
                2. An independent firm or adviser appointed.
                3. Interviews completed with 20 to 30 holders, non-holders and analysts.
                4. Findings presented to the board with three agreed actions.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A third-party perception study of at least 20 interviews is presented to the board with three agreed actions."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the five questions management most wants answered"
                - "Get proposals from two independent perception study firms"
                - "Agree the interview list of holders, non-holders and analysts"
                - "Present the findings and three actions to the board"
            - name: Alternative performance measures consistency review
              description: |-
                ## Purpose
                Adjusted profit, underlying growth and other non-standard measures attract regulator and investor scrutiny when definitions shift from year to year. Reviewing every such measure used in releases, presentations and meetings for consistent definitions and reconciliations protects credibility and keeps investor materials in line with the accounts.

                ## Milestones
                1. Every alternative measure used in the last two years listed with its definition.
                2. Definitions compared across releases, presentations and the annual report.
                3. Inconsistencies resolved with finance and the auditors.
                4. One glossary adopted for all investor materials.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A glossary of alternative performance measures with consistent definitions and reconciliations is used in all investor materials."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every adjusted or non-standard measure used in investor materials"
                - "Compare each definition across the documents that use it"
                - "Agree fixes with the financial controller and auditors"
                - "Publish one glossary for all investor materials"
            - name: Free float and liquidity improvement options
              description: |-
                ## Purpose
                Low trading volume or a thin free float keeps some funds out entirely, widens spreads and makes the share price jumpy. Setting out the options, from a placing by a large holder to a liquidity provider, a share split or an extra listing venue, gives the board a reasoned paper instead of a wish.

                ## Milestones
                1. Free float, average daily volume and spread measured against peers.
                2. Fund size limits that rule the stock out estimated with the corporate broker.
                3. Options listed with cost, timing and who must agree.
                4. A board paper with adviser input and a recommended next step.

                ## Notes
                Any placing, buyback or listing change needs the corporate broker and counsel. The paper sets out options; it is not a recommendation to trade.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board paper comparing liquidity options on cost, timing and approvals, with adviser input, is tabled."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Measure free float, daily volume and spread against peers"
                - "Ask the corporate broker which funds the liquidity profile excludes"
                - "List options with cost, timing and approvals needed"
                - "Table the liquidity options paper at a board meeting"
            - name: Capital markets day
              description: |-
                ## Purpose
                Capital markets days are the one occasion investors see the wider management team, hear the medium-term strategy and test it in person, and they take four to six months to do well. Running it as a project with a clear message, rehearsed speakers, every new target cleared for disclosure and a published replay makes it a step change in understanding, not an expensive presentation.

                ## Milestones
                1. A date clear of closed periods and major conferences, with venue or format chosen.
                2. The message architecture and any new targets approved by the board and disclosure committee.
                3. Every presenter rehearsed twice with timed slides.
                4. Invitations sent to holders, targets and analysts, with attendance tracked.
                5. Materials released to the market at the start of the event and a replay posted afterwards.

                ## Notes
                Any new financial target announced on the day is inside information until published. Release it through the regulatory channel before or as the event begins.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The capital markets day is held on its planned date, new targets go out through the regulatory channel first and feedback is gathered from at least 20 attendees."
                cadence: one-shot
                effort_hours_estimate: "120"
              tasks:
                - "Shortlist three dates clear of closed periods and conferences"
                - "Draft the message architecture with the CEO"
                - "Book two timed rehearsals for every presenter"
                - "Collect attendee feedback through brokers within a week"
            - name: Non-deal roadshow to a new financial centre
              description: |-
                ## Purpose
                Most companies meet the same holders in the same two cities every year, and the base never widens. A non-deal roadshow to a financial centre where peers have holders and the company has few gives targeted funds a reason to start work, provided the meetings are with people who make decisions.

                ## Milestones
                1. A city chosen from peer ownership data, with ten target institutions named.
                2. A broker appointed and at least eight meetings confirmed with decision makers.
                3. A presentation adapted for investors new to the company.
                4. Follow-up sent to every institution met and feedback logged.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A roadshow to a new city delivers at least eight meetings with target institutions, each followed up within a week."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Pick the city with the most peer holders who do not own the stock"
                - "Name ten target institutions for the trip"
                - "Brief the broker on which decision makers to book"
                - "Send follow-up notes to every institution within a week"
            - name: Investor conference season plan
              description: |-
                ## Purpose
                Broker conferences offer many meetings for one day of executive time, but invitations arrive in a flood and the wrong choices fill diaries with investors who will never buy. A season plan choosing which conferences to attend, by audience quality and sector relevance, and who goes to each, turns the circuit into part of the targeting programme.

                ## Milestones
                1. Every conference invitation for the year listed with sponsor, audience and dates.
                2. A shortlist chosen against target coverage and closed periods.
                3. An executive or IR attendee agreed for each chosen conference.
                4. Meeting lists checked against targets before each event.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly conference plan is agreed, and at least half the meetings at each attended conference are with holders or targets."
                cadence: cyclic
              tasks:
                - "List every conference invitation with dates and sponsor"
                - "Score each conference on audience quality and sector fit"
                - "Agree who attends each chosen conference"
                - "Check the meeting list against targets two weeks before each event"
            - name: Investor and analyst site visit
              description: |-
                ## Purpose
                Seeing a plant, distribution centre or laboratory often does more for understanding than a dozen slide decks, and it introduces investors to operational managers they rarely meet. A small, well-run visit for 10 to 20 holders and targets needs careful safety, logistics and disclosure planning so nothing new is said on the shop floor.

                ## Milestones
                1. A site chosen that shows the equity story, with operations agreeing a date.
                2. A safety briefing and visitor rules agreed with the site manager.
                3. Site managers briefed on what they can and cannot discuss.
                4. A guest list of 10 to 20 holders and targets confirmed.
                5. Any slides shown on the day published to the market beforehand.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A site visit for at least ten holders and targets is held with a safety briefing, briefed site managers and pre-published materials."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Ask the operations director which site best shows the strategy"
                - "Agree safety rules and visitor numbers with the site manager"
                - "Brief site managers on the never-discuss list"
                - "Publish any presentation shown on the day before the visit"
            - name: Pre-AGM governance roadshow with stewardship teams
              description: |-
                ## Purpose
                Stewardship and voting teams at large funds often decide separately from the portfolio managers IR meets, and proxy adviser recommendations can swing a vote. Meeting the governance teams of the top holders with the chair, months before the AGM, surfaces concerns on pay, board composition or resolutions while there is still time to respond.

                ## Milestones
                1. Stewardship contacts identified for the top 20 holders.
                2. Meetings held between the chair or committee chairs and at least ten governance teams.
                3. Concerns on pay, board composition and resolutions logged by holder.
                4. A note to the board on the likely voting outcome and possible responses.

                ## Notes
                Keep these meetings to governance and published information. Notices, proxies and the running of the AGM itself sit with the company secretary's meeting plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least ten top-holder governance teams are met before the AGM notice goes out, with concerns logged and a voting outlook sent to the board."
                cadence: cyclic
              tasks:
                - "Find the stewardship contact at each of the top 20 holders"
                - "Ask the chair which committee chairs should join the meetings"
                - "Log governance concerns against each holder"
                - "Send the board a note on the likely voting outcome"
            - name: Material transaction announcement day
              description: |-
                ## Purpose
                An acquisition, disposal or major contract announcement compresses months of confidential work into a single morning, with investors, analysts, employees and press all wanting answers at once. A plan prepared while the deal is still private, covering the release, presentation, holder calls and a question bank, means IR is ready the moment the announcement crosses the wire.

                ## Milestones
                1. IR added to the insider list early enough to prepare.
                2. Announcement materials and a holder call list ready before signing.
                3. A question bank on rationale, price, financing and risks cleared by advisers.
                4. Calls to the top 20 holders made on the day.
                5. Investor reaction gathered and reported to the board within a week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On announcement day, materials go out through the regulatory channel and the top 20 holders are contacted the same day."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree with the deal team when IR joins the insider list"
                - "Prepare a holder call list ranked by position size"
                - "Draft the investor question bank for adviser review"
                - "Report investor reaction to the board within a week"
            - name: First year after listing
              description: |-
                ## Purpose
                The year after an IPO is when a company learns whether its new holders stay, and when the first results, the first AGM and the end of lock-ups all arrive. A first-year plan built around those dates and the obligations the company has never met before keeps a newly listed team from learning every rule the hard way.

                ## Milestones
                1. Every first-year date on one plan: first results, first AGM, lock-up expiries and index eligibility.
                2. The IPO allocation compared with the register three and six months after listing.
                3. A post-listing meeting programme run with the top 20 holders.
                4. A first-year review written with lessons for year two.

                ## Notes
                Lock-up expiries often bring large sales by early holders. Talk to the corporate broker about likely demand well before each date.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first-year plan with every key date exists, the register is compared with the IPO allocation at three and six months and a year-one review is written."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List first results, first AGM, lock-up expiries and index dates"
                - "Compare the IPO allocation with the register at three months"
                - "Book first-year meetings with the top 20 holders"
                - "Write a first-year review with lessons for year two"
            - name: One-person IR function at a smaller listed company
              description: |-
                ## Purpose
                At a smaller listed company, investor relations is often one person or a CFO with a few hours a week, and a large cap's full programme is simply out of reach. A pared-down plan choosing the handful of activities that move the register most, with outside help for the rest, makes a small budget and a crowded diary go further.

                ## Milestones
                1. Activities ranked by impact against hours, with the bottom third dropped.
                2. A fixed weekly IR block in the diary.
                3. Outsourced support chosen for register analysis or events if the budget allows.
                4. A one-page yearly plan the CFO can follow.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page yearly IR plan with a ranked activity list and a weekly diary block is agreed with the CFO."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every IR activity done last year with the hours it took"
                - "Rank activities by impact on the register against hours"
                - "Block a fixed half-day each week for investor relations"
                - "Write the one-page plan for the CFO"
            - name: First 90 days as a new head of investor relations
              description: |-
                ## Purpose
                New heads of IR inherit relationships, promises and grudges they cannot see in any file. A 90-day plan of listening to the top holders, covering analysts, brokers, the chair and the finance team, before changing anything, builds credibility and surfaces the issues the previous incumbent never wrote down.

                ## Milestones
                1. Meetings held with the CEO, CFO, chair, company secretary and financial controller in the first 30 days.
                2. Introductory calls with the top 15 holders and covering analysts by day 60.
                3. A list of inherited commitments and open issues.
                4. A 90-day findings paper with priorities agreed with the CFO.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 90-day findings paper, based on meetings with executives, the chair, the top 15 holders and covering analysts, is agreed with the CFO."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Book first-month meetings with the CEO, CFO, chair and company secretary"
                - "List the top 15 holders and covering analysts to call by day 60"
                - "Record every inherited commitment and open issue"
                - "Agree the 90-day priorities with the CFO"
            - name: Profit warning and unscheduled disclosure readiness
              description: |-
                ## Purpose
                When trading falls materially short of market expectations, many regimes require prompt disclosure, and the worst profit warnings are the late and vague ones. Preparing now, with a reliable consensus figure, a trigger process with finance, a skeleton announcement and a holder call plan, means bad news is told once, fully and fast.

                ## Milestones
                1. A process for finance to flag forecast variance against consensus to the disclosure committee.
                2. A consensus record kept current, with its sources documented.
                3. A skeleton announcement and investor call plan prepared.
                4. A rehearsal run with the CFO and counsel.

                ## Notes
                Whether a shortfall is inside information is a legal judgement made with counsel. IR's part is a trustworthy consensus figure and a plan that is ready to use.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A variance trigger process, a current consensus record, a skeleton announcement and a holder call plan exist and have been rehearsed once."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Agree with finance how forecast variance against consensus is flagged"
                - "Document how the consensus figure is gathered and from whom"
                - "Draft a skeleton unscheduled announcement and holder call plan"
                - "Rehearse the process with the CFO and counsel"
            - name: Executive succession messaging to shareholders
              description: |-
                ## Purpose
                Few announcements move a share price like the departure of a CEO or CFO, and investors judge the board on how orderly it looks. Preparing holding lines, an announcement framework and a call plan for both planned and sudden departures lets the chair speak to top holders within hours.

                ## Milestones
                1. Holding statements for a planned and an unplanned departure, cleared by counsel.
                2. A call plan for the chair to reach the top 20 holders on the day.
                3. Interim arrangements described in a form ready to announce.
                4. The plan stored with the company secretary.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Counsel-cleared holding statements and a chair call plan for planned and unplanned departures are filed with the company secretary."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the company secretary for the board's succession contingency arrangements"
                - "Draft holding statements for planned and sudden departures"
                - "Prepare a chair call plan for the top 20 holders"
                - "File the finished plan with the company secretary"
            - name: Retail and employee shareholder programme
              description: |-
                ## Purpose
                Retail investors and employees who hold shares can make up a meaningful part of the register, yet they get none of the access institutions take for granted. A modest programme of a clear enquiry route, a plain-language summary after results and one retail-friendly event a year treats them fairly and builds a loyal base.

                ## Milestones
                1. Retail and employee holdings measured from the register and share plan records.
                2. A named enquiry route with a two-working-day response standard.
                3. A plain-language results summary issued after each results announcement.
                4. One retail or employee investor event held in the year.

                ## Notes
                Retail holders must receive the same information as institutions at the same time. The programme is about access and plain language, never extra detail.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Retail enquiries are answered within two working days and a plain-language summary follows each results announcement."
                cadence: rolling
              tasks:
                - "Measure retail and employee holdings from the register and share plan"
                - "Set up a named enquiry inbox with a two-day response standard"
                - "Review the retail enquiry log for repeated questions @recurring(monthly:25)"
                - "Plan one retail or employee investor event for the year"
            - name: Activist investor preparedness
              description: |-
                ## Purpose
                Activists look for a gap between share price and potential, weak governance or a scattered register, and they usually arrive after months of quiet buying. An honest vulnerability review, a response team with advisers, and early warning from register monitoring mean the board hears of an approach from its own monitoring rather than the newspaper.

                ## Milestones
                1. A vulnerability review of performance, governance, capital allocation and register against peers.
                2. A response team with named advisers and a first 48-hour plan.
                3. Register monitoring thresholds that trigger an alert.
                4. A board briefing on vulnerabilities and the response plan.

                ## Notes
                Start from the **Risk register** template. Engaging constructively with a holder who raises concerns usually works better than treating every question as an attack.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The board has been briefed on a written vulnerability review and a response plan with named advisers and monitoring triggers."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Score the company against peers on performance, governance and capital use"
                - "Name the response team and outside advisers"
                - "Set register monitoring thresholds that trigger an alert"
                - "Repeat the activist vulnerability screen against peers @recurring(quarterly)"
            - name: Unsolicited approach and bid response readiness
              description: |-
                ## Purpose
                An unsolicited takeover approach can put the company under takeover rules, strict timetables and intense investor attention from day one, and IR is central to telling shareholders the board's view. A readiness file covering advisers, leak protocol, shareholder analysis and communication duties, prepared with counsel, lets the board respond within the rules rather than learning them under pressure.

                ## Milestones
                1. The takeover rules and timetables for the company's market summarised by counsel.
                2. Financial adviser and broker roles agreed in principle.
                3. A shareholder analysis showing which holders would decide a bid outcome.
                4. A first-day communication plan and leak protocol filed.

                ## Notes
                Takeover regimes such as the UK Takeover Code impose strict rules on what can be said and when. Every external statement during an offer period goes through advisers.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A bid readiness file with counsel's rules summary, adviser roles, decisive holder analysis and a day-one plan is filed with the company secretary."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask counsel for a summary of the takeover rules that apply"
                - "Agree in principle which advisers the board would call"
                - "Identify the holders who would decide a bid outcome"
                - "Draft a day-one communication plan and leak protocol"
            - name: Debt investor and credit rating agency relations
              description: |-
                ## Purpose
                Companies with listed bonds or a credit rating have a second investor audience that cares about cash flow, debt terms and the downside, not growth. A small programme of rating agency reviews, bondholder updates and consistency between equity and credit messages avoids telling the two markets different stories.

                ## Milestones
                1. Listed bonds, ratings and covenant reporting dates mapped with treasury.
                2. The yearly rating agency meeting prepared jointly with treasury.
                3. Credit messages checked for consistency with the equity story.
                4. Bondholders included in the investor calendar and contact system.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rating review and bond reporting date is on the investor calendar, and credit messages are checked against the equity story each year."
                cadence: cyclic
              tasks:
                - "Ask treasury for all listed bonds, ratings and reporting dates"
                - "Add rating reviews and bond reporting dates to the investor calendar"
                - "Prepare the rating agency review pack with treasury @recurring(yearly)"
                - "Compare credit and equity messages for contradictions"
            - name: Dual listing investor coverage
              description: |-
                ## Purpose
                Listing in two markets means two sets of rules, two investor communities and often two sets of trading hours to cover, and the second listing can quietly wither. A plan that maps disclosure duties across both venues, measures where trading and holders sit, and allocates meetings accordingly keeps both listings working.

                ## Milestones
                1. Disclosure and filing duties on both venues mapped, with simultaneous release confirmed.
                2. Trading volume and holders split by venue.
                3. Meeting allocation across both markets agreed.
                4. A view on whether the second listing still earns its cost.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A map of obligations, holders and trading by venue, with a view on the second listing's value, is presented to the CFO."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Map disclosure and filing duties on both venues with counsel"
                - "Split trading volume and holders by venue"
                - "Agree how meetings are shared between the two markets"
                - "Write a view on whether the second listing earns its cost"
            - name: Investor relations programme effectiveness review
              description: |-
                ## Purpose
                After two or three years an IR programme can run on habit: the same cities, the same brokers and the same messages. A yearly review against the charter objectives, using register change, target conversion, perception feedback and cost per meeting, shows what to keep, cut and start next year.

                ## Milestones
                1. Results against each charter objective scored.
                2. Target conversion rate and cost per meeting calculated.
                3. Practice compared with the IR programmes of two peers.
                4. Keep, cut and start lists agreed with the CFO.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly effectiveness review scoring charter objectives, target conversion and cost per meeting produces keep, cut and start lists agreed with the CFO."
                cadence: cyclic
              tasks:
                - "Score last year's results against each charter objective"
                - "Calculate target conversion and cost per meeting"
                - "Compare the programme with two peers' published IR practice"
                - "Run the IR effectiveness review with the CFO @recurring(yearly)"
---

# Public Company Investor Relations

This area is for heads of investor relations, CFOs and IR managers at listed companies who run the conversation between the business and its shareholders. It starts with the foundations (a charter, an ownership baseline, the disclosure policy, insider lists, spokesperson rules, the equity story and the investor calendar), then the routines that keep the programme running, the knowledge behind good judgement, policy and provider decisions, the dated events from capital markets days to transaction announcements, situations such as the first year after listing or a profit warning, and finally specialist work on activism, bids, credit investors and dual listings.

What repeats is a weekly trading and register check, a weekly watch on holding notifications and a weekly sweep of inbound requests, monthly reports to the executive committee with feedback themes and target list refreshes, a quarterly board paper, insider list audit and closed period check, and a yearly calendar roll-forward, budget, broker scorecard and effectiveness review. The Compliance control, Feedback themes, Purchase decision, Vendor, Onboarding 30/60/90 and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
