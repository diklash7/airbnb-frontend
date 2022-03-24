// import axios from 'axios'
import { utilService } from './util-service'
// import { httpService } from './http-service'
import { storageService } from './async-storage-service'

const KEY = 'stay_db'
    // const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor']
    // const ENDPOINT = 'stay'
    // const BASE_URL =
    //   process.env.NODE_ENV !== 'development' ? '/api/stay' : '//localhost:3030/api/stay/'

export const stayService = {
    query,
    getById,
    remove,
    save,
    //   getEmptyStay,
    //   getlabels,
}

_createStays()

async function query(filterBy) {

    const stays = await storageService.query(KEY)
    let filteredStays = JSON.parse(JSON.stringify(stays))
    if (filterBy.city) {
        const regex = new RegExp(filterBy.city, 'i')
        filteredStays = stays.filter(stay => regex.test(stay.address.city))
    }

    if (filterBy.min && filterBy.max) {
        // todo: check if stay in range of price
    }

    return Promise.resolve(filteredStays)
}

// async function query(filterBy = {}) {
//     const stays = await storageService.query(KEY)
//     const filteredStays = []
//      console.log(filterBy.city);
//     if (filterBy.city) {
//         const regex = new RegExp(filterBy.city,'i'); 
//      return stays.filter(stay => regex.test(stay.city))
//     }
// //   return await httpService.get(ENDPOINT, filterBy)
//   // return axios.get(BASE_URL, { params: { filterBy } }).then((res) => res.data)
// //   return storageService.query(KEY,filterBy)
// return Promise.resolve(filteredStays)
// }

function getById(id) {
    //   return await httpService.get(`${ENDPOINT}/${id}`)
    // return axios.get(BASE_URL + id).then((res) => res.data)
    return storageService.getById(KEY, id)
}

function remove(id) {
    //   return await httpService.delete(`${ENDPOINT}/${id}`)
    // return axios.delete(BASE_URL + id).then((res) => res.data)
    return storageService.remove(KEY, id)
}

function save(stay) {
    //   return stay._id
    // ? await httpService.put(`${ENDPOINT}/${stay._id}`, stay)
    // : await httpService.post(ENDPOINT, stay)
    return stay._id ? storageService.put(KEY, stay) : storageService.post(KEY, stay)
}

// function getEmptyStay() {
//   return Promise.resolve({
//     name: '',
//     price: 0,
//     labels: [],
//     createdAt: new Date(),
//     inStock: true,
//     reviews: [],
//   })
// }

// function getlabels() {
//   return labels
// }

