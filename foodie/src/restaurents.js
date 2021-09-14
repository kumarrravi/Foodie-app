const restaurentlist =
[
  {
    id : 1,
    name : "Al Baik Fast Food Corner",
    address : "Bara Bazar, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/6/18560756/3ff70f0627385a2462ea4aea282b204c_o2_featured_v2.jpg",
    rating : 3.8,
    costForOne : 100 ,
    description : "Biryani, Kebab, Rolls, Chinese, North Indian, Street Food, Mughlai",
    expectedTime : 44 ,
    itemList :[
    {
      itemId : 1 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 2 ,
      itemName : "Chicken Tikka Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/3e7/f2dbdc8e71d7ef7b4e785d804199f3e7.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4,
      itemDescription : "[6 Pieces] Pieces of Chicken Tikka cooked in a flavoursome Butter gravy"
    },
    {
      itemId : 3 ,
      itemName : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/18c/d8675d579670b07c24c3e1c7f352018c.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210 ,
      itemRating : 4 ,
      itemDescription : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]"
    },
    {
      itemId : 4 ,
      itemName : "Al Baik Special Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/069/9a883322635be84cdfbf156c699b2069.jpg?fit=around|130:130&crop=130:130;*,*" ,
      itemPrice : 195 ,
      itemRating : 3 ,
      itemDescription : "Specially prepared slow-cooked Biryani served with Chicken [1 Piece] + Mutton [1 Piece] + Aloo"
    },
    {
      itemId : 5 ,
      itemName : "Chicken Loaded Biryani",
      itemImg :  "https://b.zmtcdn.com/data/dish_photos/b6f/908a9c2d56a2e341d36df05afbcd5b6f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "[Serves One, Two or Four People] Chicken Tikka Biryani + Chicken Bharta Add your favourite extras and make your favourite loaded Mega Pack!"
    },
    {
      itemId : 6 ,
      itemName : "Chicken Reshmi Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/015/ef4b7b9e641d4664f79953cd42b04015.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210,
      itemRating : 4,
      itemDescription : "[6 Pieces] Chicken Reshmi Kebabs simmered in a creamy Gravy"
    },
    {
      itemId : 7 ,
      itemName : "Special Mutton Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/b1102c45708948f0425e5dc61c491ec9.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 220 ,
      itemRating : 3,
      itemDescription : "Mutton [2 Pieces] + Aloo."
    },
    {
      itemId : 8 ,
      itemName : "Mutton Loaded Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/65b/3a7986c3c212f8263a9b4830cf09a65b.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 250,
      itemRating : 4,
      itemDescription : "[Serves One, Two or Four People] Mutton Biryani + Mutton Bhuna Add your favourite extras and make your own Nega Feast!"
    },
    {
      itemId : 9 ,
      itemName : "Tandoori Chicken Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4 ,
      itemDescription : "Tandoori Chicken simmered in a superbly flavorsome spiced, buttery gravy"
    },
    {
      itemId : 10 ,
      itemName : "Chicken Afghani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/f9e/96aa0f9a480727299df5baf433a5af9e.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 120,
      itemRating : 4 ,
      itemDescription : "Chicken marinated with rich, creamy cashew nut paste, cream, lime juice, cheese & ginger-garlic paste before being cooked to perfection"
    },
    {
      itemId : 11 ,
      itemName : "Chicken Tikka Biryani Party Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/7e4/faa9c9c32b34447f6248ee50b889a7e4.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 389 ,
      itemRating : 2 ,
      itemDescription : "Chicken Tikka Biryani [4 Plates]"
    },
    {
      itemId : 12 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 13,
      itemName : "Chicken Bharta",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 140 ,
      itemRating : 3 ,
      itemDescription : "Shredded chicken and eggwhites cooked in curd based yellow gravy"
    },
    {
      itemId : 14 ,
      itemName : "Chicken Malai Kabab",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/b1f/a550fb0cfd7b663027dbc20f38123b1f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 110 ,
      itemRating : 4 ,
      itemDescription : "Pieces of Chicken heavily marinated with cheese, cream, thick yogurt and special spices."
    },
    {
      itemId : 15 ,
      itemName : "Chilli Chicken [8 Pieces]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/5a3/0f46bd2083c1ab2c3930ca6dc94385a3.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130 ,
      itemRating : 4 ,
      itemDescription : "Succulent Chicken pieces tossed with special Chinese sauces with Veggies"
    }
    ]
  },

  {
    id : 2 ,
    name : "edabba",
    address : "Esplanade, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/8/19137878/db5fcc1f1eeae7500da1bdf2c8707323_o2_featured_v2.jpg",
    rating : 4 ,
    costForOne : 100,
    description : "Chinese, North Indian, Biryani, Desserts, Beverages",
    expectedTime : 39 ,
    itemList :[
    {
      itemId : 1 ,
      itemName : "Mutton Biryani Thali",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/189/8d3dbf0efe872ce4b77a1632ccad6189.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 299 ,
      itemRating : 4 ,
      itemDescription : "The aromatic Mutton Biryani (300g) Thali served with mirchi salan, raita, phirni and salad has a wholesome taste to it."
    },
    {
      itemId : 2 ,
      itemName : "Chilli Chicken Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/0a0/9ce7b65749df1d018f571a8791a550a0.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "Chilli Chicken in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. Chicken prepared in traditional chinese gravy with authentic herbs and spices served with rice/noodles."
    },
    {
      itemId : 3 ,
      itemName : "Awadhi Murg Biryani [1pc Chicken + 1pc Potato]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/f55/1e688b731724ca6f2c726668da2b7f55.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 209 ,
      itemRating : 3,
      itemDescription : "The food of the Nawabs and the aristocratic imperial cuisine, famous Biryani from the city of Lucknow. Aromatic and delicious, flavored with chicken, spices, herbs, nuts, plant extracts and saffron. The rich taste of this Biryani renders you speechles"
    },
    {
      itemId : 4,
      itemName : "Butter Chicken Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/4b2/a5663bfca9b846e9a9933435a605a4b2.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription :"Butter Chicken + Choice of (2) Parathas or (250g) Rice + Salad. The ... read more"
    },
    {
      itemId : 5 ,
      itemName : "Chicken Bharta",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/87e/716a584e018475b4617d7590e2a8d87e.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 219 ,
      itemRating : 4 ,
      itemDescription : "Shredded chicken cooked in mildly spiced gravy, with a sooth, creamy texture."
    },
    {
      itemId : 6 ,
      itemName : "Chicken Bharta & Dal Fry Thali",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/327/0d9515298e84015328e98317f1d17327.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 229 ,
      itemRating : 4 ,
      itemDescription : "Minced Chicken with spices and herbs served with Yellow Dal, Rice (200g), Roti (2) and Salad."
    },
    {
      itemId : 7 ,
      itemName : "Chilli Chicken Thali",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/e94/89aefa5b580181a4dc1b4a527d2bee94.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 219,
      itemRating : 4 ,
      itemDescription : "Chicken in chilly sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
    },
    {
      itemId : 8 ,
      itemName : "Chola Bhatura Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/c8a/31fbaf7ba96dfcdc17155e2973bf3c8a.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 139 ,
      itemRating : 4,
      itemDescription : "Chola + Bhatura (2) + Salad. The perfect fluff of our Bhatura with the classic Chole giving you a desirable bite full of spice and goodness!"
    },
    {
      itemId : 9 ,
      itemName : "Chicken Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/acd/cd7612895167c68d672e1b8cddeb8acd.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 5 ,
      itemDescription : "Pieces of tandoori chicken cooked in smooth rich tomato gravy, finished with dollops of butter."
    },
    {
      itemId : 10 ,
      itemName : "Chicken Kassa Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/fca/376f3a3f4367261e828178e2a7b90fca.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating :4 ,
      itemDescription : "Chicken Kassa + Choice of (2) Parathas or (250g) Rice + Salad. The delightful blend of Chicken served to you with the essentials for your happy meal!"
    },
    {
      itemId : 11 ,
      itemName : "Chilli Paneer Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/705a1f2d1d6b9ec855327cc00544dec9.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice :169 ,
      itemRating : 4 ,
      itemDescription : "Chilli Paneer in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. The tender paneer cooked in chinese gravy with noodles/rice savouring your taste buds with goodness."
    },
    {
      itemId : 12 ,
      itemName : "Chilli Paneer Thali",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ad4/31df82d84dc09583f7393b24076b0ad4.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 189,
      itemRating : 4,
      itemDescription : "Tender paneer in chilli sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
    },
    {
      itemId : 13,
      itemName : "Kashmiri Biryani Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/fb2/244a36557fe2982902f0af04bef4bfb2.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 169 ,
      itemRating :4 ,
      itemDescription : "Kashmiri Biryani (350g) + Raita + Salad. The Northern twist to this traditionally cooked Biryani leaves a wow factor with every bite."
    },
    {
      itemId :14 ,
      itemName : "Chicken Do Pyaza",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/4eb/d67220caacd4f42a3e90cc623a7444eb.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "Marinated chicken chunks cooked in a variety of spices, yogurt and kasoori methi with onion added in two batches. This dish is bursting with aromatic flavours and a beautiful, creamy gravy."
    },
    {
      itemId : 15 ,
      itemName : "Dal Makhani Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/6f0/2ea756df50b8bd75bf980f67ef0296f0.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice :  159 ,
      itemRating : 4 ,
      itemDescription : "Dal Makhani + Choice of (2) Parathas or (250g) Rice + Salad. The classic Dal Makhani with fresh cream to enhance the flavourful blend of spices for you."
    }
    ]
  },

  {
    id : 3,
    name : "Mezban",
    address : "Wellesley, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/chains/6/20826/1974e810ff8449e9c0ee82630036b560_o2_featured_v2.jpg",
    rating : 3.8,
    costForOne : 150 ,
    description : "Biryani, Mughlai, Chinese, North Indian",
    expectedTime : 44 ,
    itemList :[
    {
      itemId : 1 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 2 ,
      itemName : "Chicken Tikka Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/3e7/f2dbdc8e71d7ef7b4e785d804199f3e7.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4,
      itemDescription : "[6 Pieces] Pieces of Chicken Tikka cooked in a flavoursome Butter gravy"
    },
    {
      itemId : 3 ,
      itemName : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/18c/d8675d579670b07c24c3e1c7f352018c.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210 ,
      itemRating : 4 ,
      itemDescription : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]"
    },
    {
      itemId : 4 ,
      itemName : "Al Baik Special Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/069/9a883322635be84cdfbf156c699b2069.jpg?fit=around|130:130&crop=130:130;*,*" ,
      itemPrice : 195 ,
      itemRating : 3 ,
      itemDescription : "Specially prepared slow-cooked Biryani served with Chicken [1 Piece] + Mutton [1 Piece] + Aloo"
    },
    {
      itemId : 5 ,
      itemName : "Chicken Loaded Biryani",
      itemImg :  "https://b.zmtcdn.com/data/dish_photos/b6f/908a9c2d56a2e341d36df05afbcd5b6f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "[Serves One, Two or Four People] Chicken Tikka Biryani + Chicken Bharta Add your favourite extras and make your favourite loaded Mega Pack!"
    },
    {
      itemId : 6 ,
      itemName : "Chicken Reshmi Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/015/ef4b7b9e641d4664f79953cd42b04015.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210,
      itemRating : 4,
      itemDescription : "[6 Pieces] Chicken Reshmi Kebabs simmered in a creamy Gravy"
    },
    {
      itemId : 7 ,
      itemName : "Special Mutton Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/b1102c45708948f0425e5dc61c491ec9.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 220 ,
      itemRating : 3,
      itemDescription : "Mutton [2 Pieces] + Aloo."
    },
    {
      itemId : 8 ,
      itemName : "Mutton Loaded Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/65b/3a7986c3c212f8263a9b4830cf09a65b.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 250,
      itemRating : 4,
      itemDescription : "[Serves One, Two or Four People] Mutton Biryani + Mutton Bhuna Add your favourite extras and make your own Nega Feast!"
    },
    {
      itemId : 9 ,
      itemName : "Tandoori Chicken Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4 ,
      itemDescription : "Tandoori Chicken simmered in a superbly flavorsome spiced, buttery gravy"
    },
    {
      itemId : 10 ,
      itemName : "Chicken Afghani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/f9e/96aa0f9a480727299df5baf433a5af9e.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 120,
      itemRating : 4 ,
      itemDescription : "Chicken marinated with rich, creamy cashew nut paste, cream, lime juice, cheese & ginger-garlic paste before being cooked to perfection"
    },
    {
      itemId : 11 ,
      itemName : "Chicken Tikka Biryani Party Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/7e4/faa9c9c32b34447f6248ee50b889a7e4.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 389 ,
      itemRating : 2 ,
      itemDescription : "Chicken Tikka Biryani [4 Plates]"
    },
    {
      itemId : 12 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 13,
      itemName : "Chicken Bharta",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 140 ,
      itemRating : 3 ,
      itemDescription : "Shredded chicken and eggwhites cooked in curd based yellow gravy"
    },
    {
      itemId : 14 ,
      itemName : "Chicken Malai Kabab",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/b1f/a550fb0cfd7b663027dbc20f38123b1f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 110 ,
      itemRating : 4 ,
      itemDescription : "Pieces of Chicken heavily marinated with cheese, cream, thick yogurt and special spices."
    },
    {
      itemId : 15 ,
      itemName : "Chilli Chicken [8 Pieces]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/5a3/0f46bd2083c1ab2c3930ca6dc94385a3.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130 ,
      itemRating : 4 ,
      itemDescription : "Succulent Chicken pieces tossed with special Chinese sauces with Veggies"
    }
    ]
  },

  {
    id : 4 ,
    name : "New Paul Dhaba Veggie Hub",
    address : "Maniktala, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/5/18217465/abf8822456f764a382fbdb135a2c3672_o2_featured_v2.jpg",
    rating : 4 ,
    costForOne : 200,
    description : "North Indian, Chinese",
    expectedTime : 39 ,
    itemList :[
      {
        itemId : 1 ,
        itemName : "Mutton Biryani Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/189/8d3dbf0efe872ce4b77a1632ccad6189.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 299 ,
        itemRating : 4 ,
        itemDescription : "The aromatic Mutton Biryani (300g) Thali served with mirchi salan, raita, phirni and salad has a wholesome taste to it."
      },
      {
        itemId : 2 ,
        itemName : "Chilli Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/0a0/9ce7b65749df1d018f571a8791a550a0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Chilli Chicken in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. Chicken prepared in traditional chinese gravy with authentic herbs and spices served with rice/noodles."
      },
      {
        itemId : 3 ,
        itemName : "Awadhi Murg Biryani [1pc Chicken + 1pc Potato]",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/f55/1e688b731724ca6f2c726668da2b7f55.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 209 ,
        itemRating : 3,
        itemDescription : "The food of the Nawabs and the aristocratic imperial cuisine, famous Biryani from the city of Lucknow. Aromatic and delicious, flavored with chicken, spices, herbs, nuts, plant extracts and saffron. The rich taste of this Biryani renders you speechles"
      },
      {
        itemId : 4,
        itemName : "Butter Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4b2/a5663bfca9b846e9a9933435a605a4b2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription :"Butter Chicken + Choice of (2) Parathas or (250g) Rice + Salad. The ... read more"
      },
      {
        itemId : 5 ,
        itemName : "Chicken Bharta",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/87e/716a584e018475b4617d7590e2a8d87e.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219 ,
        itemRating : 4 ,
        itemDescription : "Shredded chicken cooked in mildly spiced gravy, with a sooth, creamy texture."
      },
      {
        itemId : 6 ,
        itemName : "Chicken Bharta & Dal Fry Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/327/0d9515298e84015328e98317f1d17327.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 229 ,
        itemRating : 4 ,
        itemDescription : "Minced Chicken with spices and herbs served with Yellow Dal, Rice (200g), Roti (2) and Salad."
      },
      {
        itemId : 7 ,
        itemName : "Chilli Chicken Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/e94/89aefa5b580181a4dc1b4a527d2bee94.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219,
        itemRating : 4 ,
        itemDescription : "Chicken in chilly sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 8 ,
        itemName : "Chola Bhatura Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/c8a/31fbaf7ba96dfcdc17155e2973bf3c8a.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 139 ,
        itemRating : 4,
        itemDescription : "Chola + Bhatura (2) + Salad. The perfect fluff of our Bhatura with the classic Chole giving you a desirable bite full of spice and goodness!"
      },
      {
        itemId : 9 ,
        itemName : "Chicken Butter Masala",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/acd/cd7612895167c68d672e1b8cddeb8acd.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 5 ,
        itemDescription : "Pieces of tandoori chicken cooked in smooth rich tomato gravy, finished with dollops of butter."
      },
      {
        itemId : 10 ,
        itemName : "Chicken Kassa Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fca/376f3a3f4367261e828178e2a7b90fca.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating :4 ,
        itemDescription : "Chicken Kassa + Choice of (2) Parathas or (250g) Rice + Salad. The delightful blend of Chicken served to you with the essentials for your happy meal!"
      },
      {
        itemId : 11 ,
        itemName : "Chilli Paneer Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/705a1f2d1d6b9ec855327cc00544dec9.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :169 ,
        itemRating : 4 ,
        itemDescription : "Chilli Paneer in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. The tender paneer cooked in chinese gravy with noodles/rice savouring your taste buds with goodness."
      },
      {
        itemId : 12 ,
        itemName : "Chilli Paneer Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ad4/31df82d84dc09583f7393b24076b0ad4.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 189,
        itemRating : 4,
        itemDescription : "Tender paneer in chilli sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 13,
        itemName : "Kashmiri Biryani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fb2/244a36557fe2982902f0af04bef4bfb2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 169 ,
        itemRating :4 ,
        itemDescription : "Kashmiri Biryani (350g) + Raita + Salad. The Northern twist to this traditionally cooked Biryani leaves a wow factor with every bite."
      },
      {
        itemId :14 ,
        itemName : "Chicken Do Pyaza",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4eb/d67220caacd4f42a3e90cc623a7444eb.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Marinated chicken chunks cooked in a variety of spices, yogurt and kasoori methi with onion added in two batches. This dish is bursting with aromatic flavours and a beautiful, creamy gravy."
      },
      {
        itemId : 15 ,
        itemName : "Dal Makhani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/6f0/2ea756df50b8bd75bf980f67ef0296f0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :  159 ,
        itemRating : 4 ,
        itemDescription : "Dal Makhani + Choice of (2) Parathas or (250g) Rice + Salad. The classic Dal Makhani with fresh cream to enhance the flavourful blend of spices for you."
      }
    ]
  },

  {
    id : 5,
    name : "Chowman",
    address : "Hatibagan, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/chains/5/21495/b41a43be04485f3bc94e9125c94be88f_o2_featured_v2.jpg",
    rating : 3.8,
    costForOne : 150 ,
    description : "Biryani, Kebab, Rolls, Chinese, North Indian, Street Food, Mughlai",
    expectedTime : 44 ,
    itemList :[
    {
      itemId : 1 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 2 ,
      itemName : "Chicken Tikka Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/3e7/f2dbdc8e71d7ef7b4e785d804199f3e7.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4,
      itemDescription : "[6 Pieces] Pieces of Chicken Tikka cooked in a flavoursome Butter gravy"
    },
    {
      itemId : 3 ,
      itemName : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/18c/d8675d579670b07c24c3e1c7f352018c.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210 ,
      itemRating : 4 ,
      itemDescription : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]"
    },
    {
      itemId : 4 ,
      itemName : "Al Baik Special Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/069/9a883322635be84cdfbf156c699b2069.jpg?fit=around|130:130&crop=130:130;*,*" ,
      itemPrice : 195 ,
      itemRating : 3 ,
      itemDescription : "Specially prepared slow-cooked Biryani served with Chicken [1 Piece] + Mutton [1 Piece] + Aloo"
    },
    {
      itemId : 5 ,
      itemName : "Chicken Loaded Biryani",
      itemImg :  "https://b.zmtcdn.com/data/dish_photos/b6f/908a9c2d56a2e341d36df05afbcd5b6f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "[Serves One, Two or Four People] Chicken Tikka Biryani + Chicken Bharta Add your favourite extras and make your favourite loaded Mega Pack!"
    },
    {
      itemId : 6 ,
      itemName : "Chicken Reshmi Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/015/ef4b7b9e641d4664f79953cd42b04015.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210,
      itemRating : 4,
      itemDescription : "[6 Pieces] Chicken Reshmi Kebabs simmered in a creamy Gravy"
    },
    {
      itemId : 7 ,
      itemName : "Special Mutton Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/b1102c45708948f0425e5dc61c491ec9.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 220 ,
      itemRating : 3,
      itemDescription : "Mutton [2 Pieces] + Aloo."
    },
    {
      itemId : 8 ,
      itemName : "Mutton Loaded Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/65b/3a7986c3c212f8263a9b4830cf09a65b.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 250,
      itemRating : 4,
      itemDescription : "[Serves One, Two or Four People] Mutton Biryani + Mutton Bhuna Add your favourite extras and make your own Nega Feast!"
    },
    {
      itemId : 9 ,
      itemName : "Tandoori Chicken Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4 ,
      itemDescription : "Tandoori Chicken simmered in a superbly flavorsome spiced, buttery gravy"
    },
    {
      itemId : 10 ,
      itemName : "Chicken Afghani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/f9e/96aa0f9a480727299df5baf433a5af9e.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 120,
      itemRating : 4 ,
      itemDescription : "Chicken marinated with rich, creamy cashew nut paste, cream, lime juice, cheese & ginger-garlic paste before being cooked to perfection"
    },
    {
      itemId : 11 ,
      itemName : "Chicken Tikka Biryani Party Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/7e4/faa9c9c32b34447f6248ee50b889a7e4.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 389 ,
      itemRating : 2 ,
      itemDescription : "Chicken Tikka Biryani [4 Plates]"
    },
    {
      itemId : 12 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 13,
      itemName : "Chicken Bharta",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 140 ,
      itemRating : 3 ,
      itemDescription : "Shredded chicken and eggwhites cooked in curd based yellow gravy"
    },
    {
      itemId : 14 ,
      itemName : "Chicken Malai Kabab",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/b1f/a550fb0cfd7b663027dbc20f38123b1f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 110 ,
      itemRating : 4 ,
      itemDescription : "Pieces of Chicken heavily marinated with cheese, cream, thick yogurt and special spices."
    },
    {
      itemId : 15 ,
      itemName : "Chilli Chicken [8 Pieces]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/5a3/0f46bd2083c1ab2c3930ca6dc94385a3.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130 ,
      itemRating : 4 ,
      itemDescription : "Succulent Chicken pieces tossed with special Chinese sauces with Veggies"
    }
    ]
  },

  {
    id : 6 ,
    name : "Red Chillies",
    address : "Sealdah Area, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/6/18597456/70c2515bbd7f5c448b79dfeddd38c511_o2_featured_v2.jpg",
    rating : 4 ,
    costForOne : 100,
    description : "Chinese, North Indian, Biryani, Desserts, Beverages",
    expectedTime : 39 ,
    itemList :[
      {
        itemId : 1 ,
        itemName : "Mutton Biryani Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/189/8d3dbf0efe872ce4b77a1632ccad6189.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 299 ,
        itemRating : 4 ,
        itemDescription : "The aromatic Mutton Biryani (300g) Thali served with mirchi salan, raita, phirni and salad has a wholesome taste to it."
      },
      {
        itemId : 2 ,
        itemName : "Chilli Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/0a0/9ce7b65749df1d018f571a8791a550a0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Chilli Chicken in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. Chicken prepared in traditional chinese gravy with authentic herbs and spices served with rice/noodles."
      },
      {
        itemId : 3 ,
        itemName : "Awadhi Murg Biryani [1pc Chicken + 1pc Potato]",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/f55/1e688b731724ca6f2c726668da2b7f55.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 209 ,
        itemRating : 3,
        itemDescription : "The food of the Nawabs and the aristocratic imperial cuisine, famous Biryani from the city of Lucknow. Aromatic and delicious, flavored with chicken, spices, herbs, nuts, plant extracts and saffron. The rich taste of this Biryani renders you speechles"
      },
      {
        itemId : 4,
        itemName : "Butter Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4b2/a5663bfca9b846e9a9933435a605a4b2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription :"Butter Chicken + Choice of (2) Parathas or (250g) Rice + Salad. The ... read more"
      },
      {
        itemId : 5 ,
        itemName : "Chicken Bharta",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/87e/716a584e018475b4617d7590e2a8d87e.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219 ,
        itemRating : 4 ,
        itemDescription : "Shredded chicken cooked in mildly spiced gravy, with a sooth, creamy texture."
      },
      {
        itemId : 6 ,
        itemName : "Chicken Bharta & Dal Fry Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/327/0d9515298e84015328e98317f1d17327.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 229 ,
        itemRating : 4 ,
        itemDescription : "Minced Chicken with spices and herbs served with Yellow Dal, Rice (200g), Roti (2) and Salad."
      },
      {
        itemId : 7 ,
        itemName : "Chilli Chicken Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/e94/89aefa5b580181a4dc1b4a527d2bee94.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219,
        itemRating : 4 ,
        itemDescription : "Chicken in chilly sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 8 ,
        itemName : "Chola Bhatura Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/c8a/31fbaf7ba96dfcdc17155e2973bf3c8a.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 139 ,
        itemRating : 4,
        itemDescription : "Chola + Bhatura (2) + Salad. The perfect fluff of our Bhatura with the classic Chole giving you a desirable bite full of spice and goodness!"
      },
      {
        itemId : 9 ,
        itemName : "Chicken Butter Masala",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/acd/cd7612895167c68d672e1b8cddeb8acd.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 5 ,
        itemDescription : "Pieces of tandoori chicken cooked in smooth rich tomato gravy, finished with dollops of butter."
      },
      {
        itemId : 10 ,
        itemName : "Chicken Kassa Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fca/376f3a3f4367261e828178e2a7b90fca.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating :4 ,
        itemDescription : "Chicken Kassa + Choice of (2) Parathas or (250g) Rice + Salad. The delightful blend of Chicken served to you with the essentials for your happy meal!"
      },
      {
        itemId : 11 ,
        itemName : "Chilli Paneer Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/705a1f2d1d6b9ec855327cc00544dec9.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :169 ,
        itemRating : 4 ,
        itemDescription : "Chilli Paneer in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. The tender paneer cooked in chinese gravy with noodles/rice savouring your taste buds with goodness."
      },
      {
        itemId : 12 ,
        itemName : "Chilli Paneer Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ad4/31df82d84dc09583f7393b24076b0ad4.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 189,
        itemRating : 4,
        itemDescription : "Tender paneer in chilli sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 13,
        itemName : "Kashmiri Biryani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fb2/244a36557fe2982902f0af04bef4bfb2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 169 ,
        itemRating :4 ,
        itemDescription : "Kashmiri Biryani (350g) + Raita + Salad. The Northern twist to this traditionally cooked Biryani leaves a wow factor with every bite."
      },
      {
        itemId :14 ,
        itemName : "Chicken Do Pyaza",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4eb/d67220caacd4f42a3e90cc623a7444eb.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Marinated chicken chunks cooked in a variety of spices, yogurt and kasoori methi with onion added in two batches. This dish is bursting with aromatic flavours and a beautiful, creamy gravy."
      },
      {
        itemId : 15 ,
        itemName : "Dal Makhani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/6f0/2ea756df50b8bd75bf980f67ef0296f0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :  159 ,
        itemRating : 4 ,
        itemDescription : "Dal Makhani + Choice of (2) Parathas or (250g) Rice + Salad. The classic Dal Makhani with fresh cream to enhance the flavourful blend of spices for you."
      }
    ]
  },

  {
    id : 7,
    name : "Gupta Brothers",
    address : "Bara Bazar, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/chains/3/20723/a6c42cc3212d88f9b8741d4162efd197_o2_featured_v2.jpg",
    rating : 3.8,
    costForOne : 150 ,
    description : "Biryani, Kebab, Rolls, Chinese, North Indian, Street Food, Mughlai",
    expectedTime : 44 ,
    itemList :[
    {
      itemId : 1 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 2 ,
      itemName : "Chicken Tikka Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/3e7/f2dbdc8e71d7ef7b4e785d804199f3e7.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4,
      itemDescription : "[6 Pieces] Pieces of Chicken Tikka cooked in a flavoursome Butter gravy"
    },
    {
      itemId : 3 ,
      itemName : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/18c/d8675d579670b07c24c3e1c7f352018c.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210 ,
      itemRating : 4 ,
      itemDescription : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]"
    },
    {
      itemId : 4 ,
      itemName : "Al Baik Special Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/069/9a883322635be84cdfbf156c699b2069.jpg?fit=around|130:130&crop=130:130;*,*" ,
      itemPrice : 195 ,
      itemRating : 3 ,
      itemDescription : "Specially prepared slow-cooked Biryani served with Chicken [1 Piece] + Mutton [1 Piece] + Aloo"
    },
    {
      itemId : 5 ,
      itemName : "Chicken Loaded Biryani",
      itemImg :  "https://b.zmtcdn.com/data/dish_photos/b6f/908a9c2d56a2e341d36df05afbcd5b6f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "[Serves One, Two or Four People] Chicken Tikka Biryani + Chicken Bharta Add your favourite extras and make your favourite loaded Mega Pack!"
    },
    {
      itemId : 6 ,
      itemName : "Chicken Reshmi Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/015/ef4b7b9e641d4664f79953cd42b04015.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210,
      itemRating : 4,
      itemDescription : "[6 Pieces] Chicken Reshmi Kebabs simmered in a creamy Gravy"
    },
    {
      itemId : 7 ,
      itemName : "Special Mutton Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/b1102c45708948f0425e5dc61c491ec9.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 220 ,
      itemRating : 3,
      itemDescription : "Mutton [2 Pieces] + Aloo."
    },
    {
      itemId : 8 ,
      itemName : "Mutton Loaded Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/65b/3a7986c3c212f8263a9b4830cf09a65b.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 250,
      itemRating : 4,
      itemDescription : "[Serves One, Two or Four People] Mutton Biryani + Mutton Bhuna Add your favourite extras and make your own Nega Feast!"
    },
    {
      itemId : 9 ,
      itemName : "Tandoori Chicken Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4 ,
      itemDescription : "Tandoori Chicken simmered in a superbly flavorsome spiced, buttery gravy"
    },
    {
      itemId : 10 ,
      itemName : "Chicken Afghani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/f9e/96aa0f9a480727299df5baf433a5af9e.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 120,
      itemRating : 4 ,
      itemDescription : "Chicken marinated with rich, creamy cashew nut paste, cream, lime juice, cheese & ginger-garlic paste before being cooked to perfection"
    },
    {
      itemId : 11 ,
      itemName : "Chicken Tikka Biryani Party Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/7e4/faa9c9c32b34447f6248ee50b889a7e4.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 389 ,
      itemRating : 2 ,
      itemDescription : "Chicken Tikka Biryani [4 Plates]"
    },
    {
      itemId : 12 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 13,
      itemName : "Chicken Bharta",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 140 ,
      itemRating : 3 ,
      itemDescription : "Shredded chicken and eggwhites cooked in curd based yellow gravy"
    },
    {
      itemId : 14 ,
      itemName : "Chicken Malai Kabab",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/b1f/a550fb0cfd7b663027dbc20f38123b1f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 110 ,
      itemRating : 4 ,
      itemDescription : "Pieces of Chicken heavily marinated with cheese, cream, thick yogurt and special spices."
    },
    {
      itemId : 15 ,
      itemName : "Chilli Chicken [8 Pieces]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/5a3/0f46bd2083c1ab2c3930ca6dc94385a3.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130 ,
      itemRating : 4 ,
      itemDescription : "Succulent Chicken pieces tossed with special Chinese sauces with Veggies"
    }
    ]
  },

  {
    id : 8 ,
    name : "Royal Indian Hotel",
    address : "Bara Bazar, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/1/21411/a8dccd7ee206758d4071701269e77edd_o2_featured_v2.jpg",
    rating : 4 ,
    costForOne : 100,
    description : "Chinese, North Indian, Biryani, Desserts, Beverages",
    expectedTime : 39 ,
    itemList :[
      {
        itemId : 1 ,
        itemName : "Mutton Biryani Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/189/8d3dbf0efe872ce4b77a1632ccad6189.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 299 ,
        itemRating : 4 ,
        itemDescription : "The aromatic Mutton Biryani (300g) Thali served with mirchi salan, raita, phirni and salad has a wholesome taste to it."
      },
      {
        itemId : 2 ,
        itemName : "Chilli Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/0a0/9ce7b65749df1d018f571a8791a550a0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Chilli Chicken in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. Chicken prepared in traditional chinese gravy with authentic herbs and spices served with rice/noodles."
      },
      {
        itemId : 3 ,
        itemName : "Awadhi Murg Biryani [1pc Chicken + 1pc Potato]",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/f55/1e688b731724ca6f2c726668da2b7f55.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 209 ,
        itemRating : 3,
        itemDescription : "The food of the Nawabs and the aristocratic imperial cuisine, famous Biryani from the city of Lucknow. Aromatic and delicious, flavored with chicken, spices, herbs, nuts, plant extracts and saffron. The rich taste of this Biryani renders you speechles"
      },
      {
        itemId : 4,
        itemName : "Butter Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4b2/a5663bfca9b846e9a9933435a605a4b2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription :"Butter Chicken + Choice of (2) Parathas or (250g) Rice + Salad. The ... read more"
      },
      {
        itemId : 5 ,
        itemName : "Chicken Bharta",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/87e/716a584e018475b4617d7590e2a8d87e.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219 ,
        itemRating : 4 ,
        itemDescription : "Shredded chicken cooked in mildly spiced gravy, with a sooth, creamy texture."
      },
      {
        itemId : 6 ,
        itemName : "Chicken Bharta & Dal Fry Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/327/0d9515298e84015328e98317f1d17327.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 229 ,
        itemRating : 4 ,
        itemDescription : "Minced Chicken with spices and herbs served with Yellow Dal, Rice (200g), Roti (2) and Salad."
      },
      {
        itemId : 7 ,
        itemName : "Chilli Chicken Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/e94/89aefa5b580181a4dc1b4a527d2bee94.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219,
        itemRating : 4 ,
        itemDescription : "Chicken in chilly sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 8 ,
        itemName : "Chola Bhatura Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/c8a/31fbaf7ba96dfcdc17155e2973bf3c8a.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 139 ,
        itemRating : 4,
        itemDescription : "Chola + Bhatura (2) + Salad. The perfect fluff of our Bhatura with the classic Chole giving you a desirable bite full of spice and goodness!"
      },
      {
        itemId : 9 ,
        itemName : "Chicken Butter Masala",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/acd/cd7612895167c68d672e1b8cddeb8acd.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 5 ,
        itemDescription : "Pieces of tandoori chicken cooked in smooth rich tomato gravy, finished with dollops of butter."
      },
      {
        itemId : 10 ,
        itemName : "Chicken Kassa Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fca/376f3a3f4367261e828178e2a7b90fca.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating :4 ,
        itemDescription : "Chicken Kassa + Choice of (2) Parathas or (250g) Rice + Salad. The delightful blend of Chicken served to you with the essentials for your happy meal!"
      },
      {
        itemId : 11 ,
        itemName : "Chilli Paneer Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/705a1f2d1d6b9ec855327cc00544dec9.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :169 ,
        itemRating : 4 ,
        itemDescription : "Chilli Paneer in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. The tender paneer cooked in chinese gravy with noodles/rice savouring your taste buds with goodness."
      },
      {
        itemId : 12 ,
        itemName : "Chilli Paneer Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ad4/31df82d84dc09583f7393b24076b0ad4.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 189,
        itemRating : 4,
        itemDescription : "Tender paneer in chilli sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 13,
        itemName : "Kashmiri Biryani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fb2/244a36557fe2982902f0af04bef4bfb2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 169 ,
        itemRating :4 ,
        itemDescription : "Kashmiri Biryani (350g) + Raita + Salad. The Northern twist to this traditionally cooked Biryani leaves a wow factor with every bite."
      },
      {
        itemId :14 ,
        itemName : "Chicken Do Pyaza",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4eb/d67220caacd4f42a3e90cc623a7444eb.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Marinated chicken chunks cooked in a variety of spices, yogurt and kasoori methi with onion added in two batches. This dish is bursting with aromatic flavours and a beautiful, creamy gravy."
      },
      {
        itemId : 15 ,
        itemName : "Dal Makhani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/6f0/2ea756df50b8bd75bf980f67ef0296f0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :  159 ,
        itemRating : 4 ,
        itemDescription : "Dal Makhani + Choice of (2) Parathas or (250g) Rice + Salad. The classic Dal Makhani with fresh cream to enhance the flavourful blend of spices for you."
      }
    ]
  },

  {
    id : 9,
    name : "Ebowl",
    address : "Esplanade, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/chains/1/19560041/a2505ffd5920d1809a0a666d2b5d19e7_o2_featured_v2.jpg",
    rating : 4.0,
    costForOne : 200 ,
    description : "Biryani, Kebab, Rolls, Chinese, North Indian, Street Food, Mughlai",
    expectedTime : 44 ,
    itemList :[
    {
      itemId : 1 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 2 ,
      itemName : "Chicken Tikka Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/3e7/f2dbdc8e71d7ef7b4e785d804199f3e7.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4,
      itemDescription : "[6 Pieces] Pieces of Chicken Tikka cooked in a flavoursome Butter gravy"
    },
    {
      itemId : 3 ,
      itemName : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/18c/d8675d579670b07c24c3e1c7f352018c.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210 ,
      itemRating : 4 ,
      itemDescription : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]"
    },
    {
      itemId : 4 ,
      itemName : "Al Baik Special Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/069/9a883322635be84cdfbf156c699b2069.jpg?fit=around|130:130&crop=130:130;*,*" ,
      itemPrice : 195 ,
      itemRating : 3 ,
      itemDescription : "Specially prepared slow-cooked Biryani served with Chicken [1 Piece] + Mutton [1 Piece] + Aloo"
    },
    {
      itemId : 5 ,
      itemName : "Chicken Loaded Biryani",
      itemImg :  "https://b.zmtcdn.com/data/dish_photos/b6f/908a9c2d56a2e341d36df05afbcd5b6f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "[Serves One, Two or Four People] Chicken Tikka Biryani + Chicken Bharta Add your favourite extras and make your favourite loaded Mega Pack!"
    },
    {
      itemId : 6 ,
      itemName : "Chicken Reshmi Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/015/ef4b7b9e641d4664f79953cd42b04015.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210,
      itemRating : 4,
      itemDescription : "[6 Pieces] Chicken Reshmi Kebabs simmered in a creamy Gravy"
    },
    {
      itemId : 7 ,
      itemName : "Special Mutton Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/b1102c45708948f0425e5dc61c491ec9.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 220 ,
      itemRating : 3,
      itemDescription : "Mutton [2 Pieces] + Aloo."
    },
    {
      itemId : 8 ,
      itemName : "Mutton Loaded Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/65b/3a7986c3c212f8263a9b4830cf09a65b.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 250,
      itemRating : 4,
      itemDescription : "[Serves One, Two or Four People] Mutton Biryani + Mutton Bhuna Add your favourite extras and make your own Nega Feast!"
    },
    {
      itemId : 9 ,
      itemName : "Tandoori Chicken Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4 ,
      itemDescription : "Tandoori Chicken simmered in a superbly flavorsome spiced, buttery gravy"
    },
    {
      itemId : 10 ,
      itemName : "Chicken Afghani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/f9e/96aa0f9a480727299df5baf433a5af9e.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 120,
      itemRating : 4 ,
      itemDescription : "Chicken marinated with rich, creamy cashew nut paste, cream, lime juice, cheese & ginger-garlic paste before being cooked to perfection"
    },
    {
      itemId : 11 ,
      itemName : "Chicken Tikka Biryani Party Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/7e4/faa9c9c32b34447f6248ee50b889a7e4.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 389 ,
      itemRating : 2 ,
      itemDescription : "Chicken Tikka Biryani [4 Plates]"
    },
    {
      itemId : 12 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 13,
      itemName : "Chicken Bharta",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 140 ,
      itemRating : 3 ,
      itemDescription : "Shredded chicken and eggwhites cooked in curd based yellow gravy"
    },
    {
      itemId : 14 ,
      itemName : "Chicken Malai Kabab",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/b1f/a550fb0cfd7b663027dbc20f38123b1f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 110 ,
      itemRating : 4 ,
      itemDescription : "Pieces of Chicken heavily marinated with cheese, cream, thick yogurt and special spices."
    },
    {
      itemId : 15 ,
      itemName : "Chilli Chicken [8 Pieces]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/5a3/0f46bd2083c1ab2c3930ca6dc94385a3.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130 ,
      itemRating : 4 ,
      itemDescription : "Succulent Chicken pieces tossed with special Chinese sauces with Veggies"
    }
    ]
  },

  {
    id : 10 ,
    name : "Arsalan",
    address : "Park Street Area, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/chains/7/20797/7c440b99b4140cce88505e64bb690b0f_o2_featured_v2.jpg",
    rating : 4 ,
    costForOne : 100,
    description : "Chinese, North Indian, Biryani, Desserts, Beverages",
    expectedTime : 39 ,
    itemList :[
      {
        itemId : 1 ,
        itemName : "Mutton Biryani Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/189/8d3dbf0efe872ce4b77a1632ccad6189.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 299 ,
        itemRating : 4 ,
        itemDescription : "The aromatic Mutton Biryani (300g) Thali served with mirchi salan, raita, phirni and salad has a wholesome taste to it."
      },
      {
        itemId : 2 ,
        itemName : "Chilli Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/0a0/9ce7b65749df1d018f571a8791a550a0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Chilli Chicken in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. Chicken prepared in traditional chinese gravy with authentic herbs and spices served with rice/noodles."
      },
      {
        itemId : 3 ,
        itemName : "Awadhi Murg Biryani [1pc Chicken + 1pc Potato]",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/f55/1e688b731724ca6f2c726668da2b7f55.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 209 ,
        itemRating : 3,
        itemDescription : "The food of the Nawabs and the aristocratic imperial cuisine, famous Biryani from the city of Lucknow. Aromatic and delicious, flavored with chicken, spices, herbs, nuts, plant extracts and saffron. The rich taste of this Biryani renders you speechles"
      },
      {
        itemId : 4,
        itemName : "Butter Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4b2/a5663bfca9b846e9a9933435a605a4b2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription :"Butter Chicken + Choice of (2) Parathas or (250g) Rice + Salad. The ... read more"
      },
      {
        itemId : 5 ,
        itemName : "Chicken Bharta",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/87e/716a584e018475b4617d7590e2a8d87e.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219 ,
        itemRating : 4 ,
        itemDescription : "Shredded chicken cooked in mildly spiced gravy, with a sooth, creamy texture."
      },
      {
        itemId : 6 ,
        itemName : "Chicken Bharta & Dal Fry Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/327/0d9515298e84015328e98317f1d17327.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 229 ,
        itemRating : 4 ,
        itemDescription : "Minced Chicken with spices and herbs served with Yellow Dal, Rice (200g), Roti (2) and Salad."
      },
      {
        itemId : 7 ,
        itemName : "Chilli Chicken Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/e94/89aefa5b580181a4dc1b4a527d2bee94.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219,
        itemRating : 4 ,
        itemDescription : "Chicken in chilly sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 8 ,
        itemName : "Chola Bhatura Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/c8a/31fbaf7ba96dfcdc17155e2973bf3c8a.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 139 ,
        itemRating : 4,
        itemDescription : "Chola + Bhatura (2) + Salad. The perfect fluff of our Bhatura with the classic Chole giving you a desirable bite full of spice and goodness!"
      },
      {
        itemId : 9 ,
        itemName : "Chicken Butter Masala",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/acd/cd7612895167c68d672e1b8cddeb8acd.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 5 ,
        itemDescription : "Pieces of tandoori chicken cooked in smooth rich tomato gravy, finished with dollops of butter."
      },
      {
        itemId : 10 ,
        itemName : "Chicken Kassa Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fca/376f3a3f4367261e828178e2a7b90fca.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating :4 ,
        itemDescription : "Chicken Kassa + Choice of (2) Parathas or (250g) Rice + Salad. The delightful blend of Chicken served to you with the essentials for your happy meal!"
      },
      {
        itemId : 11 ,
        itemName : "Chilli Paneer Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/705a1f2d1d6b9ec855327cc00544dec9.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :169 ,
        itemRating : 4 ,
        itemDescription : "Chilli Paneer in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. The tender paneer cooked in chinese gravy with noodles/rice savouring your taste buds with goodness."
      },
      {
        itemId : 12 ,
        itemName : "Chilli Paneer Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ad4/31df82d84dc09583f7393b24076b0ad4.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 189,
        itemRating : 4,
        itemDescription : "Tender paneer in chilli sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 13,
        itemName : "Kashmiri Biryani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fb2/244a36557fe2982902f0af04bef4bfb2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 169 ,
        itemRating :4 ,
        itemDescription : "Kashmiri Biryani (350g) + Raita + Salad. The Northern twist to this traditionally cooked Biryani leaves a wow factor with every bite."
      },
      {
        itemId :14 ,
        itemName : "Chicken Do Pyaza",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4eb/d67220caacd4f42a3e90cc623a7444eb.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Marinated chicken chunks cooked in a variety of spices, yogurt and kasoori methi with onion added in two batches. This dish is bursting with aromatic flavours and a beautiful, creamy gravy."
      },
      {
        itemId : 15 ,
        itemName : "Dal Makhani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/6f0/2ea756df50b8bd75bf980f67ef0296f0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :  159 ,
        itemRating : 4 ,
        itemDescription : "Dal Makhani + Choice of (2) Parathas or (250g) Rice + Salad. The classic Dal Makhani with fresh cream to enhance the flavourful blend of spices for you."
      }
    ]
  },

  {
    id : 11,
    name : "Bindass Food Plaza",
    address : "College Street, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/0/19169450/c0a650f33504e08d84d573009e91bf16_o2_featured_v2.jpeg",
    rating : 3.8,
    costForOne : 150 ,
    description : "Biryani, Kebab, Rolls, Chinese, North Indian, Street Food, Mughlai",
    expectedTime : 44 ,
    itemList :[
    {
      itemId : 1 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 2 ,
      itemName : "Chicken Tikka Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/3e7/f2dbdc8e71d7ef7b4e785d804199f3e7.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4,
      itemDescription : "[6 Pieces] Pieces of Chicken Tikka cooked in a flavoursome Butter gravy"
    },
    {
      itemId : 3 ,
      itemName : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/18c/d8675d579670b07c24c3e1c7f352018c.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210 ,
      itemRating : 4 ,
      itemDescription : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]"
    },
    {
      itemId : 4 ,
      itemName : "Al Baik Special Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/069/9a883322635be84cdfbf156c699b2069.jpg?fit=around|130:130&crop=130:130;*,*" ,
      itemPrice : 195 ,
      itemRating : 3 ,
      itemDescription : "Specially prepared slow-cooked Biryani served with Chicken [1 Piece] + Mutton [1 Piece] + Aloo"
    },
    {
      itemId : 5 ,
      itemName : "Chicken Loaded Biryani",
      itemImg :  "https://b.zmtcdn.com/data/dish_photos/b6f/908a9c2d56a2e341d36df05afbcd5b6f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "[Serves One, Two or Four People] Chicken Tikka Biryani + Chicken Bharta Add your favourite extras and make your favourite loaded Mega Pack!"
    },
    {
      itemId : 6 ,
      itemName : "Chicken Reshmi Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/015/ef4b7b9e641d4664f79953cd42b04015.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210,
      itemRating : 4,
      itemDescription : "[6 Pieces] Chicken Reshmi Kebabs simmered in a creamy Gravy"
    },
    {
      itemId : 7 ,
      itemName : "Special Mutton Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/b1102c45708948f0425e5dc61c491ec9.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 220 ,
      itemRating : 3,
      itemDescription : "Mutton [2 Pieces] + Aloo."
    },
    {
      itemId : 8 ,
      itemName : "Mutton Loaded Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/65b/3a7986c3c212f8263a9b4830cf09a65b.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 250,
      itemRating : 4,
      itemDescription : "[Serves One, Two or Four People] Mutton Biryani + Mutton Bhuna Add your favourite extras and make your own Nega Feast!"
    },
    {
      itemId : 9 ,
      itemName : "Tandoori Chicken Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4 ,
      itemDescription : "Tandoori Chicken simmered in a superbly flavorsome spiced, buttery gravy"
    },
    {
      itemId : 10 ,
      itemName : "Chicken Afghani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/f9e/96aa0f9a480727299df5baf433a5af9e.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 120,
      itemRating : 4 ,
      itemDescription : "Chicken marinated with rich, creamy cashew nut paste, cream, lime juice, cheese & ginger-garlic paste before being cooked to perfection"
    },
    {
      itemId : 11 ,
      itemName : "Chicken Tikka Biryani Party Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/7e4/faa9c9c32b34447f6248ee50b889a7e4.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 389 ,
      itemRating : 2 ,
      itemDescription : "Chicken Tikka Biryani [4 Plates]"
    },
    {
      itemId : 12 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 13,
      itemName : "Chicken Bharta",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 140 ,
      itemRating : 3 ,
      itemDescription : "Shredded chicken and eggwhites cooked in curd based yellow gravy"
    },
    {
      itemId : 14 ,
      itemName : "Chicken Malai Kabab",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/b1f/a550fb0cfd7b663027dbc20f38123b1f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 110 ,
      itemRating : 4 ,
      itemDescription : "Pieces of Chicken heavily marinated with cheese, cream, thick yogurt and special spices."
    },
    {
      itemId : 15 ,
      itemName : "Chilli Chicken [8 Pieces]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/5a3/0f46bd2083c1ab2c3930ca6dc94385a3.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130 ,
      itemRating : 4 ,
      itemDescription : "Succulent Chicken pieces tossed with special Chinese sauces with Veggies"
    }
    ]
  },

  {
    id : 12 ,
    name : "The Chicken House",
    address : "Entally, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/chains/9/18573069/67789d9017e7bc396cc340736e936701_o2_featured_v2.jpg",
    rating : 4 ,
    costForOne : 200,
    description : "Chinese, North Indian, Biryani, Desserts, Beverages",
    expectedTime : 39 ,
    itemList :[
      {
        itemId : 1 ,
        itemName : "Mutton Biryani Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/189/8d3dbf0efe872ce4b77a1632ccad6189.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 299 ,
        itemRating : 4 ,
        itemDescription : "The aromatic Mutton Biryani (300g) Thali served with mirchi salan, raita, phirni and salad has a wholesome taste to it."
      },
      {
        itemId : 2 ,
        itemName : "Chilli Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/0a0/9ce7b65749df1d018f571a8791a550a0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Chilli Chicken in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. Chicken prepared in traditional chinese gravy with authentic herbs and spices served with rice/noodles."
      },
      {
        itemId : 3 ,
        itemName : "Awadhi Murg Biryani [1pc Chicken + 1pc Potato]",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/f55/1e688b731724ca6f2c726668da2b7f55.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 209 ,
        itemRating : 3,
        itemDescription : "The food of the Nawabs and the aristocratic imperial cuisine, famous Biryani from the city of Lucknow. Aromatic and delicious, flavored with chicken, spices, herbs, nuts, plant extracts and saffron. The rich taste of this Biryani renders you speechles"
      },
      {
        itemId : 4,
        itemName : "Butter Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4b2/a5663bfca9b846e9a9933435a605a4b2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription :"Butter Chicken + Choice of (2) Parathas or (250g) Rice + Salad. The ... read more"
      },
      {
        itemId : 5 ,
        itemName : "Chicken Bharta",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/87e/716a584e018475b4617d7590e2a8d87e.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219 ,
        itemRating : 4 ,
        itemDescription : "Shredded chicken cooked in mildly spiced gravy, with a sooth, creamy texture."
      },
      {
        itemId : 6 ,
        itemName : "Chicken Bharta & Dal Fry Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/327/0d9515298e84015328e98317f1d17327.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 229 ,
        itemRating : 4 ,
        itemDescription : "Minced Chicken with spices and herbs served with Yellow Dal, Rice (200g), Roti (2) and Salad."
      },
      {
        itemId : 7 ,
        itemName : "Chilli Chicken Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/e94/89aefa5b580181a4dc1b4a527d2bee94.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219,
        itemRating : 4 ,
        itemDescription : "Chicken in chilly sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 8 ,
        itemName : "Chola Bhatura Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/c8a/31fbaf7ba96dfcdc17155e2973bf3c8a.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 139 ,
        itemRating : 4,
        itemDescription : "Chola + Bhatura (2) + Salad. The perfect fluff of our Bhatura with the classic Chole giving you a desirable bite full of spice and goodness!"
      },
      {
        itemId : 9 ,
        itemName : "Chicken Butter Masala",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/acd/cd7612895167c68d672e1b8cddeb8acd.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 5 ,
        itemDescription : "Pieces of tandoori chicken cooked in smooth rich tomato gravy, finished with dollops of butter."
      },
      {
        itemId : 10 ,
        itemName : "Chicken Kassa Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fca/376f3a3f4367261e828178e2a7b90fca.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating :4 ,
        itemDescription : "Chicken Kassa + Choice of (2) Parathas or (250g) Rice + Salad. The delightful blend of Chicken served to you with the essentials for your happy meal!"
      },
      {
        itemId : 11 ,
        itemName : "Chilli Paneer Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/705a1f2d1d6b9ec855327cc00544dec9.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :169 ,
        itemRating : 4 ,
        itemDescription : "Chilli Paneer in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. The tender paneer cooked in chinese gravy with noodles/rice savouring your taste buds with goodness."
      },
      {
        itemId : 12 ,
        itemName : "Chilli Paneer Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ad4/31df82d84dc09583f7393b24076b0ad4.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 189,
        itemRating : 4,
        itemDescription : "Tender paneer in chilli sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 13,
        itemName : "Kashmiri Biryani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fb2/244a36557fe2982902f0af04bef4bfb2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 169 ,
        itemRating :4 ,
        itemDescription : "Kashmiri Biryani (350g) + Raita + Salad. The Northern twist to this traditionally cooked Biryani leaves a wow factor with every bite."
      },
      {
        itemId :14 ,
        itemName : "Chicken Do Pyaza",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4eb/d67220caacd4f42a3e90cc623a7444eb.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Marinated chicken chunks cooked in a variety of spices, yogurt and kasoori methi with onion added in two batches. This dish is bursting with aromatic flavours and a beautiful, creamy gravy."
      },
      {
        itemId : 15 ,
        itemName : "Dal Makhani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/6f0/2ea756df50b8bd75bf980f67ef0296f0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :  159 ,
        itemRating : 4 ,
        itemDescription : "Dal Makhani + Choice of (2) Parathas or (250g) Rice + Salad. The classic Dal Makhani with fresh cream to enhance the flavourful blend of spices for you."
      }
    ]
  },

  {
    id : 13,
    name : "Kasturi Restaurant",
    address : "New Market Area, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/6/18771526/89d036bc4157a5dcad9b29b952716529_o2_featured_v2.jpg",
    rating : 3.8,
    costForOne : 100 ,
    description : "Biryani, Kebab, Rolls, Chinese, North Indian, Street Food, Mughlai",
    expectedTime : 44 ,
    itemList :[
    {
      itemId : 1 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 2 ,
      itemName : "Chicken Tikka Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/3e7/f2dbdc8e71d7ef7b4e785d804199f3e7.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4,
      itemDescription : "[6 Pieces] Pieces of Chicken Tikka cooked in a flavoursome Butter gravy"
    },
    {
      itemId : 3 ,
      itemName : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/18c/d8675d579670b07c24c3e1c7f352018c.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210 ,
      itemRating : 4 ,
      itemDescription : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]"
    },
    {
      itemId : 4 ,
      itemName : "Al Baik Special Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/069/9a883322635be84cdfbf156c699b2069.jpg?fit=around|130:130&crop=130:130;*,*" ,
      itemPrice : 195 ,
      itemRating : 3 ,
      itemDescription : "Specially prepared slow-cooked Biryani served with Chicken [1 Piece] + Mutton [1 Piece] + Aloo"
    },
    {
      itemId : 5 ,
      itemName : "Chicken Loaded Biryani",
      itemImg :  "https://b.zmtcdn.com/data/dish_photos/b6f/908a9c2d56a2e341d36df05afbcd5b6f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "[Serves One, Two or Four People] Chicken Tikka Biryani + Chicken Bharta Add your favourite extras and make your favourite loaded Mega Pack!"
    },
    {
      itemId : 6 ,
      itemName : "Chicken Reshmi Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/015/ef4b7b9e641d4664f79953cd42b04015.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210,
      itemRating : 4,
      itemDescription : "[6 Pieces] Chicken Reshmi Kebabs simmered in a creamy Gravy"
    },
    {
      itemId : 7 ,
      itemName : "Special Mutton Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/b1102c45708948f0425e5dc61c491ec9.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 220 ,
      itemRating : 3,
      itemDescription : "Mutton [2 Pieces] + Aloo."
    },
    {
      itemId : 8 ,
      itemName : "Mutton Loaded Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/65b/3a7986c3c212f8263a9b4830cf09a65b.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 250,
      itemRating : 4,
      itemDescription : "[Serves One, Two or Four People] Mutton Biryani + Mutton Bhuna Add your favourite extras and make your own Nega Feast!"
    },
    {
      itemId : 9 ,
      itemName : "Tandoori Chicken Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4 ,
      itemDescription : "Tandoori Chicken simmered in a superbly flavorsome spiced, buttery gravy"
    },
    {
      itemId : 10 ,
      itemName : "Chicken Afghani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/f9e/96aa0f9a480727299df5baf433a5af9e.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 120,
      itemRating : 4 ,
      itemDescription : "Chicken marinated with rich, creamy cashew nut paste, cream, lime juice, cheese & ginger-garlic paste before being cooked to perfection"
    },
    {
      itemId : 11 ,
      itemName : "Chicken Tikka Biryani Party Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/7e4/faa9c9c32b34447f6248ee50b889a7e4.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 389 ,
      itemRating : 2 ,
      itemDescription : "Chicken Tikka Biryani [4 Plates]"
    },
    {
      itemId : 12 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 13,
      itemName : "Chicken Bharta",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 140 ,
      itemRating : 3 ,
      itemDescription : "Shredded chicken and eggwhites cooked in curd based yellow gravy"
    },
    {
      itemId : 14 ,
      itemName : "Chicken Malai Kabab",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/b1f/a550fb0cfd7b663027dbc20f38123b1f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 110 ,
      itemRating : 4 ,
      itemDescription : "Pieces of Chicken heavily marinated with cheese, cream, thick yogurt and special spices."
    },
    {
      itemId : 15 ,
      itemName : "Chilli Chicken [8 Pieces]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/5a3/0f46bd2083c1ab2c3930ca6dc94385a3.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130 ,
      itemRating : 4 ,
      itemDescription : "Succulent Chicken pieces tossed with special Chinese sauces with Veggies"
    }
    ]
  },

  {
    id : 14,
    name : "Kareem's",
    address : "Park Street Area, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/2/18665212/1b46f03925ffa7b4ddc9fc6efa4ce32b_o2_featured_v2.jpg",
    rating : 4 ,
    costForOne : 200,
    description : "Chinese, North Indian, Biryani, Desserts, Beverages",
    expectedTime : 39 ,
    itemList :[
      {
        itemId : 1 ,
        itemName : "Mutton Biryani Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/189/8d3dbf0efe872ce4b77a1632ccad6189.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 299 ,
        itemRating : 4 ,
        itemDescription : "The aromatic Mutton Biryani (300g) Thali served with mirchi salan, raita, phirni and salad has a wholesome taste to it."
      },
      {
        itemId : 2 ,
        itemName : "Chilli Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/0a0/9ce7b65749df1d018f571a8791a550a0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Chilli Chicken in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. Chicken prepared in traditional chinese gravy with authentic herbs and spices served with rice/noodles."
      },
      {
        itemId : 3 ,
        itemName : "Awadhi Murg Biryani [1pc Chicken + 1pc Potato]",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/f55/1e688b731724ca6f2c726668da2b7f55.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 209 ,
        itemRating : 3,
        itemDescription : "The food of the Nawabs and the aristocratic imperial cuisine, famous Biryani from the city of Lucknow. Aromatic and delicious, flavored with chicken, spices, herbs, nuts, plant extracts and saffron. The rich taste of this Biryani renders you speechles"
      },
      {
        itemId : 4,
        itemName : "Butter Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4b2/a5663bfca9b846e9a9933435a605a4b2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription :"Butter Chicken + Choice of (2) Parathas or (250g) Rice + Salad. The ... read more"
      },
      {
        itemId : 5 ,
        itemName : "Chicken Bharta",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/87e/716a584e018475b4617d7590e2a8d87e.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219 ,
        itemRating : 4 ,
        itemDescription : "Shredded chicken cooked in mildly spiced gravy, with a sooth, creamy texture."
      },
      {
        itemId : 6 ,
        itemName : "Chicken Bharta & Dal Fry Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/327/0d9515298e84015328e98317f1d17327.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 229 ,
        itemRating : 4 ,
        itemDescription : "Minced Chicken with spices and herbs served with Yellow Dal, Rice (200g), Roti (2) and Salad."
      },
      {
        itemId : 7 ,
        itemName : "Chilli Chicken Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/e94/89aefa5b580181a4dc1b4a527d2bee94.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219,
        itemRating : 4 ,
        itemDescription : "Chicken in chilly sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 8 ,
        itemName : "Chola Bhatura Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/c8a/31fbaf7ba96dfcdc17155e2973bf3c8a.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 139 ,
        itemRating : 4,
        itemDescription : "Chola + Bhatura (2) + Salad. The perfect fluff of our Bhatura with the classic Chole giving you a desirable bite full of spice and goodness!"
      },
      {
        itemId : 9 ,
        itemName : "Chicken Butter Masala",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/acd/cd7612895167c68d672e1b8cddeb8acd.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 5 ,
        itemDescription : "Pieces of tandoori chicken cooked in smooth rich tomato gravy, finished with dollops of butter."
      },
      {
        itemId : 10 ,
        itemName : "Chicken Kassa Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fca/376f3a3f4367261e828178e2a7b90fca.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating :4 ,
        itemDescription : "Chicken Kassa + Choice of (2) Parathas or (250g) Rice + Salad. The delightful blend of Chicken served to you with the essentials for your happy meal!"
      },
      {
        itemId : 11 ,
        itemName : "Chilli Paneer Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/705a1f2d1d6b9ec855327cc00544dec9.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :169 ,
        itemRating : 4 ,
        itemDescription : "Chilli Paneer in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. The tender paneer cooked in chinese gravy with noodles/rice savouring your taste buds with goodness."
      },
      {
        itemId : 12 ,
        itemName : "Chilli Paneer Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ad4/31df82d84dc09583f7393b24076b0ad4.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 189,
        itemRating : 4,
        itemDescription : "Tender paneer in chilli sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 13,
        itemName : "Kashmiri Biryani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fb2/244a36557fe2982902f0af04bef4bfb2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 169 ,
        itemRating :4 ,
        itemDescription : "Kashmiri Biryani (350g) + Raita + Salad. The Northern twist to this traditionally cooked Biryani leaves a wow factor with every bite."
      },
      {
        itemId :14 ,
        itemName : "Chicken Do Pyaza",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4eb/d67220caacd4f42a3e90cc623a7444eb.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Marinated chicken chunks cooked in a variety of spices, yogurt and kasoori methi with onion added in two batches. This dish is bursting with aromatic flavours and a beautiful, creamy gravy."
      },
      {
        itemId : 15 ,
        itemName : "Dal Makhani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/6f0/2ea756df50b8bd75bf980f67ef0296f0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :  159 ,
        itemRating : 4 ,
        itemDescription : "Dal Makhani + Choice of (2) Parathas or (250g) Rice + Salad. The classic Dal Makhani with fresh cream to enhance the flavourful blend of spices for you."
      }
    ]
  },

  {
    id : 15,
    name : "Shiraz Golden Restaurant",
    address : "Park Street Area, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/7/21527/83aea51c7f7b846aff539cc12df105d5_o2_featured_v2.jpg",
    rating : 3.8,
    costForOne : 150 ,
    description : "Biryani, Kebab, Rolls, Chinese, North Indian, Street Food, Mughlai",
    expectedTime : 44 ,
    itemList :[
    {
      itemId : 1 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 2 ,
      itemName : "Chicken Tikka Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/3e7/f2dbdc8e71d7ef7b4e785d804199f3e7.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4,
      itemDescription : "[6 Pieces] Pieces of Chicken Tikka cooked in a flavoursome Butter gravy"
    },
    {
      itemId : 3 ,
      itemName : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/18c/d8675d579670b07c24c3e1c7f352018c.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210 ,
      itemRating : 4 ,
      itemDescription : "Afghani Tandoori Chicken + Chicken Special Kebab [4 Pieces] + 2 Pepsi [330 ML]"
    },
    {
      itemId : 4 ,
      itemName : "Al Baik Special Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/069/9a883322635be84cdfbf156c699b2069.jpg?fit=around|130:130&crop=130:130;*,*" ,
      itemPrice : 195 ,
      itemRating : 3 ,
      itemDescription : "Specially prepared slow-cooked Biryani served with Chicken [1 Piece] + Mutton [1 Piece] + Aloo"
    },
    {
      itemId : 5 ,
      itemName : "Chicken Loaded Biryani",
      itemImg :  "https://b.zmtcdn.com/data/dish_photos/b6f/908a9c2d56a2e341d36df05afbcd5b6f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 199 ,
      itemRating : 4 ,
      itemDescription : "[Serves One, Two or Four People] Chicken Tikka Biryani + Chicken Bharta Add your favourite extras and make your favourite loaded Mega Pack!"
    },
    {
      itemId : 6 ,
      itemName : "Chicken Reshmi Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/015/ef4b7b9e641d4664f79953cd42b04015.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 210,
      itemRating : 4,
      itemDescription : "[6 Pieces] Chicken Reshmi Kebabs simmered in a creamy Gravy"
    },
    {
      itemId : 7 ,
      itemName : "Special Mutton Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/b1102c45708948f0425e5dc61c491ec9.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 220 ,
      itemRating : 3,
      itemDescription : "Mutton [2 Pieces] + Aloo."
    },
    {
      itemId : 8 ,
      itemName : "Mutton Loaded Biryani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/65b/3a7986c3c212f8263a9b4830cf09a65b.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 250,
      itemRating : 4,
      itemDescription : "[Serves One, Two or Four People] Mutton Biryani + Mutton Bhuna Add your favourite extras and make your own Nega Feast!"
    },
    {
      itemId : 9 ,
      itemName : "Tandoori Chicken Butter Masala",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 230,
      itemRating : 4 ,
      itemDescription : "Tandoori Chicken simmered in a superbly flavorsome spiced, buttery gravy"
    },
    {
      itemId : 10 ,
      itemName : "Chicken Afghani",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/f9e/96aa0f9a480727299df5baf433a5af9e.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 120,
      itemRating : 4 ,
      itemDescription : "Chicken marinated with rich, creamy cashew nut paste, cream, lime juice, cheese & ginger-garlic paste before being cooked to perfection"
    },
    {
      itemId : 11 ,
      itemName : "Chicken Tikka Biryani Party Combo",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/7e4/faa9c9c32b34447f6248ee50b889a7e4.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 389 ,
      itemRating : 2 ,
      itemDescription : "Chicken Tikka Biryani [4 Plates]"
    },
    {
      itemId : 12 ,
      itemName : "Afghani Tandoori Chicken",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/528/a82ff6b1f2abe2ef114ce92ac06f8528.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130,
      itemRating : 4 ,
      itemDescription : "Fondly called as the White Tandoori Chicken where Chicken is marinated with more yoghurt, methi & special spices before being cooked in a Tandoor."
    },
    {
      itemId : 13,
      itemName : "Chicken Bharta",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/861/2adebe8a8a8445ab7190b61aec83b861.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 140 ,
      itemRating : 3 ,
      itemDescription : "Shredded chicken and eggwhites cooked in curd based yellow gravy"
    },
    {
      itemId : 14 ,
      itemName : "Chicken Malai Kabab",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/b1f/a550fb0cfd7b663027dbc20f38123b1f.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 110 ,
      itemRating : 4 ,
      itemDescription : "Pieces of Chicken heavily marinated with cheese, cream, thick yogurt and special spices."
    },
    {
      itemId : 15 ,
      itemName : "Chilli Chicken [8 Pieces]",
      itemImg : "https://b.zmtcdn.com/data/dish_photos/5a3/0f46bd2083c1ab2c3930ca6dc94385a3.jpg?fit=around|130:130&crop=130:130;*,*",
      itemPrice : 130 ,
      itemRating : 4 ,
      itemDescription : "Succulent Chicken pieces tossed with special Chinese sauces with Veggies"
    }
    ]
  },

  {
    id : 16,
    name : "Kabuliwala",
    address : "Park Circus Area, Kolkata",
    imgurl : "https://b.zmtcdn.com/data/pictures/5/19187415/6b4a2801657cbe07f6e651d7d212d573_o2_featured_v2.jpg",
    rating : 4 ,
    costForOne : 100,
    description : "Chinese, North Indian, Biryani, Desserts, Beverages",
    expectedTime : 39 ,
    itemList :[
      {
        itemId : 1 ,
        itemName : "Mutton Biryani Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/189/8d3dbf0efe872ce4b77a1632ccad6189.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 299 ,
        itemRating : 4 ,
        itemDescription : "The aromatic Mutton Biryani (300g) Thali served with mirchi salan, raita, phirni and salad has a wholesome taste to it."
      },
      {
        itemId : 2 ,
        itemName : "Chilli Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/0a0/9ce7b65749df1d018f571a8791a550a0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Chilli Chicken in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. Chicken prepared in traditional chinese gravy with authentic herbs and spices served with rice/noodles."
      },
      {
        itemId : 3 ,
        itemName : "Awadhi Murg Biryani [1pc Chicken + 1pc Potato]",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/f55/1e688b731724ca6f2c726668da2b7f55.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 209 ,
        itemRating : 3,
        itemDescription : "The food of the Nawabs and the aristocratic imperial cuisine, famous Biryani from the city of Lucknow. Aromatic and delicious, flavored with chicken, spices, herbs, nuts, plant extracts and saffron. The rich taste of this Biryani renders you speechles"
      },
      {
        itemId : 4,
        itemName : "Butter Chicken Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4b2/a5663bfca9b846e9a9933435a605a4b2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription :"Butter Chicken + Choice of (2) Parathas or (250g) Rice + Salad. The ... read more"
      },
      {
        itemId : 5 ,
        itemName : "Chicken Bharta",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/87e/716a584e018475b4617d7590e2a8d87e.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219 ,
        itemRating : 4 ,
        itemDescription : "Shredded chicken cooked in mildly spiced gravy, with a sooth, creamy texture."
      },
      {
        itemId : 6 ,
        itemName : "Chicken Bharta & Dal Fry Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/327/0d9515298e84015328e98317f1d17327.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 229 ,
        itemRating : 4 ,
        itemDescription : "Minced Chicken with spices and herbs served with Yellow Dal, Rice (200g), Roti (2) and Salad."
      },
      {
        itemId : 7 ,
        itemName : "Chilli Chicken Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/e94/89aefa5b580181a4dc1b4a527d2bee94.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 219,
        itemRating : 4 ,
        itemDescription : "Chicken in chilly sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 8 ,
        itemName : "Chola Bhatura Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/c8a/31fbaf7ba96dfcdc17155e2973bf3c8a.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 139 ,
        itemRating : 4,
        itemDescription : "Chola + Bhatura (2) + Salad. The perfect fluff of our Bhatura with the classic Chole giving you a desirable bite full of spice and goodness!"
      },
      {
        itemId : 9 ,
        itemName : "Chicken Butter Masala",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/acd/cd7612895167c68d672e1b8cddeb8acd.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 5 ,
        itemDescription : "Pieces of tandoori chicken cooked in smooth rich tomato gravy, finished with dollops of butter."
      },
      {
        itemId : 10 ,
        itemName : "Chicken Kassa Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fca/376f3a3f4367261e828178e2a7b90fca.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating :4 ,
        itemDescription : "Chicken Kassa + Choice of (2) Parathas or (250g) Rice + Salad. The delightful blend of Chicken served to you with the essentials for your happy meal!"
      },
      {
        itemId : 11 ,
        itemName : "Chilli Paneer Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ec9/705a1f2d1d6b9ec855327cc00544dec9.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :169 ,
        itemRating : 4 ,
        itemDescription : "Chilli Paneer in Gravy + Choice of Veg Fried Rice (250g) or Veg Hakka Noodles (250g) + Chinese Salad. The tender paneer cooked in chinese gravy with noodles/rice savouring your taste buds with goodness."
      },
      {
        itemId : 12 ,
        itemName : "Chilli Paneer Thali",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/ad4/31df82d84dc09583f7393b24076b0ad4.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 189,
        itemRating : 4,
        itemDescription : "Tender paneer in chilli sauce served with veg manchurian, veg fried rice (200g), veg hakka noodles (150g) and salad."
      },
      {
        itemId : 13,
        itemName : "Kashmiri Biryani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/fb2/244a36557fe2982902f0af04bef4bfb2.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 169 ,
        itemRating :4 ,
        itemDescription : "Kashmiri Biryani (350g) + Raita + Salad. The Northern twist to this traditionally cooked Biryani leaves a wow factor with every bite."
      },
      {
        itemId :14 ,
        itemName : "Chicken Do Pyaza",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/4eb/d67220caacd4f42a3e90cc623a7444eb.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice : 199 ,
        itemRating : 4 ,
        itemDescription : "Marinated chicken chunks cooked in a variety of spices, yogurt and kasoori methi with onion added in two batches. This dish is bursting with aromatic flavours and a beautiful, creamy gravy."
      },
      {
        itemId : 15 ,
        itemName : "Dal Makhani Combo",
        itemImg : "https://b.zmtcdn.com/data/dish_photos/6f0/2ea756df50b8bd75bf980f67ef0296f0.jpg?fit=around|130:130&crop=130:130;*,*",
        itemPrice :  159 ,
        itemRating : 4 ,
        itemDescription : "Dal Makhani + Choice of (2) Parathas or (250g) Rice + Salad. The classic Dal Makhani with fresh cream to enhance the flavourful blend of spices for you."
      }
    ]
  }
]


export default restaurentlist;
