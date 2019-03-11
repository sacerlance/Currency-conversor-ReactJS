import React, { Component } from 'react';
import '../styles/conversor.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import currencyService from '../services/currencyService';
import CurrencyInput from 'react-currency-input';
import firebase from 'firebase';
import useHistory from '../history';

class Conversor extends Component {
  constructor () {
    super();
    this.service = new currencyService();
    this.state = {
      currencyValue: '-',
      currencies: [],
      from: null,
      to: null,
      amount: 0
    };
    this.currencyFrom = this.currencyFrom.bind(this);
    this.currencyTo = this.currencyTo.bind(this);
    this.setAmount = this.setAmount.bind(this);
    this.convertCurrency = this.convertCurrency.bind(this);
  }
  async componentDidMount () {
    const user = firebase.auth().currentUser;
    if (user) {
      await this.getCurrencies();
    } else {
      useHistory.push('/');
    }
  }

  async currencyFrom (event) {
    await this.setState({from: event.value});
  }

  async currencyTo (event) {
    await this.setState({to: event.value});
  }

  async setAmount (event, maskedvalue) {
    await this.setState({amount: maskedvalue});
  }

  async getCurrencies () {
    const currencies = await this.service.getCurrencies();
    const dropdownFormat = currencies.map((item) => {
      return {label: item.name, value: item.code};
    });
    this.setState({currencies: dropdownFormat});
  }

  async convertCurrency () {
    const exchange = await this.service.getCurrencyExchange(this.state.from, this.state.to);
    const amount = this.state.amount;
    const conversion = exchange * amount;
    this.setState({currencyValue: conversion});
  }

  render () {
    return (
      <div >
        <div className='dropdownBox'>
          <div>
            <p className='exchangeText'>Select you exchange</p>
          </div>
          <div style={{width: '100%'}}>
            <CurrencyInput className='moneyBox' type='text' name='email' placeholder='Money amount' onChange={this.setAmount} value={this.state.amount} />
            <p>From</p>
            <Dropdown options={this.state.currencies} onChange={this.currencyFrom} placeholder='Select an option' value={this.state.from} />
            <p>To</p>
            <Dropdown options={this.state.currencies} onChange={this.currencyTo} placeholder='Select an option' value={this.state.to} />
            <div />
          </div>
          <button className='convertButton' onClick={this.convertCurrency}><p style={{fontSize: '15px', color: 'white'}}>Convert</p></button>
          <p>Your conversion is:</p>
          <h1 className='conversion'>{this.state.currencyValue}</h1>
        </div>
      </div>
    );
  }
}

export default Conversor;
