import { OpenDMButton } from "@/features/open-dm";
import { users } from "@/widgets/sidebar/lib/mock";

export const DMList = () => {
  return (
    <div className="flex flex-col gap-1">
      {users.map((user) => (
        <OpenDMButton key={user.id} {...user} />
      ))}
    </div>
  );
};
