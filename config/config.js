var config = {
	address: "0.0.0.0",
	ipWhitelist: [],
	port: 7777, // default

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert"
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timezone: "America/New_York"
			}
		},
		{
			module: "MMM-DisneyWaitTimes",
			header: "Magic Kingdom",
			position: "top_left",
			config: {
				park: {
					name: "Magic Kingdom",
					rides: [
						"\"it's a small world\"",
						"Big Thunder Mountain Railroad",
						"Buzz Lightyear's Space Ranger Spin",
						"Haunted Mansion",
						"Jungle Cruise",
						"Peter Pan's Flight",
						"Pirates of the Caribbean",
						"Space Mountain",
						"Splash Mountain",
						"The Many Adventures of Winnie the Pooh",
						"Tomorrowland Speedway",
						"Under the Sea ~ Journey of The Little Mermaid",
						"Seven Dwarfs Mine Train"
					],
					logRide: false
				}
			}
		},
		{
			module: "MMM-DisneyWaitTimes",
			header: "Epcot",
			position: "top_left",
			config: {
				park: {
					name: "Epcot",
					rides: [
						"Frozen Ever After",
						"Soarin' Around the World",
						"Spaceship Earth",
						"Test Track"
						//,"The Seas with Nemo & Friends"
						//,"Turtle Talk With Crush"
					],
					logRide: false
				}
			}
		},
		{
			module: "MMM-DisneyWaitTimes",
			header: "Hollywood Studios",
			position: "top_left",
			config: {
				park: {
					name: "Hollywood Studios",
					rides: [
						"Alien Swirling Saucers",
						"Millennium Falcon: Smugglers Run – Now Open!",
						"Rock 'n' Roller Coaster Starring Aerosmith",
						"Slinky Dog Dash",
						"Star Tours – The Adventures Continue",
						"The Twilight Zone Tower of Terror™",
						"Toy Story Mania!"
					],
					logRide: false
				}
			}
		},
		{
			module: "MMM-DisneyWaitTimes",
			header: "Animal Kingdom",
			position: "top_left",
			config: {
				park: {
					name: "Animal Kingdom",
					rides: [
						"Avatar Flight of Passage",
						"DINOSAUR",
						"Expedition Everest - Legend of the Forbidden Mountain",
						"Kali River Rapids",
						"Kilimanjaro Safaris",
						"Na'vi River Journey",
						"Primeval Whirl"
					],
					logRide: false
				}
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Narragansett Pier",
				locationID: "5223525",
				appid: "87e8af0c8be792ecd080d37f43f47833"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Narragansett Pier",
				locationID: "5223525",
				appid: "87e8af0c8be792ecd080d37f43f47833"
			}
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_right",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o",
						url:
              "https://calendar.google.com/calendar/ical/dennis.glasberg%40gmail.com/private-1a826cb603657462a4bb60ab27d8d6cf/basic.ics"
					},
					{
						symbol: "calendar-check-o",
						url:
              "https://calendar.google.com/calendar/ical/v1n4aeqo87jfadh0hjh0cjsjgk%40group.calendar.google.com/private-6f5bb4b8c32f89519d8e00d5b194b393/basic.ics"
					}
				]
			}
		},
		{
			module: "MMM-crypto-portfolio",
			position: "top_right",
			config: {
				currency: [
					{ name: "bitcoin", portf: 0.01181791 },
					{ name: "ethereum", portf: 0.10005298 },
					{ name: "litecoin", portf: 0.0000624103022592 },
					{ name: "verge", portf: 237.634331 },
					{ name: "vivo", portf: 4.6 },
					{ name: "zen", portf: 0.408 }
				],
				conversion: "USD",
				showPortfolio: false,
				showAssets: true,
				showAgainstBTC: false, // only used in detail view
				showTotalMarketCap: false, // only used in detail view
				showUSD: false,
				fontSize: "small",
				headers: ["change24h", "change1h", "change7d"],
				displayType: "detail", // or 'logoWithChanges',
				showGraphs: true,
				limit: 100 // increase if your coin doesn't appear ther are more then 1000
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
