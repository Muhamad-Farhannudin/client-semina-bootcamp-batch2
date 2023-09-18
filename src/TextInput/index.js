import React from 'react'
import { Form } from 'react-bootstrap'

export default function TextInput({
    type,
    name,
    value,
    placeHolder,
    onChange
}) {
  return (
    <Form.Control 
    type={type}
    name={name}
    value={value}
    placeholder={placeHolder}
    onChange={onChange}
    />
  )
}
