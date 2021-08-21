import React from 'react';
import { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

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