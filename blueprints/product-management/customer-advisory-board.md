---
id: product-management.customer-advisory-board
name: Customer Advisory Board
description: "A customer advisory board that earns its keep: charter, sponsor and member selection, agreements, quarterly sessions with pre-reads, closing the loop with members, and measuring what the board actually changed."
category: business
version: 1.0.0
tags: [product-management, customer-advisory-board, manager, founder, enterprise, advisory-board, strategic-customers, executive-relationships]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - board-meeting
    - meeting-notes
    - feedback-themes
    - metrics-log
    - onboarding-plan
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Customer Advisory Board
          description: "Recruiting and running a small group of strategic customers who review direction, test ideas early and give candid feedback on the product."
          projects:
            - name: Advisory board charter and purpose statement
              description: |-
                ## Purpose
                Without a written charter, an advisory board drifts into either a sales showcase or a complaints desk, and members stop clearing their diaries. A one-page charter states what the board exists to advise on, what it does not decide, how often it meets and what members get in return, so every later invitation and agenda has something to point back to.

                ## Milestones
                1. A one-page charter naming the board's purpose, the three to five topics it advises on and the topics it never covers.
                2. A plain statement that the board advises and the product team decides, with no promise that advice will be built.
                3. Meeting frequency, term length and expected time commitment written in hours per year.
                4. The charter reviewed by the executive sponsor, the head of customer success and legal.

                ## Notes
                Keep the charter short enough to attach to an invitation. If it needs more than one page, the scope is too wide.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page charter covering purpose, scope, cadence, commitment and the advise-not-decide rule is signed off by the sponsor and stored where the product team works."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the three strategic questions the board should help the company answer this year"
                - "Draft a one-page charter with purpose, scope, cadence and member commitment"
                - "Add a sentence stating the board advises and the product team decides"
                - "Send the draft to the sponsor, customer success lead and legal for comments"
            - name: Executive sponsor commitment and role
              description: |-
                ## Purpose
                Senior customers join an advisory board largely to be heard by senior people, and they notice quickly when the executive who invited them stops turning up. Securing a named sponsor at chief product officer, chief executive or founder level, with attendance and follow-through agreed in writing, protects the board's credibility from the first session.

                ## Milestones
                1. One named executive sponsor who has agreed to attend every session for at least the first year.
                2. The sponsor's role written down: opening each session, hearing the hardest feedback and owning the response.
                3. A deputy named for the rare session the sponsor cannot attend.
                4. Session dates for the first year held in the sponsor's calendar.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named executive sponsor and deputy have confirmed their role in writing and the first year's session dates are in both calendars."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book thirty minutes with the intended sponsor to walk through the charter"
                - "Write a short role note covering attendance, follow-through and tone"
                - "Agree a deputy sponsor for sessions the sponsor cannot attend"
                - "Brief the sponsor on members and open themes two weeks before each session @recurring(quarterly)"
            - name: Member selection criteria and board mix
              description: |-
                ## Purpose
                Boards picked by whoever shouted loudest in the last renewal end up advising on one segment's problems. Setting explicit criteria first (segment, region, company size, product maturity, seniority and willingness to speak candidly) gives a mix of eight to fifteen members that reflects where the product is heading, not only where the revenue sits today.

                ## Milestones
                1. Five to seven written selection criteria, each with a reason tied to the charter.
                2. A target mix table showing how many seats go to each segment, region and size band.
                3. A rule limiting any single segment or the top ten accounts to a set share of seats.
                4. Disqualifiers written down, such as an open escalation, a live renewal negotiation or a direct competitor.

                ## Notes
                Include at least one or two customers who are struggling with the product. A board of happy reference accounts tells you little you do not already know.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A criteria sheet with a seat mix table and written disqualifiers is agreed by product, customer success and sales leadership before any invitation goes out."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the customer list by segment, region, size and product maturity"
                - "Draft five to seven selection criteria linked to the charter's topics"
                - "Build a seat mix table with a cap for the largest accounts"
                - "Agree the criteria and disqualifiers with sales and customer success leads"
            - name: Board size, term length and rotation rules
              description: |-
                ## Purpose
                Twelve members is enough for a lively discussion and small enough for everyone to speak; thirty becomes an audience. Deciding size, term length and how seats rotate before anyone joins avoids the awkward moment two years in when a founding member has to be eased out with no rule to point to.

                ## Milestones
                1. A target board size chosen, with the reasoning written down.
                2. Term length set, typically one or two years, with a maximum number of renewals.
                3. A staggered rotation plan so no more than a third of seats change in any year.
                4. A rule for what happens when a member changes job or their company leaves.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Board size, term length, renewal limit and the job-change rule are written into the charter before the first invitation is sent."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide the target number of seats and write one line on why"
                - "Set term length and the maximum number of renewals"
                - "Sketch a staggered rotation so seats do not all expire together"
                - "Add the job-change and company-exit rule to the charter"
            - name: Candidate member shortlist with account teams
              description: |-
                ## Purpose
                Account managers know which customer leaders are thoughtful, which are about to leave and which will treat the board as a negotiating lever. Building the shortlist with them, scored against the agreed criteria, produces twenty to twenty-five named candidates for twelve seats and stops sales from nominating only their friendliest contacts.

                ## Milestones
                1. Twenty to twenty-five named candidates, each scored against the selection criteria.
                2. Each candidate's account owner consulted and any risk to the relationship noted.
                3. A ranked list with a first wave and a reserve wave of invitations.
                4. The shortlist checked against the seat mix table and the disqualifiers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked shortlist of at least twenty candidates, scored against the criteria and reviewed by each account owner, is split into a first and reserve wave."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each account lead to nominate two candidates with a reason for each"
                - "Score every nomination against the selection criteria in one sheet"
                - "Check each candidate against the disqualifiers and the seat mix"
                - "Split the ranked list into a first wave and a reserve wave"
            - name: Invitation letter and member commitment one-pager
              description: |-
                ## Purpose
                Busy executives say yes to invitations that are personal, specific about the time asked and clear about what they will get, such as early sight of direction and peers they would not otherwise meet. A short letter from the sponsor plus a one-page summary of commitment, dates and confidentiality turns a vague request into an easy decision.

                ## Milestones
                1. An invitation letter signed by the executive sponsor, personalised for each candidate.
                2. A one-page summary of purpose, time commitment, first-year dates and what members receive.
                3. A follow-up sequence for candidates who have not replied within two weeks.
                4. Acceptances tracked against the seat mix, with reserve candidates invited where gaps remain.

                ## Notes
                Ask the account owner to give the candidate a heads-up before the letter lands. A cold invitation from an executive they have never met reads like marketing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Personalised invitations have gone to the first wave and at least eight acceptances are recorded against the seat mix table."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft a sponsor invitation letter from the charter"
                - "Write the one-page member commitment summary with first-year dates"
                - "Ask each account owner to warn their candidate before the letter arrives"
                - "Send the first wave of invitations and log every reply"
                - "Invite reserve candidates to fill any gaps in the seat mix"
            - name: Member agreement and confidentiality terms
              description: |-
                ## Purpose
                During sessions, unreleased plans flow out and customers' own business details flow in, and both sides need to know what can be repeated. A short member agreement, drafted with your legal team, covers confidentiality, how the company may use the feedback members give, and that membership creates no purchasing obligation, so nobody has to improvise these answers in the room.

                ## Milestones
                1. A member agreement drafted by or with legal covering confidentiality in both directions.
                2. A clause on how feedback and suggestions may be used, agreed with legal.
                3. A statement that membership carries no purchase commitment and no promise of features.
                4. Signed agreements on file for every member before the first session.

                ## Notes
                This project organises the work; the terms themselves are for your legal team to decide. Many members' employers have their own review process, so allow two to four weeks for signatures.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every accepted member has a signed agreement on file covering confidentiality, feedback use and no purchase obligation before the first session."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send legal the charter and ask which existing terms cover advisory members"
                - "List the questions members commonly raise about confidentiality and feedback use"
                - "Send the agreed agreement to every accepted member with a signing deadline"
                - "Chase unsigned agreements three weeks before the first session"
            - name: Gifts, travel and expense policy for members
              description: |-
                ## Purpose
                Paying for a member's flight, hotel or a generous gift can breach their employer's ethics rules or anti-bribery law, especially for public sector and regulated customers. Agreeing in advance what the company will and will not cover, checked with compliance, keeps the board clean and saves members from embarrassing conversations with their own procurement teams.

                ## Milestones
                1. A written policy stating which travel, meals and thank-you gifts the company covers and the value limits.
                2. The policy checked by compliance or legal against anti-bribery rules.
                3. A note in the invitation pack asking members to confirm their employer's own rules.
                4. A log of every expense or gift provided to a member, kept for audit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A compliance-reviewed expense and gifts policy is in the member pack and every member benefit provided is recorded in a log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask compliance which member expenses and gifts need approval"
                - "Write a one-page policy with value limits for travel, meals and gifts"
                - "Flag public sector and regulated members for an extra check"
                - "Review the gifts and expenses log against the policy @recurring(yearly)"
            - name: Advisory board budget and annual plan
              description: |-
                ## Purpose
                An advisory board costs more than it looks once venue, travel, catering, facilitation time and the team's hours are counted, and a board that loses its budget halfway through the year damages relationships with the very customers it was meant to strengthen. A costed annual plan, agreed with the sponsor, protects the board through the next budget squeeze.

                ## Milestones
                1. A costed annual plan covering virtual sessions, any in-person summit, travel, catering and tools.
                2. Internal time estimated for the board owner, sponsor and presenters.
                3. The budget approved and held under a named cost centre.
                4. A monthly comparison of actual spend against plan.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved annual budget with line items and internal hours sits under a named cost centre, with spend compared against it each month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every cost line for a year of sessions and one summit"
                - "Estimate internal hours for the owner, sponsor and presenters"
                - "Get the budget approved under a named cost centre"
                - "Compare actual spend with the board budget @recurring(monthly:28)"
            - name: Member profiles and relationship map
              description: |-
                ## Purpose
                Behind twelve senior members sit dozens of relationships across twelve accounts: the member, their account manager, their support history, what they said last time. A profile per member, linked to their company and account team, means anyone preparing a session or a call can see context in two minutes instead of asking around.

                ## Milestones
                1. One profile per member with role, company, account owner, term dates and topics they care about.
                2. Each member's last three comments from sessions or calls recorded on their profile.
                3. Open commitments the company has made to each member listed.
                4. Profiles reviewed and updated after every session.

                ## Notes
                Start from the **Person** template. Keep personal details to what is needed for the board and nothing more.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every member has a current profile with account owner, term dates, recent comments and open commitments, updated within a week of each session."
                cadence: rolling
              tasks:
                - "Create a profile for each accepted member from the person template"
                - "Add each member's account owner, term dates and stated priorities"
                - "Update each member profile after any contact @recurring(monthly:9)"
            - name: Quarterly virtual advisory session
              description: |-
                ## Purpose
                Ninety minutes on video every quarter is the working core of most advisory boards: frequent enough to keep members connected, short enough to protect senior diaries. Running it as a fixed rhythm, with the same structure each time (direction update, one deep discussion, one exercise, open floor), lets members prepare and makes their attendance a habit.

                ## Milestones
                1. Four session dates a year fixed at least six months ahead.
                2. A standard ninety-minute running order used every session.
                3. Attendance of at least three quarters of members at each session.
                4. Each session followed by notes and actions within five working days.

                ## Notes
                Hold the slot at the same time of day each quarter and rotate it only if members span time zones badly enough to exclude someone.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four sessions held in twelve months with at least 75 percent attendance at each and notes sent within five working days."
                cadence: rolling
              tasks:
                - "Fix the next four session dates and send calendar holds to all members"
                - "Write the standard ninety-minute running order"
                - "Hold the quarterly advisory session @recurring(quarterly)"
                - "Record attendance for each session in the scorecard"
            - name: Session agenda and pre-read pack
              description: |-
                ## Purpose
                Arriving cold, members spend the first half hour catching up and the discussion never reaches the hard questions. A short pre-read, sent ten days ahead with the agenda and two or three questions to think about, means the session starts at the decision rather than the background.

                ## Milestones
                1. An agenda format with timings, a named owner per item and the question each item must answer.
                2. A pre-read of no more than six pages, including what changed since last session.
                3. Two or three prompt questions members can think about in advance.
                4. The pack sent ten days before every session.

                ## Notes
                Start from the **Board meeting** template, treating each agenda item as a question for the board rather than a presentation slot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every session in a year has an agenda and pre-read of six pages or fewer sent to members at least ten days ahead."
                cadence: rolling
              tasks:
                - "Set up the agenda format from the board meeting template"
                - "Collect agenda items and their questions from presenters three weeks out"
                - "Send the agenda and pre-read pack ten days before the session @recurring(quarterly)"
                - "Trim any presenter material that runs past the six-page limit"
            - name: Session notes and decision capture
              description: |-
                ## Purpose
                Advisory sessions produce a lot of talk and a few things worth acting on, and both get lost if nobody writes them down in a consistent shape. Notes that separate what members said, where they agreed or disagreed and what the company committed to make the follow-up honest and the next session shorter.

                ## Milestones
                1. A named note-taker for every session who is not presenting or facilitating.
                2. Notes in a fixed format: key points by topic, areas of agreement, dissent and commitments made.
                3. Comments attributed by role or segment rather than by name, unless members agree otherwise.
                4. Notes shared with members and the internal team within five working days.

                ## Notes
                Start from the **Meeting notes** template. Record dissent as carefully as agreement; a single strong objection from a large account is often the most useful line in the notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Notes for every session in a year use the fixed format, record dissent and commitments, and reach members within five working days."
                cadence: rolling
              tasks:
                - "Create a session notes page from the meeting notes template"
                - "Agree with members how comments will be attributed in shared notes"
                - "Name a note-taker who is not presenting at the next session"
                - "Send cleaned notes to members within five working days of each session"
            - name: You said, we did follow-up to members
              description: |-
                ## Purpose
                Members judge an advisory board by what happens after the session, and silence until the next one reads as being ignored. A short update each quarter that lists what members raised, what the company did, what it decided not to do and why, is the single strongest reason senior people keep giving their time.

                ## Milestones
                1. A standing update format with three sections: acted on, still considering and decided against.
                2. Every commitment from the last session accounted for in the update.
                3. Reasons given for each idea the company chose not to pursue.
                4. The update sent within six weeks of each session.

                ## Notes
                Saying no with a reason builds more trust than a long list of maybes. Members are senior enough to accept trade-offs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A you said, we did update covering every commitment from the previous session goes to members within six weeks of each session for four consecutive quarters."
                cadence: rolling
              tasks:
                - "Draft the three-section update format: acted on, considering, decided against"
                - "List every commitment made at the last session and its owner"
                - "Send the you said, we did update to members @recurring(quarterly)"
            - name: Member pulse calls between sessions
              description: |-
                ## Purpose
                Four sessions a year is not enough contact to keep a senior relationship warm, and some members will only say the hardest thing one to one. A twenty-minute call with two members each month means every member hears from the board owner at least twice a year outside sessions, and early warnings reach the product team before they reach the renewal.

                ## Milestones
                1. A call rota covering every member at least twice a year.
                2. Three standard questions used on every call, plus one specific to that member.
                3. Each call summarised in a few lines on the member's profile.
                4. Any churn or escalation signal passed to the account owner within a day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every member receives at least two pulse calls a year, each summarised on their profile, with risk signals passed to account owners within a day."
                cadence: rolling
              tasks:
                - "Draw up a call rota that reaches every member twice a year"
                - "Write the three standard pulse questions"
                - "Call two members for a twenty-minute pulse check @recurring(monthly:12)"
                - "Pass any churn signal to the account owner the same day"
            - name: Private member space between meetings
              description: |-
                ## Purpose
                Much of an advisory board's value comes from members talking to each other, and that rarely happens if the only channel is the quarterly call. A small private space, such as a shared channel or forum, with one good question posted each month and replies answered promptly, keeps the board alive between sessions without adding meetings.

                ## Milestones
                1. A private space set up that every member can reach from their work tools.
                2. House rules posted, including confidentiality and no selling from either side.
                3. One discussion question posted each month by the board owner or a member.
                4. Member threads answered by the product team within two working days.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The member space has a posted question every month and member threads answered within two working days for six consecutive months."
                cadence: rolling
              tasks:
                - "Post the house rules for the member space"
                - "Post one discussion question in the member space @recurring(monthly:3)"
                - "Answer open member threads in the space @recurring(weekly:tue)"
                - "Invite one member each quarter to post a question of their own"
            - name: Advisory input log and recurring themes
              description: |-
                ## Purpose
                Twelve members over a year produce hundreds of comments, and without a log the board owner remembers the most recent and the loudest. Logging each piece of input with the member's segment and topic, then tagging recurring themes monthly, shows which points come from one account and which come from the whole board.

                ## Milestones
                1. A single input log with date, member segment, topic, quote or summary and source.
                2. A short list of theme tags reused across sessions, calls and the member space.
                3. A monthly tagging pass that keeps the log current.
                4. A themes page showing how many members raised each theme.

                ## Notes
                Start from the **Feedback themes** template. Keep this log for board input only; general customer feedback belongs in the wider feedback system.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The input log holds every session, call and thread comment for twelve months, tagged by theme, with a themes page counting members per theme."
                cadence: rolling
              tasks:
                - "Create the board themes page from the feedback themes template"
                - "Agree a list of ten or fewer theme tags"
                - "Tag new advisor input in the log @recurring(monthly:25)"
                - "Count how many members raised each theme before every session"
            - name: Account team briefings before and after sessions
              description: |-
                ## Purpose
                Account managers who learn after the fact that their customer criticised the product in front of the chief executive feel blindsided, and those who use the board to push renewals poison it. Briefing account teams before each session and sharing relevant notes afterwards, with a clear rule against selling in the room, keeps sales informed without letting them steer.

                ## Milestones
                1. A written rule that no selling, pricing talk or renewal discussion happens in board settings.
                2. A short pre-session note to each account owner covering what their member will see.
                3. A post-session note with their member's comments and any follow-up needed.
                4. Account owners confirming they have read the rule on selling.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every account owner with a member receives a pre-session and post-session note for each session, and all have acknowledged the no-selling rule."
                cadence: rolling
              tasks:
                - "Write the one-paragraph rule on selling in board settings"
                - "Ask every account owner with a member to acknowledge the rule"
                - "Send account owners the member briefing notes @recurring(quarterly)"
                - "Pass member follow-ups to the right account owner after each session"
            - name: Advisory board health scorecard
              description: |-
                ## Purpose
                Decline is gradual: attendance slips from eleven to seven, the same three members do all the talking, follow-ups arrive later each quarter. A one-page scorecard of a few measures, updated quarterly and shown to the sponsor, catches the slide while it can still be fixed.

                ## Milestones
                1. Five or six measures chosen: attendance, members speaking, follow-up time, inputs acted on and member satisfaction.
                2. A target set for each measure.
                3. The scorecard updated after every session.
                4. Any measure below target for two quarters discussed with the sponsor.

                ## Notes
                Start from the **Metrics log** template. Count the number of members who spoke at least twice, not just who logged in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scorecard with five or six targeted measures is updated after four consecutive sessions and reviewed with the sponsor each time."
                cadence: rolling
              tasks:
                - "Set up the scorecard from the metrics log template"
                - "Choose five or six measures and a target for each"
                - "Update the board scorecard and share it with the sponsor @recurring(quarterly)"
            - name: Annual membership renewal and rotation round
              description: |-
                ## Purpose
                Renewing everyone by default fills the board with long-serving members who have stopped attending, while dropping people abruptly offends valuable customers. An annual round that checks each member's contribution, offers renewal or a graceful exit, and fills open seats from a refreshed shortlist keeps the board current and the goodbyes warm.

                ## Milestones
                1. Each member's attendance and contribution reviewed against the year's scorecard.
                2. Renewal offered to members who meet the bar and are within the term limit.
                3. A personal thank-you and alumni status offered to departing members.
                4. Open seats filled from a refreshed shortlist that respects the seat mix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every member's seat has a recorded renew or rotate decision each year, departing members have been thanked personally, and open seats are filled within one quarter."
                cadence: cyclic
              tasks:
                - "Review each member's attendance and contribution for the year"
                - "Run the membership renewal and rotation round @recurring(yearly)"
                - "Write a personal thank-you to each departing member from the sponsor"
                - "Fill open seats from the reserve list and refreshed nominations"
            - name: Facilitating senior customers without selling
              description: |-
                ## Purpose
                Product managers are used to presenting, and the instinct in front of important customers is to defend the product. Learning to facilitate instead (framing a question, staying quiet, drawing out the quiet member, letting a disagreement run) is what separates a board that gives candid advice from one that politely watches slides.

                ## Milestones
                1. Two facilitation techniques practised: silent writing before discussion and round-robin responses.
                2. One session co-facilitated with an experienced facilitator, with written feedback received.
                3. A personal checklist of phrases that invite critique rather than defend the product.
                4. Talking time by the company kept under a third of a session, measured once.

                ## Notes
                Ask a colleague to time how long company staff talk in one session. Most teams are shocked to find it is over half.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One session has been co-facilitated with written feedback, and a timed session shows company staff talking for less than a third of it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read one practical guide on facilitating executive groups"
                - "Practise silent writing and round-robin formats in an internal meeting"
                - "Ask an experienced facilitator to co-run one advisory session"
                - "Ask a colleague to time company talking in the next session"
            - name: Presenting direction early without promising dates
              description: |-
                ## Purpose
                Seeing where the product is heading before it is fixed is what members want most, but every slide they see becomes a commitment in their mind and, often, in their next renewal conversation. Learning to show direction as problems and options with confidence levels, rather than features and dates, gets useful reactions without creating promises the team cannot keep.

                ## Milestones
                1. A presentation pattern that shows problems, options and confidence instead of feature lists.
                2. A standard caveat agreed with legal and the sponsor for forward-looking material.
                3. One direction session rehearsed in front of a sceptical internal audience.
                4. No delivery dates shown on any slide in a full year of sessions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full year of session decks shows direction as problems and options with confidence levels, uses the agreed caveat and contains no delivery dates."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Rewrite one roadmap slide as a problem, options and confidence level"
                - "Agree a standard forward-looking caveat with legal and the sponsor"
                - "Rehearse the next direction talk with a sceptical colleague"
                - "Remove every delivery date from the next session deck"
            - name: Prioritisation exercises with advisors
              description: |-
                ## Purpose
                Ask a board whether ten ideas matter and the answer is yes to all ten. Structured exercises, such as spreading a hundred points across options, buying features with a fixed budget or forced ranking, make members reveal trade-offs and show where they disagree with each other, which is far more useful than a show of hands.

                ## Milestones
                1. Three exercise formats learned and their strengths written down.
                2. One exercise run in a session with six to ten options.
                3. Results broken down by segment to show where members differed.
                4. The results presented back to members alongside the company's own view.

                ## Notes
                Keep options at a similar size and level of detail, or members will always pick the vague, ambitious one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A points or budget exercise has been run with six to ten options, results split by segment and shared back with members."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare the hundred-points, buy-a-feature and forced ranking formats"
                - "Pick six to ten options of similar size for the next session"
                - "Run the chosen exercise and capture each member's allocation"
                - "Split the results by segment before sharing them back"
            - name: Drawing out disagreement in the room
              description: |-
                ## Purpose
                Senior people in a group with peers and a vendor's executive tend to converge politely, and the board ends up endorsing whatever was presented. Techniques such as assigning a member to argue the opposite case, asking who would not buy this, and anonymous polling before discussion bring out the objections that would otherwise surface only in a churn conversation.

                ## Milestones
                1. Three techniques for surfacing dissent learned and tried.
                2. Anonymous polling used before discussion in at least one session.
                3. A question bank of challenging prompts kept for future sessions.
                4. Dissenting views recorded in the notes for every session where they arose.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three dissent techniques have been tried in sessions, anonymous polling used at least once and a question bank of at least fifteen prompts kept."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write fifteen challenging prompts for the question bank"
                - "Set up an anonymous poll to open the next discussion item"
                - "Ask one member in advance to argue against the proposal"
                - "Check the session notes record each dissenting view"
            - name: Weighing board advice against wider evidence
              description: |-
                ## Purpose
                However articulate, twelve senior customers are a small, unrepresentative sample, often from the largest accounts, and their advice can pull the product towards a few loud needs. Learning to set board input beside usage data, support trends and wider research, and to say so openly, keeps the board as one strong signal rather than the steering wheel.

                ## Milestones
                1. Each major board theme checked against usage data, support volume and wider research.
                2. A simple label for each theme: confirmed, board only or contradicted by other evidence.
                3. One theme where the board and wider evidence disagreed written up with the decision made.
                4. The method explained to the sponsor so they understand why advice is weighed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The top five board themes each carry a confirmed, board-only or contradicted label backed by named evidence, reviewed with the sponsor."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the five themes the board raised most often this year"
                - "Find usage, support or research evidence for each theme"
                - "Label each theme confirmed, board only or contradicted"
                - "Explain the labelling method to the sponsor in a short note"
            - name: Writing the board readout for leadership
              description: |-
                ## Purpose
                Leaders who never attend sessions hear about the board second-hand, and its budget is the first to go when they cannot see what it produced. A two-page readout after each session, leading with what members said that changes a decision, keeps leadership engaged and gives the board owner a record of influence.

                ## Milestones
                1. A two-page readout format: headline, decisions affected, themes, risks and asks of leadership.
                2. Member quotes included only where attribution has been agreed.
                3. The readout sent to the leadership team within a week of each session.
                4. At least one leadership action or question captured from each readout.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Readouts in the agreed two-page format reach leadership within a week of each session for a full year, each recording a leadership response."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft the two-page readout format with a decisions-affected section"
                - "Ask the agent to summarise the last session notes into the readout format"
                - "Send the readout to the leadership team within a week"
                - "Record each leadership action or question that follows"
            - name: Learning from peer companies' advisory boards
              description: |-
                ## Purpose
                Most companies in your market or a neighbouring one have tried an advisory board, and their owners will usually share what went wrong over a coffee. Talking to three or four peers about format, size, budget and what made members stay is the fastest way to avoid repeating their early mistakes.

                ## Milestones
                1. Three or four peer board owners identified through your network or industry groups.
                2. A short interview guide covering format, size, cost, retention and influence.
                3. Each conversation summarised in a page.
                4. Three changes to your own plan made as a result.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three peer board owners have been interviewed, each summarised, and three resulting changes to the plan are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your network for three people who run a customer advisory board"
                - "Write an eight-question interview guide"
                - "Hold and summarise each peer conversation"
                - "Note three changes to your board plan from what you heard"
            - name: Virtual, in-person or hybrid format decision
              description: |-
                ## Purpose
                In-person meetings build trust between members that video rarely matches, but they cost a day of travel for senior people and a large share of the budget. Choosing deliberately between all virtual, a yearly summit with virtual quarters, or a hybrid, using member preferences and your budget, avoids a format that half the board cannot attend.

                ## Milestones
                1. Members asked for their preferred format and travel limits.
                2. Costs and attendance risk estimated for each option.
                3. A format chosen with the reasoning recorded.
                4. The format reviewed after the first year against attendance and scorecard results.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded format decision names the mix of virtual and in-person sessions, the cost and the member preferences behind it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send members a three-question survey on format and travel limits"
                - "Cost an all-virtual, summit-plus-virtual and hybrid year"
                - "Choose the format and write the reasons in a paragraph"
                - "Share the decision with members alongside the first-year dates"
            - name: Choosing a platform for the member space
              description: |-
                ## Purpose
                Few senior members will install a new tool just to talk to a vendor, and many employers block unfamiliar platforms. Comparing a shared channel in tools members already use, a hosted community platform and a simple email list against security approval, ease of access and cost leads to a space people actually open.

                ## Milestones
                1. Three platform options listed with access, security and cost notes.
                2. Members asked which tools their employer permits.
                3. Your security team's view recorded for the shortlisted option.
                4. One platform chosen and access confirmed for every member.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform is chosen with security sign-off and every member has confirmed they can sign in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask members which collaboration tools their employer allows"
                - "Compare three platform options on access, security and cost"
                - "Get your security team's view on the preferred option"
                - "Confirm every member can sign in to the chosen space"
            - name: Executive board versus practitioner board split
              description: |-
                ## Purpose
                Vice presidents want to discuss strategy and market direction, while the administrators and power users who live in the product want to argue about workflows, and putting them in one room frustrates both. Deciding whether to run one board, two tiers or an executive board with practitioner working groups matches the conversation to the people.

                ## Milestones
                1. The topics each audience needs written in two columns.
                2. Three structures compared: single board, two boards, or one board with practitioner groups.
                3. A structure chosen with its cost in time and budget.
                4. The charter updated to reflect the chosen structure.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on board structure, with cost and topics per audience, is reflected in an updated charter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the topics executives and practitioners each need to discuss"
                - "Compare a single board, two boards and practitioner working groups"
                - "Estimate the extra time and budget a second tier would need"
                - "Update the charter to the structure you choose"
            - name: Reviving attendance and member engagement
              description: |-
                ## Purpose
                When attendance drops below two thirds, the cause is usually one of a few things: sessions that feel like presentations, no visible follow-through, bad timing or members who were the wrong pick. Diagnosing which, by asking members directly and checking the scorecard, leads to a fix that works instead of more reminder emails.

                ## Milestones
                1. The attendance and speaking trend for the last four sessions charted.
                2. Five members, including two absentees, asked what would make sessions worth their time.
                3. The main cause named and one change agreed for the next session.
                4. Attendance back above three quarters within two sessions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named cause and one agreed change are recorded, and attendance is back above 75 percent within two sessions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Chart attendance and speaking for the last four sessions"
                - "Call two absent members and ask what would bring them back"
                - "Pick one change to make at the next session"
                - "Compare attendance after two sessions with the earlier trend"
            - name: Rebalancing a board dominated by largest accounts
              description: |-
                ## Purpose
                Boards often begin with the biggest customers, and before long their requests set the agenda and smaller or newer segments stop speaking. Rebalancing through seat caps at rotation, inviting growth-segment members and structuring discussion so every segment gets airtime keeps the board advising on the whole market.

                ## Milestones
                1. Share of seats and speaking time by account size measured.
                2. A target mix for the next rotation agreed with the sponsor.
                3. Two or three members from under-represented segments invited.
                4. Session formats adjusted so each segment responds on every major topic.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "After one rotation, no single size band holds more than half the seats and every segment responds on each major session topic."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Measure seats and speaking time by account size for the last year"
                - "Agree a target mix for the next rotation with the sponsor"
                - "Nominate candidates from under-represented segments"
                - "Change one session format so every segment answers in turn"
            - name: Tracing advisor input to product decisions
              description: |-
                ## Purpose
                Members ask what happened to their idea, leadership asks what the board has influenced, and without a trail neither question has an answer. Linking each significant piece of board input to the decision it informed, whether that was build, defer or decline, creates evidence of influence and makes the you said, we did update quick to write.

                ## Milestones
                1. Each significant input in the log given a decision status: informed, deferred, declined or open.
                2. A link from each informed input to the decision record or spec it shaped.
                3. Open items reviewed monthly so none sit unanswered for more than two quarters.
                4. A yearly count of decisions the board influenced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every significant board input carries a decision status, informed items link to a decision record and no item has been open for more than two quarters."
                cadence: rolling
              tasks:
                - "Add a decision status column to the advisory input log"
                - "Link each informed input to the spec or decision record it shaped"
                - "Check every open advisor input has an owner and a status @recurring(monthly:17)"
            - name: Member recognition and thank-you plan
              description: |-
                ## Purpose
                Hours of senior time go into the board for no fee, and a generic swag box does not repay that. A thoughtful recognition plan within the gifts policy, such as early access, a named acknowledgement in a release, a donation in their name or an introduction to a peer they want to meet, keeps members feeling valued and makes renewal an easy yes.

                ## Milestones
                1. Four or five recognition options chosen that sit within the gifts policy.
                2. Each member asked which kinds of recognition they and their employer welcome.
                3. Recognition given at least once a year to every member.
                4. Every item of recognition recorded in the gifts and expenses log.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every member has received at least one policy-compliant form of recognition in the year, each recorded in the gifts and expenses log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List five recognition options that fit within the gifts policy"
                - "Ask each member which kinds of recognition they welcome"
                - "Plan one recognition moment per member across the year"
                - "Record each item in the gifts and expenses log"
            - name: First advisory board session
              description: |-
                ## Purpose
                The first session sets expectations for every later one, and members decide in those two hours whether this is worth their time. Planning it carefully, with personal introductions, the charter, one real question the company is wrestling with and a visible commitment from the sponsor, gives the board a strong start.

                ## Milestones
                1. A pre-call with each member to explain the format and hear their hopes for the board.
                2. An agenda with introductions, the charter, one live strategic question and an open floor.
                3. The sponsor opening the session and committing to the follow-up.
                4. Notes and a you said, we did plan sent within a week.
                5. A two-question member survey on the session collected.

                ## Notes
                Bring a real, unresolved question to the first session. Members can tell when a question has already been answered and they are being asked to applaud.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first session is held with at least 80 percent of members, notes go out within a week and a member survey is completed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Book a fifteen-minute pre-call with each new member"
                - "Choose one unresolved strategic question for the first session"
                - "Rehearse the running order with the sponsor and presenters"
                - "Send a two-question survey to members the day after the session"
            - name: Annual in-person advisory summit
              description: |-
                ## Purpose
                One day together in person, usually once a year, is where members form peer relationships and where the most candid conversations happen over dinner. Planning six months ahead, with a venue members can reach, a programme built around two or three real strategic questions and the policies on travel already agreed, turns a costly day into the highlight of the board year.

                ## Milestones
                1. A date and city chosen with input from members on travel.
                2. A venue booked and the travel and expenses approach confirmed against the policy.
                3. A programme built around two or three strategic questions with working sessions, not keynotes.
                4. A dinner or social element that lets members talk without staff steering.
                5. Notes, a readout and a follow-up sent within two weeks.

                ## Notes
                Hold the summit alongside an event members already travel to, where it makes sense, to save them a trip.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The summit is held with at least two thirds of members attending in person, and notes and a readout are sent within two weeks."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Ask members which month and city would suit their travel"
                - "Book a venue and confirm travel cover against the expenses policy"
                - "Build a programme around two or three strategic questions"
                - "Start planning the next summit six months ahead @recurring(yearly)"
            - name: Direction preview session under confidentiality
              description: |-
                ## Purpose
                Before a major strategic bet is locked, a dedicated session where members see the thinking early and react under their agreement can save months of building the wrong thing. Preparing it carefully, with exactly what can be shown, what members are asked to decide and how their reactions feed the decision, gets the benefit without leaks or implied promises.

                ## Milestones
                1. The material cleared with legal and the sponsor against the member agreement.
                2. A list of specific questions members are asked to react to.
                3. Every attending member's agreement confirmed as current before the session.
                4. Reactions recorded and set against the decision before it is finalised.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A preview session is held with cleared material and current agreements for every attendee, and member reactions are recorded in the decision record."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose the strategic bet that most needs early member reaction"
                - "Clear the preview material with legal and the sponsor"
                - "Confirm every attendee has a current signed agreement"
                - "Add member reactions to the decision record before it is final"
            - name: Advisory dinner at an industry conference
              description: |-
                ## Purpose
                When several members attend the same conference, a small dinner the night before costs little and gives the relationships a lift that months of video calls cannot. Planning it as a light-touch extra, with a single discussion question and no slides, adds an informal touchpoint without another formal session.

                ## Milestones
                1. The conferences most members attend identified.
                2. Invitations sent to members attending, within the expenses policy.
                3. One discussion question chosen for the table.
                4. A short note of what was discussed added to the input log.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dinner is held with at least four members during a conference, within the expenses policy, and its discussion is logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask members which conferences they plan to attend this year"
                - "Book a quiet table for the night before the chosen conference"
                - "Pick one discussion question and leave the slides behind"
                - "Add the dinner discussion to the advisory input log"
            - name: New member onboarding pack and call
              description: |-
                ## Purpose
                Joining mid-cycle means walking into a group with in-jokes, history and a vocabulary a new member does not share, and newcomers often stay quiet for two sessions. A short pack and a thirty-minute welcome call covering the charter, past themes and what the company did with earlier advice brings them up to speed before their first session.

                ## Milestones
                1. An onboarding pack with the charter, member list, past themes and the latest follow-up update.
                2. A welcome call with the board owner held before the member's first session.
                3. An introduction made to one existing member as a buddy.
                4. The new member asked for one topic they want the board to cover.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every new member receives the onboarding pack, a welcome call and a buddy introduction before their first session."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build the onboarding pack from the onboarding plan template"
                - "Book a thirty-minute welcome call with each new member"
                - "Pair each new member with an existing member as a buddy"
                - "Ask each new member for one topic they want covered"
            - name: Year-one advisory board retrospective
              description: |-
                ## Purpose
                After four sessions there is enough evidence to judge whether the board is working, what members value and what should change. A structured retrospective with members, the sponsor and the internal team, set against the charter, produces a short list of changes for year two and a clear answer for leadership on whether to continue.

                ## Milestones
                1. Members surveyed on value, format, follow-through and what to change.
                2. The scorecard and decisions-influenced count summarised for the year.
                3. A retrospective session held with the sponsor and internal team.
                4. Three to five changes for year two agreed and written into the charter.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A year-one retrospective with member survey results and the scorecard is held, and three to five agreed changes appear in the updated charter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send members a short survey on the board's first year"
                - "Summarise the scorecard and the decisions the board influenced"
                - "Hold the retrospective with the sponsor and internal team"
                - "Write the agreed year-two changes into the charter"
            - name: Founder's first advisory board with early customers
              description: |-
                ## Purpose
                Founders with fifteen to fifty customers often run an informal board already, through calls with their favourite accounts, and formalising it gives those customers a reason to stay engaged as the company grows. Keeping it small (five to eight members), personal and focused on the market problem rather than the product backlog suits a team with no time for heavy process.

                ## Milestones
                1. Five to eight early customers invited personally by the founder.
                2. A half-page charter and a light confidentiality note agreed.
                3. A video session every quarter run by the founder with no slides beyond one page.
                4. One founder decision each quarter explicitly shaped by the board, written down.

                ## Notes
                Resist inviting investors to sessions. Customers speak differently when the people funding the company are listening.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five to eight customers have accepted, two quarterly sessions are held and one founder decision per session is recorded as board-informed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick five to eight early customers whose judgement you trust"
                - "Write a half-page charter and a light confidentiality note"
                - "Call each customer personally to invite them"
                - "Record one decision the board shaped after each session"
            - name: Handing the board from founder to product leader
              description: |-
                ## Purpose
                As a company grows, the founder who started the board can no longer run it, and members who joined for the founder's attention may quietly drift. A deliberate handover, with the founder introducing the new owner, staying as sponsor for a period and personally explaining the change, keeps the relationships intact.

                ## Milestones
                1. The new board owner named and their role agreed with the founder.
                2. A personal note or call from the founder to every member explaining the change.
                3. One joint session run by founder and new owner together.
                4. The founder continuing as sponsor for at least two sessions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every member has heard about the handover from the founder directly, one joint session is held and the founder stays as sponsor for two sessions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the new owner's role and the founder's sponsor role"
                - "Ask the founder to call or write to every member personally"
                - "Plan one session co-run by the founder and new owner"
                - "Hand over every member profile and open commitment"
            - name: Advisory board across several product lines
              description: |-
                ## Purpose
                Enterprise customers who buy three of your products want to advise on how they fit together, not sit through three separate boards. Running one board with a cross-product agenda, or a core board with product-specific breakouts, needs agreement between product leaders on who owns the agenda, the follow-up and the members.

                ## Milestones
                1. The product leaders involved agree a structure: single board, core plus breakouts or separate boards.
                2. One named owner for the agenda and follow-up across products.
                3. A rule for which product team answers each member commitment.
                4. Cross-product themes reported separately in the readout.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Product leaders have agreed a recorded structure with one agenda owner and a rule for answering commitments, and cross-product themes appear in each readout."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List which members buy which product lines"
                - "Meet the product leaders to agree the board structure"
                - "Name one owner for agenda and follow-up across products"
                - "Add a cross-product themes section to the readout"
            - name: Taking over an inherited advisory board
              description: |-
                ## Purpose
                A manager who inherits a board inherits its promises too, including commitments the previous owner made that nobody wrote down. Spending the first month meeting each member, auditing open commitments and keeping the next session's date avoids the impression that the board is being wound down.

                ## Milestones
                1. Every open commitment from the last four sessions found and listed.
                2. A one-to-one introduction call with each member completed.
                3. The next session held on its planned date.
                4. Two or three changes proposed to the sponsor after the first session.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "All open commitments are listed with owners, every member has had an introduction call and the next session is held on its planned date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the last four sessions' notes and list every open commitment"
                - "Book an introduction call with each member"
                - "Confirm the next session date with members within a week"
                - "Propose two or three changes to the sponsor after that session"
            - name: Regional advisory boards for international customers
              description: |-
                ## Purpose
                Run in one time zone, a single board tends to hear one region's needs, and customers elsewhere join at awkward hours or not at all. Regional boards, or regional sessions of one board, with a local owner and a shared themes log, give international customers a real voice and let the company compare needs across markets.

                ## Milestones
                1. Regions with enough strategic customers to justify a board identified.
                2. A local owner named for each regional board.
                3. A shared themes log and readout format used by every region.
                4. Regional themes compared in one leadership readout each half year.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Each regional board has a local owner, uses the shared themes log and contributes to a half-yearly cross-region readout."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Count strategic customers by region and time zone"
                - "Name a local owner for each region with enough customers"
                - "Share the themes log and readout format with regional owners"
                - "Hold a joint call with the regional board owners @recurring(quarterly)"
            - name: Consulting the board before a disruptive change
              description: |-
                ## Purpose
                A major price change, a platform migration, an acquisition or a serious incident will reach board members' companies first, and members told in advance often become the most useful sounding board on how to communicate it. Briefing the board early, under their agreement, and asking how the change will land, turns potential critics into advisers on the rollout.

                ## Milestones
                1. The change and what can be shared cleared with legal and the sponsor.
                2. A short confidential briefing for members held before the public announcement.
                3. Member advice on communication and timing recorded.
                4. The final communication plan updated with at least one member suggestion.

                ## Notes
                Check with legal before sharing anything that could be market-sensitive, especially for a listed company or during an acquisition.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Members receive a cleared briefing before the public announcement and the communication plan records at least one change made from their advice."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask legal what about the change can be shared with members"
                - "Prepare a ten-minute confidential briefing for the board"
                - "Ask members how the change will land in their organisation"
                - "Update the communication plan with member suggestions"
            - name: Competitor and antitrust safeguards for the board
              description: |-
                ## Purpose
                Competing customers often sit on the same board, and a discussion that drifts into pricing, bids or supplier terms can expose them and you to competition law problems. Agreeing safeguards with legal, such as topic limits, a short reminder at the start of each session and someone empowered to stop a conversation, protects everyone in the room.

                ## Milestones
                1. Members who compete with each other identified and listed.
                2. Topic limits and an opening reminder agreed with legal.
                3. A named staff member empowered to stop a discussion that crosses the line.
                4. The competitor list and safeguards checked with legal each year.

                ## Notes
                This is for your legal team to set; the project makes sure the question is asked and the answer is used in every session.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A legal-approved safeguards note with topic limits and an opening reminder is used in every session, and the competitor list is checked yearly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List member companies that compete with each other"
                - "Ask legal for topic limits and an opening reminder for sessions"
                - "Name who in the room will stop a discussion that crosses the line"
                - "Re-check the competitor membership list with legal @recurring(yearly)"
            - name: Advisory working groups on a single theme
              description: |-
                ## Purpose
                Some themes, such as a new admin model or an industry regulation, need more depth than a ninety-minute quarterly session allows. A working group of three to five members, chaired by a member, meeting four to six times on one theme and reporting back to the full board, gets expert depth while keeping the main board focused on direction.

                ## Milestones
                1. One theme chosen where depth would change a significant decision.
                2. Three to five members volunteered, with a member as chair.
                3. Four to six working sessions held with a named product lead attending.
                4. A short report presented to the full board and its recommendations answered.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A member-chaired working group completes four to six sessions and presents a report whose recommendations each receive a written response."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick one theme where member depth would change a decision"
                - "Ask for three to five volunteers and a member chair"
                - "Assign a product lead to attend every working session"
                - "Reply in writing to each recommendation in the group's report"
            - name: Measuring the board's effect on retention and expansion
              description: |-
                ## Purpose
                Leadership will eventually ask whether member accounts renew and grow faster than similar accounts, and an honest answer needs a fair comparison, not a cherry-picked case study. Comparing member accounts with a matched group, while stating plainly that strong accounts were more likely to be invited, gives a careful view of value without overclaiming.

                ## Milestones
                1. A matched comparison group of non-member accounts by segment, size and tenure.
                2. Renewal rate, expansion and support escalations compared for members and the matched group.
                3. The selection bias stated plainly in the write-up.
                4. The comparison refreshed every year and shared with the sponsor.

                ## Notes
                Correlation is the most this analysis can show. Treat it as one input alongside decisions influenced and member feedback.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of member and matched accounts on renewal, expansion and escalations, with selection bias stated, is shared with the sponsor each year."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Build a matched group of non-member accounts by segment, size and tenure"
                - "Pull renewal, expansion and escalation figures for both groups"
                - "Write up the comparison with the selection bias stated plainly"
                - "Refresh the member account retention comparison @recurring(yearly)"
            - name: Sunsetting or relaunching a tired board
              description: |-
                ## Purpose
                After four or five years, a board can harden into a club of long-serving members advising on yesterday's product. Deciding openly whether to retire it, relaunch it with a new charter and members, or replace it with another format, and telling members personally, ends the chapter with gratitude rather than silence.

                ## Milestones
                1. The last two years of scorecards and decisions influenced reviewed.
                2. Three options compared: retire, relaunch or replace with another format.
                3. A decision made with the sponsor and the reasons written down.
                4. Every member told personally, thanked and offered alumni status or a seat in the new format.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to retire, relaunch or replace the board is made with the sponsor and every member is told personally before any announcement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Review the last two years of scorecards and decisions influenced"
                - "Compare retiring, relaunching and replacing the board"
                - "Agree the decision and its reasons with the sponsor"
                - "Contact every member personally before any wider announcement"
---

# Customer Advisory Board

This area is for product leaders, founders and enterprise teams who want a small group of strategic customers to shape direction candidly, rather than a quarterly sales event with lunch. It starts with the foundations (charter, executive sponsor, member criteria, invitations, agreements and budget), moves into the machinery of sessions, pre-reads, notes, member check-ins and closing the loop, then covers the facilitation skills, the format and membership decisions, the dated sessions and summits, situations for founders, new owners and multi-product enterprises, and the specialist work of safeguards, working groups and measuring influence.

The rhythm is quarterly for sessions, pre-reads, sponsor briefings, account team notes, the you said, we did update and the scorecard, monthly for member pulse calls, input tagging, the member space and budget checks, and yearly for renewals, rotation, agreements and the summit. The Person, Board meeting, Meeting notes, Feedback themes, Metrics log and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
