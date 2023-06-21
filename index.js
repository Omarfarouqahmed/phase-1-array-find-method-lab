// code your solution here
 const record = [
        { year: "2018", result: "N/A"},
        { year: "2017", result: "N/A"},
        { year: "2016", result: "N/A"},
        { year: "2015", result: "W"},
        
      ]
function superbowlWin(records){
  const winRecord = records.find( record => (record.result === "W") )
    return winRecord ? winRecord.year : undefined ;
      }      