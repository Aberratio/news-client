import Image from "next/image";
import { styled } from "styled-components";
import { PhotoItem } from "types/PhotoItem";

import { Modal } from "components/molecules/Modal/Modal";
import { useModal } from "components/molecules/Modal/useModal";

interface FullScreenImageProps {
  image: PhotoItem;
}

export const FullScreenImageModal = ({ image }: FullScreenImageProps) => {
  const { closeModal } = useModal("fullScreenImage");

  return (
    <Modal
      name="fullScreenImage"
      onClose={closeModal}
      size="vertical"
      title="Najnowszy numer"
    >
      <ImageWrapper>
        <Image
          src={image.path}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageWrapper>
    </Modal>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
