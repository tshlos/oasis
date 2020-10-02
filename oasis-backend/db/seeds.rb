# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all
RooftopPark.destroy_all
User.destroy_all

#######CITY######
san_francisco = City.create({
    name: 'San Francisco',
    state: 'CA'
})
    
seattle = City.create({
    name: 'Seattle',
    state: 'WA'
})

######USER######
user1 = User.create({
    username: 'Daniel',
    city: seattle
})
user2 = User.create({
    username: 'Lucas',
    city: seattle
})
user3 = User.create({
    username: 'Tisdale',
    city: san_francisco
})
user4 = User.create({
    username: 'Taci',
    city: san_francisco
})


###ROOF TOP PARKS####
rp1 = RooftopPark.create({
    lat:37.793690,
    lng:-122.401720,
    name: '343 Sansome Rooftop Deck',
    address: '343 Sansome St floor 15',
    state: 'CA',
    zipcode: 94129,
    description: 'Its worth seeking this hidden rooftop space a little earlier than the lunch hour just to have the ability to roam freely without running into FiDi office drones parking themselves on the many available benches.',
    photo: 'https://redtri.com/wp-content/uploads/2015/03/343-sansome1-e1425324793189.jpg?w=640',
    city: san_francisco
})

rp2 = RooftopPark.create({
    lat: 37.7892,
    lng: -122.3977,
    name: 'Roof Garden',
    address: '100 First Street, 100 1st St',
    state: 'CA',
    zipcode: 94105,
    description: 'This rooftop garden is a popular lunch spot; although you’ll find it full of people on a weekday at lunchtime, there is still plenty of seating.',
    photo: 'https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2015/08/terrace-garden1_mini.jpg',
    city: san_francisco
})

rp3 = RooftopPark.create({
    lat: 37.7911913,
    lng: -122.3983658,
    name: 'POPO (Public Rooftop Garden)',
    address: '1 Kearny St',
    state: 'CA',
    zipcode: 94108,
    description: 'This POPOS offers great views of the city, fresh air, and plenty of surrounding greenery and benches to allow you to sit back and relax on a sunny day.',
    photo: 'https://miro.medium.com/max/2592/1*OUKAuTeaMOzWASM7ax8Qiw.jpeg',
    city: san_francisco
})

rp4 = RooftopPark.create({
    lat: 47.4577895,
    lng: -122.258798014141,
    name: 'Westfield Sky Terrace',
    address: '835 Market St',
    state: 'CA',
    zipcode: 94103,
    description: 'The most hidden "public" space downtown is a knockout: the ninth-floor Sky Terrace above Westfield San Francisco Centre.',
    photo: 'https://miro.medium.com/max/1500/1*GkuXUYqb2NmI5CSPNrthtw.jpeg',
    city: san_francisco
})

rp5 = RooftopPark.create({
    lat:37.785290,
    lng:-122.395569,
    name: '303 2nd St Plaza',
    address: '303 2nd St',
    state: 'CA',
    zipcode: 94107, 
    description: ' It has huge fountain, abstract wooden benches, and alcoves complete with tables to eat/work off of. You could even sunbathe here. Interesting art structures here to gaze upon.',
    photo: 'https://assets3.thrillist.com/v1/image/1207034/1584x1054/crop;jpeg_quality=60.jpg',
    city: san_francisco
})

rp6 = RooftopPark.create({
    lat: 47.6228,
    lng: -122.3340,
    name: "Mbar",
    address: "400 Fairview Ave N",
    state: "Washington",
    zipcode: 98109,
    description: "mbar is a stunning rooftop restaurant with an outdoor patio overlooking downtown Seattle, Queen Anne, Lake Union and Capitol Hill. Executive Chef Jason Stratton has assembled a menu culling from the best produce our region has to offer.",
    photo: "https://www.therooftopguide.com/rooftop-bars-in-seattle/Bilder/mbar_8_slide.jpg",
    city: seattle
})

rp7 = RooftopPark.create({
    lat:47.608363,
    lng:-122.332112 ,
    name:"Crowne Plaza Hotel",
    address: "1113 6th Ave",
    state:"Washington",
    zipcode: 98101,
    description: "Just to the south of the Crowne Plaza Hotel, up a short staircase on Seventh Avenue, there’s a clandestine little walled-in courtyard with greenery, seating, and often giant chess. People try to throw private parties here sometimes, but it’s a totally public space, so don’t let anyone tell you different.",
    photo:"https://santorinidave.com/wp-content/uploads/2014/12/seattle-best-five-star-hotel-four-seasons-outdoor-pool.jpg",
    city: seattle
})

rp8 = RooftopPark.create({
    lat: 47.610668,
    lng: -122.341309,
    name: "The Nest Rooftop Bar",
    address: "110 Stewart St, Seattle",
    state: "Washington",
    zipcode: 98101,
    description: "The location in downtown Seattle, close to Pike Place Market, gives you one of the best views in town. Very stylish and trendy in decoration, the beautiful lounge and terrace comes with comfy sofas, fire-pits and quite a lot of greenery. The rooftop bar serves fantastic hand-crafted cocktails, fine wines, beers along with a smaller selection of tasty bar bites.",
    photo: "https://media1.fdncms.com/stranger/imager/u/large/40390198/tsh_eventspace_outdoor_thenest_loungeview_mag.jpg",
    city: seattle
})

rp9 = RooftopPark.create({
    lat:47.608518,
    lng:-122.340603,
    name: "Pike Place Urban Garden",
    address: "81 Pike St.",
    state: "Washington",
    zipcode: 98101,
    description: "The Pike Place Secret Garden is a thriving community-led intergenerational garden. The garden is run by volunteers, and all produce grown is donated to the Pike Market Food Bank. Nearly 500 fresh herbs and vegetables are donated each year. ... The garden is open to the general public daily – come see what we're growing!",
    photo: "https://www.instagram.com/p/68f8ECSeyl/media?size=l",
    city: seattle
})

rp10 = RooftopPark.create({
    lat: 47.605676,
    lng: -122.333440,
    name: "Fourth and Madison Building",
    address: "925 4th Ave",
    state: "Washington",
    zipcode: 98104,
    description: "This rooftop garden is located on the 7th floor and wraps around three sides of the building. The main building itself has 40 floors and is 156.06 m (512.0 ft) tall. The rooftop garden is open from Monday to Friday from 7 am to 5:30 pm and also features free Wi-Fi.",
    photo: "https://gatetoadventures.com/wp-content/uploads/2015/07/4th-and-Madison-Rooftop-Plaza-13.jpg",
    city: seattle
})


###FAVORITES####
# f1 = Favorite.create({
#     rooftop_park_id: 
#     comment: 
# })

# f2 = Favorite.create({
#     rooftop_park_id:
#     comment: 
# })

# f3 = Favorite.create({
#     rooftop_park_id:
#     comment: 
# })

# f4 = Favorite.create({
#     rooftop_park_id:
#     comment: 
# })

# f5 = Favorite.create({
#     rooftop_park_id:
#     comment: 
# })

puts 'seeded'