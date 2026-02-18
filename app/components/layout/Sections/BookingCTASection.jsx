import React from "react";
import PageHeading from "../../ui/PageHeading";
import Paragraph from "../../ui/Paragraph";
import ButtonPrimary from "../../ui/ButtonPrimary";

function BookingCTASection() {
  return (
    <section className="bg-surface-accent text-text-inverse px-[10vw] md:px-[20vw] py-20 flex flex-col gap-[5vh] text-center justify-center items-center">
      <PageHeading>Get started today.</PageHeading>
      <Paragraph>
        Ready to take the first step towards a happier, healthier you? Contact
        me to book your first session. I look forward to starting this
        therapeutic journey with you.
      </Paragraph>
      <ButtonPrimary variantType="light">Get in touch</ButtonPrimary>
    </section>
  );
}

export default BookingCTASection;

