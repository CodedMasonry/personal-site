import { cache, createAsync } from "@solidjs/router";
import { Octokit } from "octokit";
import { Badge } from "~/components/ui/badge";

const octokit = new Octokit({
  auth: process.env.OCTOKIT_AUTH,
  userAgent: "codedmasonry/blog",
});

type Repo = {
  name: string;
  full_name: string;
  isPrivate: boolean;
  url: string;
  description: string | null;
  created_at: string | null;
  updated_at: string | null;
};

const getRepos = cache(async () => {
  "use server";
  const response = await octokit.rest.repos.listForUser({
    username: "codedmasonry",
    sort: "updated",
    per_page: 5,
  });

  return response.data.map(
    (repo) =>
      ({
        name: repo.name,
        full_name: repo.full_name,
        isPrivate: repo.private,
        url: repo.html_url,
        description: repo.description,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
      } as Repo)
  );
}, "repos");

export const route = {
  load: () => getRepos(),
};

function parseTime(str: string) {
  const split = str.split("T")[0].split("-");
  let year = split[0];
  let month = split[1];
  let day = split[2];

  return day + "/" + month + "/" + year;
}

export default function Projects() {
  const repos = createAsync(() => getRepos());
  let recent = repos()?.[0];

  return (
    <div class="mt-36 ml-36 space-y-2">
      <h2 class="text-4xl text-primary">Most Recent Project</h2>

      <div class="flex">
        <a
          href={recent?.url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary-foreground text-xl border-b-2 border-secondary-foreground"
        >
          {recent?.full_name}
        </a>
        {true ? (
          <Badge variant="outline" class="ml-2 items-center font-sans">
            <img src="/icons/lock.svg" class="dark:invert mr-1 w-4 h-4" />
            Private
          </Badge>
        ) : (
          <></>
        )}
      </div>

      {!recent?.isPrivate ? (
        <p>{recent?.description}</p>
      ) : (
        <p>Unfortunately this repository is private</p>
      )}
      <div class="flex space-x-4">
        <Badge variant="secondary">
          Created: {recent?.created_at && parseTime(recent.created_at)}
        </Badge>
        <Badge variant="outline">
          Last Updated: {recent?.updated_at && parseTime(recent.updated_at)}
        </Badge>
      </div>
    </div>
  );
}
