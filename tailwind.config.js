/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Enable dark mode using the class strategy
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: '#875bf9', // Primary base color
			600: '#6b45d6',     // Added shades for primary
			700: '#5534b3',     // Another shade for primary
			foreground: 'hsl(var(--primary-foreground))', // Dynamic color for text
		  },
		  secondary: {
			DEFAULT: '#ee46bd', // Secondary color
			foreground: 'hsl(var(--secondary-foreground))', // Secondary foreground
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))', // Border color
		  input: 'hsl(var(--input))',   // Input color
		  ring: 'hsl(var(--ring))',     // Ring color for focus states
		  chart: {
			1: 'hsl(var(--chart-1))',
			2: 'hsl(var(--chart-2))',
			3: 'hsl(var(--chart-3))',
			4: 'hsl(var(--chart-4))',
			5: 'hsl(var(--chart-5))',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',            // Larger border radius
		  md: 'calc(var(--radius) - 2px)', // Medium border radius
		  sm: 'calc(var(--radius) - 4px)', // Small border radius
		},
	  },
	},
	plugins: [require("tailwindcss-animate")], // Plugin for animations
  };
  