import type { Tag } from "../context/project";
import { RetroIcons } from "$lib/retro/handler/icons";



export namespace RetroTags {

  export const go: Tag = { title: "Golang", iconPath: RetroIcons.GO }
  export const svelte: Tag = { title: "Svelte", iconPath: RetroIcons.SVELTE }
  export const html: Tag = { title: "HTML", iconPath: RetroIcons.HTML }
  export const css: Tag = { title: "CSS", iconPath: RetroIcons.CSS }
  export const python: Tag = { title: "Python", iconPath: RetroIcons.PYTHON }
  export const typescript: Tag = { title: "TypeScript", iconPath: RetroIcons.TYPESCRIPT }
  export const sqlite: Tag = { title: "SQLite", iconPath: RetroIcons.SQLITE }
  export const activeDirectory: Tag = { title: "Active Directory", iconPath: RetroIcons.ACTIVEDIRECTORY }
  export const terminal: Tag = { title: "Terminal", iconPath: RetroIcons.TERMINAL }
  export const gui: Tag = { title: "GUI", iconPath: RetroIcons.GUI }
}
