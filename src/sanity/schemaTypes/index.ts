import { type SchemaTypeDefinition } from 'sanity'
import food from './food'
import shef from './shef'

import starter from './starter'
import maincorse from './maincorse'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, shef, starter,maincorse]
}
