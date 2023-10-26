function BasketItem(props) {
  const {
    id,
    name,
    price = 0,
    quantity = 0,
    img,
    removeFromBasket,
    changeItemQuantity,
  } = props

  return (
    <li className="collection-item">
      <img src={img} alt="" className="circle basket-img" />
      <span className="basket-item">
        {name} {price}{' '}
        <i
          className="material-icons quantity-icon"
          onClick={() => {
            changeItemQuantity(id, 'dec')
          }}
        >
          remove
        </i>{' '}
        x{quantity}{' '}
        <i
          className="material-icons quantity-icon "
          onClick={() => {
            changeItemQuantity(id, 'inc')
          }}
        >
          add
        </i>{' '}
        ={price * quantity}
      </span>
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  )
}

export { BasketItem }
