import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CkeckoutForm from "./CkeckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={'Please pay first'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CkeckoutForm></CkeckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;