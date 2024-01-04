export interface CustomTheme {
  general: {
    borderRadius: string;
    errorMessageColor: string;
  };
  buttons: {
    primary: {
      backgroundColor: string;
      backgroundOppositeColor: OppositeColor;
      borderColor: string;
      disabledBackgroundColor: string;
      disabledBackgroundOppositeColor: string;
      onHoverBackgroundColor: string;
      onHoverBackgroundOppositeColor: OppositeColor;
    };
    secondary: {
      backgroundColor: string;
      backgroundOppositeColor: OppositeColor;
      borderColor: string;
      disabledBackgroundColor: string;
      disabledBackgroundOppositeColor: string;
      onHoverBackgroundColor: string;
      onHoverBackgroundOppositeColor: OppositeColor;
    };
    tertiary: {
      backgroundColor: string;
      backgroundOppositeColor: OppositeColor;
      borderColor: string;
      disabledBackgroundColor: string;
      disabledBackgroundOppositeColor: string;
      onHoverBackgroundColor: string;
      onHoverBackgroundOppositeColor: OppositeColor;
    };
    link: {
      color: string;
      onHoverColor: string;
    };
  };
  modals: {
    backgroundColor: string;
    backgroundOppositeColor: OppositeColor;
    specialAccentColor: string;
    specialAccentOppositeColor: OppositeColor;
  };
  forms: {
    primary: {
      labelColor: string;
    };
  };
}

export type OppositeColor = "white" | "black";
