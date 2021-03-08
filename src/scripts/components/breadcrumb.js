/* ----------------------------------------
  Components / Breadcrumb
---------------------------------------- */
export default function breadcrumb() {

  /**
   * Hijack click and copy to clipboard
   */

  const clipboardWorthyCrumbs = document.querySelectorAll('.js-crumb');

  // for each intractable breadcrumb
  clipboardWorthyCrumbs.forEach( (crumb) => {
    // write function to copy "text"
    function copyURI(trgt) {
      trgt.preventDefault();
      navigator.clipboard.writeText(trgt.target.getAttribute('href')).then(() => {
        /* clipboard successfully set */
        alert(trgt)
      }, () => {
        /* clipboard write failed */
      });
  }
    // function copyUrl(url) {
    //   let copyText = url.href || 'https://recipes.onemohrti.me';
    //   // copyText[0].select();
    //   document.execCommand('copy');
    // }
    crumb.addEventListener('click', (e) => {
      // hijack click
      e.preventDefault();
      copyURI(e.target);
    })
  } );
}
