---
id: family-office.family-governance-framework
name: Family Governance Framework
description: "A governance framework a wealthy family can run: a readiness check, a map of family, business and office roles, forums with clear terms, written decision rights and voting rules, and a yearly review."
category: personal
version: 1.0.0
tags: [family-office, family-governance-framework, parent, retiree, founder, family-governance, decision-rights, family-enterprise]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - board-meeting
    - reading-queue
    - course
    - purchase-decision
    - trip
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Governance Framework
          description: "Setting up how a wealthy family makes decisions together: forums, roles, decision rules, the links between family, business and office, and a regular review."
          projects:
            - name: Family governance readiness assessment
              description: |-
                ## Purpose
                Before anyone drafts a rule, it helps to know why the family wants governance now: a founder turning 70, a second generation marrying, a sale offer, or simply decisions that keep stalling. A short readiness check, done through private conversations with each adult member, shows how much structure the family needs and how much appetite there is for it.

                ## Milestones
                1. A one-page list of the triggers that make governance urgent for this family.
                2. Every adult member spoken to privately with the same six questions.
                3. Areas of agreement and disagreement summarised without naming who said what.
                4. A recommended starting level agreed: light, moderate or full governance.

                ## Notes
                Keep the interview notes confidential to whoever runs the check. People speak more freely when they know their words will not be quoted back at a family dinner.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written readiness summary drawn from interviews with every adult member, with a recommended starting level agreed by the senior generation."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the three to five events that make governance a live question now"
                - "Draft six interview questions to ask every adult member in the same way"
                - "Hold a private conversation with each adult member and take notes"
                - "Summarise themes in an anonymous one-page readiness report"
            - name: Family, business and office stakeholder map
              description: |-
                ## Purpose
                Governance goes wrong when someone who matters is forgotten: an in-law who runs a division, a minor beneficiary of the main trust, a non-family chief executive. Drawing every person and entity on one map, with how they connect to the family, the operating business and the family office, gives the design group a complete picture to work from.

                ## Milestones
                1. Every living family member listed by generation and branch.
                2. Each operating company, holding entity, trust and the family office drawn on the same chart.
                3. Lines showing who owns, who works in and who governs each entity.
                4. Key non-family people, such as trustees and senior executives, added.
                5. The map checked by one member of each branch for gaps.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single stakeholder map covering every family member, entity and key non-family person, checked by a member of each branch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every family member by generation and branch, including spouses"
                - "Add each company, trust, holding entity and the family office to the chart"
                - "Draw ownership, employment and governance links in different colours"
                - "Send the draft map to one person per branch to check for gaps"
            - name: Three-circle role map for every adult member
              description: |-
                ## Purpose
                Most family tension comes from people wearing several hats at once: a daughter who is a shareholder, an employee and a trustee will see a dividend decision differently from a brother who is only a shareholder. Placing each adult in the family, ownership and business circles makes those overlaps visible, so forums can be designed around them rather than tripping over them.

                ## Milestones
                1. Each adult member placed in one of the seven zones of the three-circle model.
                2. Family office roles added as a fourth layer where relevant.
                3. The members who sit in all three circles identified by name.
                4. The role map shared with the design group and kept with the framework papers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-circle role map placing every adult member in a zone, shared with the design group and updated at least once a year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw the family, ownership and business circles on one page"
                - "Place every adult member in the zone that matches their current roles"
                - "Note which members hold a family office role as well"
                - "Update the role map when anyone joins, marries or changes role @recurring(yearly)"
            - name: Governance scope statement
              description: |-
                ## Purpose
                Family governance can drift into deciding everything, from the colour of the holiday house to the business's capital budget. Writing down which decisions belong to the family's forums, which stay with the business board and the office, and which remain private to each household stops the framework becoming either toothless or intrusive.

                ## Milestones
                1. A list of decision types the family forums will own.
                2. A list of decisions left to the business board, trustees and the office.
                3. A short list of matters that stay private to each household.
                4. The statement agreed by the design group and attached to the framework.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page scope statement separating family, business, office and household decisions, agreed by the design group."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List twenty real decisions the family has faced in the last five years"
                - "Sort each one into family forum, business board, office or household"
                - "Write the sorted list up as a one-page scope statement"
                - "Ask the design group to agree or amend the scope statement"
            - name: Inventory of how decisions are made today
              description: |-
                ## Purpose
                Every family already has a governance system, even if it is a founder's phone call or a sibling who quietly decides. Recording how the last dozen real decisions were actually made, who was consulted and who found out afterwards gives an honest baseline and shows which habits are worth keeping.

                ## Milestones
                1. Twelve recent decisions listed across money, property, the business and family matters.
                2. For each, who decided, who was consulted and who was told afterwards recorded.
                3. Patterns noted, such as decisions that always fall to one person.
                4. Two or three current practices marked as worth keeping in the new framework.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written inventory of at least twelve recent decisions showing who decided and who was consulted, with patterns and keepers noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick twelve decisions from the last three years across different topics"
                - "Record who decided, who was asked and who learned of each afterwards"
                - "Mark the decisions that caused friction and note why"
                - "Write down the current habits the family wants to keep"
            - name: Governance design working group
              description: |-
                ## Purpose
                A framework imposed by the senior generation rarely survives it, and one designed by the whole family at once never gets finished. A small working group of four to seven people, with at least one member from each branch and generation, can do the drafting while the wider family is consulted at fixed points.

                ## Milestones
                1. Membership agreed, with every branch and at least two generations represented.
                2. A written mandate setting out what the group designs and what it must bring back for approval.
                3. A meeting rhythm and a target date for a first full draft.
                4. A named convenor and a note-taker for every meeting.

                ## Notes
                Resist adding a member for every grievance. A group larger than seven tends to argue rather than draft; others can be consulted instead.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A working group of four to seven members with a written mandate, a meeting rhythm and a first-draft date agreed by the senior generation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Propose four to seven names covering every branch and two generations"
                - "Write a one-page mandate saying what the group drafts and what it brings back"
                - "Agree a meeting rhythm and a date for the first full draft"
                - "Name a convenor and a note-taker for the group"
            - name: Choosing an independent governance facilitator
              description: |-
                ## Purpose
                An outside facilitator lets the founder be a family member in the room rather than the chair, and can say what siblings cannot say to each other. Comparing two or three family business advisers or consultants on experience, method and fees, with references from other families, avoids hiring whoever the business's lawyer happens to know.

                ## Milestones
                1. A brief describing the family, the scope and the expected timeline.
                2. Three facilitators approached and interviewed by two members of the design group.
                3. References taken from at least two families each facilitator has worked with.
                4. A facilitator appointed with fees, confidentiality and scope set out in writing.

                ## Notes
                Start from the **Vendor** template. Check the facilitator has no role with the business or the family's trustees that would make them less than independent.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An independent facilitator appointed after interviewing three candidates and taking references, with a written engagement letter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a two-page brief on the family, scope and timeline"
                - "Ask peer families and advisers for three facilitator names"
                - "Interview each facilitator with the same questions and score them"
                - "Take two references for the preferred facilitator"
                - "Sign an engagement letter covering scope, fees and confidentiality"
            - name: Agreed design principles for family governance
              description: |-
                ## Purpose
                Arguments over clauses are usually arguments over principles in disguise: fairness versus equality, merit versus birthright, privacy versus openness. Agreeing five to eight design principles first, in plain words, gives the working group a test for every later draft and a way to settle disputes without personalities.

                ## Milestones
                1. A long list of candidate principles collected from the readiness interviews.
                2. Five to eight principles chosen and written in one sentence each.
                3. Each principle tested against two hard cases the family has faced.
                4. The principles approved by the senior generation and the design group.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Five to eight written design principles, each tested against real cases and approved by the senior generation and the design group."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull candidate principles from the readiness interview summary"
                - "Cut the list to five to eight principles of one sentence each"
                - "Test each principle against two hard cases from the family's history"
                - "Present the principles for approval at a family meeting"
            - name: Governance budget and who pays for it
              description: |-
                ## Purpose
                Meetings, travel, facilitators, legal drafting and a governance portal all cost money, and resentment builds when one branch quietly pays for everything. Setting a governance budget and agreeing whether it is met by the business, the office or the family pro rata keeps the framework funded and fair.

                ## Milestones
                1. A first-year cost estimate covering meetings, advisers, travel and systems.
                2. A funding source agreed: business, family office, trust or members in shares.
                3. The tax and accounting treatment of that choice checked with the family's accountant.
                4. The budget approved and a named person accountable for spending against it.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved annual governance budget with a written funding source, checked with the accountant and owned by a named person."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate a year of meeting, adviser, travel and systems costs"
                - "List the possible funding sources and the fairness issue with each"
                - "Ask the family accountant how each funding source would be treated"
                - "Set next year's governance budget and compare it with actual spend @recurring(yearly)"
            - name: Governance framework blueprint document
              description: |-
                ## Purpose
                Families often end up with a constitution, a council charter and a handful of policies that nobody has ever seen side by side. One short blueprint document that shows every forum, how they relate, which policies sit beneath them and where each document lives is the master reference the rest of the framework hangs from.

                ## Milestones
                1. A structure chart showing every forum and how it links to the business board and the office.
                2. A one-paragraph description of each forum's purpose and membership.
                3. A list of the policies and charters that sit under each forum.
                4. The blueprint approved by the design group and circulated to every adult member.

                ## Notes
                Keep the blueprint under ten pages. The detail belongs in the constitution and each forum's terms of reference, which have their own projects elsewhere in this pillar.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A blueprint of under ten pages with a structure chart and forum descriptions, approved by the design group and sent to every adult member."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Sketch a structure chart of every forum, the board and the office"
                - "Write one paragraph per forum on purpose, membership and authority"
                - "List the charters and policies that will sit under each forum"
                - "Circulate the approved blueprint to every adult member"
            - name: Decision rights matrix across family, business and office
              description: |-
                ## Purpose
                When a cousin asks the office to fund a venture or the business chief executive wants to sell a division, everyone needs to know who decides, who must be consulted and who is simply told. A decision rights matrix covering the thirty or so recurring decision types turns those questions into a lookup rather than a family argument.

                ## Milestones
                1. Thirty recurring decision types listed, from dividend policy to admitting a new forum member.
                2. For each, the forum or person who decides, recommends, is consulted and is informed.
                3. Spending and value thresholds set where authority changes hands.
                4. The matrix checked against the business's articles and any trust deeds by the family lawyer.
                5. The matrix adopted and stored with the framework blueprint.

                ## Notes
                A matrix that contradicts a shareholders' agreement or a trust deed will lose. Ask the lawyer to read it against those documents before it is adopted.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adopted decision rights matrix covering at least thirty decision types, checked by the family lawyer against existing legal documents."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List thirty recurring decisions across family, business and office"
                - "Mark who decides, recommends, is consulted and is informed for each"
                - "Set value thresholds where authority moves between forums"
                - "Send the draft matrix to the family lawyer to check against existing documents"
            - name: Voting thresholds, quorum and proxy rules
              description: |-
                ## Purpose
                Nobody should be asking whether a proxy counts, or whether abstentions are votes against, in the middle of a vote that might split the family. Writing the rules for quorum, simple and special majorities, consensus, proxies and remote votes, in advance, means a contested decision is judged on its merits rather than its procedure.

                ## Milestones
                1. Quorum rules set for each forum.
                2. Decisions that need consensus, a special majority or a simple majority listed.
                3. Rules on proxies, abstentions, remote attendance and written resolutions agreed.
                4. A tie-break or deadlock route written down for each forum.
                5. The rules adopted and added to each forum's terms of reference.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written quorum, majority, proxy and deadlock rules for every forum, adopted and included in each forum's terms of reference."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set a quorum for each forum based on its size and branches"
                - "Sort decisions into consensus, special majority and simple majority"
                - "Write the rules on proxies, abstentions and remote votes"
                - "Agree a deadlock route such as a cooling-off period then an independent chair"
            - name: Family governance calendar
              description: |-
                ## Purpose
                Meetings that run on goodwill stop the year a key member is busy. A single calendar holding every assembly, council, committee, review and filing date, published a year ahead, lets members across households and time zones plan around it and makes missed meetings visible.

                ## Milestones
                1. Every forum's meeting dates for the next twelve months fixed.
                2. Paper deadlines set a week before each meeting.
                3. The calendar shared with every forum member and their assistants.
                4. A monthly check that the next ninety days are on track.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month governance calendar published to all forum members, with no meeting in the year moved for lack of papers."
                cadence: rolling
              tasks:
                - "Collect proposed dates for every forum for the next twelve months"
                - "Set paper deadlines one week before each meeting"
                - "Send the coming year's governance calendar to every forum member @recurring(yearly)"
                - "Check the next ninety days of governance dates and confirm paper owners @recurring(monthly:3)"
            - name: Family decision log
              description: |-
                ## Purpose
                Families forget what they decided faster than businesses do, and a disputed memory of a promise made at a holiday gathering can sour a branch for years. A simple log of every forum decision, with date, wording, rationale and the owner of any action, becomes the family's shared memory.

                ## Milestones
                1. A log format with date, forum, decision wording, rationale, owner and status.
                2. Decisions from the last year's meetings entered retrospectively.
                3. Every new forum decision entered within a week of the meeting.
                4. Open actions reviewed each quarter and chased.

                ## Notes
                Record the decision in the exact words agreed in the room. Paraphrasing later is where disputes start.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision log updated within a week of every forum meeting for a full year, with open actions reviewed quarterly."
                cadence: rolling
              tasks:
                - "Set up a log with date, forum, wording, rationale, owner and status"
                - "Enter decisions from the last twelve months of meetings"
                - "Add the month's forum decisions to the log with wording and owner @recurring(monthly:24)"
                - "Review open actions in the decision log and chase their owners @recurring(quarterly)"
            - name: Family policy register with review dates
              description: |-
                ## Purpose
                Over a decade a family can accumulate policies on employment, loans, property use, philanthropy and media that contradict each other or quietly lapse. A register listing every policy, which forum owns it, when it was adopted and when it is due for review keeps the rule book current and consistent.

                ## Milestones
                1. Every existing family policy and charter found and listed.
                2. An owning forum and a named steward recorded for each.
                3. A review date set for each policy, no more than three years out.
                4. Overlaps or contradictions between policies flagged to the owning forums.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A policy register listing every family policy with owner, adoption date and review date, with no policy past its review date."
                cadence: rolling
              tasks:
                - "Gather every family policy, charter and side agreement into one folder"
                - "List each one with its owning forum, steward and adoption date"
                - "Set a review date for each policy no more than three years ahead"
                - "Check which policies fall due for review in the coming quarter @recurring(quarterly)"
            - name: Business board to family information flow
              description: |-
                ## Purpose
                Family shareholders who learn about a major acquisition from the newspaper stop trusting the board, while a board that briefs every relative separately loses control of confidential news. Agreeing what the operating business shares with the family forums, how often and through whom gives owners enough to govern without turning them into managers.

                ## Milestones
                1. A list of the information family owners receive and at what frequency.
                2. A named channel, usually the chair or a family director, for questions to the board.
                3. Rules on what is confidential and who may see it before announcement.
                4. A quarterly owner update in use for four consecutive quarters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An agreed owner information list and channel, with a quarterly business update sent to family forums for four quarters running."
                cadence: rolling
              tasks:
                - "Ask family owners what they need to know about the business and how often"
                - "Agree the list and the channel for questions with the business chair"
                - "Write the rule for handling price-sensitive or confidential news"
                - "Circulate the agreed quarterly business update to family forum members @recurring(quarterly)"
            - name: Family office reporting into governance forums
              description: |-
                ## Purpose
                The family office often serves several households and the forums, and can end up taking instructions from whoever calls loudest. Defining what the office reports to the council or assembly, and what it only reports to each household, makes the office accountable to the family's governance rather than to individual members.

                ## Milestones
                1. The office's reporting lines to each forum written down.
                2. A standard governance note format covering budget, risks and open decisions.
                3. Household-level matters separated from forum-level reporting.
                4. Monthly governance notes produced for six months in a row.

                ## Notes
                Detailed wealth reporting has its own area in this pillar. This project is about who the office answers to, not the content of portfolio reports.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written office reporting lines to each forum and six consecutive monthly governance notes in the agreed format."
                cadence: rolling
              tasks:
                - "Write who in the office reports to which forum and on what"
                - "Agree a one-page governance note format with the head of office"
                - "List the matters the office reports only to individual households"
                - "Review the office's monthly governance note before it is circulated @recurring(monthly:15)"
            - name: Annual conflicts of interest declarations
              description: |-
                ## Purpose
                A council member who also lends to the business, or a trustee whose firm bills the office, may act perfectly well but will look compromised the day a decision goes against someone. A yearly declaration from every forum member, with a simple rule for stepping out of a discussion, protects both the decision and the person.

                ## Milestones
                1. A one-page declaration form covering business dealings, loans, roles and close relationships.
                2. A rule on when a member must leave the room or abstain.
                3. Declarations collected from every forum member each year.
                4. A register of declared interests held by the forum secretary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Signed annual declarations from every forum member for two consecutive years, held in a register by the forum secretary."
                cadence: cyclic
              tasks:
                - "Draft a one-page interests declaration form"
                - "Write the rule for when a member steps out or abstains"
                - "Send conflict of interest declaration forms to every forum member @recurring(yearly)"
                - "File returned declarations in the interests register"
            - name: Confidentiality rules for governance papers
              description: |-
                ## Purpose
                Valuations, health news, loan requests and family disputes all sit in governance papers, and a forwarded email can put them in front of a journalist, an ex-spouse or a business rival. Clear rules on who receives which papers, how they are shared and how long they are kept protect the family without making the forums secretive.

                ## Milestones
                1. Paper categories defined, such as open to all members, forum only and restricted.
                2. Rules on forwarding, printing and sharing with personal advisers written down.
                3. A secure place for papers chosen instead of personal email.
                4. Every forum member's acknowledgement of the rules recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written confidentiality rules with paper categories and a secure sharing method, acknowledged in writing by every forum member."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define three or four categories for governance papers"
                - "Write the rules on forwarding, printing and sharing with advisers"
                - "Move governance papers out of personal email into one secure folder"
                - "Check the access list for the governance papers folder @recurring(quarterly)"
            - name: Annual governance health survey
              description: |-
                ## Purpose
                Members who feel unheard rarely say so in a meeting chaired by a parent. A short anonymous survey each year, asking whether people understand the framework, trust the forums and feel fairly represented, gives an early warning before frustration turns into a branch withdrawing.

                ## Milestones
                1. A survey of ten to fifteen questions with space for comments.
                2. An anonymous collection method run by the facilitator or an adviser.
                3. Results summarised and compared with the previous year.
                4. Three actions agreed in response and reported back to the family.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An anonymous survey run each year with a response rate of at least 70 percent and three agreed actions reported back."
                cadence: cyclic
              tasks:
                - "Draft ten to fifteen survey questions on understanding, trust and fairness"
                - "Ask the facilitator to run the survey so answers stay anonymous"
                - "Send the governance health survey to all adult members @recurring(yearly)"
                - "Report the results and three agreed actions at the next assembly"
            - name: Annual governance framework review
              description: |-
                ## Purpose
                Ten years on, a framework written for a founder and three children will not fit a family with spouses, grandchildren and a sold division. A yearly review meeting that looks at the health survey, the decision log, the policy register and the year's friction points keeps the framework alive rather than framed on a wall.

                ## Milestones
                1. A review pack with the survey results, decision log summary and policy register status.
                2. The review meeting held with the council or design group.
                3. Agreed amendments listed with owners and dates.
                4. Approved changes made to the blueprint and circulated.

                ## Notes
                Start from the **Board meeting** template. Keep amendments to a short list each year; constant rewriting makes the framework feel unstable.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review held for two consecutive years, each producing a written list of approved amendments reflected in the blueprint."
                cadence: cyclic
              tasks:
                - "Assemble the review pack from the survey, decision log and policy register"
                - "Hold the annual governance framework review meeting @recurring(yearly)"
                - "List agreed amendments with an owner and a date for each"
                - "Update the blueprint and circulate the changes to every adult member"
            - name: Governance documents library
              description: |-
                ## Purpose
                Years can be lost arguing over which version of a charter was actually signed. One library holding the current approved version of every governance document, with superseded versions archived and dated, means anyone can find the rule that applies today in two minutes.

                ## Milestones
                1. A folder structure by forum and document type.
                2. The current signed version of every governance document filed.
                3. Superseded versions archived with their dates of replacement.
                4. Access granted according to the confidentiality rules.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A governance library holding the signed current version of every document, with superseded versions archived and access set by the confidentiality rules."
                cadence: rolling
              tasks:
                - "Create a folder structure by forum and document type"
                - "File the current signed version of every governance document"
                - "Name files with the document, version and approval date"
                - "File newly signed documents and archive superseded drafts @recurring(monthly:9)"
            - name: Learning the three-circle and family enterprise models
              description: |-
                ## Purpose
                The vocabulary of family governance, from the three-circle model to the stages of owner, sibling partnership and cousin consortium, makes design conversations shorter and less personal. A few weeks of reading and discussion gives the design group a shared language before it starts drafting.

                ## Milestones
                1. The three-circle model and the owner, sibling and cousin stages understood and explained back.
                2. Two or three standard texts or courses on family enterprise governance completed.
                3. A one-page family glossary of the terms the framework will use.
                4. A short discussion held placing the family on the development stages.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The design group has completed the agreed reading and written a one-page glossary, and the family's development stage is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick two standard books or courses on family enterprise governance"
                - "Read the chapters on the three-circle model and development stages"
                - "Write a one-page glossary of the terms the framework will use"
                - "Discuss with the design group which stage the family is in"
            - name: Chairing family meetings well
              description: |-
                ## Purpose
                Chairing a meeting where your mother, your brother and your own children sit around the table is harder than chairing any board. Learning to set agendas, keep time, draw out quiet members and close items with a clear decision gives whoever chairs the forums a fair chance of being trusted by every branch.

                ## Milestones
                1. A short course or coaching sessions on chairing completed.
                2. An agenda template with timings and decision items in use.
                3. Feedback collected from members after three meetings.
                4. One change made to chairing style in response to the feedback.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The chair has completed chairing training, run three meetings with a timed agenda and acted on written member feedback."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Book a chairing course or three coaching sessions"
                - "Build an agenda template with timings and decision items"
                - "Ask three members for written feedback after each meeting"
                - "Choose one chairing habit to change and try it at the next meeting"
            - name: Consensus and voting methods for families
              description: |-
                ## Purpose
                Families often default to pure consensus, which lets one member block everything, or to simple majority, which lets one branch outvote the rest. Learning a few alternatives, such as consent-based decisions, weighted branch votes and fall-back voting after a consensus attempt, gives the family real choices when writing its rules.

                ## Milestones
                1. Four decision methods studied with their strengths and failure modes.
                2. Each method tried on a low-stakes family decision.
                3. A recommendation written on which methods suit which decision types.
                4. The recommendation passed to whoever drafts the voting rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of at least four decision methods, each tried once, with a recommendation passed to the rule drafters."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read about consensus, consent, majority and weighted branch voting"
                - "Try one method on a small decision such as the next gathering's venue"
                - "Note what worked and what frustrated people with each method"
                - "Write a one-page recommendation for the voting rules"
            - name: Family governance case study reading
              description: |-
                ## Purpose
                Other families' mistakes are the cheapest lessons available: the cousin buy-out that bankrupted a holding company, the founder who wrote a constitution and then ignored it. Reading one published case study a month and writing a single takeaway builds judgement in the people who will sit in the forums.

                ## Milestones
                1. A reading list of twelve family governance case studies.
                2. One case read each month with a one-line takeaway recorded.
                3. Two takeaways discussed at a forum meeting.
                4. Twelve cases completed in a year.

                ## Notes
                Start from the **Reading queue** template. Business school case collections and family business journals are good sources.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve case studies read in a year, each with a recorded takeaway, and at least two discussed at a forum meeting."
                cadence: rolling
              tasks:
                - "Build a reading list of twelve family governance case studies"
                - "Read one family governance case study and note one takeaway @recurring(monthly:19)"
                - "Bring the most useful takeaway to the next forum meeting"
            - name: Family governance course for adult members
              description: |-
                ## Purpose
                Understanding confined to the drafters is not enough: a framework only works when every adult member knows how it runs. A short in-house course covering the forums, the decision rights matrix, the voting rules and members' own duties lets in-laws, young adults and members who live abroad take part on equal terms.

                ## Milestones
                1. A course outline of four short sessions.
                2. Materials drafted, with examples drawn from the family's own decisions.
                3. Sessions delivered in person and recorded for those who cannot attend.
                4. A short check at the end confirming each attendee can find the rules that apply.

                ## Notes
                Start from the **Course** template. Learning programmes for children and teenagers belong to the next-generation education area of this pillar.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A four-session governance course delivered and recorded, with at least 80 percent of adult members completing it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Outline four sessions covering forums, decision rights, voting and duties"
                - "Ask the agent to draft session notes from the framework blueprint"
                - "Deliver the sessions and record them for members abroad"
                - "Track which adult members have completed the course"
            - name: Peer family governance network
              description: |-
                ## Purpose
                Peer families of similar size and stage face the same questions, and a frank conversation with another family's chair is worth more than a conference keynote. Joining a peer network, roundtable or family business association gives the family a confidential sounding board outside its own advisers.

                ## Milestones
                1. Two or three peer networks or associations compared on membership and confidentiality.
                2. One network joined by at least two family members.
                3. Sessions attended through the year with notes shared with the council.
                4. One idea from a peer family tested in the framework.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Membership of one peer network held by two family members, with four sessions attended in a year and notes shared."
                cadence: rolling
              tasks:
                - "Ask advisers and peers which family business networks they rate"
                - "Compare two or three networks on membership, cost and confidentiality"
                - "Attend a peer family forum or roundtable session @recurring(quarterly)"
                - "Share a short note of useful ideas with the council"
            - name: Which governance rules should be legally binding
              description: |-
                ## Purpose
                Some families want their constitution to be a moral compact, others want parts of it enforceable through shareholders' agreements, articles or trust deeds. Deciding with the family lawyer which rules stay as family policy and which need legal force avoids both empty promises and documents nobody dares to change.

                ## Milestones
                1. Each major rule in the framework tagged as moral, policy or candidate for legal force.
                2. The family lawyer's view obtained on where each candidate would sit legally.
                3. A decision recorded on which rules move into binding documents.
                4. A drafting plan agreed with the lawyer for those changes.

                ## Notes
                This is a legal question with tax and jurisdiction effects. The project prepares the family to decide with its lawyer; it does not decide for them.
              priority: medium
              deadlineOffsetDays: 200
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision, informed by the family lawyer's written view, on which governance rules move into binding legal documents."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Tag each major rule as moral compact, family policy or legal candidate"
                - "Send the tagged list to the family lawyer with the existing legal documents"
                - "Meet the lawyer to hear where each candidate rule could sit"
                - "Record the family's decision and the drafting plan in the decision log"
            - name: Separating family forums from the business board
              description: |-
                ## Purpose
                In first-generation families the board meeting and the family dinner are often the same conversation, which leaves non-family directors sidelined and family members confused about their role. Deciding which matters move to a family forum and which stay with a properly constituted board is one of the most useful changes a growing family makes.

                ## Milestones
                1. Current board agendas reviewed for family matters that do not belong there.
                2. Those matters assigned to a family forum in the decision rights matrix.
                3. Family members told which hat they wear in each meeting.
                4. Two board meetings held without family-only items on the agenda.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Family-only matters moved off the business board's agenda for two consecutive meetings, with their new forum recorded in the matrix."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Review the last four board agendas for family-only items"
                - "Assign each family item to a forum in the decision rights matrix"
                - "Brief family directors on which role they hold in each meeting"
                - "Ask the board chair to keep family-only items off the next agenda"
            - name: Independent members on family governance bodies
              description: |-
                ## Purpose
                An independent member on the council or a family committee can break deadlocks and ask the obvious questions relatives avoid, but too many outsiders make the family feel governed by strangers. Weighing the case, the number and the selection method gives the family a deliberate answer instead of an accidental appointment.

                ## Milestones
                1. The forums where an independent member would help identified.
                2. The role, term, fee and confidentiality terms for an independent written.
                3. A selection method agreed, including who interviews and who approves.
                4. A decision recorded on whether to appoint and how many.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on independent members for each forum, with written role terms and a selection method if any are to be appointed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the forums where an outside voice would help most"
                - "Draft the role, term and fee for an independent member"
                - "Agree who would interview and approve a candidate"
                - "Record the decision on independents in the decision log"
            - name: Family governance officer role
              description: |-
                ## Purpose
                Someone has to send the papers, keep the decision log, chase declarations and remind the chair of deadlines. Deciding whether that is a family member, a family office employee or an outside adviser, and writing the role down, stops governance administration landing on whoever is most conscientious.

                ## Milestones
                1. The administrative tasks of the framework listed with rough hours per year.
                2. Three options compared: a family member, an office employee or an outside secretary.
                3. A role description written for the chosen option.
                4. The role filled and announced to every forum.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written governance officer role description and a named person in the role, announced to every forum."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every recurring governance admin task with an hours estimate"
                - "Compare a family member, an office employee and an outside secretary"
                - "Write a one-page role description for the chosen option"
                - "Announce the governance officer to every forum"
            - name: Branch representation versus equal individual votes
              description: |-
                ## Purpose
                When one sibling has five children and another has one, a council seat per person and a seat per branch produce very different families. Modelling both approaches, and hybrids, against the family's actual tree over the next twenty years lets the family choose representation it can live with as it grows.

                ## Milestones
                1. The family tree projected forward twenty years by branch.
                2. Per-person, per-branch and hybrid representation modelled on that projection.
                3. Each model tested against the agreed design principles.
                4. A representation decision recorded and written into the forum rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A representation model chosen after comparing per-person, per-branch and hybrid options against a twenty-year projection, and written into forum rules."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Project the family tree twenty years ahead by branch"
                - "Model seats under per-person, per-branch and hybrid rules"
                - "Test each model against the family's design principles"
                - "Write the chosen model into the forum rules"
            - name: Choosing a family governance portal
              description: |-
                ## Purpose
                Board portals and family governance platforms can hold papers, votes, calendars and the decision log in one secure place, but families often buy one and keep using email anyway. A short comparison focused on security, ease of use for older members and cost, with a trial before signing, gives the family a tool it will actually use.

                ## Milestones
                1. Requirements written, including security, mobile access and ease of use.
                2. Three portals or secure workspace options shortlisted.
                3. A one-month trial run with three members of different ages.
                4. A decision recorded and, if a portal is chosen, papers moved into it.

                ## Notes
                Start from the **Purchase decision** template. Ask the office's security adviser to review the shortlisted options before signing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A portal decision made after a one-month trial with three members, with papers moved into the chosen tool if one is adopted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a requirements list covering security, access and ease of use"
                - "Shortlist three portals or secure workspace options"
                - "Run a one-month trial with three members of different ages"
                - "Record the choice and set a date to move papers into it"
            - name: Simplifying an overbuilt governance structure
              description: |-
                ## Purpose
                Enthusiastic first drafts often create an assembly, a council, five committees and a dozen policies for a family of fourteen people, and attendance collapses within two years. Reviewing which forums actually meet, decide and add value, then merging or retiring the rest, keeps the framework proportionate.

                ## Milestones
                1. Attendance and decisions over the last two years counted for every forum.
                2. Forums that rarely meet or never decide identified.
                3. A proposal to merge or retire them put to the council.
                4. The blueprint and policy register updated to the simpler structure.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every forum assessed on two years of attendance and decisions, with an approved simplification reflected in the blueprint."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count meetings held, attendance and decisions for each forum"
                - "Mark forums that rarely meet or never decide"
                - "Propose merging or retiring those forums at the next council"
                - "Update the blueprint and policy register after approval"
            - name: Governance health indicators for the family
              description: |-
                ## Purpose
                Without a few measures, the annual review becomes a debate about feelings. Choosing five or six indicators, such as attendance by branch, decisions taken on time, policies in date and survey trust scores, shows whether governance is working and where it is slipping.

                ## Milestones
                1. Five or six indicators chosen with a definition for each.
                2. A baseline recorded for each indicator.
                3. Indicators scored each year before the framework review.
                4. Trends over three years shown in the review pack.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five or six defined governance indicators with a baseline and at least one annual score included in the review pack."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose five or six indicators and write a definition for each"
                - "Record a baseline for each indicator from last year's records"
                - "Score the family against the agreed governance indicators @recurring(yearly)"
            - name: Governance framework launch meeting
              description: |-
                ## Purpose
                Emailed as a PDF, a framework is read by three people; one presented at a well-run family meeting is owned by everyone in the room. A launch meeting that explains why the family is doing this, walks through the forums and rules, and answers questions openly gives the framework its first real authority.

                ## Milestones
                1. A date and venue fixed with every adult member able to attend or join remotely.
                2. A short presentation and a plain-language summary prepared.
                3. The meeting held with the facilitator and a question session.
                4. Questions and concerns recorded and answered in writing within a month.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch meeting held with at least 80 percent of adult members present, and every recorded question answered in writing within a month."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Fix a date and venue that every adult member can reach or join remotely"
                - "Prepare a short presentation and a four-page plain-language summary"
                - "Run a question session and record every question asked"
                - "Send written answers to all questions within a month"
            - name: Framework adoption by every adult member
              description: |-
                ## Purpose
                Hearing about a framework is not the same as agreeing to follow it. A formal adoption step, where each adult reads the summary, raises any last points and signs an acknowledgement, turns the framework into a shared commitment and gives later disputes a clear reference point.

                ## Milestones
                1. A one-page acknowledgement drafted with the family lawyer's input.
                2. Every adult member sent the final framework and the acknowledgement.
                3. Outstanding objections heard and either resolved or recorded.
                4. Signed acknowledgements filed in the governance library.

                ## Notes
                An acknowledgement is usually a moral commitment, not a contract. Ask the lawyer to word it so nobody mistakes one for the other.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Signed acknowledgements from every adult member filed in the governance library, with any remaining objections recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page acknowledgement with the family lawyer"
                - "Send the final framework and acknowledgement to every adult member"
                - "Meet anyone with remaining objections and record the outcome"
                - "File every signed acknowledgement in the governance library"
            - name: First annual family governance retreat
              description: |-
                ## Purpose
                Two days away together, with formal sessions in the morning and time as a family in the afternoon, often does more for trust than a year of meetings. Planning the first retreat around the framework, the annual review and something every generation enjoys builds the habit of gathering on purpose.

                ## Milestones
                1. A date, venue and budget agreed for a two-day retreat.
                2. An agenda balancing governance sessions with family time.
                3. Childcare and activities arranged for the youngest members.
                4. The retreat held and a short feedback note collected.

                ## Notes
                Start from the **Trip** template. Rotate the host branch each year so one household does not carry the work.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-day retreat held with a governance agenda and family time, attended by most adult members, with feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Agree a date, venue and budget for a two-day retreat"
                - "Draft an agenda with morning governance sessions and free afternoons"
                - "Arrange childcare and activities for the youngest members"
                - "Collect a short feedback note from every attendee"
            - name: Five-year refounding review of the framework
              description: |-
                ## Purpose
                Yearly reviews tune the framework; every five years it is worth asking whether its foundations still fit. A refounding review revisits the design principles, scope and forum structure against how the family has changed, such as new marriages, a generation coming of age or the business being sold.

                ## Milestones
                1. A summary of how the family, business and office have changed in five years.
                2. The design principles and scope statement re-tested against that summary.
                3. A proposal for structural changes, or a recorded decision that none are needed.
                4. Approved changes made and every adult member informed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A five-year review completed with principles and scope re-tested and a recorded decision on structural changes."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a summary of how the family has changed in five years"
                - "Re-test the design principles and scope against that summary"
                - "Propose structural changes or record that none are needed"
                - "Inform every adult member of the outcome"
            - name: Governance reset after a business sale
              description: |-
                ## Purpose
                Selling the operating business turns a family enterprise into a family of investors overnight, and forums built around running a company suddenly have little to decide. Resetting the framework, shifting attention to the office, the investment policy and shared purpose, prevents the family drifting apart once the business no longer holds it together.

                ## Milestones
                1. The forums and policies tied to the operating business identified.
                2. A revised scope written for the family's life after the sale.
                3. Forums reshaped around the office, philanthropy or shared assets.
                4. The revised framework explained to every adult member within a year of completion.

                ## Notes
                Families often rush to restructure in the months after a sale. A calmer twelve months, with advisers helping on the money side, usually produces better governance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A revised framework for post-sale life adopted within a year of completing the sale, with business-only forums reshaped or retired."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the forums and policies that only existed to run the business"
                - "Draft a revised scope statement for the family after the sale"
                - "Propose how each forum will be reshaped or retired"
                - "Present the revised framework at a family meeting"
            - name: Founder handing decisions to shared governance
              description: |-
                ## Purpose
                Founders who built the wealth are used to deciding alone, quickly, and are often right. Moving from that to forums where children and in-laws have votes is hard, and works best as a planned sequence of decisions handed over one category at a time, with the founder keeping an agreed set of powers for an agreed period.

                ## Milestones
                1. The founder's current decision powers listed in full.
                2. A sequence agreed for which categories pass to which forum and when.
                3. The powers the founder keeps, and for how long, written down.
                4. The first two categories handed over and working for six months.

                ## Notes
                Leadership succession has its own area in this pillar. This project is about decision authority inside the governance framework, not who becomes the next head of the family.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written hand-over sequence of the founder's decision powers, with at least two categories transferred and working for six months."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every decision the founder currently makes alone"
                - "Group them into categories and propose an order for handing them over"
                - "Write down the powers the founder keeps and until when"
                - "Hand over the first category and review it after six months"
            - name: Elder's advisory seat after stepping back
              description: |-
                ## Purpose
                Retired parents who step off the council can feel discarded, while those who stay too long can stifle everyone else. Defining an advisory or honorary role, with a clear right to be consulted but not to veto, keeps their experience in the room and gives the next generation room to lead.

                ## Milestones
                1. The elder's wishes on involvement after stepping back recorded.
                2. An advisory role defined with rights to attend, speak and be consulted.
                3. The limits of the role, including no veto, written down.
                4. The role announced and reviewed after one year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written advisory role for the stepping-back elder, agreed with them and announced to the family, reviewed after one year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the elder how involved they want to stay and in what"
                - "Draft the advisory role with rights to attend, speak and be consulted"
                - "Write the limits of the role clearly, including no veto"
                - "Review how the role is working after its first year"
            - name: Explaining the family framework to teenagers
              description: |-
                ## Purpose
                Teenagers notice when adults disappear into meetings and come back tense, and a framework they hear about only at eighteen feels like rules imposed on them. Parents explaining, at home and at the right level, why the family has forums and how decisions are made prepares children to take part willingly later.

                ## Milestones
                1. A short, age-appropriate explanation of the forums and why they exist.
                2. A conversation held with each teenager in the household.
                3. Their questions noted and passed to the council where useful.
                4. Teenagers invited to observe one open session of an assembly.

                ## Notes
                Keep wealth figures out of these conversations unless both parents agree. The point is how the family decides, not how much it has.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Each teenager in the household has had a conversation about the framework and been invited to observe an open assembly session."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a half-page explanation of the forums in plain words"
                - "Agree with your partner what will and will not be shared"
                - "Have the conversation with each teenager at a relaxed moment"
                - "Ask the council to invite teenagers to an open assembly session"
            - name: Governance for a family spread across countries
              description: |-
                ## Purpose
                When branches live in London, Miami and Port of Spain, a 9 a.m. meeting is a midnight call for someone, and different legal systems shape what each branch can sign. Designing meeting times, remote voting, language and document rules for a dispersed family stops distance from becoming a reason one branch drifts away.

                ## Milestones
                1. Each branch's country and time zone mapped.
                2. Meeting times rotated so no branch always attends at night.
                3. Remote attendance and electronic voting rules written into forum rules.
                4. Any cross-border legal or tax points on signing flagged to the family's advisers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written rules for rotating meeting times, remote attendance and electronic votes, with cross-border legal points raised with advisers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Map every branch's country and time zone"
                - "Set a rotation of meeting times across the year"
                - "Write the rules for remote attendance and electronic votes"
                - "Ask advisers whether signing rules differ for any branch's country"
            - name: Blended families and second marriages in the framework
              description: |-
                ## Purpose
                Second marriages, stepchildren and children from a first relationship raise questions every framework needs to answer before they become personal: who is a family member for governance, who can sit in forums and how branches are counted. Settling those definitions calmly, in advance, protects everyone from a decision made in the heat of a wedding or a divorce.

                ## Milestones
                1. A definition of family member for governance purposes drafted.
                2. The positions of stepchildren, adopted children and second spouses set out.
                3. The definitions checked against existing trust deeds with the family lawyer.
                4. The definitions adopted and added to the framework blueprint.

                ## Notes
                Marital agreements have their own area in this pillar. This project is only about who counts as family inside the governance forums.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An adopted written definition of family membership for governance covering step, adopted and second-marriage relationships, checked by the lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a definition of family member for governance purposes"
                - "Set out how stepchildren, adopted children and second spouses are treated"
                - "Ask the family lawyer to check the definitions against trust deeds"
                - "Add the adopted definitions to the framework blueprint"
            - name: Decision continuity if a key decision-maker loses capacity
              description: |-
                ## Purpose
                A stroke or dementia diagnosis in the family chair can freeze decisions the business, the trusts and the office depend on. Mapping which decisions each key person holds, checking that powers of attorney and alternates exist, and writing who steps in, keeps the framework working through the hardest months.

                ## Milestones
                1. Every decision power held by a single individual listed.
                2. Powers of attorney, alternates and deputy chairs checked for each.
                3. Gaps raised with the family lawyer and closed.
                4. A one-page continuity note stored with the governance library.

                ## Notes
                Powers of attorney and their equivalents differ by country. The lawyer must confirm what is valid where the person and the assets are.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A continuity note naming an alternate for every single-person decision power, with legal gaps closed by the family lawyer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every decision power held by one person alone"
                - "Check whether a power of attorney or alternate covers each one"
                - "Book a meeting with the family lawyer to close the gaps"
                - "Store a one-page continuity note in the governance library"
            - name: Emergency decision protocol between meetings
              description: |-
                ## Purpose
                Urgent matters, such as a kidnap threat, a regulator's letter or an offer for the business, will not wait for the next quarterly council. A short protocol saying who can convene an emergency session, how fast, with what quorum and what interim powers apply lets the family act quickly without bypassing its own rules.

                ## Milestones
                1. The kinds of matter that justify an emergency session defined.
                2. Who can call one, minimum notice and emergency quorum set.
                3. Interim powers of the chair, and their limits, written down.
                4. The protocol tested once with a desk exercise.

                ## Notes
                Crisis communications and security responses have their own areas in this pillar. This protocol covers only how governance decisions get made under time pressure.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written emergency decision protocol with notice, quorum and interim powers, tested at least once with a desk exercise."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Define the matters that justify an emergency session"
                - "Set who can call one, the minimum notice and the emergency quorum"
                - "Write the chair's interim powers and their limits"
                - "Test the emergency decision contact list with a dry run @recurring(yearly)"
            - name: Trustee and protector interface with family forums
              description: |-
                ## Purpose
                Trustees hold legal ownership of much family wealth and must act independently, yet family forums often expect them to follow council decisions. Agreeing how trustees and protectors receive the family's views, what the council can only recommend and where letters of wishes fit, avoids trustees feeling pressured and the family feeling ignored.

                ## Milestones
                1. Every trust and its trustees and protectors mapped against the forums.
                2. A written note on what the family may recommend and what trustees alone decide.
                3. A regular channel agreed for sharing the family's views with trustees.
                4. The note reviewed by the trustees and the family lawyer.

                ## Notes
                Trustee duties are set by the trust deed and local law. Ask the lawyer and the trustees themselves to confirm the note, rather than assuming the family's forums carry any authority over them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written interface note between forums and trustees, reviewed by the trustees and the family lawyer, with a regular channel in use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map every trust, trustee and protector against the family forums"
                - "Draft a note on what forums recommend and what trustees decide"
                - "Agree a regular channel for sharing family views with the trustees"
                - "Send the note to the trustees and the family lawyer for review"
            - name: Cousin consortium governance for the third generation
              description: |-
                ## Purpose
                Governance that worked for four siblings who grew up together strains when thirty cousins, many of whom barely know each other, share ownership. Planning the shift to a cousin consortium, with elected rather than automatic seats, branch-neutral rules and more formal processes, gives the framework a chance to survive its third generation.

                ## Milestones
                1. The number of third-generation members and their ages projected.
                2. Forums and rules that assume siblings identified and listed.
                3. Elected seats, term limits and branch-neutral rules drafted.
                4. A transition timetable agreed with the current council.

                ## Notes
                Most family enterprises do not reach the cousin stage intact. The ones that do usually changed their governance before the generation arrived, not after.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A cousin-stage governance proposal with elected seats and term limits, and a transition timetable agreed with the current council."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Project the number and ages of third-generation members"
                - "List the rules that only work while siblings run the forums"
                - "Draft elected seats, term limits and branch-neutral rules"
                - "Agree a transition timetable with the current council"
---

# Family Governance Framework

This area is for the family that has outgrown deciding things around the kitchen table: a founder whose business now supports three households, parents with adult children who will one day own it together, or a retired couple who want the family to make good decisions without them in the chair. It starts with foundations (a readiness check, a stakeholder and role map, a scope statement and a design group), then the operating machinery of decision rights, voting rules, a governance calendar, a decision log and a policy register, the skills behind chairing and consensus, the choices on independent members, binding rules and representation, the dated launch and adoption events, situations such as a founder stepping back, a business sale or a family spread across countries, and finally specialist work on emergencies, trustees and cousin consortiums.

What repeats is a monthly decision log and governance calendar check, a quarterly policy register and business update, and a yearly cycle of conflict declarations, a health survey, the governance budget and the annual framework review. The Board meeting, Vendor, Course, Reading queue, Purchase decision and Trip templates pair with the review, the facilitator choice, family training, case study reading, the portal decision and the retreat. None of this replaces advice: agree anything with legal or tax effect with the family's lawyer and other advisers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
