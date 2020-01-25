export enum Severities {
    Unknown,
    Low,
    Mid,
    High,
    Higher,
    Critical
}

export const SeveritiesText: Record<Severities, string> = {
    [Severities.Unknown]: 'Неизвестно',
    [Severities.Low]: 'Низкий',
    [Severities.Mid]: 'Средний',
    [Severities.High]: 'Высокий',
    [Severities.Higher]: 'Наивысший',
    [Severities.Critical]: 'Критический'
};
