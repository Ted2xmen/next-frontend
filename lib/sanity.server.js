import { createClient} from 'next-sanity'

import {config} from './config'

export const sanityClient = createClient(config)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "sk0GzlOF10iNmmOdBukYsYlQrvtbom40sriibjAL3lz0eriBy8HH0uQsk6hgr3OEtwQJAXrEsEsSeakucA8zjakfS3q5i1GnjUiLIi9UBg2mbz95CrBNqOxXfweTQkEqXMJwlnkwrHP914340BzoftX7rAUx2OyizNQudyfXKo9yAoOAHir3",
});


export const getClient = (usePreview) => (usePreview ? sanityClient : previewClient);