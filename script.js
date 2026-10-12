/* ============================================
   TongueTreat —  JavaScript
   frontend only
   Cart data is saved in localStorage 
   ============================================ */

var restaurants = {
  "haldirams": {
    name: "Haldiram's", rating: "4.6", cuisine: "Indian", time: "30 min", image: "images/restaurants/haldirams.jpg", info: "Classic Indian snacks, thalis, sweets and comforting favourites.", foods: [
      ["Paneer Tikka", "Char-grilled paneer with peppers and mint chutney.", 229, "starter", "images/foods/paneer-tikka.jpg"],
      ["Samosa", "Crispy pastry filled with spiced potato.", 99, "starter", "images/foods/samosa.jpg"],
      ["Chicken Tikka", "Smoky marinated chicken pieces.", 279, "starter", "images/foods/chicken-tikka.jpg"],
      ["Dal Tadka", "Yellow lentils tempered with garlic and spices.", 179, "main", "https://images.unsplash.com/photo-1788603092417-a01e665e0ab2?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Paneer Butter Masala", "Paneer in creamy tomato gravy.", 249, "main", "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Chicken Biryani", "Fragrant basmati rice with aromatic chicken.", 299, "main", "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Butter Naan", "Soft tandoor naan brushed with butter.", 79, "main", "https://images.unsplash.com/photo-1756821753151-0879e7862e50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Jeera Rice", "Steamed basmati rice with cumin.", 139, "main", "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Gulab Jamun", "Warm sweet dumplings in syrup.", 99, "dessert", "https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Kulfi", "Traditional creamy Indian ice cream.", 129, "dessert", "images/foods/kulfi.jpg"]
    ]
  },
  "spiceroute": {
    name: "Spice Route", rating: "4.8", cuisine: "Indian", time: "35 min", image: "images/restaurants/spice-route.jpg", info: "Royal biryanis, rich curries and bold North Indian flavours.", foods: [
      ["Butter Chicken", "Tender chicken cooked in a rich buttery tomato gravy.", 289, "main", "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=85"],
      ["Aloo Paratha", "Stuffed Indian flatbread filled with spiced potatoes and herbs.", 149, "main", "https://images.unsplash.com/photo-1683533743190-89c9b19f9ea6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Chicken Seekh Kebab", "Juicy minced chicken kebabs grilled with aromatic Indian spices.", 299, "starter", "https://images.unsplash.com/photo-1708782341231-426344114ace?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Palak Paneer", "Soft paneer cubes cooked in a smooth spinach and spice gravy.", 239, "main", "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Rajma Chawal", "Comforting kidney bean curry served with fragrant steamed rice.", 189, "main", "images/foods/Rajma-rice.jpg"],
      ["Malai Kofta", "Soft vegetable and paneer dumplings served in creamy gravy.", 259, "main", "images/foods/malai-kofta.jpg"],
      ["Masala Dosa", "Crispy South Indian dosa filled with spiced potato masala.", 169, "main", "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Pav Bhaji", "Buttery toasted pav served with spicy mashed vegetable bhaji.", 159, "main", "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Rasmalai", "Soft cottage-cheese dumplings soaked in chilled saffron milk.", 149, "dessert", "images/foods/rasmalai.jpg"],
      ["Pudding", "Traditional carrot dessert slow-cooked with milk, sugar and nuts.", 129, "dessert", "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    ]
  },

  "latavola": {
    name: "La Tavola", rating: "4.7", cuisine: "Italian", time: "28 min", image: "images/restaurants/la-tavola.jpg", info: "Fresh pasta, creamy sauces and cosy Italian comfort food.", foods: [
      ["Bruschetta", "Tomato, basil and olive oil on toasted bread.", 149, "starter", "https://plus.unsplash.com/premium_photo-1677686707252-16013f466e61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Garlic Bread", "Toasted bread with garlic butter.", 129, "starter", "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Caprese Salad", "Tomato, mozzarella and basil.", 179, "starter", "https://plus.unsplash.com/premium_photo-1677619680472-3130a97bd5d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Arrabbiata Pasta", "Pasta in a spicy tomato sauce.", 229, "main", "https://images.unsplash.com/photo-1788599760197-81e54ec9c36a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"],
      ["Pesto Pasta", "Basil pesto with pasta and parmesan.", 259, "main", "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Margherita Pizza", "Tomato, mozzarella and basil pizza.", 299, "main", "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=1236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Mushroom Risotto", "Creamy rice with mushrooms and herbs.", 279, "main", "https://images.unsplash.com/photo-1609770424775-39ec362f2d94?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Lasagna", "Layered pasta with sauce and cheese.", 319, "main", "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Tiramisu", "Coffee-soaked sponge with mascarpone.", 199, "dessert", "https://images.unsplash.com/photo-1611385729502-2b39ea6a357d?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Panna Cotta", "Silky vanilla cream with berry sauce.", 189, "dessert", "https://plus.unsplash.com/premium_photo-1713913497348-592fa3680835?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    ]
  },

  "wokandroll": {
    name: "Wok & Roll", rating: "4.5", cuisine: "Chinese", time: "32 min", image: "images/restaurants/wok-and-roll.jpg", info: "Hot wok noodles, dumplings and Asian street-food favourites.", foods: [
      ["Spring Rolls", "Crispy rolls filled with vegetables.", 149, "starter", "https://images.unsplash.com/photo-1669340781012-ae89fbac9fc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Veg Momos", "Steamed dumplings with spicy chutney.", 169, "starter", "https://plus.unsplash.com/premium_photo-1700746098867-29b475283b51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Chilli Paneer", "Paneer tossed with peppers and chilli sauce.", 219, "starter", "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Hakka Noodles", "Wok-tossed noodles with vegetables.", 199, "main", "https://images.unsplash.com/photo-1617622141573-2e00d8818f3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Schezwan Rice", "Spicy fried rice with vegetables.", 209, "main", "https://images.unsplash.com/photo-1751618646882-4221d5e3b1c2?q=80&w=1030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Kung Pao Chicken", "Chicken, peanuts and vegetables.", 289, "main", "https://plus.unsplash.com/premium_photo-1669742927923-32d9ee86887c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Manchurian", "Crispy vegetable balls in tangy sauce.", 199, "main", "images/foods/Manchurian.jpg"],
      ["Chow Mein", "Classic wok-fried noodles.", 189, "main", "https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Mango Pudding", "Cool creamy mango dessert.", 129, "dessert", "https://images.unsplash.com/photo-1680588194311-6eb00e9c1e25?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Sesame Cookies", "Crunchy sweet sesame cookies.", 99, "dessert", "https://plus.unsplash.com/premium_photo-1671379521839-a414c1e20e97?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    ]
  },

  "sugarcloud": {
    name: "Sugar Cloud", rating: "4.9", cuisine: "Dessert", time: "25 min", image: "images/restaurants/sugar-cloud.jpg", info: "Cakes, tarts, mousse jars and sweet treats for every mood.", foods: [
      ["Chocolate Cake", "Rich chocolate cake with cream.", 179, "dessert", "https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Cheesecake", "Creamy cheesecake with berry topping.", 219, "dessert", "https://plus.unsplash.com/premium_photo-1722686461601-b2a018a4213b?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"],
      ["Brownie", "Warm fudgy chocolate brownie.", 139, "dessert", "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Red Velvet", "Soft red velvet cake with cream cheese.", 169, "dessert", "https://images.unsplash.com/photo-1659489397202-cd5d8875806b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Choco Mousse", "Light whipped chocolate mousse.", 129, "dessert", "https://images.unsplash.com/photo-1603032305813-be7441bc1037?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Strawberry Tart", "Buttery tart with strawberries and cream.", 189, "dessert", "https://images.unsplash.com/photo-1629610186507-5b75c48d7d87?q=80&w=1146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Cookie Box", "Soft-baked chocolate chip cookies.", 179, "dessert", "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Ice Cream Sundae", "Vanilla ice cream with chocolate sauce.", 149, "dessert", "https://images.unsplash.com/photo-1657225953401-5f95007fc8e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Fruit Parfait", "Yoghurt, granola and fresh fruit.", 159, "dessert", "https://images.unsplash.com/photo-1631718051263-c567dca19362?q=80&w=891&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Pancakes", "Fluffy pancakes with berries and syrup.", 199, "main", "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    ]
  },

  "urbanplate": {
    name: "Urban Plate", rating: "4.4", cuisine: "Multi-cuisine", time: "30 min", image: "images/restaurants/urban-plate.jpg", info: "Easy-going comfort food with Indian, Italian and Asian picks.", foods: [
      ["Cheese Garlic Bread", "Toasted bread with cheese and garlic.", 149, "starter", "https://plus.unsplash.com/premium_photo-1672850203719-cd77f2026d60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Garden Salad", "Fresh greens and vegetables.", 159, "starter", "https://images.unsplash.com/photo-1667657682263-86e924b34fd9?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Paneer Wrap", "Flatbread with paneer and salad.", 179, "main", "images/foods/paneer-wrap.jpg"],
      ["Veg Burger", "Crispy vegetable patty with sauces.", 199, "main", "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Creamy Pasta", "Pasta with creamy herb sauce.", 219, "main", "https://images.unsplash.com/photo-1570549986390-6bd150ac3515?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"],
      ["Margherita Pizza", "Tomato, mozzarella and basil pizza.", 269, "main", "https://images.unsplash.com/photo-1602658014686-82c48d4eb71d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Veg Fried Rice", "Wok-fried rice with vegetables.", 189, "main", "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Butter Chicken", "Creamy tomato chicken curry.", 299, "main", "https://images.unsplash.com/photo-1728910107534-e04e261768ae?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Brownie", "Warm chocolate brownie.", 119, "dessert", "https://images.unsplash.com/photo-1606313564573-104197cf8f91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Fruit Bowl", "Fresh seasonal fruit.", 129, "dessert", "https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    ]
  },

  "punjabigrill": {
    name: "Punjabi Grill", rating: "4.7", cuisine: "Indian", time: "33 min", image: "images/restaurants/punjabi-grill.png", info: "Hearty Punjabi flavours, tandoor favourites and rich gravies.", foods: [
      ["Tandoori Paneer", "Smoky paneer cubes cooked in a traditional tandoor.", 249, "starter", "https://images.unsplash.com/photo-1598511796432-32663d0875bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Aloo Tikki", "Crispy potato patties served with chutneys.", 129, "starter", "https://images.unsplash.com/photo-1559847844-b0915a3800c6?q=80&w=1045&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Hara Bhara Kebab", "Green vegetable kebabs made with spinach and peas.", 189, "starter", "https://images.unsplash.com/photo-1629117407975-d3bdfd26aa86?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Kadhai Paneer", "Paneer cooked with capsicum, onion and rich spices.", 259, "main", "https://images.unsplash.com/photo-1642821369314-100fece91d3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Shahi Paneer", "Soft paneer in a rich creamy gravy.", 269, "main", "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Chole Bhature", "Spiced chickpeas served with fluffy bhature.", 199, "main", "https://images.unsplash.com/photo-1788602564560-9bcbf0f9acb6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Tandoori Roti", "Crispy traditional Indian flatbread.", 49, "main", "https://images.unsplash.com/photo-1583057341912-a0df64b8da4d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Veg Pulao", "Aromatic basmati rice cooked with vegetables.", 179, "main", "https://plus.unsplash.com/premium_photo-1694141252026-3df1de888a21?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Rasmalai", "Soft cheese dumplings served in chilled saffron milk.", 149, "dessert", "images/foods/rasmalai.jpg"],
      ["Kheer", "Creamy rice pudding flavored with cardamom.", 119, "dessert", "images/foods/kheer.jpg"]
    ]
  },

  "dilli6": {
    name: "Dilli 6", rating: "4.6", cuisine: "Indian", time: "29 min", image: "images/restaurants/dilli-6.jpg", info: "Street-style North Indian favourites with homestyle comfort.", foods: [
      ["Crispy Potato Chaat", "Crispy potato topped with yogurt, chutneys and spices.", 129, "starter", "https://plus.unsplash.com/premium_photo-1783919380454-2bee75b7d4ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Spiced Papdi", "Crispy papdi served with tangy chutneys and fresh yogurt.", 139, "starter", "https://plus.unsplash.com/premium_photo-1668849807202-b3465e48849a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Paneer Tikka", "Grilled paneer pieces with mild spices and fresh herbs.", 229, "starter", "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Matar Paneer", "Soft paneer and green peas cooked in a flavorful tomato gravy.", 239, "main", "images/foods/mpaneer.jpg"],
      ["Kashmiri Rogan Josh", "Tender vegetables cooked slowly with aromatic spices and rich gravy.", 299, "main", "images/foods/rogan.jpg"],
      ["Chicken Curry", "Tender chicken cooked in a traditional spiced onion and tomato gravy.", 289, "main", "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Tandoori Fish", "Fresh vegetables marinated with spices and roasted in the tandoor.", 249, "main", "https://images.unsplash.com/photo-1598973443345-c85b257ed7d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Garlic Naan", "Soft tandoor naan topped with garlic and fresh herbs.", 89, "main", "https://images.unsplash.com/photo-1559561724-4ea348cd867f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Sweet Rice", "Fragrant rice cooked with milk, sugar, cardamom and nuts.", 129, "dessert", "images/foods/kheer.jpg"],
      ["Creamy Rabri", "Thick sweet milk dessert flavored with cardamom and nuts.", 149, "dessert", "images/foods/Rabdi.jpg"]
    ]
  },

  "southspice": {
    name: "South Spice", rating: "4.8", cuisine: "Indian", time: "31 min", image: "images/restaurants/south-spice.jpg", info: "Crispy dosas, fluffy idlis and flavourful South Indian meals.", foods: [
      ["Masala Dosa", "Crispy dosa served with potato masala and coconut chutney.", 149, "starter", "https://images.unsplash.com/photo-1751560455942-f859f1215826?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Medu Vada", "Crispy lentil fritters served with sambar and chutney.", 119, "starter", "https://images.unsplash.com/photo-1730191843435-073792ba22bc?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Chicken 65", "Crispy fried chicken pieces tossed with South Indian spices.", 249, "starter", "https://plus.unsplash.com/premium_photo-1675864532625-60efd11cde54?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Idli", "Soft steamed rice cakes served with sambar and coconut chutney.", 99, "main", "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Curd Rice", "Soft rice mixed with creamy yogurt and mild seasoning.", 119, "main", "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=1058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Uttapam", "Soft rice pancake topped with fresh vegetables.", 139, "main", "images/foods/uttapam.jpg"],
      ["Vada", "Crispy lentil fritters served with sambar and chutney.", 109, "starter", "https://images.unsplash.com/photo-1730191843435-073792ba22bc?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Coconut Ladoo", "Soft coconut sweets made with milk and sugar.", 99, "dessert", "https://images.unsplash.com/photo-1676363999989-9faf306a0025?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    ]
  },

  "royalrajasthan": {
    name: "Royal Rajasthan", rating: "4.7", cuisine: "Indian", time: "38 min", image: "images/restaurants/royal-rajasthan.jpg", info: "Royal Rajasthani thalis, breads and traditional sweets.", foods: [
      ["Dal Baati", "Wheat balls served with dal and ghee.", 199, "main", "https://images.unsplash.com/photo-1711153419402-336ee48f2138?auto=format&fit=crop&w=1000&q=80"],
      ["Kachori", "Crispy pastry filled with spiced lentils.", 99, "starter", "https://images.unsplash.com/photo-1616787700988-44c85b2ffcf5?auto=format&fit=crop&w=1000&q=80"],
      ["Samosa", "Crispy pastry filled with spiced potatoes.", 89, "starter", "https://images.unsplash.com/photo-1627670381055-487000952cb0?auto=format&fit=crop&w=1000&q=80"],
      ["Gatte Curry", "Soft gram flour pieces cooked in spiced gravy.", 199, "main", "https://images.unsplash.com/photo-1742281257687-092746ad6021?auto=format&fit=crop&w=1000&q=80"],
      ["Rajasthani Thali", "Traditional meal with dal, roti, vegetables and rice.", 299, "main", "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?auto=format&fit=crop&w=1000&q=80"],
      ["Bajra Roti", "Traditional millet flatbread served with ghee.", 89, "main", "https://images.unsplash.com/photo-1780907084874-14d202d39bf1?auto=format&fit=crop&w=1000&q=80"],
      ["Jeera Rice", "Fragrant rice cooked with cumin and mild spices.", 129, "main", "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?auto=format&fit=crop&w=1000&q=80"],
      ["Dal", "Simple lentils cooked with Indian spices.", 149, "main", "https://images.unsplash.com/photo-1711153419402-336ee48f2138?auto=format&fit=crop&w=1000&q=80"],
      ["Gulab Jamun", "Soft sweet dumplings served in sugar syrup.", 99, "dessert", "https://images.unsplash.com/photo-1742281257687-092746ad6021?auto=format&fit=crop&w=1000&q=80"],
      ["Jalebi", "Crispy spiral sweets soaked in sugar syrup.", 99, "dessert", "https://images.unsplash.com/photo-1760263215450-b13943da7e17?auto=format&fit=crop&w=1000&q=80"]
    ]
  },

  "pastabella": {
    name: "Pasta Bella", rating: "4.8", cuisine: "Italian", time: "27 min", image: "images/restaurants/pasta-bella.jpg", info: "Handcrafted pasta and elegant Italian comfort food.", foods: [
      ["Cheese Ravioli", "Soft ravioli filled with cheese and served with herbs.", 249, "main", "https://images.unsplash.com/photo-1624036074603-5ba8bc91f63b?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Tomato Ravioli", "Ravioli served with fresh tomato and light herbs.", 259, "main", "https://images.unsplash.com/photo-1628885405379-5d58de03edb0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Gnocchi", "Soft potato pasta served with tomato sauce and basil.", 239, "main", "https://images.unsplash.com/photo-1774828893338-50fd6c5f3062?auto=format&fit=crop&w=1000&q=80"],

      ["Spaghetti Bolognese", "Spaghetti tossed with rich tomato and herb sauce.", 229, "main", "https://images.unsplash.com/photo-1531089073319-17596b946d42?auto=format&fit=crop&w=1000&q=80"],

      ["Spaghetti Aglio e Olio", "Spaghetti with garlic, olive oil and herbs.", 219, "main", "https://images.unsplash.com/photo-1711539137930-3fa2ae6cec60?auto=format&fit=crop&w=1000&q=80"],

      ["Lasagna", "Layers of pasta, tomato sauce, cheese and herbs.", 319, "main", "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?auto=format&fit=crop&w=1000&q=80"],

      ["Fettuccine Alfredo", "Creamy fettuccine pasta with parmesan and herbs.", 269, "main", "https://images.unsplash.com/photo-1768668053140-f589ed4bef31?auto=format&fit=crop&w=1000&q=80"],

      ["Tagliatelle", "Traditional Italian pasta with mushrooms and parmesan.", 279, "main", "https://images.unsplash.com/photo-1603570416072-84068a0f1358?auto=format&fit=crop&w=1000&q=80"],

      ["Creamy Pasta", "Fresh Italian pasta with creamy sauce and greens.", 249, "main", "https://images.unsplash.com/photo-1523218551570-6881ad409172?auto=format&fit=crop&w=1000&q=80"],

      ["Margherita Pizza", "Classic Italian pizza with tomato, mozzarella and basil.", 299, "main", "https://images.unsplash.com/photo-1768966597543-14fb753b871f?auto=format&fit=crop&w=1000&q=80"]]
  },

  "pizzaroma": {

    name: "Pizza Roma", rating: "4.6", cuisine: "Italian", time: "24 min", image: "images/restaurants/pizza-roma.jpg", info: "Thin-crust pizzas, cheesy sides and Italian classics.", foods: [

      ["Tomato Basil Crostini", "Crispy toasted bread topped with juicy tomatoes, basil and olive oil.", 149, "starter", "https://images.unsplash.com/photo-1761315412730-a6f67208b78d?auto=format&fit=crop&w=800&q=80"],

      ["Herbed Cheese Toast", "Warm toasted bread layered with garlic butter, herbs and melted cheese.", 129, "starter", "https://images.unsplash.com/photo-1751199592465-f142293a8cc6?auto=format&fit=crop&w=800&q=80"],

      ["Caprese Garden Plate", "Fresh mozzarella, ripe tomatoes and basil finished with a light balsamic drizzle.", 179, "starter", "https://images.unsplash.com/photo-1781567502827-3c671d8cae63?auto=format&fit=crop&w=800&q=80"],

      ["Spicy Tomato Penne", "Penne pasta tossed in a rich tomato and chilli sauce with Italian herbs.", 229, "main", "https://images.unsplash.com/photo-1767913338843-1ac3854e202e?auto=format&fit=crop&w=800&q=80"], ["Basil Pesto Fusilli", "Twisted pasta coated in creamy basil pesto with parmesan and herbs.", 259, "main", "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"],

      ["Four Cheese Pizza", "Thin crispy pizza topped with a rich blend of four creamy Italian cheeses.", 299, "main", "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"],

      ["Creamy Mushroom Risotto", "Slow-cooked Italian rice with tender mushrooms, herbs and parmesan.", 279, "main", "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80"],

      ["Cheesy Layered Pasta", "Layers of pasta, rich tomato sauce, melted cheese and Italian herbs.", 319, "main", "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80"],

      ["Espresso Cream Tiramisu", "Soft coffee-soaked layers with mascarpone cream and a dusting of cocoa.", 199, "dessert", "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"],

      ["Berry Vanilla Panna Cotta", "Silky vanilla cream served with a sweet mixed-berry topping.", 189, "dessert", "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"]

    ]

  },

  "tokyobowl": {
    name: "Tokyo Bowl",
    rating: "4.7",
    cuisine: "Chinese",
    time: "30 min",
    image: "images/restaurants/tokyo-bowl.jpg",
    info: "Japanese-inspired bowls, noodles and Asian favourites.",

    foods: [
      ["Golden Veggie Rolls", "Crispy golden rolls packed with a savoury vegetable filling and served with dip.", 149, "starter", "https://images.unsplash.com/photo-1600850056064-a8b380df8395?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Oriental Steamed Bites", "Soft steamed dumplings filled with seasoned vegetables and served with chilli dip.", 169, "starter", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"],

      ["Dragon Paneer", "Cubes of paneer tossed with colourful peppers in a hot and tangy sauce.", 219, "starter", "https://images.unsplash.com/photo-1551881192-002e02ad3d87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Asian Street Noodles", "Fresh noodles tossed in a hot wok with vegetables and aromatic sauces.", 199, "main", "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80"],

      ["Firecracker Rice", "Fragrant fried rice mixed with vegetables and bold spicy Asian flavours.", 209, "main", "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"],

      ["Peanut Chicken Stir-Fry", "Tender chicken cooked with crunchy peanuts, vegetables and a savoury Asian glaze.", 289, "main", "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80"],

      ["Tangy Garden Balls", "Crispy vegetable bites coated in a rich sweet, sour and savoury sauce.", 199, "main", "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80"],

      ["Wok Garden Noodles", "Classic noodles stir-fried with fresh vegetables and aromatic Asian seasoning.", 189, "main", "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=800&q=80"],

      ["Mango Silk Cup", "Cool and creamy mango dessert with a smooth, refreshing fruity taste.", 129, "dessert", "https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    ]
  },


  "dragonwok": {
    name: "Dragon Wok", rating: "4.5", cuisine: "Chinese", time: "34 min", image: "images/restaurants/dragon-wok.jpg", info: "Affordable wok dishes, dumplings and spicy Asian plates.", foods:
      [
        ["Golden Veggie Rolls", "Golden fried spring rolls filled with seasoned vegetables, served with dipping sauce.", 149, "starter", "https://images.unsplash.com/photo-1515022376298-7333f33e704b?auto=format&fit=crop&w=800&q=80"],

        ["Garden Veg Dumplings", "Soft Chinese-style dumplings filled with vegetables and served with savoury dipping sauce.", 169, "starter", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"],

        ["Fiery Paneer Toss", "Crispy paneer tossed with peppers, spring onions and spicy Sichuan-style sauce.", 219, "starter", "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

        ["Wok-Tossed Veg Noodles", "Wok-tossed Chinese noodles with crunchy vegetables and savoury Asian sauce.", 199, "main", "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80"],

        ["Golden Wok Rice", "Aromatic wok-fried rice tossed with vegetables and classic Chinese seasonings.", 209, "main", "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"],

        ["Spicy Chicken Wok Rice", "Spicy wok-fried rice with tender chicken, vegetables and Schezwan-style seasoning.", 289, "main", "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"],

        ["Tangy Veggie Balls", "Crispy vegetable balls coated in a glossy, tangy Indo-Chinese Manchurian sauce.", 199, "main", "https://plus.unsplash.com/premium_photo-1669261882840-8ec74ef0ddea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

        ["Hong Kong Style Noodles", "Stir-fried Chinese noodles tossed with vegetables, spring onions and savoury sauce.", 189, "main", "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80"],

        ["Tropical Mango Delight", "Silky chilled mango pudding with a smooth, creamy tropical flavour.", 129, "dessert", "https://images.unsplash.com/photo-1680588194311-6eb00e9c1e25?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

        ["Sesame Crunch Bites", "Crispy golden cookies finished with aromatic sesame seeds.", 99, "dessert", "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80"]
      ]
  },

  "sweettooth": {
    name: "Sweet Tooth",
    rating: "4.8",
    cuisine: "Dessert",
    time: "22 min",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    info: "Playful cakes, ice creams and sweet treats.",
    foods: [
      ["Chocolate Layer Cake", "Rich chocolate cake with creamy frosting.", 179, "dessert", "https://images.unsplash.com/photo-1615796701805-2094ac54bbf9?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Berry Cheesecake", "Creamy cheesecake topped with fresh berries.", 219, "dessert", "https://plus.unsplash.com/premium_photo-1726776226061-a23ad8810ed5?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Chocolate Brownie", "Warm, rich and fudgy chocolate brownie.", 139, "dessert", "https://images.unsplash.com/photo-1564355808539-22fda35bed7e"],

      ["Red Velvet Cake", "Soft red velvet cake with smooth cream frosting.", 169, "dessert", "https://plus.unsplash.com/premium_photo-1713920189815-876dbdf5f56e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Chocolate Mousse", "Smooth and creamy chocolate mousse dessert.", 129, "dessert", "https://images.unsplash.com/photo-1579954115545-a95591f28bfc"],

      ["Strawberry Cream Tart", "Sweet tart topped with strawberries and cream.", 189, "dessert", "https://images.unsplash.com/photo-1519915028121-7d3463d20b13"],

      ["Chocolate Chip Cookies", "Freshly baked cookies loaded with chocolate chips.", 179, "dessert", "https://images.unsplash.com/photo-1499636136210-6f4ee915583e"],

      ["Vanilla Ice Cream", "Creamy vanilla ice cream with a sweet topping.", 149, "dessert", "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Fruit & Yogurt Parfait", "Creamy yogurt layered with granola and fresh fruit.", 159, "dessert", "https://images.unsplash.com/photo-1488477181946-6428a0291777"],

      ["Berry Pancake Stack", "Fluffy pancakes served with berries and syrup.", 199, "main", "https://images.unsplash.com/photo-1528207776546-365bb710ee93"]
    ]
  },
  "cocoahouse": {
    name: "Cocoa House", rating: "4.9", cuisine: "Dessert", time: "20 min", image: "images/restaurants/cocoa-house.jpg", info: "Premium chocolate desserts, pastries and celebration cakes.", foods: [
      ["Chocolate Cake Slice", "A slice of chocolate cake covered with rich chocolate frosting.", 179, "dessert", "https://images.unsplash.com/photo-1540337706094-da10342c93d8?auto=format&fit=crop&w=1000&q=80"],

      ["Strawberry Cheesecake", "A creamy cheesecake slice topped with fresh strawberries and berry pieces.", 219, "dessert", "https://images.unsplash.com/photo-1744421457940-20ce3060e55f?auto=format&fit=crop&w=1000&q=80"],

      ["Brownie with Ice Cream", "A warm chocolate brownie served with a scoop of ice cream and chocolate sauce.", 139, "dessert", "https://images.unsplash.com/photo-1639744093270-36e0cc2817ee?auto=format&fit=crop&w=1000&q=80"],

      ["Red Velvet Cake with Coffee", "A slice of red velvet cake with creamy frosting served alongside a cup of coffee.", 169, "dessert", "https://images.unsplash.com/photo-1761291828835-819a3d0a7f5a?auto=format&fit=crop&w=1000&q=80"],

      ["Chocolate Mousse with Mint", "Smooth chocolate mousse served in a bowl and finished with a fresh mint garnish.", 129, "dessert", "https://images.unsplash.com/photo-1777897396228-8b1d68cc51a6?auto=format&fit=crop&w=1000&q=80"],

      ["Strawberry Tart with Cream", "A strawberry tart topped with fresh strawberries and a swirl of cream.", 189, "dessert", "https://images.unsplash.com/photo-1754652327485-e2bd06c2c261?auto=format&fit=crop&w=1000&q=80"],

      ["Chocolate Chip Cookies", "A stack of freshly baked cookies filled with visible chocolate chips.", 179, "dessert", "https://images.unsplash.com/photo-1782227149180-2d321c5042ed?auto=format&fit=crop&w=1000&q=80"],

      ["Chocolate Ice Cream Parfait", "A chocolate ice cream dessert served in a glass dish and topped with cherries.", 149, "dessert", "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&w=1000&q=80"],

      ["Fresh Fruit Parfait", "A glass parfait filled with colourful fresh fruit pieces and served chilled.", 159, "dessert", "https://images.unsplash.com/photo-1626790235132-c8f03d98bd1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Pancakes with Fresh Berries", "A stack of fluffy pancakes topped with fresh berries and served with syrup.", 199, "main", "https://plus.unsplash.com/premium_photo-1672846024989-d3c1ace80509?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    ]
  },

  "foodyard": {
    name: "The Food Yard", rating: "4.3", cuisine: "Multi-cuisine", time: "36 min", image: "images/restaurants/food-yard.jpg", info: "A big casual menu with Indian, Italian and Asian choices.", foods: [
      ["Cheese Garlic Bread", "Toasted bread with melted cheese, garlic and herbs.", 149, "starter", "https://images.unsplash.com/photo-1751199592465-f142293a8cc6?auto=format&fit=crop&w=1000&q=80"],

      ["Vegetable Salad", "Fresh greens, tomatoes, cucumber and colorful vegetables.", 159, "starter", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80"],

      ["Vegetable Noodles", "Stir-fried noodles with vegetables, peppers and spring onions.", 179, "main", "https://images.unsplash.com/photo-1780493219430-c3e45cd17df8?auto=format&fit=crop&w=1000&q=80"],

      ["Jackfruit Burger", "Juicy jackfruit filling with lettuce in a soft toasted bun.", 199, "main", "https://images.unsplash.com/photo-1569691802417-e5e1ec314e81?auto=format&fit=crop&w=1000&q=80"],

      ["Creamy Penne Pasta", "Creamy cheese-drenched penne pasta with herbs and vegetables.", 219, "main", "https://images.unsplash.com/photo-1781332147533-aefdfe14dc2c?auto=format&fit=crop&w=1000&q=80"],

      ["Margherita Pizza", "Classic pizza with tomato, mozzarella and fresh basil.", 269, "main", "https://images.unsplash.com/photo-1774806189430-0aef409df5cd?auto=format&fit=crop&w=1000&q=80"],

      ["Vegetable Fried Rice", "Wok-fried rice with vegetables and fresh herbs.", 189, "main", "https://images.unsplash.com/photo-1664717698774-84f62382613b?auto=format&fit=crop&w=1000&q=80"],

      ["Butter Chicken", "Tender chicken in a rich and creamy tomato butter sauce.", 299, "main", "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80"],

      ["Chocolate Brownie", "Rich fudgy chocolate brownie with a soft centre.", 119, "dessert", "https://images.unsplash.com/photo-1777647364657-2319b02095de?auto=format&fit=crop&w=1000&q=80"],

      ["Fresh Fruit Bowl", "A colorful bowl of fresh seasonal fruits.", 129, "dessert", "https://images.unsplash.com/photo-1759191639167-a81fee5d0f27?auto=format&fit=crop&w=1000&q=80"]
    ]
  },

  "cafebloom": {
    name: "Cafe Bloom", rating: "4.5", cuisine: "Multi-cuisine", time: "26 min", image: "images/restaurants/cafe-bloom.jpg", info: "Caf\u00e9 classics, pasta, sandwiches and sweet treats.", foods: [
      ["Cheese Garlic Bread (Pain à l’ail au fromage)", "Toasted bread with melted cheese, garlic and herbs.", 149, "starter", "https://images.unsplash.com/photo-1596698185611-31d8a250f164?auto=format&fit=crop&w=1000&q=80"],

      ["Garden Salad (Salade verte)", "Fresh greens, vegetables and a light dressing.", 159, "starter", "https://images.unsplash.com/photo-1596282221604-fce63724b013?auto=format&fit=crop&w=1000&q=80"],

      ["Croissant Sandwich (Sandwich au croissant)", "Flaky croissant filled with fresh greens and creamy filling.", 179, "main", "https://images.unsplash.com/photo-1786918467226-e4ebc1d46069?auto=format&fit=crop&w=1000&q=80"],

      ["French Vegetable Tart (Tarte aux légumes)", "Golden pastry topped with fresh seasonal vegetables.", 199, "main", "https://images.unsplash.com/photo-1618946440416-ef676a06a913?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Creamy Penne (Penne à la crème)", "Penne pasta in a creamy cheese and herb sauce.", 219, "main", "https://images.unsplash.com/photo-1702827761984-205e57a3a633?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      ["Margherita Pizza (Pizza Margherita)", "Tomato, mozzarella and fresh basil on a crisp crust.", 269, "main", "https://images.unsplash.com/photo-1774806189430-0aef409df5cd?auto=format&fit=crop&w=1000&q=80"],

      ["French Toast (Pain perdu)", "Golden French toast served with berries and maple syrup.", 189, "main", "https://images.unsplash.com/photo-1776763255323-373bd0e826b5?auto=format&fit=crop&w=1000&q=80"],

      ["Croissant (Croissant au beurre)", "Classic flaky French pastry, golden and buttery.", 129, "starter", "https://images.unsplash.com/photo-1784755105230-82747bf98817?auto=format&fit=crop&w=1000&q=80"],

      ["Chocolate Crepe (Crêpe au chocolat)", "Soft French crepe with chocolate, cream and nuts.", 149, "dessert", "https://images.unsplash.com/photo-1782849206249-16a0b3a88d36?auto=format&fit=crop&w=1000&q=80"],

      ["Berry Waffle (Gaufre aux fruits rouges)", "Crispy waffle topped with strawberries and cream.", 159, "dessert", "https://images.unsplash.com/photo-1537483483453-a2d6f2689bd0?auto=format&fit=crop&w=1000&q=80"]
    ]
  },

  "streetspice": {
    name: "Street Spice", rating: "4.4", cuisine: "Multi-cuisine", time: "32 min", image: "images/restaurants/street-spice.jpg", info: "Fun street-food inspired meals from across Asia and India.", foods: [
      ["Takoyaki", "Japanese street food balls topped with sauce and herbs.", 179, "starter", "https://images.unsplash.com/photo-1751094364516-02b351f9c277?auto=format&fit=crop&w=1000&q=80"],

      ["Steamed Dumplings", "Soft steamed dumplings served fresh in a bamboo steamer.", 169, "starter", "https://images.unsplash.com/photo-1748248078354-5b085351714f?auto=format&fit=crop&w=1000&q=80"],

      ["Spring Rolls", "Crispy rolls filled with vegetables and served with dip.", 149, "starter", "https://images.unsplash.com/photo-1780842815705-eede037a16f0?auto=format&fit=crop&w=1000&q=80"],

      ["Momo", "Steamed dumplings filled with seasoned meat and vegetables.", 159, "starter", "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80"],

      ["Bao Bun", "Soft steamed bun filled with seasoned meat and herbs.", 189, "main", "https://images.unsplash.com/photo-1781785164696-0154e4dd70c1?auto=format&fit=crop&w=1000&q=80"],

      ["Chicken Satay", "Grilled chicken skewers served with peanut sauce.", 229, "main", "https://images.unsplash.com/photo-1772855386828-a18ff9a12584?auto=format&fit=crop&w=1000&q=80"],

      ["Fried Noodles", "Wok-fried noodles with vegetables and Asian sauces.", 199, "main", "https://images.unsplash.com/photo-1767324672583-8818531f650a?auto=format&fit=crop&w=1000&q=80"],
      ["Pad Thai", "Thai rice noodles with vegetables, peanuts and lime.", 229, "main", "https://images.unsplash.com/photo-1754887966237-3295dcc4a5db?auto=format&fit=crop&w=1000&q=80"],

      ["Spicy Fish Curry", "Spicy Asian fish curry with herbs and chili.", 279, "main", "https://images.unsplash.com/photo-1760390952094-d27868dada6f?auto=format&fit=crop&w=1000&q=80"]
    ]
  },

  "grandtable": {
    name: "The Grand Table", rating: "4.9", cuisine: "Multi-cuisine", time: "40 min", image: "images/restaurants/grand-table.jpg", info: "A premium multi-cuisine menu for special meals.", foods: [
      ["Truffle Cream Ravioli", "Handcrafted ravioli finished with a luxurious truffle cream sauce and Parmesan.", 449, "main", "https://images.unsplash.com/photo-1675670497153-c12fc36d2fd2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Golden Parmesan Arancini", "Crispy Sicilian rice croquettes filled with Parmesan and served with rich tomato sauce.", 329, "starter", "https://images.unsplash.com/photo-1751199393301-1fcbd21bd34d?auto=format&fit=crop&w=700&q=85"],
      ["Creamy Lemon Risotto", "Silky Arborio rice infused with lemon, herbs and aged Parmesan.", 389, "main", "https://images.unsplash.com/photo-1541014597398-cd43df0833c2?auto=format&fit=crop&w=700&q=85"],
      ["Royal Lamb Chops", "Tender grilled lamb chops served with aromatic herbs and a refined jus.", 599, "main", "https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Herb-Crusted Gourmet Steak", "Premium grilled steak with herbs, roasted vegetables and a delicate sauce.", 649, "main", "https://images.unsplash.com/photo-1565299715199-866c917206bb?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Garden Gourmet Salad", "Elegant seasonal greens with fresh fruits, roasted vegetables and a house dressing.", 299, "starter", "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Seafood Saffron Risotto", "Creamy risotto with delicate prawns, saffron and Mediterranean herbs.", 479, "main", "https://images.unsplash.com/photo-1623962470629-ead26532ef44?auto=format&fit=crop&w=700&q=85"],
      ["Artisanal Ravioli Verde", "Fresh handmade ravioli served with Parmesan, basil and a refined herb sauce.", 429, "main", "https://images.unsplash.com/photo-1636475735446-bfc801fa6f2c?auto=format&fit=crop&w=700&q=85"],
      ["Velvet Panna Cotta", "Silky vanilla panna cotta finished with seasonal berries and a delicate fruit glaze.", 279, "dessert", "https://images.unsplash.com/photo-1602563388144-9a37442e6e42?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      ["Decadent Chocolate Royale", "Rich handcrafted chocolate dessert with smooth cream and an elegant gourmet finish.", 319, "dessert", "https://images.unsplash.com/photo-1780586383579-4624d86df6a4?auto=format&fit=crop&w=700&q=85"]
    ]
  }
};


function getCart() {
  var cart = localStorage.getItem("tongueTreatCart");

  if (cart) {
    return JSON.parse(cart);
  }

  return [];
}


function saveCart(cart) {
  localStorage.setItem("tongueTreatCart", JSON.stringify(cart));
}


function addToCart(name, price, image, restaurant) {
  var cart = getCart();
  var found = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty++;
      found = true;
    }
  }

  if (!found) {
    cart.push({
      name: name,
      price: Number(price) || getOldPrice(name),
      image: image || "",
      restaurant: restaurant || "TongueTreat",
      qty: 1
    });
  }

  saveCart(cart);
  showToast(name + " added to cart!");
}


function getOldPrice(name) {
  var oldPrices = {
    "Creamy Alfredo Penne": 249,
    "Sunny Tomato Spaghetti": 229,
    "Garden Power Bowl": 199,
    "Smoky Grill Platter": 279,
    "Pink Velvet Slice": 149,
    "Berry Cloud Tart": 169,
    "Choco Mousse Jar": 129,
    "Sunshine Fruit Plate": 189
  };

  return oldPrices[name] || 0;
}


function showToast(message) {
  var toast = document.createElement("div");

  toast.textContent = "✓ " + message;
  toast.className = "toast";

  document.body.appendChild(toast);

  setTimeout(function () {
    toast.remove();
  }, 1600);
}


function filterFood(type) {
  var cards = document.querySelectorAll("#foodGrid .card");

  cards.forEach(function(card) {
    var show = type === "all" || card.dataset.type === type;
    card.style.display = show ? "block" : "none";
  });
}

// function filterMenu(type) {
//   var cards = document.querySelectorAll("#menuGrid .card");

//   cards.forEach(function (card) {
//     var show = type === "all" || card.dataset.type === type;

//     card.style.display = show ? "block" : "none";
//   });
// }


function filterRestaurants() {
  var cuisine = document.getElementById("cuisineFilter").value;
  var rating = document.getElementById("ratingFilter").value;
  var price = document.getElementById("priceFilter").value;
  var time = document.getElementById("timeFilter").value;
  var veg = document.getElementById("vegFilter").value;

  var cards = document.querySelectorAll(".restaurant-card");
  var shown = 0;

  cards.forEach(function (card) {
    var okCuisine = cuisine === "all" || card.dataset.cuisine === cuisine;
    var okRating = rating === "all" || Number(card.dataset.rating) >= Number(rating);
    var okPrice = price === "all" || card.dataset.price === price;
    var okTime = time === "all" || Number(card.dataset.time) <= Number(time);
    var okVeg = veg === "all" || card.dataset.type === veg;

    if (okCuisine && okRating && okPrice && okTime && okVeg) {
      card.style.display = "block";
      shown++;
    } else {
      card.style.display = "none";
    }
  });

  var count = document.getElementById("restaurantCount");

  if (count) {
    count.textContent = shown + " restaurant(s) found";
  }

  var empty = document.getElementById("noRestaurants");

  if (empty) {
    empty.style.display = shown === 0 ? "block" : "none";
  }
}


function showRestaurantMenu() {
  var params = new URLSearchParams(window.location.search);
  var key = params.get("restaurant");
  var restaurant = restaurants[key];

  if (!restaurant) {
    document.getElementById("restaurantName").textContent = "Restaurant not found";

    document.getElementById("menuMessage").style.display = "block";

    document.getElementById("menuMessage").innerHTML =
      "<h2>Please choose a restaurant from the listing.</h2>" +
      '<a href="dashboard.html" class="btn mint" style="margin-top:18px;">Back to Restaurants</a>';

    return;
  }

  document.title = restaurant.name + " Menu — TongueTreat";

  document.getElementById("restaurantName").textContent = restaurant.name;

  document.getElementById("restaurantRating").textContent = restaurant.rating;

  document.getElementById("restaurantInfo").textContent = restaurant.info;

  document.getElementById("restaurantCuisine").textContent =
    "🍴 " + restaurant.cuisine;

  document.getElementById("restaurantTime").textContent =
    "🚚 " + restaurant.time;

  document.getElementById("restaurantImage").src = restaurant.image;

  var grid = document.getElementById("foodGrid");

  grid.innerHTML = "";

  restaurant.foods.forEach(function (food) {
    var card = document.createElement("div");

    card.className = "card";

    card.dataset.type = food[3];

    card.innerHTML =
      '<img src="' + food[4] + '" alt="' + food[0] + '">' +
      '<div class="card-body">' +
      '<span class="pill ' + (food[3] === "dessert" ? "sweet" : "") + '">' +
      food[3] +
      '</span>' +
      '<h3>' + food[0] + '</h3>' +
      '<p>' + food[1] + '</p>' +
      '<div class="price-row">' +
      '<span class="price">₹' + food[2] + '</span>' +
      '<button class="btn small" onclick="addToCart(' +
      "'" + food[0].replace(/'/g, "\\'") + "'," +
      food[2] + "," +
      "'" + food[4] + "'," +
      "'" + restaurant.name.replace(/'/g, "\\'") + "'" +
      ')">Add +</button>' +
      '</div></div>';

    grid.appendChild(card);
  });
}


function renderCart() {
  var cart = getCart();

  var container = document.getElementById("cartItems");

  var empty = document.getElementById("emptyCart");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (cart.length === 0) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
  }

  cart.forEach(function (item, index) {
    var itemBox = document.createElement("div");

    itemBox.className = "cart-item";

    itemBox.innerHTML =
      '<img src="' + item.image + '" alt="' + item.name + '">' +
      '<div>' +
      '<h3 style="font-size:22px;">' + item.name + '</h3>' +
      '<span class="pill">' + item.restaurant + '</span>' +
      '<p>₹' + item.price + ' each</p>' +
      '</div>' +
      '<div style="text-align:right;">' +
      '<div class="price">₹' + (item.price * item.qty) + '</div>' +
      '<div class="qty" style="margin-top:8px;">' +
      '<button onclick="changeCartQty(' + index + ', -1)">−</button>' +
      '<span class="count">' + item.qty + '</span>' +
      '<button onclick="changeCartQty(' + index + ', 1)">+</button>' +
      '</div>' +
      '<button class="remove-btn" onclick="removeCartItem(' + index + ')">Remove</button>' +
      '</div>';

    container.appendChild(itemBox);
  });

  updateTotals();
}


function changeCartQty(index, step) {
  var cart = getCart();

  cart[index].qty += step;

  if (cart[index].qty < 1) {
    cart.splice(index, 1);
  }

  saveCart(cart);

  renderCart();
}


function removeCartItem(index) {
  var cart = getCart();

  cart.splice(index, 1);

  saveCart(cart);

  renderCart();

  showToast("Item removed");
}


function changeQty(button, step) {
  var countEl = button.parentElement.querySelector(".count");

  var count = parseInt(countEl.textContent, 10) + step;

  if (count < 1) {
    count = 1;
  }

  countEl.textContent = count;

  updateTotals();
}


function updateTotals() {
  var cart = getCart();

  var subtotal = 0;

  cart.forEach(function (item) {
    subtotal += item.price * item.qty;
  });

  var delivery = subtotal > 0 ? 49 : 0;

  var tax = subtotal > 0 ? 20 : 0;

  var subEl = document.getElementById("subtotal");

  var totalEl = document.getElementById("total");

  var deliveryEl = document.getElementById("deliveryCharge");

  var taxEl = document.getElementById("tax");

  if (subEl) {
    subEl.textContent = "₹" + subtotal;
  }

  if (deliveryEl) {
    deliveryEl.textContent = "₹" + delivery;
  }

  if (taxEl) {
    taxEl.textContent = "₹" + tax;
  }

  if (totalEl) {
    totalEl.textContent = "₹" + (subtotal + delivery + tax);
  }
}


function placeOrder() {
  var cart = getCart();

  if (cart.length === 0) {
    alert("Your cart is empty. Please add some food first.");
    return;
  }

  var address = document.getElementById("address").value.trim();

  if (address === "") {
    alert("Please enter a delivery address.");
    return;
  }

  alert("Order placed successfully! Your food is on the way.");

  localStorage.removeItem("tongueTreatCart");

  renderCart();
}


function fakeLogin(event) {
  event.preventDefault();

  alert("Welcome back to TongueTreat!");

  window.location.href = "dashboard.html";
}


document.addEventListener("DOMContentLoaded", function () {

  var filterIds = [
    "cuisineFilter",
    "ratingFilter",
    "priceFilter",
    "timeFilter",
    "vegFilter"
  ];

  filterIds.forEach(function (id) {

    var element = document.getElementById(id);

    if (element) {
      element.addEventListener("change", filterRestaurants);
    }

  });

  if (document.getElementById("restaurantGrid")) {
    filterRestaurants();
  }

  if (document.getElementById("foodGrid")) {
    showRestaurantMenu();
  }

  if (document.getElementById("cartItems")) {
    renderCart();
  }

});


 // ========================================
 // TODAY'S PICKS — use existing menu data
 // ========================================

function renderTodaysPicks() {

    var grid = document.getElementById("todayPicksGrid");

    if (!grid) return;

    // Exactly 8 dishes: 4 desserts and 4 pastas
    var picks = [
        ["sweettooth", "Chocolate Layer Cake"],
        ["latavola", "Arrabbiata Pasta"],
        ["pastabella", "Fettuccine Alfredo"],
        ["cocoahouse", "Strawberry Cheesecake"],
        ["pizzaroma", "Espresso Cream Tiramisu"],
        ["pastabella", "Cheese Ravioli"],
        ["sweettooth", "Red Velvet Cake"],
        ["pizzaroma", "Basil Pesto Fusilli"]
    ];

    grid.innerHTML = "";

    picks.forEach(function(pick) {

        var restaurant = restaurants[pick[0]];

        if (!restaurant) return;

        // Find the exact dish in the existing restaurant menu
        var food = restaurant.foods.find(function(item) {
            return item[0] === pick[1];
        });

        if (!food) {
            console.warn("Today's Pick not found:", pick[1]);
            return;
        }

        var category = food[3];
        var label = category;
        var pillClass = "";

        // Display the correct category label
        if (
            food[0].toLowerCase().includes("pasta") ||
            food[0] === "Fettuccine Alfredo" ||
            food[0] === "Cheese Ravioli" ||
            food[0] === "Basil Pesto Fusilli"
        ) {
            label = "Pasta";
            pillClass = "pasta";
        } else if (category === "dessert") {
            label = "Dessert";
            pillClass = "sweet";
        } else if (category === "main") {
            label = "Veg Main";
        }

        var card = document.createElement("div");
        card.className = "card";

        var img = document.createElement("img");
        img.src = food[4];
        img.alt = food[0];

        var body = document.createElement("div");
        body.className = "card-body";

        var pill = document.createElement("span");
        pill.className = "pill " + pillClass;
        pill.textContent = label;

        var heading = document.createElement("h3");
        heading.textContent = food[0];

        var description = document.createElement("p");
        description.textContent = food[1];

        var priceRow = document.createElement("div");
        priceRow.className = "price-row";

        var price = document.createElement("span");
        price.className = "price";
        price.textContent = "₹" + food[2];

        var button = document.createElement("button");
        button.className = "btn small";
        button.textContent = "Add +";

        button.addEventListener("click", function() {
            addToCart(
                food[0],
                food[2],
                food[4],
                restaurant.name
            );
        });

        priceRow.appendChild(price);
        priceRow.appendChild(button);

        body.appendChild(pill);
        body.appendChild(heading);
        body.appendChild(description);
        body.appendChild(priceRow);

        card.appendChild(img);
        card.appendChild(body);

        grid.appendChild(card);

    });

}

document.addEventListener("DOMContentLoaded", renderTodaysPicks);
