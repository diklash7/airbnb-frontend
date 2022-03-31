<template>
  <app-header class="order-layout" :orders="orders" />
  <section class="dashboard-page main-layout">
    <section class="dashboard-container">
      <div class="main-container flex flex-column">
        <section class="dash-header flex space-between">
          <div class="dash-nav flex flex-column space-evenly">
            <button @click="openStays">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              My Stays
            </button>
            <button @click="openOrders">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-list-ul"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              My Orders
            </button>
          </div>
          <div class="stats-container flex space-between">
            <div class="dash-stat">
              <h3>Total Rate</h3>
              <div class="rates-data flex flex-column space-between">
                <div>
                  <span class="flex align-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#E01661"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      />
                    </svg>
                    4.65 <small class="avg">avg</small></span
                  >
                </div>
                <div class="flex space-between">
                  <span>112<small> reviews</small></span>
                </div>
              </div>
            </div>
            <div class="dash-stat">
              <h3>Total Revenues</h3>
              <span class="total-revenue">{{ revenueSum }}</span>
            </div>
            <div class="dash-stat">
              <h3>Orders</h3>
              <span>{{ orders.length }}<small> orders</small></span>
            </div>
            <div class="dash-stat">
              <h3>Guests</h3>
              <span>{{ guestSum }}<small> guests</small></span>
            </div>
          </div>
        </section>
        <section class="info-container">
          <section v-if="!isOpen" class="order-list">
            <div class="order-table">
              <div class="thead">
                <div class="thead-container gray-box-shadow">
                  <span>Date</span>
                  <span>Booker</span>
                  <span>Place</span>
                  <span>Trip Dates</span>
                  <span>Nights</span>
                  <span>Guests</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>
              </div>
            </div>
            <div class="tbody">
              <order-list :orders="orders" />
            </div>
          </section>
          <section v-else class="host-stay-list">
            <div class="stay-table">
              <div class="thead">
                <div class="thead-container gray-box-shadow">
                  <span>Name</span><span>Price per night</span>
                  <span>Address</span>
                  <span class="stay-actions">Actions</span>
                </div>
              </div>
              <div class="tbody">
                <host-stay-list :stays="hostStays" />
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import orderList from "../components/order-list.vue";
import hostStayList from "../components/host-stay-list.vue";

