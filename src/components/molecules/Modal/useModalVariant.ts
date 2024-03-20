export interface ModalSize {
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}

interface ModalSizeVariants {
  vertical: ModalSize;
}

export const ModalSizeVariant: Record<string, string> = {
  small: "small",
  vertical: "vertical",
  large: "large",
  fullScreen: "fullScreen",
};

const modalSizeVariant: ModalSizeVariants = {
  vertical: {
    width: "70vh",
    height: "90vh",
  },
};

export const useModalVariant = () => {
  const getModalVariant = (variant: keyof typeof ModalSizeVariant) => {
    return modalSizeVariant[variant as keyof ModalSizeVariants];
  };

  return {
    getModalVariant,
  };
};
