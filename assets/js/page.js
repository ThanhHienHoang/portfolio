class Page{
  constructor(){
const root=this;
root._initAge();
  }
  _initAge(){
    $(".user-age").text(new Date().getFullYear()-1998);
    $(".page-year").text(new Date().getFullYear()-1);
  }
}

new Page();