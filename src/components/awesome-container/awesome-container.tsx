import { Component, Host, h, Element, ComponentInterface } from '@stencil/core';
import { updateCSSVariable } from '../../utils/access-css-variable';
import { observeResize } from '../../utils/observe-resize';


@Component({
  tag: 'awesome-container',
  styleUrl: 'awesome-container.css',
  shadow: true,
})
export class AwesomeContainer implements ComponentInterface {

  @Element() hostElement: HTMLAwesomeContainerElement;

  componentWillLoad() {
    observeResize.call(
      this,
      this.hostElement,
      [
        this.updateContentMaxWidthForViewBreakpoint
      ]
    );
  }

  render() {
    return (
      <Host>
        <div id="main-container">
          <slot></slot>
        </div>
      </Host>
    );
  }

  private updateContentMaxWidthForViewBreakpoint(entry: ResizeObserverEntry) {
    const width = entry.contentRect.width;
    switch (true) {
      case (width >= this.getViewBreakpoint('xxl')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('xxl')}px`, this.hostElement);
        break;
      case (width >= this.getViewBreakpoint('xl')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('xl')}px`, this.hostElement);
        break;
      case (width >= this.getViewBreakpoint('lg')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('lg')}px`, this.hostElement);
        break;
      case (width >= this.getViewBreakpoint('md')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('md')}px`, this.hostElement);
        break;
      case (width >= this.getViewBreakpoint('sm')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('sm')}px`, this.hostElement);
        break;
      default:
        updateCSSVariable('--content-max-width', `100%`, this.hostElement);
    }
  }

  private getViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--${name}`);
  }

  private getWrappedViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--wrapped-${name}`);
  }

}
