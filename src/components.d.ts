/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AwesomeFlex {
        /**
          * The number of portions that the flex container is split into.
         */
        "baseFraction": number;
    }
    interface AwesomeFlexItem {
        "containerSizeChanged": (size: number) => Promise<void>;
        /**
          * The size of the flex item for lg screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "lg": number | 'auto' | '';
        /**
          * The size of the flex item for md screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "md": number | 'auto' | '';
        /**
          * The size of the flex item for sm screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "sm": number | 'auto' | '';
        /**
          * The size of the flex item for xl screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "xl": number | 'auto' | '';
        /**
          * The size of the flex item for xs screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "xs": number | 'auto' | '';
        /**
          * The size of the flex item for xxl screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "xxl": number | 'auto' | '';
    }
    interface AwesomeParallax {
        /**
          * Perspective of the parallax container.
         */
        "perspective": number;
    }
    interface AwesomeParallaxLayer {
        /**
          * Depth of the layer. 0 is the base layer, negative means farther and positive means nearer.   The value should be less than the container's perspective value.
         */
        "depth": number;
    }
    interface AwesomeRatioBox {
        /**
          * The factor of height.
         */
        "heightFactor": number;
        /**
          * The factor of width.
         */
        "widthFactor": number;
    }
    interface AwesomeWrap {
    }
}
declare global {
    interface HTMLAwesomeFlexElement extends Components.AwesomeFlex, HTMLStencilElement {
    }
    var HTMLAwesomeFlexElement: {
        prototype: HTMLAwesomeFlexElement;
        new (): HTMLAwesomeFlexElement;
    };
    interface HTMLAwesomeFlexItemElement extends Components.AwesomeFlexItem, HTMLStencilElement {
    }
    var HTMLAwesomeFlexItemElement: {
        prototype: HTMLAwesomeFlexItemElement;
        new (): HTMLAwesomeFlexItemElement;
    };
    interface HTMLAwesomeParallaxElement extends Components.AwesomeParallax, HTMLStencilElement {
    }
    var HTMLAwesomeParallaxElement: {
        prototype: HTMLAwesomeParallaxElement;
        new (): HTMLAwesomeParallaxElement;
    };
    interface HTMLAwesomeParallaxLayerElement extends Components.AwesomeParallaxLayer, HTMLStencilElement {
    }
    var HTMLAwesomeParallaxLayerElement: {
        prototype: HTMLAwesomeParallaxLayerElement;
        new (): HTMLAwesomeParallaxLayerElement;
    };
    interface HTMLAwesomeRatioBoxElement extends Components.AwesomeRatioBox, HTMLStencilElement {
    }
    var HTMLAwesomeRatioBoxElement: {
        prototype: HTMLAwesomeRatioBoxElement;
        new (): HTMLAwesomeRatioBoxElement;
    };
    interface HTMLAwesomeWrapElement extends Components.AwesomeWrap, HTMLStencilElement {
    }
    var HTMLAwesomeWrapElement: {
        prototype: HTMLAwesomeWrapElement;
        new (): HTMLAwesomeWrapElement;
    };
    interface HTMLElementTagNameMap {
        "awesome-flex": HTMLAwesomeFlexElement;
        "awesome-flex-item": HTMLAwesomeFlexItemElement;
        "awesome-parallax": HTMLAwesomeParallaxElement;
        "awesome-parallax-layer": HTMLAwesomeParallaxLayerElement;
        "awesome-ratio-box": HTMLAwesomeRatioBoxElement;
        "awesome-wrap": HTMLAwesomeWrapElement;
    }
}
declare namespace LocalJSX {
    interface AwesomeFlex {
        /**
          * The number of portions that the flex container is split into.
         */
        "baseFraction"?: number;
    }
    interface AwesomeFlexItem {
        /**
          * The size of the flex item for lg screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "lg"?: number | 'auto' | '';
        /**
          * The size of the flex item for md screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "md"?: number | 'auto' | '';
        /**
          * The size of the flex item for sm screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "sm"?: number | 'auto' | '';
        /**
          * The size of the flex item for xl screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "xl"?: number | 'auto' | '';
        /**
          * The size of the flex item for xs screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "xs"?: number | 'auto' | '';
        /**
          * The size of the flex item for xxl screens, in terms of how many portions it should take up out of the total available.  If `"auto"` is passed, it will be the size of its content.  If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
         */
        "xxl"?: number | 'auto' | '';
    }
    interface AwesomeParallax {
        /**
          * Invoke when the content is scrolled.
         */
        "onContentScroll"?: (event: CustomEvent<{ scrollTop: number, scrollHeight: number, viewHeight: number }>) => void;
        /**
          * Perspective of the parallax container.
         */
        "perspective"?: number;
    }
    interface AwesomeParallaxLayer {
        /**
          * Depth of the layer. 0 is the base layer, negative means farther and positive means nearer.   The value should be less than the container's perspective value.
         */
        "depth"?: number;
    }
    interface AwesomeRatioBox {
        /**
          * The factor of height.
         */
        "heightFactor"?: number;
        /**
          * The factor of width.
         */
        "widthFactor"?: number;
    }
    interface AwesomeWrap {
    }
    interface IntrinsicElements {
        "awesome-flex": AwesomeFlex;
        "awesome-flex-item": AwesomeFlexItem;
        "awesome-parallax": AwesomeParallax;
        "awesome-parallax-layer": AwesomeParallaxLayer;
        "awesome-ratio-box": AwesomeRatioBox;
        "awesome-wrap": AwesomeWrap;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "awesome-flex": LocalJSX.AwesomeFlex & JSXBase.HTMLAttributes<HTMLAwesomeFlexElement>;
            "awesome-flex-item": LocalJSX.AwesomeFlexItem & JSXBase.HTMLAttributes<HTMLAwesomeFlexItemElement>;
            "awesome-parallax": LocalJSX.AwesomeParallax & JSXBase.HTMLAttributes<HTMLAwesomeParallaxElement>;
            "awesome-parallax-layer": LocalJSX.AwesomeParallaxLayer & JSXBase.HTMLAttributes<HTMLAwesomeParallaxLayerElement>;
            "awesome-ratio-box": LocalJSX.AwesomeRatioBox & JSXBase.HTMLAttributes<HTMLAwesomeRatioBoxElement>;
            "awesome-wrap": LocalJSX.AwesomeWrap & JSXBase.HTMLAttributes<HTMLAwesomeWrapElement>;
        }
    }
}
