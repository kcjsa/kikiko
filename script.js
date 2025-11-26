document.getElementById("youtube").addEventListener("click", () => {
    window.open("https://www.youtube.com/@%E3%81%8D%E3%81%8D%E3%81%93");
});

document.getElementById("discord").addEventListener("click", () => {
    window.open("https://discord.com/invite/mvhBfcB3Cb");
});

const API_KEY = "AIzaSyB-fUZ1xw7GkQKkM3kAGCmpKK-VNGd7sKM";
const CHANNEL_ID = "UCfdFn96j61rbSr2kzv2f_3g";

async function fetchLatestVideo() {
    const url =
        "https://www.googleapis.com/youtube/v3/search?" +
        "key=" + API_KEY +
        "&channelId=" + CHANNEL_ID +
        "&part=snippet" +
        "&order=date" +
        "&maxResults=1" +
        "&type=video";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            document.getElementById("latestVideo").innerText =
                "最新動画が見つかりませんでした。";
            return;
        }

        const videoId = data.items[0].id.videoId;
        const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}`
        console.log(videoUrl,videoUrl)
        document.getElementById("latestVideo").innerHTML =
  `<iframe width="560" height="315"
           src="https://www.youtube-nocookie.com/embed/${videoId}"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin"
           allowfullscreen>
   </iframe>`;


    } catch (e) {
        document.getElementById("latestVideo").innerText =
            "エラーが発生しました。";
    }
}

fetchLatestVideo();
