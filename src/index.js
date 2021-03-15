module.exports = function toReadable (number) {
    let numberof = String(number).split('');
    let result = String(); 
    let digits = {
         1: 'one', 
         2: 'two', 
         3: 'three', 
         4: 'four', 
         5: 'five', 
         6: 'six', 
         7: 'seven', 
         8: 'eight', 
         9: 'nine', 
         0: 'zero' } 
         let teen = { 
             10: 'ten', 
             11: 'eleven', 
             12: 'twelve', 
             13: 'thirteen', 
             14: 'fourteen', 
             15: 'fifteen', 
             16: 'sixteen', 
             17: 'seventeen', 
             18: 'eighteen', 
             19: 'nineteen' } 
             let teens = { 
                 2: 'twenty', 
                 3: 'thirty', 
                 4: 'forty', 
                 5: 'fifty', 
                 6: 'sixty', 
                 7: 'seventy', 
                 8: 'eighty', 
                 9: 'ninety' } 
                 let element = ''; 
                 if(number == 0){ 
                     return 'zero'; 
                    } 
                    while (numberof.length > 0) {
                        element = ''; 
                        if (numberof.length == 3) {
                            element = numberof.shift(); 
                             result += digits[element] + ' hundred ' 
                             continue;
                            }
                             if (numberof.length == 2){
                                element = numberof.shift();
                                  if(element == 0){ continue; } 
                                  if(Number(element) == 1){ 
                                      let element_2 = numberof.shift(); 
                                      result += teen[element+element_2] }
                                      else{ result += teens[element] + ' ' } 
                                      continue } if(numberof.length == 1){ 
                                        element = numberof.shift(); 
                                          if(element == 0){ 
                                              continue; 
                                            } 
                                            result += digits[element]; 
                                            continue; 
                                        }
                                     }
                                      return result.trim() 
                                    }

