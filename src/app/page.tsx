'use client';

import { useState } from 'react';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [previousValue, setPreviousValue] = useState('');

  const handleNumberClick = (num: string) => {
    if (display === '0' && num !== '.') {
      setDisplay(num);
      setCurrentValue(num);
    } else if (num === '.' && currentValue.includes('.')) {
      return; // Предотвращаем ввод нескольких десятичных точек
    } else {
      setDisplay((prev) => prev + num);
      setCurrentValue((prev) => prev + num);
    }
  };

  const handleOperatorClick = (op: string) => {
    if (currentValue === '') return; // Не применять оператор без числа
    if (previousValue !== '' && operator !== '') {
      handleCalculate(); // Выполнить предыдущую операцию, если уже есть
    }
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('');
    setDisplay((prev) => prev + ' ' + op + ' ');
  };

  const handleCalculate = () => {
    if (previousValue === '' || currentValue === '' || operator === '') return;

    let result: number;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
    const resultString = result.toString();
    setDisplay(resultString);
    setCurrentValue(resultString);
    setPreviousValue('');
    setOperator('');
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentValue('');
    setOperator('');
    setPreviousValue('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-right text-3xl font-bold mb-4 p-2 border rounded bg-gray-50">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleNumberClick('7')} className="p-4 bg-gray-200 rounded-lg text-xl">7</button>
          <button onClick={() => handleNumberClick('8')} className="p-4 bg-gray-200 rounded-lg text-xl">8</button>
          <button onClick={() => handleNumberClick('9')} className="p-4 bg-gray-200 rounded-lg text-xl">9</button>
          <button onClick={() => handleOperatorClick('/')} className="p-4 bg-orange-400 text-white rounded-lg text-xl">/</button>

          <button onClick={() => handleNumberClick('4')} className="p-4 bg-gray-200 rounded-lg text-xl">4</button>
          <button onClick={() => handleNumberClick('5')} className="p-4 bg-gray-200 rounded-lg text-xl">5</button>
          <button onClick={() => handleNumberClick('6')} className="p-4 bg-gray-200 rounded-lg text-xl">6</button>
          <button onClick={() => handleOperatorClick('*')} className="p-4 bg-orange-400 text-white rounded-lg text-xl">*</button>

          <button onClick={() => handleNumberClick('1')} className="p-4 bg-gray-200 rounded-lg text-xl">1</button>
          <button onClick={() => handleNumberClick('2')} className="p-4 bg-gray-200 rounded-lg text-xl">2</button>
          <button onClick={() => handleNumberClick('3')} className="p-4 bg-gray-200 rounded-lg text-xl">3</button>
          <button onClick={() => handleOperatorClick('-')} className="p-4 bg-orange-400 text-white rounded-lg text-xl">-</button>

          <button onClick={() => handleNumberClick('0')} className="p-4 bg-gray-200 rounded-lg text-xl col-span-2">0</button>
          <button onClick={() => handleNumberClick('.')} className="p-4 bg-gray-200 rounded-lg text-xl">.</button>
          <button onClick={() => handleOperatorClick('+')} className="p-4 bg-orange-400 text-white rounded-lg text-xl">+</button>

          <button onClick={handleClear} className="p-4 bg-red-500 text-white rounded-lg text-xl col-span-3">C</button>
          <button onClick={handleCalculate} className="p-4 bg-green-500 text-white rounded-lg text-xl">=</button>
        </div>
      </div>
    </div>
  );
}
