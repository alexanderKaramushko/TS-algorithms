export function timeVariations(time: string) {
  let hours = 0;

  for (let a = 0; a <= 2; a++) {
    // Перебирать старший разряд для часа, если "?" или указано определенное число, под которое надо сделать перебор
    if (time[0] === '?' || time[0] === a.toString()) {
      for (let b = 0; b <= 9; b++) {
        // Перебирать младший разряд, если "?" или указано определенное число, под которое надо сделать перебор 
        if ((time[1] === '?' || time[1] === b.toString()) && (a * 10 + b) < 24) {
          hours++;
        }
      }    
    }
  }

  let minutes = 0;

  for (let a = 0; a <= 5; a++) {
    if (time[3] === '?' || time[3] === a.toString()) {
      for (let b = 0; b <= 9; b++) {
        if (time[4] === '?' || time[4] === b.toString()) {
          minutes++;
        }
      }    
    }
  }

  return hours * minutes;
}
