function GoodsItem(props) {
  const {
    id = props.mainId,
    name = props.displayName,
    description = props.displayDescription,
    sellPrice = props.price.regularPrice,
    itemImg = props.displayAssets[0].full_background,
    addToBasket,
  } = props

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={itemImg} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              price: sellPrice,
              img: itemImg,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {sellPrice} руб.
        </span>
      </div>
    </div>
  )
}

export { GoodsItem }

//   "mainId": "Character_GeniusBlob",
//   "displayName": "Мистер Мисикс",
//   "displayDescription": "Посмотрите на меня!",
//   "regularPrice": 1500,
//   "full_background": "https://media.fortniteapi.io/images/shop/8ed01ebd25d44b1cd247f795104ebcba4481fa845301466c37064101c327ca53/v2/MI_Character_GeniusBlob/info.ru.png"
// {
//   "mainId": "Character_GeniusBlob",
//   "displayName": "Мистер Мисикс",
//   "displayDescription": "Посмотрите на меня!",
//   "displayType": "Экипировка",
//   "mainType": "outfit",
//   "offerId": "v2:/8ed01ebd25d44b1cd247f795104ebcba4481fa845301466c37064101c327ca53",
//   "displayAssets": [
//       {
//           "displayAsset": "DAv2_Character_GeniusBlob",
//           "materialInstance": "MI_Character_GeniusBlob",
//           "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Character_GeniusBlob/MI_Character_GeniusBlob.png",
//           "flipbook": null,
//           "background_texture": null,
//           "background": "https://media.fortniteapi.io/images/shop/8ed01ebd25d44b1cd247f795104ebcba4481fa845301466c37064101c327ca53/v2/MI_Character_GeniusBlob/background.png",
//           "full_background": "https://media.fortniteapi.io/images/shop/8ed01ebd25d44b1cd247f795104ebcba4481fa845301466c37064101c327ca53/v2/MI_Character_GeniusBlob/info.ru.png"
//       }
//   ],
//   "firstReleaseDate": "2022-10-18",
//   "previousReleaseDate": "2023-10-21",
//   "giftAllowed": true,
//   "buyAllowed": true,
//   "price": {
//       "regularPrice": 1500,
//       "finalPrice": 1500,
//       "floorPrice": 1500
//   },
//   "rarity": {
//       "id": "Epic",
//       "name": "Эпический"
//   },
//   "series": null,
//   "banner": null,
//   "offerTag": null,
//   "granted": [
//       {
//           "id": "Character_GeniusBlob",
//           "type": {
//               "id": "outfit",
//               "name": "Экипировка"
//           },
//           "name": "Мистер Мисикс",
//           "description": "Посмотрите на меня!",
//           "rarity": {
//               "id": "Epic",
//               "name": "Эпический"
//           },
//           "series": null,
//           "images": {
//               "icon": "https://media.fortniteapi.io/images/18d5ce3a064b23cb681330d4ee6430e4/transparent.png",
//               "featured": "https://media.fortniteapi.io/images/18d5ce3a064b23cb681330d4ee6430e4/full_featured.png",
//               "background": "https://media.fortniteapi.io/images/cosmetics/18d5ce3a064b23cb681330d4ee6430e4/v2/background.png",
//               "icon_background": "https://media.fortniteapi.io/images/cosmetics/18d5ce3a064b23cb681330d4ee6430e4/v2/icon_background.png",
//               "full_background": "https://media.fortniteapi.io/images/cosmetics/18d5ce3a064b23cb681330d4ee6430e4/v2/info.ru.png"
//           },
//           "video": null,
//           "audio": null,
//           "gameplayTags": [
//               "Cosmetics.Filter.Season.22",
//               "Cosmetics.Source.ItemShop",
//               "Cosmetics.Set.MainStake",
//               "SoundLibrary.ID.StepType.Barefoot",
//               "SoundLibrary.ID.ClothingType.Generic",
//               "SoundLibrary.ID.HandType.Bare"
//           ],
//           "set": {
//               "id": "MainStake",
//               "name": "Мистер Мисикс",
//               "partOf": "Входит в набор «Мистер Мисикс»."
//           }
//       },
//       {
//           "id": "Backpack_Genius_Blob",
//           "type": {
//               "id": "backpack",
//               "name": "Украшение на спину"
//           },
//           "name": "Коробка Мисикса",
//           "description": "Содержит бесконечное количество Мисиксов.",
//           "rarity": {
//               "id": "Epic",
//               "name": "Эпический"
//           },
//           "series": null,
//           "images": {
//               "icon": "https://media.fortniteapi.io/images/81823d5aed8f8748fcfa751edb4ab09b/transparent.png",
//               "featured": null,
//               "background": "https://media.fortniteapi.io/images/cosmetics/81823d5aed8f8748fcfa751edb4ab09b/v2/background.png",
//               "icon_background": "https://media.fortniteapi.io/images/cosmetics/81823d5aed8f8748fcfa751edb4ab09b/v2/icon_background.png",
//               "full_background": "https://media.fortniteapi.io/images/cosmetics/81823d5aed8f8748fcfa751edb4ab09b/v2/info.ru.png"
//           },
//           "video": null,
//           "audio": null,
//           "gameplayTags": [
//               "Cosmetics.Filter.Season.22",
//               "Cosmetics.Source.ItemShop",
//               "Cosmetics.Set.MainStake"
//           ],
//           "set": {
//               "id": "MainStake",
//               "name": "Мистер Мисикс",
//               "partOf": "Входит в набор «Мистер Мисикс»."
//           }
//       }
//   ],
//   "priority": -2,
//   "section": {
//       "id": "RickMorty2B",
//       "name": "Рик и Морти",
//       "landingPriority": 1
//   },
//   "groupIndex": 0,
//   "storeName": "BRWeeklyStorefront",
//   "tileSize": "Normal",
//   "categories": []
// }
