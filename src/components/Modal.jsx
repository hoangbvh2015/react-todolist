import { Children, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ Children }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      // ... your methods ...
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>{Children}</dialog>,
    document.querySelector("#modal-root")
  );
});

export default Modal;
