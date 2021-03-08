/* ----------------------------------------
  Components / Search
---------------------------------------- */
export default function search() {

  /**
   * Searchbar in the nav activation
   */

  const searchToggle = document.getElementById('searchToggle'),
        seachForm    = document.getElementById('searchForm'),
        searchClose  = document.getElementById('searchClose'),
        search       = document.getElementById('search'),
        mainNav      = document.getElementById('mainNav'),
        menu         = document.getElementById('menu');

  searchToggle.addEventListener('click', function (e) {
    mainNav.classList.add('-isSearching');
    menu.classList.add('-isHidden');
    seachForm.classList.add('-isActive');
    search.focus();
  });

  searchClose.addEventListener('click', function (e) {
    mainNav.classList.remove('-isSearching');
    menu.classList.remove('-isHidden');
    seachForm.classList.remove('-isActive');
  })


  /**
   * Search button on the home page intro section
   */

  const homeSearchToggle = document.getElementById('homeSearchToggle');

  if ( homeSearchToggle ) {
    homeSearchToggle.addEventListener('click', function (e) {
      mainNav.classList.add('-isSearching');
      menu.classList.add('-isHidden');
      seachForm.classList.add('-isActive');
      search.focus();
    });
    searchClose.addEventListener('click', function (e) {
      mainNav.classList.remove('-isSearching');
      menu.classList.remove('-isHidden');
      seachForm.classList.remove('-isActive');
    })
  }
}
