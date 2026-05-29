export interface ConstructionUpdate {
  id: string;
  phase: string;
  caption: string;
  imagePath: string;
  date?: string;
  complete: boolean;
}

export const constructionUpdates: ConstructionUpdate[] = [
  {
    id: "cu-1",
    phase: "Groundbreaking & Excavation",
    caption:
      "The community gathered as the first earth was turned — a historic moment for Mikvah Laurentian.",
    imagePath: "/images/construction-01.jpg",
    date: "Spring 2023",
    complete: true,
  },
  {
    id: "cu-2",
    phase: "Foundation Work",
    caption:
      "The foundation was poured, anchoring this sacred project in the Laurentian soil.",
    imagePath: "/images/construction-02.jpg",
    date: "Summer 2023",
    complete: true,
  },
  {
    id: "cu-3",
    phase: "Mikvah Structure",
    caption:
      "The mikvah basins and otzer were formed — the halachic heart of the building.",
    imagePath: "/images/construction-03.jpg",
    date: "Fall 2023",
    complete: true,
  },
  {
    id: "cu-4",
    phase: "Framing",
    caption:
      "Walls rose from the ground, giving shape to the rooms where families will gather for generations.",
    imagePath: "/images/construction-04.jpg",
    date: "Winter 2023",
    complete: true,
  },
  {
    id: "cu-5",
    phase: "Interior Preparation",
    caption:
      "Plumbing, electrical, and mechanical work underway — the invisible infrastructure of taharah.",
    imagePath: "/images/construction-05.jpg",
    date: "Early 2024",
    complete: true,
  },
  {
    id: "cu-6",
    phase: "Next Phase: Completion",
    caption:
      "Finishing work, tile, fixtures, and furnishings — the final steps before opening.",
    imagePath: "/images/construction-06.jpg",
    date: "Coming soon",
    complete: false,
  },
];
