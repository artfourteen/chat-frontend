import Link from "next/link";
import { RegisterForm } from "@/features/auth";
import { Badge } from "@/shared/ui/badge";
import { AuthTemplate } from "@/widgets/auth/ui/auth-template";

export default function RegisterPage() {
  return (
    <AuthTemplate
      title="Create your account"
      subtitle="A calm, private space for your conversations."
    >
      <RegisterForm />

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
    </AuthTemplate>
  );
}
