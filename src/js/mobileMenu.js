class MobileMenu {
    constructor(
      siteHeader,
      siteHeaderExpanded,
      menuIcon,
      menuIconClosed,
      menuContent,
      menuContentVisible
    ) {
      this.siteHeader = document.getElementById(`${siteHeader}`);
      this.menuIcon = document.getElementById(`${menuIcon}`);
      this.menuContent = document.getElementById(`${menuContent}`);
      this.siteHeaderExpanded = siteHeaderExpanded;
      this.menuIconClosed = menuIconClosed;
      this.menuContentVisible = menuContentVisible;
      this.events();
    }
  
    events() {
      this.menuIcon.onclick = this.showTheMenu.bind(this);
    }
    showTheMenu() {
      this.siteHeader.classList.toggle(`${this.siteHeaderExpanded}`);
      this.menuIcon.classList.toggle(`${this.menuIconClosed}`);
      this.menuContent.classList.toggle(`${this.menuContentVisible}`);
    }
  }
  
  export default MobileMenu;