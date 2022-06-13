
export default {
    name: 'rich',
    type: 'document',
    title: 'Rich',
    fields: [


        {
            type: 'text',
            name: 'alt',
            title: 'Alternative text',
            description: `Some of your visitors cannot see images, 
          be they blind, color-blind, low-sighted; 
          alternative text is of great help for those 
          people that can rely on it to have a good idea of 
          what\'s on your page.`,
        },




        {
            title: 'Launch Scheduled At',
            name: 'launchAt',
            type: 'datetime'
        },

        {
            title: 'Rich image',
            name: 'rich',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                  isHighlighted: true // <-- make this field easily accessible
                }
              },
              {
                // Editing this field will be hidden behind an "Edit"-button
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              }
            ]
          },







        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                fields: [
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                    options: {
                      isHighlighted: true
                    }
                  }
                ]
              }
            ]
          }
        
    ]
}




