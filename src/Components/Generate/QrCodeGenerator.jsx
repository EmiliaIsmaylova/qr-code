import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

import { GENERATE_DATA } from '../../constants'

 
import './qrCodeGenerator.css'

 export const QrCodeGenerator = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, value])
    )

    setResult(value)
    setValue('')
  }

  const onChangeHandler = (event) => {
    setValue(event.target.value)
    setResult('')
  }

  return(
    <div className='container'>
      <input 
           type='text'
           value={value}
           placeholder='Введите текcт...'
           onChange={onChangeHandler}
           className='input'
      />
      <button type='button' className='button' onClick={onClickHandler}>
        Сгенерировать QR
      </button>
      {result !== '' && (
        <div className='qrWrapper'>
          <QRCodeSVG value={result} size={200}/>
        </div>
      )}
    </div>
  )
}
