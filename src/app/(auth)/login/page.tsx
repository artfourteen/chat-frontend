import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { LabelInput } from "@/shared/ui/label-input";
import { Logo } from "@/shared/ui/logo";

export default function LoginPage() {
  return (
    <main className="h-dvh flex items-center justify-center">
      <div className="w-full sm:w-100 bg-elevated shadow-modal sm:rounded-card px-8 py-8.5 flex flex-col gap-3">
        <Logo />

        <div className="flex flex-col gap-1 w-full">
          <h1 className="text-foreground font-bold text-heading leading-heading">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-body leading-body">
            Log in to pick up where you left off.
          </p>
        </div>

        <form className="flex flex-col gap-3">
          <LabelInput
            id="username-or-email"
            label="Username or email"
            autoComplete="username"
          />
          <LabelInput
            id="password"
            label="Password"
            type="password"
            autoComplete="new-password"
          />

          <Button size="lg" type="submit" className="mt-1">
            Log in
          </Button>
        </form>

        <div className="flex items-center gap-0.5 text-muted-foreground text-caption leading-heading self-center">
          <span>New here?</span>
          <Link
            href="/register"
            className="text-primary-500 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
}
