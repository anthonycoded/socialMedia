import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import SuccessModal from "../src/components/Modals/SuccessModal";
import ErrorModal from "../src/components/Modals/ErrorModal";
import DeleteModal from "../src/components/Modals/DeleteModal";
import { useDispatch } from "react-redux";

const StatusHandler = ({
  status,
  setStatus,
  navigation,
  deleteItem,
  state,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(undefined);

  console.log(state, status);

  function closeModal() {
    setShowSuccessModal(false);
    setStatus({
      ...status,
      showSuccess: false,
      message: undefined,
      loading: false,
    });
    if (navigation != undefined) {
      navigation.goBack();
    }
  }
  function closeErrorModal() {
    setShowError(false);
    setStatus({
      ...status,
      showError: false,
      error: undefined,
      loading: false,
    });
    if (navigation != undefined) {
      navigation.goBack();
    }
  }

  function closeDelete() {
    setShowDelete(false);
    setStatus({
      ...status,
      showDelete: false,
      message: undefined,
      loading: false,
    });
    if (navigation != undefined) {
      navigation.goBack();
    }
  }

  function DeleteItem() {
    deleteItem();
    setStatus({
      ...status,
      showDelete: false,
      message: undefined,
      loading: false,
    });
    setShowDelete(false);
  }

  useEffect(() => {
    if (state?.status == true) {
      setShowSuccessModal(true);
    }
    if (state?.message) {
      setMessage(state?.message);
    }
    if (state?.error) {
      setShowError(true);
      setError(state?.error);
    }
    if (state?.deleteStatus) {
      setShowSuccessModal(true);
    }
    if (status?.showDelete) {
      setShowDelete(true);
    }
  }, [state, status]);

  return (
    <>
      {showSuccessModal || showError || showDelete ? (
        <View style={{ width: "100%", height: "100%" }}>
          <SuccessModal
            showSuccessModal={showSuccessModal}
            closeModal={closeModal}
            message={message}
          ></SuccessModal>
          <ErrorModal
            error={error}
            showErrorModal={showError}
            closeErrorModal={closeErrorModal}
          ></ErrorModal>
          <DeleteModal
            showDeleteModal={showDelete}
            closeDelete={closeDelete}
            deleteItem={DeleteItem}
          ></DeleteModal>
        </View>
      ) : undefined}
    </>
  );
};

export default StatusHandler;
