export function setContent(html) {
    const content = document.getElementById("content");
    if (!content)
        return;
    content.innerHTML = html;
}
