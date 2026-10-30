---
id: fundraising-investors.monthly-investor-updates
name: Monthly Investor Updates
description: "A monthly investor update that goes out on time: the right recipients, a fixed outline, defined metrics, honest lowlights, specific asks and the follow-up that turns replies into real help."
category: business
version: 1.0.0
tags: [fundraising-investors, monthly-investor-updates, founder, investor-updates, startup-metrics, investor-communication, shareholder-updates]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - reading-queue
    - feedback-themes
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Monthly Investor Updates
          description: "Writing regular updates to investors with metrics, wins, challenges and asks so they stay engaged and helpful between rounds."
          projects:
            - name: Investor update recipient list
              description: |-
                ## Purpose
                Founders often send the first update to whoever is in their inbox and forget the angel who wired a small cheque two years ago, the SAFE holder who has not converted yet or the adviser holding options. Building the list from the cap table and the signed investment documents, not from memory, means everyone with a stake hears the same news on the same day, and nobody who should not receive it does.

                ## Milestones
                1. Every shareholder, SAFE or note holder and option-holding adviser from the cap table listed with a current email address.
                2. Each fund recorded with the partner and any portfolio team address they want updates sent to.
                3. Prospects, former investors and supportive friends held on separate lists, each with a decision on whether they receive anything.
                4. One master list saved where whoever sends each month can find it.

                ## Notes
                Funds often ask for a second address for their portfolio or platform team, who load your numbers into their own tracking. Ask once and add it.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master recipient list built from the cap table, covering every equity, SAFE and note holder with a confirmed email address, is saved and named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the current holder list from the cap table"
                - "Add every SAFE and convertible note holder not yet shown on the cap table"
                - "Ask each fund which partner and portfolio address should receive updates"
                - "Put prospects and friends on a separate list with a send decision for each"
            - name: Update cadence and send-day commitment
              description: |-
                ## Purpose
                Investors forgive a quiet month far more readily than silence that starts the week after the money lands. Deciding now whether you write monthly or quarterly, which day the update goes out and who covers when you are travelling turns a good intention into a promise you can keep for years rather than weeks.

                ## Milestones
                1. A written choice of monthly or quarterly updates, with the reason in one sentence.
                2. A fixed send day after the books close, such as the twelfth of each month, agreed with your co-founders.
                3. A named deputy who sends a short version if you cannot.
                4. The commitment stated to investors in the next update or closing email.

                ## Notes
                Monthly suits most companies in the two years after a pre-seed or seed round. Quarterly can work later, but only if each one is fuller and never late.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written cadence, send day and deputy have been agreed by the founders and announced to investors in an email."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down how often you will send updates and why"
                - "Choose a send day that falls after the monthly books are closed"
                - "Name a deputy who sends a short update when you cannot"
                - "Tell investors the cadence and send day in your next email to them"
            - name: Standard investor update outline
              description: |-
                ## Purpose
                An update with the same sections in the same order every month can be read in four minutes and compared with last month at a glance. A fixed outline (a short summary, key metrics, highlights, lowlights, asks and thanks) also makes writing faster, because you are filling known sections rather than facing a blank page.

                ## Milestones
                1. An outline with six or fewer fixed sections, each with a one-line note on what belongs in it.
                2. A word limit set for the whole update and for each section.
                3. A subject line format chosen that includes the company name and the month.
                4. The outline saved as a reusable draft in the tool you send from.

                ## Notes
                Put the asks near the top, straight after the summary. Investors who skim stop well before the end.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved outline with named sections, word limits and a subject line format is used for the next update sent."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the sections you will use every month, six at most"
                - "Write one line describing what belongs in each section"
                - "Set a subject line format with the company name and month"
                - "Save the outline as a reusable draft in your email tool"
            - name: Core investor metrics and definitions
              description: |-
                ## Purpose
                Changing which numbers appear each month, or quietly changing how they are calculated, is the fastest way to lose an investor's trust. Choosing five to eight metrics that fit your business model, writing down exactly how each is calculated and naming its source system gives every future update a spine that holds up when someone checks it against the accounts.

                ## Milestones
                1. Five to eight metrics chosen, such as revenue or recurring revenue, growth rate, gross margin, net burn, cash and runway months.
                2. A written definition for each, including what is counted and what is excluded.
                3. The source system and the person who pulls each metric recorded.
                4. Up to twelve months of history back-filled where the data exists.

                ## Notes
                Start from the **Metrics log** template. Cash, net burn and runway belong in every update, whatever else you choose.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metrics sheet holding five to eight defined metrics, each with a source and at least six months of history, is ready before the next update."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist the metrics an investor in your business model expects to see"
                - "Write how each metric is calculated and what it leaves out"
                - "Record which system each number comes from and who pulls it"
                - "Back-fill as many past months of each metric as the data allows"
            - name: Choosing how to send investor updates
              description: |-
                ## Purpose
                Plain email from your own address gets read and answered, but a long visible recipient line leaks every investor's address and invites reply-all threads, while bulk tools can land in spam. Comparing plain email, a mailing tool and a dedicated investor update platform on deliverability, reply handling, cost and how easily investors find old issues settles the question before the list grows.

                ## Milestones
                1. Requirements written: list size, reply handling, charts, attachments, an archive investors can reach and monthly cost.
                2. Three options compared against those requirements, including the email tool you already use.
                3. A choice made and test sends opened by two friendly investors.
                4. Recipients set up so no investor can see another's address.

                ## Notes
                Start from the **Purchase decision** template. Whatever you choose, replies should come back to a founder's inbox, never to a no-reply address.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sending method has been chosen against written requirements and a test update has reached two investors without exposing any recipient addresses."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the requirements for sending: list size, replies, charts and archive"
                - "Compare plain email, a mailing tool and an update platform against them"
                - "Send a test update to two friendly investors and ask how it arrived"
                - "Check that no recipient can see another investor's email address"
            - name: Confidentiality line and sharing rules
              description: |-
                ## Purpose
                Updates get forwarded to co-investors, prospective acquirers and occasionally journalists, and numbers shared in good faith can travel a long way. Agreeing a short confidentiality footer and a clear list of what never goes in an update, such as named customer pricing or unannounced deals, protects the company without making the update so guarded it says nothing.

                ## Milestones
                1. A one or two sentence confidentiality footer checked with your lawyer.
                2. A written list of what never appears in updates, such as customer contract terms, staff health or pay, and live acquisition talks.
                3. A rule that customers and partners are named only with their permission.
                4. The footer added to the saved update outline.

                ## Notes
                Your investment documents may already say how information you share can be used. Ask your lawyer how the footer fits with them rather than drafting legal wording yourself.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-checked confidentiality footer and a written never-share list are in the update outline before the next send."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a two-sentence confidentiality footer for the update"
                - "List the kinds of information that never go in an update"
                - "Send the footer and list to your lawyer for a quick check"
                - "Add the agreed footer to the saved update outline"
            - name: Investor information rights review
              description: |-
                ## Purpose
                Larger investors often hold a contractual right to monthly or quarterly management accounts, an annual budget and audited statements, with deadlines written into the investment agreement. Reading those clauses once and turning them into a simple calendar means the monthly update and any required financials go out on time, and no fund has to send a polite reminder.

                ## Milestones
                1. Every investment agreement, side letter and shareholders' agreement checked for information rights clauses.
                2. A table listing each investor entitled to information, what they receive and by when.
                3. Any obligation the monthly update does not already meet identified.
                4. Required statements added to the update calendar with their due dates.

                ## Notes
                Ask your lawyer to confirm the table. The clauses vary between rounds, and sometimes between investors in the same round.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of every investor's information rights, confirmed by your lawyer, is in the update calendar with due dates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather every signed investment agreement and side letter in one folder"
                - "List each information right with its investor, content and deadline"
                - "Ask your lawyer to confirm the information rights table"
                - "Re-check the information rights table against all signed documents @recurring(yearly)"
            - name: First investor update after closing
              description: |-
                ## Purpose
                The first update after the money arrives sets the tone for every one that follows, and investors pay the most attention in that window. Sending it within 30 days of closing, with baseline numbers, what the money will be spent on and the milestones you expect to hit before the next round, gives investors a reference point to judge every later update against.

                ## Milestones
                1. A first update sent within 30 days of the round closing.
                2. Baseline values for every core metric included, so later months have something to compare with.
                3. The spending plan for the round and three milestones for the next twelve months stated.
                4. At least one specific ask included, with the investors best placed to help noted privately.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A first update containing baseline metrics, a spending plan, three twelve-month milestones and one specific ask was sent within 30 days of close."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the date the round closed and the date 30 days later"
                - "Write the three milestones the round is meant to reach"
                - "Fill the outline with baseline metrics and the spending plan"
                - "Send the first update with one specific ask included"
            - name: Sent update archive
              description: |-
                ## Purpose
                Three years from now a diligence team or a new board member will ask what you told investors about a hard quarter, and a search through a personal inbox is a poor answer. Keeping every sent update as a dated PDF in one shared folder, beside the metrics snapshot it was written from, makes your record easy to show and impossible to quietly rewrite.

                ## Milestones
                1. A shared folder with a consistent file name pattern of year, month and company name.
                2. Every past update found and saved into it, including any sent before this blueprint.
                3. Each update stored next to the metrics snapshot used to write it.
                4. Access given to co-founders and the finance lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every update sent so far is saved as a dated PDF beside its metrics snapshot in one shared folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a shared update archive folder with a file name pattern"
                - "Search your sent mail for every past update and save each as a PDF"
                - "Save the sent update and its metrics snapshot to the archive @recurring(monthly:13)"
            - name: Monthly update drafting and send routine
              description: |-
                ## Purpose
                Most update habits die around month four, when a launch or a hiring push crowds out the hour needed to write. Blocking a fixed drafting slot after the metrics snapshot and a fixed send day, both in the calendar for the year ahead, turns the update into a routine rather than a decision you have to make again every month.

                ## Milestones
                1. Drafting and send slots booked in the calendar for the next twelve months.
                2. Every draft started from the saved outline, never from a blank page.
                3. Updates sent on the agreed day for six months in a row.
                4. Any late send explained in one line at the top of that update.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly updates have gone out on the agreed send day, or within two days of it with the delay explained."
                cadence: rolling
              tasks:
                - "Book drafting and send slots in the calendar for the next twelve months"
                - "Draft the monthly investor update from the saved outline @recurring(monthly:9)"
                - "Send the monthly investor update to the full recipient list @recurring(monthly:12)"
            - name: Running wins and lowlights note
              description: |-
                ## Purpose
                By month end, the customer call that went brilliantly and the engineer who resigned on a Tuesday have both blurred. A single shared note where the founders drop wins, setbacks, lessons and possible asks as they happen gives the update specific material and saves an hour of trying to remember what happened in week two.

                ## Milestones
                1. One shared note with headings for wins, lowlights, lessons and possible asks.
                2. Every founder adding to it at least once a week.
                3. Each month's note moved into the archive once the update is sent.
                4. Three consecutive updates written mainly from the note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive updates were drafted mainly from a shared note that every founder added to weekly."
                cadence: rolling
              tasks:
                - "Create a shared note with wins, lowlights, lessons and asks headings"
                - "Add this week's wins and setbacks to the running note @recurring(weekly:fri)"
                - "Move the month's note into the archive after the update goes out"
            - name: Month-end metrics snapshot
              description: |-
                ## Purpose
                Numbers pulled on different days from different systems never quite agree, and an investor who sees last month's revenue change between two updates starts doubting everything else. Freezing a snapshot of every core metric on a fixed day after the books close, from the agreed sources, gives the update numbers that match the accounts and a clean base for next month.

                ## Milestones
                1. A fixed snapshot day agreed with whoever closes the books.
                2. Every core metric pulled from its named source into the metrics sheet on that day.
                3. Month-on-month and year-on-year change calculated in the sheet.
                4. Any later correction to a sent number explained in the following update.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly snapshots have been taken on the agreed day, with every correction to an earlier figure explained in the next update."
                cadence: rolling
              tasks:
                - "Agree the snapshot day with your bookkeeper or finance lead"
                - "Pull every core metric into the sheet and lock the month @recurring(monthly:8)"
                - "Note any earlier figure that changed since it was reported, and why"
            - name: Second-reader check before each send
              description: |-
                ## Purpose
                One figure typed wrong or a lowlight phrased carelessly is hard to take back once forty people have read it. A twenty-minute read by a co-founder or finance lead, checking every figure against the snapshot and the tone of any bad news, catches the errors that would otherwise surface in a reply from your most sceptical investor.

                ## Milestones
                1. A named second reader for each update, with a deputy.
                2. A short checklist: figures match the snapshot, names are cleared, asks are specific, tone is calm.
                3. Every update for three months read by someone other than its writer before sending.
                4. No correction email needed after a send for three months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive updates were checked by a second reader against a written checklist and needed no correction after sending."
                cadence: rolling
              tasks:
                - "Agree who reads each draft before it goes out and what they check"
                - "Check the draft update's figures against the month's snapshot @recurring(monthly:11)"
                - "Read the lowlights aloud to check the tone is plain and calm"
            - name: Investor asks tracker
              description: |-
                ## Purpose
                Asks that vanish after the update is sent teach investors that asking is a ritual, not a request. A tracker recording each ask, who replied, what came of it and when you thanked them shows which asks work, stops promised introductions from slipping, and fills the thanks section every month with real names.

                ## Milestones
                1. A tracker with columns for the ask, date, helper, outcome and date thanked.
                2. Every ask from the last three updates logged.
                3. Open asks chased or closed each month.
                4. Every helper thanked by name in the following update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of asks are logged with outcomes, and every investor who helped was thanked by name in the next update."
                cadence: rolling
              tasks:
                - "Create an asks tracker with columns for ask, helper, outcome and thanks"
                - "Log every ask from this month's update in the tracker"
                - "Chase open asks and close finished ones in the tracker @recurring(monthly:20)"
                - "Thank each helper by name in the next update's thanks section"
            - name: Reply handling after each update
              description: |-
                ## Purpose
                The replies in the 48 hours after an update are where most investor help starts: an introduction offered, a question about churn, a candidate suggested. Answering every reply within two working days and routing each offer into the asks tracker turns a one-way report into a conversation that investors want to keep having.

                ## Milestones
                1. A two working day target for answering update replies agreed by the founders.
                2. Every reply in a month answered or passed to the right person.
                3. Each offer of help logged in the asks tracker the day it arrives.
                4. Questions that need a call, not an email, booked as calls.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months every reply to an update was answered within two working days and every offer of help was logged."
                cadence: rolling
              tasks:
                - "Set a two working day reply target for update responses"
                - "Answer or route every reply to the latest update @recurring(monthly:14)"
                - "Add each offer of help to the asks tracker the day it arrives"
                - "Book a call for any investor question too big for an email"
            - name: Quarterly investor engagement review
              description: |-
                ## Purpose
                Some investors read every word and reply often, while others have not responded in a year, and that matters before the next round when you need pro-rata decisions and kind words to new funds. Looking each quarter at who replies, who helps and who has gone quiet tells you whom to call personally and which relationships need repair.

                ## Milestones
                1. A simple list of every investor with replies, help given and last personal contact this quarter.
                2. Three investors chosen each quarter for a personal call.
                3. Every investor silent for two quarters contacted directly.
                4. Four quarterly reviews completed in a year.

                ## Notes
                Open tracking in email tools is unreliable, so count replies and help, not opens.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly engagement reviews are recorded in a year, each naming three investors called and any silent investor contacted."
                cadence: rolling
              tasks:
                - "List each investor with replies, help and last personal contact"
                - "Review investor engagement and choose three people to call @recurring(quarterly)"
                - "Book a short call with any investor silent for two quarters"
            - name: Quarterly investor letter with summary financials
              description: |-
                ## Purpose
                Monthly notes keep investors close, but every third month many expect more: a summary profit and loss, cash position, headcount and progress against the plan they backed. Making one update per quarter a fuller letter with summary financials attached also meets the information rights most funds hold, without writing a separate report.

                ## Milestones
                1. The summary statements the quarterly letter attaches agreed with your finance lead.
                2. Progress against the year's plan shown milestone by milestone.
                3. Headcount, hires and departures for the quarter included.
                4. Four quarterly letters sent on time in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly letters, each with summary financials and progress against the annual plan, were sent on time over twelve months."
                cadence: cyclic
              tasks:
                - "Agree with your finance lead which summary statements to attach"
                - "Write the quarterly letter with progress against the annual plan @recurring(quarterly)"
                - "Add headcount, hires and departures for the quarter"
            - name: Recipient list upkeep against the cap table
              description: |-
                ## Purpose
                Every option exercise, secondary sale, SAFE conversion and partner leaving a fund changes who should receive the update. Checking the list against the cap table each quarter keeps new shareholders included from their first month and stops updates reaching people who have sold their shares.

                ## Milestones
                1. The recipient list matched against the latest cap table each quarter.
                2. New shareholders added and sent the last three updates as a welcome.
                3. Former holders removed, with a short note telling them so.
                4. Fund contacts updated when a partner moves firm.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly list checks in a year leave the recipient list matching the cap table, with every change noted."
                cadence: rolling
              tasks:
                - "Compare the recipient list with the latest cap table @recurring(quarterly)"
                - "Send new shareholders the last three updates as a welcome"
                - "Remove former holders and send each a short courtesy note"
                - "Update the fund contact when a partner changes firm"
            - name: Annual letter to investors
              description: |-
                ## Purpose
                Once a year the monthly detail needs stepping back from: what the company set out to do, what happened, what was learned and what the next twelve months must prove. A year-end letter, sent in place of one monthly update, is the document investors forward to their own partners and the one you will reread before the next raise.

                ## Milestones
                1. The last twelve updates reread and the five biggest changes listed.
                2. The year's goals set against what actually happened, including misses.
                3. Three things the next twelve months must prove stated plainly.
                4. The letter sent and saved to the archive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An annual letter comparing the year's goals with results and naming three proofs for the coming year has been sent and archived."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Book time to write the annual letter once the year's books close @recurring(yearly)"
                - "Reread the last twelve updates and list the five biggest changes"
                - "Ask the agent to draft a year-in-review summary from the twelve updates"
                - "Write the three things the next twelve months must prove"
            - name: Writing the three-sentence summary
              description: |-
                ## Purpose
                Plenty of investors read only the first five lines of an update, so the opening summary has to carry the month: the headline number, the most important win, the biggest problem and the main ask. Practising a three-sentence summary on your last few updates teaches you to lead with what matters instead of warming up.

                ## Milestones
                1. The summaries of the last three updates rewritten in three sentences each.
                2. Each summary checked for a number, a win, a problem and an ask.
                3. One trusted investor asked whether the summary alone told the story.
                4. A file of strong summaries kept as reference.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three past summaries have been rewritten to the three-sentence pattern and one investor has confirmed the summary alone told the story."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Rewrite the summary of your last update in three sentences"
                - "Check each summary names a number, a win, a problem and an ask"
                - "Ask an investor you trust whether the summary alone told the story"
                - "Keep the summaries you are proud of in a reference file"
            - name: Reporting bad news in investor updates
              description: |-
                ## Purpose
                Lost customers, missed targets and slipping launches are exactly what investors most want to hear about early, and founders who hide them usually lose credibility when the truth surfaces a quarter later. Learning a plain pattern (what happened, why, what you are doing and what it means for cash) makes the lowlights section useful rather than painful.

                ## Milestones
                1. Last month's worst event rewritten in the four-part pattern.
                2. Three examples of honest bad news from other founders' published updates collected.
                3. The effect of each lowlight on cash and runway stated in a sentence.
                4. Every lowlight for three months written in the pattern.

                ## Notes
                Bad news should never be the first time an investor hears of something that threatens the company. Call your lead investor before the update goes out.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three consecutive updates contain lowlights written as what happened, why, the response and the effect on cash."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write last month's worst event as what happened, why and what is next"
                - "Collect three examples of honest bad news from published founder updates"
                - "Practise stating the effect of a problem on cash and runway in one line"
                - "Show a draft lowlight to a mentor before it is sent"
            - name: Writing asks investors can act on
              description: |-
                ## Purpose
                An ask for introductions to enterprise customers gets nothing, while an ask for the head of procurement at a regional grocer with 50 or more stores gets replies by lunch. Learning to write asks with a named role, a type of company, a reason and a deadline is the single change that most improves how much help an update brings back.

                ## Milestones
                1. Every ask in the last three updates rewritten with a role, company type, reason and deadline.
                2. No more than three asks in any one update.
                3. A short blurb for each introduction ask that an investor can forward unchanged.
                4. The response rate of the new asks compared with the old ones.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three updates carry no more than three asks each, every one naming a role, company type, reason and deadline."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Rewrite your last three asks with a role, company type and reason"
                - "Write a forwardable two-line blurb for each introduction ask"
                - "Cut the next update to three asks at most"
                - "Compare replies to the new asks with replies to the old ones"
            - name: Study of strong founder updates
              description: |-
                ## Purpose
                Founders who write good updates mostly learned by reading other people's, and a number of investors and founders publish templates and real examples. Collecting ten examples and noting what each does well, from length and chart choice to how the asks are phrased, gives you a style of your own faster than guessing.

                ## Milestones
                1. Ten published investor updates or templates collected.
                2. One line on what each does well and one thing you would not copy.
                3. Three specific changes chosen for your own update.
                4. Those three changes used in the next update.

                ## Notes
                Start from the **Reading queue** template. Ask your own investors which portfolio updates they look forward to; many will share an example with permission.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten example updates have been reviewed with notes, and three named changes appear in your next update."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask two investors which portfolio updates they most enjoy reading"
                - "Collect ten published investor updates or templates in a reading list"
                - "Note what each example does well and one thing you would not copy"
                - "Choose three changes and use them in the next update"
            - name: Charts that show the trend at a glance
              description: |-
                ## Purpose
                Twelve numbers in a table make investors work, while a single line chart on the same axis every month shows growth or a stall in a second. Learning to build two or three simple, consistent charts from the metrics sheet, with labelled axes, a fixed time range and no decoration, makes the metrics section quicker to read and harder to misread.

                ## Milestones
                1. Two or three charts chosen, such as revenue, net burn and cash over twelve months.
                2. Axes labelled, starting at zero where that is honest, and kept the same month to month.
                3. Charts built directly from the metrics sheet so they refresh with the data.
                4. The charts used in three consecutive updates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three consecutive updates use the same two or three charts, built from the metrics sheet with labelled, consistent axes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick the two or three metrics that most need a trend chart"
                - "Build each chart from the metrics sheet with labelled axes"
                - "Fix the time range at twelve months for every chart"
                - "Check each chart reads correctly on a phone screen"
            - name: Cash, burn and runway reporting method
              description: |-
                ## Purpose
                Cash in the bank, net burn and months of runway are the three numbers every investor checks first, and they are also the three most often calculated differently from one month to the next. Learning how your finance lead works out each one, and stating the method once in a footnote, means runway in March can be honestly compared with runway in June.

                ## Milestones
                1. Gross burn, net burn and runway definitions agreed with your finance lead.
                2. A choice recorded on whether burn is one month or a three-month average.
                3. Treatment of undrawn debt, committed but unpaid investment and large one-off costs written down.
                4. A one-line method footnote added to the metrics section.

                ## Notes
                Report runway on current spending, and if you also show a plan-based figure, label it clearly as a plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written method for cash, net burn and runway is agreed with the finance lead and appears as a footnote in every update."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your finance lead how they calculate net burn and runway"
                - "Decide whether burn is one month or a three-month average"
                - "Write how undrawn debt and one-off costs are treated"
                - "Add a one-line method footnote under the cash figures"
            - name: Product progress for non-technical investors
              description: |-
                ## Purpose
                Release notes full of feature names mean little to an angel who invested because they believed in the team, and a vague line about shipping lots means even less. Learning to describe product work by the customer problem it solves and the metric it should move keeps every investor able to follow the story, whatever their background.

                ## Milestones
                1. The last product section rewritten as problem solved, who it helps and the metric it should move.
                2. Internal code names and jargon removed or explained.
                3. One customer quote or short screen recording linked per quarter.
                4. A non-technical investor confirming the section made sense.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three product sections in a row describe each item by customer problem and expected metric, confirmed as clear by a non-technical investor."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Rewrite last month's product section by customer problem solved"
                - "Strike out internal code names and unexplained jargon"
                - "Link one customer quote or short demo recording this quarter"
                - "Ask a non-technical investor whether the section made sense"
            - name: Commentary that explains each metric
              description: |-
                ## Purpose
                Numbers without commentary invite investors to invent their own explanation, usually the worst one available. Practising one or two sentences per metric on what moved it, whether the change was expected and what you will watch next month turns a table into an account of how the business is actually working.

                ## Milestones
                1. One or two sentences of commentary written for each core metric.
                2. Every move larger than an agreed threshold explained.
                3. Expected and unexpected changes labelled as such.
                4. Commentary kept for three updates in a row without the section growing past its word limit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three consecutive updates explain every core metric move above the agreed threshold, within the section's word limit."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set the size of change that always needs an explanation"
                - "Write one or two sentences on what moved each core metric"
                - "Label each change as expected or unexpected"
                - "Trim the commentary back to the section's word limit"
            - name: Cutting the update to a five-minute read
              description: |-
                ## Purpose
                Updates grow a little every month until they take twenty minutes to read and most investors stop opening them. Measuring the current length, cutting anything that would not change an investor's view of the company and moving detail to a linked appendix brings the update back to something people finish.

                ## Milestones
                1. The word count and reading time of the last update measured.
                2. Every paragraph tested against whether it changes an investor's view.
                3. Supporting detail moved to a linked appendix or the quarterly letter.
                4. The next three updates under the agreed word limit.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three consecutive updates come in under the agreed word limit, with any detail moved to a linked appendix."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure the word count and reading time of your last update"
                - "Ask the agent to suggest which paragraphs could be cut or moved"
                - "Move supporting detail into a linked appendix"
                - "Set a word limit and hold the next update to it"
            - name: Annual investor survey on the update
              description: |-
                ## Purpose
                Silence cannot tell you whether investors find the update useful or have filtered it to a folder they never open. A five-question survey once a year, asking what they read, what they skip, what is missing and how they prefer to help, usually shortens the update and sharpens the asks.

                ## Milestones
                1. Five questions written, including what they skip and how they like to help.
                2. The survey sent to every investor with a two-week deadline.
                3. Answers grouped into themes with counts.
                4. Two or three changes announced in the next update.

                ## Notes
                Start from the **Feedback themes** template. Keep it anonymous if you want honest answers about length.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A survey has gone to every investor, the answers are grouped into themes, and two or three changes are announced in an update."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Write five survey questions about reading, skipping and helping"
                - "Send the investor update survey with a two-week deadline @recurring(yearly)"
                - "Group the answers into themes with a count for each"
                - "Announce two or three changes in the following update"
            - name: Prospect version of the update
              description: |-
                ## Purpose
                Investors you met who did not invest often ask you to keep them posted, and a lighter update to them is one of the cheapest ways to warm up the next round. Deciding whether to send one, what it leaves out (detailed financials, customer names, lowlights that need context) and who is on that list keeps prospects well informed without exposing what only shareholders should see.

                ## Milestones
                1. A decision recorded on whether to send a prospect version at all.
                2. A list of what the prospect version always leaves out.
                3. A separate prospect list with a reason each person is on it.
                4. The first prospect version sent, quarterly or monthly as decided.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written decision on a prospect update exists, with a leave-out list and a separate recipient list, and the first version has been sent if chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether prospects should receive a lighter update"
                - "List what the prospect version always leaves out"
                - "Build a separate prospect list with a reason for each name"
                - "Send the first prospect version on the agreed rhythm"
            - name: Investor help map
              description: |-
                ## Purpose
                Each investor can help with different things: one knows every bank in the region, another has hired three engineering leads, a third never makes introductions but answers pricing questions within the hour. A simple map of who can help with hiring, customers, partners, future rounds and specialist questions lets you send each ask privately to the two people most likely to say yes.

                ## Milestones
                1. Every investor listed with the areas they have offered or shown they can help in.
                2. Gaps noted where no investor has the network you need.
                3. Each ask in the next update also sent directly to the two best-placed investors.
                4. The map updated when new investors join.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A help map covering every investor exists and each ask in the last update was also sent directly to two named investors."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each investor with the kinds of help they have offered before"
                - "Mark the gaps where no investor has the network you need"
                - "Send each of next month's asks directly to two best-placed investors"
                - "Add new investors to the map when they join"
            - name: Asks outcome review
              description: |-
                ## Purpose
                After six months of logged asks there is enough evidence to see what investors actually help with and what they ignore. Reviewing the tracker for hit rate by kind of ask and by investor shows whether to change how you ask, whom you ask or what you stop asking the whole list for.

                ## Milestones
                1. Hit rate worked out by kind of ask: hiring, customers, partners, advice, fundraising.
                2. The investors who have helped most and least identified.
                3. One change to how asks are written or routed agreed.
                4. The review repeated each quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A quarterly review records hit rate by kind of ask and one agreed change to how asks are written or routed."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Group the logged asks by kind and count how many were met"
                - "Review the asks tracker hit rate by kind of ask @recurring(quarterly)"
                - "Agree one change to how asks are written or who receives them"
            - name: Sharing investor updates with the team
              description: |-
                ## Purpose
                Employees hear about funding but rarely see the numbers investors see, and the gap breeds rumours when things get hard. Deciding whether to share the investor update, a trimmed version or nothing at all with the team, and writing down why, avoids a forwarded email becoming the way staff first learn about runway.

                ## Milestones
                1. Options written out: full update, trimmed team version, all-hands summary or nothing.
                2. The confidentiality risk of each option checked against your sharing rules.
                3. A decision recorded and explained to the team.
                4. The chosen version sent or presented for two months running.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written decision on what the team sees of the investor update has been explained to staff and followed for two months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write out the options for sharing the update with the team"
                - "Check each option against the update's sharing rules"
                - "Record the decision and explain it at the next team meeting"
                - "Share the chosen version with the team for two months"
            - name: Automating the metrics section
              description: |-
                ## Purpose
                When the metrics section takes three hours of copying from accounting, billing and analytics tools, it is the first thing to slip in a busy month. Connecting the metrics sheet to its sources, or at least to clean scheduled exports, so the charts refresh with one action cuts the monthly work to minutes and removes copy errors.

                ## Milestones
                1. Every manual step in the current metrics pull written down with the time it takes.
                2. Each source connected directly or through a scheduled export.
                3. Charts and month-on-month changes refreshing from one action.
                4. The monthly pull taking under thirty minutes for two months running.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The monthly metrics pull takes under thirty minutes for two consecutive months, with charts refreshing from connected sources."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Time each manual step in this month's metrics pull"
                - "Connect the accounting tool to the metrics sheet or schedule an export"
                - "Connect billing and product analytics the same way"
                - "Run the full pull end to end and time it"
            - name: Updates in the run-up to the next round
              description: |-
                ## Purpose
                Existing investors decide whether to take up their pro-rata, and whether to speak warmly to new funds, largely from the last three updates they read. Planning the three updates before a raise so they show steady progress against stated milestones, and saying plainly when the process will start, makes insiders your earliest supporters instead of surprised bystanders.

                ## Milestones
                1. The milestones promised in earlier updates listed with their current status.
                2. Three updates before launch each reporting progress against those milestones.
                3. The planned raise and its timing mentioned in the update before the process starts.
                4. Lead investors briefed by call before the announcement reaches the full list.

                ## Notes
                Do not let the update turn into a sales pitch. Investors notice when the tone changes the month before a raise.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The three updates before a raise each report progress against earlier milestones, and the raise was flagged before the process opened."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every milestone promised in past updates with its status"
                - "Plan what each of the three pre-raise updates must show"
                - "Call your lead investors before mentioning the raise to the list"
                - "Name the planned raise and timing in the update before launch"
            - name: Announcing a closed round to existing investors
              description: |-
                ## Purpose
                Existing investors should hear that a new round has closed from you, before they read it in the press or a co-investor's post. A short dedicated update giving who led, the amount, how it changes the plan and an offer to share the updated cap table keeps them feeling like partners rather than spectators.

                ## Milestones
                1. The announcement timed to reach investors before any public news.
                2. Lead, amount, use of funds and changes to the plan stated in a few lines.
                3. The updated cap table offered to anyone who asks.
                4. Investors who helped with the round thanked by name.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A round announcement reached every investor before public news, naming the lead, amount and plan changes and thanking those who helped."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Fix a send time ahead of any press release or social post"
                - "Write the lead, amount and planned use of funds in five lines"
                - "Offer the updated cap table to any investor who asks"
                - "Thank by name the investors who helped close the round"
            - name: Leadership change announcement to investors
              description: |-
                ## Purpose
                A co-founder leaving, a senior hire resigning or a chief executive stepping back is news investors must hear promptly and from the company, never through a networking site. A short special update, agreed with the person involved and checked with your lawyer where needed, gives the facts, the reason as far as it can be shared, the cover plan and what changes.

                ## Milestones
                1. The wording agreed with the person leaving or changing role.
                2. Lead investors and any board members told by call first.
                3. A special update sent stating the facts, cover plan and next steps.
                4. Any effect on equity vesting or roles flagged for the lawyer, not set out in the update.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Lead investors were called first and a special update with agreed wording and a cover plan reached all investors within a week of the change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the announcement wording with the person involved"
                - "Call lead investors and board members before the email goes out"
                - "Send a special update with the facts and the cover plan"
                - "Ask your lawyer about any vesting or role changes before writing about them"
            - name: Runway warning update
              description: |-
                ## Purpose
                When runway drops below about six months or a key plan fails, investors can only help if they know while there is still time to act: a bridge, introductions to buyers, cost advice. A special update that states the cash position plainly, sets out the options being weighed and asks for specific help is far better received than the same news three months later.

                ## Milestones
                1. The cash position and runway on current spending confirmed with your finance lead.
                2. Two or three options set out, such as cutting costs, raising a bridge or exploring a sale.
                3. Lead investors called before the update reaches the list.
                4. Specific asks made, with a date by which help is needed.

                ## Notes
                Agree the runway number with your finance lead before writing anything. If insolvency is a possibility, take legal advice on directors' duties first.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A runway update with confirmed cash figures, two or three options and dated asks reached investors with at least six months of runway remaining."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm cash and runway on current spending with your finance lead"
                - "Write out two or three options with their effect on runway"
                - "Call your lead investors before sending the runway update"
                - "Make specific asks with the date help is needed by"
            - name: Special edition for a launch or major win
              description: |-
                ## Purpose
                Most news can wait for the monthly update, but a big launch, a flagship customer or major press coverage is worth a short note on the day, with one clear way investors can help spread it. Agreeing when a special edition is justified, and keeping it to five lines, stops these notes from becoming noise.

                ## Milestones
                1. A written rule for when news justifies a special edition, such as fewer than four a year.
                2. A five-line format with the news, why it matters and one way to help.
                3. Ready-to-share text or a link included for investors who want to amplify it.
                4. The news summarised again briefly in the next monthly update.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written rule for special editions exists and every special edition sent kept to five lines with one clear way to help."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the rule for when news earns a special edition"
                - "Draft a five-line special edition format"
                - "Prepare a shareable link or post for investors to pass on"
                - "Mention the news again briefly in the next monthly update"
            - name: Restarting updates after a long silence
              description: |-
                ## Purpose
                Many founders send three enthusiastic updates and then go quiet for a year, often because things got hard. Restarting with a short, honest note (what happened in the gap, where the numbers are now and when the next update will arrive) repairs more trust than another month of waiting for good news.

                ## Milestones
                1. The gap acknowledged in one plain sentence, without lengthy apology.
                2. Current cash, runway and core metrics reported alongside the last figures investors saw.
                3. The main events of the silent months summarised in five lines or fewer.
                4. The next update date stated and met.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A restart update reporting current figures against the last ones shared has been sent, and the next update went out on its stated date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the last update you sent and the figures it reported"
                - "Write five lines on what happened in the silent months"
                - "Report today's cash, runway and core metrics beside the old figures"
                - "State the next update date and put it in the calendar"
            - name: Investor updates for a solo founder
              description: |-
                ## Purpose
                Working alone means nobody to read the draft, cover a busy month or notice an update is overdue. A stripped-down routine with a sixty-minute drafting limit, a short fixed format, an adviser or friendly investor as second reader and a three-line fallback for the hardest months keeps the habit alive on very little time.

                ## Milestones
                1. A sixty-minute limit set for drafting each update.
                2. An adviser or investor agreed as monthly second reader.
                3. A three-line fallback update written for months with no time.
                4. Six months of updates sent without a gap.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly updates have been sent by a solo founder, each drafted within sixty minutes and read by an agreed adviser."
                cadence: rolling
              tasks:
                - "Ask an adviser or investor to read each draft before sending"
                - "Write a three-line fallback update for months with no time"
                - "Set a timer for sixty minutes when drafting each update"
            - name: Updates for a pre-revenue or deep-tech company
              description: |-
                ## Purpose
                Companies building hardware, a medical product or research-heavy software can go two or three years without revenue, and revenue-shaped updates make it look stalled. Choosing progress measures that fit the work, such as technical milestones, regulatory steps, pilot results and cash spent per milestone, lets investors see real movement month by month.

                ## Milestones
                1. Four to six non-revenue progress measures chosen and defined.
                2. A technical milestone chart showing planned versus actual dates.
                3. Cash spent against each milestone reported quarterly.
                4. Plain-language explanations for every technical term used.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The update reports four to six defined non-revenue measures and a planned-versus-actual milestone chart for three consecutive months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose four to six progress measures that fit pre-revenue work"
                - "Build a chart of planned against actual milestone dates"
                - "Report cash spent against each technical milestone"
                - "Add a plain-language line for every technical term"
            - name: Updates for friends, family and first angels
              description: |-
                ## Purpose
                Relatives and small angels who backed you early often do not know what churn, burn or recurring revenue mean, and a fund-style update can leave them confused or anxious. Adding a short glossary, explaining what a good or bad month looks like and offering a call once a year respects people who invested in you before anyone else would.

                ## Milestones
                1. A glossary of the terms the update uses, in plain words.
                2. One line each month on whether it was a good, steady or hard month, and why.
                3. A once-a-year call or gathering offered to small investors.
                4. Any personal questions about their investment answered privately, not in reply-all.

                ## Notes
                Never give friends or family a view on what their shares are worth or whether to buy more. Point them to their own adviser.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The update links a plain-language glossary, every issue states whether the month was good, steady or hard, and a yearly call has been offered."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a plain-language glossary of the terms your update uses"
                - "Add one line rating the month as good, steady or hard"
                - "Offer small investors a yearly call or informal gathering"
                - "Answer personal investment questions privately by phone or direct email"
            - name: Investor updates through a pivot
              description: |-
                ## Purpose
                During a pivot the old metrics stop meaning anything and the new ones are too small to impress, which tempts founders to go quiet exactly when investors are most worried. Updates that explain the reason for the change, what was learned, the new hypothesis and the evidence that will prove or kill it within a set number of months keep investors with you while the story is rewritten.

                ## Milestones
                1. Lead investors consulted before the pivot is announced to everyone.
                2. A pivot update stating the reason, the lessons and the new hypothesis.
                3. New metrics defined, with the old ones retired openly rather than dropped.
                4. A decision date set by which the new direction will be judged.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A pivot update with reason, lessons, hypothesis, new metrics and a decision date was sent after lead investors were consulted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Talk through the pivot with lead investors before announcing it"
                - "Write the reason, lessons and new hypothesis in one page"
                - "Retire the old metrics openly and define the new ones"
                - "Set the date by which the new direction will be judged"
            - name: Owner updates for a company not raising again
              description: |-
                ## Purpose
                Founders who reach profitability, or choose to grow on revenue, sometimes stop updating because there is no next raise to prepare for. Investors still own part of the company and still care about profit, cash, any future distributions and the eventual exit, so a quarterly rhythm focused on those keeps the relationship healthy for the long haul.

                ## Milestones
                1. The move to quarterly owner updates announced with the reason.
                2. A format centred on profit, cash, reinvestment and risks agreed.
                3. Any plans for distributions or buybacks described only after advice from your accountant and lawyer.
                4. Four quarterly owner updates sent in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly owner updates focused on profit, cash and reinvestment were sent over twelve months."
                cadence: rolling
              tasks:
                - "Tell investors why updates are moving to a quarterly owner format"
                - "Define the owner update sections around profit, cash and risks"
                - "Send the quarterly owner update on profit, cash and reinvestment @recurring(quarterly)"
            - name: Disclosure and forward-looking statements check
              description: |-
                ## Purpose
                Once a company has dozens of shareholders, raised through a crowdfunding platform or is moving toward a listing, what goes in an update can carry legal weight: forecasts read as promises, information given to some holders and not others, or statements that conflict with an offering document. A yearly review of the template, forecast wording and recipient list with your lawyer sets rules suited to your stage and jurisdiction.

                ## Milestones
                1. The update template, a recent issue and the recipient list sent to your lawyer.
                2. Written guidance on forecast wording and any cautionary language needed.
                3. A rule on whether different holder groups may receive different information.
                4. The template changed to match, with the date of review noted.

                ## Notes
                This is a question for counsel in your jurisdiction. The project is about preparing the right questions and recording the answers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written guidance from your lawyer on forecasts and selective disclosure is recorded and the template updated, with a review date."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Send your lawyer the template, a recent update and the recipient list"
                - "Ask how forecasts should be worded in investor updates"
                - "Ask whether holder groups may receive different information"
                - "Repeat the disclosure review with your lawyer @recurring(yearly)"
            - name: Benchmarking update metrics against stage peers
              description: |-
                ## Purpose
                Investors read your growth rate against the hundreds of companies they see, so it helps to know roughly where you sit before they tell you. Comparing your core metrics with published benchmarks for your stage and business model, and saying in the update how you compare, shows you understand the bar you will be judged by.

                ## Milestones
                1. Two or three credible published benchmark sources found for your stage and model.
                2. Your growth, margin, burn multiple and retention placed against them.
                3. A short benchmark paragraph added to the quarterly letter.
                4. The benchmarks refreshed once a year.

                ## Notes
                Benchmarks vary widely by source, region and year. Quote the source and date, and treat them as a rough guide.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly letter includes a sourced, dated comparison of four core metrics with published benchmarks for the company's stage."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Find two or three published benchmark reports for your stage"
                - "Place your growth, margin, burn multiple and retention against them"
                - "Write a short benchmark paragraph for the quarterly letter"
                - "Refresh the benchmark comparison with the latest reports @recurring(yearly)"
            - name: Cohort retention chart in the quarterly letter
              description: |-
                ## Purpose
                Headline revenue growth can hide customers leaving almost as fast as new ones arrive, and experienced investors will ask for cohorts in the next round anyway. Adding a simple cohort retention chart to the quarterly letter, with a consistent definition of a cohort and of retention, shows the quality of growth long before diligence starts.

                ## Milestones
                1. Cohort and retention definitions agreed: by sign-up month, by revenue or by logo.
                2. A cohort table built from billing or product data.
                3. A chart and two lines of commentary added to the quarterly letter.
                4. The same definitions used for four quarters in a row.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four consecutive quarterly letters include a cohort retention chart built on the same written definitions."
                cadence: rolling
              tasks:
                - "Agree whether cohorts are measured by customers or revenue"
                - "Build a cohort table from billing or product data"
                - "Refresh the cohort chart for the quarterly letter @recurring(quarterly)"
            - name: Update archive as a fundraising track record
              description: |-
                ## Purpose
                A run of twelve on-time updates that hit most stated milestones is some of the strongest evidence a founder can bring to the next raise, because it was written before anyone was selling. Compiling the promises made in past updates, which were met, which were missed and the explanation for each, gives the next round a credible record of saying and doing.

                ## Milestones
                1. Every milestone or forecast stated in past updates listed with its date.
                2. Each marked as met, late or missed, with a one-line reason.
                3. A one-page track record summary written for new investors.
                4. Permission agreed on whether past updates may be shared with prospective investors.

                ## Notes
                Include the misses. A record with only hits reads as edited.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page track record listing every milestone from past updates as met, late or missed is ready before the next raise."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to list every milestone and forecast in past updates"
                - "Mark each one as met, late or missed with a one-line reason"
                - "Write a one-page track record summary for new investors"
                - "Decide which past updates may be shown to prospective investors"
            - name: Handing update drafting to a finance or operations lead
              description: |-
                ## Purpose
                As the company grows past thirty or forty people, the founder writing every word of the update becomes a bottleneck, yet investors still want to hear the founder's voice. Moving the metrics, charts and first draft to a finance or operations lead, while the chief executive writes the summary, lowlights and asks, keeps quality up and the founder's time down.

                ## Milestones
                1. Sections split between the drafting lead and the chief executive in writing.
                2. A handover meeting with the outline, metric definitions and sharing rules covered.
                3. Two updates produced jointly with the founder reviewing every line.
                4. The founder's monthly time on the update under ninety minutes.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two consecutive updates were drafted by a named lead with the founder writing the summary, lowlights and asks in under ninety minutes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Decide which update sections the finance or operations lead will draft"
                - "Walk the lead through the outline, definitions and sharing rules"
                - "Produce two updates together with the founder reviewing every line"
                - "Time the founder's share of the next update"
---

# Monthly Investor Updates

This area is for founders who have taken outside money, from a handful of angels to a seed or Series A syndicate, and want those investors informed and useful between rounds. It starts with the foundations (who receives the update, how often, a fixed outline, defined metrics, confidentiality and information rights), then the monthly machinery of snapshot, draft, review, send, replies and asks, followed by the writing skills, the improvements and decisions, the dated special updates, situations from solo founders to pivots, and the specialist work of disclosure checks, benchmarks and turning the archive into a track record.

What repeats is a Friday note of wins and setbacks, a monthly run of metrics snapshot, draft, review, send, archive, reply round and asks chase, a quarterly letter, engagement review, recipient list check and asks outcome review, and a yearly annual letter, investor survey, information rights check and disclosure review. The Metrics log, Purchase decision, Reading queue and Feedback themes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
