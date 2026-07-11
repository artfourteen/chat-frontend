import { UserDropdown } from "@/features/user-dropdown";
import { Input } from "@/shared/ui/input";
import { Logo } from "@/shared/ui/logo";
import { DMList } from "@/widgets/sidebar/ui/dm-list";

export const Sidebar = () => {
  return (
    <aside className="w-1/5 border-r border-black/5 h-full">
      <div className="flex items-center justify-between gap-10 p-4.5 pb-3">
        <div className="flex items-center gap-2.5">
          <Logo className="w-10.5 h-10.5" />
          <h1 className="font-bold text-xl">Chat</h1>
        </div>

        <UserDropdown />
      </div>

      <div className="space-y-3 px-2.5 pb-3.5">
        <Input variant="search" placeholder="Search people by username" />

        <DMList />
      </div>
    </aside>
  );
};
