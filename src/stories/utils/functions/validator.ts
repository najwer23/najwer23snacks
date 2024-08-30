export interface ErrorValidatorOptions {
	empty?: boolean;
	email?: boolean;
}

export const validator = (
	value: string,
	errorOptions: ErrorValidatorOptions
) => {
	const validatorArr = Object.keys(
		Object.fromEntries(Object.entries(errorOptions).filter(([, val]) => val))
	);

	const validatorArrMsg = validatorArr
		.map((v) => {
			let msg;
			switch (v) {
				case "empty":
					msg = testEmptyString(value);
					break;
				case "email":
					msg = testEmail(value);
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

const testEmptyString = (value: string) => {
	return value.trim() === "" || value.trim() === null
		? "The field cannot be empty"
		: null;
};

const testEmail = (value: string) => {
	return !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value)
		? "Incorrect email address"
		: null;
};
