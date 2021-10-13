import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'awesome-container',
  styleUrl: 'awesome-container.css',
  shadow: true,
})
export class AwesomeContainer {

  render() {
    return (
      <Host>
        <slot>hello</slot>
      </Host>
    );
  }

}
