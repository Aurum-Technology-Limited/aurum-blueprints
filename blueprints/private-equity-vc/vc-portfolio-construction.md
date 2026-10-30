---
id: private-equity-vc.vc-portfolio-construction
name: VC Portfolio Construction
description: "A written fund strategy, investable capital, company count, cheque sizes, ownership targets and reserves, turned into a working model of the fund's return paths that you reforecast every quarter."
category: business
version: 1.0.0
tags: [private-equity-vc, vc-portfolio-construction, knowledge-worker, founder, reserves, ownership, power-law, fund-model]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - reading-queue
    - risk-register
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: VC Portfolio Construction
          description: "Designing a venture portfolio: number of companies, cheque sizes, reserves for follow-ons, ownership targets and modelling the fund's return paths."
          projects:
            - name: Fund strategy one-pager for portfolio design
              description: |-
                ## Purpose
                Every number in a construction model follows from a few strategy choices: stage, sector, geography, whether you lead or follow, and how much you want to own at entry. Writing those choices on one page before touching a spreadsheet stops the model from quietly inventing a strategy the partners never agreed.

                ## Milestones
                1. A one-page statement of target stage, sectors, geographies and lead or follow posture.
                2. A target entry ownership range and typical round you expect to join, stated as numbers.
                3. The page agreed by every partner, with open disagreements listed rather than hidden.
                4. The one-pager saved as the first tab of the construction model.

                ## Notes
                Keep it to things that change the maths. Brand, values and sourcing stories belong elsewhere; this page exists to drive cheque size, count and reserves.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page strategy statement with stage, sector, geography, lead or follow posture and entry ownership range, agreed by all partners and dated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one sentence each on stage, sector, geography and lead or follow posture"
                - "Add the entry ownership range and the typical round size you expect to join"
                - "Circulate the page to the partners and collect every objection in writing"
                - "Agree a final version and paste it into the first tab of the model"
            - name: Investable capital after fees and expenses
              description: |-
                ## Purpose
                A 50 million fund does not have 50 million to invest. Management fees over the fund's life, organisational and fund expenses, and any recycling allowance change the real pot by a fifth or more, so the starting number for portfolio design has to be investable capital, not headline commitments.

                ## Milestones
                1. Total management fees over the fund term estimated from the draft LPA terms.
                2. Organisational costs and expected fund expenses estimated for the life of the fund.
                3. Any recycling allowance noted, with the conditions under which proceeds can be reinvested.
                4. A single investable capital figure, with its workings, agreed and used throughout the model.

                ## Notes
                Take fee and recycling terms from the documents your fund counsel is drafting, not from memory. If terms are still open, model the range and say which case the portfolio plan uses.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An investable capital calculation showing fees, expenses and recycling, reconciled to the draft fund terms and used as the model's starting figure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the fee rate, step-down and fund term from the latest draft terms"
                - "Estimate organisational costs and annual fund expenses with your administrator or counsel"
                - "Calculate investable capital with and without the recycling allowance"
                - "Record which investable capital figure the portfolio plan will use"
            - name: Target number of portfolio companies
              description: |-
                ## Purpose
                How many companies to back is the most argued question in venture portfolio design, and the honest answer depends on stage, how skewed outcomes are and how much you can help each founder. Setting a target count with a range, and the reasons for it, gives cheque sizes and reserves something fixed to work from.

                ## Milestones
                1. A target count of initial investments with a minimum and maximum.
                2. The reasoning written down: stage loss rates, outcome skew and partner time per company.
                3. A check that the count is achievable at your realistic deal pace over the investment period.
                4. The count entered into the model and the strategy one-pager.

                ## Notes
                Small portfolios raise the chance that you miss the one outlier; very large ones dilute partner attention and often push entry ownership too low. Write down which risk worries you more.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target company count with a range and a written rationale, cross-checked against realistic deal pace and recorded in the model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count how many new investments you or your team made in each of the last three years"
                - "Note how many board or close support relationships each partner can carry"
                - "Run the model at three portfolio sizes and compare the spread of outcomes"
                - "Write the chosen count and range with a paragraph of reasoning"
            - name: Initial cheque size and entry ownership targets
              description: |-
                ## Purpose
                Cheque size and entry ownership are two sides of the same choice once you know the valuations at your stage. Writing a cheque band for each round type, with the ownership it buys at typical post-money valuations, shows quickly whether your plan needs you to lead, co-lead or accept smaller stakes.

                ## Milestones
                1. A table of typical round sizes and post-money valuations at each stage you invest in.
                2. An initial cheque band per stage with the ownership it buys at the low and high valuation.
                3. A minimum entry ownership below which you would usually pass, agreed by the partners.
                4. Cheque bands entered in the model and checked against investable capital less reserves.

                ## Notes
                Use recent rounds you have seen or credible published data, and label the source and date. Valuations move fast; a table older than a year will mislead the plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cheque size and entry ownership table by stage, with a stated minimum ownership, sourced and dated, and wired into the model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the last fifteen rounds you saw at your stage with size and post-money valuation"
                - "Calculate the ownership your planned cheque would buy in each of them"
                - "Agree a minimum entry ownership with the partners"
                - "Enter the cheque bands by stage into the model"
            - name: Reserve ratio for follow-on capital
              description: |-
                ## Purpose
                Seed and Series A funds commonly hold back somewhere between a third and well over half of investable capital for later rounds, and getting the ratio wrong either starves your winners or leaves money idle at the end. Deriving your ratio from expected follow-on round sizes and how many companies will graduate makes it a calculation rather than a habit copied from another fund.

                ## Milestones
                1. Expected graduation rates from your entry stage to each later round written down.
                2. Typical follow-on cheque needed to hold or partly defend ownership at each round.
                3. A reserve ratio calculated from those inputs, with a low and high case.
                4. The ratio agreed and set as the reserves line in the model.

                ## Notes
                Portfolio-level reserves are a budget. Whether a given company gets its share is a separate follow-on decision made case by case later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A reserve ratio derived from stated graduation rates and follow-on cheque sizes, with low and high cases, recorded in the model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the graduation rate you assume from entry stage to each later round"
                - "Estimate the follow-on cheque needed at each round to keep the ownership you want"
                - "Calculate the reserve ratio for a low, base and high case"
                - "Agree the base ratio with the partners and record it in the model"
            - name: First portfolio construction model in a spreadsheet
              description: |-
                ## Purpose
                Building your own first construction model, even if a template exists, is how you learn which three inputs actually drive the answer. The model links fund size, fees, company count, cheque sizes, reserves, graduation, dilution and exit values, so you can see what the fund returns under each set of assumptions.

                ## Milestones
                1. An inputs tab holding every assumption in one place, each with a source note.
                2. A deployment tab showing initial and follow-on cheques by year.
                3. An outcomes tab that turns graduation, dilution and exit values into gross and net multiples.
                4. A one-page summary showing gross multiple, net multiple and capital deployed for the base case.
                5. The model reviewed by a second person who rebuilt one output by hand.

                ## Notes
                Keep inputs on one tab and never type a number into a formula. When the model is wrong later, you will want to find the assumption in seconds.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working construction model with inputs, deployment, outcomes and summary tabs, checked by a second person who reproduced one output independently."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Sketch the four tabs and the links between them on one page"
                - "Build the inputs tab using the figures from the earlier foundation projects"
                - "Build the deployment and outcomes tabs and link them to the inputs"
                - "Ask a colleague to rebuild the base case gross multiple by hand"
            - name: Return-the-fund maths by exit value
              description: |-
                ## Purpose
                A single question tests most venture portfolio plans: what exit value would one company need to return the whole fund at your expected ownership at exit? Working that number out for your fund, and comparing it with how often companies at your stage reach it, tells you whether the plan is ambitious or impossible.

                ## Milestones
                1. Expected ownership at exit calculated from entry ownership and planned dilution.
                2. The exit value needed for one company to return the fund, and to return it three times, written down.
                3. Those exit values compared with the count of exits that size in your sector and region over a decade.
                4. A short note on whether the plan needs more ownership, a smaller fund or a different stage.

                ## Notes
                Founders find this number useful too: it explains why a fund passes on a good business that cannot plausibly reach the fund's return-the-fund exit value.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written return-the-fund exit value for your fund, compared against a count of real exits that size in your market, with a conclusion recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate expected ownership at exit from entry ownership and your dilution assumptions"
                - "Divide fund size by that ownership to find the return-the-fund exit value"
                - "Count exits of that size in your sector and region over the last ten years"
                - "Write a paragraph on what the comparison means for the plan"
            - name: Construction assumptions register with sources
              description: |-
                ## Purpose
                Graduation rates, step-ups, time between rounds, loss ratios and exit multiples all come from somewhere, and six months later nobody remembers where. A register listing each assumption, its value, its source and the date checked makes the model defensible to partners and LPs and easy to update.

                ## Milestones
                1. Every model input listed in the register with its current value.
                2. A source for each value: your own data, a named dataset, or partner judgement labelled as such.
                3. The date each assumption was last checked.
                4. The weakest three assumptions flagged for better data.

                ## Notes
                Be explicit when a number is judgement. A labelled guess is useful; an unlabelled guess dressed as data is how models lose credibility.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register covering every model input with value, source and check date, and the three weakest assumptions flagged."
                cadence: rolling
              tasks:
                - "Copy every input from the model's inputs tab into a register"
                - "Write the source and date beside each value"
                - "Flag the three assumptions with the thinnest evidence"
                - "Recheck every source in the assumptions register @recurring(yearly)"
            - name: Deployment pacing plan by year
              description: |-
                ## Purpose
                Most funds aim to make new investments over three to four years and keep the rest for follow-ons, but deals do not arrive evenly. A year-by-year pacing plan for new companies and dollars deployed gives you an early warning when you are investing too fast in a hot market or too slowly to build a full portfolio.

                ## Milestones
                1. A target number of new investments for each year of the investment period.
                2. Target capital deployed per year, split between initial and follow-on cheques.
                3. Upper and lower bands for each year beyond which the partners discuss pace.
                4. The pacing plan linked into the construction model.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A yearly pacing plan for new investments and capital deployed, with upper and lower bands, linked into the construction model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the length of the investment period from the draft fund terms"
                - "Spread the target company count across those years"
                - "Set upper and lower bands for each year"
                - "Link the pacing plan to the deployment tab of the model"
            - name: Monthly reserves ledger by company
              description: |-
                ## Purpose
                Reserves exist as a number in a model until someone writes down how much is earmarked for each company. A monthly ledger of reserves held, spent and released by company shows the true unallocated pool and stops the fund from promising the same money twice.

                ## Milestones
                1. A ledger listing every portfolio company with reserves earmarked, spent and remaining.
                2. An unallocated reserves figure that reconciles to the fund's undrawn capital.
                3. Reserves released from written-off or stalled companies recorded with the date.
                4. The ledger reviewed monthly and attached to the partner meeting pack.

                ## Notes
                Earmarked is not committed. Mark which amounts are firm commitments and which are planning allocations, so the pool is not overstated or understated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reserves ledger by company, reconciled to undrawn capital, updated every month for six months in a row."
                cadence: rolling
              tasks:
                - "Set up the ledger columns for earmarked, spent, released and remaining"
                - "Fill in each company from the model and the latest round documents"
                - "Update the reserves ledger and reconcile it to undrawn capital @recurring(monthly:12)"
                - "Release reserves from written-off companies and note the date"
            - name: Quarterly reforecast of the construction model
              description: |-
                ## Purpose
                Any model built before the first investment is wrong by the fifth. Updating it each quarter with actual cheques, actual ownership and the latest round marks turns it from a fundraising exhibit into the tool that tells you how much room is left and what the remaining capital must do.

                ## Milestones
                1. Actual initial and follow-on cheques replacing planned ones in the model.
                2. Current fully diluted ownership entered for every company.
                3. Remaining capital re-planned across the expected number of new companies and reserves.
                4. A one-page change note listing what moved since last quarter and why.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly reforecasts completed, each with actuals loaded and a one-page change note filed."
                cadence: cyclic
              tasks:
                - "Export the latest cheques and ownership from the fund's records"
                - "Reforecast the construction model with actuals and write the change note @recurring(quarterly)"
                - "Re-plan the remaining capital across new companies and reserves"
                - "Share the change note with the partners before the next partner meeting"
            - name: Deployment pace tracker against plan
              description: |-
                ## Purpose
                Pace drifts quietly: three quick deals in a strong quarter can pull a year's budget forward, and a slow spell can leave the fund short of companies at the end of the investment period. Tracking actual deployment against the pacing plan every month makes drift visible while there is still time to adjust.

                ## Milestones
                1. A monthly log of new investments and capital deployed against the pacing plan.
                2. A simple chart showing actual against plan bands.
                3. Any breach of the bands raised at the next partner meeting.
                4. A year-end summary of pace with lessons for the following year.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly pace log kept for twelve months, with every band breach recorded and discussed at a partner meeting."
                cadence: rolling
              tasks:
                - "Create the pace log with plan and actual columns for each month"
                - "Log new investments and capital deployed against plan @recurring(monthly:20)"
                - "Raise any band breach on the next partner meeting agenda"
                - "Write a short year-end summary of deployment pace"
            - name: Ownership and dilution tracker across the portfolio
              description: |-
                ## Purpose
                Entry ownership gets the attention, but returns depend on ownership at exit, after option pool top-ups and every later round. A tracker showing entry, current and projected exit ownership for each company shows where dilution is running ahead of plan and which stakes are worth defending.

                ## Milestones
                1. Entry and current fully diluted ownership recorded for every company.
                2. Projected exit ownership calculated from the model's dilution assumptions.
                3. Actual dilution per round compared with the assumption, by stage.
                4. The dilution assumption updated when the evidence clearly differs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An ownership tracker with entry, current and projected exit stakes for every company, updated each quarter for a year."
                cadence: rolling
              tasks:
                - "Pull entry ownership for every company from the closing documents"
                - "Update current ownership after each round from the latest cap tables @recurring(quarterly)"
                - "Compare actual dilution per round with the model assumption"
                - "Note which companies are diluting faster than planned"
            - name: Concentration and exposure dashboard
              description: |-
                ## Purpose
                Good deals cluster: a fund can find itself with half its capital in one sector or one city without anyone deciding that. A dashboard of exposure by sector, stage, geography and single company, measured against limits the partners set, shows concentration while it is still a choice.

                ## Milestones
                1. Exposure limits agreed for sector, geography and single-company concentration.
                2. A dashboard showing current exposure by cost and by latest mark against each limit.
                3. Single-company concentration checked against any limit in the fund documents.
                4. Exceptions to limits recorded with a partner's reasoning.

                ## Notes
                Some single-company limits are set in the fund documents. Confirm the wording with counsel rather than relying on a summary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dashboard of exposure by sector, stage, geography and single company against agreed limits, refreshed each quarter with exceptions recorded."
                cadence: rolling
              tasks:
                - "Agree concentration limits with the partners and note any set in the fund documents"
                - "Build the dashboard from the reserves ledger and ownership tracker"
                - "Refresh exposure by sector, stage and geography @recurring(quarterly)"
                - "Record a reason for each exception to a limit"
            - name: Monthly construction slot at the partner meeting
              description: |-
                ## Purpose
                Partner meetings tend to discuss deals one at a time, which is how portfolios drift away from their plan. Ten minutes a month looking at pace, reserves and concentration together means every new deal is judged against what the fund can still afford to do.

                ## Milestones
                1. A standing ten-minute portfolio construction item on the monthly partner agenda.
                2. A one-page pack showing pace, unallocated reserves and concentration.
                3. Decisions and open questions from each slot recorded.
                4. Six months of slot notes kept in one place.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly partner meetings that include a construction slot, each with a one-page pack and recorded decisions."
                cadence: rolling
              tasks:
                - "Ask the managing partner to add a standing construction item to the agenda"
                - "Design the one-page construction pack"
                - "Prepare the construction pack before the partner meeting @recurring(monthly:5)"
                - "Record decisions and open questions after each meeting"
            - name: Round size and valuation benchmark watch
              description: |-
                ## Purpose
                Cheque bands and dilution assumptions go stale as markets move; seed rounds grew sharply in some years and shrank in others. A short monthly look at round sizes and valuations at your stage keeps the model's market inputs honest without a big annual scramble.

                ## Milestones
                1. Two or three trusted sources of round data at your stage chosen.
                2. A monthly note of median round size and post-money valuation by stage.
                3. A trigger agreed for when market movement should change cheque bands.
                4. Cheque bands revised when the trigger is hit.
              priority: low
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "A monthly benchmark note of round sizes and valuations kept for twelve months, with any cheque band changes it triggered recorded."
                cadence: rolling
              tasks:
                - "Pick two or three sources of round size and valuation data at your stage"
                - "Write the monthly benchmark note of round sizes and valuations @recurring(monthly:26)"
                - "Agree the movement that would trigger a cheque band review"
                - "Compare your own recent rounds with the market data"
            - name: Annual review of the construction plan
              description: |-
                ## Purpose
                Once a year the whole plan deserves a fresh look: whether the company count, cheque sizes, reserves and stage mix still make sense given what the portfolio and the market have done. A written annual review, kept with the earlier ones, becomes the record of how and why the strategy changed.

                ## Milestones
                1. Each foundation assumption compared with the year's actual data.
                2. A list of changes proposed to count, cheque sizes, reserves or stage mix.
                3. Partner decisions on each proposed change recorded.
                4. A dated annual review document filed with the previous ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated annual review comparing each foundation assumption with actuals, with partner decisions on every proposed change recorded."
                cadence: cyclic
              tasks:
                - "Book a half-day with the partners for the annual construction review @recurring(yearly)"
                - "Compare each foundation assumption with the year's actual numbers"
                - "Draft the proposed changes and circulate them a week ahead"
                - "File the agreed review alongside last year's"
            - name: Recycling and early proceeds tracker
              description: |-
                ## Purpose
                Where fund terms allow it, recycling early proceeds can add meaningful investable capital, but only within limits and time windows the documents set. Tracking each distribution that could be recycled, and what was actually reinvested, keeps the model's investable capital figure tied to real cash.

                ## Milestones
                1. The recycling terms summarised from the fund documents and confirmed with counsel or the administrator.
                2. A tracker of proceeds received, eligible for recycling and actually recycled.
                3. The model's investable capital updated from the tracker.
                4. Recycling headroom remaining shown in the partner pack.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A recycling tracker reconciled to the administrator's records, with remaining headroom reported and the model updated each quarter."
                cadence: rolling
              tasks:
                - "Summarise the recycling terms and ask counsel to confirm the summary"
                - "Set up the tracker with received, eligible and recycled columns"
                - "Reconcile the recycling tracker with the administrator's statements @recurring(quarterly)"
                - "Update investable capital in the model from the tracker"
            - name: Power law and venture return distributions
              description: |-
                ## Purpose
                Venture outcomes are not spread around an average: in most funds a small share of companies produces most of the returns and many return less than cost. Understanding that shape properly, from published research and real fund data, changes how you think about company count, ownership and reserves.

                ## Milestones
                1. Three serious sources on venture return distributions read and summarised.
                2. A chart of an illustrative portfolio's outcomes sorted from largest to smallest.
                3. A written explanation of why the median company tells you little about fund returns.
                4. Two consequences for your own construction plan noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page note summarising three sources on venture return distributions, with an illustrative outcome chart and two implications for your plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose three sources on venture return distributions to read"
                - "Summarise each in half a page"
                - "Plot an illustrative portfolio's outcomes from largest to smallest"
                - "Write the two implications for your construction plan"
            - name: Monte Carlo simulation for fund outcomes
              description: |-
                ## Purpose
                One base case hides how often a portfolio built your way returns less than the money in. Learning to run a simple Monte Carlo simulation, drawing outcomes for each company thousands of times, shows the spread of fund results and how it shifts when you change count or ownership.

                ## Milestones
                1. An outcome distribution per company defined with probabilities for loss, modest return and outlier.
                2. A simulation running at least five thousand fund outcomes in a spreadsheet or notebook.
                3. Results shown as the chance of returning below 1x, above 3x and above 5x net.
                4. The simulation rerun at two other company counts and the differences written up.

                ## Notes
                The output is only as good as the distribution you feed it. Label the inputs as assumptions and avoid quoting the probabilities as forecasts.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working simulation of at least five thousand fund outcomes, with results at three company counts written up in one page."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write the outcome buckets and probabilities you will draw from"
                - "Build a simulation that draws outcomes for each company in the portfolio"
                - "Run five thousand fund outcomes and chart the distribution of net multiples"
                - "Rerun at two other company counts and write up the differences"
            - name: Graduation rates and loss ratios by stage
              description: |-
                ## Purpose
                How many seed companies raise a Series A, and how many A companies reach a B, drives both reserves and expected losses. Studying graduation and loss data by stage, and comparing it with your own portfolio or angel history, gives you numbers you can defend instead of borrowed rules of thumb.

                ## Milestones
                1. Published graduation rates between rounds gathered for your stage and region.
                2. Time between rounds noted from the same sources.
                3. Your own or your firm's historical graduation rates calculated where data exists.
                4. Model inputs updated with a note on where your numbers differ from the market.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of graduation rates, time between rounds and loss ratios by stage, from at least two sources plus your own history, feeding the model."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find two published datasets on graduation rates between rounds"
                - "Note the time between rounds and the share of companies that fail at each stage"
                - "Calculate graduation rates from your own past investments"
                - "Update the model's graduation and loss inputs with sources"
                - "Refresh graduation rates and loss ratios with the year's new rounds @recurring(yearly)"
            - name: Dilution maths through successive rounds
              description: |-
                ## Purpose
                Option pool expansions, new money and the occasional bridge all chip away at ownership, and the compounding surprises people. Working through dilution by hand for a few realistic paths, from seed to a late round, makes your exit ownership assumptions something you understand rather than a cell you trust.

                ## Milestones
                1. A worked example tracking one stake from seed through three later rounds with option pool top-ups.
                2. The same path recalculated with and without taking pro rata at each round.
                3. A typical dilution per round written down for each stage you model.
                4. The worked examples saved as a reference tab in the model.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worked dilution examples for at least three paths, with typical dilution per round by stage written into the model's reference tab."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out a seed stake and its ownership after an option pool top-up"
                - "Carry it through Series A, B and C with typical round sizes"
                - "Repeat the path assuming pro rata is taken at each round"
                - "Save the worked examples on a reference tab in the model"
            - name: Portfolio construction reading list
              description: |-
                ## Purpose
                Some of the best thinking on venture portfolio design sits in fund manager essays, LP research and a handful of books, scattered and uneven in quality. A curated reading list, worked through at one piece a month, builds a view that is your own rather than the last podcast you heard.

                ## Milestones
                1. A list of twelve pieces on portfolio construction from GPs, LPs and researchers.
                2. One piece read each month with a three-line note on what it changes for you.
                3. Points where sources disagree recorded side by side.
                4. Two ideas from the reading tested in your model.

                ## Notes
                Start from the **Reading queue** template. Include at least two LP-side pieces; they show what allocators actually check.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve portfolio construction pieces read over a year, each with a three-line note, and two ideas tested in the model."
                cadence: rolling
              tasks:
                - "Collect twelve pieces on venture portfolio construction from GPs, LPs and researchers"
                - "Read the next piece on the list and write a three-line note @recurring(monthly:16)"
                - "Record points where two sources disagree"
                - "Test one idea from the reading in the construction model"
            - name: Modelling time between rounds and capital timing
              description: |-
                ## Purpose
                Two portfolios with identical outcomes can differ widely in IRR and in when cash comes back, depending on how long companies take between rounds and to exit. Adding timing to the model shows when follow-on cheques will be called, when distributions might arrive and how a slower market stretches the fund's life.

                ## Milestones
                1. Months between rounds and time to exit set as inputs by stage.
                2. A quarterly cash flow of capital calls and distributions produced by the model.
                3. Net IRR shown alongside net multiple in the summary.
                4. A slow-market case with longer gaps between rounds run and compared.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A timing layer in the model producing quarterly calls and distributions, with net IRR shown and a slow-market case compared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Add months between rounds and time to exit as inputs by stage"
                - "Build a quarterly schedule of calls and distributions from those inputs"
                - "Add net IRR to the summary tab"
                - "Run a slow-market case with gaps between rounds doubled"
            - name: Reverse-engineering fund return paths
              description: |-
                ## Purpose
                Published case studies, LP reports and fund manager write-ups occasionally show which companies drove a fund's result. Rebuilding two or three of those return paths in your model teaches you what had to go right, how much came from one company, and how the same fund would look with different reserves.

                ## Milestones
                1. Two or three public fund case studies with company-level outcomes chosen.
                2. Each rebuilt in your model with its count, cheque sizes and outcomes.
                3. The share of returns from the top one and top three companies calculated for each.
                4. A note on what each case suggests for your own plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two public fund cases rebuilt in the model, with top-company return shares calculated and lessons written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find two fund case studies that disclose company-level outcomes"
                - "Rebuild the first case in your model"
                - "Calculate the share of returns from the top one and top three companies"
                - "Write what each case suggests for your own plan"
            - name: Concentrated versus diversified portfolio decision
              description: |-
                ## Purpose
                Twenty companies with high ownership or sixty with smaller stakes is a real fork, and each choice changes your sourcing, support model and the odds of catching an outlier. Modelling both and writing a decision, with the conditions that would change it, settles an argument that otherwise resurfaces at every partner meeting.

                ## Milestones
                1. Two portfolio designs modelled at the same fund size: concentrated and diversified.
                2. The distribution of outcomes compared for each design.
                3. Practical consequences listed: partner time, sourcing volume, board seats and ownership.
                4. A written decision with the conditions that would reopen it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between concentrated and diversified designs, backed by modelled outcome distributions and practical consequences."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Model a concentrated and a diversified design at the same fund size"
                - "Compare the outcome distributions side by side"
                - "List what each design means for partner time and sourcing volume"
                - "Write the decision and what would make you revisit it"
            - name: Lead or follow strategy and its ownership consequences
              description: |-
                ## Purpose
                Leading rounds usually brings higher ownership, a board seat and more work, while following lets a small fund see more deals with less control over terms. Deciding where your fund sits, and modelling what that means for entry ownership, makes the cheque bands and support promises consistent.

                ## Milestones
                1. Typical ownership when leading and when following at your stage written down.
                2. The model run with your planned mix of led and followed deals.
                3. Partner capacity for board seats compared with the number of led deals.
                4. A recorded decision on the target share of led rounds.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded target share of led rounds, supported by modelled ownership and a check against partner board capacity."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List your last ten rounds as led or followed with the ownership achieved"
                - "Model the fund at three different shares of led rounds"
                - "Count the board seats the partners can realistically hold"
                - "Record the target share of led rounds"
            - name: Stage mix across pre-seed, seed and Series A
              description: |-
                ## Purpose
                Mixing stages spreads risk but changes everything downstream: cheque sizes, loss rates, reserves and how long capital is tied up. Choosing a deliberate mix, and modelling it, avoids the common drift where a seed fund ends up writing pre-seed cheques because they are easier to win.

                ## Milestones
                1. A target share of capital and companies for each stage.
                2. Stage-specific cheque sizes, graduation rates and reserves set in the model.
                3. The blended outcome compared with a single-stage plan.
                4. The chosen mix added to the strategy one-pager.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target stage mix by capital and company count, modelled against a single-stage plan and written into the strategy one-pager."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a target share of companies and capital for each stage"
                - "Set stage-specific cheque, graduation and reserve inputs in the model"
                - "Compare the blended plan with a single-stage plan"
                - "Add the agreed stage mix to the strategy one-pager"
            - name: Sector focus versus generalist exposure decision
              description: |-
                ## Purpose
                Focusing on one sector can sharpen sourcing and support, but it also ties the whole fund to one market's cycle and exit appetite. Testing what happens to the model when your chosen sector has a weak decade, and writing a decision on how much non-core exposure to allow, puts the trade-off on paper.

                ## Milestones
                1. Core sectors and the maximum share of capital outside them defined.
                2. A model case where the core sector's exit values fall by a third.
                3. The effect on net multiple of that case written down.
                4. A recorded decision on sector focus and non-core allowance.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded sector focus decision with a non-core capital limit, backed by a modelled weak-sector case."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Define the core sectors and a proposed non-core limit"
                - "Run a case with core sector exit values a third lower"
                - "Write the effect on net multiple"
                - "Record the sector focus decision with the partners"
            - name: Fund-level reserve allocation policy
              description: |-
                ## Purpose
                Without a policy, reserves flow to whichever founder asks first or whichever partner argues hardest. A fund-level policy setting how reserves are budgeted between tiers of companies, when unused reserves are released, and who can reassign them, keeps the pool fair and the model believable.

                ## Milestones
                1. Tiers defined for planning purposes, with a reserve budget share for each.
                2. Rules written for releasing reserves from stalled or written-off companies.
                3. Authority to reassign reserves between companies agreed.
                4. The policy adopted by the partners and referenced in the reserves ledger.

                ## Notes
                This sets the budget. Each individual follow-on cheque still gets its own decision and written rationale when the round comes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written reserve allocation policy with tiers, release rules and reassignment authority, adopted by the partners and linked to the ledger."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft planning tiers and a reserve budget share for each"
                - "Write the rules for releasing reserves from stalled companies"
                - "Agree who can move reserves between companies"
                - "Adopt the policy and add a reference to it in the reserves ledger"
            - name: Opportunity fund or SPV sleeve for later rounds
              description: |-
                ## Purpose
                Once winners raise large rounds, a seed fund's reserves cannot keep pace, and some managers add an opportunity fund or deal-by-deal SPVs. Working out what such a sleeve would do to the core fund's construction, conflicts and partner time comes before any conversation with LPs about it.

                ## Milestones
                1. The gap between reserves and likely pro rata needs in your top companies estimated.
                2. Options compared: larger reserves, an opportunity fund or SPVs.
                3. Conflict and allocation questions listed for fund counsel.
                4. A recorded decision on whether to pursue a sleeve now, later or never.

                ## Notes
                Opportunity vehicles raise conflict and allocation issues between funds. Treat counsel's view as the gate, not an afterthought.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on an opportunity sleeve, based on an estimated reserves gap and an options comparison, with counsel questions logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate the pro rata need in your three strongest companies over two rounds"
                - "Compare larger reserves, an opportunity fund and SPVs on one page"
                - "List the conflict and allocation questions for fund counsel"
                - "Record the decision and the date you will revisit it"
            - name: Re-underwriting an off-plan portfolio mid-fund
              description: |-
                ## Purpose
                Halfway through deployment, many funds find they are ahead on pace, behind on ownership or short of reserves. Re-underwriting the remaining capital as if starting fresh, with the portfolio you actually hold, turns quiet anxiety into a short list of concrete changes.

                ## Milestones
                1. The gaps between plan and actual listed: pace, count, ownership and reserves.
                2. Remaining capital re-planned from today's position.
                3. Two or three concrete changes agreed, such as fewer new companies or larger reserves.
                4. The changes communicated to the team and reflected in the model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A re-underwriting note listing plan gaps, a re-planned use of remaining capital and the agreed changes, reflected in the model."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every gap between the original plan and today's portfolio"
                - "Re-plan remaining capital from the current position"
                - "Ask the agent to draft a one-page note of the gaps and proposed changes"
                - "Agree the changes with the partners and update the model"
            - name: Downturn stress test of the construction plan
              description: |-
                ## Purpose
                Funds built in easy markets meet harder ones: rounds get smaller and slower, graduation drops and exits stall. Stressing the plan with longer gaps between rounds, lower graduation and more bridge rounds shows whether reserves would hold and which companies would be left without support.

                ## Milestones
                1. A downturn case with explicit changes to graduation, round timing and bridge frequency.
                2. Reserves demand under the downturn compared with reserves held.
                3. The main risks recorded with owners and responses.
                4. A decision on whether to hold more reserves now.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented downturn case with reserves demand compared to reserves held, a risk register and a recorded decision on reserve levels."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the downturn assumptions for graduation, timing and bridge rounds"
                - "Run the downturn case and compare reserves demand with reserves held"
                - "Record the main risks with an owner and a response each"
                - "Decide with the partners whether to raise the reserve ratio"
                - "Rerun the downturn case with the latest portfolio @recurring(yearly)"
            - name: Portfolio construction answers for LP diligence
              description: |-
                ## Purpose
                Experienced LPs ask the same hard questions: why this many companies, why this ownership, how reserves are set and what happens if the fund closes smaller. Preparing written answers and a single construction exhibit before meetings means the model supports the fundraise instead of being explained live and badly.

                ## Milestones
                1. A list of the construction questions LPs commonly ask.
                2. A written answer to each, consistent with the model.
                3. One construction exhibit showing count, cheque sizes, reserves and return paths.
                4. Two practice sessions with a friendly LP or adviser.

                ## Notes
                Show ranges and assumptions, not promised returns. Any figure shown to prospective investors should be cleared with fund counsel first.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written answers to the common LP construction questions and one exhibit, cleared by counsel and rehearsed in two practice sessions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the construction questions LPs have asked you or peers"
                - "Write an answer to each that matches the model"
                - "Build one construction exhibit and send it to counsel for review"
                - "Run two practice sessions with a friendly LP or adviser"
            - name: First close portfolio plan reset
              description: |-
                ## Purpose
                Many first-time managers hold a first close well below target size and start investing immediately. Resetting cheque sizes, count and reserves for the capital actually committed, with a plan for what changes at final close, stops early deals being sized for a fund that may not arrive.

                ## Milestones
                1. The model rerun at first close commitments.
                2. Cheque sizes and reserves for early deals set against first close capital.
                3. A written plan for how count and reserves change at each likely final close size.
                4. The reset shared with the partners before the first investment.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first close version of the model with early cheque sizes and reserves set, plus a written plan for each likely final close size."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Rerun the model at first close commitments"
                - "Set cheque sizes and reserves for the first deals"
                - "Write how count and reserves change at three final close sizes"
                - "Share the reset with the partners before the first investment"
            - name: Final close resizing of the model
              description: |-
                ## Purpose
                Final close fixes the fund size, and with it the investable capital that every later decision depends on. Rebuilding the model at the final number, and checking that companies backed before final close are still sized sensibly, gives the fund one agreed plan for the rest of its life.

                ## Milestones
                1. Investable capital recalculated at final close size.
                2. Company count, cheque bands and reserves reset for the final fund.
                3. Pre-final close investments checked against the new cheque bands.
                4. The final close model saved as the baseline version.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A baseline model at final close size with count, cheque bands and reserves reset and early investments checked against them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Recalculate investable capital at the final close size"
                - "Reset count, cheque bands and reserves in the model"
                - "Check each early investment against the new cheque bands"
                - "Save and label the final close model as the baseline"
            - name: Last new investments checkpoint
              description: |-
                ## Purpose
                As the investment period nears its end, the fund has room for only a few more new companies, and each one competes with reserves for existing winners. A checkpoint about a year before the end sets exactly how many new slots remain and what reserves must cover first.

                ## Milestones
                1. Remaining new investment slots calculated from capital and reserves.
                2. Reserves needed for existing companies over the next two rounds confirmed.
                3. Partners agreed on criteria for the final new investments.
                4. A date set after which no new companies are added.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A recorded number of remaining new slots, confirmed reserves for existing companies and an agreed last date for new investments."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate remaining capital after confirmed reserves"
                - "Work out how many new companies that capital can support"
                - "Agree criteria for the last new investments with the partners"
                - "Set and record the last date for new investments"
            - name: End of investment period construction review
              description: |-
                ## Purpose
                When the investment period ends, the portfolio is fixed and the job becomes supporting it with what is left. A review comparing the final portfolio with the original plan, and a reserves plan for the remaining years, is also the most useful document you will have when designing the next fund.

                ## Milestones
                1. Final company count, cheque sizes and ownership compared with the original plan.
                2. Remaining reserves allocated across companies for the rest of the fund's life.
                3. Three lessons for the next fund written down.
                4. The review filed with the original construction plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written review comparing final portfolio with plan, a reserves plan for remaining years and three lessons for the next fund."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull final count, cheques and ownership from the model"
                - "Compare them with the original construction plan"
                - "Allocate remaining reserves for the rest of the fund's life"
                - "Write three lessons for the next fund's construction"
            - name: Angel portfolio construction for personal cheques
              description: |-
                ## Purpose
                Founders and operators who angel invest often write cheques one at a time, on enthusiasm, and discover years later that ten companies is too few to expect a winner. A personal plan setting a total budget, a cheque size, a target count and a pace turns occasional bets into a portfolio you can reason about.

                ## Milestones
                1. A total angel budget you could lose entirely without changing your life, agreed with your financial adviser.
                2. A cheque size and target number of companies over a set number of years.
                3. A small reserve set aside for follow-ons, or a decision to hold none.
                4. A simple log of every cheque with date, amount and ownership.

                ## Notes
                Angel investing is high risk and illiquid for many years. Set the budget with an adviser who knows your whole financial position, and check the tax treatment in your country with a tax professional.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written personal angel plan with budget, cheque size, target count, pace and follow-on rule, plus a cheque log kept up to date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the total amount you are prepared to lose across all angel cheques"
                - "Divide it into a cheque size and a target number of companies"
                - "Decide whether to hold a follow-on reserve and how much"
                - "Review your angel plan and cheque log against the targets @recurring(yearly)"
            - name: Solo GP micro fund portfolio design
              description: |-
                ## Purpose
                A solo GP running a fund of a few million cannot lead rounds, sit on many boards or write large follow-ons, so the portfolio has to fit one person's time. Designing for that reality, with small cheques, a broad count and a light reserves policy, makes the plan believable to LPs and survivable for you.

                ## Milestones
                1. Weekly hours available for sourcing, diligence and support estimated honestly.
                2. Company count and cheque size set to fit those hours.
                3. A light reserves policy, such as reserving only for the top few companies.
                4. The design summarised on one page for LP conversations.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page solo GP portfolio design with count, cheque size and reserves policy sized to a stated weekly time budget."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Log a typical week's hours for sourcing, diligence and support"
                - "Set a company count and cheque size that fit those hours"
                - "Write a light reserves policy for the top few companies"
                - "Block a monthly hour to compare actual time use with the design @recurring(monthly:3)"
            - name: Rolling fund or annual vehicle portfolio design
              description: |-
                ## Purpose
                Rolling funds and annual vehicles raise capital in smaller instalments, so the investable pot changes every quarter or year and reserves are harder to plan. Designing cheque sizes and reserves around the minimum capital you can count on, rather than the hoped-for total, avoids overcommitting early.

                ## Milestones
                1. A conservative estimate of capital per period based on committed subscriptions.
                2. Cheque size and deals per period set against that estimate.
                3. A reserves approach chosen for a structure with changing capital.
                4. A quarterly check of subscriptions against the plan set up.

                ## Notes
                Structure, subscription terms and marketing rules for these vehicles vary by platform and jurisdiction. Confirm them with counsel or the platform before modelling.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rolling fund portfolio design based on committed subscriptions, with cheque size, deal count and reserves approach per period recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Total the committed subscriptions for the next four periods"
                - "Set cheque size and deals per period from that total"
                - "Choose how reserves will work as capital changes"
                - "Compare subscriptions with the portfolio plan each quarter @recurring(quarterly)"
            - name: Founder's guide to how your investors build portfolios
              description: |-
                ## Purpose
                Founders raising money hear passes that make no sense until they see the investor's construction maths: a fund needing 15 percent ownership, a firm with no reserves left, a check size that cannot fit your round. Learning to read a fund's size, stage and reserves from public information lets you target investors whose portfolio your company fits.

                ## Milestones
                1. Fund size, stage and typical cheque noted for each investor on your target list.
                2. Each investor's likely ownership target and return-the-fund exit value estimated.
                3. Investors whose construction does not fit your round moved down the list.
                4. Questions about reserves and follow-on capacity added to your first-meeting notes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An investor target list annotated with fund size, cheque size, likely ownership target and fit, used to reorder outreach."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note fund size, vintage and stage for each investor on your list"
                - "Estimate each fund's ownership target from its typical cheque and round"
                - "Move investors whose construction does not fit to the bottom"
                - "Add a question on reserves and follow-on capacity to your meeting notes"
            - name: Taking over the firm's construction model as an associate
              description: |-
                ## Purpose
                Associates often inherit a construction model built by someone who has left, full of hard-coded numbers and unexplained tabs. Auditing it, documenting it and fixing the worst errors in the first month makes you the person partners trust with fund-level questions, not just deal work.

                ## Milestones
                1. Every tab of the inherited model mapped with its purpose and links.
                2. Hard-coded numbers and broken links listed and fixed or flagged.
                3. A short user guide written for the next person.
                4. A walkthrough given to a partner, with their questions answered in writing.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An audited model with a tab map, a list of fixes made and a short user guide, walked through with a partner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Map every tab of the model and how they link"
                - "List hard-coded numbers and broken links"
                - "Fix what you can and flag the rest for a partner"
                - "Write a two-page user guide and walk a partner through it"
            - name: Construction for funds in smaller exit markets
              description: |-
                ## Purpose
                Funds in the Caribbean, Africa, smaller European markets or regional US cities face lower and rarer exits, so the return-the-fund exit value matters more. Designing for smaller outcomes, with higher ownership, smaller fund size or a share of capital in companies that can pay dividends or be sold to regional buyers, keeps the plan honest about where exits come from.

                ## Milestones
                1. Exits in your market over a decade counted by size and type of buyer.
                2. A realistic exit value distribution for your market set in the model.
                3. Ownership targets and fund size tested against that distribution.
                4. Any currency and exit route constraints listed for your advisers.

                ## Notes
                Cross-border structures, currency controls and exit taxes vary widely. Take them to counsel and tax advisers in each jurisdiction rather than modelling from assumption.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A market-specific exit distribution in the model, with ownership and fund size tested against it and a decision recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count exits in your market over ten years by size and buyer type"
                - "Set a market-specific exit value distribution in the model"
                - "Test ownership targets and fund size against it"
                - "List currency and exit constraints to raise with your advisers"
            - name: Correlated outcomes in the fund simulation
              description: |-
                ## Purpose
                Simple simulations treat every company as independent, but companies in the same sector and vintage tend to rise and fall together, which widens the range of fund outcomes. Adding a market factor to the simulation gives a more honest picture of downside risk, especially for focused funds.

                ## Milestones
                1. A market or sector factor added that shifts all companies' outcome odds together.
                2. Results compared with the independent version.
                3. The effect on the chance of returning below 1x net written down.
                4. A note on whether the finding changes concentration limits.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A correlated version of the fund simulation compared with the independent one, with the change in downside probability recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Add a shared market factor that shifts each company's outcome odds"
                - "Run the correlated simulation alongside the independent one"
                - "Compare the chance of returning below 1x net"
                - "Write whether the result should tighten concentration limits"
            - name: Multi-stage fund construction with a growth sleeve
              description: |-
                ## Purpose
                Funds that invest from seed through growth stages need two construction logics in one vehicle: many small early bets and a few large later cheques with lower loss rates. Modelling the sleeves separately, then together, shows how much capital the growth sleeve can absorb before it dominates the fund's outcome.

                ## Milestones
                1. Separate early and growth sleeve assumptions for count, cheque size and outcomes.
                2. A combined model showing each sleeve's contribution to net returns.
                3. A limit on the growth sleeve's share of capital agreed.
                4. Rules for moving early companies into the growth sleeve written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A combined model with separate early and growth sleeves, an agreed growth sleeve capital limit and written rules for moving companies between sleeves."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set early and growth sleeve assumptions on separate input tabs"
                - "Combine the sleeves and show each one's share of net returns"
                - "Agree a maximum share of capital for the growth sleeve"
                - "Write rules for when an early company moves into the growth sleeve"
            - name: Planned secondary sales in the construction model
              description: |-
                ## Purpose
                Venture funds often wait well over a decade for exits, and some managers plan partial secondary sales of strong positions to return cash earlier. Modelling when and how much you might sell, and what it does to DPI, net multiple and concentration, lets the partners decide in advance rather than under LP pressure.

                ## Milestones
                1. Conditions for considering a partial secondary sale written down.
                2. Two or three sale scenarios modelled with an assumed discount to the latest mark.
                3. The effect on DPI, net multiple and concentration compared.
                4. A partner view on secondary sales recorded in the construction plan.

                ## Notes
                Secondary sales involve transfer restrictions, company consent and possible conflicts. Counsel and the company's documents decide what is possible.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Modelled secondary sale scenarios with effects on DPI, net multiple and concentration, and a partner view recorded in the plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the conditions under which you would consider a partial sale"
                - "Model two or three sale scenarios with a discount to the latest mark"
                - "Compare DPI, net multiple and concentration across the scenarios"
                - "Record the partners' view in the construction plan"
            - name: Construction versus selection review of a past fund
              description: |-
                ## Purpose
                When a fund ends well or badly, it is tempting to credit or blame deal picking alone. Rerunning the same companies with different cheque sizes, reserves and counts separates what construction choices contributed from what selection did, and gives the next fund's design an evidence base.

                ## Milestones
                1. The past fund's actual companies and outcomes loaded into the model.
                2. Alternative constructions run: equal cheques, no reserves, double reserves.
                3. The difference in net multiple attributed to construction choices.
                4. Three construction lessons written for the next fund.

                ## Notes
                This is an internal learning exercise. Any track record shown to investors follows separate presentation rules; check with counsel before reusing these figures externally.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A review of a past fund rerun under at least three alternative constructions, with the construction effect quantified and three lessons written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Load the past fund's companies and outcomes into the model"
                - "Rerun with equal cheques, no reserves and double reserves"
                - "Quantify the net multiple difference from construction choices"
                - "Write three construction lessons for the next fund"
            - name: Next fund construction plan from lessons learned
              description: |-
                ## Purpose
                Fund II should not be Fund I with a bigger number. Drafting the next construction plan from the reviews, the reserves ledger and the actual graduation data shows LPs and partners that the strategy has learned from evidence, and catches the size creep that often weakens ownership.

                ## Milestones
                1. Lessons gathered from the annual reviews and the end of investment period review.
                2. A draft next fund plan with count, cheque sizes, ownership and reserves.
                3. Each change from the current fund explained in one sentence.
                4. A check that the proposed fund size still allows the target ownership at realistic exits.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A draft next fund construction plan with every change from the current fund explained and fund size tested against target ownership."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Gather lessons from every annual and end of period review"
                - "Draft count, cheque sizes, ownership and reserves for the next fund"
                - "Explain each change from the current fund in one sentence"
                - "Test the proposed fund size against target ownership and realistic exits"
            - name: Written portfolio construction philosophy
              description: |-
                ## Purpose
                Experienced managers can explain their construction in two minutes and point to a document that says the same thing. Writing your philosophy down, with the beliefs behind count, ownership and reserves and the evidence for each, sharpens your own thinking and gives LPs, partners and new hires one consistent account.

                ## Milestones
                1. A three to five page document stating your construction beliefs and the reasons for each.
                2. Evidence from your own data cited for every major belief.
                3. Feedback from two experienced investors or LPs incorporated.
                4. A version agreed for internal use, and a shorter version cleared by counsel if shared outside.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written construction philosophy citing your own evidence, reviewed by two experienced investors, with any external version cleared by counsel."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the five beliefs that drive your count, ownership and reserves"
                - "Write a paragraph and supporting evidence for each belief"
                - "Send the draft to two experienced investors or LPs for comment"
                - "Agree the internal version and ask counsel to clear any external one"
---

# VC Portfolio Construction

This area is for the venture investor who has to turn a fund size into a portfolio: the emerging manager drawing up Fund I, the associate handed the firm's construction model, and the angel or founder who wants their own cheques to add up to something. It starts with the foundations (strategy, investable capital, company count, cheque sizes, ownership and reserves, built into a first model), then the operating routines that keep the plan and the real portfolio in step, the return maths worth learning properly, the big design decisions, the dated checkpoints in a fund's life, variants for angels, solo GPs, rolling funds and smaller markets, and finally advanced modelling and a written construction philosophy.

What repeats is a monthly reserves ledger and deployment check, a monthly construction slot at the partner meeting, a quarterly reforecast of the model with ownership and concentration updates, and a yearly review of the whole plan against what actually happened. The Metrics log, Meeting notes, Reading queue and Risk register templates pair with the projects that name them. All of this is planning and record keeping for your own fund or portfolio: fund terms, tax and securities questions belong with fund counsel and your advisers, and nothing here is a view on any company or security. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
