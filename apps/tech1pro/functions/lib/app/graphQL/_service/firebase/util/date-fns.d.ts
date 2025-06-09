export declare const sortByISOStringCreatedDate: <T extends {
    created: string;
}>(items: T[]) => T[];
export declare const sortByISOStringUpdatedDate: <T extends {
    updated: string;
}>(items: T[]) => T[];
export declare const createdBetweenDate: <T extends {
    created: string;
}>(items: T[], afterISODateString: string, beforeISODateString: string | undefined) => T[];
