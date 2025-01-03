document.addEventListener("DOMContentLoaded", () => {
    const shortDescTextarea = document.getElementById("short_desc");
    const longDescTextarea = document.getElementById("long_desc");
    const lifestyleDescTextarea = document.getElementById("lifestyle_desc");

    const updateWordCount = (textarea, wordCountElementId) => {
        const wordCount = textarea.value.trim().split(/\s+/).filter(word => word).length;
        document.getElementById(wordCountElementId).textContent = `Word Count: ${wordCount}`;
    };

    // Attach event listeners to textareas
    shortDescTextarea.addEventListener("input", () => updateWordCount(shortDescTextarea, "short_desc_word_count"));
    longDescTextarea.addEventListener("input", () => updateWordCount(longDescTextarea, "long_desc_word_count"));
    lifestyleDescTextarea.addEventListener("input", () => updateWordCount(lifestyleDescTextarea, "lifestyle_desc_word_count"));
});
