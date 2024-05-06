import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from "@capacitor/camera"
import {Filesystem, Directory} from "@capacitor/filesystem"


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public photos: UserPhoto[]=[]
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: "soon",
      webviewPath: capturedPhoto.webPath!
    })

    return capturedPhoto;
  }
}

export interface UserPhoto{
  filepath: string
  webviewPath?: string
}
