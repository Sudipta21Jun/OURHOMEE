
let windowVisible = false;

function toggleWindow() {
    if (windowVisible) {
        document.getElementById('realWindow').classList.remove('hidden');
        document.getElementById('prank').classList.add('hidden');
    } else {
        document.getElementById('prank').classList.remove('hidden');
        document.getElementById('realWindow').classList.add('hidden');
    }
    windowVisible = !windowVisible;
}

function showSurprise() {
    document.getElementById('specialMessage').classList.remove('hidden');
    document.getElementById('music').play();
}
