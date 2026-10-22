// Page motion: scroll reveals, word-by-word text reveals, parallax, count-ups and a progress bar.
// Everything is skipped when the visitor prefers reduced motion.

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Split text into words ---------- */
// Wraps every word of [data-split] elements in two spans so each word can slide up from a mask.
// Inner elements (e.g. <span class="muted">) are kept and their text is split too.
function splitWords(root: Element) {
  let i = 0;
  const walk = (node: Node) => {
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent ?? "").split(/(\s+)/);
        const frag = document.createDocumentFragment();
        for (const part of parts) {
          if (!part) continue;
          if (/^\s+$/.test(part)) {
            frag.append(" ");
            continue;
          }
          const outer = document.createElement("span");
          outer.className = "w";
          const inner = document.createElement("span");
          inner.className = "wi";
          inner.style.setProperty("--i", String(i++));
          inner.textContent = part;
          outer.append(inner);
          frag.append(outer);
        }
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    }
  };
  walk(root);
}

/* ---------- Count numbers up ---------- */
function countUp(el: HTMLElement) {
  const raw = el.dataset.count ?? el.textContent ?? "";
  const m = raw.match(/^([^\d]*)(\d+)(.*)$/);
  if (!m) return;
  const [, pre, num, post] = m;
  const target = Number(num);
  const start = performance.now();
  const dur = 1400;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${pre}${Math.round(target * eased)}${post}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- Reveal on scroll ---------- */
const splitEls = document.querySelectorAll<HTMLElement>("[data-split]");
splitEls.forEach(splitWords);

const revealEls = document.querySelectorAll<HTMLElement>(".rv, [data-split], [data-count]");
// A fully clipped .wipe never counts as visible, so watch its parent and reveal the wipe from there.
const wipes = document.querySelectorAll<HTMLElement>(".wipe");
const wipeByParent = new Map<Element, HTMLElement[]>();
wipes.forEach((w) => {
  const parent = w.parentElement!;
  wipeByParent.set(parent, [...(wipeByParent.get(parent) ?? []), w]);
});

const reveal = (el: HTMLElement) => {
  el.classList.add("in");
  if (el.dataset.count && !reduced) countUp(el);
};

if (reduced || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("in"));
  wipes.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        if (wipeByParent.has(e.target)) wipeByParent.get(e.target)!.forEach((w) => w.classList.add("in"));
        if (e.target.matches(".rv, [data-split], [data-count]")) reveal(e.target as HTMLElement);
        io.unobserve(e.target);
      }),
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
  );
  new Set<Element>([...revealEls, ...wipeByParent.keys()]).forEach((el) => io.observe(el));
}

/* ---------- Scroll-linked motion ---------- */
// data-parallax="0.15": moves vertically at a fraction of scroll speed.
// data-drift="-0.2": moves horizontally as the element crosses the viewport.
const parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
const drift = Array.from(document.querySelectorAll<HTMLElement>("[data-drift]"));
const bar = document.querySelector<HTMLElement>(".progress");

if (!reduced) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = innerHeight;
    for (const el of parallax) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      const speed = Number(el.dataset.parallax);
      const offset = (r.top + r.height / 2 - vh / 2) * speed;
      el.style.translate = `0 ${offset.toFixed(1)}px`;
    }
    for (const el of drift) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      const progress = (vh - r.top) / (vh + r.height); // 0 → 1 while on screen
      const amount = Number(el.dataset.drift) * innerWidth;
      el.style.translate = `${((progress - 0.5) * amount).toFixed(1)}px 0`;
    }
    if (bar) {
      const max = document.documentElement.scrollHeight - vh;
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    }
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  update();
}
