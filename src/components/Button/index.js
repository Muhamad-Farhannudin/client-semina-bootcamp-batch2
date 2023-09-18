import React from 'react'
import { Button } from 'react-bootstrap'

export default function SButton({action, children, className, disabled, variant, size, loading }) {
  return (
    <Button 
    className={className}
    onClick={action}
    variant={variant}
    size={size}
    disabled={disabled}
    >
      {loading ? "Loading..." : children}
    </Button>
  )
}
