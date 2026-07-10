import Link from "next/link";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { LabelInput } from "@/shared/ui/label-input";
import { Logo } from "@/shared/ui/logo";

export default function RegisterPage() {
  return (
    <main className="h-dvh flex items-center justify-center">
      <div className="w-full sm:w-100 bg-elevated shadow-modal sm:rounded-card px-8 py-8.5 flex flex-col gap-3">
        <Logo />

        <div className="flex flex-col gap-1 w-full">
          <h1 className="text-foreground font-bold text-heading leading-heading">
            Create your account
          </h1>
          <p className="text-muted-foreground text-body leading-body">
            A calm, private space for your conversations.
          </p>
        </div>

        <form className="flex flex-col gap-3">
          <LabelInput id="username" label="Username" autoComplete="username" />
          <LabelInput
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
          />
          <LabelInput
            id="password"
            label="Password"
            type="password"
            autoComplete="new-password"
          />

          <Button size="lg" type="submit" className="mt-1">
            Create account
          </Button>
        </form>

        <Badge className="self-center">
          🔒 Your messages are end-to-end encrypted
        </Badge>

        <div className="flex items-center gap-0.5 text-muted-foreground text-caption leading-heading self-center">
          <span>Already have an account?</span>
          <Link
            href="/login"
            className="text-primary-500 font-semibold hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}
