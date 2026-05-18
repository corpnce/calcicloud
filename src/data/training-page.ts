export const trainingTracks = [
  {
    id: 'track-01',
    num: '01',
    title: 'The Cloud Architecture Studio',
    audience: 'Senior Engineers & Aspiring Architects',
    focus: 'Moving beyond single-provider patterns to Sovereign Multi-Cloud Architecture.',
    modules: [
      {
        name: 'Architecture First Principles',
        detail: 'Designing for failure, latency, and cost-sovereignty.',
      },
      {
        name: 'Advanced Networking',
        detail: 'Service Mesh (Istio/Linkerd) and Identity-based segmentation.',
      },
      {
        name: 'FinOps & Cloud Economics',
        detail: 'Real-time cost modeling as a design constraint.',
      },
    ],
    researchLab:
      'Deep dive into "Cloud-Exit" strategies and regional data residency compliance (GDPR/DPDP).',
  },
  {
    id: 'track-02',
    num: '02',
    title: 'DevOps Delivery & Platform Lab',
    audience: 'SREs & DevOps Teams',
    focus: 'Building the Internal Developer Platform (IDP).',
    modules: [
      {
        name: 'The Golden Path',
        detail: 'Abstracting K8s complexity for developer self-service.',
      },
      {
        name: 'Advanced GitOps',
        detail: 'Progressive delivery (Flagger/ArgoCD) with automated rollbacks.',
      },
      {
        name: 'Policy-as-Code',
        detail: 'Implementing OPA/Kyverno for automated guardrails.',
      },
    ],
    researchLab:
      'Transitioning from "Infrastructure as Code" to "Infrastructure as Software" using Pulumi and Crossplane.',
  },
  {
    id: 'track-03',
    num: '03',
    title: 'SRE & Cognitive Ops',
    audience: 'Platform Teams & Operations Managers',
    focus: 'Resilience through AIOps and Predictive Observability.',
    modules: [
      {
        name: 'The SLO Framework',
        detail: 'Translating metrics into business error budgets.',
      },
      {
        name: 'Incident Rituals',
        detail: 'AI-assisted root cause analysis and blameless post-mortems.',
      },
      {
        name: 'Chaos-Informed Testing',
        detail: 'Proactively breaking systems to prove reliability.',
      },
    ],
    researchLab:
      'Implementing Agentic AI for autonomous remediation of common infrastructure incidents.',
  },
] as const;

export const skillCheckRoles = [
  {
    id: 'junior-devops',
    label: 'Junior DevOps',
    trackId: 'track-02',
    rationale:
      'Start with the Golden Path, GitOps, and policy guardrails — the core toolkit for shipping safely at speed.',
  },
  {
    id: 'senior-engineer',
    label: 'Senior Engineer / Aspiring Architect',
    trackId: 'track-01',
    rationale:
      'Multi-cloud sovereignty, mesh networking, and FinOps-as-design are the differentiators at the architect tier.',
  },
  {
    id: 'sre',
    label: 'SRE / Platform Engineer',
    trackId: 'track-03',
    rationale:
      'SLOs, incident rituals, and chaos-informed testing map directly to operational ownership.',
  },
  {
    id: 'ops-manager',
    label: 'Operations Manager',
    trackId: 'track-03',
    rationale:
      'Cognitive Ops bridges reliability metrics to business error budgets — ideal for leadership of platform teams.',
  },
  {
    id: 'cto',
    label: 'CTO / Engineering Leader',
    trackId: 'track-01',
    rationale:
      'Begin with Architecture Studio for strategic stack decisions, then layer Delivery Lab and SRE tracks for your team maturity.',
  },
] as const;

export const ethicsPillars = [
  {
    title: 'Vendor Neutrality',
    detail: 'We teach the ecosystem (OpenTofu, Kubernetes, Prometheus), not just the vendor.',
  },
  {
    title: 'No Dead PowerPoints',
    detail: '80% of our track time is spent in terminals and IDEs, not slides.',
  },
  {
    title: 'Live Backlog Integration',
    detail: 'We encourage teams to bring their actual architectural bottlenecks into the workshop.',
  },
] as const;
