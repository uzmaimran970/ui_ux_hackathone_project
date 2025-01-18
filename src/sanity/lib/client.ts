import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "sk7rczUM8BBlOjykJWpkFc2oOzzNwqVjGaouMMsU8OJ2oXzh1jwcKZAwlevFOLN8mCQTWWsAIiii4diOLHZLsQnaVGUR8TN96Qsy3cFThHwIuxcZ27VoaJsgSoYiWKSTkSKwalPjSPfxssuvXTeKkbuQkUcPRTMTKbZPcQmgTQpCzpHOH6QL"
})


