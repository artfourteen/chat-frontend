import Link from "next/link";
import { UserSettingsButton } from "@/features/user-settings";
import { Avatar } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { Input } from "@/shared/ui/input";
import { Logo } from "@/shared/ui/logo";

export default function Home() {
  return (
    <div className="h-dvh flex items-start">
      <aside className="w-1/5 border-r border-black/5 h-full">
        <div className="flex items-center justify-between gap-10 p-4.5 pb-3">
          <div className="flex items-center gap-2.5">
            <Logo className="w-10.5 h-10.5" />
            <h1 className="font-bold text-xl">Chat</h1>
          </div>

          <UserSettingsButton />
        </div>

        <div className="space-y-3 px-2.5 pb-3.5">
          <Input variant="search" placeholder="Search people by username" />

          <div className="flex flex-col gap-1">
            <Link
              href="/r/1"
              className="flex items-center bg-primary-50 py-2.5 px-3 rounded-user-card transition-all gap-3"
            >
              <Avatar username="art14" size="lg" />

              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-foreground font-semibold text-subhead leading-heading">
                    @art14
                  </span>
                  <span className="text-primary-500 font-semibold text-timestamp">
                    12:04
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground text-caption leading-heading">
                    golden hour at the pier 🌅
                  </span>
                  <span className="bg-sunset-gradient text-white font-bold w-4.5 h-4.5 px-4 text-caption rounded-pill flex items-center justify-center">
                    2
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/r/1"
              className="flex items-center hover:bg-black/8 py-2.5 px-3 rounded-user-card transition-all gap-3"
            >
              <Avatar username="zoemarsh" size="lg" />

              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-foreground font-semibold text-subhead leading-heading">
                    @zoemarsh
                  </span>
                  <span className="text-muted-foreground font-semibold text-timestamp">
                    11:32
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground text-caption leading-heading">
                    okay deal, movie night friday
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/r/1"
              className="flex items-center hover:bg-black/8 py-2.5 px-3 rounded-user-card transition-all gap-3"
            >
              <Avatar username="lenapark" size="lg" />

              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-foreground font-semibold text-subhead leading-heading">
                    @lenapark
                  </span>
                  <span className="text-muted-foreground font-semibold text-timestamp">
                    Tue
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground text-caption leading-heading">
                    golden hour at the pier 🌅
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/r/1"
              className="flex items-center hover:bg-black/8 py-2.5 px-3 rounded-user-card transition-all gap-3"
            >
              <Avatar username="mayaalvarez" size="lg" />

              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-foreground font-semibold text-subhead leading-heading">
                    @mayaalvarez
                  </span>
                  <span className="text-muted-foreground font-semibold text-timestamp">
                    Mon
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground text-caption leading-heading">
                    sent you the recipe!
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-primary-50 h-dvh">
        <div className="flex flex-col items-center justify-center mx-auto h-full gap-3 w-90">
          <div className="relative">
            <div className="-ml-18 bg-avatar-1 size-18 pt-0.5 pr-0.5 text-title flex items-center justify-center leading-heading rounded-full shrink-0">
              💬
            </div>
            <div className="absolute -left-3 z-10 top-0 bg-avatar-2 outline-3 outline-primary-50 size-18 text-title flex items-center justify-center rounded-full shrink-0">
              🌅
            </div>
          </div>

          <span className="text-center text-foreground font-bold text-heading leading-heading">
            Your conversations live here
          </span>
          <span className="text-center text-muted-foreground text-subhead leading-subhead">
            Pick a conversation from the left, or search for someone by username
            to start a new one.
          </span>

          <Badge>🔒 Every chat is end-to-end encrypted</Badge>
        </div>
      </main>
    </div>
  );
}
