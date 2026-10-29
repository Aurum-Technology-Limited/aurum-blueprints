---
id: strategy-leadership.acquisition-strategy
name: Acquisition Strategy
description: "A reasoned case for buying, clear screening criteria, a ranked and maintained target list, fit assessed before any approach, and a board mandate that keeps every deal tied to strategy."
category: business
version: 1.0.0
tags: [strategy-leadership, acquisition-strategy, manager, enterprise, m-and-a, corporate-development, target-screening, strategic-fit]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - risk-register
    - board-meeting
    - meeting-notes
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Acquisition Strategy
          description: "Setting out why and what an organisation should acquire, building a target list and assessing fit before any deal begins."
          projects:
            - name: Strategic rationale for acquiring
              description: |-
                ## Purpose
                Acquisitions made because money was available, a banker called or a competitor just bought something are the ones that disappoint. Writing down which strategic goals cannot be reached fast enough through organic growth, and what an acquisition would have to deliver against each, gives every later screen and approach a reason to exist.

                ## Milestones
                1. The two to four strategic goals an acquisition could serve listed, each quoted from the current strategy.
                2. For each goal, the gap between where organic plans get you and where the strategy needs you, stated in numbers or dates.
                3. A plain statement of what acquisitions are not for, such as buying revenue to hit a quarterly target.
                4. A two-page rationale reviewed and accepted by the chief executive.

                ## Notes
                If the rationale cannot point to a page of the existing strategy, fix the strategy first. An acquisition programme cannot stand in for one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page acquisition rationale, linked to named strategic goals with quantified gaps, has been accepted by the chief executive."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the current strategy and highlight every goal with a timing or capability gap"
                - "Estimate the organic gap for each goal with the finance lead"
                - "Write a short list of reasons the organisation will not acquire for"
                - "Review the draft rationale with the chief executive and record changes"
            - name: Build, partner or buy test for each gap
              description: |-
                ## Purpose
                Buying is usually the most expensive and least reversible way to close a gap, so it should win only when building is too slow and partnering too weak. Running each strategic gap through the same build, partner or buy questions on time, cost, control and risk shows which gaps genuinely belong in an acquisition programme.

                ## Milestones
                1. Every gap from the rationale scored for build, partner and buy on time to impact, cost, control and execution risk.
                2. A recommended route for each gap, with the reason in two sentences.
                3. The gaps assigned to acquisition marked as the scope of the programme.
                4. Gaps sent to build or partner handed to their owners with a note of the decision.

                ## Notes
                Be honest about build time. Internal estimates for new capabilities are routinely half of what it really takes, which makes buying look worse than it is.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each strategic gap has a recorded build, partner or buy recommendation scored on the same four criteria."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the gaps from the rationale in a single scoring table"
                - "Ask each gap's functional head for an honest build timeline and cost"
                - "Score build, partner and buy for each gap on time, cost, control and risk"
                - "Circulate the recommended route for each gap to the executive team"
            - name: Acquisition funding envelope and capacity
              description: |-
                ## Purpose
                Target lists built without knowing what the organisation can afford waste months on companies it could never buy. Agreeing with the finance director a range for total deal value, the mix of cash, borrowing and shares that is acceptable, and how many deals management can absorb in a year keeps the search inside reality.

                ## Milestones
                1. A deal size range, from smallest worthwhile to largest affordable, agreed with the finance director.
                2. Acceptable funding sources listed, with any lender covenant or shareholder limits noted by finance.
                3. A realistic number of deals the organisation could absorb in the next two years, based on integration capacity.
                4. The envelope written on one page and shared with the sponsor.

                ## Notes
                This is a planning range, not a valuation or financing recommendation. The finance director and the organisation's advisers own the actual numbers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page funding envelope with a deal size range, acceptable funding sources and an annual deal capacity has been agreed with the finance director."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book an hour with the finance director to discuss acquisition capacity"
                - "Ask finance which covenants or shareholder limits constrain deal funding"
                - "Estimate how many integrations the operations team could carry at once"
                - "Write the envelope on one page and send it to the sponsor"
            - name: Target screening criteria and deal breakers
              description: |-
                ## Purpose
                Without written criteria, every interesting company looks like a fit and the list grows faster than anyone can assess it. Five to eight screening criteria (size, geography, customer overlap, capability, margin profile, ownership) plus a short list of deal breakers let anyone on the team say no quickly and consistently.

                ## Milestones
                1. Five to eight screening criteria written, each with a threshold or a clear test.
                2. Three to five deal breakers stated, such as unresolved regulatory issues or dependence on one customer.
                3. The criteria tested against five known companies to check they sort sensibly.
                4. Final criteria signed off by the sponsor and saved where the whole team can find them.

                ## Notes
                Keep deal breakers few and absolute. Anything negotiable belongs in the scoring model, not on the deal breaker list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off page of five to eight screening criteria and three to five deal breakers has been tested against five real companies."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft screening criteria from the rationale and funding envelope"
                - "Write the deal breakers the sponsor would never accept"
                - "Run five known companies through the criteria and note odd results"
                - "Get the sponsor's sign-off on the final criteria page"
            - name: Acquisition sponsor and core team
              description: |-
                ## Purpose
                Acquisition work without a named executive sponsor drifts, and work owned by one enthusiastic individual turns into a personal project. Naming the sponsor, a small core team from strategy, finance, legal and the relevant business, and the hours each can give makes the programme accountable from the start.

                ## Milestones
                1. An executive sponsor named, with authority to stop or advance a target.
                2. A core team of three to six people named, with protected hours each month.
                3. The decision rule for advancing a target written down, for example sponsor approval after a core team review.
                4. A one-page team note shared with the executive team.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A team note names the sponsor, three to six core members with monthly hours, and the rule for advancing a target."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the chief executive to confirm who sponsors the acquisition programme"
                - "Choose core team members from strategy, finance, legal and the business"
                - "Agree each member's monthly hours with their line manager"
                - "Share the one-page team note with the executive team"
            - name: Lessons from the organisation's past acquisitions
              description: |-
                ## Purpose
                Most organisations that have bought before have a few deals people still talk about, for good or bad reasons, and almost none have written the lessons down. Interviewing the people who led or lived through earlier acquisitions gives the new programme its own evidence about what this organisation does well and badly.

                ## Milestones
                1. Every acquisition of the last ten years listed with its date, size and original rationale.
                2. Five or more people interviewed who were involved in those deals.
                3. Each deal rated against its original rationale: achieved, partly achieved or missed.
                4. A two-page lessons note with three things to repeat and three to avoid.

                ## Notes
                Interview people below the executive team as well. The finance analysts and integration leads often remember what actually happened.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page lessons note covers every acquisition of the past ten years, rated against its original rationale, based on at least five interviews."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask finance for the list of acquisitions made in the last ten years"
                - "Book interviews with five people who worked on those deals"
                - "Rate each deal against what it was meant to achieve"
                - "Ask the agent to draft a lessons note from the interview notes"
            - name: Risk appetite for acquisitions
              description: |-
                ## Purpose
                Leaders often discover they disagree about risk only when a specific target is on the table, at which point the debate becomes personal. Agreeing in advance how much the organisation is willing to stake on one deal, how far from the core it will go and which risks it will not take keeps later arguments about the target rather than about temperament.

                ## Milestones
                1. A maximum single deal size as a share of the organisation's value or revenue, agreed with finance.
                2. A stated limit on how far from the core business a target may sit.
                3. Risks the organisation will not take listed, such as unresolved litigation or reputational exposure.
                4. The appetite statement approved by the executive team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An executive-approved risk appetite statement sets a single-deal size limit, a distance-from-core limit and a list of excluded risks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each executive privately how large a single acquisition could safely be"
                - "Compare the answers and note where views differ most"
                - "Draft a risk appetite statement covering size, distance from core and exclusions"
                - "Take the statement to the executive team for approval"
            - name: Acquisition thesis for each strategic theme
              description: |-
                ## Purpose
                Each thesis turns a broad goal like growing in a region into a specific statement of what kind of company to buy, why owning it beats partnering with it and how value would be created. One page per theme, written before the search, is what keeps the team from rationalising whatever target turns up.

                ## Milestones
                1. One thesis page per acquisition theme, covering the target profile, the value case and why ownership is needed.
                2. The two or three ways value would be created named for each thesis, such as cross-selling or capability transfer.
                3. The evidence that would disprove each thesis written down.
                4. Each thesis reviewed by the sponsor and the relevant business leader.

                ## Notes
                A good thesis can be wrong in a specific way. If nothing could disprove it, it is a hope, not a thesis.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each acquisition theme has a one-page thesis naming the target profile, value creation routes and disproving evidence, reviewed by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the acquisition themes from the build, partner or buy results"
                - "Draft a one-page thesis for the theme with the most urgent gap"
                - "Write what evidence would prove each thesis wrong"
                - "Review every thesis with the sponsor and the business leader it serves"
            - name: Market map for the acquisition search
              description: |-
                ## Purpose
                Target lists built from memory and press coverage miss the private, quiet companies that are often the best fits. Mapping each theme's market by segment, region and ownership type, using industry databases, trade associations and customer conversations, gives the long list a complete starting point.

                ## Milestones
                1. Each theme's market split into segments, with an estimate of how many companies sit in each.
                2. Sources listed for finding companies: databases, trade bodies, directories, customer and supplier suggestions.
                3. An initial universe of companies captured in one spreadsheet, with ownership type noted.
                4. Blind spots in the map, such as regions with poor data, written down.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A market map for each theme lists segments and an initial universe of companies with ownership type, plus noted blind spots."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Sketch each theme's market as segments on a single page"
                - "List the databases, trade bodies and directories that cover those segments"
                - "Ask three sales leaders which competitors and partners they meet most"
                - "Capture every company found in one spreadsheet with ownership type"
            - name: Target long list upkeep
              description: |-
                ## Purpose
                Long lists go stale within a quarter: companies get bought, founders retire, numbers change. A monthly hour adding new names, closing dead ones and checking basic facts, plus a quarterly re-rank against the screening criteria, means the list is ready when an opportunity suddenly appears.

                ## Milestones
                1. A single long list with an owner, a last-updated date and a status for every company.
                2. Companies that fail the deal breakers moved to a closed tab with the reason.
                3. A ranked top twenty refreshed each quarter against the screening criteria.
                4. No company on the top twenty with facts older than six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The long list shows an update in each of the last three months and a top twenty re-ranked within the last quarter."
                cadence: rolling
              tasks:
                - "Name one person as owner of the long list"
                - "Add new names and close dead ones on the long list @recurring(monthly:9)"
                - "Re-rank the top twenty targets against the screening criteria @recurring(quarterly)"
                - "Check the facts on any top twenty company not updated in six months"
            - name: Monthly acquisition pipeline review
              description: |-
                ## Purpose
                Pipelines stall quietly when nobody senior looks at them. A thirty-minute monthly review with the sponsor, covering movement on priority targets, new inbound names and decisions needed, keeps the programme visible and forces a call on targets that have sat untouched for too long.

                ## Milestones
                1. A standing monthly thirty-minute slot in the sponsor's diary.
                2. A one-page pipeline summary format agreed: stage, next step, owner and days since last action.
                3. Every review ends with recorded decisions on targets to advance, park or drop.
                4. A quarterly pipeline summary shared with the executive team.

                ## Notes
                Start from the **Metrics log** template to track pipeline counts by stage over time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Pipeline reviews have happened in each of the last three months, each with recorded advance, park or drop decisions."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute pipeline slot with the sponsor"
                - "Hold the pipeline review and record decisions on each priority target @recurring(monthly:16)"
                - "Share a pipeline summary with the executive team @recurring(quarterly)"
                - "Flag any target with no action in ninety days for a park or drop call"
            - name: Relationship building with target owners
              description: |-
                ## Purpose
                The best private acquisitions often go to the buyer the owner already knows and trusts, years before any sale process. A light, steady rhythm of contact with the founders and chief executives of priority targets, through industry events, informal coffees and occasional notes, builds that position without signalling an offer.

                ## Milestones
                1. A relationship owner named for each top twenty target.
                2. A simple contact log showing the last touch and the next planned one for each owner.
                3. Every top ten owner contacted at least twice in a year.
                4. Notes from each conversation on the owner's plans, timing and concerns.

                ## Notes
                Agree with legal what may and may not be said in these conversations before the first one. Never imply an offer that has not been approved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each top ten target owner has at least two logged contacts in the past year, with notes on their plans and timing."
                cadence: rolling
              tasks:
                - "Assign a relationship owner to each top twenty target"
                - "Make one informal contact with a priority target owner @recurring(weekly:thu)"
                - "Update the contact log with last touch and next planned touch @recurring(monthly:23)"
                - "Ask legal for a short note on what to avoid saying in early conversations"
            - name: Inbound opportunity triage
              description: |-
                ## Purpose
                Once word gets out that an organisation is buying, teasers and introductions arrive every week from brokers, advisers and owners. A short weekly triage against the screening criteria gives every inbound name a fast, polite answer and stops sell-side processes from hijacking the programme's priorities.

                ## Milestones
                1. One shared inbox or channel where all inbound opportunities land.
                2. A triage rule: fail on criteria, decline within a week; pass, add to the long list for assessment.
                3. A record of every inbound name with the date received and the decision.
                4. A monthly count of inbound opportunities by source.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every inbound opportunity in the last quarter has a recorded decision made within one week of arrival."
                cadence: rolling
              tasks:
                - "Set up one shared inbox for inbound acquisition opportunities"
                - "Triage new inbound opportunities against the screening criteria @recurring(weekly:tue)"
                - "Count inbound opportunities by source and note any patterns @recurring(monthly:12)"
                - "Write a short, polite decline note to reuse for poor fits"
            - name: Adviser and intermediary network
              description: |-
                ## Purpose
                Brokers, boutique bankers, accountants and industry lawyers see deals before they reach the market, and they show them first to buyers who are clear about what they want and quick to respond. A small network, kept warm with a clear brief on the themes and criteria, turns intermediaries into a source of relevant targets rather than noise.

                ## Milestones
                1. Eight to fifteen intermediaries listed who are active in the organisation's themes and regions.
                2. A one-page buyer brief describing themes, size range and criteria, approved for sharing.
                3. Each intermediary briefed in person or by call.
                4. A record of which intermediaries send relevant opportunities and which do not.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight intermediaries have received the approved buyer brief, and their quality of referrals is reviewed each quarter."
                cadence: rolling
              tasks:
                - "List the intermediaries who closed deals in your sector in the last two years"
                - "Draft a one-page buyer brief and get it approved for sharing"
                - "Review referral quality and re-brief the top intermediaries @recurring(quarterly)"
                - "Drop intermediaries who keep sending opportunities outside the criteria"
            - name: Market and valuation signals watch
              description: |-
                ## Purpose
                Deal prices, competitor purchases and financing conditions shift the case for acquiring, sometimes within a few months. A brief monthly scan of announced deals in your sector, the multiples reported and any change in borrowing conditions tells the sponsor when to lean in and when patience is cheaper.

                ## Milestones
                1. A short list of sources for announced deals and reported multiples in your sector.
                2. A running table of comparable deals with date, buyer, target and any disclosed value.
                3. A monthly three-line note to the sponsor on what has changed.
                4. Competitor acquisitions flagged within a week of announcement.

                ## Notes
                Reported multiples are a rough guide, not a valuation. The organisation's advisers set any actual price view.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The comparable deals table has been updated in each of the last three months, with a three-line note sent to the sponsor each time."
                cadence: rolling
              tasks:
                - "Choose two or three sources that report deals in your sector"
                - "Update the comparable deals table and send the sponsor a three-line note @recurring(monthly:5)"
                - "Summarise the year's sector deals and what they signal @recurring(yearly)"
                - "Set up an alert for acquisitions announced by your main competitors"
            - name: Quarterly acquisition strategy refresh
              description: |-
                ## Purpose
                Strategy moves, a thesis gets disproved, the funding envelope changes after a strong or weak year. A quarterly half-day for the core team to test each thesis against new evidence, adjust the criteria and confirm the themes keeps the programme honest without rewriting it every month.

                ## Milestones
                1. A fixed quarterly half-day in the core team's diaries.
                2. Each thesis rated as strengthened, unchanged or weakened, with the evidence noted.
                3. Any change to criteria, envelope or themes recorded with the date and reason.
                4. A short refresh note sent to the sponsor after each session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The last two quarters each have a refresh note rating every thesis and recording any change to criteria or themes."
                cadence: cyclic
              tasks:
                - "Book four quarterly half-days for the core team"
                - "Rate each thesis against new evidence and record changes @recurring(quarterly)"
                - "Ask the finance director whether the funding envelope has moved"
                - "Send the sponsor a one-page refresh note after each session"
            - name: Annual board review of the acquisition programme
              description: |-
                ## Purpose
                Boards approve acquisition strategies and then hear about them only when a deal arrives. A yearly session that reviews the themes, the pipeline, deals declined and lessons learned keeps directors informed, tests whether the mandate still fits the strategy and makes later deal approvals faster.

                ## Milestones
                1. A slot in the annual board calendar reserved for the acquisition programme.
                2. A paper covering themes, pipeline by stage, deals declined and why, and changes proposed.
                3. Board feedback and any changes to the mandate minuted.
                4. Actions from the session assigned and tracked to completion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "The board has reviewed a written annual acquisition programme paper in the last twelve months, with changes to the mandate minuted."
                cadence: cyclic
              tasks:
                - "Ask the company secretary for a slot on the annual board calendar"
                - "Prepare and present the annual acquisition programme paper to the board @recurring(yearly)"
                - "Record the board's feedback and any mandate changes"
                - "Assign owners to each action from the board session"
            - name: Acquisition decision log
              description: |-
                ## Purpose
                Two years from now, someone will ask why the organisation passed on a company that a competitor then bought and grew. A simple log of every advance, park and drop decision, with the reason and who made it, protects good judgement from hindsight and shows patterns in how the team decides.

                ## Milestones
                1. One log with date, target, decision, reason and decision maker.
                2. Every decision from pipeline reviews and the triage recorded.
                3. A yearly look back at dropped targets that were later sold, and what they went for.
                4. Two or three lessons about the team's judgement written up each year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every advance, park or drop decision of the last six months appears in the log with a reason and decision maker."
                cadence: rolling
              tasks:
                - "Set up the decision log with date, target, decision, reason and owner columns"
                - "Check the log against the month's pipeline and triage decisions @recurring(monthly:27)"
                - "Look up what happened to targets dropped more than a year ago"
                - "Write two lessons about the team's judgement from the look back"
            - name: Confidentiality and code names discipline
              description: |-
                ## Purpose
                Leaked target names can move a share price, upset a seller or alert a rival bidder, and leaks usually come from casual emails rather than spies. Code names for priority targets, a short list of who knows what, and a quarterly check of folder access keep the programme discreet with very little effort.

                ## Milestones
                1. Code names assigned to every target beyond the long list stage.
                2. A list of people with access to the pipeline and what each can see.
                3. Folder and file permissions restricted to that list.
                4. A quarterly access check completed and any changes recorded.

                ## Notes
                Listed companies will have insider rules that apply once a target becomes a live possibility. Ask the company secretary or legal team which rules apply and when.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All targets beyond the long list have code names, and folder access has been checked against the named list within the last quarter."
                cadence: rolling
              tasks:
                - "Assign code names to every target past the long list stage"
                - "Write the list of people with access to the pipeline"
                - "Check folder access against the named list and remove extras @recurring(quarterly)"
                - "Ask legal which insider rules apply to the programme and when"
            - name: How acquisitions create and destroy value
              description: |-
                ## Purpose
                Studies of acquirers have long found that a large share of deals fail to create value for the buyer, mostly through overpaying, overestimating the benefits of combining or poor fit. Understanding the main routes to value and the common ways it leaks away gives a strategy leader the questions to ask before enthusiasm takes over.

                ## Milestones
                1. Two or three well-regarded books or long articles on acquisition performance read and summarised.
                2. The main sources of value creation listed in your own words.
                3. The five most common reasons acquisitions disappoint written down.
                4. A one-page checklist of questions to put to any proposed acquisition.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page checklist of value creation and value destruction questions exists, drawn from at least two summarised sources."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose two books or long articles on why acquisitions succeed or fail"
                - "Summarise each source in a page of notes"
                - "List the five most common reasons deals disappoint"
                - "Turn the notes into a one-page question checklist"
            - name: Reading a target's accounts for strategic fit
              description: |-
                ## Purpose
                Strategy leaders do not need to be accountants, but they do need to spot a business whose revenue is concentrated in one client, whose margins depend on one contract or whose cash never matches its profit. Learning to read published or shared accounts for those signals lets you kill weak targets early, before advisers are paid.

                ## Milestones
                1. The structure of an income statement, balance sheet and cash flow statement understood well enough to explain.
                2. A short list of red flags for strategic fit, such as customer concentration and rising receivables.
                3. Three real company accounts read and annotated with those red flags.
                4. Annotations checked with someone from finance.

                ## Notes
                This is about asking better questions, not about forming a valuation. Finance and the advisers own the detailed analysis.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sets of company accounts have been annotated for strategic fit red flags and reviewed by a finance colleague."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Ask a finance colleague to recommend a short guide to company accounts"
                - "Download three sets of filed accounts for companies on the long list"
                - "Annotate each set for customer concentration, margin trends and cash conversion"
                - "Go through your annotations with the finance colleague"
            - name: Estimating cost savings and revenue gains
              description: |-
                ## Purpose
                Expected savings and revenue gains from combining justify most acquisition premiums, and they are also the numbers most often wrong. Learning to separate cost savings from revenue gains, estimate them conservatively, and attach timing and one-off costs to each prepares a strategy leader to challenge a business case rather than simply accept it.

                ## Milestones
                1. The difference between cost savings and revenue gains, and why revenue gains are discounted more heavily, explained in your own words.
                2. A simple benefits table format with value, timing, one-off cost and confidence.
                3. A practice benefits estimate built for one long list target.
                4. The practice estimate challenged by a finance colleague and revised.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice benefits table for one target, with value, timing, cost and confidence for each line, has been reviewed and revised with finance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a practitioner guide to estimating acquisition savings and revenue gains"
                - "Build a benefits table template with value, timing, cost and confidence"
                - "Fill in a practice estimate for one long list target"
                - "Ask finance to challenge the estimate and note what changed"
            - name: Valuation concepts for strategy leaders
              description: |-
                ## Purpose
                Board conversations about acquisitions quickly turn to multiples, discounted cash flow and control premiums, and a strategy leader who cannot follow them loses the room. Learning what each method assumes, and how small changes in growth or discount rate move the answer, lets you hold your own without doing the valuation yourself.

                ## Milestones
                1. The main valuation methods (comparable deals, trading multiples, discounted cash flow) explained in a page.
                2. A worked example showing how a change in growth or discount rate moves the value.
                3. The idea of paying away the combination benefits through the premium explained in a paragraph.
                4. Your notes checked by finance or an adviser for accuracy.

                ## Notes
                The aim is fluency, not a valuation. Any real price view comes from finance and the organisation's advisers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page valuation primer with a sensitivity example has been checked for accuracy by finance or an adviser."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick one introductory text on company valuation"
                - "Write a one-page summary of the three main methods"
                - "Build a small sensitivity example in a spreadsheet"
                - "Ask finance to check the primer for mistakes"
            - name: Assessing cultural and operating fit
              description: |-
                ## Purpose
                Leaders regularly cite culture and operating mismatch as the reason an acquisition underperformed, yet it is the dimension least often assessed before a deal. Learning practical ways to read a target's decision style, pace, customer approach and people practices from outside and in early meetings makes fit a scored criterion instead of a gut feeling.

                ## Milestones
                1. Five or six dimensions of cultural and operating fit chosen, each with observable signals.
                2. Sources for each signal listed: employee reviews, customer comments, leadership interviews, published policies.
                3. A practice fit assessment written for one target.
                4. The fit dimensions added to the prioritisation scoring model.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice cultural and operating fit assessment exists for one target, and the fit dimensions appear in the scoring model."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose five or six fit dimensions that matter most in your organisation"
                - "List the outside signals you could gather for each dimension"
                - "Write a practice fit assessment for one priority target"
                - "Add the fit dimensions to the target scoring model"
            - name: Case studies of strategy-led acquisitions
              description: |-
                ## Purpose
                Reading how real acquirers reasoned, both those that built lasting businesses through deals and those that wrote off what they bought, sharpens judgement faster than frameworks alone. Working through six case studies and noting what the strategy said before the deal gives the core team shared reference points for future debates.

                ## Milestones
                1. Six case studies chosen: three strong outcomes and three write-downs.
                2. For each, the stated rationale at announcement compared with what happened.
                3. The common thread in the failures and in the successes written in a paragraph each.
                4. A one-hour discussion held with the core team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six case studies have been summarised with rationale versus outcome, and discussed in a one-hour core team session."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose three acquisitions that worked and three that were written down"
                - "Find each deal's announcement and its later results"
                - "Write rationale versus outcome notes for each case"
                - "Run a one-hour discussion on the cases with the core team"
            - name: Approaching a founder-owned business
              description: |-
                ## Purpose
                Founders who built a company over twenty years rarely sell for price alone; they care about staff, customers, their name on the door and what they will do next. Learning how such owners think, what a respectful first approach sounds like and what puts them off prepares the team for the private targets that make up much of most long lists.

                ## Milestones
                1. Three conversations held with people who sold a founder-owned business or advised on one.
                2. A list of the five things founders most often care about beyond price.
                3. A short approach script written and reviewed by legal.
                4. A practice run of the approach with a colleague playing the founder.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A legally reviewed approach script for founder-owned targets exists, based on three conversations with former sellers or advisers."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your network for three people who sold or advised on selling a family firm"
                - "Interview each about what mattered to the owner beyond price"
                - "Draft a first approach script and send it to legal for review"
                - "Rehearse the approach with a colleague playing the founder"
            - name: Choosing the acquisition types to pursue
              description: |-
                ## Purpose
                Bolt-ons that add customers, capability buys that bring a technology or team, scale deals that merge with a peer and adjacency moves into a new market each carry different risks, prices and integration demands. Choosing deliberately which types fit the strategy and the organisation's capacity stops the programme from chasing every shape of deal at once.

                ## Milestones
                1. The main acquisition types described with their typical purpose, risk and integration demand.
                2. Each acquisition theme matched to one or two preferred types.
                3. Types the organisation will not pursue in the next two years stated.
                4. The choice agreed with the sponsor and added to the criteria page.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each acquisition theme has one or two preferred deal types recorded on the criteria page, with excluded types listed and agreed by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a short description of bolt-on, capability, scale and adjacency deals"
                - "Match each acquisition theme to its preferred types"
                - "List the deal types the organisation will not pursue for now"
                - "Agree the choices with the sponsor and update the criteria page"
            - name: Target prioritisation scoring model
              description: |-
                ## Purpose
                Two hundred names on a long list need a consistent way to choose the twenty worth real attention. A simple weighted scoring model, built from the screening criteria, the thesis and fit dimensions, ranks every company the same way and makes it easy to explain to the sponsor why one target sits above another.

                ## Milestones
                1. Six to ten scoring factors chosen, each with a one to five scale and a written definition.
                2. Weights agreed with the sponsor, adding up to one hundred.
                3. The whole long list scored and ranked.
                4. The top twenty checked by the core team for anything the model missed.

                ## Notes
                Keep the model simple enough to score a company in fifteen minutes. A model nobody updates is worse than a rough one used every month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weighted scoring model with defined factors has ranked the whole long list, and the top twenty has been reviewed by the core team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft six to ten scoring factors from the criteria and thesis pages"
                - "Write a one to five definition for each factor"
                - "Agree the weights with the sponsor"
                - "Score the long list and review the top twenty with the core team"
            - name: Buy-side adviser selection
              description: |-
                ## Purpose
                Corporate finance advisers, lawyers and due diligence providers can make or break a deal, and choosing them in a hurry once a target is live usually means choosing on availability. Running a short selection before any deal begins, on sector experience, team, conflicts and fee structure, means the right people are ready when they are needed.

                ## Milestones
                1. The adviser roles needed listed: corporate finance, legal, financial due diligence, and any specialists.
                2. Two or three firms shortlisted for each role, with conflicts checked.
                3. Each shortlisted firm met and scored on sector experience, team and fee approach.
                4. Preferred advisers chosen, with terms of engagement agreed in principle.

                ## Notes
                Start from the **Vendor** template to keep each adviser's contacts, terms and conflict checks in one place.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preferred adviser has been chosen for each needed role, after scoring two or three firms on the same criteria."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the adviser roles a typical deal would need"
                - "Ask peers which firms they used on their last acquisitions"
                - "Meet two or three firms per role and score them on the same criteria"
                - "Record the preferred adviser for each role with agreed terms"
            - name: Minority stake, partnership or full acquisition
              description: |-
                ## Purpose
                For some priority targets, a minority stake, a joint venture or a commercial partnership with an option to buy later delivers most of the strategic value at a fraction of the risk. Working through those structures for the top targets, with the trade-offs in control, cost and exit, prevents the programme from treating full ownership as the only answer.

                ## Milestones
                1. The top five targets each assessed for full acquisition, majority, minority stake and partnership.
                2. For each, the control, cost and exit trade-offs written in a short table.
                3. A preferred structure recorded for each top five target, with the reason.
                4. Legal and finance consulted on any structure the organisation has not used before.

                ## Notes
                Structures with options or staged stakes carry legal and tax consequences. Take the shortlist to legal and tax advisers before any conversation with the target.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each top five target has a recorded preferred ownership structure with its control, cost and exit trade-offs noted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set up a table of structures for the top five targets"
                - "Note the control, cost and exit trade-off of each structure"
                - "Choose a preferred structure for each target and write the reason"
                - "Book a call with legal and finance on any unfamiliar structure"
            - name: Competition and regulatory early screen
              description: |-
                ## Purpose
                A target that would take the organisation's market share above the levels competition authorities examine, or that operates in a licensed sector, can turn a simple deal into an eighteen-month review or block it outright. Asking counsel for an early, high-level view on the top targets avoids months spent on companies that cannot realistically be bought.

                ## Milestones
                1. Combined market positions estimated for each top ten target in the relevant markets.
                2. Targets in licensed or regulated sectors flagged, with the regulator named.
                3. Counsel's high-level view on likely review risk recorded for each top ten target.
                4. Targets with high review risk marked in the scoring model.

                ## Notes
                This is a screen to prepare questions, not a legal opinion. Competition and regulatory conclusions belong to qualified counsel in each relevant jurisdiction.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each top ten target has a recorded counsel view on competition and regulatory review risk, reflected in the scoring model."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate combined market share for each top ten target"
                - "Flag top ten targets that operate in licensed or regulated sectors"
                - "Send counsel a short brief asking for a high-level review risk view"
                - "Mark high review risk targets in the scoring model"
            - name: Strategic fit assessment of the top three targets
              description: |-
                ## Purpose
                Before any approach, the top three targets deserve a written assessment that tests them against the thesis, the criteria, the fit dimensions and the funding envelope using only outside information. A four to six page assessment for each gives the sponsor something real to decide on and gives advisers a clear starting brief if a deal goes ahead.

                ## Milestones
                1. A four to six page assessment for each of the top three targets.
                2. Each assessment covering thesis fit, market position, financial profile, cultural fit and key risks.
                3. Open questions that only the target could answer listed for each.
                4. A recommendation to approach, monitor or drop each target, reviewed by the sponsor.

                ## Notes
                Start from the **Risk register** template to capture each target's main risks with likelihood and impact.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Written fit assessments for the top three targets each end in an approach, monitor or drop recommendation reviewed by the sponsor."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Gather filed accounts, press coverage and customer comments for the top three"
                - "Ask the agent to draft an assessment outline from the thesis and criteria pages"
                - "Write each assessment and list the questions only the target could answer"
                - "Present the three recommendations to the sponsor"
            - name: Ownership hypothesis for priority targets
              description: |-
                ## Purpose
                If nobody can say what would change in the first year of owning a target, or who would run it, the value case is still theoretical. A one-page hypothesis for each priority target, covering what to keep, what to combine, who leads and the first value milestone, tests the thesis and gives the later integration team a starting point rather than a blank page.

                ## Milestones
                1. A one-page ownership hypothesis for each target recommended for approach.
                2. What stays independent and what combines stated for each.
                3. The likely business owner on the buyer side named for each target.
                4. The first measurable value milestone after ownership stated.

                ## Notes
                Keep this to a page. Detailed integration planning belongs later, once a deal is agreed and a dedicated team exists.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each target recommended for approach has a one-page ownership hypothesis naming what combines, who owns it and the first value milestone."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write what would stay independent and what would combine for each target"
                - "Ask the relevant business leader whether they would own the target"
                - "State the first value milestone you would expect after ownership"
                - "Attach each hypothesis to the target's fit assessment"
            - name: Walk-away rules and price discipline
              description: |-
                ## Purpose
                Deal fever is real: once a team has spent months on a target, the price it will accept creeps up and the risks it will tolerate grow. Agreeing walk-away rules before any deal begins, in terms of maximum premium logic, share of combination benefits paid away and non-negotiable conditions, gives the sponsor permission to stop when the deal stops making sense.

                ## Milestones
                1. A rule for how much of the estimated combination benefits the organisation is willing to pay away, agreed with finance.
                2. Non-negotiable conditions listed, such as key people staying or clean title to key assets.
                3. The person with authority to walk away named.
                4. The rules approved by the executive team and stored with the mandate.

                ## Notes
                These are internal discipline rules. The actual valuation and offer come from finance and the organisation's advisers when a deal is live.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Executive-approved walk-away rules set a limit on combination benefits paid away, list non-negotiable conditions and name who can stop a deal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask finance how much of the estimated combination benefits past deals paid away"
                - "List the conditions without which no deal will proceed"
                - "Name the person with authority to walk away from a deal"
                - "Take the rules to the executive team for approval"
            - name: Board approval of the acquisition strategy
              description: |-
                ## Purpose
                Without a board mandate, every target becomes a fresh debate about whether the organisation should be acquiring at all. A dedicated board session that approves the rationale, themes, criteria, funding envelope and walk-away rules gives management clear authority to search and approach, and sets the thresholds at which deals return to the board.

                ## Milestones
                1. A board paper covering rationale, themes, criteria, envelope, risk appetite and walk-away rules.
                2. Directors briefed individually before the meeting on the most contested points.
                3. The board's decision and any conditions minuted.
                4. Approval thresholds recorded: what management may do alone and what returns to the board.

                ## Notes
                Start from the **Board meeting** template for the paper, agenda and minutes.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board has minuted approval of the acquisition strategy, with management's approval thresholds recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the company secretary for an agenda slot for the acquisition strategy"
                - "Write the board paper from the rationale, criteria and envelope pages"
                - "Brief the chair and two key directors before the meeting"
                - "Record the board's decision and management's approval thresholds"
            - name: Executive workshop on acquisition themes
              description: |-
                ## Purpose
                Themes written by the strategy team alone rarely survive their first contact with the business leaders who would own the acquired companies. A one-day executive workshop to test the themes, challenge each thesis and agree the top priorities builds the shared commitment a programme needs when the first target turns difficult.

                ## Milestones
                1. A pre-read sent a week ahead with rationale, themes and draft theses.
                2. A workshop agenda with time for challenge on each theme, not just presentation.
                3. Agreement on the top two or three themes and their business owners.
                4. A one-page summary of decisions and open questions circulated within three days.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An executive workshop has agreed the top acquisition themes with named business owners, and a summary was circulated within three days."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Book a full day with the executive team"
                - "Prepare a pre-read with rationale, themes and draft theses"
                - "Run the workshop with a challenge session on each theme"
                - "Circulate the decisions and open questions within three days"
            - name: First approach meeting with a priority target
              description: |-
                ## Purpose
                The first conversation with a target's owner sets the tone for everything that follows, and a clumsy one can close the door for years. Preparing a clear purpose, what may and may not be said, the questions to ask and a light follow-up gives the meeting the best chance of opening a real discussion.

                ## Milestones
                1. A meeting objective agreed with the sponsor, such as exploring interest in a closer relationship.
                2. Legal guidance on what may be said, and whether a confidentiality agreement is needed first.
                3. Five questions prepared on the owner's plans, priorities and concerns.
                4. Notes written within a day and a follow-up sent within a week.

                ## Notes
                Start from the **Meeting notes** template to capture what the owner said, in their own words where possible.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first approach meeting has written notes within a day and a follow-up message sent within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the objective of the first meeting with the sponsor"
                - "Ask legal what may be said and whether a confidentiality agreement is needed"
                - "Prepare five open questions about the owner's plans"
                - "Write up the meeting notes within a day and send a follow-up"
            - name: Industry event target scouting
              description: |-
                ## Purpose
                Trade shows and sector conferences are where target founders and leadership teams are most visible and most approachable without any signal of intent. Planning one event around the long list, with named people to meet and stands to visit, turns two days of networking into a measurable step forward for the pipeline.

                ## Milestones
                1. One event chosen where several long list companies will exhibit or speak.
                2. A list of target companies attending, with the people to meet.
                3. Conversations held with at least five target companies.
                4. Notes added to the contact log within a week of the event.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least five long list companies have been met at one industry event, with notes added to the contact log within a week."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose the event with the most long list companies attending"
                - "Cross-check the exhibitor and speaker list against the long list"
                - "Request short meetings with the five most relevant companies"
                - "Add every conversation to the contact log within a week"
            - name: Go or no-go gate before opening a deal
              description: |-
                ## Purpose
                The move from strategy to a live deal is when costs jump, advisers start billing and the organisation's reputation is on the line. A formal gate, where the sponsor and finance check the target against the thesis, criteria, fit assessment, regulatory screen and walk-away rules, makes sure only targets that pass every test go forward.

                ## Milestones
                1. A one-page gate checklist built from the thesis, criteria, fit assessment and walk-away rules.
                2. The gate run for the first target recommended for approach.
                3. A recorded go, hold or no-go decision with the reasons.
                4. For a go, the adviser team, budget and board touchpoints confirmed.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The first priority target has been through the gate, with a recorded go, hold or no-go decision and reasons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build the gate checklist from the thesis, criteria and walk-away rules"
                - "Book the gate meeting with the sponsor and the finance director"
                - "Run the gate for the first recommended target and record the decision"
                - "Confirm advisers, budget and board touchpoints if the decision is go"
            - name: Response plan for a rival's acquisition
              description: |-
                ## Purpose
                When a competitor buys a company on your own long list, the pressure to react, sometimes by buying the next best target in a hurry, is intense. A short response plan agreed in calm times sets out how to assess what the rival gained, which customers and staff might be at risk and whether the organisation's own theses still hold.

                ## Milestones
                1. A one-page plan listing who assesses a rival's deal and within how many days.
                2. Questions to answer: what capability or market did the rival gain, and what does it threaten.
                3. Customer and staff retention steps prepared for the most likely scenarios.
                4. A rule that no reactive acquisition goes forward without passing the normal gate.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page rival acquisition response plan names owners, timelines, assessment questions and confirms the normal gate still applies."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name who leads the assessment when a rival announces a deal"
                - "Write the five questions the assessment must answer"
                - "Ask sales and HR for retention steps if key customers or staff are targeted"
                - "Add the rule that reactive deals still pass the normal gate"
            - name: Business unit leader's acquisition proposal
              description: |-
                ## Purpose
                Business unit leaders often spot good targets first but struggle to get them taken seriously by group strategy and finance. Preparing a proposal that links the target to the group strategy, shows the build, partner or buy reasoning and names who would run it gives a divisional manager's idea a fair hearing at group level.

                ## Milestones
                1. The group's acquisition criteria and process obtained and read.
                2. A short proposal linking the target to a named group strategic goal.
                3. The build and partner alternatives considered and the reason to buy stated.
                4. The proposal submitted through the group process and feedback recorded.

                ## Notes
                Talk to group strategy before writing anything. Proposals that arrive as a surprise are usually rejected on process alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A proposal linking one target to a group strategic goal, with build and partner alternatives assessed, has been submitted and feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask group strategy for the acquisition criteria and submission process"
                - "Write how the target serves a named group strategic goal"
                - "Set out why building or partnering would not close the gap"
                - "Submit the proposal and record the feedback from group"
            - name: First acquisition for a mid-sized company
              description: |-
                ## Purpose
                Companies that have never bought anything lack the internal muscle that serial acquirers take for granted: no corporate development team, no adviser relationships and no integration experience. Keeping the first deal small, close to the core and well supported with outside help builds that capability while limiting the damage if things go wrong.

                ## Milestones
                1. A first deal profile defined: small relative to the company, close to the core and simple to combine.
                2. Missing capabilities listed, with the outside help that will cover each.
                3. Three or four candidate targets matching the first deal profile identified.
                4. A learning review planned for six months after any first deal completes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written first deal profile, a list of capability gaps with outside cover, and three or four matching candidates have been agreed with the chief executive."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the profile of a sensible first deal for the company's size"
                - "List the capabilities the company lacks for running a deal"
                - "Find outside help to cover each missing capability"
                - "Identify three or four candidates that fit the first deal profile"
            - name: Group corporate development function charter
              description: |-
                ## Purpose
                Large organisations that acquire regularly need a corporate development function with a clear remit, or business units and group strategy will compete for the same targets and advisers. A charter setting out the team's mandate, its relationship with business units, its reporting and its measures of success gives the function standing across the group.

                ## Milestones
                1. A charter covering mandate, scope, relationship with business units and decision rights.
                2. Reporting lines and the monthly report format agreed.
                3. Three to five measures of success, such as pipeline quality and deals meeting their rationale.
                4. The charter approved by the chief executive and shared with business unit heads.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved corporate development charter with mandate, decision rights and three to five success measures has been shared with business unit heads."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Interview three business unit heads on how they want to work with the team"
                - "Draft the charter covering mandate, scope and decision rights"
                - "Send the corporate development report to the chief executive @recurring(monthly:3)"
                - "Get the chief executive's approval and share the charter with unit heads"
            - name: New chief executive inheriting an acquisition pipeline
              description: |-
                ## Purpose
                New chief executives and strategy leads often inherit a pipeline built on their predecessor's priorities, with advisers expecting the same appetite. Reviewing every live target and thesis against the new leader's view of the strategy in the first few months avoids being carried into a deal they would never have chosen.

                ## Milestones
                1. Every target beyond the long list stage listed with its thesis and current status.
                2. Each target and thesis reviewed against the new leader's strategic priorities.
                3. A decision for each: continue, pause or close.
                4. Advisers and intermediaries told of any change in direction.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every inherited target has a recorded continue, pause or close decision, and advisers have been informed of changes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask for a list of every live target with its thesis and status"
                - "Review each thesis against your own reading of the strategy"
                - "Record a continue, pause or close decision for each target"
                - "Tell advisers and intermediaries about any change in direction"
            - name: Acqui-hire strategy for scarce capability
              description: |-
                ## Purpose
                Sometimes the strategic gap is a team rather than a business: a group of specialists, a research unit or a technology capability that would take years to hire. Acqui-hires buy small companies mainly for their people, which makes retention, role design and the founders' motivation more important than revenue or customers.

                ## Milestones
                1. The capability gap stated in terms of the roles and skills needed.
                2. A shortlist of small companies or teams with that capability.
                3. A retention approach outlined for key people, agreed with HR.
                4. A comparison of acqui-hire cost with the cost and time of hiring directly.

                ## Notes
                Retention terms and incentive structures have employment and tax implications in every jurisdiction. Involve HR and employment counsel early.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of acqui-hire targets with an HR-agreed retention approach and a cost comparison against direct hiring has been recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the roles and skills the capability gap requires"
                - "List small companies or teams with that capability"
                - "Ask HR how key people could be retained after an acqui-hire"
                - "Compare the acqui-hire cost with hiring the same team directly"
            - name: Listed company acquisition messaging
              description: |-
                ## Purpose
                Investors in listed companies form views about acquisition appetite from every remark at results presentations, and a vague answer can mark a company down or invite unwelcome speculation. Agreeing a consistent, approved description of the acquisition strategy with investor relations and legal lets executives answer questions without overcommitting or disclosing too much.

                ## Milestones
                1. An approved short description of the acquisition strategy for public use.
                2. Answers prepared for the five questions investors most often ask about acquisitions.
                3. Disclosure rules that apply to the programme confirmed by legal.
                4. Every executive who speaks to investors briefed on the agreed lines.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved public description of the acquisition strategy and five prepared answers have been briefed to every executive who speaks to investors."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask investor relations which acquisition questions investors ask most"
                - "Draft a short public description of the acquisition strategy"
                - "Get legal to confirm the disclosure rules that apply"
                - "Brief every investor-facing executive on the agreed lines"
            - name: Programmatic acquisition playbook
              description: |-
                ## Purpose
                Acquirers who make many small deals a year in the same themes tend to outperform those who make occasional large bets, largely because they repeat the same process and learn from each deal. A written playbook covering sourcing, screening, gate decisions and handover to integration turns a series of deals into a repeatable programme.

                ## Milestones
                1. A playbook describing each stage from sourcing to handover, with owners and outputs.
                2. Standard documents listed for each stage: criteria page, fit assessment, gate checklist, ownership hypothesis.
                3. A target cadence agreed, such as a number of completed deals a year within capacity.
                4. A review after each deal feeding changes back into the playbook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written playbook covers every stage with owners and standard documents, and has been updated after at least one deal review."
                cadence: rolling
              tasks:
                - "Write the stages from sourcing to handover with an owner for each"
                - "Collect the standard documents each stage uses"
                - "Check progress against the annual deal cadence @recurring(monthly:20)"
                - "Update the playbook after each deal review"
            - name: Buy-and-build platform strategy
              description: |-
                ## Purpose
                In fragmented markets, an organisation can acquire one strong platform business and then add smaller companies to it, building scale that no single player has. The strategy only works if the platform can absorb add-ons, the market has enough suitable targets and the combined business is worth more than its parts, so each needs testing before the first deal.

                ## Milestones
                1. Evidence that the target market is fragmented, with an estimate of the number of add-on candidates.
                2. Criteria for a platform business and separate criteria for add-ons.
                3. The value case for scale stated: purchasing, coverage, shared services or pricing.
                4. A pipeline of add-on candidates reviewed each quarter.

                ## Notes
                Add-ons often look cheap individually, but integration effort grows with each one. Set an absorption limit per year with operations.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A buy-and-build case shows market fragmentation evidence, platform and add-on criteria, a value case for scale and a quarterly add-on review."
                cadence: rolling
              tasks:
                - "Estimate how many independent companies operate in the target market"
                - "Write separate criteria for a platform and for add-ons"
                - "Review the add-on pipeline and the absorption limit @recurring(quarterly)"
                - "Agree a yearly add-on absorption limit with operations"
            - name: Carve-out targets from larger groups
              description: |-
                ## Purpose
                Divisions that large groups want to sell can be attractive, because the seller is motivated and the business is often under-managed, but they arrive without their own finance, IT, HR or sometimes brand. Screening carve-out candidates for those stranded dependencies, and for the transitional support the seller would need to provide, prevents an apparently cheap deal from becoming an expensive rebuild.

                ## Milestones
                1. Groups likely to divest units in your themes identified from public statements and portfolio reviews.
                2. A checklist of shared services a carved-out unit typically depends on.
                3. Each carve-out candidate scored for how much it would need to stand alone.
                4. The likely transitional support needs listed for each candidate.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each carve-out candidate on the long list has a stand-alone dependency score and a list of likely transitional support needs."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search groups' annual reports for units described as non-core"
                - "Write a checklist of shared services a divested unit usually relies on"
                - "Score each carve-out candidate against the checklist"
                - "List the transitional support each candidate would need from its seller"
            - name: Cross-border target screen
              description: |-
                ## Purpose
                Buying abroad adds currency, legal, tax, labour, political and cultural layers that a domestic screen never sees, and many cross-border disappointments trace back to underestimating them. A country-level screen run before targets in a new jurisdiction reach the top twenty shows where the organisation could realistically own and run a business.

                ## Milestones
                1. Each country with long list targets assessed for foreign ownership rules, labour law, currency and political stability, with sources noted.
                2. Local advisers identified for any country that passes the screen.
                3. Countries ranked as open, cautious or excluded for the programme.
                4. Targets in excluded countries moved off the active list.

                ## Notes
                Foreign investment, tax and employment rules change and differ widely. Treat this as a screen for questions, and confirm everything with local counsel and tax advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each country with long list targets has a recorded open, cautious or excluded rating, with sources and local adviser contacts noted."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every country where long list targets are based"
                - "Note foreign ownership, labour, currency and political factors for each"
                - "Ask peers or advisers for local counsel contacts in passing countries"
                - "Rate each country as open, cautious or excluded"
---

# Acquisition Strategy

This area is for the leader who has to decide why the organisation should buy anything at all, what it should look for and which companies deserve attention before a banker or a seller sets the agenda. It starts with the foundations (the strategic rationale, the build, partner or buy test, the funding envelope, screening criteria and an acquisition thesis per theme), moves through the machinery that keeps a target list alive, the skills of judging value and fit, the decisions on deal types, scoring and walk-away rules, the events that win a mandate and open conversations, situations for business unit leaders, first-time acquirers and group corporate development teams, and finally the specialist work of serial acquisition, buy-and-build, carve-outs and cross-border targets.

What repeats is the pipeline: a weekly look at inbound opportunities, monthly target list upkeep, relationship touches and a pipeline review with the sponsor, a quarterly strategy refresh and adviser check-in, and a yearly review of the whole programme with the board. The **Vendor**, **Metrics log**, **Risk register**, **Board meeting** and **Meeting notes** templates pair with adviser selection, the pipeline review, fit assessments, the board mandate and first approach meetings. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
