---
type: Bibliography
title: "Generative AI at Work"
description: "Landmark field study measuring the causal effect of a generative AI tool on 5,172 customer-support workers, finding 15% productivity gains concentrated among lower-skill employees and evidence of durable AI-facilitated learning."
tags:
  - ai-economy-labor
  - ai-cognition-psychology
  - generative-ai
  - labor-productivity
  - skill-formation
  - worker-learning
  - human-ai-collaboration
  - customer-service
  - ai-work
status: stable
reference:
  source_type: paper
  full_title: "Generative AI at Work"
  authors:
    - "Brynjolfsson, Erik"
    - "Li, Danielle"
    - "Raymond, Lindsey"
  primary_author: "Brynjolfsson"
  year: 2025
  venue: "The Quarterly Journal of Economics"
  url: "https://academic.oup.com/qje/article/140/2/889/7990658"
  doi: "10.1093/qje/qjae044"
  date_captured: 2026-02-23
  topics:
    - ai-economy-labor
    - ai-cognition-psychology
  tags:
    - generative-ai
    - labor-productivity
    - skill-formation
    - worker-learning
    - human-ai-collaboration
    - customer-service
    - ai-work
  relevance: >
    This paper is a primary empirical anchor for the ai-economy-labor topic: it provides
    causal, large-scale field evidence on how generative AI reshapes skill demands, productivity
    distribution, and the nature of work. It is equally relevant to ai-cognition-psychology
    because its durable-learning finding — workers retain AI-acquired skills even when the
    tool is unavailable — directly addresses how AI tools change the way workers think
    and develop expertise over time.
  key_insights:
    - "AI assistance delivered a 15% average productivity gain (issues resolved per hour) but concentrated gains among lower-skill and less-experienced workers — challenging the historical pattern of skill-biased technical change."
    - "AI-facilitated learning is durable: workers retain productivity improvements even during AI outages, suggesting the tool changes actual skills rather than creating rote reliance."
    - "High-skill workers exhibit small quality declines and increase adherence to AI suggestions over time, raising long-run questions about the erosion of tacit knowledge that feeds future AI training data."
    - "AI adoption drives textual convergence: lower-skill agents begin communicating more like high-skill agents, compressing intra-firm communication inequality."
    - "The human experience of work improves: customer sentiment rises by ~0.5 standard deviations, escalation requests fall 25%, and attrition drops ~40% among newer agents."
    - "Productivity gains are largest for moderately rare problems — where AI has adequate training data but human agents lack sufficient experience — defining an economic sweet-spot for AI augmentation."
    - "A ratchet-effect risk exists: managers may adjust performance targets upward if too many agents reach AI-boosted goals, potentially eroding wage gains over time."
  bibtex: |
    @article{brynjolfsson2025generativeai,
      author  = {Brynjolfsson, Erik and Li, Danielle and Raymond, Lindsey},
      title   = {Generative {AI} at Work},
      journal = {The Quarterly Journal of Economics},
      year    = {2025},
      volume  = {140},
      number  = {2},
      pages   = {889--942},
      doi     = {10.1093/qje/qjae044},
      url     = {https://academic.oup.com/qje/article/140/2/889/7990658}
    }
  chicago: 'Brynjolfsson, Erik, Danielle Li, and Lindsey Raymond. 2025. "Generative AI at Work." *The Quarterly Journal of Economics* 140 (2): 889–942. https://doi.org/10.1093/qje/qjae044.'
  metadata:
    status: read
    priority: high
    notes: "Open Access (CC BY-NC). Advance Access published February 4, 2025. Replication data available at Harvard Dataverse: https://doi.org/10.7910/DVN/FSV1X7"
---

# Executive Summary

This paper by Brynjolfsson, Li, and Raymond presents the first large-scale field study of a deployed generative AI tool in a real workplace, using a staggered rollout design to establish causal effects on productivity, learning, and work experience. The study follows 5,172 customer-support agents at a Fortune 500 software firm using an AI chat assistant built on GPT-3. The tool monitors customer conversations in real time and offers agents suggested responses; agents may accept, edit, or ignore suggestions at will.

The central finding is a 15% average increase in the number of customer issues resolved per hour. This aggregate number, however, conceals striking heterogeneity: less experienced and lower-skilled workers improve by up to 30%, while the most skilled and experienced agents see marginal quality declines. The pattern inverts decades of evidence on skill-biased technical change — generative AI appears to function as a "leveling" technology that disseminates the tacit knowledge of top performers to everyone else.

A second major contribution is evidence of durable AI-facilitated learning. By exploiting exogenous software outages that temporarily deprived workers of AI access, the authors show that workers retain productivity gains relative to their pre-AI baseline even without the tool — and that these gains are strongest among workers who followed AI suggestions most closely. This suggests AI is not merely a crutch but an active vehicle for skill acquisition.

Beyond productivity, the paper documents improvements in the human experience of work: customer sentiment improves by approximately half a standard deviation, customer requests to escalate to a manager fall by about 25%, and attrition — particularly among newer workers — drops substantially. These effects are consistent with AI reducing the emotional labour burden of contact-centre work.

The authors are candid about the study's limitations: it covers a single firm, a single occupation, and a particular product environment. They flag important open questions about long-run equilibrium effects (will firms reduce headcount or raise performance targets?), about the health of future AI models if top performers contribute fewer novel examples, and about the aggregate labour-market consequences that are beyond the scope of this data.

## Key Contributions

- Causal field evidence (staggered difference-in-differences) that generative AI raises customer-service productivity by 15% on average with a compressing, not widening, skill distribution.
- Durable-learning mechanism documented through natural experiment using AI outages, showing AI drives genuine skill formation rather than dependency.
- Evidence that AI improves both the objective and subjective experience of work — customer tone, manager escalations, and agent attrition — alongside productivity gains.
- Conceptual contribution to the "experience-curve acceleration" literature: AI-treated agents with 2 months of tenure perform as well as untreated agents with 6+ months.

## Relevance to This Repository

This paper is one of the clearest empirical anchors for the repo's core question: what changes when AI enters real work? It shows that AI can raise productivity while also changing the distribution of skill, the flow of tacit knowledge, and the experience of work itself. That makes it essential to a project that wants to move beyond hype and ask what mechanisms are actually shifting.

The paper is also useful because it shows a transformation inside the firm, not just at the level of the model or the market. The worker-level gains are real, but so are the changes in communication patterns, onboarding speed, and expert behavior. That is exactly the kind of evidence the repository needs in order to connect labor, cognition, and organizational change.

## Connections to Current Repo

- [Labor Market Impacts of AI: A New Measure and Early Evidence](2026-massenkoff-labor-market-impacts-ai.md): early labor-market signals that complement the firm-level effects here.
- [From Future of Work to Future of Workers: The AI-as-Amplifier Paradox](2026-ehsan-ai-amplifier-paradox.md): documents the long-run risk that productivity gains hide expertise erosion.
- [Generative AI as a Non-Convex Supply Shock](2026-zhang-genai-supply-shock.md): a market-level account of bifurcation that helps interpret why gains may concentrate.
- [Marx va avoir raison (IA et lutte des classes)](2026-lordon-marx-va-avoir-raison.md): a political-economic reading of who benefits when AI raises output.

## Methodology / Approach

The study uses a staggered difference-in-differences design with agent and time fixed effects, exploiting the rolling deployment of the AI tool across teams. The primary outcome is issues resolved per hour; secondary outcomes include handle time, resolution rate, and chat volume. The authors construct a pre-treatment skill index from agents' productivity relative to peers. Productivity heterogeneity is estimated by interacting treatment with skill quintile and tenure bins. Durable learning is identified via a natural experiment using unplanned AI software outages. Communication analysis uses text embeddings (cosine similarity) and sentiment scoring (SiEBERT). The robustness of the staggered DiD design is validated against Callaway–Sant'Anna and Sun–Abraham estimators.

## Key Insights and Takeaways

### AI as a Leveling Technology
Unlike earlier waves of IT and robotics — which tended to complement high-skill workers — this generative AI tool disproportionately benefits lower-skill and less-experienced workers. It achieves this by effectively encoding and distributing the tacit knowledge of top performers: AI suggestions are trained on high-quality human responses, making that expertise accessible to everyone. This has direct implications for skill-formation and labor-market polarization.

### The Durable Learning Effect
Workers who gain access to AI are not merely borrowing its intelligence. They appear to internalize what it teaches. The outage experiment isolates genuine learning from rote reliance: workers who had greater AI exposure and followed its suggestions more closely show larger durable gains. This positions AI as an accelerated apprenticeship mechanism, compressing the experience curve in ways that could reshape how firms think about onboarding and training.

### The High-Skill Paradox
Top performers see slight quality declines and, over time, increase their adherence to AI suggestions even as those suggestions marginally hurt their output. This raises a systemic risk: if the most skilled workers contribute fewer original solutions and more AI-echoed ones, the training data feeding the next model generation degrades. The long-run quality of AI recommendations depends on top workers continuing to generate novel, high-quality examples — which the current incentive structure does not encourage.

### Work Experience as an Outcome
The paper takes seriously the quality of work experience as a dependent variable, not just productivity. Customer sentiment improvements (~0.5 SD), escalation declines (~25%), and attrition reductions (~40% for newer workers) suggest that well-designed AI tools can improve working conditions in high-stress, high-churn environments. This reframes the AI-at-work debate from pure efficiency to worker welfare.

## Connections to Current Repo

- [Labor Market Impacts of AI: A New Measure and Early Evidence](2026-massenkoff-labor-market-impacts-ai.md): early labor-market signals that complement the firm-level effects here.
- [From Future of Work to Future of Workers: The AI-as-Amplifier Paradox](2026-ehsan-ai-amplifier-paradox.md): documents the long-run risk that productivity gains hide expertise erosion.
- [Generative AI as a Non-Convex Supply Shock](2026-zhang-genai-supply-shock.md): a market-level account of bifurcation that helps interpret why gains may concentrate.
- [Marx va avoir raison (IA et lutte des classes)](2026-lordon-marx-va-avoir-raison.md): a political-economic reading of who benefits when AI raises output.

## Open Questions and Further Exploration

- Does the leveling effect hold across occupations beyond customer service? Does it extend to knowledge work (legal analysis, consulting, software development) where tacit expertise is more complex?
- What are the long-run equilibrium effects on wages? The ratchet-effect concern (firms raising performance targets) could neutralize worker gains — do later studies observe this?
- How does the durable learning effect interact with the model retraining cycle? If high performers reduce novel contributions to training data, does future AI quality degrade?
- Can the durable learning mechanism be deliberately engineered as an onboarding tool, or is it incidental to this specific deployment context?
- What ethical obligations do firms have when AI assistance reduces attrition — is this a genuine improvement in wellbeing, or does it mask underlying stressors?

## Quotes and Highlights

> "Access to AI assistance increases worker productivity, as measured by issues resolved per hour, by 15% on average, with substantial heterogeneity across workers."
>
> — Page 889, Abstract

> "Less experienced and lower-skilled workers improve both the speed and quality of their output, while the most experienced and highest-skilled workers see small gains in speed and small declines in quality."
>
> — Page 889, Abstract

> "Treated agents with two months of tenure perform just as well as untreated agents with more than six months of tenure."
>
> — Page 891

> "We also find that experience with AI recommendations can lead to durable learning. Using data on software outages—periods when the AI's output is unexpectedly interrupted due to technical issues—we find that workers see productivity gains relative to their pre-AI baseline even when AI recommendations are unavailable."
>
> — Page 891

> "In our data, top workers increase their adherence to AI recommendations, even though those recommendations marginally decrease the quality of their conversations. Yet with fewer original contributions from the most skilled workers, future iterations of the AI model may be less effective in solving new problems."
>
> — Page 893
