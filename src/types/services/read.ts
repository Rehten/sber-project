export interface Read<O> {
    read(url: Record<string, string>): Promise<O>;
}
