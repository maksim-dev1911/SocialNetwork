import { SxProps, Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
import {toArray} from "./toArray";

export const concatSx = (...args: (SxProps<Theme> | undefined | null | boolean)[]) => {
    return args.reduce<
        Array<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)>
        >((result, sx) => {
        result.push(...toArray(sx));

        return result;
    }, []);
};