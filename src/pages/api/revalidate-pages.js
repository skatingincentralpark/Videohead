import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

export default async function handler(req, res) {
  //authenticating the webhook
  try {
    if (req.method !== "POST")
      return res.status(401).json({ message: "Must be a POST request" });

    if (!process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET)
      return res
        .status(401)
        .json({ message: "Webhook secret not configured properly" });

    const signature = req?.headers[SIGNATURE_HEADER_NAME]?.toString();

    if (!signature)
      return res.status(401).json({ message: "Signature doesn't exist" });

    if (
      !isValidSignature(
        JSON.stringify(req.body),
        signature,
        process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET
      )
    )
      return res.status(401).json({ message: "Invalid request!" });

    //getting payload
    const {
      body: { type, category, slug = "" },
    } = req;

    const defaultMessage = {
      message: `Revalidated "${type}" with slug "${slug}."`,
    };

    await res.revalidate(`/raghavrampal`);
    await res.revalidate(`/work`);
    return res.json(`${defaultMessage}`);
    // switch (category) {
    //   case "personal":
    //     await res.revalidate(`/raghavrampal`);
    //     return res.json(`${defaultMessage}  Updated /raghavrampal`);
    //   default:
    //     await res.revalidate(`/work`);
    //     return res.json(`${defaultMessage} Updated /work`);
    // }
  } catch (error) {
    res.status(500).json({ message: "Something went Wrong!" });
  }
}
