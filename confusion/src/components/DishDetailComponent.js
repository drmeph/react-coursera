import React, { Component } from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return(
            <div className="col-12 col-sm-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComment(comments) {
        const items = comments.map((item) => {
            return (
                <ul key={item.id} className="list-unstyled">
                    <li>{item.text}</li>
                    <li>-- {item.author}, {item.date}</li>
                </ul>
            );
        })

        if (comments != null) {
            return (
                <div className="col-12 col-sm-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {items}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

    render() {
        const dish = this.props.dish;

        if (dish != null) {
            return (
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComment(dish.comments)}
                </div>
            );
        } else {
            return (
              <div></div>
            );
        }
    }
}

export default DishDetail;