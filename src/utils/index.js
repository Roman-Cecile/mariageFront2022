import {
  Hotel as HotelIcon,
  Home as HomeIcon,
  Email as EmailIcon,
} from "@material-ui/icons";

// Image
import mazetJean from "../images/mazetJean.webp";
import mazetBonny from "../images/bonny.jpg";
import ponant from "../images/ponant.jpg";
import fast from "../images/fast.jpg";
import saintange from "../images/saintange.jpg";
import monplaisir from "../images/monplaisir.jpg";
import butterfly from "../images/butterfly.jpg";
import lestudio from "../images/lestudio.jpg";
import terremontagne from "../images/terremontagne.jpg";
import maisonville from "../images/maisonville.jpeg";
import atypique from "../images/atypique.jpg";
import chambrehote from "../images/chambrehote.jpeg";
import maisonentiere from "../images/maisonentiere.jpg";
import cledeschants from "../images/cledeschants.jpg";
import paillere from "../images/paillere.jpg";
import kyriad from "../images/kyriad.jpg";

export const capitalize = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const navbarActions = [
  {
    text: "Accueil",
    link: "/",
    icon: <HomeIcon fontSize='small' style={{ paddingLeft: 4 }} />,
  },
  {
    text: "Hôtels",
    link: "/hotel",
    icon: <HotelIcon fontSize='small' style={{ paddingLeft: 4 }} />,
  },
  {
    text: "RSVP",
    link: "/rsvp",
    icon: <EmailIcon fontSize='small' style={{ paddingLeft: 4 }} />,
  },
];

