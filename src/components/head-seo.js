import Head from "next/head";

const HeadSEO = ({ title, desc }) => {
  const siteTitle = `${title} - Videohead`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />

      <link rel="icon" href="/dummy-media/icon" sizes="any" />
      <link
        preload="true"
        rel="icon"
        type="image/svg+xml"
        href="/favicon.ico"
      />
      <link
        preload="true"
        rel="mask-icon"
        href="/favicon.ico"
        color="#000000"
      />
      <link
        preload="true"
        rel="icon"
        type="image/svg+xml"
        href="/dummy-media/icon"
      />
      <link
        preload="true"
        rel="mask-icon"
        href="/dummy-media/icon"
        color="#000000"
      />
      <link rel="apple-touch-icon" href="/dummy-media/icon" />

      <link rel="preconnect" href="https://videohead.vercel.app/" />
      <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />

      <title>{siteTitle}</title>
      {desc && <meta name="description" content={desc} />}

      {siteTitle && (
        <>
          <meta property="og:title" content={siteTitle} />
          <meta name="twitter:title" content={siteTitle} />
        </>
      )}

      {desc && (
        <>
          <meta property="og:description" content={desc} />
          <meta name="twitter:description" content={desc} />
        </>
      )}

      <>
        <meta
          property="og:image"
          content="https://media.istockphoto.com/photos/barbary-macaque-picture-id824860820?k=20&m=824860820&s=612x612&w=0&h=W8783ZGcqMfDMJoXvBAyDFcSjnOWdKqKhgLGvf-VIuU="
        />
        <meta
          name="twitter:image"
          content="https://media.istockphoto.com/photos/barbary-macaque-picture-id824860820?k=20&m=824860820&s=612x612&w=0&h=W8783ZGcqMfDMJoXvBAyDFcSjnOWdKqKhgLGvf-VIuU="
        />
      </>

      <meta property="og:type" content="website" />
      <meta
        name="twitter:card"
        content="https://media.istockphoto.com/photos/barbary-macaque-picture-id824860820?k=20&m=824860820&s=612x612&w=0&h=W8783ZGcqMfDMJoXvBAyDFcSjnOWdKqKhgLGvf-VIuU="
      />

      <meta property="og:site_name" content="Videohead" />
    </Head>
  );
};

export default HeadSEO;
