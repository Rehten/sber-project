export interface Create<I, O> {
    create(data: I): Promise<O>;
}
