import { Container } from "./style";

export default function Card({ data, openPanel }) {

  const descriptionLength = data.description.length;
  let cardSize = 0;

  if (descriptionLength <= 100) {
    cardSize = 0;
  } else if (descriptionLength > 100 && descriptionLength <= 200) {
    cardSize = 1;
  } else if (descriptionLength > 200 && descriptionLength <= 300) {
    cardSize = 2;
  } else {
    cardSize = 3;
  }

  return (
      <div className={`level-${cardSize}`}>
        <Container color={data.color} onClick={e => openPanel(data.id)}>
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          </div>
          <div className="content">
            <div className="card-header">
              <h3>{data.title}</h3>
            </div>
            <div className="card-body" dangerouslySetInnerHTML={{__html: data.description}}></div>
          </div>
        </Container>
      </div>
  )
}
