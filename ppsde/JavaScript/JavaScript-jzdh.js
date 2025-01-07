function simulateProgress() {
    const progressBar = document.getElementById('progress');
    const loading = document.getElementById('loading');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            loading.style.display = 'none';
        } else {
            width += 10;
            progressBar.style.width = width + '%';
        }
    }, 200);
}


window.onload = simulateProgress;
