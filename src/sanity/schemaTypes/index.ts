import { type SchemaTypeDefinition } from 'sanity'
import food from './food'
import shef from './shef'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, shef],
}
