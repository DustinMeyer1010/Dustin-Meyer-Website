import placeholder from "$lib/assets/placeholder.jpg"
    import goIcon from "$lib/assets/icons/golang.png"
import { ActiveDirectoryTag, cssTag, goTag, htmlTag, sqliteTag, svelteTag, typescriptTag } from "./tags"

export type Tag = {
    iconPath: string,
    title: string
}

export type Project = {
    imgPath: string,
    description: string,
    title: string,
    githubLink: string,
    tags: Tag[]
}




export const URMCHUB: Project = {
    imgPath: placeholder,
    description: "\
    The URMC hub is a tool that combines multiple applications into one. \
    With a backend written in go and frontend written in svelte. It allows \
    for service desk agents to pull active directory information quickly and \
    in easy to view manner.",
    title: "URMC-HUB",
    githubLink: "https://github.com/DustinMeyer1010/URMC-HUB/tree/2.0-master",
    tags: [goTag, svelteTag, sqliteTag, typescriptTag, cssTag, htmlTag, ActiveDirectoryTag]
}