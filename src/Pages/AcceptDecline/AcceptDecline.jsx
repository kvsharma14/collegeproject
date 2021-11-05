import { Card } from "../../Component";
import { Nav, Footer } from "../../Component";
export function AcceptDecline() {
  return (
    <>
      <Nav />
      <div className="AcceptDecline">
        <h1 className="heading_style"> Request Pending </h1>
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}
