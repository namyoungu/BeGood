import React from 'react';
import { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Loading from '../components/Login/Loading';
import LoginMain from '../components/Login/LoginMain';



export default function Login(){
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