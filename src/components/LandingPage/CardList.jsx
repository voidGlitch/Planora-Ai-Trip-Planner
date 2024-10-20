import { Panel } from "rsuite";
import "./style.css";
export default function CardList() {
  const images = [
    {
      src: "/kash.jpg",
      title: "Kashmir",
      description:
        "A picturesque region known for its stunning landscapes, lush valleys, and vibrant culture.",
      date: "2023-01-01",
    },
    {
      src: "/kheer.jpg",
      title: "Kheerganga",
      description:
        "A scenic trekking destination famous for its hot springs and breathtaking views of the Himalayas.",
      date: "2023-02-01",
    },
    {
      src: "/Taj.jpg",
      title: "Taj Mahal",
      description:
        "An iconic white marble mausoleum, symbolizing love, and one of the Seven Wonders of the World.",
      date: "2023-03-01",
    },
    {
      src: "/IndiaGate.jpg",
      title: "India Gate",
      description:
        "A monumental archway in New Delhi, honoring the soldiers who died in World War I.",
      date: "2023-04-01",
    },
    {
      src: "/delhi2.jpg",
      title: "Red Fort",
      description:
        "A UNESCO World Heritage Site, this historic fort represents Mughal architecture in Delhi.",
      date: "2023-05-01",
    },
    {
      src: "/Prem.jpg",
      title: "Prem Mandir",
      description:
        "A beautiful temple in Vrindavan, known for its intricate carvings and vibrant devotional atmosphere.",
      date: "2023-06-01",
    },
  ];

  return (
    <div className="tab library">
      {images.map((item, index) => (
        <div className="animation-show" key={index}>
          <Panel
            shaded
            bordered
            bodyFill
            style={{ display: "inline-block", width: 240, margin: "10px" }}
          >
            <img src={item.src} alt={item.title} height="180" />
            <Panel
              header={
                <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                  {item.title}
                </span>
              }
            >
              <p>
                <small style={{ fontSize: "1.1em" }}>{item.description}</small>
              </p>
              <p>
                <small style={{ fontSize: "1em", fontStyle: "italic" }}>
                  <em>{item.date}</em>
                </small>
              </p>
            </Panel>
          </Panel>
        </div>
      ))}
    </div>
  );
}
