import React from 'react'

const Select = ({
  placeholder = '',
  label = '',
  value,
  onChange,
  name = '',
  helpText,
  oldValue = '',
  options = [],
  errorMessage,
}) => {
  return (
    <div className='w-full mb-3'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={'id-' + name}
      >
        {label}
      </label>
      <select
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        id={'id-' + name}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={oldValue}
      >
        {value === '' && (
          <option value='' hidden>
            Selecionar
          </option>
        )}
        {options.map(opt => (
          <option id={opt.id} key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <p class='text-red-500 text-xs italic'>{errorMessage}</p>
      )}
      {helpText && (
        <p className='text-gray-600 text-xs italic mb-4'>{helpText} </p>
      )}
    </div>
  )
}

export default Select
