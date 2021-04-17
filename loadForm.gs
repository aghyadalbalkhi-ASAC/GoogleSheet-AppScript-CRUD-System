function loadMainForm() {

  const HtmlServ = HtmlService.createTemplateFromFile('main');
  const html = HtmlServ.evaluate();
  html.setWidth(950); html.setHeight(600);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html,' ');

}


function createMenu_() {

  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('قائمة التطوير');
  menu.addItem('نظام البحث','loadMainForm');
  menu.addToUi();

}

function onOpen(){
  createMenu_();
}