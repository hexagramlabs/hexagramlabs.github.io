import { Box, Glue, Penalty } from '../src/layout';
import { TextInputItem } from '../src/helpers';
export declare function box(w: number): Box;
export declare function glue(w: number, shrink: number, stretch: number): Glue;
export declare function penalty(w: number, cost: number, flagged: boolean): Penalty;
export declare function itemString(item: TextInputItem): string;
export declare function lineStrings(items: TextInputItem[], breakpoints: number[]): string[];
export declare function chunk<T>(arr: T[], width: number): T[][];
