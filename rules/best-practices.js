module.exports = {
	rules: {
		camelcase: ["error", { properties: "never" }],
		eqeqeq: "error",
		"new-cap": ["error", { capIsNew: false }],
		"no-array-constructor": "error",
		"no-console": ["error", { allow: ["error"] }],
		"no-else-return": ["error", { allowElseIf: false }],
		"no-extend-native": "error",
		"no-lonely-if": "error",
		"no-param-reassign": "error",
		"no-return-assign": "error",
		"no-throw-literal": "error",
		"object-shorthand": "error",
		"prefer-const": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		radix: "error",
		yoda: "error",
		"require-await": "warn",
		"comma-dangle": 0,
	},
};
