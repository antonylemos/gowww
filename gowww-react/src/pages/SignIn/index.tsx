import React, { useCallback, useState } from 'react';
import { FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form } from './styles';

import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const [name, setName] = useState('');

  const handleChange= useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleSubmit = useCallback(e => {
    console.log(name);

    e.preventDefault();
  }, [name]);

  return (
    <Container>
      <img src={logo} alt="Gowww"/>

      <Form onSubmit={handleSubmit}>
        <Input icon={FiUser} placeholder="Primeiro nome" value={name} onChange={handleChange} />

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
