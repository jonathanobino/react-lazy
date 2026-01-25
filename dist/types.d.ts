import { ReactNode, JSX } from "react";
interface LazyBackgroundImageProps {
    link: string;
    offset: number;
    style: object;
    className: string;
    children: ReactNode;
}
export function LazyBackgroundImage(props: LazyBackgroundImageProps): JSX.Element;
interface LazyImageProps {
    link: string;
    offset: number;
    alt: string;
    style: object;
    className: string;
    title: string;
}
export function LazyImage(props: LazyImageProps): JSX.Element;
interface LazyFrameProps {
    height: number;
    link: string;
    offset: number;
    allowFullScreen: boolean;
}
export function LazyFrame(props: LazyFrameProps): JSX.Element;
interface LazyComponentProps {
    link: string;
    offset: number;
    style: object;
    children: ReactNode;
}
export function LazyComponent(props: LazyComponentProps): JSX.Element;
export default function useRenderIfInViewPort(props: {
    link: string;
    offset: number;
}): [(node: HTMLDivElement | null) => void, string, boolean];

//# sourceMappingURL=types.d.ts.map
