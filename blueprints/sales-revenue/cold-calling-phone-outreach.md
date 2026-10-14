---
id: sales-revenue.cold-calling-phone-outreach
name: Cold Calling & Phone Outreach
description: "Call blocks that actually happen, openers and talk tracks that earn a second sentence, gatekeepers and voicemail handled well, and the calling rules and routines that turn dials into booked meetings."
category: business
version: 1.0.0
tags: [sales-revenue, cold-calling-phone-outreach, small-business, team, freelancer, cold-calling, phone-scripts, appointment-setting]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - metrics-log
    - habit-tracker
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cold Calling & Phone Outreach
          description: "Planning call blocks, writing openers and talk tracks, and handling gatekeepers and voicemail so phone outreach turns into real sales conversations."
          projects:
            - name: Calling goal worked back from meetings needed
              description: |-
                ## Purpose
                Before anyone picks up the phone, it helps to know how many booked meetings the business actually needs each month and what that means in dials. Working back from a revenue or client target to meetings, conversations and dials, using rough ratios until your own numbers arrive, turns calling from a vague intention into a weekly figure you can plan a diary around.

                ## Milestones
                1. A monthly target for new meetings booked by phone, tied to a revenue or client goal.
                2. Starting assumptions written down for connect rate, conversation rate and meeting rate.
                3. A weekly dial figure and the number of call blocks it needs.
                4. The figures dated, with a note to replace the assumptions after the first 200 dials.

                ## Notes
                Early ratios are guesses. Treat them as placeholders and swap them for your own as soon as you have a few weeks of logged calls.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written monthly meeting target, with the weekly dials and call blocks needed to reach it and the assumptions behind each step."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down how many new clients or deals you need next quarter"
                - "Estimate how many first meetings it usually takes to win one"
                - "Turn the meeting figure into weekly conversations and dials"
                - "Block the call sessions that figure needs in your diary"
            - name: Calling rules check for every country you call
              description: |-
                ## Purpose
                Cold calling is regulated, and the rules change by country and by whether you are calling businesses or consumers: do-not-call registers, permitted hours, caller ID requirements and consent to record all vary. Writing down what applies to you, checked against each regulator's own guidance, protects the business from fines and complaints before the first list is dialled.

                ## Milestones
                1. A list of every country, state or province on your call list.
                2. For each one, the regulator's guidance on business and consumer calls noted with its source link.
                3. Do-not-call register, calling hours, caller ID and recording consent rules recorded per country.
                4. Open questions answered by a lawyer or trade body and the answers filed.

                ## Notes
                Start from the **Compliance control** template. Examples of registers include the UK Telephone Preference Service and Corporate TPS, the US National Do Not Call Registry and Canada's National DNCL; read the current rules yourself rather than relying on a summary.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated rules sheet covering registers, calling hours, caller ID and recording consent for every country called, with sources linked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every country and state or province your prospects sit in"
                - "Find the regulator's official guidance on unsolicited sales calls for each"
                - "Record whether recording a call needs one party or every party to agree"
                - "Send any unclear points to a lawyer or your trade association"
                - "Re-check the calling rules for each country you call @recurring(yearly)"
            - name: Headset, quiet room and calling desk set-up
              description: |-
                ## Purpose
                Freelancers and small teams often make calls through a laptop microphone in a noisy kitchen or open office, and prospects hear it in the first second. A reliable headset, a room or corner with a door, and a desk laid out with the list, talk track and calendar in view remove the small frictions that make every dial feel harder.

                ## Milestones
                1. A headset tested on a recorded call and judged clear by a colleague or friend.
                2. A regular calling spot chosen where background noise and interruptions are low.
                3. Screen layout settled with the call list, talk track and calendar open together.
                4. A five-line checklist of what to have ready before each block, kept on the desk.

                ## Notes
                Standing up for calls tends to make your voice carry better. Mute notifications on every device for the length of the block.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested headset, a fixed calling spot and a pre-block checklist in place, confirmed by one clear recorded test call."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record a one-minute test call through your current headset and play it back"
                - "Pick a calling spot with a door or the least foot traffic"
                - "Arrange your screen so the list, talk track and calendar fit side by side"
                - "Write a five-line checklist of what to have ready before each block"
            - name: Caller ID registration and spam label check
              description: |-
                ## Purpose
                A growing share of mobile users never see your name at all, only a warning such as Spam Likely, and they let it ring out. Checking how your number appears on the main networks, registering it where free caller registration exists and setting a recognisable business caller name stops good lists failing because the network flagged you.

                ## Milestones
                1. The outbound number tested on at least two networks and how it displays recorded.
                2. The number registered with the free caller registration services the main carriers use, where your country has them.
                3. A business caller name set with your phone provider.
                4. A written rule for when to rest or retire a flagged number.

                ## Notes
                Bursts of many short calls from one number are a common cause of flags. Spreading calls through the day helps more than buying lots of numbers.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The outbound number shows a business name with no spam warning on two tested networks, and registration confirmations are filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Call two friends on different networks and ask what your number shows as"
                - "Ask your phone provider how to set a business caller name"
                - "Register the number with the carriers' free caller registration portals where they exist"
                - "Check how your number displays on two networks @recurring(monthly:9)"
            - name: First call list of 100 direct dials
              description: |-
                ## Purpose
                Calling switchboards from a generic list wastes most of a session on transfers and dead ends. A first list of 100 people who fit your customer profile, each with a direct line or mobile, a role and one reason you are calling them, gives you enough conversations to learn from in the first fortnight.

                ## Milestones
                1. A list of 100 named contacts who match your agreed customer profile.
                2. Each contact with a direct dial or mobile, job title, company and time zone.
                3. Every number checked against the relevant do-not-call register.
                4. A one-line reason to call written against at least the first 30 names.

                ## Notes
                Quality beats size here. Fifty correct direct dials will produce more conversations than 500 switchboard numbers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A call list of 100 profile-fit contacts with direct numbers, screened against do-not-call registers, ready in the CRM or a spreadsheet."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the three filters that decide who goes on the list"
                - "Pull 100 contacts that pass the filters into one sheet or CRM view"
                - "Screen every number against the do-not-call register for its country"
                - "Add a one-line reason to call next to the first 30 names"
            - name: Thirty-second opener script
              description: |-
                ## Purpose
                The first half-minute decides whether a cold call becomes a conversation or a hang-up, and most callers either ramble or rush into a pitch. A short written opener that says who you are, why you picked this person and ends with a question gives you something steady to say when nerves arrive.

                ## Milestones
                1. An opener under 30 seconds read aloud, covering name, company, reason for the call and a question.
                2. Two alternative first lines written for different buyer roles.
                3. The opener tried on five friendly listeners and trimmed after their reactions.
                4. The final version printed or pinned beside the phone.

                ## Notes
                Skip the how are you today line. A clear reason for the call, said plainly, tends to earn more patience than charm.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written opener that runs under 30 seconds aloud, with two role variants, tried on five listeners before live use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your opener in four short sentences"
                - "Time yourself reading it aloud and cut anything past 30 seconds"
                - "Draft one variant for a manager and one for an owner or director"
                - "Try the opener on five colleagues or friends and note where they drift"
            - name: Call outcome codes and call log
              description: |-
                ## Purpose
                Without consistent outcomes, a week of calling leaves only a vague feeling of how it went. A short set of codes, such as no answer, voicemail, gatekeeper, wrong number, conversation, call back and meeting booked, logged against every dial, gives you the raw material for every later decision about lists, timing and scripts.

                ## Milestones
                1. Seven to ten outcome codes defined with a one-line meaning each.
                2. The codes set up as a picklist in your CRM or a dropdown in a spreadsheet.
                3. A next-step date required for every call back and conversation.
                4. One full call block logged using the codes without gaps.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An outcome picklist of seven to ten codes is live, and one complete call block has every dial logged against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft your outcome codes and what each one means"
                - "Add the codes as a dropdown in your CRM or call sheet"
                - "Make a next-step date compulsory for call backs and conversations"
                - "Log a full call block with the codes and reword any that feel unclear"
            - name: Booking path from call to calendar invite
              description: |-
                ## Purpose
                Meetings agreed on the phone often vanish because the invite goes out an hour later with the wrong time zone or no agenda. Having open slots ready to offer, an invite template and a short confirmation message means the meeting is in the prospect's diary before you hang up.

                ## Milestones
                1. Six to ten meeting slots held open each week for phone-booked meetings.
                2. An invite template with title, agenda line, video link and your direct number.
                3. A two-line confirmation message ready to send during the call.
                4. Time zone handling checked by booking a test meeting across two zones.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An invite template, a confirmation message and weekly open slots are ready, and a test booking across two time zones landed correctly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Block recurring open slots in your calendar for booked meetings"
                - "Write an invite template with an agenda line and video link"
                - "Draft a two-line confirmation message to send while still on the call"
                - "Book a test meeting with a friend in another time zone"
            - name: First five call blocks at low stakes
              description: |-
                ## Purpose
                Call reluctance is real even for experienced sellers, and the first sessions decide whether phone outreach becomes a habit or a guilty to-do. Five short blocks over two weeks, aimed at conversations rather than meetings, let you get through the awkward first calls on prospects who fit but are not your dream accounts.

                ## Milestones
                1. Five call blocks of 45 to 60 minutes completed within two weeks.
                2. At least 20 dials made in each block.
                3. A one-line lesson written after every block.
                4. The opener changed at least once based on what you heard.

                ## Notes
                Start with your least important prospects so early mistakes cost nothing. Save the accounts you most want for week three.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five logged call blocks of at least 20 dials each within 14 days, with a written lesson after each one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose 100 lower-priority prospects to practise on first"
                - "Put five 45-minute call blocks in the diary over the next two weeks"
                - "Write one lesson in your log at the end of each block"
                - "Rewrite one line of the opener after the third block"
            - name: Calling baseline from your first 200 dials
              description: |-
                ## Purpose
                Published averages for connect and meeting rates vary wildly by market, so your own numbers are the only ones worth planning on. After 200 logged dials you can calculate connect rate, conversation rate and meetings per hundred dials, and replace the guesses in your calling goal with figures that reflect your list and your voice.

                ## Milestones
                1. 200 dials logged with outcome codes.
                2. Connect rate, conversation rate and meetings per 100 dials calculated.
                3. The best and worst performing hour of the day noted.
                4. The calling goal updated with the real ratios.

                ## Notes
                Start from the **Metrics log** template. Count a connect only when you reach the named person, not a receptionist.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A metrics log showing connect rate, conversation rate and meetings per 100 dials from at least 200 logged calls, with the calling goal revised."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set up a metrics log with columns for dials, connects, conversations and meetings"
                - "Pull the outcome counts once 200 dials are logged"
                - "Calculate the three rates and note the hour with the most connects"
                - "Replace the assumptions in your calling goal with the real ratios"
            - name: Protected call block routine
              description: |-
                ## Purpose
                Calling loses to email, admin and client work unless it has fixed time that nothing else can take. Two blocks a week at the same times, with the list prepared beforehand and the door shut, is the routine behind most phone-booked meetings in small businesses.

                ## Milestones
                1. Recurring call blocks fixed in the diary on set days and times.
                2. The list for each block prepared the day before.
                3. A month with at least 80 per cent of planned blocks completed.
                4. Block length adjusted to what you can sustain without losing quality.

                ## Notes
                Late morning and late afternoon often suit business buyers, but your own baseline beats any rule of thumb.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 80 per cent of scheduled call blocks completed in each of the last four weeks, as recorded in the call log."
                cadence: rolling
              tasks:
                - "Choose two fixed weekday slots for calling and add them as recurring events"
                - "Prepare the list for each block the afternoon before"
                - "Run your scheduled call block with notifications off @recurring(weekly:tue,thu)"
                - "Count completed blocks at the end of each month and note why any were missed"
            - name: Weekly call list top-up
              description: |-
                ## Purpose
                Lists run dry faster than expected: a block of 40 dials can use up 15 names for good once wrong numbers, leavers and opt-outs are removed. Adding fresh, researched names every week keeps each session full and stops calling from stalling while you hunt for numbers mid-block.

                ## Milestones
                1. A weekly target for new names set from your dial rate.
                2. At least one full week of blocks covered by the list at all times.
                3. Leavers, wrong numbers and opt-outs removed each week.
                4. New names screened against do-not-call registers before they enter the list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The call list holds at least one week of researched, screened names at every Monday check for a full month."
                cadence: rolling
              tasks:
                - "Work out how many new names a week your blocks consume"
                - "Add and screen this week's new names before the first block @recurring(weekly:mon)"
                - "Remove leavers, wrong numbers and opt-outs from the list"
                - "Note which source gave the most correct direct dials"
            - name: Callback promises kept the same day
              description: |-
                ## Purpose
                A prospect who says call me next Tuesday after three has given you one of the warmest results a cold call can produce, and it is wasted if the call happens Thursday or never. A daily look at promised callbacks, each set as a timed reminder, turns these half-yeses into conversations and shows the prospect you do what you say.

                ## Milestones
                1. Every promised callback logged with date, time and time zone.
                2. A daily check of today's callbacks before the first block.
                3. No callback more than 15 minutes late for a full month.
                4. Callbacks that became meetings counted separately in your numbers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every promised callback in the last month was made within 15 minutes of the agreed time, as shown in the call log."
                cadence: rolling
              tasks:
                - "Move every open callback into your calendar as a timed reminder"
                - "Clear today's promised callbacks before anything else @recurring(daily)"
                - "Add a callback tag so these calls can be counted separately"
                - "Call any missed callbacks first thing the next morning with an apology"
            - name: Six-touch call attempt cadence per prospect
              description: |-
                ## Purpose
                Most cold calls are not answered the first time, and many callers give up after one or two tries while others ring daily until they annoy. A set pattern, such as six attempts across three weeks at different times of day with two voicemails, gives each prospect a fair chance to pick up and tells you when to stop.

                ## Milestones
                1. A written cadence with the number of attempts, spacing and voicemail points.
                2. Attempt numbers tracked for every prospect on the list.
                3. A rule for when a prospect is closed out and when they can return.
                4. Connect rate by attempt number reviewed after one month.

                ## Notes
                Vary the time of day between attempts. Calling the same person at nine every morning teaches them to ignore your number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written six-touch cadence is in use, attempt numbers are tracked for every prospect, and connect rate by attempt has been reviewed once."
                cadence: rolling
              tasks:
                - "Write your cadence with attempt days, times and voicemail points"
                - "Add an attempt counter field to each prospect record"
                - "Close out prospects who reached the final attempt with no contact @recurring(weekly:wed)"
                - "Check which attempt number produced the most connects after a month"
            - name: Do-not-call scrub and opt-out record
              description: |-
                ## Purpose
                A single call to a registered or opted-out number can bring a complaint, and in some countries a fine per call. Scrubbing lists against the registers before use, recording every please do not call me again on the day and keeping that record as long as your regulator expects keeps phone outreach inside the rules you documented.

                ## Milestones
                1. A single opt-out list that every caller and every list source is checked against.
                2. Each new list scrubbed against the relevant registers before its first dial.
                3. Opt-out requests recorded on the day they are made, with date and caller.
                4. The retention period for opt-out records confirmed from your regulator's guidance.

                ## Notes
                Registers change constantly. A list scrubbed three months ago may not be clean today.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every list dialled in the last month shows a recent scrub date within your register's required window, and every opt-out is logged with date and caller."
                cadence: rolling
              tasks:
                - "Create one opt-out list that every caller checks"
                - "Add a scrub date column to every call list"
                - "Scrub active call lists against the do-not-call registers @recurring(monthly:3)"
                - "Record each opt-out on the day with the date and caller name"
            - name: Friday call numbers review
              description: |-
                ## Purpose
                Fifteen minutes on Friday with the week's dials, connects, conversations and meetings shows whether a quiet week came from too few calls, a tired list or a weak opener. Catching that weekly, rather than at the end of a quarter, means next week's blocks fix the real problem.

                ## Milestones
                1. A one-line weekly summary of dials, connects, conversations and meetings.
                2. The week's numbers compared with your baseline ratios.
                3. One change chosen for next week based on the biggest gap.
                4. Four consecutive weekly summaries kept in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive Friday summaries recorded, each with the week's four numbers and one change chosen for the following week."
                cadence: rolling
              tasks:
                - "Write the week's dials, connects, conversations and meetings in your log @recurring(weekly:fri)"
                - "Compare each rate with your baseline"
                - "Pick the one change most likely to close the biggest gap"
                - "Add that change to the plan for Monday's first call block"
            - name: Day-before meeting confirmation calls
              description: |-
                ## Purpose
                Meetings booked from cold calls have higher no-show rates than inbound ones, because the prospect agreed under mild pressure and has since forgotten why. A short call or message the day before, restating the reason and offering to move it if needed, saves the slot and often reveals the real level of interest.

                ## Milestones
                1. A short confirmation script and message written.
                2. Every phone-booked meeting confirmed the working day before.
                3. No-shows recorded alongside the confirmation outcome.
                4. No-show rate compared before and after confirmations began.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every phone-booked meeting for a month was confirmed the day before, and the no-show rate before and after is recorded."
                cadence: rolling
              tasks:
                - "Write a three-line confirmation script that restates the reason for the meeting"
                - "Confirm tomorrow's phone-booked meetings by call or message @recurring(daily)"
                - "Record each no-show with whether it was confirmed"
                - "Compare your no-show rate before and after confirmations started"
            - name: Monthly talk track refresh from real calls
              description: |-
                ## Purpose
                Talk tracks go stale as the market, your offer and the questions prospects ask all shift. Once a month, gathering the phrases that earned a second sentence, the questions that kept coming up and the lines that fell flat, then updating the track, keeps your calls sounding like this month rather than last year.

                ## Milestones
                1. A running note of lines that worked and lines that failed, filled in during blocks.
                2. The three most common prospect questions of the month written down.
                3. The talk track updated and dated.
                4. Old versions kept so you can see what changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The talk track carries a revision date from the last 31 days and a change note drawn from that month's calls."
                cadence: rolling
              tasks:
                - "Start a running note for lines that worked and lines that fell flat"
                - "Note every question prospects asked more than once this month"
                - "Update and date the talk track from the month's notes @recurring(monthly:18)"
                - "Archive the previous version alongside the new one"
            - name: Rejection recovery and energy routine
              description: |-
                ## Purpose
                Ten hang-ups in a row wear anyone down, and the drop in energy is audible on the eleventh call. A small routine between calls and after blocks, such as a pause, a stretch, a glass of water and noting one small win, keeps your voice steady and makes calling sustainable for months instead of a fortnight.

                ## Milestones
                1. A two-minute reset chosen for use after a rough call.
                2. A short break built in after every 45 minutes of calling.
                3. One win or lesson written after each block for a month.
                4. A habit tracker showing the routine kept on most calling days.

                ## Notes
                Start from the **Habit tracker** template. Most people on a cold call are saying no to the interruption, not to you.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A habit tracker shows the reset routine and a written win after at least three quarters of call blocks over four weeks."
                cadence: rolling
              tasks:
                - "Choose a two-minute reset to use after a hard call"
                - "Set a timer for a short break after every 45 minutes of dialling"
                - "Write one win or lesson after each block in your tracker"
                - "Read back the week's wins before Thursday's first call @recurring(weekly:thu)"
            - name: Quarterly phone outreach programme review
              description: |-
                ## Purpose
                Every quarter is a natural point to ask whether phone outreach is still earning its hours compared with your other channels. Looking at meetings booked, meetings that became real opportunities and hours spent tells you whether to call more, call differently or move the time elsewhere.

                ## Milestones
                1. Hours spent calling in the quarter estimated from your diary.
                2. Meetings booked and meetings that became real opportunities counted.
                3. Hours per opportunity compared with your other outreach channels.
                4. A decision recorded to increase, keep or reduce calling next quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A quarterly review records hours spent, meetings booked, opportunities created and a written decision on next quarter's calling time."
                cadence: cyclic
              tasks:
                - "Total the hours spent in call blocks last quarter"
                - "Count meetings booked and how many became real opportunities"
                - "Compare hours per opportunity with your other outreach channels"
                - "Hold the phone outreach review and record the decision @recurring(quarterly)"
            - name: Ninety-second prospect research before dialling
              description: |-
                ## Purpose
                Callers either research nothing and sound generic, or spend 20 minutes per prospect and make six calls a morning. A fixed 90-second check of the person's role, a recent company change and one likely problem gives you a specific reason for the call without wrecking your dial rate.

                ## Milestones
                1. A three-item research checklist written for use before each call.
                2. Research timed on 20 prospects and kept under two minutes on average.
                3. A one-line hook written for each researched prospect.
                4. Meeting rates on calls with a hook compared with calls without one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty prospects researched in under two minutes each on average, each with a written hook, and results compared with unresearched calls."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your three-item research checklist"
                - "Time yourself researching ten prospects with a stopwatch"
                - "Write a one-line hook for each from what you found"
                - "Batch the research for tomorrow's block in one sitting"
            - name: Permission-based and pattern-interrupt openers
              description: |-
                ## Purpose
                Two opener styles dominate modern cold calling: asking permission (I know this is out of the blue, can I take 30 seconds to say why I called?) and naming the interruption honestly to break the script the prospect expects. Practising both until they sound natural lets you choose the one that suits your voice and your buyers instead of copying someone else's.

                ## Milestones
                1. Both opener styles written in your own words.
                2. Each style rehearsed aloud until delivered without reading.
                3. Each style used on at least 25 live calls and tagged in the log.
                4. A preferred default chosen with the reason noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each opener style used on at least 25 logged calls, with a chosen default and the reason for it recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a permission-based opener in your own words"
                - "Write a pattern-interrupt opener that names the cold call honestly"
                - "Rehearse both aloud until you can say them without the page"
                - "Tag 25 calls with each opener style in your log"
            - name: Working with gatekeepers and receptionists
              description: |-
                ## Purpose
                Receptionists and assistants are paid to protect busy people's time, and treating them as obstacles gets you blocked for good. Being brief, honest and polite, asking for help rather than demanding a transfer and learning their name often turns them into the person who tells you when the buyer is free.

                ## Milestones
                1. A short gatekeeper script asking for help by role or name.
                2. Honest answers prepared for what is it regarding and are they expecting your call.
                3. Gatekeeper names recorded against accounts in the call log.
                4. Transfer rate through gatekeepers measured over 30 attempts.

                ## Notes
                Never claim to be expected or to be returning a call when you are not. It may work once and it ends the account.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A gatekeeper script with honest answers to the common questions is in use, and the transfer rate over 30 gatekeeper calls is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write how you will ask a receptionist for help in one sentence"
                - "Prepare honest replies to what is it regarding and are they expecting you"
                - "Add a gatekeeper name field to your call log"
                - "Track transfers across your next 30 gatekeeper calls"
            - name: Voicemails that get called back
              description: |-
                ## Purpose
                Most cold calls end at voicemail, and a rambling message wastes the one chance to be remembered. A voicemail under 25 seconds with your name, a specific reason, your number said twice and a pointer to a short email you are about to send is far more likely to be returned or recognised next time.

                ## Milestones
                1. Two voicemail scripts under 25 seconds, one for an early attempt and one for the last.
                2. Both recorded and played back to check pace and clarity.
                3. Every voicemail logged so returned calls can be counted.
                4. Return rate measured over 50 voicemails.

                ## Notes
                Say your number slowly, twice. Many returned calls are lost because the number could not be caught.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two voicemail scripts under 25 seconds are in use and the return rate over 50 logged voicemails is recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write an early-attempt voicemail under 25 seconds"
                - "Write a final-attempt voicemail that closes the loop politely"
                - "Record both on your own phone and listen back"
                - "Count returned calls after your next 50 voicemails"
            - name: Replies to reflex brush-offs in the opening seconds
              description: |-
                ## Purpose
                Send me an email, we are all set, I am in a meeting and how did you get my number are reflexes, not decisions, and they arrive before the prospect knows why you called. Preparing a calm, short reply to each that acknowledges it and asks one question keeps a fair number of calls alive without pushing anyone who truly means no.

                ## Milestones
                1. The six brush-offs you hear most listed from your call notes.
                2. A one or two sentence reply written for each.
                3. Each reply practised aloud in role play.
                4. A clear line written for when to accept the no and end the call warmly.

                ## Notes
                Price, competitor and timing objections that come up later in a sales conversation belong in a separate objection guide. This project covers only the reflex replies in the first seconds of a cold call.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written replies to your six most common brush-offs, each practised in role play, plus a written rule for when to end the call."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the six brush-offs that appear most often in your call notes"
                - "Write a short reply to each that acknowledges it and asks one question"
                - "Practise each reply aloud three times"
                - "Write down the point at which you thank them and end the call"
            - name: Voice, pace and tone on the phone
              description: |-
                ## Purpose
                On the phone the prospect has no face to read, so pace, pitch and pauses carry most of the meaning. Listening back to your own calls, recorded with consent where the rules require it, for speed, filler words and a rising tone at the end of statements shows habits that cost conversations and are easy to fix once heard.

                ## Milestones
                1. Three of your own calls or practice calls recorded with the right consent.
                2. Speaking speed and filler words counted on one call.
                3. Two specific habits chosen to change.
                4. A later recording showing both habits reduced.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two before-and-after recordings show a measured drop in two chosen habits, such as filler words or speaking speed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check your recording consent rule before recording any call"
                - "Record three calls or practice calls and listen back"
                - "Count filler words and estimate your speaking speed on one call"
                - "Choose two habits to change and record another call in two weeks"
            - name: Asking for the meeting and locking it in on the call
              description: |-
                ## Purpose
                Many good cold conversations end with a vague let me send you something because the caller never asks plainly for a meeting. Practising a direct ask with two specific times, reading back the email address and sending the invite while still talking turns interest into a diary entry.

                ## Milestones
                1. A one-sentence meeting ask offering two specific times.
                2. A routine for reading back the email address and time zone.
                3. The invite sent during the call on at least ten bookings.
                4. Conversation to meeting rate compared before and after.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten meetings booked with the invite sent during the call, and the conversation to meeting rate before and after recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a meeting ask that offers two specific times"
                - "Practise reading back an email address and time zone clearly"
                - "Send the invite before hanging up on your next ten bookings"
                - "Compare your conversation to meeting rate with the month before"
            - name: Peer role-play rounds before live calling
              description: |-
                ## Purpose
                Practising on real prospects is expensive, because every fumbled call uses up a name. Short role-play rounds with a colleague, a fellow freelancer or a friend playing a busy, sceptical buyer let you rehearse openers, brush-offs and the meeting ask with no cost to your list.

                ## Milestones
                1. A practice partner and a regular 15-minute slot agreed.
                2. Three buyer characters written for the partner to play.
                3. Ten role-play rounds completed, each with one piece of feedback.
                4. One change made to live calls as a result of the feedback.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten logged role-play rounds with written feedback, and one change to live calls traced back to them."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask a colleague or fellow freelancer to be your practice partner"
                - "Write three short buyer characters for them to play"
                - "Run a fifteen-minute role-play round with your partner @recurring(weekly:wed)"
                - "Write one piece of feedback after each round"
            - name: Finding the right person through the switchboard
              description: |-
                ## Purpose
                When your list has the company but not the buyer, the switchboard and the people around the buyer are the quickest research tool you have. Asking who looks after a specific area, or calling a senior office and being sent down to the right person, often gets you a name, a direct line and an implied introduction in one call.

                ## Milestones
                1. A short script for asking who handles a specific area.
                2. A top-down approach tried on ten accounts, starting at a senior office.
                3. Names and direct lines found this way added to the list.
                4. The share of accounts where the right person was found recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten accounts worked through the switchboard or a senior office, with the number where the right person and a direct line were found recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-line question asking who looks after the area you sell into"
                - "Pick ten accounts where you lack the buyer's name"
                - "Call each switchboard or senior office and note who you are sent to"
                - "Add every new name and direct line to the call list"
            - name: Two-question fit check before booking
              description: |-
                ## Purpose
                Booking every willing person fills the diary with meetings that go nowhere, while a full qualifying interview on a cold call drives people away. Two short questions asked before offering times are enough to check the prospect has the problem and a role in solving it, so the first meeting is worth both sides' time.

                ## Milestones
                1. Two fit questions written that confirm the problem and the person's role.
                2. A polite route written for people who do not fit, such as a referral or a later check-in.
                3. The questions used on 20 bookings.
                4. Show and progression rates of those meetings compared with earlier ones.

                ## Notes
                Keep the deeper questions for the first meeting itself. On the phone you are only checking that the meeting makes sense.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two fit questions used on 20 bookings, with the progression rate of those meetings compared against earlier phone bookings."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write two questions that check the problem and the person's role"
                - "Write a kind way to close the call when someone does not fit"
                - "Use the questions on your next 20 bookings"
                - "Compare how many of those meetings progressed against earlier ones"
            - name: Best day and hour to call test
              description: |-
                ## Purpose
                Advice on the best time to call contradicts itself, because it depends on the role, the industry and the time zone you are calling. Spreading dials evenly across days and hours for a month and comparing connect rates tells you when your own buyers actually pick up.

                ## Milestones
                1. Dials spread across at least four time slots and all five weekdays.
                2. Connect rate per slot and per day calculated from at least 400 dials.
                3. The two best slots identified.
                4. Recurring call blocks moved to the best slots.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Connect rates by day and hour calculated from at least 400 dials, and recurring call blocks moved to the two best slots."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Define four time slots across the working day"
                - "Rotate your call blocks through every slot and weekday for a month"
                - "Calculate connect rate per slot once 400 dials are logged"
                - "Move your recurring call blocks to the two best slots"
            - name: Reason-for-call test across 200 conversations
              description: |-
                ## Purpose
                The reason you give for calling, whether a problem common in their industry, a recent change at their company or a customer like them, shapes whether a stranger keeps talking. Running each reason across enough conversations to see a difference replaces opinion with evidence about what your buyers respond to.

                ## Milestones
                1. Three reasons for calling written and tagged in the log.
                2. Each reason used in about 70 conversations.
                3. Conversation length and meeting rate compared across the three.
                4. The winning reason adopted in the talk track.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three reasons for calling each tested in around 70 logged conversations, with meeting rates compared and the winner in the talk track."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write three different reasons for calling the same buyer"
                - "Add a tag for each reason to your call log"
                - "Rotate the reasons evenly across your call blocks"
                - "Compare meeting rates per reason after 200 conversations"
            - name: Phone data provider accuracy test
              description: |-
                ## Purpose
                Contact data vendors all claim high accuracy for direct dials and mobiles, and real results often fall well short. Testing two or three providers on the same 50 target contacts, and counting correct numbers by actually calling them, shows which source is worth paying for before you sign an annual contract.

                ## Milestones
                1. Two or three providers shortlisted with trial access.
                2. The same 50 target contacts looked up in each.
                3. Each number called and marked correct, wrong or switchboard.
                4. A provider chosen on cost per correct direct dial.

                ## Notes
                Start from the **Purchase decision** template. Ask each provider where its data comes from and how it handles privacy rules in the countries you call.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of data provider based on cost per correct direct dial from a 50-contact test across at least two providers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist two or three contact data providers that offer a trial"
                - "Look up the same 50 target contacts in each"
                - "Call every number and mark it correct, wrong or switchboard"
                - "Re-test your chosen provider's accuracy on a fresh sample @recurring(yearly)"
            - name: Call first or email first test
              description: |-
                ## Purpose
                Some buyers respond better to a call that follows an email they have half seen, others to a call out of nowhere followed by a short recap. Splitting a list and running both orders for a month shows which sequence books more meetings in your market, without guessing.

                ## Milestones
                1. A target list split into two matched halves.
                2. One half called before any email, the other emailed two days before the first call.
                3. Connects and meetings recorded for each half.
                4. The better order written into your attempt cadence.

                ## Notes
                Keep the pre-call email to three lines written by you. Building and testing full email sequences belongs with your cold email work.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Meeting rates for the call-first and email-first halves of one list are compared and the winning order is written into the cadence."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Split next month's list into two matched halves"
                - "Send a short pre-call email to one half only"
                - "Tag every call in the log with its half"
                - "Write the winning order into your attempt cadence"
            - name: Moving from full script to talk track
              description: |-
                ## Purpose
                Word-for-word scripts help in the first weeks and then start to sound read, especially when the prospect goes off course. Turning the script into a one-page talk track of key phrases, questions and branches keeps the structure while letting you sound like a person having a conversation.

                ## Milestones
                1. The full script reduced to a one-page talk track of headings and key phrases.
                2. Branches added for the three most common directions a call takes.
                3. Ten calls made using only the talk track.
                4. The original script kept as a reference for new callers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page talk track with three branches has replaced the script on at least ten logged calls."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Highlight the phrases in your script that matter most"
                - "Rewrite the script as headings, key phrases and questions on one page"
                - "Add branches for the three directions calls most often take"
                - "Make ten calls using only the talk track"
            - name: Cutting dead time between dials
              description: |-
                ## Purpose
                Callers often spend more of a block looking up numbers, writing notes and switching tabs than talking. Timing one block, finding where the minutes go and fixing the worst two causes, such as researching in advance or using note shortcuts, can raise dials per hour noticeably with no extra effort.

                ## Milestones
                1. One full block timed with dialling, talking, notes and research minutes recorded.
                2. The two largest sources of dead time named.
                3. A fix in place for each.
                4. Dials per hour measured again after the fixes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Dials per hour measured before and after two named fixes to dead time, with both figures recorded in the call log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Time one call block and record minutes spent dialling, talking and on notes"
                - "Name the two biggest causes of dead time"
                - "Put a fix in place for each, such as advance research or note shortcuts"
                - "Time another block and compare dials per hour"
            - name: Team call blitz afternoon
              description: |-
                ## Purpose
                One focused afternoon where the whole team calls the same segment together, with a shared target, short breaks between rounds and a running scoreboard, can book a week's worth of meetings and breaks the isolation of solo calling. It works best with lists prepared in advance and a clear finish time.

                ## Milestones
                1. A date, a segment and a meetings target agreed with the team.
                2. Lists prepared and split so no two callers dial the same account.
                3. The blitz held with hourly scores shared.
                4. Results and the best lines written up within two days.

                ## Notes
                Start from the **Operational checklist** template for the set-up steps. Small prizes for best call or best recovery work better than prizes for volume alone.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A team blitz held on the agreed date, with meetings booked against the target and a written summary shared within two days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a date, a segment and a meetings target with the team"
                - "Split the prepared list so no two callers share an account"
                - "Run the blitz with hourly scores shared"
                - "Write up results and the best lines within two days"
            - name: Launch-week calling for a new offer
              description: |-
                ## Purpose
                New services, products or prices give you a fresh, honest reason to call people who said not now months ago. Planning a week of calls around the launch, with a short new opener and a list of past conversations, turns the announcement into meetings rather than one email that few people open.

                ## Milestones
                1. A list of past contacts and lost prospects for whom the new offer is relevant.
                2. A launch opener explaining what has changed in one sentence.
                3. Launch-week call blocks booked in the diary.
                4. Meetings booked during the launch week recorded separately.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch week of calls completed against a list of relevant past contacts, with the meetings it produced recorded separately."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List past contacts for whom the new offer is relevant"
                - "Write a one-sentence opener explaining what has changed"
                - "Book launch-week call blocks in the diary"
                - "Tag every launch-week booking so results can be counted"
            - name: Trade show attendee follow-up calls
              description: |-
                ## Purpose
                After a trade show or conference, the people you met go cold within a week as everyone returns to full inboxes. Calling within 48 hours and mentioning something specific from the event gets far more answers than a generic follow-up a fortnight later.

                ## Milestones
                1. A follow-up list of everyone met, ranked by interest, ready before the event ends.
                2. A short event-specific opener written.
                3. Every high-interest contact called within two working days.
                4. Meetings booked from the event recorded against it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every high-interest contact from the event was called within two working days, and meetings booked are tagged to the event."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note each contact's interest level and one detail on the day you meet them"
                - "Write a follow-up opener that names the event and that detail"
                - "Block call time for the two working days after the event"
                - "Tag meetings booked from the event in your log"
            - name: Dormant lead call-back campaign
              description: |-
                ## Purpose
                Old enquiries, quotes that went quiet and prospects who said maybe next year sit untouched in most CRMs. A focused round of calls to them, with an honest reason such as checking whether the timing is better now, often produces quicker meetings than brand new names.

                ## Milestones
                1. A list of contacts with no activity for six months or more, screened for opt-outs.
                2. A respectful opener that refers to the earlier contact.
                3. Every contact on the list attempted at least twice.
                4. Meetings, updated records and closed-out contacts counted.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every dormant contact on the list attempted at least twice, with outcomes logged and meetings counted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull contacts with no activity for six months or more from your CRM"
                - "Remove anyone who opted out or has since become a customer"
                - "Write an opener that refers honestly to the earlier contact"
                - "Attempt each contact twice and log every outcome"
            - name: Calling calendar around holidays and budget season
              description: |-
                ## Purpose
                Calling hard in the week before a major holiday wastes effort, while the weeks when budgets are set can be the best of the year. Mapping the public holidays, financial year ends and quiet periods of the markets you call, then planning heavier and lighter weeks around them, puts your effort where buyers are listening.

                ## Milestones
                1. Public holidays and quiet periods for each country called listed for the year.
                2. Typical budget and financial year timings for your buyers noted.
                3. Heavier and lighter calling weeks marked on the year plan.
                4. The plan rolled forward each year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A year calling calendar marks holidays, quiet periods and budget season for every market called, and is rolled forward each year."
                cadence: cyclic
              tasks:
                - "List the public holidays and quiet periods in each country you call"
                - "Ask three customers when their budgets are set"
                - "Mark heavier and lighter calling weeks on your year plan"
                - "Roll the calling calendar forward to the next year @recurring(yearly)"
            - name: Freelancer calling in two hours a week
              description: |-
                ## Purpose
                Freelancers usually prospect only when work dries up, which means calling from a position of need and starting too late. A fixed two hours a week, spent on 30 well-chosen calls to peers of past clients and businesses you can see need you, keeps a steady trickle of conversations even in busy months.

                ## Milestones
                1. A fixed two-hour weekly slot protected from client work.
                2. A list of 120 well-chosen businesses, enough for a month.
                3. Thirty calls a week made for four consecutive weeks.
                4. At least one new conversation a week recorded.

                ## Notes
                Busy months are when this matters most. Pausing calls during a big project is what creates the empty month after it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty calls a week logged for four consecutive weeks in a fixed two-hour slot, alongside paying client work."
                cadence: rolling
              tasks:
                - "Choose a two-hour weekly slot you can keep even in busy months"
                - "Build a month's list of 120 businesses that fit your work"
                - "Make 30 calls in your weekly prospecting slot @recurring(weekly:tue)"
                - "Note each week's conversations in one line"
            - name: Owner calling local businesses in your area
              description: |-
                ## Purpose
                For many small businesses selling to other local firms, the buyer is the owner, the number is on the shop front and a call beats any email. Calling with a genuine local reason, such as working nearby or serving a neighbour, and offering to drop in suits owners who prefer to deal with people they can meet.

                ## Milestones
                1. A list of 60 local businesses within your service area.
                2. An opener with a genuine local reason for calling.
                3. Calls timed for the quiet hours of each type of business.
                4. Visits or meetings booked from the calls recorded.

                ## Notes
                Call cafes, salons and shops in their quiet hours, often mid-afternoon on weekdays, and never in the lunch rush.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Sixty local businesses called in their quiet hours using a local opener, with visits and meetings booked recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List 60 local businesses within your service area"
                - "Note the quiet hours for each type of business"
                - "Write an opener with a genuine local reason for calling"
                - "Record every visit or meeting the calls produce"
            - name: Shared call list rules for a small team
              description: |-
                ## Purpose
                When two or three people call from the same pool, prospects soon get rung twice in a morning by different voices, which looks careless. A few agreed rules for who owns which account, how long ownership lasts and how handovers work keep the team from colliding without formal territory planning.

                ## Milestones
                1. Ownership rules written: how an account is claimed and for how long.
                2. An owner field added to every account on the shared list.
                3. A handover note format agreed for accounts that change hands.
                4. A monthly check for clashes in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written ownership rules and an owner field on every shared account, with no double calls found at the first monthly check."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree how a caller claims an account and how long the claim lasts"
                - "Add an owner field to every account on the shared list"
                - "Agree a three-line handover note for accounts that change hands"
                - "Check the shared list for clashes and stale claims @recurring(monthly:24)"
            - name: Calling prospects in other time zones and languages
              description: |-
                ## Purpose
                Selling across borders means calling at hours that suit the prospect, not you, and sometimes in a language or style of politeness that differs from home. Planning blocks around each region's business hours, checking its calling rules and adapting your opener for directness and formality avoids calls at 7 a.m. their time and openers that land as rude.

                ## Milestones
                1. Business hours mapped for every time zone on your list.
                2. Call blocks for each region placed inside their late morning or afternoon.
                3. The opener adapted for formality and, where needed, translated and checked by a native speaker.
                4. Connect rates compared by region after a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Region-specific call blocks inside local business hours and an adapted opener per region, with connect rates by region recorded after a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the time zones on your call list and their business hours"
                - "Set call blocks inside each region's late morning or afternoon"
                - "Have a native speaker check any translated or adapted opener"
                - "Compare connect rates by region after a month"
            - name: Getting back on the phone after a long break
              description: |-
                ## Purpose
                After months away from calling, through parental leave, illness, a big project or a change of role, the phone can feel heavier than it did. A gentle two-week return, with short blocks, practice calls and easier lists first, rebuilds rhythm without the shock of jumping straight back into 60 dials a day.

                ## Milestones
                1. A two-week return plan with blocks growing from 20 to 60 minutes.
                2. Two practice calls with a friend before live calling.
                3. The first week spent on warmer contacts or easier segments.
                4. A full-length block reached by the end of the second week.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A two-week return plan completed, ending with a full-length logged call block."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a two-week plan with blocks growing from 20 to 60 minutes"
                - "Book two practice calls with a friend or colleague"
                - "Pick warmer contacts or easier segments for the first week"
                - "Re-read your talk track and update anything out of date"
            - name: Calling senior executives and their assistants
              description: |-
                ## Purpose
                Directors and chief executives are reachable by phone more often than people think, usually early in the morning, late in the day or through an executive assistant who runs the diary. Calling at the edges of the day, keeping the message to one business outcome and treating the assistant as the decision maker for the diary gives experienced callers access to the people who can say yes.

                ## Milestones
                1. A list of 20 senior targets with assistants' names where known.
                2. A ten-second opener focused on one business outcome.
                3. Calls placed early morning and late afternoon for two weeks.
                4. Each assistant's preferences and best times recorded per account.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty senior targets called at the edges of the day over two weeks, with assistants' preferences and outcomes recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List 20 senior targets and their assistants' names where known"
                - "Write a ten-second opener about one business outcome"
                - "Call before 8.30 and after 5 their time for two weeks"
                - "Record each assistant's preferences and best times to call"
            - name: Trigger-event calling within days of the news
              description: |-
                ## Purpose
                New funding rounds, senior hires, new sites, regulation changes and mergers open a short window when a buyer is actively rethinking how things are done. Watching for these triggers in your target accounts and calling within a few days, naming the event, gives a reason for the call that is about them rather than you.

                ## Milestones
                1. Five trigger types relevant to your offer defined.
                2. Sources set up to spot them, such as news alerts, job ads and company announcements.
                3. Each trigger called within five working days.
                4. Meeting rate on trigger calls compared with standard calls.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Trigger calls made within five working days of the event for a month, with their meeting rate compared against standard calls."
                cadence: rolling
              tasks:
                - "Define five trigger events that signal a need for your offer"
                - "Set news alerts and saved job searches for your target accounts"
                - "Scan alerts and job posts for new trigger events @recurring(weekly:mon)"
                - "Tag trigger calls in your log and compare meeting rates"
            - name: Calling handbook for a part-time or new caller
              description: |-
                ## Purpose
                Small businesses often hand calling to a part-time assistant, a junior hire or a contractor and then wonder why results drop. A short handbook with the rules sheet, the talk track, outcome codes, the cadence and three example calls means a new caller does it your way from the first session.

                ## Milestones
                1. A handbook of no more than ten pages covering rules, talk track, codes and cadence.
                2. Three example calls included as consented recordings or written transcripts.
                3. A new caller shadowing you for one block and then calling with you listening.
                4. The handbook updated after the new caller's first two weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A handbook of ten pages or fewer, with three example calls, used by a new caller who completed one shadowed and one observed block."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Gather the rules sheet, talk track, outcome codes and cadence in one document"
                - "Pick three calls that show good openers, recoveries and meeting asks"
                - "Run one block with the new caller shadowing and one with you listening"
                - "Update the handbook with the new caller's questions @recurring(quarterly)"
            - name: Outsourced appointment-setting decision
              description: |-
                ## Purpose
                Agencies and freelance callers offer to book meetings for a monthly fee or a price per appointment, and results range from excellent to damaging. Comparing two or three on pricing model, how they call, which rules they follow, who owns the data and how they define a qualified meeting lets you decide on evidence and protects your name on the phone.

                ## Milestones
                1. Two or three providers shortlisted with pricing models compared.
                2. Sample call recordings or a live listen requested from each.
                3. Compliance, data ownership and meeting definition confirmed in writing.
                4. A decision recorded to hire, run a short pilot or keep calling in-house.

                ## Notes
                Start from the **Purchase decision** template. Pay-per-meeting deals reward volume, so agree in writing what counts as a qualified meeting before you sign.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on outsourced calling, based on at least two providers' pricing, sample calls and written compliance terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down what a qualified meeting means for your business"
                - "Shortlist two or three appointment-setting providers"
                - "Ask each for sample recordings and their compliance process"
                - "Record the decision to hire, pilot or keep calling in-house"
---

# Cold Calling & Phone Outreach

This area is for small business owners, freelancers and small teams who pick up the phone to strangers and want those calls to become real sales conversations. It begins with the foundations (a calling goal, the rules for each country you call, a clean caller ID, a first list and an opener), moves through the weekly machinery of call blocks, list top-ups, callbacks and opt-out scrubs, then the phone skills of openers, gatekeepers, voicemail and the meeting ask, the tests and decisions that improve results, dated campaigns, situations such as freelancing or calling abroad, and finally specialist work with executives, trigger events and handing calling to someone else.

What repeats is a daily callback check and day-before meeting confirmations, twice-weekly call blocks, a Monday list top-up and a Friday numbers review, a monthly do-not-call scrub, caller ID check and talk track refresh, a quarterly programme review and a yearly rules check. The Compliance control, Metrics log, Habit tracker, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
