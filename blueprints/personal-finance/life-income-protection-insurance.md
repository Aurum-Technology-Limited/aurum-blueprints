---
id: personal-finance.life-income-protection-insurance
name: Life & Income Protection Insurance
description: "A cover figure built from your dependants' real needs, the right mix of life, critical illness and income protection, policies written in trust and a yearly review that keeps cover in step with family life."
category: personal
version: 1.0.0
tags: [personal-finance, life-income-protection-insurance, parent, everyone, life-insurance, income-protection, critical-illness, dependants]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - risk-register
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Life & Income Protection Insurance
          description: "Choosing life insurance, critical illness and income protection cover to protect dependants if illness or death strikes."
          projects:
            - name: Map of who depends on your income
              description: |-
                ## Purpose
                Protection cover exists for the people who would be left short, so the starting point is a list of them: a partner, children, a parent you help support, anyone on the mortgage with you. Writing down what each would lose, and for how many years, turns a vague worry into numbers you can insure against.

                ## Milestones
                1. Every person who relies on your income or your unpaid work named on one page.
                2. For each person, the years of support they would need, such as until the youngest child turns 21.
                3. Shared debts that would pass to someone else listed with current balances.
                4. The page checked with your partner or another adult in the household.

                ## Notes
                Count unpaid work too. If one parent does most of the childcare, their death or illness costs the family money even if they earn nothing.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page dependants map names each dependant, the years of support they need and the shared debts, and has been agreed with another adult in the household."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everyone who would be worse off if your income stopped"
                - "Write the age each child would reach independence and the years left until then"
                - "Add every joint debt and its current balance"
                - "Talk the map through with your partner over one evening"
            - name: Inventory of the cover you already hold
              description: |-
                ## Purpose
                Most people own more protection than they think: a policy taken out with a mortgage ten years ago, life cover bundled with a bank account, a death benefit inside a pension, a small free policy from a card provider. Finding every one before shopping stops you paying twice for cover you have, or relying on a policy that lapsed years ago.

                ## Milestones
                1. Paper files, email inboxes and bank statements searched for protection policies and premiums.
                2. Each policy listed with insurer, type, sum assured, end date and monthly premium.
                3. Lapsed or cancelled policies marked so nobody counts on them.
                4. A single total of life cover and of monthly income cover currently in force.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of every protection policy in force, with insurer, type, sum assured, end date and premium, ends in a total for life cover and for income cover."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your email for the words policy, assured and premium"
                - "Scan twelve months of bank statements for insurer direct debits"
                - "Call each insurer to confirm the policy is still in force"
                - "Total the life cover and monthly income cover in force today"
            - name: Employer sick pay and death in service check
              description: |-
                ## Purpose
                What your employer pays if you are off sick or die in service often decides how much personal cover you need, yet few people have read the details. A death in service benefit of four times salary and six months of full sick pay change the sums completely; statutory minimums alone change them in the other direction.

                ## Milestones
                1. Sick pay terms from your contract or handbook written down: weeks at full pay and weeks at reduced pay.
                2. The death in service multiple recorded, with whether it is based on basic salary or total pay.
                3. Any group income protection or critical illness scheme found, with its deferral and benefit period.
                4. A note made of which benefits you would lose if you changed jobs.

                ## Notes
                Group benefits stop when you leave the employer. If you expect to move jobs, treat them as a layer on top of personal cover rather than a replacement.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Sick pay periods, the death in service multiple and any group income protection terms are written down from your employer's own documents."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the sick pay section of your contract or staff handbook"
                - "Log in to the benefits portal and note the death in service multiple"
                - "Ask HR whether a group income protection scheme exists and on what terms"
                - "Write down which benefits end if you leave the job"
            - name: State support if you die or cannot work
              description: |-
                ## Purpose
                Government bereavement payments and sickness benefits are usually far smaller and shorter than people assume, and some depend on marriage, contribution records or a means test. Knowing the realistic figure, from the official calculator for your country, shows how big the gap is that private cover has to fill.

                ## Milestones
                1. Your country's bereavement support for a surviving partner looked up, including whether unmarried partners qualify.
                2. The sickness or incapacity benefit you could claim estimated with an official tool.
                3. The weekly or monthly amounts written beside your dependants map.
                4. Conditions noted, such as a means test that savings or an insurance payout could affect.

                ## Notes
                Use the government's own website or a free benefits calculator from a recognised charity. Rules change, so date the figures.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Dated estimates of state bereavement and sickness support for your household are written down, with the eligibility conditions noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up bereavement support rules on your government's official site"
                - "Run an official benefits calculator for a period of long-term sickness"
                - "Note whether marriage or a civil partnership affects eligibility"
                - "Date the figures and add them to your dependants map"
            - name: Life cover amount worked out from real needs
              description: |-
                ## Purpose
                Rules of thumb like ten times salary are a starting point, not an answer. A needs-based sum adds up the mortgage and other debts to clear, a funeral, an income for the family until the children are independent and big future costs such as further education, then subtracts what death in service and savings already provide.

                ## Milestones
                1. Debts to clear on death totalled, including the mortgage balance.
                2. A yearly income need for the family set, with the number of years it must last.
                3. Existing cover, death in service and savings deducted.
                4. A target sum assured and term written down, with the working shown.

                ## Notes
                Insurers and advisers publish online calculators. Run two and compare them with your own sum; if the results differ widely, find out which assumption causes it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target life cover sum and term are written down, with the debts, income need, years and existing cover deductions that produced them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up the mortgage balance and every debt that would need clearing"
                - "Set the yearly income your family would need without you"
                - "Multiply it by the years until your youngest is independent"
                - "Subtract existing cover, death in service and savings"
                - "Run two online life cover calculators and compare them with your sum"
            - name: Income protection benefit and deferral worked out
              description: |-
                ## Purpose
                Long illness is far more likely than death during working life, and it stops income while the bills carry on. Working out the monthly benefit you would need, which insurers cap at a share of gross pay, and the deferral period that matches your sick pay and savings, gives you the two numbers every quote asks for.

                ## Milestones
                1. Essential monthly outgoings during a long illness estimated, including extra costs such as travel to treatment.
                2. The maximum benefit insurers allow for your earnings checked.
                3. A deferral period chosen to start paying when sick pay or savings run out.
                4. A benefit period decided: a limited two or five years, or until retirement age.

                ## Notes
                A longer deferral period cuts the premium noticeably. Match it to what you could genuinely live on, not to what feels comfortable.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target monthly benefit, deferral period and benefit period are written down, each tied to your sick pay, savings or essential outgoings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate your essential monthly outgoings during a long illness"
                - "Check the share of gross pay insurers will cover for your earnings"
                - "Count the weeks your sick pay and savings would last"
                - "Pick the deferral period that starts when those run out"
                - "Decide between a limited benefit period and cover to retirement age"
            - name: Critical illness cover decision and sum
              description: |-
                ## Purpose
                Critical illness cover pays a lump sum on diagnosis of listed conditions such as some cancers, heart attack or stroke, whether or not you can still work. It is expensive and overlaps with income protection, so the real decision is what a lump sum would pay for: clearing part of the mortgage, adapting the home or buying a year off to recover.

                ## Milestones
                1. The specific costs a lump sum would cover written down with figures.
                2. The overlap with your planned income protection noted.
                3. A decision recorded: no cover, a modest sum or a larger sum, with the reason.
                4. If buying, the sum chosen and whether it sits alongside or inside life cover.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on critical illness cover, with the sum and the costs it is meant to pay for written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the costs you would face in the year after a serious diagnosis"
                - "Compare those costs with what income protection would already pay"
                - "Ask for indicative prices for two or three sums assured"
                - "Record your decision and the reason in one paragraph"
            - name: Monthly protection budget ceiling
              description: |-
                ## Purpose
                Cover only works if it is still being paid in year fifteen, so the premium has to fit the budget comfortably now and as other costs rise. Setting a ceiling before quotes arrive lets you trim cover sensibly, for example by shortening a term or lengthening a deferral, instead of dropping a whole policy.

                ## Milestones
                1. A monthly figure for all protection premiums agreed within the household budget.
                2. Cover types ranked so you know what to trim first if quotes exceed the ceiling.
                3. The ceiling written beside your cover targets.

                ## Notes
                A common order is enough life cover for dependants first, then income protection, then critical illness. An adviser may suggest a different order for your situation.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A monthly premium ceiling and a ranked order of cover to trim are written beside your cover targets."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a realistic monthly amount for protection in your budget"
                - "Rank life, income and critical illness cover in order of importance"
                - "Decide what you would trim first if quotes come in high"
                - "Write the ceiling next to your cover targets"
            - name: Health and lifestyle disclosure file
              description: |-
                ## Purpose
                Non-disclosure is the commonest reason claims are reduced or refused, usually because an applicant forgot a doctor's visit or a test from years ago. Gathering your medical history, medicines, family history, height, weight, alcohol, smoking and travel plans before applying makes every answer accurate and saves calls back from the insurer.

                ## Milestones
                1. Your medical record or patient portal summary downloaded or requested.
                2. Every diagnosis, referral, test and medicine from the last five to ten years listed with dates.
                3. Family history of conditions such as heart disease or cancer before 60 noted, as far as you know it.
                4. Current height, weight, weekly alcohol units and smoking or vaping status recorded.

                ## Notes
                If you are unsure whether something counts, disclose it. An insurer can price or exclude a condition; it may not pay a claim on an application that left it out.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated disclosure file lists your diagnoses, tests, medicines, family history and lifestyle answers, cross-checked against your medical record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request your medical record summary from your doctor's surgery"
                - "List every diagnosis, referral and test from the last ten years with dates"
                - "Note family history of serious illness before age 60"
                - "Add new diagnoses, medicines and tests to the file @recurring(quarterly)"
            - name: Adviser, broker or buying direct
              description: |-
                ## Purpose
                You can buy protection direct from an insurer, through a comparison site, from a broker who searches the market, or from a regulated adviser who recommends a policy and takes responsibility for that advice. Simple term cover bought direct can be fine; for income protection, health conditions or trusts, a whole-of-market adviser often finds better terms and helps through underwriting.

                ## Milestones
                1. The difference between advised and non-advised sales understood.
                2. Two or three whole-of-market protection advisers or brokers found on the regulator's register.
                3. Each asked how they are paid: commission, fee or both.
                4. A buying route chosen and recorded with the reason.

                ## Notes
                Check any adviser on your financial regulator's public register before sharing personal or medical details.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A buying route is chosen, and any adviser used is confirmed on the regulator's register with their payment method written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how advised and non-advised protection sales differ"
                - "Find three protection specialists on the regulator's public register"
                - "Ask each how they are paid and whether they search the whole market"
                - "Record the route you chose and why"
            - name: Protection policy register
              description: |-
                ## Purpose
                When a claim is needed the person making it is often grieving or unwell, and cannot hunt for policy numbers. A single register listing every policy, its insurer, number, sum, end date, trust status and claims phone line means anyone you trust can start a claim with one call.

                ## Milestones
                1. A register with one row per policy, including employer schemes and pension death benefits.
                2. Claims phone numbers and online claim links recorded for each insurer.
                3. Trust status and trustees noted beside each life policy.
                4. The register's location known to your partner or executor.

                ## Notes
                Keep the register with your will or in the shared place your household uses for important papers. Leave passwords out of it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every policy with insurer, number, sum, end date, trust status and claims line, and your partner or executor knows where it is."
                cadence: rolling
              tasks:
                - "Set up a register with one row per policy"
                - "Add each insurer's claims phone number and claim form link"
                - "Tell your partner or executor where the register is kept"
                - "File any insurer letters received this month in the register @recurring(monthly:28)"
                - "Check every entry against the latest annual statement @recurring(yearly)"
            - name: Premium payment and lapse watch
              description: |-
                ## Purpose
                A protection policy usually lapses after one or two missed premiums, often after a bank switch or an expired card, and reinstating it can mean fresh underwriting at an older age. A short monthly check that each premium left the account protects years of cover for a couple of minutes' effort.

                ## Milestones
                1. Every protection premium matched to a payment date and paying account.
                2. Insurer payment details updated after any bank or card change.
                3. No unexplained gaps in premium payments over twelve months.

                ## Notes
                If money gets tight, call the insurer before missing a payment. Many can reduce the sum or offer a short premium break rather than letting the policy lapse.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every protection premium is matched to a monthly payment, with twelve months of payments showing no gaps."
                cadence: rolling
              tasks:
                - "List each premium with its amount, date and paying account"
                - "Check each protection premium left your account @recurring(monthly:9)"
                - "Update insurers within a week of any bank or card change"
                - "Compare this year's premiums with last year's @recurring(yearly)"
            - name: Annual protection review
              description: |-
                ## Purpose
                Needs drift: the mortgage shrinks, salaries rise, children leave home, new debts arrive. A yearly hour setting today's needs against the cover in force shows whether to add, reduce or leave each policy alone, before a gap grows large or you pay for cover nobody needs.

                ## Milestones
                1. This year's dependants map and debt balances updated.
                2. Cover in force compared with today's target sums.
                3. A keep, add or reduce decision recorded for each policy.
                4. Any agreed changes passed to the insurer or adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated annual review note compares cover in force with updated needs and records a keep, add or reduce decision for each policy."
                cadence: cyclic
              tasks:
                - "Pick a fixed month for the review, such as your main policy anniversary"
                - "Update mortgage and debt balances on the dependants map"
                - "Run the annual protection review against today's target sums @recurring(yearly)"
                - "Send any agreed changes to the insurer or adviser"
            - name: Life event trigger list for cover changes
              description: |-
                ## Purpose
                The moments that change protection needs are predictable: a wedding, a birth, a house move, a new job, a pay rise, a separation, a business started, the last child leaving education. Keeping a short list of triggers and checking it each quarter means cover is updated when life changes, not at the next annual review.

                ## Milestones
                1. A list of eight to ten trigger events written down.
                2. For each event, the policy, trust or form it affects noted.
                3. A quarterly check in place, with any triggered change actioned within a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written trigger list maps each life event to the policies it affects, checked every quarter with any actions logged."
                cadence: rolling
              tasks:
                - "Write a list of life events that would change your cover needs"
                - "Note which policy, trust or form each event affects"
                - "Scan the last quarter for any trigger event @recurring(quarterly)"
                - "Action any triggered change within a month"
            - name: Beneficiary nominations and trust records
              description: |-
                ## Purpose
                Life policies and pension death benefits pay out according to trusts and expression of wish forms, not your will, so an out-of-date nomination can send money to a former partner or into a slow estate. Keeping nominations and trustee details current is the cheapest piece of protection admin there is.

                ## Milestones
                1. Every nomination form and trust deed located and copied.
                2. Named beneficiaries and trustees checked against your current wishes.
                3. Out-of-date forms replaced and the acknowledgements filed.

                ## Notes
                Expression of wish forms guide scheme trustees rather than bind them. Keep them current anyway; trustees give them real weight.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trust deed and nomination form is located, matches your current wishes and has a filed acknowledgement from the insurer or scheme."
                cadence: rolling
              tasks:
                - "Gather every trust deed and expression of wish form"
                - "Compare the named people against who you want to benefit today"
                - "Replace any out-of-date form and file the acknowledgement"
                - "Check every expression of wish form still names the right people @recurring(yearly)"
                - "Confirm trustees are still willing and contactable @recurring(yearly)"
            - name: Workplace benefits enrolment window
              description: |-
                ## Purpose
                Many employers let staff buy extra life cover, critical illness or income protection once a year, often without medical questions and at group rates. Knowing when the window opens, and comparing the options with your personal cover, can fill a gap cheaply, as long as you remember it ends when you leave.

                ## Milestones
                1. The dates of your employer's annual benefits window known.
                2. Each protection option priced and compared with personal cover.
                3. A choice made inside the window and the confirmation saved.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Inside each benefits window, every protection option is compared with personal cover and the choice is confirmed in writing."
                cadence: cyclic
              tasks:
                - "Ask HR when the flexible benefits window opens"
                - "Note the benefits window dates and set a reminder @recurring(yearly)"
                - "Compare group options with personal cover on cost and portability"
                - "Save the confirmation of what you selected"
            - name: Policy documents and household access
              description: |-
                ## Purpose
                Policies are useless if nobody can find them, and insurers will not volunteer that one exists. Keeping originals, digital copies and a short letter of instruction in one known place, and checking yearly that the right person can reach them, closes the gap between having cover and the family receiving it.

                ## Milestones
                1. Policy schedules, trust deeds and key facts stored together in paper and digital form.
                2. A one-page letter of instruction written for the person who would claim.
                3. That person shown the location and able to open the digital copy.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Policy documents and a letter of instruction sit in one place that a named person has opened successfully within the last year."
                cadence: rolling
              tasks:
                - "Scan each policy schedule and trust deed into one folder"
                - "Write a one-page letter saying what to claim and who to call"
                - "Show your chosen person where the paper and digital copies are"
                - "Test that your chosen person can still find the documents @recurring(yearly)"
            - name: Indexation and anniversary offers
              description: |-
                ## Purpose
                Index-linked policies offer a cover and premium increase at each anniversary to keep pace with inflation, and declining too many in a row can end the option. Reviewable policies may also reprice on set dates. Deciding each offer on purpose, rather than accepting or ignoring it by default, keeps cover real and premiums predictable.

                ## Milestones
                1. Each policy marked level or index-linked, and guaranteed or reviewable.
                2. Anniversary dates listed with what happens on each.
                3. Every offer decided and recorded within its response period.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every anniversary offer in the last year has a recorded accept or decline decision made inside its response period."
                cadence: cyclic
              tasks:
                - "Mark each policy as level or index-linked, guaranteed or reviewable"
                - "List anniversary dates and response deadlines in your register"
                - "Decide on each index-linked increase at its anniversary @recurring(yearly)"
                - "Note how many increases you can decline before the option ends"
            - name: Term life cover types explained
              description: |-
                ## Purpose
                Level term pays the same sum throughout, decreasing term shrinks roughly in line with a repayment mortgage, family income benefit pays a monthly sum for the rest of the term, and whole of life pays whenever death occurs. Understanding the four, with their price differences, lets you match each debt and need to the cheapest suitable type.

                ## Milestones
                1. The four main types described in your own words.
                2. Each type matched to a need on your dependants map.
                3. Indicative prices for at least two types compared for the same person and sum.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note describes level, decreasing, family income benefit and whole of life cover, each matched to one of your needs."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read an independent consumer guide to the main types of life cover"
                - "Write one sentence on what each type pays and when"
                - "Match each type to a need on your dependants map"
                - "Get indicative prices for level and decreasing term at the same sum"
            - name: Income protection definitions that decide a claim
              description: |-
                ## Purpose
                Two income protection policies at the same premium can behave very differently at claim. Own occupation pays if you cannot do your own job, suited occupation only if you cannot do any job suited to your experience, and any occupation is stricter still. Knowing these, along with deferral, benefit period and proportionate benefit, makes quotes properly comparable.

                ## Milestones
                1. Own, suited and any occupation definitions explained in your own words.
                2. Deferral, benefit period, proportionate benefit and rehabilitation benefit understood.
                3. Your own job checked against how insurers classify it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains the three occupation definitions and states which one your job needs, confirmed with an insurer or adviser."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain-language guide to income protection definitions"
                - "Write down which definition you would need for your job"
                - "Ask an adviser or insurer how your occupation is classed"
                - "Note what proportionate and rehabilitation benefits would pay"
            - name: Critical illness definitions and severity levels
              description: |-
                ## Purpose
                Critical illness policies list conditions, but the detail sits in the definitions: a cancer often has to reach a certain stage, and a heart attack has to meet set criteria. Some policies add partial payments for less severe conditions. Learning to read the definitions shows why a cheaper policy may pay out in fewer real cases.

                ## Milestones
                1. The core conditions listed and their typical definitions read.
                2. Full payment and partial payment conditions told apart.
                3. Two policies compared on the same three conditions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of two insurers' definitions for cancer, heart attack and stroke is written down, noting which pays in more cases."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download the critical illness definitions booklet from two insurers"
                - "Compare how each defines cancer, heart attack and stroke"
                - "List which conditions earn a partial payment"
                - "Write down which policy pays in more of the cases you worry about"
            - name: Reading key facts and policy wording
              description: |-
                ## Purpose
                The key facts summary tells you what is covered, what is excluded and when premiums can change; the policy wording settles any dispute. Practising on one real document, with a checklist of where the important clauses usually sit, makes every later comparison faster and less intimidating.

                ## Milestones
                1. A checklist of clauses to find: exclusions, premium reviews, cancellation and claim conditions.
                2. One real policy read against the checklist.
                3. Questions noted and answered by the insurer or adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One of your policies has been read against a written clause checklist, with every open question answered in writing."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a checklist of clauses to look for in any policy wording"
                - "Read one of your own policies against the checklist"
                - "Highlight every exclusion and premium review clause"
                - "Send your unanswered questions to the insurer or adviser"
            - name: How underwriting decisions are made
              description: |-
                ## Purpose
                Underwriting is how the insurer decides whether to offer cover and at what price, using your answers and sometimes a doctor's report or a nurse screening. Outcomes range from standard terms to a premium loading, an exclusion, a postponement or a decline. Knowing this in advance makes a surprising offer less alarming and easier to question or shop around.

                ## Milestones
                1. The possible underwriting outcomes listed and understood.
                2. The difference between full underwriting and short question sets noted.
                3. What a doctor's report contains, and your right to see it first, checked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the underwriting outcomes, typical report timescales and the questions you would ask if offered a loading or exclusion."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read how insurers decide standard, loaded or excluded terms"
                - "Note how long doctor's reports usually take to arrive"
                - "Check your right to see a medical report before it is sent"
                - "Write down what you would ask if you received a loading"
            - name: Writing a policy in trust
              description: |-
                ## Purpose
                A life policy written in trust usually pays the people you choose directly, often within weeks, and in many countries keeps the payout outside your estate for inheritance tax. Without a trust the money may wait for probate. Learning how protection trusts work, and what trustees do, prepares you to set one up with the insurer's form or an adviser.

                ## Milestones
                1. The purpose of a trust for a protection policy understood.
                2. The insurer's trust options, such as discretionary or absolute, read.
                3. Possible trustees identified.
                4. Questions listed for an adviser or solicitor where the situation is complex.

                ## Notes
                Trust choices have legal and tax effects. Use the insurer's guidance for simple cases and take professional advice for blended families or large estates.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each life policy is marked as in trust or not, with chosen trustees and a list of questions for an adviser written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the trust guide from the insurer of your main policy"
                - "Write down who you would want as trustees and why"
                - "List questions for an adviser about which trust type fits"
                - "Check whether each existing life policy is already in trust"
            - name: What happens in a protection claim
              description: |-
                ## Purpose
                Published figures show the large majority of protection claims are paid, and most declines come from non-disclosure or a condition that did not meet the definition. Learning the claim process, the documents needed and typical timescales before you need them removes uncertainty for the family and shows gaps in your records now.

                ## Milestones
                1. Your insurers' published claims statistics read.
                2. The documents each claim type needs listed.
                3. Typical timescales noted for death, critical illness and income protection claims.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the documents and typical timescales for each type of claim you could make, with your insurers' claims statistics."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the latest claims statistics published by your insurers"
                - "List the documents a death claim needs, such as a death certificate"
                - "Note what an income protection claim asks from an employer"
                - "Add the document list to your policy register"
            - name: Tax and estate questions on payouts
              description: |-
                ## Purpose
                Whether a payout is taxed depends on the policy type, who owns it, whether it is in trust and how your country treats benefits. Personal income protection benefit is often tax free while group scheme benefit is usually paid through payroll, and a life payout outside trust can count towards an estate. Writing down the questions and getting answers avoids nasty surprises.

                ## Milestones
                1. Each policy listed with owner, type and trust status.
                2. The tax authority's guidance on protection payouts read.
                3. Questions answered by an adviser where the guidance is unclear.

                ## Notes
                This is a list of questions, not tax advice. Rules differ by country and change often.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each policy has its likely tax treatment noted from official guidance, with any open question answered by an adviser."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List each policy with its owner, type and trust status"
                - "Read the tax authority's guidance on insurance payouts"
                - "Note whether group benefit would be paid gross or through payroll"
                - "Take unanswered questions to an adviser"
            - name: Like-for-like quote comparison
              description: |-
                ## Purpose
                Quotes are only comparable when the sum, term, premium type, definitions and add-ons match. A simple comparison sheet, with three or four insurers in columns and the features in rows, shows whether the cheapest quote is cheap because it covers less.

                ## Milestones
                1. A spec written: sum, term, deferral, premium type and must-have features.
                2. At least three quotes obtained to that spec.
                3. Each quote scored on price, definitions, claims record and add-ons.
                4. A preferred policy chosen with the reason recorded.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least three quotes to one written spec are scored side by side, and the chosen policy is recorded with its reason."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one spec covering sum, term, deferral and premium type"
                - "Get at least three quotes to exactly that spec"
                - "Score each on price, definitions, claims record and extras"
                - "Record the policy you prefer and the reason"
            - name: Joint or two single life policies
              description: |-
                ## Purpose
                A joint first-death policy pays once and then ends, leaving the survivor uninsured; two single policies cost a little more but can pay twice and split cleanly if the relationship ends. For unmarried couples, who often have no automatic rights to each other's estate, the choice matters even more.

                ## Milestones
                1. Prices obtained for a joint policy and for two single policies at the same sum.
                2. Payout scenarios written for each option, including separation.
                3. A choice made and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Joint and single policy prices and payout scenarios are compared on one page, with the chosen structure recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Price a joint first-death policy and two single policies"
                - "Write what each option pays if one of you dies, and if both do"
                - "Note what happens to each option if you separate"
                - "Record the choice and why"
            - name: Family income benefit versus a lump sum
              description: |-
                ## Purpose
                Family income benefit replaces a monthly income until the policy end date, and often costs much less than the lump sum needed to produce the same income. A lump sum suits clearing a mortgage; a monthly benefit suits replacing a salary while children grow. Comparing both for your family's numbers often ends in a mix.

                ## Milestones
                1. The monthly income need and the mortgage balance separated.
                2. Prices compared for a lump sum and a family income benefit covering the same need.
                3. A mix decided, such as decreasing term for the mortgage and family income benefit for living costs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen mix of lump sum and family income benefit is written beside your targets, with the prices that justified it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Split your need into a debt to clear and a monthly income to replace"
                - "Price family income benefit for the monthly need until the youngest turns 21"
                - "Price a lump sum large enough to produce the same income"
                - "Choose the mix and write it beside your targets"
            - name: Guaranteed or reviewable premiums
              description: |-
                ## Purpose
                Guaranteed premiums stay the same for the whole term; reviewable ones start cheaper but the insurer can raise them at set intervals, sometimes sharply as you age. For long terms, or cover you will still rely on in your fifties, the cheaper start can turn into the dearer policy.

                ## Milestones
                1. Each quote marked guaranteed or reviewable.
                2. The review interval and any published history of rises noted.
                3. A decision recorded for each type of cover.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Total cost over the term is estimated for guaranteed and reviewable options, and the choice for each policy is recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark every quote as guaranteed or reviewable"
                - "Ask how often reviewable premiums can change and by how much"
                - "Estimate the total cost over the term for both options"
                - "Record your choice for each policy"
            - name: Replacing an old policy safely
              description: |-
                ## Purpose
                Switching to cheaper or better cover can make sense, but cancelling the old policy first can leave you uninsured, and new underwriting may exclude conditions the old one still covers. The safe order is new policy accepted and in force, trust set up, and only then the old one cancelled, with every difference understood first.

                ## Milestones
                1. The old policy's terms, exclusions and trust status recorded.
                2. The replacement offered on known terms with no new exclusions you cannot accept.
                3. The new policy in force and written in trust.
                4. The old policy cancelled in writing only after that.

                ## Notes
                Never cancel existing cover until the new insurer confirms the start date in writing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The replacement policy is confirmed in force and in trust before the old policy is cancelled, with both letters filed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the old policy's sum, term, exclusions and trust status"
                - "Apply for the replacement and wait for written terms"
                - "Set up the trust on the new policy before it starts"
                - "Cancel the old policy in writing once the new one is confirmed in force"
            - name: Cutting premiums without cutting protection
              description: |-
                ## Purpose
                Premiums can often fall without losing what matters: claiming non-smoker rates a year after quitting, shortening a term that now runs past the youngest child's independence, or removing cover that overlaps with another policy. A focused look at each policy usually finds at least one saving.

                ## Milestones
                1. Every policy checked for overlap with other cover.
                2. Smoker status, term length and sum checked against current facts.
                3. Changes requested in writing and the new premiums confirmed.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each policy has been checked for overlap, smoker status and term length, and any change is confirmed with its new premium."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look for any two policies covering the same need"
                - "Ask insurers about non-smoker rates if you quit over a year ago"
                - "Check whether any term runs well past when it is needed"
                - "Request changes in writing and record the new premiums"
            - name: Policy add-ons worth paying for
              description: |-
                ## Purpose
                Extras such as waiver of premium, children's critical illness, guaranteed insurability options and terminal illness benefit can be useful or can quietly inflate the premium. Pricing each one separately and asking what it would pay in a realistic case keeps only the extras that earn their cost.

                ## Milestones
                1. Each available add-on listed with its separate price.
                2. A realistic example written for what each would pay.
                3. Add-ons accepted or declined, with reasons recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every add-on offered is priced separately and marked kept or declined, with a one-line reason for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask for the price of each add-on on its own"
                - "Write one realistic example of when each add-on would pay"
                - "Check whether children's cover is already included at no cost"
                - "Record which add-ons you keep and why"
            - name: New baby protection update
              description: |-
                ## Purpose
                Nothing raises protection needs like a new child: eighteen or more years of costs, often lower income during leave, and sometimes a bigger home. Updating cover in the first few months, ideally before returning to work, also means applying while every health detail from the pregnancy is fresh.

                ## Milestones
                1. The dependants map and life cover targets updated for the new child.
                2. Both parents' cover checked, including the parent on leave.
                3. Any new policy or increase applied for.
                4. Guardianship and trust wishes noted for whoever writes your wills.

                ## Notes
                Pregnancy complications may need disclosing on a new application. Answer accurately and let the insurer decide what matters.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both parents' cover has been recalculated for the new child, with any new policy or increase applied for within 90 days."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add the new child to your dependants map"
                - "Recalculate both parents' life cover target"
                - "Ask existing insurers whether cover can be increased without full underwriting"
                - "Note your guardian choice to take to whoever writes your wills"
            - name: Protection alongside a new mortgage
              description: |-
                ## Purpose
                Buying a home is the moment to match life cover to the debt, and lenders or brokers often offer a policy in the same meeting. Arranging it on your own terms, with the right term, sum and trust, avoids paying for decreasing cover on an interest-only loan or a term that ends before the mortgage does.

                ## Milestones
                1. Mortgage amount, term and repayment type confirmed.
                2. Cover type matched: decreasing term for repayment, level term for interest only.
                3. The policy in force by completion day and written in trust.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Life cover matching the mortgage amount, term and repayment type is in force and in trust by completion day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the mortgage amount, term and repayment type"
                - "Match the cover type to the repayment type"
                - "Get one quote outside the broker's suggestion to compare"
                - "Make sure the policy starts by completion day"
            - name: Changing jobs without losing cover
              description: |-
                ## Purpose
                Leaving a job usually ends its death in service, group income protection and any group critical illness on the last day, and the new employer's package may be thinner or start after probation. Checking before you resign, and applying for personal cover while you are still employed and healthy, avoids an uninsured gap.

                ## Milestones
                1. Every benefit ending on your last working day listed.
                2. The new employer's cover and waiting periods compared with the old.
                3. Personal cover applied for if the comparison shows a gap.
                4. Nominations completed with the new scheme.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Old and new employer cover are compared in writing before your leaving date, and any gap is closed or consciously accepted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every benefit that ends on your last working day"
                - "Ask the new employer for its cover levels and waiting periods"
                - "Apply for personal cover before leaving if there is a gap"
                - "Complete expression of wish forms with the new scheme"
            - name: Application and medical screening day
              description: |-
                ## Purpose
                An application takes 30 to 60 minutes of questions, and larger sums or some health histories trigger a nurse screening with blood pressure, height, weight and a blood sample. Having the disclosure file open, avoiding a heavy night or hard exercise beforehand and knowing your doctor's details makes the outcome accurate first time.

                ## Milestones
                1. The disclosure file open before the application starts.
                2. Every question answered and a copy of the answers saved.
                3. Any screening booked and attended with your documents.
                4. The insurer's decision received and checked against what you applied for.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The application is submitted with a saved copy of your answers, and the insurer's decision is checked against the cover applied for."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book an uninterrupted hour to complete the application"
                - "Keep your disclosure file open while answering"
                - "Download or request a copy of your submitted answers"
                - "Attend any nurse screening with photo ID and your medicine list"
            - name: First thirty days after cover starts
              description: |-
                ## Purpose
                Most protection policies come with a cooling-off period of around 30 days. Using it to read the schedule, check every recorded answer, confirm the trust is in place and the start date is right is the last cheap moment to fix a mistake.

                ## Milestones
                1. The policy schedule checked against the quote.
                2. Recorded application answers compared with your disclosure file.
                3. The trust form completed and acknowledged.
                4. The policy added to your register.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within the cooling-off period the schedule and recorded answers are checked, the trust is acknowledged and the policy is in the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the policy schedule line by line with the quote"
                - "Check the recorded health answers for mistakes"
                - "Return the trust form and keep the acknowledgement"
                - "Add the new policy to your protection register"
            - name: Claims checklist for the people left to claim
              description: |-
                ## Purpose
                Claims usually start at the hardest moment, after a death, a diagnosis or months off work. A prepared checklist kept with the register tells whoever is claiming which insurers to call, what to ask for and which documents to gather, so money arrives without avoidable delay.

                ## Milestones
                1. A step-by-step claim checklist written for each policy type.
                2. Documents likely to be needed listed with where to find them.
                3. Each insurer's notification time limit recorded.
                4. A claim log ready for calls, reference numbers and dates.

                ## Notes
                Start from the **Operational checklist** template. Income protection claims should be notified early, well before the deferral period ends.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written claims checklist for each policy type, naming contacts, documents and time limits, is kept with the register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a claims checklist for each policy type you hold"
                - "Note each insurer's time limit for notifying a claim"
                - "List where the death certificate, payslips and medical letters would come from"
                - "Add a blank claim log for calls, reference numbers and dates"
            - name: Policy end dates and cover gap planning
              description: |-
                ## Purpose
                Term policies end on a fixed date, sometimes years before the mortgage clears or the children are independent if plans have changed. Checking end dates well ahead gives time to extend, buy new cover while still insurable, or confirm the cover is no longer needed.

                ## Milestones
                1. Every policy end date listed beside the date its need ends.
                2. Any gap of more than a year flagged.
                3. A decision recorded for each gap: extend, replace or accept.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every policy end date sits beside the date its need ends, with an extend, replace or accept decision for each gap."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each policy end date beside the date its need ends"
                - "Flag any need that outlasts its policy by more than a year"
                - "Ask the insurer whether the term can be extended"
                - "Record the decision for each gap"
            - name: Single parent protection plan
              description: |-
                ## Purpose
                As the only earner and the main carer, a single parent's death or long illness hits children twice. Cover has to provide income and childcare, the money must reach a guardian through a trust rather than a child directly, and premiums have to fit one income.

                ## Milestones
                1. A guardian chosen and willing, with cover sized for raising the children in their household.
                2. Life cover in trust with the guardian or another trusted adult as a trustee.
                3. Income protection or a sickness plan in place for long illness.
                4. The guardian told where the documents are kept.

                ## Notes
                Children cannot usually receive a payout directly. A trust with sensible trustees is how the money reaches them.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A willing guardian is named, life cover is in trust with a trusted adult as trustee, and long illness cover is in place."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your chosen guardian whether they are willing"
                - "Price childcare and living costs in the guardian's household"
                - "Put life cover in trust with a trusted adult as trustee"
                - "Review the guardian and trustee arrangements @recurring(yearly)"
            - name: Cover for a parent at home
              description: |-
                ## Purpose
                Parents at home earn no salary but provide childcare, cooking, school runs and care that would cost a great deal to replace. Pricing that work with real childcare costs in your area gives a life cover figure for them, and often shows the family is badly underinsured on that side.

                ## Milestones
                1. Weekly hours of childcare and household work listed.
                2. Local childcare and help costs priced.
                3. A life cover sum for the parent at home set and applied for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A life cover sum for the parent at home, based on priced local childcare to the youngest's independence, is applied for."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the weekly childcare and household work the parent at home does"
                - "Price full-time childcare and help in your area"
                - "Turn the yearly cost into a sum running to the youngest's independence"
                - "Re-price full-time childcare in your area @recurring(yearly)"
            - name: Self-employed income protection
              description: |-
                ## Purpose
                Freelancers and sole traders have no sick pay and no group scheme, so a long illness stops income on day one. Insurers work from accounts and tax returns rather than payslips, and some offer shorter deferral or limited benefit periods to keep premiums affordable for variable earners.

                ## Milestones
                1. Two or three years of accounts or tax returns ready as evidence of income.
                2. A deferral period matched to your business cash reserves.
                3. A policy in force that pays on an own occupation basis where available.
                4. The income figure updated each year after accounts are filed.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An income protection policy based on evidenced self-employed earnings, with deferral matched to cash reserves, is in force."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Gather your last three years of tax returns or accounts"
                - "Count how many weeks business cash and savings would last"
                - "Ask an adviser for own occupation quotes with that deferral"
                - "Update the income figure insurers use after filing your tax return @recurring(yearly)"
            - name: Applying with a health condition
              description: |-
                ## Purpose
                Diabetes, a mental health history, a heart condition or a past cancer does not make cover impossible, but a mainstream online quote may decline or load heavily. Specialist brokers know which insurers treat which conditions favourably, and a well-documented history of stable treatment often earns better terms.

                ## Milestones
                1. Condition history documented with dates, treatment and latest results.
                2. A broker who specialises in your condition found.
                3. Offers from at least two insurers compared.
                4. A date set to ask for a review of any loading or exclusion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Offers from at least two insurers, obtained through a specialist broker, are compared and one accepted or declined with reasons."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page summary of your condition, treatment and recent results"
                - "Find a broker who specialises in your condition"
                - "Compare offers from at least two insurers"
                - "Ask whether stable health could reduce a loading or exclusion @recurring(yearly)"
            - name: Blended family cover and nominations
              description: |-
                ## Purpose
                Stepchildren, children from an earlier relationship, a former partner owed maintenance and a new partner can all have claims on the same money. Clear cover for each group, with separate policies or trust shares where needed and nominations that match your will, avoids disputes at the worst possible time.

                ## Milestones
                1. Each person you want to provide for named with an amount.
                2. Separate policies or trust shares set up for each group.
                3. Nominations and will checked against each other by a professional.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each person you intend to provide for has a named amount, policy or trust share, confirmed by a professional to match your will."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each person you want to provide for and the amount"
                - "Decide whether separate policies make the split clearer"
                - "Ask a solicitor to check your nominations and will match"
                - "Tell trustees which share is meant for whom"
            - name: Winding down cover towards retirement
              description: |-
                ## Purpose
                As the mortgage clears and children leave, the need for life and income cover often falls, and income protection usually ends at retirement age anyway. Deciding deliberately which policies to stop, keep or replace, rather than letting premiums run on, can free money, though some cover may still matter for a partner's reduced pension or funeral costs.

                ## Milestones
                1. Each policy's remaining need checked against a cleared mortgage and independent children.
                2. A partner's income after your death, such as a reduced pension, checked.
                3. A keep, reduce or stop plan recorded for each policy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every policy has a dated keep, reduce or stop decision based on remaining debts, dependants and a partner's pension."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check which debts and dependants each policy still protects"
                - "Ask your pension scheme what a surviving partner would receive"
                - "Decide for each policy whether to keep, reduce or stop it"
                - "Write the plan and its date in your register"
            - name: Business owner protection options
              description: |-
                ## Purpose
                Company directors can often arrange personal life cover through the business, and businesses can insure a key person or fund a buyout of a shareholder who dies. These carry tax and legal angles that need an adviser and accountant, but knowing the options lets a founder ask the right questions.

                ## Milestones
                1. Relevant life, key person and shareholder protection understood in outline.
                2. The business's exposure if you or a co-founder died or fell ill written down.
                3. Advice taken and a decision recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note of the business's exposure and a recorded decision on company-paid cover, made after advice, exist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down what happens to the business if you cannot work for a year"
                - "Read an adviser's guide to relevant life and key person cover"
                - "Ask your accountant how company-paid premiums would be treated"
                - "Review the key person sum against profits @recurring(yearly)"
            - name: Lifelong support for a dependant with disabilities
              description: |-
                ## Purpose
                Some children and adults will always need support, and that changes protection completely: cover may need to last decades, a payout could affect means-tested support, and the money usually needs to sit in a trust run by people who understand their needs. The legal work belongs with a solicitor and adviser; preparing the facts is yours.

                ## Milestones
                1. Their likely lifetime costs and current support written down.
                2. A suitable trust discussed with a solicitor, with trustees chosen.
                3. Life cover sized and written into that trust.
                4. A letter of wishes describing their care and routines written.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Life cover sized for your dependant's lifetime needs is written into a suitable trust, with trustees chosen and a letter of wishes filed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the support and care your dependant receives now"
                - "Ask a solicitor about trusts that protect means-tested support"
                - "Choose trustees who know your dependant well"
                - "Review the trust and letter of wishes @recurring(yearly)"
            - name: Whole of life cover for an estate tax bill
              description: |-
                ## Purpose
                Where an estate is likely to face inheritance or estate tax, a whole of life policy in trust can pay the bill so heirs do not have to sell a home in a hurry. It is expensive and suits only some estates, so it belongs in a conversation with an estate planning adviser, with your figures prepared first.

                ## Milestones
                1. Estate value and likely tax estimated with an official tool.
                2. Single and joint second-death whole of life cover understood.
                3. An adviser consulted and a decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An estimate of likely estate tax and a recorded decision on whole of life cover, made with an adviser, are filed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate your estate value and likely tax with an official calculator"
                - "Read how joint second-death whole of life cover works"
                - "Book a meeting with an estate planning adviser"
                - "Review the policy and sum with your adviser @recurring(yearly)"
            - name: Household survival scenarios
              description: |-
                ## Purpose
                Stress testing answers the real question: if you died tomorrow, or were off work for two years, would the household cope? Modelling three scenarios month by month, with cover, state support and savings included, shows the gaps more clearly than any rule of thumb and gives each annual review something solid to work from.

                ## Milestones
                1. Three scenarios defined: a death, two years of illness and a critical illness diagnosis.
                2. Monthly money in and out modelled for two years in each.
                3. Gaps listed with the cover change that would close each one.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Three scenarios are modelled month by month for two years, with every shortfall linked to a named cover change."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Define death, long illness and critical illness scenarios"
                - "Model monthly money in and out for two years in each"
                - "Note the month each scenario runs out of money"
                - "Ask the agent to summarise the gaps into a short list of cover changes"
---

# Life & Income Protection Insurance

This area is for anyone whose death or long illness would leave other people short of money, and especially for parents. It starts with the foundations (who depends on you, the cover you already hold through work and old policies, state support, and the sums you actually need), then the routines that keep policies paid, recorded and current, the knowledge that makes definitions and quotes readable, the buying decisions, the dated moments such as a new baby, a mortgage, a job change or a claim, versions for single parents, parents at home, the self-employed and blended families, and finally specialist cover for business owners, lifelong dependants and estates.

What repeats is a monthly premium check and a monthly filing of insurer letters, a quarterly scan for life events and health changes, and a yearly protection review with nominations, trustees, anniversary offers and document access checked. The Purchase decision, Operational checklist and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
