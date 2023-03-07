import {FieldValidator} from "final-form";

export default class Validators {
    static required(value: any) {
        if (value) return undefined

        return 'Required'
    }

    static max(max: number) {
        return (str: string = '') => {
            return str?.length <= max ? undefined : `Max length is ${max} symbols`;
        };
    }

    static min(min: number) {
        return (str: string = '') => {
            return str.length >= min ? undefined : `Min length is ${min} symbols`;
        };
    }
    static compose(...validators: FieldValidator<any>[]) {
        return (value?: string) =>
            validators.reduce((error, validator) => error || validator(value), undefined);
    }
}
