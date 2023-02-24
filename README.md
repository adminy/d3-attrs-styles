# D3-attrs

Allows to set attributes and styles for d3 selection as objects.
Works fine with D3 v7 (d3-selection v3) and NodeJS v16.

## Install

`yarn add -D @adminy/d3-attrs-styles`

## Use

```js
import '@adminy/d3-attrs-styles'

d3.select( 'svg' ).append( 'line' )
  .attrs({
    class: 'red_line',
    x1: d => d.x1,
    y1: 0,
    x2: 100, y2: 50
  })
  .styles( d => ({
    stroke: `#${ d.color }`,
    'stroke-width': d.width
  }) );
```
