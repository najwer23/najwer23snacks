// const validatorOptions = [
//   { type: 'empty' },
//   { type: 'email' },
//   { type: 'positiveNumber', options: { min: 1, max: 1000 } },
// ];

export type ValidatorType = 'empty' | 'email' | 'numberInRange';

interface ValidatorOption {
  type: ValidatorType;
  options?: any;
}

export type ValidatorOptions = ValidatorOption[];

export const validator = (value: string, validatorOptions: ValidatorOptions) => {
  const validatorArrMsg = validatorOptions
    .map((option) => {
      let msg;
      switch (option.type) {
        case 'empty':
          msg = testEmptyString(value);
          break;
        case 'email':
          msg = testEmail(value);
          break;
        case 'numberInRange':
          msg = testNumberInRange(value, option.options);
          break;
        default: {
          msg = null;
        }
      }

      return msg;
    })
    .filter((v) => v !== null);

  return validatorArrMsg;
};

const testEmptyString = (value: string): string | null => {
  return value.trim() === '' || value.trim() === null ? 'The field cannot be empty' : null;
};

const testEmail = (value: string): string | null => {
  return !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value) ? 'Incorrect email address' : null;
};

const testNumberInRange = (value: string, options?: { min?: number; max?: number }): string | null => {
  const number = Number(value);
  const min = options?.min ?? 0;
  const max = options?.max ?? 10000;

  if (isNaN(number) || number < min || number > max) {
    return `The number must be between ${min} and ${max}`;
  }

  return null;
};
