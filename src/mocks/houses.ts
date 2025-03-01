import House from "@/models/house";

export const mockHouses: Array<House> = [
  {
    url: "https://anapioficeandfire.com/api/houses/1",
    name: "House Algood",
    region: "The Westerlands",
    coatOfArms:
      "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
    words: "",
    titles: [],
    seats: [],
    currentLord: "",
    heir: "",
    overlord: "https://anapioficeandfire.com/api/houses/229",
    founded: "",
    founder: "",
    diedOut: "",
    ancestralWeapons: [],
    cadetBranches: [],
    swornMembers: [],
  },
  {
    url: "https://anapioficeandfire.com/api/houses/2",
    name: "House Allyrion of Godsgrace",
    region: "Dorne",
    coatOfArms: "Gyronny Gules and Sable, a hand couped Or",
    words: "No Foe May Pass",
    titles: [],
    seats: ["Godsgrace"],
    currentLord: "https://anapioficeandfire.com/api/characters/298",
    heir: "https://anapioficeandfire.com/api/characters/1922",
    overlord: "https://anapioficeandfire.com/api/houses/285",
    founded: "",
    founder: "",
    diedOut: "",
    ancestralWeapons: [],
    cadetBranches: [],
    swornMembers: [
      "https://anapioficeandfire.com/api/characters/298",
    ],
  },
];