function _createStays() {
    let stays = utilService.loadFromStorage(KEY)
    if (!stays || !stays.length) {
        stays = [{
                "name": "Spacious and quiet duplex apartment in Poble Sec",
                "summary": "Spacious apartment in a peculiar building in the central neighbourhood of Poble Sec, with patio and terrace, ideal for families with children or groups. Walking distance from center, Montjuïc, Plaza España, Fira Montjuïc/Gran Vía, Sant Antoni, Raval.",
                "interaction": "Yamila lives in the neighborhood. Should you need it she will be near! Before your arrival, you might interact by e-mail either with Yamila or with me (Cristina, the apartment's owner).",
                "houseRules": "RIGHT AFTER RESERVATION: 1. Send us your e-mail address so that we can send you a PDF file with all the info. 2. Send us by e-mail the following personal data FOR ALL GUESTS (children included), for the compulsory tourist registration with the local authorities: ID number*  Type of document (national ID or passport)* Date of issue (if visible)* Family name*  First name*   M/F* Birth date*  Nationality*  Date of arrival* Personal address  Phone number  Expected days of stay BEFORE YOUR ARRIVAL: 1. Make sure you provide us your arrival's details (time of arrival and mean of transportation) and a phone number so that we can contact you in case of need. 2. Let us know your preferences regarding the beds according to your group's composition: ex. if you are a family of 2 parents + 2 kids we will prepare the main room and the bulk beds; if you are 2 couples we will prepare the main room and the other double bed room; if there is a child we will prepare the baby bed or the little bed, etc.  3",
                "propertyType": "Apartment",
                "roomType": "Entire home/apt",
                "bedType": "Real Bed",
                "cancellationPolicy": "moderate",
                "capacity": 7,
                "bedrooms": 3,
                "beds": 7,
                "numOfReviews": 129,
                "amenities": [
                    "TV",
                    "Cable TV",
                    "Internet",
                    "Wifi",
                    "Air conditioning",
                    "Kitchen",
                    "Buzzer-wireless intercom",
                    "Heating",
                    "Family-kid friendly",
                    "Smoke detector",
                    "Carbon monoxide detector",
                    "Washer",
                    "First aid kit",
                    "Safety card",
                    "Fire extinguisher",
                    "Essentials",
                    "Shampoo",
                    "24-hour check-in",
                    "Hangers",
                    "Hair dryer",
                    "Iron",
                    "Laptop friendly workspace",
                    "Outlet covers",
                    "Bathtub",
                    "High chair",
                    "Stair gates",
                    "Children’s books and toys",
                    "Crib",
                    "Pack ’n Play/travel crib",
                    "Room-darkening shades",
                    "Children’s dinnerware",
                    "Hot water",
                    "Bed linens",
                    "Extra pillows and blankets",
                    "Ethernet connection",
                    "Microwave",
                    "Coffee maker",
                    "Refrigerator",
                    "Dishwasher",
                    "Dishes and silverware",
                    "Cooking basics",
                    "Oven",
                    "Stove",
                    "Patio or balcony",
                    "Luggage dropoff allowed",
                    "Long term stays allowed",
                    "Wide doorway",
                    "Well-lit path to entrance",
                    "Wide entryway",
                    "Host greets you"
                ],
                "host": {
                    "_id": "622f3403e36c59e6164fb08c",
                    "fullname": "Cristina",
                    "location": "Barcelona, Catalonia, Spain",
                    "about": "(ES) Soy mujer, mamá y traductora. Me gusta tener tiempo para pensar, viajar, jugar con mis hijas y descubrir algo nuevo cada día. A veces por trabajo tengo que viajar, y entonces mi amiga Yamila, gran mujer y fantástica anfitriona, amante del campo y fotógrafa de profesión, me ayuda con los huéspedes.\r\n\r\n(EN) I am a woman, a mother and a translator. I like having time to think, to travel, to play with my daughters and to discover something new every day. Sometimes I have to travel because of my job: in those occasions my friend Yamila, great woman and fantastic host, outdoor lover and photographer, helps me out with guests.",
                    "responseTime": "within an hour",
                    "thumbnailUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small",
                    "pictureUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_x_medium",
                    "isSuperhost": true,
                    "id": "6107595"
                },
                "address": {
                    "street": "Barcelona, Catalunya, Spain",
                    "country": "Spain",
                    "location": {
                        "lat": 2.15566,
                        "lan": 41.37479
                    },
                    "countryCode": "ES",
                    "city": "Barcelona"
                },
                "id": "1112838",
                "bathrooms": 2,
                "price": 130,
                "securityDeposit": 300,
                "cleaningFee": 65,
                "extraPeople": 35,
                "reviewScores": {
                    "accuracy": 10,
                    "cleanliness": 10,
                    "checkin": 10,
                    "communication": 10,
                    "location": 10,
                    "value": 10,
                    "rating": 95
                },
                "reviews": [{
                        "at": "2013-05-12T04:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fb132",
                            "fullname": "Jean-Pierre",
                            "imgUrl": "https://robohash.org/768849?set=set1",
                            "id": "768849"
                        },
                        "txt": "Yamila appartement was just perfect for us!\r\nThe location in Poble sec is very close to BCN city center and the neighborhood is so quiet without any traffic like everywhere else in the city\r\nThe appartement is very clean, well equipped with very recent furniture, 2 bathrooms, 3 bedrooms, 2 balconies, 1 terrace, large kitchen and lounge.\r\nYamila was a perfect host with us also.\r\nI fully recommend this appartment"
                    },
                    {
                        "at": "2013-06-17T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fadce",
                            "fullname": "Ove M.",
                            "imgUrl": "https://robohash.org/6146923?set=set1",
                            "id": "6146923"
                        },
                        "txt": "El piso esta muy guay, en una zona muy bien comunicada y con muchos restaurantes y bares cerca. Lo hemos pasado muy bien en este piso y volveriamos a alquilarlo."
                    },
                    {
                        "at": "2013-07-12T04:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fb078",
                            "fullname": "Andrew",
                            "imgUrl": "https://robohash.org/6597264?set=set1",
                            "id": "6597264"
                        },
                        "txt": "Awesome accommodations! Huge apartment that was obviously recently renovated and well maintained. The building is in a residential (read: non-touristy) part of Spain so if you are looking for a real taste of local culture this is the place to stay. 2 blocks from the subway and we were downtown in just a couple stops. The apartment is in building with a common courtyard (common for the style). The other people that live in the building were very friendly and helpful answering any questions we had. My son was even able to play with the other children (despite the language barrier). Awesome experience -- would definietly rent again."
                    },
                    {
                        "at": "2013-08-06T04:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbce7",
                            "fullname": "Juan Daniel",
                            "imgUrl": "https://robohash.org/6259139?set=set1",
                            "id": "6259139"
                        },
                        "txt": "Experiencia bastante agradable, puntuales, el piso muy limpio, ordenado y esta genial, muy bien situado, muy recomendable."
                    },
                    {
                        "at": "2013-08-09T04:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fba44",
                            "fullname": "Carey",
                            "imgUrl": "https://robohash.org/7317566?set=set1",
                            "id": "7317566"
                        },
                        "txt": "The apartment is exactly as pictured. Very spacious, comfortable, and clean with a well equipped kitchen and nice terraces on both levels. The neighborhood is well situated - it is not at all touristy but close to transportation at Plaza España and Poble Sec metro stops so you can easily get to all the places you want to visit. We stayed here for 3 nights with our two children and found it perfect. We were able to walk or take the metro everywhere we wanted to go, but have a quieter place to sleep and relax. There is a park down the street and a supermarket directly across. Xavi met us on arrival and was very nice and helpful throughout our stay. When my husband accidentally left a few things in the apartment, Xavi collected them and met us upon our return to Barcelona a few days later to return them. Thanks, Xavi! It was a great stay in Barcelona and I would definitely recommend the apartment to anyone looking for space and comfort in a close but quieter neighborhood. "
                    },
                    {
                        "at": "2013-08-25T04:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbfa0",
                            "fullname": "Julie",
                            "imgUrl": "https://robohash.org/3129321?set=set1",
                            "id": "3129321"
                        },
                        "txt": "Great flat in a very good location, very close from subway which brings you to wherever you want in a few minutes. Xabi has been really nice and we didn't miss anything in the flat. Thank you"
                    },
                    {
                        "at": "2013-09-16T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fae47",
                            "fullname": "Ron",
                            "imgUrl": "https://robohash.org/8464703?set=set1",
                            "id": "8464703"
                        },
                        "txt": "Yamila is a great hostess, the apartment is very comfortable.\r\nVery close to the metro. And a convenient store. A tv was missed, otherwise everything was great."
                    },
                    {
                        "at": "2013-10-27T04:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fc002",
                            "fullname": "Christine",
                            "imgUrl": "https://robohash.org/3185553?set=set1",
                            "id": "3185553"
                        },
                        "txt": "Appartement conforme aux indications, très propre. Le quartier est calme mais tout de même assez proche de tout (2 stations de métro de la rambla et des plages...). Super Bon séjour !\r\n"
                    },
                    {
                        "at": "2013-11-05T05:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb814",
                            "fullname": "Jeremie",
                            "imgUrl": "https://robohash.org/9083747?set=set1",
                            "id": "9083747"
                        },
                        "txt": "Una estancia perfecta, el piso es muy grande y muy bien equipado. La descripción corresponde perfectamente a la casa. 100% recomendable."
                    },
                    {
                        "at": "2014-02-27T05:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb306",
                            "fullname": "Kirstin",
                            "imgUrl": "https://robohash.org/10268141?set=set1",
                            "id": "10268141"
                        },
                        "txt": "Super apartement, clean, spacios, great located and pretty quiet. Yamila is very nice, polite and helpful. I strongly can recommend the apartement. "
                    },
                    {
                        "at": "2014-03-04T05:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fbbcc",
                            "fullname": "Oliver",
                            "imgUrl": "https://robohash.org/3385007?set=set1",
                            "id": "3385007"
                        },
                        "txt": "A very nice place and a great host!\r\nThe apartment is exactly as you can see in the pictures, everthing is clean and Yamila is just a call (or e-mail) away if you need help."
                    },
                    {
                        "at": "2014-03-18T04:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb476",
                            "fullname": "Okan",
                            "imgUrl": "https://robohash.org/10270886?set=set1",
                            "id": "10270886"
                        },
                        "txt": "EVERYTHING WAS GREAT. Yamila is very hospitable, very helpful. You can find everything you need at home.We will rent this House again barcelona 2015 Marathon."
                    },
                    {
                        "at": "2014-03-25T04:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb510",
                            "fullname": "Lisa",
                            "imgUrl": "https://robohash.org/13007630?set=set1",
                            "id": "13007630"
                        },
                        "txt": "Cristina and her friend Yamilia did a wonderful job of making us feel at home and were also very helpful with other miscellaneous necessities (calling us a taxi to take us to the airport on departure).  The duplex was very nice and spacious, clean, charming, outfitted with everything we needed, with comfortable beds and a very nice kitchen (with an induction cooktop!).  The property is older and there was some remodeling noise for a few hours from the neighboring apartment, which we could hear through what seemed to be a shared skylight, but it was very brief and not a concern (unless noise privacy is a very high priority, which it wasn't for us).  We didn't even use the third bedroom with bunk beds, but it would be ideal for a family.  The metro was close enough, and the bakery just downstairs, together with the grocery store literally across the street, were a wonderful convenience.  We went nearly everywhere by metro, and the location was central enough that at the end of the day, if we were too tired to make our way back by metro, an easy cab ride back to the apartment never exceeded 8 euros (which would've been the cost of the metro for all four of us anyway).  Overall, the apartment was a nice, comfortable bargain for family travel - not the most modern, but charming and fully met our needs."
                    },
                    {
                        "at": "2014-04-12T04:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb5a8",
                            "fullname": "Danielle",
                            "imgUrl": "https://robohash.org/10549520?set=set1",
                            "id": "10549520"
                        },
                        "txt": "Appartement trés agréable et trés bien situé à 2 pas d'une station de métro et de la place d'Espagne.\r\nToutes les pièces sont très agréables et les terrasses aussi.\r\nSupermarché en face et excellente boulangerie au pied de l'immeuble.\r\nImmeuble très calme.\r\nPas de cafetière électrique ni d'essoreuse à salade mais l'électroménager est top.\r\nDéco soignée.\r\nMerci, nous avons passé une excellente semaine !  "
                    },
                    {
                        "at": "2014-04-27T04:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fbc22",
                            "fullname": "Henrik",
                            "imgUrl": "https://robohash.org/7244993?set=set1",
                            "id": "7244993"
                        },
                        "txt": "We stayed at Christina´s place for two weeks and were happy with the flat. The location is good: close to metro, and also bakery, convenience store etc is near.\r\nExcellent restaurants also nearby.  "
                    },
                    {
                        "at": "2014-05-01T04:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fb07b",
                            "fullname": "Marie-Pierre",
                            "imgUrl": "https://robohash.org/5115465?set=set1",
                            "id": "5115465"
                        },
                        "txt": "Magnifique appartement, très calme dans un quartier sympathique. Boulangerie juste à côté, idéale le matin. Les enfants ont adoré!  Cristina et Yamila toujours à l'écoute par mail ou par tel. Nous gardons un excellent souvenir de ces vacances en famille à Barcelone. Un grand merci à nos hôtes. \r\nMarie-Pierre, Arnaud, Pierre et Benjamin"
                    },
                    {
                        "at": "2014-05-05T04:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fbb13",
                            "fullname": "Céline",
                            "imgUrl": "https://robohash.org/4125966?set=set1",
                            "id": "4125966"
                        },
                        "txt": "Espectacular!\r\nEl piso era grande, confortable, limpio, y muy bien equipado, sobre todo en la cocina. Es un piso luminoso con terracitas perfectas para comer fuera, y un silencia muy apreciable durante la noche, una maravilla.\r\nEl piso está super bien situado, hay un supermercado en frente y una panadería muy buena justo al lado, la acogida fue perfecta y la logística (entrega y recogida de la llave...) muy sencilla. Muy recomendable."
                    },
                    {
                        "at": "2014-05-08T04:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb401",
                            "fullname": "Véronique",
                            "imgUrl": "https://robohash.org/11540553?set=set1",
                            "id": "11540553"
                        },
                        "txt": "Réactive et bon contact téléphonique."
                    },
                    {
                        "at": "2014-06-17T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164faf30",
                            "fullname": "Thorsten",
                            "imgUrl": "https://robohash.org/9056447?set=set1",
                            "id": "9056447"
                        },
                        "txt": "The Hous is great. It´s a super cosy place in a nice neighborhood. You find evrerything you need in the House, plus you got two terraces and a padio.\r\nIt is super located, everything you need is close, Supermarket, Bakery and Restaurants just in front of the Door. Metro station around the corner also the placa espanya Montjuïc a few minutes walk away.\r\nYamila (friend of Christina) is a great host, she was super nice and open for every question we had. She also called us a taxi to take us to the airport at 5! in the morning.\r\nWe will for sure come back and book that place again.\r\nWould totally recommend that House for a great stay in Barcelona.\r\nThank you.\r\n \r\n"
                    },
                    {
                        "at": "2014-06-21T04:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbf72",
                            "fullname": "Birgit",
                            "imgUrl": "https://robohash.org/16129927?set=set1",
                            "id": "16129927"
                        },
                        "txt": "GREAT!!! Christina and Yamila are very hospitable and very helpful. \r\nThe flat was very nice and spacious, clean and outfitted with everything we needed. The flat is super located (metro station, supermarket, bakery, ...).\r\n\r\nWe will come back : )\r\nThank you!"
                    }
                ],
                "_id": "622f337a75c7d36e498aab05",
                "imgUrls": [
                    "028.jpeg",
                    "145.jpeg",
                    "094.jpeg",
                    "125.jpeg",
                    "102.jpeg"
                ]
            },
            {
                "name": "Spacious 3bdrm. Artsy and Perfect Location!",
                "summary": "Welcome to stay in my 3bed apartment. Its a rare gem in HK,  as its Huge compared to other Hk apts! Perfect for a few friends sharing or a family. Walk everywhere in Central in  few min. Soho, Escalator, Hollywood road, MTR. It’s walk up building! please check my profile, I have many reviews :)",
                "interaction": "I give my guests privacy but I'm always available for any questions or if anyone needs suggestions :)",
                "houseRules": "No parties or loud music after 10 No smoking inside  Take care of my place as ur own  Be nice and respectful to the neighbours around :)",
                "propertyType": "Apartment",
                "roomType": "Entire home/apt",
                "bedType": "Real Bed",
                "cancellationPolicy": "strict_14_with_grace_period",
                "capacity": 5,
                "bedrooms": 3,
                "beds": 3,
                "numOfReviews": 125,
                "amenities": [
                    "TV",
                    "Cable TV",
                    "Wifi",
                    "Air conditioning",
                    "Kitchen",
                    "Heating",
                    "Shampoo",
                    "Hangers",
                    "Hair dryer",
                    "Iron",
                    "Laptop friendly workspace"
                ],
                "host": {
                    "_id": "622f3404e36c59e6164fb603",
                    "fullname": "Melanie",
                    "location": "Seattle, Washington, United States",
                    "about": "Raised in the west, I decided to travel and work abroad for a few years. Working and backpacking away from home has helped me gain so much experience and insight from living away from home, I think everyone should try it! \r\n\r\nI love hosting! And I put my heart into it and always think about how I can make my place enjoyable and comfy.\r\nif you have any feedback I'd love to hear and learn how to grow from it.\r\n\r\nI can speak English and hope to make your stay as pleasant as possible :) We can definitely give you suggestions for eating, shopping, art and museums and also night life. Just ask!",
                    "responseTime": "within a few hours",
                    "thumbnailUrl": "https://a0.muscache.com/im/pictures/5db18be8-88b0-40d8-9960-46275d99ac3b.jpg?aki_policy=profile_small",
                    "pictureUrl": "https://a0.muscache.com/im/pictures/5db18be8-88b0-40d8-9960-46275d99ac3b.jpg?aki_policy=profile_x_medium",
                    "isSuperhost": false,
                    "id": "930612"
                },
                "address": {
                    "street": "Hong Kong, Hong Kong Island, Hong Kong",
                    "country": "Hong Kong",
                    "location": {
                        "lat": 114.15202,
                        "lan": 22.28582
                    },
                    "countryCode": "HK",
                    "city": "Hong Kong"
                },
                "id": "10840938",
                "bathrooms": 1,
                "price": 1146,
                "securityDeposit": 1500,
                "cleaningFee": 285,
                "extraPeople": 60,
                "reviewScores": {
                    "accuracy": 9,
                    "cleanliness": 9,
                    "checkin": 9,
                    "communication": 10,
                    "location": 10,
                    "value": 9,
                    "rating": 87
                },
                "reviews": [{
                        "at": "2016-02-01T05:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbd26",
                            "fullname": "Veronica",
                            "imgUrl": "https://robohash.org/10225425?set=set1",
                            "id": "10225425"
                        },
                        "txt": "Melanie was an amazing and friendly host! Super friendly, accommodating and quick to answer all my questions.\r\n\r\nThe location of her place is very convenient...only about a 5 min walk to the MTR, Soho and LKF. The space itself is extremely spacious for Hong Kong and not to mention super cute with a very artsy vibe. Absolutely loved the decor and you can really get a sense of who Melanie is from her lovely finishing touches. "
                    },
                    {
                        "at": "2016-02-10T05:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb34a",
                            "fullname": "Eunji",
                            "imgUrl": "https://robohash.org/22116383?set=set1",
                            "id": "22116383"
                        },
                        "txt": "위치는 소호에서 도보 3분거리. 숙소자체는 좋으나 동네 자체가 오래되서 밤에 귀가할 때 조금 어두웠음. 홍콩에서 보기 드물게 방3개인 집이라 가족들과 좁지 않게 지낼 수 있어 좋았음. 다만 뜨거운 물 쓰는게 조금 불편했고 건물이 오래되어서 바깥 소음이나 방음이 잘 안되는 게 단점이었으나 전반적으로 가격대비 너무 깔끔하고 좋은 숙소였음! \n\nWe checked in late at night but Melanie gave us all the information before arrival so we could check in easily on our own. If you once find this place, you will relalise how close it is from Soho, but getting here for the first time wasn't very easy for us. I stayed here with my husband and my brother's family and the place was spacious enough (considering its hongkong) for us all to hang around. You need to walk up to the 4th floor but wasn't a problme at all to us. \nWe had some issue about electricity but Melanie responded quickly and helped us sort out the problem. One thing we felt inconvenient was hot shower but we got used to it later. And, it was very considerate of Melanie to prepare three heaters for us. \nI highly recommend this place for a family or groups of 4-5 ppl and especially those who wish to enjoy the atmosphere of Soho area and lankwaifong. I and my husband went out for a drink every night and found awesome bars and restaurants. We could have done it easily as the place is so close to it. \n"
                    },
                    {
                        "at": "2016-02-12T05:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb4bc",
                            "fullname": "Sergio",
                            "imgUrl": "https://robohash.org/47448814?set=set1",
                            "id": "47448814"
                        },
                        "txt": "The apartment itself is nicely decorated and in good condition, with two good sized bedrooms, one bedroom with a tatami and also a sofa bed.  It is very centrally located so you can stroll to Central and Lan Kwai Fong very easily. We would recommend it."
                    },
                    {
                        "at": "2016-02-14T05:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb929",
                            "fullname": "Lusy",
                            "imgUrl": "https://robohash.org/30309397?set=set1",
                            "id": "30309397"
                        },
                        "txt": "We had SUCH a lovely stay at Melanie's apartment! This home is so clean and kept very nicely, we particularly loved the attention to detail with umbrellas, books, candles, hairdryers, etc. to make sure we felt at home! Thank you so much for letting us enjoy your place for the weekend :]]"
                    },
                    {
                        "at": "2016-02-18T05:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fbbd3",
                            "fullname": "Anthony",
                            "imgUrl": "https://robohash.org/7601463?set=set1",
                            "id": "7601463"
                        },
                        "txt": "Mel was extremely responsive with my super late booking. \r\nThe set of instructions she provided were more than adequate, but she even reached out on (Hidden by Airbnb) to ensure everything was understood. Would highly recommend Mel, and hope to stay in her huge place again soon"
                    },
                    {
                        "at": "2016-02-28T05:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb68b",
                            "fullname": "Salvatore",
                            "imgUrl": "https://robohash.org/13362622?set=set1",
                            "id": "13362622"
                        },
                        "txt": "Melanie welcomed me promptly and timely providing me all the needed info to enjoy my staying at her place. She replied all of my questions and let me feel welcome.\r\n\r\nThe apartment is spacious (rare size in HK!) and really clean (not usual too), comfortable for families.\r\nFurthermore, it's strategically located in the heart of Soho and HK.\r\n\r\nCleanliness of the main gate and stairs could be improved.\r\n\r\nGreat experience overall.\r\n"
                    },
                    {
                        "at": "2016-03-15T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164facd8",
                            "fullname": "Riikka",
                            "imgUrl": "https://robohash.org/29979454?set=set1",
                            "id": "29979454"
                        },
                        "txt": "Melanie oli ystävällinen ja avulias majoittaja. Hän antoi kohteesta tarkan kuvauksen ja lähetti etukäteen tarkan ja äärimmäisen kattavan tietopaketin. Asunto vastasi odotuksia täydellisesti ja oli todellakin tilava Hong Kongin mittakaavassa. Sijainti oli mitä loistavin!!!!! Asunto oli siisti, miellyttävä ja hyvin varusteltu. Internet toimi moitteettomasti. Suosittelen Melanien majoitusta lämpimästi kaikille. "
                    },
                    {
                        "at": "2016-03-20T04:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fb228",
                            "fullname": "David",
                            "imgUrl": "https://robohash.org/40018078?set=set1",
                            "id": "40018078"
                        },
                        "txt": "Melanie's home in Hong Kong is wonderful! Very convenient and accommodating - it was a great experience. Not to mention, Melanie is extremely helpful and provided some solid tips about seeing the city.  Her place is also very close to some delicious dim sum. I would recommend her place to anybody staying in the city. Thanks Melanie!"
                    },
                    {
                        "at": "2016-04-11T04:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb620",
                            "fullname": "Paul",
                            "imgUrl": "https://robohash.org/30302063?set=set1",
                            "id": "30302063"
                        },
                        "txt": "Melanie was very helpful when arriving and gave clear instructions on how to access the apartment. The apartment was clean and comfortable and as shown in the photos. The place was very spacious for four of us and the location was perfect. Would definitely consider staying here again."
                    },
                    {
                        "at": "2016-04-24T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fabd9",
                            "fullname": "Maria",
                            "imgUrl": "https://robohash.org/16114855?set=set1",
                            "id": "16114855"
                        },
                        "txt": "Melanie's home was the nicest place we stayed in Hong Kong, she was thorough and gave us excellent directions for easy access to her apartment. Neighborhood is full of trendy and great restaurants and bars and easy access to the MTR to explore other areas of the city. Highly recommend and would stay again on my next visit."
                    },
                    {
                        "at": "2016-05-09T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fae68",
                            "fullname": "Jing",
                            "imgUrl": "https://robohash.org/14350554?set=set1",
                            "id": "14350554"
                        },
                        "txt": "房间离上环地铁站很近,不管是往返机场还是市内出行都很方便｡房间装修和设施虽然简陋,但需要的东西基本都有｡最大的缺点是房间位于五楼,对于我这样家庭出游不太合适,抬着几个行李箱和宝宝推车爬楼梯的经历像一场噩梦｡推荐结伴出游的年轻人居住,性价比蛮高｡"
                    },
                    {
                        "at": "2016-05-22T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb790",
                            "fullname": "Dx",
                            "imgUrl": "https://robohash.org/43463016?set=set1",
                            "id": "43463016"
                        },
                        "txt": "The bed caused skin itches, could hardly sleep. \n\nApartment is very artistic, looks very comfortable. Good location. Toilets and showers in great condition. "
                    },
                    {
                        "at": "2016-05-27T04:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb412",
                            "fullname": "Simon",
                            "imgUrl": "https://robohash.org/4152981?set=set1",
                            "id": "4152981"
                        },
                        "txt": "I would highly recommend staying at Melanie's apartment in Sheung Wan, near the famous Lang Kwai Fong area of Hong Kong island. I've stayed in many overpriced, cramped hotels and hostels in Hong Kong over the years and this was my first time opting for AirBnB instead. I was not disappointed. Melanie's apartment is very very spacious, has a lot of character and is super comfortable. It's also fantastic value for money if a few of you are sharing. Her instructions of how to find and access the building were spot on, very helpful indeed. \r\n\r\nWe'll be back for sure!"
                    },
                    {
                        "at": "2016-06-13T04:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fbbcf",
                            "fullname": "Rachel",
                            "imgUrl": "https://robohash.org/15625834?set=set1",
                            "id": "15625834"
                        },
                        "txt": "The check in instructions were clear and easy to get, I found my way there easily. The climb up wasn't that bad. When I checked in, the house was in a huge mess as the previous guest had trashed the listing and looked like they had a party there. Melanie was easily reachable and wasn't fazed much when I showed her pictures. Instead, she took it like a champ and pulled a miracle by getting her cleaner to come at midnight. I was calling Airbnb to move my reservation elsewhere but her ability to rectify everything in record time was all I could ask for. The apartment looked great for photos after the massive cleanup! Thank you!"
                    },
                    {
                        "at": "2016-06-19T04:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbd55",
                            "fullname": "Alex",
                            "imgUrl": "https://robohash.org/4395210?set=set1",
                            "id": "4395210"
                        },
                        "txt": "Fantastic apartment decorated with taste. BUT unfortunately experience was spoilt by deafening construction noise from the apartment on 3rd floor. If you don't plan on spending time in the apartment from 8am to 5pm you'll prob love your time."
                    },
                    {
                        "at": "2016-07-10T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb802",
                            "fullname": "嘉楠",
                            "imgUrl": "https://robohash.org/71291052?set=set1",
                            "id": "71291052"
                        },
                        "txt": "It really has a perfect location,and the rooms are very clean and tidy.Thanks,Melanie!"
                    },
                    {
                        "at": "2016-07-13T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb8f1",
                            "fullname": "Dan",
                            "imgUrl": "https://robohash.org/8945756?set=set1",
                            "id": "8945756"
                        },
                        "txt": "Melanie's place was great! The location is superb and her directions were very accurate and easy to follow. Communication was great. Construction site nearby was a bit noisy but we all slept fine. Convenience store on the corner very handy.\n\nThe place was spacious and clean. Shower had good flow and no trouble with hot water. Fridge small but all we needed. Plenty of markets and eateries around and the MTR (train) station is only a short walk and one stop to central.\n\nWe're able to drop our bags slightly earlier which was also very helpful in the heat.\n\nI would definitely stay at Melanie's place again.\n\nCheers for having us."
                    },
                    {
                        "at": "2016-07-17T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb83d",
                            "fullname": "Brad",
                            "imgUrl": "https://robohash.org/1338187?set=set1",
                            "id": "1338187"
                        },
                        "txt": "Melanie's place was great, and as advertised. Very spacious for Hong Kong and close to everything. Had a bit of trouble getting in with the key missing from the lock box upon arrival but her assistant Elvie came to the rescue and it was a non issue. Would definitely stay there again given how convenient and spacious it was.  "
                    },
                    {
                        "at": "2016-07-29T04:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fba77",
                            "fullname": "Jirat-Orn",
                            "imgUrl": "https://robohash.org/2092204?set=set1",
                            "id": "2092204"
                        },
                        "txt": "It was easy to find, not far from E2 exit of the MTR, but the place was on 5 floor (first floor has no room so actually didn't count but you have to gone up 5 floor by stair). The place was quite and nice, clean and comfy just like the picture. Have a bit problems with the light inside the room but she response quick and ask for the helper to come. Thanks to the place we have a nice sleep. P.S. The shop of King fish ball was right beside in front the corner of the place, not bad to have a try."
                    },
                    {
                        "at": "2016-07-31T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb68b",
                            "fullname": "Salvatore",
                            "imgUrl": "https://robohash.org/13362622?set=set1",
                            "id": "13362622"
                        },
                        "txt": "Melanie was super supporting in sharing all the needed details to make our experience just great! \r\n\r\n"
                    }
                ],
                "_id": "622f337a75c7d36e498aab1f",
                "imgUrls": [
                    "012.jpeg",
                    "135.jpeg",
                    "145.jpeg",
                    "117.jpeg",
                    "022.jpeg"
                ]
            },
            {
                "name": "Private Entrance - Backyard Summer Dining - Enjoy",
                "summary": "If you appreciate the natives in the outer boroughs, we appreciate you as guest.  Brooklyn has become very popular among Brooklynites and new comers.  While visiting NYC, if you are looking for crowds, museums and shopping, visit Manhattan.  Welcome!",
                "interaction": "We respect your privacy so will not interfere with your visit. We are not offering a hotel experience, yet a friendly and family environment.  (Please do not bring people to hang out, party or sleepovers - each additional person will be charged a nightly rate whether visiting or staying).",
                "houseRules": "No smoking, No pets.  Sanitary napkins, Tampons and Bounty napkins must be placed in the trash, NOT IN TOILET BOWL.  PLEASE DO NOT use hair dye/color.  Turn off lights, air conditioner and television when out enjoying the day.  Be sure doors and gates in front and back are locked when out of the house. Throw out trash and place in recycle bins.  Leaving the apartment untidy or dirty will incur a cleaning fee.  PLEASE RESPECT THE HOME AS IF IT WAS YOUR HOME WITH CLEANLINESS AND CARE OF BELONGINGS!  ALSO, NOTIFY HOST WITH YOUR DEPARTURE TIME - PLEASE DO NOT LEAVE WITHOUT NOTICE.  Departing after check out time (noon) will incur the daily rate.",
                "propertyType": "Townhouse",
                "roomType": "Entire home/apt",
                "bedType": "Real Bed",
                "cancellationPolicy": "strict_14_with_grace_period",
                "capacity": 2,
                "bedrooms": 1,
                "beds": 2,
                "numOfReviews": 184,
                "amenities": [
                    "TV",
                    "Cable TV",
                    "Internet",
                    "Wifi",
                    "Air conditioning",
                    "Kitchen",
                    "Buzzer-wireless intercom",
                    "Heating",
                    "Family-kid friendly",
                    "Smoke detector",
                    "Carbon monoxide detector",
                    "First aid kit",
                    "Safety card",
                    "Fire extinguisher",
                    "Essentials",
                    "Shampoo",
                    "Hangers",
                    "Hair dryer",
                    "Iron",
                    "translation missing: en.hosting_amenity_50",
                    "Private entrance",
                    "Host greets you"
                ],
                "host": {
                    "_id": "622f3405e36c59e6164fb663",
                    "fullname": "Michelle",
                    "location": "New York, New York, United States",
                    "about": "Easy, breezy and enjoy having fun with friends and great people.  Appreciate a comfortable, clean home.  Favorite past time is reading or a good movie.  Family and my time, most important.",
                    "responseTime": "within an hour",
                    "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/b0eef5b1-d155-4346-9a84-05ddc4d2b14b.jpg?aki_policy=profile_small",
                    "pictureUrl": "https://a0.muscache.com/im/pictures/user/b0eef5b1-d155-4346-9a84-05ddc4d2b14b.jpg?aki_policy=profile_x_medium",
                    "isSuperhost": true,
                    "id": "5887081"
                },
                "address": {
                    "street": "Brooklyn, NY, United States",
                    "country": "United States",
                    "location": {
                        "lat": -73.95321,
                        "lan": 40.69034
                    },
                    "countryCode": "US",
                    "city": "New York"
                },
                "id": "1092760",
                "bathrooms": 1,
                "price": 110,
                "securityDeposit": 400,
                "cleaningFee": 40,
                "extraPeople": 15,
                "reviewScores": {
                    "accuracy": 10,
                    "cleanliness": 10,
                    "checkin": 10,
                    "communication": 10,
                    "location": 10,
                    "value": 10,
                    "rating": 96
                },
                "reviews": [{
                        "at": "2013-08-17T04:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fb0d4",
                            "fullname": "Wendy",
                            "imgUrl": "https://robohash.org/4489874?set=set1",
                            "id": "4489874"
                        },
                        "txt": "Michelle was a very considerate, responsive host. The apartment is lovely and very comfortable and was furnished with everything we needed. We had a great stay."
                    },
                    {
                        "at": "2013-08-28T04:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbf5d",
                            "fullname": "Eric",
                            "imgUrl": "https://robohash.org/6672287?set=set1",
                            "id": "6672287"
                        },
                        "txt": "Séjour merveilleux chez Michelle qui est une hôte adorable, le logement etait vraiment super... très propre, , fonctionnel,petit plus le rez de jardin ou l on peux manger et profiter des petits oiseaux car nous sommes à new york , mais vraiment au calme,station de metro à deux (Website hidden by Airbnb) recommande vraiment cette adresse, nous sommes venus avec nos deux enfants...\r\nMerci michelle de nous avoir permis de passer un si bon voyage,!"
                    },
                    {
                        "at": "2013-09-21T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb829",
                            "fullname": "Julia & Mike & Pepper",
                            "imgUrl": "https://robohash.org/6727618?set=set1",
                            "id": "6727618"
                        },
                        "txt": "I booked Michelle's private Brooklyn home for my retired parents, who were visiting me in LA from overseas and wanted to travel to New York for a few days. My parents returned from New York raving about Michelle, her graciousness and her beautiful home including a private outside patio! The apartment was attractively decorated and very clean with all the key amenities including coffeemaker, TV, internet, and even fresh fruit! The supermarket was conveniently around the corner, and my dad said he chatted with locals as he walked to the bakery to get bread each morning. My parents said it was like home away from home. They highly recommend Michelle as a host, and I can't wait to visit myself. Michelle, thank you for making my parents' New York trip so special. You and your family are welcome to visit us in Long Beach, CA anytime. \r\n\r\nMichelle, ist eine wunderbare und nette Gastgeberin.\r\nBei fragen und Tipps stets zur stelle und unglaublich hilfsbereit.\r\nDas Appartement ist sehr geräumig und voll ausgestattet.\r\nDie Lage ist erstklassig, U-Bahn und Supermarkt nicht mehr als 150 Meter entfernt.\r\nWir habe uns sehr wohl gefühlt und können uns nicht beklagen. Es ist jedem zu empfehlen der New York als Stadt erkunden will.\r\nJederzeit wieder!!\r\n"
                    },
                    {
                        "at": "2013-09-29T04:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fb035",
                            "fullname": "Ilya",
                            "imgUrl": "https://robohash.org/2759351?set=set1",
                            "id": "2759351"
                        },
                        "txt": "Very nice and big enough basement apartment with two rooms. Clean and nicely furnished with a good wide bed in one room and a sofa in kitchen, with all necessary dishes and coffee machine (Michelle even provided us with coffee for it) That was much more than enough for two persons. Also we used bbq in the court which also was great. Michelle was hospitable enough to meet us in the middle of the night!  We didn`t have any problems at all living in such kind of apartment. Should notice that the connection to Mahattan is a little complicated given the G metro line which is not very frequent. But in general the enviroment is quite ok with nice dominican dely on the corner of the street (highly recomended!) "
                    },
                    {
                        "at": "2013-10-02T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fac89",
                            "fullname": "Marcel",
                            "imgUrl": "https://robohash.org/6108605?set=set1",
                            "id": "6108605"
                        },
                        "txt": "Michelle was a nice person and really easy to communicate. We had a great time in this big apartment and no problem with to get into the city."
                    },
                    {
                        "at": "2013-10-05T04:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fb1fb",
                            "fullname": "Gabriel",
                            "imgUrl": "https://robohash.org/9039463?set=set1",
                            "id": "9039463"
                        },
                        "txt": "Very nice place!\r\nMichelle is very friendly, helpfull and a nice person to chat with.\r\nThe place is very clean, homy feeling. The Subway is less than 100 yards away (about 1/2 hour ride from midtown Manhattan) which is VERY convenient. Neighbourhood ok. At the end of the day is much nicer to come to instead of a \"cold\" hotel room! The back yard is great for morning / evening coffe or even BBQ (the grill is already there).\r\nThank you Michelle  :-)\r\nתודה רבה (Hebrew)"
                    },
                    {
                        "at": "2013-10-13T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb7c7",
                            "fullname": "Roberta",
                            "imgUrl": "https://robohash.org/7527666?set=set1",
                            "id": "7527666"
                        },
                        "txt": "Michelle is a fantastic host, she made us  feel very welcome.\r\nThe place was clean and perfectly organized,  quiet at night, 4 very comfortable sleeping places, safe neighborhood, we had everything we needed. the subway is literally 1minute walk from the apartment, you get to Manhattan in 20 minutes. There are also buses that take you in no time to down town Brooklyn and Williamsburg. Supermarket is around the corner. Bakery for great breakfasts and deliciuos donuts place at 2 minutes walk from home.\r\nThe back garden is also very nice, we were too busy walking all day long, but it gave us a sense of big space, on a nice day you could spend time outside and enjoy a private corner of open air.\r\nIf I have the chance to go to New York again, I will surely go back to Michelle!"
                    },
                    {
                        "at": "2013-10-16T04:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164faf5e",
                            "fullname": "Arnaud",
                            "imgUrl": "https://robohash.org/5053776?set=set1",
                            "id": "5053776"
                        },
                        "txt": "Everything was great in your apartment. Nice place, nice neighborhood with a subway station very close to the apartment. Thank you Michelle ! :-) "
                    },
                    {
                        "at": "2013-11-02T04:00:00.000Z",
                        "by": {
                            "_id": "622f3408e36c59e6164fc085",
                            "fullname": "Yol",
                            "imgUrl": "https://robohash.org/9079030?set=set1",
                            "id": "9079030"
                        },
                        "txt": "Notre expérience à l'appartement de Michelle fut merveilleuse! J'y suis aller avec mes parents, qui n'avaient jamais mis les pieds à Brooklyn, et ils furent enchantés par la proximité du métro, de l'épicerie, par la grandeur de l'appartement et ses facilités. Je recommande fortement l'appartement de Michelle, et j'y retournerai assurément à mon prochain séjour à New York!\n-----\nOur experience at Michelle's apartment was wonderful! I'm going with my parents, who had never been to Brooklyn, and they were delighted with the nearby subway, grocery, the size of the apartment and its facilities. I highly recommend the Michelle's apartment, and I certainly return on my next trip to New York!\nYol\nYol"
                    },
                    {
                        "at": "2013-11-21T05:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fc040",
                            "fullname": "Mara",
                            "imgUrl": "https://robohash.org/8579265?set=set1",
                            "id": "8579265"
                        },
                        "txt": "Io e la mia famiglia siamo stati 20 giorni nell'appartamento di Michelle e siamo stati benissimo. Appartamento con ingresso indipendente, pulito, ben tenuto e con tutto il necessario per 4 persone. I letti sono veramente comodi (non si trovano facilmente nelle case per vacanze). Vicinissimo alla metropolitana, si raggiunge Manhattan in poco tempo, e vicino ad alcuni market, per cui fare la spesa è stato facile. La zona è abbastanza tranquilla, si rientrava anche a sera tardi ma non abbiamo avuto nessun problema. Michelle è una persona molto simpatica, molto disponibile e molto discreta. consiglierei sicuramente di passare una vacanza nel suo appartamento. Grazie ancora Michelle ...e speriamo arrivederci!! I love NY"
                    },
                    {
                        "at": "2013-11-29T05:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fafdc",
                            "fullname": "Dovile",
                            "imgUrl": "https://robohash.org/8080976?set=set1",
                            "id": "8080976"
                        },
                        "txt": "Michelle was great host for my parents and very helpful in arranging taxi, showing shops and answering questions about New York. Her flat located just next to the metro station, which made it easy to get to the downtown. Had some minor problems with the radiator but Michelle took care of that so were no bigger issues. Recommended! "
                    },
                    {
                        "at": "2013-12-05T05:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbceb",
                            "fullname": "Mert",
                            "imgUrl": "https://robohash.org/9190807?set=set1",
                            "id": "9190807"
                        },
                        "txt": "This was my first time to use the Airbnb and I'm glad I chose Michelle and her house. \r\nThe house is as it's seen on the pictures. It is pretty good size for three people. My parents slept on the bed and I slept on the couch. I am 180 cm (5' 11'') and fit on the couch and it was pretty comfortable.\r\nWhen we arrived Michelle's house she greeted us right away, took her time to explain how to commute, where to eat and what to do in the city. \r\nThe location of house is pretty good. It takes 20-30 min with metro to Manhattan downtown, depends on which line you use. You can also take the metro from JFK, otherwise the cab costs  around $50. In the house everything was clean and neat. She also provided us towels for shower etc. Besides that, whenever I texted to Michelle she responded in timely manner, which made everything easier.\r\nHonestly, our overall experience was much better than I expected.  Me and my family had a very good time in Michelle's house and NY. If one day I go back to NY, I know where I should stay. \r\n"
                    },
                    {
                        "at": "2013-12-18T05:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fba96",
                            "fullname": "Annette",
                            "imgUrl": "https://robohash.org/903552?set=set1",
                            "id": "903552"
                        },
                        "txt": "We spent a wonderful week at Michelle's place. She was very nice and took care of what ever we needed. The apartment is just 2 min from the subway which helped us get to Manhattan quickly."
                    },
                    {
                        "at": "2013-12-21T05:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fbbc4",
                            "fullname": "Ivan",
                            "imgUrl": "https://robohash.org/9952299?set=set1",
                            "id": "9952299"
                        },
                        "txt": "Michelle is really nice and her place is very cozy. This was my first airbnb experience and I enjoyed it a lot. Her service is much better than anything you would get at a hotel for a much better price. She gave us a recommendation on where to get breakfast that turned out great. The place is very clean and neatly decorated. It's literally right off the subway station, so that's a huge plus. We also met her mother, who is a fascinating woman. I highly recommend her place, if you are looking to visit the area.  \r\n-- Later Edit:\r\nI should mention that her internet is very fast. I don't know what ISP she uses, but it was a joy to go back to a temporary accommodation and know that you are well connected while traveling. I'm not sure of the exact setup, but it appeared that we had a separate modem and router just for us. This was a huge relief. Michelle had the SSID and password printed and ready for guests, so even if you forget to ask, you would still find them in the apartment. Overall, things were very well thought out before hand and Michelle was very proactive with tiny details like this that make all the difference. This was very surprising to me knowing that I'm dealing with an individual and not a company.   "
                    },
                    {
                        "at": "2014-01-01T05:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fb085",
                            "fullname": "Aurelie",
                            "imgUrl": "https://robohash.org/8672189?set=set1",
                            "id": "8672189"
                        },
                        "txt": "Michelle was very nice and her flat is very confortable, well located with the subway at the end of the street. I recommend her. Thanks a lot Michelle and see you later."
                    },
                    {
                        "at": "2014-01-09T05:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fae32",
                            "fullname": "Anton",
                            "imgUrl": "https://robohash.org/9849330?set=set1",
                            "id": "9849330"
                        },
                        "txt": "Michelle was an outstanding host and very helpful, apartment clean and convenient."
                    },
                    {
                        "at": "2014-01-21T05:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fae8d",
                            "fullname": "Kyle",
                            "imgUrl": "https://robohash.org/10974375?set=set1",
                            "id": "10974375"
                        },
                        "txt": "Amazing 4 day stay with Michelle in Brooklyn! We arrived a little early but she was still able to find time to accommodate us...arriving with fresh fruit and water for us. The apartment is amazing, plenty of room with all the comforts you could ask for (small kitchen/TV with cable/wifi). Easy access to trains and transportation, with many restaurants near by. After this stay, I don't think I'll be booking a traditional hotel in NYC again. Highly recommended!! Thanks again Michelle!"
                    },
                    {
                        "at": "2014-02-26T05:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fadd9",
                            "fullname": "Sarah",
                            "imgUrl": "https://robohash.org/5247367?set=set1",
                            "id": "5247367"
                        },
                        "txt": "Très joli appartement dans Brooklyn! J'ai été agréablement surprise :) ! Nous y avons passé 4 nuits, et l'appart est parfait pour accommoder de 2 à 4 personnes. Très sympa de pouvoir rentrer pour prendre un verre ou déjeuner \"à la maison\". \r\nLe quartier n'est pas le plus trendy de brooklyn mais le métro est littéralement à 1 minute à pied! Michelle était charmante et tout était parfait! Et en plus, aucun problème pour stationner la voiture dans la rue, devant la maison! Merci!!!"
                    },
                    {
                        "at": "2014-03-04T05:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbe48",
                            "fullname": "Francisco",
                            "imgUrl": "https://robohash.org/10988436?set=set1",
                            "id": "10988436"
                        },
                        "txt": "Hermoso lugar, muy limpio. Michelle nos ayudó en todo momento y nos ofreció dejar las valijas gratuitamente unas horas aún cuando ya había pasado el tiempo del check out, el lugar es más lindo que en las fotos, y a muy pocas estaciones del downtown de Manhattan, 100% recomendable!\r\nA pesar de que había nieve no se sentía nada de frío, excelente calefacción. El patio trasero era muy bonito y se veían ardillas!\r\nHay supermercado y KFC muy cerca, y es cómodo que esté a metros del subte.\r\n\r\nMichelle is a great  hostess, she helped us with everything and even oferred to keep our lugagge some hours after the check out. \r\nThe place is perfect, there are groceries, KFC, subway station, and it´s 20-30 mins from downtown Manhattan! \r\nBeautiful place, very comfy and cozy, everything was clean. We couldn´t enjoy the backyard because the chill, but it was awesome! and there were some lovely squirrels! We want to come back some year, and sure will recommend it to our friends"
                    },
                    {
                        "at": "2014-03-15T04:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb3a3",
                            "fullname": "Yann",
                            "imgUrl": "https://robohash.org/11182347?set=set1",
                            "id": "11182347"
                        },
                        "txt": "Nous rentrons d'un séjour de 8 jours à NYC où nous avons séjourn (Website hidden by Airbnb) Adultes et 2 ados) chez Michelle début mars. nous en sommes ravis malgré des températures froides.\r\n==)positifs: \r\nBon compromis rapport qualité / prix. La proximité avec une station de métro est un plus ainsi que celle de l'épicerie permettant de faire les petites courses pour les repas pris au gite. Michelle est extrêmement accueillante et serviable. \r\nl'appartement est simple et très propres. 4 vrai lits confortables. \r\n==)négatifs:\r\nbien que situé dans un quartier + calme, la chambre donne sur la rue, et les nuits peuvent être difficiles pour les oreilles sensibles. le métro qui passe dessous est audible, tout comme les avions. mais à New York , il est difficile de trouver une endroit très calme. NEW YORK reste un environnement urbain et donc globalement bruyant, autant en avoir conscience. \r\nPour une famille de 4, les lits enfants sont dans la pièce qui sert de coin jour. Une table et chaises pliantes nécessitent d'être pliés  pour installer le 4ième lit et inversement, plier le lit pour prendre les repas. Pour les français que nous sommes, la table est aussi importante que le lit. ça peut être un problème. \r\nPeu de vaisselle ( verres en plastique) ce qui est un peu dommage mais ça reste un détail.\r\nMais quand on vient à New York, ce n'est pas pour une ballade gastronomique. Nous recommandons vraiment cette adresse. Très bon compromis.\r\nLa cours arrière sera appréciable pour les périodes + douces.\r\n\r\nEnglish comments:\r\nJust returned from NYC where we stayed with our 2 teenagers in Michelle's appartement. We are really delighted .\r\n\r\n==)positives:\r\nGood compromise quality / price ratio . Proximity to a metro station is a must as well as with the grocery store allowing some errands for meals at the appartement. really practical, opened until 21h. Michelle is extremely friendly and helpful.\r\nthe appartment is simple but  very clean with 4 real comfortable beds.\r\n\r\n==)negatives:\r\nAlthough located in a quiet neighborhood, the parent room is overlooking the street, and the nights can be difficult for sensitive ears. Subway is audible,as well as stay & trucks in the street. But to moderate this aspect,  in New York, it's difficult to find a quiet place because it remains a generally noisy urban environment as knowledge.\r\nFor a family of 4, children beds are in the main room. A table and chairs need to be folded to open beds and vice versa, folding bed for meals. it could be a problem.\r\nVery few dishes ( plastic glasses ) which could be improved but it's still a detail.\r\n\r\nBut when we come to visit New York, it is not for gastronomic ballad, and it's important  to find a confortable & clean area. The backyard could be pleasant when the weather allows to use it. Unfortunatelly for us it's was too cold begining of march.\r\nWe really recommend this address.\r\nMany thanks to Michelle.\r\n\r\nPascale et Yann."
                    }
                ],
                "_id": "622f337b75c7d36e498aabbc",
                "imgUrls": [
                    "036.jpeg",
                    "008.jpeg",
                    "066.jpeg",
                    "072.jpeg",
                    "122.jpeg"
                ]
            },
            {
                "name": "Tamarama Penthouse apartment",
                "summary": "If you want to be close by Tamarama and Bondi, this is the Beach Pad for you. Tucked away in a quiet cul-de-sac and only a stone's throw to the beach they call \"Glamarama\" and minutes walk away from Bondi and Bronte Beaches.",
                "interaction": "I am happy to assist you during your stay. Just give me a hola on the mobile should you need anything.",
                "houseRules": "Respect our neighbours (no parties or loud music late at night), smoking on only the balcony only and keep the apartment clean and tidy. Treat the place as if it were your own.",
                "propertyType": "Apartment",
                "roomType": "Entire home/apt",
                "bedType": "Real Bed",
                "cancellationPolicy": "strict_14_with_grace_period",
                "capacity": 7,
                "bedrooms": 3,
                "beds": 3,
                "numOfReviews": 27,
                "amenities": [
                    "TV",
                    "Cable TV",
                    "Wifi",
                    "Air conditioning",
                    "Kitchen",
                    "Heating",
                    "Family-kid friendly",
                    "Hair dryer",
                    "Smoke detector",
                    "Fire-extinguisher",
                    "Free parking on premises",
                    "Essentials",
                    "Washer",
                    "Shampoo",
                    "24-hour check-in",
                    "Hangers",
                    "Hair dryer",
                    "Iron",
                    "Laptop friendly workspace",
                    "Private entrance",
                    "Hot water",
                    "Bed linens"
                ],
                "host": {
                    "_id": "622f3402e36c59e6164fabfe",
                    "fullname": "Lizzy",
                    "location": "Sydney, New South Wales, Australia",
                    "about": "I am a Executive Producer based in Sydney that works in advertising and cross-media entertainment.\r\n",
                    "responseTime": "within an hour",
                    "thumbnailUrl": "https://a0.muscache.com/im/users/118676/profile_pic/1417000371/original.jpg?aki_policy=profile_small",
                    "pictureUrl": "https://a0.muscache.com/im/users/118676/profile_pic/1417000371/original.jpg?aki_policy=profile_x_medium",
                    "isSuperhost": true,
                    "id": "118676"
                },
                "address": {
                    "street": "Tamarama, NSW, Australia",
                    "country": "Australia",
                    "location": {
                        "lat": 151.26982,
                        "lan": -33.89741
                    },
                    "countryCode": "AU",
                    "city": "Sydney"
                },
                "id": "12098138",
                "bathrooms": 2,
                "price": 225,
                "securityDeposit": 2000,
                "cleaningFee": 200,
                "extraPeople": 20,
                "reviewScores": {
                    "accuracy": 10,
                    "cleanliness": 10,
                    "checkin": 10,
                    "communication": 10,
                    "location": 10,
                    "value": 10,
                    "rating": 99
                },
                "reviews": [{
                        "at": "2016-12-07T05:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164faefe",
                            "fullname": "Andy",
                            "imgUrl": "https://robohash.org/10999931?set=set1",
                            "id": "10999931"
                        },
                        "txt": "Lizzy's Tamarama pad is a truly outstanding property.  It's amazingly well equipped, spacious, with stunning outlook (from an enormous terrace) and its beautifully maintained.  Lizzy is an absolute pleasure to deal with.  This is a unique property with a wonderful relaxed feel to it.  Also a perfect place to get some serious work done - its quite inspiring."
                    },
                    {
                        "at": "2016-12-27T05:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbd9e",
                            "fullname": "Zosha",
                            "imgUrl": "https://robohash.org/4351976?set=set1",
                            "id": "4351976"
                        },
                        "txt": "Lizzy was the best host, and we fell in love with her beautiful home in the best spot in Sydney.  \nHer home is beautifully equipped with everything you need for a beach holiday, and Lizzy is just downstairs if you need anything. Tamarama beach is literally a 2 minute walk, and our kids spent a lot of time playing in the grassy patch if they weren't catching waves! We have had the best holiday and will definitely be back. \n "
                    },
                    {
                        "at": "2017-02-28T05:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb60e",
                            "fullname": "Anna",
                            "imgUrl": "https://robohash.org/4740734?set=set1",
                            "id": "4740734"
                        },
                        "txt": "What a place!! What a host!! It s a dream, watching the beach earing the see lying on a dayboat bed. The place is huge and very close to amazing beaches and beautiful costal promenades... lizzie was a super host, very helpfull and carefull about us having a good time. \nThe terrasse is superb\nThis place is marvellous!! We had a fantastic family time there we wont forgett"
                    },
                    {
                        "at": "2017-03-01T05:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb9bc",
                            "fullname": "Johnny",
                            "imgUrl": "https://robohash.org/61652794?set=set1",
                            "id": "61652794"
                        },
                        "txt": "The big question for me is would I want to stay here again, and the answer is yes - in a heartbeat.\n\nTo watch the sun rise over Tamarama beach from the comfort of all the cushions in the 'boat' in the sitting room was a delight. Not an early riser? Don't worry, the lorikeets will have you up in plenty of time....!"
                    },
                    {
                        "at": "2017-04-15T04:00:00.000Z",
                        "by": {
                            "_id": "622f3406e36c59e6164fb9e0",
                            "fullname": "Leigh",
                            "imgUrl": "https://robohash.org/124315236?set=set1",
                            "id": "124315236"
                        },
                        "txt": "Set between Bondi beach and Bronte beach which are easy to walk to. Superb local beach for family and easy to grab an uber to the city. really enjoyed the location and weather."
                    },
                    {
                        "at": "2017-07-09T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164facfd",
                            "fullname": "Luz",
                            "imgUrl": "https://robohash.org/129991448?set=set1",
                            "id": "129991448"
                        },
                        "txt": "This place is pure magic! I had the most wonderful time with family and we had everything we needed in the house. The location the quiet and friiendly neighbourhood and the spectacular view of the ocean day and night makes this place a MUST to experience. Add to that a gracious host to welcone you and who is always around to assist. Highly recommended for families!"
                    },
                    {
                        "at": "2017-08-15T04:00:00.000Z",
                        "by": {
                            "_id": "622f3403e36c59e6164fb055",
                            "fullname": "Emma",
                            "imgUrl": "https://robohash.org/20784540?set=set1",
                            "id": "20784540"
                        },
                        "txt": "We had an fantastic stay in Lizzy's apartment. The location was excellent and Lizzy was so helpful and accommodating (making sure we had some breakfast provisions after we arrived late at night which was so very much appreciated). The apartment was more than spacious enough for our family of 5. The worst thing about this apartment was having to leave those amazing views behind when we left! I would definitely recommend this apartment to anyone else and would stay here again."
                    },
                    {
                        "at": "2017-09-05T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb695",
                            "fullname": "Michael",
                            "imgUrl": "https://robohash.org/44949?set=set1",
                            "id": "44949"
                        },
                        "txt": "Great place right on Tamara Beach. Very cosy and great host who kept in contact prior and through our visit making it very comfortable for us. Easy check in, nice walking areas & very close to cafe's Bondi and surrounding beaches, Bondi Junction for shopping and an easy drive to City. Big spacious apartment with beautiful views and good entertaining areas. And a nice day bed (boat) overlooking beach for the perfect afternoon nap."
                    },
                    {
                        "at": "2017-10-09T04:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb493",
                            "fullname": "Reiko",
                            "imgUrl": "https://robohash.org/139076135?set=set1",
                            "id": "139076135"
                        },
                        "txt": "We could have really beautiful time with my family in Lizzy's apartment.\nThe view was so wonderful that we enjoyed day and night at balcony.\nFor my 3 years old baby,everything is perfect. We wanna be back someday.\nWe really appreciate Lizzy's kindness and helpfulness.\nThank you for everything."
                    },
                    {
                        "at": "2017-12-12T05:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbfe1",
                            "fullname": "Lucas",
                            "imgUrl": "https://robohash.org/7562851?set=set1",
                            "id": "7562851"
                        },
                        "txt": "This is a fantastic apartment. The view is to die for. It’s very large. It has great facilities. And Lizzy is really helpful. We couldn’t have asked for a better place to stay. We came with 2 very small kids looking for a chilled out holiday in a cool area - this was perfect. Can’t wait to come back."
                    },
                    {
                        "at": "2017-12-21T05:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb99b",
                            "fullname": "Hamish",
                            "imgUrl": "https://robohash.org/826010?set=set1",
                            "id": "826010"
                        },
                        "txt": "Lizzy's place is fantastic! Beautiful view of Tamarama beach and only minutes walk from lots of shops and restaurants on Bondi road. Apartment is full of beautiful touches. Highly recommended!"
                    },
                    {
                        "at": "2018-01-06T05:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb82f",
                            "fullname": "Josh",
                            "imgUrl": "https://robohash.org/60708104?set=set1",
                            "id": "60708104"
                        },
                        "txt": "Great host, hospitality and place to stay at. We had a group of 5 and there was plenty of room. Would definitely recommend for anyone looking to visit Sydney and the eastern beaches.\nThanks Lizzy!"
                    },
                    {
                        "at": "2018-01-14T05:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb8d8",
                            "fullname": "Sarah",
                            "imgUrl": "https://robohash.org/603099?set=set1",
                            "id": "603099"
                        },
                        "txt": "If you’re looking for a truly magical stay in Tama this is the place. During our week long stay we never wanted to leave the apartment that was peaceful and zen like. We enjoyed our mornings checking the surf from the balcony and then walking barefoot to the beach for multiple swims. \n\nTruly it’s a slice of heaven."
                    },
                    {
                        "at": "2018-02-25T05:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb959",
                            "fullname": "Maysa",
                            "imgUrl": "https://robohash.org/3221747?set=set1",
                            "id": "3221747"
                        },
                        "txt": "Lizzys house is an amazing spot in sydney.\nTamarama is so nice and close to bronte pool that i personally lovee\nAlso lizZy have alot of details with us. She is always responding in a small time!\nThe house is just perfect!\nWe are looking forward to come back\nI really love this place and fully recomend it!!!!"
                    },
                    {
                        "at": "2018-03-17T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fad04",
                            "fullname": "Olivia",
                            "imgUrl": "https://robohash.org/39669237?set=set1",
                            "id": "39669237"
                        },
                        "txt": "Such a wonderful stay! Lizzy’s apartment is the best place to  stay in the Eastern Suburbs. Convenient, very clean, perfect for families and just above the beach! Last but not least, Lizzy is a great host, making sure we had all what we needed and very responsive. Thank you again for a wonderful stay!"
                    },
                    {
                        "at": "2018-04-03T04:00:00.000Z",
                        "by": {
                            "_id": "622f3404e36c59e6164fb596",
                            "fullname": "Michael",
                            "imgUrl": "https://robohash.org/28487228?set=set1",
                            "id": "28487228"
                        },
                        "txt": "This apartment is excellent - location is a stone's throw to the beach, coastal walk and great cafes, fantastic view, and a really well kept, comfortable and complete apartment for a family.  Thoroughly recommended"
                    },
                    {
                        "at": "2018-04-10T04:00:00.000Z",
                        "by": {
                            "_id": "622f3407e36c59e6164fbd1d",
                            "fullname": "Hannah",
                            "imgUrl": "https://robohash.org/115378822?set=set1",
                            "id": "115378822"
                        },
                        "txt": "Lizzy's place is just perfect! It is beautifully decorated and has a lovely calm and airy atmosphere. Very well appointed with everything you would need and a lovely balcony and day bed boat over looking the beach to chill. We took our two small children and it is a very baby/child friendly space. We were very comfortable and I would definitely recommend Lizzy's place and should we be in Sydney again we would definitely stay there."
                    },
                    {
                        "at": "2018-05-20T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb9a7",
                            "fullname": "Andrew",
                            "imgUrl": "https://robohash.org/4140594?set=set1",
                            "id": "4140594"
                        },
                        "txt": "The house was beautiful and Lizzy was the most attentive host. The view from the house was heavenly and the neighborhood was perfect. Highly recommend!"
                    },
                    {
                        "at": "2018-06-13T04:00:00.000Z",
                        "by": {
                            "_id": "622f3402e36c59e6164fad40",
                            "fullname": "力",
                            "imgUrl": "https://robohash.org/117608429?set=set1",
                            "id": "117608429"
                        },
                        "txt": "Lizzy is a wonderful and kind host,  her plac is walking-distane to a great park and beach, fifteen minute to bondi beach as well"
                    },
                    {
                        "at": "2018-06-27T04:00:00.000Z",
                        "by": {
                            "_id": "622f3405e36c59e6164fb6c5",
                            "fullname": "Mary",
                            "imgUrl": "https://robohash.org/34991610?set=set1",
                            "id": "34991610"
                        },
                        "txt": "We loved staying at Lizzy’s place!  The location was fantastic!  The view from the apartment was spectacular!  Super cool Home and we especially loved the boat “couch” in the living room!"
                    }
                ],
                "_id": "622f337b75c7d36e498aab82",
                "imgUrls": [
                    "010.jpeg",
                    "078.jpeg",
                    "012.jpeg",
                    "138.jpeg",
                    "134.jpeg"
                ]
            }
        ]
        utilService.saveToStorage(KEY, stays)
            // 'On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor'
    }
    return stays
}

// function _createStay(name, price, labels, reviews) {
//   return {
//     _id: utilService.makeId(),
//     name,
//     price,
//     labels,
//     inStock: true,
//     createdAt: new Date(),
//     reviews: [
//       { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
//       { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
//       { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
//     ],
//   }
// }