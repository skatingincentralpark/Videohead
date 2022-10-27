import styled from "@emotion/styled";
import HeadSEO from "../components/head-seo";

const ContactPage = () => {
  return (
    <>
      <HeadSEO title="Contact" />
      <ContactPageWrapper>
        <Bio>
          <div>Raghav Rampal</div>
          <div>
            Director / Founder
            <br />
            <a href="mailto: raghav@videohead.com.au">
              raghav@videohead.com.au
            </a>
            <br />
            +61 423 371 400
          </div>
          <div>
            Videohead is a video production company based in Sydney, Australia.
            We tell stories of some of Australia&apos;s most exciting creatives
          </div>
        </Bio>
        {/* <ContactFormWrapper>
        <ContactForm>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Type your message here" />
          <button>Submit</button>
        </ContactForm>
      </ContactFormWrapper> */}
      </ContactPageWrapper>
    </>
  );
};

export default ContactPage;

const ContactPageWrapper = styled.div`
  padding: calc(6rem + 7vw) var(--gap-l) var(--gap-l) var(--gap-l);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
`;

const Bio = styled.div`
  font-weight: 600;
  width: 28rem;
  margin: 0 var(--gap-l) var(--gap-l) 0;

  & > div:first-of-type {
    font-size: clamp(2rem, 1.4667rem + 1.6vw, 2.4rem);
    margin-bottom: 0.6em;
    color: orange;
  }
  & > div:nth-of-type(2) {
    font-size: clamp(1.3rem, 0.7667rem + 1.6vw, 1.7rem);
    line-height: 1.4em;
    margin-bottom: 1em;
  }
  & > div:nth-of-type(3) {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4em;
  }
`;

const ContactFormWrapper = styled.div`
  flex-grow: 1;
  max-width: 30rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: var(--gap-xs) var(--gap-s);
    margin-bottom: var(--gap-xs);
    border: 1px solid var(--ghost-white);
    background-color: #000;
    color: #fff;
    font-weight: 600;
  }

  button {
    background-color: var(--ghost-white);
    color: #fff;
    font-weight: 600;
    padding: var(--gap-xs) var(--gap-s);
  }
`;
