# lazy-react

[![npm version](https://badge.fury.io/js/lazy-react.svg)](https://badge.fury.io/js/lazy-react) [![Issue Count](https://codeclimate.com/github/jonathanobino/react-lazy/badges/issue_count.svg)](https://codeclimate.com/github/jonathanobino/react-lazy) [![Maintainability](https://qlty.sh/gh/jonathanobino/projects/react-lazy/maintainability.svg)](https://qlty.sh/gh/jonathanobino/projects/react-lazy)

React components and a hook for deferring image and iframe loading, and component mounting, until an element reaches the viewport threshold. A shared `requestAnimationFrame` loop checks element positions while instances are waiting to become visible.

## Install

```sh
npm install --save lazy-react
```

The package declares React and React DOM `^18.3.0` as peer dependencies and includes TypeScript declarations.

Published package files are also available on [unpkg](https://unpkg.com/lazy-react).

## Usage

The package exports four named components and a default hook:

```tsx
import useIsInViewport, {
  LazyBackgroundImage,
  LazyImage,
  LazyFrame,
  LazyComponent,
} from 'lazy-react'
```

All components accept an `offset` in pixels. The hook uses `100` when the offset is omitted or set to `0`. An element becomes visible when its top is less than the viewport height plus the offset, and its left is less than the viewport width plus the offset. There is no lower-bound check for elements above or to the left of the viewport. Once visible, an element stays visible.

### Hook

`useIsInViewport` is the default export. It accepts an object with the following props, both required by the current TypeScript interface:

| Prop | Type | Description |
| --- | --- | --- |
| `link` | `string` | Resource URL returned once the element reaches the visibility threshold. Use an empty string if only `isVisible` is needed. |
| `offset` | `number` | Viewport margin in pixels; runtime fallback: `100` when omitted or set to `0`. |

The hook returns a tuple:

| Value | Description |
| --- | --- |
| `setRef` | Callback to attach to the div whose position should be checked. |
| `visibleLink` | Empty string initially, then the supplied resource URL when visible. |
| `isVisible` | Initially `false`; stays `true` after the visibility threshold is reached. |

Keep the observed div mounted while showing a placeholder, so the hook can measure its position.

```tsx
import useIsInViewport from 'lazy-react'

function Example({ link, offset = 100 }: { link: string; offset?: number }) {
  const [setRef, visibleLink, isVisible] = useIsInViewport({ link, offset })

  return (
    <div ref={setRef} style={{ minHeight: 300 }}>
      {isVisible ? (
        <img src={visibleLink} alt="A mountain landscape" />
      ) : (
        <p>Waiting to enter the viewport…</p>
      )}
    </div>
  )
}
```

### Components

The tables below describe the current TypeScript interfaces: all listed props are required by those interfaces, even where runtime fallbacks exist. The examples supply all required props.

#### LazyImage

Renders an image inside a wrapper `div`. The wrapper is observed, and the image receives the resource URL once the visibility threshold is reached.

| Prop | Type | Description |
| --- | --- | --- |
| `link` | `string` | Image URL. |
| `offset` | `number` | Viewport margin in pixels; runtime fallback: `100`. |
| `alt` | `string` | Image alternative text. |
| `title` | `string` | Image title attribute. |
| `className` | `string` | Class applied to the image. |
| `style` | `object` | Inline styles applied to the image. |

```tsx
<LazyImage
  link="/images/photo.jpg"
  offset={100}
  alt="A mountain landscape"
  title="Mountain landscape"
  className="photo"
  style={{ width: '100%', height: 300, objectFit: 'cover' }}
/>
```

Set dimensions through styles or CSS to reserve space before the image loads. There is no automatic height fallback or `preserveAspect` prop.

#### LazyBackgroundImage

Renders a `div` whose background image is assigned once the visibility threshold is reached. Its children are mounted immediately.

| Prop | Type | Description |
| --- | --- | --- |
| `link` | `string` | Background image URL. |
| `offset` | `number` | Viewport margin in pixels; runtime fallback: `100`. |
| `className` | `string` | Class applied to the div. |
| `style` | `object` | Inline styles; a supplied `backgroundImage` overrides the generated value. |
| `children` | `ReactNode` | Content rendered inside the div. |

```tsx
<LazyBackgroundImage
  link="/images/banner.jpg"
  offset={100}
  className="banner"
  style={{ minHeight: 300, backgroundSize: 'cover' }}
>
  <h2>Welcome</h2>
</LazyBackgroundImage>
```

#### LazyFrame

Renders an iframe and assigns its resource URL once the visibility threshold is reached.

| Prop | Type | Description |
| --- | --- | --- |
| `link` | `string` | Iframe URL. |
| `offset` | `number` | Viewport margin in pixels; runtime fallback: `100`. |
| `height` | `number` | Iframe height in pixels; runtime fallback: `500` when omitted or set to `0`. |
| `allowFullScreen` | `boolean` | The current implementation always resolves this to `true`, including when passed `false`. |

```tsx
<LazyFrame
  link="https://example.com"
  offset={100}
  height={500}
  allowFullScreen={true}
/>
```

The component spreads its props onto the iframe at runtime, but its TypeScript interface does not declare additional iframe attributes such as `scrolling`, `frameBorder`, `allowTransparency`, or `style`. It does not provide defaults for these attributes.

#### LazyComponent

Renders a placeholder `div` until the visibility threshold is reached, then mounts its children inside a new div. This defers mounting; it does not dynamically import code.

| Prop | Type | Description |
| --- | --- | --- |
| `link` | `string` | Required by the shared hook interface; use an empty string when no resource URL is needed. |
| `offset` | `number` | Viewport margin in pixels; runtime fallback: `100`. |
| `style` | `object` | Placeholder styles, merged over `{ height: '300px', width: '300px' }`. |
| `children` | `ReactNode` | Content mounted after the placeholder reaches the visibility threshold. |

```tsx
function ComponentToLoadWhenInViewport() {
  return <p>This component mounts when its placeholder reaches the viewport.</p>
}

function Example() {
  return (
    <LazyComponent link="" offset={100} style={{ width: '100%', height: 300 }}>
      <ComponentToLoadWhenInViewport />
    </LazyComponent>
  )
}
```

Placeholder styles are not applied to the div containing the loaded children. `className` is not supported by this component.

## Demo

You can explore an [example on CodePen](https://codepen.io/jonathanobino/full/mOdXNb/). It may use an older version of the library; refer to the examples above for the current API.

### Local demo

Clone the repository, then run:

```sh
npm install
npm run build
npm start
```

Open the local URL printed by Parcel. The demo imports the built package from `dist`, so build it before starting the demo.

## Contributing

Pull requests for bug fixes, new features, and improvements are welcome.

```sh
npm test
npm run check
npm run build
```

Run `npm run test:watch` to rerun tests as files change. Hook tests use React Testing Library and jsdom, with controlled animation frames and element positions.

## Changelog

- 3.6.0: upgrade to React 18.3.

## License

[MIT](LICENSE)
