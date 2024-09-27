// Initialize the map
let map = L.map("map").setView([20.5937, 78.9629], 5);

const tileLayers = {};
const MAP_PROVIDERS = {
  google: {
    satellite: "Google Satellite",
    roadmap: "Google Roadmap",
  },
  osm: "OpenStreetMap (Mapnik)",
  yandex: {
    satellite: "Yandex Satellite",
    roadmap: "Yandex Roadmap",
  },
  mapbox: "Mapbox",
};

const tiles = [
  {
    attribution: "&copy; Google",
    name: MAP_PROVIDERS.google.satellite,
    checked: true,
    url: "//mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
  },
  {
    attribution: "&copy; Google",
    name: MAP_PROVIDERS.google.roadmap,
    checked: false,
    url: "//mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  },
  {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    name: MAP_PROVIDERS.osm,
    checked: false,
    url: "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    attribution: "&copy; Yandex",
    name: MAP_PROVIDERS.yandex.satellite,
    checked: false,
    url: "//sat04.maps.yandex.net/tiles?l=sat&v=3.456.0&x={x}&y={y}&z={z}",
  },
  {
    attribution: "&copy; Yandex",
    name: MAP_PROVIDERS.yandex.roadmap,
    checked: false,
    url: "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=21.06.18-0-b210520094930&x={x}&y={y}&z={z}&scale=1&lang=ru-RU",
  },
];

tiles.forEach((tile) => {
  tileLayers[tile.name] = L.tileLayer(tile.url, {
    attribution: tile.attribution,
    maxZoom: 19,
  });
});

tileLayers[MAP_PROVIDERS.google.satellite].addTo(map);

const layerControl = L.control.layers(tileLayers).addTo(map);

let customIcon = L.icon({
  iconUrl: "./assests/Group-1.svg",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [1, -34],
});

// Locations
let locations = [
  {
    lat: 18.563062,
    lng: 73.9205845,
    name: "Bajaj Broking",
    location: "Pune",
    address:
      "Bajaj Broking, 1st Floor, Tower B, Unit No 9 & 10, Mantri IT Park, Viman Nagar, Pune, Maharashtra - 411014",
  },
  {
    lat: 28.6416244,
    lng: 77.2384565,
    name: "Delhi",
    address:
      "Bajaj Broking, 7th Floor, Office No. 706, Ashoka Estate, 24 Barakhamba Road, Connaught Place, New Delhi - 110001",
  },
  {
    lat: 22.549228,
    lng: 88.3553607,
    name: "Kolkata",
    address:
      "Bajaj Broking, 7th Floor, Office No. 7a/2, Siddha Park, 99a, Park Street, Kolkata, West Bengal - 700016",
  },
  {
    lat: 12.9734772,
    lng: 77.5965317,
    name: "Bangalore",
    address:
      "Bajaj Broking, Ground Floor, Office No. 36, Crown Point,lavelle Road, Kasturba Cross Road, Bangalore, Karnataka - 560001",
  },
  {
    lat: 23.0354331,
    lng: 72.5017029,
    name: "Ahmedabad",
    address:
      "Bajaj Broking, Office No. 503,504,505, Shilp Epitome, Near Rajpath Club, Bodakdev, Ahmedabad, Gujarat - 380054",
  },
  {
    lat: 19.1671401,
    lng: 72.8519811,
    name: "Mumbai",
    address:
      "Bajaj Broking, Office No. 205 -206 , 2nd Floor, Eco House, Vishweshwar Nagar, Off Aarey Road, Goregaon (East), Mumbai, Maharashtra - 400063",
  },
  {
    lat: 22.2887231,
    lng: 70.7736645,
    name: "Rajkot",
    address:
      "Bajaj Broking, Ananat The Work Space, Office No. 204, 2nd Floor, Kalawad Main Road, Rajkot, Gujarat - 360001",
  },
  {
    lat: 21.1382253,
    lng: 79.0578946,
    name: "Nagpur",
    address:
      "Bajaj Broking, Office No. 302, 3rd Floor, C/0 Ved Solitaire, Cement Road, Dharampeth, Nagpur, Maharashtra - 440010",
  },
  {
    lat: 20.2937878,
    lng: 85.8480826,
    name: "Bhubaneshwar",
    address:
      "Bajaj Broking, B M C Bhawani Commercial Enclave, 4th Floor, Block-2, Sahid Nagar, Bhubaneshwar, Odisha - 751007",
  },
  {
    lat: 19.1671401,
    lng: 72.8519811,
    name: "Mumbai",
    address:
      "Bajaj Broking, Office No. 405-406, 4th Floor, Flat No 08, Eco House, Vishweshwar Nagar, Off Aarey Road, Goregaon (East), Mumbai, Maharashtra - 400063",
  },
  {
    lat: 26.9146534,
    lng: 75.8012003,
    name: "Jaipur",
    address:
      "Bajaj Broking, Office No. 201- 204, Green House, C Scheme, Ashok Nagar, Jaipur, Rajasthan - 302001",
  },
  {
    lat: 17.428561,
    lng: 78.4524962,
    name: "Hyderabad",
    address:
      "Bajaj Broking, Office No. 6-3-885/7, 2nd Floor, Sapphire Square, Somajiguda, Hyderabad, Telangana - 500082",
  },
  {
    lat: 17.9960286,
    lng: 79.5581045,
    name: "Warangal",
    address:
      "Bajaj Broking, House No 5/777,5/778,5/779, Main Road, Lashkar Bazar, Opp. Gov, B.ed Colleges, Hanamkonda, Warangal , Telengana - 506002",
  },
  {
    lat: 16.9581086,
    lng: 82.2335111,
    name: "Kakinada",
    address:
      "Bajaj Broking, 1st Floor, Door No. 13-1-51, Ward No-14, Main Road, Kakinada Sub Registry, East Godavari, Dist. Kakinada, Andhra Pradesh - 533002",
  },
  {
    lat: 16.5012083,
    lng: 80.6363829,
    name: "Vijayawada",
    address:
      "Bajaj Broking, D No.39-9-2, Venkateswara Swamy Temple Road, Labbipet, Vijayawada, Andhra Pradesh - 520010",
  },
  {
    lat: 22.2269618,
    lng: 84.8360002,
    name: "Raurkela",
    address:
      "Bajaj Broking, Holding No.72, Plot No.304, Uditnager, Rourkela, Odisha - 769012",
  },
  {
    lat: 22.7917751,
    lng: 86.1782255,
    name: "Jamshedpur",
    address:
      "Bajaj Broking, Tee Kay Corporate Towers, 5th Floor, S.B Shop Area, Bistupur, Jamshedpur, Jharkhand - 831001",
  },
  {
    lat: 23.3583479,
    lng: 85.3214117,
    name: "Ranchi",
    address:
      "Bajaj Broking, Office No.104,107 & 108, 1st Floor, Commerce Tower, M S Plot No.1784, J D Compound, Main Road, Ranchi, Jharkhand - 834001",
  },
  {
    lat: 25.6115989,
    lng: 85.140244,
    name: "Patna",
    address:
      "Bajaj Broking, Office No. 3005, 3rd Floor, Grand Plaza, Dak Bungalow Chouraha, Fraser Road, Patna, Bihar - 800001",
  },
  {
    lat: 17.7297492,
    lng: 83.30123,
    name: "Vizag",
    address:
      "Bajaj Broking, Tribhuvanam, 3rd Floor, 5th Lane, Diamond Park Road, Vizag, Andhra Pradesh - 530016",
  },
  {
    lat: 26.1709645,
    lng: 91.7510461,
    name: "Guwahati",
    address:
      "Bajaj Broking, Achyut & Choudhary Complex, 4th Floor, Ulubari, Near Hotel Bilas, G S Road, Guwahati, Assam - 781007",
  },
  {
    lat: 14.4444622,
    lng: 79.9834697,
    name: "Nellore",
    address:
      "Bajaj Broking , Door No. 16-3-235 (New), 16-1433 (Old) Sunshine Plaza, 3rd Floor, Ramalinga Puram, Nellore Town, Spst Nellore, Andhra Pradesh - 524003",
  },
  {
    lat: 16.9986231,
    lng: 81.7696677,
    name: "Rajahmundry",
    address:
      "Bajaj Broking, 1st Floor, Door No. 7-26-4, Kokkondavari St, Mangalavaripeta, Maturivari Street, T Nagar, Near Kumari Talkies, Rajahmundry, Andhra Pradesh - 533101",
  },
  {
    lat: 21.2474544,
    lng: 81.6354675,
    name: "Raipur",
    address:
      "Bajaj Broking, Piyank Tower, Shop No. 03, 2nd Floor, Beside Oxyzone, Ge Road Raja Talab Raipur, Chhattisgarh - 492001",
  },
  {
    lat: 13.0652792,
    lng: 80.2572437,
    name: "Chennai",
    address:
      "Bajaj Broking, Fagun Mansion, 3rd Floor, Door No. 74, Ethiraj Salai, Egmore, Chennai, Tamil Nadu - 600008",
  },
  {
    lat: 11.0124563,
    lng: 76.947413,
    name: "Coimbatore",
    address:
      "Bajaj Broking, Pinnacle Krishna, 581/1, 1st Floor, DB Road, R S Puram, Coimbatore, Tamil Nadu - 641002",
  },
  {
    lat: 25.1694048,
    lng: 75.8450867,
    name: "Kota",
    address:
      "Bajaj Broking, Plot No. 14c, 3rd Floor, Ghode Wale Baba Circle, Vallabh Nagar, Gumanpura, Kota, Rajasthan - 324007",
  },
  {
    lat: 26.8676171,
    lng: 81.0096,
    name: "Lucknow",
    address:
      "Bajaj Broking, Urbanac Business Park, 4th Floor, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010",
  },

  {
    lat: 22.3245848,
    lng: 73.1601295,
    name: "Vadodara",
    address:
      "Bajaj Broking, Office No. 105/106, Block-D, 1st Floor, Notus IT Park, Near Genda Circle, Sarabhai Campus, Bhailal Amin Road, Vadodara, Gujarat - 390023",
  },

  {
    lat: 18.5615898,
    lng: 73.9328355,
    name: "Pune",
    address:
      "Bajaj Broking, 6th Floor, Beta-II (E-2), Giga Space, Sr. No.198/1b, Viman Nagar, Nagar Road, Pune, Maharashtra - 411014",
  },

  {
    lat: 18.5139265,
    lng: 73.8320579,
    name: "Pune",
    address:
      "Bajaj Broking, 96 Suvarnarekha Boulevard, 3rd Floor, Ghodake Chowk, Prabhat Rd, Erandwane, Pune, Maharashtra - 411004",
  },

  {
    lat: 19.1653786,
    lng: 72.851392,
    name: "Mumbai",
    address:
      "Bajaj Broking, Anupam Annapolis, 3rd Floor, Peru Baug, Jay Prakash Nagar, Goregaon (East), Mumbai, Maharashtra - 400063",
  },

  {
    lat: 28.6307896,
    lng: 77.2216989,
    name: "Delhi",
    address:
      "Bajaj Broking, 6th Floor, Ashoka Estate, 24 Barakhamba Road, Connaught Place, New Delhi - 110001",
  },
  {
    lat: 12.9734772,
    lng: 77.5965317,
    name: "Bangalore",
    address:
      "Bajaj Broking, Ground Floor, Crown Point, lavelle Road, Kasturba Cross Road, Bangalore, Karnataka - 560001",
  },
  {
    lat: 22.549228,
    lng: 88.3553607,
    name: "Kolkata",
    address:
      "Bajaj Broking, 7th Floor, 7/a1, Siddha Park, 99a, Park Street, Kolkata, West Bengal - 700016",
  },
  {
    lat: 28.4709274,
    lng: 77.0200003,
    name: "Gurugram",
    address:
      "Bajaj Broking, Ocus Technopolis, 1st Floor, Unit No. 03a, B&C Golf Course Rd, Suncity, Sector 54, Gurugram, Haryana - 122022",
  },
  {
    lat: 28.9678172,
    lng: 77.72722,
    name: "Meerut",
    address:
      "Bajaj Broking, 189, Ground Floor, RPM Tower, Mangal Pandey Nagar, CCS University Road, Near Kotak Mahindra Bank, Meerut, Uttar Pradesh - 250004",
  },
  {
    lat: 26.4811664,
    lng: 80.3418595,
    name: "Kanpur",
    address:
      "Bajaj Broking , Office Unit No - 612to 616,on 6th Floor , Kan Chambers, 14/113, Civil Line Kanpur Nagar - 208001",
  },
  {
    lat: 27.1998202,
    lng: 78.0024155,
    name: "Agra",
    address:
      "Bajaj Broking, Corporate Park, 4th Floor, Office No. 406, Block No. 109, Sanjay Palace, Behind Cosmos Mall, Sanjay Place, Civil Lines, Agra, Uttar Pradesh - 282004",
  },
  {
    lat: 22.7262792,
    lng: 75.8771804,
    name: "Ahmedabad",
    address:
      "Bajaj Broking, Shekhar Central, Office No. 104, 1st Floor, Plot No. 04 & 05, AB Road, Manorama Ganj, Indore, Madhya Pradesh - 452001",
  },
  {
    lat: 21.7552111,
    lng: 72.1434651,
    name: "Bhavnagar",
    address:
      "Bajaj Broking, Shanti Height, Office No. 104, 1st Floor, Vadoriya Park, Hill Drive, Bhavnagar - 364002",
  },
  {
    lat: 21.1667205,
    lng: 72.7942284,
    name: "Surat",
    address:
      "Bajaj Broking, Unity Corner, 4th Floor, City Light Main Road, Opposite Bank of Baroda, Surat - 395007",
  },
  {
    lat: 10.8236626,
    lng: 78.6804065,
    name: "Trichy",
    address:
      "Bajaj Broking, Selva Nirmala Complex, 1st Floor, 5th Cross Road E, Thillai Nagar, Tiruchirappalli, Tamil Nadu - 620018",
  },
  {
    lat: 25.4480955,
    lng: 81.8308706,
    name: "Prayagraj",
    address:
      "Bajaj Broking, LDA Centre, 1st Floor, Nawab Yusuf Road, Civil Lines, Prayagraj, Uttar Pradesh - 211001",
  },
  {
    lat: 26.722222,
    lng: 88.4180885,
    name: "Siliguri",
    address:
      "Bajaj Broking, Metro Square, 5th Floor, Ward 10, Janta Nagar, Siliguri, West Bengal - 734001",
  },
  {
    lat: 23.2370466,
    lng: 77.43251,
    name: "Bhopal",
    address:
      "Bajaj Broking, Ambika Orchid, 1st Floor, Z-19, Opposite Chittod Complex, Zone- I, M P Nagar, Bhopal, Madya Pradesh - 462011",
  },
  {
    lat: 26.7528559,
    lng: 83.3641723,
    name: "Gorakhpur",
    address:
      "Bajaj Broking, Lower Ground Floor, Cross Road The Mall, Bank Road, Agrasen Chowk, Gorakhpur, Uttar Pradesh - 273001",
  },
  {
    lat: 30.3246561,
    lng: 78.0317344,
    name: "Dehradun",
    address:
      "Bajaj Broking, Shri Ram Arcade, 2nd Floor, Rajpur Road, Kandholi, Chironwali, Dehradun, Uttarakhand - 248001",
  },
  {
    lat: 23.2378978,
    lng: 87.8641432,
    name: "Bardhaman",
    address:
      "Bajaj Broking, Dutta Apartment, 4th Floor, 33, Ground Trunk Rd, Bardhaman, West Bengal - 713103",
  },
  {
    lat: 30.8970423,
    lng: 75.80919,
    name: "Ahmedabad",
    address:
      "Bajaj Broking, Shanghai Tower M.C. No. B-26-751/31, Out of Khasra No.720, Khata No.3033/3435, Revenue Estate of Village Taraf Karabara, Feroze Gandhi Market, Ferozepur Road, Ludhiana, Punjab - 141008",
  },
  {
    lat: 22.479557,
    lng: 70.05206,
    name: "Jamnagar",
    address:
      "Bajaj Broking, 3rd Floor, Joggers Park Road, Park Colony, Jamnagar, Gujarat - 361008",
  },
];

locations.forEach((location) => {
  let marker = L.marker([location.lat, location.lng], {
    icon: customIcon,
  }).addTo(map);
  marker.bindPopup(
    `<p style="font-weight: bold;font-size: 20px"> ${location.name}</p><br>${location.address}`
  );
});
