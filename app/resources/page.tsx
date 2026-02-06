import ComingSoon from "@/components/ComingSoon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - 2bitprince",
  description:
    "Guides, case studies, and documentation to help you get the most out of 2bitprince.",
};

export default function ResourcesPage() {
  return (
    <ComingSoon
      title="Resources"
      description="We are curating a library of guides, tutorials, and success stories to help you optimize your workforce management."
    />
  );
}