export default {
  data() {
    return {
      isOpen: false,
      orders: [
        {
          date: "03/13/22",
          booker: "Leo",
          stay: "Spacious and quiet apartment in Poble Sec",
          tripDates: "03/14/22-03/18/22",
          nights: 4,
          guests: 3,
          amount: 516,
          status: 'approved',
        },
        {
          date: "03/09/22",
          booker: "Lizzie",
          stay: "Habitación centro de Barcelona",
          tripDates: "03/10/22-03/12/22",
          nights: 2,
          guests: 3,
          amount: 313,
          status: 'rejected',
        },
        {
          date: "02/11/22",
          booker: "Debbie",
          stay: "Fresh and modern 1BR",
          tripDates: "02/16/22-02/17/22",
          nights: 1,
          guests: 2,
          amount: 330,
          status: 'approved',
        },
        {
          date: "02/03/22",
          booker: "Frank",
          stay: "Spacious and quiet apartment in Poble Sec",
          tripDates: "02/11/22-02/15/22",
          nights: 4,
          guests: 3,
          amount: 889,
          status: 'approved',
        },
        {
          date: "01/13/22",
          booker: "Maria",
          stay: "Fresh and modern 1BR",
          tripDates: "01/14/22-01/18/22",
          nights: 4,
          guests: 5,
          amount: 1200,
          status: 'approved',
        },
        {
          date: "01/08/22",
          booker: "Yaron",
          stay: "Habitación centro de Barcelona",
          tripDates: "01/15/22-01/18/22",
          nights: 3,
          guests: 2,
          amount: 550,
          status: 'rejected',
        },
        {
          date: "12/13/21",
          booker: "Asaf",
          stay: "Habitación centro de Barcelona",
          tripDates: "12/22/21-12/27/21",
          nights: 5,
          guests: 4,
          amount: 1600,
          status: 'approved' ,
        },
        {
          date: "11/18/21",
          booker: "Itsar",
          stay: "Spacious and quiet apartment in Poble Sec",
          tripDates: "11/22/21-11/28/21",
          nights: 6,
          guests: 2,
          amount: 2500,
          status: 'approved',
        },
        {
          date: "11/13/21",
          booker: "Frank",
          stay: "Habitación centro de Barcelona",
          tripDates: "11/14/21-11/18/21",
          nights: 4,
          guests: 4,
          amount: 3000,
          status: 'approved',
        },
      ],
      hostStays: [
        {
          name: "Home, Sweet, Harlem.",
          summary:
            "Welcome! Upgrades Added as of January 2018 This listing is located in the Spanish Harlem Section of Manhattan. I offer a cozy apartment that has great transportation in and out the city! The area has a lot of ethnic restaurants and a lot of local, active residents. This residence is great for a quick, inexpensive stay in New York whether its for business, travel, or personal purposes. I am glad to welcome all guests!",
          interaction:
            "I am great with communicating with my guest and making sure everyone is comfortable as possible. The apartment is yours to use but I am only a phone call away!",
          houseRules:
            "I take time and effort to maintain the household with the utmost cleanliness and hospitality. It is filled with the essentials needed to enjoy your stay.  I do ask to kindly respect the household as if it was yours. Please be courteous.",
          propertyType: "Apartment",
          roomType: "Entire home/apt",
          bedType: "Real Bed",
          cancellationPolicy: "moderate",
          capacity: 3,
          bedrooms: 1,
          beds: 1,
          numOfReviews: 199,
          amenities: [
            "TV",
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Iron",
            "Heating",
            "Smoke detector",
            "Carbon monoxide detector",
            "Essentials",
            "Shampoo",
            "Lock on bedroom door",
            "Hangers",
            "Iron",
            "Laptop friendly workspace",
            "translation missing: en.hosting_amenity_49",
            "translation missing: en.hosting_amenity_50",
            "Private living room",
            "Hot water",
            "Bed linens",
            "Extra pillows and blankets",
            "Refrigerator",
            "Dishes and silverware",
            "Cooking basics",
            "Oven",
            "Stove",
            "Host greets you",
          ],
          host: {
            _id: "622f3405e36c59e6164fb914",
            fullname: "Shaila & Alex",
            location: "New York, New York, United States",
            about:
              "Welcome Everyone! Thank you for stopping by. \r\n\r\nI was born and raised in Manhattan and I am here to help  share the New York City Experience with others through Airbnb!  I am easy to connect with and very reachable and always willing to interact with people. \r\n\r\nI am big on cleanliness and hospitality. I strive on making Guests feel as comfortable as possible. \r\n\r\nI hope you would like to get a chance to visit my location and enjoy the hosting I provide. If you have any questions/ comments, feel free to contact me. \r\n",
            responseTime: "within a few hours",
            thumbnailUrl:
              "https://a0.muscache.com/im/pictures/61b62b90-e38b-4609-a3c4-ff5ff06b5c08.jpg?aki_policy=profile_small",
            pictureUrl:
              "https://a0.muscache.com/im/pictures/87b9ccba-154a-4546-8cbe-8bdb25ddb36c.jpg?aki_policy=profile_x_medium",
            isSuperhost: false,
            id: "24800102",
          },
          address: {
            street: "New York, NY, United States",
            country: "United States",
            location: {
              lat: -73.93955,
              lan: 40.79733,
            },
            countryCode: "US",
            city: "New York",
          },
          id: "11097962",
          bathrooms: 1,
          price: 110,
          securityDeposit: 0,
          cleaningFee: 10,
          extraPeople: 25,
          reviewScores: {
            accuracy: 9,
            cleanliness: 10,
            checkin: 10,
            communication: 10,
            location: 9,
            value: 9,
            rating: 90,
          },
          reviews: [
            {
              at: "2016-03-26T04:00:00.000Z",
              by: {
                _id: "622f3405e36c59e6164fb8b4",
                fullname: "Christine",
                imgUrl: "https://robohash.org/47877926?set=set1",
                id: "47877926",
              },
              txt: "Shaila was very welcoming and thorough with all information. The description of the property was accurate. It's also near the MTA if you want to get to another part of the city. Shaila got in touch before I arrived, and his brother was there to meet me and show me where everything was, which was great. Last but not least, he had provided a great information on the local area with recommendations for places to eat, etc., which I found really useful.\r\n",
            },
            {
              at: "2016-04-17T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbdb9",
                fullname: "Hector",
                imgUrl: "https://robohash.org/36832696?set=set1",
                id: "36832696",
              },
              txt: "Shaila was nice. And he was very responsive via text, which I appreciate. The listing is in East Harlem, which isn't for everyone. The area is not very posh, but, for me, it feels like home, so I tend to stay there whenever I go to New York. The listing description was accurate enough, with respect to the way the apartment looks. If you can't deal with noise at night, however, this might not be the place for you. The neighbors were surprisingly noisy in the wee hours of the night and virtually silent during the day. This apartment is close to the subway, which was very useful.",
            },
            {
              at: "2016-04-23T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbdca",
                fullname: "Jaime",
                imgUrl: "https://robohash.org/37244180?set=set1",
                id: "37244180",
              },
              txt: "Shaila was very helpful and communicative during the whole time. The apartment is very nice, and within walking distance to the subway. Would definitely stay there again.",
            },
            {
              at: "2016-04-24T04:00:00.000Z",
              by: {
                _id: "622f3402e36c59e6164fae69",
                fullname: "Anan",
                imgUrl: "https://robohash.org/30380132?set=set1",
                id: "30380132",
              },
              txt: "I had a wonderful stay at Shaila's apartment. The apartment is very close to the six train line. Everything in the apartment was spotless clean. I definitely recommend this apartment to others. Thank you Shaila for hosting me!",
            },
            {
              at: "2016-05-04T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbf23",
                fullname: "Yamilis",
                imgUrl: "https://robohash.org/5684819?set=set1",
                id: "5684819",
              },
              txt: "Shaila fue excelente anfitrión. Se mantuvo en contacto con nosotros y fue muy comprensivo aún cuando llegamos más tarde de la hora acordada para el check in porque nos perdimos en el subway. También fue muy comprensivo para acordar el check out de acuerdo a la hora que fue más conveniente para nosotros, aún cuando también se nos hizo tarde. Nos proveyó de un matress de aire para nuestra amiga que vino de M.A. y se quedó una noche con nosotros. El barrio nos pareció bien, no tuvimos ningún incidente. Muchos puertoriqueños y Dominicanos, así que nos sentimos como en casa. Todo fue muy cómodo y limpio. Los vecinos hicieron mucho ruido en las noches, pero no fue problema para nosotros. Una sugerencia sería poner un espejo de cuerpo completo en alguna parte del apartento. En resumen, el apartamento fue perfecto para nosotros, nos volveríamos a quedar y claro que lo recomendaría! Muchas Gracias Shaila por tu ayuda!",
            },
            {
              at: "2016-05-08T04:00:00.000Z",
              by: {
                _id: "622f3405e36c59e6164fb6a4",
                fullname: "Leonam",
                imgUrl: "https://robohash.org/44604680?set=set1",
                id: "44604680",
              },
              txt: "Shaila was really thoughtful about everything. He gave me all information needed while staying on his house. The house was very clean.",
            },
            {
              at: "2016-05-11T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fc063",
                fullname: "Amy",
                imgUrl: "https://robohash.org/4923470?set=set1",
                id: "4923470",
              },
              txt: "Shaila is a really nice host, flexible and very responsive. The apartment is a 4th-floor walk up, well-maintained and exactly as advertised in the listing. The apartment has all the basic things--it's especially nice to have a kitchen and comfy sofa. There's no TV and wifi, but you probably don't need it anyway since you are here to see New York city! It is just a short 5-min walk from the subway station, so very convenient. Street noise is not a problem although you can hear the neighbors at times (the kids next door can be noisy). East Harlem is a bustling Latino neighborhood with many local eateries and shops. The food selection is supposed to be great (too bad we didn't get to try any). There is a grocery store right outside the building. There're always locals hanging out in front but we were never bothered. All and all, a good choice if you are looking to stay in this part of the city.",
            },
            {
              at: "2016-05-17T04:00:00.000Z",
              by: {
                _id: "622f3401e36c59e6164fab7d",
                fullname: "Vlad",
                imgUrl: "https://robohash.org/61270769?set=set1",
                id: "61270769",
              },
              txt: "Shaila was an excellent host. Everything was absolutely as described. The apartment is lovely and very clean. There are numerous windows in every room and there is plenty of light! Would definitely stay again!",
            },
            {
              at: "2016-05-19T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbe7b",
                fullname: "Derick",
                imgUrl: "https://robohash.org/63351088?set=set1",
                id: "63351088",
              },
              txt: "Great experience, we enjoyed ourselves for the night we stayed, only issue really were the neighbors being loud all night made it hard to sleep.",
            },
            {
              at: "2016-05-21T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbefb",
                fullname: "Derek",
                imgUrl: "https://robohash.org/794527?set=set1",
                id: "794527",
              },
              txt: "Shaila's place is exactly as other reviewers describe it:  nice and clean, spacious and very convenient as a base to explore and enjoy NYC. \r\n\r\nThe Neighborhood is definitely classic East Harlem.  Very real NYC vibe. Not a tourist area.  \r\n\r\nThe neighbors are noisy sometimes, so if you are a light sleeper, that could be a problem. But I didn't have any trouble. \r\n\r\nIt would have been nice to have wireless, but I didn't come to NYC to play online, so I didn't mind that too much.  \r\n\r\nShaila was a very nice, responsive host! ",
            },
            {
              at: "2016-05-22T04:00:00.000Z",
              by: {
                _id: "622f3404e36c59e6164fb484",
                fullname: "Shiann",
                imgUrl: "https://robohash.org/26290842?set=set1",
                id: "26290842",
              },
              txt: "Shaila made my friend and I feel really welcomed. The apartment was very clean!",
            },
            {
              at: "2016-05-26T04:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164fb208",
                fullname: "Stephanie",
                imgUrl: "https://robohash.org/73751485?set=set1",
                id: "73751485",
              },
              txt: "Me and my husband stayed in the apartment this was our first time using this site and Shaila made us feel like we are regulars. We stayed one night and it was wonderful. Shaila contacted us right away and was really good with getting us whatever we need to stay there. The area is the only bad thing but when we went in the apartment you really forget about the outside.",
            },
            {
              at: "2016-05-29T04:00:00.000Z",
              by: {
                _id: "622f3404e36c59e6164fb52c",
                fullname: "Virginie",
                imgUrl: "https://robohash.org/8842288?set=set1",
                id: "8842288",
              },
              txt: "Shaila is easy to get in touch with and waited for us to arrive Even if it was already late in the evening. He even asked if everything was fine during our stay.\nThe appartment is perfectly situated to visit Manhattan island. Just note the neighbours are noisy if it is important to you.",
            },
            {
              at: "2016-06-06T04:00:00.000Z",
              by: {
                _id: "622f3405e36c59e6164fb803",
                fullname: "Ada",
                imgUrl: "https://robohash.org/65358522?set=set1",
                id: "65358522",
              },
              txt: "Shaila was absolutely wonderful. He was very responsive and communicative and I could tell he takes great pride in being an exceptional host. His place was exactly as described, as shown in the pictures and also very clean. The neighborhood is great and the room is a great price for someone looking to stay in the city and explore. It's right next to the trains, neighborhood gems but also commonly known stores for anyone who isn't familiar with the area. ",
            },
            {
              at: "2016-06-11T04:00:00.000Z",
              by: {
                _id: "622f3406e36c59e6164fbc21",
                fullname: "Fernando",
                imgUrl: "https://robohash.org/75294316?set=set1",
                id: "75294316",
              },
              txt: "everything was correct , very good condition to this price",
            },
            {
              at: "2016-06-14T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbdfe",
                fullname: "Francesca",
                imgUrl: "https://robohash.org/56355386?set=set1",
                id: "56355386",
              },
              txt: "This is my first time using Airbnb. Shaila responded quickly to my inquiry about booking his apartment. Once booked he was very easy to reach via phone or text if I needed to. His one bedroom apartment was very clean and nicely furnished. It is central to a lot of restaurants and neighborhood shopping should you need something and a couple blocks from the subway and buses. Shaila was a great host. He was there to greet me, show me around the apartment and tell me a bit about the area. He also has maps and booklets about what to visit while in New York City. There is wifi in the apartment which is great. Shaila checked in with me just to make sure everything was ok during my trip. I had a wonderful stay at his apartment and would book it again! ",
            },
            {
              at: "2016-06-20T04:00:00.000Z",
              by: {
                _id: "622f3404e36c59e6164fb4de",
                fullname: "Alex",
                imgUrl: "https://robohash.org/45975680?set=set1",
                id: "45975680",
              },
              txt: "Shaila was a phenomenal host, he was very accommodating about arrival and check out times and provided me with a ton of useful information to navigate the area and make my stay as pleasant as possible. The apartment is two blocks from the subway and easy to navigate from. I would definitely recommend staying at Shaila's for all those considering a trip to New York.",
            },
            {
              at: "2016-06-24T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbd08",
                fullname: "Johanna",
                imgUrl: "https://robohash.org/75777207?set=set1",
                id: "75777207",
              },
              txt: "The apartment is as described. Shaila is very pleasant and was kind to helped me bring my belongings to the apartment. The apartment is cozy in a great location. I will definitely be using this apartment again",
            },
            {
              at: "2016-07-03T04:00:00.000Z",
              by: {
                _id: "622f3405e36c59e6164fb7a6",
                fullname: "Bandele",
                imgUrl: "https://robohash.org/5357325?set=set1",
                id: "5357325",
              },
              txt: "Shaila's a great guy, but if you're looking for a hotel-like experience, this is NOT it... This however, IS a genuine NYC experience. Noisy & inconsiderate neighbors, dirty streets, dangerous vibes... All in all your safe, and anyone you actually talk to will be cool... Shaila was also very considerate and did everything he could to add comfort to my stay, he even warned me of the noisy neighbors in advance... This place is good for people who already know NYC, and need an affordable, SHORT-TERM (like 1-2days), place to crash uptown...",
            },
            {
              at: "2016-07-13T04:00:00.000Z",
              by: {
                _id: "622f3405e36c59e6164fb80a",
                fullname: "Bryan",
                imgUrl: "https://robohash.org/73430217?set=set1",
                id: "73430217",
              },
              txt: "This place was cozy, comfortable and very clean. The AC was very helpful during the heat waves. Good shower and great WiFi connection as well.",
            },
          ],
          _id: "622f337a75c7d36e498aaafe",
          imgUrls: ["026.jpeg", "119.jpeg", "017.jpeg", "023.jpeg", "096.jpeg"],
        },
        {
          name: "Beach penthouse",
          summary:
            "Price includes nightly rate & 14.42% tax.  Our fully remodeled 9th floor Penthouse unit offers the most amazing views.  The entire front of the condo is windows offering you a fantastic view of beautiful Pacific Ocean, Molokai & Lana'i.  Perfect location for watching beautiful sunsets, see our resident sea turtles & an excellent place for spotting whales during the whale migration season. This spacious two level 3 bedroom and 3 full bath Penthouse unit has over 2,050 sq ft of living space w/ AC.",
          interaction:
            "As your host I will be available via phone for any questions or concerns.  I am always happy to answer any questions or give assistance prior to your arrival.",
          houseRules:
            "Resort fee of $75 collected by front desk at time of check in.  One time fee. - Rates are for 6 guests.  An additional $25 per night per person for up to 2 more guests. - Resort Quiet Hours 10:00 p.m. - 8:00 a.m. - No smoking on the lanai or in unit per Hawaii state law",
          propertyType: "Condominium",
          roomType: "Entire home/apt",
          bedType: "Real Bed",
          cancellationPolicy: "strict_14_with_grace_period",
          capacity: 9,
          bedrooms: 3,
          beds: 6,
          numOfReviews: 17,
          amenities: [
            "TV",
            "Safety card",
            "Internet",
            "Wifi",
            "Air conditioning",
            "Pool",
            "Kitchen",
            "Smoke detector",
            "Carbon monoxide detector",
            "First aid kit",
            "Free parking on premises",
            "Gym",
            "Elevator",
            "Hot tub",
            "Family/kid friendly",
            "Washer",
            "Hair dryer",
            "Fire extinguisher",
            "Essentials",
            "Shampoo",
            "Lock on bedroom door",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "Laptop friendly workspace",
            "Self check-in",
            "Building staff",
            "Private entrance",
            "Bathtub",
            "Baby bath",
            "High chair",
            "Children’s books and toys",
            "Crib",
            "Pack ’n Play/travel crib",
            "Children’s dinnerware",
            "Hot water",
            "Bed linens",
            "Extra pillows and blankets",
            "Microwave",
            "Coffee maker",
            "Refrigerator",
            "Dishwasher",
            "Dishes and silverware",
            "Cooking basics",
            "Oven",
            "Stove",
            "BBQ grill",
            "Patio or balcony",
            "Beach essentials",
            "Step-free access",
            "Disabled parking spot",
            "Step-free access",
            "Step-free access",
            "Step-free access",
            "Beachfront",
            "Pool with pool hoist",
          ],
          host: {
            _id: "622f3405e36c59e6164fb6ba",
            fullname: "Shaila & Alex",
            location: "California, United States",
            about:
              "My husband and I are Real Estate Investors.  We enjoy traveling and no matter where we go, we always find ourselves looking at properties.  Since we still have school age children I have found that a beach vacation is usually the most enjoyable for everyone.  Living on the West Coast, Hawaii continued to be a place that we would return to time and time again.",
            responseTime: "within an hour",
            thumbnailUrl:
              "https://a0.muscache.com/im/pictures/07c98f2f-9ffe-4ed8-82ca-1e9cd00c673f.jpg?aki_policy=profile_small",
            pictureUrl:
              "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
            isSuperhost: true,
            id: "82827178",
          },
          address: {
            street: "Lahaina, HI, United States",
            country: "United States",
            location: {
              lat: -156.68034,
              lan: 20.97104,
            },
            countryCode: "US",
            city: "Maui",
          },
          id: "13934996",
          bathrooms: 3,
          price: 800,
          securityDeposit: 2000,
          cleaningFee: 325,
          extraPeople: 50,
          reviewScores: {
            accuracy: 10,
            cleanliness: 10,
            checkin: 10,
            communication: 10,
            location: 10,
            value: 10,
            rating: 100,
          },
          reviews: [
            {
              at: "2016-12-08T05:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbfd3",
                fullname: "Therese",
                imgUrl: "https://robohash.org/5536819?set=set1",
                id: "5536819",
              },
              txt: "We have just returned from a fabulous holiday at Shaila's condo on Maui. Everything was fantastic. From the moment we booked Shaila could not have been more helpful with everything and was always ready and willing to answer all of our queries. Shaila provided us with an extensive list of recommendations for our stay on Maui and we were not disappointed. The condo is located in a quiet but convenient neighbourhood and close to many amenities. We found the condo extremely spacious and it accommodated our party of 3 adults and two teenaged children with no problem at all. Shaila's condo is the penthouse and is set right on the beach so we were treated to gorgeous Hawaiian sunsets every night, as well as being able to see turtles and whales from our balcony. The condo is beautifully presented and very well equipped - we could not have asked for anything more for our nine day stay. \r\nMahalo Shaila ",
            },
            {
              at: "2017-03-23T04:00:00.000Z",
              by: {
                _id: "622f3406e36c59e6164fbb9b",
                fullname: "Alexandra",
                imgUrl: "https://robohash.org/29101218?set=set1",
                id: "29101218",
              },
              txt: "The location was great and the view was incredible! You are right on the beach and it is a great place for families with kids. Highly recommend staying here!",
            },
            {
              at: "2017-04-28T04:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164fb19f",
                fullname: "Daisy",
                imgUrl: "https://robohash.org/111663869?set=set1",
                id: "111663869",
              },
              txt: "This place was beyond my expectations. There were no hidden surprises. Knew exactly what to expect, and Shaila was always there to answer any quesions. The view is spectacular. Beautiful location. I highly recommend this place.",
            },
            {
              at: "2017-07-29T04:00:00.000Z",
              by: {
                _id: "622f3402e36c59e6164fac44",
                fullname: "Peter",
                imgUrl: "https://robohash.org/54509004?set=set1",
                id: "54509004",
              },
              txt: "Very nice location with good beach. Penthouse is nice sized and comfortable. Amenities are good. Location is very good with close proximity to Lahaina and Kapalua.",
            },
            {
              at: "2017-11-03T04:00:00.000Z",
              by: {
                _id: "622f3405e36c59e6164fb70f",
                fullname: "Megan",
                imgUrl: "https://robohash.org/5818782?set=set1",
                id: "5818782",
              },
              txt: "If you want a one-stop, stress-free vacation, in a beautiful location with all the amenities you need....this is it!  We lucked out with perfect weather too.  Shaila provides basic amenities, pool towels, bookie boards, snorkeling gear, and the comfort of being in a cozy home.  It was really easy to run up to the Condo for my 9-month old nap times or a quick snack, without being too separated from the family.  The onsite pools, restaurant and of course restaurant/bar became our home bases for the week.  Miso Phat Sushi (across the street) and Maui Brewing were awesome near-by/within walking distance restaurants.  My family and I can't stop bragging about our trip and what a wonderful family/group set-up this Condo is!  We recommend renting a car due to the distance from the airport, but the Condo/Resort has onsite parking.",
            },
            {
              at: "2018-01-30T05:00:00.000Z",
              by: {
                _id: "622f3402e36c59e6164fae2f",
                fullname: "Brenda",
                imgUrl: "https://robohash.org/151153465?set=set1",
                id: "151153465",
              },
              txt: "Such a beautiful location in Paradise! The amazing balconies provided us with gathering spots for our morning coffee to watch the whales and gorgeous sunsets each evening. During our week long stay, we decided to visit Costco, the local fish market and the farmers market and ate 4 dinners in the condo.  The kitchen has everything you need, and the barbques downstairs were perfect for grilling.  Shaila left us plenty of information for dining in the vicinity, so we had 3 nice dinners out. The guide she sent us before our visit was very informative and helped us to plan our outings while in Maui. Shaila also checked in with us during our visit, making sure we had everything we needed. We are already planning a return visit to #391 at the Sands of Kahana in the near future!",
            },
            {
              at: "2018-03-24T04:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164fb04f",
                fullname: "Daria",
                imgUrl: "https://robohash.org/38292402?set=set1",
                id: "38292402",
              },
              txt: "We had such a great time at Shaila's condo.  Everything was sparkling clean. The check in and check out were seamless.  We loved that the condo came with some beach gear for our use (snorkels, boogie boards, water shoes...).  The views from the balconies are outstanding.  There is a nice and swimmable beach right downstairs, as well as a volleyball court and a casual restaurant. Great location with easy access to beach rentals, groceries, and anything else you might need during your stay.  Shaila was very quick to respond to any questions we had. Loved the place! Would definitely stay again.",
            },
            {
              at: "2018-04-14T04:00:00.000Z",
              by: {
                _id: "622f3402e36c59e6164faec7",
                fullname: "Amy",
                imgUrl: "https://robohash.org/95449574?set=set1",
                id: "95449574",
              },
              txt: "This place was incredible. From the views to the thoughtfulness in everything in the condo. While climbing nine flights of stairs during an unexpected elevator renovation (that ends in May!) does not sound fun, it was actually not bad at all for the adults in our party, as well as the 3 sub-8 year old children, and allowed us to think we were earning all the delicious calories we ate and drank.\n\nI cannot rave enough about the amenities that are incredibly family friendly, including a full sized high chair, travel crib, toddler (and big kid) friendly toys for both indoors and at the beach. Shaila is very quick to respond to communication and is clear as to what she can provide as a host, as well as her expectation of guests. She was as incredible as her Kahana home was and we'd highly recommend this place for anyone, including those with small children.",
            },
            {
              at: "2018-05-19T04:00:00.000Z",
              by: {
                _id: "622f3406e36c59e6164fba90",
                fullname: "Stacey",
                imgUrl: "https://robohash.org/69659100?set=set1",
                id: "69659100",
              },
              txt: "This place is amazing. We will be back!",
            },
            {
              at: "2018-06-03T04:00:00.000Z",
              by: {
                _id: "622f3406e36c59e6164fbb28",
                fullname: "Rebekah",
                imgUrl: "https://robohash.org/154101405?set=set1",
                id: "154101405",
              },
              txt: "What an amazing place to stay with a spectacular view!! The beach out front is awesome and we saw turtles daily! Shaila was great with communication and making our stay feel just like home. Hope to stay here again!!",
            },
            {
              at: "2018-08-25T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbda0",
                fullname: "Chris",
                imgUrl: "https://robohash.org/170664766?set=set1",
                id: "170664766",
              },
              txt: "Fantastic unit. Amazing sunsets.",
            },
            {
              at: "2018-09-13T04:00:00.000Z",
              by: {
                _id: "622f3406e36c59e6164fbc74",
                fullname: "Esther",
                imgUrl: "https://robohash.org/4059349?set=set1",
                id: "4059349",
              },
              txt: "Enjoyed our stay very much! The condo was clean, spacious and with all the amenities of a home away from home. Shaila was very responsive, even checking up on us when the tropical storm warnings went out. Thankfully, the storm didn’t dampen our stay. Enjoyed many beautiful Maui sunsets from the home!",
            },
            {
              at: "2018-10-18T04:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164fb016",
                fullname: "Elaine",
                imgUrl: "https://robohash.org/73108150?set=set1",
                id: "73108150",
              },
              txt: "The place has amazing ocean views!!! Shaila provided beach chairs, gears, and toys for the kids. The entire condo is well organized and our family had such a great time. Appreciate all the little touches you provided for your guests. Will definitely stay there again when we return on Maui! :)",
            },
            {
              at: "2019-01-11T05:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164fb239",
                fullname: "Dan",
                imgUrl: "https://robohash.org/217281282?set=set1",
                id: "217281282",
              },
              txt: "This condo was very spacious.  We had eight people (ages 5-85) and there was plenty of space for everyone.  Shaila was readily accessible if we needed anything.  The view from the lanai was breathtaking and we watched whales every morning.  The condo was stocked with plenty of snorkel gear, boogie boards, beach chairs, sand toys for the kids, board games, puzzles, etc.  The kitchen had plenty of pots, pans, dishes, utensils, etc.  Thanks for the great stay!",
            },
            {
              at: "2019-01-22T05:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164faf7d",
                fullname: "Jess",
                imgUrl: "https://robohash.org/20450315?set=set1",
                id: "20450315",
              },
              txt: "Very clean. Cleanest Airbnb we have stayed at. Beautiful home and beautiful view of the sunset from the apartment. Loved that they had binoculars to see the whales jumping out in the distance.",
            },
            {
              at: "2019-02-14T05:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164fb1af",
                fullname: "Anna-Mae",
                imgUrl: "https://robohash.org/76192807?set=set1",
                id: "76192807",
              },
              txt: "If you are wanting a beautiful place right on the beach when you visit Kaanapali with your family , then this is the place for you ! Gorgeous full ocean view from the large deck ,large spacious rooms, super clean, lots of extras and great communication with Shaila! We came here with our 3 adult kids and their spouses and loved everything about this place .. well stocked kitchen , lots of towels, beach toys (boogie boards were a hit ) comfortable beds ..and then there is outside !  Beautiful clean beach right outfront, nice pool and grounds , very helpful staff and amenities close by ... we watched whales and turtles right from our beach and deck, amazing !! This condo made our trip to Maui a real treat ..chose Shaila's condo , you will not be disappointed !!",
            },
            {
              at: "2019-02-27T05:00:00.000Z",
              by: {
                _id: "622f3405e36c59e6164fb766",
                fullname: "Lj",
                imgUrl: "https://robohash.org/69116372?set=set1",
                id: "69116372",
              },
              txt: "I cannot say enough good things about this condo. There was more than enough space for my friends and I to spread out. Each room was beautifully decorated. the bathrooms we're impeccably remodeled, I even took inspiration pictures! Shaila thought of everything to make this a home away from home. AC was in every room, but with the trade winds, we never needed it. Don't hesitate, book this place now!!!",
            },
          ],
          _id: "622f337a75c7d36e498aab02",
          imgUrls: ["100.jpeg", "001.jpeg", "150.jpeg", "132.jpeg", "021.jpeg"],
        },
        {
          name: "Fresh and modern Bed-Stuy",
          summary:
            "A spacious, art-filled one-bedroom apartment near the express train (28 minutes to Times Square) and a Citibike station. Sample Bed-Stuy life at a nearby French restaurant,  a sunny Haitian cafe, a boutique grocery and more. We do NOT discriminate based on race, religion or sexual orientation.",
          interaction:
            ".  Guests stay in a separate,  private apartment and we make every effort to not disturb you unless absolutely necessary. We live above the apartment and will be happy to accommodate any reasonable requests",
          houseRules:
            "A/C may be used only when you are at home.  Please respect our delicate old pipes (no grease down the drain, etc.).  No smoking on premises. Guests are expected to wash take out their trash and recycling as needed. Guests are expected to wash and put away dishes prior to check-out (apartment has a dishwasher, soap packets are under the sink) Longer term guests may wish to launder the sheets and towels during their stay. This service is not provided. (There are two sets of bed linens provided and two sets of towels for each adult guest.) Owners may occasionally need to go through the apartment to access the basement. We shall endeavor to give advance notice of this and find a mutually convenient time.  $50 fee if keys are lost or not returned.",
          propertyType: "Apartment",
          roomType: "Entire home/apt",
          bedType: "Real Bed",
          cancellationPolicy: "strict_14_with_grace_period",
          capacity: 2,
          bedrooms: 1,
          beds: 1,
          numOfReviews: 180,
          amenities: [
            "Internet",
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Heating",
            "Family-kid friendly",
            "Smoke detector",
            "Carbon monoxide detector",
            "Fire-extinguisher",
            "Essentials",
            "Shampoo",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "Laptop friendly workspace",
            "translation missing: en.hosting_amenity_49",
            "Self check-in",
            "Lockbox",
          ],
          host: {
            _id: "622f3402e36c59e6164fac46",
            fullname: "Shaila & Alex",
            location: "New York, New York, United States",
            about:
              "I'm a journalist from Texas and my husband is an artist from the Ukraine by way of Kansas City. We recently welcomed our son into the world. (Don't worry, he sleeps all night.)  We love exploring New York, especially Brooklyn, from the Brooklyn Flea to tiny taco joints to the Botanic Gardens to performance art in Bushwick storefronts (really). We've both spent a lot of time in the South, so hospitality is second nature to us. ",
            responseTime: "within an hour",
            thumbnailUrl:
              "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_small",
            pictureUrl:
              "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
            isSuperhost: true,
            id: "6334250",
          },
          address: {
            street: "Brooklyn, NY, United States",
            country: "United States",
            location: {
              lat: -73.92922,
              lan: 40.68683,
            },
            countryCode: "US",
            city: "New York",
          },
          id: "1155885",
          bathrooms: 1,
          price: 79,
          securityDeposit: 250,
          cleaningFee: 80,
          extraPeople: 0,
          reviewScores: {
            accuracy: 10,
            cleanliness: 10,
            checkin: 10,
            communication: 10,
            location: 9,
            value: 10,
            rating: 93,
          },
          reviews: [
            {
              at: "2013-05-27T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbfd2",
                fullname: "Nicolas",
                imgUrl: "https://robohash.org/4523027?set=set1",
                id: "4523027",
              },
              txt: "Shaila's place is amazing! It's new, it's clean and it's big! And Shaila is very accommodating, we found everything we needed (cooking, coffee) and more. Given that we were the first guests she hosted through airbnb I can say that she did an amazing job! \r\n",
            },
            {
              at: "2013-06-04T04:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164fb048",
                fullname: "Jeff",
                imgUrl: "https://robohash.org/6443424?set=set1",
                id: "6443424",
              },
              txt: "Great, quiet place to stay. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. ",
            },
            {
              at: "2013-06-13T04:00:00.000Z",
              by: {
                _id: "622f3406e36c59e6164fba55",
                fullname: "Carla",
                imgUrl: "https://robohash.org/6121036?set=set1",
                id: "6121036",
              },
              txt: "Shaila and Alex are wonderful hosts really, they helped us every time we needed with directions, the internet, the supermarket, the post office !!! (thank you guys !!!).The place and the neighbord are great, 8 blocks far from the apartment you have the subway and 30 min. later you are in the island, we moved early in the morning, late at night (sometimes we came back at 2am) and everything turned out great.Definetly I would come back to their apartment, It's bigger than ours in Argentina !!! I look forward to stay there again and, next time, go out with you guys and have a beer or anything.\r\nBye !!! - Guido and Carla - ",
            },
            {
              at: "2013-06-20T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbf76",
                fullname: "Dan",
                imgUrl: "https://robohash.org/6460525?set=set1",
                id: "6460525",
              },
              txt: "Shaila and Alex were incredibly accommodating and me and my girlfriend enjoyed our stay thoroughly. Highly recommended. The place was very private and homely. I didn't really know anything about New York and was nervous about staying in bed stuy but it was safe and friendly everywhere I went. Very easy to get to the airport and manhattan by train.",
            },
            {
              at: "2013-06-25T04:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbe9d",
                fullname: "Ariane",
                imgUrl: "https://robohash.org/6825718?set=set1",
                id: "6825718",
              },
              txt: 'Great place to stay in Brooklyn! Alex gave us a really useful list of nice restaurants and coffee places near the place (We are very happy to have discovered, the restaurant "Saraghina", thanks to Alex\'s map!).  The apartment is vast, furnished with taste and very convenient. We highly recommend!',
            },
            {
              at: "2013-07-03T04:00:00.000Z",
              by: {
                _id: "622f3402e36c59e6164fad91",
                fullname: "Ilka",
                imgUrl: "https://robohash.org/5823882?set=set1",
                id: "5823882",
              },
              txt: "I can recommend to everyone to come to this beautiful apartment, Shaila and Alex are great hosts and the neighbourhood is very friendly everywhere we go.\r\nIt really felt like home.",
            },
            {
              at: "2013-07-12T04:00:00.000Z",
              by: {
                _id: "622f3401e36c59e6164fab81",
                fullname: "Kristy",
                imgUrl: "https://robohash.org/5729991?set=set1",
                id: "5729991",
              },
              txt: "My sister and I loved staying here! The apartment is very spacious and recently renovated so it looks amazing. The kitchen has everything you need with Alex and Shalia stocking it with a few basics. The neighbourhood is a little shabby, especially compared to the home we stayed in. We were told by some people in Manhattan that the neighbour of Bed-Stuy used to be very dangerous and just to be careful walking around at night. Walking from the subway after dark was a little daunting but we remained safe. We did catch a cab a few times from Manhattan as it was very late. Overall, it was a positive experience with Alex and Shalia being very helpful, even going out of their way to let us store our luggage at Shalia's work the day we were to fly out. They were great hosts.",
            },
            {
              at: "2013-07-24T04:00:00.000Z",
              by: {
                _id: "622f3405e36c59e6164fb785",
                fullname: "Barbara",
                imgUrl: "https://robohash.org/6063814?set=set1",
                id: "6063814",
              },
              txt: "We just met Alex when we checked in, but anyhow he had been a very friendly and helpful host. He was reachable anytime and answered my mails prompt.\r\nThe apartment was great! It was really beautiful and big. It has a perfectly equipped kitchen and there are also a few basics for breakfast and cooking. The bed is very comfortable. It is not that soundproofed as we are accustomed to (the steps from upstairs waked me every day - my son slept well, he did not hear it), but I think that is normal for american houses. But apart from this it is very quiet.\r\nThe neighbourhood is great! It is very authentic, people are friendly and helpful if required, no problems even late at night. We loved staying there!\r\nIn any case: apartment, host and neighbourhood are high recommended! If we are in New York again, we certainly return to this place!",
            },
            {
              at: "2013-07-29T04:00:00.000Z",
              by: {
                _id: "622f3404e36c59e6164fb515",
                fullname: "Gloria",
                imgUrl: "https://robohash.org/97251?set=set1",
                id: "97251",
              },
              txt: "Hello! \n\nWe just spent 5 days in the big apple and we drove in to this Brooklyn location.  The host where incredibly attentive and just wonderful, the apartment spotless, hip & modern and really comfortable. \n\nDo not be intimidated by the transitioning neighborhood as we encountered that many residents are very friendly and helpful (directions) and this particular street has a real interest in making a real change hence empowering their community.\n\nThe subway is a little ways (12 to 15 min.) walk. We would use our vehicle to drive to the subway station (there are two corresponding)  and park nearby to facilitate the to and from.  If you need quick access to the subway at all hours of the day and night this may not be the place for you.\n\nThe apt. is an excellent value  for the money (as per  many  manhattan locations offer around  the same nightly  $$ rate but have to share their apt ).\n\n\n\n",
            },
            {
              at: "2013-09-07T04:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164fb079",
                fullname: "Javier",
                imgUrl: "https://robohash.org/7055720?set=set1",
                id: "7055720",
              },
              txt: "We really had a wonderful time in NYC thanks to Alex’s house. It’s just as big, beautiful and clean as it seems in the pictures. Alex has an incredible apartment in the basement that makes you feel like home after being out all day knowing the big city. All the furniture and the kitchen appliances are new.\r\n\r\nThe location is perfect for visiting Brooklyn and Manhattan (only 15-20 to Brooklyn Bridge and South Manhattan or 25-30 min to Times Square in the underground).\r\n\r\nAlso, Alex gave us some good advices the first day for having all we needed in the neighbourhood. Don’t miss Saraghina’s brunch (10 minutes walking from the house)! He even let us to keep our luggage in the house until we left to the airport in the evening on our last day in the city.",
            },
            {
              at: "2013-10-09T04:00:00.000Z",
              by: {
                _id: "622f3402e36c59e6164fabc4",
                fullname: "Ivan",
                imgUrl: "https://robohash.org/8866660?set=set1",
                id: "8866660",
              },
              txt: "The appartment was really clean, pretty spacious and kitchen was very well equipped! Its totally in line with all the information posted. \r\n\r\nAlex was very nice host, even allowed us to keep the luggage  after check out as we had a flight in the evening. Thank you once again for that! \r\n\r\nThe neighboorhood itself was safe, we had no issues at all, however I`d prefer staying   in Brooklyn districts closer to Manhattan area next time as  we were travelling to Midtown up to 1h. Being a citizen of the huge city too (Moscow, Russia) , underground is not our favorite place to be  :) \r\n\r\nOverall , it was a great stay. \r\n\r\n\r\n\r\n",
            },
            {
              at: "2013-11-01T04:00:00.000Z",
              by: {
                _id: "622f3402e36c59e6164fada2",
                fullname: "India",
                imgUrl: "https://robohash.org/228580?set=set1",
                id: "228580",
              },
              txt: "Communication with Alex was spot on.  He happily answered any questions and made it easy for me to arrive late at night and went above and beyond to help me have a good stay. \r\nThe apartment has been tastefully refurbished.  Extremely clean, and with all you could need for cooking.  The bed is so comfy.  The apartment is peaceful at night and I slept so well.   Some noise travels from Alex' apartment upstairs but it is only a little during the day.\r\nThe area is a bit out of the main hub of Williamsburg and Bushwick but everything is easily accessible with a short walk or the subway about 8 mins walk away.\r\nAlex left me a list of great stores, cafes and restaurants in the immediate area.  \r\nSome people may be concerned about the area at face value as it is a white minority but I felt safe at all times.  People seemed friendly.\r\n\r\n",
            },
            {
              at: "2013-11-10T05:00:00.000Z",
              by: {
                _id: "622f3406e36c59e6164fb9f9",
                fullname: "Pamela",
                imgUrl: "https://robohash.org/8145538?set=set1",
                id: "8145538",
              },
              txt: "Was an amazing stay, we charm your apartment and were very friendly. Thank you for all your attentions.",
            },
            {
              at: "2013-11-14T05:00:00.000Z",
              by: {
                _id: "622f3402e36c59e6164fae8c",
                fullname: "Lindsay",
                imgUrl: "https://robohash.org/979464?set=set1",
                id: "979464",
              },
              txt: "Shaila and Alex are wonderful hosts - very accommodating, friendly, and easy to communicate with. We found it fairly easy to get around the city from Bed-Stuy, even with the weekend subway schedule. The apartment is lovely, bright, and very clean, and overall it was a pleasure to stay for a few nights. It's been recently renovated and thoughtfully decorated - we felt quite comfortable during our stay and appreciated the art and other nice touches throughout. I'd highly recommend staying with Shaila and Alex.",
            },
            {
              at: "2013-12-01T05:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbf31",
                fullname: "Nadia",
                imgUrl: "https://robohash.org/1133198?set=set1",
                id: "1133198",
              },
              txt: "Great apartment, really spacious & has a lovely homely feel to it. Alex & Shaila were very helpful & welcoming, bed was really comfortable, good transport links, only a 20 min subway ride into manhattan, the area is really nice & quiet, unlike manhattan.\r\n\r\nThanks Alex & Shaila for having us ! Enjoy the Gin !! ",
            },
            {
              at: "2014-01-04T05:00:00.000Z",
              by: {
                _id: "622f3407e36c59e6164fbdab",
                fullname: "Barbara",
                imgUrl: "https://robohash.org/8310069?set=set1",
                id: "8310069",
              },
              txt: "The apartment is spacious and well furnished, the kitchen very well equipped and the bed very confortable. Sheila and alex were friendly and the comunication with them was easy.the neighborhood is very nice with typical town house, and very quite. Also the people Who lives there was very kind and helped us on many occasion. \nDefinitely raccommend you to spend your holidays in NY in the lovely apartment of sheila&alex! ",
            },
            {
              at: "2014-03-11T04:00:00.000Z",
              by: {
                _id: "622f3404e36c59e6164fb2c1",
                fullname: "Chris",
                imgUrl: "https://robohash.org/9935301?set=set1",
                id: "9935301",
              },
              txt: "We had a great time staying with Alex & Shaila. The apartment is just as depicted in the photos. Lots of space and very comfortable.  The house is located really close to buses and subway which was very convenient. The neighbourhood is fine with a couple of nice places to eat nearby.\r\n\r\nShaila and alex were really friendly and easy to communicate with if needed.  \r\n\r\nWe stayed for 2 months and would recommend it to others who are looking for a place in Brooklyn.",
            },
            {
              at: "2014-03-26T04:00:00.000Z",
              by: {
                _id: "622f3405e36c59e6164fb8fc",
                fullname: "Melody",
                imgUrl: "https://robohash.org/11278447?set=set1",
                id: "11278447",
              },
              txt: "Upon arriving, Alex was very helpful giving directions to the location. , he gave us a brief overview of everything, and let us settle in. It was a very cozy place to come back to after long days out exploring New York. The subways are very close. We preferred heading up to broadway to catch our trains (Depending where we were going) only because it was much more pleasant on sunny days to be above grounds if we could. It was great to have all amenities available, and at such a reasonable price.The only thing I will mention is that if you do plan on sleeping in- it might not happen as they do have a newborn who you can sometimes hear in the morning if you are a light sleeper.\r\nOverall,  I would recommend you stay at Alex & Shailas airbnb! It was a great and pleasant environment.",
            },
            {
              at: "2014-04-10T04:00:00.000Z",
              by: {
                _id: "622f3404e36c59e6164fb41e",
                fullname: "Carlos",
                imgUrl: "https://robohash.org/13281573?set=set1",
                id: "13281573",
              },
              txt: "We felt very happy those days at the home of Alex and Shaila. It is a very warm and comfortable place, it was like being at home.",
            },
            {
              at: "2014-04-21T04:00:00.000Z",
              by: {
                _id: "622f3403e36c59e6164fb087",
                fullname: "Sergei",
                imgUrl: "https://robohash.org/13487808?set=set1",
                id: "13487808",
              },
              txt: "Great host. Very clean, nice place and friendly people. Thanks again!",
            },
          ],
          _id: "622f337a75c7d36e498aaafb",
          imgUrls: ["101.jpeg", "037.jpeg", "038.jpeg", "043.jpeg", "113.jpeg"],
        },
      ],
    };
  },
  methods: {
    openStays() {
      console.log(this.isOpen);
      this.isOpen = true;
    },
    openOrders() {
      console.log(this.isOpen);
      this.isOpen = false;
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    revenueSum() {
      const revenue = this.orders.reduce((acc, order) => {
        return acc + order.amount;
      }, 0);
      return "$" + new Intl.NumberFormat("en-US").format(revenue);
    },
    guestSum() {
      const guests = this.orders.reduce((acc, order) => {
        return acc + order.guests;
      }, 0);
      return guests;
    },
  },
  components: {
    appHeader,
    orderList,
    hostStayList,
  },
};
</script>

