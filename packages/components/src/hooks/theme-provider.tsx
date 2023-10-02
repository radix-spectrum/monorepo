"use client";

import { useContext } from "react";
import { ThemeProviderContext } from "../contexts";

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined) {
        const err = new Error(`useTheme must be used within a <ThemeProvider />`);
        if (Error.captureStackTrace) Error.captureStackTrace(err, useTheme);
        throw err;
    }

    return context;
};
