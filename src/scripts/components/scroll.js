/* ----------------------------------------
  Components / Search
---------------------------------------- */
import LocomotiveScroll from 'locomotive-scroll';

export default function scroll() {

  /**
   * Searchbar in the nav activation
   */

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
}
