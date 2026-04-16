let likeBtn = document.getElementById("like-btn");
let dislikeBtn = document.getElementById("dislike-btn");

let likeCount = document.getElementById("like-count");
let dislikeCount = document.getElementById("dislike-count");

// Load saved values
let likes = localStorage.getItem("likes") || 0;
let dislikes = localStorage.getItem("dislikes") || 0;

likeCount.textContent = likes;
dislikeCount.textContent = dislikes;

likeBtn.onclick = () => {
    likes++;
    localStorage.setItem("likes", likes);
    likeCount.textContent = likes;
};

dislikeBtn.onclick = () => {
    dislikes++;
    localStorage.setItem("dislikes", dislikes);
    dislikeCount.textContent = dislikes;
};

