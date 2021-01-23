
export type Item = typeof Items[number];

export interface Ingredient {
    item: Item;
    quantity: number;
}

export interface Recipe {
    yields: number;
    ingredients?: Ingredient[];
    alternate?: Ingredient[];
}

export interface Recipes {
    [Item: string]: Recipe | undefined;
}

export const Items = [
    "Circuit board",
    "Coal ore",
    "Copper ingot",
    "Copper ore",
    "Crude oil",
    "Electric motor",
    "Electromagnetic turbine",
    "Gear",
    "Graphene",
    "Graphite",
    "High-purity silicon",
    "Interstellar logistics station",
    "Iron ingot",
    "Iron ore",
    "Logistics station",
    "Magnet",
    "Magnetic coil",
    "Microcrystalline component",
    "Particle container",
    "Processor",
    "Refined oil",
    "Silicon ore",
    "Steel",
    "Stone ore",
    "Sulfuric acid",
    "Titanium alloy",
    "Titanium ingot",
    "Titanium ore",
    "Water"
] as const;

export const recipes: Recipes = {
    "Circuit board": {
        yields: 2,
        ingredients: [
            {
                item: "Iron ingot",
                quantity: 2
            },
            {
                item: "Copper ingot",
                quantity: 1
            },
        ]
    },
    "Copper ingot": {
        yields: 1,
        ingredients: [
            {
                item: "Copper ore",
                quantity: 1
            },
        ]
    },
    "Electric motor": {
        yields: 1,
        ingredients: [
            {
                item: "Iron ingot",
                quantity: 2
            },
            {
                item: "Gear",
                quantity: 1
            },
            {
                item: "Magnetic coil",
                quantity: 1
            },
        ]
    },
    "Electromagnetic turbine": {
        yields: 1,
        ingredients: [
            {
                item: "Electric motor",
                quantity: 2
            },
            {
                item: "Magnetic coil",
                quantity: 2
            },
        ]
    },
    "Gear": {
        yields: 1,
        ingredients: [
            {
                item: "Iron ingot",
                quantity: 1
            },
        ]
    },
    "Graphene": {
        yields: 2,
        ingredients: [
            {
                item: "Graphite",
                quantity: 3
            },
            {
                item: "Sulfuric acid",
                quantity: 1
            },
        ]
    },
    "Graphite": {
        yields: 1,
        ingredients: [
            {
                item: "Coal ore",
                quantity: 2
            },
        ]
    },
    "Iron ingot": {
        yields: 1,
        ingredients: [
            {
                item: "Iron ore",
                quantity: 1
            },
        ]
    },
    "High-purity silicon": {
        yields: 1,
        ingredients: [
            {
                item: "Silicon ore",
                quantity: 2
            },
        ]
    },
    "Interstellar logistics station": {
        yields: 1,
        ingredients: [
            {
                item: "Logistics station",
                quantity: 1
            },
            {
                item: "Titanium alloy",
                quantity: 50
            },
            {
                item: "Particle container",
                quantity: 20
            },
        ]
    },
    "Logistics station": {
        yields: 1,
        ingredients: [
            {
                item: "Steel",
                quantity: 50
            },
            {
                item: "Titanium ingot",
                quantity: 50
            },
            {
                item: "Processor",
                quantity: 50
            },
            {
                item: "Particle container",
                quantity: 20
            },
        ]
    },
    "Magnet": {
        yields: 1,
        ingredients: [
            {
                item: "Iron ore",
                quantity: 1
            },
        ]
    },
    "Magnetic coil": {
        yields: 2,
        ingredients: [
            {
                item: "Magnet",
                quantity: 2
            },
            {
                item: "Copper ingot",
                quantity: 1
            },
        ]
    },
    "Microcrystalline component": {
        yields: 1,
        ingredients: [
            {
                item: "High-purity silicon",
                quantity: 2
            },
            {
                item: "Copper ingot",
                quantity: 1
            },
        ]
    },
    "Particle container": {
        yields: 1,
        ingredients: [
            {
                item: "Electromagnetic turbine",
                quantity: 2
            },
            {
                item: "Copper ingot",
                quantity: 2
            },
            {
                item: "Graphene",
                quantity: 2
            },
        ]
    },
    "Processor": {
        yields: 1,
        ingredients: [
            {
                item: "Circuit board",
                quantity: 2
            },
            {
                item: "Microcrystalline component",
                quantity: 2
            },
        ]
    },
    "Refined oil": {
        yields: 2,
        ingredients: [
            {
                item: "Crude oil",
                quantity: 2
            },
        ]
    },
    "Steel": {
        yields: 1,
        ingredients: [
            {
                item: "Iron ingot",
                quantity: 3
            },
        ]
    },
    "Sulfuric acid": {
        yields: 4,
        ingredients: [
            {
                item: "Refined oil",
                quantity: 6
            },
            {
                item: "Stone ore",
                quantity: 8
            },
            {
                item: "Water",
                quantity: 4
            },
        ]
    },
    "Titanium alloy": {
        yields: 4,
        ingredients: [
            {
                item: "Titanium ingot",
                quantity: 4
            },
            {
                item: "Steel",
                quantity: 4
            },
            {
                item: "Sulfuric acid",
                quantity: 8
            },
        ]
    },
    "Titanium ingot": {
        yields: 1,
        ingredients: [
            {
                item: "Titanium ore",
                quantity: 2
            },
        ]
    },
}

