import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/resume"
        className="group px-4 py-2.5 text-sm font-medium rounded-xl text-white brand-gradient shadow-lg hover:shadow-xl hover:shadow-neutral-500/50 transition-all duration-300 cursor-pointer flex items-center gap-2"
      >
        Get Resume/CV
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
}
