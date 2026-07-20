import { Logo } from "@/shared/ui/logo";

interface AuthTemplateProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export const AuthTemplate = ({
  title,
  subtitle,
  children,
}: AuthTemplateProps) => {
  return (
    <main className="relative h-dvh flex items-center justify-center bg-auth">
      <div className="absolute top-20 left-20 size-40 rounded-full bg-apricot-300 blur-3xl" />
      <div className="absolute bottom-20 right-20 size-40 rounded-full bg-accent-300 blur-3xl" />

      <div className="w-full sm:w-110 bg-elevated shadow-modal sm:rounded-card px-8 py-8.5 flex flex-col gap-3">
        <Logo />

        <div className="flex flex-col gap-1 w-full">
          <h1 className="text-foreground font-bold text-heading leading-heading">
            {title}
          </h1>
          <p className="text-muted-foreground text-body leading-body">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </main>
  );
};
