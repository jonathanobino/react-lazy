import { act, cleanup, render, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { LazyImage } from './index'
import useIsInViewport from './useIsInViewport'

function createElement(top: number, left = 0) {
	const node = document.createElement('div')
	const measure = vi.spyOn(node, 'getBoundingClientRect')
	measure.mockReturnValue(new DOMRect(left, top, 10, 10))
	return { node, measure }
}

function nextFrame() {
	act(() => vi.advanceTimersToNextFrame())
}

describe('useIsInViewport', () => {
	beforeEach(() => {
		vi.useFakeTimers()
		vi.stubGlobal('innerHeight', 600)
		vi.stubGlobal('innerWidth', 800)
	})

	afterEach(() => {
		cleanup()
		// Let the shared animation loop stop after all instances unsubscribe.
		nextFrame()
		vi.useRealTimers()
		vi.restoreAllMocks()
		vi.unstubAllGlobals()
	})

	it('does not start the animation loop until an element is attached', () => {
		const requestFrame = vi.spyOn(window, 'requestAnimationFrame')
		const { result } = renderHook(() =>
			useIsInViewport({ link: '/image.png', offset: 100 }),
		)

		expect(result.current.slice(1)).toEqual(['', false])
		expect(requestFrame).not.toHaveBeenCalled()
	})

	it('loads a LazyImage source only after its wrapper enters the viewport', () => {
		const measure = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
		measure.mockReturnValue(new DOMRect(0, 800, 10, 10))
		const { getByRole } = render(
			<LazyImage
				link="/image.png"
				offset={100}
				alt="Lazy image"
				style={{}}
				className=""
				title="Lazy image"
			/>,
		)
		const image = getByRole('img')
		nextFrame()
		expect(image.getAttribute('src')).toBe('')

		measure.mockReturnValue(new DOMRect(0, 650, 10, 10))
		nextFrame()
		expect(image.getAttribute('src')).toBe('/image.png')
	})

	it.each([
		{ top: 700, left: 0 },
		{ top: 0, left: 900 },
	])('keeps elements hidden at the viewport boundary: %o', ({ top, left }) => {
		const { node } = createElement(top, left)
		const { result } = renderHook(() =>
			useIsInViewport({ link: '/image.png', offset: 100 }),
		)
		act(() => result.current[0](node))
		nextFrame()

		expect(result.current.slice(1)).toEqual(['', false])
	})

	it('reveals an element when it enters the viewport and stops measuring it', () => {
		const { node, measure } = createElement(800)
		const { result } = renderHook(() =>
			useIsInViewport({ link: '/image.png', offset: 100 }),
		)
		act(() => result.current[0](node))
		nextFrame()
		expect(result.current.slice(1)).toEqual(['', false])

		measure.mockReturnValue(new DOMRect(0, 650, 10, 10))
		nextFrame()
		expect(result.current.slice(1)).toEqual(['/image.png', true])

		measure.mockClear()
		nextFrame()
		expect(measure).not.toHaveBeenCalled()
		expect(vi.getTimerCount()).toBe(0)
	})

	it.each([
		{ offset: 200, top: 750 },
		{ offset: 0, top: 650 },
	])('uses the offset and its existing zero fallback: %o', ({
		offset,
		top,
	}) => {
		const { node } = createElement(top)
		const { result } = renderHook(() =>
			useIsInViewport({ link: '/image.png', offset }),
		)
		act(() => result.current[0](node))
		nextFrame()

		expect(result.current.slice(1)).toEqual(['/image.png', true])
	})

	it('removes an unmounted element and stops the animation loop', () => {
		const { node, measure } = createElement(800)
		const { result, unmount } = renderHook(() =>
			useIsInViewport({ link: '/image.png', offset: 100 }),
		)
		act(() => result.current[0](node))
		unmount()
		nextFrame()

		expect(measure).not.toHaveBeenCalled()
		expect(vi.getTimerCount()).toBe(0)
	})

	it('shares one animation loop and keeps other instances active after unmount', () => {
		const requestFrame = vi.spyOn(window, 'requestAnimationFrame')
		const first = renderHook(() =>
			useIsInViewport({ link: '/first.png', offset: 100 }),
		)
		const second = renderHook(() =>
			useIsInViewport({ link: '/second.png', offset: 100 }),
		)
		const firstElement = createElement(800)
		const secondElement = createElement(650)
		act(() => {
			first.result.current[0](firstElement.node)
			second.result.current[0](secondElement.node)
		})
		expect(requestFrame).toHaveBeenCalledTimes(1)

		first.unmount()
		nextFrame()
		expect(firstElement.measure).not.toHaveBeenCalled()
		expect(second.result.current.slice(1)).toEqual(['/second.png', true])
	})
})
