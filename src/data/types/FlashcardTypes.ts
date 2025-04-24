export interface BaseFlashcard {
    language: 'French' | 'Japanese' | 'Ukrainian';
    word: string;
    translation: string;
    details: string | null;
};

export interface JapaneseFLashcard extends BaseFlashcard {
    language: 'Japanese';
    romaji: string;
};

export interface UkrainianFLashcard extends BaseFlashcard {
    language: 'Ukrainian';
    transliteration: string;
};

export type FlashcardType = | BaseFlashcard | JapaneseFLashcard | UkrainianFLashcard;