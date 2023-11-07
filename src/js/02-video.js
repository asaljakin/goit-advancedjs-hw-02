import throttle from "lodash.throttle";
import VimeoPlayer from "@vimeo/player";

const localStorageKey = "videoplayer-current-time";
const iframe = document.querySelector("iframe");
const player = new VimeoPlayer(iframe);

player.on("timeupdate", throttle(onPlay, 1000));

function onPlay(evt) {
  localStorage.setItem(localStorageKey, evt.seconds);
}

player.setCurrentTime(JSON.parse(localStorage.getItem(localStorageKey)) || 0); 