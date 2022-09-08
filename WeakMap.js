const wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
const o1 = {},
    o2 = function(){},
    o3 = window,
    o4 = [1, 2, 3];

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2);        // значением может быть что угодно, включая объект или функцию
wm2.set(o3, undefined);
wm2.set(wm1, wm2);      // ключами и значениями могут быть объекты. Даже WeakMap-ами

wm1.get(o2); // 'azerty'
wm2.get(o2); // undefined, нет значения для o2 в wm2
wm2.get(o3); // undefined, это установленное значение

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (даже если значение равно 'undefined')

wm3.set(o1, 37);
wm3.get(o1);     // 37

wm1.has(o1);     // true
wm1.delete(o1);
wm1.has(o1);     // false