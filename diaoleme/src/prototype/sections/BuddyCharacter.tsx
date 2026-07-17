export function Buddy({ scale = 1 }: { scale?: number }) {
  return `<div class="buddy" style="transform:scale(${scale})"><div class="fluff"></div><div class="sprout"></div><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="blush left"></span><span class="blush right"></span></div><div class="body"></div><div class="shoe left"></div><div class="shoe right"></div></div>`
}
