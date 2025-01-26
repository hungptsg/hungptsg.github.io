/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    // colors: {

    // },
    extend: {
      colors: {
        'colorless': 'transparent',
        'debug': 'red',

        'color-text': 'var(--color-text)',
        'color-text-subtle': 'var(--color-text-subtle)',
        'color-hover': 'var(--color-hover)',

        'color-background': 'var(--color-background)',
        'color-border': 'var(--color-border)',

        'color-code-header': 'var(--color-code-header)',
        'color-code-block': 'var(--color-code-block)',

        'color-visited': 'var(--color-visited)',
        'color-hyperlink': 'var(--color-hyperlink)',

        'color-primary-base': 'var(--color-primary-base)',
        'color-primary-background': 'var(--color-primary-background)',
        'color-primary-hover': 'var(--color-primary-hover)',
        'color-primary-active': 'var(--color-primary-active)',

        'color-secondary-base': 'var(--color-secondary-base)',
        'color-secondary-background': 'var(--color-secondary-background)',
        'color-tertiary-base': 'var(--color-tertiary-base)',
        'color-tertiary-background': 'var(--color-tertiary-background)',

        'color-success-base': 'var(--color-success-base)',
        'color-success-background': 'var(--color-success-background)',
        'color-info-base': 'var(--color-info-base)',
        'color-info-background': 'var(--color-info-background)',
        'color-warning-base': 'var(--color-warning-base)',
        'color-warning-background': 'var(--color-warning-background)',
        'color-danger-base': 'var(--color-danger-base)',
        'color-danger-background': 'var(--color-danger-background)',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
