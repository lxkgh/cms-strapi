const allArticles = `
    query Articles {
        articles {
            data {
            id
            attributes {
                title
                link
                sort
                important
                subtitle
                img {
                    data {
                        id
                        attributes {
                        url
                        alternativeText
                        }
                    }
                }
            }
        }
  }
}
`;

const articles = {
    allArticles,
};

export default articles;
