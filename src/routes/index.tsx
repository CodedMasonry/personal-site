import { A } from "@solidjs/router";
import { lazy, Suspense } from "solid-js";

const Projects = lazy(() => import("~/components/projects"));

export default function Home() {
  return (
    <main>
      <Projects />
    </main>
  );
}
