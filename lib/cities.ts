export type City = {
  slug: string;
  name: string;
  /** Short tagline used on listings and the city hero */
  blurb: string;
  /** Longer paragraph shown on the city page */
  longDesc?: string;
  /** "What we see in {city}" — common local plumbing/heating issues we encounter */
  commonIssues?: string[];
  /** Local context — neighbourhoods, housing stock, geography that affects plumbing */
  localNotes?: string;
  neighbourhoods?: string[];
};

export const CITIES: City[] = [
  {
    slug: "st-catharines",
    name: "St. Catharines",
    blurb:
      "The Garden City's go-to plumbing and heating crew — from Port Dalhousie waterfront homes to downtown businesses, we keep things flowing.",
    longDesc:
      "St. Catharines is one of our busiest service areas — a mix of century homes near downtown and Old Glenridge, post-war stock through Western Hill and Merritton, lakeside properties in Port Dalhousie, and modern subdivisions out toward the QEW. That variety means we see everything from galvanized supply lines and clay sewer laterals in older streets to PEX manifolds and tankless conversions in newer builds. Whatever's behind your wall, we've worked on it. We offer same-day plumbing service in St. Catharines for most calls, and 24/7 emergency plumbing response for active leaks, sewage backups, burst pipes, and no-heat situations. If you're searching for an emergency plumber in St. Catharines right now, call 289-488-1007 — we answer every hour of every day and dispatch a local technician, not a call-centre referral. Our team knows St. Catharines plumbing inside out — the hard water that destroys water heaters in 8 years instead of 12, the clay sewer laterals on Facer and Merritton streets that fill with roots every spring, the aging cast-iron stacks in century homes near downtown that need camera-scoping before any renovation. We also handle drain cleaning in St. Catharines, water heater repair and replacement, sump pump installation, backwater valve installation, and full bathroom and kitchen plumbing for renovations. Every job comes with upfront pricing, a licensed tech, and a written warranty.",
    commonIssues: [
      "Tree-root intrusion in clay sewer laterals (older neighbourhoods)",
      "Hard-water scale on water heaters and tankless coils",
      "Spring sump-pump failures near the waterfront and 12 Mile Creek",
      "Aging cast-iron drain stacks in century homes",
      "Frozen exterior hose bibs after fast cold snaps off the lake",
      "Sewer backups on older Facer, Merritton, and Western Hill streets",
      "Emergency plumbing calls during lake-effect storms and hard freezes",
    ],
    localNotes:
      "Lake-effect weather and an older housing core make annual furnace tune-ups and sump-pump testing especially worthwhile here. St. Catharines also has some of the hardest municipal water in Niagara — a water softener pays for itself quickly.",
    neighbourhoods: ["Port Dalhousie", "Downtown", "Glenridge", "Western Hill", "Merritton", "Grantham", "Facer"],
  },
  {
    slug: "niagara-falls",
    name: "Niagara Falls",
    blurb:
      "Fast, dependable service across Niagara Falls — from Stamford and Chippawa to the tourist district. Residential and commercial, 24/7.",
    longDesc:
      "Niagara Falls is split between dense residential areas (Stamford, Drummondville, Mount Carmel), the lower-density river-side neighbourhood of Chippawa, and a heavy commercial corridor through the tourist district. We work all of it — from a leaking baseboard heater in a 1960s Stamford bungalow to backflow certification on a Clifton Hill restaurant to emergency drain service for hotels and motels along Lundy's Lane. We provide 24/7 emergency plumbing in Niagara Falls — a real local tech answers every call, every hour. If you need an emergency plumber in Niagara Falls right now, call 289-488-1007. We also offer same-day plumbing service for non-emergency calls, water heater repair and replacement, drain cleaning and sewer camera inspection, sump pump installation, furnace repair and replacement, and full residential and commercial plumbing across Niagara Falls. The tourist district adds a unique layer of after-hours commercial demand — restaurants, hotels, and hospitality businesses that can't afford to be down. We understand that urgency and schedule commercial service around your operation, not ours.",
    commonIssues: [
      "Commercial backflow & grease-trap maintenance for restaurants and hotels",
      "Aging cast-iron stacks in older Stamford and Drummondville homes",
      "Sump pump and basement waterproofing near the river in Chippawa",
      "Hard-water-related water heater failures",
      "After-hours emergency service for tourist-district businesses",
      "Emergency plumber calls during peak tourist season",
      "Water heater repair for high-demand hospitality properties",
    ],
    localNotes:
      "We schedule commercial work around peak tourist season and run after-hours rotations for hospitality clients along Lundy's Lane and Clifton Hill. Emergency plumbing in Niagara Falls is available 24/7 — call 289-488-1007.",
    neighbourhoods: ["Stamford", "Chippawa", "Mount Carmel", "Drummondville", "Lundy's Lane", "Clifton Hill"],
  },
  {
    slug: "welland",
    name: "Welland",
    blurb:
      "Proudly headquartered nearby — Welland is home turf. Same-day service for plumbing, heating, water heaters, and emergencies.",
    longDesc:
      "Welland is home base. Our shop is at 187 King St, which means most Welland calls get the fastest dispatch in the network — same-day for almost everything, often within a couple of hours. We work every neighbourhood: the older brick homes through Crowland and the canal area, the post-war stock in North Welland, and the newer family subdivisions out in Cooks Mills and Dain City. As Welland's most local plumber, we take emergency calls in Welland 24 hours a day, 7 days a week — including holidays. Burst pipe at 2am on a Saturday? That's what 289-488-1007 is for. We also handle the full range of Welland plumbing services: drain cleaning and sewer camera inspection, water heater installation and repair (tank and tankless), sump pump installation and battery backup, backwater valve installation for basement flood protection, furnace and boiler service, and full residential and commercial plumbing. Welland's canal-area properties and low-lying lots are high-risk for basement flooding — we've installed more sump pumps in Welland than anywhere else in Niagara. Hard water from the municipal supply is also particularly aggressive here, shortening water heater lifespans significantly. We know Welland's plumbing challenges because we live and work here.",
    commonIssues: [
      "Sump pump and weeping-tile issues in low-lying areas near the canal",
      "Aging supply lines (galvanized & lead) in older Crowland & downtown homes",
      "Sewer-lateral root intrusion in mature streets",
      "Frozen pipes in uninsulated additions and crawlspaces",
      "End-of-life water heaters in 1990s–2000s housing stock",
      "Basement flooding from overwhelmed sump systems in spring",
      "Emergency plumbing during canal-area storms and spring melt",
    ],
    localNotes:
      "Canal-area properties and low-lying lots make battery-backup sump pumps a near-must — we've seen way too many basement floods after summer downpours. We're the fastest responders in Welland because this is home.",
    neighbourhoods: ["Dain City", "North Welland", "Crowland", "Cooks Mills", "Downtown Welland"],
  },
  {
    slug: "thorold",
    name: "Thorold",
    blurb:
      "From Allanburg to Port Robinson — full-service plumbing and heating for Thorold homes and businesses, including the locks community.",
    longDesc:
      "Thorold runs the gamut from older homes near downtown and the locks to newer family subdivisions on the south side and rural properties out toward Port Robinson and Allanburg. Brock University rentals add a layer of property-management work, and we handle that too — fast turnover plumbing repairs, water heater swaps between leases, and quick-response calls for landlords. We provide 24/7 emergency plumbing in Thorold — call 289-488-1007 any hour for burst pipes, sewage backups, no heat, or any active plumbing emergency. Same-day service is available for most non-emergency plumbing and heating calls in Thorold. We handle drain cleaning, sewer camera inspection, sump pump installation, water heater repair and replacement, furnace service, and full residential plumbing across every Thorold neighbourhood.",
    commonIssues: [
      "Drain backups in student rental properties",
      "Older cast-iron stacks needing partial or full replacement",
      "Sump pump failures in low-lying south-side properties",
      "Furnace tune-ups before each heating season",
      "Tankless water heater installs in newer subdivisions",
    ],
    localNotes:
      "We work closely with Thorold landlords and property managers — fast response between tenants is what keeps your rental schedule on track.",
    neighbourhoods: ["Allanburg", "Port Robinson", "Confederation Heights", "Downtown Thorold", "Rolling Meadows"],
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    blurb:
      "Beamsville, Vineland, Jordan — wine country deserves wine-country water pressure. Local plumbing and heating you can trust.",
    longDesc:
      "Lincoln stretches from the lakeshore through Beamsville, Vineland, and Jordan up to the escarpment, and we cover it all — including a fair bit of agricultural and winery work alongside residential. Older farmhouses, vineyard properties, modern subdivisions in Beamsville, and rural homes on wells: we've worked on every variation Lincoln has to offer.",
    commonIssues: [
      "Well-pump troubleshooting and pressure-tank replacement on rural lots",
      "Hard-water and iron staining requiring proper filtration",
      "Hot water demand for vineyard and agritourism operations",
      "Frozen exterior lines on older farmhouse plumbing",
      "Boiler service for heritage homes with cast-iron radiators",
    ],
    localNotes:
      "Wells, hard water, and older farmhouse plumbing are the Lincoln trifecta — water filtration and proper pressure systems make a huge quality-of-life difference.",
    neighbourhoods: ["Beamsville", "Vineland", "Jordan", "Campden", "Tintern"],
  },
  {
    slug: "grimsby",
    name: "Grimsby",
    blurb:
      "From the lakeshore to the escarpment, Grimsby families count on us for reliable plumbing, heating, and emergency service.",
    longDesc:
      "Grimsby has grown fast — newer subdivisions toward Casablanca and Winona Park, established neighbourhoods through the centre of town, and beach-area properties along the lake. We service the whole footprint, from emergency calls on a Saturday evening to planned water-heater replacements in newer builds and full bathroom renos in heritage homes.",
    commonIssues: [
      "Tankless and high-efficiency water heater installs in newer builds",
      "Sump pump and storm drainage near the lakeshore",
      "Furnace and boiler service for the older centre-of-town stock",
      "Smart thermostat upgrades and zoning",
      "Backflow installation for new commercial construction",
    ],
    localNotes:
      "Newer Grimsby neighbourhoods are great candidates for tankless conversions and smart-zoning upgrades — the existing infrastructure usually supports it without major retrofits.",
    neighbourhoods: ["Grimsby Beach", "Winona Park", "Casablanca", "Downtown Grimsby"],
  },
  {
    slug: "pelham",
    name: "Pelham",
    blurb:
      "Fonthill, Fenwick, Ridgeville — quiet streets, big trees, and trusted local plumbing & heating service when you need it.",
    longDesc:
      "Pelham covers Fonthill, Fenwick, Ridgeville, and the rural pockets around them — a mix of established family homes, newer custom builds on larger lots, and rural properties on wells and septic. Big trees mean root issues in older sewer laterals; larger lots mean we plan for travel and bring the right tools the first time. We provide 24/7 emergency plumbing in Pelham and Fonthill — call 289-488-1007 any hour. Same-day service is available for most plumbing and heating calls including furnace repair in Fonthill, drain cleaning, water heater repair, and sump pump installation. Fonthill furnace repair and heating service is a high-demand service in Pelham given the colder exposure on the Fonthill plateau — we aim to restore heat same-day on every no-heat call.",
    commonIssues: [
      "Tree-root intrusion in clay sewer lines (mature Fonthill streets)",
      "Well & septic system service on rural lots",
      "Whole-home water filtration for hard or iron-rich water",
      "High-end fixture installs in custom builds",
      "Boiler & radiant in-floor heating service",
    ],
    localNotes:
      "Rural wells, septic systems, and mature trees with aggressive roots are the three things we plan for in Pelham — and we usually bring the camera scope on the first visit.",
    neighbourhoods: ["Fonthill", "Fenwick", "Ridgeville", "North Pelham"],
  },
  {
    slug: "fort-erie",
    name: "Fort Erie",
    blurb:
      "From Crystal Beach cottages to Ridgeway and Stevensville — full-service plumbing and heating across Fort Erie, year-round.",
    longDesc:
      "Fort Erie has its own personality — Crystal Beach cottages and seasonal homes, the established neighbourhoods of Ridgeway and Bridgeburg, rural properties out toward Stevensville, and a busy border-town commercial strip. We handle the seasonal work (winterizations, spring re-openings, frozen-line repairs) along with the year-round residential and commercial calls. We offer 24/7 emergency plumbing in Fort Erie — call 289-488-1007 any time for burst pipes, sewage backups, frozen lines, or no-heat emergencies. Same-day service is available for non-emergency plumbing calls including drain cleaning in Fort Erie, water heater repair, sump pump installation, furnace repair, and full residential plumbing. Fort Erie furnace repair is one of our most common calls in winter — we carry common parts on the truck and aim to restore heat on the first visit.",
    commonIssues: [
      "Cottage winterizations and spring re-openings (Crystal Beach)",
      "Frozen and burst pipes in seasonally-occupied homes",
      "Sump pump installs for lakeside and low-lying properties",
      "Older cast-iron drain replacement in Bridgeburg",
      "Well-pump service on rural Stevensville properties",
    ],
    localNotes:
      "If you own a Crystal Beach cottage, get the winterization scheduled before mid-October — we book up fast as soon as the temperature drops.",
    neighbourhoods: ["Crystal Beach", "Ridgeway", "Stevensville", "Bridgeburg", "Black Creek"],
  },
  {
    slug: "port-colborne",
    name: "Port Colborne",
    blurb:
      "Lakefront living means lakefront plumbing problems. We handle them all — sump pumps, water heaters, repairs, and full installs.",
    longDesc:
      "Port Colborne wraps around Lake Erie and the southern end of the Welland Canal, and lakefront properties bring their own set of plumbing realities — high water tables, storm-driven sump duty, and seasonal cottages that need careful winterization. We service the whole city, from Sherkston cottages to the established homes along the canal to the newer builds in Humberstone. We provide 24/7 emergency plumbing in Port Colborne — call 289-488-1007 for burst pipes, sump pump failures, sewage backups, or any active emergency. Same-day service is available for most plumbing and heating calls including drain cleaning in Port Colborne, water heater repair, sump pump installation, and furnace service. Port Colborne furnace repair is a priority service in winter — we carry common parts on the truck for same-visit repairs.",
    commonIssues: [
      "Sump pumps & battery backups for lakefront properties",
      "Cottage winterizations in Sherkston and Cedar Bay",
      "Hard-water water heater scaling",
      "Older home sewer-lateral inspections",
      "Frozen line repairs after fast lake-effect cold snaps",
    ],
    localNotes:
      "If you're on the lakeshore, a properly-spec'd sump pump with battery backup is the single best thing you can do for your basement.",
    neighbourhoods: ["Sherkston", "Humberstone", "Cedar Bay", "Downtown Port Colborne"],
  },
  {
    slug: "niagara-on-the-lake",
    name: "Niagara-on-the-Lake",
    blurb:
      "Heritage homes, modern wineries, B&Bs and family residences — discreet, professional plumbing and heating in NOTL.",
    longDesc:
      "Niagara-on-the-Lake is a careful mix of heritage homes in Old Town, established residential through Virgil and St. Davids, modern subdivisions near Glendale, and a steady year-round flow of winery, restaurant, and B&B work. Heritage properties demand a careful hand — original plaster, refinished hardwood, and historical fixtures don't tolerate sloppy work.",
    commonIssues: [
      "Heritage-home plumbing upgrades (sympathetic to original finishes)",
      "B&B and short-term rental hot water capacity",
      "Boiler service for cast-iron radiator systems",
      "Backflow & commercial fixture work for wineries and restaurants",
      "Frozen lines in older Old Town homes",
    ],
    localNotes:
      "We treat NOTL heritage homes like museums — drop cloths, careful protection, and minimal disruption. Original finishes deserve it.",
    neighbourhoods: ["Old Town", "Virgil", "St. Davids", "Queenston", "Glendale"],
  },
  {
    slug: "west-lincoln",
    name: "West Lincoln",
    blurb:
      "Smithville, Caistor Centre, Wellandport — rural service done right. Well systems, heating, water heaters and emergency repair.",
    longDesc:
      "West Lincoln is rural Niagara — Smithville, Caistor Centre, Wellandport, and the smaller hamlets between. Most properties run on wells and septic, and that asks for a different skillset than city plumbing. We handle well-pump replacements, pressure-tank work, water filtration for iron and tannins, and full residential plumbing & heating service for the whole township.",
    commonIssues: [
      "Well pumps, jet pumps, and pressure tank replacement",
      "Iron, sulphur, and hardness filtration",
      "Septic system pump service for indoor sewage ejector pits",
      "Furnace, boiler, and propane heating service",
      "Long-distance water-line repair on larger rural lots",
    ],
    localNotes:
      "Rural West Lincoln is well-and-septic country — proper filtration and a reliable well pump make all the difference. We're set up for it.",
    neighbourhoods: ["Smithville", "Caistor Centre", "Wellandport", "Silverdale"],
  },
  {
    slug: "wainfleet",
    name: "Wainfleet",
    blurb:
      "Long Beach to Chambers Corners — country plumbing and heating service with city-grade quality and warranties.",
    longDesc:
      "Wainfleet is a quiet, mostly-rural township — Long Beach cottages along Lake Erie, Wainfleet Village in the centre, and rural properties scattered across the township. We bring city-grade quality, warranties, and licensed work to country properties, including well systems, septic ejectors, and lakeside sump pump installs.",
    commonIssues: [
      "Lake Erie cottage winterizations & spring re-openings",
      "Well pump and pressure tank service",
      "Sump pumps for low-lying lots and lakeshore properties",
      "Older home heating system service",
      "Long water-line runs from well to house",
    ],
    localNotes:
      "Long Beach cottage owners — book winterization in early fall. We get there, but earlier appointments mean better timing before the first hard freeze.",
    neighbourhoods: ["Long Beach", "Wainfleet Village", "Chambers Corners"],
  },
];
