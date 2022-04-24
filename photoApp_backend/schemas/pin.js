export default{
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields:[
        {
            name: 'title',
            tittle: 'Title',
            type: 'string',
        },
        {
            name: 'about',
            tittle: 'About',
            type: 'string',
        },
        {
            name: 'destination',
            tittle: 'Destination',
            type: 'url',
        },
        {
            name: 'category',
            tittle: 'Category',
            type: 'string',
        },
        {
            name: 'image',
            tittle: 'Image',
            type: 'image',
            options:{
                hotspot: true
            }

        },
        {
            name: 'userId',
            tittle: 'UserID',
            type: 'string',
        },
        {
            name: 'postedBy',
            tittle: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'saved',
            tittle: 'Saved',
            type: 'array',
            of: [{type: 'save'}]
        },
        {
            name: 'comments',
            tittle: 'Comments',
            type: 'array',
            of: [{type: 'comment'}]
        },
        
    ]
}