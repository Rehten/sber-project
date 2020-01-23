export interface Entity {
    [key: string]:
        string | number | null | undefined | boolean | Entity |
        Array<string> | Array<number> | Array<null> | Array<undefined> | Array<boolean> | Array<Entity>;
}
