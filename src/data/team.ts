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
    id: "chairman",
    slug: "veronica-chijioke-opia",
    name: "Veronica Chijioke Opia",
    title: "Chairman",
    bio: "Chairman of the Board of Vochmal Limited, providing strategic oversight across the company's business divisions since incorporation in 2017.",
    fullBio: `Veronica Chijioke Opia serves as Chairman of the Board of Vochmal Limited, a role she has held since the company's incorporation on 5 October 2017 (RC 1442966).

As Chairman, she provides strategic direction and governance oversight for the company, working with the Board of Directors to guide Vochmal's growth across construction and its other business interests.`,
    qualifications: [],
    expertise: [
      "Corporate Governance",
      "Strategic Oversight",
    ],
    linkedin: "#",
  },
  {
    id: "director-1",
    slug: "nwankwo-azubuike-michael",
    name: "Nwankwo Azubuike Michael",
    title: "Director",
    bio: "Director of Vochmal Limited, part of the Board that oversees the company's operations and project delivery.",
    fullBio: `Nwankwo Azubuike Michael serves as a Director on the Board of Vochmal Limited, contributing to the strategic and operational direction of the company since its incorporation.`,
    qualifications: [],
    expertise: [
      "Board Oversight",
    ],
    linkedin: "#",
  },
  {
    id: "director-2",
    slug: "opia-rupert-izah",
    name: "Opia Rupert Izah",
    title: "Director",
    bio: "Director of Vochmal Limited, part of the Board that oversees the company's operations and project delivery.",
    fullBio: `Opia Rupert Izah serves as a Director on the Board of Vochmal Limited, contributing to the strategic and operational direction of the company.`,
    qualifications: [],
    expertise: [
      "Board Oversight",
    ],
    linkedin: "#",
  },
  {
    id: "director-3",
    slug: "nwune-kingsley-chinedu",
    name: "Nwune Kingsley Chinedu",
    title: "Director",
    bio: "Director of Vochmal Limited, part of the Board that oversees the company's operations and project delivery.",
    fullBio: `Nwune Kingsley Chinedu serves as a Director on the Board of Vochmal Limited, contributing to the strategic and operational direction of the company since its incorporation.`,
    qualifications: [],
    expertise: [
      "Board Oversight",
    ],
    linkedin: "#",
  },
];
