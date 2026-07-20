import Link from "next/link";
import { LoginForm } from "@/features/auth";
import { AuthTemplate } from "@/widgets/auth/ui/auth-template";

export default function LoginPage() {
  return (
    <AuthTemplate
      title="Welcome back"
      subtitle="Log in to pick up where you left off."
    >
      <LoginForm />

      <div className="flex items-center gap-0.5 text-muted-foreground text-caption leading-heading self-center">
        <span>New here?</span>
        <Link
          href="/register"
          className="text-primary-500 font-semibold hover:underline"
        >
          Create an account
        </Link>
      </div>
    </AuthTemplate>
  );
}
