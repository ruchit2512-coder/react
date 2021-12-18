import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
import DishDetail from './dishDetailComponents';

class Menu extends Component{

    constructor(props){
        super(props);
    }

    onDishSelect(dish){

        this.setState({
            selectedDish: dish
        });

    }



    render(){
        console.log('renders menu component');
        
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={ dish.id } className="col-12 col-md-5 m-1">    
                    <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                        
                        <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                        <CardImgOverlay>
                            <CardTitle> { dish.name }</CardTitle>
                        </CardImgOverlay>
                    </Card>                
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    { menu }
                </div>
                
            </div>
        );
    }

    componentDidMount(){
        console.log('Menu component componentDidMounbt is invoked');
        
    }
}

export default Menu;