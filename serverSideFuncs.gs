function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheets()[0];
  var ret = ws.getRange(2,2,ws.getLastRow()-1,ws.getLastColumn()).getDisplayValues();
  return ret;
  Logger.log(ret[0].length);
//return JSON.stringify(ret);
}


function deleteByidnum(id){

  //get the spreadsheet 
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('FormResponses');      // same ss.getSheets()[0];
  var cusIDs = ws.getRange(2,3,ws.getLastRow()-1,1).getValues().map(function (r){
      return r[0].toString().toLocaleLowerCase();});
  const posIndex = cusIDs.indexOf(id.toString().toLocaleLowerCase());
  const rowNumber = posIndex === -1 ?  0:  posIndex+2;
  ws.deleteRow(rowNumber); 
}



function getCustomerById(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('FormResponses');      // same ss.getSheets()[0];
  var cusIDs = ws.getRange(2,3,ws.getLastRow()-1,1).getValues().map(function (r){
      return r[0].toString().toLocaleLowerCase();});
  const posIndex = cusIDs.indexOf(id.toString().toLocaleLowerCase());
  const rowNumber = posIndex === -1 ?  0:  posIndex+2;

  const customerInfo = ws.getRange(rowNumber,2,1,ws.getLastColumn()-1).getDisplayValues()[0];

    //[بسطة عشوائية, 888855, هناء الغزاوي, هوية وطنية, 4/13/2021, 078987895, لا يوجد, علي الخطي, ]
    return {namesofobservers :customerInfo[7],notes :customerInfo[6],telnum :customerInfo[5],recordDate :customerInfo[4],idtype :customerInfo[3],ownerName :customerInfo[2], idnum :customerInfo[1],typeofactivity :customerInfo[0]};
}

function editCustomerById(id,customerInfo){

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('FormResponses');      // same ss.getSheets()[0];
  var cusIDs = ws.getRange(2,3,ws.getLastRow()-1,1).getValues().map(function (r){
      return r[0].toString().toLocaleLowerCase();});
  const posIndex = cusIDs.indexOf(id.toString().toLocaleLowerCase());
  const rowNumber = posIndex === -1 ?  0:  posIndex+2;

  ws.getRange(rowNumber,2,1,ws.getLastColumn()-1).setValues([[

                                                                customerInfo.typeofactivity,
                                                                customerInfo.idnum,
                                                                customerInfo.ownerName,
                                                                customerInfo.idtype,
                                                                customerInfo.recordDate,
                                                                customerInfo.telnum,
                                                                customerInfo.notes,
                                                                customerInfo.namesofobservers,

                                                              ]])
return true;
}


