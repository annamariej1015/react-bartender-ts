/*{
    idDrink:"15997",
    strDrink:"GG",
    strDrinkAlternate:null,
    strTags:null,
    strVideo:null,
    strCategory:"Ordinary Drink",
    strIBA:null,
    strAlcoholic:"Optional alcohol",
    strGlass:"Collins Glass",
    strInstructions:"Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
    strInstructionsES:null,
    strInstructionsDE:"Den Galliano-Lik\u00f6r \u00fcber Eis gie\u00dfen. F\u00fcllen Sie den Rest des Glases mit Ginger Ale und das ist alles, was dazu geh\u00f6rt. Du hast jetzt ein eigenes GG.",
    strInstructionsFR:null,
    strInstructionsIT:"Versare il liquore Galliano su ghiaccio.\r\nRiempi il resto del bicchiere con ginger ale e questo \u00e8 tutto.\r\nOra hai il tuo GG personale.",
    strInstructionsZH-HANS:null,
    strInstructionsZH-HANT:null,
    strDrinkThumb: I "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vyxwut1468875960.jpg",strIngredient1:"Galliano",
    strIngredient2:"Ginger ale",
    strIngredient3:"Ice",
    strIngredient4:null,
    strIngredient5:null,
    strIngredient6:null,
    strIngredient7:null,
    strIngredient8:null,
    strIngredient9:null,
    strIngredient10:null,
    strIngredient11:null,
    strIngredient12:null,
    strIngredient13:null,
    strIngredient14:null,
    strIngredient15:null,
    strMeasure1:"2 1\/2 shots ",
    strMeasure2:null,
    strMeasure3:null,
    strMeasure4:null,
    strMeasure5:null,
    strMeasure6:null,
    strMeasure7:null,
    strMeasure8:null,
    strMeasure9:null,
    strMeasure10:null,
    strMeasure11:null,
    strMeasure12:null,
    strMeasure13:null,
    strMeasure14:null,
    strMeasure15:null,
    strImageSource:null,
    strImageAttribution:null,
    strCreativeCommonsConfirmed:"No",
    dateModified:"2016-07-18 22:06:00"}
    */

    type Drinks = {
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
        drinks: Drinks[];
        drink: Drinks[] | undefined;
        is_loading: boolean;
        getDrinks: () => void;
        getSingleDrink: (drinkId: number) => void,
    };