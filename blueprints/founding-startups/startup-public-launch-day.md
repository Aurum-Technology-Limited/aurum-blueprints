---
id: founding-startups.startup-public-launch-day
name: Startup Public Launch Day
description: "A launch you can grade: a written goal, readiness check, date, message and channels, then the countdown, launch-day events, follow-up and a retrospective that becomes your playbook."
category: business
version: 1.0.0
tags: [founding-startups, startup-public-launch-day, founder, product-launch, product-hunt, press, launch-day, community]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - content-pipeline
    - risk-register
    - marketing-campaign
    - meeting-notes
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Startup Public Launch Day
          description: "Planning a startup's public launch, from launch platforms and press to community posts, and handling the traffic and feedback."
          projects:
            - name: Launch goal and success numbers in writing
              description: |-
                ## Purpose
                Founders often launch to 'get attention' and then cannot tell whether a day of 400 upvotes and 30 signups was a win. Choosing one primary goal (signups, paying customers, press coverage, hiring interest or investor conversations) and two or three numbers that define success turns launch day from a mood into a test you can grade.

                ## Milestones
                1. One primary launch goal chosen, with the other goals explicitly ranked below it.
                2. Two or three success numbers written with the time window each applies to, such as activated signups within 72 hours.
                3. A floor figure written down that would count as a disappointing result.
                4. The goal and numbers shared with everyone helping on the day.

                ## Notes
                Upvotes, rank and visitor counts are inputs, not goals. Pick a measure that sits as close to revenue or retention as your product allows.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated one-page statement names the primary launch goal, two or three numeric targets with time windows and a floor, and is shared with the launch team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down why you are launching publicly now, in two sentences"
                - "Rank signups, revenue, press, hiring and investor interest as launch goals"
                - "Set two or three numeric targets with a time window for each"
                - "Share the goal sheet with everyone helping on launch day"
            - name: Launch readiness criteria and go or no-go call
              description: |-
                ## Purpose
                A public launch spends attention you only get once from each audience, so sending that traffic to a product with broken signup or no way to pay wastes it. Agreeing in advance the handful of conditions that must be true, and a named person who calls go or no-go 48 hours before, stops the date from overruling the evidence.

                ## Milestones
                1. A list of no more than ten must-be-true conditions, each with an owner.
                2. A test account that has completed signup, onboarding and payment on the production build.
                3. A go or no-go meeting held 48 hours before launch, with the decision recorded.
                4. A fallback date agreed in case the call is no-go.

                ## Notes
                Start from the **Operational checklist** template. Keep the list short: a list of forty items gets ticked without being checked.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A readiness checklist of ten or fewer conditions, each verified by its owner, with a recorded go or no-go decision made at least 48 hours before launch."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the conditions that must be true before you send any traffic"
                - "Assign an owner to verify each condition on the production build"
                - "Run signup, onboarding and payment end to end with a fresh account"
                - "Hold the go or no-go call 48 hours out and record the decision"
            - name: Choosing the launch date and hour
              description: |-
                ## Purpose
                The same launch can land in an empty week or be buried under a major platform announcement, a public holiday or a large competitor's release. Picking a date with your audience's calendar and time zones in mind, and knowing the hour each platform's day resets, decides how much of the day you actually get.

                ## Milestones
                1. Holidays, major industry conferences and big-company event dates for the next eight weeks listed.
                2. The time zone of most of your target audience identified.
                3. A primary date and a backup date chosen, each clear of any obvious clash.
                4. The exact start hour for each platform written in your own local time.

                ## Notes
                Mid-week days often bring more traffic and more competition at once. Weigh where your users actually are against where the leaderboard looks easiest.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary and a backup launch date are recorded with the clash check and a per-platform start time written in local time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List holidays and industry events in the next eight weeks"
                - "Check where most of your waitlist or target users are located"
                - "Pick a primary and backup date with a written reason for each"
                - "Convert each platform's day start into your local time"
            - name: Launch message and one-line pitch
              description: |-
                ## Purpose
                On launch day a stranger gives you about five seconds on a listing, a headline or a social post. A one-page message document with the one-liner, the problem in the customer's words, three proof points and who it is for keeps every post, email and reply saying the same thing, even when different people write them at speed.

                ## Milestones
                1. A one-line pitch of 12 words or fewer that a non-expert can repeat back.
                2. The core problem written in phrases real customers have used.
                3. Three concrete proof points, such as a number, a quote or a demo moment.
                4. A clear statement of who the product is not for yet.
                5. The page tested on five people outside the company, with their replies noted.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page launch message document with a one-liner, problem statement, three proof points and audience exists and has been tested on five outsiders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write ten versions of the one-line pitch and keep the clearest three"
                - "Pull exact customer phrases from interview notes or support emails"
                - "Pick three proof points you can show, not just claim"
                - "Read the one-liner to five outsiders and note what they think it does"
            - name: Launch channel shortlist and fit check
              description: |-
                ## Purpose
                Every launch platform rewards a different kind of product: maker communities like polished consumer and productivity tools, technical forums want something builders can try at once, and niche forums and chat groups want relevance with no hard sell. Scoring each candidate channel on audience fit, rules and effort saves you from spreading thin across ten places that ignore you.

                ## Milestones
                1. A list of eight to twelve candidate channels, from launch platforms to niche newsletters and communities.
                2. Each channel scored for audience fit, self-promotion rules and preparation effort.
                3. Three to five channels chosen as primary, with the rest parked.
                4. Posting requirements for each chosen channel saved in one place.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three to five launch channels are chosen from a scored list of at least eight, with each one's posting requirements saved alongside."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every place your target users already gather online"
                - "Score each channel for fit, rules and effort out of five"
                - "Choose three to five primary channels and park the rest"
                - "Save each chosen channel's posting requirements in one note"
            - name: Launch traffic tracking and attribution set-up
              description: |-
                ## Purpose
                Launch traffic arrives from a dozen places in a few hours, and without tagged links most of it shows up as 'direct' and teaches you nothing. Tagging every link, checking that signups record their source, and building one view of visits, signups and activations by channel means you can say on day two which channel was worth the effort.

                ## Milestones
                1. A naming convention for tagged links agreed and written down.
                2. A tagged link created for every planned post, email and partner mention.
                3. Signup records storing the first source and campaign.
                4. A single dashboard or sheet showing visits, signups and activations by channel.
                5. A test visit through each tagged link confirmed in the analytics tool.

                ## Notes
                Start from the **Metrics log** template. Ask new signups where they heard about you as well: platforms that strip referrers only show up in the answers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every planned launch link is tagged, test visits appear correctly by channel, and signups store their source in a single dashboard."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a link tagging convention for source, medium and campaign"
                - "Create tagged links for every planned post and email"
                - "Add a 'how did you hear about us' field to signup"
                - "Click through each tagged link and confirm it lands in analytics"
            - name: Launch budget and asset inventory
              description: |-
                ## Purpose
                Small launches still cost money and hours: a demo video, ad credits for retargeting, a press database subscription, extra server capacity, perhaps a designer for listing images. Writing a capped budget and an inventory of every asset each channel needs, with sizes, lengths and formats, prevents the night-before scramble for a missing thumbnail.

                ## Milestones
                1. A launch budget with a hard cap and a line for each planned spend.
                2. An inventory of every asset required per channel, with exact dimensions and character limits.
                3. Each asset marked as existing, needing an update or still to be made.
                4. A date by which every asset must be final, one week before launch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capped launch budget and a per-channel asset inventory with sizes and owners exist, with every asset due a week before the launch date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set a hard spending cap for the whole launch"
                - "List each channel's required images, video and text with size limits"
                - "Mark every asset as ready, needs update or to be made"
                - "Book any paid help, such as a designer or editor, with a delivery date"
            - name: Launch day roles and run of show
              description: |-
                ## Purpose
                On the day, the founder replying to comments cannot also watch the error logs and send the waitlist email. A run of show, hour by hour, with a named owner for each block (posting, replies, support, monitoring, outreach) and a single channel for the team keeps the day calm even when something breaks.

                ## Milestones
                1. An hour-by-hour run of show from the first post to the evening wrap-up.
                2. A named owner and a backup for posting, comment replies, support, monitoring and outreach.
                3. A single team chat channel set up for launch day, with an agreed escalation rule.
                4. A dry run walked through with everyone at least three days before.

                ## Notes
                Plan shifts. A launch day can run 16 hours or more across time zones, and tired people write bad replies.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written hour-by-hour run of show names an owner and backup for every block and has been rehearsed with the team at least three days before launch."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Block out the launch day hour by hour in a shared document"
                - "Name an owner and a backup for each block"
                - "Create one team channel and agree when to escalate"
                - "Walk the team through the run of show three days before"
            - name: Warm notification list from waitlist to friends
              description: |-
                ## Purpose
                The first hour shapes how a launch is seen, and that hour is driven by people who already know you: waitlist signups, beta users, past colleagues, newsletter readers. Collecting them into one segmented list, with consent and the right message per group, means you can tell them the moment you are live without breaking platform rules on asking for votes.

                ## Milestones
                1. Every source of warm contacts gathered: waitlist, beta users, newsletter and personal network.
                2. Contacts segmented into groups that each get their own message.
                3. Consent checked, so only people who opted in receive marketing email.
                4. A draft notification for each segment that invites people to look and comment honestly rather than to upvote.

                ## Notes
                Most launch platforms penalise or remove listings that receive coordinated votes. Ask for feedback and genuine interest, never for upvotes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single segmented notification list with consent recorded and a drafted message per segment is ready to send at launch."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export waitlist, beta and newsletter contacts into one sheet"
                - "Remove anyone without marketing consent from the email segments"
                - "Group the remaining contacts into segments that need different messages"
                - "Ask the agent to draft a short live-now note for each segment"
            - name: Weekly launch countdown review
              description: |-
                ## Purpose
                From six weeks out, a launch has a dozen moving pieces with different owners, and slippage only shows when it is too late. A 30-minute weekly review of the readiness list, asset inventory and risks, at the same time each week, catches the late demo video in week four instead of the night before.

                ## Milestones
                1. A standing weekly slot booked with everyone involved in the launch.
                2. A fixed agenda covering readiness, assets, channels, risks and decisions needed.
                3. Actions from each review recorded with an owner and a due day.
                4. The review continued through the week after launch, then paused until the next launch moment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A countdown review is held every week from six weeks before launch until a week after, with actions and owners recorded each time."
                cadence: cyclic
              tasks:
                - "Book a 30-minute weekly slot with the launch team"
                - "Write a five-item agenda and pin it to the meeting invite"
                - "Run the countdown review against the readiness list @recurring(weekly:mon)"
                - "Record each review's actions with an owner and a due day"
            - name: Launch asset production pipeline
              description: |-
                ## Purpose
                Screenshots, a demo video, a listing gallery, an announcement post, social cards and a short animation for replies all compete for the same few evenings. Running them through a simple pipeline (brief, draft, review, final) with one weekly review session turns asset production into a predictable flow rather than a last-minute design sprint.

                ## Milestones
                1. Every asset from the inventory entered as an item with a stage and an owner.
                2. A one-paragraph brief written for each asset before work starts.
                3. A weekly review session where drafts are approved or sent back with notes.
                4. All assets at final, stored in one folder with the filenames each channel needs.

                ## Notes
                Start from the **Content pipeline** template. Shoot screenshots on a clean demo account with realistic data, not 'Test User 1'.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "All launch assets reach the final stage in one shared folder at least a week before launch, each having moved through brief, draft and review."
                cadence: cyclic
              tasks:
                - "Enter each asset from the inventory as a pipeline item"
                - "Write a one-paragraph brief for each asset before work begins"
                - "Review asset drafts and approve or return them with notes @recurring(weekly:thu)"
                - "Build a demo account with realistic data for screenshots"
            - name: Community presence before you post
              description: |-
                ## Purpose
                Communities spot drive-by promotion instantly: a first post from a brand-new account linking to its own product is often removed or ignored. Showing up weekly for at least a month in the two or three communities you plan to launch in, answering questions and sharing useful things, earns the standing that makes your launch post welcome.

                ## Milestones
                1. Two or three target communities chosen where you will take part as yourself.
                2. A profile in each that shows who you are and what you build.
                3. At least four weeks of genuine contributions in each before launch day.
                4. Moderators' expectations on launch posts checked wherever the rules are unclear.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four or more weeks of weekly, non-promotional contributions are visible in each target community before the launch post goes up."
                cadence: rolling
              tasks:
                - "Complete your profile in each target community with your real name and role"
                - "Answer or add to three threads in your target communities @recurring(weekly:wed)"
                - "Message a moderator to ask how launch posts are handled"
                - "Review which communities give back and drop one that does not @recurring(monthly:12)"
            - name: Launch feedback triage board
              description: |-
                ## Purpose
                A good launch produces hundreds of comments, emails and bug reports in 72 hours, and the useful ones vanish under the noise. Logging every piece of feedback on one board with a type (bug, request, confusion, praise) and triaging daily through launch fortnight means the important pattern, such as 'nobody understands step two', is visible by day three.

                ## Milestones
                1. A single board with columns for bug, request, confusion and praise.
                2. Every comment, email and support chat from the launch logged with its source.
                3. A daily triage during the two weeks after launch, with each item tagged and owned.
                4. The top five themes written up at the end of the fortnight.

                ## Notes
                Log praise too. Exact words from happy users become the testimonials and copy for your next launch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every launch feedback item from all channels is logged on one board, triaged daily for two weeks, ending with a written top-five themes summary."
                cadence: rolling
              tasks:
                - "Set up a board with bug, request, confusion and praise columns"
                - "Triage new launch feedback and give each item an owner @recurring(daily)"
                - "Copy every praise comment word for word into a quotes list"
                - "Send the team a short digest of new feedback themes @recurring(weekly:tue)"
            - name: Follow-up emails for launch signups
              description: |-
                ## Purpose
                Most launch signups are curious rather than committed, and many never come back after the first visit. A short sequence (a welcome on day zero, a nudge to the key action on day two and a personal note from the founder on day seven) recovers a meaningful share of them, and the replies are some of the most honest feedback you will get.

                ## Milestones
                1. A three-email sequence written for launch signups.
                2. The sequence switched on and tested with a dummy signup.
                3. Reply rates and key-action completion tracked per email.
                4. Every reply read and answered personally by a founder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A three-email launch signup sequence is live and tested, and its reply and activation rates are reviewed every week for the first month."
                cadence: rolling
              tasks:
                - "Write the day zero welcome around one key first action"
                - "Write a founder note for day seven that asks one open question"
                - "Review reply and activation rates for the sequence @recurring(weekly:fri)"
                - "Rewrite the weakest email in the sequence @recurring(monthly:9)"
            - name: Press and creator relationship tracker
              description: |-
                ## Purpose
                Journalists, newsletter writers and creators who cover your space are rarely won with a cold pitch in launch week. Keeping a tracker of 20 to 40 relevant people, what each has covered recently and every interaction, and tending it steadily, builds the familiarity that makes a launch pitch read as news rather than spam.

                ## Milestones
                1. A tracker of 20 to 40 writers, newsletters and creators who cover your category.
                2. Each entry with a recent piece they wrote and why your launch fits it.
                3. A first, non-pitch interaction logged with at least ten of them.
                4. Status kept current: not contacted, warm, pitched, covered or declined.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker of at least 20 relevant writers and creators is updated monthly, with at least ten warm contacts before launch."
                cadence: rolling
              tasks:
                - "List 20 writers and creators who covered a similar product this year"
                - "Note one recent piece by each and why your launch fits their beat"
                - "Find each contact's preferred way to receive pitches"
                - "Share or reply to a contact's recent piece without pitching @recurring(weekly:tue)"
                - "Update tracker statuses and choose the next contacts @recurring(monthly:15)"
            - name: Launch FAQ and objection bank
              description: |-
                ## Purpose
                The same eight questions arrive on every launch thread: how is this different from the big incumbent, what happens to my data, why is it priced like that, is there an API. Writing short, honest answers in advance, and adding each new question the day it appears, lets anyone on the team reply in minutes without contradicting each other.

                ## Milestones
                1. The 15 questions most likely to come up written down, including the uncomfortable ones.
                2. A short, honest answer for each, agreed by the founders.
                3. New questions from launch threads added within a day.
                4. The bank reviewed monthly and stale answers rewritten.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared bank of at least 15 launch questions with agreed answers is updated with each new question and reviewed every month."
                cadence: rolling
              tasks:
                - "Write down the 15 questions you least want asked on launch day"
                - "Draft a two to three sentence answer for each one"
                - "Agree the answers on pricing, data and competitors with your co-founder"
                - "Review the bank and rewrite stale answers @recurring(monthly:20)"
            - name: Public changelog and monthly release notes
              description: |-
                ## Purpose
                One launch day fades within a week, but a product that visibly ships every month keeps giving people reasons to come back and gives you material for the next announcement. A public changelog and a monthly release note, even a short one, turns ongoing work into a steady drumbeat after the big day.

                ## Milestones
                1. A public changelog page live and linked from the product.
                2. An entry format agreed: what changed, who it helps and a screenshot.
                3. A monthly release note sent to users and posted where they follow you.
                4. Three consecutive months of release notes published.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A public changelog is live and a release note has gone out in each of the three consecutive months after launch."
                cadence: rolling
              tasks:
                - "Publish a changelog page and link it from the product menu"
                - "Write a short entry format with change, who it helps and an image"
                - "Add shipped changes to the changelog as they go live"
                - "Publish the monthly release note to users and followers @recurring(monthly:3)"
            - name: Quarterly launch moments calendar
              description: |-
                ## Purpose
                Teams that treat launch as a single day go quiet after it, while teams that plan one launch moment each quarter (a major feature, an integration, a new platform, a new plan) get several chances to reach the same channels with something new. A rolling calendar of the next four moments keeps product and announcement planning in step.

                ## Milestones
                1. A list of candidate launch moments drawn from the roadmap.
                2. One moment chosen per quarter for the next year, each with a target month.
                3. Each moment matched to the channels that suit it.
                4. The calendar revisited every quarter and moved as the roadmap moves.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A calendar names one launch moment for each of the next four quarters, with a target month and channels, and is reviewed every quarter."
                cadence: cyclic
              tasks:
                - "Pull candidate launch moments from the current roadmap"
                - "Pick one moment per quarter and set a target month"
                - "Match each moment to the channels that would care"
                - "Revisit the launch moments calendar against the roadmap @recurring(quarterly)"
            - name: Mentions and sentiment watch
              description: |-
                ## Purpose
                People talk about a launched product in places you never posted: reposts, forum threads, review sites, a newsletter roundup. Setting alerts for your names and scanning them daily through launch fortnight, then weekly, lets you thank supporters, correct errors and catch a complaint thread before it becomes the story.

                ## Milestones
                1. Alerts set for the company name, product name and founders' names.
                2. A daily scan during the two weeks after launch.
                3. Every notable mention logged with a link and whether it needs a reply.
                4. A weekly wider scan continuing after the first fortnight.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Name and product alerts are live, mentions are scanned daily for two weeks after launch and weekly after, and notable ones are logged."
                cadence: rolling
              tasks:
                - "Set alerts for the company, product and founder names"
                - "Scan new mentions and reply where it helps @recurring(daily)"
                - "Log notable mentions with link, sentiment and whether you replied"
                - "Search forums and review sites for unalerted mentions @recurring(weekly:sun)"
            - name: Teardown of ten past launches in your category
              description: |-
                ## Purpose
                Studying launches that worked and ones that sank is the fastest way to learn what a launch audience rewards. Pulling ten launches from your category over the last two years and noting their headline, first comment, visuals, timing and what happened afterwards gives you patterns to copy and mistakes to avoid.

                ## Milestones
                1. Ten launches chosen, at least three that did well and three that did poorly.
                2. For each, the headline, first maker comment, visuals, day and time noted.
                3. What happened next checked where visible, such as funding, traction or a shutdown.
                4. Five patterns written down that you will apply to your own launch.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A teardown sheet covers ten past launches in your category and ends with five written patterns applied to your launch plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick ten launches in your category from the past two years"
                - "Record headline, first comment, visuals and timing for each"
                - "Check what happened to each company in the following year"
                - "Write five patterns to copy and three mistakes to avoid"
            - name: Writing the launch post in a founder's voice
              description: |-
                ## Purpose
                Launch audiences on technical forums and maker communities are allergic to marketing copy and warm to a founder explaining what they built, why, and what is still rough. Learning to write that post, with the backstory in two sentences, what it does, what it does not do yet and a clear question for readers, is a skill worth practising on drafts before the day.

                ## Milestones
                1. Three launch posts that did well in your target channels studied for structure.
                2. A first draft written in plain language with no superlatives.
                3. Feedback received from two people who use the target channel.
                4. A final post within the channel's length norms, ending with a question to readers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A final launch post per primary channel exists, reviewed by two regular users of that channel and free of superlatives."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Copy the structure of three well-received launch posts into notes"
                - "Write a first draft with backstory, what it does and what is missing"
                - "Cut every superlative and marketing adjective from the draft"
                - "Ask two regular users of the channel to mark what sounds like an ad"
            - name: Platform rules and etiquette study
              description: |-
                ## Purpose
                Each channel has written rules and unwritten norms: some ban asking for votes, some expect the maker to be present all day, some forbid links in the first post or demand a set title format. Reading the rules properly, plus a month of top posts in each chosen channel, prevents the launch-day removal that no amount of preparation can undo.

                ## Milestones
                1. The current published rules for each chosen channel read in full.
                2. Specific do and do-not lines extracted for each channel.
                3. A month of top and removed posts reviewed for the unwritten norms.
                4. A one-page etiquette sheet for the team, organised by channel.

                ## Notes
                Rules change. Re-read them in launch week, not only when you first plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page etiquette sheet lists the written rules and observed norms for every primary channel and is re-checked in launch week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read each chosen channel's current rules page in full"
                - "Note the title format and link rules for each channel"
                - "Review a month of top posts in each channel for unwritten norms"
                - "Turn the findings into a one-page etiquette sheet for the team"
            - name: Two-minute demo video
              description: |-
                ## Purpose
                Many visitors decide from a short video before reading a word, and a slow, feature-by-feature tour loses them in 20 seconds. Learning to script a demo around one user's problem and the moment it is solved, record it cleanly and cut it to under two minutes produces the single most reused launch asset.

                ## Milestones
                1. A script of under 250 words built around one user problem and its solution.
                2. Screen recordings captured on the clean demo account at a readable resolution.
                3. A cut under two minutes with captions, since many people watch muted.
                4. A 15-second version ready for social posts and replies.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A captioned demo video under two minutes and a 15-second cut are final and stored with the other launch assets."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a 250-word script around one user's problem and the fix"
                - "Record the screen flow on the demo account at full resolution"
                - "Edit to under two minutes and add burned-in captions"
                - "Cut a 15-second version for social posts and replies"
            - name: Press pitch and embargoed announcement
              description: |-
                ## Purpose
                Writers get dozens of pitches a day and open the ones that are short, relevant to what they cover and offer something early. Learning to write a five-sentence pitch, a factual announcement with real numbers and quotes, and how embargoes work gives a small startup a fair shot at coverage on the day rather than a week later.

                ## Milestones
                1. A plain-language announcement of under 500 words with facts, a founder quote and a customer quote.
                2. A press page with logo, screenshots, founder photos and a fact sheet.
                3. A five-sentence pitch tailored to each writer, referencing their recent work.
                4. An embargo time stated clearly in each pitch that offers early access.

                ## Notes
                An embargo is a request, not a contract. Offer early access only to writers you trust, and never promise one writer an exclusive while pitching others the same story.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An announcement, a press page and tailored pitches for at least ten writers are ready, each pitch stating any embargo time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a factual announcement under 500 words with two quotes"
                - "Build a press page with logo, screenshots, photos and a fact sheet"
                - "Draft a five-sentence pitch you tailor to each writer"
                - "Ask the agent to tighten each tailored pitch to five sentences"
            - name: Replying to critics in public
              description: |-
                ## Purpose
                Every visible launch attracts sharp comments: 'this is just a wrapper', 'the pricing is a joke', 'why would anyone switch'. How a founder answers in public is read by far more people than the critic, so practising calm, specific replies that concede what is true and explain what is not is worth an evening before the day.

                ## Milestones
                1. The five harshest likely criticisms written out as they would appear.
                2. A practice reply for each that thanks, concedes what is fair and gives a fact.
                3. A team rule on when to reply, when to move to private messages and when to stay silent.
                4. Practice replies reviewed by someone who will tell you if you sound defensive.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five practice replies to likely criticisms and a written team rule on public replies exist, reviewed by one blunt outside reader."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the five harshest comments your launch could attract"
                - "Draft a reply to each that concedes what is fair first"
                - "Agree when to reply, move to private messages or stay silent"
                - "Have a blunt friend read the replies for defensiveness"
            - name: Reading launch numbers honestly
              description: |-
                ## Purpose
                Launch spikes flatter: traffic up twenty times for a day, then back to baseline, with most signups never activating. Learning to separate vanity numbers from the ones that predict a business (activation, week-one retention, paid conversion by channel) stops a team from celebrating a spike and learning nothing.

                ## Milestones
                1. Each launch number labelled as vanity or decision-useful.
                2. Activation defined as one specific action, agreed before launch.
                3. Week-one retention of launch signups compared with your pre-launch users.
                4. A short written verdict on what the numbers do and do not show.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page verdict, written within ten days of launch, compares launch signups' activation and week-one retention with earlier users."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Label each launch metric as vanity or decision-useful"
                - "Define activation as one action and write it down before launch"
                - "Compare week-one retention of launch signups with earlier users"
                - "Write a half-page verdict on what the numbers actually show"
            - name: Big-bang, soft or staged launch decision
              description: |-
                ## Purpose
                Not every startup should go loud on day one. A soft launch to a few hundred users, a staged roll-out by region or invite, or a single big announcement each trade reach against the risk of a first impression on a product that is not ready, so choosing the shape deliberately, with the criteria for moving from soft to loud, avoids a big launch by default.

                ## Milestones
                1. The three launch shapes compared against your product's readiness and launch goal.
                2. A chosen shape with the reasoning written down.
                3. For a soft or staged launch, the measures that trigger the loud launch.
                4. The decision shared with the team and anyone expecting a date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the launch shape, the reasons, and for a soft or staged start, the numbers that trigger the full launch."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Score big-bang, soft and staged launches against readiness and goal"
                - "Write the chosen shape and the main reason in a paragraph"
                - "Set the numbers that would trigger the loud launch if starting soft"
                - "Tell the team and any partners which shape you chose"
            - name: Ruling out vote rings and paid upvotes
              description: |-
                ## Purpose
                Services selling upvotes, comment rings and engagement pods approach almost every founder before a launch. Platforms detect them and can bury or remove the listing, and the audience you buy never becomes customers, so a clear team policy on what help is allowed (telling people you are live) and what is not (asking for votes, paid engagement) protects the launch and your name.

                ## Milestones
                1. Each chosen platform's stance on vote solicitation and its penalties noted.
                2. A written team policy listing allowed and forbidden asks.
                3. Any paid launch services under consideration assessed against the policy.
                4. The policy shared with friends, advisers and investors who offer to help.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page launch help policy listing allowed and forbidden asks is written and sent to everyone who offered to support the launch."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check what each platform says it does with detected vote rings"
                - "Write allowed and forbidden launch asks on one page"
                - "Decline any service that sells votes, comments or engagement"
                - "Send the policy to advisers and investors who offered to help"
            - name: Launch offer with a clear expiry
              description: |-
                ## Purpose
                A launch-day offer, such as an extended trial, a founding-member price or a bonus, can turn curiosity into commitment, but a lifetime deal or deep discount with no end date can saddle the company with unprofitable customers for years. Deciding before the day whether to offer anything, what exactly, for whom and when it ends keeps the launch from setting your pricing by accident.

                ## Milestones
                1. A decision recorded on whether there is a launch offer at all.
                2. The offer's terms written: what it is, who qualifies, how many and the end date.
                3. The cost of the offer estimated if it is fully taken up.
                4. The expiry built into checkout so it ends without manual work.

                ## Notes
                Lifetime deals sold through deal sites can bring hundreds of demanding users at a loss. If you run one, cap the number and model the support cost first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written launch offer decision exists, with terms, a cap, an end date and a cost estimate, and any offer expires automatically in checkout."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether a launch offer serves your launch goal at all"
                - "Write the offer terms with a cap and an end date"
                - "Estimate the cost if every eligible person takes the offer"
                - "Set the expiry in checkout so it stops automatically"
            - name: First-session path for launch visitors
              description: |-
                ## Purpose
                Visitors from a launch listing are less patient than your beta users: they give the product one try and leave if the first screen asks for too much. Walking the path from listing to first useful result as a stranger, and cutting every step that is not essential, decides how many of the day's signups ever see the product working.

                ## Milestones
                1. The path from launch listing to first useful result mapped step by step.
                2. Five people who have never seen the product observed and timed going through it.
                3. The three biggest drop points fixed or removed.
                4. Sample data or a guided demo available for people who will not connect their own data on day one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Five first-time users reach the first useful result unaided, and the three biggest drop points found in testing have been fixed before launch."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Map every step from the launch listing to the first useful result"
                - "Watch five strangers try the product and time each step"
                - "Fix or remove the three steps where most people stall"
                - "Add sample data so visitors can try it without their own"
            - name: Launch homepage and signup page review
              description: |-
                ## Purpose
                On launch day your homepage is read by thousands of people who know nothing about you, many on a phone. Checking it against the launch message, making sure the one-liner, demo and call to action appear on the first mobile screen, and getting signup under a minute is cheap insurance on the day's traffic.

                ## Milestones
                1. The homepage rewritten to match the launch message document.
                2. The one-liner, demo and a single call to action visible on a phone without scrolling.
                3. Signup completed in under a minute on mobile and desktop.
                4. Page load checked on a slow mobile connection.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The homepage matches the launch message, shows the one-liner and call to action on the first mobile screen, and signup takes under a minute."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Rewrite the homepage headline to match the launch one-liner"
                - "Check the first screen on three different phone sizes"
                - "Time a full signup on mobile and on desktop"
                - "Test page load on a throttled slow mobile connection"
            - name: Traffic spike and capacity check
              description: |-
                ## Purpose
                Front-page listings or a viral post can send ten to fifty times normal traffic in an hour, and an outage at that moment turns the launch into a thread about your downtime. Working with whoever runs your infrastructure to load-test the critical paths, add capacity or limits, and prepare a static fallback page keeps the product standing when attention arrives.

                ## Milestones
                1. Expected peak traffic estimated with a safety margin.
                2. Signup, login and the core action load-tested at that peak.
                3. Rate limits, autoscaling or extra capacity added where the test showed strain.
                4. Third-party limits, such as email sending quotas and API rate limits, checked.
                5. A static fallback page and a status page ready to switch on.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signup, login and the core action pass a load test at five times expected peak, and a fallback and status page can be switched on in minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate peak hourly traffic with a five times safety margin"
                - "Load-test signup, login and the core action at that peak"
                - "Check email sending quotas and third-party API rate limits"
                - "Prepare a static fallback page and a public status page"
            - name: Launch risk register
              description: |-
                ## Purpose
                Launches go wrong in predictable ways: a payment provider flags the sudden volume, the signup email lands in spam, a competitor announces the same morning, an old post by a founder resurfaces. Listing the likely failures, how likely and how bad each is, and the response agreed in advance means the team acts in minutes instead of arguing.

                ## Milestones
                1. At least ten launch risks listed across technical, payment, reputation and timing.
                2. Each risk scored for likelihood and impact.
                3. A pre-agreed response and owner for each of the top five.
                4. Payment and email providers told of the expected volume where they allow it.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register lists at least ten launch risks with scores, and each of the top five has a written response and a named owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List ten ways the launch could go wrong"
                - "Score each risk for likelihood and impact out of five"
                - "Write the response and owner for the top five risks"
                - "Tell your payment and email providers about the expected volume"
            - name: Maker platform launch day
              description: |-
                ## Purpose
                Maker platforms such as Product Hunt run to their own clock, and the listing, first comment and replies in the first few hours shape the rest of the day. Preparing the listing in advance, posting at the day's start, being present all day to answer every comment and telling your warm list you are live, without asking for votes, is the event most launches are built around.

                ## Milestones
                1. The listing drafted and previewed: name, tagline, gallery, video and first maker comment.
                2. The listing scheduled or posted at the platform's day start.
                3. Every comment answered within an hour throughout the day.
                4. The warm list notified with an invitation to look and give feedback.
                5. Final rank, visitors and signups recorded the next morning.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The listing goes live at the platform's day start, every comment gets a reply within an hour, and the day's results are recorded the next morning."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the listing with tagline, gallery, video and first comment"
                - "Preview the listing with two people who use the platform"
                - "Post at the platform's day start and pin the maker comment"
                - "Answer every comment within an hour through the day"
            - name: Show HN post and launch day
              description: |-
                ## Purpose
                Technical forums such as Hacker News reward products builders can try immediately, posted by the person who built them, with a plain title and an honest first comment about how it works. The day is short and unforgiving, since a post either finds readers in the first hour or sinks, so being ready to answer deep technical questions matters more than any visual asset.

                ## Milestones
                1. A try-it-now path with no signup wall, or a clear reason for one.
                2. A plain title in the forum's expected format and a first comment explaining how it was built.
                3. The post submitted by the builder at a time the audience is awake.
                4. Technical questions answered in detail for the first four hours.

                ## Notes
                Do not ask friends to upvote or share the link in a group asking for support. Forums like this detect it and penalise the post.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The post is submitted by the builder with a try-it-now link, and every technical question in the first four hours gets a detailed answer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Remove or justify any signup wall on the try-it-now path"
                - "Write a plain title and a first comment on how it was built"
                - "Submit the post yourself at a time your audience is awake"
                - "Block four hours after posting to answer technical questions"
            - name: Press announcement day
              description: |-
                ## Purpose
                If you are pitching writers, announcement day is when embargoes lift, stories go live and you have a few hours to amplify them before attention moves on. Coordinating the embargo time with your own posts, sharing coverage as it lands and thanking each writer personally turns a single article into reach across all your channels.

                ## Milestones
                1. The embargo lift time aligned with your own announcement posts.
                2. A live list of confirmed stories, checked off as each one publishes.
                3. Each piece of coverage shared on company and founder accounts within an hour.
                4. A personal thank-you sent to every writer who covered the launch.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every published story is shared within an hour of going live, and each covering writer receives a personal thank-you within two days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the embargo lift time with each writer the day before"
                - "Schedule your own posts for the minute the embargo lifts"
                - "Share each story on company and founder accounts as it lands"
                - "Send each writer a personal thank-you within two days"
            - name: Live demo or online launch party
              description: |-
                ## Purpose
                Going live with a 30-minute demo and questions, or a relaxed online launch party, gives warm supporters something to show up for and gives you a recording to reuse for months. It works best when it is short, has one host and one person driving the demo, and ends with a clear next step for viewers.

                ## Milestones
                1. A date, platform and 30-minute running order fixed.
                2. Invitations sent to the warm list and partners two weeks ahead.
                3. A full technical rehearsal on the same set-up the day before.
                4. The session held, recorded and posted with chapters.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 30-minute live session is held on the planned date after a full rehearsal, and the recording is posted with chapters within two days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a platform and a 30-minute running order"
                - "Invite the warm list and partners two weeks before"
                - "Rehearse the full demo on the same set-up the day before"
                - "Post the recording with chapters and a link to sign up"
            - name: App store release timed for launch
              description: |-
                ## Purpose
                Mobile apps add a gate no web launch has: store review can take days and can reject for reasons you did not expect, so a launch date announced before approval is a gamble. Submitting well ahead, preparing the store listing and screenshots, and holding the approved build for manual release lets you choose the moment the app goes public.

                ## Milestones
                1. The build submitted for store review at least two weeks before the launch date.
                2. Store listings complete with screenshots, preview video, keywords and privacy details.
                3. Approval received and the release set to manual so it goes live on your timing.
                4. Reviews and crash reports watched for the first 72 hours after release.

                ## Notes
                Store rules and review times change. Check each store's current guidelines before you submit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved build is held for manual release before launch day, with complete store listings in every store you ship to."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read each store's current review guidelines for your app category"
                - "Submit the build for review two weeks before the launch date"
                - "Complete listings with screenshots, preview video and privacy details"
                - "Set the approved release to manual so you control go-live"
            - name: Launch week with one release a day
              description: |-
                ## Purpose
                Some companies have more than one thing to announce, and a launch week (one announcement a day for five days) gives each feature its own moment while momentum builds across the week. It needs five finished things, five short posts and a page that collects them, and it falls flat if day four's feature is not actually ready.

                ## Milestones
                1. Five announcements chosen and confirmed as shipped or certain to ship.
                2. An order set so the strongest feature opens and the second strongest closes.
                3. A launch week page that adds each day's announcement.
                4. Each day's post, email and demo clip prepared before the week starts.

                ## Notes
                Start from the **Marketing campaign** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Five announcements go out on five consecutive days, each with a post, email and clip prepared before the week began."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick five announcements that are shipped or certain to ship"
                - "Order them with the strongest first and second strongest last"
                - "Build a launch week page that grows each day"
                - "Prepare all five posts and clips before the week begins"
            - name: Two-week launch retrospective
              description: |-
                ## Purpose
                Two weeks after launch the numbers have settled, the feedback has patterns and the team's memory is still fresh. A structured retrospective (what we set out to do, what happened by channel, what we would repeat and what we would never do again) turns one launch into lessons and stops the next one repeating the same mistakes.

                ## Milestones
                1. Results against the original goal and numbers compiled by channel.
                2. The feedback themes and top support issues summarised.
                3. A team session held on what worked, what did not and what surprised everyone.
                4. Five to ten written lessons stored where the next launch plan will find them.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A retrospective is held within three weeks of launch, and five to ten written lessons with results by channel are stored with the launch files."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compile results by channel against the original launch goal"
                - "Summarise the top feedback themes and support issues"
                - "Run a 60-minute retrospective with everyone who helped"
                - "Write five to ten lessons into the launch playbook folder"
            - name: Solo founder launch plan
              description: |-
                ## Purpose
                Launching alone means one person must post, reply, fix bugs and answer support across a day that can run 18 hours. A solo plan cuts the channels to two, pre-writes everything that can be pre-written, recruits two or three friends for specific hours and sets a hard rule for sleep, so the founder and the launch are both still standing on day two.

                ## Milestones
                1. Channels cut to the two that best fit the product.
                2. Every post, reply template and email drafted before the day.
                3. Two or three helpers booked for named hours, such as the support inbox or bug triage.
                4. A stop time set for the night, with an away note pinned on the listing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A solo launch plan names two channels, has every post pre-written, two helpers booked for named hours and a written stop time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Cut your channel list to the two best fits"
                - "Pre-write posts, reply templates and the waitlist email"
                - "Ask two friends to cover named hours of support or triage"
                - "Set a hard stop time for the night and write the away note"
            - name: B2B launch aimed at buyers, not makers
              description: |-
                ## Purpose
                Business software buyers rarely browse launch leaderboards; they hear about products from peers, analysts, trade newsletters and vendors they already use. A B2B launch puts its weight on a customer story with named results, a briefing for prospects, posts from the founders and early customers on the professional network buyers use, and direct emails to the pipeline.

                ## Milestones
                1. One or two early customer stories with permission to name the customer.
                2. A launch briefing or webinar scheduled for prospects.
                3. Founder and customer posts planned for the network your buyers use.
                4. A personal launch email sent to every open prospect and past conversation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one named customer story, a scheduled prospect briefing and a personal launch email to every open prospect are complete on launch day."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask one or two early customers to be named in a launch story"
                - "Schedule a 30-minute launch briefing for prospects"
                - "Plan founder and customer posts for your buyers' main network"
                - "Email every open prospect a personal note on launch day"
            - name: Developer tool or open-source launch
              description: |-
                ## Purpose
                Developers judge a tool by its README, docs and how long it takes to get a first result, not by its marketing site. Launching to developers means a repository that explains itself in 30 seconds, a quickstart that works on a clean machine, honest benchmarks or comparisons, and someone technical answering issues and threads all day.

                ## Milestones
                1. A README with what it is, a quickstart, an example and the licence.
                2. The quickstart run on a clean machine by someone outside the team.
                3. Docs covering installation, core concepts and one complete example.
                4. A plan for answering issues, forum threads and chat questions on launch day.

                ## Notes
                If you make performance claims, publish how you measured them. Developers will rerun the benchmark.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An outsider completes the quickstart on a clean machine, docs cover install, concepts and one full example, and launch-day support is assigned."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Rewrite the README so the first screen shows the tool and quickstart"
                - "Have an outsider run the quickstart on a clean machine"
                - "Publish docs with install, concepts and one full example"
                - "Assign who answers issues and threads on launch day"
            - name: Crowdfunding campaign launch for hardware
              description: |-
                ## Purpose
                Hardware startups often launch through a crowdfunding campaign, where the first 48 hours decide whether the campaign reaches its goal and gets promoted by the platform. That calls for a pre-launch list large enough to fund a big share of the target on day one, a campaign page with honest timelines and costs, and a backer update plan you will actually keep.

                ## Milestones
                1. A pre-launch reservation list sized against the share of the goal needed on day one.
                2. A campaign page with video, reward tiers, realistic delivery dates and risks stated.
                3. Manufacturing and shipping costs per reward checked so no tier loses money.
                4. A backer update schedule written that you can keep for a year.

                ## Notes
                Delivery dates slip on most hardware campaigns. Add a buffer and say plainly what could delay you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A campaign page with costed reward tiers and stated risks is ready, and the pre-launch list is sized to fund the day-one target."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Work out how many backers you need in the first 48 hours"
                - "Price each reward tier against manufacturing and shipping cost"
                - "Write a risks section with realistic delivery dates"
                - "Draft the first three backer updates before the campaign goes live"
            - name: Relaunch after a launch that fell flat
              description: |-
                ## Purpose
                Ten signups and silence after a launch is common and survivable, and most platforms and communities allow a second launch once the product has meaningfully changed. Working out honestly why the first one failed (wrong channel, weak message, product not ready, bad timing) and fixing that one thing before relaunching beats repeating the same day with more effort.

                ## Milestones
                1. The first launch's numbers and feedback reviewed, with one main cause identified.
                2. The cause fixed, with evidence that it is fixed.
                3. Each platform's rules on launching again checked.
                4. A relaunch date set, with what is genuinely new written in one sentence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written diagnosis names the main cause of the first launch's result, with evidence of the fix and a relaunch date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull the first launch's numbers and every comment into one document"
                - "Name the single most likely reason the launch fell flat"
                - "Check each platform's rules on launching the same product again"
                - "Write what is genuinely new in one sentence before setting a date"
            - name: Regulated product launch sign-off
              description: |-
                ## Purpose
                Startups in finance, health, insurance, children's products or anything handling sensitive data can break rules with a single launch post: an unqualified claim about returns, a health benefit or 'bank-grade security' can draw a regulator's attention. Getting launch copy, pages and offers reviewed by a qualified adviser before anything is scheduled keeps the launch from becoming a compliance problem.

                ## Milestones
                1. Every launch claim listed from posts, pages, emails and video.
                2. Claims needing evidence or disclaimers flagged.
                3. Launch materials reviewed by a qualified legal or compliance adviser.
                4. Approved wording frozen, with any later change sent back for a check.

                ## Notes
                This organises the review; it is not legal advice. The adviser decides what can be said.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every launch claim has been reviewed by a qualified adviser before scheduling, and the approved wording is frozen in one document."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect every claim from launch posts, pages, emails and video"
                - "Flag claims about money, health, safety or security for review"
                - "Book a review of launch materials with a qualified adviser"
                - "Freeze the approved wording and route any later changes back"
            - name: Staggered multi-channel launch sequence
              description: |-
                ## Purpose
                Experienced teams rarely launch everywhere at once: they stagger channels over a week or two so each gets full attention, early feedback improves later posts and the story builds, for example a technical forum, then a maker platform, then press, then niche communities. Designing that sequence, with what each step must hand to the next, gets more from the same assets.

                ## Milestones
                1. A sequence of four to six launch steps across one to three weeks.
                2. For each step, the channel, audience, asset and the lesson to carry forward.
                3. A rule for pausing the sequence if a step reveals a serious product problem.
                4. The sequence run, with each step's results logged before the next begins.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written sequence of four to six launch steps with a pause rule is run, and each step's results are logged before the next starts."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Order four to six channels into a sequence over one to three weeks"
                - "Note what each step must learn to improve the next post"
                - "Write the rule for pausing the sequence after a bad step"
                - "Log each step's results before starting the next"
            - name: Ninety-day launch cohort analysis
              description: |-
                ## Purpose
                Months later is when the true value of a launch shows: whether the people who arrived on the day stayed, paid and referred others compared with customers from other sources. Following launch cohorts by channel for 90 days tells you which channels deserve effort next time and whether the launch crowd was your real market or tourists.

                ## Milestones
                1. Launch signups tagged as a cohort, split by channel, in your analytics.
                2. Retention at day 7, 30 and 90 compared with non-launch signups.
                3. Paid conversion and referrals calculated by launch channel.
                4. A one-page conclusion on which channels to repeat.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page analysis 90 days after launch compares launch cohort retention and paid conversion by channel with other signups."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Tag all launch signups as a cohort split by channel"
                - "Check the launch cohort's retention against other signups @recurring(monthly:27)"
                - "Calculate paid conversion and referrals by launch channel"
                - "Write a one-page conclusion on which channels to repeat"
            - name: Company launch playbook
              description: |-
                ## Purpose
                By the second or third launch a startup should not be reinventing the run of show, checklist and asset list. Turning lessons, templates and timelines into a living playbook (what happens at six weeks, two weeks, the day before, the day and two weeks after) lets a new hire or a future marketing lead run the next launch without the founders carrying it in their heads.

                ## Milestones
                1. A timeline from six weeks before to two weeks after launch, with every step.
                2. Links to the reusable checklist, run of show, message document and FAQ bank.
                3. Lessons from each retrospective folded in.
                4. The playbook used by someone other than a founder for a launch moment.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written playbook with a full timeline and linked templates exists, and someone other than a founder has run a launch moment from it."
                cadence: rolling
              tasks:
                - "Write the launch timeline from six weeks out to two weeks after"
                - "Link the checklist, run of show, message document and FAQ bank"
                - "Fold the latest retrospective's lessons into the playbook @recurring(quarterly)"
                - "Hand the playbook to a non-founder to run the next launch moment"
            - name: Launch news for investors and partners
              description: |-
                ## Purpose
                Investors, partners and potential hires also read launch news, but it only helps if they hear it from you with the numbers in context. Planning who gets a short note on launch day, who gets full results two weeks later, and how any fundraising conversations are timed around the launch makes the attention count beyond customers.

                ## Milestones
                1. A list of current and prospective investors, partners and candidates to inform.
                2. A short launch-day note drafted for each group.
                3. A results update sent two weeks after launch with real numbers and lessons.
                4. Every warm inbound from investors or partners logged with a follow-up date.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Launch-day notes go to every listed investor and partner, and a results update with real numbers follows within three weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List investors, partners and candidates who should hear about the launch"
                - "Draft a three-line launch-day note for each group"
                - "Send a results update with real numbers two weeks after launch"
                - "Log every inbound investor or partner message with a follow-up date"
---

# Startup Public Launch Day

This area is for founders getting ready to take a product public, whether that means one big day on a maker platform, a technical forum post, a press announcement or a staged roll-out across communities. It starts with the foundations (a written goal, readiness checks, the date, the message, channels, tracking and roles), then the routines that run the countdown and the weeks after, the skills of writing launch posts, demos, pitches and replies, the decisions on launch shape, offers and capacity, the launch-day events themselves, variants for solo, B2B, developer, hardware, regulated and second launches, and finally the specialist work of staggered sequences, cohort analysis and a reusable playbook.

What repeats is a weekly countdown and asset review before the day, weekly community participation, a daily feedback triage and mentions scan through launch fortnight, weekly follow-up and press touches, monthly FAQ, changelog and cohort checks, and a quarterly calendar of launch moments and playbook refresh. The **Operational checklist**, **Metrics log**, **Content pipeline**, **Risk register**, **Marketing campaign** and **Meeting notes** templates pair with the readiness check, the tracking set-up, the asset pipeline, the risk register, launch week and the retrospective. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
