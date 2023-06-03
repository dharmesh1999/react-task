import React from 'react';
import {
  Container, Card, ListGroup, Button,
} from 'react-bootstrap';
import SearchBar from '../common/search-bar/SearchBar';

import styles from './UserList.module.css';
import User from '../common/user/User';

function UserList() {
  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };
  return (
    <Container className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Card className="mt-4 border-0 shadow">
        <ListGroup variant="flush">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <Button className="bg-transparent text-secondary border-0">
            Load More...
          </Button>
        </ListGroup>
      </Card>
    </Container>
  );
}

export default UserList;
