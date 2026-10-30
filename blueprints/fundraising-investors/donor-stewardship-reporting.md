---
id: fundraising-investors.donor-stewardship-reporting
name: Donor Stewardship & Reporting
description: "A stewardship system for nonprofits: prompt thanks, tiered touches through the year, honest impact reports and the retention numbers that show whether donors give again."
category: business
version: 1.0.0
tags: [fundraising-investors, donor-stewardship-reporting, nonprofit, team, donor-retention, impact-reporting, gift-acknowledgement]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - compliance-control
    - metrics-log
    - person
    - content-pipeline
    - purchase-decision
    - feedback-themes
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Donor Stewardship & Reporting
          description: "Thanking, updating and reporting impact to donors and funders so they give again and deepen their support."
          projects:
            - name: Stewardship audit of last year's gifts
              description: |-
                ## Purpose
                Most organisations believe they thank donors well until they check the dates. Pulling every gift from the last twelve months and recording how long the thank-you took, who signed it and whether the donor later heard what their money achieved gives a factual starting point for every other project in this area.

                ## Milestones
                1. A list of every gift received in the last twelve months, with gift date and acknowledgement date side by side.
                2. Average and longest acknowledgement times calculated, split by gift size.
                3. The share of donors who received at least one impact update after their gift recorded.
                4. Three to five gaps written up as the stewardship priorities for the year.

                ## Notes
                Sample if the volume is large: fifty gifts spread across sizes and channels is usually enough to see the pattern.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written audit of the last twelve months showing average acknowledgement time, the share of donors updated on impact and the top three gaps."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export every gift from the last twelve months with its acknowledgement date"
                - "Calculate the average and longest days from gift to thank-you"
                - "Count how many donors received an impact update after giving"
                - "Write the three biggest stewardship gaps on one page"
            - name: Donor retention baseline by segment
              description: |-
                ## Purpose
                Retention is the clearest single sign that stewardship is working, and the overall figure hides the story: first-time donors often return at well under half the rate of repeat donors. Calculating retention separately for first-time, repeat, regular and larger donors shows where the leaks are before any money is spent fixing them.

                ## Milestones
                1. A written definition of a retained donor, agreed with whoever runs the database.
                2. Overall donor retention for the last two years calculated the same way.
                3. Separate rates for first-time, repeat, regular and top-tier donors.
                4. The baseline figures saved where the monthly dashboard can compare against them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Retention rates for the last two years, overall and for four segments, calculated with one written definition and saved as the baseline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree in writing what counts as a retained donor"
                - "Export donors who gave in each of the last three years"
                - "Calculate retention for first-time, repeat, regular and top-tier donors"
                - "Save the baseline figures alongside the definition used"
            - name: Gift acknowledgement standard and turnaround target
              description: |-
                ## Purpose
                A thank-you that arrives three weeks late reads as an afterthought, and an inconsistent one tells the donor nobody is in charge. A one-page standard setting the turnaround target, the channel for each gift size, who signs and what every thank-you must include lets anyone on the team acknowledge a gift correctly on a busy day.

                ## Milestones
                1. A turnaround target agreed, such as forty-eight hours for every gift and one week for a personal call above a set amount.
                2. A signing rule by gift level, naming who signs letters and who calls.
                3. A short list of what every acknowledgement must contain: amount, purpose, the difference it makes and a named contact.
                4. The standard written as a checklist and shared with everyone who processes gifts.

                ## Notes
                Start from the **Operational checklist** template. Set thresholds in your own currency and revisit them once you know your gift distribution.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page acknowledgement standard with a turnaround target, signing rules by gift level and required contents, shared with every gift processor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how gifts are acknowledged today and by whom"
                - "Set the turnaround target and the gift level that earns a personal call"
                - "List the four things every thank-you must contain"
                - "Share the standard with everyone who processes gifts"
            - name: Stewardship tiers by gift level
              description: |-
                ## Purpose
                Treating every donor the same means either overspending on small gifts or underserving the people who give the most. Three or four tiers, each with a clear set of touches across the year, let a small team decide quickly what each donor receives and protect time for the relationships that matter most to income.

                ## Milestones
                1. The gift distribution for the last year charted to find natural break points.
                2. Three or four tiers defined by annual or cumulative giving.
                3. A written menu of touches for each tier: thank-you, updates, calls, events and reports.
                4. Every current donor assigned to a tier in the database.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three or four stewardship tiers defined with break points and a touch menu for each, and every current donor coded to a tier."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Chart last year's gifts by size to find natural break points"
                - "Define three or four tiers and their thresholds"
                - "Write the menu of stewardship touches each tier receives"
                - "Code every current donor to a tier in the database"
            - name: Twelve-month stewardship calendar
              description: |-
                ## Purpose
                Without a calendar, stewardship happens when someone remembers, which usually means just before the next appeal. Mapping every planned touch across the year, by tier, with an owner and a channel, shows the gaps where donors hear nothing and the crowded months where they hear too much.

                ## Milestones
                1. Every planned touch for the year laid out month by month, by tier.
                2. Appeals placed on the same calendar so thanks and updates sit between asks.
                3. An owner named for each touch.
                4. No tier left more than three months without a non-asking contact.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month calendar showing each tier's touches, appeals and owners, with no tier going more than three months without a non-asking contact."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every planned donor communication for the next twelve months"
                - "Place appeals and stewardship touches on one shared calendar"
                - "Name an owner for every touch on the calendar"
                - "Review next month's stewardship touches with their owners @recurring(monthly:24)"
            - name: Donor record clean-up before the next mailing
              description: |-
                ## Purpose
                Misspelt names, a thank-you sent to someone who died last spring, or two letters to the same household undo goodwill faster than any appeal builds it. A clean-up of duplicates, addresses, salutations and deceased flags makes every later stewardship mailing safe to send.

                ## Milestones
                1. Duplicate records merged, with giving history kept on the surviving record.
                2. Deceased and gone-away flags updated from returned mail and family notifications.
                3. Preferred names and salutations checked by hand for the top two tiers.
                4. A short data entry rule sheet written so new records arrive clean.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Duplicates merged, deceased and gone-away flags updated and salutations hand-checked for the top two tiers, with a data entry rule sheet in use."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Run a duplicate report on names, emails and postcodes"
                - "Update deceased and gone-away flags from returned mail"
                - "Hand-check salutations for the top two donor tiers"
                - "Write a one-page data entry rule sheet for new records"
                - "Run the duplicate and deceased checks again @recurring(quarterly)"
            - name: Consent and communication preferences register
              description: |-
                ## Purpose
                Data protection rules in many countries decide whether you may email, phone or write to a donor, and donors notice when a stated preference is ignored. A register of consent, preferred channel, frequency, anonymity requests and opt-outs, checked before every send, keeps stewardship lawful and respectful.

                ## Milestones
                1. The consent basis for email, phone and post recorded for every active donor.
                2. Preferred channel, frequency and anonymity requests captured in set fields.
                3. A suppression check built into every mailing and call list.
                4. The approach reviewed with someone who knows your country's data protection rules.

                ## Notes
                Start from the **Compliance control** template. This organises your records; the rules themselves vary by country, so confirm them with a data protection adviser.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active donor record holds a consent basis and channel preference, and every mailing list in the last quarter was checked against the suppression list."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the fields where consent and preferences are stored today"
                - "Add set fields for channel, frequency and anonymity requests"
                - "Add a suppression check step to the mailing and call list process"
                - "Audit consent records against the current rules @recurring(yearly)"
            - name: Gift receipting process that meets tax rules
              description: |-
                ## Purpose
                In many countries a donor can only claim tax relief, or the charity can only reclaim tax, if the receipt or declaration carries specific wording and details. Writing down your tax authority's requirements and building them into one receipting process avoids reissuing receipts in a rush at year end.

                ## Milestones
                1. Your tax authority's receipt or declaration requirements written down, for example Gift Aid declarations in the UK.
                2. A receipt template carrying every required detail.
                3. A rule for when receipts are issued: per gift, or as an annual statement.
                4. The process checked by your accountant or auditor.

                ## Notes
                Keep the receipt separate from the thank-you where you can: the receipt is a record, the thank-you is a relationship.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A receipt template and written receipting rule that your accountant has confirmed meets your tax authority's requirements."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find your tax authority's published rules for donation receipts"
                - "Compare your current receipt against every required detail"
                - "Update the receipt template and write the issuing rule"
                - "Ask your accountant or auditor to confirm the process"
            - name: Thank-you letter and email library
              description: |-
                ## Purpose
                Writing every thank-you from scratch is slow, and copying last year's letter means loyal donors receive the same words twice. A library of tested openings and paragraphs for first gifts, regular gifts, in-memory gifts, larger gifts and appeal responses lets the team personalise quickly without sounding like a form letter.

                ## Milestones
                1. Thank-you versions written for at least six gift situations.
                2. Each version leading with the donor and the difference made, not the organisation.
                3. Variable fields marked for amount, purpose and a named contact.
                4. A fresh impact paragraph swapped in each quarter so no donor gets the same letter twice in a year.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library of at least six thank-you versions by gift situation, each refreshed within the last six months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect every thank-you letter and email used in the last year"
                - "Write versions for first, regular, in-memory, large and appeal gifts"
                - "Mark the fields that must be personalised in each version"
                - "Swap in a fresh impact paragraph before each new quarter"
            - name: Restricted gift register and spend tracking
              description: |-
                ## Purpose
                When a donor gives for a specific purpose, the organisation is accountable for spending it that way, and a report that cannot say where the money went damages trust and may breach the terms of the gift. A register of every restricted gift, its purpose, amount, any deadline and the spend against it gives finance and fundraising one shared answer.

                ## Milestones
                1. Every open restricted gift listed with donor, purpose, amount and any time limit.
                2. Spend against each gift reconciled with the finance team.
                3. Gifts at risk of not being spent as agreed flagged early.
                4. The register used as the source for every restricted gift report.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of all open restricted gifts reconciled with finance each month, with at-risk gifts flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every open restricted gift with its purpose and conditions"
                - "Agree with finance how spend will be coded to each gift"
                - "Flag any gift unlikely to be spent as the donor intended"
                - "Update spend against each restricted gift with finance @recurring(monthly:10)"
            - name: Forty-eight hour gift thank-you routine
              description: |-
                ## Purpose
                Speed of thanks is one of the few stewardship habits consistently linked to donors giving again, and it fails in busy weeks unless processing is fixed in the diary. Three set processing sessions a week, with a backlog count at the end of the week, keep every gift inside the turnaround target.

                ## Milestones
                1. Three fixed processing sessions in the team diary each week.
                2. Every gift entered, receipted and thanked inside the target.
                3. A Friday backlog count recorded each week.
                4. Eight consecutive weeks with no gift older than the target left unthanked.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks in which every gift was thanked within the turnaround target, with a backlog count logged each Friday."
                cadence: rolling
              tasks:
                - "Book three gift processing sessions a week in the team diary"
                - "Enter, receipt and thank the gifts received since the last session @recurring(weekly:mon,wed,fri)"
                - "Count any gifts still unthanked on Friday and note why"
                - "Cover the processing sessions in the holiday rota"
            - name: Board member thank-you calls to new donors
              description: |-
                ## Purpose
                Board members who thank donors by phone, with no ask in the call, are remembered for years, and they come to see the organisation from the donor's side. A weekly list of new and upgraded donors, a three-line script and a simple way to log each call turns a good intention into a programme.

                ## Milestones
                1. Four or more board members signed up to make calls.
                2. A short script and voicemail message agreed.
                3. A weekly list sent to each caller with name, gift and one fact about the donor.
                4. Calls logged in the database with any message the donor gave.

                ## Notes
                Callers often worry they will be asked hard questions. Give them two lines on the latest results and a promise that staff will follow up anything else.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four board members calling new donors each week, with every call logged within a week of the gift."
                cadence: rolling
              tasks:
                - "Ask the chair for four board members willing to make calls"
                - "Write a three-line call script and voicemail message"
                - "Send each caller their list of new and upgraded donors @recurring(weekly:tue)"
                - "Log every call outcome in the donor record"
            - name: Monthly donor retention dashboard
              description: |-
                ## Purpose
                Looking at retention once a year means finding a problem twelve months after it started. A monthly dashboard tracking rolling retention, conversion of first gifts to second gifts, acknowledgement time and lapsed donors brought back shows drift while there is still time to act.

                ## Milestones
                1. Five measures chosen and defined in writing.
                2. A dashboard updated by the second week of each month.
                3. Each month's figures compared with the baseline and the same month last year.
                4. One action noted whenever a measure moves the wrong way two months running.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly dashboard updates in a row, each comparing five defined measures with the baseline."
                cadence: rolling
              tasks:
                - "Choose and define five retention measures for the dashboard"
                - "Update the retention dashboard from the database @recurring(monthly:8)"
                - "Note one action when a measure falls two months running"
            - name: Quarterly impact update to every donor
              description: |-
                ## Purpose
                Donors who only hear from you when you are asking learn to read every envelope as an appeal. A quarterly update with one story, one number and one thing that did not go to plan, with no ask attached, gives every donor a reason to open the next message.

                ## Milestones
                1. A one-page format agreed for print and email.
                2. Content gathered from programme staff three weeks before each send.
                3. Four updates sent in a year, each without a donation request.
                4. Opens and replies tracked to see which content lands.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four non-asking impact updates sent to all consenting donors in twelve months, with engagement recorded for each."
                cadence: cyclic
              tasks:
                - "Agree a one-page format for the impact update"
                - "Request a story and a number from programme leads three weeks before the send"
                - "Send the quarterly impact update to all consenting donors @recurring(quarterly)"
                - "Record opens, replies and any unsubscribes after each send"
            - name: Regular giver care and failed payment recovery
              description: |-
                ## Purpose
                Monthly donors are often the most valuable over time, yet many stop quietly after a failed payment or an expired card nobody followed up. A welcome call, an annual statement of what their giving achieved and a monthly failed payment routine protect income that would otherwise drain away unnoticed.

                ## Milestones
                1. Every new regular giver welcomed within two weeks of the first payment.
                2. Failed and cancelled payments reported from the payment provider each month.
                3. A friendly contact made within ten days of each failed payment.
                4. An annual summary sent to each regular giver showing their year's total and its effect.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every failed regular payment in a quarter followed up within ten days, with recovered and lost gifts counted."
                cadence: rolling
              tasks:
                - "Pull this month's failed and cancelled regular payments"
                - "Write a short, friendly message for donors whose payment failed"
                - "Contact regular givers whose payment failed this month @recurring(monthly:12)"
                - "Send each regular giver an annual summary of their giving"
            - name: Lapsed and at-risk donor watch list
              description: |-
                ## Purpose
                Donors rarely announce that they have stopped; they simply do not renew. Watching for donors who are past the anniversary of their last gift, and reaching them with a thank-you and update before any ask, recovers some who would otherwise be lost and tells you why others left.

                ## Milestones
                1. A written rule for when a donor counts as at risk and when as lapsed.
                2. A monthly list of donors crossing each line.
                3. A personal touch sent to every at-risk donor in the top two tiers.
                4. Reasons for leaving recorded whenever donors give them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly at-risk list produced for six months, with every top-two-tier donor on it contacted and the outcome recorded."
                cadence: rolling
              tasks:
                - "Write the rule for at-risk and lapsed donors"
                - "Pull donors who have passed the anniversary of their last gift @recurring(monthly:20)"
                - "Send a personal update to each at-risk donor in the top two tiers"
                - "Record any reason a donor gives for stopping"
            - name: Gift anniversary and giving milestone messages
              description: |-
                ## Purpose
                A note on the anniversary of a first gift, or when a donor reaches five or ten years of giving, costs almost nothing and is one of the few touches entirely about the donor. Pulling the dates a month ahead lets messages go out on time, signed by someone the donor knows.

                ## Milestones
                1. First gift dates and years-of-giving fields reliable in the database.
                2. A short message written for one-year, five-year and ten-year milestones.
                3. Each month's anniversaries pulled a month ahead.
                4. Messages sent on or near the date for at least ninety percent of the list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Anniversary messages sent within a week of the date for at least ninety percent of donors on each month's list for six months."
                cadence: rolling
              tasks:
                - "Check that first gift dates are filled in for active donors"
                - "Write anniversary messages for one, five and ten years of giving"
                - "Pull next month's gift anniversaries and queue the messages @recurring(monthly:3)"
            - name: Quarterly stewardship report to the board
              description: |-
                ## Purpose
                Boards tend to see income figures and little else, so stewardship looks like a cost rather than the thing that keeps income coming back. A one-page quarterly report on retention, thank-you times, donor feedback and the board's own thank-you calls makes the case and keeps trustees involved.

                ## Milestones
                1. A one-page format agreed with the chair or finance committee.
                2. Retention, acknowledgement time and lapsed recovery shown against the baseline.
                3. One donor quote or story included each quarter.
                4. The report presented at four consecutive board meetings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page stewardship report presented at four consecutive board meetings, each showing retention against the baseline."
                cadence: cyclic
              tasks:
                - "Agree the one-page stewardship report format with the chair"
                - "Prepare the stewardship section of the board pack @recurring(quarterly)"
                - "Include one donor quote or story in each report"
            - name: Pledge instalment tracking and thanks
              description: |-
                ## Purpose
                Multi-year pledges are only as good as the instalments that arrive, and donors who are thanked once at signing and then only invoiced start to feel like creditors. Tracking every instalment, sending a reminder ahead of each one and thanking each payment as it lands keeps pledges paid and donors warm.

                ## Milestones
                1. Every open pledge recorded with its schedule and amounts.
                2. A reminder sent ahead of each instalment in the donor's preferred channel.
                3. Each instalment thanked separately with a line on progress.
                4. Overdue instalments raised personally within a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pledge instalment due over six months reminded in advance and thanked on receipt, with overdue ones followed up within a month."
                cadence: rolling
              tasks:
                - "List every open pledge with its instalment schedule"
                - "Check pledge instalments due next month and any overdue @recurring(monthly:15)"
                - "Send a thank-you with a progress line for each instalment received"
                - "Call any donor whose instalment is a month overdue"
            - name: Individual stewardship plans for top donors
              description: |-
                ## Purpose
                The twenty or thirty people who give the most deserve a plan, not a mailing list: what they care about, who knows them, what they have been promised and when they will next hear from you. A one-page plan for each, reviewed monthly, stops promises slipping when the team is busy.

                ## Milestones
                1. A list of the top twenty to thirty donors by giving over three years.
                2. A one-page plan for each, with interests, relationship owner, commitments and planned touches.
                3. A monthly review of the plans and the last contact date for each donor.
                4. No top donor going more than ten weeks without a personal contact.

                ## Notes
                Start from the **Person** template, one record per donor. Keep personal details to what the donor would expect you to hold.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A current one-page plan for each top donor, with no top donor left more than ten weeks without a personal contact."
                cadence: rolling
              tasks:
                - "List the top thirty donors by giving over three years"
                - "Write a one-page plan for the first five donors on the list"
                - "Name a relationship owner for every top donor"
                - "Review each top donor plan and log the last contact @recurring(monthly:28)"
            - name: Impact story pipeline from programme staff
              description: |-
                ## Purpose
                Fundraisers can only report what they hear about, and programme staff are too busy to write stories unprompted. A light pipeline, one short story a month from each programme with a photo and consent noted, fills every thank-you, update and report with something fresh.

                ## Milestones
                1. A named story contact in each programme.
                2. A five-question story form that takes ten minutes to fill in.
                3. One story a month arriving from each programme with consent recorded.
                4. A bank of at least twelve stories tagged by programme and theme.

                ## Notes
                Start from the **Content pipeline** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Twelve consented impact stories collected in a year, tagged by programme and used in at least three donor communications."
                cadence: rolling
              tasks:
                - "Name a story contact in each programme"
                - "Write a five-question story form for programme staff"
                - "Collect one impact story from each programme @recurring(monthly:5)"
                - "Tag each story by programme, theme and consent status"
            - name: Writing thank-you letters donors read to the end
              description: |-
                ## Purpose
                Most thank-you letters open with the organisation's name, spend a paragraph on its history and close with a request, which tells the donor who matters in the relationship. Learning a donor-first structure, with the word 'you' early, one vivid result and a named person to contact, lifts every letter the team sends.

                ## Milestones
                1. Three strong thank-you letters collected and annotated.
                2. A donor-first structure written as five short rules.
                3. Your current letter rewritten to the rules and read aloud.
                4. Feedback gathered from two donors or volunteers on the old and new versions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The main thank-you letter rewritten to five written rules and compared with the old version by at least two readers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect three thank-you letters you received and liked"
                - "Note what each one does in its first two sentences"
                - "Rewrite your main thank-you letter to five donor-first rules"
                - "Ask two volunteers which version they would rather receive"
            - name: Telling beneficiary stories with consent and dignity
              description: |-
                ## Purpose
                Stories move donors, but a story told without consent, or one that makes people look helpless, can harm the very people the organisation serves. Learning how to ask for informed consent, how to let people tell their own story and which details to leave out protects them and builds donor trust in what you report.

                ## Milestones
                1. A consent form and process that explains where a story will appear and how to withdraw.
                2. Guidance written on language, images and identifying details.
                3. Two existing stories reviewed and revised against the guidance.
                4. Programme staff briefed on the consent process.

                ## Notes
                Take extra care with children, people at risk and anyone whose story could identify them in a small community.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written consent process and storytelling guidance used for every new story, with two existing stories revised against it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read one published ethical storytelling guide for charities"
                - "Draft a plain-language consent form with a withdrawal option"
                - "Write guidance on language, images and identifying details"
                - "Brief programme staff on the consent process"
            - name: Reporting outcomes, not just outputs
              description: |-
                ## Purpose
                Telling donors you ran 40 workshops says what you did; telling them how many participants found work afterwards says what changed. Learning the difference between outputs, outcomes and impact, and how to claim contribution honestly rather than full credit, makes every report both more convincing and more truthful.

                ## Milestones
                1. Outputs, outcomes and impact defined for one programme in a simple chain.
                2. The outcome data the programme already collects listed.
                3. One donor report paragraph rewritten to lead with outcomes.
                4. A sentence on what the organisation cannot claim credit for added where relevant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One programme's chain from outputs to outcomes written down and used to rewrite a donor report section, checked by the programme lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one programme and list what it delivers each year"
                - "Write the chain from activities to change for that programme"
                - "List the outcome data programme staff already collect"
                - "Rewrite one report paragraph to lead with outcomes"
            - name: Stewardship phone call practice
              description: |-
                ## Purpose
                Many fundraisers dread calling a donor just to say thank you, so the calls get postponed until they are no longer timely. Practising a short call structure with a colleague, including voicemail and the donor who wants to chat for twenty minutes, makes the calls quick and natural.

                ## Milestones
                1. A three-part call structure: thanks, one result, a question about the donor.
                2. Five practice calls done with a colleague taking the donor role.
                3. A thirty-second voicemail message rehearsed.
                4. Ten real thank-you calls made and logged within two weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten real thank-you calls made and logged within two weeks of finishing five practice calls."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a three-part thank-you call structure"
                - "Run five practice calls with a colleague playing the donor"
                - "Record and replay a thirty-second voicemail message"
                - "Make ten real thank-you calls and log each one"
            - name: Understanding retention, LYBUNT and SYBUNT reports
              description: |-
                ## Purpose
                Donor databases offer reports called LYBUNT (gave last year but unfortunately not this year) and SYBUNT (some year but unfortunately not this year), and most go unread because nobody was shown what they mean. Learning these and a handful of other measures, such as upgrade rate and second-gift conversion, lets the team spot problems without waiting for an analyst.

                ## Milestones
                1. Retention, LYBUNT, SYBUNT, upgrade rate and second-gift conversion defined in plain words.
                2. Each report run once on your own data.
                3. The figures explained to a colleague without notes.
                4. The two most useful reports added to the monthly dashboard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five stewardship measures run on your own data and the two most useful added to the monthly dashboard."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a plain definition of each of the five measures"
                - "Run the LYBUNT and SYBUNT reports in your database"
                - "Calculate second-gift conversion for last year's new donors"
                - "Explain the results to a colleague in ten minutes"
            - name: Asking a donor's permission to redirect a restricted gift
              description: |-
                ## Purpose
                Projects get cancelled, cost less than planned or cannot start on time, leaving restricted money that cannot be spent as the donor intended. Learning how to raise this early, offer clear options and record the donor's written agreement keeps the organisation accountable and often strengthens the relationship.

                ## Milestones
                1. The situations that need a donor's agreement listed with your finance lead.
                2. A letter or call outline offering two or three clear options.
                3. A record of each donor's decision kept with the restricted gift register.
                4. Legal or regulatory limits on changing restrictions checked with an adviser where needed.

                ## Notes
                Some restrictions cannot be varied by agreement alone. Where a gift is large or its terms are formal, take advice before contacting the donor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written process for proposing a change to a restricted gift, with an options letter and a set place to record donor consent."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List restricted gifts that may not be spent as intended"
                - "Draft an options letter for a donor whose project has changed"
                - "Agree with finance where the donor's decision will be recorded"
                - "Check with an adviser whether any gift needs formal approval to change"
            - name: Choosing a donor database with stewardship features
              description: |-
                ## Purpose
                Spreadsheets and general contact tools cope with a few hundred donors, but they struggle with gift history, tiers, consent fields and automated acknowledgements. Comparing a shortlist of donor management systems against your own stewardship needs, rather than the longest feature list, avoids a costly migration that does not fix the real problem.

                ## Milestones
                1. Ten stewardship requirements written and ranked by importance.
                2. Three systems shortlisted and demonstrated with your own data scenarios.
                3. Total cost over three years compared, including migration and training.
                4. A decision recorded with the reasons and an outline migration plan.

                ## Notes
                Start from the **Purchase decision** template. Ask each supplier for a reference from an organisation of your size.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between three donor databases scored against ten ranked stewardship requirements and a three-year cost."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write ten stewardship requirements and rank them"
                - "Shortlist three donor management systems used by similar organisations"
                - "Book demonstrations using your own acknowledgement and tier scenarios"
                - "Compare three-year costs including migration and training"
                - "Record the decision and the reasons for it"
            - name: Annual donor satisfaction survey
              description: |-
                ## Purpose
                Asking donors how they feel about the way you thank and update them often reveals simple fixes, such as too much post, too little news or confusion about where money goes. A short annual survey, with results shared back, also shows donors they are listened to.

                ## Milestones
                1. A survey of no more than ten questions, including a satisfaction score and open comments.
                2. The survey sent to every consenting donor.
                3. Responses grouped into themes and ranked by frequency.
                4. Three changes made and reported back to donors in the next update.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annual donor survey completed with themes recorded and three changes reported back to donors in the following update."
                cadence: cyclic
              tasks:
                - "Draft ten survey questions including a satisfaction score"
                - "Send the donor satisfaction survey to consenting donors @recurring(yearly)"
                - "Group open comments into themes and count them"
                - "Report three changes back to donors in the next update"
            - name: First-gift welcome series for new donors
              description: |-
                ## Purpose
                First-time donors are the group most likely to leave, and what happens in their first ninety days shapes whether a second gift follows. A planned series of three or four touches, such as a fast thank-you, a welcome email, an early impact story and a short call, gives new donors a reason to stay before the next appeal reaches them.

                ## Milestones
                1. The series mapped with timing and channel for each touch.
                2. Content written for each touch, with no ask before the third.
                3. The series switched on for every new donor from a set date.
                4. Second-gift conversion compared with the baseline after six months.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three- or four-touch welcome series running for every new donor, with six-month second-gift conversion compared with the baseline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map the touches a new donor receives in their first ninety days today"
                - "Plan a three- or four-touch welcome series with timing and channel"
                - "Write the content for each touch, holding any ask until the third"
                - "Compare second-gift conversion with the baseline after six months"
            - name: Personalised video thank-you trial
              description: |-
                ## Purpose
                Short personal videos from staff or the people you serve can make a thank-you memorable, but they take time and not every donor wants one. Running a fair trial, with half of new donors receiving a video and half the usual thanks, shows whether the extra effort changes replies or retention for your donors.

                ## Milestones
                1. A trial design with two comparable groups and a set period.
                2. Videos recorded and sent to the trial group within the turnaround target.
                3. Reply rates and second gifts compared between the groups.
                4. A decision recorded to keep, adapt or drop the video thank-you.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded keep, adapt or drop decision based on comparing replies and second gifts between video and standard thank-you groups."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Decide which new donors go into the video and standard groups"
                - "Record a test thank-you video and check it plays on a phone"
                - "Send videos to the trial group within the turnaround target"
                - "Compare replies and second gifts between the two groups"
            - name: Donor recognition and anonymity policy
              description: |-
                ## Purpose
                Honour rolls, plaques, name listings in reports and named rooms all raise questions: how much earns which recognition, how names are written, and what happens when a donor asks to stay anonymous or a past donor becomes controversial. A written policy agreed by the board answers them once instead of case by case.

                ## Milestones
                1. Current recognition practices listed, including any promises already made.
                2. Recognition levels and wording rules written.
                3. How anonymity requests are recorded and honoured set out.
                4. A clause on reviewing or removing recognition agreed by the board.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recognition and anonymity policy approved by the board and applied to the next annual report listing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every recognition promise currently made to donors"
                - "Draft recognition levels and naming wording rules"
                - "Write how anonymity requests are recorded and honoured"
                - "Take the policy to the board for approval"
            - name: Explaining overheads honestly to donors
              description: |-
                ## Purpose
                Donors often ask how much of their gift goes to the cause, and a defensive or vague answer costs more trust than the true figure would. A clear, short explanation of what core costs pay for, why they are needed and how they are kept in check gives everyone on the team the same honest answer.

                ## Milestones
                1. Your cost split taken from the latest accounts and checked with finance.
                2. A plain-language explanation of what core costs pay for.
                3. A short answer for staff and volunteers to use on the phone.
                4. The explanation published where donors look for it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finance-checked explanation of core costs published for donors, and a short phone answer used by staff and volunteers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Take the cost split from your latest published accounts"
                - "Ask the agent to draft a plain-language explanation of core costs"
                - "Check the wording with your finance lead"
                - "Give staff and volunteers a three-sentence phone answer"
            - name: Interest-based segments for donor updates
              description: |-
                ## Purpose
                A donor who gave to the youth programme may skim news about the food bank, and a single generic update serves nobody especially well. Tagging donors by the programmes they have supported and tailoring one section of each update to that interest makes reports feel personal without writing dozens of versions.

                ## Milestones
                1. Interest tags defined from gift purposes and appeal responses.
                2. Every active donor tagged with at least one interest where the data allows.
                3. One update sent with a section tailored by interest.
                4. Engagement compared with the previous untailored update.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Active donors tagged by interest and one tailored update sent, with engagement compared against the previous generic update."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the programmes and themes donors give to"
                - "Tag active donors by the purposes of their past gifts"
                - "Write one tailored section per interest for the next update"
                - "Compare opens and replies with the last untailored update"
            - name: Annual impact report production
              description: |-
                ## Purpose
                The annual impact report is often the one document a donor keeps, and it is frequently produced in a rush from whatever photos and figures are to hand. Planning it months ahead, with outcomes agreed, stories collected, figures checked and a donor-friendly version distinct from the statutory accounts, produces something worth keeping.

                ## Milestones
                1. A production timeline with owners, working back from the publication date.
                2. Outcome figures agreed with programme leads and checked by finance.
                3. Stories and photos chosen with consent confirmed.
                4. The report designed, proofread and sent to donors in print and online.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An annual impact report published by the planned date, with every figure checked by finance or the programme lead."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Set the publication date and work back a production timeline"
                - "Agree the outcome figures with each programme lead"
                - "Choose stories and photos with consent confirmed"
                - "Have finance check every figure before design starts"
                - "Send the finished report to donors in print and online"
            - name: Donor appreciation evening with no ask
              description: |-
                ## Purpose
                An evening where donors meet the people their money supports, hear a short update and are thanked, with no auction or pledge cards, is remembered precisely because nothing was asked. Keeping it small, focused and well followed up makes it a stewardship event rather than a fundraiser in disguise.

                ## Milestones
                1. A date, venue and guest list drawn from the top stewardship tiers.
                2. A running order of no more than ninety minutes with a frontline or beneficiary voice.
                3. Every guest thanked personally on the night by a named host.
                4. A follow-up note sent within three days to everyone who came and everyone who could not.

                ## Notes
                Keep costs modest and visible: donors notice when an appreciation event looks expensive.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An appreciation evening held with no ask, and a follow-up note sent to every invitee within three days."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Pick a date and a modest venue linked to your work"
                - "Draw the guest list from the top two stewardship tiers"
                - "Assign a host to greet and thank each guest by name"
                - "Send follow-up notes within three days of the evening"
            - name: Programme site visit for donors and funders
              description: |-
                ## Purpose
                Seeing the work in person answers questions no report can, but a badly planned visit disrupts the people being served and leaves visitors with the wrong impression. A visit planned with programme staff, with clear boundaries on photos and conversations and a short summary afterwards, gives donors and funders a true picture without intruding.

                ## Milestones
                1. A visit date agreed with programme staff at a time that suits the service.
                2. Ground rules written on photography, privacy and conversations.
                3. A one-page briefing sent to visitors beforehand.
                4. A thank-you and short summary of what they saw sent afterwards.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A site visit held with written ground rules agreed by programme staff and a follow-up summary sent to every visitor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the programme lead which dates suit the service"
                - "Write ground rules on photos, privacy and conversations"
                - "Send visitors a one-page briefing a week before"
                - "Send a thank-you and summary within a week of the visit"
            - name: Year-end giving season thanks and receipts
              description: |-
                ## Purpose
                In many countries a large share of individual gifts arrives in the last weeks of the calendar or tax year, just when staff take leave. Planning acknowledgement capacity, annual receipts and a no-ask thank-you message in advance stops the busiest weeks producing the slowest thanks.

                ## Milestones
                1. The peak giving weeks identified from last year's data.
                2. Extra processing cover booked for those weeks.
                3. Annual receipts or statements prepared and checked before they are due.
                4. A no-ask thank-you message sent to all donors early in the new year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every gift in the peak weeks thanked within the turnaround target and annual receipts issued on time, for the latest giving season."
                cadence: cyclic
              tasks:
                - "Find last year's peak giving weeks from the gift data"
                - "Start the year-end stewardship plan and book extra cover @recurring(yearly)"
                - "Prepare and check annual receipts before they are due"
                - "Send a no-ask new year thank-you to all donors"
            - name: Close-out stewardship when a grant or pledge ends
              description: |-
                ## Purpose
                The end of a multi-year gift or grant is when relationships are most often dropped, because the formal report is filed and nobody plans the next conversation. A close-out plan with a final thank-you, a summary of the whole period's results and a meeting to ask what the funder or donor wants next keeps the door open.

                ## Milestones
                1. A list of gifts and grants ending in the next twelve months.
                2. A close-out summary of results for each one, beyond the formal report.
                3. A thank-you meeting or call held with each funder or donor.
                4. Their interest in further support recorded with a date for the next contact.

                ## Notes
                The formal end-of-grant report belongs to grant management. This project covers the relationship around it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every gift or grant ending in the year closed with a results summary, a thank-you conversation and a dated next contact."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List gifts and grants ending in the next twelve months"
                - "Write a one-page summary of results for each one"
                - "Book a thank-you call or meeting before each one ends"
                - "Record each funder's or donor's view on future support"
            - name: Stewardship for a one-person fundraising team
              description: |-
                ## Purpose
                Sole fundraisers juggling appeals, grants, events and the database rarely have time for stewardship, so it is the first thing dropped. A minimum standard that fits into two protected hours a week, covering prompt thanks, a monthly lapsed check and a quarterly update, keeps donors coming back even in the busiest months.

                ## Milestones
                1. A minimum stewardship standard written on one page.
                2. Two hours a week blocked and protected in the diary.
                3. Volunteer or board help recruited for one task, such as cards or calls.
                4. Three consecutive months of the minimum standard met.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months in which the one-page minimum stewardship standard was met within two protected hours a week."
                cadence: phased
                effort_hours_estimate: "26"
              tasks:
                - "Write a one-page minimum stewardship standard"
                - "Block two stewardship hours in the diary @recurring(weekly:thu)"
                - "Ask one volunteer or board member to take on thank-you cards"
                - "Check at month end whether the minimum standard was met"
            - name: Volunteer handwritten card team
              description: |-
                ## Purpose
                Handwritten notes stand out in a pile of printed post, and a small volunteer team can produce dozens in an evening. Recruiting a few reliable volunteers, giving them short donor briefs and holding a monthly session turns a nice idea into a steady habit, and gives volunteers a satisfying way to help.

                ## Milestones
                1. Four to six volunteers recruited and briefed on confidentiality.
                2. A card style and three sample messages agreed.
                3. A monthly session held with a prepared list of donors.
                4. Every card logged on the donor record.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly card-writing sessions held for six months, with every card logged against the donor record."
                cadence: rolling
              tasks:
                - "Invite four to six volunteers to join a card-writing team"
                - "Brief volunteers on confidentiality and handling donor data"
                - "Prepare a donor list and three sample messages before each session"
                - "Hold the card-writing session and log the cards sent @recurring(monthly:18)"
            - name: In-memory and tribute gift acknowledgements
              description: |-
                ## Purpose
                Gifts in memory of someone who has died, or in honour of a birthday or wedding, involve two sets of people: the donors and the family being honoured. Getting names, relationships and notifications right, gently and promptly, matters more here than anywhere else in stewardship.

                ## Milestones
                1. A process for recording the person remembered or honoured and the family contact.
                2. Separate acknowledgement wording for the donor and for the family.
                3. Families told of gifts without amounts unless the donor agrees.
                4. Funeral and collection totals reported to the family within a set time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written in-memory and tribute process with separate donor and family wording, used for every such gift for three months."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Review how in-memory gifts are recorded in the database today"
                - "Write separate acknowledgement wording for donors and families"
                - "Agree when gift amounts may be shared with the family"
                - "Set a time limit for reporting collection totals to the family"
            - name: Legacy pledger stewardship and recognition society
              description: |-
                ## Purpose
                People who have told you they are leaving a gift in their will may stay supporters for decades, and their wills can change at any point. A simple programme, with an annual update, a yearly invitation and a named group for those who want one, keeps them close without ever pressing on the gift itself.

                ## Milestones
                1. Everyone who has told you of a legacy intention listed, with their contact preferences.
                2. An annual update and invitation planned specifically for them.
                3. Recognition offered, including the option to stay private.
                4. A sensitive process agreed for when a legacy pledger dies.

                ## Notes
                Never advise on wills or tax. Point people to their own solicitor or adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every known legacy pledger receives an annual update and invitation, with their recognition choice recorded."
                cadence: cyclic
              tasks:
                - "List every supporter who has mentioned a gift in their will"
                - "Plan an annual update written for legacy pledgers"
                - "Send legacy pledgers their annual update and invitation @recurring(yearly)"
                - "Agree the steps to follow when a legacy pledger dies"
            - name: Corporate partner and matched gift reporting
              description: |-
                ## Purpose
                Companies that give, match employee donations or send volunteers usually need figures for their own social responsibility reports, often at short notice. Agreeing up front what they need, tracking matched gifts and volunteer hours, and sending a short partner report twice a year keeps the partnership renewing.

                ## Milestones
                1. Each corporate partner's reporting needs and dates written down.
                2. Matched gifts and volunteer hours tracked against each partner.
                3. A two-page partner report sent twice a year with photos they may use.
                4. Renewal conversations held at least three months before each agreement ends.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each corporate partner received two reports in the year with the figures it asked for, and every renewal conversation was held three months early."
                cadence: cyclic
              tasks:
                - "Ask each corporate partner what figures they need and when"
                - "Track matched gifts and volunteer hours by partner"
                - "Send each partner a two-page report twice a year"
                - "Book renewal conversations three months before agreements end"
            - name: Donor relationship handover when a fundraiser leaves
              description: |-
                ## Purpose
                When a fundraiser leaves, the relationships they built often leave with them, because what each donor cares about lived in one person's head and inbox. A handover with written notes for every managed donor, introductions by the departing person and a first contact from the new owner within a month protects income through the change.

                ## Milestones
                1. Every donor managed by the leaver listed with a short relationship note.
                2. Promises and open conversations written down.
                3. Introductions made by the departing fundraiser where possible.
                4. Each donor contacted by the new relationship owner within a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every donor managed by a departing fundraiser has a written note and a contact from their new owner within a month of the handover."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every donor the departing fundraiser manages"
                - "Ask the agent to draft a handover note format for each donor relationship"
                - "Book introductory calls or emails before the leaving date"
                - "Check each donor heard from their new owner within a month"
            - name: Donor communication through a crisis or bad news
              description: |-
                ## Purpose
                Failed programmes, safeguarding incidents, leadership departures and funding shortfalls all reach donors eventually, one way or another. Agreeing in advance who tells which donors, in what order and with what level of detail means top donors hear it from you first and the message is honest rather than defensive.

                ## Milestones
                1. A short protocol naming who decides, who speaks and who contacts which donors.
                2. A contact order with top donors and key funders first.
                3. Holding statements drafted for the most likely scenarios.
                4. The protocol checked with your chair and, where needed, a legal or regulatory adviser.

                ## Notes
                Serious incidents may carry reporting duties to a charity regulator. Confirm yours with an adviser; this project covers donor communication only.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A donor crisis communication protocol with a contact order and holding statements, approved by the chair."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the bad news scenarios most likely for your organisation"
                - "Name who decides, who speaks and who calls which donors"
                - "Draft holding statements for the three likeliest scenarios"
                - "Take the protocol to the chair for approval"
            - name: Donor cohort retention and lifetime value analysis
              description: |-
                ## Purpose
                Averages hide the fact that donors recruited through different channels and years behave very differently over time. Following each recruitment cohort for three to five years, with retention, cumulative giving and stewardship cost, shows which donors are worth the most and where stewardship spend pays back.

                ## Milestones
                1. Donor cohorts defined by first-gift year and recruitment channel.
                2. Retention and cumulative giving tracked for each cohort over at least three years.
                3. Approximate stewardship cost per cohort estimated.
                4. Findings written up with two recommendations for the stewardship plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cohort analysis covering at least three years of recruitment cohorts, with retention, cumulative giving and two written recommendations."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Export first-gift date, channel and all later gifts for every donor"
                - "Group donors into cohorts by year and recruitment channel"
                - "Chart retention and cumulative giving for each cohort"
                - "Write two recommendations for the stewardship plan"
            - name: Named fund and endowment statements to donors
              description: |-
                ## Purpose
                Founders of a named fund, scholarship or endowed gift expect a yearly account of its value, what it paid for and who benefited. An individual statement for each fund, prepared with finance from the investment and spending records, honours the agreement and is often the moment donors decide to add to it.

                ## Milestones
                1. Every named or endowed fund listed with its agreement and reporting promises.
                2. Fund value, income and spending figures supplied by finance for each.
                3. A statement for each fund with a story of who benefited.
                4. Statements sent within an agreed number of months after the financial year end.

                ## Notes
                Report figures as finance supplies them. Questions about investment strategy or performance go to the finance lead or investment committee.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every named or endowed fund donor received an individual annual statement with figures checked by finance, within the agreed time."
                cadence: cyclic
              tasks:
                - "List every named or endowed fund and its reporting promises"
                - "Request each fund's value, income and spending from finance"
                - "Issue the named fund statements to each donor @recurring(yearly)"
                - "Add a beneficiary story to each statement"
            - name: Mid-level donor stewardship programme
              description: |-
                ## Purpose
                Supporters giving well above the average gift but below major gift levels are often the most neglected: too valuable for the mass mailing, too numerous for a personal manager each. A mid-level programme with named contacts, exclusive briefings and better reporting holds them and prepares some for larger support later.

                ## Milestones
                1. A mid-level band defined from your gift distribution.
                2. A named staff contact for each mid-level donor.
                3. Two exclusive touches a year, such as a briefing call or behind-the-scenes update.
                4. Retention and upgrade rates for the band tracked against the rest of the file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A defined mid-level band with named contacts and two exclusive touches a year, with its retention tracked separately from other donors."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find the gift range between your average gift and major gift level"
                - "Assign a named staff contact to each mid-level donor"
                - "Plan two exclusive touches a year for the band"
                - "Track mid-level retention and upgrades separately"
            - name: Stewardship cost and return review
              description: |-
                ## Purpose
                Every touch costs staff time, print and postage, and some cost far more than the loyalty they buy. Reviewing a year of stewardship spend against retention and repeat giving by tier shows which touches earn their keep, which to cut and where to put the time saved.

                ## Milestones
                1. The cost of each stewardship touch estimated, including staff time.
                2. Retention and repeat giving by tier set beside those costs.
                3. Touches ranked by cost and apparent effect.
                4. Changes for next year's calendar agreed and recorded.

                ## Notes
                Effects are rarely provable for a single touch. Look for patterns across tiers and years rather than claiming precise returns.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of stewardship touches by cost and effect, with changes to next year's calendar recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every stewardship touch and estimate its cost per donor"
                - "Set retention and repeat giving by tier beside the costs"
                - "Rank touches by cost and apparent effect"
                - "Agree which touches to keep, change or drop next year"
---

# Donor Stewardship & Reporting

Donor stewardship is everything that happens after a gift arrives: the thank-you, the proof that the money did what was promised, and the steady attention that makes a second gift feel natural. It is written for nonprofit fundraisers and the teams around them, board members and volunteers included, and runs from foundations such as the stewardship audit, acknowledgement standard and gift tiers, through operating routines, writing and reporting skills and decisions about tools and recognition, to events, situations like crises and staff handovers, and specialist work on cohort analysis and named funds.

The rhythm is set by gift processing three times a week, weekly board thank-you calls, monthly checks on retention, lapsed donors, pledges, restricted spend and failed regular gifts, a quarterly impact update and board report, and yearly surveys, legacy updates and fund statements. It pairs with the Metrics log, Operational checklist, Compliance control, Person, Content pipeline, Feedback themes and Purchase decision templates. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
