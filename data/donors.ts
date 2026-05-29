export interface Donor {
  id: string;
  displayName: string;
  honorText?: string; // "In memory of..." or "In honor of..."
  note?: string; // optional plaque inscription
}

export interface DonorTier {
  id: string;
  tierName: string;
  tierAmountLabel?: string;
  donors: Donor[];
}

export const donorWall: DonorTier[] = [
  {
    id: "tahara-center",
    tierName: "Tahara Center",
    donors: [
      {
        id: "tc-1",
        displayName: "The Goldberg Family",
        honorText: "In memory of Miriam Goldberg, z\"l",
      },
    ],
  },
  {
    id: "building-dedication",
    tierName: "Building Dedication",
    donors: [
      {
        id: "bd-1",
        displayName: "Reserved with Gratitude",
      },
    ],
  },
  {
    id: "dedications",
    tierName: "Dedications",
    donors: [
      {
        id: "ded-1",
        displayName: "The Schwartz Family",
        honorText: "In honor of Rivka and Moshe Schwartz",
      },
      {
        id: "ded-2",
        displayName: "The Levine Family Foundation",
      },
      {
        id: "ded-3",
        displayName: "In Memory of Chana bas Yaakov, z\"l",
      },
    ],
  },
  {
    id: "executive-founder",
    tierName: "Executive Founder",
    donors: [
      {
        id: "ef-1",
        displayName: "The Cohen Family",
        honorText: "L'ilui nishmat Avraham ben Yosef, z\"l",
      },
      {
        id: "ef-2",
        displayName: "David & Sarah Klein",
      },
    ],
  },
  {
    id: "founder",
    tierName: "Founder",
    donors: [
      {
        id: "f-1",
        displayName: "The Bernstein Family",
      },
      {
        id: "f-2",
        displayName: "The Weiss Family",
        honorText: "In honor of our children and grandchildren",
      },
      {
        id: "f-3",
        displayName: "Miriam & Yosef Friedman",
      },
      {
        id: "f-4",
        displayName: "The Katz Foundation",
      },
    ],
  },
  {
    id: "builder",
    tierName: "Builder",
    donors: [
      { id: "b-1", displayName: "Aaron & Leah Rosenberg" },
      { id: "b-2", displayName: "The Silver Family" },
      { id: "b-3", displayName: "Rachel & Noam Greenberg" },
      { id: "b-4", displayName: "The Shapiro Family" },
      { id: "b-5", displayName: "Anonymous" },
    ],
  },
  {
    id: "benefactor",
    tierName: "Benefactor",
    donors: [
      { id: "ben-1", displayName: "The Horowitz Family" },
      { id: "ben-2", displayName: "Deborah & Eli Stern" },
      { id: "ben-3", displayName: "The Feldman Family" },
      { id: "ben-4", displayName: "In memory of Sarah Rivka, z\"l" },
      { id: "ben-5", displayName: "The Moskowitz Family" },
      { id: "ben-6", displayName: "Anonymous" },
    ],
  },
  {
    id: "supporter",
    tierName: "Supporter",
    donors: [
      { id: "sup-1", displayName: "The Rubin Family" },
      { id: "sup-2", displayName: "Hannah & Mordechai Klein" },
      { id: "sup-3", displayName: "The Jacobs Family" },
      { id: "sup-4", displayName: "In honor of our grandparents" },
      { id: "sup-5", displayName: "The Leibowitz Family" },
      { id: "sup-6", displayName: "Chana & Dovid Wexler" },
      { id: "sup-7", displayName: "Anonymous" },
    ],
  },
  {
    id: "chai-founder",
    tierName: "Chai Founder",
    donors: [
      { id: "cf-1", displayName: "The Green Family" },
      { id: "cf-2", displayName: "The Marcus Family" },
      { id: "cf-3", displayName: "Esther & Yitzchak Blum" },
      { id: "cf-4", displayName: "The Siegel Family" },
      { id: "cf-5", displayName: "In memory of Reuven ben Shlomo, z\"l" },
    ],
  },
  {
    id: "co-founder",
    tierName: "Co-Founder",
    donors: [
      { id: "co-1", displayName: "The Alter Family" },
      { id: "co-2", displayName: "The Bloom Family" },
      { id: "co-3", displayName: "Sarah & Yaakov Fried" },
      { id: "co-4", displayName: "The Gross Family" },
      { id: "co-5", displayName: "In honor of our community" },
      { id: "co-6", displayName: "Anonymous" },
      { id: "co-7", displayName: "The Hecht Family" },
      { id: "co-8", displayName: "The Landau Family" },
    ],
  },
];
