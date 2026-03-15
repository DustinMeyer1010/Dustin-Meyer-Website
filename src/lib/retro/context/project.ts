import { RetroIcons } from "../handler/icons"
import { RetroTags } from "../handler/tags"

export type Tag = {
  iconPath: string,
  title: string
}

export type Project = {
  imgPath: string,
  description: string,
  title: string,
  githubLink: string,
  pageLink: string | null,
  tags: Tag[]
}

const URMC_HUB: Project = {
  imgPath: RetroIcons.placeHolder,
  description: "",
  title: "URMC-HUB",
  githubLink: "https://github.com/DustinMeyer1010/URMC-HUB/tree/2.0-master",
  pageLink: "retro/projects/urmc-hub",
  tags: [RetroTags.go, RetroTags.svelte, RetroTags.sqlite, RetroTags.typescript, RetroTags.css, RetroTags.html, RetroTags.activeDirectory]
}

const SUSHI_AND_CHOPSTICKS: Project = {
  imgPath: RetroIcons.placeHolder,
  description: "",
  title: "SUSHI AND CHOPSTICKS",
  githubLink: "",
  pageLink: "retro/projects/sushi-and-chopsticks",
  tags: [RetroTags.go, RetroTags.terminal, RetroTags.gui],
}


export const Projects: Project[] = [URMC_HUB, SUSHI_AND_CHOPSTICKS]
