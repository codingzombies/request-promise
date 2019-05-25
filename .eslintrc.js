module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true,
		'jest/globals': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:flowtype/recommended',
		'plugin:flowtype-errors/recommended'
	],
	parser: 'babel-eslint',
	'parserOptions': {
		'ecmaFeatures': {
		},
		allowImportExportEverywhere: true,
		'ecmaVersion': '2018',
		'sourceType': 'module'
	},
	'plugins': [
		'import',
		'async-await',
		'jest',
		'flowtype',
		'flowtype-errors'
	],
	'settings': {
		'import/resolver': {
			node: {
				extensions: ['.js', '.json', '.mjs']
			},
			alias: {
				map: [
					['$libs', './src/libs']
				]
			}
		},
		'flowtype': {
			'onlyFilesWithFlowAnnotation': false
		}
	},
	'rules': {
		// "import/extensions": [
		// 	"warn",
		// 	"always",
		// 	{
		// 		"js": "never",
		// 		"mjs": "never"
		// 	}
		// ],
		'flowtype/space-before-generic-bracket': 'off',
		'import/extensions': 'off',
		'accessor-pairs': 'warn',
		'array-bracket-spacing': [
			'warn',
			'never'
		],
		'array-callback-return': 'warn',
		'arrow-body-style': 'off',
		'arrow-spacing': [
			'warn',
			{
				'after': true,
				'before': true
			}
		],
		'block-scoped-var': 'off',
		'block-spacing': 'warn',
		'no-mixed-spaces-and-tabs': 'warn',
		'no-redeclare': 'warn',
		'brace-style': [
			'warn',
			'1tbs'
		],
		'callback-return': 'off',
		'camelcase': [
			'off',
			{
				'properties': 'never'
			}
		],
		'class-methods-use-this': 'off',
		'comma-dangle': 'warn',
		'comma-spacing': [
			'warn',
			{
				'after': true,
				'before': false
			}
		],
		'comma-style': [
			'warn',
			'last'
		],
		'complexity': 'warn',
		'computed-property-spacing': [
			'warn',
			'never'
		],
		'consistent-return': 'off',
		'consistent-this': 'warn',
		'curly': 'off',
		'default-case': 'off',
		'dot-location': [
			'warn',
			'property'
		],
		'dot-notation': [
			'warn',
			{
				'allowKeywords': true
			}
		],
		'eol-last': 'off',
		'eqeqeq': 'off',
		'func-call-spacing': 'off',
		'func-names': [
			'warn',
			'never'
		],
		'no-control-regex': 'off',
		'generator-star-spacing': 'warn',
		'global-require': 'warn',
		'guard-for-in': 'warn',
		'handle-callback-err': 'warn',
		'id-blacklist': 'warn',
		'id-length': 'off',
		'id-match': 'warn',
		'indent': 'off',
		'init-declarations': 'off',
		'jsx-quotes': 'warn',
		'key-spacing': 'warn',
		'keyword-spacing': [
			'warn',
			{
				'after': true,
				'before': true
			}
		],
		'line-comment-position': 'off',
		'linebreak-style': [
			'warn',
			'unix'
		],
		'lines-around-comment': 'warn',
		'lines-around-directive': 'warn',
		'max-depth': 'warn',
		'max-len': 'off',
		'max-lines': [
			'warn',
			{
				'max': 500
			}
		],
		'max-nested-callbacks': 'warn',
		'max-params': 'off',
		'max-statements': [
			'warn',
			{
				'max': 100
			}
		],
		'max-statements-per-line': 'warn',
		'multiline-ternary': 'off',
		'new-parens': 'off',
		'newline-after-var': [
			'warn',
			'always'
		],
		'newline-before-return': 'warn',
		'newline-per-chained-call': 'warn',
		'no-alert': 'warn',
		'no-cond-assign': 'warn',
		'no-array-constructor': 'warn',
		'no-bitwise': 'warn',
		'no-caller': 'warn',
		'no-catch-shadow': 'warn',
		'no-confusing-arrow': 'off',
		'no-console': 'off',
		'no-continue': 'off',
		'no-div-regex': 'warn',
		'no-duplicate-imports': 'off',
		'no-else-return': 'off',
		'no-empty-function': 'warn',
		'no-eq-null': 'warn',
		'no-eval': 'warn',
		'no-extend-native': 'warn',
		'no-extra-bind': 'warn',
		'no-extra-label': 'warn',
		'no-extra-parens': 'off',
		'no-floating-decimal': 'warn',
		'no-global-assign': 'off',
		'no-implicit-coercion': 'off',
		'no-implicit-globals': 'warn',
		'no-implied-eval': 'warn',
		'no-inline-comments': 'off',
		'no-inner-declarations': [
			'warn',
			'functions'
		],
		'no-invalid-this': 'off',
		'no-iterator': 'warn',
		'no-label-var': 'warn',
		'no-labels': 'warn',
		'no-lone-blocks': 'warn',
		'no-lonely-if': 'warn',
		'no-loop-func': 'warn',
		'no-magic-numbers': 'off',
		'no-mixed-operators': 'off',
		'no-mixed-requires': 'warn',
		'no-multi-spaces': 'off',
		'no-multi-str': 'warn',
		'no-multiple-empty-lines': 'off',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'warn',
		'no-new': 'off',
		'no-new-func': 'warn',
		'no-new-object': 'warn',
		'no-new-require': 'warn',
		'no-new-wrappers': 'warn',
		'no-octal-escape': 'warn',
		'no-constant-condition': 'warn',
		'no-dupe-keys': 'warn',
		'no-param-reassign': [
			'error',
			{
				'props': false
			}
		],
		'no-path-concat': 'off',
		'no-process-env': 'off',
		'no-process-exit': 'off',
		'no-proto': 'warn',
		'no-prototype-builtins': 'warn',
		'no-restricted-globals': 'warn',
		'no-restricted-imports': 'warn',
		'no-restricted-modules': 'warn',
		'no-restricted-properties': 'warn',
		'no-restricted-syntax': 'warn',
		'no-return-assign': 'off',
		'no-script-url': 'warn',
		'no-self-compare': 'warn',
		'no-sequences': 'warn',
		'no-shadow': 'off',
		'no-shadow-restricted-names': 'warn',
		'no-spaced-func': 'off',
		'no-sync': 'error',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'warn',
		'no-ternary': 'off',
		'no-throw-literal': 'warn',
		'no-trailing-spaces': [
			'warn',
			{
				'skipBlankLines': true
			}
		],
		'no-undef': 'error',
		'no-undef-init': 'warn',
		'no-undefined': 'off',
		'no-underscore-dangle': 'off',
		'no-unmodified-loop-condition': 'warn',
		'no-unneeded-ternary': 'warn',
		'no-unsafe-negation': 'warn',
		'no-unused-expressions': 'warn',
		'no-unused-vars': 'error',
		'no-use-before-define': 'off',
		'no-useless-call': 'warn',
		'no-useless-computed-key': 'warn',
		'no-useless-concat': 'warn',
		'no-useless-constructor': 'warn',
		'no-useless-escape': 'off',
		'no-useless-rename': 'warn',
		'no-var': 'off',
		'no-void': 'warn',
		'no-warning-comments': 'warn',
		'no-whitespace-before-property': 'off',
		'no-with': 'warn',
		'object-curly-newline': 'off',
		'object-curly-spacing': [
			'warn',
			'never'
		],
		'object-property-newline': 'off',
		'object-shorthand': 'off',
		'one-var': 'off',
		'one-var-declaration-per-line': 'warn',
		'operator-assignment': 'warn',
		'operator-linebreak': [
			'warn',
			null
		],
		'padded-blocks': 'off',
		'prefer-arrow-callback': 'off',
		'prefer-const': 'off',
		'prefer-numeric-literals': 'warn',
		'prefer-reflect': 'off',
		'prefer-rest-params': 'warn',
		'prefer-spread': 'warn',
		'prefer-template': 'off',
		'quote-props': 'off',
		'quotes': [
			'warn',
			'single'
		],
		'radix': 'off',
		'require-jsdoc': 'off',
		'rest-spread-spacing': 'warn',
		'semi': 'off',
		'semi-spacing': 'warn',
		'sort-imports': 'off',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': 'warn',
		'space-before-function-paren': 'warn',
		'space-in-parens': [
			'warn',
			'never'
		],
		'space-infix-ops': 'off',
		'space-unary-ops': 'warn',
		'spaced-comment': [
			'warn',
			'always'
		],
		'strict': 'warn',
		'symbol-description': 'warn',
		'template-curly-spacing': 'warn',
		'unicode-bom': [
			'warn',
			'never'
		],
		'valid-jsdoc': 'warn',
		'vars-on-top': 'off',
		'wrap-iife': 'warn',
		'wrap-regex': 'off',
		'yield-star-spacing': 'warn',
		'yoda': [
			'warn',
			'never'
		],
		'no-unreachable': 'off',

		'require-yield': 'off',
		'import/no-unresolved': 'off',
		'func-style': 'off',
		'no-plusplus': 'off',
		'no-empty-pattern': 'off',
		'no-empty': 'warn',
		'no-catch-shadow': 'off',
		'no-irregular-whitespace': 'warn',
		'arrow-parens': 2,
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error"
	}
}
