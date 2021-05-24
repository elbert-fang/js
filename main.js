
// first trial
function getStops(flights){
  var result, stopCount;
  var stopCounts = flights.length -1;

  if (stopCount == 27){
    result ="Around the World";
  } else if (stopCount = 11){
    result = "The Dreamline";
  }

  return result;
}

 
// improved version 1
function getStops(flights){
  const stop = flights.length -1;

  const specialCases = {
    0: 'Direct',
    1: '1 Stop',
    11: 'The Dreamline',
    27: 'Around The World',
  };

  const specialCase = specialCases[stop];
  // if (specialCase) {
  //   return specialCase;
  // }

  // return stop + 'stops';

  /*
  A better way to write if statement 
  return specialCases ? specialCase : stop + 'stops';
  */
  return specialCase || stop + 'stops';
 
}


// ultimate version
function getStops(flights){
  const stop = flights.length -1;
  return {
    0: 'Direct',
    1: '1 Stop',
    11: 'The Dreamline',
    27: 'Around The World',
  }[stop] || stop + 'stops';

}


function calculateTax(income){
  var tax;
  
  if (income <= 18200){
   tax = 0;
  } else if( income >= 18200 && income <=  37000){
    tax = (income-18200) * 0.19;
  }else if( income >= 37001 && income <=  90000){
    tax = (income-18200) * 0.19;
  }






  return tax;
}