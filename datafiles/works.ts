type Work = {
	id: number
	name: string
	company: string
	desc: string
}

export type Experience = {
	id: number
	year: number
	works: Array<Work>
}

export const workData:Array<Experience> = [
    {
        "id": 1,
        "year": 2023,
        "works": [
            {
                "id": 1,
                "name": "Web development Internship",
                "company": "Techgentsia Private Limited",
                "desc": "Worked as a fulltime web development intern.Created a website to manage internship applications and distribution of certificates"
            }
        ]
    }
]