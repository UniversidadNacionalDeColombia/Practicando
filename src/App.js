import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WrappedNormalLoginForm from './components/login/login';
import fire from './database/firebase/Fire';
import {Route} from 'react-router-dom'
import Home from './components/home/home';
import Register from './components/register/register';
import {useDispatch,useSelector} from 'react-redux'
import { fetchUsers } from './store/actions/user';

function App() {

  const dispatch = useDispatch();

  const user = useSelector(state  => state.user.user);

  useEffect(
    ()=>{
      fire.auth().onAuthStateChanged(
        user => dispatch(fetchUsers())
      )
    },[]
  )

  if(user){
    return(
      <>
      <Route><Home/></Route>
      </>
    )
  }else{
    return (
      <>
      <Route exact path="/" ><WrappedNormalLoginForm/></Route>
      <Route exact path="/register"> <Register/> </Route>
      </>
    );
  }
}

export default App;
