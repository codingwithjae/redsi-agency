import { Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";

const ToastContainer = lazy(() =>
    import("react-toastify").then((module) => ({
        default: module.ToastContainer,
    })),
);

export default function LazyToast() {
    return (
        <Suspense fallback={null}>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Suspense>
    );
}
