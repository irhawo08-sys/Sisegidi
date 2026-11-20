
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl animate-fadeUp ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className={dark ? "eyebrow text-gold-light" : "eyebrow"}>
        {eyebrow}
      </p>

      <h2
        className={`mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.8rem] ${
          dark ? "text-beige" : "text-forest"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-8 sm:text-lg ${
            dark ? "text-beige/75" : "text-ink/65"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
