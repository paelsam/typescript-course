export interface Power {
    id: number;
    desc: string;
    powerLevel: number;
}

const powers: Power[] = [
    {
        id: 1,
        desc: "Money",
        powerLevel: 1000,
    },
    {
        id: 2,
        desc: "Drugs",
        powerLevel: 2000,
    }
]

// Exportacion por defecto
export default powers;