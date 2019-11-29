/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn) {

    let i, 
        length = array.length;
    
    for (i = 0; i < length; i++) {
        fn(array[i], i, array)
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let results = [], 
        i, 
        length = array.length;
  
    for (i = 0; i < length; i++ ) {
        results[i] = fn(array[i], i, array);
    }

    return results;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let x = initial || array[0],
        i = initial ? 0 : 1;

    for (; i < array.length; i++) {
        x = fn(x, array[i], i, array);
    }

    return x;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let result = [];
    
    for (let key in obj) {
        if (typeof obj === 'object') {
            result.push(key.toUpperCase());
        }
    }
    
    return result;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */

function slice(array, from, to = array.length) {

    const validateRange = (range, length) => (range >= 0 ? range : length + range);
  
    let result = [];
    let validFrom = validateRange(from, array.length);
    let validTo = validateRange(to, array.length) - 1;

    for (let i = 0; i < array.length; i++ ) {
        if (i < validFrom || i > validTo) {
            continue
        }
        result.push(array[i]);
      
    }

    return result;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */

function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            return target[prop] = value * value;
        }
    })
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
