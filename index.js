import { select, selection } from 'd3-selection'
import { transition } from 'd3-transition'

const getFunction = type => function( data ) {
  if (typeof data === 'function') {
    return this.each(function() {
      const cur = select( this )
      const obj = data.apply( this, arguments )
      for ( let attrName in obj )
        cur[ type ]( attrName, obj[attrName] )
    })
  }
  for( let attrName in data )
    this[ type ]( attrName, data[attrName] )
  return this
}

selection.prototype.attrs = transition.prototype.attrs = getFunction( 'attr' )
selection.prototype.styles = transition.prototype.styles = getFunction( 'style' )
