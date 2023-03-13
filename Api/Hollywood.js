const get=(req,res)=>{
    res.send([
        {
             "id": 14,
            "title": "JURRASIC PARK",
            "img": "https://resizing.flixster.com/X-6cVKTBLDLIbJPc6i2jUBvwlF8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjczMzkzOS53ZWJw",
            "category": "Hollywood",
            "description": "Industrialist John Hammond has created Jurassic Park, a theme park of cloned dinosaurs, on tropical Isla Nublar. After a dinosaur handler is killed by a Velociraptor, the park's investors, represented by lawyer Donald Gennaro, demand a safety certification."
        },
        {
            "id": 13,
            "title": "MATRIX",
            "img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-matrix-1574173308.jpg",
            "category": "Hollywood",
            "description": "Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion."
        },
        {
            "id": 12,
            "title": "HARRY POTTER",
            "img": "https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg",
            "category": "Hollywood",
            "description": "After being cast aside by Voldemort, two rogue Death Eaters decide to track down Harry Potter, Ron Weasley and Hermione Granger in the middle of their search for the last horcurxes."
        },
        {
            "id": 11,
            "title": "2012",
            "img": "http://gonewiththetwins.com/new/wp-content/uploads/2014/01/2012.jpg",
            "category": "Hollywood",
            "description": "A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind. Dr. Adrian Helmsley, part of a worldwide geophysical team investigating the effect on the earth of radiation from unprecedented solar storms, learns that the earth's core is heating up."
        },
    ])
}

module.exports.apiController=get