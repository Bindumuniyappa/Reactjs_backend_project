const get=(req,res)=>{
    res.send([
            {
            "id": 41,
            "title": "Tandoori chicken",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/330px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg",
            "category": "Food",
            "description": "Tandoori chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven. The dish is now popular world-wide. The modern form of the dish was popularized by the Moti Mahal restaurant in New Delhi in the late 1940s."
        },
        {
            "id": 42,
            "title": "South Indian cuisine",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Tamil_Nadu_Non-Vegetarian_Meals.png/330px-Tamil_Nadu_Non-Vegetarian_Meals.png",
            "category": "Food",
            "description": "South Indian cuisine includes the cuisines of the five southern states of India—Andhra Pradesh, Karnataka, Kerala, Tamil Nadu and Telangana—and the union territories of Lakshadweep, Pondicherry, and the Andaman and Nicobar Islands.There are typically vegetarian and non-vegetarian dishes for all five states. Additionally, all regions have typical main dishes, snacks, light meals, desserts, and drinks that are well known in their respective region."
        },
        {
            "id": 43,
            "title": "North Indian cuisine",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/288px-Vegetarian_Curry.jpeg",
            "category": "Food",
            "description": "North Indian cuisine is collectively the cuisine of Northern India, which includes the cuisines of Jammu and Kashmir, Punjab, Haryana, Himachal Pradesh, Rajasthan, Uttarakhand, Delhi, Uttar Pradesh and adjoining western Bihar."
        },
        {
            "id": 46,
            "title": "Biryani",
            "img": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg",
            "category": "food",
            "description": "Biryani  is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, fish) or in some cases without any meat, and sometimes, in addition, eggs and potatoes.[1]Biryani is one of the most popular dishes in South Asia, as well as among the diaspora from the region. Similar dishes are also prepared in other parts of the world such as in Iraq, Thailand, and Malaysia.[2] Biryani is the single most-ordered dish on Indian online food ordering and delivery services."
        },
        {
            "id": 46,
            "title": "Kabab",
            "img": "https://static.toiimg.com/thumb/58360750.cms?imgsize=347996&width=800&height=800",
            "category": "Food",
            "description": "Kebab or kabob (North American) is a type of cooked meat dish that originates from cuisines of the Middle East. Many variants of the category are popular around the world, including the skewered shish kebab and the doner kebab with bread.Kebabs consist of cut up or ground meat, sometimes with vegetables and various other accompaniments according to the specific recipe. Although kebabs are typically cooked on a skewer over a fire, some kebab dishes are oven-baked in a pan, or prepared as a stew such as tas kebab.[1][2] The traditional meat for kebabs is most often lamb meat, but regional recipes may include beef, goat, chicken, fish, or even pork (depending on whether or not there are specific religious prohibitions)"
        },
        {
            "id": 49,
            "title": "These Harmless Summer Drinks are Perfect for Diabetic Patients",
            "img": "https://images.news18.com/ibnlive/uploads/2022/05/summer-drink-16518193713x2.jpg?impolicy=website&width=510&height=356",
            "category": "Food",
            "description": "The summer season is here with soaring temperatures and dehydrating weather. And they call for cold and refreshing drinks. While many of these drinks are healthy and rehydrating, the sugar content in them might not be healthy for diabetic patients. This makes it difficult for people suffering from the chronic disease to stay hydrated and have all essential electrolytes up to their necessary levels. Here are 5 summer coolers that are healthy and contain zero sugar for diabetic patients to enjoy and help stay hydrated. Sattu is a special and popular food in Bihar. One of oldest drinks in India, Sattu cooler is the perfect way to stay hydrated for diabetic patients. It has no carbohydrates and can be enjoyed just by adding sattu powder to cold water along with some black salt and squeezing a few drops of lemon to give it a tangy touch. Spinach, beetroot, fruit juice of choice and some coconut water blended together can be a very beneficial smoothie for you even if you’re non-diabetic. Make sure that the fruit you choose is a low sugar content one and reap the benefits of this wonderful nutritious smoothie.Take 2 cups of chilled curd, a glass of water, some ice cubes and a teaspoon of cumin powder. Blend it all and you have this tasty sugarless drink ready. Salted lassi is a summer cooler that diabetic patients can enjoy without the worry of their disease aggravating.Bel or wood apple is a great source of natural fibre, iron, antioxidants and folates. Along with this it cools your stomach. If you suffer from diabetes, bel sherbet can prove to be very beneficial for you during the scorching summers."
        }
    ])
}

module.exports.apiController=get