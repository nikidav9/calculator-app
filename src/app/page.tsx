'use client'
import { useState } from 'react'

export default function Home() {
  const [display, setDisplay] = useState('0')
  const [currentValue, setCurrentValue] = useState('')
  const [operator, setOperator] = useState<string | null>(null)
  const [prevValue, setPrevValue] = useState('')

  const handleDigitClick = (digit: string) => {
    if (display === '0' && digit === '0') return
    if (display === '0' || (operator && currentValue === '')) {
      setDisplay(digit)
      setCurrentValue(digit)
    } else {
      setDisplay(prev => prev + digit)
      setCurrentValue(prev => prev + digit)
    }
  }

  const handleOperatorClick = (op: string) => {
    if (currentValue === '') return
    if (prevValue !== '' && operator) {
      calculate()
    }
    setOperator(op)
    setPrevValue(currentValue)
    setCurrentValue('')
  }

  const handleClear = () => {
    setDisplay('0')
    setCurrentValue('')
    setOperator(null)
    setPrevValue('')
  }

  const calculate = () => {
    let result: number
    const prev = parseFloat(prevValue)
    const current = parseFloat(currentValue)

    switch (operator) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case '*':
        result = prev * current
        break
      case '/':
        result = prev / current
        break
      default:
        return
    }
    setDisplay(result.toString())
    setCurrentValue(result.toString())
    setPrevValue('')
    setOperator(null)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-80">
        <div className="bg-gray-700 text-white text-right p-4 mb-4 rounded-lg text-4xl font-light overflow-hidden whitespace-nowrap">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <button className="col-span-2 p-4 text-white text-xl rounded-lg bg-orange-600 hover:bg-orange-700 active:bg-orange-800 transition-colors duration-200" onClick={handleClear}>C</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleOperatorClick('/')}>/</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleOperatorClick('*')}>*</button>

          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('7')}>7</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('8')}>8</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('9')}>9</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleOperatorClick('-')}>-</button>

          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('4')}>4</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('5')}>5</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('6')}>6</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleOperatorClick('+')}>+</button>

          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('1')}>1</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('2')}>2</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('3')}>3</button>
          <button className="col-span-1 p-4 text-white text-xl rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-colors duration-200 row-span-2 flex items-center justify-center" onClick={calculate}>=</button>

          <button className="col-span-2 p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('0')}>0</button>
          <button className="p-4 text-white text-xl rounded-lg bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-colors duration-200" onClick={() => handleDigitClick('.')}>.</button>
        </div>
      </div>
    </div>
  )
}