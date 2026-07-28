export interface OilGasService {
  id: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export interface OilGasProject {
  id: string;
  title: string;
  location: string;
  scope: string;
  image: string;
  year: string;
}

export const oilGasServices: OilGasService[] = [
  {
    id: "upstream",
    title: "Upstream Services",
    description:
      "Comprehensive upstream support spanning exploration logistics, drilling site preparation, wellhead installation, and production facility maintenance. We mobilise experienced personnel and equipment to remote field locations across the Niger Delta and onshore basins.",
    icon: "Drill",
    capabilities: [
      "Exploration support and logistics",
      "Drilling rig mobilisation and demobilisation",
      "Wellhead installation and maintenance",
      "Production facility operations support",
      "Mud logging and geological services coordination",
    ],
  },
  {
    id: "downstream",
    title: "Downstream Operations",
    description:
      "Reliable petroleum product distribution, loading terminal operations, and refinery support services for downstream operators across Nigeria. Our downstream team brings operational discipline and safety compliance to every engagement.",
    icon: "Fuel",
    capabilities: [
      "Petroleum product storage and distribution",
      "Loading terminal operations",
      "Refinery turnaround support",
      "Product quality testing and sampling",
      "NUPRC downstream compliance documentation",
    ],
  },
  {
    id: "pipeline",
    title: "Pipeline Engineering",
    description:
      "Full-lifecycle pipeline engineering services from installation through to decommissioning. Our pipeline engineers and NDT specialists carry out integrity assessments, corrosion management, and repair programmes for trunk and gathering lines.",
    icon: "Pipette",
    capabilities: [
      "Pipeline design and installation",
      "Inline inspection and intelligent pigging",
      "Cathodic protection systems",
      "Corrosion monitoring and inhibition",
      "Repair and rehabilitation works",
    ],
  },
  {
    id: "field-ops",
    title: "Field Operations & Maintenance",
    description:
      "Turnkey field operations management including site security, equipment supply and maintenance, HSE officer deployment, and environmental monitoring for upstream and midstream facilities.",
    icon: "HardHat",
    capabilities: [
      "Production facility management",
      "Equipment supply, commissioning, and servicing",
      "HSE officer and emergency response team deployment",
      "Environmental impact monitoring",
      "Site security and access control",
    ],
  },
  {
    id: "consultancy",
    title: "Energy Consultancy",
    description:
      "Strategic advisory services for energy companies entering or expanding in Nigeria. Our consultants bring deep knowledge of Nigeria's regulatory landscape, field operations, and investment structuring.",
    icon: "LineChart",
    capabilities: [
      "Feasibility studies and technical due diligence",
      "Regulatory compliance advisory (NUPRC, NCDMB)",
      "Environmental and social impact assessments",
      "Project scoping and cost estimation",
      "Local content strategy and Nigerian Content planning",
    ],
  },
  {
    id: "procurement",
    title: "Oil & Gas Procurement",
    description:
      "Specialised sourcing of oilfield equipment, tools, chemicals, and consumables for operators, contractors, and service companies. We leverage established international and local supply chains to deliver fast, cost-effective procurement.",
    icon: "PackageSearch",
    capabilities: [
      "Oilfield equipment and tools procurement",
      "Chemical and consumable supply",
      "Pressure vessel and rotating equipment sourcing",
      "Emergency and spot procurement",
      "Vendor qualification and approval support",
    ],
  },
];

export const oilGasProjects: OilGasProject[] = [
  {
    id: "ogp1",
    title: "Trans-Delta Pipeline Integrity Project",
    location: "Rivers State, Nigeria",
    scope: "Inline inspection, cathodic protection renewal, and integrity management over 48 km of gas transmission pipeline.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    year: "2024–2025",
  },
  {
    id: "ogp2",
    title: "Upstream Wellhead Maintenance Programme",
    location: "Bayelsa State, Nigeria",
    scope: "Planned maintenance and emergency repair of 22 wellhead assemblies across three onshore oil fields.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    year: "2023",
  },
  {
    id: "ogp3",
    title: "Petroleum Product Storage Terminal",
    location: "Apapa, Lagos State",
    scope: "Construction and commissioning of a 5,000 MT petroleum product storage terminal with metering and loading infrastructure.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    year: "2022",
  },
  {
    id: "ogp4",
    title: "Refinery Turnaround Support — Warri",
    location: "Warri, Delta State",
    scope: "Provision of 140 field technicians, scaffolding, and equipment for a planned turnaround maintenance programme at a mid-scale refinery.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    year: "2023",
  },
  {
    id: "ogp5",
    title: "Environmental Monitoring — Onshore Basin",
    location: "Imo State, Nigeria",
    scope: "12-month environmental impact monitoring programme covering soil, water, and air quality parameters at an upstream production facility.",
    image: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=800&q=80",
    year: "2024",
  },
];
