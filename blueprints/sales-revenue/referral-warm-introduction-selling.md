---
id: sales-revenue.referral-warm-introduction-selling
name: Referral & Warm Introduction Selling
description: "A referral tracker, a warm network map, forwardable introductions, ask scripts and the routines that turn happy customers, investors and partners into introductions that actually close."
category: business
version: 1.0.0
tags: [sales-revenue, referral-warm-introduction-selling, freelancer, small-business, founder, referrals, warm-introductions, word-of-mouth]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - reading-queue
    - marketing-campaign
    - purchase-decision
    - person
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Referral & Warm Introduction Selling
          description: "Systematically asking happy customers, investors and partners for introductions, and tracking which referral sources produce deals that actually close."
          projects:
            - name: Referral source audit of your last twenty deals
              description: |-
                ## Purpose
                Most freelancers and small firms believe referrals bring in most of their work, but few can say which customer, investor or partner sent which deal. Tracing the origin of your last twenty won and lost deals shows how much revenue already comes from introductions, who sends the best ones and how fast they close compared with everything else. That number decides how much time this area deserves.

                ## Milestones
                1. The last twenty won and lost deals listed with value, cycle length and outcome.
                2. Each deal tagged with its true origin: a named introducer, inbound, outbound or unknown.
                3. Win rate and average deal size for referred deals compared with the rest.
                4. The top three introducers by closed revenue named.

                ## Notes
                When the record is unclear, ask the customer how they really heard of you. The source field in most CRMs is filled in by whoever was in a hurry.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of twenty recent deals tagged by origin, with referred and non-referred win rates and deal sizes calculated and the top three introducers named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List your last twenty won and lost deals in a spreadsheet"
                - "Tag each deal with the person or channel that really sent it"
                - "Compare win rate, deal size and cycle length for referred deals"
                - "Write down your top three introducers by closed revenue"
            - name: Referral tracker with introducer and stage fields
              description: |-
                ## Purpose
                Introductions get lost because they arrive by text message, a forwarded email or a chat at the school gate, and none of it lands in one place. A tracker with fields for introducer, introduced contact, date, stage and outcome turns scattered goodwill into a pipeline you can count and follow up. A spreadsheet is fine for a solo seller; a team should add custom fields to the CRM it already uses.

                ## Milestones
                1. A tracker with fields for introducer, introduced contact, date, stage, value and outcome.
                2. Stages defined from introduction requested through meeting held to won or lost.
                3. Every live introduction from the last ninety days entered.
                4. A written rule that no introduction is worked until it is logged.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A referral tracker holds every introduction from the last ninety days, each with an introducer, a stage and a date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the spreadsheet or CRM where referrals will be tracked"
                - "Add fields for introducer, introduced contact, date, stage and value"
                - "Enter every introduction received in the last ninety days"
                - "Update the stage on every open introduction @recurring(weekly:fri)"
            - name: Warm network map of customers, investors and partners
              description: |-
                ## Purpose
                Asked who could introduce them, most sellers name five people, yet a written list usually passes a hundred once past clients, former colleagues, investors, suppliers, advisers and club members are counted. Mapping that network, with who each person knows and how warm the relationship is, shows where introductions can realistically come from before you ask anyone for anything.

                ## Milestones
                1. A list of at least a hundred people grouped as customers, investors, partners, colleagues and community.
                2. Each person scored one to three for relationship warmth.
                3. The sectors or companies each person can reach noted in a few words.
                4. The twenty people most likely to know your buyers marked as priority introducers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A network map of at least one hundred people, each scored for warmth and reach, with twenty priority introducers marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export your phone, email and professional network contacts into one sheet"
                - "Group each contact as customer, investor, partner, colleague or community"
                - "Score every contact one to three for how warm the relationship is"
                - "Mark the twenty contacts most likely to know your buyers"
            - name: Brief on who you want introductions to
              description: |-
                ## Purpose
                Vague asks get vague answers, because nobody can search their memory for anyone who might need help with marketing. They can, however, picture an operations director at a fifty-person firm that has just opened a second site. A short brief naming the title, the company type, the trigger event and the problem you solve gives every introducer something to match against real people.

                ## Milestones
                1. Your best three past customers described by title, company size, sector and the moment they bought.
                2. One paragraph of under eighty words naming who you want to meet and why.
                3. Three trigger events listed that make someone a good introduction right now.
                4. The brief tested on two friendly introducers and reworded where they hesitated.

                ## Notes
                This is the version of your customer profile a busy friend can hold in their head, not the full targeting document. If it needs a second paragraph, it is too long.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A brief of under eighty words naming the ideal introduction and three trigger events, tested with two introducers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Describe your three best customers by title, size, sector and buying moment"
                - "Write one paragraph of under eighty words on who you want to meet"
                - "List three trigger events that make someone worth introducing now"
                - "Read the brief to two friendly introducers and note where they stall"
            - name: Happy customer list scored for referral readiness
              description: |-
                ## Purpose
                Asking a customer whose project is running late for an introduction damages two relationships at once. Scoring current and past customers on results delivered, satisfaction and relationship strength separates the ones who would gladly vouch for you from those who need a problem fixed first. The list then tells you who to ask this month and who to look after instead.

                ## Milestones
                1. Every current and past customer from the last three years listed.
                2. Each scored on results achieved, satisfaction signals and personal relationship.
                3. Customers grouped into ready to ask, nurture first and do not ask.
                4. Open problems for the nurture group logged with an owner.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every customer from the last three years is scored and grouped as ready, nurture first or do not ask, with problems in the nurture group assigned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export customers from the last three years with their contract dates"
                - "Score each on results, satisfaction and relationship strength"
                - "Group the list into ready, nurture first and do not ask"
                - "Rescore the list using the latest feedback and results @recurring(quarterly)"
            - name: Forwardable introduction email
              description: |-
                ## Purpose
                The single biggest reason a promised introduction never happens is that the introducer has to write it. A short forwardable email, written by you in the third person, with two lines on who you help and a clear reason the two people should talk, lets them pass it on in thirty seconds. It also lets them check with the other person first, which is the polite double opt-in way.

                ## Milestones
                1. A forwardable email of under 120 words written in the third person.
                2. A subject line that tells the recipient why the email is relevant to them.
                3. Two variants, one for customers introducing peers and one for investors or partners.
                4. The email saved where you can paste it within a minute of an introducer saying yes.

                ## Notes
                Never ask an introducer to copy you in before the other person has agreed. A surprise introduction puts the recipient on the spot and spends the introducer's goodwill.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two forwardable introduction emails of under 120 words each are saved and have been used for at least one real introduction."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a 120-word forwardable email describing you in the third person"
                - "Add a subject line that tells the recipient why it matters to them"
                - "Write a second version for investors and partners"
                - "Save both as text snippets you can paste from your phone"
            - name: Referral ask script for customer conversations
              description: |-
                ## Purpose
                Most people ask for referrals with a mumbled line at the end of a call and get a polite yes that goes nowhere. A short script that names a result the customer has had, describes the kind of person you would like to meet and asks for one specific name produces actual introductions. Writing it down once means you stop improvising the hardest sentence in the area.

                ## Milestones
                1. A four-part ask written: the result, the profile, the specific question and the easy next step.
                2. A version for a call and a version for an email.
                3. Answers prepared for the three most common hesitations.
                4. The script used in five real conversations and adjusted after each.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written referral ask in call and email versions, used in five real customer conversations and revised after each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the four-part ask around one result the customer has had"
                - "Adapt it into a short email version"
                - "Write replies to the three hesitations you hear most"
                - "Use the script in five conversations and note what changed"
            - name: Referral ask moments mapped to the customer timeline
              description: |-
                ## Purpose
                Customers are most willing to introduce you in the week a result lands: the new site goes live, the first month's savings show up, a tax return goes in without drama. Mapping those moments for your service and putting an ask into each one replaces random timing with asks that arrive when the customer is pleased and the story is fresh.

                ## Milestones
                1. The stages of a typical customer engagement written out from signature to renewal.
                2. Two or three high-satisfaction moments marked where an ask fits naturally.
                3. A short ask prepared for each moment.
                4. The moments added as reminders in your delivery or project tool.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A timeline of the customer engagement shows at least two marked referral moments, each with a prepared ask and a reminder set in the delivery tool."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the stages of a typical engagement from signature to renewal"
                - "Mark the two or three moments when customers are happiest"
                - "Draft a one-line ask for each marked moment"
                - "Add a reminder at each moment in your project or delivery tool"
            - name: Referral thanks and disclosure policy
              description: |-
                ## Purpose
                Paying a referral fee, sending a gift or offering a discount can all be sensible, but some professions restrict referral payments and many buyers expect any commission to be disclosed. Deciding once how you will thank introducers, what you will never offer and how you tell a referred buyer about any payment keeps every thank-you clean and consistent.

                ## Milestones
                1. Your professional body's or industry's rules on referral payments checked.
                2. A written choice between cash fees, account credits, gifts or thanks only, with value limits.
                3. A disclosure line for referred buyers whenever any payment is involved.
                4. The policy checked with an accountant or adviser where tax or contracts are involved.

                ## Notes
                Employees of public bodies and large companies are often limited by their own gift policies. Ask before sending anything of value.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written policy covers how introducers are thanked, value limits and disclosure wording, and has been checked against the relevant professional rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up your profession's rules on paying for referrals"
                - "Choose between fees, credits, gifts or thanks only and set limits"
                - "Write one disclosure sentence for buyers when a payment applies"
                - "Review the policy with your accountant or adviser"
                - "Reread the policy against any new rules @recurring(yearly)"
            - name: Baseline conversion rates for introduced deals
              description: |-
                ## Purpose
                Without a baseline you cannot tell whether a new ask script or reward is working. Measuring, for the last six months, how many asks turned into introductions, introductions into meetings and meetings into won deals gives you a handful of numbers to improve. Small numbers are fine; three introductions a month is a real starting point.

                ## Milestones
                1. Asks made, introductions received, meetings held and deals won counted for the last six months.
                2. Conversion rates calculated between each step.
                3. Average days from introduction to signed deal recorded.
                4. The baseline saved with the date it was taken.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Conversion rates between each referral step and an average days-to-close figure for introduced deals over six months are saved with the date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count referral asks made in the last six months from your sent mail"
                - "Count introductions, meetings and won deals from the same period"
                - "Calculate the conversion rate between each step"
                - "Record the average days from introduction to signature"
            - name: Weekly referral ask block
              description: |-
                ## Purpose
                Referral asks are the first thing dropped in a busy week, which is exactly when a full diary two months later depends on them. A protected thirty-minute block each week to send three specific asks, chosen from the ready-to-ask list, keeps introductions arriving steadily instead of only when work dries up.

                ## Milestones
                1. A recurring thirty-minute slot booked in the calendar.
                2. Three asks sent each week to people on the ready-to-ask list.
                3. Each ask logged in the referral tracker.
                4. Twelve consecutive weeks completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks each show at least three specific referral asks logged in the tracker."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute referral slot in your calendar"
                - "Pick three people from the ready-to-ask list"
                - "Send three specific introduction asks @recurring(weekly:tue)"
                - "Log each ask in the referral tracker the same day"
            - name: Same-day follow-up on every new introduction
              description: |-
                ## Purpose
                An introduction cools fast: the introducer has spent goodwill and the new contact is curious for perhaps two days. Replying to every introduction within one working day, thanking the introducer and moving them to bcc, and offering the new contact two specific times keeps the warmth you were given.

                ## Milestones
                1. A reply template that thanks the introducer and offers two meeting times.
                2. Notifications set so introductions reach you quickly on your phone.
                3. Every introduction in a month answered within one working day.
                4. Response time recorded in the tracker for each introduction.

                ## Notes
                Say in your first line that you are moving the introducer to bcc, so they know their part is done and their inbox is spared the scheduling.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every introduction received in a calendar month was answered within one working day, with the response time recorded."
                cadence: rolling
              tasks:
                - "Write a reply template that thanks the introducer and offers two times"
                - "Set an email filter that flags messages with intro in the subject"
                - "Check for new introductions each morning and reply to them @recurring(daily)"
                - "Record the response time for each introduction in the tracker"
            - name: Monthly referral source scorecard
              description: |-
                ## Purpose
                Some introducers send a steady stream of people who never buy; others send one a year who signs in a fortnight. A monthly scorecard of introductions, meetings, wins and revenue by source shows where to spend thanks, attention and time, and spots a source that has gone quiet before it costs you a quarter.

                ## Milestones
                1. A scorecard with a row per introducer and columns for introductions, meetings, wins and revenue.
                2. The scorecard filled in from the tracker each month.
                3. Sources that have gone quiet for ninety days flagged.
                4. One action recorded each month from what the scorecard shows.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly scorecards are completed, each listing results by introducer and one action taken."
                cadence: rolling
              tasks:
                - "Set up the scorecard with a row for each introducer"
                - "Fill in the month's introductions, meetings, wins and revenue @recurring(monthly:12)"
                - "Flag any source that has been silent for ninety days"
                - "Write one action the scorecard suggests"
            - name: Quarterly check-in calls with best customers
              description: |-
                ## Purpose
                Customers refer the supplier they spoke to recently, not the one they last heard from on an invoice. A quarterly call with your top ten customers, about their plans rather than your services, keeps you front of mind and often surfaces an introduction without a formal ask.

                ## Milestones
                1. Ten customers chosen for quarterly check-ins.
                2. A short call agenda focused on their plans and challenges.
                3. Each call noted, including any person or company they mention.
                4. Introduction opportunities from the calls logged in the tracker.

                ## Notes
                Keep notes with the **Meeting notes** template so names mentioned in passing are not lost.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten check-in calls completed in a quarter, each with notes and any introduction opportunities logged."
                cadence: cyclic
              tasks:
                - "Choose ten customers for quarterly check-in calls"
                - "Write a five-question agenda about their plans, not your services"
                - "Call each of the ten customers @recurring(quarterly)"
                - "Log any person or company they mention in the tracker"
            - name: Introducer loop-closing updates
              description: |-
                ## Purpose
                Introducers stop introducing when they never hear what happened. A short note at each stage, the meeting held, the proposal sent, the deal won or lost, tells them their goodwill was used well and makes the next introduction far more likely. Even a lost deal is worth reporting, kindly and briefly.

                ## Milestones
                1. A two-line update template for meeting held, proposal sent, won and lost.
                2. Every introducer updated within a week of each stage change.
                3. A personal thank-you sent for every won deal.
                4. Updates recorded in the tracker against each introduction.

                ## Notes
                Share the stage, never the buyer's private details. Agree with the buyer what you may pass on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every introducer with an open or closed introduction in the last quarter has received a dated stage update."
                cadence: rolling
              tasks:
                - "Write two-line updates for meeting held, proposal sent, won and lost"
                - "Send updates for each introduction that moved stage this week @recurring(weekly:thu)"
                - "Send a personal thank-you for every won deal"
                - "Note the date of each update in the tracker"
            - name: Monthly network nurture list
              description: |-
                ## Purpose
                Contacting someone after two years of silence only to ask for an introduction feels transactional, to them and to you. A monthly list of ten dormant contacts from the network map, each sent something useful (an article, a congratulation, a quick hello), keeps relationships warm so a later ask feels natural.

                ## Milestones
                1. Ten dormant contacts chosen each month from the network map.
                2. Each sent a personal, useful message with no ask attached.
                3. Replies and news noted against each contact.
                4. Every priority introducer contacted at least twice a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten personal no-ask messages sent each month for six months, with every priority introducer contacted at least twice in that time."
                cadence: rolling
              tasks:
                - "Sort the network map by date of last contact"
                - "Send ten personal no-ask messages to dormant contacts @recurring(monthly:20)"
                - "Note any news or replies against each contact"
            - name: Stalled introduction sweep
              description: |-
                ## Purpose
                Many promised introductions never happen because the introducer forgot, not because they changed their mind. A sweep on a fixed day each month of promises older than ten days, with a gentle nudge and the forwardable email attached again, rescues introductions that would otherwise quietly die.

                ## Milestones
                1. Every promised but unmade introduction listed with the date of the promise.
                2. A polite nudge sent for each promise older than ten days.
                3. Promises still unmade after two nudges closed without fuss.
                4. The number of rescued introductions counted each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly sweep completed for six months, with every promise older than ten days nudged and the rescued count recorded."
                cadence: rolling
              tasks:
                - "Filter the tracker for promised introductions older than ten days"
                - "Send each a short nudge with the forwardable email attached @recurring(monthly:17)"
                - "Close promises that are still unmade after two nudges"
                - "Count how many introductions the sweep rescued"
            - name: Give-first introductions for your network
              description: |-
                ## Purpose
                People who make introductions tend to receive them. Making two thoughtful introductions a month between people in your network who should know each other, a client who needs a bookkeeper, an investor looking for a sector expert, builds a reputation as a connector and gives others a reason to return the favour.

                ## Milestones
                1. Two introductions made each month between people who benefit from meeting.
                2. Each one checked with both sides before connecting them.
                3. Outcomes noted when either side reports back.
                4. A list kept of introductions you have made, alongside those received.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Two double opt-in introductions made between other people each month for six months, with outcomes noted."
                cadence: rolling
              tasks:
                - "Note three people in your network who are looking for something"
                - "Make two double opt-in introductions between other people @recurring(monthly:8)"
                - "Ask both sides a month later whether the introduction helped"
            - name: Results story capture after each customer win
              description: |-
                ## Purpose
                An introducer finds it much easier to recommend you when they can repeat a concrete result: invoices paid in twelve days instead of forty, a site that now brings in eight enquiries a week. Capturing a three-line results story, with permission, each time a customer reaches an outcome gives your asks, forwardable emails and introducers something real to say.

                ## Milestones
                1. A three-line story format: situation, what you did, measurable result.
                2. The customer's permission recorded for how the story may be shared.
                3. A story captured for each customer result in the month.
                4. Stories stored where you can paste them into an ask.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A results story with recorded permission exists for every customer who reached a measurable result in the last six months."
                cadence: rolling
              tasks:
                - "Write the three-line story format: situation, action, result"
                - "Ask each customer who reached a result this month for a story @recurring(monthly:25)"
                - "Record exactly how each customer agreed the story may be shared"
                - "Ask the agent to tighten each story to under fifty words"
            - name: Named-introduction ask role-play practice
              description: |-
                ## Purpose
                Knowing the script is not the same as saying it to a client you like without wincing. Three short role-play sessions with a friend, a peer or the agent, practising the ask, the hesitation and the follow-up, make the words come out naturally when the real moment arrives.

                ## Milestones
                1. Three role-play sessions of twenty minutes completed.
                2. The ask practised against a yes, a vague maybe and a polite no.
                3. One recorded run reviewed for filler words and over-explaining.
                4. The ask made in a real conversation within a week of the last session.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three role-play sessions completed and a real named-introduction ask made within a week of the last one."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask a friend or peer to play a happy customer for twenty minutes"
                - "Practise the ask against a yes, a vague maybe and a polite no"
                - "Record one run and note where you over-explain"
                - "Make one real ask within a week of the final session"
            - name: Mutual connection search for ten target companies
              description: |-
                ## Purpose
                Founders and small firms often have a short list of companies they would love to work with and no idea who in their network knows anyone there. Working through ten target companies, checking professional networks, alumni lists, investors' portfolios and past colleagues for a shared contact, turns a cold list into a warm one in a few hours of research.

                ## Milestones
                1. Ten target companies listed with the role you want to reach at each.
                2. Shared contacts found for at least six of the ten.
                3. Each shared contact rated for how well they know the target person.
                4. A short ask planned for the strongest path into each company.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least six of ten target companies have a named mutual contact, rated for strength, with a planned ask."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List ten target companies and the role you want at each"
                - "Search professional networks and alumni lists for shared contacts"
                - "Check your investors' and advisers' networks for each company"
                - "Rate each path and plan an ask for the strongest one"
            - name: Asking a connector for one named person
              description: |-
                ## Purpose
                Asking 'do you know anyone at that company' puts the work on the connector; asking 'would you introduce me to Priya, their finance director, about the month-end delays she mentioned in a talk' makes it easy to say yes or no. Learning to frame a named-person ask, with the reason, the relevance to the target and an easy way out, is the core skill of warm introduction selling.

                ## Milestones
                1. A template for a named ask with the person, the reason and an easy way to decline.
                2. Five named asks sent to different connectors.
                3. The connector's answer recorded for each, including how well they know the person.
                4. The template revised after the five asks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five named-person introduction asks sent, answers recorded and the template revised from what was learned."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a named ask that includes the person, the reason and an easy no"
                - "Send five named asks to five different connectors"
                - "Record each answer and how well the connector knows the person"
                - "Revise the template from the five responses"
            - name: First call with a referred prospect
              description: |-
                ## Purpose
                A referred buyer arrives with borrowed trust and specific expectations from what the introducer said, and a standard pitch can waste both. Opening by asking what they were told, confirming the problem the introducer mentioned and agreeing how you will keep the introducer informed makes the first call feel like a continuation, not a cold start.

                ## Milestones
                1. A short opening that acknowledges the introducer and asks what they shared.
                2. Three questions that check the introducer's description against the buyer's own view.
                3. A line agreeing what the buyer is happy for you to tell the introducer.
                4. The approach used on three referred calls and refined.

                ## Notes
                Never share details of the buyer's situation with the introducer without asking first. Confidentiality is what makes you safe to introduce.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A referred-call opening and three check questions used on three real calls, with what each buyer agreed to share recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write an opening that thanks the introducer and asks what they shared"
                - "Write three questions that check the introducer's description"
                - "Agree with each referred buyer what you may tell the introducer"
                - "Review three referred calls and refine the opening"
            - name: Handling vague or stalled referral promises
              description: |-
                ## Purpose
                The most common reply to a referral ask is a warm 'I'll have a think', which almost never becomes an introduction. Learning a few gentle follow-ups, narrowing to one sector, offering two names you found yourself or asking about a recent event they attended, turns a friendly maybe into a named person or an honest no without pushing.

                ## Milestones
                1. Four follow-up lines written for the vague maybe.
                2. Each line tried at least once in a real conversation.
                3. The result of each attempt recorded.
                4. The two lines that worked best added to your ask script.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four follow-up lines tried in real conversations, results recorded and the best two added to the ask script."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write four follow-ups for an I will have a think reply"
                - "Try each follow-up at least once in a real conversation"
                - "Record whether each produced a name, a no or nothing"
                - "Add the best two lines to your referral ask script"
            - name: Spotting introduction openings in everyday conversations
              description: |-
                ## Purpose
                Introduction openings come up in passing all the time: a client complains about a peer's supplier, an investor mentions a portfolio company hiring its first finance lead, a neighbour says their firm is moving offices. Listening for these openings for a month, and noting each one, trains the habit of turning a casual mention into a timely, specific ask.

                ## Milestones
                1. A list of phrases that signal an introduction opening.
                2. A pocket note kept for a month of every opening heard.
                3. At least five openings followed up with a specific ask.
                4. The month's openings reviewed for which kinds of conversation produce most.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A month's log of at least ten introduction openings heard, with five followed up by a specific ask."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List ten phrases that signal someone knows a likely buyer"
                - "Note every introduction opening you hear for a month"
                - "Follow up five openings with a specific ask within two days"
                - "Review which conversations produced the most openings"
            - name: Reading list on referrals and reciprocity
              description: |-
                ## Purpose
                A handful of books on referral marketing, networking and the psychology of reciprocity explain why some asks land and others feel needy. Reading three over a quarter, with one change tested from each, builds the reasoning behind the scripts rather than copying them.

                ## Milestones
                1. Three books or long guides chosen on referrals, networking or influence.
                2. One idea from each worth testing written down.
                3. One change tested from each book in real asks.
                4. The result of each test written in two lines.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three books read within ninety days, with one change from each tested and its result written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick three books on referrals, networking or influence"
                - "Add them to a reading queue with a finish date for each"
                - "Write one idea from each book worth testing"
                - "Test each idea in a real ask and record the result"
            - name: Customer referral programme with a two-sided reward
              description: |-
                ## Purpose
                For businesses with many customers, such as a salon, a cleaning firm or an accountant with two hundred small clients, one-to-one asks do not scale and a simple programme does. Offering both the referrer and the new customer a modest reward, with a unique code or referrer field and clear terms, makes referring easy and trackable.

                ## Milestones
                1. A reward chosen that suits your margins and is offered to both sides.
                2. Terms written: who qualifies, when the reward is paid and any limits.
                3. A way to track each referral, such as codes or a referrer field at sign-up.
                4. The programme announced to existing customers through two channels.
                5. Results reviewed after three months against the referral baseline.

                ## Notes
                Start from the **Marketing campaign** template. Check the reward against your referral thanks and disclosure policy before launch.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-sided referral programme is launched with written terms and tracking, and reviewed after three months against the baseline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work out a reward both sides value that your margin can carry"
                - "Write the terms covering eligibility, payment timing and limits"
                - "Set up unique referral codes or a referrer name field at sign-up"
                - "Announce the programme to existing customers by email and in person"
                - "Compare referrals after three months with the baseline"
            - name: Referral tracking software or spreadsheet decision
              description: |-
                ## Purpose
                Referral software can automate codes, rewards and introducer dashboards, but a solo freelancer with five introductions a month needs nothing more than a sheet. Comparing the volume you actually handle with what two or three tools cost and connect to prevents paying monthly for a dashboard nobody opens.

                ## Milestones
                1. Monthly referral volume and admin time measured.
                2. Two or three tools compared with your spreadsheet or CRM fields.
                3. A written decision with the cost per year.
                4. If a tool is chosen, a ninety-day review date set.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on referral tracking compares at least two tools with the current spreadsheet or CRM on yearly cost and admin time."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count monthly introductions and time spent on referral admin"
                - "Shortlist two referral tools and price them for a year"
                - "Compare them with your spreadsheet or CRM fields"
                - "Record the decision and set a ninety-day review if buying"
            - name: Referral partnerships with complementary providers
              description: |-
                ## Purpose
                Businesses that serve the same customers without competing, a web designer and a copywriter, an accountant and a financial planner, a builder and an architect, can send each other steady work. Agreeing two or three reciprocal partnerships with clear expectations on how introductions are made, whether fees apply and how customers are looked after turns occasional favours into a channel.

                ## Milestones
                1. Five possible partners listed who serve your customers without competing.
                2. Two or three partners met and expectations agreed in writing.
                3. A simple way to make and track introductions between you.
                4. A monthly check-in held with each partner for a quarter.

                ## Notes
                Recommend only partners whose work you have seen. A bad referral costs you the customer who trusted your recommendation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two written referral partnerships are agreed, each with an introduction method, and three monthly check-ins have been held."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List five businesses that serve your customers without competing"
                - "Meet the three most promising and discuss swapping introductions"
                - "Write a one-page agreement covering introductions and any fees"
                - "Hold a referral check-in with each partner @recurring(monthly:15)"
            - name: Finding where introduced deals leak
              description: |-
                ## Purpose
                Plenty of introductions and few wins usually means a leak at one step: slow replies, introducers sending poor-fit people, or referred buyers stalling at the proposal. Comparing conversion at each step with the baseline, and reading the notes on ten lost introduced deals, shows which single fix would add most.

                ## Milestones
                1. Conversion at each step compared with the baseline.
                2. Ten lost or stalled introduced deals reviewed for the reason.
                3. The weakest step named with evidence.
                4. One fix chosen, owned and dated.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The weakest step in the referral funnel is named with evidence from ten lost introductions, and one fix is chosen with an owner and a date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull current referral conversion rates and set them beside the baseline"
                - "Read the notes on ten lost or stalled introduced deals"
                - "Name the weakest step and the evidence for it"
                - "Choose one fix and put a date on it"
            - name: Referral ask in welcome and project close emails
              description: |-
                ## Purpose
                Asks that rely on memory happen in good weeks only. Adding a short, specific referral line to the welcome email after a proposal is accepted and to the project close or handover email puts an ask in front of every customer at two good moments, without extra effort each time.

                ## Milestones
                1. A one-line referral mention written for the welcome email.
                2. A fuller ask written for the project close or handover email.
                3. Both added to your email templates or automation.
                4. Introductions from these emails tagged and counted after three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Referral lines are live in both the welcome and project close emails, with introductions from them counted after three months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line referral mention for the welcome email"
                - "Write a fuller ask for the project close or handover email"
                - "Add both lines to your email templates"
                - "Tag introductions that cite these emails for three months"
            - name: Referral landing page for introduced buyers
              description: |-
                ## Purpose
                Introducers often prefer to send a link rather than write an email, and an introduced buyer will look you up before replying. A short page for referred visitors, with who you help, three results, how a first conversation works and a simple form that asks who introduced them, gives both a clear next step and records the source.

                ## Milestones
                1. A page covering who you help, three results and how a first call works.
                2. A form or booking link that asks who made the introduction.
                3. The link added to the forwardable email.
                4. Visits and bookings from the page checked after two months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A referral page with a booking route that asks for the introducer is live and linked from the forwardable email."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the page copy covering who you help and three results"
                - "Add a booking link or form that asks who introduced them"
                - "Add the page link to the forwardable introduction email"
                - "Check visits and bookings from the page after two months"
            - name: Pruning low-yield referral sources
              description: |-
                ## Purpose
                Networking groups, paid referral clubs and loose partnerships can quietly take four hours a week and produce one poor-fit lead a quarter. Reviewing each source's time and cost against closed revenue, then deciding to keep, change or drop it, frees time for the introducers who actually send buyers.

                ## Milestones
                1. Every referral source listed with hours and fees spent per month.
                2. Closed revenue per source for the last twelve months beside it.
                3. A keep, change or drop decision for each source.
                4. Dropped commitments ended politely.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each referral source has a recorded keep, change or drop decision based on twelve months of time, cost and closed revenue."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every networking group, club and partnership with hours and fees"
                - "Add twelve months of closed revenue from each source"
                - "Decide to keep, change or drop each one"
                - "Leave dropped groups with a polite note"
            - name: Testing two versions of the referral ask
              description: |-
                ## Purpose
                Small wording changes make a large difference to whether people act: asking for one name rather than anyone, or naming a trigger event rather than a job title. Running two versions of the ask side by side for a quarter, on at least twenty asks each, settles which to keep with evidence rather than taste.

                ## Milestones
                1. Two versions of the ask written that differ in one thing.
                2. At least twenty asks sent with each version.
                3. Introductions per ask counted for both.
                4. The better version adopted and the other retired.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two ask versions tested on at least twenty asks each, with introductions per ask compared and one version adopted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write two versions of the ask that differ in one detail"
                - "Alternate the versions across your next forty asks"
                - "Count introductions received per ask for each version"
                - "Adopt the winner and update your ask script"
            - name: Customer appreciation evening with a bring-a-peer invitation
              description: |-
                ## Purpose
                A relaxed evening for your best customers, where each is invited to bring one peer who might benefit, creates introductions in a room instead of by email. Twenty to thirty guests, a short talk or tasting, no sales pitch and a clear follow-up plan make it worth the cost.

                ## Milestones
                1. A date, venue and budget agreed for twenty to thirty guests.
                2. Invitations sent to best customers with a bring-a-peer line.
                3. The evening held with a host assigned to introduce new guests.
                4. Every new guest followed up within a week.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An appreciation evening is held with at least five peer guests attending, each followed up within a week."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Set a date, venue and budget for twenty to thirty guests"
                - "Invite your best customers and ask each to bring one peer"
                - "Assign someone to welcome and introduce each new guest"
                - "Follow up every peer guest within a week of the evening"
            - name: Year-end thank-you round for introducers
              description: |-
                ## Purpose
                The end of the year is when people take stock of who helped them, and a thoughtful note naming what an introduction led to is remembered long after a generic card. A dedicated round for everyone who introduced you, with a personal note and a gift within your policy for the top few, sets up next year's introductions.

                ## Milestones
                1. Everyone who made an introduction this year listed with the outcome.
                2. A personal note written to each naming what their introduction led to.
                3. Gifts within policy sent to the top five introducers.
                4. The round completed before the last working week of the year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every introducer from the year has received a personal note naming the outcome, and the top five a gift within policy."
                cadence: cyclic
              tasks:
                - "List everyone who introduced you this year and what happened"
                - "Write a personal note to each naming what their introduction led to"
                - "Send gifts within your policy to the top five introducers"
                - "Start the year-end introducer thank-you round @recurring(yearly)"
            - name: Peer roundtable dinner co-hosted with a customer
              description: |-
                ## Purpose
                When a customer agrees to co-host a dinner for six to eight of their peers, they lend you their credibility in a way no email can. A focused topic the guests care about, a customer who opens with their own experience and a seller who listens more than presents produce introductions that come with context.

                ## Milestones
                1. A customer co-host and a topic their peers care about agreed.
                2. A guest list of six to eight drawn up mostly by the co-host.
                3. The dinner held with the co-host opening the discussion.
                4. Each guest followed up personally, with the co-host thanked.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A co-hosted roundtable is held with at least five peer guests, each followed up personally within a week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask one well-connected customer to co-host a small dinner"
                - "Agree a discussion topic their peers would travel for"
                - "Draft the invitation for the co-host to send in their name"
                - "Follow up each dinner guest personally and thank the co-host"
            - name: Pre-conference introduction requests
              description: |-
                ## Purpose
                An industry conference is full of people you would like to meet, most of whom will never stop at a stand. Two weeks before the event, checking the attendee or speaker list against your network and asking connectors for a quick in-person introduction turns three days of wandering into a planned set of warm meetings.

                ## Milestones
                1. The attendee or speaker list checked for people you want to meet.
                2. Mutual contacts found for at least five of them.
                3. Introductions requested two weeks before the event.
                4. Meetings held and followed up within three days of returning.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least five warm introductions requested before a conference, with meetings held and followed up within three days of the event."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the attendee or speaker list for your next conference"
                - "Mark ten people you want to meet and search for mutual contacts"
                - "Ask connectors for an introduction two weeks before the event"
                - "Follow up every conference meeting within three days of returning"
            - name: New offer launch with personal asks to fifty contacts
              description: |-
                ## Purpose
                Launching a new service with a social post reaches people who scroll past; fifty personal messages to the warmest people in your network, each saying what changed and who might need it, reach people who forward. A launch week planned around those messages produces the first introductions for something nobody yet associates with you.

                ## Milestones
                1. Fifty warm contacts chosen from the network map.
                2. A short personal message written saying who the new offer is for.
                3. All fifty messages sent within the launch week.
                4. Introductions and replies logged and followed up.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Fifty personal launch messages are sent within one week, with every reply and introduction logged in the tracker."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose fifty warm contacts who know likely buyers of the new offer"
                - "Write a personal message saying what is new and who it is for"
                - "Ask the agent to draft a personal opening line for each contact"
                - "Send all fifty messages within the launch week"
            - name: Freelancer work pipeline from past clients and colleagues
              description: |-
                ## Purpose
                Most freelancers win most of their work from people who have already seen them work, yet ask only when the diary empties. A light weekly system for a solo freelancer, two personal notes to past clients and a check of how far ahead you are booked, keeps the diary filled six to eight weeks ahead without turning you into a salesperson.

                ## Milestones
                1. Past clients and colleagues from the last five years listed.
                2. Two personal messages sent each week to people on the list.
                3. A short sentence about availability added to your email signature.
                4. Bookings at least six weeks ahead for two consecutive months.

                ## Notes
                Send news, not need. A note about a project you just finished draws more work than one saying you have space.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two personal messages to past clients sent every week for three months, with forward bookings recorded weekly."
                cadence: rolling
              tasks:
                - "List past clients and colleagues from the last five years"
                - "Send personal messages to two past clients or colleagues @recurring(weekly:wed)"
                - "Record how many weeks ahead you are booked each Friday"
                - "Ask each finishing client who else would benefit from the same work"
            - name: First referrals as a newly independent freelancer
              description: |-
                ## Purpose
                Going independent after years in a job, the first clients usually come from former employers, colleagues and suppliers, not strangers. A structured announcement in your first month, saying what you now do, who for and what kind of first project suits you, makes it easy for people who already trust you to send work.

                ## Milestones
                1. Restrictions in your old employment contract checked.
                2. A short announcement of what you now offer and for whom.
                3. Personal messages sent to thirty former colleagues and contacts.
                4. Three first conversations booked from introductions.

                ## Notes
                If a non-solicitation clause is unclear, ask an employment adviser before contacting former clients. A rushed approach can cost more than the first project is worth.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Thirty personal announcement messages sent within the first month, with at least three introduced conversations booked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Reread your old contract for any non-solicitation or non-compete clauses"
                - "Write a short announcement of what you offer and who it is for"
                - "Send personal messages to thirty former colleagues and contacts"
                - "Ask each warm reply who they know with this problem now"
            - name: Word-of-mouth system for a local service business
              description: |-
                ## Purpose
                Local businesses such as a plumber, a dentist, a dog groomer or a catering firm live on neighbours recommending them, but word of mouth is rarely asked for. Simple prompts at the end of each job, a thank-you line, a question about who else nearby might need it and an easy way to pass on your details, make recommendations happen more often.

                ## Milestones
                1. A short thank-you and ask line used at the end of every job.
                2. Pass-on cards or a shareable message with your details ready.
                3. A how-did-you-hear question asked of every new customer.
                4. Word-of-mouth enquiries counted monthly for six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of monthly word-of-mouth enquiry counts exist, with the end-of-job ask used on every job."
                cadence: rolling
              tasks:
                - "Write a one-sentence thank-you and ask for the end of each job"
                - "Print pass-on cards or save a shareable message with your details"
                - "Ask every new customer how they heard of you"
                - "Count word-of-mouth enquiries for the month @recurring(monthly:28)"
            - name: Investor and adviser introduction asks for founders
              description: |-
                ## Purpose
                Investors and advisers usually want to help with introductions and are rarely asked well: a vague line at the end of a quarterly update produces nothing. Founders who send a specific monthly list, three named companies and the person they want to reach at each, get introductions from people whose names open doors.

                ## Milestones
                1. Every investor and adviser listed with the sectors and companies they know.
                2. A monthly asks section added to the investor update with three named targets.
                3. Introductions from investors tracked separately in the referral tracker.
                4. Each investor thanked with an outcome note after any introduction.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly investor updates sent, each with three named introduction asks, and results tracked by investor."
                cadence: rolling
              tasks:
                - "List each investor and adviser with the sectors they know well"
                - "Pick three named target companies and the person to reach at each"
                - "Send the investor update with a specific asks section @recurring(monthly:5)"
                - "Tag investor introductions separately in the tracker"
            - name: Team-wide referral habit for a small sales team
              description: |-
                ## Purpose
                In a team of three to ten sellers, referrals often depend on the one person who is naturally good at asking. A shared weekly target of asks per seller, a five-minute slot in the team meeting for referral wins and one shared tracker spread the habit, so introductions do not walk out of the door when that person leaves.

                ## Milestones
                1. A weekly ask target agreed with each seller.
                2. Referral asks and introductions visible per seller in the shared tracker.
                3. A five-minute referral slot added to the weekly team meeting.
                4. Every seller making asks for eight consecutive weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every seller on the team logs referral asks for eight consecutive weeks, reviewed in a weekly five-minute slot."
                cadence: rolling
              tasks:
                - "Agree a weekly referral ask target with each seller"
                - "Add a seller field to every ask in the shared tracker"
                - "Share referral wins in five minutes of the team meeting @recurring(weekly:mon)"
                - "Pair a strong asker with any seller who logs no asks for two weeks"
            - name: Referrals in confidential or regulated work
              description: |-
                ## Purpose
                Lawyers, therapists, financial advisers and anyone working under a non-disclosure agreement cannot ask clients to tell everyone about them, and some cannot pay for introductions at all. Building a referral approach around professional peers, permission-based mentions and anonymous results keeps introductions flowing without breaching confidence or professional rules.

                ## Milestones
                1. Your professional body's rules on referrals, testimonials and fees noted.
                2. Clients sorted by whether they have agreed to be named or approached.
                3. A peer referral circle of three to five professionals in adjacent fields.
                4. An anonymous results summary approved for use in asks.

                ## Notes
                When the rules are unclear, ask your professional body or a compliance adviser before acting. This project organises the question; it does not answer it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of the professional rules that apply, a peer referral circle of at least three and an approved anonymous results summary all exist."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your professional body's guidance on referrals and testimonials"
                - "Mark which clients have agreed they may be named or approached"
                - "Invite three professionals in adjacent fields to swap introductions"
                - "Write an anonymous results summary and check it against the rules"
            - name: Referral source lifetime value analysis
              description: |-
                ## Purpose
                Referred customers often close faster, but the real test is whether they pay well, stay and refer others in turn. Comparing two or three years of revenue, retention and onward referrals by source shows which introducers bring the customers worth most, and sometimes reveals a source sending fast closers who leave within a year.

                ## Milestones
                1. Two to three years of customers tagged by original source.
                2. Total revenue, length of relationship and onward referrals calculated per source.
                3. Sources ranked by customer value, not by count.
                4. Changes to effort and thanks agreed from the ranking.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Sources are ranked by lifetime customer value over at least two years, with one change to effort or thanks decided."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Tag every customer from the last two to three years by original source"
                - "Calculate revenue, tenure and onward referrals per source"
                - "Rank sources by customer value rather than count"
                - "Decide one change to effort or thanks from the ranking"
            - name: Relationship plans for your top ten introducers
              description: |-
                ## Purpose
                Usually a few introducers account for most referred revenue, and they deserve the same planning as a key customer. A one-page plan for each of the top ten, covering what they care about, who they know, how you help them in return and the next touch, keeps those relationships deliberate rather than accidental.

                ## Milestones
                1. The top ten introducers chosen from the scorecard.
                2. A one-page plan per introducer covering interests, network and what you give back.
                3. A dated next touch in each plan.
                4. All ten plans refreshed each quarter.

                ## Notes
                Start from the **Person** template for each introducer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Ten introducer plans exist, each with a dated next touch, and all have been refreshed within the last quarter."
                cadence: cyclic
              tasks:
                - "Choose the top ten introducers from the scorecard"
                - "Write a one-page plan for each covering interests, network and favours returned"
                - "Put a dated next touch in each plan"
                - "Refresh the ten introducer plans @recurring(quarterly)"
            - name: Attribution rules for introduced deals with several touches
              description: |-
                ## Purpose
                Buyers who were introduced, then read three articles and later filled in a web form, can show up as inbound, which undercounts referrals and the thanks an introducer is owed. Clear attribution rules, defining what counts as referral-sourced, referral-influenced or neither, keep the scorecard honest and end arguments about who gets credit.

                ## Milestones
                1. Definitions written for referral-sourced and referral-influenced deals.
                2. A time window set for how long an introduction keeps credit.
                3. The rules applied to the last twenty deals as a test.
                4. The rules shared with anyone who enters deal sources.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written attribution rules with a time window are tested on twenty past deals and shared with everyone who records deal sources."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define referral-sourced and referral-influenced in one sentence each"
                - "Choose how many months an introduction keeps credit"
                - "Reclassify your last twenty deals using the new rules"
                - "Share the rules with everyone who enters deal sources"
            - name: Referral revenue capacity model for next year
              description: |-
                ## Purpose
                Planning next year's revenue on the hope that referrals will fill the gap leaves a hole when they do not. Working back from the target through average deal value, introduction-to-win rate and introductions per ask shows how many asks and introducers the referral share actually needs, and whether other channels must carry more.

                ## Milestones
                1. Next year's revenue target and the share expected from referrals written down.
                2. Asks, introductions and wins needed calculated from current conversion rates.
                3. The required asks per week compared with what you can realistically make.
                4. A gap figure for other channels recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A model shows the asks, introductions and wins needed for the referral share of next year's target, with the gap left for other channels stated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write next year's revenue target and the share expected from referrals"
                - "Work back to the asks and introductions needed using current rates"
                - "Compare required weekly asks with what you can realistically make"
                - "Record the gap other channels must fill"
            - name: Annual referral system review
              description: |-
                ## Purpose
                Each year changes who your best introducers are, which asks work and what your thanks policy should be. A yearly half-day review of the scorecards, the baseline, the source rankings and the policy decides what to keep, retire and try next year.

                ## Milestones
                1. Twelve months of scorecards compared with the baseline.
                2. Three things to keep and three to stop written down.
                3. The thanks policy and attribution rules reread and updated.
                4. Next year's three referral priorities agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly review is recorded with three keeps, three stops, an updated policy and three priorities for the coming year."
                cadence: cyclic
              tasks:
                - "Book half a day for the yearly referral review @recurring(yearly)"
                - "Compare twelve months of scorecards with the baseline"
                - "Write three things to keep and three to stop"
                - "Agree three referral priorities for the next year"
---

# Referral & Warm Introduction Selling

This area is for freelancers, small business owners and founders whose best work comes through people who already trust them, and who want that to happen on purpose rather than by luck. It starts with foundations (an audit of where deals came from, a referral tracker, a network map, a brief of who you want to meet, a scored list of happy customers, a forwardable email, an ask script, ask moments, a thanks policy and a baseline), then the routines that keep introductions moving, the skills of asking well and running the first referred call, improvements such as a referral programme, partnerships and tested wording, events that put introducers and their peers in a room, versions for freelancers, local businesses, founders, small teams and confidential professions, and finally specialist work on lifetime value, introducer plans, attribution and capacity.

What repeats is a daily check for new introductions, weekly asks, stage updates and loop-closing notes, monthly scorecards, nurture messages, stalled-promise sweeps, give-first introductions, results stories, partner check-ins and investor asks, quarterly customer calls and introducer plans, and a yearly thank-you round and system review. The Metrics log, Meeting notes, Reading queue, Marketing campaign, Purchase decision and Person templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
