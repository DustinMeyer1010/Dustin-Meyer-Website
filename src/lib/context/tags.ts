import type { Tag } from "./project";
import goIcon from "$lib/assets/icons/golang.png"
import svelteIcon from "$lib/assets/icons/svelte.png"
import htmlIcon from "$lib/assets/icons/html.png"
import cssIcon from "$lib/assets/icons/css.png"
import activeDriectoryIcon from "$lib/assets/icons/active-directory.png"
import pythonIcon from "$lib/assets/icons/python.png"
import typescriptIcon from "$lib/assets/icons/typescript.png"
import sqliteIcon from "$lib/assets/icons/sqlite.png"


export const goTag: Tag = { title: "Golang", iconPath: goIcon}
export const svelteTag: Tag = { title: "Svelte", iconPath: svelteIcon}
export const htmlTag: Tag = { title: "HTML", iconPath: htmlIcon}
export const cssTag: Tag = { title: "CSS", iconPath: cssIcon}
export const pythonTag: Tag = { title: "Python", iconPath: pythonIcon}
export const typescriptTag: Tag = { title: "TypeScript", iconPath: typescriptIcon}
export const sqliteTag: Tag = { title: "SQLite", iconPath: sqliteIcon}
export const ActiveDirectoryTag: Tag = { title: "Active Directory", iconPath: activeDriectoryIcon}