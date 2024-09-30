import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import parser from 'vue-eslint-parser';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/naming-convention': ['warn', {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
            }],
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/strict-boolean-expressions': ['off'],
        },
    },
    ...vue.configs['flat/recommended'], 
    {
        files: ['assets/js/**/*.{vue,ts}'],
        plugins: {
            'typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: parser,
            parserOptions: {
                parser: tseslint.parser,
                project: ["./tsconfig.json"],
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
                ecmaVersion: 'latest',
            }
        },
        rules: {
            'vue/script-setup-uses-vars': 'error',
            'vue/no-unused-components': 'warn',
            'vue/multi-word-component-names': 'off',
            'vue/one-component-per-file': 'off'
        }
    },
    eslintConfigPrettier,
    {
        plugins: {
            prettier: prettier,
        },
        rules: {
            'prettier/prettier': ['error', {}, {
                usePrettierrc: true,
            }],
        }
    }
);