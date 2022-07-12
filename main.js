const elements = document.querySelectorAll("body > *");

let loadingProgress = 0;
function loadElement()
{
    setTimeout(() =>
    {
        elements[loadingProgress].style.opacity = "1";
        elements[loadingProgress].style.transform = "none";
        loadingProgress++;
        if (loadingProgress < elements.length) loadElement();
    }, 100);
}
setTimeout(loadElement, 50);

const tooltip = document.querySelector("#tooltip");

function copy()
{
    navigator.clipboard.writeText("codeblock.yessness.com").then(() => console.log("Copied URL to clipboard"));
    tooltip.innerHTML = "Copied!";
}

function resetTooltip()
{
    setTimeout(() =>
    {
        tooltip.innerHTML = "Copy to clipboard";
    }, 300);
}
