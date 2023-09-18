import React from 'react';
import { Form } from 'react-bootstrap';

function SearchInput({ handleChange, query, disabled, onClick }) {
    return (
        <Form.Group className='mb-3'>
            <Form.Control
                disabled={disabled}
                type='text'
                placeholder='Masukan pencarian disini'
                value={query}
                name='query'
                onChange={handleChange}
                onClick={onClick}
            />
        </Form.Group>
    );
}

export default SearchInput;