export const hotels = [
  {
    image: mazetJean,
    name: "Le Mazet de Jean",
    link: "http://www.lemazetdejean.fr/",
    number: "33434041297",
  },
  {
    image: mazetBonny,
    name: "Le Mazet de Bony",
    link: "https://www.airbnb.fr/rooms/18192620?source_impression_id=p3_1633257488_xZElLnsAaiLcVBDy&guests=1&adults=1",
    number: null,
  },
  {
    image: ponant,
    name: "Le Ponant",
    link: "https://www.airbnb.fr/rooms/18609419?source_impression_id=p3_1633258044_p2hJSQyrwmcH5HLx&guests=1&adults=1",
    number: "33651099173",
  },
  {
    image: fast,
    name: "Fasthotel",
    link: "https://www.fasthotel.com/languedoc-roussillon/hotel-nimes-ouest-lunel",
    number: "33466517734",
  },
  {
    image: kyriad,
    name: "Hôtel kyriad",
    link: "https://www.booking.com/hotel/fr/kyriadmontpellierlunel.fr.html?aid=397594&label=gog235jc-1FCAEoggI46AdIM1gDaE2IAQGYAQ24ARfIAQ_YAQHoAQH4AQyIAgGoAgO4Ao3a348GwAIB0gIkMGVmOTkwMjgtNmRkMy00ZTM3LWJhMWEtNDU0NjZkMDA1NGNm2AIG4AIB&sid=6a03e71485036fe79a7adacf84359a14&all_sr_blocks=99250_250733006_2_42_0&checkin=2022-07-02&checkout=2022-07-03&dest_id=-1406866&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&highlighted_blocks=99250_250733006_2_42_0&hpos=5&matching_block_id=99250_250733006_2_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=99250_250733006_2_42_0__9050&srepoch=1643638230&srpvid=5dc763aae5610360&type=total&ucfs=1&fbclid=IwAR3VlK2Lij4n7x6BD6qJdIZ5CUcJRvFW7uITivezRPV3Qs3-hKYUal9eR0E&activeTab=main",
    number: null,
  },
  {
    image: saintange,
    name: "Mas Saint-ange (5 chb)",
    link: "https://www.chambres-hotes.fr/chambres-hotes_mas-saint-ange_lunel_828.htm?fbclid=IwAR3FyOXOdaZKr-AN8iufx5bp61zJxk-bSXMyuO5OMNBJp5k5xdigHZ9eGgw",
    number: "33499920461",
  },
  {
    image: monplaisir,
    name: "Montplaisir (2 pers)",
    link: "https://www.booking.com/hotel/fr/les-chambres-de-montplaisir.fr.html?aid=361081&hotelid=1143445&no_rooms=1&group_adults=2&req_adults=2&group_children=0&req_children=0&checkin=2022-07-02&checkout=2022-07-03&room1=A%2CA&label=chambre&selected_currency=EUR&activeTab=main&fbclid=IwAR3MYZNO1kcFQJmwyeDrHnGzt7hDTmVRI9tzq__Do3zyhs91YZueXUCJCYI",
    number: null,
  },
  {
    image: butterfly,
    name: "Butterfly room (2 pers)",
    link: "https://www.airbnb.fr/rooms/43764217?adults=2&location=Aimargues&check_in=2022-07-02&check_out=2022-07-03&previous_page_section_name=1001&federated_search_id=e1a567a2-cbd6-4175-8ab6-3e139364e2c9&guests=1&fbclid=IwAR3dv-y8QB2RRoWmS3KUjLL0Fq02mrWiu301F5vPEdtgQ_gR29i_OLlP8jg",
    number: null,
  },
  {
    image: lestudio,
    name: "Le studio (2 pers)",
    link: "https://www.airbnb.fr/rooms/44720334?adults=2&location=Aimargues&check_in=2022-07-02&check_out=2022-07-03&previous_page_section_name=1001&federated_search_id=1161e38e-f520-4f4c-9f09-a9f950db0981&guests=1&fbclid=IwAR1K59qv794dRTEObYDflEKZaJE7iyKC-aEN3q1BMrkwng7cSi94vR5qw2o",
    number: null,
  },
  {
    image: terremontagne,
    name: "Entre mer et montagne (2 pers)",
    link: "https://www.airbnb.fr/rooms/44383699?adults=2&location=Aimargues&check_in=2022-07-02&check_out=2022-07-03&previous_page_section_name=1001&federated_search_id=7e719813-91b8-41a7-b014-e18dbb2ab642&guests=1&fbclid=IwAR1hcQYgLMnOgZgHFwv9_6BuE1zVJVleUV15pv9Lgzm2HOmjstXRDGDte9E",
    number: null,
  },
  {
    image: maisonville,
    name: "Maison de ville (4 pers)",
    link: "https://www.airbnb.fr/rooms/52850007?adults=2&location=Aimargues&check_in=2022-07-02&check_out=2022-07-03&previous_page_section_name=1001&federated_search_id=7e719813-91b8-41a7-b014-e18dbb2ab642&guests=1&fbclid=IwAR3CDADUvjdtdK_NR6b0xilJXlcitAkO3pqhM0p5iC4O3el5BvM_Uos-29Y",
    number: null,
  },
  {
    image: atypique,
    name: "Maison atypique (6 pers)",
    link: "https://www.airbnb.fr/rooms/3106694?adults=2&location=Aimargues&check_in=2022-07-02&check_out=2022-07-03&previous_page_section_name=1001&federated_search_id=5bd2cd19-0848-403c-abfa-4c723dd8f0dd&guests=1&fbclid=IwAR0cJ05OpK37NTXzvG_HnBXNth_uSV-WNof_PtFGbQjFdxIg97VWxXkePuM",
    number: null,
  },
  {
    image: chambrehote,
    name: "Chambre d'hôtes (2 pers)",
    link: "https://www.airbnb.fr/rooms/28801315?adults=2&location=Aimargues&check_in=2022-07-02&check_out=2022-07-03&previous_page_section_name=1001&federated_search_id=f6e0e31b-fc0b-487e-81a4-497e70f233e3&guests=1&fbclid=IwAR3CDADUvjdtdK_NR6b0xilJXlcitAkO3pqhM0p5iC4O3el5BvM_Uos-29Y",
    number: null,
  },
  {
    image: maisonentiere,
    name: "Maison entière (8 pers)",
    link: "https://www.airbnb.fr/rooms/50109488?adults=6&location=Aimargues&check_in=2022-07-02&check_out=2022-07-03&previous_page_section_name=1001&federated_search_id=de229009-0632-47ee-9c95-5a5626e7bd2c&guests=1&fbclid=IwAR3ou8rS6AS_OkUkD1Mof21LAUp_4tScxqz1L01X0PCw5LVnfZGPFdyGZP0",
    number: null,
  },
  {
    image: cledeschants,
    name: "La clé des chants (2 chb de 5 pers)",
    link: "https://www.booking.com/hotel/fr/la-cle-des-chants.fr.html?aid=397594&label=gog235jc-1FCAEoggI46AdIM1gDaE2IAQGYAQ24ARfIAQ_YAQHoAQH4AQyIAgGoAgO4Ao3a348GwAIB0gIkMGVmOTkwMjgtNmRkMy00ZTM3LWJhMWEtNDU0NjZkMDA1NGNm2AIG4AIB&sid=6a03e71485036fe79a7adacf84359a14&all_sr_blocks=65408901_327150675_5_1_0%2C65408903_327150675_1_1_0&checkin=2022-07-02&checkout=2022-07-03&dest_id=-1406866&dest_type=city&dist=0&group_adults=6&group_children=0&hapos=6&highlighted_blocks=65408901_327150675_5_1_0%2C65408903_327150675_1_1_0&hpos=6&matching_block_id=65408901_327150675_5_1_0&no_rooms=1&req_adults=6&req_children=0&room1=A%2CA%2CA%2CA%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=65408901_327150675_5_1_0__17290%2C65408903_327150675_1_1_0__11495&srepoch=1643638046&srpvid=eb19634e3d020223&type=total&ucfs=1&activeTab=main&fbclid=IwAR0c-4znMP8AbNcPOMdrEQSWsucW-ojml7kT3CPbUPY6vaqMokPOuA_WrEQ",
    number: null,
  },
  {
    image: paillere,
    name: "La Paillere (3 chb de 2 pers)",
    link: "https://www.booking.com/hotel/fr/la-paillere.fr.html?aid=397594&label=gog235jc-1FCAEoggI46AdIM1gDaE2IAQGYAQ24ARfIAQ_YAQHoAQH4AQyIAgGoAgO4Ao3a348GwAIB0gIkMGVmOTkwMjgtNmRkMy00ZTM3LWJhMWEtNDU0NjZkMDA1NGNm2AIG4AIB&sid=6a03e71485036fe79a7adacf84359a14&all_sr_blocks=135761306_179948768_2_1_0%2C135761307_179948768_2_1_0%2C135761304_179948768_2_1_0&checkin=2022-07-02&checkout=2022-07-03&dest_id=-1406866&dest_type=city&dist=0&group_adults=6&group_children=0&hapos=7&highlighted_blocks=135761306_179948768_2_1_0%2C135761307_179948768_2_1_0%2C135761304_179948768_2_1_0&hpos=7&matching_block_id=135761306_179948768_2_1_0&no_rooms=1&req_adults=6&req_children=0&room1=A%2CA%2CA%2CA%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=135761306_179948768_2_1_0__8916%2C135761307_179948768_2_1_0__8916%2C135761304_179948768_2_1_0__9391&srepoch=1643638046&srpvid=eb19634e3d020223&type=total&ucfs=1&fbclid=IwAR3dv-y8QB2RRoWmS3KUjLL0Fq02mrWiu301F5vPEdtgQ_gR29i_OLlP8jg&activeTab=main",
    number: null,
  },
];

export const urlAPI = "https://api-mariage.herokuapp.com";
// export const urlAPI = "http://localhost:5050";
