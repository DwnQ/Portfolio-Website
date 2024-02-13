import { FileText } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {};

export default function index({}: Props) {
  return (
    <Link
      className="cursor-pointer p-2 bg-gray-300 rounded-full"
      aria-label="Link to CV"
      tabIndex={0}
      role="button"
      href="/CV.pdf"
      target="_blank"
    >
      <FileText className="text-black dark:text-white" />
    </Link>
  );
}
