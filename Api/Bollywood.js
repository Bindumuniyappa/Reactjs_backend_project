const get=(req,res)=>{
    res.send([
        {
             "id": 1,
            "title": "KASHMIRI PANDITH",
            "img": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202207/44-45_1-sixteen_nine.jpg?size=948:533",
            "category": "Bollywood",
            "description": "The Vivek Agnihotri directorial, The Kashmir Files is based on the real-life exodus and genocide of Kashmir Pandits that took place 32 years back. The plot revolves around a JNU student Darshan Kumaar, who remembers nothing about his childhood."
        },
        {
            "id": 51,
            "title": "IOT",
            "img": "https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg",
            "category": "bollywood",
            "description": "The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. "
        },
        {
            "id": 3,
            "title": "SHERSHAAH",
            "img": "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2021/7/16/shershah-movie.jpg",
            "category": "Bollywood",
            "description": "Vikram Batra, a young man, dreams of becoming a soldier and falls in love with Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in the Kargil war."
        },
        {
            "id": 6,
            "title": "DRISHYAM 2",
            "img": "https://i.ytimg.com/vi/-DZ9r8ukgCg/maxresdefault.jpg",
            "category": "Bollywood",
            "description": "Seven years after the case related to Vijay and his family was closed, a series of unexpected events brings a truth to light that threatens to change everything for the Salgaonkars."
        },
        {
            "id": 7,
            "title": "KAHANI",
            "img": "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/84/12/0_i5ijlaj1_1557497777105_l_medium.jpg",
            "category": "Bollywood",
            "description": "VVidya Bagchi, a pregnant woman, travels to Kolkata from London to search for her missing husband. When all clues lead to a dead end, she realises that there is more than what meets the eye. "
        
        }
    ])
}

module.exports.apiController=get