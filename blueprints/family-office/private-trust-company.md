---
id: family-office.private-trust-company
name: Private Trust Company
description: "A considered decision on whether the family should run its own trustee, and if so a private trust company built properly: ownership, board, licensing route, costs, decision records, filings and continuity across generations."
category: personal
version: 1.0.0
tags: [family-office, private-trust-company, parent, retiree, trustee-governance, ptc-board, purpose-trust, trust-administration]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - purchase-decision
    - board-meeting
    - meeting-notes
    - compliance-control
    - risk-register
    - reading-queue
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Private Trust Company
          description: "Considering a private trust company: when it makes sense, the board, regulatory requirements, costs and the family's role in decisions."
          projects:
            - name: Private trust company fit assessment
              description: |-
                ## Purpose
                Families usually hear about private trust companies from another family or a banker, and the idea sounds like control without the fees. In practice a PTC suits a family with several substantial trusts, unusual assets such as an operating business, and members willing to serve as directors for decades. A written assessment against those tests stops the family spending a year and a large legal bill on a structure it did not need.

                ## Milestones
                1. The reasons the family is considering a PTC written down in the family's own words.
                2. The current trustee arrangement scored for cost, responsiveness, understanding of the assets and continuity.
                3. The test questions answered: value held in trust, number of trusts, asset types, willing directors, appetite for running a regulated company.
                4. A recorded conclusion of proceed, stay with a professional trustee, or revisit in a named year.

                ## Notes
                A common false start is treating a PTC as a way to keep control the settlor has already given away. If the main motive is control, raise it with the trust lawyer first, because it shapes everything that follows.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated written assessment ending in proceed, stay or revisit, read by the settlor and the main adult beneficiaries."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the three biggest frustrations with the current trustee arrangement"
                - "Ask the trust lawyer for the questions they use to test whether a PTC fits"
                - "Score the current trustee against cost, speed, asset knowledge and continuity"
                - "Write a one-page conclusion and share it with the senior generation"
            - name: Inventory of trusts a PTC would serve
              description: |-
                ## Purpose
                Nobody can size, cost or design a PTC without knowing exactly which trusts it would hold. Many families find trusts set up by different generations, in different countries, with trustees nobody has spoken to in years. A single inventory with each trust's deed, governing law, current trustee, assets and beneficiaries becomes the working file for every later project in this area.

                ## Milestones
                1. Every family trust listed with its name, date, governing law and current trustee.
                2. A copy of each trust deed and any deeds of variation located and filed.
                3. The main assets of each trust and their rough value recorded.
                4. Trusts marked as candidates to move to a PTC, to stay where they are, or to be wound up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table covering every family trust with deed location, governing law, trustee, assets and a move, stay or wind-up marking."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Start a table of every family trust you know of with its current trustee"
                - "Request copies of each trust deed and any variations from the trustees"
                - "Note the governing law and main assets of each trust in the table"
                - "Mark each trust as move, stay or wind up and note why"
            - name: Family goals for running its own trustee
              description: |-
                ## Purpose
                Two families can set up identical PTCs for opposite reasons: one wants faster decisions on a family business, another wants the next generation trained as stewards. Writing down what the family hopes the PTC will achieve, and what it must never become, gives the lawyers a brief and gives future directors a test for their own decisions.

                ## Milestones
                1. Each adult in the senior generation asked separately what they want from a PTC.
                2. The answers grouped into three to five goals, such as continuity, asset knowledge, privacy and education.
                3. A short list of things the PTC must not do, such as favour one branch or act on one person's instructions.
                4. The goals agreed and attached to the fit assessment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page statement of three to five PTC goals and the limits on it, agreed by the senior generation and filed with the fit assessment."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each senior family member privately what they want a PTC to achieve"
                - "Group the answers into no more than five goals"
                - "Draft a list of things the PTC should never be used for"
                - "Agree the final wording at a family meeting and file it"
            - name: Set-up and running cost model for a PTC
              description: |-
                ## Purpose
                The cost case is often made by comparing a professional trustee's annual fee with nothing, when a PTC has its own bill: legal drafting, incorporation, a licensed administrator, directors' fees, insurance, audit and the family's own time. A side-by-side model over ten years shows whether the PTC saves money, costs more for better decisions, or simply moves the cost somewhere less visible.

                ## Milestones
                1. One-off set-up costs estimated from at least two written quotes.
                2. Annual running costs listed line by line: administrator, registered office, directors, insurance, audit, filings and legal reviews.
                3. The current trustee fees for the same trusts totalled for comparison.
                4. A ten-year comparison showing the cumulative difference and the break-even year, if there is one.

                ## Notes
                Include the cost of moving trusts across, which can involve stamp duty, re-registration of assets and the outgoing trustee's own exit fees. Ask each adviser to price it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ten-year cost comparison of a PTC against the current trustee, built from written quotes, reviewed by the family's finance lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the last two years of trustee fee invoices for every trust"
                - "Request written set-up and annual fee quotes from two PTC administrators"
                - "Ask the agent to lay the quotes and current fees into a ten-year table"
                - "Review the break-even year and assumptions with the family's finance lead"
            - name: Adviser team for the PTC project
              description: |-
                ## Purpose
                A PTC touches trust law in its home jurisdiction, tax law in every country where the settlor and beneficiaries live, and the regulator's licensing rules. One generalist adviser cannot cover all three, and gaps tend to surface only when a tax authority or a beneficiary asks a question. Appointing a named team with written scopes before any drafting starts keeps each question with the person qualified to answer it.

                ## Milestones
                1. A trust lawyer in the intended PTC jurisdiction appointed with a written engagement letter.
                2. Tax advisers confirmed for each country where the settlor or main beneficiaries are resident.
                3. A lead adviser named to coordinate the others and keep the timetable.
                4. A one-page contact sheet with each adviser's scope, fee basis and response time.

                ## Notes
                Start from the **Vendor** template, one record per adviser. Ask each one in writing what they are not covering, so the gaps are visible.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signed engagement letters with a trust lawyer and the needed tax advisers, plus a contact sheet naming the lead adviser."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each country where the settlor and adult beneficiaries are tax resident"
                - "Ask two trust lawyers for a scope and fee estimate for a PTC project"
                - "Confirm which adviser will coordinate the team and hold the timetable"
                - "Ask every adviser to state in writing what falls outside their scope"
            - name: PTC regime comparison across candidate jurisdictions
              description: |-
                ## Purpose
                Several trust centres have specific rules for private trust companies, including Caribbean centres such as the Bahamas, the BVI and the Cayman Islands, alongside places like Jersey, Guernsey and Bermuda. They differ on whether the PTC needs a licence, what a registered office provider must do, local director requirements and annual fees. A comparison of two or three candidates on those PTC-specific points, prepared with the trust lawyer, narrows the choice before money is spent on drafting.

                ## Milestones
                1. Two or three candidate jurisdictions chosen with the trust lawyer.
                2. Each compared on licensing, registered office duties, local director rules, filing burden and government fees.
                3. Practical factors added: time zone, language, court reputation and adviser availability.
                4. A preferred jurisdiction recorded with the reasons and the lawyer's comments.

                ## Notes
                This compares PTC rules only. The wider choice of where family structures should sit belongs to the family's jurisdiction review, and should already point at a short list.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of two or three PTC regimes on five set points, ending in a preferred jurisdiction the trust lawyer has commented on."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the trust lawyer which two or three PTC regimes suit the trusts' governing law"
                - "Build a comparison grid with licensing, office, directors, filings and fees"
                - "Add time zone, court reputation and adviser availability to the grid"
                - "Record the preferred jurisdiction and the lawyer's reasons"
            - name: Licensing exemption and regulatory pathway check
              description: |-
                ## Purpose
                In many trust centres a PTC acting only for one family can be exempt from a full trust licence, but only while it meets conditions such as using a licensed registered office provider and serving connected persons alone. Getting this wrong can mean running an unlicensed trust business. A written confirmation of the pathway, its conditions and what would break them protects the directors personally.

                ## Milestones
                1. The regulatory route confirmed in writing by the trust lawyer: licensed, exempt or registered.
                2. Every condition of that route listed, including who counts as a connected person.
                3. The events that would breach a condition, such as adding an unconnected beneficiary, written down.
                4. The conditions added to the board's annual compliance check.

                ## Notes
                Rules change. Ask the lawyer to date the confirmation and to say how they will tell the board when the regime is amended.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated legal note stating the PTC's regulatory route, its conditions and the events that would breach them, filed with the board papers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the trust lawyer to confirm the regulatory route in a dated note"
                - "List every condition the route depends on in plain language"
                - "Write down which family changes could breach a condition"
                - "Add the conditions to the PTC compliance checklist"
            - name: Who owns the PTC shares
              description: |-
                ## Purpose
                If the settlor simply owns the PTC's shares, those shares fall into their estate, can be caught in a divorce or a creditor claim, and give one person power over every trust. Families commonly place the shares in a purpose trust or a foundation instead, which raises its own questions about who appoints the enforcer or council. Choosing the owning vehicle deliberately, with the lawyer, is the decision the whole structure rests on.

                ## Milestones
                1. The options set out by the lawyer: direct ownership, a purpose trust, a foundation or another vehicle.
                2. Each option tested against death, incapacity, divorce, creditor claims and family disputes.
                3. The roles in the chosen vehicle named, such as enforcer, council member or guardian, and who appoints them.
                4. The ownership decision recorded with the reasoning and signed off by the settlor.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the vehicle that owns the PTC shares, naming who fills each role in it and how they are replaced."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the lawyer for a written comparison of ownership options for the PTC shares"
                - "Walk each option through death, divorce, creditor claims and a family split"
                - "Decide who appoints and removes the enforcer or council of the owning vehicle"
                - "Record the decision and reasons in a signed note"
            - name: PTC articles and reserved matters drafting
              description: |-
                ## Purpose
                The PTC's articles decide how directors are appointed and removed, what quorum a decision needs, which matters need unanimous or independent approval, and what happens if the board deadlocks. Families who leave this to a standard form often discover the gaps during their first disagreement. Reviewing the draft line by line against the family's goals is slow work that pays for itself the first time it is tested.

                ## Milestones
                1. A first draft of the memorandum and articles received from the trust lawyer.
                2. Appointment, removal, quorum and deadlock rules checked against the board composition plan.
                3. A list of matters needing an independent director's vote agreed, such as distributions to a director's own branch.
                4. Final articles approved by the owning vehicle and ready for incorporation.

                ## Notes
                Read the deadlock clause twice. A casting vote held by one family member can quietly undo every balance built elsewhere.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Final PTC articles covering appointment, removal, quorum, deadlock and reserved matters, approved in writing by the owning vehicle."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the lawyer for the first draft of the PTC articles"
                - "Mark every clause on appointment, removal, quorum and deadlock"
                - "Agree the list of decisions that need an independent director's vote"
                - "Send consolidated comments to the lawyer in one document"
            - name: Appointing the licensed administrator for the PTC
              description: |-
                ## Purpose
                Most PTC regimes expect a licensed trust or corporate services firm to provide the registered office, keep the statutory books and often act as company secretary. That firm becomes the PTC's day-to-day memory, so its quality matters more than its price. A short tender with the same questions to each candidate makes the choice defensible to the board and the regulator.

                ## Milestones
                1. Three administrators asked the same questions on services, staff, fees and exit terms.
                2. References taken from two other family PTCs each candidate serves.
                3. A preferred administrator chosen and their service agreement reviewed by the lawyer.
                4. A named relationship manager and a backup confirmed in writing.

                ## Notes
                Ask how the administrator handles a request that arrives at 6pm before a public holiday. The answer says more than the brochure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed service agreement with a licensed administrator, chosen from three scored candidates, with a named relationship manager and backup."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write ten questions to send to every candidate administrator"
                - "Send the questions to three licensed firms in the chosen jurisdiction"
                - "Call two family PTC clients of the leading candidate for references"
                - "Hold a service review with the administrator against the agreement @recurring(yearly)"
            - name: PTC board composition plan
              description: |-
                ## Purpose
                Put the settlor and two children alone on a board and it looks like control to a court and like favouritism to the other branches. A board with at least one independent professional director, chosen for trust experience, is what makes a PTC credible as a real trustee. Deciding the size, the mix and the term limits before anyone is invited avoids awkward conversations later.

                ## Milestones
                1. The board size agreed, usually between three and seven.
                2. The mix of family, independent and professional directors set, with the reasons.
                3. Terms, rotation and a retirement age or review point agreed.
                4. A skills list drawn up covering trust law, investment, accounts and knowledge of the family's assets.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written board plan stating size, family and independent seats, terms and the skills each seat must bring, approved by the owning vehicle."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the skills the PTC board needs across trust, investment and accounts"
                - "Decide how many seats are family, independent and professional"
                - "Set the term length and rotation for each seat"
                - "Check the plan against the local director rules in the articles"
            - name: Independent director search for the PTC board
              description: |-
                ## Purpose
                The independent director is the person who will say no to the founder, and finding one who has the experience and the nerve takes longer than families expect. Searching through the lawyer's and administrator's networks, interviewing at least three people and taking references produces someone the board will listen to.

                ## Milestones
                1. A role description with time commitment, fee range and required experience.
                2. At least three candidates identified through advisers or professional bodies.
                3. Interviews held with two family directors and the lead adviser present.
                4. An appointment letter signed and the director's conflicts declared.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An independent director appointed by letter after interviews with at least three candidates, with references and conflicts on file."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a one-page role description for the independent director"
                - "Ask the lawyer and administrator for three names each"
                - "Interview the shortlisted candidates with the same questions"
                - "Take two references on the preferred candidate before any offer"
            - name: Director induction pack for the PTC
              description: |-
                ## Purpose
                New directors, family or not, need to understand every trust the PTC holds, the assets, the beneficiaries and the family's history before they vote on anything. An induction pack, refreshed each time someone joins, shortens the period in which a new director quietly defers to whoever has been there longest.

                ## Milestones
                1. A summary of each trust, its beneficiaries and its main assets on one page per trust.
                2. The articles, conflicts policy, decision rights matrix and recent minutes included.
                3. A family tree and a short history of how the trusts came about.
                4. An induction meeting held with the chair and the administrator for each new director.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An induction pack with one page per trust plus governance documents, used for at least one new director's induction meeting."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a one-page summary of each trust from the inventory"
                - "Add the articles, policies and last four sets of minutes"
                - "Include a family tree and a short history of the trusts"
                - "Book an induction meeting for each new director with the chair"
            - name: Directors' insurance and indemnity for the PTC
              description: |-
                ## Purpose
                PTC directors, especially family members, carry personal exposure if a beneficiary sues over a distribution or an investment loss. The usual protection is a combination of an indemnity in the articles or trust deeds and a directors' and officers' policy. Checking both, and the gaps between them, is what persuades a good independent director to accept the seat.

                ## Milestones
                1. The indemnity wording in the articles and each trust deed reviewed by the lawyer.
                2. Quotes obtained for directors' and officers' cover suitable for a trustee company.
                3. Exclusions and the limit of cover compared with the value held in trust.
                4. A policy in force and its renewal date on the board calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A directors' and officers' policy in force for the PTC, with exclusions reviewed against the trust indemnities and a renewal date diarised."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the lawyer to summarise the indemnities in the articles and deeds"
                - "Request quotes from a broker experienced in trustee company cover"
                - "Compare exclusions and limits against the total value held in trust"
                - "Renew the directors' and officers' policy before it lapses @recurring(yearly)"
            - name: Conflicts of interest policy for family directors
              description: |-
                ## Purpose
                A family director deciding a distribution to their own child, or a loan from a trust to a business they run, is conflicted in a way that can invalidate the decision. A written policy that defines conflicts, requires declarations and says who decides instead turns an awkward personal question into a routine procedure.

                ## Milestones
                1. Typical conflicts listed: own branch distributions, related business dealings, director fees and personal use of trust assets.
                2. A declaration form and a register of interests created.
                3. Rules agreed on when a conflicted director leaves the room, abstains or needs independent approval.
                4. The policy adopted by board resolution and signed by every director.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-adopted conflicts policy with a register of interests and an annual declaration signed by every director."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the conflicts most likely to arise for each family director"
                - "Draft a declaration form and a register of interests"
                - "Ask the lawyer to review the policy before it goes to the board"
                - "Collect a signed conflicts declaration from every director @recurring(yearly)"
            - name: Decision rights across board, council and protector
              description: |-
                ## Purpose
                Once a PTC exists, the family council, any protector, the owning vehicle and the board can all feel entitled to decide the same question. A matrix that says who decides, who is consulted and who is told, for the ten or so decisions that matter, prevents the family council from instructing the board in a way that undermines its independence.

                ## Milestones
                1. The ten decisions that matter listed, such as distributions, investment mandates, director appointments and adding beneficiaries.
                2. For each, the decider, those consulted and those informed agreed.
                3. The protector's consent powers in each trust deed mapped onto the matrix.
                4. The matrix approved by the board and shared with the family council.

                ## Notes
                The family council can offer views; it should not issue instructions to trustees. Ask the lawyer to check the wording keeps that line clear.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page decision rights matrix for at least ten decisions, approved by the PTC board and shared with the family council."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ten decisions most likely to cause friction"
                - "Note the protector's consent powers from each trust deed"
                - "Draft the matrix with decider, consulted and informed for each"
                - "Present the matrix to the family council for comment"
            - name: PTC incorporation and first board meeting
              description: |-
                ## Purpose
                Incorporation day is when the PTC moves from plans to a legal person with directors, a registered office and duties. The first board meeting adopts the policies, opens bank accounts and appoints officers, and its minutes will be read by anyone who ever challenges the structure. Treating it as an event with a checklist means nothing is left for a hurried second meeting.

                ## Milestones
                1. The PTC incorporated with the approved articles and the registered office in place.
                2. Directors appointed and their consents and KYC filed with the administrator.
                3. The first board meeting held, adopting the conflicts policy, decision matrix and banking mandates.
                4. Signed minutes and a list of follow-up actions with owners.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The PTC is incorporated and its first board meeting is minuted, adopting the core policies and banking mandates."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the first board meeting agenda with the administrator"
                - "Collect director consents and KYC documents before the date"
                - "Prepare resolutions adopting the policies and banking mandates"
                - "Circulate signed minutes and the action list within a week"
            - name: Reserved powers or a PTC board
              description: |-
                ## Purpose
                Some families can achieve what they want by keeping a professional trustee and reserving certain powers, such as investment direction, to the settlor or a committee. Others need the PTC. Comparing the two for each trust, with the lawyer, can show that only some trusts need to move, which cuts cost and complexity.

                ## Milestones
                1. For each candidate trust, the decisions the family most wants to influence listed.
                2. The lawyer's view recorded on whether reserved powers would deliver that under the trust's governing law.
                3. The risks of reserved powers, such as the settlor's estate or tax exposure, noted with the tax adviser.
                4. Each trust marked as PTC, reserved powers or no change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each candidate trust carries a recorded choice of PTC, reserved powers or no change, with legal and tax comments attached."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note the decisions the family wants to influence in each trust"
                - "Ask the lawyer whether reserved powers would cover them"
                - "Ask the tax adviser how reserved powers affect the settlor"
                - "Mark each trust with the chosen route in the inventory"
            - name: Where the PTC board meets and is managed
              description: |-
                ## Purpose
                Where a company is really managed can decide where it is tax resident, and a PTC whose directors all decide things by phone from one onshore country may be treated as resident there. Agreeing where meetings are held, how directors join, and where key decisions are signed, with the tax advisers, keeps the PTC where the family intended.

                ## Milestones
                1. The tax advisers' view on management and control recorded in writing.
                2. A rule agreed for where board meetings are held and how many directors must attend in person.
                3. Rules for signing resolutions and decisions taken between meetings.
                4. A log started of where each meeting took place and who attended from where.

                ## Notes
                Rules on residence and substance differ by country and change often. Ask for the advice to be refreshed whenever a director moves.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written meeting location and signing protocol approved by the board, backed by dated tax advice, with an attendance location log in use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each tax adviser for a dated note on management and control"
                - "Draft a meeting location and signing protocol for the board"
                - "Add an attendance location column to the minutes template"
                - "Approve the protocol at the next board meeting"
            - name: Director remuneration policy for the PTC
              description: |-
                ## Purpose
                Independent directors expect a fee, and family directors may or may not be paid. Unpaid family directors can feel taken for granted, while paid ones can be seen by other branches as drawing on the trusts. A written policy that sets fees for each seat, with the basis for them, settles the question before it becomes personal.

                ## Milestones
                1. Market fee ranges for independent PTC directors gathered from the administrator.
                2. A decision on whether family directors are paid, and how much.
                3. Expenses rules covering travel and time spent on trust business.
                4. The policy approved by the owning vehicle and recorded in the minutes.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written remuneration and expenses policy for every board seat, approved and minuted, with the evidence for the fee levels attached."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the administrator for typical independent director fee ranges"
                - "Decide whether family directors are paid and on what basis"
                - "Draft an expenses rule for travel and meeting time"
                - "Put the policy to the owning vehicle for approval"
            - name: In-house or outsourced PTC administration
              description: |-
                ## Purpose
                Some families run PTC administration through their own family office staff, others leave it entirely to the licensed administrator, and many split it. The choice affects cost, privacy, regulatory comfort and what happens when a key employee leaves. A scored comparison makes the split deliberate rather than whatever grew up in the first year.

                ## Milestones
                1. The administration tasks listed: books, minutes, payments, trust accounting, KYC and filings.
                2. Each task scored for in-house and outsourced on cost, control, continuity and regulatory fit.
                3. A split agreed and written into the administrator's service agreement.
                4. A handover plan for the in-house tasks if the staff member responsible leaves.

                ## Notes
                Start from the **Purchase decision** template. Regimes that rely on a licensed registered office provider may require some tasks to stay with that firm, so check before scoring.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded split of PTC administration tasks between family office and administrator, reflected in the service agreement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every recurring administration task the PTC needs"
                - "Check which tasks the regime requires the licensed provider to keep"
                - "Score each remaining task for in-house and outsourced handling"
                - "Write the agreed split into the administrator's service agreement"
            - name: Moving existing trusts from a professional trustee
              description: |-
                ## Purpose
                Replacing a long-standing trustee with the new PTC involves deeds of retirement and appointment, transferring every asset into the PTC's name, and the outgoing trustee's own checks and exit indemnities, which can take months. A phased plan, trust by trust, keeps assets from being left in limbo and the family from paying two trustees at once for longer than necessary.

                ## Milestones
                1. A transfer order agreed, starting with the simplest trust.
                2. The outgoing trustee's requirements and exit indemnity terms negotiated by the lawyer.
                3. An asset list for each trust with what is needed to re-register each one.
                4. Every asset confirmed in the PTC's name, trust by trust.
                5. Final accounts from the outgoing trustee received and reviewed.

                ## Notes
                Outgoing trustees often ask for a broad indemnity before they release assets. Let the lawyer negotiate its scope rather than signing the first draft.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every trust marked to move has its assets registered in the PTC's name and final accounts from the outgoing trustee reviewed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose the simplest trust to move first as a trial"
                - "Write to the current trustee giving notice and asking their requirements"
                - "Build an asset list showing how each asset is re-registered"
                - "Track each asset to confirmed registration in the PTC's name"
            - name: Signing day for deeds of retirement and appointment
              description: |-
                ## Purpose
                Deeds that retire the old trustee and appoint the PTC need the right signatories, any protector consents and sometimes notarisation, all on the same day. A missed consent can leave a trust without a validly appointed trustee. Treating the signing as a planned event with a checklist makes it a formality rather than a scramble.

                ## Milestones
                1. Every deed in final form and checked by the lawyer.
                2. All signatories and consenting protectors confirmed for the date, with powers of attorney where needed.
                3. Signing completed and originals collected.
                4. Banks, custodians and registries notified of the new trustee.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All deeds signed with every required consent on the day, originals filed and every bank and registry notified within 30 days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm each signatory and consenting protector for the signing date"
                - "Arrange notarisation or apostille where the lawyer says it is needed"
                - "Collect signed originals and send copies to the administrator"
                - "Send new trustee notices to every bank, custodian and registry"
            - name: Quarterly PTC board cycle
              description: |-
                ## Purpose
                Meeting only when something urgent arises makes a PTC look like a rubber stamp. A fixed quarterly cycle, with a board pack that arrives in time to read, shows the board considering each trust on its merits and gives the independent director a regular place to ask questions. The rhythm also catches problems while they are still small.

                ## Milestones
                1. Meeting dates set for the year ahead.
                2. A standard board pack agreed: trust reports, investment summary, distribution requests, risks and compliance.
                3. Packs circulated at least ten days before each meeting.
                4. Four meetings held in the year with quorum and signed minutes.

                ## Notes
                Start from the **Board meeting** template for each meeting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quorate board meetings held in a year, each with a pack sent ten days ahead and signed minutes on file."
                cadence: rolling
              tasks:
                - "Set the four board meeting dates for the next twelve months"
                - "Agree the standard contents of the board pack with the administrator"
                - "Circulate the board pack ten days before the meeting @recurring(quarterly)"
                - "Confirm quorum and in-person attendance a week before each meeting @recurring(quarterly)"
            - name: Minutes and resolutions register
              description: |-
                ## Purpose
                If a beneficiary ever challenges a decision, the minutes are the evidence that the board considered the right things and acted for the beneficiaries rather than for whoever was loudest. A register that holds every minute and written resolution, signed and indexed, is cheap to keep monthly and very hard to rebuild years later.

                ## Milestones
                1. A register created with date, meeting type, decisions and signatories for each entry.
                2. Past minutes from the first board meeting onward entered and indexed.
                3. Written resolutions between meetings captured with the same detail.
                4. Every entry signed by the chair within a month of the meeting.

                ## Notes
                Start from the **Meeting notes** template for draft minutes, then file the signed version in the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every board meeting and written resolution in the register, signed and indexed, with no entry more than a month behind."
                cadence: rolling
              tasks:
                - "Create the register with columns for date, type, decisions and signatories"
                - "Enter every set of minutes since the PTC was formed"
                - "File signed minutes and resolutions in the register @recurring(monthly:12)"
                - "Chase the chair for any minutes still unsigned after a month"
            - name: Distribution request handling process
              description: |-
                ## Purpose
                Requests from beneficiaries arrive informally, over dinner or by text to a family director, and handling them informally is where PTCs get into trouble. A written process for receiving, recording, considering and answering each request, with reasons noted against the letter of wishes, protects the beneficiary relationship and the directors alike.

                ## Milestones
                1. A single channel agreed for distribution requests, such as a form sent to the administrator.
                2. A request log showing date, beneficiary, trust, amount, purpose and status.
                3. A checklist for the board: trust powers, letter of wishes, tax effects and fairness across beneficiaries.
                4. Every decision answered in writing with the reasons kept on file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every distribution request in a year logged, considered against a written checklist and answered in writing, with none open over 90 days."
                cadence: rolling
              tasks:
                - "Draft a one-page distribution request form for beneficiaries"
                - "Set up a request log with the administrator"
                - "Write the checklist directors use when considering a request"
                - "Review open distribution requests and their status @recurring(monthly:20)"
            - name: Trust investment review by the PTC board
              description: |-
                ## Purpose
                As trustee the PTC carries the duty to oversee how each trust is invested, even where outside managers do the work. A quarterly review of each trust's report against its investment policy, with questions recorded, is what shows the board exercising that duty rather than assuming the managers have it covered.

                ## Milestones
                1. An investment policy or mandate on file for each trust.
                2. A one-page quarterly summary per trust: value, allocation, performance against the agreed benchmark and liquidity.
                3. Board questions to managers recorded and their answers filed.
                4. Any breach of a mandate raised and resolved in the minutes.

                ## Notes
                The board is reviewing whether managers follow the trust's policy, not picking investments. Specific investment choices belong with the regulated managers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each trust's investments reviewed at four board meetings a year against its policy, with questions and answers recorded."
                cadence: rolling
              tasks:
                - "Confirm an investment policy exists for every trust the PTC holds"
                - "Agree a one-page quarterly summary format with each manager"
                - "Review each trust's quarterly report against its policy @recurring(quarterly)"
                - "Record questions to managers and their answers in the board pack"
            - name: Annual regulatory and corporate filings calendar
              description: |-
                ## Purpose
                Deadlines arrive all year for a PTC: the annual return, licence or exemption fees, beneficial ownership updates, economic substance or similar declarations where they apply, and any tax filings. Missing one can bring penalties or threaten the exemption itself. A single calendar owned by the administrator and checked monthly by a director keeps them visible.

                ## Milestones
                1. Every recurring filing listed with its due date, owner and the authority it goes to.
                2. The calendar shared between the administrator and one named director.
                3. A confirmation filed for each completed filing.
                4. No filing missed or late in a full year.

                ## Notes
                Start from the **Compliance control** template. Tax information reporting for the trusts has its own process; note the dates here but keep the classification work with the tax reporting adviser.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A filings calendar with owners for every recurring PTC filing, and a full year with no missed or late filing."
                cadence: cyclic
              tasks:
                - "Ask the administrator for every recurring PTC filing and its due date"
                - "Name the director who checks the calendar each month"
                - "Check the filings calendar for the next 60 days @recurring(monthly:3)"
                - "Confirm the annual return and government fees are paid @recurring(yearly)"
            - name: AML and beneficial ownership records refresh
              description: |-
                ## Purpose
                Administrators, banks and registries all need up-to-date identity and beneficial ownership information on the PTC, its directors, the owning vehicle and the trusts' beneficiaries. Stale records cause frozen accounts and awkward questions at exactly the wrong moment. A yearly refresh, run by the administrator with the family's help, keeps everything current.

                ## Milestones
                1. A list of everyone whose identity documents the administrator and banks hold.
                2. Expiry dates for passports and proof of address recorded.
                3. The beneficial ownership register checked against the current structure.
                4. Updated documents supplied before any bank asks for them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Identity and beneficial ownership records for every relevant person refreshed within the last twelve months, with no bank request outstanding."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Ask the administrator which people's identity documents it holds"
                - "Record passport and address proof expiry dates in one list"
                - "Refresh identity documents for directors and beneficial owners @recurring(yearly)"
                - "Check the beneficial ownership register matches the current structure"
            - name: PTC risk register
              description: |-
                ## Purpose
                Risks to a PTC are specific: a family director acting on one person's say-so, a lapsed exemption condition, the death of the only director who understands the business, an administrator failing. Writing them down with a likelihood, impact, owner and next action, and reviewing them quarterly, turns vague worry into a list the board can work through.

                ## Milestones
                1. At least ten risks recorded with likelihood, impact and an owner.
                2. A mitigation or next action agreed for every risk rated high.
                3. The register reviewed at each quarterly board meeting.
                4. Closed risks kept with the reason they were closed.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register of at least ten PTC risks, each with an owner, reviewed at every quarterly board meeting."
                cadence: rolling
              tasks:
                - "Brainstorm ten risks to the PTC with the chair and administrator"
                - "Rate each risk for likelihood and impact and name an owner"
                - "Review the risk register at the board meeting @recurring(quarterly)"
                - "Agree a next action for every risk rated high"
            - name: PTC accounts, budget and fee tracking
              description: |-
                ## Purpose
                Separate from the trusts it holds, a PTC keeps its own accounts and its own budget for administrator, directors, insurance and advisers. Watching spend monthly against the budget, and signing off annual statements, keeps the PTC's costs transparent to every branch that ultimately pays for them.

                ## Milestones
                1. An annual budget approved by the board with each cost line.
                2. Monthly actuals compared with the budget and variances explained.
                3. Annual financial statements prepared and, where required, audited.
                4. The way PTC costs are charged to each trust written down and applied consistently.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A board-approved PTC budget, monthly variance notes for the year and signed annual financial statements."
                cadence: cyclic
              tasks:
                - "Draft the PTC's annual budget line by line"
                - "Agree how PTC costs are charged across the trusts"
                - "Compare PTC spend against budget and note any variance @recurring(monthly:26)"
                - "Sign off the PTC's annual financial statements @recurring(yearly)"
            - name: Trust record-keeping and document retention
              description: |-
                ## Purpose
                Every trustee must be able to produce the trust deed, every variation, every decision and the accounts for each trust, sometimes decades later. A PTC that files papers in directors' inboxes cannot. A document vault with a set structure, retention rules and a monthly check that new papers have been filed is the trustee's long memory.

                ## Milestones
                1. A vault structure agreed: one folder set per trust plus one for the PTC itself.
                2. All deeds, variations, letters of wishes and past accounts scanned and filed.
                3. A retention rule written for each document type.
                4. Access rights set so each person sees only what their role needs.

                ## Notes
                Letters of wishes are often confidential to the trustee. Check who should be able to read them before setting access rights.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trust's core documents in a structured vault with retention rules and role-based access, checked monthly for new papers."
                cadence: rolling
              tasks:
                - "Set up the vault folder structure for each trust and the PTC"
                - "Scan and file every deed, variation and letter of wishes"
                - "Write a retention rule for each document type"
                - "Check that new trust documents are filed in the vault @recurring(monthly:8)"
            - name: Beneficiary communication from the PTC
              description: |-
                ## Purpose
                Beneficiaries who hear nothing from their trustee fill the silence with suspicion, especially when they know a relative sits on the board. A yearly letter from the PTC, agreed with the lawyer, explaining what the trustee does and how to raise a request, keeps beneficiaries informed without disclosing more than the trust allows.

                ## Milestones
                1. The lawyer's view recorded on what each class of beneficiary is entitled to know.
                2. A standard annual letter drafted for adult beneficiaries.
                3. A contact point named for questions and requests.
                4. Letters sent and a record kept of who received them.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "An annual letter sent to every adult beneficiary in a year, approved by the board and the lawyer, with a record of recipients."
                cadence: cyclic
              tasks:
                - "Ask the lawyer what each class of beneficiary is entitled to see"
                - "Draft a short annual letter explaining the trustee's role and contact point"
                - "Send the annual letter to every adult beneficiary @recurring(yearly)"
                - "Record who received the letter and any replies"
            - name: Annual PTC board effectiveness review
              description: |-
                ## Purpose
                Boards drift: the founder dominates, the independent director goes quiet, packs get thinner. A short annual review, with each director answering the same questions anonymously and the independent director leading the discussion, gives the board a chance to fix itself before someone outside forces it to.

                ## Milestones
                1. A questionnaire of ten to fifteen questions on preparation, debate, independence and skills.
                2. Every director's response collected anonymously through the administrator.
                3. Results discussed at a board meeting led by the independent director.
                4. Two or three changes agreed and checked at the next review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed annual board review with responses from every director and at least two agreed changes recorded in the minutes."
                cadence: cyclic
              tasks:
                - "Draft ten to fifteen board review questions with the independent director"
                - "Ask the administrator to collect responses anonymously"
                - "Send the board effectiveness questionnaire to every director @recurring(yearly)"
                - "Record agreed changes in the minutes and check them next year"
            - name: Trustee duties primer for family directors
              description: |-
                ## Purpose
                Family members who join a PTC board often assume their job is to represent their branch, when the law requires them to act for all the beneficiaries of each trust. A short course of reading and a session with the trust lawyer on duties of loyalty, prudence, impartiality and acting within the deed gives them the frame for every later decision.

                ## Milestones
                1. A reading list on trustee duties agreed with the lawyer.
                2. A session held with the lawyer covering loyalty, prudence, impartiality and acting within powers.
                3. Each family director able to explain the duties in their own words.
                4. Notes from the session added to the induction pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every family director has attended a trustee duties session with the lawyer and its notes sit in the induction pack."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the lawyer for a short reading list on trustee duties"
                - "Book a two-hour session on duties for all family directors"
                - "Write a half-page summary of the duties in plain language"
                - "Add the session notes to the director induction pack"
            - name: Reading the trust deeds the PTC holds
              description: |-
                ## Purpose
                Each trust deed sets out its own powers, beneficiaries, consents and restrictions, and a decision outside those powers can be void. Directors who have read each deed, with the lawyer pointing out the clauses that matter, make faster and safer decisions than those who rely on a summary from memory.

                ## Milestones
                1. Each director has read every deed the PTC holds.
                2. A one-page key clauses note per trust: powers, beneficiaries, consents, restrictions and duration.
                3. Questions on unclear clauses answered by the lawyer in writing.
                4. The key clauses notes added to each trust's folder in the vault.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A key clauses note for every trust the PTC holds, read by all directors and checked by the lawyer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a key clauses note for one trust deed"
                - "Check the draft against the deed and correct it"
                - "Send unclear clauses to the lawyer for a written answer"
                - "Repeat for each remaining trust and file the notes"
            - name: Sham and alter-ego risk briefing
              description: |-
                ## Purpose
                Courts in several countries have looked through trusts where the settlor kept so much control that the trustee was only a puppet, and a PTC run by the settlor's family invites that question. Understanding the warning signs, such as decisions taken before meetings or directors following instructions, helps the board behave in a way that keeps the trusts sound.

                ## Milestones
                1. A briefing from the lawyer on how courts have treated trusts where control stayed with the settlor.
                2. The warning signs listed in plain language for the board.
                3. Current board practice checked against the warning signs.
                4. Any practice that looks risky changed and recorded in the minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of sham and alter-ego warning signs, checked against board practice, with any changes minuted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the lawyer for a briefing on sham and alter-ego cases"
                - "List the warning signs that could apply to this board"
                - "Compare the last four sets of minutes against the warning signs"
                - "Agree changes to practice at the next board meeting"
            - name: PTC dispute case studies
              description: |-
                ## Purpose
                Published court cases and practitioner articles about trustee companies that ended up in court are the cheapest way to see where PTCs fail: deadlocked boards, conflicted distributions, missing minutes, founders who would not let go. Reading a handful together and discussing what would have happened on this board turns other families' expensive lessons into free ones.

                ## Milestones
                1. Five cases or articles chosen with the lawyer's help.
                2. Each read by every director before a discussion session.
                3. A discussion held on how this board would have handled each.
                4. One or two changes to policy or practice agreed from the discussion.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five dispute cases read and discussed by the board, with at least one resulting policy or practice change minuted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the lawyer for five readable cases or articles on PTC disputes"
                - "Add the readings to a shared queue with a target date"
                - "Hold a discussion on how this board would have acted"
                - "Record any agreed change in the next minutes"
            - name: Writing minutes that show independent judgement
              description: |-
                ## Purpose
                Minutes that read "approved" against every item suggest a board that did not think. Minutes that record what was considered, which options were weighed and why one was chosen are what a court looks for. Learning to write them that way, whether it is the secretary or a director drafting, is a small skill with a large effect.

                ## Milestones
                1. Examples of good and poor trustee minutes collected from the lawyer or administrator.
                2. A minute style guide written: considerations, options, reasons, conflicts and abstentions.
                3. The next two sets of minutes drafted to the guide and reviewed by the lawyer.
                4. The guide added to the induction pack.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A minute style guide in use, with two sets of minutes drafted to it and reviewed by the lawyer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the administrator for examples of strong trustee minutes"
                - "Write a one-page minute style guide for the board"
                - "Draft the next minutes to the guide and send them for review"
                - "Add the style guide to the induction pack"
            - name: Inspection readiness for the PTC
              description: |-
                ## Purpose
                Regulators and licensed registered office providers can inspect a PTC's records, policies and decisions, often with little notice. A rehearsal, in which the administrator asks for what an inspector would ask for, shows what is missing while there is still time to fix it calmly.

                ## Milestones
                1. A list of the documents an inspection would request, from the administrator.
                2. Each document located and its location noted.
                3. Gaps fixed or a plan agreed to fix them within 60 days.
                4. A short readiness note filed with the board papers.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed mock inspection with every requested document located or a dated fix agreed, noted in the board papers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the administrator for a typical inspection request list"
                - "Locate each document and note where it is kept"
                - "Fix the gaps or set a date for each fix"
                - "File a one-page readiness note with the board papers"
            - name: First-year review of the PTC with the family
              description: |-
                ## Purpose
                A year after the trusts move across, the family deserves an honest look at whether the PTC is doing what it was set up to do. A review against the original goals, the cost model and the board's own assessment, presented at a family meeting, either confirms the decision or surfaces fixes while habits are still forming.

                ## Milestones
                1. Each original goal scored with evidence from the first year.
                2. Actual costs compared with the cost model.
                3. Views gathered from directors, the administrator and a sample of beneficiaries.
                4. A presentation given to the family with agreed changes.
              priority: medium
              deadlineOffsetDays: 400
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first-year review presented at a family meeting, scoring each original goal and comparing costs with the model."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull out the original goals and cost model from the first projects"
                - "Collect views from directors, the administrator and some beneficiaries"
                - "Score each goal and compare costs with the model"
                - "Present the review at a family meeting and minute the changes"
            - name: PTC continuity if the founder dies or loses capacity
              description: |-
                ## Purpose
                Many PTCs are built around a founder who chairs the board, knows the assets and settles disputes by authority. If that person dies or loses capacity without a plan, the board can deadlock, the owning vehicle may lack anyone to appoint directors, and banks may freeze accounts. A continuity plan written while the founder is well is the kindest thing a retiring settlor can leave.

                ## Milestones
                1. The founder's roles listed: director, chair, enforcer, protector and any personal signing powers.
                2. A successor or process named for each role, in line with the articles and deeds.
                3. A capacity protocol agreed for when the founder's ability to decide is in doubt, with medical input.
                4. The plan written down, signed and held by the lawyer and the administrator.

                ## Notes
                Lasting powers of attorney or their equivalent usually do not reach roles held as trustee or director. Ask the lawyer how each role passes.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed continuity plan naming a successor or process for every role the founder holds, including a capacity protocol, held by lawyer and administrator."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every role the founder holds in the PTC and its owning vehicle"
                - "Ask the lawyer how each role passes on death or loss of capacity"
                - "Agree a successor or appointment process for each role"
                - "Sign the continuity plan and lodge copies with the lawyer and administrator"
            - name: Preparing adult children to serve on the PTC board
              description: |-
                ## Purpose
                Parents often want their children on the board eventually but put them there too early or too late. A staged route, from observer seat to committee work to full director, with a mentor and outside experience, means a child arrives on the board able to act for all beneficiaries, including their siblings and cousins.

                ## Milestones
                1. Criteria agreed for a family member to become a director, such as age, outside experience and completed training.
                2. Each interested adult child given an observer seat for at least a year.
                3. A mentor, ideally the independent director, assigned to each observer.
                4. A review with each observer on readiness, recorded and shared with them.

                ## Notes
                Observers see confidential trust information. Have them sign a confidentiality undertaking first and keep them out of items about their own distributions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Written criteria for family directors and at least one adult child completing a year as an observer with a mentor and a recorded readiness review."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft criteria a family member must meet to join the board"
                - "Ask each interested adult child to sign a confidentiality undertaking"
                - "Pair each observer with a mentor from the board"
                - "Invite a rising-generation observer to a board meeting @recurring(yearly)"
            - name: Stepping back from the PTC board in retirement
              description: |-
                ## Purpose
                Founders and senior directors who stay on the board well past the point of active contribution can block the next generation and weaken the board's independence. Planning a graceful step back, perhaps to an honorary or advisory role with no vote, lets a retiree keep a voice in the family without holding a trustee's duties they no longer want.

                ## Milestones
                1. A target date for stepping down agreed with the chair.
                2. A successor chosen through the board's normal process.
                3. An advisory role defined, if wanted, with clear limits and no vote.
                4. A handover of knowledge about the assets and the family recorded in writing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded step-down date, an appointed successor and a written knowledge handover from the retiring director."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Talk with the chair about a realistic step-down date"
                - "Write down what you know about each trust's assets that others do not"
                - "Agree whether an advisory role is wanted and its limits"
                - "Hand the knowledge notes to your successor at a handover meeting"
            - name: PTC through a divorce or branch dispute
              description: |-
                ## Purpose
                Divorce of a family director, or a fallout between two branches, can turn board meetings into proxy battles and draw the PTC into litigation. Agreeing in advance how the board will behave, who steps out of which decisions and when the independent director takes the lead protects the trusts and lowers the temperature.

                ## Milestones
                1. Scenarios written: a director's divorce, a branch demanding a split, a beneficiary threatening a claim.
                2. For each, who recuses, who leads and which advisers are called.
                3. A rule on communications to beneficiaries during a dispute.
                4. The protocol approved by the board and filed with the conflicts policy.

                ## Notes
                Expect requests for trust information from a spouse's lawyers in a divorce. The PTC should answer only on the lawyer's advice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved dispute protocol covering at least three scenarios, naming who recuses and who leads in each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write three dispute scenarios the PTC could face"
                - "Name who steps out and who leads in each scenario"
                - "Agree a rule for beneficiary communications during a dispute"
                - "Put the protocol to the board for approval"
            - name: When a PTC director moves country
              description: |-
                ## Purpose
                Moving country as a director can change where the PTC is treated as managed, bring new reporting duties, and sometimes put the director in breach of local rules on acting for an offshore company. Checking the effect before the move, rather than after, gives the board time to adjust meeting arrangements or appoint someone else.

                ## Milestones
                1. The move flagged to the board and the tax advisers before it happens.
                2. Advice recorded on the effect on the PTC's residence and the director's own position.
                3. Meeting and signing arrangements adjusted if needed.
                4. A decision recorded on whether the director stays, moves to observer or steps down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Tax advice on a director's move obtained before the move, with a recorded board decision on the director's continuing role."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tell the chair and the tax advisers about the planned move"
                - "Ask for written advice on the effect on the PTC and the director"
                - "Adjust meeting and signing arrangements if the advice says so"
                - "Record the board's decision on the director's role"
            - name: Branch committees within the PTC
              description: |-
                ## Purpose
                As a family grows to several branches with separate trusts, a single board can struggle to know each branch's beneficiaries and assets well. Some PTCs set up committees for each branch, with delegated powers and a branch member alongside an independent director. Designing this carefully keeps the board's overall responsibility clear while bringing decisions closer to each branch.

                ## Milestones
                1. The case for committees set out: number of trusts, branch differences and board workload.
                2. The lawyer's view on what the articles and deeds allow the board to delegate.
                3. Committee terms of reference drafted with membership, powers and reporting back.
                4. A decision recorded to proceed, pilot one committee or keep a single board.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on branch committees, with draft terms of reference and the lawyer's view on delegation attached."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count the trusts and beneficiaries in each branch"
                - "Ask the lawyer what the board may delegate to a committee"
                - "Draft terms of reference for one branch committee"
                - "Put the proceed, pilot or keep decision to the board"
            - name: Contentious distribution tabletop exercise
              description: |-
                ## Purpose
                Boards learn more from rehearsing a hard decision than from reading policies. A tabletop exercise built on a realistic but fictional request, such as a large distribution to a director's child that would disadvantage cousins, tests the conflicts policy, the decision matrix and the minutes in two hours, with no real money at stake.

                ## Milestones
                1. A fictional scenario written with enough detail to argue both ways.
                2. The exercise run with all directors and the lawyer observing.
                3. Draft minutes written as if the decision were real.
                4. Gaps in policy or practice listed and assigned to owners.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-hour tabletop exercise held with all directors, producing practice minutes and a list of gaps with owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a fictional distribution scenario that splits the board"
                - "Book two hours with all directors and the lawyer as observer"
                - "Draft practice minutes as if the decision were real"
                - "Assign an owner to each gap the exercise exposed"
            - name: Independent governance audit of the PTC
              description: |-
                ## Purpose
                After two or three years, an outside review by a trust practitioner who has no role in the structure can see what the family and its advisers have stopped noticing: a weak deadlock clause, a drifting exemption condition, minutes that do not show reasons. Commissioning one is a sign of a confident board and gives the next generation assurance that the structure is sound.

                ## Milestones
                1. A reviewer chosen with no existing role in the PTC or its trusts.
                2. A scope agreed: documents, minutes, policies, regulatory conditions and records.
                3. The reviewer's written report received and discussed by the board.
                4. A remediation list agreed with owners and dates.

                ## Notes
                Ask for the report to rank findings by seriousness, so the board fixes the important things first.
              priority: medium
              deadlineOffsetDays: 540
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An independent written governance review of the PTC received, discussed at a board meeting and turned into a dated remediation list."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the lawyer for names of independent trust governance reviewers"
                - "Agree the scope of the review in writing"
                - "Give the reviewer access to minutes, policies and the vault"
                - "Turn the findings into a remediation list with owners and dates"
            - name: Winding up, merging or redomiciling the PTC
              description: |-
                ## Purpose
                Circumstances change: trusts end, the family shrinks or spreads, a jurisdiction becomes costly or its reputation slips. Knowing in advance what it would take to move the trusts back to a professional trustee, merge with another family structure or move the PTC elsewhere means the family can act deliberately if the day comes.

                ## Milestones
                1. The triggers that would prompt a review listed, such as cost, trusts ending or regime changes.
                2. The lawyer's outline of the steps and rough costs for winding up, merging and redomiciling.
                3. The outline filed with the board papers and reviewed every few years.
                4. A recorded board view on whether any trigger has been met.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lawyer's outline of exit options with costs and triggers on file, and a recorded board view on whether any trigger applies."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the events that would make the family rethink the PTC"
                - "Ask the lawyer for an outline of exit routes and rough costs"
                - "File the outline with the board papers"
                - "Ask the board to record whether any trigger has been met"
---

# Private Trust Company

A private trust company, usually called a PTC, is a company the family sets up to act as trustee of its own trusts, so that decisions sit with a board the family helps shape rather than with an outside trust firm. This area walks through it in order: the foundations of deciding whether a PTC fits at all, then the ownership, constitutional documents, licensing route and adviser team; the board, its conflicts policy and the family's decision rights; the move of existing trusts across; the operating cycle of board meetings, minutes, distributions, filings, records and reviews; the knowledge every family director needs; and finally the life stages and specialist work, from a founder losing capacity to a governance audit or a wind-up.

What repeats is a quarterly board meeting with a board pack and investment review, a quarterly look at the risk register, monthly checks on the filings calendar, minutes, open distribution requests, records and spend, and a yearly round of conflicts declarations, KYC refreshes, insurance renewal, financial statements, a beneficiary letter and a board effectiveness review. The Vendor, Purchase decision, Board meeting, Meeting notes, Compliance control, Risk register and Reading queue templates pair with the adviser team, the administration choice, the board cycle, the minutes, the filings calendar, the risk register and the dispute case studies. Nothing here is legal, tax or regulatory advice: every structure, licence question and decision should be agreed with a trust lawyer in the PTC's jurisdiction and tax advisers in each country where the family lives. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
