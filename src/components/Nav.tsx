import { A, useLocation } from "@solidjs/router";
import { ModeToggle } from "~/components/theme-toggle";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-primary"
      : "border-transparent hover:border-secondary";
  return (
    <nav class="flex transition duration-300 bg-background/80 items-center fixed top-0 w-screen shadow hover:bg-background">
      <A href="/" class="ml-2 p-4 text-primary font-bold">
        CodedMasonry
      </A>
      <ul class="container flex items-center p-3 text-foreground">
        <li class={`transition border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <A href="/">Home</A>
        </li>
        <li class={`transition border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <A href="/about">About</A>
        </li>
      </ul>

      <div class="mr-4">
        <ModeToggle />
      </div>
    </nav>
  );
}
