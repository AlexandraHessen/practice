if (
    id === 123 &&
    moonPhase === 'Waning Gibbous' &&
    zodiacSign === 'Libra'
  ) {
    letTheSorceryBegin();
  }

  for (let i = 0; i < 10; i++) {
    if (cond) {
      ... // <- ещё один уровень вложенности
    }
  }

  for (let i = 0; i < 10; i++) {
    if (!cond) continue;
    ...  // <- нет лишнего уровня вложенности
  }

  function pow(x, n) {
    if (n < 0) {
      alert("Отрицательные значения 'n' не поддерживаются");
    } else {
      let result = 1;
  
      for (let i = 0; i < n; i++) {
        result *= x;
      }
  
      return result;
    }
  }

  function pow(x, n) {
    if (n < 0) {
      alert("Отрицательные значения 'n' не поддерживаются");
      return;
    }
  
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }