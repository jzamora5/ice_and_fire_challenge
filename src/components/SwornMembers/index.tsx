import { getCharacter } from "@/api/handlers";
import { asyncDelay } from "@/utils";

interface SwornMembersProps {
  swornMembersApiURLs: Array<string>;
}

export default async function SwornMembers({
  swornMembersApiURLs,
}: SwornMembersProps) {
  // Used to simulate slow loading
  await asyncDelay(1000);

  const characterPromises = swornMembersApiURLs.map((url) => {
    return getCharacter(url);
  });

  const characters = await Promise.all(characterPromises);

  return (
    <div>
      <header>
        <h2 className="font-medium text-blue-800">Sworn Members</h2>
      </header>

      <ul>
        {characters.map((character) => {
          const isDead = !!character.died;

          return (
            <li className="flex space-x-2" key={character.url}>
              <p>{character.name}</p>
              <p className={isDead ? "text-red-500" : "text-green-700"}>
                {isDead ? `Died ${character.died}` : "Alive"}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
