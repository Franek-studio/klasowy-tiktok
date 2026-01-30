<script>
document.addEventListener("DOMContentLoaded", () => {
    const likeButton = document.querySelector(".like-button");
    const videoId = likeButton.getAttribute("data-video-id");
    const heartSpan = likeButton.querySelector(".heart");
    const countSpan = likeButton.querySelector(".like-count");

    // Klucz w localStorage oparty na ID filmu
    const storageKey = `liked_${videoId}`;

    // 1. Sprawdź stan przy ładowaniu strony
    const isLiked = localStorage.getItem(storageKey) === "true";
    if (isLiked) {
        heartSpan.textContent = "♥";
        likeButton.classList.add("liked");
    }

    // 2. Obsługa kliknięcia
    likeButton.addEventListener("click", () => {
        const currentlyLiked = localStorage.getItem(storageKey) === "true";
        
        if (!currentlyLiked) {
            // Dodaj lajka
            localStorage.setItem(storageKey, "true");
            heartSpan.textContent = "♥";
            likeButton.classList.add("liked");
        } else {
            // Usuń lajka (opcjonalne)
            localStorage.setItem(storageKey, "false");
            heartSpan.textContent = "♡";
            likeButton.classList.remove("liked");
        }
    });
});
</scrip t>

