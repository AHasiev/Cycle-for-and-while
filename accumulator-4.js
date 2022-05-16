let accumulator = [];
const arr = ['Висхан', 'Амирхан', 'Халид', 'Мансур', 'Муса', 'Мовсар', 'Асхаб', 'Рамзан', 'Дени', 'Мухаммад']
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'А'){
        accumulator.push(arr[i])
    }
  
}
console.log(accumulator);