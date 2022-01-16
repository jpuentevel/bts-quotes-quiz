import { extendTheme } from "@chakra-ui/react"

export const myNewTheme = extendTheme({
    colors: {
        bgPrimary: "#C7DEF4", //check
        bgSecondary: "#352A55",
        text: "#352A55", //check
        btnPrimary: "#0055D6", //check
        btnSecondary: "#FFC8DE", //check
    },
    fonts: {
        body: "Roboto, sans-serif",
        heading: "Roboto, sans-serif",
        mono: "Menlo, monospace",
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
    },
})