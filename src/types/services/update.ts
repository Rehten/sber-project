export interface Update<I, O> {
    update(data: I): Promise<O>;
}
