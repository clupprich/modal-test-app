import { useState } from "react";
import { Card } from "@shopify/polaris";
import { Modal } from "@shopify/app-bridge-react";

export function ModalCard() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  return (
    <>
      <Card
        title="Modal"
        sectioned
        primaryFooterAction={{
          content: "Show Modal",
          onAction: handleShowModal
        }}
      ></Card>
      <Modal title="Test" src="/api/products/count" open={showModal} />
    </>
  );
}
