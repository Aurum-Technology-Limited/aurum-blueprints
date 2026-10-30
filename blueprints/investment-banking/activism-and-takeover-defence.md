---
id: investment-banking.activism-and-takeover-defence
name: Activism and Takeover Defence
description: "Defence advisory from the banker's seat: vulnerability analysis, stock watch, governance and rules inventories, shareholder engagement, the engage, settle or fight call, proxy contests and responses to unsolicited bids."
category: business
version: 1.0.0
tags: [investment-banking, activism-and-takeover-defence, knowledge-worker, shareholder-activism, takeover-defence, proxy-contest, hostile-bid, board-advisory]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - reading-queue
    - meeting-notes
    - vendor
    - board-meeting
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Activism and Takeover Defence
          description: "Advising boards facing activists or unsolicited bids: vulnerability analysis, shareholder engagement, defence options and response timelines."
          projects:
            - name: Anatomy of an activist campaign and its escalation ladder
              description: |-
                ## Purpose
                Most activist campaigns follow a recognisable ladder: a quiet stake, a private letter, a public letter or white paper, a nomination notice, a proxy contest and, often, a settlement before the vote. Juniors who know the rungs can tell a board where it stands and what usually comes next, which is the first question every chair asks. Learning the pattern from public campaigns takes a fortnight of reading and pays off on every mandate.

                ## Milestones
                1. A one-page ladder of the usual campaign stages, from first stake to settlement or vote, with typical gaps between them.
                2. Five public campaigns from the last three years traced against the ladder, noting where each one stopped.
                3. The main activist demands grouped into four or five types, such as capital return, break-up, sale of the company and board change.
                4. The note reviewed by a banker who has worked a live defence.

                ## Notes
                Use public letters, presentations and filings only. Campaign trackers published by law firms and proxy solicitors are a good free starting point.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page escalation ladder, tested against five public campaigns, has been reviewed by a banker with live defence experience."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download a recent public review of activist campaigns from a law firm or proxy solicitor"
                - "Pick five campaigns that ended in different ways and gather their public letters"
                - "Draw the escalation ladder and mark where each campaign stopped"
                - "Ask a VP on the defence team to check the ladder against their deals"
            - name: Unsolicited bid routes from bear hug to tender offer
              description: |-
                ## Purpose
                An unsolicited bidder can write privately to the board, publish a bear hug letter, launch an offer straight to shareholders, or pair an offer with a proxy fight to replace the directors who stand in the way. Each route sets a different clock and puts different pressure on the board. Knowing the routes and their usual sequence lets you build a response timeline on the first afternoon instead of the third day.

                ## Milestones
                1. The four common routes written up: private approach, public bear hug, offer direct to shareholders and offer combined with a proxy contest.
                2. For each route, the pressure it puts on the board and the board's usual first response noted.
                3. Three public hostile situations summarised with the route used and the outcome.
                4. A short glossary of defence terms checked with a colleague, from bear hug and white knight to standstill and squeeze-out.

                ## Notes
                How far a board may act against an offer depends heavily on jurisdiction. Note where your markets differ, and leave the legal reading to counsel.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of four unsolicited bid routes, with three public examples and a checked glossary, is saved in your defence notes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the four unsolicited bid routes with one line on how each starts"
                - "Find three public hostile situations and note the route and outcome of each"
                - "Write a glossary of twenty defence terms in your own words"
                - "Have an associate on the team check the glossary for errors"
            - name: Defence mandate engagement letter and team roster
              description: |-
                ## Purpose
                Defence work starts fast and often before fees are agreed, so the engagement letter, the conflict check and the team list get skipped and cause trouble later. Getting them in place early, with retainer and success fee terms clear and every adviser named, protects the bank and shows the board who to call at midnight.

                ## Milestones
                1. The conflict check cleared, including any relationship with known activists or likely bidders.
                2. An engagement letter signed covering scope, retainer, any success or transaction fee and what counts as a successful defence.
                3. A roster of the full defence team with roles: bank, company counsel, proxy solicitor, communications firm and investor relations.
                4. Contact details and out-of-hours numbers shared with the client and the team.

                ## Notes
                What counts as success for a fee, such as a settlement, a won vote or a higher bid, is often the hardest clause. Agree it before the campaign goes public.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed defence engagement letter and a full team roster with out-of-hours contacts are on file and shared with the client."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Submit the conflict check naming the client, known activists and likely bidders"
                - "Mark up the bank's standard defence engagement letter for retainer and success terms"
                - "Build the team roster with a role and out-of-hours number for each adviser"
                - "Send the roster to the client's general counsel for confirmation"
            - name: Shareholder register and ownership concentration analysis
              description: |-
                ## Purpose
                Defences are won or lost on who owns the shares, and the published register rarely tells the whole story. Breaking ownership down into index funds, active long holders, hedge funds, retail and insiders, and showing how few holders it takes to swing a vote, tells the board how exposed it really is.

                ## Milestones
                1. Ownership split into index, active, hedge fund, retail and insider holders from the latest filings and register data.
                2. The top 25 holders ranked, with holding size, turnover style and voting history where known.
                3. The number of holders needed to reach a majority of votes cast calculated.
                4. Changes since the last analysis highlighted, with any fast-building positions flagged.

                ## Notes
                Shareholder analysis firms and the proxy solicitor can identify beneficial owners behind nominee accounts. Ask the client before commissioning that work.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An ownership analysis showing the top 25 holders by type and the number needed to swing a majority has gone to the client."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the latest institutional ownership filings and the share register summary"
                - "Classify the top 25 holders as index, active, hedge fund or insider"
                - "Calculate how many holders it takes to reach a majority of likely votes cast"
                - "Refresh the ownership analysis after each quarterly filing date @recurring(quarterly)"
            - name: Charter, bylaw and governance provisions inventory
              description: |-
                ## Purpose
                Activists read a company's constitution before they buy a share: whether the board is staggered, whether shareholders can call a meeting or act by written consent, how far ahead nominations must be filed and what share thresholds apply. An inventory of those provisions, set beside peer norms, shows the board which doors are open and which are already shut.

                ## Milestones
                1. Every provision that affects a campaign listed, including board classification, meeting rights, written consent, nomination notice periods and supermajority votes.
                2. Each provision compared with peer companies and the market's current norm.
                3. Provisions that proxy advisers or large holders treat as poor governance flagged.
                4. The inventory reviewed with company counsel, who confirms the legal reading.

                ## Notes
                This is a banker's map for strategy discussions. Counsel owns the legal interpretation of every provision.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A governance provisions inventory compared with peers, reviewed by company counsel, is saved in the defence file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the current articles, bylaws and latest proxy or annual report governance section"
                - "List each campaign-relevant provision with the exact threshold or notice period"
                - "Compare the list with five peers and mark where the client is unusual"
                - "Send the inventory to company counsel for review of the legal reading"
                - "Recheck the inventory against any new amendments each year @recurring(yearly)"
            - name: Takeover and disclosure rules summary for the client's market
              description: |-
                ## Purpose
                Disclosure thresholds for stakes, the takeover panel or code, mandatory offer rules, put up or shut up deadlines and how far a board may act without shareholder approval differ from one market to the next. A two-page summary prepared with counsel means every page of defence advice sits on the right rules from the first meeting.

                ## Milestones
                1. Stake disclosure thresholds and timing rules for the client's main listing recorded.
                2. The takeover code or statute that governs offers named, with its key timetable points.
                3. The limits on board action during an offer summarised as counsel describes them.
                4. The summary signed off by counsel and dated.

                ## Notes
                Do not reason from another market's rules. A board in a takeover code market and one in a business judgement market face very different options.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page takeover and disclosure rules summary for the client's market, signed off by counsel, is dated and filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask company counsel for their standard client note on takeover and disclosure rules"
                - "Write a two-page summary of thresholds, timetables and limits on board action"
                - "Have counsel confirm the summary and record the date they did"
                - "Ask counsel whether any rule in the summary has changed @recurring(yearly)"
            - name: Activism vulnerability assessment of a client
              description: |-
                ## Purpose
                Activists screen for the same handful of weaknesses: total shareholder return behind peers, a valuation discount, idle cash or a conglomerate structure, missed targets, and governance that holders dislike. Scoring the client honestly on each, before an activist does, gives the board a list it can fix on its own terms.

                ## Milestones
                1. Total shareholder return over one, three and five years set against a defined peer group.
                2. Valuation multiples, balance sheet capacity and segment performance compared with peers.
                3. Governance and pay issues that proxy advisers flagged in recent years listed.
                4. Each weakness scored for severity and how likely an activist is to use it, with a suggested response.

                ## Notes
                Start from the **Risk register** template. Keep the language factual; boards react badly to a list that reads like an attack.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A scored vulnerability assessment covering returns, valuation, balance sheet and governance has been presented to management."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the peer group for the assessment with the client's investor relations team"
                - "Chart total shareholder return over one, three and five years against peers"
                - "Score each weakness for severity and likelihood in a risk register"
                - "Ask the agent to draft neutral wording for each weakness from your notes"
                - "Rerun the vulnerability assessment ahead of each annual results season @recurring(yearly)"
            - name: Day-one response protocol for an approach or stake disclosure
              description: |-
                ## Purpose
                The first 24 hours after a public letter, a stake disclosure or a bid lands set the tone for the whole defence, and boards that improvise say things they cannot take back. A written protocol naming who is called, who speaks, what the holding statement says and when the board meets lets the company respond calmly while the team works.

                ## Milestones
                1. A call tree from the first person to hear of the approach to every director and adviser.
                2. A short holding statement approved in advance by counsel, saying the board will review and respond in due course.
                3. Rules on who may speak to the press, investors and employees.
                4. A board meeting slot reserved within 48 hours, with the papers the bank will bring.

                ## Notes
                Start from the **Operational checklist** template. Test the call tree once a year; numbers go stale faster than anyone expects.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A day-one protocol with call tree, pre-approved holding statement and speaker rules has been agreed with management and counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the call tree from the company secretary to every director and adviser"
                - "Ask counsel for a pre-approved holding statement for an approach"
                - "Write the speaker rules for press, investor and employee contact"
                - "Run a test of the call tree with the company secretary @recurring(yearly)"
            - name: Stock watch and ownership disclosure monitoring set-up
              description: |-
                ## Purpose
                An activist can build a meaningful position before crossing a disclosure threshold, so the first warning is often unusual volume, derivative activity or a new name on the register. Setting up a stock watch with the proxy solicitor or a surveillance provider, and agreeing what triggers a call to the client, buys days the board would otherwise lose.

                ## Milestones
                1. A stock watch service in place covering trading volume, block trades, derivatives where visible and register changes.
                2. Trigger levels agreed with the client for when the bank or solicitor calls.
                3. Regulatory filing alerts set for the client's name and its main peers.
                4. A named owner on the bank team for reading each weekly report.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stock watch with agreed trigger levels and filing alerts is running, with a named owner on the bank team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the proxy solicitor what their stock watch service covers and reports"
                - "Agree trigger levels for volume and register changes with the client"
                - "Set filing alerts for the client and its five closest peers"
                - "Name the team member who reads each stock watch report"
            - name: Weekly unusual trading and filings review
              description: |-
                ## Purpose
                Surveillance reports only help if someone reads them, compares them with last week and decides whether anything needs a call. A fixed weekly review of the surveillance report, new filings and market chatter keeps preparedness clients warned early without filling their inbox.

                ## Milestones
                1. A one-paragraph weekly note format covering volume, register changes, new filings and market rumours.
                2. Each week's note filed, with anything above trigger level escalated the same day.
                3. A running list of names that appeared more than once.
                4. A quarterly summary of the notes for the client's preparedness update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly trading and filings note is filed every week for a quarter, with every trigger breach escalated the same day."
                cadence: rolling
              tasks:
                - "Write the template for the one-paragraph weekly note"
                - "Read the stock watch report and new filings for each preparedness client @recurring(weekly:mon)"
                - "Add any repeat names to the running watch list"
                - "Escalate any trigger breach to the client lead the same day"
            - name: Quarterly defence preparedness update for the board
              description: |-
                ## Purpose
                Boards that only hear about activism when it arrives tend to treat it as an insult rather than a risk. A short quarterly update on ownership changes, activist activity in the sector, the stock's performance against peers and any open weaknesses keeps directors informed and makes a later defence far faster.

                ## Milestones
                1. A four to six page update format agreed with management.
                2. Each update covering ownership changes, sector campaigns, relative returns and progress on known weaknesses.
                3. Board questions from each meeting logged with answers sent afterwards.
                4. Four updates delivered in a year.

                ## Notes
                Keep it short and steady. A thick quarterly deck reads as alarm and will stop being read.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Four quarterly preparedness updates are delivered in a year, each with board questions logged and answered."
                cadence: cyclic
              tasks:
                - "Agree the update format and length with the general counsel"
                - "Prepare and send the quarterly preparedness update to management @recurring(quarterly)"
                - "Log the board's questions and send written answers within a week"
                - "Ask the client each year whether the format still suits the board"
            - name: Activist fund tracker of holdings, campaigns and outcomes
              description: |-
                ## Purpose
                Activist funds have recognisable styles: some push for a sale, some for board seats, some settle quickly and some fight to the vote. A tracker of the main funds, their recent campaigns, typical demands and how they ended tells a board within minutes what kind of opponent it faces.

                ## Milestones
                1. A tracker covering at least 20 activist funds active in the client's markets.
                2. For each fund, recent campaigns, typical demands, sectors and how campaigns ended.
                3. Key individuals and the advisers each fund usually hires noted.
                4. A monthly update rhythm with new campaigns added.

                ## Notes
                Public sources only. Never add anything learned while wall-crossed on a live deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker of at least 20 activist funds with campaigns, demands and outcomes is updated every month."
                cadence: rolling
              tasks:
                - "List the 20 activist funds most active in the client's markets"
                - "Record each fund's last three campaigns, demands and outcomes"
                - "Add new public campaigns and outcomes to the fund tracker @recurring(monthly:9)"
                - "Note which advisers each fund used on its recent campaigns"
            - name: Proxy season calendar and nomination window tracker
              description: |-
                ## Purpose
                Most proxy contests are decided by dates set months earlier: the advance notice window for nominations, the record date, the meeting date and the proxy adviser publication schedule. A calendar for each client showing when an activist could file, and when the board must have its slate settled, stops a nomination arriving as a surprise.

                ## Milestones
                1. Each client's nomination window, record date and meeting date entered in one calendar.
                2. Proxy adviser report timing and filing deadlines added.
                3. A reminder set two months before each nomination window opens.
                4. The calendar shared with each client's company secretary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A proxy season calendar with nomination windows and meeting dates for every client is shared with each company secretary."
                cadence: cyclic
              tasks:
                - "Find each client's advance notice window in its bylaws or articles"
                - "Enter nomination windows, record dates and meeting dates in one calendar"
                - "Rebuild the calendar for the coming proxy season @recurring(yearly)"
                - "Send each company secretary their client's dates for confirmation"
            - name: Annual read of proxy adviser and stewardship voting policies
              description: |-
                ## Purpose
                Proxy advisers and the stewardship teams of large index funds publish voting policies each year, and those policies shape how a contest will be judged. Reading the changes when they come out, and noting what they mean for board refreshment, pay and contested elections, keeps defence advice in line with how the votes will actually be cast.

                ## Milestones
                1. The latest policies of the two main proxy advisers and the three largest index managers read.
                2. Changes from last year on contested elections, board composition and pay summarised on one page.
                3. Implications for each preparedness client noted.
                4. The summary circulated to the defence team.

                ## Notes
                Start from the **Reading queue** template to track which policies have been read each year.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of this year's proxy adviser and index manager policy changes is circulated to the defence team."
                cadence: cyclic
              tasks:
                - "Add this year's proxy adviser and index manager policies to a reading queue"
                - "Read the new voting policies when they are published @recurring(yearly)"
                - "Write a one-page summary of changes that affect contested elections"
                - "Note what the changes mean for each preparedness client"
            - name: Daily war room rhythm during a live campaign
              description: |-
                ## Purpose
                Once a campaign or bid is public, advisers multiply and decisions get made on half-heard calls. A short daily call at a fixed time, with one owner per workstream and a written action list, keeps the bank, counsel, solicitor and communications firm moving together and gives the client one version of the truth.

                ## Milestones
                1. A daily all-adviser call at a fixed time with a set agenda.
                2. One owner named for each workstream: analysis, vote, communications, legal and investor meetings.
                3. A written action list sent within an hour of every call.
                4. A weekly summary for the board on progress and open decisions.

                ## Notes
                Start from the **Meeting notes** template. Keep the call to 30 minutes; detailed work belongs in workstream calls.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During a live campaign, a daily adviser call runs at a fixed time and an action list follows within an hour every day."
                cadence: rolling
              tasks:
                - "Set the daily call time and agenda with the client's general counsel"
                - "Send the action list from the war room call within the hour @recurring(daily)"
                - "Write the weekly board summary of progress and open decisions @recurring(weekly:fri)"
                - "Keep a single list of every outstanding decision and its owner"
            - name: Off-season shareholder engagement programme
              description: |-
                ## Purpose
                Holders who only hear from the board when an activist arrives tend to listen to the activist. A programme of meetings with the top holders' portfolio managers and stewardship teams outside proxy season, with directors present where useful, builds the goodwill a board needs when a vote is close.

                ## Milestones
                1. The top 20 holders ranked by influence on a vote, with both portfolio and stewardship contacts.
                2. A meeting plan for the year with director attendance decided for each holder.
                3. Feedback from every meeting logged by theme.
                4. Themes reported to the board with suggested responses.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Meetings with at least 15 of the top 20 holders are held outside proxy season, with feedback logged and reported to the board."
                cadence: cyclic
              tasks:
                - "Rank the top 20 holders by likely influence on a contested vote"
                - "Agree with investor relations which holders a director should meet"
                - "Review the engagement feedback log with investor relations @recurring(quarterly)"
                - "Group meeting feedback into themes for the board"
            - name: Peer total shareholder return and valuation gap monitor
              description: |-
                ## Purpose
                Underperformance against peers is the first number an activist publishes, and it moves every month. A monitor that tracks each client's returns and valuation discount against an agreed peer group shows when the gap is widening into a target before anyone else spots it.

                ## Milestones
                1. An agreed peer group for each preparedness client.
                2. One, three and five year returns and the main valuation multiple tracked monthly.
                3. A threshold set for when a widening gap is raised with the client.
                4. Twelve monthly readings on file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly record of peer-relative returns and valuation discount is kept for each preparedness client for twelve months."
                cadence: rolling
              tasks:
                - "Build a one-tab monitor with returns and multiples for each client and peers"
                - "Set the threshold at which a widening gap is raised with the client"
                - "Update returns and valuation multiples against peers @recurring(monthly:14)"
                - "Flag any gap above threshold to the client lead"
            - name: Public activist campaign precedent library
              description: |-
                ## Purpose
                Ten real precedents carry more weight than an opinion when a board asks how similar fights ended. A library of public campaigns tagged by demand, sector, company size and outcome lets you build that page in an hour instead of a weekend.

                ## Milestones
                1. At least 40 public campaigns saved with their letters, presentations and outcomes.
                2. Each tagged by demand type, sector, market value band, settlement or vote and seats won.
                3. An index sheet you can filter by any tag.
                4. A quarterly rhythm for adding new campaigns.

                ## Notes
                Public material only. A library built from client files breaches the wall and the bank's information rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An indexed library of at least 40 public activist campaigns, tagged by demand and outcome, is filterable and current."
                cadence: rolling
              tasks:
                - "Save the public letters and outcomes for ten recent campaigns"
                - "Tag each campaign by demand, sector, size and outcome"
                - "Add newly concluded public campaigns to the library @recurring(quarterly)"
                - "Build a one-page index sheet that filters by tag"
            - name: Dissecting an activist white paper
              description: |-
                ## Purpose
                Activist presentations are built to persuade, mixing fair points with selective charts, chosen start dates and generous assumptions. Learning to take one apart, slide by slide, separating what is true, what is arguable and what is wrong, is the core skill behind every board response.

                ## Milestones
                1. Two public activist presentations read in full.
                2. Each claim sorted as accurate, arguable or misleading, with the evidence.
                3. The charts recreated with consistent periods and peer groups to show where framing changed the picture.
                4. A written critique of one presentation reviewed by a senior banker.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written critique of a public activist presentation, sorting every claim as accurate, arguable or misleading, has been reviewed by a senior banker."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download two public activist presentations from different campaigns"
                - "Sort every claim in the first presentation as accurate, arguable or misleading"
                - "Recreate the three most important charts with consistent periods and peers"
                - "Ask a VP or MD to review your written critique"
            - name: Sum-of-the-parts analysis to test a break-up thesis
              description: |-
                ## Purpose
                Break-up demands rest on a sum-of-the-parts number that is usually higher than the share price. Building your own version, with fair segment multiples, separation costs, dis-synergies and tax leakage, tells the board whether the activist has found real value or simply left out the costs.

                ## Milestones
                1. Segment financials prepared on a consistent basis from public reporting.
                2. A multiple range for each segment backed by trading peers.
                3. Separation costs, stranded costs, dis-synergies and tax effects estimated with the client's input.
                4. The result compared with the activist's figure, with each difference explained.

                ## Notes
                Tax leakage estimates come from the company's tax advisers. The banker frames the question and carries their figure into the analysis.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A sum-of-the-parts analysis net of separation costs and tax, reconciled to the activist's figure, has gone to the client."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Rebuild segment revenue and EBITDA from the last three years of public reporting"
                - "Choose a peer set and multiple range for each segment"
                - "Ask management and tax advisers for separation cost and tax leakage estimates"
                - "Reconcile your result to the activist's sum-of-the-parts line by line"
            - name: Buyback and dividend capacity analysis for a defence
              description: |-
                ## Purpose
                Activists often argue that the balance sheet is lazy and cash should go back to shareholders. Showing the board how much return capacity it really has, within its rating, covenants and investment plan, lets it either agree a credible programme on its own timetable or explain clearly why the activist's number is too high.

                ## Milestones
                1. Debt capacity measured against the target rating range and existing covenants.
                2. The investment and acquisition pipeline netted off available cash.
                3. Three return options compared, such as a special dividend, a buyback programme and a higher regular dividend.
                4. Effects on the rating and per-share measures shown for each option.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A capital return capacity analysis comparing three options against rating and covenant limits has been presented to management."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the company's covenant terms and target rating metrics"
                - "Net the planned investment and acquisition spend off forecast cash"
                - "Model a special dividend, a buyback and a higher regular dividend"
                - "Ask the ratings advisory team to sense-check the rating effects"
            - name: Bid inadequacy analysis against standalone value
              description: |-
                ## Purpose
                Rejecting an unsolicited offer means explaining why the price undervalues the company, and holders judge that explanation against the share price and the premium. An inadequacy analysis built on management's plan, trading and transaction ranges and the premium offered gives the board a defensible case rather than a feeling.

                ## Milestones
                1. Standalone value ranges from a DCF on management's plan, trading peers and precedent deals.
                2. The offer price set against each range and against undisturbed share price history.
                3. Synergies available to the bidder estimated to show how much value it would keep.
                4. A football field and a one-page summary agreed with the board's other advisers.

                ## Notes
                Keep the analysis separate from any fairness opinion work, which follows its own committee process in the bank.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A football field setting the offer against standalone value ranges and bidder synergies has been presented to the board."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Fix the undisturbed share price date with counsel"
                - "Run standalone DCF, trading and precedent ranges on management's plan"
                - "Estimate the synergies the bidder could capture and keep"
                - "Build the football field and one-page summary for the board"
            - name: Vote projection model for a proxy contest
              description: |-
                ## Purpose
                Deciding whether to fight to a vote needs a credible view of how the votes will fall. A model that combines the register, each holder's voting history, likely proxy adviser recommendations and expected turnout gives a range of outcomes rather than a hopeful guess, and updates as holders declare.

                ## Milestones
                1. Every holder above a set size placed in the model with share count and voting history.
                2. Assumptions for turnout, retail voting and proxy adviser influence written down.
                3. Outcomes shown under both proxy adviser recommendation scenarios.
                4. A daily update process agreed with the proxy solicitor once a contest is live.

                ## Notes
                The proxy solicitor usually holds the best voting data. Build the model together rather than in parallel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A vote projection model showing outcomes under both proxy adviser scenarios has been agreed with the proxy solicitor."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Load holders above the size cut-off with share counts into the model"
                - "Add each holder's voting record on past contested or shareholder proposals"
                - "Write down turnout and retail voting assumptions with the proxy solicitor"
                - "Show outcomes with and without a favourable proxy adviser recommendation"
            - name: Writing the defence update for a board meeting
              description: |-
                ## Purpose
                Directors under attack want three things from the bank: where things stand, what the options are and what the advisers recommend. Learning to write a board update that says each of those clearly in a few pages, without hedging or alarm, is what separates a trusted defence adviser from a slide factory.

                ## Milestones
                1. A standard structure agreed: situation, latest developments, options, recommendation and next steps.
                2. One practice update written on a public campaign and marked up by a senior banker.
                3. Every number in the update traced to a source in the analysis.
                4. Comments from the markup collected into a short list of personal rules.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice board update on a public campaign has been marked up by a senior banker and turned into a written list of personal rules."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a recent public campaign to write a practice board update on"
                - "Write the update in the situation, options, recommendation structure"
                - "Ask an MD to mark up the practice update"
                - "Turn the markup into a short list of rules for the next update"
            - name: Settlement agreement terms and standstill provisions
              description: |-
                ## Purpose
                Most campaigns end in a settlement, and its terms decide whether the board has peace for two years or the next fight next season. Knowing the usual building blocks, such as board seats, committee roles, standstills, voting commitments, non-disparagement and expiry dates, lets you advise on what is market and what is a concession too far.

                ## Milestones
                1. Ten public settlement agreements read and their terms tabulated.
                2. The usual range for board seats, standstill length and ownership caps noted.
                3. Terms that commonly cause later disputes identified.
                4. A one-page settlement terms checklist reviewed with counsel.

                ## Notes
                Settlement drafting belongs to counsel. The banker's job is the commercial view of what each term is worth to each side.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of terms from ten public settlement agreements and a one-page checklist reviewed with counsel are saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect ten public activist settlement agreements from recent filings"
                - "Tabulate seats, standstill length, ownership caps and voting commitments"
                - "Mark the terms that led to disputes in later seasons"
                - "Review your settlement checklist with company counsel"
            - name: Shareholder rights plan mechanics and triggers
              description: |-
                ## Purpose
                Where they are permitted, rights plans are the best-known takeover defence and the most misunderstood. Understanding how a plan is triggered, how the dilution works, what thresholds and terms proxy advisers accept and how courts or regulators in your market have treated them lets you discuss one sensibly with a board and its lawyers.

                ## Milestones
                1. The mechanics of a rights plan written up: trigger threshold, flip-in, exempt holders and redemption.
                2. The dilution to a triggering holder worked through on a simple example.
                3. Market-accepted terms for duration and threshold noted from proxy adviser policies.
                4. Whether and how rights plans are permitted in your markets confirmed with counsel.

                ## Notes
                In some markets a rights plan is not available or needs shareholder approval. That is a legal question for counsel, not a banker's view.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explanation of rights plan mechanics with a worked dilution example, and counsel's note on availability in your markets, is saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read two publicly filed rights plans and their summary terms"
                - "Work through the dilution to a triggering holder on a simple example"
                - "Note the threshold and duration terms the main proxy adviser accepts"
                - "Ask counsel whether rights plans are available in each of your markets"
            - name: Engage, settle or fight decision framework
              description: |-
                ## Purpose
                Once an activist is public, the board's biggest choice is whether to engage and adopt some ideas, negotiate a settlement or fight to a vote. A framework that weighs the merits of the demands, the vote projection, cost, distraction and reputational risk lets the board make that choice deliberately and record why.

                ## Milestones
                1. The activist's demands assessed on their merits, separately from the activist.
                2. The vote projection and its range set out for a contest.
                3. Cost, management distraction and reputational effects of each path estimated.
                4. The board's decision and reasons recorded in the minutes, with a date to revisit it.

                ## Notes
                Boards often decide to fight before reading the demands closely. Assess the ideas first; some will be worth adopting whatever happens.
              priority: high
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A board paper comparing engage, settle and fight has been presented and the board's decision recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List each activist demand and assess its merit without reference to the sender"
                - "Summarise the vote projection range for a contest"
                - "Estimate cost and management time for engaging, settling and fighting"
                - "Draft the board paper comparing the three paths"
            - name: Whether to keep a rights plan on the shelf
              description: |-
                ## Purpose
                Many companies prepare a rights plan in draft so it can be adopted within a day if a stake builds fast, without adopting it in calm times when holders would object. Deciding with counsel whether a shelf plan makes sense for this client, and keeping it current, is a quiet piece of preparedness that matters only once.

                ## Milestones
                1. Counsel's view obtained on whether a plan is available and how quickly it could be adopted.
                2. Holder and proxy adviser reaction to a plan in calm and in crisis assessed.
                3. A recommendation to the board on preparing a shelf plan or not.
                4. If prepared, a yearly review date set for its terms.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The board has recorded a decision on whether to keep a shelf rights plan, based on counsel's advice and the bank's view of holder reaction."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel whether a rights plan could be adopted and how fast"
                - "Summarise how the top holders and proxy advisers have reacted to past plans"
                - "Write a one-page recommendation to the board on a shelf plan"
                - "Review the shelf plan terms with counsel each year @recurring(yearly)"
            - name: White knight and white squire alternatives analysis
              description: |-
                ## Purpose
                If a hostile bid looks likely to succeed, the board may look for a friendlier buyer or a friendly investor taking a minority stake. Knowing which parties could move fast enough, what they could pay and what a white squire would ask in return keeps that option real rather than a hope voiced in the boardroom.

                ## Milestones
                1. A short list of potential friendly acquirers and minority investors with capacity to act in the offer timetable.
                2. An estimate of what each could pay, with financing and regulatory risk noted.
                3. For a white squire, the likely asks such as board seats, standstills and governance rights.
                4. A recommendation to the board on whether to sound out any party, cleared with counsel.

                ## Notes
                Approaching third parties during an offer is tightly regulated in some markets. Agree every contact with counsel and compliance first.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A board paper on white knight and white squire options, with capacity and terms for each party, has been presented."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List parties with the capacity to act within the offer timetable"
                - "Estimate a price range and financing route for each party"
                - "Write down what a white squire would likely demand in return"
                - "Agree with counsel the rules for sounding out any third party"
            - name: Pre-emptive strategic review before an activist arrives
              description: |-
                ## Purpose
                Companies that review its own portfolio, capital allocation and structure on their own timetable take most of the activist's script away. Running a focused review of the obvious questions, such as non-core businesses, the balance sheet and margin gaps, and publishing what the board decided gives holders the answer before someone else asks the question.

                ## Milestones
                1. The questions an activist would ask written down from the vulnerability assessment.
                2. Each question analysed with management and options set out.
                3. Board decisions on each question recorded.
                4. A communications plan for explaining the conclusions to holders.

                ## Notes
                If the review leads to a sale of a division or the company, that becomes a separate sell-side mandate with its own process.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The board has recorded a decision on each question raised in the pre-emptive review and approved a plan to explain them to holders."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Turn the vulnerability assessment into a list of activist questions"
                - "Agree with management which questions the review will answer"
                - "Prepare an options page for each question for the board"
                - "Ask the agent to draft the holder message from the board's conclusions"
            - name: Proactive board refreshment against activist critique
              description: |-
                ## Purpose
                Long-tenured directors, missing skills and a lack of independence are among the easiest arguments an activist can make for new seats. Mapping the board's skills, tenure and independence against what holders expect, and planning refreshment ahead of time, removes that argument and puts the right people on the board before a fight.

                ## Milestones
                1. A skills, tenure and independence matrix for the current board.
                2. Gaps compared with what major holders and proxy advisers say they expect.
                3. A refreshment plan with timing agreed with the chair and nominating committee.
                4. A yearly check of the matrix against the board's composition.

                ## Notes
                The nominating committee owns board composition. The banker brings the holder view and peer data.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A board skills and tenure matrix, compared with holder expectations, has been presented to the nominating committee with a refreshment plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a skills, tenure and independence matrix for the current board"
                - "Compare the matrix with major holders' published board expectations"
                - "Draft refreshment options for the chair and nominating committee"
                - "Refresh the board matrix against holder expectations @recurring(yearly)"
            - name: Rejecting or negotiating with an unsolicited bidder
              description: |-
                ## Purpose
                After an unsolicited proposal, the board can reject it, ask for more information, open talks on price or start a wider process. Each choice sends a message to holders and to the bidder, and in some markets starts a regulatory clock. Setting out the options, their consequences and the likely bidder response helps the board choose a path it can defend.

                ## Milestones
                1. The options set out: reject, request more detail, negotiate on price or run a wider process.
                2. The likely bidder reaction and holder reaction to each noted.
                3. Any regulatory or disclosure consequence of each option confirmed with counsel.
                4. The board's chosen path and reasons recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The board has recorded its response to an unsolicited proposal after considering a written options paper with counsel's input."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Summarise the proposal's price, conditions and financing in one page"
                - "Set out the four response options with holder and bidder reactions"
                - "Ask counsel what disclosure or timetable each option triggers"
                - "Draft the board's response letter for counsel to review"
            - name: Selecting the proxy solicitor and communications firm
              description: |-
                ## Purpose
                The proxy solicitor and the communications firm do much of the work that wins a contest, and the best ones are often hired by the activist first. Choosing them before a campaign, on experience in the client's market, data quality and fees, means the board is not left with whoever is still free.

                ## Milestones
                1. Three proxy solicitors and three communications firms compared on contest experience, data and fees.
                2. Each firm checked for conflicts with known activists.
                3. A preferred firm in each category recommended to the client.
                4. Retainer terms agreed or ready to sign if a campaign starts.

                ## Notes
                Start from the **Vendor** template to compare the firms on the same criteria.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The client has chosen a preferred proxy solicitor and communications firm, each conflict-checked, with retainer terms ready."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three proxy solicitors and three communications firms"
                - "Compare each on contest experience, data and fee terms"
                - "Ask each firm to confirm it has no conflict with known activists"
                - "Recommend one firm in each category to the client"
            - name: Stake disclosure response in the first 48 hours
              description: |-
                ## Purpose
                When an activist files a stake disclosure or publishes a letter, the share price moves and holders call within hours. Running the first 48 hours to the day-one protocol, with an initial read of the activist, its demands and its holding, gets the board to its first meeting with facts rather than headlines.

                ## Milestones
                1. The holding statement issued within hours if needed.
                2. A first read of the activist prepared from the tracker: style, past campaigns and likely demands.
                3. The disclosed holding, any derivatives and trading pattern analysed.
                4. A board meeting held within 48 hours with the bank's initial assessment.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within 48 hours of the disclosure, the board has met and received a written initial assessment of the activist and its holding."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Start the call tree from the day-one protocol"
                - "Pull the activist's profile and past campaigns from the tracker"
                - "Analyse the disclosed holding, derivatives and recent trading"
                - "Prepare the two-page initial assessment for the board meeting"
            - name: Board meeting to consider an unsolicited proposal
              description: |-
                ## Purpose
                Whatever happens later, the first board meeting after a proposal arrives decides the tone of everything that follows, and directors will be judged on how carefully they considered it. A meeting with clear papers, the bank's preliminary financial view, counsel on duties and a minuted process protects the board and moves the response forward.

                ## Milestones
                1. Papers circulated in advance: the proposal, the bank's preliminary view and counsel's note on directors' duties.
                2. The bank's presentation covering price against standalone value and options for response.
                3. Questions and decisions captured for the minutes with counsel's help.
                4. Next steps and the date of the next meeting agreed.

                ## Notes
                Start from the **Board meeting** template. Counsel leads on directors' duties; the bank stays on the financial analysis.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board meeting has been held with papers circulated in advance and decisions and next steps recorded in the minutes."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the agenda and paper list with the company secretary"
                - "Prepare the bank's preliminary financial view of the proposal"
                - "Rehearse the presentation with the senior banker who will deliver it"
                - "Send the company secretary a note of the decisions for the minutes"
            - name: Proxy adviser meeting in a contested election
              description: |-
                ## Purpose
                In a close contest the recommendation of the main proxy advisers can move a large share of the vote. Preparing the board's case for the adviser meeting, with a clear answer to every activist claim and a sharp account of the board's plan, is one of the highest-stakes days in a defence.

                ## Milestones
                1. The adviser's published approach to contested elections reviewed.
                2. A presentation answering each activist claim and setting out the board's plan.
                3. The directors attending rehearsed on the hardest likely questions.
                4. A follow-up note sent to the adviser on any open questions.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board has presented to each main proxy adviser after a rehearsal, with follow-up answers sent within two days."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Read the proxy adviser's policy on contested director elections"
                - "Draft the presentation answering each activist claim in turn"
                - "Run a rehearsal with directors on the ten hardest questions"
                - "Send follow-up answers to the adviser within two days"
            - name: Fight letters and investor presentation for a contested vote
              description: |-
                ## Purpose
                During a contest the board writes to holders several times and publishes an investor presentation that has to beat the activist's story. Planning the sequence of letters and the presentation, with every figure checked and every claim cleared by counsel, keeps the board's message clear and its disclosures safe.

                ## Milestones
                1. A sequence of holder letters planned against the meeting timetable.
                2. An investor presentation answering the activist case and setting out the board's plan.
                3. Every number in the materials tied to a source and checked.
                4. Each document cleared by counsel before release.

                ## Notes
                Contest materials are often filed with the regulator. Treat every page as public and permanent.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The planned holder letters and investor presentation have been released on schedule, each checked and cleared by counsel."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Plan the letter sequence against the meeting timetable"
                - "Draft the storyline for the investor presentation with management"
                - "Tie every figure in the presentation to a source document"
                - "Send each final document to counsel for clearance before release"
            - name: Target board response document to a hostile offer
              description: |-
                ## Purpose
                When an offer goes directly to shareholders, the target board usually has to publish its recommendation and reasons within a set period. Preparing the financial sections of that document, from the inadequacy case to the board's view of standalone prospects, needs speed and complete accuracy because it will be read by holders, the bidder and the regulator.

                ## Milestones
                1. The deadline and required contents confirmed with counsel.
                2. Financial sections drafted from the inadequacy analysis.
                3. Every statement of fact or forecast verified and supported.
                4. The document approved by the board and published on time.

                ## Notes
                Forecasts and profit statements in offer documents can carry special reporting rules in some markets. Counsel and the reporting accountants decide what is needed.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The target board's response document is published within the required period with every financial statement verified."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the publication deadline and required contents with counsel"
                - "Draft the financial sections from the inadequacy analysis"
                - "Build a verification file supporting every statement of fact"
                - "Track board approval and publication against the deadline"
            - name: Meeting day and the vote result in a contest
              description: |-
                ## Purpose
                Contested meetings are usually decided in the final week of vote chasing, and the day itself turns on preliminary counts, the inspector's process and what the board says when the result is known. Planning the final week and the announcements for each outcome means nobody is drafting a press release at the meeting hall.

                ## Milestones
                1. A final-week vote chasing plan with the proxy solicitor, holder by holder.
                2. Announcements drafted for a win, a loss and a split result.
                3. The meeting script and procedure checked with counsel and the company secretary.
                4. The result announced and a first note on next steps sent to the board.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The contested meeting has been held, the result announced using a prepared statement and a next-steps note sent to the board."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every undecided holder with an owner for the final-week call"
                - "Draft announcements for a win, a loss and a split result"
                - "Check the meeting script with the company secretary and counsel"
                - "Send the board a next-steps note on the evening of the meeting"
            - name: Defence debrief and preparedness reset after a campaign
              description: |-
                ## Purpose
                Whatever the outcome, a campaign leaves a changed register, new directors or commitments, and lessons that will fade within weeks. A debrief with the client and advisers, followed by a reset of the stock watch, engagement plan and vulnerability list, turns one fight into better preparation for the next.

                ## Milestones
                1. A debrief held with management and advisers within a month of the outcome.
                2. What worked and what did not written up in a short note.
                3. Any settlement commitments listed with owners and dates.
                4. The stock watch, engagement programme and vulnerability assessment updated.

                ## Notes
                Start from the debrief note, then move each lesson into the project it affects so it is not lost in a file.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A debrief note and a list of settlement commitments with owners exist, and preparedness materials are updated within two months of the outcome."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Schedule the debrief with management and advisers within a month"
                - "Write a two-page note of what worked and what did not"
                - "List every settlement commitment with an owner and a date"
                - "Update the vulnerability assessment and engagement plan with the lessons"
            - name: First defence assignment as an analyst
              description: |-
                ## Purpose
                Defence work arrives without warning, runs at a pace even deal teams find hard and puts an analyst's numbers in front of a board within days. Preparing a personal kit, such as ownership and return templates, a glossary and a list of public sources, means your first assignment shows you as ready rather than learning on the job.

                ## Milestones
                1. Templates ready for an ownership table, a peer return chart and a governance comparison.
                2. A list of reliable public sources for filings, ownership and campaign history.
                3. The bank's wall-crossing and confidentiality rules for defence work read.
                4. One practice ownership and returns pack built on a public company and reviewed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal defence kit of templates and sources exists, and a practice pack on a public company has been reviewed by an associate."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build templates for ownership, peer returns and governance comparisons"
                - "Write a list of public sources for filings, ownership and campaigns"
                - "Read the bank's wall-crossing rules for defence work"
                - "Build a practice pack on a public company and ask an associate to review it"
            - name: Associate running the defence workstream
              description: |-
                ## Purpose
                On a live defence, the associate holds the analysis together while the MD and the client work on strategy, and every workstream needs feeding at once. A plan for owning the model, the board materials and the adviser coordination, with clear checks before anything leaves the team, keeps you in control when the pace is highest.

                ## Milestones
                1. A workstream list with owners for analysis, vote modelling, materials and adviser requests.
                2. A checking routine for every number before it reaches the client.
                3. A single tracker for adviser requests and turnaround times.
                4. Feedback from the VP or MD collected at the end of the first campaign.

                ## Notes
                The associate is often the person counsel and the solicitor call at night. Agree early which decisions you may make without the MD.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "On a live defence, a workstream list, checking routine and adviser request tracker are in use and VP or MD feedback has been recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the workstream list with an owner for each stream"
                - "Set the checking routine for every number leaving the team"
                - "Start a tracker for adviser requests and turnaround times"
                - "Ask the VP which decisions you may take without the MD"
            - name: Senior banker building a defence franchise
              description: |-
                ## Purpose
                Defence mandates go to the bankers boards already trust when the letter arrives, not to whoever pitches loudest afterwards. A senior banker who runs regular preparedness reviews, briefs boards on activist trends and stays close to general counsels builds a franchise that wins mandates in the first hour of a campaign.

                ## Milestones
                1. A target list of 20 companies where a preparedness review would be valuable.
                2. A preparedness briefing deck based on public trends and campaigns.
                3. Briefings delivered to at least eight boards or general counsels in a year.
                4. Preparedness reviews and mandates won tracked against the target list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Preparedness briefings have been delivered to at least eight boards or general counsels in a year, with outcomes tracked against a target list."
                cadence: rolling
              tasks:
                - "List 20 companies where a preparedness review would be valuable"
                - "Build a briefing deck on activist trends from public data"
                - "Review briefings delivered and mandates won against the target list @recurring(monthly:21)"
                - "Ask general counsels at existing clients what they want from a briefing"
            - name: Advising the activist side of a campaign
              description: |-
                ## Purpose
                Some banks and boutiques advise activists or bidders rather than boards, and the work looks different: building the thesis, sizing the stake within disclosure rules, writing the white paper and modelling the vote from the other side. Knowing how that side works makes you a sharper defence adviser, and for some bankers it becomes the main business.

                ## Milestones
                1. The workflow of an activist adviser mapped from thesis to settlement.
                2. A practice thesis on a public company built from public data only.
                3. The conflict rules for advising activists at your firm confirmed with compliance.
                4. A note on how this experience changes your defence advice.

                ## Notes
                Stake building is governed by disclosure and market abuse rules. Compliance and counsel decide what can be done and when.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice activist thesis on a public company exists, and compliance has confirmed the firm's rules for activist-side mandates."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map the activist adviser's workflow from thesis to settlement"
                - "Build a practice thesis on a public company from public data only"
                - "Ask compliance for the firm's rules on advising activists"
                - "Write a note on what the exercise changes in your defence advice"
            - name: Defence for a small-cap or family-controlled company
              description: |-
                ## Purpose
                Small companies and family-controlled groups face activism differently: a small fund can build a large stake, retail holders matter more, and a controlling family's stake can make a contest impossible but a public campaign painful. Adapting the defence playbook to a thin register, a small board and a limited budget is its own skill.

                ## Milestones
                1. The register analysed with retail and family holdings separated.
                2. The campaign tactics most likely against a small or controlled company listed.
                3. A defence plan scaled to the client's budget and board size.
                4. Minority holder concerns and how the board will answer them set out.

                ## Notes
                In controlled companies, activists often target minority protections and related-party dealings rather than control. Prepare for those arguments.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A scaled defence plan for a small or controlled company, covering retail holders and minority concerns, has been presented to the board."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Split the register into family, institutional and retail holdings"
                - "List the tactics most likely against a small or controlled company"
                - "Draft a defence plan sized to the client's budget"
                - "Write the board's answers to likely minority holder concerns"
            - name: Short attack and short report response
              description: |-
                ## Purpose
                A short seller's report can knock a large slice off the share price in a day, with claims about accounting or governance that are hard to answer fast. Preparing a response process, with a rapid fact-check, a decision on whether to respond publicly and coordination with auditors and counsel, protects the board from a rushed denial it later regrets.

                ## Milestones
                1. A rapid fact-check process mapping each claim to evidence within 24 hours.
                2. Criteria agreed for responding publicly, privately or not at all.
                3. Roles agreed with counsel, auditors and the communications firm.
                4. A practice run on a public short report from another company.

                ## Notes
                Accounting allegations go to the audit committee and auditors. The bank supports the financial analysis and holder communication.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written short report response process with fact-check steps and response criteria has been agreed with counsel and tested on a public example."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read two public short reports and the companies' responses"
                - "Write the 24-hour fact-check steps for each type of claim"
                - "Agree response criteria and roles with counsel and the communications firm"
                - "Run a practice fact-check on a public short report"
            - name: Governance and sustainability-led activism campaigns
              description: |-
                ## Purpose
                A growing share of campaigns are led on climate strategy, board diversity, pay or social issues, sometimes by small funds that win support from large index holders rather than by building big stakes. These campaigns are fought on stewardship arguments and reporting quality rather than valuation, so the usual inadequacy case does little. Preparing a board for them means knowing where its disclosures and targets sit against what its largest holders publicly ask for.

                ## Milestones
                1. Five recent public campaigns on governance or sustainability themes summarised with the demands and vote results.
                2. The client's disclosures and targets compared with the stewardship expectations of its top ten holders.
                3. Gaps that a small fund could use to win index holder support listed.
                4. A response plan agreed with management and the sustainability team.

                ## Notes
                The bank brings the vote and holder view. Targets and reporting choices belong to management and the board, with their own specialist advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of the client's disclosures with its top ten holders' stewardship expectations, with a gap list and response plan, has gone to management."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Summarise five public governance or sustainability-led campaigns and their votes"
                - "Read the stewardship reports of the client's top ten holders"
                - "List the disclosure gaps a small fund could use with index holders"
                - "Agree a response plan with management and the sustainability team"
            - name: Universal proxy contests and withhold campaigns
              description: |-
                ## Purpose
                Where holders can mix board and activist nominees on one card, activists can win a seat or two without convincing holders to replace the board, and vote-no or withhold campaigns can damage a director without any nomination. Understanding how these change the vote maths lets you advise a board on which directors are exposed and how to defend each one.

                ## Milestones
                1. The voting mechanics of a universal card or mixed slate in your markets confirmed with counsel.
                2. Each director's profile assessed for exposure to a targeted campaign.
                3. Vote projections re-run director by director rather than slate against slate.
                4. A plan for defending the most exposed directors.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A director-by-director vote projection and exposure assessment under mixed-slate rules has been presented to the board."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm with counsel how mixed-slate voting works in the client's market"
                - "Score each director for exposure to a targeted campaign"
                - "Re-run the vote projection director by director"
                - "Write a defence plan for the three most exposed directors"
            - name: Hostile offer timetable under a takeover code
              description: |-
                ## Purpose
                Takeover codes set the defence clock: put up or shut up deadlines, the dates for offer and response documents, the last day for revised offers and the point when the offer closes. A day-by-day timetable for the defence team, built with counsel from the code, stops any deadline being missed in the noise of a contested offer.

                ## Milestones
                1. The code's key dates set out from the approach announcement to the final closing date.
                2. Each date tied to a deliverable from the defence team.
                3. Restrictions on board actions during the offer period noted as counsel describes them.
                4. The timetable signed off by counsel and circulated.

                ## Notes
                Timetables shift when a bidder revises an offer or a competing bidder arrives. Rebuild the timetable at each change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-approved, day-by-day defence timetable with a deliverable against every code date is circulated to the team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel for the code timetable from the announcement date"
                - "Tie each code date to a defence deliverable and owner"
                - "List the board restrictions during the offer period as counsel sets them out"
                - "Circulate the timetable and rebuild it after any revised offer"
            - name: Creeping control and stakebuilding by a strategic rival
              description: |-
                ## Purpose
                A competitor or large holder can build a stake slowly, staying under mandatory offer thresholds, and gain influence without paying a control premium. Spotting the pattern early and setting out the board's options, from engagement to the protections that rules allow, helps the board protect minority holders before control has already shifted.

                ## Milestones
                1. The holder's stake history and trading pattern traced from filings and the stock watch.
                2. Mandatory offer and disclosure thresholds that apply set out with counsel.
                3. The influence the holder already has, such as board seats or blocking power on special votes, assessed.
                4. Options for the board set out, with counsel's view on what is permitted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board paper on a creeping stake, with its history, applicable thresholds and options agreed with counsel, has been presented."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Trace the holder's stake over time from filings and the stock watch"
                - "Ask counsel which offer and disclosure thresholds apply"
                - "Assess whether the holder can already block special resolutions"
                - "Draft the options paper for the board"
---

# Activism and Takeover Defence

This area is for bankers who advise boards facing activist investors or unsolicited bids: analysts building the vulnerability and vote analysis, associates and VPs running the defence workstream, and senior bankers who sit with the chair when the letter arrives. It starts with foundations (how campaigns and hostile bids work, the shareholder register, the governance and takeover rules inventory, a vulnerability assessment and a day-one protocol), moves to the preparedness routines and the analytical skills behind a defence, then the big decisions on engaging, settling or fighting, the dated events from a stake disclosure to the meeting vote, variants for each seat on the team and the activist side, and finally specialist work on short attacks, universal proxy contests, governance and sustainability-led campaigns, takeover code timetables and creeping control.

What repeats is a weekly trading and filings review, a monthly activist tracker and peer return check, a daily war room rhythm during a live campaign, quarterly preparedness updates for the board and engagement rounds with top holders, and yearly refreshes of the governance inventory, the rules summary and proxy adviser policies. The Risk register, Operational checklist, Reading queue, Meeting notes, Vendor and Board meeting templates pair with the projects that name them. Client data and inside information stay on the bank's systems under its wall-crossing rules; these projects hold your own method, checklists and public material, and legal, disclosure and regulatory calls go to counsel and compliance. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
