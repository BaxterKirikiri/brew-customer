import React, { Component, Fragment } from 'react';
import { db } from '../services/db';
import { auth, signIn, signOut } from '../services/auth';
import Header from "../components/Header";
import CoffeePurchased from '../components/CoffeePurchased';
import QR from '../components/QR';


class Home extends Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        this.initAuth();
    }

    initAuth = () => {
        auth.onAuthStateChanged((user) => {
            this.setState({
                isLoading: false,
                user
            })
            if (user) {
                this.getCustomer(user.email)
            }
        })
    }

    getCustomer = (email) => {
        const docRef = db.collection('customers').doc(email);
        docRef.get().then((doc) => {
            const customer = doc.data();
            if (customer) {
                this.setState({ customer: { ...customer, email } });
            }
        }).catch((error) => {
            console.log("Error getting customer:", error);
        });
    }


    render() {
        return (
            <Fragment>
                <Header />
                <div className="App">
                    {
                        this.state.isLoading &&
                        <h1>Loading...</h1>
                    }
                    {
                        !this.state.isLoading &&
                        <Fragment>
                            {
                                !this.state.user &&
                                <button onClick={signIn}>Sign In</button>
                            }
                            {
                                this.state.user &&
                                <Fragment>
                                    <h2>{this.state.user.email}</h2>
                                    
                                    <QR url={`https://brew-app-453c4.firebaseapp.com/${this.state.user.email}`} />
                                    {
                                        this.state.customer &&
                                        <CoffeePurchased numberPurchased={this.state.customer.coffeeCount} />
                                    }
                                    {
                                        !this.state.customer &&
                                        <CoffeePurchased numberPurchased={0} />
                                    }
                                    <button onClick={() => this.getCustomer(this.state.user.email)}>Check Loyalty progress</button>
                                    <br/>
                                    <button onClick={signOut}>Sign Out</button> 
                                </Fragment>
                            }
                        </Fragment>
                    }
                </div>
            </Fragment>
        )
    }
}

export default Home;
