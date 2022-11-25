export interface Place{
    id: string
    name: {
        en: string
    }
    location: {
        lat: number
        lon: number
        address: {
            streetAddress: string
            postalCode: string
            locality: string
            neighbourhood: string
        }
    }
    description: {
        intro: string
        body: string
        images: Image[]
    }
    tags: {
        id: string
        name: string
    }
    openingHours: {
        hours: HoursWork[]
    }
}

interface HoursWork {
    weekdayId: number
    opens: string
    closes: string
    open24h: boolean
}

interface Image{
    url: string
}