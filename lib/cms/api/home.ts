const topBanners = `
    query Banners {
        banners {
            data {
            id
            attributes {
                alt
                link
                sort
                visible
                url
            }
        }
  }
}
`;
const homeData = `
fragment recommendFields on Recommend {
  goodsSn
  goodsName
  price
  imgUrl
  alt
  unit
  sort
}
fragment articleFields on Article {
  title
  subtitle
  link
  sort
  important
  img {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }
}
fragment bannerFields on Banner {
  url
  link
  alt
}
query HomeData {
  banners(filters: { visible: { eq: true } }, sort: "sort:ASC") {
    data {
      id
      attributes {
        ...bannerFields
      }
    }
  }
  mainRecommend: recommends(filters: { important: { eq: true } }) {
    data {
      id
      attributes {
        ...recommendFields
      }
    }
  }
  recommends(filters: { important: { eq: false } }, sort: "sort:ASC") {
    data {
      id
      attributes {
        ...recommendFields
      }
    }
  }
  mainArticle: articles(filters: { important: { eq: true } }) {
    data {
      id
      attributes {
        ...articleFields
      }
    }
  }
  articles(filters: { important: { eq: false } }, sort: "sort:ASC") {
    data {
      id
      attributes {
        ...articleFields
      }
    }
  }
}
`;

const home = {
    topBanners,
    homeData,
};

export default home;
