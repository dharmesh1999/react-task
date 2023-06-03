import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { useDebouncedCallback } from 'use-debounce';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const debounced = useDebouncedCallback((value) => {
    onSearch(value);
  }, 1000);

  return (
    <Form
      inline
      onChange={(e) => debounced(e.target.value)}
      className="shadow rounded border-0"
    >
      <InputGroup>
        <InputGroup.Text className={styles.search}>
          <AiOutlineSearch size={24} />
        </InputGroup.Text>
        <FormControl
          type="text"
          placeholder="Search"
          onChange={(e) => debounced(e.target.value)}
          className="p-3 border-0 shadow-none"
        />
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
