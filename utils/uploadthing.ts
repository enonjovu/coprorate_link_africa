import { generateComponents } from '@uploadthing/react';
import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';

import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const { UploadButton, UploadDropzone, Uploader } = generateComponents<OurFileRouter>();

export const UploadThingButton = generateUploadButton<OurFileRouter>();
export const UploadThingDropzone = generateUploadDropzone<OurFileRouter>();
