'use client'
import { ReactNode, useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'
import { cn } from '../utils/utils'

interface WavyBackgroundProps {
	children?: ReactNode
	className?: string
	containerClassName?: string
	colors?: string[]
	waveWidth?: number
	backgroundFill?: string
	blur?: number
	speed?: 'slow' | 'fast'
	waveOpacity?: number
	[key: string]: unknown
}
export const WavyBackground = ({
	children,
	className,
	containerClassName,
	colors,
	waveWidth,
	backgroundFill,
	blur = 10,
	speed = 'fast',
	waveOpacity = 0.5,
	...props
}: WavyBackgroundProps) => {
	const noise = createNoise3D()
	let w: number,
		h: number,
		nt: number,
		i: number,
		x: number,
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const getSpeed = () => {
		switch (speed) {
			case 'slow':
				return 0.001
			case 'fast':
				return 0.002
			default:
				return 0.001
		}
	}

	const init = () => {
		if (!canvasRef.current) return
		canvas = canvasRef.current

		const _ctx = canvas.getContext('2d')
		if (!_ctx) return
		ctx = _ctx

		w = ctx.canvas.width = window.innerWidth
		h = ctx.canvas.height = window.innerHeight
		ctx.filter = `blur(${blur}px)`
		nt = 0
		window.onresize = function () {
			w = ctx.canvas.width = window.innerWidth
			h = ctx.canvas.height = window.innerHeight
			ctx.filter = `blur(${blur}px)`
		}
		render()
	}

	const waveColors = colors ?? [
		'#38bdf8',
		'#818cf8',
		'#c084fc',
		'#e879f9',
		'#22d3ee',
	]
	const drawWave = (n: number) => {
		nt += getSpeed()
		for (i = 0; i < n; i++) {
			ctx.beginPath()
			ctx.lineWidth = waveWidth || 50
			ctx.strokeStyle = waveColors[i % waveColors.length]
			for (x = 0; x < w; x += 5) {
				const y = noise(x / 800, 2 * i, nt) * 150
				ctx.lineTo(x, y + h * 0.7) // adjust for height, currently at 50% of the container
			}
			ctx.stroke()
			ctx.closePath()
		}
	}

	let animationId: number
	const render = () => {
		ctx.fillStyle = backgroundFill || 'black'
		ctx.globalAlpha = waveOpacity || 0.5
		ctx.fillRect(0, 0, w, h)
		drawWave(3)
		animationId = requestAnimationFrame(render)
	}

	useEffect(() => {
		init()
		return () => {
			cancelAnimationFrame(animationId)
		}
	}, [])

	return (
		<div
			className={cn(
				'h-screen flex flex-col items-center justify-center -z-40',
				containerClassName,
			)}
		>
			<canvas
				className="absolute inset-0 z-0"
				ref={canvasRef}
				id="canvas"
			></canvas>
			<div className={cn('relative z-10', className)} {...props}>
				{children}
			</div>
		</div>
	)
}
