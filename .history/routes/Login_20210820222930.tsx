import React from 'react';
import { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Loading} from '../components/Login/Loading';

const Login = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  });

  return (
    <>
      {loading ? <Loading/> : <LoginMain/>}
    </>
  );
}