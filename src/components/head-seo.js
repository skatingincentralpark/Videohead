import Head from "next/head";

const HeadSEO = ({ title }) => {
  const siteTitle = `${title} - Videohead`;

  const shareGraphic =
    "https://instagram.fsyd1-1.fna.fbcdn.net/v/t51.2885-15/277776201_351319913610757_7760038692557131899_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fsyd1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=TCqe3e3UaYkAX9ByUnu&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgwODYyMjIyMDUwMTI2MjA4Ng%3D%3D.2-ccb7-5&oh=00_AT8YNqwUG1FtMObHcH65_LXTar8VJ0pc45nFViYEb4t8gw&oe=6315C0DB&_nc_sid=30a2ef";

  const favi = "/favicon.ico";

  const description =
    "Videohead is a creative production company based in Sydney telling stories in music videos, commercial and film.";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />

      <link rel="icon" href="/dummy-media/icon" sizes="any" />
      {/* <link preload="true" rel="icon" type="image/svg+xml" href={favi} />
      <link preload="true" rel="mask-icon" href={favi} color="#000000" /> */}
      {/* <link rel="apple-touch-icon" href="/dummy-media/icon" /> */}

      <link rel="preconnect" href="https://videohead.vercel.app/" />
      <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />

      <title>{siteTitle}</title>
      {description && <meta name="description" content={description} />}

      {siteTitle && (
        <>
          <meta property="og:title" content={siteTitle} />
          <meta name="twitter:title" content={siteTitle} />
        </>
      )}

      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}

      {shareGraphic && (
        <>
          <meta property="og:image" content={shareGraphic} />
          <meta name="twitter:image" content={shareGraphic} />
        </>
      )}

      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:site_name" content="Videohead" />
    </Head>
  );
};

export default HeadSEO;
