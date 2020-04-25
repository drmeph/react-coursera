import React, {Component} from 'react';
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComoponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./HomeComponent";

class MainComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    render() {

        const HomePage = () => {
            return(
                <Home/>
            );
        }

        return (
            <div>
                <Header/>
                    <Switch>
                        <Route path="/home" component={HomePage}/>
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                        <Redirect to="/home"/>
                    </Switch>
                <Footer/>
            </div>
        );
    }
}

export default MainComponent;
