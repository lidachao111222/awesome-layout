import { Component, Host, h, ComponentInterface, Element, Prop, Watch } from '@stencil/core';
import { updateCSSVariable } from '../../utils/access-css-variable';

@Component({
  tag: 'awesome-ratio-box',
  styleUrl: 'awesome-ratio-box.css',
  shadow: true,
})
export class AwesomeRatioBox implements ComponentInterface {

  @Element() hostElement: HTMLAwesomeRatioBoxElement;

  @Prop({ reflect: true }) heightRatio = 1;

  @Watch('heightRatio')
  heightRatioChanged(heightRatio: number) {
    updateCSSVariable('--height-ratio', heightRatio.toString(), this.hostElement);
  }

  @Prop({ reflect: true }) widthRatio = 1;

  @Watch('widthRatio')
  widthRatioChanged(widthRatio: number) {
    updateCSSVariable('--width-ratio', widthRatio.toString(), this.hostElement);
  }

  connectedCallback() {
    this.heightRatioChanged(this.heightRatio);
    this.widthRatioChanged(this.widthRatio);
  }

  render() {
    return (
      <Host>
        <div id="outer-container">
          <div id="inner-container">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
