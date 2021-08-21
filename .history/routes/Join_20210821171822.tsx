import React from 'react';
import { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Login(){
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? <Loading/> : <LoginMain/>}
    </>
  );
}