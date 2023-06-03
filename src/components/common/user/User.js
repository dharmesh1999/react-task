import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { BsBookmark } from 'react-icons/bs';
import avatarImage from '../../../images/avatar.png';
import styles from './User.module.css';

function User() {
  return (
    <Card className={styles.card}>
      <Card.Body className="d-flex justify-content-between">
        <Card.Title className="mb-0">
          <Image
            src={avatarImage}
            alt="Avatar"
            roundedCircle
            width={44}
            height={44}
          />
          <span className="ms-4">John Doe</span>
        </Card.Title>
        <BsBookmark />
      </Card.Body>
    </Card>
  );
}

export default User;
