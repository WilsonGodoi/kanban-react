import Swal from "sweetalert2";

export default class AlertService {
  static success(message, title) {
    showAlert(title, message, "success");
  }

  static info(message, title) {
    showAlert(title, message, "info");
  }

  static error(message, title) {
    showAlert(title, message, "error");
  }

  static notYetImplemented() {
    showAlert("", "Funcionalidade ainda não implementada!", "info");
  }

  static confirm(message, title, accepFunction, rejectFunction) {
    Swal.fire({
      title,
      icon: "question",
      text: message,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#34A835",
      cancelButtonColor: "#E91224",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then((result) => {
      if (result.value) {
        accepFunction();
      } else if (rejectFunction) {
        rejectFunction();
      }
    });
  }
}

function showAlert(title, message, icon) {
  Swal.fire(title, message, icon);
}
