export {};

declare global {
    interface linkInfo {
        title: string,
        path: string
    }

    interface GitProject {
        projectTitle: string,
        gitLink: string,
        projectImage: string,
        projectDesc1: string,
        projectDesc2: string
    }

    interface Resource {
        resourceTitle: string,
        resourceURL: string
    }

    interface GameDL {
        windowsDL: string,
        macosDL: string
    }

    interface GameProject {
        projectTitle: string,
        projectDesc: string,
        projectResources: Resource[],
        projectDL: GameDL
    }
}