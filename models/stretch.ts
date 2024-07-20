export enum RepetitionType {
    Bump = 'bump',
    Hold = 'hold',
}

export interface Repetition {
    type: RepetitionType;
    count: number;
    text: string;
}

export interface StretchExercise {
    id: string;
    name: string;
    steps: string[];
    repetitions: Repetition[];
}