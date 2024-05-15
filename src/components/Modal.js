const Modal = ({ onClose, children }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "80%",
          maxWidth: "400px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            float: "right",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "1.5em",
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
