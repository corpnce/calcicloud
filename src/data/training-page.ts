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

export const cloudCourseReferences = [
  {
    provider: 'AWS',
    note: 'Certification-aligned AWS course references from foundational through specialty and professional paths.',
    courses: [
      { name: 'AWS Certified Cloud Practitioner', level: 'Foundational', focus: 'Cloud concepts and entry-level AWS fluency.' },
      { name: 'AWS Certified Solutions Architect - Associate', level: 'Associate', focus: 'Designing reliable cloud architectures.' },
      { name: 'AWS Certified Solutions Architect - Professional', level: 'Professional', focus: 'Advanced architecture and multi-service design decisions.' },
      { name: 'AWS Certified DevOps Engineer - Professional', level: 'Professional', focus: 'Delivery automation, operations, and DevOps practices.' },
      { name: 'AWS Certified SysOps Administrator - Associate', level: 'Associate', focus: 'Operational administration and systems management.' },
      { name: 'AWS Certified Developer - Associate', level: 'Associate', focus: 'Application development and service integration.' },
      { name: 'AWS Certified Big Data - Specialty', level: 'Specialty', focus: 'Data workloads, analytics patterns, and managed data services.' },
      { name: 'AWS Certified Advanced Networking - Specialty', level: 'Specialty', focus: 'Advanced networking, connectivity, and traffic design.' },
      { name: 'AWS Certified Security - Specialty', level: 'Specialty', focus: 'Security controls, identity, governance, and protection patterns.' },
      { name: 'AWS Certified Machine Learning - Specialty', level: 'Specialty', focus: 'Machine learning workflows and model-oriented cloud services.' },
      { name: 'AWS Certified Alexa Skill Builder - Specialty', level: 'Specialty', focus: 'Voice-assistant skill design and implementation.' },
    ],
  },
  {
    provider: 'Azure',
    note: 'Azure course references grouped by fundamentals, associate, expert, and specialty-style progression.',
    courses: [
      { name: 'Azure AI Fundamentals', level: 'Fundamentals', focus: 'Introductory AI concepts and Azure AI service awareness.' },
      { name: 'Azure Data Fundamentals', level: 'Fundamentals', focus: 'Core data concepts, analytics basics, and cloud data foundations.' },
      { name: 'Azure Fundamentals', level: 'Fundamentals', focus: 'Cloud models, Azure services, and platform basics.' },
      { name: 'Azure Administrator Associate', level: 'Associate', focus: 'Managing Azure environments, resources, and operational controls.' },
      { name: 'Azure AI Engineer Associate', level: 'Associate', focus: 'Building, managing, and deploying AI solutions on Azure.' },
      { name: 'Azure Data Engineer Associate', level: 'Associate', focus: 'Data pipelines, storage patterns, and analytical datasets.' },
      { name: 'Azure Data Scientist Associate', level: 'Associate', focus: 'Data science workflows, ML tooling, and analytical experimentation.' },
      { name: 'Azure Database Administrator Associate', level: 'Associate', focus: 'Operational database administration for Azure data services.' },
      { name: 'Azure Developer Associate', level: 'Associate', focus: 'Cloud application development, compute, and storage integration.' },
      { name: 'Azure Enterprise Data Analyst Associate', level: 'Associate', focus: 'Designing and deploying analytics solutions.' },
      { name: 'Azure Network Engineer Associate', level: 'Associate', focus: 'Planning, implementing, and maintaining Azure network solutions.' },
      { name: 'Azure Security Engineer Associate', level: 'Associate', focus: 'Cloud security management, controls, and secure operations.' },
      { name: 'Azure Stack Hub Operator Associate', level: 'Associate', focus: 'Operating Azure Stack Hub across platform and infrastructure services.' },
      { name: 'Azure DevOps Engineer Expert', level: 'Expert', focus: 'DevOps delivery across infrastructure, administration, and development.' },
      { name: 'Azure Solutions Architect Expert', level: 'Expert', focus: 'Designing cloud and hybrid solutions with advanced operational depth.' },
    ],
  },
  {
    provider: 'GCP',
    note: 'GCP course references organized by foundational, associate, and professional learning paths.',
    courses: [
      { name: 'Cloud Digital Leader', level: 'Foundational', focus: 'Cloud concepts, GCP services, business use cases, and platform vocabulary.' },
      { name: 'Cloud Engineer', level: 'Associate', focus: 'Deploying and maintaining GCP projects and core cloud resources.' },
      { name: 'Cloud Architect', level: 'Professional', focus: 'Designing and managing production-grade cloud architecture.' },
      { name: 'Cloud Database Engineer', level: 'Professional', focus: 'Database planning, deployment, operations, and optimization.' },
      { name: 'Cloud Developer', level: 'Professional', focus: 'Building and deploying applications on GCP.' },
      { name: 'Data Engineer', level: 'Professional', focus: 'Data processing, analytics pipelines, and managed data platforms.' },
      { name: 'Cloud DevOps Engineer', level: 'Professional', focus: 'Delivery automation, reliability, and operational improvement.' },
      { name: 'Cloud Security Engineer', level: 'Professional', focus: 'Security architecture, controls, and cloud protection practices.' },
      { name: 'Cloud Network Engineer', level: 'Professional', focus: 'Network architecture, connectivity, and traffic management.' },
      { name: 'Workspace Administrator', level: 'Professional', focus: 'Workspace operations, administration, and user management.' },
      { name: 'Machine Learning Engineer', level: 'Professional', focus: 'ML systems, model workflows, and production AI delivery.' },
    ],
  },
] as const;
