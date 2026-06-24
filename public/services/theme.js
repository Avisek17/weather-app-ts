export function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}
export function loadTheme() {
    return (localStorage.getItem("theme") ?? "light");
}
export function initializeTheme() {
    const theme = loadTheme();
    if (theme === "dark") {
        document.body
            .classList.add("dark");
    }
}
export function toggleTheme() {
    document.body
        .classList.toggle("dark");
    const isDark = document.body
        .classList.contains("dark");
    saveTheme(isDark
        ? "dark"
        : "light");
}
