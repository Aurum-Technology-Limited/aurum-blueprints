---
id: fundraising-investors.corporate-venture-investors
name: Corporate Venture Investors
description: "Raising from corporate venture arms and strategic investors: conflict maps, information red lines, business unit sponsors, sale rights, fair commercial terms and the routines that keep a strategic shareholder useful."
category: business
version: 1.0.0
tags: [fundraising-investors, corporate-venture-investors, founder, manager, corporate-venture-capital, strategic-investors, information-rights, commercial-partnerships]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - person
    - meeting-notes
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Corporate Venture Investors
          description: "Raising from corporate venture arms and strategic investors, weighing strategic benefits against conflicts and information rights."
          projects:
            - name: Deciding whether corporate money belongs in this round
              description: |-
                ## Purpose
                Corporate venture arms can bring a customer, a distribution channel or a future acquirer, but their money also tells every rival of that corporate which side you are on. Before any meeting, decide what a strategic investor would add that a financial fund cannot, how much of the round it could take and which customers or acquirers you might lose by accepting, so outreach starts with a clear purpose.

                ## Milestones
                1. The strategic benefit you expect written in one sentence per corporate category, such as distribution, supply or credibility with buyers.
                2. A ceiling set on the share of the round any single corporate may take.
                3. Customers, partners and possible acquirers who could react badly to a corporate shareholder listed.
                4. A go, wait or no decision recorded and agreed by the founders and any lead investor.

                ## Notes
                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note records whether to approach corporate investors this round, the maximum allocation and the relationships at risk, agreed by the founding team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence on what a corporate could do for the company that a fund cannot"
                - "List the five customers or partners most likely to object to a rival's shareholding"
                - "Set the largest share of the round you would give to a single corporate"
                - "Agree the decision with your co-founders and your lead investor"
            - name: Venture arms, balance-sheet deals and strategic partners compared
              description: |-
                ## Purpose
                Money from a corporate arrives in several forms: a dedicated venture fund with its own partners and returns target, a direct investment from the balance sheet led by corporate development, a commercial partner taking equity alongside a contract, or an independent fund with one corporate as its only limited partner. Each decides differently, moves at a different speed and wants different rights, so knowing which one you are talking to changes how you pitch and what you negotiate.

                ## Milestones
                1. Four corporate investor structures described in a short note, with who decides and typical speed for each.
                2. Each corporate on your list labelled with the structure it uses.
                3. The questions that reveal the structure written down for first calls.
                4. Implications for rights and follow-on money noted for each structure.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every corporate on the target list is labelled by investment structure, with a note on who approves deals and how fast."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the investment pages of five corporates in your market and note how each invests"
                - "Label each corporate as venture fund, balance sheet, partner equity or single-LP fund"
                - "Write three first-call questions that reveal who approves the investment"
                - "Note which structures usually reserve money for follow-on rounds"
            - name: Corporate investor tracker
              description: |-
                ## Purpose
                Strategic conversations run on two tracks at once, with the venture team and with the business unit, and they stall for months around budget cycles and reorganisations. A tracker holding both contacts, the stage on each track, the last touch and the next step stops a promising corporate going cold because nobody noticed the business sponsor stopped replying.

                ## Milestones
                1. A tracker with columns for corporate, venture contact, business sponsor, structure, stage, last touch and next step.
                2. Every corporate currently in conversation entered with both tracks filled in.
                3. Fiscal year end and budget cycle noted for each corporate.
                4. The tracker reviewed and updated within the last week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker lists every active corporate conversation with both the venture and business unit contacts, stage and next step dated within seven days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the tracker with separate columns for the venture and business unit tracks"
                - "Enter every corporate you have spoken to in the last six months"
                - "Add each corporate's fiscal year end and budget approval month"
                - "Mark the next step and its owner for each live conversation"
            - name: Map of corporates investing in your market
              description: |-
                ## Purpose
                Most sectors have a dozen or more corporates with venture arms or strategic investment teams, from the obvious incumbents to suppliers, channel partners and companies in adjacent industries. A ranked map of who invests, at what stage, in which themes and with which recent deals shows where a strategic cheque is plausible and where you would be one of several competing portfolio companies.

                ## Milestones
                1. At least fifteen corporates with active investing in your market listed with their investing vehicle.
                2. Recent deals, stages and stated themes noted for each.
                3. Existing portfolio companies that compete with you flagged.
                4. A top ten ranked by strategic fit, likely stage and conflict risk.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked list of at least fifteen corporate investors, each with recent deals, themes and competing portfolio companies, with a top ten marked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search deal databases and press releases for corporate investors in your sector"
                - "Record each corporate's last three deals, stage and theme"
                - "Flag any corporate already backing a direct competitor"
                - "Rank the top ten by fit and conflict risk"
                - "Refresh the map with the past year's corporate deals @recurring(yearly)"
            - name: Customer, competitor and acquirer conflict map
              description: |-
                ## Purpose
                A shareholding from one corporate can quietly cost you deals with its rivals, who may assume their data or roadmap will leak, and it can narrow the field of buyers when you eventually sell. Writing down, corporate by corporate, which customers, partners and acquirers would see each one as a threat turns a vague worry into a risk you can price and discuss with your board.

                ## Milestones
                1. Each shortlisted corporate listed against its direct competitors among your customers and partners.
                2. Revenue or pipeline at risk estimated for each corporate if it became a shareholder.
                3. Likely acquirers who would be put off by each corporate named.
                4. A risk rating and mitigation, such as no board seat or an information firewall, recorded per corporate.

                ## Notes
                Start from the **Risk register** template. Ask two trusted customers directly how they would react; the answer is often milder or harsher than you expect.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A conflict register rates every shortlisted corporate for customer, partner and acquirer risk, with pipeline at risk estimated and a mitigation named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the main competitors of each corporate on your shortlist"
                - "Match them against your current customers, pipeline and partners"
                - "Ask two trusted customers how a rival's shareholding would affect them"
                - "Rate each corporate and write one mitigation beside it"
                - "Revisit the conflict register before each new round or major customer deal @recurring(yearly)"
            - name: Information rights red lines for corporate investors
              description: |-
                ## Purpose
                A corporate shareholder may sit in the same market as you, and anything shared in board papers, data rooms or monthly reports can reach the business unit that competes with or buys from you. Deciding before the first meeting which categories of information a strategic investor will never receive, such as customer lists, pricing, roadmap detail and technical know-how, lets you hold the line consistently when the term sheet arrives.

                ## Milestones
                1. Categories of information that will not go to a corporate investor written down.
                2. Categories it can receive, and at what level of detail, agreed by the founders.
                3. A standard clause or side letter position drafted with your lawyer.
                4. Data room access levels set so corporate reviewers see only the agreed folders.

                ## Notes
                Ask your lawyer about a competitively sensitive information carve-out in the information rights clause; many corporate investors expect one and some require it under their own policies.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of withheld and permitted information categories for corporate investors exists, reviewed by your lawyer and reflected in data room permissions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the information a competitor would most want from your company"
                - "Mark each item as never shared, summary only or shared in full"
                - "Ask your lawyer for a sensitive information carve-out clause"
                - "Set data room permissions to match the list before any corporate review"
            - name: Finding the business unit sponsor inside each corporate
              description: |-
                ## Purpose
                Corporate venture teams rarely invest without a business unit that wants the startup to succeed, and a deal with no internal sponsor tends to stall at the investment committee or produce no commercial value afterwards. Identifying the executive whose targets your product helps, and getting them to say so to the venture team, is often the real gate to a strategic cheque.

                ## Milestones
                1. For each priority corporate, the business unit most likely to benefit named.
                2. A senior sponsor in that unit identified and met.
                3. The sponsor's own targets that your product supports written down.
                4. The sponsor's support confirmed to the venture team in writing or on a call.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each of the top five corporates has a named business unit sponsor whose support has been confirmed to its venture team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the venture contact which business unit would sponsor an investment"
                - "Find the executive who owns the budget or target your product affects"
                - "Prepare a one-page note on how you help that executive's numbers"
                - "Ask the sponsor to confirm their support to the venture team"
            - name: Separating the commercial deal from the investment
              description: |-
                ## Purpose
                Corporates often want to bundle a supply, licence or distribution agreement with the equity, and a bad commercial term signed to win the investment can outlast the cheque by years. Deciding early whether the two run in parallel, in sequence or completely apart, and on what terms each stands alone, keeps the commercial contract fair and the investment clean.

                ## Milestones
                1. A decision recorded on whether the commercial agreement and investment are linked, sequenced or independent.
                2. Commercial terms you would accept from any customer of this size written down as the benchmark.
                3. Conditions that would make the investment depend on the contract, or the reverse, identified and accepted or rejected.
                4. Separate negotiation leads and advisers named for each document.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written position sets how the commercial agreement and investment relate, with benchmark commercial terms and named owners for each negotiation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the commercial terms you would give any customer of this size"
                - "Decide whether the contract signs before, with or after the investment"
                - "Name who leads the commercial talks and who leads the investment talks"
                - "Ask your lawyer to flag any clause linking the two documents"
            - name: Strategic value asks written as measurable commitments
              description: |-
                ## Purpose
                Introductions, pilots, distribution and technical support are routinely promised by corporate investors, and just as routinely the promise fades once the money lands. Turning each hoped-for benefit into a specific, dated ask with a named owner on the corporate side gives you something to agree at signing and something to check against a year later.

                ## Milestones
                1. Three to five strategic benefits written as specific asks with numbers and dates.
                2. A named owner inside the corporate proposed for each ask.
                3. The asks discussed with the venture team before the term sheet.
                4. Agreed asks recorded in a side letter, the commercial agreement or a written plan.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of three to five dated strategic commitments, each with a named corporate owner, is agreed with the investor before closing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what you hope each corporate will do beyond investing"
                - "Rewrite each hope as an ask with a number, a date and an owner"
                - "Ask the agent to draft a short strategic value plan from the list"
                - "Agree the plan with the venture team before signing"
            - name: Weekly corporate investor pipeline review
              description: |-
                ## Purpose
                Strategic processes drag, and a raise can lose a month because a business sponsor went on leave or an investment committee date slipped without anyone noticing. A thirty-minute weekly review of each corporate's stage on both tracks, with one next step per corporate, keeps them moving at the pace of the round rather than the pace of the corporate calendar.

                ## Milestones
                1. A fixed weekly slot for the review while the raise is live.
                2. Each corporate's stage and next step updated in the tracker every week.
                3. Corporates that have not moved in three weeks flagged and chased or deprioritised.
                4. Expected investment committee dates checked against the round's close date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During a live raise, the tracker shows a weekly update for every corporate conversation, with stalled ones flagged after three weeks."
                cadence: rolling
              tasks:
                - "Book a thirty-minute weekly slot for the corporate pipeline"
                - "Update each corporate's stage and next step in the tracker @recurring(weekly:tue)"
                - "Flag any corporate with no movement for three weeks"
                - "Compare expected committee dates with the target close date"
            - name: Monthly sync with the venture partner and business sponsor
              description: |-
                ## Purpose
                After closing, the venture partner and the business sponsor often talk to each other less than either talks to you, and the commercial side drifts while the investment side assumes all is well. A short monthly call with both, covering the agreed commitments, open introductions and what you need next, keeps the corporate's two halves pointed at the same plan.

                ## Milestones
                1. A standing monthly call with both corporate contacts in the calendar.
                2. A short agenda covering commitments, introductions and next asks.
                3. Notes and actions sent to both within a day of each call.
                4. Six consecutive monthly syncs held.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly calls held with both the venture partner and business sponsor, each with notes and actions circulated within a day."
                cadence: rolling
              tasks:
                - "Invite the venture partner and business sponsor to a standing monthly call"
                - "Prepare a three-item agenda of commitments, introductions and asks @recurring(monthly:12)"
                - "Send notes and owners to both contacts the same day"
            - name: Quarterly strategic value scorecard
              description: |-
                ## Purpose
                Whether a corporate shareholder is helping is easy to argue about and hard to show. A quarterly scorecard of the agreed commitments, introductions made, pilots started, revenue from the corporate and its channels, and the cost of the relationship gives the board and the corporate the same facts to discuss.

                ## Milestones
                1. Scorecard metrics chosen from the agreed strategic commitments.
                2. Baseline figures recorded for the quarter of closing.
                3. Four quarterly scorecards completed and shared with the corporate.
                4. Any commitment that has missed two quarters raised with the venture partner.

                ## Notes
                Start from the **Metrics log** template. Count cost as well as benefit: staff time on corporate requests and deals lost to its rivals belong on the scorecard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly scorecards track agreed commitments, revenue and costs of the corporate relationship, each shared with the investor."
                cadence: rolling
              tasks:
                - "Create the scorecard with one row per agreed commitment"
                - "Record the baseline for introductions, pilots and revenue at closing"
                - "Fill in the quarter's figures and send the scorecard to the corporate @recurring(quarterly)"
                - "Raise any commitment missed for two quarters with the venture partner"
            - name: Confidential information log for corporate shareholders
              description: |-
                ## Purpose
                Once a corporate is on the cap table, information leaks through ordinary channels: a product demo for the business unit, a pricing question in a pilot, a forwarded board deck. Logging what was shared with each corporate, when and by whom, shows whether your red lines are holding and gives you a record if a dispute or competition question ever arises.

                ## Milestones
                1. A log with date, corporate, recipient, information category and who shared it.
                2. Everyone in the company who deals with the corporate told what to record.
                3. A monthly check of the log against the agreed red lines.
                4. Any breach of the red lines raised with the venture partner in writing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sharing log covers every disclosure to corporate shareholders, checked monthly against the agreed red lines, with any breach raised in writing."
                cadence: rolling
              tasks:
                - "Set up a sharing log with date, recipient and information category"
                - "Brief staff who work with the corporate on what to record"
                - "Check the month's entries against the information red lines @recurring(monthly:19)"
                - "Write to the venture partner about any breach within a week"
            - name: Board observer protocol for a strategic investor
              description: |-
                ## Purpose
                A corporate observer in the board room is usually welcome until the agenda reaches a competing bid, a partnership with the observer's rival or a sale process. A written protocol for when the observer leaves the room, and which board papers go out in a redacted version, saves an awkward conversation every quarter and protects directors from conflicts.

                ## Milestones
                1. Topics that require the observer to step out listed and agreed with the board.
                2. A redacted board pack prepared for the observer each meeting.
                3. Minutes showing when the observer left and returned.
                4. The protocol reviewed with the observer at least once a year.

                ## Notes
                Agree the protocol before the first board meeting, not in the middle of a sensitive one. Your lawyer can check it against the observer clause in the shareholder documents.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written observer protocol is agreed with the board, and every board meeting has a redacted observer pack and minuted step-outs where needed."
                cadence: rolling
              tasks:
                - "List board topics the corporate observer should not attend"
                - "Ask your lawyer to check the list against the observer clause"
                - "Prepare the redacted observer pack before each board meeting @recurring(quarterly)"
                - "Minute each time the observer leaves and rejoins the meeting"
            - name: Relationship continuity file for corporate partner turnover
              description: |-
                ## Purpose
                Corporate venture partners and business sponsors often move roles every two or three years, and the replacement inherits a portfolio they did not choose. A short file per corporate with the history, commitments, contacts and wins, plus a second relationship at a more senior level, means a staff change costs you a meeting rather than a year.

                ## Milestones
                1. A record for each corporate shareholder with history, agreed commitments and key contacts.
                2. At least two relationships per corporate, one above the day-to-day contact.
                3. A one-page handover brief ready to send to any new contact.
                4. Contacts checked each quarter for role changes.

                ## Notes
                Start from the **Person** template for each key corporate contact.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every corporate shareholder has an up-to-date record, two named relationships and a one-page handover brief ready for a new contact."
                cadence: rolling
              tasks:
                - "Create a record for each corporate contact from the person template"
                - "Write a one-page handover brief per corporate shareholder"
                - "Ask your main contact to introduce you to their manager"
                - "Check each corporate contact's role and title for changes @recurring(quarterly)"
            - name: Watching the parent company's strategy and results
              description: |-
                ## Purpose
                Your corporate investor's behaviour follows its parent: a profit warning, a new chief executive or a strategy refresh can freeze follow-ons, change the business sponsor or end the venture programme. Reading the parent's results and announcements each quarter gives you warning months before the venture team says anything.

                ## Milestones
                1. Results dates and investor relations pages for each corporate shareholder noted.
                2. A one-paragraph summary written after each set of results.
                3. Changes in strategy, leadership or cost programmes that affect you flagged.
                4. Any flagged change discussed with the venture partner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated summary of the parent's results exists for each of the last four quarters, with any change affecting the company flagged and discussed."
                cadence: rolling
              tasks:
                - "Note the results dates of each corporate shareholder's parent"
                - "Read the parent's results and write a one-paragraph summary @recurring(quarterly)"
                - "Ask the venture partner how any strategy change affects the programme"
            - name: Annual review of each corporate shareholder relationship
              description: |-
                ## Purpose
                Once a year, step back from the monthly calls and ask whether each corporate shareholder is worth what it costs: the commercial value delivered, the deals lost to its rivals, the time spent on its requests and its likely behaviour in the next round. A written review lets the board decide whether to deepen, hold or quietly wind down the strategic relationship.

                ## Milestones
                1. Four quarterly scorecards and the conflict register gathered for the year.
                2. A one-page review per corporate covering value, cost and next-round intentions.
                3. The corporate's follow-on intention for the next round asked and recorded.
                4. A deepen, hold or wind down recommendation discussed at the board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly one-page review exists for each corporate shareholder, with a recorded follow-on intention and a board-discussed recommendation."
                cadence: cyclic
              tasks:
                - "Gather the year's scorecards, sharing log and conflict register"
                - "Write the annual review for each corporate shareholder @recurring(yearly)"
                - "Ask each corporate what it expects to do in the next round"
                - "Take the recommendations to the next board meeting"
            - name: Commercial agreement obligations calendar
              description: |-
                ## Purpose
                Strategic investments usually come with a commercial agreement holding minimum volumes, reporting duties, renewal windows, exclusivity periods and price reviews, and a missed notice date can renew a bad term automatically. A calendar of every obligation and notice window, checked monthly, keeps both sides of the contract honest.

                ## Milestones
                1. Every dated obligation and notice window from the commercial agreements listed.
                2. Each obligation given an owner inside the company.
                3. Reminders set ahead of each notice deadline.
                4. A monthly check completed for six months with nothing missed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar lists every obligation and notice date from corporate commercial agreements, with owners named and six monthly checks completed without a miss."
                cadence: rolling
              tasks:
                - "Read each commercial agreement and list every dated obligation"
                - "Assign an owner to each obligation and notice window"
                - "Check the coming month's obligations and notice dates @recurring(monthly:24)"
                - "Set reminders sixty days before every renewal or exclusivity end"
            - name: How corporate venture teams are measured and funded
              description: |-
                ## Purpose
                Behind every corporate venture partner sit targets you rarely see: strategic deals sourced for the business units, financial returns, or both, and a budget that can be cut in a bad year. Learning how these teams are set up and judged explains why some move fast and others need six approvals, and why a pitch that works on a financial fund can fall flat here.

                ## Milestones
                1. Strategic, financial and blended corporate venture mandates summarised.
                2. Typical funding models, from annual budgets to committed funds, understood.
                3. Three questions written that reveal a team's mandate and budget security.
                4. The answers for each priority corporate noted in the tracker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explains strategic, financial and blended mandates and funding models, and each priority corporate's mandate is recorded in the tracker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read two practitioner guides or surveys on corporate venture capital"
                - "Summarise strategic, financial and blended mandates in a short note"
                - "Write three questions that reveal a team's mandate and budget"
                - "Record each priority corporate's answers in the tracker"
            - name: Reading a corporate's annual report for strategic fit
              description: |-
                ## Purpose
                The parent company's annual report and investor presentations state, in public, which markets it wants to grow, which costs it wants to cut and what it has promised shareholders. Learning to pull those priorities out, and to connect your product to one of them in the parent's own words, makes the business case for the sponsor far easier to write.

                ## Milestones
                1. Strategic priorities extracted from the latest annual reports of three target corporates.
                2. Each priority matched to a way your product helps, with a number where possible.
                3. The parent's own phrases reused in the pitch for that corporate.
                4. The analysis refreshed each year when new reports are published.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Strategic priorities from three target corporates' annual reports are matched to the product in writing and reflected in each pitch."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the latest annual report for three target corporates"
                - "Pull out the stated growth priorities and cost targets for each"
                - "Match each priority to how your product helps, with a figure"
                - "Reread the annual reports of target corporates when new ones are published @recurring(yearly)"
            - name: Mapping a corporate's investment approval chain
              description: |-
                ## Purpose
                Even after the venture partner says yes, money can be months away: a business unit sign-off, an investment committee, legal and compliance review, sometimes a board or regional approval, and supplier onboarding for the commercial side. Drawing each corporate's chain, with typical durations and the documents each step needs, lets you sequence the round realistically and spot the steps that can run in parallel.

                ## Milestones
                1. Each approval step for a priority corporate listed in order, with who decides.
                2. Typical time for each step confirmed with the venture contact.
                3. Documents each step needs, such as a business unit letter or compliance forms, listed.
                4. Steps that can run in parallel with the round's legal work marked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An approval chain with steps, deciders, durations and required documents is drawn for each corporate in late-stage talks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the venture contact to walk you through every approval step"
                - "Write down who decides at each step and how long it usually takes"
                - "List the documents each step needs from you"
                - "Mark which steps can run while the round's legal documents are drafted"
            - name: Pitching to the venture team and the business unit at once
              description: |-
                ## Purpose
                The venture team wants to hear about returns, market size and the round; the business unit wants to hear how you solve its problem this year and what it will cost to work with you. Practising one pitch with two clearly separate halves, and a short appendix for the business audience, avoids the common failure of a deck that bores one side and confuses the other.

                ## Milestones
                1. A financial story for the venture team and an operational story for the business unit drafted.
                2. An appendix covering integration effort, pilot plan and references for the business unit.
                3. The pitch rehearsed with someone who has worked inside a large corporate.
                4. Feedback from both audiences recorded after the first two real meetings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-audience pitch with a business unit appendix is rehearsed with a former corporate insider and refined after two real meetings."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Split the pitch into a returns section and an operational section"
                - "Write a business unit appendix on integration, pilot and support"
                - "Rehearse with someone who has worked in a large corporate"
                - "Note what each audience asked after the first two meetings"
            - name: Competition law basics for shared strategic investors
              description: |-
                ## Purpose
                When a corporate investor competes with your customers, or with another of its portfolio companies, information passing through it can raise competition law questions, and some minority stakes need a filing before closing. Learning the basic risks, and the questions to put to your lawyer, keeps the company from discovering them halfway through a deal.

                ## Milestones
                1. The main competition risks of a corporate shareholding, information exchange and filing thresholds, summarised in plain words.
                2. Questions for your lawyer written down for the current round.
                3. Your lawyer's view on whether any filing is needed recorded.
                4. Staff who deal with the corporate briefed on what not to pass on.

                ## Notes
                This is organisational preparation. Whether a filing is needed, such as a merger control notice in the US or the EU, is a question for your competition lawyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain summary of competition risks exists, your lawyer's view on filings for this round is recorded, and relevant staff have been briefed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain-language guide to competition law and minority investments"
                - "List questions on information exchange and filings for your lawyer"
                - "Record your lawyer's view on whether this investment needs a filing"
                - "Brief the staff who work with the corporate on what they must not share"
            - name: Foreign investment screening when the investor is overseas
              description: |-
                ## Purpose
                Many countries now screen foreign investment into companies working on sensitive technology, data, defence, energy or critical infrastructure, and a corporate from another country can trigger a review that delays closing or attaches conditions. Finding out early whether your company is in a screened sector, and what the corporate's own counsel expects, protects the round's timetable.

                ## Milestones
                1. Your company's activities checked against your country's screened sectors with your lawyer.
                2. The corporate investor's nationality and control structure confirmed.
                3. A view recorded on whether a notification is mandatory, voluntary or not needed.
                4. Any filing and review time added to the round timetable.

                ## Notes
                Examples include CFIUS in the US and the National Security and Investment Act regime in the UK, but rules differ by country and change often, so rely on your lawyer, not a summary.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your lawyer's written view on foreign investment screening for each overseas corporate investor is recorded, with any filing time in the round timetable."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the overseas corporate where its parent is based and who controls it"
                - "Ask your lawyer whether your sector is screened for foreign investment"
                - "Record whether a notification is mandatory, voluntary or not needed"
                - "Add any filing and review period to the closing timetable"
            - name: Understanding first refusal, first offer and first look rights
              description: |-
                ## Purpose
                Sale rights are a common corporate request: a right to see, match or bid first if the company is ever sold, known as first refusal, first offer or first negotiation, and the differences sound small but change how other buyers behave. Learning what each one does in a sale process, and which milder forms exist, means you can discuss them calmly when the term sheet arrives.

                ## Milestones
                1. First refusal, first offer, first negotiation and notice rights described in plain words.
                2. The effect of each on other bidders in a sale written down.
                3. Milder alternatives, such as notice only or a short time limit, listed.
                4. Your lawyer's view on what is common at your stage recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language note compares four strategic sale rights, their effect on other bidders and milder alternatives, checked with your lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a law firm's guide to strategic sale rights in venture deals"
                - "Write one paragraph on each right and how it affects other bidders"
                - "List the milder alternatives you could offer instead"
                - "Ask your lawyer which forms are common for companies at your stage"
            - name: Saying no to a right of first refusal on a sale
              description: |-
                ## Purpose
                Giving the corporate a right to match any offer for the company can scare off other bidders, who see little point in doing diligence only to be matched, and it can lower the eventual sale price. Deciding your position in advance, with a prepared counter such as a notice right, lets you protect the exit without losing the investor over a single clause.

                ## Milestones
                1. Your position on sale rights decided: refuse, notice only or a narrow, time-limited form.
                2. A counter-proposal drafted with your lawyer.
                3. The commercial reasons for your position written in two or three sentences for the corporate.
                4. The final agreed wording checked against your position before signing.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written position on corporate sale rights, with a lawyer-drafted counter-proposal, is used in negotiation and the signed wording matches it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide which sale rights, if any, you will accept from a corporate"
                - "Ask your lawyer to draft a notice-only counter-proposal"
                - "Write a short explanation of why the right would hurt the exit"
                - "Check the final documents match the position before signing"
            - name: Board seat, observer seat or no seat for the corporate
              description: |-
                ## Purpose
                Directors appointed by a corporate owe duties to your company but work for a business that may compete with it, buy from it or want to acquire it, while an observer has fewer duties and fewer rights. Deciding the right level of board access before negotiations, based on the conflict map and the size of the investment, avoids handing a seat away under deal pressure.

                ## Milestones
                1. Full seat, observer, information-only and no access compared for each corporate.
                2. A position chosen and linked to the conflict rating and cheque size.
                3. Conditions attached, such as step-out rules or a sunset date, written down.
                4. The position agreed with the lead investor and existing board.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded board access position for each corporate investor, with conditions, is agreed with the lead investor and current board before negotiation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare a seat, an observer role and information-only access for each corporate"
                - "Link the position to the conflict rating and the size of the cheque"
                - "Write the step-out and sunset conditions you would attach"
                - "Agree the position with your lead investor and current board"
            - name: One strategic in the round or several from different sides
              description: |-
                ## Purpose
                Taking one corporate concentrates the benefit and the risk, while two or three from different parts of the value chain, say a supplier, a channel and a customer, can balance each other but multiply the approvals and the conflicts. Comparing the two shapes for this round, before offers arrive, lets you steer allocations instead of accepting whoever commits first.

                ## Milestones
                1. A single-corporate and a multi-corporate version of the round sketched with allocations.
                2. Conflicts between the corporates in the larger version checked.
                3. Extra time and legal cost of each additional corporate estimated.
                4. A preferred shape chosen and shared with the lead investor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between one corporate and several in this round, with allocations, cross-conflicts and extra approval time estimated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the round with one corporate and with two or three"
                - "Check whether the corporates in the larger version compete with each other"
                - "Estimate the extra approval time and legal cost of each additional corporate"
                - "Choose the preferred shape and share it with your lead investor"
            - name: Strategic valuation premium against a clean financial price
              description: |-
                ## Purpose
                Some corporates pay above what a financial investor would, because they value the strategic benefit, and that higher price can become a problem if the next round's investors do not share the view. Weighing the premium against the risk of a later down round, and against the terms that come with it, keeps a generous headline from becoming an expensive one.

                ## Milestones
                1. The corporate's proposed price compared with recent financial investor indications.
                2. The rights and conditions attached to the premium listed.
                3. The next round needed to justify the price modelled with your finance lead.
                4. A decision recorded on whether to accept, trim or restructure the premium.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the corporate's price against financial indications, with the next round modelled and an accept, trim or restructure decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put the corporate's price beside the latest financial investor indications"
                - "List every right or condition that comes with the higher price"
                - "Model the next round needed to hold the valuation with your finance lead"
                - "Record whether you accept, trim or restructure the premium"
            - name: Financial lead first, corporate investor second
              description: |-
                ## Purpose
                Corporates rarely set terms well for a startup: they are slower, their price can mislead the market and some funds hesitate to follow a strategic lead. Deciding whether a financial investor will lead with the corporate following on the same terms, or whether the corporate leads and why, shapes the whole outreach sequence.

                ## Milestones
                1. Lead and follow options for the corporate compared, with the case for each.
                2. A sequencing plan set: which investor is approached to lead and when the corporate is brought in.
                3. The corporate told how the round will be led and asked to confirm it can follow.
                4. The financial lead's view on a corporate participant recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sequencing plan names who leads, when the corporate joins and on whose terms, and both the lead and the corporate have confirmed it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the case for and against a corporate leading this round"
                - "Decide when in the process the corporate will be brought in"
                - "Ask the corporate whether it can follow a financial lead's terms"
                - "Ask the lead investor how it views a corporate in the syndicate"
            - name: Exclusivity and most favoured customer requests
              description: |-
                ## Purpose
                Requests for exclusive supply in a territory, the best price you offer anyone or a ban on working with named rivals are common from strategic investors, and each can quietly cap your market for years. Deciding which, if any, you can grant, for how long, in what scope and in exchange for what volume commitment keeps the commercial upside of the corporate from becoming a ceiling.

                ## Milestones
                1. Every exclusivity, best-price or non-dealing request from the corporate listed.
                2. Revenue at risk from each request estimated over three years.
                3. Acceptable forms decided, such as narrow scope, a time limit or a volume trigger.
                4. Agreed wording checked by your lawyer before signing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each exclusivity or best-price request is answered in writing with scope, duration and volume conditions, with revenue at risk estimated and the wording checked by your lawyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every exclusivity and best-price request in the corporate's drafts"
                - "Estimate the revenue each request could cost over three years"
                - "Decide the narrowest form you could accept for each"
                - "Ask your lawyer to check the agreed wording before signing"
            - name: Intellectual property terms in joint development with an investor
              description: |-
                ## Purpose
                Joint development with a corporate investor raises the question of who owns the improvements, data and know-how produced together, and loose wording can hand over the core of the product. Agreeing with your lawyer what stays yours, what is shared and what the corporate may use, before engineers start working together, protects the asset that both the corporate and later investors are paying for.

                ## Milestones
                1. Your background intellectual property listed and described.
                2. Ownership of joint work, improvements and data decided.
                3. Licence scope for the corporate written down, including field of use and territory.
                4. The terms reviewed by an intellectual property lawyer before work begins.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written intellectual property position for joint work with the corporate, reviewed by a lawyer, is in place before joint development begins."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the technology and data the company owned before the joint work"
                - "Decide who owns improvements and data created together"
                - "Write the licence scope you would give the corporate"
                - "Ask an intellectual property lawyer to review the terms"
            - name: Venture arm durability check
              description: |-
                ## Purpose
                Venture units inside corporates open and close with the parent's strategy, and a unit wound down two years after investing leaves you with a shareholder nobody manages and no follow-on money. Checking how long the unit has existed, whether it has a committed fund, how often its parent has closed such units before and how it reserves for follow-ons tells you how much weight to give its promises.

                ## Milestones
                1. The unit's age, fund structure and team tenure recorded.
                2. Any previous venture unit the parent closed or spun out found.
                3. The unit's follow-on reserve policy asked and noted.
                4. A durability rating added to the tracker for each corporate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each corporate in late-stage talks has a recorded durability rating based on age, fund structure, follow-on policy and the parent's history."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up when each corporate's venture unit was founded and how it is funded"
                - "Search for any earlier venture unit the parent closed or sold"
                - "Ask the venture partner how follow-on money is reserved"
                - "Add a durability rating to the corporate investor tracker"
            - name: Paid pilot with the corporate before the term sheet
              description: |-
                ## Purpose
                Paid pilots with the business unit prove the strategic case in the way investment committees trust most, and they show you what working with the corporate is really like before it owns shares. Setting clear success measures, a fixed duration and a price, rather than a free proof of concept that drifts, turns the pilot into evidence for both the investment and the commercial deal.

                ## Milestones
                1. Pilot scope, success measures, duration and price agreed in writing.
                2. A named business unit owner and weekly contact confirmed.
                3. The pilot delivered and results measured against the agreed measures.
                4. A results summary shared with the business sponsor and the venture team.

                ## Notes
                Avoid unpaid pilots with no end date. A modest fee signals that the business unit has a budget and a real problem.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A paid pilot with agreed measures is completed within its fixed term, and its results summary has reached both the business sponsor and the venture team."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page pilot proposal with measures, duration and price"
                - "Agree the business unit owner and weekly check-in for the pilot"
                - "Measure the results against each agreed success measure"
                - "Send the results summary to the sponsor and the venture team"
            - name: First meeting with a corporate venture team
              description: |-
                ## Purpose
                First meetings with a corporate venture partner are half pitch and half fact-finding: you need their mandate, approval chain, business unit links and portfolio conflicts as much as they need your story. Going in with a short list of questions and leaving with clear notes saves the second meeting from repeating the first.

                ## Milestones
                1. Five questions prepared on mandate, approvals, sponsor, follow-on and conflicts.
                2. A twenty-minute version of the pitch ready, with one business unit slide.
                3. Notes written the same day covering answers, interest and next step.
                4. A follow-up sent within two working days.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notes from the first meeting record the corporate's mandate, approval chain, sponsor and conflicts, and a follow-up was sent within two working days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Prepare five questions on mandate, approvals, sponsor, follow-on and conflicts"
                - "Cut the pitch to twenty minutes with one business unit slide"
                - "Write meeting notes from the template on the same day"
                - "Send the follow-up within two working days"
            - name: Presenting to the corporate investment committee
              description: |-
                ## Purpose
                Some corporates invite the founder to their investment committee, where senior executives from the business units may ask more about integration, competitors and risk than about the round. Preparing with the venture partner, who knows each member's concerns, and with the business sponsor in the room, gives the committee a reason to say yes on the day.

                ## Milestones
                1. Committee members and their likely concerns briefed by the venture partner.
                2. A presentation tailored to the committee, with the business sponsor's support stated.
                3. Answers prepared for the ten hardest questions.
                4. Committee decision and conditions recorded the same week.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The committee presentation is delivered with the business sponsor's support, and the decision and any conditions are recorded within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the venture partner who sits on the committee and what each will ask"
                - "Tailor the presentation and confirm the sponsor will attend or endorse it"
                - "Rehearse answers to the ten hardest committee questions"
                - "Record the committee's decision and conditions the same week"
            - name: Corporate innovation day or startup showcase
              description: |-
                ## Purpose
                Large corporates run innovation days, supplier showcases and startup demo events where business units meet dozens of companies in an afternoon. Choosing the few that reach the right business unit, and arriving with a specific pilot ask instead of a general pitch, turns a crowded day into one or two sponsor conversations.

                ## Milestones
                1. Upcoming corporate innovation events in your sector listed with their business unit audience.
                2. One or two events chosen and applications sent.
                3. A one-sentence pilot ask and a short demo prepared.
                4. Follow-ups sent to every business unit contact within three days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least one corporate innovation event attended with a specific pilot ask, and every business unit contact followed up within three days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List corporate innovation and supplier events in your sector this year"
                - "Apply to the one or two events that reach the right business unit"
                - "Prepare a one-sentence pilot ask and a three-minute demo"
                - "Follow up every business unit contact within three days of the event"
                - "Check corporate innovation event calendars for the coming year @recurring(yearly)"
            - name: Joint announcement of the corporate investment
              description: |-
                ## Purpose
                Corporates have brand, legal and investor relations reviews for any announcement that names them, and a press release can take weeks to clear or be blocked outright. Agreeing early whether to announce, who approves, how the corporate's name and logo may be used and what customers will be told prevents a delayed or contradictory announcement.

                ## Milestones
                1. A decision recorded with the corporate on whether and when to announce.
                2. Approvers on both sides and their lead times confirmed.
                3. Rules for using the corporate's name and logo written down.
                4. The announcement published, or a joint decision not to announce recorded.

                ## Notes
                Listed parents may treat even small investments carefully under their disclosure rules, so expect their investor relations team to have the final word on timing.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A joint announcement is published on an agreed date with approved name and logo use, or a joint decision not to announce is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the corporate whether it wants to announce and who must approve"
                - "Ask the agent to draft a short press release for both approval teams"
                - "Agree in writing how the corporate's name and logo may be used"
                - "Set the announcement date once both sides have approved the text"
            - name: Telling other customers and partners about a strategic investor
              description: |-
                ## Purpose
                Customers who compete with your new shareholder will hear about it, and how they hear it matters more than the news itself. Calling the most sensitive ones before any announcement, explaining the information firewall and offering written assurances where needed, keeps them as customers instead of leaving them to assume the worst.

                ## Milestones
                1. Customers and partners who compete with the investor listed by sensitivity.
                2. A short script explaining the investment and the information protections.
                3. The most sensitive accounts called before the public announcement.
                4. Any request for written assurance answered and filed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every sensitive customer and partner was told about the corporate investment before the announcement, with assurance requests answered in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List customers and partners that compete with the new investor"
                - "Write a short script on the investment and how information is protected"
                - "Call the most sensitive accounts before the announcement goes out"
                - "Answer any request for written assurance and file the reply"
            - name: Founder whose biggest customer wants to invest
              description: |-
                ## Purpose
                When the customer behind a large share of revenue offers to invest, the offer is flattering and hard to refuse, but it can deepen dependence, discourage its rivals and tilt future pricing talks. Founders in this position need to separate the customer relationship from the shareholder one, test the offer against alternatives and plan how to reduce concentration whatever they decide.

                ## Milestones
                1. The customer's share of revenue and pipeline stated plainly.
                2. The offer compared with at least one financial alternative.
                3. Effects on pricing, renewal and other customers written down.
                4. A plan to reduce customer concentration over two years drafted, whether or not you accept.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the customer's investment offer, compared with a financial alternative, sits alongside a two-year concentration reduction plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate the customer's share of revenue and pipeline"
                - "Get at least one financial investor's view on the same round"
                - "Write how the investment could affect pricing and renewals"
                - "Draft a two-year plan to reduce reliance on the customer"
            - name: Strategic investor relations for a partnerships or finance manager
              description: |-
                ## Purpose
                In many startups the day-to-day corporate investor relationship falls to a head of partnerships, corporate development or finance rather than the founder, and without a clear brief they become a messenger with no authority. Writing down what the manager owns, what goes to the founder and a monthly internal summary lets the founder spend time on the corporate only when it matters.

                ## Milestones
                1. A written split of responsibilities between the manager and the founder.
                2. The manager introduced to both the venture partner and business sponsor as the main contact.
                3. A monthly internal summary of every corporate shareholder sent to the founder.
                4. Escalation rules agreed for when the founder must step in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written responsibilities split and escalation rules are in place, and the manager has sent six monthly corporate shareholder summaries to the founder."
                cadence: rolling
              tasks:
                - "Write which corporate decisions the manager owns and which go to the founder"
                - "Introduce the manager to each venture partner and business sponsor"
                - "Send the founder a one-page summary of each corporate shareholder @recurring(monthly:6)"
                - "Agree the situations where the founder must step in"
            - name: Corporate spinout with the parent as a shareholder
              description: |-
                ## Purpose
                Founders spinning a team or technology out of a corporate often start with the former parent holding a large stake, a licence back and transition services, and outside investors will look hard at all three. Planning how the parent's ownership, rights and services will change over the next rounds makes the company fundable as an independent business.

                ## Milestones
                1. The parent's stake, rights and licence terms summarised on one page.
                2. Transition services listed with end dates and costs.
                3. A target for the parent's ownership and rights at the next round agreed with outside advisers.
                4. The parent's position discussed with prospective lead investors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary of the parent's stake, rights, licence and transition services exists, with a target position for the next round agreed with advisers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the parent's stake, rights and licence on one page"
                - "List transition services with end dates and monthly costs"
                - "Agree with advisers what parent ownership outside investors will accept"
                - "Review the parent's stake, licence and service end dates with the board @recurring(yearly)"
            - name: Deep tech founder raising from industrial corporates
              description: |-
                ## Purpose
                Hardware, materials, energy and industrial technology companies often need corporates as investors, customers and manufacturing partners at once, and decisions in these industries can take a year or more. Founders here do best running long, patient relationships with a handful of industrial champions, matched to the technical milestones that will make each corporate move.

                ## Milestones
                1. Five industrial corporates chosen where the technology fits a stated programme.
                2. A technical champion and a business sponsor named at each.
                3. Technical milestones each corporate needs to see before investing written down.
                4. A monthly touch with each champion kept for six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five industrial corporates each have a named technical champion, a written milestone list and six months of monthly contact recorded."
                cadence: rolling
              tasks:
                - "Choose five industrial corporates whose stated programmes fit the technology"
                - "Name a technical champion and business sponsor at each"
                - "Write the technical milestones each one needs before it would invest"
                - "Send each champion a short technical progress note @recurring(monthly:15)"
            - name: When the venture arm is wound down or sold
              description: |-
                ## Purpose
                Parents close or sell venture units more often than founders expect, and the stake may move to a secondary buyer, a different business unit or a passive holding team. Knowing what the shareholder agreement says about transfers, and building a relationship with whoever will hold the shares, keeps your cap table and next round from being disrupted.

                ## Milestones
                1. Transfer, first refusal and information rights in the shareholder agreement reviewed with your lawyer.
                2. The new holder or responsible team identified and met.
                3. Agreed commitments that will lapse identified and replacements sought.
                4. The board and lead investor told of the change and its effect on the next round.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "After a venture unit closure, the new holder of the shares is known and met, lapsed commitments are listed and the board has been briefed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your lawyer what the transfer provisions allow a closing unit to do"
                - "Find out who will hold the shares after the unit closes"
                - "List the commitments that will lapse and who could replace them"
                - "Brief the board and lead investor on the effect on the next round"
            - name: Corporate investor under cost cuts at the parent
              description: |-
                ## Purpose
                Cost programmes, layoffs or a new chief executive at the parent often freeze pilots, cancel follow-ons and move the business sponsor, even when the venture team stays. Preparing a short plan for this situation ahead of the next round means you know which commitments are at risk and which other investors can fill the gap.

                ## Milestones
                1. Commitments from the corporate ranked by how likely they are to survive a cost programme.
                2. The corporate's pro rata in the next round set to zero in a downside model.
                3. Alternative investors who could take that allocation named.
                4. A direct conversation held with the venture partner about the programme's future.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A downside plan shows the next round without the corporate's pro rata, with replacement investors named and the venture partner's view recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rank the corporate's commitments by how exposed they are to cost cuts"
                - "Model the next round with the corporate taking no pro rata"
                - "Name two investors who could take the corporate's allocation"
                - "Ask the venture partner directly about the programme's budget"
            - name: Commercial warrants tied to purchase volumes
              description: |-
                ## Purpose
                Some large customers ask for warrants that vest as their purchases pass agreed thresholds, giving them equity in return for revenue rather than cash. The structure can win a transformative contract, but it dilutes everyone, can affect revenue accounting and invites other customers to ask for the same, so it needs careful modelling and specialist advice.

                ## Milestones
                1. The proposed vesting thresholds, exercise price and expiry summarised.
                2. Dilution at each threshold modelled on the cap table.
                3. Accounting effect on reported revenue checked with your accountant.
                4. Vesting progress tracked each quarter after signing.

                ## Notes
                Ask your accountant early: warrants given to a customer can reduce reported revenue under common accounting standards.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A modelled, accountant-reviewed customer warrant proposal exists, and after signing, vesting progress is recorded each quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise the warrant thresholds, price and expiry the customer proposed"
                - "Model dilution at each vesting threshold"
                - "Ask your accountant how the warrants affect reported revenue"
                - "Record purchase volumes against the vesting thresholds @recurring(quarterly)"
            - name: Acquisition interest from a corporate shareholder
              description: |-
                ## Purpose
                Approaches to buy the company often come first from a corporate on the cap table, which knows more about you than any other bidder. Handling that approach well means telling the board, checking what rights the corporate holds, keeping its access to information in line with any other bidder and deciding whether to test the market before engaging.

                ## Milestones
                1. The approach reported to the board in writing within a week.
                2. The corporate's sale-related rights reviewed with your lawyer.
                3. The corporate's information access limited to what any bidder would get.
                4. A decision recorded on whether to engage, decline or run a wider process.

                ## Notes
                If the corporate has a director on your board, that director should normally step out of board discussions of its own approach. Confirm the process with your lawyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A corporate shareholder's acquisition approach is reported to the board, its rights are reviewed by counsel and a recorded decision sets the response."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a short note of the approach and send it to the board"
                - "Ask your lawyer which sale rights the corporate holds"
                - "Restrict the corporate's information access to bidder level"
                - "Record the board's decision on how to respond"
            - name: Joint venture with a strategic investor
              description: |-
                ## Purpose
                Occasionally a corporate investor and a startup set up a jointly owned company to take a product into a new market, region or industry, combining the startup's technology with the corporate's customers or plant. A joint venture needs its own governance, funding plan, intellectual property licence and exit terms, plus a monthly steering rhythm, or it absorbs management time and goes nowhere.

                ## Milestones
                1. The joint venture's purpose, market and funding needs written down.
                2. Ownership, board, deadlock and exit terms drafted with lawyers.
                3. Intellectual property licensed into the joint venture on defined terms.
                4. A monthly steering meeting running with both owners.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A joint venture with agreed ownership, governance, licence and exit terms is set up, and monthly steering meetings are held with both owners."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page case for the joint venture and what each side brings"
                - "Ask your lawyer to draft ownership, deadlock and exit terms"
                - "Define what technology the startup licenses into the joint venture"
                - "Hold the joint venture steering meeting with both owners @recurring(monthly:9)"
            - name: Banks, insurers and pharma companies as investors
              description: |-
                ## Purpose
                In regulated sectors, corporates invest under extra constraints: banks and insurers may face limits on equity holdings and must check your activities against their regulators' rules, and pharmaceutical companies often pair equity with milestone-based partnering deals. Knowing the constraints your investor brings explains its requests and avoids surprises late in the process.

                ## Milestones
                1. The investor's regulatory constraints on holding equity asked and noted.
                2. Any limits on ownership percentage or voting rights recorded.
                3. Partnering terms that come with the equity, such as milestones or options, listed.
                4. Your lawyer's view on how the constraints affect the round recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The regulatory and partnering constraints of each regulated corporate investor are recorded, with your lawyer's view on their effect on the round."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the investor what regulatory limits apply to its equity holdings"
                - "Record any cap on ownership or voting the investor must respect"
                - "List partnering milestones or options attached to the investment"
                - "Ask your lawyer how these constraints affect the rest of the round"
            - name: Multi-year strategic capital plan across corporate partners
              description: |-
                ## Purpose
                Companies that rely on corporates for distribution, supply and capital over several rounds do better with a plan than with whoever calls next. A multi-year plan of which corporates should join at which round, in what roles and with what ceiling on combined ownership, keeps the strategic shareholder base balanced and the exit open to every buyer.

                ## Milestones
                1. A three-round view of planned corporate participation, roles and allocations.
                2. A ceiling on combined corporate ownership agreed with the board.
                3. Exit options checked against the planned shareholder base.
                4. The plan reviewed by the board each year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved plan sets corporate participation and a combined ownership ceiling across the next three rounds, and is reviewed yearly."
                cadence: cyclic
              tasks:
                - "Sketch which corporates could join in each of the next three rounds"
                - "Agree a ceiling on combined corporate ownership with the board"
                - "Check the plan against the buyers you would want at exit"
                - "Review the strategic capital plan at the annual strategy board meeting @recurring(yearly)"
---

# Corporate Venture Investors

This area is for founders, and the partnerships, corporate development or finance managers who work with them, raising money from corporate venture arms and strategic investors. It begins with foundations (whether corporate money fits, the investor types, a tracker, a conflict map, information red lines, business unit sponsors and keeping the commercial deal separate), then the routines that keep a strategic shareholder useful, the skills of reading mandates, approval chains and sale rights, decisions on board access, exclusivity and price, dated events from first meeting to joint announcement, situations such as a customer who wants to invest or a venture arm that closes, and specialist work like commercial warrants, joint ventures and a multi-year strategic capital plan.

What repeats is a weekly pipeline review during a raise, a monthly sync with the venture partner and business sponsor, monthly checks of the sharing log and contract obligations, quarterly scorecards, observer packs and reads of the parent's results, and a yearly review of each corporate shareholder. The Risk register template suits the conflict map, Metrics log the strategic value scorecard, Person the corporate contact records and Meeting notes the first meeting with a venture team. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
