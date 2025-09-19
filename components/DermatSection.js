import Image from 'next/image';
import Link from 'next/link';

export default function DermatSection() {
  return (
    <section className="dermat">
      <div className="container">
        <div className="row gx-4 gy-4">
          <div className="col-lg-6 dermat-left">
            <p className="dermat-top-text">Backed by Science</p>
            <h2>Dermatologist Tested.</h2>
            <h2>Clinically Approved.</h2>
            <p>Every Avyya product goes through regorous dermatological testing to ensure it's safe, gentle, and effective for all skin types - even the most sensitive.</p>
            <div className="row gx-3">
              <div className="col-lg-4">
                <div className="dermat-item">
                  <Image src="/images/skin-safe.webp" alt="skin safe" width={100} height={100} className="img-fluid" />
                  <div className="dermat-item-text">
                    <strong>Skin Safe</strong>
                    <p>Gentle for all skin types</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dermat-item">
                  <Image src="/images/clinically-tested.webp" alt="Clinically Tested" width={100} height={100} className="img-fluid" />
                  <div className="dermat-item-text">
                    <strong>Clinically Tested</strong>
                    <p>Validated by Dermatologists</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dermat-item">
                  <Image src="/images/plant-based.webp" alt="Plant Based" width={100} height={100} className="img-fluid" />
                  <div className="dermat-item-text">
                    <strong>Plant Based</strong>
                    <p>No harsh Chemicals</p>
                  </div>
                </div>
              </div>
            </div>
            <p><Link href="#" target="_blank">Learn about our Dermat Series</Link></p>
          </div>
          <div className="col-lg-6">
            <Image src="/images/dermat.webp" className="img-fluid" alt="dermat" width={600} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
}