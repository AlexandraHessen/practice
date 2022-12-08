let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
  ]);
  
  // перебор по ключам (овощи)
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
  }
  
  // перебор по значениям (числа)
  for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
  }
  
  // перебор по элементам в формате [ключ, значение]
  for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
  }