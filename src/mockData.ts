interface RaceDataProps {
    id: number;
    name: string;
    active: boolean;
    participants: Array<number>;
}

export const raceData: Array<RaceDataProps> = [
    {
        "id": 1,
        "name": "Beat the Clock to Yellow Rock",
        "active": true,
        "participants": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        "id": 2,
        "name": "Idaho a Go-Go",
        "active": true,
        "participants": [1, 2, 7]
    },
    {
        "id": 3,
        "name": "The Baja-Ha-Ha Race",
        "active": true,
        "participants": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        "id": 4,
        "name": "The Zippy Mississippi Race",
        "active": true,
        "participants": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        "id": 5,
        "name": "Hot Race at Chillicothe",
        "active": false,
        "participants": [1, 5, 10]
    },
    {
        "id": 6,
        "name": "Rhode Island Road Race",
        "active": true,
        "participants": [1, 3, 8]
    },
    {
        "id": 7,
        "name": "Wacky Race to Ripsaw",
        "active": true,
        "participants": [1, 2, 6]
    },
    {
        "id": 8,
        "name": "The Dipsy Doodle Desert Derby",
        "active": false,
        "participants": [1, 2, 3, 9, 10]
    }
]

export const singleRaceData: RaceDataProps = {
    "id": 1,
    "name": "Beat the Clock to Yellow Rock",
    "active": true,
    "participants": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}