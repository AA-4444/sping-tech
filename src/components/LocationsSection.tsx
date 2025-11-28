import GlobeScene from "@/components/GlobeScene";
import { MapPin } from "lucide-react";

type LocationInfo = {
  city: string;
  country: string;
  address: string;
  lat: number;
  lng: number;
};

const locations: LocationInfo[] = [
  {
	city: "Limassol",
	country: "Cyprus",
	address: "Contact us",
	lat: 34.7071,
	lng: 33.0226,
  },
  {
	city: "Warszawa",
	country: "Poland",
	address: "Contact us",
	lat: 52.2297,
	lng: 21.0122,
  },
  {
	city: "Miami",
	country: "USA",
	address: "-",
	lat: 25.7617,
	lng: -80.1918,
  },
];

const LocationsSection = () => {
  return (
	<section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden border-t border-border/60">
	  {/* мягкий фон */}
	  <div className="pointer-events-none absolute inset-0 opacity-40">
		<div className="absolute -top-24 left-0 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
		<div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold/12 blur-3xl" />
	  </div>

	  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
		{/* заголовок */}
		<div className="max-w-3xl mb-8 sm:mb-10">
		  <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1 text-xs sm:text-sm uppercase tracking-[0.25em] text-primary">
			Locations
		  </p>

		  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
			Let&apos;s meet <span className="text-primary">offline</span>
		  </h2>

		  <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl">
			We work remotely, but you can always catch us in person in a few hubs
			across Europe. Conferences, workshops or a quick coffee.
		  </p>
		</div>

		{/* Планета + карточки */}
		<div className="relative max-w-6xl mx-auto">
		  <div className="relative mt-4 sm:mt-6">
			<GlobeScene
			  locations={locations.map((loc) => ({
				lat: loc.lat,
				lng: loc.lng,
			  }))}
			/>
		  </div>

		  {/* Карточки */}
		  <div className="pointer-events-none absolute inset-x-4 sm:inset-x-6 -bottom-14 sm:-bottom-16">
			<div className="pointer-events-auto">
			  {/* 
				На мобиле: горизонтальный скролл
				На md+: обычная сетка 3 колонки
			  */}
			  <div
				className="
				  flex md:grid md:grid-cols-3
				  gap-4 sm:gap-5 md:gap-6
				  overflow-x-auto md:overflow-visible
				  scrollbar-thin scrollbar-thumb-border/60 scrollbar-track-transparent
				"
			  >
				{locations.map((loc) => (
				  <div
					key={loc.city}
					className="
					  rounded-2xl
					  border border-primary/40     
					  bg-background/95 
					  backdrop-blur-sm
					  px-6 py-6 sm:px-7 sm:py-7 
					  shadow-[0_18px_45px_rgba(0,0,0,0.65)]
					  min-h-[150px] sm:min-h-[170px]
					  min-w-[240px] sm:min-w-[260px] md:min-w-0
					  flex-shrink-0 md:flex-shrink
					"
				  >
					<div className="flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] text-primary mb-3">
					  <MapPin className="h-4 w-4 text-primary" />
					  <span>{loc.city}</span>
					</div>

					<div className="text-lg sm:text-xl font-semibold text-foreground">
					  {loc.country}
					</div>

					<div className="mt-1 text-sm sm:text-base text-muted-foreground">
					  {loc.address}
					</div>
				  </div>
				))}
			  </div>
			</div>
		  </div>
		</div>

		{/* отступ под карточки */}
		<div className="h-32 sm:h-36 lg:h-40" />
	  </div>
	</section>
  );
};

export default LocationsSection;