export function setContent(
    html: string
): void {

    const content =
        document.getElementById(
            "content"
        );

    if (!content) return;

    content.innerHTML = html;

}