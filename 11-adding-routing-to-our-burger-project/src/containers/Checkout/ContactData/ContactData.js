import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    addres: {
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault()
    console.log(this.props.ingredients, this.props.totalPrice)
    this.setState({loading: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Gustavo Daza',
        address: {
          street: 'Test Street 1',
          zipCode: '6546521',
          country: 'Spain'
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ loading: false })
      });
  }

  render () {
    let form = (
      <form>
          <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
          <input className={classes.Input} type='email' name='email' placeholder='Your Email'/>
          <input className={classes.Input} type='text' name='street' placeholder='Your Street'/>
          <input className={classes.Input} type='text' name='postal' placeholder='Your Postal Code'/>
          <Button clicked={this.orderHandler} btnType='Success'>ORDER</Button>
        </form>
    )
    if (this.state.loading){
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Entry your contact information</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
