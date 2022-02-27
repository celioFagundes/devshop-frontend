import React from 'react'

const Input = ({
  type = 'text',
  placeholder = '',
  label = '',
  value,
  onChange,
  name = '',
  helpText,
  errorMessage = '',
}) => {
  return (
    <div className='w-full mb-2'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={'id-' + name}
      >
        {label}
      </label>
      <input
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        type={type}
        id={'id-' + name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {errorMessage && (
        <p class='text-red-500 text-xs italic'>{errorMessage}</p>
      )}
      {helpText && (
        <p className='text-gray-600 text-xs italic mb-4'>{helpText} </p>
      )}
    </div>
  )
}

export default Input
