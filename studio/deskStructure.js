import S from "@sanity/desk-tool/structure-builder";
import { getDocumentNodeWithViews } from "./plugins/views-in-schema/documentNodeWithViews";
import { CogIcon, EditIcon, EyeOpenIcon, DocumentIcon } from "@sanity/icons";
import { JsonView } from "./components/views/JsonView";
import { SocialMediaView } from "./components/views/SocialMediaView";

export const getDefaultDocumentNode = getDocumentNodeWithViews;

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Youtube Videos")
        .schemaType("youtubeVideo")
        .child(S.documentTypeList("youtubeVideo").title("Youtube Videos")),
      S.divider(),
      S.listItem()
        .title("Music Videos")
        .schemaType("musicVideo")
        .child(S.documentTypeList("musicVideo").title("Music Videos")),
      S.listItem()
        .title("Film Videos")
        .schemaType("filmVideo")
        .child(S.documentTypeList("filmVideo").title("Film Videos")),
      S.listItem()
        .title("Commercial Videos")
        .schemaType("commercialVideo")
        .child(
          S.documentTypeList("commercialVideo").title("Commercial Videos")
        ),
      S.listItem()
        .title("Settings")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .views([
              S.view.form().title("Edit").icon(EditIcon),
              S.view
                .component(SocialMediaView)
                .title("Preview")
                .icon(EyeOpenIcon),
              S.view.component(JsonView).title("JSON").icon(DocumentIcon),
            ])
        ),
    ]);
