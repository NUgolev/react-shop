import { BasketItem } from './BasketItem'

function BasketList(props) {
  const { order, handleBasketShow, removeFromBasket, changeItemQuantity } =
    props
  const totalPrice = order.length
    ? order.reduce((sum, el) => {
        return sum + el.price * el.quantity
      }, 0)
    : 0

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>

      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            changeItemQuantity={changeItemQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: <span className="total-price">{totalPrice}руб.</span>
        <button className="secondary-contect btn basket-btn "> оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  )
}

export { BasketList }
