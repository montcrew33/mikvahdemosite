export type DedicationStatus = "available" | "reserved" | "funded";
export type DedicationCategory = "major" | "room" | "community" | "general";

export interface Dedication {
  id: string;
  name: string;
  amount: number | null;
  status: DedicationStatus;
  category: DedicationCategory;
  availableCount?: number; // for multi-unit opportunities
  description?: string;
  honoredName?: string; // populated if reserved/funded
}

export interface GeneralDonationTier {
  id: string;
  amount: number | null; // null = "Other"
  label: string;
}

export const majorDedications: Dedication[] = [
  {
    id: "womens-mikvah-room",
    name: "Women's Mikvah Room",
    amount: 180_000,
    status: "available",
    category: "major",
    description:
      "The central immersion room, designed with dignity and serenity.",
  },
  {
    id: "mens-mikvah",
    name: "Men's Mikvah",
    amount: 120_000,
    status: "available",
    category: "major",
    description: "A dedicated mikvah for men, built to the highest standards.",
  },
  {
    id: "cornerstone",
    name: "Cornerstone",
    amount: 120_000,
    status: "available",
    category: "major",
    description:
      "Inscribed cornerstone marking the founding of this sacred space.",
  },
  {
    id: "hvac",
    name: "HVAC System",
    amount: 100_000,
    status: "available",
    category: "major",
    description:
      "Climate control ensuring year-round comfort and code compliance.",
  },
  {
    id: "building-facade",
    name: "Building Facade",
    amount: 80_000,
    status: "available",
    category: "major",
    description: "The exterior face of Mikvah Laurentian, visible to all.",
  },
];

export const roomDedications: Dedication[] = [
  {
    id: "otzer",
    name: "Otzer",
    amount: 60_000,
    status: "available",
    category: "room",
    description: "The connected rainwater reservoir — the heart of halachic compliance.",
  },
  {
    id: "security-system",
    name: "Security System",
    amount: 60_000,
    status: "available",
    category: "room",
    description: "Full building security ensuring privacy and safety.",
  },
  {
    id: "dish-mikvah",
    name: "Dish Mikvah",
    amount: 54_000,
    status: "reserved",
    category: "room",
    description: "Dedicated immersion facility for vessels and kelim.",
  },
  {
    id: "celebration-room",
    name: "Celebration Room",
    amount: 50_000,
    status: "available",
    category: "room",
    description: "A welcoming gathering space for family milestones.",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    amount: 50_000,
    status: "available",
    category: "room",
    description: "Gardens and grounds surrounding the mikvah entrance.",
  },
  {
    id: "kallah-prep-room",
    name: "Kallah Preparation Room",
    amount: null,
    status: "reserved",
    category: "room",
    description: "Private preparation room for brides.",
  },
  {
    id: "prep-room-2",
    name: "Preparation Room 2",
    amount: null,
    status: "reserved",
    category: "room",
    description: "Private preparation suite.",
  },
  {
    id: "prep-room-3",
    name: "Preparation Room 3",
    amount: 50_000,
    status: "reserved",
    category: "room",
    description: "Private preparation suite.",
  },
  {
    id: "reception-room",
    name: "Reception Room",
    amount: 50_000,
    status: "available",
    category: "room",
    description: "Welcoming foyer and reception area.",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    amount: 50_000,
    status: "reserved",
    category: "room",
    description: "Fully equipped kitchen for community use.",
  },
  {
    id: "bridal-staircase",
    name: "Bridal Staircase",
    amount: 40_000,
    status: "available",
    category: "room",
    description: "A graceful staircase leading to the immersion level.",
  },
  {
    id: "utility-area",
    name: "Utility Area",
    amount: 40_000,
    status: "available",
    category: "room",
    description: "Mechanical and utility infrastructure.",
  },
  {
    id: "mens-changing-room",
    name: "Men's Changing Room",
    amount: 36_000,
    status: "available",
    category: "room",
    description: "Private changing facilities for men.",
  },
  {
    id: "front-entrance",
    name: "Front Entrance",
    amount: 36_000,
    status: "reserved",
    category: "room",
    description: "The welcoming gateway into Mikvah Laurentian.",
  },
  {
    id: "patio",
    name: "Patio",
    amount: 36_000,
    status: "available",
    category: "room",
    description: "Outdoor gathering space adjacent to the building.",
  },
  {
    id: "treatment-room",
    name: "Treatment Room",
    amount: 36_000,
    status: "available",
    category: "room",
    availableCount: 3,
    description: "Private wellness and treatment rooms.",
  },
];

export const communityDedications: Dedication[] = [
  {
    id: "mens-entrance",
    name: "Men's Entrance",
    amount: 26_000,
    status: "available",
    category: "community",
    description: "Dedicated entrance for men's mikvah.",
  },
  {
    id: "front-walkway",
    name: "Front Walkway",
    amount: 26_000,
    status: "available",
    category: "community",
    description: "The stone walkway from the street to the entrance.",
  },
  {
    id: "mikvah-corridor",
    name: "Mikvah Corridor",
    amount: 26_000,
    status: "available",
    category: "community",
    availableCount: 5,
    description: "Interior hallways and corridors.",
  },
  {
    id: "garage-door",
    name: "Garage Door",
    amount: null,
    status: "reserved",
    category: "community",
    description: "Main garage entry door.",
  },
  {
    id: "fireplace",
    name: "Fireplace",
    amount: 10_000,
    status: "available",
    category: "community",
    description: "A warm centerpiece for the gathering areas.",
  },
  {
    id: "mezuzah",
    name: "Mezuzah",
    amount: 18_000,
    status: "available",
    category: "community",
    description: "Sacred mezuzot affixed throughout Mikvah Laurentian.",
  },
  {
    id: "furnishings",
    name: "Furnishings",
    amount: 18_000,
    status: "available",
    category: "community",
    description: "Furniture, fixtures, and interior appointments.",
  },
  {
    id: "garage",
    name: "Garage",
    amount: 20_000,
    status: "available",
    category: "community",
    description: "Dedicated parking spaces for mikvah patrons.",
  },
  {
    id: "laundry-station",
    name: "Laundry Station",
    amount: 10_000,
    status: "available",
    category: "community",
    description: "In-building laundry facilities for linens and robes.",
  },
  {
    id: "door",
    name: "Door",
    amount: 7_770,
    status: "available",
    category: "community",
    availableCount: 26,
    description: "Interior and exterior doors throughout the building.",
  },
  {
    id: "benefactor",
    name: "Benefactor",
    amount: 3_600,
    status: "available",
    category: "community",
    description: "Join the founding circle of Mikvah Laurentian benefactors.",
  },
];

export const generalDonationTiers: GeneralDonationTier[] = [
  { id: "chai", amount: 180, label: "Chai — $180" },
  { id: "double-chai-260", amount: 260, label: "$260" },
  { id: "double-chai", amount: 360, label: "Double Chai — $360" },
  { id: "triple-chai", amount: 540, label: "Triple Chai — $540" },
  { id: "four-chai", amount: 720, label: "Four Chai — $720" },
  { id: "ten-chai", amount: 1_800, label: "Ten Chai — $1,800" },
  { id: "other", amount: null, label: "Other Amount" },
];
