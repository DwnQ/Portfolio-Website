import { ArrowUpFromDot } from "lucide-react";

type Props = {};

export default function Index({}: Props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className="p-2 cursor-pointer bg-gray-300 rounded-full"
      aria-label="Scroll to top of page"
      role="button"
      tabIndex={0}
    >
      <ArrowUpFromDot className="text-black dark:text-white" />
    </div>
  );
}
