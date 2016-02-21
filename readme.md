# jscs-preset-leanbyte

Common eslint configuration for LeanByte

## Usage

1. Add this module as a `devDependency`:

	`npm install -D eslint-config-leanbyte`

2. Declare it as base configuration in your `.eslintrc` file:

	- For node.js projects:

		```
		{
			"root": true,
			"extends": "leanbyte"
		}
		```

	- For browser projects:

		```
		{
			"root": true,
			"extends": "leanbyte/browser"
		}
		```

## License

Licensed under the MIT License [(enclosed)](./LICENSE). 
