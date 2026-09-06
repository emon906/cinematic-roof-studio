import { createFileRoute } from "@tanstack/react-router";
import { DsRoofingPage } from "@/components/ds-roofing-page";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DS Roofing | Roofers in Littlehampton" },
      { name: "description", content: "Trusted roof repairs, replacements and new roof installation in Littlehampton and West Sussex. Request a free quote from DS Roofing." },
      { property: "og:title", content: "DS Roofing | Built Strong. Finished Right." },
      { property: "og:description", content: "Quality roofing and reliable service across Littlehampton and West Sussex." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <DsRoofingPage />;
}
