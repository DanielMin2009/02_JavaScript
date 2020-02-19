/* ======================== count Words 01 ======================== */
document.getElementById('btn-modalAdd').addEventListener('click', function () {
    document.getElementById('overlayAdd').classList.add('is-visible');
    document.getElementById('modalAdd').classList.add('is-visible');
});

document.getElementById('close-btnAdd').addEventListener('click', function () {
    document.getElementById('overlayAdd').classList.remove('is-visible');
    document.getElementById('modalAdd').classList.remove('is-visible');
});

document.getElementById('splitName').addEventListener('click', function () {
    document.getElementById('overlayAdd').classList.remove('is-visible');
    document.getElementById('modalAdd').classList.remove('is-visible');
});

document.getElementById('overlayAdd').addEventListener('click', function () {
    document.getElementById('overlayAdd').classList.remove('is-visible');
    document.getElementById('modalAdd').classList.remove('is-visible');
});
