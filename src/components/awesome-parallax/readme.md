# awesome-parallax

Also check [Parallax Layer](../awesome-parallax-layer/readme.md).

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                            | Type     | Default |
| ------------- | ------------- | -------------------------------------- | -------- | ------- |
| `perspective` | `perspective` | Perspective of the parallax container. | `number` | `1`     |


## Events

| Event           | Description                          | Type                                                                            |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| `contentScroll` | Invoke when the content is scrolled. | `CustomEvent<{ scrollTop: number; scrollHeight: number; viewHeight: number; }>` |


## CSS Custom Properties

| Name                          | Description                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| `--parallax-scroll-height-px` | It presents the scroll height in pixel. (Should only read)                             |
| `--parallax-scroll-ratio`     | It presents scroll ratio of the parallax. (Should only read)                           |
| `--parallax-scroll-top-px`    | It presents how many pixels are scrolled from the top. (Should only read)              |
| `--parallax-view-height-px`   | It presents scroll the outer height of parallax container in pixel. (Should only read) |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
