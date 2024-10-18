function reloadPreview() {
    const iframe = document.querySelector('.preview-iframe');
    iframe.src = iframe.src;
}

// Reload the preview every week (7 days)
setInterval(reloadPreview, 7 * 24 * 60 * 60 * 1000);
