---
title: "Research"
permalink: /research/
author_profile: false
layout: single
wide_page: true
---

<div class="research-overview" markdown="1">

<p class="research-overview__lead">My research lies at the intersection of statistical learning theory and Bayesian statistics and focuses on equipping data-driven learning algorithms and inference procedures with state-of-the-art performance and safety guarantees.</p>

## Symmetry-Induced Statistic Recovery for Variational Inference

[My latest work](https://arxiv.org/abs/2604.18310) has focused on providing statistic-recovery guarantees for variational inference in the presence of symmetry. The central problem of variational inference is to approximate an intractable target distribution $$\mathbb{P}$$ from within a tractable family $$\mathcal{Q}$$ by minimising a statistical divergence:

$$\mathbb{Q}^\star \coloneqq \argmin_{\mathbb{Q} \in \mathcal{Q}} \ \mathcal{D}(\mathbb{P} \| \mathbb{Q}).$$

However, if the variational family is not rich enough to contain the true target, the variational problem is misspecified and the resulting approximation can be arbitrarily poor. In this work, we build a general theory of statistic recovery in variational inference in the presence of symmetry. In particular, we show that when the target distribution is invariant under a group of symmetries that the variational family respects, a unique variational minimiser inherits this invariance and recovers every symmetry-determined statistic. For example, variational inference in location–scale families exactly recovers the mean when the target and variational family exhibit even symmetry, and additionally recovers the covariance up to a multiplicative constant when they exhibit elliptical symmetry.

<img class="research-figure-image" src="/images/vi_even_elliptical_example.png" alt="Examples of statistic recovery under even and elliptical symmetry">

## The Pick-to-Learn Framework: Joint Design and Certification

<img class="research-float-image" src="/images/p2l_algo.png?v=3" alt="Flowchart of the Pick-to-Learn algorithm">



A core pillar of my research is Pick-to-Learn (P2L), a meta-algorithm for equipping flexible black-box models with strong generalisation guarantees. Existing certification approaches face a familiar trade-off. Test-set methods and split conformal prediction provide tight certificates but withhold a portion of the data from training, which degrades post-training performance. Complexity-based and PAC-Bayes bounds can use all available data for training but often yield loose or vacuous certificates for large models such as deep neural networks. P2L jointly uses the available data for training and certification, thus overcoming this fundamental trade-off. Given: 


- A dataset $$D = \{ z_1, \dots, z_N \}$$ sampled i.i.d. from some unknown $$\mathbb{P}$$,
- A learning algorithm $$L$$ mapping datasets to hypotheses $$h_D = L(D)$$,
- A binary loss $$\ell$$ such that

$$
\ell(h,z) =
\begin{cases}
1, & \text{if } h \text{ predicts } z \text{ incorrectly}, \\
0, & \text{otherwise}.
\end{cases}
$$

Pick-to-Learn initialises an empty training set $$T = \emptyset$$, and iteratively adds the most poorly predicted remaining point from $$D \setminus T$$ to $$T$$ and retrains $$h_T = L(T)$$, until all remaining points are correctly predicted by the model. This procedure turns any black-box learning algorithm into a stable compression scheme $$D \mapsto T$$, thus allowing the realised size of $$T$$ to determine a sharp, data-dependent certificate for the risk $$R(h) = \mathbb{P} \{ \ell(h, z) = 1 \}$$ of the learned model: for any $$\delta \in (0, 1)$$,

$$
\mathbb{P} \{  R(h_T) \le \varepsilon(|T|, N, \delta) \} \ge 1 - \delta.
$$

<div class="research-applications" markdown="1">
More recently, we applied the Pick-to-Learn framework to four cornerstones of data-driven control theory:


<img class="research-applications__image" src="{{ '/images/p2l_applications.png' | relative_url }}" width="1230" height="1070" alt="Pick-to-Learn applications: reachability, optimal control, safe control, and robust control">

- **Reachability analysis:** Construct a small-volume reachable set and bound the probability that a future terminal state lies outside it. 

- **Optimal control:** Design a cost-minimising policy and bound the probability that its cost exceeds a prescribed threshold under uncertain initial conditions and disturbances.

- **Safe control:** Design a policy that maximises the probability of completing a specified mission, such as a reach-avoid task, and provide a certified lower bound on its success probability. 

- **Robust control:** Design a state-feedback controller that minimises the closed-loop $$H_2$$ norm and bound the probability that this norm exceeds a learned threshold under uncertain system parameters.

Across these applications, our experiments demonstrate that P2L can simultaneously deliver tighter certificates and better-performing designs than established approaches, including conformal prediction, test-set methods, and PAC-Bayes bounds. By using all available data jointly for design and certification, the framework supports flexible synthesis algorithms while retaining rigorous guarantees on their outputs.

</div>

</div>
