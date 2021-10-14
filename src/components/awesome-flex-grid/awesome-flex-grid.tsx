import { Component, Host, h, ComponentInterface, Element, Prop, Watch } from '@stencil/core';
import { updateCSSVariable } from '../../utils/access-css-variable';

@Component({
  tag: 'awesome-flex-grid',
  styleUrl: 'awesome-flex-grid.css',
  shadow: true,
})
export class AwesomeFlexGrid implements ComponentInterface {

  @Element() hostElement: HTMLAwesomeFlexGridElement;

  @Prop({ reflect: true }) baseColumnCount = 12;

  @Watch('baseColumnCount')
  baseColumnCountChanged(value: number) {
    updateCSSVariable('--base-column-count', value.toString(), this.hostElement);
  }

  componentWillLoad() {
    this.baseColumnCountChanged(this.baseColumnCount)
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
