export interface Read<O> {
    read(data: Record<string, any>): Promise<O>;
}
