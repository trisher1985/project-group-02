export default function duplicateMarqueeContent(contentId) {
  const content = document.getElementById(contentId);
  const wrap = content.parentElement;
  const original = content.firstElementChild;

  while (content.offsetWidth < wrap.offsetWidth * 2) {
    const clone = original.cloneNode(true);
    content.appendChild(clone);
  }
}
