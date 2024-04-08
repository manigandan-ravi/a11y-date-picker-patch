(function(){
  if(!DatePicker){
    console.error('Date Picker library not found!');
    return;
  }

  DatePicker.prototype.hideInvalidRow = function() {
    var firstTr = this.tbodyNode.querySelector('tr');
    var lastTr = this.tbodyNode.querySelector('tr.dateRow:last-child');
    
    firstTr.style.display = 'table-row';
    lastTr.style.display = 'table-row';

    if (!firstTr.querySelectorAll('button:not([disabled])').length)
      firstTr.style.display = 'none';

    if (!lastTr.querySelectorAll('button:not([disabled])').length)
      lastTr.style.display = 'none';
  }
})()
