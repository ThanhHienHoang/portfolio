class Page {
  constructor() {
    const root = this;
    root._initAge();
    root._initDownloadCVBtn();
  }
  _initAge() {
    $(".user-age").text(new Date().getFullYear() - 1998);
    $(".page-year").text(new Date().getFullYear() - 1);
  }
  _initDownloadCVBtn() {
    $(".download-cv").on("click", (e) => {
      e.preventDefault();
      window.open('./assets/files/CV_HoangThiThanhHien_UIUXDesigner.pdf', '_blank');
    });
  }
}

new Page();
