class Video {
    constructor() {
        this.model = {
            type: 'videos',
            attributes: [
                'desc',
                'is_footage_select',
            ],
            relationships: {
                something: {
                    blah: 'yikes blah'
                }
            }
        }

        this.summaryFields = [
            'desc',
            'is_footage_select',
        ];
    }
}

module.exports = {
    Video
}