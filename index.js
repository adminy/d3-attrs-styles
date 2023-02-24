import { select, selection, transition } from 'd3-selection'

const getFunction = type => function( data ) {
  if (typeof data === 'function') {
    return this.each(function() {
      const cur = d3.select( this )
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
