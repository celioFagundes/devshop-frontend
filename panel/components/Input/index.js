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
  disabled,
}) => {
  return (
    <div className='mr-2 max-w-sm'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={'id-' + name}
      >
        {label}
      </label>
      <input
        disabled={disabled}
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        type={type}
        id={'id-' + name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {errorMessage && (
        <p className='text-red-500 text-xs italic'>{errorMessage}</p>
      )}
      {helpText && (
        <p className='text-gray-600 text-xs italic'>{helpText} </p>
      )}
    </div>
  )
}

const InputCheckbox = ({ label = '', value, onChange, name = '' }) => {
  return (
    <div className='w-full flex -flex-row justify-center items-center mx-2'>
      <label
        className='uppercase tracking-wide text-gray-700 text-xs font-bold mr-2'
      >
        {label}
      </label>
      <input
        className='rounded-full'
        type='checkbox'
        id={'id-' + name}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  )
}
const InputColor = ({
  value,
  onChange,
  name = '',
  bgColor = '#000',
}) => {
  return (
    <div
      className='rounded-full h-6 w-6  flex flex-row items-center justify-center border-2 border-gray-300 mx-2 absolute bottom-3 right-1'
      style={{ backgroundColor: bgColor }}
    >
      <label
        className='text-transparent h-full w-full rounded-full hover:cursor-pointer'
        htmlFor={name && 'id-' + name }
        style={{ backgroundColor: bgColor }}
      >
        cor
      </label>
      <input
        className='hidden'
        type='color'
        id={'id-' + name}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  )
}
const InputTextArea = ({
  placeholder = '',
  label = '',
  value,
  onChange,
  name = '',
  helpText,
  errorMessage = '',
  disabled,
}) => {
  return (
    <div className='w-full mb-1 mr-2 max-w-sm '>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={name && 'id-' + name }
      >
        {label}
      </label>
      <textarea
        disabled={disabled}
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        id={'id-' + name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {errorMessage && (
        <p className='text-red-500 text-xs italic'>{errorMessage}</p>
      )}
      {helpText && (
        <p className='text-gray-600 text-xs italic'>{helpText} </p>
      )}
    </div>
  )
}
Input.Checkbox = InputCheckbox
Input.Color = InputColor
Input.TextArea = InputTextArea
export default Input
