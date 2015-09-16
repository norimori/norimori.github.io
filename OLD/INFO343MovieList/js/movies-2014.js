var movies = [
  {
    "rank":1,
    "title":"Guardians of the Galaxy",
    "releaseDate":"8/1/14",
    "studio":"Walt Disney",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":328650120,
    "ticketsSold":40275750
  },
  {
    "rank":2,
    "title":"Captain America: The Winter Soldier",
    "releaseDate":"4/4/14",
    "studio":"Walt Disney",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":259746958,
    "ticketsSold":31831735
  },
  {
    "rank":3,
    "title":"The Lego Movie",
    "releaseDate":"2/7/14",
    "studio":"Warner Bros.",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":257784718,
    "ticketsSold":31591264
  },
  {
    "rank":4,
    "title":"Transformers: Age of Extinction",
    "releaseDate":"6/27/14",
    "studio":"Paramount Pictures",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":245439076,
    "ticketsSold":30078318
  },
  {
    "rank":5,
    "title":"Maleficent",
    "releaseDate":"5/30/14",
    "studio":"Walt Disney",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":241094390,
    "ticketsSold":29545881
  },
  {
    "rank":6,
    "title":"X-Men: Days of Future Past",
    "releaseDate":"5/23/14",
    "studio":"20th Century Fox",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":233921534,
    "ticketsSold":28666854
  },
  {
    "rank":7,
    "title":"Dawn of the Planet of the Apes",
    "releaseDate":"7/11/14",
    "studio":"20th Century Fox",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":208384821,
    "ticketsSold":25537355
  },
  {
    "rank":8,
    "title":"The Amazing Spider-Man 2",
    "releaseDate":"5/2/14",
    "studio":"Sony Pictures",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":202853933,
    "ticketsSold":24859550
  },
  {
    "rank":9,
    "title":"Godzilla",
    "releaseDate":"5/16/14",
    "studio":"Warner Bros.",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":200672193,
    "ticketsSold":24592180
  },
  {
    "rank":10,
    "title":"22 Jump Street",
    "releaseDate":"6/13/14",
    "studio":"Sony Pictures",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":191330864,
    "ticketsSold":23447409
  },
  {
    "rank":11,
    "title":"Teenage Mutant Ninja Turtles",
    "releaseDate":"8/8/14",
    "studio":"Paramount Pictures",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":190203837,
    "ticketsSold":23309293
  },
  {
    "rank":12,
    "title":"How to Train Your Dragon 2",
    "releaseDate":"6/13/14",
    "studio":"20th Century Fox",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":176617270,
    "ticketsSold":21644273
  },
  {
    "rank":13,
    "title":"Divergent",
    "releaseDate":"3/21/14",
    "studio":"Lionsgate",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":150947895,
    "ticketsSold":18498516
  },
  {
    "rank":14,
    "title":"Neighbors",
    "releaseDate":"5/9/14",
    "studio":"Universal",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":150086800,
    "ticketsSold":18392990
  },
  {
    "rank":15,
    "title":"Ride Along",
    "releaseDate":"1/17/14",
    "studio":"Universal",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":134202565,
    "ticketsSold":16446392
  },
  {
    "rank":16,
    "title":"Rio 2",
    "releaseDate":"4/11/14",
    "studio":"20th Century Fox",
    "genre":"Adventure",
    "rating":"G",
    "grossSales":131538435,
    "ticketsSold":16119906
  },
  {
    "rank":17,
    "title":"Gone Girl",
    "releaseDate":"10/3/14",
    "studio":"20th Century Fox",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":129601514,
    "ticketsSold":15882538
  },
  {
    "rank":18,
    "title":"Lucy",
    "releaseDate":"7/25/14",
    "studio":"Universal",
    "genre":"Action",
    "rating":"R",
    "grossSales":126484110,
    "ticketsSold":15500503
  },
  {
    "rank":19,
    "title":"The Fault in Our Stars",
    "releaseDate":"6/6/14",
    "studio":"20th Century Fox",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":124872350,
    "ticketsSold":15302984
  },
  {
    "rank":20,
    "title":"Lone Survivor",
    "releaseDate":"1/10/14",
    "studio":"Universal",
    "genre":"Action",
    "rating":"R",
    "grossSales":124853773,
    "ticketsSold":15300707
  },
  {
    "rank":21,
    "title":"Frozen",
    "releaseDate":"11/27/13",
    "studio":"Walt Disney",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":123620396,
    "ticketsSold":15149558
  },
  {
    "rank":22,
    "title":"Mr. Peabody & Sherman",
    "releaseDate":"3/7/14",
    "studio":"20th Century Fox",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":111506430,
    "ticketsSold":13665003
  },
  {
    "rank":23,
    "title":"300: Rise of an Empire",
    "releaseDate":"3/7/14",
    "studio":"Warner Bros.",
    "genre":"Action",
    "rating":"R",
    "grossSales":106580051,
    "ticketsSold":13061280
  },
  {
    "rank":24,
    "title":"Noah",
    "releaseDate":"3/28/14",
    "studio":"Paramount Pictures",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":101200044,
    "ticketsSold":12401966
  },
  {
    "rank":25,
    "title":"Edge of Tomorrow",
    "releaseDate":"6/6/14",
    "studio":"Warner Bros.",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":100206256,
    "ticketsSold":12280178
  },
  {
    "rank":26,
    "title":"The Maze Runner",
    "releaseDate":"9/19/14",
    "studio":"20th Century Fox",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":94730171,
    "ticketsSold":11609089
  },
  {
    "rank":27,
    "title":"The Equalizer",
    "releaseDate":"9/26/14",
    "studio":"Sony Pictures",
    "genre":"Action",
    "rating":"R",
    "grossSales":94658766,
    "ticketsSold":11600338
  },
  {
    "rank":28,
    "title":"Non-Stop",
    "releaseDate":"2/28/14",
    "studio":"Universal",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":91742160,
    "ticketsSold":11242911
  },
  {
    "rank":29,
    "title":"Heaven is for Real",
    "releaseDate":"4/16/14",
    "studio":"Sony Pictures",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":91386097,
    "ticketsSold":11199276
  },
  {
    "rank":30,
    "title":"Tammy",
    "releaseDate":"7/2/14",
    "studio":"Warner Bros.",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":84525432,
    "ticketsSold":10358508
  },
  {
    "rank":31,
    "title":"The Other Woman",
    "releaseDate":"4/25/14",
    "studio":"20th Century Fox",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":83911193,
    "ticketsSold":10283234
  },
  {
    "rank":32,
    "title":"Let's Be Cops",
    "releaseDate":"8/13/14",
    "studio":"20th Century Fox",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":81958588,
    "ticketsSold":10043944
  },
  {
    "rank":33,
    "title":"Annabelle",
    "releaseDate":"10/3/14",
    "studio":"Warner Bros.",
    "genre":"Horror",
    "rating":"R",
    "grossSales":80500136,
    "ticketsSold":9865212
  },
  {
    "rank":34,
    "title":"The Monuments Men",
    "releaseDate":"2/7/14",
    "studio":"Sony Pictures",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":78031620,
    "ticketsSold":9562698
  },
  {
    "rank":35,
    "title":"American Hustle",
    "releaseDate":"12/13/13",
    "studio":"Sony Pictures",
    "genre":"Black Comedy",
    "rating":"R",
    "grossSales":74598891,
    "ticketsSold":9142020
  },
  {
    "rank":36,
    "title":"Hercules",
    "releaseDate":"7/25/14",
    "studio":"Paramount Pictures",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":72688614,
    "ticketsSold":8907918
  },
  {
    "rank":37,
    "title":"The Purge: Anarchy",
    "releaseDate":"7/18/14",
    "studio":"Universal",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":71562550,
    "ticketsSold":8769920
  },
  {
    "rank":38,
    "title":"The Wolf of Wall Street",
    "releaseDate":"12/25/13",
    "studio":"Paramount Pictures",
    "genre":"Black Comedy",
    "rating":"R",
    "grossSales":67005580,
    "ticketsSold":8211468
  },
  {
    "rank":39,
    "title":"Think Like a Man Too",
    "releaseDate":"6/20/14",
    "studio":"Sony Pictures",
    "genre":"Romantic Comedy",
    "rating":"PG-13",
    "grossSales":65028687,
    "ticketsSold":7969201
  },
  {
    "rank":40,
    "title":"The Nut Job",
    "releaseDate":"1/17/14",
    "studio":"Open Road",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":64251538,
    "ticketsSold":7873962
  },
  {
    "rank":41,
    "title":"God's Not Dead",
    "releaseDate":"3/21/14",
    "studio":"Pure Flix Entertainment",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":60755732,
    "ticketsSold":7445555
  },
  {
    "rank":42,
    "title":"Son of God",
    "releaseDate":"2/28/14",
    "studio":"20th Century Fox",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":59700064,
    "ticketsSold":7316184
  },
  {
    "rank":43,
    "title":"Planes: Fire and Rescue",
    "releaseDate":"7/18/14",
    "studio":"Walt Disney",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":59106724,
    "ticketsSold":7243471
  },
  {
    "rank":44,
    "title":"The Grand Budapest Hotel",
    "releaseDate":"3/7/14",
    "studio":"Fox Searchlight",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":59076019,
    "ticketsSold":7239708
  },
  {
    "rank":45,
    "title":"RoboCop",
    "releaseDate":"2/12/14",
    "studio":"Sony Pictures",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":58607007,
    "ticketsSold":7182231
  },
  {
    "rank":46,
    "title":"The Hundred-Foot Journey",
    "releaseDate":"8/8/14",
    "studio":"Walt Disney",
    "genre":"Romantic Comedy",
    "rating":"PG",
    "grossSales":53843627,
    "ticketsSold":6598483
  },
  {
    "rank":47,
    "title":"Fury",
    "releaseDate":"10/17/14",
    "studio":"Sony Pictures",
    "genre":"Drama",
    "rating":"R",
    "grossSales":53287401,
    "ticketsSold":6530318
  },
  {
    "rank":48,
    "title":"No Good Deed",
    "releaseDate":"9/12/14",
    "studio":"Sony Pictures",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":52473195,
    "ticketsSold":6430538
  },
  {
    "rank":49,
    "title":"Muppets Most Wanted",
    "releaseDate":"3/21/14",
    "studio":"Walt Disney",
    "genre":"Comedy",
    "rating":"PG",
    "grossSales":51178893,
    "ticketsSold":6271923
  },
  {
    "rank":50,
    "title":"Dracula Untold",
    "releaseDate":"10/10/14",
    "studio":"Universal",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":50712925,
    "ticketsSold":6214819
  },
  {
    "rank":51,
    "title":"Jack Ryan: Shadow Recruit",
    "releaseDate":"1/17/14",
    "studio":"Paramount Pictures",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":50577412,
    "ticketsSold":6198212
  },
  {
    "rank":52,
    "title":"If I Stay",
    "releaseDate":"8/22/14",
    "studio":"Warner Bros.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":50430869,
    "ticketsSold":6180253
  },
  {
    "rank":53,
    "title":"About Last Night",
    "releaseDate":"2/14/14",
    "studio":"Sony Pictures",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":48637684,
    "ticketsSold":5960500
  },
  {
    "rank":54,
    "title":"Alexander and the Terrible, Horrible, No Good, Very Bad Day",
    "releaseDate":"10/10/14",
    "studio":"Walt Disney",
    "genre":"Comedy",
    "rating":"PG",
    "grossSales":48040624,
    "ticketsSold":5887331
  },
  {
    "rank":55,
    "title":"The Boxtrolls",
    "releaseDate":"9/26/14",
    "studio":"Focus Features",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":47821537,
    "ticketsSold":5860482
  },
  {
    "rank":56,
    "title":"Into the Storm",
    "releaseDate":"8/8/14",
    "studio":"Warner Bros.",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":47454626,
    "ticketsSold":5815517
  },
  {
    "rank":57,
    "title":"Jersey Boys",
    "releaseDate":"6/20/14",
    "studio":"Warner Bros.",
    "genre":"Drama",
    "rating":"R",
    "grossSales":47047013,
    "ticketsSold":5765565
  },
  {
    "rank":58,
    "title":"Blended",
    "releaseDate":"5/23/14",
    "studio":"Warner Bros.",
    "genre":"Romantic Comedy",
    "rating":"PG-13",
    "grossSales":46290741,
    "ticketsSold":5672884
  },
  {
    "rank":59,
    "title":"The Hobbit: The Desolation of Smaug",
    "releaseDate":"12/13/13",
    "studio":"Warner Bros.",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":44982433,
    "ticketsSold":5512553
  },
  {
    "rank":60,
    "title":"The Giver",
    "releaseDate":"8/15/14",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":44721962,
    "ticketsSold":5480632
  },
  {
    "rank":61,
    "title":"Need for Speed",
    "releaseDate":"3/14/14",
    "studio":"Walt Disney",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":43568507,
    "ticketsSold":5339277
  },
  {
    "rank":62,
    "title":"A Million Ways to Die in The West",
    "releaseDate":"5/30/14",
    "studio":"Universal",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":42720965,
    "ticketsSold":5235412
  },
  {
    "rank":63,
    "title":"Dolphin Tale 2",
    "releaseDate":"9/12/14",
    "studio":"Warner Bros.",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":41073851,
    "ticketsSold":5033560
  },
  {
    "rank":64,
    "title":"The Expendables 3",
    "releaseDate":"8/15/14",
    "studio":"Lionsgate",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":39322544,
    "ticketsSold":4818939
  },
  {
    "rank":65,
    "title":"Earth to Echo",
    "releaseDate":"7/2/14",
    "studio":"Relativity",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":38934842,
    "ticketsSold":4771426
  },
  {
    "rank":66,
    "title":"Sex Tape",
    "releaseDate":"7/18/14",
    "studio":"Sony Pictures",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":38543473,
    "ticketsSold":4723464
  },
  {
    "rank":67,
    "title":"August: Osage County",
    "releaseDate":"12/25/13",
    "studio":"Weinstein Co.",
    "genre":"Black Comedy",
    "rating":"R",
    "grossSales":37397041,
    "ticketsSold":4582970
  },
  {
    "rank":68,
    "title":"The Judge",
    "releaseDate":"10/10/14",
    "studio":"Warner Bros.",
    "genre":"Drama",
    "rating":"R",
    "grossSales":36999733,
    "ticketsSold":4534281
  },
  {
    "rank":69,
    "title":"Million Dollar Arm",
    "releaseDate":"5/16/14",
    "studio":"Walt Disney",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":36447959,
    "ticketsSold":4466661
  },
  {
    "rank":70,
    "title":"This is Where I Leave You",
    "releaseDate":"9/19/14",
    "studio":"Warner Bros.",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":33680670,
    "ticketsSold":4127533
  },
  {
    "rank":71,
    "title":"The Book of Life",
    "releaseDate":"10/17/14",
    "studio":"20th Century Fox",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":33323795,
    "ticketsSold":4083798
  },
  {
    "rank":72,
    "title":"Saving Mr. Banks",
    "releaseDate":"12/20/13",
    "studio":"Walt Disney",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":33036372,
    "ticketsSold":4048575
  },
  {
    "rank":73,
    "title":"Paranormal Activity: The Marked Ones",
    "releaseDate":"1/3/14",
    "studio":"Paramount Pictures",
    "genre":"Horror",
    "rating":"R",
    "grossSales":32462372,
    "ticketsSold":3978231
  },
  {
    "rank":74,
    "title":"Chef",
    "releaseDate":"5/9/14",
    "studio":"Open Road",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":31424003,
    "ticketsSold":3850980
  },
  {
    "rank":75,
    "title":"3 Days to Kill",
    "releaseDate":"2/21/14",
    "studio":"Relativity",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":30697999,
    "ticketsSold":3762009
  },
  {
    "rank":76,
    "title":"Deliver Us from Evil",
    "releaseDate":"7/2/14",
    "studio":"Sony Pictures",
    "genre":"Horror",
    "rating":"R",
    "grossSales":30577122,
    "ticketsSold":3747196
  },
  {
    "rank":77,
    "title":"Get on Up",
    "releaseDate":"8/1/14",
    "studio":"Universal",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":30569935,
    "ticketsSold":3746315
  },
  {
    "rank":78,
    "title":"When the Game Stands Tall",
    "releaseDate":"8/22/14",
    "studio":"Sony Pictures",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":30055570,
    "ticketsSold":3683280
  },
  {
    "rank":79,
    "title":"Anchorman 2: The Legend Continues",
    "releaseDate":"12/18/13",
    "studio":"Paramount Pictures",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":29273194,
    "ticketsSold":3587401
  },
  {
    "rank":80,
    "title":"Draft Day",
    "releaseDate":"4/11/14",
    "studio":"Lionsgate",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":28842237,
    "ticketsSold":3534587
  },
  {
    "rank":81,
    "title":"Oculus",
    "releaseDate":"4/11/14",
    "studio":"Relativity",
    "genre":"Horror",
    "rating":"R",
    "grossSales":27695246,
    "ticketsSold":3394025
  },
  {
    "rank":82,
    "title":"Ouija",
    "releaseDate":"10/24/14",
    "studio":"Universal",
    "genre":"Horror",
    "rating":"PG-13",
    "grossSales":27562970,
    "ticketsSold":3377814
  },
  {
    "rank":83,
    "title":"That Awkward Moment",
    "releaseDate":"1/31/14",
    "studio":"FilmDistrict",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":26068955,
    "ticketsSold":3194724
  },
  {
    "rank":84,
    "title":"A Walk Among the Tombstones",
    "releaseDate":"9/19/14",
    "studio":"Universal",
    "genre":"Action",
    "rating":"R",
    "grossSales":26017685,
    "ticketsSold":3188441
  },
  {
    "rank":85,
    "title":"The November Man",
    "releaseDate":"8/27/14",
    "studio":"Relativity",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":25018119,
    "ticketsSold":3065945
  },
  {
    "rank":86,
    "title":"The Hunger Games: Catching Fire",
    "releaseDate":"11/22/13",
    "studio":"Lionsgate",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":24579657,
    "ticketsSold":3012212
  },
  {
    "rank":87,
    "title":"Boyhood",
    "releaseDate":"7/11/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":23825526,
    "ticketsSold":2919794
  },
  {
    "rank":88,
    "title":"Endless Love",
    "releaseDate":"2/14/14",
    "studio":"Universal",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":23438250,
    "ticketsSold":2872334
  },
  {
    "rank":89,
    "title":"Her",
    "releaseDate":"1/10/14",
    "studio":"Warner Bros.",
    "genre":"Drama",
    "rating":"R",
    "grossSales":23303275,
    "ticketsSold":2855793
  },
  {
    "rank":90,
    "title":"Pompeii",
    "releaseDate":"2/21/14",
    "studio":"Sony Pictures",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":23169033,
    "ticketsSold":2839342
  },
  {
    "rank":91,
    "title":"Transcendence",
    "releaseDate":"4/18/14",
    "studio":"Warner Bros.",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":23022309,
    "ticketsSold":2821361
  },
  {
    "rank":92,
    "title":"John Wick",
    "releaseDate":"10/24/14",
    "studio":"Lionsgate",
    "genre":"Action",
    "rating":"R",
    "grossSales":21369126,
    "ticketsSold":2618765
  },
  {
    "rank":93,
    "title":"As Above, So Below",
    "releaseDate":"8/29/14",
    "studio":"Universal",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":21222315,
    "ticketsSold":2600773
  },
  {
    "rank":94,
    "title":"The Secret Life of Walter Mitty",
    "releaseDate":"12/25/13",
    "studio":"20th Century Fox",
    "genre":"Comedy",
    "rating":"PG",
    "grossSales":20767601,
    "ticketsSold":2545049
  },
  {
    "rank":95,
    "title":"Brick Mansions",
    "releaseDate":"4/25/14",
    "studio":"Relativity",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":20396829,
    "ticketsSold":2499611
  },
  {
    "rank":96,
    "title":"Philomena",
    "releaseDate":"11/22/13",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":19566628,
    "ticketsSold":2397871
  },
  {
    "rank":97,
    "title":"The Best of Me",
    "releaseDate":"10/17/14",
    "studio":"Relativity",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":19158404,
    "ticketsSold":2347843
  },
  {
    "rank":98,
    "title":"I, Frankenstein",
    "releaseDate":"1/24/14",
    "studio":"Lionsgate",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":19075290,
    "ticketsSold":2337658
  },
  {
    "rank":99,
    "title":"Gravity",
    "releaseDate":"10/4/13",
    "studio":"Warner Bros.",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":18948279,
    "ticketsSold":2322093
  },
  {
    "rank":100,
    "title":"The Legend of Hercules",
    "releaseDate":"1/10/14",
    "studio":"Lionsgate",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":18848538,
    "ticketsSold":2309869
  },
  {
    "rank":101,
    "title":"12 Years a Slave",
    "releaseDate":"10/18/13",
    "studio":"Fox Searchlight",
    "genre":"Drama",
    "rating":"R",
    "grossSales":18528651,
    "ticketsSold":2270668
  },
  {
    "rank":102,
    "title":"Bears",
    "releaseDate":"4/18/14",
    "studio":"Walt Disney",
    "genre":"Documentary",
    "rating":"G",
    "grossSales":17780194,
    "ticketsSold":2178945
  },
  {
    "rank":103,
    "title":"A Haunted House 2",
    "releaseDate":"4/18/14",
    "studio":"Open Road",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":17329487,
    "ticketsSold":2123711
  },
  {
    "rank":104,
    "title":"A Most Wanted Man",
    "releaseDate":"7/25/14",
    "studio":"Roadside Attractions",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":17225238,
    "ticketsSold":2110936
  },
  {
    "rank":105,
    "title":"Begin Again",
    "releaseDate":"6/27/14",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"R",
    "grossSales":16170632,
    "ticketsSold":1981695
  },
  {
    "rank":106,
    "title":"Tyler Perry's The Single Moms Club",
    "releaseDate":"3/14/14",
    "studio":"Lionsgate",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":15995891,
    "ticketsSold":1960280
  },
  {
    "rank":107,
    "title":"Devil's Due",
    "releaseDate":"1/17/14",
    "studio":"20th Century Fox",
    "genre":"Horror",
    "rating":"R",
    "grossSales":15821461,
    "ticketsSold":1938904
  },
  {
    "rank":108,
    "title":"Addicted",
    "releaseDate":"10/10/14",
    "studio":"Lionsgate",
    "genre":"Drama",
    "rating":"R",
    "grossSales":15771251,
    "ticketsSold":1932751
  },
  {
    "rank":109,
    "title":"And So It Goes",
    "releaseDate":"7/25/14",
    "studio":"Clarius Entertainment",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":15160801,
    "ticketsSold":1857941
  },
  {
    "rank":110,
    "title":"Step Up All In",
    "releaseDate":"8/8/14",
    "studio":"Lionsgate",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":14904384,
    "ticketsSold":1826517
  },
  {
    "rank":111,
    "title":"America: Imagine a World Without Her",
    "releaseDate":"6/27/14",
    "studio":"Lionsgate",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":14444502,
    "ticketsSold":1770159
  },
  {
    "rank":112,
    "title":"Sin City: A Dame to Kill For",
    "releaseDate":"8/22/14",
    "studio":"Weinstein Co.",
    "genre":"Action",
    "rating":"R",
    "grossSales":13757804,
    "ticketsSold":1686005
  },
  {
    "rank":113,
    "title":"Left Behind",
    "releaseDate":"10/3/14",
    "studio":"Freestyle Releasing",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":13553912,
    "ticketsSold":1661018
  },
  {
    "rank":114,
    "title":"St. Vincent",
    "releaseDate":"10/24/14",
    "studio":"Weinstein Co.",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":13454877,
    "ticketsSold":1648881
  },
  {
    "rank":115,
    "title":"Labor Day",
    "releaseDate":"1/31/14",
    "studio":"Paramount Pictures",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":13371528,
    "ticketsSold":1638667
  },
  {
    "rank":116,
    "title":"Winter's Tale",
    "releaseDate":"2/14/14",
    "studio":"Warner Bros.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":12600231,
    "ticketsSold":1544145
  },
  {
    "rank":117,
    "title":"Dallas Buyers Club",
    "releaseDate":"11/1/13",
    "studio":"Focus Features",
    "genre":"Drama",
    "rating":"R",
    "grossSales":11301097,
    "ticketsSold":1384938
  },
  {
    "rank":118,
    "title":"Nebraska",
    "releaseDate":"11/15/13",
    "studio":"Paramount Pictures",
    "genre":"Drama",
    "rating":"R",
    "grossSales":11269864,
    "ticketsSold":1381110
  },
  {
    "rank":119,
    "title":"47 Ronin",
    "releaseDate":"12/25/13",
    "studio":"Universal",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":10732010,
    "ticketsSold":1315197
  },
  {
    "rank":120,
    "title":"Belle",
    "releaseDate":"5/2/14",
    "studio":"Fox Searchlight",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":10726630,
    "ticketsSold":1314537
  },
  {
    "rank":121,
    "title":"The Drop",
    "releaseDate":"9/12/14",
    "studio":"Fox Searchlight",
    "genre":"Drama",
    "rating":"R",
    "grossSales":10699392,
    "ticketsSold":1311200
  },
  {
    "rank":122,
    "title":"Sabotage",
    "releaseDate":"3/28/14",
    "studio":"Open Road",
    "genre":"Action",
    "rating":"R",
    "grossSales":10508518,
    "ticketsSold":1287808
  },
  {
    "rank":123,
    "title":"Magic in the Moonlight",
    "releaseDate":"7/25/14",
    "studio":"Sony Pictures Classics",
    "genre":"Romantic Comedy",
    "rating":"PG-13",
    "grossSales":10491490,
    "ticketsSold":1285721
  },
  {
    "rank":124,
    "title":"Moms' Night Out",
    "releaseDate":"5/9/14",
    "studio":"Sony Pictures",
    "genre":"Comedy",
    "rating":"PG",
    "grossSales":10429707,
    "ticketsSold":1278150
  },
  {
    "rank":125,
    "title":"Grudge Match",
    "releaseDate":"12/25/13",
    "studio":"Warner Bros.",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":10297203,
    "ticketsSold":1261912
  },
  {
    "rank":126,
    "title":"The Quiet Ones",
    "releaseDate":"4/25/14",
    "studio":"Lionsgate",
    "genre":"Horror",
    "rating":"PG-13",
    "grossSales":8509867,
    "ticketsSold":1042875
  },
  {
    "rank":127,
    "title":"Walking with Dinosaurs",
    "releaseDate":"12/20/13",
    "studio":"20th Century Fox",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":8472528,
    "ticketsSold":1038300
  },
  {
    "rank":128,
    "title":"Legends of Oz: Dorothy's Return",
    "releaseDate":"5/9/14",
    "studio":"Clarius Entertainment",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":8462347,
    "ticketsSold":1037052
  },
  {
    "rank":129,
    "title":"Dhoom 3",
    "releaseDate":"12/20/13",
    "studio":"Yash Raj Films",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":8031955,
    "ticketsSold":984308
  },
  {
    "rank":130,
    "title":"Island of Lemurs: Madagascar",
    "releaseDate":"4/4/14",
    "studio":"Warner Bros.",
    "genre":"Documentary",
    "rating":"G",
    "grossSales":7820701,
    "ticketsSold":958419
  },
  {
    "rank":131,
    "title":"Vampire Academy",
    "releaseDate":"2/7/14",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":7791979,
    "ticketsSold":954899
  },
  {
    "rank":132,
    "title":"Bad Words",
    "releaseDate":"3/14/14",
    "studio":"Focus Features",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":7779614,
    "ticketsSold":953384
  },
  {
    "rank":133,
    "title":"Inside Llewyn Davis",
    "releaseDate":"12/6/13",
    "studio":"CBS Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":7435859,
    "ticketsSold":911257
  },
  {
    "rank":134,
    "title":"Cantinflas",
    "releaseDate":"8/29/14",
    "studio":"Pantelion Films",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":6382924,
    "ticketsSold":782221
  },
  {
    "rank":135,
    "title":"Jerusalem",
    "releaseDate":"9/13/13",
    "studio":"National Geographic Entertainment",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":5671875,
    "ticketsSold":695082
  },
  {
    "rank":136,
    "title":"Cesar Chavez",
    "releaseDate":"3/28/14",
    "studio":"Lionsgate",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":5571497,
    "ticketsSold":682781
  },
  {
    "rank":137,
    "title":"Meet the Mormons",
    "releaseDate":"10/10/14",
    "studio":"Purdie Distribution",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":5301425,
    "ticketsSold":649684
  },
  {
    "rank":138,
    "title":"Hubble 3D",
    "releaseDate":"3/19/10",
    "studio":"Warner Bros.",
    "genre":"Documentary",
    "rating":"G",
    "grossSales":5277300,
    "ticketsSold":646727
  },
  {
    "rank":139,
    "title":"Tyler Perry's A Madea Christmas",
    "releaseDate":"12/13/13",
    "studio":"Lionsgate",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":5228388,
    "ticketsSold":640733
  },
  {
    "rank":140,
    "title":"The Wind Rises",
    "releaseDate":"7/20/13",
    "studio":"",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":5201879,
    "ticketsSold":637485
  },
  {
    "rank":141,
    "title":"The Skeleton Twins",
    "releaseDate":"9/12/14",
    "studio":"Lionsgate/Roadside Attractions",
    "genre":"Drama",
    "rating":"R",
    "grossSales":4974377,
    "ticketsSold":609605
  },
  {
    "rank":142,
    "title":"Journey to the South Pacific",
    "releaseDate":"11/27/13",
    "studio":"MacGillivray Freeman Films",
    "genre":"Documentary",
    "rating":"G",
    "grossSales":4905488,
    "ticketsSold":601162
  },
  {
    "rank":143,
    "title":"Snow Piercer",
    "releaseDate":"10/30/13",
    "studio":"",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":4563029,
    "ticketsSold":559194
  },
  {
    "rank":144,
    "title":"The Railway Man",
    "releaseDate":"4/11/14",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"R",
    "grossSales":4438438,
    "ticketsSold":543926
  },
  {
    "rank":145,
    "title":"The Lunchbox",
    "releaseDate":"2/28/14",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":4231500,
    "ticketsSold":518566
  },
  {
    "rank":146,
    "title":"Fading Gigolo",
    "releaseDate":"4/18/14",
    "studio":"Millennium Entertainment",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":3747833,
    "ticketsSold":459293
  },
  {
    "rank":147,
    "title":"Ida",
    "releaseDate":"5/2/14",
    "studio":"Music Box Films",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":3704612,
    "ticketsSold":453996
  },
  {
    "rank":148,
    "title":"Calvary",
    "releaseDate":"8/1/14",
    "studio":"Fox Searchlight",
    "genre":"Black Comedy",
    "rating":"R",
    "grossSales":3600006,
    "ticketsSold":441177
  },
  {
    "rank":149,
    "title":"Wish I Was Here",
    "releaseDate":"7/18/14",
    "studio":"Focus Features",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":3591299,
    "ticketsSold":440110
  },
  {
    "rank":150,
    "title":"What If",
    "releaseDate":"8/8/14",
    "studio":"CBS Films",
    "genre":"Romantic Comedy",
    "rating":"PG-13",
    "grossSales":3493000,
    "ticketsSold":428063
  },
  {
    "rank":151,
    "title":"My Old Lady",
    "releaseDate":"9/10/14",
    "studio":"Cohen Media Group",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":3431186,
    "ticketsSold":420488
  },
  {
    "rank":152,
    "title":"The Grand Seduction",
    "releaseDate":"5/30/14",
    "studio":"Entertainment One",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":3409304,
    "ticketsSold":417806
  },
  {
    "rank":153,
    "title":"Thor: The Dark World",
    "releaseDate":"11/8/13",
    "studio":"Walt Disney",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":3387321,
    "ticketsSold":415112
  },
  {
    "rank":154,
    "title":"Veronica Mars",
    "releaseDate":"3/14/14",
    "studio":"Warner Bros.",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":3322127,
    "ticketsSold":407123
  },
  {
    "rank":155,
    "title":"Nightcrawler",
    "releaseDate":"10/31/14",
    "studio":"Open Road",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":3200000,
    "ticketsSold":392156
  },
  {
    "rank":156,
    "title":"Obvious Child",
    "releaseDate":"6/6/14",
    "studio":"A24",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":3122616,
    "ticketsSold":382673
  },
  {
    "rank":157,
    "title":"Birdman",
    "releaseDate":"10/17/14",
    "studio":"Fox Searchlight",
    "genre":"Black Comedy",
    "rating":"R",
    "grossSales":2999258,
    "ticketsSold":367556
  },
  {
    "rank":158,
    "title":"The Book Thief",
    "releaseDate":"11/8/13",
    "studio":"20th Century Fox",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":2925873,
    "ticketsSold":358562
  },
  {
    "rank":159,
    "title":"The Trip to Italy",
    "releaseDate":"8/15/14",
    "studio":"IFC Films",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":2854500,
    "ticketsSold":349816
  },
  {
    "rank":160,
    "title":"The Admiral: Roaring Currents",
    "releaseDate":"8/8/14",
    "studio":"CJ Entertainment",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":2830989,
    "ticketsSold":346934
  },
  {
    "rank":161,
    "title":"The Identical",
    "releaseDate":"9/5/14",
    "studio":"Freestyle Releasing",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":2827666,
    "ticketsSold":346527
  },
  {
    "rank":162,
    "title":"The Fluffy Movie",
    "releaseDate":"7/25/14",
    "studio":"Open Road",
    "genre":"Concert/Performance",
    "rating":"PG-13",
    "grossSales":2827393,
    "ticketsSold":346494
  },
  {
    "rank":163,
    "title":"The Raid 2",
    "releaseDate":"3/28/14",
    "studio":"Sony Pictures Classics",
    "genre":"Action",
    "rating":"R",
    "grossSales":2625803,
    "ticketsSold":321789
  },
  {
    "rank":164,
    "title":"Cloudy with a Chance of Meatballs 2",
    "releaseDate":"9/27/13",
    "studio":"Sony Pictures",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":2619858,
    "ticketsSold":321061
  },
  {
    "rank":165,
    "title":"Under the Skin",
    "releaseDate":"4/4/14",
    "studio":"A24",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":2605039,
    "ticketsSold":319244
  },
  {
    "rank":166,
    "title":"Bang Bang",
    "releaseDate":"10/2/14",
    "studio":"FIP",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":2581138,
    "ticketsSold":316315
  },
  {
    "rank":167,
    "title":"Captain Phillips",
    "releaseDate":"10/11/13",
    "studio":"Sony Pictures",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":2498360,
    "ticketsSold":306171
  },
  {
    "rank":168,
    "title":"Kick",
    "releaseDate":"7/25/14",
    "studio":"UTV Communications",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":2472695,
    "ticketsSold":303026
  },
  {
    "rank":169,
    "title":"2014 Oscar Shorts",
    "releaseDate":"1/31/14",
    "studio":"ShortsHD",
    "genre":"Multiple Genres",
    "rating":"Not Rated",
    "grossSales":2357890,
    "ticketsSold":288957
  },
  {
    "rank":170,
    "title":"Mandela: Long Walk to Freedom",
    "releaseDate":"11/29/13",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":2317267,
    "ticketsSold":283978
  },
  {
    "rank":171,
    "title":"Kill the Messenger",
    "releaseDate":"10/10/14",
    "studio":"Focus Features",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":2294904,
    "ticketsSold":281238
  },
  {
    "rank":172,
    "title":"The Good Lie",
    "releaseDate":"10/3/14",
    "studio":"Warner Bros.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":2249773,
    "ticketsSold":275707
  },
  {
    "rank":173,
    "title":"2 States",
    "releaseDate":"4/18/14",
    "studio":"UTV Communications",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":2238175,
    "ticketsSold":274286
  },
  {
    "rank":174,
    "title":"Le Week-End",
    "releaseDate":"3/14/14",
    "studio":"Music Box Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":2225098,
    "ticketsSold":272683
  },
  {
    "rank":175,
    "title":"Love is Strange",
    "releaseDate":"8/22/14",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"R",
    "grossSales":2214019,
    "ticketsSold":271325
  },
  {
    "rank":176,
    "title":"Words and Pictures",
    "releaseDate":"5/23/14",
    "studio":"Roadside Attractions",
    "genre":"Romantic Comedy",
    "rating":"PG-13",
    "grossSales":2171257,
    "ticketsSold":266085
  },
  {
    "rank":177,
    "title":"Gloria",
    "releaseDate":"1/24/14",
    "studio":"Roadside Attractions",
    "genre":"Drama",
    "rating":"R",
    "grossSales":2110357,
    "ticketsSold":258622
  },
  {
    "rank":178,
    "title":"Dear White People",
    "releaseDate":"10/17/14",
    "studio":"Lionsgate/Roadside Attractions",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":2098549,
    "ticketsSold":257175
  },
  {
    "rank":179,
    "title":"The Great Beauty",
    "releaseDate":"11/15/13",
    "studio":"Janus Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":2097019,
    "ticketsSold":256987
  },
  {
    "rank":180,
    "title":"Trailer Park Boys 3: Don't Legalize It",
    "releaseDate":"4/18/14",
    "studio":"Entertainment One",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":2090607,
    "ticketsSold":256201
  },
  {
    "rank":181,
    "title":"The Immigrant",
    "releaseDate":"5/16/14",
    "studio":"RADiUS-TWC",
    "genre":"Drama",
    "rating":"R",
    "grossSales":2013456,
    "ticketsSold":246747
  },
  {
    "rank":182,
    "title":"Only Lovers Left Alive",
    "releaseDate":"4/11/14",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"R",
    "grossSales":1876685,
    "ticketsSold":229985
  },
  {
    "rank":183,
    "title":"Tusk",
    "releaseDate":"9/19/14",
    "studio":"A24",
    "genre":"Horror",
    "rating":"R",
    "grossSales":1772002,
    "ticketsSold":217157
  },
  {
    "rank":184,
    "title":"Tim's Vermeer",
    "releaseDate":"1/31/14",
    "studio":"Sony Pictures Classics",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":1670806,
    "ticketsSold":204755
  },
  {
    "rank":185,
    "title":"Persecuted",
    "releaseDate":"7/18/14",
    "studio":"One Media, LLC",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":1557494,
    "ticketsSold":190869
  },
  {
    "rank":186,
    "title":"Fed Up",
    "releaseDate":"5/9/14",
    "studio":"RADiUS-TWC",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":1538898,
    "ticketsSold":188590
  },
  {
    "rank":187,
    "title":"Finding Vivian Maier",
    "releaseDate":"3/28/14",
    "studio":"IFC Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":1509131,
    "ticketsSold":184942
  },
  {
    "rank":188,
    "title":"Locke",
    "releaseDate":"4/25/14",
    "studio":"A24",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":1370646,
    "ticketsSold":167971
  },
  {
    "rank":189,
    "title":"Gimme Shelter",
    "releaseDate":"1/24/14",
    "studio":"Roadside Attractions",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":1359910,
    "ticketsSold":166655
  },
  {
    "rank":190,
    "title":"Free Birds",
    "releaseDate":"11/1/13",
    "studio":"Relativity",
    "genre":"Comedy",
    "rating":"PG",
    "grossSales":1336480,
    "ticketsSold":163784
  },
  {
    "rank":191,
    "title":"The Past",
    "releaseDate":"12/20/13",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":1242428,
    "ticketsSold":152258
  },
  {
    "rank":192,
    "title":"Singham Returns",
    "releaseDate":"8/15/14",
    "studio":"Eros Entertainment",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":1226581,
    "ticketsSold":150316
  },
  {
    "rank":193,
    "title":"Pride",
    "releaseDate":"9/26/14",
    "studio":"CBS Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":1194163,
    "ticketsSold":146343
  },
  {
    "rank":194,
    "title":"Repentance",
    "releaseDate":"2/28/14",
    "studio":"Codeblack Entertainment",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":1189612,
    "ticketsSold":145785
  },
  {
    "rank":195,
    "title":"Jai Ho",
    "releaseDate":"1/24/14",
    "studio":"Eros Entertainment",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":1187266,
    "ticketsSold":145498
  },
  {
    "rank":196,
    "title":"The Invisible Woman",
    "releaseDate":"12/25/13",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"R",
    "grossSales":1175082,
    "ticketsSold":144005
  },
  {
    "rank":197,
    "title":"The Remaining",
    "releaseDate":"9/5/14",
    "studio":"Sony Pictures",
    "genre":"Horror",
    "rating":"PG-13",
    "grossSales":1169603,
    "ticketsSold":143333
  },
  {
    "rank":198,
    "title":"The Rover",
    "releaseDate":"6/13/14",
    "studio":"A24",
    "genre":"Drama",
    "rating":"R",
    "grossSales":1109199,
    "ticketsSold":135931
  },
  {
    "rank":199,
    "title":"50 to 1",
    "releaseDate":"3/21/14",
    "studio":"Ten Furlongs",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":1069454,
    "ticketsSold":131060
  },
  {
    "rank":200,
    "title":"Khoobsurat",
    "releaseDate":"9/19/14",
    "studio":"UTV Communications",
    "genre":"Romantic Comedy",
    "rating":"Not Rated",
    "grossSales":1055593,
    "ticketsSold":129361
  },
  {
    "rank":201,
    "title":"Haider",
    "releaseDate":"10/2/14",
    "studio":"UTV Communications",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":1048143,
    "ticketsSold":128448
  },
  {
    "rank":202,
    "title":"Third Person",
    "releaseDate":"6/20/14",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"R",
    "grossSales":1019038,
    "ticketsSold":124882
  },
  {
    "rank":203,
    "title":"Stalingrad",
    "releaseDate":"10/10/13",
    "studio":"Sony Pictures",
    "genre":"Drama",
    "rating":"R",
    "grossSales":1013945,
    "ticketsSold":124257
  },
  {
    "rank":204,
    "title":"Enemy",
    "releaseDate":"3/14/14",
    "studio":"A24",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":1005824,
    "ticketsSold":123262
  },
  {
    "rank":205,
    "title":"The Song",
    "releaseDate":"9/26/14",
    "studio":"Samuel Goldwyn Films",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":1005691,
    "ticketsSold":123246
  },
  {
    "rank":206,
    "title":"Last Vegas",
    "releaseDate":"11/1/13",
    "studio":"CBS Films",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":1000814,
    "ticketsSold":122648
  },
  {
    "rank":207,
    "title":"Hector and the Search for Happiness",
    "releaseDate":"9/19/14",
    "studio":"Relativity",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":921522,
    "ticketsSold":112931
  },
  {
    "rank":208,
    "title":"Delivery Man",
    "releaseDate":"11/22/13",
    "studio":"Walt Disney",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":891066,
    "ticketsSold":109199
  },
  {
    "rank":209,
    "title":"Más negro que la noche",
    "releaseDate":"9/26/14",
    "studio":"Lionsgate",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":870063,
    "ticketsSold":106625
  },
  {
    "rank":210,
    "title":"Particle Fever",
    "releaseDate":"3/5/14",
    "studio":"Abramorama Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":869838,
    "ticketsSold":106597
  },
  {
    "rank":211,
    "title":"Atlas Shrugged: Who Is John Galt?",
    "releaseDate":"9/12/14",
    "studio":"Atlas Distribution",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":851690,
    "ticketsSold":104373
  },
  {
    "rank":212,
    "title":"Justin Bieber's Believe",
    "releaseDate":"12/25/13",
    "studio":"Open Road",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":817150,
    "ticketsSold":100140
  },
  {
    "rank":213,
    "title":"Life Itself",
    "releaseDate":"7/4/14",
    "studio":"Magnolia Pictures",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":810454,
    "ticketsSold":99320
  },
  {
    "rank":214,
    "title":"Alone Yet Not Alone",
    "releaseDate":"6/13/14",
    "studio":"Hammond Entertainment",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":795755,
    "ticketsSold":97518
  },
  {
    "rank":215,
    "title":"Nymphomaniac: Volume I",
    "releaseDate":"3/21/14",
    "studio":"Magnolia Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":785896,
    "ticketsSold":96310
  },
  {
    "rank":216,
    "title":"Born to be Wild 3D",
    "releaseDate":"4/8/11",
    "studio":"Warner Bros.",
    "genre":"Documentary",
    "rating":"G",
    "grossSales":785625,
    "ticketsSold":96277
  },
  {
    "rank":217,
    "title":"Palo Alto",
    "releaseDate":"5/9/14",
    "studio":"TriBeca Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":767732,
    "ticketsSold":94084
  },
  {
    "rank":218,
    "title":"Breakup Buddies",
    "releaseDate":"10/3/14",
    "studio":"China Lion Film Distribution",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":742000,
    "ticketsSold":90931
  },
  {
    "rank":219,
    "title":"Whiplash",
    "releaseDate":"10/10/14",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"R",
    "grossSales":730386,
    "ticketsSold":89508
  },
  {
    "rank":220,
    "title":"Space Station",
    "releaseDate":"4/19/02",
    "studio":"IMAX Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":728699,
    "ticketsSold":89301
  },
  {
    "rank":221,
    "title":"Land Ho!",
    "releaseDate":"7/11/14",
    "studio":"Sony Pictures Classics",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":724983,
    "ticketsSold":88845
  },
  {
    "rank":222,
    "title":"Yves Saint Laurent",
    "releaseDate":"6/25/14",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"R",
    "grossSales":723593,
    "ticketsSold":88675
  },
  {
    "rank":223,
    "title":"Holiday",
    "releaseDate":"6/6/14",
    "studio":"Reliance Entertainment",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":706893,
    "ticketsSold":86629
  },
  {
    "rank":224,
    "title":"Men, Women and Children",
    "releaseDate":"10/1/14",
    "studio":"Paramount Pictures",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":705908,
    "ticketsSold":86508
  },
  {
    "rank":225,
    "title":"Frankie and Alice",
    "releaseDate":"12/10/10",
    "studio":"Self Distributed",
    "genre":"Drama",
    "rating":"R",
    "grossSales":695876,
    "ticketsSold":85278
  },
  {
    "rank":226,
    "title":"Blue Jasmine",
    "releaseDate":"7/26/13",
    "studio":"Sony Pictures Classics",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":660237,
    "ticketsSold":80911
  },
  {
    "rank":227,
    "title":"Jodorowsky's Dune",
    "releaseDate":"3/21/14",
    "studio":"Sony Pictures Classics",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":646512,
    "ticketsSold":79229
  },
  {
    "rank":228,
    "title":"Frank",
    "releaseDate":"8/15/14",
    "studio":"Magnolia Pictures",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":633076,
    "ticketsSold":77582
  },
  {
    "rank":229,
    "title":"U2 3D",
    "releaseDate":"1/23/08",
    "studio":"National Geographic Entertainment",
    "genre":"Concert/Performance",
    "rating":"G",
    "grossSales":625031,
    "ticketsSold":78818
  },
  {
    "rank":230,
    "title":"To the Arctic 3D",
    "releaseDate":"4/20/12",
    "studio":"Warner Bros.",
    "genre":"Documentary",
    "rating":"G",
    "grossSales":613889,
    "ticketsSold":75231
  },
  {
    "rank":231,
    "title":"The Signal",
    "releaseDate":"6/13/14",
    "studio":"Focus Features",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":600896,
    "ticketsSold":73639
  },
  {
    "rank":232,
    "title":"The Saratov Approach",
    "releaseDate":"10/9/13",
    "studio":"Purdie Distribution",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":594318,
    "ticketsSold":72833
  },
  {
    "rank":233,
    "title":"Kochadaiiyaan",
    "releaseDate":"4/11/14",
    "studio":"Eros Entertainment",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":583172,
    "ticketsSold":71467
  },
  {
    "rank":234,
    "title":"The Disappearance of Eleanor Rigby",
    "releaseDate":"9/12/14",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"R",
    "grossSales":583035,
    "ticketsSold":71450
  },
  {
    "rank":235,
    "title":"Omar",
    "releaseDate":"2/21/14",
    "studio":"Adopt Films",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":583000,
    "ticketsSold":71446
  },
  {
    "rank":236,
    "title":"Fanny",
    "releaseDate":"12/20/13",
    "studio":"Mongrel Media",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":579336,
    "ticketsSold":70997
  },
  {
    "rank":237,
    "title":"Before I Go to Sleep",
    "releaseDate":"10/31/14",
    "studio":"Clarius Entertainment",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":575000,
    "ticketsSold":70465
  },
  {
    "rank":238,
    "title":"Walking the Camino: Six Ways to Santiago",
    "releaseDate":"9/6/13",
    "studio":"Future Educational Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":557144,
    "ticketsSold":68277
  },
  {
    "rank":239,
    "title":"Jackass Presents: Bad Grandpa",
    "releaseDate":"10/25/13",
    "studio":"Paramount Pictures",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":552379,
    "ticketsSold":67693
  },
  {
    "rank":240,
    "title":"Metropolis",
    "releaseDate":"10/7/11",
    "studio":"Kino Classics",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":529603,
    "ticketsSold":67123
  },
  {
    "rank":241,
    "title":"Highway",
    "releaseDate":"2/21/14",
    "studio":"UTV Communications",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":529136,
    "ticketsSold":64845
  },
  {
    "rank":242,
    "title":"Dom Hemingway",
    "releaseDate":"4/2/14",
    "studio":"Fox Searchlight",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":523511,
    "ticketsSold":64155
  },
  {
    "rank":243,
    "title":"Finding Fanny",
    "releaseDate":"9/12/14",
    "studio":"FIP",
    "genre":"Romantic Comedy",
    "rating":"Not Rated",
    "grossSales":515393,
    "ticketsSold":63160
  },
  {
    "rank":244,
    "title":"Les vacances du petit Nicolas",
    "releaseDate":"7/11/14",
    "studio":"Mongrel Media",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":513654,
    "ticketsSold":62947
  },
  {
    "rank":245,
    "title":"The One I Love",
    "releaseDate":"8/22/14",
    "studio":"RADiUS-TWC",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":511635,
    "ticketsSold":62700
  },
  {
    "rank":246,
    "title":"Tracks",
    "releaseDate":"9/19/14",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":458205,
    "ticketsSold":56152
  },
  {
    "rank":247,
    "title":"The Captive",
    "releaseDate":"12/31/14",
    "studio":"A24",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":450000,
    "ticketsSold":55147
  },
  {
    "rank":248,
    "title":"In Secret",
    "releaseDate":"2/21/14",
    "studio":"Roadside Attractions",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":444179,
    "ticketsSold":54433
  },
  {
    "rank":249,
    "title":"Lee Daniels' The Butler",
    "releaseDate":"8/16/13",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":439784,
    "ticketsSold":53895
  },
  {
    "rank":250,
    "title":"La petite reine",
    "releaseDate":"6/13/14",
    "studio":"Entertainment One",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":430527,
    "ticketsSold":52760
  },
  {
    "rank":251,
    "title":"Beijing Love Story",
    "releaseDate":"2/14/14",
    "studio":"China Lion Film Distribution",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":423598,
    "ticketsSold":51911
  },
  {
    "rank":252,
    "title":"Cold in July",
    "releaseDate":"5/23/14",
    "studio":"IFC Films",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":423223,
    "ticketsSold":51865
  },
  {
    "rank":253,
    "title":"But Always",
    "releaseDate":"9/5/14",
    "studio":"China Lion Film Distribution",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":417558,
    "ticketsSold":51171
  },
  {
    "rank":254,
    "title":"The German Doctor",
    "releaseDate":"4/25/14",
    "studio":"Samuel Goldwyn Films",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":414912,
    "ticketsSold":50847
  },
  {
    "rank":255,
    "title":"The Two Faces of January",
    "releaseDate":"9/26/14",
    "studio":"Magnolia Pictures",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":414185,
    "ticketsSold":50757
  },
  {
    "rank":256,
    "title":"Ek Villain",
    "releaseDate":"6/27/14",
    "studio":"Eros Entertainment",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":414116,
    "ticketsSold":50749
  },
  {
    "rank":257,
    "title":"Last Days in Vietnam",
    "releaseDate":"9/5/14",
    "studio":"American Experience/PBS Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":401081,
    "ticketsSold":49152
  },
  {
    "rank":258,
    "title":"The Face of Love",
    "releaseDate":"3/7/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":385069,
    "ticketsSold":47189
  },
  {
    "rank":259,
    "title":"Humpty Sharma Ki Dulhania",
    "releaseDate":"7/11/14",
    "studio":"Reliance Big Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":380011,
    "ticketsSold":46569
  },
  {
    "rank":260,
    "title":"Joe",
    "releaseDate":"4/11/14",
    "studio":"Roadside Attractions",
    "genre":"Drama",
    "rating":"R",
    "grossSales":373375,
    "ticketsSold":45756
  },
  {
    "rank":261,
    "title":"The Guest",
    "releaseDate":"9/17/14",
    "studio":"Picturehouse",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":369911,
    "ticketsSold":45332
  },
  {
    "rank":262,
    "title":"When Comedy Went to School",
    "releaseDate":"8/2/13",
    "studio":"International Film Circuit",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":365548,
    "ticketsSold":44797
  },
  {
    "rank":263,
    "title":"Le Chef",
    "releaseDate":"6/20/14",
    "studio":"Cohen Media Group",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":342667,
    "ticketsSold":41993
  },
  {
    "rank":264,
    "title":"Venus in Fur",
    "releaseDate":"6/20/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":342183,
    "ticketsSold":41934
  },
  {
    "rank":265,
    "title":"Jimi: All is By My Side",
    "releaseDate":"9/26/14",
    "studio":"XLrater Media",
    "genre":"Drama",
    "rating":"R",
    "grossSales":340911,
    "ticketsSold":41778
  },
  {
    "rank":266,
    "title":"23 Blast",
    "releaseDate":"10/24/14",
    "studio":"Abramorama Films",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":337091,
    "ticketsSold":41310
  },
  {
    "rank":267,
    "title":"Hasee Toh Phasee",
    "releaseDate":"2/7/14",
    "studio":"Reliance Entertainment",
    "genre":"Romantic Comedy",
    "rating":"Not Rated",
    "grossSales":336985,
    "ticketsSold":41297
  },
  {
    "rank":268,
    "title":"Chinese Puzzle",
    "releaseDate":"5/16/14",
    "studio":"Cohen Media Group",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":336500,
    "ticketsSold":41237
  },
  {
    "rank":269,
    "title":"I Origins",
    "releaseDate":"7/18/14",
    "studio":"Fox Searchlight",
    "genre":"Drama",
    "rating":"R",
    "grossSales":336472,
    "ticketsSold":41234
  },
  {
    "rank":270,
    "title":"Like Father, Like Son",
    "releaseDate":"1/17/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":333678,
    "ticketsSold":40891
  },
  {
    "rank":271,
    "title":"Elaine Stritch: Shoot Me",
    "releaseDate":"2/21/14",
    "studio":"IFC Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":330083,
    "ticketsSold":40451
  },
  {
    "rank":272,
    "title":"Nymphomaniac: Volume II",
    "releaseDate":"4/4/14",
    "studio":"Magnolia Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":327167,
    "ticketsSold":40093
  },
  {
    "rank":273,
    "title":"Stranger by the Lake",
    "releaseDate":"1/24/14",
    "studio":"Strand",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":323070,
    "ticketsSold":39591
  },
  {
    "rank":274,
    "title":"Björk: Biophilia Live",
    "releaseDate":"9/26/14",
    "studio":"Cinema Purgatorio",
    "genre":"Concert/Performance",
    "rating":"Not Rated",
    "grossSales":319456,
    "ticketsSold":39149
  },
  {
    "rank":275,
    "title":"The Hornet's Nest",
    "releaseDate":"5/9/14",
    "studio":"Freestyle Releasing",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":312706,
    "ticketsSold":38321
  },
  {
    "rank":276,
    "title":"A Five Star Life",
    "releaseDate":"7/18/14",
    "studio":"Music Box Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":306917,
    "ticketsSold":37612
  },
  {
    "rank":277,
    "title":"LՎcume des jours",
    "releaseDate":"4/24/13",
    "studio":"",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":302301,
    "ticketsSold":37046
  },
  {
    "rank":278,
    "title":"Ender's Game",
    "releaseDate":"11/1/13",
    "studio":"Lionsgate",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":300879,
    "ticketsSold":36872
  },
  {
    "rank":279,
    "title":"The Dance of Reality",
    "releaseDate":"5/23/14",
    "studio":"ABCKO Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":293680,
    "ticketsSold":35990
  },
  {
    "rank":280,
    "title":"Innocence",
    "releaseDate":"9/5/14",
    "studio":"JSC Entertainment",
    "genre":"Action",
    "rating":"PG-13",
    "grossSales":292824,
    "ticketsSold":35885
  },
  {
    "rank":281,
    "title":"The Unknown Known",
    "releaseDate":"4/2/14",
    "studio":"RADiUS-TWC",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":275658,
    "ticketsSold":33781
  },
  {
    "rank":282,
    "title":"Main Tera Hero",
    "releaseDate":"4/4/14",
    "studio":"Eros Entertainment",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":274579,
    "ticketsSold":33649
  },
  {
    "rank":283,
    "title":"Night Moves",
    "releaseDate":"5/30/14",
    "studio":"Cinedigm",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":271755,
    "ticketsSold":33303
  },
  {
    "rank":284,
    "title":"Kill Your Darlings",
    "releaseDate":"10/18/13",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"R",
    "grossSales":269443,
    "ticketsSold":33019
  },
  {
    "rank":285,
    "title":"Life of Crime",
    "releaseDate":"8/29/14",
    "studio":"Lionsgate/Roadside Attractions",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":265452,
    "ticketsSold":32530
  },
  {
    "rank":286,
    "title":"Punjab 1984",
    "releaseDate":"6/27/14",
    "studio":"",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":265000,
    "ticketsSold":32475
  },
  {
    "rank":287,
    "title":"All is Lost",
    "releaseDate":"10/18/13",
    "studio":"Roadside Attractions",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":263092,
    "ticketsSold":32241
  },
  {
    "rank":288,
    "title":"Blue Ruin",
    "releaseDate":"4/25/14",
    "studio":"RADiUS-TWC",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":258113,
    "ticketsSold":31631
  },
  {
    "rank":289,
    "title":"The Zero Theorem",
    "releaseDate":"9/19/14",
    "studio":"Amplify",
    "genre":"Drama",
    "rating":"R",
    "grossSales":257706,
    "ticketsSold":31581
  },
  {
    "rank":290,
    "title":"Alive Inside",
    "releaseDate":"7/18/14",
    "studio":"Bond/360",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":256682,
    "ticketsSold":31456
  },
  {
    "rank":291,
    "title":"20,000 Days on Earth",
    "releaseDate":"9/17/14",
    "studio":"Drafthouse Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":255928,
    "ticketsSold":31363
  },
  {
    "rank":292,
    "title":"Entertainment",
    "releaseDate":"8/8/14",
    "studio":"B4U Movies",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":255000,
    "ticketsSold":31250
  },
  {
    "rank":293,
    "title":"Elle s'en va",
    "releaseDate":"11/22/13",
    "studio":"Mongrel Media",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":252344,
    "ticketsSold":30924
  },
  {
    "rank":294,
    "title":"The Galapagos Affair: Satan Came to Eden",
    "releaseDate":"4/4/14",
    "studio":"Zeitgeist",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":247159,
    "ticketsSold":30289
  },
  {
    "rank":295,
    "title":"The Green Prince",
    "releaseDate":"9/12/14",
    "studio":"Music Box Films",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":236742,
    "ticketsSold":29012
  },
  {
    "rank":296,
    "title":"Awake: The Life of Yogananda",
    "releaseDate":"10/10/14",
    "studio":"Counterpoint Films & Self-Realization Fellowship",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":219316,
    "ticketsSold":26876
  },
  {
    "rank":297,
    "title":"Child's Pose",
    "releaseDate":"2/19/14",
    "studio":"Zeitgeist",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":218224,
    "ticketsSold":26743
  },
  {
    "rank":298,
    "title":"A Matter of Faith",
    "releaseDate":"10/17/14",
    "studio":"",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":216097,
    "ticketsSold":26482
  },
  {
    "rank":299,
    "title":"Supermensch: The Legend of Shep Gordon",
    "releaseDate":"6/6/14",
    "studio":"RADiUS-TWC",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":212701,
    "ticketsSold":26066
  },
  {
    "rank":300,
    "title":"Out of the Furnace",
    "releaseDate":"12/4/13",
    "studio":"Relativity",
    "genre":"Drama",
    "rating":"R",
    "grossSales":209849,
    "ticketsSold":25716
  },
  {
    "rank":301,
    "title":"The Breakup Guru",
    "releaseDate":"6/27/14",
    "studio":"China Lion Film Distribution",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":208959,
    "ticketsSold":25607
  },
  {
    "rank":302,
    "title":"Rob the Mob",
    "releaseDate":"3/21/14",
    "studio":"Millennium Entertainment",
    "genre":"Drama",
    "rating":"R",
    "grossSales":206909,
    "ticketsSold":25356
  },
  {
    "rank":303,
    "title":"Despicable Me 2",
    "releaseDate":"7/2/13",
    "studio":"Universal",
    "genre":"Comedy",
    "rating":"PG",
    "grossSales":205290,
    "ticketsSold":25158
  },
  {
    "rank":304,
    "title":"Jinn",
    "releaseDate":"4/4/14",
    "studio":"Freestyle Releasing",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":202348,
    "ticketsSold":24797
  },
  {
    "rank":305,
    "title":"The Double",
    "releaseDate":"5/9/14",
    "studio":"Magnolia Pictures",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":200406,
    "ticketsSold":24559
  },
  {
    "rank":306,
    "title":"A Summer's Tale",
    "releaseDate":"6/20/14",
    "studio":"Big World Pictures",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":198127,
    "ticketsSold":24280
  },
  {
    "rank":307,
    "title":"Un Été en Provence",
    "releaseDate":"5/9/14",
    "studio":"Mongrel Media",
    "genre":"",
    "rating":"Not Rated",
    "grossSales":191839,
    "ticketsSold":23509
  },
  {
    "rank":308,
    "title":"Code Black",
    "releaseDate":"6/20/14",
    "studio":"Long Shot Factory",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":190229,
    "ticketsSold":23312
  },
  {
    "rank":309,
    "title":"The Armstrong Lie",
    "releaseDate":"11/8/13",
    "studio":"Sony Pictures Classics",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":186846,
    "ticketsSold":22897
  },
  {
    "rank":310,
    "title":"The Blue Room",
    "releaseDate":"10/3/14",
    "studio":"IFC Films",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":184581,
    "ticketsSold":22620
  },
  {
    "rank":311,
    "title":"We Are The Best!",
    "releaseDate":"5/30/14",
    "studio":"Magnolia Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":180590,
    "ticketsSold":22131
  },
  {
    "rank":312,
    "title":"The Tale of the Princess Kaguya",
    "releaseDate":"10/17/14",
    "studio":"GKIDS",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":172710,
    "ticketsSold":21165
  },
  {
    "rank":313,
    "title":"Anita: Speaking Truth to Power",
    "releaseDate":"3/21/14",
    "studio":"Samuel Goldwyn Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":172634,
    "ticketsSold":21156
  },
  {
    "rank":314,
    "title":"Afternoon of a Faun: Tanaquil Le Clercq",
    "releaseDate":"2/5/14",
    "studio":"Kino Lorber",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":172120,
    "ticketsSold":21093
  },
  {
    "rank":315,
    "title":"That Demon Within",
    "releaseDate":"4/18/14",
    "studio":"China Lion Film Distribution",
    "genre":"",
    "rating":"Not Rated",
    "grossSales":172010,
    "ticketsSold":21079
  },
  {
    "rank":316,
    "title":"Art and Craft",
    "releaseDate":"9/19/14",
    "studio":"",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":171551,
    "ticketsSold":21023
  },
  {
    "rank":317,
    "title":"The Last of Robin Hood",
    "releaseDate":"8/29/14",
    "studio":"Samuel Goldwyn Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":171138,
    "ticketsSold":20972
  },
  {
    "rank":318,
    "title":"God's Pocket",
    "releaseDate":"5/9/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":166457,
    "ticketsSold":20399
  },
  {
    "rank":319,
    "title":"Nas: Time is Illmatic",
    "releaseDate":"10/1/14",
    "studio":"TriBeca Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":163309,
    "ticketsSold":20013
  },
  {
    "rank":320,
    "title":"Deep Sea 3-D",
    "releaseDate":"3/3/06",
    "studio":"Warner Bros.",
    "genre":"Documentary",
    "rating":"G",
    "grossSales":162505,
    "ticketsSold":19914
  },
  {
    "rank":321,
    "title":"Pirates",
    "releaseDate":"9/12/14",
    "studio":"Well Go USA",
    "genre":"Adventure",
    "rating":"Not Rated",
    "grossSales":160133,
    "ticketsSold":19624
  },
  {
    "rank":322,
    "title":"Ernest & Celestine",
    "releaseDate":"3/1/13",
    "studio":"Mongrel Media",
    "genre":"Adventure",
    "rating":"Not Rated",
    "grossSales":156644,
    "ticketsSold":19196
  },
  {
    "rank":323,
    "title":"9 mois ferme",
    "releaseDate":"4/4/14",
    "studio":"Mongrel Media",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":154485,
    "ticketsSold":18931
  },
  {
    "rank":324,
    "title":"Citizen Koch",
    "releaseDate":"6/6/14",
    "studio":"Variance Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":153908,
    "ticketsSold":18861
  },
  {
    "rank":325,
    "title":"Alan Partridge",
    "releaseDate":"4/4/14",
    "studio":"Magnolia Pictures",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":153426,
    "ticketsSold":18802
  },
  {
    "rank":326,
    "title":"A Coffee in Berlin",
    "releaseDate":"6/9/14",
    "studio":"Music Box Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":150275,
    "ticketsSold":18416
  },
  {
    "rank":327,
    "title":"From the Rough",
    "releaseDate":"4/23/14",
    "studio":"Freestyle Releasing",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":150000,
    "ticketsSold":18382
  },
  {
    "rank":328,
    "title":"James Cameron's Deepsea Challenge 3D",
    "releaseDate":"8/8/14",
    "studio":"DisruptiveLA",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":149879,
    "ticketsSold":18367
  },
  {
    "rank":329,
    "title":"Kids for Cash",
    "releaseDate":"2/7/14",
    "studio":"SenArt Films",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":143178,
    "ticketsSold":17546
  },
  {
    "rank":330,
    "title":"Mistaken for Strangers",
    "releaseDate":"3/28/14",
    "studio":"Abramorama Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":138991,
    "ticketsSold":17033
  },
  {
    "rank":331,
    "title":"The Best Man Holiday",
    "releaseDate":"11/15/13",
    "studio":"Universal",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":138445,
    "ticketsSold":16966
  },
  {
    "rank":332,
    "title":"The Congress",
    "releaseDate":"8/29/14",
    "studio":"Drafthouse Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":136677,
    "ticketsSold":16749
  },
  {
    "rank":333,
    "title":"Dancing in Jaffa",
    "releaseDate":"4/11/14",
    "studio":"IFC Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":136257,
    "ticketsSold":16698
  },
  {
    "rank":334,
    "title":"Aa Gaye Munde U.K. De",
    "releaseDate":"8/8/14",
    "studio":"Yash Raj Films",
    "genre":"Romantic Comedy",
    "rating":"Not Rated",
    "grossSales":135000,
    "ticketsSold":16544
  },
  {
    "rank":335,
    "title":"Redwood Highway",
    "releaseDate":"4/18/14",
    "studio":"Monterey Media",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":133955,
    "ticketsSold":16416
  },
  {
    "rank":336,
    "title":"The Jewish Cardinal",
    "releaseDate":"1/3/14",
    "studio":"Film Movement",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":133672,
    "ticketsSold":16381
  },
  {
    "rank":337,
    "title":"Gore Vidal: The United States of Amnesia",
    "releaseDate":"5/23/14",
    "studio":"IFC Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":133296,
    "ticketsSold":16335
  },
  {
    "rank":338,
    "title":"20 Feet From Stardom",
    "releaseDate":"6/14/13",
    "studio":"RADiUS-TWC",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":132765,
    "ticketsSold":16270
  },
  {
    "rank":339,
    "title":"Raja Natwarlal",
    "releaseDate":"8/29/14",
    "studio":"UTV Communications",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":131105,
    "ticketsSold":16066
  },
  {
    "rank":340,
    "title":"Bethlehem",
    "releaseDate":"4/4/14",
    "studio":"Mongrel Media",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":127115,
    "ticketsSold":15577
  },
  {
    "rank":341,
    "title":"CitizenFour",
    "releaseDate":"10/24/14",
    "studio":"RADiUS-TWC",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":126321,
    "ticketsSold":15480
  },
  {
    "rank":342,
    "title":"Make Your Move",
    "releaseDate":"4/18/14",
    "studio":"High Top Releasing",
    "genre":"Musical",
    "rating":"PG-13",
    "grossSales":125106,
    "ticketsSold":15331
  },
  {
    "rank":343,
    "title":"For a Woman",
    "releaseDate":"5/2/14",
    "studio":"Film Movement",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":122764,
    "ticketsSold":15044
  },
  {
    "rank":344,
    "title":"Escape Plan",
    "releaseDate":"10/18/13",
    "studio":"Lionsgate",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":122503,
    "ticketsSold":15012
  },
  {
    "rank":345,
    "title":"Afflicted",
    "releaseDate":"4/4/14",
    "studio":"CBS Films",
    "genre":"Horror",
    "rating":"R",
    "grossSales":121179,
    "ticketsSold":14850
  },
  {
    "rank":346,
    "title":"Kundo: Age of the Rampant",
    "releaseDate":"8/29/14",
    "studio":"Well Go USA",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":120857,
    "ticketsSold":14810
  },
  {
    "rank":347,
    "title":"Finding Fela!",
    "releaseDate":"8/1/14",
    "studio":"Kino Lorber",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":119114,
    "ticketsSold":14597
  },
  {
    "rank":348,
    "title":"Personal Tailor",
    "releaseDate":"12/20/13",
    "studio":"China Lion Film Distribution",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":115503,
    "ticketsSold":14154
  },
  {
    "rank":349,
    "title":"Knights of Badassdom",
    "releaseDate":"1/21/14",
    "studio":"Entertainment One",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":113531,
    "ticketsSold":13913
  },
  {
    "rank":350,
    "title":"The Liberator",
    "releaseDate":"10/3/14",
    "studio":"Cohen Media Group",
    "genre":"Drama",
    "rating":"R",
    "grossSales":113067,
    "ticketsSold":13856
  },
  {
    "rank":351,
    "title":"Keep On Keepin' On",
    "releaseDate":"9/19/14",
    "studio":"RADiUS-TWC",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":109713,
    "ticketsSold":13445
  },
  {
    "rank":352,
    "title":"Glen Campbell: I'll Be Me",
    "releaseDate":"10/24/14",
    "studio":"Area 23a",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":109565,
    "ticketsSold":13427
  },
  {
    "rank":353,
    "title":"Listen Up Philip",
    "releaseDate":"10/17/14",
    "studio":"TriBeca Films",
    "genre":"Black Comedy",
    "rating":"Not Rated",
    "grossSales":107100,
    "ticketsSold":13125
  },
  {
    "rank":354,
    "title":"The 100 - Year - Old Man Who Climbed Out Of The Window and Disappeared",
    "releaseDate":"10/3/14",
    "studio":"Mongrel Media",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":106319,
    "ticketsSold":13029
  },
  {
    "rank":355,
    "title":"En solitaire",
    "releaseDate":"4/18/14",
    "studio":"Mongrel Media",
    "genre":"Adventure",
    "rating":"Not Rated",
    "grossSales":103628,
    "ticketsSold":12699
  },
  {
    "rank":356,
    "title":"God Help the Girl",
    "releaseDate":"9/5/14",
    "studio":"Amplify",
    "genre":"Musical",
    "rating":"Not Rated",
    "grossSales":102757,
    "ticketsSold":12592
  },
  {
    "rank":357,
    "title":"Coherence",
    "releaseDate":"6/20/14",
    "studio":"Oscilloscope Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":102617,
    "ticketsSold":12575
  },
  {
    "rank":358,
    "title":"Korengal",
    "releaseDate":"5/30/14",
    "studio":"Saboteur Media",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":101310,
    "ticketsSold":12415
  },
  {
    "rank":359,
    "title":"Ivory Tower",
    "releaseDate":"6/13/14",
    "studio":"Samuel Goldwyn Films",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":99555,
    "ticketsSold":12200
  },
  {
    "rank":360,
    "title":"Young & Beautiful",
    "releaseDate":"4/25/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":99118,
    "ticketsSold":12146
  },
  {
    "rank":361,
    "title":"Generation War",
    "releaseDate":"1/15/14",
    "studio":"Music Box Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":91595,
    "ticketsSold":11224
  },
  {
    "rank":362,
    "title":"Girl on a Bicycle",
    "releaseDate":"2/14/14",
    "studio":"Monterey Media",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":91401,
    "ticketsSold":11201
  },
  {
    "rank":363,
    "title":"The Best Offer",
    "releaseDate":"1/3/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":88719,
    "ticketsSold":10872
  },
  {
    "rank":364,
    "title":"Breathe In",
    "releaseDate":"3/28/14",
    "studio":"Cohen Media Group",
    "genre":"Drama",
    "rating":"R",
    "grossSales":88100,
    "ticketsSold":10796
  },
  {
    "rank":365,
    "title":"The Golden Era",
    "releaseDate":"10/17/14",
    "studio":"China Lion Film Distribution",
    "genre":"",
    "rating":"Not Rated",
    "grossSales":87700,
    "ticketsSold":10747
  },
  {
    "rank":366,
    "title":"One Chance",
    "releaseDate":"10/10/14",
    "studio":"Weinstein Co.",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":83749,
    "ticketsSold":10263
  },
  {
    "rank":367,
    "title":"Visitors",
    "releaseDate":"1/24/14",
    "studio":"Cinedigm",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":81470,
    "ticketsSold":9984
  },
  {
    "rank":368,
    "title":"Life After Beth",
    "releaseDate":"8/15/14",
    "studio":"A24",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":80315,
    "ticketsSold":9842
  },
  {
    "rank":369,
    "title":"12 O'Clock Boys",
    "releaseDate":"1/31/14",
    "studio":"Oscilloscope Pictures",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":80030,
    "ticketsSold":9807
  },
  {
    "rank":370,
    "title":"Godzilla: The Original Japanese Version",
    "releaseDate":"5/7/04",
    "studio":"Rialto Pictures",
    "genre":"Horror",
    "rating":"Not Rated",
    "grossSales":78869,
    "ticketsSold":9665
  },
  {
    "rank":371,
    "title":"Fort McCoy",
    "releaseDate":"8/15/14",
    "studio":"Monterey Media",
    "genre":"Drama",
    "rating":"R",
    "grossSales":78147,
    "ticketsSold":9576
  },
  {
    "rank":372,
    "title":"Whitey: United States of America v. James J. Bulger",
    "releaseDate":"6/27/14",
    "studio":"Magnolia Pictures",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":75881,
    "ticketsSold":9299
  },
  {
    "rank":373,
    "title":"Just a Sigh",
    "releaseDate":"3/21/14",
    "studio":"Distrib Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":75531,
    "ticketsSold":9256
  },
  {
    "rank":374,
    "title":"Cutie and the Boxer",
    "releaseDate":"8/16/13",
    "studio":"Radius",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":74707,
    "ticketsSold":9155
  },
  {
    "rank":375,
    "title":"Enough Said",
    "releaseDate":"9/18/13",
    "studio":"Fox Searchlight",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":74467,
    "ticketsSold":9125
  },
  {
    "rank":376,
    "title":"Laggies",
    "releaseDate":"10/24/14",
    "studio":"A24",
    "genre":"Drama",
    "rating":"R",
    "grossSales":74139,
    "ticketsSold":9085
  },
  {
    "rank":377,
    "title":"The Broken Circle Breakdown",
    "releaseDate":"11/1/13",
    "studio":"TriBeca Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":73338,
    "ticketsSold":8987
  },
  {
    "rank":378,
    "title":"Pump",
    "releaseDate":"9/19/14",
    "studio":"Submarine Deluxe",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":72277,
    "ticketsSold":8857
  },
  {
    "rank":379,
    "title":"Better Living Through Chemistry",
    "releaseDate":"3/14/14",
    "studio":"Samuel Goldwyn Films",
    "genre":"Black Comedy",
    "rating":"Not Rated",
    "grossSales":72273,
    "ticketsSold":8856
  },
  {
    "rank":380,
    "title":"The Square",
    "releaseDate":"10/25/13",
    "studio":"Noujaim Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":71290,
    "ticketsSold":8736
  },
  {
    "rank":381,
    "title":"Final: The Rapture",
    "releaseDate":"9/13/13",
    "studio":"",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":70095,
    "ticketsSold":8590
  },
  {
    "rank":382,
    "title":"Take Me to the River",
    "releaseDate":"9/12/14",
    "studio":"Abramorama Films",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":68598,
    "ticketsSold":8406
  },
  {
    "rank":383,
    "title":"Je t'aime, je t'aime",
    "releaseDate":"2/14/14",
    "studio":"The Film Desk",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":67503,
    "ticketsSold":8272
  },
  {
    "rank":384,
    "title":"For No Good Reason",
    "releaseDate":"4/25/14",
    "studio":"Sony Pictures Classics",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":67105,
    "ticketsSold":8223
  },
  {
    "rank":385,
    "title":"Advanced Style",
    "releaseDate":"9/26/14",
    "studio":"Bond/360",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":66758,
    "ticketsSold":8181
  },
  {
    "rank":386,
    "title":"Watermark",
    "releaseDate":"9/27/13",
    "studio":"Mongrel Media",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":64031,
    "ticketsSold":7846
  },
  {
    "rank":387,
    "title":"Jealousy",
    "releaseDate":"8/13/14",
    "studio":"",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":63946,
    "ticketsSold":7836
  },
  {
    "rank":388,
    "title":"Heropanti",
    "releaseDate":"5/23/14",
    "studio":"UTV Communications",
    "genre":"",
    "rating":"Not Rated",
    "grossSales":63649,
    "ticketsSold":7800
  },
  {
    "rank":389,
    "title":"The Notebook",
    "releaseDate":"8/29/14",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"R",
    "grossSales":63053,
    "ticketsSold":7727
  },
  {
    "rank":390,
    "title":"The Last Sentence",
    "releaseDate":"6/20/14",
    "studio":"Music Box Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":62506,
    "ticketsSold":7660
  },
  {
    "rank":391,
    "title":"Percy Jackson: Sea of Monsters",
    "releaseDate":"8/7/13",
    "studio":"20th Century Fox",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":62025,
    "ticketsSold":7601
  },
  {
    "rank":392,
    "title":"Tiger & Bunny the Movie: The Rising",
    "releaseDate":"3/14/14",
    "studio":"Eleven Arts",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":61562,
    "ticketsSold":7544
  },
  {
    "rank":393,
    "title":"The Art of the Steal",
    "releaseDate":"3/14/14",
    "studio":"RADiUS-TWC",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":61446,
    "ticketsSold":7530
  },
  {
    "rank":394,
    "title":"Maidentrip",
    "releaseDate":"12/20/13",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":60985,
    "ticketsSold":7473
  },
  {
    "rank":395,
    "title":"I Am Eleven",
    "releaseDate":"9/12/14",
    "studio":"International Film Circuit",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":60647,
    "ticketsSold":7432
  },
  {
    "rank":396,
    "title":"Siddharth",
    "releaseDate":"6/27/14",
    "studio":"Zeitgeist",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":60537,
    "ticketsSold":7418
  },
  {
    "rank":397,
    "title":"Frontera",
    "releaseDate":"9/5/14",
    "studio":"Magnolia Pictures",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":59696,
    "ticketsSold":7315
  },
  {
    "rank":398,
    "title":"Cheap Thrills",
    "releaseDate":"3/21/14",
    "studio":"Drafthouse Films",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":59424,
    "ticketsSold":7282
  },
  {
    "rank":399,
    "title":"Sweet Dreams",
    "releaseDate":"11/15/13",
    "studio":"International Film Circuit",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":59403,
    "ticketsSold":7279
  },
  {
    "rank":400,
    "title":"Walk of Shame",
    "releaseDate":"5/2/14",
    "studio":"Focus Features",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":59209,
    "ticketsSold":7256
  },
  {
    "rank":401,
    "title":"Borgman",
    "releaseDate":"6/6/14",
    "studio":"Drafthouse Films",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":57475,
    "ticketsSold":7043
  },
  {
    "rank":402,
    "title":"Ai Weiwei: The Fake Case",
    "releaseDate":"5/16/14",
    "studio":"International Film Circuit",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":57322,
    "ticketsSold":7024
  },
  {
    "rank":403,
    "title":"Cuban Fury",
    "releaseDate":"4/11/14",
    "studio":"Entertainment One",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":57105,
    "ticketsSold":6998
  },
  {
    "rank":404,
    "title":"The Rocket",
    "releaseDate":"1/10/14",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":56823,
    "ticketsSold":6963
  },
  {
    "rank":405,
    "title":"The Bag Man",
    "releaseDate":"2/28/14",
    "studio":"Cinedigm",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":56574,
    "ticketsSold":6933
  },
  {
    "rank":406,
    "title":"In Bloom",
    "releaseDate":"1/10/14",
    "studio":"Big World Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":56092,
    "ticketsSold":6874
  },
  {
    "rank":407,
    "title":"Rudderless",
    "releaseDate":"10/17/14",
    "studio":"Samuel Goldwyn Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":56001,
    "ticketsSold":6862
  },
  {
    "rank":408,
    "title":"Big Men",
    "releaseDate":"3/14/14",
    "studio":"Abramorama Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":55032,
    "ticketsSold":6744
  },
  {
    "rank":409,
    "title":"Starred Up",
    "releaseDate":"8/27/14",
    "studio":"TriBeca Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":54915,
    "ticketsSold":6729
  },
  {
    "rank":410,
    "title":"Wetlands",
    "releaseDate":"9/5/14",
    "studio":"Strand",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":54707,
    "ticketsSold":6704
  },
  {
    "rank":411,
    "title":"Through a Lens Darkly",
    "releaseDate":"8/27/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":54423,
    "ticketsSold":6669
  },
  {
    "rank":412,
    "title":"Ilo Ilo",
    "releaseDate":"4/4/14",
    "studio":"Film Movement",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":54071,
    "ticketsSold":6626
  },
  {
    "rank":413,
    "title":"Before the Winter Chill",
    "releaseDate":"3/7/14",
    "studio":"Mongrel Media",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":53970,
    "ticketsSold":6613
  },
  {
    "rank":414,
    "title":"At Middleton",
    "releaseDate":"1/31/14",
    "studio":"Anchor Bay Entertainment",
    "genre":"Drama",
    "rating":"R",
    "grossSales":53837,
    "ticketsSold":6597
  },
  {
    "rank":415,
    "title":"Half of a Yellow Sun",
    "releaseDate":"5/16/14",
    "studio":"Monterey Media",
    "genre":"Drama",
    "rating":"R",
    "grossSales":53645,
    "ticketsSold":6574
  },
  {
    "rank":416,
    "title":"Il conformista",
    "releaseDate":"8/29/14",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"R",
    "grossSales":52879,
    "ticketsSold":6480
  },
  {
    "rank":417,
    "title":"Hellion",
    "releaseDate":"6/13/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":51748,
    "ticketsSold":6341
  },
  {
    "rank":418,
    "title":"Hateship Loveship",
    "releaseDate":"4/11/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":51610,
    "ticketsSold":6324
  },
  {
    "rank":419,
    "title":"To Be Takei",
    "releaseDate":"8/22/14",
    "studio":"Starz Media",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":51481,
    "ticketsSold":6308
  },
  {
    "rank":420,
    "title":"The Missing Picture",
    "releaseDate":"3/19/14",
    "studio":"",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":51337,
    "ticketsSold":6291
  },
  {
    "rank":421,
    "title":"The Internet's Own Boy: The Story of Aaron Swartz",
    "releaseDate":"6/27/14",
    "studio":"Participant Media",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":50735,
    "ticketsSold":6217
  },
  {
    "rank":422,
    "title":"The Retrieval",
    "releaseDate":"4/2/14",
    "studio":"Variance Films",
    "genre":"Western",
    "rating":"R",
    "grossSales":50257,
    "ticketsSold":6158
  },
  {
    "rank":423,
    "title":"A Touch of Sin",
    "releaseDate":"10/4/13",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":50128,
    "ticketsSold":6143
  },
  {
    "rank":424,
    "title":"NOW: In the Wings on a World Stage",
    "releaseDate":"5/2/14",
    "studio":"Spacey",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":49591,
    "ticketsSold":6077
  },
  {
    "rank":425,
    "title":"Lucky Them",
    "releaseDate":"5/30/14",
    "studio":"IFC Films",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":48995,
    "ticketsSold":6004
  },
  {
    "rank":426,
    "title":"Amercian Mustang",
    "releaseDate":"1/17/14",
    "studio":"Vitagraph Films",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":48218,
    "ticketsSold":5909
  },
  {
    "rank":427,
    "title":"A Master Builder",
    "releaseDate":"7/23/14",
    "studio":"Abramorama Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":46874,
    "ticketsSold":5744
  },
  {
    "rank":428,
    "title":"Hiroshima Mon Amour",
    "releaseDate":"10/17/14",
    "studio":"Rialto Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":46743,
    "ticketsSold":5728
  },
  {
    "rank":429,
    "title":"Diplomacy",
    "releaseDate":"10/15/14",
    "studio":"Zeitgeist",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":46097,
    "ticketsSold":5649
  },
  {
    "rank":430,
    "title":"Filmistan",
    "releaseDate":"6/6/14",
    "studio":"UTV Communications",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":45406,
    "ticketsSold":5564
  },
  {
    "rank":431,
    "title":"There's No Place Like Utopia",
    "releaseDate":"7/18/14",
    "studio":"Rocky Mountain Pictures",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":45254,
    "ticketsSold":5545
  },
  {
    "rank":432,
    "title":"The Dog",
    "releaseDate":"8/8/14",
    "studio":"Drafthouse Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":44582,
    "ticketsSold":5463
  },
  {
    "rank":433,
    "title":"Alphaville",
    "releaseDate":"2/7/14",
    "studio":"Rialto Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":43729,
    "ticketsSold":5358
  },
  {
    "rank":434,
    "title":"If You Build It",
    "releaseDate":"1/10/14",
    "studio":"",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":43393,
    "ticketsSold":5317
  },
  {
    "rank":435,
    "title":"Water & Power",
    "releaseDate":"5/2/14",
    "studio":"North/South Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":42557,
    "ticketsSold":5215
  },
  {
    "rank":436,
    "title":"Blood Ties",
    "releaseDate":"3/21/14",
    "studio":"Roadside Attractions",
    "genre":"Drama",
    "rating":"R",
    "grossSales":42472,
    "ticketsSold":5204
  },
  {
    "rank":437,
    "title":"Interior. Leather Bar.",
    "releaseDate":"1/2/14",
    "studio":"Strand",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":40862,
    "ticketsSold":5007
  },
  {
    "rank":438,
    "title":"Teenage",
    "releaseDate":"3/14/14",
    "studio":"Oscilloscope Pictures",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":40169,
    "ticketsSold":4922
  },
  {
    "rank":439,
    "title":"Decoding Annie Parker",
    "releaseDate":"5/2/14",
    "studio":"Entertainment One",
    "genre":"Drama",
    "rating":"R",
    "grossSales":39850,
    "ticketsSold":4883
  },
  {
    "rank":440,
    "title":"Two Lives",
    "releaseDate":"2/28/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":39673,
    "ticketsSold":4861
  },
  {
    "rank":441,
    "title":"Child of God",
    "releaseDate":"8/1/14",
    "studio":"",
    "genre":"Drama",
    "rating":"R",
    "grossSales":37949,
    "ticketsSold":4650
  },
  {
    "rank":442,
    "title":"Marius",
    "releaseDate":"12/13/13",
    "studio":"Mongrel Media",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":36532,
    "ticketsSold":4476
  },
  {
    "rank":443,
    "title":"Force Majeure",
    "releaseDate":"10/24/14",
    "studio":"Magnolia Pictures",
    "genre":"Drama",
    "rating":"R",
    "grossSales":36416,
    "ticketsSold":4462
  },
  {
    "rank":444,
    "title":"Don Jon",
    "releaseDate":"9/27/13",
    "studio":"Relativity",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":36275,
    "ticketsSold":4445
  },
  {
    "rank":445,
    "title":"Fire in the Blood",
    "releaseDate":"9/6/13",
    "studio":"International Film Circuit",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":36228,
    "ticketsSold":4439
  },
  {
    "rank":446,
    "title":"Not Cool",
    "releaseDate":"9/19/14",
    "studio":"Starz Media",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":35688,
    "ticketsSold":4373
  },
  {
    "rank":447,
    "title":"Beneath the Harvest Sky",
    "releaseDate":"4/25/14",
    "studio":"TriBeca Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":34768,
    "ticketsSold":4260
  },
  {
    "rank":448,
    "title":"Filth",
    "releaseDate":"5/30/14",
    "studio":"Magnolia Pictures",
    "genre":"Black Comedy",
    "rating":"R",
    "grossSales":34411,
    "ticketsSold":4217
  },
  {
    "rank":449,
    "title":"It Felt Like Love",
    "releaseDate":"3/21/14",
    "studio":"Variance Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":33817,
    "ticketsSold":4144
  },
  {
    "rank":450,
    "title":"Blue is the Warmest Color",
    "releaseDate":"10/25/13",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"NC-17",
    "grossSales":33559,
    "ticketsSold":4112
  },
  {
    "rank":451,
    "title":"Expedition to the End of the World",
    "releaseDate":"8/20/14",
    "studio":"Argot Pictures",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":33416,
    "ticketsSold":4095
  },
  {
    "rank":452,
    "title":"Bettie Page Reveals All",
    "releaseDate":"11/22/13",
    "studio":"Music Box Films",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":33058,
    "ticketsSold":4051
  },
  {
    "rank":453,
    "title":"A Field in England",
    "releaseDate":"2/7/14",
    "studio":"Drafthouse Films",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":32846,
    "ticketsSold":4025
  },
  {
    "rank":454,
    "title":"Big Bad Wolves",
    "releaseDate":"1/17/14",
    "studio":"Magnet Pictures",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":32828,
    "ticketsSold":4023
  },
  {
    "rank":455,
    "title":"La ritunelle",
    "releaseDate":"9/26/14",
    "studio":"Mongrel Media",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":32660,
    "ticketsSold":4002
  },
  {
    "rank":456,
    "title":"Dead Snow 2: Red vs. Dead",
    "releaseDate":"10/10/14",
    "studio":"Well Go USA",
    "genre":"Black Comedy",
    "rating":"R",
    "grossSales":32617,
    "ticketsSold":3997
  },
  {
    "rank":457,
    "title":"The Hero of Color City",
    "releaseDate":"10/3/14",
    "studio":"Magnolia Pictures",
    "genre":"Adventure",
    "rating":"G",
    "grossSales":32188,
    "ticketsSold":3944
  },
  {
    "rank":458,
    "title":"Ping Pong Summer",
    "releaseDate":"6/6/14",
    "studio":"Gravitas Ventures",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":31900,
    "ticketsSold":3909
  },
  {
    "rank":459,
    "title":"Abuse of Weakness",
    "releaseDate":"8/22/14",
    "studio":"Strand",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":31557,
    "ticketsSold":3867
  },
  {
    "rank":460,
    "title":"Horns",
    "releaseDate":"10/31/14",
    "studio":"RADiUS-TWC",
    "genre":"Horror",
    "rating":"R",
    "grossSales":31100,
    "ticketsSold":3811
  },
  {
    "rank":461,
    "title":"Yellow Day",
    "releaseDate":"9/19/14",
    "studio":"Self Distributed",
    "genre":"Adventure",
    "rating":"PG",
    "grossSales":31000,
    "ticketsSold":3799
  },
  {
    "rank":462,
    "title":"Documented",
    "releaseDate":"5/2/14",
    "studio":"Documented Film, LLC",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":30662,
    "ticketsSold":3757
  },
  {
    "rank":463,
    "title":"Happy Christmas",
    "releaseDate":"7/25/14",
    "studio":"Magnolia Pictures",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":30312,
    "ticketsSold":3714
  },
  {
    "rank":464,
    "title":"Rocks in My Pockets",
    "releaseDate":"9/3/14",
    "studio":"Zeitgeist",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":30185,
    "ticketsSold":3699
  },
  {
    "rank":465,
    "title":"Tim Burton's The Nightmare Before Christmas 3D",
    "releaseDate":"10/20/06",
    "studio":"Walt Disney",
    "genre":"Musical",
    "rating":"PG",
    "grossSales":29137,
    "ticketsSold":3570
  },
  {
    "rank":466,
    "title":"A Long Way Off",
    "releaseDate":"5/6/14",
    "studio":"Moving Visions Entertainment, Inc.",
    "genre":"Drama",
    "rating":"PG",
    "grossSales":28951,
    "ticketsSold":3547
  },
  {
    "rank":467,
    "title":"Closed Curtain",
    "releaseDate":"7/9/14",
    "studio":"Variance Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":28098,
    "ticketsSold":3443
  },
  {
    "rank":468,
    "title":"The Act of Killing",
    "releaseDate":"7/19/13",
    "studio":"Drafthouse Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":27858,
    "ticketsSold":3413
  },
  {
    "rank":469,
    "title":"Stations of the Elevated",
    "releaseDate":"10/17/14",
    "studio":"APD/Cinema Conservancy",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":27140,
    "ticketsSold":3325
  },
  {
    "rank":470,
    "title":"Lilting",
    "releaseDate":"9/26/14",
    "studio":"Strand",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":26699,
    "ticketsSold":3271
  },
  {
    "rank":471,
    "title":"Muscle Shoals",
    "releaseDate":"9/27/13",
    "studio":"Magnolia Pictures",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":26619,
    "ticketsSold":3262
  },
  {
    "rank":472,
    "title":"Last Weekend",
    "releaseDate":"8/29/14",
    "studio":"IFC Films",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":26111,
    "ticketsSold":3199
  },
  {
    "rank":473,
    "title":"Burning Bush",
    "releaseDate":"6/11/14",
    "studio":"",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":26105,
    "ticketsSold":3199
  },
  {
    "rank":474,
    "title":"Elena",
    "releaseDate":"5/30/14",
    "studio":"Variance Films/Syndicado",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":25866,
    "ticketsSold":3169
  },
  {
    "rank":475,
    "title":"Attila Marcel",
    "releaseDate":"5/30/14",
    "studio":"Mongrel Media",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":25601,
    "ticketsSold":3137
  },
  {
    "rank":476,
    "title":"The Overnighters",
    "releaseDate":"10/10/14",
    "studio":"Drafthouse Films",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":25234,
    "ticketsSold":3092
  },
  {
    "rank":477,
    "title":"Bird People",
    "releaseDate":"9/12/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":25209,
    "ticketsSold":3089
  },
  {
    "rank":478,
    "title":"Jimmy P.",
    "releaseDate":"2/7/14",
    "studio":"Mongrel Media",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":24791,
    "ticketsSold":3038
  },
  {
    "rank":479,
    "title":"1,000 Times Goodnight",
    "releaseDate":"10/24/14",
    "studio":"Film Movement",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":24120,
    "ticketsSold":2955
  },
  {
    "rank":480,
    "title":"Believe Me",
    "releaseDate":"9/26/14",
    "studio":"Riot Studios",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":23689,
    "ticketsSold":2903
  },
  {
    "rank":481,
    "title":"Uvanga",
    "releaseDate":"4/25/14",
    "studio":"Mongrel Media",
    "genre":"",
    "rating":"Not Rated",
    "grossSales":23336,
    "ticketsSold":2859
  },
  {
    "rank":482,
    "title":"Video Games: The Movie",
    "releaseDate":"7/18/14",
    "studio":"Variance Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":23043,
    "ticketsSold":2823
  },
  {
    "rank":483,
    "title":"Grand Piano",
    "releaseDate":"3/7/14",
    "studio":"Magnolia Pictures",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":22555,
    "ticketsSold":2764
  },
  {
    "rank":484,
    "title":"Murder 11",
    "releaseDate":"10/1/13",
    "studio":"Indican Pictures",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":22107,
    "ticketsSold":2709
  },
  {
    "rank":485,
    "title":"The Family",
    "releaseDate":"9/13/13",
    "studio":"Relativity",
    "genre":"Black Comedy",
    "rating":"R",
    "grossSales":21872,
    "ticketsSold":2680
  },
  {
    "rank":486,
    "title":"L'amour est un crime parfait",
    "releaseDate":"10/17/14",
    "studio":"Mongrel Media",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":20919,
    "ticketsSold":2563
  },
  {
    "rank":487,
    "title":"Memphis",
    "releaseDate":"9/5/14",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":20601,
    "ticketsSold":2524
  },
  {
    "rank":488,
    "title":"The Past is a Grotesque Animal",
    "releaseDate":"6/19/14",
    "studio":"Oscilloscope Pictures",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":20056,
    "ticketsSold":2457
  },
  {
    "rank":489,
    "title":"Christian Mingle, The Movie",
    "releaseDate":"10/10/14",
    "studio":"Rocky Mountain Pictures",
    "genre":"Romantic Comedy",
    "rating":"PG",
    "grossSales":19836,
    "ticketsSold":2430
  },
  {
    "rank":490,
    "title":"Adult World",
    "releaseDate":"2/14/14",
    "studio":"IFC Films",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":19731,
    "ticketsSold":2418
  },
  {
    "rank":491,
    "title":"Guardian Angel",
    "releaseDate":"10/17/14",
    "studio":"Richmond Media Entertainment",
    "genre":"Action",
    "rating":"R",
    "grossSales":19480,
    "ticketsSold":2387
  },
  {
    "rank":492,
    "title":"Peter Brook: The Tightrope",
    "releaseDate":"1/31/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":19365,
    "ticketsSold":2373
  },
  {
    "rank":493,
    "title":"The Kill Team",
    "releaseDate":"7/25/14",
    "studio":"Oscilloscope Pictures",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":19183,
    "ticketsSold":2350
  },
  {
    "rank":494,
    "title":"Test",
    "releaseDate":"6/6/14",
    "studio":"Variance Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":18823,
    "ticketsSold":2306
  },
  {
    "rank":495,
    "title":"Tasting Menu",
    "releaseDate":"4/18/14",
    "studio":"Magnolia Pictures",
    "genre":"Comedy",
    "rating":"PG-13",
    "grossSales":18686,
    "ticketsSold":2289
  },
  {
    "rank":496,
    "title":"Who is Dayani Cristal?",
    "releaseDate":"4/25/14",
    "studio":"Kino Lorber",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":18190,
    "ticketsSold":2229
  },
  {
    "rank":497,
    "title":"Journey to the West",
    "releaseDate":"3/7/14",
    "studio":"Magnolia Pictures",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":18058,
    "ticketsSold":2212
  },
  {
    "rank":498,
    "title":"The Counselor",
    "releaseDate":"10/25/13",
    "studio":"20th Century Fox",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":17579,
    "ticketsSold":2154
  },
  {
    "rank":499,
    "title":"Stand Clear of the Closing Doors",
    "releaseDate":"5/23/14",
    "studio":"Oscilloscope Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":17282,
    "ticketsSold":2117
  },
  {
    "rank":500,
    "title":"Au bonheur des ogres",
    "releaseDate":"2/21/14",
    "studio":"Mongrel Media",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":17221,
    "ticketsSold":2110
  },
  {
    "rank":501,
    "title":"Accident",
    "releaseDate":"5/23/14",
    "studio":"Rialto Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":17161,
    "ticketsSold":2103
  },
  {
    "rank":502,
    "title":"Hank and Asha",
    "releaseDate":"4/11/14",
    "studio":"FilmRise",
    "genre":"Romantic Comedy",
    "rating":"Not Rated",
    "grossSales":16878,
    "ticketsSold":2068
  },
  {
    "rank":503,
    "title":"Two Night Stand",
    "releaseDate":"9/26/14",
    "studio":"Entertainment One",
    "genre":"Romantic Comedy",
    "rating":"R",
    "grossSales":15600,
    "ticketsSold":1911
  },
  {
    "rank":504,
    "title":"The Selfish Giant",
    "releaseDate":"12/20/13",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":15484,
    "ticketsSold":1897
  },
  {
    "rank":505,
    "title":"Kelly & Cal",
    "releaseDate":"9/5/14",
    "studio":"IFC Films",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":15297,
    "ticketsSold":1874
  },
  {
    "rank":506,
    "title":"Barefoot",
    "releaseDate":"2/21/14",
    "studio":"Roadside Attractions",
    "genre":"Romantic Comedy",
    "rating":"PG-13",
    "grossSales":15071,
    "ticketsSold":1846
  },
  {
    "rank":507,
    "title":"Free the Mind",
    "releaseDate":"5/3/13",
    "studio":"International Film Circuit",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":15069,
    "ticketsSold":1846
  },
  {
    "rank":508,
    "title":"God the Father",
    "releaseDate":"10/14/14",
    "studio":"Rocky Mountain Pictures",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":15037,
    "ticketsSold":1842
  },
  {
    "rank":509,
    "title":"Horses of God",
    "releaseDate":"5/14/14",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":14817,
    "ticketsSold":1815
  },
  {
    "rank":510,
    "title":"The Decent One",
    "releaseDate":"10/1/14",
    "studio":"Kino Lorber",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":14755,
    "ticketsSold":1808
  },
  {
    "rank":511,
    "title":"The Last of the Unjust",
    "releaseDate":"2/7/14",
    "studio":"Cohen Media Group",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":14500,
    "ticketsSold":1776
  },
  {
    "rank":512,
    "title":"Exhibition",
    "releaseDate":"6/20/14",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":14157,
    "ticketsSold":1734
  },
  {
    "rank":513,
    "title":"Sagrada: The Mystery of Creation",
    "releaseDate":"9/12/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":14056,
    "ticketsSold":1722
  },
  {
    "rank":514,
    "title":"The Pretty One",
    "releaseDate":"2/7/14",
    "studio":"Dada Films",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":13769,
    "ticketsSold":1687
  },
  {
    "rank":515,
    "title":"Inequality for All",
    "releaseDate":"9/27/13",
    "studio":"RADiUS-TWC",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":13727,
    "ticketsSold":1682
  },
  {
    "rank":516,
    "title":"Fifi Howls from Happiness",
    "releaseDate":"8/8/14",
    "studio":"Music Box Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":13614,
    "ticketsSold":1668
  },
  {
    "rank":517,
    "title":"As It Is in Heaven",
    "releaseDate":"7/11/14",
    "studio":"Cinema Purgatorio",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":13486,
    "ticketsSold":1652
  },
  {
    "rank":518,
    "title":"War of the World's Goliath",
    "releaseDate":"3/7/14",
    "studio":"Anderson Digital",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":13385,
    "ticketsSold":1640
  },
  {
    "rank":519,
    "title":"A Long Way Down",
    "releaseDate":"7/11/14",
    "studio":"Magnolia Pictures",
    "genre":"Drama",
    "rating":"R",
    "grossSales":13347,
    "ticketsSold":1635
  },
  {
    "rank":520,
    "title":"The Pleasures of Being Out of Step",
    "releaseDate":"6/30/13",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":13137,
    "ticketsSold":1609
  },
  {
    "rank":521,
    "title":"The Punk Singer",
    "releaseDate":"11/29/13",
    "studio":"IFC Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":13129,
    "ticketsSold":1608
  },
  {
    "rank":522,
    "title":"Night Lights",
    "releaseDate":"8/15/14",
    "studio":"Indican Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":12848,
    "ticketsSold":1574
  },
  {
    "rank":523,
    "title":"Coming Up Roses",
    "releaseDate":"11/9/12",
    "studio":"Dada Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":12835,
    "ticketsSold":1572
  },
  {
    "rank":524,
    "title":"Watchers of the Sky",
    "releaseDate":"10/17/14",
    "studio":"Music Box Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":12382,
    "ticketsSold":1517
  },
  {
    "rank":525,
    "title":"In No Great Hurry: 13 Lessons in Life with Saul Leiter",
    "releaseDate":"1/3/14",
    "studio":"Self Distributed",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":12133,
    "ticketsSold":1486
  },
  {
    "rank":526,
    "title":"Alien Abduction",
    "releaseDate":"4/4/14",
    "studio":"IFC Midnight",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":12087,
    "ticketsSold":1481
  },
  {
    "rank":527,
    "title":"The French Minister",
    "releaseDate":"3/21/14",
    "studio":"",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":12027,
    "ticketsSold":1473
  },
  {
    "rank":528,
    "title":"Run & Jump",
    "releaseDate":"1/24/14",
    "studio":"Sundance Selects",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":11805,
    "ticketsSold":1446
  },
  {
    "rank":529,
    "title":"Falcon Rising",
    "releaseDate":"9/5/14",
    "studio":"Freestyle Releasing",
    "genre":"Adventure",
    "rating":"R",
    "grossSales":11774,
    "ticketsSold":1442
  },
  {
    "rank":530,
    "title":"Emoticon",
    "releaseDate":"5/30/14",
    "studio":"Indican Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":11761,
    "ticketsSold":1441
  },
  {
    "rank":531,
    "title":"The Final Member",
    "releaseDate":"4/18/14",
    "studio":"Drafthouse Films",
    "genre":"Documentary",
    "rating":"R",
    "grossSales":11428,
    "ticketsSold":1400
  },
  {
    "rank":532,
    "title":"The Amazing Catfish",
    "releaseDate":"6/13/14",
    "studio":"Strand",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":11278,
    "ticketsSold":1382
  },
  {
    "rank":533,
    "title":"History of Jazz: Oxygen for the Ears",
    "releaseDate":"8/31/13",
    "studio":"Indican Pictures",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":11175,
    "ticketsSold":1369
  },
  {
    "rank":534,
    "title":"Pay 2 Play: Democracy's High Stakes",
    "releaseDate":"9/5/14",
    "studio":"",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":11021,
    "ticketsSold":1350
  },
  {
    "rank":535,
    "title":"Levitated Mass",
    "releaseDate":"9/5/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":10700,
    "ticketsSold":1311
  },
  {
    "rank":536,
    "title":"American Promise",
    "releaseDate":"10/18/13",
    "studio":"Rada Film Group",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":10317,
    "ticketsSold":1264
  },
  {
    "rank":537,
    "title":"The Endless Summer",
    "releaseDate":"7/23/14",
    "studio":"Monterey Media",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":10233,
    "ticketsSold":1254
  },
  {
    "rank":538,
    "title":"Black Nativity",
    "releaseDate":"11/27/13",
    "studio":"20th Century Fox",
    "genre":"Musical",
    "rating":"PG",
    "grossSales":9602,
    "ticketsSold":1176
  },
  {
    "rank":539,
    "title":"The Players",
    "releaseDate":"4/4/14",
    "studio":"Weinstein Co.",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":9552,
    "ticketsSold":1170
  },
  {
    "rank":540,
    "title":"Last Passenger",
    "releaseDate":"4/25/14",
    "studio":"Cohen Media Group",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":9326,
    "ticketsSold":1142
  },
  {
    "rank":541,
    "title":"Honeymoon",
    "releaseDate":"9/12/14",
    "studio":"Magnolia Pictures",
    "genre":"Horror",
    "rating":"R",
    "grossSales":9318,
    "ticketsSold":1141
  },
  {
    "rank":542,
    "title":"White Bird in a Blizzard",
    "releaseDate":"10/24/14",
    "studio":"Magnolia Pictures",
    "genre":"Drama",
    "rating":"R",
    "grossSales":9237,
    "ticketsSold":1131
  },
  {
    "rank":543,
    "title":"The Sacrament",
    "releaseDate":"6/6/14",
    "studio":"Magnolia Pictures",
    "genre":"Horror",
    "rating":"R",
    "grossSales":9221,
    "ticketsSold":1130
  },
  {
    "rank":544,
    "title":"When the Iron Bird Flies",
    "releaseDate":"10/19/12",
    "studio":"Alive Mind",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":9175,
    "ticketsSold":1152
  },
  {
    "rank":545,
    "title":"13 Sins",
    "releaseDate":"4/18/14",
    "studio":"RADiUS-TWC",
    "genre":"Horror",
    "rating":"R",
    "grossSales":9134,
    "ticketsSold":1119
  },
  {
    "rank":546,
    "title":"Is the Man Who Is Tall Happy?",
    "releaseDate":"11/22/13",
    "studio":"IFC Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":9052,
    "ticketsSold":1109
  },
  {
    "rank":547,
    "title":"On the Other Side of the Freeway",
    "releaseDate":"12/19/12",
    "studio":"",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":8689,
    "ticketsSold":1064
  },
  {
    "rank":548,
    "title":"Kabbalah Me",
    "releaseDate":"8/21/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":8671,
    "ticketsSold":1062
  },
  {
    "rank":549,
    "title":"The Principle",
    "releaseDate":"10/24/14",
    "studio":"Rocky Mountain Pictures",
    "genre":"Reality",
    "rating":"PG",
    "grossSales":8657,
    "ticketsSold":1060
  },
  {
    "rank":550,
    "title":"Days and Nights",
    "releaseDate":"9/26/14",
    "studio":"IFC Films",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":8647,
    "ticketsSold":1059
  },
  {
    "rank":551,
    "title":"Radio Free Albemuth",
    "releaseDate":"6/27/14",
    "studio":"Freestyle Releasing",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":8493,
    "ticketsSold":1040
  },
  {
    "rank":552,
    "title":"Love is in the Air",
    "releaseDate":"1/31/14",
    "studio":"Variance Films",
    "genre":"Romantic Comedy",
    "rating":"Not Rated",
    "grossSales":8425,
    "ticketsSold":1032
  },
  {
    "rank":553,
    "title":"Go For Sisters",
    "releaseDate":"11/8/13",
    "studio":"Variance Films",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":8388,
    "ticketsSold":1027
  },
  {
    "rank":554,
    "title":"Canopy",
    "releaseDate":"8/29/14",
    "studio":"Monterey Media",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":8141,
    "ticketsSold":997
  },
  {
    "rank":555,
    "title":"Next Year Jerusalem",
    "releaseDate":"5/16/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":8093,
    "ticketsSold":991
  },
  {
    "rank":556,
    "title":"The Empty Hours",
    "releaseDate":"7/11/14",
    "studio":"Strand",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":7879,
    "ticketsSold":965
  },
  {
    "rank":557,
    "title":"Archipelago",
    "releaseDate":"6/27/14",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":7791,
    "ticketsSold":954
  },
  {
    "rank":558,
    "title":"Faith Connections",
    "releaseDate":"9/12/14",
    "studio":"Kino Lorber",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":7772,
    "ticketsSold":952
  },
  {
    "rank":559,
    "title":"Come Back to Me",
    "releaseDate":"7/25/14",
    "studio":"Freestyle Releasing",
    "genre":"Horror",
    "rating":"R",
    "grossSales":7744,
    "ticketsSold":949
  },
  {
    "rank":560,
    "title":"Iceman",
    "releaseDate":"9/19/14",
    "studio":"Well Go USA",
    "genre":"Action",
    "rating":"R",
    "grossSales":7679,
    "ticketsSold":941
  },
  {
    "rank":561,
    "title":"The Animal Project",
    "releaseDate":"6/6/14",
    "studio":"Mongrel Media",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":7580,
    "ticketsSold":928
  },
  {
    "rank":562,
    "title":"Violette",
    "releaseDate":"11/29/13",
    "studio":"Mongrel Media",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":7360,
    "ticketsSold":901
  },
  {
    "rank":563,
    "title":"Stage Fright",
    "releaseDate":"5/9/14",
    "studio":"Magnolia Pictures",
    "genre":"Horror",
    "rating":"R",
    "grossSales":7078,
    "ticketsSold":867
  },
  {
    "rank":564,
    "title":"Low Down",
    "releaseDate":"10/24/14",
    "studio":"Oscilloscope Pictures",
    "genre":"Drama",
    "rating":"R",
    "grossSales":7000,
    "ticketsSold":857
  },
  {
    "rank":565,
    "title":"Camille Claudel: 1915",
    "releaseDate":"10/16/13",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":6941,
    "ticketsSold":850
  },
  {
    "rank":566,
    "title":"No God, No Master",
    "releaseDate":"3/28/14",
    "studio":"Monterey Media",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":6796,
    "ticketsSold":832
  },
  {
    "rank":567,
    "title":"Camp X-Ray",
    "releaseDate":"10/17/14",
    "studio":"IFC Films",
    "genre":"Drama",
    "rating":"R",
    "grossSales":6680,
    "ticketsSold":818
  },
  {
    "rank":568,
    "title":"I Am Ali",
    "releaseDate":"10/10/14",
    "studio":"Focus Features",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":6526,
    "ticketsSold":799
  },
  {
    "rank":569,
    "title":"The Strange Color of Your Body's Tears",
    "releaseDate":"8/29/14",
    "studio":"Strand",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":6362,
    "ticketsSold":779
  },
  {
    "rank":570,
    "title":"More Than Honey",
    "releaseDate":"6/12/13",
    "studio":"Kino Lorber",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":6347,
    "ticketsSold":777
  },
  {
    "rank":571,
    "title":"Love & Air Sex",
    "releaseDate":"2/7/14",
    "studio":"TriBeca Films",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":6047,
    "ticketsSold":741
  },
  {
    "rank":572,
    "title":"The Little Bedroom",
    "releaseDate":"9/26/14",
    "studio":"Cinema Libre",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":5816,
    "ticketsSold":712
  },
  {
    "rank":573,
    "title":"Almost Human",
    "releaseDate":"2/21/14",
    "studio":"IFC Films",
    "genre":"Horror",
    "rating":"Not Rated",
    "grossSales":5710,
    "ticketsSold":699
  },
  {
    "rank":574,
    "title":"The Quitter",
    "releaseDate":"9/12/14",
    "studio":"Goodface Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":5588,
    "ticketsSold":684
  },
  {
    "rank":575,
    "title":"Kid Cannabis",
    "releaseDate":"4/18/14",
    "studio":"Well Go USA",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":5565,
    "ticketsSold":681
  },
  {
    "rank":576,
    "title":"Short Term 12",
    "releaseDate":"8/23/13",
    "studio":"Cinedigm",
    "genre":"Drama",
    "rating":"R",
    "grossSales":5518,
    "ticketsSold":676
  },
  {
    "rank":577,
    "title":"Flex is Kings",
    "releaseDate":"4/4/14",
    "studio":"Baxter Brothers",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":5418,
    "ticketsSold":663
  },
  {
    "rank":578,
    "title":"The Olivia Experiment",
    "releaseDate":"8/22/14",
    "studio":"Indican Pictures",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":5343,
    "ticketsSold":654
  },
  {
    "rank":579,
    "title":"Web Junkie",
    "releaseDate":"8/6/14",
    "studio":"Kino Lorber",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":5338,
    "ticketsSold":654
  },
  {
    "rank":580,
    "title":"At Berkeley",
    "releaseDate":"11/8/13",
    "studio":"Zipporah",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":5254,
    "ticketsSold":643
  },
  {
    "rank":581,
    "title":"2 Autumns, 3 Winters",
    "releaseDate":"6/6/14",
    "studio":"Film Movement",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":5030,
    "ticketsSold":616
  },
  {
    "rank":582,
    "title":"Les beaux jours",
    "releaseDate":"10/25/13",
    "studio":"Mongrel Media",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":4919,
    "ticketsSold":602
  },
  {
    "rank":583,
    "title":"Nothing Bad Can Happen",
    "releaseDate":"6/27/14",
    "studio":"Drafthouse Films",
    "genre":"Horror",
    "rating":"Not Rated",
    "grossSales":4871,
    "ticketsSold":596
  },
  {
    "rank":584,
    "title":"Gabrielle",
    "releaseDate":"4/18/14",
    "studio":"Entertainment One",
    "genre":"Drama",
    "rating":"R",
    "grossSales":4804,
    "ticketsSold":588
  },
  {
    "rank":585,
    "title":"Return to Nuke 'Em High Volume 1",
    "releaseDate":"1/10/14",
    "studio":"Anchor Bay Entertainment",
    "genre":"Black Comedy",
    "rating":"Not Rated",
    "grossSales":4790,
    "ticketsSold":587
  },
  {
    "rank":586,
    "title":"Half the Road",
    "releaseDate":"4/18/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":4783,
    "ticketsSold":586
  },
  {
    "rank":587,
    "title":"Jews of Egypt",
    "releaseDate":"3/28/14",
    "studio":"ArtMattan Productions",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":4506,
    "ticketsSold":552
  },
  {
    "rank":588,
    "title":"Unrelated",
    "releaseDate":"6/27/14",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":4419,
    "ticketsSold":541
  },
  {
    "rank":589,
    "title":"The Truth About Emanuel",
    "releaseDate":"1/10/14",
    "studio":"TriBeca Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":4404,
    "ticketsSold":539
  },
  {
    "rank":590,
    "title":"Smiling Through the Apocalypse",
    "releaseDate":"9/12/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":4332,
    "ticketsSold":530
  },
  {
    "rank":591,
    "title":"Life of a King",
    "releaseDate":"1/17/14",
    "studio":"Millennium Entertainment",
    "genre":"Drama",
    "rating":"PG-13",
    "grossSales":4304,
    "ticketsSold":527
  },
  {
    "rank":592,
    "title":"The Devil's Hand",
    "releaseDate":"10/10/14",
    "studio":"Roadside Attractions",
    "genre":"Thriller/Suspense",
    "rating":"PG-13",
    "grossSales":4239,
    "ticketsSold":519
  },
  {
    "rank":593,
    "title":"Nothing But a Man",
    "releaseDate":"11/9/12",
    "studio":"APD/Cinema Conservancy",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":4177,
    "ticketsSold":511
  },
  {
    "rank":594,
    "title":"Northern Lights",
    "releaseDate":"9/20/13",
    "studio":"Artists Public Domain/Cinema Conservancy",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":4162,
    "ticketsSold":510
  },
  {
    "rank":595,
    "title":"Thunder and the House of Magic",
    "releaseDate":"9/5/14",
    "studio":"Shout! Factory",
    "genre":"Adventure",
    "rating":"Not Rated",
    "grossSales":4091,
    "ticketsSold":501
  },
  {
    "rank":596,
    "title":"Alceste a bicyclette",
    "releaseDate":"5/3/13",
    "studio":"Mongrel Media",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":3896,
    "ticketsSold":477
  },
  {
    "rank":597,
    "title":"The Mystery of Happiness",
    "releaseDate":"9/12/14",
    "studio":"Strand",
    "genre":"Romantic Comedy",
    "rating":"Not Rated",
    "grossSales":3894,
    "ticketsSold":477
  },
  {
    "rank":598,
    "title":"Beyond Outrage",
    "releaseDate":"1/3/14",
    "studio":"Magnolia Pictures",
    "genre":"Action",
    "rating":"R",
    "grossSales":3878,
    "ticketsSold":475
  },
  {
    "rank":599,
    "title":"Manuscripts Don't Burn",
    "releaseDate":"6/13/14",
    "studio":"Kino Lorber",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":3743,
    "ticketsSold":458
  },
  {
    "rank":600,
    "title":"Hollidaysburg",
    "releaseDate":"9/19/14",
    "studio":"Starz Media",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":3709,
    "ticketsSold":454
  },
  {
    "rank":601,
    "title":"Yangsi",
    "releaseDate":"12/7/12",
    "studio":"Alive Mind",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":3685,
    "ticketsSold":462
  },
  {
    "rank":602,
    "title":"Exists",
    "releaseDate":"10/24/14",
    "studio":"Lionsgate",
    "genre":"Horror",
    "rating":"R",
    "grossSales":3650,
    "ticketsSold":447
  },
  {
    "rank":603,
    "title":"The Word",
    "releaseDate":"3/14/14",
    "studio":"Scarlet Sky Productions",
    "genre":"",
    "rating":"Not Rated",
    "grossSales":3648,
    "ticketsSold":447
  },
  {
    "rank":604,
    "title":"Hide Your Smiling Faces",
    "releaseDate":"3/28/14",
    "studio":"TriBeca Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":3576,
    "ticketsSold":438
  },
  {
    "rank":605,
    "title":"Raze",
    "releaseDate":"1/10/14",
    "studio":"IFC Midnight",
    "genre":"Action",
    "rating":"R",
    "grossSales":3453,
    "ticketsSold":423
  },
  {
    "rank":606,
    "title":"Life's a Breeze",
    "releaseDate":"9/19/14",
    "studio":"Magnolia Pictures",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":3450,
    "ticketsSold":422
  },
  {
    "rank":607,
    "title":"Assistance mortelle",
    "releaseDate":"2/28/14",
    "studio":"Velvet Film",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":3000,
    "ticketsSold":367
  },
  {
    "rank":608,
    "title":"The Hacker Wars",
    "releaseDate":"10/17/14",
    "studio":"Vitagraph Films",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":2958,
    "ticketsSold":362
  },
  {
    "rank":609,
    "title":"Black Out",
    "releaseDate":"2/21/14",
    "studio":"Music Box Films",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":2734,
    "ticketsSold":335
  },
  {
    "rank":610,
    "title":"Mercedes Sosa: The Voice of Latin America",
    "releaseDate":"1/24/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":2648,
    "ticketsSold":324
  },
  {
    "rank":611,
    "title":"Jake Squared",
    "releaseDate":"8/15/14",
    "studio":"Freestyle Releasing",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":2592,
    "ticketsSold":317
  },
  {
    "rank":612,
    "title":"Refuge",
    "releaseDate":"3/28/14",
    "studio":"Strand",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":2554,
    "ticketsSold":312
  },
  {
    "rank":613,
    "title":"Dinosaur 13",
    "releaseDate":"8/15/14",
    "studio":"Lionsgate",
    "genre":"Documentary",
    "rating":"PG",
    "grossSales":2500,
    "ticketsSold":306
  },
  {
    "rank":614,
    "title":"Revenge of the Green Dragons",
    "releaseDate":"10/24/14",
    "studio":"A24",
    "genre":"Action",
    "rating":"R",
    "grossSales":2500,
    "ticketsSold":306
  },
  {
    "rank":615,
    "title":"The Protector 2",
    "releaseDate":"5/2/14",
    "studio":"Magnet Pictures",
    "genre":"Action",
    "rating":"R",
    "grossSales":2463,
    "ticketsSold":301
  },
  {
    "rank":616,
    "title":"To Die is Hard",
    "releaseDate":"12/17/10",
    "studio":"Driving With Our Eyes Shut",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":2443,
    "ticketsSold":299
  },
  {
    "rank":617,
    "title":"Evergreen: The Road to Legalization",
    "releaseDate":"6/13/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":2363,
    "ticketsSold":289
  },
  {
    "rank":618,
    "title":"Stop the Pounding Heart",
    "releaseDate":"9/19/14",
    "studio":"Big World Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":2363,
    "ticketsSold":289
  },
  {
    "rank":619,
    "title":"Moebius",
    "releaseDate":"8/1/14",
    "studio":"RAM Releasing",
    "genre":"Drama",
    "rating":"R",
    "grossSales":2340,
    "ticketsSold":286
  },
  {
    "rank":620,
    "title":"Design is One",
    "releaseDate":"10/11/13",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":2308,
    "ticketsSold":282
  },
  {
    "rank":621,
    "title":"The Wait",
    "releaseDate":"1/31/14",
    "studio":"Monterey Media",
    "genre":"Drama",
    "rating":"R",
    "grossSales":2109,
    "ticketsSold":258
  },
  {
    "rank":622,
    "title":"The Right Kind of Wrong",
    "releaseDate":"3/14/14",
    "studio":"Magnolia Pictures",
    "genre":"Drama",
    "rating":"R",
    "grossSales":2098,
    "ticketsSold":257
  },
  {
    "rank":623,
    "title":"Algorithms",
    "releaseDate":"10/17/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":2021,
    "ticketsSold":247
  },
  {
    "rank":624,
    "title":"Stories We Tell",
    "releaseDate":"10/12/12",
    "studio":"Mongrel Media",
    "genre":"Documentary",
    "rating":"PG-13",
    "grossSales":2015,
    "ticketsSold":246
  },
  {
    "rank":625,
    "title":"The Girl on the Train",
    "releaseDate":"7/3/14",
    "studio":"Monterey Media",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":1975,
    "ticketsSold":242
  },
  {
    "rank":626,
    "title":"Born to Fly: Elizabeth Streb vs. Gravity",
    "releaseDate":"9/10/14",
    "studio":"",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":1822,
    "ticketsSold":223
  },
  {
    "rank":627,
    "title":"More Than the Rainbow",
    "releaseDate":"5/2/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":1677,
    "ticketsSold":205
  },
  {
    "rank":628,
    "title":"The Human Scale",
    "releaseDate":"9/20/13",
    "studio":"Mongrel Media",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":1635,
    "ticketsSold":200
  },
  {
    "rank":629,
    "title":"Truth",
    "releaseDate":"1/10/14",
    "studio":"Left of Center Entertainment, LLc",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":1626,
    "ticketsSold":199
  },
  {
    "rank":630,
    "title":"Summer in February",
    "releaseDate":"1/17/14",
    "studio":"TriBeca Films",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":1624,
    "ticketsSold":199
  },
  {
    "rank":631,
    "title":"Here Comes the Devil",
    "releaseDate":"12/13/13",
    "studio":"Magnolia Pictures",
    "genre":"Horror",
    "rating":"R",
    "grossSales":1585,
    "ticketsSold":194
  },
  {
    "rank":632,
    "title":"The Trials of Muhammad Ali",
    "releaseDate":"8/23/13",
    "studio":"Kino Lorber",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":1440,
    "ticketsSold":176
  },
  {
    "rank":633,
    "title":"Ragnarok",
    "releaseDate":"8/15/14",
    "studio":"Magnolia Pictures",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":1369,
    "ticketsSold":167
  },
  {
    "rank":634,
    "title":"These Final Hours",
    "releaseDate":"10/17/14",
    "studio":"Mongrel Media",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":1289,
    "ticketsSold":157
  },
  {
    "rank":635,
    "title":"The Last Days on Mars",
    "releaseDate":"12/6/13",
    "studio":"Magnolia Pictures",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":1213,
    "ticketsSold":148
  },
  {
    "rank":636,
    "title":"The Player",
    "releaseDate":"4/10/92",
    "studio":"Fine Line",
    "genre":"Black Comedy",
    "rating":"R",
    "grossSales":1203,
    "ticketsSold":147
  },
  {
    "rank":637,
    "title":"People of a Feather",
    "releaseDate":"11/8/13",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":1194,
    "ticketsSold":146
  },
  {
    "rank":638,
    "title":"The Butterfly Room",
    "releaseDate":"4/11/14",
    "studio":"Archstone Entertainment",
    "genre":"Thriller/Suspense",
    "rating":"Not Rated",
    "grossSales":1081,
    "ticketsSold":132
  },
  {
    "rank":639,
    "title":"Demi-Soeur",
    "releaseDate":"2/7/14",
    "studio":"Rialto Pictures",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":943,
    "ticketsSold":115
  },
  {
    "rank":640,
    "title":"A People Uncounted",
    "releaseDate":"5/16/14",
    "studio":"First Run Features",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":930,
    "ticketsSold":113
  },
  {
    "rank":641,
    "title":"Jackpot",
    "releaseDate":"6/27/14",
    "studio":"Doppelganger Releasing",
    "genre":"Action",
    "rating":"Not Rated",
    "grossSales":806,
    "ticketsSold":98
  },
  {
    "rank":642,
    "title":"Cinemanovels",
    "releaseDate":"7/3/14",
    "studio":"Monterey Media",
    "genre":"Drama",
    "rating":"R",
    "grossSales":670,
    "ticketsSold":82
  },
  {
    "rank":643,
    "title":"Jamel Shabazz: Street Photographer",
    "releaseDate":"8/2/13",
    "studio":"Artists Public Domain/Cinema Conservancy",
    "genre":"Documentary",
    "rating":"Not Rated",
    "grossSales":614,
    "ticketsSold":75
  },
  {
    "rank":644,
    "title":"Grand d'part",
    "releaseDate":"5/23/14",
    "studio":"Rialto Pictures",
    "genre":"Drama",
    "rating":"Not Rated",
    "grossSales":459,
    "ticketsSold":56
  },
  {
    "rank":645,
    "title":"Computer Chess",
    "releaseDate":"7/17/13",
    "studio":"Kino Lorber",
    "genre":"Comedy",
    "rating":"Not Rated",
    "grossSales":323,
    "ticketsSold":39
  },
  {
    "rank":646,
    "title":"Rhymes for Young Ghouls",
    "releaseDate":"10/24/14",
    "studio":"Monterey Media",
    "genre":"Drama",
    "rating":"R",
    "grossSales":216,
    "ticketsSold":26
  },
  {
    "rank":647,
    "title":"Two-Bit Waltz",
    "releaseDate":"10/24/14",
    "studio":"Monterey Media",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":136,
    "ticketsSold":16
  },
  {
    "rank":648,
    "title":"Only thr Brave",
    "releaseDate":"5/28/10",
    "studio":"Indican Pictures",
    "genre":"",
    "rating":"R",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":649,
    "title":"Oldboy",
    "releaseDate":"11/27/13",
    "studio":"FilmDistrict",
    "genre":"Action",
    "rating":"R",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":650,
    "title":"The Fall",
    "releaseDate":"5/9/08",
    "studio":"Roadside Attractions",
    "genre":"Adventure",
    "rating":"R",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":651,
    "title":"The Wild Child",
    "releaseDate":"9/9/70",
    "studio":"The Film Desk",
    "genre":"Drama",
    "rating":"G",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":652,
    "title":"Gangster's Paradise: Jerusalema",
    "releaseDate":"6/11/10",
    "studio":"Anchor Bay Entertainment",
    "genre":"",
    "rating":"R",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":653,
    "title":"The Oxford Murders",
    "releaseDate":"8/6/10",
    "studio":"Magnolia Pictures",
    "genre":"Thriller/Suspense",
    "rating":"R",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":654,
    "title":"Homefront",
    "releaseDate":"11/27/13",
    "studio":"Open Road",
    "genre":"Action",
    "rating":"R",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":655,
    "title":"The Exorcist Extended Director's Cut",
    "releaseDate":"9/30/10",
    "studio":"Warner Bros.",
    "genre":"Horror",
    "rating":"R",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":656,
    "title":"Tales From Earthsea",
    "releaseDate":"8/13/10",
    "studio":"Walt Disney",
    "genre":"Adventure",
    "rating":"PG-13",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":657,
    "title":"Barney's Version",
    "releaseDate":"12/17/10",
    "studio":"Sony Pictures Classics",
    "genre":"Drama",
    "rating":"R",
    "grossSales":0,
    "ticketsSold":0
  },
  {
    "rank":658,
    "title":"Frances Ha",
    "releaseDate":"5/17/13",
    "studio":"IFC Films",
    "genre":"Comedy",
    "rating":"R",
    "grossSales":-3103,
    "ticketsSold":498355
  }
];

movies.forEach(function(movie) {
    movie.releaseDate = new Date(movie.releaseDate);
});
