import { Time } from "@angular/common";

export interface record {
    id? : number;
    bsValue: number;
    label: string;
    date?: Date;
    time?: Time;

}