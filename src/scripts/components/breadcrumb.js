/* ----------------------------------------
  Components / Breadcrumb
---------------------------------------- */
import ClipboardJS from 'clipboard';
import tippy, {followCursor} from 'tippy.js';
import 'tippy.js/animations/shift-toward-subtle.css';

export default function breadcrumb() {

  /**
   * Hijack click and copy to clipboard
   */

  const lastBreadcrumb = document.querySelector('.js-crumb');
  const tooltipURL     = lastBreadcrumb.getAttribute('href');

  tippy(lastBreadcrumb, {
    content: `<span>copy:</span> ${tooltipURL}`,
    // parse `content` strings as HTML
    allowHTML: true,
    // name of animation
    animation: 'shift-toward-subtle',
    // show delay is 100ms, hide delay is 350ms
    delay: [100, 350],
    // show and hide durations are 200ms
    duration: 200,
    // follow on x axis
    followCursor: 'horizontal',
    // can be hovered over and clicked inside without hiding
    interactive: true,
    // specifies the role attribute on the tippy element
    role: 'tooltip',
    // When using modules (esm), you must import this plugin to use it
    plugins: [followCursor]
  });

  // clicking the last breadcrumb child
  lastBreadcrumb.addEventListener('click', (e) => {

    // don't leave page
    e.preventDefault();

    // copy contents into system clipboard
    // for some reason, `lastBreadcrumb` will not work as a selector
    new ClipboardJS('.js-crumb');
  });
}
