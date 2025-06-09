export class TabForm {

  activateTabs(): void {
    this.initFirstTab();
    this.setTabsHeight();
    window.addEventListener('resize', () => {
      this.initFirstTab();
      this.setTabsHeight();
    });
  }

  initFirstTab() {
    const a = document.querySelector('.nav-tabs')?.firstChild?.firstChild as HTMLAnchorElement;
    a.click();
  }

  setTabsHeight() {
    const informationEL = ((document.getElementById('infomation') as HTMLDivElement));
    const informationTabHeight = informationEL.clientHeight.toString();
    const informationTabWidth = informationEL.clientWidth.toString();
    const address = document.getElementById('address') as HTMLElement;
    const imagesUpload = document.getElementById('images-upload') as HTMLElement;
    const documentsUpload = document.getElementById('documents-upload') as HTMLElement;
    if (address) {
      address.style.height = `${informationTabHeight}px`;
      address.style.width = `${informationTabWidth}px`;
    }
    if (imagesUpload) {
      imagesUpload.style.height = `${informationTabHeight}px`;
      imagesUpload.style.width = `${informationTabWidth}px`;
    }
    if (documentsUpload) {
      documentsUpload.style.height = `${informationTabHeight}px`;
      documentsUpload.style.width = `${informationTabWidth}px`;
    }

  }

}