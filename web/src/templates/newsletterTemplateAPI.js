import { graphql } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
import Newsletter from "../components/LettreProAPI/newsletter";

export const query = graphql`
  query NewsletterTemplateQuery1($id: String!) {
    newsletter: sanityNewsletterApi(id: { eq: $id }) {
      titleNewsLetter
      slug
      titleArt1
      imgArt1 {
        asset {
          url
        }
      }
      article1
      titleArt2
      article2
      iconEdito {
        iconsGallery {
          asset {
            url
          }
        }
      }
      titleEdito
      articleEdito
      titleArt3
      article3p1
      article3p2
      titleArt4
      article4
      imgArt4 {
        asset {
          url
        }
      }
      titleArt5
      article5
      imgArt5 {
        asset {
          url
        }
      }
      titleArt6
      article6
      imgArt6 {
        asset {
          url
        }
      }
    }
  }
`;

const NewsLetterTemplate = (props) => {
  const { data, errors } = props;
  const news = data && data.newsletter;
  return (
    <Layout>
      {news && <Newsletter {...news} />}
    </Layout>
  );
};

export default NewsLetterTemplate;
