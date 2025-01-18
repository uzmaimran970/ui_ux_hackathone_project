export default {
    name: 'chef',
    title: 'Chef',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'speciality',
        title: 'Speciality',
        type: 'string',
        description: 'Cuisine or specialty of the chef',
      },
      {
        name: 'bio',
        title: 'Biography',
        type: 'text',
        description: 'Short description about the chef.',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        description: 'Average rating of the chef.',
      },
      {
        name: 'experience',
        title: 'Experience (Years)',
        type: 'number',
        description: 'Years of experience the chef has.',
      },
      {
        name: 'socialMedia',
        title: 'Social Media Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'platform',
                title: 'Platform',
                type: 'string',
              },
              {
                name: 'url',
                title: 'URL',
                type: 'url',
              },
            ],
          },
        ],
      },
    ],
  };
  