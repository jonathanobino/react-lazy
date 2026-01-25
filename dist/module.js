import {jsx as $4MPRY$jsx} from "react/jsx-runtime";
import {useState as $4MPRY$useState, useEffect as $4MPRY$useEffect, useCallback as $4MPRY$useCallback, useMemo as $4MPRY$useMemo} from "react";




function $d53282a0f683afba$export$2e2bcd8739ae039(props) {
    const [setRef, link, isViewable] = (0, $cf52ec504e3068a6$export$2e2bcd8739ae039)(props);
    const [style, setStyle] = (0, $4MPRY$useState)({
        backgroundImage: `url(${link})`,
        ...props.style
    });
    (0, $4MPRY$useEffect)(()=>{
        isViewable && setStyle({
            backgroundImage: `url(${link})`,
            ...props.style
        });
    }, [
        link,
        isViewable,
        props.style
    ]);
    return /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
        className: props.className,
        style: style,
        ref: (node)=>{
            setRef(node);
        },
        children: props.children
    });
}




function $c76f9bf8c035eea9$export$2e2bcd8739ae039(props) {
    const [setRef, link] = (0, $cf52ec504e3068a6$export$2e2bcd8739ae039)(props);
    return /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
        ref: (node)=>{
            setRef(node);
        },
        children: /*#__PURE__*/ (0, $4MPRY$jsx)("img", {
            src: link,
            alt: props.alt,
            style: props.style,
            className: props.className,
            title: props.title
        })
    });
}




function $6154e4cf378cce38$export$2e2bcd8739ae039(props) {
    const [setRef, link] = (0, $cf52ec504e3068a6$export$2e2bcd8739ae039)(props);
    return /*#__PURE__*/ (0, $4MPRY$jsx)("iframe", {
        // scrolling={props.scrolling || 'no'}
        src: link,
        // frameBorder={props.frameBorder || 'no'}
        // style={props.style || {border: props.frameBorder}}
        ref: (node)=>{
            setRef(node);
        },
        ...props,
        height: props.height || '500',
        allowFullScreen: props.allowFullScreen || true
    });
}




function $bff95282d9e2e246$export$2e2bcd8739ae039(props) {
    const [setRef, _, isVisible] = (0, $cf52ec504e3068a6$export$2e2bcd8739ae039)(props);
    if (!isVisible) return /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
        ref: (node)=>{
            setRef(node);
        },
        style: {
            height: '300px',
            width: '300px',
            ...props.style
        }
    });
    return /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
        children: props.children
    });
}



// array with all the elements that are waiting to be shown in the viewport
const $cf52ec504e3068a6$var$elements = new Set();
const $cf52ec504e3068a6$var$CheckIfRender = {
    // top: the position of the element in relation with the top of the browser
    // left: the position of the element in relation with the left of the browser
    // offset: the desired offset of the element in relation of the viewport
    isInViewPort: ({ offset: offset, top: top, left: left })=>top < window.innerHeight + offset && left < window.innerWidth + offset,
    calculateNewPosition: (elem)=>{
        const { top: top, left: left } = elem.element?.getBoundingClientRect() || {
            top: 0,
            left: 0
        };
        return {
            ...elem,
            top: top,
            left: left
        };
    },
    addElement: (element)=>{
        //the distance from the pixel 0,0 and the top of the element
        $cf52ec504e3068a6$var$elements.add(element);
        //check if has already been started the rAF cycle
        if ($cf52ec504e3068a6$var$CheckIfRender.isListenerAttached === 0) $cf52ec504e3068a6$var$CheckIfRender.isListenerAttached = window.requestAnimationFrame($cf52ec504e3068a6$var$CheckIfRender.eventHandler);
    },
    eventHandler: ()=>{
        //if there is no more element to lazy load remove the listener/rAF
        if ($cf52ec504e3068a6$var$elements.size === 0) $cf52ec504e3068a6$var$CheckIfRender.removeScrollHandler();
        else {
            $cf52ec504e3068a6$var$elements.forEach((elem)=>{
                const haveToShow = $cf52ec504e3068a6$var$CheckIfRender.isInViewPort($cf52ec504e3068a6$var$CheckIfRender.calculateNewPosition(elem));
                if (haveToShow) {
                    elem.makeItVisible();
                    // remove element from the list of elements to lazy load
                    $cf52ec504e3068a6$var$CheckIfRender.removeElementFromList(elem);
                }
            });
            $cf52ec504e3068a6$var$CheckIfRender.isListenerAttached = window.requestAnimationFrame($cf52ec504e3068a6$var$CheckIfRender.eventHandler);
        }
    },
    removeScrollHandler: ()=>{
        window.cancelAnimationFrame($cf52ec504e3068a6$var$CheckIfRender.isListenerAttached);
        $cf52ec504e3068a6$var$CheckIfRender.isListenerAttached = 0;
    },
    //When an element is unloaded remove it from the list of elements that are waiting to be lazy-loaded
    removeElementFromList: (toRemove)=>{
        $cf52ec504e3068a6$var$elements.delete(toRemove);
    },
    isListenerAttached: 0
};
function $cf52ec504e3068a6$export$2e2bcd8739ae039(props) {
    const [link, setLink] = (0, $4MPRY$useState)('');
    const [visible, setVisible] = (0, $4MPRY$useState)(false);
    const [ref, setRef] = (0, $4MPRY$useState)(null);
    const makeItVisible = (0, $4MPRY$useCallback)(()=>{
        if (props.link) setLink(()=>props.link);
        setVisible(()=>true);
    }, [
        props.link
    ]);
    const thisInstance = (0, $4MPRY$useMemo)(()=>{
        return {
            element: ref,
            makeItVisible: makeItVisible,
            offset: props.offset || 100
        };
    }, [
        ref,
        props.offset,
        makeItVisible
    ]);
    const getRef = (0, $4MPRY$useCallback)((node)=>{
        if (node !== null) setRef(node);
    }, []);
    (0, $4MPRY$useEffect)(()=>{
        if (ref !== null) // add the element to the array of elements that are waiting to be lazy loaded
        $cf52ec504e3068a6$var$CheckIfRender.addElement(thisInstance);
        return ()=>// if the element is unloaded remove the element from the list of elements that needs to be lazy loader
            $cf52ec504e3068a6$var$CheckIfRender.removeElementFromList(thisInstance);
    }, [
        ref,
        thisInstance
    ]);
    return [
        getRef,
        link,
        visible
    ];
}




export {$cf52ec504e3068a6$export$2e2bcd8739ae039 as default, $d53282a0f683afba$export$2e2bcd8739ae039 as LazyBackgroundImage, $c76f9bf8c035eea9$export$2e2bcd8739ae039 as LazyImage, $6154e4cf378cce38$export$2e2bcd8739ae039 as LazyFrame, $bff95282d9e2e246$export$2e2bcd8739ae039 as LazyComponent};
//# sourceMappingURL=module.js.map
