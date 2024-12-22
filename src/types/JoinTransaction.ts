export type JoinTransaction = {
    join: string;
    as?: string;
    onFirstTable: string;
    operator: string;
    onSecondTable: string;
}