import { Component, Host, h, Prop, ComponentInterface, Element, Watch } from '@stencil/core';
import { updateCSSVariable } from '../../utils/access-css-variable';

@Component({
  tag: 'awesome-parallax-layer',
  styleUrl: 'awesome-parallax-layer.css',
  shadow: true,
})
export class AwesomeParallaxLayer implements ComponentInterface {

  @Element() hostElement: HTMLAwesomeParallaxLayerElement;

  /**
   * Depth of the layer. 0 is the base layer, negative means farther and positive means nearer.  
   * The value should be less than the container's perspective value. 
   */
  @Prop() depth: number = 0;

  @Watch('depth')
  depthChanged(depth: number) {
    updateCSSVariable('--depth', depth.toString(), this.hostElement);
  }

  componentDidLoad() {
    this.depthChanged(this.depth);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
