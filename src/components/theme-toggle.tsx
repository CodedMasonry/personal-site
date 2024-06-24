import { useColorMode } from "@kobalte/core"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "~/components/ui/dropdown-menu"
 
export function ModeToggle() {
  const { setColorMode } = useColorMode()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger as={Button<"button">} variant="ghost" size="sm" class="w-9 px-0">
        <img src="/icons/sun.svg" class="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <img src="/icons/moon.svg" class="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 invert" />
        <span class="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => setColorMode("light")}>
          <img class="mr-2 size-4 dark:invert" src="/icons/sun.svg"/>
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setColorMode("dark")}>
          <img class="mr-2 size-4 dark:invert" src="/icons/moon.svg"/>
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setColorMode("system")}>
          <img class="mr-2 size-4 dark:invert"  src="/icons/device-laptop.svg" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}