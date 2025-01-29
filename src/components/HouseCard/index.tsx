import House from "@/models/house";
import LabelItem from "../LabelValue";
import { Suspense } from "react";
import SwornMembers from "../SwornMembers";

type HouseCardProps = Pick<
  House,
  "name" | "region" | "coatOfArms" | "words" | "swornMembers"
>;

export default function HouseCard({
  name,
  region,
  coatOfArms,
  words,
  swornMembers,
}: HouseCardProps) {
  return (
    <article className="border border-solid border-black space-y-2 p-4">
      <p className="font-medium text-amber-800">{name}</p>
      <LabelItem label="Coat of Arms" value={coatOfArms} />
      <LabelItem label="Region" value={region} />
      <LabelItem label="Words" value={words} />

      {!!swornMembers.length && (
        <Suspense fallback={<div>Loading Sworn Members...</div>}>
          <SwornMembers swornMembersApiURLs={swornMembers} />
        </Suspense>
      )}

      {!swornMembers.length && (
        <p className="font-bold text-red-900">
          This house has no sworn members
        </p>
      )}
    </article>
  );
}
