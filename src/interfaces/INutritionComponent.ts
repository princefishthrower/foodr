export default interface INutritionComponent {
    name: string;
        unit: string;
        value: number;
        valueWithPrecision: number;
        abbreviation: {
            unit: string;
            nutrient: string;
        }
}