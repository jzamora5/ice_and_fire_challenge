import Character from "@/models/character";

export const mockAliveCharacter: Character = {
  url: "https://anapioficeandfire.com/api/characters/1129",
  name: "Ynys Yronwood",
  gender: "Female",
  culture: "Dornish",
  born: "",
  died: "",
  titles: [],
  aliases: [],
  father: "",
  mother: "",
  spouse: "https://anapioficeandfire.com/api/characters/1922",
  allegiances: [
    "https://anapioficeandfire.com/api/houses/2",
    "https://anapioficeandfire.com/api/houses/444",
  ],
  books: ["https://anapioficeandfire.com/api/books/8"],
  povBooks: [],
  tvSeries: [],
  playedBy: [],
};

export const mockDeadCharacter: Character = {
  url: "https://anapioficeandfire.com/api/characters/572",
  name: "Jon Arryn",
  gender: "Male",
  culture: "Valemen",
  born: "In or between 217 AC and 220 AC (roughly), at the Eyrie",
  died: "In 298 AC, at King's Landing",
  titles: [
    "Lord of the Eyrie",
    "Defender of the Vale",
    "Warden of the East",
    "Hand of the King",
  ],
  aliases: [],
  father: "",
  mother: "",
  spouse: "https://anapioficeandfire.com/api/characters/558",
  allegiances: ["https://anapioficeandfire.com/api/houses/7"],
  books: [
    "https://anapioficeandfire.com/api/books/1",
    "https://anapioficeandfire.com/api/books/2",
    "https://anapioficeandfire.com/api/books/3",
    "https://anapioficeandfire.com/api/books/5",
    "https://anapioficeandfire.com/api/books/8",
    "https://anapioficeandfire.com/api/books/11",
  ],
  povBooks: [],
  tvSeries: ["Season 1"],
  playedBy: ["John Standing"],
};
