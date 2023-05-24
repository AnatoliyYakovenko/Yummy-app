import { createTheme } from '@mui/material/styles';

const commonOptions = {
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1280px',
  },
  fonts: {
    main: 'Poppins, sans-serif',
  },
  fontWeights: [400, 500, 600, 700],
  letterSpacings: {
    subheader: '-0.24px',
    content: '-0.02em',
  },
};

export const lightTheme = createTheme({
  ...commonOptions,
  colors: {
    mainDark: '#23262A',
    secondaryDark: '#3E4462',
    mainBlack: '#000000',
    mainWhite: '#FFFFFF',
    mainGrey: '#7E7E7E',
    secondaryGrey: '#656565',
    disabledGrey: '#BDBDBD',
    mainLight: '#FFFFFF',
    mainAccent: '#8BAA36',
    secondaryAccent: '#EBF3D4',
    mainNavLinkHover: '#23262A',
    mainHeaderText: '#22252A',
    mainBtnText: '#22252A',
    bodyBg: '#FAFAFA',
    footerBg: '#22252A',
    footerSMlinks: '#8BAA36',
    footerSMlinksHover: '#FAFAFA',
    footerBtnBg: '#8BAA36',
    footerCopyRight: 'rgba(34, 37, 42, 0.5)',
    mainBg: '#ECECEC',
    btnTextLight: '#FAFAFA',
    sectionHeader: '#001833',
    deleteBtnBg: '#8BAA36',
    deleteBtnIcon: '#FFFFFF',
    recipeBlockBtnBg: '#22252A',
    recipeBlockBg: '#FFFFFF',
    ingredientBlock: '#ebf3d4',
    paginationBg: '#EBF3D4',
    paginationText: '#656565',
    paginationShadow: '0px 4px 4px rgba(135, 135, 135, 0.2)',
    preparationText: 'rgba(0, 0, 0, 0.8)',
    mainSearchInput: '#FFFFFF',
    userName: '#22252A',
    searchSelectBg: '#FFFFFF',
    searchSelectText: 'rgba(0, 0, 0, 0.5)',
    searchDropDownBg: '#FFFFFF',
    searchBtn: '#8BAA36',
    tooltipbg: '#EBF3D4',
    ingredientsBgrCol: '#EBF3D4',
    counter: '#3333334c',
    breakfastRecipes: '#FAFAFA',
    searchInputText: '#3E4462',
    searchInputBtnBg: '#8BAA36',
    searchInputBtnTx: '#FAFAFA',
    searchInputBorder: 'rgba(250, 250, 250, 0.5)',
    searchInputShadow: 'rgba(34, 37, 42, 0.03)',
    searchTypeBg: '#D9D9D9',
    searchTypeOp: '#FAFAFA',
    searchTypeBorder: 'transparent',
    searchTypeTx: '#000000',
    mainSerchHoverText: '#ffffff',
    searchFormHoverBtn: '#23262A',
    mainGreyBg: '#D9D9D9',
    secondaryGreyBg: '#C4C4C4',
    btnHoverBg: '#22252A',
    btnHoverText: '#22252A',
    iconHover: ' #1E1F28',
    iconColor: '#333333',
    switchBg: '#EFEFEF',
    burgerRecipeBtn: '#23262A',
    linkHover: '#2196f3',
    userNameHeader: '#22252A',
    categoryLine: '#E0E0E0',
    categoriesMainText: '#E0E0E0',
    shoppingListImgWrapper: '#EBF3D4',
    shoppingIngredientBorder: '#E0E0E0',
    logoModalBg: '#FAFAFA',
    btnHoverRevers: '#23262A',
    otherCategoriesBtn: 'transparent',
    borderModal: '#FAFAFA',
  },
});

export const darkTheme = createTheme({
  ...commonOptions,
  colors: {
    mainDark: '#FAFAFA',
    secondaryDark: '#FAFAFA',
    mainBlack: '#FFFFFF',
    mainWhite: '#000000',
    mainGrey: '#7E7E7E',
    secondaryGrey: '#656565',
    disabledGrey: 'rgba(255, 255, 255, 0.5)',
    mainLight: '#FAFAFA',
    mainAccent: '#8BAA36',
    secondaryAccent: '#1E1F28',
    mainNavLinkHover: '#FFFFFF',
    mainHeaderText: '#FAFAFA',
    mainBtnText: '#FAFAFA',
    bodyBg: '#1E1F28',
    footerBg: '#8BAA36',
    footerSMlinks: '#FAFAFA',
    footerBtnBg: '#23262A',
    footerCopyRight: 'rgba(255, 255, 255, 0.5)',
    footerSMlinksHover: '#23262A',
    deleteBtnBg: '#22252A',
    deleteBtnIcon: '#FFFFFF',
    recipeBlockBtnBg: '#8BAA36',
    recipeBlockBg: '#2A2C36',
    ingredientBlock: '#2A2C36',
    paginationBg: '#8BAA36',
    paginationText: 'rgba(255, 255, 255, 0.6)',
    mainSearchInput: '#2A2C36',
    paginationShadow: '0px 4px 4px rgba(31, 30, 30, 0.2)',
    preparationText: '#FAFAFA',
    userName: '#22252A',
    searchSelectBg: 'transparent',
    searchSelectText: '#FAFAFA',
    searchInputBtnBg: '#8BAA36',
    searchInputBtnTx: '#FAFAFA',
    searchDropDownBg: '#8BAA36',
    searchInputText: 'rgba(250, 250, 250, 0.5)',
    searchBtn: '#22252A',
    searchInputBorder: 'rgba(250, 250, 250, 0.5)',
    searchInputShadow: 'rgba(0, 0, 0, 0.25)',
    searchTypeBg: 'transparent',
    searchTypeOp: '#8BAA36',
    searchTypeBorder: 'rgba(250, 250, 250, 0.2)',
    searchTypeTx: '#FAFAFA',
    tooltipbg: '#8BAA36',
    ingredientsBgrCol: '#2A2C36',
    counter: '#FAFAFA',
    breakfastRecipes: '#2A2C36',
    mainSerchHoverText: '#8BAA36',
    searchFormHoverBtn: '#FFFFFF',
    mainBg: '#ECECEC',
    btnTextLight: '#FAFAFA',
    sectionHeader: '#FAFAFA',
    mainGreyBg: '#D9D9D9',
    secondaryGreyBg: '#C4C4C4',
    btnHoverBg: '#22252A',
    btnHoverText: '#8BAA36',
    iconHover: ' #1E1F28',
    iconColor: '#FAFAFA',
    switchBg: '#EFEFEF',
    burgerRecipeBtn: '#23262A',
    linkHover: '#2196f3',
    userNameHeader: '#7E7E7E',
    categoryLine: 'rgba(250, 250, 250, 0.2)',
    categoriesMainText: 'rgba(250, 250, 250, 0.6)',
    shoppingListImgWrapper: '#2A2C36',
    shoppingIngredientBorder: 'rgba(250, 250, 250, 0.3)',
    logoModalBg: '#1E1F28',
    btnHoverRevers: '#8BAA36',
    otherCategoriesBtn: 'transparent',
  },
});
