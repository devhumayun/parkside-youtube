import MaxWidthWrapper from "@/components/max-width-wrapper";
import CheckoutComponent from "./_components/checkout-component";

const CheckoutPage = ({ params: { lang } }) => {
  return (
    <>
      <MaxWidthWrapper>
        <CheckoutComponent lang={lang} />
      </MaxWidthWrapper>
    </>
  );
};

export default CheckoutPage;
