import House from "@/models/house";
import { API_HOUSES } from "./constants";
import Character from "@/models/character";

export const getHouses = async (): Promise<Array<House>> => {
  const response = await fetch(API_HOUSES);

  return response.json();
};

export const getCharacter = async (apiURL: string): Promise<Character> => {
  const response = await fetch(apiURL);

  return response.json();
};
