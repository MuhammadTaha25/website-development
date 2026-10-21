// Single source of truth for practice identity, contact info, and hours.
// Every component reads from here — never hardcode phone/address/name elsewhere.

export type DayHours = { day: string; open: string; close: string } | { day: string; closed: true };

export const siteConfig = {
  practiceName: process.env.NEXT_PUBLIC_PRACTICE_NAME || "Bright Smile Dental",
  tagline: "Gentle, modern dentistry for your whole family.",

  phone: {
    display: process.env.NEXT_PUBLIC_PRACTICE_PHONE || "(512) 555-0142",
    // E.164 format for tel: links and schema.org
    raw: process.env.NEXT_PUBLIC_PRACTICE_PHONE_RAW || "+15125550142",
  },

  email: process.env.NEXT_PUBLIC_PRACTICE_EMAIL || "hello@brightsmiledental.example",

  address: {
    street: process.env.NEXT_PUBLIC_PRACTICE_ADDRESS_STREET || "4820 Bluebonnet Lane, Suite 200",
    city: process.env.NEXT_PUBLIC_PRACTICE_ADDRESS_CITY || "Austin",
    state: process.env.NEXT_PUBLIC_PRACTICE_ADDRESS_STATE || "TX",
    zip: process.env.NEXT_PUBLIC_PRACTICE_ADDRESS_ZIP || "78745",
    get full() {
      return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    },
  },

  geo: {
    // TODO: replace with real coordinates from Google Maps before launch.
    latitude: 30.2672,
    longitude: -97.7431,
  },

  hours: [
    { day: "Monday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "3:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "1:00 PM" },
    { day: "Sunday", closed: true },
  ] as DayHours[],

  social: {
    facebook: "https://www.facebook.com/brightsmiledental",
    instagram: "https://www.instagram.com/brightsmiledental",
  },

  booking: {
    // API route target (client POSTs here); the route itself forwards to this destination.
    leadDestination: process.env.BOOKING_LEAD_DESTINATION || "",
  },

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.brightsmiledental.example",

  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    readToken: process.env.SANITY_API_READ_TOKEN || "",
  },

  analytics: {
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
    callRailSwapId: process.env.NEXT_PUBLIC_CALLRAIL_SWAP_ID || "",
  },

  googlePlaces: {
    apiKey: process.env.GOOGLE_PLACES_API_KEY || "",
    placeId: process.env.GOOGLE_PLACES_ID || "",
  },

  emergencyCity: "Austin",
} as const;
