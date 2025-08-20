import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				jetbrains: ['JetBrains Mono', 'monospace'],
				grotesk: ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				'border-light': 'hsl(var(--border-light))',
				'border-heavy': 'hsl(var(--border-heavy))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))',
					light: 'hsl(var(--primary-light))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))',
					glow: 'hsl(var(--tertiary-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
					glass: 'hsl(var(--muted-glass))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					glass: 'hsl(var(--card-glass))',
					elevated: 'hsl(var(--card-elevated))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					glow: 'hsl(var(--success-glow))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					glow: 'hsl(var(--warning-glow))'
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					glow: 'hsl(var(--info-glow))'
				},
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-tertiary': 'var(--gradient-tertiary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-glass-light': 'var(--gradient-glass-light)',
				'gradient-glass-strong': 'var(--gradient-glass-strong)',
				'gradient-mesh': 'var(--gradient-mesh)',
				'gradient-radial': 'var(--gradient-radial)',
				'gradient-aurora': 'var(--gradient-aurora)',
				'gradient-noise': 'var(--gradient-noise)',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'glow-strong': 'var(--shadow-glow-strong)',
				'glass': 'var(--shadow-glass)',
				'card': 'var(--shadow-card)',
				'elevated': 'var(--shadow-elevated)',
				'float': 'var(--shadow-float)',
				'neumorphism': 'var(--neumorphism-light)',
				'neumorphism-inset': 'var(--neumorphism-inset)',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'sharp': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'gentle': 'cubic-bezier(0.23, 1, 0.32, 1)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'xl': 'var(--radius-lg)',
				'2xl': 'var(--radius-xl)',
			},
			backdropBlur: {
				'xs': '2px',
				'4xl': '72px',
				'5xl': '96px',
			},
			scale: {
				'102': '1.02',
				'103': '1.03',
				'105': '1.05',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'100': '25rem',
				'128': '32rem',
			},
			zIndex: {
				'-10': '-10',
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// Advanced Animation Keyframes
				'float-up': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: 'var(--shadow-glow)' },
					'50%': { boxShadow: 'var(--shadow-glow-strong)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'ping-large': {
					'75%, 100%': { 
						transform: 'scale(3)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Enhanced Animations
				'float-up': 'float-up 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 8s linear infinite',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-down': 'slide-down 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'ping-large': 'ping-large 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
