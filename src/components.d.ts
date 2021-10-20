/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AwesomeContainer {
    }
    interface AwesomeFlex {
        /**
          * The number of portions that the flex container is split into.
         */
        "baseFraction": number;
    }
    interface AwesomeFlexItem {
        "containerSizeChanged": (size: number) => Promise<void>;
        /**
          * The portion of the flex item spans for lg view breakpoint.
         */
        "lg": number | 'auto' | '';
        /**
          * The portion of the flex item spans for md view breakpoint.
         */
        "md": number | 'auto' | '';
        /**
          * The portion of the flex item spans for sm view breakpoint.
         */
        "sm": number | 'auto' | '';
        /**
          * The portion of the flex item spans for xl view breakpoint.
         */
        "xl": number | 'auto' | '';
        /**
          * The portion of the flex item spans for xs view breakpoint.
         */
        "xs": number | 'auto' | '';
        /**
          * The portion of the flex item spans for xxl view breakpoint.
         */
        "xxl": number | 'auto' | '';
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
}
declare global {
    interface HTMLAwesomeContainerElement extends Components.AwesomeContainer, HTMLStencilElement {
    }
    var HTMLAwesomeContainerElement: {
        prototype: HTMLAwesomeContainerElement;
        new (): HTMLAwesomeContainerElement;
    };
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
    interface HTMLAwesomeRatioBoxElement extends Components.AwesomeRatioBox, HTMLStencilElement {
    }
    var HTMLAwesomeRatioBoxElement: {
        prototype: HTMLAwesomeRatioBoxElement;
        new (): HTMLAwesomeRatioBoxElement;
    };
    interface HTMLElementTagNameMap {
        "awesome-container": HTMLAwesomeContainerElement;
        "awesome-flex": HTMLAwesomeFlexElement;
        "awesome-flex-item": HTMLAwesomeFlexItemElement;
        "awesome-ratio-box": HTMLAwesomeRatioBoxElement;
    }
}
declare namespace LocalJSX {
    interface AwesomeContainer {
    }
    interface AwesomeFlex {
        /**
          * The number of portions that the flex container is split into.
         */
        "baseFraction"?: number;
    }
    interface AwesomeFlexItem {
        /**
          * The portion of the flex item spans for lg view breakpoint.
         */
        "lg"?: number | 'auto' | '';
        /**
          * The portion of the flex item spans for md view breakpoint.
         */
        "md"?: number | 'auto' | '';
        /**
          * The portion of the flex item spans for sm view breakpoint.
         */
        "sm"?: number | 'auto' | '';
        /**
          * The portion of the flex item spans for xl view breakpoint.
         */
        "xl"?: number | 'auto' | '';
        /**
          * The portion of the flex item spans for xs view breakpoint.
         */
        "xs"?: number | 'auto' | '';
        /**
          * The portion of the flex item spans for xxl view breakpoint.
         */
        "xxl"?: number | 'auto' | '';
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
    interface IntrinsicElements {
        "awesome-container": AwesomeContainer;
        "awesome-flex": AwesomeFlex;
        "awesome-flex-item": AwesomeFlexItem;
        "awesome-ratio-box": AwesomeRatioBox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "awesome-container": LocalJSX.AwesomeContainer & JSXBase.HTMLAttributes<HTMLAwesomeContainerElement>;
            "awesome-flex": LocalJSX.AwesomeFlex & JSXBase.HTMLAttributes<HTMLAwesomeFlexElement>;
            "awesome-flex-item": LocalJSX.AwesomeFlexItem & JSXBase.HTMLAttributes<HTMLAwesomeFlexItemElement>;
            "awesome-ratio-box": LocalJSX.AwesomeRatioBox & JSXBase.HTMLAttributes<HTMLAwesomeRatioBoxElement>;
        }
    }
}
