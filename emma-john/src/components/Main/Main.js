import React from 'react';
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Shop from '../Shop/Shop';
import Review from '../Review/Review';
import Inventory from '../Inventory/Inventory';
import NotFound from '../NotFound/NotFound';

function Main() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Shop/>
                    </Route>

                    <Route path="/shop">
                        <Shop/>
                    </Route>

                    <Route path="/review">
                        <Review/>
                    </Route>

                    <Route path="/inventory">
                        <Inventory/>
                    </Route>

                    <Route path="*">
                       <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Main;
