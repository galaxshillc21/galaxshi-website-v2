import NavTop from "@/components/ui/navTop";
import { Locale } from "@/utils/i18n";

type HeaderProps = {
  lang: Locale;
};

export default function Header({ lang }: HeaderProps) {
  return <NavTop lang={lang} />;
}
