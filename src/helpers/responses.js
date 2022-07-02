import iziToast from "izitoast";
const showMessage = (title, message, backgroundColor) => {
    return iziToast.show({
        title, message,
        backgroundColor,
        position: 'topRight',
        titleColor: '#fff',
        messageColor: '#fff'
    });
}


export default showMessage;