import React from "react";
import recipes from './recipes';
import Swal from 'sweetalert2';

const Menu = () => {

  const handleOrder = (id) => {
    console.log(`${id} is clicked`);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, order it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Order Placed!',
          `Your order for item ID ${id} has been processed.`,
          'success'
        );
      }
    });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's specials!</h2>
        <button className="orderbtn">Order Online</button>
      </div>

      <div className="menu-cards">
        {recipes.map(recipe => (
          <div className="menu-items" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              {/* Title & Price */}
              <div className="menu-content heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price.toFixed(2)}</p>
              </div>

              {/* Description */}
              <div className="menu-body">
                <p>{recipe.description}</p>
              </div>

              {/* Order Button */}
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe.id)}
              >
                Order A Delivery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
