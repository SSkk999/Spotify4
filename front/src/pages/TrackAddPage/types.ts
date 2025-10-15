export interface Track {
    Title : string;
    Description: string;
    AudioFile :File | null;
    PosterUrl: string;
    ReleaseDate: Date;
    GenreId: string
}
