document.addEventListener('DOMContentLoaded', () => {
  const editor = document.querySelector('.text-editor');
  if (!editor) return;

  const wordCount = document.getElementById('wordCount');
  const charCount = document.getElementById('charCount');
  const readingTime = document.getElementById('readingTime');

  const updateCounts = () => {
    const text = editor.innerText || '';
    const words = text.trim().split(/\s+/).filter(Boolean);

    if (wordCount) wordCount.innerText = String(words.length);
    if (charCount) charCount.innerText = String(text.length);
    if (readingTime) readingTime.innerText = `${Math.max(1, Math.ceil(words.length / 200))} min`;
  };

  editor.addEventListener('input', updateCounts);
  updateCounts();
});

function format(command) {
  document.execCommand(command, false, null);
}

function insertDate() {
  const date = new Date().toLocaleDateString();
  document.execCommand('insertText', false, date);
}

setInterval(() => {
  const editor = document.querySelector('.text-editor');
  if (!editor) return;

  localStorage.setItem('creativeAcademyDraft', editor.innerHTML);
}, 3000);

window.onload = () => {
  const editor = document.querySelector('.text-editor');
  if (!editor) return;

  const saved = localStorage.getItem('creativeAcademyDraft');
  if (saved) editor.innerHTML = saved;
};
