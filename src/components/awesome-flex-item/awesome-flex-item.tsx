import { Component, Host, h, ComponentInterface, Element, Method, Prop } from '@stencil/core';
import { updateCSSVariable } from '../../utils/access-css-variable';

@Component({
  tag: 'awesome-flex-item',
  styleUrl: 'awesome-flex-item.css',
  shadow: true,
})
export class AwesomeFlexItem implements ComponentInterface {

  private set fraction(value: number | 'auto' | '') {
    updateCSSVariable('--fraction', value?.toString(), this.hostElement);
    this.updateFlexCSSVariable(value);
  }

  private get actualXs() {
    return this.xs;
  }

  private get actualSm() {
    return this.sm || this.actualXs;
  }

  private get actualMd() {
    return this.md || this.actualSm;
  }

  private get actualLg() {
    return this.lg || this.actualMd;
  }

  private get actualXl() {
    return this.xl || this.actualLg;
  }

  private get actualXxl() {
    return this.xxl || this.actualXl;
  }

  @Element() hostElement: HTMLAwesomeFlexItemElement;

  /**
   * The portion of the flex item spans for xs view breakpoint.
   */
  @Prop({ reflect: true }) xs: number | 'auto' | '';

  /**
   * The portion of the flex item spans for sm view breakpoint.
   */
  @Prop({ reflect: true }) sm: number | 'auto' | '';

  /**
   * The portion of the flex item spans for md view breakpoint.
   */
  @Prop({ reflect: true }) md: number | 'auto' | '';

  /**
   * The portion of the flex item spans for lg view breakpoint.
   */
  @Prop({ reflect: true }) lg: number | 'auto' | '';

  /**
   * The portion of the flex item spans for xl view breakpoint.
   */
  @Prop({ reflect: true }) xl: number | 'auto' | '';

  /**
   * The portion of the flex item spans for xxl view breakpoint.
   */
  @Prop({ reflect: true }) xxl: number | 'auto' | '';

  /** @internal */
  @Method()
  async containerSizeChanged(size: number) {
    switch (true) {
      case (size >= this.getWrappedViewBreakpoint('xxl')):
        this.fraction = this.actualXxl;
        break;
      case (size >= this.getWrappedViewBreakpoint('xl')):
        this.fraction = this.actualXl;
        break;
      case (size >= this.getWrappedViewBreakpoint('lg')):
        this.fraction = this.actualLg;
        break;
      case (size >= this.getWrappedViewBreakpoint('md')):
        this.fraction = this.actualMd;
        break;
      case (size >= this.getWrappedViewBreakpoint('sm')):
        this.fraction = this.actualSm;
        break;
      default:
        this.fraction = this.actualXs;
    }
  }

  connectedCallback() {
    this.fraction = this.actualXs;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  private getWrappedViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--wrapped-${name}`);
  }

  private updateFlexCSSVariable(value: string | number) {
    switch (true) {
      case value !== '' && !Number.isNaN(+value):
        updateCSSVariable('--flex', '0 0 calc(var(--fraction) / var(--base-fraction) * 100%)', this.hostElement);
        break;
      case value === 'auto':
        updateCSSVariable('--flex', '0 0 auto', this.hostElement);
        break;
      case value === '':
      default:
        updateCSSVariable('--flex', '1 1 auto', this.hostElement);
        break;
    }
  }

}
