let map = L.map("map", {
  zoomControl: false,
}).setView([20.5937, 78.9629], 5);

L.control
  .zoom({
    position: "bottomright",
  })
  .addTo(map);

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
];

tiles.forEach((tile) => {
  tileLayers[tile.name] = L.tileLayer(tile.url, {
    attribution: tile.attribution,
    maxZoom: 19,
  });
});

tileLayers[MAP_PROVIDERS.google.satellite].addTo(map);

const layerControl = L.control.layers(tileLayers).addTo(map);

const customIcon = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='bouncing-marker'><img src='./assests/marker-3.svg' style='width: 38px; height: 38px;'/></div>", // Wrap your icon in a div
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [1, -34],
});

let locations = [
  {
    lat: 18.5619466,
    lng: 73.9205072,
    name: "Bajaj Broking",
    location: "Pune",
    address:
      "Bajaj Broking, 1st Floor, Tower B, Unit No 9 & 10, Mantri IT Park, Viman Nagar, Pune, Maharashtra - 411014",
  },
  {
    lat: 28.6307122,
    lng: 77.2241089,
    name: "Delhi",
    address:
      "Bajaj Broking, 7th Floor, Office No. 706, Ashoka Estate, 24 Barakhamba Road, Connaught Place, New Delhi - 110001",
  },
  {
    lat: 22.5492029,
    lng: 88.3577294,
    name: "Kolkata",
    address:
      "Bajaj Broking, 7th Floor, Office No. 7a/2, Siddha Park, 99a, Park Street, Kolkata, West Bengal - 700016",
  },
  {
    lat: 12.9734608,
    lng: 77.5991535,
    name: "Bangalore",
    address:
      "Bajaj Broking, Ground Floor, Office No. 36, Crown Point,lavelle Road, Kasturba Cross Road, Bangalore, Karnataka - 560001",
  },
  {
    lat: 23.0353598,
    lng: 72.50447989999999,
    name: "Ahmedabad",
    address:
      "Bajaj Broking, Office No. 503,504,505, Shilp Epitome, Near Rajpath Club, Bodakdev, Ahmedabad, Gujarat - 380054",
  },
  {
    lat: 19.1687455,
    lng: 72.8528377,
    name: "Mumbai",
    address:
      "Bajaj Broking, Office No. 205 -206 , 2nd Floor, Eco House, Vishweshwar Nagar, Off Aarey Road, Goregaon (East), Mumbai, Maharashtra - 400063",
  },
  {
    lat: 22.288642,
    lng: 70.7761022,
    name: "Rajkot",
    address:
      "Bajaj Broking, Ananat The Work Space, Office No. 204, 2nd Floor, Kalawad Main Road, Rajkot, Gujarat - 360001",
  },
  {
    lat: 21.1382166,
    lng: 79.0583559,
    name: "Nagpur",
    address:
      "Bajaj Broking, Office No. 302, 3rd Floor, C/0 Ved Solitaire, Cement Road, Dharampeth, Nagpur, Maharashtra - 440010",
  },
  {
    lat: 20.2938902,
    lng: 85.8505446,
    name: "Bhubaneshwar",
    address:
      "Bajaj Broking, B M C Bhawani Commercial Enclave, 4th Floor, Block-2, Sahid Nagar, Bhubaneshwar, Odisha - 751007",
  },
  {
    lat: 19.1687093,
    lng: 72.8527029,
    name: "Mumbai",
    address:
      "Bajaj Broking, Office No. 405-406, 4th Floor, Flat No 08, Eco House, Vishweshwar Nagar, Off Aarey Road, Goregaon (East), Mumbai, Maharashtra - 400063",
  },
  {
    lat: 26.9146539,
    lng: 75.8036647,
    name: "Jaipur",
    address:
      "Bajaj Broking, Office No. 201- 204, Green House, C Scheme, Ashok Nagar, Jaipur, Rajasthan - 302001",
  },
  {
    lat: 17.4285088,
    lng: 78.4549255,
    name: "Hyderabad",
    address:
      "Bajaj Broking, Office No. 6-3-885/7, 2nd Floor, Sapphire Square, Somajiguda, Hyderabad, Telangana - 500082",
  },
  {
    lat: 18.0105218,
    lng: 79.5628628,
    name: "Warangal",
    address:
      "Bajaj Broking, House No 5/777,5/778,5/779, Main Road, Lashkar Bazar, Opp. Gov, B.ed Colleges, Hanamkonda, Warangal , Telengana - 506002",
  },
  {
    lat: 16.9581035,
    lng: 82.23609139999999,
    name: "Kakinada",
    address:
      "Bajaj Broking, 1st Floor, Door No. 13-1-51, Ward No-14, Main Road, Kakinada Sub Registry, East Godavari, Dist. Kakinada, Andhra Pradesh - 533002",
  },
  {
    lat: 16.5023814,
    lng: 80.6389653,
    name: "Vijayawada",
    address:
      "Bajaj Broking, D No.39-9-2, Venkateswara Swamy Temple Road, Labbipet, Vijayawada, Andhra Pradesh - 520010",
  },
  {
    lat: 22.2271237,
    lng: 84.8390588,
    name: "Raurkela",
    address:
      "Bajaj Broking, Holding No.72, Plot No.304, Uditnager, Rourkela, Odisha - 769012",
  },
  {
    lat: 22.7873949,
    lng: 86.1828674,
    name: "Jamshedpur",
    address:
      "Bajaj Broking, Tee Kay Corporate Towers, 5th Floor, S.B Shop Area, Bistupur, Jamshedpur, Jharkhand - 831001",
  },
  {
    lat: 23.3584947,
    lng: 85.3238674,
    name: "Ranchi",
    address:
      "Bajaj Broking, Office No.104,107 & 108, 1st Floor, Commerce Tower, M S Plot No.1784, J D Compound, Main Road, Ranchi, Jharkhand - 834001",
  },
  {
    lat: 25.6107735,
    lng: 85.138239,
    name: "Patna",
    address:
      "Bajaj Broking, Office No. 3005, 3rd Floor, Grand Plaza, Dak Bungalow Chouraha, Fraser Road, Patna, Bihar - 800001",
  },
  {
    lat: 17.7287653,
    lng: 83.3031936,
    name: "Vizag",
    address:
      "Bajaj Broking, Tribhuvanam, 3rd Floor, 5th Lane, Diamond Park Road, Vizag, Andhra Pradesh - 530016",
  },
  {
    lat: 26.1744444,
    lng: 91.7742591,
    name: "Guwahati",
    address:
      "Bajaj Broking, Achyut & Choudhary Complex, 4th Floor, Ulubari, Near Hotel Bilas, G S Road, Guwahati, Assam - 781007",
  },
  {
    lat: 14.4444755,
    lng: 79.9859913,
    name: "Nellore",
    address:
      "Bajaj Broking , Door No. 16-3-235 (New), 16-1433 (Old) Sunshine Plaza, 3rd Floor, Ramalinga Puram, Nellore Town, Spst Nellore, Andhra Pradesh - 524003",
  },
  {
    lat: 16.9986366,
    lng: 81.7721179,
    name: "Rajahmundry",
    address:
      "Bajaj Broking, 1st Floor, Door No. 7-26-4, Kokkondavari St, Mangalavaripeta, Maturivari Street, T Nagar, Near Kumari Talkies, Rajahmundry, Andhra Pradesh - 533101",
  },
  {
    lat: 21.2450817,
    lng: 81.646339,
    name: "Raipur",
    address:
      "Bajaj Broking, Piyank Tower, Shop No. 03, 2nd Floor, Beside Oxyzone, Ge Road Raja Talab Raipur, Chhattisgarh - 492001",
  },
  {
    lat: 13.0652661,
    lng: 80.259711,
    name: "Chennai",
    address:
      "Bajaj Broking, Fagun Mansion, 3rd Floor, Door No. 74, Ethiraj Salai, Egmore, Chennai, Tamil Nadu - 600008",
  },
  {
    lat: 11.0134404,
    lng: 76.9495863,
    name: "Coimbatore",
    address:
      "Bajaj Broking, Pinnacle Krishna, 581/1, 1st Floor, DB Road, R S Puram, Coimbatore, Tamil Nadu - 641002",
  },
  {
    lat: 25.1695936,
    lng: 75.8474902,
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
    lat: 22.3188275,
    lng: 73.1668167,
    name: "Vadodara",
    address:
      "Bajaj Broking, Office No. 105/106, Block-D, 1st Floor, Notus IT Park, Near Genda Circle, Sarabhai Campus, Bhailal Amin Road, Vadodara, Gujarat - 390023",
  },
  {
    lat: 18.5630458,
    lng: 73.919955,
    name: "Pune",
    address:
      "Bajaj Broking, 6th Floor, Beta-II (E-2), Giga Space, Sr. No.198/1b, Viman Nagar, Nagar Road, Pune, Maharashtra - 411014",
  },
  {
    lat: 18.5139438,
    lng: 73.8344869,
    name: "Pune",
    address:
      "Bajaj Broking, 96 Suvarnarekha Boulevard, 3rd Floor, Ghodake Chowk, Prabhat Rd, Erandwane, Pune, Maharashtra - 411004",
  },
  {
    lat: 19.165619,
    lng: 72.8533859,
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
    lat: 28.9783299,
    lng: 77.7317711,
    name: "Meerut",
    address:
      "Bajaj Broking, 189, Ground Floor, RPM Tower, Mangal Pandey Nagar, CCS University Road, Near Kotak Mahindra Bank, Meerut, Uttar Pradesh - 250004",
  },
  {
    lat: 26.4811256,
    lng: 80.3443014,
    name: "Kanpur",
    address:
      "Bajaj Broking , Office Unit No - 612to 616,on 6th Floor , Kan Chambers, 14/113, Civil Line Kanpur Nagar - 208001",
  },
  {
    lat: 27.2000222,
    lng: 78.0048772,
    name: "Agra",
    address:
      "Bajaj Broking, Corporate Park, 4th Floor, Office No. 406, Block No. 109, Sanjay Palace, Behind Cosmos Mall, Sanjay Place, Civil Lines, Agra, Uttar Pradesh - 282004",
  },
  {
    lat: 22.7228204,
    lng: 75.8869418,
    name: "Ahmedabad",
    address:
      "Bajaj Broking, Shekhar Central, Office No. 104, 1st Floor, Plot No. 04 & 05, AB Road, Manorama Ganj, Indore, Madhya Pradesh - 452001",
  },
  {
    lat: 21.7555436,
    lng: 72.1459896,
    name: "Bhavnagar",
    address:
      "Bajaj Broking, Shanti Height, Office No. 104, 1st Floor, Vadoriya Park, Hill Drive, Bhavnagar - 364002",
  },
  {
    lat: 21.1667232,
    lng: 72.7954828,
    name: "Surat",
    address:
      "Bajaj Broking, Unity Corner, 4th Floor, City Light Main Road, Opposite Bank of Baroda, Surat - 395007",
  },
  {
    lat: 10.8236119,
    lng: 78.6833054,
    name: "Trichy",
    address:
      "Bajaj Broking, Selva Nirmala Complex, 1st Floor, 5th Cross Road E, Thillai Nagar, Tiruchirappalli, Tamil Nadu - 620018",
  },
  {
    lat: 25.4480425,
    lng: 81.8333546,
    name: "Prayagraj",
    address:
      "Bajaj Broking, LDA Centre, 1st Floor, Nawab Yusuf Road, Civil Lines, Prayagraj, Uttar Pradesh - 211001",
  },
  {
    lat: 26.7211274,
    lng: 88.4238603,
    name: "Siliguri",
    address:
      "Bajaj Broking, Metro Square, 5th Floor, Ward 10, Janta Nagar, Siliguri, West Bengal - 734001",
  },
  {
    lat: 23.2370446,
    lng: 77.4350164,
    name: "Bhopal",
    address:
      "Bajaj Broking, Ambika Orchid, 1st Floor, Z-19, Opposite Chittod Complex, Zone- I, M P Nagar, Bhopal, Madya Pradesh - 462011",
  },
  {
    lat: 26.7528048,
    lng: 83.3665226,
    name: "Gorakhpur",
    address:
      "Bajaj Broking, Lower Ground Floor, Cross Road The Mall, Bank Road, Agrasen Chowk, Gorakhpur, Uttar Pradesh - 273001",
  },
  {
    lat: 30.3284812,
    lng: 78.0473348,
    name: "Dehradun",
    address:
      "Bajaj Broking, Shri Ram Arcade, 2nd Floor, Rajpur Road, Kandholi, Chironwali, Dehradun, Uttarakhand - 248001",
  },
  {
    lat: 23.2379164,
    lng: 87.8665915,
    name: "Bardhaman",
    address:
      "Bajaj Broking, Dutta Apartment, 4th Floor, 33, Ground Trunk Rd, Bardhaman, West Bengal - 713103",
  },
  {
    lat: 30.9022565,
    lng: 75.8327046,
    name: "Ahmedabad",
    address:
      "Bajaj Broking, Shanghai Tower M.C. No. B-26-751/31, Out of Khasra No.720, Khata No.3033/3435, Revenue Estate of Village Taraf Karabara, Feroze Gandhi Market, Ferozepur Road, Ludhiana, Punjab - 141008",
  },
  {
    lat: 22.4795899,
    lng: 70.0544822,
    name: "Jamnagar",
    address:
      "Bajaj Broking, 3rd Floor, Joggers Park Road, Park Colony, Jamnagar, Gujarat - 361008",
  },
];

const popupDiv = document.getElementById("sticky-popup");

function showStickyPopup(content) {
  popupDiv.innerHTML = content;
  popupDiv.classList.remove("hidden");
}

let markers = [];

locations.forEach((location) => {
  let marker = L.marker([location.lat, location.lng], {
    icon: customIcon,
  }).addTo(map);

  const directionsButton = `<a href="https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}" target="_blank" class="directions-button">Get Directions</a>`;

  const popupContent = `
      <p style="font-weight: bold; font-size: 20spx">${location.name}</p>
      <p>${location.address}</p>
      ${directionsButton}
    `;

  marker.on("click", () => {
    document
      .querySelectorAll(".bouncing-marker")
      .forEach((el) => el.classList.remove("bouncing-marker"));

    marker.getElement().querySelector("div").classList.add("bouncing-marker");
    showStickyPopup(popupContent);
  });
  markers.push({ marker, popupContent });
});

const firstMarker = markers[0].marker;
document
  .querySelectorAll(".bouncing-marker")
  .forEach((el) => el.classList.remove("bouncing-marker"));
firstMarker.getElement().querySelector("div").classList.add("bouncing-marker");
showStickyPopup(markers[0].popupContent);
