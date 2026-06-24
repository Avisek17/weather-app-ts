export function saveTheme(
    theme: string
): void {

    localStorage.setItem(
        "theme",
        theme
    );

}
export function loadTheme(): string {

    return (
        localStorage.getItem(
            "theme"
        ) ?? "light"
    );

}
export function initializeTheme(): void {

    const theme =
        loadTheme();

    if(theme === "dark") {

        document.body
            .classList.add(
                "dark"
            );

    }

}
export function toggleTheme(): void {

    document.body
        .classList.toggle(
            "dark"
        );

    const isDark =
        document.body
        .classList.contains(
            "dark"
        );

    saveTheme(
        isDark
        ? "dark"
        : "light"
    );

}