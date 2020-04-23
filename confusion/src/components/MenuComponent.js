import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card onClick={() => this.onDishSelect(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                          <CardTitle>{dish.name}</CardTitle>
                      </CardImgOverlay>
                  </Card>
              </div>
            );
        })

        console.log('Menu component render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish} />
            </div>
        ) ;
    }

    componentDidMount() {
        console.log('Menu component componentDidMount is invoked');
    }
}

export default Menu;