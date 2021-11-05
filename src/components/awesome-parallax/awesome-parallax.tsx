import { Component, Host, h, Prop, ComponentInterface, Watch, Element } from '@stencil/core';
import { updateCSSVariable } from '../../utils/access-css-variable';

@Component({
  tag: 'awesome-parallax',
  styleUrl: 'awesome-parallax.css',
  shadow: true,
})
export class AwesomeParallax implements ComponentInterface {

  @Element() hostElement: HTMLAwesomeParallaxElement;

  /**
   * Perspective of the parallax container.
   */
  @Prop() perspective: number = 1;

  @Watch('perspective')
  perspectiveChanged(perspective: number) {
    updateCSSVariable('--perspective', perspective.toString(), this.hostElement);
  }

  componentDidLoad() {
    this.perspectiveChanged(this.perspective);
  }

  render() {
    return (
      <Host>
        <div
          id="main-container"
          onScroll={this.scrollHandler}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }

  private scrollHandler = (event: UIEvent) => {
    const target = event.currentTarget as HTMLDivElement;
    updateCSSVariable('--parallax-scroll-top-px', target.scrollTop.toString(), this.hostElement);
    updateCSSVariable('--parallax-scroll-height-px', target.scrollHeight.toString(), this.hostElement);
    updateCSSVariable('--parallax-view-height-px', target.clientHeight.toString(), this.hostElement);
  }

}
