"use client";

import { useGetRooms } from "@/entities/room";
import { OpenDMButton } from "@/features/open-dm";

export const DMList = () => {
  const { data: dms, isPending } = useGetRooms();

  if (isPending) {
    return "Loading...";
  }

  if (!dms || dms.length === 0) {
    return "No dms found";
  }

  return (
    <div className="flex flex-col gap-1">
      {dms.map((dm) => (
        <OpenDMButton key={dm.id} {...dm} />
      ))}
    </div>
  );
};
