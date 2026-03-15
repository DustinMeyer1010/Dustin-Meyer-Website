import type { Tag } from "../context/project";
import { RetroIcons } from "$lib/retro/handler/icons";



export namespace RetroTags {

  export const go: Tag = { title: "Golang", iconPath: RetroIcons.go }
  export const svelte: Tag = { title: "Svelte", iconPath: RetroIcons.svelte }
  export const html: Tag = { title: "HTML", iconPath: RetroIcons.html }
  export const css: Tag = { title: "CSS", iconPath: RetroIcons.css }
  export const python: Tag = { title: "Python", iconPath: RetroIcons.python }
  export const typescript: Tag = { title: "TypeScript", iconPath: RetroIcons.typescript }
  export const sqlite: Tag = { title: "SQLite", iconPath: RetroIcons.Sqlite }
  export const activeDirectory: Tag = { title: "Active Directory", iconPath: RetroIcons.activeDirectory }

}


