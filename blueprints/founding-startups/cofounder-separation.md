---
id: founding-startups.cofounder-separation
name: Co-Founder Separation
description: "Read the agreements, work out vested shares, agree fair terms with proper counsel, hand over the role, tell the team, customers and investors well, and keep the company whole after a co-founder leaves."
category: business
version: 1.0.0
tags: [founding-startups, cofounder-separation, founder, founder-departure, leaver-terms, share-buyback, handover]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - risk-register
    - operational-checklist
    - board-meeting
    - onboarding-30-60-90
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Co-Founder Separation
          description: "Handling a co-founder's departure fairly, from equity and role handover to telling the team and protecting the company."
          projects:
            - name: Reading the founder agreement before any exit talk
              description: |-
                ## Purpose
                Most separations go wrong because both founders argue from memory about what they agreed years ago. Before a single conversation about leaving, find and read every document that governs founder shares and roles: the shareholders' agreement, share purchase or restricted stock agreements, the articles or bylaws, employment contracts and IP assignments. Knowing the leaver clauses, consent rights and notice terms turns a fight about fairness into a discussion about what is written.

                ## Milestones
                1. Every founder document located, with the signed and dated version identified for each.
                2. A one-page summary of vesting, leaver, transfer, consent and notice clauses in plain words.
                3. Gaps listed where a document is missing, unsigned or contradicts another.
                4. Questions for counsel written beside each unclear clause.

                ## Notes
                Unsigned drafts in a shared folder are not agreements. Check the company register or your company secretary for what was actually filed and executed.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page clause summary covering vesting, leaver terms, transfers, consents and notice exists, with every source document identified as signed or missing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect every signed founder, shareholder and share purchase document into one folder"
                - "Summarise the vesting, leaver, transfer and consent clauses on one page"
                - "Mark each document as signed, unsigned or missing"
                - "List the clauses you need counsel to explain"
            - name: Vested and unvested share position on the leaving date
              description: |-
                ## Purpose
                The single number both sides will anchor on is how many shares the departing founder has earned by the leaving date. Working it out from the vesting start date, cliff, monthly or quarterly increments and any acceleration terms, and getting counsel to check it, stops a disagreement over arithmetic from poisoning everything else.

                ## Milestones
                1. Vesting start date, cliff, schedule and acceleration terms confirmed from the signed documents.
                2. Vested and unvested share counts calculated for two or three candidate leaving dates.
                3. Any shares held through options, a holding company or a trust identified separately.
                4. The calculation reviewed by counsel and saved with its workings.

                ## Notes
                Calculate for more than one date. A leaving date a few weeks later can cross a vesting increment, and both sides will notice.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet shows vested and unvested shares for at least two candidate leaving dates, with workings checked by counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the vesting start date, cliff and increment from the signed agreement"
                - "Calculate vested and unvested shares for three possible leaving dates"
                - "Check whether any acceleration clause could apply to this departure"
                - "Send the workings to counsel and ask them to confirm the numbers"
            - name: Choosing counsel for the company in the separation
              description: |-
                ## Purpose
                The lawyer who incorporated the company often cannot act for one founder against another, and a departing founder who is also a director may be conflicted on the company side too. Picking counsel who acts clearly for the company, and encouraging the departing founder to take their own advice, protects both the terms and the relationship.

                ## Milestones
                1. The existing company lawyer asked who they can and cannot act for in this separation.
                2. Two or three firms with founder separation experience compared on scope, fees and availability.
                3. Counsel engaged in writing for the company, with a fee estimate and a named lead.
                4. The departing founder told in writing that they should take independent advice.

                ## Notes
                Start from the **Purchase decision** template. Many agreements let the company contribute a capped amount to the departing founder's legal fees; offering this early often speeds the whole process.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Company counsel is engaged in writing with a fee estimate, and the departing founder has been advised in writing to seek independent advice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the company's current lawyer whether they have a conflict in this separation"
                - "Shortlist three firms that have handled founder departures"
                - "Compare scope, fee estimates and who would do the work"
                - "Sign an engagement letter that names the company as the client"
            - name: Separation goals and walk-away points
              description: |-
                ## Purpose
                Going into talks with only a feeling of what is fair invites concessions you regret by the next morning. Writing down what the company must have (IP assigned, unvested shares returned, a clean handover, no public fallout) and what it can trade (cash, timing, a title, acceleration) gives you a range to negotiate inside and a point at which you stop.

                ## Milestones
                1. Must-have outcomes listed, each one tied to a concrete risk to the company.
                2. Tradeable items listed with a rough value or cost to the company for each.
                3. A walk-away point written for the items most likely to be contested.
                4. The remaining founders and the board chair agreed on the list before any talks.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of must-haves, tradeables and walk-away points is agreed by the remaining founders and board chair before negotiation begins."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five outcomes the company cannot do without"
                - "List what the company could offer and what each would cost"
                - "Set a walk-away point for shares, cash and timing"
                - "Agree the list with the remaining founders and the board chair"
            - name: Confidential separation working group
              description: |-
                ## Purpose
                Word of a founder leaving spreads fast and badly, and a rumour reaching staff or a key customer before the plan exists is the most avoidable harm in a separation. Agreeing a small named group (the remaining founders, the board chair, counsel and perhaps the lead investor), a code name and a single private channel keeps the circle tight until announcement day.

                ## Milestones
                1. A named list of no more than five people who know before the announcement.
                2. A code name and a private channel or folder used for every separation document.
                3. A written rule for what to say if a team member or customer asks early.
                4. The departing founder told who is in the circle, so nobody is surprised.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working group of five or fewer is named, uses one private channel and has a written holding line for early questions."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Name the people who must know before the announcement"
                - "Set up a private folder and channel under a code name"
                - "Write a two-sentence holding line for early questions"
                - "Tell the departing founder who is in the working group"
            - name: Dated record of separation conversations
              description: |-
                ## Purpose
                Months later, disputes turn on who said what and when, and memories drift towards self-interest on both sides. Keeping a short factual note of every separation conversation, written the same day and shared where appropriate, gives counsel something reliable and keeps you honest with yourself.

                ## Milestones
                1. A single private notes file with a consistent heading for date, people and topics.
                2. Every separation conversation noted within 24 hours, facts separated from opinions.
                3. Agreed points from each meeting sent back to the other side in a short email.
                4. The notes reviewed by counsel before any formal offer is made.

                ## Notes
                Start from the **Meeting notes** template. Write as if the departing founder will one day read the notes, because in a dispute they may.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every separation conversation has a dated factual note written within 24 hours, and agreed points were confirmed by email."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create one private notes file with a heading for date, people and topics"
                - "Write up today's or the most recent separation conversation"
                - "Email the other side a short summary of anything agreed"
                - "Share the notes file with counsel before the first formal offer"
            - name: Separation risk register
              description: |-
                ## Purpose
                A founder departure touches almost every part of a small company at once: key customers who bought from that person, engineers who joined for them, IP that sits in a personal account, a fundraise that now needs a new story. Listing these risks with an owner and a mitigation for each means the scary ones get handled first rather than discovered late.

                ## Milestones
                1. At least ten risks listed across customers, team, IP, investors, money and reputation.
                2. Each risk scored for likelihood and impact, with a named owner.
                3. A mitigation agreed for the five highest-scoring risks.
                4. The register reviewed each month until the separation closes.

                ## Notes
                Start from the **Risk register** template. The risk founders most often miss is a key employee resigning in sympathy with the departing founder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of at least ten scored risks exists, each with an owner, and the top five have written mitigations."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every risk the departure creates for customers, staff, IP and funding"
                - "Score each risk and give it a named owner"
                - "Write mitigations for the five biggest risks"
                - "Review and rescore the register until the separation closes @recurring(monthly:12)"
            - name: Leaving date and handover window
              description: |-
                ## Purpose
                An open-ended exit leaves the departing founder in limbo and the team unsure who is in charge. Agreeing a leaving date, a handover period of usually four to eight weeks and what the founder will and will not do during it gives everyone a clear end point and lets the vesting calculation settle on a real date.

                ## Milestones
                1. A leaving date agreed, checked against the vesting calculation and any notice period.
                2. A handover window with a start and end date, and a short list of what happens in it.
                3. Decisions the departing founder can still make during the window written down.
                4. The dates confirmed in writing by both sides.

                ## Notes
                Shorter is usually kinder. A founder who has decided to go rarely does their best work in a three-month notice period.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A leaving date and handover window are confirmed in writing by both sides, with the founder's remaining decision rights listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose a leaving date that matches the vesting and notice terms"
                - "Set the start and end of the handover window"
                - "List the decisions the departing founder keeps until the last day"
                - "Confirm the dates in writing with the departing founder"
            - name: Planning the first conversation about leaving
              description: |-
                ## Purpose
                Whether you are raising your own departure or telling a co-founder the board wants them to go, the first conversation sets the tone for every one after it. Preparing an opening of three or four sentences, a quiet place, enough time and a clear next step makes it far less likely to become a row you both have to undo.

                ## Milestones
                1. An opening statement of three or four sentences written and said aloud at least once.
                2. A private, unhurried time and place booked, not a cafe or the end of a long day.
                3. Likely reactions listed, with a calm reply prepared for each.
                4. A concrete next step ready to propose, such as a follow-up meeting in a week.

                ## Notes
                Do not bring a term sheet to the first conversation. Agree that a change is coming, then talk numbers once both sides have advice.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first conversation has happened in private with a prepared opening, and a dated follow-up meeting was agreed before it ended."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the opening three sentences of the conversation"
                - "Book a private two-hour slot with no meetings straight after"
                - "List the three reactions you fear most and a calm reply to each"
                - "Propose a follow-up date before the conversation ends"
            - name: Monday separation workstream review
              description: |-
                ## Purpose
                Six or seven threads run at once in a separation: legal terms, handover, access, customers, team, investors and money. A thirty-minute review every Monday with the working group, walking one tracker line by line, catches the thread that has quietly stalled before it becomes the thing that sinks the timeline.

                ## Milestones
                1. One tracker with a row per workstream, an owner and a next action for each.
                2. A recurring thirty-minute slot booked with the working group.
                3. Every review ends with an updated next action and date on each row.
                4. The review retired only once the separation agreement has closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The workstream tracker is updated in a Monday review every week until the separation agreement closes, with no row left without a next action."
                cadence: rolling
              tasks:
                - "Build a tracker with one row per separation workstream"
                - "Book a recurring Monday slot with the working group"
                - "Walk the tracker and update every owner and next action @recurring(weekly:mon)"
            - name: Daily handover sessions with the departing founder
              description: |-
                ## Purpose
                What a founder carries in their head (why the pricing is odd, which customer is about to churn, where the production database password really lives) does not survive a single goodbye lunch. A short daily session through the handover window, working down a written list, moves that knowledge into documents and into the people who will own it.

                ## Milestones
                1. A handover list of every system, relationship, decision and recurring task the founder owns.
                2. Each item given a named receiver in the team.
                3. Daily sessions of thirty to forty-five minutes held through the handover window.
                4. Every item marked as documented and accepted by its receiver before the last day.

                ## Notes
                Record sessions only with consent. A written note per item, checked by the receiver, is usually more useful than hours of video.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every item on the handover list is documented and signed off by its receiver before the departing founder's last day."
                cadence: rolling
              tasks:
                - "Ask the departing founder to list everything they own or know that others do not"
                - "Assign a receiver to every item on the handover list"
                - "Hold a handover session and mark finished items as accepted @recurring(daily)"
                - "Check with each receiver that their items are usable without the founder"
            - name: Access and credentials offboarding
              description: |-
                ## Purpose
                Founders tend to hold the keys nobody else has: domain registrar, cloud root accounts, bank administration, app store, the code host owner role. Transferring every admin role and revoking the rest on a planned date, with the departing founder's cooperation, avoids the two worst outcomes, being locked out of your own company or leaving a door open after they go.

                ## Milestones
                1. An inventory of every account where the founder is owner, admin or sole signatory.
                2. Ownership of the domain, cloud, code, finance and app store accounts transferred.
                3. Personal devices and personal accounts holding company data identified and cleaned.
                4. Remaining access revoked on the last day, and the bank mandate updated.

                ## Notes
                Start from the **Operational checklist** template. Transfer ownership before you revoke anything: removing the only owner of some accounts can lock the company out for good.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every company account formerly owned by the departing founder has a new owner, their access is revoked on the last day, and monthly reviews find no stray access."
                cadence: rolling
              tasks:
                - "List every account where the departing founder is owner, admin or signatory"
                - "Transfer domain, cloud, code host and finance ownership to a remaining founder"
                - "Arrange the bank mandate and card changes with the bank"
                - "Review admin lists for leftover access by former founders @recurring(monthly:5)"
            - name: Customer and partner relationship transfer
              description: |-
                ## Purpose
                In a young company many customers bought from a founder, not from a brand, and a cold handover email loses them. Tracking each important account, introducing the new owner in person with the departing founder present, and checking in a few weeks later keeps revenue and goodwill through the change.

                ## Milestones
                1. A list of every customer, partner and supplier relationship the founder personally holds.
                2. A new owner named for each, with the top ten accounts flagged for a joint call.
                3. Joint introductions held for the flagged accounts before the founder's last day.
                4. A follow-up from the new owner logged for each flagged account within a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All ten most important accounts held by the departing founder have had a joint introduction and a logged follow-up from their new owner."
                cadence: rolling
              tasks:
                - "List every relationship the departing founder holds personally"
                - "Name a new owner and flag the ten that need a joint call"
                - "Book joint introduction calls before the last day"
                - "Check progress on each flagged account transfer @recurring(weekly:wed)"
            - name: Team pulse in the weeks after the announcement
              description: |-
                ## Purpose
                Staff who joined partly for the departing founder will wonder whether the company is in trouble, and few will say so in a team meeting. Short one-to-ones in the first weeks and a simple anonymous pulse question each Friday show you who is wobbling while there is still time to talk.

                ## Milestones
                1. A one-to-one held with every team member within two weeks of the announcement.
                2. A one-question anonymous pulse running every Friday for eight weeks.
                3. Anyone flagged as at risk of leaving given a specific follow-up conversation.
                4. A short summary of what the pulse showed shared with the team after eight weeks.

                ## Notes
                Start from the **Meeting notes** template for the one-to-ones, kept in a private file rather than a shared one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team member has had a one-to-one within two weeks, and eight weekly pulse results are recorded with follow-ups for anyone flagged."
                cadence: rolling
              tasks:
                - "Book a one-to-one with every team member for the fortnight after the announcement"
                - "Set up a one-question anonymous pulse form"
                - "Send the pulse and read the answers the same day @recurring(weekly:fri)"
                - "Follow up in person with anyone whose answers suggest they may leave"
                - "Review pulse trends with the remaining founders @recurring(monthly:28)"
            - name: Investor and board updates through the separation
              description: |-
                ## Purpose
                Investors forgive a founder leaving far more readily than they forgive hearing about it late or in pieces. A short written update each month, covering where the terms stand, how the handover is going and what it means for the plan, keeps them supportive and makes any consent you need from them a formality.

                ## Milestones
                1. Lead investors and board members told privately before the team announcement.
                2. A monthly update with a fixed short section on the separation and its effect on the plan.
                3. Any investor consent or waiver identified early and requested in good time.
                4. A final update confirming the separation has closed and the cap table is updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Investors receive a monthly written update with a separation section until the agreement closes, and every required consent is obtained before signing."
                cadence: rolling
              tasks:
                - "Call the lead investor and board members before the team hears"
                - "Add a fixed separation section to the monthly investor update"
                - "Send the investor update with the latest separation status @recurring(monthly:15)"
                - "Check which investor consents the separation needs and request them"
            - name: Former co-founder as a shareholder
              description: |-
                ## Purpose
                A departed founder who keeps vested shares is still an owner, often a large one, and will be asked for signatures on future rounds, sales and resolutions. Treating them as a valued shareholder, with the information they are entitled to and a named contact, keeps those signatures easy and stops resentment from growing in silence.

                ## Milestones
                1. The former founder's information and voting rights confirmed from the signed documents.
                2. A named person in the company responsible for the relationship.
                3. A quarterly shareholder update sent to them on the same terms as other holders.
                4. An annual check that their contact and bank details are current for notices.

                ## Notes
                Ask counsel whether any future round will need their consent or signature, and agree in advance how they would like to be approached.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The former co-founder receives every quarterly shareholder update on time, and their contact details are confirmed once a year."
                cadence: cyclic
              tasks:
                - "Confirm what information and voting rights the former founder holds"
                - "Name the person who looks after the relationship"
                - "Send the former founder the quarterly shareholder update @recurring(quarterly)"
                - "Confirm their address, email and bank details for notices @recurring(yearly)"
            - name: Separation obligations calendar
              description: |-
                ## Purpose
                Signed separation terms create dates that are easy to forget: buyback instalments, consulting retainer payments, the end of a non-solicitation period, an option exercise window, a deadline for returning equipment. A single calendar of these obligations, checked monthly, keeps the company from breaching its own agreement by oversight.

                ## Milestones
                1. Every dated obligation in the separation agreement extracted into one list.
                2. Each obligation given an owner and a reminder two weeks before it falls due.
                3. Payments and notices recorded as done with a date and reference.
                4. The calendar closed once the last obligation has passed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dated obligation from the separation agreement is listed with an owner, and none passes without a recorded completion."
                cadence: rolling
              tasks:
                - "Extract every date and payment from the signed separation agreement"
                - "Give each obligation an owner and a two-week reminder"
                - "Check the obligations calendar and record anything completed @recurring(monthly:20)"
                - "Confirm with counsel when the last restrictive covenant expires"
            - name: Share register and cap table after the exit
              description: |-
                ## Purpose
                Returned, transferred or cancelled shares have to be reflected in the statutory register, the cap table tool and any filings with the company registry, and these often drift apart. Reconciling them after the separation and then quarterly saves a painful clean-up when the next investor's lawyers ask for the register.

                ## Milestones
                1. Every share movement from the separation recorded in the statutory register.
                2. The cap table tool updated to match the register exactly.
                3. Any required filings made with the company registry or tax authority, as counsel advises.
                4. A quarterly reconciliation of register, cap table and filings in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The statutory register, cap table tool and registry filings match exactly after the separation and at every quarterly check."
                cadence: cyclic
              tasks:
                - "Record each share buyback, transfer or cancellation in the statutory register"
                - "Update the cap table tool to match the register"
                - "Ask counsel which filings the share movements require"
                - "Reconcile the register, cap table and filings @recurring(quarterly)"
            - name: Weekly debrief with a trusted outsider
              description: |-
                ## Purpose
                Remaining founders usually cannot talk freely to the team, and investors are not the right audience for doubt. Thirty minutes a week with someone outside the company (a founder peer, coach or experienced friend bound to confidence) gives you a place to think aloud, check your judgement and notice when anger is steering a decision.

                ## Milestones
                1. One person outside the company agreed as your confidential sounding board.
                2. A weekly slot held through the separation and the month after it closes.
                3. Each debrief ending with one decision checked or one action chosen.
                4. A note of what you learned kept for the lessons review later.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly confidential debrief with a named outsider takes place through the separation, with one checked decision or action noted from each."
                cadence: rolling
              tasks:
                - "Ask one founder peer or coach to be your confidential sounding board"
                - "Agree what can and cannot be shared in the debriefs"
                - "Hold the thirty-minute debrief and note one decision checked @recurring(weekly:thu)"
            - name: Good leaver and bad leaver terms explained
              description: |-
                ## Purpose
                Leaver clauses decide whether returned shares are bought back at fair value, at cost or at nominal value, and the definitions vary widely between agreements. Learning how good and bad leaver categories usually work, and exactly how yours are worded, lets you hold a calm conversation instead of reaching for labels that feel like accusations.

                ## Milestones
                1. The common leaver categories and price outcomes understood from two or three reliable guides.
                2. Your own agreement's leaver definitions mapped against them.
                3. Questions about how your clauses apply to this departure answered by counsel.
                4. A plain-words explanation written that both founders could accept as accurate.

                ## Notes
                Whether a departure is a good or bad leaver case is a legal question for counsel. Calling someone a bad leaver in a meeting rarely helps and often hardens positions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain-words note maps your agreement's leaver definitions to their price outcomes, with counsel's answers recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read two reputable guides to founder leaver provisions"
                - "Map your agreement's leaver categories to the price each one triggers"
                - "Ask counsel how the clauses apply to this departure"
                - "Write a neutral plain-words summary of the leaver terms"
            - name: How founder share buybacks work
              description: |-
                ## Purpose
                Buying back a founder's shares can involve company law limits on using company money, a valuation, board and shareholder approvals, and payment in instalments if cash is tight. Understanding the mechanics before you agree a price stops you promising something the company cannot lawfully or practically do.

                ## Milestones
                1. The ways your company could acquire shares (company buyback, transfer to another holder, cancellation) understood.
                2. The approvals and funding limits that apply in your jurisdiction confirmed with counsel.
                3. A view of how fair value might be set, including whether an independent valuation is needed.
                4. A cash plan showing what the company could pay now and in instalments.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note covers the buyback routes open to the company, the approvals required as confirmed by counsel, and a cash plan for payment."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel which share buyback routes are open to the company"
                - "Note the approvals and funding limits counsel says apply"
                - "Ask whether an independent valuation is advisable"
                - "Model what the company could pay now and over twelve months"
            - name: Tax questions to take to an adviser
              description: |-
                ## Purpose
                Selling, returning or keeping founder shares can have personal and company tax consequences that depend on the country, the share history and elections made years ago. Neither founder should guess. Preparing a clear list of facts and questions makes the adviser's time cheaper and the answers more useful for both sides.

                ## Milestones
                1. The share history gathered: issue dates, prices paid, any elections or reliefs claimed.
                2. A list of the proposed transactions in plain words.
                3. Questions written for a tax adviser on company and personal consequences.
                4. The adviser's answers recorded and shared with counsel before terms are fixed.

                ## Notes
                This project prepares questions; it does not answer them. Each founder should take personal tax advice of their own.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tax adviser has answered a written list of questions about the proposed share transactions, and the answers are shared with counsel before terms are fixed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Gather share issue dates, prices paid and any tax elections made"
                - "Describe each proposed share transaction in one plain sentence"
                - "Write the questions for a tax adviser about company and personal effects"
                - "Send the adviser's answers to company counsel"
            - name: Negotiation preparation for separation terms
              description: |-
                ## Purpose
                Separation talks are a negotiation between people who know each other's weak spots, which makes them unusually easy to derail. Preparing like a negotiator (each side's real interests, the best alternative if no deal is reached, a package rather than single-issue haggling) keeps the discussion on outcomes and away from old grievances.

                ## Milestones
                1. Each side's underlying interests written down, not just their stated positions.
                2. Your best alternative to a negotiated agreement described honestly.
                3. Two or three packages prepared that trade items against each other.
                4. A rehearsal held with counsel or a trusted adviser playing the other side.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written prep sheet lists both sides' interests, your best alternative and at least two offer packages, rehearsed once before talks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write what the departing founder most needs beneath their stated asks"
                - "Describe what happens if no agreement is reached"
                - "Build two packages that trade shares, cash, timing and title"
                - "Rehearse the opening of the negotiation with an adviser"
            - name: Practising the hard conversations
              description: |-
                ## Purpose
                Founders who handle a board meeting easily can freeze when the person across the table was their closest collaborator. Rehearsing the toughest moments aloud with a coach or founder peer, including staying silent after delivering news and responding to tears or anger, makes the real conversations shorter and kinder.

                ## Milestones
                1. The three hardest moments in the coming conversations identified.
                2. At least two role-play sessions held with a coach or peer playing the co-founder.
                3. Phrases that inflamed things in rehearsal replaced with calmer ones.
                4. A short personal script of opening lines and steadying phrases kept to hand.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two role-play sessions have been held, and a one-page script of opening lines and steadying phrases is ready before the next separation meeting."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Name the three moments in the talks you most dread"
                - "Book two role-play sessions with a coach or founder peer"
                - "Note which phrases made the role-play worse and rewrite them"
                - "Write a one-page script of openings and steadying phrases"
            - name: IP and confidentiality checks on departure
              description: |-
                ## Purpose
                Code written before incorporation, a patent filed in a founder's own name, a domain on a personal card or a design file in a personal cloud drive can all leave with the founder unless they are assigned. Checking what the company actually owns, and what the departing founder has agreed to keep confidential, closes gaps before goodwill runs out.

                ## Milestones
                1. A list of every key asset: code repositories, domains, trademarks, patents, designs and data.
                2. The legal owner of each asset confirmed against assignment documents and registrations.
                3. Any asset not clearly owned by the company flagged for assignment in the separation agreement.
                4. The departing founder's confidentiality and return-of-property duties confirmed in writing.

                ## Notes
                Ask counsel to confirm assignments. A founder's goodwill on the day they leave is the cheapest moment to fix a missing IP assignment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every key company asset has a confirmed legal owner, and any gap is listed for assignment in the separation agreement."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the company's code, domains, trademarks, patents and key data"
                - "Check who is the registered or legal owner of each asset"
                - "Flag any asset that needs assigning to the company"
                - "Ask counsel to add the missing assignments to the agreement"
            - name: Agreed departure story
              description: |-
                ## Purpose
                When the team, customers and investors each hear a slightly different reason for the departure, they fill the gaps with the worst version. A short agreed story, true, neutral and approved by both founders, used word for word in every message, protects the company and the departing founder's reputation alike.

                ## Milestones
                1. A three-sentence account of why the founder is leaving and what happens next.
                2. The departing founder's approval of the wording obtained.
                3. Versions adapted for team, customers, investors and public, all built on the same core.
                4. A short list of questions people will ask, with agreed answers.

                ## Notes
                Ask the agent to draft three neutral versions of the story from your notes, then edit them together with the departing founder.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-sentence departure story approved by both founders exists, with audience versions and answers to at least five likely questions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft three neutral versions of the departure story"
                - "Edit the chosen version with the departing founder until both approve"
                - "Adapt the core story for team, customers, investors and the public"
                - "Write agreed answers to the five questions people will ask"
            - name: Buyback, keep or transfer decision for vested shares
              description: |-
                ## Purpose
                Vested shares can stay with the departing founder, be bought back by the company, or be sold to the remaining founders or an investor. Each choice changes cash, control and the cap table a future investor sees, so it deserves a side-by-side comparison rather than whatever the first offer happened to propose.

                ## Milestones
                1. The three options compared on cash cost, control, cap table effect and the relationship.
                2. Investor and board views on a large inactive shareholder gathered.
                3. A preferred option chosen with the reasons written down.
                4. The choice raised with the departing founder as a proposal, not an ultimatum.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of keep, buyback and transfer options exists, with the chosen route and its reasons recorded and proposed to the departing founder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare keep, buyback and transfer on cost, control and cap table effect"
                - "Ask the lead investor how they view a large inactive shareholder"
                - "Choose a preferred route and write down why"
                - "Propose the route to the departing founder through counsel"
            - name: Future role for the departing founder
              description: |-
                ## Purpose
                Not every departure has to be a clean break. A paid advisory role, a board seat for a fixed term or a short consulting contract can keep valuable knowledge close, but each also keeps old tensions in the room. Deciding deliberately, with scope, term and pay written down, avoids an informal arrangement nobody can end gracefully.

                ## Milestones
                1. Options listed: clean break, advisor, consultant, board seat or observer.
                2. The value and the risk of each option written in a sentence.
                3. A choice made with scope, term, pay and an end date if any role continues.
                4. The departing founder's view heard and reflected in the final choice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The departing founder's future role, or a clean break, is decided in writing, with scope, term and pay set for any continuing role."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the possible continuing roles and a clean break side by side"
                - "Write the value and the risk of each option"
                - "Ask the departing founder what they would want and why"
                - "Record the choice with scope, term and pay"
            - name: Separation agreement heads of terms
              description: |-
                ## Purpose
                Before lawyers draft a full agreement, a two-page heads of terms setting out the commercial deal (shares, price, payment timing, IP, role, restrictions, announcement and release of claims) saves weeks of expensive redrafting. It also shows early whether the two sides really agree or are only being polite.

                ## Milestones
                1. A heads of terms draft covering shares, price, timing, IP, role, restrictions and messaging.
                2. Points of disagreement marked clearly rather than glossed over.
                3. A version both sides accept in principle, marked as not binding except where counsel says otherwise.
                4. Counsel instructed to draft the full agreement from the accepted heads.

                ## Notes
                Keep emotion out of the document. A clause on how both sides will speak about each other in public is often worth more than a few thousand in price.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Both sides have accepted a written heads of terms in principle, and counsel has been instructed to draft the full separation agreement from it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft the commercial points of the separation on two pages"
                - "Mark each point as agreed, open or disputed"
                - "Meet the departing founder and their adviser to close the open points"
                - "Instruct counsel to draft the full agreement from the accepted heads"
            - name: Re-vesting for the remaining founders
              description: |-
                ## Purpose
                Investors watching one founder leave with a large stake often ask the remaining founders to put some of their own shares back on a vesting schedule. Deciding your position before an investor raises it, and understanding what you would accept, keeps a sensible protection from becoming a forced concession in the middle of a round.

                ## Milestones
                1. Each remaining founder's current vesting status confirmed.
                2. Likely investor asks on re-vesting understood from advisers or peer founders.
                3. A shared position agreed between the remaining founders on what you would accept.
                4. Any change documented by counsel with the right approvals.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The remaining founders have a written, agreed position on re-vesting, and any change made is documented and approved through counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the current vesting status of each remaining founder"
                - "Ask two founder peers what investors asked of them after a departure"
                - "Agree between you what re-vesting terms you would accept"
                - "Ask counsel to document any agreed change"
            - name: Reallocating the departed founder's responsibilities
              description: |-
                ## Purpose
                Few co-founders held one neat job: the CTO also ran hiring, the COO also owned the biggest customer. Mapping everything they actually did and deciding, item by item, whether it moves to a remaining founder, a team member, a new hire or simply stops, prevents the quiet overload that burns out whoever is left.

                ## Milestones
                1. A list of every responsibility the departing founder held, formal and informal.
                2. Each responsibility given a new owner or marked to stop.
                3. No remaining person taking on more than they can realistically carry, checked with them.
                4. The new ownership map shared with the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every responsibility the departing founder held has a named new owner or a recorded decision to stop it, and the map is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everything the departing founder did, including the informal work"
                - "Give each item a new owner or mark it to stop"
                - "Check the new load with each person taking on work"
                - "Share the new ownership map with the team"
            - name: Filling the departed founder's role
              description: |-
                ## Purpose
                Hiring a like-for-like replacement for a co-founder is slow and expensive, and often not needed. Choosing deliberately between promoting someone, hiring a senior lead, using a fractional executive or absorbing the work, and then onboarding whoever takes it with a clear plan, keeps the gap from becoming permanent by default.

                ## Milestones
                1. Options compared: promote, hire full time, fractional or absorb.
                2. A decision made with the budget and the first ninety days' priorities written.
                3. The person in the role starting with a written 30, 60 and 90 day plan.
                4. A review at ninety days on whether the arrangement is working.

                ## Notes
                Start from the **Onboarding 30/60/90** template for whoever steps into the role, internal promotion included.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of how the role is filled exists, and the person in it has a written 30, 60 and 90 day plan reviewed at day ninety."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare promoting, hiring, a fractional lead and absorbing the work"
                - "Set the budget and ninety-day priorities for the role"
                - "Write a 30, 60 and 90 day plan with the person who takes it"
                - "Hold a review at day ninety on whether the arrangement works"
            - name: Using returned shares to refresh the option pool
              description: |-
                ## Purpose
                Unvested shares coming back to the company can sometimes be reissued or used to top up the employee option pool, which helps fund the very hires the departure makes necessary. Checking what is possible and deciding on purpose keeps those shares working for the company rather than sitting forgotten in the register.

                ## Milestones
                1. The number of shares returning to the company confirmed.
                2. Counsel's view obtained on whether they can be reissued or added to the pool.
                3. A decision on use, with board approval if required.
                4. The pool size updated in the cap table and hiring plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-approved decision on what happens to returned shares is recorded, and the cap table and hiring plan reflect it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm how many shares return to the company"
                - "Ask counsel whether they can be reissued or added to the option pool"
                - "Put the proposal to the board for approval"
                - "Update the cap table and the hiring plan"
            - name: Mediation for a contested departure
              description: |-
                ## Purpose
                If the two sides cannot agree price or terms, litigation is slow, public and expensive enough to sink a seed-stage company. A trained commercial mediator, booked before positions harden completely, often settles in a day what lawyers would argue about for a year.

                ## Milestones
                1. Any dispute resolution clause in the founder documents checked.
                2. Two or three commercial mediators with founder or shareholder dispute experience shortlisted.
                3. A mediator and date agreed by both sides, with costs shared as agreed.
                4. A position paper prepared with counsel before the mediation day.

                ## Notes
                Mediation is voluntary and confidential in most places, but check with counsel how your jurisdiction treats it before relying on that.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A mediator and date are agreed by both sides, and a position paper prepared with counsel is ready before the session."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check the founder documents for a dispute resolution clause"
                - "Shortlist three commercial mediators with shareholder dispute experience"
                - "Propose the mediator and cost split to the departing founder's adviser"
                - "Prepare a position paper with counsel"
            - name: Board meeting to approve the separation
              description: |-
                ## Purpose
                Most separations need formal board approval, and some need shareholder resolutions too: accepting a director's resignation, approving a buyback, changing signatories, appointing new officers. A properly prepared meeting with papers sent in advance and minutes taken avoids a void approval being discovered in a later due diligence.

                ## Milestones
                1. Counsel's list of required board and shareholder approvals in hand.
                2. Board papers and draft resolutions circulated at least five days before the meeting.
                3. The meeting held with conflicts declared and the departing founder's position handled as counsel advises.
                4. Signed minutes and resolutions filed, with registry filings made where required.

                ## Notes
                Start from the **Board meeting** template. A departing founder who is a director usually declares an interest in resolutions about their own exit.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Signed board minutes and resolutions approving the separation are filed, and any registry filings are made within the required period."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel for the list of board and shareholder approvals required"
                - "Circulate board papers and draft resolutions five days ahead"
                - "Hold the meeting with conflicts declared and minuted"
                - "File signed minutes and any required registry changes"
            - name: Telling the team on announcement day
              description: |-
                ## Purpose
                How the team hears the news will be remembered longer than the terms of the deal. Telling everyone at once, in person or on one call, with both founders present if the relationship allows, followed by time for questions and one-to-ones the same week, keeps trust intact and stops the story fragmenting.

                ## Milestones
                1. A date and time chosen when everyone can attend, early in the week.
                2. A short script based on the agreed departure story, with roles for each founder.
                3. The all-hands held, followed by open questions and a written summary the same day.
                4. One-to-ones booked with key people within 48 hours.

                ## Notes
                Tell anyone who reports directly to the departing founder a little earlier, in private, so they are not surprised in front of colleagues.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The whole team heard the news in one session on the planned day, received a written summary that day, and key people had one-to-ones within 48 hours."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick an announcement slot early in the week when everyone is available"
                - "Write the all-hands script from the agreed departure story"
                - "Brief the departing founder's direct reports privately beforehand"
                - "Send a written summary to the team straight after the session"
            - name: Customer and partner notification day
              description: |-
                ## Purpose
                Key customers and partners should hear about the departure from you, directly and soon after the team, not from a social post. A tiered plan (calls for the top accounts, a personal email for the rest, a holding line for support staff) keeps renewals safe and shows the company is in control.

                ## Milestones
                1. Accounts sorted into call, personal email and general notice tiers.
                2. Call notes and email text prepared from the agreed departure story.
                3. Top-tier calls made within a day of the team announcement.
                4. Every customer question logged and answered within two working days.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All top-tier accounts received a call within a day of the team announcement, and every customer question was answered within two working days."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sort accounts into call, personal email and general notice tiers"
                - "Prepare call notes and email text from the agreed story"
                - "Make the top-tier calls the day after the team announcement"
                - "Log customer questions and answer each within two working days"
            - name: Public announcement and profile updates
              description: |-
                ## Purpose
                Leaving a departed founder listed as co-founder on the website, a pitch deck or a public company profile causes confusion, and a sudden silent change looks worse. Agreeing the public wording, timing and each person's own social posts, then updating every public listing in one pass, closes the story cleanly.

                ## Milestones
                1. Public wording and timing agreed with the departing founder.
                2. Each founder's own social post drafted and checked against the agreed story.
                3. Website team page, decks, press kit and public company profiles updated.
                4. Any press enquiry answered from the agreed lines by one named spokesperson.

                ## Notes
                Agree whether the departing founder may keep calling themselves a co-founder in their own profile. Most companies say yes; it costs nothing and is true.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Public wording was agreed in advance, and every company web page, deck and public profile shows the change within a week of the announcement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the public wording and the posting date with the departing founder"
                - "List every page, deck and profile that names the founding team"
                - "Update every listing in a single pass"
                - "Name one spokesperson for any press questions"
            - name: Signing day and closing checklist
              description: |-
                ## Purpose
                Signatures alone do not close a separation: the agreement is finished when it is signed by everyone needed, the shares have moved, money has been paid and the company records reflect it. A closing checklist run on signing day catches the missing countersignature or unfiled form that otherwise surfaces in the next round's diligence.

                ## Milestones
                1. A closing checklist agreed with counsel listing every document, signature, payment and filing.
                2. All documents signed by every required party, with copies held centrally.
                3. Share transfers, payments and resignations completed on the agreed date.
                4. A closing bundle saved in the data room with an index.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every item on the closing checklist is signed, paid or filed, and an indexed closing bundle is saved in the data room."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel for a closing checklist of documents, payments and filings"
                - "Collect every signature and save fully signed copies"
                - "Confirm share transfers, payments and resignations are complete"
                - "Save an indexed closing bundle in the data room"
            - name: Last day and farewell for the departing founder
              description: |-
                ## Purpose
                The last day of a co-founder can be a quiet log-off or a moment the team remembers with respect, and the difference says a great deal about the company's culture. Planning a short farewell, returning equipment, a final handover check and a genuine thank-you closes the chapter well even when the separation was hard.

                ## Milestones
                1. Equipment return, final access removal and handover sign-off scheduled for the last day.
                2. A farewell format agreed with the departing founder, from a team lunch to a short call.
                3. A thank-you from the remaining founders said in front of the team.
                4. A friendly line of contact agreed for questions in the months after.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The last day included a final handover sign-off, equipment return and a farewell the departing founder agreed to."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the departing founder how they would like to say goodbye"
                - "Schedule equipment return and final access removal"
                - "Write a short thank-you to say in front of the team"
                - "Agree how they can be contacted with questions afterwards"
            - name: When you are the co-founder who is leaving
              description: |-
                ## Purpose
                Leaving a company you started is a loss even when it is your choice, and departing founders often give away more than they need to in the rush to be done. Taking your own legal and tax advice, knowing your share position, protecting your reputation and planning what comes next lets you leave with dignity and with what you earned.

                ## Milestones
                1. Your own lawyer engaged, separate from company counsel.
                2. Your vested share position and any option exercise windows confirmed in writing.
                3. Your must-haves for the exit written down before you negotiate.
                4. A plan for the first three months after your last day, including income and rest.

                ## Notes
                Check the exercise window for any options the day you resign. Some close within a few months of leaving, and missing it can forfeit them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "You have independent legal advice, a written confirmation of your vested shares and exercise windows, and a three-month plan for after leaving."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a lawyer who acts only for you in the separation"
                - "Ask the company in writing to confirm your vested shares and exercise windows"
                - "Write the three things you need from the exit"
                - "Check shareholder letters and exercise deadlines after leaving @recurring(monthly:25)"
            - name: Separating from a co-founder who is your partner
              description: |-
                ## Purpose
                When the co-founder is also a spouse or partner, the business split often runs alongside a personal one, and decisions in one leak into the other. Keeping the company process with its own counsel and timetable, separate from any personal proceedings, and agreeing how you will behave at work, protects the staff and the value both of you may still own.

                ## Milestones
                1. Separate advisers in place for the company matter and for any personal matter.
                2. Written ground rules for working together until the separation closes.
                3. A neutral third party, such as the board chair, named to break deadlocks.
                4. Company decisions recorded through normal board processes, not at home.

                ## Notes
                If you share a home or children, agree with your advisers how the shares will be treated in any personal settlement before you sign company terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Company and personal matters have separate advisers, and written workplace ground rules plus a named deadlock breaker are agreed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Instruct separate advisers for the company and any personal matter"
                - "Write ground rules for how you work together until closing"
                - "Ask the board chair or a trusted adviser to break deadlocks"
                - "Move company decisions into board meetings with minutes"
            - name: Co-founder leaving before the paperwork exists
              description: |-
                ## Purpose
                Many founders split in the first months, before incorporation, vesting or IP assignment, which leaves real questions about who owns the code, the name and the early customers. A short, fair written settlement now, even if no shares exist yet, is far cheaper than an ownership claim after you raise money.

                ## Milestones
                1. What each founder contributed listed: code, designs, customers, money and time.
                2. A fair settlement agreed: a small stake, cash, or a clean release.
                3. IP assignment and release of claims signed, drafted or checked by a lawyer.
                4. The settlement filed where any future investor's diligence will find it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed settlement with IP assignment and release of claims exists for the departed pre-incorporation founder and is filed with company records."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List what the departing founder contributed in code, designs, customers and money"
                - "Propose a fair settlement in writing"
                - "Ask a lawyer to draft or check an IP assignment and release"
                - "File the signed settlement with the company records"
            - name: One of three founders leaving
              description: |-
                ## Purpose
                When one of three founders goes, the balance of votes, roles and friendship between the two who remain shifts at once, and the departing founder may try to recruit one of them to their side. Agreeing early between the remaining two how you will decide and communicate keeps the separation from turning into a two against one.

                ## Milestones
                1. The remaining two founders agreed on the outcome they want before talks begin.
                2. Voting and board composition after the departure checked with counsel.
                3. A rule that neither remaining founder negotiates privately with the leaver.
                4. A conversation held between the remaining two on roles and decision-making going forward.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The remaining two founders have a written shared position, a no-side-deals rule and an agreed split of roles after the departure."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Meet the other remaining founder to agree the outcome you both want"
                - "Ask counsel how votes and board seats change after the departure"
                - "Agree that neither of you negotiates privately with the leaver"
                - "Decide your roles and how you will settle future disagreements"
            - name: Co-founder unable to continue through illness or bereavement
              description: |-
                ## Purpose
                Serious illness, injury or death forces a separation nobody chose, and the documents written for resignations often fit badly. Handling it with compassion while still protecting the company means understanding what the agreements say about incapacity and death, working with family or executors patiently, and keeping the company running in the meantime.

                ## Milestones
                1. The agreement terms on incapacity, death and transfer to heirs checked with counsel.
                2. A single caring point of contact named for the founder's family or executors.
                3. Interim cover arranged for the founder's responsibilities.
                4. Any share or role decisions made on a timetable the family can manage.

                ## Notes
                Ask counsel and your insurer whether the company holds key person cover, and what it requires. Move slowly on shares; nothing about this is urgent for the family.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Counsel has confirmed the applicable terms, a named contact supports the family, and interim cover for the founder's role is in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel what the founder documents say about incapacity and death"
                - "Name one caring contact for the founder's family or executors"
                - "Arrange interim cover for the founder's responsibilities"
                - "Check with the insurer whether key person cover applies"
            - name: Departure in the middle of a fundraise
              description: |-
                ## Purpose
                Losing a founder during a round is one of the few events that can stall a term sheet, because investors are backing the team as much as the product. Telling the lead investor promptly, with a credible plan for the role and the cap table, is usually the difference between a delay and a withdrawn offer.

                ## Milestones
                1. The lead investor told in person before diligence finds it.
                2. A plan for the role, the shares and the timeline shared with them in writing.
                3. The data room updated with the separation documents as they are signed.
                4. The round's timetable and terms reconfirmed with the lead investor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The lead investor was told before diligence, received a written plan, and has reconfirmed the round's timetable and terms in writing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Call the lead investor to explain the departure in person"
                - "Send a written plan for the role, shares and timeline"
                - "Add the separation documents to the data room as they are signed"
                - "Ask the lead investor to reconfirm the round's timetable"
            - name: Removing a co-founder who does not want to leave
              description: |-
                ## Purpose
                Sometimes the board and the other founders conclude a co-founder must go and they refuse. Removing them as an officer, an employee or a director follows different rules for each, and getting the process wrong can invite a claim that costs more than the problem. Careful documentation, counsel at every step and a generous exit offer usually beat a forced removal.

                ## Milestones
                1. The specific concerns documented with dates, examples and earlier feedback given.
                2. Counsel's advice on the separate routes for removing them as employee, officer and director.
                3. A fair exit offer made before any formal removal step.
                4. Any formal step taken only by the process counsel sets out, with minutes.

                ## Notes
                This is the separation most likely to end in a dispute. Do not act on any removal power until counsel has confirmed how it applies to your company.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Concerns are documented, counsel has advised on each removal route, and an exit offer was made in writing before any formal step."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the concerns with dates, examples and feedback already given"
                - "Ask counsel how removal works for an employee, an officer and a director"
                - "Make a fair written exit offer before any formal step"
                - "Follow counsel's process and minute every formal decision"
            - name: Secondary sale of a departed founder's shares
              description: |-
                ## Purpose
                A departed founder holding a large stake may want cash, and a new or existing investor may want a bigger position. Arranging a secondary sale, with the company's transfer and pre-emption rules followed, can tidy the cap table and give the founder liquidity without the company spending its own cash.

                ## Milestones
                1. Transfer restrictions, pre-emption and consent rights checked with counsel.
                2. Interested buyers identified among investors or the remaining founders.
                3. A price and structure agreed, with board and shareholder approvals obtained.
                4. The transfer completed and recorded in the register and cap table.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A secondary transfer of the departed founder's shares is completed with every required approval and recorded in the register and cap table."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel which transfer and pre-emption rules apply"
                - "Ask existing investors whether they would buy the shares"
                - "Agree price and structure with the buyer and the departed founder"
                - "Record the completed transfer in the register and cap table"
            - name: Due diligence file on the separation
              description: |-
                ## Purpose
                Every future investor or acquirer will ask about the founder who left: did they sign a release, is the IP assigned, are all approvals in order? A ready diligence file with the signed documents and a one-page summary turns a potentially worrying question into a ten-minute review.

                ## Milestones
                1. Every signed separation document collected in one data room folder.
                2. A one-page summary of what happened, the terms and the current share position.
                3. Counsel's confirmation that approvals and filings are complete.
                4. The file checked once a year and before any new round.

                ## Notes
                Ask the agent to draft the one-page summary from the signed documents, then check every figure against the register.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data room folder holds every signed separation document and a one-page summary, with counsel's confirmation that approvals and filings are complete."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect every signed separation document into one data room folder"
                - "Ask the agent to draft a one-page summary from the signed documents"
                - "Check every number in the summary against the share register"
                - "Ask counsel to confirm approvals and filings are complete"
                - "Review the file and refresh the summary before each round @recurring(yearly)"
            - name: Lessons review and stronger leaver terms
              description: |-
                ## Purpose
                Once the separation closes, the remaining founders have just learned exactly where their documents and habits were weak. A frank review a month or two later, followed by updates to the leaver clauses, IP assignments and founder roles for everyone who remains or joins, makes the next departure, if there is one, far less painful.

                ## Milestones
                1. A written review of what went well, what hurt and what the documents failed to cover.
                2. Changes to the founder and senior hire agreements proposed with counsel.
                3. Updated agreements signed by the remaining founders and new senior hires.
                4. A yearly check of founder agreements against how the company now works.

                ## Notes
                Hold the review once emotions have cooled, usually four to eight weeks after closing, and invite the board chair to keep it honest.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written lessons review exists, and updated leaver and IP terms are signed by all remaining founders and new senior hires."
                cadence: cyclic
              tasks:
                - "Write down what the separation exposed in your documents and habits"
                - "Ask counsel to propose updated leaver and IP terms"
                - "Have the remaining founders sign the updated agreements"
                - "Check founder agreements against how the company works now @recurring(yearly)"
---

# Co-Founder Separation

Co-Founder Separation is for the founder who is leaving and the ones who stay, from the first hint that it is over to the day the cap table is clean again. It starts with foundations (reading what you actually signed, the vested share position, counsel, goals and a dated handover window), then the weekly machinery that carries a separation through, the skills of leaver terms, buybacks and hard conversations, the decisions about shares, roles and replacements, the dated events from board approval to announcement day, variants for spouses, three-founder teams, illness and mid-fundraise exits, and finally contested removals, secondary sales and diligence files.

What repeats is a Monday workstream review, a short daily handover session, weekly checks on customers and team mood, monthly investor updates, access reviews and an obligations calendar, and quarterly and yearly care of the share register and the former founder as a shareholder. The Purchase decision, Meeting notes, Risk register, Operational checklist, Board meeting and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
