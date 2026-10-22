---
id: sales-revenue.cold-email-prospecting-sequences
name: Cold Email Prospecting
description: "Sending domains that stay out of spam, prospect lists you can trust, short emails that earn replies, and the weekly routines that turn cold outreach into booked meetings."
category: business
version: 1.0.0
tags: [sales-revenue, cold-email-prospecting-sequences, small-business, founder, team, outbound, deliverability, copywriting]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - metrics-log
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cold Email Prospecting
          description: "Researching target accounts and writing, sequencing and testing outbound emails to strangers who fit your customer profile, from list building through to booked meetings."
          projects:
            - name: One-line cold email offer and reason to reply
              description: |-
                ## Purpose
                Most cold emails fail before the subject line is written, because the sender cannot say in one sentence what problem they solve, for whom, and why a stranger should answer this week. Writing that sentence, with the proof behind it, gives every later sequence something true to say and stops you starting from scratch each campaign.

                ## Milestones
                1. A single sentence naming the buyer's role, the problem and the result you deliver.
                2. Three proof points written down: a customer result, a number or a named type of client.
                3. One low-effort ask chosen for the first email, such as a yes or no question.
                4. The sentence confirmed by two existing customers as describing why they bought.

                ## Notes
                Lead with their problem, not your product. If you cannot yet name a result a past customer got, use the reason you started the business and come back once you have one.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written one-sentence offer, three proof points and a chosen first ask, confirmed as accurate by at least two existing customers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence naming who you help, their problem and the result"
                - "List three proof points from real customers or projects"
                - "Ask two customers why they first said yes and compare their words to yours"
                - "Pick the single question your first email will end on"
            - name: Separate sending domain for outbound
              description: |-
                ## Purpose
                Sending cold email from your main company domain puts invoices, support replies and the owner's inbox at risk if spam complaints pile up. A lookalike domain such as getyourcompany.com, redirected to your website, keeps that reputation separate while still reading as you.

                ## Milestones
                1. One or two lookalike domains registered that a buyer would recognise as yours.
                2. Each domain redirecting to your main website.
                3. Two or three mailboxes per domain created with real names and photos.
                4. Signatures matching your main domain's format, with a business address.

                ## Notes
                Avoid hyphenated or odd endings that look like phishing. Most deliverability specialists advise two or three mailboxes per domain rather than one mailbox sending everything.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one lookalike sending domain registered and redirecting to the main site, with named mailboxes and signatures set up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which lookalike domains of your brand are available"
                - "Register the sending domain and redirect it to your main site"
                - "Create two or three named mailboxes on the new domain"
                - "Add a signature with full name, role, company and business address"
            - name: SPF, DKIM and DMARC records for sending domains
              description: |-
                ## Purpose
                Major mailbox providers now expect bulk senders to authenticate their mail, and unauthenticated cold email increasingly lands in spam or is rejected outright. Publishing the three DNS records and confirming they pass takes an afternoon and protects every email you send afterwards.

                ## Milestones
                1. An SPF record listing only the services that actually send for the domain.
                2. DKIM signing switched on in your email provider and its key published.
                3. A DMARC record published, starting at a monitoring policy.
                4. A test email showing a pass for all three in its message headers.
                5. An address set up to receive DMARC reports.

                ## Notes
                Whoever manages your DNS may need to add the records. Move DMARC to a stricter policy only after the reports show your legitimate mail passing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test email from every sending mailbox shows SPF, DKIM and DMARC passing in its headers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every service that sends email from the domain"
                - "Publish the SPF record and switch on DKIM signing"
                - "Add a DMARC record at a monitoring policy with a report address"
                - "Send a test to a free mailbox and read the authentication results in the headers"
            - name: Mailbox warm-up before the first campaign
              description: |-
                ## Purpose
                Brand-new mailboxes that suddenly send 100 emails a day look exactly like a spammer to the providers receiving them. Spending three to four weeks building volume slowly, with real conversations mixed in, gives providers a history to judge you by before the first prospect sees your name.

                ## Milestones
                1. Every new mailbox sending a small number of genuine emails from day one.
                2. Volume raised in weekly steps towards the planned daily ceiling.
                3. No mailbox planned above about 30 to 50 cold sends a day once warm-up ends.
                4. An inbox placement test passed before launch.

                ## Notes
                Warm-up services help but do not replace real replies. Keep the ceiling per mailbox low and add mailboxes rather than pushing one harder.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each sending mailbox has at least three weeks of gradually rising volume and a clean placement test before cold sends begin."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Send a few real emails from each new mailbox to colleagues and contacts"
                - "Write down a weekly volume step for each mailbox"
                - "Check the settings of your warm-up service if you use one"
                - "Run an inbox placement test before the launch date"
            - name: Cold email legal basis and opt-out check
              description: |-
                ## Purpose
                Rules on unsolicited business email differ by country, and some depend on whether you write to a named person at a company or to a sole trader. Confirming with an adviser what applies to the markets you email, and building the opt-out and data notice into every sequence, keeps you out of trouble before volume makes mistakes expensive.

                ## Milestones
                1. The countries you plan to email listed, with the rules for each confirmed by an adviser or official guidance.
                2. A written note of the lawful basis you rely on for holding prospect data, where your rules require one.
                3. A clear opt-out line and your business address in every template.
                4. A process for answering a prospect who asks where you got their details.

                ## Notes
                Start from the **Compliance control** template. This organises the questions; your legal adviser and your data protection authority's guidance give the answers. Examples of relevant rules are GDPR and PECR in the UK and EU, and CAN-SPAM in the US.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note of the rules for each target country, reviewed by an adviser, with opt-out wording and a business address in every template."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the countries your first prospects are based in"
                - "Read your data protection authority's guidance on business email marketing"
                - "Book a short review of your approach with a legal adviser"
                - "Add opt-out wording and your business address to every template"
                - "Recheck the rules for each target country @recurring(yearly)"
            - name: Customer profile turned into list filters
              description: |-
                ## Purpose
                Written as a paragraph, a customer profile cannot be typed into a data tool. Translating it into hard filters, such as industry, headcount band, country, job titles and technologies in use, means two people building lists separately end up with the same kind of prospect.

                ## Milestones
                1. Five to eight filters written as exact values a data tool accepts.
                2. Job titles grouped into the decision maker, the day-to-day user and people to avoid.
                3. Exclusions listed, such as companies too small to pay or regions you cannot serve.
                4. A 20-row sample pulled with the filters and checked by eye for fit.

                ## Notes
                With no written customer profile yet, look at your five best customers and note what they have in common before choosing filters.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written filter set that produces a 20-row sample in which at least 16 rows are judged a good fit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what your five best customers have in common"
                - "Convert each trait into a filter value your data source accepts"
                - "List the job titles you will and will not email"
                - "Pull a 20-row sample and mark each row as fit or not"
            - name: First list of 200 verified prospects
              description: |-
                ## Purpose
                Two hundred well-chosen prospects, each with a verified address and one line of research, is enough to read reply rates honestly and small enough to research properly. A bigger first list risks burning a whole market on a message you have not tested yet.

                ## Milestones
                1. 200 prospects pulled with your filters, each with company, name, role and email.
                2. Every address run through a verification tool and risky ones removed.
                3. One research note per prospect, such as a recent hire, a launch or a post they wrote.
                4. The list loaded into your sending tool with suppressions already removed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of at least 200 prospects with verified emails and one research note each, loaded and checked against the suppression list."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the first 50 rows with your filters and check the fit by eye"
                - "Expand to 200 rows and remove duplicates and existing customers"
                - "Run every address through an email verification tool"
                - "Add one research note per prospect in its own column"
            - name: Email verification and bounce hygiene
              description: |-
                ## Purpose
                Bounce rates above about 2 percent tell mailbox providers you are mailing guessed or stale addresses, and they drag down inbox placement for every later send. Verifying before each batch and acting on bounces the same day is the cheapest deliverability protection there is.

                ## Milestones
                1. A verification step written into the routine before any batch is sent.
                2. A rule for catch-all and unknown results, such as sending only to the best-fit catch-alls.
                3. Hard bounces removed and suppressed within a working day.
                4. Bounce rate per batch recorded alongside replies.

                ## Notes
                Catch-all domains accept everything at first and bounce later. Treat them as a separate, smaller batch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every batch for a month is verified before sending, and the recorded bounce rate stays under 2 percent."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a verification tool and test it on 50 known addresses"
                - "Write the rule for catch-all and unknown verification results"
                - "Remove and suppress the hard bounces from your last send"
                - "Add a bounce rate column to your results sheet"
            - name: Suppression list of customers, competitors and opt-outs
              description: |-
                ## Purpose
                Nothing ends a deal faster than a cold email landing with an existing customer, a live opportunity or someone who already said no. One master suppression list, checked before every upload, prevents the awkward call and the complaint.

                ## Milestones
                1. Current customers, open deals and partners exported by domain.
                2. Every past opt-out and complaint gathered into one list.
                3. Competitors and companies you have promised not to contact added.
                4. The list loaded into your sending tool as a block list.
                5. A monthly import of new customers and deals in place.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single suppression list covering customers, open deals, competitors and every past opt-out is loaded as a block list in the sending tool."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the domains of current customers, partners and open deals"
                - "Collect every past opt-out and complaint into one sheet"
                - "Add competitor domains and any do-not-contact companies"
                - "Load the list into your sending tool as a block list"
                - "Import new customers and deals into the suppression list @recurring(monthly:8)"
            - name: Outbound results sheet with honest metrics
              description: |-
                ## Purpose
                Open rates have become unreliable since some mail apps load tracking images automatically, so judging cold email by opens leads to wrong conclusions. A simple sheet tracking delivered, replies, positive replies, meetings booked and meetings held per sequence shows what is really working.

                ## Milestones
                1. A sheet with one row per sequence per week.
                2. Columns for sent, bounced, replies, positive replies, meetings booked and meetings held.
                3. A written definition of what counts as a positive reply.
                4. Four consecutive weeks of data entered.

                ## Notes
                Start from the **Metrics log** template. Positive replies per 100 delivered is the number to watch; open rate is a rough deliverability signal at best.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A results sheet with written definitions and four consecutive weeks of data for every live sequence."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the results sheet from the metrics log template"
                - "Write a one-line definition of a positive reply"
                - "Enter last week's numbers for each sequence"
                - "Update the sheet from your sending tool's reports @recurring(weekly:fri)"
            - name: Weekly list-building block
              description: |-
                ## Purpose
                Lists decay and campaigns run dry, and most small teams only build lists in a panic once a sequence has nobody left to email. A fixed weekly block that adds 50 to 100 researched, verified prospects keeps the sending calendar full without a scramble.

                ## Milestones
                1. A recurring 90-minute block on the calendar each week.
                2. A weekly target for new prospects that matches your sending capacity.
                3. Each new batch verified and checked against suppressions in the same block.
                4. Four consecutive weeks of the target hit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 50 new verified prospects added every week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Book a recurring 90-minute list-building block"
                - "Set the weekly prospect target from your sending capacity"
                - "Build, verify and suppress this week's batch @recurring(weekly:mon)"
                - "Note which filters gave the best-fit rows this week"
            - name: Daily reply triage and response
              description: |-
                ## Purpose
                Positive replies answered within an hour convert far better than ones answered the next day, and missed opt-outs turn into complaints. Fifteen minutes a day sorting every reply into interested, not now, referral, opt-out and out of office keeps momentum and protects the domain.

                ## Milestones
                1. Reply categories agreed and labels or folders set up.
                2. Every reply sorted on the day it arrives.
                3. Interested replies answered with suggested meeting times within business hours.
                4. Out-of-office return dates and referrals scheduled for follow-up.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reply over a two-week period is categorised on the day it arrives, and interested replies are answered within four working hours."
                cadence: rolling
              tasks:
                - "Create labels for interested, not now, referral, opt-out and out of office"
                - "Sort and answer the day's cold email replies @recurring(daily)"
                - "Write two saved responses for the most common interested replies"
                - "Add out-of-office return dates to your follow-up list"
            - name: Domain and mailbox health monitoring
              description: |-
                ## Purpose
                Deliverability problems arrive quietly: reply rates sag for two weeks before anyone notices the mail is landing in spam. A weekly look at spam complaint rates, blocklists and authentication results catches the slide while a pause and a fix can still save the domain.

                ## Milestones
                1. Each sending domain registered with the major providers' sender tools.
                2. A blocklist check bookmarked for every domain.
                3. A spam complaint threshold written down, with the action for crossing it.
                4. Results logged each week next to reply rates.

                ## Notes
                Keep spam complaints well under 0.3 percent, the ceiling some large providers publish for bulk senders. If a domain is listed, pause it before investigating.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly health log covers every sending domain for two months, with any complaint spike or listing followed by a recorded action."
                cadence: rolling
              tasks:
                - "Register each sending domain with the sender tools of the big mailbox providers"
                - "Check complaint rates and authentication results @recurring(weekly:wed)"
                - "Run a blocklist check on every sending domain @recurring(monthly:4)"
                - "Write down the complaint threshold that triggers a pause"
            - name: Monthly sequence performance review
              description: |-
                ## Purpose
                Sequences drift: a message that booked six meetings in March can book none by June once the market has heard it too often. A monthly hour comparing each sequence on positive replies and meetings, then choosing one change, keeps outbound improving instead of repeating.

                ## Milestones
                1. Each live sequence ranked on positive reply rate and meetings booked.
                2. The weakest step in the best sequence identified.
                3. One change chosen and logged with a start date.
                4. Last month's change checked against its result.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reviews on record, each naming the change made and the result of the previous one."
                cadence: cyclic
              tasks:
                - "Rank live sequences on positive replies per 100 delivered"
                - "Find the step where most replies arrive and the step where none do"
                - "Log one change to make this month and the date it starts"
                - "Hold the sequence review hour @recurring(monthly:12)"
            - name: Opt-out and unsubscribe processing
              description: |-
                ## Purpose
                Prospects who write to ask for removal and then receive two more emails are the most likely to press the spam button or complain to a regulator. A weekly sweep of opt-outs, including the ones phrased politely or angrily rather than sent through a link, closes that gap.

                ## Milestones
                1. Every opt-out route listed: link clicks, replies and emails to other team members.
                2. Opt-outs removed from all active sequences, not only the current one.
                3. Each opt-out added to the master suppression list.
                4. A month of weekly sweeps completed with nothing missed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four weeks, every opt-out is removed from all sequences and added to the suppression list within two working days."
                cadence: rolling
              tasks:
                - "List every way a prospect can ask to be removed"
                - "Search replies for remove, unsubscribe and stop wording"
                - "Remove this week's opt-outs from every sequence and suppress them @recurring(weekly:fri)"
                - "Reply politely to confirm each removal"
            - name: Booked meeting confirmation and no-show follow-up
              description: |-
                ## Purpose
                Meetings booked from cold email no-show more often than referrals, because the prospect agreed quickly and forgot just as quickly. A confirmation the day before, a short agenda and a polite rebooking routine recover many of the meetings that would otherwise vanish.

                ## Milestones
                1. A calendar invite template with a one-line agenda and a joining link.
                2. A reminder sent the working day before each meeting.
                3. A two-step rebooking sequence for no-shows.
                4. Show rate tracked in the results sheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Show rate for cold email meetings is recorded for six weeks, with every no-show sent the rebooking sequence."
                cadence: rolling
              tasks:
                - "Write the invite template with a one-line agenda"
                - "Draft the reminder note sent the day before"
                - "Write a two-email rebooking sequence for no-shows"
                - "Follow up this week's no-shows and update the show rate @recurring(weekly:thu)"
            - name: Quarterly list refresh and decay check
              description: |-
                ## Purpose
                Business contact data goes stale fast as people change jobs and companies merge, so a list that verified clean in January bounces in April. A quarterly pass that reverifies unsent rows, removes leavers and adds their replacements keeps the remaining list worth sending to.

                ## Milestones
                1. All unsent and partly sent prospects reverified.
                2. Job changes found and old contacts replaced by their successors where relevant.
                3. Companies that no longer fit the filters removed.
                4. The quarter's decay rate recorded.

                ## Notes
                A prospect who moved to a new company that also fits your profile is a warm lead. Note the move and write to them at the new address.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every unsent prospect is reverified and the share of invalid rows is recorded."
                cadence: cyclic
              tasks:
                - "Reverify every prospect not yet emailed @recurring(quarterly)"
                - "Find contacts who changed jobs and look up their successors"
                - "Remove companies that have fallen outside your filters"
                - "Record the share of rows that went invalid this quarter"
            - name: Swipe file of winning lines and buyer phrases
              description: |-
                ## Purpose
                Winning lines usually disappear into sequences archived months ago. A living file of lines that earned replies, along with the replies themselves, gives you raw material for every new sequence and shows how buyers describe their own problems.

                ## Milestones
                1. A file with sections for subject lines, openers, proof lines, asks and buyer phrases.
                2. Every line tagged with the sequence it came from and its reply rate.
                3. Ten real buyer phrases copied from positive replies.
                4. The file used to draft at least one new sequence.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A swipe file holding at least 30 tagged lines and 10 buyer phrases, used as the source for one new sequence."
                cadence: rolling
              tasks:
                - "Create the swipe file with five sections"
                - "Copy the lines from your best-performing sequence into it"
                - "Paste the exact words buyers used in positive replies"
                - "Add this month's best lines and buyer phrases @recurring(monthly:20)"
            - name: Sending capacity plan across mailboxes
              description: |-
                ## Purpose
                Safe sending volume is set by mailboxes multiplied by a daily ceiling, not by how many names you have. A written capacity plan stops anyone pushing a mailbox past its limit to hit a target, and shows in advance when to add a new domain.

                ## Milestones
                1. Every sending mailbox listed with its daily ceiling and warm-up date.
                2. Weekly capacity calculated with follow-up steps counted.
                3. A rule for when to add mailboxes, written before it is needed.
                4. Capacity checked against planned campaigns each month.

                ## Notes
                Follow-ups use capacity too. A four-step sequence to 100 people is up to 400 sends.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A capacity sheet lists every mailbox and its ceiling, and no mailbox exceeds its ceiling in any week of the following two months."
                cadence: cyclic
              tasks:
                - "List every mailbox with its warm-up date and daily ceiling"
                - "Calculate weekly capacity including follow-up steps"
                - "Write the trigger for adding a new mailbox or domain"
                - "Compare next month's campaigns with capacity @recurring(monthly:2)"
            - name: Subject lines that read like a colleague wrote them
              description: |-
                ## Purpose
                Cold subject lines that shout, tease or promise a result look like marketing and get archived unread. Learning the short, specific, lower-case style that reads like internal mail, then testing a handful, raises the chance the email is opened at all.

                ## Milestones
                1. Twenty subject lines from your own inbox sorted into opened and ignored, with the pattern noted.
                2. Ten candidate subject lines written at two to four words each.
                3. Three chosen and cleared of capitals, symbols and exclamation marks.
                4. Two run in a live test with their reply rates recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten written subject lines of two to four words, with two tested live and their reply rates recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sort 20 subject lines from your own inbox into opened and ignored"
                - "Write ten subject lines of two to four words for your main offer"
                - "Strip capitals, symbols and exclamation marks from the shortlist"
                - "Run the two strongest subject lines in a live test"
            - name: Three-sentence first email structure
              description: |-
                ## Purpose
                On a phone screen, a first cold email has about one scroll to earn a reply. Practising a three-part structure, one line on why them, one on the problem and proof, one question, makes it possible to write a good first email in ten minutes rather than an hour.

                ## Milestones
                1. The three parts written as a reusable outline.
                2. Five first emails drafted for real prospects with it, each under 90 words.
                3. Each draft read aloud and cut wherever it sounds like a brochure.
                4. A customer or peer asked which draft they would answer, and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five first emails under 90 words each, written to the outline and rated by someone outside the business."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the three-part outline on one page"
                - "Draft five first emails for real prospects using it"
                - "Ask the agent to shorten each draft under 90 words without losing the question"
                - "Ask a customer which draft they would answer"
            - name: Five-minute prospect research routine
              description: |-
                ## Purpose
                Personalisation that takes an hour per prospect cannot scale, and personalisation that says 'I see you work at Acme' is worse than none. A timed routine that checks three sources and finds one relevant observation gives each email a real first line in five minutes.

                ## Milestones
                1. Three research sources chosen, such as the company news page, job postings and the person's recent posts.
                2. A list of observation types worth mentioning, and ones to avoid.
                3. Twenty prospects researched against a timer, averaging five minutes or less.
                4. Each observation linked to the problem in your offer.

                ## Notes
                Avoid anything personal, such as family, holidays or health. Stick to the company and the role.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty prospects researched in an average of five minutes each, each with one observation that connects to the offer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose three research sources and bookmark them"
                - "List observation types worth mentioning and ones to avoid"
                - "Research ten prospects against a five-minute timer"
                - "Rewrite each observation so it leads into the problem you solve"
            - name: Follow-ups that add something new
              description: |-
                ## Purpose
                Many replies to cold sequences arrive on the second to fourth email, yet plenty of follow-ups only say 'bumping this up'. Learning to give each follow-up its own reason, a new proof point, a useful resource, a different angle or a closing note, earns those replies without annoying the reader.

                ## Milestones
                1. Six follow-up angles written for your offer.
                2. A four-step sequence in which no two emails make the same point.
                3. A polite closing email that makes it easy to say no or not now.
                4. The follow-ups read by someone who has not seen the first email.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A four-step sequence in which each follow-up carries a distinct reason, reviewed by someone outside the business."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List six angles a follow-up could take for your offer"
                - "Draft follow-ups two to four with one angle each"
                - "Write a closing email that offers an easy way to say not now"
                - "Ask a colleague to read the follow-ups without the first email"
            - name: Plain-text formatting for cold email
              description: |-
                ## Purpose
                Images, logos, several links and heavy formatting are signals filters associate with bulk marketing. Learning the plain-text habits that make cold email look like one person writing to another improves placement without changing a word of the message.

                ## Milestones
                1. Every template converted to plain text with no images.
                2. Links cut to one at most, with none in the first email.
                3. Signatures trimmed to text with no logos.
                4. A placement test run before and after the change, with results compared.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All templates sent as plain text with at most one link, and a before-and-after placement test recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Run an inbox placement test on your current templates"
                - "Strip images, logos and formatting from every template"
                - "Remove links from first emails and keep one at most in follow-ups"
                - "Repeat the placement test and compare the two results"
            - name: Low-friction calls to action
              description: |-
                ## Purpose
                Asking a stranger for 30 minutes in the first email is a big request from someone they have never heard of. Learning interest-based asks, such as whether a problem is on their list this quarter, tends to earn more replies and lets the meeting request come second.

                ## Milestones
                1. Five interest-based questions written for your offer.
                2. Five direct meeting asks written for comparison.
                3. One of each run on matched halves of a list.
                4. Positive reply rates for both recorded and a default ask chosen.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One interest-based ask and one meeting ask tested on matched halves of a list, with the winning default recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write five questions that check interest in the problem"
                - "Write five direct meeting requests to compare against"
                - "Split the next batch in half and send one ask to each half"
                - "Record which ask produced more positive replies"
            - name: Classifying replies and choosing the next step
              description: |-
                ## Purpose
                Replies come in about eight shapes, and some are worth more than they look: 'not now, maybe next year' is a dated lead, while 'send me some information' is often a polite exit. Learning to read each type and having a next step ready turns a pile of replies into pipeline.

                ## Milestones
                1. Eight reply types named, each with a real example from your inbox.
                2. A next step written for each type.
                3. Not-now replies scheduled for follow-up on the date they gave.
                4. A month of replies sorted with the new types.

                ## Notes
                Treat a request for information as a chance to ask one qualifying question before sending anything.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight reply types defined with next steps, and a full month of replies categorised using them."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Collect one real example of each common reply type"
                - "Write the next step for each reply type"
                - "Schedule follow-ups on the dates that not-now replies mentioned"
                - "Ask the agent to suggest a category for each reply in last week's inbox"
            - name: Trigger events that make cold email timely
              description: |-
                ## Purpose
                Identical emails land differently when they arrive a week after a company announced funding, hired a head of operations or opened a second site. Learning which public events signal a need for what you sell lets you send fewer emails at better moments.

                ## Milestones
                1. Five trigger events listed that came just before past customers bought.
                2. A public source named for spotting each one.
                3. One opening line written per trigger.
                4. Ten prospects found through triggers and emailed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five trigger events with sources and opening lines written, and ten trigger-based emails sent."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask three customers what changed just before they bought"
                - "List five trigger events and where each becomes public"
                - "Write one opening line for each trigger"
                - "Find and email ten prospects through a trigger"
            - name: Contact data source comparison on a sample
              description: |-
                ## Purpose
                Contact data vendors all claim high accuracy, and the only way to know is to test them on your own market. Trialling the same 100 target companies across two or three sources and comparing bounces, wrong roles and missing contacts shows which one is worth paying for.

                ## Milestones
                1. Two or three data sources shortlisted with prices and contract terms.
                2. The same 100 target companies looked up in each.
                3. Bounce, wrong role and missing contact rates recorded per source.
                4. A source chosen, with the cost per usable contact worked out.

                ## Notes
                Start from the **Purchase decision** template. Watch for annual contracts that renew automatically and credits that do not roll over.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision naming one data source, with bounce rate and cost per usable contact compared across at least two sources."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist two or three contact data sources with their pricing"
                - "Pick 100 target companies to look up in every source"
                - "Verify each source's results and count bounces and wrong roles"
                - "Work out the cost per usable contact for each source"
            - name: Opening line test with two variants
              description: |-
                ## Purpose
                Arguments about which opening works best are settled by data, but only when the test is set up properly. Running two openings on randomly split halves of one list, with everything else identical and enough sends to mean something, gives an answer you can build on.

                ## Milestones
                1. One hypothesis written, such as a trigger opening beating a problem opening.
                2. Two variants that differ only in the first line.
                3. At least 150 delivered emails per variant.
                4. Positive reply rates compared and the result logged in the swipe file.

                ## Notes
                Small samples mislead. With only a few replies per variant, a difference of one or two replies is noise.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two openings tested on at least 150 delivered emails each, with the positive reply rates and the conclusion logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the test hypothesis in one sentence"
                - "Draft two variants that differ only in the first line"
                - "Split the list randomly and launch both variants"
                - "Compare positive reply rates once each variant reaches 150 delivered"
            - name: Sequence length and spacing test
              description: |-
                ## Purpose
                Some markets reply on the fourth email and others are irritated by the third. Testing a shorter and a longer version of one sequence, with different gaps between steps, shows where extra follow-ups earn replies and where they only earn opt-outs.

                ## Milestones
                1. A three-step and a five-step version of the same sequence.
                2. Gaps between steps set and written down for each version.
                3. Replies, opt-outs and complaints recorded per step.
                4. A default length and spacing chosen for the next quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A default sequence length and spacing chosen from a recorded test showing replies and opt-outs per step."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Build three-step and five-step versions of one sequence"
                - "Set and record the gaps between steps for each version"
                - "Track replies and opt-outs for every step"
                - "Choose the default length and spacing for next quarter"
            - name: Rewriting the weakest sequence
              description: |-
                ## Purpose
                Every outbound programme has one sequence that keeps running because nobody has time to fix it, quietly burning prospects at a fraction of the others' reply rate. Rewriting it from the swipe file and the buyer phrases you have collected is usually faster than starting a new one.

                ## Milestones
                1. The weakest sequence identified from the results sheet.
                2. Its copy compared line by line against your best sequence.
                3. A rewritten version built from proven lines and buyer phrases.
                4. The new version run for four weeks and compared with the old.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The lowest-performing sequence rewritten and run for four weeks, with its positive reply rate compared against the original."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the sequence with the lowest positive reply rate"
                - "Compare its copy line by line with your best sequence"
                - "Ask the agent to draft a rewrite using lines from the swipe file"
                - "Run the rewrite for four weeks and compare the results"
            - name: Retiring a segment that never replies
              description: |-
                ## Purpose
                Some segments look perfect on paper and never answer, and continuing to email them wastes sending capacity and data spend. Setting a fair threshold in advance and retiring the segment when it is missed frees capacity for markets that respond.

                ## Milestones
                1. A minimum send volume and reply threshold agreed before judging.
                2. Each segment's results reviewed against the threshold.
                3. A decision recorded to retire, rework or keep each weak segment.
                4. Freed capacity reassigned to the best-performing segment.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded retire, rework or keep decision for each segment below the agreed threshold, with its capacity reassigned."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the minimum sends and reply rate a segment must reach"
                - "Review each segment's results against the threshold"
                - "Record the decision and the reason for each weak segment"
                - "Move freed capacity to the best-performing segment"
            - name: Turning off open and link tracking
              description: |-
                ## Purpose
                Tracking pixels and rewritten links add code that filters notice, and the open numbers they produce are no longer reliable anyway. Many senders see better placement after switching them off and judging by replies instead, but it is worth testing on your own domains first.

                ## Milestones
                1. Current tracking settings listed for every sequence.
                2. Tracking switched off on half the mailboxes for four weeks.
                3. Placement and reply rates compared between the two halves.
                4. A decision recorded and applied to all sequences.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on open and link tracking recorded after a four-week comparison of reply rates between tracked and untracked mailboxes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the tracking settings on every live sequence"
                - "Switch tracking off for half the mailboxes"
                - "Compare reply rates and placement after four weeks"
                - "Apply the tracking decision to every sequence"
            - name: Tiered personalisation by account value
              description: |-
                ## Purpose
                Researching every prospect deeply is too slow, and sending one template to everyone wastes your best accounts. Splitting the list into tiers, with deep research for the top 10 percent and light personalisation for the rest, puts effort where the deal value is.

                ## Milestones
                1. Three tiers defined by likely deal size or fit.
                2. The personalisation each tier gets written down, with a time budget.
                3. The current list sorted into tiers.
                4. Reply and meeting rates compared between tiers after a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three written personalisation tiers with time budgets, applied to the current list, and a month of results compared by tier."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define three tiers by likely deal size or fit"
                - "Write the research steps and time budget for each tier"
                - "Sort the current list into the three tiers"
                - "Compare reply and meeting rates by tier after a month"
            - name: First campaign launch week
              description: |-
                ## Purpose
                Set-up mistakes surface in the first live week: a broken merge field, a missing opt-out line, a mailbox sending too fast. Launching with a checklist, a small first day and a daily check means the mistakes reach 20 people rather than 500.

                ## Milestones
                1. A pre-launch checklist completed for every sequence.
                2. Day one limited to a small batch, with every email checked in the sent folder.
                3. Bounces, replies and complaints checked each day of the week.
                4. A short launch review written at the end of the week.

                ## Notes
                Start from the **Operational checklist** template. Send a test to yourself and read it on a phone before anything goes out.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first campaign completes its first full week with a finished checklist, daily checks recorded and a written launch review."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send every template to yourself and read it on a phone"
                - "Check the merge fields on ten random rows"
                - "Limit day one to a batch of 20 and review the sent folder"
                - "Write a one-page launch review at the end of the week"
            - name: Pre-event outreach before a trade show
              description: |-
                ## Purpose
                Trade shows and conferences are the one time a cold prospect is already planning to meet strangers. Emailing exhibitors or attendees three to four weeks before, offering a short meeting at the event, fills the diary before you arrive.

                ## Milestones
                1. The attendee or exhibitor list gathered and filtered to good-fit companies.
                2. A three-step sequence written around the event.
                3. Meetings booked with location and time confirmed in writing.
                4. A follow-up sent to every contact within two working days of the event.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least five meetings booked at the event from pre-event email, each followed up within two working days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the exhibitor or attendee list and filter it for fit"
                - "Write a three-step sequence offering a meeting at the event"
                - "Confirm each meeting's time and place in writing"
                - "Send post-event follow-ups within two working days"
            - name: First ten booked meetings review
              description: |-
                ## Purpose
                After ten meetings, patterns appear: which segment books, which message lands, and whether the meetings are with people who can buy. Reviewing at that milestone stops you scaling a campaign that fills the diary with the wrong buyers.

                ## Milestones
                1. All ten meetings listed with source sequence, segment and outcome.
                2. Each meeting scored on fit straight after the call.
                3. The message and segment behind the best meetings identified.
                4. One change to targeting or copy agreed for the next 500 sends.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A review of the first ten meetings naming the segment and message behind the best ones, with one agreed change."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the first ten meetings with their source sequence and segment"
                - "Score each meeting for fit straight after the call"
                - "Find the message and segment behind the best-fit meetings"
                - "Agree one targeting or copy change for the next 500 sends"
            - name: Moving outbound to a new sending domain
              description: |-
                ## Purpose
                Domains get burned, brands change and companies rename, and switching sending domains mid-campaign without a plan throws away the reputation you built. Planning the move, warming the new domain while the old one keeps sending, and handing over in stages keeps meetings flowing.

                ## Milestones
                1. The reason for the move and the replacement domains written down.
                2. New domains authenticated and warming while the old ones keep sending.
                3. Sequences moved over one at a time.
                4. Old domains retired, with their replies still monitored for three months.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All sequences moved to the new domain in stages, with old mailboxes monitored for replies for three months after the switch."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down why you are moving and which domains replace the old ones"
                - "Authenticate and start warming the new domains"
                - "Move one sequence at a time and compare reply rates"
                - "Keep checking old mailboxes for replies for three months"
            - name: Campaign timed to the buyer's budget season
              description: |-
                ## Purpose
                Many buyers set next year's budget in a short window, and an email that arrives after the money is allocated waits twelve months for an answer. Mapping when your buyers plan and running a dedicated campaign four to eight weeks before gets your offer considered while the money is still being divided.

                ## Milestones
                1. Budget-planning months found for your main segments.
                2. A campaign written around planning for next year.
                3. The campaign launched four to eight weeks before the window.
                4. Interested prospects booked for planning-stage calls.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A budget-season campaign launched at least four weeks before the main segment's planning window, with resulting meetings recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask five customers when they set next year's budget"
                - "Write a short campaign about planning for next year"
                - "Schedule the launch four to eight weeks before the window"
                - "Record the meetings and opportunities the campaign produced"
            - name: Founder cold email in two hours a week
              description: |-
                ## Purpose
                Founders who sell alongside everything else cannot run a full outbound machine, but they can run a small one well. Two protected hours a week, 25 hand-researched emails and a fixed time to answer replies keeps founder outbound alive through busy weeks without it taking over.

                ## Milestones
                1. A two-hour block on the calendar each week that survives a busy week.
                2. A list of 100 hand-picked accounts.
                3. Twenty-five personal emails sent each week in the founder's own name.
                4. Eight consecutive weeks completed with results noted.

                ## Notes
                Founder emails often earn unusually high reply rates because buyers like hearing from the person who built the thing. Keep them short and personal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty-five founder emails sent each week for eight consecutive weeks, with replies and meetings recorded."
                cadence: rolling
              tasks:
                - "Block two hours a week that you will not move"
                - "Hand-pick 100 accounts you would most like as customers"
                - "Write and send this week's 25 founder emails @recurring(weekly:tue)"
                - "Note each week's founder replies and meetings in the results sheet"
            - name: Emailing local businesses as a small business
              description: |-
                ## Purpose
                Local service businesses writing to other local businesses are not doing enterprise outbound, and enterprise tactics read oddly to a shop owner. Short, neighbourly emails that mention the area, a shared customer or a local event, and suggest a call or a visit, suit a market where reputation travels by word of mouth.

                ## Milestones
                1. A list of 100 local businesses that fit, with owner or manager names where findable.
                2. A two-step sequence written in a plain, local voice.
                3. A follow-up path by phone or visit for interested replies.
                4. Every contact logged so nobody is emailed twice by different staff.

                ## Notes
                Local reputation matters more than reply rate. Keep volumes small and never let two people email the same business.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-step local sequence sent to 100 nearby businesses, with every contact logged and interested replies followed up in person or by phone."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List 100 local businesses that could use what you offer"
                - "Find the owner or manager's name for each where you can"
                - "Write a two-step sequence that mentions the local area"
                - "Log every contact so no business is emailed twice"
            - name: Handing outbound from founder to first seller
              description: |-
                ## Purpose
                Founders often hand cold email to a first hire with nothing more than inbox access, and reply rates fall because the knowledge stayed in the founder's head. Writing down what works, transferring mailboxes and sequences properly, and reviewing the first month together keeps the results the founder built.

                ## Milestones
                1. The best sequences, swipe file and reply categories documented in one place.
                2. Mailboxes set up and warmed in the new seller's name.
                3. The new seller's first two weeks of emails reviewed by the founder before sending.
                4. Reply rates compared after the first month and changes agreed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A documented handover pack, warmed mailboxes in the new seller's name and a first-month reply rate compared with the founder's."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write up the best sequences, reply categories and lessons in one document"
                - "Set up and warm mailboxes in the new seller's name"
                - "Review the new seller's first two weeks of drafts before sending"
                - "Compare reply rates after the first month and agree changes"
            - name: Shared copy library and review rule for a team
              description: |-
                ## Purpose
                When three people send cold email, three versions of the company appear in prospects' inboxes, and one careless claim can reach hundreds of people. A shared library of approved sequences, with a simple rule for who checks new copy before it goes live, keeps the team consistent without slowing it down.

                ## Milestones
                1. Approved sequences stored in one place everyone can find.
                2. A rule naming who reviews new or changed copy, and how fast.
                3. Every claim and number in the copy checked against a source.
                4. The library reviewed monthly and retired sequences archived.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "One shared library holds every live sequence, and every new sequence in the following month passes the review rule before sending."
                cadence: rolling
              tasks:
                - "Gather every live sequence into one shared folder"
                - "Write the review rule for new and changed copy"
                - "Check every claim and number in the copy against a source"
                - "Review the library and archive retired sequences @recurring(monthly:25)"
            - name: Restarting outbound after a long pause
              description: |-
                ## Purpose
                Mailboxes that have sat idle for months lose much of the reputation they built, and lists go stale while you are away. Restarting with a short warm-up, a reverified list and a smaller first batch avoids the bounce spike that often follows a comeback.

                ## Milestones
                1. Each mailbox's last sending date and current health checked.
                2. A two-week warm-up run on mailboxes idle for over a month.
                3. The old list reverified before any sends.
                4. The first batch held at half the normal volume.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Outbound restarted with every idle mailbox rewarmed, the list reverified and a first-week bounce rate under 2 percent."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check when each mailbox last sent and how healthy it is now"
                - "Run a two-week warm-up on idle mailboxes"
                - "Reverify the whole list before sending"
                - "Send the first batch at half the normal volume"
            - name: First campaign into a new segment
              description: |-
                ## Purpose
                Messages tuned for one industry rarely transfer to another without changes in vocabulary, proof and problem. Treating a new segment as its own small test, with segment-specific proof and a capped first batch, shows whether it deserves more investment before you commit list spend.

                ## Milestones
                1. Three people in the new segment asked what their biggest headache is.
                2. Copy rewritten in the segment's vocabulary with proof relevant to them.
                3. A capped first batch of 100 to 150 sent.
                4. A go, rework or stop decision recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first batch of at least 100 emails sent to the new segment with segment-specific copy, and a go, rework or stop decision recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Talk to three people in the new segment about their biggest headache"
                - "Rewrite your sequence in their vocabulary with relevant proof"
                - "Send a capped first batch of 100 to 150 emails"
                - "Record a go, rework or stop decision for the segment"
            - name: Inbox placement testing with seed accounts
              description: |-
                ## Purpose
                Reply rates tell you something is wrong; placement testing tells you where. Sending each sequence to a panel of seed mailboxes across the main providers shows whether mail lands in the primary inbox, a promotions tab or spam, per domain and per provider.

                ## Milestones
                1. A seed panel set up across the main mailbox providers.
                2. Every sequence tested from every sending domain.
                3. Results recorded per provider and per domain.
                4. Any domain with poor placement paused and investigated.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every sequence and sending domain placement-tested monthly for three months, with any poor result followed by a recorded fix."
                cadence: rolling
              tasks:
                - "Set up or subscribe to a seed panel covering the main mailbox providers"
                - "Test every live sequence from each sending domain @recurring(monthly:18)"
                - "Record placement by provider and by domain"
                - "Pause and investigate any domain landing mostly in spam"
            - name: Outbound attribution to pipeline and revenue
              description: |-
                ## Purpose
                Booked meetings are a vanity number if none of them turn into revenue. Tagging every cold email meeting at its source and following it through to won or lost shows cost per opportunity and per customer, which is the figure that decides whether outbound deserves more budget.

                ## Milestones
                1. A source tag applied to every meeting booked from cold email.
                2. Each tagged meeting followed through to opportunity, won or lost.
                3. Total outbound costs added up, including data, tools and time.
                4. Cost per opportunity and per customer calculated each quarter.

                ## Notes
                Deals from cold email often close slowly. Look back across at least two sales cycles before judging the channel.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly report shows opportunities, revenue and cost per customer attributed to cold email, with every meeting tagged at source."
                cadence: cyclic
              tasks:
                - "Add a cold email source tag to every booked meeting"
                - "Total the quarter's spend on data, tools and time"
                - "Follow each tagged meeting through to won or lost"
                - "Calculate cost per opportunity and per customer @recurring(quarterly)"
            - name: Signal-based sequences triggered by public events
              description: |-
                ## Purpose
                Experienced outbound teams move from sending to static lists to sending when something happens: a job posting, a funding round, a new location, a change of technology. Building a small pipeline that watches chosen signals and drops matching prospects into a dedicated sequence makes every email timely by design.

                ## Milestones
                1. Two or three signals chosen from the ones that best predicted buying.
                2. A source and check frequency set for each signal.
                3. A short dedicated sequence written per signal.
                4. A month of signal-based results compared with static-list results.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two signal-based sequences running for a month, with their positive reply rate compared against static lists."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose the two signals that best predicted past purchases"
                - "Set up a weekly check of each signal source"
                - "Write a short sequence for each signal"
                - "Compare a month of signal-based results with static-list results"
            - name: Deliverability incident recovery plan
              description: |-
                ## Purpose
                Blocklistings, complaint spikes or a provider suddenly bouncing everything can take a sending domain out overnight. A written recovery plan that says what to pause, what to check and how to request removal turns a panic into a routine.

                ## Milestones
                1. The symptoms that trigger the plan listed, such as a bounce spike or a listing.
                2. Pause steps written for every sending tool.
                3. Diagnosis and delisting steps written in order.
                4. The plan rehearsed once against a past or made-up incident.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written incident plan with triggers, pause steps and delisting steps, rehearsed once and stored where every sender can find it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the symptoms that should trigger the recovery plan"
                - "Write the pause steps for every sending tool"
                - "Write the diagnosis and delisting steps in order"
                - "Rehearse the plan once using a past or made-up incident"
            - name: Annual cold email programme review
              description: |-
                ## Purpose
                Once a year, step back from weekly numbers and ask whether cold email is still the right channel at its current cost. A yearly review of cost per customer, domains and mailboxes, data contracts and which segments earned their place sets next year's volume and budget on evidence.

                ## Milestones
                1. Twelve months of results, costs and customers won from outbound gathered.
                2. Data and tool contracts listed with renewal dates.
                3. Segments ranked by revenue per email sent.
                4. Next year's volume, budget and targets written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly review document records cost per customer, contract renewals and next year's outbound volume and budget."
                cadence: cyclic
              tasks:
                - "Gather twelve months of outbound results and costs"
                - "List every data and tool contract with its renewal date"
                - "Rank segments by revenue per email sent"
                - "Hold the annual cold email programme review @recurring(yearly)"
---

# Cold Email Prospecting

This area is for founders, small business owners and small teams who write to strangers that fit their customer profile and want those emails to turn into meetings. It starts with the foundations (a clear offer, separate authenticated sending domains, warmed mailboxes, a legal check and a first verified list), then the weekly machinery of list building, reply handling and deliverability checks, the writing skills behind subject lines, first emails and follow-ups, the tests and decisions that improve results, the launches and events worth planning, the situations that change the approach, and finally the specialist work of placement testing, attribution and signal-based sending.

What repeats is a daily reply sort, weekly list building, opt-out sweeps and domain health checks, a monthly sequence review and capacity check, a quarterly list refresh and attribution report, and a yearly programme and legal review. The Compliance control, Metrics log, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
