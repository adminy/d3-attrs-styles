import { selection } from 'd3-selection'
import { transition } from 'd3-transition'

const getFunction = type => function( data ) { Object.entries(data).map(([key, val]) => this[type](key, val)); return this }
selection.prototype.attrs = transition.prototype.attrs = getFunction( 'attr' )
selection.prototype.styles = transition.prototype.styles = getFunction( 'style' )
