'use strict';

module.exports = {
	root: true,
	extends: 'leanbyte',
	env: {
		node: false,
		es6: false,
		browser: true
	},
	rules: {
		'strict': [2, 'function'],
		'no-console': 2,

		'no-var': 0,
		'prefer-const': 0,
		'no-const-assign': 0,
		'prefer-spread': 0,
		'prefer-template': 0,
		'no-arrow-condition': 0,
		'arrow-spacing': [0, {'before': true, 'after': true}],
		'prefer-arrow-callback': 0,
		'arrow-body-style': [0, 'as-needed'],
	}
};
