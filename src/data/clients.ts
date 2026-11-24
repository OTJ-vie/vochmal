export interface ClientProject {
  id: string;
  title: string;
  description: string;
  location?: string;
  year?: string;
  status: "Completed" | "Ongoing";
  images?: string[];
  imagesNote?: string;
}

export interface Client {
  id: string;
  name: string;
  division: string;
  divisionSlug: string;
  description: string;
  contactName?: string;
  contactTitle?: string;
  testimonial?: string;
  projects: ClientProject[];
}

export const clients: Client[] = [
  {
    id: "acreasal",
    name: "ACREASAL",
    division: "Construction",
    divisionSlug: "construction",
    description:
      "Commercial complex delivered six weeks ahead of schedule and within budget.",
    contactName: "Dr Garba Gonkol",
    contactTitle: "Project Coordinator",
    testimonial:
      "Vochmal Construction delivered our commercial complex six weeks ahead of schedule and within budget. The quality of workmanship was exceptional — every detail met our specification. They are now our preferred contractor for all future developments.",
    projects: [
      {
        id: "acreasal-commercial-complex",
        title: "Commercial Complex Development",
        description:
          "Delivery of a commercial complex completed six weeks ahead of schedule and within budget, meeting the client's specification across every detail.",
        status: "Completed",
        images: [
          "/images/constructions/construction-hero.jpg",
          "/images/projects/university-jos-geology-extension.jpg",
          "/images/projects/classroom-construction-gjss-mushi.jpg",
        ],
        imagesNote: "Representative construction images from Vochmal's project portfolio.",
      },
    ],
  },
  {
    id: "raamp",
    name: "RAAMP",
    division: "Construction",
    divisionSlug: "construction",
    description:
      "Rural Access and Agricultural Marketing Project — bridge construction at Musidzu–Daawki crossing, Kanke LGA.",
    contactName: "Rural Access and Agricultural Marketing Project",
    contactTitle: "Client",
    testimonial: "",
    projects: [
      {
        id: "raamp-bridge",
        title: "RAAMP Bridge Construction, Musidzu–Daawki",
        description:
          "Construction of a 30-metre span reinforced concrete bridge over the Musidzu–Daawki crossing under the Rural Access and Agricultural Marketing Project (RAAMP), improving rural connectivity in Kanke LGA.",
        location: "Kanke LGA, Plateau State",
        year: "2025",
        status: "Ongoing",
        images: [
          "/images/projects/raamp-bridge-musidzu-daawki.jpg",
          "/images/projects/gallery/raamp-bridge/bridge-site-excavation.jpg",
          "/images/projects/gallery/raamp-bridge/bridge-foundation-mountain.jpg",
          "/images/projects/gallery/raamp-bridge/bridge-deck-rebar-pour.jpg",
          "/images/projects/gallery/raamp-bridge/bridge-deck-completed-side.jpg",
        ],
      },
    ],
  },
  {
    id: "agile",
    name: "AGILE",
    division: "Oil & Gas",
    divisionSlug: "oil-and-gas",
    description:
      "Pipeline inspection contract delivered with professionalism and HSE compliance.",
    contactName: "Mr Dachung",
    contactTitle: "Deputy Project Coordinator",
    testimonial:
      "Vochmal's Oil & Gas team handled our pipeline inspection contract with the highest level of professionalism and HSE compliance I have seen from an indigenous Nigerian firm. Zero incidents, on-time delivery, and a brilliant technical team.",
    projects: [
      {
        id: "agile-pipeline-inspection",
        title: "Pipeline Inspection Contract",
        description:
          "Pipeline inspection delivered with professionalism and HSE compliance, with zero incidents and on-time completion.",
        status: "Completed",
        images: [
          "/images/oil-and-gas/pipeline-integrity.svg",
          "/images/oil-and-gas/downstream-and-midstream.jpg",
        ],
        imagesNote: "Visual reference for pipeline integrity services.",
      },
    ],
  },
  {
    id: "uj",
    name: "UJ",
    division: "Procurement",
    divisionSlug: "procurement",
    description:
      "Specialised oilfield equipment sourced and delivered within the project timeline.",
    contactName: "Mrs Bukata",
    contactTitle: "Procurement Officer",
    testimonial:
      "Working with Vochmal Procurement transformed our supply chain. They sourced specialised oilfield equipment that three other vendors had failed to deliver, and they did it within the project timeline. Outstanding reliability.",
    projects: [
      {
        id: "uj-oilfield-equipment",
        title: "Specialised Oilfield Equipment Sourcing",
        description:
          "Sourcing and delivery of specialised oilfield equipment within the project timeline after other vendors could not fulfil the requirement.",
        status: "Completed",
        images: [
          "/images/oil-and-gas/vochmal-truck1.jpg",
          "/images/oil-and-gas/vochmal-truck2.jpg",
          "/images/oil-and-gas/vochmal-truck3.jpg",
          "/images/oil-and-gas/vochmal-truck4.jpg",
        ],
        imagesNote: "Representative asset/logistics images from Vochmal's oil and gas operations.",
      },
    ],
  },
];
