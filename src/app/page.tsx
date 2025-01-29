import { getHouses } from "@/api/handlers";
import HouseCard from "@/components/HouseCard";
import { asyncDelay } from "@/utils";

export const revalidate = 10;

export default async function Home() {
  // Used to simulate slow loading
  await await asyncDelay(1000);

  const houses = await getHouses();

  return (
    <div className="m-4">
      <header className="font-bold text-xl my-6">
        <h1>Ice and Fire Houses</h1>
      </header>
      <main className="flex flex-col justify-start">
        <section className="space-y-2">
          {houses.map((house) => {
            return (
              <HouseCard
                key={house.url}
                name={house.name}
                coatOfArms={house.coatOfArms}
                words={house.words}
                region={house.region}
                swornMembers={house.swornMembers}
              />
            );
          })}
        </section>
      </main>
      <footer className="my-6 flex items-center justify-center">
        By Jhoan Stiven Zamora Caicedo
      </footer>
    </div>
  );
}
