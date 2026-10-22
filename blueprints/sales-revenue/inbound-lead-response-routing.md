---
id: sales-revenue.inbound-lead-response-routing
name: Inbound Lead Response & Routing
description: "Every inbound channel mapped, a response standard by enquiry type, written routing rules, daily queue sweeps and weekly speed to lead reporting, so no enquiry waits and every source shows what it converts."
category: business
version: 1.0.0
tags: [sales-revenue, inbound-lead-response-routing, small-business, team, manager, speed-to-lead, lead-routing, inbound-leads]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - vendor
    - meeting-notes
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Inbound Lead Response & Routing
          description: "Responding to inbound enquiries within minutes, routing them to the right seller by rules, and tracking speed to lead and conversion from each source."
          projects:
            - name: Inbound channel inventory with an owner for each
              description: |-
                ## Purpose
                Enquiries rarely arrive through one door: the website form, a chat widget, a published phone number, a shared mailbox, social messages, marketplace listings and the odd old landing page nobody remembers building. Listing every one, where it lands and who sees it first is the only way to find the channels where leads currently sit unread for days.

                ## Milestones
                1. A list of every inbound channel, including old forms, numbers and mailboxes still live.
                2. For each channel, the place it lands and the person who sees it first recorded.
                3. Any channel with no owner or no alert flagged for a fix.
                4. The inventory saved where sales and marketing can both find it.

                ## Notes
                Search your own website and old campaign pages for forms. Orphaned forms that email a former employee are a common find.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written inventory lists every live inbound channel with its landing place and a named owner, and no channel is left without one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every form, phone number, mailbox and chat widget that can receive an enquiry"
                - "Submit a test enquiry through each one and note where it arrives"
                - "Name an owner for every channel that lacks one"
                - "Check the inventory for any new form, number or listing added since @recurring(quarterly)"
            - name: Speed to lead baseline from last month's enquiries
              description: |-
                ## Purpose
                Most teams believe they reply within the hour and are surprised by the real figure once weekends, holidays and busy weeks are counted. Measuring the time from submission to first human contact on thirty recent enquiries gives an honest starting number, and shows which channels and days drag the average down.

                ## Milestones
                1. Thirty recent inbound enquiries sampled across all channels.
                2. Submission time and first human response time recorded for each.
                3. Median and slowest response times worked out, by channel and by day of week.
                4. Enquiries that never got a reply counted separately and named.

                ## Notes
                Count only a human reply or call. An automatic acknowledgement email does not count as a response.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline sheet records first response time for at least thirty enquiries, with the median, the slowest and the never-answered count."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export last month's inbound enquiries with their submission timestamps"
                - "Find the first human reply or call for thirty of them in the CRM or inbox"
                - "Work out the median and slowest response time by channel"
                - "Share the baseline with the team without naming individual sellers"
            - name: Written definition of an inbound lead and its statuses
              description: |-
                ## Purpose
                When a demo request, a newsletter sign-up and a job applicant all land in the same queue as a lead, response figures become meaningless and sellers start ignoring the queue. A one-page definition of what counts as an inbound lead, plus a short set of statuses such as new, attempting, connected, qualified, disqualified and recycled, gives everyone the same words and the reports something real to count.

                ## Milestones
                1. A definition separating hand-raisers, content downloads and non-sales contacts.
                2. Five to seven lead statuses, each with a one-line meaning and an exit rule.
                3. Disqualification reasons agreed as a short fixed list.
                4. The definition signed off by the sales manager and the marketing lead.

                ## Notes
                Keep statuses for the inbound lead itself. Deal stages after qualification belong to the opportunity, not here.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off one-page definition of an inbound lead lists every status with its meaning and a fixed set of disqualification reasons."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sort twenty recent enquiries into hand-raisers, downloads and non-sales contacts"
                - "Draft five to seven lead statuses with a one-line meaning each"
                - "Agree a fixed list of disqualification reasons with the team"
                - "Get the sales manager and marketing lead to sign off the definition"
                - "Reread the definition against how the team really uses it @recurring(yearly)"
            - name: Response time standard for each enquiry type
              description: |-
                ## Purpose
                A pricing or demo request is worth a call within minutes, while a white paper download can wait until the same afternoon. Writing a response standard for each enquiry type, in business hours and out of them, turns speed to lead from a vague hope into a target sellers can hit and managers can report against.

                ## Milestones
                1. A target first response time set for each enquiry type in business hours.
                2. A separate out-of-hours standard agreed, including weekends.
                3. The first response method named for each type: call, email, text or booking link.
                4. The standard published to every seller who receives inbound leads.

                ## Notes
                Set targets you can hit at least nine times in ten, then tighten them. A missed target every day teaches people to ignore it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published response standard gives a target time and first contact method for every enquiry type, in and out of business hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the enquiry types from your lead definition"
                - "Set a target first response time and method for each type"
                - "Agree the out-of-hours and weekend standard"
                - "Send the standard to every seller who takes inbound leads"
            - name: Inbound response rota with named backups
              description: |-
                ## Purpose
                Leads go cold in the gaps: lunch, the school run, a sales meeting, a day off nobody mentioned. A simple rota showing who answers new enquiries for each part of the working week, and who covers when they cannot, closes those gaps for a team of two just as well as a team of twenty.

                ## Milestones
                1. The working week split into blocks, each with a primary and a backup responder.
                2. Lunch, meetings and school-run hours covered explicitly.
                3. A rule for what the backup does when the primary misses the target.
                4. The rota visible in a shared calendar or channel.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared rota names a primary and a backup responder for every block of the working week, published a month ahead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the hours in the week when enquiries usually go unanswered"
                - "Name a primary and a backup responder for each block"
                - "Agree what the backup does when a lead passes its target time"
                - "Publish next month's rota in the shared calendar @recurring(monthly:25)"
            - name: Source tracking on every inbound lead
              description: |-
                ## Purpose
                Conversion by source is only as good as the source field, and on most systems it is blank, overwritten or set to 'website' for half the leads. Capturing campaign parameters in hidden form fields, keeping the original source separate from the latest one, and adding a short 'how did you hear about us' question makes it possible to say which channels really produce customers.

                ## Milestones
                1. Campaign parameters captured into hidden fields on every form.
                2. Original source and latest source stored as separate fields that cannot overwrite each other.
                3. A self-reported source question added where it fits.
                4. Fewer than one in ten new leads arriving with no source.

                ## Notes
                Agree a short fixed list of source values with marketing before building anything. Free text sources cannot be reported on.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Nine in ten new inbound leads carry an original source from an agreed list, checked on a monthly sample."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a fixed list of source values with marketing"
                - "Add hidden fields that capture campaign parameters on every form"
                - "Separate original source from latest source in the CRM"
                - "Spot-check ten new leads for a missing or wrong source @recurring(monthly:12)"
            - name: Routing rules table, version one
              description: |-
                ## Purpose
                Routing usually starts as whoever grabs the lead first, which rewards the fastest clicker rather than the best fit and leaves quiet weeks for some sellers. A written table of rules, in priority order, for existing accounts, region, company size and product interest, with a fallback for everything else, is the document any routing tool or person can then follow.

                ## Milestones
                1. Every routing rule written as a plain sentence in priority order.
                2. A fallback owner named for leads no rule matches.
                3. Each rule tested against twenty recent leads to see who would have received them.
                4. The table agreed with the sellers it affects before it goes live.

                ## Notes
                Fewer rules route better. Most teams need four to six; every extra rule is another way for a lead to land with the wrong person.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A routing rules table in priority order, with a fallback owner, has been tested on twenty past leads and agreed with the affected sellers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down how leads are really assigned today, including the informal rules"
                - "Draft four to six routing rules in priority order with a fallback owner"
                - "Run twenty recent leads through the rules on paper"
                - "Walk the sellers through the table and note their objections"
            - name: First reply templates for each enquiry type
              description: |-
                ## Purpose
                Writing a fresh reply to every enquiry is slow, and a slow reply loses more deals than a slightly generic one. A short set of first-reply emails and texts for each enquiry type, written to sound like a person and to propose a specific next step, lets a seller answer in under two minutes and still personalise the opening line.

                ## Milestones
                1. One email and one text template for each enquiry type.
                2. Each template under 120 words with a single clear next step.
                3. A personalisation line marked in every template for the seller to fill.
                4. Templates stored in the CRM or inbox tool where sellers already work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every enquiry type has an email and a text first-reply template under 120 words, stored where sellers send from."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the five best first replies sellers have sent this quarter"
                - "Ask the agent to draft short email and text versions for each enquiry type"
                - "Cut each template to under 120 words with one next step"
                - "Retire any template whose reply rate has fallen behind the others @recurring(quarterly)"
            - name: Contact form fields that route and qualify
              description: |-
                ## Purpose
                Forms often ask for twelve fields and still miss the two that decide routing, such as country or number of employees. Rebuilding each form around the few fields that choose the right seller and the right first reply, and dropping the rest, tends to raise submissions and cut misroutes at the same time.

                ## Milestones
                1. The fields each routing rule depends on listed.
                2. Every form reviewed and any field nobody uses removed.
                3. Routing fields made required, with picklists instead of free text.
                4. A test submission on each form landing with the correct seller.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live enquiry form collects the fields the routing rules need as picklists, and a test submission on each routes correctly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the fields each routing rule reads"
                - "Remove form fields nobody uses in routing, reporting or the first reply"
                - "Turn routing fields into required picklists"
                - "Submit a test on every form and confirm the seller it reaches"
            - name: Filtering spam and non-sales enquiries from the queue
              description: |-
                ## Purpose
                Vendor pitches, job applicants, support requests and bot submissions can make up a large share of what arrives through a contact form, and every one a seller opens is a minute not spent on a buyer. Filtering the obvious junk automatically and sending genuine non-sales contacts to support, recruiting or accounts keeps the sales queue worth watching.

                ## Milestones
                1. A sample of a month's enquiries sorted into buyer, support, jobs, suppliers and junk.
                2. Automatic filters in place for bot submissions and known junk patterns.
                3. A destination and owner for support, job and supplier enquiries.
                4. A weekly check of the filtered folder so real buyers are not lost.

                ## Notes
                A hidden honeypot field on forms catches many bots without adding friction for real people.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Junk filters and non-sales routes are live, and a weekly check of the filtered folder has found no buyer missed for a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort a month of enquiries into buyers, support, jobs, suppliers and junk"
                - "Add a honeypot field and junk filters to every form"
                - "Agree where support, job and supplier enquiries go and who owns them"
                - "Scan the filtered folder for genuine buyers caught by mistake @recurring(weekly:tue)"
            - name: Seller alert within a minute of a new lead
              description: |-
                ## Purpose
                Leads that sit in a CRM view waiting for someone to refresh the page are already losing value. Sending the assigned seller an immediate alert, by mobile notification or a team chat channel, with the enquiry text and a one-tap link to call, removes the slowest step between submission and first contact.

                ## Milestones
                1. Every manual step between form submission and seller awareness listed.
                2. An automatic alert sent to the assigned seller within a minute of assignment.
                3. The alert showing name, company, enquiry text and a link to the record.
                4. A fallback alert to the backup when the lead is untouched after the target time.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Test leads trigger an alert to the assigned seller within one minute, and an escalation to the backup when left untouched."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Time a test lead from form submission to the seller noticing it"
                - "Set up an alert to the assigned seller's phone or team chat"
                - "Add enquiry text and a record link to the alert"
                - "Build an escalation to the backup when the target time passes"
            - name: Matching inbound leads to existing accounts
              description: |-
                ## Purpose
                When someone at a current customer or an open deal fills in a form, round robin can hand them to a stranger who then calls them cold, which embarrasses everyone. Matching each new lead to existing accounts by email domain and company name, and routing matches to the account owner first, keeps relationships intact and often surfaces expansion interest early.

                ## Milestones
                1. A matching rule using email domain and company name agreed.
                2. Matched leads routed to the account owner with a note on the match.
                3. Free email domains excluded from domain matching.
                4. A monthly sample showing matched leads reaching the right owner.

                ## Notes
                Decide what happens when the account owner is away or has left. A matched lead with an inactive owner should fall through to the normal rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Leads from existing accounts reach the account owner in at least nine of ten sampled cases, with inactive owners falling through to the fallback."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find five recent leads from existing customers and see who received them"
                - "Agree a match rule on email domain and company name"
                - "Exclude free email domains from domain matching"
                - "Route matched leads to the account owner with a match note"
            - name: Daily unworked lead sweep
              description: |-
                ## Purpose
                Alerts get missed and rules misfire, so something has to catch the leads that slip through. A five-minute look at a saved view of new leads with no activity, at the same time every working day, finds them while they are still hours old rather than weeks.

                ## Milestones
                1. A saved view of inbound leads in new status with no logged activity.
                2. A fixed time each working day for the sweep, with a named owner.
                3. Every lead found either contacted or reassigned the same day.
                4. A month of sweeps with the count of rescued leads recorded.

                ## Notes
                Start from the **Operational checklist** template to keep the sweep to the same five steps each day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The daily sweep runs on twenty working days in a row, and every lead it finds is contacted or reassigned the same day."
                cadence: rolling
              tasks:
                - "Build a saved view of new inbound leads with no activity"
                - "Name an owner and a backup for the daily sweep"
                - "Open the unworked view and contact or reassign every lead in it @recurring(daily)"
                - "Count the leads rescued by the sweep at the end of each month"
            - name: Follow-up attempt cadence for unreached inbound leads
              description: |-
                ## Purpose
                Many inbound leads are not reached on the first try, and most sellers give up after one or two attempts. A written cadence of six to eight touches over about ten working days, mixing calls, emails and texts where consent allows, gives each enquirer a fair chance to reply before the lead is closed or recycled.

                ## Milestones
                1. A cadence of six to eight attempts over roughly ten working days written down.
                2. Each attempt given a channel, a day and a template.
                3. A clear end rule: close, recycle or keep with a reason.
                4. The cadence loaded into the sequencing or task tool sellers use.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every unreached inbound lead receives the agreed number of attempts before closing, checked on a weekly sample of ten."
                cadence: rolling
              tasks:
                - "Count how many attempts unreached leads got last month"
                - "Write a six to eight touch cadence across call, email and text"
                - "Load the cadence into the task or sequencing tool"
                - "Close or recycle every lead that has finished the cadence @recurring(weekly:fri)"
            - name: Weekly speed to lead and conversion report
              description: |-
                ## Purpose
                Response times drift back up as soon as nobody is looking. One short weekly report, showing median first response, the share inside the standard, untouched leads and conversion to meeting by source, keeps the measure visible and gives the manager three numbers to discuss rather than a dashboard nobody opens.

                ## Milestones
                1. A report with median response, share within standard and untouched count.
                2. Conversion from lead to meeting shown by source.
                3. The report sent at the same time each week.
                4. Twelve consecutive weekly reports with one action noted on each.

                ## Notes
                Start from the **Metrics log** template. Report medians rather than averages; one lead answered after a fortnight skews an average badly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reports are sent, each with median response, share within standard, source conversion and one recorded action."
                cadence: rolling
              tasks:
                - "Create the weekly report from the metrics log template"
                - "Pull median response, share within standard and source conversion @recurring(weekly:mon)"
                - "Write one action for the week under the numbers"
                - "Compare this quarter's medians with your baseline"
            - name: Misrouted lead reassignment process
              description: |-
                ## Purpose
                Even good rules send some leads to the wrong seller, and without a process they sit while two people argue or both assume the other will call. A one-step way to flag a misroute, a target to reassign it within the hour and a log of why it happened turns each mistake into a rule fix.

                ## Milestones
                1. A single field or button for sellers to flag a misrouted lead.
                2. A named person who reassigns flagged leads within one working hour.
                3. A misroute log with the lead, the rule that fired and the reason.
                4. At least one routing rule changed because of the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Flagged misroutes are reassigned within one working hour on average, and the monthly log review has produced at least one rule change."
                cadence: rolling
              tasks:
                - "Add a misroute flag sellers can set on a lead"
                - "Name the person who reassigns flagged leads"
                - "Start a misroute log with the rule that fired and the reason"
                - "Review the month's misroute log and fix the worst rule @recurring(monthly:20)"
            - name: Pausing absent sellers in the lead rotation
              description: |-
                ## Purpose
                Round robin keeps sending leads to sellers on holiday, at a conference or off sick unless someone tells it not to. A weekly look at upcoming leave, with absent sellers paused in the rotation and their open inbound leads covered, stops leads waiting a week for someone who is not there.

                ## Milestones
                1. A shared leave calendar the routing owner can see.
                2. Absent sellers paused before their leave starts.
                3. Open inbound leads of absent sellers reassigned or covered.
                4. Sellers restored to the rotation on their first day back.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No inbound lead is assigned to a seller during their recorded leave for a full quarter."
                cadence: rolling
              tasks:
                - "Get sellers to put all leave in one shared calendar"
                - "Check next week's leave and pause absent sellers in the rotation @recurring(weekly:thu)"
                - "Reassign open inbound leads before a seller goes away"
                - "Restore each seller to the rotation on their first day back"
            - name: After-hours and weekend enquiry coverage
              description: |-
                ## Purpose
                Buyers often fill in forms in the evening and at weekends, when nobody is watching, and by Monday they have spoken to a competitor. Deciding how out-of-hours enquiries are handled, whether by a helpful auto-reply with a booking link, an on-call seller for high-value types or an answering service, sets clear expectations for the buyer and the team.

                ## Milestones
                1. The share of enquiries arriving out of hours measured.
                2. A coverage method chosen for each enquiry type out of hours.
                3. An auto-reply written that says when a person will respond and offers a booking link.
                4. Monday morning leads cleared by an agreed time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every out-of-hours enquiry receives the agreed coverage, and weekend leads are contacted by the agreed Monday time for a month."
                cadence: rolling
              tasks:
                - "Measure the share of last quarter's enquiries that arrived out of hours"
                - "Choose auto-reply, on-call or answering cover for each enquiry type"
                - "Write an out-of-hours reply that names when a person will respond"
                - "Submit an evening test enquiry and check the reply it gets @recurring(quarterly)"
            - name: Missed calls and answering cover for the sales line
              description: |-
                ## Purpose
                Buyers who ring and get no answer rarely leave a voicemail; they ring the next supplier on the list. Setting a voicemail greeting that promises a callback time, a text back to missed callers where consent and local rules allow, and deciding whether an answering service is worth it for busy periods, keeps phone enquiries from vanishing.

                ## Milestones
                1. Missed call volume for the sales line measured for a month.
                2. A voicemail greeting recorded with a specific callback promise.
                3. Missed callers called or texted back within the response standard.
                4. A decision recorded on whether to use an answering service, with cost.

                ## Notes
                Start from the **Vendor** template if you trial an answering service. Check local rules on texting people who called you before switching on automatic texts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Missed calls on the sales line are returned within the response standard for four weeks running, and the answering service decision is recorded."
                cadence: rolling
              tasks:
                - "Pull a month of missed calls on the sales line"
                - "Record a voicemail greeting with a specific callback time"
                - "Get two quotes from answering services for peak hours"
                - "Check the missed call report and chase any caller not called back @recurring(weekly:wed)"
            - name: Live chat staffing and handoff to sellers
              description: |-
                ## Purpose
                Chat that says 'we typically reply in a few hours' is just a form with worse manners. Setting staffed chat hours, a clean handoff from bot or support to a seller for buying questions, and saving each transcript onto the lead record makes chat a fast inbound channel rather than a frustrating one.

                ## Milestones
                1. Chat hours set to match when someone can genuinely answer.
                2. A rule for when a chat is handed to a seller and how.
                3. Chat transcripts attached automatically to the lead record.
                4. Out-of-hours chat switched to a booking link or message capture.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Chat runs only in staffed hours, buying questions reach a seller within the standard, and every transcript sits on its lead record."
                cadence: rolling
              tasks:
                - "Set chat hours to match when someone can actually answer"
                - "Write the handoff rule from bot or support to a seller"
                - "Connect chat transcripts to the lead record"
                - "Read five chat transcripts and note one improvement @recurring(monthly:16)"
            - name: Recycling not-ready leads back to marketing
              description: |-
                ## Purpose
                Plenty of genuine enquirers are six months away from buying, and sellers either chase them until they unsubscribe or forget them entirely. A recycle status with a reason, a nurture track marketing runs, and a rule that sends the lead back to sales when they show fresh interest keeps those people warm without clogging the queue.

                ## Milestones
                1. A recycle status with a required reason and a revisit date.
                2. A nurture track agreed with marketing for recycled leads.
                3. A re-engagement rule that routes recycled leads back to sales.
                4. A monthly count of recycled leads that came back and converted.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every recycled lead has a reason and revisit date, and a monthly count shows how many returned to sales and converted."
                cadence: rolling
              tasks:
                - "Add a recycle status with a required reason and revisit date"
                - "Agree the nurture track for recycled leads with marketing"
                - "Set the rule that sends re-engaged leads back to sales"
                - "Count recycled leads that returned and converted last month @recurring(monthly:5)"
            - name: Monthly routing rules and distribution review
              description: |-
                ## Purpose
                Routing that was fair in January can be lopsided by June after a new hire, a product launch or a busy region. A monthly look at how many leads each seller received, how fast they responded and how many converted shows whether the rules still match the team, and stops quiet resentment about who gets the good leads.

                ## Milestones
                1. Leads received, median response and conversion shown per seller for the month.
                2. Any seller above or below their intended share flagged.
                3. Rule changes recorded with a date and a reason.
                4. Six monthly reviews completed with decisions noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews record lead share, response and conversion per seller, with any rule change dated and explained."
                cadence: rolling
              tasks:
                - "Build a view of leads, response and conversion by seller"
                - "Compare each seller's share with the share the rules intend @recurring(monthly:9)"
                - "Record any rule change with its date and reason"
            - name: What the speed to lead evidence actually says
              description: |-
                ## Purpose
                Figures about response time are quoted everywhere, often secondhand and without the study behind them. Reading two or three original pieces of research on response time and contact rates, and noting what was measured and for which kind of buyer, gives you an argument for faster response that will survive a sceptical finance director.

                ## Milestones
                1. Two or three original studies or vendor reports on response time read in full.
                2. For each, the sample, the buyer type and what was measured noted.
                3. A one-paragraph summary of what applies to your market and what does not.
                4. The summary shared with the team alongside your own baseline.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-paragraph summary, citing at least two original sources and your own baseline, is shared with the team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the original source behind the speed to lead figure your team quotes"
                - "Read two studies and note sample, buyer type and measure"
                - "Write a paragraph on what applies to your market"
                - "Share the summary next to your own baseline numbers"
            - name: Opening a call to a fresh inbound enquiry
              description: |-
                ## Purpose
                Calling someone four minutes after they filled in a form feels intrusive if the opener is a pitch, and welcome if it starts with their own words. Practising a short opener that names what they asked for, checks it is a good moment and asks one question about what prompted the enquiry makes fast calls land well.

                ## Milestones
                1. A three-line opener written for each main enquiry type.
                2. Ten practice calls role-played with a colleague or recorded alone.
                3. Five real calls recorded and the first thirty seconds reviewed.
                4. The opener revised from what worked.

                ## Notes
                Keep the opener about routing the conversation, not discovery. The aim of the first minute is to confirm the right person, the right topic and a good time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A revised opener for each main enquiry type, tested on ten role plays and five recorded real calls, is in the shared template library."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a three-line opener that repeats what the enquirer asked for"
                - "Role-play the opener ten times with a colleague"
                - "Review the first thirty seconds of five real recorded calls"
                - "Save the revised opener in the template library"
            - name: Writing short replies that inbound enquirers answer
              description: |-
                ## Purpose
                Long first replies with three attachments and a paragraph about the company get skimmed and ignored. Learning to write a reply of four or five sentences that answers their question, offers one specific time or a booking link and ends with a single question tends to get far more replies than the standard brochure email.

                ## Milestones
                1. Ten of your own past first replies collected and their reply rates noted.
                2. A short reply structure written down: answer, offer, one question.
                3. Twenty replies sent using the new structure.
                4. Reply rate on the new structure compared with the old.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty replies sent using the short structure have a recorded reply rate compared against ten earlier replies."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect ten past first replies and note which got an answer"
                - "Write a reply structure of answer, offer and one question"
                - "Send twenty replies using the new structure"
                - "Compare the reply rate with your earlier replies"
            - name: How your CRM's assignment rules and queues work
              description: |-
                ## Purpose
                Most CRMs have assignment rules, queues, round robin options and workflow triggers that nobody on the team fully understands, so routing changes get made by trial and error in the live system. An afternoon with the documentation and a sandbox, working out the order rules fire in and what happens when none match, prevents the classic Friday change that sends every lead to one person.

                ## Milestones
                1. The CRM's documentation on assignment, queues and round robin read.
                2. The order in which rules and workflows fire written down.
                3. Three test leads run through a sandbox or test configuration.
                4. A one-page note on how to change routing safely saved for the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains rule order, the no-match behaviour and a safe change method, tested with three sandbox leads."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the CRM's help pages on assignment rules and queues"
                - "Write down the order rules, workflows and integrations fire in"
                - "Run three test leads through a sandbox or test rule"
                - "Save a one-page safe change note for whoever edits routing"
            - name: Two-minute triage questions for misfit enquiries
              description: |-
                ## Purpose
                Some enquiries are really for support, a partner, a different region or a product you do not sell, and a seller who spends twenty minutes before noticing has lost the time twice. Learning three or four quick questions that confirm who should own the conversation, and a polite handover script, gets the enquirer to the right place fast.

                ## Milestones
                1. The common misfit types listed from a month of enquiries.
                2. Three or four triage questions written that sort them in two minutes.
                3. A handover script for each misfit type, naming where they go next.
                4. Ten real handovers made using the script.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Triage questions and handover scripts exist for each misfit type, and ten real handovers have used them."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the misfit enquiry types from last month"
                - "Write three or four questions that sort them in two minutes"
                - "Draft a handover line for each misfit type"
                - "Use the script on ten real handovers and note what changed"
            - name: Consent and privacy rules for contacting enquirers
              description: |-
                ## Purpose
                Filling in a form does not always mean consent to be called, texted or added to every marketing list, and the rules differ by country and channel. Learning what your forms actually ask permission for, what your local data protection and telemarketing rules require, and how opt-outs are recorded protects the business without slowing replies.

                ## Milestones
                1. The consent wording on every form read and recorded.
                2. Local rules on calls, texts and email to enquirers summarised from official guidance.
                3. Opt-out and do-not-contact handling confirmed in the CRM.
                4. Any open questions taken to whoever advises the business on data protection.

                ## Notes
                This project organises what you need to ask. Take the final view from your data protection lead or legal adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of form consent wording, local contact rules and opt-out handling has been reviewed by the business's data protection adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Copy the consent wording from every enquiry form into one note"
                - "Read official guidance on calling and texting enquirers in your country"
                - "Check how opt-outs are recorded and respected in the CRM"
                - "Send open questions to your data protection adviser"
            - name: Fit and intent scoring to order the inbound queue
              description: |-
                ## Purpose
                On a busy morning with thirty new leads, someone has to decide which to call first. Learning the basics of a simple score, combining fit from your ideal customer rules with intent such as a pricing page visit or a demo request, gives sellers a queue order that beats first come, first served.

                ## Milestones
                1. Three fit signals and three intent signals chosen.
                2. A simple points score written and applied to last month's leads.
                3. Conversion compared between high and low scores on that sample.
                4. The queue view sorted by score once the comparison holds up.

                ## Notes
                Start with points you can explain in one sentence. A score nobody understands will be ignored.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A six-signal score applied to a month of past leads shows higher conversion for high scores before it is used to order the queue."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick three fit signals and three intent signals"
                - "Score last month's leads by hand with simple points"
                - "Compare conversion for the top and bottom thirds"
                - "Sort the inbound queue by score if the comparison holds"
            - name: Round robin, weighted or territory routing decision
              description: |-
                ## Purpose
                Pure round robin is simple and fair on volume, weighted routing gives more to proven converters or new hires ramping up, and territory routing keeps relationships local. Comparing them against your team size, deal sizes and conversion data, rather than defaulting to whatever the tool offers, gives a routing model you can explain to every seller.

                ## Milestones
                1. The three models described against your team in a short comparison.
                2. Last quarter's leads replayed under each model on paper.
                3. Effects on fairness, speed and conversion noted for each.
                4. A model chosen with the reasons recorded and shared.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the routing model chosen, with a replay of last quarter's leads under each option attached."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a short comparison of round robin, weighted and territory routing"
                - "Replay last quarter's leads under each model on a spreadsheet"
                - "Note the effect on each seller's volume and response time"
                - "Record the chosen model and why, and share it with the team"
            - name: Instant meeting booking on the demo request form
              description: |-
                ## Purpose
                Every email exchange to find a time loses a share of enquirers. Letting a qualified enquirer pick a slot with the routed seller straight after submitting the form shortens speed to meeting to seconds, and the choice of scheduling tool decides whether routing rules and calendars stay in step.

                ## Milestones
                1. Requirements listed: routing support, calendar sync, CRM logging and price.
                2. Three scheduling tools compared on those requirements.
                3. A tool chosen and connected to the demo request form.
                4. Meetings booked from the form tracked for a month.

                ## Notes
                Start from the **Purchase decision** template. Offer the booking step only to enquiries that pass your routing and fit rules, or calendars fill with poor fits.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scheduling tool is chosen against written requirements, live on the demo form, and a month of form bookings is counted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the requirements for routed booking on the demo form"
                - "Compare three scheduling tools against the requirements"
                - "Connect the chosen tool to the demo request form"
                - "Count meetings booked directly from the form after one month"
            - name: Enrichment at submission instead of extra form fields
              description: |-
                ## Purpose
                Asking for company size, industry and region on the form costs submissions, yet routing needs them. Enriching each submission from the email domain with a data provider, and asking only for name, work email and the enquiry, can keep the form short while routing still gets the facts it depends on.

                ## Milestones
                1. The fields routing needs that enrichment could supply listed.
                2. Two enrichment providers tested on fifty past leads for match rate and accuracy.
                3. A choice made, with cost per lead recorded.
                4. Routing switched to enriched fields with a fallback when enrichment fails.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two enrichment providers are tested on fifty past leads, a choice is recorded with cost, and routing has a fallback when no match is found."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the routing fields that enrichment could fill"
                - "Test two providers on fifty past leads for match rate"
                - "Record the cost per enriched lead for each provider"
                - "Set a fallback route for leads enrichment cannot match"
            - name: Shorter demo request form test
              description: |-
                ## Purpose
                Every field on a demo request form is a small reason not to submit it. Testing a shorter version against the current one, and measuring both submissions and the share that turn into qualified meetings, shows whether fewer fields bring more buyers or only more noise.

                ## Milestones
                1. A shorter form designed with only the fields routing needs.
                2. The two versions split fairly across visitors.
                3. Submissions and qualified meetings counted for both over an agreed period.
                4. A winner chosen on qualified meetings, not raw submissions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both form versions run over an agreed period and a winner is chosen on qualified meetings per visitor, with the numbers recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Design a shorter form with only routing fields and the enquiry"
                - "Split visitors between the old and new form"
                - "Count submissions and qualified meetings for each version"
                - "Choose the winner on qualified meetings and retire the other form"
            - name: High-value lead priority lane
              description: |-
                ## Purpose
                Requests from companies ten times your average customer size deserve a senior seller and a call within minutes, not a place in the general rotation. A priority lane, triggered by size, existing strategic accounts or a named target list, with its own alert and backup, makes sure the biggest inbound opportunities get the best response.

                ## Milestones
                1. Criteria for a high-value inbound lead agreed in writing.
                2. A separate alert and named responders for the priority lane.
                3. A tighter response standard set for priority leads.
                4. Priority lane leads and their outcomes reviewed after a quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Priority lane criteria, responders and response standard are live, and a quarterly review of its leads and outcomes is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree what makes an inbound lead high value"
                - "Name the senior responders and backup for the priority lane"
                - "Set a separate alert and tighter response standard"
                - "Review priority lane leads and outcomes after one quarter"
            - name: Mystery shop of every inbound channel
              description: |-
                ## Purpose
                Reports show what the system recorded, not what a buyer experienced. Submitting realistic test enquiries through every form, number, chat and mailbox, at different times of day, and noting how long each took and how the reply felt, finds broken forms, rude auto-replies and channels the rota forgot.

                ## Milestones
                1. A test enquiry sent through every channel in the inventory.
                2. Tests spread across mornings, evenings and a weekend.
                3. Time to first human response and reply quality recorded for each.
                4. Fixes assigned for every channel that missed the standard.

                ## Notes
                Use a colleague or friend outside the team so sellers do not spot the test.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A test enquiry has been sent through every channel, with response time and quality recorded and a fix owner for each miss."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Recruit someone outside the team to send test enquiries"
                - "Send tests through every channel at different times of day"
                - "Record response time and reply quality for each test"
                - "Repeat the mystery shop across all channels @recurring(quarterly)"
            - name: Routing rules go-live day
              description: |-
                ## Purpose
                Switching routing on in the live system without a plan is how a whole morning of leads ends up assigned to one person, or to nobody. A go-live day with test leads, a rollback plan, sellers briefed in advance and someone watching the first hours makes the change uneventful.

                ## Milestones
                1. A go-live date agreed avoiding campaign launches and month end.
                2. Test leads for every rule prepared and run before switching on.
                3. A rollback plan written, with the old rules saved.
                4. The first day's leads checked by hand against the rules.

                ## Notes
                Start from the **Operational checklist** template for the go-live steps.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New routing goes live on the planned date with every rule tested, a saved rollback and the first day's leads checked by hand."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a go-live date away from campaigns and month end"
                - "Prepare a test lead for every rule in the table"
                - "Save the old rules and write the rollback steps"
                - "Check every lead routed on go-live day by hand"
            - name: Campaign launch inbound readiness check
              description: |-
                ## Purpose
                Webinars, product launches and big advertising pushes can multiply inbound volume for a week, and the leads it pays for are wasted if replies take days. Agreeing expected volume with marketing beforehand, adding responders, preparing campaign-specific replies and checking forms route correctly turns launch week into meetings rather than a backlog.

                ## Milestones
                1. Expected lead volume and timing agreed with marketing.
                2. Extra responders and hours scheduled for launch week.
                3. Campaign-specific first replies written and loaded.
                4. Campaign forms tested end to end before launch.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Launch week leads are answered within the response standard at least nine times in ten, with volume compared against the forecast."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask marketing for expected lead volume and launch dates"
                - "Schedule extra responders for launch week"
                - "Write first replies that mention the campaign by name"
                - "Test every campaign form end to end before launch"
            - name: Trade show and event lead follow-up within 48 hours
              description: |-
                ## Purpose
                Badge scans and business cards from an event often sit in a spreadsheet for a fortnight while everyone catches up on email. Planning before the event how leads are captured, uploaded with the event as source, routed and contacted within two working days keeps the conversations fresh enough to mean something.

                ## Milestones
                1. A capture method and notes format agreed before the event.
                2. Leads uploaded with the event as source within one working day.
                3. Every lead routed and contacted within two working days.
                4. Meetings booked from the event counted a month later.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every lead from the event is uploaded within one working day and contacted within two, and meetings booked are counted a month later."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree how leads and notes will be captured at the stand"
                - "Upload event leads with the event as source the next working day"
                - "Route and contact every event lead within two working days"
                - "Count meetings booked from the event after one month"
            - name: Quarterly inbound lead review with marketing
              description: |-
                ## Purpose
                Marketing judges itself on lead volume and sales on meetings, and without a regular meeting each blames the other for the gap. A quarterly review of volume, response, conversion and rejection reasons by source, with agreed actions minuted, gives both teams one set of numbers and a shared list of fixes.

                ## Milestones
                1. A standing quarterly meeting with sales and marketing leads.
                2. A shared pack covering volume, response, conversion and rejections by source.
                3. Three agreed actions minuted with owners.
                4. Last quarter's actions reviewed at the start of each meeting.

                ## Notes
                Start from the **Meeting notes** template so actions carry forward.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four quarterly reviews are held in a year, each with a shared pack and three minuted actions reviewed at the next meeting."
                cadence: cyclic
              tasks:
                - "Book the quarterly inbound review with the marketing lead @recurring(quarterly)"
                - "Build the shared pack of volume, response and conversion by source"
                - "Minute three actions with owners at each review"
            - name: Owner answering every enquiry alone
              description: |-
                ## Purpose
                In a small business the owner is usually the sales line, the installer and the bookkeeper, so enquiries get answered at ten at night or not at all. Three fixed check times a day, a phone shortcut to the enquiry inbox, ready-made replies and an honest auto-reply can make one person respond faster than many teams.

                ## Milestones
                1. Every enquiry channel pointed to one inbox or app on your phone.
                2. Three fixed daily check times chosen around your working day.
                3. Saved replies for your four most common enquiries.
                4. An auto-reply that says when you will be in touch.

                ## Notes
                If you are on site or with customers most of the day, a short reply saying when you will call back beats a long one sent at midnight.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All enquiries reach one place, and for a month every one gets a first reply by the next check time."
                cadence: rolling
              tasks:
                - "Point every enquiry channel to one inbox or app on your phone"
                - "Save replies for your four most common enquiries"
                - "Write an auto-reply that says when you will respond"
                - "Clear new enquiries at your three fixed check times @recurring(daily)"
            - name: Handing inbound enquiries to the first sales hire
              description: |-
                ## Purpose
                Founders and owners often keep answering enquiries long after hiring a seller, because nobody wrote down how they do it. Planning a handover with written routing, the replies that work, a few weeks of shadowing and a date when the owner stops responding lets the new hire own the inbound queue without leads falling between two people.

                ## Milestones
                1. The owner's current way of handling enquiries written down.
                2. Two weeks of shadowing, then two weeks of the hire answering with review.
                3. A handover date after which the owner no longer replies first.
                4. Response times compared before and after the handover.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The new hire owns the inbound queue from a recorded handover date, with response times compared before and after."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down how you answer and route enquiries today"
                - "Have the new hire shadow your replies for two weeks"
                - "Review the hire's replies daily for the following two weeks"
                - "Set the date you stop replying first and tell the team"
            - name: Inbound service level agreement between sales and marketing
              description: |-
                ## Purpose
                Managers often inherit an unspoken deal where marketing sends whatever it collects and sales calls whatever it likes. A written agreement covering what marketing passes over, how fast sales responds, how many attempts are made and how leads are accepted or rejected with a reason gives a manager something firm to hold both teams to.

                ## Milestones
                1. The lead types marketing will pass to sales listed.
                2. Sales commitments on response time and attempts written in.
                3. An accept or reject step with fixed rejection reasons.
                4. The agreement signed by both leads and reported against monthly.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed agreement sets lead types, response time, attempts and rejection reasons, with a monthly report against it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft an agreement from your lead definition and response standard"
                - "List the lead types marketing will pass over"
                - "Write in sales commitments on response time and attempts"
                - "Get both leads to sign and agree the monthly report"
            - name: Inbound response alongside outbound targets
              description: |-
                ## Purpose
                Sellers who carry both outbound activity targets and inbound leads tend to let one starve the other, usually by leaving inbound until after a calling block. Agreeing that a new inbound lead interrupts outbound work, setting phone notifications accordingly and counting inbound response in the seller's weekly numbers keeps fast response from depending on willpower.

                ## Milestones
                1. A written rule that new inbound leads take priority over outbound blocks.
                2. Alerts set to reach sellers during calling and email blocks.
                3. Inbound response time shown in each seller's weekly numbers.
                4. A month with no seller's median response above the standard.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a full month, every seller who also prospects keeps a median inbound response within the standard."
                cadence: rolling
              tasks:
                - "Agree that a new inbound lead interrupts outbound work"
                - "Set inbound alerts to break through focus settings on phones"
                - "Add inbound response time to each seller's weekly numbers"
                - "Discuss any seller above the standard in their next one-to-one"
            - name: Clearing an inherited backlog of unworked leads
              description: |-
                ## Purpose
                A new manager or owner sometimes finds hundreds of inbound leads that were never contacted, some months old. Sorting them by age, source and fit, sending a short honest re-engagement message to the best, and closing or recycling the rest clears the queue in a few weeks and often finds a handful of live buyers.

                ## Milestones
                1. The backlog counted and sorted by age, source and fit.
                2. A re-engagement message sent to the best-fit third.
                3. Replies routed and contacted within the normal standard.
                4. Every remaining lead closed or recycled with a reason.

                ## Notes
                Do not apologise at length in the re-engagement message. One line acknowledging the delay and one useful question works better.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The inherited backlog is at zero, with the best third re-engaged and every other lead closed or recycled with a reason."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Export all unworked inbound leads with age, source and fit fields"
                - "Pick the best-fit third for re-engagement"
                - "Ask the agent to draft a short re-engagement message to test on ten leads"
                - "Close or recycle every remaining lead with a reason"
            - name: Seasonal enquiry surge plan
              description: |-
                ## Purpose
                Wedding suppliers, tax advisers, garden businesses and schools all see enquiries pile up in a few predictable weeks. Planning the surge a month ahead, with extra cover, shorter replies, a waiting list message and booking slots opened early, turns the busiest weeks into booked work rather than missed calls.

                ## Milestones
                1. Last year's peak weeks identified from enquiry dates.
                2. Extra cover arranged for the peak weeks.
                3. Peak-season replies and a waiting list message written.
                4. Peak results compared with last year afterwards.
              priority: low
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Peak weeks are planned a month ahead, with response times and booked work compared against the previous year's peak."
                cadence: cyclic
              tasks:
                - "Find last year's busiest enquiry weeks from your records"
                - "Arrange extra cover for the peak weeks"
                - "Write a peak-season reply and a waiting list message"
                - "Start the surge plan a month before peak season @recurring(yearly)"
            - name: Response time and conversion analysis by band
              description: |-
                ## Purpose
                Once a year of data exists, you can test the speed to lead claim on your own leads instead of relying on someone else's study. Grouping leads into response bands, such as under five minutes, under an hour, same day and later, and comparing conversion to meeting and to won deal within each source shows how much speed is really worth to you.

                ## Milestones
                1. At least six months of leads with first response time and outcome exported.
                2. Leads grouped into four or five response bands.
                3. Conversion to meeting and to won deal compared by band and source.
                4. A one-page finding shared with a recommendation on the response standard.

                ## Notes
                Fast responders may also be your best sellers, so compare within the same seller where volume allows before drawing conclusions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page analysis of at least six months of leads compares conversion across response bands and sources, with a recommendation recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export six months of leads with response time and outcome"
                - "Group leads into four or five response bands"
                - "Compare meeting and won rates by band within each source"
                - "Write a one-page finding with a response standard recommendation"
            - name: Inbound capacity per seller model
              description: |-
                ## Purpose
                There is a point where each seller cannot respond fast to every new lead and still work their pipeline, and response time quietly rises past it. Modelling how many inbound leads per week each seller can handle within the standard, from your own response data, tells a manager when to add a responder before speed slips.

                ## Milestones
                1. Weekly leads per seller plotted against their median response time.
                2. The volume where response time starts to rise identified.
                3. A leads-per-seller ceiling agreed and written down.
                4. A trigger set for adding a responder when forecast volume exceeds it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written leads-per-seller ceiling, drawn from at least three months of data, sets the trigger for adding a responder."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull weekly inbound volume and median response per seller"
                - "Find the weekly volume where response time starts to climb"
                - "Agree a leads-per-seller ceiling with the sales leader"
                - "Set the hiring or cover trigger against marketing's volume forecast"
            - name: Follow-the-sun and language-based routing
              description: |-
                ## Purpose
                Teams selling across regions find that a lead from Sydney submitted at their own midnight waits a full day, and a Spanish-language enquiry answered in English converts poorly. Routing by the enquirer's time zone and language to sellers who are awake and fluent, with a fallback for gaps, extends fast response across the clock without night shifts.

                ## Milestones
                1. Enquiry volume mapped by time zone and language.
                2. Sellers' working hours and languages recorded in the routing tool.
                3. Rules sending each lead to an available, fluent seller first.
                4. A fallback for hours and languages nobody covers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Time zone and language routing is live with a documented fallback, and median response for overseas leads is compared before and after."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map last quarter's enquiries by time zone and language"
                - "Record each seller's working hours and languages in the routing tool"
                - "Write routing rules that pick an available, fluent seller first"
                - "Define the fallback for uncovered hours and languages"
            - name: Lead assignment audit trail and fairness review
              description: |-
                ## Purpose
                Disputes about cherry-picking, stolen leads and manual reassignments are some of the most corrosive arguments on a sales team. Keeping a log of every assignment and reassignment, with who changed it and why, and reviewing manual overrides each quarter, settles disputes from facts and shows whether anyone is gaming the rotation.

                ## Milestones
                1. Assignment and reassignment history switched on and kept.
                2. Manual reassignments required to carry a reason.
                3. A quarterly report of overrides by person and reason.
                4. Any pattern of gaming raised and resolved with the people involved.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reassignment carries a recorded reason, and a quarterly override report has been reviewed for four quarters."
                cadence: rolling
              tasks:
                - "Switch on field history for lead owner and assignment fields"
                - "Make a reason required on every manual reassignment"
                - "Review manual overrides by person and reason @recurring(quarterly)"
            - name: Cost per qualified opportunity by inbound source
              description: |-
                ## Purpose
                A source producing hundreds of cheap leads can cost more per real opportunity than a pricier one that produces a few good buyers. Joining source tracking with spend from marketing to show cost per qualified opportunity and per won deal for each source gives sales and marketing a shared view of where inbound budget should go.

                ## Milestones
                1. Monthly spend by source agreed with marketing.
                2. Qualified opportunities and won deals counted by original source.
                3. Cost per qualified opportunity and per won deal worked out for each source.
                4. Three months of the figures reviewed together with marketing.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three consecutive months show cost per qualified opportunity and per won deal for every inbound source, reviewed with marketing."
                cadence: rolling
              tasks:
                - "Ask marketing for monthly spend by source"
                - "Count qualified opportunities and won deals by original source"
                - "Work out cost per qualified opportunity and won deal by source @recurring(monthly:3)"
---

# Inbound Lead Response & Routing

This area is for whoever makes sure an enquiry gets a fast, useful reply from the right person: the small business owner whose phone is the sales line, the seller picking up demo requests, and the manager who answers for response times and conversion. It starts with foundations (a channel inventory, a speed to lead baseline, lead definitions, a response standard, a rota, source tracking and written routing rules), moves through the daily and weekly operating routines, the skills worth practising and the improvements worth deciding, then dated events such as a routing go-live or a campaign launch, situations from the one-person business to an inherited backlog, and finally specialist analysis of response time, capacity and cost by source.

What repeats is a daily sweep of unworked leads, a weekly speed to lead report, weekly checks of the spam folder, missed calls and upcoming leave, monthly routing, misroute, recycle and source reviews, and a quarterly mystery shop and lead review with marketing. The Operational checklist, Metrics log, Purchase decision, Vendor and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
