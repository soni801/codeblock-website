// Runtime data
const url = "codeblock.yessness.com";

// Declare objects
const elements = document.querySelectorAll("body > *");
const tooltip = document.querySelector("#tooltip");
const statusIndicator = document.querySelector("#status-indicator");
const statusText = document.querySelector("#status-text");
const worldDownloadDialog = document.querySelector("#world-download-dialog");

// Load the page
let loadingProgress = 0;
showStatus().then(() => loadElement());

// Function for fetching the status of the server
async function showStatus()
{
    const status = (await (await fetch(`https://api.mcsrvstat.us/2/${url}`)).json());

    if (status.online)
    {
        statusIndicator.classList.add("online");
        statusText.innerHTML = `Online\u2002\u2022\u2002${status.players.online} players`;
    }
    else
    {
        statusIndicator.classList.add("offline");
        statusText.innerHTML = "Undergoing maintenance";
    }
}

// Function for loading the page
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

// Function for copying the URl to the clipboard
function copy()
{
    navigator.clipboard.writeText(url).then(() => console.log("Copied URL to clipboard"));
    tooltip.innerHTML = "Copied!";
}

// Function to reset the tooltip
function resetTooltip()
{
    setTimeout(() =>
    {
        tooltip.innerHTML = "Copy to clipboard";
    }, 300);
}
