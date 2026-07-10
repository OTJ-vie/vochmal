export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  fullBio: string;
  division?: string;
  divisionSlug?: string;
  qualifications: string[];
  expertise: string[];
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    slug: "adewale-okonkwo",
    name: "Adewale Okonkwo",
    title: "Group Chief Executive Officer",
    bio: "A seasoned entrepreneur with over 20 years of experience building diversified businesses across Nigeria. Adewale founded Vochmal Limited with a vision to create an indigenous conglomerate that competes at international standards.",
    fullBio: `Adewale Okonkwo is the founder and Group Chief Executive Officer of Vochmal Limited. With over 20 years of entrepreneurial and executive experience across Nigeria's construction, energy, and commodities sectors, Adewale founded Vochmal in 2014 with a singular vision: to build an indigenous Nigerian conglomerate that could compete — and win — at international standards.

Under his leadership, Vochmal has grown from a two-division construction and procurement firm into a fully diversified enterprise operating across six strategic business divisions: construction, mining, bakery, general procurement, service apartments, and oil & gas. The group now employs over 400 people and has delivered projects worth billions of naira across Nigeria.

Adewale is a passionate advocate for Nigerian economic development and local content. He has been recognised for his contributions to Nigeria's private sector by multiple industry bodies and is a regular speaker at business and investment forums. He sits on the boards of two industry associations and is an active member of the Nigerian Economic Summit Group.

He holds a Bachelor of Science in Business Administration and an Executive MBA, and has completed leadership programmes at two leading international business schools.`,
    qualifications: [
      "BSc Business Administration",
      "Executive MBA",
      "Fellow, Institute of Directors Nigeria",
      "Member, Nigerian Economic Summit Group",
    ],
    expertise: [
      "Corporate Strategy",
      "Mergers & Acquisitions",
      "Investment & Capital Allocation",
      "Stakeholder Management",
      "Cross-sector Business Development",
    ],
    linkedin: "#",
  },
  {
    id: "coo",
    slug: "ngozi-adeyemi",
    name: "Ngozi Adeyemi",
    title: "Chief Operations Officer",
    bio: "Ngozi brings 15 years of operational leadership across construction and logistics sectors. She oversees the day-to-day operations of all six business divisions, ensuring delivery excellence and client satisfaction.",
    fullBio: `Ngozi Adeyemi serves as Chief Operations Officer of Vochmal Limited, providing executive oversight of day-to-day operations across all six business divisions. She joined Vochmal in 2016 and has been instrumental in building the operational frameworks, quality management systems, and delivery processes that underpin the group's reputation for excellence.

Before joining Vochmal, Ngozi held senior operations roles at a pan-African infrastructure development firm and a leading Nigerian logistics company, where she led process transformation programmes that resulted in measurable cost reductions and delivery improvements.

At Vochmal, Ngozi has overseen the implementation of ISO 9001:2015-compliant processes across the Procurement division, established the group-wide HSE management system for field operations, and led the expansion of the Service Apartments division from a single property to its current multi-unit portfolio.

She is known for her hands-on approach, her ability to align large multi-disciplinary teams, and her commitment to developing Nigerian talent within the organisation. She mentors 12 emerging managers within the Vochmal group.`,
    qualifications: [
      "BSc Industrial Engineering",
      "MSc Operations Management",
      "PMP — Project Management Professional",
      "ISO 9001:2015 Lead Auditor",
    ],
    expertise: [
      "Operations Management",
      "Process Optimisation",
      "Quality Management Systems",
      "Multi-division Coordination",
      "Talent Development",
    ],
    linkedin: "#",
  },
  {
    id: "cfo",
    slug: "emeka-nwosu",
    name: "Emeka Nwosu",
    title: "Chief Financial Officer",
    bio: "Emeka is a chartered accountant with extensive experience in corporate finance, investment management, and financial strategy for large-scale Nigerian enterprises. He manages Vochmal's capital allocation and investor relations.",
    fullBio: `Emeka Nwosu is the Chief Financial Officer of Vochmal Limited, responsible for the group's financial strategy, capital allocation, treasury management, and investor relations. He joined Vochmal in 2018, bringing with him over 16 years of corporate finance experience gained at Big Four accounting firms and leading Nigerian corporations.

Emeka qualified as a chartered accountant with the Institute of Chartered Accountants of Nigeria (ICAN) and subsequently obtained a Fellowship. He has led financial due diligence exercises, structured debt and equity financing arrangements, and managed audit relationships for organisations with turnovers exceeding ₦50 billion.

At Vochmal, Emeka has restructured the group's financial reporting framework to provide real-time divisional performance data to the board, negotiated a ₦2.5 billion credit facility that supported the Mining division's Nasarawa plant development, and led the financial planning for the Service Apartments portfolio expansion.

He is a council member of ICAN and a guest lecturer in Corporate Finance at a Lagos-based postgraduate business school.`,
    qualifications: [
      "BSc Accounting",
      "Fellow, Institute of Chartered Accountants of Nigeria (ICAN)",
      "CFA Level II Candidate",
      "Certificate in Corporate Governance — IFC",
    ],
    expertise: [
      "Corporate Finance & Treasury",
      "Financial Strategy",
      "Investment Management",
      "Audit & Compliance",
      "Investor Relations",
    ],
    linkedin: "#",
  },
  {
    id: "construction-director",
    slug: "chukwuemeka-eze",
    name: "Chukwuemeka Eze",
    title: "Director, Construction Division",
    division: "Construction",
    divisionSlug: "/construction",
    bio: "A licensed civil engineer with 18 years of field experience managing large infrastructure and commercial building projects across Nigeria. Chukwuemeka holds a Masters in Structural Engineering from the University of Lagos.",
    fullBio: `Chukwuemeka Eze is the Director of Vochmal's Construction Division, leading a team of over 200 engineers, project managers, site supervisors, and technical staff. He is a COREN-registered civil engineer with 18 years of progressive experience in the design, management, and delivery of large-scale construction projects across Nigeria.

Before joining Vochmal, Chukwuemeka was a Principal Engineer at a multinational construction firm where he served as project director on a ₦12 billion federal government infrastructure contract. He also led the structural design team for a 15-storey commercial development in Lagos and managed a portfolio of concurrent projects totalling over ₦8 billion in value.

Since joining Vochmal in 2017, he has overseen the completion of over 40 projects including the landmark Eko Atlantic Commercial Tower, the Kaduna Ring Road Phase II, the 120-unit Federal Staff Housing Estate in Abuja, and the Warri Industrial Storage Terminal. Under his leadership, the division achieved its first zero-incident year in 2022 and has maintained that record since.

Chukwuemeka is a member of the Nigerian Society of Engineers (NSE) and the Nigerian Institute of Building (NIOB). He is a strong advocate for the adoption of modern construction technology, including BIM and smart building systems, in Nigerian commercial development.`,
    qualifications: [
      "BEng Civil Engineering",
      "MSc Structural Engineering — University of Lagos",
      "COREN Registration (R22456)",
      "Member, Nigerian Society of Engineers (NSE)",
      "Member, Nigerian Institute of Building (NIOB)",
    ],
    expertise: [
      "Civil & Structural Engineering",
      "Commercial Construction Management",
      "Infrastructure Development",
      "Smart Building Systems",
      "HSE & Safety Management",
    ],
    linkedin: "#",
  },
  {
    id: "mining-director",
    slug: "bello-musa",
    name: "Dr. Bello Musa",
    title: "Director, Mining Division",
    division: "Mining",
    divisionSlug: "/mining",
    bio: "Dr. Musa holds a doctorate in Geoscience and has led exploration and extraction programmes across Nigeria's mineral-rich states. He is committed to responsible mining practices and has led Vochmal's compliance programme.",
    fullBio: `Dr. Bello Musa is the Director of Vochmal's Mining Division. He holds a doctorate in Geoscience from Ahmadu Bello University, Zaria, and brings over 22 years of experience in mineral exploration, site development, and responsible extraction across Nigeria's most productive mineral states.

Dr. Musa began his career with the Nigerian Geological Survey Agency before moving into the private sector, where he led exploration programmes in Nasarawa, Plateau, and Zamfara States. He has personally supervised the geological evaluation of over 15 prospective mineral sites and has been involved in the licensing, development, and operational commissioning of six extraction sites.

At Vochmal, Dr. Musa leads a team of geologists, engineers, and environmental specialists responsible for all mining operations. He architected the division's ISO 14001-certified environmental management system and has been the driving force behind Vochmal's community engagement and land rehabilitation programmes. Under his leadership, the division secured three new NUPRC mineral titles and broke ground on the ₦4.2 billion Nasarawa processing facility.

Dr. Musa is a member of the Nigerian Mining and Geosciences Society (NMGS), a fellow of the Geological Society of Africa, and a regular contributor to academic journals on responsible mineral extraction.`,
    qualifications: [
      "BSc Geology",
      "MSc Applied Geoscience",
      "PhD Geoscience — Ahmadu Bello University",
      "Member, Nigerian Mining & Geosciences Society (NMGS)",
      "Fellow, Geological Society of Africa",
    ],
    expertise: [
      "Mineral Exploration & Extraction",
      "Geotechnical Assessment",
      "Environmental Management (ISO 14001)",
      "Regulatory Compliance (NUPRC, SON)",
      "Community Engagement & CSR",
    ],
    linkedin: "#",
  },
  {
    id: "apartments-director",
    slug: "funke-adebayo",
    name: "Funke Adebayo",
    title: "Director, Service Apartments",
    division: "Service Apartments",
    divisionSlug: "/service-apartments",
    bio: "Funke brings 12 years of luxury hospitality experience from leading hotel groups in Lagos and Abuja. She has built the Service Apartments division into a premier accommodation brand trusted by leading corporates and multinationals.",
    fullBio: `Funke Adebayo is the Director of Vochmal's Service Apartments division and one of Nigeria's most accomplished hospitality executives. With 12 years of experience across luxury hotels and extended-stay accommodation brands in Lagos and Abuja, she joined Vochmal in 2020 to build the Service Apartments division from the ground up.

Before Vochmal, Funke served as General Manager at a five-star hotel property in Victoria Island, Lagos, where she managed a 180-room property and 220 staff, achieving TripAdvisor's Travellers' Choice Award in three consecutive years. She also held the position of Director of Operations at a boutique hotel group in Abuja, where she developed the brand's corporate client programme.

At Vochmal, Funke has established the Service Apartments division as a premier corporate accommodation provider in Lagos, growing from a single unit to a multi-apartment portfolio. She personally developed the corporate billing platform, the housekeeping quality framework, and the concierge service standard that define the Vochmal Service Apartments experience.

The division has signed Preferred Supplier Agreements with three multinational corporations and consistently achieves an occupancy rate above 80%. Funke is a member of the Hospitality Association of Nigeria and a mentor within the Women in Hospitality initiative.`,
    qualifications: [
      "BSc Tourism & Hospitality Management",
      "PGD International Hotel Management — Swiss Hotel Association",
      "Member, Hospitality Association of Nigeria",
      "Certified Hotel Administrator (CHA)",
    ],
    expertise: [
      "Luxury Hospitality Operations",
      "Corporate Client Management",
      "Brand Development",
      "Revenue Management",
      "Guest Experience Design",
    ],
    linkedin: "#",
  },
];
