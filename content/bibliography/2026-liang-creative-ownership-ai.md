---
type: Bibliography
title: "Creative Ownership in the Age of AI"
description: "Formal economic theory of creative ownership when AI tools participate in the creative process, analyzing infringement criteria using closure operators and distinguishing light-tail from heavy-tail creative domains."
tags:
  - ai-economy-labor
  - ai-intellectual-property
  - ai-identity-digital-self
  - copyright
  - intellectual-property
  - generative-ai
  - creative-ownership
  - infringement-criterion
  - closure-operators
  - economic-theory
  - light-tails
  - heavy-tails
status: stable
reference:
  full_title: "Creative Ownership in the Age of AI"
  authors:
    - "Liang, Annie"
    - "Lu, Jay"
  primary_author: "Liang"
  year: 2026
  venue: "arXiv (econ.TH)"
  url: "https://arxiv.org/abs/2602.12270"
  doi: "10.48550/arXiv.2602.12270"
  date_captured: 2026-02-16
  topics:
    - ai-economy-labor
    - ai-intellectual-property
    - ai-identity-digital-self
  tags:
    - copyright
    - intellectual-property
    - generative-ai
    - creative-ownership
    - infringement-criterion
    - closure-operators
    - economic-theory
    - light-tails
    - heavy-tails
  relevance: "Proposes a novel counterfactual criterion for AI-generated content infringement—a work infringes if it could not have been generated without that work in the training corpus—and formalizes generative systems as closure operators. Reveals a sharp asymptotic dichotomy: under light-tailed creative processes, infringement concerns vanish as corpora grow (permissible ratio → 1); under heavy-tailed innovation with breakthrough works, violations persist indefinitely. Foundational for understanding how IP regimes must adapt when AI can imitate style without copying content, directly relevant to ongoing litigation like Andersen v. Stability AI and NYT v. OpenAI."
  key_insights:
    - "Existing copyright law's 'substantial similarity' test is ill-suited to generative AI, which can closely imitate style without copying content—the paper proposes a counterfactual criterion: infringement occurs if the output could not have been generated without the original work in training data"
    - "The asymptotic dichotomy is striking: in creative domains with incremental innovation (light-tailed distributions), individual works become dispensable as corpora grow and infringement claims weaken; in domains with breakthrough innovations (heavy-tailed distributions like Pareto), even large corpora preserve essential works at the frontier"
    - "Closure operators (preservation, monotonicity, idempotence) provide a unifying mathematical framework for generative systems—encompassing convex hull (interpolation), splice (feature recombination), and box (composed) generators—without specifying internal algorithms"
    - "The permissible set exhibits superadditivity: when creators form coalitions, their combined violation set can exceed the sum of individual violations—strengthening collective bargaining and suggesting group licensing commands a premium"
    - "Works in the interior of creative space (surrounded by similar works) quickly become dispensable training data; works at the frontier in sparsely populated regions may remain essential even as corpora grow—genre fiction loses protection faster than avant-garde art"
    - "The counterfactual criterion can be implemented through machine unlearning techniques (approximating removal effects without full retraining) or evidentiary proxies (comparing outputs across independently trained systems with/without the plaintiff's work)"
    - "The framework extends beyond copyright to any context where attribution or appropriation matters—academic citation ethics, digital actor likeness rights, recognition claims for creative contributions—providing a general approach to assessing dependence"
  bibtex: |
    @article{liang2026creative,
      author = {Liang, Annie and Lu, Jay},
      title = {Creative Ownership in the Age of AI},
      journal = {arXiv preprint arXiv:2602.12270},
      year = {2026},
      month = {February},
      url = {https://arxiv.org/abs/2602.12270},
      doi = {10.48550/arXiv.2602.12270},
      note = {econ.TH; cs.AI; cs.GT}
    }
  chicago: "Liang, Annie, and Jay Lu. 2026. \"Creative Ownership in the Age of AI.\" arXiv preprint arXiv:2602.12270. https://arxiv.org/abs/2602.12270."
  related:
    - link: "2026-zhang-genai-supply-shock.md"
      relationship: "Zhang and Zhang describe how generative AI bifurcates markets; Liang and Lu explain how that same generation capacity changes ownership and infringement logic in creative industries."
    - link: "2025-fowler-regenerative-software.md"
      relationship: "Fowler's regenerative-software argument treats code as disposable output; Liang and Lu ask what that means for the ownership status of generated material."
    - link: "2026-lordon-marx-va-avoir-raison.md"
      relationship: "Lordon's class analysis helps interpret the bargaining and political economy consequences of the ownership rules Liang and Lu formalize."
    - link: "2025-brynjolfsson-generative-ai-at-work.md"
      relationship: "Brynjolfsson et al. show how AI changes work inside firms; Liang and Lu extend the same transformation to the legal status of creative output."
  metadata:
    status: "read"
    priority: "high"
    notes: "Landmark theoretical economics paper applying closure operator formalism to generative AI and copyright. The light-tail/heavy-tail dichotomy has profound implications for different creative industries. Machine unlearning and influence functions mentioned as implementation approaches. Potential connection to issues #237 (vibe coding/OSS ownership) and #223 (AI work intensification)."
---

# Executive Summary

Liang and Lu's "Creative Ownership in the Age of AI" addresses a fundamental tension in contemporary copyright law: generative AI systems can **closely imitate the style of existing works without copying their content**, a capability now central to ongoing litigation including *Andersen v. Stability AI* (artists claiming style replication) and *The New York Times v. OpenAI* (training on copyrighted corpus). The paper argues that existing infringement doctrine—which requires "substantial similarity" between works—is **ill-suited to this setting** where AI generates outputs that are stylistically dependent on training data without reproducing identifiable passages.

The paper makes three primary contributions. First, it proposes a **new counterfactual criterion for infringement**: a generated output infringes on an existing work if and only if **it could not have been generated without that work in the training corpus**. This shifts the legal question from "does the output resemble the original?" to "did the output essentially depend on the original?" Second, it formalizes generative systems as **closure operators**—mappings from a corpus of existing works to a set of generable outputs that satisfy preservation (existing works remain generable), monotonicity (larger corpora expand outputs), and idempotence (applying the generator to its output produces nothing new). This abstraction encompasses various generative processes (interpolation, feature recombination, composition) while remaining agnostic to internal algorithms. Third, it **characterizes the evolution of permissibility** as creative corpora grow large, revealing a sharp asymptotic dichotomy based on the tail behavior of creative innovation.

The **permissible set** consists of all outputs that can be generated from a corpus and would still be generable if any specific existing work were removed—these outputs do not infringe because they have multiple generative paths. The **violation set** consists of outputs whose generability essentially depends on some particular work in the corpus. The paper shows that the permissible set is monotone (expanding corpus enlarges it) and stable (generating from permissible works yields only permissible works), capturing the principle that infringement cannot arise from combining non-infringing works. Non-emptiness is guaranteed when the corpus size exceeds the generator's Radon number (for convex-valued generators, this is d+2 where d is the dimension of the creative space).

The paper's main asymptotic result—**Theorem 1**—establishes that when creative processes exhibit **light tails** (extreme innovations are exponentially rare, as in Normal or exponential distributions), the ratio of permissible to generable creations converges to one almost surely as the corpus grows. Intuitively, the corpus becomes sufficiently rich that **multiple generative paths exist to any output**, and no single work remains essential. Infringement becomes a vanishing concern in saturated creative markets with incremental innovation. By contrast, under **heavy-tailed innovation** (breakthrough works regularly occur, as in Pareto distributions), even very large corpora contain works that are genuinely distinct. A positive measure of outputs may remain violations indefinitely because the most recent breakthrough always defines a substantial portion of the violation set.

This dichotomy has profound implications for different creative industries. In domains with **gradual innovation**—possibly including genre fiction, commercial movies, mainstream music—individual works quickly become dispensable as training data accumulate, and copyright protection weakens. Works in the interior of the creative space, surrounded by many similar works, lose their essentiality first. In domains characterized by **breakthrough innovation**—including avant-garde art, literary fiction, paradigm-shifting academic work—creators of frontier works can maintain legitimate infringement claims even as corpora grow large because their contributions remain essential for generating outputs near the creative frontier.

The paper also extends the framework to **collections of protected works**, showing that violations exhibit **superadditivity**: when multiple creators form a coalition (class action), their combined violation set can exceed the sum of individual violations. This strengthens collective bargaining positions and suggests that group licensing should command a premium over individual licenses.

The counterfactual criterion can be operationalized through **machine unlearning** techniques (approximating the effect of removing training data without full retraining) or **evidentiary proxies** (comparing outputs across independently trained systems to see if the plaintiff's work was necessary). The framework applies beyond copyright to any setting where attribution or appropriation matters—academic citation, digital actor likeness rights, or recognition claims for creative contributions.

# Key Contributions

## 1. Counterfactual Infringement Criterion

Traditional copyright asks whether an output is "substantially similar" to a protected work. The paper proposes a fundamentally different question: **could the output have been generated without that work in the training corpus?** If the answer is no, then the work is a violation—it essentially depends on the original creation.

This counterfactual criterion can be **more or less restrictive** than existing doctrines:
- **More restrictive**: An output that clearly is not a copy may still be a violation if its generation critically depends on a specific training work. Downstream generators (fine-tuned models, composed systems) can produce violations even if they don't directly train on copyrighted material.
- **Less restrictive**: Close resemblance does not necessarily imply violation if the output can be generated through multiple alternative paths. Training on copyrighted material is permitted so long as no output essentially depends on any particular work.

The criterion is intended as a **complement, not substitute** for existing doctrine—effective regulation may require simultaneous enforcement of training restrictions, output similarity tests, and counterfactual dependence.

## 2. Closure Operator Formalization

Generative systems are modeled as **closure operators** g: C → C mapping corpora to generable outputs, satisfying:
1. **Preservation**: C ⊆ g(C) — existing works remain generable
2. **Monotonicity**: C ⊆ D implies g(C) ⊆ g(D) — larger corpora expand outputs
3. **Idempotence**: g(g(C)) = g(C) — applying the generator to its output produces nothing new

This abstraction is **algorithm-agnostic** and encompasses diverse generative processes:
- **Convex hull generator** g_conv(C) = conv(C): produces outputs as weighted averages of existing works (linear interpolation)
- **Splice generator** g_splice(C): recombines features from existing works (e.g., Shakespeare's diction + Dickinson's meter)
- **Box generator** g_box(C) = g_conv(g_splice(C)): composition of convex hull and splice

The paper shows that **convex-valued generators** (where g(C) is always convex) are precisely those that can be written as g_conv ∘ g, and that the convex hull generator is minimal among all convex-valued generators.

## 3. Structural Properties of Permissible Set

**Proposition 1** establishes that the permissible set p_g(C) satisfies:
- **Monotonicity**: Expanding the corpus weakly expands the permissible set (adding source works cannot introduce new dependencies)
- **Stability**: Generating from permissible works yields only permissible works (infringement cannot arise from combining non-infringing works)

**Proposition 2** provides a **sufficient condition for non-emptiness** based on the Radon number R(g)—the smallest corpus size guaranteeing two disjoint subsets with overlapping generable outputs. For convex-valued generators in R^d, R(g) = d+2 by Radon's Theorem.

**Proposition 3** characterizes **comparative statics**:
- Adding a permissible work leaves the permissible set unchanged
- Adding a violation strictly expands the permissible set (creates alternative generative path)
- Adding a genuine innovation (not previously generable) has ambiguous effects

## 4. Asymptotic Dichotomy (Theorem 1)

For **convex-valued** and **uniformly lower semicontinuous** generators, when new works X_i are drawn i.i.d. from a distribution with **uniform light tails** (radial component has increasing hazard rate, angular component has uniform lower bound on density):

**lim_(n→∞) Vol(p_g(C_n)) / Vol(g(C_n)) = 1 almost surely**

The **permissible ratio converges to one**—infringement becomes a vanishing concern. Intuitively, when innovation is incremental, the corpus becomes rich enough that every generable creation has multiple paths leading to it; removing any single work leaves the creation still reachable.

**Counterpoint (Example 9)**: Under **heavy-tailed innovation** (e.g., Pareto distribution), the permissible ratio remains bounded below one indefinitely. The n-th breakthrough has non-negligible probability of dramatically exceeding all previous works, and the most recent extreme point always defines a substantial violation set.

This dichotomy implies:
- **Genre fiction, commercial movies, mainstream music** (incremental innovation): Individual works lose protection as corpora grow; regulation has bite only in early stages of creative domains
- **Avant-garde art, literary fiction, paradigm-shifting research** (breakthrough innovation): Frontier works retain legitimate infringement claims even in mature markets

## 5. Extension to Collections and Coalitions

The paper extends from individual works to **collections of protected works** (e.g., author's complete catalog, class action aggregating many creators). The permissible set is smaller in **richer collections** (more protected works or larger groups).

**Corollary 2 (Superadditivity)**: For any two protected sets A, B:
**v_{A,B}(C) ⊆ v_{A∪B}(C)** with strict inclusion possible

The violation of a union can exceed the union of individual violations—when creators form coalitions, their combined violation set strictly expands. This strengthens collective bargaining and suggests group licensing should command a premium.

# Methodology

**Approach**: Theoretical economics paper using mathematical formalization and asymptotic analysis. Builds on closure operator theory from convex geometry and extreme value theory from probability.

**Framework components**:
1. **Geometric representation**: Creations as points in R^d, corpora as (Borel measurable) subsets
2. **Generator formalization**: Closure operators satisfying preservation, monotonicity, idempotence
3. **Infringement definition**: Counterfactual criterion based on essential dependence
4. **Stochastic process**: i.i.d. draws X_i from distributions with varying tail behavior
5. **Asymptotic analysis**: Studying limit behavior of Vol(p_g(C_n))/Vol(g(C_n)) as n→∞

**Key mathematical tools**:
- **Radon's Theorem** (convex geometry): Any d+2 points in R^d contain disjoint subsets with overlapping convex hulls
- **Extreme value theory**: Characterizing tail behavior (light vs. heavy tails) via hazard rates and convergence of maxima
- **Uniform lower semicontinuity**: Ensuring generative frontier doesn't depend too sensitively on precise training point locations

**Illustrative examples**: Literary text generation (Cormac McCarthy imitation via GPT-5.2), novels, cartoons/images (Stable Diffusion), digital actors (SAG-AFTRA strike context), convex combinations of poems (Shakespeare + Dickinson)

**Limitations acknowledged**:
- Takes generator and distribution as given (doesn't endogenize strategic creator behavior or firm R&D choices)
- Focuses on binary infringement determination (doesn't model litigation, licensing, or welfare analysis)
- Implementation requires machine unlearning or evidentiary inference (computational and legal challenges)

# Relevance to Repository Topics

## Relevance to This Repository

This paper is important for the repo because the AI transformation is also a transformation of ownership, attribution, and value capture. Liang and Lu provide a formal way to ask when a generated output depends on prior creative work in a way that should matter legally or economically.

That makes the source useful for the project's attempt to move from generic AI commentary to a structured account of mechanisms. It shows how AI can change the conditions under which creative labor is recognized and compensated.

## Connections to Current Repo

- [Generative AI as a Non-Convex Supply Shock](2026-zhang-genai-supply-shock.md): market bifurcation and the disappearance of the middle tier in creative markets.
- [Marx va avoir raison (IA et lutte des classes)](2026-lordon-marx-va-avoir-raison.md): political economy of who gets displaced and who captures value.
- [Regenerative Software - The Phoenix Architecture](2025-fowler-regenerative-software.md): disposable generation raises the question of what artifact is durable enough to own.
- [AI and the Global Productivity Divide](2025-chaar-ai-global-productivity-divide.md): structural asymmetry in who can participate in AI-driven value creation.
- [20 Million ChatGPT Logs: Judge Stein Affirms Discovery Order in In re OpenAI Copyright Litigation](../evidence/legal/2026-openai-copyright-md-l-chatgpt-logs-discovery.md): the discovery engine that will supply empirical evidence on whether outputs essentially depend on training works.
- [Getty Images v. Stability AI: UK High Court Rules on AI Training, Output, and Infringing Articles](../evidence/legal/2025-getty-v-stability-ai-ewhc-2863-ch.md): first UK authority testing the "model as infringing article" theory against the weights-store-no-copies fact.
- [Bartz v. Anthropic: Court Grants Final Approval to $1.5 Billion Authors' Copyright Settlement](../evidence/legal/2026-bartz-v-anthropic-settlement.md): the market-priced answer to what a training corpus costs when works are known to have been downloaded.
- [GEMA v. OpenAI: Munich Court Finds ChatGPT Reproduced German Song Lyrics](../evidence/legal/2025-gema-v-openai-lyrics-memorization.md): direct evidence of outputs that essentially depend on particular training works — the memorized-lyrics case.
- [Doe v. GitHub (Copilot): Ninth Circuit Weighs Whether §1202 Requires Identical Copies](../evidence/legal/2026-doe-v-github-copilot-open-source-cmi.md): the empirical test of code as a heavy-tailed domain where frontier works retain essentiality.
- [Richner, MediaNews, and Ogden Newspapers v. Microsoft & OpenAI: ~400 Local Publishers Sue Over Training Data](../evidence/legal/2026-richner-publishers-v-microsoft-openai.md): pleaded token-count figures as a concrete measure of corpus value, and a newspaper coalition illustrating superadditivity.
- [GEMA v. Suno: Munich Court Largely Grants the First Generative-Music Copyright Verdict](../evidence/legal/2026-gema-v-suno-music-verdict.md): a European court's memorization finding operationalizing the counterfactual criterion for music.
- [Encyclopaedia Britannica and Merriam-Webster v. OpenAI](../evidence/legal/2026-britannica-merriam-webster-v-openai.md): pleaded near-verbatim outputs as evidence that outputs essentially depend on training works.
- [GCC Adopts AI-Licensing Policy](../evidence/legal/2026-gcc-ai-policy-adoption.md): the essentiality/attribution question answered by commons governance rather than by courts.

## AI and Intellectual Property

The paper's core contribution is proposing a **new foundation for IP doctrine** adapted to generative AI's capabilities. Existing copyright law's "substantial similarity" test—developed for human-to-human copying—**breaks down when AI can replicate style without copying content**. The counterfactual criterion asks a different question: not "does the output resemble the input?" but "did the output essentially depend on the input?"

This reframes ongoing litigation:
- **Andersen v. Stability AI** (artists claiming style replication): Under Liang & Lu's criterion, outputs are violations if they could not have been generated without the plaintiff's works in training—even if they don't reproduce specific images
- **NYT v. OpenAI** (training on copyrighted corpus): The question shifts from "is training fair use?" to "do outputs essentially depend on NYT articles?"—outputs with multiple generative paths are permissible even if training included copyrighted material

The framework also **extends beyond copyright** to attribution and appropriation questions:
- **Digital actor likeness** (SAG-AFTRA context): Does a generated character essentially depend on a real person's voice/personality, even though identity isn't copyrighted?
- **Academic citation ethics**: Does a research output essentially depend on prior work that should be cited?
- **OSS licensing** (connection to issue #237): Does AI-generated code essentially depend on GPL-licensed training data?

The **machine unlearning** implementation path connects to emerging technical literature on making trained models "forget" specific training examples—transforming a theoretical legal criterion into a practical computational test.

## AI, Identity, and Digital Self

The question of **what constitutes creative ownership** when AI can imitate style connects to identity and authorship in an AI-mediated world. If style can be replicated without infringement under traditional doctrine, **what remains of creative identity?**

The paper's formalization reveals that identity-defining creative works—those at the **frontier** of creative space in sparsely populated regions—**retain their essentiality** even as corpora grow, precisely because they are distinctive. Generic works in crowded interior regions lose their identity-protecting function because they become dispensable.

This suggests a tension: **Copyright law may protect artistic identity only when that identity is genuinely distinctive** (frontier works in heavy-tailed domains) while offering minimal protection to established styles in mature genres (interior works in light-tailed domains). Creators whose identity is their style—not specific expressions—face erosion of ownership as AI systems learn to generate "in the style of" without essential dependence.

The **coalitional protection** result (superadditivity) offers a partial resolution: Even if individual works lose essentiality, **collective identity** (an author's complete oeuvre, an artistic movement's body of work) can maintain stronger infringement claims—suggesting identity might be better protected at group rather than individual-work level.

## Relevance to This Repository

This paper is important for the repo because the AI transformation is also a transformation of ownership, attribution, and value capture. Liang and Lu provide a formal way to ask when a generated output depends on prior creative work in a way that should matter legally or economically.

That makes the source useful for the project's attempt to move from generic AI commentary to a structured account of mechanisms. It shows how AI can change the conditions under which creative labor is recognized and compensated.

## Connections to Current Repo

- [Generative AI as a Non-Convex Supply Shock](2026-zhang-genai-supply-shock.md): market bifurcation and the disappearance of the middle tier in creative markets.
- [Marx va avoir raison (IA et lutte des classes)](2026-lordon-marx-va-avoir-raison.md): political economy of who gets displaced and who captures value.
- [Regenerative Software - The Phoenix Architecture](2025-fowler-regenerative-software.md): disposable generation raises the question of what artifact is durable enough to own.
- [AI and the Global Productivity Divide](2025-chaar-ai-global-productivity-divide.md): structural asymmetry in who can participate in AI-driven value creation.
- [20 Million ChatGPT Logs: Judge Stein Affirms Discovery Order in In re OpenAI Copyright Litigation](../evidence/legal/2026-openai-copyright-md-l-chatgpt-logs-discovery.md): the discovery engine that will supply empirical evidence on whether outputs essentially depend on training works.
- [Getty Images v. Stability AI: UK High Court Rules on AI Training, Output, and Infringing Articles](../evidence/legal/2025-getty-v-stability-ai-ewhc-2863-ch.md): first UK authority testing the "model as infringing article" theory against the weights-store-no-copies fact.
- [Bartz v. Anthropic: Court Grants Final Approval to $1.5 Billion Authors' Copyright Settlement](../evidence/legal/2026-bartz-v-anthropic-settlement.md): the market-priced answer to what a training corpus costs when works are known to have been downloaded.
- [GEMA v. OpenAI: Munich Court Finds ChatGPT Reproduced German Song Lyrics](../evidence/legal/2025-gema-v-openai-lyrics-memorization.md): direct evidence of outputs that essentially depend on particular training works — the memorized-lyrics case.
- [Doe v. GitHub (Copilot): Ninth Circuit Weighs Whether §1202 Requires Identical Copies](../evidence/legal/2026-doe-v-github-copilot-open-source-cmi.md): the empirical test of code as a heavy-tailed domain where frontier works retain essentiality.
- [Richner, MediaNews, and Ogden Newspapers v. Microsoft & OpenAI: ~400 Local Publishers Sue Over Training Data](../evidence/legal/2026-richner-publishers-v-microsoft-openai.md): pleaded token-count figures as a concrete measure of corpus value, and a newspaper coalition illustrating superadditivity.
- [GEMA v. Suno: Munich Court Largely Grants the First Generative-Music Copyright Verdict](../evidence/legal/2026-gema-v-suno-music-verdict.md): a European court's memorization finding operationalizing the counterfactual criterion for music.
- [Encyclopaedia Britannica and Merriam-Webster v. OpenAI](../evidence/legal/2026-britannica-merriam-webster-v-openai.md): pleaded near-verbatim outputs as evidence that outputs essentially depend on training works.
- [GCC Adopts AI-Licensing Policy](../evidence/legal/2026-gcc-ai-policy-adoption.md): the essentiality/attribution question answered by commons governance rather than by courts.

# Open Questions and Future Directions

1. **Endogenous creator behavior**: If creators anticipate how AI systems will use their works, how do they adjust what they produce? The paper conjectures creators might concentrate effort near the creative frontier rather than the interior, thickening distribution tails and sustaining larger violation sets.

2. **Social optimality**: What level of permissiveness maximizes welfare? A permissible ratio of one weakens ex ante creative incentives but maximizes AI's productive potential. What is the optimal tradeoff?

3. **Dynamic licensing markets**: How do licensing negotiations evolve as corpora grow and the permissible ratio changes? Does AI firm bargaining power systematically increase over time in light-tailed domains?

4. **Cross-domain empirical testing**: Can the light-tail/heavy-tail distinction be empirically tested across creative industries? Measuring tail behavior in literary fiction vs. genre fiction, avant-garde vs. commercial art could validate or challenge the model's predictions.

5. **Implementation challenges**: How accurately can machine unlearning approximate true counterfactual generability? What evidentiary standards should courts apply when comparing outputs across differently-trained systems?

6. **Strategic generator design**: Can AI firms design generators to minimize violation sets (e.g., by ensuring convexity and lower semicontinuity properties)? Does optimal generator design differ across light-tailed vs. heavy-tailed domains?

7. **Interaction with other IP doctrines**: How does the counterfactual criterion interact with fair use (training stage), moral rights (attribution), trademark (brand confusion), and right of publicity (likeness appropriation)?

# Cross-References

**Connection to issue #237** (vibe coding / OSS ownership): The counterfactual criterion applies to determining when AI-generated code essentially depends on GPL-licensed training data. If the code could not have been generated without GPL works in the training corpus, it may inherit GPL obligations even if it doesn't reproduce specific code snippets. The light-tail/heavy-tail distinction suggests common programming patterns (interior of code space) lose protection while novel algorithmic approaches (frontier) retain it.

**Connection to issue #223** (AI work intensification): As creative corpora grow and permissible ratios approach one in light-tailed domains, **individual creators' leverage diminishes**—they become dispensable training data. This may intensify competitive pressure and reduce compensation, connecting economic theory of infringement to lived experience of creative labor intensification under AI. The superadditivity result suggests collective organizing becomes more important as individual claims weaken.
