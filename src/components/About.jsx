import { Link } from "react-router-dom";
import before from "../assets/before.svg";
import after from "../assets/after.svg";
import welcome from "../assets/welcome.svg";
import { NameAnimation } from "./NameAnimation";

export function About() {
  function WikipediaButton() {
    const links = [
      "https://en.wikipedia.org/wiki/Angelica_and_Medoro",
      "https://en.wikipedia.org/wiki/Orlando_(opera)",
      "https://en.wikipedia.org/wiki/USS_Samuel_B._Roberts_(DE-413)",
      "https://en.wikipedia.org/wiki/Monty_Hall_problem",
      "https://en.wikipedia.org/wiki/Rigas_Feraios",
      "https://en.wikipedia.org/wiki/Joachim_Patinir",
      "https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect",
      "https://en.wikipedia.org/wiki/Graphical_user_interface",
      "https://en.wikipedia.org/wiki/Extreme_programming",
      "https://en.wikipedia.org/wiki/Test-driven_development",
      "https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",
      "https://en.wikipedia.org/wiki/Creational_pattern",
      "https://en.wikipedia.org/wiki/Technical_debt",
      "https://en.wikipedia.org/wiki/Code_smell",
      "https://en.wikipedia.org/wiki/Polish_notation",
      "https://en.wikipedia.org/wiki/Transistor",
      "https://en.wikipedia.org/wiki/Bit_rate",
      "https://en.wikipedia.org/wiki/Infinite_monkey_theorem",
      "https://en.wikipedia.org/wiki/Modularity",
      "https://en.wikipedia.org/wiki/Functional_programming",
      "https://en.wikipedia.org/wiki/Minification_(programming)",
      "https://en.wikipedia.org/wiki/Endianness",
      "https://en.wikipedia.org/wiki/Dark_pattern",
      "https://en.wikipedia.org/wiki/Code_refactoring",
      "https://en.wikipedia.org/wiki/KISS_principle",
      "https://en.wikipedia.org/wiki/Scripting_language",
      "https://en.wikipedia.org/wiki/ASCII",
      "https://en.wikipedia.org/wiki/Binary_number",
      "https://en.wikipedia.org/wiki/Data_structure",
      "https://en.wikipedia.org/wiki/Cargo_cult_programming",
      "https://en.wikipedia.org/wiki/Binary_logarithm",
      "https://en.wikipedia.org/wiki/Incremental_game",
      "https://en.wikipedia.org/wiki/Bagua",
      "https://en.wikipedia.org/wiki/Zelda_Fitzgerald",
      "https://en.wikipedia.org/wiki/Al_Jolson",
      "https://en.wikipedia.org/wiki/Empresses_in_the_Palace",
      "https://en.wikipedia.org/wiki/Jack_LaLanne",
      "https://en.wikipedia.org/wiki/Ludwig_Wittgenstein",
      "https://en.wikipedia.org/wiki/Key_person_insurance",
      "https://en.wikipedia.org/wiki/Grok",
      "https://en.wikipedia.org/wiki/Noodling",
      "https://en.wikipedia.org/wiki/Burrowing_owl",
      "https://en.wikipedia.org/wiki/Georgia_Guidestones",
      "https://en.wikipedia.org/wiki/Caesar_cipher",
      "https://en.wikipedia.org/wiki/Ota_Benga",
      "https://en.wikipedia.org/wiki/Nineveh",
      "https://en.wikipedia.org/wiki/Palmyra",
      "https://en.m.wikipedia.org/wiki/Dragline_excavator",
      "https://en.wikipedia.org/wiki/Inukai_Tsuyoshi",
      "https://en.wikipedia.org/wiki/Helen_Mirren",
      "https://en.wikipedia.org/wiki/Thomas_Cornell_(settler)",
      "https://en.wikipedia.org/wiki/John_Brenkus",
      "https://en.wikipedia.org/wiki/Franz_Reichelt",
      "https://en.wikipedia.org/wiki/Rocky_Mountain_Hydroelectric_Plant",
      "https://en.wikipedia.org/wiki/Jamaica_Kincaid",
      "https://en.wikipedia.org/wiki/John_Updike",
      "https://en.wikipedia.org/wiki/Three_Gorges_Dam",
      "https://en.wikipedia.org/wiki/Rutger_Bregman",
      "https://en.wikipedia.org/wiki/Jan_van_Hooff",
      "https://en.wikipedia.org/wiki/Jane_Goodall",
      "https://en.wikipedia.org/wiki/Afzal_Khan_(general)",
      "https://en.wikipedia.org/wiki/The_Doon_School",
      "https://en.wikipedia.org/wiki/Neeraj_Chopra",
      "https://en.wikipedia.org/wiki/Leverage_(finance)",
      "https://en.wikipedia.org/wiki/Oskar_Sala",
      "https://en.wikipedia.org/wiki/Kintsugi",
      "https://en.wikipedia.org/wiki/Tortoiseshell_cat",
      "https://en.wikipedia.org/wiki/Greenland_shark",
      "https://en.wikipedia.org/wiki/Conway's_Game_of_Life",
      "https://en.wikipedia.org/wiki/Big_Five_personality_traits",
      "https://en.wikipedia.org/wiki/Nostradamus",
      "https://en.wikipedia.org/wiki/Kowloon_Walled_City",
      "https://en.wikipedia.org/wiki/Fairy_ring",
      "https://en.wikipedia.org/wiki/Champagne_socialist",
      "https://en.wikipedia.org/wiki/Ready-to-wear",
      "https://en.wikipedia.org/wiki/Web_2.0",
      "https://en.wikipedia.org/wiki/Bowe_Bergdahl",
      "https://en.wikipedia.org/wiki/Whataboutism",
      "https://en.wikipedia.org/wiki/Irwin's_turtle",
      "https://en.wikipedia.org/wiki/Lin_Biao",
      "https://en.wikipedia.org/wiki/Peng_Dehuai",
      "https://en.wikipedia.org/wiki/Oneida_Limited",
      "https://en.wikipedia.org/wiki/Hua_Guofeng",
      "https://en.wikipedia.org/wiki/Deng_Xiaoping",
      "https://en.wikipedia.org/wiki/Navel_gazing",
      "https://en.wikipedia.org/wiki/Harry_Belafonte",
      "https://en.wikipedia.org/wiki/Makgeolli",
      "https://en.wikipedia.org/wiki/La_Jument",
      "https://en.wikipedia.org/wiki/Chloe_Chua",
      "https://en.wikipedia.org/wiki/Itzhak_Perlman",
      "https://en.wikipedia.org/wiki/Milk_War",
      "https://en.wikipedia.org/wiki/Ferdinand_Marcos",
      "https://en.wikipedia.org/wiki/One-to-one_%28data_model%29",
      "https://en.wikipedia.org/wiki/One-to-many_%28data_model%29",
      "https://en.wikipedia.org/wiki/Scottish_Fold",
      "https://en.wikipedia.org/wiki/Jacob_Collier",
      "https://en.wikipedia.org/wiki/Myna",
      "https://en.wikipedia.org/wiki/Methuselah",
      "https://en.wikipedia.org/wiki/Infrastructure_Investment_and_Jobs_Act",
      "https://en.wikipedia.org/wiki/Build_Back_Better_Act",
      "https://en.wikipedia.org/wiki/Uji",
      "https://en.wikipedia.org/wiki/Hattie_Wyatt_Caraway",
      "https://en.wikipedia.org/wiki/FCB_(advertising_agency)",
      "https://en.wikipedia.org/wiki/Amiri_Baraka",
      "https://en.wikipedia.org/wiki/Robert_Hayden",
      "https://en.wikipedia.org/wiki/Sterling_Allen_Brown",
      "https://en.wikipedia.org/wiki/Gwendolyn_Brooks",
      "https://en.wikipedia.org/wiki/2022_Oder_environmental_disaster",
      "https://en.wikipedia.org/wiki/Cat_Stevens",
      "https://en.wikipedia.org/wiki/Gloria_Swanson",
      "https://en.wikipedia.org/wiki/Create,_read,_update_and_delete",
      "https://en.wikipedia.org/wiki/Lake_Mead",
      "https://en.wikipedia.org/wiki/Pallas's_cat",
      "https://en.wikipedia.org/wiki/Eagle_eye",
      "https://en.wikipedia.org/wiki/Japanese_wolf",
      "https://en.wikipedia.org/wiki/Kinkajou",
      "https://en.wikipedia.org/wiki/Guarneri",
      "https://en.wikipedia.org/wiki/Bullenbeisser",
      "https://en.wikipedia.org/wiki/Ouroboros",
      "https://en.wikipedia.org/wiki/Korybantes",
      "https://en.wikipedia.org/wiki/La_Dolce_Vita",
      "https://en.wikipedia.org/wiki/Spanish_cloak",
      "https://en.wikipedia.org/wiki/Veronica_Lake",
      "https://en.wikipedia.org/wiki/Mae_West",
      "https://en.wikipedia.org/wiki/Ievan_polkka",
      "https://en.wikipedia.org/wiki/Bittern",
      "https://en.wikipedia.org/wiki/1907_Tiflis_bank_robbery",
      "https://en.wikipedia.org/wiki/Ulrich_von_Liechtenstein",
      "https://en.wikipedia.org/wiki/Memory_leak",
      "https://en.wikipedia.org/wiki/Antonio_Salieri",
      "https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry",
      "https://en.wikipedia.org/wiki/Kettering_Bug",
      "https://en.wikipedia.org/wiki/Steve_Van_Buren",
      "https://en.wikipedia.org/wiki/Arabesque",
      "https://en.wikipedia.org/wiki/Stunt_casting",
      "https://en.wikipedia.org/wiki/Fleischer_Studios",
      "https://en.wikipedia.org/wiki/Hanna-Barbera",
      "https://en.wikipedia.org/wiki/Looney_Tunes",
      "https://en.wikipedia.org/wiki/Verisimilitude",
      "https://en.wikipedia.org/wiki/Cologne_Carnival",
      "https://en.wikipedia.org/wiki/Vox_Populi,_Vox_Dei",
      "https://en.wikipedia.org/wiki/Shoe-fitting_fluoroscope",
      "https://en.wikipedia.org/wiki/Streamlabs",
      "https://en.wikipedia.org/wiki/Manhwa",
      "https://en.wikipedia.org/wiki/Charlie_Munger",
      "https://en.wikipedia.org/wiki/Wars_of_the_Roses",
      "https://en.wikipedia.org/wiki/Victory_rolls",
      "https://en.wikipedia.org/wiki/Sambuca",
      "https://en.wikipedia.org/wiki/Stalking_horse",
      "https://en.wikipedia.org/wiki/Gordian_Knot",
      "https://en.wikipedia.org/wiki/Eupolis",
      "https://en.wikipedia.org/wiki/Bruce_Fairchild_Barton",
      "https://en.wikipedia.org/wiki/Pygmalion_(mythology)",
      "https://en.wikipedia.org/wiki/Sam_Gilbert_(businessman)",
      "https://en.wikipedia.org/wiki/Enver_Pasha",
      "https://en.wikipedia.org/wiki/Art_Deco",
      "https://en.wikipedia.org/wiki/The_Way_of_All_Flesh",
      "https://en.wikipedia.org/wiki/Victor_Fleming",
      "https://en.wikipedia.org/wiki/1965_MGM_vault_fire",
      "https://en.wikipedia.org/wiki/Telecommunications_Act_of_1996",
      "https://en.wikipedia.org/wiki/1st_Academy_Awards",
      "https://en.wikipedia.org/wiki/Personal_knowledge_management",
      "https://en.wikipedia.org/wiki/Capocollo",
      "https://da.wikipedia.org/wiki/Gustav_Vigeland",
      "https://en.wikipedia.org/wiki/Red_Auerbach",
      "https://en.wikipedia.org/wiki/Caleb_Swanigan",
      "https://en.wikipedia.org/wiki/Baby_walker",
      "https://en.wikipedia.org/wiki/Carpetbagger",
      "https://en.wikipedia.org/wiki/Whipsaw",
      "https://en.wikipedia.org/wiki/Ward_Cunningham",
      "https://en.wikipedia.org/wiki/Laurence_Olivier",
      "https://en.wikipedia.org/wiki/Polysyndeton",
      "https://en.wikipedia.org/wiki/Hanlon%27s_razor",
      "https://en.wikipedia.org/wiki/Cab_Calloway",
      "https://en.wikipedia.org/wiki/Nicholas_Brothers",
      "https://en.wikipedia.org/wiki/Gene_Krupa",
      "https://en.wikipedia.org/wiki/Ritchie_Valens",
      "https://en.wikipedia.org/wiki/Miles_Davis",
      "https://en.wikipedia.org/wiki/Okapi",
      "https://en.wikipedia.org/wiki/Isadora_Duncan",
      "https://en.wikipedia.org/wiki/Yvonne_Brathwaite_Burke",
      "https://en.wikipedia.org/wiki/Joseph_Rainey",
      "https://en.wikipedia.org/wiki/George_Shinn",
      "https://en.wikipedia.org/wiki/Die_Br%C3%BCcke_(film)",
      "https://en.wikipedia.org/wiki/Cassowary",
      "https://en.wikipedia.org/wiki/Schott_NYC",
      "https://en.wikipedia.org/wiki/Dutch_angle",
      "https://en.wikipedia.org/wiki/Bidone_d%27oro",
      "https://en.wikipedia.org/wiki/Sergei_Kirov",
      "https://en.wikipedia.org/wiki/Matthias_Sindelar",
      "https://en.wikipedia.org/wiki/Tippecanoe_and_Tyler_Too",
      "https://en.wikipedia.org/wiki/Laura_Kampf",
      "https://en.wikipedia.org/wiki/Simone_Giertz",
      "https://en.wikipedia.org/wiki/Hermann_Ebbinghaus",
      "https://en.wikipedia.org/wiki/Charles_Babbage",
      "https://en.wikipedia.org/wiki/Paris_syndrome",
      "https://en.wikipedia.org/wiki/Liverpool_F.C._9%E2%80%930_AFC_Bournemouth",
      "https://en.wikipedia.org/wiki/Faust",
      "https://en.wikipedia.org/wiki/Allostatic_load",
      "https://en.wikipedia.org/wiki/Ing%C3%A9nue",
      "https://en.wikipedia.org/wiki/Social_determinants_of_health",
      "https://en.wikipedia.org/wiki/Buffalo_Bill",
      "https://en.wikipedia.org/wiki/Verona_Arena",
      "https://en.wikipedia.org/wiki/Abdullah_of_Saudi_Arabia",
      "https://en.wikipedia.org/wiki/Marilynn_Malerba",
      "https://en.wikipedia.org/wiki/Ray_Clemence",
      "https://en.wikipedia.org/wiki/Geordie",
      "https://en.wikipedia.org/wiki/SPS_(Mongolia)",
      "https://en.wikipedia.org/wiki/Nando's",
      "https://en.wikipedia.org/wiki/The_Solent",
      "https://en.wikipedia.org/wiki/Southampton",
      "https://en.wikipedia.org/wiki/INF_Clairefontaine",
      "https://en.wikipedia.org/wiki/%C3%8Ele-de-France",
      "https://en.wikipedia.org/wiki/The_Athletic",
      "https://en.wikipedia.org/wiki/Les_Ulis",
      "https://en.wikipedia.org/wiki/Henry_Clay_Frick",
      "https://en.wikipedia.org/wiki/Herbert_Hainer",
      "https://en.wikipedia.org/wiki/Polemic",
      "https://en.wikipedia.org/wiki/Midjourney",
      "https://en.wikipedia.org/wiki/Stable_Diffusion",
      "https://en.wikipedia.org/wiki/DALL-E",
      "https://en.wikipedia.org/wiki/Yanukism",
      "https://en.wikipedia.org/wiki/Kharkiv",
      "https://en.wikipedia.org/wiki/Polish%E2%80%93Lithuanian_Commonwealth",
      "https://en.wikipedia.org/wiki/Munich_air_disaster",
      "https://en.wikipedia.org/wiki/Busby_Babes",
      "https://en.wikipedia.org/wiki/Saipan_incident",
      "https://en.wikipedia.org/wiki/Duracell_Bunny",
      "https://en.wikipedia.org/wiki/Sam_Altman",
      "https://en.m.wikipedia.org/wiki/Paris_syndrome",
      "https://en.wikipedia.org/wiki/William_Daniels",
      "https://en.wikipedia.org/wiki/The_Crystal_Palace",
      "https://en.wikipedia.org/wiki/Keith_Miller",
      "https://en.wikipedia.org/wiki/Denis_Compton",
      "https://en.wikipedia.org/wiki/Mordecai_Brown",
      "https://en.wikipedia.org/wiki/Sliding_doors_moment",
      "https://en.wikipedia.org/wiki/Monty_Don",
      "https://en.wikipedia.org/wiki/Peter_Kenyon",
      "https://en.wikipedia.org/wiki/Worthy.com",
      "https://en.wikipedia.org/wiki/Mise_en_abyme",
      "https://en.wikipedia.org/wiki/List_of_largest_book_deals",
      "https://en.wikipedia.org/wiki/Craig_Ferguson",
      "https://en.wikipedia.org/wiki/Chuck_Mangione",
      "https://en.wikipedia.org/wiki/Bilderberg_meeting",
      "https://en.wikipedia.org/wiki/Khmer_Rouge",
      "https://en.wikipedia.org/wiki/Mike_Mansfield",
      "https://en.wikipedia.org/wiki/Glasgow_dialect",
      "https://en.wikipedia.org/wiki/George_Koskotas",
      "https://en.wikipedia.org/wiki/Ivan_Savvidis",
      "https://en.wikipedia.org/wiki/Crab_mentality",
      "https://en.wikipedia.org/wiki/Corruption_in_Greece",
      "https://en.wikipedia.org/wiki/Eliot_Horowitz",
      "https://en.wikipedia.org/wiki/Paradox_of_thrift",
      "https://en.wikipedia.org/wiki/Belt_and_Road_Initiative",
      "https://en.wikipedia.org/wiki/Hamburger_button",
      "https://en.wikipedia.org/wiki/English_White_Terrier",
      "https://en.wikipedia.org/wiki/Petr_Pavel",
      "https://en.wikipedia.org/wiki/Kaja_Kallas",
      "https://en.wikipedia.org/wiki/Gale%E2%80%93Shapley_algorithm",
      "https://en.wikipedia.org/wiki/Banjo_Paterson",
      "https://en.wikipedia.org/wiki/David_Unaipon",
      "https://en.wikipedia.org/wiki/Banknotes_of_the_Australian_dollar",
      "https://en.wikipedia.org/wiki/Harold_Holt",
      "https://en.wikipedia.org/wiki/Mexican_drug_war",
      "https://en.wikipedia.org/wiki/BEANO_T-13_grenade",
      "https://en.wikipedia.org/wiki/Dalbergia_nigra",
      "https://en.wikipedia.org/wiki/Race_condition",
      "https://en.wikipedia.org/wiki/Document_Object_Model",
      "https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping",
      "https://en.wikipedia.org/wiki/Deadlock",
      "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller",
      "https://en.wikipedia.org/wiki/Separation_of_concerns",
      "https://en.wikipedia.org/wiki/World_Press_Photo_of_the_Year",
      "https://en.wikipedia.org/wiki/Database_schema",
      "https://en.wikipedia.org/wiki/OAuth",
      "https://en.wikipedia.org/wiki/Authorization",
      "https://en.wikipedia.org/wiki/Favicon",
      "https://en.wikipedia.org/wiki/Jean_Bartik",
      "https://en.wikipedia.org/wiki/Deno_(software)",
      "https://en.wikipedia.org/wiki/WebSocket",
      "https://en.wikipedia.org/wiki/Cryptographic_nonce",
      "https://en.wikipedia.org/wiki/Sankey_diagram",
      "https://en.wikipedia.org/wiki/Eureka_Rebellion",
      "https://en.wikipedia.org/wiki/List_of_genres",
      "https://en.wikipedia.org/wiki/Meander_(art)",
      "https://en.wikipedia.org/wiki/NHL_Outdoors_at_Lake_Tahoe",
      "https://en.wikipedia.org/wiki/NHL_Stadium_Series",
      "https://en.wikipedia.org/wiki/NHL_Winter_Classic",
      "https://en.wikipedia.org/wiki/NHL_Heritage_Classic",
      "https://en.wikipedia.org/wiki/Sigrid_Thornton",
      "https://en.wikipedia.org/wiki/Temari_(toy)",
      "https://en.wikipedia.org/wiki/Tsuchinoko",
      "https://en.wikipedia.org/wiki/Kakig%C5%8Dri",
      "https://en.wikipedia.org/wiki/Anmitsu",
      "https://en.wikipedia.org/wiki/Ghalib",
      "https://en.wikipedia.org/wiki/Physiologic_tremor",
      "https://en.wikipedia.org/wiki/Finlandization",
      "https://en.wikipedia.org/wiki/J._M._W._Turner",
      "https://en.wikipedia.org/wiki/Thomas_Gainsborough",
      "https://en.wikipedia.org/wiki/Software_design_pattern",
      "https://en.wikipedia.org/wiki/Flowers_for_Algernon",
      "https://en.wikipedia.org/wiki/Accelerating_change",
      "https://en.wikipedia.org/wiki/Doctor_blade",
      "https://en.wikipedia.org/wiki/Juana_In%C3%A9s_de_la_Cruz",
      "https://en.wikipedia.org/wiki/Chowhound",
      "https://en.wikipedia.org/wiki/Mabel_Normand",
      "https://en.wikipedia.org/wiki/Meiji_Restoration",
      "https://en.wikipedia.org/wiki/Massimo_Vignelli",
      "https://en.wikipedia.org/wiki/Keith_Gill",
      "https://en.wikipedia.org/wiki/Gas_Light",
      "https://en.wikipedia.org/wiki/List_of_highest-grossing_media_franchises",
      "https://en.wikipedia.org/wiki/Holodomor",
      "https://en.wikipedia.org/wiki/Que_Sera,_Sera_(Whatever_Will_Be,_Will_Be)",
      "https://en.wikipedia.org/wiki/Dario_Fo",
      "https://en.wikipedia.org/wiki/DeepMind",
      "https://en.wikipedia.org/wiki/Google_Brain",
      "https://en.wikipedia.org/wiki/Charles_Sew_Hoy",
      "https://en.wikipedia.org/wiki/Sphinx_Head",
      "https://en.wikipedia.org/wiki/Peter_Diamandis",
      "https://en.wikipedia.org/wiki/October:_Ten_Days_That_Shook_the_World",
      "https://en.wikipedia.org/wiki/List_of_films_considered_the_best",
      "https://en.wikipedia.org/wiki/Pusheen",
      "https://en.wikipedia.org/wiki/Dynamic_programming",
      "https://en.wikipedia.org/wiki/Elijah_McCoy",
      "https://en.wikipedia.org/wiki/Tomorrow.io",
      "https://en.wikipedia.org/wiki/Antigone_(Sophocles_play)",
      "https://en.wikipedia.org/wiki/Rogue_(video_game)",
      "https://en.wikipedia.org/wiki/Haitz%27s_law",
      "https://en.wikipedia.org/wiki/Angels_in_America",
      "https://en.wikipedia.org/wiki/Pergamon_Altar",
      "https://en.wikipedia.org/wiki/Yasujir%C5%8D_Ozu",
      "https://en.wikipedia.org/wiki/Rinderkennzeichnungs-_und_Rindfleischetikettierungs%C3%BCberwachungsaufgaben%C3%BCbertragungsgesetz",
      "https://en.wikipedia.org/wiki/Wassily_Kandinsky",
      "https://en.wikipedia.org/wiki/Amedeo_Modigliani",
      "https://en.wikipedia.org/wiki/Jimmy_Walker",
      "https://en.wikipedia.org/wiki/Milgram_experiment",
      "https://en.wikipedia.org/wiki/Leucism",
      "https://en.wikipedia.org/wiki/Brave_New_World",
      "https://en.wikipedia.org/wiki/Stacey_Milbern",
      "https://en.wikipedia.org/wiki/ARPANET",
      "https://en.wikipedia.org/wiki/Bechdel_test",
      "https://en.wikipedia.org/wiki/I386",
      "https://en.wikipedia.org/wiki/Office_Assistant",
      "https://en.wikipedia.org/wiki/Teletext",
      "https://en.m.wikipedia.org/wiki/Gaius_Appuleius_Diocles",
      "https://en.wikipedia.org/wiki/Capilano_Suspension_Bridge",
      "https://en.wikipedia.org/wiki/Helmut_Newton",
      "https://en.wikipedia.org/wiki/Bocuse_d%27Or",
      "https://en.wikipedia.org/wiki/Paul_Poiret",
      "https://en.wikipedia.org/wiki/Slobodan_Milo%C5%A1evi%C4%87",
      "https://en.wikipedia.org/wiki/Steve_Zahn",
      ,
      "https://en.wikipedia.org/wiki/Washi",
      "https://en.wikipedia.org/wiki/Audrey_Munson",
      "https://en.wikipedia.org/wiki/United_States_Semiquincentennial",
      "https://en.wikipedia.org/wiki/Kaua%CA%BBi_%CA%BB%C5%8D%CA%BB%C5%8D",
      "https://en.wikipedia.org/wiki/Moore's_law",
      "https://en.wikipedia.org/wiki/Edwin_G._Seibels",
      "https://en.wikipedia.org/wiki/SQL",
      "https://en.wikipedia.org/wiki/Assembly_language",
      "https://en.wikipedia.org/wiki/Merkle%27s_Boner",
      "https://en.wikipedia.org/wiki/Bill_Buckner%27s_1986_World_Series_error",
      "https://en.wikipedia.org/wiki/Don_Denkinger",
      "https://en.wikipedia.org/wiki/Mitski",
      "https://en.wikipedia.org/wiki/Haru_Urara",
      "https://en.wikipedia.org/wiki/Escalation_clause",
      "https://en.wikipedia.org/wiki/Anita_Bryant",
      "https://en.wikipedia.org/wiki/Dungeon",
      "https://en.wikipedia.org/wiki/The_World_Inside_a_Pillow",
      "https://en.wikipedia.org/wiki/Letters_to_a_Young_Poet",
      "https://en.wikipedia.org/wiki/Euell_Gibbons",
      "https://en.wikipedia.org/wiki/Yerba_mate",
      "https://en.wikipedia.org/wiki/Strange_situation",
      "https://en.m.wikipedia.org/wiki/Tarrare",
      "https://en.wikipedia.org/wiki/John_B._Goodenough",
      "https://en.wikipedia.org/wiki/Sappho",
      "https://en.wikipedia.org/wiki/Achilles",
      "https://en.wikipedia.org/wiki/Eric_P._Newman",
      "https://en.wikipedia.org/wiki/Pomelo",
      "https://en.wikipedia.org/wiki/Sanford_Meisner",
      "https://en.wikipedia.org/wiki/Janja_Garnbret",
      "https://en.wikipedia.org/wiki/Red_Hat",
      "https://en.wikipedia.org/wiki/Glenfinnan_Viaduct",
      "https://en.wikipedia.org/wiki/NIMBY",
      "https://en.wikipedia.org/wiki/Peng_Dehuai",
      "https://en.wikipedia.org/wiki/Ada_Lovelace",
      "https://en.wikipedia.org/wiki/Bruno_Walter",
      "https://en.wikipedia.org/wiki/Yehudi_Menuhin",
      "https://en.wikipedia.org/wiki/Uto_Ughi",
      "https://en.wikipedia.org/wiki/List_of_child_prodigies",
      "https://en.wikipedia.org/wiki/John_von_Neumann",
      "https://en.wikipedia.org/wiki/Cuthbert_Hurd",
      "https://en.wikipedia.org/wiki/Absent-minded_professor",
      "https://en.wikipedia.org/wiki/Angie_Dickinson",
      "https://en.wikipedia.org/wiki/Kanzi",
      "https://en.wikipedia.org/wiki/They_Shall_Not_Grow_Old",
      "https://en.wikipedia.org/wiki/Liver_bird",
      "https://en.wikipedia.org/wiki/Hasselblad",
      "https://en.wikipedia.org/wiki/John_McVay",
      "https://en.wikipedia.org/wiki/Canary_trap",
      "https://en.wikipedia.org/wiki/Brown-headed_cowbird",
      "https://en.wikipedia.org/wiki/Nujabes",
      "https://en.wikipedia.org/wiki/The_Little_Match_Girl",
      "https://en.wikipedia.org/wiki/Kashmiri_Pandits",
      "https://en.wikipedia.org/wiki/Ishi",
      "https://en.wikipedia.org/wiki/Leslie_Caron",
      "https://en.wikipedia.org/wiki/Colugo",
      "https://en.wikipedia.org/wiki/Jack_Roush",
      "https://en.wikipedia.org/wiki/Buster_Keaton",
      "https://en.wikipedia.org/wiki/Nina_Cried_Power",
      "https://en.wikipedia.org/wiki/Musixmatch",
      "https://en.wikipedia.org/wiki/Paul_Farmer",
      "https://en.wikipedia.org/wiki/2021%E2%80%932022_Russo-Ukrainian_crisis",
      "https://en.wikipedia.org/wiki/Road_of_Life",
      "https://en.wikipedia.org/wiki/Siege_of_Leningrad",
      "https://en.wikipedia.org/wiki/A_La_Vieille_Russie",
      "https://en.wikipedia.org/wiki/The_World_as_Will_and_Representation",
      "https://en.wikipedia.org/wiki/The_Birth_of_Tragedy",
      "https://en.wikipedia.org/wiki/Stack_trace",
      "https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",
      "https://en.wikipedia.org/wiki/Maurice_Wilkes",
      "https://en.wikipedia.org/wiki/Software_as_a_service",
      "https://en.wikipedia.org/wiki/Firebase",
      "https://en.wikipedia.org/wiki/Raster_graphics",
      "https://en.wikipedia.org/wiki/QR_code",
      "https://en.wikipedia.org/wiki/Kentaro_Miura",
      "https://en.wikipedia.org/wiki/Klaus_Barbie",
      "https://en.wikipedia.org/wiki/La_Jument",
      "https://en.wikipedia.org/wiki/Onan",
      "https://en.wikipedia.org/wiki/Roxane_Gay",
      "https://en.wikipedia.org/wiki/Bell_hooks",
      "https://en.wikipedia.org/wiki/Pankration",
      "https://en.wikipedia.org/wiki/John_Carmack",
      "https://en.wikipedia.org/wiki/Apaches_(subculture)",
      "https://en.wikipedia.org/wiki/Nitram",
      "https://en.wikipedia.org/wiki/Haute_couture",
      "https://en.wikipedia.org/wiki/Blue_Velvet_(song)",
      "https://en.wikipedia.org/wiki/Pygmy_marmoset",
      "https://en.wikipedia.org/wiki/South_Pacific_(musical)",
      "https://en.wikipedia.org/wiki/Gene_Kelly",
      "https://en.wikipedia.org/wiki/Fred_Astaire",
      "https://en.wikipedia.org/wiki/Katherine_Dunham",
      "https://en.wikipedia.org/wiki/Guan_Yu",
      "https://en.wikipedia.org/wiki/John_Galliano",
      "https://en.wikipedia.org/wiki/Fethiye",
      "https://en.wikipedia.org/wiki/Cass_Elliot",
      "https://en.wikipedia.org/wiki/Ship_of_Theseus",
      "https://en.wikipedia.org/wiki/Stable_marriage_problem",
      "https://en.wikipedia.org/wiki/Peter_Bogdanovich",
      "https://en.wikipedia.org/wiki/Jack_Johnson_(boxer)",
      "https://en.wikipedia.org/wiki/Ronald_Colman",
      "https://en.wikipedia.org/wiki/John_L._Sullivan",
      "https://en.wikipedia.org/wiki/James_J._Jeffries",
      "https://en.wikipedia.org/wiki/Doner_kebab",
      "https://en.wikipedia.org/wiki/Calque",
      "https://en.wikipedia.org/wiki/Melun_Diptych",
      "https://en.wikipedia.org/wiki/Tito_Puente",
      "https://en.wikipedia.org/wiki/Tommy_Tune",
      "https://en.wikipedia.org/wiki/Giacomo_Puccini",
      "https://en.wikipedia.org/wiki/Bohemianism",
      "https://en.wikipedia.org/wiki/W._C._Fields",
      "https://en.wikipedia.org/wiki/My_Little_Chickadee",
      "https://en.wikipedia.org/wiki/Pelon_Pelo_Rico",
      "https://en.wikipedia.org/wiki/The_Hershey_Company",
      "https://en.wikipedia.org/wiki/Jerry_Lawson_(engineer)",
      "https://en.m.wikipedia.org/wiki/Ghana_(chocolate_bar)",
      "https://en.wikipedia.org/wiki/Surimi",
      "https://en.wikipedia.org/wiki/Damocles",
      "https://en.wikipedia.org/wiki/Wayback_Machine",
      "https://en.wikipedia.org/wiki/Carl_Jung",
      "https://en.wikipedia.org/wiki/Hermann_Hesse",
      "https://en.wikipedia.org/wiki/Pottsville_Maroons",
      "https://en.wikipedia.org/wiki/Bread",
      "https://en.wikipedia.org/wiki/Workhouse",
      "https://en.wikipedia.org/wiki/Call_the_Midwife_(book)",
      "https://en.wikipedia.org/wiki/Vidal_Sassoon",
      "https://en.wikipedia.org/wiki/No%C3%ABl_Coward",
      "https://en.wikipedia.org/wiki/Willem_Einthoven",
      "https://en.wikipedia.org/wiki/Dominique_Jean_Larrey",
      "https://en.wikipedia.org/wiki/Cal_Ripken_Jr.",
      "https://en.wikipedia.org/wiki/Attica_Prison_riot",
      "https://en.wikipedia.org/wiki/Lenny_Bruce",
      "https://en.wikipedia.org/wiki/The_General_(1926_film)",
      "https://en.wikipedia.org/wiki/Split-flap_display",
      "https://en.wikipedia.org/wiki/Bleacher_Creatures",
      "https://en.wikipedia.org/wiki/Theda_Bara",
      "https://en.wikipedia.org/wiki/Wallace_Reid",
      "https://en.wikipedia.org/wiki/Buddy_Ebsen",
      "https://en.wikipedia.org/wiki/Pipe_cleaner",
      "https://en.wikipedia.org/wiki/Victor_Lustig",
      "https://en.wikipedia.org/wiki/Witching_hour",
      "https://en.wikipedia.org/wiki/William_Clay_Ford_Sr.",
      "https://en.wikipedia.org/wiki/Edsel_Ford",
      "https://en.wikipedia.org/wiki/Henry_Ford",
      "https://en.wikipedia.org/wiki/Waldorf_Astoria_New_York",
      "https://en.wikipedia.org/wiki/Johannes_Brahms",
      "https://en.wikipedia.org/wiki/Mixin",
      "https://en.wikipedia.org/wiki/Jean_Moulin",
      "https://en.wikipedia.org/wiki/Alexis_Soyer",
      "https://en.wikipedia.org/wiki/Delimiter",
      "https://en.wikipedia.org/wiki/I_Love_to_Singa",
      "https://en.wikipedia.org/wiki/The_Singing_Kid",
      "https://en.wikipedia.org/wiki/Potoo",
    ];

    function handleClick() {
      const randomIndex = Math.floor(Math.random() * links.length);
      const randomLink = links[randomIndex];
      window.open(randomLink, "_blank");
    }

    return (
      <div className="center">
        →
        <button onClick={handleClick} className="wikiButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="wikiHover"
          >
            <path
              fill="#CFD8DC"
              d="M6 10a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V10z"
              className="colorChange"
            />
            <path
              fill="#37474F"
              d="M39 17.271a.342.342 0 0 1-.334.349h-1.799l-8.164 18.179c-.052.12-.17.2-.297.202h-.004a.33.33 0 0 1-.298-.193l-3.874-8.039l-4.18 8.049a.333.333 0 0 1-.303.184a.336.336 0 0 1-.292-.199l-8.252-18.182h-1.87a.345.345 0 0 1-.333-.35v-.921a.34.34 0 0 1 .333-.35h6.657a.34.34 0 0 1 .333.35v.921a.342.342 0 0 1-.333.349h-1.433l5.696 13.748l2.964-5.793l-3.757-7.953h-.904a.342.342 0 0 1-.333-.35v-.922c0-.191.149-.348.333-.348h4.924a.34.34 0 0 1 .333.348v.922c0 .192-.149.35-.333.35h-.867l2.162 4.948l2.572-4.948H25.77a.34.34 0 0 1-.334-.35v-.922a.34.34 0 0 1 .334-.348h4.784c.187 0 .333.156.333.348v.922a.34.34 0 0 1-.333.35h-1.05l-3.757 7.141l3.063 6.584l5.905-13.725h-1.872a.343.343 0 0 1-.334-.35v-.922c0-.191.15-.348.334-.348h5.822a.34.34 0 0 1 .334.348v.921z"
            />
          </svg>
        </button>
        ←
      </div>
    );
  }

  return (
    <div>
      <div>
        <section className="nameAnimationFullscreen">
          <NameAnimation />
        </section>
      </div>
      <section>
        <img className="example-block" src={welcome} />
      </section>
      <div>
        <section className="center aboutMe rainbowContainer montserrat">
          Harrison Katapodis <br className="center"></br>Software engineer{" "}
          <br className="center"></br>This is my origin story:
          <br className="center"></br>*cue dramatic music*
        </section>
      </div>
      <section className="easy-grid">
        <div className="example-blockmini">
          <img src={before} />
        </div>
        <div className="example-blockmini">
          <img src={after} />
        </div>
      </section>
      <div className="aboutMeContainer">
        <section className="aboutMe rainbowContainer montserrat">
          <p className="center italic">*The End*</p>
          <p>
            Yes, this comic strip could have been a little longer—but, alas, I
            am not much of an animator, as my expertly drawn stick figures might
            have led you to believe.
          </p>
          <p>
            As a software engineer, creating this website allowed me to explore
            a variety of passions, including:
          </p>
          <ul>
            <li>
              🤣 <strong>Comedy</strong>
            </li>
            <li>
              🧩 <strong>Problem-solving</strong>
            </li>
            <li>
              👨‍💻 <strong>Design</strong>
            </li>
            <li>
              🎭 <strong>Storytelling (just to name a few).</strong>
            </li>
          </ul>
          <p>
            This project became a microcosm of why I fell in love with software
            development:
          </p>
          <blockquote className="memorable">
            <p>
              {" "}
              The ability to <strong>creatively solve problems</strong> with
              just a computer, the internet, and the drive to create{" "}
              <strong>meaningful positive change in the world</strong> that's{" "}
              <strong>uniquely you</strong>.
            </p>
          </blockquote>
          <p>
            Hopefully this gave you glimpse into who I am, I’d love to chat if
            you have any follow-up questions.
          </p>
          <p>
            Check out some of my favorite projects{" "}
            <Link to="/portfolio">here!</Link>
          </p>
        </section>
      </div>
      <div className="aboutMeContainer ">
        <section className="aboutMe rainbowContainer montserrat" id="marginCut">
          <h1 className="noMargin">
            <mark className="highlight">Highlights</mark>
          </h1>
          <li className="space">
            Graduate of <mark className="highlight">Cornell University</mark>{" "}
            and Fullstack Academy
          </li>
          <li>
            <mark className="highlight">PERN</mark> Stack-educated (learning
            Python)
          </li>
          <li>
            Passionate about helping others and making the world a better place
          </li>
          <li>Lifelong learner continually striving to grow and improve</li>

          <div className="montserrat center botPadding">
            Wikipedia button (Some of my favorites!)
          </div>
          <div className="center">
            <WikipediaButton />
          </div>
        </section>
      </div>
    </div>
  );
}
