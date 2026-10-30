---
id: fundraising-investors.post-round-board-setup
name: Post-Round Board Setup
description: "A board built properly after a round: seats mapped and filed, D&O cover, observer letters, a working agreement and delegation table, new directors onboarded, and routines that keep the relationship working."
category: business
version: 1.0.0
tags: [fundraising-investors, post-round-board-setup, founder, manager, board-of-directors, governance, board-observers, director-onboarding]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - onboarding-plan
    - one-on-one
    - vendor
    - skills-matrix
    - board-meeting
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Post-Round Board Setup
          description: "Setting up the board after a round, welcoming new directors and observers and agreeing how the board will work."
          projects:
            - name: Board composition map from the closing documents
              description: |-
                ## Purpose
                After closing, the board you actually have is set by the articles and the shareholders' agreement, not by what was said on the term sheet call. Mapping every seat, who holds the right to appoint it, the observer rights and any independent seat that needs joint consent gives everyone one agreed picture before the first meeting is called.

                ## Milestones
                1. Every board seat listed with the holder of the appointment right and the clause it comes from.
                2. Observer rights listed separately, with who may attend and what papers they may receive.
                3. Unfilled seats, including any independent seat needing joint approval, flagged with who must agree.
                4. Shareholding thresholds that keep or remove each appointment right noted.
                5. The map checked by the company's lawyer and shared with the founders.

                ## Notes
                Where the signed documents and the term sheet differ, the signed documents govern. Ask counsel rather than relying on memory of the negotiation.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page board composition map, checked by counsel, lists every seat with its appointing party, source clause and any shareholding threshold."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the final signed articles and shareholders' agreement from the closing set"
                - "List each board and observer right with its clause number"
                - "Note the shareholding threshold behind each appointment right"
                - "Send the draft map to the company's lawyer for a check"
            - name: Director appointment consents and registry filings
              description: |-
                ## Purpose
                Each new director usually needs to sign a consent to act, be appointed by board resolution or written notice from the appointing shareholder, and be filed with the company registry within a set number of days. A missed filing leaves the public record wrong just when a lender or acquirer checks it, and some registries fine late filers.

                ## Milestones
                1. A signed consent to act from each new director held on file.
                2. Each appointment recorded by board resolution or appointing shareholder notice, dated and filed.
                3. The registry filing made within the local deadline, with the confirmation saved.
                4. The internal register of directors updated with addresses, appointment dates and other directorships.
                5. Any resigning director's resignation filed the same way.

                ## Notes
                Filing periods and forms differ by country. Ask the company's lawyer or company secretary for the local deadline and write it on the checklist.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new director's consent, appointment record and registry filing confirmation is on file, each filed within the local deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel for the appointment forms and the local filing deadline"
                - "Collect a signed consent to act from each new director"
                - "Record the appointments by board resolution or written notice"
                - "Submit the registry filing and save the confirmation receipt"
                - "Update the internal register of directors with the new details"
            - name: Directors' and officers' insurance before new directors join
              description: |-
                ## Purpose
                Many investor directors will not sit on a board without directors' and officers' cover in place, and their funds often ask for evidence before the first meeting. Getting quotes through a broker, with a limit sized to the company's stage and new investor base, avoids a first meeting spent explaining why the policy is missing.

                ## Milestones
                1. Investor requirements for D&O cover, including any minimum limit in the closing documents, written down.
                2. Quotes from at least two insurers obtained through a broker.
                3. A policy bound, with its limit, retention and renewal date recorded.
                4. A one-page summary of cover sent to every director and observer.

                ## Notes
                Start from the **Purchase decision** template. Ask the broker to explain the exclusions and whether observers are covered, and have counsel check the policy against the indemnity terms.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A D&O policy is bound before the first post-round board meeting, with a cover summary sent to every director and observer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the closing documents for any required D&O cover or minimum limit"
                - "Brief a commercial insurance broker on the new board and round size"
                - "Compare at least two quotes on limit, retention and exclusions"
                - "Send a one-page cover summary to each director and observer"
            - name: Director indemnity deeds for each board member
              description: |-
                ## Purpose
                Insurance pays for many claims, but an indemnity from the company fills gaps in the policy and sets out how legal costs are advanced while a claim is fought. Investor directors commonly expect one, and the articles may already permit it, so agreeing one standard deed and signing it for every director keeps founders and investors on the same terms.

                ## Milestones
                1. Whether the articles allow director indemnities confirmed by counsel.
                2. One standard form of indemnity deed agreed and approved by the board.
                3. A signed deed held for every current director.
                4. The deed added to the appointment checklist so future directors sign it on joining.

                ## Notes
                Indemnity scope is a legal question with local limits. Treat counsel's form as the standard and avoid negotiating different versions director by director.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved standard indemnity deed is signed by every current director and listed on the appointment checklist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel whether the articles permit director indemnities"
                - "Agree one standard indemnity deed form with counsel"
                - "Approve the form at a board meeting or by written resolution"
                - "Collect a signed deed from each current director"
            - name: Board observer letter and confidentiality terms
              description: |-
                ## Purpose
                Observers attend and receive papers but do not vote, and without a written letter nobody is sure whether they can be asked to leave for privileged items or what they may pass back to their fund. A short observer letter, signed before their first meeting, settles attendance, confidentiality, conflicts and the right to exclude them from parts of a meeting.

                ## Milestones
                1. Each observer right in the closing documents matched to a named person.
                2. A standard observer letter covering confidentiality, conflicts and exclusion drafted with counsel.
                3. The letter signed by each observer and countersigned by the company.
                4. The agenda items where observers may be excluded, such as legal advice, described in the board working agreement.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every observer has signed the standard observer letter before attending a board meeting, with signed copies on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Match each observer right to the person the investor has named"
                - "Ask counsel for a standard observer letter with an exclusion clause"
                - "Send the letter to each observer for signature"
                - "File signed letters with the director appointment records"
            - name: Delegation of authority to the management team
              description: |-
                ## Purpose
                Once a board with investor directors exists, staff need to know which decisions the CEO can make alone and which need the board or the investors. A delegation of authority table with spending limits, hiring levels, contract values and signatories stops the board being asked about every laptop, and stops management signing something that needed approval.

                ## Milestones
                1. Matters reserved to the board or investors under the documents listed as the outer limit.
                2. A table of at least ten decision types, each with its approver and limit.
                3. The table approved by the board and minuted.
                4. Finance, legal and the leadership team briefed on the limits.
                5. A yearly review of the limits booked in the board calendar.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved delegation of authority table sets an approver and limit for at least ten decision types and has been shared with the leadership team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the matters the documents reserve to the board or investors"
                - "Draft limits for spending, hiring, contracts, pricing and signing"
                - "Put the table to the board for approval and minute it"
                - "Brief the leadership team on the approved limits"
                - "Review the delegation limits with the board @recurring(yearly)"
            - name: New director onboarding pack
              description: |-
                ## Purpose
                An investor director who joins after diligence knows the deal but often not the people, the product roadmap or what keeps the team awake at night. A tight onboarding pack, sent a week before the first meeting, means they arrive ready to help rather than spending the meeting catching up.

                ## Milestones
                1. A pack covering company history, strategy, the current plan, the leadership team and the top five risks.
                2. Governance pages included: an articles and shareholders' agreement summary, the delegation table and the board working agreement.
                3. A one-page summary of the cap table after the round.
                4. Introductory calls booked between each new director and every member of the leadership team.
                5. Feedback from each director on what was missing, added to the pack.

                ## Notes
                Start from the **Onboarding plan** template. Keep the pack under 30 pages and link to the data room for detail.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new director received the onboarding pack at least seven days before their first board meeting and has had calls with the leadership team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a contents list for the director onboarding pack"
                - "Gather strategy, plan, team and risk pages into one folder"
                - "Add a one-page post-round cap table summary"
                - "Book introductory calls with each leadership team member"
                - "Send the pack to each new director a week before the meeting"
            - name: Board working agreement
              description: |-
                ## Purpose
                Boards fall out over process far more often than over strategy: papers arriving the night before, directors emailing staff directly, decisions taken by phone and never minuted. Agreeing a two-page working agreement with the new directors in the first month sets expectations on meeting frequency, paper deadlines, contact between meetings, decision style and the use of written resolutions.

                ## Milestones
                1. A draft covering meeting frequency and length, paper deadlines, attendance and closed sessions.
                2. Rules for how directors contact staff, customers and candidates between meetings.
                3. A default for decisions between meetings, including when written resolutions are used.
                4. The agreement discussed and adopted at the first post-round board meeting.
                5. A review date six months out set.

                ## Notes
                The working agreement sits inside what the articles and shareholders' agreement already say. It records habits, not legal rights.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page board working agreement is adopted at the first post-round board meeting and its adoption is recorded in the minutes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each new director what made the best boards they sat on work"
                - "Draft a two-page working agreement from their answers"
                - "Circulate the draft with the first meeting papers"
                - "Record adoption of the agreement in the minutes"
            - name: Conflicts of interest register for directors and observers
              description: |-
                ## Purpose
                Investor directors often sit on other boards, including companies that compete with you or sell to you, and a conflict nobody declared can taint a decision months later. A written register of each director's and observer's other interests lets the chair ask for recusal before an item comes up rather than after.

                ## Milestones
                1. A declaration form covering other directorships, fund portfolio overlaps, advisory roles and personal interests.
                2. A completed declaration from every director and observer.
                3. The register kept with the board records and read by counsel for obvious conflicts.
                4. A standing declarations item at the start of every board agenda.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conflicts register holds a signed declaration from every director and observer, and a declarations item opens every board agenda."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a conflicts declaration form with counsel"
                - "Collect a completed declaration from each director and observer"
                - "Add a declarations item to the top of the standing agenda"
                - "Ask every director and observer to refresh their declaration @recurring(yearly)"
            - name: Information sharing rules between investor directors and their funds
              description: |-
                ## Purpose
                Directors appointed by a fund report back to their partnership, and that is expected, but board papers also hold customer names, salary data and legal advice that should not travel. Agreeing in writing what directors may share with their fund, what stays in the room and how privileged material is marked protects the company without starving investors of information.

                ## Milestones
                1. Confidentiality clauses in the shareholders' agreement and observer letters summarised.
                2. Board material sorted into three categories: shareable with the fund, board only, and privileged.
                3. A marking convention for papers agreed with counsel.
                4. The rules discussed with each investor director and recorded in the working agreement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written information sharing rule with three marking categories is in the board working agreement and applied to the next set of board papers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the confidentiality clauses that bind directors and observers"
                - "Draft three marking categories for board material"
                - "Check the marking convention with counsel before first use"
                - "Walk each investor director through the sharing rules"
            - name: Register of directors and statutory filings upkeep
              description: |-
                ## Purpose
                Directors change address, take new directorships and occasionally resign, and both the company's own register and the public registry have to keep up. A quarterly check of both records against reality catches a missed filing before diligence on the next round does.

                ## Milestones
                1. The internal register of directors and the public registry record compared line by line.
                2. Differences corrected, with filings made and receipts saved.
                3. Each director asked once a year to confirm their registered details.
                4. A change log kept with every change and its filing date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The internal register of directors and the public registry record match at every quarterly check, with a dated change log kept."
                cadence: rolling
              tasks:
                - "Download the registry's current list of the company's directors"
                - "Start a change log with dates and filing references"
                - "Reconcile the internal register to the registry record @recurring(quarterly)"
                - "Ask each director to confirm address and other directorships @recurring(yearly)"
            - name: Monthly one-to-one with each director
              description: |-
                ## Purpose
                Surprises in the boardroom usually come from directors who only hear from the CEO at meetings and save their worries for the room. A short monthly call with each director, with no slides, keeps the relationship working, surfaces concerns early and gives the CEO a regular place to ask for specific help.

                ## Milestones
                1. A 30-minute monthly slot agreed with each director.
                2. A running notes page per director with their concerns and offers of help.
                3. Every help request tracked to an outcome.
                4. The cadence reviewed with each director after six months.

                ## Notes
                Start from the **1:1** template. Observers can join a quarterly version if their investor asks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each director has had a monthly one-to-one for six consecutive months, with notes and help requests recorded."
                cadence: rolling
              tasks:
                - "Book a recurring 30-minute call with each director"
                - "Create a notes page for each director from the 1:1 template"
                - "Hold the monthly call with each director @recurring(monthly:9)"
                - "Close or update every open help request after each call"
            - name: D&O cover renewal and limit review
              description: |-
                ## Purpose
                Cover that fitted a seed-stage board can be thin after a larger round, a new market or a first acquisition. Reviewing the policy each year, two months before renewal, with the broker and then the board, keeps the limit in step with the company and avoids a lapse at the worst moment.

                ## Milestones
                1. Renewal date and broker contact recorded in the board calendar.
                2. Changes since the last renewal listed: funding, headcount, countries, acquisitions and any claims.
                3. Renewal terms compared with at least one alternative quote.
                4. The board told of the renewed limit and any changed exclusions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The D&O policy is renewed before expiry each year and the board is told the renewed limit and any changed exclusions."
                cadence: cyclic
              tasks:
                - "Put the D&O renewal date and broker contact in the board calendar"
                - "List changes to the company since the last renewal"
                - "Start the D&O renewal review with the broker @recurring(yearly)"
                - "Report the renewed limit and exclusions to the board"
            - name: Observer attendance and access review
              description: |-
                ## Purpose
                Observer seats tend to multiply: a fund sends an associate as well as a partner, a former observer keeps access to board papers, a strategic investor's observer sits in on a discussion about a competing bid. A quarterly review of who attended, who has access and which items they were excluded from keeps the room the size the documents intended.

                ## Milestones
                1. Current observers matched to the rights that support them.
                2. Board document access matched to the current list of directors and entitled observers.
                3. Access removed for departed observers and associates.
                4. Exclusions from privileged items recorded in the minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At every quarterly review, board document access matches the current list of directors and entitled observers exactly."
                cadence: rolling
              tasks:
                - "List every person who attended the last two board meetings"
                - "Check each attendee against the board composition map"
                - "Review observer attendance and document access @recurring(quarterly)"
                - "Remove access for anyone no longer entitled to papers"
            - name: Closed session at the end of each board meeting
              description: |-
                ## Purpose
                Sometimes directors need to talk without management present, about the CEO's performance, pay or a sensitive investor matter. Making a short closed session routine at every meeting, rather than calling one only when something is wrong, removes the alarm and gives the chair a regular channel back to the CEO.

                ## Milestones
                1. A closed session of 10 to 15 minutes written into the working agreement and on every agenda.
                2. A named director who gives the CEO feedback from each session within two days.
                3. Closed sessions held at three consecutive meetings.
                4. Feedback themes kept in a private note by the CEO.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A closed session is held at three consecutive board meetings and the CEO receives feedback within two days each time."
                cadence: rolling
              tasks:
                - "Add a closed session slot to the end of the standing agenda"
                - "Agree which director feeds back to the CEO after each session"
                - "Note the feedback themes after each closed session"
                - "Confirm the closed session is on the next agenda @recurring(quarterly)"
            - name: Board contacts, assistants and logistics sheet
              description: |-
                ## Purpose
                Meeting invitations go astray when a partner's assistant changes, a director moves time zone or nobody knows how directors claim travel. One sheet with each director's and observer's contact details, assistant, time zone, travel preferences and expense arrangements turns running the board into an administrative task rather than a search.

                ## Milestones
                1. A sheet with contact, assistant, time zone and preferred channel for each director and observer.
                2. Expense reimbursement rules for directors written down.
                3. Board calendar invitations sent through the assistants listed.
                4. The sheet checked against reality each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A board contacts sheet covers every director and observer and has been checked within the last quarter."
                cadence: rolling
              tasks:
                - "Create a board contacts sheet with assistant and time zone columns"
                - "Ask each director's office for their assistant and travel details"
                - "Write down how directors claim travel and meeting expenses"
                - "Check the board contacts sheet is current @recurring(quarterly)"
            - name: Appointment right threshold check after share changes
              description: |-
                ## Purpose
                Many board rights fall away when an investor's holding drops below a set percentage, or move to a new share class after the next round. Checking each investor's holding against its threshold whenever shares are issued or transferred tells you early whether a seat is still owed, and avoids awkward conversations built on stale assumptions.

                ## Milestones
                1. Thresholds from the board composition map listed beside each investor's current holding.
                2. Holdings recalculated, on the basis the documents use, after each share issue, transfer or conversion.
                3. Any seat at risk flagged to the founders and counsel.
                4. The composition map updated after each check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each investor's holding is checked against its board appointment threshold within a quarter of every share issue or transfer."
                cadence: rolling
              tasks:
                - "Copy each investor's appointment threshold from the composition map"
                - "Calculate each investor's holding on the basis the documents specify"
                - "Recheck investor holdings against board thresholds @recurring(quarterly)"
                - "Tell counsel and the founders about any seat at risk"
            - name: Founder alignment before each board meeting
              description: |-
                ## Purpose
                Co-founders who disagree in front of a new board signal confusion, and investor directors notice. A short founders' session a week before each meeting, to agree the asks, the hard news and who presents what, settles disagreements among the founders first while still letting them be raised honestly when they matter.

                ## Milestones
                1. A founders' session scheduled a week before every board meeting.
                2. An agreed list of decisions requested, bad news and an owner for each item.
                3. Unresolved founder disagreements written down with a plan for how to raise them.
                4. Three consecutive meetings prepared this way.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A founders' alignment session with written asks and owners has taken place before three consecutive board meetings."
                cadence: rolling
              tasks:
                - "Book a founders' session one week before the next board meeting"
                - "Write the decisions you will ask the board for"
                - "Agree who presents each item and who answers questions on it"
                - "Hold the founders' pre-board session @recurring(quarterly)"
            - name: Directors' duties for founder directors
              description: |-
                ## Purpose
                Becoming one director among several investor appointees changes a founder's position: duties are owed to the company as a whole, not to the founders or to any one shareholder. Learning the core duties in your jurisdiction, with a briefing from counsel, helps founders know when to declare an interest, when to take advice and when a board decision binds them.

                ## Milestones
                1. A plain summary of directors' duties in your jurisdiction from counsel or the registry's guidance.
                2. Three situations at your company where duties could pull against founder interests written down.
                3. A one-hour briefing with counsel held for all founder directors.
                4. Questions and answers from the briefing saved with the board records.

                ## Notes
                This is organisational preparation, not legal advice. Counsel's view in your jurisdiction is what counts, particularly if the company nears insolvency, when duties can shift toward creditors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All founder directors have attended a counsel briefing on directors' duties and hold a written summary with answers to their own questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the registry's or government's published guide to directors' duties"
                - "Write three situations where your duties and founder interests might differ"
                - "Book a one-hour duties briefing with counsel"
                - "Save the briefing questions and answers with the board records"
            - name: Investor directors and their two loyalties
              description: |-
                ## Purpose
                A partner on your board owes duties to your company and also answers to the fund that appointed them, and the two can pull apart in a down round, a sale or a bridge. Understanding how good investor directors handle that tension, and where they step back, lets founders read board behaviour accurately instead of taking it personally.

                ## Milestones
                1. Situations where a fund's interest can differ from the company's listed, such as follow-ons, sales and bridges.
                2. Each investor director's fund position on reserves and follow-on investment understood.
                3. A recusal practice for conflicted votes agreed in the working agreement.
                4. Two experienced founders asked how they handled this with their own boards.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note lists five situations where investor director and company interests may differ, with the agreed recusal practice for each."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List decisions where a fund's interest could differ from the company's"
                - "Ask each investor director how their fund approaches reserves and follow-ons"
                - "Ask two experienced founders how they handled conflicted directors"
                - "Add the agreed recusal practice to the working agreement"
            - name: Board procedure clauses in the articles and shareholders' agreement
              description: |-
                ## Purpose
                Quorum, notice periods, the chair's casting vote, who can call a meeting and when written resolutions work are all set by the company's own documents, and they often changed at closing. Reading those clauses once and writing them up on one page saves calling counsel every time someone asks whether a meeting is valid.

                ## Milestones
                1. Every board procedure clause in the new articles and shareholders' agreement found.
                2. A one-page summary of quorum, notice, voting, casting vote, written resolutions and remote attendance.
                3. Any investor director whose presence is needed for quorum noted.
                4. The summary checked by counsel and stored with the board records.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page board procedure summary, checked by counsel, sits with the board records and names any director needed for quorum."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the articles and shareholders' agreement for board procedure clauses"
                - "Summarise quorum, notice, voting and written resolution rules on one page"
                - "Note whether any investor director must be present for quorum"
                - "Send the summary to counsel to check against the documents"
            - name: Decisions between meetings by written resolution
              description: |-
                ## Purpose
                Option grants, bank mandates and small approvals rarely justify a meeting, but written resolutions often fail on detail: the wrong majority, a director left off, a signature page from the old board. Practising the process on a routine approval builds a reliable template and the habit of filing each signed resolution properly.

                ## Milestones
                1. The rules for written resolutions confirmed from the procedure summary.
                2. A template written resolution with signature blocks for the current board.
                3. One real routine approval run through the process with an e-signature tool.
                4. The signed resolution filed with the board records.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written resolution template for the current board exists and one real approval has been passed and filed using it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the majority and signature rules for written resolutions"
                - "Build a written resolution template with the current board's signature blocks"
                - "Run one routine approval through the template by e-signature"
                - "File the signed resolution with the board records"
            - name: Interviews with founders who built a board after a round
              description: |-
                ## Purpose
                Founders two or three rounds ahead have already made the set-up mistakes: too many observers, a chair chosen too early, a working style never written down. Three 30-minute conversations with them, using the same questions, produce a practical checklist that no template supplies.

                ## Milestones
                1. Three founders who set up a board after a similar round identified, at least one outside your investors' portfolios.
                2. The same five questions asked in each conversation.
                3. A one-page list of lessons, with the changes you will make.
                4. A thank-you sent to each founder.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes from three founder interviews are summarised in a one-page lessons list with at least three changes adopted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your investors and peers for three founders to speak with"
                - "Write five questions on board set-up mistakes and surprises"
                - "Hold the three 30-minute conversations"
                - "Ask the agent to summarise the interview notes into a lessons list"
            - name: Asking directors for specific help
              description: |-
                ## Purpose
                Most investor directors want to help between meetings but receive vague asks like keep us in mind, which go nowhere. Learning to make specific, sized requests (one introduction, one candidate call, one pricing review) and tracking them gets real value from the board without overloading any single director.

                ## Milestones
                1. An inventory of each director's networks and strengths from their onboarding conversations.
                2. A help request format: what, why, by when and what a good result looks like.
                3. Requests spread so no director has more than two open at once.
                4. A quarterly look at which requests worked and which stalled.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each director has received at least one specific help request in the agreed format and outcomes have been tracked for a full quarter."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List each director's strongest networks and skills"
                - "Write a short help request format with the ask, reason and date"
                - "Send each director one specific request this month"
                - "Review outcomes of open help requests to directors @recurring(quarterly)"
            - name: Handling disagreement and split votes on the board
              description: |-
                ## Purpose
                A board that has never voted on anything contested may not know how to, and the first split decision often arrives in a crisis. Learning how board votes, the casting vote and investor consents interact, and agreeing how dissent is raised and recorded, means a contested decision is handled calmly and minuted properly.

                ## Milestones
                1. Voting rules, the casting vote and any investor consents that sit above a board vote mapped.
                2. A practice agreed for raising dissent before the meeting, not only in it.
                3. How dissenting views are minuted agreed with the board secretary.
                4. One hypothetical contested decision walked through with the chair.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note sets out how contested board decisions are raised, voted on and minuted, and the chair has agreed it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Map which decisions need a board vote and which also need investor consent"
                - "Ask the chair how dissent should be raised before meetings"
                - "Agree with the board secretary how dissenting views are minuted"
                - "Walk through one hypothetical split decision with the chair"
            - name: Independent director now or after the next round
              description: |-
                ## Purpose
                Term sheets often leave an independent seat to be filled by mutual agreement, and it can sit empty for years. Deciding deliberately whether to fill it in the next six months, based on the board's skills gap, its balance and the cost in options, beats letting the question resurface at every meeting.

                ## Milestones
                1. The independent seat's rights and approval mechanism confirmed from the composition map.
                2. The board's skills gap written down.
                3. Three options compared: appoint now, appoint after the next round, or use an adviser instead.
                4. A decision agreed by the founders and investor directors and minuted.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has minuted a decision on whether and when to fill the independent seat, with the reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm who must approve an independent director under the documents"
                - "List the skills the current board lacks"
                - "Compare appointing now, after the next round or using an adviser"
                - "Put the recommendation to the board and minute the decision"
            - name: Independent director search and selection
              description: |-
                ## Purpose
                Strong independents are usually found through targeted asks, not an open advert: an operator who has scaled a company like yours, or a finance leader who could later chair an audit committee. Running a short structured search with a brief, a long list, references and a meeting with every director produces a candidate the whole board supports.

                ## Milestones
                1. A one-page brief covering skills, time commitment, term and compensation range.
                2. A long list of at least ten candidates from investors, peers and advisers.
                3. Three shortlisted candidates met by the CEO and every director.
                4. References taken on the preferred candidate.
                5. An offer approved by the board.

                ## Notes
                Take names from investors, but avoid a candidate who is effectively a second investor appointee. The point of the seat is independence from every shareholder group.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An independent director is approved by the board from a shortlist of three candidates, each met by every director."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write a one-page brief for the independent director seat"
                - "Ask each director and three peers for candidate names"
                - "Shortlist three candidates and schedule meetings with every director"
                - "Take two references on the preferred candidate"
            - name: Independent director appointment letter and pay
              description: |-
                ## Purpose
                Independents are paid, unlike investor directors, usually in options and sometimes with a cash fee, and they need a letter covering term, time commitment, confidentiality and what happens on a sale. Settling these in a standard letter before they start avoids an awkward negotiation after their first meeting.

                ## Milestones
                1. Compensation benchmarks for independent directors at your stage gathered from peers or published surveys.
                2. An appointment letter covering term, expected days, fees, options, vesting and expenses drafted with counsel.
                3. Any option grant approved by the board and confirmed to fit within the pool.
                4. The letter signed and the fee schedule set up with finance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The independent director has signed an appointment letter and any options granted are board-approved within the existing pool."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two peer founders what they pay their independent directors"
                - "Draft the appointment letter with counsel"
                - "Seek board approval for any option grant to the director"
                - "Pay the independent director's fee as the letter sets out @recurring(quarterly)"
            - name: Choosing the board chair
              description: |-
                ## Purpose
                Early boards are often chaired by the CEO by default, which can work but puts the agenda, the clock and director feedback in the hands of the person being overseen. Choosing the chair deliberately, whether the CEO, an investor director or an independent, and writing down what the role covers, gives the board a clear owner of its own process.

                ## Milestones
                1. How the chair is appointed under the articles, and whether the chair has a casting vote, confirmed.
                2. The chair's duties listed: agenda, timing, closed sessions, director feedback and reviews.
                3. The options weighed, with the case for and against each recorded.
                4. A chair appointed by board resolution with the role description attached.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chair is appointed by board resolution with a written role description, and the casting vote position is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the articles for how the chair is appointed and any casting vote"
                - "List what the chair is expected to do during and between meetings"
                - "Discuss the options privately with each director"
                - "Appoint the chair by resolution with the role description attached"
            - name: Company secretary or governance provider
              description: |-
                ## Purpose
                Minutes, statutory registers, filings and board logistics land on someone after a round, often the CEO or the most organised manager by accident. Deciding whether to keep the work in-house with a trained manager, hand it to the law firm or appoint a company secretarial provider is a cost and risk choice worth making once, on purpose.

                ## Milestones
                1. The company secretarial tasks after the round listed with hours per quarter.
                2. Three options costed: in-house, law firm and specialist provider.
                3. A provider or named internal owner chosen.
                4. Registers and the filing calendar handed over to the chosen owner.

                ## Notes
                Start from the **Vendor** template if you appoint an outside provider.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named company secretary, internal or external, holds the registers and filing calendar, with the choice and its cost recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every company secretarial task and its hours per quarter"
                - "Get fee quotes from the law firm and one specialist provider"
                - "Compare outside quotes with the cost of an internal owner"
                - "Hand over the registers and filing calendar to the chosen owner"
            - name: Forming the first board committees
              description: |-
                ## Purpose
                Audit and remuneration committees are often promised in the shareholders' agreement for some later date, then formed in a rush before an audit or a large option grant. Writing short charters, choosing members and setting how committees report back, before they are urgent, keeps pay and audit decisions out of a crowded board agenda.

                ## Milestones
                1. Committees required or expected by the documents and investors listed with their timing.
                2. A one-page charter for each committee covering scope, membership, quorum and reporting.
                3. Members and committee chairs appointed by the board.
                4. A first meeting date set for each committee.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each committee the documents require has a board-approved charter, named members and a first meeting date."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check the shareholders' agreement for any committee requirements"
                - "Draft a one-page charter for each committee"
                - "Propose members and committee chairs to the board for approval"
                - "Set the first meeting date for each committee"
            - name: Limiting observer seats and extra attendees
              description: |-
                ## Purpose
                Funds sometimes ask for an extra observer after closing: an associate to take notes, or a colleague from a newer fund. Every added attendee makes candid discussion harder and widens the confidentiality circle, so a clear, even-handed policy on observers and guests lets founders say no politely and consistently.

                ## Milestones
                1. Observer entitlements under the documents confirmed.
                2. A policy on extra observers, guests and associates drafted with the chair.
                3. The policy added to the board working agreement.
                4. Every open request answered under the policy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written observer and guest policy is in the board working agreement and every open request has been answered under it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List current observer entitlements and any open requests for more"
                - "Draft a guest and observer policy with the chair"
                - "Add the policy to the board working agreement"
                - "Reply to each open request using the agreed policy"
            - name: Board skills matrix and gaps
              description: |-
                ## Purpose
                Boards formed from whoever led each round end up heavy on finance and light on operating, sales or technology experience. A skills matrix mapping each director against the company's next 24 months shows where to use advisers, what to look for in the next independent and which director to lean on for what.

                ## Milestones
                1. Eight to twelve skills tied to the company plan chosen.
                2. Each director rated, with their own input.
                3. Gaps listed, each with a plan: independent director, adviser or committee.
                4. The matrix shared with the board.

                ## Notes
                Start from the **Skills matrix** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A skills matrix rates every director against at least eight skills, is shared with the board and lists at least two gaps with a plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose eight to twelve skills the plan needs over 24 months"
                - "Ask each director to rate themselves against the skills"
                - "List the gaps with a plan to fill each one"
                - "Refresh the board skills matrix @recurring(yearly)"
            - name: First board meeting after the round
              description: |-
                ## Purpose
                The first meeting with the new directors sets the tone for years: whether papers arrive on time, whether discussion is real and whether founders leave with decisions made. Treating it as a set-up meeting, with formal appointments, the working agreement, the delegation table and a strategy conversation, gets the governance done in one sitting.

                ## Milestones
                1. A date agreed with all directors within six weeks of closing.
                2. An agenda covering post-closing approvals, the working agreement, the delegation table, the plan and a strategy discussion.
                3. Papers sent at least five working days before the meeting.
                4. Minutes approved and every action given an owner.

                ## Notes
                Start from the **Board meeting** template. Ask counsel which post-closing approvals the board needs to ratify, such as bank mandates and option grants.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first post-round board meeting is held within six weeks of closing, with papers sent five working days ahead and minutes approved."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Poll directors for a date within six weeks of closing"
                - "Ask counsel for the list of post-closing approvals to ratify"
                - "Draft the agenda from the board meeting template"
                - "Send papers five working days before the meeting"
                - "Circulate draft minutes and actions within three days"
            - name: Director induction day at the company
              description: |-
                ## Purpose
                Directors who have only seen the company through a data room make better calls once they have met the team, listened to a customer call and seen the product in use. A half-day induction, in person where possible, with a welcome dinner the evening before or after, builds the trust the board will draw on in a hard quarter.

                ## Milestones
                1. A half-day agenda with leadership sessions, a product walk-through and time with staff.
                2. Every new director and observer invited with at least three weeks' notice.
                3. A welcome dinner or informal session booked.
                4. Directors' follow-up questions answered within a week.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every new director has attended an induction session with the leadership team within 60 days of closing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Offer two possible induction dates to every new director"
                - "Build a half-day agenda with each leadership team member"
                - "Book a welcome dinner for the directors and founders"
                - "Answer the directors' follow-up questions within a week"
            - name: Six-month review of how the new board works
              description: |-
                ## Purpose
                Six months in, the new board has run two or three meetings and everyone has a view on what is and is not working. A short structured review against the working agreement, held before habits set, lets the board fix paper timing, meeting length or contact between meetings while changing them is still easy.

                ## Milestones
                1. Five questions sent to every director, observer and the CEO.
                2. Answers summarised into themes by the chair or the independent director.
                3. Agreed changes written into the working agreement.
                4. A yearly review date set after this one.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A six-month review summary is discussed at a board meeting and at least one change is written into the working agreement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write five questions on paper timing, meeting length and contact"
                - "Send the questions to every director, observer and the CEO"
                - "Ask the agent to group the answers into themes and proposed changes"
                - "Update the working agreement with the changes agreed"
            - name: Outgoing director stepping down for the new board
              description: |-
                ## Purpose
                Rounds often require an early angel or pre-seed director to step down so the new lead can take a seat. Handling the exit with a proper resignation, the filings, a real thank-you and perhaps an adviser or observer role keeps a long-standing supporter on side and the public record correct.

                ## Milestones
                1. The departure agreed in person with the outgoing director before any documents are sent.
                2. A resignation letter signed and the registry filing made.
                3. Board document access removed and any company property returned.
                4. A thank-you and any new role, such as adviser, confirmed in writing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The outgoing director's resignation is filed with the registry and a thank-you with any new role is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Call the outgoing director before any paperwork is sent"
                - "Collect a signed resignation letter dated for closing"
                - "File the resignation with the registry and save the receipt"
                - "Send a personal thank-you with any adviser role in writing"
            - name: Solo founder facing an institutional board
              description: |-
                ## Purpose
                Solo founders have no co-founder to share the board relationship with, rehearse with or lean on when the room disagrees. Building a small support system around the board, with a peer founder to debrief with, a senior team member to rehearse with and a clear line to the chair, makes it a sustainable part of the job rather than a lonely quarterly test.

                ## Milestones
                1. A peer founder or coach agreed as a regular board debrief partner.
                2. The founder's support needs raised with the chair or lead investor director.
                3. A pre-meeting rehearsal with a senior team member set for each board meeting.
                4. Three meetings run with this support in place.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named debrief partner and a pre-meeting rehearsal have been in place for three consecutive board meetings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a peer founder to be your regular board debrief partner"
                - "Tell the lead investor director what support would help"
                - "Rehearse each board meeting with a senior team member"
                - "Debrief each board meeting with your partner within two days"
            - name: Moving from an angel board to an institutional board
              description: |-
                ## Purpose
                Pre-round boards are often the founders and a friendly angel meeting over coffee, with decisions made by phone. An institutional board expects papers, minutes, formal approvals and challenge, and founders who keep the old habits get read as disorganised. Naming the habits that must change, and asking the angel for perspective, makes the shift deliberate.

                ## Milestones
                1. A list of current board habits the new documents or directors will not accept.
                2. A replacement practice written down for each habit.
                3. A conversation with the angel director on what the founders should keep.
                4. The changes in place before the first post-round meeting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of at least five old board habits, each with its replacement practice, is in place before the first post-round meeting."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List how board decisions have been made and recorded until now"
                - "Mark which habits the new documents or directors will not accept"
                - "Ask the angel director what the founders should keep"
                - "Write the replacement practice for each habit"
            - name: Executive presenting to the new board for the first time
              description: |-
                ## Purpose
                Heads of sales, product or finance are often asked to present soon after a round, and a first appearance can shape how directors see them for years. Preparing with the CEO on the board's concerns, a ten-minute storyline and the likely hard questions turns it into a credibility moment rather than an ambush.

                ## Milestones
                1. A brief from the CEO on what the board wants from the item and each director's likely angle.
                2. A ten-minute storyline ending in one ask or recommendation.
                3. A rehearsal with the CEO covering three hard questions.
                4. Feedback from the CEO after the meeting written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "The executive has presented a ten-minute item to the board after a rehearsal, and the CEO's written feedback is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the CEO what the board needs from your item"
                - "Draft a ten-minute storyline ending in one clear ask"
                - "Rehearse with the CEO and answer three hard questions"
                - "Write down the CEO's feedback after the meeting"
            - name: Corporate investor director recusal protocol
              description: |-
                ## Purpose
                A board or observer seat for a corporate investor brings industry knowledge and a built-in conflict whenever the agenda touches partnerships, pricing, competitors or a sale. Agreeing a recusal protocol at set-up, covering which items they leave, which papers are redacted and how it is minuted, avoids a dispute the first time it matters.

                ## Milestones
                1. Agenda topics that trigger recusal listed and agreed with the corporate investor.
                2. A redaction practice for papers on those topics.
                3. Recusals minuted at each meeting where they apply.
                4. The protocol reviewed after any commercial deal with the corporate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recusal protocol listing trigger topics and a redaction practice is agreed with the corporate investor and recorded in the working agreement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List agenda topics that create a conflict for the corporate investor"
                - "Agree the recusal triggers with the corporate's director or observer"
                - "Set a redaction rule for papers on trigger topics"
                - "Minute each recusal at the meetings where it applies"
            - name: Running a board spread across time zones
              description: |-
                ## Purpose
                With a lead investor in another country, a director who travels and founders at home, the only workable slot can be seven in the morning for someone. Agreeing a rotation of meeting times, a remote attendance standard and an in-person meeting at least once a year keeps a distributed board engaged and fair to everyone.

                ## Milestones
                1. Each director's time zone and fixed constraints mapped.
                2. A meeting time rotation agreed so no one always takes the early or late slot.
                3. A remote attendance standard: video on, papers read, a quiet location.
                4. At least one in-person meeting a year planned and budgeted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The board has a written time rotation and remote standard, and an in-person meeting is in the calendar within the next twelve months."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Map every director's time zone and fixed constraints"
                - "Propose a meeting time rotation to the board"
                - "Write a remote attendance standard into the working agreement"
                - "Plan and budget one in-person board meeting this year"
            - name: Board arrangements around founder parental leave
              description: |-
                ## Purpose
                Founders taking parental leave in the year after a round worry about how the board will read it and who runs the meetings while they are away. Planning cover with the chair early, deciding who presents, what the founder still attends and how urgent decisions reach them, protects both the leave and the board's confidence.

                ## Milestones
                1. Leave dates and the level of contact the founder wants decided privately first.
                2. The chair or lead director told early, with a draft cover plan.
                3. A named executive presenting at each meeting during the leave.
                4. An escalation route for the few decisions that genuinely need the founder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written cover plan for board meetings during the founder's leave is agreed with the chair at least two months before leave starts."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Decide privately how much contact you want during leave"
                - "Tell the chair or lead director about the leave and its dates"
                - "Name who presents at each board meeting during the leave"
                - "Agree which decisions may be escalated to you and how"
            - name: Co-founder leaving the board after the round
              description: |-
                ## Purpose
                New investor seats sometimes mean one co-founder gives up their directorship while staying in the business, and handled badly it reads as a demotion. Agreeing the change privately, giving the co-founder a clear part in board meetings and explaining it well to the team keeps the founding relationship intact.

                ## Milestones
                1. The change discussed between the co-founders before investors are told.
                2. A role for the co-founder at board meetings agreed, such as presenting their function.
                3. The resignation and registry filing completed.
                4. One consistent explanation for the team and investors agreed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The co-founder's resignation as director is filed and their agreed role at board meetings is written into the working agreement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Talk privately with your co-founder before investors are told"
                - "Agree what part the co-founder will play at board meetings"
                - "Complete the director resignation and its registry filing"
                - "Agree how the change is explained to the team"
            - name: Board composition plan for the next two rounds
              description: |-
                ## Purpose
                Each round usually adds a seat for the new lead, and by the growth stage a founder majority can become an investor majority without anyone deciding it. Sketching how the board could look after the next two rounds, and which balancing seats to argue for, gives founders a position before the next term sheet arrives.

                ## Milestones
                1. Current seats and appointment rights listed.
                2. Two scenarios drawn for the board after the next two rounds.
                3. The point at which founders could lose a board majority identified.
                4. A preferred structure and its arguments written down for the next negotiation.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A board composition plan shows seat counts after the next two rounds under two scenarios and names the founders' preferred structure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draw today's board seats and who appoints each one"
                - "Sketch two board structures after the next two rounds"
                - "Mark when founders would lose a board majority"
                - "Write the founders' preferred structure and the case for it"
            - name: Deadlock and casting vote planning
              description: |-
                ## Purpose
                Even-numbered boards, and boards split evenly between founder and investor seats, can deadlock on a sale, a financing or the CEO's position. Understanding in advance what the documents say happens next, from a casting vote to referral to shareholders, and whether that is acceptable, is far easier than learning it in a crisis.

                ## Milestones
                1. Deadlock routes in the articles and shareholders' agreement summarised by counsel.
                2. The three decisions most likely to split the board listed.
                3. The outcome of a deadlock on each one mapped.
                4. Any change the founders want written down for the next documents revision.

                ## Notes
                This is preparation for a conversation with counsel, not a legal opinion on how a deadlock would be resolved.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A counsel-checked note sets out what happens on a board deadlock for the three most likely contested decisions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel to summarise the deadlock and casting vote provisions"
                - "List the three decisions most likely to split the board"
                - "Map what happens on a deadlock for each decision"
                - "Record changes to seek at the next documents revision"
            - name: Director terms, rotation and succession
              description: |-
                ## Purpose
                Investor directors rotate when partners leave funds or funds stop reserving for the company, and independents can stay long past their usefulness without a set term. Setting terms for independents, a succession note for each seat and a yearly composition review keeps the board current rather than inherited.

                ## Milestones
                1. A term length and renewal process for independent directors agreed.
                2. A succession note for each seat: who appoints a replacement and how.
                3. A yearly composition review on the board calendar.
                4. The approach recorded in the working agreement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Independent director terms and a succession note for every seat are recorded, with a yearly composition review in the board calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a term length and renewal process for independent directors"
                - "Write who appoints a replacement for each board seat"
                - "Hold the yearly board composition review @recurring(yearly)"
                - "Record terms and succession notes in the working agreement"
            - name: Replacing an investor director after a partner leaves the fund
              description: |-
                ## Purpose
                When the partner who led your round leaves their firm, the fund will name a replacement, and you may get someone who has never met the team. Knowing your consultation rights, meeting the candidate early and running a fast onboarding protects the relationship the round was built on.

                ## Milestones
                1. The fund's replacement right and any company approval or consultation right confirmed.
                2. A meeting with the proposed replacement held before appointment.
                3. Appointment consent and registry filing completed.
                4. The onboarding pack sent and calls with the leadership team held.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A replacement investor director is appointed with filings complete and has received the onboarding pack within 30 days of the fund's notice."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check whether the company may approve or must be consulted on the replacement"
                - "Ask the fund to introduce the proposed replacement before appointment"
                - "File the new director's consent and registry notice"
                - "Send the onboarding pack and set leadership calls for the new director"
            - name: Where the board meets and central management and control
              description: |-
                ## Purpose
                For companies with directors in several countries, where board decisions are actually made can affect tax residence and which country's rules apply. Agreeing with tax advisers where meetings are held, chaired and minuted, and keeping records that show it, is a specialist safeguard that is cheap at set-up and costly to unpick later.

                ## Milestones
                1. The question of board location and tax residence put to the company's tax adviser.
                2. A board location practice agreed: where meetings are held, chaired and minuted.
                3. Minutes recording location and attendance for each meeting.
                4. A review triggered whenever a director moves country or the company opens abroad.

                ## Notes
                This is a question for qualified tax and legal advisers in each country involved. The project organises the records they ask for and does not decide residence.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tax adviser's recommendation on board location is recorded and every later set of minutes notes where the meeting was held."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the tax adviser whether board location affects tax residence"
                - "Write the agreed practice on where meetings are held and chaired"
                - "Add meeting location and attendance lines to the minutes format"
                - "Flag a review whenever a director moves country"
            - name: Subsidiary boards and group governance after the round
              description: |-
                ## Purpose
                Rounds that fund expansion often bring a new subsidiary abroad, each with its own directors, filings and local rules, and investors will ask who controls it. A simple group governance structure, setting who sits on each subsidiary board, which decisions the parent board must approve and when local filings fall due, stops subsidiaries drifting out of sight.

                ## Milestones
                1. Every group company listed with its directors, registered office and filing dates.
                2. A rule for which subsidiary decisions need parent board approval.
                3. Local directors appointed with consents and filings in place.
                4. A group entity chart attached to the board records.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A group entity chart lists every subsidiary's directors and filing dates, and the subsidiary matters needing parent board approval are written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every group company with its directors and filing dates"
                - "Decide which subsidiary decisions need parent board approval"
                - "Appoint and file local directors for each subsidiary"
                - "Check subsidiary filings and directors are up to date @recurring(quarterly)"
---

# Post-Round Board Setup

This area is for founders, and the managers who support them, in the weeks after a round closes, when new investor directors and observers arrive and the board has to be built properly rather than inherited. It starts with the foundations (the composition map, appointments and filings, insurance and indemnities, observer letters, delegation, onboarding and a working agreement), then the routines that keep the board running, the skills founders need as directors, decisions on independents, the chair and committees, the first meeting and induction, situations such as solo founders and parental leave, and finally specialist work on future composition, deadlock and group boards.

What repeats is a monthly one-to-one with each director, quarterly checks on the register of directors, observer access, appointment thresholds, board logistics and founder alignment before each meeting, and yearly reviews of D&O cover, conflicts declarations, delegation limits, director terms and the skills matrix. The Board meeting, Onboarding plan, 1:1, Skills matrix, Vendor and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
