import { Component, Host, h, ComponentInterface, Element } from '@stencil/core';
import { observeResize } from '../../utils/observe-resize';

@Component({
  tag: 'awesome-flex-row',
  styleUrl: 'awesome-flex-row.css',
  shadow: true,
})
export class AwesomeFlexRow implements ComponentInterface {

  private readonly FLEX_COLUMN_TAG_NAME = 'awesome-flex-col';

  @Element() hostElement: HTMLAwesomeFlexRowElement;

  componentWillLoad() {
    observeResize.call(
      this,
      this.hostElement,
      [
        this.notifyWidthChangeToColElements
      ]
    )
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  private notifyWidthChangeToColElements(entry: ResizeObserverEntry) {
    const width = entry.contentRect.width;
    this.hostElement.querySelectorAll(this.FLEX_COLUMN_TAG_NAME).forEach(colElement => colElement.rowWidthChanged(width));
  }

}
