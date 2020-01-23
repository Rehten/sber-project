export interface Delete<O> {
    delete(id: string): Promise<O>;
}
