import Character from "@/models/character";

export const mockAliveCharacter: Character = {
  url: "https://anapioficeandfire.com/api/characters/1884",
  name: "Rodrik Arryn",
  gender: "Male",
  culture: "",
  born: "",
  died: "",
  titles: ["Lord of the Eyrie"],
  aliases: [],
  father: "",
  mother: "",
  spouse: "https://anapioficeandfire.com/api/characters/265",
  allegiances: ["https://anapioficeandfire.com/api/houses/7"],
  books: [
    "https://anapioficeandfire.com/api/books/9",
    "https://anapioficeandfire.com/api/books/10",
    "https://anapioficeandfire.com/api/books/11",
  ],
  povBooks: [],
  tvSeries: [],
  playedBy: [],
};

export const mockDeadCharacter: Character = {
  url: "https://anapioficeandfire.com/api/characters/688",
  name: "Lysa Arryn",
  gender: "Female",
  culture: "",
  born: "In 266 AC or 267 AC, at Riverrun",
  died: "In 300 AC, at the Eyrie",
  titles: ["Lady of the Vale"],
  aliases: ["Lysa Tully"],
  father: "",
  mother: "",
  spouse: "https://anapioficeandfire.com/api/characters/572",
  allegiances: [
    "https://anapioficeandfire.com/api/houses/7",
    "https://anapioficeandfire.com/api/houses/11",
    "https://anapioficeandfire.com/api/houses/395",
  ],
  books: [
    "https://anapioficeandfire.com/api/books/1",
    "https://anapioficeandfire.com/api/books/2",
    "https://anapioficeandfire.com/api/books/3",
    "https://anapioficeandfire.com/api/books/5",
    "https://anapioficeandfire.com/api/books/8",
  ],
  povBooks: [],
  tvSeries: ["Season 1", "Season 4"],
  playedBy: ["Kate Dickie"],
};
