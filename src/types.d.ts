

    type Drink = {
        idDrink: number;
        strDrink: string;
        strDrinkAlternate: null;
        strTags: null;
        strVideo: null;
        strCategory: string;
        strIBA: null;
        strAlcoholic: string;
        strGlass: string;
        strInstructions: string;
        strInstructionsES: null;
        strInstructionsDE: string;
        strInstructionsFR: null;
        strInstructionsIT: string;
        [strInstructionsZH-HANS]: null;
        [strInstructionsZH-HANT]: null;
        strDrinkThumb: string;
        strIngredient1: string;
        strIngredient2: string;
        strIngredient3: string;
        strIngredient4: null;
        strIngredient5: null;
        strIngredient6: null;
        strIngredient7: null;
        strIngredient8: null;
        strIngredient9: null;
        strIngredient10: null;
        strIngredient11: null;
        strIngredient12: null
        strIngredient13: null;
        strIngredient14: null;
        strIngredient15: null;
        strMeasure1: string;
        strMeasure2: null;
        strMeasure3: null;
        strMeasure4: null;
        strMeasure5: null;
        strMeasure6: null;
        strMeasure7: null;
        strMeasure8: null;
        strMeasure9: null;
        strMeasure10: null;
        strMeasure11: null;
        strMeasure12: null;
        strMeasure13: null;
        strMeasure14: null;
        strMeasure15: null;
        strImageSource: null;
        strImageAttribution: null;
        strCreativeCommonsConfirmed: string;
        dateModified: string;
    }

    type InitialStateType ={
        drinks: Drink[];
        drink: Drink | undefined;
        is_loading: boolean;
        getDrinks: () => void;
        getSingleDrink: (drinkId: number) => void,
    };