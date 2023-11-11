import Swal from "sweetalert2";

export const environment = {
	firebase: {
		projectId: "pp-111655",
		appId: "1:208385660817:web:b57815129e17a71935ac30",
		storageBucket: "pp-111655.appspot.com",
		apiKey: "AIzaSyDaL9WEBpNa4VbwUe5gThW5IFkThaoy2oU",
		authDomain: "pp-111655.firebaseapp.com",
		messagingSenderId: "208385660817"
	}
}

export const ToastSuccess = Swal.mixin({
	icon: 'success',
	background: '#a5dc86',
	toast: true,
	position: 'top-right',
	iconColor: 'white',
	showConfirmButton: false,
	timer: 1500,
});

export const ToastWarning = Swal.mixin({
	icon: 'warning',
	background: '#3fc3ee',
	toast: true,
	position: 'top-right',
	iconColor: 'white',
	showConfirmButton: false,
	timer: 1500,
});

export const ToastError = Swal.mixin({
	icon: 'error',
	background: '#f27474',
	toast: true,
	position: 'top-right',
	iconColor: 'white',
	showConfirmButton: false,
	timer: 1500,
});

export const ToastInfo = Swal.mixin({
	icon: 'info',
	background: '#0dcaf0',
	toast: true,
	position: 'top-right',
	iconColor: 'white',
	showConfirmButton: false,
	timer: 1500,
});

export const Loader = Swal.mixin({
	allowEscapeKey: false,
	allowOutsideClick: false,
	didOpen: () => {
		Swal.showLoading();
	}
});