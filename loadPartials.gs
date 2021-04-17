function loadPartialHTML_(partial) {
    const htmlServ = HtmlService.createTemplateFromFile(partial);
    return htmlServ.evaluate().getContent();

}


function loadSearchView(){
  return loadPartialHTML_("search");
}


function loadAddCustomerView(){

  return loadPartialHTML_("addcustomer");
}

function loadEditCustomerView(){

  return loadPartialHTML_("editcustomer");
}
