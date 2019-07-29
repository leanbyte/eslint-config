'use strict';

module.exports = {
	root: true,
	env: {
		node: true,
		es6: true
	},
	rules: {
		'no-var': 1,
		"prefer-const": ["warn", {
			"destructuring": "all"
		}],
		'no-const-assign': 2,
		'prefer-spread': 1,
		'prefer-template': 0,
		'no-confusing-arrow': 2,
		'no-dupe-class-members': 2,
		'no-this-before-super': 2,
		'no-useless-computed-key': 1,
		'arrow-spacing': [2, {'before': true, 'after': true}],
		'prefer-arrow-callback': 1,
		'arrow-body-style': [0, 'as-needed'],
		// Possible Errors
		'comma-dangle': 0,
		'no-cond-assign': [2, 'always'],
		'no-console': 0,
		'no-constant-condition': 2,
		'no-control-regex': 2,
		'no-debugger': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-empty': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 1,
		'no-extra-parens': 0,
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-inner-declarations': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': [1, {skipStrings: true, skipTemplates: true, skipRegExps: true, skipComments: true}],
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-regex-spaces': 2,
		'quote-props': [1, 'as-needed'],
		'no-sparse-arrays': 2,
		'no-unreachable': 2,
		'use-isnan': 2,
		'valid-jsdoc': 0,
		'valid-typeof': 2,
		// Best Practices
		'block-scoped-var': 0,
		'complexity': 0,
		'consistent-return': 0,
		'curly': [2, 'all'],
		'default-case': 1,
		'dot-notation': [2, {
			'allowKeywords': true
		}],
		'dot-location': [2, 'property'],
		'eqeqeq': 2,
		'guard-for-in': 2,
		'no-alert': 2,
		'no-caller': 2,
		'no-div-regex': 0,
		'no-else-return': 0,
		'no-labels': 2,
		'no-eq-null': 2,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-implied-eval': 2,
		'no-iterator': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
		'no-multi-spaces': 0,
		'no-multi-str': 2,
		'no-native-reassign': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-new': 2,
		'no-octal-escape': 2,
		'no-octal': 2,
		'no-param-reassign': 0,
		'no-process-env': 0,
		'no-proto': 2,
		'no-redeclare': 2,
		'no-return-assign': 2,
		'no-script-url': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-throw-literal': 2,
		'no-unused-expressions': 2,
		'no-void': 2,
		'no-warning-comments': 0,
		'no-with': 2,
		'radix': 2,
		'vars-on-top': 0,
		'wrap-iife': [2, 'any'],
		'yoda': 2,
		// Strict
		'strict': [2, 'global'],
		// Variables
		'no-catch-shadow': 0,
		'no-delete-var': 2,
		'no-shadow-restricted-names': 2,
		'no-shadow': 0,
		'no-undef-init': 2,
		'no-undef': 2,
		'no-undefined': 0,
		'no-unused-vars': [1, {
			'argsIgnorePattern': '^__',
			'varsIgnorePattern': '^__',
			'args': 'all'
		}],
		'no-use-before-define': 0,
		// Stylistic Issues
		'brace-style': [1, '1tbs', {
			'allowSingleLine': true
		}],
		'camelcase': [1, {
			'properties': 'never'
		}],
		'comma-spacing': [1, {
			'before': false,
			'after': true
		}],
		'consistent-this': 0,
		'comma-style': [1, 'last'],
		'eol-last': 0,
		'func-names': 0,
		'func-style': 0,
		'indent': [1, 'tab', {SwitchCase: 1, MemberExpression: 'off'}],
		'key-spacing': [1, {
			'beforeColon': false,
			'afterColon': true
		}],
		'linebreak-style': 0,
		'max-nested-callbacks': 0,
		'new-cap': 0,
		'new-parens': 1,
		'newline-after-var': 0,
		'no-array-constructor': 1,
		'no-continue': 1,
		'no-inline-comments': 1,
		'no-lonely-if': 0,
		'no-mixed-spaces-and-tabs': 1,
		'no-multiple-empty-lines': [1, {
			'max': 1
		}],
		'no-nested-ternary': 1,
		'no-new-object': 1,
		'no-spaced-func': 1,
		'no-ternary': 0,
		'no-trailing-spaces': 0,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 1,
		'one-var': [1, 'never'],
		'padded-blocks': [1, 'never'],
		'operator-assignment': 0,
		'operator-linebreak': [1, 'after'],
		'semi': [1, 'always'],
		'quotes': [1, 'single', {'avoidEscape': true}],
		'semi-spacing': [1, {
			'before': false,
			'after': true
		}],
		'sort-vars': [1, {
			'ignoreCase': true
		}],
		'keyword-spacing': ["error", {
			"after": true
		}],
		'space-before-blocks': 1,
		'space-before-function-paren': [1, {
			'anonymous': 'always',
			'named': 'never'
		}],
		'object-curly-spacing': [1, 'never'],
		'array-bracket-spacing': [1, 'never'],
		'space-in-parens': [1, 'never'],
		'space-infix-ops': 1,
		'space-unary-ops': [1, {
			'words': true, 'nonwords': false
		}],
		'spaced-comment': [1, 'always'],
		'wrap-regex': 0
	}
};
