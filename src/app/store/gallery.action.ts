import { createAction, props } from "@ngrx/store";
import { GalleryModel } from "../gallery/gallery.model";

export const retrievedGalleryList = createAction(
    "[Gallery API] Gallery API Sucess",
    props<{allGallery:GalleryModel[]}>()
);