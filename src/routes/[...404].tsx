import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main>
      <div class="text-center text-muted-foreground p-4">
        <h1 class="max-6-xs text-6xl font-extrabold uppercase mt-36 text-primary">
          Page Not Found
        </h1>
        <p class="mt-4">
          I ain't hiding nothing from no one because of nothing. Let's go back{" "}
          <A href="/" target="_blank" class="text-sky-600 hover:underline">
            to the home page
          </A>
          .
        </p>
      </div>
      <p class="absolute bottom-4 w-screen text-center text-foreground/15">
        /robot.txt is pretty fancy
      </p>
    </main>
  );
}
