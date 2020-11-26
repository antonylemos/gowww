import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiMail, FiUser } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form } from './styles';

import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const history = useHistory();

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: UserSchema,
    onSubmit: values => {
      signIn({
        name: values.name,
        email: values.email,
      });

      history.push('/dashboard');
    },
  });

  return (
    <Container>
      <img src={logo} alt="Gowww" />

      <Form onSubmit={formik.handleSubmit}>
        <Input name="name" icon={FiUser} placeholder="Nome" value={formik.values.name} onChange={formik.handleChange} />
        <Input name="email" icon={FiMail} placeholder="E-mail" value={formik.values.email} onChange={formik.handleChange} />

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
