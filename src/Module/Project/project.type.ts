// project.type.ts
export type Project = {
    id: string;
    name: string;
    color: string;
    commentCount: number;
    isShared: boolean;
    isFavorite: boolean;
    url: string;
    isInboxProject: boolean;
    isTeamInbox: boolean;
    order: number;
    viewStyle: string;
};
