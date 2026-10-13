---
id: relationships.wedding-planning
name: Wedding Planning
description: "A wedding planned from engagement to the last thank-you card: a shared vision, a budget that holds, the venue and suppliers booked, the legal paperwork done and a running order everyone can follow."
category: personal
version: 1.0.0
tags: [relationships, wedding-planning, everyone, venue, guest-list, suppliers, ceremony, budget]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - meeting-notes
    - operational-checklist
    - risk-register
    - trip
  pillars:
    - name: Relationships & Friendship
      emoji: "🤝"
      description: "The people who make a life: a partner, close friends, wider circles and new connections, kept in good repair through attention, honest conversations, shared plans and the occasions worth marking."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Wedding Planning
          description: "Organising a wedding from engagement to the day: venue, guest list, suppliers, ceremony, timeline and budget, for couples of every size and style."
          projects:
            - name: Wedding vision and each partner's three priorities
              description: |-
                ## Purpose
                Couples often start booking things before agreeing what the day is for, then discover halfway through that one of them cares about the food and the other about the photographs. Each of you naming three priorities and three things you would happily drop gives every later decision a tiebreaker. Do it before the first venue visit, because venues are very good at selling a vision of their own.

                ## Milestones
                1. Each partner's three priorities and three happy-to-drop items written down separately, then compared.
                2. A one-paragraph description of the day agreed: size, feel, formality and setting.
                3. A short list of wedding traditions you both want to keep and ones you will skip.
                4. The vision saved where both of you can reread it before signing any contract.

                ## Notes
                Write your lists separately before comparing them, or the louder partner's list quietly becomes the joint one.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written one-paragraph wedding vision with each partner's three priorities and three droppable items, agreed by both."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your own three priorities and three droppable items without conferring"
                - "Swap lists over a coffee and mark where you overlap"
                - "Ask the agent to turn both lists into a one-paragraph wedding vision"
                - "Save the agreed vision at the top of your shared planning folder"
            - name: Total wedding budget and who is contributing
              description: |-
                ## Purpose
                Wedding costs grow by small yeses, and without a ceiling agreed at the start the total drifts upward one upgrade at a time. Fixing one number, with any family contributions confirmed in writing and any conditions attached to them spoken aloud, protects both the day and the relationship. Settle it before you request a single quote.

                ## Milestones
                1. A total ceiling agreed between the two of you, including a contingency of around ten percent.
                2. Every family contribution confirmed with an amount, a timing and any expectations attached.
                3. A monthly savings amount set if the total depends on money not yet saved.
                4. The budget figure written into the planning hub and shared with anyone who is contributing.

                ## Notes
                Ask contributors plainly whether their gift comes with expectations, such as guests they want invited. It is far easier to hear that now than in month eight.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A total wedding budget with contingency is agreed, every contribution is confirmed with amount and timing, and the figure is recorded in the hub."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what each of you could put in without borrowing"
                - "Ask each contributing family member for an amount and when it would arrive"
                - "Agree the total ceiling and a ten percent contingency"
                - "Move the agreed monthly amount into the wedding savings pot @recurring(monthly:2)"
            - name: Wedding budget tracker by category
              description: |-
                ## Purpose
                Once quotes arrive, a single total is not enough: you need to see that catering is already over its share while flowers are untouched. Splitting the ceiling into categories, recording every quote, deposit and balance, and reconciling once a month shows overspend while there is still time to trim elsewhere.

                ## Milestones
                1. A tracker with categories for venue, food and drink, attire, photography, music, flowers, stationery, transport and contingency.
                2. A target amount set for each category that adds up to the agreed ceiling.
                3. Every signed quote entered with deposit paid, balance due and due date.
                4. A running total that shows remaining contingency at a glance.

                ## Notes
                Typical wedding budgets put roughly half into venue and catering. If your priorities say otherwise, set the categories from your vision, not from an industry average.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A category tracker totalling the agreed ceiling exists, with every signed quote entered and reconciled at least monthly."
                cadence: rolling
              tasks:
                - "Set up a spreadsheet with one row per budget category"
                - "Allocate a target to each category from the agreed ceiling"
                - "Enter every quote, deposit and balance as soon as it is agreed"
                - "Reconcile the tracker against your bank statements @recurring(monthly:12)"
            - name: Shortlisting the wedding date and season
              description: |-
                ## Purpose
                Date drives price, venue availability, weather and who can come. A Saturday in peak summer can cost a third more than a Friday in early spring, and a date clashing with a sibling's due date or a key school holiday loses guests you care about. Choosing two or three candidate dates before contacting venues makes every enquiry faster.

                ## Milestones
                1. Dates to avoid listed: family events, religious festivals, exams, due dates and work peaks.
                2. Peak and off-peak pricing compared for at least two venues of the kind you want.
                3. Two or three candidate dates agreed in order of preference.
                4. The most important guests asked informally whether the leading date works.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three ranked candidate dates are recorded, each checked against a list of clashes and with key guests."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the family events and holidays any date must avoid"
                - "Compare a peak and an off-peak quote from two similar venues"
                - "Text the five guests you could not marry without about the leading dates"
                - "Agree your first, second and third choice dates"
            - name: First-draft guest list in three tiers
              description: |-
                ## Purpose
                Guest numbers set the size of the venue, the catering bill and most of the stress, yet many couples book a venue before counting. Building one list in three tiers (must invite, would like to invite, invite if space allows) gives you an honest number to take to venues and a ready answer when the list needs to shrink.

                ## Milestones
                1. One combined list with every name from both partners and any contributing parents.
                2. Each guest placed in tier one, two or three.
                3. Plus-ones and children counted separately from named guests.
                4. A headcount for each tier, so the venue search has a firm range.

                ## Notes
                Agree a rule before you start, such as no guest neither of you has spoken to in two years. Rules end arguments about individuals.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single tiered guest list exists with headcounts for each tier, including plus-ones and children counted separately."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree one or two rules for who makes the list"
                - "Each write every name you would invite in an ideal world"
                - "Merge both lists and any parents' requests into one sheet"
                - "Sort every name into tier one, two or three and total each tier"
            - name: Ceremony type and legal route
              description: |-
                ## Purpose
                Whether you marry in a civil ceremony, a religious one or with an independent celebrant decides who can marry you, where, and whether you need a separate legal signing. In many countries a celebrant-led or outdoor ceremony is not legally binding on its own. Knowing your legal route early stops you booking a venue that cannot host a legal marriage.

                ## Milestones
                1. The legal requirements in the country of the wedding checked with the local registration authority.
                2. A decision recorded: civil, religious, celebrant, or a celebrant ceremony plus a separate legal signing.
                3. The venues and officiants that fit that route identified.
                4. Any residency, notice or document requirements noted with their lead times.

                ## Notes
                Rules differ widely between countries and sometimes between regions. Confirm everything with the registration office or your faith leader, not with a venue or a blog.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The chosen ceremony type and legal route are recorded, with the authority's notice and document requirements and lead times written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the marriage requirements on the registration authority's website"
                - "Decide whether you want a civil, religious or celebrant ceremony"
                - "Ask whether your preferred route needs a separate legal signing"
                - "Write down every notice period and document the authority requires"
            - name: Master wedding timeline worked back from the date
              description: |-
                ## Purpose
                Every supplier has a lead time: popular photographers book a year out, dresses can take six months to arrive and legal notice has a fixed window. Working backwards from the date to set a month for each booking turns a fog of jobs into a schedule you can see falling behind. Without it, the last three months become a scramble.

                ## Milestones
                1. Every major booking listed with its usual lead time.
                2. A month-by-month timeline from now to the wedding with each booking slotted in.
                3. Legal notice, invitation and final-numbers dates marked as fixed points.
                4. The timeline reviewed and adjusted at least monthly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month-by-month timeline from install to wedding day exists with every major booking and fixed legal date placed on it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every supplier and job with its typical lead time"
                - "Count back from the wedding date and assign each one a month"
                - "Mark the legal notice and invitation dates as fixed"
                - "Move anything slipping to the top of the planning session agenda @recurring(monthly:8)"
            - name: Venue search, visits and booking
              description: |-
                ## Purpose
                The venue fixes the date, the capacity, the catering rules and roughly half the budget, so it is the decision every other booking waits for. Visiting three to five shortlisted venues with the same questions, then comparing like-for-like quotes, avoids falling for the first beautiful room. Popular venues book twelve to eighteen months ahead.

                ## Milestones
                1. A shortlist of three to five venues that fit your headcount, legal route and budget.
                2. Each shortlisted venue visited with the same question list.
                3. Like-for-like quotes compared for the same date and guest numbers.
                4. A venue booked, contract read and deposit paid.

                ## Notes
                Start from the **Purchase decision** template. Ask every venue about curfew, noise limits, exclusive use, preferred-supplier rules and what happens if they cancel.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A venue is booked with a signed contract and deposit receipt, chosen from at least three visited and compared options."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Shortlist five venues that hold your tier one and two headcount"
                - "Write one question list to take to every venue visit"
                - "Book visits to your top three on the same weekend if you can"
                - "Compare quotes for the same date and guest numbers side by side"
                - "Sign the contract and pay the deposit for the chosen venue"
            - name: Shared wedding planning hub
              description: |-
                ## Purpose
                Quotes in one partner's email, contracts in the other's downloads and guest addresses in a parent's notebook is how deposits get missed. One shared folder, one shared calendar and ideally one wedding email address mean either of you can answer a supplier question without asking the other first.

                ## Milestones
                1. A shared folder with subfolders for contracts, quotes, guests, legal and inspiration.
                2. A dedicated email address or label both partners can see.
                3. A shared calendar holding every visit, fitting, deadline and payment date.
                4. Every existing quote and contract moved into the hub.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared folder, shared calendar and wedding email address are set up, with every existing quote and contract filed in them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a shared folder with subfolders for contracts, quotes, guests and legal"
                - "Set up a wedding email address you can both read"
                - "Add a shared wedding calendar to both phones"
                - "Move every quote and contract you already have into the folder"
            - name: Planner, coordinator or doing it yourselves
              description: |-
                ## Purpose
                Hiring a full planner, booking an on-the-day coordinator and doing it all yourselves are three very different costs in money and hours. Couples who both work full time, are marrying abroad or have a large guest list often find a planner pays for themselves in supplier discounts and saved weekends. Deciding early matters, because a planner is most useful before the big bookings.

                ## Milestones
                1. An honest estimate of the hours you can each give each week until the wedding.
                2. Quotes from at least one full planner and one on-the-day coordinator.
                3. A decision recorded with the reason, and the help booked if you chose any.
                4. If you are doing it yourselves, one named person lined up to run the day itself.

                ## Notes
                Even couples who plan everything themselves usually benefit from someone other than the couple running the day. That person should not also be a guest you want relaxing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on planner, coordinator or self-planning, with any chosen help booked or a named day-of coordinator confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate the weekly hours each of you can spare until the wedding"
                - "Request quotes from one full planner and one on-the-day coordinator"
                - "Ask each what they would save you in supplier costs"
                - "Record your decision and the reason in the planning hub"
            - name: Weekly wedding planning session
              description: |-
                ## Purpose
                Wedding planning done in stray messages at 11pm is how two people end up booking two different florists. A fixed half-hour each week, with a short agenda, keeps decisions joint and stops planning from leaking into every other conversation. It also gives each of you a time to raise worries before they turn into rows.

                ## Milestones
                1. A fixed weekly slot agreed, with a thirty-minute limit.
                2. A standing agenda: timeline check, payments due, decisions needed, jobs for the week.
                3. Every session ending with each person holding named jobs.
                4. Four sessions in a row held on time.

                ## Notes
                Keep a hard stop. A session that runs to two hours every week becomes one neither of you wants to attend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly planning sessions are held within thirty minutes, each ending with named jobs written in the hub."
                cadence: rolling
              tasks:
                - "Pick a weekly time that suits you both and put it in the calendar"
                - "Write a four-item standing agenda in the planning hub"
                - "Hold the thirty-minute wedding planning session @recurring(weekly:sun)"
                - "End each session by writing who does what before next week"
            - name: Supplier contracts and payment due dates register
              description: |-
                ## Purpose
                Most weddings involve ten to fifteen suppliers, each with its own deposit, balance date, cancellation terms and final-numbers deadline. Missing one balance can cost the booking. One register with every supplier, every amount and every date, checked monthly, means nothing depends on someone remembering.

                ## Milestones
                1. Every booked supplier entered with contact, contract date and what is included.
                2. Deposit, balance amount and balance due date recorded for each.
                3. Cancellation and postponement terms summarised in a line each.
                4. All payment dates added to the shared calendar with a reminder a week before.

                ## Notes
                Start from the **Vendor** template for each supplier. Pay deposits by credit card where you can, as some card schemes offer extra protection if a business fails.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every booked supplier appears in one register with balance amount and due date, and no payment is missed before the wedding."
                cadence: rolling
              tasks:
                - "Create one record per booked supplier from the vendor template"
                - "Add each deposit and balance due date to the shared calendar"
                - "Check which balances and final-number deadlines fall due this month @recurring(monthly:5)"
                - "Chase any supplier who has not confirmed in writing @recurring(weekly:mon)"
            - name: Splitting wedding workstreams between you
              description: |-
                ## Purpose
                When both partners are vaguely responsible for everything, one usually ends up holding the mental load of the whole wedding. Dividing the work into named workstreams, each with one owner, makes the effort visible and lets each of you make smaller decisions without a meeting. Revisit the split monthly, since some months are much heavier than others.

                ## Milestones
                1. The wedding divided into six to ten workstreams, such as venue, guests, stationery, food, music and legal.
                2. One owner named for each, with the decisions they can make alone.
                3. A spending limit agreed below which an owner does not need to check in.
                4. A monthly check on whether the split still feels fair.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of workstreams, each with one owner and a solo spending limit, reviewed monthly until the wedding."
                cadence: rolling
              tasks:
                - "List every wedding workstream on one page"
                - "Take turns choosing workstreams until each has an owner"
                - "Agree the amount an owner can spend without checking in"
                - "Ask each other whether the workload split still feels fair @recurring(monthly:16)"
            - name: Guest address and RSVP database
              description: |-
                ## Purpose
                Save the dates, invitations, dietary needs, table plans and thank-you cards all draw on the same guest information. Keeping it in one sheet, with a row per guest and a column for each stage, saves retyping addresses five times and makes the final catering number trustworthy.

                ## Milestones
                1. One row per guest with postal address, email, household and tier.
                2. Columns for save the date sent, invitation sent, RSVP, meal choice, dietary needs and gift.
                3. Every RSVP logged within a week of arriving.
                4. A confirmed headcount and dietary list ready for the caterer's deadline.

                ## Notes
                Collect addresses with a short form sent to one person per household, rather than chasing each guest separately.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A guest database holds an address and RSVP status for every invited guest, producing a final headcount and dietary list by the caterer's deadline."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Turn the tiered guest list into a sheet with address and RSVP columns"
                - "Send one address form to each household"
                - "Log new RSVPs and meal choices and flag anyone still missing @recurring(weekly:wed)"
                - "Export the final headcount and dietary list for the caterer"
            - name: Keeping families informed without planning by committee
              description: |-
                ## Purpose
                Parents and close relatives often feel left out when they hear wedding news second-hand, and then compensate by weighing in on everything. A regular short update, and a clear list of the decisions where their views are welcome, keeps goodwill high while the two of you keep the final say.

                ## Milestones
                1. A list agreed between you of decisions families are consulted on and decisions that are yours alone.
                2. That list shared kindly with each set of parents.
                3. A monthly update sent to both families at the same time, with the same news.
                4. Each family given one or two meaningful jobs of their own.

                ## Notes
                Send the same update to both families on the same day. Uneven news is one of the commonest sources of wedding friction.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A consult-or-decide list is shared with both families, and a monthly update reaches both on the same day until the wedding."
                cadence: rolling
              tasks:
                - "Agree which wedding decisions families will be consulted on"
                - "Tell each set of parents about the list in person or on a call"
                - "Ask the agent to draft this month's family update from the planning notes"
                - "Send the wedding update to both families on the same day @recurring(monthly:20)"
            - name: Wedding website and guest information page
              description: |-
                ## Purpose
                Guests ask the same twenty questions: parking, dress code, children, gifts, the nearest hotel, whether the ceremony is outdoors. A simple website or shared page answering them once saves dozens of messages in the final month and gives you somewhere to point people when plans change.

                ## Milestones
                1. A page live with date, venue, timings, dress code and travel information.
                2. A frequently asked questions section covering children, plus-ones, gifts and accessibility.
                3. An online RSVP or a clear way to reply linked from the invitation.
                4. The page updated whenever a detail changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A guest information page is live with timings, travel, dress code and an FAQ, linked from the invitation and kept current."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose a free wedding website builder or a simple shared page"
                - "Ask the agent to draft FAQ answers from your venue and travel notes"
                - "Publish the page with date, venue, timings and dress code"
                - "Check the page against the latest plans and correct anything stale @recurring(monthly:24)"
            - name: Gift log and thank-you notes
              description: |-
                ## Purpose
                Gifts arrive before, on and after the day, often with cards that get separated from the presents. Logging each one as it arrives, with who sent it and what it was, makes thank-you notes specific rather than generic, and a weekly batch keeps them from piling into an overwhelming stack after the honeymoon.

                ## Milestones
                1. A gift column in the guest database recording item, giver and date received.
                2. A stock of cards and stamps ready before the wedding.
                3. Thank-you notes sent within six to eight weeks of receiving each gift.
                4. Every gift on the log marked as thanked.

                ## Notes
                Name the gift and say how you will use it. A specific line of thanks means more than a page of general gratitude.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every gift is logged with giver and item, and each has a handwritten or personal thank-you sent within eight weeks."
                cadence: rolling
              tasks:
                - "Add gift, giver and date received columns to the guest database"
                - "Buy thank-you cards and stamps before the wedding"
                - "Log new gifts and write that week's thank-you notes @recurring(weekly:sat)"
                - "Mark each gift as thanked once the note is posted"
            - name: Wedding-free evenings and stress check-ins
              description: |-
                ## Purpose
                Months of supplier calls and family opinions can turn a couple into project managers who only talk about seating plans. Protecting one evening a week where the wedding is off limits, and checking monthly how each of you is coping, keeps the relationship you are celebrating in good shape while the planning runs.

                ## Milestones
                1. One evening a week agreed as wedding-free, with a signal for when either of you forgets.
                2. A monthly ten-minute check on sleep, stress and anything that is bothering either of you.
                3. At least one thing outside the wedding planned each month.
                4. Any recurring argument about the wedding raised in the check-in rather than in the moment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly wedding-free evening is kept for at least eight weeks in a row, with a monthly stress check-in held alongside."
                cadence: rolling
              tasks:
                - "Choose the evening each week that will be wedding-free"
                - "Agree a light signal either of you can use when wedding talk creeps in"
                - "Keep this evening free of any wedding planning @recurring(weekly:tue)"
                - "Ask each other how the planning is affecting sleep and mood @recurring(monthly:28)"
            - name: Reading wedding supplier contracts before signing
              description: |-
                ## Purpose
                Wedding contracts are written by suppliers to protect suppliers, and the expensive surprises hide in cancellation, postponement and overtime clauses. Learning which six or seven clauses to read every time, and asking for changes before signing, costs an hour per contract and can save the whole deposit if plans change.

                ## Milestones
                1. A checklist of clauses to read: deposit refundability, cancellation by either side, postponement, overtime, substitutions, insurance and force majeure.
                2. Every contract read against the checklist before signing.
                3. Any unclear clause questioned in writing and the reply filed.
                4. Signed copies of every contract stored in the planning hub.

                ## Notes
                This is about knowing what to ask, not legal advice. For a large or unusual contract, a short review by a consumer advice service or a solicitor may be worth the fee.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every supplier contract has been checked against a written clause checklist before signing, with any queries answered in writing and filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a clause checklist covering deposits, cancellation, postponement and overtime"
                - "Ask the agent to summarise the venue contract's cancellation terms in plain English"
                - "Email the supplier any question the checklist raises before signing"
                - "File each signed contract and the replies in the planning hub"
            - name: Spotting hidden costs in wedding quotes
              description: |-
                ## Purpose
                A venue quote that looks cheaper can end up dearer once service charge, corkage, cake-cutting fees, overtime past midnight and tax are added. Learning where wedding quotes hide costs, and asking every supplier for an all-in figure, means you compare real totals instead of headline prices.

                ## Milestones
                1. A list of common add-ons: service charge, tax, corkage, cake cutting, setup fees, travel, overtime and delivery.
                2. Every quote requested as an all-in figure for your actual headcount and timings.
                3. Two competing quotes compared on total cost, not headline price.
                4. Any add-on you did not expect challenged or negotiated before booking.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two competing quotes in one category are compared on an all-in total, with every add-on listed and questioned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a list of the add-on charges wedding suppliers commonly add"
                - "Ask each supplier for an all-in quote for your headcount and hours"
                - "Lay two competing quotes side by side and total every line"
                - "Question any charge you did not see in the first quote"
            - name: Invitation etiquette, plus-ones and children policy
              description: |-
                ## Purpose
                Most guest-list arguments are about policy rather than people: who gets a plus-one, whether children come, how the evening-only invitations are worded. Deciding the rules once, writing them down and applying them consistently is kinder than case-by-case exceptions that guests will compare.

                ## Milestones
                1. A plus-one rule agreed, such as for married, engaged or long-term partners only.
                2. A children policy agreed, with any exceptions named (for example, nieces and nephews).
                3. Wording drafted for invitations that makes the policy clear without apology.
                4. A short, warm reply ready for anyone who asks for an exception.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written plus-one and children policies are agreed and reflected in the invitation wording, with a prepared reply for exception requests."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree who gets a plus-one and write the rule down"
                - "Decide whether children are invited and list any exceptions"
                - "Draft invitation wording that makes both policies clear"
                - "Write a two-line reply for guests who ask for an exception"
            - name: Writing your own vows
              description: |-
                ## Purpose
                Personal vows are often the most remembered part of the ceremony and the most left until the night before. Agreeing the length and tone together, then drafting privately over a few weeks, gives you time to say something true in about two minutes without one partner reading a page while the other says three lines.

                ## Milestones
                1. A shared agreement on length, tone and whether you will read them to each other first.
                2. Your officiant's requirements checked, as some ceremonies need set legal words as well.
                3. A first draft written and left alone for a week.
                4. A final version read aloud, timed at around one to two minutes, and copied onto a card.

                ## Notes
                Write them yourself. Promises with a concrete detail (the way they make tea, the night you met) carry more than general declarations.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Final vows of one to two minutes are written on a card, read aloud at least three times and checked against the officiant's requirements."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree with your partner on the length and tone of your vows"
                - "Ask the officiant which legal words must be included"
                - "Write a rough first draft in one sitting and leave it for a week"
                - "Read the final version aloud and time it"
            - name: First dance lessons and practice
              description: |-
                ## Purpose
                Three minutes in front of everyone you know is long enough to feel awkward if you have never practised. A few lessons, or a short routine learnt from a video, plus regular practice in the shoes you will wear, makes the first dance something you enjoy rather than endure.

                ## Milestones
                1. A song chosen and, if needed, edited down to around two and a half minutes.
                2. Two to four lessons booked or a routine chosen to learn at home.
                3. The routine practised weekly for at least six weeks before the day.
                4. One full run-through in the wedding shoes and outfit, or something close.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The first dance is practised at least six times in the weeks before the wedding, including once in the wedding shoes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose your first dance song and decide whether to shorten it"
                - "Book a short course of lessons or pick a routine to learn from video"
                - "Practise the first dance routine at home for twenty minutes @recurring(weekly:thu)"
                - "Do one run-through in the shoes you will wear on the day"
            - name: Briefing the photographer with a shot list
              description: |-
                ## Purpose
                Photographers are good at the day but cannot know that your grandmother is travelling from abroad or that the two families have never been photographed together. A one-page brief with a short list of must-have group shots and a named person to gather each group keeps photos to thirty minutes and makes sure nobody important is missed.

                ## Milestones
                1. A list of no more than ten to twelve group photographs, in the order they will be taken.
                2. A named helper from each family who knows everyone in the groups.
                3. Notes on sensitivities, such as divorced parents or people who must not be grouped together.
                4. The brief sent to the photographer at least two weeks before the day.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page photo brief with at most twelve group shots, named helpers and sensitivities is with the photographer two weeks before the wedding."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the group photographs you could not do without"
                - "Cut the list to twelve and put them in a sensible order"
                - "Ask one relative from each side to gather people for the groups"
                - "Send the brief and any family sensitivities to the photographer"
            - name: Choosing the photographer and videographer
              description: |-
                ## Purpose
                Photographs are what remains after the day, and the best photographers in any area are often booked a year or more ahead. Comparing full galleries rather than highlight reels, and meeting the person who will actually shoot, shows whether their style and manner suit you. Decide early whether video matters, since it doubles the budget line.

                ## Milestones
                1. A shortlist of three photographers whose style matches your vision.
                2. At least one full wedding gallery viewed from each, not just their best shots.
                3. A call or meeting held with the person who will shoot on the day.
                4. A photographer, and a videographer if wanted, booked with contract signed.

                ## Notes
                Ask how many hours are included, when you will receive the images and how many edited photos to expect.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A photographer is booked with a signed contract after full galleries from at least three were compared, and a recorded decision on video."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three photographers whose work matches your vision"
                - "Ask each for one complete wedding gallery to look through"
                - "Arrange a call with the person who would actually shoot your day"
                - "Decide whether video is worth the extra cost and record why"
            - name: Catering, menu tasting and dietary needs
              description: |-
                ## Purpose
                Food and drink is usually the largest single line after the venue, and the meal is what most guests talk about afterwards. Choosing between a sit-down meal, sharing platters or a buffet, tasting before committing and collecting dietary needs early means nobody with an allergy is served a guess.

                ## Milestones
                1. A service style chosen: plated, family-style sharing, buffet, food trucks or canapés only.
                2. A tasting attended and the menu agreed, including a vegetarian and a vegan option.
                3. Drinks plan set: what is included, how long the bar is free and corkage if relevant.
                4. Every guest's dietary needs and allergies passed to the caterer by their deadline.

                ## Notes
                Ask the caterer how they label and serve allergen-free plates. A list handed over on the day is not enough for a serious allergy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A menu and drinks plan are agreed in writing after a tasting, and a full dietary and allergy list is with the caterer by their deadline."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Decide which service style suits your venue and budget"
                - "Book a tasting with the caterer or venue kitchen"
                - "Agree the drinks package and how long the bar runs"
                - "Send the caterer the full dietary and allergy list from the guest database"
            - name: Wedding outfits, fittings and hair and make-up trial
              description: |-
                ## Purpose
                Made-to-order wedding dresses can take four to eight months to arrive, and tailoring needs two or three fittings after that. Planning backwards from the date, and booking a hair and make-up trial at least two months before, avoids paying rush fees or settling for whatever is in stock.

                ## Milestones
                1. A budget and style direction set for each partner's outfit.
                2. Outfits ordered or bought with the delivery date confirmed.
                3. Fittings booked, with the final one about two weeks before the wedding.
                4. A hair and make-up trial done and the artist booked for the day, if wanted.

                ## Notes
                Start from the **Purchase decision** template for each outfit. Bring the actual shoes and underwear to every fitting.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both outfits are ordered with confirmed delivery dates, fittings are booked and any hair and make-up trial has been completed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set a budget for each outfit, including alterations and accessories"
                - "Ask each shop for the order-to-delivery time before trying anything on"
                - "Book fittings so the last one falls two weeks before the wedding"
                - "Book a hair and make-up trial about two months before the day"
            - name: Music for the ceremony, drinks and evening
              description: |-
                ## Purpose
                Music sets the pace of the day in three distinct parts, and each needs a different answer: a string trio or a playlist for the ceremony, something light for drinks, a band or DJ for dancing. Deciding what matters in each part avoids paying for a full band to play through dinner when a speaker would do.

                ## Milestones
                1. A decision for each part of the day: live, DJ or playlist.
                2. Ceremony entrance, signing and exit tracks chosen.
                3. Any live musicians or DJ booked, with set times and the venue's noise limits checked.
                4. A must-play and do-not-play list sent to the DJ or band.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Music is settled for ceremony, drinks and evening, with any performers booked and a must-play and do-not-play list sent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide live, DJ or playlist for the ceremony, drinks and evening"
                - "Choose the entrance, signing and exit tracks for the ceremony"
                - "Check the venue's noise limit before booking any band"
                - "Send a must-play and do-not-play list to the DJ or band"
            - name: Flowers and decor that move from ceremony to reception
              description: |-
                ## Purpose
                Flowers and decorations are easy to overspend on because each piece looks small. Designing them so ceremony arrangements are carried through to the reception, and spending on a few places guests actually look (the ceremony backdrop, the top table, the entrance), gives a full look for a fraction of the cost.

                ## Milestones
                1. A colour palette and three or four reference images agreed.
                2. A list of where flowers and decor are needed, ranked by how much guests will see them.
                3. A florist quote that reuses ceremony pieces at the reception.
                4. A named person or the florist responsible for moving pieces between spaces.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A florist is booked against a ranked decor list that reuses ceremony pieces at the reception, with someone named to move them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree a colour palette and choose four reference pictures"
                - "List every spot that needs flowers and rank them by visibility"
                - "Ask two florists to quote with ceremony pieces reused at the reception"
                - "Name who moves the arrangements between ceremony and reception"
            - name: Guest accommodation and transport plan
              description: |-
                ## Purpose
                Guests travelling any distance need a bed and a safe way home, and a rural venue at midnight can leave people stranded. Reserving a block of rooms nearby, arranging a late shuttle or taxi list, and putting it all on the guest page turns a common worry into a solved problem.

                ## Milestones
                1. Nearby accommodation at two or three price points identified.
                2. A room block or discount code arranged where hotels offer one.
                3. A plan for getting guests from ceremony to reception and home at the end of the night.
                4. All of it published on the guest information page.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Accommodation options at three price points and an end-of-night transport plan are arranged and published for guests."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three places to stay near the venue at different prices"
                - "Ask the nearest hotel about a room block or discount code"
                - "Book a late shuttle or collect local taxi numbers for the end of the night"
                - "Add the accommodation and transport details to the guest page"
            - name: Wedding insurance and cancellation cover
              description: |-
                ## Purpose
                Venues close, suppliers go out of business and illness happens, and most wedding contracts leave the couple carrying that risk. Wedding insurance can cover lost deposits, damaged outfits and supplier failure, but policies differ widely in what they exclude. Buying soon after the first big deposit means the cover protects the money already paid.

                ## Milestones
                1. Total deposits already paid and due added up.
                2. Two or three policies compared on cancellation, supplier failure, attire and liability.
                3. Exclusions read, especially for illness, weather and pre-existing conditions.
                4. A policy bought, or a written decision not to, with the reason.

                ## Notes
                Check whether your venue requires public liability cover for the event. Some do, and some home insurance policies already include parts of it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A wedding insurance policy is bought, or a reasoned decision not to is recorded, after comparing at least two policies on the same cover."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up the deposits paid and still to pay"
                - "Compare two or three wedding insurance policies on the same cover"
                - "Read each policy's exclusions for illness, weather and supplier failure"
                - "Buy a policy or record why you chose not to"
            - name: Ceremony script, readings and who reads them
              description: |-
                ## Purpose
                The ceremony is often only twenty to forty minutes, yet couples spend far less time on it than on the reception. Working through the order of service with your officiant, choosing readings that mean something and asking readers early gives the legal heart of the day the attention it deserves.

                ## Milestones
                1. A meeting with the officiant to agree the structure and any required wording.
                2. Readings, music cues and any rituals placed in an order of service.
                3. Readers asked at least two months ahead and sent their text.
                4. A final order of service approved by the officiant and printed if needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A final order of service, approved by the officiant, names each reading and reader, and every reader has their text two months before."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Book a planning meeting with your officiant or celebrant"
                - "Shortlist three readings and choose two together"
                - "Ask your readers and send them their text"
                - "Send the draft order of service to the officiant for approval"
            - name: Giving legal notice and gathering marriage documents
              description: |-
                ## Purpose
                Most legal systems require formal notice of a marriage within a fixed window before the ceremony, with original documents such as passports, birth certificates and proof of address, and sometimes a decree absolute or death certificate from a previous marriage. Missing the window can mean the ceremony goes ahead without being legal. Book the appointment as soon as the date and venue are fixed.

                ## Milestones
                1. The notice window and required documents confirmed with the registration authority.
                2. Originals or certified copies of every document gathered for both partners.
                3. Any translations or apostilles arranged for documents from another country.
                4. Notice given or the licence issued, with the receipt filed in the hub.

                ## Notes
                Some offices have waiting lists for notice appointments. Check the earliest and latest dates you are allowed to give notice and book in that window straight away.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Legal notice is given, or the licence issued, inside the authority's window, with every required document presented and the receipt filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the notice window and document list with the registration authority"
                - "Find both partners' passports, birth certificates and proof of address"
                - "Order any certified copies or translations you are missing"
                - "Book the notice appointment for the earliest permitted date"
            - name: Save the dates and invitations sent on time
              description: |-
                ## Purpose
                Guests need around six to twelve months' notice for a wedding involving travel, and formal invitations usually go out eight to twelve weeks before. Getting both out on schedule, with an RSVP date that sits comfortably before the caterer's deadline, protects the headcount every supplier is waiting on.

                ## Milestones
                1. Save the dates sent to every tier one and two guest.
                2. Invitation design and wording approved, with printed or digital chosen.
                3. Invitations sent with an RSVP date at least two weeks before final numbers are due.
                4. Every invitation marked as sent in the guest database.

                ## Notes
                Proofread names twice. A misspelt surname on a printed invitation is the error guests remember.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Save the dates and invitations have gone to every invited guest, with an RSVP date set two weeks before the caterer's final-numbers deadline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose printed or digital save the dates and invitations"
                - "Send save the dates to all tier one and two guests"
                - "Set the RSVP date two weeks before the caterer's final-numbers deadline"
                - "Proofread every name and address before the invitations go out"
            - name: Final numbers and timings confirmed with suppliers
              description: |-
                ## Purpose
                Four to six weeks before the wedding, each supplier needs final numbers, arrival times and a contact for the day. Holding one final details meeting with the venue and sending every supplier the same timings means the caterer, photographer and band are all working from one plan rather than three versions.

                ## Milestones
                1. Final guest numbers and dietary list confirmed to the caterer and venue.
                2. A final details meeting held with the venue, with notes taken.
                3. Every supplier sent their arrival time, set-up location and a day-of contact.
                4. All final balances paid or scheduled.

                ## Notes
                Start from the **Meeting notes** template for the final details meeting, and send the notes back to the venue to confirm.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every supplier has confirmed in writing their final numbers, arrival time and day-of contact at least three weeks before the wedding."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book the final details meeting with the venue"
                - "Confirm the final headcount and dietary list in writing"
                - "Send every supplier their arrival time and day-of contact"
                - "Pay or schedule every remaining balance"
            - name: Wedding day running order
              description: |-
                ## Purpose
                On the day, the couple should not be the people answering questions about when the speeches start. A minute-by-minute running order, with who is responsible for each moment and every supplier's phone number, lets a coordinator or trusted friend run the day while you enjoy it.

                ## Milestones
                1. A running order from morning preparations to the last guest leaving, with times.
                2. A named person against each moment: ushers, readers, speeches, cake, first dance.
                3. A contact sheet with every supplier's mobile number.
                4. Copies sent to the coordinator, venue, photographer and key family a week before.

                ## Notes
                Start from the **Operational checklist** template. Build in fifteen minutes of slack after the ceremony and after photographs, as both always run late.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A timed running order with an owner per moment and a supplier contact sheet is with the coordinator, venue and photographer a week before."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a running order from your ceremony and reception times"
                - "Put a named person against every moment of the day"
                - "Add a contact sheet with every supplier's mobile number"
                - "Send the final running order to the coordinator, venue and photographer"
            - name: Rehearsal and the day before
              description: |-
                ## Purpose
                A short rehearsal shows the wedding party where to stand, who walks when and how long the aisle really is. Planning the day before, with venue set-up, deliveries and an early night, means the wedding morning starts calm rather than with a missing box of place cards.

                ## Milestones
                1. A rehearsal held with the officiant and wedding party, if the venue allows.
                2. Every item that needs delivering to the venue packed and labelled.
                3. Rings, documents, payments in envelopes and speeches handed to the people responsible.
                4. An emergency kit packed with essentials such as a sewing kit, plasters, painkillers and phone chargers.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The rehearsal has taken place, every item for the venue is delivered and the rings and documents are with their named holders the day before."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the venue and officiant for a rehearsal time"
                - "Pack and label every box going to the venue"
                - "Hand the rings and documents to the people holding them"
                - "Pack a small emergency kit for the day"
            - name: Wet-weather and contingency plan
              description: |-
                ## Purpose
                Rain, a sick supplier, a delayed train or a late cake all happen at weddings, and the difference is whether anyone has already decided what to do. Listing the ten likeliest problems, with a plan and an owner for each, means a coordinator can fix most of them without the couple ever hearing.

                ## Milestones
                1. The ten likeliest problems listed, from rain to a supplier no-show.
                2. A fallback and an owner for each one.
                3. An indoor or covered option confirmed with the venue for any outdoor element.
                4. The plan shared with the coordinator and venue manager.

                ## Notes
                Start from the **Risk register** template. Decide the weather call time with the venue, so nobody is debating it at noon.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written contingency plan covers at least ten risks, each with a fallback and owner, and is with the coordinator and venue."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ten things most likely to go wrong on the day"
                - "Write a fallback and an owner next to each one"
                - "Agree the wet-weather plan and decision time with the venue"
                - "Send the plan to the coordinator and venue manager"
            - name: Honeymoon plan
              description: |-
                ## Purpose
                Honeymoons often get planned last, when good flights have gone and the budget has been eaten by the wedding. Deciding early whether to leave straight away or take a mini-moon and travel later, and booking with the names on your passports at the time of travel, avoids an expensive surprise at the airport.

                ## Milestones
                1. A choice made between leaving straight away, a short trip, or a later honeymoon.
                2. A budget set and a destination agreed.
                3. Travel booked with names matching the passports you will travel on.
                4. Passports, any visas and travel insurance checked as valid for the dates.

                ## Notes
                Start from the **Trip** template. Book in the names on your current passports; changing a name can wait until after you are home.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A honeymoon or mini-moon is booked within budget, with tickets matching passport names and travel insurance in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Decide whether to leave straight after the wedding or travel later"
                - "Agree a honeymoon budget and a shortlist of destinations"
                - "Book travel in the names on your current passports"
                - "Check passport expiry dates, visas and travel insurance"
            - name: After the wedding wrap-up
              description: |-
                ## Purpose
                The week after the wedding has its own list: hired items to return, final invoices, deposits to recover, the outfit to clean and the legal certificate to collect. Doing it in one planned sweep, before the honeymoon if possible, stops late fees and lost deposits, and gives suppliers who did well the review they deserve.

                ## Milestones
                1. Every hired item returned and every refundable deposit recovered.
                2. Final invoices paid and the budget tracker closed with a final total.
                3. Copies of the marriage certificate ordered.
                4. Any name change decision made and a list of documents to update written.
                5. Short reviews left for suppliers you would recommend.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All hired items are returned, refundable deposits recovered, the budget tracker closed and marriage certificate copies ordered within a month of the wedding."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every hired item and who returns it by when"
                - "Order extra copies of the marriage certificate"
                - "Ask the agent to list the documents and accounts to update after any name change"
                - "Close the budget tracker with the final total spent"
            - name: Micro wedding or elopement plan
              description: |-
                ## Purpose
                Some couples want the commitment without the production: twelve guests and a long lunch, or just the two of you and two witnesses on a hillside. A small wedding still has legal steps and a few key bookings, and often a later party for the people who were not there. Planning both together stops anyone feeling left out.

                ## Milestones
                1. The legal minimum confirmed: officiant, witnesses and notice.
                2. A location and date booked for the ceremony.
                3. A photographer or trusted friend booked to record it.
                4. A plan for telling family and, if wanted, a later celebration for the wider circle.

                ## Notes
                Tell the people closest to you before the photographs go online. Finding out from social media hurts more than not being invited.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A small ceremony or elopement is booked with officiant, witnesses and photographer, and a plan for telling family is written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the legal minimum for a small ceremony where you want to marry"
                - "Choose your two witnesses and ask them"
                - "Book an elopement photographer or ask a friend who shoots well"
                - "Decide who you tell before and who you tell after"
            - name: Destination wedding abroad
              description: |-
                ## Purpose
                Marrying abroad adds residency rules, translated documents, local suppliers you may never meet before the day, and guests paying hundreds for travel. Many couples marry legally at home and hold the ceremony abroad to avoid foreign paperwork. Giving guests a year's notice and a realistic cost estimate shows you know what you are asking of them.

                ## Milestones
                1. A decision on whether to marry legally abroad or at home with a symbolic ceremony abroad.
                2. A local planner or venue coordinator booked who speaks your language.
                3. Guests given a year's notice with an honest estimate of travel and accommodation cost.
                4. Each guest's travel bookings tracked so the final numbers are reliable.

                ## Notes
                Start from the **Trip** template for your own travel. Check whether your home country recognises a marriage performed in the destination.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The legal route abroad or at home is decided, a local coordinator is booked and guests have a year's notice with a cost estimate."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check the destination's legal requirements for foreign couples"
                - "Decide whether to marry legally at home and celebrate abroad"
                - "Send guests a cost estimate with the save the date"
                - "Check which guests have booked travel and flag gaps @recurring(monthly:14)"
            - name: Second wedding or blended family with children
              description: |-
                ## Purpose
                When one or both of you have children, the wedding is also the start of a new family, and children can feel anything from thrilled to displaced. Giving them a real, age-appropriate role, telling them plans before other people, and thinking about how former partners will hear the news, keeps the day about joining rather than replacing.

                ## Milestones
                1. Each child told about the wedding before the wider family, in a way that suits their age.
                2. A role offered to each child that they are comfortable with, with no pressure to accept.
                3. Childcare and a quiet space arranged for younger children during the day.
                4. Any co-parenting arrangements around the wedding date agreed with former partners.

                ## Notes
                If you were married before, check what documents from that marriage the registration authority needs. It is a common cause of delay.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every child has been told first and offered a role, childcare for the day is arranged and the date is agreed with any co-parents."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Plan how and when to tell each child about the wedding"
                - "Ask each child whether they would like a role and which one"
                - "Agree the wedding weekend with any co-parents in writing"
                - "Ask the children how they are feeling about the wedding @recurring(monthly:10)"
            - name: Bringing two cultures or faiths into one wedding
              description: |-
                ## Purpose
                Couples from different cultures or faiths often face two sets of expectations about the ceremony, food, dress, length and who must be there. Some hold two ceremonies, some blend traditions into one, and some choose a neutral civil ceremony with cultural elements at the reception. Talking it through with both families early prevents one tradition quietly dominating.

                ## Milestones
                1. The traditions that matter most to each partner and each family listed.
                2. A format chosen: two ceremonies, one blended ceremony or a civil ceremony with cultural elements.
                3. Officiants or elders from each tradition consulted on what is possible.
                4. A short explanation of unfamiliar traditions written for guests.

                ## Notes
                Ask each family which one or two elements they would be truly hurt to lose. That shorter list is easier to honour than everything.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen ceremony format includes the elements each family named as essential, agreed with an officiant or elder from each tradition."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Each list the wedding traditions you grew up with that matter to you"
                - "Ask each family which one or two elements they would hate to lose"
                - "Meet an officiant or elder from each tradition to discuss options"
                - "Write a short guide to the traditions for guests"
            - name: Wedding on a small fixed budget
              description: |-
                ## Purpose
                Beautiful weddings do not need an average-wedding budget, but they do need ruthless choices. Fixing a per-guest cost, choosing a weekday or off-season date, and spending only on the vision's top three priorities lets couples marry well on a fraction of what wedding magazines suggest, without starting married life in debt.

                ## Milestones
                1. A per-guest figure set from the total budget and headcount.
                2. Off-peak date, weekday or lunchtime options priced against a Saturday evening.
                3. Every line outside the top three priorities cut, borrowed or done by friends.
                4. Total spending within the fixed budget, with no borrowing.

                ## Notes
                Gifts of skill from friends (baking, photography, music) work best with a clear brief and a backup. Be specific about what you are asking for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The wedding is planned within a fixed total with a set per-guest cost, every non-priority line cut or covered, and nothing borrowed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Divide the budget by the headcount to set a per-guest limit"
                - "Price a weekday or lunchtime option against a Saturday evening"
                - "Strike or borrow every item outside your top three priorities"
                - "Check every new quote against the per-guest limit @recurring(monthly:18)"
            - name: Accessible wedding for older and disabled guests
              description: |-
                ## Purpose
                Grandparents, guests using wheelchairs, people with hearing loss and guests who are neurodivergent can all have a hard day at a wedding designed without them. Checking step-free access, seating, toilets, sound and quiet space at the venue, and asking guests what they need, means everyone you invited can actually take part.

                ## Milestones
                1. Venue checked for step-free routes, accessible toilets, parking and seating.
                2. An access needs question added to the RSVP.
                3. Arrangements made for each need raised, such as reserved seats, a hearing loop or a quiet room.
                4. A named person ready to help any guest who needs it on the day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The venue is checked for step-free access and accessible toilets, and every access need raised on the RSVP has a recorded arrangement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk the venue route from car park to toilets checking for steps"
                - "Add an access needs question to the RSVP form"
                - "Reserve seats near the front and an exit for guests who need them"
                - "Name a person to look after guests with access needs on the day"
            - name: Same-sex wedding with inclusive suppliers
              description: |-
                ## Purpose
                Same-sex couples still meet suppliers whose forms say bride and groom, or whose welcome cools on the phone. Checking suppliers' past work and asking directly about inclusivity before paying a deposit avoids that, and choosing which traditions to keep, rework or drop makes the ceremony fit the two of you rather than a template.

                ## Milestones
                1. Each shortlisted supplier checked for past same-sex weddings or explicit inclusive policies.
                2. Contracts and forms using your names and the right terms.
                3. Decisions made on who walks in, who stands where, speeches and any traditional roles.
                4. Any relatives who may be unsupportive considered, with a plan for the day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every booked supplier has confirmed experience or an inclusive policy, and choices on processional, roles and speeches are written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each shortlisted supplier about past same-sex weddings"
                - "Check every contract and form uses your names and the right terms"
                - "Decide how you will each enter and who stands with you"
                - "Agree how to handle any relative who may be unsupportive on the day"
            - name: Dry-hire venue or marquee wedding production
              description: |-
                ## Purpose
                Fields, barns and family gardens give total freedom and total responsibility: power, water, toilets, lighting, waste, licensing, parking and insurance all become yours. Treating it as a small event production, with a site plan and a supplier for every service, is what separates a magical marquee from a muddy one.

                ## Milestones
                1. A site plan showing marquee, kitchen tent, toilets, generator, parking and access routes.
                2. Every service booked: marquee, power, water, toilets, lighting, furniture and waste.
                3. Any licence for alcohol, music or temporary structures checked with the local authority.
                4. Public liability insurance in place and a named site manager for the day.

                ## Notes
                Ask the marquee company for their wind limit and plan. A marquee that has to come down in a storm takes the whole day with it.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A site plan exists, every service from power to waste is booked, licensing is checked and a site manager is named for the day."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Sketch a site plan with marquee, toilets, generator and parking"
                - "List every service a dry-hire site needs and assign a supplier"
                - "Ask the local authority which licences your event requires"
                - "Name a site manager who is not one of the couple"
            - name: Multi-day wedding weekend programme
              description: |-
                ## Purpose
                When guests travel far, a single day can feel like a lot of effort for a few hours together, so many couples add welcome drinks the evening before and a relaxed brunch the morning after. Each extra event needs its own venue, budget and guest list, and a clear programme so guests know what is optional.

                ## Milestones
                1. A programme of events across the weekend, each marked open or invitation only.
                2. A venue, budget and host named for each additional event.
                3. The programme published on the guest page with dress code and timings.
                4. Low-effort events kept low-effort, with no new suppliers added late.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A published weekend programme lists each event with venue, timing and who is invited, and each extra event has a host and budget."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Decide which extra events the weekend will include"
                - "Set a budget and name a host for each extra event"
                - "Book a casual venue for welcome drinks or the morning-after brunch"
                - "Publish the weekend programme on the guest information page"
            - name: Low-waste wedding plan
              description: |-
                ## Purpose
                A large wedding can generate a skip of single-use decor, leftover food and outfits worn once. Choosing hired or second-hand items, seasonal and local food, digital stationery and a plan for leftovers cuts waste and often cost, provided the plan is made at booking stage rather than the week before.

                ## Milestones
                1. The main sources of waste identified: decor, flowers, food, favours, stationery and attire.
                2. A lower-waste choice made for each, such as hired decor or potted plants.
                3. Food leftovers agreed with the caterer, including any donation or take-home plan.
                4. Suppliers briefed on the plan and their own waste practices checked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lower-waste choice is recorded for each main waste source, and the caterer has agreed a plan for leftover food."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every item at the wedding that would be thrown away afterwards"
                - "Choose a hired, second-hand or reusable option for the biggest items"
                - "Agree a leftover food plan with the caterer"
                - "Ask each supplier how they handle their own waste"
---

# Wedding Planning

This area is for couples organising a wedding of any size, from a twelve-person registry office lunch to a three-day celebration, and for whoever is helping them carry the load. It starts with the foundations (a shared vision, the budget, the date, the guest list, the legal route, the venue and the master timeline), then the routines that keep suppliers, payments, RSVPs and families in order, the skills that make the ceremony and the day better, the supplier decisions, the dated milestones from legal notice to the honeymoon, versions for elopements, destination weddings, blended families, two cultures, tight budgets and same-sex couples, and finally the specialist work of a dry-hire venue, a wedding weekend or a low-waste plan.

What repeats is a Sunday planning session, a monthly budget reconciliation on the 12th, a payment due-date check on the 5th, a Wednesday RSVP sweep, a Saturday gift log, a protected wedding-free evening each week and a monthly update to both families. The Purchase decision, Vendor, Meeting notes, Operational checklist, Risk register and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
