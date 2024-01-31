import SectionTitle from "../Common/SectionTitle";

const ServiceSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Services Offered" center mb="80px" />
        <div className="-mx-4 grid grid-cols-12 gap-6">
          <div className=" px-8 md:col-span-6 col-span-12 shadow-md ">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="mb-9 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                <div className="mb-4">
                  <h4 className="font-bold text-primary">
                    Trust And Reliability
                  </h4>
                  <p>Ensuring Secure And Timely Deliveries Every Time.</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-primary">
                    Customer-centric Approach
                  </h4>
                  <p>
                    Tailoring Services To Meet The Unique Needs Of Each Client.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-primary">
                    Innovative Solutions
                  </h4>
                  <p>
                    Continuously Evolving To Provide Efficient And Effective
                    Logistics Solutions.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-primary">
                    Global Connectivity
                  </h4>
                  <p>
                    Bridging Distances Through Our Expansive International
                    Network.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-primary">
                    Trust And Reliability
                  </h4>
                  <p>Ensuring Secure And Timely Deliveries Every Time.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 md:col-span-6 col-span-12 shadow-md">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                <div className="mb-4">
                  <h4 className="font-bold text-primary">Document Delivery</h4>
                  <p>
                    Specialized Services For Embassies And Corporate Clients For
                    The Secure Transfer Of Documents.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-primary">B2b Logistics</h4>
                  <p>
                    Tailored Solutions For Businesses To Streamline Their
                    Operations.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-primary">B2c Deliveries</h4>
                  <p>
                    Efficient And Reliable Delivery Services Directly To
                    Customers.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-primary">
                    International Small Package Delivery
                  </h4>
                  <p>
                    Expert Handling Of Small Parcels To Various International
                    Destinations.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-primary">
                    Customized Logistics Solutions
                  </h4>
                  <p>
                    Adaptable Services To Meet Unique Logistical Challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionThree;
